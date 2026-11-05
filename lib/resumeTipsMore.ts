export interface ResumeTipSection {
  heading: string;
  body: string;
  points?: string[];
}

export interface ResumeTipFaq {
  q: string;
  a: string;
}

export interface ResumeTipData {
  slug: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  intro: string;
  verdictLabel: string;
  verdict: string;
  sections: ResumeTipSection[];
  faqs: ResumeTipFaq[];
  related: { href: string; label: string; desc: string }[];
  hubDesc: string;
}

export const resumeTipsMore: ResumeTipData[] = [
  {
    slug: 'photo-on-resume',
    navLabel: 'Photo on a Resume',
    metaTitle: 'Photo on Resume India 2026 — Should You Add One?',
    metaDescription:
      'Should you put a photo on your resume in India? Learn when a photo helps, when it hurts ATS parsing, and what to do for MNC, startup, government and Gulf applications.',
    keywords: [
      'photo on resume india',
      'should i put photo on resume',
      'resume with photo or without photo',
      'passport size photo on cv india',
      'photo on resume ats',
    ],
    h1: 'Photo on a resume in India — should you add one in 2026?',
    intro:
      'Short answer: for most corporate, IT and startup jobs in India, leave the photo off. A photo takes space, can break ATS parsing and gives you nothing at the screening stage. There are a few exceptions — here is how to decide.',
    verdictLabel: 'The verdict',
    verdict:
      'No photo for MNC, IT, startup and most private-sector applications. Add one only when the employer or the format (some Gulf, European and government applications) asks for it.',
    sections: [
      {
        heading: 'Why a photo usually hurts more than it helps',
        body: 'Applicant tracking systems read text, not images. A photo does not add anything the system can score, and it can cause real problems:',
        points: [
          'Photos placed inside header tables or text boxes can push your name and contact details out of the order the parser expects.',
          'It uses space that a quantified achievement bullet could fill.',
          'Many MNCs run structured, bias-aware screening and prefer to evaluate skills and experience first.',
          'A badly cropped or casual photo creates a negative first impression you cannot control.',
        ],
      },
      {
        heading: 'When a photo is acceptable or expected',
        body: 'Check the job posting and application form first. A photo is more likely to be expected in these cases:',
        points: [
          'Some Gulf / Middle East applications, where photo CVs are still common in certain sectors.',
          'Biodata-style applications for certain government, defence or marriage-adjacent formats — see our biodata guide.',
          'Roles where appearance is part of the job (modelling, on-screen, front-of-house hospitality), where the employer asks for it.',
          'Campus placement forms that ask you to upload a photo separately — upload it in the form, not on the resume.',
        ],
      },
      {
        heading: 'If you do add a photo: the safe way',
        body: 'Keep the photo out of the parsing path so the text stays readable:',
        points: [
          'Use a plain, high-resolution headshot: neutral background, formal clothing, face clearly visible.',
          'Place it top-right in a simple layout — do not put contact details inside a table next to it.',
          'Keep a second photo-free version of the same resume for online portals and ATS uploads.',
          'Export as a text-based PDF, not a flattened image.',
        ],
      },
      {
        heading: 'What to put in that space instead',
        body: 'Without a photo you gain a header area for details that recruiters actually use: your name, city, phone, professional email, a LinkedIn URL and a portfolio or GitHub link. Add a three-line summary below it so the first screen of your resume says who you are and what you deliver.',
      },
    ],
    faqs: [
      {
        q: 'Should I put a photo on my resume in India?',
        a: 'For most corporate, IT, consulting and startup roles, no. Recruiters and ATS do not score photos, and a photo can disturb parsing. Add one only if the employer or application format explicitly asks.',
      },
      {
        q: 'Does a photo affect ATS parsing?',
        a: 'It can. Images themselves are ignored, but photos placed in tables, text boxes or multi-column headers can scramble the reading order of your name and contact details. A single-column, text-first layout is safest.',
      },
      {
        q: 'What about resumes for Gulf countries?',
        a: 'Practices vary by country, sector and employer. Some Gulf employers still accept or expect photo CVs. Follow the instructions in the job posting; if unsure, keep a photo-free version and a photo version ready.',
      },
      {
        q: 'Is a photo needed for government job applications?',
        a: 'Government applications usually take the photo through the application form or portal rather than on the resume. Follow the notification exactly and upload the photo where the form asks.',
      },
      {
        q: 'Can I add a photo to my LinkedIn instead?',
        a: 'Yes. A professional LinkedIn photo is the standard way to give recruiters a face to the name without affecting your resume.',
      },
    ],
    related: [
      { href: '/biodata-format', label: 'Biodata format', desc: 'When a photo-style format is expected' },
      { href: '/resume-tips/resume-font-and-layout', label: 'Resume font & layout', desc: 'ATS-safe formatting rules' },
      { href: '/ats-checker', label: 'Free ATS checker', desc: 'Test whether your file parses cleanly' },
    ],
    hubDesc: 'When a photo helps, when it hurts ATS parsing, and what to do for MNC, government and Gulf applications.',
  },
  {
    slug: 'hobbies-and-interests',
    navLabel: 'Hobbies & Interests',
    metaTitle: 'Hobbies and Interests on a Resume India 2026 — What to List',
    metaDescription:
      'Should you list hobbies and interests on your resume? See which ones add value, which to skip, and how to word them, for freshers and professionals in India.',
    keywords: [
      'hobbies and interests for resume',
      'hobbies to put on resume india',
      'interests section resume',
      'hobbies for fresher resume',
      'extracurricular activities on resume',
    ],
    h1: 'Hobbies and interests on a resume — what to list in 2026',
    intro:
      'A hobbies section is optional. It helps when it shows a skill relevant to the job or fills a gap for a fresher; it hurts when it is generic filler. Here is how to decide and how to word it.',
    verdictLabel: 'The verdict',
    verdict:
      'Include hobbies only if there is room after your experience, projects and skills, and only if they show something relevant. Never let them push out substantive content.',
    sections: [
      {
        heading: 'Who should include a hobbies section',
        body: 'The value depends on how much professional content you have:',
        points: [
          'Freshers and students with limited experience: yes, if they show leadership, teamwork or initiative (club roles, competitive sport, volunteering).',
          'Early-career professionals (1–3 years): optionally, one short line, if space allows.',
          'Experienced professionals (5+ years): usually skip it — use the space for achievements.',
          'Career changers: only if a hobby demonstrates a skill in the new field (e.g. building apps, writing, data projects).',
        ],
      },
      {
        heading: 'Hobbies that add value',
        body: 'Choose activities that signal transferable skills, and be specific:',
        points: [
          'Team sports or captaincy — teamwork and leadership.',
          'Open-source contributions, hackathons, competitive programming — technical initiative.',
          'Blogging, public speaking, debate — communication.',
          'Volunteering or NGO work — responsibility and community involvement.',
          'Learning languages or music — discipline and sustained effort, when stated with a level or achievement.',
        ],
      },
      {
        heading: 'Hobbies to skip',
        body: 'Generic or potentially distracting entries add nothing:',
        points: [
          '"Reading", "listening to music", "surfing the internet" with no detail.',
          'Anything controversial, political or religious unless directly relevant to the role.',
          'Passive activities that show no skill or effort.',
          'More than three or four items — a long list reads as filler.',
        ],
      },
      {
        heading: 'How to word and place it',
        body: 'Put the section at the bottom of the resume under the heading "Interests" or "Extracurricular activities". Add a short qualifier to make each item concrete, for example: "Chess — represented college at inter-university tournaments" or "Open source — 12 merged pull requests to community projects". Keep it to one or two lines, in plain text so ATS can read it.',
      },
    ],
    faqs: [
      {
        q: 'Should I put hobbies on my resume?',
        a: 'Only if there is space left after your experience, skills and projects, and the hobbies show something relevant. Freshers benefit most; experienced professionals can usually skip it.',
      },
      {
        q: 'What hobbies should a fresher list?',
        a: 'Pick two or three that show initiative or teamwork: sports with a team role, hackathons, coding clubs, volunteering, writing or public speaking. Add a short detail for each.',
      },
      {
        q: 'How many hobbies should I include?',
        a: 'Two to four at most, on one or two lines. A longer list looks like padding.',
      },
      {
        q: 'Do ATS systems read the hobbies section?',
        a: 'ATS parses it like any other text, but it rarely contributes to keyword matching unless the hobby overlaps with job skills. Do not rely on it for ranking.',
      },
      {
        q: 'Is "Interests" or "Hobbies" the better heading?',
        a: '"Interests" is the more professional-sounding and common choice. "Extracurricular activities" suits students who list clubs and roles.',
      },
    ],
    related: [
      { href: '/fresher-resume', label: 'Fresher resume guide', desc: 'What freshers should include' },
      { href: '/resume-tips/skills-section', label: 'Skills section', desc: 'Where skills belong on a resume' },
      { href: '/resume-tips/resume-length', label: 'Resume length', desc: 'How much space you actually have' },
    ],
    hubDesc: 'Which hobbies add value, which to skip, and how to word them for freshers and professionals.',
  },
  {
    slug: 'resume-font-and-layout',
    navLabel: 'Resume Font & Layout',
    metaTitle: 'Best Resume Font, Size and Margins 2026 — ATS-Safe Layout',
    metaDescription:
      'Which font, font size and margins should a resume use? Get ATS-safe guidelines for fonts, spacing, headings, columns and file format for the Indian job market.',
    keywords: [
      'best font for resume',
      'resume font size',
      'resume margins',
      'ats friendly resume font',
      'resume layout india',
      'one column vs two column resume',
    ],
    h1: 'Best resume font, size and layout for ATS in 2026',
    intro:
      'Formatting does not get you hired, but bad formatting can get you rejected: unreadable fonts, cramped margins and complex layouts hurt both human readers and parsers. These are safe defaults.',
    verdictLabel: 'The quick answer',
    verdict:
      'Use a standard font (Arial, Calibri, Helvetica, Georgia or similar), 10–12 pt body text, 0.5–1 inch margins, a single-column layout and standard section headings. Save as a text-based PDF unless told otherwise.',
    sections: [
      {
        heading: 'Fonts that are safe',
        body: 'Pick one clean, widely available font and use it throughout:',
        points: [
          'Sans-serif: Arial, Calibri, Helvetica, Verdana — clear on screen and in print.',
          'Serif: Georgia, Cambria, Times New Roman — acceptable for traditional fields such as law, academia and finance.',
          'Avoid decorative or script fonts; they can be unreadable and may not embed properly.',
          'Use at most two font weights/styles (regular and bold) plus italics sparingly.',
        ],
      },
      {
        heading: 'Font size, spacing and margins',
        body: 'Readable beats compact. Typical ranges that work well:',
        points: [
          'Body text: 10–12 pt. Below 10 pt becomes hard to read when printed.',
          'Name: 16–24 pt. Section headings: 12–14 pt, bold.',
          'Margins: 0.5 to 1 inch on all sides. Do not shrink below 0.5 inch to force a fit.',
          'Line spacing: 1.0 to 1.15, with a clear gap between sections.',
        ],
      },
      {
        heading: 'Layout choices that protect ATS parsing',
        body: 'Parsers read top-to-bottom, left-to-right. Complex layouts can scramble that order:',
        points: [
          'Prefer a single column. If you use two columns, keep them simple and test the file in an ATS checker.',
          'Avoid tables, text boxes, headers/footers for key details, and graphics for skill ratings.',
          'Use standard headings: Summary, Experience, Education, Skills, Projects.',
          'Use real bullet characters, not images, and consistent date formats (e.g. Jun 2023 – Present).',
        ],
      },
      {
        heading: 'File format and naming',
        body: 'Unless the posting says otherwise, submit a text-based PDF (exported from your builder or word processor, not a scanned image). Use a clear filename such as "Firstname_Lastname_Resume.pdf". Some portals prefer .docx — follow the instruction given.',
      },
    ],
    faqs: [
      {
        q: 'What is the best font for a resume?',
        a: 'There is no single best font, but clean and common ones such as Arial, Calibri, Helvetica and Georgia work well for both readers and ATS.',
      },
      {
        q: 'What font size should a resume be?',
        a: 'Use 10–12 pt for body text, larger for your name and section headings. Avoid going under 10 pt.',
      },
      {
        q: 'What margins should a resume have?',
        a: 'Between 0.5 and 1 inch on all sides is a safe range. Going narrower to cram content makes the page feel dense and may print badly.',
      },
      {
        q: 'Is a two-column resume bad for ATS?',
        a: 'Not always, but a single column is the lower-risk choice. Two-column layouts built with tables or text boxes are the most likely to be read out of order.',
      },
      {
        q: 'PDF or Word for a resume?',
        a: 'A text-based PDF preserves your formatting and is accepted by most modern systems. Use .docx only when the portal or recruiter asks for it.',
      },
    ],
    related: [
      { href: '/ats-resume-format-2026', label: 'ATS resume format 2026', desc: 'Full format guide' },
      { href: '/resume-tips/resume-length', label: 'Resume length', desc: 'One page or two?' },
      { href: '/ats-checker', label: 'Free ATS checker', desc: 'Test your formatting' },
    ],
    hubDesc: 'ATS-safe fonts, sizes, margins, columns and file format for your resume.',
  },
  {
    slug: 'projects-section',
    navLabel: 'Projects Section',
    metaTitle: 'Projects Section on a Resume India 2026 — How to Write It',
    metaDescription:
      'How to write the projects section on a resume: what to include, a bullet formula, examples for freshers and developers, and how many projects to list.',
    keywords: [
      'projects section in resume',
      'how to write projects in resume',
      'project description for resume fresher',
      'academic projects on resume',
      'personal projects on resume',
    ],
    h1: 'How to write the projects section on a resume (2026)',
    intro:
      'For freshers, career changers and developers, projects are often the strongest evidence of skill. A good project entry shows the problem, your role, the tools used and a measurable result.',
    verdictLabel: 'The quick answer',
    verdict:
      'List 2–4 relevant projects, each with a name, tech stack, link if available, and 2–3 outcome-focused bullets. Put the section above Education if you have under two years of experience.',
    sections: [
      {
        heading: 'Who needs a projects section',
        body: 'The section matters most when projects carry more proof than your job history:',
        points: [
          'Freshers and final-year students with little or no work experience.',
          'Developers, data analysts and designers with portfolio or GitHub work.',
          'Career changers building evidence in a new field.',
          'Experienced professionals can include one or two standout projects, but only if relevant to the target role.',
        ],
      },
      {
        heading: 'What each project entry should contain',
        body: 'Keep entries consistent and scannable:',
        points: [
          'Project name and a one-line context (academic, personal, freelance, hackathon).',
          'Tech stack or tools — these double as ATS keywords.',
          'Your specific role if it was a team project.',
          'A link to the repository, live demo or case study where possible.',
          '2–3 bullets focused on what you built and what resulted.',
        ],
      },
      {
        heading: 'A bullet formula that works',
        body: 'Use: action verb + what you built + tools used + result or scale. For example: "Built a resume-parsing API in Python and FastAPI that extracts skills from PDFs, cutting manual screening time for a campus placement cell." Where you lack exact numbers, describe scale honestly (number of users, records, test cases) rather than inventing metrics.',
      },
      {
        heading: 'Choosing which projects to list',
        body: 'Quality over quantity. Pick projects that match the job description: a backend role should lead with API or database work; a data role with analysis or modelling work. Drop tutorial clones unless you extended them meaningfully, and remove anything you cannot discuss in depth during an interview.',
      },
    ],
    faqs: [
      {
        q: 'How many projects should I put on a resume?',
        a: 'Two to four relevant projects is typical. Fewer, well-described projects beat a long list of vague ones.',
      },
      {
        q: 'Should a fresher put projects above education?',
        a: 'If your projects are stronger than your academic record, or you have no work experience, placing Projects before Education is a reasonable choice.',
      },
      {
        q: 'Can I include academic or college projects?',
        a: 'Yes, especially as a fresher. Label them clearly and describe your own contribution and the outcome.',
      },
      {
        q: 'Should I include links to projects?',
        a: 'Yes, where possible: a GitHub repository, live demo or case study lets recruiters verify the work. Make sure the links are public and work.',
      },
      {
        q: 'What if I do not have numbers for my project results?',
        a: 'Describe honest scale or scope: users, data size, features shipped, tests passed. Do not invent metrics — interviewers often ask about them.',
      },
    ],
    related: [
      { href: '/engineering-fresher-resume', label: 'Engineering fresher resume', desc: 'Project-led resumes for graduates' },
      { href: '/resume-tips/resume-bullet-points', label: 'Bullet points guide', desc: 'Write stronger bullets' },
      { href: '/resume-tips/action-verbs', label: 'Action verbs', desc: 'Strong verbs to lead with' },
    ],
    hubDesc: 'What to include, a bullet formula and examples for freshers and developers.',
  },
];

export const resumeTipMoreSlugs = resumeTipsMore.map((t) => t.slug);
export const resumeTipMoreMap: Record<string, ResumeTipData> = Object.fromEntries(
  resumeTipsMore.map((t) => [t.slug, t]),
);
