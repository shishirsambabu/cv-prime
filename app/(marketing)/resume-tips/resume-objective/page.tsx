import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Resume Objective vs Summary — When to Use Each + Examples 2026 | CV Prime',
  description:
    'Resume objective or professional summary — which one should you use? Covers when each works, the 3 cases where an objective wins, and 8 ready-to-use examples for freshers and career changers.',
  alternates: { canonical: 'https://cv-prime.in/resume-tips/resume-objective' },
  keywords: [
    'resume objective',
    'career objective for resume',
    'resume objective examples',
    'objective for resume freshers',
    'resume objective vs summary',
    'career objective statement',
    'resume objective india',
    'objective for resume india',
    'professional summary vs objective',
    'career objective 2026',
  ],
  openGraph: {
    title: 'Resume Objective vs Summary — Which to Use + 8 Examples | CV Prime',
    description: 'When a resume objective beats a summary — and 8 ready-to-use examples for freshers, career changers, and returners.',
    url: 'https://cv-prime.in/resume-tips/resume-objective',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Objective vs Summary — CV Prime' }],
  },
};

const comparison = [
  {
    aspect: 'Focus',
    objective: 'What you want from the employer',
    summary: 'What you offer the employer',
    winner: 'summary',
  },
  {
    aspect: 'Best for',
    objective: 'Freshers, career changers, re-entry after gap',
    summary: 'Experienced professionals (2+ years)',
    winner: 'depends',
  },
  {
    aspect: 'Length',
    objective: '1–2 lines',
    summary: '3–4 lines (40–80 words)',
    winner: 'depends',
  },
  {
    aspect: 'ATS impact',
    objective: 'Lower — fewer keywords if poorly written',
    summary: 'Higher — more space to embed JD keywords',
    winner: 'summary',
  },
  {
    aspect: 'Human recruiter impact',
    objective: 'Works when honest and specific',
    summary: 'Works when quantified achievements are mentioned',
    winner: 'depends',
  },
  {
    aspect: 'Generic version risk',
    objective: 'High — "seeking to utilise skills" is always weak',
    summary: 'Medium — "results-driven professional" is common',
    winner: 'depends',
  },
];

const whenToUseObjective = [
  {
    scenario: 'Fresh graduate with less than 6 months of experience',
    why: 'You have no track record to summarise — an honest objective shows self-awareness and clarity of direction.',
    tip: 'Name your target role explicitly and mention your strongest academic or internship credential.',
  },
  {
    scenario: 'Complete career change to a different field',
    why: 'A career changer\'s summary reads as thin or irrelevant if the old field doesn\'t connect to the new one. An objective explains the shift.',
    tip: 'Explain the "why" of the change and name the specific role you\'re targeting — not just "exploring new opportunities."',
  },
  {
    scenario: 'Returning to work after a gap of 1+ year',
    why: 'A gap in your timeline creates questions. A direct objective statement addresses those questions before the recruiter forms assumptions.',
    tip: 'Mention the reason for the gap (family, health, education) briefly and signal re-entry with enthusiasm for the specific role.',
  },
];

