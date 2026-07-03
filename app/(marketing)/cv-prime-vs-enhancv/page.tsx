import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Prime vs Enhancv — Which CV Builder is Better for India? | CV Prime',
  description:
    'CV Prime vs Enhancv comparison for 2026. Compare ATS scoring, visual templates, India pricing (INR vs USD), free tier, and India-specific content. Find out which resume builder is better for Indian job seekers.',
  keywords: [
    'cv prime vs enhancv',
    'enhancv alternative india',
    'enhancv vs cv prime',
    'enhancv india pricing',
    'best cv builder india vs enhancv',
    'enhancv competitor india',
    'free enhancv alternative india',
    'enhancv review india',
  ],
  alternates: { canonical: 'https://cv-prime.in/cv-prime-vs-enhancv' },
  openGraph: {
    title: 'CV Prime vs Enhancv — Which CV Builder is Better for India?',
    description: 'Detailed feature-by-feature comparison of CV Prime and Enhancv for Indian job seekers.',
    url: 'https://cv-prime.in/cv-prime-vs-enhancv',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime vs Enhancv Comparison' }],
  },
};

const features = [
  { feature: 'ATS scoring (0–100)', cvPrime: 'yes', enhancv: 'no', note: 'CV Prime gives a numeric ATS score per JD; Enhancv does not offer ATS analysis' },
  { feature: 'AI keyword tailoring per JD', cvPrime: 'yes', enhancv: 'limited', note: 'CV Prime rewrites bullets with JD keywords; Enhancv AI assist is generic content help' },
  { feature: 'Cover letter generator', cvPrime: 'yes', enhancv: 'yes', note: 'Both include AI cover letter generation' },
  { feature: 'Free tier available', cvPrime: 'yes', enhancv: 'limited', note: 'CV Prime free includes 3 exports; Enhancv free has major feature restrictions' },
  { feature: 'INR pricing (India)', cvPrime: 'yes', enhancv: 'no', note: 'CV Prime is ₹999 one-time; Enhancv charges in USD (≈₹1,500–2,000/month)' },
  { feature: 'UPI and Indian payment methods', cvPrime: 'yes', enhancv: 'no', note: 'CV Prime accepts UPI, net banking, Indian debit cards securely' },
  { feature: 'India-specific CV guides', cvPrime: 'yes', enhancv: 'no', note: 'CV Prime has 35 India role guides; Enhancv content is generic/global' },
  { feature: 'ATS-safe templates', cvPrime: 'yes', enhancv: 'mixed', note: 'Some Enhancv visual templates use column layouts that can fail ATS parsing' },
  { feature: 'Custom sections', cvPrime: 'yes', enhancv: 'yes', note: 'Both allow adding custom CV sections' },
  { feature: 'PDF export without watermark', cvPrime: 'free (3)', enhancv: 'paid only', note: 'CV Prime gives 3 clean free exports; Enhancv requires subscription for clean PDF' },
  { feature: 'BYOK (own AI API key)', cvPrime: 'yes', enhancv: 'no', note: 'CV Prime lets you use your own OpenRouter key for enhanced privacy' },
  { feature: 'Number of templates', cvPrime: '8', enhancv: '20+', note: 'Enhancv has more templates; note that visual/two-column designs can fail ATS' },
];

const faqs = [
  {
    q: 'Is CV Prime a good Enhancv alternative for Indian job seekers?',
    a: 'Yes — especially if ATS compatibility is important to you. Enhancv is a visually attractive builder with many creative templates, but several of its designs use two-column layouts that can fail ATS parsing. CV Prime\'s 8 templates are all tested for ATS safety. CV Prime also offers INR pricing (₹999 one-time), UPI payments, and 35 India-specific role guides.',
  },
  {
    q: 'Do Enhancv templates pass ATS?',
    a: 'It depends on the template. Enhancv\'s single-column templates generally pass ATS. However, several of its popular visual and two-column templates can fail ATS parsing — particularly at companies using Workday, Taleo, or SuccessFactors. CV Prime\'s templates are all single-column, text-based, and tested for ATS compatibility across major platforms.',
  },
  {
    q: 'Does Enhancv offer ATS scoring?',
    a: 'No. Enhancv does not offer ATS match scoring against a specific job description. CV Prime provides a 0–100 ATS score with missing keyword analysis and section-level improvement suggestions when you paste a job description — a key differentiator for job seekers who want to optimise per role.',
  },
  {
    q: 'Why is Enhancv expensive for India?',
    a: 'Enhancv charges in USD, with plans typically starting at $12–$20/month (approximately ₹1,000–₹1,700/month). CV Prime is ₹999 one-time and accepts UPI — making it 4–7× more affordable for Indian users, while offering more India-relevant features like ATS scoring and India role guides.',
  },
  {
    q: 'Which tool is better for experienced professionals in India — CV Prime or Enhancv?',
    a: 'CV Prime for most experienced professionals. If your primary goal is ATS optimisation (critical for tech, finance, consulting, and any role at a large company), CV Prime\'s ATS scoring, keyword tailoring, and ATS-safe templates are more valuable. Enhancv\'s visual templates may appeal if you are in a creative field where a visually distinctive CV is valued over ATS compatibility.',
  },
];

