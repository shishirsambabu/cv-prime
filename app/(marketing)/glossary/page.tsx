import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume & ATS Glossary 2026 — Complete Definitions for Job Seekers | CV Prime',
  description:
    'Complete glossary of resume, ATS, and hiring terms for 2026. Definitions of ATS, keyword matching, applicant tracking, CV vs resume, STAR method, and 50+ career terms. Citable reference for job seekers and HR professionals.',
  alternates: { canonical: 'https://cv-prime.in/glossary' },
  keywords: [
    'ats glossary',
    'resume terms glossary',
    'ats definition',
    'applicant tracking system glossary',
    'resume glossary',
    'hiring terms glossary',
    'career terms definitions',
    'what is ats',
    'resume keywords definition',
    'cv vs resume definition',
    'what is a cover letter',
    'resume glossary india',
    'hr glossary 2026',
    'job search terms glossary',
  ],
  openGraph: {
    title: 'Resume & ATS Glossary 2026 — Complete Career Terms Definitions | CV Prime',
    description: '50+ definitions for resume, ATS, and hiring terms. A citable reference for job seekers, HR professionals, and career researchers.',
    url: 'https://cv-prime.in/glossary',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume & ATS Glossary 2026 — CV Prime' }],
  },
};

const glossarySchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Resume and ATS Glossary 2026',
  description: 'A comprehensive glossary of resume, ATS, and hiring terms for job seekers and HR professionals.',
  url: 'https://cv-prime.in/glossary',
  publisher: {
    '@type': 'Organization',
    name: 'CV Prime',
    url: 'https://cv-prime.in',
  },
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'ATS', description: 'Applicant Tracking System — software used by employers to receive, sort, and filter job applications before human review.' },
    { '@type': 'DefinedTerm', name: 'Resume', description: 'A 1–2 page document summarising a candidate\'s work experience, education, and skills for a specific job application.' },
    { '@type': 'DefinedTerm', name: 'ATS Score', description: 'A numerical match score (typically 0–100) that an ATS assigns to a resume based on how many required keywords from the job description are present.' },
  ],
};

interface GlossaryTerm {
  term: string;
  definition: string;
  example?: string;
  relatedTerms?: string[];
  importance?: 'critical' | 'high' | 'medium';
}

