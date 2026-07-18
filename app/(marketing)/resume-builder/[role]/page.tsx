import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, XCircle, Briefcase } from 'lucide-react';
import { roleMap, roleSlugs } from '@/lib/roleData';
import { cityMetaMap, matrixCitySlugs, matrixRoleSlugs } from '@/lib/roleCityData';

interface PageProps {
  params: { role: string };
}

export async function generateStaticParams() {
  return roleSlugs.map((slug) => ({ role: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const role = roleMap.get(params.role);
  if (!role) return { title: 'Resume Builder — CV Prime' };

  return {
    title: `Free ${role.displayTitle} Resume Builder — AI-Powered & ATS-Ready | CV Prime`,
    description: `Build a free ${role.displayTitle} resume with AI. Paste any job description and CV Prime tailors your resume with the right keywords, stronger bullets, and ATS-ready formatting — in minutes.`,
    keywords: [
      ...role.keywords,
      `${role.displayTitle.toLowerCase()} resume builder`,
      `free ${role.displayTitle.toLowerCase()} resume builder`,
      `${role.displayTitle.toLowerCase()} resume builder india`,
      `ai ${role.displayTitle.toLowerCase()} resume builder`,
      `${role.displayTitle.toLowerCase()} resume maker`,
      `${role.displayTitle.toLowerCase()} resume builder free`,
    ],
    alternates: {
      canonical: `https://cv-prime.in/resume-builder/${role.slug}`,
    },
    openGraph: {
      title: `Free ${role.displayTitle} Resume Builder — AI-Powered & ATS-Ready | CV Prime`,
      description: `Build a free ${role.displayTitle} resume with AI. Paste any job description and CV Prime tailors your resume with the right keywords, stronger bullets, and ATS-ready formatting — in minutes.`,
      url: `https://cv-prime.in/resume-builder/${role.slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `Free ${role.displayTitle} Resume Builder — CV Prime` }],
    },
  };
}

export default function RoleResumeBuilderPage({ params }: PageProps): JSX.Element {
  const role = roleMap.get(params.role);
  if (!role) notFound();

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `Free ${role.displayTitle} Resume Builder — AI-Powered & ATS-Ready`,
      description: `Build a free ${role.displayTitle} resume with AI. Paste any job description and CV Prime tailors your resume with the right keywords, stronger bullets, and ATS-ready formatting — in minutes.`,
      url: `https://cv-prime.in/resume-builder/${role.slug}`,
      author: { '@type': 'Organization', name: 'CV Prime' },
      publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
          { '@type': 'ListItem', position: 2, name: 'Resume Builder', item: 'https://cv-prime.in/resume-builder' },
          {
            '@type': 'ListItem',
            position: 3,
            name: `${role.displayTitle} Resume Builder`,
            item: `https://cv-prime.in/resume-builder/${role.slug}`,
          },
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
  ];

  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/resume-builder" className="hover:text-white">Resume Builder</Link>
            <span>/</span>
            <span className="text-white">{role.displayTitle}</span>
          </nav>

          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Free {role.displayTitle} Resume Builder — AI-Powered
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build an ATS-ready {role.displayTitle.toLowerCase()} resume in minutes. Paste any job description and CV Prime&apos;s AI adds the right keywords, rewrites weak bullets, scores your ATS match, and exports a recruiter-ready PDF — optimised for the India job market.
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
              href={`/cv-examples/${role.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              See {role.displayTitle} CV example
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free plan · ATS scoring · AI tailoring · No credit card required</p>
        </div>
      </section>

      {/* What to include */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            What to include in your {role.displayTitle} resume
          </h2>
          <p className="mt-3 text-slate-400">
            Every section below is scanned by ATS before a recruiter ever sees your application. Make sure you tick each one.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {role.whatToInclude.map((item) => (
              <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                <span className="leading-6 text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key skills */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Key {role.displayTitle} resume skills for ATS
          </h2>
          <p className="mt-3 text-slate-400">
            These keywords are the most screened terms in {role.displayTitle.toLowerCase()} job descriptions. Each one should appear naturally in your resume.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {role.keySkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm font-semibold text-brand"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-brand/20 bg-brand/5 p-6">
            <p className="font-bold text-white">Missing keywords? Let AI find and fix the gaps.</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Paste the {role.displayTitle.toLowerCase()} job description you&apos;re applying to and CV Prime will score your keyword match, flag every gap, and rewrite your bullets to include the exact terms the ATS is looking for.
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

      {/* Common mistakes */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Common {role.displayTitle} resume mistakes to avoid
          </h2>
          <p className="mt-3 text-slate-400">
            These are the most frequent reasons {role.displayTitle.toLowerCase()} resumes get filtered out before a human reads them.
          </p>
          <ul className="mt-10 space-y-4">
            {role.commonMistakes.map((item) => (
              <li key={item} className="flex items-start gap-4 rounded-2xl border border-red-100 bg-red-50 p-5">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <span className="leading-6 text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Top companies */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Top companies hiring {role.displayTitle}s in India
          </h2>
          <p className="mt-3 text-slate-400">
            CV Prime&apos;s AI is calibrated to the ATS patterns used by these companies. Tailor your resume to their exact JD for the best match score.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {role.topCompanies.map((company) => (
              <span
                key={company}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300 shadow-sm"
              >
                <Briefcase className="h-3.5 w-3.5 text-slate-400" />
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            {role.displayTitle} resume builder — FAQ
          </h2>
          <div className="mt-8 space-y-5">
            {role.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-display text-lg font-bold text-white">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City-specific resume guides for this role */}
      {matrixRoleSlugs.includes(role.slug) && (
        <section className="border-t border-white/10 px-5 py-14">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-lg font-bold text-white">
              {role.displayTitle} resume builder by city
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {matrixCitySlugs.map((citySlug) => {
                const city = cityMetaMap[citySlug];
                if (!city) return null;
                return (
                  <Link
                    key={citySlug}
                    href={`/resume-builder/${role.slug}/${citySlug}`}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-brand hover:text-brand"
                  >
                    {role.displayTitle} resume — {city.name} →
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Internal cross-links */}
      <section className="border-t border-white/10 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-white">
            Related {role.displayTitle} resources
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: `/cv-examples/${role.slug}`, label: `${role.displayTitle} CV example` },
              { href: `/resume-examples/${role.slug}`, label: `${role.displayTitle} resume example` },
              { href: `/interview-questions/${role.slug}`, label: `${role.displayTitle} interview questions` },
              { href: `/salary/${role.slug}`, label: `${role.displayTitle} salary in India` },
              { href: '/ats-checker', label: 'Free ATS resume checker' },
              { href: '/resume-builder', label: 'Resume builder — all roles' },
              { href: '/cv-examples', label: 'CV examples by role' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-brand hover:text-brand"
              >
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
            Build your {role.displayTitle} resume — free
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Paste the job description. Let AI tailor your resume with the right keywords, stronger bullets, and an ATS score — in minutes. No credit card required.
          </p>
          <Link
            href="/signup?next=/ai-cv"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
          >
            Build my {role.displayTitle} resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-5 text-sm text-slate-400">
            CV Prime is a <Link href="/" className="underline hover:text-white">free resume builder</Link> and <Link href="/ats-checker" className="underline hover:text-white">ATS checker</Link> built for the India job market.
          </p>
        </div>
      </section>
    </main>
  );
}
