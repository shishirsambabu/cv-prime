import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Prime vs Resume.io — Which CV Builder is Better for India? | CV Prime',
  description:
    'CV Prime vs Resume.io comparison for 2026. Compare ATS scoring, AI features, India pricing (INR vs USD), free tier, and templates. Find the best resume builder for Indian job seekers.',
  keywords: [
    'cv prime vs resume.io',
    'resume.io alternative india',
    'resume.io vs cv prime',
    'resume.io india pricing',
    'best resume builder india',
    'resume.io competitor india',
    'free resume.io alternative india',
    'resume builder india comparison',
  ],
  alternates: { canonical: 'https://cv-prime.in/cv-prime-vs-resume-io' },
  openGraph: {
    title: 'CV Prime vs Resume.io — Which CV Builder is Better for India?',
    description: 'Detailed feature comparison of CV Prime and Resume.io for Indian job seekers in 2026.',
    url: 'https://cv-prime.in/cv-prime-vs-resume-io',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime vs Resume.io Comparison' }],
  },
};

const features = [
  { feature: 'ATS scoring (0–100)', cvPrime: 'yes', resumeio: 'no', note: 'CV Prime gives a job-description-specific ATS match score; Resume.io does not offer ATS analysis' },
  { feature: 'AI bullet rewriting', cvPrime: 'yes', resumeio: 'limited', note: 'CV Prime\'s AI rewrites bullets with action verbs and quantified outcomes matched to the JD' },
  { feature: 'AI CV tailoring per job description', cvPrime: 'yes', resumeio: 'no', note: 'CV Prime tailors the entire CV to a specific JD; Resume.io has no JD-specific tailoring' },
  { feature: 'Cover letter generator', cvPrime: 'yes', resumeio: 'yes', note: 'Both include cover letter creation tools' },
  { feature: 'Free tier with PDF export', cvPrime: 'yes', resumeio: 'no', note: 'CV Prime free plan: 3 clean PDF exports. Resume.io watermarks all free downloads' },
  { feature: 'INR pricing (India)', cvPrime: 'yes', resumeio: 'no', note: 'CV Prime is ₹999 one-time; Resume.io charges in USD (≈₹1,200–2,000/month equivalent)' },
  { feature: 'UPI and Indian payment methods', cvPrime: 'yes', resumeio: 'no', note: 'CV Prime accepts UPI, net banking, Indian debit/credit cards' },
  { feature: 'India-specific job role guides', cvPrime: 'yes', resumeio: 'no', note: 'CV Prime has 35 India-specific role guides for IT, BFSI, ops, engineering, and more' },
  { feature: 'Job application tracker', cvPrime: 'yes', resumeio: 'no', note: 'CV Prime includes a built-in Kanban-style job tracker' },
  { feature: 'CV upload & parse (PDF/DOCX)', cvPrime: 'yes', resumeio: 'yes', note: 'Both support CV upload and content extraction' },
  { feature: 'Number of templates', cvPrime: '8 (all ATS-safe)', resumeio: '35+', note: 'Resume.io has more templates; some use columns and graphics that can fail ATS parsers' },
  { feature: 'BYOK AI (own API key)', cvPrime: 'yes', resumeio: 'no', note: 'CV Prime supports user-provided OpenRouter keys for enhanced AI privacy' },
];

