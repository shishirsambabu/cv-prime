import type { SalaryData } from '@/lib/salaryData';

interface Spec {
  exp: [string, string, string, string];
  co: [string, string, string, string];
  loc: [string, string, string, string, string, string, string, string, string];
  skills: string[];
  boost: string[];
  tips: string[];
  faqs: Array<{ q: string; a: string }>;
}

function build(s: Spec): SalaryData {
  return {
    byExperience: { fresher: s.exp[0], midLevel: s.exp[1], senior: s.exp[2], leadership: s.exp[3] },
    byCompanyType: { startup: s.co[0], midSize: s.co[1], mnc: s.co[2], faang: s.co[3] },
    byLocation: {
      bangalore: s.loc[0],
      mumbai: s.loc[1],
      delhi: s.loc[2],
      hyderabad: s.loc[3],
      chennai: s.loc[4],
      pune: s.loc[5],
      other: s.loc[6],
      kolkata: s.loc[7],
      ahmedabad: s.loc[8],
    },
    topPayingSkills: s.skills,
    salaryBoostFactors: s.boost,
    negotiationTips: s.tips,
    faqs: s.faqs,
  };
}

// Indicative INR ranges (annual, fixed + typical variable) for roles added after the
// first 36 salary pages. Order of loc: bangalore, mumbai, delhi, hyderabad, chennai, pune, other, kolkata, ahmedabad.
export const salaryDataMore: Record<string, SalaryData> = {
  'sales-executive': build({
    exp: ['₹2.2L – ₹4.5L (0–2 years; fixed pay, incentives extra)', '₹5L – ₹10L (3–6 years; senior executive / area sales incl. incentives)', '₹10L – ₹18L (7–12 years; key account and territory leads)', '₹18L – ₹35L+ (13+ years; regional sales head, variable-heavy)'],
    co: ['₹2.5L – ₹8L (high variable share, fast promotions)', '₹3L – ₹10L (stable base with incentive slabs)', '₹4L – ₹14L (structured FMCG, BFSI and telecom sales bands)', '₹6L – ₹20L (large SaaS and enterprise sales teams, OTE-based)'],
    loc: ['₹3L – ₹16L (largest pool of SaaS and enterprise sales jobs)', '₹3L – ₹16L (BFSI, FMCG and real-estate sales hub)', '₹2.8L – ₹14L (FMCG, telecom and BFSI sales)', '₹3L – ₹14L (pharma, FMCG and SaaS sales)', '₹2.8L – ₹12L (FMCG, auto and consumer durables)', '₹3L – ₹13L (auto, FMCG and IT sales)', '₹2L – ₹9L (Tier-2 cities; field sales and distribution)', '₹2.2L – ₹10L (FMCG, banking and insurance sales)', '₹2.2L – ₹10L (pharma, textile and industrial sales)'],
    skills: ['Closing complex B2B deals', 'Key account management', 'CRM tools (Salesforce, HubSpot, LeadSquared)', 'SaaS / enterprise sales', 'Channel and distributor management', 'Consultative selling', 'Lead generation', 'Regional language fluency', 'Proven quota attainment', 'Negotiation'],
    boost: ['Quote quota attainment (e.g. 118% of target) — variable pay is where negotiation leverage lives', 'SaaS and enterprise sales pay well above the FMCG/field average at the same experience', 'Multilingual selling opens higher-paying regional roles', 'Documented new-logo wins and renewal retention justify a higher fixed component'],
    tips: ['Compare offers on fixed pay, not "CTC with incentives" — incentives are not guaranteed', 'Bring your last four quarters of target-versus-achievement numbers', 'Negotiate accelerators above 100% attainment', 'Ask about territory size and lead sourcing — pay means little without pipeline'],
    faqs: [
      { q: 'What is the average sales executive salary in India?', a: 'Entry-level sales executives in India typically earn ₹2.2L–₹4.5L in fixed pay, with incentives on top. With 3–6 years of experience and consistent quota attainment, total compensation commonly reaches ₹5L–₹10L, and SaaS or enterprise sales roles pay noticeably more. Figures vary by sector, city and incentive structure.' },
      { q: 'Is sales executive pay mostly fixed or variable?', a: 'It depends on the sector. FMCG and field sales lean on a stable base with modest incentives, while SaaS, insurance and real-estate sales often carry 30–50% variable pay. Always ask for the fixed component and the incentive payout history before accepting an offer.' },
    ],
  }),
  'ios-developer': build({
    exp: ['₹4L – ₹10L (0–2 years; Swift / SwiftUI fundamentals)', '₹14L – ₹30L (3–6 years; owns features end-to-end)', '₹30L – ₹55L (7–12 years; senior / staff iOS)', '₹55L – ₹1.1Cr+ (13+ years; mobile architect, engineering manager)'],
    co: ['₹6L – ₹25L (plus ESOPs; broad ownership)', '₹8L – ₹30L (stable product companies)', '₹12L – ₹40L (global tech centres and captives)', '₹25L – ₹80L+ (Apple, Google, Amazon; base + RSU)'],
    loc: ['₹5L – ₹65L (highest density of iOS roles)', '₹4.5L – ₹40L (fintech and consumer apps)', '₹4L – ₹35L (NCR product and MNC centres)', '₹4L – ₹45L (Apple, Microsoft and Amazon hub)', '₹3.5L – ₹28L (SaaS and BFSI mobile teams)', '₹4L – ₹30L (product firms and MNC centres)', '₹3L – ₹18L (Tier-2 cities and agencies)', '₹3.5L – ₹18L (IT services and startups)', '₹3.5L – ₹18L (SaaS and consumer apps)'],
    skills: ['SwiftUI', 'Swift Concurrency', 'Combine', 'Core Data / SwiftData', 'App Store release management', 'Performance profiling (Instruments)', 'Unit and UI testing (XCTest)', 'CI/CD (Fastlane)', 'Mobile security', 'Accessibility'],
    boost: ['Shipped apps with public App Store links and measurable install or rating numbers', 'SwiftUI plus UIKit depth — most large codebases need both', 'Performance wins (cold-start time, crash-free rate) quoted with numbers', 'Fintech or health-tech compliance experience'],
    tips: ['Lead with a shipped app and its metric, not a list of frameworks', 'Benchmark against product companies, not only IT services, before anchoring', 'Ask whether the role includes ownership of release and crash monitoring — it supports a senior band', 'Negotiate equity separately at startups'],
    faqs: [
      { q: 'What is the average iOS developer salary in India?', a: 'Freshers with solid Swift skills typically earn ₹4L–₹10L, mid-level iOS developers with 3–6 years earn ₹14L–₹30L, and senior engineers at product companies earn ₹30L–₹55L. Global tech companies pay more through RSUs. Figures are indicative and vary by company and city.' },
      { q: 'Does iOS pay more than Android in India?', a: 'At similar experience the bands overlap, but iOS roles are fewer and often concentrated at product companies and global captives, which tends to pull senior iOS pay slightly higher. Skills, shipped apps and company tier matter more than platform alone.' },
    ],
  }),
  'full-stack-developer': build({
    exp: ['₹3.5L – ₹9L (0–2 years; MERN / Java-React stacks)', '₹12L – ₹28L (3–6 years; owns features across the stack)', '₹28L – ₹50L (7–12 years; tech lead / staff)', '₹50L – ₹1Cr+ (13+ years; architect, engineering manager)'],
    co: ['₹5L – ₹24L (plus ESOPs; broad scope)', '₹7L – ₹30L (product companies and scale-ups)', '₹10L – ₹36L (IT services pay ₹3L–₹14L at lower bands)', '₹20L – ₹80L+ (big-tech engineering; base + RSU)'],
    loc: ['₹4.5L – ₹60L (largest full-stack job market)', '₹4L – ₹40L (fintech and consumer tech)', '₹4L – ₹35L (NCR product and MNC centres)', '₹4L – ₹45L (big-tech and SaaS hub)', '₹3.5L – ₹28L (IT services and product firms)', '₹4L – ₹32L (IT services and product firms)', '₹2.5L – ₹16L (Tier-2 cities and agencies)', '₹3.5L – ₹20L (IT services and startups)', '₹3.5L – ₹20L (IT services and SaaS)'],
    skills: ['React / Next.js', 'Node.js / TypeScript', 'System design', 'PostgreSQL and data modelling', 'AWS / cloud deployment', 'REST and GraphQL APIs', 'CI/CD and Docker', 'Testing strategy', 'Performance optimisation', 'Authentication and security'],
    boost: ['End-to-end shipped products with usage numbers', 'Depth in one side of the stack plus working breadth in the other', 'Cloud and deployment ownership (not just feature coding)', 'System-design ability at senior levels'],
    tips: ['Position as a product engineer who ships features end to end, with outcome metrics', 'Benchmark against both frontend and backend bands — full-stack scope often justifies the higher one', 'Quote scale numbers (users, requests, latency) in negotiation', 'Compare total compensation including equity, not base alone'],
    faqs: [
      { q: 'What is the average full stack developer salary in India?', a: 'Entry-level full-stack developers typically earn ₹3.5L–₹9L, mid-level developers with 3–6 years earn ₹12L–₹28L, and senior or lead engineers earn ₹28L–₹50L. Product companies and global tech centres pay materially above IT-services averages. Ranges are indicative.' },
      { q: 'Do full stack developers earn more than frontend or backend developers?', a: 'Often slightly more at startups and scale-ups, where one engineer covers wide scope, but specialist backend or frontend engineers at large product companies can match or beat it. Demonstrated ownership and scale matter more than the title.' },
    ],
  }),
  'machine-learning-engineer': build({
    exp: ['₹6L – ₹16L (0–2 years; strong ML project portfolio)', '₹18L – ₹40L (3–6 years; production ML systems)', '₹40L – ₹75L (7–12 years; senior / staff ML)', '₹75L – ₹1.5Cr+ (13+ years; ML lead, principal, head of ML)'],
    co: ['₹8L – ₹35L (plus ESOPs; broad ownership)', '₹10L – ₹40L (product and analytics firms)', '₹14L – ₹50L (global captives and consulting AI practices)', '₹30L – ₹1.2Cr+ (big-tech ML teams; base + RSU)'],
    loc: ['₹6L – ₹90L (densest ML hiring market)', '₹5L – ₹50L (fintech and BFSI ML)', '₹5L – ₹45L (NCR product and MNC AI teams)', '₹5L – ₹60L (big-tech AI hub)', '₹4L – ₹35L (analytics and BFSI)', '₹5L – ₹40L (MNC and analytics centres)', '₹3L – ₹20L (Tier-2 cities; fewer pure ML roles)', '₹4L – ₹30L (analytics and BFSI)', '₹4L – ₹30L (pharma, fintech and industrial analytics)'],
    skills: ['PyTorch / TensorFlow', 'MLOps (MLflow, Kubeflow)', 'LLM fine-tuning and evaluation', 'Feature engineering at scale', 'Model deployment and serving', 'Distributed training', 'Experiment tracking', 'Recommendation systems', 'Computer vision / NLP', 'Cloud ML (SageMaker, Vertex AI)'],
    boost: ['Models deployed to production with measured business impact', 'MLOps and serving experience, not only notebooks', 'Strong math / statistics fundamentals plus engineering rigour', 'Published papers or competitive results (Kaggle) for research-leaning roles'],
    tips: ['Lead with business impact (revenue lifted, cost saved, latency cut) rather than model accuracy alone', 'Separate ML engineer from data scientist expectations — ML engineers are paid for production systems', 'Benchmark against AI engineer bands, which are currently supply-constrained', 'Clarify whether the role is applied research or product ML'],
    faqs: [
      { q: 'What is the average machine learning engineer salary in India?', a: 'Entry-level ML engineers typically earn ₹6L–₹16L, mid-level engineers with 3–6 years of production experience earn ₹18L–₹40L, and senior or staff engineers earn ₹40L–₹75L. Big-tech and AI-first companies pay higher through RSUs. Ranges are indicative.' },
      { q: 'How is ML engineer pay different from data scientist pay?', a: 'ML engineers are typically paid a premium for shipping and maintaining models in production (serving, monitoring, pipelines), while data scientists are often weighted toward analysis and experimentation. At the same experience, ML engineer bands tend to sit at or above data scientist bands.' },
    ],
  }),
  'chartered-accountant': build({
    exp: ['₹7L – ₹13L (freshly qualified CAs; Big 4 and corporates)', '₹13L – ₹25L (3–6 years post-qualification)', '₹25L – ₹45L (7–12 years; senior manager / finance controller)', '₹45L – ₹1.2Cr+ (13+ years; CFO track, partner)'],
    co: ['₹8L – ₹22L (startup finance heads; plus ESOPs)', '₹8L – ₹25L (mid-size corporates and CA firms)', '₹10L – ₹35L (Big 4, MNC finance, investment banking)', '₹18L – ₹45L (global in-house finance and strategy roles)'],
    loc: ['₹7L – ₹40L (startups, MNC finance and GCCs)', '₹8L – ₹45L (BFSI, Big 4 and corporate headquarters)', '₹7L – ₹35L (MNC and corporate finance)', '₹7L – ₹35L (GCCs and Big 4 delivery centres)', '₹6L – ₹28L (manufacturing and corporate finance)', '₹6L – ₹30L (manufacturing and Big 4)', '₹5L – ₹20L (Tier-2 cities; practice and local corporates)', '₹6L – ₹24L (corporates and CA firms)', '₹6L – ₹26L (industrial, pharma and GIFT City finance)'],
    skills: ['IFRS / Ind AS', 'Statutory and tax audit', 'Direct and indirect tax (GST)', 'Financial modelling', 'Transfer pricing', 'M&A due diligence', 'Treasury and fund management', 'SAP FICO / ERP', 'Internal audit and risk', 'Data analytics for finance'],
    boost: ['Big 4 experience (strong brand premium)', 'Specialisations in IFRS, transfer pricing, M&A or international tax', 'Additional credentials (CFA, DISA, CISA, FRM)', 'Industry-specific finance depth (BFSI, pharma, infra)'],
    tips: ['Quote engagements and value handled (audit size, deal size, tax saved)', 'Compare across Big 4, in-house and industry — bands differ widely', 'Negotiate rank / designation alongside pay for corporate roles', 'Ask about articleship-to-hire rank equivalence if re-joining a firm'],
    faqs: [
      { q: 'What is the average chartered accountant salary in India?', a: 'Newly qualified CAs commonly receive ₹7L–₹13L, with top-tier firms and campus placements higher. Mid-career CAs with 3–6 years earn ₹13L–₹25L, and senior managers or finance controllers earn ₹25L–₹45L. Ranges are indicative and depend on the firm and specialisation.' },
      { q: 'Do CAs earn more in practice or in industry?', a: 'Early in a career, Big 4 and industry roles pay comparably, while independent practice is variable. Senior in-house finance leaders and CFOs typically earn more than equivalent practising CAs; partners at large firms can exceed them. Specialisation and firm tier drive most of the difference.' },
    ],
  }),
  'sap-consultant': build({
    exp: ['₹4L – ₹9L (0–2 years; trainee / associate consultant)', '₹12L – ₹26L (3–6 years; module consultant)', '₹26L – ₹48L (7–12 years; senior / lead consultant)', '₹48L – ₹1.2Cr+ (13+ years; solution architect, practice head)'],
    co: ['₹6L – ₹20L (implementation partners and boutiques)', '₹8L – ₹28L (mid-size SAP partners)', '₹12L – ₹45L (Accenture, Deloitte, IBM, TCS and captives)', '₹25L – ₹80L (SAP India, global consultancies; senior roles)'],
    loc: ['₹5L – ₹45L (large SAP practices and captives)', '₹5L – ₹42L (consulting and BFSI implementations)', '₹5L – ₹38L (NCR consulting and MNC delivery)', '₹5L – ₹40L (global delivery centres)', '₹4L – ₹32L (IT services SAP practices)', '₹5L – ₹36L (manufacturing and consulting SAP work)', '₹3L – ₹20L (Tier-2 cities)', '₹4L – ₹24L (IT services SAP practices)', '₹4L – ₹26L (industrial and pharma SAP rollouts)'],
    skills: ['SAP S/4HANA', 'SAP FICO / MM / SD / PP', 'SAP ABAP and Fiori', 'SAP BTP', 'SAP SuccessFactors', 'Data migration', 'Integration (PI/PO, CPI)', 'Greenfield and brownfield rollouts', 'Functional design and UAT', 'Solution architecture'],
    boost: ['S/4HANA migration or greenfield rollout experience', 'SAP certification in a current module', 'Cross-module or industry-specific depth (retail, pharma, manufacturing)', 'Client-facing lead and presales experience'],
    tips: ['List modules, implementation phase (design, build, hypercare) and project scale', 'Highlight S/4HANA and BTP exposure — legacy-only profiles are paid less', 'Ask whether travel / onsite allowances are part of CTC', 'Contract-to-hire rates can exceed permanent bands for niche modules'],
    faqs: [
      { q: 'What is the average SAP consultant salary in India?', a: 'Entry-level SAP consultants typically earn ₹4L–₹9L, mid-level consultants with 3–6 years earn ₹12L–₹26L, and senior or lead consultants earn ₹26L–₹48L. S/4HANA and BTP skills and consulting-firm employers raise these bands. Ranges are indicative.' },
      { q: 'Which SAP module pays the most?', a: 'Pay depends more on scarcity and seniority than the module name. Currently S/4HANA finance, BTP / integration and SuccessFactors skills tend to command premiums, while functional consultants with end-to-end rollout experience earn more than module-only profiles.' },
    ],
  }),
  'react-developer': build({
    exp: ['₹3.5L – ₹9L (0–2 years; React fundamentals, portfolio projects)', '₹12L – ₹28L (3–6 years; owns frontend modules)', '₹28L – ₹48L (7–12 years; senior / lead frontend)', '₹48L – ₹95L+ (13+ years; frontend architect, engineering manager)'],
    co: ['₹5L – ₹22L (plus ESOPs)', '₹7L – ₹28L (SaaS and product companies)', '₹10L – ₹36L (global tech centres; IT services pay lower)', '₹20L – ₹70L+ (big-tech frontend; base + RSU)'],
    loc: ['₹4.5L – ₹55L (largest React job market)', '₹4L – ₹38L (fintech and consumer tech)', '₹4L – ₹33L (NCR product and MNC centres)', '₹4L – ₹42L (big-tech and SaaS hub)', '₹3.5L – ₹26L (IT services and product firms)', '₹4L – ₹30L (IT services and product firms)', '₹2.5L – ₹15L (Tier-2 cities and agencies)', '₹3.5L – ₹18L (IT services and startups)', '₹3.5L – ₹18L (IT services and SaaS)'],
    skills: ['React 18 and Next.js', 'TypeScript', 'State management (Redux, Zustand)', 'Web performance and Core Web Vitals', 'Testing (Jest, React Testing Library, Playwright)', 'Design systems', 'Accessibility', 'GraphQL', 'Micro-frontends', 'Server components'],
    boost: ['Core Web Vitals or performance improvements with numbers', 'TypeScript and testing depth', 'Design-system or component-library ownership', 'Next.js / full-stack capability'],
    tips: ['Show shipped products with traffic or user metrics', 'Quote measured performance gains (LCP, bundle size)', 'Benchmark against product-company bands rather than service-company ones', 'Ask about frontend ownership scope — architecture ownership supports a senior band'],
    faqs: [
      { q: 'What is the average React developer salary in India?', a: 'Entry-level React developers commonly earn ₹3.5L–₹9L, mid-level developers with 3–6 years earn ₹12L–₹28L, and senior or lead frontend engineers earn ₹28L–₹48L. Product companies and global tech centres pay above IT-services averages. Ranges are indicative.' },
      { q: 'Does knowing Next.js and TypeScript raise a React developer\'s salary?', a: 'Yes, in practice. Most product-company React roles now expect TypeScript, and Next.js or full-stack ability widens the pool of roles you can be hired into, which typically moves offers toward the upper part of the band.' },
    ],
  }),
  'investment-banker': build({
    exp: ['₹12L – ₹30L (analyst; 0–2 years, tier-1 MBA / CA hires higher)', '₹30L – ₹65L (associate; 3–5 years)', '₹65L – ₹1.5Cr (vice president; 6–10 years)', '₹1.5Cr – ₹4Cr+ (director / MD; bonus-driven)'],
    co: ['₹10L – ₹28L (boutiques and advisory startups)', '₹14L – ₹40L (mid-market and Indian advisory firms)', '₹20L – ₹80L (global banks\' India desks, junior to associate)', '₹35L – ₹1.5Cr (bulge-bracket; bonus significant)'],
    loc: ['₹10L – ₹40L (smaller IB desks and GCCs)', '₹12L – ₹90L (India\'s investment banking hub)', '₹10L – ₹50L (Delhi / Gurugram advisory and PE)', '₹10L – ₹40L (GCC and KPO finance roles)', '₹8L – ₹30L (limited IB presence)', '₹8L – ₹32L (limited IB presence; GCC finance)', '₹6L – ₹22L (few IB roles outside metros)', '₹7L – ₹25L (limited IB presence)', '₹8L – ₹32L (GIFT City advisory and capital markets)'],
    skills: ['Financial modelling (DCF, LBO, comps)', 'M&A execution', 'ECM / DCM transactions', 'Valuation', 'Pitch book and CIM creation', 'Due diligence', 'Excel and PowerPoint speed', 'Capital markets knowledge', 'Client management', 'Regulatory awareness (SEBI, FEMA)'],
    boost: ['Closed transactions with deal size and your role listed', 'Tier-1 campus (IIM, ISB) or CA / CFA credentials', 'Sector specialisation (tech, healthcare, financial institutions)', 'Cross-border deal experience'],
    tips: ['Total compensation is bonus-heavy — compare base and expected bonus separately', 'List deal count and size, not just "worked on M&A"', 'Ask about bonus track record for the desk over the last two years', 'Bulge-bracket versus boutique trade-offs: pay versus deal exposure'],
    faqs: [
      { q: 'What is the average investment banker salary in India?', a: 'Analysts typically earn ₹12L–₹30L, associates with 3–5 years earn ₹30L–₹65L, and vice presidents earn ₹65L–₹1.5Cr, with year-end bonuses forming a large share. Global bank desks and top-tier campus hires sit at the high end. Ranges are indicative.' },
      { q: 'How much of investment banking pay is bonus?', a: 'Bonuses can be a substantial portion of total compensation, particularly at senior levels, and vary with deal flow and desk performance. Always ask for the base-to-bonus split and the desk\'s recent bonus history before comparing offers.' },
    ],
  }),
  'scrum-master': build({
    exp: ['₹5L – ₹10L (0–2 years; junior scrum master / agile coach associate)', '₹14L – ₹28L (3–6 years; scrum master for multiple teams)', '₹28L – ₹48L (7–12 years; senior scrum master / agile coach)', '₹48L – ₹90L (13+ years; enterprise agile coach, transformation lead)'],
    co: ['₹6L – ₹22L (startups; often combined with delivery roles)', '₹8L – ₹28L (product and mid-size firms)', '₹12L – ₹38L (IT services and global captives)', '₹22L – ₹60L (large tech and BFSI transformations)'],
    loc: ['₹6L – ₹45L (largest agile coaching market)', '₹6L – ₹42L (BFSI agile transformations)', '₹5L – ₹36L (NCR MNC centres)', '₹5L – ₹38L (global delivery centres)', '₹4L – ₹30L (IT services)', '₹5L – ₹32L (IT services and product firms)', '₹3L – ₹18L (Tier-2 cities)', '₹4L – ₹22L (IT services)', '₹4L – ₹24L (IT services and fintech)'],
    skills: ['Scrum and Kanban facilitation', 'SAFe / LeSS scaling', 'Agile coaching', 'Jira and Azure DevOps', 'Metrics (velocity, cycle time, flow)', 'Stakeholder management', 'Conflict resolution', 'Release planning', 'Retrospective facilitation', 'DevOps awareness'],
    boost: ['CSM, PSM, SAFe SPC or ICAgile certifications', 'Measurable delivery improvements (cycle time cut, predictability up)', 'Experience scaling agile across multiple teams', 'Technical background that earns engineering credibility'],
    tips: ['Quote measurable team outcomes, not ceremonies run', 'Highlight multi-team and scaled-framework experience', 'Certifications help but are table stakes; outcomes drive higher offers', 'Clarify whether the role is pure scrum master or hybrid delivery / project manager'],
    faqs: [
      { q: 'What is the average scrum master salary in India?', a: 'Junior scrum masters commonly earn ₹5L–₹10L, mid-level scrum masters with 3–6 years earn ₹14L–₹28L, and senior scrum masters or agile coaches earn ₹28L–₹48L. Scaled-agile and transformation experience raises offers. Ranges are indicative.' },
      { q: 'Does a scrum certification increase salary?', a: 'Certifications such as CSM, PSM or SAFe help you clear screening and are often required, but pay differences come mainly from demonstrated results, team scale and seniority rather than the certificate alone.' },
    ],
  }),
  'business-development-manager': build({
    exp: ['₹3.5L – ₹8L (0–2 years; BD executive / associate)', '₹9L – ₹20L (3–6 years; BDM with own targets)', '₹20L – ₹38L (7–12 years; senior BDM / BD head)', '₹38L – ₹90L+ (13+ years; VP business development)'],
    co: ['₹5L – ₹20L (plus ESOPs; incentive-heavy)', '₹7L – ₹24L (mid-size firms and agencies)', '₹10L – ₹32L (MNC and enterprise BD roles)', '₹18L – ₹55L (large tech / consulting BD leadership)'],
    loc: ['₹4L – ₹35L (SaaS and startup BD)', '₹4L – ₹36L (BFSI and enterprise BD)', '₹4L – ₹32L (NCR enterprise and EdTech BD)', '₹4L – ₹30L (IT services and SaaS BD)', '₹3.5L – ₹24L (manufacturing and IT BD)', '₹4L – ₹26L (auto and IT BD)', '₹2.5L – ₹16L (Tier-2 cities)', '₹3L – ₹20L (corporate and IT BD)', '₹3.5L – ₹22L (industrial and pharma BD)'],
    skills: ['Enterprise B2B sales', 'Strategic partnerships', 'Pipeline generation', 'Proposal and tender writing', 'Negotiation', 'CRM and sales analytics', 'Market research', 'Consultative selling', 'Account expansion', 'Pricing strategy'],
    boost: ['Revenue sourced / closed with numbers attached', 'Partnership or alliance deals with named scale', 'Experience selling to senior enterprise buyers', 'Domain expertise in a high-margin sector (SaaS, BFSI, pharma)'],
    tips: ['Quote revenue generated, pipeline created and win rates', 'Separate fixed pay from target-linked variable pay in every comparison', 'Ask about the lead source — inbound-supported BD pays differently from hunter roles', 'Negotiate clear territory and target definitions in writing'],
    faqs: [
      { q: 'What is the average business development manager salary in India?', a: 'Entry-level BD executives typically earn ₹3.5L–₹8L, BD managers with 3–6 years earn ₹9L–₹20L, and senior BD managers or heads earn ₹20L–₹38L, often with a significant variable component. Ranges are indicative.' },
      { q: 'How is business development pay structured?', a: 'Most BD roles combine a fixed salary with a target-linked incentive. Hunter-style roles in SaaS and enterprise sales carry a larger variable share; relationship-led BD in industries such as pharma or manufacturing is usually more fixed-pay-heavy.' },
    ],
  }),
  'network-engineer': build({
    exp: ['₹2.8L – ₹6L (0–2 years; NOC / L1 network support)', '₹7L – ₹16L (3–6 years; L2/L3 network engineer)', '₹16L – ₹30L (7–12 years; senior network engineer / architect)', '₹30L – ₹60L (13+ years; network architect, infrastructure head)'],
    co: ['₹4L – ₹14L (startups and MSPs)', '₹4L – ₹18L (system integrators and mid-size IT)', '₹6L – ₹26L (IT services and enterprise infrastructure teams)', '₹15L – ₹50L (cloud / hyperscaler networking roles)'],
    loc: ['₹3.5L – ₹32L (enterprise and cloud networking)', '₹3.5L – ₹28L (BFSI and enterprise networks)', '₹3.5L – ₹26L (NCR enterprise and telecom)', '₹3.5L – ₹30L (cloud and enterprise networks)', '₹3L – ₹24L (IT services and telecom)', '₹3.5L – ₹24L (IT services and manufacturing)', '₹2.2L – ₹12L (Tier-2 cities)', '₹2.8L – ₹15L (telecom and IT)', '₹3L – ₹16L (telecom and industrial)'],
    skills: ['Cisco CCNA / CCNP / CCIE', 'SD-WAN', 'Palo Alto / Fortinet firewalls', 'Cloud networking (AWS VPC, Azure VNet)', 'BGP / OSPF routing', 'Network automation (Python, Ansible)', 'Wireless networking', 'Load balancing', 'Network monitoring', 'Zero-trust networking'],
    boost: ['CCNP / CCIE or equivalent professional certification', 'Cloud and SD-WAN experience', 'Network automation capability', 'Large-scale or multi-site design ownership'],
    tips: ['List network scale (sites, devices, throughput) and uptime achieved', 'Highlight automation and cloud networking — they push you to the higher band', 'Certifications matter more here than in many fields; keep them current', 'Ask about on-call and shift allowances in the CTC'],
    faqs: [
      { q: 'What is the average network engineer salary in India?', a: 'Entry-level network engineers typically earn ₹2.8L–₹6L, mid-level engineers with 3–6 years earn ₹7L–₹16L, and senior engineers or architects earn ₹16L–₹30L. Cisco professional-level certifications and cloud networking skills raise offers. Ranges are indicative.' },
      { q: 'Is CCNA enough for a good network engineer salary?', a: 'CCNA gets you into entry-level roles, but meaningful salary growth usually needs hands-on experience plus CCNP-level or cloud and automation skills. CCIE-level and architect profiles sit at the top of the band.' },
    ],
  }),
  'logistics-manager': build({
    exp: ['₹3L – ₹6.5L (0–2 years; logistics executive / coordinator)', '₹8L – ₹16L (3–6 years; logistics / transport manager)', '₹16L – ₹30L (7–12 years; senior manager / regional logistics head)', '₹30L – ₹70L (13+ years; head of logistics, VP supply chain)'],
    co: ['₹4L – ₹16L (startups, D2C and 3PL players)', '₹5L – ₹18L (mid-size manufacturers and distributors)', '₹8L – ₹28L (MNC and large-cap logistics)', '₹18L – ₹55L (e-commerce and global logistics leadership)'],
    loc: ['₹3.5L – ₹28L (e-commerce and D2C logistics)', '₹4L – ₹32L (port, shipping and 3PL hub)', '₹3.5L – ₹28L (NCR distribution and e-commerce)', '₹3.5L – ₹24L (pharma and e-commerce logistics)', '₹3.5L – ₹24L (port, auto and manufacturing logistics)', '₹3.5L – ₹26L (auto and manufacturing logistics)', '₹2.5L – ₹14L (Tier-2 cities and regional hubs)', '₹3L – ₹18L (port and distribution)', '₹3.5L – ₹22L (port, industrial and pharma logistics)'],
    skills: ['Transportation management (TMS)', 'Warehouse management (WMS)', 'Last-mile delivery optimisation', 'Freight and carrier negotiation', 'Cost-to-serve analysis', 'Import / export and customs', 'Route planning', 'Vendor management', 'Inventory control', 'Excel / BI reporting'],
    boost: ['Documented logistics cost reduction (percent saved)', 'On-time delivery and damage-rate improvements with numbers', 'E-commerce or cold-chain specialisation', 'TMS / WMS implementation experience'],
    tips: ['Quote cost savings, OTIF percentage and fleet / volume managed', 'Highlight carrier-negotiation outcomes', 'E-commerce and cold-chain experience supports higher offers', 'Clarify shift and travel expectations in the role'],
    faqs: [
      { q: 'What is the average logistics manager salary in India?', a: 'Logistics executives typically earn ₹3L–₹6.5L, logistics managers with 3–6 years earn ₹8L–₹16L, and senior managers or regional heads earn ₹16L–₹30L. E-commerce, cold-chain and MNC employers pay above the average. Ranges are indicative.' },
      { q: 'How does logistics manager pay compare with supply chain manager pay?', a: 'The bands overlap heavily. Supply chain manager roles with end-to-end planning, sourcing and logistics scope usually sit slightly higher than pure logistics roles at the same experience, especially at MNCs and large manufacturers.' },
    ],
  }),
  'interior-designer': build({
    exp: ['₹2.2L – ₹5L (0–2 years; junior designer / draftsperson)', '₹6L – ₹14L (3–6 years; designer with client handling)', '₹14L – ₹28L (7–12 years; senior designer / design lead)', '₹28L – ₹60L+ (13+ years; principal designer, studio head or owner)'],
    co: ['₹3L – ₹10L (boutique studios and startups)', '₹3.5L – ₹12L (mid-size design-build firms)', '₹5L – ₹20L (large design-build firms and hospitality)', '₹12L – ₹45L (premium luxury and international studios)'],
    loc: ['₹3L – ₹22L (home-interior startups and studios)', '₹3.5L – ₹30L (luxury residential and commercial)', '₹3L – ₹26L (luxury residential and corporate fit-outs)', '₹3L – ₹20L (residential and commercial)', '₹2.5L – ₹16L (residential and hospitality)', '₹3L – ₹18L (residential and commercial)', '₹2L – ₹10L (Tier-2 cities)', '₹2.2L – ₹12L (residential and commercial)', '₹2.5L – ₹14L (residential and commercial)'],
    skills: ['AutoCAD', 'SketchUp / 3ds Max / Revit', 'Rendering (V-Ray, Lumion)', 'Space planning', 'Material and vendor knowledge', 'BOQ and cost estimation', 'Site supervision', 'Client presentation', 'Lighting design', 'Sustainable design'],
    boost: ['Strong portfolio with built, photographed projects', 'Project value and scale managed (₹ crore, sq ft)', 'Commercial, hospitality or luxury residential experience', 'Cost control and site execution capability'],
    tips: ['Your portfolio is the negotiation — lead with built projects and budgets', 'Quote project values and timelines delivered', 'Hospitality and luxury residential command higher fees than standard residential', 'Clarify whether the role includes site supervision and client acquisition'],
    faqs: [
      { q: 'What is the average interior designer salary in India?', a: 'Junior interior designers typically earn ₹2.2L–₹5L, designers with 3–6 years earn ₹6L–₹14L, and senior designers or design leads earn ₹14L–₹28L. Luxury residential, hospitality and studio leadership roles pay more. Ranges are indicative.' },
      { q: 'Does a strong portfolio increase interior designer pay?', a: 'Yes — for design roles the portfolio often outweighs the degree. Built projects with budget and scale details, plus execution capability, are the strongest basis for negotiating above the typical band.' },
    ],
  }),
  'pharmacist': build({
    exp: ['₹2.2L – ₹4.2L (0–2 years; retail / hospital pharmacist)', '₹4.5L – ₹8L (3–6 years; senior pharmacist / clinical pharmacist)', '₹8L – ₹15L (7–12 years; pharmacy manager / regulatory roles)', '₹15L – ₹35L+ (13+ years; head of pharmacy, regulatory or quality leadership)'],
    co: ['₹2.4L – ₹5L (independent and chain retail pharmacies)', '₹3L – ₹7L (regional hospitals and pharma distributors)', '₹4L – ₹10L (corporate hospitals and pharma companies)', '₹8L – ₹25L (multinational pharma, regulatory and pharmacovigilance roles)'],
    loc: ['₹2.6L – ₹10L (hospital chains and pharma companies)', '₹2.8L – ₹11L (hospital and pharma head offices)', '₹2.6L – ₹10L (hospital chains and pharma distribution)', '₹2.8L – ₹12L (pharma manufacturing and R&D hub)', '₹2.5L – ₹9L (hospital and pharma manufacturing)', '₹2.6L – ₹9L (hospital and pharma companies)', '₹2L – ₹6L (Tier-2 cities; retail and district hospitals)', '₹2.2L – ₹7L (hospital and retail pharmacies)', '₹2.5L – ₹10L (pharma manufacturing and hospital chains)'],
    skills: ['Clinical pharmacy', 'Pharmacovigilance', 'Regulatory affairs', 'Drug inventory and procurement', 'Prescription verification and counselling', 'Quality assurance / GMP', 'Hospital information systems', 'Drug interaction knowledge', 'Schedule H / X handling', 'Pharma sales and medical affairs'],
    boost: ['Pharm.D or M.Pharm qualification', 'Clinical, regulatory or pharmacovigilance specialisation', 'Hospital accreditation (NABH) experience', 'Corporate hospital or MNC pharma employer'],
    tips: ['Lead with your registration, qualification and dispensing volume', 'Specialised tracks (regulatory, pharmacovigilance, clinical) pay far above retail pharmacy', 'Ask about shift allowances and weekly-off patterns', 'Corporate hospitals and MNC pharma bands outpace independent retail'],
    faqs: [
      { q: 'What is the average pharmacist salary in India?', a: 'Entry-level pharmacists commonly earn ₹2.2L–₹4.2L, pharmacists with 3–6 years of experience earn ₹4.5L–₹8L, and pharmacy managers or regulatory professionals earn ₹8L–₹15L. Pharma-industry and clinical roles pay more than retail. Ranges are indicative.' },
      { q: 'Which pharmacy careers pay the most in India?', a: 'Regulatory affairs, pharmacovigilance, clinical research and medical affairs roles generally pay more than retail or standard hospital dispensing, particularly at multinational pharma and CRO employers.' },
    ],
  }),
  'embedded-systems-engineer': build({
    exp: ['₹3.5L – ₹8L (0–2 years; firmware / embedded trainee)', '₹10L – ₹22L (3–6 years; embedded software engineer)', '₹22L – ₹42L (7–12 years; senior / staff embedded)', '₹42L – ₹85L (13+ years; architect, engineering manager)'],
    co: ['₹5L – ₹18L (IoT and hardware startups)', '₹6L – ₹22L (mid-size product and engineering services firms)', '₹10L – ₹34L (semiconductor, automotive and engineering services MNCs)', '₹20L – ₹65L+ (semiconductor and big-tech hardware teams)'],
    loc: ['₹4.5L – ₹45L (semiconductor, IoT and automotive R&D hub)', '₹4L – ₹26L (consumer electronics and engineering services)', '₹4L – ₹28L (NCR semiconductor and telecom)', '₹4.5L – ₹36L (semiconductor and defence electronics)', '₹4L – ₹26L (automotive electronics and engineering services)', '₹4.5L – ₹30L (automotive embedded hub)', '₹2.5L – ₹14L (Tier-2 cities)', '₹3L – ₹15L (engineering services)', '₹3.5L – ₹18L (industrial automation and electronics)'],
    skills: ['Embedded C / C++', 'RTOS (FreeRTOS, Zephyr)', 'ARM Cortex-M microcontrollers', 'Device drivers and BSP', 'Communication protocols (I2C, SPI, CAN, UART)', 'Automotive (AUTOSAR, ISO 26262)', 'Embedded Linux / Yocto', 'Low-power design', 'Hardware debugging (JTAG, oscilloscope)', 'Wireless (BLE, Wi-Fi, LoRa)'],
    boost: ['Automotive (AUTOSAR / functional safety) or semiconductor experience', 'Embedded Linux and BSP development', 'Shipped products with volume or field-deployment details', 'Hardware-software co-debugging capability'],
    tips: ['Describe the product, MCU / SoC and your ownership, not just languages', 'Automotive and semiconductor sectors pay above general electronics services', 'Highlight production-shipped firmware and field-issue resolution', 'Benchmark against software-engineer bands for senior embedded roles'],
    faqs: [
      { q: 'What is the average embedded systems engineer salary in India?', a: 'Entry-level embedded engineers typically earn ₹3.5L–₹8L, engineers with 3–6 years earn ₹10L–₹22L, and senior or staff engineers earn ₹22L–₹42L. Automotive, semiconductor and embedded Linux specialisations raise offers. Ranges are indicative.' },
      { q: 'Which embedded skills are most valuable for pay in India?', a: 'Automotive safety standards (AUTOSAR, ISO 26262), embedded Linux / BSP work and semiconductor driver development tend to command premiums, as do engineers who can debug across hardware and software.' },
    ],
  }),
};
