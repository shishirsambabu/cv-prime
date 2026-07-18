import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MapPin } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';
import { CityRoleMatrixLinks } from '@/components/marketing/CityRoleMatrixLinks';

export const metadata: Metadata = {
  title: 'AI Resume Builder for Chennai — Free CV Maker for IT, Auto & Manufacturing Jobs | CV Prime',
  description:
    'Build an ATS-optimised resume for Chennai jobs. CV Prime\'s AI resume builder is tailored for Chennai\'s IT services, automotive, and manufacturing sectors. Free to start — used by professionals at HCL, Cognizant, Zoho, and Hyundai.',
  alternates: { canonical: 'https://cv-prime.in/resume-builder-chennai' },
  keywords: [
    'resume builder chennai',
    'ai resume builder chennai',
    'cv maker chennai',
    'resume for chennai jobs',
    'it resume builder chennai',
    'chennai job resume',
    'omr resume builder',
    'free resume builder chennai',
    'software engineer resume chennai',
    'mechanical engineer resume chennai',
  ],
  openGraph: {
    title: 'AI Resume Builder for Chennai — Free CV Maker for IT, Auto & Manufacturing Jobs | CV Prime',
    description:
      'Build an ATS-optimised resume for Chennai jobs. AI tailors your resume for Chennai\'s IT, automotive, and manufacturing sectors. Free to start.',
    url: 'https://cv-prime.in/resume-builder-chennai',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Builder for Chennai — CV Prime' }],
  },
};

const chennaiCompanies = [
  { name: 'HCL Technologies', sector: 'IT Services' },
  { name: 'Cognizant', sector: 'IT Services' },
  { name: 'TCS', sector: 'IT Services' },
  { name: 'Infosys', sector: 'IT Services' },
  { name: 'Zoho', sector: 'SaaS / Product' },
  { name: 'Freshworks', sector: 'SaaS / Product' },
  { name: 'Hyundai India', sector: 'Automotive' },
  { name: 'TVS Group', sector: 'Automotive' },
  { name: 'Ashok Leyland', sector: 'Automotive' },
  { name: 'L&T', sector: 'Engineering / Construction' },
  { name: 'ONGC', sector: 'Oil & Gas' },
  { name: 'NLC India', sector: 'Energy / PSU' },
  { name: 'Standard Chartered', sector: 'Banking' },
  { name: 'La Opala', sector: 'FMCG / Manufacturing' },
];

const inDemandRoles = [
  { role: 'Software Engineer', salaryRange: '₹4L – ₹55L+', growth: 'Very High', slug: 'software-engineer' },
  { role: 'Mechanical Engineer', salaryRange: '₹3.5L – ₹25L+', growth: 'High', slug: 'mechanical-engineer' },
  { role: 'QA Engineer', salaryRange: '₹3.5L – ₹22L+', growth: 'High', slug: 'qa-engineer' },
  { role: 'Civil Engineer', salaryRange: '₹3.5L – ₹20L+', growth: 'Moderate', slug: 'civil-engineer' },
  { role: 'Data Analyst', salaryRange: '₹4L – ₹25L+', growth: 'High', slug: 'data-analyst' },
  { role: 'Operations Manager', salaryRange: '₹5L – ₹28L+', growth: 'High', slug: 'operations-manager' },
];

const jobHubs = [
  { area: 'OMR (Old Mahabalipuram Road)', known: 'IT corridor — TCS, HCL, Infosys, Cognizant parks' },
  { area: 'Sholinganallur / Perungudi', known: 'Product companies, MNC tech offices' },
  { area: 'Ambattur', known: 'Manufacturing, auto components, FMCG production' },
  { area: 'Sriperumbudur', known: 'Automotive SEZ — Hyundai, Ford (legacy), Samsung' },
  { area: 'Mount Road / Anna Salai', known: 'Legacy businesses, banking, consulting firms' },
  { area: 'Guindy Industrial Estate', known: 'Heavy engineering, auto ancillaries' },
];

