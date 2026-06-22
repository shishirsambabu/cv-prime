import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, TrendingUp, MapPin, Building2, Award } from 'lucide-react';
import { roleMap, roleSlugs } from '@/lib/roleData';
import { salaryDataMap } from '@/lib/salaryData';
import { RoleResourceLinks } from '@/components/marketing/RoleResourceLinks';

export function generateStaticParams(): { role: string }[] {
  return roleSlugs.map((slug) => ({ role: slug }));
}

export async function generateMetadata({ params }: { params: { role: string } }): Promise<Metadata> {
  const role = roleMap.get(params.role);
  if (!role) return {};
  const title = `${role.displayTitle} Salary in India 2026 — Fresher to Senior Pay Guide`;
  const description = `${role.displayTitle} salary in India 2026: fresher to leadership pay bands, city-wise breakdown (Bangalore, Mumbai, Hyderabad), company-type comparison (startup vs MNC vs FAANG), and negotiation tips.`;
  return {
    title: `${title} | CV Prime`,
    description,
    keywords: [
      `${role.displayTitle.toLowerCase()} salary india`,
      `${role.displayTitle.toLowerCase()} salary india 2026`,
      `${role.displayTitle.toLowerCase()} salary bangalore`,
      `${role.displayTitle.toLowerCase()} salary fresher india`,
      `${role.displayTitle.toLowerCase()} salary per year india`,
      `how much does a ${role.displayTitle.toLowerCase()} earn in india`,
    ],
    alternates: { canonical: `https://cv-prime.in/salary/${params.role}` },
    openGraph: {
      title: `${title} | CV Prime`,
      description,
      url: `https://cv-prime.in/salary/${params.role}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${role.displayTitle} Salary India — CV Prime` }],
    },
  };
}

