'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Star } from 'lucide-react';
import { HeroShowcase } from '@/components/marketing/HeroShowcase';

const START_PATH = '/signup?next=/dashboard';

const heroSignals = [
  'Unlimited free drafts',
  '3 clean PDF exports',
  'ATS score before you send',
];

const heroStats = [
  ['92', 'ATS-ready score target'],
  ['10 min', 'from old CV to tailored draft'],
  ['Rs 249', 'monthly Pro when ready'],
];

function fade(delay: number): { animation: string } {
  return { animation: `hero-enter 0.88s cubic-bezier(0.16,1,0.3,1) ${delay}s both` };
}

function RejectionSlide(): JSX.Element {
  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-8 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:pb-24 lg:pt-14">
      <div>
        <div
          className="inline-flex items-center gap-2 rounded-pill border border-brand/15 bg-white/90 px-4 py-2 text-sm font-semibold text-brand shadow-sm shadow-slate-950/5 backdrop-blur"
          style={fade(0.05)}
        >
          <Sparkles className="h-4 w-4" />
          AI CV builder for serious job seekers
        </div>
        <h1
          className="mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.02] text-slate-950 sm:text-6xl lg:text-7xl"
          style={fade(0.12)}
        >
          Turn a rejected CV into an interview-ready one.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg" style={fade(0.2)}>
          CV Prime shows why a CV is getting ignored, rewrites the weak parts, and helps job seekers
          export a premium, recruiter-ready PDF.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row" style={fade(0.28)}>
          <Link
            href={START_PATH}
            className="group inline-flex h-14 items-center justify-center gap-2 rounded-pill bg-brand px-7 text-sm font-bold text-brand-foreground shadow-2xl shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-strong"
          >
            Build a CV free
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/templates"
            className="inline-flex h-14 items-center justify-center rounded-pill border border-slate-300 bg-white/85 px-7 text-sm font-bold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-400"
          >
            See premium templates
          </Link>
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-3" style={fade(0.36)}>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">4.8/5</span> - trusted by{' '}
            <span className="font-semibold text-slate-900">1,000+</span> job seekers
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2" style={fade(0.44)}>
          {heroSignals.map((signal) => (
            <span
              key={signal}
              className="inline-flex items-center gap-2 rounded-pill border border-slate-200 bg-white/80 px-3 py-2 text-xs font-semibold text-slate-700 shadow-xs backdrop-blur"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              {signal}
            </span>
          ))}
        </div>
        <div className="mt-8 grid max-w-xl grid-cols-3 divide-x divide-slate-200 rounded-card border border-slate-200 bg-white/80 p-4 shadow-sm shadow-slate-950/5 backdrop-blur" style={fade(0.52)}>
          {heroStats.map(([value, label]) => (
            <div key={label} className="px-3 first:pl-0 last:pr-0">
              <p className="font-display text-2xl font-bold text-slate-950">{value}</p>
              <p className="mt-1 text-[11px] font-medium leading-4 text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <HeroShowcase />
    </div>
  );
}

export function HeroCarousel(): JSX.Element {
  return (
    <div className="relative z-10 overflow-hidden">
      <RejectionSlide />
    </div>
  );
}
