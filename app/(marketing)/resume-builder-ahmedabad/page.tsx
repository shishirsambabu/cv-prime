import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'AI Resume Builder for Ahmedabad — Free CV Maker for IT, Pharma & Finance Jobs | CV Prime',
  description:
    'Build an ATS-optimised resume for Ahmedabad jobs. CV Prime\'s AI resume builder is designed for Ahmedabad\'s IT, pharmaceutical, diamond, and BFSI sectors. Free to start — ATS-ready for Zydus, Sun Pharma, TCS GIFT City, and top Ahmedabad companies.',
  alternates: { canonical: 'https://cv-prime.in/resume-builder-ahmedabad' },
  keywords: [
    'resume builder ahmedabad',
    'ai resume builder ahmedabad',
    'cv maker ahmedabad',
    'resume for ahmedabad jobs',
    'it resume builder ahmedabad',
    'ahmedabad job resume',
    'free resume builder ahmedabad',
    'gift city resume',
    'pharma resume ahmedabad',
    'resume builder gujarat',
  ],
  openGraph: {
    title: 'AI Resume Builder for Ahmedabad — Free CV Maker for IT, Pharma & Finance Jobs | CV Prime',
    description:
      'Build an ATS-optimised resume for Ahmedabad jobs. AI tailors your resume for IT, pharma, GIFT City finance, and corporate roles in Ahmedabad. Free to start.',
    url: 'https://cv-prime.in/resume-builder-ahmedabad',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Builder for Ahmedabad — CV Prime' }],
  },
};

const ahmedabadCompanies = [
  { name: 'Zydus Group', sector: 'Pharmaceuticals' },
  { name: 'Sun Pharma', sector: 'Pharmaceuticals' },
  { name: 'Torrent Group', sector: 'Pharma / Power' },
  { name: 'Adani Group', sector: 'Infrastructure / Energy' },
  { name: 'TCS', sector: 'IT Services' },
  { name: 'Wipro', sector: 'IT Services' },
  { name: 'Infosys', sector: 'IT Services' },
  { name: 'HDFC Bank', sector: 'BFSI' },
  { name: 'ICICI Bank', sector: 'BFSI' },
  { name: 'Deloitte USI', sector: 'Consulting' },
  { name: 'KPMG', sector: 'Consulting' },
  { name: 'Amazon', sector: 'E-commerce / Cloud' },
];

const inDemandRoles = [
  { role: 'Software Engineer', salaryRange: '₹4L – ₹40L+', growth: 'High', slug: 'software-engineer' },
  { role: 'Finance Analyst', salaryRange: '₹5L – ₹25L+', growth: 'High', slug: 'finance-analyst' },
  { role: 'Data Analyst', salaryRange: '₹4L – ₹22L+', growth: 'High', slug: 'data-analyst' },
  { role: 'Business Analyst', salaryRange: '₹5L – ₹20L+', growth: 'High', slug: 'business-analyst' },
  { role: 'Product Manager', salaryRange: '₹12L – ₹50L+', growth: 'High', slug: 'product-manager' },
  { role: 'Operations Manager', salaryRange: '₹6L – ₹22L+', growth: 'High', slug: 'operations-manager' },
];

const jobHubs = [
  { area: 'GIFT City (Gandhinagar)', known: 'India\'s first IFSC — fintech, banking, financial services' },
  { area: 'SG Highway', known: 'IT offices, MNCs, corporate parks' },
  { area: 'Prahlad Nagar', known: 'BPO, consulting, IT services' },
  { area: 'Satellite / Bodakdev', known: 'FMCG, pharma, corporate HQs' },
  { area: 'Vatva / Odhav', known: 'Pharmaceuticals, chemicals, manufacturing' },
  { area: 'Changodar / Sanand', known: 'Auto, EV manufacturing (Tata, Suzuki)' },
];

const atsKeywords = [
  'Java / Python / React', 'SAP / ERP', 'Financial Modelling', 'GIFT City IFSC',
  'Pharma Regulatory', 'GMP / GLP', 'Power BI / Tableau', 'SEBI / FEMA',
  'Supply Chain', 'Six Sigma / Lean', 'Treasury Management', 'Risk Management',
];

