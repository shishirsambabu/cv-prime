import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Code2, Sparkles } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Software Engineer Resume — Free AI Resume Builder for SWE Jobs India 2026 | CV Prime',
  description:
    'Build a software engineer resume that beats ATS and gets interview calls at top tech companies. AI tailors your resume for SWE roles at Amazon, Google, Flipkart, and Indian startups — free to start.',
  alternates: { canonical: 'https://cv-prime.in/software-engineer-resume' },
  keywords: [
    'software engineer resume',
    'software developer resume',
    'swe resume india',
    'software engineer resume india 2026',
    'software engineer resume format',
    'software developer resume india',
    'best software engineer resume',
    'ats software engineer resume',
    'software engineer resume template',
    'tech resume india',
    'backend engineer resume',
    'full stack developer resume',
  ],
  openGraph: {
    title: 'Software Engineer Resume — AI Resume Builder for SWE Jobs India 2026 | CV Prime',
    description:
      'Build a software engineer resume that beats ATS. AI tailors your SWE resume for Amazon, Google, Flipkart, and Indian startups — free to start.',
    url: 'https://cv-prime.in/software-engineer-resume',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Software Engineer Resume — CV Prime' }],
  },
};

const resumeSections = [
  {
    section: 'Contact information',
    include: 'Full name, phone (+91), professional email, LinkedIn, GitHub, city+state',
    avoid: 'Full address, photo, date of birth, marital status',
  },
  {
    section: 'Professional summary (2–3 lines)',
    include: 'Years of experience, core stack, strongest technical achievement, and target role',
    avoid: 'Objectives, vague statements, first person ("I am a passionate developer")',
  },
  {
    section: 'Technical skills',
    include: 'Languages, frameworks, databases, cloud, DevOps tools — grouped by category',
    avoid: 'Soft skills in the skills section, listing skills without proficiency context',
  },
  {
    section: 'Work experience (reverse-chronological)',
    include: 'Company, role title, dates, location; 3–5 outcome-led bullets per role',
    avoid: 'Duty descriptions ("responsible for backend"), no-metric bullets ("improved performance")',
  },
  {
    section: 'Projects (critical for <3 years exp)',
    include: 'Project name, tech stack used, what it does, scale/metrics, GitHub link',
    avoid: 'Tutorial/clone projects without customisation, projects with no tech depth',
  },
  {
    section: 'Education',
    include: 'Degree, institution, year, CGPA (if 7.5+), relevant coursework',
    avoid: 'High school details if you have a degree, CGPA below 6.0',
  },
];

const bulletExamples = [
  {
    weak: 'Responsible for backend development of the payment service',
    strong: 'Built the payment processing microservice handling 50K transactions/day using Node.js + PostgreSQL, reducing checkout latency by 340ms (p95)',
  },
  {
    weak: 'Worked on improving application performance',
    strong: 'Optimised API response times by 62% by introducing Redis caching and query indexing — reduced infrastructure cost by ₹18L/year',
  },
  {
    weak: 'Developed new features for the mobile app',
    strong: 'Shipped 12 React Native features over 6 sprints (4-week cycles), increasing DAU from 82K to 130K (+59%) and App Store rating from 3.8 to 4.5',
  },
  {
    weak: 'Helped migrate services to AWS',
    strong: 'Led migration of 7 monolithic services to AWS ECS (Fargate), achieving 99.97% uptime and cutting deployment time from 45 minutes to 6 minutes',
  },
];

const keywordsByRole = [
  {
    role: 'Backend Engineer',
    keywords: ['REST APIs', 'microservices', 'system design', 'SQL/NoSQL', 'Node.js/Java/Python', 'Docker', 'CI/CD', 'Redis', 'message queues (Kafka/RabbitMQ)'],
  },
  {
    role: 'Frontend Engineer',
    keywords: ['React/Vue/Angular', 'TypeScript', 'CSS/Tailwind', 'Next.js', 'state management (Redux/Zustand)', 'performance optimisation', 'web vitals', 'accessibility'],
  },
  {
    role: 'Full Stack Engineer',
    keywords: ['MERN/MEAN stack', 'REST/GraphQL APIs', 'AWS/GCP', 'PostgreSQL/MongoDB', 'Docker', 'CI/CD pipeline', 'authentication (JWT/OAuth)', 'system design'],
  },
  {
    role: 'DevOps/Platform Engineer',
    keywords: ['Kubernetes', 'Docker', 'Terraform', 'AWS/Azure/GCP', 'CI/CD (Jenkins/GitHub Actions)', 'monitoring (Prometheus/Grafana)', 'infrastructure as code', 'SRE practices'],
  },
];

