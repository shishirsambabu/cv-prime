'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileText,
  FileUp,
  GaugeCircle,
  KeyRound,
  LayoutDashboard,
  MousePointerClick,
  Sparkles,
  Wand2,
} from 'lucide-react';

const START_PATH = '/signup?next=/dashboard';

const workflow = [
  {
    id: 'dashboard',
    title: 'Open dashboard',
    summary: 'Create manually or generate with AI',
    icon: LayoutDashboard,
  },
  {
    id: 'key',
    title: 'Connect AI key',
    summary: 'One-time OpenRouter setup',
    icon: KeyRound,
  },
  {
    id: 'jd',
    title: 'Paste the job description',
    summary: 'Use the exact role you are applying for',
    icon: FileText,
  },
  {
    id: 'cv',
    title: 'Upload or paste CV',
    summary: 'PDF, DOCX, TXT, or pasted text',
    icon: FileUp,
  },
  {
    id: 'generate',
    title: 'Choose template and generate',
    summary: 'AI creates a saved draft',
    icon: Wand2,
  },
  {
    id: 'review',
    title: 'Review, edit, export',
    summary: 'Open editor, adjust, then download PDF',
    icon: Download,
  },
];

const wizardChecks = [
  'API key connected',
  'Job description pasted',
  'CV uploaded',
  'Template chosen',
];

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

const templateChoices = [
  { name: 'Modern', detail: 'Selected', selected: true },
  { name: 'Technical', detail: 'Engineering and data', selected: false },
  { name: 'Executive', detail: 'Leadership roles', selected: false },
  { name: 'Minimal', detail: 'Strict ATS readability', selected: false },
];

function StepIcon({ index, active }: { index: number; active: boolean }): JSX.Element {
  return (
    <span
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-pill text-xs font-bold transition duration-300 ${
        active ? 'bg-brand text-white' : 'bg-white text-slate-500'
      }`}
    >
      {index + 1}
    </span>
  );
}

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
        <div className="flex min-h-[250px] flex-col items-center justify-center rounded-card border-2 border-dashed border-cyan-300 bg-cyan-50 p-5 text-center">
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
            {templateChoices.map(({ name, detail, selected }, index) => (
              <div
                key={name}
                className={`motion-chip rounded-card border p-4 ${
                  selected ? 'border-slate-950 bg-slate-950 text-white' : 'border-slate-200 bg-white text-slate-700'
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <p className="font-display text-lg font-bold">{name}</p>
                <p className={`mt-1 text-xs font-semibold ${selected ? 'text-cyan-200' : 'text-slate-500'}`}>
                  {detail}
                </p>
              </div>
            ))}
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

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
            Product demo
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
            The real path from signup to a tailored PDF.
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-8 text-slate-600">
          This mirrors the live CV Prime workflow: land in the dashboard, start the AI CV flow,
          paste the role, add your current CV, generate a saved draft, then review and export.
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-panel border border-slate-200 bg-white shadow-2xl shadow-slate-950/10">
        <div className="flex flex-col gap-4 border-b border-slate-200 bg-slate-950 px-5 py-4 text-white lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <span className="motion-chip flex h-10 w-10 items-center justify-center rounded-inner bg-white/10 text-cyan-200">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold">CV Prime workflow preview</p>
              <p className="mt-1 text-xs text-slate-400">Dashboard to AI CV wizard to editor/export</p>
            </div>
          </div>
          <Link
            href={START_PATH}
            className="inline-flex items-center justify-center gap-2 rounded-pill bg-brand px-4 py-2.5 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong"
          >
            Start in dashboard
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr]">
          <aside className="border-b border-slate-200 bg-slate-50 p-4 lg:border-b-0 lg:border-r">
            <p className="px-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Actual flow
            </p>
            <div className="mt-4 space-y-2">
              {workflow.map((item, index) => {
                const Icon = item.icon;
                const selected = active === index;
                const complete = active > index;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`w-full rounded-card border p-4 text-left transition duration-300 ${
                      selected
                        ? 'motion-step-active border-brand/25 bg-white shadow-lg shadow-slate-950/5'
                        : 'border-transparent bg-transparent hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <StepIcon index={index} active={selected || complete} />
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-2">
                          <Icon className={`h-4 w-4 ${selected ? 'text-brand' : 'text-slate-500'}`} />
                          <span className="block text-sm font-bold text-slate-950">{item.title}</span>
                        </span>
                        <span className="mt-1 block text-xs font-semibold leading-5 text-slate-500">
                          {item.summary}
                        </span>
                      </span>
                      {complete ? <CheckCircle2 className="h-4 w-4 text-emerald-600" /> : null}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 rounded-card border border-slate-200 bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                AI wizard checklist
              </p>
              <div className="mt-3 space-y-2">
                {wizardChecks.map((check, index) => (
                  <div key={check} className="flex items-center gap-2 text-xs font-bold text-slate-600">
                    <span
                      className={`h-2.5 w-2.5 rounded-pill ${
                        active >= index + 1 ? 'bg-emerald-500' : 'bg-slate-200'
                      }`}
                    />
                    {check}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <section className="relative min-h-[620px] overflow-hidden bg-[#eef2f8] p-5 sm:p-7">
            <div className="absolute inset-0 premium-grid opacity-60" />
            <div key={activeStep.id} className="workspace-in relative">
              <ActiveScreen activeId={activeStep.id} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
