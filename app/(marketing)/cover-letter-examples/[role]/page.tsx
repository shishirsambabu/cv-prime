import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, XCircle, FileText } from 'lucide-react';
import { roles, roleMap, roleSlugs } from '@/lib/roleData';
import { coverLetterMap } from '@/lib/coverLetterData';

interface PageProps {
  params: { role: string };
}

export async function generateStaticParams() {
  return roleSlugs.map((slug) => ({ role: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const role = roleMap.get(params.role);
  if (!role) return { title: 'Cover Letter Example — CV Prime' };

  return {
    title: `${role.displayTitle} Cover Letter Example — India 2026 | CV Prime`,
    description: `Free ${role.displayTitle} cover letter example for India. Role-specific dos and don'ts, sample paragraphs, and tips to write a cover letter that gets you shortlisted for ${role.displayTitle.toLowerCase()} roles.`,
    keywords: [
      `${role.displayTitle.toLowerCase()} cover letter`,
      `${role.displayTitle.toLowerCase()} cover letter example india`,
      `${role.displayTitle.toLowerCase()} cover letter template`,
      `how to write ${role.displayTitle.toLowerCase()} cover letter india`,
      `${role.slug} cover letter sample`,
      `${role.displayTitle.toLowerCase()} cover letter india 2026`,
    ],
    alternates: { canonical: `https://cv-prime.in/cover-letter-examples/${role.slug}` },
    openGraph: {
      title: `${role.displayTitle} Cover Letter Example — CV Prime`,
      description: `Free ${role.displayTitle} cover letter example with dos, don'ts, and sample paragraphs for Indian job applications.`,
      url: `https://cv-prime.in/cover-letter-examples/${role.slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${role.displayTitle} Cover Letter — CV Prime` }],
    },
  };
}

export default function CoverLetterRolePage({ params }: PageProps): JSX.Element {
  const role = roleMap.get(params.role);
  if (!role) notFound();

  const clData = coverLetterMap[params.role];
  if (!clData) notFound();

  const relatedRoles = roles.filter((r) => r.slug !== role.slug).slice(0, 4);

  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/cover-letter-examples" className="hover:text-white">Cover Letter Examples</Link>
            <span>/</span>
            <span className="text-white">{role.displayTitle}</span>
          </nav>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <FileText className="h-4 w-4" />
            Cover letter guide
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {role.displayTitle} cover letter — example, template & tips for India 2026
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Free {role.displayTitle.toLowerCase()} cover letter example with role-specific dos and don&apos;ts, sample paragraphs you can adapt, and answers to common cover letter questions for {role.displayTitle.toLowerCase()} roles in India.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong"
            >
              Build my {role.displayTitle} CV free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`/cv-examples/${role.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white hover:border-white/40"
            >
              See {role.displayTitle} CV example
            </Link>
          </div>
        </div>
      </section>

      {/* Dos and Don'ts */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                {role.displayTitle} cover letter — dos
              </h2>
              <ul className="mt-8 space-y-4">
                {clData.dos.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                    <span className="leading-6 text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                {role.displayTitle} cover letter — don&apos;ts
              </h2>
              <ul className="mt-8 space-y-4">
                {clData.donts.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                    <span className="leading-6 text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key points */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            What to address in a {role.displayTitle} cover letter
          </h2>
          <p className="mt-3 text-slate-400">
            These are the specific elements hiring managers look for in a {role.displayTitle.toLowerCase()} cover letter.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {clData.keyPoints.map((point, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-300">
                  {i + 1}
                </div>
                <p className="mt-3 leading-6 text-slate-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample cover letter */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            {role.displayTitle} cover letter — sample paragraphs
          </h2>
          <p className="mt-3 text-slate-400">
            Adapt these example paragraphs with your own numbers, company names, and specific achievements. Replace all text in [brackets] with your actual information.
          </p>

          <div className="mt-8 space-y-6">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="border-b border-white/10 bg-white/[0.03] px-6 py-3">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Opening paragraph</p>
              </div>
              <div className="px-6 py-5">
                <p className="leading-7 text-slate-300 italic">&ldquo;{clData.sampleOpening}&rdquo;</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="border-b border-white/10 bg-white/[0.03] px-6 py-3">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Body paragraph — evidence</p>
              </div>
              <div className="px-6 py-5">
                <p className="leading-7 text-slate-300 italic">&ldquo;{clData.sampleBody}&rdquo;</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="border-b border-white/10 bg-white/[0.03] px-6 py-3">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Closing paragraph</p>
              </div>
              <div className="px-6 py-5">
                <p className="leading-7 text-slate-300 italic">&ldquo;{clData.sampleClosing}&rdquo;</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-6">
            <p className="font-bold text-white">Pro tip: pair your cover letter with an ATS-optimised CV</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Your cover letter gets you noticed; your CV gets you shortlisted. Use CV Prime&apos;s AI to tailor your {role.displayTitle.toLowerCase()} CV to the specific job description — matching the exact keywords the ATS is screening for.
            </p>
            <Link
              href="/signup?next=/ai-cv"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-cyan-700 px-6 py-2.5 text-sm font-bold text-white hover:bg-cyan-800"
            >
              Tailor my CV free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            {role.displayTitle} cover letter — frequently asked questions
          </h2>
          <div className="mt-8 space-y-6">
            {clData.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-xl font-bold">More {role.displayTitle} resources</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link
              href={`/cv-examples/${role.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300 hover:shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">CV example</p>
              <p className="mt-2 font-display font-bold text-white group-hover:text-cyan-300">
                {role.displayTitle} CV example →
              </p>
              <p className="mt-1 text-sm text-slate-400">ATS-optimised CV template and guide</p>
            </Link>
            <Link
              href={`/interview-questions/${role.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300 hover:shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Interview prep</p>
              <p className="mt-2 font-display font-bold text-white group-hover:text-cyan-300">
                {role.displayTitle} interview questions →
              </p>
              <p className="mt-1 text-sm text-slate-400">Model answers for top interview questions</p>
            </Link>
            <Link
              href={`/linkedin-headline/${role.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300 hover:shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">LinkedIn</p>
              <p className="mt-2 font-display font-bold text-white group-hover:text-cyan-300">
                {role.displayTitle} LinkedIn headline →
              </p>
              <p className="mt-1 text-sm text-slate-400">Headlines that attract recruiters</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related roles */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-xl font-bold">More cover letter examples</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedRoles.map((r) => (
              <Link
                key={r.slug}
                href={`/cover-letter-examples/${r.slug}`}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300 hover:shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{r.industry}</p>
                <p className="mt-2 font-display font-bold text-white">{r.displayTitle}</p>
                <p className="mt-1 text-sm text-cyan-600">Cover letter example →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Write your {role.displayTitle} cover letter — and build the CV to go with it
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            CV Prime helps you build an ATS-optimised {role.displayTitle.toLowerCase()} CV in minutes. Free to start, no credit card required.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Build my {role.displayTitle} CV free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: `${role.displayTitle} Cover Letter Example & Template — India 2026`,
              description: `Free ${role.displayTitle} cover letter example for India with dos, don'ts, and sample paragraphs.`,
              url: `https://cv-prime.in/cover-letter-examples/${role.slug}`,
              author: { '@type': 'Organization', name: 'CV Prime' },
              publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                  { '@type': 'ListItem', position: 2, name: 'Cover Letter Examples', item: 'https://cv-prime.in/cover-letter-examples' },
                  { '@type': 'ListItem', position: 3, name: `${role.displayTitle} Cover Letter`, item: `https://cv-prime.in/cover-letter-examples/${role.slug}` },
                ],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: clData.faqs.map((faq) => ({
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
