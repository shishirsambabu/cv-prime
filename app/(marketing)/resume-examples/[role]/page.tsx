import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, XCircle, Briefcase, Building2 } from 'lucide-react';
import { roleMap, roleSlugs, roles } from '@/lib/roleData';

interface PageProps {
  params: { role: string };
}

export async function generateStaticParams() {
  return roleSlugs.map((slug) => ({ role: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const role = roleMap.get(params.role);
  if (!role) return { title: 'Resume Example — CV Prime' };

  const resumeTitle = role.displayTitle;
  const resumeKeywords = role.keywords.map((k) => k.replace(/\bcv\b/gi, 'resume').replace(/\bCV\b/g, 'Resume'));

  return {
    title: `${resumeTitle} Resume Example & Template — Free 2026 | CV Prime`,
    description: `Free ${resumeTitle.toLowerCase()} resume example for India 2026. ATS-optimised resume sample with skills, experience bullets, and writing tips. See what to include and what to avoid on a ${resumeTitle.toLowerCase()} resume.`,
    keywords: [
      `${resumeTitle.toLowerCase()} resume example`,
      `${resumeTitle.toLowerCase()} resume`,
      `${resumeTitle.toLowerCase()} resume india`,
      `${resumeTitle.toLowerCase()} resume template`,
      `${resumeTitle.toLowerCase()} resume sample`,
      ...resumeKeywords,
    ],
    alternates: {
      canonical: `https://cv-prime.in/resume-examples/${role.slug}`,
    },
    openGraph: {
      title: `${resumeTitle} Resume Example — Free Template 2026 | CV Prime`,
      description: `Free ${resumeTitle.toLowerCase()} resume example with ATS keywords, writing tips, and salary data for India 2026.`,
      url: `https://cv-prime.in/resume-examples/${role.slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${resumeTitle} Resume Example — CV Prime` }],
    },
  };
}

export default function RoleResumePage({ params }: PageProps): JSX.Element {
  const role = roleMap.get(params.role);
  if (!role) notFound();

  const relatedRoles = roles.filter((r) => r.slug !== role.slug).slice(0, 4);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: role.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${role.displayTitle} Resume Example & Template for India 2026`,
    description: `Free ${role.displayTitle.toLowerCase()} resume example with ATS keywords, writing tips, and salary data.`,
    url: `https://cv-prime.in/resume-examples/${role.slug}`,
    author: { '@type': 'Organization', name: 'CV Prime' },
    publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
        { '@type': 'ListItem', position: 2, name: 'Resume Examples', item: 'https://cv-prime.in/resume-examples' },
        { '@type': 'ListItem', position: 3, name: `${role.displayTitle} Resume`, item: `https://cv-prime.in/resume-examples/${role.slug}` },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/resume-examples" className="hover:text-white transition">Resume Examples</Link>
            <span>/</span>
            <span className="text-white">{role.displayTitle}</span>
          </nav>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {role.displayTitle} Resume Example — template & writing guide 2026
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {role.heroSubheading.replace(/\bCV\b/g, 'resume').replace(/\bcv\b/gi, 'resume')}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Build my {role.displayTitle} resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Browse templates
            </Link>
          </div>
        </div>
      </section>

      {/* Salary + Companies */}
      <section className="border-b border-slate-100 px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-8">
          <div className="flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-slate-400" />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Salary range (India 2026)</p>
              <p className="mt-0.5 font-bold text-slate-900">{role.salaryRange}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Building2 className="mt-0.5 h-5 w-5 text-slate-400" />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Top hiring companies</p>
              <p className="mt-0.5 text-slate-700">{role.topCompanies.slice(0, 6).join(' · ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to include + Mistakes */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                What to include in a {role.displayTitle} resume
              </h2>
              <p className="mt-3 text-sm text-slate-500">The sections and signals ATS and recruiters look for</p>
              <ul className="mt-6 space-y-4">
                {role.whatToInclude.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span className="leading-6 text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Common {role.displayTitle} resume mistakes
              </h2>
              <p className="mt-3 text-sm text-slate-500">The errors that cost most candidates their callbacks</p>
              <ul className="mt-6 space-y-4">
                {role.commonMistakes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                    <span className="leading-6 text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key skills / ATS keywords */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Top ATS keywords for a {role.displayTitle} resume
          </h2>
          <p className="mt-3 text-slate-500">
            These skills are heavily screened by ATS for {role.displayTitle.toLowerCase()} roles. Ensure they appear naturally in your skills section and experience bullets.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {role.keySkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-brand/30 bg-brand/5 px-4 py-2 text-sm font-semibold text-brand"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-brand/20 bg-brand/5 p-6">
            <p className="font-bold text-slate-900">Check your keyword coverage — free</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Paste the specific {role.displayTitle.toLowerCase()} job description you&apos;re applying to and CV Prime will score your keyword match, show you the gaps, and rewrite your bullets with AI to include the exact terms the ATS is looking for.
            </p>
            <Link
              href="/signup?next=/ai-cv"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-brand-foreground hover:bg-brand-strong transition"
            >
              Check my keyword score free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Resume vs CV note */}
      <section className="border-y border-slate-100 px-5 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-6">
            <div>
              <p className="font-semibold text-slate-900">Resume vs CV: which should a {role.displayTitle} use in India?</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                In India, &quot;resume&quot; and &quot;CV&quot; are often used interchangeably for {role.displayTitle.toLowerCase()} roles. The standard length for corporate applications is 1–2 pages (resume format). A full-length CV (curriculum vitae) is typically only needed for academic, research, or government positions. CV Prime produces both formats — use the 1–2 page format for all standard {role.displayTitle.toLowerCase()} applications.
              </p>
              <Link href="/resume-vs-cv" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
                Resume vs CV — full guide <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            {role.displayTitle} resume — frequently asked questions
          </h2>
          <div className="mt-8 space-y-6">
            {role.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="font-display text-lg font-bold text-slate-950">
                  {faq.q.replace(/\bCV\b/g, 'resume').replace(/\bcv\b/gi, 'resume')}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {faq.a.replace(/\bCV\b/g, 'resume').replace(/\bcv\b/gi, 'resume')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related roles */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-2xl font-bold">More resume examples</h2>
            <Link href="/resume-examples" className="text-sm font-semibold text-brand hover:underline">
              View all 35 roles →
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedRoles.map((r) => (
              <Link
                key={r.slug}
                href={`/resume-examples/${r.slug}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand hover:shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{r.industry}</p>
                <p className="mt-2 font-display font-bold text-slate-900">{r.displayTitle}</p>
                <p className="mt-1 text-sm font-semibold text-brand">See resume example →</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/cv-examples/${role.slug}`} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand hover:text-brand transition">
              {role.displayTitle} CV example →
            </Link>
            <Link href={`/interview-questions/${role.slug}`} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand hover:text-brand transition">
              {role.displayTitle} interview questions →
            </Link>
            <Link href="/resume-checker" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand hover:text-brand transition">
              Free resume checker →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Build your {role.displayTitle} resume now — free
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Paste the job description and let AI tailor your resume with the right keywords, stronger bullets, and a clear summary — all matched to the exact role.
          </p>
          <Link
            href="/signup?next=/ai-cv"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition"
          >
            Build my {role.displayTitle} resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-5 text-sm text-slate-400">
            CV Prime is a <Link href="/resume-builder" className="underline hover:text-white">free AI resume builder</Link> and <Link href="/ats-checker" className="underline hover:text-white">free ATS checker</Link> for India. No credit card required.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: `${role.displayTitle} Resume Example & Template — India 2026`,
              description: role.metaDescription,
              url: `https://cv-prime.in/resume-examples/${role.slug}`,
              datePublished: '2026-01-01',
              dateModified: new Date().toISOString().split('T')[0],
              author: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
              publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in', logo: { '@type': 'ImageObject', url: 'https://cv-prime.in/logo.png' } },
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                  { '@type': 'ListItem', position: 2, name: 'Resume Examples', item: 'https://cv-prime.in/resume-examples' },
                  { '@type': 'ListItem', position: 3, name: `${role.displayTitle} Resume`, item: `https://cv-prime.in/resume-examples/${role.slug}` },
                ],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: role.faqs.map((faq) => ({
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
