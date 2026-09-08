import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Cpu } from 'lucide-react';
import { atsSystems } from '@/lib/atsSystemData';

export const metadata: Metadata = {
  title: 'ATS Guide by System — Workday, Greenhouse, Taleo, iCIMS, SuccessFactors | CV Prime',
  description:
    'How each major ATS platform actually parses and filters resumes in India — Workday, Greenhouse, Oracle Taleo, iCIMS, and SAP SuccessFactors. Formatting rules, parsing behaviour, and common mistakes per system.',
  keywords: [
    'workday resume tips',
    'greenhouse ats guide',
    'taleo resume format',
    'icims resume tips',
    'successfactors resume india',
    'which ats does my company use',
    'ats system guide india',
  ],
  alternates: { canonical: 'https://cv-prime.in/ats-guide/system' },
  openGraph: {
    title: 'ATS Guide by System — CV Prime',
    description: 'How Workday, Greenhouse, Taleo, iCIMS, and SuccessFactors parse and filter resumes.',
    url: 'https://cv-prime.in/ats-guide/system',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ATS Guide by System — CV Prime' }],
  },
};

export default function AtsGuideBySystemPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <nav className="border-b border-white/10 bg-white/[0.04] px-5 py-3">
        <div className="mx-auto flex max-w-4xl items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-cyan-300">Home</Link>
          <span>/</span>
          <Link href="/ats-guide" className="hover:text-cyan-300">ATS Guide</Link>
          <span>/</span>
          <span className="text-white">By system</span>
        </div>
      </nav>

      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <Cpu className="h-4 w-4" />
            ATS guide · by platform
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            ATS resume guide by system — India 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Every ATS platform parses and filters resumes a little differently. Pick the system your target employer uses to see its specific parsing behaviour, formatting rules, and the mistakes that get resumes filtered out.
          </p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 sm:grid-cols-2">
            {atsSystems.map((system) => (
              <Link
                key={system.slug}
                href={`/ats-guide/system/${system.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-300 hover:shadow-sm"
              >
                <p className="font-display text-xl font-bold text-white group-hover:text-cyan-300">
                  {system.name} →
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{system.usedBy}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300">
                  See parsing rules
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Not sure which ATS your target company uses?</h2>
          <p className="mt-4 leading-7 text-slate-300">
            You usually cannot see this directly, but the career-site URL is a strong hint: <code className="rounded bg-white/10 px-1.5 py-0.5 text-cyan-200">myworkdayjobs.com</code> means Workday, <code className="rounded bg-white/10 px-1.5 py-0.5 text-cyan-200">boards.greenhouse.io</code> means Greenhouse, and iCIMS career sites commonly include <code className="rounded bg-white/10 px-1.5 py-0.5 text-cyan-200">icims.com</code> in the URL. If none of these match, the universal ATS rules below apply to every system: single-column formatting, standard section headings, and job-description keyword matching.
          </p>
          <div className="mt-8 text-center">
            <Link
              href="/ats-checker"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong"
            >
              Check my ATS score free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.03] px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-xl font-bold">Related resources</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { href: '/ats-guide', title: 'ATS Guide by Role', sub: '35 profession-specific ATS keyword guides' },
              { href: '/ats-checker', title: 'Free ATS Checker', sub: 'Score your CV against any job description' },
              { href: '/ats-friendly-cv', title: 'ATS-Friendly CV Guide', sub: 'Complete guide to building ATS-safe CVs' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300 hover:shadow-sm"
              >
                <p className="font-display font-bold text-white group-hover:text-cyan-300">{link.title} →</p>
                <p className="mt-1 text-sm text-slate-400">{link.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'ATS Guide by System',
            url: 'https://cv-prime.in/ats-guide/system',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                { '@type': 'ListItem', position: 2, name: 'ATS Guide', item: 'https://cv-prime.in/ats-guide' },
                { '@type': 'ListItem', position: 3, name: 'By System', item: 'https://cv-prime.in/ats-guide/system' },
              ],
            },
          }),
        }}
      />
    </main>
  );
}
