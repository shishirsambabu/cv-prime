import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Prime vs FlowCV — Which Free Resume Builder is Better for India? | CV Prime',
  description:
    'CV Prime vs FlowCV: ATS scoring, AI tailoring, templates, pricing, and India support compared. FlowCV is a clean free builder — but does it score your resume against the JD? Full 2026 comparison.',
  keywords: [
    'cv prime vs flowcv',
    'flowcv alternative india',
    'flowcv vs cv prime',
    'flowcv review india',
    'free resume builder india flowcv',
    'flowcv ats',
    'best free resume builder india',
  ],
  alternates: { canonical: 'https://cv-prime.in/cv-prime-vs-flowcv' },
  openGraph: {
    title: 'CV Prime vs FlowCV — Which Free Resume Builder is Better for India?',
    description:
      'ATS scoring, AI tailoring, templates, pricing, and India support compared. FlowCV is a clean free builder — but does it score against the JD?',
    url: 'https://cv-prime.in/cv-prime-vs-flowcv',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime vs FlowCV comparison' }],
  },
};

const features = [
  { feature: 'ATS score against a specific JD', cvPrime: 'yes', rival: 'no', note: 'CV Prime scores your resume 0–100 against the job description with keyword gaps; FlowCV is a builder and does not score your resume against a JD.' },
  { feature: 'AI tailoring & bullet rewriting', cvPrime: 'yes', rival: 'limited', note: 'CV Prime rewrites bullets and injects JD keywords automatically; FlowCV offers some AI text help but no full JD-based tailoring with re-scoring.' },
  { feature: 'Clean PDF, no watermark', cvPrime: 'yes', rival: 'yes', note: 'Both export clean, watermark-free PDFs — a genuine FlowCV strength. CV Prime gives 3 free, then unlimited on one-time Pro.' },
  { feature: 'ATS-safe templates', cvPrime: 'yes', rival: 'limited', note: 'CV Prime templates are all single-column and parser-safe; some FlowCV layouts use columns/sidebars that can affect ATS parsing.' },
  { feature: 'Cover letter generator', cvPrime: 'yes', rival: 'limited', note: 'CV Prime generates a JD-tailored AI cover letter; FlowCV provides cover letter formatting but not full AI generation against a JD.' },
  { feature: 'Job application tracker', cvPrime: 'yes', rival: 'no', note: 'CV Prime includes a job tracker; FlowCV is focused on document building.' },
  { feature: 'India-specific guidance', cvPrime: 'yes', rival: 'no', note: 'CV Prime is calibrated for Indian ATS, recruiters, salaries, and conventions; FlowCV is a global, US-oriented tool.' },
  { feature: 'INR pricing / India payments', cvPrime: 'yes', rival: 'no', note: 'CV Prime is ₹999 one-time with UPI; FlowCV prices its Pro in USD with no Indian payment methods.' },
  { feature: 'Pricing model', cvPrime: '₹999 one-time', rival: 'free + USD sub', note: 'FlowCV is genuinely free for core building with a recurring USD Pro; CV Prime is free to start with a one-time ₹999 Pro — no subscription.' },
];

const faqs = [
  {
    q: 'Is CV Prime or FlowCV better for Indian job seekers?',
    a: 'For Indian job seekers focused on getting past the ATS, CV Prime is the stronger choice. FlowCV is a genuinely good, clean free resume builder with no watermark — its design and ease are real strengths. But FlowCV does not score your resume against a specific job description, does not do full JD-based AI tailoring, and is not calibrated for Indian ATS systems or pricing. CV Prime adds a 0–100 ATS score, AI tailoring and rewriting, India-specific guidance, a cover letter generator, and a job tracker, with one-time ₹999 pricing and UPI.',
  },
  {
    q: 'Is FlowCV really free?',
    a: 'Yes — FlowCV offers a genuinely free tier for building and downloading a clean, watermark-free resume, which is one of its biggest strengths. It also has a paid Pro tier (priced in USD) for additional features. CV Prime is similarly free to start (build, AI rewrites, ATS scoring, 3 clean PDF exports, no card) and uses a one-time ₹999 Lifetime Pro instead of a recurring subscription for unlimited exports and premium templates.',
  },
  {
    q: 'Does FlowCV check my resume against the job description?',
    a: 'No. FlowCV is a resume builder — it helps you create and format a clean resume, but it does not analyse your resume against a specific job description or give you an ATS match score. That means you can build a great-looking FlowCV resume and still not know whether it contains the keywords the employer\'s ATS is screening for. CV Prime\'s core feature is exactly that: paste the JD, get a 0–100 score and the missing keywords, then fix them with AI.',
  },
  {
    q: 'Are FlowCV templates ATS-friendly?',
    a: 'FlowCV\'s templates are cleaner and more parser-friendly than typical graphic builders, but some layouts use columns or sidebars that can still cause ATS reading-order issues depending on the system. The safest approach for heavily screened roles is a strict single-column layout — which is what all CV Prime templates use by default. With CV Prime you can also confirm parse-safety by checking your ATS score before applying.',
  },
  {
    q: 'Can I move my FlowCV resume to CV Prime?',
    a: 'Yes. Export your FlowCV resume as a PDF and upload it to CV Prime — it parses your experience, skills, and education automatically. You can then run an ATS score against a target job description, let AI tailor and strengthen the content, switch to an ATS-safe template, and export a clean PDF. You keep FlowCV\'s clean content and add CV Prime\'s ATS scoring and tailoring on top.',
  },
];

