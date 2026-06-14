import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'How to Write Work Experience on a Resume — Format + Examples 2026 | CV Prime',
  description:
    'How to format and write the work experience section of your resume. Covers what to include, how many bullets per job, handling multiple roles at one company, and examples for 5 roles.',
  alternates: { canonical: 'https://cv-prime.in/resume-tips/work-experience' },
  keywords: [
    'work experience resume',
    'how to write work experience on resume',
    'resume work experience format',
    'work experience section resume',
    'resume experience section',
    'work experience resume india',
    'how to list jobs on resume',
    'resume experience format india',
    'work history resume',
    'work experience examples resume',
  ],
  openGraph: {
    title: 'How to Write Work Experience on a Resume — Format + Examples | CV Prime',
    description: 'The correct format for the work experience section, how many bullets per role, and before/after examples across 5 roles.',
    url: 'https://cv-prime.in/resume-tips/work-experience',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Work Experience Resume Guide — CV Prime' }],
  },
};

const formatRules = [
  {
    element: 'Job title',
    rule: 'Use the market-standard title, not your internal title if they differ. If your internal title was "Pod Lead" but the market title is "Engineering Manager", add both: "Engineering Manager (Pod Lead at Swiggy)".',
    ats: 'Critical — ATS matches on job title',
  },
  {
    element: 'Company name',
    rule: 'Write the company\'s full legal/brand name. Add a brief descriptor in parentheses if the company is not well-known: "HealthStack (B2B healthcare SaaS startup, Series A)".',
    ats: 'Medium — ATS uses company for experience parsing',
  },
  {
    element: 'Dates',
    rule: 'Use month and year: "Jun 2022 – Present" or "Mar 2020 – May 2022". Right-align or left-align consistently. Never use only years — "2022 – 2023" could be 1 month or 23 months.',
    ats: 'Medium — ATS calculates tenure from dates',
  },
  {
    element: 'Location',
    rule: 'City only is sufficient: "Bengaluru", "Mumbai", "Delhi NCR". For remote roles: "Remote (India)".',
    ats: 'Low — mainly for human recruiter context',
  },
  {
    element: 'Bullets',
    rule: '3–5 bullets for your most recent role. 2–3 for older or shorter roles. Each bullet = one achievement. Start with a strong action verb.',
    ats: 'Critical — bullets contain most of your keywords',
  },
];

const multipleRolesGuide = [
  {
    situation: 'Promoted at the same company',
    format: 'Stack under one company header with separate role blocks:\nAcme Corp (Jun 2020 – Present)\n  Senior Product Manager (Jan 2023 – Present)\n  • bullets\n  Product Manager (Jun 2020 – Dec 2022)\n  • bullets',
    why: 'Shows progression clearly; ATS attributes full tenure to one company.',
  },
  {
    situation: 'Same title, different team/scope',
    format: 'Use a scope descriptor in the title: "Data Analyst – Payments Team" → "Senior Data Analyst – Growth Team"',
    why: 'Clarifies what changed without a confusing parallel listing.',
  },
  {
    situation: 'Lateral move to a different company',
    format: 'Treat as separate entries. ATS must see these as separate employers.',
    why: 'Separate company = separate entry. Never combine different employers under one block.',
  },
];

const howManyBullets = [
  { role: 'Current / most recent role', bullets: '4–6', rationale: 'Recruiters spend the most time here. Maximise keyword density and achievement density.' },
  { role: 'Role 2 ago (still relevant)', bullets: '3–4', rationale: 'Still reads and should show skill progression. Fewer bullets but higher quality.' },
  { role: 'Role 3+ ago (older, still relevant)', bullets: '2–3', rationale: 'Mostly for context. Only include bullets with outsized achievements.' },
  { role: 'Short-term role under 6 months', bullets: '1–2', rationale: 'Too much detail on a brief stint looks defensive. One strong bullet is better.' },
  { role: 'Role more than 10 years ago', bullets: '0–2', rationale: 'Often can be listed as job title + company + date only, with no bullets if not relevant.' },
];

