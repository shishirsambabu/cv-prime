import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, Linkedin } from 'lucide-react';
import { roles, roleMap, roleSlugs } from '@/lib/roleData';
import { linkedinMap } from '@/lib/linkedinData';

interface PageProps {
  params: { role: string };
}

export async function generateStaticParams() {
  return roleSlugs.map((slug) => ({ role: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const role = roleMap.get(params.role);
  if (!role) return { title: 'LinkedIn Headline Examples — CV Prime' };

  return {
    title: `${role.displayTitle} LinkedIn Headline Examples — India 2026 | CV Prime`,
    description: `5 proven LinkedIn headline examples for ${role.displayTitle} professionals in India. Keywords, tips, and templates to help you attract recruiters and stand out in search.`,
    keywords: [
      `${role.displayTitle.toLowerCase()} linkedin headline`,
      `${role.displayTitle.toLowerCase()} linkedin profile india`,
      `linkedin headline for ${role.displayTitle.toLowerCase()}`,
      `${role.slug} linkedin examples india`,
      `best linkedin headline ${role.displayTitle.toLowerCase()} india 2026`,
    ],
    alternates: { canonical: `https://cv-prime.in/linkedin-headline/${role.slug}` },
    openGraph: {
      title: `${role.displayTitle} LinkedIn Headline Examples — CV Prime`,
      description: `Proven LinkedIn headline examples and keyword tips for ${role.displayTitle} professionals in India.`,
      url: `https://cv-prime.in/linkedin-headline/${role.slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${role.displayTitle} LinkedIn Headline Examples` }],
    },
  };
}

export default function LinkedinHeadlinePage({ params }: PageProps): JSX.Element {
  const role = roleMap.get(params.role);
  if (!role) notFound();

  const data = linkedinMap[params.role];
  if (!data) notFound();

  const relatedRoles = roles.filter((r) => r.slug !== role.slug).slice(0, 4);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-5 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/linkedin-headline" className="hover:text-white">LinkedIn Headline</Link>
            <span>/</span>
            <span className="text-white">{role.displayTitle}</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <Linkedin className="h-4 w-4" />
            LinkedIn headline guide
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {role.displayTitle} LinkedIn headline examples — India 2026
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Five proven LinkedIn headline examples for {role.displayTitle} professionals in India — plus keywords to include and tips to help recruiters find you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong">
              Build my {role.displayTitle} CV free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={`/cv-examples/${role.slug}`} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-bold text-white hover:border-white/40">
              See CV example
            </Link>
          </div>
        </div>
      </section>

      {/* Headline examples */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold">5 LinkedIn headline examples for {role.displayTitle} roles</h2>
          <p className="mt-3 text-slate-600">Copy, adapt, and personalise these headlines with your own company, metrics, and skills.</p>
          <div className="mt-8 space-y-4">
            {data.headlines.map((headline, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Example {i + 1}</p>
                <p className="font-display text-base font-semibold leading-snug text-slate-900">{headline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keywords */}
      <section className="bg-slate-50 px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold">Keywords to include in your {role.displayTitle} LinkedIn headline</h2>
          <p className="mt-3 text-slate-600">
            LinkedIn search ranks profiles that match recruiter keywords. Work these terms into your headline naturally.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {data.keywords.map((kw) => (
              <span key={kw} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold">Tips for writing a strong {role.displayTitle} LinkedIn headline</h2>
          <ul className="mt-6 space-y-3">
            {data.tips.map((tip) => (
              <li key={tip} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-500" />
                <span className="text-sm leading-6 text-slate-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cross-links */}
      <section className="bg-slate-50 px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-xl font-bold mb-6">More resources for {role.displayTitle} job seekers</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href={`/cv-examples/${role.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-cyan-300 hover:shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">CV example</p>
              <p className="mt-2 font-display font-bold text-slate-900 group-hover:text-cyan-700">
                {role.displayTitle} CV example →
              </p>
              <p className="mt-1 text-sm text-slate-500">ATS-optimised CV template and writing guide</p>
            </Link>
            <Link
              href={`/interview-questions/${role.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-cyan-300 hover:shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Interview prep</p>
              <p className="mt-2 font-display font-bold text-slate-900 group-hover:text-cyan-700">
                {role.displayTitle} interview questions →
              </p>
              <p className="mt-1 text-sm text-slate-500">Model answers for top interview questions</p>
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Ready to match your LinkedIn headline with a strong CV? Use CV Prime — a <Link href="/" className="underline hover:text-slate-700">free CV maker</Link> and <Link href="/ai-cv-builder" className="underline hover:text-slate-700">free AI CV builder</Link> built for India.
          </p>
        </div>
      </section>

      {/* Related roles */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-xl font-bold">LinkedIn headline guides for other roles</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedRoles.map((r) => (
              <Link key={r.slug} href={`/linkedin-headline/${r.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-cyan-300 hover:shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{r.industry}</p>
                <p className="mt-2 font-display font-bold text-slate-900">{r.displayTitle}</p>
                <p className="mt-1 text-sm text-cyan-600">Headline examples →</p>
              </Link>
            ))}
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
              headline: `${role.displayTitle} LinkedIn Headline Examples — India 2026`,
              description: `5 proven LinkedIn headline examples for ${role.displayTitle} professionals in India. Keywords, tips, and templates to attract recruiters.`,
              url: `https://cv-prime.in/linkedin-headline/${role.slug}`,
              author: { '@type': 'Organization', name: 'CV Prime' },
              publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                  { '@type': 'ListItem', position: 2, name: 'LinkedIn Headline', item: 'https://cv-prime.in/linkedin-headline' },
                  { '@type': 'ListItem', position: 3, name: role.displayTitle, item: `https://cv-prime.in/linkedin-headline/${role.slug}` },
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
