import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, MapPin, TrendingUp, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume Builder Mumbai 2026 — ATS Resume for Mumbai Jobs | CV Prime',
  description:
    'Free resume builder for Mumbai job seekers. Mumbai leads India in BFSI, consulting, media, and corporate roles. Build an ATS-optimised resume for Mumbai companies including HDFC, Reliance, McKinsey, and BCG.',
  keywords: [
    'resume builder mumbai',
    'cv builder mumbai',
    'mumbai resume format',
    'resume for mumbai jobs',
    'best resume builder mumbai',
    'mumbai finance resume',
    'bfsi resume mumbai',
    'mumbai consulting resume',
    'resume for bfsi jobs india',
    'mumbai job resume tips',
  ],
  alternates: { canonical: 'https://cv-prime.in/resume-builder-mumbai' },
  openGraph: {
    title: 'Resume Builder Mumbai 2026 — ATS Resume for Mumbai Jobs',
    description:
      'Build an ATS-optimised resume for Mumbai\'s BFSI, consulting, media, and corporate ecosystem. Free with CV Prime.',
    url: 'https://cv-prime.in/resume-builder-mumbai',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Builder Mumbai' }],
  },
};

const mumbaiIndustries = [
  { industry: 'Banking & Financial Services (BFSI)', companies: 'HDFC Bank, ICICI Bank, Axis Bank, Kotak, SBI', ats: true },
  { industry: 'Management Consulting', companies: 'McKinsey, BCG, Bain, Deloitte, PwC, KPMG', ats: true },
  { industry: 'Media & Entertainment', companies: 'Reliance Jio, Sony Pictures, Star India, Zee', ats: true },
  { industry: 'E-commerce & Retail', companies: 'Nykaa, Mamaearth, Pepperfry, Tata CLiQ', ats: true },
  { industry: 'Pharma & Healthcare', companies: 'Sun Pharma, Dr Reddy\'s, Cipla, Lupin', ats: true },
  { industry: 'Tech / IT Services', companies: 'TCS, Wipro, Accenture, Capgemini', ats: true },
];

const mumbaiSalaries = [
  { role: 'Investment Banker (fresher analyst)', range: '₹8L – ₹20L', note: 'At bulge bracket / mid-market banks' },
  { role: 'Management Consultant (fresher)', range: '₹10L – ₹22L', note: 'At MBB and Big 4' },
  { role: 'Finance Analyst (3–5 years)', range: '₹12L – ₹28L', note: 'FP&A, corporate finance, private equity' },
  { role: 'Product Manager (mid-level)', range: '₹20L – ₹40L', note: 'At fintech, e-commerce, media companies' },
  { role: 'Marketing Manager (mid-level)', range: '₹12L – ₹28L', note: 'FMCG, media, and D2C brands' },
  { role: 'CA / Chartered Accountant (2+ years)', range: '₹10L – ₹25L', note: 'Big 4, banks, corporate finance' },
];

const mumbaiTips = [
  { title: 'BFSI roles require sector-specific keywords', body: 'Mumbai\'s banking and financial services sector uses highly specific terminology. Include exact keywords from the JD: "credit underwriting", "asset management", "trade finance", "ALM", "risk management". CV Prime\'s ATS score will flag any missing finance keywords.' },
  { title: 'Consulting resumes need impact narratives', body: 'For McKinsey, BCG, Bain, and Big 4 Mumbai roles, your bullets must tell impact stories: client industry + problem + methodology + measurable outcome. Generic responsibilities fail the screen. CV Prime\'s AI rewriter restructures bullets into impact narratives.' },
  { title: 'CFA, CA, and certifications are strong signals', body: 'In Mumbai\'s BFSI and consulting market, credentials like CFA Level 1/2/3, CA, FRM, and CPA are screened by ATS as filters, not just nice-to-haves. List them prominently in a dedicated Certifications section with the year obtained.' },
  { title: 'Brand of past employer matters in Mumbai', body: 'Mumbai has a stronger brand-hierarchy culture than Bangalore. Past company prestige is a stronger signal — especially in banking, consulting, and FMCG. However, still lead with outcomes, not just the company name.' },
];