const atsKeywords = [
  'Java / Spring', 'Python / Django', '.NET', 'SAP Basis / ABAP',
  'Selenium / TestNG', 'Manual Testing', 'SQL Server', 'AutoCAD',
  'SolidWorks', 'Vehicle Dynamics', 'Six Sigma / Lean', 'ERP / SAP MM',
];

const faqs = [
  {
    q: 'What resume format is expected by Chennai IT companies?',
    a: 'Chennai is dominated by IT services companies (HCL, Cognizant, TCS, Infosys). These companies use applicant tracking systems that prefer single-column resumes with a dedicated skills matrix. Include a "Technical Summary" section listing technologies, tools, and domain expertise. For each project, include: project name, client industry, technology stack, your role, team size, and duration. This project-centric format is expected by Chennai IT services recruiters.',
  },
  {
    q: 'Is Zoho good for Chennai job seekers? How should I tailor my resume?',
    a: 'Zoho and Freshworks are Chennai\'s standout product companies. Zoho in particular is known for hiring directly from tier-2 colleges and values problem-solving ability over brand-name credentials. For Zoho applications: emphasise your coding skills, algorithmic thinking, project outcomes, and any competitive programming participation (Codeforces, LeetCode). Zoho rarely uses third-party ATS — your resume reaches a human directly, so clarity and depth of technical content matter more than ATS keyword matching.',
  },
  {
    q: 'What keywords do automotive companies in Chennai screen for?',
    a: 'Chennai automotive employers (Hyundai, TVS, Ashok Leyland, RANE Group) screen for: Vehicle Dynamics, APQP, PPAP, SPC, DFMEA, PFMEA, CATIA V5, NX CAD, GD&T, IATF 16949, ISO/TS, supplier quality assurance, and Lean/Six Sigma certifications. Mechanical engineers should include their CAD tool proficiency and any automotive domain exposure prominently in both the skills section and experience bullets.',
  },
  {
    q: 'How do I write a strong resume for L&T or engineering companies in Chennai?',
    a: 'L&T and infrastructure engineering companies prioritise: P&L ownership, project execution track record (budget, timeline, scope), HSE metrics (LTIFR, near-miss rates), cross-functional team leadership, and vendor management. Include the scale of projects you have managed: "Executed ₹85Cr residential project with 200-member workforce, delivered 6 weeks ahead of schedule." L&T uses Taleo ATS — ensure your resume is in a clean single-column format without tables.',
  },
  {
    q: 'What is the salary range for software engineers in Chennai?',
    a: 'Chennai software engineer salaries in 2026: Fresher / 0–1 year: ₹3.5L–₹8L (IT services) or ₹8L–₹15L (product companies like Zoho/Freshworks). Mid-level / 2–5 years: ₹8L–₹22L. Senior / 5–8 years: ₹18L–₹40L. Principal / architect level: ₹35L–₹65L+. Zoho and Freshworks pay the highest in Chennai; traditional IT services firms pay at the lower end of the range but offer more stability and structured growth.',
  },
  {
    q: 'Can freshers from Tamil Nadu engineering colleges use CV Prime?',
    a: 'Yes. CV Prime works well for freshers from Anna University-affiliated colleges, NIT Trichy, IIT Madras, and other Tamil Nadu engineering institutions. For campus placement-targeted resumes, CV Prime formats education credentials (CGPA, branch, year of passing) prominently, highlights academic projects and internships, and formats the skills section to match the keywords screened during mass recruitment drives at top Chennai IT companies.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Resume Builder', item: 'https://cv-prime.in/resume-builder' },
    { '@type': 'ListItem', position: 3, name: 'Resume Builder Chennai', item: 'https://cv-prime.in/resume-builder-chennai' },
  ],
};

export default function ResumeBuilderChennaiPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
          <nav className="mb-5 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/resume-builder" className="hover:text-white">Resume Builder</Link>
            <span>/</span>
            <span className="text-slate-300">Chennai</span>
          </nav>
          <div className="flex items-center gap-2 text-sm font-bold text-brand mb-4">
            <MapPin className="h-4 w-4" />
            <span>Chennai · IT Services, Automotive & Engineering Hub</span>
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            AI resume builder for<br />Chennai job seekers
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build an ATS-optimised resume for Chennai jobs across IT services, automotive, manufacturing, and SaaS. CV Prime&apos;s AI tailors your resume for every JD — from HCL and Cognizant to Zoho and Hyundai.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Build my Chennai resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resume-builder/mechanical-engineer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Mechanical engineer resume
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free plan · 3 PDF exports · No credit card · ATS scoring included</p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/10 bg-white/[0.03] px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '300+', label: 'IT companies on OMR alone' },
            { stat: '#3', label: 'largest automotive manufacturing hub in India' },
            { stat: '₹6L+', label: 'average IT services salary in Chennai' },
            { stat: '75%', label: 'of resumes rejected by ATS before a human reads them' },
          ].map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-brand">{item.stat}</p>
              <p className="mt-1 max-w-[160px] text-xs leading-5 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top companies */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Top companies hiring in Chennai</h2>
          <p className="mt-3 text-slate-400">CV Prime&apos;s AI is calibrated for the ATS formats used by these Chennai employers.</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {chennaiCompanies.map((c) => (
              <div key={c.name} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
                <p className="font-display text-sm font-bold text-white">{c.name}</p>
                <p className="mt-0.5 text-xs text-slate-400">{c.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-demand roles */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Most in-demand roles in Chennai — 2026</h2>
          <p className="mt-3 text-slate-400">Build a role-specific resume tailored to Chennai&apos;s job market in one click.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inDemandRoles.map((r) => (
              <Link
                key={r.slug}
                href={`/resume-builder/${r.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-brand hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <p className="font-display text-base font-bold text-white group-hover:text-brand">{r.role}</p>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${r.growth === 'Very High' ? 'bg-green-100 text-green-700' : r.growth === 'High' ? 'bg-blue-100 text-blue-700' : 'bg-white/[0.05] text-slate-300'}`}>
                    {r.growth} demand
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-400">{r.salaryRange}</p>
                <p className="mt-3 flex items-center gap-1 text-xs font-semibold text-brand">
                  Build this resume <ArrowRight className="h-3 w-3" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ATS keywords */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">ATS keywords Chennai recruiters screen for</h2>
          <p className="mt-3 text-slate-400">Chennai JDs in IT, automotive, and engineering consistently include these terms.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {atsKeywords.map((kw) => (
              <span key={kw} className="rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-sm font-semibold text-brand">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Job hubs */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Chennai job hubs — where your resume lands</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {jobHubs.map((h) => (
              <div key={h.area} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <div>
                  <p className="font-display text-sm font-bold text-white">{h.area}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{h.known}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Resume builder Chennai — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-sm">
                <h3 className="font-display text-base font-bold">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Related resources</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/resume-builder', label: 'AI resume builder' },
              { href: '/resume-builder/software-engineer', label: 'Software engineer resume' },
              { href: '/resume-builder/mechanical-engineer', label: 'Mechanical engineer resume' },
              { href: '/resume-builder/civil-engineer', label: 'Civil engineer resume' },
              { href: '/resume-builder/qa-engineer', label: 'QA engineer resume' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/resume-tips/how-to-write-a-resume', label: 'How to write a resume' },
              { href: '/cv-builder-india', label: 'CV builder for India' },
              { href: '/resume-builder-bangalore', label: 'Resume builder Bangalore' },
              { href: '/resume-builder-hyderabad', label: 'Resume builder Hyderabad' },
              { href: '/resume-builder-pune', label: 'Resume builder Pune' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-brand hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CityRoleMatrixLinks citySlug="chennai" cityName="Chennai" />

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">Land your next Chennai role</h2>
          <p className="mt-4 text-slate-300">
            CV Prime&apos;s AI builds ATS-optimised resumes for Chennai&apos;s IT, automotive, and manufacturing job market. Free to start — no credit card required.
          </p>
          <Link
            href="/signup?next=/ai-cv"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
          >
            Build my resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build my Chennai resume free" message="AI resume builder for Chennai IT, automotive & engineering jobs" />
    </main>
  );
}
