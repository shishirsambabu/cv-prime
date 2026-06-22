import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Prime vs Rezi — Which AI Resume Builder is Better? | CV Prime',
  description:
    'CV Prime vs Rezi: detailed comparison of ATS scoring, AI tailoring, pricing, templates, and India support. Find which resume builder is right for you in 2026.',
  keywords: [
    'cv prime vs rezi',
    'rezi alternative india',
    'rezi vs cv prime',
    'best ai resume builder india',
    'rezi review india',
    'rezi alternatives 2026',
  ],
  alternates: { canonical: 'https://cv-prime.in/cv-prime-vs-rezi' },
  openGraph: {
    title: 'CV Prime vs Rezi — Which AI Resume Builder is Better?',
    description:
      'CV Prime vs Rezi: detailed comparison of ATS scoring, AI tailoring, pricing, templates, and India support. Find which resume builder is right for you in 2026.',
    url: 'https://cv-prime.in/cv-prime-vs-rezi',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime vs Rezi Comparison' }],
  },
};

const features = [
  {
    feature: 'ATS scoring (0–100)',
    cvPrime: 'yes',
    rezi: 'yes',
    note: 'Both tools provide ATS scoring — CV Prime gives a 0–100 numeric score per job description with section-level gap analysis',
  },
  {
    feature: 'AI bullet rewriter',
    cvPrime: 'yes',
    rezi: 'yes',
    note: 'Both offer AI-powered bullet point suggestions; CV Prime tailors rewrites directly to the target JD keywords',
  },
  {
    feature: 'JD tailoring (per job description)',
    cvPrime: 'yes',
    rezi: 'yes',
    note: 'CV Prime and Rezi both support pasting a JD to tailor content — CV Prime highlights keyword gaps by section',
  },
  {
    feature: 'Cover letter generator',
    cvPrime: 'yes',
    rezi: 'paid add-on',
    note: 'CV Prime includes a cover letter generator on all plans; Rezi\'s cover letter feature requires an additional paid add-on',
  },
  {
    feature: 'Job tracker',
    cvPrime: 'yes',
    rezi: 'no',
    note: 'CV Prime includes a built-in job application tracker; Rezi does not offer a job tracking feature',
  },
  {
    feature: 'Free tier available',
    cvPrime: 'yes',
    rezi: 'limited',
    note: 'CV Prime free plan includes 3 clean PDF exports; Rezi\'s free tier is heavily restricted with very limited AI usage',
  },
  {
    feature: 'PDF export without watermark',
    cvPrime: 'free (3)',
    rezi: 'paid only',
    note: 'CV Prime gives 3 watermark-free exports on the free plan; Rezi requires a paid subscription for clean PDF downloads',
  },
  {
    feature: 'INR pricing (India)',
    cvPrime: 'yes',
    rezi: 'no',
    note: 'CV Prime is ₹249/month; Rezi charges in USD (~$29/month ≈ ₹2,400/month at current rates)',
  },
  {
    feature: 'UPI and Indian payment methods',
    cvPrime: 'yes',
    rezi: 'no',
    note: 'CV Prime accepts UPI, Indian debit/credit cards, and net banking; Rezi accepts USD only',
  },
  {
    feature: 'India-specific CV guides',
    cvPrime: 'yes',
    rezi: 'no',
    note: 'CV Prime has 35 India-specific role guides for IT, BFSI, ops, and campus hiring; Rezi content is US-focused',
  },
  {
    feature: 'Number of templates',
    cvPrime: '8',
    rezi: '12+',
    note: 'Rezi has a slightly larger template library; all CV Prime templates are ATS-optimised for correct parsing',
  },
  {
    feature: 'BYOK (own AI API key)',
    cvPrime: 'yes',
    rezi: 'no',
    note: 'CV Prime lets you bring your own OpenRouter key for enhanced privacy; Rezi does not offer this option',
  },
];

