import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Heart, ShieldCheck, Target } from 'lucide-react';
import { FounderPhoto } from '@/components/marketing/FounderPhoto';
import { SUPPORT_EMAIL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'About CV Prime — AI CV Builder Founded in India | Our Story & Mission',
  description:
    'CV Prime is an AI-powered CV builder and ATS optimiser founded in 2025 by Shishir Babu in Ernakulam, Kerala, India. Our mission: help genuine talent stop losing opportunities to automated resume filters.',
  alternates: {
    canonical: 'https://cv-prime.in/about',
  },
  openGraph: {
    title: 'About CV Prime — AI CV Builder Founded in India',
    description:
      'Founded in 2025 by Shishir Babu in Kerala, India. CV Prime helps job seekers build ATS-optimised CVs and land more interviews.',
    url: 'https://cv-prime.in/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About CV Prime' }],
  },
};

const values: Array<{ title: string; body: string; icon: typeof Heart }> = [
  {
    title: 'Talent over formatting',
    body: 'A great engineer, marketer, or analyst should never be filtered out because their CV was not phrased the way software expects. We close that gap.',
    icon: Heart,
  },
  {
    title: 'Honest by design',
    body: 'We help you present your real experience at its strongest. We will never encourage you to fake skills or invent results you did not achieve.',
    icon: ShieldCheck,
  },
  {
    title: 'Built for outcomes',
    body: 'Every feature exists to do one thing — help genuine candidates get seen, get shortlisted, and get a fair chance at the role.',
    icon: Target,
  },
];

export default function AboutPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <section className="premium-grid relative overflow-hidden bg-white/[0.04]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(99,102,241,0.16),transparent_30%),radial-gradient(circle_at_84%_6%,rgba(251,191,36,0.12),transparent_26%)]" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 pb-16 pt-10 text-center sm:px-6 lg:pb-20 lg:pt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
            About CV Prime
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[1] tracking-[-0.05em] sm:text-6xl">
            Talent should not lose to a filter.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            CV Prime exists for the brilliant people who never hear back — not because they
            were not good enough, but because software screened them out before a human ever
            read their story.
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="mx-auto w-full max-w-sm">
            <FounderPhoto />
            <div className="mt-4 text-center">
              <p className="font-display text-lg font-bold text-white">Shishir Babu</p>
              <p className="text-sm text-slate-400">Founder, CV Prime</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
              Our story
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
              It started in 2025, with one frustrating truth.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
              <p>
                Shishir Babu founded CV Prime in 2025 after watching something happen again and
                again: wonderful, capable people — friends, peers, strangers online — sending out
                dozens of applications and hearing nothing back. Not because they lacked the
                skill, but because an automated system rejected their CV before a single human
                being looked at it.
              </p>
              <p>
                Modern hiring runs through applicant tracking software. It scans for the right
                keywords, the right structure, the right signals — and quietly discards everything
                that does not fit its template. Genuinely talented people were losing real
                opportunities to a machine that never even understood what they could do.
              </p>
              <p>
                That felt deeply unfair. So CV Prime was built with a simple mission:{' '}
                <span className="font-semibold text-white">
                  help genuine talent stop losing to the system.
                </span>{' '}
                Not by gaming it dishonestly, but by making sure a real candidate&rsquo;s real
                experience is presented clearly enough to get past the filter and in front of the
                person who can actually say yes.
              </p>
              <p>
                Everyone deserves a fair shot at the role they are qualified for. CV Prime is here
                to make that shot fair again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-20">
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-card border border-white/10 bg-white/[0.03] p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-inner bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{value.body}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-panel border border-white/10 bg-transparent p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-white">
                Want to talk to us?
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                For anything at all, reach our team at{' '}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="font-semibold text-brand underline-offset-4 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
                . We read every message.
              </p>
            </div>
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center justify-center gap-2 rounded-pill bg-brand px-6 py-3 text-sm font-bold text-brand-foreground transition hover:-translate-y-0.5 hover:bg-brand-strong"
            >
              Build your CV free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* Facts / Press section */}
      <section className="border-t border-white/10 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold text-white">CV Prime — quick facts</h2>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Founded', value: '2025' },
              { label: 'Headquarters', value: 'Ernakulam, Kerala, India' },
              { label: 'Founder', value: 'Shishir Babu' },
              { label: 'Primary market', value: 'India' },
              { label: 'Free plan', value: '3 PDF downloads, unlimited CVs' },
              { label: 'Pro plan', value: '₹999 one-time — unlimited exports' },
              { label: 'AI model', value: 'OpenRouter (user-supplied key)' },
              { label: 'Templates', value: '8 ATS-optimised designs' },
              { label: 'Privacy', value: 'We never train on your CV data' },
            ].map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <dt className="text-xs font-bold uppercase tracking-widest text-slate-400">{fact.label}</dt>
                <dd className="mt-2 font-semibold text-white">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://cv-prime.in/#organization',
              name: 'CV Prime',
              url: 'https://cv-prime.in',
              logo: 'https://cv-prime.in/logo.png',
              foundingDate: '2025',
              foundingLocation: {
                '@type': 'Place',
                name: 'Ernakulam, Kerala, India',
              },
              founder: {
                '@type': 'Person',
                '@id': 'https://cv-prime.in/#founder',
                name: 'Shishir Babu',
                jobTitle: 'Founder & CEO',
                worksFor: { '@id': 'https://cv-prime.in/#organization' },
              },
              description: 'CV Prime is an AI-powered CV builder and ATS optimiser that helps Indian job seekers build recruiter-ready CVs, score their ATS keyword match, and export professional PDFs.',
              publishingPrinciples: 'https://cv-prime.in/editorial-standards',
              areaServed: 'IN',
              knowsAbout: ['CV Building', 'Resume Writing', 'ATS Optimisation', 'AI Resume Builder', 'Job Search India'],
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'hello@cv-prime.in',
                contactType: 'customer support',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': 'https://cv-prime.in/#founder',
              name: 'Shishir Babu',
              jobTitle: 'Founder & CEO',
              worksFor: { '@id': 'https://cv-prime.in/#organization' },
              homeLocation: {
                '@type': 'Place',
                name: 'Ernakulam, Kerala, India',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                { '@type': 'ListItem', position: 2, name: 'About CV Prime', item: 'https://cv-prime.in/about' },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
