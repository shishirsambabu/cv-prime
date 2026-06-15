import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Prime vs Zety — Which CV Builder is Better for India? | CV Prime',
  description:
    'CV Prime vs Zety comparison for 2026. Compare ATS scoring, AI features, India pricing (INR vs USD), free tier, and templates. Find out which resume builder is better for Indian job seekers.',
  keywords: [
    'cv prime vs zety',
    'zety alternative india',
    'zety vs cv prime',
    'zety india pricing',
    'best cv builder india vs zety',
    'zety competitor india',
    'free zety alternative india',
    'cv builder india comparison',
  ],
  alternates: { canonical: 'https://cv-prime.in/cv-prime-vs-zety' },
  openGraph: {
    title: 'CV Prime vs Zety — Which CV Builder is Better for India?',
    description: 'Detailed feature-by-feature comparison of CV Prime and Zety for Indian job seekers.',
    url: 'https://cv-prime.in/cv-prime-vs-zety',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime vs Zety Comparison' }],
  },
};

const features = [
  { feature: 'ATS scoring (0–100)', cvPrime: 'yes', zety: 'no', note: 'CV Prime gives you a numerical ATS match score vs each job description' },
  { feature: 'AI keyword tailoring per JD', cvPrime: 'yes', zety: 'limited', note: 'CV Prime rewrites bullets to include your target JD\'s exact keywords' },
  { feature: 'Cover letter generator', cvPrime: 'yes', zety: 'yes', note: 'Both include AI cover letter generation' },
  { feature: 'Free tier available', cvPrime: 'yes', zety: 'no', note: 'CV Prime free plan includes 3 PDF exports; Zety requires payment to download' },
  { feature: 'INR pricing (India)', cvPrime: 'yes', zety: 'no', note: 'CV Prime is ₹249/month; Zety charges in USD (≈₹1,500–2,500/month equivalent)' },
  { feature: 'Razorpay / UPI payment', cvPrime: 'yes', zety: 'no', note: 'CV Prime accepts UPI, net banking, Indian debit cards' },
  { feature: 'India-specific CV guides', cvPrime: 'yes', zety: 'no', note: 'CV Prime has 30 India-specific role guides for IT, BFSI, ops, and more' },
  { feature: 'Job tracker', cvPrime: 'yes', zety: 'no', note: 'CV Prime includes a built-in job application tracker' },
  { feature: 'CV upload & parse', cvPrime: 'yes', zety: 'yes', note: 'Both support PDF and DOCX CV import' },
  { feature: 'PDF export without watermark', cvPrime: 'free (3)', zety: 'paid only', note: 'CV Prime gives 3 free clean exports; Zety watermarks all free downloads' },
  { feature: 'Number of templates', cvPrime: '8', zety: '18+', note: 'Zety has more templates; CV Prime\'s 8 are all ATS-optimised for parsing safety' },
  { feature: 'BYOK (own AI API key)', cvPrime: 'yes', zety: 'no', note: 'CV Prime lets you use your own OpenRouter key for enhanced privacy' },
];

const faqs = [
  {
    q: 'Is CV Prime a good Zety alternative for Indian job seekers?',
    a: 'Yes — particularly for job seekers who want ATS scoring, AI keyword tailoring, and India-specific pricing. Zety is a well-designed US-centric builder with more templates, but it lacks ATS analysis, charges in USD (expensive for India), and has no India-specific content. CV Prime was built specifically for the Indian job market.',
  },
  {
    q: 'Why is Zety expensive for India?',
    a: 'Zety charges in USD, with Pro plans typically ranging from $5.99 to $23.70/month. At current exchange rates, this equates to approximately ₹500–₹2,000/month — 2x to 8x the cost of CV Prime Pro (₹249/month). Additionally, Zety does not accept Indian payment methods like UPI or net banking.',
  },
  {
    q: 'Does Zety have ATS scoring?',
    a: 'No. Zety does not offer ATS match scoring against specific job descriptions. CV Prime provides a 0–100 ATS score with missing keyword identification and section-level improvement suggestions when you paste a job description.',
  },
  {
    q: 'Can I try CV Prime for free before committing?',
    a: 'Yes. CV Prime\'s free plan includes 3 PDF exports, full ATS scoring, AI bullet rewrites, all 8 templates, and the job tracker — no credit card required. This lets you fully evaluate the platform before upgrading to Pro (₹249/month).',
  },
  {
    q: 'Which is better for freshers — CV Prime or Zety?',
    a: 'CV Prime. For Indian freshers, CV Prime offers India-specific guides for fresher CV structure, projects and internships sections, and ATS scoring for campus recruitment JDs. Zety\'s content is US-focused and less relevant for Indian fresher hiring contexts (AMCAT, CoCubes, campus drives, Naukri.com).',
  },
];

