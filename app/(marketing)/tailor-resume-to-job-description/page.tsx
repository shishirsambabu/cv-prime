import { AiToolCallout } from '@/components/tools/ai/AiToolCallout';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, ClipboardPaste, Search, Wand2, BarChart3, Download, Target, AlertTriangle } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Tailor Your Resume to a Job Description with AI — Free | CV Prime',
  description:
    'Paste any job description and CV Prime tailors your resume to it automatically — adds the missing keywords, rewrites your bullets to match the role, and scores your fit 0–100. Free to start, built for India.',
  alternates: { canonical: 'https://cv-prime.in/tailor-resume-to-job-description' },
  keywords: [
    'tailor resume to job description',
    'resume tailoring ai',
    'cv optimizer for job description',
    'resume customizer for job',
    'job description resume optimizer',
    'ai cv tailor india',
    'tailor cv to job',
    'customize resume for job application',
    'resume to job match tool',
    'match resume to job description',
  ],
  openGraph: {
    title: 'Tailor Your Resume to a Job Description with AI — Free | CV Prime',
    description:
      'Paste a JD, get a resume tailored to it in minutes — missing keywords added, bullets rewritten, fit scored 0–100. Free to start.',
    url: 'https://cv-prime.in/tailor-resume-to-job-description',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Tailor your resume to a job description — CV Prime' }],
  },
};

const steps = [
  {
    step: '01',
    icon: ClipboardPaste,
    title: 'Paste the exact job description',
    desc: 'Copy the full JD from Naukri, LinkedIn, Indeed, or the company careers page — responsibilities, requirements, and "good to have" sections included. The more complete the JD, the more precise the tailoring.',
  },
  {
    step: '02',
    icon: Search,
    title: 'AI reads the JD and your resume together',
    desc: 'CV Prime parses the JD into a ranked list of required skills, tools, and qualifications, then maps each one against your current resume to find exactly what is present, weak, or missing.',
  },
  {
    step: '03',
    icon: Wand2,
    title: 'Your resume is rewritten to match the role',
    desc: 'Missing keywords are woven into your summary, skills, and experience bullets — naturally, never stuffed. Vague bullets are rewritten with the role-appropriate language and quantified outcomes recruiters expect.',
  },
  {
    step: '04',
    icon: BarChart3,
    title: 'See your tailored fit score 0–100',
    desc: 'Get a before/after score showing keyword coverage, section completeness, and format compliance for this specific JD — so you know the resume is matched before you apply, not after a rejection.',
  },
  {
    step: '05',
    icon: Download,
    title: 'Export a separate, named version',
    desc: 'Download the tailored PDF for this role and save it under the company name. Applying to five roles? Run five tailoring passes and keep five clean versions — you always know which resume went where.',
  },
];

const whyTailor = [
  {
    title: 'A generic resume scores ~55 for most roles',
    body: 'One resume sent to every company matches no company. ATS software ranks you on keyword overlap with that specific JD — and a generic resume rarely clears the 70+ threshold most Indian employers set for human review.',
  },
  {
    title: 'Tailored resumes get ~3× more callbacks',
    body: 'Recruiters and ATS both reward relevance. When your bullets mirror the exact skills and terminology in the JD, you move from "filtered out" to "shortlisted" — without changing a single true fact about your experience.',
  },
  {
    title: 'Manual tailoring takes 3–5 hours per role',
    body: 'Reading the JD, comparing it line by line, rewriting bullets, and re-checking keywords is hours of work most people skip under deadline pressure. CV Prime does the same analysis in under five minutes.',
  },
];

const matchTable = [
  ['Identify the JD\'s required keywords', 'Ranked list in < 30 sec', '30–60 min reading and highlighting'],
  ['Find what your resume is missing', 'Automatic gap report', 'Manual line-by-line comparison'],
  ['Rewrite bullets to match the role', '< 2 minutes', '2–4 hours done properly'],
  ['Score your fit for this JD', 'Instant 0–100 with breakdown', 'Not measurable by hand'],
  ['Keep a version per company', 'Saved automatically', 'Manual file naming and folders'],
];

