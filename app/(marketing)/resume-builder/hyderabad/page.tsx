import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MapPin, TrendingUp } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'AI Resume Builder Hyderabad 2026 — Free ATS Resume for Hyderabad Jobs | CV Prime',
  description:
    'Free AI resume builder for Hyderabad jobs 2026. Build an ATS-optimised resume for Microsoft, Amazon, Apple, Google HITEC City, and Hyderabad pharma, BFSI, and IT companies.',
  alternates: { canonical: 'https://cv-prime.in/resume-builder/hyderabad' },
  keywords: [
    'resume builder hyderabad',
    'cv maker hyderabad',
    'resume for hyderabad jobs',
    'hyderabad resume builder free',
    'ai resume builder hyderabad',
    'ats resume builder hyderabad',
    'resume for HITEC City jobs',
    'resume for IT companies hyderabad',
    'hyderabad job resume',
    'free resume maker hyderabad',
    'resume builder telangana',
  ],
  openGraph: {
    title: 'AI Resume Builder Hyderabad 2026 — Free ATS Resume for Hyderabad Jobs | CV Prime',
    description: 'Build a free ATS-optimised resume for Hyderabad jobs at Microsoft, Amazon, Apple, Google HITEC City, and pharma companies.',
    url: 'https://cv-prime.in/resume-builder/hyderabad',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Builder Hyderabad — CV Prime' }],
  },
};

const hydStats = [
  { stat: '₹18L+', label: 'median tech salary at FAANG engineering centres in Hyderabad' },
  { stat: '30,000+', label: 'IT and tech jobs posted in HITEC City and surrounding areas monthly' },
  { stat: '2nd', label: 'largest tech hub in India for FAANG engineering centres after Bangalore' },
  { stat: '5 min', label: 'to build an ATS-ready Hyderabad resume with CV Prime' },
];

const topCompanies = [
  { name: 'Microsoft IDC (Hyderabad)', roles: 'SWE, PM, Data, DevOps, SDET', ats: 'Workday' },
  { name: 'Amazon Hyderabad', roles: 'SDE, SDE-II, Data Engineering, ML', ats: 'Workday' },
  { name: 'Apple India (HITEC City)', roles: 'SWE, Platform Engineer, Hardware-Software', ats: 'Workday' },
  { name: 'Google Hyderabad', roles: 'SWE, SRE, Technical Program Manager', ats: 'Greenhouse' },
  { name: 'Deloitte India (Hyderabad)', roles: 'Technology, Consulting, Audit, Tax', ats: 'Taleo' },
  { name: 'Wipro (HQ Hyderabad)', roles: 'SDE, QA, SAP, DevOps, BFSI Tech', ats: 'Darwinbox' },
  { name: 'Dr. Reddy\'s Laboratories', roles: 'Pharma R&D, Regulatory, IT, Finance', ats: 'SuccessFactors' },
  { name: 'Cyient (Hyderabad)', roles: 'Aerospace, Engineering, IoT, Digital', ats: 'SAP' },
  { name: 'Genpact (Hyderabad)', roles: 'Finance Analytics, BPO, Tech, AI/ML', ats: 'Workday' },
  { name: 'ICICI Bank (Hyderabad)', roles: 'Tech, BFSI Analytics, Risk, Operations', ats: 'SuccessFactors' },
];

const inDemandSkills = [
  { category: 'Cloud & Infrastructure', skills: 'Azure, AWS, GCP, Kubernetes, Terraform, CI/CD, SRE, Linux' },
  { category: 'Software Engineering', skills: 'C++, Java, Python, .NET, C#, Go, Microservices, Distributed Systems' },
  { category: 'Data & AI/ML', skills: 'Python, SQL, TensorFlow, PyTorch, Spark, Azure ML, MLOps, Data Engineering' },
  { category: 'Pharma & Life Sciences IT', skills: 'Veeva CRM, SAP ERP, Regulatory Affairs, Clinical Data, LIMS, GxP' },
  { category: 'BFSI Technology', skills: 'Core banking, Python, SQL, Risk Analytics, SWIFT, Murex, FIS Systematics' },
  { category: 'Embedded & Hardware', skills: 'VLSI, FPGA, Embedded C, RTOS, IoT, Automotive protocols (CAN, LIN)' },
];

