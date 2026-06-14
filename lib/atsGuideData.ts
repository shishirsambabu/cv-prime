export interface AtsGuideData {
  atsKeywords: string[];
  mustHaveSections: string[];
  formattingRules: string[];
  commonAtsFailures: string[];
  keywordTips: string[];
  faqs: Array<{ q: string; a: string }>;
}

export const atsGuideDataMap: Record<string, AtsGuideData> = {
  'software-engineer': {
    atsKeywords: ['Software Engineer', 'SDE', 'Backend', 'Frontend', 'Full Stack', 'Python', 'Java', 'JavaScript', 'React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'REST API', 'SQL', 'Git', 'CI/CD', 'Microservices', 'System Design', 'Agile'],
    mustHaveSections: ['Skills (Technical)', 'Work Experience', 'Projects', 'Education', 'Certifications'],
    formattingRules: [
      'Use a single-column layout — table-based CVs break most ATS parsers',
      'Name your experience section exactly "Work Experience" or "Professional Experience" — ATS looks for these labels',
      'List skills in a dedicated Skills section, not just embedded in bullets',
      'Use standard fonts: Arial, Calibri, or Georgia — no decorative fonts',
      'Submit as .docx or PDF (text-based, not scanned) — check the JD for format preference',
      'Include the job title from the JD verbatim somewhere in your CV (header or current role)',
    ],
    commonAtsFailures: [
      'Using a skills cloud / word-art skills section — ATS cannot parse it',
      'Putting contact info in the header/footer area of a Word document — hidden from ATS',
      'Using icons or symbols instead of text for sections headings',
      'Embedding skills only in bullets without a dedicated skills section — reduces keyword density',
      'Using "SDE-II" without also writing "Software Engineer" — ATS may not recognise abbreviations',
      'Two-column or infographic CV templates — most ATS reads left-to-right, top-to-bottom in a single flow',
    ],
    keywordTips: [
      'Mirror the exact technology names in the job description — "ReactJS" and "React.js" are different strings to ATS',
      'Include both "AWS" and "Amazon Web Services" if the JD uses both',
      'Add the cloud platform certifications (AWS SAA, GCP ACE) in a Certifications section ATS can index',
      'List programming languages individually, not just "multiple languages" — ATS keyword matches are literal',
      'Include "CI/CD" and list specific tools: "GitHub Actions", "Jenkins", "CircleCI"',
    ],
    faqs: [
      { q: 'Which ATS systems do Indian tech companies use?', a: 'Large Indian tech companies and MNCs commonly use Workday, SuccessFactors, Taleo, iCIMS, and Greenhouse. Startups often use Lever, Ashby, or Greenhouse. For campus hiring, many use proprietary portals (TCS iON, AMCAT). Each has slightly different parsing behaviour, but single-column text-based CVs work best across all of them.' },
      { q: 'Does my software engineer CV pass ATS if I use a PDF?', a: 'PDF is generally safe if it is text-based (not a scanned image). Most modern ATS (Workday, Greenhouse, Lever) parse text PDFs correctly. However, some older systems and Indian job portals (Naukri, LinkedIn) handle .docx more reliably. If in doubt, submit .docx unless the JD specifies PDF.' },
      { q: 'What is the ideal keyword density for a software engineer CV?', a: 'There is no magic number, but your top 8–10 skills should each appear 2–3 times: once in the Skills section, once or twice in experience bullets. Do not stuff keywords artificially — modern ATS systems flag unnatural repetition. Contextual placement (skills section + bullets) is more effective than repetition alone.' },
    ],
  },
  'data-analyst': {
    atsKeywords: ['Data Analyst', 'SQL', 'Python', 'Excel', 'Power BI', 'Tableau', 'Data Analysis', 'Dashboard', 'Reporting', 'A/B Testing', 'Statistical Analysis', 'ETL', 'Data Visualisation', 'Business Intelligence', 'KPI', 'R', 'Google Analytics', 'Looker'],
    mustHaveSections: ['Skills (Technical)', 'Work Experience', 'Projects', 'Education'],
    formattingRules: [
      'Use single-column format — common with analyst CVs, but dual-column breaks ATS',
      'Include a dedicated Technical Skills section listing all tools',
      'Section headings should be unambiguous: "Work Experience", "Education", "Projects"',
      'Avoid using tables for skills — use comma-separated lists or simple bullet points',
      'Spell out abbreviations at least once: "Power BI (Microsoft)", "Tableau"',
      'PDF or DOCX — check JD; Naukri typically handles DOCX better',
    ],
    commonAtsFailures: [
      'Burying SQL deep in a paragraph — it must appear in a searchable Skills section',
      'Writing "Excel (Pivot Tables, VLOOKUP)" as one skill — ATS may not parse as Excel',
      'Using a chart or pie chart to show skill proficiency — ATS cannot read images',
      'Omitting the word "analyst" from your current job title — ATS searches for exact titles',
      'Not including the domain (BFSI, e-commerce) — some JDs filter by domain experience',
    ],
    keywordTips: [
      'Include "SQL" explicitly — it is the most screened keyword for analyst roles',
      'List specific BI tools: "Power BI", "Tableau", "Looker", "Google Data Studio"',
      'Add "A/B testing" if your work involved experimentation — high-value keyword',
      'Include "Python (pandas, NumPy)" not just "Python" — shows depth',
      'Mention the database types: "MySQL", "PostgreSQL", "BigQuery", "Redshift"',
    ],
    faqs: [
      { q: 'What keywords should a data analyst put on their CV to pass ATS?', a: 'The non-negotiable keywords are: SQL, Python or R, Excel, and at least one BI tool (Power BI or Tableau). Additional high-value keywords include: data visualisation, ETL, dashboard, reporting, A/B testing, statistical analysis, and KPI. Match these exactly to the job description — capitalisation and spacing matter.' },
      { q: 'Should I list each SQL query type I know on my data analyst CV?', a: 'No. List "SQL" prominently in your Skills section and use bullets that show SQL in context: "Wrote complex SQL queries joining 5+ tables to generate weekly revenue reports." Listing "JOINs, CTEs, Window Functions" as a sub-list is also acceptable. Do not list every clause — it reads as filler.' },
    ],
  },
  'product-manager': {
    atsKeywords: ['Product Manager', 'Product Management', 'Roadmap', 'PRD', 'User Stories', 'Agile', 'Scrum', 'Sprint', 'KPI', 'OKR', 'A/B Testing', 'Stakeholder Management', 'Go-to-market', 'Product Strategy', 'User Research', 'Data-driven', 'Cross-functional', 'Backlog'],
    mustHaveSections: ['Work Experience', 'Skills', 'Education', 'Key Achievements'],
    formattingRules: [
      'Single-column format with clear section headings',
      'Include metrics in every bullet — "increased DAUs by 23%" is stronger than "improved engagement"',
      'Spell out product frameworks: "OKR (Objectives and Key Results)"',
      'Do not use a functional CV format — ATS and recruiters both prefer chronological',
      'Keep to 2 pages maximum for PMs with 5+ years of experience',
    ],
    commonAtsFailures: [
      'Missing "Product Manager" as a heading or clear title — ATS searches for this exact phrase',
      'Not quantifying outcomes — ATS scoring systems often weight metric-containing bullets higher',
      'Omitting Agile/Scrum keywords if the JD lists them as required',
      'Using vague titles like "Growth Lead" without also including "Product Manager"',
    ],
    keywordTips: [
      'Include methodology keywords: "Agile", "Scrum", "Kanban", "Design Thinking"',
      'Add research tools: "UserTesting", "Hotjar", "Mixpanel", "Amplitude", "Segment"',
      'Include "cross-functional" and "stakeholder management" — standard PM JD phrases',
      'List the metrics you own: "DAU", "MAU", "retention", "NPS", "conversion rate"',
    ],
    faqs: [
      { q: 'What ATS keywords should a product manager include?', a: 'Core PM keywords: Product Manager, Product Management, Roadmap, PRD (Product Requirements Document), User Stories, Agile, Scrum, OKR, KPI, A/B Testing, Go-to-market, Stakeholder Management, Cross-functional. Add role-specific tools: Jira, Confluence, Figma, Mixpanel, Amplitude. Mirror the exact phrasing from the JD.' },
      { q: 'Do product manager CVs need to be ATS optimised?', a: 'Yes — especially at scale-up companies that use applicant tracking systems (Lever, Greenhouse, Workday). Senior PM roles at larger companies also route through HR systems before reaching the hiring manager. A well-optimised PM CV passes ATS while still reading well to the human reviewer.' },
    ],
  },
  'marketing-manager': {
    atsKeywords: ['Marketing Manager', 'Digital Marketing', 'SEO', 'SEM', 'Google Ads', 'Meta Ads', 'Content Marketing', 'Email Marketing', 'CRM', 'Lead Generation', 'Marketing Strategy', 'Brand Management', 'Campaign Management', 'ROI', 'Analytics', 'Social Media Marketing'],
    mustHaveSections: ['Work Experience', 'Skills', 'Education', 'Key Campaigns / Achievements'],
    formattingRules: [
      'Single-column, reverse-chronological format',
      'Always quantify campaigns: budget managed, ROAS achieved, leads generated',
      'Spell out abbreviations in brackets: "SEM (Search Engine Marketing)"',
      'List marketing platforms explicitly in a Skills section',
    ],
    commonAtsFailures: [
      'Not including specific ad platforms (Google Ads, Meta Ads) — ATS searches for these',
      'Using "digital marketing" as a catch-all without listing specific channels',
      'Missing ROI or performance metrics — weakens both ATS score and human review',
    ],
    keywordTips: [
      'List channels individually: SEO, SEM, email marketing, content marketing, social media',
      'Include specific tools: "Google Analytics 4", "HubSpot", "Salesforce", "Mailchimp"',
      'Add "B2B" or "B2C" based on your experience — many JDs filter on this',
      'Include "marketing funnel", "lead generation", "conversion optimisation" — common JD phrases',
    ],
    faqs: [
      { q: 'What keywords should a marketing manager use on their CV for ATS?', a: 'Essential keywords: Digital Marketing, SEO, SEM, Google Ads, Meta Ads (Facebook Ads), Email Marketing, Content Marketing, Lead Generation, CRM, Brand Management, Campaign Management. Add tools like Google Analytics, HubSpot, Salesforce, Mailchimp. Include performance metrics: ROAS, CAC, LTV, conversion rate.' },
      { q: 'Should a marketing manager list every social media platform they have used?', a: 'Yes, if you have meaningful experience — list Instagram, LinkedIn, Twitter/X, YouTube, and Pinterest separately. ATS systems match platform names individually. However, only list platforms where you can quantify results — avoid listing platforms you barely used.' },
    ],
  },
  'hr-manager': {
    atsKeywords: ['HR Manager', 'Human Resources', 'Recruitment', 'Talent Acquisition', 'Employee Engagement', 'Performance Management', 'HRIS', 'Onboarding', 'Policy Development', 'Labour Law', 'Payroll', 'Compensation & Benefits', 'Learning & Development', 'Succession Planning', 'Workday', 'SAP HR'],
    mustHaveSections: ['Work Experience', 'Skills', 'Education', 'HR Specialisations'],
    formattingRules: [
      'Use clear section labels — ATS needs "Work Experience", not "Career Journey"',
      'Quantify HR outcomes: "hired 200+ engineers in 6 months", "reduced attrition from 22% to 14%"',
      'List HRIS systems explicitly in a Skills section',
    ],
    commonAtsFailures: [
      'Not including the specific HRIS tools used — recruiters and ATS scan for these',
      'Using generic titles like "People Partner" without also including "HR Manager"',
      'Missing labour law keywords if the JD mentions compliance requirements',
    ],
    keywordTips: [
      'Include "talent acquisition" and "recruitment" separately — both are searched',
      'Add HRIS platforms: "Workday", "SAP SuccessFactors", "Darwinbox", "greytHR", "Keka"',
      'Include compliance terms: "labour law", "POSH", "statutory compliance" for Indian roles',
      'Add "L&D" and "Learning & Development" — separate matches',
    ],
    faqs: [
      { q: 'What are the most important ATS keywords for an HR manager CV?', a: 'Core keywords: HR Manager, Human Resources, Recruitment, Talent Acquisition, Employee Engagement, Performance Management, Onboarding, HRIS, Labour Law, Payroll, Compensation & Benefits. For Indian roles, add: Darwinbox, greytHR, Keka, PF, ESI, statutory compliance, POSH.' },
      { q: 'How should an HR manager list their HRIS experience on a CV?', a: 'Create a dedicated "HRIS & Tools" section and list each platform: Workday, SAP SuccessFactors, Darwinbox, greytHR, Keka, BambooHR. Then reference specific systems in context: "Managed payroll for 500 employees on greytHR." Both the section listing and contextual use improve ATS keyword matching.' },
    ],
  },
  'finance-analyst': {
    atsKeywords: ['Finance Analyst', 'Financial Analysis', 'Financial Modelling', 'Excel', 'Valuation', 'DCF', 'P&L', 'Budget', 'Forecasting', 'Variance Analysis', 'GAAP', 'Ind AS', 'ERP', 'SAP', 'PowerPoint', 'Chartered Accountant', 'CFA', 'FP&A'],
    mustHaveSections: ['Work Experience', 'Skills (Technical)', 'Education', 'Certifications'],
    formattingRules: [
      'Use single-column format — finance recruiters still mostly review CVs in ATS',
      'Quantify financial impact in every bullet: deal size, cost savings, budget managed',
      'List certifications (CA, CFA, CPA, CMA) prominently near the top',
      'Include Excel skills with specifics: "Advanced Excel (VBA, pivot tables, Power Query)"',
    ],
    commonAtsFailures: [
      'Not listing Excel explicitly — it is a non-negotiable keyword for finance roles',
      'Omitting the accounting standard (Ind AS, GAAP) — ATS filters on these for regulatory roles',
      'Not mentioning ERP system (SAP, Oracle, Tally) — critical for many finance JDs',
    ],
    keywordTips: [
      'Include "financial modelling" and "DCF" — common search terms for senior analyst roles',
      'Add ERP platforms: "SAP FICO", "Oracle Financials", "Tally", "QuickBooks"',
      'Include "FP&A" (Financial Planning and Analysis) if relevant',
      'List certifications explicitly: "Chartered Accountant (CA)", "CFA Level 2"',
    ],
    faqs: [
      { q: 'What ATS keywords should a finance analyst include on their CV?', a: 'Essential: Financial Analysis, Financial Modelling, Excel, DCF, Valuation, P&L, Budget, Forecasting, Variance Analysis. Add role-specific: FP&A, GAAP, Ind AS, SAP, Oracle, Tally. For investment roles add: DCF, LBO, comparable company analysis, pitch book.' },
      { q: 'Does having CA or CFA on my CV help with ATS?', a: 'Yes significantly. ATS systems at top consulting firms, banks, and finance companies actively search for "CA", "Chartered Accountant", "CFA", and "CFA Level". Include both the abbreviation and the full form: "Chartered Accountant (CA, ICAI)" to maximise matching.' },
    ],
  },
  'business-analyst': {
    atsKeywords: ['Business Analyst', 'Requirements Gathering', 'BRD', 'FSD', 'Use Cases', 'Process Mapping', 'SQL', 'JIRA', 'Agile', 'Stakeholder Management', 'UAT', 'Data Analysis', 'Visio', 'Tableau', 'Power BI', 'BPMN', 'As-Is To-Be'],
    mustHaveSections: ['Work Experience', 'Skills', 'Education', 'Tools & Technologies'],
    formattingRules: [
      'List both technical and business skills in a dedicated Skills section',
      'Include domain experience: BFSI, retail, e-commerce, healthcare',
      'Quantify outcomes: "streamlined process reducing TAT by 30%"',
    ],
    commonAtsFailures: [
      'Not including "requirements" or "requirements gathering" — core BA keyword',
      'Omitting documentation artifacts (BRD, FSD, use cases) that ATS may search for',
      'Missing the domain vertical — many BA JDs filter by industry experience',
    ],
    keywordTips: [
      'Include BA artifacts: "BRD", "FSD", "use cases", "user stories", "process maps"',
      'Add methodology: "Agile", "Waterfall", "SDLC"',
      'Include tools: "JIRA", "Confluence", "Visio", "Lucidchart", "MS Project"',
    ],
    faqs: [
      { q: 'What are the top ATS keywords for a business analyst CV in India?', a: 'Core keywords: Business Analyst, Requirements Gathering, BRD (Business Requirements Document), Use Cases, User Stories, Agile, Stakeholder Management, UAT (User Acceptance Testing), Process Mapping, SQL. For India-specific roles also include domain: BFSI, e-commerce, supply chain.' },
      { q: 'Should a business analyst CV include technical skills?', a: 'Yes — particularly SQL, Excel, and any BI tools (Tableau, Power BI). Many BA roles in India require basic SQL for data extraction. Including these technical skills significantly improves ATS keyword matching and demonstrates versatility to hiring managers.' },
    ],
  },
  'frontend-developer': {
    atsKeywords: ['Frontend Developer', 'Front-End Developer', 'React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Next.js', 'Vue.js', 'Angular', 'Tailwind CSS', 'REST API', 'Responsive Design', 'Git', 'Webpack', 'Redux', 'Node.js', 'UI/UX', 'Performance Optimisation'],
    mustHaveSections: ['Skills (Technical)', 'Work Experience', 'Projects', 'Education'],
    formattingRules: [
      'Single-column layout — ironic given your front-end skills, but ATS needs simplicity',
      'Include framework versions where relevant: "React 18", "Next.js 14"',
      'Add a projects section with live URLs or GitHub links',
    ],
    commonAtsFailures: [
      'Not including "JavaScript" explicitly — ATS does not infer it from "React"',
      'Using "front end" (two words) but the JD says "frontend" — test both',
      'Missing TypeScript if the JD requires it — ATS searches for it explicitly',
    ],
    keywordTips: [
      'Include both "JavaScript" and "TypeScript" if you know both',
      'List CSS frameworks: "Tailwind CSS", "Bootstrap", "Material UI", "Styled Components"',
      'Add performance keywords: "Core Web Vitals", "Lighthouse", "lazy loading"',
      'Include "responsive design" and "mobile-first" — standard JD phrases',
    ],
    faqs: [
      { q: 'What technical keywords should a frontend developer include for ATS?', a: 'Non-negotiable: JavaScript, HTML, CSS, and your primary framework (React, Vue, Angular, Next.js). Add: TypeScript, Git, REST API, responsive design, and your CSS approach (Tailwind, Bootstrap). List state management: Redux, Zustand, Context API. Include build tools: Webpack, Vite, Parcel.' },
      { q: 'Should a frontend developer include design tools like Figma on their CV?', a: 'Yes if you use them regularly. Many frontend JDs (especially at startups) mention Figma or Adobe XD. Include it in your skills section. It signals collaboration ability with designers — a valued trait at product companies.' },
    ],
  },
  'backend-developer': {
    atsKeywords: ['Backend Developer', 'Back-End Developer', 'Python', 'Java', 'Node.js', 'Go', 'REST API', 'GraphQL', 'Microservices', 'SQL', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'System Design', 'Distributed Systems'],
    mustHaveSections: ['Skills (Technical)', 'Work Experience', 'Projects', 'Education'],
    formattingRules: [
      'Single-column, text-based CV — no tables or infographics',
      'List languages and frameworks in a dedicated Skills section',
      'Include specific database technologies — ATS searches for them',
    ],
    commonAtsFailures: [
      'Listing only the language, not the frameworks: "Python" without "Django", "FastAPI", "Flask"',
      'Not including database keywords: PostgreSQL, MySQL, MongoDB are searched separately',
      'Missing cloud provider keywords: "AWS", "GCP", "Azure" are distinct ATS keywords',
    ],
    keywordTips: [
      'Include both language and framework: "Python (FastAPI, Django)", "Java (Spring Boot)"',
      'Add message queues: "Kafka", "RabbitMQ", "AWS SQS"',
      'Include observability tools: "Prometheus", "Grafana", "ELK Stack", "Datadog"',
      'Add "system design" and "distributed systems" for senior roles',
    ],
    faqs: [
      { q: 'What are the most important ATS keywords for a backend developer CV?', a: 'Your primary language (Python/Java/Go/Node.js), primary framework (Django/Spring Boot/Express), database (PostgreSQL/MySQL/MongoDB), cloud platform (AWS/GCP), and containerisation (Docker/Kubernetes). Also include: REST API, microservices, CI/CD, Git. Add message queues (Kafka/RabbitMQ) for distributed systems roles.' },
      { q: 'Does a backend developer need to include DevOps tools on their CV?', a: 'Yes for modern product company roles. Most full-stack and backend JDs in India now expect familiarity with Docker, Kubernetes, and CI/CD tools (GitHub Actions, Jenkins). Including these demonstrates that you can own the full deployment cycle — a requirement at most startups and product companies.' },
    ],
  },
  'data-scientist': {
    atsKeywords: ['Data Scientist', 'Machine Learning', 'Python', 'R', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Statistics', 'NLP', 'Deep Learning', 'Feature Engineering', 'SQL', 'A/B Testing', 'Jupyter', 'Pandas', 'NumPy', 'Model Deployment', 'MLOps', 'Computer Vision'],
    mustHaveSections: ['Skills (Technical)', 'Work Experience', 'Projects / Research', 'Education'],
    formattingRules: [
      'Include both Python libraries and ML frameworks separately',
      'Add a projects section with published models, Kaggle rankings, or research papers',
      'List statistical methods: regression, classification, clustering, time-series',
    ],
    commonAtsFailures: [
      'Writing only "Machine Learning" without specific algorithms or frameworks',
      'Not including "Python" as a separate keyword from pandas/NumPy',
      'Omitting deployment experience (MLOps, model serving) for senior roles',
    ],
    keywordTips: [
      'Include specific ML algorithms: "XGBoost", "Random Forest", "LSTM", "Transformer"',
      'Add MLOps tools: "MLflow", "Kubeflow", "SageMaker", "Vertex AI"',
      'Include cloud ML platforms: "AWS SageMaker", "GCP Vertex AI", "Azure ML"',
    ],
    faqs: [
      { q: 'What ATS keywords should a data scientist include on their CV?', a: 'Essential: Machine Learning, Python, SQL, TensorFlow or PyTorch, Statistics, Feature Engineering. Add specific algorithms: regression, classification, clustering, NLP, Computer Vision, deep learning. Include tools: Scikit-learn, Pandas, NumPy, Jupyter, Tableau. For senior roles: MLOps, model deployment, A/B testing, experiment design.' },
      { q: 'Does Kaggle ranking help with ATS for data science roles?', a: 'No — ATS cannot parse Kaggle rankings or URLs for scoring. However, include "Kaggle Competitions Master" or your ranking explicitly in a section header ATS can index. A portfolio link (GitHub/Kaggle) should be in your contact header. The ranking matters more to human reviewers than ATS parsers.' },
    ],
  },
  'devops-engineer': {
    atsKeywords: ['DevOps Engineer', 'CI/CD', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'GitHub Actions', 'AWS', 'GCP', 'Azure', 'Linux', 'Bash', 'Python', 'Infrastructure as Code', 'Monitoring', 'Prometheus', 'Grafana', 'ELK Stack', 'SRE'],
    mustHaveSections: ['Skills (Technical)', 'Work Experience', 'Certifications', 'Education'],
    formattingRules: [
      'List cloud platforms and certifications prominently',
      'Include uptime SLAs achieved: "maintained 99.95% uptime across 200+ services"',
      'Separate tools by category: CI/CD, Container Orchestration, Monitoring, IaC',
    ],
    commonAtsFailures: [
      'Not including both "Kubernetes" and "K8s" — use the full word as ATS searches vary',
      'Omitting cloud certifications (AWS CCP, AWS SAA) — these are highly searched',
      'Missing "Infrastructure as Code" as a phrase even if you list Terraform and Ansible',
    ],
    keywordTips: [
      'Include IaC tools: "Terraform", "Ansible", "CloudFormation", "Pulumi"',
      'Add monitoring: "Prometheus", "Grafana", "Datadog", "New Relic", "ELK Stack"',
      'Include "SRE" (Site Reliability Engineering) if you work in reliability functions',
      'List cloud certifications: "AWS Solutions Architect", "CKA (Certified Kubernetes Administrator)"',
    ],
    faqs: [
      { q: 'What are the most important ATS keywords for a DevOps engineer?', a: 'Non-negotiable: CI/CD, Docker, Kubernetes, AWS (or GCP/Azure), Terraform, Linux. Add: Jenkins or GitHub Actions, Ansible, Prometheus/Grafana, Python or Bash scripting. For senior roles: SRE, Infrastructure as Code, high-availability, disaster recovery, 99.99% SLA.' },
      { q: 'Should a DevOps engineer list all cloud certifications on their CV?', a: 'Yes — always list cloud certifications with the full name and abbreviation: "AWS Certified Solutions Architect – Associate (SAA-C03)". ATS systems at enterprise companies actively filter for these. Certifications also demonstrate commitment and structured knowledge in a domain that is hard to demonstrate otherwise.' },
    ],
  },
  'sales-manager': {
    atsKeywords: ['Sales Manager', 'B2B Sales', 'B2C Sales', 'Revenue', 'Quota', 'CRM', 'Salesforce', 'Pipeline Management', 'Lead Generation', 'Key Account Management', 'Enterprise Sales', 'Target Achievement', 'Business Development', 'Client Acquisition', 'Negotiation'],
    mustHaveSections: ['Work Experience', 'Key Achievements', 'Skills', 'Education'],
    formattingRules: [
      'Every bullet must include a revenue number or percentage target achievement',
      'Include CRM tools explicitly — recruiters filter on these',
      'Use "quota" and "target" keywords — ATS searches these for sales roles',
    ],
    commonAtsFailures: [
      'Not quantifying revenue impact — "exceeded targets" without a number is unscored',
      'Missing CRM tools (Salesforce, HubSpot, Zoho) — key ATS filters',
      'Not specifying B2B vs B2C — many JDs filter on this distinction',
    ],
    keywordTips: [
      'Include "quota achievement" with percentage: "achieved 127% of annual quota"',
      'Add "key account management" if relevant — separate keyword from "sales"',
      'Include territory if relevant: "North India territory", "pan-India territory"',
    ],
    faqs: [
      { q: 'What ATS keywords should a sales manager use?', a: 'Core: Sales Manager, Revenue, Quota, CRM, Pipeline Management, B2B Sales, Lead Generation, Key Account Management, Business Development. Add: Salesforce, HubSpot, Zoho CRM. Include numbers: "₹5Cr annual revenue", "127% quota achievement", "25-person sales team".' },
      { q: 'How should a sales manager format their CV for ATS?', a: 'Use reverse-chronological format with a clear "Work Experience" heading. Each role should have 4–6 bullets with revenue metrics. Include a "Key Achievements" section with your top 3 career wins (deals closed, records broken, team growth). Avoid fancy templates — single column with bold section headings.' },
    ],
  },
  'ui-ux-designer': {
    atsKeywords: ['UI/UX Designer', 'UX Designer', 'UI Designer', 'Figma', 'Adobe XD', 'User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Design System', 'Interaction Design', 'Information Architecture', 'User Journey', 'Design Thinking', 'Sketch', 'Zeplin', 'Accessibility'],
    mustHaveSections: ['Work Experience', 'Skills (Design Tools)', 'Portfolio', 'Education'],
    formattingRules: [
      'Include your portfolio URL in the contact section — not just as a footnote',
      'Single-column text-based CV — even if you are a designer; your portfolio shows design skills',
      'List design tools explicitly in a Skills section',
    ],
    commonAtsFailures: [
      'Creating a heavily designed CV that ATS cannot parse — keep the CV text-first',
      'Not listing "Figma" as a separate keyword if it is your primary tool',
      'Omitting research keywords (user research, usability testing) for UX roles',
    ],
    keywordTips: [
      'Include "design system" if you have built or contributed to one',
      'Add "accessibility" or "WCAG" if you design for inclusive UX',
      'List specific research methods: "user interviews", "card sorting", "tree testing"',
    ],
    faqs: [
      { q: 'What ATS keywords should a UI/UX designer include?', a: 'Core: Figma, UX Design, UI Design, User Research, Wireframing, Prototyping, Usability Testing, Design System, Interaction Design. Add: Adobe XD, Sketch, Zeplin, InVision, Marvel. For senior roles: Design Thinking, Information Architecture, Accessibility, WCAG.' },
      { q: 'Should my UI/UX designer CV be designed beautifully?', a: 'No — your CV should be plain and text-based so ATS can parse it. Save your design talent for the portfolio. Ironically, heavily designed CVs in PDF format often fail ATS parsing completely. A clean, text-first CV + a strong portfolio URL is the optimal combination.' },
    ],
  },
  'project-manager': {
    atsKeywords: ['Project Manager', 'PMP', 'Agile', 'Scrum', 'PRINCE2', 'Waterfall', 'Risk Management', 'Stakeholder Management', 'MS Project', 'Jira', 'Budget Management', 'Resource Planning', 'Scope Management', 'Change Management', 'Delivery Management'],
    mustHaveSections: ['Work Experience', 'Certifications', 'Skills', 'Education'],
    formattingRules: [
      'List PMP, Prince2, or Agile certifications prominently near your name',
      'Quantify every project: budget, team size, timeline, delivery success',
      'Include the project management methodology used for each role',
    ],
    commonAtsFailures: [
      'Not including "PMP" as a standalone keyword if you are certified',
      'Using vague titles like "Delivery Manager" without also including "Project Manager"',
      'Missing budget and team size figures — key ATS signals for PM seniority filters',
    ],
    keywordTips: [
      'Include tools: "MS Project", "JIRA", "Confluence", "Asana", "Monday.com", "Smartsheet"',
      'Add "risk management" and "change management" — highly searched PM phrases',
      'Include "PMP" certification prominently and early in the CV',
    ],
    faqs: [
      { q: 'What are the most important ATS keywords for a project manager CV?', a: 'Core: Project Manager, PMP, Agile, Scrum, Waterfall, Risk Management, Stakeholder Management, Budget Management, Resource Planning. Add tools: JIRA, Confluence, MS Project. Include scale: "managed 15-person team", "₹10Cr project budget", "delivered on time and 8% under budget".' },
      { q: 'Does PMP certification improve ATS score significantly?', a: 'Yes — significantly. Many enterprise JDs (IT, consulting, construction) explicitly require or prefer PMP. ATS systems at companies like Infosys, TCS, L&T, and Accenture actively search for "PMP" as a filter criterion. Including both "PMP" and "Project Management Professional" covers both ATS search variants.' },
    ],
  },
  'content-writer': {
    atsKeywords: ['Content Writer', 'Content Marketing', 'SEO Writing', 'Copywriting', 'Blog Writing', 'Social Media Content', 'Content Strategy', 'Editorial Calendar', 'WordPress', 'HubSpot', 'Keyword Research', 'Long-form Content', 'Content Management System', 'UX Writing', 'Technical Writing'],
    mustHaveSections: ['Work Experience', 'Skills', 'Portfolio / Published Work', 'Education'],
    formattingRules: [
      'Include portfolio URL or byline links in your contact section',
      'Quantify content impact: traffic generated, backlinks earned, email open rates',
      'List content types: "SEO blogs", "whitepapers", "email sequences", "social copy"',
    ],
    commonAtsFailures: [
      'Not including "SEO" or "SEO writing" explicitly if the JD requires it',
      'Missing CMS platforms (WordPress, HubSpot, Contentful) — ATS searches for these',
      'No metrics — content CVs without traffic or engagement numbers score poorly',
    ],
    keywordTips: [
      'Include "long-form content" if you write 1000+ word articles',
      'Add "keyword research" and "search intent" — show SEO understanding',
      'Include content formats: "blog posts", "whitepapers", "case studies", "email newsletters"',
    ],
    faqs: [
      { q: 'What ATS keywords should a content writer include?', a: 'Core: Content Writer, Content Marketing, SEO Writing, Copywriting, Blog Writing, Content Strategy. Add tools: WordPress, HubSpot, Contentful. Include metrics: "content that drives 50K monthly organic visitors", "average 3.2% email CTR". Add SEO terms: keyword research, on-page SEO, content briefs.' },
      { q: 'Should a content writer include writing samples on their CV?', a: 'No — include a link to your portfolio or 2–3 individual URLs in the contact section, not the CV body. ATS ignores URLs in the text body. Your portfolio link in the header/contact area is scanned and clickable for human reviewers.' },
    ],
  },
  'operations-manager': {
    atsKeywords: ['Operations Manager', 'Operations Management', 'Process Improvement', 'Supply Chain', 'Inventory Management', 'SOP', 'KPI', 'P&L', 'Lean', 'Six Sigma', 'Cost Reduction', 'Vendor Management', 'ERP', 'SAP', 'Logistics', 'Warehouse Management'],
    mustHaveSections: ['Work Experience', 'Key Achievements', 'Skills', 'Education'],
    formattingRules: [
      'Quantify operational improvements: cost savings, efficiency %, headcount managed',
      'Include certifications: Lean Six Sigma (Green Belt, Black Belt)',
      'List ERP systems explicitly: SAP, Oracle, Microsoft Dynamics',
    ],
    commonAtsFailures: [
      'Not including "Lean" or "Six Sigma" if process improvement was part of the role',
      'Missing ERP tools — many ops JDs filter on SAP or Oracle experience',
      'No P&L or budget ownership figures — weakens seniority signals',
    ],
    keywordTips: [
      'Include "SOP development" if you have written standard operating procedures',
      'Add "cost reduction" with percentage: "reduced OPEX by 18% through process redesign"',
      'Include "warehouse management" and "last-mile delivery" for logistics roles',
    ],
    faqs: [
      { q: 'What are the best ATS keywords for an operations manager?', a: 'Core: Operations Manager, Process Improvement, Supply Chain, Inventory Management, SOP, KPI, P&L, Vendor Management. Add: Lean, Six Sigma, ERP (SAP/Oracle), Warehouse Management. Include scale: "managed 150-person operations team", "₹20Cr annual OPEX budget", "reduced costs by 22%".' },
      { q: 'Does Lean Six Sigma certification help with ATS for operations roles?', a: 'Yes significantly — particularly for manufacturing, FMCG, and logistics companies. "Lean Six Sigma Green Belt" or "Black Belt" is an explicit ATS filter at companies like Unilever, P&G, Amazon, Flipkart operations. Include the certification with the level clearly stated.' },
    ],
  },
  'civil-engineer': {
    atsKeywords: ['Civil Engineer', 'Structural Engineering', 'AutoCAD', 'STAAD Pro', 'ETABS', 'Project Management', 'Construction Management', 'Site Supervision', 'BOQ', 'RCC Design', 'Estimation', 'Quantity Surveying', 'Revit', 'Contract Management', 'IS Code'],
    mustHaveSections: ['Work Experience', 'Skills (Software)', 'Projects', 'Education'],
    formattingRules: [
      'List software tools (AutoCAD, STAAD Pro) in a dedicated Technical Skills section',
      'Include project types and scale: residential, commercial, infrastructure; project value in crores',
      'Add IS Code knowledge for Indian structural engineering roles',
    ],
    commonAtsFailures: [
      'Not listing software tools separately — ATS searches for AutoCAD, STAAD Pro, ETABS',
      'Omitting the scale and type of projects — key signals for site-based roles',
      'Not including "structural design" or "RCC" for structural engineering roles',
    ],
    keywordTips: [
      'Include both "AutoCAD" and "CAD" — different ATS search terms',
      'Add "BOQ" (Bill of Quantities) and "estimation" for quantity surveying roles',
      'Include "RERA compliance" for real estate projects in India',
    ],
    faqs: [
      { q: 'What ATS keywords should a civil engineer include?', a: 'Core: Civil Engineer, AutoCAD, STAAD Pro, Project Management, Site Supervision, Structural Design, Estimation. Add for India: IS Code, BOQ, RCC Design, ETABS, Revit, SketchUp. Include project scale: "₹50Cr residential project", "3 km highway construction".' },
      { q: 'Should a civil engineer include GATE score on their CV?', a: 'Yes, if you appeared for GATE within the last 3 years and scored above 400. GATE score is relevant for PSU applications (NTPC, NHPC, ONGC, BHEL). For private sector roles, it is less critical but shows academic rigour. Include it in the Education section with the year and score/percentile.' },
    ],
  },
  'mechanical-engineer': {
    atsKeywords: ['Mechanical Engineer', 'AutoCAD', 'SolidWorks', 'CATIA', 'ANSYS', 'Product Design', 'Manufacturing', 'GD&T', 'CAD/CAM', 'FEA', 'Thermal Analysis', 'CNC', 'Lean Manufacturing', 'Six Sigma', 'Quality Control', 'SAP PM'],
    mustHaveSections: ['Skills (Software & Tools)', 'Work Experience', 'Projects', 'Education'],
    formattingRules: [
      'List CAD software (SolidWorks, CATIA, ANSYS) prominently in Skills',
      'Include manufacturing sector: automotive, aerospace, defence, FMCG',
      'Quantify engineering impact: "reduced part weight by 15% through topology optimisation"',
    ],
    commonAtsFailures: [
      'Not specifying CAD tool — ATS treats "CAD" and "SolidWorks" as separate keywords',
      'Omitting sector experience — many ME roles are sector-specific (auto, aero, defence)',
      'Missing manufacturing methodology: Lean, Six Sigma, 5S',
    ],
    keywordTips: [
      'Include FEA tools: "ANSYS", "Abaqus", "Nastran"',
      'Add manufacturing: "CNC machining", "injection moulding", "sheet metal"',
      'Include "GD&T" (Geometric Dimensioning and Tolerancing) for precision roles',
    ],
    faqs: [
      { q: 'What ATS keywords should a mechanical engineer include?', a: 'Core: Mechanical Engineer, AutoCAD, SolidWorks or CATIA, ANSYS, Product Design, GD&T, Manufacturing. Add: Lean Manufacturing, Six Sigma, CNC, FEA, SAP PM. For sector roles: Automotive (DFMEA, PPAP), Aerospace (AS9100), Oil & Gas (ASME, API).' },
      { q: 'Should a mechanical engineer list GATE score on their CV for private sector roles?', a: 'Only if applying to PSUs or R&D roles at government-linked companies (DRDO, ISRO, BHEL). For private sector manufacturing and product design roles, GATE score is largely irrelevant. Focus instead on specific software skills, project outcomes, and manufacturing experience.' },
    ],
  },
  'nursing': {
    atsKeywords: ['Registered Nurse', 'Staff Nurse', 'Patient Care', 'Clinical Assessment', 'ICU', 'CCU', 'Emergency Care', 'Medication Administration', 'IV Therapy', 'Wound Care', 'EHR', 'BLS', 'ACLS', 'Infection Control', 'Patient Safety', 'Nursing Assessment'],
    mustHaveSections: ['Work Experience', 'Licences & Certifications', 'Clinical Skills', 'Education'],
    formattingRules: [
      'Include nursing licence number and Indian Nursing Council (INC) registration',
      'List certifications: BLS, ACLS, PALS prominently near the top',
      'Specify ward/unit type: ICU, CCU, Emergency, Paediatrics, OBG, OT',
    ],
    commonAtsFailures: [
      'Not including the specific unit or ward — recruiters filter by clinical specialisation',
      'Missing licence information — mandatory for nursing roles',
      'Omitting BLS/ACLS certifications if held',
    ],
    keywordTips: [
      'Include "patient-to-nurse ratio" experience if relevant: "managed 1:4 ICU ratio"',
      'Add EHR/EMR systems used: "Cerner", "Epic", "Meditech", "hospital HMIS"',
      'Include "Infection Control" and "NABH" for hospital-accreditation-sensitive roles',
    ],
    faqs: [
      { q: 'What ATS keywords should a nurse include on their CV in India?', a: 'Core: Registered Nurse, Staff Nurse, Patient Care, Clinical Assessment, Medication Administration, BLS, ACLS. Add unit: ICU, CCU, Emergency, OT, Paediatrics, OBG. Include certifications prominently: "BLS (AHA certified 2025)", "ACLS", "INC Registration No. XXXX".' },
      { q: 'Should Indian nurses use a different CV format for abroad applications?', a: 'Yes — for Gulf (UAE, Saudi Arabia, Qatar), UK, Australia, and USA nursing roles, you need a more detailed clinical CV specifying patient-nurse ratios, specific procedures performed, and English proficiency (IELTS/OET scores). Also include NCLEX-RN or HAAD/DHA/MOH exam status for respective regions.' },
    ],
  },
  'electrical-engineer': {
    atsKeywords: ['Electrical Engineer', 'Power Systems', 'AutoCAD Electrical', 'PLC', 'SCADA', 'HV/LV', 'Switchgear', 'Transformer', 'Protection Systems', 'Cable Sizing', 'Single Line Diagram', 'ETAP', 'Electrical Design', 'Testing & Commissioning', 'IEC Standards'],
    mustHaveSections: ['Skills (Technical)', 'Work Experience', 'Projects', 'Education'],
    formattingRules: [
      'Specify voltage levels worked on: HV (11kV, 33kV, 132kV), LV (415V, 690V)',
      'List standards followed: IEC, IS, IEEE, NEC',
      'Include project types: substation, industrial, commercial, renewable energy',
    ],
    commonAtsFailures: [
      'Not specifying PLC brands: Siemens S7, Allen Bradley, Mitsubishi — ATS searches for these',
      'Missing voltage level experience — key filter for power sector roles',
      'Not including ETAP or DIALUX for design roles',
    ],
    keywordTips: [
      'Include renewable energy: "solar PV", "wind energy", "SCADA for renewables"',
      'Add PLC/SCADA brands: "Siemens S7-300", "Allen Bradley PLC", "Wonderware SCADA"',
      'Include "protection systems" and "relay coordination" for power roles',
    ],
    faqs: [
      { q: 'What ATS keywords should an electrical engineer include?', a: 'Core: Electrical Engineer, Power Systems, AutoCAD Electrical, PLC, SCADA, HV/LV, Switchgear, Cable Sizing, ETAP. Add for India: IS standards, CPRI, ERDA. For renewables: solar PV design, HOMER, PVSyst. For industrial: DCS, instrumentation, motor control centres (MCC).' },
      { q: 'Does Gate score matter for electrical engineering jobs in PSUs?', a: 'Yes — GATE is mandatory for PSU recruitment through GATE (NTPC, PowerGrid, PGCIL, BHEL, ONGC). A high GATE score (typically above 600 out of 1000 for top PSUs) is required. For private sector electrical roles, GATE is less important — focus on software tools, project scale, and domain experience.' },
    ],
  },
  'accountant': {
    atsKeywords: ['Accountant', 'Accounting', 'Tally', 'GST', 'TDS', 'Income Tax', 'Financial Statements', 'Balance Sheet', 'P&L', 'Bank Reconciliation', 'Accounts Payable', 'Accounts Receivable', 'Audit', 'Ind AS', 'GAAP', 'MIS', 'ERP', 'SAP FICO', 'QuickBooks'],
    mustHaveSections: ['Work Experience', 'Skills (Accounting Tools)', 'Certifications', 'Education'],
    formattingRules: [
      'Include Tally version: "Tally Prime", "Tally ERP 9"',
      'List all Indian compliance keywords: GST, TDS, PF, ESI, ROC filing',
      'Specify CA / ICAI status if applicable',
    ],
    commonAtsFailures: [
      'Not including "Tally" — the most searched accounting tool for Indian roles',
      'Missing GST and TDS keywords for Indian accountant roles',
      'No mention of compliance filings (GSTR-1, GSTR-3B, TDS returns)',
    ],
    keywordTips: [
      'Include GST filing: "GSTR-1", "GSTR-3B", "GSTR-9 annual return"',
      'Add TDS: "TDS computation", "Form 16", "Form 26Q", "TDS returns"',
      'Include "statutory audit", "internal audit" if applicable',
    ],
    faqs: [
      { q: 'What ATS keywords should an accountant in India include?', a: 'Core: Accountant, Tally (Tally Prime), GST, TDS, Financial Statements, Balance Sheet, P&L, Bank Reconciliation. Indian-specific: GSTR-1, GSTR-3B, PF, ESI, ROC filing, statutory audit. Add ERP if used: SAP FICO, Oracle Financials, QuickBooks. Include CA if applicable.' },
      { q: 'Should an accountant list GST compliance experience on their CV?', a: 'Absolutely. For any Indian accounting role, GST knowledge (registration, return filing, reconciliation, input tax credit) is a primary ATS filter. Be specific: "Filed GSTR-1, GSTR-3B, GSTR-9 for 15 entities with ₹200Cr+ annual turnover." Specificity dramatically improves both ATS score and recruiter impression.' },
    ],
  },
  'supply-chain-manager': {
    atsKeywords: ['Supply Chain Manager', 'Supply Chain Management', 'Logistics', 'Procurement', 'Vendor Management', 'Inventory Management', 'Demand Planning', 'Forecasting', 'ERP', 'SAP MM', 'SAP SCM', 'Warehouse Management', 'Last Mile Delivery', 'S&OP', 'OTIF', 'Lean', 'Six Sigma'],
    mustHaveSections: ['Work Experience', 'Key Achievements', 'Skills', 'Education'],
    formattingRules: [
      'Include S&OP experience explicitly if you have it',
      'Quantify supply chain metrics: OTIF %, inventory turns, fill rate',
      'List ERP modules: SAP MM, SAP SCM, Oracle SCM, NetSuite',
    ],
    commonAtsFailures: [
      'Not including "S&OP" or "Sales & Operations Planning" — key senior SC keyword',
      'Missing SAP module details (MM, SCM, WM) — ATS searches for module abbreviations',
      'No OTIF or service level metrics — primary supply chain performance indicators',
    ],
    keywordTips: [
      'Include "demand planning" and "supply planning" separately',
      'Add "last mile delivery" for e-commerce or D2C supply chain roles',
      'Include "import/export" and "customs clearance" for international logistics roles',
    ],
    faqs: [
      { q: 'What ATS keywords should a supply chain manager include?', a: 'Core: Supply Chain Management, Logistics, Procurement, Vendor Management, Inventory Management, Demand Planning, S&OP, OTIF. Add tools: SAP MM, SAP SCM, Oracle SCM. Include: Lean, Six Sigma, Warehouse Management, Last Mile Delivery, 3PL management.' },
      { q: 'Is SAP certification important for supply chain roles in India?', a: 'Very — particularly SAP MM (Materials Management) and SAP SCM. Large Indian companies (Reliance, Mahindra, Tata Group, HUL, ITC) and MNCs with India operations use SAP heavily. Being certified or experienced in SAP MM/SCM modules significantly improves ATS match rates and recruiter interest.' },
    ],
  },
  'teacher': {
    atsKeywords: ['Teacher', 'Educator', 'Curriculum Development', 'Lesson Planning', 'Classroom Management', 'CBSE', 'ICSE', 'IB', 'Cambridge', 'Student Assessment', 'Differentiated Instruction', 'Learning Outcomes', 'Parent Communication', 'EdTech', 'Google Classroom', 'Bloom\'s Taxonomy'],
    mustHaveSections: ['Work Experience', 'Skills', 'Certifications (B.Ed, TET)', 'Education'],
    formattingRules: [
      'Include teaching licence and qualification: B.Ed, D.El.Ed, TET/CTET qualification',
      'Specify curriculum board: CBSE, ICSE, IB, Cambridge (IGCSE)',
      'List subjects taught and grade levels: "Grade 6–10, Mathematics and Science"',
    ],
    commonAtsFailures: [
      'Not specifying the curriculum board — CBSE, ICSE, IB schools have different hiring funnels',
      'Omitting B.Ed or TET qualification — mandatory filters for many schools',
      'Not quantifying class size or student outcomes',
    ],
    keywordTips: [
      'Include "CTET" (Central Teacher Eligibility Test) or "TET" if cleared',
      'Add EdTech tools: "Google Classroom", "Zoom", "Microsoft Teams", "Moodle"',
      'Include "student assessment" and "learning outcomes" — key JD phrases',
    ],
    faqs: [
      { q: 'What ATS keywords should a teacher include in India?', a: 'Core: Teacher, Educator, Curriculum Development, Lesson Planning, Classroom Management, CBSE (or ICSE/IB), Student Assessment. Include qualifications: B.Ed, TET, CTET. For senior roles: curriculum design, department head, academic coordinator.' },
      { q: 'Do school job applications in India go through ATS?', a: 'Larger school groups (Amity, DPS, Billabong, VIBGYOR, Orchids) and EdTech companies (BYJU\'S, Vedantu, Unacademy) do use ATS or structured digital applications. Smaller private schools often review CVs manually. However, having an ATS-optimised CV ensures it reads clearly whether reviewed by an algorithm or a school principal.' },
    ],
  },
  'graphic-designer': {
    atsKeywords: ['Graphic Designer', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma', 'Brand Identity', 'Visual Design', 'Typography', 'Logo Design', 'Print Design', 'Digital Design', 'Motion Graphics', 'After Effects', 'Social Media Design', 'UI Design', 'Canva'],
    mustHaveSections: ['Skills (Design Tools)', 'Work Experience', 'Portfolio', 'Education'],
    formattingRules: [
      'Portfolio link is mandatory — include in the header/contact section',
      'Single-column text CV (not a visual design piece) for ATS parsing',
      'List all Adobe Creative Suite tools individually',
    ],
    commonAtsFailures: [
      'Creating a visually designed CV as the primary submission — ATS cannot parse images',
      'Not listing each Adobe tool separately: "Adobe Suite" ≠ "Photoshop", "Illustrator", "InDesign"',
      'Missing the type of design work: print, digital, social media, motion',
    ],
    keywordTips: [
      'Include "brand identity" if you have done full brand projects',
      'Add "motion graphics" and "After Effects" for video/animation roles',
      'Include "social media design" for D2C brand designer roles',
    ],
    faqs: [
      { q: 'What ATS keywords should a graphic designer include?', a: 'Core: Graphic Designer, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Figma, Typography, Brand Identity, Visual Design. Add for digital roles: UI Design, Social Media Design, Canva. For motion: After Effects, Premiere Pro, Motion Graphics.' },
      { q: 'Should a graphic designer submit their CV as a PDF or Word doc?', a: 'Submit a plain-text PDF for your CV text, and a separate portfolio PDF or portfolio URL. Never submit your visual CV template as the primary ATS submission — ATS cannot parse it. Keep the CV text-first; let the portfolio demonstrate your design skills.' },
    ],
  },
  'python-developer': {
    atsKeywords: ['Python Developer', 'Python', 'Django', 'Flask', 'FastAPI', 'REST API', 'PostgreSQL', 'MySQL', 'AWS', 'Docker', 'Git', 'Data Engineering', 'Pandas', 'NumPy', 'Celery', 'Redis', 'SQLAlchemy', 'Machine Learning', 'Pytest', 'CI/CD'],
    mustHaveSections: ['Skills (Technical)', 'Work Experience', 'Projects', 'Education'],
    formattingRules: [
      'List Python frameworks individually: "Django", "Flask", "FastAPI" — not just "Python frameworks"',
      'Include testing frameworks: "Pytest", "unittest"',
      'Add GitHub repository links to projects',
    ],
    commonAtsFailures: [
      'Writing only "Python" without frameworks — ATS and JDs search for Django/FastAPI',
      'Missing async/await or "asyncio" for modern Python web service roles',
      'Not including database ORM: "SQLAlchemy", "Django ORM"',
    ],
    keywordTips: [
      'Include Python version expertise: "Python 3.10+", "type hints", "async/await"',
      'Add data engineering tools: "Apache Airflow", "dbt", "Spark" for data pipeline roles',
      'Include "Celery" for asynchronous task queue experience',
    ],
    faqs: [
      { q: 'What ATS keywords should a Python developer include?', a: 'Core: Python, Django or FastAPI or Flask, REST API, PostgreSQL or MySQL, Docker, AWS or GCP, Git. Add: Redis, Celery, Pytest, SQLAlchemy. For data roles: Pandas, NumPy, Airflow, Spark. For ML-adjacent: TensorFlow, PyTorch, Scikit-learn.' },
      { q: 'Should a Python developer list both Python 2 and Python 3 experience?', a: 'Only list Python 2 if the JD specifically requires it (legacy system maintenance). For all modern roles, default to Python 3 only. Listing Python 2 for modern product company roles may actually raise red flags about legacy experience rather than demonstrating versatility.' },
    ],
  },
  'java-developer': {
    atsKeywords: ['Java Developer', 'Java', 'Spring Boot', 'Spring Framework', 'Hibernate', 'JPA', 'Maven', 'Gradle', 'REST API', 'Microservices', 'PostgreSQL', 'MySQL', 'AWS', 'Docker', 'Kafka', 'Redis', 'JUnit', 'Mockito', 'CI/CD', 'Git'],
    mustHaveSections: ['Skills (Technical)', 'Work Experience', 'Projects', 'Education'],
    formattingRules: [
      'List Spring sub-frameworks: "Spring Boot", "Spring Security", "Spring Data"',
      'Include Java version: "Java 17", "Java 21 (LTS)"',
      'Add build tools: "Maven", "Gradle"',
    ],
    commonAtsFailures: [
      'Writing "J2EE" for modern roles — use "Java", "Spring Boot" for current JDs',
      'Not including "Spring Boot" separately from "Spring Framework"',
      'Missing testing frameworks: "JUnit 5", "Mockito"',
    ],
    keywordTips: [
      'Include "microservices" and "distributed systems" for senior roles',
      'Add message brokers: "Apache Kafka", "ActiveMQ", "RabbitMQ"',
      'Include "JVM tuning" and "GC optimisation" for performance-sensitive roles',
    ],
    faqs: [
      { q: 'What ATS keywords should a Java developer include?', a: 'Core: Java, Spring Boot, Hibernate or JPA, REST API, Maven or Gradle, PostgreSQL or MySQL, Docker, AWS or GCP, Git. Add: Spring Security, Kafka, Redis, JUnit, Mockito, Microservices. For senior: System Design, Distributed Systems, JVM Tuning.' },
      { q: 'Is J2EE still relevant to include on a Java developer CV in 2026?', a: 'Largely no — modern Java development uses Spring Boot and Jakarta EE. Listing "J2EE" signals legacy experience to modern product company recruiters. If you have J2EE experience, reframe it: "enterprise Java (Spring Boot, JPA, REST APIs)" unless you are specifically applying to legacy banking or insurance system maintenance roles.' },
    ],
  },
  'digital-marketing-executive': {
    atsKeywords: ['Digital Marketing Executive', 'Digital Marketing', 'SEO', 'SEM', 'Google Ads', 'Meta Ads', 'Social Media Marketing', 'Content Marketing', 'Email Marketing', 'Google Analytics 4', 'Google Tag Manager', 'HubSpot', 'Mailchimp', 'Conversion Rate Optimisation', 'PPC', 'ROI'],
    mustHaveSections: ['Work Experience', 'Skills (Tools & Platforms)', 'Key Campaigns', 'Education'],
    formattingRules: [
      'Quantify every channel: "managed ₹5L/month Google Ads budget with 4.2x ROAS"',
      'List specific platforms — "digital marketing" alone scores poorly in ATS',
      'Include certifications: Google Ads, Meta Blueprint, HubSpot',
    ],
    commonAtsFailures: [
      'Not listing Google Ads, Meta Ads separately — ATS searches for these explicitly',
      'Using "social media" without platform names: Instagram, LinkedIn, YouTube',
      'Missing ROI or ROAS figures — the most important metric for digital marketing roles',
    ],
    keywordTips: [
      'Include "Google Analytics 4" and "GA4" — both search variants exist',
      'Add "A/B testing" and "conversion rate optimisation" (CRO)',
      'Include campaign types: "search campaigns", "shopping ads", "retargeting", "lookalike audiences"',
    ],
    faqs: [
      { q: 'What ATS keywords should a digital marketing executive include?', a: 'Core: Digital Marketing, SEO, Google Ads, Meta Ads, Social Media Marketing, Email Marketing, Google Analytics 4. Add: HubSpot, Mailchimp, Google Tag Manager, Meta Business Suite, LinkedIn Ads. Include metrics: ROAS, CAC, CTR, conversion rate, organic traffic growth.' },
      { q: 'Do digital marketing certifications improve ATS score?', a: 'Yes — Google Ads certification, Meta Blueprint, HubSpot Marketing, and Google Analytics individual qualification are all widely recognised by ATS filters. Include the certification name, issuing body, and year: "Google Ads Search Certification (Google, 2025)". These also signal current platform knowledge.' },
    ],
  },
  'qa-engineer': {
    atsKeywords: ['QA Engineer', 'Quality Assurance', 'Manual Testing', 'Automation Testing', 'Selenium', 'Playwright', 'Cypress', 'TestNG', 'JUnit', 'JIRA', 'API Testing', 'Postman', 'Performance Testing', 'JMeter', 'BDD', 'Cucumber', 'Regression Testing', 'Agile', 'SDLC'],
    mustHaveSections: ['Skills (Testing Tools)', 'Work Experience', 'Projects', 'Education'],
    formattingRules: [
      'Separate manual testing and automation testing clearly in Skills',
      'Include test types: regression, smoke, sanity, integration, performance, security',
      'List automation frameworks with language: "Selenium (Java)", "Playwright (TypeScript)"',
    ],
    commonAtsFailures: [
      'Not specifying the automation tool — "automation testing" without "Selenium" or "Playwright" is too generic',
      'Missing API testing keywords: "Postman", "REST Assured", "API testing"',
      'Not including the programming language used for automation scripts',
    ],
    keywordTips: [
      'Include "BDD" (Behaviour Driven Development) and "Cucumber" if practised',
      'Add "CI/CD integration" — showing your tests run in pipelines is valued',
      'Include "test plan", "test case design", "defect lifecycle" for manual testing roles',
    ],
    faqs: [
      { q: 'What ATS keywords should a QA engineer include?', a: 'Core: QA Engineer, Quality Assurance, Selenium or Playwright, Manual Testing, Automation Testing, JIRA, API Testing, Postman. Add: TestNG, JUnit, Cucumber, BDD, JMeter, Performance Testing, Regression Testing. For senior: Test Strategy, CI/CD, SDLC, defect management.' },
      { q: 'Should a QA engineer list every type of testing they have done?', a: 'Yes, but in a structured Skills section rather than a paragraph. List: "Manual Testing: regression, smoke, sanity, UAT" and "Automation: Selenium (Java), Playwright (TypeScript), Cypress". This structured listing maximises ATS keyword matches while remaining readable.' },
    ],
  },
  'bank-po': {
    atsKeywords: ['Bank PO', 'Probationary Officer', 'Banking', 'IBPS PO', 'SBI PO', 'Credit Analysis', 'Loan Processing', 'Customer Service', 'KYC', 'AML', 'Financial Products', 'Account Management', 'Branch Operations', 'Compliance', 'NPA Management', 'Banking Operations'],
    mustHaveSections: ['Work Experience', 'Bank Examinations Cleared', 'Skills', 'Education'],
    formattingRules: [
      'Include bank exam scores: IBPS PO, SBI PO, RBI Grade B (score, year)',
      'List the bank and branch clearly for each role',
      'Include NIM, CASA, credit portfolio figures if in a business or credit role',
    ],
    commonAtsFailures: [
      'Not including exam names: "IBPS PO", "SBI PO", "RBI Grade B" — ATS at banks searches these',
      'Missing "KYC" and "AML" compliance keywords',
      'Not quantifying portfolio size or branch business metrics',
    ],
    keywordTips: [
      'Include "CASA" (Current Account Savings Account) for business development roles',
      'Add "NPA recovery" or "NPA management" if in credit or recovery roles',
      'Include "trade finance", "forex", "LC" (Letter of Credit) for international banking',
    ],
    faqs: [
      { q: 'What ATS keywords should a bank PO include on their CV?', a: 'Core: Bank PO, Probationary Officer, Banking, Credit Analysis, Loan Processing, KYC, AML, Customer Service. Add exam credentials: IBPS PO (Score), SBI PO. Include domain: MSME lending, retail banking, trade finance, NPA management, compliance.' },
      { q: 'Do bank PO CVs need to be ATS optimised?', a: 'Yes — particularly for private banks (HDFC, ICICI, Axis, Kotak) and NBFCs that use digital application systems. PSU banks also increasingly use online portals (IBPS, SBI official portals) with keyword screening. A text-based, ATS-friendly CV helps regardless of how it is submitted.' },
    ],
  },
  'customer-success-manager': {
    atsKeywords: ['Customer Success Manager', 'Customer Success', 'SaaS', 'Churn Reduction', 'NPS', 'CSAT', 'Account Management', 'Onboarding', 'Renewal Management', 'Upsell', 'Cross-sell', 'CRM', 'Salesforce', 'Gainsight', 'Renewal Rate', 'Customer Retention', 'ARR', 'MRR'],
    mustHaveSections: ['Work Experience', 'Key Metrics', 'Skills', 'Education'],
    formattingRules: [
      'Quantify all CS metrics: churn rate reduced, NPS improved, ARR managed, renewal rate',
      'Include customer segment: SMB, mid-market, enterprise',
      'List CS tools explicitly: Gainsight, Salesforce, ChurnZero, Intercom',
    ],
    commonAtsFailures: [
      'Not including "churn" or "churn reduction" — the primary CS performance keyword',
      'Missing ARR or MRR figures — essential for CS seniority signals',
      'Not specifying SaaS experience if applying for SaaS CS roles',
    ],
    keywordTips: [
      'Include "QBR" (Quarterly Business Review) if you conduct them',
      'Add "health score" and "customer health" — Gainsight-specific CS terminology',
      'Include "product adoption" and "feature adoption" for PLG companies',
    ],
    faqs: [
      { q: 'What ATS keywords should a customer success manager include?', a: 'Core: Customer Success Manager, Customer Success, Churn Reduction, NPS, CSAT, Account Management, Onboarding, Renewal Management, ARR. Add tools: Gainsight, Salesforce, ChurnZero, Intercom, HubSpot. Include metrics: "maintained 94% renewal rate", "managed ₹15Cr ARR portfolio", "improved NPS from 32 to 54".' },
      { q: 'Is Gainsight experience important for CSM roles?', a: 'Yes — at SaaS companies above 50 employees with a dedicated CS function, Gainsight (or ChurnZero) proficiency is often listed as required or preferred. Include "Gainsight" explicitly in your skills section. Also mention how you used it: "built health score playbooks in Gainsight to reduce churn by 12%".' },
    ],
  },
};
