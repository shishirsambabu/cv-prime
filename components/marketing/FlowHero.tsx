'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  ClipboardList,
  Download,
  FileText,
  LayoutTemplate,
  Sparkles,
  Star,
  Upload,
} from 'lucide-react';
import { TemplatePreview } from '@/components/templates/TemplatePreview';
import {
  TemplateClassic,
  TemplateModern,
  TemplateTechnical,
} from '@/components/templates';

const STEP_MS = 3400;
const START_PATH = '/signup?next=/dashboard';

const steps: Array<{
  title: string;
  hint: string;
  icon: typeof Upload;
}> = [
  {
    title: 'Paste the job description',
    hint: 'CV Prime reads the role and pulls the keywords that matter.',
    icon: ClipboardList,
  },
  {
    title: 'Upload your current CV',
    hint: 'Drop in any PDF — we parse it into clean, editable sections.',
    icon: Upload,
  },
  {
    title: 'Choose a template',
    hint: 'Pick an ATS-safe layout built for your kind of role.',
    icon: LayoutTemplate,
  },
  {
    title: 'Generate your CV',
    hint: 'Get a tailored, ATS-optimized CV ready to download.',
    icon: Sparkles,
  },
];

function SceneJD(): JSX.Element {
  const requirements: Array<{ pre: string; key?: string; post?: string }> = [
    { pre: 'Own ', key: 'GTM strategy', post: ' and end-to-end launch ownership' },
    { pre: 'Run ', key: 'lifecycle marketing', post: ' across the funnel' },
    { pre: 'Build ', key: 'sales enablement', post: ' and battlecards' },
    { pre: '5+ years in B2B SaaS product marketing' },
  ];

  return (
    <div className="flow-scene w-full max-w-sm rounded-card border border-slate-200 bg-white p-5 shadow-lg shadow-slate-950/5">
      <div className="flex items-center justify-between" style={{ animation: 'flow-fade 0.45s ease-out 0.1s both' }}>
        <span className="rounded-pill bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
          Job description
        </span>
        <span className="text-[11px] font-medium text-slate-400">Full-time · Bengaluru</span>
      </div>
      <p
        className="mt-3 font-display text-base font-bold text-slate-900"
        style={{ animation: 'flow-fade 0.45s ease-out 0.2s both' }}
      >
        Product Marketing Manager
      </p>
      <p
        className="text-xs font-medium text-slate-500"
        style={{ animation: 'flow-fade 0.45s ease-out 0.28s both' }}
      >
        Northstar Cloud
      </p>

      <p
        className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400"
        style={{ animation: 'flow-fade 0.45s ease-out 0.4s both' }}
      >
        What you&rsquo;ll need
      </p>
      <ul className="mt-2 space-y-2">
        {requirements.map((req, i) => (
          <li
            key={req.pre}
            className="flex gap-2 text-[12.5px] leading-snug text-slate-600"
            style={{ animation: `flow-fade 0.45s ease-out ${0.5 + i * 0.18}s both` }}
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-pill bg-slate-300" />
            <span>
              {req.pre}
              {req.key ? (
                <span className="rounded bg-brand/10 px-1 font-semibold text-brand">{req.key}</span>
              ) : null}
              {req.post}
            </span>
          </li>
        ))}
      </ul>

      <div
        className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-600"
        style={{ animation: 'flow-pop 0.4s ease-out 1.5s both' }}
      >
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
        Keywords extracted from the role
      </div>
    </div>
  );
}

function SceneUpload(): JSX.Element {
  return (
    <div className="flow-scene flex w-full max-w-sm flex-col items-center">
      <div className="relative flex h-80 w-full items-center justify-center rounded-card border-2 border-dashed border-brand/30 bg-brand/[0.04]">
        {/* The actual rendered CV dropping into the zone */}
        <div
          className="relative"
          style={{ animation: 'flow-drop 0.95s cubic-bezier(0.22,1,0.36,1) 0.2s both' }}
        >
          <TemplatePreview
            Template={TemplateModern}
            scale={0.24}
            className="ring-1 ring-slate-900/10"
          />
          <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-pill border border-slate-200 bg-white px-3 py-1.5 shadow-md">
            <FileText className="h-3.5 w-3.5 text-rose-500" />
            <span className="text-[11px] font-bold text-slate-800">Aarav_Mehta_CV.pdf</span>
          </div>
        </div>
      </div>
      <div
        className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-emerald-600"
        style={{ animation: 'flow-pop 0.45s ease-out 1.4s both' }}
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-pill bg-emerald-500 text-white">
          <Check className="h-3 w-3" strokeWidth={3} />
        </span>
        Parsed into 6 editable sections
      </div>
    </div>
  );
}