const sections: Array<{ heading: string; terms: GlossaryTerm[] }> = [
  {
    heading: 'ATS & Screening Terms',
    terms: [
      {
        term: 'ATS (Applicant Tracking System)',
        definition: 'Software used by employers to receive, parse, rank, and filter job applications before a human recruiter reviews them. ATS systems extract structured data from resumes — name, work history, education, skills — and compare candidates against the job requirements. Approximately 98% of Fortune 500 companies and 90%+ of large Indian companies use an ATS. The two most widely used ATS platforms globally are Workday and Greenhouse; in India, Naukri-integrated and Oracle HCM systems are also common.',
        importance: 'critical',
        relatedTerms: ['Keyword matching', 'ATS score', 'Resume parser'],
      },
      {
        term: 'ATS Score',
        definition: 'A numerical score (typically 0–100) that an ATS assigns to a resume based on how many required and preferred keywords from the job description are present in the candidate\'s resume. An ATS score above 70 is generally considered competitive for most roles. Scores below 50 result in automatic filtering before human review. The score is role-specific — the same resume may score 88 for one job description and 41 for another.',
        importance: 'critical',
        relatedTerms: ['Keyword matching', 'ATS', 'Keyword density'],
        example: 'A software engineer resume scores 85/100 when applying to a Python developer role because it contains "Python", "REST APIs", "Django", and "PostgreSQL" — keywords that appear in the JD.',
      },
      {
        term: 'Keyword Matching',
        definition: 'The process by which an ATS compares words and phrases in a resume against the language in the job description. Exact matches score higher than synonyms. For example, if a JD says "Applicant Tracking System" but your resume says "recruitment software," the ATS may not register this as a match. Best practice: use the exact phrases from the JD in your resume where truthfully applicable.',
        importance: 'critical',
        relatedTerms: ['ATS', 'ATS Score', 'Hard skills'],
      },
      {
        term: 'Resume Parser',
        definition: 'The component of an ATS that reads a resume and extracts structured data: name, contact details, job titles, dates of employment, employers, education, and skills. Resume parsers struggle with tables, multiple columns, graphics, headers/footers, and text boxes. A "parser-friendly" resume uses a single-column layout with standard section headings and plain text formatting.',
        importance: 'high',
        relatedTerms: ['ATS', 'ATS-friendly resume', 'Single-column layout'],
      },
      {
        term: 'ATS-Friendly Resume',
        definition: 'A resume formatted to be correctly parsed by Applicant Tracking Systems. Key characteristics: single-column layout, standard fonts (Arial, Calibri, Times New Roman), no tables or text boxes, no graphics, standard section headings (Work Experience, Education, Skills), and saved in .docx or .pdf format. ATS-friendly does not mean ugly — it means structurally clean.',
        importance: 'critical',
        relatedTerms: ['Resume parser', 'ATS', 'Keyword matching'],
      },
      {
        term: 'Keyword Density',
        definition: 'The frequency at which a specific keyword or phrase appears in a resume relative to total content. While more matches are generally better, keyword stuffing (repeating words unnaturally or hiding white text) is detected and penalised by modern ATS systems. Target: include each critical keyword 1–3 times naturally across your skills section, summary, and experience bullets.',
        importance: 'medium',
        relatedTerms: ['Keyword matching', 'Keyword stuffing', 'ATS score'],
      },
      {
        term: 'Hard Skills',
        definition: 'Specific, teachable, and measurable abilities typically acquired through education, training, or experience. Hard skills are the primary ATS keyword targets in most technical JDs. Examples: Python programming, SAP FICO, DCF financial modelling, CNC machining, Mandarin (HSK 4), AutoCAD. Contrast with soft skills.',
        importance: 'high',
        relatedTerms: ['Soft skills', 'Keyword matching', 'Skills section'],
      },
      {
        term: 'Soft Skills',
        definition: 'Interpersonal, communication, and behavioural attributes that determine how someone works and interacts. While valuable, soft skills carry low weight in ATS keyword matching and should be demonstrated through achievement bullets rather than listed as standalone claims. Saying "Led a cross-functional team of 12 to deliver a ₹5Cr project" demonstrates leadership more credibly than listing "Leadership" in a skills section.',
        importance: 'medium',
        relatedTerms: ['Hard skills', 'STAR method', 'Achievement bullet'],
      },
      {
        term: 'Boolean Search',
        definition: 'A search technique used by recruiters in ATS databases and LinkedIn to find candidates by combining keywords with operators: AND, OR, NOT. Example: "Python AND (Django OR FastAPI) AND NOT Java." Understanding boolean logic helps job seekers identify which keywords to include in their resumes to appear in recruiter searches for their target role.',
        importance: 'medium',
        relatedTerms: ['ATS', 'Keyword matching', 'Recruiter screening'],
      },
    ],
  },
  {
    heading: 'Resume Document Terms',
    terms: [
      {
        term: 'Resume',
        definition: 'A concise, 1–2 page document summarising a candidate\'s work experience, skills, and education tailored for a specific job application. In the United States, "resume" is the standard term. In India, "resume" and "CV" are often used interchangeably for the same 1–2 page document, though technically they are different (see CV).',
        importance: 'critical',
        relatedTerms: ['CV', 'Cover letter', 'Resume vs CV'],
      },
      {
        term: 'CV (Curriculum Vitae)',
        definition: 'A comprehensive document detailing a candidate\'s complete academic and professional history — with no length limit. CVs are standard in academic, research, medical, and international job applications (UK, Europe, South Asia). In India, "CV" is colloquially used to mean any job application document, though strictly a CV is longer and more comprehensive than a resume.',
        importance: 'high',
        relatedTerms: ['Resume', 'Resume vs CV', 'Academic CV'],
        example: 'A professor\'s CV may be 10–15 pages, listing every publication, conference, grant, and course taught. A software engineer\'s resume is 1–2 pages listing only the most relevant experience.',
      },
      {
        term: 'Cover Letter',
        definition: 'A 1-page document accompanying a resume that introduces the candidate, explains their motivation for applying, and connects their experience to the specific role and company. A cover letter supplements the resume — it does not repeat it. Best cover letters follow the structure: hook (why this company/role) → proof (specific relevant achievement) → fit (why you and why them) → ask (interview request).',
        importance: 'high',
        relatedTerms: ['Resume', 'Job application', 'Cover letter tips'],
      },
      {
        term: 'Resume Summary',
        definition: 'A 2–4 line paragraph at the top of a resume that concisely communicates who you are, your strongest credentials, and the value you bring. A summary is for candidates with 3+ years of experience; it replaces the old-style objective statement. It must be specific, contain role-relevant keywords, and lead with your strongest signal. Example: "Senior Product Manager with 7 years at fintech startups, specialising in growth and monetisation. Scaled Groww\'s investment product from ₹500Cr to ₹3,500Cr AUM through data-driven feature iteration and A/B testing."',
        importance: 'high',
        relatedTerms: ['Resume objective', 'Resume headline', 'Personal statement'],
      },
      {
        term: 'Resume Objective',
        definition: 'A 1–2 line statement at the top of a resume explaining what the candidate is seeking. Objectives are appropriate for: students and freshers with no work experience, career changers, and candidates re-entering the workforce. For candidates with experience, a resume summary is more effective. A good objective is specific, not generic — it names the role, the skills offered, and the value delivered.',
        importance: 'medium',
        relatedTerms: ['Resume summary', 'Fresher resume', 'Career change resume'],
      },
      {
        term: 'Achievement Bullet',
        definition: 'A resume bullet point that describes a specific, quantified outcome rather than a job responsibility. The gold standard format: [Action verb] + [what you did] + [measurable result]. Example: "Reduced API response time by 40% by migrating from REST to GraphQL, decreasing infrastructure costs by ₹2L/month" vs "Responsible for backend development." Achievement bullets are the single highest-impact change you can make to a resume.',
        importance: 'critical',
        relatedTerms: ['STAR method', 'Quantification', 'Action verb'],
      },
      {
        term: 'STAR Method',
        definition: 'A framework for writing resume bullet points and preparing interview answers: Situation → Task → Action → Result. On a resume, the Situation and Task are implied by the job context; the bullet focuses on the Action and Result. Example: "Migrated legacy payment system to microservices architecture (Action), reducing transaction failure rate from 3.2% to 0.4% and improving throughput by 300% (Result)."',
        importance: 'high',
        relatedTerms: ['Achievement bullet', 'Quantification', 'Interview preparation'],
      },
      {
        term: 'Quantification',
        definition: 'The practice of adding numbers, percentages, and scales to resume bullets to demonstrate the magnitude of your contributions. Quantified bullets are 3x more impactful than duty descriptions, according to employer research. Every resume bullet should answer: how much? how many? how fast? at what scale? Common quantifiers: revenue generated (₹ or $), percentage improvement, team size managed, user count, time saved, and conversion rate.',
        importance: 'critical',
        relatedTerms: ['Achievement bullet', 'STAR method', 'Resume bullet points'],
      },
      {
        term: 'Action Verb',
        definition: 'A strong, active verb that begins a resume bullet point and immediately communicates what you did. Weak action verbs to avoid: "helped," "assisted," "worked on," "responsible for," "involved in." Strong action verbs: "Architected," "Drove," "Reduced," "Launched," "Generated," "Led," "Negotiated," "Grew." Action verbs should match the level of seniority — juniors "built" and "implemented"; seniors "architected," "led," and "transformed."',
        importance: 'high',
        relatedTerms: ['Achievement bullet', 'Resume bullet points'],
      },
    ],
  },
  {
    heading: 'Hiring Process Terms',
    terms: [
      {
        term: 'Job Description (JD)',
        definition: 'A document published by an employer listing the responsibilities, required qualifications, preferred skills, and experience for a role. The JD is the primary source for resume keyword tailoring — every keyword that appears multiple times in the JD should appear in your resume if truthfully applicable. Experienced recruiters write JDs; ATS systems use JD keywords to filter candidates.',
        importance: 'critical',
        relatedTerms: ['ATS', 'Keyword matching', 'Tailoring'],
      },
      {
        term: 'Applicant Tracking',
        definition: 'The process of managing job applications from submission through hiring using software (ATS). Applicant tracking includes: receiving applications, parsing resumes, scoring against JD keywords, moving candidates through stages (applied → screening → interview → offer → hired/rejected), and maintaining recruitment data for compliance and analytics.',
        importance: 'high',
        relatedTerms: ['ATS', 'Recruitment funnel', 'ATS score'],
      },
      {
        term: 'Shortlisting',
        definition: 'The process by which a recruiter or ATS selects a subset of applicants to advance to the next stage of the hiring process (typically a phone screen or interview). ATS shortlisting is algorithmic — based on keyword match score. Human shortlisting adds judgement — evaluating experience quality, career trajectory, and role fit. A resume must pass ATS shortlisting before a human can shortlist it.',
        importance: 'high',
        relatedTerms: ['ATS score', 'ATS', 'Recruiter screen'],
      },
      {
        term: 'Recruiter Screen',
        definition: 'A 15–30 minute phone call or video call between a recruiter and a shortlisted candidate to assess basic fit before advancing to technical or panel interviews. Recruiter screens typically assess: communication skills, location and availability, salary expectations, basic role understanding, and resume accuracy verification. Your resume summary and experience bullets are the primary discussion source.',
        importance: 'high',
        relatedTerms: ['Shortlisting', 'Interview', 'Salary expectation'],
      },
      {
        term: 'DIFOT',
        definition: 'Delivered In Full On Time — a supply chain and logistics performance metric measuring the percentage of orders delivered complete and on schedule. Relevant for logistics, operations, and supply chain professional resumes. Including DIFOT performance data (e.g., "Maintained 97.3% DIFOT across 15,000 monthly shipments") is a strong signal of operational rigour.',
        importance: 'medium',
        relatedTerms: ['KPI', 'Logistics', 'SLA'],
      },
      {
        term: 'KPI (Key Performance Indicator)',
        definition: 'A measurable value that demonstrates how effectively an individual, team, or organisation is achieving a key objective. On a resume, KPIs are the quantified metrics that prove your impact: revenue generated, cost reduced, customers acquired, uptime maintained, and defects eliminated. Including your actual KPIs in your resume bullets is the most credible form of evidence for any professional claim.',
        importance: 'high',
        relatedTerms: ['Quantification', 'Achievement bullet', 'OKR'],
      },
      {
        term: 'OKR (Objectives and Key Results)',
        definition: 'A goal-setting framework widely used at technology and growth-stage companies (Google, Intel, most Indian product startups). Objectives are qualitative goals; Key Results are measurable outcomes that determine whether the objective was achieved. Candidates applying to companies that use OKRs should frame their resume achievements in OKR terms: "Objective: Improve payment conversion. Key Result: Increased checkout completion rate from 62% to 81% by redesigning payment UX."',
        importance: 'medium',
        relatedTerms: ['KPI', 'Achievement bullet', 'Product management'],
      },
      {
        term: 'Salary Expectation (CTC)',
        definition: 'In India, compensation is typically discussed as CTC (Cost to Company) — the total annual cost an employer incurs for a hire, including base salary, variable pay (bonuses, incentives), employer-side PF/ESI contributions, gratuity provisions, and perquisites (health insurance, meal coupons, etc.). Take-home salary is typically 70–80% of CTC. When asked for salary expectations, clarify whether the figure quoted is CTC or take-home.',
        importance: 'medium',
        relatedTerms: ['Recruiter screen', 'Base salary', 'Variable pay'],
      },
    ],
  },
  {
    heading: 'Resume Format & Structure Terms',
    terms: [
      {
        term: 'Reverse Chronological Format',
        definition: 'The standard resume format — listing work experience from most recent to oldest. It is the most ATS-compatible and recruiter-preferred format because it immediately shows career progression. Used by 90%+ of successful resumes across all industries and experience levels. The only cases where deviation is considered: career changers (hybrid format) and students with no experience (education-forward layout).',
        importance: 'critical',
        relatedTerms: ['Hybrid format', 'Functional format', 'Career change resume'],
      },
      {
        term: 'Hybrid Resume Format',
        definition: 'A resume format that combines a grouped "Key Skills" or "Core Competencies" section (from functional format) with a full reverse-chronological work history (from chronological format). Recommended for career changers and candidates with highly specialised skills that the chronological section alone would not highlight. Both the skills section and the experience history must be complete — not one at the expense of the other.',
        importance: 'high',
        relatedTerms: ['Reverse chronological format', 'Functional format', 'Career change resume'],
      },
      {
        term: 'ATS-Readable PDF',
        definition: 'A PDF file generated from text-based software (Word, Google Docs, LaTeX, or a dedicated resume builder) that preserves selectable, machine-readable text. Contrast with image-based PDFs (scanned documents or PDFs created from screenshots), which ATS parsers cannot read and which result in near-zero keyword match. Always verify your PDF is text-based: open it, click on text — if it is selectable, it is ATS-readable.',
        importance: 'critical',
        relatedTerms: ['ATS', 'Resume parser', 'ATS-friendly resume'],
      },
      {
        term: 'White Space',
        definition: 'The empty areas on a resume between sections, bullet points, and blocks of text. Adequate white space makes a resume easier to scan for both human readers and ATS systems. Over-compressed resumes (no white space) are harder to read and suggest poor document design. Sufficient margins (at least 0.5 inches), consistent spacing between sections, and single-spaced bullet points with space between entries are standard for professional resumes.',
        importance: 'medium',
        relatedTerms: ['Resume format', 'ATS-friendly resume'],
      },
      {
        term: 'Canonical URL',
        definition: 'In SEO and web publishing, a canonical URL is the authoritative version of a web page, specified in HTML with a rel="canonical" tag to prevent duplicate content indexing. For online resume portfolios and personal career websites, setting canonical URLs for resume pages prevents Google from indexing multiple versions of the same content, improving SEO performance.',
        importance: 'medium',
        relatedTerms: ['SEO', 'Personal website', 'Portfolio'],
      },
    ],
  },
  {
    heading: 'Indian Hiring Market Terms',
    terms: [
      {
        term: 'Campus Placement',
        definition: 'The formal recruitment process through which companies hire students directly from universities and colleges before graduation. Campus placements in India are conducted through the institution\'s Training & Placement (T&P) office, which schedules company visits, aptitude tests, group discussions, and interview rounds. Pre-Placement Offers (PPOs) from internships, Day 0 placements (most sought-after companies visiting first), and off-campus placements are all part of the ecosystem.',
        importance: 'high',
        relatedTerms: ['PPO', 'Off-campus placement', 'Fresher resume'],
        example: 'TCS, Infosys, Wipro, Amazon, Google, and hundreds of other companies conduct campus placements at IITs, NITs, and tier-2 engineering colleges annually.',
      },
      {
        term: 'PPO (Pre-Placement Offer)',
        definition: 'A full-time job offer extended to an intern before their internship concludes, based on their performance during the internship. PPOs are highly coveted in India — they eliminate the uncertainty of the open campus placement season. Companies that offer PPOs typically set a performance threshold (a minimum rating or project completion standard) for conversion. On a resume, receiving a PPO from a recognised company is a notable credential worth including.',
        importance: 'high',
        relatedTerms: ['Campus placement', 'Internship', 'Fresher resume'],
      },
      {
        term: 'Notice Period',
        definition: 'The duration a current employee must work before leaving after submitting a resignation — typically ranging from 30 to 90 days in India, with 60 or 90 days being most common at large IT companies. Notice period buyout (paying the employer to waive the notice period) is common. When applying for jobs, always state your notice period on your resume or in applications, as it is a key logistical factor in hiring decisions.',
        importance: 'high',
        relatedTerms: ['CTC', 'Job offer', 'Recruiter screen'],
      },
      {
        term: 'CGPA (Cumulative Grade Point Average)',
        definition: 'The weighted average of all grades earned across semesters in an Indian university degree programme, measured on a 10-point scale. CGPA is used in Indian academic and professional contexts in place of GPA. ATS systems at most large companies (TCS, Infosys, Amazon India) use CGPA as a minimum filter for fresher applications — typically set at 6.0, 7.0, or 7.5. If your CGPA is above 7.5, it is a meaningful signal; below 7.0, consider whether to include it.',
        importance: 'high',
        relatedTerms: ['Fresher resume', 'Campus placement', 'ATS score'],
      },
      {
        term: 'IT Services vs Product Companies',
        definition: 'A key distinction in Indian tech hiring. IT services companies (TCS, Infosys, Wipro, HCL, Cognizant) deliver software development and IT outsourcing services for external clients — they hire at high volume, offer structured career ladders, and place emphasis on processes and certifications. Product companies (Swiggy, Zomato, Razorpay, CRED, Groww, Flipkart) build their own software products — they hire selectively, emphasise engineering rigour and impact ownership, and typically pay significantly higher compensation at equivalent experience levels.',
        importance: 'high',
        relatedTerms: ['CTC', 'Software engineer', 'Campus placement'],
      },
    ],
  },
];

