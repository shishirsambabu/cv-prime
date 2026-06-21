import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, BookOpen, Tag, Briefcase, TrendingUp, Bot } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Career & ATS Glossary 2026 — Resume, Hiring & Job Search Terms Explained | CV Prime',
  description:
    'Complete glossary of ATS, resume, and career terms for job seekers in India. Definitions for 40+ terms: ATS score, keyword matching, STAR method, CTC, FAANG, and more.',
  alternates: { canonical: 'https://cv-prime.in/career-glossary' },
  keywords: [
    'ats glossary',
    'resume terminology',
    'career terms glossary',
    'hiring terms explained',
    'ats terms',
    'resume glossary india',
    'cv terminology',
    'job search glossary',
  ],
  openGraph: {
    title: 'Career & ATS Glossary 2026 — CV Prime',
    description: 'Complete glossary of ATS, resume, and career terms for job seekers in India. 40+ terms defined.',
    url: 'https://cv-prime.in/career-glossary',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Career & ATS Glossary 2026 — CV Prime' }],
  },
};

type GlossaryTerm = {
  term: string;
  definition: string;
};

type GlossaryGroup = {
  id: string;
  heading: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
  accentColor: string;
  terms: GlossaryTerm[];
};

const atsTerms: GlossaryTerm[] = [
  {
    term: 'ATS (Applicant Tracking System)',
    definition:
      'Software used by employers to automate the collection, sorting, and ranking of job applications. ~75% of large companies use ATS to filter resumes before human review.',
  },
  {
    term: 'ATS Score',
    definition:
      'A numerical rating (typically 0–100) showing how well a resume matches a specific job description based on keyword coverage, section completeness, and formatting.',
  },
  {
    term: 'ATS Parsing',
    definition:
      'The process by which ATS software reads and extracts text from a resume. Poor formatting — tables, columns, and graphics — can cause parsing failures that lead to automatic rejection.',
  },
  {
    term: 'ATS Keywords',
    definition:
      'Specific words and phrases from a job description that ATS systems scan for. Missing keywords is the #1 cause of ATS rejection, accounting for approximately 55% of cases.',
  },
  {
    term: 'ATS-Friendly Resume',
    definition:
      'A resume formatted to be correctly parsed by ATS software: single-column layout, standard fonts, clear section headings, and no graphics or text boxes.',
  },
  {
    term: 'Keyword Matching',
    definition:
      'The ATS process of comparing words in a resume against required terms in a job description. Exact matches typically score higher than synonyms or paraphrased equivalents.',
  },
  {
    term: 'Boolean Search',
    definition:
      'A search technique used by recruiters in ATS databases combining terms with AND, OR, and NOT operators to find matching candidates from a large applicant pool.',
  },
  {
    term: 'Resume Parsing',
    definition:
      'The automated extraction of structured data — name, contact details, skills, and work experience — from an unstructured resume document into an ATS database.',
  },
];

