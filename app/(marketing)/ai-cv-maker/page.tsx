import Link from 'next/link';
import { StickyCTA } from '@/components/marketing/StickyCTA';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Sparkles, ScanSearch, FileEdit, DownloadCloud } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI CV Maker — Build an ATS-Ready CV in Minutes | CV Prime',
  description:
    'CV Prime is the AI CV maker built for job seekers in India. Paste a job description, let AI write and score your CV, choose a template, and export a clean PDF — free to start.',
  alternates: {
    canonical: 'https://cv-prime.in/ai-cv-maker',
  },
  keywords: [
    'ai cv maker',
    'ai cv maker free',
    'ai cv maker online',
    'best ai cv maker',
    'ai cv generator',
    'cv maker with ai',
    'ai powered cv maker india',
    'make cv with ai',
  ],
  openGraph: {
    title: 'AI CV Maker — CV Prime',
    description:
      'The AI CV maker that writes, scores, and formats your CV against any job description. Free to start, ATS-ready templates included.',
    url: 'https://cv-prime.in/ai-cv-maker',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI CV Maker — CV Prime' }],
  },
};

const whatIs = {
  term: 'AI CV maker',
  definition:
    'An AI CV maker is a tool that uses artificial intelligence to generate, score, and refine a CV automatically — matching it against a target job description, correcting weak or vague bullet points, and formatting it for both human recruiters and Applicant Tracking System (ATS) software. CV Prime is an AI CV maker built specifically for the Indian job market.',
};

const steps = [
  {
    num: '01',
    title: 'Paste the job description',
    body: 'The AI CV maker reads the JD and extracts the exact skills, tools, and phrasing the employer is screening for.',
    icon: ScanSearch,
  },
  {
    num: '02',
    title: 'Upload or write your CV',
    body: 'Upload an existing PDF/DOCX or start blank — the AI fills in a first draft using your real experience.',
    icon: FileEdit,
  },
  {
    num: '03',
    title: 'AI writes and scores it',
    body: 'Bullets are rewritten with strong action verbs and quantified outcomes; you get a live 0–100 ATS match score.',
    icon: Sparkles,
  },
  {
    num: '04',
    title: 'Export a clean PDF',
    body: 'Pick from 8 ATS-safe templates and download a recruiter-ready PDF in seconds — no watermark on Pro.',
    icon: DownloadCloud,
  },
];

const comparisonRows = [
  { feature: 'Writes CV content with AI (not just formatting)', cvPrime: true, others: false },
  { feature: 'Scores your CV against a specific job description', cvPrime: true, others: false },
  { feature: 'India-first pricing (₹999 one-time, no subscription)', cvPrime: true, others: false },
  { feature: 'ATS-safe templates only (no tables/columns that break parsers)', cvPrime: true, others: true },
  { feature: 'Free PDF export without forcing an upgrade first', cvPrime: true, others: false },
];

const faqs = [
  {
    q: 'What is an AI CV maker?',
    a: 'An AI CV maker uses artificial intelligence to write, tailor, and score your CV automatically. Instead of just offering a blank template, it reads a job description, fills in relevant keywords, rewrites weak bullet points into outcome-led statements, and tells you how well your CV matches the role before you apply.',
  },
  {
    q: 'Is CV Prime a free AI CV maker?',
    a: 'Yes. You can build a full CV, run unlimited ATS score checks, and download up to 3 PDFs for free — no credit card required. Pro is a one-time ₹999 payment for unlimited exports and unlimited AI tailoring, with no recurring subscription.',
  },
  {
    q: 'How is an AI CV maker different from a normal CV builder?',
    a: 'A normal CV builder only helps with layout — you still write every line yourself. An AI CV maker like CV Prime also generates and improves the content: it rewrites duties-based bullets into quantified achievements, matches your skills section to a specific job description, and gives you a numeric ATS score so you know if your CV will actually pass the screening software.',
  },
  {
    q: 'Will an AI-made CV pass ATS screening?',
    a: 'CV Prime\'s templates use clean, single- or simple two-column HTML with standard section headings — no tables, text boxes, or graphics that trip up ATS parsers. Combined with AI keyword matching against your target job description, this is designed specifically to maximise ATS pass-through rates.',
  },
  {
    q: 'Does the AI CV maker make up facts about my experience?',
    a: 'No. CV Prime\'s AI only rewrites and reorganises information you provide — your uploaded CV text or the details you enter. It never invents job titles, dates, employers, or achievements.',
  },
  {
    q: 'Can I use an AI CV maker for freshers with no work experience?',
    a: 'Yes. For freshers, the AI leads with education, projects, and internships instead of work experience, and highlights coursework and technical skills relevant to the target role — see the dedicated fresher resume guide for the exact section order.',
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

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'AI CV Maker — CV Prime',
  description:
    'CV Prime is an AI CV maker: it writes, scores, and formats your CV against any job description, then exports an ATS-ready PDF.',
  url: 'https://cv-prime.in/ai-cv-maker',
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'CV Prime AI CV Maker',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
      { '@type': 'ListItem', position: 2, name: 'AI CV Maker', item: 'https://cv-prime.in/ai-cv-maker' },
    ],
  },
};

const defineSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: whatIs.term,
  description: whatIs.definition,
  inDefinedTermSet: 'https://cv-prime.in/glossary',
};

export default function AiCvMakerPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(defineSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">AI CV maker</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The AI CV maker that writes, scores, and formats your CV
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Paste a job description. CV Prime&apos;s AI generates tailored, quantified bullet points, scores your ATS match 0–100, and formats everything into a recruiter-ready PDF — built for the Indian job market.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Make my CV with AI
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              See templates
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">No credit card required · 3 free PDF downloads</p>
        </div>
      </section>

      {/* Definition block — GEO-optimised for AI citation */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="font-display text-2xl font-bold">What is an AI CV maker?</h2>
          <p className="mt-4 leading-7 text-slate-300">{whatIs.definition}</p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">How the AI CV maker works</h2>
            <p className="mt-4 text-slate-400">Four steps from job description to finished PDF</p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                  <span className="font-display text-5xl font-bold text-slate-100">{step.num}</span>
                  <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison table — GEO structured answer */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
            AI CV maker vs a template-only CV builder
          </h2>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="px-5 py-4 font-bold text-slate-200">Capability</th>
                  <th className="px-5 py-4 font-bold text-cyan-300">CV Prime (AI CV maker)</th>
                  <th className="px-5 py-4 font-bold text-slate-400">Template-only builders</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-white/5 last:border-0">
                    <td className="px-5 py-4 text-slate-300">{row.feature}</td>
                    <td className="px-5 py-4">
                      {row.cvPrime ? (
                        <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                      ) : (
                        <span className="text-slate-500">—</span>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      {row.others ? (
                        <CheckCircle2 className="h-5 w-5 text-slate-400" />
                      ) : (
                        <span className="text-slate-500">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-sm text-slate-500">
            Prefer to tailor an existing CV to one specific job?{' '}
            <Link href="/ai-cv-builder" className="text-cyan-300 underline underline-offset-4">
              Try the AI CV builder
            </Link>
            . Building from scratch without AI generation?{' '}
            <Link href="/online-cv-maker" className="text-cyan-300 underline underline-offset-4">
              Use the online CV maker
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Frequently asked questions</h2>
          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 p-6">
                <h3 className="font-display text-lg font-bold text-white">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to build your CV with AI?</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Free to start. Paste a job description, let the AI write your CV, and download a clean PDF in minutes.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Start free with AI
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA />
    </main>
  );
}
