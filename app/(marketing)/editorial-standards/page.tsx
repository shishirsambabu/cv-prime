import Link from 'next/link';
import type { Metadata } from 'next';
import { BookOpen, RefreshCw, ShieldCheck, Users } from 'lucide-react';
import { SUPPORT_EMAIL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Editorial Standards — How CV Prime Researches & Writes Content',
  description:
    'How CV Prime creates, verifies, and updates its resume, ATS, and career-advice content: who writes it, how data is sourced, how AI is used, and how to request a correction.',
  alternates: {
    canonical: 'https://cv-prime.in/editorial-standards',
  },
  openGraph: {
    title: 'Editorial Standards — How CV Prime Researches & Writes Content',
    description:
      'Our sourcing, review, AI-use, and correction policy for every guide, statistic, and template recommendation CV Prime publishes.',
    url: 'https://cv-prime.in/editorial-standards',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime Editorial Standards' }],
  },
};

const principles: Array<{ title: string; body: string; icon: typeof ShieldCheck }> = [
  {
    title: 'Practitioner-reviewed, not just written',
    body: 'Every guide is built and reviewed by the CV Prime team against real hiring outcomes and ATS behaviour we have observed building the product — not generic advice repeated from other resume sites.',
    icon: Users,
  },
  {
    title: 'Data is sourced and dated',
    body: 'Salary ranges, ATS pass-rate statistics, and hiring-trend figures cite a source and a collection date on the page they appear on. If we cannot verify a number, we do not publish it as fact.',
    icon: BookOpen,
  },
  {
    title: 'Content is kept current',
    body: 'Career advice, ATS behaviour, and salary data change every year. Pages carry a visible "last updated" date, and our highest-traffic guides are re-checked at least twice a year for accuracy.',
    icon: RefreshCw,
  },
  {
    title: 'AI assists drafting; humans are accountable for accuracy',
    body: 'We use AI tools to speed up first drafts and structure large content sets like role-specific examples. A human reviews every published page for factual accuracy before it goes live and remains responsible for it after.',
    icon: ShieldCheck,
  },
];

export default function EditorialStandardsPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <section className="premium-grid relative overflow-hidden bg-white/[0.04]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(99,102,241,0.16),transparent_30%),radial-gradient(circle_at_84%_6%,rgba(16,185,129,0.1),transparent_26%)]" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 pb-14 pt-10 text-center sm:px-6 lg:pb-16 lg:pt-16">
          <div className="inline-flex items-center gap-2 rounded-pill border border-brand/20 bg-brand/[0.06] px-4 py-2 text-sm font-semibold text-brand">
            <ShieldCheck className="h-4 w-4" />
            Editorial Standards
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1] tracking-[-0.05em] sm:text-6xl">
            How we research and write.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            CV Prime publishes hundreds of resume, ATS, and career guides. This page explains who
            writes them, how we verify what we publish, and how to tell us if something is wrong.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-panel border border-white/10 bg-white/[0.04] p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-inner bg-brand/10 text-brand">
                  <principle.icon className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold tracking-[-0.02em] text-white">
                    {principle.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{principle.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-white">Who writes and reviews our content</h2>
            <p className="mt-3 leading-7 text-slate-300">
              CV Prime was founded by{' '}
              <Link href="/about" className="font-semibold text-cyan-300 hover:text-cyan-200">
                Shishir Babu
              </Link>{' '}
              in Ernakulam, Kerala, India. Content is produced under the CV Prime editorial team
              and reviewed for accuracy before publishing and again on scheduled updates. We do
              not accept paid placements inside educational guides, and our comparison pages
              disclose that CV Prime is the product being compared.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white">How we source data</h2>
            <p className="mt-3 leading-7 text-slate-300">
              Where a page states a statistic — an ATS rejection rate, a salary range, an
              applicant-per-role figure — the source is either a named public report, our own
              product usage patterns, or clearly labelled as an estimate. We avoid restating
              unsourced numbers that circulate across other resume sites without a traceable
              origin.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white">Corrections</h2>
            <p className="mt-3 leading-7 text-slate-300">
              If you find an inaccurate claim, an outdated statistic, or a broken example on any
              CV Prime page, email{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-cyan-300 hover:text-cyan-200">
                {SUPPORT_EMAIL}
              </a>{' '}
              with the page URL. We review correction requests and update the page, noting the
              revised date, once verified.
            </p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              '@id': 'https://cv-prime.in/editorial-standards',
              name: 'CV Prime Editorial Standards',
              url: 'https://cv-prime.in/editorial-standards',
              description:
                'How CV Prime creates, verifies, and updates its resume, ATS, and career-advice content.',
              publisher: { '@id': 'https://cv-prime.in/#organization' },
              about: { '@id': 'https://cv-prime.in/#organization' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Editorial Standards',
                  item: 'https://cv-prime.in/editorial-standards',
                },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
