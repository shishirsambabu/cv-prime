import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { roles } from './[role]/roleData';

export const metadata: Metadata = {
  title: 'Free CV Examples for Every Role — Templates & Writing Tips | CV Prime',
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
    'free cv examples india 2024',
  ],
  openGraph: {
    title: 'Free CV Examples for Every Role — CV Prime',
    description: 'ATS-optimised CV examples for Software Engineers, Data Analysts, PMs, HR Managers, Finance Analysts, and more.',
    url: 'https://cv-prime.in/cv-examples',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Examples — CV Prime' }],
  },
};

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
            href="/signup"
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
          __html: JSON.stringify([
            {
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
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'CV Examples by Job Role — India',
              description: 'ATS-optimised CV examples for every major job role in India.',
              url: 'https://cv-prime.in/cv-examples',
              numberOfItems: roles.length,
              itemListElement: roles.map((role, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: `${role.displayTitle} CV Example`,
                url: `https://cv-prime.in/cv-examples/${role.slug}`,
                description: role.metaDescription,
              })),
            },
          ]),
        }}
      />
    </main>
  );
}
