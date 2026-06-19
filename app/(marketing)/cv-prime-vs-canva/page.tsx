import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Prime vs Canva Resume Builder — Which is Better for India? | CV Prime',
  description:
    'CV Prime vs Canva resume builder comparison for India 2026. Canva creates beautiful designs but has no ATS scoring. CV Prime scores your ATS match, tailors to the JD, and passes ATS filters.',
  keywords: [
    'cv prime vs canva',
    'canva resume builder vs cv prime',
    'canva resume ats',
    'canva resume template india',
    'canva vs resume builder',
    'canva resume not ats friendly',
    'best resume builder india vs canva',
    'canva alternative india',
    'canva resume problems',
    'canva resume ats compatible',
  ],
  alternates: { canonical: 'https://cv-prime.in/cv-prime-vs-canva' },
  openGraph: {
    title: 'CV Prime vs Canva Resume Builder — Which is Better for India?',
    description:
      'Canva makes beautiful resumes. CV Prime makes resumes that pass ATS and get interviews. Full comparison for Indian job seekers.',
    url: 'https://cv-prime.in/cv-prime-vs-canva',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime vs Canva Comparison' }],
  },
};

const features = [
  { feature: 'ATS scoring (0–100 match score)', cvPrime: 'yes', canva: 'no', note: 'CV Prime scores your resume against each specific job description. Canva has no ATS analysis.' },
  { feature: 'AI keyword tailoring per job description', cvPrime: 'yes', canva: 'no', note: 'CV Prime rewrites your bullets to include JD-specific keywords. Canva has no AI resume functionality.' },
  { feature: 'ATS-safe templates (no tables, text boxes)', cvPrime: 'yes', canva: 'no', note: 'Many Canva resume templates use graphics, columns, and text boxes that ATS systems cannot parse.' },
  { feature: 'Cover letter generator', cvPrime: 'yes', canva: 'no', note: 'CV Prime generates tailored cover letters. Canva has no cover letter AI.' },
  { feature: 'Free PDF export (no watermark)', cvPrime: 'yes', canva: 'limited', note: 'CV Prime gives 3 clean free exports. Canva free exports include Canva branding; Pro required for clean PDF.' },
  { feature: 'INR pricing (India)', cvPrime: 'yes', canva: 'no', note: 'CV Prime is ₹249/month. Canva Pro is ~₹4,000/year (USD billing).' },
  { feature: 'India-specific resume guides', cvPrime: 'yes', canva: 'no', note: 'CV Prime has 36 India-specific role guides. Canva has no resume content.' },
  { feature: 'Job tracker', cvPrime: 'yes', canva: 'no', note: 'CV Prime has a built-in job application tracker. Canva does not.' },
  { feature: 'Design flexibility', cvPrime: 'limited', canva: 'yes', note: 'Canva has far more design options. CV Prime prioritises ATS safety over design customisation.' },
  { feature: 'Template library size', cvPrime: '8', canva: '1000+', note: 'Canva has a vastly larger template library; however, most resume templates are not ATS-compatible.' },
  { feature: 'CV upload and parse', cvPrime: 'yes', canva: 'no', note: 'CV Prime imports your existing PDF/DOCX resume and lets you edit it.' },
];

