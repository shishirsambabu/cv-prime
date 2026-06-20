import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MapPin } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'AI Resume Builder for Mumbai — Free CV Maker for Finance, FMCG & Media Jobs | CV Prime',
  description:
    'Build an ATS-optimised resume for Mumbai jobs. CV Prime\'s AI resume builder is tailored for Mumbai\'s finance, FMCG, banking, and media sectors. Free to start — used by professionals at HDFC, Goldman Sachs, McKinsey, and Tata.',
  alternates: { canonical: 'https://cv-prime.in/resume-builder-mumbai' },
  keywords: [
    'resume builder mumbai',
    'ai resume builder mumbai',
    'cv maker mumbai',
    'resume for mumbai jobs',
    'finance resume builder mumbai',
    'mumbai job resume',
    'banking resume mumbai',
    'free resume builder mumbai',
    'fmcg resume mumbai',
    'resume builder bfsi mumbai',
  ],
  openGraph: {
    title: 'AI Resume Builder for Mumbai — Free CV Maker for Finance, FMCG & Media Jobs | CV Prime',
    description:
      'Build an ATS-optimised resume for Mumbai jobs. AI tailors your resume for Mumbai\'s finance, FMCG, banking, and media sectors. Free to start.',
    url: 'https://cv-prime.in/resume-builder-mumbai',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Builder for Mumbai — CV Prime' }],
  },
};

const mumbaiCompanies = [
  { name: 'HDFC Bank', sector: 'Banking / BFSI' },
  { name: 'ICICI Bank', sector: 'Banking / BFSI' },
  { name: 'Kotak Mahindra', sector: 'Banking / BFSI' },
  { name: 'Axis Bank', sector: 'Banking / BFSI' },
  { name: 'JP Morgan', sector: 'Investment Banking' },
  { name: 'Goldman Sachs', sector: 'Investment Banking' },
  { name: 'McKinsey', sector: 'Consulting' },
  { name: 'Deloitte', sector: 'Consulting / Audit' },
  { name: 'PwC', sector: 'Consulting / Audit' },
  { name: 'Tata Group', sector: 'Conglomerate' },
  { name: 'Reliance Industries', sector: 'Energy / Retail' },
  { name: 'HUL', sector: 'FMCG' },
  { name: 'Bombay Stock Exchange', sector: 'Finance / Markets' },
  { name: 'Star / Disney', sector: 'Media / Entertainment' },
];

const inDemandRoles = [
  { role: 'Finance Analyst', salaryRange: '₹5L – ₹40L+', growth: 'High', slug: 'finance-analyst' },
  { role: 'Marketing Manager', salaryRange: '₹6L – ₹35L+', growth: 'High', slug: 'marketing-manager' },
  { role: 'Sales Manager', salaryRange: '₹5L – ₹40L+', growth: 'High', slug: 'sales-manager' },
  { role: 'Operations Manager', salaryRange: '₹5L – ₹30L+', growth: 'High', slug: 'operations-manager' },
  { role: 'HR Manager', salaryRange: '₹4L – ₹25L+', growth: 'Moderate', slug: 'hr-manager' },
  { role: 'Business Analyst', salaryRange: '₹5L – ₹30L+', growth: 'High', slug: 'business-analyst' },
];

const jobHubs = [
  { area: 'Bandra Kurla Complex (BKC)', known: 'Banks, MNCs, financial services HQs' },
  { area: 'Lower Parel', known: 'Media companies, FMCG brands, agencies' },
  { area: 'Nariman Point', known: 'Law firms, legacy financial institutions' },
  { area: 'Powai', known: 'IT campuses, mid-size tech companies' },
  { area: 'Andheri East', known: 'BFSI ops, media, advertising agencies' },
  { area: 'Navi Mumbai / Thane', known: 'IT services, back-office operations' },
];

const atsKeywords = [
  'Financial Modelling', 'P&L Management', 'BFSI', 'CFA / CA',
  'FMCG Marketing', 'Brand Management', 'Category Management', 'Trade Marketing',
  'Investment Banking', 'Equity Research', 'KYC / AML', 'Risk Management',
];

