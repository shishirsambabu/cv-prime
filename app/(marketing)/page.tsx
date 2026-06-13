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
  Star,
  Wand2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { TemplateExecutive } from '@/components/templates/TemplateExecutive';
import { TemplateModern } from '@/components/templates/TemplateModern';
import { TemplatePremium } from '@/components/templates/TemplatePremium';
import { TemplatePreview } from '@/components/templates/TemplatePreview';
import { TemplateTechnical } from '@/components/templates/TemplateTechnical';
import type { TemplateProps } from '@/components/templates/template-utils';
import { MobileNav } from '@/components/marketing/MobileNav';
import { Reveal } from '@/components/marketing/Reveal';
import { HeroShowcase } from '@/components/marketing/HeroShowcase';
import { InteractiveRewrite } from '@/components/marketing/InteractiveRewrite';
import { SocialProof } from '@/components/marketing/SocialProof';

export const metadata: Metadata = {
  title: 'AI CV builder for job seekers',
  description:
    'Diagnose rejection risk, tailor your CV to a job description, choose premium templates, and export a recruiter-ready PDF.',
};

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

const navLinks = [
  { href: '/templates', label: 'Templates' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/login', label: 'Sign in' },
];

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
      <span className="flex h-10 w-10 items-center justify-center rounded-card bg-slate-950 font-display text-sm font-bold text-white shadow-xl shadow-slate-950/20">
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
      <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
        {navLinks.map((link) => (
          <Link key={link.href} className="transition hover:text-slate-950" href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <Link
        href={startPath}
        className="group hidden h-11 items-center gap-2 rounded-pill bg-brand px-5 text-sm font-bold text-brand-foreground shadow-xl shadow-brand/25 transition hover:-translate-y-0.5 hover:bg-brand-strong md:inline-flex"
      >
        Get started
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </Link>
      <MobileNav links={navLinks} ctaHref={startPath} ctaLabel="Get started" tone="dark" />
    </header>
  );
}

function TrustCue(): JSX.Element {
  const avatars = [
    { initial: 'A', className: 'bg-brand' },
    { initial: 'K', className: 'bg-cyan-500' },
    { initial: 'P', className: 'bg-amber-500' },
    { initial: 'R', className: 'bg-emerald-500' },
  ];

  return (
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <div className="flex -space-x-3">
        {avatars.map((avatar) => (
          <span
            key={avatar.initial}
            className={`flex h-10 w-10 items-center justify-center rounded-pill border-2 border-white font-display text-sm font-bold text-white shadow-sm ${avatar.className}`}
          >
            {avatar.initial}
          </span>
        ))}
      </div>
      <div>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
          <span className="ml-1 text-sm font-bold text-slate-900">4.8/5</span>
        </div>
        <p className="mt-0.5 text-sm text-slate-600">
          Trusted by <span className="font-semibold text-slate-900">1,000+</span> job seekers
        </p>
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
    <article className="group rounded-card border border-slate-200 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/10">
      <div className="relative flex h-72 items-start justify-center overflow-hidden rounded-inner border border-slate-200 bg-[#e9eef5] p-4">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/85 to-transparent" />
        <TemplatePreview Template={Template} scale={0.214} />
      </div>
      <div className="p-3">
        <div className={`h-2 w-14 rounded-pill ${accent}`} />
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
            <span className="flex h-9 w-9 items-center justify-center rounded-inner bg-slate-950 font-display text-xs font-bold text-white">
              CV
            </span>
            <span className="font-display text-base font-bold text-slate-950">CV Prime</span>
          </div>
          <p className="mt-3 max-w-lg leading-6">
            AI-assisted CV diagnosis, tailoring, templates, and export for job seekers who want a stronger application loop.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 font-medium text-slate-600">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(99,102,241,0.18),transparent_28%),radial-gradient(circle_at_80%_8%,rgba(251,191,36,0.16),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.92)_72%,#ffffff)]" />
        <MarketingNav />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-14 sm:px-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:pt-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-pill border border-brand/20 bg-white/85 px-4 py-2 text-sm font-semibold text-brand shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              AI CV builder for serious job seekers
            </div>
            <h1 className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
              Turn a rejected CV into an interview-ready one.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              CV Prime shows why a CV is getting ignored, rewrites the weak parts, and helps job seekers export a premium, recruiter-ready PDF.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={startPath}
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-pill bg-brand px-7 py-4 text-sm font-bold text-brand-foreground shadow-2xl shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-strong"
              >
                Build a CV free
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/templates"
                className="inline-flex h-14 items-center justify-center rounded-pill border border-slate-300 bg-white/85 px-7 py-4 text-sm font-bold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-400"
              >
                See premium templates
              </Link>
            </div>

            <TrustCue />
          </div>

          <HeroShowcase />
        </div>
      </section>

      <section className="aurora-surface fine-noise relative text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <Reveal className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                See it work
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Watch a weak bullet become a hiring-grade one.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              No signup, no demo video. Pick a sample bullet, rewrite it, and watch the readiness
              score climb — exactly how the product feels once you are inside.
            </p>
          </Reveal>

          <Reveal className="mt-10">
            <InteractiveRewrite />
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <Reveal className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">
                The operating loop
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                A paid product has to reduce anxiety, not just decorate a document.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              The experience is designed around the emotional moment that matters: the user is about to apply and does not know whether the CV is strong enough. CV Prime gives them a diagnosis, a repair path, and a clean export.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {operatingLoop.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal
                  key={step.title}
                  as="article"
                  delayMs={index * 80}
                  className="rounded-card border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-inner bg-brand text-brand-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-sm font-bold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold text-slate-950">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{step.body}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <SocialProof />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
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
              className="mt-8 inline-flex items-center gap-2 rounded-pill bg-brand px-6 py-3 text-sm font-bold text-brand-foreground transition hover:-translate-y-0.5 hover:bg-brand-strong"
            >
              Start the diagnosis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal className="rounded-panel border border-slate-200 bg-[#f7fafc] p-4 shadow-2xl shadow-slate-950/8">
            <div className="rounded-card border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Current draft
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-slate-950">
                    Rejection risk report
                  </h3>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-pill bg-amber-50 font-display text-2xl font-bold text-amber-700">
                  62
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {rejectionSignals.map((signal) => (
                  <div
                    key={signal}
                    className="flex items-start gap-3 rounded-inner border border-slate-200 bg-slate-50 p-4"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-pill bg-rose-500" />
                    <p className="text-sm font-medium leading-6 text-slate-700">{signal}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-inner bg-slate-950 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                  Suggested fix
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Replace responsibility-led bullets with outcome-led bullets, then add the missing keywords naturally to the recent role and skills section.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
                Product depth
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                The SaaS value is inside the workflow.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-600">
              Every feature has a clear job: make the user more confident before sending the CV.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {productPillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <Reveal
                  key={pillar.title}
                  as="article"
                  delayMs={index * 70}
                  className="rounded-card border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/10"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-inner bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-pill bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {pillar.stat}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-xl font-bold text-slate-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{pillar.body}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <Reveal className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
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
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {templateTiles.map((template, index) => (
              <Reveal key={template.name} delayMs={index * 70}>
                <TemplateCard {...template} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:py-24">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
              Pricing story
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Free to start. Pro when the application gets serious.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              The upgrade is not for decoration. It unlocks the moment that matters commercially: after 3 free PDF downloads, serious job seekers upgrade for unlimited clean exports.
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            <Reveal as="article" className="rounded-card border border-white/10 bg-white/[0.06] p-6">
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
            </Reveal>
            <Reveal as="article" delayMs={90} className="rounded-card border border-brand bg-white p-6 text-slate-950 shadow-2xl shadow-brand/20">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold">Pro</h3>
                <span className="rounded-pill bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                  Best value
                </span>
              </div>
              <p className="mt-5 font-display text-5xl font-bold">Rs 249</p>
              <p className="mt-2 text-sm font-medium text-slate-500">per month</p>
              <ul className="mt-6 space-y-3 text-sm font-medium text-slate-700">
                {['Premium templates', 'AI rewrite tools', 'Unlimited clean PDF export', 'Role-specific CV versions'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={startPath}
                className="mt-7 inline-flex w-full items-center justify-center rounded-pill bg-brand px-5 py-3 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong"
              >
                Start with CV Prime
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
                Questions
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em]">
                Built around trust.
              </h2>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {faq.map((item, index) => (
                <Reveal key={item.question} as="article" delayMs={index * 80} className="rounded-card border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-display text-lg font-bold text-slate-950">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{item.answer}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="mt-12 rounded-panel border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-950/8 sm:p-8">
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
                className="inline-flex items-center justify-center gap-2 rounded-pill bg-brand px-6 py-3 text-sm font-bold text-brand-foreground transition hover:-translate-y-0.5 hover:bg-brand-strong"
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <MarketingFooter />
    </main>
  );
}
