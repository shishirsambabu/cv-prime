import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Prime vs Resume Worded — Builder + ATS vs Feedback Tool | CV Prime',
  description:
    'CV Prime vs Resume Worded: one builds and tailors your resume with ATS scoring, the other gives feedback on a resume you already have. Compare features, pricing, and India support for 2026.',
  keywords: [
    'cv prime vs resume worded',
    'resume worded alternative india',
    'resume worded vs cv prime',
    'resume worded review india',
    'resume worded free alternative',
    'score my resume alternative',
    'resume feedback tool india',
  ],
  alternates: { canonical: 'https://cv-prime.in/cv-prime-vs-resume-worded' },
  openGraph: {
    title: 'CV Prime vs Resume Worded — Builder + ATS vs Feedback Tool',
    description:
      'One builds and tailors your resume with ATS scoring; the other gives feedback on an existing resume. Features, pricing, and India support compared.',
    url: 'https://cv-prime.in/cv-prime-vs-resume-worded',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime vs Resume Worded comparison' }],
  },
};

const features = [
  { feature: 'Builds your resume (templates + editor)', cvPrime: 'yes', rival: 'no', note: 'CV Prime is a full resume builder with 8 templates; Resume Worded is a feedback and scoring tool — you build your resume elsewhere.' },
  { feature: 'ATS score against a specific JD', cvPrime: 'yes', rival: 'limited', note: 'CV Prime scores 0–100 against the exact job description; Resume Worded scores general resume quality and has targeted-resume keyword matching, but is feedback-first.' },
  { feature: 'AI rewrites your bullets for you', cvPrime: 'yes', rival: 'no', note: 'CV Prime auto-rewrites bullets and injects JD keywords; Resume Worded tells you what to improve, but you do the rewriting yourself.' },
  { feature: 'Line-by-line writing feedback', cvPrime: 'yes', rival: 'yes', note: 'Both surface weak bullets; Resume Worded\'s detailed line feedback is its core strength, while CV Prime pairs feedback with automatic fixes.' },
  { feature: 'Cover letter generator', cvPrime: 'yes', rival: 'no', note: 'CV Prime generates a tailored AI cover letter; Resume Worded focuses on resume and LinkedIn feedback.' },
  { feature: 'Job application tracker', cvPrime: 'yes', rival: 'no', note: 'CV Prime includes a job tracker; Resume Worded does not.' },
  { feature: 'India-specific guidance', cvPrime: 'yes', rival: 'no', note: 'CV Prime is calibrated for Indian ATS, recruiters, and salaries; Resume Worded is US/global-focused.' },
  { feature: 'INR pricing / India payments', cvPrime: 'yes', rival: 'no', note: 'CV Prime is ₹999 one-time with UPI; Resume Worded charges in USD (~$49/month) with no Indian payment methods.' },
  { feature: 'Pricing model', cvPrime: '₹999 one-time', rival: '~₹4,000/mo', note: 'Resume Worded Pro is a recurring USD subscription (~$49/month ≈ ₹4,000/month); CV Prime is a one-time ₹999 with a usable free tier.' },
];

const faqs = [
  {
    q: 'What is the difference between CV Prime and Resume Worded?',
    a: 'Resume Worded is a resume feedback and scoring tool — you upload an existing resume and it grades it, flags weak bullets, and (with Targeted Resume) checks keyword match against a job description. It does not build your resume or rewrite it for you. CV Prime is a complete builder: it creates and tailors your resume, scores it 0–100 against a specific JD, automatically rewrites bullets with the right keywords, generates a cover letter, and tracks applications — all in one place, calibrated for India, at a one-time ₹999.',
  },
  {
    q: 'Is Resume Worded worth it for Indian job seekers?',
    a: 'Resume Worded\'s feedback is genuinely detailed, but it is hard to justify for many Indian job seekers: it charges around $49/month in USD (≈₹4,000/month) with no Indian payment methods, it is calibrated for US hiring, and it is a feedback tool — you still need a separate builder to act on its suggestions. CV Prime gives you the scoring and feedback and the fixes and the builder, with India-specific guidance and one-time ₹999 pricing.',
  },
  {
    q: 'Does Resume Worded build or rewrite my resume?',
    a: 'No. Resume Worded reviews a resume you already have and tells you how to improve it — it identifies weak phrasing, missing metrics, and keyword gaps. It does not generate a resume from templates or rewrite your bullets automatically. CV Prime does both: it builds the resume and uses AI to rewrite weak bullets and inject job-description keywords, then re-scores so you can see the improvement before exporting.',
  },
  {
    q: 'Is there a free Resume Worded alternative for India?',
    a: 'Yes — CV Prime. Its free plan includes a full resume builder, AI bullet rewrites, a 0–100 ATS score against the job description, a cover letter generator, a job tracker, all templates, and 3 clean PDF exports, with no credit card. Resume Worded\'s free tier is limited (a capped number of scores and targeted-resume checks) and it is a feedback tool rather than a builder, so CV Prime\'s free tier delivers more of a complete job-search workflow.',
  },
  {
    q: 'Can I use both Resume Worded and CV Prime together?',
    a: 'You can, but you may not need to. Some people use Resume Worded for a second opinion on phrasing. However, CV Prime already combines feedback (ATS score, keyword gaps, weak-bullet detection) with the fixes (AI rewriting) and the builder in one tool, so for most Indian job seekers it replaces the need for a separate feedback subscription. Build and score in CV Prime, and you have the diagnosis and the cure in the same place.',
  },
];

