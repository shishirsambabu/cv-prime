import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Sparkles, FileText, AlertCircle } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';
import { FAQItem } from '@/components/marketing/FAQItem';

export const metadata: Metadata = {
  title: 'How to Write a CV in India 2026 — Complete Step-by-Step Guide | CV Prime',
  description:
    'Complete guide on how to write a CV in India 2026. Step-by-step: CV format, sections, layout, ATS rules, and what Indian recruiters actually read. Includes a free CV checker.',
  keywords: [
    'how to write a cv',
    'how to make a cv',
    'how to write a cv india',
    'cv writing tips',
    'cv writing guide',
    'how to create a cv',
    'cv format india',
    'cv writing for freshers',
    'how to write a professional cv',
    'make a cv online free',
    'how to write cv for first job',
    'cv writing tips india 2026',
    'how to write a cv for job application',
    'cv making tips',
  ],
  alternates: { canonical: 'https://cv-prime.in/how-to-write-a-cv' },
  openGraph: {
    title: 'How to Write a CV in India 2026 — Complete Step-by-Step Guide | CV Prime',
    description:
      'Step-by-step guide to writing a CV in India 2026: format, sections, ATS rules, and exactly what recruiters look for. Free guide.',
    url: 'https://cv-prime.in/how-to-write-a-cv',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'How to Write a CV in India 2026 — CV Prime' }],
  },
};

