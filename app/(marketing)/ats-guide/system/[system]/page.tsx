import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Cpu, CheckCircle2, XCircle, Info } from 'lucide-react';
import { atsSystemsMap, atsSystemSlugs, atsSystems } from '@/lib/atsSystemData';

export function generateStaticParams(): { system: string }[] {
  return atsSystemSlugs.map((slug) => ({ system: slug }));
}

export async function generateMetadata({ params }: { params: { system: string } }): Promise<Metadata> {
  const system = atsSystemsMap[params.system];
  if (!system) return {};
  const title = `${system.name} Resume Guide 2026 — Parsing Rules & Formatting`;
  const description = `How ${system.name} parses and filters resumes: what it extracts, the formatting that breaks it, and the mistakes that keep candidates out of recruiter search. ${system.usedBy}`;
  return {
    title: `${title} | CV Prime`,
    description,
    keywords: [
      `${system.shortName.toLowerCase()} resume tips`,
      `${system.shortName.toLowerCase()} ats guide`,
      `${system.shortName.toLowerCase()} resume format`,
      `how does ${system.shortName.toLowerCase()} parse resumes`,
      `${system.shortName.toLowerCase()} resume india`,
    ],
    alternates: { canonical: `https://cv-prime.in/ats-guide/system/${params.system}` },
    openGraph: {
      title: `${title} | CV Prime`,
      description,
      url: `https://cv-prime.in/ats-guide/system/${params.system}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${system.name} Resume Guide — CV Prime` }],
    },
  };
}

export default function AtsSystemPage({ params }: { params: { system: string } }): JSX.Element {
  const system = atsSystemsMap[params.system];
  if (!system) notFound();

  const otherSystems = atsSystems.filter((s) => s.slug !== params.system).slice(0, 3);

  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <nav className="border-b border-white/10 bg-white/[0.04] px-5 py-3">
        <div className="mx-auto flex max-w-4xl items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-cyan-300">Home</Link>
          <span>/</span>
          <Link href="/ats-guide" className="hover:text-cyan-300">ATS Guide</Link>
          <span>/</span>
          <Link href="/ats-guide/system" className="hover:text-cyan-300">By system</Link>
          <span>/</span>
          <span className="text-white">{system.name}</span>
        </div>
      </nav>

      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <Cpu className="h-4 w-4" />
            ATS guide · {system.shortName}
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {system.name} resume guide — how it parses and filters CVs
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{system.overview}</p>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
            <p className="text-sm leading-6 text-slate-300">
              <span className="font-semibold text-cyan-200">Who uses {system.shortName} in India: </span>
              {system.usedBy}
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            How {system.shortName} actually parses your resume
          </h2>
          <div className="mt-8 space-y-3">
            {system.parsingNotes.map((note, i) => (
              <div key={i} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                <p className="leading-7 text-slate-300">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Formatting rules for {system.shortName}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {system.formattingRules.map((rule, i) => (
              <div key={i} className="flex items-start gap-3 rounded-2xl bg-white/[0.04] p-5 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                <p className="leading-6 text-slate-300">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Common mistakes that hurt {system.shortName} applications
          </h2>
          <div className="mt-8 space-y-3">
            {system.commonMistakes.map((mistake, i) => (
              <div key={i} className="flex gap-4 rounded-2xl border border-red-900/30 bg-red-950/30 p-5">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                <p className="leading-7 text-slate-300">{mistake}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            {system.name} — frequently asked questions
          </h2>
          <div className="mt-8 space-y-4">
            {system.faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-display font-bold text-white">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-xl font-bold">Other ATS systems</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {otherSystems.map((s) => (
              <Link
                key={s.slug}
                href={`/ats-guide/system/${s.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300 hover:shadow-sm"
              >
                <p className="font-display font-bold text-white group-hover:text-cyan-300">{s.name} →</p>
                <p className="mt-1 text-sm text-slate-400">Parsing rules and formatting guide</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
            <Link href="/ats-guide/system" className="hover:text-cyan-300">← All ATS systems</Link>
            <Link href="/ats-guide" className="hover:text-cyan-300">ATS guide by role →</Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Build a resume {system.shortName} parses correctly
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            CV Prime generates ATS-safe, single-column resumes with clean structured sections, then scores your match against any job description before you apply.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/ats-checker"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
            >
              Check my ATS score free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-bold text-white hover:border-white/40"
            >
              Build my CV free
            </Link>
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
              headline: `${system.name} Resume Guide 2026 — Parsing Rules & Formatting`,
              description: system.overview,
              url: `https://cv-prime.in/ats-guide/system/${params.system}`,
              datePublished: '2026-01-01',
              dateModified: new Date().toISOString().split('T')[0],
              author: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
              publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in', logo: { '@type': 'ImageObject', url: 'https://cv-prime.in/logo.png' } },
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                  { '@type': 'ListItem', position: 2, name: 'ATS Guide', item: 'https://cv-prime.in/ats-guide' },
                  { '@type': 'ListItem', position: 3, name: 'By System', item: 'https://cv-prime.in/ats-guide/system' },
                  { '@type': 'ListItem', position: 4, name: `${system.name}`, item: `https://cv-prime.in/ats-guide/system/${params.system}` },
                ],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: system.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            },
          ]),
        }}
      />
    </main>
  );
}
