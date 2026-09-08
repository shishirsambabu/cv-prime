import Link from 'next/link';
import { StickyCTA } from '@/components/marketing/StickyCTA';
import type { Metadata } from 'next';
import { ArrowRight, Sparkles, FileCheck2, Target, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI CV Maker — Build & Tailor a CV with AI in Minutes | CV Prime',
  description:
    'CV Prime is an AI CV maker that writes, scores, and formats your CV for you. Paste a job description, upload your CV, and get a tailored, ATS-ready PDF in minutes. Free to start.',
  alternates: {
    canonical: 'https://cv-prime.in/ai-cv-maker',
  },
  keywords: [
    'ai cv maker',
    'ai cv maker free',
    'ai cv maker online',
    'best ai cv maker',
    'cv maker with ai',
    'ai cv generator',
    'make cv with ai',
    'ai powered cv maker',
  ],
  openGraph: {
    title: 'AI CV Maker — CV Prime',
    description:
      'The AI CV maker that writes, scores, and formats your CV. Paste a job description and get a tailored, ATS-ready PDF in minutes.',
    url: 'https://cv-prime.in/ai-cv-maker',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI CV Maker — CV Prime' }],
  },
};

const workflow = [
  {
    step: '01',
    title: 'Paste the job description',
    body: 'Drop in the JD you are applying to. The AI CV maker reads it and extracts the exact keywords and skills the employer is screening for.',
    icon: Target,
  },
  {
    step: '02',
    title: 'Upload or write your CV',
    body: 'Upload an existing CV (PDF or DOCX) or start from scratch. The AI maps your real experience onto the role — it never invents facts.',
    icon: FileCheck2,
  },
  {
    step: '03',
    title: 'AI writes and scores it',
    body: 'The AI CV maker rewrites weak bullets into quantified, outcome-led lines, fills keyword gaps, and gives you a live 0–100 ATS score.',
    icon: Sparkles,
  },
  {
    step: '04',
    title: 'Pick a template, export',
    body: 'Choose from 8 ATS-safe templates and download a clean, recruiter-ready PDF. No watermark on your first 3 exports.',
    icon: Download,
  },
];

const comparison = [
  { feature: 'AI writes CV content from a job description', cvprime: true, kickresume: false, rezi: true },
  { feature: 'Live 0–100 ATS score per job description', cvprime: true, kickresume: false, rezi: true },
  { feature: 'India (INR) pricing, one-time not subscription', cvprime: true, kickresume: false, rezi: false },
  { feature: 'AI bullet rewriter with 3 alternatives', cvprime: true, kickresume: false, rezi: false },
  { feature: 'Free PDF export without watermark', cvprime: true, kickresume: false, rezi: false },
  { feature: 'Built-in job application tracker', cvprime: true, kickresume: false, rezi: false },
];

const faqs = [
  {
    q: 'What is an AI CV maker?',
    a: 'An AI CV maker is a tool that uses artificial intelligence to write and improve your CV automatically — rewriting bullet points, matching keywords from a job description, and scoring how well your CV will pass automated screening (ATS). CV Prime is an AI CV maker built specifically for the Indian job market.',
  },
  {
    q: 'How is an AI CV maker different from a normal CV builder?',
    a: 'A normal CV builder only helps you format and lay out a CV. An AI CV maker like CV Prime also writes and improves the content: it reads a job description, rewrites your experience bullets to match it, fills missing keywords, and scores your CV against that specific role — not just a generic template.',
  },
  {
    q: 'Is CV Prime’s AI CV maker free?',
    a: 'Yes. You can build a CV, run ATS scoring, and use AI bullet rewriting for free. The first 3 PDF downloads are free with no watermark; unlimited downloads and AI tailoring need a one-time ₹999 Pro plan — no subscription.',
  },
  {
    q: 'Will the AI make up experience I don’t have?',
    a: 'No. The AI CV maker only rewrites and reorganises the information you provide — your uploaded CV or the details you enter. It does not invent jobs, degrees, skills, or achievements.',
  },
  {
    q: 'Can the AI CV maker tailor one CV for multiple jobs?',
    a: 'Yes. You can duplicate a CV in your dashboard and run the AI tailoring step again with a new job description each time, producing a version scored and rewritten for that specific role.',
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

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'AI CV Maker — CV Prime',
  description:
    'AI CV maker that writes, scores, and formats a CV from a job description and existing CV, with ATS scoring and ATS-safe templates.',
  url: 'https://cv-prime.in/ai-cv-maker',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
      { '@type': 'ListItem', position: 2, name: 'AI CV Maker', item: 'https://cv-prime.in/ai-cv-maker' },
    ],
  },
};

