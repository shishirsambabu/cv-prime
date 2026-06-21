import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Code2, BarChart3, Shield, Layers } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'IT Resume Builder — Free AI Resume Builder for IT Professionals in India 2026 | CV Prime',
  description:
    'Build an ATS-optimised IT resume with CV Prime\'s AI resume builder. Designed for software engineers, data analysts, DevOps, QA, and IT managers in India. Free to start. ATS scoring, AI tailoring, and 8 professional templates.',
  alternates: { canonical: 'https://cv-prime.in/it-resume-builder' },
  keywords: [
    'it resume builder',
    'it resume builder india',
    'software engineer resume builder',
    'tech resume builder india',
    'it professional resume',
    'it cv builder india',
    'resume builder for it jobs',
    'it resume template india',
    'software developer resume builder',
    'it sector resume india',
  ],
  openGraph: {
    title: 'IT Resume Builder — Free AI Resume Builder for IT Professionals in India 2026 | CV Prime',
    description:
      'Build an ATS-optimised IT resume with AI. Designed for software engineers, data analysts, DevOps, and IT managers in India. Free to start.',
    url: 'https://cv-prime.in/it-resume-builder',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'IT Resume Builder India — CV Prime' }],
  },
};

const itRoles = [
  { role: 'Software Engineer', desc: 'Backend, frontend, full-stack, and mobile development roles', slug: 'software-engineer', icon: Code2 },
  { role: 'Data Analyst', desc: 'SQL, Python, Tableau, Power BI analytics roles', slug: 'data-analyst', icon: BarChart3 },
  { role: 'DevOps Engineer', desc: 'CI/CD, Kubernetes, AWS, Azure infrastructure roles', slug: 'devops-engineer', icon: Layers },
  { role: 'QA Engineer', desc: 'Manual testing, automation, Selenium, ISTQB roles', slug: 'qa-engineer', icon: Shield },
  { role: 'Frontend Developer', desc: 'React, Angular, Vue, UI engineering roles', slug: 'frontend-developer', icon: Code2 },
  { role: 'Backend Developer', desc: 'Java, Python, Node.js, API development roles', slug: 'backend-developer', icon: Code2 },
  { role: 'Data Scientist', desc: 'ML, AI, Python, TensorFlow, model deployment roles', slug: 'data-scientist', icon: BarChart3 },
  { role: 'Python Developer', desc: 'Django, FastAPI, scripting, data engineering roles', slug: 'python-developer', icon: Code2 },
  { role: 'Java Developer', desc: 'Spring Boot, enterprise Java, microservices roles', slug: 'java-developer', icon: Code2 },
];

const itAtsKeywords = {
  'Languages & Frameworks': ['Python', 'Java', 'JavaScript', 'TypeScript', 'Go', 'React', 'Node.js', 'Spring Boot', 'Django', 'FastAPI'],
  'Cloud & Infrastructure': ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'CI/CD'],
  'Databases': ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB', 'Cassandra'],
  'AI & Data': ['Machine Learning', 'TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas', 'Spark', 'SQL', 'Tableau', 'Power BI'],
  'Methodologies': ['Agile', 'Scrum', 'System Design', 'Microservices', 'REST API', 'GraphQL', 'TDD', 'Code Review'],
};

const itResumeRules = [
  {
    rule: 'Lead your skills section with the technology stack, not soft skills',
    detail: 'IT recruiters scan the skills section first. Group skills by category: Languages, Frameworks, Cloud Platforms, Databases, Tools. A recruiter reviewing 200 software engineer resumes in 30 minutes is looking for pattern recognition — "Python / Django / AWS / PostgreSQL" reads instantly; "Strong communication, leadership, Python" does not.',
  },
  {
    rule: 'Write every experience bullet in the format: Action + Technology + Outcome',
    detail: '"Developed a microservices-based payment gateway using Spring Boot and Kafka that processed ₹200Cr in daily transactions with 99.99% uptime" tells a technical recruiter everything they need: tech stack, scale, outcome, and reliability. "Worked on payment systems" tells them nothing.',
  },
  {
    rule: 'Include GitHub, LeetCode, and portfolio links where relevant',
    detail: 'For software engineers in India, a GitHub profile with meaningful contributions is now a standard expectation. For data scientists, a Kaggle ranking or public notebook portfolio is highly valued. For DevOps and infrastructure engineers, a public infrastructure-as-code repository demonstrates real-world skill. Add these in the contact section alongside your email and LinkedIn.',
  },
  {
    rule: 'Mirror the exact technology terms from the JD — not paraphrased versions',
    detail: 'ATS systems match exact strings. If the JD says "Node.js", do not write "NodeJS" or "Node JS". If the JD says "React.js", do not write "ReactJS". Paraphrasing costs you ATS keyword match points. CV Prime\'s AI automatically mirrors the exact terminology from the job description you paste.',
  },
  {
    rule: 'Quantify scale — number of users, API calls/sec, team size, revenue, uptime',
    detail: 'IT resumes without scale indicators are weak. Recruiters at Bangalore product companies (Flipkart, Swiggy, CRED, Razorpay) specifically look for scale markers: "1M daily active users", "100M API calls/day", "₹50Cr revenue impact", "99.9% SLA", "10-engineer team". If your system handles more than 10,000 users or processes real money, say it explicitly.',
  },
  {
    rule: 'Keep technical details to the skills section; keep outcomes to the experience section',
    detail: 'A common IT resume mistake: putting technical jargon in the experience bullets ("Used React hooks and Redux for state management") without saying what it achieved. Experience bullets should reference technologies naturally but focus on outcome: "Migrated state management from Redux to Zustand, reducing bundle size by 28% and improving Time to Interactive by 400ms."',
  },
];

