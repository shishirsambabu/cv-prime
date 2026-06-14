import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Resume Skills Section Guide — What to Include & How to Format 2026 | CV Prime',
  description:
    'How to write a resume skills section that passes ATS. What skills to include, how to group them, hard vs soft skills, and formatting rules. With examples for tech, finance, and marketing roles.',
  alternates: { canonical: 'https://cv-prime.in/resume-tips/skills-section' },
  keywords: [
    'skills for resume',
    'resume skills section',
    'skills to put on resume',
    'how to write skills section resume',
    'resume skills list',
    'technical skills for resume',
    'soft skills for resume',
    'skills section cv india',
    'ats skills resume',
    'resume skills examples',
    'what skills to put on resume',
  ],
  openGraph: {
    title: 'Resume Skills Section Guide — ATS-Optimised Format 2026 | CV Prime',
    description: 'What skills to include, how to group them, and how to format your skills section so ATS can parse it correctly.',
    url: 'https://cv-prime.in/resume-tips/skills-section',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Skills Section — CV Prime' }],
  },
};

const formats = [
  {
    name: 'Simple grouped list (recommended)',
    atsScore: 'Excellent',
    atsColor: 'text-green-700 bg-green-50',
    example: `Languages: Python, JavaScript, SQL, Java
Frameworks: React, Node.js, Django, Spring Boot
Cloud & DevOps: AWS, Docker, Kubernetes, GitHub Actions
Databases: PostgreSQL, MongoDB, Redis
Tools: JIRA, Confluence, Postman, Figma`,
    why: 'ATS can parse each line as a distinct category. Recruiters can scan it in 3 seconds. Works for all roles.',
  },
  {
    name: 'Comma-separated single block',
    atsScore: 'Good',
    atsColor: 'text-cyan-700 bg-cyan-50',
    example: 'Python · SQL · React · Node.js · AWS · Docker · PostgreSQL · JIRA · Agile · REST APIs · Git · Tableau',
    why: 'Works well if you have 10–15 skills. ATS parses it correctly. Use bullet separators (·) not commas to improve visual clarity.',
  },
  {
    name: 'Skills with proficiency ratings',
    atsScore: 'Good',
    atsColor: 'text-cyan-700 bg-cyan-50',
    example: `Python (Advanced) · SQL (Advanced) · R (Intermediate)
Tableau (Advanced) · Power BI (Intermediate) · Excel (Advanced)
Statistics / A/B Testing (Advanced) · Machine Learning (Intermediate)`,
    why: 'Good for data and analytics roles where depth matters. Only include ratings you can defend in an interview.',
  },
  {
    name: 'Visual skill bars / radar charts',
    atsScore: 'Poor',
    atsColor: 'text-red-700 bg-red-50',
    example: 'Python ████████░░ 80% | React ██████░░░░ 60% | AWS ████░░░░░░ 40%',
    why: 'ATS cannot extract skills from graphic elements. The skill name and level are invisible to automated screening. Avoid completely.',
  },
];

const hardVsSoft = {
  hard: [
    { cat: 'Programming', examples: 'Python, JavaScript, Java, C++, Go, Rust' },
    { cat: 'Frameworks', examples: 'React, Node.js, Django, Spring Boot, FastAPI' },
    { cat: 'Data & Analytics', examples: 'SQL, Power BI, Tableau, Excel, R, MATLAB' },
    { cat: 'Cloud & DevOps', examples: 'AWS, GCP, Azure, Docker, Kubernetes, Terraform' },
    { cat: 'Design tools', examples: 'Figma, Adobe XD, Sketch, InVision, Canva' },
    { cat: 'Marketing tools', examples: 'Google Ads, Meta Ads Manager, HubSpot, Salesforce, SEMrush' },
    { cat: 'Finance', examples: 'SAP, Tally, QuickBooks, Financial Modelling, DCF, FP&A' },
    { cat: 'Project management', examples: 'JIRA, Asana, Trello, MS Project, Agile, Scrum' },
  ],
  soft: [
    'Communication', 'Problem-solving', 'Leadership', 'Teamwork', 'Time management', 'Adaptability', 'Critical thinking', 'Attention to detail',
  ],
};

const roleExamples = [
  {
    role: 'Software Engineer',
    skills: `Languages: Python, JavaScript, TypeScript, Java
Frameworks: React, Node.js, Express, Django
Cloud & Infrastructure: AWS (EC2, S3, Lambda), Docker, Kubernetes
Databases: PostgreSQL, MongoDB, Redis, DynamoDB
Tools: Git, JIRA, Postman, VS Code`,
  },
  {
    role: 'Data Analyst',
    skills: `Analytics: SQL (Advanced), Python (Intermediate), R (Intermediate)
Visualisation: Tableau, Power BI, Looker, Google Data Studio
Spreadsheets: Excel (Advanced), Google Sheets
Statistics: A/B Testing, Regression Analysis, Cohort Analysis
Tools: JIRA, Confluence, dbt, BigQuery`,
  },
  {
    role: 'Marketing Manager',
    skills: `Performance: Google Ads, Meta Ads, LinkedIn Ads, Programmatic
Analytics: Google Analytics 4, Adobe Analytics, CleverTap, MixPanel
CRM & Email: HubSpot, Salesforce, Mailchimp, Webengage
SEO: SEMrush, Ahrefs, Screaming Frog, Google Search Console
Design: Canva, Figma (basic), Adobe Creative Suite`,
  },
];

