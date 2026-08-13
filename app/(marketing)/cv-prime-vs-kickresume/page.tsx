import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Prime vs Kickresume — Which CV Builder is Better for India? | CV Prime',
  description:
    'CV Prime vs Kickresume comparison for 2026. Compare ATS scoring, AI writing, India pricing (INR vs USD), free tier, templates, and India-specific content for Indian job seekers.',
  keywords: [
    'cv prime vs kickresume',
    'kickresume alternative india',
    'kickresume vs cv prime',
    'kickresume india pricing',
    'best cv builder india vs kickresume',
    'kickresume competitor india',
    'free kickresume alternative india',
    'kickresume review india',
  ],
  alternates: { canonical: 'https://cv-prime.in/cv-prime-vs-kickresume' },
  openGraph: {
    title: 'CV Prime vs Kickresume — Which CV Builder is Better for India?',
    description: 'Detailed feature-by-feature comparison of CV Prime and Kickresume for Indian job seekers.',
    url: 'https://cv-prime.in/cv-prime-vs-kickresume',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime vs Kickresume Comparison' }],
  },
};

const features = [
  { feature: 'ATS scoring (0–100)', cvPrime: 'yes', kickresume: 'no', note: 'CV Prime provides numeric ATS match scores per JD; Kickresume does not offer ATS analysis' },
  { feature: 'AI keyword tailoring per JD', cvPrime: 'yes', kickresume: 'limited', note: 'CV Prime tailors bullets to your specific JD keywords; Kickresume AI help is general content writing' },
  { feature: 'AI writing assistant', cvPrime: 'yes', kickresume: 'yes', note: 'Both include AI assistance for writing CV content' },
  { feature: 'Cover letter generator', cvPrime: 'yes', kickresume: 'yes', note: 'Both include AI cover letter generation' },
  { feature: 'Free tier available', cvPrime: 'yes', kickresume: 'limited', note: 'CV Prime free includes 3 exports; Kickresume free is very limited with watermarked downloads' },
  { feature: 'INR pricing (India)', cvPrime: 'yes', kickresume: 'no', note: 'CV Prime is ₹999 one-time; Kickresume charges in USD (≈₹800–2,000/month)' },
  { feature: 'UPI and Indian payment methods', cvPrime: 'yes', kickresume: 'no', note: 'CV Prime accepts UPI, net banking, Indian debit cards securely' },
  { feature: 'India-specific CV guides', cvPrime: 'yes', kickresume: 'no', note: 'CV Prime has 35 India role guides; Kickresume content is global/European focused' },
  { feature: 'ATS-safe templates', cvPrime: 'yes', kickresume: 'mixed', note: 'Kickresume has some visually heavy templates that can fail ATS parsing' },
  { feature: 'LinkedIn import', cvPrime: 'yes', kickresume: 'yes', note: 'Both support importing your LinkedIn profile to pre-fill CV data' },
  { feature: 'PDF export without watermark', cvPrime: 'free (3)', kickresume: 'paid only', note: 'CV Prime gives 3 clean free exports; Kickresume watermarks all free downloads' },
  { feature: 'BYOK (own AI API key)', cvPrime: 'yes', kickresume: 'no', note: 'CV Prime lets you use your own OpenRouter key for enhanced privacy and cost control' },
];

const faqs = [
  {
    q: 'Is CV Prime a good Kickresume alternative for Indian job seekers?',
    a: 'Yes — particularly for ATS optimisation and India-specific features. Kickresume is a well-rounded builder with a strong AI writing assistant and good template library, but it lacks ATS scoring, charges in USD (expensive for India), and has no India-specific content. CV Prime was built for the Indian job market with INR pricing, UPI payments, ATS scoring, and 35 India role guides.',
  },
  {
    q: 'Does Kickresume have ATS scoring?',
    a: 'No. Kickresume does not offer ATS match scoring against a specific job description. It offers AI content writing assistance, but not the ability to check how your CV scores against a particular JD\'s keywords. CV Prime\'s ATS checker gives you a 0–100 score with keyword gap analysis — so you know exactly what to fix before applying.',
  },
  {
    q: 'How does Kickresume AI compare to CV Prime AI?',
    a: 'Kickresume\'s AI helps you write CV content from scratch — it is good for generating bullet points if you are unsure what to write. CV Prime\'s AI tailors existing content to a specific job description: it identifies keywords in the JD that are missing from your CV and rewrites your bullets to include them. For optimising per-role, CV Prime\'s approach is more targeted.',
  },
  {
    q: 'Why is Kickresume expensive for India?',
    a: 'Kickresume charges in USD, with plans typically ranging from $8–$19/month (approximately ₹650–₹1,600/month). CV Prime is ₹999 one-time with UPI support — 3–6× more affordable for Indian users.',
  },
  {
    q: 'Which is better for a tech professional in India — CV Prime or Kickresume?',
    a: 'CV Prime. For Indian tech professionals, the ATS scoring feature is critical — most top tech companies in India (Amazon, Flipkart, Groww, CRED, Swiggy) use ATS. CV Prime lets you paste the job description and instantly see your keyword match score and what is missing. Combined with India-specific tech role guides and INR pricing, CV Prime is the stronger choice for Indian tech job seekers.',
  },
];

export default function CvPrimeVsKickresumePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">CV Prime vs Kickresume</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV Prime vs Kickresume — which CV builder is better for India in 2026?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A feature-by-feature comparison of CV Prime and Kickresume for Indian job seekers. We compare ATS scoring, AI writing assistance, pricing, India compatibility, and template safety.
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
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ATS scoring — numeric score + keyword gaps</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> JD-specific AI bullet tailoring</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> INR pricing (₹999 one-time)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> UPI and Indian payment methods</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> 35 India-specific role guides</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-display text-sm font-bold text-slate-300">K</div>
                <div>
                  <p className="font-display text-lg font-bold text-white">Kickresume</p>
                  <p className="text-sm text-slate-300">AI writing-focused builder</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Good AI writing assistant</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> LinkedIn import</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No ATS scoring</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> USD pricing (expensive for India)</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No India-specific content</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Feature comparison — CV Prime vs Kickresume</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="p-4 text-left font-semibold text-slate-300">Feature</th>
                  <th className="p-4 text-center font-semibold text-cyan-300">CV Prime</th>
                  <th className="p-4 text-center font-semibold text-slate-300">Kickresume</th>
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
                      {row.kickresume === 'yes' ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-slate-400" />
                      ) : row.kickresume === 'no' ? (
                        <XCircle className="mx-auto h-5 w-5 text-red-400" />
                      ) : row.kickresume === 'limited' || row.kickresume === 'mixed' ? (
                        <Minus className="mx-auto h-5 w-5 text-amber-500" />
                      ) : (
                        <span className="inline-block rounded-full bg-white/[0.05] px-2 py-0.5 text-xs font-bold text-slate-300">{row.kickresume}</span>
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
              <p className="font-display text-lg font-bold text-white">Kickresume pricing (approx. in INR)</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-300">Free plan</p>
                  <p className="text-sm text-amber-600">Watermarked downloads</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-300">Monthly plan</p>
                  <p className="font-display font-bold text-slate-300">~₹800–1,500/mo</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-300">Annual plan (per month)</p>
                  <p className="font-display font-bold text-slate-300">~₹400–750/mo</p>
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">When to choose CV Prime vs Kickresume</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-6">
              <p className="font-display font-bold text-white">Choose CV Prime if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {[
                  'Want ATS scoring to measure your keyword match before applying',
                  'Need AI that tailors your bullets to a specific job description',
                  'Are targeting Indian companies and need INR pricing',
                  'Are a fresher or mid-career professional in India',
                  'Want India-specific salary, company, and ATS data by role',
                  'Need to pay via UPI, cards, or net banking',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-display font-bold text-white">Kickresume might suit you if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {[
                  'Want a strong general AI writing assistant to draft CV content',
                  'Value LinkedIn import for quick data pre-fill',
                  'Are applying to European or global roles where Kickresume\'s templates fit',
                  'Are comfortable paying in USD via international credit card',
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">CV Prime vs Kickresume — frequently asked questions</h2>
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
              { href: '/cv-prime-vs-teal', title: 'CV Prime vs Teal', sub: 'Compare job tracking and India features' },
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
            Free plan includes 3 PDF exports, ATS scoring, AI bullet rewrites, and all 8 templates. Pro from ₹999 one-time.
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
              headline: 'CV Prime vs Kickresume — Which CV Builder is Better for India? (2026)',
              description: 'Feature-by-feature comparison of CV Prime and Kickresume for Indian job seekers.',
              url: 'https://cv-prime.in/cv-prime-vs-kickresume',
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
                { '@type': 'ListItem', position: 3, name: 'CV Prime vs Kickresume', item: 'https://cv-prime.in/cv-prime-vs-kickresume' },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