const faqs = [
  {
    q: 'Is CV Prime a good Rezi alternative for Indian job seekers?',
    a: 'Yes — particularly for India-specific job search. Rezi is a capable AI resume builder but it is optimised for the US market, charges in USD (~$29/month, approximately ₹2,400/month), and does not support Indian payment methods. CV Prime was built for the Indian job market with INR pricing (₹249/month), UPI payments, and 35 India-specific role guides for sectors like IT, BFSI, e-commerce, and campus recruitment.',
  },
  {
    q: 'How does CV Prime ATS scoring compare to Rezi\'s?',
    a: 'Both CV Prime and Rezi provide ATS scoring based on job description keyword matching. Rezi\'s scoring identifies missing keywords and flags formatting issues. CV Prime provides a 0–100 numeric ATS match score, breaks down missing keywords by CV section (summary, experience, skills), and uses AI to suggest tailored bullet rewrites that naturally incorporate those keywords — making the analysis more actionable.',
  },
  {
    q: 'Does Rezi include a cover letter generator?',
    a: 'Rezi offers a cover letter feature, but it is a paid add-on rather than included in the base subscription. CV Prime includes a full AI cover letter generator on all plans — including the free tier — allowing you to generate and download a tailored cover letter alongside your CV without any additional charge.',
  },
  {
    q: 'Why is Rezi expensive for users in India?',
    a: 'Rezi charges in USD at approximately $29/month, which converts to roughly ₹2,400/month at current exchange rates — nearly 10× the cost of CV Prime Pro (₹249/month). In addition, Rezi does not accept Indian payment methods such as UPI, cards, or net banking, which means Indian users must pay conversion fees on international cards.',
  },
  {
    q: 'Which AI resume builder is better for freshers in India — CV Prime or Rezi?',
    a: 'CV Prime. For Indian freshers, CV Prime includes India-specific guidance on fresher CV format, projects and internships sections, and ATS scoring calibrated to campus recruitment JDs from companies like TCS, Infosys, Wipro, and top startups. CV Prime also covers Indian recruitment platforms like Naukri and LinkedIn India. Rezi is optimised for US mid-career professionals and its content and scoring are less relevant to Indian fresher hiring contexts.',
  },
  {
    q: 'Can I try CV Prime for free before deciding?',
    a: 'Yes. CV Prime\'s free plan includes 3 watermark-free PDF exports, full ATS scoring, AI bullet rewrites, a cover letter generator, the job tracker, and all 8 templates — no credit card required. This gives you a complete evaluation of all core features before upgrading to Pro at ₹249/month.',
  },
];