export default function CvPrimeVsEnhancvPage(): JSX.Element {
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
            <span className="text-white">CV Prime vs Enhancv</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV Prime vs Enhancv — which CV builder is better for India in 2026?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A feature-by-feature comparison of CV Prime and Enhancv for Indian job seekers. We compare ATS scoring, template safety, pricing, India compatibility, and free tier.
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
                  <p className="text-sm text-slate-300">Best for ATS & Indian job seekers</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ATS scoring with numeric score + gaps</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> All templates ATS-safe (single column)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> INR pricing (₹999 one-time)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> UPI and Indian payment methods</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> 35 India-specific role guides</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-display text-sm font-bold text-slate-300">E</div>
                <div>
                  <p className="font-display text-lg font-bold text-white">Enhancv</p>
                  <p className="text-sm text-slate-300">Visual-first CV builder</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> 20+ visual templates</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Cover letter generator</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No ATS scoring</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> Some templates fail ATS parsing</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> USD pricing, no Indian payment methods</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ATS template warning */}
      <section className="border-b border-amber-400/20 bg-amber-500/10 px-5 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-start gap-4">
            <div className="text-2xl">⚠️</div>
            <div>
              <p className="font-display font-bold text-amber-200">Enhancv template ATS warning</p>
              <p className="mt-2 text-sm leading-7 text-amber-200">
                Several popular Enhancv templates use two-column layouts, coloured sidebars, and graphic elements. These designs are visually impressive but can fail ATS parsing at major companies (Workday, Taleo, SuccessFactors). The ATS reads left-to-right in a single flow — a two-column layout causes skills in the right column to be read in the wrong order, or missed entirely. Before using a visual Enhancv template for a company with an ATS, check whether the template passes basic parsing tests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Feature comparison — CV Prime vs Enhancv</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="p-4 text-left font-semibold text-slate-300">Feature</th>
                  <th className="p-4 text-center font-semibold text-cyan-300">CV Prime</th>
                  <th className="p-4 text-center font-semibold text-slate-300">Enhancv</th>
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
                      {row.enhancv === 'yes' ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-slate-400" />
                      ) : row.enhancv === 'no' ? (
                        <XCircle className="mx-auto h-5 w-5 text-red-400" />
                      ) : row.enhancv === 'limited' || row.enhancv === 'mixed' ? (
                        <Minus className="mx-auto h-5 w-5 text-amber-500" />
                      ) : (
                        <span className="inline-block rounded-full bg-white/[0.05] px-2 py-0.5 text-xs font-bold text-slate-300">{row.enhancv}</span>
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
              <p className="font-display text-lg font-bold text-white">Enhancv pricing (approx. in INR)</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-300">Free plan</p>
                  <p className="text-sm text-amber-600">Heavily limited features</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-300">Monthly plan</p>
                  <p className="font-display font-bold text-slate-300">~₹1,200–1,700/mo</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-300">Annual plan (per month)</p>
                  <p className="font-display font-bold text-slate-300">~₹750–1,000/mo</p>
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">When to choose CV Prime vs Enhancv</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-6">
              <p className="font-display font-bold text-white">Choose CV Prime if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {[
                  'Are applying to companies with ATS (most companies with 50+ employees)',
                  'Want ATS scoring to measure keyword match before applying',
                  'Are targeting Indian companies and need INR pricing',
                  'Want role-specific India content: salary, top companies, ATS tips',
                  'Prefer templates guaranteed to pass ATS across all major platforms',
                  'Are in tech, finance, ops, or any role where ATS is a primary filter',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-display font-bold text-white">Enhancv might suit you if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {[
                  'Are in a creative field where a visually distinctive CV is expected',
                  'Are applying to smaller companies or direct-hire roles that bypass ATS',
                  'Want a wide variety of visual template styles to choose from',
                  'Are comfortable with USD payment and a premium subscription',
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">CV Prime vs Enhancv — frequently asked questions</h2>
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
              { href: '/cv-prime-vs-novoresume', title: 'CV Prime vs Novoresume', sub: 'Compare ATS safety and templates' },
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
            Free plan includes 3 PDF exports, ATS scoring, AI bullet rewrites, and all 8 ATS-safe templates. No commitment.
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
              headline: 'CV Prime vs Enhancv — Which CV Builder is Better for India? (2026)',
              description: 'Feature-by-feature comparison of CV Prime and Enhancv for Indian job seekers.',
              url: 'https://cv-prime.in/cv-prime-vs-enhancv',
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
                { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://cv-prime.in/compare' },
                { '@type': 'ListItem', position: 3, name: 'CV Prime vs Enhancv', item: 'https://cv-prime.in/cv-prime-vs-enhancv' },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
