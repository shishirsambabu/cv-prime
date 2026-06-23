import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, MapPin, Briefcase, TrendingUp } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'AI Resume Builder for Kolkata — Free CV Maker for IT, BFSI & Corporate Jobs | CV Prime',
  description:
    'Build an ATS-optimised resume for Kolkata jobs. CV Prime\'s AI resume builder is designed for Kolkata\'s IT, BFSI, manufacturing, and corporate sectors. Free to start — ATS-ready for TCS, Wipro, Cognizant, and top MNCs in Kolkata.',
  alternates: { canonical: 'https://cv-prime.in/resume-builder-kolkata' },
  keywords: [
    'resume builder kolkata',
    'ai resume builder kolkata',
    'cv maker kolkata',
    'resume for kolkata jobs',
    'it resume builder kolkata',
    'kolkata job resume',
    'free resume builder kolkata',
    'software engineer resume kolkata',
    'kolkata bfsi resume',
    'resume builder salt lake kolkata',
  ],
  openGraph: {
    title: 'AI Resume Builder for Kolkata — Free CV Maker for IT, BFSI & Corporate Jobs | CV Prime',
    description:
      'Build an ATS-optimised resume for Kolkata jobs. AI tailors your resume for IT parks, BFSI, and corporate roles in Kolkata. Free to start.',
    url: 'https://cv-prime.in/resume-builder-kolkata',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Builder for Kolkata — CV Prime' }],
  },
};

const kolkataCompanies = [
  { name: 'TCS', sector: 'IT Services' },
  { name: 'Wipro', sector: 'IT Services' },
  { name: 'Cognizant', sector: 'IT Services' },
  { name: 'IBM', sector: 'Technology' },
  { name: 'Accenture', sector: 'Consulting' },
  { name: 'ITC', sector: 'FMCG / Conglomerate' },
  { name: 'Axis Bank', sector: 'BFSI' },
  { name: 'HDFC Bank', sector: 'BFSI' },
  { name: 'PwC', sector: 'Consulting' },
  { name: 'Deloitte', sector: 'Consulting' },
  { name: 'CESC', sector: 'Energy' },
  { name: 'Bandhan Bank', sector: 'BFSI' },
];

const inDemandRoles = [
  { role: 'Software Engineer', salaryRange: '₹4L – ₹40L+', growth: 'High', slug: 'software-engineer' },
  { role: 'Data Analyst', salaryRange: '₹4L – ₹25L+', growth: 'High', slug: 'data-analyst' },
  { role: 'Business Analyst', salaryRange: '₹5L – ₹22L+', growth: 'High', slug: 'business-analyst' },
  { role: 'Finance Analyst', salaryRange: '₹5L – ₹20L+', growth: 'High', slug: 'finance-analyst' },
  { role: 'HR Manager', salaryRange: '₹5L – ₹18L+', growth: 'Medium', slug: 'hr-manager' },
  { role: 'Operations Manager', salaryRange: '₹6L – ₹25L+', growth: 'High', slug: 'operations-manager' },
];

const jobHubs = [
  { area: 'Salt Lake (Sector V)', known: 'IT parks, MNC offices, tech companies' },
  { area: 'New Town / Rajarhat', known: 'IT/ITES companies, startups, co-working hubs' },
  { area: 'Dalhousie / BBD Bagh', known: 'BFSI, government PSUs, legal firms' },
  { area: 'Park Street', known: 'MNCs, consulting, media' },
  { area: 'Taratala / BDT', known: 'Manufacturing, engineering, logistics' },
  { area: 'Camac Street', known: 'Consulting, finance, corporate offices' },
];

const atsKeywords = [
  'Java / Python / .NET', 'SQL / Oracle', 'SAP / ERP', 'BFSI Compliance',
  'Agile / Scrum', 'Core Banking', 'KYC / AML', 'Financial Modelling',
  'Data Analysis', 'Power BI / Tableau', 'Project Management', 'Six Sigma',
];

