import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MapPin, TrendingUp } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'AI Resume Builder Pune 2026 — Free ATS Resume for Pune Jobs | CV Prime',
  description:
    'Free AI resume builder for Pune jobs 2026. Build an ATS-optimised resume for IT services, automotive tech, BFSI, and semiconductor companies in Pune. Tailored for Infosys, TCS, Persistent, Bajaj Auto, and more.',
  alternates: { canonical: 'https://cv-prime.in/resume-builder/pune' },
  keywords: [
    'resume builder pune',
    'cv maker pune',
    'resume for pune jobs',
    'pune resume builder free',
    'ai resume builder pune',
    'ats resume builder pune',
    'resume for IT companies pune',
    'pune job resume',
    'free resume maker pune',
    'resume builder maharashtra pune',
  ],
  openGraph: {
    title: 'AI Resume Builder Pune 2026 — Free ATS Resume for Pune Jobs | CV Prime',
    description: 'Build a free ATS-optimised resume for Pune jobs in IT, automotive tech, BFSI, and semiconductor companies.',
    url: 'https://cv-prime.in/resume-builder/pune',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Builder Pune — CV Prime' }],
  },
};

const puneStats = [
  { stat: '₹12L+', label: 'median IT and engineering salary in Pune for mid-level professionals' },
  { stat: '25,000+', label: 'IT and engineering jobs posted in Pune monthly' },
  { stat: '3rd', label: 'largest IT hub in India — strong growth in automotive tech and semiconductors' },
  { stat: '5 min', label: 'to build an ATS-ready Pune resume with CV Prime' },
];

const topCompanies = [
  { name: 'Infosys (Pune campus)', roles: 'SDE, QA, SAP, BPO, Technology Consulting', ats: 'Darwinbox' },
  { name: 'Persistent Systems (HQ)', roles: 'SDE, Cloud, AI/ML, Digital Transformation', ats: 'Workday' },
  { name: 'Bajaj Auto (Pune)', roles: 'Automotive Engineering, EV, Finance, IT', ats: 'SAP SuccessFactors' },
  { name: 'Cummins India (Pune)', roles: 'Mechanical, Electrical, Software, Finance', ats: 'Workday' },
  { name: 'Syntel / Atos (Pune)', roles: 'SDE, SAP, DevOps, Data, Testing', ats: 'Taleo' },
  { name: 'Cognizant (Pune)', roles: 'SDE, BPO, Healthcare IT, SAP', ats: 'Taleo' },
  { name: 'Qualcomm India (Pune)', roles: 'VLSI, Embedded, RF Design, Software', ats: 'Workday' },
  { name: 'HDFC Bank (Pune)', roles: 'Retail Banking, IT, Analytics, Credit', ats: 'SuccessFactors' },
  { name: 'Finolex Industries', roles: 'Manufacturing, Finance, Sales, HR', ats: 'Zoho Recruit' },
  { name: 'Mahindra & Mahindra (Pune)', roles: 'Automotive, EV, IT, Finance, R&D', ats: 'SuccessFactors' },
];

const inDemandSkills = [
  { category: 'IT Services & ERP', skills: 'Java, SAP ABAP, .NET, Python, Oracle ERP, ServiceNow, Salesforce' },
  { category: 'Automotive & EV Tech', skills: 'AUTOSAR, CAN/LIN protocols, Embedded C, MATLAB, ADAS, Battery Management' },
  { category: 'Semiconductors & VLSI', skills: 'VLSI design, Verilog, VHDL, System Verilog, FPGA, RF design, Cadence' },
  { category: 'Cloud & DevOps', skills: 'AWS, Azure, Docker, Kubernetes, Ansible, Jenkins, Terraform, CI/CD' },
  { category: 'Data & Analytics', skills: 'Python, SQL, Power BI, Tableau, Excel, Machine Learning, Data Warehousing' },
  { category: 'BFSI Technology', skills: 'Core banking, Python, SQL, Risk Analytics, Credit Scoring, Fintech APIs' },
];

