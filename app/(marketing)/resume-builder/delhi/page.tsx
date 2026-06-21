import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MapPin, TrendingUp } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'AI Resume Builder Delhi NCR 2026 — Free ATS Resume for Delhi Jobs | CV Prime',
  description:
    'Free AI resume builder for Delhi NCR jobs 2026. Build an ATS-optimised resume for MNCs, consulting, e-commerce, and IT companies in Delhi, Noida, and Gurgaon. Tailored for Amazon, Snapdeal, MakeMyTrip, and more.',
  alternates: { canonical: 'https://cv-prime.in/resume-builder/delhi' },
  keywords: [
    'resume builder delhi',
    'cv maker delhi ncr',
    'resume for delhi jobs',
    'delhi resume builder free',
    'ai resume builder delhi',
    'ats resume builder delhi',
    'resume builder gurgaon',
    'resume builder noida',
    'resume for MNC delhi',
    'delhi job resume',
    'free resume maker delhi ncr',
    'resume builder delhi ncr 2026',
  ],
  openGraph: {
    title: 'AI Resume Builder Delhi NCR 2026 — Free ATS Resume for Delhi Jobs | CV Prime',
    description: 'Build a free ATS-optimised resume for Delhi NCR jobs. Tailored for MNCs, consulting, e-commerce, and IT companies in Delhi, Noida, and Gurgaon.',
    url: 'https://cv-prime.in/resume-builder/delhi',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Builder Delhi NCR — CV Prime' }],
  },
};

const delhiStats = [
  { stat: '₹14L+', label: 'average senior tech and MNC salary in Delhi NCR region' },
  { stat: '35,000+', label: 'jobs posted monthly in Delhi, Noida, and Gurgaon combined' },
  { stat: '88%', label: 'of large MNCs in Delhi NCR use ATS to pre-screen all applications' },
  { stat: '5 min', label: 'to build an ATS-ready Delhi NCR resume with CV Prime' },
];

const topCompanies = [
  { name: 'Amazon India (Noida)', roles: 'SDE, PM, Operations, Analytics', ats: 'Workday' },
  { name: 'Snapdeal (Gurgaon)', roles: 'Technology, Product, Marketing, Ops', ats: 'Greenhouse' },
  { name: 'MakeMyTrip (Gurgaon)', roles: 'SDE, PM, Data, Marketing, Finance', ats: 'Greenhouse' },
  { name: 'Info Edge / Naukri (Noida)', roles: 'Technology, Product, Sales, Marketing', ats: 'In-house ATS' },
  { name: 'Paytm (Noida)', roles: 'SDE, PM, Finance, Risk, Data Science', ats: 'Greenhouse' },
  { name: 'BCG India (Gurgaon)', roles: 'Analyst, Associate, Project Leader', ats: 'Greenhouse' },
  { name: 'Deloitte India (Gurgaon)', roles: 'Consulting, Technology, Audit, Advisory', ats: 'Taleo' },
  { name: 'HCL Technologies (Noida)', roles: 'SDE, QA, SAP, DevOps, Consulting', ats: 'Darwinbox' },
  { name: 'Wipro (Gurgaon)', roles: 'SDE, BPO, Analytics, Consulting', ats: 'Darwinbox' },
  { name: 'Genpact (Gurgaon)', roles: 'Process, Analytics, Technology, Finance', ats: 'Workday' },
];

const inDemandSkills = [
  { category: 'Enterprise IT / SAP', skills: 'SAP ABAP, SAP FICO, Oracle ERP, Salesforce, Java, .NET, ServiceNow' },
  { category: 'Data & Analytics', skills: 'Python, SQL, Power BI, Tableau, Excel, R, Data Warehousing' },
  { category: 'Technology', skills: 'Java, Python, React, Node.js, AWS, Azure, Microservices, QA/SDET' },
  { category: 'Consulting & Strategy', skills: 'Excel, PowerPoint, Stakeholder management, Process improvement, Six Sigma' },
  { category: 'E-commerce & Growth', skills: 'Performance marketing, SEO, SEM, Amazon Seller Central, Logistics, CRM' },
  { category: 'HR & Operations', skills: 'HRBP, talent acquisition, HRMS (Darwinbox, Workday), L&D, C&B' },
];

