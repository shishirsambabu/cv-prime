import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, MapPin, TrendingUp, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume Builder Bangalore 2026 — ATS Resume for Bangalore Tech Jobs | CV Prime',
  description:
    'Free resume builder for Bangalore job seekers. Bangalore is India\'s tech capital — companies like Google, Amazon, Flipkart, Swiggy use ATS to screen candidates. Build an ATS-optimised resume for Bangalore roles.',
  keywords: [
    'resume builder bangalore',
    'cv builder bangalore',
    'bangalore resume format',
    'resume for bangalore jobs',
    'best resume builder bangalore',
    'bangalore tech resume',
    'resume builder for bangalore it jobs',
    'bangalore software engineer resume',
    'resume for startups bangalore',
    'bangalore ats resume',
  ],
  alternates: { canonical: 'https://cv-prime.in/resume-builder-bangalore' },
  openGraph: {
    title: 'Resume Builder Bangalore 2026 — ATS Resume for Bangalore Tech Jobs',
    description:
      'Build an ATS-optimised resume for Bangalore\'s tech ecosystem: FAANG, product unicorns, and funded startups. Free with CV Prime.',
    url: 'https://cv-prime.in/resume-builder-bangalore',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Builder Bangalore' }],
  },
};

const bangaloreCompanies = [
  { name: 'Google India', type: 'FAANG', ats: true },
  { name: 'Amazon India', type: 'FAANG', ats: true },
  { name: 'Microsoft India', type: 'FAANG', ats: true },
  { name: 'Flipkart', type: 'Product unicorn', ats: true },
  { name: 'Swiggy', type: 'Product unicorn', ats: true },
  { name: 'PhonePe', type: 'Product unicorn', ats: true },
  { name: 'CRED', type: 'Product startup', ats: true },
  { name: 'Groww', type: 'Fintech unicorn', ats: true },
  { name: 'Zepto', type: 'Quick commerce', ats: true },
  { name: 'Meesho', type: 'E-commerce', ats: true },
  { name: 'Infosys', type: 'IT services', ats: true },
  { name: 'Wipro', type: 'IT services', ats: true },
];

const bangaloreSalaries = [
  { role: 'Software Engineer (fresher)', range: '₹6L – ₹20L', note: 'Product companies pay 3–5x IT services' },
  { role: 'Software Engineer (3–5 years)', range: '₹18L – ₹40L', note: 'At product/FAANG companies' },
  { role: 'Software Engineer (7+ years)', range: '₹35L – ₹90L+', note: 'At senior/staff levels' },
  { role: 'Product Manager (mid)', range: '₹25L – ₹50L', note: 'At funded startups and MNCs' },
  { role: 'Data Scientist (3+ years)', range: '₹20L – ₹45L', note: 'Bangalore leads AI/ML salaries' },
  { role: 'DevOps / SRE (3+ years)', range: '₹18L – ₹38L', note: 'High demand across all company types' },
];

const bangaloreTips = [
  { title: 'Lead with impact metrics', body: 'Bangalore recruiters — especially at product companies — filter hard on quantified outcomes. "Reduced latency by 40%" beats "worked on performance improvements" in every ATS and human screen.' },
  { title: 'Use STAR-format bullets for FAANG', body: 'Amazon, Google, and Microsoft Bangalore use structured interview and resume screens. Bullets should follow: Situation/Action/Result format. CV Prime\'s AI rewriter structures bullets this way automatically.' },
  { title: 'Technical stack specificity matters', body: 'Generic "Java developer" resumes lose to "Java, Spring Boot, Kubernetes, PostgreSQL, AWS" resumes for Bangalore tech roles. List the exact stack — it\'s what ATS screens for first.' },
  { title: 'GitHub and portfolio links are expected', body: 'Bangalore product companies and startups expect a GitHub profile or portfolio link. Include it prominently in your contact section — it signals active engineering practice.' },
  { title: 'Startup experience transfers well', body: 'Bangalore startup experience is valued as much as MNC experience for many product companies. Emphasise ownership, scope, and impact — not company brand.' },
];

