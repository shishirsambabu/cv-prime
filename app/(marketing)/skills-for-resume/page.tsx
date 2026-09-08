import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';
import { FAQItem } from '@/components/marketing/FAQItem';

export const metadata: Metadata = {
  title: 'Skills for Resume 2026 — Complete List by Role & Industry | CV Prime',
  description:
    'The complete list of skills to put on your resume in 2026. Technical skills, soft skills, and ATS keywords by role — software engineer, data analyst, marketing, HR, finance, and more. Free guide for India.',
  keywords: [
    'skills for resume',
    'skills to put on resume',
    'resume skills list',
    'technical skills for resume',
    'soft skills for resume',
    'skills section resume',
    'best skills for resume india',
    'resume skills 2026',
    'what skills to add to resume',
    'ATS skills resume',
    'professional skills list',
    'skills for cv india',
    'hard skills resume',
    'transferable skills resume',
  ],
  alternates: { canonical: 'https://cv-prime.in/skills-for-resume' },
  openGraph: {
    title: 'Skills for Resume 2026 — Complete List by Role & Industry | CV Prime',
    description:
      'The complete list of skills to put on your resume in 2026 — by role, by industry, and by ATS keyword priority. Free guide.',
    url: 'https://cv-prime.in/skills-for-resume',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Skills for Resume 2026 — CV Prime' }],
  },
};

const faqItems = [
  {
    q: 'What skills should I put on my resume?',
    a: 'Put skills that are: (1) Relevant to the specific job description you are applying for. (2) Genuinely proficient — not skills you have barely touched. (3) Named using the exact terms in the JD. Structure them in a dedicated Skills section under these categories: Technical Skills (tools, languages, software), Domain Skills (sector-specific knowledge), and Soft Skills (communication, leadership — use sparingly). For most professional roles in India, 10–18 skills is the right range.',
  },
  {
    q: 'What is the difference between hard skills and soft skills?',
    a: "Hard skills (also called technical skills) are specific, measurable abilities: Python, SQL, Excel, Adobe Photoshop, Tally, Google Analytics, Salesforce. They can be taught, tested, and verified. Soft skills are interpersonal and behavioural: communication, leadership, problem-solving, adaptability. ATS systems screen primarily for hard skills — the exact keywords from the job description. Soft skills are evaluated by humans during the interview. Include both on your resume, but prioritise hard skills in terms of specificity and keyword matching.",
  },
  {
    q: 'How many skills should I list on my resume?',
    a: '10–18 skills is the optimal range for most professional roles. Too few and you miss ATS keywords. Too many (30+ skills) signals that you are padding and undermines credibility. For a dedicated Skills section, group skills by category rather than listing them alphabetically — this reads better and helps ATS categorise your expertise. For freshers with limited experience, 8–12 skills is appropriate.',
  },
  {
    q: 'Should I include soft skills on my resume?',
    a: 'Yes — but briefly and specifically. Instead of listing "good communication skills" (meaningless), demonstrate them in your experience bullets: "Presented quarterly results to C-suite stakeholders" or "Managed client communication across 3 enterprise accounts." Include 2–4 soft skills in your Skills section but make them role-relevant: a sales manager should list "client relationship management"; a data scientist should list "presenting findings to non-technical audiences." Avoid overused, generic soft skills: "hardworking", "team player", "passionate" — every recruiter ignores these.',
  },
  {
    q: 'Do skills need to match the job description exactly?',
    a: 'Yes, for ATS purposes. If the JD says "JavaScript" and you write "JS", the ATS may not match them. If the JD says "stakeholder management" and you write "managing relationships with stakeholders", it may miss. Mirror the JD\'s exact terminology where it is truthful to do so. CV Prime\'s free ATS keyword matcher compares your skills section against the JD and shows exactly which keywords you are missing — it takes 60 seconds.',
  },
  {
    q: 'How do I list technical skills on my resume?',
    a: 'List technical skills grouped by category in a clearly labelled "Technical Skills" or "Skills" section. Format example: Languages: Python, Java, JavaScript | Frameworks: React, Django, Spring Boot | Databases: MySQL, PostgreSQL, MongoDB | Cloud: AWS, GCP, Docker | Tools: Git, JIRA, Figma. Group by the category names that appear in your target JDs. Avoid star ratings, skill bars, or visual skill meters — ATS systems cannot parse these, and humans find them unconvincing.',
  },
  {
    q: 'What are the most in-demand skills for tech roles in India in 2026?',
    a: 'For software engineering: Python, Java, JavaScript/TypeScript, React, Node.js, AWS, Docker, Kubernetes, SQL, System Design, REST APIs, Microservices. For data roles: Python, SQL, Power BI / Tableau, Excel, Machine Learning, TensorFlow / PyTorch, Spark, ETL, Statistics. For DevOps: Docker, Kubernetes, AWS/GCP/Azure, CI/CD, Terraform, Linux, Bash, Jenkins. For product management: Product analytics, SQL, A/B testing, Figma, Agile/Scrum, OKRs, Customer research.',
  },
  {
    q: 'Should I include Microsoft Office on my resume?',
    a: 'Only if the job description specifically lists it as a requirement. For most tech, product, and consulting roles, Microsoft Office (Word, PowerPoint) is assumed — listing it wastes space. For roles where it is a genuine skill requirement — financial analyst using Excel for modelling, HR using Outlook, office admin — include it with specificity: "Advanced Excel (VLOOKUP, Pivot Tables, Power Query)" rather than just "MS Office."',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Resume Tips', item: 'https://cv-prime.in/resume-tips' },
    { '@type': 'ListItem', position: 3, name: 'Skills for Resume', item: 'https://cv-prime.in/skills-for-resume' },
  ],
};

