import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Prime vs Teal — Which CV Builder is Better for India? | CV Prime',
  description:
    'CV Prime vs Teal comparison for 2026. Compare ATS scoring, AI features, India pricing (INR vs USD), job tracker, free tier, and India-specific content. Find out which is better for Indian job seekers.',
  keywords: [
    'cv prime vs teal',
    'teal alternative india',
    'teal hq vs cv prime',
    'teal cv builder india',
    'best cv builder india vs teal',
    'teal competitor india',
    'free teal alternative india',
    'teal resume builder review india',
  ],
  alternates: { canonical: 'https://cv-prime.in/cv-prime-vs-teal' },
  openGraph: {
    title: 'CV Prime vs Teal — Which CV Builder is Better for India?',
    description: 'Detailed feature-by-feature comparison of CV Prime and Teal for Indian job seekers.',
    url: 'https://cv-prime.in/cv-prime-vs-teal',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime vs Teal Comparison' }],
  },
};

const features = [
  { feature: 'ATS scoring (0–100)', cvPrime: 'yes', teal: 'yes', note: 'Both tools offer ATS keyword matching — CV Prime gives a numeric score per JD' },
  { feature: 'AI keyword tailoring per JD', cvPrime: 'yes', teal: 'limited', note: 'CV Prime rewrites bullets with your JD keywords; Teal AI assist is more generic' },
  { feature: 'Cover letter generator', cvPrime: 'yes', teal: 'yes', note: 'Both include AI cover letter generation' },
  { feature: 'Free tier available', cvPrime: 'yes', teal: 'yes', note: 'Both have free tiers; Teal free limits AI features and has no PDF export without subscription' },
  { feature: 'INR pricing (India)', cvPrime: 'yes', teal: 'no', note: 'CV Prime is ₹999 one-time; Teal charges in USD (≈₹1,200–2,500/month equivalent)' },
  { feature: 'UPI and Indian payment methods', cvPrime: 'yes', teal: 'no', note: 'CV Prime accepts UPI, net banking, Indian debit cards securely' },
  { feature: 'India-specific CV guides', cvPrime: 'yes', teal: 'no', note: 'CV Prime has 35 India role guides; Teal content is primarily US-focused' },
  { feature: 'Job tracker', cvPrime: 'yes', teal: 'yes', note: 'Both include a job application tracker; Teal\'s is more feature-rich' },
  { feature: 'Browser extension', cvPrime: 'no', teal: 'yes', note: 'Teal has a Chrome extension for saving jobs from LinkedIn; CV Prime does not' },
  { feature: 'PDF export without watermark', cvPrime: 'free (3)', teal: 'paid only', note: 'CV Prime gives 3 clean free exports; Teal limits PDF quality on free plan' },
  { feature: 'BYOK (own AI API key)', cvPrime: 'yes', teal: 'no', note: 'CV Prime lets you use your own OpenRouter key for enhanced privacy' },
  { feature: 'Number of templates', cvPrime: '8', teal: '10+', note: 'Both have a moderate template library; all CV Prime templates are ATS-safe' },
];

const faqs = [
  {
    q: 'Is CV Prime a good Teal alternative for Indian job seekers?',
    a: 'Yes — particularly for India-specific job search. Teal is a strong US-focused job search platform with a good job tracker and Chrome extension, but it lacks India-specific content, charges in USD, and does not accept Indian payment methods. CV Prime was built for the Indian job market with INR pricing, UPI payments, and 35 India-specific role guides.',
  },
  {
    q: 'How does CV Prime ATS scoring compare to Teal\'s?',
    a: 'Both tools offer ATS keyword analysis. Teal\'s analysis identifies missing keywords from a job description. CV Prime provides a 0–100 numeric ATS match score, highlights missing keywords by section, and uses AI to suggest bullet rewrites that include those keywords — making the AI tailoring more prescriptive and actionable.',
  },
  {
    q: 'Why is Teal expensive for India?',
    a: 'Teal charges in USD, with paid plans typically ranging from $9–$29/month (approximately ₹750–₹2,500/month at current rates). CV Prime is ₹999 one-time and accepts UPI, cards, and net banking — making it 3–10× more affordable for Indian users.',
  },
  {
    q: 'Does Teal have India-specific resume content?',
    a: 'No. Teal\'s content, templates, and job search integrations are optimised for the US market. CV Prime has 35 India-specific CV guides covering roles at TCS, Infosys, Groww, Swiggy, Indian banks, and more — with salary ranges, top companies, and India ATS tips per role.',
  },
  {
    q: 'Which tool is better for freshers in India — CV Prime or Teal?',
    a: 'CV Prime. For Indian freshers, CV Prime includes India-specific guidance on fresher CV format, projects and internships sections, campus recruitment ATS tips, and content tailored for Naukri, LinkedIn India, and internship platforms. Teal is designed for US job seekers who are already in the workforce.',
  },
];