const faqs = [
  {
    q: 'Where should the skills section go on a resume?',
    a: 'For experienced professionals: after Work Experience. For freshers or career changers: after Education and before Projects. For technical roles (software engineer, data analyst): many recruiters prefer Skills immediately after the summary — it helps them assess technical fit before reading experience.',
  },
  {
    q: 'How many skills should I list on my resume?',
    a: '10–20 skills is the sweet spot for most roles. Too few (under 8) and you miss important ATS keywords. Too many (30+) reads as padding and makes the section hard to scan. Group by category and only list skills you can discuss confidently in an interview.',
  },
  {
    q: 'Should I include soft skills on my resume?',
    a: 'Only if they are specifically mentioned in the job description, and even then, only as keywords in your summary or experience bullets — not in the skills section. "Leadership," "Communication," and "Teamwork" in a skills list are invisible to recruiters and ignored by ATS. Show soft skills through specific bullets in your experience section instead.',
  },
  {
    q: 'Should I list skills I only know at a beginner level?',
    a: 'Only if you are truly comfortable being asked about them in an interview. If you list React at "Advanced" and cannot answer basic React interview questions, it backfires badly. It is better to list a skill at "Beginner" with a note (e.g., "AWS — learning") than to overstate and get caught.',
  },
  {
    q: 'How does ATS parse the skills section?',
    a: 'ATS scans the skills section for keywords that match the job description. It is largely exact-match: "Python" matches "Python" but may not match "Python 3" or "Python programming" unless the ATS is sophisticated. Use the exact terminology from the JD wherever possible. Grouped plain text formats (no tables, no graphics) are the most reliably parsed.',
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
    { '@type': 'ListItem', position: 3, name: 'Skills Section', item: 'https://cv-prime.in/resume-tips/skills-section' },
  ],
};

export default function SkillsSectionPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/resume-tips" className="hover:text-white">Resume Tips</Link><span>/</span>
            <span className="text-white">Skills Section</span>
          </nav>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Resume skills section — what to include and how to format it
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Your skills section is the fastest way to improve your ATS score — and the most commonly mis-formatted section on Indian resumes. Learn what to include, how to group skills, and how to format it so ATS parses it correctly.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong transition">
            Check my skills keywords free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Formats comparison */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">4 skills section formats — ranked by ATS compatibility</h2>
          <div className="mt-8 space-y-5">
            {formats.map((fmt) => (
              <div key={fmt.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-slate-950">{fmt.name}</h3>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${fmt.atsColor}`}>ATS: {fmt.atsScore}</span>
                </div>
                <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-50 p-4 text-sm text-slate-700 font-mono whitespace-pre-wrap">{fmt.example}</pre>
                <p className="mt-3 text-sm leading-6 text-slate-600"><span className="font-semibold">Why:</span> {fmt.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hard vs Soft */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Hard skills vs soft skills — what belongs in the skills section</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="font-display text-lg font-bold text-brand">Hard skills (include these)</p>
              <p className="mt-2 text-sm text-slate-500">Specific, measurable technical competencies — these are what ATS scans for</p>
              <div className="mt-5 divide-y divide-slate-100">
                {hardVsSoft.hard.map((item) => (
                  <div key={item.cat} className="flex gap-3 py-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <div>
                      <span className="text-sm font-semibold text-slate-900">{item.cat}: </span>
                      <span className="text-sm text-slate-600">{item.examples}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="font-display text-lg font-bold text-rose-600">Soft skills (exclude from this section)</p>
              <p className="mt-2 text-sm text-slate-500">Show these through your bullet points instead — they are meaningless as standalone keywords</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {hardVsSoft.soft.map((skill) => (
                  <span key={skill} className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-sm text-rose-700 line-through decoration-rose-400">{skill}</span>
                ))}
              </div>
              <div className="mt-5 rounded-xl bg-amber-50 border border-amber-200 p-4">
                <p className="text-sm leading-6 text-amber-800">
                  <span className="font-bold">Instead of listing "Leadership" as a skill:</span> write "Led a cross-functional team of 12 engineers to ship a payment product 3 weeks ahead of schedule." That shows leadership — it does not just claim it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role examples */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Skills section examples by role</h2>
          <div className="mt-8 space-y-5">
            {roleExamples.map((ex) => (
              <div key={ex.role} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-brand">{ex.role}</p>
                <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-50 p-4 text-sm text-slate-700 font-mono whitespace-pre-wrap">{ex.skills}</pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Skills section — FAQ</h2>
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
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/resume-tips', label: '← All resume tips' },
              { href: '/resume-tips/ats-keywords', label: 'ATS keywords guide' },
              { href: '/resume-tips/resume-summary', label: 'Resume summary guide' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/resume-examples', label: 'Resume examples by role' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand hover:text-brand transition">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">See which keywords are missing from your skills section — free</h2>
          <p className="mt-4 text-slate-300">CV Prime's ATS checker shows you exactly which skills the JD requires that your resume is missing.</p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Check my skills keywords free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <StickyCTA label="Check my keywords free" message="See which skills keywords ATS requires that your resume is missing" />
    </main>
  );
}