const companyTypes = [
  { type: 'Product Companies (FAANG-adjacent)', examples: 'Flipkart, Swiggy, PhonePe, CRED, Razorpay, Freshworks', focus: 'Scale, impact, product sense, system design, metrics', template: 'Modern or Technical' },
  { type: 'MNC Tech Campuses', examples: 'Amazon, Google, Microsoft, Adobe, Oracle India', focus: 'Distributed systems, large-scale engineering, team collaboration, coding fundamentals', template: 'Technical or Minimal' },
  { type: 'IT Services Companies', examples: 'Infosys, TCS, Wipro, HCL, Cognizant, Accenture', focus: 'Client domain expertise, project delivery, certifications, billable hours', template: 'Classic or Modern' },
  { type: 'Startups (Series A–C)', examples: 'Any VC-backed startup with 10–500 employees', focus: 'Ownership, speed, full-stack contributions, startup experience', template: 'Modern or Creative' },
  { type: 'GCC / Captive Centres', examples: 'HSBC HDEC, Barclays Tech, Deutsche Bank, Goldman Sachs Tech', focus: 'Domain (BFSI, retail, etc.), compliance awareness, delivery track record', template: 'Classic or Technical' },
];

const faqs = [
  {
    q: 'What is the best resume format for IT jobs in India?',
    a: 'Single-column reverse-chronological with a dedicated technical skills section near the top. For IT services companies: add a project summary section. For product companies: keep it to 1 page and lead with outcomes, not responsibilities. Use a clean, ATS-safe font (Calibri, Arial, or Garamond) at 10–12pt. Avoid multi-column layouts, tables, text boxes, and graphics — all of these break ATS parsing. CV Prime\'s Technical template is specifically designed for Indian IT roles and is ATS-safe by default.',
  },
  {
    q: 'How many pages should an IT resume be in India?',
    a: 'Fresher to 3 years experience: 1 page. 3–8 years: 1–2 pages. 8+ years: 2 pages maximum. For IT services professionals with 10+ years and extensive project history, a concise 2-page resume with a project summary section is acceptable. Going beyond 2 pages in IT is rarely justified — include only the most relevant roles and projects for the specific JD you are applying to.',
  },
  {
    q: 'Should I include all my programming languages on my IT resume?',
    a: 'No. Include only languages you are strong in and comfortable being interviewed on. Listing 20 languages signals you are a generalist with no depth. Choose 3–5 primary languages (Python, Java, JavaScript, Go, etc.) and 3–5 secondary languages ("Familiar with" or "Exposure to"). If you cannot answer an intermediate-level interview question about a language you listed, remove it from your resume.',
  },
  {
    q: 'How do I write a fresher IT resume with no work experience?',
    a: 'Structure your fresher IT resume as: Professional Summary → Technical Skills → Projects (2–4 substantial projects with GitHub links) → Education (CGPA if above 7.5) → Certifications → Activities. For each project, write: what problem it solved, what technologies you used, and what the measurable outcome was ("served 5,000 concurrent users", "reduced processing time by 70%", etc.). If you have competitive programming rankings (LeetCode rating, Codeforces, HackerRank badges), include them.',
  },
  {
    q: 'What certifications are most valuable on an IT resume in India?',
    a: 'In 2026, the most valued IT certifications in India by category: Cloud — AWS Certified Solutions Architect, Google Cloud Professional Data Engineer, Azure Administrator Associate. DevOps — Certified Kubernetes Administrator (CKA), Docker Certified Associate, HashiCorp Terraform Associate. Data — Google Data Analytics Professional, Databricks Associate Developer. Agile/PM — PMP, Scrum Master (PSM I), SAFe. Any certification from AWS, Google Cloud, or Microsoft Azure is recognised and respected by Indian IT recruiters. NASSCOM FUTURESKILLS badges are increasingly valued by IT services companies.',
  },
  {
    q: 'Does CV Prime support project-based IT resumes for IT services companies?',
    a: 'Yes. CV Prime\'s AI resume builder supports a Projects section that can be included above or below Work Experience. For IT services professionals applying to companies like Infosys, TCS, or HCL, you can add multiple project cards with technology stacks, client domain, team size, and outcome metrics. The AI helps you reframe project descriptions to match the terminology and keywords used in specific JDs.',
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
    { '@type': 'ListItem', position: 3, name: 'IT Resume Builder', item: 'https://cv-prime.in/it-resume-builder' },
  ],
};

