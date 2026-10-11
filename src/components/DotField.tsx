'use client';

import { useEffect, useRef } from 'react';

// Loose dots that keep trying to form a grid. Each dot has a home on the
// lattice and is pulled back to it by a spring. Gusts, the pointer and the
// odd dot wandering off keep pulling the grid apart, and it keeps re-forming.
// Mesh lines are drawn only between neighbours that are both near home, so
// the mesh tears where the grid is disturbed and heals as it settles.

type Dot = {
  hx: number; // home
  hy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
  loose: number; // seconds left wandering
  accent: boolean;
};

const SPACING = 46;
const DOT = 'rgba(180, 206, 198, 0.55)';
const DOT_LOOSE = 'rgba(242, 247, 244, 0.95)';
const DOT_ACCENT = 'rgba(237, 168, 31, 0.95)';
const LINE_NEAR = 'rgba(180, 206, 198, 0.13)';
const LINE_MID = 'rgba(180, 206, 198, 0.06)';

export function DotField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !host || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = { x: 0, y: 0, active: false };
    let dots: Dot[] = [];
    let cols = 0;
    let rows = 0;
    let width = 0;
    let height = 0;
    let frame = 0;
    let last = 0;
    let elapsed = 0;
    let nextGust = 4;
    let visible = true;
    let firstBuild = true;

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.floor(width / SPACING) + 2;
      rows = Math.floor(height / SPACING) + 2;
      const originX = (width - (cols - 1) * SPACING) / 2;
      const originY = (height - (rows - 1) * SPACING) / 2;
      const scatter = firstBuild && !reduceMotion.matches;

      dots = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const hx = originX + c * SPACING;
          const hy = originY + r * SPACING;
          dots.push({
            hx,
            hy,
            // On first load the dots start scattered and find the grid.
            x: scatter ? Math.random() * width : hx,
            y: scatter ? Math.random() * height : hy,
            vx: 0,
            vy: 0,
            phase: Math.random() * Math.PI * 2,
            loose: 0,
            accent: Math.random() < 0.035,
          });
        }
      }
      firstBuild = false;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Mesh lines to the right-hand and lower neighbour.
      const near: number[] = [];
      const mid: number[] = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const a = dots[r * cols + c];
          const da = Math.abs(a.x - a.hx) + Math.abs(a.y - a.hy);
          if (da > 26) continue;
          const neighbours = [c + 1 < cols ? dots[r * cols + c + 1] : null, r + 1 < rows ? dots[(r + 1) * cols + c] : null];
          for (const b of neighbours) {
            if (!b) continue;
            const d = da + Math.abs(b.x - b.hx) + Math.abs(b.y - b.hy);
            if (d < 14) near.push(a.x, a.y, b.x, b.y);
            else if (d < 34) mid.push(a.x, a.y, b.x, b.y);
          }
        }
      }
      ctx.lineWidth = 1;
      for (const [segments, colour] of [
        [near, LINE_NEAR],
        [mid, LINE_MID],
      ] as const) {
        ctx.strokeStyle = colour;
        ctx.beginPath();
        for (let i = 0; i < segments.length; i += 4) {
          ctx.moveTo(segments[i], segments[i + 1]);
          ctx.lineTo(segments[i + 2], segments[i + 3]);
        }
        ctx.stroke();
      }

      // Dots, batched by colour.
      const passes: [string, number, (d: Dot) => boolean][] = [
        [DOT, 1.35, (d) => !d.accent && d.loose <= 0],
        [DOT_LOOSE, 1.7, (d) => !d.accent && d.loose > 0],
        [DOT_ACCENT, 2, (d) => d.accent],
      ];
      for (const [colour, radius, pick] of passes) {
        ctx.fillStyle = colour;
        ctx.beginPath();
        for (const d of dots) {
          if (!pick(d)) continue;
          ctx.moveTo(d.x + radius, d.y);
          ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
        }
        ctx.fill();
      }
    };

    const step = (now: number) => {
      frame = requestAnimationFrame(step);
      const dt = Math.min((now - (last || now)) / 1000, 0.033);
      last = now;
      elapsed += dt;
      const n = dt * 60; // frames at 60Hz, so the motion is refresh-rate independent

      // The pull home starts weak, so the grid forms gradually on load.
      const settle = Math.min(elapsed / 2.4, 1);
      const pull = 0.004 + 0.028 * settle * settle;
      const damping = Math.pow(0.9, n);

      // A gust scatters one patch of the grid every few seconds.
      if (elapsed > nextGust) {
        nextGust = elapsed + 5 + Math.random() * 4;
        const gx = Math.random() * width;
        const gy = Math.random() * height;
        const reach = 190 + Math.random() * 120;
        for (const d of dots) {
          const dx = d.x - gx;
          const dy = d.y - gy;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist > reach) continue;
          const push = (1 - dist / reach) * 9;
          d.vx += (dx / dist) * push + (Math.random() - 0.5) * 2;
          d.vy += (dy / dist) * push + (Math.random() - 0.5) * 2;
          d.loose = Math.max(d.loose, 0.6 + Math.random() * 1.2);
        }
      }

      for (const d of dots) {
        // Now and then a dot lets go of the grid and wanders.
        if (d.loose <= 0 && Math.random() < 0.028 * dt) {
          d.loose = 3 + Math.random() * 3.5;
          d.vx += (Math.random() - 0.5) * 2.6;
          d.vy += (Math.random() - 0.5) * 2.6;
        }
        if (d.loose > 0) d.loose -= dt;

        // Home itself breathes a little, so a settled grid is never dead still.
        const tx = d.hx + Math.sin(elapsed * 0.6 + d.phase) * 4;
        const ty = d.hy + Math.cos(elapsed * 0.5 + d.phase * 1.3) * 4;
        const k = d.loose > 0 ? pull * 0.07 : pull;
        d.vx += (tx - d.x) * k * n;
        d.vy += (ty - d.y) * k * n;

        if (d.loose > 0) {
          d.vx += (Math.random() - 0.5) * 0.09 * n;
          d.vy += (Math.random() - 0.5) * 0.09 * n;
        }

        if (pointer.active) {
          const dx = d.x - pointer.x;
          const dy = d.y - pointer.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < 130) {
            const push = (1 - dist / 130) ** 2 * 2.4 * n;
            d.vx += (dx / dist) * push;
            d.vy += (dy / dist) * push;
          }
        }

        const damp = d.loose > 0 ? Math.pow(0.975, n) : damping;
        d.vx *= damp;
        d.vy *= damp;
        d.x += d.vx * n;
        d.y += d.vy * n;
      }

      draw();
    };

    const start = () => {
      cancelAnimationFrame(frame);
      if (reduceMotion.matches || !visible) {
        draw(); // a still grid
        return;
      }
      last = 0;
      frame = requestAnimationFrame(step);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };

    const resize = new ResizeObserver(() => {
      build();
      start();
    });
    const inView = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    });

    build();
    start();
    resize.observe(canvas);
    inView.observe(canvas);
    host.addEventListener('pointermove', onPointerMove);
    host.addEventListener('pointerleave', onPointerLeave);
    reduceMotion.addEventListener('change', start);

    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      inView.disconnect();
      host.removeEventListener('pointermove', onPointerMove);
      host.removeEventListener('pointerleave', onPointerLeave);
      reduceMotion.removeEventListener('change', start);
    };
  }, []);

  return <canvas ref={ref} className="dot-field" aria-hidden="true" />;
}

// Slow colour behind the dots. Pure CSS, see .mesh in globals.css.
export function Mesh() {
  return (
    <div className="mesh" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}