const roleExamples = [
  {
    role: 'Software Engineer — 2 years at a Series B startup',
    bullets: [
      'Rebuilt the authentication layer using OAuth 2.0 and JWT, reducing login-related support tickets by 68% and enabling SSO for 12 enterprise clients.',
      'Led migration of 3 legacy Python 2 services to Python 3.11, reducing CI build times by 40% and eliminating 14 known security vulnerabilities.',
      'Designed and shipped a rate-limiting API gateway (Redis + NGINX) that absorbed 3 DDoS-style traffic spikes without downtime — preventing an estimated ₹60L in potential SLA penalties.',
    ],
  },
  {
    role: 'Product Manager — 3 years at an e-commerce company',
    bullets: [
      'Owned the checkout and payments roadmap for a platform processing ₹240Cr GMV/month — shipped 4 initiatives that collectively reduced checkout abandonment from 62% to 48%.',
      'Led a 0→1 Buy Now Pay Later feature with a NBFC partner — reached ₹12Cr TPV in the first quarter and became the #2 payment method by volume within 6 months.',
      'Established a weekly data review ritual for the product team — improved sprint velocity by 22% and reduced rework (features shipped but reverted) from 3/quarter to 0.',
    ],
  },
  {
    role: 'Marketing Manager — 4 years at a D2C brand',
    bullets: [
      'Scaled monthly paid media spend from ₹15L to ₹80L while improving ROAS from 2.1x to 3.8x through creative testing, audience segmentation, and bid strategy restructuring.',
      'Built an in-house content and SEO function from scratch — grew organic traffic from 8k to 120k monthly visitors in 18 months, reducing reliance on paid acquisition by 35%.',
      'Launched influencer programme (45 creators, ₹3L/month spend) that drove 28% of new customer acquisitions in FY24 at 60% lower CAC than Meta Ads.',
    ],
  },
];

const whatToExclude = [
  'Day-to-day tasks with no measurable outcome ("Attended daily standup meetings")',
  'Team achievements you did not personally drive ("The team grew revenue by 30%")',
  'Responsibilities that are implied by the job title ("Wrote code as a software engineer")',
  'Vague statements that sound good but say nothing ("Worked cross-functionally to deliver impact")',
  'Outdated technology skills from 10+ years ago unless directly relevant to the JD',
];

const faqs = [
  {
    q: 'How far back should work experience on a resume go?',
    a: 'For most candidates, 10–15 years is the standard. For freshers, include all experience (including internships and part-time roles). For senior professionals (15+ years), you can condense or remove early-career roles that are no longer relevant. The goal is relevance, not completeness — if a role from 12 years ago does not support your current application, it can be a one-line entry or dropped entirely.',
  },
  {
    q: 'Should I include internships in the work experience section?',
    a: 'For freshers and candidates under 3 years of experience — yes, internships go in the work experience section. Treat them like jobs: company, title, dates, 2–3 achievement bullets. For candidates with 5+ years of full-time experience, internships can be moved to a separate "Early Career" or "Internships" section, or dropped if space is tight.',
  },
  {
    q: 'What if I have a gap in my work experience?',
    a: 'Do not try to hide it. If you used the gap productively (freelancing, upskilling, caregiving, travel), list it briefly with a functional entry. If you did not, be prepared to address it directly in an interview — a short gap (under 6 months) rarely needs explanation. See our dedicated guide on handling gaps in your resume.',
  },
  {
    q: 'How do I show a promotion at the same company?',
    a: 'Stack the roles under one company header. List the company name and total dates once, then show each title as a sub-entry with its own date range and bullets. This approach shows both loyalty and progression — two qualities recruiters value. Example: "Flipkart (Jun 2019 – Present) → Senior Data Scientist (Jan 2022 – Present) → Data Scientist (Jun 2019 – Dec 2021)".',
  },
  {
    q: 'Can I reorder work experience if my most relevant job is not my most recent?',
    a: 'Standard reverse-chronological order is expected by ATS and recruiters. Do not reorder chronologically. Instead, give the most recent job the most bullets, and within each bullet, lead with the skills and outcomes most relevant to the target JD. If your most relevant experience truly is older, consider a hybrid format — but verify that your ATS can parse it.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Resume Tips', item: 'https://cv-prime.in/resume-tips' },
    { '@type': 'ListItem', position: 3, name: 'Work Experience', item: 'https://cv-prime.in/resume-tips/work-experience' },
  ],
};