const atsChecklist = [
  { item: 'No tables or multi-column layout', why: 'ATS parsers read left-to-right as a single stream — columns get merged into gibberish' },
  { item: 'No text boxes, headers/footers, or graphics', why: 'Content in text boxes is invisible to most ATS systems' },
  { item: 'Exact keyword matching from the JD', why: 'ATS matches keywords literally — "JavaScript" and "JS" are different strings' },
  { item: 'Standard section headings', why: '"Work Experience" not "Professional Journey"; "Skills" not "What I Know"' },
  { item: 'Text-based PDF (not image PDF)', why: 'Canva and scanned resumes are image PDFs — ATS cannot parse image text' },
  { item: 'GitHub URL in contact section', why: 'Tech recruiters actively check GitHub — it separates you from applicants with identical job titles' },
];

const faqs = [
  {
    q: 'What is the best resume format for a software engineer in India?',
    a: 'The best software engineer resume format in India is reverse-chronological with a single column, standard fonts (Arial or Calibri 10–11pt), and a clear hierarchy: Contact → Summary → Skills → Work Experience → Projects → Education. One page for 0–4 years of experience; two pages for 5+ years. Avoid multi-column layouts, infographics, and photos — all major Indian IT companies (TCS, Infosys, Wipro) and product companies (Amazon, Google India, Flipkart) use ATS that cannot parse complex layouts.',
  },
  {
    q: 'What skills should a software engineer include on their resume?',
    a: 'Group technical skills by category: Programming Languages (Python, Java, JavaScript, Go, C++); Web Frameworks (React, Node.js, Spring Boot, Django); Databases (PostgreSQL, MySQL, MongoDB, Redis); Cloud & DevOps (AWS, GCP, Docker, Kubernetes, Terraform, Jenkins); Tools (Git, Jira, Postman, IntelliJ). Include only skills you can speak confidently about in an interview. Mirror the exact terminology from the job description — if the JD says "Node.js", do not write "NodeJS".',
  },
  {
    q: 'How do I write software engineer resume bullets without metrics?',
    a: 'If you lack exact metrics, use relative improvement language: "reduced latency by X%" rather than an absolute number. Alternatively, describe scale: "service handling 10K concurrent users", "database with 50M+ records", "codebase with 200K+ lines". For projects, describe the problem solved and the technical approach. Quantify what you can — even "reduced bug resolution time from 3 days to same-day" is a metric.',
  },
  {
    q: 'Should a software engineering fresher include projects on their resume?',
    a: 'Yes — projects are the most important section of a fresher software engineer resume. Include 2–3 substantial personal or academic projects with: the problem solved, tech stack used, your specific role/contribution, and ideally scale metrics or GitHub stars. Companies like FAANG, Atlassian India, and funded startups specifically screen freshers on project quality. Avoid basic tutorial clones (to-do app, weather app) unless significantly customised.',
  },
  {
    q: 'How long should a software engineer resume be?',
    a: '0–4 years experience: one page, strictly. 5–8 years: one or two pages. 8+ years: two pages maximum. For senior roles at FAANG companies (Amazon, Google, Microsoft), one page is still strongly preferred regardless of experience — these companies receive 500–1,000 applications per role and do fast initial scans. Cutting to one page forces prioritisation of your strongest achievements.',
  },
  {
    q: 'How do I make my software engineer resume stand out?',
    a: 'The strongest software engineer resumes share three traits: (1) quantified impact in every bullet ("improved X by Y% by doing Z"), (2) exact keyword matching to the job description, and (3) a GitHub profile with active, non-tutorial projects. Use CV Prime to check your ATS score before applying — most rejections happen because the resume fails keyword matching before a human sees it.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Resume Builder', item: 'https://cv-prime.in/resume-builder' },
    { '@type': 'ListItem', position: 3, name: 'Software Engineer Resume', item: 'https://cv-prime.in/software-engineer-resume' },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Software Engineer Resume — Complete Guide India 2026',
  description: 'How to write a software engineer resume that beats ATS and gets interviews at top tech companies in India.',
  url: 'https://cv-prime.in/software-engineer-resume',
  author: { '@type': 'Organization', name: 'CV Prime' },
  publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
  datePublished: '2026-06-01',
  dateModified: new Date().toISOString().split('T')[0],
};

