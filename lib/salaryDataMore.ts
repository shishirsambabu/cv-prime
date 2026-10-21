import type { SalaryData } from '@/lib/salaryData';

type Loc = SalaryData['byLocation'];

function loc(l: Omit<Loc, 'other'> & { other: string }): Loc {
  return l;
}

function tips(extra: string[]): string[] {
  return [
    ...extra,
    'Negotiate only after a written offer, and ask for the full CTC breakup (fixed, variable, joining bonus, ESOPs)',
    'Benchmark against 2–3 offers or public pay data (Glassdoor, AmbitionBox, Levels.fyi) before naming a number',
  ];
}

/**
 * Salary guides for the roles that previously had role content but no salary page.
 * Figures are indicative annual CTC ranges in INR for India (2026) compiled from public
 * pay-reporting platforms and hiring patterns — treat them as ranges, not guarantees.
 */
export const salaryDataMore: Record<string, SalaryData> = {
  'sales-executive': {
    byExperience: {
      fresher: '₹2.4L – ₹5L (0–2 years; fixed pay plus 20–40% variable)',
      midLevel: '₹5L – ₹10L (3–6 years; senior executive / team lead)',
      senior: '₹10L – ₹18L (7–12 years; area or regional sales manager)',
      leadership: '₹18L – ₹40L+ (13+ years; national sales head)',
    },
    byCompanyType: {
      startup: '₹3L – ₹9L (lower fixed pay, aggressive incentives)',
      midSize: '₹3.5L – ₹10L',
      mnc: '₹5L – ₹15L (FMCG, telecom, and pharma sales)',
      faang: '₹12L – ₹30L (enterprise SaaS sales at global tech firms; OTE incl. commission)',
    },
    byLocation: loc({
      bangalore: '₹3L – ₹16L (SaaS and B2B tech sales hub)',
      mumbai: '₹3L – ₹15L (BFSI, FMCG, and corporate sales)',
      delhi: '₹3L – ₹15L (NCR enterprise and real-estate sales)',
      hyderabad: '₹2.8L – ₹13L (pharma and IT sales)',
      chennai: '₹2.6L – ₹11L (auto, manufacturing, and IT sales)',
      pune: '₹2.8L – ₹12L (auto and industrial sales)',
      other: '₹2L – ₹8L (Tier-2 cities; field sales and distribution)',
    }),
    topPayingSkills: ['Enterprise B2B Sales', 'SaaS Sales', 'Key Account Management', 'CRM (Salesforce, HubSpot)', 'Negotiation', 'Channel Partnerships', 'Pipeline Forecasting'],
    salaryBoostFactors: [
      'Consistent quota attainment (100%+) shown with numbers on your CV',
      'Experience selling high-ticket B2B products rather than low-ticket B2C',
      'CRM proficiency and data-driven pipeline management',
      'Domain depth in a premium sector such as SaaS, BFSI, or pharma',
      'Experience handling large key accounts or channel partners',
    ],
    negotiationTips: tips([
      'Sales pay is fixed plus variable — negotiate the variable payout rules and quota, not just the headline CTC',
      'Ask what percentage of the team hit quota last year; unrealistic targets make the variable worthless',
    ]),
    faqs: [
      { q: 'What is the average sales executive salary in India?', a: 'A sales executive in India typically earns ₹2.4L–₹5L per year as a fresher and ₹5L–₹10L with 3–6 years of experience. Total pay depends heavily on the variable component, which is often 20–40% of CTC.' },
      { q: 'Which sector pays sales executives the most?', a: 'B2B SaaS, BFSI (insurance and wealth), and pharma generally pay the highest, with senior enterprise sales roles crossing ₹20L OTE. FMCG and retail field sales pay less but offer stable fixed pay.' },
    ],
  },
  'ios-developer': {
    byExperience: {
      fresher: '₹4L – ₹9L (0–2 years; product startups pay at the upper end)',
      midLevel: '₹12L – ₹28L (3–6 years)',
      senior: '₹28L – ₹55L (7–12 years; senior and staff iOS engineers)',
      leadership: '₹50L – ₹1.1Cr+ (13+ years; mobile architect, engineering manager)',
    },
    byCompanyType: {
      startup: '₹6L – ₹28L (plus ESOPs)',
      midSize: '₹8L – ₹30L',
      mnc: '₹10L – ₹35L (IT services pay ₹4L–₹16L at comparable experience)',
      faang: '₹25L – ₹90L+ (base plus RSUs and bonus)',
    },
    byLocation: loc({
      bangalore: '₹5L – ₹70L (largest iOS job market in India)',
      mumbai: '₹4.5L – ₹45L (fintech and media apps)',
      delhi: '₹4L – ₹40L (NCR product companies)',
      hyderabad: '₹4.5L – ₹50L (global capability centres)',
      chennai: '₹4L – ₹32L (fintech and services)',
      pune: '₹4L – ₹35L (product and captive centres)',
      other: '₹3L – ₹20L (Tier-2 cities; mostly service companies)',
    }),
    topPayingSkills: ['Swift', 'SwiftUI', 'Combine / async-await', 'iOS Architecture (MVVM, TCA)', 'Core Data', 'App Performance Profiling', 'CI/CD for Mobile', 'Objective-C (legacy)'],
    salaryBoostFactors: [
      'Published apps on the App Store with measurable users or ratings',
      'SwiftUI and modern concurrency experience (async/await, Combine)',
      'Experience shipping at scale (millions of users) at a consumer product company',
      'Cross-platform exposure (Kotlin Multiplatform, Flutter) alongside native depth',
      'Open-source libraries or technical talks',
    ],
    negotiationTips: tips([
      'Link your live App Store apps — they carry more weight than a skills list',
      'Negotiate RSU vesting and refresh grants separately from base pay at product companies',
    ]),
    faqs: [
      { q: 'What is the average iOS developer salary in India?', a: 'iOS developers in India typically earn ₹4L–₹9L as freshers and ₹12L–₹28L with 3–6 years of experience. Engineers at product companies and global capability centres earn substantially more than those at IT services firms.' },
      { q: 'Do iOS developers earn more than Android developers in India?', a: 'Pay is broadly comparable at the same level, but iOS roles are fewer, so strong iOS engineers with SwiftUI and shipped apps often see a modest premium at product companies.' },
    ],
  },
  'full-stack-developer': {
    byExperience: {
      fresher: '₹3.5L – ₹9L (0–2 years)',
      midLevel: '₹10L – ₹26L (3–6 years)',
      senior: '₹26L – ₹50L (7–12 years; senior and lead full-stack engineers)',
      leadership: '₹45L – ₹1Cr+ (13+ years; architect, engineering manager)',
    },
    byCompanyType: {
      startup: '₹5L – ₹28L (plus ESOPs)',
      midSize: '₹7L – ₹28L',
      mnc: '₹8L – ₹35L (IT services pay ₹3.5L–₹15L)',
      faang: '₹22L – ₹80L+ (base plus RSUs and bonus)',
    },
    byLocation: loc({
      bangalore: '₹4.5L – ₹65L (highest demand and pay)',
      mumbai: '₹4L – ₹42L (fintech and BFSI tech)',
      delhi: '₹4L – ₹38L (NCR product and services)',
      hyderabad: '₹4L – ₹48L (global capability centres)',
      chennai: '₹3.5L – ₹30L (SaaS and IT services)',
      pune: '₹3.8L – ₹33L (product and captive centres)',
      other: '₹2.5L – ₹18L (Tier-2 cities)',
    }),
    topPayingSkills: ['React / Next.js', 'Node.js / TypeScript', 'System Design', 'AWS / Cloud', 'PostgreSQL & Redis', 'Docker & CI/CD', 'GraphQL', 'Testing & Observability'],
    salaryBoostFactors: [
      'Ownership of features end to end, from database design to deployment',
      'TypeScript across front end and back end',
      'Cloud and DevOps skills that reduce dependence on specialist teams',
      'Shipped products with real users, linked from the CV',
      'System design depth for senior and lead roles',
    ],
    negotiationTips: tips([
      'Full-stack roles are often levelled against backend bands — ask which band you are being slotted into',
      'Highlight scope you owned (services, traffic, revenue impact) to justify a higher level',
    ]),
    faqs: [
      { q: 'What is the average full stack developer salary in India?', a: 'Full stack developers in India earn about ₹3.5L–₹9L as freshers and ₹10L–₹26L at 3–6 years. Product companies and startups pay well above IT services firms for the same experience.' },
      { q: 'Is full stack development a good career in India in 2026?', a: 'Yes. Demand remains strong because small and mid-size teams prefer engineers who can own a feature end to end. Pay grows fastest for those who add system design and cloud skills.' },
    ],
  },
  'machine-learning-engineer': {
    byExperience: {
      fresher: '₹6L – ₹16L (0–2 years; strong campus and research profiles higher)',
      midLevel: '₹16L – ₹38L (3–6 years)',
      senior: '₹38L – ₹80L (7–12 years; senior and staff ML engineers)',
      leadership: '₹70L – ₹1.5Cr+ (13+ years; ML lead, head of AI)',
    },
    byCompanyType: {
      startup: '₹8L – ₹40L (plus ESOPs)',
      midSize: '₹10L – ₹40L',
      mnc: '₹14L – ₹55L (IT services AI practices pay lower than product firms)',
      faang: '₹35L – ₹1.5Cr+ (base plus RSUs and bonus)',
    },
    byLocation: loc({
      bangalore: '₹7L – ₹1.2Cr (largest ML hiring market)',
      mumbai: '₹6L – ₹70L (BFSI and fintech ML)',
      delhi: '₹6L – ₹65L (NCR product and consulting)',
      hyderabad: '₹6.5L – ₹90L (big-tech research and engineering centres)',
      chennai: '₹5.5L – ₹50L (analytics and services)',
      pune: '₹5.5L – ₹55L (product, auto, and captive centres)',
      other: '₹4L – ₹25L (limited Tier-2 ML demand)',
    }),
    topPayingSkills: ['LLMs & Generative AI', 'PyTorch', 'MLOps & Model Deployment', 'Distributed Training', 'Recommendation Systems', 'Computer Vision', 'NLP', 'Feature Stores & Data Pipelines'],
    salaryBoostFactors: [
      'Models shipped to production with measurable business impact',
      'LLM fine-tuning, RAG, and evaluation experience',
      'MLOps skills (deployment, monitoring, retraining pipelines)',
      'Publications or strong competition rankings (Kaggle, NeurIPS workshops)',
      'Postgraduate degree from a research-oriented programme',
    ],
    negotiationTips: tips([
      'Quantify model impact (revenue lift, cost saved, latency reduced) — ML offers are negotiated on demonstrated production impact',
      'Ask about GPU and compute budget and data access; they affect how much impact you can deliver in the role',
    ]),
    faqs: [
      { q: 'What is the average machine learning engineer salary in India?', a: 'Machine learning engineers in India typically earn ₹6L–₹16L as freshers and ₹16L–₹38L with 3–6 years of experience. Senior engineers at product companies and big-tech research centres can exceed ₹80L in total compensation.' },
      { q: 'Does an ML engineer earn more than a data scientist in India?', a: 'Usually somewhat more at the same level, because ML engineers also own deployment and production reliability. Roles that combine modelling and engineering pay the best.' },
    ],
  },
  'chartered-accountant': {
    byExperience: {
      fresher: '₹7L – ₹13L (newly qualified CA; Big 4 and top firms at the upper end)',
      midLevel: '₹13L – ₹25L (3–6 years post-qualification)',
      senior: '₹25L – ₹50L (7–12 years; senior manager, finance controller)',
      leadership: '₹50L – ₹1.5Cr+ (13+ years; CFO, finance director, partner)',
    },
    byCompanyType: {
      startup: '₹8L – ₹30L (finance lead roles with ESOPs)',
      midSize: '₹8L – ₹28L',
      mnc: '₹10L – ₹45L (Big 4 pay ₹8L–₹14L at entry; corporates vary)',
      faang: '₹18L – ₹60L (finance roles at global tech firms)',
    },
    byLocation: loc({
      bangalore: '₹7L – ₹60L (tech finance and GCC demand)',
      mumbai: '₹7.5L – ₹80L (highest-paying market; BFSI and corporate HQs)',
      delhi: '₹7L – ₹60L (NCR corporates and consulting)',
      hyderabad: '₹6.5L – ₹50L (pharma and GCC finance)',
      chennai: '₹6.5L – ₹45L (manufacturing and auto finance)',
      pune: '₹6.5L – ₹45L (auto and industrial finance)',
      other: '₹5L – ₹25L (Tier-2 cities; practice and mid-size firms)',
    }),
    topPayingSkills: ['Statutory Audit & Assurance', 'Direct & Indirect Tax (GST)', 'IFRS / Ind AS', 'FP&A and Financial Modelling', 'Transfer Pricing', 'M&A and Valuation', 'ERP (SAP, Oracle)', 'Treasury & Risk'],
    salaryBoostFactors: [
      'Big 4 or top-tier firm experience',
      'Specialisation in high-demand areas (IFRS, transfer pricing, M&A, international tax)',
      'Additional qualifications such as CFA, CPA, or ACCA',
      'Finance transformation and ERP implementation exposure',
      'Moving from practice into industry roles at larger corporates',
    ],
    negotiationTips: tips([
      'Compare practice versus industry offers on total CTC and working hours, not headline salary alone',
      'Newly qualified CAs get most of their leverage from rank, articleship firm, and campus placement round — use them',
    ]),
    faqs: [
      { q: 'What is the average chartered accountant salary in India?', a: 'A newly qualified CA in India typically earns ₹7L–₹13L, rising to ₹13L–₹25L with 3–6 years of experience. Senior finance leaders and CFOs can earn ₹50L to over ₹1.5Cr.' },
      { q: 'Do Big 4 firms pay more than corporates for CAs?', a: 'Big 4 firms offer strong brand value and structured growth but often pay less than top corporates and GCCs at the 5–8 year mark. Many CAs move from Big 4 to industry for higher pay and better hours.' },
    ],
  },
  'sap-consultant': {
    byExperience: {
      fresher: '₹4L – ₹8L (0–2 years; trainee consultant)',
      midLevel: '₹10L – ₹24L (3–6 years)',
      senior: '₹24L – ₹45L (7–12 years; senior consultant, solution architect)',
      leadership: '₹45L – ₹90L+ (13+ years; practice head, delivery director)',
    },
    byCompanyType: {
      startup: '₹6L – ₹22L (niche SAP partners)',
      midSize: '₹7L – ₹28L',
      mnc: '₹9L – ₹45L (Accenture, Deloitte, IBM, Capgemini, TCS, Infosys)',
      faang: '₹20L – ₹60L (SAP SE and large end-client in-house teams)',
    },
    byLocation: loc({
      bangalore: '₹5L – ₹55L (SAP Labs and consulting hub)',
      mumbai: '₹4.5L – ₹45L (BFSI and manufacturing clients)',
      delhi: '₹4.5L – ₹42L (NCR consulting and enterprise)',
      hyderabad: '₹4.5L – ₹45L (consulting delivery centres)',
      chennai: '₹4L – ₹38L (auto and manufacturing)',
      pune: '₹4.5L – ₹42L (manufacturing and automotive clients)',
      other: '₹3L – ₹18L (Tier-2 cities)',
    }),
    topPayingSkills: ['SAP S/4HANA', 'SAP FICO', 'SAP BTP', 'SAP MM / SD / PP', 'SAP ABAP on HANA', 'SAP SuccessFactors', 'SAP Fiori', 'Greenfield / Brownfield Migration'],
    salaryBoostFactors: [
      'S/4HANA implementation or migration experience (full lifecycle)',
      'Official SAP certifications in your module',
      'Functional plus technical depth (for example FICO with ABAP awareness)',
      'Client-facing experience and onsite assignments',
      'Rare modules and domains such as SAP BTP, IBP, or industry solutions',
    ],
    negotiationTips: tips([
      'Contract and freelance SAP rates are often 30–60% above permanent pay — compare both paths',
      'Ask whether onsite assignments, certifications, and bench policy are covered in the offer',
    ]),
    faqs: [
      { q: 'What is the average SAP consultant salary in India?', a: 'SAP consultants in India typically earn ₹4L–₹8L as freshers and ₹10L–₹24L at 3–6 years. S/4HANA specialists and solution architects at consulting firms can earn ₹45L or more.' },
      { q: 'Which SAP module pays the most?', a: 'Pay depends on demand, but S/4HANA, SAP FICO, and SAP BTP are consistently among the best-paid skills, especially with full-cycle implementation experience.' },
    ],
  },
  'react-developer': {
    byExperience: {
      fresher: '₹3.5L – ₹8L (0–2 years)',
      midLevel: '₹9L – ₹24L (3–6 years)',
      senior: '₹24L – ₹45L (7–12 years; senior and lead front-end engineers)',
      leadership: '₹40L – ₹85L+ (13+ years; front-end architect, engineering manager)',
    },
    byCompanyType: {
      startup: '₹5L – ₹26L (plus ESOPs)',
      midSize: '₹6L – ₹26L',
      mnc: '₹8L – ₹32L (IT services pay ₹3.5L–₹14L)',
      faang: '₹20L – ₹75L+ (base plus RSUs and bonus)',
    },
    byLocation: loc({
      bangalore: '₹4.5L – ₹60L (largest React job market)',
      mumbai: '₹4L – ₹38L (fintech and media)',
      delhi: '₹4L – ₹36L (NCR product and services)',
      hyderabad: '₹4L – ₹42L (global capability centres)',
      chennai: '₹3.5L – ₹28L (SaaS and services)',
      pune: '₹3.8L – ₹30L (product and captive centres)',
      other: '₹2.5L – ₹16L (Tier-2 cities)',
    }),
    topPayingSkills: ['React & Next.js', 'TypeScript', 'State Management (Redux, Zustand)', 'Web Performance & Core Web Vitals', 'Testing (Jest, Playwright)', 'Design Systems', 'Micro-frontends', 'Accessibility'],
    salaryBoostFactors: [
      'TypeScript and Next.js (server-rendering) proficiency',
      'Measurable performance work (Core Web Vitals, bundle-size reductions)',
      'Design-system ownership and component library experience',
      'Full-stack capability alongside front-end depth',
      'Product-company experience with large user bases',
    ],
    negotiationTips: tips([
      'Present measurable outcomes — load-time gains, conversion lifts, accessibility scores — to justify a higher band',
      'Ask whether the role is levelled as front-end or full-stack; full-stack bands often pay more',
    ]),
    faqs: [
      { q: 'What is the average React developer salary in India?', a: 'React developers in India typically earn ₹3.5L–₹8L as freshers and ₹9L–₹24L with 3–6 years of experience. Product companies pay significantly more than IT services firms.' },
      { q: 'Does knowing Next.js and TypeScript increase a React developer’s salary?', a: 'Yes. Most well-paid React postings now expect TypeScript, and Next.js (server rendering) experience is commonly listed for mid and senior roles.' },
    ],
  },
  'investment-banker': {
    byExperience: {
      fresher: '₹12L – ₹30L (analyst; top MBA and IB campus hires higher)',
      midLevel: '₹30L – ₹65L (associate, 3–6 years)',
      senior: '₹65L – ₹1.5Cr (vice president, 7–12 years)',
      leadership: '₹1.5Cr – ₹5Cr+ (director, MD; large variable component)',
    },
    byCompanyType: {
      startup: '₹8L – ₹30L (boutique and fintech advisory)',
      midSize: '₹12L – ₹50L (domestic boutique banks)',
      mnc: '₹20L – ₹1.5Cr (global bulge-bracket and elite boutiques)',
      faang: '₹25L – ₹80L (corporate development at large tech firms)',
    },
    byLocation: loc({
      bangalore: '₹10L – ₹60L (limited IB; tech M&A and corporate development)',
      mumbai: '₹12L – ₹2Cr+ (India’s investment banking centre)',
      delhi: '₹10L – ₹1.2Cr (NCR advisory and PE)',
      hyderabad: '₹8L – ₹40L (back-office and GCC roles)',
      chennai: '₹7L – ₹35L (limited front-office roles)',
      pune: '₹7L – ₹35L (support and analytics roles)',
      other: '₹5L – ₹20L (very limited market)',
    }),
    topPayingSkills: ['Financial Modelling', 'M&A and Valuation (DCF, comps)', 'Capital Markets (ECM / DCM)', 'Deal Execution', 'Pitchbook Preparation', 'Due Diligence', 'Private Equity Structuring', 'Client Relationship Management'],
    salaryBoostFactors: [
      'Closed deal experience with named transaction sizes',
      'Bulge-bracket or elite-boutique brand on the CV',
      'Top-tier MBA, CFA, or CA credentials',
      'Sector specialisation (technology, financial institutions, infrastructure)',
      'Cross-border deal exposure',
    ],
    negotiationTips: tips([
      'Banking pay is base plus a large discretionary bonus — ask about the bonus range and payout timing, not only base',
      'Negotiate guarantees, joining bonus, and buyout of unvested deferred compensation when switching banks',
    ]),
    faqs: [
      { q: 'What is the average investment banker salary in India?', a: 'Investment banking analysts in India typically earn ₹12L–₹30L, associates ₹30L–₹65L, and vice presidents ₹65L–₹1.5Cr, with bonuses forming a major part of total pay at senior levels.' },
      { q: 'Which qualifications help most for investment banking jobs in India?', a: 'A top-tier MBA, CA, or CFA combined with strong financial modelling skills and internship experience at a bank or advisory firm opens the best doors.' },
    ],
  },
  'scrum-master': {
    byExperience: {
      fresher: '₹4L – ₹8L (0–2 years; associate / junior Scrum Master)',
      midLevel: '₹10L – ₹22L (3–6 years)',
      senior: '₹22L – ₹40L (7–12 years; senior Scrum Master, agile coach)',
      leadership: '₹40L – ₹80L+ (13+ years; enterprise agile coach, head of delivery)',
    },
    byCompanyType: {
      startup: '₹6L – ₹24L',
      midSize: '₹7L – ₹26L',
      mnc: '₹10L – ₹40L (IT services, GCCs, and consulting)',
      faang: '₹20L – ₹55L (program and agile roles at large tech firms)',
    },
    byLocation: loc({
      bangalore: '₹5L – ₹50L (largest agile job market)',
      mumbai: '₹4.5L – ₹40L (BFSI delivery)',
      delhi: '₹4.5L – ₹38L (NCR services and GCCs)',
      hyderabad: '₹4.5L – ₹42L (global capability centres)',
      chennai: '₹4L – ₹34L (IT services)',
      pune: '₹4.5L – ₹36L (product and captive centres)',
      other: '₹3L – ₹16L (Tier-2 cities)',
    }),
    topPayingSkills: ['SAFe / Large-Scale Agile', 'Agile Coaching', 'Jira & Confluence', 'Stakeholder Management', 'Release Planning', 'Facilitation', 'Metrics (velocity, cycle time)', 'DevOps Collaboration'],
    salaryBoostFactors: [
      'Certifications such as PSM II, CSM, SAFe SPC, or ICP-ACC',
      'Experience scaling agile across multiple teams',
      'Measurable delivery improvements (cycle time, predictability)',
      'Coaching experience beyond team-level facilitation',
      'Domain knowledge in BFSI, healthcare, or product engineering',
    ],
    negotiationTips: tips([
      'Frame your value in delivery outcomes — faster releases, fewer escaped defects — not ceremonies run',
      'Ask whether the role is Scrum Master, delivery manager, or agile coach; the pay bands differ significantly',
    ]),
    faqs: [
      { q: 'What is the average Scrum Master salary in India?', a: 'Scrum Masters in India typically earn ₹4L–₹8L at entry level and ₹10L–₹22L with 3–6 years of experience. Agile coaches and delivery heads at large firms can earn ₹40L or more.' },
      { q: 'Is a Scrum certification required to get a higher salary?', a: 'It is not mandatory, but PSM, CSM, or SAFe certification is requested in most job descriptions and improves shortlisting and offer levels.' },
    ],
  },
  'business-development-manager': {
    byExperience: {
      fresher: '₹3L – ₹6L (0–2 years; business development executive)',
      midLevel: '₹7L – ₹16L (3–6 years)',
      senior: '₹16L – ₹32L (7–12 years; senior manager, associate director)',
      leadership: '₹32L – ₹75L+ (13+ years; VP / head of business development)',
    },
    byCompanyType: {
      startup: '₹4L – ₹22L (plus ESOPs and incentives)',
      midSize: '₹5L – ₹22L',
      mnc: '₹8L – ₹35L',
      faang: '₹18L – ₹55L (partnerships and enterprise roles)',
    },
    byLocation: loc({
      bangalore: '₹3.5L – ₹45L (SaaS and startup hub)',
      mumbai: '₹3.5L – ₹42L (BFSI, media, and consulting)',
      delhi: '₹3.5L – ₹40L (NCR enterprise and edtech)',
      hyderabad: '₹3L – ₹34L (IT services and pharma)',
      chennai: '₹3L – ₹28L (IT services and manufacturing)',
      pune: '₹3L – ₹30L (IT and industrial)',
      other: '₹2.5L – ₹14L (Tier-2 cities)',
    }),
    topPayingSkills: ['Enterprise Sales & Partnerships', 'Lead Generation & Outbound', 'Proposal & RFP Writing', 'Negotiation & Deal Closing', 'CRM (Salesforce, HubSpot)', 'Market Research', 'Account Expansion', 'P&L Ownership'],
    salaryBoostFactors: [
      'Revenue closed or pipeline built, quantified on the CV',
      'Experience in high-ticket B2B or enterprise sales',
      'Strategic partnership and channel development track record',
      'MBA from a recognised business school',
      'Domain expertise in SaaS, BFSI, or healthcare',
    ],
    negotiationTips: tips([
      'Clarify the split between fixed pay and incentive, and how targets are set and revised',
      'Use closed-revenue numbers from previous roles as the anchor for your ask',
    ]),
    faqs: [
      { q: 'What is the average business development manager salary in India?', a: 'Business development managers in India typically earn ₹7L–₹16L at 3–6 years of experience. Entry-level BD executives earn ₹3L–₹6L, and senior leaders can earn ₹32L or more including incentives.' },
      { q: 'What is the difference between sales and business development pay?', a: 'Business development roles lean on partnerships and long sales cycles and often carry higher fixed pay, while pure sales roles tilt toward variable pay tied to quota attainment.' },
    ],
  },
  'network-engineer': {
    byExperience: {
      fresher: '₹2.5L – ₹5.5L (0–2 years; NOC and support engineer)',
      midLevel: '₹6L – ₹15L (3–6 years)',
      senior: '₹15L – ₹30L (7–12 years; senior engineer, network architect)',
      leadership: '₹28L – ₹60L+ (13+ years; infrastructure head, principal architect)',
    },
    byCompanyType: {
      startup: '₹4L – ₹16L',
      midSize: '₹4L – ₹18L',
      mnc: '₹6L – ₹32L (Cisco, Juniper, Palo Alto partners, service providers)',
      faang: '₹18L – ₹60L (cloud and data-centre networking at hyperscalers)',
    },
    byLocation: loc({
      bangalore: '₹3L – ₹40L (vendor R&D and GCC hub)',
      mumbai: '₹3L – ₹32L (telecom and BFSI infrastructure)',
      delhi: '₹3L – ₹30L (NCR telecom and enterprise)',
      hyderabad: '₹3L – ₹32L (cloud and global capability centres)',
      chennai: '₹2.8L – ₹26L (managed services and manufacturing)',
      pune: '₹3L – ₹26L (IT infrastructure and services)',
      other: '₹2.2L – ₹12L (Tier-2 cities)',
    }),
    topPayingSkills: ['Cisco CCNP / CCIE', 'SD-WAN', 'Network Security & Firewalls (Palo Alto, Fortinet)', 'Cloud Networking (AWS VPC, Azure)', 'BGP / OSPF Routing', 'Network Automation (Python, Ansible)', 'Zero Trust', 'Wireless Design'],
    salaryBoostFactors: [
      'Cisco CCNP or CCIE certification',
      'Network automation skills (Python, Ansible, Terraform)',
      'Cloud networking and hybrid connectivity experience',
      'Security specialisation (firewalls, zero trust)',
      'Experience running large data-centre or service-provider networks',
    ],
    negotiationTips: tips([
      'Highlight uptime, incident reduction, and migration projects you led — they translate directly to business value',
      'Ask about on-call allowances and shift premiums; they are often negotiable separately from CTC',
    ]),
    faqs: [
      { q: 'What is the average network engineer salary in India?', a: 'Network engineers in India typically earn ₹2.5L–₹5.5L as freshers and ₹6L–₹15L at 3–6 years of experience. CCIE-certified architects and cloud network specialists earn significantly more.' },
      { q: 'Which certification increases a network engineer’s salary the most?', a: 'CCNP and CCIE are the strongest signals, followed by cloud networking and security certifications. Automation skills add further to pay.' },
    ],
  },
  'logistics-manager': {
    byExperience: {
      fresher: '₹2.8L – ₹5.5L (0–2 years; logistics executive / management trainee)',
      midLevel: '₹6L – ₹14L (3–6 years)',
      senior: '₹14L – ₹28L (7–12 years; senior manager, regional head)',
      leadership: '₹28L – ₹65L+ (13+ years; supply chain head, VP operations)',
    },
    byCompanyType: {
      startup: '₹4L – ₹20L (e-commerce and quick-commerce logistics)',
      midSize: '₹4.5L – ₹18L',
      mnc: '₹7L – ₹35L (DHL, Maersk, Amazon, and global 3PLs)',
      faang: '₹14L – ₹45L (e-commerce supply chain at large platforms)',
    },
    byLocation: loc({
      bangalore: '₹3.5L – ₹35L (e-commerce and quick-commerce hub)',
      mumbai: '₹3.5L – ₹38L (ports, shipping, and 3PL headquarters)',
      delhi: '₹3.5L – ₹32L (NCR warehousing corridor)',
      hyderabad: '₹3L – ₹28L (pharma cold chain and e-commerce)',
      chennai: '₹3L – ₹28L (port, auto, and manufacturing logistics)',
      pune: '₹3L – ₹28L (auto and industrial supply chain)',
      other: '₹2.5L – ₹14L (Tier-2 cities and hubs)',
    }),
    topPayingSkills: ['Supply Chain Planning', 'Warehouse & Inventory Management', 'Transportation Management Systems', 'Cost Optimisation', 'Vendor / 3PL Negotiation', 'Demand Forecasting', 'Import-Export & Customs Compliance', 'ERP (SAP, Oracle)'],
    salaryBoostFactors: [
      'Quantified cost savings and delivery-time improvements',
      'Experience managing large multi-site networks or fleets',
      'Specialised domains such as cold chain, pharma, or quick-commerce',
      'Certifications such as CSCP, Six Sigma, or CILT',
      'Technology fluency in TMS, WMS, and analytics tools',
    ],
    negotiationTips: tips([
      'Anchor your ask on savings delivered — per-shipment cost, fill rate, on-time delivery percentage',
      'Clarify span of control (sites, headcount, fleet) because it determines the grade and pay band',
    ]),
    faqs: [
      { q: 'What is the average logistics manager salary in India?', a: 'Logistics managers in India typically earn ₹6L–₹14L at 3–6 years and ₹14L–₹28L at 7–12 years. Supply chain heads at large firms can earn ₹40L or more.' },
      { q: 'Which logistics sector pays the best in India?', a: 'E-commerce, quick-commerce, pharma cold chain, and global 3PLs generally pay more than traditional transport and trading businesses.' },
    ],
  },
  'interior-designer': {
    byExperience: {
      fresher: '₹2.4L – ₹4.5L (0–2 years; junior designer)',
      midLevel: '₹5L – ₹12L (3–6 years)',
      senior: '₹12L – ₹25L (7–12 years; senior designer, design lead)',
      leadership: '₹25L – ₹60L+ (13+ years; design head, studio principal)',
    },
    byCompanyType: {
      startup: '₹3L – ₹12L (design-and-build startups)',
      midSize: '₹3.5L – ₹14L',
      mnc: '₹5L – ₹28L (large architecture and design firms)',
      faang: '₹10L – ₹35L (workplace design at large corporates)',
    },
    byLocation: loc({
      bangalore: '₹3L – ₹28L (home-interior startups and corporate fit-outs)',
      mumbai: '₹3.5L – ₹40L (luxury residential and hospitality)',
      delhi: '₹3.5L – ₹35L (high-end residential and commercial)',
      hyderabad: '₹3L – ₹24L (growing real-estate market)',
      chennai: '₹2.8L – ₹20L (residential and commercial)',
      pune: '₹3L – ₹22L (residential and workplace design)',
      other: '₹2.2L – ₹12L (Tier-2 cities)',
    }),
    topPayingSkills: ['AutoCAD', 'SketchUp', '3ds Max / V-Ray', 'Revit', 'Space Planning', 'Project & Site Management', 'Client Presentation', 'Materials & Budgeting'],
    salaryBoostFactors: [
      'A strong portfolio showing completed, photographed projects',
      'Luxury residential, hospitality, or large commercial experience',
      '3D visualisation and rendering skills',
      'Site execution and project management ability',
      'Building a personal client base or leading a studio',
    ],
    negotiationTips: tips([
      'Your portfolio is your negotiating leverage — lead with completed projects and budgets handled',
      'For freelance or studio work, negotiate a per-project fee structure alongside any fixed salary',
    ]),
    faqs: [
      { q: 'What is the average interior designer salary in India?', a: 'Interior designers in India typically earn ₹2.4L–₹4.5L as freshers and ₹5L–₹12L with 3–6 years of experience. Senior designers and studio heads in Mumbai and Delhi can earn ₹25L or more.' },
      { q: 'What should an interior designer put on a CV?', a: 'A portfolio link with completed projects, software skills (AutoCAD, SketchUp, 3ds Max), project values handled, and any site-management experience matter most.' },
    ],
  },
  'pharmacist': {
    byExperience: {
      fresher: '₹2.4L – ₹4.5L (0–2 years; retail and hospital pharmacist)',
      midLevel: '₹4.5L – ₹9L (3–6 years)',
      senior: '₹9L – ₹18L (7–12 years; senior pharmacist, regulatory or QA manager)',
      leadership: '₹18L – ₹45L+ (13+ years; head of pharmacy, regulatory affairs head)',
    },
    byCompanyType: {
      startup: '₹3L – ₹10L (online pharmacy and health-tech)',
      midSize: '₹3L – ₹10L',
      mnc: '₹5L – ₹25L (pharma MNCs, clinical research, and regulatory roles)',
      faang: '₹8L – ₹30L (health-tech and large pharmacy chains)',
    },
    byLocation: loc({
      bangalore: '₹3L – ₹22L (health-tech and clinical research)',
      mumbai: '₹3L – ₹24L (pharma headquarters and hospitals)',
      delhi: '₹3L – ₹20L (hospital chains and pharma distribution)',
      hyderabad: '₹3L – ₹26L (India’s pharma manufacturing and R&D hub)',
      chennai: '₹2.8L – ₹20L (hospitals and clinical research)',
      pune: '₹2.8L – ₹20L (pharma manufacturing and research)',
      other: '₹2.2L – ₹9L (Tier-2 cities; retail and hospital pharmacy)',
    }),
    topPayingSkills: ['Regulatory Affairs', 'Pharmacovigilance', 'Clinical Research (CRA/CRC)', 'Quality Assurance (GMP/GLP)', 'Clinical Pharmacy', 'Drug Safety Reporting', 'Medical Writing', 'Pharmaceutical Marketing'],
    salaryBoostFactors: [
      'Moving from retail dispensing into regulatory, QA, or pharmacovigilance roles',
      'M.Pharm or Pharm.D qualifications',
      'Experience with USFDA or EU-audited facilities',
      'Clinical research certifications (ICH-GCP)',
      'Hospital pharmacy leadership or multi-store management',
    ],
    negotiationTips: tips([
      'Industry roles (regulatory, QA, pharmacovigilance) pay noticeably more than retail — compare career paths, not just offers',
      'Ask about shift allowances and licence-related benefits that retail and hospital roles often carry',
    ]),
    faqs: [
      { q: 'What is the average pharmacist salary in India?', a: 'Pharmacists in India typically earn ₹2.4L–₹4.5L as freshers and ₹4.5L–₹9L with 3–6 years of experience. Regulatory, QA, and pharmacovigilance specialists in pharma companies earn considerably more.' },
      { q: 'Which pharmacy career path pays the most?', a: 'Regulatory affairs, pharmacovigilance, clinical research, and QA roles in pharma and CROs generally pay more than retail or hospital dispensing.' },
    ],
  },
  'embedded-systems-engineer': {
    byExperience: {
      fresher: '₹3.5L – ₹8L (0–2 years)',
      midLevel: '₹9L – ₹22L (3–6 years)',
      senior: '₹22L – ₹42L (7–12 years; senior and staff embedded engineers)',
      leadership: '₹40L – ₹85L+ (13+ years; architect, engineering manager)',
    },
    byCompanyType: {
      startup: '₹5L – ₹22L (IoT, EV, and hardware startups)',
      midSize: '₹5L – ₹24L',
      mnc: '₹8L – ₹40L (Bosch, Qualcomm, Texas Instruments, NXP, Continental)',
      faang: '₹20L – ₹70L (devices and silicon teams at big tech)',
    },
    byLocation: loc({
      bangalore: '₹4L – ₹55L (semiconductor and device R&D hub)',
      mumbai: '₹3.5L – ₹30L (industrial and electronics)',
      delhi: '₹3.5L – ₹32L (NCR electronics and telecom)',
      hyderabad: '₹3.8L – ₹42L (semiconductor and defence electronics)',
      chennai: '₹3.5L – ₹34L (automotive and electronics manufacturing)',
      pune: '₹3.8L – ₹36L (automotive embedded and industrial automation)',
      other: '₹2.8L – ₹16L (Tier-2 cities)',
    }),
    topPayingSkills: ['Embedded C / C++', 'RTOS (FreeRTOS, Zephyr)', 'Automotive (AUTOSAR, CAN)', 'ARM Cortex Firmware', 'Device Drivers / Linux Kernel', 'Embedded Linux & Yocto', 'Low-Power Design', 'Functional Safety (ISO 26262)'],
    salaryBoostFactors: [
      'Automotive embedded experience (AUTOSAR, ISO 26262)',
      'Linux kernel, device driver, and bootloader expertise',
      'Semiconductor company experience (Qualcomm, TI, NXP)',
      'Hardware-software co-design and debugging with lab tools',
      'Experience shipping a product from prototype to production',
    ],
    negotiationTips: tips([
      'Name the silicon, protocols, and RTOS you have shipped on — specificity is what separates senior from mid bands',
      'Automotive and semiconductor employers often pay differently for the same level; compare total CTC including variable',
    ]),
    faqs: [
      { q: 'What is the average embedded systems engineer salary in India?', a: 'Embedded systems engineers in India typically earn ₹3.5L–₹8L as freshers and ₹9L–₹22L with 3–6 years of experience. Engineers at semiconductor firms and automotive majors earn the most.' },
      { q: 'Which skills pay the most for embedded engineers in India?', a: 'Automotive stacks (AUTOSAR, ISO 26262), Linux kernel and driver development, and low-power ARM firmware are consistently among the best-paid skills.' },
    ],
  },
};

