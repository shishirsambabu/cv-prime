import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MapPin, TrendingUp } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'AI Resume Builder Mumbai 2026 — Free ATS Resume for Mumbai Jobs | CV Prime',
  description:
    'Free AI resume builder for Mumbai jobs 2026. Build an ATS-optimised resume for BFSI, fintech, e-commerce, media, and consulting companies in Mumbai. Tailored for HDFC, JPMorgan, Goldman Sachs, Nykaa, and more.',
  alternates: { canonical: 'https://cv-prime.in/resume-builder/mumbai' },
  keywords: [
    'resume builder mumbai',
    'cv maker mumbai',
    'resume for mumbai jobs',
    'mumbai resume builder free',
    'ai resume builder mumbai',
    'ats resume builder mumbai',
    'resume for BFSI mumbai',
    'resume for finance jobs mumbai',
    'mumbai job resume',
    'free resume maker mumbai',
    'resume builder maharashtra',
  ],
  openGraph: {
    title: 'AI Resume Builder Mumbai 2026 — Free ATS Resume for Mumbai Jobs | CV Prime',
    description: 'Build a free ATS-optimised resume for Mumbai jobs in BFSI, fintech, e-commerce, and consulting. AI-powered, free to use.',
    url: 'https://cv-prime.in/resume-builder/mumbai',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Builder Mumbai — CV Prime' }],
  },
};

const mumbaiStats = [
  { stat: '₹15L+', label: 'median BFSI and fintech salary in Mumbai — India\'s financial capital' },
  { stat: '40,000+', label: 'finance, tech, and business jobs posted in Mumbai monthly' },
  { stat: '95%+', label: 'of Mumbai BFSI companies use ATS for resume screening' },
  { stat: '5 min', label: 'to build an ATS-ready Mumbai resume with CV Prime' },
];

const topCompanies = [
  { name: 'Goldman Sachs India', roles: 'IB Analyst, Risk, Quant, Technology', ats: 'Taleo' },
  { name: 'JP Morgan Mumbai', roles: 'Finance, Technology, Risk, Operations', ats: 'Taleo/Workday' },
  { name: 'HDFC Bank', roles: 'Retail Banking, RM, IT, Analytics', ats: 'SAP SuccessFactors' },
  { name: 'ICICI Bank', roles: 'Banking, IT, Analytics, Trade Finance', ats: 'SuccessFactors' },
  { name: 'McKinsey & Company', roles: 'Analyst, Associate, EM (consulting)', ats: 'Greenhouse' },
  { name: 'Nykaa', roles: 'SDE, PM, Marketing, Finance, Ops', ats: 'Greenhouse' },
  { name: 'Meesho', roles: 'SDE, PM, Data, Marketing, Operations', ats: 'Greenhouse' },
  { name: 'Reliance Jio / RIL', roles: 'Technology, Finance, Strategy, HR', ats: 'SAP SuccessFactors' },
  { name: 'Deloitte India', roles: 'Consulting, Technology, Audit, Risk', ats: 'Taleo' },
  { name: 'Tata Consultancy Services', roles: 'SDE, Business Analyst, SAP, Consulting', ats: 'Darwinbox' },
];

const inDemandSkills = [
  { category: 'Finance & Banking', skills: 'Financial modelling, DCF, Excel, CFA, Bloomberg Terminal, Risk Management, IFRS' },
  { category: 'Fintech & Payments', skills: 'Python, SQL, Payment APIs, UPI, Risk Scoring, RegTech, Blockchain basics' },
  { category: 'Technology', skills: 'Java, Python, React, Node.js, AWS, Microservices, SQL, DevOps' },
  { category: 'Consulting & Strategy', skills: 'Excel, PowerPoint, SQL, Market research, P&L analysis, Stakeholder management' },
  { category: 'E-commerce & D2C', skills: 'Performance marketing, CAC, ROAS, Google Ads, Meta Ads, SEO, Logistics' },
  { category: 'Media & Entertainment', skills: 'Content strategy, digital marketing, SEO, social media, brand management' },
];

