'use client';

import { useState } from 'react';
import { ArrowRight, Sparkles, Wand2 } from 'lucide-react';

interface Sample {
  label: string;
  before: string;
  after: string;
  fromScore: number;
  toScore: number;
  added: string[];
}

const SAMPLES: Sample[] = [
  {
    label: 'Marketing',
    before: 'Responsible for running campaigns and creating sales material.',
    after:
      'Built launch messaging and battlecards adopted by a 42-person sales team, contributing to Rs 4.8 crore in influenced pipeline.',
    fromScore: 58,
    toScore: 86,
    added: ['Outcome', 'Scale', 'Lifecycle'],
  },
  {
    label: 'Engineering',
    before: 'Worked on the backend and helped improve performance.',
    after:
      'Re-architected the payments service to cut p95 latency 62% (840ms to 320ms), unblocking checkout for 1.2M monthly users.',
    fromScore: 54,
    toScore: 91,
    added: ['Metric', 'System', 'Impact'],
  },
  {
    label: 'Product',
    before: 'Managed the product roadmap and coordinated with stakeholders.',
    after:
      'Drove a 0-to-1 onboarding revamp that lifted activation 34% and became the team\'s top-converting funnel within two quarters.',
    fromScore: 61,
    toScore: 88,
    added: ['Activation', 'Ownership', '0-to-1'],
  },
];

const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

export function InteractiveRewrite(): JSX.Element {
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(SAMPLES[0]!.fromScore);
  const sample = SAMPLES[active]!;

  const animate = (from: number, to: number): void => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      setScore(to);
      return;
    }

    const start = performance.now();
    const duration = 900;
    const step = (now: number): void => {
      const p = Math.min((now - start) / duration, 1);
      setScore(Math.round(from + (to - from) * easeOutCubic(p)));

      if (p < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const handleRewrite = (): void => {
    setRevealed(true);
    animate(sample.fromScore, sample.toScore);
  };

  const handleSelect = (index: number): void => {
    setActive(index);
    setRevealed(false);
    setScore(SAMPLES[index]!.fromScore);
  };

  return (
    <div className="rounded-panel border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/20 backdrop-blur sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-pill bg-white/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
          <Wand2 className="h-4 w-4" />
          Try it - pick a weak bullet
        </div>
        <div className="flex gap-2">
          {SAMPLES.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onClick={() => handleSelect(i)}
            className={`rounded-pill px-4 py-2 text-xs font-semibold transition duration-300 ${
              i === active
                ? 'bg-brand text-brand-foreground'
                : 'bg-white/[0.06] text-slate-300 hover:-translate-y-0.5 hover:bg-white/[0.1]'
            }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
        <div className="rounded-card border border-white/10 bg-slate-950/40 p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-300/80">
              Before
            </p>
            <span className="font-display text-sm font-bold tabular-nums text-rose-300/70">
              {sample.fromScore}
              <span className="text-slate-600">/100</span>
            </span>
          </div>
          <p className="mt-4 text-base leading-7 text-slate-400 line-through decoration-rose-400/60">
            {sample.before}
          </p>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={handleRewrite}
            className="group inline-flex h-12 items-center gap-2 rounded-pill bg-brand px-5 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/30 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-strong active:translate-y-0"
          >
            <Sparkles className="h-4 w-4" />
            Rewrite
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
        </div>

        <div
          className={`rounded-card border p-5 transition-all duration-500 ${
            revealed
              ? 'border-cyan-300/30 bg-cyan-300/[0.06]'
              : 'border-white/10 bg-white/[0.02]'
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
              After
            </p>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-2xl font-bold tabular-nums text-white">
                {score}
              </span>
              <span className="text-xs text-slate-500">/100</span>
              {revealed ? (
                <span className="ml-1 rounded-pill bg-emerald-400/15 px-2 py-0.5 text-[11px] font-bold text-emerald-300">
                  +{sample.toScore - sample.fromScore}
                </span>
              ) : null}
            </div>
          </div>
          {/* Readiness bar — fills as the score climbs */}
          <div className="mt-3 h-1.5 overflow-hidden rounded-pill bg-white/10">
            <div
              className="h-full rounded-pill bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300"
              style={{ width: `${score}%` }}
            />
          </div>
          <p
            key={`${active}-${revealed ? 'after' : 'placeholder'}`}
            className={`mt-4 text-base leading-7 transition-opacity duration-500 ${
              revealed ? 'motion-chip text-white' : 'text-slate-600 opacity-50'
            }`}
          >
            {revealed ? sample.after : 'Your stronger, outcome-led version appears here.'}
          </p>
          {revealed ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {sample.added.map((tag, index) => (
                <span
                  key={tag}
                  className="motion-chip rounded-pill border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  + {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
