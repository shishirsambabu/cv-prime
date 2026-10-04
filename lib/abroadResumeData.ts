export interface AbroadCountry {
  slug: string;
  name: string;
  /** Document name recruiters in this market normally use. */
  documentTerm: string;
  /** Typical length guidance. */
  length: string;
  photo: string;
  personalDetails: string;
  paperSize: string;
  tagline: string;
  /** Hiring-market conventions that differ from Indian resumes. */
  differences: { topic: string; indiaHabit: string; localNorm: string }[];
  tips: string[];
  mistakes: string[];
  visaNote: string;
  faqs: { q: string; a: string }[];
}

const common = {
  india: (topic: string, habit: string, norm: string) => ({ topic, indiaHabit: habit, localNorm: norm }),
};

export const abroadCountries: AbroadCountry[] = [
  {
    slug: 'usa',
    name: 'USA',
    documentTerm: 'resume',
    length: 'One page for under ~10 years of experience; two pages maximum for senior roles',
    photo: 'Do not include a photo',
    personalDetails: 'Name, city/state, phone, email, LinkedIn only. Leave out date of birth, marital status, nationality, religion and father’s name.',
    paperSize: 'US Letter (8.5 × 11 in)',
    tagline: 'US-style resume for Indian professionals',
    differences: [
      common.india('Photo & personal details', 'Photo, DOB, marital status, father’s name', 'None of these. US employers avoid them to prevent discrimination claims, and many recruiters will discard resumes that include them.'),
      common.india('Document name', '“CV” or “biodata”', '“Resume” — a CV in the US usually means an academic document.'),
      common.india('Objective statement', 'Generic career objective', 'A 2–3 line professional summary with quantified results, or none at all.'),
      common.india('Education position', 'Education first, with percentages', 'Experience first once you have 1+ years of work. GPA only if strong; convert marks properly.'),
      common.india('Page size', 'A4', 'US Letter — set this before exporting to PDF so nothing gets clipped.'),
    ],
    tips: [
      'Lead every bullet with an action verb and end with a measurable result (revenue, latency, users, cost saved).',
      'Mirror the exact keywords of the job description — US ATS platforms such as Workday, Greenhouse and Lever rank on keyword match.',
      'Spell out Indian degrees and institutions once (e.g. “B.Tech, Computer Science — IIT Delhi”) so a US reader can place them.',
      'Convert CGPA only if the employer asks; otherwise list the degree and graduation year.',
      'Describe Indian employers in one phrase if they are not globally known (e.g. “Flipkart — India’s largest e-commerce marketplace”).',
    ],
    mistakes: [
      'Sending the same A4 resume with a photo and personal details used for Indian applications.',
      'Writing duties (“responsible for…”) instead of outcomes.',
      'Using multi-column or graphics-heavy templates that ATS parsers scramble.',
    ],
    visaNote: 'Resumes normally do not state visa status, but US recruiters will ask early. If you need sponsorship, be ready to say so honestly in the application form or screening call.',
    faqs: [
      { q: 'Should I put a photo on my resume for US jobs?', a: 'No. US resumes do not carry photos. Employers avoid them to reduce discrimination risk, and some ATS and recruiters will reject resumes that include one.' },
      { q: 'Is a CV or a resume used in the USA?', a: 'The word “resume” is used for almost all private-sector jobs. “CV” in the US typically means a long academic document listing publications and research.' },
      { q: 'How long should a US resume be?', a: 'One page is the norm for early-career candidates and often up to about ten years of experience. Two pages is acceptable for senior or highly technical profiles.' },
      { q: 'Should I include my CGPA or percentage?', a: 'Only if it is strong and you are early in your career. Otherwise list the degree, institution and year. Never leave raw Indian percentages unexplained.' },
    ],
  },
  {
    slug: 'uk',
    name: 'UK',
    documentTerm: 'CV',
    length: 'Two pages is standard; one page for graduates',
    photo: 'Do not include a photo',
    personalDetails: 'Name, city, phone, email, LinkedIn. Leave out date of birth, marital status and nationality.',
    paperSize: 'A4',
    tagline: 'UK-format CV for Indian professionals',
    differences: [
      common.india('Document name', '“Resume” or “biodata”', '“CV” is the everyday term in the UK, and two pages is normal.'),
      common.india('Photo & personal details', 'Photo, DOB, marital status', 'Omit them. UK equality law discourages collecting these at the CV stage.'),
      common.india('Declaration', '“I hereby declare…” closing line', 'Remove it. It looks dated in UK hiring.'),
      common.india('References', 'Reference names listed', '“References available on request” is optional; referees are usually requested later.'),
      common.india('Spelling', 'Mixed British/American', 'Use British spelling (organised, programme, specialised) consistently.'),
    ],
    tips: [
      'Open with a short personal statement (3–4 lines) that states your role, years of experience and target sector.',
      'Use reverse-chronological order and quantify results in each role.',
      'Check the employer’s sponsorship status; UK employers need a Home Office sponsor licence to hire most overseas workers, and many listings say so.',
      'Explain Indian grading briefly (e.g. “First Class equivalent”) only where it helps a UK reader.',
      'Keep layouts single-column and use standard headings like Experience, Education and Skills.',
    ],
    mistakes: [
      'Keeping the “Declaration” and signature block common in Indian CVs.',
      'Using American spellings and US Letter formatting.',
      'Listing every school from Class 10 onwards instead of highest qualifications.',
    ],
    visaNote: 'UK employers hiring overseas candidates generally need a licensed sponsor. Check the job posting and the Home Office’s published sponsor register before applying.',
    faqs: [
      { q: 'What is the difference between a CV and a resume in the UK?', a: 'In the UK, “CV” is the normal word for the document you send to employers. “Resume” is understood but less common. A UK CV is typically two pages.' },
      { q: 'Should I put a photo on a UK CV?', a: 'No. Photos are not expected and can be seen as a risk for equal-opportunity compliance.' },
      { q: 'Do I need to remove the declaration from my Indian CV?', a: 'Yes. The “I hereby declare that the above information is true” paragraph is not used in UK applications.' },
      { q: 'Should I mention visa status on my CV?', a: 'It is optional. Many candidates state their right-to-work status in one line near the top, and the application form will usually ask anyway.' },
    ],
  },
  {
    slug: 'canada',
    name: 'Canada',
    documentTerm: 'resume',
    length: 'One to two pages',
    photo: 'Do not include a photo',
    personalDetails: 'Name, city and province, phone, email, LinkedIn. No DOB, marital status or photo.',
    paperSize: 'US Letter (8.5 × 11 in)',
    tagline: 'Canadian-format resume for Indian professionals',
    differences: [
      common.india('Photo & personal details', 'Photo, DOB, marital status', 'Not used. Canadian human-rights law discourages them in hiring.'),
      common.india('Canadian experience', 'Not a concern', 'Many employers ask for “Canadian experience”; highlight transferable results, certifications and any Canadian projects or volunteer work.'),
      common.india('Language', 'English only', 'Canadian employers may value French; list proficiency honestly if you have it.'),
      common.india('Page size', 'A4', 'US Letter is standard in Canada.'),
      common.india('Credentials', 'Degree names only', 'Add a line explaining credential equivalency if you have had one assessed (e.g. via WES).'),
    ],
    tips: [
      'Use a skills-and-achievements-led layout; Canadian recruiters scan quickly.',
      'Show teamwork and communication outcomes alongside technical ones.',
      'Mention credential assessments (WES, ICAS) if you have them.',
      'Add volunteering or local projects to offset the “no Canadian experience” objection.',
    ],
    mistakes: [
      'Sending an A4 resume with a photo and personal details.',
      'Leaving out province and city, which Canadian recruiters use to check where you are.',
      'Assuming Indian company names are recognised without a one-line description.',
    ],
    visaNote: 'State your work authorisation status (for example “Permanent Resident” or “Open work permit”) in one line if you have it — Canadian recruiters often filter on it.',
    faqs: [
      { q: 'Is a resume or CV used in Canada?', a: 'Resume is the term for almost all jobs outside academia and research. Quebec employers may use French-language CVs.' },
      { q: 'Do Canadian employers need a photo?', a: 'No. Photos and personal details such as age and marital status should be left off.' },
      { q: 'How can I address the “Canadian experience” requirement?', a: 'Emphasise transferable results, add Canadian certifications or volunteering, and mention any credential assessment you have completed.' },
      { q: 'What paper size should I use?', a: 'US Letter. If you export from CV Prime, check the page size before downloading a PDF to send to Canadian employers.' },
    ],
  },
  {
    slug: 'australia',
    name: 'Australia',
    documentTerm: 'resume',
    length: 'Two to three pages is acceptable',
    photo: 'Do not include a photo',
    personalDetails: 'Name, suburb/city, phone, email, LinkedIn. No DOB, marital status or photo.',
    paperSize: 'A4',
    tagline: 'Australian-format resume for Indian professionals',
    differences: [
      common.india('Length', 'Strict one or two pages', 'Two to three pages is normal for experienced candidates.'),
      common.india('Photo & personal details', 'Photo, DOB, marital status', 'Omit them.'),
      common.india('Referees', 'Not listed', 'Two referees with contact details are commonly listed at the end, or offered on request.'),
      common.india('Key selection criteria', 'Not applicable', 'Government roles often require written responses to selection criteria alongside the resume.'),
      common.india('Spelling', 'Mixed', 'Use Australian/British spelling.'),
    ],
    tips: [
      'Lead with a career summary and key skills, then reverse-chronological experience.',
      'Provide referees, ideally a recent manager, with consent.',
      'For government or public-sector roles, respond to every selection criterion with an example.',
      'Check whether the occupation appears on the relevant skilled-occupation list before relocating.',
    ],
    mistakes: [
      'Cutting a strong resume to one page when two or three are expected.',
      'Omitting referees when the advert asks for them.',
      'Skipping selection criteria responses for government roles.',
    ],
    visaNote: 'Employer-sponsored and skilled-migration routes depend on your occupation and the current rules; check the Department of Home Affairs for up-to-date requirements.',
    faqs: [
      { q: 'How long should an Australian resume be?', a: 'Two to three pages is acceptable for experienced professionals; early-career candidates usually keep to two.' },
      { q: 'Should I include referees on an Australian resume?', a: 'Often yes, usually two referees with their relationship to you and contact details, or “available on request”.' },
      { q: 'Is a photo required?', a: 'No. Do not include a photo, date of birth or marital status.' },
      { q: 'Is it a CV or a resume in Australia?', a: 'Both terms are used. “Resume” is more common for most jobs; “CV” appears in academic and medical roles.' },
    ],
  },
  {
    slug: 'uae',
    name: 'UAE',
    documentTerm: 'CV',
    length: 'Two pages for most roles',
    photo: 'A professional photo is still common practice in the Gulf; add one only if the employer or recruiter expects it',
    personalDetails: 'Name, current location, phone, email, nationality and visa status are commonly included; DOB and marital status are optional.',
    paperSize: 'A4',
    tagline: 'Gulf-style CV for Indian professionals',
    differences: [
      common.india('Nationality & visa status', 'Often omitted or buried', 'State nationality and visa status (employment, visit, cancelled) near the top. Recruiters filter on it.'),
      common.india('Photo', 'Common', 'More accepted than in the US/UK, but still optional. Use a professional headshot if included.'),
      common.india('Notice period', 'Mentioned in interviews', 'Add availability or notice period in the header or summary.'),
      common.india('Gulf experience', 'Not applicable', 'Highlight any Gulf experience and relevant licences or attested certificates.'),
      common.india('Attestation', 'Not required', 'Degree attestation is typically needed after an offer; mention it is available if true.'),
    ],
    tips: [
      'Put visa status and notice period at the top — recruiters triage on them.',
      'Highlight experience with international clients or regional markets (GCC, MENA).',
      'Include relevant professional licences, and mention degree attestation readiness if applicable.',
      'Mirror the job advert’s keywords; many UAE recruiters use LinkedIn and Naukrigulf alongside ATS tools.',
    ],
    mistakes: [
      'Omitting visa status and notice period.',
      'Using an unprofessional or cropped social photo.',
      'Sending a five-page CV; two pages is the norm.',
    ],
    visaNote: 'Employers usually sponsor employment visas after an offer. Say clearly whether you are already in the UAE on a visit or employment visa.',
    faqs: [
      { q: 'Should I add a photo to a UAE CV?', a: 'It is more accepted in the Gulf than in the US or UK, but not mandatory. If you add one, use a professional headshot.' },
      { q: 'What personal details do UAE recruiters expect?', a: 'Nationality, current location and visa status are commonly shown, since they affect hiring speed. Date of birth and marital status are optional.' },
      { q: 'Is it a CV or a resume in the UAE?', a: '“CV” is the common term in the Gulf region.' },
      { q: 'How long should a UAE CV be?', a: 'Two pages for most professionals. Senior roles may justify a little more, but concise is better.' },
    ],
  },
  {
    slug: 'germany',
    name: 'Germany',
    documentTerm: 'CV (Lebenslauf)',
    length: 'One to two pages, tabular and chronological',
    photo: 'A professional photo is traditional but optional; many modern employers no longer require it',
    personalDetails: 'Name, address, phone, email. Date of birth is traditional but optional; skip marital status.',
    paperSize: 'A4',
    tagline: 'German-style CV for Indian professionals',
    differences: [
      common.india('Format', 'Narrative paragraphs', 'A clean, tabular Lebenslauf with dates in the left column and details on the right.'),
      common.india('Photo', 'Often included', 'Traditional but optional. If you include one, make it professional.'),
      common.india('Language levels', 'Rarely stated', 'State German and English levels using the CEFR scale (A1–C2).'),
      common.india('Gaps', 'Often not explained', 'Account for every period; explain gaps briefly.'),
      common.india('Certificates', 'Rarely attached', 'Employers often expect copies of degrees and references with the application pack.'),
    ],
    tips: [
      'State German proficiency in CEFR levels; English-language roles still value basic German.',
      'Keep dates exact (month/year) and leave no unexplained gaps.',
      'Check your degree’s recognition via the anabin database or the relevant authority where required.',
      'Consider EU Blue Card eligibility if your role and salary qualify.',
    ],
    mistakes: [
      'Leaving unexplained gaps.',
      'Writing in a style that is too promotional; German CVs favour factual tone.',
      'Skipping language levels.',
    ],
    visaNote: 'Many skilled workers move on an EU Blue Card or a skilled-worker visa. Rules and thresholds change, so verify them on the official Make-it-in-Germany portal.',
    faqs: [
      { q: 'Do German CVs need a photo?', a: 'It was traditional, but it is no longer mandatory and many employers accept CVs without one.' },
      { q: 'What is a Lebenslauf?', a: 'It is the German-style tabular CV, usually one to two pages, with exact dates and no narrative paragraphs.' },
      { q: 'Should I write my CV in German or English?', a: 'Follow the language of the job advert. International teams often accept English, while local employers prefer German.' },
      { q: 'How do I show language levels?', a: 'Use CEFR levels such as German B1 or English C1, and only list levels you can demonstrate.' },
    ],
  },
  {
    slug: 'singapore',
    name: 'Singapore',
    documentTerm: 'resume',
    length: 'Two pages',
    photo: 'Optional; many employers do not require one',
    personalDetails: 'Name, phone, email, LinkedIn. Nationality or work-pass status is commonly mentioned; skip marital status.',
    paperSize: 'A4',
    tagline: 'Singapore-format resume for Indian professionals',
    differences: [
      common.india('Work-pass status', 'Not applicable', 'State whether you need an Employment Pass or already hold work authorisation.'),
      common.india('Salary expectations', 'Mentioned in interviews', 'Application forms often ask for current and expected salary; keep it off the resume unless requested.'),
      common.india('Regional experience', 'India-focused', 'Highlight APAC or international exposure.'),
      common.india('Photo', 'Common', 'Optional and increasingly omitted.'),
      common.india('Length', 'One or two pages', 'Two pages is typical.'),
    ],
    tips: [
      'Mention APAC or cross-border work and any multi-country stakeholders.',
      'State your pass situation clearly if relevant to eligibility.',
      'Quantify business impact and name globally recognised employers or clients.',
      'Check the job advert’s language on salary and notice period.',
    ],
    mistakes: [
      'Leaving work authorisation ambiguous.',
      'Adding expected salary on the resume when the employer did not ask.',
      'Using vague descriptions of India-only employers.',
    ],
    visaNote: 'Work-pass rules, such as the Employment Pass qualifying criteria, are updated periodically. Check the Ministry of Manpower for the latest requirements.',
    faqs: [
      { q: 'Is a photo needed for a Singapore resume?', a: 'No. It is optional, and many employers prefer resumes without one.' },
      { q: 'Should I state my visa or pass status?', a: 'Yes, briefly, if you already hold work authorisation. If you need sponsorship, be upfront in the application or screening call.' },
      { q: 'How long should a Singapore resume be?', a: 'Two pages is typical for experienced professionals.' },
      { q: 'Should I include expected salary?', a: 'Only when asked. Many application forms include a field for it.' },
    ],
  },
];

export const abroadCountrySlugs = abroadCountries.map((c) => c.slug);
export const abroadCountryMap = new Map(abroadCountries.map((c) => [c.slug, c]));