const faqs = [
  {
    q: 'What is the best resume builder for Mumbai jobs in 2026?',
    a: 'CV Prime (cv-prime.in) is the best free AI resume builder for Mumbai job seekers. It allows you to paste any Mumbai company\'s JD (HDFC Bank, Goldman Sachs, McKinsey, Nykaa) and get an ATS score + tailored resume in under 60 seconds. CV Prime supports INR pricing (₹249/month Pro) and UPI payments.',
  },
  {
    q: 'How do I write a resume for Mumbai BFSI companies?',
    a: 'For Mumbai BFSI companies (Goldman Sachs, JP Morgan, HDFC Bank, ICICI): (1) Lead with quantified financial experience — deal size, portfolio AUM, project P&L impact. (2) Include domain keywords: DCF, LBO, credit risk, IFRS, SEBI regulations. (3) For banking operations roles: SAP, SWIFT, trade finance, nostro reconciliation. (4) Certifications: CFA, FRM, NISM for finance roles carry significant weight at Mumbai BFSI firms. Use CV Prime to check your ATS score against specific BFSI JDs.',
  },
  {
    q: 'What salary can I expect from Mumbai jobs in 2026?',
    a: 'Mumbai salaries 2026: Finance/BFSI fresher: ₹5L–₹18L CTC. Mid-level finance (3–5 years): ₹15L–₹45L. Investment banking analyst: ₹12L–₹30L (IB houses like Goldman, JPM). Consulting fresher (McKinsey, BCG, Deloitte): ₹12L–₹25L. Technology roles at Mumbai companies: ₹6L–₹40L depending on experience. E-commerce/D2C roles: ₹8L–₹30L.',
  },
  {
    q: 'How is a Mumbai resume different from a Bangalore tech resume?',
    a: 'Mumbai resumes for finance and BFSI roles emphasise: (1) Financial credentials (CFA, MBA Finance, CA, FRM), (2) Domain expertise in banking products (trade finance, derivatives, structured products), (3) Regulatory knowledge (SEBI, RBI, IRDA), (4) Client-facing and relationship management skills for private banking and wealth management roles. Tech resumes for Mumbai are similar to Bangalore, but Mumbai tech companies (Meesho, Nykaa, Jio) also value business domain understanding alongside technical skills.',
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
    { '@type': 'ListItem', position: 3, name: 'Mumbai Resume Builder', item: 'https://cv-prime.in/resume-builder/mumbai' },
  ],
};

export default function MumbaiResumeBuilderPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden bg-blue-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-sm font-bold text-blue-200">
            <MapPin className="h-4 w-4" />
            Mumbai · Maharashtra
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            AI Resume Builder for Mumbai Jobs — Free & ATS-Ready 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build an ATS-optimised resume for Mumbai&apos;s top BFSI, fintech, consulting, and e-commerce companies — Goldman Sachs, HDFC Bank, McKinsey, Nykaa, Meesho. Tailored to your JD in minutes.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-blue-400 px-8 py-3.5 text-base font-bold text-slate-950 transition hover:bg-blue-300">
              Build my Mumbai resume free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ats-checker" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Check my ATS score free
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-slate-50 px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {mumbaiStats.map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-blue-600">{item.stat}</p>
              <p className="mt-1 max-w-[180px] text-xs leading-5 text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Top Mumbai companies hiring now</h2>
            <p className="mt-4 text-slate-500">Major Mumbai employers and their ATS systems</p>
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
                    <td className="py-3"><span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-bold text-blue-700">{company.ats}</span></td>
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
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Most in-demand skills in Mumbai 2026</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {inDemandSkills.map((skill) => (
              <div key={skill.category} className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex items-start gap-2">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
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

      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Mumbai resume builder — FAQ</h2>
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

      <section className="border-t border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-slate-900">Explore more resume tools and guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/resume-builder', label: 'Free AI resume builder' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/cv-examples/finance-analyst', label: 'Finance analyst resume example' },
              { href: '/cv-examples/business-analyst', label: 'Business analyst resume example' },
              { href: '/resume-builder/bangalore', label: 'Bangalore resume builder' },
              { href: '/resume-builder/delhi', label: 'Delhi resume builder' },
              { href: '/resume-builder/hyderabad', label: 'Hyderabad resume builder' },
              { href: '/mba-resume', label: 'MBA resume guide' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700 transition">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Build your Mumbai resume with AI — free</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">Tailored to Goldman Sachs, HDFC Bank, McKinsey, Nykaa and 200+ Mumbai companies. 3 free PDF exports. No credit card required.</p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-400 px-10 py-4 text-base font-bold text-slate-950 hover:bg-blue-300 transition">
            Build my Mumbai resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build Mumbai resume free" message="AI resume builder for Mumbai — ATS-ready for BFSI, fintech, consulting & e-commerce jobs" />
    </main>
  );
}
