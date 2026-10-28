import type { SalaryData } from '@/lib/salaryData';

type Band = [number, number];

interface SalarySeed {
  /** Annual CTC bands in lakh INR (min, max) for each seniority level. */
  fresher: Band;
  midLevel: Band;
  senior: Band;
  leadership: Band;
  topPayingSkills: string[];
  salaryBoostFactors: string[];
  negotiationTips: string[];
  title: string;
}

const lakh = (n: number): string => {
  if (n >= 100) return `₹${(n / 100).toFixed(n % 100 === 0 ? 0 : 1)}Cr`;
  return `₹${Number.isInteger(n) ? n : n.toFixed(1)}L`;
};

const range = ([lo, hi]: Band, scale = 1): string => `${lakh(Math.round(lo * scale * 10) / 10)} – ${lakh(Math.round(hi * scale * 10) / 10)}`;

const buildSalary = (seed: SalarySeed): SalaryData => {
  const all: Band = [seed.fresher[0], seed.senior[1]];
  const title = seed.title;
  return {
    byExperience: {
      fresher: `${range(seed.fresher)} (0–2 years; indicative range)`,
      midLevel: `${range(seed.midLevel)} (3–6 years; indicative range)`,
      senior: `${range(seed.senior)} (7–12 years; indicative range)`,
      leadership: `${range(seed.leadership)} (13+ years; indicative range)`,
    },
    byCompanyType: {
      startup: `${range(all, 0.9)} (varies widely; equity or variable pay may form part of the package)`,
      midSize: `${range(all, 0.95)} (structured bands, steady annual hikes)`,
      mnc: `${range(all, 1.15)} (higher fixed pay and benefits at established multinationals)`,
      faang: `${range([seed.midLevel[0], seed.senior[1]], 1.4)} (large global employers and top-tier product companies; base + bonus + stock where offered)`,
    },
    byLocation: {
      bangalore: `${range(all, 1.15)} (usually the highest-paying metro for this role)`,
      mumbai: `${range(all, 1.1)} (strong for BFSI and corporate head offices)`,
      delhi: `${range(all, 1.08)} (Delhi NCR: Gurugram and Noida hubs)`,
      hyderabad: `${range(all, 1.08)} (growing hub with large MNC campuses)`,
      chennai: `${range(all, 0.98)} (steady demand across manufacturing and services)`,
      pune: `${range(all, 1.02)} (strong for engineering and IT services)`,
      other: `${range(all, 0.8)} (tier-2 cities; lower cost of living)`,
    },
    topPayingSkills: seed.topPayingSkills,
    salaryBoostFactors: seed.salaryBoostFactors,
    negotiationTips: seed.negotiationTips,
    faqs: [
      {
        q: `What is the average ${title} salary in India?`,
        a: `As an indicative range, a ${title} in India earns about ${range(seed.fresher)} at fresher level, ${range(seed.midLevel)} at mid-level (3–6 years) and ${range(seed.senior)} at senior level (7–12 years). Actual pay depends on employer type, city, skills and negotiation, so treat these figures as a guide, not a guarantee.`,
      },
      {
        q: `Which city pays the most for a ${title} in India?`,
        a: `Bangalore, Mumbai and Delhi NCR generally pay the highest for this role, often 8–15% above the national range. Tier-2 cities pay less but have a lower cost of living.`,
      },
      {
        q: `How can a ${title} earn a higher salary?`,
        a: `Quantified achievements on your CV, in-demand specialist skills, and moving to larger employers drive the biggest jumps. Use CV Prime to highlight measurable results and check your resume against ATS keywords before you negotiate.`,
      },
    ],
  };
};

const negotiate = (title: string): string[] => [
  `Research current ${title} offers on multiple salary sites before the first call and anchor to the upper half of your range`,
  'Quantify your impact (revenue, cost saved, scale handled) and cite it when asked for expected CTC',
  'Negotiate the full package — fixed pay, variable, joining bonus, notice-period buyout — not just the headline number',
];

