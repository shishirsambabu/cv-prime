import { roleSlugs, roleMap } from '@/lib/roleData';

export interface LinkedinData {
  slug: string;
  displayTitle: string;
  headlines: string[];
  tips: string[];
  keywords: string[];
}

const detailedLinkedinData: Record<string, Omit<LinkedinData, 'slug' | 'displayTitle'>> = {
  'software-engineer': {
    headlines: [
      'Software Engineer @ Groww | Python · React · AWS | Building fintech infra that processes ₹1B+ daily',
      'SDE-2 | Backend Engineer specialising in distributed systems & microservices | Ex-Swiggy | Open to opportunities',
      'Full Stack Engineer | React · Node.js · PostgreSQL | 5 YOE | Passionate about developer experience and clean APIs',
      'Software Engineer | Java · Spring Boot · Kubernetes | Helping TCS clients modernise legacy enterprise systems',
      'Backend Developer | Python · FastAPI · AWS Lambda | Scaling e-commerce platforms to 10M+ users | IIT Bombay',
    ],
    tips: [
      'Include your current company or "Ex-[Company]" — recruiters filter by employer history first',
      'Add your primary tech stack (3-4 technologies) — LinkedIn search indexes these as skills keywords',
      'Quantify your scale where possible: users served, transactions processed, or latency improvements',
      'State your seniority level explicitly (SDE-1, SDE-2, Staff) — it prevents misaligned outreach',
      'If open to opportunities, say so clearly — "Open to opportunities" or "Actively looking" doubles recruiter response rate',
    ],
    keywords: ['Software Engineer', 'Backend Developer', 'Full Stack', 'Python', 'Java', 'AWS', 'Microservices', 'System Design'],
  },
  'data-analyst': {
    headlines: [
      'Data Analyst @ HDFC Bank | SQL · Python · Power BI | Turning banking data into decisions that move ₹1000Cr portfolios',
      'Senior Data Analyst | E-commerce & Growth Analytics | SQL · Tableau · Python | Ex-Flipkart | 6 YOE',
      'Data Analyst | BFSI Domain | Power BI · SQL · Excel | Driving credit risk insights for 2M+ customer base',
      'Business & Data Analyst | SaaS Analytics | Mixpanel · Amplitude · SQL | Helping product teams ship with confidence',
      'Data Analyst — Freshers | Google Data Analytics Certified | SQL · Tableau · Python | Actively seeking first analyst role',
    ],
    tips: [
      'Name your primary tools upfront: SQL, Python, Tableau, or Power BI — recruiters search these specifically',
      'Include your industry domain (BFSI, e-commerce, SaaS) — many analyst JDs are domain-specific',
      'Add one business impact statement: what your analysis enables or has achieved',
      'For freshers, include relevant certifications (Google Data Analytics, HubSpot) to compensate for limited experience',
    ],
    keywords: ['Data Analyst', 'SQL', 'Power BI', 'Tableau', 'Python', 'Business Intelligence', 'Analytics', 'Excel'],
  },
  'product-manager': {
    headlines: [
      'Product Manager @ Zomato | 0→1 Grocery | Grew GMV from ₹0 to ₹200Cr in 18 months | IIM Bangalore',
      'Senior PM | Fintech & Payments | Building products used by 50M+ Indians | Ex-PhonePe · Groww',
      'Associate Product Manager | Consumer Tech | Data-driven PM who writes SQL and talks to users every week',
      'Product Manager | B2B SaaS | Specialising in SMB onboarding & activation | CRED → Chargebee',
      'Product Lead | Health-tech | 8 YOE | Growth, Retention & Monetisation | MBA IIT Delhi',
    ],
    tips: [
      'Lead with your biggest metric or business outcome — PMs without numbers look weak in a sea of PM profiles',
      'Mention your product type (consumer, B2B, platform) — PM roles are highly specialised',
      'Name 1-2 companies clearly — PM credibility is heavily influenced by employer brand',
      'Include MBA or IIT/IIM credentials if applicable — they carry strong signal in Indian PM hiring',
      'Avoid generic phrases like "passionate about products" — show impact instead',
    ],
    keywords: ['Product Manager', 'Product Strategy', 'Roadmap', 'Agile', 'Growth', 'OKRs', 'User Research', 'B2B SaaS'],
  },
  'marketing-manager': {
    headlines: [
      'Marketing Manager @ Nykaa | Performance & Growth | Scaled paid acquisition from ₹2Cr to ₹15Cr/month at 4x ROAS',
      'Senior Marketing Manager | D2C Brand Building | Helped boAt cross ₹1000Cr revenue | 8 YOE',
      'Digital Marketing Manager | B2B SaaS | HubSpot · Salesforce · Google Ads | Pipeline generation specialist',
      'Brand & Content Marketing Manager | FMCG | IIM Calcutta | P&G → Mamaearth',
      'Performance Marketing Manager | E-commerce & Fintech | Google Ads · Meta · Programmatic | Managed ₹5Cr/month budgets',
    ],
    tips: [
      'Specify your marketing specialism: performance, brand, content, or growth — generalist tags get fewer responses',
      'Include channel expertise (Google Ads, SEO, Meta) — these are screened in LinkedIn Recruiter searches',
      'Add a budget or scale indicator — it signals seniority better than years of experience',
      'Name your industry domain (D2C, FMCG, SaaS) — marketing is highly vertical',
    ],
    keywords: ['Marketing Manager', 'Performance Marketing', 'Google Ads', 'Meta Ads', 'SEO', 'Brand Management', 'Growth Marketing', 'Digital Marketing'],
  },
  'cloud-architect': {
    headlines: [
      'Cloud Architect @ Infosys | AWS Solutions Architect Pro · Terraform · Kubernetes | Migrated 400+ workloads to cloud, saving ₹2Cr/year',
      'Solutions Architect | Multi-cloud (AWS + GCP) | Fintech & Enterprise | Designed infra serving 50M+ transactions/month',
      'Senior Cloud Architect | AWS · Azure · Terraform · EKS | Ex-ThoughtWorks | Building cloud platforms that actually scale',
      'Cloud Architect | AWS Solutions Architect Professional | FinOps & Cost Optimisation | Reduced cloud spend 35% at scale-up',
      'Principal Cloud Architect | Accenture India | Multi-cloud Strategy · IaC · Security Architecture | 10+ YOE | Open to opportunities',
    ],
    tips: [
      'List your primary cloud platform first and include the certification level — "AWS Solutions Architect Professional" is a primary recruiter search term',
      'Quantify cloud cost savings or workload scale — recruiters filter cloud architect profiles by measurable infrastructure impact',
      'Include your IaC tool explicitly: "Terraform" or "CloudFormation" — these are screened keywords in LinkedIn Recruiter',
      'Mention your cloud depth: not just "AWS" but specific high-value services (EKS, VPC, Lambda, IAM) that signal expertise',
      'State "Open to opportunities" if you are actively looking — cloud architects receive 3–5x more recruiter inbound than generalist engineers',
    ],
    keywords: ['Cloud Architect', 'Solutions Architect', 'AWS', 'GCP', 'Azure', 'Terraform', 'Kubernetes', 'Cloud Migration', 'FinOps', 'Infrastructure as Code'],
  },
  'cybersecurity-analyst': {
    headlines: [
      'Cybersecurity Analyst @ IBM Security | SOC L2 | Splunk · Wireshark · Nessus | CEH | Reduced MTTR by 70% in 12 months',
      'Penetration Tester | OSCP | Web & Network | Bug Bounty Researcher | 15 CVEs | Protecting Indian enterprises from real-world threats',
      'Information Security Analyst | ISO 27001 LA | SIEM · Incident Response | BFSI Security | KPMG India',
      'SOC Analyst | Microsoft Sentinel · QRadar | Threat Hunting · Incident Response | CEH + CompTIA Security+ | 4 YOE',
      'Cybersecurity Engineer | DevSecOps | Cloud Security (AWS Security Specialty) | Helping fintech companies secure their infra | Ex-Paytm',
    ],
    tips: [
      'List your certification prominently: CEH, OSCP, CISSP, or CompTIA Security+ — they are the primary filter in cybersecurity hiring',
      'Specify your specialisation: SOC operations, penetration testing, cloud security, or compliance — generalist profiles get fewer targeted recruiter messages',
      'Include the SIEM platform you use: "Splunk", "QRadar", or "Microsoft Sentinel" — these are screened keywords in cybersecurity JDs',
      'If you have bug bounty findings or CVEs, mention them — even a single CVE or HackerOne acknowledgement is a strong credibility signal',
    ],
    keywords: ['Cybersecurity Analyst', 'Information Security', 'SOC Analyst', 'Penetration Testing', 'SIEM', 'Splunk', 'Incident Response', 'CEH', 'OSCP', 'ISO 27001'],
  },
  'management-consultant': {
    headlines: [
      'Management Consultant @ McKinsey India | Consumer & FMCG Practice | MBA IIM Ahmedabad | Delivered ₹500Cr+ in client value',
      'Strategy Consultant | BCG India | BFSI & Digital Transformation | Helping Indian enterprises compete in 2026 | IIM Bangalore',
      'Senior Consultant | Deloitte Consulting India | Financial Services Practice | 6 YOE | MBA | CFA Level 2',
      'Consultant | EY-Parthenon | Strategy & Operations | Market entry, cost transformation, M&A | MBA ISB Hyderabad',
      'Associate Consultant | Big 4 | Technology Strategy | Digital transformation for Indian enterprises | IIT Delhi → IIMA',
    ],
    tips: [
      'Include your firm name and practice area — McKinsey, BCG, Bain, Deloitte, KPMG are strong credibility signals that function as keywords in LinkedIn search',
      'Mention your MBA institution explicitly — IIM/ISB credentials carry significant signal in consulting hiring and are screened by recruiters',
      'Reference your industry focus: BFSI, consumer, healthcare, technology — consulting is highly specialised at senior levels',
      'Include one outcome-oriented statement — the scale of value you have created for clients signals your level of engagement seniority',
      'Add "MBA" or equivalent credential clearly — it is the most-searched filter for consulting professional profiles in India',
    ],
    keywords: ['Management Consultant', 'Strategy Consultant', 'McKinsey', 'BCG', 'Bain', 'Big 4', 'Financial Modelling', 'Strategy', 'MBA', 'Business Consulting'],
  },
  'data-engineer': {
    headlines: [
      'Data Engineer @ PhonePe | Apache Spark · Airflow · dbt · Snowflake | Building data infra that powers 500M+ transactions',
      'Senior Data Engineer | Flipkart | Kafka · PySpark · BigQuery | Real-time & batch pipelines at petabyte scale',
      'Data Engineer | Fractal Analytics | Python · dbt · Databricks · Airflow | Delivering trustworthy data for Fortune 500 clients',
      'Data Engineer | AWS Glue · Spark · Snowflake · Kafka | 5 YOE | Building modern data stacks for fintech and e-commerce',
      'Lead Data Engineer | Zepto | Designed data lakehouse on GCP — 300+ dbt models, 99.9% pipeline SLA | Open to senior roles',
    ],
    tips: [
      'List your primary data tools first: Spark, Airflow, dbt, Kafka — these are screened as exact keywords in data engineering JDs',
      'Include data volume context where possible: "petabyte scale", "500GB daily", or "1M events/second" establishes your pipeline seniority immediately',
      'Mention your cloud data warehouse: Snowflake, BigQuery, or Redshift — product companies filter on these in LinkedIn Recruiter',
      'Differentiate between batch and streaming experience — include "real-time" or "Kafka" explicitly if you have streaming experience, as it commands a premium',
    ],
    keywords: ['Data Engineer', 'Apache Spark', 'Airflow', 'dbt', 'Kafka', 'Snowflake', 'BigQuery', 'Python', 'ETL', 'Data Pipeline'],
  },
  'android-developer': {
    headlines: [
      'Android Engineer @ Swiggy | Kotlin · Jetpack Compose · MVVM | Building food delivery app used by 10M+ daily users',
      'Senior Android Developer | PhonePe | Kotlin · Compose · Coroutines | Fintech app: 4.7★ Play Store · 99.5% crash-free rate',
      'Android Developer | CRED | Kotlin · MVI · Clean Architecture · Hilt | Shipping beautiful, performant Android experiences',
      'Android Engineer | Meesho | Kotlin · Jetpack Compose · Firebase | 5 YOE | Ex-Zomato | Open to senior Android roles',
      'Lead Android Developer | Dream11 | Kotlin · MVVM · Coroutines · Flow | High-scale gaming app serving 150M users | IIT Madras',
    ],
    tips: [
      'Lead with Kotlin — not Java — for all modern Android roles in 2026; Kotlin must appear in the first 30 characters of your headline',
      'Include Jetpack Compose if you have hands-on experience — it is increasingly a JD requirement and a recruiter search term',
      'Add a Play Store metric: "4.7-star rating", "10M+ users", or "99.5% crash-free rate" — these signal app quality and production experience instantly',
      'Mention your architecture pattern: MVVM, MVI, or Clean Architecture — Android hiring managers search and filter on these terms',
      'State your seniority level or company tier clearly — Android engineer profiles without company context receive significantly fewer qualified recruiter messages',
    ],
    keywords: ['Android Developer', 'Android Engineer', 'Kotlin', 'Jetpack Compose', 'MVVM', 'Android SDK', 'Coroutines', 'Firebase', 'Google Play', 'Mobile Developer'],
  },
  'hr-manager': {
    headlines: [
      'HR Manager @ Infosys | Talent Acquisition & HRBP | Hired 300+ tech professionals in FY24 | XLRI',
      'Senior HR Business Partner | SaaS & Tech | Org Design · Talent Development · Culture | 8 YOE',
      'HR Manager | Talent Acquisition Specialist | IT & Engineering Hiring | Darwinbox · LinkedIn Recruiter',
      'Head of People & Culture | D2C Startups | Built HR function from scratch at 3 high-growth companies',
      'HR Generalist | HRBP | FMCG & Manufacturing | Labour Law · PF/ESI · Payroll | SuccessFactors',
    ],
    tips: [
      'Specify your HR specialisation: TA, HRBP, L&D, or Generalist — they are different career tracks',
      'Include the type of workforce you support (tech, manufacturing, sales) — HRBP roles are domain-specific',
      'Add scale: headcount supported, hires made, or employee base — it signals seniority',
      'Name HR tools (Darwinbox, SAP SuccessFactors, Workday) — they are screened in most JDs',
    ],
    keywords: ['HR Manager', 'Talent Acquisition', 'HRBP', 'Human Resources', 'Darwinbox', 'L&D', 'Employee Engagement', 'Performance Management'],
  },
  'finance-analyst': {
    headlines: [
      'Finance Analyst @ Goldman Sachs | Equity Research | BFSI · Pharma · Consumer | CFA Level 2 Candidate',
      'FP&A Analyst | SaaS & Tech Finance | Financial Modelling · Budgeting · Board Reporting | Ex-Freshworks',
      'Senior Finance Analyst | Investment Banking | DCF · LBO · M&A | Kotak IB → EY Deal Advisory',
      'Finance Analyst | Corporate Finance & Treasury | SAP · Power BI · Excel | CA (ICAI) | Manufacturing Sector',
      'Junior Finance Analyst | Big 4 Trained | Statutory Audit → Corporate FP&A | CA Inter | HDFC Group',
    ],
    tips: [
      'Include your qualification prominently: CA, CFA, CMA, or MBA Finance — they are the primary filter in finance hiring',
      'Specify your finance track: FP&A, investment banking, audit, or treasury — each is a distinct role type',
      'Mention the scale of portfolios or budgets you work with — it establishes seniority quickly',
      'Name ERP tools (SAP, Oracle) and financial modelling skills (DCF, LBO) — heavily screened in JD keywords',
    ],
    keywords: ['Finance Analyst', 'FP&A', 'Financial Modelling', 'CA', 'CFA', 'Investment Banking', 'SAP', 'Corporate Finance'],
  },
};

