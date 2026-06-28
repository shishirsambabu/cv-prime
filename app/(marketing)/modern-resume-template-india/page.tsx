import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Sparkles, CheckCircle2, Zap, LayoutGrid } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Modern Resume Template India — Clean, ATS-Ready Designs | CV Prime',
  description:
    'Modern resume templates for India — clean, contemporary, and still ATS-readable. Built for product, tech, startup, and marketing roles. Fill with AI, tailor to the job, and export a crisp PDF. Free to start.',
  alternates: { canonical: 'https://cv-prime.in/modern-resume-template-india' },
  keywords: [
    'modern resume template india',
    'modern cv template india',
    'modern resume format india',
    'contemporary resume template',
    'clean resume template 2026',
    'modern resume design india',
    'sleek resume template',
    'modern professional resume template',
    'best modern resume template india',
    'modern ats resume template',
  ],
  openGraph: {
    title: 'Modern Resume Template India — Clean, ATS-Ready Designs | CV Prime',
    description:
      'Clean, contemporary, ATS-readable modern resume templates for product, tech, startup, and marketing roles. Free to start.',
    url: 'https://cv-prime.in/modern-resume-template-india',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Modern resume template India — CV Prime' }],
  },
};

const templates = [
  { name: 'Modern', tier: 'Free', audience: 'Product, growth, marketing', why: 'A crisp, contemporary layout with energy and clear hierarchy — modern without looking loud, and fully ATS-readable.' },
  { name: 'Minimal', tier: 'Free', audience: 'Analyst, manager, generalist', why: 'A quiet, content-first design with generous whitespace — modern minimalism that keeps the focus on your achievements.' },
  { name: 'Technical', tier: 'Pro', audience: 'Engineering, data, product', why: 'A sleek, skills-first layout for tech roles — contemporary structure that surfaces your stack and impact instantly.' },
];

const why = [
  { icon: Sparkles, title: 'Contemporary, not corporate', body: 'Clean typography, smart spacing, and a confident layout that fits product companies, startups, and modern teams — without the dated, heavy feel of traditional CVs.' },
  { icon: Zap, title: 'Still passes the ATS', body: 'Modern design is only useful if the software can read it. CV Prime\'s modern templates stay single-column and parser-safe, so they look current and still get past the scan.' },
  { icon: LayoutGrid, title: 'Built for the 2026 job market', body: 'Recruiters skim fast and screen with AI-assisted tools. A clean modern layout front-loads your impact and reads well in seconds, on screen and in a summary.' },
];

const tips = [
  'Choose modern over formal for startups, product, growth, design-adjacent, and marketing roles',
  'Keep it clean — modern means restraint and whitespace, not gradients and icons',
  'Front-load your strongest, most quantified bullet in each role',
  'Stay single-column so the modern look does not cost you the ATS',
  'Tailor keywords to each JD instead of reusing one generic resume',
];

const faqs = [
  {
    q: 'What is the best modern resume template for India in 2026?',
    a: 'For modern, contemporary roles in India, CV Prime\'s Modern template is the best default — a crisp, clean layout with clear hierarchy that suits product, growth, startup, and marketing roles. For an even more minimal look, the Minimal template uses generous whitespace, and for tech roles the Technical template gives a sleek, skills-first structure. All three are designed to look current while remaining ATS-readable, so they pass the software screen as well as impress a human.',
  },
  {
    q: 'Are modern resume templates ATS-friendly?',
    a: 'They can be — but many are not. Modern templates from generic design tools often use multi-column layouts, sidebars, icons, and graphics that break ATS parsing. CV Prime\'s modern templates are deliberately built single-column and parser-safe, so you get the clean, contemporary look without sacrificing machine readability. That combination is the whole point: modern on the surface, ATS-compliant underneath.',
  },
  {
    q: 'Is the modern resume template free?',
    a: 'Yes — the Modern and Minimal templates are free, and the free plan includes 3 clean PDF exports plus full ATS scoring and AI rewrites with no credit card. The Technical template and unlimited watermark-free exports unlock with a one-time ₹999 Lifetime Pro upgrade. There is no subscription.',
  },
  {
    q: 'Who should use a modern resume template?',
    a: 'Modern templates suit product managers, designers, marketers, growth and startup professionals, and engineers at product companies — roles and employers where a clean, contemporary look signals that you fit the culture. For traditional corporate, banking, consulting, and government roles, a more formal template is usually a safer choice. CV Prime lets you switch templates instantly, so you can match the style to each application.',
  },
  {
    q: 'How is a modern template different from a minimal one?',
    a: 'A modern template uses contemporary structure and subtle visual energy — clear hierarchy and crisp typography — to feel current. A minimal template strips back even further, relying on whitespace and clean lines so the content carries everything. Both are clean and ATS-readable; modern feels a touch more designed, minimal feels more understated. CV Prime offers both so you can pick the tone that fits the role.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Modern Resume Template India', item: 'https://cv-prime.in/modern-resume-template-india' },
  ],
};

export default function ModernResumeTemplatePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <Sparkles className="h-4 w-4" />
            Modern · Clean · ATS-ready · India
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Modern resume templates — clean, current, and ATS-ready
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A contemporary look that fits product, tech, startup, and marketing roles — without the multi-column gimmicks that break the ATS. Fill a modern template with AI, tailor it to the JD, and export a crisp PDF.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Build a modern resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/templates" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Browse all templates
            </Link>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Modern templates to choose from</h2>
            <p className="mt-4 text-slate-400">Clean, contemporary layouts that still pass the scan</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {templates.map((t) => (
              <div key={t.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-white">{t.name}</h3>
                  <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${t.tier === 'Pro' ? 'bg-slate-950 text-white' : 'bg-cyan-500/10 text-cyan-200'}`}>{t.tier}</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-300">{t.audience}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{t.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why modern */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Why a modern template works in 2026</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {why.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="rounded-2xl bg-white/[0.04] p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{c.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{c.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Get the modern look right</h2>
          <div className="mt-10 space-y-3">
            {tips.map((t) => (
              <div key={t} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-sm leading-6 text-slate-300">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Modern resume template — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white/[0.04] p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-white">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-white/10 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-white">Related templates & guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/templates', label: 'All templates' },
              { href: '/minimal-ats-resume-template', label: 'Minimal ATS template' },
              { href: '/professional-cv-template-india', label: 'Professional CV template' },
              { href: '/resume-template-for-engineers', label: 'Resume template for engineers' },
              { href: '/ats-resume-template', label: 'ATS resume template' },
              { href: '/ats-resume-format-2026', label: 'ATS resume format 2026' },
              { href: '/resume-builder/product-manager', label: 'Product manager resume' },
              { href: '/resume-builder/ui-ux-designer', label: 'UI/UX designer resume' },
              { href: '/ats-score-checker', label: 'Free ATS score checker' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-brand hover:text-brand">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Modern on top, ATS-ready underneath</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Build a clean, contemporary resume that reads great and still passes the scan. Free to start.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Build a modern resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build a modern resume free" message="Clean, contemporary, ATS-ready resume templates — free" />
    </main>
  );
}