const faqItems = [
  {
    q: 'How long should a CV be in India?',
    a: '1 page for freshers and candidates with less than 3–5 years of experience. 2 pages maximum for experienced professionals. For senior roles (10+ years), 2 pages is acceptable, but never exceed 2 pages for a standard corporate or tech application in India. Academic CVs for PhD/research roles can be longer — they follow different conventions.',
  },
  {
    q: 'What is the difference between a CV and a resume in India?',
    a: 'In India, "CV" and "resume" are often used interchangeably. Technically, a CV (Curriculum Vitae) is a comprehensive document covering your full career history, while a resume is a 1–2 page targeted document. For corporate and tech jobs in India, the shorter resume format is standard. For academic, research, and government positions, a full CV may be expected. CV Prime produces the resume-style CV that works for most Indian professional job applications.',
  },
  {
    q: 'What should I put in my CV if I have no experience?',
    a: 'If you have no work experience: (1) Education section goes first — degree, college, CGPA (if 7.0+), relevant courses. (2) Projects section — list 2–3 academic or personal projects with the tech or tools used and any output or impact metric. (3) Internships — even 1–2 month internships count; include role, company, and 2–3 bullets describing what you did. (4) Skills — list technical skills from your courses and projects. (5) Certifications — Google, NPTEL, Coursera, HackerRank, LeetCode. (6) Keep to 1 page — no exceptions for freshers.',
  },
  {
    q: 'Should I include a photo on my CV in India?',
    a: 'No. For IT companies, MNCs, product startups, and most corporate roles in India, a photo is not required and can cause ATS parsing issues (photos are images — they cannot be read by ATS systems). Include a photo only if the role explicitly asks for it — typically hospitality, aviation, media, or modelling. Photos on CVs can also trigger unintentional bias in shortlisting, which is why most international companies explicitly ask candidates not to include them.',
  },
  {
    q: 'What is the best CV format for India?',
    a: 'Reverse-chronological format is the standard for India. Structure: (1) Contact information and LinkedIn URL. (2) Professional summary (for experienced) or career objective (for freshers). (3) Work experience — most recent role first. (4) Education. (5) Skills — grouped by category. (6) Certifications (if relevant). (7) Projects (required for freshers and tech roles). Use a clean, single-column or simple two-column layout. Avoid tables, text boxes, graphics, and star ratings — these break ATS parsers.',
  },
  {
    q: 'How do I make my CV pass ATS?',
    a: 'Five steps to pass ATS: (1) Tailor your skills section and experience bullets to match the exact keywords in the job description. (2) Use standard section headings: "Work Experience", "Education", "Skills". (3) Use a clean, text-based PDF (not an image PDF or Canva export). (4) Avoid tables, text boxes, columns, photos, and graphics — these break ATS parsers. (5) Score your CV before submitting using CV Prime\'s free ATS checker — it gives you a 0–100 score and flags exact keyword gaps.',
  },
  {
    q: 'Should I use a CV template or make my CV from scratch?',
    a: 'Use a template — but choose one that is ATS-safe. Canva resume designs and many online templates use tables, columns, and graphics that ATS systems cannot parse. CV Prime\'s 8 professional templates are tested for ATS compatibility: they are clean, text-based, and formatted to pass parsing while still looking professional. Start with a template, then tailor the content for the specific role.',
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

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Write a CV in India 2026',
  description: 'Step-by-step guide to writing a professional, ATS-optimised CV for the Indian job market.',
  totalTime: 'PT45M',
  tool: [{ '@type': 'HowToTool', name: 'CV Prime (free AI CV builder)' }],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Choose the right CV format', text: 'Use reverse-chronological format for 95% of roles. Contact → Summary → Work Experience → Education → Skills → Certifications.', url: 'https://cv-prime.in/resume-format' },
    { '@type': 'HowToStep', position: 2, name: 'Write your contact section', text: 'Name, phone (Indian mobile), email, city, LinkedIn URL, GitHub (for tech roles). No photo, no date of birth.', url: 'https://cv-prime.in/how-to-write-a-cv' },
    { '@type': 'HowToStep', position: 3, name: 'Write your summary or objective', text: 'Experienced: 2–3 line professional summary with your strongest credential. Fresher: 2–3 line career objective with your best qualification and target role.', url: 'https://cv-prime.in/resume-tips/resume-summary' },
    { '@type': 'HowToStep', position: 4, name: 'Write your work experience', text: 'Each role: company, job title, dates, and 3–5 outcome-driven bullets using action verbs and metrics.', url: 'https://cv-prime.in/resume-tips/work-experience' },
    { '@type': 'HowToStep', position: 5, name: 'Add your education section', text: 'Degree, university, graduation year, CGPA (if 7.0+ and less than 3 years experience). For freshers: education goes before work experience.', url: 'https://cv-prime.in/resume-tips/education-section' },
    { '@type': 'HowToStep', position: 6, name: 'Build your skills section', text: 'Group skills by category: Technical Skills, Domain Skills, Tools. Mirror exact terms from the job description.', url: 'https://cv-prime.in/skills-for-resume' },
    { '@type': 'HowToStep', position: 7, name: 'Run an ATS check', text: 'Paste your CV and the job description into CV Prime\'s free ATS checker. Get a 0–100 score and fix keyword gaps before applying.', url: 'https://cv-prime.in/ats-checker' },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Resume Tips', item: 'https://cv-prime.in/resume-tips' },
    { '@type': 'ListItem', position: 3, name: 'How to Write a CV', item: 'https://cv-prime.in/how-to-write-a-cv' },
  ],
};