const faqs = [
  {
    q: 'What is the best resume builder for Delhi NCR jobs in 2026?',
    a: 'CV Prime (cv-prime.in) is the top free AI resume builder for Delhi NCR job seekers. You can paste any Delhi, Noida, or Gurgaon company\'s JD and receive an ATS score + tailored resume in seconds. CV Prime supports all major ATS platforms used by Delhi NCR companies — Workday, Greenhouse, Taleo, and Darwinbox.',
  },
  {
    q: 'How do I write a resume for MNC jobs in Delhi NCR?',
    a: 'For MNC roles in Delhi NCR: (1) Use formal, outcome-driven bullet points with measurable impact — MNC HR teams value quantified achievements. (2) Include enterprise skills: SAP, Oracle, Salesforce, or domain-specific tools. (3) For consulting roles: emphasise client-facing work and cross-functional collaboration. (4) Use a clean, ATS-parseable format — MNCs predominantly use Taleo and Workday, which score structured, keyword-rich resumes higher.',
  },
  {
    q: 'What salary can I expect from Delhi NCR jobs in 2026?',
    a: 'Delhi NCR salaries 2026: IT services (HCL, Wipro, Gurgaon): ₹4L–₹15L. Product companies (Paytm, MakeMyTrip, Snapdeal): ₹10L–₹35L. Consulting (BCG, Deloitte): ₹12L–₹30L fresher, ₹25L–₹80L experienced. MNC corporate functions (HR, Finance, Operations): ₹6L–₹25L. Enterprise software (SAP, Oracle): ₹8L–₹35L.',
  },
  {
    q: 'Is Gurgaon or Noida better for tech jobs?',
    a: 'Both have distinct ecosystems: Gurgaon hosts consulting firms (BCG, McKinsey, Deloitte), FMCG MNCs, and travel tech (MakeMyTrip, OYO). Noida is stronger for IT services (HCL, Wipro), e-commerce (Amazon, Snapdeal, Naukri), and BPO/KPO. For product-first tech roles, Gurgaon\'s startup ecosystem is growing faster. Both locations have active ATS-based hiring and benefit from tailored resumes via CV Prime.',
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
    { '@type': 'ListItem', position: 3, name: 'Delhi NCR Resume Builder', item: 'https://cv-prime.in/resume-builder/delhi' },
  ],
};

export default function DelhiResumeBuilderPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden bg-purple-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-purple-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-1.5 text-sm font-bold text-purple-200">
            <MapPin className="h-4 w-4" />
            Delhi · NCR · Noida · Gurgaon
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            AI Resume Builder for Delhi NCR Jobs — Free & ATS-Ready 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build an ATS-optimised resume for Delhi NCR&apos;s top MNCs, consulting firms, and e-commerce companies — Amazon, BCG, Deloitte, Paytm, MakeMyTrip, HCL. Tailored to your JD in minutes.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-purple-400 px-8 py-3.5 text-base font-bold text-slate-950 transition hover:bg-purple-300">
              Build my Delhi resume free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ats-checker" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Check my ATS score free
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-slate-50 px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {delhiStats.map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-purple-600">{item.stat}</p>
              <p className="mt-1 max-w-[180px] text-xs leading-5 text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Top Delhi NCR companies hiring now</h2>
          </div>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-3 text-left font-semibold text-slate-700">Company</th>
                  <th className="pb-3 text-left font-semibold text-slate-700">Common roles</th>
                  <th className="pb-3 text-left font-semibold text-slate-700">ATS system</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {topCompanies.map((company) => (
                  <tr key={company.name}>
                    <td className="py-3 font-medium text-slate-900">{company.name}</td>
                    <td className="py-3 text-slate-600">{company.roles}</td>
                    <td className="py-3"><span className="rounded-full bg-purple-50 px-2 py-0.5 text-xs font-bold text-purple-700">{company.ats}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Most in-demand skills in Delhi NCR 2026</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {inDemandSkills.map((skill) => (
              <div key={skill.category} className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex items-start gap-2">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-purple-500" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">{skill.category}</p>
                    <p className="mt-1 text-sm text-slate-500">{skill.skills}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Delhi NCR resume builder — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="font-display text-lg font-bold text-slate-950">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-slate-900">Explore more resume tools and guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/resume-builder', label: 'Free AI resume builder' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/cv-examples/business-analyst', label: 'Business analyst resume example' },
              { href: '/cv-examples/operations-manager', label: 'Operations manager resume example' },
              { href: '/resume-builder/bangalore', label: 'Bangalore resume builder' },
              { href: '/resume-builder/mumbai', label: 'Mumbai resume builder' },
              { href: '/resume-builder/hyderabad', label: 'Hyderabad resume builder' },
              { href: '/mba-resume', label: 'MBA resume guide' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-purple-300 hover:text-purple-700 transition">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-purple-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Build your Delhi NCR resume with AI — free</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">Tailored to BCG, Deloitte, Paytm, MakeMyTrip, HCL and 300+ Delhi NCR companies. 3 free PDF exports. No credit card required.</p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-purple-400 px-10 py-4 text-base font-bold text-slate-950 hover:bg-purple-300 transition">
            Build my Delhi resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build Delhi NCR resume free" message="AI resume builder for Delhi NCR — ATS-ready for MNCs, consulting & e-commerce jobs" />
    </main>
  );
}
