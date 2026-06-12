import Link from 'next/link';
import type { Metadata } from 'next';
import type { ComponentType } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileSearch,
  GaugeCircle,
  Layers3,
  LockKeyhole,
  Sparkles,
  Wand2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { TemplateExecutive } from '@/components/templates/TemplateExecutive';
import { TemplateModern } from '@/components/templates/TemplateModern';
import { TemplatePremium } from '@/components/templates/TemplatePremium';
import { TemplatePreview } from '@/components/templates/TemplatePreview';
import { TemplateTechnical } from '@/components/templates/TemplateTechnical';
import type { TemplateProps } from '@/components/templates/template-utils';

export const metadata: Metadata = {
  title: 'AI CV builder for job seekers',
  description:
    'Diagnose rejection risk, tailor your CV to a job description, choose premium templates, and export a recruiter-ready PDF.',
};

const proofStats = [
  { value: '86', label: 'Readiness score', detail: 'Before export' },
  { value: '12', label: 'Keyword gaps', detail: 'Found from the role' },
  { value: '3x', label: 'Rewrite angles', detail: 'For every weak bullet' },
];

const operatingLoop: Array<{
  title: string;
  body: string;
  icon: LucideIcon;
}> = [
  {
    title: 'Diagnose the rejection risk',
    body: 'See the weak signals hiring software and recruiters notice first: missing keywords, vague bullets, poor hierarchy, and thin proof.',
    icon: FileSearch,
  },
  {
    title: 'Repair the story',
    body: 'Turn generic responsibilities into sharper impact bullets, reorder sections, and tune the CV around the exact role.',
    icon: Wand2,
  },
  {
    title: 'Ship with confidence',
    body: 'Choose an ATS-safe template, export a clean PDF, and keep each role-specific version organized in your workspace.',
    icon: Download,
  },
];

const rejectionSignals = [
  'No measurable outcomes in recent experience',
  'Missing "lifecycle marketing" from target role',
  'Summary reads like a bio, not a hiring pitch',
  'Skills section is too broad for the job description',
];

const productPillars: Array<{
  title: string;
  body: string;
  icon: LucideIcon;
  stat: string;
}> = [
  {
    title: 'ATS readiness',
    body: 'A score that explains the why, not just a number that creates panic.',
    icon: GaugeCircle,
    stat: '0-100',
  },
  {
    title: 'AI rewrite studio',
    body: 'Three stronger versions for weak bullets, written around outcomes and proof.',
    icon: Sparkles,
    stat: '3 drafts',
  },
  {
    title: 'Premium templates',
    body: 'Distinct layouts for different careers, not the same CV with new colors.',
    icon: Layers3,
    stat: '8 styles',
  },
  {
    title: 'Private key model',
    body: 'Your OpenRouter key is encrypted before storage, and never exposed to the browser.',
    icon: LockKeyhole,
    stat: 'AES-256',
  },
];

const startPath = '/signup?next=/ai-cv';

const templateTiles = [
  {
    name: 'Modern',
    useCase: 'Product, growth, marketing',
    accent: 'bg-cyan-500',
    Template: TemplateModern,
  },
  {
    name: 'Executive',
    useCase: 'Leadership and strategy',
    accent: 'bg-amber-500',
    Template: TemplateExecutive,
  },
  {
    name: 'Technical',
    useCase: 'Engineering and data',
    accent: 'bg-emerald-500',
    Template: TemplateTechnical,
  },
  {
    name: 'Premium',
    useCase: 'High-conviction applications',
    accent: 'bg-amber-300',
    Template: TemplatePremium,
  },
];

const faq = [
  {
    question: 'Is CV Prime just another template site?',
    answer:
      'No. The template is only the last mile. The core product is diagnosis, rewriting, tailoring, and exporting a CV that feels ready to send.',
  },
  {
    question: 'Why would someone pay for this?',
    answer:
      'Because the product removes uncertainty at the exact moment job seekers feel it: before applying, before exporting, and before sending the CV.',
  },
  {
    question: 'Does Get started actually start the workflow?',
    answer:
      'Yes. It sends users into sign up, then into the CV workspace where they can create and edit their first CV.',
  },
];

function BrandMark(): JSX.Element {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="CV Prime home">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 font-display text-sm font-bold text-white shadow-xl shadow-slate-950/20">
        CV
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-slate-950">
        CV Prime
      </span>
    </Link>
  );
}