function TemplateChoice({
  Template,
  name,
  selected,
  delay,
}: {
  Template: typeof TemplateModern;
  name: string;
  selected?: boolean;
  delay: number;
}): JSX.Element {
  return (
    <div
      className="relative flex flex-col items-center"
      style={{ animation: `flow-pop 0.45s cubic-bezier(0.22,1,0.36,1) ${delay}s both` }}
    >
      <div
        className={`relative overflow-hidden rounded-[6px] transition ${
          selected
            ? 'ring-2 ring-brand ring-offset-2'
            : 'opacity-70 ring-1 ring-slate-900/10'
        }`}
      >
        <TemplatePreview Template={Template} scale={selected ? 0.2 : 0.165} />
        {selected ? (
          <span
            className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-pill bg-brand text-white shadow-md"
            style={{ animation: 'flow-pop 0.4s ease-out 1s both' }}
          >
            <Check className="h-4 w-4" strokeWidth={3} />
          </span>
        ) : null}
      </div>
      <span
        className={`mt-2 text-[11px] font-semibold ${selected ? 'text-brand' : 'text-slate-400'}`}
      >
        {name}
      </span>
    </div>
  );
}

function SceneTemplate(): JSX.Element {
  return (
    <div className="flow-scene flex w-full max-w-sm flex-col items-center">
      <div className="flex items-center justify-center gap-5">
        <TemplateChoice Template={TemplateClassic} name="Classic" delay={0.15} />
        <TemplateChoice Template={TemplateModern} name="Modern" selected delay={0.3} />
        <TemplateChoice Template={TemplateTechnical} name="Technical" delay={0.45} />
      </div>
      <p
        className="mt-5 text-sm font-semibold text-slate-700"
        style={{ animation: 'flow-fade 0.5s ease-out 1.1s both' }}
      >
        Modern · ATS-safe layout selected
      </p>
    </div>
  );
}

function SceneGenerate(): JSX.Element {
  const R = 26;
  const C = 2 * Math.PI * R;

  return (
    <div className="flow-scene flex w-full max-w-sm items-center gap-4">
      <div className="relative shrink-0 overflow-hidden rounded-[6px] shadow-lg shadow-slate-950/15 ring-1 ring-slate-900/10">
        <TemplatePreview Template={TemplateModern} scale={0.24} />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-transparent via-brand/25 to-transparent"
          style={{ animation: 'flow-scan 2.1s ease-in-out 0.2s both' }}
        >
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand" />
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-3">
          <div className="relative h-16 w-16">
            <svg className="h-16 w-16 -rotate-90" viewBox="0 0 64 64">
              <circle cx="32" cy="32" r={R} fill="none" stroke="hsl(214 31% 91%)" strokeWidth="6" />
              <circle
                cx="32"
                cy="32"
                r={R}
                fill="none"
                stroke="hsl(var(--brand))"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={C}
                style={{ animation: 'flow-ring 1.6s cubic-bezier(0.22,1,0.36,1) 0.6s both' }}
              />
            </svg>
            <div
              className="absolute inset-0 flex items-center justify-center font-display text-lg font-bold text-slate-900"
              style={{ animation: 'flow-pop 0.5s ease-out 1.6s both' }}
            >
              92
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">ATS ready</p>
            <p className="text-xs font-medium text-slate-500">Recruiter score</p>
          </div>
        </div>
        <div
          className="mt-4 inline-flex items-center gap-2 rounded-pill bg-slate-950 px-4 py-2.5 text-sm font-bold text-white"
          style={{ animation: 'flow-pop 0.45s ease-out 2s both' }}
        >
          <Download className="h-4 w-4" />
          Download PDF
        </div>
      </div>
    </div>
  );
}

const scenes = [SceneJD, SceneUpload, SceneTemplate, SceneGenerate];

