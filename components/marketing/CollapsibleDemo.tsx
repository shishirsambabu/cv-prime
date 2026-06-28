'use client';

import { useState } from 'react';
import { Play, ChevronUp, Sparkles, FileSearch, LockKeyhole } from 'lucide-react';
import { FlowHero } from '@/components/marketing/FlowHero';

/**
 * The product demo, collapsed by default into a small teaser. Clicking
 * "Show me the demo" expands the full interactive FlowHero inline; it can
 * be collapsed again. Keeps the homepage tight while still offering the
 * real, clickable walkthrough on demand.
 */
export function CollapsibleDemo(): JSX.Element {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <div className="relative z-10 mx-auto max-w-3xl px-5 py-16 text-center sm:px-6 lg:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">Product demo</p>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl">
          See the actual product, <span className="text-gradient">not a recorded video</span>.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-300">
          Walk the real workflow — dashboard, AI wizard, then editor and export — click by click, right here.
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group mt-7 inline-flex items-center gap-2 rounded-pill bg-gradient-to-r from-brand to-cyan-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-brand/30 transition hover:-translate-y-0.5"
        >
          <Play className="h-4 w-4" />
          Show me the demo
        </button>
        <p className="mt-3 text-xs text-slate-500">Interactive · no signup · ~30 seconds</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Stage podium glow + orbital rings under the app window */}
      <div className="pointer-events-none absolute bottom-16 left-1/2 h-64 w-[82%] -translate-x-1/2">
        <div className="absolute bottom-0 left-1/2 h-44 w-full -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(139,92,246,0.42),rgba(34,211,238,0.14)_60%,transparent)] blur-3xl" />
        <div className="absolute bottom-4 left-1/2 h-32 w-[86%] -translate-x-1/2 rounded-[50%] border border-violet-300/15" />
        <div className="absolute bottom-7 left-1/2 h-24 w-[64%] -translate-x-1/2 rounded-[50%] border border-cyan-300/12" />
      </div>
      {/* Floating glass bubbles */}
      <div className="pointer-events-none absolute right-[6%] top-44 z-20 hidden h-16 w-16 lg:block">
        <div className="orb flex h-full w-full items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-white/[0.02] shadow-[0_0_34px_rgba(34,211,238,0.45)] backdrop-blur-md">
          <Sparkles className="h-6 w-6 text-cyan-200" />
        </div>
      </div>
      <div className="pointer-events-none absolute left-[4%] top-1/2 z-20 hidden h-14 w-14 lg:block">
        <div className="orb-slow flex h-full w-full items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-white/[0.02] shadow-[0_0_30px_rgba(139,92,246,0.45)] backdrop-blur-md">
          <FileSearch className="h-5 w-5 text-violet-200" />
        </div>
      </div>
      <div className="pointer-events-none absolute right-[11%] bottom-28 z-20 hidden h-12 w-12 lg:block">
        <div className="orb flex h-full w-full items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-white/[0.02] shadow-[0_0_26px_rgba(217,70,239,0.45)] backdrop-blur-md">
          <LockKeyhole className="h-5 w-5 text-fuchsia-200" />
        </div>
      </div>

      <FlowHero />

      <div className="relative z-10 -mt-6 pb-10 text-center">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/[0.12]"
        >
          <ChevronUp className="h-4 w-4" />
          Hide demo
        </button>
      </div>
    </div>
  );
}
