import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { roles } from './[role]/roleData';
import { FaqSection } from '@/components/marketing/FaqSection';
import type { FaqEntry } from '@/components/marketing/FaqSection';

export const metadata: Metadata = {
  title: 'Free CV Examples for Every Role — Templates & Writing Tips',
  description:
    'Browse free CV examples for Software Engineer, Data Analyst, Product Manager, HR, Finance, and Marketing roles in India. ATS-optimised templates with writing tips for every industry.',
  alternates: {
    canonical: 'https://cv-prime.in/cv-examples',
  },
  keywords: [
    'cv examples india',
    'resume examples',
    'cv samples for different jobs',
    'professional cv examples',
    'cv template by job role',
    'free cv examples india 2026',
  ],
  openGraph: {
    title: 'Free CV Examples for Every Role — CV Prime',
    description: 'ATS-optimised CV examples for Software Engineers, Data Analysts, PMs, HR Managers, Finance Analysts, and more.',
    url: 'https://cv-prime.in/cv-examples',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Examples — CV Prime' }],
  },
};

const faqs: FaqEntry[] = [
  {
    question: 'What is a CV example?',
    answer:
      "A CV example is a sample CV written for a specific job role. It shows which sections to include, how to phrase achievements, and which keywords recruiters and applicant tracking systems (ATS) look for in that role, so you can model your own CV on it.",
  },
  {
    question: 'How should I use a CV example?',
    answer:
      "Use it as a structure and phrasing guide, not a script. Keep the section order and bullet style, then replace every line with your own experience, numbers and tools. Copying an example word for word is easy for recruiters to spot and will not match the job description you are applying to.",
  },
  {
    question: 'What is the difference between a CV and a resume in India?',
    answer:
      "In India the two words are used almost interchangeably for a 1–2 page job application document. Strictly, a resume is a short, tailored summary while a CV (curriculum vitae) is a longer, complete record used mainly for academic and research roles.",
  },
  {
    question: 'How long should a CV be?',
    answer:
      "One page is ideal for freshers and candidates with under about 5 years of experience; two pages is normal for experienced professionals. Go longer only for academic, research or medical CVs where publications and projects need to be listed.",
  },
  {
    question: 'Are these CV examples ATS-friendly?',
    answer:
      "Yes. Each example follows ATS-safe conventions — standard headings, plain text and role-specific keywords — and you can build your own version in CV Prime and check it with the ATS score before applying.",
  },
];

export default function CVExamplesIndexPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Free CV examples for every role in India
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            ATS-optimised CV examples with writing tips, keyword guides, and AI-powered templates for every major industry. Pick your role and build yours free.
          </p>
          <Link
            href="/signup?next=/ai-cv"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Build my CV free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Role cards */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <Link
                key={role.slug}
                href={`/cv-examples/${role.slug}`}
                className="group rounded-[1.5rem] border border-white/10 p-6 transition hover:border-cyan-300 hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{role.industry}</p>
                <h2 className="mt-3 font-display text-xl font-bold text-white">{role.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400 line-clamp-2">{role.metaDescription}</p>
                <p className="mt-4 text-sm font-bold text-cyan-600 group-hover:text-cyan-300">
                  See example & tips →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} heading="CV example questions, answered" />

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">
            Don&apos;t see your role? Build any CV free.
          </h2>
          <p className="mt-4 text-slate-300">
            CV Prime&apos;s AI tailors your CV to any job description — just paste the JD and let AI handle the rest.
          </p>
          <Link
            href="/signup?next=/ai-cv"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Try AI CV tailoring free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Free CV Examples for Every Role — CV Prime',
            description: 'Collection of ATS-optimised CV examples for all major job roles in India.',
            url: 'https://cv-prime.in/cv-examples',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                { '@type': 'ListItem', position: 2, name: 'CV Examples', item: 'https://cv-prime.in/cv-examples' },
              ],
            },
          }),
        }}
      />
    </main>
  );
}