export default function CvPrimeVsZetyPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">CV Prime vs Zety</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV Prime vs Zety — which CV builder is better for India in 2026?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A feature-by-feature comparison of CV Prime and Zety for Indian job seekers. We compare ATS scoring, AI features, pricing, India compatibility, and free tier — so you can choose the right tool.
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
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ATS scoring & keyword analysis</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> INR pricing (₹249/month)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Razorpay / UPI payments</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> India-specific CV guides</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Free tier (3 exports, no card)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-display text-sm font-bold text-slate-700">Z</div>
                <div>
                  <p className="font-display text-lg font-bold text-slate-900">Zety</p>
                  <p className="text-sm text-slate-600">US-focused template builder</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Large template library (18+)</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No ATS scoring</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> USD pricing (expensive in India)</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No Indian payment methods</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> Paid-only (watermarked free)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Feature comparison — CV Prime vs Zety</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 text-left font-semibold text-slate-600">Feature</th>
                  <th className="p-4 text-center font-semibold text-cyan-700">CV Prime</th>
                  <th className="p-4 text-center font-semibold text-slate-600">Zety</th>
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
                      {row.zety === 'yes' ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-slate-400" />
                      ) : row.zety === 'no' ? (
                        <XCircle className="mx-auto h-5 w-5 text-red-400" />
                      ) : row.zety === 'limited' ? (
                        <Minus className="mx-auto h-5 w-5 text-amber-500" />
                      ) : (
                        <span className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600">{row.zety}</span>
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
          <p className="mt-3 text-slate-500">For Indian job seekers, pricing in INR and acceptance of Indian payment methods matters significantly.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border-2 border-cyan-200 bg-white p-6">
              <p className="font-display text-lg font-bold text-slate-900">CV Prime pricing</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-700">Free plan</p>
                  <p className="font-bold text-slate-900">₹0</p>
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
                Accepts UPI, Razorpay, Indian debit/credit cards, net banking
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-display text-lg font-bold text-slate-900">Zety pricing (approx. in INR)</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-700">Free plan</p>
                  <p className="text-sm text-red-600">Watermarked only</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-700">Basic (monthly)</p>
                  <p className="font-display font-bold text-slate-600">~₹500–800/mo</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-700">Premium (monthly)</p>
                  <p className="font-display font-bold text-slate-600">~₹1,500–2,000/mo</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700">
                Charges in USD — conversion fees apply. Indian payment methods limited.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to choose each */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">When to choose CV Prime vs Zety</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
              <p className="font-display font-bold text-slate-900">Choose CV Prime if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'Are applying to jobs in India and want India-specific guidance',
                  'Want ATS scoring against the actual job description you\'re targeting',
                  'Need to pay in INR via UPI, Razorpay, or net banking',
                  'Want a genuinely free tier to evaluate the tool before paying',
                  'Want AI that tailors your bullets to specific job description keywords',
                  'Are a fresher building your first CV for Indian campus recruitment',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-display font-bold text-slate-900">Zety might suit you if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'Need a specific template style from Zety\'s larger library',
                  'Are applying primarily to US or European companies',
                  'Are comfortable paying in USD via international cards',
                  'Don\'t need ATS scoring — just a formatted template',
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">CV Prime vs Zety — frequently asked questions</h2>
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

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Try CV Prime free — no credit card required
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Free plan includes 3 PDF exports, ATS scoring, AI bullet rewrites, and all 8 templates. No commitment.
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
              headline: 'CV Prime vs Zety — Which CV Builder is Better for India? (2026)',
              description: 'Feature-by-feature comparison of CV Prime and Zety for Indian job seekers.',
              url: 'https://cv-prime.in/cv-prime-vs-zety',
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
