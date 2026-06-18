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
  Sparkles,
  Wand2,
} from 'lucide-react';

const START_PATH = '/signup?next=/dashboard';

const steps = [
  {
    title: 'Sign up',
    body: 'Create the workspace first so every generated CV is saved.',
    icon: LayoutDashboard,
  },
  {
    title: 'Paste JD',
    body: 'Use the exact role to find keywords, seniority signals, and gaps.',
    icon: FileText,
  },
  {
    title: 'Upload CV',
    body: 'Add PDF, DOCX, TXT, or pasted text from your current CV.',
    icon: FileUp,
  },
  {
    title: 'Generate',
    body: 'Pick a template and get a saved draft with score and fixes.',
    icon: Wand2,
  },
] as const;

const jdKeywords = ['GTM', 'Lifecycle', 'Sales enablement', 'Funnel metrics'];
const fixes = [
  'Add lifecycle marketing to the summary.',
  'Rewrite launch work with pipeline impact.',
  'Keep facts from the uploaded CV only.',
];

function MiniCV(): JSX.Element {
  return (
    <div className="overflow-hidden rounded-inner border border-slate-200 bg-white p-4 shadow-xl shadow-slate-950/8">
      <div className="grid min-h-[310px] grid-cols-[64px_1fr] overflow-hidden rounded-xl border border-slate-200">
        <aside className="bg-slate-950 p-3">
          <div className="h-9 w-9 rounded-pill bg-white/90" />
          <div className="mt-6 space-y-2">
            <div className="h-1.5 rounded-pill bg-white/40" />
            <div className="h-1.5 w-4/5 rounded-pill bg-white/30" />
            <div className="h-1.5 w-3/5 rounded-pill bg-white/30" />
          </div>
        </aside>
        <div className="p-4">
          <div className="h-3.5 w-36 rounded-pill bg-slate-950" />
          <div className="mt-2 h-2 w-24 rounded-pill bg-brand/70" />
          <div className="mt-6 space-y-4">
            {['Summary', 'Experience', 'Skills', 'Projects'].map((section, index) => (
              <div key={section}>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  {section}
                </p>
                <div className="mt-2 space-y-1.5">
                  <div className="h-1.5 rounded-pill bg-slate-200" />
                  <div
                    className={`h-1.5 rounded-pill bg-slate-200 ${
                      index % 2 === 0 ? 'w-5/6' : 'w-3/4'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FlowHero(): JSX.Element {
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
            Product demo
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
            A clear path from job post to tailored CV.
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-8 text-slate-600">
          No confusing mini-app. This is the actual sequence users follow after signup:
          connect their AI key, paste the JD, upload their CV, choose a template, and export.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <article
              key={step.title}
              className="rounded-card border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-inner bg-brand text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-display text-sm font-bold text-slate-300">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-slate-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{step.body}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-5 overflow-hidden rounded-panel border border-slate-200 bg-white shadow-2xl shadow-slate-950/10">
        <div className="flex flex-col gap-4 border-b border-slate-200 bg-slate-950 px-5 py-4 text-white lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-inner bg-white/10 text-cyan-200">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold">What CV Prime does with your inputs</p>
              <p className="mt-1 text-xs text-slate-400">
                JD + uploaded CV + template choice become one editable draft.
              </p>
            </div>
          </div>
          <Link
            href={START_PATH}
            className="inline-flex items-center justify-center gap-2 rounded-pill bg-brand px-4 py-2.5 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong"
          >
            Start the workflow
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1fr_0.92fr_1fr]">
          <section className="border-b border-slate-200 bg-slate-50 p-5 lg:border-b-0 lg:border-r">
            <div className="rounded-card border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-inner bg-slate-950 text-white">
                  <KeyRound className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-xl font-bold text-slate-950">
                    Inputs stay understandable
                  </p>
                  <p className="mt-1 text-sm text-slate-500">The flow asks for one thing at a time.</p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-inner border border-cyan-200 bg-cyan-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                    Job description
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                    Product marketing manager for B2B SaaS, GTM, lifecycle, sales enablement.
                  </p>
                </div>
                <div className="rounded-inner border border-slate-200 bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                    Uploaded CV
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                    Parsed into summary, experience, skills, projects, and education.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white p-5 lg:border-b-0 lg:border-r">
            <div className="rounded-card bg-slate-950 p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                    AI diagnosis
                  </p>
                  <p className="mt-2 font-display text-4xl font-bold">88/100</p>
                </div>
                <GaugeCircle className="h-10 w-10 text-cyan-200" />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {jdKeywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-pill border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <div className="mt-5 space-y-3">
                {fixes.map((fix) => (
                  <div key={fix} className="flex items-start gap-2 rounded-inner bg-white/[0.07] p-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    <p className="text-sm leading-6 text-slate-200">{fix}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#eef2f8] p-5">
            <MiniCV />
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <span className="inline-flex items-center justify-center gap-2 rounded-pill bg-brand px-4 py-2 text-xs font-bold text-white">
                <Wand2 className="h-3.5 w-3.5" />
                Editable draft
              </span>
              <span className="inline-flex items-center justify-center gap-2 rounded-pill border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700">
                <Download className="h-3.5 w-3.5" />
                Export PDF
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
