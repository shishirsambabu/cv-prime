'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Download,
  FileText,
  FileUp,
  GaugeCircle,
  KeyRound,
  LayoutDashboard,
  Lock,
  MousePointerClick,
  Sparkles,
  Wand2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { templateMap } from '@/components/templates';
import { TemplatePreview } from '@/components/templates/TemplatePreview';
import type { TemplateId } from '@/types/cv.types';

const START_PATH = '/signup?next=/dashboard';

type Phase = 'Dashboard' | 'AI wizard' | 'Editor & export';

interface Step {
  id: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  phase: Phase;
  route: string;
}

const workflow: Step[] = [
  {
    id: 'dashboard',
    title: 'Open dashboard',
    summary: 'Create manually or generate with AI',
    icon: LayoutDashboard,
    phase: 'Dashboard',
    route: '/dashboard',
  },
  {
    id: 'key',
    title: 'Connect AI key',
    summary: 'One-time OpenRouter setup',
    icon: KeyRound,
    phase: 'AI wizard',
    route: '/ai-cv',
  },
  {
    id: 'jd',
    title: 'Paste the job description',
    summary: 'Use the exact role you are applying for',
    icon: FileText,
    phase: 'AI wizard',
    route: '/ai-cv',
  },
  {
    id: 'cv',
    title: 'Upload or paste CV',
    summary: 'PDF, DOCX, TXT, or pasted text',
    icon: FileUp,
    phase: 'AI wizard',
    route: '/ai-cv',
  },
  {
    id: 'generate',
    title: 'Choose template and generate',
    summary: 'AI creates a saved draft',
    icon: Wand2,
    phase: 'AI wizard',
    route: '/ai-cv',
  },
  {
    id: 'review',
    title: 'Review, edit, export',
    summary: 'Open editor, adjust, then download PDF',
    icon: Download,
    phase: 'Editor & export',
    route: '/editor',
  },
];

const phaseOrder: Phase[] = ['Dashboard', 'AI wizard', 'Editor & export'];

const jdLines = [
  'Product Marketing Manager - B2B SaaS',
  'Own GTM messaging, sales enablement, lifecycle campaigns, and launch reporting.',
  'Must show B2B SaaS, positioning, stakeholder management, and funnel metrics.',
];

const cvLines = [
  'Aarav Mehta - Product Marketing Manager',
  '6 years experience across SaaS launches, lifecycle marketing, and sales collateral.',
  'Current CV parsed into summary, experience, skills, projects, and education.',
];

const suggestions = [
  'Add GTM strategy and sales enablement to the top summary.',
  'Rewrite campaign ownership with pipeline and launch metrics.',
  'Keep Modern template for a business role with clean ATS parsing.',
];

const templateChoices: Array<{ id: TemplateId; name: string; detail: string; selected: boolean }> = [
  { id: 'modern', name: 'Modern', detail: 'Selected', selected: true },
  { id: 'technical', name: 'Technical', detail: 'Engineering and data', selected: false },
  { id: 'executive', name: 'Executive', detail: 'Leadership roles', selected: false },
  { id: 'minimal', name: 'Minimal', detail: 'Strict ATS readability', selected: false },
];