const faqs = [
  {
    q: 'What resume format is best for Mumbai BFSI jobs?',
    a: 'For Mumbai banking and finance roles, use a clean reverse-chronological format. Lead with a Professional Summary emphasising your finance specialisation (credit, investment, risk, etc.). List certifications (CFA, CA, FRM) prominently. Use outcome-driven bullets with financial metrics: "Managed ₹500Cr loan portfolio", "Reduced credit risk exposure by 18%". Keep to 2 pages maximum — finance recruiters expect comprehensive career documentation for senior roles.',
  },
  {
    q: 'Do Mumbai consulting firms use ATS?',
    a: 'Yes. McKinsey, BCG, Bain, Deloitte, PwC, and KPMG India all use ATS for initial screening, especially for associate and analyst roles. However, for experienced hire (management consulting, senior associate), human screening plays a larger role. The ATS filter primarily checks for educational pedigree (IIM, IIT, ISB keywords), industry experience keywords, and core consulting terms (problem-solving, analytics, stakeholder management).',
  },
  {
    q: 'Should a Mumbai finance professional use a CV or resume?',
    a: 'For private sector finance roles (banks, NBFCs, PE, consulting), use a resume format: 1–2 pages, outcome-driven bullets, clean professional layout. For public sector / government finance positions (RBI, SEBI, PSU banks), a more comprehensive CV format may be expected. CA and CFA holders applying to international financial institutions may use a hybrid format with certifications prominently displayed.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

export default function ResumeMumbaiPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Resume Builder Mumbai</span>
          </nav>
          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
            <MapPin className="h-4 w-4" />
            Mumbai, Maharashtra — India&apos;s financial and media capital
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Resume builder for Mumbai jobs — ATS-optimised for BFSI, consulting, and media
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Mumbai is India&apos;s hub for banking, finance, consulting, and media. From HDFC to McKinsey to Reliance — all use ATS to pre-screen candidates. Build a resume that reaches human recruiters.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong"
            >
              Build your Mumbai resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ats-checker"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-sm font-medium text-slate-300 hover:border-slate-400 hover:text-white"
            >
              Check your ATS score
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Mumbai&apos;s top industries and employers</h2>
          <div className="mt-8 space-y-3">
            {mumbaiIndustries.map((ind) => (
              <div key={ind.industry} className="flex items-start justify-between rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div>
                  <p className="font-semibold text-slate-900">{ind.industry}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{ind.companies}</p>
                </div>
                {ind.ats && <span className="shrink-0 rounded-full bg-cyan-50 px-2 py-1 text-xs font-semibold text-cyan-700">ATS screening</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-brand" />
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Mumbai salary ranges 2026</h2>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 text-left font-semibold text-slate-600">Role</th>
                  <th className="p-4 text-right font-semibold text-slate-600">Salary range</th>
                  <th className="p-4 text-left font-semibold text-slate-500">Context</th>
                </tr>
              </thead>
              <tbody>
                {mumbaiSalaries.map((row, i) => (
                  <tr key={row.role} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                    <td className="p-4 font-medium text-slate-800">{row.role}</td>
                    <td className="p-4 text-right font-bold text-cyan-700">{row.range}</td>
                    <td className="p-4 text-xs text-slate-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-brand" />
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Resume tips for Mumbai job seekers</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {mumbaiTips.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="font-display text-lg font-bold text-slate-900">{tip.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Mumbai resume — frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 px-5 py-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">Related guides</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { label: 'Finance analyst resume', href: '/resume-examples/finance-analyst' },
              { label: 'Investment banker resume', href: '/resume-examples/investment-banker' },
              { label: 'Marketing manager resume', href: '/resume-examples/marketing-manager' },
              { label: 'Management consultant resume', href: '/resume-examples/management-consultant' },
              { label: 'Resume builder Bangalore', href: '/resume-builder-bangalore' },
              { label: 'Resume builder Delhi', href: '/resume-builder-delhi' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Build a Mumbai-ready resume</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            ATS scoring, AI tailoring, BFSI and consulting-specific templates. Free to start.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Start free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
