import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Prime vs Resume Genius — Which Resume Builder is Better for India? | CV Prime',
  description:
    'CV Prime vs Resume Genius comparison 2026. Compare ATS scoring, AI features, India pricing (INR vs USD), free tier, templates, and India-specific guidance. Find the best resume builder for Indian job seekers.',
  keywords: [
    'cv prime vs resume genius',
    'resume genius alternative india',
    'resume genius vs cv prime',
    'resume genius india pricing',
    'best resume builder india vs resume genius',
    'resume genius competitor india',
    'free resume genius alternative',
    'resume builder india comparison 2026',
    'resume genius ats scoring',
  ],
  alternates: { canonical: 'https://cv-prime.in/cv-prime-vs-resume-genius' },
  openGraph: {
    title: 'CV Prime vs Resume Genius — Which Resume Builder is Better for India?',
    description: 'Detailed feature-by-feature comparison of CV Prime and Resume Genius for Indian job seekers.',
    url: 'https://cv-prime.in/cv-prime-vs-resume-genius',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime vs Resume Genius Comparison' }],
  },
};

const features = [
  { feature: 'ATS scoring (0–100)', cvPrime: 'yes', competitor: 'no', note: 'CV Prime gives a numerical ATS match score per job description; Resume Genius has no ATS analysis' },
  { feature: 'AI keyword tailoring per JD', cvPrime: 'yes', competitor: 'limited', note: 'CV Prime rewrites bullets to match the exact keywords in your target JD; Resume Genius offers generic AI suggestions' },
  { feature: 'Cover letter generator', cvPrime: 'yes', competitor: 'yes', note: 'Both tools include a cover letter builder' },
  { feature: 'Free tier (clean PDF export)', cvPrime: 'yes', competitor: 'no', note: 'CV Prime free plan includes 3 watermark-free PDF exports; Resume Genius requires a paid subscription to download' },
  { feature: 'INR pricing (India)', cvPrime: 'yes', competitor: 'no', note: 'CV Prime is ₹249/month; Resume Genius charges in USD (≈₹1,200–2,500/month equivalent)' },
  { feature: 'Razorpay / UPI payment', cvPrime: 'yes', competitor: 'no', note: 'CV Prime accepts UPI, net banking, and Indian debit/credit cards via Razorpay' },
  { feature: 'India-specific CV guides', cvPrime: 'yes', competitor: 'no', note: 'CV Prime has 30 India-specific role guides; Resume Genius content is US-focused' },
  { feature: 'Job application tracker', cvPrime: 'yes', competitor: 'no', note: 'CV Prime includes a built-in job tracker; Resume Genius has no tracking feature' },
  { feature: 'CV upload & parse (PDF/DOCX)', cvPrime: 'yes', competitor: 'yes', note: 'Both support importing an existing resume for editing' },
  { feature: 'PDF export without watermark', cvPrime: 'free (3)', competitor: 'paid only', note: 'CV Prime gives 3 free clean exports; Resume Genius watermarks or blocks free downloads' },
  { feature: 'Number of templates', cvPrime: '8 (ATS-safe)', competitor: '35+', note: 'Resume Genius has more templates; CV Prime\'s 8 are all tested for ATS parse compatibility' },
  { feature: 'BYOK (own AI API key)', cvPrime: 'yes', competitor: 'no', note: 'CV Prime lets you use your own OpenRouter API key for enhanced privacy' },
];