export default function SoftwareEngineerResumePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
          <nav className="mb-5 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/resume-builder" className="hover:text-white">Resume Builder</Link>
            <span>/</span>
            <span className="text-slate-300">Software Engineer Resume</span>
          </nav>
          <div className="flex items-center gap-2 text-sm font-bold text-brand mb-4">
            <Code2 className="h-4 w-4" />
            <span>Software Engineer · SWE · Software Developer</span>
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Software engineer resume<br />that beats ATS in India
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build an ATS-optimised software engineer resume in minutes. Paste your target JD — AI rewrites your bullets with the right keywords, tech stack language, and outcome metrics for Amazon, Google, Flipkart, and top Indian startups.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Build my SWE resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/cv-examples/software-engineer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              View SWE resume example
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free plan · ATS scoring · AI bullet rewriting · PDF export · No credit card</p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/10 bg-white/[0.03] px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '75%', label: 'of SWE resumes rejected by ATS before a human reads them' },
            { stat: '500+', label: 'applications per software engineer role at top companies' },
            { stat: '6 sec', label: 'time recruiters spend on initial SWE resume scan' },
            { stat: '40%', label: 'improvement in interview rate after ATS keyword optimisation' },
          ].map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-brand">{item.stat}</p>
              <p className="mt-1 max-w-[160px] text-xs leading-5 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resume sections guide */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Software engineer resume sections — what to include</h2>
          <p className="mt-3 text-slate-400">In order, for ATS compliance and recruiter readability.</p>
          <div className="mt-8 space-y-4">
            {resumeSections.map((s, i) => (
              <div key={s.section} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-start gap-4">
                  <span className="font-display text-2xl font-bold text-brand/30">0{i + 1}</span>
                  <div className="flex-1">
                    <p className="font-display text-base font-bold">{s.section}</p>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                        <p className="text-sm leading-6 text-slate-300">{s.include}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                        <p className="text-sm leading-6 text-slate-400">{s.avoid}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bullet examples */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Software engineer resume bullets — before and after</h2>
          <p className="mt-3 text-slate-400">AI rewrites your vague bullets into outcome-led proof statements that get past ATS and impress recruiters.</p>
          <div className="mt-8 space-y-5">
            {bulletExamples.map((ex) => (
              <div key={ex.weak} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                <div className="flex items-start gap-3 border-b border-white/10 bg-red-50/50 p-4">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-red-500">Before (weak)</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{ex.weak}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-green-50/50 p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-green-600">After (CV Prime AI rewrite)</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{ex.strong}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong"
            >
              <Sparkles className="h-4 w-4" />
              Rewrite my bullets with AI
            </Link>
          </div>
        </div>
      </section>

      {/* Keywords by role */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">ATS keywords by software engineering role</h2>
          <p className="mt-3 text-slate-400">Different SWE specialisations need different keyword sets. CV Prime detects your role and checks automatically.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {keywordsByRole.map((r) => (
              <div key={r.role} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <p className="font-display text-base font-bold text-brand">{r.role}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {r.keywords.map((kw) => (
                    <span key={kw} className="rounded-full bg-white/[0.05] px-2.5 py-0.5 text-xs font-medium text-slate-300">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATS checklist */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Software engineer ATS checklist — before you apply</h2>
          <p className="mt-3 text-slate-400">Run this checklist before every application. CV Prime checks all of these automatically.</p>
          <div className="mt-8 space-y-3">
            {atsChecklist.map((item) => (
              <div key={item.item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <p className="font-semibold text-white">{item.item}</p>
                  <p className="mt-0.5 text-xs leading-5 text-slate-400">{item.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Software engineer resume — frequently asked questions</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 p-6">
                <h3 className="font-display text-base font-bold">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-white/10 px-5 py-12 text-center">
        <p className="text-sm font-semibold text-slate-400">Related resources</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {[
            { href: '/cv-examples/software-engineer', label: 'Software Engineer CV example' },
            { href: '/resume-builder/software-engineer', label: 'SWE resume builder' },
            { href: '/ats-checker', label: 'Free ATS checker' },
            { href: '/resume-tips/ats-keywords', label: 'ATS keyword guide' },
            { href: '/resume-tips/resume-bullet-points', label: 'Resume bullet points guide' },
            { href: '/blog/engineering-resume-india-2026', label: 'Engineering resume guide' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:border-brand hover:text-brand">
              {link.label} <ArrowRight className="h-3 w-3" />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Build your software engineer resume free
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Paste your target JD and AI rewrites your bullets, scores your ATS match, and exports a recruiter-ready PDF in minutes. Free to start — no credit card required.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong">
              Build my SWE resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/cv-examples/software-engineer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-bold text-white hover:border-white/40">
              View SWE examples
            </Link>
          </div>
        </div>
      </section>

      <StickyCTA />
    </main>
  );
}
