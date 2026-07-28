import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Prime vs ResumeLab — AI ATS Resume Builder Comparison for India | CV Prime',
  description:
    'CV Prime vs ResumeLab comparison for Indian job seekers. CV Prime provides ATS scoring, AI tailoring, INR pricing at ₹999 one-time, and a generous free plan. ResumeLab has no ATS analysis and USD-only pricing. Full feature comparison.',
  keywords: [
    'cv prime vs resumelab',
    'resumelab alternative india',
    'resumelab vs cv prime',
    'resumelab ats',
    'resumelab india pricing',
    'resumelab india rupees',
    'best resume builder india resumelab',
    'resumelab alternative ats scoring',
  ],
  alternates: { canonical: 'https://cv-prime.in/cv-prime-vs-resumelab' },
  openGraph: {
    title: 'CV Prime vs ResumeLab — AI Resume Builder Comparison for India',
    description:
      'See how CV Prime and ResumeLab compare on ATS scoring, AI tailoring, pricing, and free plan. Built for Indian job seekers.',
    url: 'https://cv-prime.in/cv-prime-vs-resumelab',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime vs ResumeLab Comparison' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does ResumeLab have ATS scoring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ResumeLab does not offer ATS scoring against specific job descriptions. It provides pre-built ATS-friendly templates, but you have no way to measure how your resume performs against a particular role before applying. CV Prime gives a 0–100 ATS match score for every job description you paste in, with keyword gap analysis and AI-powered fixes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is ResumeLab available in India with INR pricing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "ResumeLab prices in USD only with no INR option and no UPI payment support. For Indian job seekers, this means paying international transaction fees and dealing with currency conversion. CV Prime is priced in INR at ₹999 one-time with UPI, net banking, and Indian debit/credit card support.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is ResumeLab good for freshers in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "ResumeLab can help freshers build a structured resume, but it has no ATS scoring, no India-specific guidance for Indian company formats (TCS NQT, CGPA rules, INC registration for nursing), and no INR pricing. CV Prime is designed specifically for Indian freshers — with a dedicated fresher guide, campus placement tips, education-section CGPA rules, and ATS scoring calibrated for Indian employer systems.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does ResumeLab pricing compare to CV Prime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "ResumeLab offers a free trial but requires a subscription to download your resume — priced in USD, which means Indian users pay approximately ₹2,000–4,000 per month in practice. CV Prime's free plan includes 3 clean PDF exports with no credit card required, and Pro is ₹999 one-time in INR — no subscription, no auto-renewal, no recurring charges.",
      },
    },
  ],
};

const features = [
  {
    feature: 'ATS scoring (0–100 per JD)',
    cvPrime: 'yes',
    resumelab: 'no',
    note: 'CV Prime scores your resume against any job description (0–100). ResumeLab has no ATS scoring feature.',
  },
  {
    feature: 'AI keyword tailoring per JD',
    cvPrime: 'yes',
    resumelab: 'no',
    note: 'CV Prime rewrites bullets with JD-specific keywords. ResumeLab offers content suggestions but no JD-based tailoring.',
  },
  {
    feature: 'Keyword gap analysis',
    cvPrime: 'yes',
    resumelab: 'no',
    note: 'CV Prime shows exactly which keywords are missing for your target role. ResumeLab has no keyword gap feature.',
  },
  {
    feature: 'INR pricing (India)',
    cvPrime: 'yes',
    resumelab: 'no',
    note: 'CV Prime charges ₹999 one-time in INR with UPI support. ResumeLab prices in USD only — no Indian payment method.',
  },
  {
    feature: 'Free PDF download (no watermark)',
    cvPrime: 'yes',
    resumelab: 'no',
    note: "CV Prime's free plan includes 3 clean PDFs. ResumeLab requires a paid subscription to download your resume.",
  },
  {
    feature: 'No subscription model',
    cvPrime: 'yes',
    resumelab: 'no',
    note: 'CV Prime Pro is a ₹999 one-time lifetime payment. ResumeLab uses a subscription model (monthly or annual).',
  },
  {
    feature: 'Cover letter AI generator',
    cvPrime: 'yes',
    resumelab: 'limited',
    note: 'CV Prime generates full tailored cover letters from resume + JD. ResumeLab has basic cover letter templates.',
  },
  {
    feature: 'Job application tracker',
    cvPrime: 'yes',
    resumelab: 'no',
    note: 'CV Prime includes a built-in job tracker. ResumeLab has no job application tracking.',
  },
  {
    feature: 'Resume templates',
    cvPrime: 'yes',
    resumelab: 'yes',
    note: 'Both platforms offer professional resume templates. CV Prime has 8 ATS-tested templates; ResumeLab has a broader template library.',
  },
  {
    feature: 'CV upload & parse (PDF/DOCX)',
    cvPrime: 'yes',
    resumelab: 'limited',
    note: 'CV Prime parses your uploaded PDF or DOCX. ResumeLab allows manual building from scratch.',
  },
  {
    feature: 'India-specific role guides (51 roles)',
    cvPrime: 'yes',
    resumelab: 'no',
    note: 'CV Prime has dedicated guides for 49 Indian job roles. ResumeLab has no India-specific content.',
  },
  {
    feature: 'Bullet point rewriter with AI',
    cvPrime: 'yes',
    resumelab: 'limited',
    note: 'CV Prime rewrites your bullets with strong action verbs and outcomes. ResumeLab has basic content suggestions.',
  },
];