function generateStubLinkedinData(slug: string, displayTitle: string): Omit<LinkedinData, 'slug' | 'displayTitle'> {
  return {
    headlines: [
      `${displayTitle} | 5+ Years Experience | Delivering results across top Indian companies`,
      `Senior ${displayTitle} | Domain Expert | Open to new opportunities in India`,
      `${displayTitle} @ [Company] | Proven track record of impact | Results-driven professional`,
      `Experienced ${displayTitle} | Cross-functional leader | Helping organisations achieve measurable outcomes`,
      `${displayTitle} | Industry specialist | Active job seeker | Let's connect`,
    ],
    tips: [
      'Lead with your job title and current or most recent employer — recruiters scan these first',
      'Add 2-3 specialist skills or tools relevant to your role — LinkedIn search indexes keyword-rich headlines',
      'Include a short impact statement showing what your work achieves or has achieved',
      'State clearly if you are open to opportunities — it significantly increases recruiter outreach',
      'Keep it under 220 characters so it displays fully on mobile and search results',
    ],
    keywords: [
      displayTitle,
      'India',
      'Professional',
      'Leadership',
      'Strategy',
      'Results',
    ],
  };
}

export const linkedinMap: Record<string, LinkedinData> = {};

for (const slug of roleSlugs) {
  const role = roleMap.get(slug);
  const displayTitle = role?.displayTitle ?? slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const base = detailedLinkedinData[slug] ?? generateStubLinkedinData(slug, displayTitle);
  linkedinMap[slug] = { slug, displayTitle, ...base };
}
