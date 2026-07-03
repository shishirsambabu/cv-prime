import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Sparkles, Zap, Shield } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Free Resume Builder — No Sign Up, No Credit Card | CV Prime',
  description:
    'Build and download a free resume online. CV Prime\'s free resume builder includes ATS scoring, AI rewrites, and 8 professional templates. 3 free PDF exports — no credit card ever required.',
  alternates: { canonical: 'https://cv-prime.in/free-resume-builder' },
  keywords: [
    'free resume builder',
    'free resume builder no sign up',
    'resume builder free download',
    'free resume maker online',
    'build resume free',
    'free cv builder online',
    'free resume creator',
    'resume builder 100% free',
    'free resume builder india',
    'free ats resume builder',
  ],
  openGraph: {
    title: 'Free Resume Builder — No Credit Card Required | CV Prime',
    description:
      'Build, score, and download your resume free. 3 PDF exports, ATS scoring, and AI rewrites included. No credit card.',
    url: 'https://cv-prime.in/free-resume-builder',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Free Resume Builder — CV Prime' }],
  },
};

const freeFeatures = [
  {
    icon: CheckCircle2,
    title: '3 free PDF exports',
    desc: 'Download 3 clean, recruiter-ready PDF resumes — free, no watermark, no credit card.',
  },
  {
    icon: Sparkles,
    title: 'AI bullet rewriting',
    desc: 'Rewrite up to 10 resume bullets for free. Turn vague duties into impact statements.',
  },
  {
    icon: Zap,
    title: 'Full ATS scoring',
    desc: 'Get your 0–100 ATS match score against any job description — completely free.',
  },
  {
    icon: Shield,
    title: 'All 8 templates free',
    desc: 'Every template — Modern, Executive, Technical, and more — is available on the free plan.',
  },
];

const whatIsFree = [
  'Create unlimited resume drafts',
  '3 PDF resume downloads (no watermark)',
  'ATS keyword scoring against any job description',
  'AI bullet point rewriting (outcome-focused)',
  'All 8 professional resume templates',
  'CV import from PDF or DOCX',
  'Job application tracker (up to 10 applications)',
  'AI cover letter generation',
];

const whatIsPro = [
  'Unlimited PDF resume downloads',
  'No watermark on exports',
  'Unlimited AI tailoring sessions',
  'Unlimited job tracker entries',
  'Priority AI processing',
  'Multi-version resume management',
];

const faqs = [
  {
    q: 'Is CV Prime\'s resume builder completely free?',
    a: 'The core builder is free — you can create unlimited drafts, run ATS scoring, use AI rewrites, and access all 8 templates. The free plan includes 3 PDF downloads. Pro (₹999 one-time) gives you unlimited downloads and no watermark. No credit card is required for the free plan — ever.',
  },
  {
    q: 'Do I need to sign up to use the free resume builder?',
    a: 'A free account is required to save your resume and use AI features. Sign-up takes 30 seconds via Google OAuth or email — no personal payment information needed. Your resume is private and only you can access it.',
  },
  {
    q: 'How many resumes can I create for free?',
    a: 'You can create unlimited resume drafts on the free plan. The 3 PDF export limit applies to downloads — you can edit and re-save your resume as many times as you like before downloading.',
  },
  {
    q: 'Are the free resume templates actually professional?',
    a: 'Yes. All 8 CV Prime templates — Modern, Classic, Minimal, Executive, Creative, Technical, Academic, and Premium — are included on the free plan. They are professionally designed, ATS-readable, and used by job seekers at top companies in India.',
  },
  {
    q: 'Can I download my resume as a PDF for free?',
    a: 'Yes. The free plan includes 3 clean PDF downloads with no watermark. After 3 downloads, you can upgrade to Pro for ₹999 one-time for unlimited clean exports.',
  },
  {
    q: 'What is the catch with the free resume builder?',
    a: 'There is no hidden catch. You get a generous free tier: unlimited resume creation, full ATS scoring, AI rewrites, all templates, and 3 PDF exports. We monetise through Pro subscriptions for users who need unlimited exports and advanced features. The free plan is genuinely useful for most job seekers.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Free Resume Builder', item: 'https://cv-prime.in/free-resume-builder' },
  ],
};

export default function FreeResumeBuilderPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema]) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-emerald-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-bold text-emerald-300">
            <CheckCircle2 className="h-4 w-4" />
            100% free · No credit card · 3 PDF exports
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Free resume builder with AI and ATS scoring
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build a professional, ATS-optimised resume for free. CV Prime&apos;s free resume builder includes AI tailoring, keyword scoring, 8 templates, and 3 clean PDF downloads — no credit card needed.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-8 py-3.5 text-base font-bold text-slate-950 transition hover:bg-emerald-300"
            >
              Start free — no credit card
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Free vs Pro
            </Link>
          </div>
        </div>
      </section>

      {/* Free features */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What you get free — no card, no catch</h2>
            <p className="mt-4 text-slate-500">CV Prime&apos;s free plan is one of the most generous in the market</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {freeFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-slate-950">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Free vs Pro */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold">Free plan vs Pro plan</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold">Free</h3>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700">₹0 forever</span>
              </div>
              <ul className="mt-6 space-y-3">
                {whatIsFree.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="mt-7 inline-flex w-full items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-slate-300">
                Start for free
              </Link>
            </div>
            <div className="rounded-2xl border border-brand bg-white p-6 shadow-2xl shadow-brand/10">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold">Pro</h3>
                <span className="rounded-full bg-brand/10 px-3 py-1 text-sm font-bold text-brand">₹999 one-time</span>
              </div>
              <p className="mt-2 text-sm text-slate-500">Everything in Free, plus:</p>
              <ul className="mt-4 space-y-3">
                {whatIsPro.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong">
                Upgrade to Pro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Free resume builder — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
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
          <h2 className="font-display text-lg font-bold text-slate-900">Related free tools</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/resume-builder', label: 'AI resume builder' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/cover-letter-generator', label: 'Free cover letter generator' },
              { href: '/resume-format', label: 'Resume format guide' },
              { href: '/cv-examples', label: 'Resume examples by role' },
              { href: '/pricing', label: 'Free vs Pro comparison' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-emerald-300 hover:text-emerald-700 transition">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Start building your resume free — right now</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            No credit card. No hidden fees. 3 clean PDF downloads included. ATS scoring on every resume.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-10 py-4 text-base font-bold text-slate-950 hover:bg-emerald-300 transition">
            Build my resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build resume free" message="Free resume builder — ATS scoring + AI rewrites + 3 PDF exports, no credit card" />
    </main>
  );
}
