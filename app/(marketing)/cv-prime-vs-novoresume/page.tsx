import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Prime vs Novoresume — Which CV Builder is Better for India? | CV Prime',
  description:
    'CV Prime vs Novoresume comparison 2026. Compare ATS scoring, AI features, India pricing (INR vs USD), free tier, and templates. Find the best CV builder for Indian job seekers.',
  keywords: [
    'cv prime vs novoresume',
    'novoresume alternative india',
    'novoresume vs cv prime',
    'novoresume india pricing',
    'best cv maker india 2026',
    'novoresume competitor india',
    'free novoresume alternative',
    'cv builder comparison india 2026',
  ],
  alternates: { canonical: 'https://cv-prime.in/cv-prime-vs-novoresume' },
  openGraph: {
    title: 'CV Prime vs Novoresume — Which CV Builder is Better for India?',
    description: 'Feature comparison of CV Prime and Novoresume for Indian job seekers in 2026.',
    url: 'https://cv-prime.in/cv-prime-vs-novoresume',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime vs Novoresume Comparison' }],
  },
};

const features = [
  { feature: 'ATS scoring (0–100)', cvPrime: 'yes', novoresume: 'no', note: 'CV Prime scores your CV against specific job descriptions; Novoresume has no ATS analysis' },
  { feature: 'AI keyword tailoring per JD', cvPrime: 'yes', novoresume: 'no', note: 'CV Prime rewrites bullets with JD-specific keywords; Novoresume has no AI tailoring' },
  { feature: 'AI bullet rewriting', cvPrime: 'yes', novoresume: 'limited', note: 'CV Prime AI converts duty descriptions to outcome statements; Novoresume offers limited suggestions' },
  { feature: 'Cover letter generator', cvPrime: 'yes', novoresume: 'yes', note: 'Both include cover letter tools' },
  { feature: 'Free tier with usable exports', cvPrime: 'yes', novoresume: 'limited', note: 'CV Prime gives 3 free PDF exports; Novoresume\'s free plan has significant restrictions' },
  { feature: 'INR pricing (India)', cvPrime: 'yes', novoresume: 'no', note: 'CV Prime is ₹249/month; Novoresume charges in USD (~$16–19/month = ₹1,300–₹1,600)' },
  { feature: 'UPI / Razorpay payment', cvPrime: 'yes', novoresume: 'no', note: 'CV Prime accepts UPI, net banking, Indian debit/credit cards' },
  { feature: 'India-specific content library', cvPrime: 'yes', novoresume: 'no', note: 'CV Prime has 30+ India-specific guides; Novoresume\'s content is US/European focused' },
  { feature: 'Job application tracker', cvPrime: 'yes', novoresume: 'no', note: 'CV Prime includes a built-in job tracker; Novoresume does not' },
  { feature: 'ATS-safe templates', cvPrime: 'all 8', novoresume: 'some', note: 'Some Novoresume templates use two-column designs that can fail ATS parsers; all CV Prime templates are ATS-safe' },
  { feature: 'BYOK (own AI key)', cvPrime: 'yes', novoresume: 'no', note: 'CV Prime allows users to connect their own OpenRouter API key for privacy' },
  { feature: 'Interview question guides', cvPrime: 'yes (30 roles)', novoresume: 'no', note: 'CV Prime includes comprehensive interview Q&A guides for 30 Indian job roles' },
];

const faqs = [
  {
    q: 'Is CV Prime better than Novoresume for Indian job seekers?',
    a: 'For Indian job seekers, CV Prime offers several significant advantages over Novoresume: ATS scoring against specific job descriptions, INR pricing (Novoresume charges in USD at ≈₹1,300–₹1,600/month equivalent), UPI and Razorpay payment support, and India-specific content for 30 job roles. Novoresume is a well-designed template builder but lacks ATS optimization features critical for the Indian job market.',
  },
  {
    q: 'Does Novoresume have ATS optimization?',
    a: 'No. Novoresume is primarily a template and design-focused CV builder. It does not offer ATS match scoring against job descriptions, keyword gap analysis, or AI tailoring to specific JDs. CV Prime offers all three as core features, making it significantly more effective for passing ATS screening at Indian companies.',
  },
  {
    q: 'How much does Novoresume cost in India?',
    a: 'Novoresume charges in USD at approximately $16–19/month for Pro plans. At current exchange rates, this equals ₹1,300–₹1,600/month — 5x to 6x the cost of CV Prime Pro (₹249/month). Novoresume does not accept Indian payment methods like UPI, Razorpay, or net banking, and Indian bank foreign transaction fees apply.',
  },
  {
    q: 'Are Novoresume templates ATS-safe?',
    a: 'Not all of them. Novoresume\'s premium templates include two-column designs with visual elements that can cause ATS parsing failures — the very problem they\'re supposed to help you avoid. CV Prime\'s 8 templates are all specifically designed to be ATS-readable, with single-column layouts and standard section headings that ATS systems can reliably parse.',
  },
  {
    q: 'Can I try CV Prime for free before upgrading?',
    a: 'Yes. CV Prime\'s free plan includes 3 clean PDF exports (no watermark), full ATS scoring, AI bullet rewrites, cover letter generation, and all 8 templates — no credit card required. This lets you fully evaluate the platform before upgrading to Pro (₹249/month or ₹1,999/year).',
  },
];

export default function CvPrimeVsNovoresumePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">CV Prime vs Novoresume</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV Prime vs Novoresume — which CV maker is better for India in 2026?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A feature-by-feature comparison of CV Prime and Novoresume covering ATS scoring, AI features, India pricing, free tier, and ATS template safety. Choose the right CV builder for your Indian job search.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800 px-5 py-2 text-sm text-slate-300">
            Last updated: June 2026
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
                  <p className="text-sm text-slate-600">ATS-first, India-built</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ATS scoring & AI keyword tailoring</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ₹249/month in INR</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> All 8 templates ATS-safe</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> 30 India-specific role guides</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> UPI / Razorpay / net banking</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-display text-sm font-bold text-slate-700">N</div>
                <div>
                  <p className="font-display text-lg font-bold text-slate-900">Novoresume</p>
                  <p className="text-sm text-slate-600">Design-focused, global</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Premium visual design</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Large template collection</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No ATS scoring</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> USD pricing (~₹1,300–₹1,600/mo)</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> Some templates fail ATS parsing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Feature comparison — CV Prime vs Novoresume</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 text-left font-semibold text-slate-600">Feature</th>
                  <th className="p-4 text-center font-semibold text-cyan-700">CV Prime</th>
                  <th className="p-4 text-center font-semibold text-slate-600">Novoresume</th>
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
                      {row.novoresume === 'yes' ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-slate-400" />
                      ) : row.novoresume === 'no' ? (
                        <XCircle className="mx-auto h-5 w-5 text-red-400" />
                      ) : row.novoresume === 'limited' ? (
                        <Minus className="mx-auto h-5 w-5 text-amber-500" />
                      ) : row.novoresume === 'some' ? (
                        <Minus className="mx-auto h-5 w-5 text-amber-500" />
                      ) : (
                        <span className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600">{row.novoresume}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ATS template warning */}
      <section className="bg-amber-50 px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-amber-900">
            Important: some Novoresume templates can fail ATS parsing
          </h2>
          <p className="mt-4 leading-7 text-amber-800">
            Novoresume&apos;s premium template library includes two-column designs with visual elements, progress bars, and graphic elements that are optimised for human readers but frequently fail ATS parsers used by Indian employers. When an ATS cannot parse a CV correctly, it scores the candidate lower or rejects them entirely — regardless of their qualifications.
          </p>
          <p className="mt-4 leading-7 text-amber-800">
            All 8 CV Prime templates are specifically designed to be ATS-readable: single-column layouts, standard section headings, no graphics, tables, or text boxes. The same templates that look professional to a human recruiter also pass every major ATS parser, including Workday, SAP SuccessFactors, Taleo, Greenhouse, and Darwinbox.
          </p>
        </div>
      </section>

      {/* When to choose */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">CV Prime vs Novoresume — which should you use?</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
              <p className="font-display font-bold text-slate-900">Choose CV Prime if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'Are applying to companies in India that use ATS',
                  'Want your CV scored against the specific JD you are targeting',
                  'Need INR pricing and Indian payment methods',
                  'Want all templates guaranteed to be ATS-safe',
                  'Need India-specific guidance for IT, BFSI, ops, or engineering roles',
                  'Want a free tier with 3 clean PDF exports to evaluate the tool',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-display font-bold text-slate-900">Novoresume might suit you if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'Specifically want Novoresume\'s visual template designs',
                  'Are applying to Western companies where design-forward CVs are accepted',
                  'Can pay in USD via international credit card',
                  'Are not applying to companies that use ATS screening',
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">CV Prime vs Novoresume — FAQs</h2>
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

      {/* More comparisons */}
      <section className="border-t border-slate-100 px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-xl font-bold">More comparisons</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/cv-prime-vs-zety" className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-cyan-300 hover:text-cyan-700">
              CV Prime vs Zety <ArrowRight className="h-3 w-3" />
            </Link>
            <Link href="/cv-prime-vs-resume-io" className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-cyan-300 hover:text-cyan-700">
              CV Prime vs Resume.io <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Try CV Prime free — ATS scoring included
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Free plan includes 3 clean PDF exports, ATS scoring, AI rewrites, and all 8 ATS-safe templates. No credit card required.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Try CV Prime free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'CV Prime vs Novoresume — Which CV Maker is Better for India? (2026)',
              description: 'Feature comparison of CV Prime and Novoresume for Indian job seekers.',
              url: 'https://cv-prime.in/cv-prime-vs-novoresume',
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
