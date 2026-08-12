import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, ShieldCheck, CheckCircle2, XCircle, Key } from 'lucide-react';
import { roleMap, roleSlugs } from '@/lib/roleData';
import { atsGuideDataMap } from '@/lib/atsGuideData';

export function generateStaticParams(): { role: string }[] {
  return roleSlugs.filter((slug) => slug in atsGuideDataMap).map((slug) => ({ role: slug }));
}

export async function generateMetadata({ params }: { params: { role: string } }): Promise<Metadata> {
  const role = roleMap.get(params.role);
  if (!role) return {};
  const title = `ATS CV Guide for ${role.displayTitle}s in India 2026 — Keywords & Formatting`;
  const description = `Pass ATS for ${role.displayTitle} roles in India. Role-specific ATS keywords, must-have CV sections, formatting rules, and the most common ATS failures that get ${role.displayTitle.toLowerCase()} CVs rejected.`;
  return {
    title: `${title} | CV Prime`,
    description,
    keywords: [
      `ats cv ${role.displayTitle.toLowerCase()} india`,
      `ats resume ${role.displayTitle.toLowerCase()} india`,
      `${role.displayTitle.toLowerCase()} cv keywords india`,
      `how to pass ats ${role.displayTitle.toLowerCase()}`,
      `ats friendly cv ${role.displayTitle.toLowerCase()}`,
      `${role.displayTitle.toLowerCase()} resume ats 2026`,
    ],
    alternates: { canonical: `https://cv-prime.in/ats-guide/${params.role}` },
    openGraph: {
      title: `${title} | CV Prime`,
      description,
      url: `https://cv-prime.in/ats-guide/${params.role}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `ATS Guide ${role.displayTitle} — CV Prime` }],
    },
  };
}

export default function AtsGuideRolePage({ params }: { params: { role: string } }): JSX.Element {
  const role = roleMap.get(params.role);
  const ats = atsGuideDataMap[params.role];
  if (!role || !ats) notFound();

  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      {/* Breadcrumb */}
      <nav className="border-b border-white/10 bg-white/[0.04] px-5 py-3">
        <div className="mx-auto flex max-w-4xl items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-cyan-300">Home</Link>
          <span>/</span>
          <Link href="/ats-guide" className="hover:text-cyan-300">ATS Guide</Link>
          <span>/</span>
          <span className="text-white">{role.displayTitle}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <ShieldCheck className="h-4 w-4" />
            ATS guide · India 2026
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            ATS CV guide for {role.displayTitle.toLowerCase()}s in India — 2026
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Pass ATS screening for {role.displayTitle.toLowerCase()} roles in India. Role-specific ATS keywords, must-have CV sections, critical formatting rules, and common ATS failures to avoid.
          </p>
        </div>
      </section>

      {/* ATS Keywords */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <Key className="h-6 w-6 text-cyan-600" />
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              ATS keywords for {role.displayTitle.toLowerCase()} CVs
            </h2>
          </div>
          <p className="mt-3 text-slate-400">
            These are the most frequently screened keywords in {role.displayTitle.toLowerCase()} job descriptions in India. Your CV should include the keywords that match your experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {ats.atsKeywords.map((kw) => (
              <span
                key={kw}
                className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200"
              >
                {kw}
              </span>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-5">
            <p className="text-sm font-semibold text-amber-200">
              Keyword matching tip: Mirror the exact phrasing from the job description — capitalisation and spacing matter. If the JD says &quot;ReactJS&quot;, use &quot;ReactJS&quot;, not &quot;React.js&quot;.
            </p>
          </div>
        </div>
      </section>

      {/* Must-have sections */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Must-have CV sections for {role.displayTitle.toLowerCase()} roles
          </h2>
          <p className="mt-3 text-slate-400">
            ATS systems look for these section labels. Missing sections reduce your parse score.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ats.mustHaveSections.map((section, i) => (
              <div key={section} className="flex items-start gap-3 rounded-2xl bg-white/[0.04] p-5 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                <div>
                  <p className="font-semibold text-white">{section}</p>
                  <p className="mt-0.5 text-xs text-slate-400">Section {i + 1} of {ats.mustHaveSections.length}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formatting rules */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            CV formatting rules to pass ATS for {role.displayTitle.toLowerCase()} roles
          </h2>
          <div className="mt-8 space-y-3">
            {ats.formattingRules.map((rule, i) => (
              <div key={i} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                <p className="leading-7 text-slate-300">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common ATS failures */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Most common ATS failures for {role.displayTitle.toLowerCase()} CVs
          </h2>
          <p className="mt-3 text-slate-400">
            These mistakes cause {role.displayTitle.toLowerCase()} CVs to be filtered out before a human sees them.
          </p>
          <div className="mt-8 space-y-3">
            {ats.commonAtsFailures.map((failure, i) => (
              <div key={i} className="flex gap-4 rounded-2xl border border-red-900/30 bg-red-950/30 p-5">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                <p className="leading-7 text-slate-300">{failure}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keyword tips */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Advanced ATS keyword tips for {role.displayTitle.toLowerCase()}s
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {ats.keywordTips.map((tip, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-600">Tip {i + 1}</p>
                <p className="mt-2 leading-7 text-slate-300">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            ATS for {role.displayTitle.toLowerCase()} roles — frequently asked questions
          </h2>
          <div className="mt-8 space-y-4">
            {ats.faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-display font-bold text-white">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-xl font-bold">Related resources for {role.displayTitle.toLowerCase()}s</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { href: `/cv-examples/${params.role}`, title: `${role.displayTitle} CV Example`, sub: 'ATS-optimised CV guide with writing tips' },
              { href: '/ats-checker', title: 'Free ATS Checker', sub: 'Score your CV against the job description' },
              { href: `/salary/${params.role}`, title: `${role.displayTitle} Salary Guide`, sub: 'Fresher to leadership salary data for India' },
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
          <div className="mt-6 text-center">
            <Link href="/ats-guide" className="text-sm text-slate-400 hover:text-cyan-300">
              ← Back to all ATS guides
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Build an ATS-optimised {role.displayTitle.toLowerCase()} CV
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            CV Prime generates ATS-safe CVs with role-specific keywords and clean formatting. Check your score with our free ATS checker, then build or upgrade your CV.
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
              headline: `ATS CV Guide for ${role.displayTitle}s in India 2026 — Keywords & Formatting`,
              description: `Pass ATS for ${role.displayTitle} roles in India. Role-specific ATS keywords, must-have sections, formatting rules, and common failures.`,
              url: `https://cv-prime.in/ats-guide/${params.role}`,
              datePublished: '2026-01-01',
              dateModified: new Date().toISOString().split('T')[0],
              author: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
              publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in', logo: { '@type': 'ImageObject', url: 'https://cv-prime.in/logo.png' } },
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                  { '@type': 'ListItem', position: 2, name: 'ATS Guide', item: 'https://cv-prime.in/ats-guide' },
                  { '@type': 'ListItem', position: 3, name: `${role.displayTitle} ATS Guide`, item: `https://cv-prime.in/ats-guide/${params.role}` },
                ],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: ats.faqs.map((faq) => ({
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
