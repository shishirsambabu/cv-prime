import type { AtsSystemData } from '@/lib/atsSystemData';

// Additional ATS platform guides. Kept in a separate file (merged into
// `atsSystems` in lib/atsSystemData.ts) so new systems can be added without
// touching the original five entries.
//
// Editorial rule for this file: describe how each platform works and how to
// format for it. Do not name specific customer companies or quote usage
// statistics unless they are sourced — these pages are written to be quoted by
// AI assistants, so unverifiable claims are a liability.
export const atsSystemsMore: AtsSystemData[] = [
  {
    slug: 'lever',
    name: 'Lever',
    shortName: 'Lever',
    usedBy:
      'Common at venture-funded startups, SaaS companies and global product companies hiring in India, especially for engineering, product and design roles.',
    overview:
      'Lever is a combined applicant tracking and candidate relationship (CRM) platform. Every applicant becomes a searchable candidate profile, and recruiters work from pipelines, tags and full-text search rather than strict knockout filters. Your resume is parsed into the profile, but the original file is also attached and frequently opened by the hiring team, so Lever rewards resumes that are both cleanly parseable and genuinely readable.',
    parsingNotes: [
      'Lever parses contact details, current company, current title and work history into the candidate profile. The current title and company shown at the top of the profile come from your most recent role, so make sure that role is listed first with a clear title.',
      'Recruiters search Lever by keyword across the parsed resume text. Literal matches to the job description — tool names, frameworks, certifications — are what make a profile surface in those searches.',
      'Lever keeps candidates in its database after a role closes and recruiters re-search it for later openings, so a well-parsed profile keeps working for you after the first application.',
      'Application forms on Lever career pages often include a LinkedIn URL field and free-text questions. These are stored on the profile alongside the resume, so keep titles and dates consistent between them.',
    ],
    formattingRules: [
      'Single-column layout with standard headings: "Experience", "Education", "Skills", "Projects".',
      'Upload a text-based PDF. Lever also accepts DOCX, but PDF preserves your layout for the human reviewer who opens the attachment.',
      'Put your name, email, phone and LinkedIn URL in the main body at the top, not in a document header.',
      'Keep the first half-page strong: recent title, a two-line summary and your best quantified results. Lever reviewers often skim the attached file directly.',
    ],
    commonMistakes: [
      'Listing an older or more impressive role first, so the profile shows the wrong current title and company',
      'Relying on a design-heavy resume because "a human will read it" — the parsed text still drives keyword search',
      'Leaving the LinkedIn field blank or pointing it to an outdated profile that contradicts the resume',
      'Applying to several roles at the same company with different resume versions that disagree on dates or titles',
    ],
    faqs: [
      {
        q: 'How can I tell if a company uses Lever?',
        a: 'Lever-hosted job postings usually live at a jobs.lever.co address followed by the company name. Some companies embed Lever on their own careers page, in which case the Apply button often redirects to a jobs.lever.co URL.',
      },
      {
        q: 'Does Lever automatically reject resumes?',
        a: 'Lever is built around recruiter search and pipelines rather than automatic rejection. Employers can add screening questions with required answers, and those can disqualify an application, but the resume itself is usually reviewed by a person. Clean parsing matters because it decides whether you surface in keyword searches.',
      },
      {
        q: 'Should I write a cover letter for a Lever application?',
        a: 'If the form has a cover letter or "additional information" field, use it. Lever stores that text on your candidate profile next to the resume, and at smaller companies it is often read. Keep it short and specific to the role.',
      },
    ],
  },
  {
    slug: 'smartrecruiters',
    name: 'SmartRecruiters',
    shortName: 'SmartRecruiters',
    usedBy:
      'Used by large multinational employers, retail and hospitality brands, and global companies that run high-volume hiring across several countries, including India.',
    overview:
      'SmartRecruiters is an enterprise talent acquisition suite built for high application volumes. Candidates apply through a short, mobile-friendly form that parses the uploaded resume into structured fields, and recruiters then filter, rank and search across those fields. Because volumes are high, recruiters lean on structured filters such as location, experience and screening answers, so accurate parsing and complete form answers both matter.',
    parsingNotes: [
      'The application flow parses your resume and pre-fills experience and education fields. Review the pre-filled entries before submitting — what you confirm there becomes the structured record recruiters filter on.',
      'Location is a key filter in multi-country hiring. State your current city and, if relevant, willingness to relocate clearly near the top of the resume.',
      'Screening questions are attached to most high-volume roles. Answers are stored as structured data and can be used to rank or filter applications before a recruiter opens your resume.',
      'Skills listed in a dedicated Skills section map into the profile more reliably than skills mentioned only inside paragraphs.',
    ],
    formattingRules: [
      'Single-column layout, standard fonts and standard section headings.',
      'Text-based PDF or DOCX; never a scanned image or photo of a resume.',
      'Write dates in a consistent "Mon YYYY – Mon YYYY" format so tenure is calculated correctly.',
      'Keep the resume to one or two pages. High-volume reviewers make fast decisions on the first page.',
    ],
    commonMistakes: [
      'Submitting without checking the auto-filled experience fields, leaving merged or missing roles',
      'Answering screening questions inconsistently with the resume (for example, years of experience)',
      'Omitting current location, which drops the application out of location-filtered searches',
      'Uploading a resume built in a design tool that exports text as images',
    ],
    faqs: [
      {
        q: 'How do I know if a job is on SmartRecruiters?',
        a: 'SmartRecruiters postings are commonly hosted at jobs.smartrecruiters.com or careers.smartrecruiters.com followed by the company name. The application form usually offers to import your resume or a LinkedIn profile before showing the pre-filled fields.',
      },
      {
        q: 'Can I edit my SmartRecruiters application after submitting?',
        a: 'In most cases you cannot edit a submitted application. Take the extra minute to review the pre-filled fields and screening answers before you press submit.',
      },
      {
        q: 'Is it better to import my LinkedIn profile or upload a resume?',
        a: 'Upload a tailored resume. An imported LinkedIn profile is usually more general and may not contain the keywords from this specific job description. If you do import, review and add the missing skills before submitting.',
      },
    ],
  },
  {
    slug: 'zoho-recruit',
    name: 'Zoho Recruit',
    shortName: 'Zoho Recruit',
    usedBy:
      'Widely used by Indian SMEs, growing startups and recruitment and staffing agencies, partly because it is built by an Indian company and priced for smaller teams.',
    overview:
      'Zoho Recruit is an applicant tracking system from Zoho with two editions: one for in-house HR teams and one for staffing agencies. It parses resumes into candidate records, supports keyword and Boolean search across its candidate database, and is often connected to job boards such as Naukri so applications from several sources land in one place. Agencies in particular keep large Zoho Recruit databases and re-search them for every new mandate.',
    parsingNotes: [
      'Zoho Recruit extracts name, contact details, current employer, experience, skills and education into a candidate record. Clear section headings make this mapping far more reliable.',
      'Recruiters and agency consultants search the database with keywords and Boolean strings. The exact skill names from job descriptions — "SAP FICO", "React.js", "GST filing" — are what bring your profile up.',
      'Applications from Naukri and other job boards can be imported into Zoho Recruit, so your Naukri resume may end up parsed here too. Keep the resume you upload to job boards just as ATS-clean as the one you send directly.',
      'Many Indian employers add custom fields such as current CTC, expected CTC and notice period. Fill these in the form when asked; recruiters filter on them.',
    ],
    formattingRules: [
      'Single-column resume with standard headings; avoid tables for skills or education.',
      'DOCX and text-based PDF both parse well. Avoid image-only PDFs exported from design tools.',
      'Write your current role, company and total experience plainly near the top.',
      'List skills individually, separated by commas or line breaks, in a dedicated Skills section.',
    ],
    commonMistakes: [
      'Sending a design-heavy resume to an agency, which then gets parsed into an incomplete record in their database',
      'Using abbreviations or synonyms that differ from the JD (for example "ML" only, without "Machine Learning")',
      'Leaving CTC and notice-period fields blank when the form asks for them, which drops the profile out of filtered searches',
      'Keeping an old resume on job boards that agencies import, so the parsed record contradicts the resume you send later',
    ],
    faqs: [
      {
        q: 'How can I tell if a company uses Zoho Recruit?',
        a: 'Zoho Recruit career pages are often hosted on a zohorecruit.com or zohorecruit.in address, or the application form shows Zoho branding. Many recruitment agencies also use it internally even when the job is posted on Naukri or LinkedIn.',
      },
      {
        q: 'Do recruitment agencies in India use an ATS?',
        a: 'Most established agencies do, and Zoho Recruit is one of the common choices. Agencies store every resume they receive and re-search that database for new client mandates, so a clean, keyword-rich resume can lead to calls for roles you never applied to.',
      },
      {
        q: 'Should I mention current CTC on my resume for Zoho Recruit?',
        a: 'It is not required on the resume itself. If the application form has CTC and notice-period fields, fill them in there, since those are the fields recruiters filter on. Leaving them blank can make your profile harder to find.',
      },
    ],
  },
  {
    slug: 'darwinbox',
    name: 'Darwinbox',
    shortName: 'Darwinbox',
    usedBy:
      'An India-built HR platform used by many mid-size and large Indian enterprises and conglomerates, including in BFSI, manufacturing, retail and new-age tech.',
    overview:
      'Darwinbox is a full HR management suite (core HR, payroll, performance) with a recruitment module. Because the same platform runs the employer\'s HR after you join, its application forms tend to be detailed and structured: candidates often enter education, employment history and compensation details field by field, alongside the uploaded resume. Recruiters filter on those structured fields and on screening criteria defined for each requisition.',
    parsingNotes: [
      'Darwinbox can parse an uploaded resume to pre-fill the application, but many employers also ask you to confirm or type employment and education details into structured fields. Treat those fields as the record recruiters actually filter on.',
      'Indian-specific fields are common: current and expected CTC, notice period, current location, and highest qualification with percentage or CGPA. Have these ready and keep them consistent with your resume.',
      'Requisitions often have screening criteria such as minimum years of experience, qualification or location. Clear, unambiguous dates and qualifications on your resume help you meet these filters.',
      'Internal job postings for existing employees also run through Darwinbox, so an up-to-date resume on file matters for internal moves as well.',
    ],
    formattingRules: [
      'Single-column layout with standard headings: "Work Experience", "Education", "Skills", "Certifications".',
      'Text-based PDF or DOCX, within the file-size limit shown on the form.',
      'Use full degree names and institutions ("B.Tech in Mechanical Engineering, VIT Vellore") with the year and score.',
      'Write employment dates as month and year for every role so the structured history matches the resume exactly.',
    ],
    commonMistakes: [
      'Typing employment dates or titles into the form that differ from the resume, which looks like a discrepancy during background verification',
      'Skipping optional fields that the employer uses as filters, such as notice period or preferred location',
      'Listing only CGPA where the form or JD asks for percentage, without giving the conversion',
      'Uploading an image-only PDF, so the pre-fill fails and the application is left incomplete',
    ],
    faqs: [
      {
        q: 'How do I know if an employer uses Darwinbox for hiring?',
        a: 'Darwinbox career portals are typically hosted on a darwinbox.in or darwinbox.com subdomain, often with the company name in the address, for example companyname.darwinbox.in. The form usually asks for detailed structured employment and education information.',
      },
      {
        q: 'Why does Darwinbox ask me to re-enter details that are already on my resume?',
        a: 'Because Darwinbox also runs the employer\'s HR records, many companies want structured, verified data from the start. Recruiters filter on those fields, so take them seriously and keep them identical to your resume.',
      },
      {
        q: 'Should I enter CGPA or percentage on a Darwinbox form?',
        a: 'Enter whatever the field asks for. If it asks for percentage and your university grades in CGPA, use your university\'s official conversion formula and mention it on the resume if space allows. CV Prime has a free CGPA to percentage converter.',
      },
    ],
  },
  {
    slug: 'keka-hire',
    name: 'Keka Hire',
    shortName: 'Keka',
    usedBy:
      'Popular with Indian startups and small-to-mid-size companies that already use Keka for HR and payroll and add its hiring module.',
    overview:
      'Keka is an India-built HR and payroll platform, and Keka Hire is its applicant tracking module. Employers publish jobs to a Keka-hosted careers page and job boards, collect applications into hiring pipelines, and parse resumes into candidate profiles. At smaller companies the hiring manager is often directly involved in reviewing the pipeline, so readability matters as much as parsing.',
    parsingNotes: [
      'Keka Hire parses uploaded resumes into candidate profiles with contact details, experience, education and skills. Standard section headings keep that mapping accurate.',
      'Jobs posted from Keka are often syndicated to job boards, and applications from those boards flow into the same pipeline. The resume you keep on job boards should be just as clean as the one you upload directly.',
      'Hiring teams move candidates through custom pipeline stages and can search the candidate list. Specific skill keywords help your profile stand out in that list.',
      'Application forms may include screening questions and India-specific fields such as notice period and expected CTC.',
    ],
    formattingRules: [
      'Single-column, one-to-two page resume with standard headings.',
      'Text-based PDF is the safe default; DOCX is also generally accepted.',
      'Put a short, role-specific summary at the top. Small-company reviewers often decide within the first few lines.',
      'Keep contact details in the main body, not in a document header or footer.',
    ],
    commonMistakes: [
      'Sending a generic resume to a startup role where the hiring manager reads every application and expects specific relevance',
      'Leaving screening questions or notice-period fields blank',
      'Using a two-column template that parses into a jumbled profile',
      'Not tailoring keywords because the company is small. Search and shortlisting inside the ATS still depend on them',
    ],
    faqs: [
      {
        q: 'How can I tell if a company is hiring through Keka?',
        a: 'Keka-hosted career pages are usually on a keka.com address with the company name, often ending in /careers, and the application form carries Keka branding.',
      },
      {
        q: 'Do small companies using Keka read every application?',
        a: 'Often yes, especially for niche roles, but not always for high-volume roles. Either way your resume is parsed into a profile first, so it needs to be both ATS-clean and quick for a person to read.',
      },
      {
        q: 'What file format should I upload to Keka Hire?',
        a: 'A text-based PDF is the safest choice. Avoid scanned documents or resumes exported as images, because the parser cannot read text from an image.',
      },
    ],
  },
];