export default function AICVMakerPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-5 py-20 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <Sparkles className="h-4 w-4" />
            AI CV maker
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The AI CV maker that writes, scores, and formats your CV
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Paste a job description and upload your CV. CV Prime&apos;s AI rewrites your bullets, closes keyword gaps, gives you a live ATS score, and exports a recruiter-ready PDF — free to start.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/ai-cv"
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

      {/* Workflow */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">How the AI CV maker works</h2>
            <p className="mt-4 text-slate-400">From job description to PDF in four steps</p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                  <span className="font-display text-5xl font-bold text-slate-100">{item.step}</span>
                  <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Definition block — GEO/AI citation target */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">What is an AI CV maker?</h2>
          <p className="mt-5 leading-8 text-slate-300">
            An <strong>AI CV maker</strong> is a tool that uses artificial intelligence to write and improve the content
            of a CV, not just its layout. Instead of leaving you to fill in a template, it reads a job description,
            identifies the keywords and skills an employer is screening for, rewrites your experience into quantified,
            outcome-led bullets, and scores how well the result will pass an Applicant Tracking System (ATS) before you
            apply. CV Prime combines this AI writing step with 8 ATS-safe templates and instant PDF export, built for
            the Indian job market with INR pricing.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">CV Prime vs other AI CV makers</h2>
          <p className="mt-4 text-center text-slate-400">What actually writes and scores your CV — not just formats it</p>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.04]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-left font-semibold text-slate-300">Feature</th>
                  <th className="p-4 text-center font-bold text-cyan-300">CV Prime</th>
                  <th className="p-4 text-center font-semibold text-slate-400">Kickresume</th>
                  <th className="p-4 text-center font-semibold text-slate-400">Rezi</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                    <td className="p-4 text-slate-300">{row.feature}</td>
                    <td className="p-4 text-center text-lg">{row.cvprime ? '✅' : '❌'}</td>
                    <td className="p-4 text-center text-lg">{row.kickresume ? '✅' : '❌'}</td>
                    <td className="p-4 text-center text-lg">{row.rezi ? '✅' : '❌'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-sm text-slate-500">
            See the full breakdown in our <Link href="/cv-prime-vs-rezi" className="text-cyan-300 hover:underline">CV Prime vs Rezi</Link> and{' '}
            <Link href="/cv-prime-vs-kickresume" className="text-cyan-300 hover:underline">CV Prime vs Kickresume</Link> comparisons.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">AI CV maker — common questions</h2>
          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 p-6">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related pages — internal linking */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold">Related tools and guides</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link href="/ai-cv-builder" className="rounded-xl border border-white/10 p-4 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200">
              AI CV builder — JD tailoring in depth →
            </Link>
            <Link href="/online-cv-maker" className="rounded-xl border border-white/10 p-4 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200">
              Online CV maker — build without AI tailoring →
            </Link>
            <Link href="/ats-score-checker" className="rounded-xl border border-white/10 p-4 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200">
              Free ATS score checker →
            </Link>
            <Link href="/tailor-resume-to-job-description" className="rounded-xl border border-white/10 p-4 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200">
              Tailor your resume to a job description →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Let AI make your next CV</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Paste a job description, upload your CV, and get a tailored, ATS-ready PDF in minutes. Free to start.
          </p>
          <Link
            href="/signup?next=/ai-cv"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Try the AI CV maker free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA />
    </main>
  );
}
