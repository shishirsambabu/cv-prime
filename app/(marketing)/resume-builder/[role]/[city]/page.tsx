import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MapPin, Building2, TrendingUp, CheckCircle2, Sparkles } from 'lucide-react';
import { roleMap } from '@/lib/roleData';
import { salaryDataMap } from '@/lib/salaryData';
import { cityMetaMap, matrixCitySlugs, matrixRoleSlugs } from '@/lib/roleCityData';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export function generateStaticParams(): { role: string; city: string }[] {
  const params: { role: string; city: string }[] = [];
  for (const role of matrixRoleSlugs) {
    for (const city of matrixCitySlugs) {
      params.push({ role, city });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { role: string; city: string };
}): Promise<Metadata> {
  const role = roleMap.get(params.role);
  const city = cityMetaMap[params.city];
  const salary = salaryDataMap[params.role];
  if (!role || !city || !salary) return {};
  const roleLower = role.displayTitle.toLowerCase();
  const citySalary = salary.byLocation[city.salaryKey];
  const title = `${role.displayTitle} Resume in ${city.name} — Salary, Skills & ATS Guide 2026`;
  const description = `Build an ATS-optimised ${roleLower} resume for ${city.name} jobs. ${role.displayTitle} salary in ${city.name}: ${citySalary}. Top employers, must-have skills, ATS keywords, and a free AI resume builder.`;
  return {
    title: `${title} | CV Prime`,
    description,
    keywords: [
      `${roleLower} resume ${city.name.toLowerCase()}`,
      `${roleLower} jobs ${city.name.toLowerCase()}`,
      `${roleLower} salary ${city.name.toLowerCase()}`,
      `${roleLower} cv ${city.name.toLowerCase()}`,
      `${roleLower} resume ${city.name.toLowerCase()} 2026`,
      `resume builder ${city.name.toLowerCase()} ${roleLower}`,
    ],
    alternates: { canonical: `https://cv-prime.in/resume-builder/${params.role}/${params.city}` },
    openGraph: {
      title: `${title} | CV Prime`,
      description,
      url: `https://cv-prime.in/resume-builder/${params.role}/${params.city}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${role.displayTitle} resume for ${city.name} — CV Prime` }],
    },
  };
}

