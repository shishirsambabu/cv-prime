import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, XCircle, Briefcase, Building2 } from 'lucide-react';
import { roleMap, roleSlugs, roles } from './roleData';

interface PageProps {
  params: { role: string };
}

export async function generateStaticParams() {
  return roleSlugs.map((slug) => ({ role: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const role = roleMap.get(params.role);
  if (!role) return { title: 'CV Example — CV Prime' };

  return {
    title: `${role.title} India 2026 — Free Template & Example | CV Prime`,
    description: role.metaDescription,
    keywords: [
      ...role.keywords,
      `${role.displayTitle.toLowerCase()} resume india`,
      `${role.displayTitle.toLowerCase()} cv india 2026`,
      `${role.displayTitle.toLowerCase()} resume format india`,
      `free ${role.displayTitle.toLowerCase()} cv template india`,
    ],
    alternates: {
      canonical: `https://cv-prime.in/cv-examples/${role.slug}`,
    },
    openGraph: {
      title: `${role.title} India 2026 — Free Template | CV Prime`,
      description: role.metaDescription,
      url: `https://cv-prime.in/cv-examples/${role.slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${role.title} — CV Prime` }],
    },
  };
}

export default function RoleCVPage({ params }: PageProps): JSX.Element {
  const role = roleMap.get(params.role);
  if (!role) notFound();

  const relatedRoles = roles.filter((r) => r.slug !== role.slug).slice(0, 4);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/cv-examples" className="hover:text-white">CV Examples</Link>
            <span>/</span>
            <span className="text-white">{role.displayTitle}</span>
          </nav>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {role.heroHeading}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {role.heroSubheading}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Build my {role.displayTitle} CV free
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
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Salary range (India)</p>
              <p className="mt-0.5 font-bold text-slate-900">{role.salaryRange}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Building2 className="mt-0.5 h-5 w-5 text-slate-400" />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Top hiring companies</p>
              <p className="mt-0.5 text-slate-700">{role.topCompanies.slice(0, 5).join(' · ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to include */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                What to include in a {role.displayTitle} CV
              </h2>
              <ul className="mt-8 space-y-4">
                {role.whatToInclude.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                    <span className="leading-6 text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Common {role.displayTitle} CV mistakes
              </h2>
              <ul className="mt-8 space-y-4">
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

      {/* Key skills */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Top skills for a {role.displayTitle} CV
          </h2>
          <p className="mt-3 text-slate-500">
            These keywords are heavily screened in ATS for {role.displayTitle.toLowerCase()} roles. Make sure they appear naturally in your CV.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {role.keySkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-800"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
            <p className="font-bold text-slate-900">Pro tip: use CV Prime&apos;s AI to check your keyword coverage</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Paste the specific {role.displayTitle.toLowerCase()} job description you&apos;re applying to and our AI will score your keyword match, identify gaps, and rewrite your bullets to include the exact terms the ATS is looking for.
            </p>
            <Link
              href="/signup?next=/ai-cv"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-cyan-700 px-6 py-2.5 text-sm font-bold text-white hover:bg-cyan-800"
            >
              Check my keyword score free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            {role.displayTitle} CV — frequently asked questions
          </h2>
          <div className="mt-8 space-y-6">
            {role.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 p-6">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related roles */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold">More CV examples</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedRoles.map((r) => (
              <Link
                key={r.slug}
                href={`/cv-examples/${r.slug}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-cyan-300 hover:shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{r.industry}</p>
                <p className="mt-2 font-display font-bold text-slate-900">{r.displayTitle}</p>
                <p className="mt-1 text-sm text-cyan-600">See CV example →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Build your {role.displayTitle} CV now — free
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Use AI to tailor your CV to the exact {role.displayTitle.toLowerCase()} role you&apos;re applying for. Free to start, takes 10 minutes.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Build my {role.displayTitle} CV free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-5 text-sm text-slate-400">
            CV Prime is a <Link href="/" className="underline hover:text-white">free CV maker</Link> and <Link href="/ai-cv-builder" className="underline hover:text-white">free AI resume builder</Link> for India. No credit card required.
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
              headline: `${role.title} Example & Template for India`,
              description: role.metaDescription,
              url: `https://cv-prime.in/cv-examples/${role.slug}`,
              author: { '@type': 'Organization', name: 'CV Prime' },
              publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                  { '@type': 'ListItem', position: 2, name: 'CV Examples', item: 'https://cv-prime.in/cv-examples' },
                  { '@type': 'ListItem', position: 3, name: role.title, item: `https://cv-prime.in/cv-examples/${role.slug}` },
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
