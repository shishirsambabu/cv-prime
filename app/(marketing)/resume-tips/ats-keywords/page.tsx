import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'ATS Keywords for Resume — How to Find & Use Them 2026 | CV Prime',
  description:
    'How to find the right ATS keywords for your resume, where to place them, and how many you need to pass automated screening. With examples for software, finance, marketing, and HR roles.',
  alternates: { canonical: 'https://cv-prime.in/resume-tips/ats-keywords' },
  keywords: [
    'ats keywords for resume',
    'resume keywords',
    'ats resume keywords',
    'how to find ats keywords',
    'resume keywords list',
    'ats keywords india',
    'ats keyword optimization',
    'resume keyword placement',
    'ats resume tips',
    'keyword optimization resume',
  ],
  openGraph: {
    title: 'ATS Keywords for Resume — How to Find & Use Them | CV Prime',
    description: 'Find the right keywords, place them correctly, and pass ATS screening. With real examples for tech, finance, and marketing roles.',
    url: 'https://cv-prime.in/resume-tips/ats-keywords',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ATS Keywords for Resume — CV Prime' }],
  },
};

const keywordTypes = [
  {
    type: 'Job title keywords',
    priority: 'Critical',
    priorityColor: 'text-red-700 bg-red-50',
    desc: 'The exact job title from the JD. ATS systems are heavily weighted towards title-match.',
    example: 'JD says "Senior Software Engineer" → your summary should say "Senior Software Engineer", not "Senior Dev" or "Lead Engineer".',
    where: 'Resume summary (line 1) and current/recent job titles',
  },
  {
    type: 'Hard skill keywords',
    priority: 'Critical',
    priorityColor: 'text-red-700 bg-red-50',
    desc: 'Specific technologies, tools, certifications, and domain skills mentioned in the JD.',
    example: '"Python", "React", "AWS", "SQL", "Salesforce", "Power BI", "Agile", "Scrum", "SAP FICO"',
    where: 'Skills section + experience bullets where applicable',
  },
  {
    type: 'Responsibility keywords',
    priority: 'High',
    priorityColor: 'text-amber-300 bg-amber-50',
    desc: 'Key verbs and responsibilities listed in the JD — signal that you have done what they need.',
    example: 'JD says "lead cross-functional teams" → use "Led cross-functional team of..." in a bullet.',
    where: 'Work experience bullets',
  },
  {
    type: 'Industry/domain keywords',
    priority: 'Medium',
    priorityColor: 'text-cyan-300 bg-cyan-50',
    desc: 'Industry terminology, sector labels, and domain context — shows you understand the space.',
    example: '"NBFC", "D2C", "Series B", "B2B SaaS", "FMCG", "fintech", "edtech"',
    where: 'Summary, bullets, and skills where naturally used',
  },
  {
    type: 'Certification & qualification keywords',
    priority: 'Medium',
    priorityColor: 'text-cyan-300 bg-cyan-50',
    desc: 'Degrees, certifications, and credentials the JD requires or prefers.',
    example: '"B.Tech", "MBA", "CA", "CFA", "PMP", "AWS Certified", "Google Analytics Certified"',
    where: 'Education section + summary if highly relevant',
  },
];