export default function WorkExperiencePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/resume-tips" className="hover:text-white">Resume Tips</Link><span>/</span>
            <span className="text-white">Work Experience</span>
          </nav>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            How to write work experience on a resume — format and examples
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            The work experience section is 70% of your resume's weight with recruiters. Getting the format right, the bullet structure right, and knowing exactly how much to include per role separates interview-winning resumes from the ones ATS rejects.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong transition">
            Rewrite my work experience with AI <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Format rules */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Work experience format — every element explained</h2>
          <div className="mt-8 space-y-4">
            {formatRules.map((item) => (
              <div key={item.element} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-base font-bold text-slate-950">{item.element}</h3>
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">ATS: {item.ats.split(' — ')[0]}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How many bullets */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">How many bullets per job — the right ratio</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="pb-3 text-left font-bold text-slate-700">Role type</th>
                  <th className="pb-3 text-center font-bold text-brand">Bullets</th>
                  <th className="pb-3 text-left font-bold text-slate-500">Rationale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {howManyBullets.map((row) => (
                  <tr key={row.role}>
                    <td className="py-3 pr-6 text-slate-700 font-medium">{row.role}</td>
                    <td className="py-3 text-center font-bold text-brand">{row.bullets}</td>
                    <td className="py-3 text-slate-500">{row.rationale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Multiple roles */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Multiple roles at the same company — how to format</h2>
          <div className="mt-8 space-y-5">
            {multipleRolesGuide.map((item) => (
              <div key={item.situation} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="font-display text-base font-bold text-brand">{item.situation}</p>
                <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-50 p-4 text-sm font-mono text-slate-700 whitespace-pre-wrap">{item.format}</pre>
                <p className="mt-3 text-sm text-slate-500"><span className="font-semibold text-slate-700">Why:</span> {item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real bullet examples */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Work experience bullets — real examples by role</h2>
          <div className="mt-8 space-y-6">
            {roleExamples.map((ex) => (
              <div key={ex.role} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-brand">{ex.role}</p>
                <ul className="mt-4 space-y-3">
                  {ex.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span className="leading-6">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to exclude */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">5 things to exclude from your work experience section</h2>
          <div className="mt-8 space-y-3">
            {whatToExclude.map((item, i) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-red-100 bg-red-50 p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">✕</span>
                <p className="text-sm text-red-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Work experience — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 px-5 py-12">
        <div className="mx-auto max-w-5xl flex flex-wrap gap-3">
          {[
            { href: '/resume-tips', label: '← All resume tips' },
            { href: '/resume-tips/resume-bullet-points', label: 'Bullet writing guide' },
            { href: '/resume-tips/quantifying-achievements', label: 'Quantifying achievements' },
            { href: '/resume-tips/gap-in-resume', label: 'Gap in resume guide' },
            { href: '/resume-builder', label: 'AI resume builder' },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand hover:text-brand transition">{l.label}</Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">AI transforms your work experience into achievement bullets</h2>
          <p className="mt-4 text-slate-300">Paste your current experience and a JD. CV Prime rewrites every duty statement into a CAR-format achievement bullet — free to start.</p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Rewrite my work experience free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <StickyCTA label="Rewrite work experience with AI" message="AI turns duty descriptions into quantified achievement bullets — free" />
    </main>
  );
}
