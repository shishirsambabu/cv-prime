export interface SalaryData {
  byExperience: {
    fresher: string;
    midLevel: string;
    senior: string;
    leadership: string;
  };
  byCompanyType: {
    startup: string;
    midSize: string;
    mnc: string;
    faang: string;
  };
  byLocation: {
    bangalore: string;
    mumbai: string;
    delhi: string;
    hyderabad: string;
    chennai: string;
    pune: string;
    other: string;
  };
  topPayingSkills: string[];
  salaryBoostFactors: string[];
  negotiationTips: string[];
  faqs: Array<{ q: string; a: string }>;
}

export const salaryDataMap: Record<string, SalaryData> = {
  'software-engineer': {
    byExperience: {
      fresher: '₹3.5L – ₹8L (0–2 years; campus hires at FAANG-tier: ₹20L–₹45L)',
      midLevel: '₹12L – ₹30L (3–6 years; senior SDE at product companies)',
      senior: '₹30L – ₹60L (7–12 years; staff/principal engineers)',
      leadership: '₹60L – ₹1.2Cr+ (13+ years; engineering manager, director)',
    },
    byCompanyType: {
      startup: '₹5L – ₹25L (+ ESOPs that may be 0.5–2% for early hires)',
      midSize: '₹8L – ₹35L (solid base, moderate equity)',
      mnc: '₹12L – ₹40L (Infosys, Wipro, TCS typically pay ₹3L–₹15L; IBM, Accenture: ₹8L–₹25L)',
      faang: '₹20L – ₹1Cr+ (Google, Amazon, Microsoft; base + RSU + bonus)',
    },
    byLocation: {
      bangalore: '₹5L – ₹80L (highest-paying city; 15–25% premium over national average)',
      mumbai: '₹4.5L – ₹50L (strong for BFSI tech and fintech)',
      delhi: '₹4L – ₹40L (strong for MNC engineering centres)',
      hyderabad: '₹4L – ₹55L (major FAANG hub; Microsoft, Amazon, Google offices)',
      chennai: '₹3.5L – ₹30L (strong IT services; TCS, Infosys, Cognizant)',
      pune: '₹4L – ₹35L (strong for German MNCs, IT services, defence)',
      other: '₹2.5L – ₹20L (Tier-2 cities; Coimbatore, Jaipur, Kochi)',
    },
    topPayingSkills: ['System Design', 'Distributed Systems', 'AWS/GCP', 'Kubernetes', 'Golang', 'Rust', 'Machine Learning', 'React + Node.js full-stack', 'Technical Leadership', 'FAANG interview prep'],
    salaryBoostFactors: [
      'FAANG/unicorn experience on CV (30–60% premium)',
      'Open-source contributions or engineering blog (5–15% premium in top companies)',
      'Cloud certifications: AWS Solutions Architect, GCP Professional (10–20% premium)',
      'DSA proficiency — competitive programmers command premium at product companies',
      'System design depth — staff-level roles hinge on this competency',
      'Leadership skills — managing 2+ engineers increases salary band significantly',
    ],
    negotiationTips: [
      'Always negotiate after an offer — 80%+ of tech offers have 10–20% headroom',
      'Use competing offers from other companies as leverage — do it honestly',
      'Negotiate RSUs and joining bonus separately from base salary',
      'Research Glassdoor, Levels.fyi, and Blind for exact company pay bands before negotiating',
      'Ask for the 18-month performance review schedule to understand raise cycles',
    ],
    faqs: [
      { q: 'What is the average software engineer salary in India in 2026?', a: 'The average software engineer salary in India is approximately ₹8L–₹15L for 2–5 years of experience. Freshers at IT service companies earn ₹3.5L–₹6L, while product company engineers with the same experience earn ₹12L–₹25L. FAANG and unicorn-tier engineers earn ₹30L–₹1Cr+ at senior levels.' },
      { q: 'Which company pays the most to software engineers in India?', a: 'Google, Amazon, and Microsoft consistently pay the highest total compensation for software engineers in India, with senior roles at ₹50L–₹1Cr+. Among Indian companies, Razorpay, CRED, Groww, Zepto, and PhonePe pay ₹30L–₹60L at senior levels. IT service companies (TCS, Infosys, Wipro) pay significantly less at comparable experience levels.' },
      { q: 'How much does a fresher software engineer earn in India?', a: 'Campus hires at IT service companies (TCS, Infosys, Wipro) earn ₹3.5L–₹4.5L. At product startups, ₹6L–₹12L is common. Exceptional candidates at FAANG can earn ₹20L–₹45L including equity at the fresher level through campus recruitment.' },
    ],
  },
  'data-analyst': {
    byExperience: {
      fresher: '₹3L – ₹6L (0–2 years; analytics at IT services and consulting)',
      midLevel: '₹7L – ₹18L (3–6 years; senior analyst at product companies)',
      senior: '₹18L – ₹35L (7–12 years; analytics manager or principal analyst)',
      leadership: '₹35L – ₹70L (13+ years; head of analytics, VP Data)',
    },
    byCompanyType: {
      startup: '₹5L – ₹20L (analytics at early-stage companies; equity potential)',
      midSize: '₹6L – ₹22L (solid pay, structured growth)',
      mnc: '₹6L – ₹25L (consulting firms pay more; IT services less)',
      faang: '₹18L – ₹60L (Google, Amazon data analysts command premium)',
    },
    byLocation: {
      bangalore: '₹4L – ₹45L (highest concentration of data roles)',
      mumbai: '₹4L – ₹35L (strong in BFSI analytics)',
      delhi: '₹3.5L – ₹28L',
      hyderabad: '₹3.5L – ₹35L',
      chennai: '₹3L – ₹22L',
      pune: '₹3L – ₹20L',
      other: '₹2.5L – ₹14L',
    },
    topPayingSkills: ['SQL (advanced)', 'Python (Pandas, NumPy)', 'dbt', 'BigQuery', 'Snowflake', 'Tableau', 'Power BI', 'A/B Testing', 'Statistical Modelling', 'Machine Learning basics'],
    salaryBoostFactors: [
      'SQL fluency at advanced level (window functions, CTEs, query optimization)',
      'dbt and modern data stack experience (30–40% premium at data-first companies)',
      'Domain expertise in BFSI, e-commerce, or healthcare commands higher salaries',
      'Google Data Analytics or Coursera Data Science certifications for freshers',
      'Python + SQL combination significantly expands salary range vs SQL alone',
    ],
    negotiationTips: [
      'Show specific analysis outcomes that influenced business decisions — data speaks in negotiations',
      'Highlight data stack depth — dbt, Snowflake, Databricks knowledge is scarce and premium',
      'Use offer letters from data-first companies (Fractal, Mu Sigma, ThoughtWorks Data) as leverage',
    ],
    faqs: [
      { q: 'What is the average data analyst salary in India in 2026?', a: 'The average data analyst salary in India in 2026 ranges from ₹5L–₹12L at the 2–4 year experience level. Entry-level analysts at IT services earn ₹3L–₹5L, while those at product companies (Flipkart, Amazon, Meesho) earn ₹8L–₹18L for the same experience. Senior analysts and analytics managers at leading companies earn ₹20L–₹40L.' },
      { q: 'Does a data analyst need to know Python to get a higher salary?', a: 'Yes, significantly. Data analysts who combine SQL with Python (Pandas, NumPy, Matplotlib) earn 30–50% more than SQL-only analysts for the same experience level. Python opens the door to statistical modelling, automation, and machine learning work — all of which command premium salaries in India.' },
    ],
  },
  'product-manager': {
    byExperience: {
      fresher: '₹12L – ₹20L (APM programmes at top startups; MBA from premier institutes)',
      midLevel: '₹20L – ₹45L (3–6 years PM; product manager at growth-stage startups)',
      senior: '₹45L – ₹80L (7–12 years; senior PM or Group PM)',
      leadership: '₹80L – ₹1.5Cr+ (13+ years; Director of Product, VP Product)',
    },
    byCompanyType: {
      startup: '₹12L – ₹50L (high equity; salary varies by funding stage)',
      midSize: '₹15L – ₹45L',
      mnc: '₹15L – ₹40L (Microsoft, Google India PM roles: ₹30L–₹80L)',
      faang: '₹30L – ₹1.2Cr (total comp including equity)',
    },
    byLocation: {
      bangalore: '₹15L – ₹1Cr+ (Zomato, Razorpay, CRED, Meesho headquarters)',
      mumbai: '₹12L – ₹60L',
      delhi: '₹12L – ₹55L',
      hyderabad: '₹10L – ₹60L',
      chennai: '₹8L – ₹35L',
      pune: '₹8L – ₹35L',
      other: '₹6L – ₹20L',
    },
    topPayingSkills: ['Product Strategy', 'Growth PM skills', 'Data-driven roadmapping', 'Platform PM', 'AI/ML product experience', 'B2B SaaS PM', 'Payments/fintech domain', 'Zero-to-one product launches', 'SQL for analytics', 'OKR-driven leadership'],
    salaryBoostFactors: [
      'IIM/IIT pedigree commands 30–50% premium at entry and mid level',
      'FAANG or unicorn PM experience (Zomato, Razorpay, CRED, PhonePe) creates a salary moat',
      'Growth-stage startup experience with demonstrated metric impact',
      'Technical background (engineering degree) valued at product-led companies',
      'International experience or MBA from top programme',
    ],
    negotiationTips: [
      'Lead negotiations with your biggest product metric — retention %, ARR growth, DAU improvement',
      'Request ESOP grant separately — negotiate vesting cliff and acceleration clauses',
      'Compare with Glassdoor, LinkedIn Salary, and PM communities on Discord/Slack',
      'At senior levels, total compensation (base + bonus + equity) matters more than base alone',
    ],
    faqs: [
      { q: 'What is the average product manager salary in India in 2026?', a: 'Product managers in India earn ₹15L–₹35L at the 2–5 year experience level, with senior PMs earning ₹40L–₹80L. APMs (Associate Product Managers) at top startups start at ₹12L–₹20L. FAANG PMs in India (Google, Amazon, Microsoft) typically earn ₹30L–₹1Cr+ in total compensation including equity.' },
      { q: 'Do you need an MBA to become a product manager in India?', a: 'No. Most Indian product companies (Zomato, Razorpay, CRED, Groww) prefer engineering backgrounds with demonstrated product thinking over MBA credentials. An MBA from IIM or ISB does accelerate salary growth and opens doors at MNCs, but hands-on product metrics and a strong portfolio matter more at most startups.' },
    ],
  },
  'marketing-manager': {
    byExperience: {
      fresher: '₹3L – ₹6L (digital marketing executive level)',
      midLevel: '₹8L – ₹22L (3–6 years; marketing manager at growth companies)',
      senior: '₹22L – ₹45L (7–12 years; head of marketing at mid-size companies)',
      leadership: '₹45L – ₹1Cr (CMO, VP Marketing at large brands)',
    },
    byCompanyType: {
      startup: '₹6L – ₹30L (+ ESOPs; performance bonus heavy)',
      midSize: '₹8L – ₹28L',
      mnc: '₹12L – ₹45L (HUL, P&G, ITC pay significantly above market)',
      faang: '₹18L – ₹60L',
    },
    byLocation: {
      bangalore: '₹6L – ₹60L',
      mumbai: '₹8L – ₹70L (HUL, P&G headquarters; FMCG marketing hub)',
      delhi: '₹5L – ₹45L',
      hyderabad: '₹4L – ₹30L',
      chennai: '₹4L – ₹25L',
      pune: '₹4L – ₹22L',
      other: '₹3L – ₹15L',
    },
    topPayingSkills: ['Performance Marketing (Meta + Google)', 'SEO at scale', 'Marketing Analytics / Attribution', 'Brand Strategy', 'CRM & Lifecycle Marketing', 'Product Marketing', 'Growth Marketing', 'Content Strategy at scale'],
    salaryBoostFactors: [
      'Performance marketing expertise (ROAS management at ₹1Cr+ budgets) is premium',
      'Category-specific expertise: D2C, SaaS, BFSI, pharma each have salary bands',
      'Revenue attribution skills (connecting marketing spend to GMV/ARR) commands premium',
      'MBA from premier institutes adds 20–35% at FMCG companies specifically',
    ],
    negotiationTips: [
      'Present specific ROAS, CAC reduction, or organic traffic growth numbers upfront',
      'Marketing salaries are highly negotiable — benchmark against industry peers using LinkedIn Salary',
      'In startup roles, negotiate on performance bonus tied to team metric targets',
    ],
    faqs: [
      { q: 'What is the average marketing manager salary in India in 2026?', a: 'Marketing managers in India earn ₹8L–₹22L at the 3–7 year experience level. Digital marketing specialists can command ₹12L–₹25L with strong ROAS and CAC metrics. Senior marketing managers at FMCG companies (HUL, P&G, Marico) earn ₹25L–₹45L. Performance marketing specialists and growth marketers at funded startups often earn more than brand managers at comparable seniority.' },
      { q: 'Is digital marketing or brand marketing better paid in India?', a: 'Digital marketing (performance) roles are currently better paid at comparable seniority in product companies and startups, largely because ROI is measurable. Brand marketing at FMCG companies pays more at senior levels (VP, CMO) through structured salary bands and MNC compensation. The highest salaries combine both digital fluency and brand strategy depth.' },
    ],
  },
  'hr-manager': {
    byExperience: {
      fresher: '₹2.5L – ₹5L (HR executive / recruiter)',
      midLevel: '₹6L – ₹18L (3–6 years; HR manager or HRBP)',
      senior: '₹18L – ₹35L (7–12 years; senior HRBP, HR head at mid-size)',
      leadership: '₹35L – ₹80L (CHRO, VP HR at large enterprises)',
    },
    byCompanyType: {
      startup: '₹5L – ₹22L',
      midSize: '₹6L – ₹20L',
      mnc: '₹8L – ₹35L (Deloitte, Accenture, TCS HR BPs earn higher)',
      faang: '₹15L – ₹50L',
    },
    byLocation: {
      bangalore: '₹4L – ₹50L',
      mumbai: '₹4L – ₹40L',
      delhi: '₹3.5L – ₹35L',
      hyderabad: '₹3L – ₹28L',
      chennai: '₹2.5L – ₹22L',
      pune: '₹2.5L – ₹20L',
      other: '₹2L – ₹12L',
    },
    topPayingSkills: ['HRBP at scale', 'Talent Acquisition for tech roles', 'Compensation & Benefits', 'Organizational Design', 'HR Tech (Workday, SuccessFactors)', 'People Analytics', 'POSH & Labour Law compliance', 'Culture & DEI'],
    salaryBoostFactors: [
      'Tech-sector HRBP experience commands 25–40% premium vs non-tech HR',
      'Talent acquisition for tech/product roles is the highest-paying HR sub-function',
      'HR analytics and people data capabilities are scarce and premium',
      'Darwinbox or Workday implementation experience adds significant value',
    ],
    negotiationTips: [
      'Quantify your hiring outcomes: time-to-hire, cost-per-hire, offer acceptance rate',
      'HR salaries at tech companies are benchmarked differently — use tech company pay data',
      'Retention impact metrics are powerful in negotiations if you have them',
    ],
    faqs: [
      { q: 'What is the average HR manager salary in India in 2026?', a: 'HR managers in India earn ₹6L–₹18L at the 3–7 year experience level. HRBP roles at IT companies and product startups pay ₹10L–₹25L. Talent acquisition specialists for tech roles can earn ₹12L–₹28L. Senior HR leaders (HR Head, CHRO) at large companies earn ₹40L–₹80L or more.' },
      { q: 'Which HR specialisation pays the most in India?', a: 'Talent acquisition for technology roles is currently the highest-paying HR specialisation, followed by Compensation & Benefits (C&B) and HR Analytics. HRBP roles at product companies and unicorns also pay significantly above industry HR roles. L&D and HR operations are typically lower on the pay scale at equivalent seniority.' },
    ],
  },
  'finance-analyst': {
    byExperience: {
      fresher: '₹4L – ₹8L (CA fresher: ₹7L–₹12L; Big 4 Article: ₹3L–₹5L stipend)',
      midLevel: '₹10L – ₹28L (3–6 years; FP&A, IB associate, corporate finance)',
      senior: '₹28L – ₹55L (7–12 years; finance manager, VP Finance at startups)',
      leadership: '₹55L – ₹1.2Cr (CFO, Finance Director at mid-to-large companies)',
    },
    byCompanyType: {
      startup: '₹8L – ₹35L (high equity; VP Finance roles pay ₹35L–₹60L)',
      midSize: '₹8L – ₹25L',
      mnc: '₹10L – ₹40L (Big 4, investment banks pay significantly higher)',
      faang: '₹15L – ₹60L',
    },
    byLocation: {
      bangalore: '₹5L – ₹70L (startup CFO roles pay highest)',
      mumbai: '₹8L – ₹1Cr+ (BFSI hub; investment banking, private equity)',
      delhi: '₹5L – ₹45L',
      hyderabad: '₹4L – ₹35L',
      chennai: '₹3.5L – ₹25L',
      pune: '₹3.5L – ₹22L',
      other: '₹2.5L – ₹15L',
    },
    topPayingSkills: ['Investment Banking (DCF, LBO, M&A)', 'FP&A with Python/Power BI', 'CFA Level 3', 'Financial Modelling (advanced Excel)', 'Private Equity/VC valuation', 'SAP FI/CO', 'CFO-level strategic finance', 'Treasury Management'],
    salaryBoostFactors: [
      'CA with top AIR rank commands 40–60% premium for first 5 years',
      'CFA qualification adds 20–35% premium for investment and research roles',
      'Investment banking experience creates a salary moat — difficult to replicate',
      'Big 4 background (Deloitte, PwC, EY, KPMG) is highly valued in corporate finance',
      'Startup CFO/VP Finance roles often pay above IB salaries with equity',
    ],
    negotiationTips: [
      'CAs and CFAs should research ICAI salary surveys for benchmarking',
      'Investment banking comp is significantly bonus-heavy — negotiate the bonus structure explicitly',
      'Startup VP Finance roles are highly negotiable — ESOP value can exceed base salary',
    ],
    faqs: [
      { q: 'What is the average finance analyst salary in India in 2026?', a: 'Finance analysts in India earn ₹5L–₹15L at the 2–5 year experience level depending on qualification and employer type. CAs earn ₹8L–₹20L at entry level. Investment banking analysts at bulge-bracket banks (Goldman Sachs, JP Morgan India) start at ₹12L–₹25L. Senior finance roles at PE-backed startups pay ₹30L–₹70L.' },
      { q: 'Is CA or CFA better for a finance career in India?', a: 'CA is significantly better for roles in Indian corporate finance, Big 4 advisory, and statutory audit. CFA is better for investment management, equity research, and asset management roles. For investment banking, both are valued but an IIM MBA often provides a faster entry path. Ideally, combine CA with CFA for the highest compensation ceiling in finance.' },
    ],
  },
  'business-analyst': {
    byExperience: {
      fresher: '₹3.5L – ₹7L (IT BA fresh graduate; MBA fresher: ₹5L–₹10L)',
      midLevel: '₹8L – ₹22L (3–6 years; senior BA at IT services or consulting)',
      senior: '₹22L – ₹40L (7–12 years; BA lead, solutions architect)',
      leadership: '₹40L – ₹80L (consulting partner track, transformation head)',
    },
    byCompanyType: {
      startup: '₹7L – ₹25L',
      midSize: '₹6L – ₹20L',
      mnc: '₹8L – ₹35L (Accenture, McKinsey, Deloitte BAs earn significantly more)',
      faang: '₹12L – ₹40L',
    },
    byLocation: {
      bangalore: '₹5L – ₹45L',
      mumbai: '₹5L – ₹40L',
      delhi: '₹4L – ₹35L',
      hyderabad: '₹4L – ₹28L',
      chennai: '₹3L – ₹22L',
      pune: '₹3L – ₹20L',
      other: '₹2.5L – ₹14L',
    },
    topPayingSkills: ['Consulting BA (MBB track)', 'Agile/SAFe', 'Data Analysis with SQL/Python', 'Process Mining (Celonis)', 'BFSI domain', 'Pre-sales/bid management', 'Product Owner skills', 'Enterprise architecture'],
    salaryBoostFactors: [
      'Consulting firm background (McKinsey, BCG, Bain, Deloitte, KPMG) creates highest BA salaries',
      'Domain expertise in BFSI or healthcare commands premium in those sectors',
      'Agile coaching or Scrum Master certification in addition to BA role',
      'CBAP certification (Certified Business Analysis Professional) adds 15–20%',
    ],
    negotiationTips: [
      'Process improvement outcomes in ₹ terms are most compelling in negotiations',
      'IT BA salaries at consulting firms are negotiated on join-band — get an offer from 2 firms',
      'Domain expertise commands more premium than tool expertise in most BA negotiations',
    ],
    faqs: [
      { q: 'What is the average business analyst salary in India in 2026?', a: 'Business analysts in India earn ₹6L–₹15L at the 2–5 year experience level. IT BAs at service companies earn at the lower end; consulting firm BAs (Accenture, Deloitte, McKinsey) earn ₹10L–₹25L for the same experience. Senior BAs and solution architects at leading firms earn ₹25L–₹45L.' },
      { q: 'Is business analyst a well-paid role in India?', a: 'BA is a well-paid career in consulting and technology, particularly with BFSI domain expertise. However, the pay ceiling at IT service companies is lower than product companies or management consulting. The highest BA salaries in India are at MBB (McKinsey, BCG, Bain), Big 4, and enterprise software companies (SAP, Salesforce, Oracle) in specialist roles.' },
    ],
  },
  'frontend-developer': {
    byExperience: {
      fresher: '₹3L – ₹7L (entry-level; product company freshers: ₹8L–₹15L)',
      midLevel: '₹10L – ₹28L (3–6 years; senior frontend engineer)',
      senior: '₹28L – ₹55L (7–12 years; staff frontend engineer, tech lead)',
      leadership: '₹55L – ₹1Cr+ (engineering manager, director)',
    },
    byCompanyType: {
      startup: '₹6L – ₹30L (+ equity; high variance by funding)',
      midSize: '₹8L – ₹28L',
      mnc: '₹10L – ₹35L',
      faang: '₹20L – ₹80L (React specialists at Meta/Google command premium)',
    },
    byLocation: {
      bangalore: '₹5L – ₹80L',
      mumbai: '₹4L – ₹50L',
      delhi: '₹3.5L – ₹40L',
      hyderabad: '₹4L – ₹55L',
      chennai: '₹3L – ₹28L',
      pune: '₹3L – ₹28L',
      other: '₹2.5L – ₹18L',
    },
    topPayingSkills: ['React + TypeScript (production scale)', 'Next.js (SSR/SSG)', 'Performance optimization (Core Web Vitals)', 'Design Systems (Figma to code)', 'Testing (Cypress, Playwright)', 'Web accessibility (WCAG)', 'React Native (mobile)', 'GraphQL', 'Micro-frontend architecture'],
    salaryBoostFactors: [
      'TypeScript depth — typed codebases are the standard and pay more',
      'Performance optimization experience (Core Web Vitals, Lighthouse scores)',
      'Design-system ownership — creating and maintaining component libraries',
      'Open-source contributions to React ecosystem',
    ],
    negotiationTips: [
      'Portfolio with live, performant projects is the strongest negotiating tool',
      'Lighthouse score improvements and Core Web Vitals metrics are specific and credible',
      'Senior frontend engineers are scarce — use competing offers aggressively',
    ],
    faqs: [
      { q: 'What is the average frontend developer salary in India in 2026?', a: 'Frontend developers in India earn ₹5L–₹18L at the 2–4 year experience level. React/TypeScript developers at product companies earn ₹12L–₹28L for mid-level roles. Senior frontend engineers at leading product companies (Razorpay, CRED, Flipkart) earn ₹30L–₹55L. FAANG frontend roles start at ₹20L+ for freshers.' },
      { q: 'Is frontend development well paid in India compared to backend?', a: 'Backend development generally pays 10–20% more than frontend at equivalent seniority in India, primarily because backend engineers are slightly more scarce and system design complexity is perceived as higher. However, full-stack or specialized frontend engineers (performance optimization, design systems, mobile-web) can match or exceed backend salaries. The gap is narrowing as React expertise becomes highly valued.' },
    ],
  },
  'backend-developer': {
    byExperience: {
      fresher: '₹4L – ₹8L (0–2 years; product companies: ₹10L–₹20L)',
      midLevel: '₹12L – ₹32L (3–6 years; senior backend engineer)',
      senior: '₹32L – ₹70L (7–12 years; staff engineer, principal)',
      leadership: '₹70L – ₹1.2Cr+ (engineering director, VP Engineering)',
    },
    byCompanyType: {
      startup: '₹8L – ₹35L (equity often significant)',
      midSize: '₹10L – ₹32L',
      mnc: '₹12L – ₹40L',
      faang: '₹25L – ₹1Cr+ (total comp)',
    },
    byLocation: {
      bangalore: '₹6L – ₹1Cr+',
      mumbai: '₹5L – ₹60L',
      delhi: '₹4L – ₹50L',
      hyderabad: '₹5L – ₹65L (Microsoft, Amazon, Google engineering centres)',
      chennai: '₹4L – ₹30L',
      pune: '₹4L – ₹32L',
      other: '₹2.5L – ₹20L',
    },
    topPayingSkills: ['Distributed systems', 'Kafka/event streaming', 'System design at scale', 'Golang (premium in India)', 'Rust', 'AWS/GCP deep expertise', 'Database optimization (PostgreSQL, Redis)', 'gRPC/Protocol Buffers', 'Kubernetes workloads'],
    salaryBoostFactors: [
      'System design depth is the primary driver of senior backend salaries',
      'Experience with high-QPS systems (100K+ RPS) creates a significant salary moat',
      'Golang experience commands 15–25% premium over Node.js/Python for backend roles',
      'Cloud-native architecture experience (serverless, containers, service mesh)',
      'Open-source contributions to major backend frameworks',
    ],
    negotiationTips: [
      'System scale metrics are the most compelling negotiation evidence',
      'Backend engineers with distributed systems experience are in short supply — use that',
      'AWS certification + system design + production scale experience = strong negotiation position',
    ],
    faqs: [
      { q: 'What is the average backend developer salary in India in 2026?', a: 'Backend developers in India earn ₹7L–₹20L at the 2–5 year experience level. Node.js/Python backend engineers at product companies earn ₹12L–₹28L at mid-level. Java backend engineers at enterprise companies earn ₹10L–₹25L. Senior backend engineers specializing in distributed systems earn ₹35L–₹70L at leading product companies.' },
      { q: 'Which backend language pays the most in India in 2026?', a: 'Golang engineers command the highest backend salaries in India, with a 15–25% premium over Node.js or Python developers of equivalent experience. This is primarily due to scarcity — fewer engineers know Go well. Rust commands similar premiums but is rarer. Java remains the most in-demand and offers the largest number of opportunities, though not always the highest individual salaries.' },
    ],
  },
  'data-scientist': {
    byExperience: {
      fresher: '₹5L – ₹10L (M.Tech/PhD fresher at research companies: ₹12L–₹20L)',
      midLevel: '₹14L – ₹35L (3–6 years; deployed models, product impact)',
      senior: '₹35L – ₹70L (7–12 years; principal data scientist)',
      leadership: '₹70L – ₹1.5Cr+ (Head of Data Science, VP AI)',
    },
    byCompanyType: {
      startup: '₹10L – ₹45L (high equity potential at AI-first companies)',
      midSize: '₹10L – ₹32L',
      mnc: '₹12L – ₹45L (Fractal, Mu Sigma, Tiger Analytics for analytics; FAANG for AI)',
      faang: '₹25L – ₹1.2Cr (total comp; AI research at Google Brain level: higher)',
    },
    byLocation: {
      bangalore: '₹8L – ₹1Cr+ (AI startup hub)',
      mumbai: '₹6L – ₹60L',
      delhi: '₹5L – ₹50L',
      hyderabad: '₹6L – ₹65L',
      chennai: '₹4L – ₹35L',
      pune: '₹4L – ₹30L',
      other: '₹3L – ₹20L',
    },
    topPayingSkills: ['LLM fine-tuning and deployment', 'MLOps (MLflow, Kubeflow, SageMaker)', 'Deep Learning (TensorFlow, PyTorch)', 'Reinforcement Learning', 'Computer Vision at scale', 'NLP + transformers', 'Causal inference', 'Feature engineering at scale (Spark)', 'A/B testing frameworks'],
    salaryBoostFactors: [
      'GenAI and LLM experience is commanding 30–50% premiums in 2026',
      'MLOps depth (model deployment, monitoring, retraining) is scarce and premium',
      'Published research papers from top conferences (NeurIPS, ICML, ICLR) add significant value',
      'Kaggle Master or Grandmaster status is a strong differentiator',
      'Domain-specific ML (healthcare, fintech, manufacturing) commands niche premiums',
    ],
    negotiationTips: [
      'Deployed model impact (predictions/day, revenue influenced) is the strongest data science negotiation asset',
      'AI/ML skills are in a supply shortage — do not undervalue yourself',
      'Research publication record significantly raises your negotiation ceiling',
    ],
    faqs: [
      { q: 'What is the average data scientist salary in India in 2026?', a: 'Data scientists in India earn ₹10L–₹25L at the 2–5 year experience level. Those with deployed ML models and business impact evidence earn toward the higher end. Senior data scientists with GenAI or LLM experience earn ₹35L–₹70L. Research scientists at Google DeepMind, Microsoft Research, or top AI startups earn ₹40L–₹1Cr+ in total compensation.' },
      { q: 'Is GenAI experience increasing data scientist salaries in India?', a: 'Yes, significantly. Data scientists with hands-on LLM fine-tuning, RAG system deployment, or AI agent development experience command 30–50% salary premiums over traditional ML engineers in 2026. This premium is concentrated at product companies, AI-first startups, and FAANG where GenAI product development is a strategic priority.' },
    ],
  },
  'devops-engineer': {
    byExperience: {
      fresher: '₹3.5L – ₹7L (Linux/cloud admin; product companies: ₹8L–₹15L)',
      midLevel: '₹10L – ₹28L (3–6 years; Kubernetes, Terraform proficiency)',
      senior: '₹28L – ₹55L (7–12 years; principal SRE, platform engineer)',
      leadership: '₹55L – ₹1Cr (head of infrastructure, VP Engineering/Platform)',
    },
    byCompanyType: {
      startup: '₹7L – ₹30L (equity significant at cloud-native companies)',
      midSize: '₹8L – ₹28L',
      mnc: '₹10L – ₹35L',
      faang: '₹20L – ₹80L (SRE roles at Google/Amazon/Microsoft)',
    },
    byLocation: {
      bangalore: '₹5L – ₹80L',
      mumbai: '₹4L – ₹55L',
      delhi: '₹4L – ₹45L',
      hyderabad: '₹4L – ₹60L (Amazon, Microsoft cloud engineering centres)',
      chennai: '₹3L – ₹28L',
      pune: '₹3.5L – ₹30L',
      other: '₹2.5L – ₹18L',
    },
    topPayingSkills: ['Kubernetes at scale (50+ nodes)', 'Terraform (IaC)', 'AWS Solutions Architect', 'Site Reliability Engineering (SRE)', 'FinOps (cloud cost optimization)', 'Service mesh (Istio, Linkerd)', 'Security engineering (DevSecOps)', 'Platform engineering', 'Chaos engineering'],
    salaryBoostFactors: [
      'AWS/GCP/Azure Professional certifications add 20–35% to market rate',
      'CKA (Certified Kubernetes Administrator) is highly valued for Kubernetes-heavy roles',
      'FinOps experience — cloud cost optimization with ₹ results — is scarce and premium',
      'SRE mindset (SLOs, error budgets) versus pure ops role commands higher salaries',
    ],
    negotiationTips: [
      'Uptime improvements and MTTR reductions are quantifiable and compelling in negotiations',
      'Cloud cost savings in ₹ terms are an excellent negotiating tool',
      'CKA + AWS SA + production Kubernetes at scale = strong negotiation position',
    ],
    faqs: [
      { q: 'What is the average DevOps engineer salary in India in 2026?', a: 'DevOps engineers in India earn ₹7L–₹20L at the 2–5 year experience level. Platform engineers and SREs with deep Kubernetes and Terraform experience earn ₹20L–₹40L at mid-senior level. Senior SREs and DevOps leads at cloud-first companies earn ₹40L–₹70L. AWS/GCP certifications consistently increase salary offers by 15–25%.' },
      { q: 'Which cloud certification pays the most for DevOps in India?', a: 'AWS Solutions Architect Professional and CKA (Certified Kubernetes Administrator) consistently deliver the highest salary premiums for DevOps engineers in India. AWS SA Pro is most widely recognized by Indian employers. CKA is increasingly mandatory for infrastructure roles at cloud-native companies. Terraform Associate is the third most valued, particularly for platform engineering roles.' },
    ],
  },
  'sales-manager': {
    byExperience: {
      fresher: '₹2.5L – ₹5L fixed + variable (sales executive level)',
      midLevel: '₹8L – ₹22L CTC (3–6 years; regional sales manager)',
      senior: '₹22L – ₹50L CTC (7–12 years; national sales manager, BU head)',
      leadership: '₹50L – ₹1.5Cr (VP Sales, Chief Revenue Officer)',
    },
    byCompanyType: {
      startup: '₹8L – ₹40L (high variable component; ESOPs for senior roles)',
      midSize: '₹8L – ₹30L',
      mnc: '₹10L – ₹45L (HUL, P&G sales leadership pays significantly more)',
      faang: '₹18L – ₹60L',
    },
    byLocation: {
      bangalore: '₹6L – ₹80L (SaaS sales hub)',
      mumbai: '₹6L – ₹70L (FMCG and enterprise sales)',
      delhi: '₹5L – ₹55L',
      hyderabad: '₹4L – ₹40L',
      chennai: '₹4L – ₹35L',
      pune: '₹4L – ₹30L',
      other: '₹2.5L – ₹20L',
    },
    topPayingSkills: ['SaaS Enterprise Sales', 'MEDDIC/Challenger methodology', 'Salesforce CRM mastery', 'Strategic Account Management', 'Channel sales leadership', 'Revenue Operations (RevOps)', 'International sales', 'Solution selling for tech products'],
    salaryBoostFactors: [
      'SaaS and B2B tech sales pay 30–50% more than FMCG/manufacturing sales at equivalent seniority',
      'Consistent quota over-attainment (125%+) is the single strongest salary lever in sales',
      'President\'s Club recognition signals top-tier performance to next employer',
      'Enterprise deal experience (₹50L+ deals) significantly raises salary expectations',
    ],
    negotiationTips: [
      'Always negotiate the OTE (on-target earnings) split — fixed vs variable ratio matters greatly',
      'Quota attainment percentages are your primary leverage in salary negotiations',
      'Request claw-back clauses and quota ramp periods to be spelled out in offer letters',
    ],
    faqs: [
      { q: 'What is the average sales manager salary in India in 2026?', a: 'Sales managers in India earn ₹8L–₹22L CTC at the 3–7 year level, typically as a combination of fixed base and variable incentive. SaaS/B2B tech sales managers earn at the higher end. FMCG and manufacturing sales managers earn ₹6L–₹18L. Variable components can add 30–100% on top of fixed salary for high performers.' },
      { q: 'Does the industry matter for sales manager salary in India?', a: 'Yes, significantly. B2B SaaS sales managers in India earn 30–50% more than FMCG sales managers at equivalent seniority. Enterprise tech (cloud, ERP, CRM) sales is the highest-paying sales category. Within traditional industries, financial services (wealth management, insurance) sales leaders earn competitively through commission structures.' },
    ],
  },
  'ui-ux-designer': {
    byExperience: {
      fresher: '₹3L – ₹6L (portfolio required; product companies: ₹6L–₹12L)',
      midLevel: '₹9L – ₹22L (3–6 years; product designer)',
      senior: '₹22L – ₹45L (7–12 years; senior/staff product designer)',
      leadership: '₹45L – ₹90L (design manager, VP Design, CDO)',
    },
    byCompanyType: {
      startup: '₹6L – ₹28L (equity at early-stage; high variance)',
      midSize: '₹7L – ₹24L',
      mnc: '₹8L – ₹35L',
      faang: '₹18L – ₹70L (design specialists at Google, Meta India)',
    },
    byLocation: {
      bangalore: '₹5L – ₹70L',
      mumbai: '₹4L – ₹50L (strong for agency and brand design)',
      delhi: '₹4L – ₹40L',
      hyderabad: '₹3.5L – ₹35L',
      chennai: '₹3L – ₹24L',
      pune: '₹3L – ₹22L',
      other: '₹2L – ₹15L',
    },
    topPayingSkills: ['Design Systems at scale', 'Strategic UX / Research-driven design', 'Figma (advanced)', 'Interaction Design (complex apps)', 'Design Ops', 'Product strategy alignment', 'Accessibility (WCAG 2.1)', 'Motion design (After Effects/Lottie)', 'Growth design (conversion optimization)'],
    salaryBoostFactors: [
      'Portfolio quality is the primary salary determinant in design — not years of experience',
      'Design systems ownership at companies like Razorpay or CRED creates premium',
      'Research capability (user interviews, usability testing, A/B data) adds significantly',
      'Mobile design expertise (iOS HIG, Material Design) adds 15–20%',
    ],
    negotiationTips: [
      'A strong portfolio with measurable outcomes is your primary negotiating asset',
      'Design salaries are highly negotiable with competing offers from product companies',
      'Request equity in addition to base salary at funded startups — design is strategic',
    ],
    faqs: [
      { q: 'What is the average UI/UX designer salary in India in 2026?', a: 'UI/UX designers in India earn ₹5L–₹15L at the 2–5 year experience level. Product designers at funded startups earn ₹12L–₹25L for mid-level roles. Senior product designers at top companies (CRED, Razorpay, Swiggy, Dream11) earn ₹30L–₹50L. Design managers earn ₹50L+ at large product organizations.' },
      { q: 'Does portfolio matter more than experience for UX salary negotiations?', a: 'Yes — in design, portfolio quality is the primary salary determinant, not years of experience. A 2-year designer with 3 strong case studies showing research → design → measured outcome can often negotiate the same salary as a 5-year designer with a weak portfolio. The design interview is essentially a portfolio review, so invest proportionally in documenting and presenting your work.' },
    ],
  },
  'project-manager': {
    byExperience: {
      fresher: '₹3L – ₹6L (junior PM, coordinator)',
      midLevel: '₹8L – ₹22L (3–6 years; project manager, PMP holders earn more)',
      senior: '₹22L – ₹45L (7–12 years; senior PM, program manager)',
      leadership: '₹45L – ₹90L (PMO head, portfolio director, VP Delivery)',
    },
    byCompanyType: {
      startup: '₹7L – ₹28L',
      midSize: '₹7L – ₹25L',
      mnc: '₹10L – ₹40L (Accenture, Wipro, Infosys PM roles)',
      faang: '₹15L – ₹55L (Program managers at Amazon, Microsoft)',
    },
    byLocation: {
      bangalore: '₹5L – ₹55L',
      mumbai: '₹4.5L – ₹50L',
      delhi: '₹4L – ₹40L',
      hyderabad: '₹4L – ₹40L',
      chennai: '₹3L – ₹28L',
      pune: '₹3.5L – ₹30L',
      other: '₹2.5L – ₹18L',
    },
    topPayingSkills: ['PMP certification', 'Agile/SAFe coaching', 'Program management (multiple large projects)', 'PRINCE2', 'Cloud transformation programs', 'ERP implementation management', 'PMO setup and leadership', 'Contract and vendor management at scale'],
    salaryBoostFactors: [
      'PMP certification adds 15–25% premium across most Indian employers',
      'IT project management pays more than construction or manufacturing at equivalent seniority',
      'Program management (multiple projects) versus single project management is a pay step-up',
      'International project experience (Gulf, UK, APAC) is highly valued',
    ],
    negotiationTips: [
      'Project delivery metrics (on-time, under-budget percentage) are your strongest negotiating tool',
      'Budget managed and team size are the two most important scale indicators for PM roles',
      'PMP holders can typically command 15–25% above non-certified PMs at the same experience level',
    ],
    faqs: [
      { q: 'What is the average project manager salary in India in 2026?', a: 'Project managers in India earn ₹8L–₹20L at the 3–7 year experience level. IT project managers earn higher than construction or manufacturing PMs. PMP-certified managers earn 15–25% more than uncertified counterparts. Senior program managers at large IT companies and MNCs earn ₹30L–₹55L. PMO Heads earn ₹50L+ at enterprise companies.' },
      { q: 'Does PMP certification significantly increase salary for project managers in India?', a: 'Yes. PMP (Project Management Professional) is the most recognized PM certification in India and globally. Research consistently shows a 15–25% salary premium for PMP holders. In IT services and consulting, PMP is often a mandatory criterion for senior PM roles. ROI on PMP investment (exam cost ₹25,000–₹40,000) is typically recovered within 2–3 months of salary premium.' },
    ],
  },
  'content-writer': {
    byExperience: {
      fresher: '₹2L – ₹4L (content writer; digital agencies and media)',
      midLevel: '₹5L – ₹14L (3–6 years; senior writer, content lead)',
      senior: '₹14L – ₹28L (7–12 years; content manager, head of content)',
      leadership: '₹28L – ₹60L (Director of Content, VP Content at SaaS/D2C)',
    },
    byCompanyType: {
      startup: '₹4L – ₹22L (SaaS content roles pay well)',
      midSize: '₹3.5L – ₹18L',
      mnc: '₹4L – ₹20L',
      faang: '₹8L – ₹35L (technical writers at Google, Microsoft earn ₹12L–₹40L)',
    },
    byLocation: {
      bangalore: '₹3L – ₹40L (SaaS content hub; Freshworks, Zoho, Chargebee)',
      mumbai: '₹3L – ₹35L (media and advertising hub)',
      delhi: '₹2.5L – ₹28L',
      hyderabad: '₹2L – ₹22L',
      chennai: '₹2L – ₹18L',
      pune: '₹2L – ₹16L',
      other: '₹1.5L – ₹12L',
    },
    topPayingSkills: ['SEO content strategy', 'Technical writing (API docs, developer content)', 'SaaS content marketing', 'Video script writing', 'B2B long-form content (white papers, case studies)', 'Email copywriting (high ROAS)', 'Content operations at scale'],
    salaryBoostFactors: [
      'SEO expertise doubles content writer salary ceiling — organic traffic is measurable ROI',
      'Technical writing (developer documentation) is the highest-paid content specialisation in India',
      'SaaS content roles pay 40–60% more than media or agency content roles',
      'Demonstrated traffic and ranking outcomes are the primary salary leverage for content writers',
    ],
    negotiationTips: [
      'Traffic numbers and keyword rankings are your best negotiating evidence',
      'Technical writers should benchmark against Glassdoor tech company salaries, not media',
      'Content strategy roles (not just execution) are paid significantly higher — position yourself there',
    ],
    faqs: [
      { q: 'What is the average content writer salary in India in 2026?', a: 'Content writers in India earn ₹2.5L–₹7L at the 1–3 year level. Senior content writers and content leads with SEO expertise earn ₹8L–₹18L. Content managers and heads of content at SaaS companies earn ₹18L–₹35L. Technical writers at Google, Microsoft, or developer tool companies earn ₹12L–₹40L — significantly above general content writing.' },
      { q: 'Do content writers need SEO skills to earn more in India?', a: 'Yes — SEO knowledge is the single biggest salary multiplier for content writers in India. A content writer with proven keyword ranking and organic traffic growth typically earns 50–80% more than a writer producing content without SEO measurement. In 2026, most senior content roles explicitly require Ahrefs/SEMrush proficiency and the ability to develop and execute a content cluster strategy.' },
    ],
  },
  'operations-manager': {
    byExperience: {
      fresher: '₹3L – ₹6L (operations executive)',
      midLevel: '₹8L – ₹22L (3–6 years; operations manager)',
      senior: '₹22L – ₹45L (7–12 years; senior ops manager, head of operations)',
      leadership: '₹45L – ₹1Cr (COO, VP Operations)',
    },
    byCompanyType: {
      startup: '₹8L – ₹35L (e-commerce ops roles pay highly at hypergrowth companies)',
      midSize: '₹7L – ₹25L',
      mnc: '₹8L – ₹35L (FMCG and logistics MNCs)',
      faang: '₹12L – ₹50L (Amazon, Flipkart operations leadership)',
    },
    byLocation: {
      bangalore: '₹5L – ₹60L',
      mumbai: '₹5L – ₹55L (FMCG hub)',
      delhi: '₹4L – ₹45L',
      hyderabad: '₹4L – ₹35L',
      chennai: '₹3.5L – ₹30L',
      pune: '₹3.5L – ₹28L',
      other: '₹2.5L – ₹18L',
    },
    topPayingSkills: ['P&L ownership at scale', 'Six Sigma Black Belt', 'Supply chain optimization', 'Last-mile delivery operations (e-commerce)', 'Lean Manufacturing', 'SAP MM/WM/PP', 'BI reporting for ops (Tableau/Power BI)', 'Vendor negotiation at scale'],
    salaryBoostFactors: [
      'E-commerce operations (Amazon, Flipkart supply chain) pays significantly above traditional ops',
      'Six Sigma Black Belt certification adds 20–30% to manufacturing and FMCG ops salaries',
      'P&L ownership with documented cost reduction outcomes is the primary salary lever',
      'Scale of operations managed (headcount, geography, revenue) determines salary band',
    ],
    negotiationTips: [
      'Cost reduction outcomes in ₹ terms are your most powerful negotiating evidence',
      'Headcount and geography managed are the two scale metrics most used in benchmarking',
      'Certifications (Six Sigma, PMP for ops) help in structured corporates, less in startups',
    ],
    faqs: [
      { q: 'What is the average operations manager salary in India in 2026?', a: 'Operations managers in India earn ₹8L–₹22L at the 3–7 year experience level. E-commerce and logistics operations managers earn at the higher end. Manufacturing and FMCG ops managers earn ₹8L–₹18L. Senior operations leaders (head of ops, COO) at e-commerce companies earn ₹45L–₹1Cr.' },
    ],
  },
  'civil-engineer': {
    byExperience: {
      fresher: '₹2.5L – ₹5L (site engineer, junior design engineer)',
      midLevel: '₹6L – ₹15L (3–6 years; project engineer, design engineer)',
      senior: '₹15L – ₹30L (7–12 years; senior project manager, structural engineer)',
      leadership: '₹30L – ₹80L (project director, VP Engineering — infrastructure companies)',
    },
    byCompanyType: {
      startup: '₹4L – ₹18L',
      midSize: '₹4L – ₹18L',
      mnc: '₹6L – ₹35L (L&T, Shapoorji, NHAI — large project companies)',
      faang: 'N/A — civil engineering is not a tech-company role',
    },
    byLocation: {
      bangalore: '₹3.5L – ₹40L',
      mumbai: '₹4L – ₹45L (real estate and infrastructure projects)',
      delhi: '₹3.5L – ₹40L (government infrastructure projects)',
      hyderabad: '₹3L – ₹28L',
      chennai: '₹3L – ₹25L',
      pune: '₹3L – ₹22L',
      other: '₹2L – ₹15L',
    },
    topPayingSkills: ['International civil project management (Gulf, Africa)', 'Structural design (high-rise)', 'Primavera P6 scheduling', 'BIM (Building Information Modelling)', 'NHAI/highway project experience', 'Value engineering', 'CPWD empanelment'],
    salaryBoostFactors: [
      'Gulf (UAE, Saudi Arabia, Qatar) civil engineering pays 3–5x Indian salaries',
      'Infrastructure projects (metro, highways, airports) pay more than residential',
      'International project experience or PE licence creates significant premium',
      'BIM expertise is increasingly valued and commands a 15–20% premium',
    ],
    negotiationTips: [
      'Project value managed is the most important scale indicator — always lead with it',
      'Gulf placement agents often undervalue candidates — negotiate directly with employer if possible',
      'CPWD and government project experience opens higher government contractor roles',
    ],
    faqs: [
      { q: 'What is the average civil engineer salary in India in 2026?', a: 'Civil engineers in India earn ₹2.5L–₹6L at the fresher level and ₹8L–₹18L at the 4–8 year experience level. Senior civil engineers and project managers at large infrastructure firms (L&T, Tata Projects, NCC) earn ₹20L–₹40L. Civil engineers working in the Gulf (UAE, Saudi Arabia) typically earn 3–5x Indian salaries for comparable roles.' },
    ],
  },
  'mechanical-engineer': {
    byExperience: {
      fresher: '₹2.5L – ₹5L (manufacturing, auto sector)',
      midLevel: '₹6L – ₹16L (3–6 years; design engineer, production engineer)',
      senior: '₹16L – ₹32L (7–12 years; senior engineer, chief engineer)',
      leadership: '₹32L – ₹80L (plant head, VP Engineering, GM Manufacturing)',
    },
    byCompanyType: {
      startup: '₹4L – ₹18L',
      midSize: '₹4L – ₹18L',
      mnc: '₹6L – ₹35L (Bosch, Siemens, Caterpillar, Cummins India)',
      faang: 'N/A',
    },
    byLocation: {
      bangalore: '₹3.5L – ₹45L (aerospace, defence, GE, Airbus)',
      mumbai: '₹3.5L – ₹35L',
      delhi: '₹3L – ₹28L',
      hyderabad: '₹3L – ₹30L',
      chennai: '₹3L – ₹30L (automotive hub; Ford, Hyundai, Renault-Nissan)',
      pune: '₹3.5L – ₹40L (Tata Motors, Bajaj, Mercedes-Benz India)',
      other: '₹2L – ₹14L',
    },
    topPayingSkills: ['Automotive design (CATIA, ANSA)', 'ANSYS simulation', 'Defence manufacturing', 'Aerospace engineering', 'Industry 4.0 / smart manufacturing', 'DFM/DFA expertise', 'DFMEA', 'Lean Black Belt'],
    salaryBoostFactors: [
      'Automotive and aerospace sectors pay significantly above general manufacturing',
      'MNC experience (Bosch, Siemens, Cummins) creates a salary moat',
      'CATIA proficiency specifically for automotive opens FAANG-like salary bands in that sector',
      'Defence research (ISRO, DRDO) contracts have different salary structures but benefits',
    ],
    negotiationTips: [
      'Cost savings from design optimization are your strongest quantitative evidence',
      'International manufacturing experience is rare and highly valued — negotiate accordingly',
      'MNC experience transfers well — use it as leverage for domestic premium',
    ],
    faqs: [
      { q: 'What is the average mechanical engineer salary in India in 2026?', a: 'Mechanical engineers in India earn ₹2.5L–₹5L as freshers, ₹8L–₹18L at the 4–8 year level. Automotive engineers at OEMs (Tata Motors, Mahindra, Bosch) earn ₹10L–₹28L at senior level. Aerospace engineers in Bangalore at companies like Airbus, GE, or HAL earn ₹12L–₹35L.' },
    ],
  },
  'nursing': {
    byExperience: {
      fresher: '₹2.5L – ₹4L (staff nurse, India)',
      midLevel: '₹4L – ₹8L (3–6 years; senior staff nurse, charge nurse)',
      senior: '₹8L – ₹15L (7–12 years; nursing supervisor, ward manager)',
      leadership: '₹15L – ₹35L (Nursing Director, CNO at large hospital)',
    },
    byCompanyType: {
      startup: 'N/A',
      midSize: '₹2.5L – ₹8L (private hospitals, clinics)',
      mnc: '₹3.5L – ₹12L (Apollo, Fortis, Max Healthcare)',
      faang: 'N/A',
    },
    byLocation: {
      bangalore: '₹3L – ₹15L',
      mumbai: '₹3L – ₹14L',
      delhi: '₹2.5L – ₹12L',
      hyderabad: '₹2.5L – ₹12L',
      chennai: '₹2.5L – ₹10L',
      pune: '₹2.5L – ₹10L',
      other: '₹1.8L – ₹7L',
    },
    topPayingSkills: ['ICU/Critical care nursing', 'OT scrub nursing', 'Emergency nursing (ACLS, NRP)', 'Oncology nursing', 'Neonatal ICU (NICU)', 'Gulf/UK registered nurse (DHA/HAAD/NMC UK)', 'Dialysis nursing'],
    salaryBoostFactors: [
      'Gulf placements (UAE, Saudi Arabia, Qatar) pay ₹30L–₹80L for qualified nurses — 3–8x Indian rates',
      'UK NMC registration enables ₹30L–₹50L equivalent NHS salaries',
      'ICU and critical care specialisation commands 40–60% premium over general ward nursing in India',
      'ACLS and NRP certifications are required for high-acuity placements',
    ],
    negotiationTips: [
      'Gulf recruiters often quote base salary only — negotiate for accommodation, flights, and insurance',
      'Specialisation certifications (ACLS, ICU training) are your primary bargaining chip',
      'Compare DHA vs HAAD vs MOH eligibility pathways — each opens different emirate markets',
    ],
    faqs: [
      { q: 'What is the average nurse salary in India in 2026?', a: 'Staff nurses in India earn ₹2.5L–₹5L annually, significantly varying by hospital type and location. ICU nurses at Apollo, Fortis, or Medanta earn ₹4L–₹8L. Nursing supervisors earn ₹8L–₹15L. Indian nurses working in the Gulf (UAE, Saudi Arabia, Qatar) or UK typically earn 3–8x these figures — ₹25L–₹80L equivalent — making international placement the most significant career financial decision for Indian nurses.' },
      { q: 'How much do Indian nurses earn in the Gulf countries?', a: 'Indian nurses working in the UAE, Saudi Arabia, or Qatar typically earn AED 4,000–8,000 (₹90,000–₹1,80,000/month) depending on specialisation and hospital tier. ICU nurses at JCI-accredited hospitals can earn AED 8,000–12,000. Packages often include accommodation, flights, and health insurance — making the effective CTC significantly higher than the cash component.' },
    ],
  },
  'electrical-engineer': {
    byExperience: {
      fresher: '₹2.5L – ₹5L (site engineer, junior design engineer)',
      midLevel: '₹6L – ₹16L (3–6 years; project engineer, panel design engineer)',
      senior: '₹16L – ₹32L (7–12 years; chief engineer, project manager)',
      leadership: '₹32L – ₹70L (Head of Electrical, GM, VP Engineering)',
    },
    byCompanyType: {
      startup: '₹4L – ₹18L (solar and EV startups)',
      midSize: '₹4L – ₹18L',
      mnc: '₹6L – ₹40L (Siemens, ABB, Schneider Electric India)',
      faang: 'N/A',
    },
    byLocation: {
      bangalore: '₹3.5L – ₹45L (defence, aerospace electrical)',
      mumbai: '₹3.5L – ₹38L',
      delhi: '₹3L – ₹32L (power sector hub)',
      hyderabad: '₹3L – ₹28L',
      chennai: '₹3L – ₹25L',
      pune: '₹3.5L – ₹30L (EV manufacturing)',
      other: '₹2L – ₹16L',
    },
    topPayingSkills: ['Solar/renewable energy', 'EV powertrain electrical', 'PLC/SCADA (Siemens, Rockwell)', 'High voltage systems (33kV+)', 'CBIP certification', 'BEE Energy Auditor', 'ETAP power system simulation', 'IEC/IEE standards expertise'],
    salaryBoostFactors: [
      'Solar and renewable energy sector pays 20–35% premium over traditional electrical',
      'EV industry (Ola Electric, Ather, Tata EV) paying significantly for skilled electrical engineers',
      'Gulf oil and gas sector pays 3–5x Indian rates for qualified electrical engineers',
      'CBIP certification commands premium in power sector (NTPC, Power Grid, NPCIL)',
    ],
    negotiationTips: [
      'Specialisation in solar or EV is currently a seller\'s market — negotiate aggressively',
      'Gulf placement for substation or oil/gas electrical work pays premium — verify package details',
      'CBIP and IE Rules credentials open government and PSU roles with different salary structures',
    ],
    faqs: [
      { q: 'What is the average electrical engineer salary in India in 2026?', a: 'Electrical engineers in India earn ₹2.5L–₹5.5L as freshers. At the 4–8 year level, electrical engineers in manufacturing earn ₹8L–₹18L. PLC/SCADA specialists earn ₹10L–₹22L. Solar energy and EV engineers earn ₹10L–₹28L at mid-level. Senior electrical project engineers at large infrastructure companies earn ₹20L–₹40L.' },
    ],
  },
  'accountant': {
    byExperience: {
      fresher: '₹2L – ₹4L (accounts executive; CA fresher: ₹6L–₹12L)',
      midLevel: '₹5L – ₹14L (3–6 years; senior accountant, accounts manager)',
      senior: '₹14L – ₹28L (7–12 years; finance controller, CFO at SME)',
      leadership: '₹28L – ₹70L (CFO at mid-size company, Group Controller)',
    },
    byCompanyType: {
      startup: '₹5L – ₹25L',
      midSize: '₹4L – ₹18L',
      mnc: '₹5L – ₹22L (Big 4 audit: CA salary bands are structured)',
      faang: '₹8L – ₹30L (finance analysts at tech companies earn more)',
    },
    byLocation: {
      bangalore: '₹3L – ₹35L',
      mumbai: '₹4L – ₹45L (BFSI and corporate finance hub)',
      delhi: '₹3L – ₹30L',
      hyderabad: '₹2.5L – ₹22L',
      chennai: '₹2.5L – ₹20L',
      pune: '₹2.5L – ₹20L',
      other: '₹1.8L – ₹12L',
    },
    topPayingSkills: ['CA qualification (ICAI)', 'SAP FI/CO', 'Financial reporting (IFRS/Ind AS)', 'Tax expertise (GST, income tax, transfer pricing)', 'ERP implementation support', 'Financial close automation', 'Big 4 audit background'],
    salaryBoostFactors: [
      'CA qualification is the single most significant salary multiplier for accountants in India',
      'Big 4 experience (Deloitte, PwC, EY, KPMG) creates a significant salary premium',
      'SAP FI/CO expertise adds 25–35% to standard accounting salaries',
      'Transfer pricing and international tax expertise is scarce and highly paid',
    ],
    negotiationTips: [
      'CAs should benchmark using ICAI salary surveys — do not accept below market',
      'GST litigation and transfer pricing expertise are negotiation leverage in the right role',
      'SME CFO roles may offer equity — evaluate total compensation including profit-sharing',
    ],
    faqs: [
      { q: 'What is the average accountant salary in India in 2026?', a: 'Accountants in India earn ₹2L–₹5L at entry level. Senior accountants earn ₹6L–₹14L at 4–8 years. CA-qualified accountants start at ₹7L–₹15L and reach ₹25L–₹50L at the Finance Controller or CFO level. Big 4 chartered accountants typically earn ₹10L–₹30L at the Senior Associate / Manager level.' },
      { q: 'How much does a CA (Chartered Accountant) earn in India?', a: 'Freshly qualified CAs earn ₹7L–₹15L at Big 4 firms and ₹8L–₹20L at corporate companies. With 3–5 years of post-qualification experience, CAs earn ₹15L–₹35L. Finance controllers earn ₹30L–₹60L. CFOs at large Indian companies earn ₹60L–₹1.5Cr. Top AIR rank CAs (top 100) have premium starting salaries and fast-tracked progression.' },
    ],
  },
  'supply-chain-manager': {
    byExperience: {
      fresher: '₹3L – ₹6L (supply chain executive, procurement executive)',
      midLevel: '₹8L – ₹22L (3–6 years; supply chain manager)',
      senior: '₹22L – ₹45L (7–12 years; SCM head, sourcing director)',
      leadership: '₹45L – ₹1Cr (VP Supply Chain, CSCO)',
    },
    byCompanyType: {
      startup: '₹8L – ₹30L (e-commerce and D2C logistics)',
      midSize: '₹7L – ₹22L',
      mnc: '₹10L – ₹45L (HUL, P&G, Amazon, Maersk)',
      faang: '₹12L – ₹50L (Amazon supply chain leadership)',
    },
    byLocation: {
      bangalore: '₹5L – ₹55L',
      mumbai: '₹5L – ₹60L (FMCG and pharma SCM hub)',
      delhi: '₹4L – ₹45L',
      hyderabad: '₹4L – ₹35L (pharma supply chain)',
      chennai: '₹3.5L – ₹30L (auto supply chain)',
      pune: '₹4L – ₹35L',
      other: '₹2.5L – ₹18L',
    },
    topPayingSkills: ['SAP MM/WM/APO', 'S&OP leadership', 'Network design', 'CSCP/CPIM', 'Logistics analytics', 'Demand forecasting (advanced)', 'Global sourcing', 'E-commerce last-mile operations'],
    salaryBoostFactors: [
      'CSCP or CPIM certification adds 15–25% to supply chain management salaries',
      'E-commerce supply chain (Amazon, Flipkart) pays significantly above traditional SCM',
      'Global sourcing experience (China, Southeast Asia) is premium in manufacturing sector',
      'SAP APO/IBP expertise for demand planning is scarce and commands premium',
    ],
    negotiationTips: [
      'Procurement savings in ₹ terms are the strongest SCM negotiation asset',
      'OTIF improvement and inventory cost reduction are credible quantitative evidence',
      'CSCP and Six Sigma certifications provide structured benchmarking leverage',
    ],
    faqs: [
      { q: 'What is the average supply chain manager salary in India in 2026?', a: 'Supply chain managers in India earn ₹8L–₹22L at the 3–7 year level. Procurement specialists earn toward the higher end of this range. SCM heads at FMCG companies earn ₹30L–₹55L. Supply chain directors at large companies (HUL, Amazon India) earn ₹50L+. E-commerce logistics leadership pays significantly above traditional supply chain.' },
    ],
  },
  'teacher': {
    byExperience: {
      fresher: '₹2.5L – ₹4.5L (school teacher, coaching)',
      midLevel: '₹4.5L – ₹10L (3–6 years; PGT, senior teacher)',
      senior: '₹10L – ₹20L (7–12 years; head of department, curriculum lead)',
      leadership: '₹20L – ₹50L (principal, EdTech content head, academic director)',
    },
    byCompanyType: {
      startup: '₹4L – ₹25L (EdTech: BYJU\'S, Unacademy, Vedantu)',
      midSize: '₹3.5L – ₹12L (private schools)',
      mnc: '₹5L – ₹18L (international schools: IB, Cambridge)',
      faang: 'N/A',
    },
    byLocation: {
      bangalore: '₹3.5L – ₹30L',
      mumbai: '₹3.5L – ₹28L',
      delhi: '₹3L – ₹25L (KV and CBSE schools)',
      hyderabad: '₹2.5L – ₹20L',
      chennai: '₹2.5L – ₹18L',
      pune: '₹2.5L – ₹18L',
      other: '₹2L – ₹10L',
    },
    topPayingSkills: ['IB/Cambridge curriculum (PYP, MYP, DP)', 'Competitive exam coaching (JEE, NEET, CAT)', 'EdTech content creation (video courses)', 'STEM education', 'Special needs education (SEN)', 'Curriculum design', 'School leadership/administration'],
    salaryBoostFactors: [
      'IB and Cambridge school teachers earn 40–80% more than CBSE school teachers',
      'EdTech content creation (BYJU\'S, Unacademy) pays significantly above school teaching',
      'JEE/NEET coaching (Kota model) for star faculty pays ₹15L–₹50L+ with royalties',
      'B.Ed + MBA combination for school administration career path',
    ],
    negotiationTips: [
      'Student results data is your primary negotiating evidence for teaching roles',
      'IB authorization experience opens international school salary bands',
      'EdTech video content roles negotiate differently — subscriber count and course ratings matter',
    ],
    faqs: [
      { q: 'What is the average teacher salary in India in 2026?', a: 'School teachers in India earn ₹2.5L–₹5L at state schools and ₹3.5L–₹8L at private CBSE/ICSE schools. IB and Cambridge school teachers earn ₹6L–₹18L. EdTech educators at BYJU\'S, Unacademy, or Vedantu earn ₹4L–₹25L depending on subject, seniority, and content performance. JEE/NEET coaching faculty at Kota institutes earn ₹10L–₹50L+.' },
    ],
  },
  'graphic-designer': {
    byExperience: {
      fresher: '₹2L – ₹4.5L (junior graphic designer)',
      midLevel: '₹5L – ₹14L (3–6 years; senior designer)',
      senior: '₹14L – ₹28L (7–12 years; design lead, creative director)',
      leadership: '₹28L – ₹70L (Head of Design, Creative Director at large brands)',
    },
    byCompanyType: {
      startup: '₹4L – ₹20L (D2C brands)',
      midSize: '₹4L – ₹18L',
      mnc: '₹5L – ₹25L (MNC agencies: Ogilvy, Publicis, WPP)',
      faang: '₹8L – ₹35L',
    },
    byLocation: {
      bangalore: '₹3L – ₹35L',
      mumbai: '₹3.5L – ₹45L (advertising and media hub)',
      delhi: '₹3L – ₹30L',
      hyderabad: '₹2.5L – ₹22L',
      chennai: '₹2L – ₹18L',
      pune: '₹2L – ₹18L',
      other: '₹1.5L – ₹12L',
    },
    topPayingSkills: ['Brand identity design', 'Motion graphics (After Effects, Lottie)', 'Packaging design (print production)', 'UI/Product design (Figma)', '3D design (Cinema 4D, Blender)', 'Performance marketing creatives (A/B tested)', 'Creative direction'],
    salaryBoostFactors: [
      'Motion graphics and animation commands 30–50% premium over static design',
      'Brand identity work with measurable business outcomes (sales lift) is premium',
      'Product design (Figma, UI) skills add significantly to graphic designer salary ceiling',
      'Mumbai advertising agency experience carries a premium in creative industries',
    ],
    negotiationTips: [
      'Portfolio quality is everything in design salary negotiations — present it strategically',
      'Business impact of your design work (conversion, sales, brand recall) is your strongest evidence',
      'Freelance market rates can validate higher salary expectations in negotiations',
    ],
    faqs: [
      { q: 'What is the average graphic designer salary in India in 2026?', a: 'Graphic designers in India earn ₹2L–₹5L at the entry level. Senior graphic designers earn ₹7L–₹18L at 4–8 years. Creative directors at agencies earn ₹25L–₹50L. D2C brand in-house designers at funded companies earn ₹8L–₹25L. Motion graphics specialists earn 30–50% more than static designers at equivalent seniority.' },
    ],
  },
  'python-developer': {
    byExperience: {
      fresher: '₹3.5L – ₹7.5L (0–2 years)',
      midLevel: '₹10L – ₹28L (3–6 years)',
      senior: '₹28L – ₹60L (7–12 years)',
      leadership: '₹60L – ₹1.2Cr+ (engineering director)',
    },
    byCompanyType: {
      startup: '₹7L – ₹32L',
      midSize: '₹8L – ₹28L',
      mnc: '₹10L – ₹35L',
      faang: '₹22L – ₹90L',
    },
    byLocation: {
      bangalore: '₹5L – ₹90L',
      mumbai: '₹4.5L – ₹55L',
      delhi: '₹4L – ₹45L',
      hyderabad: '₹4.5L – ₹60L',
      chennai: '₹3.5L – ₹30L',
      pune: '₹3.5L – ₹32L',
      other: '₹2.5L – ₹20L',
    },
    topPayingSkills: ['FastAPI + async Python', 'Data engineering (Spark, Airflow, dbt)', 'Django at scale', 'ML Ops + Python', 'AWS Lambda/serverless', 'Celery + Redis task queues', 'Type hints + Pydantic v2', 'gRPC with Python'],
    salaryBoostFactors: [
      'Data engineering path (PySpark, Airflow) commands 20–30% premium over web Python',
      'FastAPI expertise is in high demand and commands premium over Django',
      'MLOps Python skills combine data science and engineering into a high-value specialisation',
      'Contribution to major Python libraries or FastAPI ecosystem',
    ],
    negotiationTips: [
      'Production scale (requests/day) and system reliability metrics are strongest evidence',
      'Data engineering Python skills are scarcer than web Python — leverage that',
      'Competing offers from data-first companies significantly raise negotiation ceilings',
    ],
    faqs: [
      { q: 'What is the average Python developer salary in India in 2026?', a: 'Python developers in India earn ₹5L–₹14L at the 1–4 year level. Mid-level Python engineers at product companies earn ₹15L–₹30L. Senior Python developers (6–10 years) specializing in FastAPI or data engineering earn ₹30L–₹60L. Python data engineers at leading companies often earn more than web Python developers due to scarcity of the skill combination.' },
      { q: 'Is Python development well paid in India compared to Java?', a: 'Python developers earn slightly less than Java developers on average in India, primarily because Java dominates the larger IT services sector. However, Python developers specializing in data engineering, machine learning, or high-performance async web services can earn significantly more than Java web developers at equivalent seniority. In product companies and AI startups, Python expertise often commands premiums.' },
    ],
  },
  'java-developer': {
    byExperience: {
      fresher: '₹3.5L – ₹7L (IT services; product companies: ₹10L–₹20L)',
      midLevel: '₹10L – ₹28L (3–6 years; Spring Boot microservices)',
      senior: '₹28L – ₹60L (7–12 years; staff/principal engineer)',
      leadership: '₹60L – ₹1.2Cr+ (engineering director)',
    },
    byCompanyType: {
      startup: '₹7L – ₹30L',
      midSize: '₹8L – ₹28L',
      mnc: '₹8L – ₹35L (BFSI tech: JP Morgan, Deutsche Bank pay well)',
      faang: '₹20L – ₹90L',
    },
    byLocation: {
      bangalore: '₹5L – ₹90L',
      mumbai: '₹5L – ₹60L (BFSI Java roles)',
      delhi: '₹4L – ₹50L',
      hyderabad: '₹4.5L – ₹60L',
      chennai: '₹4L – ₹30L (IT services hub)',
      pune: '₹4L – ₹35L',
      other: '₹2.5L – ₹18L',
    },
    topPayingSkills: ['Java 17/21 + virtual threads', 'Spring Boot 3.x + Spring Cloud', 'Reactive programming (WebFlux)', 'Kafka event streaming', 'Microservices architecture', 'AWS/GCP with Java', 'Kubernetes + Java workloads', 'BFSI domain expertise'],
    salaryBoostFactors: [
      'BFSI domain expertise (capital markets, core banking) commands premium Java salaries',
      'Spring Boot 3.x + Java 21 (modern stack) versus legacy Java 8 makes significant difference',
      'System design depth for distributed Java systems',
      'OCP (Oracle Certified Professional) Java certification adds 10–15%',
    ],
    negotiationTips: [
      'BFSI domain + Java expertise is a powerful combination — leverage it',
      'Modern Java version expertise vs legacy differentiates you significantly',
      'System scale experience at high TPS is the most compelling senior Java negotiation evidence',
    ],
    faqs: [
      { q: 'What is the average Java developer salary in India in 2026?', a: 'Java developers in India earn ₹3.5L–₹7L at entry level in IT services and ₹10L–₹20L at product companies. Mid-level Java developers (3–6 years) earn ₹12L–₹28L. Senior Java engineers specializing in microservices and distributed systems earn ₹30L–₹60L. BFSI Java roles at global banks (JP Morgan, Deutsche Bank, HSBC India) earn ₹18L–₹50L at senior level.' },
      { q: 'Is Java still a good career choice in India in 2026?', a: 'Yes — Java remains the dominant language in Indian IT services (TCS, Infosys, Wipro, Cognizant, HCL) and in BFSI technology (banking, insurance, capital markets). The shift to Spring Boot 3.x and Java 17/21 is well underway, creating demand for engineers who can modernize legacy Java applications. Java developers consistently command strong salaries and have the widest range of opportunities in India.' },
    ],
  },
  'digital-marketing-executive': {
    byExperience: {
      fresher: '₹2.5L – ₹5L (digital marketing executive)',
      midLevel: '₹6L – ₹18L (3–6 years; specialist, marketing manager)',
      senior: '₹18L – ₹40L (7–12 years; head of digital, growth lead)',
      leadership: '₹40L – ₹90L (VP Digital, CMO)',
    },
    byCompanyType: {
      startup: '₹5L – ₹30L (D2C brands pay well for performance marketing)',
      midSize: '₹4L – ₹22L',
      mnc: '₹5L – ₹28L',
      faang: '₹10L – ₹45L',
    },
    byLocation: {
      bangalore: '₹4L – ₹50L',
      mumbai: '₹4.5L – ₹55L',
      delhi: '₹3.5L – ₹40L',
      hyderabad: '₹3L – ₹28L',
      chennai: '₹2.5L – ₹22L',
      pune: '₹2.5L – ₹20L',
      other: '₹2L – ₹14L',
    },
    topPayingSkills: ['Performance marketing (Meta + Google at scale)', 'Growth hacking and experimentation', 'SEO at enterprise scale', 'Marketing automation (HubSpot, Marketo)', 'CRO (Conversion Rate Optimization)', 'Affiliate marketing management', 'Revenue attribution modelling'],
    salaryBoostFactors: [
      'Performance marketing at ₹1Cr+ budgets is the highest-earning digital marketing track',
      'Data-driven attribution and marketing analytics skills command premium',
      'D2C brand experience (Nykaa, boAt, Mamaearth) is highly valued',
      'Google and Meta certifications are table stakes; differentiate through results',
    ],
    negotiationTips: [
      'ROAS and CAC improvements in % and ₹ terms are your strongest salary evidence',
      'D2C performance marketing expertise is in strong demand — leverage it',
      'Ask for performance-based bonus tied to ROAS targets in offer negotiation',
    ],
    faqs: [
      { q: 'What is the average digital marketing executive salary in India in 2026?', a: 'Digital marketing executives in India earn ₹2.5L–₹5.5L at entry level. With 2–5 years of experience and demonstrated results, digital marketers earn ₹7L–₹18L. Performance marketing specialists (Google Ads + Meta Ads) managing large budgets earn ₹12L–₹28L. Growth marketers and heads of digital marketing earn ₹25L–₹50L+.' },
      { q: 'Which digital marketing skill pays the most in India?', a: 'Performance marketing (Google Ads + Meta Ads management at scale) is currently the highest-paid digital marketing specialisation in India, followed by SEO/content at scale and marketing analytics. Growth hacking roles at funded startups offer high salaries with equity upside. Email marketing and social media management pay significantly less than paid acquisition or SEO specialisations.' },
    ],
  },
  'qa-engineer': {
    byExperience: {
      fresher: '₹2.5L – ₹5L (manual tester; automation fresher: ₹4L–₹7L)',
      midLevel: '₹7L – ₹20L (3–6 years; automation engineer)',
      senior: '₹20L – ₹40L (7–12 years; QA lead, SDET)',
      leadership: '₹40L – ₹80L (QA manager, VP Quality Engineering)',
    },
    byCompanyType: {
      startup: '₹6L – ₹24L',
      midSize: '₹5L – ₹18L',
      mnc: '₹7L – ₹25L',
      faang: '₹15L – ₹55L (SDET roles at Microsoft, Amazon)',
    },
    byLocation: {
      bangalore: '₹4L – ₹55L',
      mumbai: '₹3.5L – ₹40L',
      delhi: '₹3L – ₹35L',
      hyderabad: '₹3.5L – ₹40L',
      chennai: '₹3L – ₹25L',
      pune: '₹3L – ₹28L',
      other: '₹2L – ₹16L',
    },
    topPayingSkills: ['Selenium + Java (advanced)', 'Playwright/Cypress', 'Performance testing (JMeter, Gatling)', 'API testing automation (RestAssured)', 'Mobile automation (Appium)', 'Security testing basics', 'CI/CD pipeline integration', 'SDET (Software Development Engineer in Test)'],
    salaryBoostFactors: [
      'Automation engineering (SDET path) pays 50–80% more than manual testing',
      'Performance testing expertise is scarce and commands significant premium',
      'Cypress/Playwright expertise for modern web is increasingly premium over Selenium',
      'Security testing basics (OWASP) add value at product companies',
    ],
    negotiationTips: [
      'Test coverage percentage and defect escape rate are compelling QA negotiation metrics',
      'Automation expertise is in short supply — do not accept manual testing salaries if you automate',
      'SDET roles at FAANG are negotiated on software engineering compensation bands, not QA bands',
    ],
    faqs: [
      { q: 'What is the average QA engineer salary in India in 2026?', a: 'Manual QA testers in India earn ₹2.5L–₹6L, with limited growth ceiling above ₹10L. Automation QA engineers earn ₹7L–₹20L at mid-level. SDETs (Software Development Engineers in Test) at product companies earn ₹18L–₹40L. QA leads and quality engineering managers earn ₹30L–₹60L. The gap between manual and automation QA salaries is widening significantly in 2026.' },
      { q: 'Is manual QA testing a dying career in India?', a: 'Manual-only QA testing has significantly declining opportunities above ₹6L CTC in India. Most mid-to-senior QA roles now require Selenium (Java or Python), Cypress, or Playwright automation proficiency. API testing with Postman or RestAssured is also expected. QA engineers who learn automation can double their salary range and access a much larger set of opportunities. The transition from manual to automation testing is the most impactful career decision a QA engineer in India can make today.' },
    ],
  },
  'bank-po': {
    byExperience: {
      fresher: '₹3.5L – ₹6L (bank PO/clerk, PSB scale pay)',
      midLevel: '₹6L – ₹14L (3–6 years; branch manager, relationship manager)',
      senior: '₹14L – ₹25L (7–12 years; senior RM, branch head)',
      leadership: '₹25L – ₹60L (regional head, GM, DGM)',
    },
    byCompanyType: {
      startup: 'N/A (fintech RM/credit analyst roles: ₹6L–₹20L)',
      midSize: '₹4L – ₹15L (cooperative banks, small finance banks)',
      mnc: '₹6L – ₹30L (private banks: HDFC, ICICI, Axis, Kotak)',
      faang: 'N/A',
    },
    byLocation: {
      bangalore: '₹5L – ₹35L',
      mumbai: '₹6L – ₹45L (BFSI hub; highest private bank salaries)',
      delhi: '₹4L – ₹30L',
      hyderabad: '₹4L – ₹25L',
      chennai: '₹3.5L – ₹22L',
      pune: '₹3.5L – ₹22L',
      other: '₹3L – ₹16L',
    },
    topPayingSkills: ['Private banking / wealth management', 'Credit analysis (structured finance)', 'Treasury and forex', 'Trade finance', 'NBFC/fintech credit operations', 'CAIIB with credit module', 'Investment banking advisory (senior)'],
    salaryBoostFactors: [
      'Private sector banks pay 40–80% more than PSBs at comparable grades',
      'Wealth management and private banking roles carry significant AUM-linked incentives',
      'Credit and risk analysis expertise is among the highest-paying banking specialisations',
      'CAIIB qualification in credit and risk adds meaningful salary increment',
    ],
    negotiationTips: [
      'Private bank offers are negotiable — PSB appointments are fixed by scale',
      'AUM managed and portfolio quality metrics are strongest negotiation evidence',
      'Moving from PSB to private bank typically yields 40–80% salary increase at equivalent grade',
    ],
    faqs: [
      { q: 'What is the average bank PO or banking professional salary in India in 2026?', a: 'Bank POs at public sector banks earn ₹4L–₹7L starting (including DA, HRA, and allowances). Private bank relationship managers start at ₹5L–₹10L with variable incentives. With 5–8 years of experience, private bank branch managers earn ₹12L–₹22L. Senior banking leaders at private banks and NBFCs earn ₹25L–₹60L.' },
      { q: 'Do private banks pay more than government banks in India?', a: 'Yes, significantly. Private sector banks (HDFC, ICICI, Axis, Kotak) pay 40–80% more than public sector banks at equivalent grades and experience levels. However, PSBs offer greater job security, pension benefits, and housing loan subsidies that partially offset the cash compensation gap. At senior leadership levels (GM, DGM), private bank compensation significantly exceeds PSB pay structures.' },
    ],
  },
  'customer-success-manager': {
    byExperience: {
      fresher: '₹4L – ₹8L (CSE / customer success executive)',
      midLevel: '₹9L – ₹22L (3–6 years; CSM, senior CSM)',
      senior: '₹22L – ₹45L (7–12 years; CS lead, director of CS)',
      leadership: '₹45L – ₹90L (VP Customer Success, Chief Customer Officer)',
    },
    byCompanyType: {
      startup: '₹7L – ₹28L (equity upside at early-stage SaaS)',
      midSize: '₹8L – ₹25L',
      mnc: '₹10L – ₹40L (Salesforce, HubSpot, Freshworks CSM roles)',
      faang: '₹12L – ₹50L',
    },
    byLocation: {
      bangalore: '₹6L – ₹55L (SaaS hub; Freshworks, Chargebee, Zoho)',
      mumbai: '₹5L – ₹40L',
      delhi: '₹4L – ₹35L',
      hyderabad: '₹4L – ₹30L',
      chennai: '₹4L – ₹28L (Freshworks HQ)',
      pune: '₹4L – ₹25L',
      other: '₹3L – ₹18L',
    },
    topPayingSkills: ['Enterprise CSM (₹50L+ ARR portfolios)', 'Gainsight admin/CSP playbook design', 'Churn prevention at scale', 'Executive business reviews (CXO level)', 'Expansion and upsell motion', 'Revenue Operations (RevOps) alignment', 'CS analytics (NRR, GRR, health scoring)'],
    salaryBoostFactors: [
      'ARR managed per CSM is the primary salary determinant — enterprise CSMs earn more',
      'NRR above 115% is a strong negotiation credential',
      'Gainsight certification and CSP playbook experience commands premium',
      'US-market CSM experience (supporting North American accounts) pays 20–35% more',
    ],
    negotiationTips: [
      'NRR and GRR metrics are your primary negotiating evidence',
      'Portfolio ARR managed is the scale indicator most used in CSM benchmarking',
      'Expansion revenue generated (upsells, cross-sells) can significantly increase variable comp',
    ],
    faqs: [
      { q: 'What is the average customer success manager salary in India in 2026?', a: 'Customer success managers in India earn ₹9L–₹22L at the 2–6 year experience level. Enterprise CSMs managing ARR portfolios above ₹5Cr earn ₹22L–₹40L. Directors of Customer Success earn ₹40L–₹70L. CSMs at global SaaS companies (Freshworks, Salesforce, HubSpot) handling US or European accounts typically earn 20–35% above the domestic market rate.' },
      { q: 'What is a good NRR for a customer success manager\'s salary negotiation?', a: 'NRR above 110% (meaning you are growing existing customer revenue faster than churn) is a strong benchmark. NRR of 115–120%+ is exceptional and represents significant negotiating leverage. If you do not have a precise NRR figure, calculate your renewal rate by ARR value and your expansion revenue contribution — these proxy metrics carry similar weight in CSM salary discussions.' },
    ],
  },
};
