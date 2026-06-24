import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Minus, CheckCircle2, AlignLeft, Eye } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Minimal ATS Resume Template — Clean, Content-First, Parser-Safe | CV Prime',
  description:
    'A minimal resume template that is fully ATS-readable: clean lines, generous whitespace, no graphics, and content that does the selling. Fill it with AI, score it against any JD, and export clean. Free to start.',
  alternates: { canonical: 'https://cv-prime.in/minimal-ats-resume-template' },
  keywords: [
    'minimal resume template ats',
    'minimalist resume template',
    'minimal ats resume template',
    'simple resume template ats',
    'clean minimal resume template',
    'minimal cv template',
    'plain resume template ats',
    'simple ats friendly resume',
    'minimalist cv template india',
    'no graphics resume template',
  ],
  openGraph: {
    title: 'Minimal ATS Resume Template — Clean, Content-First, Parser-Safe | CV Prime',
    description:
      'A minimal, fully ATS-readable resume template — clean lines, whitespace, no graphics. Fill with AI and export clean.',
    url: 'https://cv-prime.in/minimal-ats-resume-template',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Minimal ATS resume template — CV Prime' }],
  },
};

const templates = [
  { name: 'Minimal', tier: 'Free', audience: 'Analyst, manager, generalist', why: 'A quiet, content-first system with generous whitespace — the purest minimal look, built to keep the parser and the recruiter focused on your achievements.' },
  { name: 'Classic', tier: 'Free', audience: 'Consulting, finance, operations', why: 'A formal, restrained single-column serif layout — minimal in spirit, conservative in tone, and one of the safest choices for ATS screening.' },
];

const why = [
  { icon: AlignLeft, title: 'Maximum parseability', body: 'No columns, icons, charts, or decoration means nothing for the ATS to trip over. Minimal templates are some of the safest formats for getting read correctly by screening software.' },
  { icon: Eye, title: 'Recruiters scan it faster', body: 'With nothing competing for attention, a minimal layout guides the recruiter straight to your title, skills, and quantified results in the 6–10 seconds they spend on the first pass.' },
  { icon: Minus, title: 'Content carries the weight', body: 'When the design steps back, your bullets have to be strong — which is exactly how recruiters and ATS both evaluate you. CV Prime\'s AI makes sure the content earns it.' },
];

const tips = [
  'Pick minimal for analyst, finance, operations, research, and most ATS-heavy roles',
  'Use whitespace and clear headings instead of lines, boxes, or colour blocks',
  'Lead each role with your most quantified, highest-impact bullet',
  'Keep one column and standard section names so the parse is flawless',
  'Let the content stand out — strengthen every bullet with action verbs and metrics',
];

const faqs = [
  {
    q: 'Is a minimal resume template good for ATS?',
    a: 'Yes — minimal templates are among the best for ATS. Because they avoid columns, tables, icons, graphics, and decorative fonts, there is nothing for the parser to misread, so your content is extracted cleanly and ranked accurately. CV Prime\'s Minimal and Classic templates pair that parser-safe simplicity with clean typography and whitespace, so the resume looks intentional and professional rather than plain.',
  },
  {
    q: 'What is a minimal resume template?',
    a: 'A minimal resume template is a clean, restrained layout that relies on whitespace, clear hierarchy, and strong typography instead of colour, graphics, or multiple columns. The design steps back so the content does the work. This makes it both visually calm and highly ATS-readable, which is why minimal templates are popular for analyst, finance, research, and other roles where substance matters more than flourish.',
  },
  {
    q: 'Is the minimal template free?',
    a: 'Yes. The Minimal and Classic templates are free, and the free plan includes 3 clean PDF exports along with full ATS scoring and AI rewrites — no credit card required. Unlimited, watermark-free exports and the premium templates unlock with a one-time ₹999 Lifetime Pro upgrade. There is no subscription.',
  },
  {
    q: 'Does a minimal resume look too plain to recruiters?',
    a: 'No — done well, minimal reads as confident and senior, not plain. The key is using whitespace, alignment, and typographic hierarchy deliberately so the layout feels intentional. Recruiters generally prefer clarity over decoration, especially in corporate and analytical fields. What makes a minimal resume impressive is the strength of the content within it, which CV Prime\'s AI helps you sharpen.',
  },
  {
    q: 'When should I choose minimal over a modern or designed template?',
    a: 'Choose minimal for roles and industries that value substance and conservative presentation — analyst, finance, consulting, operations, research, and most heavily ATS-screened positions. Choose a modern template for product, startup, and marketing roles where a contemporary look fits the culture, and a creative or designed template only for visual roles reviewed by humans. CV Prime lets you switch templates instantly to match each application.',
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
    { '@type': 'ListItem', position: 2, name: 'Minimal ATS Resume Template', item: 'https://cv-prime.in/minimal-ats-resume-template' },
  ],
};

export default function MinimalATSResumeTemplatePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <Minus className="h-4 w-4" />
            Minimal · Content-first · Parser-safe
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            A minimal resume template that&apos;s built for the ATS
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Clean lines, generous whitespace, zero graphics — a minimal layout that the ATS reads flawlessly and recruiters scan in seconds. Fill it with AI, score it against your JD, and export clean.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Build a minimal resume free
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
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Minimal templates to choose from</h2>
            <p className="mt-4 text-slate-500">The cleanest, most parser-safe layouts in the library</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {templates.map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-slate-950">{t.name}</h3>
                  <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${t.tier === 'Pro' ? 'bg-slate-950 text-white' : 'bg-cyan-50 text-cyan-800'}`}>{t.tier}</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-700">{t.audience}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{t.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why minimal */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Why minimal wins with the ATS</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {why.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-slate-950">{c.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{c.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Making minimal look intentional</h2>
          <div className="mt-10 space-y-3">
            {tips.map((t) => (
              <div key={t} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-sm leading-6 text-slate-700">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Minimal ATS template — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-slate-950">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-slate-900">Related templates & guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/templates', label: 'All templates' },
              { href: '/ats-resume-template', label: 'ATS resume template' },
              { href: '/modern-resume-template-india', label: 'Modern resume template' },
              { href: '/professional-cv-template-india', label: 'Professional CV template' },
              { href: '/one-page-resume', label: 'One-page resume' },
              { href: '/ats-resume-format-2026', label: 'ATS resume format 2026' },
              { href: '/how-to-pass-ats-screening', label: 'How to pass ATS screening' },
              { href: '/ats-score-checker', label: 'Free ATS score checker' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Less template. More signal.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Build a clean, minimal resume the ATS reads perfectly and recruiters love. Free to start.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Build a minimal resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build a minimal resume free" message="Clean, content-first, ATS-perfect minimal template — free" />
    </main>
  );
}