export default function SalaryRolePage({ params }: { params: { role: string } }): JSX.Element {
  const role = roleMap.get(params.role);
  const salary = salaryDataMap[params.role];
  if (!role || !salary) notFound();

  const experienceLevels = [
    { label: 'Fresher (0–2 years)', value: salary.byExperience.fresher, color: 'bg-slate-50' },
    { label: 'Mid-level (3–6 years)', value: salary.byExperience.midLevel, color: 'bg-cyan-50' },
    { label: 'Senior (7–12 years)', value: salary.byExperience.senior, color: 'bg-cyan-100' },
    { label: 'Leadership (13+ years)', value: salary.byExperience.leadership, color: 'bg-slate-950 text-white' },
  ];

  const companyTypes = [
    { label: 'Startup', value: salary.byCompanyType.startup, icon: '🚀' },
    { label: 'Mid-size company', value: salary.byCompanyType.midSize, icon: '🏢' },
    { label: 'MNC', value: salary.byCompanyType.mnc, icon: '🌐' },
    { label: 'FAANG / Product tier-1', value: salary.byCompanyType.faang, icon: '⭐' },
  ];

  const cities = [
    { label: 'Bangalore', value: salary.byLocation.bangalore },
    { label: 'Mumbai', value: salary.byLocation.mumbai },
    { label: 'Delhi / NCR', value: salary.byLocation.delhi },
    { label: 'Hyderabad', value: salary.byLocation.hyderabad },
    { label: 'Chennai', value: salary.byLocation.chennai },
    { label: 'Pune', value: salary.byLocation.pune },
    { label: 'Other cities', value: salary.byLocation.other },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Breadcrumb */}
      <nav className="border-b border-slate-100 bg-white px-5 py-3">
        <div className="mx-auto flex max-w-4xl items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-cyan-700">Home</Link>
          <span>/</span>
          <Link href="/salary" className="hover:text-cyan-700">Salary Guide</Link>
          <span>/</span>
          <span className="text-slate-900">{role.displayTitle}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <TrendingUp className="h-4 w-4" />
            Salary guide · India 2026
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {role.displayTitle} salary in India — 2026 guide
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Research-backed salary ranges for {role.displayTitle.toLowerCase()}s in India. Covers fresher to leadership pay, city-wise differences, company-type comparison, and negotiation tactics.
          </p>
          <div className="mt-6 inline-block rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3">
            <p className="text-sm font-semibold text-cyan-300">Broad range</p>
            <p className="font-display text-2xl font-bold text-white">{role.salaryRange}</p>
          </div>
        </div>
      </section>

      {/* Experience levels */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-cyan-600" />
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Salary by experience level</h2>
          </div>
          <p className="mt-3 text-slate-500">
            How {role.displayTitle.toLowerCase()} salaries grow with experience in India.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {experienceLevels.map((level) => (
              <div
                key={level.label}
                className={`rounded-2xl p-6 ${level.color} ${level.color === 'bg-slate-950 text-white' ? '' : 'border border-slate-100'}`}
              >
                <p className={`text-sm font-semibold ${level.color === 'bg-slate-950 text-white' ? 'text-cyan-300' : 'text-slate-500'}`}>
                  {level.label}
                </p>
                <p className={`mt-2 font-display text-lg font-bold leading-7 ${level.color === 'bg-slate-950 text-white' ? 'text-white' : 'text-slate-900'}`}>
                  {level.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company type breakdown */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-cyan-600" />
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Salary by company type</h2>
          </div>
          <p className="mt-3 text-slate-500">
            Company type is the single biggest variable in {role.displayTitle.toLowerCase()} salaries in India.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {companyTypes.map((ct) => (
              <div key={ct.label} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-2xl">{ct.icon}</p>
                <p className="mt-2 font-display font-bold text-slate-900">{ct.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{ct.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City breakdown */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-cyan-600" />
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Salary by city</h2>
          </div>
          <p className="mt-3 text-slate-500">
            Location significantly affects {role.displayTitle.toLowerCase()} pay in India. Here is a city-by-city comparison.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            {cities.map((city, i) => (
              <div
                key={city.label}
                className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-start sm:gap-6 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
              >
                <p className="w-36 shrink-0 font-semibold text-slate-800">{city.label}</p>
                <p className="text-sm leading-6 text-slate-600">{city.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top paying skills */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Top skills that increase {role.displayTitle.toLowerCase()} salary
          </h2>
          <p className="mt-3 text-slate-400">
            These skills command a meaningful salary premium for {role.displayTitle.toLowerCase()}s in India.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {salary.topPayingSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Salary boost factors */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            What increases a {role.displayTitle.toLowerCase()}&apos;s salary in India
          </h2>
          <div className="mt-8 space-y-3">
            {salary.salaryBoostFactors.map((factor, i) => (
              <div key={i} className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-sm font-bold text-cyan-700">
                  {i + 1}
                </div>
                <p className="leading-7 text-slate-700">{factor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Negotiation tips */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Salary negotiation tips for {role.displayTitle.toLowerCase()}s in India
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {salary.negotiationTips.map((tip, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-600">Tip {i + 1}</p>
                <p className="mt-2 leading-7 text-slate-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            {role.displayTitle} salary — frequently asked questions
          </h2>
          <div className="mt-8 space-y-4">
            {salary.faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-slate-100 p-6">
                <h3 className="font-display font-bold text-slate-900">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RoleResourceLinks slug={params.role} displayTitle={role.displayTitle} />

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Build a CV that commands the salary you deserve
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Use CV Prime to build an ATS-optimised {role.displayTitle.toLowerCase()} CV tailored to top-paying companies. Free to start, no credit card required.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Build my {role.displayTitle.toLowerCase()} CV free
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
              headline: `${role.displayTitle} Salary in India 2026 — Fresher to Senior Pay Guide`,
              description: `Research-backed salary ranges for ${role.displayTitle.toLowerCase()}s in India. Fresher to leadership, city-wise, company-type comparison.`,
              url: `https://cv-prime.in/salary/${params.role}`,
              datePublished: '2026-01-01',
              dateModified: new Date().toISOString().split('T')[0],
              author: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
              publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in', logo: { '@type': 'ImageObject', url: 'https://cv-prime.in/logo.png' } },
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                  { '@type': 'ListItem', position: 2, name: 'Salary Guide', item: 'https://cv-prime.in/salary' },
                  { '@type': 'ListItem', position: 3, name: `${role.displayTitle} Salary`, item: `https://cv-prime.in/salary/${params.role}` },
                ],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: salary.faqs.map((faq) => ({
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