/** Kolkata and Ahmedabad pay ranges for the roles above (feeds the role × city pages). */
export const salaryDataMoreTier15: Record<string, { kolkata: string; ahmedabad: string }> = {
  'sales-executive': { kolkata: '₹2.4L – ₹10L (FMCG, banking, and retail sales)', ahmedabad: '₹2.4L – ₹10L (pharma, textiles, and industrial sales)' },
  'ios-developer': { kolkata: '₹3L – ₹18L (IT services and a few product teams)', ahmedabad: '₹3L – ₹18L (services and growing fintech teams)' },
  'full-stack-developer': { kolkata: '₹3L – ₹20L (IT services and SaaS)', ahmedabad: '₹3L – ₹20L (IT services, fintech, and GIFT City tech)' },
  'machine-learning-engineer': { kolkata: '₹4.5L – ₹28L (analytics and research roles)', ahmedabad: '₹4.5L – ₹28L (pharma, fintech, and manufacturing analytics)' },
  'chartered-accountant': { kolkata: '₹6L – ₹35L (strong practice, banking, and corporate base)', ahmedabad: '₹6L – ₹35L (trading, pharma, and GIFT City finance)' },
  'sap-consultant': { kolkata: '₹3.5L – ₹30L (manufacturing and services clients)', ahmedabad: '₹3.5L – ₹30L (pharma and chemicals clients)' },
  'react-developer': { kolkata: '₹3L – ₹18L (IT services and startups)', ahmedabad: '₹3L – ₹18L (services and D2C and fintech teams)' },
  'investment-banker': { kolkata: '₹6L – ₹30L (limited; wealth and corporate banking)', ahmedabad: '₹6L – ₹30L (limited; GIFT City and wealth advisory)' },
  'scrum-master': { kolkata: '₹3.5L – ₹24L (IT services delivery)', ahmedabad: '₹3.5L – ₹24L (IT services and product delivery)' },
  'business-development-manager': { kolkata: '₹3L – ₹22L (services, FMCG, and education)', ahmedabad: '₹3L – ₹22L (pharma, textiles, and industrial)' },
  'network-engineer': { kolkata: '₹2.5L – ₹20L (telecom and managed services)', ahmedabad: '₹2.5L – ₹20L (managed services and data centres)' },
  'logistics-manager': { kolkata: '₹3L – ₹24L (port and eastern-India trade logistics)', ahmedabad: '₹3L – ₹26L (western-corridor and port logistics)' },
  'interior-designer': { kolkata: '₹2.2L – ₹16L (residential and commercial)', ahmedabad: '₹2.4L – ₹18L (residential and commercial; strong design talent)' },
  'pharmacist': { kolkata: '₹2.2L – ₹14L (hospitals and distribution)', ahmedabad: '₹2.6L – ₹22L (pharma manufacturing and regulatory hub)' },
  'embedded-systems-engineer': { kolkata: '₹3L – ₹20L (electronics and industrial)', ahmedabad: '₹3L – ₹22L (industrial electronics and defence)' },
};
