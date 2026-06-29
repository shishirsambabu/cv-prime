import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Prime vs VisualCV — AI Resume Builder vs Portfolio Builder | CV Prime',
  description:
    'CV Prime vs VisualCV comparison for India. CV Prime offers ATS scoring, AI keyword tailoring, INR pricing, and a free plan. VisualCV is a portfolio-focused builder with no ATS analysis. See the full feature comparison.',
  keywords: [
    'cv prime vs visualcv',
    'visualcv alternative india',
    'visualcv vs cv prime',
    'best resume builder india vs visualcv',
    'visualcv ats',
    'visualcv india pricing',
    'visualcv alternative ats',
    'resume builder india visualcv',
  ],
  alternates: { canonical: 'https://cv-prime.in/cv-prime-vs-visualcv' },
  openGraph: {
    title: 'CV Prime vs VisualCV — AI ATS Builder vs Portfolio Tool',
    description:
      'Full feature comparison of CV Prime and VisualCV. Covers ATS compatibility, AI tailoring, India pricing, and free plan generosity.',
    url: 'https://cv-prime.in/cv-prime-vs-visualcv',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime vs VisualCV Comparison' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is VisualCV good for ATS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "VisualCV resumes can pose ATS risks depending on the template selected — some use multi-column layouts, graphic elements, and custom fonts that ATS systems struggle to parse. VisualCV has no built-in ATS scoring to tell you how your resume performs against a specific job description. CV Prime's templates are tested for ATS parse compliance and provide a 0–100 ATS score against any job description before you apply.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is VisualCV free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VisualCV has a free plan that allows basic resume creation, but PDF downloads and analytics features require a paid plan (priced in USD). CV Prime\'s free plan includes 3 clean PDF exports with no watermark, full ATS scoring, AI bullet rewrites, and access to all 8 templates — no credit card required. Pro is ₹999 one-time in INR.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does VisualCV work in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VisualCV is accessible in India but prices in USD and has no India-specific resume guidance, no INR pricing, and no coverage of Indian ATS systems (Naukri ATS, Taleo as used by TCS/Wipro/MNCs, Workday for IT companies, Greenhouse for tech startups). CV Prime is built for the Indian job market with INR pricing, UPI payments, and 50 India-specific role guides.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is better for Indian job seekers — CV Prime or VisualCV?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "CV Prime is better for Indian job seekers. It provides ATS scoring calibrated for Indian employer systems, AI tailoring to specific JDs, INR pricing at ₹999 one-time (no subscription), UPI payment support, and 50 role-specific guides for Indian industries. VisualCV is primarily a portfolio builder with strong visual presentation but no ATS analysis, no Indian payment support, and USD-only pricing.",
      },
    },
  ],
};

