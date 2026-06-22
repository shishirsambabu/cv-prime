import Link from 'next/link';
import { StickyCTA } from '@/components/marketing/StickyCTA';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, AlertTriangle, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ATS-Friendly CV — How to Beat Applicant Tracking Systems | CV Prime',
  description:
    'Learn what ATS software looks for and how to build an ATS-friendly CV that passes automated screening. Free ATS CV checker and templates included.',
  alternates: {
    canonical: 'https://cv-prime.in/ats-friendly-cv',
  },
  keywords: [
    'ats friendly cv',
    'ats resume',
    'applicant tracking system resume',
    'ats optimised cv',
    'ats resume checker',
    'beat ats',
    'ats keywords cv',
    'ats compliant resume india',
  ],
  openGraph: {
    title: 'ATS-Friendly CV — Beat Automated Screening | CV Prime',
    description:
      'Build a CV that passes ATS software every time. Free templates, keyword analysis, and live ATS score.',
    url: 'https://cv-prime.in/ats-friendly-cv',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ATS Friendly CV — CV Prime' }],
  },
};

const atsKillers = [
  { issue: 'Tables and columns', why: 'Most ATS parsers read left-to-right and skip or scramble content inside table cells.' },
  { issue: 'Headers and footers', why: 'Contact details in the page header are often completely invisible to ATS parsers.' },
  { issue: 'Graphics and icons', why: 'Skill bars, profile photos, and decorative icons cannot be parsed — they vanish in ATS.' },
  { issue: 'Unusual section names', why: '"Career Journey" confuses ATS; "Work Experience" doesn\'t. Standard labels matter.' },
  { issue: 'PDF from graphic design tools', why: 'Canva, Photoshop exports often embed text as paths — making them unreadable by parsers.' },
  { issue: 'Missing keywords', why: 'ATS screens for exact terms from the job description. Generic CVs fail even if the person is qualified.' },
];

const atsGreenFlags = [
  'Single-column or simple two-column layout',
  'Standard section headings: Summary, Experience, Education, Skills',
  'Contact info in the CV body, not in a header/footer',
  'Keywords from the job description used naturally throughout',
  'Bullet points (not paragraphs) for experience',
  'Dates in consistent format: Jan 2022 – Mar 2024',
  'PDF exported from proper document software (like CV Prime)',
  'No images, icons, or decorative graphics',
];

const faqs = [
  {
    q: 'What is an ATS and why does it matter?',
    a: 'ATS stands for Applicant Tracking System — software used by recruiters to automatically screen CVs before a human sees them. Over 90% of large Indian companies and MNCs use ATS. If your CV fails the automated scan, it never reaches the recruiter\'s desk.',
  },
  {
    q: 'How does CV Prime make my CV ATS-friendly?',
    a: 'Every CV Prime template is built with clean, parseable HTML — no tables, no graphics, no text boxes. Our AI then analyses your CV against the specific job description and identifies missing keywords, inserting them naturally so you score higher in both ATS and human review.',
  },
  {
    q: 'What is a good ATS score?',
    a: 'For a targeted role, aim for 75+ out of 100. Above 85 is excellent. Below 60 means significant keyword gaps that will likely result in automatic rejection. CV Prime shows you the exact score and which keywords to add.',
  },
  {
    q: 'Should I use a different CV for every job?',
    a: 'Ideally yes — at least adjust the keywords and summary. A CV tailored to a specific JD typically scores 20–30 points higher in ATS than a generic CV. CV Prime\'s AI Job CV tool makes tailoring fast — about 5 minutes per role.',
  },
  {
    q: 'Are CV Prime templates actually ATS-safe?',
    a: 'Yes. We tested all 8 templates against Workday, Greenhouse, Lever, iCIMS, and Taleo. Every template uses standard section names, linear reading order, and no parsing traps. Our PDF export also preserves text as selectable, searchable characters.',
  },
];

export default function ATSFriendlyCVPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-1.5 text-sm font-bold text-green-300">
            <Shield className="h-4 w-4" />
            ATS-optimised templates
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Build an ATS-friendly CV that actually gets read by humans
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            90% of large companies use ATS software to filter CVs before a recruiter sees them. CV Prime builds ATS-safe CVs and scores your keyword match so you pass the filter every time.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-green-400 px-8 py-3.5 text-base font-bold text-slate-950 transition hover:bg-green-300"
            >
              Check my ATS score free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              See ATS templates
            </Link>
          </div>
        </div>
      </section>

      {/* ATS killers */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              6 things that kill your CV in ATS
            </h2>
            <p className="mt-4 text-slate-500">Avoid these and you&apos;re already ahead of 60% of applicants</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {atsKillers.map((item) => (
              <div key={item.issue} className="rounded-2xl border border-red-100 bg-red-50/50 p-5">
                <div className="flex items-center gap-3">
                  <XCircle className="h-5 w-5 shrink-0 text-red-500" />
                  <h3 className="font-semibold text-slate-900">{item.issue}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATS green flags */}
      <section className="bg-green-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                What an ATS-friendly CV looks like
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Follow these rules and you&apos;ll pass ATS screening at 95%+ of companies. CV Prime enforces all of them automatically.
              </p>
              <ul className="mt-8 space-y-3">
                {atsGreenFlags.map((flag) => (
                  <li key={flag} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span className="text-slate-700">{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <span className="font-bold text-slate-900">Before CV Prime</span>
                </div>
                <div className="mt-3 space-y-1 text-sm text-slate-500">
                  <p>ATS Score: <span className="font-bold text-red-600">48/100</span></p>
                  <p>Keyword match: 6/20</p>
                  <p>Issues: 4 formatting violations</p>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-2 ring-green-400">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="font-bold text-slate-900">After CV Prime AI tailoring</span>
                </div>
                <div className="mt-3 space-y-1 text-sm text-slate-700">
                  <p>ATS Score: <span className="font-bold text-green-600">91/100</span></p>
                  <p>Keyword match: 18/20</p>
                  <p>Issues: 0 formatting violations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">
            ATS questions answered
          </h2>
          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 p-6">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-slate-900">Related tools &amp; guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/blog/ats-resume-mistakes', label: '15 ATS resume mistakes' },
              { href: '/blog/resume-format-india-2026', label: 'Best resume format India 2026' },
              { href: '/blog/how-to-write-resume-summary-2026', label: 'How to write a resume summary' },
              { href: '/ats-checker', label: 'Free ATS resume checker' },
              { href: '/ats-report-2026', label: 'ATS research report 2026' },
              { href: '/statistics', label: 'ATS & resume statistics' },
              { href: '/resume-builder', label: 'ATS resume builder' },
              { href: '/ai-cv-builder', label: 'AI CV builder' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-cyan-300 hover:text-cyan-700 transition">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Build your ATS-safe CV now — free
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            CV Prime gives you ATS-optimised templates + AI keyword analysis. Stop losing jobs to a robot. Start free in 2 minutes.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Get my ATS score free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'ATS-Friendly CV — How to Beat Applicant Tracking Systems',
            description: 'Complete guide to building an ATS-friendly CV with free checker and optimised templates.',
            url: 'https://cv-prime.in/ats-friendly-cv',
            author: { '@type': 'Organization', name: 'CV Prime' },
            publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                { '@type': 'ListItem', position: 2, name: 'ATS-Friendly CV', item: 'https://cv-prime.in/ats-friendly-cv' },
              ],
            },
          }),
        }}
      />
      <StickyCTA />
    </main>
  );
}
