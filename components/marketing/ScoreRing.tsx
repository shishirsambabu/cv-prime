/**
 * Neon conic score ring used across the dark marketing acts (diagnosis,
 * product depth). Pure CSS conic-gradient — no canvas/SVG cost.
 */
export function ScoreRing({
  value,
  size = 112,
  hole = '#0a0a14',
}: {
  value: number;
  size?: number;
  /** Inner disc colour — match the host card so the ring reads as a track. */
  hole?: string;
}): JSX.Element {
  const deg = Math.round((Math.max(0, Math.min(100, value)) / 100) * 360);
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <div className="absolute -inset-2 rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.55),transparent)] blur-md" />
      <div
        className="absolute inset-0 rounded-full"
        style={{ background: `conic-gradient(#8b5cf6, #22d3ee ${deg}deg, rgba(255,255,255,0.08) ${deg}deg)` }}
      />
      <div className="absolute rounded-full ring-1 ring-white/10" style={{ inset: size * 0.075, background: hole }} />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display font-bold leading-none text-white" style={{ fontSize: size * 0.3 }}>
          {value}
        </span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">/100</span>
      </div>
    </div>
  );
}