export default function CvPrimeVsReziPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">CV Prime vs Rezi</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV Prime vs Rezi — which AI resume builder is better in 2026?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A feature-by-feature comparison of CV Prime and Rezi. We compare ATS scoring, AI tailoring, cover letter generation, pricing, India support, and free tier — so you can pick the right tool for your job search.
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
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ATS scoring with 0–100 score + section gaps</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> INR pricing (₹249/month)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> UPI and Indian payment methods</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Cover letter included on all plans</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Job tracker + 35 India role guides</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-display text-sm font-bold text-slate-700">R</div>
                <div>
                  <p className="font-display text-lg font-bold text-slate-900">Rezi</p>
                  <p className="text-sm text-slate-600">US-focused AI resume builder</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> ATS scoring and AI suggestions</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> JD tailoring and bullet rewrites</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> USD-only (~$29/mo ≈ ₹2,400)</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No Indian payment methods</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No job tracker; cover letter is a paid add-on</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Feature comparison — CV Prime vs Rezi</h2>
          <p className="mt-3 text-slate-500">
            See how CV Prime and Rezi compare across ATS scoring, AI features, pricing, and India compatibility.
            Check our <Link href="/ats-checker" className="text-cyan-700 underline hover:text-cyan-900">ATS checker</Link> and{' '}
            <Link href="/ai-cv-builder" className="text-cyan-700 underline hover:text-cyan-900">AI CV builder</Link> pages for more detail on CV Prime&apos;s core features.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 text-left font-semibold text-slate-600">Feature</th>
                  <th className="p-4 text-center font-semibold text-cyan-700">CV Prime</th>
                  <th className="p-4 text-center font-semibold text-slate-600">Rezi</th>
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
                      {row.rezi === 'yes' ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-slate-400" />
                      ) : row.rezi === 'no' ? (
                        <XCircle className="mx-auto h-5 w-5 text-red-400" />
                      ) : row.rezi === 'limited' ? (
                        <Minus className="mx-auto h-5 w-5 text-amber-500" />
                      ) : row.rezi === 'paid add-on' ? (
                        <span className="inline-block rounded-full bg-amber-50 px-2 py-0.5 text-xs font-bold text-amber-700">paid add-on</span>
                      ) : (
                        <span className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600">{row.rezi}</span>
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
          <p className="mt-3 text-slate-500">
            For Indian job seekers, INR pricing and local payment methods are critical. See our{' '}
            <Link href="/pricing" className="text-cyan-700 underline hover:text-cyan-900">full pricing page</Link> for CV Prime plan details.
          </p>
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
              </div>
              <div className="mt-4 rounded-xl bg-cyan-50 p-3 text-xs text-cyan-800">
                Accepts UPI, Indian debit/credit cards, net banking
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-display text-lg font-bold text-slate-900">Rezi pricing (approx. in INR)</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-700">Free plan</p>
                  <p className="text-sm text-amber-600">Very limited AI usage</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-700">Pro (monthly)</p>
                  <p className="font-display font-bold text-slate-600">~₹2,400/month</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-700">Pro (annual)</p>
                  <p className="font-display font-bold text-slate-600">~₹14,000/year</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700">
                Charges in USD (~$29/month) — conversion fees apply. No Indian payment methods supported.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key differences */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Key differences between CV Prime and Rezi</h2>
          <p className="mt-3 text-slate-500">
            While both tools offer AI-powered resume building and ATS scoring, they diverge significantly on pricing, India support, and included features.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'India-first pricing',
                body: 'CV Prime is priced for India at ₹249/month with UPI support. Rezi charges ~$29/month in USD — nearly 10× the cost for Indian users after conversion fees.',
              },
              {
                title: 'Cover letter included',
                body: 'CV Prime includes the cover letter generator on every plan — including free. Rezi treats the cover letter as a paid add-on, meaning you pay separately for a feature that should come standard.',
              },
              {
                title: 'Job tracker built in',
                body: 'CV Prime includes a job application tracker so you can manage applications, interview stages, and follow-ups in one place. Rezi has no equivalent feature.',
              },
              {
                title: 'India-specific guidance',
                body: 'CV Prime has 35 role guides for Indian job seekers — covering IT, BFSI, e-commerce, campus recruitment, and more, with India ATS tips for Naukri and LinkedIn India. Rezi content is US-focused throughout.',
              },
              {
                title: 'ATS scoring with section analysis',
                body: 'Both tools score your CV against a job description. CV Prime additionally breaks down keyword gaps by CV section (summary, experience, skills), making it easier to know exactly what to fix and where.',
              },
              {
                title: 'Free plan generosity',
                body: 'CV Prime gives 3 watermark-free PDF exports and full access to AI features on the free plan — no card required. Rezi\'s free tier restricts AI usage heavily and requires payment for clean PDF downloads.',
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="font-display font-bold text-slate-900">{card.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-500">
            According to our <Link href="/statistics" className="text-cyan-700 underline hover:text-cyan-900">resume statistics</Link>, Indian job seekers applying to ATS-filtered roles see a 40–60% improvement in callback rates when CVs are tailored per job description — the core workflow both tools target.
          </p>
        </div>
      </section>

      {/* When to choose each */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">When to choose CV Prime vs Rezi</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
              <p className="font-display font-bold text-slate-900">Choose CV Prime if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'Are applying to jobs in India and want India-specific CV guidance',
                  'Want ATS scoring with a numeric score and section-level keyword gap analysis',
                  'Need to pay in INR via UPI, cards, or net banking',
                  'Want a cover letter generator included without paying extra',
                  'Need a built-in job tracker to manage your applications',
                  'Are a fresher or early-career professional targeting Indian companies',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-display font-bold text-slate-900">Rezi might suit you if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'Are primarily applying to US companies and are comfortable with USD pricing',
                  'Have an international credit card and find Rezi\'s US-focused content relevant',
                  'Prefer Rezi\'s specific template aesthetic or content style',
                  'Do not need a job tracker or India-specific CV guidance',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Minus className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong"
            >
              Try CV Prime free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ai-cv-builder"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 hover:border-cyan-300 hover:text-cyan-700"
            >
              Learn about the AI CV builder
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">CV Prime vs Rezi — frequently asked questions</h2>
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

      {/* Other comparisons */}
      <section className="border-t border-slate-100 px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-xl font-bold">Other CV builder comparisons</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { href: '/cv-prime-vs-zety', title: 'CV Prime vs Zety', sub: 'Compare ATS scoring and India pricing' },
              { href: '/cv-prime-vs-teal', title: 'CV Prime vs Teal', sub: 'Compare job tracking and India compatibility' },
              { href: '/cv-prime-vs-enhancv', title: 'CV Prime vs Enhancv', sub: 'Compare AI features and free tiers' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-cyan-300 hover:shadow-sm"
              >
                <p className="font-display font-bold text-slate-900 group-hover:text-cyan-700">{link.title} →</p>
                <p className="mt-1 text-sm text-slate-500">{link.sub}</p>
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
            Free plan includes 3 PDF exports, ATS scoring, AI bullet rewrites, cover letter generator, job tracker, and all 8 templates. No commitment.
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
              headline: 'CV Prime vs Rezi — Which AI Resume Builder is Better? (2026)',
              description:
                'CV Prime vs Rezi: detailed comparison of ATS scoring, AI tailoring, pricing, templates, and India support.',
              url: 'https://cv-prime.in/cv-prime-vs-rezi',
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
                { '@type': 'ListItem', position: 3, name: 'CV Prime vs Rezi', item: 'https://cv-prime.in/cv-prime-vs-rezi' },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
