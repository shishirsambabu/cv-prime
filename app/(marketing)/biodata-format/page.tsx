import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Biodata Format for Job in India 2026 — When to Use & When Not To | CV Prime',
  description:
    'Biodata format for job applications in India: what it is, when employers ask for it, how it differs from a resume, and when to use a modern ATS resume instead. Free guide with examples.',
  keywords: [
    'biodata format for job',
    'biodata format',
    'biodata for job application',
    'biodata format india',
    'simple biodata format',
    'biodata vs resume',
    'biodata format download',
    'job biodata format india',
    'professional biodata format',
    'biodata format for freshers',
  ],
  alternates: { canonical: 'https://cv-prime.in/biodata-format' },
  openGraph: {
    title: 'Biodata Format for Job in India 2026 — Full Guide',
    description:
      'What is biodata, when Indian employers ask for it, how it differs from a resume, and which format to use for corporate, tech, and government jobs.',
    url: 'https://cv-prime.in/biodata-format',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Biodata Format Guide India' }],
  },
};

const biodataFields = [
  'Full name',
  'Date of birth',
  'Father\'s name / Mother\'s name',
  'Gender',
  'Nationality',
  'Religion / Caste (optional, some formats)',
  'Marital status',
  'Permanent address',
  'Contact number',
  'Email address',
  'Educational qualifications (degree, institution, year, percentage/CGPA)',
  'Work experience (if any)',
  'Languages known',
  'Hobbies and interests',
  'Declaration and signature',
];

const resumeFields = [
  'Name and contact (phone, email, city, LinkedIn)',
  'Professional summary (3–4 lines, role-targeted)',
  'Work experience (reverse chronological, outcome-driven bullets)',
  'Education (degree, institution, year)',
  'Skills (grouped by category)',
  'Certifications',
  'Projects (for freshers and technical roles)',
];

const biodataUseCases = [
  { title: 'Government job applications (PSU, Central / State Government)', use: true },
  { title: 'Banking sector: Bank PO, Bank Clerk, IBPS exams', use: true },
  { title: 'Traditional private sector employers (manufacturing, textiles, family-owned businesses)', use: true },
  { title: 'Arranged marriage platforms and matrimonial sites', use: true },
  { title: 'Teaching and education roles at conservative institutions', use: true },
  { title: 'IT companies, product startups, and MNCs', use: false },
  { title: 'BFSI (private banks, insurance companies, fintech)', use: false },
  { title: 'Consulting, media, FMCG, e-commerce', use: false },
  { title: 'Any role posted on Naukri, LinkedIn, Instahyre, or Cutshort', use: false },
];

