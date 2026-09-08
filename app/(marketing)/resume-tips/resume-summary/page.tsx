import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { RelatedResumeTips } from '@/components/marketing/RelatedResumeTips';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'How to Write a Resume Summary — Examples for Every Role 2026 | CV Prime',
  description:
    'Write a resume summary that gets interviews. Learn the 3-line formula, see examples for software engineers, freshers, career changers, and senior professionals. India 2026.',
  alternates: { canonical: 'https://cv-prime.in/resume-tips/resume-summary' },
  keywords: [
    'resume summary',
    'how to write resume summary',
    'professional summary for resume',
    'resume summary examples',
    'resume summary india',
    'resume summary for freshers',
    'career objective vs summary',
    'resume profile summary',
    'resume summary 2026',
    'good resume summary',
  ],
  openGraph: {
    title: 'How to Write a Resume Summary — With Examples 2026 | CV Prime',
    description: 'The exact formula for a resume summary that gets interviews. Examples for freshers, experienced professionals, and career changers.',
    url: 'https://cv-prime.in/resume-tips/resume-summary',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Summary Guide — CV Prime' }],
  },
};

const formula = [
  { part: 'Line 1', role: 'Who you are', desc: 'Your job title or target role + years of experience + your defining credential or skill', example: '"Senior Product Manager with 6 years building B2B SaaS products in fintech and e-commerce."' },
  { part: 'Line 2', role: 'What you are known for', desc: 'Your single biggest career achievement — quantified if possible', example: '"Launched 3 products that collectively generated $2.4M ARR, including a merchant lending product used by 80,000+ SMBs."' },
  { part: 'Line 3', role: 'What you bring to this role', desc: 'Why you want this specific company/role — or your domain differentiator', example: '"Seeking to bring growth-stage product expertise to Groww\'s next payments infrastructure initiative."' },
];

const examples = [
  {
    role: 'Software Engineer (3 years exp.)',
    summary: 'Full Stack Engineer with 3 years building scalable B2C web applications at a Series B startup. Shipped 4 customer-facing features that collectively reduced churn by 14% and improved page load time by 2.3 seconds. Proficient in React, Node.js, and AWS; currently transitioning into infrastructure-heavy roles.',
  },
  {
    role: 'Data Analyst (fresher)',
    summary: 'Data Analyst with B.Tech in Computer Science (CGPA 8.4, VIT Vellore) and hands-on experience analysing customer behaviour data across 3 internships. Built an end-to-end churn prediction model using Python and scikit-learn as part of a Flipkart internship project. Proficient in SQL, Python, Tableau, and Excel.',
  },
  {
    role: 'Marketing Manager (5 years exp.)',
    summary: 'Performance Marketing Manager with 5 years scaling D2C brands in beauty and wellness. Grew organic traffic 4x and reduced CPA by 38% across two brands through structured SEO, content, and paid media strategies. Now targeting senior growth roles at consumer internet companies with ₹50Cr+ marketing budgets.',
  },
  {
    role: 'HR Manager (career changer from HR Coordinator)',
    summary: 'HR Manager with 4 years of progressive experience in talent acquisition and HRBP, spanning IT services and fintech. Recruited 120+ hires in FY24 with a 22-day average time-to-hire — 40% below industry benchmark. SHRM-CP certified; transitioning from coordinator to HRBP-led roles in high-growth tech companies.',
  },
  {
    role: 'Finance Analyst (2 years exp.)',
    summary: 'Finance Analyst (CA finalist, cleared 2 groups) with 2 years in FP&A at a mid-size NBFC. Built the monthly MIS reporting framework used by the CFO team, reducing reporting cycle from 8 to 3 days. Proficient in financial modelling, SAP FICO, and Power BI. Targeting Big 4 or investment banking analyst roles.',
  },
];

const doAndDont = [
  { do: 'Name the specific role you\'re applying for in line 1', dont: 'Use vague labels like "dynamic professional" or "seasoned expert"' },
  { do: 'Include at least one quantified achievement', dont: 'Write only about responsibilities — "managed a team", "worked on campaigns"' },
  { do: 'Keep it to 3–4 lines (40–80 words max)', dont: 'Write a paragraph of 6+ lines that no recruiter will read in full' },
  { do: 'Tailor it to every JD — change line 3 at minimum', dont: 'Use the same summary for every application' },
  { do: 'Match the job title in your summary to the one in the JD', dont: 'Use your internal title if it is different from the market-standard title in the JD' },
];

