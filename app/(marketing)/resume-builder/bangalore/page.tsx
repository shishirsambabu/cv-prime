import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MapPin, TrendingUp } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'AI Resume Builder Bangalore 2026 — Free ATS Resume for Bangalore Jobs | CV Prime',
  description:
    'Free AI resume builder for Bangalore jobs 2026. Build an ATS-optimised resume for Flipkart, Amazon, Google, Swiggy, PhonePe, Zepto, and Bangalore startups. Tailored to Bangalore job descriptions in minutes.',
  alternates: { canonical: 'https://cv-prime.in/resume-builder/bangalore' },
  keywords: [
    'resume builder bangalore',
    'cv maker bangalore',
    'resume for bangalore jobs',
    'bangalore resume builder free',
    'ai resume builder bangalore',
    'resume builder bengaluru',
    'ats resume builder bangalore',
    'resume for IT companies bangalore',
    'bangalore job resume',
    'free resume maker bangalore',
    'resume builder karnataka',
  ],
  openGraph: {
    title: 'AI Resume Builder Bangalore 2026 — Free ATS Resume for Bangalore Jobs | CV Prime',
    description: 'Build a free ATS-optimised resume for Bangalore jobs. Tailored to FAANG, unicorn startups, and IT companies in Bengaluru. AI-powered, free to use.',
    url: 'https://cv-prime.in/resume-builder/bangalore',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Builder Bangalore — CV Prime' }],
  },
};

const bangaloreStats = [
  { stat: '₹20L+', label: 'median tech salary in Bangalore — 25% above national average' },
  { stat: '50,000+', label: 'tech jobs posted in Bangalore every month on Naukri and LinkedIn' },
  { stat: '90%+', label: 'of Bangalore tech companies use ATS to screen resumes before human review' },
  { stat: '5 min', label: 'to build an ATS-ready Bangalore tech resume with CV Prime' },
];

const topCompanies = [
  { name: 'Google India (Bengaluru)', roles: 'SWE, PM, Data Science, UX', ats: 'Greenhouse' },
  { name: 'Amazon Bengaluru', roles: 'SDE, SDE-II, PM, Data Engineering', ats: 'Taleo/Workday' },
  { name: 'Microsoft IDC', roles: 'SWE, PM, SDET, Data', ats: 'Workday' },
  { name: 'Flipkart', roles: 'SDE, PM, Data, Design, Supply Chain', ats: 'Greenhouse/Workday' },
  { name: 'Swiggy', roles: 'SDE, PM, ML Engineer, Design, Ops', ats: 'Greenhouse' },
  { name: 'PhonePe', roles: 'SDE, ML, Data, PM, Finance', ats: 'Greenhouse' },
  { name: 'Zepto', roles: 'SDE, Data, PM, Operations, Growth', ats: 'Lever' },
  { name: 'CRED', roles: 'SDE, PM, Design, Data, Marketing', ats: 'Greenhouse' },
  { name: 'Groww', roles: 'SDE, PM, Data, Finance, Marketing', ats: 'Greenhouse' },
  { name: 'Infosys (Global HQ)', roles: 'SDE, DevOps, QA, SAP, PM', ats: 'Darwinbox' },
];

const inDemandSkills = [
  { category: 'Backend / Cloud', skills: 'Java, Python, Go, Node.js, AWS, GCP, Kubernetes, Microservices' },
  { category: 'Frontend / Mobile', skills: 'React, TypeScript, Next.js, React Native, Flutter' },
  { category: 'Data & ML', skills: 'Python, SQL, PySpark, TensorFlow, PyTorch, Databricks, Hive' },
  { category: 'DevOps / Platform', skills: 'Docker, Kubernetes, Terraform, CI/CD, Prometheus, Grafana' },
  { category: 'Product & Design', skills: 'Jira, Figma, Amplitude, Mixpanel, SQL, A/B Testing, Agile' },
  { category: 'FinTech / BFSI', skills: 'Python, SQL, Risk Modelling, Compliance, Regulatory, UPI APIs' },
];

