import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Prime vs MyPerfectResume — Which is Better for India? | CV Prime',
  description:
    'CV Prime vs MyPerfectResume comparison 2026. Compare ATS scoring, pricing (INR vs USD), free tier, AI features, and India-specific guidance. Find the best resume builder for Indian job seekers.',
  keywords: [
    'cv prime vs myperfectresume',
    'myperfectresume alternative india',
    'myperfectresume vs cv prime',
    'myperfectresume india pricing',
    'best resume builder india myperfectresume',
    'myperfectresume competitor india',
    'free myperfectresume alternative india',
    'myperfectresume ats scoring india',
    'resume builder india comparison',
  ],
  alternates: { canonical: 'https://cv-prime.in/cv-prime-vs-myperfectresume' },
  openGraph: {
    title: 'CV Prime vs MyPerfectResume — Which is Better for India?',
    description: 'Detailed feature-by-feature comparison of CV Prime and MyPerfectResume for Indian job seekers.',
    url: 'https://cv-prime.in/cv-prime-vs-myperfectresume',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime vs MyPerfectResume Comparison' }],
  },
};

const features = [
  { feature: 'ATS scoring (0–100)', cvPrime: 'yes', competitor: 'no', note: 'CV Prime gives a numerical ATS match score per job description; MyPerfectResume has no ATS analysis feature' },
  { feature: 'AI keyword tailoring per JD', cvPrime: 'yes', competitor: 'limited', note: 'CV Prime rewrites bullets against the exact JD keywords; MyPerfectResume offers generic pre-written bullet suggestions' },
  { feature: 'Cover letter generator', cvPrime: 'yes', competitor: 'yes', note: 'Both tools include a cover letter builder; CV Prime\'s is AI-powered and JD-specific' },
  { feature: 'Free tier (clean PDF export)', cvPrime: 'yes', competitor: 'no', note: 'CV Prime free plan includes 3 watermark-free PDF exports; MyPerfectResume requires payment to download' },
  { feature: 'INR pricing (India)', cvPrime: 'yes', competitor: 'no', note: 'CV Prime is ₹249/month; MyPerfectResume charges in USD (typically $2.95 trial then $34.95/month)' },
  { feature: 'Razorpay / UPI payment', cvPrime: 'yes', competitor: 'no', note: 'CV Prime accepts UPI, net banking, and Indian debit/credit cards via Razorpay' },
  { feature: 'India-specific CV guides', cvPrime: 'yes', competitor: 'no', note: 'CV Prime has 30 India-specific role guides; MyPerfectResume content is US-focused' },
  { feature: 'Job application tracker', cvPrime: 'yes', competitor: 'no', note: 'CV Prime includes a built-in job application tracker; MyPerfectResume has no such feature' },
  { feature: 'CV upload & parse (PDF/DOCX)', cvPrime: 'yes', competitor: 'yes', note: 'Both support importing an existing resume for editing' },
  { feature: 'PDF export without watermark', cvPrime: 'free (3)', competitor: 'paid only', note: 'CV Prime gives 3 free clean exports; MyPerfectResume requires an active paid subscription' },
  { feature: 'Number of templates', cvPrime: '8 (ATS-safe)', competitor: '20+', note: 'MyPerfectResume has more templates; CV Prime\'s 8 are all validated for ATS parse compatibility' },
  { feature: 'Transparent subscription model', cvPrime: 'yes', competitor: 'limited', note: 'MyPerfectResume has been criticised for confusing auto-renewal billing; CV Prime\'s pricing is upfront' },
];