const features = [
  {
    feature: 'ATS scoring (0–100 per JD)',
    cvPrime: 'yes',
    visualcv: 'no',
    note: 'CV Prime gives a numerical ATS score against each job description. VisualCV has no ATS scoring feature.',
  },
  {
    feature: 'AI keyword tailoring per JD',
    cvPrime: 'yes',
    visualcv: 'no',
    note: 'CV Prime rewrites your bullets with keywords from the target JD. VisualCV has no AI tailoring feature.',
  },
  {
    feature: 'ATS-safe templates',
    cvPrime: 'yes',
    visualcv: 'limited',
    note: 'All CV Prime templates pass ATS. Some VisualCV templates use visual elements that can cause ATS parsing issues.',
  },
  {
    feature: 'INR pricing (India)',
    cvPrime: 'yes',
    visualcv: 'no',
    note: 'CV Prime is ₹999 one-time in INR with UPI support. VisualCV prices in USD only.',
  },
  {
    feature: 'Free PDF export (no watermark)',
    cvPrime: 'yes',
    visualcv: 'no',
    note: "CV Prime's free plan includes 3 clean PDFs. VisualCV requires a paid plan for clean PDF downloads.",
  },
  {
    feature: 'Cover letter AI generator',
    cvPrime: 'yes',
    visualcv: 'no',
    note: 'CV Prime generates tailored cover letters from your resume and JD in 60 seconds. VisualCV has no AI cover letter generation.',
  },
  {
    feature: 'Job application tracker',
    cvPrime: 'yes',
    visualcv: 'no',
    note: 'CV Prime includes a built-in job tracker with status stages. VisualCV has no job tracking functionality.',
  },
  {
    feature: 'Resume analytics',
    cvPrime: 'no',
    visualcv: 'yes',
    note: "VisualCV offers view tracking and analytics when you share your resume via a link. CV Prime doesn't have view analytics.",
  },
  {
    feature: 'Online portfolio page',
    cvPrime: 'no',
    visualcv: 'yes',
    note: 'VisualCV creates a public portfolio URL for your resume. CV Prime focuses on ATS-optimised PDF creation.',
  },
  {
    feature: 'CV upload & parse (PDF/DOCX)',
    cvPrime: 'yes',
    visualcv: 'limited',
    note: 'CV Prime parses uploaded PDFs and DOCX files. VisualCV has limited import options.',
  },
  {
    feature: 'India-specific CV guides (50 roles)',
    cvPrime: 'yes',
    visualcv: 'no',
    note: 'CV Prime has role-specific guides for 50 Indian job roles. VisualCV has no India-specific content.',
  },
  {
    feature: 'Keyword gap analysis',
    cvPrime: 'yes',
    visualcv: 'no',
    note: 'CV Prime identifies missing keywords from any JD. VisualCV has no keyword analysis.',
  },
];

const faqs = [
  {
    q: 'Is VisualCV good for ATS?',
    a: "VisualCV resumes can pose ATS risks depending on the template — some use multi-column layouts and graphic elements that ATS systems struggle to parse. More critically, VisualCV has no ATS scoring to tell you how your resume performs against a specific JD before you apply. CV Prime's templates are fully ATS-safe and give a live 0–100 score against any job description.",
  },
  {
    q: 'Is VisualCV free?',
    a: "VisualCV has a basic free plan, but PDF exports and analytics require a paid plan priced in USD. CV Prime's free plan includes 3 clean PDF downloads with no watermark, full ATS scoring, AI rewrites, and all 8 templates — no credit card required. Pro is ₹999 one-time with no recurring charges.",
  },
  {
    q: 'Does VisualCV work in India?',
    a: 'VisualCV is usable in India but prices only in USD, with no UPI support and no India-specific guidance. CV Prime is designed specifically for the Indian job market: INR pricing, UPI payments, 50 role-specific guides, and ATS scoring calibrated for Naukri, Taleo, Workday, and Greenhouse — the systems used by Indian IT companies and MNCs.',
  },
  {
    q: 'When should I use VisualCV over CV Prime?',
    a: "VisualCV's portfolio and analytics features are better if you apply to roles by sharing a public resume URL, are in a creative or media field where portfolio visibility matters, or want to track who has viewed your resume profile. For any role where your resume is uploaded to an ATS — which is 90%+ of corporate hiring in India — CV Prime's ATS scoring and keyword tailoring provides a meaningful advantage.",
  },
];

