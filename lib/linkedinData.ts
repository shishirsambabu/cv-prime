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
      'Software Engineer @ Razorpay | Python · React · AWS | Building fintech infra that processes ₹1B+ daily',
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
      'Senior PM | Fintech & Payments | Building products used by 50M+ Indians | Ex-PhonePe · Razorpay',
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
