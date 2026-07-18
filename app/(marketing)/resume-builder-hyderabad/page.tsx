import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MapPin } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';
import { CityRoleMatrixLinks } from '@/components/marketing/CityRoleMatrixLinks';

export const metadata: Metadata = {
  title: 'AI Resume Builder for Hyderabad — Free CV Maker for IT, Pharma & FMCG Jobs | CV Prime',
  description:
    'Build an ATS-optimised resume for Hyderabad jobs. CV Prime\'s AI resume builder is tailored for Hyderabad\'s IT, pharma, and FMCG sectors. Free to start — used by professionals at Microsoft, Amazon, Dr. Reddy\'s, and Infosys.',
  alternates: { canonical: 'https://cv-prime.in/resume-builder-hyderabad' },
  keywords: [
    'resume builder hyderabad',
    'ai resume builder hyderabad',
    'cv maker hyderabad',
    'resume for hyderabad jobs',
    'it resume builder hyderabad',
    'hyderabad job resume',
    'hitec city resume builder',
    'free resume builder hyderabad',
    'pharma resume hyderabad',
    'software engineer resume hyderabad',
  ],
  openGraph: {
    title: 'AI Resume Builder for Hyderabad — Free CV Maker for IT, Pharma & FMCG Jobs | CV Prime',
    description:
      'Build an ATS-optimised resume for Hyderabad jobs. AI tailors your resume for Hyderabad\'s IT, pharma, and FMCG sectors. Free to start.',
    url: 'https://cv-prime.in/resume-builder-hyderabad',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Builder for Hyderabad — CV Prime' }],
  },
};

const hyderabadCompanies = [
  { name: 'Microsoft', sector: 'Technology' },
  { name: 'Google', sector: 'Technology' },
  { name: 'Amazon', sector: 'Cloud / E-commerce' },
  { name: 'Infosys', sector: 'IT Services' },
  { name: 'TCS', sector: 'IT Services' },
  { name: 'Wipro', sector: 'IT Services' },
  { name: 'Dr. Reddy\'s', sector: 'Pharma' },
  { name: 'Cipla', sector: 'Pharma' },
  { name: 'Aurobindo Pharma', sector: 'Pharma' },
  { name: 'HSBC HDEC', sector: 'Banking / Finance' },
  { name: 'Cyient', sector: 'Engineering Services' },
  { name: 'Genpact', sector: 'BPO / Analytics' },
  { name: 'Deloitte', sector: 'Consulting' },
  { name: 'Accenture', sector: 'IT Consulting' },
];

const inDemandRoles = [
  { role: 'Software Engineer', salaryRange: '₹5L – ₹60L+', growth: 'Very High', slug: 'software-engineer' },
  { role: 'Data Analyst', salaryRange: '₹4L – ₹28L+', growth: 'High', slug: 'data-analyst' },
  { role: 'QA Engineer', salaryRange: '₹4L – ₹25L+', growth: 'High', slug: 'qa-engineer' },
  { role: 'DevOps Engineer', salaryRange: '₹6L – ₹45L+', growth: 'Very High', slug: 'devops-engineer' },
  { role: 'Operations Manager', salaryRange: '₹5L – ₹28L+', growth: 'High', slug: 'operations-manager' },
  { role: 'Business Analyst', salaryRange: '₹4L – ₹25L+', growth: 'High', slug: 'business-analyst' },
];

const jobHubs = [
  { area: 'HITEC City', known: 'MNC tech campuses, Microsoft, Google, Oracle' },
  { area: 'Gachibowli', known: 'IT parks, financial services, BPO' },
  { area: 'Madhapur', known: 'Startups, mid-size IT, coworking hubs' },
  { area: 'Banjara Hills / Jubilee Hills', known: 'Healthcare, media, luxury brands' },
  { area: 'Uppal / LB Nagar', known: 'Pharma, manufacturing, engineering' },
  { area: 'Shamshabad / Airport Corridor', known: 'Logistics, aviation, export industries' },
];

const atsKeywords = [
  'Full Stack Development', 'Java / Spring Boot', 'Python / Django', 'SQL Server',
  'Selenium Testing', 'Automation QA', 'Azure / AWS', 'SAP ABAP',
  'Pharmaceutical QC', 'GMP / FDA', 'Clinical Research', 'Data Warehousing',
];