const examples = [
  {
    type: 'Fresher — Software Engineer',
    isObjective: true,
    text: 'Computer Science graduate (CGPA 8.6, IIT Kharagpur, 2025) seeking a backend engineering role where I can apply my experience building scalable REST APIs and working with Python and PostgreSQL during two internships at early-stage startups.',
  },
  {
    type: 'Fresher — Data Analyst',
    isObjective: true,
    text: 'Statistics graduate from Delhi University (First Class, 2025) seeking a data analyst role to apply my hands-on experience with SQL, Python, and Tableau — developed during a 3-month internship at Nykaa where I built a customer retention dashboard used by the marketing team.',
  },
  {
    type: 'Fresher — Marketing',
    isObjective: true,
    text: 'MBA Marketing graduate (XLRI, 2025) targeting a performance marketing role in a D2C brand. Completed internships at boAt and Mamaearth managing Google and Meta campaigns with ₹5L+ monthly budgets; eager to contribute to a data-first growth team.',
  },
  {
    type: 'Career changer — Engineering to Product Management',
    isObjective: true,
    text: 'Software Engineer with 4 years of backend development experience transitioning into Product Management. Built and shipped features used by 200k+ users at Razorpay; seeking an Associate PM role where I can apply deep technical understanding to drive product decisions.',
  },
  {
    type: 'Career changer — Finance to Data Analytics',
    isObjective: true,
    text: 'Chartered Accountant with 3 years in FP&A transitioning into data analytics. Completed Google Data Analytics and SQL for Data Science certifications in 2025; seeking an analyst role in fintech or BFSI where my finance domain expertise complements technical skills.',
  },
  {
    type: 'Return after career break (maternity)',
    isObjective: true,
    text: 'HR professional with 6 years of HRBP experience returning from a 2-year career break. Previously built the performance review process for a 400-person tech company. Seeking a senior HRBP or HR manager role in a mid-size tech or e-commerce company in Bengaluru.',
  },
  {
    type: 'Return after career break (higher education)',
    isObjective: true,
    text: 'Marketing professional returning after completing an MBA from ISB (Class of 2025). Previously led growth campaigns at a Series B D2C startup. Seeking senior marketing roles in consumer internet or D2C brands where I can combine 3 years of pre-MBA experience with business strategy training.',
  },
  {
    type: 'When NOT to use objective — use this summary instead',
    isObjective: false,
    text: 'Senior Product Manager with 5 years building B2B SaaS products in fintech. Launched 3 core products that generated ₹8Cr combined ARR, including a reconciliation tool now used by 500+ enterprise clients. Seeking a Director of Product role at a high-growth Series B/C company.',
  },
];

const badObjectives = [
  { bad: 'Seeking to utilise my skills in a reputed organisation.', why: 'Vague, self-focused, says nothing about you or the role.' },
  { bad: 'To work in a challenging environment and grow professionally.', why: '"Challenging" and "grow" tell recruiters nothing — everyone wants this.' },
  { bad: 'Aspiring to join a dynamic team where I can contribute and learn.', why: '"Contribute and learn" is noise. What specifically can you contribute?' },
  { bad: 'Looking for opportunities to leverage my expertise in various domains.', why: '"Various domains" signals confusion, not versatility.' },
];

const faqs = [
  {
    q: 'Should freshers write a resume objective or summary?',
    a: 'An objective is usually better for freshers with no work experience. It lets you state clearly what you are looking for and why you are interested in this specific role. A summary requires achievements to summarise — if you have none yet, a 2-line objective is more honest and more impactful. Once you have at least one internship with an outcome, you can switch to a 2-line summary-style format.',
  },
  {
    q: 'What is wrong with a career objective like "seeking to utilise my skills"?',
    a: '"Seeking to utilise my skills" is the single most common resume opener in India — recruiters see it thousands of times and it signals a copy-paste, low-effort application. It says nothing about who you are, what you can do, or why you want this specific role. Every word in an objective should be earning its place: your target role, your strongest credential, and one specific thing you bring.',
  },
  {
    q: 'How long should a resume objective be?',
    a: '1–2 lines (25–40 words). An objective should be shorter than a summary — it is a statement of intent, not a catalogue of achievements. If it runs to 3 lines, cut it.',
  },
  {
    q: 'Can I use both a summary and an objective?',
    a: 'No — they serve the same structural purpose (the opener of your resume). Use one or the other. For experienced candidates, a summary almost always wins. For freshers and career changers, an objective can be more appropriate.',
  },
  {
    q: 'Does ATS read the resume objective?',
    a: 'Yes — the objective (or summary) section is parsed by ATS for keywords. An objective that names the specific job title and includes 2–3 keywords from the JD will score better than a vague objective. Even if you write an objective, make sure it is keyword-rich.',
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
    { '@type': 'ListItem', position: 3, name: 'Resume Objective', item: 'https://cv-prime.in/resume-tips/resume-objective' },
  ],
};

