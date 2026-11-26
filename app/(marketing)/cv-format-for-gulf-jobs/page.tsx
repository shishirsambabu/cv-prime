import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';

const pageUrl = 'https://cv-prime.in/cv-format-for-gulf-jobs';
const pageTitle = 'CV Format for Gulf Jobs 2026: Dubai, UAE, Saudi & Qatar Guide';
const pageDescription =
  'How to format a CV for Gulf jobs from India: what UAE, Saudi Arabia, Qatar, Oman, Kuwait and Bahrain recruiters expect, including photo, nationality, visa status, notice period and ATS-safe layout.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'cv format for gulf jobs',
    'dubai cv format',
    'uae cv format',
    'cv format for dubai jobs from india',
    'saudi arabia cv format',
    'qatar cv format',
    'gulf resume format',
    'middle east cv format',
    'cv for abroad jobs from india',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV format for Gulf jobs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/og-image.png'],
  },
};

interface CvSection {
  name: string;
  detail: string;
}

const sections: CvSection[] = [
  {
    name: 'Header with personal details',
    detail:
      'Full name, phone with country code (+91 or your Gulf number), email, LinkedIn, current city and country. Many Gulf recruiters also expect nationality, visa status and, in some cases, date of birth. Add only what the posting or market asks for.',
  },
  {
    name: 'Professional photo (often expected)',
    detail:
      'A small, formal headshot is common on Gulf CVs, unlike most US/UK applications. If you apply through an ATS portal of a multinational, a photo-free version is safer. Keep two versions.',
  },
  {
    name: 'Professional summary',
    detail:
      '3–4 lines naming your role, years of experience, industry and the GCC country you are targeting. Mention GCC or regional experience early if you have it.',
  },
  {
    name: 'Availability block',
    detail:
      'Notice period, visa status (e.g. "Employment visa — transferable" or "Indian national, requires sponsorship") and driving licence (e.g. "UAE driving licence" or "Indian licence, eligible for conversion"). Recruiters screen on these fast.',
  },
  {
    name: 'Work experience',
    detail:
      'Reverse chronological. Company, location (city, country), dates, and 3–6 outcome-based bullets. Quote figures in the currency the employer understands: INR for Indian roles, AED/SAR/QAR for GCC roles, or USD.',
  },
  {
    name: 'Education and attestation',
    detail:
      'Degree, institution, year. Government and regulated roles often need degree attestation (MEA/embassy). If yours is attested, write "Degree attested for UAE" or similar. It removes a hiring delay.',
  },
  {
    name: 'Licences and certifications',
    detail:
      'Professional licences matter a lot in the Gulf: DHA/DOH/MOH/Prometric for healthcare, SCE (Saudi Council of Engineers) for engineers, and safety certificates (NEBOSH, IOSH) for oil, gas and construction.',
  },
  {
    name: 'Skills and languages',
    detail:
      'Group technical skills by category. List languages with level. English and Arabic are most valued; Hindi, Urdu, Malayalam and Tagalog are also useful in many Gulf workplaces.',
  },
];

interface CountryRow {
  country: string;
  hubs: string;
  note: string;
}

const countries: CountryRow[] = [
  {
    country: 'UAE',
    hubs: 'Dubai, Abu Dhabi, Sharjah',
    note: 'Most international market in the region. Many MNCs use ATS portals, so keep a clean single-column layout. Photo optional on MNC portals, common for direct and agency applications.',
  },
  {
    country: 'Saudi Arabia',
    hubs: 'Riyadh, Jeddah, Dammam/Khobar',
    note: 'Saudisation (Nitaqat) quotas affect which roles are open to expatriates. Professional accreditation (e.g. SCE for engineers, SCFHS for healthcare) is often required.',
  },
  {
    country: 'Qatar',
    hubs: 'Doha',
    note: 'Strong demand in construction, energy and hospitality. Highlight safety certifications and large-project experience.',
  },
  {
    country: 'Oman',
    hubs: 'Muscat, Sohar',
    note: 'Omanisation rules restrict some job categories to nationals. Check the role is open to expatriates before applying.',
  },
  {
    country: 'Kuwait',
    hubs: 'Kuwait City',
    note: 'Degree attestation and equivalency checks are strict for many professions. State attestation status clearly on the CV.',
  },
  {
    country: 'Bahrain',
    hubs: 'Manama',
    note: 'Strong banking, finance and services sector. A concise, two-page CV with quantified results works well.',
  },
];

