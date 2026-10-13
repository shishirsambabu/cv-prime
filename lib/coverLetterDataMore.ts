import type { CoverLetterData } from '@/lib/coverLetterData';

// Cover letter guidance for the 15 roles that previously had no hand-written
// cover letter entry. Sample figures are illustrative placeholders for the
// candidate to replace with their own numbers; no market statistics are asserted.
export const coverLetterDataMore: Record<string, CoverLetterData> = {
  'full-stack-developer': {
    dos: [
      'Name the front-end and back-end stack from the JD (e.g. React + Node.js + PostgreSQL) in the first two sentences',
      'Describe one feature you owned end to end — schema, API, UI and deployment',
      'Quantify the outcome: page load time, conversion lift, API latency or users served',
      'Link a live project or GitHub repository so the reader can verify your claims',
    ],
    donts: [
      'Don\'t claim to be an "expert in everything" — name your strongest layer and your working depth elsewhere',
      'Don\'t paste a list of 15 technologies; pick the 4–5 the JD asks for',
      'Don\'t describe tutorial projects as production work',
      'Avoid generic openers like "I am a passionate developer"',
    ],
    keyPoints: [
      'One feature shipped across the whole stack and the business result',
      'How you balance speed of delivery with code quality (tests, code review, CI)',
      'Your comfort moving between front-end and back-end when a team is small',
      'Evidence of deployment ownership: Docker, CI/CD or cloud hosting',
    ],
    sampleOpening: 'When our checkout flow was losing users to slow page loads, I rebuilt the React front end and the Node.js API behind it, cutting load time from 5s to under 2s — the kind of end-to-end ownership I would like to bring to [Target Company]\'s product team.',
    sampleBody: 'At [Previous Company], I owned the order-management module from database schema to UI. I designed the PostgreSQL schema, built REST endpoints in Express with request validation, and shipped a React dashboard used daily by the operations team. I added integration tests and a GitHub Actions pipeline so each merge deployed automatically to staging. Working across the stack taught me to design APIs around how the UI actually consumes them, which reduced rework between front-end and back-end changes.',
    sampleClosing: 'I would welcome the chance to discuss how my full-stack experience could help [Target Company] ship features faster with fewer hand-offs. My portfolio and GitHub are linked in my CV.',
    faqs: [
      { q: 'Should a full stack developer cover letter focus on front-end or back-end?', a: 'Match the JD. If it lists React and TypeScript first, lead with a front-end result and show back-end depth second; if it leads with Node.js, Java or Python services, do the reverse. Either way, include at least one example that proves you can own a feature across both layers.' },
      { q: 'Is a cover letter needed for full stack developer roles in India?', a: 'It is usually optional, but it helps at startups and product companies where a small team reads every application. A short, specific letter with a project link can set you apart from candidates who send only a CV.' },
    ],
  },
  'react-developer': {
    dos: [
      'Mention React version-level specifics the JD cares about: hooks, Next.js, TypeScript, state management',
      'Cite a measurable front-end outcome such as Lighthouse score, bundle size or Core Web Vitals improvement',
      'Reference the company\'s product UI and one thing you would improve or learn from it',
      'Include a deployed demo or GitHub link',
    ],
    donts: [
      'Don\'t just list libraries — explain a decision you made and why (e.g. Redux Toolkit vs Context)',
      'Don\'t ignore accessibility and performance; reviewers notice',
      'Don\'t claim senior-level architecture ownership if you have only built components',
      'Avoid copy-pasting a template that mentions another company',
    ],
    keyPoints: [
      'A specific performance or UX improvement you shipped',
      'How you structure components and state for maintainability',
      'Testing approach: React Testing Library, Jest or Cypress',
      'Collaboration with designers and back-end engineers',
    ],
    sampleOpening: 'After I split our single React bundle into route-level chunks and moved heavy charts behind lazy loading, our dashboard\'s initial load dropped by roughly half — the kind of front-end performance work I am keen to continue at [Target Company].',
    sampleBody: 'At [Previous Company], I built a reusable component library in React and TypeScript adopted by three product teams, which reduced duplicate UI code and made design changes consistent. I used React Query for server state, wrote component tests with React Testing Library, and worked with designers to meet accessibility requirements such as keyboard navigation and proper ARIA labelling. I am also comfortable with Next.js for server-side rendering where SEO matters.',
    sampleClosing: 'I would be glad to walk you through my component library and discuss how I could help [Target Company] deliver a fast, accessible interface. Thank you for your time and consideration.',
    faqs: [
      { q: 'What should a React developer cover letter include?', a: 'A concrete front-end result, the React ecosystem tools you used (TypeScript, Next.js, state management, testing) and a link to live work. Keep it under 300 words and tie your experience to the product the company builds.' },
      { q: 'Can a fresher write a React developer cover letter without work experience?', a: 'Yes. Lead with one polished project — describe the problem, your component and state design, and what you learned — and link the repository and live demo. Hiring managers value evidence of shipped work over a long skill list.' },
    ],
  },
  'machine-learning-engineer': {
    dos: [
      'Name the problem type and model approach: ranking, forecasting, NLP, computer vision',
      'Report the metric you improved and the baseline you compared against',
      'Show production exposure: model serving, monitoring, retraining or MLOps tooling',
      'Explain a trade-off you made, such as accuracy against latency or cost',
    ],
    donts: [
      'Don\'t describe only notebook experiments — say what reached production',
      'Don\'t quote accuracy without naming the dataset, metric and baseline',
      'Don\'t list every framework; choose the ones in the JD (PyTorch, TensorFlow, scikit-learn)',
      'Avoid buzzword-heavy sentences with no outcome',
    ],
    keyPoints: [
      'One model you took from data to deployment',
      'How you evaluate models and detect drift after release',
      'Data quality work: labelling, feature engineering, leakage checks',
      'Collaboration with data engineers and product owners',
    ],
    sampleOpening: 'I recently replaced a rule-based ranking system with a gradient-boosted model that improved click-through on recommendations in an A/B test — and I am looking for the chance to build similar production ML systems at [Target Company].',
    sampleBody: 'At [Previous Company], I built the feature pipeline, trained and validated the model, and deployed it behind a REST service with latency monitoring. I tracked experiments in MLflow, compared every candidate against the existing baseline, and set up alerts for input drift. When a larger model offered only marginal gains but doubled inference cost, I recommended the lighter model and documented the trade-off for stakeholders.',
    sampleClosing: 'I would value the opportunity to discuss the ML problems your team is working on and how my production experience could contribute. Thank you for considering my application.',
    faqs: [
      { q: 'How is a machine learning engineer cover letter different from a data scientist one?', a: 'An ML engineer letter should emphasise production: deployment, serving latency, monitoring and reliability, not only modelling. Show that you can turn a model into a maintained service.' },
      { q: 'Should I mention research papers or Kaggle in my cover letter?', a: 'Only briefly and only if relevant. One line about a relevant publication or competition result is fine, but production projects with business outcomes carry more weight for engineering roles.' },
    ],
  },
  'chartered-accountant': {
    dos: [
      'State your CA qualification, attempt status and articleship or post-qualification experience early',
      'Mention the specific domains in the JD: statutory audit, direct tax, GST, IFRS, internal audit or FP&A',
      'Quantify responsibilities: size of client portfolio, audit scope, number of returns handled or cost savings',
      'Show familiarity with current regulation such as Ind AS and GST updates',
    ],
    donts: [
      'Don\'t make claims about regulations or rates you cannot back up in an interview',
      'Don\'t describe duties as a list of tasks without outcomes',
      'Don\'t overlook ICAI membership number and ranking details if they are strong, but don\'t lead with them alone',
      'Avoid an overly formal, generic tone that could fit any finance role',
    ],
    keyPoints: [
      'Your specialisation and the exposure that supports it',
      'Accuracy and compliance record, e.g. clean audits or on-time filings',
      'Software proficiency: Tally, SAP, Excel, audit tools',
      'Interest in the firm\'s clients or sector',
    ],
    sampleOpening: 'As a newly qualified Chartered Accountant with three years of articleship in statutory audit and indirect tax, I am applying for the Audit Associate role at [Target Company] to build on my exposure to Ind AS-compliant reporting.',
    sampleBody: 'During articleship at [Firm], I worked on statutory audits for manufacturing and services clients, performing ledger scrutiny, vendor reconciliations and GST return reviews. I identified recurring input-tax-credit mismatches and proposed a monthly reconciliation checklist that the client adopted. I am proficient in Tally Prime, SAP FICO and advanced Excel.',
    sampleClosing: 'I would welcome the opportunity to contribute to [Target Company]\'s finance team and to discuss how my audit and compliance background fits your needs.',
    faqs: [
      { q: 'Do Chartered Accountants need a cover letter in India?', a: 'For Big 4 and large firms, applications often go through structured forms, but a short cover letter helps for direct applications, industry roles and smaller firms. Use it to explain your specialisation and what you want to do next.' },
      { q: 'Should a newly qualified CA mention exam attempts in the cover letter?', a: 'You do not need to. Mention your qualification and practical exposure; discuss attempts only if asked.' },
    ],
  },
  'sap-consultant': {
    dos: [
      'Name the SAP module and version: FICO, MM, SD, ABAP, S/4HANA',
      'Describe your role in implementation, rollout or support projects and the project scale',
      'Mention end-to-end lifecycle phases you worked on: blueprint, configuration, testing, go-live, hypercare',
      'Add relevant certification such as SAP-certified associate credentials, if held',
    ],
    donts: [
      'Don\'t list modules you have only read about',
      'Don\'t omit your industry context — manufacturing, retail and banking implementations differ',
      'Don\'t focus only on tickets resolved; show process improvement',
      'Avoid unexplained SAP acronyms in the first paragraph',
    ],
    keyPoints: [
      'Your primary module and depth of configuration experience',
      'A go-live or migration you contributed to',
      'Interaction with business users and functional specifications',
      'Willingness to travel or work in client-facing roles if applicable',
    ],
    sampleOpening: 'As an SAP FICO consultant who has supported two full implementations and one S/4HANA migration, I am excited to apply for the SAP Finance Consultant role at [Target Company].',
    sampleBody: 'At [Previous Company], I configured general ledger, accounts payable and asset accounting for a manufacturing client, ran user acceptance testing with finance stakeholders and supported the team through go-live and hypercare. I documented functional specs for custom reports, which shortened month-end close by reducing manual reconciliation. I enjoy bridging finance users and technical teams.',
    sampleClosing: 'I would be glad to discuss how my implementation experience can support [Target Company]\'s SAP programme. Thank you for your consideration.',
    faqs: [
      { q: 'Should an SAP consultant mention certifications in a cover letter?', a: 'Yes, briefly, if they are current and relevant to the module. Pair them with project experience, since clients value delivery history as much as certification.' },
      { q: 'How do I write a cover letter for an SAP role as a fresher?', a: 'Highlight your SAP training, any sandbox or academy projects, and your domain knowledge in finance, logistics or HR. Show eagerness to learn on live projects.' },
    ],
  },
  'investment-banker': {
    dos: [
      'Name specific transactions or deal types you supported: M&A, ECM, DCM, restructuring',
      'Show valuation and modelling skills: DCF, comparables, LBO, financial modelling',
      'Explain why this bank and this group — sector coverage, deal flow, culture',
      'Keep it to one page with precise, confident language',
    ],
    donts: [
      'Don\'t disclose confidential client information; use anonymised descriptions',
      'Don\'t write a generic "finance" letter; banks screen for motivation specific to the firm',
      'Don\'t overstate your role on a deal',
      'Avoid casual phrasing or errors — attention to detail is tested',
    ],
    keyPoints: [
      'Your analytical and modelling strengths',
      'A deal or case you worked on and your specific contribution',
      'Stamina and attention to detail in demanding timelines',
      'Genuine reasons for choosing investment banking and this firm',
    ],
    sampleOpening: 'Having built valuation models for three mid-market transactions during my internship at [Firm], I am applying for the Analyst position in [Target Bank]\'s Technology M&A group because of its record advising on cross-border deals.',
    sampleBody: 'In my previous role, I prepared DCF and trading-comparables analyses, drafted sections of information memoranda and updated models through multiple diligence rounds. I checked every figure against source documents and built consistency checks into the model, which reduced review-cycle corrections. I completed a financial modelling certification and I am comfortable working under tight deal deadlines.',
    sampleClosing: 'I would appreciate the chance to speak with your team about the group\'s work and how I could contribute as an analyst. Thank you for your time.',
    faqs: [
      { q: 'Is a cover letter required for investment banking applications?', a: 'Many banks ask for one, especially for campus and lateral applications. Make it specific to the firm and group, and keep it to a single page.' },
      { q: 'How do I explain why I want investment banking in a cover letter?', a: 'Tie your motivation to concrete experience — a deal, a modelling project or a market event you analysed — rather than prestige or compensation.' },
    ],
  },
  'scrum-master': {
    dos: [
      'Mention your certifications (CSM, PSM) and team size/structure you have facilitated',
      'Show measurable team improvements: velocity stability, cycle time, predictability, reduced carry-over',
      'Describe how you coach, not just run ceremonies',
      'Name the tools: Jira, Azure DevOps, Confluence',
    ],
    donts: [
      'Don\'t describe the role as only scheduling meetings',
      'Don\'t claim every team improvement as your own; credit the team',
      'Don\'t use framework jargon without examples',
      'Avoid saying you "ensure" delivery — Scrum Masters enable teams',
    ],
    keyPoints: [
      'A team impediment you removed and the impact',
      'How you handle stakeholder pressure while protecting the sprint',
      'Experience scaling beyond one team or working with distributed teams',
      'Retrospective-driven change you facilitated',
    ],
    sampleOpening: 'By reworking our backlog refinement and sprint-planning routine, I helped a distributed team of nine reduce sprint carry-over meaningfully within three months — and I would like to bring that coaching approach to [Target Company].',
    sampleBody: 'At [Previous Company], I served as Scrum Master for two teams, facilitating planning, daily stand-ups, reviews and retrospectives. I used Jira dashboards to surface blockers and cycle-time trends, worked with the Product Owner on backlog clarity and coached engineers to slice stories smaller. I hold a CSM certification and enjoy helping teams own their process.',
    sampleClosing: 'I would welcome the opportunity to discuss how I can support your teams\' agile maturity at [Target Company]. Thank you for your consideration.',
    faqs: [
      { q: 'What makes a strong Scrum Master cover letter?', a: 'Evidence of coaching outcomes: a specific impediment removed, a process change the team adopted and the measurable result. This distinguishes you from candidates who describe only ceremonies.' },
      { q: 'Should I mention both Scrum and Kanban experience?', a: 'Yes, if the JD references flow-based work or your teams used it. Show that you choose practices to fit the team\'s context.' },
    ],
  },
  'business-development-manager': {
    dos: [
      'Open with a revenue result: quota attainment, new logos or pipeline created',
      'Specify your market segment — enterprise, mid-market or SMB — and geography',
      'Name the sales methodology and CRM you use',
      'Connect your experience to the target company\'s ideal customers',
    ],
    donts: [
      'Don\'t cite activity (calls, emails) without outcomes',
      'Don\'t exaggerate deal sizes or attainment; references can verify',
      'Don\'t bad-mouth previous employers or competitors',
      'Avoid generic claims like "excellent communication skills"',
    ],
    keyPoints: [
      'Quota attainment across periods, not one best quarter',
      'Your outbound and inbound pipeline-building approach',
      'Largest or most complex deal and how you closed it',
      'Cross-functional work with marketing, product and customer success',
    ],
    sampleOpening: 'Over the last two years I have consistently exceeded my annual quota selling B2B SaaS to mid-market BFSI clients, and I would like to bring that pipeline-building discipline to [Target Company]\'s expansion in the region.',
    sampleBody: 'At [Previous Company], I owned outbound prospecting, discovery, demos and negotiation for accounts in the 200–1,000 employee range. I built target-account lists using LinkedIn Sales Navigator, tracked every stage in Salesforce and worked with solutions engineers on proofs of concept. Learning why deals were lost helped me refine my qualification and shorten the sales cycle.',
    sampleClosing: 'I would be pleased to discuss how my experience can help [Target Company] open new accounts. Thank you for considering my application.',
    faqs: [
      { q: 'Do business development managers need cover letters?', a: 'A concise, results-focused cover letter can differentiate you, since BD is a persuasion role. Use it to show you can pitch yourself the way you would pitch a client.' },
      { q: 'How do I show results if my company had no fixed quota?', a: 'Use revenue influenced, accounts acquired, pipeline value created or growth versus the previous period, and state how you measured it.' },
    ],
  },
  'network-engineer': {
    dos: [
      'List the platforms you configure: Cisco, Juniper, Fortinet, Palo Alto, Aruba',
      'Mention certifications such as CCNA or CCNP if held',
      'Describe network scale: sites, users, devices, uptime targets',
      'Show troubleshooting results: reduced downtime or faster incident resolution',
    ],
    donts: [
      'Don\'t list protocols without showing where you used them',
      'Don\'t ignore security responsibilities — firewalls, VPNs and segmentation are expected',
      'Don\'t claim vendor expertise you cannot demonstrate in a practical interview',
      'Avoid writing only about help-desk tasks if you did design work',
    ],
    keyPoints: [
      'A network project you designed, migrated or upgraded',
      'Incident response and root-cause analysis habits',
      'Automation or monitoring tools you use',
      'Documentation and change-management discipline',
    ],
    sampleOpening: 'As a CCNA-certified network engineer who has managed a 12-site enterprise WAN, I am applying for the Network Engineer role at [Target Company] to contribute to a stable, secure network.',
    sampleBody: 'At [Previous Company], I configured and maintained Cisco switching and routing, managed site-to-site VPNs and handled firewall rule changes through a documented change process. I introduced SNMP-based monitoring alerts that helped the team detect link degradation before users reported it, and wrote runbooks that shortened incident handling. I am keen to deepen my automation skills with Python and Ansible.',
    sampleClosing: 'I would welcome the opportunity to discuss your network environment and how I can support its reliability. Thank you for your consideration.',
    faqs: [
      { q: 'Should a network engineer cover letter mention certifications?', a: 'Yes. Certifications like CCNA or CCNP are screened by many employers, so mention them near the top along with hands-on experience.' },
      { q: 'How can a fresher network engineer write a cover letter?', a: 'Highlight lab work, simulated or home-lab projects (Packet Tracer, GNS3, EVE-NG), certifications in progress and your interest in the company\'s infrastructure.' },
    ],
  },
  'logistics-manager': {
    dos: [
      'Quantify operations: shipments handled, fleet size, warehouses, on-time delivery performance',
      'Mention cost control results such as freight savings or reduced damage rates',
      'Name systems you use: WMS, TMS, ERP, route-optimisation tools',
      'Show vendor and carrier negotiation experience',
    ],
    donts: [
      'Don\'t describe your role as "coordination" without results',
      'Don\'t ignore compliance elements such as e-way bills and documentation',
      'Don\'t overlook safety and quality metrics',
      'Avoid generic supply-chain language without your own examples',
    ],
    keyPoints: [
      'An efficiency improvement you led',
      'Peak-season or disruption management example',
      'Team leadership and vendor relationships',
      'Data-driven decision making using KPIs',
    ],
    sampleOpening: 'Having managed outbound logistics across four regional warehouses and improved on-time delivery through carrier performance reviews, I am excited to apply for the Logistics Manager role at [Target Company].',
    sampleBody: 'At [Previous Company], I led a team of 25 handling dispatch planning, carrier allocation and last-mile coordination. I introduced weekly carrier scorecards and consolidated loads on high-volume routes, which reduced per-shipment freight cost. During festive peaks I planned extra capacity in advance and tracked daily exceptions in our TMS to prevent backlogs.',
    sampleClosing: 'I would value the chance to discuss how my operations experience can support [Target Company]\'s logistics goals. Thank you for your time.',
    faqs: [
      { q: 'What should a logistics manager highlight in a cover letter?', a: 'Operational scale, cost and service-level improvements, and the systems and team size you manage. Use numbers wherever you can.' },
      { q: 'Is domain experience in e-commerce or manufacturing important to mention?', a: 'Yes. Logistics requirements differ by sector, so state your domain and relate it to the employer\'s business.' },
    ],
  },
  'interior-designer': {
    dos: [
      'Link a portfolio at the very start; visuals matter more than text',
      'Describe project types: residential, commercial, hospitality, with scale and your role',
      'Mention software: AutoCAD, SketchUp, 3ds Max, V-Ray, Revit',
      'Show you can manage budgets, vendors and site execution, not only concepts',
    ],
    donts: [
      'Don\'t send a letter without portfolio access',
      'Don\'t take credit for a team\'s design as sole designer',
      'Don\'t ignore the client\'s brief and constraints in your examples',
      'Avoid vague language like "creative and passionate"',
    ],
    keyPoints: [
      'A signature project and the design problem it solved',
      'Client communication and presentation skills',
      'Understanding of materials, costing and site coordination',
      'Design style alignment with the studio',
    ],
    sampleOpening: 'The compact 2BHK I redesigned to feel twice its size — through built-in storage and a light-led palette — is the kind of problem-solving I would like to bring to [Target Studio]. My portfolio is linked below.',
    sampleBody: 'At [Previous Studio], I handled concept development, 3D visualisation in SketchUp and V-Ray, working drawings in AutoCAD and vendor coordination for residential projects. I prepared material schedules and cost estimates and visited sites to ensure execution matched drawings, which reduced on-site revisions. I enjoy translating a client\'s lifestyle into functional, well-detailed spaces.',
    sampleClosing: 'I would love to walk you through my portfolio and discuss how I can contribute to [Target Studio]\'s upcoming projects. Thank you for your time.',
    faqs: [
      { q: 'Do interior designers need a cover letter if they have a portfolio?', a: 'A short cover letter still helps: it explains your fit with the studio\'s style and guides the reader to your best work.' },
      { q: 'What format should an interior designer\'s portfolio be in?', a: 'A concise PDF or web portfolio with 5–8 strongest projects, each showing the brief, your role, plans and finished images.' },
    ],
  },
  'pharmacist': {
    dos: [
      'State your registration status and licence details as required in India',
      'Specify your setting: retail, hospital, clinical, industry or regulatory',
      'Mention dispensing accuracy, patient counselling and inventory management',
      'Reference your knowledge of drug interactions and pharmacovigilance where relevant',
    ],
    donts: [
      'Don\'t omit registration — it is a basic requirement',
      'Don\'t include patient-identifiable information in examples',
      'Don\'t make clinical claims beyond your scope of practice',
      'Avoid generic "dedicated to healthcare" statements without examples',
    ],
    keyPoints: [
      'Your professional setting and volume handled',
      'Patient counselling and safety record',
      'Inventory, expiry and compliance management',
      'Software used: pharmacy management or hospital information systems',
    ],
    sampleOpening: 'As a registered pharmacist with two years of hospital pharmacy experience, I am applying for the Pharmacist position at [Target Hospital] to support safe, accurate medication dispensing.',
    sampleBody: 'At [Previous Hospital], I dispensed prescriptions for inpatient and outpatient departments, verified doses and flagged potential interactions to prescribing doctors. I managed stock rotation to minimise expiry losses and maintained records in line with regulatory requirements. I also counselled patients on correct medicine use and storage.',
    sampleClosing: 'I would welcome the chance to contribute to [Target Hospital]\'s pharmacy team and to discuss my experience further. Thank you for your consideration.',
    faqs: [
      { q: 'What should a pharmacist mention in a cover letter?', a: 'Registration, work setting, dispensing and counselling experience, compliance knowledge and any systems you use.' },
      { q: 'Can a fresher pharmacist write a strong cover letter?', a: 'Yes. Emphasise internships, training, projects, knowledge of regulations and your readiness to work in a regulated environment.' },
    ],
  },
  'embedded-systems-engineer': {
    dos: [
      'Name microcontrollers and platforms: ARM Cortex-M, STM32, ESP32, Raspberry Pi',
      'State languages and tools: C, C++, RTOS, debuggers, oscilloscopes',
      'Describe a product or prototype you took from design to working firmware',
      'Mention protocols: I2C, SPI, UART, CAN',
    ],
    donts: [
      'Don\'t list hardware you have only read about',
      'Don\'t skip constraints such as memory, power and real-time requirements',
      'Don\'t describe academic work without your specific contribution',
      'Avoid generic claims about "problem-solving"',
    ],
    keyPoints: [
      'A firmware project with real constraints and outcomes',
      'Debugging methods using hardware tools',
      'Testing and validation practices',
      'Cross-team work with hardware and software engineers',
    ],
    sampleOpening: 'I developed firmware in C for an STM32-based sensor node that ran for months on battery by careful sleep-mode design — the sort of constrained-resource engineering I would like to do at [Target Company].',
    sampleBody: 'At [Previous Company], I wrote device drivers for I2C and SPI peripherals, integrated an RTOS for task scheduling and used an oscilloscope and logic analyser to debug timing issues. I wrote unit tests for hardware-independent modules and documented interfaces for the hardware team. I enjoy working close to the hardware and finding efficient solutions.',
    sampleClosing: 'I would value the opportunity to discuss your embedded products and how I can contribute. Thank you for your time.',
    faqs: [
      { q: 'What should an embedded systems engineer put in a cover letter?', a: 'The platforms, languages and protocols you work with, plus a concrete project that shows how you handled real constraints.' },
      { q: 'Should I attach project links?', a: 'Yes. A GitHub repository, demo video or documented hardware build helps verify your skills.' },
    ],
  },
  'ios-developer': {
    dos: [
      'Mention Swift, SwiftUI/UIKit and architecture patterns such as MVVM',
      'Link App Store apps or TestFlight builds you contributed to',
      'Cite metrics: crash-free rate, rating, downloads or startup time improvements',
      'Show familiarity with Apple\'s Human Interface Guidelines and release process',
    ],
    donts: [
      'Don\'t claim App Store apps you didn\'t work on',
      'Don\'t overlook testing, accessibility and device compatibility',
      'Don\'t list outdated stacks without mentioning current ones',
      'Avoid vague phrases like "passionate about Apple products"',
    ],
    keyPoints: [
      'An app or feature you shipped and its impact',
      'Architecture and testing approach',
      'Handling App Store review and release cycles',
      'Collaboration with designers and API teams',
    ],
    sampleOpening: 'After migrating our app\'s onboarding flow to SwiftUI and fixing a startup bottleneck, our crash-free sessions improved noticeably — the quality focus I want to bring to [Target Company]\'s iOS team.',
    sampleBody: 'At [Previous Company], I built features in Swift using MVVM, integrated REST APIs with Combine and wrote unit tests with XCTest. I handled release builds through TestFlight and resolved App Store review feedback. I paid attention to accessibility, using Dynamic Type and VoiceOver labels, and worked with designers to match platform conventions.',
    sampleClosing: 'I would be happy to share my apps and discuss how I can help [Target Company] deliver a polished iOS experience. Thank you for your consideration.',
    faqs: [
      { q: 'Should an iOS developer include App Store links in a cover letter?', a: 'Yes, if you contributed to them, and state your role precisely. Live apps are strong proof of experience.' },
      { q: 'Is SwiftUI knowledge expected in iOS developer applications?', a: 'Many modern JDs mention it, but UIKit remains common in existing codebases. Mention both honestly according to your experience.' },
    ],
  },
  'sales-executive': {
    dos: [
      'Lead with your target achievement, e.g. percentage of monthly or quarterly target met',
      'Specify product, customer type and territory',
      'Mention your selling process: lead generation, follow-up, closing and CRM updates',
      'Show resilience and learning from lost deals',
    ],
    donts: [
      'Don\'t claim results you can\'t verify',
      'Don\'t focus on call volume without conversions',
      'Don\'t use clichés like "target-driven go-getter" without proof',
      'Avoid negative remarks about previous employers',
    ],
    keyPoints: [
      'Target versus achievement across periods',
      'Customer segment and product knowledge',
      'Relationship-building and follow-up discipline',
      'Willingness for field work or travel if required',
    ],
    sampleOpening: 'In my last role selling to retail distributors across [City], I met or exceeded my monthly target in most months — and I am eager to bring the same follow-through to the Sales Executive role at [Target Company].',
    sampleBody: 'At [Previous Company], I managed a territory of 60 active accounts, planned weekly visit schedules and recorded every interaction in our CRM. By following up quickly on enquiries and offering product demonstrations, I converted a larger share of qualified leads. I learned to listen closely to customer objections and tailor my pitch to each retailer\'s needs.',
    sampleClosing: 'I would welcome a conversation about how I can help [Target Company] grow in my territory. Thank you for your time.',
    faqs: [
      { q: 'Can freshers apply for sales executive roles with a cover letter?', a: 'Yes. Highlight communication skills, internships, campus or part-time sales exposure and willingness to learn and travel.' },
      { q: 'What numbers should a sales executive include?', a: 'Target versus achievement, number of accounts or leads handled, conversion rate and revenue contribution, if you can state them accurately.' },
    ],
  },
};
