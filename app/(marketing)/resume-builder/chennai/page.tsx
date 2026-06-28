import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MapPin, TrendingUp } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'AI Resume Builder Chennai 2026 — Free ATS Resume for Chennai Jobs | CV Prime',
  description:
    'Free AI resume builder for Chennai jobs 2026. Build an ATS-optimised resume for IT services, automotive, BFSI, and manufacturing companies in Chennai. Tailored for TCS, Infosys, Ford, Zoho, and more.',
  alternates: { canonical: 'https://cv-prime.in/resume-builder/chennai' },
  keywords: [
    'resume builder chennai',
    'cv maker chennai',
    'resume for chennai jobs',
    'chennai resume builder free',
    'ai resume builder chennai',
    'ats resume builder chennai',
    'resume for IT companies chennai',
    'chennai job resume',
    'free resume maker chennai',
    'resume builder tamil nadu',
  ],
  openGraph: {
    title: 'AI Resume Builder Chennai 2026 — Free ATS Resume for Chennai Jobs | CV Prime',
    description: 'Build a free ATS-optimised resume for Chennai jobs in IT services, automotive, BFSI, and manufacturing. Tailored for TCS, Zoho, Ford, and more.',
    url: 'https://cv-prime.in/resume-builder/chennai',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Builder Chennai — CV Prime' }],
  },
};

const chennaiStats = [
  { stat: '₹10L+', label: 'median IT and engineering salary in Chennai for mid-level professionals' },
  { stat: '20,000+', label: 'IT, automotive, and manufacturing jobs posted in Chennai monthly' },
  { stat: '4th', label: 'largest IT services hub in India — strong automotive and manufacturing sector' },
  { stat: '5 min', label: 'to build an ATS-ready Chennai resume with CV Prime' },
];

const topCompanies = [
  { name: 'TCS (HQ Chennai)', roles: 'SDE, QA, SAP, BPO, Consulting', ats: 'Darwinbox' },
  { name: 'Zoho Corporation', roles: 'SDE, QA, Product, Sales, Marketing', ats: 'In-house ATS' },
  { name: 'Ford Motor India', roles: 'Automotive Engineering, IT, Finance', ats: 'Workday' },
  { name: 'Hyundai India (Chennai)', roles: 'Automotive, Manufacturing, IT, HR', ats: 'SAP SuccessFactors' },
  { name: 'Cognizant (Chennai)', roles: 'SDE, Healthcare IT, BPO, SAP', ats: 'Taleo' },
  { name: 'Infosys (Chennai)', roles: 'SDE, SAP, Testing, BPO, Consulting', ats: 'Darwinbox' },
  { name: 'Ashok Leyland', roles: 'Mechanical, Electrical, IT, Finance', ats: 'SAP SuccessFactors' },
  { name: 'HDFC Bank (Chennai hub)', roles: 'Retail Banking, IT, Analytics, Trade', ats: 'SuccessFactors' },
  { name: 'Robert Bosch India', roles: 'Embedded Software, Automotive, IoT', ats: 'Workday' },
  { name: 'Accenture (Chennai)', roles: 'Technology, Consulting, BPO, Analytics', ats: 'Taleo/Workday' },
];

const inDemandSkills = [
  { category: 'IT Services & Testing', skills: 'Java, .NET, SAP, Selenium, Manual QA, Oracle ERP, Mainframe, ServiceNow' },
  { category: 'Automotive Engineering', skills: 'AUTOSAR, Embedded C, CAN, LIN, MATLAB, ADAS, Powertrain, CATIA' },
  { category: 'Product & SaaS (Zoho)', skills: 'JavaScript, React, Python, SQL, Product thinking, SaaS, Zoho CRM/Stack' },
  { category: 'Manufacturing & Operations', skills: 'Lean manufacturing, Six Sigma, SAP MM/PP, Quality management, EHS' },
  { category: 'Data & Analytics', skills: 'Python, SQL, Power BI, Tableau, R, Statistical analysis, Business intelligence' },
  { category: 'BFSI Technology', skills: 'Core banking (Finacle), SQL, Risk analytics, Trade finance, Regulatory compliance' },
];