const resumeTerms: GlossaryTerm[] = [
  {
    term: 'Resume',
    definition:
      'A concise 1–2 page document summarising work experience, skills, and education tailored to a specific job application. The primary tool for securing an interview.',
  },
  {
    term: 'CV (Curriculum Vitae)',
    definition:
      'A comprehensive document of one\'s full academic and professional history, typically 3+ pages. Used for academic, research, and senior positions; more common in Europe and India than in the US.',
  },
  {
    term: 'Cover Letter',
    definition:
      'A 1-page document accompanying a job application that introduces the candidate, explains why they want the role, and highlights key qualifications not fully covered in the resume.',
  },
  {
    term: 'Professional Summary',
    definition:
      'A 2–4 sentence paragraph at the top of a resume that summarises the candidate\'s experience, key skills, and career focus. More effective than a generic objective statement.',
  },
  {
    term: 'Work Experience',
    definition:
      'The section of a resume listing previous employment, including employer name, job title, dates of tenure, and achievement-led bullet points demonstrating impact.',
  },
  {
    term: 'Action Verbs',
    definition:
      'Strong verbs used to begin resume bullet points that convey impact and leadership — for example: "Built", "Led", "Reduced", "Launched", "Increased", "Delivered".',
  },
  {
    term: 'Quantified Achievement',
    definition:
      'A resume bullet point that includes a measurable result, for example "Increased sales by 35%" or "Reduced API latency by 40%". Quantified bullets dramatically improve recruiter interest.',
  },
  {
    term: 'STAR Method',
    definition:
      'A framework for writing resume bullets and answering interview questions: Situation, Task, Action, Result. Ensures each bullet point tells a complete, impact-focused story.',
  },
  {
    term: 'Functional Resume',
    definition:
      'A resume format organised by skills rather than chronological work history. Rarely used in India; can confuse ATS systems and is generally not recommended.',
  },
  {
    term: 'Reverse-Chronological Resume',
    definition:
      'The standard resume format listing work experience from most recent to oldest. The most ATS-compatible and widely expected format by Indian and global recruiters.',
  },
  {
    term: 'Tailor (verb)',
    definition:
      'To customise your resume for a specific job by adjusting keywords, skills, and bullet points to match the job description. Tailoring improves callback rates by 2–4x.',
  },
  {
    term: 'Hard Skills',
    definition:
      'Specific, teachable technical skills that can be measured or tested, for example Python, SQL, AutoCAD, IFRS accounting, or Salesforce. These are primary ATS filter criteria.',
  },
  {
    term: 'Soft Skills',
    definition:
      'Interpersonal and professional attributes such as communication, leadership, and problem-solving. Should be demonstrated through achievement bullets rather than listed as bare terms.',
  },
];

const hiringTerms: GlossaryTerm[] = [
  {
    term: 'Job Description (JD)',
    definition:
      'A formal document from an employer describing a role\'s responsibilities, required qualifications, and skills. Your primary input for ATS keyword optimisation and resume tailoring.',
  },
  {
    term: 'Recruiter',
    definition:
      'A professional responsible for sourcing, screening, and shortlisting candidates. Typically reviews resumes that pass ATS screening and conducts the initial phone or video screen.',
  },
  {
    term: 'Hiring Manager',
    definition:
      'The person who makes the final hiring decision for a role. Often writes or approves the job description; usually conducts the functional or final interview round.',
  },
  {
    term: 'Shortlisting',
    definition:
      'The process of reducing a pool of applicants to a smaller group for interviews, typically after ATS filtering and recruiter review. In India, this may reduce 250+ applicants to 5–10.',
  },
  {
    term: 'Interview Pipeline',
    definition:
      'The series of steps from application to offer, typically including ATS screening, recruiter phone screen, technical or functional rounds, HR round, and final offer negotiation.',
  },
  {
    term: 'FAANG',
    definition:
      'Acronym for Facebook (Meta), Amazon, Apple, Netflix, and Google — used broadly to refer to top-tier global tech companies known for competitive hiring processes and high compensation.',
  },
  {
    term: 'Lateral Hire',
    definition:
      'Hiring a candidate at the same seniority level from another company, as opposed to promoting internally or hiring a fresher. Lateral hires often command a 20–40% salary premium.',
  },
  {
    term: 'Notice Period',
    definition:
      'The time between an employee\'s resignation and their last working day. Typically 30–90 days in India. Relevant for recruiters assessing candidate availability and offer timing.',
  },
  {
    term: 'Offer Letter',
    definition:
      'A formal written offer of employment from an employer, including job title, salary breakdown (CTC), start date, and other terms of employment. The final step before joining.',
  },
];

