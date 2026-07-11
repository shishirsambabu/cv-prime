import { AiToolCallout } from '@/components/tools/ai/AiToolCallout';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { roles } from '@/lib/roleData';
import { interviewMap } from '@/lib/interviewData';

export const metadata: Metadata = {
  title: 'Job Interview Questions & Answers — 35 Roles India 2026 | CV Prime',
  description: 'Free interview question guides for 49 roles in India. Technical, behavioural, and situational questions asked by Indian recruiters — with detailed model answers.',
  alternates: { canonical: 'https://cv-prime.in/interview-questions' },
  keywords: [
    'job interview questions india',
    'interview questions and answers india',
    'interview preparation india 2026',
    'hr interview questions india',
    'technical interview questions india',
    'interview questions by role india',
    'common interview questions india',
  ],
  openGraph: {
    title: 'Job Interview Questions & Answers — 35 Roles India 2026 | CV Prime',
    description: 'Free interview question guides for 49 roles in India. Technical, behavioural, and situational questions with model answers.',
    url: 'https://cv-prime.in/interview-questions',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Interview Questions India 2026' }],
  },
};

export default function InterviewQuestionsIndexPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-5 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Interview Questions</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <MessageSquare className="h-4 w-4" />
            Interview prep — India 2026
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Job interview questions &amp; answers — India 2026
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Free interview question guides for 49 roles across technology, finance, marketing, operations, and more. Each guide covers the questions Indian recruiters actually ask — with detailed model answers.
          </p>
        </div>
      </section>
      <AiToolCallout href="/tools/ai-interview-questions" label="Predict your interview questions with AI" blurb="The most likely questions for any role — behavioural, technical, situational — each with an answer tip." />

      {/* Grid */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 text-sm text-slate-400">{roles.length} roles covered</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => {
              const interview = interviewMap[role.slug];
              const questionCount = interview?.questions?.length ?? 0;
              return (
                <Link
                  key={role.slug}
                  href={`/interview-questions/${role.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-300 hover:shadow-sm"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{role.industry}</p>
                  <p className="mt-2 font-display text-lg font-bold leading-snug text-white group-hover:text-cyan-300">
                    {role.displayTitle}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-slate-400">{questionCount} questions</span>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-cyan-600">
                      View guide <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-6xl">
          <p className="font-display text-sm font-bold uppercase tracking-wider text-slate-400">More interview preparation</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { href: '/blog/job-interview-tips-india-2026', label: 'Interview tips guide India 2026' },
              { href: '/blog/salary-negotiation-tips-india-2026', label: 'Salary negotiation India 2026' },
              { href: '/resume-builder', label: 'AI resume builder' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/cv-examples', label: 'CV examples by role' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white/[0.03] px-5 py-14">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-cyan-400/30 bg-cyan-500/10 p-8 text-center">
          <h2 className="font-display text-2xl font-bold">Prep for your interview. Then get your CV ready.</h2>
          <p className="mt-3 leading-7 text-slate-300">
            Build an ATS-optimised CV that passes the automated screen — so you reach the interview in the first place.
          </p>
          <Link href="/signup" className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3 text-sm font-bold text-white hover:bg-slate-800">
            Build my CV free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Job Interview Questions & Answers — 35 Roles India 2026',
              description: 'Free interview question guides for 49 roles in India with model answers for technical, behavioural, and situational questions.',
              url: 'https://cv-prime.in/interview-questions',
              publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                { '@type': 'ListItem', position: 2, name: 'Interview Questions', item: 'https://cv-prime.in/interview-questions' },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What are the most common interview questions in India?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The most common interview questions asked in India across all roles are: Tell me about yourself, Why are you leaving your current job, What is your biggest weakness, Where do you see yourself in 5 years, Why do you want to work at this company, What is your expected CTC, Tell me about a time you handled a difficult situation. For role-specific questions, see CV Prime\'s guides at cv-prime.in/interview-questions/[role].',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I prepare for a job interview in India?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Interview preparation in India covers 5 areas: (1) Research the company — product, competitors, recent news. (2) Prepare answers to the 5 most common questions using the STAR method. (3) Review role-specific technical questions for your function. (4) Prepare 3 questions to ask at the end. (5) Know your salary expectation and back it with market data (AmbitionBox, LinkedIn Salary Insights). Start preparation at least 5 days before the interview.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What is the STAR method for interview answers?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The STAR method structures answers to behavioural interview questions: Situation (set the context in 1-2 sentences), Task (your specific responsibility), Action (what you personally did — use "I" not "we"), Result (measurable outcome with numbers). STAR answers are preferred by most Indian companies for HR and manager rounds because they provide verifiable evidence of past performance.',
                  },
                },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
