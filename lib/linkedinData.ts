import { roleSlugs, roleMap } from '@/lib/roleData';

export interface LinkedinData {
  slug: string;
  displayTitle: string;
  headlines: string[];
  tips: string[];
  keywords: string[];
}

const detailedLinkedinData: Record<string, LinkedinData> = {
  'software-engineer': {
    slug: 'software-engineer',
    displayTitle: 'Software Engineer',
    headlines: [
      'Senior Software Engineer | React, Node.js, AWS | Building scalable systems at Razorpay',
      'Full Stack Developer | TypeScript, Python, Kubernetes | Ex-Amazon | Open to SDE-2 roles',
      'Software Engineer (Backend) | Java, Spring Boot, Microservices | 5 YOE | Bangalore',
      'SDE-2 at Swiggy | System Design, Redis, Kafka | B.Tech IIT Delhi | Open to product companies',
      'Software Engineer | Node.js, PostgreSQL, Docker | Building fintech infra | 3 YOE | Pune',
    ],
    tips: [
      'Lead with your seniority level and strongest technology stack — recruiters scan the first 5 words',
      'Include 2-3 core technologies relevant to your target role, not every tool you have ever used',
      'Add your current or most recent company if it is a recognisable brand — it builds instant credibility',
      'If you are open to new roles, include "Open to [role type] roles" or "Open to opportunities" at the end',
      'Use pipe symbols (|) to separate sections — they are readable and standard across LinkedIn profiles',
    ],
    keywords: ['Software Engineer', 'SDE', 'Full Stack', 'Backend Developer', 'System Design', 'AWS'],
  },
  'data-analyst': {
    slug: 'data-analyst',
    displayTitle: 'Data Analyst',
    headlines: [
      'Data Analyst | SQL, Python, Power BI | Turning raw data into business decisions at Flipkart',
      'Senior Data Analyst | Tableau, SQL, Google Analytics | Ex-McKinsey | Mumbai | Open to analytics roles',
      'Data Analyst | E-commerce & Fintech | Python, SQL, A/B Testing | 4 YOE | Hyderabad',
      'Business Intelligence Analyst | Power BI, DAX, SQL | BFSI domain | Certified in Google Analytics 4',
      'Data Analyst | Cohort Analysis, Funnel Optimisation, SQL | Driving growth at Meesho | Bangalore',
    ],
    tips: [
      'Mention your primary analytical tools (SQL, Python, Tableau/Power BI) in the first segment of your headline',
      'Include your industry domain (BFSI, e-commerce, healthcare) — domain expertise differentiates data analysts significantly',
      'Avoid vague titles like "Data Enthusiast" — use "Data Analyst" or "BI Analyst" for ATS discoverability',
      'Add a short outcome phrase if space allows: "Turning data into decisions" signals business orientation',
      'If you hold a Google Analytics or similar certification, include it — certifications are strong trust signals for data roles',
    ],
    keywords: ['Data Analyst', 'SQL', 'Power BI', 'Tableau', 'Python', 'Business Intelligence'],
  },
  'product-manager': {
    slug: 'product-manager',
    displayTitle: 'Product Manager',
    headlines: [
      'Product Manager | Growth & Retention | 0-to-1 and scaling products at CRED | Ex-Zomato',
      'Senior PM | Fintech & Payments | Roadmap, Metrics, Cross-functional Leadership | Bangalore',
      'Associate Product Manager | Consumer Apps | SQL, Amplitude, Figma | IIM Ahmedabad | Open to PM roles',
      'Product Manager | B2B SaaS | User Research, OKRs, A/B Testing | 6 YOE | Hyderabad',
      'PM — Platform & Infra Products | Driving developer productivity at Razorpay | Ex-Uber India',
    ],
    tips: [
      'Include your product focus area (growth, platform, consumer, B2B) — it helps recruiters match you to relevant JDs immediately',
      'Add the company you are at if it is well known — PM roles are heavily network-driven and brand recognition matters',
      'Mention analytical tools (SQL, Amplitude, Mixpanel) to signal data-driven credibility, especially for mid-senior roles',
      'If you are an APM or transitioning into PM, highlight your educational pedigree (IIT/IIM) or domain expertise',
      'Keep your headline to 220 characters — LinkedIn truncates longer headlines on mobile',
    ],
    keywords: ['Product Manager', 'PM', 'Roadmap', 'Growth', 'OKRs', 'User Research'],
  },
  'marketing-manager': {
    slug: 'marketing-manager',
    displayTitle: 'Marketing Manager',
    headlines: [
      'Marketing Manager | Performance & Brand | Google Ads, Meta, SEO | Scaling D2C revenue at Mamaearth',
      'Senior Marketing Manager | Digital & Content | ₹5Cr+ annual budget | Ex-HUL | Mumbai',
      'Marketing Manager | SaaS & B2B | Demand Generation, HubSpot, SEO | Freshworks | Bangalore',
      'Growth Marketing Manager | Paid Acquisition, Email, CRO | E-commerce & Fintech | 7 YOE',
      'Marketing Manager | Brand & Performance | FMCG & D2C | Driving CAC reduction across digital channels',
    ],
    tips: [
      'Specify your marketing specialisation (performance, brand, content, growth) — generalist titles attract fewer relevant opportunities',
      'Include 2-3 channels you own (Google Ads, SEO, Email) to signal depth rather than breadth',
      'Mention budget ownership if significant — "₹5Cr+ budget" signals seniority instantly',
      'For D2C and FMCG roles, include industry names in your headline to appear in industry-specific searches',
      'Add your current company if it is a recognisable brand — marketing credibility is heavily associated with the brands you have worked on',
    ],
    keywords: ['Marketing Manager', 'Performance Marketing', 'Digital Marketing', 'Brand Management', 'Growth', 'D2C'],
  },
  'hr-manager': {
    slug: 'hr-manager',
    displayTitle: 'HR Manager',
    headlines: [
      'HR Manager | Talent Acquisition & HRBP | IT & Product Companies | Darwinbox, LinkedIn Recruiter | Bangalore',
      'Senior HR Manager | Employee Experience, L&D, Compliance | 600+ employee tech company | Ex-Accenture',
      'HRBP | Business Partnering & OD | Manufacturing & FMCG | Labour Law, SuccessFactors | 8 YOE | Pune',
      'HR Manager | Full-cycle Talent Acquisition | Startups & Scale-ups | Time-to-hire champion | Hyderabad',
      'HR Business Partner | Engagement, Performance Management, POSH | BFSI domain | Mumbai | Open to HRBP roles',
    ],
    tips: [
      'Specify your HR specialisation (TA, HRBP, L&D, Generalist) — HR covers very different roles and specific titles attract better matches',
      'Include the HR tech tools you use (Darwinbox, SuccessFactors, Workday) — they are screened in ATS for most HR JDs',
      'Mention industry domain if you have strong domain depth (IT, FMCG, BFSI) — HR domain expertise commands a premium',
      'Add employee count scale if you are a business partner — "HRBP for 600-employee division" signals scope of responsibility',
      'If you handle compliance, mention it (POSH, Labour Law, PF/ESI) — it is a differentiator for senior HR roles',
    ],
    keywords: ['HR Manager', 'HRBP', 'Talent Acquisition', 'Darwinbox', 'L&D', 'Employee Engagement'],
  },
  'finance-analyst': {
    slug: 'finance-analyst',
    displayTitle: 'Finance Analyst',
    headlines: [
      'Finance Analyst | FP&A, Financial Modelling, Budgeting | SAP, Power BI | Tata Group | CA Final',
      'Senior Finance Analyst | Investment Banking & Corporate Finance | DCF, LBO | Ex-Goldman Sachs | Mumbai',
      'FP&A Analyst | Variance Analysis, MIS Reporting, SAP | BFSI & Manufacturing | CFA Level 2 | Bangalore',
      'Finance Analyst | P&L Ownership, Forecasting, Excel Modelling | ₹200Cr+ budget | 5 YOE | Hyderabad',
      'Corporate Finance Analyst | M&A, Due Diligence, Valuation | Big 4 background | CA (ICAI) | Open to IB roles',
    ],
    tips: [
      'Include your qualification prominently (CA, CFA, CMA) — it is the single strongest credential signal for finance roles',
      'Specify your finance sub-domain (FP&A, IB, Corporate Finance, Treasury) — finance is a broad field and specificity attracts better fits',
      'Mention SAP or relevant ERP — finance tools are heavily screened in JDs for analyst and senior roles',
      'If you manage a significant budget or portfolio, include the scale — "₹200Cr budget" signals seniority',
      'For investment banking aspirants, include deal type or advisory focus (M&A, PE, ECM) to signal your target path',
    ],
    keywords: ['Finance Analyst', 'FP&A', 'Financial Modelling', 'CA', 'CFA', 'SAP'],
  },
};