const cvSections = [
  {
    title: '1. Contact information',
    required: true,
    include: [
      'Full name (use the name on your ID documents)',
      'Indian mobile number (+91 XXX XXXX XXXX)',
      'Professional email (firstname.lastname@gmail.com)',
      'City and state (not full address)',
      'LinkedIn profile URL (customise it: linkedin.com/in/yourname)',
      'GitHub URL (for tech roles) or Portfolio URL (for creative roles)',
    ],
    avoid: [
      'Date of birth (not required for corporate roles)',
      'Father\'s / mother\'s name',
      'Marital status',
      'Photo (unless the role specifically requires it)',
      'Full home address',
      'Nationality (assumed for domestic roles)',
    ],
  },
  {
    title: '2. Professional summary (for experienced) / Career objective (for freshers)',
    required: true,
    include: [
      '2–3 lines maximum',
      'Job title you are targeting',
      'Years of experience and your primary domain',
      'Your single strongest credential or achievement',
      '1–2 key skills from the JD',
    ],
    avoid: [
      '"Seeking a challenging position" (vague)',
      '"Passionate", "self-motivated", "hardworking" (empty words)',
      'More than 3 lines',
      'Generic content not tailored to the specific role',
    ],
  },
  {
    title: '3. Work experience',
    required: true,
    include: [
      'Company name, job title, employment dates (Month YYYY – Month YYYY)',
      '3–5 bullet points per role using: Action Verb + What You Did + Measurable Result',
      'Strong action verbs: Led, Built, Reduced, Increased, Launched, Designed, Managed',
      'Quantified outcomes where possible: percentages, ₹ values, user counts, time saved',
      'Keywords from the job description — woven naturally into the bullets',
    ],
    avoid: [
      '"Responsible for…" (passive, no impact)',
      '"Worked on…" (vague)',
      'Full paragraphs instead of bullets',
      'More than 5 bullets per role (for older roles, 2–3 is enough)',
      'Personal pronouns (I, me, my)',
    ],
  },
  {
    title: '4. Education',
    required: true,
    include: [
      'Degree name (B.Tech, MBA, B.Com, MCA)',
      'University / college name',
      'Graduation year (or expected graduation year)',
      'CGPA — include only if 7.0+ and less than 3 years experience',
      'Relevant coursework (for freshers in tech fields)',
    ],
    avoid: [
      'Including CGPA below 7.0 on 10-point scale',
      'Including 10th and 12th marks if you have a degree',
      'Including CGPA if you have 5+ years of work experience',
      'Listing irrelevant certifications in the education section',
    ],
  },
  {
    title: '5. Skills',
    required: true,
    include: [
      'Group by category: Technical Skills, Tools, Domain Skills',
      '10–18 skills — the right size for ATS and human readers',
      'Use exact terms from the job description',
      'Include both abbreviated and full form (JS and JavaScript)',
      'Most relevant skills first',
    ],
    avoid: [
      'Star ratings or skill bars (ATS cannot read visual elements)',
      'Generic soft skills: "hardworking", "team player", "passionate"',
      'Skills you cannot demonstrate in an interview',
      'Listing more than 25 skills (signals padding)',
    ],
  },
  {
    title: '6. Projects (required for freshers; optional for experienced)',
    required: false,
    include: [
      'Project name',
      'Tech stack / tools used',
      '1–2 bullets on what it does and any scale / impact metric',
      'GitHub or live URL if available',
      'Team size if applicable',
    ],
    avoid: [
      'Projects with no description of the tech stack',
      'Projects without any output or impact metric',
      'Listing tutorial projects (Clone of Netflix) without something original',
      'Projects from 5+ years ago with outdated tech stacks',
    ],
  },
  {
    title: '7. Certifications (optional but high-value for freshers)',
    required: false,
    include: [
      'Certification name + issuing body',
      'Year obtained',
      'Relevance to the target role',
      'Examples: AWS, GCP, Google Data Analytics, CFA, PMP, Six Sigma',
    ],
    avoid: [
      'Listing every Udemy course you ever started',
      'Certifications from obscure or unrecognised providers',
      'Certifications older than 5 years (unless they are evergreen credentials)',
    ],
  },
];