const compareRows: { item: string; india: string; gulf: string; usuk: string }[] = [
  { item: 'Photo', india: 'Optional, declining', gulf: 'Common, often expected', usuk: 'Not included' },
  { item: 'Nationality', india: 'Not needed', gulf: 'Usually included', usuk: 'Not included' },
  { item: 'Visa / work status', india: 'Not needed', gulf: 'Included', usuk: 'Included only if relevant' },
  { item: 'Date of birth', india: 'Optional (biodata only)', gulf: 'Sometimes requested', usuk: 'Not included' },
  { item: 'Notice period', india: 'Often included', gulf: 'Included', usuk: 'Rarely included' },
  { item: 'Typical length', india: '1–2 pages', gulf: '2 pages (up to 3 for senior)', usuk: '1–2 pages' },
  { item: 'Salary figures', india: 'INR (lakh / crore)', gulf: 'AED / SAR / QAR or USD', usuk: 'USD / GBP' },
];

const mistakes: string[] = [
  'Sending the Indian biodata format (father’s name, religion, caste, marital declaration). Gulf recruiters want a professional CV, not a biodata.',
  'Leaving out visa status and notice period, forcing the recruiter to ask or skip you.',
  'Writing salary or targets only in lakh/crore, which most Gulf hiring managers will not convert.',
  'Two-column designs with icons and skill bars. They often break ATS parsing on MNC portals like Workday or SuccessFactors.',
  'Not naming licences (DHA, SCE, NEBOSH) as written in the job ad, so keyword filters miss you.',
  'One generic CV for every country. Tailor the summary and keywords to the specific job description.',
];

