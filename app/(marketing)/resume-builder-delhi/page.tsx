import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MapPin } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'AI Resume Builder for Delhi NCR — Free CV Maker for IT, Consulting & FMCG Jobs | CV Prime',
  description:
    'Build an ATS-optimised resume for Delhi NCR jobs. CV Prime\'s AI resume builder is tailored for Delhi\'s IT, consulting, FMCG, and government sectors. Free to start — used by professionals at HCL, EY, HUL, and Airtel.',
  alternates: { canonical: 'https://cv-prime.in/resume-builder-delhi' },
  keywords: [
    'resume builder delhi',
    'ai resume builder delhi',
    'cv maker delhi',
    'resume builder ncr',
    'resume for delhi jobs',
    'it resume builder delhi',
    'delhi ncr job resume',
    'free resume builder delhi',
    'gurgaon resume builder',
    'noida resume builder',
  ],
  openGraph: {
    title: 'AI Resume Builder for Delhi NCR — Free CV Maker for IT, Consulting & FMCG Jobs | CV Prime',
    description:
      'Build an ATS-optimised resume for Delhi NCR jobs. AI tailors your resume for Delhi\'s IT, consulting, and FMCG sectors. Free to start.',
    url: 'https://cv-prime.in/resume-builder-delhi',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Builder for Delhi NCR — CV Prime' }],
  },
};

const delhiCompanies = [
  { name: 'HCL Technologies', sector: 'IT Services' },
  { name: 'Tech Mahindra', sector: 'IT Services' },
  { name: 'Bharti Airtel', sector: 'Telecom' },
  { name: 'HUL', sector: 'FMCG' },
  { name: 'ITC Ltd', sector: 'FMCG / Tobacco' },
  { name: 'EY India', sector: 'Consulting / Audit' },
  { name: 'KPMG', sector: 'Consulting / Audit' },
  { name: 'PwC India', sector: 'Consulting / Audit' },
  { name: 'Deloitte', sector: 'Consulting / Audit' },
  { name: 'OYO Rooms', sector: 'HospitalityTech' },
  { name: 'Zomato (HQ)', sector: 'FoodTech' },
  { name: 'PolicyBazaar', sector: 'InsurTech' },
  { name: 'MakeMyTrip', sector: 'TravelTech' },
  { name: 'IndiaMart', sector: 'B2B Commerce' },
];

const inDemandRoles = [
  { role: 'Business Analyst', salaryRange: '₹5L – ₹30L+', growth: 'High', slug: 'business-analyst' },
  { role: 'HR Manager', salaryRange: '₹4L – ₹25L+', growth: 'High', slug: 'hr-manager' },
  { role: 'Operations Manager', salaryRange: '₹5L – ₹30L+', growth: 'High', slug: 'operations-manager' },
  { role: 'Marketing Manager', salaryRange: '₹5L – ₹32L+', growth: 'High', slug: 'marketing-manager' },
  { role: 'Software Engineer', salaryRange: '₹5L – ₹55L+', growth: 'Very High', slug: 'software-engineer' },
  { role: 'Sales Manager', salaryRange: '₹4L – ₹30L+', growth: 'High', slug: 'sales-manager' },
];

const jobHubs = [
  { area: 'Cyber City, Gurugram', known: 'MNCs, consulting firms, BFSI back-offices' },
  { area: 'Noida IT Park / Sector 62', known: 'IT services, BPOs, software companies' },
  { area: 'Aerocity', known: 'Aviation, hospitality, logistics firms' },
  { area: 'Okhla Industrial Area', known: 'Manufacturing, FMCG, e-commerce ops' },
  { area: 'Nehru Place', known: 'IT hardware, software distribution, SMEs' },
  { area: 'Connaught Place', known: 'Financial services, law firms, government offices' },
];

const atsKeywords = [
  'Business Analysis', 'Stakeholder Management', 'Process Improvement', 'ERP Systems',
  'Six Sigma', 'FMCG Distribution', 'Digital Marketing', 'Performance Marketing',
  'SAP', 'Salesforce', 'HRMS', 'Talent Acquisition', 'People Management',
];