export default function RoleCityPage({ params }: { params: { role: string; city: string } }): JSX.Element {
  const role = roleMap.get(params.role);
  const city = cityMetaMap[params.city];
  const salary = salaryDataMap[params.role];
  if (!role || !city || !salary) notFound();

  const roleLower = role.displayTitle.toLowerCase();
  const citySalary = salary.byLocation[city.salaryKey];
  const otherCities = matrixCitySlugs.filter((c) => c !== params.city);

  const faqs = [
    {
      q: `What is the average ${roleLower} salary in ${city.name}?`,
      a: `In ${city.name}, ${roleLower}s earn ${citySalary}. ${city.name} is ${city.premium} for this kind of role. Your exact pay depends on your years of experience, the company type (startup vs MNC vs product tier-1), and the depth of your in-demand skills. See the full breakdown on the ${role.displayTitle} salary guide.`,
    },
    {
      q: `Which companies hire ${roleLower}s in ${city.name}?`,
      a: `${city.name}'s ${roleLower} market is driven by ${city.tagline.toLowerCase()}, with major employers including ${city.signatureCompanies.slice(0, 5).join(', ')}, alongside companies like ${role.topCompanies.slice(0, 4).join(', ')}. CV Prime tailors your resume to each company's job description and scores your ATS match before you apply.`,
    },
    ...role.faqs.slice(0, 2),
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
      { '@type': 'ListItem', position: 2, name: 'Resume Builder', item: 'https://cv-prime.in/resume-builder' },
      { '@type': 'ListItem', position: 3, name: role.displayTitle, item: `https://cv-prime.in/resume-builder/${params.role}` },
      { '@type': 'ListItem', position: 4, name: city.name, item: `https://cv-prime.in/resume-builder/${params.role}/${params.city}` },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/resume-builder" className="hover:text-white">Resume Builder</Link>
            <span>/</span>
            <Link href={`/resume-builder/${params.role}`} className="hover:text-white">{role.displayTitle}</Link>
            <span>/</span>
            <span className="text-slate-300">{city.name}</span>
          </nav>
          <div className="flex items-center gap-2 text-sm font-bold text-brand">
            <MapPin className="h-4 w-4" />
            <span>{city.displayName} · {city.tagline}</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {role.displayTitle} resume for {city.name} jobs
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build an ATS-optimised {roleLower} resume tailored for {city.name}&apos;s job market. {role.displayTitle}s in {city.name} earn <span className="font-semibold text-white">{citySalary}</span> — CV Prime tailors your resume to each JD, scores your ATS match, and exports a clean PDF.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Build my {city.name} resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={`/resume-builder/${params.role}`} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              {role.displayTitle} resume guide
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free · 3 PDF exports · ATS scoring · No credit card</p>
        </div>
      </section>

      {/* Salary band */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center gap-2 text-brand">
              <TrendingUp className="h-5 w-5" />
              <h2 className="font-display text-xl font-bold text-slate-950">{role.displayTitle} salary in {city.name}</h2>
            </div>
            <p className="mt-3 font-display text-2xl font-bold text-slate-950">{citySalary}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {city.name} is {city.premium} for {roleLower}s. Pay scales with experience, company type, and your strongest skills.
            </p>
            <Link href={`/salary/${params.role}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
              Full {role.displayTitle} salary guide (fresher to senior) <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Employers */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Who&apos;s hiring {roleLower}s in {city.name}</h2>
          <p className="mt-3 text-slate-500">{city.name} is built on {city.sectors.slice(0, 3).join(', ').toLowerCase()} and more. CV Prime knows the ATS formats these employers use.</p>
          <div className="mt-7">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Major {city.name} employers</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {city.signatureCompanies.map((c) => (
                <span key={c} className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-sm font-bold text-slate-700">{c}</span>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Companies hiring {role.displayTitle}s</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {role.topCompanies.map((c) => (
                <span key={c} className="rounded-xl border border-brand/20 bg-brand/5 px-3.5 py-1.5 text-sm font-semibold text-brand">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* City sectors */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">{city.name}&apos;s key sectors for this role</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {city.sectors.map((s) => (
              <div key={s} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-4">
                <Building2 className="h-4 w-4 shrink-0 text-brand" />
                <p className="text-sm font-semibold text-slate-700">{s}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm leading-7 text-slate-600"><span className="font-semibold text-slate-800">ATS in {city.name}:</span> {city.atsNote}</p>
          </div>
        </div>
      </section>

      {/* Skills / ATS keywords */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">ATS keywords for {roleLower}s</h2>
          <p className="mt-3 text-slate-500">{city.name} recruiters screen for these. CV Prime checks your resume against them and the exact JD automatically.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {role.keySkills.map((kw) => (
              <span key={kw} className="rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-sm font-semibold text-brand">{kw}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why CV Prime */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Why {city.name} {roleLower}s use CV Prime</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Sparkles, title: 'Tailored to each JD', body: `Paste any ${city.name} ${roleLower} job description and AI rewrites your resume to match it — keywords, bullets, and summary.` },
              { icon: TrendingUp, title: 'Benchmarked to local pay', body: `Know the ${city.name} salary band for ${roleLower}s (${citySalary}) so you apply and negotiate with real data.` },
              { icon: CheckCircle2, title: 'ATS-safe for local employers', body: city.atsNote },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <Icon className="h-6 w-6 text-brand" />
                  <h3 className="mt-3 font-display text-base font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">{role.displayTitle} resume in {city.name} — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <h3 className="font-display text-base font-bold text-slate-950">{faq.q}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">{role.displayTitle} resume in other cities</p>
          <div className="flex flex-wrap gap-3">
            {otherCities.map((c) => {
              const cm = cityMetaMap[c];
              if (!cm) return null;
              return (
                <Link key={c} href={`/resume-builder/${params.role}/${c}`} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand">
                  {role.displayTitle} resume {cm.name} →
                </Link>
              );
            })}
          </div>
          <p className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-slate-500">Related resources</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: `/resume-builder/${params.role}`, label: `${role.displayTitle} resume builder` },
              { href: `/salary/${params.role}`, label: `${role.displayTitle} salary India` },
              { href: `/resume-examples/${params.role}`, label: `${role.displayTitle} resume examples` },
              { href: `/ats-guide/${params.role}`, label: `${role.displayTitle} ATS guide` },
              { href: `/resume-builder/${params.city}`, label: `Resume builder ${city.name}` },
              { href: '/ats-score-checker', label: 'Free ATS score checker' },
              { href: '/resume-tools', label: 'All resume tools' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">Land your next {city.name} {roleLower} role</h2>
          <p className="mt-4 text-slate-300">
            CV Prime builds an ATS-optimised {roleLower} resume tailored to {city.name} employers. Free to start — no credit card.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
            Build my resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label={`Build my ${city.name} resume`} message={`ATS-optimised ${roleLower} resume for ${city.name} jobs — free`} />
    </main>
  );
}
