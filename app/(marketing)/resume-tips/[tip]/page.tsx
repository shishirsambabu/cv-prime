import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';
import { RelatedResumeTips } from '@/components/marketing/RelatedResumeTips';
import { resumeTipMoreMap, resumeTipMoreSlugs } from '@/lib/resumeTipsMore';

interface PageProps {
  params: { tip: string };
}

export const dynamicParams = false;

export function generateStaticParams(): { tip: string }[] {
  return resumeTipMoreSlugs.map((tip) => ({ tip }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const data = resumeTipMoreMap[params.tip];
  if (!data) return {};
  const url = `https://cv-prime.in/resume-tips/${data.slug}`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${data.metaTitle} | CV Prime`,
      description: data.metaDescription,
      url,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${data.navLabel} — CV Prime` }],
    },
    twitter: { card: 'summary_large_image', title: data.metaTitle, description: data.metaDescription },
  };
}

export default function ResumeTipPage({ params }: PageProps): JSX.Element {
  const data = resumeTipMoreMap[params.tip];
  if (!data) notFound();
  const url = `https://cv-prime.in/resume-tips/${data.slug}`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
      { '@type': 'ListItem', position: 2, name: 'Resume Tips', item: 'https://cv-prime.in/resume-tips' },
      { '@type': 'ListItem', position: 3, name: data.navLabel, item: url },
    ],
  };
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.h1,
    description: data.metaDescription,
    url,
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
    publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
  };

  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/resume-tips" className="hover:text-white">Resume Tips</Link>
            <span>/</span>
            <span className="text-white">{data.navLabel}</span>
          </nav>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">{data.h1}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{data.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong">
              Improve my resume with AI <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ats-checker" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-white/40">
              Free ATS checker →
            </Link>
          </div>
        </div>
      </section>

      <article className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-brand/30 bg-brand/5 p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand">{data.verdictLabel}</p>
            <p className="mt-3 text-lg font-semibold leading-8">{data.verdict}</p>
          </div>

          {data.sections.map((s) => (
            <section key={s.heading} className="mt-12">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">{s.heading}</h2>
              <p className="mt-4 leading-7 text-slate-300">{s.body}</p>
              {s.points && (
                <ul className="mt-5 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>

      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">{data.navLabel} — FAQ</h2>
          <div className="mt-8 space-y-5">
            {data.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedResumeTips items={data.related} />

      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">Put these tips into your resume in minutes</h2>
          <p className="mt-4 text-slate-300">CV Prime&apos;s AI tailors your resume to the job description and checks it for ATS compatibility.</p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
            Build my resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Improve my resume with AI" message="Tailor your resume to any job description in minutes" />
    </main>
  );
}
