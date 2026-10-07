import type { SalaryData } from '@/lib/salaryData';

// Indicative India salary bands for 15 additional roles. Figures are ranges
// compiled from public pay-band disclosures and typical offer patterns; they are
// directional, not guarantees. Merged into salaryDataMap in lib/salaryData.ts.

function tips(role: string, extra: string[]): string[] {
  return [
    ...extra,
    `Negotiate only after a written offer, and anchor on a specific outcome from your ${role} work rather than years of experience alone`,
    'Compare total compensation (fixed + variable + joining bonus + benefits), not just the fixed CTC figure',
  ];
}

export const salaryDataMore: Record<string, SalaryData> = {
  'sales-executive': {
    byExperience: {
      fresher: '₹2.4L – ₹4.5L (0–2 years; fixed pay plus incentives)',
      midLevel: '₹4.5L – ₹9L (3–6 years; senior executive or team lead, incentive-heavy)',
      senior: '₹9L – ₹16L (7–12 years; area or regional sales roles)',
      leadership: '₹16L – ₹30L+ (13+ years; moves into sales manager and head-of-sales bands)',
    },
    byCompanyType: {
      startup: '₹3L – ₹9L (lower fixed, uncapped incentives in B2B SaaS and D2C)',
      midSize: '₹3L – ₹8L (stable fixed pay with structured incentive slabs)',
      mnc: '₹4L – ₹12L (FMCG, pharma and telecom pay the most predictable variable)',
      faang: '₹8L – ₹25L (enterprise inside-sales and account executive roles at large tech firms)',
    },
    byLocation: {
      bangalore: '₹3L – ₹14L (strong B2B SaaS inside-sales market)',
      mumbai: '₹3L – ₹13L (BFSI, FMCG and media sales)',
      delhi: '₹3L – ₹12L (NCR hub for telecom, edtech and real estate sales)',
      hyderabad: '₹2.8L – ₹11L (pharma and IT product sales)',
      chennai: '₹2.6L – ₹9L (auto, manufacturing and BFSI sales)',
      pune: '₹2.6L – ₹9L (auto-component and IT sales)',
      other: '₹2.2L – ₹6L (Tier-2 cities; field sales dominate)',
      kolkata: '₹2.4L – ₹7L (FMCG, BFSI and field sales)',
      ahmedabad: '₹2.4L – ₹8L (industrial, pharma and trading-hub sales)',
    },
    topPayingSkills: ['Consultative / solution selling', 'CRM tools (Salesforce, HubSpot, Zoho)', 'Lead qualification and outbound prospecting', 'Negotiation and closing', 'Account management', 'Pipeline forecasting', 'B2B SaaS product knowledge', 'Territory planning'],
    salaryBoostFactors: [
      'A verifiable quota-attainment record (for example 120% of target for four consecutive quarters) is the strongest lever',
      'B2B SaaS and enterprise sales experience pays materially more than low-ticket field sales',
      'Domain knowledge in BFSI, pharma or technology products increases the offer band',
      'CRM fluency and clean pipeline reporting signal readiness for a team-lead role',
    ],
    negotiationTips: tips('sales', [
      'Ask for the incentive plan in writing — payout slab, cap, clawback and payout timing matter as much as the fixed pay',
      'Negotiate a higher fixed component when the quota looks aggressive for the territory',
    ]),
    faqs: [
      { q: 'What is the average sales executive salary in India in 2026?', a: 'Most sales executives in India earn between ₹2.4L and ₹6L a year at entry and mid level, with 3–6 years of experience reaching ₹4.5L–₹9L. Variable incentives can add 15–40% on top of fixed pay, and B2B SaaS roles pay at the top of the range.' },
      { q: 'Is sales executive pay mostly fixed or variable?', a: 'It depends on the sector. FMCG, BFSI and telecom roles lean towards stable fixed pay with modest incentives, while startups and SaaS companies use lower fixed pay with large uncapped variable. Always compare the on-target earnings, not only the fixed CTC.' },
    ],
  },

  'ios-developer': {
    byExperience: {
      fresher: '₹4L – ₹9L (0–2 years; Swift / SwiftUI projects and an app on the App Store help)',
      midLevel: '₹12L – ₹28L (3–6 years; product-company iOS engineer)',
      senior: '₹28L – ₹55L (7–12 years; senior and staff iOS engineer)',
      leadership: '₹55L – ₹1Cr+ (13+ years; mobile architect, engineering manager)',
    },
    byCompanyType: {
      startup: '₹6L – ₹30L (plus ESOPs; ownership of the whole iOS app)',
      midSize: '₹8L – ₹30L (stable pay, moderate equity)',
      mnc: '₹10L – ₹40L (captive centres and global product teams)',
      faang: '₹25L – ₹90L+ (base + RSUs + bonus at Apple, Google, Amazon, Microsoft)',
    },
    byLocation: {
      bangalore: '₹5L – ₹75L (largest iOS job market in India)',
      mumbai: '₹4.5L – ₹45L (fintech and consumer apps)',
      delhi: '₹4L – ₹40L (NCR product and e-commerce teams)',
      hyderabad: '₹4.5L – ₹55L (large global-capability centres)',
      chennai: '₹4L – ₹32L (fintech and IT services)',
      pune: '₹4L – ₹35L (product and services mix)',
      other: '₹3L – ₹20L (Tier-2 cities; fewer pure iOS roles)',
      kolkata: '₹3.5L – ₹20L (IT services and product startups)',
      ahmedabad: '₹3.5L – ₹22L (IT services and consumer-app startups)',
    },
    topPayingSkills: ['Swift and SwiftUI', 'Concurrency (async/await, Combine)', 'Core Data / SwiftData', 'App architecture (MVVM, TCA)', 'Performance profiling with Instruments', 'CI/CD with Fastlane', 'Unit and UI testing (XCTest)', 'Accessibility and App Store guidelines'],
    salaryBoostFactors: [
      'Shipped App Store apps with measurable users or ratings',
      'SwiftUI plus UIKit fluency and a modern concurrency background',
      'Experience at scale — large codebases, modularisation and release management',
      'Cross-over skills such as backend basics or KMP/Flutter increase flexibility',
    ],
    negotiationTips: tips('iOS', [
      'Link your App Store apps and quote crash-free-session or rating figures in the CV and in negotiation',
      'Negotiate RSU vesting schedule and refresh grants separately from base at product companies',
    ]),
    faqs: [
      { q: 'What is the average iOS developer salary in India in 2026?', a: 'iOS developers in India typically earn ₹4L–₹9L as freshers, ₹12L–₹28L at 3–6 years and ₹28L–₹55L at senior level. Big-tech and well-funded product companies pay well above these bands once equity is included.' },
      { q: 'Do iOS developers earn more than Android developers in India?', a: 'Pay is broadly comparable at the same seniority. iOS roles are fewer, so strong candidates with shipped App Store apps often have good negotiating leverage, particularly at product companies and global capability centres.' },
    ],
  },

  'full-stack-developer': {
    byExperience: {
      fresher: '₹3.5L – ₹9L (0–2 years; MERN or Java-Spring portfolio projects)',
      midLevel: '₹10L – ₹28L (3–6 years; owns features end to end)',
      senior: '₹28L – ₹55L (7–12 years; senior and staff full-stack engineer)',
      leadership: '₹55L – ₹1.1Cr+ (13+ years; tech lead, engineering manager)',
    },
    byCompanyType: {
      startup: '₹5L – ₹30L (plus ESOPs; broad scope)',
      midSize: '₹6L – ₹30L (solid base and structured growth)',
      mnc: '₹8L – ₹38L (IT services pay less; product MNCs pay more)',
      faang: '₹22L – ₹95L+ (base + RSU + bonus)',
    },
    byLocation: {
      bangalore: '₹4.5L – ₹75L (highest-paying market)',
      mumbai: '₹4L – ₹45L (fintech and consumer tech)',
      delhi: '₹4L – ₹40L (NCR product companies)',
      hyderabad: '₹4L – ₹55L (large global-capability centres)',
      chennai: '₹3.5L – ₹30L (IT services and SaaS)',
      pune: '₹3.8L – ₹33L (product and services mix)',
      other: '₹2.5L – ₹18L (Tier-2 cities)',
      kolkata: '₹3.5L – ₹20L (IT services and startups)',
      ahmedabad: '₹3.5L – ₹22L (IT services and SaaS)',
    },
    topPayingSkills: ['React / Next.js with TypeScript', 'Node.js or Java/Spring backend', 'System design', 'PostgreSQL and data modelling', 'AWS / cloud deployment', 'API design (REST, GraphQL)', 'Testing and CI/CD', 'Performance and security fundamentals'],
    salaryBoostFactors: [
      'Deployed, live projects with real users rather than tutorial clones',
      'Depth on both sides — strong backend and data modelling plus polished frontend',
      'Cloud and DevOps fluency (Docker, CI/CD, AWS) that reduces hand-offs',
      'System design ability — the main gate for senior bands',
    ],
    negotiationTips: tips('full-stack', [
      'Show end-to-end ownership: one feature you took from schema to deployment with a measurable outcome',
      'Product companies pay noticeably more than services firms for the same stack — benchmark both',
    ]),
    faqs: [
      { q: 'What is the average full stack developer salary in India in 2026?', a: 'Full stack developers typically earn ₹3.5L–₹9L as freshers, ₹10L–₹28L at 3–6 years and ₹28L–₹55L at senior levels. Product companies and startups backed by strong funding pay at the upper end.' },
      { q: 'Which stack pays the most for full stack developers in India?', a: 'There is no single winning stack; pay follows company type and depth. React/Next.js with Node or Java/Spring on AWS is the most common high-demand combination, and system design skill moves offers more than the specific framework.' },
    ],
  },

  'machine-learning-engineer': {
    byExperience: {
      fresher: '₹5L – ₹14L (0–2 years; strong projects or research background)',
      midLevel: '₹16L – ₹40L (3–6 years; ships models to production)',
      senior: '₹40L – ₹80L (7–12 years; senior and staff ML engineer)',
      leadership: '₹80L – ₹1.5Cr+ (13+ years; ML lead, head of AI)',
    },
    byCompanyType: {
      startup: '₹8L – ₹45L (plus ESOPs; broad ownership)',
      midSize: '₹8L – ₹40L (applied ML teams)',
      mnc: '₹12L – ₹55L (captive AI/ML centres)',
      faang: '₹30L – ₹1.2Cr+ (base + RSU + bonus)',
    },
    byLocation: {
      bangalore: '₹6L – ₹1Cr (largest ML job market)',
      mumbai: '₹5L – ₹60L (BFSI and fintech ML)',
      delhi: '₹5L – ₹55L (NCR product and consulting)',
      hyderabad: '₹5L – ₹80L (global AI centres)',
      chennai: '₹4.5L – ₹40L (IT services and analytics)',
      pune: '₹4.5L – ₹42L (analytics and product)',
      other: '₹3L – ₹22L (Tier-2 cities; fewer roles)',
      kolkata: '₹4.5L – ₹28L (analytics and BFSI)',
      ahmedabad: '₹4.5L – ₹28L (pharma, fintech and industrial analytics)',
    },
    topPayingSkills: ['PyTorch / TensorFlow', 'MLOps (MLflow, Kubeflow, model serving)', 'Feature engineering at scale', 'LLM fine-tuning and evaluation', 'Recommendation / ranking systems', 'Experiment design and A/B testing', 'Distributed training and Spark', 'Cloud ML (SageMaker, Vertex AI)'],
    salaryBoostFactors: [
      'Models in production with a measured business metric (latency, conversion, cost saved)',
      'MLOps and deployment depth — scarcer than modelling skill alone',
      'Experience with LLMs, fine-tuning and evaluation frameworks',
      'Publications or Kaggle results help at research-heavy employers',
    ],
    negotiationTips: tips('ML', [
      'Quantify model impact — "lifted click-through 8% on a ranking model serving 2M users" outweighs a list of libraries',
      'Ask whether the role is research, applied ML or MLOps; the fair band differs across them',
    ]),
    faqs: [
      { q: 'What is the average machine learning engineer salary in India in 2026?', a: 'ML engineers typically earn ₹5L–₹14L as freshers, ₹16L–₹40L at 3–6 years and ₹40L–₹80L at senior levels. Top product and AI-first companies pay more, especially when equity is included.' },
      { q: 'Is a master’s degree needed for a high ML engineer salary?', a: 'Not strictly. Many ML engineers are hired on the strength of production projects and engineering skill. A postgraduate degree helps for research-oriented roles but shipped, measurable models matter more for most applied ML offers.' },
    ],
  },

  'chartered-accountant': {
    byExperience: {
      fresher: '₹7L – ₹14L (newly qualified CA; campus placements at the top end)',
      midLevel: '₹14L – ₹28L (3–6 years post-qualification)',
      senior: '₹28L – ₹50L (7–12 years; finance manager / senior manager)',
      leadership: '₹50L – ₹1.2Cr+ (13+ years; finance controller, CFO track)',
    },
    byCompanyType: {
      startup: '₹8L – ₹30L (often broader finance ownership)',
      midSize: '₹8L – ₹28L (corporate finance and audit roles)',
      mnc: '₹10L – ₹45L (MNC finance, tax and shared-services centres)',
      faang: '₹18L – ₹60L (large tech finance and treasury teams)',
    },
    byLocation: {
      bangalore: '₹7L – ₹60L (startup and MNC finance hub)',
      mumbai: '₹8L – ₹75L (highest-paying for BFSI, audit and investment-adjacent roles)',
      delhi: '₹7L – ₹55L (corporate and consulting)',
      hyderabad: '₹7L – ₹45L (global capability centres)',
      chennai: '₹6.5L – ₹38L (corporate and manufacturing finance)',
      pune: '₹6.5L – ₹38L (industrial and IT finance)',
      other: '₹5L – ₹22L (Tier-2 cities; practice and SME roles)',
      kolkata: '₹6L – ₹30L (corporates and audit firms)',
      ahmedabad: '₹6.5L – ₹32L (industrial, trading and IFSC roles)',
    },
    topPayingSkills: ['IFRS / Ind AS reporting', 'Direct and indirect tax', 'Statutory and internal audit', 'FP&A and financial modelling', 'Treasury and risk', 'SAP / Oracle ERP', 'Transaction advisory and due diligence', 'Data analytics for finance'],
    salaryBoostFactors: [
      'Big-4 audit or advisory experience is a strong signal for corporate offers',
      'Specialisations — international tax, transaction advisory, treasury — command a premium',
      'ERP and analytics skills alongside technical accounting',
      'Additional credentials such as CFA, ACCA, CPA or DISA',
    ],
    negotiationTips: tips('CA', [
      'Anchor on the scope of the team, revenue or audit portfolio you handled rather than only the qualification',
      'Check whether the offer treats articleship years or post-qualification years as the experience baseline',
    ]),
    faqs: [
      { q: 'What is the average chartered accountant salary in India in 2026?', a: 'Newly qualified CAs commonly receive ₹7L–₹14L, with top campus placements higher. CAs with 3–6 years of experience earn ₹14L–₹28L and senior finance managers ₹28L–₹50L, varying by city and employer.' },
      { q: 'Which CA specialisations pay the most?', a: 'Transaction advisory, international tax, treasury and FP&A for large corporates generally pay above audit and compliance roles. Experience at a Big-4 firm and fluency in financial modelling increase the offer.' },
    ],
  },

  'sap-consultant': {
    byExperience: {
      fresher: '₹3.5L – ₹7L (0–2 years; trainee or associate consultant)',
      midLevel: '₹10L – ₹24L (3–6 years; module consultant)',
      senior: '₹24L – ₹45L (7–12 years; senior consultant, solution architect)',
      leadership: '₹45L – ₹90L+ (13+ years; delivery lead, practice head)',
    },
    byCompanyType: {
      startup: '₹6L – ₹22L (smaller partners and niche implementers)',
      midSize: '₹6L – ₹28L (SAP partner firms)',
      mnc: '₹8L – ₹45L (Accenture, Deloitte, IBM, Capgemini and global SIs)',
      faang: '₹20L – ₹55L (in-house SAP teams at large enterprises)',
    },
    byLocation: {
      bangalore: '₹4L – ₹55L (largest SAP delivery market)',
      mumbai: '₹4L – ₹45L (BFSI and manufacturing clients)',
      delhi: '₹4L – ₹42L (NCR enterprise clients)',
      hyderabad: '₹4L – ₹45L (delivery centres)',
      chennai: '₹3.8L – ₹38L (manufacturing and automotive)',
      pune: '₹3.8L – ₹40L (manufacturing and automotive)',
      other: '₹3L – ₹22L (Tier-2 cities)',
      kolkata: '₹3.5L – ₹24L (manufacturing and services)',
      ahmedabad: '₹3.5L – ₹26L (industrial and pharma clients)',
    },
    topPayingSkills: ['SAP S/4HANA', 'SAP FICO / MM / SD / PP', 'SAP BTP and Fiori', 'ABAP on HANA', 'SAP SuccessFactors', 'Data migration (LTMC)', 'Integration (CPI / PI-PO)', 'Cloud ERP implementation'],
    salaryBoostFactors: [
      'Full-lifecycle S/4HANA implementation or migration experience',
      'Official SAP certification in a high-demand module',
      'Functional-plus-technical hybrid skills (for example FICO with ABAP)',
      'Client-facing leadership on rollouts across multiple countries',
    ],
    negotiationTips: tips('SAP', [
      'List the number of go-lives, modules and end users supported — rollout scale justifies higher bands',
      'Consider contract and freelance rates for niche modules, which can exceed full-time CTC',
    ]),
    faqs: [
      { q: 'What is the average SAP consultant salary in India in 2026?', a: 'SAP consultants typically earn ₹3.5L–₹7L at entry, ₹10L–₹24L at 3–6 years and ₹24L–₹45L at senior or architect level. S/4HANA and BTP skills sit at the top of the range.' },
      { q: 'Which SAP module pays the highest in India?', a: 'Modules tied to S/4HANA migrations — FICO, MM, SD, plus BTP and integration — are consistently in demand. Pay depends more on implementation depth and certification than on any single module name.' },
    ],
  },

  'react-developer': {
    byExperience: {
      fresher: '₹3.5L – ₹9L (0–2 years; React + TypeScript portfolio)',
      midLevel: '₹10L – ₹26L (3–6 years; owns frontend features)',
      senior: '₹26L – ₹50L (7–12 years; senior and staff frontend engineer)',
      leadership: '₹50L – ₹95L+ (13+ years; frontend architect, engineering manager)',
    },
    byCompanyType: {
      startup: '₹5L – ₹28L (plus ESOPs)',
      midSize: '₹6L – ₹28L (solid base, moderate equity)',
      mnc: '₹8L – ₹35L (product MNCs and captive centres)',
      faang: '₹22L – ₹90L+ (base + RSU + bonus)',
    },
    byLocation: {
      bangalore: '₹4.5L – ₹70L (highest-paying frontend market)',
      mumbai: '₹4L – ₹42L (fintech and consumer tech)',
      delhi: '₹4L – ₹38L (NCR product companies)',
      hyderabad: '₹4L – ₹50L (global capability centres)',
      chennai: '₹3.5L – ₹28L (SaaS and IT services)',
      pune: '₹3.8L – ₹32L (product and services mix)',
      other: '₹2.5L – ₹17L (Tier-2 cities)',
      kolkata: '₹3.5L – ₹20L (IT services and startups)',
      ahmedabad: '₹3.5L – ₹20L (IT services and SaaS)',
    },
    topPayingSkills: ['React with TypeScript', 'Next.js and server rendering', 'State management (Redux Toolkit, Zustand, React Query)', 'Performance optimisation and Core Web Vitals', 'Testing (Jest, React Testing Library, Playwright)', 'Design systems and component libraries', 'Accessibility (WCAG)', 'Frontend system design'],
    salaryBoostFactors: [
      'Production React apps with measurable performance or conversion gains',
      'Next.js, TypeScript and testing fluency rather than React alone',
      'Design-system ownership and accessibility experience',
      'Frontend system-design depth for senior bands',
    ],
    negotiationTips: tips('React', [
      'Quote a Core Web Vitals or conversion improvement you delivered',
      'Product companies pay noticeably more than services firms for the same React skill set',
    ]),
    faqs: [
      { q: 'What is the average React developer salary in India in 2026?', a: 'React developers earn about ₹3.5L–₹9L as freshers, ₹10L–₹26L at 3–6 years and ₹26L–₹50L at senior level. Top product companies pay more once equity is included.' },
      { q: 'Does learning Next.js and TypeScript raise a React developer’s salary?', a: 'Yes, in practice. Most higher-paying React openings expect TypeScript and often Next.js, so those skills widen the set of employers who will pay at the upper end of the band.' },
    ],
  },

  'investment-banker': {
    byExperience: {
      fresher: '₹10L – ₹25L (analyst; top MBA / campus hires at bulge-bracket firms higher)',
      midLevel: '₹25L – ₹60L (associate, 3–6 years)',
      senior: '₹60L – ₹1.5Cr (vice president, 7–12 years; includes bonus)',
      leadership: '₹1.5Cr – ₹5Cr+ (director / MD; heavily bonus-linked)',
    },
    byCompanyType: {
      startup: '₹8L – ₹30L (boutique and fintech advisory)',
      midSize: '₹10L – ₹45L (domestic boutiques and mid-market advisors)',
      mnc: '₹15L – ₹80L (global banks in India)',
      faang: '₹20L – ₹90L (corporate development at large tech firms)',
    },
    byLocation: {
      bangalore: '₹8L – ₹60L (growing corporate-development and fintech roles)',
      mumbai: '₹10L – ₹1.5Cr+ (the centre of Indian investment banking)',
      delhi: '₹9L – ₹90L (NCR advisory and PE)',
      hyderabad: '₹7L – ₹45L (global capability centres)',
      chennai: '₹6L – ₹35L (limited front-office roles)',
      pune: '₹6L – ₹35L (limited front-office roles)',
      other: '₹4L – ₹20L (few front-office roles)',
      kolkata: '₹5L – ₹25L (limited front-office roles)',
      ahmedabad: '₹6L – ₹30L (GIFT City IFSC opportunities)',
    },
    topPayingSkills: ['Financial modelling (DCF, LBO, M&A)', 'Valuation and comparable analysis', 'Pitch-book and CIM preparation', 'Deal execution', 'Excel and PowerPoint speed', 'Capital markets knowledge', 'Due diligence', 'Client relationship management'],
    salaryBoostFactors: [
      'Deal credentials — transactions closed, size and your role in them',
      'Employer tier: bulge-bracket and top boutiques pay the largest bonuses',
      'MBA from a top institute or CFA charter for lateral entry',
      'Sector specialisation (technology, healthcare, financial institutions)',
    ],
    negotiationTips: tips('investment banking', [
      'Total compensation is bonus-driven — clarify the bonus range, deferral and guaranteed component',
      'Lateral candidates should reference deal flow and league-table standing of the target team',
    ]),
    faqs: [
      { q: 'What is the average investment banker salary in India in 2026?', a: 'Analysts typically earn ₹10L–₹25L, associates ₹25L–₹60L and vice presidents ₹60L–₹1.5Cr including bonus. Total pay at senior levels depends heavily on deal flow and employer tier.' },
      { q: 'How do investment banking salaries in India compare by firm type?', a: 'Global bulge-bracket banks and elite boutiques pay the most, followed by domestic advisory firms. Corporate development and PE roles can pay comparably but with different bonus and carry structures.' },
    ],
  },

  'scrum-master': {
    byExperience: {
      fresher: '₹4L – ₹8L (0–2 years; junior agile coach or associate scrum master)',
      midLevel: '₹10L – ₹22L (3–6 years; certified scrum master)',
      senior: '₹22L – ₹38L (7–12 years; senior scrum master, agile coach)',
      leadership: '₹38L – ₹65L+ (13+ years; enterprise agile coach, delivery head)',
    },
    byCompanyType: {
      startup: '₹6L – ₹24L (often combined with product or delivery duties)',
      midSize: '₹7L – ₹26L (structured agile teams)',
      mnc: '₹9L – ₹40L (large programmes and SAFe rollouts)',
      faang: '₹20L – ₹55L (large-scale technical programme roles)',
    },
    byLocation: {
      bangalore: '₹5L – ₹50L (highest demand for agile roles)',
      mumbai: '₹5L – ₹40L (BFSI agile transformations)',
      delhi: '₹4.5L – ₹36L (NCR delivery centres)',
      hyderabad: '₹4.5L – ₹40L (global capability centres)',
      chennai: '₹4L – ₹30L (IT services)',
      pune: '₹4.5L – ₹34L (IT services and product)',
      other: '₹3L – ₹18L (Tier-2 cities)',
      kolkata: '₹3.5L – ₹22L (IT services)',
      ahmedabad: '₹3.5L – ₹22L (IT services)',
    },
    topPayingSkills: ['Scrum and Kanban facilitation', 'SAFe / large-scale agile', 'Jira and Azure DevOps', 'Agile metrics (velocity, cycle time, flow)', 'Coaching and conflict resolution', 'Release and dependency management', 'Stakeholder communication', 'Technical product understanding'],
    salaryBoostFactors: [
      'PSM, CSM, SAFe or PMI-ACP certifications',
      'Scaled-agile experience across multiple teams or programmes',
      'Demonstrated delivery metrics — improved cycle time or predictability',
      'Technical fluency that lets you coach engineering teams credibly',
    ],
    negotiationTips: tips('scrum master', [
      'Tie your value to team-level outcomes such as predictability, cycle time or reduced rework',
      'Ask whether the role is single-team facilitation or multi-team coaching — pay bands differ',
    ]),
    faqs: [
      { q: 'What is the average scrum master salary in India in 2026?', a: 'Scrum masters generally earn ₹10L–₹22L at 3–6 years and ₹22L–₹38L at senior level, with entry roles at ₹4L–₹8L. Large programmes and SAFe-scaled roles pay at the top of the range.' },
      { q: 'Is a scrum certification required to earn a higher salary?', a: 'Certifications such as PSM or CSM are commonly required for screening and help at hiring, but pay increases come mainly from proven delivery improvements and experience with scaled agile.' },
    ],
  },

  'business-development-manager': {
    byExperience: {
      fresher: '₹3L – ₹6L (0–2 years; business development executive)',
      midLevel: '₹7L – ₹16L (3–6 years; BD manager)',
      senior: '₹16L – ₹32L (7–12 years; senior BD manager, regional head)',
      leadership: '₹32L – ₹70L+ (13+ years; VP / director of business development)',
    },
    byCompanyType: {
      startup: '₹5L – ₹22L (plus ESOPs; high variable)',
      midSize: '₹5L – ₹22L (structured targets and incentives)',
      mnc: '₹7L – ₹32L (enterprise accounts and partnerships)',
      faang: '₹15L – ₹55L (partnerships and enterprise BD)',
    },
    byLocation: {
      bangalore: '₹4L – ₹40L (SaaS and tech BD hub)',
      mumbai: '₹4L – ₹38L (BFSI, media and consumer)',
      delhi: '₹4L – ₹34L (NCR enterprise and edtech)',
      hyderabad: '₹3.5L – ₹30L (IT and pharma BD)',
      chennai: '₹3.2L – ₹24L (manufacturing and IT)',
      pune: '₹3.2L – ₹24L (industrial and IT)',
      other: '₹2.5L – ₹14L (Tier-2 cities)',
      kolkata: '₹3L – ₹18L (FMCG and services)',
      ahmedabad: '₹3L – ₹20L (industrial and pharma)',
    },
    topPayingSkills: ['Enterprise and consultative selling', 'Partnership and channel development', 'Proposal and RFP writing', 'Market and competitor analysis', 'Negotiation and contracting', 'CRM and pipeline management', 'Account planning', 'Go-to-market strategy'],
    salaryBoostFactors: [
      'Revenue sourced or partnerships signed, stated in numbers',
      'Enterprise deal size and sales-cycle complexity you have handled',
      'Domain expertise in a high-margin vertical such as SaaS, BFSI or pharma',
      'Experience building new markets or channels from scratch',
    ],
    negotiationTips: tips('business development', [
      'Negotiate the target-setting method and incentive plan alongside the fixed CTC',
      'Reference revenue or pipeline you personally sourced, with dates and deal sizes',
    ]),
    faqs: [
      { q: 'What is the average business development manager salary in India in 2026?', a: 'BD managers typically earn ₹7L–₹16L at 3–6 years and ₹16L–₹32L at senior level, with entry roles at ₹3L–₹6L. Variable incentives are a major part of total pay at startups and SaaS firms.' },
      { q: 'What is the difference between sales and business development pay?', a: 'Business development roles tilt towards partnerships, new markets and longer deal cycles, often with a higher fixed share than pure quota-carrying sales. Pay is comparable but the mix of fixed and variable differs by company.' },
    ],
  },

  'network-engineer': {
    byExperience: {
      fresher: '₹2.5L – ₹5L (0–2 years; NOC and support roles with CCNA)',
      midLevel: '₹6L – ₹14L (3–6 years; network engineer)',
      senior: '₹14L – ₹28L (7–12 years; senior engineer, network architect)',
      leadership: '₹28L – ₹55L+ (13+ years; infrastructure head)',
    },
    byCompanyType: {
      startup: '₹4L – ₹16L (cloud-native networking)',
      midSize: '₹4L – ₹16L (enterprise IT and ISPs)',
      mnc: '₹6L – ₹28L (global IT services and captive centres)',
      faang: '₹18L – ₹60L (large-scale network engineering at hyperscalers)',
    },
    byLocation: {
      bangalore: '₹3L – ₹40L (highest demand for cloud and data-centre networking)',
      mumbai: '₹3L – ₹30L (BFSI and telecom)',
      delhi: '₹3L – ₹28L (telecom and government IT)',
      hyderabad: '₹3L – ₹32L (global capability centres)',
      chennai: '₹2.8L – ₹24L (IT services and telecom)',
      pune: '₹2.8L – ₹24L (IT services)',
      other: '₹2.2L – ₹14L (Tier-2 cities)',
      kolkata: '₹2.5L – ₹16L (telecom and IT services)',
      ahmedabad: '₹2.5L – ₹16L (IT services and industrial)',
    },
    topPayingSkills: ['Cisco CCNP / CCIE', 'SD-WAN and SASE', 'Cloud networking (AWS VPC, Azure networking)', 'Network security and firewalls (Palo Alto, Fortinet)', 'BGP / OSPF routing', 'Network automation (Python, Ansible)', 'Data-centre fabrics', 'Monitoring and observability'],
    salaryBoostFactors: [
      'Professional-level certifications — CCNP, CCIE, JNCIP, cloud networking specialty',
      'Network automation skills (Python, Ansible, Terraform)',
      'Cloud and SD-WAN migration experience',
      'Security-focused networking expertise',
    ],
    negotiationTips: tips('network', [
      'Highlight uptime, incident-reduction and migration outcomes with numbers',
      'On-call and shift allowances should be discussed explicitly alongside base pay',
    ]),
    faqs: [
      { q: 'What is the average network engineer salary in India in 2026?', a: 'Network engineers typically earn ₹2.5L–₹5L at entry, ₹6L–₹14L at 3–6 years and ₹14L–₹28L at senior or architect level. Cloud, SD-WAN and automation skills lift offers above these ranges.' },
      { q: 'Is CCNA enough for a good network engineer salary?', a: 'CCNA is a solid entry credential and helps with screening, but higher salaries generally need CCNP-level skill, hands-on cloud or SD-WAN experience and automation ability.' },
    ],
  },

  'logistics-manager': {
    byExperience: {
      fresher: '₹3L – ₹5.5L (0–2 years; logistics executive or coordinator)',
      midLevel: '₹7L – ₹15L (3–6 years; logistics manager)',
      senior: '₹15L – ₹28L (7–12 years; senior manager, regional logistics head)',
      leadership: '₹28L – ₹60L+ (13+ years; head of logistics, VP supply chain)',
    },
    byCompanyType: {
      startup: '₹5L – ₹22L (e-commerce and quick-commerce logistics)',
      midSize: '₹4L – ₹18L (3PL and manufacturing logistics)',
      mnc: '₹7L – ₹30L (global freight forwarders and FMCG)',
      faang: '₹14L – ₹45L (large e-commerce fulfilment networks)',
    },
    byLocation: {
      bangalore: '₹4L – ₹35L (e-commerce and quick commerce)',
      mumbai: '₹4L – ₹36L (ports, shipping and FMCG)',
      delhi: '₹3.8L – ₹32L (NCR warehousing and distribution)',
      hyderabad: '₹3.5L – ₹28L (pharma and e-commerce logistics)',
      chennai: '₹3.5L – ₹28L (port and auto logistics)',
      pune: '₹3.5L – ₹26L (auto and manufacturing logistics)',
      other: '₹2.5L – ₹16L (Tier-2 cities)',
      kolkata: '₹3L – ₹20L (port and eastern-corridor logistics)',
      ahmedabad: '₹3.2L – ₹24L (port, industrial and pharma logistics)',
    },
    topPayingSkills: ['Transportation management systems (TMS)', 'Warehouse management (WMS)', 'Route and network optimisation', 'Freight cost negotiation', 'Last-mile delivery operations', 'Import-export and customs compliance', 'Demand and inventory planning', 'Logistics analytics'],
    salaryBoostFactors: [
      'Measured cost savings per shipment or improved on-time delivery rate',
      'Exposure to e-commerce, cold-chain or pharma logistics',
      'Technology fluency with TMS/WMS and analytics tools',
      'Experience managing large fleets, hubs or 3PL vendor networks',
    ],
    negotiationTips: tips('logistics', [
      'Quantify freight savings, OTIF improvement or damage reduction with figures',
      'Clarify shift patterns and travel expectations, since they affect fair pay',
    ]),
    faqs: [
      { q: 'What is the average logistics manager salary in India in 2026?', a: 'Logistics managers usually earn ₹7L–₹15L at 3–6 years and ₹15L–₹28L at senior level, with entry roles at ₹3L–₹5.5L. E-commerce and quick-commerce employers tend to pay at the higher end.' },
      { q: 'Which logistics sector pays the most in India?', a: 'E-commerce, quick commerce, pharma cold-chain and global freight forwarding generally pay above traditional transport and warehousing. Pay rises further with technology and analytics skills.' },
    ],
  },

  'interior-designer': {
    byExperience: {
      fresher: '₹2.2L – ₹4.5L (0–2 years; junior designer or design assistant)',
      midLevel: '₹5L – ₹12L (3–6 years; designer with project ownership)',
      senior: '₹12L – ₹24L (7–12 years; senior designer, design lead)',
      leadership: '₹24L – ₹60L+ (13+ years; studio principal, design head)',
    },
    byCompanyType: {
      startup: '₹3L – ₹14L (design-and-build startups)',
      midSize: '₹3L – ₹14L (regional design firms)',
      mnc: '₹5L – ₹26L (large architecture and design firms)',
      faang: '₹10L – ₹32L (corporate real-estate and workplace design teams)',
    },
    byLocation: {
      bangalore: '₹3L – ₹28L (strong residential and commercial market)',
      mumbai: '₹3L – ₹35L (high-end residential and hospitality)',
      delhi: '₹3L – ₹30L (luxury residential and commercial)',
      hyderabad: '₹2.8L – ₹24L (growing real-estate market)',
      chennai: '₹2.6L – ₹20L (residential and hospitality)',
      pune: '₹2.6L – ₹20L (residential and commercial)',
      other: '₹2L – ₹12L (Tier-2 cities)',
      kolkata: '₹2.4L – ₹14L (residential and commercial)',
      ahmedabad: '₹2.4L – ₹16L (design-education hub and residential projects)',
    },
    topPayingSkills: ['AutoCAD and SketchUp', '3D rendering (3ds Max, V-Ray, Lumion)', 'Revit and BIM', 'Space planning', 'Material and vendor knowledge', 'Project and budget management', 'Client presentation', 'Sustainable and workplace design'],
    salaryBoostFactors: [
      'A strong portfolio of completed, photographed projects',
      'Experience with luxury residential, hospitality or large commercial fit-outs',
      'Project-management and budgeting ability, not only design skill',
      'Revit/BIM and rendering fluency valued by large firms',
    ],
    negotiationTips: tips('interior design', [
      'Lead with your portfolio and the project values you managed',
      'For freelance or retainer work, negotiate fees as a percentage of project value or by a fixed milestone schedule',
    ]),
    faqs: [
      { q: 'What is the average interior designer salary in India in 2026?', a: 'Interior designers typically earn ₹2.2L–₹4.5L at entry, ₹5L–₹12L at 3–6 years and ₹12L–₹24L at senior level. High-end residential and hospitality studios in metro cities pay at the top of the range.' },
      { q: 'Does a portfolio matter more than a degree for interior designer pay?', a: 'A degree helps with entry, but employers weigh the portfolio and project experience most heavily when setting pay, especially for mid and senior roles.' },
    ],
  },

  'pharmacist': {
    byExperience: {
      fresher: '₹2.2L – ₹4L (0–2 years; hospital or retail pharmacist)',
      midLevel: '₹4L – ₹9L (3–6 years; senior or clinical pharmacist)',
      senior: '₹9L – ₹18L (7–12 years; pharmacy manager, regulatory or QA roles)',
      leadership: '₹18L – ₹40L+ (13+ years; head of pharmacy, regulatory or quality leadership)',
    },
    byCompanyType: {
      startup: '₹3L – ₹10L (online pharmacy and health-tech)',
      midSize: '₹3L – ₹10L (regional pharma and hospital chains)',
      mnc: '₹4.5L – ₹20L (global pharma, regulatory and pharmacovigilance)',
      faang: '₹8L – ₹25L (large health-tech and clinical research organisations)',
    },
    byLocation: {
      bangalore: '₹3L – ₹22L (pharma, biotech and health-tech)',
      mumbai: '₹3L – ₹22L (pharma headquarters and hospitals)',
      delhi: '₹2.8L – ₹18L (hospital chains and regulatory roles)',
      hyderabad: '₹3L – ₹24L (largest bulk-drug and pharma hub)',
      chennai: '₹2.6L – ₹16L (hospitals and pharma)',
      pune: '₹2.6L – ₹16L (pharma manufacturing and clinical research)',
      other: '₹2L – ₹9L (Tier-2 cities)',
      kolkata: '₹2.4L – ₹10L (hospitals and pharma)',
      ahmedabad: '₹2.6L – ₹14L (strong generic-pharma manufacturing hub)',
    },
    topPayingSkills: ['Pharmacovigilance and drug safety', 'Regulatory affairs', 'Quality assurance and GMP', 'Clinical pharmacy', 'Clinical research (GCP)', 'Medical coding', 'Inventory and supply compliance', 'Pharmaceutical analytics'],
    salaryBoostFactors: [
      'Moving from retail dispensing into regulatory, pharmacovigilance or QA roles',
      'Postgraduate qualification such as M.Pharm or Pharm.D',
      'GMP, GCP or regulatory-submission experience with global pharma',
      'Experience in clinical research organisations or large hospital chains',
    ],
    negotiationTips: tips('pharmacy', [
      'Role type moves pay more than seniority — compare retail, clinical and regulatory offers separately',
      'Confirm licence and registration requirements and any shift or on-call allowances',
    ]),
    faqs: [
      { q: 'What is the average pharmacist salary in India in 2026?', a: 'Pharmacists usually earn ₹2.2L–₹4L at entry and ₹4L–₹9L at 3–6 years. Regulatory affairs, pharmacovigilance and quality roles at pharma companies pay noticeably more than retail dispensing.' },
      { q: 'Which pharmacy career path pays the most in India?', a: 'Regulatory affairs, pharmacovigilance and quality assurance at pharma and clinical research organisations typically pay more than retail or hospital dispensing, particularly with postgraduate qualifications.' },
    ],
  },

  'embedded-systems-engineer': {
    byExperience: {
      fresher: '₹3.5L – ₹8L (0–2 years; firmware or embedded trainee)',
      midLevel: '₹9L – ₹22L (3–6 years; embedded software engineer)',
      senior: '₹22L – ₹42L (7–12 years; senior firmware and systems engineer)',
      leadership: '₹42L – ₹85L+ (13+ years; embedded architect, engineering manager)',
    },
    byCompanyType: {
      startup: '₹5L – ₹25L (IoT, EV and hardware startups)',
      midSize: '₹5L – ₹24L (product engineering firms)',
      mnc: '₹8L – ₹40L (semiconductor, automotive and Tier-1 suppliers)',
      faang: '₹20L – ₹75L (consumer hardware and device teams)',
    },
    byLocation: {
      bangalore: '₹4L – ₹60L (largest embedded and semiconductor market)',
      mumbai: '₹3.5L – ₹28L (limited embedded roles)',
      delhi: '₹3.5L – ₹32L (NCR electronics and telecom)',
      hyderabad: '₹4L – ₹48L (semiconductor and defence hub)',
      chennai: '₹3.5L – ₹32L (automotive and electronics)',
      pune: '₹3.8L – ₹38L (automotive embedded and engineering services)',
      other: '₹2.5L – ₹16L (Tier-2 cities)',
      kolkata: '₹3L – ₹18L (electronics and engineering services)',
      ahmedabad: '₹3L – ₹20L (industrial automation and electronics)',
    },
    topPayingSkills: ['Embedded C / C++', 'RTOS (FreeRTOS, Zephyr)', 'ARM Cortex-M / A architectures', 'Device drivers and BSP development', 'Communication protocols (CAN, SPI, I2C, UART)', 'Embedded Linux and Yocto', 'AUTOSAR and functional safety (ISO 26262)', 'Low-power and wireless (BLE, LoRa)'],
    salaryBoostFactors: [
      'Shipped firmware on production devices with stated volumes',
      'Automotive experience — AUTOSAR, ISO 26262 and ASPICE',
      'Semiconductor and driver / BSP development skills',
      'Embedded Linux plus RTOS breadth rather than bare-metal alone',
    ],
    negotiationTips: tips('embedded', [
      'Name the hardware platforms, protocols and certifications you have shipped on',
      'Automotive and semiconductor employers pay materially more than general electronics services firms',
    ]),
    faqs: [
      { q: 'What is the average embedded systems engineer salary in India in 2026?', a: 'Embedded engineers typically earn ₹3.5L–₹8L at entry, ₹9L–₹22L at 3–6 years and ₹22L–₹42L at senior level. Automotive, semiconductor and device companies sit at the upper end.' },
      { q: 'Which embedded skills raise pay the most?', a: 'Embedded Linux and BSP work, RTOS expertise, AUTOSAR with functional-safety experience, and low-level driver development consistently command a premium over basic microcontroller programming.' },
    ],
  },
};
