import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MapPin, CheckCircle2, XCircle, FileText } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Resume Format for Indian Companies — The Standard That Works | CV Prime',
  description:
    'The resume format Indian companies expect — from IT services and BFSI to startups and PSUs. Section order, what to include and skip (photo, CGPA, marital status), ATS rules, and a free builder that gets it right.',
  alternates: { canonical: 'https://cv-prime.in/resume-format-for-indian-companies' },
  keywords: [
    'resume format for indian companies',
    'resume format india',
    'indian resume format',
    'cv format for indian companies',
    'resume format for it companies india',
    'standard resume format india',
    'indian company resume format',
    'resume format for freshers india',
    'professional resume format india',
    'best resume format india',
  ],
  openGraph: {
    title: 'Resume Format for Indian Companies — The Standard That Works | CV Prime',
    description:
      'Section order, what to include and skip, ATS rules, and the resume format Indian companies actually expect. Free builder.',
    url: 'https://cv-prime.in/resume-format-for-indian-companies',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume format for Indian companies — CV Prime' }],
  },
};

const sections = [
  { n: '1', name: 'Header', detail: 'Name, phone, professional email, city, and LinkedIn/GitHub as plain text. A photo is optional in India and best left off for ATS-screened corporate roles.' },
  { n: '2', name: 'Professional summary', detail: '2–3 lines stating your role, years of experience, and strongest skills. Replaces the dated "career objective" for experienced candidates.' },
  { n: '3', name: 'Key skills', detail: 'A clean list of technical and functional skills, spelled exactly as job descriptions phrase them — the densest keyword zone for the ATS.' },
  { n: '4', name: 'Work experience', detail: 'Reverse-chronological, each role with title, company, dates, and 3–5 quantified bullets. Lead with impact, not duties.' },
  { n: '5', name: 'Education', detail: 'Degree, institution, year, and CGPA or percentage where relevant. Freshers should place this above experience.' },
  { n: '6', name: 'Projects, certifications & extras', detail: 'Projects (vital for freshers and tech roles), certifications, and relevant achievements. Keep it tight and relevant.' },
];

const include = [
  'A professional email and a single phone number',
  'CGPA / percentage for freshers and recent grads',
  'Quantified achievements (revenue, %, scale, time saved)',
  'Keywords matched to each specific job description',
  'A clean, single-column, ATS-readable layout',
];
const skip = [
  'Photo, date of birth, marital status, and full address',
  'Father\'s/spouse\'s name and other personal details',
  '"Declaration" lines and handwritten-signature blocks',
  'Multi-column or graphic templates that break the ATS',
  'A generic objective reused for every application',
];

const companyTypes = [
  { type: 'IT services (TCS, Infosys, Wipro)', note: 'Conservative single-column format, clear skills matrix, project summaries; heavy ATS screening.' },
  { type: 'Product & startups (Flipkart, Zomato, CRED)', note: 'Tight one-page resume, quantified impact, ownership framing; GitHub/portfolio for tech.' },
  { type: 'BFSI & consulting', note: 'Formal tone, credentials and certifications up front, achievements in business terms.' },
  { type: 'PSUs & government', note: 'Detailed, conventional format; education and qualifications emphasised; follow the prescribed structure where given.' },
];

