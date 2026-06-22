import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, MessageSquare, Brain, Users, Lightbulb } from 'lucide-react';
import { roles, roleMap, roleSlugs } from '@/lib/roleData';
import { interviewMap } from '@/lib/interviewData';
import { RoleResourceLinks } from '@/components/marketing/RoleResourceLinks';

interface PageProps {
  params: { role: string };
}

export async function generateStaticParams() {
  return roleSlugs.map((slug) => ({ role: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const role = roleMap.get(params.role);
  if (!role) return { title: 'Interview Questions — CV Prime' };

  return {
    title: `${role.displayTitle} Interview Questions & Answers — India 2026 | CV Prime`,
    description: `Top ${role.displayTitle} interview questions with detailed answers for India. Covers technical, behavioural, and situational questions asked by Indian recruiters and hiring managers.`,
    keywords: [
      `${role.displayTitle.toLowerCase()} interview questions`,
      `${role.displayTitle.toLowerCase()} interview questions india`,
      `${role.displayTitle.toLowerCase()} interview questions and answers`,
      `${role.slug} interview questions 2026`,
      `how to crack ${role.displayTitle.toLowerCase()} interview india`,
    ],
    alternates: { canonical: `https://cv-prime.in/interview-questions/${role.slug}` },
    openGraph: {
      title: `${role.displayTitle} Interview Questions & Answers — CV Prime`,
      description: `Top interview questions for ${role.displayTitle} roles in India with detailed answers. Behavioural, technical, and situational.`,
      url: `https://cv-prime.in/interview-questions/${role.slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${role.displayTitle} Interview Questions` }],
    },
  };
}

type TypeLabelEntry = { label: string; color: string; Icon: typeof Brain };
const typeLabel: Record<'technical' | 'behavioural' | 'situational', TypeLabelEntry> = {
  technical: { label: 'Technical', color: 'bg-blue-50 text-blue-700 border-blue-200', Icon: Brain },
  behavioural: { label: 'Behavioural', color: 'bg-purple-50 text-purple-700 border-purple-200', Icon: Users },
  situational: { label: 'Situational', color: 'bg-amber-50 text-amber-700 border-amber-200', Icon: Lightbulb },
};

export default function InterviewQuestionsPage({ params }: PageProps): JSX.Element {
  const role = roleMap.get(params.role);
  if (!role) notFound();

  const interview = interviewMap[params.role];
  if (!interview) notFound();

  const relatedRoles = roles.filter((r) => r.slug !== role.slug).slice(0, 4);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-5 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/interview-questions" className="hover:text-white">Interview Questions</Link>
            <span>/</span>
            <span className="text-white">{role.displayTitle}</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <MessageSquare className="h-4 w-4" />
            Interview prep
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {role.displayTitle} interview questions & answers — India 2026
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            The most commonly asked {role.displayTitle.toLowerCase()} interview questions in India, with detailed model answers. Covers technical, behavioural, and situational questions asked by Indian recruiters.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong">
              Build my {role.displayTitle} CV free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={`/cv-examples/${role.slug}`} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-bold text-white hover:border-white/40">
              See CV example
            </Link>
          </div>
        </div>
      </section>

      {/* Question types legend */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-5">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-4">
          {Object.entries(typeLabel).map(([key, val]) => {
            const Icon = val.Icon;
            return (
              <span key={key} className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${val.color}`}>
                <Icon className="h-3.5 w-3.5" />
                {val.label}
              </span>
            );
          })}
          <span className="text-xs text-slate-500 self-center">— question type tags throughout this page</span>
        </div>
      </section>

      {/* Questions */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          {interview.questions.map((item, i) => {
            const type = typeLabel[item.type as keyof typeof typeLabel] ?? typeLabel.behavioural;
            const Icon = type.Icon;
            return (
              <article key={i} className="rounded-[1.5rem] border border-slate-100 overflow-hidden">
                <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 font-display text-2xl font-bold text-slate-200">{String(i + 1).padStart(2, '0')}</span>
                      <h2 className="font-display text-lg font-bold leading-snug text-slate-950">{item.q}</h2>
                    </div>
                    <span className={`shrink-0 inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-bold ${type.color}`}>
                      <Icon className="h-3 w-3" />
                      {type.label}
                    </span>
                  </div>
                </div>
                <div className="px-6 py-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Model answer</p>
                  <p className="leading-7 text-slate-700">{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Tips */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold">Interview tips for {role.displayTitle} roles in India</h2>
          <ul className="mt-6 space-y-3">
            {interview.tips.map((tip) => (
              <li key={tip} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-500" />
                <span className="text-sm leading-6 text-slate-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cross-link to CV example */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-cyan-200 bg-cyan-50 p-8">
          <h2 className="font-display text-2xl font-bold">Got the interview? Now get your CV ready.</h2>
          <p className="mt-3 leading-7 text-slate-700">
            Use CV Prime to build an ATS-optimised {role.displayTitle} CV tailored to the exact job description — so you pass the automated screen before the interview even happens.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-2.5 text-sm font-bold text-white hover:bg-slate-800">
              Build my CV free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={`/cv-examples/${role.slug}`} className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-bold text-slate-700 hover:border-cyan-300">
              {role.displayTitle} CV example →
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">
            CV Prime is a <Link href="/" className="underline hover:text-slate-700">free CV maker</Link> and <Link href="/ai-cv-builder" className="underline hover:text-slate-700">free AI CV builder</Link> for India. No credit card required.
          </p>
        </div>
      </section>

      <RoleResourceLinks slug={role.slug} displayTitle={role.displayTitle} />

      {/* Related roles */}
      <section className="bg-slate-50 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-xl font-bold">More interview question guides</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedRoles.map((r) => (
              <Link key={r.slug} href={`/interview-questions/${r.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-cyan-300 hover:shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{r.industry}</p>
                <p className="mt-2 font-display font-bold text-slate-900">{r.displayTitle}</p>
                <p className="mt-1 text-sm text-cyan-600">Interview questions →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: `${role.displayTitle} Interview Questions & Answers — India 2026`,
              description: `Top ${role.displayTitle} interview questions with detailed answers for India 2026. Covers technical, behavioural, and situational questions.`,
              url: `https://cv-prime.in/interview-questions/${role.slug}`,
              datePublished: '2026-01-01',
              dateModified: new Date().toISOString().split('T')[0],
              author: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
              publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in', logo: { '@type': 'ImageObject', url: 'https://cv-prime.in/logo.png' } },
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                  { '@type': 'ListItem', position: 2, name: 'Interview Questions', item: 'https://cv-prime.in/interview-questions' },
                  { '@type': 'ListItem', position: 3, name: `${role.displayTitle} Interview Questions`, item: `https://cv-prime.in/interview-questions/${role.slug}` },
                ],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: interview.questions.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: { '@type': 'Answer', text: item.answer },
              })),
            },
          ]),
        }}
      />
    </main>
  );
}