export const salaryDataMore: Record<string, SalaryData> = {
  'business-development-manager': buildSalary({
    title: 'Business Development Manager',
    fresher: [3, 6], midLevel: [7, 16], senior: [16, 32], leadership: [32, 70],
    topPayingSkills: ['Enterprise B2B sales', 'Key account management', 'Partnership development', 'Pipeline forecasting', 'CRM (Salesforce, HubSpot)', 'Contract negotiation', 'SaaS sales'],
    salaryBoostFactors: ['Consistent quota over-achievement with proof', 'Experience selling SaaS or enterprise solutions', 'Variable pay and incentives linked to closed revenue', 'Experience opening new markets or verticals'],
    negotiationTips: negotiate('Business Development Manager'),
  }),
  'chartered-accountant': buildSalary({
    title: 'Chartered Accountant',
    fresher: [7, 12], midLevel: [12, 25], senior: [25, 50], leadership: [50, 120],
    topPayingSkills: ['Statutory audit', 'Direct and indirect taxation', 'IFRS / Ind AS', 'M&A due diligence', 'Financial modelling', 'Internal controls and risk', 'SAP FICO'],
    salaryBoostFactors: ['Big 4 or top-tier firm experience', 'DISA, CFA or IFRS certification alongside CA', 'Specialisation in transaction advisory or international tax', 'Industry moves into CFO-track finance roles'],
    negotiationTips: negotiate('Chartered Accountant'),
  }),
  'embedded-systems-engineer': buildSalary({
    title: 'Embedded Systems Engineer',
    fresher: [3.5, 8], midLevel: [8, 20], senior: [20, 40], leadership: [40, 80],
    topPayingSkills: ['Embedded C/C++', 'RTOS', 'Automotive protocols (CAN, AUTOSAR)', 'Linux kernel and drivers', 'ARM Cortex architecture', 'Functional safety (ISO 26262)', 'Firmware security'],
    salaryBoostFactors: ['Automotive or semiconductor domain depth', 'Experience with shipped hardware products', 'Functional safety expertise', 'Work at global R&D centres'],
    negotiationTips: negotiate('Embedded Systems Engineer'),
  }),
  'full-stack-developer': buildSalary({
    title: 'Full Stack Developer',
    fresher: [3.5, 9], midLevel: [10, 28], senior: [28, 55], leadership: [55, 110],
    topPayingSkills: ['React / Next.js', 'Node.js', 'TypeScript', 'System design', 'Cloud (AWS, GCP)', 'PostgreSQL and NoSQL design', 'CI/CD and DevOps basics'],
    salaryBoostFactors: ['Product-company experience on the CV', 'Open-source or shipped side projects', 'System design depth', 'Cloud certifications'],
    negotiationTips: negotiate('Full Stack Developer'),
  }),
  'interior-designer': buildSalary({
    title: 'Interior Designer',
    fresher: [2.4, 4.5], midLevel: [4.5, 10], senior: [10, 22], leadership: [22, 50],
    topPayingSkills: ['AutoCAD', 'SketchUp / 3ds Max / Revit', 'Space planning', 'Project and vendor management', 'Luxury and hospitality design', 'Client presentations', 'Cost estimation'],
    salaryBoostFactors: ['Strong portfolio with executed projects', 'Hospitality or high-end residential specialisation', 'Project management ability', 'Employment at well-known design studios'],
    negotiationTips: negotiate('Interior Designer'),
  }),
  'investment-banker': buildSalary({
    title: 'Investment Banker',
    fresher: [12, 25], midLevel: [25, 55], senior: [55, 110], leadership: [110, 300],
    topPayingSkills: ['Financial modelling', 'Valuation (DCF, comps)', 'M&A execution', 'Capital markets', 'Pitch-book preparation', 'Due diligence', 'Client relationship management'],
    salaryBoostFactors: ['MBA from a top-tier institute', 'Global bank or bulge-bracket experience', 'Closed-deal track record', 'CFA charter'],
    negotiationTips: negotiate('Investment Banker'),
  }),
  'ios-developer': buildSalary({
    title: 'iOS Developer',
    fresher: [4, 10], midLevel: [10, 28], senior: [28, 55], leadership: [55, 100],
    topPayingSkills: ['Swift and SwiftUI', 'UIKit', 'Combine / async-await', 'App architecture (MVVM, TCA)', 'Core Data and offline sync', 'App Store release management', 'Performance profiling'],
    salaryBoostFactors: ['Apps live on the App Store with real users', 'Product-company or fintech experience', 'Strong architecture and testing skills', 'Cross-platform experience (Kotlin, Flutter)'],
    negotiationTips: negotiate('iOS Developer'),
  }),
  'logistics-manager': buildSalary({
    title: 'Logistics Manager',
    fresher: [3, 5.5], midLevel: [6, 14], senior: [14, 28], leadership: [28, 60],
    topPayingSkills: ['Supply chain planning', 'Warehouse management systems', 'Transportation optimisation', 'Import/export compliance', 'Vendor and 3PL management', 'ERP (SAP, Oracle)', 'Cost reduction'],
    salaryBoostFactors: ['E-commerce or quick-commerce logistics experience', 'Cost-saving results quantified on the CV', 'Cross-border trade knowledge', 'Large-scale network or multi-warehouse management'],
    negotiationTips: negotiate('Logistics Manager'),
  }),
  'machine-learning-engineer': buildSalary({
    title: 'Machine Learning Engineer',
    fresher: [6, 16], midLevel: [16, 40], senior: [40, 80], leadership: [80, 160],
    topPayingSkills: ['Python and PyTorch', 'LLMs and generative AI', 'MLOps and model deployment', 'Distributed training', 'Feature engineering at scale', 'Recommendation and ranking systems', 'Cloud ML platforms'],
    salaryBoostFactors: ['Models deployed in production with measurable impact', 'Research publications or strong open-source work', 'LLM / GenAI applied experience', 'MS/PhD from a reputed university'],
    negotiationTips: negotiate('Machine Learning Engineer'),
  }),
  'network-engineer': buildSalary({
    title: 'Network Engineer',
    fresher: [2.5, 5], midLevel: [5, 14], senior: [14, 26], leadership: [26, 50],
    topPayingSkills: ['Cisco routing and switching', 'Network security and firewalls', 'SD-WAN', 'Cloud networking (AWS VPC, Azure)', 'Network automation (Python, Ansible)', 'Wireless design', 'BGP / OSPF'],
    salaryBoostFactors: ['CCNP / CCIE certification', 'Network automation skills', 'Cloud networking expertise', 'Data-centre or service-provider experience'],
    negotiationTips: negotiate('Network Engineer'),
  }),
  pharmacist: buildSalary({
    title: 'Pharmacist',
    fresher: [2.2, 4], midLevel: [4, 8], senior: [8, 16], leadership: [16, 35],
    topPayingSkills: ['Clinical pharmacy', 'Regulatory affairs', 'Pharmacovigilance', 'Quality assurance and GMP', 'Inventory management', 'Medication counselling', 'Clinical research'],
    salaryBoostFactors: ['Industry roles in regulatory affairs or pharmacovigilance often pay above retail pharmacy', 'M.Pharm or PharmD qualification', 'Hospital or MNC pharma experience', 'Drug licence and compliance experience'],
    negotiationTips: negotiate('Pharmacist'),
  }),
  'react-developer': buildSalary({
    title: 'React Developer',
    fresher: [3.5, 9], midLevel: [9, 26], senior: [26, 50], leadership: [50, 95],
    topPayingSkills: ['React and Next.js', 'TypeScript', 'State management (Redux, Zustand)', 'Web performance optimisation', 'Testing (Jest, Cypress)', 'Design systems', 'GraphQL'],
    salaryBoostFactors: ['Product-company frontend experience', 'Core Web Vitals and performance wins on the CV', 'Design-system ownership', 'Full-stack capability with Node.js'],
    negotiationTips: negotiate('React Developer'),
  }),
  'sales-executive': buildSalary({
    title: 'Sales Executive',
    fresher: [2.2, 4.5], midLevel: [4.5, 9], senior: [9, 18], leadership: [18, 40],
    topPayingSkills: ['Lead generation and prospecting', 'Negotiation and closing', 'CRM tools', 'Territory management', 'B2B / enterprise selling', 'Product demonstrations', 'Target achievement'],
    salaryBoostFactors: ['Variable pay and incentives (often a large share of total earnings)', 'Consistent target over-achievement', 'Selling high-ticket B2B or SaaS products', 'Experience in high-growth sectors'],
    negotiationTips: negotiate('Sales Executive'),
  }),
  'sap-consultant': buildSalary({
    title: 'SAP Consultant',
    fresher: [3.5, 7], midLevel: [9, 24], senior: [24, 45], leadership: [45, 90],
    topPayingSkills: ['SAP S/4HANA', 'SAP FICO', 'SAP MM / SD', 'SAP ABAP and Fiori', 'SAP BTP', 'SAP SuccessFactors', 'Full-cycle implementation'],
    salaryBoostFactors: ['S/4HANA migration project experience', 'Multiple end-to-end implementations', 'SAP certification', 'Functional plus technical hybrid skills'],
    negotiationTips: negotiate('SAP Consultant'),
  }),
  'scrum-master': buildSalary({
    title: 'Scrum Master',
    fresher: [4, 8], midLevel: [10, 22], senior: [22, 38], leadership: [38, 70],
    topPayingSkills: ['Scrum and Kanban facilitation', 'Scaled Agile (SAFe)', 'Agile coaching', 'Jira and Confluence', 'Stakeholder management', 'Metrics and flow analysis', 'Release planning'],
    salaryBoostFactors: ['PSM II / CSM / SAFe certification', 'Experience coaching multiple teams', 'Large-scale agile transformation work', 'Technical background in software delivery'],
    negotiationTips: negotiate('Scrum Master'),
  }),
};