function MarketingNav(): JSX.Element {
  return (
    <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6">
      <BrandMark />
      <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
        <Link className="transition hover:text-slate-950" href="/templates">
          Templates
        </Link>
        <Link className="transition hover:text-slate-950" href="/pricing">
          Pricing
        </Link>
        <Link className="transition hover:text-slate-950" href="/login">
          Sign in
        </Link>
      </nav>
      <Link
        href={startPath}
        className="group inline-flex h-11 items-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-bold text-white shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-black"
      >
        Get started
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </Link>
    </header>
  );
}

function KeywordPill({
  label,
  tone,
}: {
  label: string;
  tone: 'present' | 'missing';
}): JSX.Element {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-bold ${
        tone === 'present'
          ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
          : 'border-rose-200 bg-rose-50 text-rose-700'
      }`}
    >
      {label}
    </span>
  );
}

function ProductCommandCenter(): JSX.Element {
  return (
    <div className="relative mx-auto max-w-[590px] lg:ml-auto">
      <div className="absolute -left-6 top-12 hidden h-36 w-36 rounded-full bg-cyan-300/30 blur-3xl md:block" />
      <div className="absolute -right-8 bottom-10 hidden h-40 w-40 rounded-full bg-amber-300/30 blur-3xl md:block" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/65 bg-white/80 p-3 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
        <div className="rounded-[1.5rem] border border-slate-200 bg-[#eef3f8]">
          <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
            <div>
              <div className="font-display text-sm font-bold text-slate-950">
                CV Prime workspace
              </div>
              <p className="mt-1 text-xs font-medium text-slate-500">
                Tailor for Product marketing manager
              </p>
            </div>
            <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
              Live score 86
            </div>
          </div>

          <div className="grid gap-3 p-3 lg:grid-cols-[1fr_218px]">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">
                    Recruiter preview
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-slate-950">
                    Aarav Mehta
                  </h3>
                </div>
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-bold text-slate-600">
                  Modern
                </span>
              </div>
              <div className="mt-5 flex justify-center overflow-hidden rounded-2xl bg-slate-100 p-5">
                <TemplatePreview Template={TemplateModern} scale={0.255} />
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    ATS gaps
                  </p>
                  <GaugeCircle className="h-4 w-4 text-cyan-700" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <KeywordPill label="GTM" tone="present" />
                  <KeywordPill label="SQL" tone="present" />
                  <KeywordPill label="Lifecycle" tone="missing" />
                  <KeywordPill label="Enablement" tone="missing" />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-950 p-4 text-white shadow-xl shadow-slate-950/20">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                  <Sparkles className="h-4 w-4" />
                  Rewrite
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300 line-through decoration-rose-300/70">
                  Responsible for campaigns and sales material.
                </p>
                <p className="mt-4 rounded-xl bg-white/[0.08] p-3 text-sm leading-6 text-white">
                  Built launch messaging and battlecards adopted by a 42-person sales team, contributing to Rs 4.8 crore in influenced pipeline.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
                  Next action
                </p>
                <p className="mt-2 text-sm font-bold leading-5 text-amber-950">
                  Add measurable proof to the most recent role before exporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TemplateCard({
  name,
  useCase,
  accent,
  Template,
}: {
  name: string;
  useCase: string;
  accent: string;
  Template: ComponentType<TemplateProps>;
}): JSX.Element {
  return (
    <article className="group rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/10">
      <div className="relative flex h-72 items-start justify-center overflow-hidden rounded-[1.35rem] border border-slate-200 bg-[#e9eef5] p-4">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/85 to-transparent" />
        <TemplatePreview Template={Template} scale={0.214} />
      </div>
      <div className="p-3">
        <div className={`h-2 w-14 rounded-full ${accent}`} />
        <h3 className="mt-4 font-display text-xl font-bold text-slate-950">{name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-500">{useCase}</p>
      </div>
    </article>
  );
}

function MarketingFooter(): JSX.Element {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 font-display text-xs font-bold text-white">
              CV
            </span>
            <span className="font-display text-base font-bold text-slate-950">CV Prime</span>
          </div>
          <p className="mt-3 max-w-lg leading-6">
            AI-assisted CV diagnosis, tailoring, templates, and export for job seekers who want a stronger application loop.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 font-semibold text-slate-600">
          <Link className="transition hover:text-slate-950" href="/templates">
            Templates
          </Link>
          <Link className="transition hover:text-slate-950" href="/pricing">
            Pricing
          </Link>
          <Link className="transition hover:text-slate-950" href="/privacy">
            Privacy
          </Link>
          <Link className="transition hover:text-slate-950" href="/terms">
            Terms
          </Link>
          <Link className="transition hover:text-slate-950" href={startPath}>
            Get started
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default function HomePage(): JSX.Element {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="premium-grid relative min-h-screen bg-[#f6f9fc]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(34,211,238,0.2),transparent_28%),radial-gradient(circle_at_80%_8%,rgba(251,191,36,0.16),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.92)_72%,#ffffff)]" />
        <MarketingNav />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-14 sm:px-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:pt-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/85 px-4 py-2 text-sm font-bold text-cyan-800 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              AI CV builder for serious job seekers
            </div>
            <h1 className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
              Turn a rejected CV into an interview-ready one.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              CV Prime shows why a CV is getting ignored, rewrites the weak parts, and helps job seekers export a premium, recruiter-ready PDF.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={startPath}
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white shadow-2xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-black"
              >
                Build a CV free
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/templates"
                className="inline-flex h-14 items-center justify-center rounded-full border border-slate-300 bg-white/85 px-7 py-4 text-sm font-bold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-400"
              >
                See premium templates
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {proofStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white bg-white/80 p-4 shadow-xl shadow-slate-950/5 backdrop-blur"
                >
                  <div className="font-display text-3xl font-bold text-slate-950">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm font-bold text-slate-700">{stat.label}</div>
                  <div className="mt-1 text-xs font-medium text-slate-500">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <ProductCommandCenter />
        </div>
      </section>

      <section className="aurora-surface fine-noise relative text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-200">
                The operating loop
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                A paid product has to reduce anxiety, not just decorate a document.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              The experience is designed around the emotional moment that matters: the user is about to apply and does not know whether the CV is strong enough. CV Prime gives them a diagnosis, a repair path, and a clean export.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {operatingLoop.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-black/10 backdrop-blur"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-sm font-bold text-white/40">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{step.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">
              Rejection diagnosis
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              The product should tell users what is wrong before they spend another week applying.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Generic CV builders make users choose a template and hope. CV Prime turns the CV into a set of fixable signals.
            </p>
            <Link
              href={startPath}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black"
            >
              Start the diagnosis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#f7fafc] p-4 shadow-2xl shadow-slate-950/8">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                    Current draft
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-slate-950">
                    Rejection risk report
                  </h3>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 font-display text-2xl font-bold text-amber-700">
                  62
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {rejectionSignals.map((signal) => (
                  <div
                    key={signal}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-500" />
                    <p className="text-sm font-semibold leading-6 text-slate-700">{signal}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
                  Suggested fix
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Replace responsibility-led bullets with outcome-led bullets, then add the missing keywords naturally to the recent role and skills section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">
                Product depth
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                The SaaS value is inside the workflow.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-600">
              Every feature has a clear job: make the user more confident before sending the CV.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {productPillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/10"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-800">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                      {pillar.stat}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-xl font-bold text-slate-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{pillar.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">
                Template system
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Templates with enough taste to justify an upgrade.
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 text-slate-600">
                Free users get credible starter layouts. Pro users unlock sharper visual identities for senior, technical, creative, and high-conviction applications.
              </p>
              <Link
                href="/templates"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-950 underline underline-offset-4"
              >
                Browse all templates
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {templateTiles.map((template) => (
              <TemplateCard key={template.name} {...template} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">
              Pricing story
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Free to start. Pro when the application gets serious.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              The upgrade is not for decoration. It unlocks the moment that matters commercially: after 3 free PDF downloads, serious job seekers upgrade for unlimited clean exports.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6">
              <h3 className="font-display text-2xl font-bold">Free</h3>
              <p className="mt-5 font-display text-5xl font-bold">Rs 0</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Build drafts, test the AI flow, and download your first 3 PDFs.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {['Unlimited drafts', '3 free PDF downloads', 'Free templates'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-[1.75rem] border border-cyan-300 bg-white p-6 text-slate-950 shadow-2xl shadow-cyan-500/20">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold">Pro</h3>
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-800">
                  Best value
                </span>
              </div>
              <p className="mt-5 font-display text-5xl font-bold">Rs 249</p>
              <p className="mt-2 text-sm font-bold text-slate-500">per month</p>
              <ul className="mt-6 space-y-3 text-sm font-semibold text-slate-700">
                {['Premium templates', 'AI rewrite tools', 'Unlimited clean PDF export', 'Role-specific CV versions'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={startPath}
                className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-black"
              >
                Start with CV Prime
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">
                Questions
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em]">
                Built around trust.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {faq.map((item) => (
                <article key={item.question} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-display text-lg font-bold text-slate-950">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-950/8 sm:p-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-slate-950">
                  Start with a real CV, not another blank template.
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Create an account and go straight into the CV workspace.
                </p>
              </div>
              <Link
                href={startPath}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black"
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </main>
  );
}