const faqs = [
  {
    q: 'What is the difference between a biodata and a resume in India?',
    a: 'A biodata includes personal details such as date of birth, father\'s name, nationality, marital status, and religion — information not included in a modern resume. A resume focuses on professional skills, work experience, and achievements. Biodata is used for government jobs, PSU roles, and some traditional employers. A resume is used for corporate jobs, tech companies, MNCs, startups, and most private sector roles.',
  },
  {
    q: 'Which is better for job applications — biodata or resume?',
    a: 'For most modern jobs in India — IT, startups, MNCs, banking (private), consulting, FMCG, media — a resume is far better than a biodata. Resumes can be ATS-optimised, keyword-matched to job descriptions, and tailored per role. Biodata is a one-size-fits-all document with personal details that most modern employers neither need nor want. Use biodata only when an employer specifically asks for it (common in government recruitment).',
  },
  {
    q: 'Can I use CV Prime to create a biodata?',
    a: 'CV Prime creates ATS-optimised professional resumes, not biodata-format documents. For modern corporate and tech roles, a CV Prime resume significantly outperforms a biodata in terms of ATS compatibility, keyword coverage, and professional presentation. If an employer specifically requires a biodata (e.g., government or PSU), you would use a traditional word processor template for that purpose.',
  },
  {
    q: 'Is a simple biodata format enough for job applications in 2026?',
    a: 'No — not for most jobs in India. Simple biodata formats lack ATS compatibility (no keyword optimisation), do not showcase your professional achievements, and will be automatically rejected by most corporate ATS systems. For any modern employer using Naukri, LinkedIn, or an ATS (which includes 90%+ of large Indian companies), you need an ATS-optimised resume, not a biodata.',
  },
  {
    q: 'What personal information should NOT be on an Indian resume in 2026?',
    a: 'Do not include date of birth, father\'s name, marital status, religion, caste, or nationality on a modern Indian resume — these are biodata-specific fields. Most corporate recruiters in India no longer expect or want this information. Including it can actually hurt you with some progressive employers who prioritise skills over demographics. Only include: name, phone, email, city, and professional profiles (LinkedIn, GitHub).',
  },
  {
    q: 'What format do Naukri and LinkedIn require?',
    a: 'Naukri and LinkedIn accept standard resume PDFs and DOCX files. They do not require biodata. In fact, Naukri\'s own resume parser is optimised for standard resume sections — a biodata uploaded to Naukri will parse poorly, misidentifying personal details as professional information. Always upload an ATS-formatted resume to job portals.',
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
  headline: 'Biodata Format for Job in India 2026 — When to Use & When Not To',
  description: 'Complete guide to biodata format for job applications in India: what it is, when to use it, and when to use a modern ATS resume instead.',
  url: 'https://cv-prime.in/biodata-format',
  author: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
  publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
  dateModified: new Date().toISOString().split('T')[0],
};

export default function BiodataFormatPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, articleSchema, {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
            { '@type': 'ListItem', position: 2, name: 'Biodata Format', item: 'https://cv-prime.in/biodata-format' },
          ],
        }]) }}
      />

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Biodata Format</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Biodata format for job applications in India — 2026 guide
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            What is a biodata, when do Indian employers actually ask for it, how is it different from a resume, and what format should you use for different types of jobs in India.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong"
            >
              Build your ATS resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resume-vs-cv"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-sm font-medium text-slate-300 hover:border-slate-400 hover:text-white"
            >
              Resume vs CV explained
            </Link>
          </div>
        </div>
      </section>

      {/* What is biodata */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">What is a biodata in India?</h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-slate-300">
            <p>
              Biodata (short for biographical data) is a traditional Indian document format that includes both personal biographical information and professional information. It originated in an era before standardised HR processes, when employers needed to know a candidate&apos;s personal background in addition to their qualifications.
            </p>
            <p>
              A biodata typically includes personal details like date of birth, father&apos;s name, marital status, nationality, and religion — information that modern Western-influenced resume formats explicitly exclude. The term &quot;biodata&quot; is almost entirely specific to India and a few other South Asian countries.
            </p>
            <p>
              In 2026, biodata remains relevant for <strong>government job applications</strong>, <strong>PSU (Public Sector Undertaking) roles</strong>, and some traditional private sector employers. For corporate jobs, tech roles, MNCs, startups, and most modern private sector employers, a professional resume is the expected format.
            </p>
          </div>
        </div>
      </section>

      {/* Biodata fields */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">What a biodata format includes</h2>
          <p className="mt-4 text-slate-300">A standard biodata format for job applications in India typically contains these fields:</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {biodataFields.map((field) => (
              <div key={field} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <div className="h-2 w-2 rounded-full bg-slate-400" />
                <span className="text-sm font-medium text-slate-300">{field}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
              <div>
                <p className="font-semibold text-amber-200">Important note for modern job seekers</p>
                <p className="mt-2 text-sm leading-7 text-amber-200">
                  Fields like date of birth, religion, caste, father&apos;s name, and marital status are <strong>not appropriate for modern resume formats</strong> used by IT companies, MNCs, private banks, startups, and consulting firms. Including these on a corporate resume can trigger bias concerns and may even violate some companies&apos; equal opportunity hiring policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biodata vs Resume comparison */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Biodata vs resume — side by side</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="p-4 text-left font-semibold text-slate-300">Feature</th>
                  <th className="p-4 text-center font-semibold text-slate-300">Biodata</th>
                  <th className="p-4 text-center font-semibold text-cyan-300">Modern Resume</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Personal details (DOB, father\'s name)', biodata: 'yes', resume: 'no' },
                  { feature: 'ATS keyword optimisation', biodata: 'no', resume: 'yes' },
                  { feature: 'Tailored per job description', biodata: 'no', resume: 'yes' },
                  { feature: 'Accepted on Naukri / LinkedIn', biodata: 'poor parsing', resume: 'yes' },
                  { feature: 'Used for government / PSU jobs', biodata: 'yes', resume: 'sometimes' },
                  { feature: 'Used for IT / tech / MNC jobs', biodata: 'no', resume: 'yes' },
                  { feature: 'Outcome-driven experience bullets', biodata: 'no', resume: 'yes' },
                  { feature: 'Length standard', biodata: '2–4 pages', resume: '1–2 pages' },
                ].map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-white/[0.03]'}>
                    <td className="p-4 font-medium text-slate-200">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.biodata === 'yes' ? <CheckCircle2 className="mx-auto h-5 w-5 text-slate-400" /> :
                       row.biodata === 'no' ? <XCircle className="mx-auto h-5 w-5 text-red-400" /> :
                       <span className="inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-semibold text-amber-300">{row.biodata}</span>}
                    </td>
                    <td className="p-4 text-center">
                      {row.resume === 'yes' ? <CheckCircle2 className="mx-auto h-5 w-5 text-cyan-600" /> :
                       row.resume === 'no' ? <XCircle className="mx-auto h-5 w-5 text-slate-300" /> :
                       <span className="inline-block rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-semibold text-cyan-300">{row.resume}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Resume fields */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">What a modern Indian resume includes</h2>
          <p className="mt-4 text-slate-300">
            For corporate, tech, and MNC roles in India, use these sections — and leave out all biodata-specific personal details:
          </p>
          <div className="mt-8 space-y-3">
            {resumeFields.map((field, i) => (
              <div key={field} className="flex items-start gap-4 rounded-xl bg-white/[0.04] p-4 shadow-sm">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">{i + 1}</span>
                <span className="text-sm font-medium leading-7 text-slate-300">{field}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to use each */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">When to use biodata vs resume in India</h2>
          <div className="mt-8 space-y-3">
            {biodataUseCases.map((item) => (
              <div key={item.title} className={`flex items-start gap-4 rounded-xl border p-4 ${item.use ? 'border-white/10 bg-slate-50' : 'border-red-100 bg-red-50'}`}>
                {item.use
                  ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
                  : <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                }
                <div>
                  <span className="text-sm font-medium text-slate-200">{item.title}</span>
                  <span className={`ml-2 text-xs font-semibold ${item.use ? 'text-slate-400' : 'text-red-600'}`}>
                    {item.use ? '— biodata is appropriate' : '— use a resume instead'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Frequently asked questions — biodata format India</h2>
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

      {/* Internal links */}
      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">Related guides</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { label: 'How to write a resume', href: '/resume-tips/how-to-write-a-resume' },
              { label: 'Resume vs CV', href: '/resume-vs-cv' },
              { label: 'Fresher resume guide', href: '/fresher-resume' },
              { label: 'One page resume guide', href: '/one-page-resume' },
              { label: 'ATS-friendly CV guide', href: '/ats-friendly-cv' },
              { label: 'Free ATS checker', href: '/ats-checker' },
              { label: 'Free resume builder', href: '/free-resume-builder' },
            ].map((link) => (
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Build an ATS-optimised resume — not a biodata
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            For corporate, tech, and MNC jobs in India, a keyword-optimised resume is 10x more effective than a biodata. CV Prime builds it for free.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Build your resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-sm text-slate-400">No credit card required. 3 free PDF exports.</p>
        </div>
      </section>
    </main>
  );
}
