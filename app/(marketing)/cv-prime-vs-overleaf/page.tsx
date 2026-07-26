import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Prime vs Overleaf (LaTeX Resume) — Which is Better for India? | CV Prime',
  description:
    'CV Prime vs Overleaf LaTeX résumés: ATS compatibility, ease of editing, AI tailoring, and India support compared. See why a LaTeX resume can fail the ATS — and when each tool is the right choice in 2026.',
  keywords: [
    'cv prime vs overleaf',
    'overleaf resume alternative',
    'latex resume vs',
    'overleaf resume ats',
    'is a latex resume ats friendly',
    'latex resume ats india',
    'overleaf alternative india',
    'latex resume vs resume builder',
  ],
  alternates: { canonical: 'https://cv-prime.in/cv-prime-vs-overleaf' },
  openGraph: {
    title: 'CV Prime vs Overleaf (LaTeX Resume) — Which is Better for India?',
    description:
      'ATS compatibility, ease of editing, AI tailoring, and India support compared. Why a LaTeX resume can fail the ATS — and when each tool fits.',
    url: 'https://cv-prime.in/cv-prime-vs-overleaf',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime vs Overleaf comparison' }],
  },
};

const features = [
  { feature: 'ATS score against a specific JD', cvPrime: 'yes', rival: 'no', note: 'CV Prime gives a 0–100 ATS score with keyword gaps for each job description; Overleaf is a LaTeX editor with no ATS analysis at all.' },
  { feature: 'ATS-safe layout by default', cvPrime: 'yes', rival: 'limited', note: 'CV Prime templates are single-column and parser-safe. Many popular LaTeX resume templates (deedy, two-column styles) are read out of order by ATS parsers.' },
  { feature: 'AI tailoring & bullet rewriting', cvPrime: 'yes', rival: 'no', note: 'CV Prime rewrites bullets and injects JD keywords automatically; Overleaf has no AI — you write and edit all content by hand in LaTeX.' },
  { feature: 'No code / learning curve', cvPrime: 'yes', rival: 'no', note: 'CV Prime is a visual editor anyone can use. Overleaf requires learning LaTeX syntax to edit anything beyond filling a template.' },
  { feature: 'Text-based, selectable PDF', cvPrime: 'yes', rival: 'yes', note: 'Both export real text PDFs (not images). The ATS risk with LaTeX is layout/column order, not text extraction.' },
  { feature: 'Cover letter generator', cvPrime: 'yes', rival: 'no', note: 'CV Prime generates a tailored AI cover letter; Overleaf offers LaTeX letter templates but no generation.' },
  { feature: 'Job application tracker', cvPrime: 'yes', rival: 'no', note: 'CV Prime includes a job tracker; Overleaf is a document editor only.' },
  { feature: 'India-specific guidance', cvPrime: 'yes', rival: 'no', note: 'CV Prime is calibrated for Indian ATS, recruiters, and conventions; Overleaf is a general academic/technical editor.' },
  { feature: 'Pricing', cvPrime: '₹999 one-time', rival: 'free / paid', note: 'Overleaf has a usable free tier and paid plans (~$9–21/mo) for collaboration; CV Prime is free to start with a one-time ₹999 Pro — no subscription.' },
];

const faqs = [
  {
    q: 'Is a LaTeX (Overleaf) resume ATS-friendly?',
    a: 'It can be, but many popular LaTeX resume templates are not. LaTeX itself produces a clean, text-based PDF, so text extraction is fine. The problem is layout: the most popular LaTeX resume templates on Overleaf (such as deedy-resume and other two-column styles) place content in side-by-side columns, which most ATS parsers read in the wrong order — scrambling your experience and skills. If you use a strictly single-column LaTeX template and standard section headings, it can pass; but you get no ATS score to confirm it. CV Prime uses single-column, parser-safe templates and gives you a 0–100 ATS score against the specific job description so you know it passes before applying.',
  },
  {
    q: 'Should I use Overleaf or CV Prime for my resume?',
    a: 'Use Overleaf if you already know LaTeX, want pixel-level typographic control, and are writing an academic CV where formatting precision matters more than ATS keyword matching. Use CV Prime if you are applying to ATS-screened corporate or tech roles (especially in India) and want ATS scoring, AI tailoring to each job description, parser-safe templates, and no code to learn. For most job seekers chasing interviews rather than typesetting, CV Prime gets you there faster and with less ATS risk.',
  },
  {
    q: 'Why do engineering freshers in India use Overleaf for resumes?',
    a: 'LaTeX resume templates look polished and are popular in engineering and academic circles, and Overleaf makes LaTeX accessible in the browser for free. The catch is that many of these templates are two-column and visually dense, which can hurt ATS parsing for the corporate and product-company roles freshers actually apply to. A common, costly mistake is a beautiful LaTeX resume that the ATS reads incorrectly. CV Prime gives freshers an equally clean look that is guaranteed single-column and ATS-readable, plus AI help to turn projects into quantified bullets.',
  },
  {
    q: 'Is CV Prime free like Overleaf?',
    a: 'Both are free to start. Overleaf\'s free tier is enough to write one resume document, with paid plans for collaboration and extra features. CV Prime\'s free plan includes building, AI bullet rewrites, ATS scoring, and 3 clean PDF exports with no credit card. CV Prime\'s only paid option is a one-time ₹999 Lifetime Pro for unlimited exports and premium templates — there is no subscription on either side for basic resume use.',
  },
  {
    q: 'Can I move my LaTeX/Overleaf resume into CV Prime?',
    a: 'Yes. Export your Overleaf resume as a PDF and upload it to CV Prime — it parses your content automatically, so you do not have to retype anything. From there you can switch to an ATS-safe template, run an ATS score against a job description, let AI tailor the content, and export a clean PDF. This is the fastest way to keep your content but remove the ATS risk of a two-column LaTeX layout.',
  },
];