const roleKeywords = [
  {
    role: 'Software Engineer',
    jdPhrases: ['Python', 'REST APIs', 'microservices', 'Kubernetes', 'CI/CD', 'system design', 'code review'],
    goodPlacement: 'Skills section + experience bullets ("Designed microservices architecture...", "Built REST APIs that...")',
    badPlacement: 'Dumping "Python, React, Kubernetes" in a text block with no context',
  },
  {
    role: 'Product Manager',
    jdPhrases: ['product roadmap', 'stakeholder management', 'go-to-market', 'A/B testing', 'user research', 'PRD'],
    goodPlacement: 'Summary + bullets ("Defined 6-month product roadmap...", "Led A/B test that...")',
    badPlacement: 'Listing "stakeholder management" as a skill — show it in a bullet instead',
  },
  {
    role: 'Data Analyst',
    jdPhrases: ['SQL', 'Python', 'Tableau', 'Power BI', 'cohort analysis', 'A/B testing', 'data pipeline'],
    goodPlacement: 'Skills section with proficiency levels + bullets with outcomes ("Built SQL pipeline that...")',
    badPlacement: '"Proficient in data analysis tools" — name the tools explicitly',
  },
  {
    role: 'HR Manager',
    jdPhrases: ['talent acquisition', 'HRBP', 'onboarding', 'employee engagement', 'HRMS', 'compliance'],
    goodPlacement: 'Summary ("HRBP with 5 years...") + bullets ("Led talent acquisition for 80+ hires...")',
    badPlacement: '"Experienced in HR processes" — not parseable, too vague',
  },
  {
    role: 'Finance Analyst',
    jdPhrases: ['financial modelling', 'FP&A', 'MIS', 'variance analysis', 'SAP', 'DCF', 'EBITDA'],
    goodPlacement: 'Skills section + bullets ("Built DCF model for ₹200Cr acquisition...")',
    badPlacement: '"Good with numbers" — zero keyword value',
  },
];

const keywordDensityRules = [
  { rule: 'Match the exact phrasing from the JD', detail: 'ATS often does exact-match. "Machine Learning" ≠ "ML" unless the ATS normalises abbreviations. Use the JD\'s exact wording.' },
  { rule: 'Aim for a 60–75% keyword match rate', detail: 'Tools like CV Prime\'s ATS checker score your match rate. Anything below 50% is high-risk for auto-rejection. Above 80% starts to look keyword-stuffed.' },
  { rule: 'Distribute across all sections', detail: 'ATS scores keywords across summary, skills, and experience. A keyword only in the skills section scores lower than one appearing in 2–3 sections.' },
  { rule: 'Never stuff keywords in white text or hidden fields', detail: 'ATS systems detect invisible keyword stuffing and flag the resume as fraudulent. It works against you.' },
  { rule: 'Use both the spelled-out form and the acronym', detail: '"Artificial Intelligence (AI)", "Search Engine Optimization (SEO)". Many ATS systems recognise one but not the other.' },
];

const faqs = [
  {
    q: 'What are ATS keywords and why do they matter?',
    a: 'ATS (Applicant Tracking System) keywords are specific words and phrases from the job description that ATS software searches for in your resume. When you apply online, most large companies use ATS to automatically filter resumes before any human sees them. Resumes that do not match a threshold percentage of keywords are auto-rejected — estimates suggest 75% of resumes are rejected by ATS before a recruiter ever reads them.',
  },
  {
    q: 'How do I find the right ATS keywords for a specific job?',
    a: 'Read the JD three times: first for the job title and required skills, second for responsibilities (these often hide implicit keywords), third for preferred qualifications. Copy all technical terms, tool names, methodologies, and industry jargon into a list. Then check which ones are already in your resume and which are missing. CV Prime\'s ATS checker does this automatically — paste the JD and it tells you your keyword match rate and which keywords you are missing.',
  },
  {
    q: 'Where should I place keywords in my resume?',
    a: 'Priority order: (1) Resume summary — keywords here are weighted highest by most ATS. (2) Skills section — the fastest section for ATS to parse. (3) Work experience bullets — provide context and proof for the keyword. (4) Job titles — if your actual title differs from the standard market title, consider adding the market title in parentheses. Never place keywords only in headers, footers, tables, or text boxes — many ATS systems cannot parse these.',
  },
  {
    q: 'How many keywords should I target?',
    a: 'Match 60–75% of the keywords in the JD. Most JDs have 15–30 distinct keywords. Aim to naturally incorporate 12–20 of them across your resume. Targeting 100% looks keyword-stuffed and reads poorly to the human recruiter who reviews ATS-passing resumes. Quality and context matter more than raw count.',
  },
  {
    q: 'Will using keywords help with AI-powered ATS systems?',
    a: 'AI-powered ATS (like Workday, Lever, Greenhouse with AI scoring) go beyond exact keyword matching — they assess semantic relevance and context. This makes it even more important to use keywords naturally within achievement bullets rather than just listing them in a skills section. A bullet that says "Led migration to Kubernetes, reducing deployment time by 60%" scores higher than just "Kubernetes" in a skills list — the AI understands depth of use.',
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
    { '@type': 'ListItem', position: 3, name: 'ATS Keywords', item: 'https://cv-prime.in/resume-tips/ats-keywords' },
  ],
};