const skillsByRole: Array<{
  role: string;
  technical: string[];
  soft: string[];
  domain: string[];
}> = [
  {
    role: 'Software Engineer',
    technical: ['Python', 'Java', 'JavaScript', 'React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'SQL', 'Git'],
    soft: ['Problem-solving', 'Code review', 'Technical documentation', 'Cross-functional collaboration'],
    domain: ['System Design', 'REST APIs', 'Microservices', 'Agile / Scrum', 'CI/CD'],
  },
  {
    role: 'Data Analyst',
    technical: ['SQL', 'Python', 'Power BI', 'Tableau', 'Excel (Advanced)', 'Google Analytics', 'R', 'Looker'],
    soft: ['Data storytelling', 'Stakeholder presentations', 'Attention to detail', 'Structured problem-solving'],
    domain: ['A/B Testing', 'Statistical Analysis', 'ETL pipelines', 'Business Intelligence', 'KPI Reporting'],
  },
  {
    role: 'Product Manager',
    technical: ['SQL', 'Figma', 'JIRA', 'Amplitude', 'Mixpanel', 'Looker', 'Google Analytics'],
    soft: ['Stakeholder management', 'Roadmap prioritisation', 'Customer interviews', 'Executive communication'],
    domain: ['Product Analytics', 'OKRs', 'A/B Testing', 'GTM Strategy', 'Agile', 'User Research', 'Pricing'],
  },
  {
    role: 'Marketing Manager',
    technical: ['Google Ads', 'Meta Ads', 'HubSpot', 'Salesforce', 'Mailchimp', 'Google Analytics', 'SEO'],
    soft: ['Creative direction', 'Brand storytelling', 'Campaign management', 'Cross-team coordination'],
    domain: ['Performance Marketing', 'CRO', 'CAC / LTV', 'Content Strategy', 'Email Marketing', 'Influencer Marketing'],
  },
  {
    role: 'HR Manager',
    technical: ['Workday', 'Darwinbox', 'SAP HR', 'GreytHR', 'Excel', 'LinkedIn Recruiter', 'Zoho People'],
    soft: ['Conflict resolution', 'Employee relations', 'Active listening', 'Organisational development'],
    domain: ['Talent Acquisition', 'HRBP', 'Compensation & Benefits', 'Performance Management', 'POSH compliance'],
  },
  {
    role: 'Finance Analyst',
    technical: ['Advanced Excel', 'SAP FICO', 'Tally ERP', 'Power BI', 'Bloomberg Terminal', 'Python (Finance)'],
    soft: ['Analytical thinking', 'Attention to detail', 'Executive reporting', 'Cross-functional finance partnering'],
    domain: ['Financial Modelling', 'DCF Valuation', 'IFRS / Ind AS', 'Budgeting & Forecasting', 'CFA', 'Credit Risk'],
  },
];

const universalSkills = {
  topTechnical: [
    'Microsoft Excel (Advanced)',
    'Data Analysis',
    'Project Management',
    'Presentation Skills',
    'CRM Tools',
    'ERP Systems',
    'Digital Literacy',
    'Research Skills',
  ],
  avoidGeneric: [
    'Hardworking',
    'Team player',
    'Good communication skills',
    'Quick learner',
    'Detail-oriented',
    'Passionate',
    'Self-motivated',
    'Responsible',
  ],
};

export default function SkillsForResumePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <Sparkles className="h-4 w-4" />
            Resume skills guide 2026
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Skills for your resume —<br className="hidden sm:block" /> the complete 2026 list
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            The right skills in the right format, by role. ATS-keyword-matched lists for software engineering, data
            analysis, marketing, HR, finance, product management, and more.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/dashboard"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Check my resume skills with AI
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/tools/ats-keyword-matcher"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Free ATS keyword matcher
            </Link>
          </div>
        </div>
      </section>

      {/* Key stats */}
      <section className="border-b border-slate-200 bg-slate-50 px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '55%', label: 'of ATS rejections are caused by missing keywords — not lack of qualifications' },
            { stat: '10–18', label: 'skills is the optimal number for most professional resumes' },
            { stat: '63%', label: 'of hiring managers say keyword relevance is the top shortlisting factor' },
            { stat: '40%', label: 'average ATS score improvement after adding missing JD keywords' },
          ].map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-brand">{item.stat}</p>
              <p className="mt-1 max-w-[160px] text-xs leading-5 text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to structure your skills section */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">How to structure your Skills section</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The Skills section is one of the most keyword-scanned areas of your resume. ATS systems weight skills found
            in a dedicated section more heavily than skills buried in experience bullets.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <h3 className="font-display text-lg font-bold text-green-900">Do this</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-green-800">
                {[
                  'Group skills by category (Technical, Domain, Soft)',
                  'Mirror the exact terms from the job description',
                  'Include both abbreviated and full form (JS and JavaScript)',
                  'List 10–18 skills — not more',
                  'Put your most relevant skills first in each category',
                  'Use a clean, plain-text format (no star ratings or bars)',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-0.5 shrink-0 text-green-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-rose-600" />
                <h3 className="font-display text-lg font-bold text-rose-900">Avoid this</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-rose-800">
                {[
                  'Listing every skill you have ever heard of (30+ skills)',
                  'Skill bars, star ratings, or visual meters (ATS cannot parse)',
                  'Generic soft skills: "hardworking", "team player", "passionate"',
                  'Skills you cannot back up in an interview',
                  'Using abbreviations without the full form (JS vs JavaScript)',
                  'Putting the Skills section at the end of a long resume',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-0.5 shrink-0 text-rose-500">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="font-display text-lg font-bold text-blue-900">Example Skills section (Software Engineer)</h3>
            <div className="mt-4 font-mono text-sm text-blue-800">
              <p>
                <strong>Technical Skills</strong>
              </p>
              <p className="mt-1">
                Languages: Python, Java, JavaScript (ES6+), TypeScript, SQL
              </p>
              <p className="mt-1">
                Frameworks: React, Node.js, Spring Boot, Django, FastAPI
              </p>
              <p className="mt-1">
                Cloud & DevOps: AWS (EC2, S3, Lambda), Docker, Kubernetes, CI/CD
              </p>
              <p className="mt-1">
                Databases: PostgreSQL, MySQL, MongoDB, Redis
              </p>
              <p className="mt-1">
                Tools: Git, JIRA, Figma, Postman, Datadog
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills by role */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Skills by role — India 2026</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            ATS-optimised skills for the most common professional roles. Mirror these terms in your Skills section and
            experience bullets.
          </p>

          <div className="mt-12 space-y-8">
            {skillsByRole.map((role) => (
              <div key={role.role} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="bg-brand px-6 py-4">
                  <h3 className="font-display text-xl font-bold text-white">{role.role}</h3>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Technical Skills</p>
                    <ul className="mt-3 space-y-1.5">
                      {role.technical.map((skill) => (
                        <li key={skill} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Domain / Soft Skills</p>
                    <ul className="mt-3 space-y-1.5">
                      {role.soft.map((skill) => (
                        <li key={skill} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Methodologies / Frameworks
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {role.domain.map((skill) => (
                        <li key={skill} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft skills properly */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            How to include soft skills without being generic
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Listing &ldquo;good communication skills&rdquo; on your resume is meaningless — every candidate does this.
            Demonstrate soft skills through specific evidence in your bullets.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                generic: 'Good communication skills',
                better: 'Presented monthly P&L review to CFO and board; managed stakeholder updates across 6 cross-functional teams',
              },
              {
                generic: 'Team player',
                better: 'Collaborated with 3 engineering squads and 2 design teams to ship mobile app in 6-week sprint',
              },
              {
                generic: 'Problem solver',
                better: 'Diagnosed and resolved 3-year latency issue in payment gateway, reducing checkout failure rate from 12% to 1.8%',
              },
              {
                generic: 'Leadership skills',
                better: 'Managed team of 8 engineers across Bangalore and Hyderabad; grew team from 3 to 8 in 18 months',
              },
            ].map((example) => (
              <div key={example.generic} className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-2">
                <div className="rounded-xl bg-rose-50 p-4">
                  <p className="text-xs font-bold uppercase text-rose-500">❌ Generic (skip this)</p>
                  <p className="mt-2 text-sm font-medium text-slate-700">&ldquo;{example.generic}&rdquo;</p>
                </div>
                <div className="rounded-xl bg-green-50 p-4">
                  <p className="text-xs font-bold uppercase text-green-600">✓ Specific (use this)</p>
                  <p className="mt-2 text-sm font-medium text-slate-700">&ldquo;{example.better}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills to avoid */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Skills you should remove from your resume</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            These overused phrases harm more than they help. Recruiters ignore them; they waste space; they add no ATS
            keyword value.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {universalSkills.avoidGeneric.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-medium text-rose-700"
              >
                ✗ {skill}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Replace these with skills directly from the job description. Use CV Prime&apos;s free ATS keyword matcher
            to see exactly which keywords your target JD expects.
          </p>
        </div>
      </section>

      {/* How to find the right skills */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">How to find the right skills for any job</h2>
          <div className="mt-10 space-y-5">
            {[
              {
                step: '01',
                title: 'Copy the job description',
                desc: 'Paste the full JD into a document. Highlight every technical skill, tool, methodology, certification, and domain term mentioned.',
              },
              {
                step: '02',
                title: 'Cross-reference with your resume',
                desc: 'Check which highlighted terms appear in your resume. Missing terms that you genuinely possess need to be added — in your Skills section and where naturally relevant in your experience bullets.',
              },
              {
                step: '03',
                title: 'Look at 5–10 similar JDs',
                desc: 'Skills that appear in most JDs for your target role are high-priority, even if not in the specific JD you are applying to. This is how you build a targeted skills cluster.',
              },
              {
                step: '04',
                title: 'Use CV Prime\'s ATS keyword matcher',
                desc: 'Paste your resume and the JD into CV Prime\'s free ATS keyword matcher. It shows exactly which skills are present, which are missing, and which are over-weighted — with a match score.',
              },
            ].map((step) => (
              <div key={step.step} className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground font-display text-lg font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Skills for resume — FAQ</h2>
          <div className="mt-10 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {faqItems.map((item, i) => (
              <FAQItem key={item.q} question={item.q} answer={item.a} defaultOpen={i === 0} tone="light" />
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-200 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-slate-900">Related guides & tools</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/resume-tips/skills-section', label: 'How to write a skills section' },
              { href: '/tools/ats-keyword-matcher', label: 'Free ATS keyword matcher' },
              { href: '/tools/resume-strength-analyzer', label: 'Resume strength analyzer' },
              { href: '/resume-tips/ats-keywords', label: 'ATS keywords guide' },
              { href: '/resume-tips/how-to-write-a-resume', label: 'How to write a resume' },
              { href: '/resume-format', label: 'Resume format guide 2026' },
              { href: '/resume-tips/resume-bullet-points', label: 'Resume bullet points guide' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/ai-resume-builder', label: 'AI resume builder' },
              { href: '/resume-checker', label: 'Free resume checker' },
              { href: '/fresher-resume', label: 'Fresher resume guide' },
              { href: '/resume-tips/work-experience', label: 'Work experience section guide' },
              { href: '/in-demand-skills-india-2026', label: 'In-demand skills India 2026' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-brand hover:text-brand"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            See exactly which skills your target JD expects
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Paste your resume and the job description — CV Prime&apos;s AI shows the keyword gaps in your Skills
            section and fixes them automatically.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/dashboard"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Check my skills for free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/tools/ats-keyword-matcher"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-bold text-white transition hover:border-white/40"
            >
              Free ATS keyword matcher
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free · No credit card · 3 PDF exports included</p>
        </div>
      </section>

      <StickyCTA
        label="Check my resume skills free"
        message="AI identifies exactly which skills your target JD expects — free, no signup"
      />
    </main>
  );
}