const faqs = [
  {
    q: 'What is the best resume builder for Hyderabad jobs in 2026?',
    a: 'CV Prime (cv-prime.in) is the best free AI resume builder for Hyderabad job seekers. Paste any Hyderabad JD (Microsoft IDC, Amazon, Apple, Google, Wipro) and get an ATS match score + tailored keywords + AI-rewritten bullets in under 60 seconds.',
  },
  {
    q: 'What makes Hyderabad a major tech hub in India?',
    a: 'Hyderabad\'s HITEC City hosts the largest Microsoft engineering centre outside the US, Amazon\'s second-largest global development centre, Apple India software engineering, Google Hyderabad, and Deloitte\'s largest global delivery centre. This makes Hyderabad India\'s second-largest FAANG engineering hub after Bangalore, with strong opportunities in cloud infrastructure, enterprise software, and platform engineering.',
  },
  {
    q: 'How do I write a resume for Microsoft Hyderabad?',
    a: 'For Microsoft IDC Hyderabad roles: (1) Include Azure, C#/.NET, or the specific stack from the JD — Microsoft heavily screens for its own technology stack. (2) Show system design and distributed systems experience for SWE roles. (3) For PM roles: include OKR-driven metrics, cross-functional leadership, and A/B testing experience. (4) Use Workday ATS-compatible formatting — avoid tables and graphics. (5) Use CV Prime to score your resume against the specific Microsoft JD before applying.',
  },
  {
    q: 'What salary can I expect from Hyderabad tech jobs in 2026?',
    a: 'Hyderabad 2026 salaries: Fresher SDE at Microsoft IDC or Amazon: ₹15L–₹35L. SDE-2/Mid-level: ₹25L–₹60L at FAANG. IT services (Wipro, HCL Hyderabad): ₹4L–₹15L. Data roles at FAANG Hyderabad: ₹18L–₹55L. Pharma IT (Dr. Reddy\'s, Divi\'s): ₹6L–₹20L. Hyderabad pays slightly below Bangalore for equivalent FAANG roles but 10–15% above the national average.',
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
    { '@type': 'ListItem', position: 3, name: 'Hyderabad Resume Builder', item: 'https://cv-prime.in/resume-builder/hyderabad' },
  ],
};

export default function HyderabadResumeBuilderPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden bg-emerald-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-bold text-emerald-200">
            <MapPin className="h-4 w-4" />
            Hyderabad · HITEC City · Telangana
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            AI Resume Builder for Hyderabad Jobs — Free & ATS-Ready 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build an ATS-optimised resume for Hyderabad&apos;s FAANG engineering centres and top IT companies — Microsoft IDC, Amazon, Apple, Google, Wipro HQ. Tailored to your JD in minutes.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-8 py-3.5 text-base font-bold text-white transition hover:bg-emerald-300">
              Build my Hyderabad resume free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ats-checker" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Check my ATS score free
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.03] px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {hydStats.map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-emerald-600">{item.stat}</p>
              <p className="mt-1 max-w-[180px] text-xs leading-5 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Top Hyderabad companies hiring now</h2>
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
                    <td className="py-3"><span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-bold text-emerald-300">{company.ats}</span></td>
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
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Most in-demand skills in Hyderabad 2026</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {inDemandSkills.map((skill) => (
              <div key={skill.category} className="rounded-2xl bg-white/[0.04] p-5 shadow-sm">
                <div className="flex items-start gap-2">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
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
          <h2 className="text-center font-display text-3xl font-bold">Hyderabad resume builder — FAQ</h2>
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
              { href: '/cv-examples/software-engineer', label: 'Software engineer resume example' },
              { href: '/cv-examples/devops-engineer', label: 'DevOps engineer resume example' },
              { href: '/resume-builder/bangalore', label: 'Bangalore resume builder' },
              { href: '/resume-builder/mumbai', label: 'Mumbai resume builder' },
              { href: '/resume-builder/pune', label: 'Pune resume builder' },
              { href: '/salary/software-engineer', label: 'Software engineer salary guide' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 hover:border-emerald-300 hover:text-emerald-300 transition">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Build your Hyderabad resume with AI — free</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">Tailored to Microsoft IDC, Amazon, Apple, Google, Wipro and 200+ Hyderabad companies. 3 free PDF exports. No credit card required.</p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-10 py-4 text-base font-bold text-white hover:bg-emerald-300 transition">
            Build my Hyderabad resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build Hyderabad resume free" message="AI resume builder for Hyderabad — ATS-ready for Microsoft IDC, Amazon, Apple & more" />
    </main>
  );
}