const faqs = [
  {
    q: 'What is the best resume builder for Bangalore jobs in 2026?',
    a: 'CV Prime (cv-prime.in) is the best free AI resume builder for Bangalore job seekers. It allows you to paste any Bangalore company\'s JD (Flipkart, Amazon, Swiggy, PhonePe, Google India) and receive an ATS score + tailored keywords + AI-rewritten bullets in under 60 seconds. It is optimised for Indian ATS systems and supports UPI payments for Pro at ₹999 one-time.',
  },
  {
    q: 'How do I write a resume for Bangalore tech companies?',
    a: 'For Bangalore tech companies: (1) Lead your Skills section with the tech stack from the JD — companies like Swiggy, Flipkart, and PhonePe screen keywords like Go, Kafka, gRPC, and Kubernetes heavily. (2) Write outcome-driven bullets: "Reduced P99 latency by 40% by migrating from REST to gRPC". (3) Include system design experience for senior roles. (4) Add GitHub links for product companies. (5) Use CV Prime\'s ATS checker to score your resume against each specific Bangalore JD before applying.',
  },
  {
    q: 'What salary can I expect from a Bangalore tech job in 2026?',
    a: 'Bangalore tech salaries in 2026: Fresher SDE at IT services (TCS, Infosys, Wipro Bangalore): ₹3.5L–₹9L. Fresher SDE at product/unicorn (Swiggy, PhonePe, Zepto): ₹12L–₹30L. SDE-2 (3–5 years): ₹20L–₹50L at product companies. Senior SDE (7+ years): ₹35L–₹80L+. FAANG India (Google, Amazon, Microsoft IDC): ₹25L–₹1.2Cr+ total comp. Bangalore pays 15–25% above national average for equivalent roles. See cv-prime.in/salary/software-engineer for full salary data.',
  },
  {
    q: 'Do Bangalore startups use ATS to screen resumes?',
    a: 'Yes. Bangalore startups above Series A almost universally use ATS. Common systems: Greenhouse (Swiggy, PhonePe, Flipkart, CRED, Zepto), Lever (several mid-stage startups), Workday (larger tech companies). Even if a startup has a small team, applications go through ATS at scale during growth phases. CV Prime\'s ATS checker supports all major ATS platforms used by Bangalore companies.',
  },
  {
    q: 'How is a Bangalore tech resume different from a resume for other Indian cities?',
    a: 'Bangalore resumes for product and startup roles emphasise: (1) System design and scalability experience (Bangalore companies operate at massive scale), (2) Startup-specific impact: "built X for 10M DAU", (3) Specific cloud and infrastructure keywords (AWS, GCP, Kubernetes) — not just general programming languages, (4) Open source contributions and GitHub activity are more valued in Bangalore\'s product engineering culture vs other cities, (5) Competitive programming profiles (LeetCode, Codeforces) still matter for FAANG India roles in Bangalore.',
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
    { '@type': 'ListItem', position: 3, name: 'Bangalore Resume Builder', item: 'https://cv-prime.in/resume-builder/bangalore' },
  ],
};

export default function BangaloreResumeBuilderPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-cyan-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-200">
            <MapPin className="h-4 w-4" />
            Bangalore · Bengaluru · Karnataka
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            AI Resume Builder for Bangalore Jobs — Free & ATS-Ready 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build an ATS-optimised resume for Bangalore&apos;s top tech companies — Flipkart, Amazon, Swiggy, PhonePe, Google India, and 500+ Bengaluru startups. Paste the JD, get a tailored resume in minutes.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-3.5 text-base font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Build my Bangalore resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ats-checker"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Check my ATS score free
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {bangaloreStats.map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-cyan-600">{item.stat}</p>
              <p className="mt-1 max-w-[180px] text-xs leading-5 text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Companies */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Top Bangalore companies hiring now</h2>
            <p className="mt-4 text-slate-500">The major Bangalore employers and the ATS systems they use to screen resumes</p>
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
                    <td className="py-3">
                      <span className="rounded-full bg-cyan-50 px-2 py-0.5 text-xs font-bold text-cyan-700">{company.ats}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* In-demand skills */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Most in-demand skills in Bangalore 2026</h2>
            <p className="mt-4 text-slate-500">Skills that Bangalore recruiters and ATS screen for most heavily — make sure these appear in your resume</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {inDemandSkills.map((skill) => (
              <div key={skill.category} className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex items-start gap-2">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
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

      {/* How it works */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Build your Bangalore resume in 3 steps</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { step: '1', title: 'Upload your existing resume', desc: 'Upload a PDF or DOCX, or build from scratch with CV Prime\'s guided editor.' },
              { step: '2', title: 'Paste the Bangalore JD', desc: 'Copy the job description from Naukri, LinkedIn, or the company\'s careers page and paste it into CV Prime.' },
              { step: '3', title: 'Get ATS score + tailored resume', desc: 'CV Prime gives you a 0–100 ATS match score and AI-rewrites your bullets to match the JD keywords exactly.' },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 font-display text-lg font-bold text-cyan-700">{item.step}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-8 py-3.5 text-base font-bold text-white hover:bg-cyan-500 transition">
              Start building — it&apos;s free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Bangalore resume builder — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-slate-950">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-slate-900">Explore more resume tools and guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/resume-builder', label: 'Free AI resume builder' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/salary/software-engineer', label: 'Software engineer salary India' },
              { href: '/cv-examples/software-engineer', label: 'Software engineer resume example' },
              { href: '/cv-examples/data-scientist', label: 'Data scientist resume example' },
              { href: '/cv-examples/product-manager', label: 'Product manager resume example' },
              { href: '/resume-builder/mumbai', label: 'Mumbai resume builder' },
              { href: '/resume-builder/delhi', label: 'Delhi resume builder' },
              { href: '/resume-builder/hyderabad', label: 'Hyderabad resume builder' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-cyan-300 hover:text-cyan-700 transition">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-cyan-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Build your Bangalore resume with AI — free</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Tailored to Flipkart, Amazon, Swiggy, PhonePe, and 500+ Bangalore companies. 3 free PDF exports. No credit card required.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-10 py-4 text-base font-bold text-slate-950 hover:bg-cyan-300 transition">
            Build my Bangalore resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build Bangalore resume free" message="AI resume builder for Bangalore — ATS-ready for Flipkart, Amazon, Swiggy & more" />
    </main>
  );
}