export default function CvPrimeVsTealPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">CV Prime vs Teal</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV Prime vs Teal — which CV builder is better for India in 2026?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A feature-by-feature comparison of CV Prime and Teal for Indian job seekers. We compare ATS scoring, AI features, pricing, India compatibility, and job tracking — so you can choose the right tool.
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
                  <p className="text-sm text-slate-300">Best for Indian job seekers</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ATS scoring with numeric score + section gaps</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> INR pricing (₹999 one-time)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> UPI and Indian payment methods</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> 35 India-specific role guides</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Free tier with 3 exports, no card</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-display text-sm font-bold text-slate-300">T</div>
                <div>
                  <p className="font-display text-lg font-bold text-white">Teal</p>
                  <p className="text-sm text-slate-300">US-focused job search platform</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Good job tracker + Chrome extension</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> ATS keyword analysis (US-focused)</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> USD pricing (expensive in India)</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No Indian payment methods</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No India-specific role content</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Feature comparison — CV Prime vs Teal</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="p-4 text-left font-semibold text-slate-300">Feature</th>
                  <th className="p-4 text-center font-semibold text-cyan-300">CV Prime</th>
                  <th className="p-4 text-center font-semibold text-slate-300">Teal</th>
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
                      {row.teal === 'yes' ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-slate-400" />
                      ) : row.teal === 'no' ? (
                        <XCircle className="mx-auto h-5 w-5 text-red-400" />
                      ) : row.teal === 'limited' ? (
                        <Minus className="mx-auto h-5 w-5 text-amber-500" />
                      ) : (
                        <span className="inline-block rounded-full bg-white/[0.05] px-2 py-0.5 text-xs font-bold text-slate-300">{row.teal}</span>
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
          <p className="mt-3 text-slate-400">For Indian job seekers, INR pricing and Indian payment methods are critical factors.</p>
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
              <p className="font-display text-lg font-bold text-white">Teal pricing (approx. in INR)</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-300">Free plan</p>
                  <p className="text-sm text-amber-600">Limited AI features</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-300">Plus (monthly)</p>
                  <p className="font-display font-bold text-slate-300">~₹750–1,200/mo</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-300">Pro (monthly)</p>
                  <p className="font-display font-bold text-slate-300">~₹2,000–2,500/mo</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700">
                Charges in USD — conversion fees and limited Indian payment support.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to choose each */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">When to choose CV Prime vs Teal</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-6">
              <p className="font-display font-bold text-white">Choose CV Prime if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {[
                  'Are applying to jobs in India and want India-specific CV guidance',
                  'Want ATS scoring with a numeric score and section-level analysis',
                  'Need to pay in INR via UPI, cards, or net banking',
                  'Are a fresher or early-career professional in India',
                  'Want AI that tailors your bullets to specific job description keywords',
                  'Are targeting Indian companies: TCS, Flipkart, Groww, HDFC, etc.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-display font-bold text-white">Teal might suit you if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {[
                  'Are applying to US companies and find Teal\'s job tracker valuable',
                  'Want a Chrome extension to save LinkedIn jobs directly',
                  'Are comfortable paying in USD via international credit cards',
                  'Want a feature-rich job tracking experience more than CV tailoring',
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
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">CV Prime vs Teal — frequently asked questions</h2>
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
              { href: '/cv-prime-vs-zety', title: 'CV Prime vs Zety', sub: 'Compare ATS scoring and India pricing' },
              { href: '/cv-prime-vs-resume-io', title: 'CV Prime vs Resume.io', sub: 'Compare AI features and free tiers' },
              { href: '/cv-prime-vs-novoresume', title: 'CV Prime vs Novoresume', sub: 'Compare ATS safety and template quality' },
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
              headline: 'CV Prime vs Teal — Which CV Builder is Better for India? (2026)',
              description: 'Feature-by-feature comparison of CV Prime and Teal for Indian job seekers.',
              url: 'https://cv-prime.in/cv-prime-vs-teal',
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
                { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://cv-prime.in/resume-tools' },
                { '@type': 'ListItem', position: 3, name: 'CV Prime vs Teal', item: 'https://cv-prime.in/cv-prime-vs-teal' },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
