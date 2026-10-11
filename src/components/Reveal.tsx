'use client';

import { useEffect, useRef } from 'react';

// Marks its box as "armed" on mount and "in" the first time it scrolls into
// view, so CSS can play an entrance once. Without JavaScript, or when reduced
// motion is preferred, nothing is armed and the content is simply there.
export function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = ref.current;
    if (!box || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    box.dataset.reveal = 'armed';
    const seen = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        box.dataset.reveal = 'in';
        seen.disconnect();
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    seen.observe(box);
    return () => seen.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
