import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MapPin, CheckCircle2, TrendingUp } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'AI Resume Builder for Pune — Free CV Maker for IT, Banking & Manufacturing Jobs | CV Prime',
  description:
    'Build an ATS-optimised resume for Pune jobs. CV Prime\'s AI resume builder is tailored for Pune\'s IT, banking, automotive, and manufacturing sectors. Free to start — used by professionals at Infosys, Bajaj, HSBC, and Barclays.',
  alternates: { canonical: 'https://cv-prime.in/resume-builder-pune' },
  keywords: [
    'resume builder pune',
    'ai resume builder pune',
    'cv maker pune',
    'resume for pune jobs',
    'it resume builder pune',
    'pune job resume',
    'hinjewadi resume builder',
    'free resume builder pune',
    'software engineer resume pune',
    'banking resume pune',
  ],
  openGraph: {
    title: 'AI Resume Builder for Pune — Free CV Maker for IT, Banking & Manufacturing Jobs | CV Prime',
    description:
      'Build an ATS-optimised resume for Pune jobs. AI tailors your resume for Pune\'s IT, banking, and manufacturing sectors. Free to start.',
    url: 'https://cv-prime.in/resume-builder-pune',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Builder for Pune — CV Prime' }],
  },
};

const puneCompanies = [
  { name: 'Infosys', sector: 'IT Services' },
  { name: 'Wipro', sector: 'IT Services' },
  { name: 'TCS', sector: 'IT Services' },
  { name: 'Cognizant', sector: 'IT Services' },
  { name: 'HSBC HDEC', sector: 'Banking Ops' },
  { name: 'Barclays', sector: 'Banking / Finance' },
  { name: 'Deutsche Bank', sector: 'Banking / Finance' },
  { name: 'Bajaj Auto', sector: 'Automotive' },
  { name: 'Mahindra', sector: 'Automotive' },
  { name: 'Forbes Marshall', sector: 'Industrial Equipment' },
  { name: 'Thermax', sector: 'Energy / Engineering' },
  { name: 'Bharat Forge', sector: 'Forging / Manufacturing' },
  { name: 'Symbiosis Technologies', sector: 'Education / IT' },
  { name: 'WNS Global', sector: 'BPO / Analytics' },
];

const inDemandRoles = [
  { role: 'Software Engineer', salaryRange: '₹4L – ₹55L+', growth: 'Very High', slug: 'software-engineer' },
  { role: 'Finance Analyst', salaryRange: '₹4L – ₹28L+', growth: 'High', slug: 'finance-analyst' },
  { role: 'Data Analyst', salaryRange: '₹4L – ₹25L+', growth: 'High', slug: 'data-analyst' },
  { role: 'Mechanical Engineer', salaryRange: '₹3.5L – ₹22L+', growth: 'Moderate', slug: 'mechanical-engineer' },
  { role: 'QA Engineer', salaryRange: '₹4L – ₹22L+', growth: 'High', slug: 'qa-engineer' },
  { role: 'Operations Manager', salaryRange: '₹5L – ₹28L+', growth: 'High', slug: 'operations-manager' },
];

const jobHubs = [
  { area: 'Hinjewadi IT Park', known: 'TCS, Wipro, Infosys, Cognizant campuses' },
  { area: 'Magarpatta City', known: 'Product companies, MNCs, co-working spaces' },
  { area: 'Viman Nagar / Kalyani Nagar', known: 'Banking ops, finance captives, HSBC, Barclays' },
  { area: 'Pimpri-Chinchwad (PCMC)', known: 'Bajaj Auto, Mahindra, manufacturing units' },
  { area: 'Kharadi', known: 'Emerging IT hub, SaaS companies, startups' },
  { area: 'Baner / Aundh', known: 'Tech startups, mid-size software firms, MNCs' },
];

const atsKeywords = [
  'Java / Spring Boot', 'Python', 'React / Angular', 'Selenium',
  'Agile / Scrum', 'SQL / Oracle', 'Financial Reporting', 'IFRS / GAAP',
  'AutoCAD / SolidWorks', 'Lean Manufacturing', 'Six Sigma', 'SAP Finance',
];