const faqs = [
  {
    q: 'What is the best resume format for Delhi NCR IT companies?',
    a: 'For IT services companies in Delhi NCR (HCL, Tech Mahindra, Infosys Noida), a single-column format with a clear skills matrix, project summary, and client-facing experience is preferred. Recruiters screen for domain expertise (BFSI, retail, healthcare) alongside technology skills. Include billable hours, client names (where permissible), and project outcomes. Avoid creative multi-column layouts — they break ATS parsers used by most large IT firms.',
  },
  {
    q: 'How do I write a resume for a Gurgaon consulting job?',
    a: 'Consulting resumes for Gurgaon firms (EY, Deloitte, KPMG, McKinsey Gurgaon) must follow a strict format: education credentials first (MBA institution, CGPA), then structured achievement bullets using the STAR or CAR framework. Each bullet must have a business impact: "Designed go-to-market strategy for ₹50Cr FMCG brand resulting in 18% market share gain." Consulting firms use Applicant Tracking Systems that screen for MBA institution, consulting keywords (frameworks, engagement, workstream), and quantified outcomes.',
  },
  {
    q: 'Should I mention Noida or Gurgaon specifically on my resume?',
    a: 'List your city as "Delhi NCR" or "New Delhi" in the contact section — this covers the entire National Capital Region. If you are specifically targeting Noida or Gurgaon roles and willing to commute, "Delhi NCR (Noida)" is acceptable. Adding a specific area can signal proximity to employers in that zone. Avoid overly precise addresses — a city-level location is sufficient and avoids discrimination.',
  },
  {
    q: 'What ATS keywords do Delhi FMCG companies look for?',
    a: 'FMCG companies in Delhi NCR (HUL, ITC, P&G, PepsiCo) screen for: trade marketing, general trade (GT), modern trade (MT), distributors management, numeric distribution (ND), weighted distribution (WD), category management, shelf share, off-take data, Nielsen, IRI, and brand P&L management. These terms should appear verbatim in your experience bullets and skills section.',
  },
  {
    q: 'How competitive is the Delhi NCR job market compared to Bangalore?',
    a: 'Delhi NCR and Bangalore serve different industries. Bangalore dominates in pure-play technology and startups; Delhi NCR leads in FMCG, consulting, government-adjacent industries, and IT services. Salaries in Delhi NCR are typically 10–20% lower than Bangalore for equivalent tech roles, but FMCG and consulting salaries are comparable. The candidate pool in Delhi NCR is large — a precisely targeted, ATS-optimised resume is critical to stand out.',
  },
  {
    q: 'Can CV Prime help with fresher resumes for Delhi NCR campus placements?',
    a: 'Yes. CV Prime supports fresher resumes for campus placement at Delhi University colleges, Jamia Millia, DTU, NSIT, and MDI Gurgaon. For freshers, CV Prime structures the resume to lead with strong educational credentials, emphasises relevant internship experience, and formats project descriptions to match the keywords screened in campus placement drives by IT, FMCG, and consulting companies.',
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
    { '@type': 'ListItem', position: 3, name: 'Resume Builder Delhi NCR', item: 'https://cv-prime.in/resume-builder-delhi' },
  ],
};

export default function ResumeBuilderDelhiPage(): JSX.Element {
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
            <span className="text-slate-300">Delhi NCR</span>
          </nav>
          <div className="flex items-center gap-2 text-sm font-bold text-brand mb-4">
            <MapPin className="h-4 w-4" />
            <span>Delhi NCR · India&apos;s National Capital Region</span>
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            AI resume builder for<br />Delhi NCR job seekers
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build an ATS-optimised resume for Delhi NCR jobs across IT, consulting, FMCG, and government sectors. CV Prime&apos;s AI tailors your resume for every JD — from HCL and EY to HUL and Airtel.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Build my Delhi resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resume-builder/business-analyst"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Business analyst resume
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free plan · 3 PDF exports · No credit card · ATS scoring included</p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '50,000+', label: 'job openings in Delhi NCR at any given time' },
            { stat: '4', label: 'of India\'s top consulting firms have major Delhi NCR presence' },
            { stat: '₹7L+', label: 'average professional salary in Gurgaon IT sector' },
            { stat: '75%', label: 'of resumes rejected by ATS before a human reads them' },
          ].map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-brand">{item.stat}</p>
              <p className="mt-1 max-w-[160px] text-xs leading-5 text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top companies */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Top companies hiring in Delhi NCR</h2>
          <p className="mt-3 text-slate-500">CV Prime&apos;s AI is calibrated for the resume formats used by these Delhi NCR employers.</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {delhiCompanies.map((c) => (
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Most in-demand roles in Delhi NCR — 2026</h2>
          <p className="mt-3 text-slate-500">Build a role-specific resume tailored to Delhi NCR&apos;s job market in one click.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inDemandRoles.map((r) => (
              <Link
                key={r.slug}
                href={`/resume-builder/${r.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <p className="font-display text-base font-bold text-slate-950 group-hover:text-brand">{r.role}</p>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${r.growth === 'Very High' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
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

      {/* ATS keywords */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">ATS keywords Delhi NCR recruiters screen for</h2>
          <p className="mt-3 text-slate-500">Delhi NCR JDs across IT, FMCG, and consulting consistently include these terms. CV Prime checks your resume against them automatically.</p>
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Delhi NCR job hubs — where your resume lands</h2>
          <p className="mt-3 text-slate-500">Each Delhi NCR business district has a distinct industry focus. Target your resume accordingly.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {jobHubs.map((h) => (
              <div key={h.area} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <div>
                  <p className="font-display text-sm font-bold text-slate-950">{h.area}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{h.known}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Resume builder Delhi NCR — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-display text-base font-bold">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">Related resources</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/resume-builder', label: 'AI resume builder' },
              { href: '/resume-builder/business-analyst', label: 'Business analyst resume' },
              { href: '/resume-builder/hr-manager', label: 'HR manager resume' },
              { href: '/resume-builder/operations-manager', label: 'Operations manager resume' },
              { href: '/resume-builder/marketing-manager', label: 'Marketing manager resume' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/resume-tips/how-to-write-a-resume', label: 'How to write a resume' },
              { href: '/cv-builder-india', label: 'CV builder for India' },
              { href: '/resume-builder-bangalore', label: 'Resume builder Bangalore' },
              { href: '/resume-builder-mumbai', label: 'Resume builder Mumbai' },
              { href: '/resume-builder-hyderabad', label: 'Resume builder Hyderabad' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">Land your next Delhi NCR role</h2>
          <p className="mt-4 text-slate-300">
            CV Prime&apos;s AI builds ATS-optimised resumes for Delhi NCR&apos;s IT, consulting, and FMCG job market. Free to start — no credit card required.
          </p>
          <Link
            href="/signup?next=/ai-cv"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
          >
            Build my resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build my Delhi NCR resume free" message="AI resume builder for Delhi NCR IT, consulting & FMCG jobs" />
    </main>
  );
}
