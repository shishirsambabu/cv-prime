import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Prime vs Jobscan — Which ATS Resume Tool is Better for India? | CV Prime',
  description:
    'CV Prime vs Jobscan: honest comparison of ATS scoring, AI resume tailoring, pricing, and India support. Find which tool is right for building and optimising your resume in 2026.',
  keywords: [
    'cv prime vs jobscan',
    'jobscan alternative india',
    'jobscan vs cv prime',
    'jobscan india',
    'best ats resume checker india',
    'jobscan alternatives 2026',
    'jobscan free alternative',
  ],
  alternates: { canonical: 'https://cv-prime.in/cv-prime-vs-jobscan' },
  openGraph: {
    title: 'CV Prime vs Jobscan — Which ATS Resume Tool is Better for India?',
    description:
      'CV Prime vs Jobscan: honest comparison of ATS scoring, AI resume tailoring, pricing, and India support. Find which tool is right for building and optimising your resume in 2026.',
    url: 'https://cv-prime.in/cv-prime-vs-jobscan',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime vs Jobscan Comparison' }],
  },
};

const features = [
  {
    feature: 'ATS keyword scoring',
    cvPrime: 'yes',
    jobscan: 'yes',
    note: 'Both tools provide ATS keyword scoring — Jobscan has very granular keyword analysis as its core feature; CV Prime gives a 0–100 score with section-level gap analysis',
  },
  {
    feature: 'AI bullet rewriter / tailoring',
    cvPrime: 'yes',
    jobscan: 'no',
    note: 'CV Prime automatically rewrites your bullet points to incorporate target JD keywords; Jobscan shows you which keywords to add manually but does not rewrite your content',
  },
  {
    feature: 'Full JD tailoring (auto-rewrites CV)',
    cvPrime: 'yes',
    jobscan: 'no',
    note: 'CV Prime tailors your entire CV to a job description in one step; Jobscan is an analysis tool — you must make all edits in a separate resume builder',
  },
  {
    feature: 'Cover letter generator (not just scanner)',
    cvPrime: 'yes',
    jobscan: 'no',
    note: 'CV Prime generates a full AI cover letter on all plans; Jobscan only checks if your existing cover letter matches the JD — it does not write one for you',
  },
  {
    feature: 'Resume templates',
    cvPrime: '8',
    jobscan: 'limited',
    note: 'CV Prime includes 8 ATS-optimised professional templates as a complete resume builder; Jobscan offers limited basic templates as an analysis-first tool',
  },
  {
    feature: 'Job tracker',
    cvPrime: 'yes',
    jobscan: 'yes',
    note: 'Both include basic job tracking; CV Prime free plan supports up to 3 applications in the tracker',
  },
  {
    feature: 'Free tier value',
    cvPrime: 'yes',
    jobscan: 'limited',
    note: 'CV Prime free plan includes 3 clean PDF exports, full ATS scoring, all templates, AI bullet rewrites, and a cover letter; Jobscan free is capped at 5 scans/month with heavily restricted features',
  },
  {
    feature: 'Clean PDF export (no watermark)',
    cvPrime: 'free (3)',
    jobscan: 'paid only',
    note: 'CV Prime provides 3 watermark-free PDF exports on the free plan; Jobscan requires a paid subscription for clean resume downloads',
  },
  {
    feature: 'INR pricing / India payments',
    cvPrime: 'yes',
    jobscan: 'no',
    note: 'CV Prime is ₹999 one-time with UPI; Jobscan charges ~$49.95/month USD (≈₹4,200/month) with no Indian payment methods',
  },
  {
    feature: 'India-specific CV guidance',
    cvPrime: 'yes',
    jobscan: 'no',
    note: 'CV Prime is built for the Indian job market with ATS tips for Naukri, LinkedIn India, and Indian recruiters; Jobscan is primarily US-market focused',
  },
  {
    feature: 'Price per month (Pro)',
    cvPrime: '₹999',
    jobscan: '~₹4,200',
    note: 'CV Prime Pro is ₹999 one-time in INR; Jobscan is ~$49.95/month (~₹4,200/month) or ~$24.99/month on annual — still ≈₹2,100/month after conversion',
  },
];