const faqs = [
  {
    q: 'Which resume format works best for Kolkata IT companies?',
    a: 'For Kolkata IT companies (TCS, Wipro, Cognizant, IBM), a reverse-chronological single-column format is standard. TCS, Wipro, and Cognizant use ATS-based pre-screening at their Salt Lake offices — avoid multi-column layouts, tables, or graphics. Keep to one page for freshers, two pages maximum for experienced professionals.',
  },
  {
    q: 'What keywords should my resume include for Kolkata BFSI jobs?',
    a: 'Kolkata has a strong BFSI sector (Axis Bank, HDFC Bank, Bandhan Bank, SBI, PwC, Deloitte). Key ATS keywords for Kolkata BFSI: KYC, AML, core banking (Finacle, Temenos), credit appraisal, NPA management, CIBIL, NABARD, financial modelling, regulatory compliance (RBI circulars, FEMA). Mirror the exact language from the JD.',
  },
  {
    q: 'Is a one-page resume expected for Kolkata IT jobs?',
    a: 'For IT services companies in Kolkata (TCS, Wipro, Cognizant): one page for 0–3 years of experience; two pages acceptable for 5+ years. For consulting (PwC, Deloitte, EY) and corporate roles in Kolkata: two pages is fine for experienced professionals. Freshers should strictly keep to one page — Kolkata campus placement drives specifically screen for format compliance.',
  },
  {
    q: 'What are the top IT areas to target in Kolkata?',
    a: 'Salt Lake City Sector V and New Town/Rajarhat are Kolkata\'s primary IT hubs, with over 2,000 IT/ITES companies between them. Major employers include TCS (largest campus in eastern India), Wipro, Cognizant, Capgemini, and IBM. The West Bengal government has developed Sector V specifically as Kolkata\'s Silicon Valley equivalent.',
  },
  {
    q: 'How do I tailor my resume for Kolkata manufacturing vs IT roles?',
    a: 'For manufacturing/engineering roles (Taratala, BDT area): emphasise process improvement, Six Sigma, ERP systems (SAP), ISO compliance, and operational metrics (throughput, downtime reduction, cost savings). For IT roles in Salt Lake: emphasise programming languages, technical certifications, project methodologies (Agile/Scrum), and system/application-level outcomes. CV Prime\'s AI automatically adjusts your resume based on the specific JD you paste.',
  },
  {
    q: 'What is the average salary for software engineers in Kolkata?',
    a: 'Kolkata software engineer salaries in 2026: Fresher/0–1 year: ₹3.5L–₹8L. Mid-level/2–5 years: ₹8L–₹22L. Senior/5–8 years: ₹18L–₹40L+. Salaries at MNCs (Accenture, IBM) are higher than domestic IT services companies. Kolkata salaries are typically 15–25% lower than Bangalore or Mumbai for equivalent roles, but cost of living is also significantly lower.',
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
    { '@type': 'ListItem', position: 3, name: 'Resume Builder Kolkata', item: 'https://cv-prime.in/resume-builder-kolkata' },
  ],
};

export default function ResumeBuilderKolkataPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
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
            <span className="text-slate-300">Kolkata</span>
          </nav>
          <div className="flex items-center gap-2 text-sm font-bold text-brand mb-4">
            <MapPin className="h-4 w-4" />
            <span>Kolkata · Eastern India&apos;s Business Hub</span>
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            AI resume builder for<br />Kolkata job seekers
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build an ATS-optimised resume for Kolkata&apos;s IT, BFSI, and corporate sectors. CV Prime&apos;s AI tailors your resume for every JD — from TCS Salt Lake to ITC and Bandhan Bank.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Build my Kolkata resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resume-builder/software-engineer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Software Engineer resume
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free plan · 3 PDF exports · No credit card · ATS scoring included</p>
        </div>
      </section>

      {/* Kolkata job market stats */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '2,000+', label: 'IT/ITES companies in Salt Lake & New Town' },
            { stat: '₹4L–₹40L', label: 'software engineer salary range in Kolkata' },
            { stat: '90%+', label: 'of MNCs in Kolkata use ATS screening' },
            { stat: '75%', label: 'of resumes rejected by ATS before human review' },
          ].map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-brand">{item.stat}</p>
              <p className="mt-1 max-w-[160px] text-xs leading-5 text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top hiring companies */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Top companies hiring in Kolkata</h2>
          <p className="mt-3 text-slate-500">CV Prime&apos;s AI knows the ATS formats and keyword patterns used by these companies.</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            {kolkataCompanies.map((c) => (
              <div key={c.name} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                <p className="font-display text-sm font-bold text-slate-950">{c.name}</p>
                <p className="mt-0.5 text-xs text-slate-500">{c.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-demand roles */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Most in-demand roles in Kolkata — 2026</h2>
          <p className="mt-3 text-slate-500">Build a role-specific resume tailored to Kolkata&apos;s job market in one click.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inDemandRoles.map((r) => (
              <Link
                key={r.slug}
                href={`/resume-builder/${r.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <p className="font-display text-base font-bold text-slate-950 group-hover:text-brand">{r.role}</p>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${r.growth === 'High' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    {r.growth} demand
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-500">{r.salaryRange}</p>
                <p className="mt-3 flex items-center gap-1 text-xs font-semibold text-brand">
                  Build this resume <ArrowRight className="h-3 w-3" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key ATS keywords */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">ATS keywords Kolkata recruiters screen for</h2>
          <p className="mt-3 text-slate-500">Kolkata IT and BFSI JDs consistently include these keywords. CV Prime checks your resume against them automatically.</p>
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
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Kolkata job hubs — where your resume lands</h2>
          <p className="mt-3 text-slate-500">Different areas of Kolkata have distinct industry concentrations. Target your resume accordingly.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {jobHubs.map((h) => (
              <div key={h.area} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand" />
                  <p className="font-display text-base font-bold">{h.area}</p>
                </div>
                <p className="mt-2 text-sm text-slate-500">{h.known}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How CV Prime works */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">How CV Prime builds your Kolkata resume</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { num: '01', title: 'Upload or build your resume', desc: 'Upload an existing PDF/DOCX or start from scratch. CV Prime extracts your experience automatically.' },
              { num: '02', title: 'Paste the Kolkata job description', desc: 'Copy the full JD from Naukri, LinkedIn, or the company portal. AI reads both and tailors your resume to match.' },
              { num: '03', title: 'Score, fix, and export', desc: 'See your ATS score (0–100), fix keyword gaps, and export a clean recruiter-ready PDF in minutes.' },
            ].map((step) => (
              <div key={step.num} className="rounded-2xl border border-slate-100 p-6">
                <p className="font-display text-3xl font-bold text-brand/30">{step.num}</p>
                <p className="mt-3 font-display text-base font-bold">{step.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Everything you need for your Kolkata job search</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { title: 'ATS scoring for Kolkata companies', desc: 'See how your resume performs against the ATS systems used by TCS, Wipro, IBM, and Kolkata MNCs — before you apply.' },
              { title: 'AI bullet rewriter', desc: 'Turn generic "responsible for X" bullets into metric-driven impact statements that Kolkata recruiters shortlist.' },
              { title: 'Role-specific keyword matching', desc: 'CV Prime knows the keywords for IT, BFSI, consulting, and manufacturing roles in Kolkata — gaps are flagged automatically.' },
              { title: 'Clean PDF export', desc: 'Export an ATS-readable PDF that renders correctly on all Kolkata company career portals. No watermark on paid plans.' },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <p className="font-display text-base font-bold">{f.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Resume builder Kolkata — frequently asked questions</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 p-6">
                <h3 className="font-display text-base font-bold">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-12 text-center">
        <p className="text-sm font-semibold text-slate-500">Explore more city resume builders</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {[
            { href: '/resume-builder-bangalore', label: 'Bangalore' },
            { href: '/resume-builder-mumbai', label: 'Mumbai' },
            { href: '/resume-builder-delhi', label: 'Delhi NCR' },
            { href: '/resume-builder-hyderabad', label: 'Hyderabad' },
            { href: '/resume-builder-chennai', label: 'Chennai' },
            { href: '/resume-builder-pune', label: 'Pune' },
            { href: '/resume-builder-ahmedabad', label: 'Ahmedabad' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-brand hover:text-brand">
              {link.label} <ArrowRight className="h-3 w-3" />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Build your Kolkata resume free — in under 5 minutes
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Join job seekers across India who use CV Prime to get past the ATS filter and into the interview room. Free to start — no credit card required.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong">
            Build my resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA />
    </main>
  );
}
