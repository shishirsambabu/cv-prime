'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Check, Sparkles, Target } from 'lucide-react';
import { TemplateModern } from '@/components/templates/TemplateModern';
import { sampleCVData } from '@/lib/sampleCV';

const A4_WIDTH = 794;
const A4_HEIGHT = 1123;
const SCALE = 0.46;

const RING_RADIUS = 26;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const TARGET_SCORE = 92;

const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

/**
 * The hero centerpiece: a realistic resume rendered from the live Modern
 * template, presented as a floating document that the product is actively
 * analysing. Animated annotations (score ring, matched keywords, a
 * before/after redline) tell the diagnose → score → rewrite story without
 * a word of copy.
 */
export function HeroShowcase(): JSX.Element {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      setScore(TARGET_SCORE);
      return;
    }

    const start = performance.now();
    const duration = 1500;
    const tick = (now: number): void => {
      const p = Math.min((now - start) / duration, 1);
      setScore(Math.round(TARGET_SCORE * easeOutCubic(p)));

      if (p < 1) {
        requestAnimationFrame(tick);
      }
    };

    // Begin the count just as the score badge pops in.
    const handle = window.setTimeout(() => requestAnimationFrame(tick), 650);

    return () => window.clearTimeout(handle);
  }, []);

  const offset = RING_CIRCUMFERENCE * (1 - score / 100);

  return (
    <div className="relative mx-auto w-full max-w-[520px] origin-top scale-[0.82] sm:scale-90 lg:ml-auto lg:scale-100">
      {/* Ambient brand light */}
      <div className="absolute -left-10 top-6 h-40 w-40 rounded-pill bg-brand/25 blur-3xl" />
      <div className="absolute -right-10 bottom-12 h-44 w-44 rounded-pill bg-cyan-300/25 blur-3xl" />

      <div
        className="relative mx-auto"
        style={{ width: A4_WIDTH * SCALE, height: A4_HEIGHT * SCALE }}
      >
        {/* Floating document */}
        <div className="hero-float absolute inset-0">
          <div className="relative h-full w-full overflow-hidden rounded-[14px] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06),0_30px_60px_-20px_rgba(15,23,42,0.45)] ring-1 ring-slate-900/10">
            <div
              style={{
                width: A4_WIDTH,
                height: A4_HEIGHT,
                transform: `scale(${SCALE})`,
                transformOrigin: 'top left',
              }}
            >
              <TemplateModern data={sampleCVData} />
            </div>

            {/* Analyser scan sweep */}
            <div className="hero-scan pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-brand/15 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
            </div>
          </div>
        </div>

        {/* Score ring badge */}
        <div
          className="anno absolute -right-6 -top-6 flex items-center gap-3 rounded-card border border-slate-200 bg-white/95 p-3 pr-4 shadow-xl shadow-slate-950/10 backdrop-blur"
          style={{ animationDelay: '0.55s' }}
        >
          <div className="relative h-16 w-16">
            <svg className="h-16 w-16 -rotate-90" viewBox="0 0 64 64">
              <circle
                cx="32"
                cy="32"
                r={RING_RADIUS}
                fill="none"
                stroke="hsl(214 31% 91%)"
                strokeWidth="6"
              />
              <circle
                cx="32"
                cy="32"
                r={RING_RADIUS}
                fill="none"
                stroke="hsl(var(--brand))"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={RING_CIRCUMFERENCE}
                strokeDashoffset={offset}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-display text-lg font-bold tabular-nums text-slate-950">
              {score}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
              ATS ready
            </p>
            <p className="text-xs font-medium text-slate-500">Recruiter score</p>
          </div>
        </div>

        {/* Matched keyword chip */}
        <div
          className="anno absolute -left-8 top-1/3 flex items-center gap-2 rounded-pill border border-emerald-200 bg-white/95 px-3 py-2 shadow-lg shadow-emerald-500/10 backdrop-blur"
          style={{ animationDelay: '1.25s' }}
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-pill bg-emerald-500 text-white">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          <span className="text-xs font-semibold text-slate-700">Keyword “GTM” matched</span>
        </div>

        {/* Before → after rewrite redline */}
        <div
          className="anno absolute -bottom-4 -left-6 w-[230px] rounded-card border border-slate-200 bg-slate-950 p-3 shadow-2xl shadow-slate-950/30"
          style={{ animationDelay: '1.65s' }}
        >
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-200">
            <Sparkles className="h-3 w-3" />
            AI rewrite
          </div>
          <p className="mt-2 text-[11px] leading-snug text-slate-400 line-through decoration-rose-400/70">
            Responsible for marketing campaigns.
          </p>
          <p className="mt-1.5 flex items-start gap-1 text-[11px] leading-snug text-white">
            <ArrowRight className="mt-0.5 h-3 w-3 shrink-0 text-cyan-300" />
            Drove Rs 4.8 cr in influenced pipeline across 3 launches.
          </p>
        </div>

        {/* Live-analysis tag */}
        <div
          className="anno absolute -right-4 bottom-1/4 flex items-center gap-2 rounded-pill border border-slate-200 bg-white/95 px-3 py-1.5 shadow-lg shadow-slate-950/10 backdrop-blur"
          style={{ animationDelay: '0.9s' }}
        >
          <Target className="h-3.5 w-3.5 text-brand" />
          <span className="text-xs font-semibold text-slate-700">12 fixes found</span>
        </div>
      </div>

      {/* Story strip */}
      <div className="mt-9 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
        {['Diagnose', 'Rewrite', 'Export'].map((step, index) => (
          <span key={step} className="flex items-center gap-2">
            <span className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-pill bg-brand/10 text-[10px] font-bold text-brand">
                {index + 1}
              </span>
              {step}
            </span>
            {index < 2 ? <span className="text-slate-300">—</span> : null}
          </span>
        ))}
      </div>
    </div>
  );
}
