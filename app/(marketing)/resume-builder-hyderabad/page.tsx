import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MapPin, TrendingUp, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume Builder Hyderabad 2026 — ATS Resume for Hyderabad Tech Jobs | CV Prime',
  description:
    'Free resume builder for Hyderabad job seekers. Hyderabad is home to Microsoft, Amazon, Google, and India\'s top pharma companies. Build an ATS-optimised resume for Hyderabad tech and pharma roles.',
  keywords: [
    'resume builder hyderabad',
    'cv builder hyderabad',
    'hyderabad resume format',
    'resume for hyderabad jobs',
    'best resume builder hyderabad',
    'hyderabad tech resume',
    'microsoft hyderabad resume',
    'amazon hyderabad resume',
    'hyderabad it resume',
    'hyderabad pharma resume',
  ],
  alternates: { canonical: 'https://cv-prime.in/resume-builder-hyderabad' },
  openGraph: {
    title: 'Resume Builder Hyderabad 2026 — ATS Resume for Hyderabad Tech Jobs',
    description: 'Build an ATS-optimised resume for Hyderabad\'s tech and pharma ecosystem: Microsoft, Amazon, Google, Dr Reddy\'s, and more. Free with CV Prime.',
    url: 'https://cv-prime.in/resume-builder-hyderabad',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Builder Hyderabad' }],
  },
};

const hyderabadCompanies = [
  { name: 'Microsoft Hyderabad', note: 'Second largest Microsoft campus globally', ats: true },
  { name: 'Amazon Hyderabad', note: 'Major engineering and operations hub', ats: true },
  { name: 'Google Hyderabad', note: 'Product engineering teams', ats: true },
  { name: 'Apple India', note: 'Engineering and maps teams', ats: true },
  { name: 'Dr Reddy\'s Laboratories', note: 'India\'s top pharma company', ats: true },
  { name: 'Divi\'s Laboratories', note: 'API manufacturing, R&D', ats: true },
  { name: 'TCS Hyderabad', note: 'Large IT services campus', ats: true },
  { name: 'Infosys Hyderabad', note: 'Training and delivery centre', ats: true },
  { name: 'HDFC Bank Hyderabad', note: 'Technology and operations', ats: true },
  { name: 'WNS / Genpact', note: 'BPO and analytics', ats: true },
];

const hyderabadSalaries = [
  { role: 'Software Engineer (fresher)', range: '₹5L – ₹18L', note: 'Product companies pay 3–4x IT services' },
  { role: 'Software Engineer (3–5 years)', range: '₹15L – ₹35L', note: 'Microsoft, Amazon, Google competitive with Bangalore' },
  { role: 'Pharma Research Scientist', range: '₹6L – ₹18L', note: 'Dr Reddy\'s, Divi\'s, Aurobindo' },
  { role: 'Data Analyst / BI Analyst', range: '₹8L – ₹22L', note: 'Strong demand across tech and pharma' },
  { role: 'Cloud / DevOps Engineer', range: '₹14L – ₹32L', note: 'High demand at Microsoft, Amazon cloud teams' },
  { role: 'Quality Assurance Engineer', range: '₹6L – ₹18L', note: 'Both IT and pharma sectors' },
];

