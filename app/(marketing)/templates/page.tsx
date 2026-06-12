import Link from 'next/link';
import type { Metadata } from 'next';
import type { ComponentType } from 'react';
import { ArrowRight, CheckCircle2, Crown, Layers3 } from 'lucide-react';
import { MobileNav } from '@/components/marketing/MobileNav';
import { TemplateAcademic } from '@/components/templates/TemplateAcademic';
import { TemplateClassic } from '@/components/templates/TemplateClassic';
import { TemplateCreative } from '@/components/templates/TemplateCreative';
import { TemplateExecutive } from '@/components/templates/TemplateExecutive';
import { TemplateMinimal } from '@/components/templates/TemplateMinimal';
import { TemplateModern } from '@/components/templates/TemplateModern';
import { TemplatePremium } from '@/components/templates/TemplatePremium';
import { TemplatePreview } from '@/components/templates/TemplatePreview';
import { TemplateTechnical } from '@/components/templates/TemplateTechnical';
import type { TemplateProps } from '@/components/templates/template-utils';

export const metadata: Metadata = {
  title: 'CV templates',
  description:
    'Browse real A4 CV templates for classic, modern, minimal, executive, creative, technical, academic, and premium applications.',
};

const templates: Array<{
  name: string;
  description: string;
  audience: string;
  tier: 'Free' | 'Pro';
  Template: ComponentType<TemplateProps>;
  accentClassName: string;
}> = [
  {
    name: 'Classic',
    description: 'A formal serif layout with conservative spacing and high recruiter readability.',
    audience: 'Consulting, finance, operations',
    tier: 'Free',
    Template: TemplateClassic,
    accentClassName: 'bg-[#b9a992]',
  },
  {
    name: 'Modern',
    description: 'A crisp sidebar-led template for roles that need energy without looking loud.',
    audience: 'Product, growth, marketing',
    tier: 'Free',
    Template: TemplateModern,
    accentClassName: 'bg-cyan-500',
  },
  {
    name: 'Minimal',
    description: 'A quiet two-column system for people who want content to do the selling.',
    audience: 'Analyst, manager, generalist',
    tier: 'Free',
    Template: TemplateMinimal,
    accentClassName: 'bg-slate-400',
  },
  {
    name: 'Executive',
    description: 'Editorial hierarchy for senior profiles, leadership proof, and board-level polish.',
    audience: 'Leadership, strategy, consulting',
    tier: 'Pro',
    Template: TemplateExecutive,
    accentClassName: 'bg-amber-500',
  },
  {
    name: 'Creative',
    description: 'A bolder visual treatment for portfolio-led profiles that still need structure.',
    audience: 'Design, content, brand',
    tier: 'Pro',
    Template: TemplateCreative,
    accentClassName: 'bg-rose-500',
  },
  {
    name: 'Technical',
    description: 'A dense skills-first layout for engineering, data, security, and product systems work.',
    audience: 'Engineering, data, product',
    tier: 'Pro',
    Template: TemplateTechnical,
    accentClassName: 'bg-emerald-500',
  },
  {
    name: 'Academic',
    description: 'A research-friendly serif layout for publications, education, and credentials.',
    audience: 'Research, teaching, higher ed',
    tier: 'Pro',
    Template: TemplateAcademic,
    accentClassName: 'bg-stone-500',
  },
  {
    name: 'Premium',
    description: 'A high-contrast paid template for applications where the first impression matters.',
    audience: 'High-conviction applications',
    tier: 'Pro',
    Template: TemplatePremium,
    accentClassName: 'bg-amber-300',
  },
];

const selectionRules = [
  'Choose the template that matches the role, not your mood.',
  'Use conservative templates for heavily screened roles.',
  'Use premium layouts when the human reader matters more.',
];

function TemplateGalleryHeader(): JSX.Element {
  return (
    <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6">
      <Link href="/" className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white font-display text-sm font-bold text-slate-950">
          CV
        </span>
        <span className="font-display text-lg font-bold tracking-tight text-white">
          CV Prime
        </span>
      </Link>
      <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
        <Link className="transition hover:text-white" href="/">
          Home
        </Link>
        <Link className="transition hover:text-white" href="/pricing">
          Pricing
        </Link>
        <Link className="transition hover:text-white" href="/login">
          Sign in
        </Link>
      </nav>
      <Link
        href="/signup?next=/ai-cv"
        className="hidden items-center gap-2 rounded-pill bg-brand px-5 py-2.5 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-strong md:inline-flex"
      >
        Use a template
        <ArrowRight className="h-4 w-4" />
      </Link>
      <MobileNav
        links={[
          { href: '/', label: 'Home' },
          { href: '/pricing', label: 'Pricing' },
          { href: '/login', label: 'Sign in' },
        ]}
        ctaHref="/signup?next=/ai-cv"
        ctaLabel="Use a template"
        tone="light"
      />
    </header>
  );
}

export default function TemplatesPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-[#f6f9fc] text-slate-950">
      <section className="aurora-surface fine-noise relative overflow-hidden text-white">
        <TemplateGalleryHeader />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-8 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:pt-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm font-bold text-cyan-100">
              <Layers3 className="h-4 w-4" />
              Real A4 template components
            </div>
            <h1 className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[0.96] tracking-[-0.055em]">
              A template library that looks worth paying for.
            </h1>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 backdrop-blur">
            <p className="text-base leading-8 text-slate-200">
              Every preview below is rendered from the actual CV template component using realistic sample data. The goal is simple: users should see the upgrade value before they create an account.
            </p>
            <div className="mt-6 grid gap-3">
              {selectionRules.map((rule) => (
                <div key={rule} className="flex items-start gap-3 text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:py-14">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
              Gallery
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-[-0.04em]">
              Free templates for starting. Pro templates for serious applications.
            </h2>
          </div>
          <Link
            href="/signup?next=/ai-cv"
            className="inline-flex items-center justify-center gap-2 rounded-pill bg-brand px-6 py-3 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-strong"
          >
            Start with a template
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {templates.map(({ name, description, audience, tier, Template, accentClassName }) => (
            <article
              key={name}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/10"
            >
              <div className="relative flex h-[350px] items-start justify-center overflow-hidden rounded-[1.35rem] bg-[#e9eef5] p-4">
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent" />
                <TemplatePreview Template={Template} scale={0.265} />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className={`h-2 w-14 rounded-full ${accentClassName}`} />
                    <h2 className="mt-4 font-display text-2xl font-bold tracking-[-0.03em]">
                      {name}
                    </h2>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${
                      tier === 'Pro'
                        ? 'bg-slate-950 text-white'
                        : 'bg-cyan-50 text-cyan-800'
                    }`}
                  >
                    {tier === 'Pro' ? <Crown className="h-3 w-3" /> : null}
                    {tier}
                  </span>
                </div>
                <p className="mt-3 text-sm font-bold text-slate-700">{audience}</p>
                <p className="mt-2 text-sm leading-7 text-slate-500">{description}</p>
                <Link
                  href="/signup?next=/ai-cv"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-950"
                >
                  Use this style
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
