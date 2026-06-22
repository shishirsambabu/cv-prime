import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Prime vs Canva for Resume — ATS-Friendly Builder vs Design Tool | CV Prime',
  description:
    "CV Prime vs Canva for resume building: CV Prime offers ATS scoring, keyword optimisation, and ATS-safe templates. Canva makes beautiful resumes that ATS systems often can't read. Compare features, pricing, and results.",
  keywords: [
    'cv prime vs canva',
    'canva resume ats',
    'canva resume builder vs cv prime',
    'is canva good for resume india',
    'canva resume ats friendly',
    'canva vs resume builder india',
  ],
  alternates: { canonical: 'https://cv-prime.in/cv-prime-vs-canva' },
  openGraph: {
    title: 'CV Prime vs Canva for Resume — ATS-Friendly Builder vs Design Tool',
    description:
      "Detailed feature-by-feature comparison of CV Prime and Canva for resume building. See why Canva resumes often fail ATS and what to use instead.",
    url: 'https://cv-prime.in/cv-prime-vs-canva',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime vs Canva Comparison' }],
  },
};

const features = [
  {
    feature: 'ATS compatibility',
    cvPrime: 'yes',
    canva: 'no',
    note: 'All CV Prime templates are ATS-safe. Most Canva resumes fail ATS — tables, columns, and graphics break parsers.',
  },
  {
    feature: 'ATS scoring (0–100)',
    cvPrime: 'yes',
    canva: 'no',
    note: 'CV Prime gives you a numerical ATS match score against each job description. Canva has no ATS checking feature.',
  },
  {
    feature: 'AI keyword tailoring per JD',
    cvPrime: 'yes',
    canva: 'no',
    note: 'CV Prime rewrites your bullets to include the exact keywords from your target job description. Canva has no AI resume features.',
  },
  {
    feature: 'INR pricing (India)',
    cvPrime: 'yes',
    canva: 'no',
    note: 'CV Prime is ₹249/month in INR. Canva Pro is priced in USD — conversion fees and higher costs apply for Indian users.',
  },
  {
    feature: 'Free PDF export (no watermark)',
    cvPrime: 'yes',
    canva: 'no',
    note: "CV Prime's free plan includes 3 clean PDF exports. Canva's free plan adds watermarks to PDF downloads.",
  },
  {
    feature: 'Cover letter AI generator',
    cvPrime: 'yes',
    canva: 'no',
    note: 'CV Prime generates tailored cover letters using AI. Canva is a design tool with no cover letter generation.',
  },
  {
    feature: 'Job tracker',
    cvPrime: 'yes',
    canva: 'no',
    note: 'CV Prime includes a built-in job application tracker. Canva has no job tracking functionality.',
  },
  {
    feature: 'Keyword gap analysis',
    cvPrime: 'yes',
    canva: 'no',
    note: "CV Prime identifies missing keywords from the JD and suggests additions. Canva doesn't analyse job descriptions.",
  },
  {
    feature: 'Design flexibility',
    cvPrime: 'no',
    canva: 'yes',
    note: 'Canva has hundreds of resume templates with full design customisation. CV Prime has 8 professional, ATS-optimised templates.',
  },
  {
    feature: 'Visual creativity',
    cvPrime: 'no',
    canva: 'yes',
    note: 'Canva is a leading design tool and excels at visually creative resumes — ideal for portfolios and creative roles.',
  },
  {
    feature: 'CV upload & parse',
    cvPrime: 'yes',
    canva: 'no',
    note: 'CV Prime accepts PDF and DOCX uploads and parses your existing CV. Canva does not import existing resume data.',
  },
  {
    feature: 'India-specific CV guides',
    cvPrime: 'yes',
    canva: 'no',
    note: 'CV Prime has India-specific guides for IT, BFSI, ops, and fresher roles. Canva provides no job market guidance.',
  },
];

const faqs = [
  {
    q: 'Does Canva resume pass ATS?',
    a: "Most Canva resumes don't pass ATS because they use columns, text boxes, and graphic elements that ATS parsers cannot read. Studies show 38% of visually designed resumes — like those made in Canva — fail ATS parsing entirely. If you're applying to companies that use ATS screening (90%+ of large Indian corporates), a Canva resume puts you at a significant disadvantage before a human ever sees your application.",
  },
  {
    q: 'Is Canva good for resumes in India?',
    a: 'For creative and design roles where visual presentation matters — graphic designer, UI/UX, media — Canva can work well. For tech, business, finance, and most corporate roles in India where ATS screening is standard, CV Prime\'s ATS-safe templates are a much better choice. Companies like TCS, Infosys, Wipro, Amazon India, and most MNCs use ATS to screen resumes before any human review.',
  },
  {
    q: 'Can I use Canva for a free resume?',
    a: "Canva's free plan allows you to create a resume but adds watermarks to PDF exports. CV Prime's free plan includes 3 clean PDF downloads without watermarks — plus ATS scoring and AI bullet rewrites, which Canva doesn't offer at any price point.",
  },
  {
    q: 'Which is better for job applications in India — Canva or CV Prime?',
    a: "CV Prime is better for Indian job applications because it's optimised for ATS systems used by TCS, Infosys, Amazon India, and other major employers. It provides ATS scoring, keyword gap analysis, and INR pricing. Canva is a design tool, not a resume optimisation tool — it has no way to tell you whether your resume will pass the ATS for a specific role.",
  },
];

export default function CvPrimeVsCanvaPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">CV Prime vs Canva</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV Prime vs Canva for resume — ATS-friendly builder vs design tool
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Canva makes beautiful resumes. The problem? Most ATS systems can&apos;t read them. Here&apos;s a feature-by-feature comparison of CV Prime and Canva for Indian job seekers — covering ATS compatibility, AI features, pricing, and real-world results.
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
                  <p className="text-sm text-slate-600">Best for ATS-screened job applications</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> 100% ATS-safe templates</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ATS scoring against every JD</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> AI tailoring and keyword optimisation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> INR pricing (₹249/month)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Free tier — 3 clean PDFs, no watermark</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-display text-sm font-bold text-slate-700">C</div>
                <div>
                  <p className="font-display text-lg font-bold text-slate-900">Canva</p>
                  <p className="text-sm text-slate-600">Design tool — not a resume optimiser</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Hundreds of creative templates</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Excellent visual design flexibility</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> Most resumes fail ATS parsing</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No ATS scoring or keyword analysis</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> PDF watermarked on free plan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Feature comparison — CV Prime vs Canva</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 text-left font-semibold text-slate-600">Feature</th>
                  <th className="p-4 text-center font-semibold text-cyan-700">CV Prime</th>
                  <th className="p-4 text-center font-semibold text-slate-600">Canva</th>
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
                      {row.canva === 'yes' ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-slate-400" />
                      ) : row.canva === 'no' ? (
                        <XCircle className="mx-auto h-5 w-5 text-red-400" />
                      ) : row.canva === 'limited' ? (
                        <Minus className="mx-auto h-5 w-5 text-amber-500" />
                      ) : (
                        <span className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600">{row.canva}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ATS problem section */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Why Canva resumes fail ATS</h2>
          <p className="mt-3 text-slate-500">
            Canva is a powerful design tool — but ATS software isn&apos;t looking for beautiful design. It&apos;s parsing plain text.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
              <p className="font-display text-lg font-bold text-slate-900">What Canva resumes typically include</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'Multi-column layouts that ATS reads out of order',
                  'Text boxes that ATS parsers skip entirely',
                  'Tables used for layout — columns get merged or lost',
                  'Graphic icons replacing standard section headers',
                  'Custom fonts that may not extract correctly to text',
                  'Visual elements (shapes, bars) that add noise to parsed output',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
              <p className="font-display text-lg font-bold text-slate-900">What CV Prime templates guarantee</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'Single-column, linear layout — parsed correctly every time',
                  'No text boxes — all content in standard document flow',
                  'No layout tables — section data is clean and structured',
                  'Standard section headers ATS recognises (Experience, Education, Skills)',
                  'Clean fonts that extract perfectly to plain text',
                  'No decorative graphics that confuse parsers',
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">When to choose CV Prime vs Canva</h2>
          <p className="mt-3 text-slate-500">
            The right choice depends on the role you&apos;re applying for and whether ATS screening is in the hiring funnel.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
              <p className="font-display font-bold text-slate-900">Choose CV Prime if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'Are applying to tech, business, finance, or operations roles in India',
                  'Are targeting companies that use ATS (TCS, Infosys, Amazon, banks, MNCs)',
                  'Want to know your ATS score before submitting each application',
                  'Need AI to tailor your resume bullets to specific job descriptions',
                  'Want INR pricing and Indian payment methods (UPI, net banking)',
                  'Are a fresher applying through campus drives or Naukri.com',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-display font-bold text-slate-900">Canva might suit you if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'Are a graphic designer, UI/UX professional, or creative where visual portfolio matters',
                  'Are applying to a role where the resume is shared as a PDF link (not uploaded to ATS)',
                  'Need a visually distinctive resume for a small creative agency or startup that reviews CVs manually',
                  'Already have ATS screening handled and just need a polished design for follow-up',
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
              Use CV Prime if you&apos;re applying to companies that use ATS — which includes 90%+ of large Indian employers. Use Canva only for creative and design roles where visual portfolio presentation matters more than ATS pass rate. When in doubt, choose ATS safety first: a beautiful resume that gets filtered out never reaches a human.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">CV Prime vs Canva — frequently asked questions</h2>
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
              headline: 'CV Prime vs Canva for Resume — ATS-Friendly Builder vs Design Tool (2026)',
              description:
                "Feature-by-feature comparison of CV Prime and Canva for resume building. Why most Canva resumes fail ATS and what Indian job seekers should use instead.",
              url: 'https://cv-prime.in/cv-prime-vs-canva',
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
                { '@type': 'ListItem', position: 3, name: 'CV Prime vs Canva', item: 'https://cv-prime.in/cv-prime-vs-canva' },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
