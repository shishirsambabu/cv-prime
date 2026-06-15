'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Sparkles, Star } from 'lucide-react';
import { HeroShowcase } from '@/components/marketing/HeroShowcase';
import { FlowHero } from '@/components/marketing/FlowHero';

const START_PATH = '/signup?next=/ai-cv';

const slideMeta = [
  { label: 'The problem', dwell: 9000 },
  { label: 'How it works', dwell: 14400 },
];

function fade(delay: number): { animation: string } {
  return { animation: `flow-fade 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s both` };
}

function RejectionSlide(): JSX.Element {
  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-10 sm:px-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:pb-28 lg:pt-16">
      <div>
        <div
          className="inline-flex items-center gap-2 rounded-pill border border-brand/20 bg-white/85 px-4 py-2 text-sm font-semibold text-brand shadow-sm backdrop-blur"
          style={fade(0.05)}
        >
          <Sparkles className="h-4 w-4" />
          AI CV builder for serious job seekers
        </div>
        <h1
          className="mt-6 max-w-2xl font-display text-5xl font-bold leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl"
          style={fade(0.12)}
        >
          Turn a rejected CV into an interview-ready one.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600" style={fade(0.2)}>
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
            <span className="font-semibold text-slate-900">4.8/5</span> · trusted by{' '}
            <span className="font-semibold text-slate-900">1,000+</span> job seekers
          </p>
        </div>
      </div>

      <HeroShowcase />
    </div>
  );
}

export function HeroCarousel(): JSX.Element {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }

    // Respect reduced-motion: do not auto-advance for those users.
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const id = window.setTimeout(() => {
      setDirection(1);
      setActive((current) => (current + 1) % slideMeta.length);
    }, slideMeta[active]!.dwell);

    return () => window.clearTimeout(id);
  }, [active, paused]);

  const goTo = (next: number): void => {
    setDirection(next > active || (active === slideMeta.length - 1 && next === 0) ? 1 : -1);
    setActive((next + slideMeta.length) % slideMeta.length);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative z-10 overflow-hidden">
        <div
          key={active}
          className={`min-h-[600px] ${direction === 1 ? 'hero-in-right' : 'hero-in-left'}`}
        >
          {active === 0 ? <RejectionSlide /> : <FlowHero />}
        </div>
      </div>

      {/* Arrow controls */}
      <button
        type="button"
        onClick={() => goTo(active - 1)}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-pill border border-slate-200 bg-white/80 text-slate-600 shadow-sm backdrop-blur transition hover:bg-white hover:text-slate-950 lg:flex"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => goTo(active + 1)}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-pill border border-slate-200 bg-white/80 text-slate-600 shadow-sm backdrop-blur transition hover:bg-white hover:text-slate-950 lg:flex"
      >
        <ArrowRight className="h-5 w-5" />
      </button>

      {/* Slide indicators */}
      <div className="relative z-20 -mt-4 flex items-center justify-center gap-3 pb-10">
        {slideMeta.map((slide, index) => {
          const isActive = index === active;

          return (
            <button
              key={slide.label}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to ${slide.label}`}
              className={`group flex items-center gap-2 rounded-pill border px-3.5 py-2 text-xs font-semibold transition ${
                isActive
                  ? 'border-brand/30 bg-brand/[0.08] text-brand'
                  : 'border-slate-200 bg-white/70 text-slate-500 hover:text-slate-800'
              }`}
            >
              <span
                className={`block h-1.5 rounded-pill transition-all duration-300 ${
                  isActive ? 'w-6 bg-brand' : 'w-1.5 bg-slate-300 group-hover:bg-slate-400'
                }`}
              />
              {slide.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
