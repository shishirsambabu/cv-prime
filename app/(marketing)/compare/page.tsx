import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, GitCompareArrows } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Compare CV Prime vs Every Resume Builder — 2026 | CV Prime',
  description:
    'Compare CV Prime against Zety, Resume.io, Novoresume, Teal, Enhancv, Kickresume, Rezi, Jobscan, Canva, Google Docs, Overleaf, and more. Feature, pricing, and ATS-scoring comparisons for Indian job seekers.',
  alternates: { canonical: 'https://cv-prime.in/compare' },
  keywords: [
    'cv prime comparisons',
    'best resume builder comparison india',
    'resume builder alternatives india',
    'ats resume builder comparison',
    'cv prime vs competitors',
  ],
  openGraph: {
    title: 'Compare CV Prime vs Every Resume Builder — 2026',
    description:
      'Feature-by-feature comparisons of CV Prime against every major resume builder, for Indian job seekers.',
    url: 'https://cv-prime.in/compare',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Compare CV Prime — CV Prime' }],
  },
};

type Comparison = { href: string; name: string; blurb: string };

const comparisons: Comparison[] = [
  { href: '/cv-prime-vs-zety', name: 'Zety', blurb: 'ATS scoring + INR pricing vs a larger US template library' },
  { href: '/cv-prime-vs-resume-io', name: 'Resume.io', blurb: 'ATS scoring and a real free tier vs a watermarked free plan' },
  { href: '/cv-prime-vs-novoresume', name: 'Novoresume', blurb: 'AI JD tailoring vs a design-first, no-ATS builder' },
  { href: '/cv-prime-vs-teal', name: 'Teal', blurb: 'India pricing + cover letters vs a US-priced job tracker' },
  { href: '/cv-prime-vs-enhancv', name: 'Enhancv', blurb: 'ATS scoring vs a visual-first builder with no keyword analysis' },
  { href: '/cv-prime-vs-kickresume', name: 'Kickresume', blurb: 'Full ATS + AI tailoring vs limited AI suggestions' },
  { href: '/cv-prime-vs-rezi', name: 'Rezi', blurb: 'Both score ATS match — compare India pricing and job tracker' },
  { href: '/cv-prime-vs-jobscan', name: 'Jobscan', blurb: 'Full builder + ATS scorer vs a keyword-analysis-only scanner' },
  { href: '/cv-prime-vs-resume-genius', name: 'Resume Genius', blurb: 'ATS scoring + INR pricing vs a USD subscription with none' },
  { href: '/cv-prime-vs-myperfectresume', name: 'MyPerfectResume', blurb: 'Transparent ₹999 one-time vs a confusing USD auto-renewal' },
  { href: '/cv-prime-vs-canva', name: 'Canva', blurb: 'Guaranteed ATS-safe templates vs designs that often fail parsers' },
  { href: '/cv-prime-vs-google-docs', name: 'Google Docs', blurb: 'AI tailoring + ATS scoring vs fully manual formatting' },
  { href: '/cv-prime-vs-linkedin-resume', name: 'LinkedIn Resume Builder', blurb: 'Job-specific tailoring vs a static profile-to-PDF export' },
  { href: '/cv-prime-vs-overleaf', name: 'Overleaf (LaTeX)', blurb: 'ATS-safe single-column output vs LaTeX layouts that can break parsers' },
  { href: '/cv-prime-vs-flowcv', name: 'FlowCV', blurb: 'ATS scoring against a JD vs a clean builder with no ATS analysis' },
  { href: '/cv-prime-vs-resume-worded', name: 'Resume Worded', blurb: 'A full builder + ATS scorer vs a feedback-only tool (~$49/mo)' },
  { href: '/cv-prime-vs-resumelab', name: 'ResumeLab', blurb: 'ATS scoring + ₹999 one-time vs a USD subscription with none' },
  { href: '/cv-prime-vs-visualcv', name: 'VisualCV', blurb: 'ATS-first resume builder vs a portfolio-focused tool' },
];

const faqs = [
  {
    q: 'How is CV Prime different from other resume builders?',
    a: 'CV Prime is the only India-first resume builder that combines ATS keyword scoring against a specific job description, AI resume tailoring, a free cover letter generator, and a job application tracker — priced at ₹999 one-time in INR with UPI support. Most competitors charge recurring USD subscriptions and many have no ATS scoring at all.',
  },
  {
    q: 'Which resume builder has the best ATS scoring?',
    a: 'Among the tools compared here, CV Prime, Rezi, Teal, and Jobscan offer some form of ATS or keyword scoring. CV Prime and Rezi score a full resume against a specific job description; Jobscan is a scanner rather than a builder; Teal\'s scoring is more limited. CV Prime is the only one with native INR pricing and India-specific guidance.',
  },
  {
    q: 'Is CV Prime cheaper than its competitors?',
    a: 'Yes, for Indian users. Most competitors bill in USD on a monthly or annual subscription, which converts to roughly ₹500–₹4,000+ per month depending on the plan. CV Prime Pro is a single ₹999 one-time payment with lifetime access — no recurring charge, no auto-renewal.',
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
    { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://cv-prime.in/compare' },
  ],
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'CV Prime vs every resume builder',
  url: 'https://cv-prime.in/compare',
  description: 'Feature-by-feature comparisons of CV Prime against every major resume builder, for Indian job seekers.',
  hasPart: comparisons.map((c) => ({
    '@type': 'WebPage',
    name: `CV Prime vs ${c.name}`,
    url: `https://cv-prime.in${c.href}`,
  })),
};

export default function ComparePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Compare</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <GitCompareArrows className="h-4 w-4" />
            18 head-to-head comparisons
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            CV Prime vs every resume builder
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Honest, feature-by-feature comparisons — ATS scoring, AI tailoring, pricing in INR vs USD, and India-specific support — so you can pick the right tool for your job search.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {comparisons.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand/50 hover:bg-white/[0.06]"
              >
                <p className="font-display text-lg font-bold text-white">
                  CV Prime <span className="text-slate-500">vs</span> {c.name}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{c.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand opacity-0 transition group-hover:opacity-100">
                  Compare features <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Comparisons — FAQ</h2>
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

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Try CV Prime free — no credit card required</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Free plan includes 3 PDF exports, ATS scoring, AI bullet rewrites, and all 8 templates.
          </p>
          <Link
            href="/signup?next=/ai-cv"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Try CV Prime free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Try CV Prime free" message="18 head-to-head comparisons — see why CV Prime wins for India" />
    </main>
  );
}