const faqs = [
  {
    q: 'Is Jobscan worth it for Indian job seekers?',
    a: 'For most Indian job seekers, Jobscan is difficult to justify. It charges ~$49.95/month (~₹4,200/month) in USD, does not accept Indian payment methods such as UPI or Groww, and its keyword analysis is calibrated primarily for US ATS systems. While Jobscan\'s keyword matching is genuinely strong, it is a pure analysis tool — you still need a separate resume builder to make edits. CV Prime costs ₹999 one-time, accepts UPI, and combines ATS scoring, AI rewriting, template-based building, and cover letter generation in a single tool built for the Indian job market.',
  },
  {
    q: 'What is the main difference between CV Prime and Jobscan?',
    a: 'The core difference is that Jobscan is an ATS analysis tool while CV Prime is a complete resume building and optimisation platform. Jobscan excels at granular keyword gap analysis — it will tell you exactly which keywords are missing and how often they appear in a job description. However, it does not rewrite your resume for you; you must take those suggestions and manually edit your CV in a different tool. CV Prime combines ATS keyword scoring with automatic JD tailoring, AI bullet rewriting, a resume builder, cover letter generation, and a job tracker in one place — and at ₹999 one-time versus Jobscan\'s ~₹4,200/month.',
  },
  {
    q: 'Does Jobscan work for Indian ATS systems?',
    a: 'Jobscan was designed primarily for US applicant tracking systems such as Workday, Taleo, and Greenhouse. Its keyword analysis and scoring benchmarks are calibrated to US hiring patterns. Indian ATS platforms — including those used by Naukri, Shine, and large Indian IT firms — have different keyword weighting and formatting requirements. CV Prime is built specifically for the Indian job market and accounts for the ATS behaviour of Indian recruitment platforms and the expectations of Indian HR teams.',
  },
  {
    q: 'Is there a free Jobscan alternative for India?',
    a: 'Yes — CV Prime is a free Jobscan alternative built for India. The CV Prime free plan includes full ATS scoring (0–100 with section-level gap analysis), AI bullet rewrites, a cover letter generator, a job tracker, all 8 professional templates, and 3 watermark-free PDF exports. No credit card is required. By comparison, Jobscan\'s free plan is capped at 5 scans per month with no resume building, no cover letter generation, and no PDF export — making CV Prime\'s free tier significantly more useful for a complete job search.',
  },
  {
    q: 'Can Jobscan write my resume for me?',
    a: 'No. Jobscan is an ATS analysis and keyword-matching tool, not a resume builder or AI rewriter. It will analyse your uploaded resume against a job description and show you which keywords are missing, how your formatting compares, and what your match rate is — but all editing must be done manually in a separate tool. CV Prime, by contrast, can automatically rewrite your bullet points to incorporate JD keywords, tailor your entire CV to a specific job description with one click, and export a clean PDF — all within the same platform.',
  },
];

export default function CvPrimeVsJobscanPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">CV Prime vs Jobscan</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV Prime vs Jobscan — which ATS resume tool is better for India in 2026?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A feature-by-feature comparison of CV Prime and Jobscan. We compare ATS scoring, AI tailoring, cover letter support, pricing, India compatibility, and free tier — so you can pick the right tool for your job search.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800 px-5 py-2 text-sm text-slate-300">
            Last updated: June 2026 — based on publicly available feature information
          </div>
        </div>
      </section>

      {/* Verdict summary */}
      <section className="border-b border-white/10 px-5 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border-2 border-cyan-400 bg-cyan-500/10 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-brand-foreground">CP</div>
                <div>
                  <p className="font-display text-lg font-bold text-white">CV Prime</p>
                  <p className="text-sm text-slate-300">Complete resume builder + ATS optimiser for India</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ATS scoring with 0–100 score + section gap analysis</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> AI bullet rewriter — auto-tailors CV to the JD</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Cover letter generator included on all plans</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> INR pricing (₹999 one-time) with UPI and Indian payment methods</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Complete resume builder with 8 ATS-ready templates</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-display text-sm font-bold text-slate-300">JS</div>
                <div>
                  <p className="font-display text-lg font-bold text-white">Jobscan</p>
                  <p className="text-sm text-slate-300">US-focused ATS keyword analysis tool</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Strong granular keyword analysis (their core strength)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Keyword suggestions and match rate scoring</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No AI rewriting — suggestions only, edits are manual</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> ~$49.95/month USD (≈₹4,200/month), no India payments</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> Not a resume builder — you still need another tool</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Feature comparison — CV Prime vs Jobscan</h2>
          <p className="mt-3 text-slate-400">
            See how CV Prime and Jobscan compare across ATS scoring, AI features, pricing, and India compatibility.
            Check our <Link href="/ats-checker" className="text-cyan-300 underline hover:text-cyan-200">ATS checker</Link> and{' '}
            <Link href="/ai-cv-builder" className="text-cyan-300 underline hover:text-cyan-200">AI CV builder</Link> pages for more detail on CV Prime&apos;s core features.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="p-4 text-left font-semibold text-slate-300">Feature</th>
                  <th className="p-4 text-center font-semibold text-cyan-300">CV Prime</th>
                  <th className="p-4 text-center font-semibold text-slate-300">Jobscan</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white/[0.06]' : 'bg-white/[0.03]'}>
                    <td className="p-4">
                      <p className="font-medium text-slate-200">{row.feature}</p>
                      <p className="mt-0.5 text-xs text-slate-400">{row.note}</p>
                    </td>
                    <td className="p-4 text-center">
                      {row.cvPrime === 'yes' ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-cyan-600" />
                      ) : row.cvPrime === 'no' ? (
                        <XCircle className="mx-auto h-5 w-5 text-red-400" />
                      ) : (
                        <span className="inline-block rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-bold text-cyan-300">{row.cvPrime}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.jobscan === 'yes' ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-slate-400" />
                      ) : row.jobscan === 'no' ? (
                        <XCircle className="mx-auto h-5 w-5 text-red-400" />
                      ) : row.jobscan === 'limited' ? (
                        <Minus className="mx-auto h-5 w-5 text-amber-500" />
                      ) : (
                        <span className="inline-block rounded-full bg-white/[0.05] px-2 py-0.5 text-xs font-bold text-slate-300">{row.jobscan}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing comparison */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Pricing comparison — India</h2>
          <p className="mt-3 text-slate-400">
            For Indian job seekers, INR pricing and local payment methods are critical. See our{' '}
            <Link href="/pricing" className="text-cyan-300 underline hover:text-cyan-200">full pricing page</Link> for CV Prime plan details.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border-2 border-cyan-400/30 bg-white/[0.04] p-6">
              <p className="font-display text-lg font-bold text-white">CV Prime pricing</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-300">Free plan</p>
                  <p className="font-bold text-white">₹0</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-300">Pro (monthly)</p>
                  <p className="font-display font-bold text-cyan-300">₹999 one-time</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-cyan-500/10 p-3 text-xs text-cyan-200">
                Accepts UPI, Indian debit/credit cards, net banking
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="font-display text-lg font-bold text-white">Jobscan pricing (approx. in INR)</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-300">Free plan</p>
                  <p className="text-sm text-amber-600">5 scans/month only</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-300">Pro (monthly)</p>
                  <p className="font-display font-bold text-slate-300">~₹4,200/month</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-300">Pro (annual, per month)</p>
                  <p className="font-display font-bold text-slate-300">~₹2,100/month</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700">
                Charges in USD (~$49.95/month) — conversion fees apply. No Indian payment methods supported.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key differences */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Key differences between CV Prime and Jobscan</h2>
          <p className="mt-3 text-slate-400">
            Jobscan and CV Prime both help you optimise your resume for ATS systems, but they take fundamentally different approaches — one analyses, the other builds and tailors.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Builder vs analyser',
                body: 'CV Prime is a complete resume builder: you create, tailor, and export your CV in one place. Jobscan is a pure analysis tool — after seeing your keyword gaps, you must still open a separate editor to make changes. This means Jobscan users always need at least two tools.',
              },
              {
                title: 'AI rewriting vs manual edits',
                body: 'CV Prime automatically rewrites your bullet points to incorporate target JD keywords. Jobscan identifies which keywords are missing and leaves all rewriting to you. For job seekers who want speed, CV Prime\'s approach saves significantly more time.',
              },
              {
                title: 'Cover letter: generate vs check',
                body: 'CV Prime generates a full AI-written cover letter tailored to each job description — included on all plans. Jobscan only checks whether your existing cover letter matches the JD keywords. These are fundamentally different features: one creates, the other audits.',
              },
              {
                title: 'India-first pricing',
                body: 'CV Prime is ₹999 one-time with UPI. Jobscan is ~$49.95/month (~₹4,200/month) in USD — over 16× the price on a monthly basis — with no Indian payment method support and international card conversion fees on top.',
              },
              {
                title: 'Jobscan\'s honest strength',
                body: 'To be fair: Jobscan\'s keyword analysis is genuinely detailed and thorough — it is their core product built over many years. If granular keyword frequency analysis is your primary need and you already have a resume builder you love, Jobscan does that one thing very well.',
              },
              {
                title: 'India ATS compatibility',
                body: 'CV Prime is built and calibrated for the Indian job market, covering ATS systems used on Naukri, LinkedIn India, and by Indian IT and BFSI employers. Jobscan\'s scoring and benchmarks are primarily calibrated for US ATS platforms such as Workday and Taleo.',
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="font-display font-bold text-white">{card.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{card.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-400">
            According to our <Link href="/statistics" className="text-cyan-300 underline hover:text-cyan-200">resume statistics</Link>, Indian job seekers who tailor their CV per job description with keyword alignment see a 40–60% improvement in callback rates — the core outcome both tools aim for.
          </p>
        </div>
      </section>

      {/* When to choose each */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">When to choose CV Prime vs Jobscan</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-6">
              <p className="font-display font-bold text-white">Choose CV Prime if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {[
                  'Are applying to jobs in India and want India-specific ATS scoring and CV guidance',
                  'Want AI to automatically rewrite your bullets — not just flag missing keywords',
                  'Need a complete resume builder, not a standalone analysis tool',
                  'Want a cover letter generated, not just checked against a JD',
                  'Need to pay in INR via UPI, cards, or net banking',
                  'Want strong free tier value without a 5-scan-per-month cap',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="font-display font-bold text-white">Jobscan might suit you if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {[
                  'Primarily apply to US companies using Workday, Taleo, or Greenhouse',
                  'Already have a resume builder you love and only need keyword gap analysis',
                  'Want extremely granular keyword frequency and match data above all else',
                  'Are comfortable paying ~$49.95/month in USD on an international card',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Minus className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong"
            >
              Try CV Prime free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ats-checker"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-bold text-slate-300 hover:border-cyan-300 hover:text-cyan-300"
            >
              See how the ATS checker works
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">CV Prime vs Jobscan — frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other comparisons */}
      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-xl font-bold">Other CV builder comparisons</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { href: '/cv-prime-vs-rezi', title: 'CV Prime vs Rezi', sub: 'Compare AI tailoring and India pricing' },
              { href: '/cv-prime-vs-zety', title: 'CV Prime vs Zety', sub: 'Compare ATS scoring and India pricing' },
              { href: '/cv-prime-vs-teal', title: 'CV Prime vs Teal', sub: 'Compare job tracking and India compatibility' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300 hover:shadow-sm"
              >
                <p className="font-display font-bold text-white group-hover:text-cyan-300">{link.title} →</p>
                <p className="mt-1 text-sm text-slate-400">{link.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Try CV Prime free — no credit card required
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Free plan includes 3 PDF exports, ATS scoring with section analysis, AI bullet rewrites, cover letter generator, job tracker, and all 8 templates. No commitment.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Try CV Prime free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-sm text-slate-400">
            Or <Link href="/pricing" className="underline hover:text-white">view full pricing</Link> — Pro from ₹999 one-time
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'CV Prime vs Jobscan — Which ATS Resume Tool is Better for India? (2026)',
              description:
                'CV Prime vs Jobscan: honest comparison of ATS scoring, AI resume tailoring, pricing, and India support.',
              url: 'https://cv-prime.in/cv-prime-vs-jobscan',
              author: { '@type': 'Organization', name: 'CV Prime' },
              publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
              dateModified: new Date().toISOString().split('T')[0],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            },
                      {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://cv-prime.in/templates' },
                { '@type': 'ListItem', position: 3, name: 'CV Prime vs Jobscan', item: 'https://cv-prime.in/cv-prime-vs-jobscan' },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
