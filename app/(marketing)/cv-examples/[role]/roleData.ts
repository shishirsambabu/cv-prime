export interface RoleData {
  slug: string;
  title: string;
  displayTitle: string;
  industry: string;
  metaDescription: string;
  keywords: string[];
  heroHeading: string;
  heroSubheading: string;
  whatToInclude: string[];
  commonMistakes: string[];
  keySkills: string[];
  salaryRange: string;
  topCompanies: string[];
  faqs: Array<{ q: string; a: string }>;
}

export const roles: RoleData[] = [
  {
    slug: 'software-engineer',
    title: 'Software Engineer CV',
    displayTitle: 'Software Engineer',
    industry: 'Technology',
    metaDescription:
      'Free software engineer CV example and template for India. ATS-optimised, with skills, projects, and experience sections for SDE roles at TCS, Infosys, Amazon, and startups.',
    keywords: [
      'software engineer cv',
      'software developer resume india',
      'SDE resume template',
      'software engineer resume example',
      'backend developer cv',
      'full stack developer resume',
      'software engineer cv india',
    ],
    heroHeading: 'Software Engineer CV — example, template, and tips for 2024',
    heroSubheading:
      'Build an ATS-optimised software engineer CV for Indian tech companies, MNCs, and startups. Includes skills section, project highlights, and GitHub portfolio linking.',
    whatToInclude: [
      'Technical skills section with languages, frameworks, and tools (grouped by category)',
      'Project highlights with GitHub links and impact metrics',
      'Work experience with outcome-driven bullets (not just "built X")',
      'Education with CGPA if above 7.5 (for freshers and campus hires)',
      'Certifications: AWS, GCP, Azure, Kubernetes, etc.',
      'Open-source contributions if any',
    ],
    commonMistakes: [
      'Listing every technology you\'ve ever touched — focus on what you\'re strong in',
      'Generic bullets like "Worked on backend systems" — quantify impact',
      'Missing the skills section ATS needs to extract technology keywords',
      'Including a photo — not expected in tech CVs in India',
      'Using a table-based layout — breaks most ATS parsers',
    ],
    keySkills: ['Python', 'Java', 'JavaScript', 'React', 'Node.js', 'AWS', 'Docker', 'SQL', 'Git', 'System Design'],
    salaryRange: '₹4L – ₹45L+ depending on experience and company',
    topCompanies: ['Google', 'Amazon', 'Microsoft', 'Flipkart', 'Swiggy', 'Zomato', 'TCS', 'Infosys', 'Wipro', 'Razorpay'],
    faqs: [
      {
        q: 'How long should a software engineer CV be in India?',
        a: 'For 0–3 years experience: 1 page. For 4–8 years: 1–2 pages. For 8+ years: 2 pages maximum. Recruiters at product companies (Amazon, Google) prefer 1 page regardless of experience.',
      },
      {
        q: 'Should I include my CGPA on my software engineer CV?',
        a: 'Yes, if it is 7.5 or above and you have less than 3 years of experience. For experienced engineers, CGPA is irrelevant — drop it after your second job.',
      },
      {
        q: 'How do I write bullets for a software engineer CV?',
        a: 'Use the format: Action verb + what you built/did + measurable impact. Example: "Reduced API response time by 40% by migrating from REST to GraphQL, cutting server costs by ₹2L/month."',
      },
    ],
  },
  {
    slug: 'data-analyst',
    title: 'Data Analyst CV',
    displayTitle: 'Data Analyst',
    industry: 'Analytics',
    metaDescription:
      'Free data analyst CV example for India. ATS-ready template with SQL, Python, Tableau, and Power BI skills. Used by analysts at Flipkart, Swiggy, consulting firms, and banks.',
    keywords: [
      'data analyst cv',
      'data analyst resume india',
      'data analyst resume example',
      'business analyst cv template',
      'sql analyst resume',
      'data analyst cv india 2024',
    ],
    heroHeading: 'Data Analyst CV — example, template, and writing guide for India',
    heroSubheading:
      'Build an ATS-optimised data analyst CV highlighting your SQL, Python, and visualisation skills. Used by analysts at top Indian startups, consulting firms, and banks.',
    whatToInclude: [
      'Technical skills: SQL, Python/R, Tableau/Power BI, Excel, Google Sheets',
      'Work experience with data-driven bullets: "Analysed 2M+ rows of transactional data to..."',
      'Projects section with dataset source, tools used, and business impact',
      'Education — data analytics certifications (Google Data Analytics, Coursera, etc.)',
      'Domain expertise: BFSI, e-commerce, healthcare, etc.',
    ],
    commonMistakes: [
      'Listing tools without showing output — always include what the analysis produced',
      'No mention of business impact — "built a dashboard" vs "built a dashboard that reduced reporting time by 60%"',
      'Missing SQL explicitly — it is the most screened keyword for analyst roles',
      'Overly long paragraphs — bullet points are easier to parse for recruiters',
    ],
    keySkills: ['SQL', 'Python', 'Excel', 'Power BI', 'Tableau', 'R', 'Google Analytics', 'A/B Testing', 'Statistical Analysis'],
    salaryRange: '₹3.5L – ₹25L depending on experience and sector',
    topCompanies: ['Flipkart', 'Amazon', 'McKinsey', 'Deloitte', 'HDFC Bank', 'Paytm', 'Swiggy', 'Meesho', 'Ola'],
    faqs: [
      {
        q: 'What is the most important skill to show on a data analyst CV?',
        a: 'SQL. Every data analyst JD screens for it. Make sure SQL appears in your Skills section and at least 2 experience bullets mention it explicitly.',
      },
      {
        q: 'Should a data analyst CV include a portfolio?',
        a: 'Yes. Include a link to your Kaggle profile, GitHub, or a personal dashboard. Even one well-documented project with a public dataset significantly improves conversion.',
      },
    ],
  },
  {
    slug: 'product-manager',
    title: 'Product Manager CV',
    displayTitle: 'Product Manager',
    industry: 'Product Management',
    metaDescription:
      'Free product manager CV example for India. ATS-optimised PM resume template with metrics, roadmap experience, and cross-functional leadership. For FAANG, startups, and Indian tech.',
    keywords: [
      'product manager cv',
      'product manager resume india',
      'PM resume example',
      'product manager cv template india',
      'APM resume',
      'senior product manager cv',
    ],
    heroHeading: 'Product Manager CV — example, template, and tips for Indian PM roles',
    heroSubheading:
      'Build a metrics-driven product manager CV that demonstrates your impact on growth, retention, and revenue. Used by PMs at Zomato, Razorpay, Flipkart, and FAANG.',
    whatToInclude: [
      'Metrics-rich bullets: "Increased Day-30 retention by 12% by redesigning onboarding flow"',
      'Product sense examples: discovery, prioritisation, roadmap decisions',
      'Cross-functional collaboration: worked with engineering, design, data',
      'Tools: Jira, Mixpanel, Amplitude, Figma, SQL (even basic)',
      'User research and A/B test experience',
    ],
    commonMistakes: [
      'Listing features shipped without business impact — always add the metric',
      '"Managed product roadmap" is table stakes — show what the roadmap achieved',
      'No evidence of data-driven decisions — PMs without analytics signal are weak candidates',
      'Oversized summaries — 3 lines max, lead with your biggest metric',
    ],
    keySkills: ['Product Strategy', 'Roadmapping', 'A/B Testing', 'SQL', 'Jira', 'Amplitude', 'Figma', 'Agile', 'OKRs', 'User Research'],
    salaryRange: '₹12L – ₹60L+ depending on company tier and experience',
    topCompanies: ['Google', 'Amazon', 'Zomato', 'Razorpay', 'CRED', 'PhonePe', 'Meesho', 'Groww', 'Flipkart'],
    faqs: [
      {
        q: 'Do I need an MBA to be a product manager in India?',
        a: 'No. Most Indian startups and product companies prefer engineering backgrounds with demonstrated product thinking over MBA credentials. A strong portfolio and metrics-driven CV matters more.',
      },
      {
        q: 'How many bullet points per role on a PM CV?',
        a: '3–5 bullets per role. Each bullet must have a metric. One bullet without a number is fine if the impact is clear; two bullets without numbers is too many.',
      },
    ],
  },
  {
    slug: 'marketing-manager',
    title: 'Marketing Manager CV',
    displayTitle: 'Marketing Manager',
    industry: 'Marketing',
    metaDescription:
      'Free marketing manager CV example for India. ATS-optimised template covering digital marketing, performance, brand, and content roles. Templates for FMCG, D2C, and SaaS.',
    keywords: [
      'marketing manager cv',
      'marketing resume india',
      'digital marketing cv template',
      'marketing manager resume example india',
      'brand manager cv',
      'performance marketing resume',
    ],
    heroHeading: 'Marketing Manager CV — example, template, and tips for India',
    heroSubheading:
      'Write a results-driven marketing manager CV that shows CAC reduction, revenue influenced, and campaign ROI. Covers digital, brand, content, and performance marketing.',
    whatToInclude: [
      'Campaign metrics: ROAS, CAC, MQL volume, email open rates, organic traffic growth',
      'Channels managed: Google Ads, Meta, SEO, CRM, influencer, ATL/BTL',
      'Tools: HubSpot, Salesforce, Clevertap, Google Analytics, Meta Ads Manager',
      'Budget ownership — "managed ₹1.2Cr annual marketing budget"',
      'Team leadership and agency management',
    ],
    commonMistakes: [
      'No metrics — "ran campaigns" tells recruiters nothing; "grew organic traffic 3x" does',
      'Listing channels without results — every channel should have a performance metric attached',
      'Ignoring MarTech tools — they are heavily screened in JDs for marketing roles',
    ],
    keySkills: ['Google Ads', 'Meta Ads', 'SEO', 'Email Marketing', 'HubSpot', 'Google Analytics', 'Content Strategy', 'Brand Management', 'A/B Testing'],
    salaryRange: '₹6L – ₹35L depending on specialisation and seniority',
    topCompanies: ['HUL', 'P&G', 'Myntra', 'Nykaa', 'boAt', 'Mamaearth', 'Bombay Shaving Company', 'Razorpay', 'Freshworks'],
    faqs: [
      {
        q: 'Should a marketing CV focus on digital or traditional skills?',
        a: 'For most Indian companies in 2024, digital-first. Even FMCG giants now weigh digital marketing heavily. Lead with digital metrics; include traditional (ATL/BTL) only if the JD asks for it.',
      },
    ],
  },
  {
    slug: 'hr-manager',
    title: 'HR Manager CV',
    displayTitle: 'HR Manager',
    industry: 'Human Resources',
    metaDescription:
      'Free HR manager CV example for India. ATS-optimised template covering talent acquisition, HRBP, L&D, and operations. For IT, FMCG, and services sector HR roles.',
    keywords: [
      'hr manager cv',
      'human resources resume india',
      'HR resume template',
      'talent acquisition resume',
      'HRBP resume india',
      'HR generalist cv',
      'hr manager resume example',
    ],
    heroHeading: 'HR Manager CV — example, template, and writing tips for India',
    heroSubheading:
      'Build an ATS-optimised HR manager CV covering recruitment, HRBP, L&D, and operations. Includes metrics for time-to-hire, attrition, and employee engagement.',
    whatToInclude: [
      'Hiring metrics: "Reduced time-to-hire from 45 to 22 days", "Sourced 120+ hires in FY24"',
      'HRBP work: grievance resolution, performance management, succession planning',
      'Tools: Darwinbox, SuccessFactors, BambooHR, Workday, LinkedIn Recruiter',
      'Attrition and engagement metrics where available',
      'L&D programs designed or delivered',
      'Labour law compliance: POSH, PF, ESI, Shops Act',
    ],
    commonMistakes: [
      '"Managed recruitment" without numbers — always add headcount, TAT, or source mix',
      'Missing HR tech tools — screened heavily in most JDs',
      'Not differentiating generalist vs specialist scope — be specific',
    ],
    keySkills: ['Talent Acquisition', 'HRBP', 'Darwinbox', 'SAP SuccessFactors', 'Performance Management', 'Labour Law', 'L&D', 'Employee Engagement'],
    salaryRange: '₹4L – ₹25L depending on specialisation and company size',
    topCompanies: ['TCS', 'Infosys', 'HUL', 'Amazon India', 'Deloitte', 'Accenture', 'Zomato', 'HDFC Bank'],
    faqs: [
      {
        q: 'Should an HR CV include employee count managed?',
        a: 'Yes, always. "HR Business Partner for 600-employee engineering division" is far more impactful than "Handled HRBP responsibilities". Scale shows scope.',
      },
    ],
  },
  {
    slug: 'finance-analyst',
    title: 'Finance Analyst CV',
    displayTitle: 'Finance Analyst',
    industry: 'Finance',
    metaDescription:
      'Free finance analyst CV example for India. ATS-optimised template for FP&A, corporate finance, investment banking, and CA roles. For BFSI, Big 4, and corporate finance teams.',
    keywords: [
      'finance analyst cv',
      'finance resume india',
      'FP&A resume',
      'investment banking cv india',
      'CA resume template',
      'financial analyst resume example',
      'corporate finance cv',
    ],
    heroHeading: 'Finance Analyst CV — example, template, and tips for Indian finance roles',
    heroSubheading:
      'Build an ATS-optimised finance analyst CV for FP&A, investment banking, Big 4, and corporate finance. Covers financial modelling, budgeting, and reporting.',
    whatToInclude: [
      'Financial modelling skills: DCF, LBO, three-statement, scenario analysis',
      'ERP tools: SAP, Oracle Financials, Tally, QuickBooks',
      'Key metrics: "Managed ₹50Cr annual budget", "Reduced reporting cycle from 5 to 2 days"',
      'CA / CFA / CMA qualifications prominently placed',
      'Industry exposure: BFSI, manufacturing, IT, consulting',
    ],
    commonMistakes: [
      'No scale indicators — always show the size of budgets, portfolios, or transactions you\'ve handled',
      'Missing qualifications section — CA rank, CFA level, and CMA are heavily screened',
      'Generic bullets like "Prepared MIS reports" — add the frequency, stakeholder, and decision impact',
    ],
    keySkills: ['Financial Modelling', 'SAP', 'Excel', 'FP&A', 'Budgeting', 'Variance Analysis', 'DCF', 'Power BI', 'SQL', 'IFRS/Ind AS'],
    salaryRange: '₹5L – ₹40L+ depending on qualification and company tier',
    topCompanies: ['Goldman Sachs', 'JP Morgan', 'HDFC Bank', 'Deloitte', 'PWC', 'EY', 'KPMG', 'Bajaj Finance', 'Reliance', 'Tata Group'],
    faqs: [
      {
        q: 'Should a CA include their AIR rank on their CV?',
        a: 'Yes, if it is in the top 500. For ranks beyond 500, just state "Chartered Accountant (ICAI)" with your passing year — the rank adds less signal at that range.',
      },
    ],
  },
];

export const roleMap = new Map(roles.map((r) => [r.slug, r]));
export const roleSlugs = roles.map((r) => r.slug);