const faqs = [
  {
    q: 'Are Canva resume templates ATS-compatible?',
    a: 'Most are not. Canva\'s most popular resume templates use multi-column layouts, text boxes, icons, tables, and graphic elements that ATS systems (Applicant Tracking Systems) cannot parse correctly. When ATS software encounters these elements, it either skips them or misreads the content — resulting in keyword mismatches and automatic rejection. Research by Jobscan and Resume Worded consistently shows that graphically complex resumes score lower in ATS parsing tests. If you use a Canva resume, choose only their simplest, single-column templates — and still test it with an ATS checker before submitting.',
  },
  {
    q: 'Why do Canva resumes get rejected?',
    a: 'Canva resumes get rejected by ATS systems primarily because of formatting. Text boxes, columns, headers, and graphic elements in Canva templates are not readable by most ATS software. The system either reads your resume as blank or in the wrong order — making your qualifications invisible to the parser. This is why candidates with excellent credentials who use Canva resumes sometimes never hear back: their CV never reached a human reader.',
  },
  {
    q: 'Is CV Prime better than Canva for Indian job seekers?',
    a: 'Yes, for job applications. CV Prime is built specifically for getting interviews: ATS-safe templates, keyword scoring against the job description, AI-powered bullet rewriting, and a cover letter generator. Canva is a design tool — excellent for creating visual content, but not optimised for job applications that must pass ATS screening. For Indian job seekers targeting companies using Naukri, LinkedIn, or ATS systems, CV Prime is the better choice.',
  },
  {
    q: 'Can I use Canva for resume design and then check ATS with CV Prime?',
    a: 'Technically yes — you could export your Canva resume as a PDF and upload it to CV Prime\'s ATS checker. However, if the template uses tables, columns, or text boxes, the ATS score will likely be poor and the fix suggestions will be limited because the content is improperly structured. The more effective approach is to start with an ATS-safe template in CV Prime and use the AI tailoring to match the job description.',
  },
  {
    q: 'Is Canva Pro worth it for resumes in India?',
    a: 'No, if your goal is to get more interviews. Canva Pro (~₹4,000/year) removes the watermark and gives you more design options, but it does not add ATS scoring, keyword analysis, AI tailoring, or any resume-specific functionality. CV Prime Pro (₹249/month) adds all of these features and is purpose-built for job applications. For resumes specifically, CV Prime delivers far more interview-generating functionality per rupee.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'CV Prime vs Canva Resume Builder — Which is Better for India? (2026)',
  description: 'Detailed comparison of CV Prime and Canva resume builder for Indian job seekers, covering ATS compatibility, AI features, pricing, and interview performance.',
  url: 'https://cv-prime.in/cv-prime-vs-canva',
  author: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
  publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
  dateModified: new Date().toISOString().split('T')[0],
};

export default function CvPrimeVsCanvaPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, articleSchema]) }}
      />

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">CV Prime vs Canva</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV Prime vs Canva resume builder — which gets more interviews?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Canva creates beautiful resumes. CV Prime creates resumes that pass ATS filters and reach human recruiters. For Indian job seekers in 2026, here&apos;s what that difference means.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800 px-5 py-2 text-sm text-slate-300">
            Last updated: June 2026
          </div>
        </div>
      </section>

      {/* Key insight callout */}
      <section className="border-b border-slate-100 bg-amber-50 px-5 py-10">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-amber-200 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">The ATS problem with Canva</p>
            <p className="mt-3 text-lg font-medium leading-8 text-slate-900">
              75% of Canva resume templates use multi-column layouts, icons, or text boxes — formatting that most ATS systems cannot parse. A recruiter never sees your qualifications if the software reads your resume as blank.
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Canva is an excellent design tool. For applications to companies that use ATS screening (90%+ of Indian companies with 50+ employees), it is not the right tool for your resume.
            </p>
          </div>
        </div>
      </section>

      {/* Verdict cards */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border-2 border-cyan-400 bg-cyan-50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-brand-foreground">CP</div>
                <div>
                  <p className="font-display text-lg font-bold text-slate-900">CV Prime</p>
                  <p className="text-sm text-slate-600">Built for getting interviews</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ATS scoring against any job description</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> AI keyword tailoring per JD</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ATS-safe templates (no tables/graphics)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Cover letter generator</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> INR pricing (₹249/month)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> 3 free clean PDF exports</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-display text-sm font-bold text-slate-700">C</div>
                <div>
                  <p className="font-display text-lg font-bold text-slate-900">Canva</p>
                  <p className="text-sm text-slate-600">Design-first tool, not resume-first</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> 1000+ design templates</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> High visual customisation</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No ATS scoring or keyword analysis</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No AI resume tailoring</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> Most templates not ATS-safe</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> USD pricing (~₹4,000/year for Pro)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature table */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Feature comparison — CV Prime vs Canva</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-white">
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
                      {row.cvPrime === 'yes' ? <CheckCircle2 className="mx-auto h-5 w-5 text-cyan-600" /> :
                       row.cvPrime === 'no' ? <XCircle className="mx-auto h-5 w-5 text-red-400" /> :
                       <span className="inline-block rounded-full bg-cyan-50 px-2 py-0.5 text-xs font-bold text-cyan-700">{row.cvPrime}</span>}
                    </td>
                    <td className="p-4 text-center">
                      {row.canva === 'yes' ? <CheckCircle2 className="mx-auto h-5 w-5 text-slate-400" /> :
                       row.canva === 'no' ? <XCircle className="mx-auto h-5 w-5 text-red-400" /> :
                       row.canva === 'limited' ? <Minus className="mx-auto h-5 w-5 text-amber-500" /> :
                       <span className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600">{row.canva}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Pricing comparison for India</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border-2 border-cyan-200 bg-white p-6">
              <p className="font-display text-lg font-bold">CV Prime pricing</p>
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
              <p className="font-display text-lg font-bold">Canva pricing (approx. in INR)</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-700">Free plan</p>
                  <p className="text-sm text-amber-600">Canva branding on export</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-slate-700">Canva Pro (annual)</p>
                  <p className="font-display font-bold text-slate-600">~₹3,999/year</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-amber-50 p-3 text-xs text-amber-800">
                Canva Pro does not add ATS or resume-specific features. It only removes branding and adds more design options.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to choose */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">When to choose CV Prime vs Canva</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
              <p className="font-display font-bold text-slate-900">Choose CV Prime if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'Are applying to jobs on Naukri, LinkedIn, or company portals',
                  'Want to know if your resume will pass ATS screening',
                  'Need to tailor your resume to a specific job description',
                  'Are a fresher or experienced professional in a competitive market',
                  'Want an ATS-safe template that recruiters can actually read',
                  'Want INR pricing with UPI and Indian payment support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-display font-bold text-slate-900">Canva is better if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'Need a visually designed portfolio-style document (not a job application)',
                  'Are applying to creative roles where design is the work (graphic designer, illustrator)',
                  'Need to print a resume for an in-person event where ATS is not involved',
                  'Already use Canva for other work and just need a quick formatted document',
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
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">CV Prime vs Canva — frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-6">
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
            Try CV Prime free — ATS-safe templates included
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Free plan: 3 PDF exports, ATS scoring, AI tailoring, all 8 templates. No credit card. Built for India.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Build your resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-sm text-slate-400">Or <Link href="/ats-checker" className="underline hover:text-white">check your Canva resume for ATS issues →</Link></p>
        </div>
      </section>
    </main>
  );
}