const faqs = [
  {
    q: 'Does ResumeLab have ATS scoring?',
    a: 'No. ResumeLab provides pre-built ATS-friendly templates, but offers no way to measure how your resume performs against a specific job description. CV Prime gives a 0–100 ATS score against any JD you paste in, plus keyword gap analysis and AI-powered fixes for each gap.',
  },
  {
    q: 'Is ResumeLab available in India with INR pricing?',
    a: 'ResumeLab prices in USD only with no INR pricing and no UPI payment support. Indian users pay international transaction fees and deal with currency risk. CV Prime is ₹999 one-time in INR, payable via UPI, net banking, or Indian card.',
  },
  {
    q: 'Is ResumeLab worth it for Indian job seekers?',
    a: "ResumeLab's strong template library is genuinely useful. However, for the Indian job market — where 90%+ of large companies use ATS, where resume conventions differ (CGPA, photo rules, campus placement formats), and where INR pricing matters — CV Prime provides more targeted value: ATS scoring per JD, keyword gap analysis, India-specific guides for 51 roles, and a ₹999 one-time price with no subscription.",
  },
  {
    q: 'How does ResumeLab pricing compare to CV Prime?',
    a: "ResumeLab requires a subscription to download your resume — priced in USD at approximately ₹2,000–4,000+/month for Indian users after conversion. CV Prime's free plan includes 3 clean PDF exports (no credit card), and Pro is ₹999 one-time — a single payment that gives lifetime access with no auto-renewal.",
  },
];

export default function CvPrimeVsResumeLabPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">CV Prime vs ResumeLab</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV Prime vs ResumeLab — ATS scoring and India pricing vs templates
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            ResumeLab has strong templates and decent content suggestions. CV Prime adds ATS scoring against any JD, AI keyword tailoring, INR pricing, and a genuinely free plan. Here&apos;s the full comparison for Indian job seekers.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800 px-5 py-2 text-sm text-slate-300">
            Last updated: June 2026 — based on publicly available feature information
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="border-b border-slate-100 px-5 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border-2 border-cyan-400 bg-cyan-50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-brand-foreground">CP</div>
                <div>
                  <p className="font-display text-lg font-bold text-slate-900">CV Prime</p>
                  <p className="text-sm text-slate-600">Best for ATS-optimised job applications in India</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ATS score 0–100 against every JD</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> AI keyword tailoring per job description</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ₹999 one-time — no subscription</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> 3 free PDFs, no watermark, no card needed</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> 49 India-specific role guides</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-display text-sm font-bold text-slate-700">RL</div>
                <div>
                  <p className="font-display text-lg font-bold text-slate-900">ResumeLab</p>
                  <p className="text-sm text-slate-600">Template-focused resume builder</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Large template library</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Content suggestions by role</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No ATS scoring or keyword analysis</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> USD pricing — no INR/UPI option</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> Subscription required to download</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Feature comparison — CV Prime vs ResumeLab</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 text-left font-semibold text-slate-600">Feature</th>
                  <th className="p-4 text-center font-semibold text-cyan-700">CV Prime</th>
                  <th className="p-4 text-center font-semibold text-slate-600">ResumeLab</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                    <td className="p-4">
                      <p className="font-medium text-slate-800">{row.feature}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{row.note}</p>
                    </td>
                    <td className="p-4 text-center">
                      {row.cvPrime === 'yes' ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-cyan-600" />
                      ) : row.cvPrime === 'no' ? (
                        <XCircle className="mx-auto h-5 w-5 text-red-400" />
                      ) : (
                        <Minus className="mx-auto h-5 w-5 text-amber-500" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.resumelab === 'yes' ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-slate-400" />
                      ) : row.resumelab === 'no' ? (
                        <XCircle className="mx-auto h-5 w-5 text-red-400" />
                      ) : (
                        <Minus className="mx-auto h-5 w-5 text-amber-500" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Pricing — ₹999 one-time vs USD subscription</h2>
          <p className="mt-3 text-slate-500">
            The pricing model difference is significant for Indian job seekers.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-cyan-300 bg-white p-6">
              <p className="font-display text-xl font-bold">CV Prime</p>
              <div className="mt-4 space-y-3 text-sm">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold">Free — ₹0 forever</p>
                  <ul className="mt-2 space-y-1 text-slate-600">
                    <li>• 3 clean PDF exports (no watermark)</li>
                    <li>• Full ATS scoring against any JD</li>
                    <li>• AI bullet rewriting</li>
                    <li>• All 8 templates</li>
                    <li>• Cover letter generation</li>
                    <li>• No credit card needed</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-cyan-50 p-4">
                  <p className="font-semibold text-cyan-800">Lifetime Pro — ₹999 one-time</p>
                  <ul className="mt-2 space-y-1 text-slate-600">
                    <li>• Unlimited PDF exports forever</li>
                    <li>• No watermark</li>
                    <li>• Unlimited AI sessions</li>
                    <li>• No subscription, no auto-renew</li>
                    <li>• UPI / Indian cards accepted</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-display text-xl font-bold">ResumeLab</p>
              <div className="mt-4 space-y-3 text-sm">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold">Free trial</p>
                  <ul className="mt-2 space-y-1 text-slate-600">
                    <li>• Create resume during trial</li>
                    <li>• Download requires subscription</li>
                    <li>• USD pricing — conversion fees for India</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold">Subscription (USD)</p>
                  <ul className="mt-2 space-y-1 text-slate-600">
                    <li>• Monthly or annual billing in USD</li>
                    <li>• No INR pricing</li>
                    <li>• No UPI payment support</li>
                    <li>• No ATS scoring on any plan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-slate-200">
            {faqs.map((item) => (
              <div key={item.q} className="py-6">
                <p className="font-semibold text-slate-900">{item.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand px-5 py-20 text-brand-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold">Start free — no credit card required</h2>
          <p className="mt-4 text-lg opacity-90">
            ATS scoring, AI tailoring, 3 clean PDFs, and all templates. ₹999 one-time for unlimited access.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-display font-bold text-slate-950 transition-opacity hover:opacity-90"
            >
              Try CV Prime free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="text-sm font-medium opacity-80 hover:opacity-100 underline underline-offset-2">
              See pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="px-5 py-10 border-t border-slate-100">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold text-slate-500 mb-4">Related comparisons</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/cv-prime-vs-canva', label: 'CV Prime vs Canva' },
              { href: '/cv-prime-vs-zety', label: 'CV Prime vs Zety' },
              { href: '/cv-prime-vs-resume-io', label: 'CV Prime vs Resume.io' },
              { href: '/cv-prime-vs-rezi', label: 'CV Prime vs Rezi' },
              { href: '/cv-prime-vs-visualcv', label: 'CV Prime vs VisualCV' },
              { href: '/cv-prime-vs-novoresume', label: 'CV Prime vs Novoresume' },
              { href: '/cv-prime-vs-resume-genius', label: 'CV Prime vs Resume Genius' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:border-cyan-300 hover:text-cyan-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