const otherComparisons = [
  { href: '/cv-prime-vs-canva', title: 'CV Prime vs Canva', sub: 'Design tool vs ATS-safe builder' },
  { href: '/cv-prime-vs-google-docs', title: 'CV Prime vs Google Docs', sub: 'Manual formatting vs AI + ATS scoring' },
  { href: '/cv-prime-vs-flowcv', title: 'CV Prime vs FlowCV', sub: 'Free builder vs ATS scoring + AI' },
];

export default function CvPrimeVsOverleafPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">CV Prime vs Overleaf</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV Prime vs Overleaf — which is better for an ATS resume in 2026?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Overleaf gives you beautiful LaTeX typography; CV Prime gives you ATS scoring, AI tailoring, and parser-safe templates. We compare them on what actually wins interviews — especially in India.
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
                  <p className="text-sm text-slate-300">ATS-safe resume builder + optimiser for India</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> 0–100 ATS score against any job description</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Single-column, parser-safe templates by default</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> AI tailoring and bullet rewriting — no code</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Cover letter generator and job tracker included</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ₹999 one-time, India-calibrated guidance</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-display text-sm font-bold text-slate-300">OL</div>
                <div>
                  <p className="font-display text-lg font-bold text-white">Overleaf (LaTeX)</p>
                  <p className="text-sm text-slate-300">Online LaTeX editor for documents and CVs</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Excellent typographic control (its core strength)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Great for academic CVs and papers</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> Many popular templates are two-column — ATS risk</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No ATS scoring, no AI tailoring</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> Requires learning LaTeX to edit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Feature comparison — CV Prime vs Overleaf</h2>
          <p className="mt-3 text-slate-400">
            How a dedicated ATS resume builder compares with LaTeX résumés on Overleaf. See our{' '}
            <Link href="/ats-score-checker" className="text-cyan-300 underline hover:text-cyan-200">ATS score checker</Link> and{' '}
            <Link href="/ats-resume-template" className="text-cyan-300 underline hover:text-cyan-200">ATS templates</Link> for detail.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="p-4 text-left font-semibold text-slate-300">Feature</th>
                  <th className="p-4 text-center font-semibold text-cyan-300">CV Prime</th>
                  <th className="p-4 text-center font-semibold text-slate-300">Overleaf</th>
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">When to choose CV Prime vs Overleaf</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-6">
              <p className="font-display font-bold text-white">Choose CV Prime if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {[
                  'Are applying to ATS-screened corporate or tech roles in India',
                  'Want a 0–100 ATS score and keyword gaps before you apply',
                  'Want AI to tailor and rewrite your bullets — without LaTeX',
                  'Need a guaranteed single-column, parser-safe layout',
                  'Want a cover letter and job tracker in the same tool',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="font-display font-bold text-white">Overleaf might suit you if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {[
                  'Already know LaTeX and want total typographic control',
                  'Are writing an academic CV, thesis, or research paper',
                  'Prefer a strictly single-column LaTeX template and will self-check ATS',
                  'Value formatting precision over keyword matching and AI help',
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">CV Prime vs Overleaf — frequently asked questions</h2>
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Beautiful and ATS-safe — without LaTeX</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Build a clean, single-column, ATS-scored resume in minutes — no code, no two-column parsing risk. Free to start.
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
              headline: 'CV Prime vs Overleaf — Which is Better for an ATS Resume in India? (2026)',
              description: 'CV Prime vs Overleaf LaTeX résumés: ATS compatibility, editing, AI tailoring, and India support compared.',
              url: 'https://cv-prime.in/cv-prime-vs-overleaf',
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
                { '@type': 'ListItem', position: 2, name: 'CV Prime vs Overleaf', item: 'https://cv-prime.in/cv-prime-vs-overleaf' },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
