import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { abroadCountries } from '@/lib/abroadResumeData';
import { StickyCTA } from '@/components/marketing/StickyCTA';

const url = 'https://cv-prime.in/resume-for-abroad';

export const metadata: Metadata = {
  title: 'Resume for Jobs Abroad from India 2026 — USA, UK, Canada, UAE, Germany Formats',
  description:
    'Applying abroad from India? Compare resume and CV rules for the USA, UK, Canada, Australia, UAE, Germany and Singapore: length, photo, personal details, paper size and visa notes. Free builder included.',
  alternates: { canonical: url },
  keywords: [
    'resume for abroad jobs',
    'indian resume to foreign resume',
    'resume format for jobs abroad',
    'cv for overseas jobs from india',
    'resume vs cv by country',
  ],
  openGraph: {
    title: 'Resume for Jobs Abroad from India 2026 | CV Prime',
    description: 'Country-by-country resume and CV rules for Indian applicants: USA, UK, Canada, Australia, UAE, Germany, Singapore.',
    url,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume for jobs abroad from India — CV Prime' }],
  },
};

export default function ResumeForAbroadPage(): JSX.Element {
  const faqs = [
    {
      q: 'Can I use my Indian resume to apply for jobs abroad?',
      a: 'Not as-is. Remove the photo, date of birth, marital status, father’s name and declaration in most Western markets, switch the paper size where needed, and rewrite duties as measurable results.',
    },
    {
      q: 'Which countries still expect a photo on a resume?',
      a: 'Photos are not used in the USA, UK, Canada or Australia. They are still accepted or traditional in some Gulf and German applications, but are generally optional.',
    },
    {
      q: 'What is the difference between a CV and a resume?',
      a: 'In the USA and Canada a resume is the standard document and CV means an academic one. In the UK, UAE and much of Europe, CV is the everyday word for the same document. See the resume vs CV guide for more.',
    },
  ];
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
      { '@type': 'ListItem', position: 2, name: 'Resume for abroad', item: url },
    ],
  };

  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-slate-950 px-5 py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Resume for jobs abroad: country formats for Indian applicants
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            An Indian-style resume often breaks the rules overseas. Use these country guides to see what to delete, what to add and how long to go, then build it in CV Prime.
          </p>
          <div className="mt-9">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Build my resume free <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Resume rules by country</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-white/[0.06] text-slate-300">
                <tr>
                  <th className="p-3 font-bold">Country</th>
                  <th className="p-3 font-bold">Document</th>
                  <th className="p-3 font-bold">Length</th>
                  <th className="p-3 font-bold">Photo</th>
                  <th className="p-3 font-bold">Paper</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-slate-300">
                {abroadCountries.map((c) => (
                  <tr key={c.slug}>
                    <td className="p-3 font-semibold">
                      <Link href={`/resume-for-abroad/${c.slug}`} className="text-brand hover:underline">{c.name}</Link>
                    </td>
                    <td className="p-3">{c.documentTerm}</td>
                    <td className="p-3">{c.length}</td>
                    <td className="p-3">{c.photo}</td>
                    <td className="p-3">{c.paperSize}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-400">General conventions only; employers and roles vary. Always follow the instructions in the job advert.</p>
        </div>
      </section>

      <section className="bg-white/[0.03] px-5 py-14">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {abroadCountries.map((c) => (
            <Link key={c.slug} href={`/resume-for-abroad/${c.slug}`} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-brand">
              <h3 className="font-display text-lg font-bold">{c.name} format</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{c.tagline}.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">Read guide <ArrowRight className="h-3.5 w-3.5" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Resume for abroad — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-display text-base font-bold text-white">{faq.q}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/resume-vs-cv" className="font-semibold text-brand hover:underline">Resume vs CV</Link>
            <Link href="/ats-checker" className="font-semibold text-brand hover:underline">Free ATS checker</Link>
            <Link href="/resume-format" className="font-semibold text-brand hover:underline">Resume format guide</Link>
          </div>
        </div>
      </section>
      <StickyCTA />
    </main>
  );
}
