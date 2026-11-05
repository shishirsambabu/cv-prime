import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { industries } from '@/lib/industryData';

export const metadata: Metadata = {
  title: 'Resume Examples by Industry — 2026',
  description:
    `Browse resume examples, ATS keywords, and salary data by industry: Technology, Finance, Sales, Marketing, Healthcare, and ${industries.length - 1} more sectors in India.`,
  alternates: { canonical: 'https://cv-prime.in/industries' },
  keywords: [
    'resume examples by industry',
    'industry specific resume',
    'resume by industry india',
    'cv examples by industry',
    'best resume format by industry',
    'industry resume templates india',
  ],
  openGraph: {
    title: 'Resume Examples by Industry — 2026 | CV Prime',
    description: `ATS-optimised resume examples grouped by industry across ${industries.length} sectors hiring in India.`,
    url: 'https://cv-prime.in/industries',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Examples by Industry — CV Prime' }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Resume Examples by Industry — CV Prime',
  description: 'Collection of resume examples, ATS keywords, and salary data grouped by industry for the Indian job market.',
  url: 'https://cv-prime.in/industries',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://cv-prime.in/industries' },
    ],
  },
};

export default function IndustriesIndexPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-slate-950 px-5 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Resume examples by industry — 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Every industry screens resumes differently. Pick your sector to see the roles, ATS keywords, in-demand skills, and salary data recruiters expect in India.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Build my resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resume-examples"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Browse by role instead
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold text-white">Browse by industry</h2>
          <p className="mt-3 text-slate-400">{industries.length} industries, covering every role example, ATS guide, and salary page on CV Prime.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm transition hover:border-brand hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{industry.roles.length} role{industry.roles.length === 1 ? '' : 's'} covered</p>
                <h3 className="mt-2 font-display text-lg font-bold text-white">{industry.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400 line-clamp-2">{industry.blurb}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-bold text-brand opacity-0 transition group-hover:opacity-100">
                  See {industry.name} resumes <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-white">Related tools & guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/resume-examples', label: 'All resume examples by role' },
              { href: '/ats-guide', label: 'ATS guides by role' },
              { href: '/salary', label: 'Salary data by role' },
              { href: '/cover-letter-examples', label: 'Cover letter examples' },
              { href: '/resume-builder', label: 'AI resume builder' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 hover:border-brand hover:text-brand transition">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Don&apos;t see your industry? Build any resume free.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            CV Prime&apos;s AI tailors your resume to any job description — just paste the JD and get a scored, keyword-optimised draft in minutes.
          </p>
          <Link
            href="/signup?next=/ai-cv"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition"
          >
            Try AI resume builder free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