const otherComparisons = [
  { href: '/cv-prime-vs-jobscan', title: 'CV Prime vs Jobscan', sub: 'Builder + ATS vs keyword scanner' },
  { href: '/cv-prime-vs-rezi', title: 'CV Prime vs Rezi', sub: 'Compare AI tailoring and India pricing' },
  { href: '/cv-prime-vs-flowcv', title: 'CV Prime vs FlowCV', sub: 'Free builder vs ATS scoring + AI' },
];

export default function CvPrimeVsResumeWordedPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/compare" className="hover:text-white">Compare</Link>
            <span>/</span>
            <span className="text-white">CV Prime vs Resume Worded</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV Prime vs Resume Worded — builder + ATS vs feedback tool (2026)
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Resume Worded grades a resume you already have. CV Prime builds it, scores it against the job, and rewrites it for you. Here&apos;s the honest, feature-by-feature comparison for Indian job seekers.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800 px-5 py-2 text-sm text-slate-300">
            Last updated: June 2026 — based on publicly available feature information
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="border-b border-white/10 px-5 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border-2 border-cyan-400 bg-cyan-500/10 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-brand-foreground">CP</div>
                <div>
                  <p className="font-display text-lg font-bold text-white">CV Prime</p>
                  <p className="text-sm text-slate-300">Builder + ATS scorer + AI rewriter for India</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Builds and tailors your resume end-to-end</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> 0–100 ATS score against the specific JD</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> AI rewrites weak bullets automatically</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Cover letter generator + job tracker</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ₹999 one-time, UPI, India-calibrated</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-display text-sm font-bold text-slate-300">RW</div>
                <div>
                  <p className="font-display text-lg font-bold text-white">Resume Worded</p>
                  <p className="text-sm text-slate-300">US-focused resume & LinkedIn feedback tool</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Detailed line-by-line resume feedback (its strength)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> LinkedIn profile review and scoring</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> Not a builder — you create the resume elsewhere</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No automatic AI rewriting of your bullets</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> ~$49/month USD (≈₹4,000/mo), no India payments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Feature comparison — CV Prime vs Resume Worded</h2>
          <p className="mt-3 text-slate-400">
            Feedback-only vs build-score-and-fix. See our{' '}
            <Link href="/ats-score-checker" className="text-cyan-300 underline hover:text-cyan-200">ATS score checker</Link> and{' '}
            <Link href="/ai-resume-rewriter" className="text-cyan-300 underline hover:text-cyan-200">AI resume rewriter</Link>.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="p-4 text-left font-semibold text-slate-300">Feature</th>
                  <th className="p-4 text-center font-semibold text-cyan-300">CV Prime</th>
                  <th className="p-4 text-center font-semibold text-slate-300">Resume Worded</th>
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
                      {row.rival === 'yes' ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-slate-400" />
                      ) : row.rival === 'no' ? (
                        <XCircle className="mx-auto h-5 w-5 text-red-400" />
                      ) : row.rival === 'limited' ? (
                        <Minus className="mx-auto h-5 w-5 text-amber-500" />
                      ) : (
                        <span className="inline-block rounded-full bg-white/[0.05] px-2 py-0.5 text-xs font-bold text-slate-300">{row.rival}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to choose */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">When to choose CV Prime vs Resume Worded</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-6">
              <p className="font-display font-bold text-white">Choose CV Prime if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {[
                  'Want to build, score, and fix your resume in one tool',
                  'Want AI to rewrite weak bullets — not just flag them',
                  'Want a 0–100 ATS score against each specific job description',
                  'Are applying in India and want India-specific guidance',
                  'Prefer one-time ₹999 with UPI over a USD subscription',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="font-display font-bold text-white">Resume Worded might suit you if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {[
                  'Already have a resume and only want detailed feedback on it',
                  'Want a dedicated LinkedIn profile review alongside resume scoring',
                  'Are comfortable rewriting your own bullets from suggestions',
                  'Are fine paying ~$49/month in USD on an international card',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2"><Minus className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong">
              Try CV Prime free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ai-resume-rewriter" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-bold text-slate-300 hover:border-cyan-300 hover:text-cyan-300">
              See the AI resume rewriter
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">CV Prime vs Resume Worded — frequently asked questions</h2>
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
            {otherComparisons.map((link) => (
              <Link key={link.href} href={link.href} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300 hover:shadow-sm">
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Get the feedback and the fix — in one tool</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Build, score against the job, and let AI rewrite your weak bullets — no separate feedback subscription. Free to start.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong">
            Try CV Prime free <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-sm text-slate-400">Or <Link href="/pricing" className="underline hover:text-white">view pricing</Link> — Pro ₹999 one-time</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'CV Prime vs Resume Worded — Builder + ATS vs Feedback Tool (2026)',
              description: 'CV Prime vs Resume Worded: builder and ATS scoring vs resume feedback. Features, pricing, and India support compared.',
              url: 'https://cv-prime.in/cv-prime-vs-resume-worded',
              author: { '@type': 'Organization', name: 'CV Prime' },
              publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
              dateModified: new Date().toISOString().split('T')[0],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://cv-prime.in/compare' },
                { '@type': 'ListItem', position: 3, name: 'CV Prime vs Resume Worded', item: 'https://cv-prime.in/cv-prime-vs-resume-worded' },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