const faqs = [
  {
    q: 'What resume format is best for Mumbai finance jobs?',
    a: 'For Mumbai banking, investment banking, and consulting roles, a traditional reverse-chronological format with a strong academic credentials section is expected. Include CA, CFA, MBA, or CPA qualifications prominently. Recruiters at HDFC Bank, Goldman Sachs, and McKinsey prioritise credentials and then metrics — "Managed a loan book of ₹500Cr" or "Led a deal with enterprise value of ₹200Cr". Keep it to 1–2 pages and avoid creative formatting.',
  },
  {
    q: 'Should I include Mumbai in my resume location?',
    a: 'Yes. List your city as "Mumbai" or "Mumbai, Maharashtra" in your contact section. For roles in BKC or Nariman Point, specifying your local area can help show proximity. Do not include your full residential address — city and pin code is sufficient. If you are open to pan-India relocation, add "Open to relocation" near your contact info.',
  },
  {
    q: 'What keywords do Mumbai FMCG companies screen for?',
    a: 'FMCG companies in Mumbai (HUL, P&G, ITC, Marico, Dabur) screen for: category management, brand P&L, trade marketing, channel strategy, shopper marketing, Nielsen, distributor management, new product development, and RTM (route to market). Mirror these exact terms from the JD in your skills section and experience bullets.',
  },
  {
    q: 'How competitive is the Mumbai job market for freshers?',
    a: 'Very competitive. MBA freshers from IIM, XLRI, and NMIMS have a natural advantage in FMCG and banking. Engineers joining Mumbai companies typically come through campus placements at IITs and NITs. For non-premium-institute candidates, your resume needs to lead with strong internship outcomes, competition wins, and concrete metrics — not just academic credentials. CV Prime\'s AI can help you frame your experience to compete effectively.',
  },
  {
    q: 'How long should a resume be for a Mumbai banking role?',
    a: 'For banking and financial services roles in Mumbai: 1 page for freshers and analysts (0–3 years). 2 pages for associate to vice president level (3–10 years). 3 pages is acceptable for senior VP and director level with extensive deal experience. Never go beyond 3 pages. The content depth should justify the length — a 2-page resume full of generic statements is worse than a tight 1-page resume.',
  },
  {
    q: 'Does CV Prime support finance and BFSI resume templates?',
    a: 'Yes. CV Prime includes Classic and Executive templates that are standard in Mumbai\'s banking and consulting sectors. The Classic template follows the traditional black-and-white format preferred by investment banks and consulting firms. The Executive template adds subtle hierarchy for senior professionals. All templates are ATS-readable and export as clean PDFs.',
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
    { '@type': 'ListItem', position: 3, name: 'Resume Builder Mumbai', item: 'https://cv-prime.in/resume-builder-mumbai' },
  ],
};

export default function ResumeBuilderMumbaiPage(): JSX.Element {
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
            <span className="text-slate-300">Mumbai</span>
          </nav>
          <div className="flex items-center gap-2 text-sm font-bold text-brand mb-4">
            <MapPin className="h-4 w-4" />
            <span>Mumbai · India&apos;s Financial Capital</span>
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            AI resume builder for<br />Mumbai job seekers
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build an ATS-optimised resume for Mumbai&apos;s finance, FMCG, banking, media, and consulting sectors. CV Prime&apos;s AI tailors your resume for every JD — from HDFC and Goldman Sachs to HUL and Tata.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Build my Mumbai resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resume-builder/finance-analyst"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Finance resume
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free plan · 3 PDF exports · No credit card · ATS scoring included</p>
        </div>
      </section>

      {/* Mumbai job market stats */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '₹1.5Cr Cr+', label: 'handled through Mumbai\'s financial markets daily' },
            { stat: '5', label: 'of India\'s top 10 banks headquartered in Mumbai' },
            { stat: '₹8L+', label: 'average BFSI professional salary in Mumbai' },
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Top companies hiring in Mumbai</h2>
          <p className="mt-3 text-slate-500">CV Prime&apos;s AI is calibrated for the resume formats and keyword patterns used by these Mumbai employers.</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {mumbaiCompanies.map((c) => (
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Most in-demand roles in Mumbai — 2026</h2>
          <p className="mt-3 text-slate-500">Build a role-specific resume tailored to Mumbai&apos;s job market in one click.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inDemandRoles.map((r) => (
              <Link
                key={r.slug}
                href={`/resume-builder/${r.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <p className="font-display text-base font-bold text-slate-950 group-hover:text-brand">{r.role}</p>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${r.growth === 'Very High' ? 'bg-green-100 text-green-700' : r.growth === 'High' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">ATS keywords Mumbai recruiters screen for</h2>
          <p className="mt-3 text-slate-500">Mumbai JDs in banking, FMCG, and consulting consistently include these keywords. CV Prime checks your resume against them automatically.</p>
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Mumbai job hubs — where your resume lands</h2>
          <p className="mt-3 text-slate-500">Each Mumbai business district has a distinct industry concentration. Target your resume accordingly.</p>
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
          <h2 className="font-display text-2xl font-bold">Resume builder Mumbai — FAQ</h2>
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
              { href: '/resume-builder/finance-analyst', label: 'Finance analyst resume' },
              { href: '/resume-builder/marketing-manager', label: 'Marketing manager resume' },
              { href: '/resume-builder/sales-manager', label: 'Sales manager resume' },
              { href: '/cv-examples/finance-analyst', label: 'Finance analyst CV examples' },
              { href: '/salary/finance-analyst', label: 'Finance analyst salary India' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/resume-tips/how-to-write-a-resume', label: 'How to write a resume' },
              { href: '/cv-builder-india', label: 'CV builder for India' },
              { href: '/resume-builder-bangalore', label: 'Resume builder Bangalore' },
              { href: '/resume-builder-delhi', label: 'Resume builder Delhi' },
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
          <h2 className="font-display text-3xl font-bold">Land your next Mumbai role</h2>
          <p className="mt-4 text-slate-300">
            CV Prime&apos;s AI builds ATS-optimised resumes for Mumbai&apos;s finance, FMCG, and consulting job market. Free to start — no credit card required.
          </p>
          <Link
            href="/signup?next=/ai-cv"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
          >
            Build my resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build my Mumbai resume free" message="AI resume builder for Mumbai finance, FMCG & banking jobs" />
    </main>
  );
}
