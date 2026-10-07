import type { AtsGuideData } from '@/lib/atsGuideData';

const commonSections = ['Work Experience', 'Education'];

function rules(extra: string[]): string[] {
  return [
    'Use a single-column layout — tables and text boxes are read out of order by most ATS parsers',
    'Name sections with standard labels ("Work Experience", "Education", "Skills") so the parser can classify them',
    'Submit a text-based PDF or .docx — never a scanned image — and follow the format named in the job posting',
    ...extra,
  ];
}

export const atsGuideDataMore: Record<string, AtsGuideData> = {
  'full-stack-developer': {
    atsKeywords: ['Full Stack Developer', 'React', 'Node.js', 'Express', 'TypeScript', 'JavaScript', 'MongoDB', 'PostgreSQL', 'REST API', 'GraphQL', 'Docker', 'AWS', 'Git', 'CI/CD', 'MERN', 'Next.js', 'Redis', 'Microservices'],
    mustHaveSections: ['Technical Skills (frontend / backend / database / DevOps)', 'Work Experience', 'Projects', 'Education'],
    formattingRules: rules([
      'Group skills by layer (Frontend, Backend, Database, DevOps) in a plain-text Skills section',
      'Put GitHub and live project URLs as plain text, not as icons',
    ]),
    commonAtsFailures: [
      'Writing only "MERN stack" without listing MongoDB, Express, React and Node.js individually',
      'Showing skill levels with progress bars or star ratings — ATS cannot read graphics',
      'Using "Full Stack Engineer" as your title when the posting says "Full Stack Developer" — titles are matched literally',
      'Leaving the database and cloud skills only inside project descriptions instead of the Skills section',
    ],
    keywordTips: [
      'Mirror the exact spelling in the job description: "Node.js" vs "NodeJS", "PostgreSQL" vs "Postgres"',
      'List both frontend and backend frameworks the posting names — requisitions often filter on both sides',
      'Add testing and DevOps terms (Jest, Docker, CI/CD) when the posting lists them',
      'Keep the exact job title from the posting in your headline if it honestly describes you',
    ],
    faqs: [
      { q: 'How do I list MERN stack skills for ATS?', a: 'Write the abbreviation once and spell out every component: "MERN (MongoDB, Express.js, React, Node.js)". ATS tools match literal strings, so a recruiter searching for "MongoDB" will not find a CV that only says "MERN".' },
      { q: 'Should a full stack developer CV be one page?', a: 'Freshers and developers with under five years of experience should aim for one page. Experienced developers can use two pages, provided the most relevant stack and recent roles appear on the first page, where parsers and recruiters focus first.' },
      { q: 'Do project links help with ATS?', a: 'Links are not scored by ATS, but a plain-text GitHub or portfolio URL survives parsing and gives the human reviewer something to open after your CV passes the keyword screen.' },
    ],
  },
  'react-developer': {
    atsKeywords: ['React Developer', 'React.js', 'TypeScript', 'JavaScript', 'Next.js', 'Redux', 'Hooks', 'Context API', 'HTML5', 'CSS3', 'Tailwind CSS', 'REST API', 'GraphQL', 'Jest', 'React Testing Library', 'Webpack', 'Git', 'Responsive Design', 'Web Performance'],
    mustHaveSections: ['Technical Skills', 'Work Experience', 'Projects', 'Education'],
    formattingRules: rules([
      'List the React ecosystem (state management, routing, testing, build tools) as separate skill items',
      'Mention the React version or Next.js version only if the posting asks for it',
    ]),
    commonAtsFailures: [
      'Writing "ReactJS" when the posting says "React.js" — include the variants the posting uses',
      'Listing only "frontend development" without naming React, TypeScript or the state library',
      'Hiding testing tools (Jest, React Testing Library, Cypress) that many postings treat as required',
      'Using a creative two-column layout that scrambles the order of your skills and experience',
    ],
    keywordTips: [
      'Include both "React" and "React.js" if the job post uses either',
      'Name state management tools individually: Redux Toolkit, Zustand, Context API',
      'Add performance terms the posting mentions, such as "code splitting", "lazy loading" or "Core Web Vitals"',
      'Place TypeScript in the Skills section even if you also mention it in bullets',
    ],
    faqs: [
      { q: 'What ATS keywords matter most for a React developer CV?', a: 'React, TypeScript, JavaScript, Next.js, Redux, HTML/CSS, REST/GraphQL APIs, testing tools and Git are the most common required terms. Use the exact names from the job description and place them in a dedicated Skills section as well as in experience bullets.' },
      { q: 'Should I list React and React.js separately?', a: 'If the posting uses both spellings, include both once. Otherwise mirror the posting. This is a literal-match issue rather than a ranking trick.' },
      { q: 'Does a portfolio link replace a projects section?', a: 'No. ATS cannot follow links, so describe two or three projects in text with the stack used and the outcome, and add the link as a plain-text extra.' },
    ],
  },
  'ios-developer': {
    atsKeywords: ['iOS Developer', 'Swift', 'SwiftUI', 'UIKit', 'Objective-C', 'Xcode', 'Combine', 'Core Data', 'REST API', 'MVVM', 'Git', 'App Store', 'TestFlight', 'XCTest', 'CocoaPods', 'Swift Package Manager', 'Push Notifications', 'CI/CD'],
    mustHaveSections: ['Technical Skills', 'Work Experience', 'Apps / Projects', 'Education'],
    formattingRules: rules([
      'List published apps by name with an App Store link as plain text',
      'Group skills into Languages, Frameworks, Architecture and Tools',
    ]),
    commonAtsFailures: [
      'Writing "iOS app development" without naming Swift, SwiftUI or UIKit',
      'Omitting architecture terms (MVVM, Clean Architecture) that postings screen for',
      'Using screenshots of apps inside the CV — ATS reads none of it',
      'Not stating Objective-C when maintaining legacy apps is part of the role',
    ],
    keywordTips: [
      'Name both SwiftUI and UIKit if you have used both — postings often require one or the other',
      'Include release-pipeline terms such as TestFlight, App Store Connect and Fastlane when you used them',
      'Spell out persistence and networking choices: Core Data, URLSession, Alamofire',
      'State minimum iOS versions you have supported if the posting mentions them',
    ],
    faqs: [
      { q: 'Should I list SwiftUI and UIKit?', a: 'Yes, if you have worked with both. Many Indian product companies maintain UIKit codebases while moving new screens to SwiftUI, and postings often list either as acceptable.' },
      { q: 'How do I show published apps to an ATS?', a: 'Add an "Apps" or "Projects" section with the app name, your role, technologies used and a plain-text App Store link. Do not paste screenshots.' },
      { q: 'Is Objective-C still worth listing?', a: 'Only if you have genuinely used it. Include it when the posting mentions legacy code, since the literal keyword is often a filter.' },
    ],
  },
  'machine-learning-engineer': {
    atsKeywords: ['Machine Learning Engineer', 'Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Deep Learning', 'NLP', 'Computer Vision', 'MLOps', 'MLflow', 'Docker', 'Kubernetes', 'AWS SageMaker', 'Feature Engineering', 'Model Deployment', 'SQL', 'Spark', 'A/B Testing', 'Airflow'],
    mustHaveSections: ['Technical Skills', 'Work Experience', 'Projects', 'Education', 'Publications / Certifications (if any)'],
    formattingRules: rules([
      'Separate "ML frameworks", "MLOps / deployment" and "Data tools" in the Skills section',
      'State model metrics and scale in plain text (for example "improved F1 from 0.71 to 0.83 on 2M records")',
    ]),
    commonAtsFailures: [
      'Only describing research or notebooks — postings for ML engineers screen for production deployment terms',
      'Listing "AI" and "ML" generically without naming frameworks such as PyTorch or TensorFlow',
      'Omitting MLOps tooling (MLflow, Kubeflow, Airflow, Docker) that distinguishes engineer roles from analyst roles',
      'Embedding model-architecture diagrams or charts that the parser cannot read',
    ],
    keywordTips: [
      'Match the problem domain in the posting: NLP, recommendation systems, computer vision, forecasting',
      'Include both "Machine Learning" and "ML" once each',
      'Name cloud ML services you used (SageMaker, Vertex AI, Azure ML) rather than just "cloud"',
      'Pair every major tool with a measurable result in the experience bullets',
    ],
    faqs: [
      { q: 'How is an ML engineer CV different from a data scientist CV for ATS?', a: 'ATS matches keywords, so the difference comes from terms: ML engineer postings emphasise deployment, pipelines, MLOps and latency, while data scientist postings emphasise statistics, experimentation and analysis. Lead with whichever set matches the posting.' },
      { q: 'Should I include Kaggle or research papers?', a: 'Yes, as plain text under Projects or Publications with the result or ranking. They support credibility once a human reads the CV, but they do not replace production experience keywords.' },
      { q: 'Which ATS keywords matter for ML roles in India?', a: 'Python, PyTorch or TensorFlow, scikit-learn, SQL, Docker, cloud ML services and MLOps tools appear most often. Use the exact names in the job description.' },
    ],
  },
  'embedded-systems-engineer': {
    atsKeywords: ['Embedded Systems Engineer', 'C', 'C++', 'RTOS', 'FreeRTOS', 'ARM Cortex-M', 'Firmware', 'CAN bus', 'I2C', 'SPI', 'UART', 'Microcontroller', 'STM32', 'Embedded Linux', 'Device Drivers', 'Debugging', 'JTAG', 'AUTOSAR', 'IoT'],
    mustHaveSections: ['Technical Skills', 'Work Experience', 'Projects', 'Education', 'Certifications'],
    formattingRules: rules([
      'List microcontroller families, protocols and toolchains as separate plain-text items',
      'Spell out protocols once alongside their abbreviation, e.g. "Controller Area Network (CAN)"',
    ]),
    commonAtsFailures: [
      'Writing "embedded programming" without naming C, C++ or the target MCU family',
      'Leaving out protocols (CAN, SPI, I2C, UART) that postings list as required skills',
      'Showing hardware block diagrams or circuit images inside the CV',
      'Not naming the RTOS or standards (AUTOSAR, MISRA-C) used in automotive and medical roles',
    ],
    keywordTips: [
      'Name each MCU or SoC family you have shipped firmware for',
      'Include tool names such as Keil, IAR, GDB, oscilloscope and logic analyser',
      'Mention domain standards (automotive, medical, industrial) the posting requires',
      'Quantify memory, boot time or power improvements in bullets',
    ],
    faqs: [
      { q: 'Which keywords matter for an embedded engineer CV?', a: 'C and C++, RTOS, the MCU family, communication protocols (CAN, SPI, I2C, UART), debugging tools and domain standards. Use the same names the job description uses.' },
      { q: 'Should I list hardware skills?', a: 'Yes, as text: oscilloscope, logic analyser, schematic review, PCB bring-up. Many embedded postings treat hardware debugging as a required skill.' },
      { q: 'Is a projects section needed for freshers?', a: 'Yes. Firmware projects on named boards (STM32, Arduino, Raspberry Pi) with the peripherals and protocols used give the parser the keywords your limited work history cannot.' },
    ],
  },
  'network-engineer': {
    atsKeywords: ['Network Engineer', 'CCNA', 'CCNP', 'Cisco', 'Routing', 'Switching', 'OSPF', 'BGP', 'VLAN', 'MPLS', 'Firewall', 'VPN', 'LAN/WAN', 'SD-WAN', 'Juniper', 'Palo Alto', 'Fortinet', 'Network Monitoring', 'TCP/IP', 'Wireshark'],
    mustHaveSections: ['Certifications', 'Technical Skills', 'Work Experience', 'Education'],
    formattingRules: rules([
      'Put certifications (CCNA, CCNP, JNCIA) near the top, written exactly as the issuer names them',
      'List vendors and platforms in plain-text groups: Cisco, Juniper, Palo Alto, Fortinet',
    ]),
    commonAtsFailures: [
      'Writing "networking" without naming the protocols or vendors involved',
      'Showing certification badges as images instead of text',
      'Leaving out the certification expiry or level (Associate, Professional)',
      'Not stating network scale (sites, devices, users) in experience bullets',
    ],
    keywordTips: [
      'Write certification names in full and abbreviated form: "Cisco Certified Network Associate (CCNA)"',
      'Name routing protocols individually: OSPF, BGP, EIGRP',
      'Include monitoring tools you have used, such as SolarWinds, PRTG or Nagios',
      'Match the posting on firewall and security vendors',
    ],
    faqs: [
      { q: 'Where should CCNA go on a network engineer CV?', a: 'Put it in a dedicated Certifications section near the top and also in your Skills section. ATS and recruiters filter on certification strings, so write it exactly as the issuer does.' },
      { q: 'How do I show scale in a network CV?', a: 'State the number of sites, devices and users you supported, for example "managed 40-branch MPLS WAN with 1,200 users". Numbers survive parsing and help the human reviewer.' },
      { q: 'Do I need a projects section?', a: 'Freshers should include lab or project work (GNS3, Packet Tracer, home lab) with the protocols configured. Experienced engineers can skip it and use bullets instead.' },
    ],
  },
  'sap-consultant': {
    atsKeywords: ['SAP Consultant', 'SAP S/4HANA', 'SAP FICO', 'SAP MM', 'SAP SD', 'SAP ABAP', 'SAP HCM', 'SAP PP', 'SAP WM', 'SAP Fiori', 'Implementation', 'Rollout', 'Blueprint', 'ASAP Methodology', 'SAP Activate', 'UAT', 'Data Migration', 'Support', 'Configuration'],
    mustHaveSections: ['Professional Summary (module + years)', 'SAP Skills / Modules', 'Work Experience (project-wise)', 'Certifications', 'Education'],
    formattingRules: rules([
      'State your SAP module and years of experience in the headline, for example "SAP FICO Consultant — 6 years"',
      'Describe each project with client industry, SAP version, your role and implementation phase',
    ]),
    commonAtsFailures: [
      'Using "SAP" alone without naming the module (FICO, MM, SD, ABAP)',
      'Not distinguishing ECC from S/4HANA experience',
      'Skipping implementation-phase terms (blueprint, realisation, go-live, hypercare) that postings use',
      'Leaving SAP certifications out of a searchable Certifications section',
    ],
    keywordTips: [
      'Name modules and sub-modules precisely: FI-AP, FI-AR, CO-PA, MM-PUR',
      'Include "S/4HANA" and "ECC" as separate terms and state which you have implemented',
      'List lifecycle roles: implementation, rollout, support, migration',
      'Write certification codes and names exactly as SAP issues them',
    ],
    faqs: [
      { q: 'How should I list SAP modules for ATS?', a: 'List each module as a separate item in a Skills section and repeat the primary module in your headline and in project bullets. ATS matches literal strings such as "SAP FICO" and "SAP MM".' },
      { q: 'Does S/4HANA experience matter for ATS?', a: 'Yes. Many current postings filter on S/4HANA specifically. State whether your experience is greenfield, brownfield or migration, and name the version.' },
      { q: 'Should project details be included?', a: 'Yes. Give client industry, SAP version, team size, your responsibilities and the outcome for each project. Recruiters and ATS both look for implementation versus support experience.' },
    ],
  },
  'scrum-master': {
    atsKeywords: ['Scrum Master', 'Agile', 'Scrum', 'Sprint Planning', 'Retrospective', 'Backlog Grooming', 'Jira', 'Confluence', 'SAFe', 'Kanban', 'CSM', 'PSM', 'Velocity', 'Stakeholder Management', 'Agile Coaching', 'Impediment Removal', 'Release Planning', 'Product Owner'],
    mustHaveSections: ['Certifications', 'Work Experience', 'Skills', 'Education'],
    formattingRules: rules([
      'List certifications (CSM, PSM I/II, SAFe) with the issuing body and year in plain text',
      'State team size and number of teams coached in each role',
    ]),
    commonAtsFailures: [
      'Writing "Agile" only in the summary and not in a Skills or Certifications section',
      'Leaving out tools such as Jira or Azure DevOps that postings screen for',
      'Describing ceremonies but no outcomes like velocity, predictability or cycle-time improvement',
      'Listing certifications as badges or images',
    ],
    keywordTips: [
      'Include both "Scrum Master" and "Agile Coach" if your experience covers both',
      'Name frameworks separately: Scrum, Kanban, SAFe, LeSS',
      'Add measurable outcomes: velocity, defect leakage, release frequency',
      'Mention the domains you worked in (BFSI, e-commerce, healthcare) when relevant',
    ],
    faqs: [
      { q: 'Do I need CSM or PSM on my CV?', a: 'Many Indian IT postings list CSM or PSM as required or preferred. Put the exact certification name, issuer and year in a Certifications section so ATS can match it.' },
      { q: 'How do I show impact as a Scrum Master?', a: 'Use measurable team outcomes: velocity trend, predictability, release frequency, reduced carry-over or cycle time. Avoid only listing ceremonies you facilitated.' },
      { q: 'Should SAFe be listed separately?', a: 'Yes. SAFe is a distinct keyword in enterprise postings. List it with your level, for example "SAFe 6 Scrum Master (SSM)", only if you hold it.' },
    ],
  },
  'business-development-manager': {
    atsKeywords: ['Business Development Manager', 'B2B Sales', 'Lead Generation', 'Pipeline Management', 'Client Acquisition', 'Revenue Growth', 'CRM', 'Salesforce', 'HubSpot', 'Negotiation', 'Account Management', 'Strategic Partnerships', 'Market Research', 'Proposal', 'Cold Outreach', 'Quota Achievement', 'SaaS Sales'],
    mustHaveSections: ['Professional Summary', 'Work Experience', 'Key Achievements', 'Skills', 'Education'],
    formattingRules: rules([
      'Open experience bullets with revenue, pipeline or quota numbers in plain text',
      'List CRM tools by name in a Skills section',
    ]),
    commonAtsFailures: [
      'Using vague claims such as "increased sales" with no figures',
      'Not naming CRM and sales-engagement tools the posting requires',
      'Omitting the sales motion (B2B, B2C, enterprise, SMB, inside sales, field sales)',
      'Putting key achievements in a sidebar or text box that ATS skips',
    ],
    keywordTips: [
      'Quantify with INR or percentage figures: revenue closed, pipeline built, quota attainment',
      'Name the segment and ticket size: enterprise, mid-market, SMB',
      'Include both "Business Development" and "Sales" if the posting uses both',
      'List CRM tools individually: Salesforce, HubSpot, Zoho CRM',
    ],
    faqs: [
      { q: 'How should a BDM CV show results?', a: 'Lead bullets with numbers: revenue generated, deals closed, pipeline created, quota attainment and growth percentage. Plain-text figures are both parsed by ATS and read quickly by hiring managers.' },
      { q: 'Which keywords do BDM postings in India use?', a: 'Lead generation, B2B sales, pipeline management, client acquisition, CRM, negotiation, account management and revenue growth are the most common. Mirror the exact terms in the posting.' },
      { q: 'Should I list the CRM tools I used?', a: 'Yes. CRM and sales tools are common hard filters. Put them in a Skills section and mention them in bullets with the outcome they supported.' },
    ],
  },
  'sales-executive': {
    atsKeywords: ['Sales Executive', 'Field Sales', 'Inside Sales', 'Lead Generation', 'Target Achievement', 'Customer Relationship', 'Cold Calling', 'Negotiation', 'CRM', 'Channel Sales', 'Retail Sales', 'Product Demo', 'Market Expansion', 'Account Retention', 'Territory Management', 'MS Excel'],
    mustHaveSections: ['Professional Summary', 'Work Experience', 'Key Achievements', 'Skills', 'Education'],
    formattingRules: rules([
      'Put target-versus-achievement figures in your first bullet for each role',
      'State territory, product line and customer type for each position',
    ]),
    commonAtsFailures: [
      'Writing "met targets" without the target figure or percentage achieved',
      'Not naming the sales type: field, inside, channel, retail or B2B',
      'Leaving languages and territory coverage out when postings require them',
      'Using a photo-heavy template that adds noise to parsing',
    ],
    keywordTips: [
      'Quote target attainment as a percentage, for example "achieved 118% of quarterly target"',
      'Name the territory or cities covered',
      'Include languages spoken if the role is regional',
      'List CRM and reporting tools you used, including MS Excel',
    ],
    faqs: [
      { q: 'How do I write a sales executive CV for ATS?', a: 'Use a single-column layout, a clear Work Experience section and numeric achievements. Include the sales type, territory, product and the target you hit.' },
      { q: 'Do freshers need a different approach?', a: 'Yes. Freshers should highlight internships, campus drives, college fests or part-time roles with measurable outcomes, and include communication and language skills as text.' },
      { q: 'Should I list languages?', a: 'Yes, for regional or field roles. Languages are often listed in the posting and are matched literally.' },
    ],
  },
  'chartered-accountant': {
    atsKeywords: ['Chartered Accountant', 'CA', 'Statutory Audit', 'Internal Audit', 'Direct Tax', 'Indirect Tax', 'GST', 'IFRS', 'Ind AS', 'Financial Reporting', 'Tally', 'SAP FICO', 'Due Diligence', 'Budgeting', 'Compliance', 'MS Excel', 'Taxation', 'Financial Analysis'],
    mustHaveSections: ['Professional Qualifications (CA, year, attempt)', 'Work Experience', 'Skills', 'Education', 'Articleship'],
    formattingRules: rules([
      'State your CA qualification, membership status and year clearly at the top',
      'Include articleship firm and industries audited in a dedicated section',
    ]),
    commonAtsFailures: [
      'Writing "CA" without "Chartered Accountant" — postings use both',
      'Omitting standards (Ind AS, IFRS, SA) and tax areas (GST, direct tax)',
      'Not listing ERP and accounting software (SAP, Tally, Oracle)',
      'Leaving out industry exposure that postings filter on (BFSI, manufacturing, FMCG)',
    ],
    keywordTips: [
      'Use both "Chartered Accountant" and "CA" once each',
      'Name audit types separately: statutory, internal, tax, forensic',
      'Add finance systems: SAP FICO, Oracle, Tally, Power BI',
      'Mention entity size or turnover handled where you can state it',
    ],
    faqs: [
      { q: 'How do I show a CA qualification on an ATS CV?', a: 'Write "Chartered Accountant (ICAI) — Member since 20XX" in your headline or qualifications section. Include "CA Final" or "CA Inter" for candidates still qualifying, written exactly that way.' },
      { q: 'Does articleship need its own section?', a: 'Yes for freshers and recently qualified CAs. List the firm, duration and industries and audits handled, since this is your primary experience evidence.' },
      { q: 'Which keywords matter for Big 4 applications?', a: 'Audit, assurance, Ind AS, IFRS, tax, GST, due diligence and risk advisory, along with ERP tools. Match the service line named in the posting.' },
    ],
  },
  'investment-banker': {
    atsKeywords: ['Investment Banking', 'M&A', 'Financial Modelling', 'DCF', 'LBO', 'Valuation', 'Pitch Book', 'Due Diligence', 'Capital Markets', 'ECM', 'DCM', 'Excel', 'Bloomberg', 'Comparable Company Analysis', 'IPO', 'Deal Execution', 'CFA'],
    mustHaveSections: ['Education', 'Work Experience / Deal Experience', 'Skills & Certifications', 'Leadership / Extracurriculars'],
    formattingRules: rules([
      'Use a conservative one-page format; keep education first for analysts and associates',
      'List deals by type, size and your role, without breaching client confidentiality',
    ]),
    commonAtsFailures: [
      'Describing deals without type or size (M&A, IPO, debt raise, INR/USD value)',
      'Omitting modelling terms (DCF, LBO, comps) that are screening keywords',
      'Not stating tools such as Excel, Bloomberg or CapIQ',
      'Using decorative templates that depart from the standard banking format',
    ],
    keywordTips: [
      'Quantify deal size in INR crore or USD million where it can be disclosed',
      'Name the product group: M&A, ECM, DCM, leveraged finance',
      'List CFA level or other qualifications exactly as issued',
      'Include sector coverage (BFSI, consumer, technology)',
    ],
    faqs: [
      { q: 'How should deals appear on an investment banking CV?', a: 'List each deal with type, approximate size and your contribution (modelling, due diligence, pitch). Keep client names off if they are confidential, and use a descriptor instead.' },
      { q: 'What format do banks expect?', a: 'A one-page, single-column, black-and-white CV with education and work experience clearly labelled. This is also what ATS parses most reliably.' },
      { q: 'Does CFA belong on the CV?', a: 'Yes. Write "CFA Level II Candidate" or "CFA Charterholder" exactly, in a Certifications section, since it is a common filter.' },
    ],
  },
  'logistics-manager': {
    atsKeywords: ['Logistics Manager', 'Supply Chain', 'Warehouse Management', 'WMS', 'Fleet Management', 'Last-Mile Delivery', 'Inventory Control', 'Transportation', '3PL', 'Cost Optimisation', 'Route Planning', 'Vendor Management', 'SAP', 'KPI', 'Customs', 'Import/Export', 'SLA'],
    mustHaveSections: ['Professional Summary', 'Work Experience', 'Skills', 'Certifications', 'Education'],
    formattingRules: rules([
      'State scale in plain figures: fleet size, warehouses, daily shipments',
      'List systems used (WMS, TMS, SAP) in a Skills section',
    ]),
    commonAtsFailures: [
      'Not stating the scale of operations (vehicles, sites, shipments, headcount)',
      'Leaving out WMS/TMS or ERP tools the posting requires',
      'Using general phrases such as "improved efficiency" without a percentage',
      'Omitting domain: e-commerce, FMCG, cold chain, 3PL',
    ],
    keywordTips: [
      'Quantify cost, on-time delivery and inventory accuracy improvements',
      'Name logistics type: first-mile, line-haul, last-mile, reverse logistics',
      'List systems by name: SAP, Oracle WMS, Manhattan',
      'Include relevant certifications such as Six Sigma or APICS',
    ],
    faqs: [
      { q: 'What should a logistics manager CV include?', a: 'Operational scale, KPIs improved (on-time delivery, cost per shipment, inventory accuracy), systems used and domain. Use numbers wherever possible.' },
      { q: 'Which logistics keywords do Indian postings use?', a: 'Supply chain, warehouse management, fleet management, last-mile delivery, 3PL, WMS, inventory control and cost optimisation are the most common. Match the posting.' },
      { q: 'Is a certification needed?', a: 'Not always, but Six Sigma, APICS or a supply-chain diploma written exactly as issued helps with filters when postings list them.' },
    ],
  },
  'pharmacist': {
    atsKeywords: ['Pharmacist', 'B.Pharm', 'D.Pharm', 'M.Pharm', 'Pharmacy Registration', 'Dispensing', 'Clinical Pharmacy', 'Inventory Management', 'Drug Interaction', 'Prescription Verification', 'Patient Counselling', 'Pharmacovigilance', 'GMP', 'Retail Pharmacy', 'Hospital Pharmacy', 'Regulatory Compliance'],
    mustHaveSections: ['Registration & Qualifications', 'Work Experience', 'Skills', 'Education', 'Internships / Training'],
    formattingRules: rules([
      'State your State Pharmacy Council registration status and number if the posting asks for it',
      'List the settings you worked in: retail, hospital, clinical, manufacturing, regulatory',
    ]),
    commonAtsFailures: [
      'Omitting registration status, which is often a mandatory filter',
      'Writing "pharmacy work" without the setting (hospital, retail, pharma company)',
      'Leaving out software used such as pharmacy management or HIS systems',
      'Not listing internship and training for freshers',
    ],
    keywordTips: [
      'Write the degree in the same form as the posting: "B.Pharm" and "Bachelor of Pharmacy"',
      'Name functional areas: dispensing, counselling, inventory, pharmacovigilance, regulatory affairs',
      'Include compliance terms such as GMP or GDP where relevant',
      'Add languages spoken for patient-facing roles',
    ],
    faqs: [
      { q: 'Should I include my pharmacy registration?', a: 'Yes. State registration status (and number if comfortable) because it is commonly a mandatory requirement and ATS filters on it.' },
      { q: 'How do I write a fresher pharmacist CV?', a: 'Lead with degree and registration, then internships, hospital or retail training, and any projects. Include skills as text such as dispensing, counselling and inventory.' },
      { q: 'Which keywords matter for hospital pharmacist roles?', a: 'Clinical pharmacy, prescription verification, drug interaction checks, patient counselling, inventory and regulatory compliance. Use the posting\'s wording.' },
    ],
  },
  'interior-designer': {
    atsKeywords: ['Interior Designer', 'AutoCAD', 'SketchUp', '3ds Max', 'V-Ray', 'Revit', 'Space Planning', 'Mood Boards', 'Material Selection', 'BOQ', 'Site Supervision', 'Client Presentation', 'Residential Design', 'Commercial Design', 'Lumion', 'Photoshop', 'Vendor Coordination'],
    mustHaveSections: ['Software Skills', 'Work Experience', 'Projects', 'Education', 'Portfolio Link'],
    formattingRules: rules([
      'Keep the CV text-based and put visuals in a separate portfolio linked in plain text',
      'Describe each project with type, area, location, your role and software used',
    ]),
    commonAtsFailures: [
      'Using an image-heavy CV where the text is flattened into graphics',
      'Not naming design software individually',
      'Leaving out project scale (sq ft, budget) and type (residential, hospitality, retail)',
      'Embedding portfolio images instead of linking to them',
    ],
    keywordTips: [
      'Name each tool: AutoCAD, SketchUp, 3ds Max, V-Ray, Revit',
      'State project type and area, for example "3,500 sq ft residential, Pune"',
      'Include site supervision and vendor coordination if you did them',
      'Add the portfolio URL as plain text',
    ],
    faqs: [
      { q: 'Should an interior designer CV be visual?', a: 'Keep the CV itself clean and text-based so ATS can read it, and link to a separate visual portfolio. Image-heavy CVs often parse as blank or scrambled.' },
      { q: 'What software should I list?', a: 'AutoCAD, SketchUp, 3ds Max, V-Ray, Revit, Photoshop and Lumion as applicable, each as a separate skill item.' },
      { q: 'How do I describe projects?', a: 'Give project type, size, location, your role (concept, drawings, execution) and the tools used. Numbers such as area and budget help.' },
    ],
  },
};
