import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Repeat, CheckCircle2, XCircle, ScanLine, Wand2, Layers } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Naukri Resume Builder Alternative — ATS-First AI Resume Maker | CV Prime',
  description:
    'Looking for a Naukri resume builder alternative? CV Prime adds what a job-portal builder lacks: 0–100 ATS scoring against a real JD, AI tailoring and bullet rewrites, ATS-safe templates, and clean PDF export. Free to start.',
  alternates: { canonical: 'https://cv-prime.in/naukri-resume-builder-alternative' },
  keywords: [
    'naukri resume builder alternative',
    'alternative to naukri resume maker',
    'better than naukri resume builder',
    'naukri resume builder vs',
    'naukri cv maker alternative',
    'ats resume builder india alternative',
    'naukri resume format alternative',
    'resume builder better than naukri',
    'naukri profile resume alternative',
    'job portal resume builder alternative',
  ],
  openGraph: {
    title: 'Naukri Resume Builder Alternative — ATS-First AI Resume Maker | CV Prime',
    description:
      'A Naukri resume builder alternative with real ATS scoring, AI tailoring, ATS-safe templates, and clean PDF export. Free to start.',
    url: 'https://cv-prime.in/naukri-resume-builder-alternative',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Naukri resume builder alternative — CV Prime' }],
  },
};

const gaps = [
  { icon: ScanLine, title: 'Real ATS scoring against a JD', body: 'A portal resume builder formats your profile, but it does not tell you whether your resume will pass a specific company\'s ATS. CV Prime scores your resume 0–100 against the exact job description and shows the missing keywords.' },
  { icon: Wand2, title: 'AI tailoring and bullet rewrites', body: 'Instead of one static profile sent everywhere, CV Prime rewrites your bullets and injects the JD\'s keywords per role — without fabricating anything — so each application is matched, not generic.' },
  { icon: Layers, title: 'ATS-safe, recruiter-ready templates', body: 'Portal-generated resumes often look dated or get auto-formatted into a fixed style. CV Prime gives you 8 clean, ATS-readable templates you control, with a clean PDF export.' },
];

const compareRows = [
  { feature: '0–100 ATS score vs a specific JD', cvPrime: true, naukri: false },
  { feature: 'AI bullet rewriting (no fabrication)', cvPrime: true, naukri: false },
  { feature: 'Keyword gap report per job', cvPrime: true, naukri: false },
  { feature: 'Multiple ATS-safe templates you control', cvPrime: true, naukri: false },
  { feature: 'Clean PDF export, no watermark on Pro', cvPrime: true, naukri: false },
  { feature: 'One-time pricing (₹999), no subscription', cvPrime: true, naukri: false },
  { feature: 'Tied to a job-portal profile', cvPrime: false, naukri: true },
];

const faqs = [
  {
    q: 'What is the best alternative to the Naukri resume builder?',
    a: 'CV Prime is a strong alternative for anyone who wants their resume to actually pass the ATS, not just look formatted. Where a job-portal builder mainly turns your profile into a fixed-format document, CV Prime adds 0–100 ATS scoring against a specific job description, AI tailoring and bullet rewriting, a keyword gap report, multiple ATS-safe templates you control, and clean PDF export — all free to start, with one-time ₹999 Pro instead of a subscription.',
  },
  {
    q: 'Why use CV Prime instead of a job portal\'s resume builder?',
    a: 'Job portals are built to populate their own database and present a profile; their resume output is a by-product. CV Prime is built around the actual problem: getting past the ATS and matching each job description. You get scoring, tailoring, keyword analysis, and design control that a portal builder does not provide. You can still keep your Naukri or LinkedIn profile — CV Prime just gives you a far stronger downloadable resume to apply with.',
  },
  {
    q: 'Can I import my existing Naukri resume into CV Prime?',
    a: 'Yes. Download your current resume as a PDF or DOCX and upload it to CV Prime — it parses your experience, skills, education, and projects automatically, so you do not have to retype anything. From there you can score it against a job description, let AI tailor and strengthen it, switch templates, and export a clean PDF.',
  },
  {
    q: 'Is CV Prime free like the Naukri resume builder?',
    a: 'Yes, CV Prime is free to start with no credit card required — the free plan includes 3 clean PDF exports, full ATS scoring, and AI rewrites. The difference is what you get for free: real ATS analysis and AI tailoring, not just formatting. Unlimited exports and premium templates unlock with a one-time ₹999 Lifetime Pro, with no subscription.',
  },
  {
    q: 'Does CV Prime work for the same Indian jobs I apply to on Naukri?',
    a: 'Yes — CV Prime is built specifically for the Indian job market and calibrated for the ATS platforms used by IT majors, MNCs, startups, and BFSI firms. Whether you found the role on Naukri, LinkedIn, Indeed, or a company careers page, you paste the job description into CV Prime and it tailors and scores your resume for that exact role.',
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
    { '@type': 'ListItem', position: 2, name: 'Naukri Resume Builder Alternative', item: 'https://cv-prime.in/naukri-resume-builder-alternative' },
  ],
};