const faqs = [
  {
    q: 'Is CV Prime a good alternative to Resume.io for Indian users?',
    a: 'Yes — particularly for job seekers who prioritise ATS optimization, India-specific content, and affordable INR pricing. Resume.io is a polished template builder but lacks ATS scoring, AI keyword tailoring, and India-focused content. CV Prime was built specifically for the Indian job market with local pricing and relevant role guides.',
  },
  {
    q: 'Does Resume.io have ATS optimization features?',
    a: 'No. Resume.io is primarily a template-focused CV builder without ATS scoring or keyword analysis capabilities. CV Prime provides a 0–100 ATS match score, identifies missing keywords from your target job description, and uses AI to rewrite bullets with those keywords.',
  },
  {
    q: 'How much does Resume.io cost in India?',
    a: 'Resume.io charges in USD, typically $2.95–$9.95/month for various plans. At current exchange rates, this equals approximately ₹250–₹830/month, but foreign transaction fees from Indian banks add 3–5%. The equivalent total cost often exceeds CV Prime Pro (₹999 one-time flat), and Resume.io does not accept Indian payment methods like UPI or net banking.',
  },
  {
    q: 'Can I download a PDF for free on CV Prime without watermarks?',
    a: 'Yes. CV Prime\'s free plan includes 3 clean PDF exports with no watermark — no credit card required. Resume.io\'s free plan adds a watermark to all downloaded documents. CV Prime Pro (₹999 one-time) offers unlimited PDF exports.',
  },
  {
    q: 'Which CV builder is better for freshers in India — CV Prime or Resume.io?',
    a: 'CV Prime. For Indian freshers, CV Prime offers India-specific guidance on structuring internships, projects, and education sections for ATS readability. The ATS scoring feature helps freshers understand why they are not getting callbacks from campus placement drives or entry-level applications on Naukri and LinkedIn.',
  },
];

export default function CvPrimeVsResumeIoPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">CV Prime vs Resume.io</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV Prime vs Resume.io — which resume builder is better for India in 2026?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A detailed comparison of CV Prime and Resume.io — covering ATS scoring, AI features, India pricing, free tier, and templates. Choose the right CV builder for your job search in India.
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
                  <p className="text-sm text-slate-600">ATS-focused, India-first</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ATS scoring & AI keyword tailoring</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ₹999 one-time in INR</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Free tier with 3 clean PDF exports</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> UPI and Indian payment methods</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> 35 India-specific role guides</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-display text-sm font-bold text-slate-700">R</div>
                <div>
                  <p className="font-display text-lg font-bold text-slate-900">Resume.io</p>
                  <p className="text-sm text-slate-600">Template-first, global audience</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Large template library (35+)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Polished UI and design</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No ATS scoring</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> USD pricing (expensive in India)</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> Watermarked free downloads</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Feature comparison — CV Prime vs Resume.io</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 text-left font-semibold text-slate-600">Feature</th>
                  <th className="p-4 text-center font-semibold text-cyan-700">CV Prime</th>
                  <th className="p-4 text-center font-semibold text-slate-600">Resume.io</th>
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
                      {row.resumeio === 'yes' ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-slate-400" />
                      ) : row.resumeio === 'no' ? (
                        <XCircle className="mx-auto h-5 w-5 text-red-400" />
                      ) : row.resumeio === 'limited' ? (
                        <Minus className="mx-auto h-5 w-5 text-amber-500" />
                      ) : (
                        <span className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600">{row.resumeio}</span>
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
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">CV Prime vs Resume.io — which should you use?</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
              <p className="font-display font-bold text-slate-900">Use CV Prime if:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'You are applying to jobs in India and want ATS scoring',
                  'You want AI to tailor your CV to each specific job description',
                  'You need to pay in INR (UPI, cards, net banking)',
                  'You are a fresher who needs India-specific CV structure guidance',
                  'You want 3 free clean PDF exports without a credit card',
                  'You want a job tracker built into the same tool',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-display font-bold text-slate-900">Resume.io might suit you if:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'You specifically need a template from Resume.io\'s 35+ collection',
                  'You are applying to Western companies with creative CV designs',
                  'You can pay in USD via international credit card',
                  'ATS optimization is not a priority for your job search',
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
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">CV Prime vs Resume.io — FAQs</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 p-6">
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Try CV Prime free — compare for yourself</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Free plan: 3 clean PDF exports, ATS scoring, AI rewrites, all 8 templates. No credit card, no commitment.
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
              headline: 'CV Prime vs Resume.io — Which Resume Builder is Better for India? (2026)',
              description: 'Feature-by-feature comparison of CV Prime and Resume.io for Indian job seekers.',
              url: 'https://cv-prime.in/cv-prime-vs-resume-io',
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
                { '@type': 'ListItem', position: 3, name: 'CV Prime vs Resume.io', item: 'https://cv-prime.in/cv-prime-vs-resume-io' },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