export default function ResumeObjectivePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/resume-tips" className="hover:text-white">Resume Tips</Link><span>/</span>
            <span className="text-white">Resume Objective</span>
          </nav>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Resume objective vs summary — when to use each, with 8 examples
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Most experienced candidates should use a summary. But for freshers, career changers, and returners — an objective can be the stronger choice. Learn the exact decision rule, see what a good objective looks like, and fix the generic phrases that hurt more than help.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong transition">
            Write my objective or summary with AI <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Comparison table */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Resume objective vs summary — side-by-side comparison</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="pb-3 text-left font-bold text-slate-500 w-1/4">Aspect</th>
                  <th className="pb-3 text-left font-bold text-slate-700 w-[37.5%]">Career objective</th>
                  <th className="pb-3 text-left font-bold text-brand w-[37.5%]">Professional summary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparison.map((row) => (
                  <tr key={row.aspect}>
                    <td className="py-3 pr-4 text-xs font-bold uppercase tracking-wide text-slate-400">{row.aspect}</td>
                    <td className={`py-3 pr-4 text-slate-700 ${row.winner === 'summary' ? 'opacity-60' : ''}`}>{row.objective}</td>
                    <td className={`py-3 text-slate-700 ${row.winner === 'objective' ? 'opacity-60' : ''}`}>{row.summary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3 cases for objective */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">The 3 cases where a resume objective wins</h2>
          <div className="mt-8 space-y-5">
            {whenToUseObjective.map((item, i) => (
              <div key={item.scenario} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground font-display text-sm font-bold">{i + 1}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-950">{item.scenario}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.why}</p>
                    <div className="mt-3 rounded-xl bg-amber-50 border border-amber-200 p-3">
                      <p className="text-xs font-bold text-amber-700">Pro tip</p>
                      <p className="mt-1 text-sm text-amber-800">{item.tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">8 resume objective examples — ready to adapt</h2>
          <div className="mt-8 space-y-4">
            {examples.map((ex) => (
              <div key={ex.type} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand">{ex.type}</p>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${ex.isObjective ? 'bg-cyan-50 text-cyan-700' : 'bg-brand/10 text-brand'}`}>
                    {ex.isObjective ? 'Objective' : 'Summary (comparison)'}
                  </span>
                </div>
                <p className="text-sm leading-7 text-slate-700 italic">&quot;{ex.text}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bad objectives */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">4 career objective phrases that hurt your resume</h2>
          <p className="mt-3 text-slate-500">These openers are used by millions of Indian candidates — which means they immediately signal a generic application</p>
          <div className="mt-8 space-y-4">
            {badObjectives.map((item) => (
              <div key={item.bad} className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-red-700">❌ &quot;{item.bad}&quot;</p>
                <p className="mt-2 text-sm text-slate-600"><span className="font-semibold">Why it fails:</span> {item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Resume objective — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
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
            { href: '/resume-tips/resume-summary', label: 'Resume summary guide' },
            { href: '/resume-tips/resume-bullet-points', label: 'Bullet writing guide' },
            { href: '/fresher-resume', label: 'Fresher resume guide' },
            { href: '/resume-builder', label: 'AI resume builder' },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand hover:text-brand transition">{l.label}</Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">AI writes a tailored objective or summary in seconds</h2>
          <p className="mt-4 text-slate-300">Tell CV Prime your target role, experience level, and top achievement. It writes a strong opener — tailored to the JD. Free to start.</p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Write my resume opener with AI <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <StickyCTA label="Write resume opener with AI" message="AI writes a tailored objective or summary for your role — free" />
    </main>
  );
}