export default function NaukriAlternativePage(): JSX.Element {
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
            <Repeat className="h-4 w-4" />
            The ATS-first alternative
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            A Naukri resume builder alternative that gets you past the ATS
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A job-portal builder formats your profile. CV Prime does the part that actually wins interviews — scores your resume against the specific JD, tailors your bullets with AI, fixes keyword gaps, and exports a clean, ATS-safe PDF. Keep your portal profile; apply with a stronger resume.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Try the alternative free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ats-score-checker" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Check my ATS score first
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free · Import your existing resume · No credit card</p>
        </div>
      </section>

      {/* Gaps it fills */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What a job-portal builder leaves out</h2>
            <p className="mt-4 text-slate-500">The three things that actually decide whether you get shortlisted</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {gaps.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
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

      {/* Comparison */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">CV Prime vs a portal resume builder</h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-[1fr_96px_96px] bg-slate-50 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">
              <span>Capability</span>
              <span className="text-center text-brand">CV Prime</span>
              <span className="text-center">Portal builder</span>
            </div>
            <div className="divide-y divide-slate-100">
              {compareRows.map((row) => (
                <div key={row.feature} className="grid grid-cols-[1fr_96px_96px] items-center px-5 py-3.5 text-sm">
                  <span className="font-medium text-slate-700">{row.feature}</span>
                  <span className="flex justify-center">
                    {row.cvPrime ? <CheckCircle2 className="h-5 w-5 text-emerald-600" /> : <XCircle className="h-5 w-5 text-slate-300" />}
                  </span>
                  <span className="flex justify-center">
                    {row.naukri ? <CheckCircle2 className="h-5 w-5 text-slate-400" /> : <XCircle className="h-5 w-5 text-slate-300" />}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Naukri alternative — FAQ</h2>
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
          <h2 className="font-display text-lg font-bold text-slate-900">Related pages</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/ai-resume-builder', label: 'AI resume builder' },
              { href: '/ats-score-checker', label: 'Free ATS score checker' },
              { href: '/tailor-resume-to-job-description', label: 'Tailor resume to a JD' },
              { href: '/resume-builder-india', label: 'Resume builder India' },
              { href: '/cv-prime-vs-linkedin-resume', label: 'CV Prime vs LinkedIn resume' },
              { href: '/best-ai-resume-builder-india-2026', label: 'Best AI resume builders India' },
              { href: '/cv-prime-review', label: 'CV Prime review' },
              { href: '/pricing', label: 'Pricing' },
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Keep the profile. Upgrade the resume.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Import your existing resume, score it against the JD, tailor it with AI, and export clean. Free to start.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Try the alternative free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Try the ATS-first alternative" message="Real ATS scoring + AI tailoring a portal builder can't do — free" />
    </main>
  );
}
