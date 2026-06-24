import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, GitCompareArrows, CheckCircle2, User, Briefcase } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Resume Summary vs Objective — Which to Use and When | CV Prime',
  description:
    'Resume summary vs objective: what each is, when to use which, and real examples for freshers and experienced professionals. Plus how to write one that passes the ATS — with AI help, free.',
  alternates: { canonical: 'https://cv-prime.in/resume-summary-vs-objective' },
  keywords: [
    'resume summary vs objective',
    'summary vs objective resume',
    'difference between resume summary and objective',
    'career objective vs summary',
    'should i use a summary or objective',
    'resume objective or summary',
    'professional summary vs career objective',
    'resume summary or objective for freshers',
    'when to use resume objective',
    'resume summary statement vs objective',
  ],
  openGraph: {
    title: 'Resume Summary vs Objective — Which to Use and When | CV Prime',
    description:
      'What each is, when to use which, and real examples for freshers and experienced professionals. Write one free with AI.',
    url: 'https://cv-prime.in/resume-summary-vs-objective',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume summary vs objective — CV Prime' }],
  },
};

const compare = [
  { aspect: 'What it is', summary: 'A 2–3 line snapshot of your experience, skills, and value', objective: 'A 1–2 line statement of the role you want and what you bring' },
  { aspect: 'Best for', summary: 'Experienced professionals (2+ years)', objective: 'Freshers, career changers, big relocations' },
  { aspect: 'Focus', summary: 'What you have achieved and can deliver', objective: 'What you are aiming for and your potential' },
  { aspect: 'Tense / angle', summary: 'Backward-looking proof and impact', objective: 'Forward-looking intent and fit' },
  { aspect: 'Risk', summary: 'Generic if not tailored to the role', objective: 'Reads as junior or self-focused if vague' },
];

const useSummary = [
  'You have 2+ years of relevant experience to summarise',
  'You have quantified achievements that prove your value',
  'You are applying within your established field',
  'You want to lead with credibility, not aspiration',
];
const useObjective = [
  'You are a fresher with little or no work experience',
  'You are switching careers and need to frame the pivot',
  'You are relocating and want to signal intent for a new market',
  'You are targeting a very specific role and want to state it clearly',
];

const examples = [
  { type: 'Summary (experienced)', text: 'Product manager with 6 years in fintech, having shipped payment features used by 4M+ users and grown a key revenue line 38% YoY. Strong in discovery, experimentation, and cross-functional delivery.' },
  { type: 'Objective (fresher)', text: 'Final-year Computer Science student seeking a software engineering role to apply hands-on experience in Java, React, and SQL from 3 academic projects, including a deployed inventory system used by a campus store.' },
  { type: 'Objective (career change)', text: 'Operations professional transitioning into data analytics, bringing 4 years of process-improvement experience and recent certifications in SQL and Power BI, seeking an analyst role where both skill sets add value.' },
];

const faqs = [
  {
    q: 'What is the difference between a resume summary and an objective?',
    a: 'A resume summary is a 2–3 line snapshot of your experience, key skills, and the value you bring — it looks backward at what you have achieved. A resume objective is a 1–2 line statement of the role you want and what you offer — it looks forward at your intent and potential. The summary suits experienced professionals who can lead with proof; the objective suits freshers, career changers, and relocators who need to frame their direction.',
  },
  {
    q: 'Should I use a summary or an objective on my resume?',
    a: 'Use a professional summary if you have around two or more years of relevant experience and quantified achievements to highlight — it leads with credibility, which is what recruiters and ATS reward. Use an objective if you are a fresher, switching careers, or relocating, where stating your target role and transferable strengths makes more sense than summarising thin experience. When in doubt, most experienced candidates are better served by a summary.',
  },
  {
    q: 'Are resume objectives outdated?',
    a: 'Objectives are outdated for experienced professionals, where a summary is stronger — but they are not dead. For freshers, career changers, and relocators, a well-written objective that states the target role and transferable value still works better than an empty or generic summary. The mistake is using a vague, self-focused objective ("seeking a challenging role to grow my skills"); a specific, role-aligned one is genuinely useful.',
  },
  {
    q: 'How long should a resume summary or objective be?',
    a: 'Keep a summary to 2–3 tight lines and an objective to 1–2 lines. Both sit at the top of your resume, right after your contact details, and are often the first thing a recruiter reads in their 6–10 second scan. Lead with your strongest, most relevant point and include the target job title and key keywords from the job description so it also helps your ATS match.',
  },
  {
    q: 'How can I write a strong summary or objective quickly?',
    a: 'Paste the job description into CV Prime and let the AI draft a summary or objective tailored to that role — leading with your strongest credential, including the job title and key keywords, and matching the right style to your experience level. It writes from your real resume content without inventing facts, and you can refine the wording before exporting. It is the fastest way to get a top-of-resume line that reads well and passes the ATS.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Resume Summary vs Objective', item: 'https://cv-prime.in/resume-summary-vs-objective' },
  ],
};

export default function SummaryVsObjectivePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <GitCompareArrows className="h-4 w-4" />
            Summary vs objective — settled
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Resume summary vs objective: which to use and when
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            They sit in the same spot at the top of your resume — but they do different jobs. Here is the clear difference, exactly when to use each, real examples, and how to write one that passes the ATS in seconds.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Write mine with AI free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/resume-tips/resume-summary" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              How to write a summary
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Side by side</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-3 text-left font-semibold text-slate-700"></th>
                  <th className="pb-3 text-left font-bold text-brand">Summary</th>
                  <th className="pb-3 text-left text-slate-600">Objective</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {compare.map((row) => (
                  <tr key={row.aspect} className="align-top">
                    <td className="py-3 pr-3 font-semibold text-slate-800">{row.aspect}</td>
                    <td className="py-3 pr-3 text-slate-600">{row.summary}</td>
                    <td className="py-3 text-slate-600">{row.objective}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to use each */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2 text-brand">
                <Briefcase className="h-5 w-5" />
                <h2 className="font-display text-xl font-bold text-slate-950">Use a summary if…</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {useSummary.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2 text-brand">
                <User className="h-5 w-5" />
                <h2 className="font-display text-xl font-bold text-slate-950">Use an objective if…</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {useObjective.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Real examples</h2>
          <div className="mt-10 space-y-5">
            {examples.map((e) => (
              <div key={e.type} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-brand">{e.type}</p>
                <p className="mt-2 leading-7 text-slate-700">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Summary vs objective — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-slate-950">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-slate-900">Related guides & tools</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/resume-tips/resume-summary', label: 'How to write a resume summary' },
              { href: '/resume-tips/resume-objective', label: 'How to write a resume objective' },
              { href: '/resume-tips/resume-headline', label: 'Resume headline guide' },
              { href: '/resume-tips', label: 'All resume tips' },
              { href: '/ai-resume-rewriter', label: 'AI resume rewriter' },
              { href: '/fresher-resume', label: 'Fresher resume' },
              { href: '/career-change-resume', label: 'Career change resume' },
              { href: '/ats-score-checker', label: 'Free ATS score checker' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Get the top of your resume right</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Let CV Prime draft a tailored summary or objective from your real experience — matched to the role and the ATS. Free to start.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Write mine with AI free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Write my summary with AI" message="Summary or objective — AI drafts the right one for your level, free" />
    </main>
  );
}
