import type { AtsGuideData } from '@/lib/atsGuideData';

// Qualitative ATS guidance for roles that previously had a CV page but no ATS guide.
// Deliberately contains no salary or statistical claims — keywords, sections and formatting only.

const universalFormatting = [
  'Use a single-column layout — tables, text boxes and multi-column templates are parsed out of order by most ATS',
  'Keep contact details in the body of the document, not the Word header/footer where parsers often skip them',
  'Use standard section headings (Work Experience, Education, Skills) rather than creative labels',
  'Submit a text-based PDF or .docx — never a scanned image — unless the job post asks for a specific format',
];

export const atsGuideDataExtra: Record<string, AtsGuideData> = {
  'full-stack-developer': {
    atsKeywords: ['Full Stack Developer', 'React', 'Node.js', 'JavaScript', 'TypeScript', 'PostgreSQL', 'MongoDB', 'REST API', 'GraphQL', 'AWS', 'Docker', 'Git', 'CI/CD', 'Microservices', 'Agile'],
    mustHaveSections: ['Technical Skills (grouped: Frontend / Backend / Database / DevOps)', 'Work Experience', 'Projects', 'Education', 'Certifications'],
    formattingRules: [
      ...universalFormatting,
      'Split skills into Frontend, Backend, Databases and DevOps lines so both halves of "full stack" are matched',
      'Put your GitHub and portfolio URLs as plain text, not icons',
    ],
    commonAtsFailures: [
      'Listing only frontend or only backend tools — requisitions for full stack roles match on both',
      'Writing "JS" or "Node" without the full name — ATS matches literal strings',
      'Hiding the tech stack inside project descriptions with no dedicated skills section',
      'Using a skill-bar or rating graphic for proficiency — it is invisible to parsers',
      'Leaving the headline as "Developer" instead of the exact title in the job post',
    ],
    keywordTips: [
      'Mirror the stack in the JD exactly: "React.js" vs "React" and "Node.js" vs "NodeJS" can count as different strings',
      'Name the database(s) and cloud service explicitly rather than "SQL databases" or "cloud platforms"',
      'Use the phrase "full stack" in your headline and summary at least once',
      'Pair each major tool with an outcome in a bullet so keyword and context both appear',
    ],
    faqs: [
      { q: 'What ATS keywords should a full stack developer include?', a: 'Take the stack from the job post and mirror it exactly — typically a frontend framework (React, Angular, Vue), a backend runtime (Node.js, Java, Python), a database (PostgreSQL, MongoDB), REST or GraphQL APIs, a cloud provider, Docker, Git and CI/CD. Include "Full Stack Developer" in your headline.' },
      { q: 'Should a full stack developer CV list frontend and backend separately?', a: 'Yes. Grouping skills under Frontend, Backend, Databases and DevOps makes it easy for a parser to extract each keyword and for a recruiter to scan the range quickly.' },
    ],
  },
  'react-developer': {
    atsKeywords: ['React Developer', 'React.js', 'JavaScript', 'TypeScript', 'Next.js', 'Redux', 'React Query', 'Hooks', 'HTML5', 'CSS3', 'Tailwind CSS', 'REST API', 'GraphQL', 'Jest', 'React Testing Library', 'Webpack', 'Git'],
    mustHaveSections: ['Technical Skills', 'Work Experience', 'Projects (with live links)', 'Education'],
    formattingRules: [
      ...universalFormatting,
      'Write "React.js (React)" once so both spellings are matched',
      'Link live demos and the GitHub repo as visible plain-text URLs',
    ],
    commonAtsFailures: [
      'Listing "ReactJS" only when the JD says "React.js" — literal match gaps cost ranking',
      'Omitting state-management tools (Redux, Zustand, Context) that appear in most JDs',
      'No mention of testing tools — many requisitions filter on Jest or React Testing Library',
      'Icon-only skill logos in a creative template',
      'A "Frontend Engineer" headline when the job post says "React Developer"',
    ],
    keywordTips: [
      'Include the version-agnostic term and the ecosystem: React, Hooks, Next.js, TypeScript',
      'Name performance and accessibility work explicitly: "code splitting", "lazy loading", "WCAG"',
      'Use the exact state and data-fetching library names from the JD',
      'Add build and tooling terms (Vite, Webpack) only if you have used them',
    ],
    faqs: [
      { q: 'What ATS keywords matter most for a React developer CV?', a: 'React.js, JavaScript, TypeScript, Hooks, Redux or your state library, Next.js if relevant, REST/GraphQL, HTML/CSS, a testing library, and Git. Match the spelling used in the specific job description.' },
      { q: 'Do portfolio links help a React CV pass ATS?', a: 'ATS parsers read them as plain text, which is fine, and recruiters use them after the ATS stage. Put them in the contact block as visible URLs.' },
    ],
  },
  'ios-developer': {
    atsKeywords: ['iOS Developer', 'Swift', 'SwiftUI', 'UIKit', 'Objective-C', 'Xcode', 'Core Data', 'Combine', 'MVVM', 'REST API', 'Firebase', 'XCTest', 'App Store', 'TestFlight', 'CI/CD', 'Git'],
    mustHaveSections: ['Technical Skills', 'Work Experience', 'Apps Published (App Store links)', 'Education', 'Certifications'],
    formattingRules: [
      ...universalFormatting,
      'List shipped apps with App Store URLs as plain text',
      'State the minimum iOS version and Swift version you have worked with',
    ],
    commonAtsFailures: [
      'Writing "Apple development" instead of "iOS Developer" and "Swift"',
      'Leaving out UIKit or SwiftUI — JDs usually require one or both by name',
      'No mention of architecture patterns (MVVM, VIPER, Clean Architecture)',
      'Skills shown as logos or a rating bar',
      'Omitting release terms such as App Store submission and TestFlight',
    ],
    keywordTips: [
      'Include both Swift and Objective-C if you know both — legacy codebases still ask for it',
      'Use framework names exactly: Core Data, Core Animation, Combine, async/await',
      'Mention unit and UI testing tools (XCTest, XCUITest) by name',
      'Add "Agile" and "Jira" if the JD lists them',
    ],
    faqs: [
      { q: 'What ATS keywords should an iOS developer use?', a: 'iOS Developer, Swift, SwiftUI, UIKit, Xcode, Core Data, Combine, MVVM, REST APIs, XCTest, App Store release, and CI/CD tools. Mirror the JD for the exact framework list.' },
      { q: 'Should I list App Store apps on an iOS CV?', a: 'Yes — as a dedicated section with the app name, your role and a plain-text link. It gives recruiters instant proof after the ATS stage.' },
    ],
  },
  'machine-learning-engineer': {
    atsKeywords: ['Machine Learning Engineer', 'Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'MLOps', 'MLflow', 'Feature Engineering', 'Model Deployment', 'Docker', 'Kubernetes', 'AWS SageMaker', 'SQL', 'Spark', 'NLP', 'Computer Vision'],
    mustHaveSections: ['Technical Skills (ML / Data / MLOps)', 'Work Experience', 'Projects or Publications', 'Education', 'Certifications'],
    formattingRules: [
      ...universalFormatting,
      'Group skills into ML frameworks, data tools and MLOps/deployment',
      'List publications and Kaggle profiles as plain-text links',
    ],
    commonAtsFailures: [
      'Using "AI/ML" only — spell out "Machine Learning" as well as the abbreviation',
      'Listing algorithms without the production side (deployment, monitoring, MLOps)',
      'Omitting the framework names the JD asks for (PyTorch vs TensorFlow)',
      'Putting research papers in an image or two-column block',
      'No SQL or data-pipeline keywords although most roles require them',
    ],
    keywordTips: [
      'Include both the method and the tool: "gradient boosting (XGBoost)", "transformer models (PyTorch)"',
      'Add deployment vocabulary: model serving, batch inference, A/B testing, monitoring',
      'Use "Machine Learning Engineer" in the headline if that is the target title, not "Data Scientist"',
      'Name cloud ML services only if you have used them',
    ],
    faqs: [
      { q: 'How is an ML engineer CV different for ATS from a data scientist CV?', a: 'ATS matches literal keywords. ML engineer requisitions lean on production terms — MLOps, model deployment, pipelines, Docker, Kubernetes — while data scientist ones lean on analysis, statistics and experimentation. Lead with whichever the job post uses.' },
      { q: 'Which ML keywords should I always include?', a: 'Python, your deep-learning framework, Scikit-learn, SQL, feature engineering, model deployment and a cloud platform — each only if you have genuinely used it.' },
    ],
  },
  'embedded-systems-engineer': {
    atsKeywords: ['Embedded Systems Engineer', 'Embedded C', 'C++', 'ARM Cortex-M', 'RTOS', 'FreeRTOS', 'STM32', 'CAN Bus', 'SPI', 'I2C', 'UART', 'Firmware', 'Device Drivers', 'JTAG', 'Embedded Linux', 'Bootloader', 'AUTOSAR'],
    mustHaveSections: ['Technical Skills (Languages / MCUs / Protocols / Tools)', 'Work Experience', 'Projects', 'Education', 'Certifications'],
    formattingRules: [
      ...universalFormatting,
      'List microcontroller families and protocols as separate lines so each is matched',
      'Write protocols in full on first use: "Controller Area Network (CAN)"',
    ],
    commonAtsFailures: [
      'Writing only "Embedded" without "Embedded C" or "Firmware"',
      'Not naming the MCU or SoC families used (STM32, NXP, TI)',
      'Skipping debug tooling such as JTAG, oscilloscope or logic analyser',
      'Protocols mentioned in prose but not in a skills list',
      'Automotive standards (AUTOSAR, ISO 26262) missing for automotive roles',
    ],
    keywordTips: [
      'Match the RTOS and toolchain names in the JD (FreeRTOS, Zephyr, Keil, IAR)',
      'Include both "firmware" and "embedded software" — employers use both',
      'Add domain context: automotive, IoT, medical devices, consumer electronics',
      'Name hardware bring-up and debugging tasks explicitly',
    ],
    faqs: [
      { q: 'What ATS keywords does an embedded engineer need?', a: 'Embedded C/C++, your MCU families, RTOS, communication protocols (SPI, I2C, UART, CAN), firmware, device drivers, debugging tools and any domain standard such as AUTOSAR. Mirror the job post.' },
      { q: 'Should I list hardware tools on my CV?', a: 'Yes — oscilloscopes, logic analysers, JTAG debuggers and development boards are searched terms and show hands-on experience.' },
    ],
  },
  'network-engineer': {
    atsKeywords: ['Network Engineer', 'CCNA', 'CCNP', 'Cisco', 'Routing and Switching', 'BGP', 'OSPF', 'MPLS', 'VLAN', 'VPN', 'Firewall', 'Palo Alto', 'Fortinet', 'SD-WAN', 'Network Monitoring', 'ITIL', 'LAN/WAN'],
    mustHaveSections: ['Certifications (near the top)', 'Technical Skills', 'Work Experience', 'Education'],
    formattingRules: [
      ...universalFormatting,
      'Put certifications such as CCNA/CCNP in a dedicated section and in the summary',
      'Write each certification with the vendor and number if the JD does',
    ],
    commonAtsFailures: [
      'Certifications buried at the end or shown as badge images',
      'Using "networking" only, without protocol names (BGP, OSPF, MPLS)',
      'Not naming vendors (Cisco, Juniper, Palo Alto, Fortinet)',
      'Omitting monitoring and ITIL terms that support roles screen for',
      'Skipping shift or on-call experience that NOC roles filter on',
    ],
    keywordTips: [
      'List vendor and product line: "Cisco Catalyst", "Palo Alto NGFW"',
      'Include both "LAN/WAN" and the specific technologies under it',
      'Name monitoring tools you have used (SolarWinds, Nagios, PRTG)',
      'State the scale of network you managed in sites or devices, only if accurate',
    ],
    faqs: [
      { q: 'How important are certifications on a network engineer CV for ATS?', a: 'Very — recruiters and ATS filters search for CCNA, CCNP and similar by name. Put them in a dedicated section near the top and repeat the most relevant one in your summary.' },
      { q: 'Which keywords should a network engineer include?', a: 'Routing and switching, BGP, OSPF, MPLS, VLANs, VPN, firewalls, SD-WAN, monitoring tools, ITIL, and the vendors you have worked with.' },
    ],
  },
  'sap-consultant': {
    atsKeywords: ['SAP Consultant', 'SAP S/4HANA', 'SAP ECC', 'SAP FICO', 'SAP MM', 'SAP SD', 'SAP ABAP', 'SAP Activate', 'ASAP Methodology', 'Fiori', 'Blueprint', 'Configuration', 'UAT', 'Go-Live', 'Data Migration', 'Support'],
    mustHaveSections: ['SAP Modules and Expertise', 'Work Experience (with implementation phase)', 'Certifications', 'Education'],
    formattingRules: [
      ...universalFormatting,
      'Name the module in your headline: "SAP FICO Consultant", not just "SAP Consultant"',
      'State project type per role: implementation, rollout, upgrade or support',
    ],
    commonAtsFailures: [
      'Listing "SAP" without the module — requisitions are module-specific',
      'Stating ECC only when the JD asks for S/4HANA',
      'No implementation lifecycle terms (Blueprint, Realise, Deploy, Hypercare)',
      'Certifications shown as images',
      'Not separating functional and technical skills',
    ],
    keywordTips: [
      'Write module and sub-areas: "SAP FICO — GL, AP, AR, Asset Accounting"',
      'Include the methodology (SAP Activate or ASAP) the JD names',
      'Mention integration points between modules where relevant',
      'Add industry vertical experience: manufacturing, retail, BFSI',
    ],
    faqs: [
      { q: 'What should an SAP consultant put in the headline for ATS?', a: 'The exact module and level, such as "SAP FICO Consultant — S/4HANA", matching the requisition title. Generic "SAP" will not rank for module-specific searches.' },
      { q: 'Do SAP certifications matter for ATS?', a: 'They are searched terms. List each with its full name in a certifications section.' },
    ],
  },
  'scrum-master': {
    atsKeywords: ['Scrum Master', 'Agile', 'Scrum', 'SAFe', 'Kanban', 'Sprint Planning', 'Retrospective', 'Backlog Refinement', 'Jira', 'Confluence', 'Velocity', 'Agile Coaching', 'PSM', 'CSM', 'Stakeholder Management', 'Release Planning'],
    mustHaveSections: ['Certifications (PSM / CSM / SAFe)', 'Work Experience', 'Skills', 'Education'],
    formattingRules: [
      ...universalFormatting,
      'List certifications with the issuing body spelled out and the abbreviation in brackets',
      'State team size and number of teams per role',
    ],
    commonAtsFailures: [
      'Certification acronyms only, with no full name',
      'Describing ceremonies but never naming the framework (Scrum, SAFe, Kanban)',
      'Omitting Jira or the tracking tool the JD lists',
      'Mixing "Project Manager" and "Scrum Master" titles inconsistently',
      'No metrics vocabulary such as velocity, cycle time or predictability',
    ],
    keywordTips: [
      'Use both "Scrum Master" and "Agile Coach" only if you genuinely did both',
      'Name scaling frameworks (SAFe, LeSS) when applicable',
      'Add tooling: Jira, Azure DevOps, Confluence',
      'Mention remote and distributed team facilitation if relevant',
    ],
    faqs: [
      { q: 'Which certifications should a Scrum Master list for ATS?', a: 'List each exactly as issued — for example Professional Scrum Master (PSM), Certified ScrumMaster (CSM) or SAFe Scrum Master — in a dedicated section, with the abbreviation in brackets.' },
      { q: 'What keywords does a Scrum Master CV need?', a: 'Scrum, Agile, sprint planning, retrospectives, backlog refinement, Jira, stakeholder management and any scaling framework named in the job post.' },
    ],
  },
  'business-development-manager': {
    atsKeywords: ['Business Development Manager', 'B2B Sales', 'Lead Generation', 'Pipeline Management', 'Account Management', 'Client Acquisition', 'CRM', 'Salesforce', 'Negotiation', 'Revenue Growth', 'Strategic Partnerships', 'Proposal', 'Market Research', 'Forecasting'],
    mustHaveSections: ['Professional Summary', 'Work Experience (with revenue results)', 'Skills', 'Education'],
    formattingRules: [
      ...universalFormatting,
      'Lead experience bullets with revenue or pipeline outcomes and write numbers as digits',
      'Name your industry or vertical in the summary',
    ],
    commonAtsFailures: [
      'Writing "business development" with no B2B/B2C or industry context',
      'Omitting CRM tools named in the JD',
      'Responsibilities listed with no results',
      'Using "BD" only without the full title',
      'Missing partnership or channel terms for partnership-led roles',
    ],
    keywordTips: [
      'Mirror the JD: "enterprise sales", "inside sales", "channel partnerships"',
      'Include the sales cycle stages you handled: prospecting, demo, proposal, closure',
      'Name the CRM and prospecting tools you have used',
      'State territory or segment covered',
    ],
    faqs: [
      { q: 'What keywords should a business development manager include?', a: 'B2B sales, lead generation, pipeline management, account management, client acquisition, negotiation, CRM tool names, revenue targets and the vertical you sell into — mirrored from the job post.' },
      { q: 'Is a BD manager CV different from a sales CV for ATS?', a: 'Yes. BD requisitions add strategy and partnership terms — market entry, partnerships, proposals — on top of sales vocabulary. Use the title and terms the specific job uses.' },
    ],
  },
  'sales-executive': {
    atsKeywords: ['Sales Executive', 'Lead Generation', 'Cold Calling', 'Target Achievement', 'CRM', 'Client Acquisition', 'Negotiation', 'Territory Management', 'Upselling', 'Cross-selling', 'Customer Relationship', 'Field Sales', 'Sales Reporting', 'Channel Sales'],
    mustHaveSections: ['Professional Summary', 'Work Experience (with targets)', 'Skills', 'Education'],
    formattingRules: [
      ...universalFormatting,
      'Show target and achievement in every role as plain text',
      'State field sales vs inside sales clearly',
    ],
    commonAtsFailures: [
      'Duties without any target or achievement figure',
      'Not naming the product category or industry',
      'Missing CRM tools such as Zoho or Salesforce',
      'Using only "sales" with no field/inside/channel qualifier',
      'Languages spoken omitted — often a filter for regional roles',
    ],
    keywordTips: [
      'Include the territory and languages for regional roles',
      'Use "target achievement" or "quota attainment" with your own numbers',
      'Name channels handled: retail, distributors, direct, online',
      'Add the CRM and reporting tools you used',
    ],
    faqs: [
      { q: 'What ATS keywords should a sales executive use?', a: 'Lead generation, cold calling, target achievement, client acquisition, negotiation, CRM tool names, territory management and upselling, plus the product category from the job post.' },
      { q: 'Should a fresher sales executive list targets?', a: 'If you have internship or campus sales experience, yes. Otherwise list relevant coursework, languages and communication achievements.' },
    ],
  },
  'logistics-manager': {
    atsKeywords: ['Logistics Manager', 'Supply Chain', 'Warehouse Management', 'Fleet Management', 'Last Mile Delivery', 'WMS', 'TMS', 'Inventory Control', 'Vendor Management', 'Route Optimisation', 'Cost Reduction', 'SLA', 'Import/Export', '3PL', 'Team Management'],
    mustHaveSections: ['Professional Summary', 'Work Experience (with scale and KPIs)', 'Skills and Systems', 'Education'],
    formattingRules: [
      ...universalFormatting,
      'State operation scale: warehouses, fleet size, daily shipments, team size',
      'List WMS/TMS software by name',
    ],
    commonAtsFailures: [
      'Using "logistics" only, with no warehouse, fleet or last-mile qualifier',
      'No KPI vocabulary (OTIF, TAT, cost per shipment)',
      'Omitting systems such as SAP, WMS or TMS',
      'Import/export and customs terms missing for international roles',
      'Responsibilities listed without outcomes',
    ],
    keywordTips: [
      'Match the operation type in the JD: e-commerce, FMCG, cold chain, 3PL',
      'Include KPIs you owned, in their standard abbreviations and spelled out',
      'Mention compliance: e-way bill, GST, customs, as relevant',
      'Add vendor and carrier management terms',
    ],
    faqs: [
      { q: 'What keywords should a logistics manager include?', a: 'Supply chain, warehouse management, fleet or transport management, last-mile delivery, WMS/TMS, inventory control, vendor management, cost optimisation and the KPIs you owned.' },
      { q: 'Should I list the size of operations I managed?', a: 'Yes, where accurate — number of warehouses, vehicles or team members gives both ATS and recruiters useful context.' },
    ],
  },
  'chartered-accountant': {
    atsKeywords: ['Chartered Accountant', 'CA', 'Statutory Audit', 'Internal Audit', 'Tax Audit', 'Ind AS', 'IFRS', 'GST', 'Income Tax', 'TDS', 'Financial Reporting', 'Consolidation', 'Internal Controls', 'SAP', 'Tally', 'Transfer Pricing'],
    mustHaveSections: ['Professional Summary (with CA membership)', 'Work Experience / Articleship', 'Technical Skills', 'Education and Qualifications'],
    formattingRules: [
      ...universalFormatting,
      'Write "Chartered Accountant (ICAI)" with membership year',
      'Separate articleship from post-qualification experience',
    ],
    commonAtsFailures: [
      'Using "CA" alone — also write "Chartered Accountant"',
      'Not naming standards (Ind AS, IFRS) or taxes (GST, TDS)',
      'Omitting ERP and tools (SAP, Tally, Excel)',
      'Articleship not labelled as such',
      'Audit type not specified (statutory, internal, tax)',
    ],
    keywordTips: [
      'State the audit or finance function: audit, taxation, FP&A, controllership',
      'Name industries covered: BFSI, manufacturing, IT services',
      'Include the Big 4 or firm name exactly as written',
      'Add reporting frameworks and deadlines handled: quarterly close, MIS',
    ],
    faqs: [
      { q: 'How should a CA list qualifications for ATS?', a: 'Write "Chartered Accountant (CA), ICAI" with the year of membership, then the CA exams or other degrees. Spell out the full name as well as the abbreviation.' },
      { q: 'What keywords matter on a CA CV?', a: 'Statutory audit, internal audit, Ind AS, IFRS, GST, income tax, TDS, financial reporting, internal controls and the ERP you used.' },
    ],
  },
  'investment-banker': {
    atsKeywords: ['Investment Banking', 'M&A', 'DCF', 'LBO', 'Comparable Company Analysis', 'Financial Modelling', 'Pitch Book', 'Due Diligence', 'Capital Markets', 'ECM', 'DCM', 'Valuation', 'Excel', 'PowerPoint', 'Bloomberg', 'Transaction Execution'],
    mustHaveSections: ['Professional Summary', 'Transaction Experience', 'Work Experience', 'Education', 'Certifications (CFA / CA / MBA)'],
    formattingRules: [
      ...universalFormatting,
      'Keep to one page for analyst and associate level',
      'List transactions with type, sector and your role; disclose only what is public',
    ],
    commonAtsFailures: [
      'Using only "IB" — spell out "Investment Banking"',
      'No transaction type vocabulary (M&A, IPO, QIP, debt raise)',
      'Skipping modelling skill terms like DCF and LBO',
      'Credentials shown as images',
      'Revealing confidential client names in the CV',
    ],
    keywordTips: [
      'Name sectors covered: technology, healthcare, consumer',
      'Mention both buy-side and sell-side if applicable',
      'Use both ECM/DCM and the long forms',
      'Include databases and tools: Bloomberg, Capital IQ',
    ],
    faqs: [
      { q: 'What keywords should an investment banker include?', a: 'M&A, valuation, DCF, LBO, comparable company analysis, financial modelling, pitch books, due diligence, ECM/DCM, plus tools such as Excel, PowerPoint and Bloomberg.' },
      { q: 'How do I list deals without breaking confidentiality?', a: 'Describe the transaction type, sector and size band without naming undisclosed parties, e.g. "Sell-side advisory on a mid-market technology acquisition".' },
    ],
  },
  'pharmacist': {
    atsKeywords: ['Pharmacist', 'Registered Pharmacist', 'Dispensing', 'Prescription Verification', 'Drug Interaction', 'Patient Counselling', 'Inventory Management', 'Pharmacovigilance', 'Hospital Pharmacy', 'Retail Pharmacy', 'Regulatory Compliance', 'B.Pharm', 'D.Pharm', 'Clinical Documentation'],
    mustHaveSections: ['Registration and Qualifications (near the top)', 'Work Experience', 'Skills', 'Education', 'Training / Internship'],
    formattingRules: [
      ...universalFormatting,
      'State state pharmacy council registration number and validity',
      'Specify setting for each role: hospital, retail, manufacturing or clinical',
    ],
    commonAtsFailures: [
      'Registration details omitted or in a header',
      'Degree shown as "Pharma" instead of B.Pharm / D.Pharm / M.Pharm',
      'Not distinguishing hospital, retail and industry experience',
      'No compliance vocabulary (Schedule H, GPP, pharmacovigilance)',
      'Software skills missing (pharmacy management or billing systems)',
    ],
    keywordTips: [
      'Mirror the setting in the JD: "hospital pharmacist", "community pharmacist"',
      'Include regulatory terms relevant to your work',
      'Name counselling, stock and billing responsibilities explicitly',
      'List any CPD, internships or training with provider names',
    ],
    faqs: [
      { q: 'Should a pharmacist put registration details on the CV?', a: 'Yes — state council registration and validity near the top. Many employers and ATS filters treat it as a mandatory field.' },
      { q: 'What keywords should a pharmacist use?', a: 'Dispensing, prescription verification, drug interaction checking, patient counselling, inventory management, pharmacovigilance, regulatory compliance and the setting (hospital or retail).' },
    ],
  },
  'interior-designer': {
    atsKeywords: ['Interior Designer', 'Space Planning', 'AutoCAD', 'SketchUp', '3ds Max', 'Revit', 'V-Ray', 'Photoshop', 'BOQ', 'Material Specification', 'Mood Board', 'Site Supervision', 'Client Presentation', 'Residential', 'Commercial', 'Vendor Coordination'],
    mustHaveSections: ['Software Skills', 'Work Experience', 'Selected Projects (with portfolio link)', 'Education', 'Certifications'],
    formattingRules: [
      ...universalFormatting,
      'Keep the CV text-based and put visuals in a linked portfolio — images in the CV cannot be parsed',
      'State project type and scale (residential, commercial, area band) per project',
    ],
    commonAtsFailures: [
      'A highly visual creative CV with text baked into images',
      'Software shown as logos instead of names',
      'Portfolio link missing or as an embedded button',
      'No residential/commercial distinction',
      'BOQ and site supervision skills not mentioned',
    ],
    keywordTips: [
      'List software by full name, not just icons',
      'Include execution terms: BOQ, vendor coordination, site supervision',
      'Name styles and sectors worked in: modular kitchens, hospitality, retail',
      'Add the portfolio URL as plain text in the header block',
    ],
    faqs: [
      { q: 'Can an interior designer use a creative CV and still pass ATS?', a: 'Keep the CV itself plain and text-based and link a visual portfolio. Images and text inside graphics are invisible to parsers.' },
      { q: 'Which keywords should an interior designer include?', a: 'Space planning, AutoCAD, SketchUp, 3ds Max or Revit, V-Ray, BOQ, material specification, site supervision and the project type from the job post.' },
    ],
  },
};
