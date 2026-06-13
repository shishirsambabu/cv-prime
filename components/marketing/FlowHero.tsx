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

const STEP_MS = 3200;
const START_PATH = '/signup?next=/ai-cv';

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
  const lines = ['w-3/4', 'w-full', 'w-5/6', 'w-2/3'];
  const keywords = ['GTM strategy', 'Lifecycle', 'Enablement'];

  return (
    <div className="flow-scene w-full max-w-sm rounded-card border border-slate-200 bg-white p-5 shadow-lg shadow-slate-950/5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          Job description
        </p>
        <span className="rounded-pill bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
          PMM · Bengaluru
        </span>
      </div>
      <p className="mt-3 font-display text-base font-bold text-slate-900">
        Product Marketing Manager
      </p>
      <div className="mt-4 space-y-2.5">
        {lines.map((w, i) => (
          <div
            key={w}
            className={`h-2 origin-left rounded-pill bg-slate-200 ${w}`}
            style={{ animation: `flow-grow 0.45s ease-out ${0.25 + i * 0.18}s both` }}
          />
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {keywords.map((k, i) => (
          <span
            key={k}
            className="rounded-pill border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand"
            style={{ animation: `flow-pop 0.4s ease-out ${1.1 + i * 0.2}s both` }}
          >
            {k}
          </span>
        ))}
      </div>
      <div
        className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-600"
        style={{ animation: `flow-pop 0.4s ease-out 1.9s both` }}
      >
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
        Keywords extracted
      </div>
    </div>
  );
}

function SceneUpload(): JSX.Element {
  return (
    <div className="flow-scene flex w-full max-w-sm flex-col items-center">
      <div className="relative flex h-52 w-full flex-col items-center justify-center rounded-card border-2 border-dashed border-brand/30 bg-brand/[0.04]">
        <div
          className="flex items-center gap-3 rounded-card border border-slate-200 bg-white px-4 py-3 shadow-lg shadow-slate-950/10"
          style={{ animation: 'flow-drop 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s both' }}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-inner bg-rose-50 text-rose-500">
            <FileText className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-bold text-slate-900">Aarav_Mehta_CV.pdf</p>
            <p className="text-xs text-slate-500">248 KB</p>
          </div>
        </div>
        <p
          className="mt-4 text-xs font-medium text-slate-500"
          style={{ animation: 'flow-fade 0.5s ease-out 1s both' }}
        >
          Drop your CV — PDF or DOCX
        </p>
      </div>
      <div
        className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-emerald-600"
        style={{ animation: 'flow-pop 0.45s ease-out 1.5s both' }}
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-pill bg-emerald-500 text-white">
          <Check className="h-3 w-3" strokeWidth={3} />
        </span>
        Parsed into 6 sections
      </div>
    </div>
  );
}

function MiniTemplate({
  accent,
  selected,
  delay,
}: {
  accent: string;
  selected?: boolean;
  delay: number;
}): JSX.Element {
  return (
    <div
      className={`relative w-[88px] rounded-inner border bg-white p-2.5 shadow-sm ${
        selected ? 'border-brand ring-2 ring-brand/30' : 'border-slate-200'
      }`}
      style={{ animation: `flow-pop 0.4s ease-out ${delay}s both` }}
    >
      <div className={`h-2.5 w-10 rounded-pill ${accent}`} />
      <div className="mt-2 space-y-1">
        <div className="h-1.5 w-full rounded-pill bg-slate-200" />
        <div className="h-1.5 w-4/5 rounded-pill bg-slate-200" />
        <div className="h-1.5 w-3/5 rounded-pill bg-slate-200" />
      </div>
      {selected ? (
        <span
          className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-pill bg-brand text-white shadow-md"
          style={{ animation: 'flow-pop 0.4s ease-out 0.9s both' }}
        >
          <Check className="h-3.5 w-3.5" strokeWidth={3} />
        </span>
      ) : null}
    </div>
  );
}

function SceneTemplate(): JSX.Element {
  return (
    <div className="flow-scene flex w-full max-w-sm flex-col items-center">
      <div className="flex items-end gap-3">
        <MiniTemplate accent="bg-slate-400" delay={0.2} />
        <div className="scale-110">
          <MiniTemplate accent="bg-brand" selected delay={0.35} />
        </div>
        <MiniTemplate accent="bg-emerald-500" delay={0.5} />
      </div>
      <p
        className="mt-6 text-sm font-semibold text-slate-700"
        style={{ animation: 'flow-fade 0.5s ease-out 1s both' }}
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
      <div className="relative h-44 w-32 shrink-0 overflow-hidden rounded-inner border border-slate-200 bg-white p-3 shadow-lg shadow-slate-950/10">
        <div className="h-2.5 w-16 rounded-pill bg-slate-900" />
        <div className="mt-1 h-1.5 w-10 rounded-pill bg-brand" />
        <div className="mt-3 space-y-1.5">
          {['w-full', 'w-5/6', 'w-full', 'w-3/4', 'w-5/6', 'w-2/3'].map((w, i) => (
            <div key={`${w}-${i}`} className={`h-1.5 rounded-pill bg-slate-200 ${w}`} />
          ))}
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-transparent via-brand/20 to-transparent"
          style={{ animation: 'flow-scan 1.8s ease-in-out 0.2s both' }}
        >
          <div className="absolute bottom-0 left-0 right-0 h-px bg-brand" />
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

        {/* Synced stepper */}
        <div className="mt-8 max-w-lg space-y-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === active;

            return (
              <button
                key={step.title}
                type="button"
                onClick={() => setActive(index)}
                className={`flex w-full items-start gap-3 rounded-card border p-3 text-left transition ${
                  isActive
                    ? 'border-brand/30 bg-brand/[0.06]'
                    : 'border-transparent hover:bg-slate-50'
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-inner transition ${
                    isActive ? 'bg-brand text-brand-foreground' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span
                      className={`text-sm font-bold ${isActive ? 'text-slate-950' : 'text-slate-600'}`}
                    >
                      {step.title}
                    </span>
                  </span>
                  {isActive ? (
                    <>
                      <span className="mt-0.5 block text-xs leading-5 text-slate-500">
                        {step.hint}
                      </span>
                      <span className="mt-2 block h-1 overflow-hidden rounded-pill bg-brand/15">
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
        className="relative mx-auto w-full max-w-[540px] lg:ml-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute -left-10 top-8 h-44 w-44 rounded-pill bg-brand/20 blur-3xl" />
        <div className="absolute -right-8 bottom-10 h-40 w-40 rounded-pill bg-cyan-300/25 blur-3xl" />

        <div className="relative overflow-hidden rounded-panel border border-white/70 bg-white/85 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          {/* Window chrome */}
          <div className="flex items-center justify-between border-b border-slate-200 bg-white/70 px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-pill bg-rose-300" />
              <span className="h-2.5 w-2.5 rounded-pill bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-pill bg-emerald-300" />
            </div>
            <p className="text-xs font-semibold text-slate-500">
              Step {active + 1} of {steps.length} · {steps[active]!.title}
            </p>
            <span className="text-xs font-bold text-brand">CV Prime</span>
          </div>

          {/* Scene stage */}
          <div className="flex min-h-[360px] items-center justify-center bg-[#f6f9fc] p-6">
            <Scene key={active} />
          </div>
        </div>
      </div>
    </div>
  );
}
