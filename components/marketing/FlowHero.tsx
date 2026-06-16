'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Download,
  FileText,
  GaugeCircle,
  Sparkles,
} from 'lucide-react';
import { TemplatePreview } from '@/components/templates/TemplatePreview';
import { TemplateModern } from '@/components/templates';

const START_PATH = '/signup?next=/dashboard';

const workflow = [
  {
    id: 'jd',
    title: 'Job description',
    icon: ClipboardList,
    summary: 'PMM role, Bengaluru',
    detail: 'GTM strategy, lifecycle marketing, sales enablement, B2B SaaS.',
  },
  {
    id: 'cv',
    title: 'Current CV',
    icon: FileText,
    summary: 'Parsed into 6 sections',
    detail: 'Experience, skills, education, projects, summary, contact.',
  },
  {
    id: 'score',
    title: 'ATS diagnosis',
    icon: GaugeCircle,
    summary: 'Score improved to 92',
    detail: 'Missing keywords resolved and weak bullets rewritten.',
  },
  {
    id: 'export',
    title: 'Ready export',
    icon: Download,
    summary: 'Clean PDF prepared',
    detail: 'Modern template, recruiter-ready layout, no broken formatting.',
  },
];

const rewrittenBullets = [
  {
    before: 'Responsible for marketing campaigns.',
    after: 'Built launch messaging adopted by a 42-person sales team, influencing Rs 4.8 cr pipeline.',
  },
  {
    before: 'Worked with sales team on collateral.',
    after: 'Created sales enablement battlecards that shortened enterprise discovery cycles by 18%.',
  },
];

const keywordMatches = [
  'GTM strategy',
  'Lifecycle marketing',
  'Sales enablement',
  'B2B SaaS',
  'Launch ownership',
];

export function FlowHero(): JSX.Element {
  const [active, setActive] = useState(2);
  const activeStep = workflow[active]!;

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
            Product demo
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
            See the CV workspace before you sign up.
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-8 text-slate-600">
          A realistic preview of what happens inside CV Prime: import a role, diagnose the CV,
          rewrite weak proof, choose a template, and export a clean PDF.
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-panel border border-slate-200 bg-white shadow-2xl shadow-slate-950/10">
        <div className="flex flex-col border-b border-slate-200 bg-slate-950 px-5 py-4 text-white gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <span className="motion-chip flex h-10 w-10 items-center justify-center rounded-inner bg-white/10 text-cyan-200">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold">Aarav Mehta - Product Marketing Manager</p>
              <p className="mt-1 text-xs text-slate-400">Tailored to Northstar Cloud JD</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs sm:flex sm:items-center sm:gap-3">
            <span className="motion-chip rounded-pill bg-emerald-400/15 px-3 py-1.5 font-bold text-emerald-200" style={{ animationDelay: '90ms' }}>
              92 ATS score
            </span>
            <span className="motion-chip rounded-pill bg-cyan-400/15 px-3 py-1.5 font-bold text-cyan-100" style={{ animationDelay: '160ms' }}>
              5 keywords matched
            </span>
            <span className="motion-chip rounded-pill bg-white/10 px-3 py-1.5 font-bold text-slate-200" style={{ animationDelay: '230ms' }}>
              PDF ready
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr_320px]">
          <aside className="border-b border-slate-200 bg-slate-50 p-4 lg:border-b-0 lg:border-r">
            <p className="px-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Workflow
            </p>
            <div className="mt-4 space-y-2">
              {workflow.map((item, index) => {
                const Icon = item.icon;
                const selected = active === index;

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
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-inner transition duration-300 ${
                          selected ? 'bg-brand text-white' : 'bg-white text-slate-500'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-bold text-slate-950">{item.title}</span>
                        <span className="mt-1 block text-xs font-semibold text-slate-500">
                          {item.summary}
                        </span>
                      </span>
                    </div>
                    {selected ? (
                      <p className="mt-3 text-xs leading-5 text-slate-500">{item.detail}</p>
                    ) : null}
                  </button>
                );
              })}
            </div>

            <Link
              href={START_PATH}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-brand px-4 py-3 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Try this workflow
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>

          <section className="relative min-h-[560px] overflow-hidden bg-[#eef2f8] p-5 sm:p-7">
            <div className="absolute inset-0 premium-grid opacity-60" />
            <div key={activeStep.id} className="workspace-in relative grid gap-5 xl:grid-cols-[1fr_250px]">
              <div className="mx-auto w-full max-w-[390px]">
                <div className="rounded-card border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-950/15">
                  <div className="mb-3 flex items-center justify-between px-1">
                    <span className="text-xs font-bold text-slate-500">Modern template</span>
                    <span className="rounded-pill bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                      ATS safe
                    </span>
                  </div>
                  <div className="flex justify-center overflow-hidden rounded-inner bg-slate-100 p-3">
                    <TemplatePreview Template={TemplateModern} scale={0.36} className="shadow-xl" />
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-card border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                      Readiness
                    </p>
                    <p className="font-display text-3xl font-bold text-emerald-600">92</p>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-pill bg-slate-100">
                    <div className="score-fill h-full rounded-pill bg-emerald-500" />
                  </div>
                  <p className="mt-3 text-xs leading-5 text-slate-500">
                    Strong enough to export. Missing role terms have been resolved.
                  </p>
                </div>

                <div className="rounded-card border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                    Matched keywords
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {keywordMatches.map((keyword, index) => (
                      <span
                        key={keyword}
                        className="motion-chip rounded-pill border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700"
                        style={{ animationDelay: `${260 + index * 70}ms` }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-card border border-slate-200 bg-slate-950 p-4 text-white shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">
                    Export state
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-inner bg-emerald-400/15 text-emerald-300">
                      <Download className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-bold">Clean PDF ready</p>
                      <p className="mt-1 text-xs text-slate-400">No layout breaks. No scanner traps.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="border-t border-slate-200 bg-white p-5 lg:border-l lg:border-t-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              AI rewrite preview
            </p>
            <div className="mt-4 space-y-4">
              {rewrittenBullets.map((bullet, index) => (
                <div
                  key={bullet.before}
                  className="motion-chip rounded-card border border-slate-200 bg-slate-50 p-4"
                  style={{ animationDelay: `${120 + index * 120}ms` }}
                >
                  <p className="text-xs font-semibold text-rose-500 line-through">
                    {bullet.before}
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-800">
                    {bullet.after}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-card border border-brand/20 bg-brand/[0.04] p-4">
              <p className="text-sm font-bold text-slate-950">What changed?</p>
              <div className="mt-3 space-y-2">
                {[
                  'Vague responsibilities became measurable outcomes.',
                  'JD keywords were added naturally.',
                  'The CV stayed truthful and recruiter-readable.',
                ].map((item, index) => (
                  <div
                    key={item}
                    className="motion-chip flex gap-2 text-sm leading-6 text-slate-600"
                    style={{ animationDelay: `${220 + index * 90}ms` }}
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