const careerTerms: GlossaryTerm[] = [
  {
    term: 'CTC (Cost to Company)',
    definition:
      'The total annual cost to the employer for a hire, including base salary, bonuses, benefits, provident fund contribution, and perquisites. The standard salary metric in India.',
  },
  {
    term: 'Take-Home Salary',
    definition:
      'The net salary received after deductions including PF, income tax, and professional tax. Typically 65–75% of CTC for mid-level roles in India, depending on tax slab and structure.',
  },
  {
    term: 'Variable Pay',
    definition:
      'A portion of total compensation tied to individual or company performance. Common in sales, product, and senior roles; typically 10–30% of CTC. Also called a performance bonus.',
  },
  {
    term: 'ESOPs (Employee Stock Option Plan)',
    definition:
      'Options granted to employees to buy company shares at a fixed (exercise) price. Common in funded Indian startups; can significantly increase total compensation if the company grows.',
  },
  {
    term: 'Fresher',
    definition:
      'A candidate with no professional work experience, typically a recent graduate. A key segment in India\'s job market given 8M+ graduates entering the workforce each year.',
  },
  {
    term: 'Lateral',
    definition:
      'An experienced professional hire with 2+ years of work experience, as opposed to a fresher or intern. Lateral candidates are typically sourced through job boards, LinkedIn, or referrals.',
  },
  {
    term: 'Upskilling',
    definition:
      'Learning new skills to stay relevant or advance in your career. A key driver of salary growth in tech, analytics, and management roles in India; increasingly valued alongside degrees.',
  },
];

const aiTerms: GlossaryTerm[] = [
  {
    term: 'AI Resume Screening',
    definition:
      'The use of artificial intelligence to automatically evaluate and score resumes based on job description alignment, qualifications, experience patterns, and predicted job fit.',
  },
  {
    term: 'Generative AI Resume Builder',
    definition:
      'A tool that uses large language models (LLMs) to help write, tailor, or improve resume content based on user input and job descriptions. CV Prime\'s AI builder is an example.',
  },
  {
    term: 'JD Tailoring',
    definition:
      'The process of customising your resume specifically for a given job description — adding relevant keywords, adjusting bullet points, and reframing experience to mirror the JD\'s language.',
  },
  {
    term: 'Bias in ATS',
    definition:
      'The phenomenon where ATS systems may unintentionally screen out qualified candidates based on school name, employment gaps, or unconventional career paths. An active area of HR research.',
  },
  {
    term: 'Semantic Search',
    definition:
      'AI-powered search that understands meaning and context rather than just exact keywords. Used in modern ATS systems to find candidates who express the same skills in different words.',
  },
  {
    term: 'Skills Taxonomy',
    definition:
      'A structured classification of skills used by ATS and HR systems to categorise and match candidate capabilities to job requirements. Examples include the ESCO and O*NET frameworks.',
  },
];

const groups: GlossaryGroup[] = [
  {
    id: 'ats',
    heading: 'ATS Terms',
    icon: <Tag className="h-5 w-5" />,
    color: 'bg-cyan-50',
    borderColor: 'border-cyan-100',
    accentColor: 'text-cyan-600',
    terms: atsTerms,
  },
  {
    id: 'resume',
    heading: 'Resume & CV Terms',
    icon: <BookOpen className="h-5 w-5" />,
    color: 'bg-slate-50',
    borderColor: 'border-slate-100',
    accentColor: 'text-slate-800',
    terms: resumeTerms,
  },
  {
    id: 'hiring',
    heading: 'Hiring Process Terms',
    icon: <Briefcase className="h-5 w-5" />,
    color: 'bg-violet-50',
    borderColor: 'border-violet-100',
    accentColor: 'text-violet-700',
    terms: hiringTerms,
  },
  {
    id: 'career',
    heading: 'Career Development Terms',
    icon: <TrendingUp className="h-5 w-5" />,
    color: 'bg-orange-50',
    borderColor: 'border-orange-100',
    accentColor: 'text-orange-600',
    terms: careerTerms,
  },
  {
    id: 'ai',
    heading: 'AI Recruitment Terms',
    icon: <Bot className="h-5 w-5" />,
    color: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    accentColor: 'text-emerald-700',
    terms: aiTerms,
  },
];

