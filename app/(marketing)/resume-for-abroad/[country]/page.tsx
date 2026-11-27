import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { abroadCountries, abroadCountryMap } from '@/lib/abroadResumeData';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export function generateStaticParams(): { country: string }[] {
  return abroadCountries.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: { params: { country: string } }): Promise<Metadata> {
  const c = abroadCountryMap.get(params.country);
  if (!c) return {};
  const title = `${c.name} ${c.documentTerm === 'resume' ? 'Resume' : 'CV'} Format for Indians 2026 — Rules, Length & Tips`;
  const description = `How to write a ${c.name}-style ${c.documentTerm} as an Indian applicant: length (${c.length.toLowerCase()}), photo rules, personal details, paper size, visa notes and common mistakes. Build it free with CV Prime.`;
  const url = `https://cv-prime.in/resume-for-abroad/${c.slug}`;
  return {
    title,
    description,
    keywords: [
      `${c.name} resume format for indians`,
      `${c.name} cv format india`,
      `indian resume to ${c.name} resume`,
      `resume for ${c.name} jobs from india`,
      `${c.name} resume photo`,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | CV Prime`,
      description,
      url,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${c.name} resume format for Indian applicants — CV Prime` }],
    },
  };
}

export default function AbroadCountryPage({ params }: { params: { country: string } }): JSX.Element {
  const c = abroadCountryMap.get(params.country);
  if (!c) notFound();

  const others = abroadCountries.filter((x) => x.slug !== c.slug);
  const url = `https://cv-prime.in/resume-for-abroad/${c.slug}`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
      { '@type': 'ListItem', position: 2, name: 'Resume for abroad', item: 'https://cv-prime.in/resume-for-abroad' },
      { '@type': 'ListItem', position: 3, name: c.name, item: url },
    ],
  };

  const quickFacts: { label: string; value: string }[] = [
    { label: 'Name of the document', value: c.documentTerm },
    { label: 'Length', value: c.length },
    { label: 'Photo', value: c.photo },
    { label: 'Personal details', value: c.personalDetails },
    { label: 'Paper size', value: c.paperSize },
  ];

  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden bg-slate-950 px-5 py-24">
        <div className="relative mx-auto max-w-4xl">
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/resume-for-abroad" className="hover:text-white">Resume for abroad</Link>
            <span>/</span>
            <span className="text-slate-300">{c.name}</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {c.name} {c.documentTerm === 'resume' ? 'resume' : 'CV'} format for Indian applicants
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {c.tagline}: what {c.name} employers expect, what to delete from your Indian resume, and how to keep it ATS-friendly. Build it in CV Prime and export a clean PDF.
          </p>
          <div className="mt-9">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Build my {c.name} {c.documentTerm === 'resume' ? 'resume' : 'CV'} free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">{c.name} resume rules at a glance</h2>
          <p className="mt-3 text-slate-300">
            In {c.name}, the standard document is usually called a {c.documentTerm}. {c.length}. {c.photo}.
          </p>
          <dl className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04]">
            {quickFacts.map((f) => (
              <div key={f.label} className="grid gap-1 p-4 sm:grid-cols-[180px_1fr]">
                <dt className="text-sm font-bold text-slate-400">{f.label}</dt>
                <dd className="text-sm leading-6 text-slate-200">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white/[0.03] px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Indian resume vs {c.name} resume: what to change</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-white/[0.06] text-slate-300">
                <tr>
                  <th className="p-3 font-bold">Topic</th>
                  <th className="p-3 font-bold">Common in India</th>
                  <th className="p-3 font-bold">{c.name} norm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-slate-300">
                {c.differences.map((d) => (
                  <tr key={d.topic}>
                    <td className="p-3 font-semibold text-white">{d.topic}</td>
                    <td className="p-3">{d.indiaHabit}</td>
                    <td className="p-3">{d.localNorm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-bold">Do this</h2>
            <ul className="mt-4 space-y-3">
              {c.tips.map((t) => (
                <li key={t} className="flex gap-2 text-sm leading-6 text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold">Avoid this</h2>
            <ul className="mt-4 space-y-3">
              {c.mistakes.map((t) => (
                <li key={t} className="flex gap-2 text-sm leading-6 text-slate-300">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-sm leading-7 text-slate-300">
            <span className="font-semibold text-slate-200">Visa and work authorisation:</span> {c.visaNote}
          </p>
          <p className="mt-3 text-xs text-slate-400">
            Hiring conventions and immigration rules change. Treat this as a general guide and confirm current requirements with the employer or the official government source.
          </p>
        </div>
      </section>

      <section className="bg-white/[0.03] px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">{c.name} resume for Indians — FAQ</h2>
          <div className="mt-8 space-y-5">
            {c.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-display text-base font-bold text-white">{faq.q}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Other country formats</p>
          <div className="flex flex-wrap gap-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/resume-for-abroad/${o.slug}`} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-brand hover:text-brand">
                {o.name} format →
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link href="/ats-checker" className="font-semibold text-brand hover:underline">Free ATS checker</Link>
            <Link href="/resume-vs-cv" className="font-semibold text-brand hover:underline">Resume vs CV</Link>
            <Link href="/tailor-resume-to-job-description" className="font-semibold text-brand hover:underline">Tailor your resume to a JD</Link>
            <Link href="/cover-letter-generator" className="font-semibold text-brand hover:underline">Cover letter generator</Link>
          </div>
        </div>
      </section>
      <StickyCTA />
    </main>
  );
}