export function FlowHero(): JSX.Element {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }

    // Respect reduced-motion: hold on the first step instead of auto-cycling.
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, STEP_MS);

    return () => window.clearInterval(id);
  }, [paused]);

  const Scene = scenes[active]!;

  return (
    <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-10 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:pb-28 lg:pt-16">
      <div>
        <div className="inline-flex items-center gap-2 rounded-pill border border-brand/20 bg-white/85 px-4 py-2 text-sm font-semibold text-brand shadow-sm backdrop-blur">
          <Sparkles className="h-4 w-4" />
          AI CV builder for serious job seekers
        </div>
        <h1 className="mt-6 max-w-xl font-display text-5xl font-bold leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-6xl">
          From a job post to an ATS-ready CV.
        </h1>
        <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">
          Paste the job description, upload your current CV, and pick a template. CV Prime generates
          a tailored, AI-optimized CV that gets past the filters.
        </p>

        {/* Synced stepper — timeline */}
        <div className="relative mt-9 max-w-lg">
          <span
            className="absolute left-[34px] top-8 bottom-8 w-px bg-slate-200"
            aria-hidden
          />
          <div className="space-y-1">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === active;
              const isDone = index < active;

              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`group relative flex w-full items-start gap-4 rounded-card border p-3 text-left transition ${
                    isActive
                      ? 'border-brand/20 bg-white shadow-lg shadow-slate-950/5'
                      : 'border-transparent hover:bg-white/60'
                  }`}
                >
                  <span
                    className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-inner border-2 transition ${
                      isActive
                        ? 'border-brand bg-brand text-brand-foreground shadow-lg shadow-brand/30'
                        : isDone
                          ? 'border-emerald-200 bg-emerald-50 text-emerald-600'
                          : 'border-slate-200 bg-white text-slate-400'
                    }`}
                  >
                    {isDone ? (
                      <Check className="h-5 w-5" strokeWidth={3} />
                    ) : (
                      <Icon className="h-5 w-5" />
                    )}
                  </span>
                  <span className="min-w-0 flex-1 pt-0.5">
                    <span className="flex items-center gap-2">
                      <span
                        className={`text-[11px] font-bold tabular-nums ${
                          isActive ? 'text-brand' : 'text-slate-400'
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <span
                        className={`text-sm font-bold ${
                          isActive
                            ? 'text-slate-950'
                            : isDone
                              ? 'text-slate-700'
                              : 'text-slate-500'
                        }`}
                      >
                        {step.title}
                      </span>
                    </span>
                    {isActive ? (
                      <>
                        <span className="mt-1 block text-xs leading-5 text-slate-500">
                          {step.hint}
                        </span>
                        <span className="mt-2.5 block h-1 overflow-hidden rounded-pill bg-brand/15">
                          <span
                            key={active}
                            className="block h-full rounded-pill bg-brand"
                            style={{ animation: `flow-bar ${STEP_MS}ms linear both` }}
                          />
                        </span>
                      </>
                    ) : null}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={START_PATH}
            className="group inline-flex h-14 items-center justify-center gap-2 rounded-pill bg-brand px-7 text-sm font-bold text-brand-foreground shadow-2xl shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-strong"
          >
            Generate my CV free
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/templates"
            className="inline-flex h-14 items-center justify-center rounded-pill border border-slate-300 bg-white/85 px-7 text-sm font-bold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-400"
          >
            See premium templates
          </Link>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
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

      {/* Animated demo viewport */}
      <div
        className="relative mx-auto w-full max-w-[560px] lg:ml-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute -left-12 top-8 h-48 w-48 rounded-pill bg-brand/20 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-44 w-44 rounded-pill bg-cyan-300/25 blur-3xl" />

        <div className="relative overflow-hidden rounded-panel border border-slate-200/80 bg-white shadow-[0_40px_90px_-35px_rgba(15,23,42,0.5)]">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-pill bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-pill bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-slate-600">Live demo</span>
            </div>
            <span className="text-xs font-bold tabular-nums text-slate-400">
              Step {active + 1} / {steps.length}
            </span>
          </div>

          {/* Segmented progress */}
          <div className="flex gap-1.5 px-5">
            {steps.map((segment, index) => {
              const done = index < active;
              const current = index === active;

              return (
                <span
                  key={segment.title}
                  className="h-1 flex-1 overflow-hidden rounded-pill bg-slate-100"
                >
                  {done ? (
                    <span className="block h-full w-full rounded-pill bg-brand" />
                  ) : current ? (
                    <span
                      key={active}
                      className="block h-full rounded-pill bg-brand"
                      style={{ animation: `flow-bar ${STEP_MS}ms linear both` }}
                    />
                  ) : null}
                </span>
              );
            })}
          </div>

          {/* Active step label */}
          <div className="flex items-center gap-2.5 px-5 pt-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-inner bg-brand/10 text-brand">
              {(() => {
                const Icon = steps[active]!.icon;
                return <Icon className="h-4 w-4" />;
              })()}
            </span>
            <p className="text-sm font-bold text-slate-900">{steps[active]!.title}</p>
          </div>

          {/* Scene stage */}
          <div className="relative mt-4 flex min-h-[420px] items-center justify-center overflow-hidden border-t border-slate-100 bg-gradient-to-b from-[#f8fafc] to-[#eef2f8] p-6">
            <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_50%_-10%,rgba(99,102,241,0.1),transparent_55%)]" />
            <div className="relative">
              <Scene key={active} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