const faqs = [
  {
    q: 'Is CV Prime a good MyPerfectResume alternative for Indian job seekers?',
    a: 'Yes — particularly for job seekers who need ATS scoring, AI tailoring to specific job descriptions, and Indian payment options. MyPerfectResume is a US-centric template builder with a large content library of pre-written bullets, but it lacks ATS analysis, charges in USD, and has no India-specific resume guidance. CV Prime was built specifically for the Indian job market.',
  },
  {
    q: 'Does MyPerfectResume have ATS scoring?',
    a: 'No. MyPerfectResume does not offer ATS match scoring against a specific job description. It provides pre-written bullet point suggestions by job title, but it cannot analyse how well your resume will perform against a specific employer\'s ATS. CV Prime provides a 0–100 ATS score per job description with missing keyword identification and AI-powered fix recommendations.',
  },
  {
    q: 'Is MyPerfectResume\'s pricing confusing for India?',
    a: 'Yes, on two counts. First, MyPerfectResume typically offers a low-cost "trial" (around $2.95 for a week) that auto-renews at $34.95/month — a pricing model that has drawn complaints about unexpected charges. Second, all pricing is in USD, which translates to approximately ₹290 for the trial and ₹2,900–₹3,500/month for the full subscription — far more expensive than CV Prime (₹249/month) and incompatible with Indian payment methods like UPI.',
  },
  {
    q: 'Can I download my resume from MyPerfectResume for free?',
    a: 'No. MyPerfectResume requires a paid subscription or trial payment to download your resume. CV Prime\'s free plan genuinely includes 3 clean PDF exports, full ATS scoring, AI bullet rewrites, and all 8 templates — no credit card required to start.',
  },
  {
    q: 'Which is better for experienced professionals in India — CV Prime or MyPerfectResume?',
    a: 'CV Prime is better for experienced Indian professionals. CV Prime offers ATS scoring against specific job descriptions, AI tailoring to JD keywords, salary data for your role and city in India, and interview preparation content. MyPerfectResume\'s pre-written bullet library is US-focused and less relevant for the specific companies, roles, and ATS systems used in the Indian job market (Darwinbox, Zoho Recruit, Taleo at Indian MNCs).',
  },
];

const competitorName = 'MyPerfectResume';
const competitorInitial = 'MP';
const competitorDesc = 'US-focused template & bullet builder';
const canonicalUrl = 'https://cv-prime.in/cv-prime-vs-myperfectresume';

export default function CvPrimeVsMyPerfectResumePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">CV Prime vs MyPerfectResume</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV Prime vs MyPerfectResume — which is better for India in 2026?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A feature-by-feature comparison of CV Prime and MyPerfectResume for Indian job seekers. We compare ATS scoring, AI features, India pricing (INR vs USD), free tier, and transparency — so you can choose the right tool.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800 px-5 py-2 text-sm text-slate-300">
            Last updated: June 2026 — based on publicly available feature information
          </div>
        </div>
      </section>

      {/* Verdict summary */}
      <section className="border-b border-slate-100 px-5 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border-2 border-cyan-400 bg-cyan-50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-brand-foreground">CP</div>
                <div>
                  <p className="font-display text-lg font-bold text-slate-900">CV Prime</p>
                  <p className="text-sm text-slate-600">Best for Indian job seekers</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ATS scoring & keyword gap analysis</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> INR pricing (₹249/month)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Razorpay / UPI payments</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> India-specific CV guides (30 roles)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Transparent pricing, genuine free tier</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-display text-sm font-bold text-slate-700">{competitorInitial}</div>
                <div>
                  <p className="font-display text-lg font-bold text-slate-900">{competitorName}</p>
                  <p className="text-sm text-slate-600">{competitorDesc}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Large pre-written bullet library</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No ATS scoring</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> USD pricing, confusing auto-renewal</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No Indian payment methods</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No free PDF download</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Feature comparison — CV Prime vs MyPerfectResume</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 text-left font-semibold text-slate-600">Feature</th>
                  <th className="p-4 text-center font-semibold text-cyan-700">CV Prime</th>
                  <th className="p-4 text-center font-semibold text-slate-600">{competitorName}</th>
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
                        <span className="inline-block rounded-full bg-cyan-50 px-2 py-0.5 text-xs font-bold text-cyan-700">{row.cvPrime}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.competitor === 'yes' ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-slate-400" />
                      ) : row.competitor === 'no' ? (
                        <XCircle className="mx-auto h-5 w-5 text-red-400" />
                      ) : row.competitor === 'limited' ? (
                        <Minus className="mx-auto h-5 w-5 text-amber-500" />
                      ) : (
                        <span className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600">{row.competitor}</span>
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
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Pricing comparison — India</h2>
          <p className="mt-3 text-slate-500">For Indian job seekers, pricing transparency, INR support, and Indian payment methods are critical factors.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border-2 border-cyan-200 bg-white p-6">
              <p className="font-display text-lg font-bold text-slate-900">CV Prime pricing</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-700">Free plan</p>
                  <p className="font-bold text-slate-900">₹0 forever</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-700">Pro (monthly)</p>
                  <p className="font-display font-bold text-cyan-700">₹249/month</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-700">Pro (annual)</p>
                  <p className="font-display font-bold text-cyan-700">₹1,999/year</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-cyan-50 p-3 text-xs text-cyan-800">
                Accepts UPI, Razorpay, Indian debit/credit cards, net banking. No surprise charges.
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-display text-lg font-bold text-slate-900">MyPerfectResume pricing (approx. in INR)</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-700">Trial (7-day)</p>
                  <p className="font-display font-bold text-slate-600">~₹250 (then auto-renews)</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-700">Monthly (after trial)</p>
                  <p className="font-display font-bold text-red-600">~₹2,900–₹3,500/mo</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-700">Annual</p>
                  <p className="font-display font-bold text-slate-600">~₹1,800/mo (USD)</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700">
                Charges in USD. Trial auto-renews at full price. Indian payment methods not supported.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to choose each */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">When to choose CV Prime vs MyPerfectResume</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
              <p className="font-display font-bold text-slate-900">Choose CV Prime if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'Are applying to jobs in India and want India-specific resume guidance',
                  'Want ATS scoring against the exact job description you\'re targeting',
                  'Need to pay in INR via UPI, Razorpay, or net banking',
                  'Want transparent, predictable pricing with no auto-renewal surprises',
                  'Need a genuinely free tier to evaluate before committing',
                  'Want AI that tailors your bullets to a specific JD — not generic suggestions',
                  'Need a job tracker alongside your resume builder',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-display font-bold text-slate-900">MyPerfectResume might suit you if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'Need access to a large library of US-specific pre-written bullet points',
                  'Are applying to US or international companies and want US-format guidance',
                  'Have an international credit card and are comfortable with USD pricing',
                  'Need a specific template style not available elsewhere',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Minus className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">CV Prime vs MyPerfectResume — frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 bg-white p-6">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related comparisons */}
      <section className="px-5 py-12 border-t border-slate-100">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold text-slate-500 mb-4">Also compare CV Prime with:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/cv-prime-vs-zety', label: 'CV Prime vs Zety' },
              { href: '/cv-prime-vs-resume-io', label: 'CV Prime vs Resume.io' },
              { href: '/cv-prime-vs-rezi', label: 'CV Prime vs Rezi' },
              { href: '/cv-prime-vs-enhancv', label: 'CV Prime vs Enhancv' },
              { href: '/cv-prime-vs-novoresume', label: 'CV Prime vs Novoresume' },
              { href: '/cv-prime-vs-teal', label: 'CV Prime vs Teal' },
              { href: '/cv-prime-vs-resume-genius', label: 'CV Prime vs Resume Genius' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 hover:border-cyan-300 hover:text-cyan-700"
              >
                {link.label} <ArrowRight className="h-3 w-3" />
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
            Free plan includes 3 PDF exports, ATS scoring, AI bullet rewrites, and all 8 templates. No auto-renewal. No surprises.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Try CV Prime free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-sm text-slate-400">
            Or <Link href="/pricing" className="underline hover:text-white">view full pricing</Link> — Pro from ₹249/month
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
              headline: 'CV Prime vs MyPerfectResume — Which is Better for India? (2026)',
              description: 'Feature-by-feature comparison of CV Prime and MyPerfectResume for Indian job seekers.',
              url: canonicalUrl,
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
          ]),
        }}
      />
    </main>
  );
}