const otherComparisons = [
  { href: '/cv-prime-vs-canva', title: 'CV Prime vs Canva', sub: 'Design tool vs ATS-safe builder' },
  { href: '/cv-prime-vs-resume-io', title: 'CV Prime vs Resume.io', sub: 'Polished builder vs ATS + AI' },
  { href: '/cv-prime-vs-overleaf', title: 'CV Prime vs Overleaf', sub: 'LaTeX résumés vs ATS-safe builder' },
];

export default function CvPrimeVsFlowCVPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">CV Prime vs FlowCV</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV Prime vs FlowCV — which free resume builder is better for India in 2026?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            FlowCV is a clean, genuinely free builder. CV Prime adds the part that wins interviews: ATS scoring against the job description, AI tailoring, and India-specific guidance. Here&apos;s the honest comparison.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800 px-5 py-2 text-sm text-slate-300">
            Last updated: June 2026 — based on publicly available feature information
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="border-b border-white/10 px-5 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border-2 border-cyan-400 bg-cyan-500/10 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-brand-foreground">CP</div>
                <div>
                  <p className="font-display text-lg font-bold text-white">CV Prime</p>
                  <p className="text-sm text-slate-300">ATS scoring + AI tailoring builder for India</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> 0–100 ATS score against any job description</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> AI tailoring + bullet rewriting to the JD</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Single-column, parser-safe templates</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Cover letter generator + job tracker</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ₹999 one-time, UPI, India-calibrated</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-display text-sm font-bold text-slate-300">FC</div>
                <div>
                  <p className="font-display text-lg font-bold text-white">FlowCV</p>
                  <p className="text-sm text-slate-300">Clean, free global resume builder</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Genuinely free, clean, no-watermark PDFs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Easy, modern editor and templates</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No ATS score against a specific JD</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No full JD-based AI tailoring</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> USD pricing, not India-specific</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Feature comparison — CV Prime vs FlowCV</h2>
          <p className="mt-3 text-slate-400">
            How the two compare on ATS scoring, AI, templates, and India support. See our{' '}
            <Link href="/ats-score-checker" className="text-cyan-300 underline hover:text-cyan-200">ATS score checker</Link> and{' '}
            <Link href="/free-resume-builder" className="text-cyan-300 underline hover:text-cyan-200">free resume builder</Link>.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="p-4 text-left font-semibold text-slate-300">Feature</th>
                  <th className="p-4 text-center font-semibold text-cyan-300">CV Prime</th>
                  <th className="p-4 text-center font-semibold text-slate-300">FlowCV</th>
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
                      {row.rival === 'yes' ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-slate-400" />
                      ) : row.rival === 'no' ? (
                        <XCircle className="mx-auto h-5 w-5 text-red-400" />
                      ) : row.rival === 'limited' ? (
                        <Minus className="mx-auto h-5 w-5 text-amber-500" />
                      ) : (
                        <span className="inline-block rounded-full bg-white/[0.05] px-2 py-0.5 text-xs font-bold text-slate-300">{row.rival}</span>
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
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">When to choose CV Prime vs FlowCV</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-6">
              <p className="font-display font-bold text-white">Choose CV Prime if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {[
                  'Want to score your resume against each job description (0–100)',
                  'Want AI to tailor and rewrite bullets to the JD, then re-score',
                  'Are applying in India and want India-specific ATS guidance',
                  'Want a cover letter generator and job tracker included',
                  'Prefer one-time ₹999 with UPI over a USD subscription',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="font-display font-bold text-white">FlowCV might suit you if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {[
                  'Just want a clean, free, no-watermark resume quickly',
                  'Do not need ATS scoring against a specific job description',
                  'Are applying globally rather than to Indian-specific ATS',
                  'Are happy to add keyword matching manually yourself',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2"><Minus className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong">
              Try CV Prime free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ats-score-checker" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-bold text-slate-300 hover:border-cyan-300 hover:text-cyan-300">
              Check your ATS score
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">CV Prime vs FlowCV — frequently asked questions</h2>
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
            {otherComparisons.map((link) => (
              <Link key={link.href} href={link.href} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300 hover:shadow-sm">
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Free and clean — plus an ATS score</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Build a clean resume, then actually score it against the job and fix the gaps with AI. Free to start, ₹999 one-time for unlimited.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong">
            Try CV Prime free <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-sm text-slate-400">Or <Link href="/pricing" className="underline hover:text-white">view pricing</Link> — Pro ₹999 one-time</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'CV Prime vs FlowCV — Which Free Resume Builder is Better for India? (2026)',
              description: 'CV Prime vs FlowCV: ATS scoring, AI tailoring, templates, pricing, and India support compared.',
              url: 'https://cv-prime.in/cv-prime-vs-flowcv',
              author: { '@type': 'Organization', name: 'CV Prime' },
              publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
              dateModified: new Date().toISOString().split('T')[0],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://cv-prime.in/resume-tools' },
                { '@type': 'ListItem', position: 3, name: 'CV Prime vs FlowCV', item: 'https://cv-prime.in/cv-prime-vs-flowcv' },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
