import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Prime vs Google Docs for Resume — AI Builder vs Word Processor | CV Prime',
  description:
    'CV Prime vs Google Docs for resume building. Google Docs requires manual formatting; CV Prime adds AI tailoring, ATS scoring, and keyword optimisation. See which is right for your job search.',
  keywords: [
    'cv prime vs google docs',
    'google docs resume builder',
    'google docs resume ats',
    'resume builder vs google docs',
    'best resume builder google docs alternative india',
    'google docs resume india',
  ],
  alternates: { canonical: 'https://cv-prime.in/cv-prime-vs-google-docs' },
  openGraph: {
    title: 'CV Prime vs Google Docs for Resume — AI Builder vs Word Processor',
    description:
      'Detailed feature-by-feature comparison of CV Prime and Google Docs for resume building. AI tailoring, ATS scoring, and keyword optimisation vs manual formatting.',
    url: 'https://cv-prime.in/cv-prime-vs-google-docs',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime vs Google Docs Comparison' }],
  },
};

const features = [
  {
    feature: 'AI keyword tailoring per JD',
    cvPrime: 'yes',
    googleDocs: 'no',
    note: 'CV Prime rewrites your bullets to include exact keywords from your target JD. Google Docs requires all tailoring to be done manually.',
  },
  {
    feature: 'ATS scoring (0–100)',
    cvPrime: 'yes',
    googleDocs: 'no',
    note: "CV Prime gives you a 0–100 ATS match score against each job description. Google Docs has no ATS analysis.",
  },
  {
    feature: 'ATS-safe formatting',
    cvPrime: 'yes',
    googleDocs: 'limited',
    note: "CV Prime guarantees ATS-safe templates. Google Docs can be ATS-safe if you use a simple single-column template — but some Google Docs resume templates use tables that fail ATS.",
  },
  {
    feature: 'Speed — CV ready in minutes',
    cvPrime: 'yes',
    googleDocs: 'no',
    note: 'CV Prime uses AI to build and tailor your resume in minutes. Google Docs requires hours of manual formatting and content work.',
  },
  {
    feature: 'Keyword gap analysis',
    cvPrime: 'yes',
    googleDocs: 'no',
    note: "CV Prime identifies missing keywords from the JD and flags them. Google Docs has no job description analysis capability.",
  },
  {
    feature: 'India pricing',
    cvPrime: 'yes',
    googleDocs: 'yes',
    note: 'CV Prime is free + ₹999 one-time Pro. Google Docs is free with any Google account.',
  },
  {
    feature: 'Cover letter AI generator',
    cvPrime: 'yes',
    googleDocs: 'no',
    note: 'CV Prime generates tailored cover letters using AI. Google Docs requires manual writing from scratch.',
  },
  {
    feature: 'Job tracker',
    cvPrime: 'yes',
    googleDocs: 'no',
    note: 'CV Prime includes a built-in job application tracker. Google Docs has no job tracking feature.',
  },
  {
    feature: 'Multiple CV version management',
    cvPrime: 'yes',
    googleDocs: 'limited',
    note: "CV Prime manages multiple tailored CV versions in a structured workspace. Google Docs stores multiple files but has no resume-specific version management.",
  },
  {
    feature: 'Fully free to use',
    cvPrime: 'limited',
    googleDocs: 'yes',
    note: 'Google Docs is completely free with a Google account. CV Prime has a free plan with 3 exports; unlimited exports require Pro (₹999 one-time).',
  },
  {
    feature: 'Complete editing control',
    cvPrime: 'limited',
    googleDocs: 'yes',
    note: "Google Docs lets you edit every pixel of your document. CV Prime works within template constraints to ensure ATS safety.",
  },
  {
    feature: 'Real-time collaboration',
    cvPrime: 'no',
    googleDocs: 'yes',
    note: 'Google Docs supports real-time sharing and collaborative editing. CV Prime is a single-user resume builder.',
  },
];

const faqs = [
  {
    q: 'Is Google Docs good for making a resume?',
    a: "Google Docs can produce a good resume if you use a simple, single-column template and avoid tables and columns. However, it has no ATS scoring, no keyword analysis, and no AI tailoring — so you won't know if your resume will pass the ATS filter for a specific role. You're essentially formatting blind: no signal on whether your resume matches the job description or will be parsed correctly.",
  },
  {
    q: 'Are Google Docs resume templates ATS-friendly?',
    a: "Some are, some aren't. Google Docs resume templates that use tables or multi-column layouts can fail ATS parsing — the parser reads across columns and produces garbled output. CV Prime's templates are specifically designed and tested for ATS compatibility: no tables, no text boxes, no graphics, and single-column layouts that every major ATS can parse correctly.",
  },
  {
    q: 'Which is better for a job application — Google Docs or an AI resume builder?',
    a: 'For basic resume creation, Google Docs works. But for tailoring your resume to each specific job description and checking your ATS match, an AI resume builder like CV Prime is significantly more effective. Studies show resumes tailored to the job description get 2–4x more callbacks. CV Prime automates this tailoring and scores your match before you apply — something Google Docs cannot do.',
  },
  {
    q: 'Can I convert my Google Docs resume to CV Prime?',
    a: 'Yes. CV Prime accepts PDF and DOCX uploads. Download your existing Google Docs resume as a .docx or PDF, upload it to CV Prime, and the platform will parse it, let you edit all sections, and apply AI tailoring to any job description you target. You keep your existing content but gain ATS scoring and keyword optimisation on top.',
  },
];

export default function CvPrimeVsGoogleDocsPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">CV Prime vs Google Docs</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV Prime vs Google Docs for resume — AI builder vs word processor
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Google Docs is a capable word processor. But it has no ATS scoring, no keyword analysis, and no AI tailoring. Here&apos;s a feature-by-feature comparison to help you decide which tool is right for your job search.
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
                  <p className="text-sm text-slate-600">Best for AI-powered, ATS-optimised applications</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ATS scoring against every job description</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> AI rewrites bullets to match each JD</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Guaranteed ATS-safe templates</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Cover letter AI and job tracker</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Free tier — 3 exports, no card required</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-display text-sm font-bold text-slate-700">G</div>
                <div>
                  <p className="font-display text-lg font-bold text-slate-900">Google Docs</p>
                  <p className="text-sm text-slate-600">Word processor — manual everything</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Completely free</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Full editing control</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Real-time collaboration</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No ATS scoring or keyword analysis</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No AI tailoring — all manual</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Feature comparison — CV Prime vs Google Docs</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 text-left font-semibold text-slate-600">Feature</th>
                  <th className="p-4 text-center font-semibold text-cyan-700">CV Prime</th>
                  <th className="p-4 text-center font-semibold text-slate-600">Google Docs</th>
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
                      ) : row.cvPrime === 'limited' ? (
                        <Minus className="mx-auto h-5 w-5 text-amber-500" />
                      ) : (
                        <span className="inline-block rounded-full bg-cyan-50 px-2 py-0.5 text-xs font-bold text-cyan-700">{row.cvPrime}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.googleDocs === 'yes' ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-slate-400" />
                      ) : row.googleDocs === 'no' ? (
                        <XCircle className="mx-auto h-5 w-5 text-red-400" />
                      ) : row.googleDocs === 'limited' ? (
                        <Minus className="mx-auto h-5 w-5 text-amber-500" />
                      ) : (
                        <span className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600">{row.googleDocs}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What Google Docs can't do */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">What Google Docs can&apos;t do for your job search</h2>
          <p className="mt-3 text-slate-500">
            Google Docs is a great word processor. But a resume is not just a document — it&apos;s an application instrument. Here&apos;s what you give up by using Google Docs alone.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
              <p className="font-display text-lg font-bold text-slate-900">Gaps when using Google Docs</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'No way to know if your resume matches the job description keywords',
                  'No ATS score — you apply blind and hope for the best',
                  'Manual tailoring per application takes 30–60 minutes each',
                  'Some Google Docs templates use tables that fail ATS parsing',
                  'No cover letter generation — start from scratch every time',
                  'No tracking of where you applied or what version you sent',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
              <p className="font-display text-lg font-bold text-slate-900">What CV Prime adds</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'ATS score per application — know your match before you apply',
                  'Keyword gap analysis — see exactly which JD terms you\'re missing',
                  'AI bullet rewrites targeting specific JD keywords in seconds',
                  'Guaranteed ATS-safe templates tested across major ATS platforms',
                  'Cover letter generator — tailored to each JD automatically',
                  'Built-in job tracker — all your applications in one place',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When to choose each */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">When to choose CV Prime vs Google Docs</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
              <p className="font-display font-bold text-slate-900">Choose CV Prime if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'Are actively job hunting and want to tailor your resume to each role',
                  'Want to know your ATS match score before submitting applications',
                  'Are applying to companies that screen resumes with ATS software',
                  'Need AI help rewriting bullets to match job description keywords',
                  'Are managing multiple applications and need version control',
                  'Want a cover letter generated alongside each tailored resume',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-display font-bold text-slate-900">Google Docs might suit you if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'Have zero budget and need a completely free option',
                  'Are building a first-draft resume and plan to optimise later',
                  'Are sharing your resume with collaborators who need to edit it',
                  'Are applying to a small number of roles that don\'t use ATS',
                  'Prefer full manual control over every aspect of your document',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Minus className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="font-display font-bold text-slate-900">Our verdict</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Google Docs is fine for a basic resume if you know how to format it correctly and don&apos;t need ATS optimisation. CV Prime is the better choice if you want AI to help you tailor your resume to each job and score your ATS match before applying. For most active job seekers in India, the combination of ATS scoring and AI tailoring in CV Prime gives a meaningful edge over manual Google Docs formatting.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">CV Prime vs Google Docs — frequently asked questions</h2>
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
            Free plan includes 3 PDF exports, ATS scoring, AI bullet rewrites, and all 8 ATS-safe templates. Upload your existing Google Docs resume and start tailoring in minutes.
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
              headline: 'CV Prime vs Google Docs for Resume — AI Builder vs Word Processor (2026)',
              description:
                'Feature-by-feature comparison of CV Prime and Google Docs for resume building. AI tailoring, ATS scoring, and keyword optimisation vs manual formatting.',
              url: 'https://cv-prime.in/cv-prime-vs-google-docs',
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
                { '@type': 'ListItem', position: 3, name: 'CV Prime vs Google Docs', item: 'https://cv-prime.in/cv-prime-vs-google-docs' },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