function MiniWindow({
  title,
  children,
  dark = false,
}: {
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}): JSX.Element {
  return (
    <div
      className={`overflow-hidden rounded-card border shadow-sm ${
        dark ? 'border-white/10 bg-slate-950 text-white' : 'border-slate-200 bg-white text-slate-950'
      }`}
    >
      <div
        className={`flex items-center justify-between border-b px-4 py-3 ${
          dark ? 'border-white/10 bg-white/[0.04]' : 'border-slate-200 bg-slate-50'
        }`}
      >
        <p className={`text-xs font-bold uppercase tracking-[0.16em] ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
          {title}
        </p>
        <span className="flex gap-1.5">
          <span className={`h-2 w-2 rounded-pill ${dark ? 'bg-slate-600' : 'bg-slate-300'}`} />
          <span className={`h-2 w-2 rounded-pill ${dark ? 'bg-slate-600' : 'bg-slate-300'}`} />
          <span className={`h-2 w-2 rounded-pill ${dark ? 'bg-cyan-300' : 'bg-brand'}`} />
        </span>
      </div>
      {children}
    </div>
  );
}

function DashboardScreen(): JSX.Element {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <MiniWindow title="Dashboard">
        <div className="p-5">
          <div className="rounded-card bg-slate-950 p-5 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Your workspace</p>
            <h3 className="mt-3 font-display text-2xl font-bold">Build a sharper CV, then tailor it.</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-pill bg-white px-4 py-2 text-xs font-bold text-slate-950">
                Create CV
              </span>
              <span className="rounded-pill bg-brand px-4 py-2 text-xs font-bold text-white">
                Generate with AI
              </span>
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {['CVs created 1/3', 'PDF exports 0/3', 'Best score 74'].map((item) => (
              <div key={item} className="rounded-inner border border-slate-200 p-3 text-sm font-bold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </MiniWindow>

      <MiniWindow title="Next action">
        <div className="p-5">
          <div className="rounded-card border border-brand/20 bg-brand/[0.04] p-5">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-inner bg-brand text-white">
                <MousePointerClick className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-xl font-bold">Use AI when you already have a CV.</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The dashboard sends serious applicants into the AI CV flow, where the role and current CV are read together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MiniWindow>
    </div>
  );
}

function KeyScreen(): JSX.Element {
  return (
    <MiniWindow title="Step 1 - AI setup">
      <div className="grid gap-5 p-5 lg:grid-cols-[1fr_260px]">
        <div className="rounded-card border border-emerald-200 bg-emerald-50 p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-inner bg-emerald-500 text-white">
              <CheckCircle2 className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-xl font-bold text-slate-950">OpenRouter key connected</p>
              <p className="mt-1 text-sm text-emerald-800">One-time setup before generating CVs.</p>
            </div>
          </div>
        </div>
        <div className="rounded-card border border-slate-200 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Why this appears first</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            The AI wizard checks the key before accepting the job description, CV, and template choices.
          </p>
        </div>
      </div>
    </MiniWindow>
  );
}

function JobDescriptionScreen(): JSX.Element {
  return (
    <MiniWindow title="Step 2 - Job description">
      <div className="grid gap-5 p-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-card border-2 border-cyan-300 bg-white p-5 shadow-lg shadow-cyan-200/40">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Paste the JD</p>
          <div className="mt-4 space-y-3">
            {jdLines.map((line, index) => (
              <p
                key={line}
                className={`motion-chip rounded-inner bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700 ${
                  index === 0 ? 'font-bold text-slate-950' : ''
                }`}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
        <div className="rounded-card border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Used for</p>
          <div className="mt-4 space-y-3">
            {['Keyword match', 'Bullet rewrite direction', 'ATS score'].map((item, index) => (
              <div key={item} className="motion-chip flex items-center gap-2 text-sm font-bold text-slate-700" style={{ animationDelay: `${220 + index * 90}ms` }}>
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MiniWindow>
  );
}

function UploadScreen(): JSX.Element {
  return (
    <MiniWindow title="Step 3 - Current CV">
      <div className="grid gap-5 p-5 lg:grid-cols-[260px_1fr]">
        <div className="flex min-h-[230px] flex-col items-center justify-center rounded-card border-2 border-dashed border-cyan-300 bg-cyan-50 p-5 text-center">
          <FileUp className="h-10 w-10 text-brand" />
          <p className="mt-4 font-display text-xl font-bold">Upload CV file</p>
          <p className="mt-2 text-sm font-semibold text-slate-500">PDF, DOCX, TXT up to 5 MB</p>
        </div>
        <div className="rounded-card border border-slate-200 bg-white p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Parsed preview</p>
          <div className="mt-4 space-y-3">
            {cvLines.map((line, index) => (
              <div
                key={line}
                className="motion-chip rounded-inner bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MiniWindow>
  );
}

function GenerateScreen(): JSX.Element {
  return (
    <MiniWindow title="Step 4 - Template and generate">
      <div className="grid gap-5 p-5 lg:grid-cols-[1fr_280px]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Choose a template</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {templateChoices.map(({ id, name, detail, selected }, index) => {
              const Template = templateMap[id];
              return (
                <div
                  key={id}
                  className={`motion-chip group overflow-hidden rounded-card border bg-white transition ${
                    selected
                      ? 'border-brand shadow-lg shadow-brand/15 ring-2 ring-brand/40'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="relative flex h-28 items-start justify-center overflow-hidden bg-[#eef3f8] pt-3">
                    <TemplatePreview Template={Template} scale={0.2} />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent" />
                    {selected ? (
                      <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-pill bg-brand text-white shadow-md shadow-brand/30">
                        <Check className="h-3 w-3" />
                      </span>
                    ) : null}
                  </div>
                  <div className="px-3 py-2.5">
                    <p className="truncate font-display text-sm font-bold text-slate-950">{name}</p>
                    <p className={`mt-0.5 truncate text-[11px] font-semibold ${selected ? 'text-brand' : 'text-slate-500'}`}>
                      {detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="rounded-card bg-brand p-5 text-white shadow-xl shadow-brand/25">
          <Sparkles className="h-7 w-7" />
          <p className="mt-5 font-display text-2xl font-bold">Generate tailored CV</p>
          <p className="mt-3 text-sm leading-6 text-white/80">
            The app creates a saved draft from the JD, uploaded CV, and selected template.
          </p>
        </div>
      </div>
    </MiniWindow>
  );
}

function ReviewScreen(): JSX.Element {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <MiniWindow title="Generated result">
        <div className="p-5">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-inner bg-emerald-50 text-emerald-700">
              <GaugeCircle className="h-7 w-7" />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-500">AI score</p>
              <p className="font-display text-4xl font-bold text-slate-950">88/100</p>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {suggestions.map((item, index) => (
              <div key={item} className="motion-chip rounded-inner bg-slate-50 p-3 text-sm leading-6 text-slate-600" style={{ animationDelay: `${index * 90}ms` }}>
                {item}
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-pill bg-brand px-4 py-2 text-xs font-bold text-white">Review and edit</span>
            <span className="rounded-pill border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700">Export PDF</span>
          </div>
        </div>
      </MiniWindow>

      <MiniWindow title="Editor handoff">
        <div className="grid gap-5 p-5 sm:grid-cols-[180px_1fr]">
          <div className="overflow-hidden rounded-inner border border-slate-200 bg-white p-4 shadow-lg shadow-slate-950/5">
            <div className="grid min-h-[220px] grid-cols-[52px_1fr] gap-4">
              <div className="rounded-sm bg-slate-900 p-2">
                <div className="h-8 w-8 rounded-pill bg-white/90" />
                <div className="mt-6 space-y-2">
                  <div className="h-1.5 rounded-pill bg-white/40" />
                  <div className="h-1.5 rounded-pill bg-white/30" />
                  <div className="h-1.5 rounded-pill bg-white/30" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-3 w-2/3 rounded-pill bg-slate-900" />
                <div className="h-2 w-1/2 rounded-pill bg-brand/70" />
                <div className="space-y-1.5 pt-3">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 rounded-pill bg-slate-200 ${
                        index % 3 === 0 ? 'w-full' : index % 2 === 0 ? 'w-5/6' : 'w-4/5'
                      }`}
                    />
                  ))}
                </div>
                <div className="space-y-1.5 pt-4">
                  <div className="h-2 w-1/3 rounded-pill bg-slate-700" />
                  <div className="h-1.5 w-full rounded-pill bg-slate-200" />
                  <div className="h-1.5 w-5/6 rounded-pill bg-slate-200" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {['Autosaved editable draft', 'Template switcher available', 'AI assists stay inside editor', 'Export checks free limit'].map((item, index) => (
              <div key={item} className="motion-chip flex items-center gap-2 text-sm font-bold text-slate-700" style={{ animationDelay: `${index * 80}ms` }}>
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </MiniWindow>
    </div>
  );
}

function ActiveScreen({ activeId }: { activeId: string }): JSX.Element {
  switch (activeId) {
    case 'dashboard':
      return <DashboardScreen />;
    case 'key':
      return <KeyScreen />;
    case 'jd':
      return <JobDescriptionScreen />;
    case 'cv':
      return <UploadScreen />;
    case 'generate':
      return <GenerateScreen />;
    default:
      return <ReviewScreen />;
  }
}

export function FlowHero(): JSX.Element {
  const [active, setActive] = useState(0);
  const activeStep = workflow[active]!;
  const isFirstStep = active === 0;
  const isLastStep = active === workflow.length - 1;
  const progress = Math.round(((active + 1) / workflow.length) * 100);

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:py-16">
      {/* Section intro — one tight row */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">Product demo</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            The real path from signup<br className="hidden sm:block" /> to a{' '}
            <span className="text-gradient">tailored PDF</span>.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-slate-400">
          Click any step to walk the live workflow — dashboard, AI wizard, then editor and export.
          This is the actual product, not a recorded video.
        </p>
      </div>

      {/* The app window */}
      <div className="mt-10 rounded-[2.1rem] bg-gradient-to-b from-white/12 via-white/[0.04] to-white/[0.02] p-px shadow-2xl shadow-cyan-950/40">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1422]/90 backdrop-blur">
          {/* Browser chrome bar */}
          <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3 sm:px-5">
            <span className="hidden items-center gap-1.5 sm:flex" aria-hidden>
              <span className="h-3 w-3 rounded-pill bg-rose-400/70" />
              <span className="h-3 w-3 rounded-pill bg-amber-400/70" />
              <span className="h-3 w-3 rounded-pill bg-emerald-400/70" />
            </span>

            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-pill border border-white/10 bg-slate-950/60 px-3.5 py-2">
              <Lock className="h-3.5 w-3.5 shrink-0 text-emerald-300/80" />
              <span className="truncate text-xs font-semibold text-slate-300">
                cv-prime.in<span className="text-slate-500">{activeStep.route}</span>
              </span>
              <span className="ml-auto hidden items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300/90 sm:flex">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-pill bg-cyan-300/70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-pill bg-cyan-300" />
                </span>
                Live
              </span>
            </div>

            <span className="hidden shrink-0 items-center rounded-pill border border-white/10 bg-white/[0.06] px-3 py-1.5 font-display text-xs font-bold text-slate-200 sm:inline-flex">
              {active + 1}
              <span className="text-slate-500">/{workflow.length}</span>
            </span>

            <Link
              href={START_PATH}
              className="group inline-flex shrink-0 items-center justify-center gap-1.5 rounded-pill bg-brand px-4 py-2 text-xs font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Open app
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Body */}
          <div className="grid lg:grid-cols-[286px_1fr]">
            {/* Stepper rail — grouped into the three product phases */}
            <aside className="border-b border-white/10 bg-[#0a1320] p-4 lg:border-b-0 lg:border-r lg:border-white/10">
              {phaseOrder.map((phase) => (
                <div key={phase} className="mb-5 last:mb-0">
                  <p className="px-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    {phase}
                  </p>
                  <div className="mt-2 space-y-1">
                    {workflow
                      .map((step, index) => ({ step, index }))
                      .filter(({ step }) => step.phase === phase)
                      .map(({ step, index }) => {
                        const Icon = step.icon;
                        const selected = active === index;
                        const complete = active > index;

                        return (
                          <button
                            key={step.id}
                            type="button"
                            onClick={() => setActive(index)}
                            aria-pressed={selected}
                            className={`group/step flex w-full items-center gap-3 rounded-inner border px-3 py-2.5 text-left transition duration-300 ${
                              selected
                                ? 'motion-step-active border-cyan-300/40 bg-cyan-300/[0.08] shadow-lg shadow-cyan-950/30'
                                : 'border-transparent hover:border-white/10 hover:bg-white/[0.05]'
                            }`}
                          >
                            <span
                              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-pill text-xs font-bold transition duration-300 ${
                                selected
                                  ? 'bg-cyan-300 text-slate-950 shadow-md shadow-cyan-300/30'
                                  : complete
                                    ? 'bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30'
                                    : 'bg-white/[0.06] text-slate-400 ring-1 ring-white/10'
                              }`}
                            >
                              {complete ? <Check className="h-3.5 w-3.5" /> : index + 1}
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className={`block truncate text-sm font-bold ${selected ? 'text-white' : 'text-slate-200'}`}>
                                {step.title}
                              </span>
                              <span className="mt-0.5 block truncate text-xs font-medium text-slate-500">
                                {step.summary}
                              </span>
                            </span>
                            <Icon
                              className={`h-4 w-4 shrink-0 transition ${
                                selected ? 'text-cyan-200' : 'text-slate-600 group-hover/step:text-slate-400'
                              }`}
                            />
                          </button>
                        );
                      })}
                  </div>
                </div>
              ))}

              {/* Flow progress */}
              <div className="mt-4 rounded-card border border-white/10 bg-white/[0.04] p-3.5">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span className="uppercase tracking-[0.16em]">Flow progress</span>
                  <span className="text-cyan-300">{progress}%</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-pill bg-white/10">
                  <div
                    className="h-full rounded-pill bg-gradient-to-r from-cyan-300 to-brand transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </aside>

            {/* Active screen canvas */}
            <section className="relative flex min-h-[440px] flex-col bg-[#eaf2fb] p-4 sm:p-6 lg:min-h-[480px]">
              <div className="pointer-events-none absolute inset-0 premium-grid opacity-50" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent" />

              {/* Screen top strip + navigation */}
              <div className="relative z-10 mb-4 flex items-center justify-between gap-3 rounded-card border border-slate-200/80 bg-white/85 px-4 py-3 shadow-sm backdrop-blur">
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">Current screen</p>
                  <p className="mt-0.5 truncate font-display text-lg font-bold text-slate-950 sm:text-xl">
                    {activeStep.title}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActive((current) => Math.max(current - 1, 0))}
                    disabled={isFirstStep}
                    aria-label="Previous step"
                    className="flex h-9 w-9 items-center justify-center rounded-pill border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActive((current) => Math.min(current + 1, workflow.length - 1))}
                    disabled={isLastStep}
                    className="inline-flex h-9 items-center gap-1.5 rounded-pill bg-slate-950 px-4 text-xs font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div key={activeStep.id} className="workspace-in relative z-10 flex-1">
                <ActiveScreen activeId={activeStep.id} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
