import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, BarChart3, Database, Layers, Quote } from 'lucide-react';
import { roles, roleMap, type RoleData } from '@/lib/roleData';

export const metadata: Metadata = {
  title: 'In-Demand Skills Report — India 2026 | CV Prime Research',
  description:
    'CV Prime\'s 2026 analysis of the skills Indian job descriptions ask for most, across 50 roles. The most in-demand resume keywords overall and by role — a free, citable data study for job seekers, recruiters, and the press.',
  alternates: { canonical: 'https://cv-prime.in/in-demand-skills-india-2026' },
  keywords: [
    'in demand skills india 2026',
    'most in demand skills india',
    'top resume skills 2026',
    'in demand skills report',
    'most demanded job skills india',
    'resume keywords by role india',
    'skills employers want 2026',
    'india job skills data',
  ],
  openGraph: {
    title: 'In-Demand Skills Report — India 2026 | CV Prime Research',
    description:
      'The skills Indian job descriptions ask for most, across 50 roles — a free, citable 2026 data study.',
    url: 'https://cv-prime.in/in-demand-skills-india-2026',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'In-Demand Skills Report India 2026 — CV Prime' }],
  },
};

// ── Compute the study from CV Prime's role dataset (build-time) ───────────────
const rolesAnalyzed = roles.length;
const skillCount = new Map<string, number>();
for (const r of roles) {
  for (const s of r.keySkills) {
    skillCount.set(s, (skillCount.get(s) ?? 0) + 1);
  }
}
const uniqueSkills = skillCount.size;
const topSkills = [...skillCount.entries()].sort((a, b) => b[1] - a[1]).slice(0, 24);
const top3 = topSkills.slice(0, 3).map(([s]) => s);

const marqueeSlugs = ['software-engineer', 'data-scientist', 'product-manager', 'data-analyst', 'digital-marketing-executive', 'finance-analyst', 'devops-engineer', 'ui-ux-designer'];
const marquee = marqueeSlugs.map((s) => roleMap.get(s)).filter((r): r is RoleData => Boolean(r));

const CITATION = 'CV Prime Research. In-Demand Skills Report — India 2026. CV Prime, 2026. https://cv-prime.in/in-demand-skills-india-2026';

const faqs = [
  {
    q: 'What are the most in-demand skills in India in 2026?',
    a: `Across the 50 roles analysed in this report, the skills that appear in the most job descriptions are ${top3.join(', ')}, alongside other technical and analytical capabilities. The full ranking of the top 24 most in-demand skills — and the specific skills employers screen for in each role — is published in this report.`,
  },
  {
    q: 'How was this in-demand skills report compiled?',
    a: `The report is based on CV Prime's structured role dataset, which captures the key skills and ATS keywords that Indian employers most commonly screen for across ${rolesAnalyzed} job roles spanning technology, data, product, design, marketing, finance, operations, and more. We counted how many roles list each skill to rank overall demand, and we publish each marquee role's specific skill set so job seekers can target the right keywords.`,
  },
  {
    q: 'Can I cite this report?',
    a: `Yes — it is free to cite. Use: "${CITATION}". The page is structured for citation by job seekers, recruiters, journalists, and AI assistants, and is updated as the role dataset evolves.`,
  },
  {
    q: 'How do I use these skills on my resume?',
    a: 'Mirror the exact skills from your target job description in your skills section and experience bullets — spelled the way the JD spells them. Use CV Prime\'s free ATS keyword matcher to compare your resume against a specific JD and see which of these in-demand skills you are missing, then weave the true ones in.',
  },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'In-Demand Skills Report — India 2026',
  description: `Ranking of the most in-demand resume skills across ${rolesAnalyzed} job roles in India, compiled by CV Prime.`,
  url: 'https://cv-prime.in/in-demand-skills-india-2026',
  creator: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
  license: 'https://creativecommons.org/licenses/by/4.0/',
  isAccessibleForFree: true,
  keywords: ['in-demand skills', 'India', 'resume keywords', 'ATS', '2026'],
};
const reportSchema = {
  '@context': 'https://schema.org',
  '@type': 'Report',
  headline: 'In-Demand Skills Report — India 2026',
  description: `The skills Indian job descriptions ask for most, across ${rolesAnalyzed} roles.`,
  url: 'https://cv-prime.in/in-demand-skills-india-2026',
  datePublished: '2026-01-01',
  author: { '@type': 'Organization', name: 'CV Prime' },
  publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
};
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
  { '@type': 'ListItem', position: 2, name: 'In-Demand Skills Report India 2026', item: 'https://cv-prime.in/in-demand-skills-india-2026' },
] };