export default function CvPrimeVsVisualCVPage(): JSX.Element {
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
            <span className="text-white">CV Prime vs VisualCV</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV Prime vs VisualCV — ATS resume builder vs portfolio tool
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            VisualCV is strong for portfolio presentation and resume analytics. CV Prime is built for ATS optimisation, AI tailoring, and the Indian job market. Here&apos;s the full comparison.
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
                  <p className="text-sm text-slate-600">Best for ATS-screened job applications in India</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> 0–100 ATS score against every JD</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> AI keyword tailoring per job description</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> INR pricing — ₹999 one-time, no subscription</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Free: 3 clean PDFs, no watermark</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> 50 India-specific role guides</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-display text-sm font-bold text-slate-700">V</div>
                <div>
                  <p className="font-display text-lg font-bold text-slate-900">VisualCV</p>
                  <p className="text-sm text-slate-600">Portfolio-first resume tool</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Public portfolio URL with view analytics</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Multiple template styles</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No ATS scoring or keyword analysis</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> USD pricing only — no UPI/INR</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> PDF requires paid plan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Feature comparison — CV Prime vs VisualCV</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 text-left font-semibold text-slate-600">Feature</th>
                  <th className="p-4 text-center font-semibold text-cyan-700">CV Prime</th>
                  <th className="p-4 text-center font-semibold text-slate-600">VisualCV</th>
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
                      {row.visualcv === 'yes' ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-slate-400" />
                      ) : row.visualcv === 'no' ? (
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

      {/* ATS advantage section */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">The ATS problem VisualCV doesn&apos;t solve</h2>
          <p className="mt-3 max-w-2xl text-slate-500">
            90%+ of large Indian companies use ATS software to screen resumes before any human review. A resume without ATS optimisation — regardless of how good it looks — risks automatic rejection.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { stat: '75%', label: 'of resumes rejected by ATS before a human reads them', source: 'Jobscan, 2024' },
              { stat: '55%', label: 'of ATS rejections caused by missing keywords — not missing qualifications', source: 'Jobscan, 2023' },
              { stat: '90%+', label: 'of large Indian companies (TCS, Infosys, Amazon, BFSI) use ATS screening', source: 'LinkedIn India Talent Insights, 2024' },
            ].map((item) => (
              <div key={item.stat} className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
                <p className="font-display text-4xl font-bold text-brand">{item.stat}</p>
                <p className="mt-2 text-sm text-slate-700">{item.label}</p>
                <p className="mt-1 text-xs text-slate-400">{item.source}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-500">
            VisualCV is a well-designed portfolio tool, but it doesn&apos;t address ATS scoring, keyword gap analysis, or AI tailoring to the specific job description — which are the primary levers that determine whether your resume reaches a human recruiter.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Pricing comparison</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-cyan-300 bg-white p-6">
              <p className="font-display text-xl font-bold">CV Prime</p>
              <div className="mt-4 space-y-3 text-sm">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold">Free plan — ₹0</p>
                  <ul className="mt-2 space-y-1 text-slate-600">
                    <li>• 3 PDF exports (no watermark)</li>
                    <li>• Full ATS scoring</li>
                    <li>• AI bullet rewrites</li>
                    <li>• All 8 templates</li>
                    <li>• Cover letter generation</li>
                    <li>• No credit card required</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-cyan-50 p-4">
                  <p className="font-semibold text-cyan-800">Lifetime Pro — ₹999 one-time</p>
                  <ul className="mt-2 space-y-1 text-slate-600">
                    <li>• Unlimited PDF exports</li>
                    <li>• No watermark</li>
                    <li>• Unlimited AI tailoring</li>
                    <li>• Unlimited job tracker entries</li>
                    <li>• Pay once, use forever</li>
                    <li>• UPI / Indian cards accepted</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-display text-xl font-bold">VisualCV</p>
              <div className="mt-4 space-y-3 text-sm">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold">Free plan</p>
                  <ul className="mt-2 space-y-1 text-slate-600">
                    <li>• Basic resume creation</li>
                    <li>• PDF download requires paid plan</li>
                    <li>• Analytics behind paywall</li>
                    <li>• No ATS scoring</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold">Pro — USD monthly</p>
                  <ul className="mt-2 space-y-1 text-slate-600">
                    <li>• Priced in USD (no INR option)</li>
                    <li>• No UPI support</li>
                    <li>• Monthly or annual subscription</li>
                    <li>• No ATS analysis on any plan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-20">
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
          <h2 className="font-display text-3xl font-bold">Try CV Prime free — no credit card required</h2>
          <p className="mt-4 text-lg opacity-90">
            3 free PDF exports, full ATS scoring, AI tailoring, and all 8 templates. No subscription, no watermark.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-display font-bold text-slate-950 transition-opacity hover:opacity-90"
            >
              Get started free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="text-sm font-medium opacity-80 hover:opacity-100 underline underline-offset-2">
              Compare plans →
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
              { href: '/cv-prime-vs-novoresume', label: 'CV Prime vs Novoresume' },
              { href: '/cv-prime-vs-linkedin-resume', label: 'CV Prime vs LinkedIn Resume' },
              { href: '/cv-prime-vs-resumelab', label: 'CV Prime vs ResumeLab' },
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
