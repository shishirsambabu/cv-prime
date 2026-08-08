export interface AtsSystemData {
  slug: string;
  name: string;
  shortName: string;
  usedBy: string;
  overview: string;
  parsingNotes: string[];
  formattingRules: string[];
  commonMistakes: string[];
  faqs: Array<{ q: string; a: string }>;
}

export const atsSystems: AtsSystemData[] = [
  {
    slug: 'workday',
    name: 'Workday',
    shortName: 'Workday',
    usedBy: 'Large MNCs and enterprises in India — Amazon, Microsoft, Unilever, Accenture, and most Fortune 500 India offices run recruiting on Workday.',
    overview:
      'Workday is an enterprise HCM (Human Capital Management) suite with a built-in recruiting module. It parses uploaded resumes into structured candidate profiles (contact info, work history, education, skills) and lets recruiters filter and search that structured data. A resume that is not parsed cleanly into the right fields effectively becomes invisible to search and filters, even if a recruiter could read it manually.',
    parsingNotes: [
      'Workday extracts each work experience entry as a separate structured block — company, title, start date, end date, and description. Keep these clearly separated per role so each field maps correctly.',
      'Dates should use an unambiguous, consistent format (e.g. "Jan 2023 – Present") — Workday can mis-parse dates in slashes-only or region-ambiguous formats.',
      'Workday often auto-fills an application form from your resume and then asks you to review it. Always check the auto-filled fields before submitting — Workday parsing errors are visible to you at that step, so fix mismatches manually rather than assuming they will be corrected later.',
      'Skills listed only inside paragraph text are parsed less reliably than skills in a dedicated Skills section with clear delimiters (commas or line breaks).',
    ],
    formattingRules: [
      'Use a single-column, linear layout — Workday\'s parser reads left-to-right, top-to-bottom and struggles with multi-column or table-based resumes.',
      'Use standard section headings: "Work Experience", "Education", "Skills", "Certifications".',
      'Submit as a text-based PDF or DOCX, not a scanned image.',
      'Avoid headers/footers for contact information — some Workday parser configurations skip header/footer content entirely.',
      'Keep formatting simple: standard fonts, no text boxes, no embedded graphics for skill ratings.',
    ],
    commonMistakes: [
      'Assuming Workday\'s auto-fill is always correct and submitting without checking the parsed fields',
      'Using non-standard date formats that Workday cannot map to a start/end range',
      'Combining multiple roles at the same company into one block without clear title/date breaks, which merges tenure incorrectly',
      'Using a two-column template — a very common cause of scrambled or missing sections in Workday',
    ],
    faqs: [
      {
        q: 'Does Workday reject resumes automatically?',
        a: 'Workday itself does not usually auto-reject based on parsing alone — it structures your resume into a candidate profile that recruiters search and filter. A poorly parsed resume is not deleted, but it becomes harder to find and less complete when a recruiter reviews it, which functions like a rejection in practice.',
      },
      {
        q: 'Should I upload a PDF or DOCX to a Workday application?',
        a: 'A text-based PDF is generally safe with Workday and preserves your formatting. DOCX is also well supported. Avoid scanned or image-only PDFs — Workday cannot extract text from an image.',
      },
      {
        q: 'Why do some Workday applications ask me to manually re-enter my whole work history?',
        a: 'Some companies configure Workday to require full manual entry even after resume upload, either to standardize data or because their parsing confidence was low for your specific resume. Treat the resume upload as a courtesy copy in that case, and make sure the manual fields are complete and accurate — those are what recruiters actually search on.',
      },
    ],
  },
  {
    slug: 'greenhouse',
    name: 'Greenhouse',
    shortName: 'Greenhouse',
    usedBy: 'Startups and product companies in India — many Series B+ startups, D2C brands, and fintech companies run hiring through Greenhouse.',
    overview:
      'Greenhouse is a recruiting platform popular with startups and product companies. It parses resumes reasonably well compared to older enterprise ATS, but recruiters still rely heavily on keyword search and structured filters (current title, years of experience, skills) across its database, so a resume with clear, literal keyword matches to the job description performs better in searches even when a human eventually reads every application.',
    parsingNotes: [
      'Greenhouse parses most standard PDF and DOCX resumes accurately, including single-column resumes with a Skills section.',
      'Because Greenhouse-using companies tend to move fast and review applications manually more often than large enterprises, a strong first-page summary and clear titles matter more here than in pure-ATS-filtered systems.',
      'Greenhouse supports recruiters tagging and searching candidates by keyword — matching the exact terminology from the job posting (tool names, frameworks, methodologies) improves how often you surface in a recruiter search.',
      'Cover letters and free-text answers submitted through Greenhouse forms are searchable too, so keep them consistent with your resume\'s keywords rather than treating them as a separate, unrelated document.',
    ],
    formattingRules: [
      'Single-column layout with clear section headings still parses most reliably.',
      'Use a dedicated Skills section in addition to weaving skills into experience bullets.',
      'PDF is generally the safer default for Greenhouse; keep it text-based, not a scanned image.',
      'Keep your most recent, most relevant role and its impact visible without scrolling on the first page — many Greenhouse applications are still skimmed by a human within seconds.',
    ],
    commonMistakes: [
      'Treating Greenhouse like a fully automated black-box filter and neglecting the human-readable quality of the resume — many Greenhouse customers do manual first-pass review',
      'Leaving the Skills section thin because the resume "reads well" — recruiter keyword search still depends on explicit skill listing',
      'Submitting inconsistent job titles between the resume and the application form fields, which looks like a discrepancy during manual review',
      'Ignoring the free-text "why this role" fields — leaving them generic wastes a chance to reinforce keyword relevance',
    ],
    faqs: [
      {
        q: 'Is Greenhouse stricter or more lenient than Workday for resume parsing?',
        a: 'Greenhouse\'s resume parser is generally considered more forgiving than older enterprise systems, and because it is popular with startups, a larger share of applications get a human first look rather than being filtered purely by parsing. That said, keyword relevance and clean formatting still meaningfully affect whether you get shortlisted.',
      },
      {
        q: 'Do Greenhouse companies read every application?',
        a: 'It varies by company size and role volume. Early-stage startups using Greenhouse often do read most applications manually for a given role; larger Greenhouse customers with high application volume rely more on keyword search and filters, similar to other ATS platforms.',
      },
      {
        q: 'Does my cover letter matter in Greenhouse applications?',
        a: 'Yes — Greenhouse forms commonly include a cover letter or free-text field, and because manual review is more common with Greenhouse-using companies, a specific, relevant response can meaningfully help. Keep it aligned with the keywords in your resume rather than generic.',
      },
    ],
  },
  {
    slug: 'taleo',
    name: 'Oracle Taleo',
    shortName: 'Taleo',
    usedBy: 'Large legacy enterprises and IT services companies in India — several Fortune 500 companies and large Indian IT/BPO firms still run recruiting on Taleo.',
    overview:
      'Oracle Taleo is one of the oldest enterprise ATS platforms still widely used, particularly at large, established companies with long-running HR infrastructure. Taleo\'s resume parser is known to be less forgiving than newer platforms — it struggles more with complex formatting, and recruiters using Taleo often rely heavily on exact keyword search against the parsed text, making literal keyword matching especially important.',
    parsingNotes: [
      'Taleo\'s parser is more sensitive to formatting than modern ATS — multi-column layouts, tables, and text boxes are significantly more likely to produce garbled or missing fields.',
      'Because Taleo has been in use for a long time, some company configurations still expect DOCX over PDF — check the application instructions or the file types explicitly accepted before choosing a format.',
      'Exact keyword matching matters more in Taleo than in more modern ATS. Mirror the job description\'s exact phrasing for skills, tools, and job titles rather than relying on synonyms.',
      'Abbreviations and acronyms are parsed literally — if the JD says "Business Analyst" and your resume only says "BA", the exact-string match can fail even though the meaning is identical to a human reader.',
    ],
    formattingRules: [
      'Use the simplest possible single-column layout — this matters more with Taleo than with most other systems.',
      'Avoid tables, columns, text boxes, and header/footer content entirely.',
      'Use plain, standard section headings without creative naming.',
      'When in doubt about file format, DOCX is often the safer default for older Taleo configurations, unless the job posting explicitly asks for PDF.',
    ],
    commonMistakes: [
      'Using a visually creative or two-column template, which is more likely to break in Taleo than in newer ATS platforms',
      'Relying on synonyms or abbreviations instead of the job description\'s exact keyword phrasing',
      'Assuming a resume that parses fine in Workday or Greenhouse will parse the same way in Taleo — the platforms differ meaningfully in tolerance for formatting complexity',
      'Skipping a dedicated Skills section because "the bullets already mention it" — Taleo\'s older parsing logic benefits from explicit, separated keyword lists',
    ],
    faqs: [
      {
        q: 'Is Oracle Taleo still widely used in India?',
        a: 'Yes, though its use is concentrated in large, established enterprises and IT services companies rather than startups. Many companies have migrated to newer platforms like Workday or Greenhouse, but Taleo remains common at organizations with long-standing HR systems.',
      },
      {
        q: 'Why does my resume look fine in Word but parse badly in Taleo?',
        a: 'Taleo\'s parser is generally less tolerant of formatting complexity than modern ATS. Elements that render fine visually in Word — such as text boxes, tables, or multi-column layouts — can be extracted incorrectly or dropped entirely by Taleo\'s parsing engine, even though the document looks unchanged to you.',
      },
      {
        q: 'Should I use exact keywords or natural variations for a Taleo application?',
        a: 'Favor exact keywords from the job description. Taleo\'s keyword matching tends to be more literal than newer AI-assisted ATS, so mirroring the JD\'s specific terms (tool names, certifications, job titles) is more reliable than using natural-sounding synonyms.',
      },
    ],
  },
  {
    slug: 'icims',
    name: 'iCIMS',
    shortName: 'iCIMS',
    usedBy: 'Mid-size to large companies across BFSI, retail, and manufacturing in India, alongside many US-headquartered companies with India hiring teams.',
    overview:
      'iCIMS is a cloud-based recruiting platform used by a broad range of company sizes, from mid-market to large enterprise. It combines resume parsing with configurable application workflows, meaning the exact experience — how many fields you re-enter, whether a screening questionnaire is required — varies significantly by how each employer has set it up.',
    parsingNotes: [
      'iCIMS parses standard single-column resumes reliably, extracting contact details, work history, and education into structured fields.',
      'Many iCIMS-configured applications include additional knockout screening questions (e.g. minimum experience, work authorization, notice period) — these are evaluated independently of resume parsing and can filter a candidate out even with a perfectly parsed resume, so answer them carefully and honestly.',
      'Because iCIMS is heavily configured per employer, the same resume can behave differently across two companies both using iCIMS — one may auto-advance you, another may require a full manual profile.',
      'Skills sections and clearly dated experience entries remain the most reliable way to ensure consistent parsing across different iCIMS configurations.',
    ],
    formattingRules: [
      'Single-column, clearly sectioned layout with standard headings.',
      'Text-based PDF or DOCX, not a scanned document.',
      'Keep dates and job titles consistent and unambiguous.',
      'Answer any screening questionnaire fields completely — an incomplete questionnaire can block your application from advancing regardless of resume quality.',
    ],
    commonMistakes: [
      'Skipping or rushing through the knockout screening questions that many iCIMS applications include after resume upload',
      'Assuming resume parsing is the only filter — iCIMS workflows often add configurable, employer-specific screening logic on top of parsing',
      'Using inconsistent contact details between the resume and the application profile, which can create duplicate or conflicting candidate records',
      'Leaving optional profile fields blank when a company\'s iCIMS setup weighs completeness in its candidate ranking',
    ],
    faqs: [
      {
        q: 'What makes iCIMS different from other ATS platforms?',
        a: 'iCIMS is highly configurable — each employer sets up its own application workflow, screening questions, and parsing rules on top of the same underlying platform. This means your experience and what gets checked can differ noticeably between two companies that both use iCIMS.',
      },
      {
        q: 'Can a good resume still get filtered out in iCIMS?',
        a: 'Yes. Many iCIMS applications add knockout screening questions after the resume upload — such as minimum years of experience, work authorization, or expected notice period. These are evaluated separately from resume parsing and can end an application regardless of how well the resume itself is formatted.',
      },
      {
        q: 'Does iCIMS support resume parsing for non-English or India-specific resumes?',
        a: 'iCIMS parses English-language resumes reliably. For India-specific conventions (like listing notice period or current CTC), include them explicitly in the resume or the relevant application field if the employer requests them, since these are not standard fields the parser infers automatically.',
      },
    ],
  },
  {
    slug: 'successfactors',
    name: 'SAP SuccessFactors',
    shortName: 'SuccessFactors',
    usedBy: 'Large Indian IT services and consulting firms — TCS, Infosys, Wipro, HCL, and similar large enterprises commonly run recruiting on SAP SuccessFactors.',
    overview:
      'SAP SuccessFactors is an enterprise HCM suite widely deployed at large Indian IT services companies for high-volume hiring. At this scale, recruiting teams depend heavily on structured search and filtering across thousands of applications, which makes clean parsing and precise keyword matching especially important — a resume that is hard to parse is effectively invisible in a high-volume search rather than being individually reviewed.',
    parsingNotes: [
      'SuccessFactors extracts work history, education, and skills into structured candidate records used for bulk search and filtering, which is standard practice at high-volume recruiters.',
      'Given the very high application volumes typical at large IT services firms, a resume that parses cleanly and matches the job description\'s literal keywords has a meaningfully better chance of surfacing in a recruiter\'s filtered search.',
      'Simple, single-column formatting with a clear Skills section matters more here than presentation flourishes — recruiters using SuccessFactors at scale are optimizing for fast keyword and criteria filtering, not visual design.',
      'Consistent, unambiguous dates and job titles reduce the chance of your experience being mis-categorized in bulk search results.',
    ],
    formattingRules: [
      'Strict single-column layout — high-volume SuccessFactors deployments favor simple, reliably parseable resumes over creative formatting.',
      'Explicit Skills section listing tools, technologies, and certifications individually.',
      'Text-based PDF or DOCX, following whatever the specific application portal requests.',
      'Use the exact job title and technology names from the job description wherever accurate — bulk keyword search rewards literal matches at this scale.',
    ],
    commonMistakes: [
      'Using a visually dense or two-column resume format that is harder to parse at high volume',
      'Relying on a general "software engineer" profile without the specific technologies and certifications the JD lists, which reduces matches in bulk keyword search',
      'Assuming a single generic resume works for every role at a large IT services company — tailoring keywords per job description meaningfully improves search visibility at this scale',
      'Omitting notice period, current location, and willingness-to-relocate details that recruiters at large Indian IT firms commonly filter on',
    ],
    faqs: [
      {
        q: 'Why do large Indian IT companies rely so heavily on ATS keyword matching?',
        a: 'Companies like TCS, Infosys, and Wipro receive extremely high application volumes for many open roles. At that scale, recruiters use structured search and filters across the ATS database rather than reading every resume individually, which makes clean parsing and precise keyword matching disproportionately important.',
      },
      {
        q: 'Should I customize my resume for each SuccessFactors application?',
        a: 'Yes. Because bulk keyword search is central to how large SuccessFactors deployments work, aligning your resume\'s Skills section and job titles closely with each specific job description meaningfully improves how often you surface in a recruiter\'s filtered search results.',
      },
      {
        q: 'Does SuccessFactors support uploading a resume from Naukri or LinkedIn directly?',
        a: 'Some SuccessFactors-configured career portals allow importing a profile from LinkedIn or a resume file, but the specific integrations vary by employer. When in doubt, upload a clean, tailored PDF or DOCX resume directly rather than relying on an imported profile to carry all the right keywords.',
      },
    ],
  },
];

export const atsSystemsMap: Record<string, AtsSystemData> = Object.fromEntries(
  atsSystems.map((system) => [system.slug, system]),
);

export const atsSystemSlugs: string[] = atsSystems.map((system) => system.slug);
