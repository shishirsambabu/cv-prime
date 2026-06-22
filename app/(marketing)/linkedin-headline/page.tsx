import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Linkedin } from 'lucide-react';
import { roles } from '@/lib/roleData';

export const metadata: Metadata = {
  title: 'LinkedIn Headline Examples for Indian Professionals — 2026 | CV Prime',
  description: 'Free LinkedIn headline examples for 35 job roles in India. Keyword-rich templates and tips to help you attract recruiters and rank higher in LinkedIn search.',
  alternates: { canonical: 'https://cv-prime.in/linkedin-headline' },
  openGraph: {
    title: 'LinkedIn Headline Examples for Indian Professionals — 2026 | CV Prime',
    description: 'LinkedIn headline examples and tips for 35 roles in India. Stand out in recruiter searches.',
    url: 'https://cv-prime.in/linkedin-headline',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'LinkedIn Headline Examples India 2026' }],
  },
};

export default function LinkedinHeadlineIndexPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
            { '@type': 'ListItem', position: 2, name: 'LinkedIn Headline Examples', item: 'https://cv-prime.in/linkedin-headline' },
          ],
        }) }}
      />
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-5 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">LinkedIn Headline</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <Linkedin className="h-4 w-4" />
            LinkedIn headline guide
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            LinkedIn headline examples — India 2026
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Proven LinkedIn headline examples for 35 roles across tech, finance, marketing, and more. Keyword-optimised templates written for Indian professionals and the recruiters who search for them.
          </p>
        </div>
      </section>

      {/* Role grid */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 text-sm text-slate-500">{roles.length} roles covered</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <Link
                key={role.slug}
                href={`/linkedin-headline/${role.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-cyan-300 hover:shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{role.industry}</p>
                <p className="mt-2 font-display text-lg font-bold leading-snug text-slate-900 group-hover:text-cyan-700">
                  {role.displayTitle}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-slate-500">5 headline examples</span>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-cyan-600">
                    View <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section className="border-t border-slate-100 px-5 py-12">
        <div className="mx-auto max-w-6xl">
          <p className="font-display text-sm font-bold uppercase tracking-wider text-slate-500">More LinkedIn & career resources</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { href: '/blog/how-to-crack-linkedin-india-2026', label: 'LinkedIn profile guide India 2026' },
              { href: '/blog/job-interview-tips-india-2026', label: 'Interview tips India 2026' },
              { href: '/interview-questions', label: 'Interview questions by role' },
              { href: '/cv-examples', label: 'CV examples by role' },
              { href: '/ats-checker', label: 'Free ATS checker' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-cyan-400 hover:text-cyan-700 transition">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-5 py-14">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-cyan-200 bg-cyan-50 p-8 text-center">
          <h2 className="font-display text-2xl font-bold">A great LinkedIn headline deserves an equally strong CV.</h2>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-700">
            Build an ATS-optimised CV that passes recruiter screening — and pair it with a headline that makes them click your profile.
          </p>
          <Link
            href="/signup"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-8 py-3 text-sm font-bold text-white hover:bg-slate-800"
          >
            Build my CV free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