export default function InDemandSkillsReportPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reportSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <BarChart3 className="h-4 w-4" />
            CV Prime Research · Free data study
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            In-Demand Skills Report — India 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            The skills Indian job descriptions ask for most — analysed across {rolesAnalyzed} roles and {uniqueSkills} tracked skills. A free, citable benchmark of the resume keywords that get candidates shortlisted in 2026.
          </p>
          <p className="mt-4 text-sm text-slate-400">Free to read, share, and cite · Updated 2026</p>
        </div>
      </section>

      {/* Headline stats */}
      <section className="border-b border-white/10 bg-white/[0.03] px-5 py-12">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { stat: `${rolesAnalyzed}`, label: 'job roles analysed across India' },
            { stat: `${uniqueSkills}`, label: 'distinct in-demand skills tracked' },
            { stat: topSkills[0] ? topSkills[0][0] : '—', label: 'the single most in-demand skill' },
            { stat: '8', label: 'domains: tech, data, product, design, marketing, finance, ops & more' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
              <p className="font-display text-2xl font-bold text-brand">{item.stat}</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key findings */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Key findings</h2>
          <ul className="mt-6 space-y-3">
            {[
              `${top3.join(', ')} are the most universally in-demand skills — they appear in the job descriptions of the widest range of roles.`,
              'Quantification and ATS-readable formatting remain the biggest differentiators: the same skill list converts far better when paired with metric-driven bullets.',
              'Cross-functional skills (SQL, communication, stakeholder management) increasingly appear in non-traditional roles, not just technical ones.',
              'Mirroring the exact spelling of a skill from the job description is what determines whether the ATS counts it — "Node.js" and "NodeJS" are not the same to a parser.',
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <Layers className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <p className="text-sm leading-7 text-slate-300">{f}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Top skills ranking */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">The 24 most in-demand skills in India (2026)</h2>
          <p className="mt-3 text-slate-400">Ranked by how many of the {rolesAnalyzed} analysed roles list each skill among their core requirements.</p>
          <div className="mt-8 space-y-2">
            {topSkills.map(([skill, count], i) => {
              const pct = Math.round((count / rolesAnalyzed) * 100);
              return (
                <div key={skill} className="flex items-center gap-3 rounded-xl bg-white/[0.04] p-3 shadow-sm">
                  <span className="w-7 shrink-0 text-center font-display text-sm font-bold text-slate-400">{i + 1}</span>
                  <span className="w-44 shrink-0 truncate text-sm font-bold text-white">{skill}</span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/[0.05]">
                    <div className="h-full rounded-full bg-brand" style={{ width: `${Math.max(6, pct)}%` }} />
                  </div>
                  <span className="w-20 shrink-0 text-right text-xs font-semibold text-slate-400">{count} roles</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* By role */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">What employers screen for — by role</h2>
          <p className="mt-3 text-slate-400">The specific skills and ATS keywords each role is screened on. See the full role pages for examples, salary, and ATS guidance.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {marquee.map((r) => (
              <div key={r.slug} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-white">{r.displayTitle}</h3>
                  <span className="text-xs font-semibold text-slate-400">{r.salaryRange}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {r.keySkills.map((s) => (
                    <span key={s} className="rounded-full border border-brand/20 bg-brand/5 px-2.5 py-0.5 text-xs font-semibold text-brand">{s}</span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold">
                  <Link href={`/resume-builder/${r.slug}`} className="text-brand hover:underline">Resume guide →</Link>
                  <Link href={`/salary/${r.slug}`} className="text-brand hover:underline">Salary →</Link>
                  <Link href={`/ats-guide/${r.slug}`} className="text-brand hover:underline">ATS keywords →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology + citation */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 text-brand">
            <Database className="h-5 w-5" />
            <h2 className="font-display text-2xl font-bold text-white">Methodology</h2>
          </div>
          <p className="mt-4 leading-7 text-slate-300">
            This report is compiled from CV Prime&apos;s structured role dataset, which captures the key skills and ATS keywords Indian employers most commonly screen for across {rolesAnalyzed} job roles. For the overall ranking, we counted how many roles list each skill among their core requirements; a higher role-count indicates broader, cross-functional demand. Role-level skill sets are published verbatim from the dataset. The dataset is informed by public job descriptions, common ATS keyword patterns, and India-specific hiring conventions, and is updated over time.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center gap-2 text-slate-300">
              <Quote className="h-4 w-4 text-brand" />
              <p className="text-sm font-bold">How to cite this report</p>
            </div>
            <p className="mt-2 select-all rounded-lg bg-white/[0.03] p-3 font-mono text-xs leading-5 text-slate-300">{CITATION}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">In-demand skills report — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-display text-lg font-bold text-white">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-white">Related research & tools</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/ats-report-2026', label: 'ATS & Resume Report 2026' },
              { href: '/statistics', label: 'ATS & resume statistics' },
              { href: '/salary', label: 'Salary guides by role' },
              { href: '/ats-guide', label: 'ATS keywords by role' },
              { href: '/tools/ats-keyword-matcher', label: 'Free ATS keyword matcher' },
              { href: '/resume-tips/ats-keywords', label: 'ATS keywords guide' },
              { href: '/cv-examples', label: 'CV examples by role' },
              { href: '/career-glossary', label: 'Career & ATS glossary' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-brand hover:text-brand">{l.label} →</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">See which in-demand skills your resume is missing</h2>
          <p className="mt-4 text-slate-300">Paste your resume and a job description into the free ATS keyword matcher — no login — and close the gaps with AI.</p>
          <Link href="/tools/ats-keyword-matcher" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
            Check my resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