const faqs = [
  {
    q: 'What is the best resume format for Bangalore tech jobs?',
    a: 'A clean, single-column or minimal two-column reverse-chronological resume is best for Bangalore tech jobs. Lead with a 3-line professional summary highlighting your top metric and tech stack. Follow with Work Experience (most recent first) with STAR-format outcome bullets, Technical Skills (grouped: Languages, Frameworks, Cloud, Tools), Education, and Certifications. 1 page for under 5 years; 2 pages for senior roles. ATS-safe templates from CV Prime are tested against Taleo, Darwinbox, and Lever — all used heavily by Bangalore companies.',
  },
  {
    q: 'Do Bangalore companies use ATS to screen resumes?',
    a: '100% of FAANG India offices, all product unicorns (Swiggy, Flipkart, PhonePe, CRED), and most mid-size tech companies in Bangalore use ATS systems. Google uses Greenhouse, Amazon uses an internal system, Flipkart uses Darwinbox, and many startups use Lever or Workday. A resume with the wrong format or missing keywords is automatically filtered before any human sees it.',
  },
  {
    q: 'How much more does Bangalore pay compared to other Indian cities for tech roles?',
    a: 'Bangalore pays approximately 15–25% more than the national average for tech roles, and 30–40% more than Tier-2 cities like Pune or Ahmedabad. For FAANG roles, Bangalore compensation often exceeds other cities by an even larger margin due to ESOPs and stock-based compensation. Data Scientists in Bangalore earn a median 20% premium over their peers in Delhi or Mumbai.',
  },
  {
    q: 'Should I mention CGPA on a Bangalore tech resume?',
    a: 'For freshers (graduating in 2023–2026) with CGPA 7.5+/10, include it in your Education section. For experienced candidates (2+ years), drop the CGPA entirely — Bangalore product companies screen experienced engineers entirely on their work impact, portfolio, and system design skills, not college grades.',
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

export default function ResumeBangelorePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Resume Builder Bangalore</span>
          </nav>
          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
            <MapPin className="h-4 w-4" />
            Bangalore, Karnataka — India&apos;s tech capital
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Resume builder for Bangalore jobs — ATS-optimised for India&apos;s tech hub
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Bangalore has the most competitive tech job market in India. Google, Amazon, Flipkart, Swiggy, PhonePe — every major company screens resumes with ATS before a human reads them. Build one that passes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong"
            >
              Build your Bangalore resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ats-checker"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-sm font-medium text-slate-300 hover:border-slate-400 hover:text-white"
            >
              Check your ATS score free
            </Link>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="border-b border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Top Bangalore companies — all use ATS screening</h2>
          <p className="mt-3 text-slate-500">Your resume must pass ATS before any human at these companies ever sees it.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {bangaloreCompanies.map((co) => (
              <div key={co.name} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div>
                  <p className="font-semibold text-slate-900">{co.name}</p>
                  <p className="text-xs text-slate-500">{co.type}</p>
                </div>
                {co.ats && <CheckCircle2 className="h-5 w-5 text-cyan-600" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salaries */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-brand" />
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Bangalore salary ranges 2026</h2>
          </div>
          <p className="mt-3 text-slate-500">Bangalore pays 15–25% above the national average for tech roles.</p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 text-left font-semibold text-slate-600">Role</th>
                  <th className="p-4 text-right font-semibold text-slate-600">Salary range</th>
                  <th className="p-4 text-left font-semibold text-slate-500">Note</th>
                </tr>
              </thead>
              <tbody>
                {bangaloreSalaries.map((row, i) => (
                  <tr key={row.role} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                    <td className="p-4 font-medium text-slate-800">{row.role}</td>
                    <td className="p-4 text-right font-bold text-cyan-700">{row.range}</td>
                    <td className="p-4 text-xs text-slate-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-400">Source: Naukri Salary Insights, LinkedIn India Talent Report, AmbitionBox 2026 data</p>
        </div>
      </section>

      {/* Bangalore-specific tips */}
      <section className="bg-slate-50 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-brand" />
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Resume tips for Bangalore job seekers</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {bangaloreTips.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="font-display text-lg font-bold text-slate-900">{tip.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Bangalore resume — frequently asked questions</h2>
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

      {/* Related */}
      <section className="border-t border-slate-100 px-5 py-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">Explore by role</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { label: 'Software engineer resume', href: '/resume-examples/software-engineer' },
              { label: 'Product manager resume', href: '/resume-examples/product-manager' },
              { label: 'Data scientist resume', href: '/resume-examples/data-scientist' },
              { label: 'DevOps engineer resume', href: '/resume-examples/devops-engineer' },
              { label: 'Full stack developer resume', href: '/resume-examples/full-stack-developer' },
              { label: 'Bangalore salary guide', href: '/salary' },
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

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Build a resume that passes Bangalore&apos;s ATS filters
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Free plan: 3 PDF exports, ATS scoring, AI bullet rewriting. Pro from ₹249/month. No credit card to start.
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