export default function HowToWriteACVPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <FileText className="h-4 w-4" />
            CV writing guide — India 2026
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            How to write a CV<br className="hidden sm:block" /> — complete guide for India 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Step-by-step guide to writing a professional, ATS-optimised CV for the Indian job market. Covers every
            section, the right order, what to include, and how to pass the ATS filter before a human sees your
            application.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/dashboard"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Build my CV with AI — free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ats-checker"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Check my existing CV
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free to start · No credit card · 3 PDF exports included</p>
        </div>
      </section>

      {/* Quick stats */}
      <section className="border-b border-slate-200 bg-slate-50 px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '75%', label: 'of CVs are rejected by ATS before a human reads them' },
            { stat: '6 sec', label: 'average time a recruiter spends on initial CV review after ATS pass' },
            { stat: '55%', label: 'of ATS rejections are due to missing keywords — not lack of qualification' },
            { stat: '40%', label: 'average ATS score improvement after keyword optimisation with CV Prime' },
          ].map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-brand">{item.stat}</p>
              <p className="mt-1 max-w-[160px] text-xs leading-5 text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CV vs Resume */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h2 className="font-display text-xl font-bold text-blue-900">CV vs Resume in India — what is the difference?</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              In India, the terms &ldquo;CV&rdquo; and &ldquo;resume&rdquo; are used interchangeably for most job
              applications. For this guide, we use &ldquo;CV&rdquo; to mean the 1–2 page targeted career document used
              for corporate, IT, and professional job applications in India — what most people mean when they say
              &ldquo;make me a CV.&rdquo;
              <br />
              <br />
              A full academic CV (used for PhD applications, research positions, and some government roles) is a
              different document — it includes publications, conference presentations, grants, and teaching experience,
              and can be 5–20 pages.
            </p>
            <Link href="/resume-vs-cv" className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand">
              Full guide: Resume vs CV in India <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Step-by-step: CV format */}
      <section className="px-5 py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">The right CV format for India 2026</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Use reverse-chronological format for 95% of Indian corporate and tech job applications. This is what ATS
            systems (Taleo, Workday, Greenhouse, Darwinbox) expect, and what Indian recruiters read most efficiently.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-bold text-slate-900">Standard CV section order for India</h3>
            <div className="mt-5 space-y-3">
              {[
                { num: 1, section: 'Contact information', note: 'Name, phone, email, city, LinkedIn' },
                { num: 2, section: 'Professional summary (experienced) / Career objective (fresher)', note: '2–3 lines maximum' },
                { num: 3, section: 'Work experience', note: 'Most recent role first — the most important section' },
                { num: 4, section: 'Education', note: 'Degree, university, year, CGPA (if relevant)' },
                { num: 5, section: 'Skills', note: 'Grouped by category — this is what ATS scans most heavily' },
                { num: 6, section: 'Projects', note: 'Required for freshers; optional for experienced professionals' },
                { num: 7, section: 'Certifications', note: 'Role-relevant certifications only' },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4 rounded-xl bg-slate-50 px-4 py-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand text-xs font-bold text-white">
                    {item.num}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{item.section}</p>
                    <p className="text-xs text-slate-500">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-slate-500">
              <strong>Fresher exception:</strong> If you have less than 1 year of work experience, move Education to
              position 3 (before Work Experience / Projects).
            </p>
          </div>
        </div>
      </section>

      {/* Each section */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">How to write each CV section</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Every section with exactly what to include, what to avoid, and formatting rules for ATS compliance.
          </p>

          <div className="mt-12 space-y-8">
            {cvSections.map((section) => (
              <div key={section.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between px-6 py-4 bg-slate-900">
                  <h3 className="font-display text-lg font-bold text-white">{section.title}</h3>
                  {section.required ? (
                    <span className="rounded-full bg-brand/20 px-3 py-1 text-xs font-bold text-brand-300">Required</span>
                  ) : (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-300">Optional</span>
                  )}
                </div>
                <div className="grid gap-5 p-6 sm:grid-cols-2">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <p className="text-xs font-bold uppercase text-green-700">Include</p>
                    </div>
                    <ul className="space-y-2">
                      {section.include.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-slate-700">
                          <span className="mt-0.5 shrink-0 text-green-500">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="h-4 w-4 text-rose-600" />
                      <p className="text-xs font-bold uppercase text-rose-700">Avoid</p>
                    </div>
                    <ul className="space-y-2">
                      {section.avoid.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-slate-700">
                          <span className="mt-0.5 shrink-0 text-rose-500">✗</span>
                          {item}
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

      {/* ATS rules */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            CV formatting rules for ATS compliance
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            75% of CVs never reach a human recruiter — they are filtered out by ATS before anyone reads them. These
            formatting rules prevent that from happening to yours.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              { title: 'Use a text-based PDF', desc: 'Export from Word, Google Docs, or CV Prime — not Canva. Paste your PDF text into Notepad to check: if you can select and copy the text, it is text-based and ATS-readable.' },
              { title: 'Avoid tables and columns', desc: 'A two-column layout is parsed left-column-then-right-column by ATS. Your work history gets merged with your education. Use single-column or a simple layout with clear section breaks.' },
              { title: 'Use standard section headings', desc: 'ATS systems recognise "Work Experience", "Education", "Skills". They do not recognise "My Journey", "Where I\'ve Been", or "What I Know". Use standard headings.' },
              { title: 'No graphics, icons, or photos', desc: 'Infographic elements, skill bars, icons, and photos are images — ATS cannot read them. Anything in an image is invisible to the ATS system.' },
              { title: 'Font: 10–12pt body, standard font', desc: 'Arial, Calibri, Helvetica, or Times New Roman. 10–12pt body text. No font that requires a special download.' },
              { title: 'File name matters', desc: 'Name it: FirstName_LastName_Resume.pdf (e.g., Priya_Sharma_Resume.pdf). Not "Resume.pdf" or "CV (1).docx".' },
            ].map((rule) => (
              <div key={rule.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-display text-base font-bold text-slate-900">{rule.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to use AI */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            How AI makes writing your CV faster
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            CV Prime uses AI to do the hardest parts of CV writing — keyword matching, bullet rewriting, and ATS
            scoring — in minutes.
          </p>
          <div className="mt-10 space-y-4">
            {[
              {
                step: '01',
                title: 'Upload your existing CV or fill in the sections',
                desc: 'CV Prime imports your existing PDF or DOCX and extracts all your experience, education, and skills automatically.',
              },
              {
                step: '02',
                title: 'Paste the job description',
                desc: 'The AI reads both your CV and the JD simultaneously — it identifies the keyword gap between what you have and what the role needs.',
              },
              {
                step: '03',
                title: 'AI rewrites your bullets and adds missing keywords',
                desc: 'Weak, duty-based bullets become outcome-led proof. Missing keywords from the JD are woven naturally into your experience.',
              },
              {
                step: '04',
                title: 'See your ATS score and fix gaps',
                desc: 'A 0–100 ATS score shows you exactly where you stand before you apply. Scores above 70 are competitive for most Indian corporate roles.',
              },
              {
                step: '05',
                title: 'Export a recruiter-ready PDF',
                desc: 'Choose from 8 ATS-safe templates and export a clean, text-based PDF. Free plan: 3 exports. Pro: unlimited.',
              },
            ].map((step) => (
              <div key={step.step} className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">How to write a CV — FAQ</h2>
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
              { href: '/resume-tips/how-to-write-a-resume', label: 'How to write a resume (detailed)' },
              { href: '/resume-format', label: 'Resume format guide 2026' },
              { href: '/resume-tips/resume-summary', label: 'Professional summary guide' },
              { href: '/resume-objective-examples', label: 'Resume objective examples' },
              { href: '/skills-for-resume', label: 'Skills to put on your resume' },
              { href: '/resume-tips/work-experience', label: 'Work experience section guide' },
              { href: '/resume-tips/education-section', label: 'Education section guide' },
              { href: '/resume-tips/resume-bullet-points', label: 'Resume bullet points guide' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/ai-resume-builder', label: 'AI resume builder' },
              { href: '/fresher-resume', label: 'Fresher CV guide' },
              { href: '/ats-resume-template', label: 'ATS-safe CV templates' },
              { href: '/online-cv-maker', label: 'Online CV maker' },
              { href: '/resume-vs-cv', label: 'Resume vs CV: differences' },
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
            Build an ATS-ready CV in minutes — free
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            CV Prime handles the hard parts: ATS keyword matching, bullet rewriting, section ordering, and PDF export.
            You focus on your experience — the AI optimises it.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/dashboard"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Build my CV free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ats-checker"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-bold text-white transition hover:border-white/40"
            >
              <Sparkles className="h-4 w-4" />
              Check my existing CV
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free · No credit card · 3 PDF exports · All 8 templates</p>
        </div>
      </section>

      <StickyCTA
        label="Build my CV free"
        message="AI writes, scores and fixes your CV in 5 minutes — 3 free PDF exports"
      />
    </main>
  );
}