const faqs = [
  {
    q: 'Is CV Prime a good Resume Genius alternative for Indian job seekers?',
    a: 'Yes — especially for job seekers who need ATS scoring, AI tailoring to specific JDs, and India-friendly pricing. Resume Genius is a well-known US-centric template builder with a large template library, but it lacks ATS analysis, charges in USD, and has no India-specific resume guidance. CV Prime was built specifically for the Indian job market, with role guides for IT, BFSI, consulting, operations, and more.',
  },
  {
    q: 'Does Resume Genius have ATS scoring?',
    a: 'No. Resume Genius does not offer ATS match scoring against a specific job description. It provides general resume tips and template formatting, but it cannot tell you whether your resume will pass the ATS for a specific role. CV Prime provides a 0–100 ATS score with missing keyword identification, section-level analysis, and AI-powered fix recommendations per job description.',
  },
  {
    q: 'Why is Resume Genius expensive for India?',
    a: 'Resume Genius charges in USD, typically ranging from $5.95 to $7.95/month on annual plans, with higher monthly rates on short subscriptions. At current exchange rates, this equates to approximately ₹500–₹2,500/month — 2x to 10x the cost of CV Prime Pro (₹249/month). Resume Genius also does not accept UPI or other Indian payment methods, making it impractical for most Indian users.',
  },
  {
    q: 'Can I use Resume Genius for free in India?',
    a: 'Resume Genius restricts downloads behind a subscription or charges a "trial" fee. You can build a resume in the editor, but to download it as a PDF, a payment is required. CV Prime\'s free plan genuinely includes 3 clean PDF exports, full ATS scoring, AI bullet rewrites, and all 8 templates — no credit card required.',
  },
  {
    q: 'Which is better for freshers — CV Prime or Resume Genius?',
    a: 'CV Prime is significantly better for Indian freshers. CV Prime offers a dedicated fresher resume guide, India-specific sections (CGPA handling, projects, internships), ATS scoring for campus recruitment JDs, and role-specific guides for freshers entering tech, BFSI, and operations. Resume Genius content is US-focused and does not address the specific needs of Indian campus recruitment (AMCAT, CoCubes, Naukri, company ATS systems).',
  },
];

const competitorName = 'Resume Genius';
const competitorInitial = 'RG';
const competitorDesc = 'US-focused template builder';
const slug = 'cv-prime-vs-resume-genius';
const canonicalUrl = `https://cv-prime.in/${slug}`;

export default function CvPrimeVsResumeGeniusPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">CV Prime vs Resume Genius</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV Prime vs Resume Genius — which resume builder is better for India in 2026?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A feature-by-feature comparison of CV Prime and Resume Genius for Indian job seekers. We compare ATS scoring, AI tailoring, India pricing (INR vs USD), free tier, and India-specific content — so you can choose the right tool.
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
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Genuine free tier (3 clean PDF exports)</li>
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
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Large template library (35+)</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No ATS scoring</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> USD pricing (expensive in India)</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No Indian payment methods</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> Paid-only downloads</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Feature comparison — CV Prime vs Resume Genius</h2>
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
              <p className="font-display text-lg font-bold text-slate-900">Resume Genius pricing (approx. in INR)</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-700">Free plan</p>
                  <p className="text-sm text-red-600">Download requires payment</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-700">Monthly plan</p>
                  <p className="font-display font-bold text-slate-600">~₹660/mo (USD)</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-700">Annual plan</p>
                  <p className="font-display font-bold text-slate-600">~₹500/mo (USD)</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700">
                Charges in USD — conversion fees apply. Indian payment methods not supported.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to choose each */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">When to choose CV Prime vs Resume Genius</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
              <p className="font-display font-bold text-slate-900">Choose CV Prime if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'Are applying to jobs in India and want India-specific resume guidance',
                  'Want ATS scoring against the actual job description you\'re targeting',
                  'Need to pay in INR via UPI, Razorpay, or net banking',
                  'Want a genuinely free tier to evaluate before paying',
                  'Want AI that tailors your resume bullets to a specific job description',
                  'Are a fresher needing a resume structured for Indian campus recruitment',
                  'Need role-specific guidance for IT, BFSI, ops, or consulting roles in India',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-display font-bold text-slate-900">Resume Genius might suit you if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'Need a specific template style from a larger library',
                  'Are applying primarily to US or North American companies',
                  'Are comfortable paying in USD via an international credit card',
                  'Do not need ATS scoring — just a formatted resume template',
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">CV Prime vs Resume Genius — frequently asked questions</h2>
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
              { href: '/cv-prime-vs-myperfectresume', label: 'CV Prime vs MyPerfectResume' },
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
              headline: 'CV Prime vs Resume Genius — Which Resume Builder is Better for India? (2026)',
              description: 'Feature-by-feature comparison of CV Prime and Resume Genius for Indian job seekers.',
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