const faqs: { q: string; a: string }[] = [
  {
    q: 'What is the best CV format for Gulf jobs?',
    a: 'A reverse-chronological, single-column CV of about two pages. Include a header with nationality and visa status, a short summary, an availability block (notice period, visa, driving licence), work experience with quantified results, education with attestation status, licences and certifications, and skills and languages. Keep the layout ATS-friendly, because many large Gulf employers screen through applicant tracking systems.',
  },
  {
    q: 'Should I put a photo on my CV for Dubai or UAE jobs?',
    a: 'A professional headshot is common and often expected on CVs sent directly to Gulf employers or recruitment agencies. When applying through a multinational’s online ATS portal, a photo-free version is safer because images can interfere with parsing. Keeping both versions is the practical approach.',
  },
  {
    q: 'Is the Indian biodata format accepted for Gulf jobs?',
    a: 'No. Gulf private-sector employers expect a professional CV. Biodata fields such as father’s name, religion, caste and a signed declaration are not expected. The Gulf-specific additions are nationality, visa status, notice period and, sometimes, date of birth.',
  },
  {
    q: 'How long should a CV for Gulf jobs be?',
    a: 'Two pages is the norm for most experienced professionals. Freshers can use one page. Senior candidates with long project lists, common in construction and oil and gas, sometimes use three pages, but the first page must still show the strongest fit for the role.',
  },
  {
    q: 'Do Gulf companies use ATS software?',
    a: 'Yes, many do. Multinationals, large banks, airlines, government-linked companies and big contractors in the UAE, Saudi Arabia and Qatar commonly use applicant tracking systems such as Workday, SAP SuccessFactors and Oracle Taleo. Use standard section headings and a simple layout, and mirror the job description’s keywords.',
  },
  {
    q: 'Should I mention my salary expectations on a Gulf CV?',
    a: 'Usually no. Salary is discussed after the first screening. If a job ad explicitly asks for expected salary, state a monthly figure in the local currency (e.g. AED) and say whether it includes housing and transport allowances, since Gulf packages are often quoted as basic pay plus allowances.',
  },
  {
    q: 'Can I build a Gulf-ready CV with CV Prime?',
    a: 'Yes. Paste the Gulf job description, upload your current CV, and CV Prime tailors the content and keywords to that role using ATS-safe templates. You can add nationality, visa status and notice period in the header and summary, then export a PDF.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: pageTitle,
  description: pageDescription,
  url: pageUrl,
  author: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
  publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
  datePublished: '2026-11-26',
  dateModified: '2026-11-26',
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to format a CV for Gulf jobs',
  step: sections.map((section, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: section.name,
    text: section.detail,
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'CV Format for Gulf Jobs', item: pageUrl },
  ],
};

const relatedLinks: { label: string; href: string }[] = [
  { label: 'How to write a CV', href: '/how-to-write-a-cv' },
  { label: 'Resume vs CV', href: '/resume-vs-cv' },
  { label: 'Biodata format', href: '/biodata-format' },
  { label: 'ATS-friendly CV guide', href: '/ats-friendly-cv' },
  { label: 'Free ATS checker', href: '/ats-checker' },
  { label: 'Tailor resume to a job description', href: '/tailor-resume-to-job-description' },
  { label: 'CV examples by role', href: '/cv-examples' },
  { label: 'AI CV maker', href: '/ai-cv-maker' },
];

export default function CvFormatForGulfJobsPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, articleSchema, howToSchema, breadcrumbSchema]),
        }}
      />

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">CV Format for Gulf Jobs</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV format for Gulf jobs: Dubai, UAE, Saudi Arabia &amp; Qatar (2026)
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Applying from India to the Middle East? Gulf recruiters expect a few things an Indian or US-style CV leaves out:
            nationality, visa status, notice period, licences and, often, a photo. Here is the format, section by section.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong"
            >
              Tailor my CV to a Gulf job
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ats-checker"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-sm font-medium text-slate-300 hover:border-slate-400 hover:text-white"
            >
              Check my CV&apos;s ATS score
            </Link>
          </div>
        </div>
      </section>

      {/* Quick answer (GEO) */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Quick answer</h2>
          <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-6 text-base leading-8 text-slate-200">
            <p>
              A <strong>Gulf CV</strong> is a reverse-chronological, roughly two-page CV that adds{' '}
              <strong>nationality, visa status, notice period, driving licence and professional licences</strong> to the
              standard sections, and often includes a professional photo. It should use a single-column, ATS-safe layout
              because many large employers in the UAE, Saudi Arabia and Qatar screen applications through applicant
              tracking systems.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Gulf CV format, section by section</h2>
          <div className="mt-8 space-y-3">
            {sections.map((section, i) => (
              <div key={section.name} className="flex items-start gap-4 rounded-xl bg-white/[0.04] p-5 shadow-sm">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-100">{section.name}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-300">{section.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Indian vs Gulf vs US/UK CV: what changes</h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="p-4 text-left font-semibold text-slate-300">Item</th>
                  <th className="p-4 text-left font-semibold text-slate-300">India (corporate)</th>
                  <th className="p-4 text-left font-semibold text-cyan-300">Gulf (GCC)</th>
                  <th className="p-4 text-left font-semibold text-slate-300">US / UK</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={row.item} className={i % 2 === 0 ? 'bg-white/[0.06]' : 'bg-white/[0.03]'}>
                    <td className="p-4 font-medium text-slate-200">{row.item}</td>
                    <td className="p-4 text-slate-300">{row.india}</td>
                    <td className="p-4 font-medium text-cyan-200">{row.gulf}</td>
                    <td className="p-4 text-slate-300">{row.usuk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Country notes */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Country-by-country notes</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {countries.map((c) => (
              <div key={c.country} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="font-display text-lg font-bold">{c.country}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">{c.hubs}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{c.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-400">
            Localisation rules and licensing requirements change. Always check the current rules for your profession with the
            employer or the relevant ministry before applying.
          </p>
        </div>
      </section>

      {/* Mistakes */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Common mistakes Indian applicants make</h2>
          <div className="mt-8 space-y-3">
            {mistakes.map((m) => (
              <div key={m} className="flex items-start gap-3 rounded-xl border border-amber-400/20 bg-amber-500/10 p-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                <span className="text-sm leading-7 text-amber-100">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Header example */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Example Gulf CV header</h2>
          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900 p-6 font-mono text-sm leading-7 text-slate-200">
            <p className="text-base font-bold text-white">Rahul Menon, Senior Site Engineer (Civil)</p>
            <p>+91 98XXX XXXXX · rahul.menon@email.com · linkedin.com/in/rahulmenon</p>
            <p>Kochi, India · Indian national · Available to relocate to UAE / Qatar</p>
            <p>Notice period: 30 days · Degree attested · Indian driving licence</p>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-slate-300">
            {[
              'Nationality and relocation intent are stated up front',
              'Notice period and attestation status remove two screening questions',
              'Role title matches the wording of the job ad',
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">FAQ: CV format for Gulf jobs</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">Related guides</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-brand hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Tailor your CV to a Gulf job description</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Paste the Dubai, Riyadh or Doha job ad, upload your CV, and CV Prime rewrites it with the keywords that role
            screens for, in an ATS-safe template.
          </p>
          <Link
            href="/signup?next=/ai-cv"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Build my Gulf CV free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-sm text-slate-400">No credit card required. 3 free PDF exports.</p>
        </div>
      </section>
    </main>
  );
}
