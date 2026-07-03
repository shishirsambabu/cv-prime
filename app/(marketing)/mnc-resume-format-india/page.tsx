import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Globe2, CheckCircle2, XCircle, Target, BarChart3 } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'MNC Resume Format India — The Global Standard That Gets Shortlisted | CV Prime',
  description:
    'The resume format global MNCs in India expect — Amazon, Google, Microsoft, Deloitte, McKinsey and more. One page, quantified impact, ATS-first, no photo. Build it free with AI tailoring and ATS scoring.',
  alternates: { canonical: 'https://cv-prime.in/mnc-resume-format-india' },
  keywords: [
    'mnc resume format india',
    'resume format for mnc',
    'mnc cv format',
    'resume format for mnc companies india',
    'international resume format india',
    'faang resume format india',
    'global resume format',
    'resume format for multinational companies',
    'amazon google resume format india',
    'corporate mnc resume format',
  ],
  openGraph: {
    title: 'MNC Resume Format India — The Global Standard That Gets Shortlisted | CV Prime',
    description:
      'One page, quantified impact, ATS-first, no photo — the resume format global MNCs in India expect. Build it free.',
    url: 'https://cv-prime.in/mnc-resume-format-india',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MNC resume format India — CV Prime' }],
  },
};

const rules = [
  { icon: Target, title: 'One page, ruthlessly prioritised', body: 'Global MNCs expect a single page for most candidates (two only for genuinely senior profiles). Recruiters scan hundreds of applications — every line must earn its place.' },
  { icon: BarChart3, title: 'Quantified, outcome-led bullets', body: 'MNC hiring rewards measurable impact: "reduced churn 22%", "shipped to 1M users", "saved $400K". Use the STAR pattern — situation, task, action, result — with the result front-loaded.' },
  { icon: Globe2, title: 'Global, ATS-first formatting', body: 'Single column, standard headings, clean fonts, text-based PDF. No photo, no personal details, no declarations — these are non-standard internationally and break the ATS.' },
  { icon: CheckCircle2, title: 'Keywords matched to the JD', body: 'MNC ATS configurations screen hard on role-specific skills and competencies. Mirror the job description\'s exact terminology in your skills and experience sections.' },
];

const expect = [
  'A single-page, single-column, ATS-readable layout',
  'A sharp summary leading with your strongest credential',
  'Quantified achievements in business or user impact terms',
  'Strong action verbs and the STAR structure in bullets',
  'Skills and keywords matched to the specific MNC role',
  'Clean English with consistent tense and formatting',
];
const avoid = [
  'Photo, date of birth, marital status, father\'s name',
  '"Declaration" lines and signature blocks',
  'Objective statements and vague, duties-based bullets',
  'Multi-column, graphic, or Canva-style templates',
  'Listing every responsibility instead of top achievements',
];

const companies = ['Amazon', 'Google', 'Microsoft', 'Deloitte', 'McKinsey', 'Goldman Sachs', 'Accenture', 'JPMorgan', 'Uber', 'Adobe', 'Salesforce', 'PwC'];

const faqs = [
  {
    q: 'What resume format do MNCs in India expect?',
    a: 'Global MNCs expect a clean, one-page (two only for senior roles), single-column resume with a sharp summary, a skills section, and quantified, achievement-led experience bullets using the STAR pattern. It should be ATS-readable — standard headings, standard fonts, text-based PDF — with no photo, personal details, or declaration lines. Keywords should be matched to the specific job description, because MNC ATS systems screen heavily on role-specific competencies.',
  },
  {
    q: 'Should an MNC resume in India have a photo or personal details?',
    a: 'No. Global MNCs follow international resume conventions, which exclude photos, date of birth, marital status, father\'s name, full address, and declaration lines. Including them looks dated, wastes space recruiters value, can introduce bias concerns, and may break ATS parsing. Stick to name, professional contact details, and a LinkedIn/GitHub link in the header.',
  },
  {
    q: 'How long should an MNC resume be?',
    a: 'One page for the vast majority of candidates, including most professionals with up to 8–10 years of experience. Two pages are acceptable only for genuinely senior or highly technical profiles where the depth is relevant. MNC recruiters spend seconds on the first scan and value tight prioritisation, so a focused one-pager of your strongest, most quantified achievements outperforms an exhaustive two-pager.',
  },
  {
    q: 'How do I quantify achievements for an MNC resume?',
    a: 'Use the STAR pattern and front-load the result. Instead of "responsible for improving the checkout flow", write "redesigned checkout flow, cutting cart abandonment 22% and adding $1.2M annual revenue". Pull metrics from anywhere credible — percentages, revenue, users, time saved, scale, efficiency. If you do not have an exact number, use a defensible estimate. CV Prime\'s AI rewrites your bullets into this quantified, MNC-ready style without inventing facts.',
  },
  {
    q: 'How do I make my resume pass an MNC\'s ATS?',
    a: 'Use a single-column, standard-heading layout, a detailed skills section, and a text-based PDF, then mirror the job description\'s exact keywords. Avoid columns, tables, images, and decorative fonts. The reliable check is to score your resume against the specific MNC job description — CV Prime reports your keyword coverage and flags any format issues, so you confirm it passes before applying.',
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
    { '@type': 'ListItem', position: 2, name: 'MNC Resume Format India', item: 'https://cv-prime.in/mnc-resume-format-india' },
  ],
};

export default function MNCResumeFormatPage(): JSX.Element {
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
            <Globe2 className="h-4 w-4" />
            The global MNC standard · India
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            MNC resume format that gets shortlisted in India
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Amazon, Google, Deloitte, McKinsey and the rest hire to a global standard: one page, quantified impact, ATS-first, no photo. This is the exact format — and CV Prime builds it for you, tailors it to the role, and scores your ATS match free.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Build an MNC-ready resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ats-score-checker" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Check my ATS score
            </Link>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="border-b border-white/10 bg-white/[0.03] px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-400">Built for the format these MNCs expect</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {companies.map((c) => (
              <span key={c} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-300">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">The four rules of an MNC resume</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {rules.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{r.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{r.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expect / avoid */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/20 bg-white/[0.04] p-6">
              <div className="flex items-center gap-2 text-emerald-300">
                <CheckCircle2 className="h-5 w-5" />
                <h2 className="font-display text-xl font-bold">What MNCs expect</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {expect.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm leading-6 text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center gap-2 text-red-600">
                <XCircle className="h-5 w-5" />
                <h2 className="font-display text-xl font-bold">What to leave off</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {avoid.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm leading-6 text-slate-300">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />{d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">MNC resume format — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
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
          <h2 className="font-display text-lg font-bold text-white">Related guides & tools</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/resume-format-for-indian-companies', label: 'Resume format for Indian companies' },
              { href: '/ats-resume-format-2026', label: 'ATS resume format 2026' },
              { href: '/one-page-resume', label: 'One-page resume' },
              { href: '/mba-resume', label: 'MBA resume' },
              { href: '/software-engineer-resume', label: 'Software engineer resume' },
              { href: '/professional-cv-template-india', label: 'Professional CV template' },
              { href: '/tailor-resume-to-job-description', label: 'Tailor resume to a JD' },
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Apply to MNCs with a resume that fits the bar</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            CV Prime builds a one-page, quantified, ATS-first resume and tailors it to each MNC role. Free to start.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Build an MNC-ready resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build an MNC-ready resume" message="One page, quantified, ATS-first — the format MNCs expect" />
    </main>
  );
}
