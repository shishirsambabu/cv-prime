import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, KanbanSquare, Columns3, MousePointerClick, Bell, CheckCircle2, ListChecks } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Job Application Tracker India — Organise Every Application | CV Prime',
  description:
    'Track every job application in one place. CV Prime\'s job application tracker moves roles through Saved, Applied, Interview, Offer, and Rejected — with the resume you tailored for each. Free to start, built for India.',
  alternates: { canonical: 'https://cv-prime.in/job-application-tracker' },
  keywords: [
    'job application tracker india',
    'job tracker',
    'job application tracker',
    'track job applications',
    'job search tracker india',
    'application tracking spreadsheet alternative',
    'job hunt organiser',
    'job application manager',
    'free job tracker india',
    'job application status tracker',
  ],
  openGraph: {
    title: 'Job Application Tracker India — Organise Every Application | CV Prime',
    description:
      'Track applications through Saved, Applied, Interview, Offer, Rejected — with the resume you tailored for each. Free to start.',
    url: 'https://cv-prime.in/job-application-tracker',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Job application tracker India — CV Prime' }],
  },
};

const stages = ['Saved', 'Applied', 'Interview', 'Offer', 'Rejected'];

const features = [
  { icon: Columns3, title: 'A clear pipeline view', body: 'See every application as a card in one of five columns — Saved, Applied, Interview, Offer, Rejected — so you always know where each role stands at a glance.' },
  { icon: MousePointerClick, title: 'Drag to update status', body: 'Move a job from Applied to Interview with a drag. No spreadsheet formulas, no copy-paste — your pipeline updates instantly.' },
  { icon: ListChecks, title: 'Tied to your tailored resume', body: 'Because you tailor each resume in CV Prime, your tracker connects each application to the version you actually sent — so you never lose track of which resume went where.' },
  { icon: Bell, title: 'Stay on top of follow-ups', body: 'Keep notes and next steps on each role so promising applications do not slip through the cracks during a busy search.' },
];

const vsSpreadsheet = [
  ['Visual pipeline (drag between stages)', 'Manual rows and status columns'],
  ['Linked to the resume you tailored', 'Separate files, easy to mix up'],
  ['One click from tracker to editor', 'Switch between apps and folders'],
  ['Built for a job search, not generic', 'You build and maintain it yourself'],
];

const faqs = [
  {
    q: 'What is a job application tracker?',
    a: 'A job application tracker is a tool that organises every role you are pursuing so you can see its status at a glance. CV Prime\'s tracker uses a pipeline of five stages — Saved, Applied, Interview, Offer, and Rejected — and lets you drag each job between them as things progress. Because you also build and tailor your resume in CV Prime, the tracker keeps your applications and the resume versions you sent together in one place.',
  },
  {
    q: 'Is the job application tracker free?',
    a: 'Yes. CV Prime\'s job tracker is free to use, with free accounts able to track several jobs at once — enough to organise an active search. Unlimited job tracking unlocks with the one-time ₹999 Lifetime Pro upgrade, alongside unlimited resume exports and premium templates. There is no subscription.',
  },
  {
    q: 'How is this better than tracking jobs in a spreadsheet?',
    a: 'A spreadsheet works, but you have to build and maintain it, and it lives separately from your resumes. CV Prime\'s tracker gives you a visual pipeline you update by dragging cards, and it connects each application to the resume version you tailored for that role — so you are one click from the editor and never confused about which resume you sent. It is purpose-built for a job search rather than a blank grid.',
  },
  {
    q: 'Can I track applications and tailor my resume in the same place?',
    a: 'Yes — that is the point. CV Prime is one workflow: tailor and ATS-score your resume for a specific job description, export it, and track that application through your pipeline. Keeping resume tailoring and application tracking together means you always know which version went to which company and what stage each one is at.',
  },
  {
    q: 'Does the job tracker work for any kind of role in India?',
    a: 'Yes. The tracker is role- and industry-agnostic — you can add any job from any source (Naukri, LinkedIn, Indeed, company sites) and move it through the pipeline. Combined with CV Prime\'s India-calibrated ATS scoring and AI tailoring, it gives you one place to run an organised, effective job search across the Indian market.',
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
    { '@type': 'ListItem', position: 2, name: 'Job Application Tracker', item: 'https://cv-prime.in/job-application-tracker' },
  ],
};

export default function JobApplicationTrackerPage(): JSX.Element {
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
            <KanbanSquare className="h-4 w-4" />
            One place for every application
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            A job application tracker that keeps your search organised
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Stop juggling spreadsheets and browser tabs. Track every role through Saved, Applied, Interview, Offer, and Rejected — with the exact resume you tailored for each one. Built into the same tool you use to build and score your CV.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/job-tracker" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Start tracking free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ai-resume-builder" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Build a resume first
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free · Visual pipeline · No credit card</p>
        </div>
      </section>

      {/* Pipeline visual */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {stages.map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                <span className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700">{s}</span>
                {i < stages.length - 1 ? <ArrowRight className="h-4 w-4 text-slate-300" /> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Run your search like a pipeline</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {features.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-slate-950">{c.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{c.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* vs spreadsheet */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Tracker vs a spreadsheet</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-3 text-left font-bold text-brand">CV Prime tracker</th>
                  <th className="pb-3 text-left text-slate-500">Spreadsheet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {vsSpreadsheet.map(([a, b]) => (
                  <tr key={a} className="align-top">
                    <td className="py-3 pr-4 font-medium text-slate-700">
                      <span className="mr-2 inline-block"><CheckCircle2 className="inline h-4 w-4 text-emerald-600" /></span>{a}
                    </td>
                    <td className="py-3 text-slate-500">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Job application tracker — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
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
          <h2 className="font-display text-lg font-bold text-slate-900">Related tools</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/ai-resume-builder', label: 'AI resume builder' },
              { href: '/tailor-resume-to-job-description', label: 'Tailor resume to a JD' },
              { href: '/ats-score-checker', label: 'Free ATS score checker' },
              { href: '/cover-letter-generator', label: 'AI cover letter generator' },
              { href: '/interview-questions', label: 'Interview questions by role' },
              { href: '/resume-examples', label: 'Resume examples by role' },
              { href: '/pricing', label: 'Pricing' },
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">One workflow: tailor, apply, track</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Build and tailor your resume, then track every application through to the offer — all in CV Prime. Free to start.
          </p>
          <Link href="/signup?next=/job-tracker" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Start tracking free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Start tracking free" message="Track every application through your pipeline — free to start" />
    </main>
  );
}