export default function ITResumeBuilderPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/resume-builder" className="hover:text-white">Resume Builder</Link>
            <span>/</span>
            <span className="text-slate-300">IT Resume Builder</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand mb-5">
            <Code2 className="h-4 w-4" />
            Purpose-built for Indian IT professionals
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            IT resume builder for India
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            CV Prime&apos;s AI resume builder is engineered for Indian IT professionals — software engineers, data analysts, DevOps, QA engineers, and tech managers. Paste any JD and get an ATS-optimised resume in minutes.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Build my IT resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              View IT resume templates
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free plan · 3 PDF exports · No credit card · ATS scoring included</p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '5M+', label: 'IT professionals employed in India' },
            { stat: '78%', label: 'of IT JDs in India use ATS pre-screening' },
            { stat: '40%', label: 'average ATS score improvement with CV Prime' },
            { stat: '8', label: 'IT-optimised resume templates to choose from' },
          ].map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-brand">{item.stat}</p>
              <p className="mt-1 max-w-[160px] text-xs leading-5 text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IT roles */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Build a resume for your IT role</h2>
          <p className="mt-3 text-slate-500">CV Prime has role-specific templates and AI prompts for every IT function. Click your role to get started.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {itRoles.map((r) => (
              <Link
                key={r.slug}
                href={`/resume-builder/${r.slug}`}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-brand hover:shadow-md"
              >
                <r.icon className="h-6 w-6 text-brand" />
                <p className="mt-3 font-display text-base font-bold text-slate-950 group-hover:text-brand">{r.role}</p>
                <p className="mt-1 text-sm text-slate-500">{r.desc}</p>
                <p className="mt-3 flex items-center gap-1 text-xs font-semibold text-brand">
                  Build this resume <ArrowRight className="h-3 w-3" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ATS keywords */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">ATS keywords Indian IT recruiters screen for</h2>
          <p className="mt-3 text-slate-500">CV Prime checks your resume against 500+ IT-specific keywords from real Indian JDs. Here are the most commonly screened.</p>
          <div className="mt-8 space-y-5">
            {Object.entries(itAtsKeywords).map(([category, keywords]) => (
              <div key={category}>
                <p className="mb-2 text-sm font-bold text-slate-700">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {keywords.map((kw) => (
                    <span key={kw} className="rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-sm font-semibold text-brand">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume writing rules */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">6 rules for a strong IT resume in India</h2>
          <p className="mt-3 text-slate-500">Follow these rules and your IT resume will outperform 80% of applications for the same role.</p>
          <div className="mt-8 space-y-5">
            {itResumeRules.map((r, i) => (
              <div key={r.rule} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 font-display text-sm font-bold text-brand">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold">{r.rule}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{r.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company types */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Tailor your IT resume by company type</h2>
          <p className="mt-3 text-slate-500">Different IT employers in India want different things. CV Prime&apos;s AI adjusts your resume framing based on the JD you paste.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {companyTypes.map((c) => (
              <div key={c.type} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-display text-base font-bold text-slate-950">{c.type}</p>
                <p className="mt-1 text-xs text-slate-500">{c.examples}</p>
                <div className="mt-3 space-y-2">
                  <div className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                    <p className="text-xs text-slate-700"><span className="font-semibold">Emphasise:</span> {c.focus}</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                    <p className="text-xs text-slate-700"><span className="font-semibold">Recommended template:</span> {c.template}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">IT resume builder India — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-display text-base font-bold">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">Related resources</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/resume-builder', label: 'AI resume builder' },
              { href: '/resume-builder/software-engineer', label: 'Software engineer resume' },
              { href: '/resume-builder/data-scientist', label: 'Data scientist resume' },
              { href: '/resume-builder/devops-engineer', label: 'DevOps engineer resume' },
              { href: '/resume-builder/python-developer', label: 'Python developer resume' },
              { href: '/resume-builder/java-developer', label: 'Java developer resume' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/ats-guide/software-engineer', label: 'ATS guide for software engineers' },
              { href: '/resume-builder-bangalore', label: 'Resume builder Bangalore' },
              { href: '/resume-builder-hyderabad', label: 'Resume builder Hyderabad' },
              { href: '/resume-builder-pune', label: 'Resume builder Pune' },
              { href: '/salary/software-engineer', label: 'Software engineer salary guide' },
              { href: '/fresher-resume', label: 'Fresher IT resume guide' },
              { href: '/cv-examples/software-engineer', label: 'Software engineer CV examples' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">Build your IT resume in minutes</h2>
          <p className="mt-4 text-slate-300">
            CV Prime&apos;s AI knows your tech stack, knows Indian IT JDs, and builds ATS-optimised resumes for software engineers, data professionals, and IT managers. Free to start.
          </p>
          <Link
            href="/signup?next=/ai-cv"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
          >
            Build my IT resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build my IT resume free" message="AI resume builder for software engineers & IT professionals in India" />
    </main>
  );
}
