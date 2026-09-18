import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { industries, industryMap, industrySlugs } from '@/lib/industryData';

export async function generateStaticParams(): Promise<Array<{ industry: string }>> {
  return industrySlugs.map((industry) => ({ industry }));
}

export async function generateMetadata({ params }: { params: { industry: string } }): Promise<Metadata> {
  const industry = industryMap.get(params.industry);
  if (!industry) return {};

  const title = `${industry.name} Resume Examples & ATS Keywords — 2026`;
  const description = `Resume examples, ATS keywords, in-demand skills, and salary data for ${industry.roles.length} ${industry.name.toLowerCase()} roles in India: ${industry.roles.slice(0, 4).map((r) => r.displayTitle).join(', ')} and more.`;
  const url = `https://cv-prime.in/industries/${industry.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    keywords: [
      `${industry.name.toLowerCase()} resume examples`,
      `${industry.name.toLowerCase()} resume india`,
      `${industry.name.toLowerCase()} cv examples`,
      `best resume format for ${industry.name.toLowerCase()}`,
      `${industry.name.toLowerCase()} ats keywords`,
    ],
    openGraph: {
      title,
      description,
      url,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${industry.name} Resume Examples — CV Prime` }],
    },
  };
}

export default function IndustryPage({ params }: { params: { industry: string } }): JSX.Element {
  const industry = industryMap.get(params.industry);
  if (!industry) notFound();

  const url = `https://cv-prime.in/industries/${industry.slug}`;
  const faqs = [
    {
      q: `What resume format works best for ${industry.name.toLowerCase()} roles in India?`,
      a: `A single-column, ATS-readable format performs best across ${industry.name.toLowerCase()} roles — no tables, text boxes, or graphics that break automated parsers. Beyond format, the keywords and metrics that matter differ by role: use the role-specific examples below for the exact skills and achievement metrics recruiters in this sector screen for.`,
    },
    {
      q: `What skills should I highlight on a ${industry.name.toLowerCase()} resume?`,
      a: `${industry.keySkills.slice(0, 8).join(', ')} are among the most commonly screened-for skills across ${industry.name.toLowerCase()} roles on CV Prime. Match these against the specific job description you're applying to rather than listing all of them — ATS systems score relevance, not volume.`,
    },
    {
      q: `Which companies in India hire for ${industry.name.toLowerCase()} roles?`,
      a: `${industry.topCompanies.slice(0, 8).join(', ')} are among the employers referenced across the ${industry.name.toLowerCase()} role examples on CV Prime. Company-specific expectations vary, so check the individual role page for the companies most relevant to your target employer.`,
    },
  ];

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${industry.name} Resume Examples — CV Prime`,
    description: industry.blurb,
    url,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
        { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://cv-prime.in/industries' },
        { '@type': 'ListItem', position: 3, name: industry.name, item: url },
      ],
    },
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: industry.roles.map((role, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${role.displayTitle} Resume Example`,
      url: `https://cv-prime.in/resume-examples/${role.slug}`,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav className="border-b border-white/10 bg-slate-950 px-5 py-4 text-sm text-slate-400">
        <div className="mx-auto max-w-5xl">
          <Link href="/industries" className="hover:text-brand">Industries</Link> / <span className="text-white">{industry.name}</span>
        </div>
      </nav>

      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {industry.name} resume examples — 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">{industry.blurb}</p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Build my resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold text-white">{industry.name} roles covered</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industry.roles.map((role) => (
              <div
                key={role.slug}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm transition hover:border-brand hover:shadow-md"
              >
                <Link href={`/resume-examples/${role.slug}`} className="block">
                  <h3 className="font-display text-lg font-bold text-white">{role.displayTitle}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400 line-clamp-2">{role.salaryRange}</p>
                </Link>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <Link href={`/ats-guide/${role.slug}`} className="rounded-full border border-white/10 px-2.5 py-1 text-slate-400 hover:border-brand hover:text-brand">
                    ATS guide
                  </Link>
                  <Link href={`/salary/${role.slug}`} className="rounded-full border border-white/10 px-2.5 py-1 text-slate-400 hover:border-brand hover:text-brand">
                    Salary data
                  </Link>
                </div>
                <Link href={`/resume-examples/${role.slug}`} className="mt-4 flex items-center gap-1 text-sm font-bold text-brand opacity-0 transition group-hover:opacity-100">
                  See resume example <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-5xl grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-bold text-white">Most in-demand {industry.name.toLowerCase()} skills</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {industry.keySkills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-white">Companies hiring in {industry.name}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {industry.topCompanies.map((company) => (
                <span key={company} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300">{company}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">{industry.name} resume FAQ</h2>
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

      <section className="border-t border-white/10 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-white">More industries</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {industries.filter((i) => i.slug !== industry.slug).slice(0, 8).map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 hover:border-brand hover:text-brand transition">
                {i.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Build a {industry.name.toLowerCase()} resume that passes ATS</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Paste a job description and CV Prime&apos;s AI tailors your resume, scores your ATS match, and lets you export a clean PDF — free to start.
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