const faqs = [
  {
    q: 'What is a resume summary?',
    a: 'A resume summary is a 3–4 line paragraph at the top of your resume, just below your contact details, that tells the recruiter who you are, what you have achieved, and why you are right for this specific role. It replaces the outdated "objective statement" and is the first thing both ATS and human recruiters look at after your name.',
  },
  {
    q: 'Should I include a summary on my resume?',
    a: 'Yes, for experienced professionals (2+ years) — a tailored summary is one of the highest-ROI changes you can make to a resume. For freshers with less than 1 year of experience, a summary is optional; an objective statement (what you are seeking and why) can work better.',
  },
  {
    q: 'How long should a resume summary be?',
    a: '3–4 lines, or 40–80 words. Recruiters spend an average of 6 seconds on initial review. A summary longer than 4 lines will not be fully read — the information beyond line 3 is invisible to most screeners.',
  },
  {
    q: 'What is the difference between a resume summary and a resume objective?',
    a: 'A resume summary focuses on what you have already achieved and offers (it is employer-focused). A resume objective states what you are seeking (it is self-focused). Summaries are preferred for experienced candidates. Objectives are acceptable for freshers, career changers, or people re-entering the workforce after a break.',
  },
  {
    q: 'Should a fresher write a resume summary or objective?',
    a: 'Either works for freshers, but an objective is often more honest at 0 experience. If you have even 1 internship or a significant project, write a 2-line summary instead: your degree + your strongest internship outcome. Avoid generic objectives like "seeking to utilise my skills in a reputed organisation."',
  },
  {
    q: 'Do ATS systems read the resume summary?',
    a: 'Yes. The summary section is fully parsed by ATS, and keywords in your summary are weighted. Including the exact job title from the JD in your summary increases your ATS title-match score significantly. Aim to naturally include 3–5 keywords from the JD in your summary.',
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
    { '@type': 'ListItem', position: 3, name: 'Resume Summary', item: 'https://cv-prime.in/resume-tips/resume-summary' },
  ],
};

export default function ResumeSummaryPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/resume-tips" className="hover:text-white">Resume Tips</Link><span>/</span>
            <span className="text-white">Resume Summary</span>
          </nav>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            How to write a resume summary — with examples for every role
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Your resume summary is the first thing recruiters read — and the most commonly wasted 3 lines on most resumes. Learn the exact formula and see real examples for freshers, experienced professionals, and career changers.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong transition">
            Write my summary with AI <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* The 3-line formula */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">The 3-line resume summary formula</h2>
          <p className="mt-3 text-slate-400">Every strong resume summary has these three components — in this order</p>
          <div className="mt-8 space-y-5">
            {formula.map((item) => (
              <div key={item.part} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground font-display text-sm font-bold">{item.part}</span>
                  <div>
                    <p className="font-display text-lg font-bold text-white">{item.role}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                    <div className="mt-3 rounded-xl bg-white/[0.03] p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Example</p>
                      <p className="mt-1 text-sm italic text-slate-300">{item.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real examples */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Resume summary examples — by role and experience level</h2>
          <div className="mt-8 space-y-5">
            {examples.map((ex) => (
              <div key={ex.role} className="rounded-2xl bg-white/[0.04] p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-brand">{ex.role}</p>
                <p className="mt-3 leading-7 text-slate-300 italic">&quot;{ex.summary}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Do & Don't */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Resume summary — do&apos;s and don&apos;ts</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-3 text-left font-bold text-green-700">✅ Do</th>
                  <th className="pb-3 text-left font-bold text-red-600">❌ Don&apos;t</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {doAndDont.map((row) => (
                  <tr key={row.do}>
                    <td className="py-3 pr-6 text-slate-300">{row.do}</td>
                    <td className="py-3 text-slate-300">{row.dont}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Resume summary — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white/[0.04] p-5 shadow-sm">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/resume-tips', label: '← All resume tips' },
              { href: '/resume-tips/resume-objective', label: 'Resume objective vs summary' },
              { href: '/resume-tips/action-verbs', label: 'Action verbs list' },
              { href: '/resume-tips/resume-bullet-points', label: 'Bullet writing guide' },
              { href: '/resume-examples', label: 'Resume examples by role' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 hover:border-brand hover:text-brand transition">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">AI writes your resume summary — tailored to the JD</h2>
          <p className="mt-4 text-slate-300">Paste the job description and CV Prime AI writes a 3-line, keyword-optimised summary in seconds. Free to start.</p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Write my summary with AI <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <RelatedResumeTips
        items={[
          { href: '/resume-tips/resume-objective', label: 'Resume Objective Guide', desc: 'When to use an objective instead of a summary' },
          { href: '/resume-tips/resume-headline', label: 'Resume Headline Guide', desc: 'Pair your summary with a strong one-line headline' },
          { href: '/resume-tips/quantifying-achievements', label: 'Quantifying Achievements', desc: 'Add real numbers to your summary and bullets' },
          { href: '/resume-tips/ats-keywords', label: 'ATS Keywords Guide', desc: 'Work the right keywords into your summary' },
        ]}
      />
      <StickyCTA label="Write resume summary with AI" message="AI writes a tailored 3-line summary for your role — free" />
    </main>
  );
}
