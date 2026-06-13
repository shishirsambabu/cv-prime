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
    title: `${role.displayTitle} LinkedIn Headline Examples — India 2025 | CV Prime`,
    description: `5 proven LinkedIn headline examples for ${role.displayTitle} professionals in India. Keywords to include, tips for writing a headline that gets recruiter attention.`,
    keywords: [
      `${role.displayTitle.toLowerCase()} linkedin headline`,
      `linkedin headline ${role.displayTitle.toLowerCase()} india`,
      `${role.slug} linkedin profile tips`,
      `best linkedin headline ${role.displayTitle.toLowerCase()}`,
      `${role.displayTitle.toLowerCase()} linkedin summary india 2025`,
    ],
    alternates: { canonical: `https://cv-prime.in/linkedin-headline/${role.slug}` },
    openGraph: {
      title: `${role.displayTitle} LinkedIn Headline Examples — CV Prime`,
      description: `5 proven LinkedIn headline examples for ${role.displayTitle} professionals in India with keywords and writing tips.`,
      url: `https://cv-prime.in/linkedin-headline/${role.slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${role.displayTitle} LinkedIn Headline Examples` }],
    },
  };
}

export default function LinkedinHeadlinePage({ params }: PageProps): JSX.Element {
  const role = roleMap.get(params.role);
  if (!role) notFound();

  const linkedin = linkedinMap[params.role];
  if (!linkedin) notFound();

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
            LinkedIn headline examples
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {role.displayTitle} LinkedIn headline examples — India 2025
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Five proven LinkedIn headline examples for {role.displayTitle.toLowerCase()} professionals in India, plus the keywords recruiters search for and tips to write a headline that gets noticed.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-300">
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
          <h2 className="font-display text-2xl font-bold">5 {role.displayTitle} LinkedIn headline examples</h2>
          <p className="mt-3 leading-7 text-slate-600">
            These headlines are structured to perform well in LinkedIn recruiter search and profile views. Copy, adapt to your background, and update your profile.
          </p>
          <div className="mt-8 space-y-4">
            {linkedin.headlines.map((headline, i) => (
              <div key={i} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Example {i + 1}</p>
                <p className="font-display text-base font-bold leading-relaxed text-slate-900">{headline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keywords */}
      <section className="bg-slate-50 px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold">Keywords to include in your {role.displayTitle} LinkedIn headline</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Include at least 2-3 of these keywords in your headline to appear in recruiter searches for {role.displayTitle.toLowerCase()} roles in India.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {linkedin.keywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-800">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold">Tips for writing a strong {role.displayTitle} LinkedIn headline</h2>
          <ul className="mt-6 space-y-3">
            {linkedin.tips.map((tip) => (
              <li key={tip} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-500" />
                <span className="leading-6 text-slate-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cross-links */}
      <section className="bg-slate-50 px-5 py-12">
        <div className="mx-auto max-w-4xl grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">CV example</p>
            <p className="mt-3 font-display text-lg font-bold">{role.displayTitle} CV Example</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              See a complete, ATS-optimised {role.displayTitle} CV with industry-specific sections and writing tips.
            </p>
            <Link href={`/cv-examples/${role.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan-600 hover:text-cyan-800">
              View CV example <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Interview prep</p>
            <p className="mt-3 font-display text-lg font-bold">{role.displayTitle} Interview Questions</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Top {role.displayTitle.toLowerCase()} interview questions in India with detailed model answers.
            </p>
            <Link href={`/interview-questions/${role.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan-600 hover:text-cyan-800">
              View interview guide <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related roles */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-xl font-bold">LinkedIn headline examples for other roles</h2>
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
    </main>
  );
}