const faqs = [
  {
    q: 'What does it mean to tailor a resume to a job description?',
    a: 'Tailoring means rewriting and reorganising your resume so it directly matches one specific job description — using the same skills, tools, and terminology the JD asks for, and leading with the experience most relevant to that role. A tailored resume scores higher in the employer\'s ATS (Applicant Tracking System) and reads as a stronger fit to the human recruiter, because every line is relevant to the job they are hiring for.',
  },
  {
    q: 'How do I tailor my resume to a job description quickly?',
    a: 'Paste the full job description into CV Prime, upload your existing resume (PDF or DOCX), and the AI does the comparison automatically: it extracts the JD\'s required keywords, finds the ones missing from your resume, adds them into the right sections, rewrites weak bullets to match the role, and gives you a 0–100 fit score. The whole process takes under five minutes instead of the 3–5 hours manual tailoring requires.',
  },
  {
    q: 'Will tailoring my resume add skills or experience I don\'t have?',
    a: 'No. CV Prime is explicitly instructed never to fabricate experience, companies, dates, or qualifications. It only reframes and strengthens what is already in your resume — surfacing relevant skills you under-stated, rewriting vague bullets, and matching your real experience to the JD\'s language. If a JD requires a skill you genuinely do not have, CV Prime flags the gap rather than inventing it.',
  },
  {
    q: 'Should I really tailor my resume for every single application?',
    a: 'For roles you care about, yes. The single biggest reason qualified candidates get auto-rejected is a generic resume that does not match the JD\'s keywords. Tailoring is the highest-leverage thing you can do per application. Because CV Prime saves each tailored version, you build a library of role-specific resumes over time and re-tailoring for similar roles becomes near-instant.',
  },
  {
    q: 'Does keyword tailoring count as keyword stuffing?',
    a: 'No — and that distinction matters. Keyword stuffing is dumping a list of unrelated terms to trick the ATS, which modern systems detect and penalise. CV Prime weaves the JD\'s keywords into real, readable bullets that describe your actual work. The result passes ATS keyword matching and still reads naturally to the recruiter who opens it.',
  },
  {
    q: 'Is tailoring my resume to a JD free on CV Prime?',
    a: 'Yes. You can paste a JD, tailor your resume, see your fit score, and export it on the free plan, which includes 3 PDF exports and full ATS scoring at no cost. Lifetime Pro (₹999 one-time, no subscription) unlocks unlimited tailoring sessions and unlimited exports — useful when you are applying to many roles.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to tailor your resume to a job description',
  description: 'Tailor any resume to a specific job description with AI in five steps.',
  step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.desc })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Tailor Resume to Job Description', item: 'https://cv-prime.in/tailor-resume-to-job-description' },
  ],
};

export default function TailorResumePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <Target className="h-4 w-4" />
            One resume per job — automatically
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Tailor your resume to any job description in minutes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Paste the job description. CV Prime&apos;s AI rewrites your resume to match that exact role — adds the missing keywords, sharpens your bullets, and scores your fit 0–100 — so you stop sending the same generic resume to every company.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Tailor my resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ats-score-checker" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Check my ATS score first
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free · 3 PDF exports · Fit scoring included · No credit card</p>
        </div>
      </section>
      <AiToolCallout href="/tools/ai-resume-tailor" label="Tailor your resume to the job with AI" blurb="Get a tailored summary, outcome-led bullets, and the exact keywords to weave in — without fabricating anything." />

      {/* Stats */}
      <section className="border-b border-white/10 bg-white/[0.03] px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '3×', label: 'more callbacks from a tailored vs generic resume' },
            { stat: '< 5 min', label: 'to tailor, score, and export per job description' },
            { stat: '0', label: 'facts invented — AI only reframes what you already have' },
            { stat: '0–100', label: 'fit score for this specific JD, with full breakdown' },
          ].map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-brand">{item.stat}</p>
              <p className="mt-1 max-w-[170px] text-xs leading-5 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why tailor */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Why a generic resume gets filtered out</h2>
            <p className="mt-4 text-slate-400">The ATS does not score how good you are — it scores how well your resume matches this JD</p>
          </div>
          <div className="mt-12 space-y-5">
            {whyTailor.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-300">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">How CV Prime tailors your resume to a JD</h2>
            <p className="mt-4 text-slate-400">Five steps from a job description to a role-matched, scored, exportable resume</p>
          </div>
          <div className="mt-14 space-y-5">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground font-display text-lg font-bold">
                    {s.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-brand" />
                      <h3 className="font-display text-xl font-bold text-white">{s.title}</h3>
                    </div>
                    <p className="mt-2 leading-7 text-slate-300">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold">Tailoring with CV Prime vs doing it by hand</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-3 text-left font-semibold text-slate-300">Task</th>
                  <th className="pb-3 text-center font-bold text-brand">CV Prime</th>
                  <th className="pb-3 text-center text-slate-400">Manual tailoring</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {matchTable.map(([task, ai, manual]) => (
                  <tr key={task}>
                    <td className="py-3 font-medium text-slate-300">{task}</td>
                    <td className="py-3 text-center font-semibold text-brand">{ai}</td>
                    <td className="py-3 text-center text-slate-400">{manual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Tailoring your resume — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white/[0.04] p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-white">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-white/10 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-white">Related tools & guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/ats-score-checker', label: 'Free ATS score checker' },
              { href: '/resume-job-match-score', label: 'Resume job match score' },
              { href: '/ai-resume-rewriter', label: 'AI resume rewriter' },
              { href: '/ai-resume-builder', label: 'AI resume builder' },
              { href: '/resume-optimizer', label: 'Resume optimizer' },
              { href: '/resume-checker', label: 'Free resume checker' },
              { href: '/resume-tips/ats-keywords', label: 'ATS keywords guide' },
              { href: '/resume-tips/resume-bullet-points', label: 'How to write resume bullet points' },
              { href: '/cover-letter-generator', label: 'AI cover letter generator' },
              { href: '/resume-examples', label: 'Resume examples by role' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-brand hover:text-brand">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Stop applying with one generic resume</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Paste the JD. Get a resume tailored, scored, and exported in five minutes. 3 free PDF exports. No credit card.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Tailor my resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Tailor my resume free" message="Paste a JD — AI tailors your resume to it in 5 minutes" />
    </main>
  );
}