function generateStubLinkedinData(slug: string, displayTitle: string): LinkedinData {
  return {
    slug,
    displayTitle,
    headlines: [
      `${displayTitle} | Delivering results across India | Open to new opportunities`,
      `Experienced ${displayTitle} | Domain expertise and proven track record | India`,
      `${displayTitle} | Cross-functional collaboration and stakeholder management | 5+ YOE`,
      `Senior ${displayTitle} | Driving growth and operational excellence | Bangalore`,
      `${displayTitle} | Passionate about impact and continuous learning | Open to opportunities`,
    ],
    tips: [
      'Lead with your job title using the exact words recruiters search for — this is what appears in search results',
      'Add your top 2-3 skills or tools after your title, separated by pipe symbols',
      'Include your current company if it is a recognisable brand — it adds instant credibility',
      'If you are open to new roles, add "Open to opportunities" or "Open to [role] roles" at the end',
      'Keep your headline under 220 characters — LinkedIn truncates longer headlines on mobile and search results',
    ],
    keywords: [
      displayTitle,
      'India',
      'Professional',
      'Leadership',
      'Results-driven',
      'Stakeholder Management',
    ],
  };
}

export const linkedinMap: Record<string, LinkedinData> = {};

for (const slug of roleSlugs) {
  const role = roleMap.get(slug);
  const displayTitle = role?.displayTitle ?? slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  linkedinMap[slug] = detailedLinkedinData[slug] ?? generateStubLinkedinData(slug, displayTitle);
}