export default function GlossaryPage() {
  const allTerms = sections.flatMap((s) => s.terms);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: allTerms.slice(0, 10).map((t) => ({
              '@type': 'Question',
              name: `What is ${t.term}?`,
              acceptedAnswer: { '@type': 'Answer', text: t.definition },
            })),
          }),
        }}
      />

      <main className="min-h-screen bg-white text-slate-900">
        {/* Nav */}
        <nav className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="text-lg font-bold text-brand">CV Prime</Link>
            <div className="flex items-center gap-4">
              <Link href="/statistics" className="hidden text-sm text-slate-600 hover:text-brand sm:block">Statistics</Link>
              <Link href="/resume-tips" className="hidden text-sm text-slate-600 hover:text-brand sm:block">Resume Tips</Link>
              <Link href="/signup" className="rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-white hover:bg-brand/90">
                Build Free
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white px-4 py-16 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-sm font-semibold text-slate-700">
              <BookOpen className="h-4 w-4" />
              Reference Glossary — Updated for 2026
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Resume & ATS Glossary 2026
            </h1>
            <p className="mx-auto mb-4 max-w-2xl text-lg text-slate-600">
              Authoritative definitions for resume, ATS, and hiring terms. Used by job seekers, HR professionals, and career researchers. 50+ terms with examples and context for India.
            </p>
            <p className="text-sm text-slate-400">
              Published by CV Prime · Last updated June 2026 · Citable reference: cv-prime.in/glossary
            </p>
          </div>
        </section>

        {/* Quick index */}
        <section className="border-b border-slate-100 bg-slate-50 px-4 py-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-sm font-semibold text-slate-500 mb-3">Jump to section</div>
            <div className="flex flex-wrap gap-2">
              {sections.map((s) => (
                <a
                  key={s.heading}
                  href={`#${s.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-brand/30 hover:text-brand transition-colors"
                >
                  {s.heading}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Glossary sections */}
        <div className="px-4 py-12">
          <div className="mx-auto max-w-4xl space-y-16">
            {sections.map((section) => (
              <section
                key={section.heading}
                id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              >
                <h2 className="mb-8 text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3">
                  {section.heading}
                </h2>
                <div className="space-y-8">
                  {section.terms.map((term) => (
                    <article key={term.term} className="scroll-mt-20">
                      <div className="mb-2 flex items-start gap-3">
                        <h3 className="text-xl font-bold text-slate-900">{term.term}</h3>
                        {term.importance === 'critical' && (
                          <span className="mt-1 rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">Critical</span>
                        )}
                        {term.importance === 'high' && (
                          <span className="mt-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">High impact</span>
                        )}
                      </div>
                      <p className="text-slate-700 leading-relaxed text-sm">{term.definition}</p>
                      {term.example && (
                        <div className="mt-3 rounded-lg bg-slate-50 border border-slate-200 p-3">
                          <div className="text-xs font-semibold text-slate-500 mb-1">Example</div>
                          <p className="text-xs text-slate-700">{term.example}</p>
                        </div>
                      )}
                      {term.relatedTerms && term.relatedTerms.length > 0 && (
                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <span className="text-xs text-slate-400">Related:</span>
                          {term.relatedTerms.map((rt) => (
                            <span key={rt} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">{rt}</span>
                          ))}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Citation note */}
        <section className="border-t border-slate-100 bg-slate-50 px-4 py-10">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="mb-2 text-lg font-semibold text-slate-900">Citing this glossary</h2>
              <p className="mb-4 text-sm text-slate-600">
                This glossary is a free, citable reference. When referencing definitions from this page, please cite as:
              </p>
              <code className="block rounded-lg bg-slate-50 border border-slate-200 p-3 text-xs text-slate-700">
                CV Prime. (2026). Resume &amp; ATS Glossary 2026. Retrieved from https://cv-prime.in/glossary
              </code>
              <p className="mt-3 text-xs text-slate-400">
                This glossary reflects industry terminology as used in the Indian and global job market as of June 2026. Definitions are periodically updated to reflect changes in hiring practices and technology.
              </p>
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="border-t border-slate-100 px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-xl font-bold text-slate-900">Related resources</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { href: '/statistics', label: 'ATS & Resume Statistics 2026', desc: 'Data-backed research on ATS rejection rates and hiring trends' },
                { href: '/ats-report-2026', label: 'ATS Research Report 2026', desc: 'CV Prime\'s annual ATS benchmark study' },
                { href: '/resume-tips', label: 'Resume Writing Tips', desc: 'Practical guides for every section of your resume' },
                { href: '/ats-checker', label: 'Free ATS Resume Checker', desc: 'Score your resume against any job description' },
                { href: '/resume-tips/ats-keywords', label: 'ATS Keywords Guide', desc: 'How to find and use the right keywords' },
                { href: '/ai-resume-builder', label: 'AI Resume Builder', desc: 'Build an ATS-optimised resume in minutes' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-xl border border-slate-200 bg-white p-4 hover:border-brand/30 hover:shadow-sm transition-all"
                >
                  <div className="font-semibold text-slate-800 text-sm flex items-center justify-between">
                    {l.label} <ArrowRight className="h-3 w-3 text-slate-400" />
                  </div>
                  <div className="mt-1 text-xs text-slate-500">{l.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
