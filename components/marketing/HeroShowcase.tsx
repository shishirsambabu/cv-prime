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
 * before/after redline) tell the diagnose, score, rewrite story without
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
    const duration = 1350;
    const tick = (now: number): void => {
      const p = Math.min((now - start) / duration, 1);
      setScore(Math.round(TARGET_SCORE * easeOutCubic(p)));

      if (p < 1) {
        requestAnimationFrame(tick);
      }
    };

    // Begin the count just as the score badge pops in.
    const handle = window.setTimeout(() => requestAnimationFrame(tick), 760);

    return () => window.clearTimeout(handle);
  }, []);

  const offset = RING_CIRCUMFERENCE * (1 - score / 100);

  return (
    <div className="relative mx-auto w-full max-w-[600px] origin-top scale-[0.9] sm:scale-95 lg:ml-auto lg:scale-105">
      {/* Volumetric aurora halo */}
      <div className="pointer-events-none absolute -inset-16 rounded-[4rem] bg-[radial-gradient(55%_50%_at_56%_42%,rgba(139,92,246,0.45),transparent_70%),radial-gradient(42%_42%_at_28%_72%,rgba(34,211,238,0.26),transparent_70%)] blur-3xl" />

      {/* Floating glass shards */}
      <div className="orb pointer-events-none absolute -left-7 top-4 h-16 w-16 rotate-[18deg]">
        <div className="h-full w-full bg-gradient-to-br from-violet-200/85 via-violet-400/45 to-white/5" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 62% 100%, 8% 70%)', filter: 'drop-shadow(0 0 16px rgba(139,92,246,0.75))' }} />
      </div>
      <div className="orb-slow pointer-events-none absolute right-3 -top-3 h-12 w-12 -rotate-[14deg]">
        <div className="h-full w-full bg-gradient-to-br from-cyan-200/85 via-cyan-400/45 to-white/5" style={{ clipPath: 'polygon(50% 0%, 100% 45%, 55% 100%, 0% 50%)', filter: 'drop-shadow(0 0 14px rgba(34,211,238,0.75))' }} />
      </div>
      <div className="orb pointer-events-none absolute -right-3 bottom-28 h-10 w-10 rotate-[8deg]">
        <div className="h-full w-full bg-gradient-to-br from-fuchsia-200/85 via-fuchsia-400/45 to-white/5" style={{ clipPath: 'polygon(50% 0%, 100% 40%, 70% 100%, 12% 78%)', filter: 'drop-shadow(0 0 14px rgba(217,70,239,0.75))' }} />
      </div>
      <div className="orb-slow pointer-events-none absolute left-1/4 -bottom-2 h-8 w-8 rotate-[24deg]">
        <div className="h-full w-full bg-gradient-to-br from-cyan-200/80 via-violet-400/40 to-white/5" style={{ clipPath: 'polygon(50% 0%, 100% 42%, 60% 100%, 5% 64%)', filter: 'drop-shadow(0 0 12px rgba(99,102,241,0.7))' }} />
      </div>

      <div
        className="relative mx-auto"
        style={{ width: A4_WIDTH * SCALE, height: A4_HEIGHT * SCALE }}
      >
        {/* Glowing podium beneath the document */}
        <div className="pointer-events-none absolute -bottom-20 left-1/2 h-56 w-[155%] -translate-x-1/2">
          <div className="absolute bottom-4 left-1/2 h-36 w-[94%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(139,92,246,0.85),rgba(34,211,238,0.32)_55%,transparent)] blur-2xl" />
          <div className="absolute bottom-9 left-1/2 h-12 w-[48%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(216,180,254,0.95),transparent)] blur-md" />
          <div className="absolute bottom-6 left-1/2 h-32 w-[106%] -translate-x-1/2 rounded-[50%] border border-cyan-400/20" />
          <div className="absolute bottom-8 left-1/2 h-24 w-[84%] -translate-x-1/2 rounded-[50%] border border-violet-400/40" />
          <div className="absolute bottom-10 left-1/2 h-14 w-[62%] -translate-x-1/2 rounded-[50%] border border-fuchsia-300/30" />
        </div>

        {/* Floating 3D document */}
        <div className="hero-float absolute inset-0">
          <div
            className="relative h-full w-full overflow-hidden rounded-[16px] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06),0_60px_120px_-30px_rgba(0,0,0,0.78)] ring-1 ring-white/15"
            style={{ transform: 'perspective(1600px) rotateY(-13deg) rotateX(4deg)' }}
          >
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

            {/* Edge sheen + top highlight to sell the 3D tilt */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-violet-500/12 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white/25 to-transparent" />

            {/* Analyser scan sweep */}
            <div className="hero-scan pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-brand/15 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
            </div>
          </div>
        </div>

        {/* Score ring badge */}
        <div
          className="anno absolute -right-6 -top-6 flex items-center gap-3 rounded-card border border-slate-200 bg-white/95 p-3 pr-4 shadow-xl shadow-slate-950/10 backdrop-blur"
          style={{ animationDelay: '0.68s' }}
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
                style={{ filter: 'drop-shadow(0 0 5px hsl(var(--brand)))' }}
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
          style={{ animationDelay: '1.28s' }}
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-pill bg-emerald-500 text-white">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          <span className="text-xs font-semibold text-slate-700">Keyword &quot;GTM&quot; matched</span>
        </div>

        {/* Before/after rewrite redline */}
        <div
          className="anno absolute -bottom-4 -left-6 w-[230px] rounded-card border border-slate-200 bg-slate-950 p-3 shadow-2xl shadow-slate-950/30"
          style={{ animationDelay: '1.78s' }}
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
          style={{ animationDelay: '1.02s' }}
        >
          <Target className="h-3.5 w-3.5 text-brand" />
          <span className="text-xs font-semibold text-slate-700">12 fixes found</span>
        </div>
      </div>

      {/* Story strip */}
      <div className="relative mt-9 flex items-center justify-center gap-2 text-xs font-semibold text-slate-300">
        {['Diagnose', 'Rewrite', 'Export'].map((step, index) => (
          <span key={step} className="flex items-center gap-2">
            <span className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-pill bg-white/10 text-[10px] font-bold text-cyan-300 ring-1 ring-inset ring-white/10">
                {index + 1}
              </span>
              {step}
            </span>
            {index < 2 ? <span className="text-slate-600">-</span> : null}
          </span>
        ))}
      </div>
    </div>
  );
}