const faqs = [
  {
    q: 'What is the standard resume format for Indian companies?',
    a: 'The standard format is a single-column, reverse-chronological resume with: header (name and contact), professional summary, key skills, work experience with quantified bullets, education with CGPA/percentage where relevant, and projects or certifications. Keep it ATS-readable — no tables, columns, or graphics — and tailor the keywords to each job description. This structure works across IT services, product companies, BFSI, and most Indian employers, all of which rely heavily on ATS screening.',
  },
  {
    q: 'Should I put a photo on my resume for Indian companies?',
    a: 'For most corporate and IT roles in India, no. A photo is optional and can cause problems: it adds nothing the ATS can read, can introduce bias, and may break parsing in some systems. Leave it off for ATS-screened roles. The exceptions are specific fields like aviation, hospitality, or modelling where a photo is conventionally expected — and some traditional "bio-data" formats, which are different from a modern resume.',
  },
  {
    q: 'Should I include CGPA and personal details on an Indian resume?',
    a: 'Include CGPA or percentage if you are a fresher or have under ~3 years of experience, since academics still matter early on; experienced professionals can drop it. Leave out personal details that were common in older Indian formats — date of birth, marital status, father\'s name, full address, and declaration lines. They take up space, add no value to recruiters, and are not expected on a modern professional resume.',
  },
  {
    q: 'Is the resume format different for IT companies vs startups in India?',
    a: 'The fundamentals are the same — single column, ATS-readable, quantified bullets — but emphasis differs. IT services companies favour a conservative format with a clear skills matrix and project summaries. Product companies and startups prefer a tight one-page resume with strong ownership and impact framing, and value a GitHub or portfolio link for technical roles. CV Prime lets you tailor the same base resume to each company type by pasting the job description.',
  },
  {
    q: 'How do I make sure my resume format passes the ATS at Indian companies?',
    a: 'Use a single-column layout with standard section headings, a detailed skills section, consistent dates, and a text-based PDF export — and match the job description\'s keywords. Avoid tables, columns, images, and decorative fonts. The reliable way to confirm it works is to score your resume against the specific JD: CV Prime checks your keyword coverage and flags format problems, so you know it will parse before you apply.',
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
    { '@type': 'ListItem', position: 2, name: 'Resume Format for Indian Companies', item: 'https://cv-prime.in/resume-format-for-indian-companies' },
  ],
};

export default function ResumeFormatIndianCompaniesPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <MapPin className="h-4 w-4" />
            The format Indian companies expect
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Resume format for Indian companies — done right
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            The exact structure that works across IT services, product companies, BFSI, and PSUs — section order, what to include, what to drop (photo, CGPA, declarations), and the ATS rules that decide whether you get shortlisted. Then build it free.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Build my resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/templates" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              See ATS-ready templates
            </Link>
          </div>
        </div>
      </section>

      {/* Section order */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">The standard section order</h2>
            <p className="mt-4 text-slate-500">Top to bottom — the structure Indian recruiters and ATS expect</p>
          </div>
          <div className="mt-12 space-y-4">
            {sections.map((s) => (
              <div key={s.name} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand text-brand-foreground font-display font-bold">{s.n}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-950">{s.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Include / skip */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-white p-6">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle2 className="h-5 w-5" />
                <h2 className="font-display text-xl font-bold">Include</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {include.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2 text-red-600">
                <XCircle className="h-5 w-5" />
                <h2 className="font-display text-xl font-bold">Skip (outdated in India)</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {skip.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />{d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company types */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Tune the format to the company type</h2>
            <p className="mt-4 text-slate-500">Same base resume, different emphasis</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {companyTypes.map((c) => (
              <div key={c.type} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-brand" />
                  <h3 className="font-display text-base font-bold text-slate-950">{c.type}</h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Indian resume format — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-slate-950">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-slate-900">Related guides & tools</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/resume-format', label: 'Resume format guide' },
              { href: '/mnc-resume-format-india', label: 'MNC resume format India' },
              { href: '/ats-resume-format-2026', label: 'ATS resume format 2026' },
              { href: '/biodata-format', label: 'Biodata format' },
              { href: '/resume-builder-india', label: 'Resume builder India' },
              { href: '/fresher-resume', label: 'Fresher resume' },
              { href: '/professional-cv-template-india', label: 'Professional CV template' },
              { href: '/templates', label: 'ATS-ready templates' },
              { href: '/ats-score-checker', label: 'Free ATS score checker' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Get the format right, automatically</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            CV Prime builds your resume in the format Indian companies expect — and tailors it to each role. Free to start.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Build my resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build my resume free" message="The resume format Indian companies expect — built for you free" />
    </main>
  );
}