const faqs = [
  {
    q: 'What is the best resume builder for Chennai jobs in 2026?',
    a: 'CV Prime (cv-prime.in) is the best free AI resume builder for Chennai job seekers. Paste any Chennai company JD and get an ATS score + tailored resume in 60 seconds. CV Prime is optimised for the ATS platforms used by Chennai employers — Darwinbox (TCS, Infosys), Workday (Ford, Bosch), Taleo (Cognizant, Accenture), and SAP SuccessFactors (Hyundai, Ashok Leyland).',
  },
  {
    q: 'What industries should I target for Chennai jobs?',
    a: 'Chennai\'s strongest job sectors in 2026: (1) IT services — TCS HQ, Infosys, Cognizant, Accenture are major Chennai employers. (2) Automotive — Ford, Hyundai, Ashok Leyland, and Bosch Engineering in Chennai make it India\'s "Detroit". (3) SaaS and product technology — Zoho Corporation (one of India\'s largest self-funded SaaS companies) hires heavily in Chennai. (4) BFSI and shared services — many global banks and insurance companies have processing centres in Chennai. (5) Manufacturing and industrial engineering.',
  },
  {
    q: 'How do I get a job at Zoho Corporation in Chennai?',
    a: 'Zoho uses a proprietary ATS and hiring process different from most Indian companies. Key tips: (1) Zoho values strong computer science fundamentals (data structures, algorithms, systems) over frameworks and tools. (2) Zoho does not require CGPA cut-offs — they prioritise problem-solving ability and hands-on projects. (3) Strong GitHub with real projects matters more than certifications. (4) For engineering roles, Zoho\'s written assessment covers coding, logic, and product thinking. For marketing and sales: show metrics-driven work history. Use CV Prime to build a clean, keyword-rich CV for Zoho applications.',
  },
  {
    q: 'What salary can I expect from Chennai IT and automotive jobs in 2026?',
    a: 'Chennai 2026 salaries: IT services fresher (TCS, Infosys, Cognizant): ₹3.5L–₹8L. Mid-level IT (3–5 years): ₹10L–₹22L. Zoho Corporation: ₹8L–₹25L for tech roles (competitive within product companies). Automotive engineering (Ford, Hyundai, Ashok Leyland): ₹4L–₹18L depending on specialisation. Manufacturing and operations: ₹4L–₹15L. Chennai typically pays 15–20% below Bangalore for equivalent tech roles but living costs are significantly lower.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Resume Builder', item: 'https://cv-prime.in/resume-builder' },
    { '@type': 'ListItem', position: 3, name: 'Chennai Resume Builder', item: 'https://cv-prime.in/resume-builder/chennai' },
  ],
};

export default function ChennaiResumeBuilderPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden bg-rose-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-rose-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-400/10 px-4 py-1.5 text-sm font-bold text-rose-200">
            <MapPin className="h-4 w-4" />
            Chennai · Tamil Nadu
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            AI Resume Builder for Chennai Jobs — Free & ATS-Ready 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build an ATS-optimised resume for Chennai&apos;s IT services, automotive, SaaS, and manufacturing companies — TCS, Zoho, Ford, Hyundai, Cognizant, Bosch. Tailored to your JD in minutes.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-rose-400 px-8 py-3.5 text-base font-bold text-white transition hover:bg-rose-300">
              Build my Chennai resume free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ats-checker" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Check my ATS score free
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.03] px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {chennaiStats.map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-rose-600">{item.stat}</p>
              <p className="mt-1 max-w-[180px] text-xs leading-5 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Top Chennai companies hiring now</h2>
          </div>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-3 text-left font-semibold text-slate-300">Company</th>
                  <th className="pb-3 text-left font-semibold text-slate-300">Common roles</th>
                  <th className="pb-3 text-left font-semibold text-slate-300">ATS system</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {topCompanies.map((company) => (
                  <tr key={company.name}>
                    <td className="py-3 font-medium text-white">{company.name}</td>
                    <td className="py-3 text-slate-300">{company.roles}</td>
                    <td className="py-3"><span className="rounded-full bg-rose-500/10 px-2 py-0.5 text-xs font-bold text-rose-300">{company.ats}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Most in-demand skills in Chennai 2026</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {inDemandSkills.map((skill) => (
              <div key={skill.category} className="rounded-2xl bg-white/[0.04] p-5 shadow-sm">
                <div className="flex items-start gap-2">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
                  <div>
                    <p className="text-sm font-bold text-white">{skill.category}</p>
                    <p className="mt-1 text-sm text-slate-400">{skill.skills}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Chennai resume builder — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-display text-lg font-bold text-white">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-white">Explore more resume tools and guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/resume-builder', label: 'Free AI resume builder' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/cv-examples/mechanical-engineer', label: 'Mechanical engineer resume example' },
              { href: '/cv-examples/software-engineer', label: 'Software engineer resume example' },
              { href: '/resume-builder/bangalore', label: 'Bangalore resume builder' },
              { href: '/resume-builder/hyderabad', label: 'Hyderabad resume builder' },
              { href: '/resume-builder/pune', label: 'Pune resume builder' },
              { href: '/salary/mechanical-engineer', label: 'Mechanical engineer salary guide' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 hover:border-rose-300 hover:text-rose-300 transition">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rose-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Build your Chennai resume with AI — free</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">Tailored to TCS, Zoho, Ford, Hyundai, Bosch and 200+ Chennai companies. 3 free PDF exports. No credit card required.</p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-rose-400 px-10 py-4 text-base font-bold text-white hover:bg-rose-300 transition">
            Build my Chennai resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build Chennai resume free" message="AI resume builder for Chennai — ATS-ready for TCS, Zoho, Ford, Hyundai & more" />
    </main>
  );
}
