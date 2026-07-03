import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { roles } from '@/lib/roleData';

export const metadata: Metadata = {
  title: 'Free Resume Examples for Every Role — 2026 | CV Prime',
  description:
    'Browse free resume examples for Software Engineer, Data Analyst, Product Manager, Marketing Manager, and 35 roles total. ATS-optimised resume samples with writing tips for India 2026.',
  alternates: {
    canonical: 'https://cv-prime.in/resume-examples',
  },
  keywords: [
    'resume examples',
    'resume examples india',
    'resume samples',
    'resume examples by role',
    'free resume examples',
    'professional resume examples',
    'resume examples 2026',
    'resume samples india',
    'resume example for job',
    'resume template examples',
  ],
  openGraph: {
    title: 'Free Resume Examples for Every Role — 2026 | CV Prime',
    description:
      'ATS-optimised resume examples for Software Engineers, Data Analysts, PMs, HR Managers, and 35 roles in India.',
    url: 'https://cv-prime.in/resume-examples',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Examples — CV Prime' }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Free Resume Examples for Every Role — CV Prime',
  description: 'Collection of ATS-optimised resume examples for all major job roles in India. Free resume samples with writing tips, keyword guides, and AI generation.',
  url: 'https://cv-prime.in/resume-examples',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
      { '@type': 'ListItem', position: 2, name: 'Resume Examples', item: 'https://cv-prime.in/resume-examples' },
    ],
  },
};

export default function ResumeExamplesIndexPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Free resume examples for every role — 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            ATS-optimised resume examples with role-specific writing tips, keyword guides, and free templates. Pick your role and build a resume that gets past ATS and into recruiter hands.
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
              href="/resume-builder"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              AI resume builder
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-white/10 bg-white/[0.03] px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '35', label: 'role-specific resume examples' },
            { stat: 'Free', label: 'to use — no credit card ever required' },
            { stat: 'ATS', label: 'optimised for Indian ATS systems' },
            { stat: '2026', label: 'updated keywords and salary data' },
          ].map((item) => (
            <div key={item.label} className="min-w-[120px]">
              <p className="font-display text-3xl font-bold text-brand">{item.stat}</p>
              <p className="mt-1 max-w-[140px] text-xs leading-5 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Role cards */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold text-white">Browse resume examples by role</h2>
          <p className="mt-3 text-slate-400">Each example includes what to include, common mistakes, key ATS keywords, salary data, and FAQ</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <Link
                key={role.slug}
                href={`/resume-examples/${role.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm transition hover:border-brand hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{role.industry}</p>
                <h2 className="mt-2 font-display text-lg font-bold text-white">
                  {role.displayTitle} Resume Example
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400 line-clamp-2">
                  {role.metaDescription.replace(/\bcv\b/gi, 'resume').replace(/\bCV\b/g, 'resume')}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-bold text-brand opacity-0 transition group-hover:opacity-100">
                  See resume example <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why these examples work */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold">What makes a good resume example?</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'ATS keyword coverage', desc: 'Every example highlights which keywords ATS systems screen for in that specific role — so your resume includes the right terminology, not generic filler.' },
              { title: 'Role-specific sections', desc: 'A software engineer resume needs a skills section and GitHub projects. A finance analyst resume needs certifications and modelling tools. Generic examples don\'t make this distinction.' },
              { title: 'India-specific salary and companies', desc: 'Each example includes current salary ranges and top hiring companies in India — so you know what the market looks like before you apply.' },
              { title: 'Mistake guides', desc: 'Every example shows the most common resume mistakes for that role — so you know what to avoid, not just what to include.' },
              { title: 'ATS-safe formatting', desc: 'All examples follow ATS-readable formatting rules: no tables, text boxes, or graphics that break automated parsing.' },
              { title: 'Free AI generation', desc: 'Every role example links to CV Prime\'s AI resume builder — paste the job description and get a tailored, ATS-scored resume in minutes.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white/[0.04] p-5 shadow-sm">
                <h3 className="font-display font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related tools */}
      <section className="border-t border-white/10 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-white">Related tools & guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/resume-builder', label: 'AI resume builder' },
              { href: '/resume-checker', label: 'Free resume checker' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/cover-letter-examples', label: 'Cover letter examples' },
              { href: '/fresher-resume', label: 'Fresher resume guide' },
              { href: '/resume-format', label: 'Resume format guide' },
              { href: '/cv-examples', label: 'CV examples (same content, CV format)' },
              { href: '/interview-questions', label: 'Interview questions by role' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 hover:border-brand hover:text-brand transition">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Don&apos;t see your role? Build any resume free.
          </h2>
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