const faqs = [
  {
    q: 'What is the best resume builder for Pune jobs in 2026?',
    a: 'CV Prime (cv-prime.in) is the best free AI resume builder for Pune job seekers. Paste any Pune company JD and get an ATS score + tailored resume in 60 seconds. CV Prime is optimised for the ATS platforms used by Pune employers — Darwinbox (Infosys), Workday (Persistent, Cummins, Qualcomm), Taleo (Cognizant, Syntel), and SAP SuccessFactors (Bajaj, Mahindra).',
  },
  {
    q: 'What industries are growing in Pune for job seekers?',
    a: 'Pune\'s fastest-growing sectors in 2026: (1) Electric Vehicle (EV) and automotive technology — Pune is India\'s EV and auto engineering hub with Tata Motors EV, Bajaj, Mahindra, and global auto OEMs expanding. (2) Semiconductor design — Qualcomm, Intel, MediaTek, and Renesas have engineering centres in Pune. (3) IT services — Persistent Systems, Infosys, Cognizant are expanding. (4) BFSI technology — Pune is a major back-office hub for HDFC, ICICI, and insurance companies.',
  },
  {
    q: 'How do I write a resume for automotive or EV companies in Pune?',
    a: 'For automotive and EV companies in Pune: (1) Include domain-specific keywords: AUTOSAR, CAN, LIN, ADAS, battery management systems, powertrain, electric drivetrains. (2) Show functional safety certifications: ISO 26262, IEC 61508. (3) Include tools: MATLAB/Simulink, dSPACE, Vector CANalyzer, CATIA, ANSYS. (4) Quantify scope: "Led embedded software development for anti-lock braking module deployed in 50,000+ units". Use CV Prime to check ATS alignment against specific Bajaj, Mahindra, or Tata Motors JDs.',
  },
  {
    q: 'What salary can I expect from Pune IT and engineering jobs in 2026?',
    a: 'Pune 2026 salaries: IT services fresher (Infosys, Cognizant, Wipro): ₹3.5L–₹9L. Mid-level software (3–5 years, Persistent, Syntel): ₹12L–₹25L. Automotive engineering (Bajaj, Mahindra, Tata): ₹5L–₹20L. VLSI/Semiconductor (Qualcomm, Intel): ₹8L–₹30L for experienced engineers. Cloud/DevOps (mid-level): ₹12L–₹28L. Pune typically pays 10–15% below Bangalore for equivalent tech roles but costs of living are 30–40% lower.',
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
    { '@type': 'ListItem', position: 3, name: 'Pune Resume Builder', item: 'https://cv-prime.in/resume-builder/pune' },
  ],
};

export default function PuneResumeBuilderPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden bg-orange-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-orange-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 text-sm font-bold text-orange-200">
            <MapPin className="h-4 w-4" />
            Pune · Maharashtra
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            AI Resume Builder for Pune Jobs — Free & ATS-Ready 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build an ATS-optimised resume for Pune&apos;s IT services, automotive tech, semiconductor, and BFSI companies — Infosys, Persistent, Bajaj, Qualcomm, Cummins. Tailored to your JD in minutes.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-orange-400 px-8 py-3.5 text-base font-bold text-white transition hover:bg-orange-300">
              Build my Pune resume free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ats-checker" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Check my ATS score free
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.03] px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {puneStats.map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-orange-600">{item.stat}</p>
              <p className="mt-1 max-w-[180px] text-xs leading-5 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Top Pune companies hiring now</h2>
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
                    <td className="py-3"><span className="rounded-full bg-orange-50 px-2 py-0.5 text-xs font-bold text-orange-700">{company.ats}</span></td>
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
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Most in-demand skills in Pune 2026</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {inDemandSkills.map((skill) => (
              <div key={skill.category} className="rounded-2xl bg-white/[0.04] p-5 shadow-sm">
                <div className="flex items-start gap-2">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
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
          <h2 className="text-center font-display text-3xl font-bold">Pune resume builder — FAQ</h2>
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
              { href: '/resume-builder/mumbai', label: 'Mumbai resume builder' },
              { href: '/resume-builder/chennai', label: 'Chennai resume builder' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 hover:border-orange-300 hover:text-orange-700 transition">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Build your Pune resume with AI — free</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">Tailored to Infosys, Persistent, Bajaj Auto, Qualcomm, Cummins and 200+ Pune companies. 3 free PDF exports. No credit card required.</p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-400 px-10 py-4 text-base font-bold text-white hover:bg-orange-300 transition">
            Build my Pune resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build Pune resume free" message="AI resume builder for Pune — ATS-ready for IT, automotive tech, semiconductor & BFSI jobs" />
    </main>
  );
}