const hyderabadTips = [
  { title: 'Microsoft and Amazon Hyderabad use the same global ATS', body: 'Microsoft Hyderabad runs on the same global ATS and STAR-format screening as Microsoft Redmond. Amazon Hyderabad uses Amazon\'s Leadership Principles-based evaluation. Your resume bullets must demonstrate ownership, results, and data-driven decision making — not just responsibilities.' },
  { title: 'Pharma roles need regulatory and R&D keywords', body: 'Hyderabad\'s pharma cluster (Dr Reddy\'s, Divi\'s, Aurobindo, Mylan) screens for very specific terms: GMP, ICH guidelines, USFDA, ANDA, API synthesis, regulatory affairs, stability testing. If you are in pharma R&D or regulatory, these keywords must appear in your resume or ATS will filter you out before any human review.' },
  { title: 'IT services roles in Hitec City need certification signals', body: 'TCS, Infosys, Wipro, and Cognizant Hyderabad screen heavily for certifications (AWS, Azure, Java, Salesforce, SAP). For IT services roles, list certifications prominently with the issuing body and year. These are often the first ATS filter applied.' },
  { title: 'Highlight HITEC City and CYBERABAD in your resume context', body: 'For roles based in HITEC City or Cyberabad, familiarity with Hyderabad\'s tech ecosystem (NASSCOM, T-Hub, WE-Hub) and state-level programmes (T-iHub) can be a mild differentiator for roles involving local partnerships or government projects.' },
];

const faqs = [
  {
    q: 'What is the best resume format for Hyderabad tech jobs?',
    a: 'For FAANG and product companies in Hyderabad (Microsoft, Amazon, Google), use a clean 1-page reverse-chronological resume with impact-driven bullets. Lead with a Professional Summary mentioning your specialisation and top metric. Skills section should list technologies precisely (specific versions, cloud platforms, frameworks). For IT services companies (TCS, Infosys), 1–2 pages with a prominent certifications section is standard.',
  },
  {
    q: 'How does Hyderabad compare to Bangalore for tech salaries?',
    a: 'Hyderabad tech salaries are now very close to Bangalore — often within 10–15% for equivalent FAANG roles. Microsoft Hyderabad and Amazon Hyderabad offer compensation comparable to their Bangalore counterparts. For IT services roles, Hyderabad and Bangalore are broadly equivalent. Bangalore still pays a slight premium for startup equity-heavy roles (unicorns, Series B-D companies) where Hyderabad has fewer options.',
  },
  {
    q: 'Do Hyderabad pharma companies use ATS?',
    a: 'Yes — larger Hyderabad pharma companies (Dr Reddy\'s, Divi\'s, Aurobindo, Natco) use ATS systems, particularly for R&D, quality assurance, regulatory affairs, and corporate functions. Manufacturing and shop floor roles may use manual screening or walk-in drives. For all office-based, R&D, and corporate pharma roles, an ATS-optimised resume with precise regulatory and scientific terminology is essential.',
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

export default function ResumeHyderabadPage(): JSX.Element {
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
            <span className="text-white">Resume Builder Hyderabad</span>
          </nav>
          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
            <MapPin className="h-4 w-4" />
            Hyderabad, Telangana — India&apos;s second tech hub
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Resume builder for Hyderabad jobs — ATS-optimised for tech, pharma, and MNCs
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Hyderabad is home to Microsoft&apos;s second largest global campus, Amazon&apos;s largest India engineering hub, and India&apos;s top pharma companies. Every major employer uses ATS — your resume needs to pass it first.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong"
            >
              Build your Hyderabad resume free
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Hyderabad&apos;s top employers</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {hyderabadCompanies.map((co) => (
              <div key={co.name} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">{co.name}</p>
                <p className="mt-0.5 text-xs text-slate-500">{co.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-brand" />
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Hyderabad salary ranges 2026</h2>
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
                {hyderabadSalaries.map((row, i) => (
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
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Resume tips for Hyderabad job seekers</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {hyderabadTips.map((tip) => (
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Hyderabad resume — frequently asked questions</h2>
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
              { label: 'Software engineer resume', href: '/resume-examples/software-engineer' },
              { label: 'QA engineer resume', href: '/resume-examples/qa-engineer' },
              { label: 'DevOps engineer resume', href: '/resume-examples/devops-engineer' },
              { label: 'Resume builder Bangalore', href: '/resume-builder-bangalore' },
              { label: 'Resume builder Mumbai', href: '/resume-builder-mumbai' },
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Build your Hyderabad resume free</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">ATS-optimised templates for Microsoft, Amazon, and pharma companies. Free to start.</p>
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
