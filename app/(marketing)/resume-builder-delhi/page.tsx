import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MapPin, TrendingUp, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume Builder Delhi NCR 2026 — ATS Resume for Delhi Jobs | CV Prime',
  description:
    'Free resume builder for Delhi NCR job seekers. Delhi is India\'s hub for MNCs, government, FMCG, and consulting. Build an ATS-optimised resume for Delhi/NCR roles at Google, Samsung, HUL, and more.',
  keywords: [
    'resume builder delhi',
    'cv builder delhi ncr',
    'delhi resume format',
    'resume for delhi jobs',
    'resume builder gurgaon',
    'resume builder noida',
    'best resume builder delhi ncr',
    'delhi mnc resume',
    'government job resume delhi',
    'delhi ncr resume tips',
  ],
  alternates: { canonical: 'https://cv-prime.in/resume-builder-delhi' },
  openGraph: {
    title: 'Resume Builder Delhi NCR 2026 — ATS Resume for Delhi Jobs',
    description: 'Build an ATS-optimised resume for Delhi NCR: MNCs, government, FMCG, and tech companies in Gurgaon and Noida. Free with CV Prime.',
    url: 'https://cv-prime.in/resume-builder-delhi',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Builder Delhi NCR' }],
  },
};

const delhiSectors = [
  { sector: 'IT / Tech (Noida, Gurgaon)', examples: 'HCL, Tech Mahindra, Adobe, Samsung R&D, Paytm' },
  { sector: 'MNC Corporate Functions (Gurgaon)', examples: 'Google India, Microsoft, American Express, PepsiCo, Nestle' },
  { sector: 'FMCG and Retail', examples: 'HUL, P&G, ITC, Dabur, Marico, Berger Paints' },
  { sector: 'Management Consulting', examples: 'McKinsey Delhi, BCG, AT Kearney, PwC Delhi' },
  { sector: 'Government / PSU', examples: 'AIIMS, IIT Delhi, UPSC, central government ministries' },
  { sector: 'Education & EdTech', examples: 'Byju\'s, Unacademy, Delhi University, JNU, Vedantu' },
];

const delhiTips = [
  { title: 'Gurgaon MNCs run strict ATS screening', body: 'Gurgaon is home to hundreds of MNC India offices that run global ATS platforms (Workday, SAP SuccessFactors, Taleo). Your resume keyword coverage must match the JD exactly — even one missing core keyword can eliminate a qualified candidate from the shortlist.' },
  { title: 'Government and PSU roles need different formatting', body: 'For UPSC, SSC, Delhi government, and PSU roles, the biodata or structured government format is expected. For private sector Delhi/NCR roles, use a standard reverse-chronological resume. Do not mix formats.' },
  { title: 'Noida tech park roles emphasise technical certifications', body: 'Noida\'s tech cluster (HCL, Genpact, Concentrix, Sapient) places high value on certifications: AWS, Azure, Google Cloud, PMP, Six Sigma. List these in a dedicated Certifications section — ATS screens for them explicitly in tech roles.' },
  { title: 'FMCG and marketing roles need campaign metrics', body: 'Delhi/NCR\'s FMCG hub (HUL, P&G, ITC) expects marketing resumes with campaign metrics: "Managed ₹12Cr digital budget", "Achieved 35% market share growth in UP". Generic marketing bullets will not clear the ATS or the human screen.' },
];

const faqs = [
  {
    q: 'What is the best resume format for Delhi NCR corporate jobs?',
    a: 'For Gurgaon MNC and corporate roles, use a clean reverse-chronological format, 1–2 pages, with a Professional Summary tailored to the target role and company sector. For Noida IT services roles, lead with a Technical Skills section. For FMCG roles (HUL, P&G), lead with impact metrics — market share, revenue, budget managed. All formats must be ATS-optimised: no tables, no graphics, clean section headings.',
  },
  {
    q: 'Do Delhi NCR companies use ATS to screen resumes?',
    a: 'Yes. Every major MNC with India offices in Gurgaon (Google, Microsoft, American Express, PepsiCo) uses global ATS platforms that are as rigorous as their global counterparts. Noida IT parks (HCL, Tech Mahindra, Genpact) also use ATS for volume screening. Government and PSU roles typically do not use ATS — they use structured application forms instead.',
  },
  {
    q: 'Should I mention Hindi or regional language skills on a Delhi NCR resume?',
    a: 'For most corporate, MNC, and tech roles in Delhi NCR, English proficiency is assumed and Hindi proficiency is expected as standard — listing either adds no value. However, if you are applying to roles specifically requiring regional language capabilities (regional sales, government liaison, rural market roles), listing Hindi/Punjabi/Haryanvi fluency is relevant and should be included in a Languages section.',
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

export default function ResumeDelhiPage(): JSX.Element {
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
            <span className="text-white">Resume Builder Delhi NCR</span>
          </nav>
          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
            <MapPin className="h-4 w-4" />
            Delhi / NCR (Gurgaon · Noida · Faridabad · Greater Noida)
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Resume builder for Delhi NCR jobs — ATS-optimised for MNCs, FMCG, and government
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Delhi NCR is India&apos;s centre for MNC corporate functions, FMCG, government, and consulting. Gurgaon and Noida house hundreds of global company India offices — all running rigorous ATS screening.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong"
            >
              Build your Delhi resume free
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Delhi NCR top sectors and employers</h2>
          <div className="mt-8 space-y-3">
            {delhiSectors.map((s) => (
              <div key={s.sector} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">{s.sector}</p>
                <p className="mt-0.5 text-sm text-slate-500">{s.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-brand" />
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Resume tips for Delhi NCR job seekers</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {delhiTips.map((tip) => (
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Delhi NCR resume — frequently asked questions</h2>
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
              { label: 'Marketing manager resume', href: '/resume-examples/marketing-manager' },
              { label: 'Operations manager resume', href: '/resume-examples/operations-manager' },
              { label: 'Business development resume', href: '/resume-examples/business-development-manager' },
              { label: 'Resume builder Bangalore', href: '/resume-builder-bangalore' },
              { label: 'Resume builder Mumbai', href: '/resume-builder-mumbai' },
              { label: 'Resume builder Hyderabad', href: '/resume-builder-hyderabad' },
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Build your Delhi NCR resume free</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">ATS scoring, AI tailoring, 8 professional templates. ₹249/month Pro. Free to start.</p>
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