const faqs = [
  {
    q: 'What is GIFT City and how should I mention it on my resume?',
    a: 'GIFT City (Gujarat International Finance Tec-City) in Gandhinagar is India\'s first International Financial Services Centre (IFSC). If you\'re applying to GIFT City jobs (banking, fintech, asset management, insurance), mention IFSC-specific skills: FEMA compliance, SEBI regulations, offshore banking, derivatives trading, FX/treasury. Frame your experience around regulatory knowledge and international finance exposure.',
  },
  {
    q: 'Which resume format is best for Ahmedabad pharma companies?',
    a: 'For pharmaceutical companies in Ahmedabad (Zydus, Sun Pharma, Cadila, Torrent): a reverse-chronological format with a strong skills section including regulatory keywords (GMP, GLP, ICH guidelines, FDA submissions, ANDA filing, clinical trials, pharmacovigilance) is essential. Mention any CAPA experience, audit readiness, and quality management certifications. ATS systems at pharma companies parse technical terminology strictly.',
  },
  {
    q: 'How should I tailor my resume for Ahmedabad IT companies vs GIFT City roles?',
    a: 'For Ahmedabad IT companies (TCS, Wipro, Infosys, Deloitte USI): standard software engineering resume with tech stack, project outcomes, and Agile methodology. For GIFT City financial roles: emphasise compliance, regulatory knowledge (SEBI, RBI, IRDAI), financial products, treasury operations, and risk management. CV Prime\'s AI adjusts your resume based on the specific JD you paste.',
  },
  {
    q: 'Is a one-page resume expected for Ahmedabad jobs?',
    a: 'For IT services (TCS, Wipro) and entry-level roles: one page for 0–3 years. For experienced professionals in consulting (Deloitte, KPMG) and BFSI: two pages is acceptable. For pharma roles, a detailed two-page resume covering regulatory experience, GMP training, and quality systems is appropriate for experienced candidates.',
  },
  {
    q: 'What are the best job portals for Ahmedabad jobs?',
    a: 'For Ahmedabad, Naukri.com is the dominant platform — optimise your Naukri profile with the same keywords from your CV Prime resume. LinkedIn is important for GIFT City finance and consulting roles. Company career portals are used by Zydus, Adani, and Torrent. TimesJobs and Shine are secondary but used by some Ahmedabad-based SMEs.',
  },
  {
    q: 'What is the average salary for software engineers in Ahmedabad?',
    a: 'Ahmedabad software engineer salaries in 2026: Fresher/0–1 year: ₹3L–₹7L. Mid-level/2–5 years: ₹7L–₹20L. Senior/5–8 years: ₹15L–₹38L+. GIFT City financial technology roles typically pay 20–30% premium over standard IT roles. Salaries in Ahmedabad are typically 20–30% lower than Bangalore or Mumbai for equivalent roles.',
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
    { '@type': 'ListItem', position: 3, name: 'Resume Builder Ahmedabad', item: 'https://cv-prime.in/resume-builder-ahmedabad' },
  ],
};

export default function ResumeBuilderAhmedabadPage(): JSX.Element {
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
            <span className="text-slate-300">Ahmedabad</span>
          </nav>
          <div className="flex items-center gap-2 text-sm font-bold text-brand mb-4">
            <MapPin className="h-4 w-4" />
            <span>Ahmedabad · Gujarat&apos;s Commercial Capital</span>
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            AI resume builder for<br />Ahmedabad job seekers
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build an ATS-optimised resume for Ahmedabad&apos;s IT, pharmaceutical, GIFT City finance, and industrial sectors. CV Prime&apos;s AI tailors your resume for every JD — from Zydus and Adani to TCS and Deloitte USI.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Build my Ahmedabad resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resume-builder/finance-analyst"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Finance Analyst resume
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free plan · 3 PDF exports · No credit card · ATS scoring included</p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: 'GIFT City', label: 'India\'s only IFSC — new frontier for finance careers' },
            { stat: '₹3L–₹40L', label: 'software engineer salary range in Ahmedabad' },
            { stat: 'Top 5', label: 'pharma manufacturing hub in India' },
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Top companies hiring in Ahmedabad</h2>
          <p className="mt-3 text-slate-500">CV Prime&apos;s AI knows the ATS formats and keyword patterns used by these companies.</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {ahmedabadCompanies.map((c) => (
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Most in-demand roles in Ahmedabad — 2026</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inDemandRoles.map((r) => (
              <Link
                key={r.slug}
                href={`/resume-builder/${r.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand hover:shadow-md"
              >
                <p className="font-display text-base font-bold text-slate-950 group-hover:text-brand">{r.role}</p>
                <p className="mt-2 text-sm text-slate-500">{r.salaryRange}</p>
                <p className="mt-3 flex items-center gap-1 text-xs font-semibold text-brand">
                  Build this resume <ArrowRight className="h-3 w-3" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Job hubs */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Ahmedabad job hubs — where your resume lands</h2>
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

      {/* ATS Keywords */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">ATS keywords Ahmedabad recruiters screen for</h2>
          <p className="mt-3 text-slate-500">Ahmedabad IT, pharma, and BFSI JDs consistently include these keywords.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {atsKeywords.map((kw) => (
              <span key={kw} className="rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-sm font-semibold text-brand">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Resume builder Ahmedabad — frequently asked questions</h2>
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
            { href: '/resume-builder-kolkata', label: 'Kolkata' },
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
            Build your Ahmedabad resume free — in under 5 minutes
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Join job seekers across India who use CV Prime to beat the ATS filter and land more interviews. Free to start — no credit card required.
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