const faqs = [
  {
    q: 'What is an ATS score?',
    a: 'An ATS score is a numerical rating — typically 0 to 100 — that measures how well your resume matches a specific job description. ATS software assigns this score based on keyword coverage, section completeness, formatting correctness, and other factors. A score below 60–70 often means your resume is filtered out before a recruiter sees it.',
  },
  {
    q: 'What is keyword matching in ATS?',
    a: 'Keyword matching is the process by which ATS software compares the words in your resume against the required terms in a job description. If the JD says "project management" and your resume says "project coordination", some ATS systems will not count it as a match. Using exact phrases from the JD — where accurate — is the most reliable strategy.',
  },
  {
    q: 'What is the STAR method for resumes?',
    a: 'The STAR method is a framework for structuring resume bullets and interview answers. STAR stands for Situation (the context), Task (your responsibility), Action (what you did), and Result (the measurable outcome). For example: "Led cross-functional team [S/T] to redesign onboarding flow [A], reducing time-to-productivity by 30% [R]." STAR bullets outperform generic duty descriptions because they communicate impact.',
  },
  {
    q: 'What does CTC mean in India?',
    a: 'CTC stands for Cost to Company — the total annual cost an employer incurs to employ you, including base salary, performance bonuses, employer PF contribution, gratuity, health insurance, and any other benefits. Your take-home salary is typically 65–75% of your CTC, depending on your tax bracket and the structure of your compensation package.',
  },
  {
    q: 'What is JD tailoring and why does it matter?',
    a: 'JD tailoring means customising your resume to match a specific job description — adjusting your professional summary, adding role-relevant keywords, reordering skills, and rewriting bullets to mirror the language the employer uses. Research shows that tailored resumes receive 2–4x more interview callbacks than generic ones, primarily because they score significantly higher on ATS keyword matching.',
  },
];

const allTerms = [...atsTerms, ...resumeTerms, ...hiringTerms, ...careerTerms, ...aiTerms];

const schemaData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
      { '@type': 'ListItem', position: 2, name: 'Career Glossary', item: 'https://cv-prime.in/career-glossary' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Career & ATS Glossary — Resume, Hiring & Job Search Terms',
    description: 'Definitions for 40+ ATS, resume, hiring, career, and AI recruitment terms for job seekers in India and globally.',
    url: 'https://cv-prime.in/career-glossary',
    publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
    hasDefinedTerm: allTerms.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
      inDefinedTermSet: 'https://cv-prime.in/career-glossary',
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  },
];

export default function CareerGlossaryPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <BookOpen className="h-4 w-4" />
            Career & ATS glossary
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Career & ATS Glossary 2026 — resume, hiring, and job search terms explained
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Clear, authoritative definitions for 40+ ATS, resume, hiring, career, and AI recruitment terms. Built for Indian job seekers navigating modern hiring processes.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Covers: ATS • Resume • Hiring Process • Career Development • AI Recruitment
          </p>
        </div>
      </section>

      {/* Jump links */}
      <section className="border-b border-slate-100 bg-white px-5 py-5 sticky top-0 z-10 shadow-sm">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Glossary sections" className="flex flex-wrap gap-2">
            {groups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold text-slate-600 hover:border-cyan-300 hover:text-cyan-700 transition-colors"
              >
                {g.icon}
                {g.heading}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Glossary groups */}
      {groups.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          className={`px-5 py-20 ${gi % 2 === 1 ? 'bg-slate-50' : 'bg-white'}`}
        >
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center gap-3">
              <span className={group.accentColor}>{group.icon}</span>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">{group.heading}</h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {group.terms.map((item) => (
                <div
                  key={item.term}
                  className={`rounded-2xl border ${group.borderColor} ${group.color} p-6`}
                >
                  <h3 className={`font-display text-base font-bold ${group.accentColor}`}>{item.term}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.definition}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Frequently asked questions</h2>
          <p className="mt-3 text-center text-slate-500">The most common questions about these career and ATS terms</p>
          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 p-6">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-12 text-center">
        <p className="text-slate-500">Put these terms to work — optimise your resume with CV Prime</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {[
            { href: '/ats-checker', label: 'Free ATS checker' },
            { href: '/cv-examples', label: 'CV examples by role' },
            { href: '/resume-tips', label: 'Resume writing tips' },
            { href: '/statistics', label: 'ATS statistics 2026' },
            { href: '/salary', label: 'Salary benchmarks India' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-cyan-300 hover:text-cyan-700"
            >
              {link.label} <ArrowRight className="h-3 w-3" />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Know the terms. Now score a higher ATS match.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Use CV Prime to check your ATS score, identify missing keywords, and tailor your resume to any job description — free to start.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Check my ATS score free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </main>
  );
}
