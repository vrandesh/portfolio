import type { Stage, StageBy } from '@/content/site';

export const stageNames: Record<StageBy, string> = {
  data: 'Data',
  code: 'Code',
  model: 'Model',
  person: 'Person',
};

// The path a request takes through a system, one stage per step.
// Marker shape and the line leaving it say who makes the call there.
export function SignalPath({ stages, label }: { stages: Stage[]; label: string }) {
  return (
    <ol className="path" aria-label={label} style={{ '--n': stages.length } as React.CSSProperties}>
      {stages.map((stage, i) => (
        <li key={i} className="stage" data-by={stage.by}>
          <span className="stage-marker" aria-hidden="true" />
          <span className="stage-by">{stageNames[stage.by]}</span>
          <span className="stage-label">{stage.label}</span>
        </li>
      ))}
    </ol>
  );
}

export function PathLegend() {
  const entries: { by: StageBy; text: string }[] = [
    { by: 'data', text: 'Data in or out' },
    { by: 'code', text: 'Code decides' },
    { by: 'model', text: 'Model proposes' },
    { by: 'person', text: 'Person approves' },
  ];
  return (
    <ul className="legend" aria-label="How to read the paths">
      {entries.map((entry) => (
        <li key={entry.by} data-by={entry.by}>
          <span className="stage-marker" aria-hidden="true" />
          {entry.text}
        </li>
      ))}
    </ul>
  );
}