export default function ATSKeywordsPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/resume-tips" className="hover:text-white">Resume Tips</Link><span>/</span>
            <span className="text-white">ATS Keywords</span>
          </nav>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            ATS keywords for resume — how to find them and where to place them
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            75% of resumes are auto-rejected by ATS before a recruiter reads them — almost always because of missing keywords. Learn exactly which keywords to target, where to place them, and how many you need to pass automated screening.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong transition">
            Check my ATS keyword score free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Keyword types */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">5 types of ATS keywords — ranked by impact</h2>
          <p className="mt-3 text-slate-400">Not all keywords carry equal weight. Job title and hard skill keywords matter most.</p>
          <div className="mt-8 space-y-5">
            {keywordTypes.map((kt, i) => (
              <div key={kt.type} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 font-display text-sm font-bold text-brand">{i + 1}</span>
                  <h3 className="font-display text-lg font-bold text-white">{kt.type}</h3>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${kt.priorityColor}`}>{kt.priority}</span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{kt.desc}</p>
                <div className="mt-3 rounded-xl bg-white/[0.03] p-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Example</p>
                  <p className="mt-1 text-sm italic text-slate-300">{kt.example}</p>
                </div>
                <p className="mt-3 text-sm text-slate-400"><span className="font-semibold text-slate-300">Where to place:</span> {kt.where}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role-specific keyword placement */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Keyword placement by role — good vs bad examples</h2>
          <div className="mt-8 space-y-5">
            {roleKeywords.map((rk) => (
              <div key={rk.role} className="rounded-2xl bg-white/[0.04] p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-brand">{rk.role}</p>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-slate-300">Key JD keywords to target:</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {rk.jdPhrases.map((kw) => (
                      <span key={kw} className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">{kw}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl border border-green-200 bg-green-50 p-3">
                    <p className="text-xs font-bold text-green-700">✅ Good placement</p>
                    <p className="mt-1 text-sm text-green-800">{rk.goodPlacement}</p>
                  </div>
                  <div className="rounded-xl border border-red-200 bg-red-50 p-3">
                    <p className="text-xs font-bold text-red-700">❌ Bad placement</p>
                    <p className="mt-1 text-sm text-red-800">{rk.badPlacement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Density rules */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">5 ATS keyword rules every resume needs to follow</h2>
          <div className="mt-8 space-y-4">
            {keywordDensityRules.map((rule, i) => (
              <div key={rule.rule} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-brand-foreground">{i + 1}</span>
                <div>
                  <p className="font-semibold text-white">{rule.rule}</p>
                  <p className="mt-1 text-sm text-slate-300">{rule.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">ATS keywords — FAQ</h2>
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
        <div className="mx-auto max-w-5xl flex flex-wrap gap-3">
          {[
            { href: '/resume-tips', label: '← All resume tips' },
            { href: '/resume-tips/skills-section', label: 'Skills section guide' },
            { href: '/resume-tips/resume-bullet-points', label: 'Bullet writing guide' },
            { href: '/ats-checker', label: 'Free ATS checker' },
            { href: '/resume-builder', label: 'AI resume builder' },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 hover:border-brand hover:text-brand transition">{l.label}</Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">See your ATS keyword match score — free</h2>
          <p className="mt-4 text-slate-300">Paste your resume and the JD. CV Prime instantly shows your keyword match rate and which keywords you are missing.</p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Check my ATS score free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <StickyCTA label="Check ATS keyword score free" message="See your keyword match rate and missing keywords — instantly" />
    </main>
  );
}