const faqs = [
  {
    q: 'What resume format do Hyderabad IT companies prefer?',
    a: 'For Hyderabad IT companies — both product companies in HITEC City (Microsoft, Google, Amazon) and IT services firms (Infosys, TCS, Wipro) — a single-column reverse-chronological resume is standard. Product companies want concise, metric-heavy bullets (1 page preferred). IT services companies often request a detailed project summary section with client names, technologies used, team size, and duration. CV Prime supports both formats.',
  },
  {
    q: 'Is Hyderabad good for tech freshers in 2026?',
    a: 'Yes. Hyderabad is one of the best cities in India for tech freshers. Microsoft, Amazon, and Google have large engineering campuses here; Infosys, TCS, and Wipro hire hundreds of freshers annually through campus placements at JNTUH, Osmania University, BITS Hyderabad, and IIIT Hyderabad. Fresher salaries start at ₹3.5L–₹7L for IT services and ₹12L–₹20L for product companies.',
  },
  {
    q: 'What keywords should pharma professionals include for Hyderabad jobs?',
    a: 'Hyderabad is India\'s pharmaceutical capital with Dr. Reddy\'s, Cipla, Aurobindo, and Divi\'s headquartered here. Pharma JDs screen for: Good Manufacturing Practice (GMP), FDA compliance, cGMP, HPLC, GC analysis, analytical chemistry, regulatory affairs (CDSCO, USFDA, EMA), QA/QC, validation, SOP writing, and batch record review. Include your regulatory submission experience if any — this is a high-value differentiator.',
  },
  {
    q: 'How do I write a resume for a BPO or analytics job in Hyderabad?',
    a: 'Hyderabad has a large BPO and analytics cluster (Genpact, Deloitte Shared Services, HSBC HDEC). For analytics roles: emphasise SQL, Python, Tableau/Power BI, and process improvement experience. For BPO roles: emphasise domain knowledge (BFSI, healthcare), process metrics (AHT, CSAT, FTR), shift flexibility, and client management. Include international client exposure where applicable — Hyderabad BPOs serve many US and UK clients.',
  },
  {
    q: 'What salary can I expect for a software engineer in Hyderabad?',
    a: 'Hyderabad software engineer salaries in 2026: Fresher / 0–1 year: ₹3.5L–₹10L. Mid-level / 2–5 years: ₹10L–₹28L. Senior / 5–8 years: ₹22L–₹50L. Staff / principal engineers at product companies: ₹45L–₹1Cr+. Microsoft and Google Hyderabad pay among the highest in the city with significant ESOP components.',
  },
  {
    q: 'Does CV Prime work for Hyderabad government and PSU applications?',
    a: 'CV Prime primarily targets private sector resumes optimised for ATS software used by IT, pharma, and consulting companies. For government and PSU applications (Telangana state government, HAL, DRDO), the format requirements differ — these applications typically require prescribed bio-data forms, not standard resumes. CV Prime\'s templates are best suited for private sector and MNC applications in Hyderabad.',
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
    { '@type': 'ListItem', position: 3, name: 'Resume Builder Hyderabad', item: 'https://cv-prime.in/resume-builder-hyderabad' },
  ],
};

export default function ResumeBuilderHyderabadPage(): JSX.Element {
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
            <span className="text-slate-300">Hyderabad</span>
          </nav>
          <div className="flex items-center gap-2 text-sm font-bold text-brand mb-4">
            <MapPin className="h-4 w-4" />
            <span>Hyderabad · India&apos;s Rising Tech & Pharma Hub</span>
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            AI resume builder for<br />Hyderabad job seekers
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build an ATS-optimised resume for Hyderabad jobs across IT, pharma, and FMCG sectors. CV Prime&apos;s AI tailors your resume for every JD — from Microsoft and Amazon to Dr. Reddy&apos;s and Infosys.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Build my Hyderabad resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resume-builder/software-engineer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Software engineer resume
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free plan · 3 PDF exports · No credit card · ATS scoring included</p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/10 bg-white/[0.03] px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '1,500+', label: 'IT and tech companies in HITEC City alone' },
            { stat: '#1', label: 'city in India for pharmaceutical manufacturing' },
            { stat: '₹8L+', label: 'average HITEC City software engineer salary' },
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Top companies hiring in Hyderabad</h2>
          <p className="mt-3 text-slate-400">CV Prime&apos;s AI is calibrated for the ATS formats used by these Hyderabad employers.</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {hyderabadCompanies.map((c) => (
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Most in-demand roles in Hyderabad — 2026</h2>
          <p className="mt-3 text-slate-400">Build a role-specific resume tailored to Hyderabad&apos;s job market in one click.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inDemandRoles.map((r) => (
              <Link
                key={r.slug}
                href={`/resume-builder/${r.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-brand hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <p className="font-display text-base font-bold text-white group-hover:text-brand">{r.role}</p>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${r.growth === 'Very High' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">ATS keywords Hyderabad recruiters screen for</h2>
          <p className="mt-3 text-slate-400">Hyderabad JDs across IT, pharma, and analytics consistently include these terms.</p>
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Hyderabad job hubs — where your resume lands</h2>
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
          <h2 className="font-display text-2xl font-bold">Resume builder Hyderabad — FAQ</h2>
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
              { href: '/resume-builder/devops-engineer', label: 'DevOps engineer resume' },
              { href: '/resume-builder/qa-engineer', label: 'QA engineer resume' },
              { href: '/resume-builder/data-analyst', label: 'Data analyst resume' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/resume-tips/how-to-write-a-resume', label: 'How to write a resume' },
              { href: '/cv-builder-india', label: 'CV builder for India' },
              { href: '/resume-builder-bangalore', label: 'Resume builder Bangalore' },
              { href: '/resume-builder-chennai', label: 'Resume builder Chennai' },
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

      <CityRoleMatrixLinks citySlug="hyderabad" cityName="Hyderabad" />

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">Land your next Hyderabad role</h2>
          <p className="mt-4 text-slate-300">
            CV Prime&apos;s AI builds ATS-optimised resumes for Hyderabad&apos;s IT, pharma, and analytics job market. Free to start — no credit card required.
          </p>
          <Link
            href="/signup?next=/ai-cv"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
          >
            Build my resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build my Hyderabad resume free" message="AI resume builder for Hyderabad IT, pharma & analytics jobs" />
    </main>
  );
}