const faqs = [
  {
    q: 'What is the job market like in Pune for IT professionals?',
    a: 'Pune is India\'s fourth-largest IT hub with a strong cluster in Hinjewadi IT Park. The city houses major delivery centres for Infosys, Wipro, TCS, Cognizant, and Accenture alongside a growing product company ecosystem in Magarpatta and Kharadi. The IT market in Pune is less saturated than Bangalore but highly competitive for senior roles. Freshers from Pune University, COEP, and MIT AOE have strong placement pipelines into Pune\'s IT ecosystem.',
  },
  {
    q: 'How should I write a resume for Pune banking captive roles?',
    a: 'Pune has a large banking operations cluster — HSBC HDEC, Barclays Technology Centre, Deutsche Bank, and Credit Suisse (now UBS) all have significant Pune operations. For these roles, emphasise: domain knowledge (trade finance, retail banking, risk, compliance), regulatory frameworks (Basel III, AML, CCAR), and process automation. Tool expertise in SQL, Excel, Python, and Tableau is valued. Format your resume with a strong summary leading with the specific banking domain and years of experience.',
  },
  {
    q: 'Which resume format works best for Pune manufacturing jobs?',
    a: 'For Pune automotive and manufacturing companies (Bajaj, Mahindra, Bharat Forge, Thermax), a structured resume with project-level details is preferred: project scope (budget in ₹, timeline, team size), outcome metrics (cost reduction %, defect reduction, productivity improvement), and quality certifications (ISO 9001, IATF 16949, Six Sigma Belt level). Include your ERP system experience (SAP MM/PP/QM) as it is a differentiating keyword for manufacturing roles in Pune.',
  },
  {
    q: 'What salary can I expect as a software engineer in Pune?',
    a: 'Pune software engineer salaries in 2026: Fresher / 0–1 year: ₹3.5L–₹8L. Mid-level / 2–5 years: ₹10L–₹25L. Senior / 5–8 years: ₹20L–₹45L. Principal level at product companies: ₹40L–₹80L+. Salaries at Hinjewadi IT services companies are typically 10–15% lower than Bangalore equivalents, but the cost of living in Pune is also 20–30% lower, making the effective compensation comparable.',
  },
  {
    q: 'Is Pune good for freshers from tier-2 engineering colleges?',
    a: 'Yes. Pune has one of India\'s largest concentrations of tier-2 engineering colleges (COEP, VIT Pune, MIT AOE, Symbiosis Institute of Technology) and IT services companies actively recruit from these campuses. For freshers, a Pune-targeted resume should lead with CGPA (if 7.5+), final year project outcomes, internship experience, and technical skills. Companies like TCS, Wipro, and Infosys have structured fresher programs that recruit heavily from Pune-area colleges.',
  },
  {
    q: 'Does CV Prime help with HSBC or Barclays Pune application resumes?',
    a: 'Yes. CV Prime\'s AI understands the resume formats and keyword patterns used by banking captive operations in Pune. The Classic or Executive templates work best for HSBC and Barclays applications. The AI will automatically include relevant banking domain keywords (risk operations, transaction monitoring, know your customer, anti-money laundering) based on the job description you paste. Pune banking captive roles typically use Taleo or Workday ATS — CV Prime exports ATS-safe PDFs.',
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
    { '@type': 'ListItem', position: 3, name: 'Resume Builder Pune', item: 'https://cv-prime.in/resume-builder-pune' },
  ],
};

export default function ResumeBuilderPunePage(): JSX.Element {
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
            <span className="text-slate-300">Pune</span>
          </nav>
          <div className="flex items-center gap-2 text-sm font-bold text-brand mb-4">
            <MapPin className="h-4 w-4" />
            <span>Pune · IT, Banking & Manufacturing Hub</span>
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            AI resume builder for<br />Pune job seekers
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build an ATS-optimised resume for Pune jobs across IT services, banking captives, automotive, and manufacturing. CV Prime&apos;s AI tailors your resume for every JD — from Infosys and HSBC to Bajaj Auto and Mahindra.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Build my Pune resume free
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
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '4th', label: 'largest IT hub in India by company count' },
            { stat: '200+', label: 'banking and financial services firms in Pune' },
            { stat: '₹7L+', label: 'average IT professional salary in Hinjewadi' },
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Top companies hiring in Pune</h2>
          <p className="mt-3 text-slate-500">CV Prime&apos;s AI is calibrated for the ATS formats used by these Pune employers.</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {puneCompanies.map((c) => (
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Most in-demand roles in Pune — 2026</h2>
          <p className="mt-3 text-slate-500">Build a role-specific resume tailored to Pune&apos;s job market in one click.</p>
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">ATS keywords Pune recruiters screen for</h2>
          <p className="mt-3 text-slate-500">Pune JDs across IT, banking, and manufacturing consistently include these terms.</p>
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Pune job hubs — where your resume lands</h2>
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
          <h2 className="font-display text-2xl font-bold">Resume builder Pune — FAQ</h2>
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
              { href: '/resume-builder/software-engineer', label: 'Software engineer resume' },
              { href: '/resume-builder/finance-analyst', label: 'Finance analyst resume' },
              { href: '/resume-builder/mechanical-engineer', label: 'Mechanical engineer resume' },
              { href: '/resume-builder/data-analyst', label: 'Data analyst resume' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/resume-tips/how-to-write-a-resume', label: 'How to write a resume' },
              { href: '/cv-builder-india', label: 'CV builder for India' },
              { href: '/resume-builder-bangalore', label: 'Resume builder Bangalore' },
              { href: '/resume-builder-mumbai', label: 'Resume builder Mumbai' },
              { href: '/resume-builder-chennai', label: 'Resume builder Chennai' },
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
          <h2 className="font-display text-3xl font-bold">Land your next Pune role</h2>
          <p className="mt-4 text-slate-300">
            CV Prime&apos;s AI builds ATS-optimised resumes for Pune&apos;s IT, banking, and manufacturing job market. Free to start — no credit card required.
          </p>
          <Link
            href="/signup?next=/ai-cv"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
          >
            Build my resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build my Pune resume free" message="AI resume builder for Pune IT, banking & manufacturing jobs" />
    </main>
  );
}
