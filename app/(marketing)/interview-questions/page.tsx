import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { roles } from '@/lib/roleData';
import { interviewMap } from '@/lib/interviewData';

export const metadata: Metadata = {
  title: 'Job Interview Questions & Answers — India 2026 | CV Prime',
  description: 'Free interview question guides for 30 roles in India. Covering technical, behavioural, and situational questions asked by Indian recruiters and hiring managers.',
  alternates: { canonical: 'https://cv-prime.in/interview-questions' },
  openGraph: {
    title: 'Job Interview Questions & Answers — India 2026 | CV Prime',
    description: 'Free interview question guides for 30 roles in India. Covering technical, behavioural, and situational questions asked by Indian recruiters.',
    url: 'https://cv-prime.in/interview-questions',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Interview Questions India 2026' }],
  },
};

export default function InterviewQuestionsIndexPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
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
            Free interview question guides for 30 roles across technology, finance, marketing, operations, and more. Each guide covers the questions Indian recruiters actually ask — with detailed model answers.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 text-sm text-slate-500">{roles.length} roles covered</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => {
              const interview = interviewMap[role.slug];
              const questionCount = interview?.questions?.length ?? 0;
              return (
                <Link
                  key={role.slug}
                  href={`/interview-questions/${role.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-cyan-300 hover:shadow-sm"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{role.industry}</p>
                  <p className="mt-2 font-display text-lg font-bold leading-snug text-slate-900 group-hover:text-cyan-700">
                    {role.displayTitle}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-slate-500">{questionCount} questions</span>
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

      {/* CTA */}
      <section className="bg-slate-50 px-5 py-14">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-cyan-200 bg-cyan-50 p-8 text-center">
          <h2 className="font-display text-2xl font-bold">Prep for your interview. Then get your CV ready.</h2>
          <p className="mt-3 leading-7 text-slate-700">
            Build an ATS-optimised CV that passes the automated screen — so you reach the interview in the first place.
          </p>
          <Link href="/signup" className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3 text-sm font-bold text-white hover:bg-slate-800">
            Build my CV free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
