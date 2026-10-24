import type { CoverLetterData } from '@/lib/coverLetterData';

function role(
  name: string,
  d: {
    dos: string[];
    donts: string[];
    keyPoints: string[];
    sampleOpening: string;
    sampleBody: string;
    sampleClosing: string;
    faqs: Array<{ q: string; a: string }>;
  },
): CoverLetterData {
  return {
    ...d,
    donts: [
      ...d.donts,
      `Don't send one generic ${name} letter to every employer — name the company and the exact role`,
    ],
  };
}

export const coverLetterDataMore: Record<string, CoverLetterData> = {
  'full-stack-developer': role('full stack developer', {
    dos: [
      'Name the stack from the job description in your first two lines (for example React, Node.js, PostgreSQL)',
      'Describe one feature you shipped end to end — UI, API and database',
      'Link your GitHub or a live project as plain text',
      'Mention how you work with designers, QA and product managers',
    ],
    donts: [
      'Don\'t list every framework you have touched — pick the three the posting asks for',
      'Avoid "jack of all trades" language; show depth in at least one layer',
    ],
    keyPoints: [
      'One end-to-end feature with a measurable result (load time, conversion, users)',
      'Comfort moving between frontend and backend as priorities change',
      'Deployment and testing habits: CI/CD, code review, automated tests',
    ],
    sampleOpening: 'When I rebuilt the checkout flow at [Company] — React front end, Node.js API, PostgreSQL schema — page load dropped by [X]% and completed orders rose by [Y]%. That end-to-end ownership is what I would bring to [Target Company]\'s full stack team.',
    sampleBody: 'Over [N] years I have shipped features across the whole stack: building REST and GraphQL APIs, designing relational schemas, and writing responsive interfaces in React and TypeScript. I deploy through CI/CD pipelines on AWS, write unit and integration tests, and review teammates\' pull requests. My GitHub ([link]) shows [project] which I built and deployed myself.',
    sampleClosing: 'I would value a conversation about the product roadmap and how I could help the team ship faster. Thank you for your time and consideration.',
    faqs: [
      { q: 'Should a full stack developer write a cover letter?', a: 'It is optional at most service companies but helpful at startups and product companies, where a short note showing the feature you owned end to end often separates similar profiles.' },
      { q: 'What should I highlight: frontend or backend?', a: 'Match the job description. If the posting leans on one side, lead with that and show the other as supporting breadth.' },
    ],
  }),
  'machine-learning-engineer': role('machine learning engineer', {
    dos: [
      'Lead with a model or pipeline that reached production, not a notebook experiment',
      'State the business metric it moved, with the baseline you improved on',
      'Name frameworks and MLOps tools from the posting (PyTorch, TensorFlow, MLflow, Docker)',
      'Link a paper, GitHub repository or Kaggle profile',
    ],
    donts: [
      'Don\'t list algorithms without saying what problem you solved',
      'Avoid buzzwords such as "cutting-edge AI" with no example behind them',
    ],
    keyPoints: [
      'Production deployment experience: serving, monitoring, retraining',
      'Data scale and quality problems you handled',
      'Collaboration with data engineers and product teams',
    ],
    sampleOpening: 'The recommendation model I deployed at [Company] improved click-through by [X]% over the previous baseline and now serves [N] requests a day. I would like to bring the same production focus to [Target Company]\'s machine learning team.',
    sampleBody: 'My work covers the full lifecycle: feature engineering on [data scale] records, training in PyTorch, packaging with Docker, and monitoring drift after release. I track experiments in MLflow and work closely with data engineers to keep pipelines reliable. A recent project, [project name], is documented on my GitHub ([link]).',
    sampleClosing: 'I would welcome the chance to discuss the modelling problems your team is working on. Thank you for considering my application.',
    faqs: [
      { q: 'Is a cover letter useful for ML roles?', a: 'Yes when it names a specific model you took to production and the metric it moved. Generic enthusiasm for AI adds nothing; a concrete deployed result does.' },
      { q: 'Should I mention research papers?', a: 'Mention them briefly if relevant to the role, and link them. For industry roles, production impact usually carries more weight than publication count.' },
    ],
  }),
  'react-developer': role('React developer', {
    dos: [
      'Name React-specific skills the posting asks for: hooks, state management, Next.js, TypeScript',
      'Mention a performance or accessibility improvement with a number',
      'Link a live app or repository',
      'Show how you collaborate with designers on component systems',
    ],
    donts: [
      'Don\'t just say "proficient in React" — show something you built',
      'Avoid listing every library in the JavaScript ecosystem',
    ],
    keyPoints: [
      'A component library, dashboard or app you built and maintained',
      'Performance work: bundle size, rendering, Core Web Vitals',
      'Testing approach with Jest and React Testing Library',
    ],
    sampleOpening: 'Reducing the initial bundle of [Company]\'s dashboard by [X]% through code splitting and memoisation taught me how much front-end performance shapes the user experience — the same focus I see in [Target Company]\'s product.',
    sampleBody: 'I build React and TypeScript applications using hooks, Redux Toolkit and Next.js, and I write component tests with Jest and React Testing Library. At [Company] I created a shared component library used by [N] teams and improved accessibility to meet WCAG standards. My portfolio is at [link].',
    sampleClosing: 'I would be glad to walk you through my work and discuss how I can help your front-end team. Thank you for your time.',
    faqs: [
      { q: 'What makes a React developer cover letter stand out?', a: 'A specific shipped interface with a measurable result — faster load, higher conversion, fewer bugs — plus a link someone can open.' },
      { q: 'How long should it be?', a: 'Three short paragraphs, under 250 words.' },
    ],
  }),
  'ios-developer': role('iOS developer', {
    dos: [
      'Name Swift, SwiftUI or UIKit, and the iOS versions you have supported',
      'Link your App Store apps and mention download or rating figures if you have them',
      'Mention release experience: TestFlight, App Store review, crash monitoring',
      'Note architecture patterns you use, such as MVVM',
    ],
    donts: [
      'Don\'t describe apps without naming your own contribution',
      'Avoid listing Objective-C unless the posting needs it',
    ],
    keyPoints: [
      'At least one app live on the App Store',
      'Performance, offline support or accessibility work',
      'Familiarity with Combine, async/await, Core Data or networking layers',
    ],
    sampleOpening: 'I built and shipped [App Name], a Swift and SwiftUI app now live on the App Store with [N] downloads — experience I would like to apply to [Target Company]\'s iOS product.',
    sampleBody: 'I develop in Swift using MVVM, SwiftUI and UIKit, integrate REST APIs, and handle persistence with Core Data. I have managed releases through TestFlight and the App Store review process and use Crashlytics to track stability. At [Company] I reduced crash rate by [X]% by fixing memory issues found in Instruments.',
    sampleClosing: 'I would appreciate the opportunity to demo my apps and discuss your roadmap. Thank you for considering my application.',
    faqs: [
      { q: 'Should I link my App Store apps?', a: 'Yes. A live app is the strongest proof of skill an iOS developer can offer; include the link in the letter and on your CV.' },
      { q: 'Is SwiftUI knowledge required?', a: 'Increasingly, but check the posting. Many teams still maintain UIKit code, so mention both if you know them.' },
    ],
  }),
  'embedded-systems-engineer': role('embedded systems engineer', {
    dos: [
      'Name microcontrollers, RTOS and protocols you have worked with (STM32, FreeRTOS, CAN, I2C, SPI)',
      'Describe one product or prototype you took from design to working hardware',
      'Mention debugging tools such as oscilloscope, logic analyser and JTAG',
      'State the industry domain: automotive, IoT, medical or industrial',
    ],
    donts: [
      'Don\'t list languages without saying what you built in C or C++',
      'Avoid vague claims about "hardware knowledge" without a project',
    ],
    keyPoints: [
      'Firmware you wrote and the constraints you worked under (memory, power, timing)',
      'Standards and processes: MISRA C, ISO 26262, code reviews',
      'Cross-functional work with hardware and test teams',
    ],
    sampleOpening: 'I wrote the firmware for [Product] on an STM32 platform under a [N] KB memory budget and took it from prototype to production — the kind of constrained, reliability-driven work I see in [Target Company]\'s embedded team.',
    sampleBody: 'My experience spans C and C++ firmware, FreeRTOS, and communication protocols including CAN, SPI, I2C and UART. I debug with oscilloscopes, logic analysers and JTAG, and follow MISRA C guidelines. At [Company] I worked with hardware and QA engineers to bring up new boards and resolve timing issues before release.',
    sampleClosing: 'I would welcome a discussion about the products your team is building. Thank you for your time.',
    faqs: [
      { q: 'What should an embedded engineer cover letter focus on?', a: 'One concrete product or prototype, the hardware platform and constraints, and your role in it. Hiring managers want evidence you can work close to the hardware.' },
      { q: 'Should I mention hobby projects?', a: 'Yes for freshers — Arduino, Raspberry Pi or STM32 projects with a repository link show initiative when professional experience is limited.' },
    ],
  }),
  'business-development-manager': role('business development manager', {
    dos: [
      'Open with revenue or pipeline you generated, in rupees or percentage terms',
      'Name the industries and deal sizes you have worked with',
      'Show your full cycle: prospecting, pitching, negotiating, closing',
      'Mention CRM tools such as Salesforce or HubSpot',
    ],
    donts: [
      'Don\'t claim "excellent communication skills" without a won deal to prove it',
      'Avoid listing targets without saying whether you met them',
    ],
    keyPoints: [
      'Quota or target attainment over time',
      'Key accounts or partnerships you won',
      'Your approach to building a pipeline from cold outreach',
    ],
    sampleOpening: 'In [N] years at [Company] I built a B2B pipeline worth Rs. [X] crore and closed [Y] enterprise accounts — results I want to repeat in [Target Company]\'s growth team.',
    sampleBody: 'I handle the full sales cycle: researching accounts, running discovery calls, preparing proposals and negotiating contracts. I exceeded my annual target by [X]% in [year], and I maintain forecasts in Salesforce. I have worked with clients in [industries] and enjoy building long-term partnerships rather than one-off sales.',
    sampleClosing: 'I would welcome the opportunity to discuss your growth plans and how I can contribute. Thank you for your consideration.',
    faqs: [
      { q: 'Do business development roles expect a cover letter?', a: 'Often yes, because it shows how you write and sell. Keep it results-first and specific to the company\'s market.' },
      { q: 'Should I include sales targets?', a: 'Include actual attainment against target. A number you can defend is stronger than a claim.' },
    ],
  }),
  'chartered-accountant': role('chartered accountant', {
    dos: [
      'State your CA qualification, attempt and rank if notable',
      'Name specialisations: audit, taxation, GST, IFRS or Ind AS, FP&A',
      'Quantify scope: audit size, entities handled, savings identified',
      'Mention software such as Tally, SAP and advanced Excel',
    ],
    donts: [
      'Don\'t restate articleship details already on your CV',
      'Avoid generic claims of "attention to detail" without an example',
    ],
    keyPoints: [
      'Articleship firm and the types of engagements handled',
      'Compliance expertise: GST, TDS, statutory and internal audit',
      'Experience in the target sector — banking, manufacturing, technology',
    ],
    sampleOpening: 'As a qualified Chartered Accountant with [N] years in statutory audit and GST compliance, I have supported clients with turnover up to Rs. [X] crore — experience that matches the finance role at [Target Company].',
    sampleBody: 'At [Firm/Company] I led audits across [N] entities, prepared financial statements under Ind AS and handled GST and TDS filings. I identified Rs. [X] in tax savings through restructuring, and use SAP and advanced Excel for reporting. I enjoy turning financial data into clear advice for management.',
    sampleClosing: 'I would value the chance to discuss how my background fits your finance team. Thank you for your time.',
    faqs: [
      { q: 'Is a cover letter needed for CA jobs?', a: 'For Big 4 and large corporates, campus and portal applications rarely require one, but a short targeted letter helps for lateral and senior finance roles.' },
      { q: 'What should I emphasise as a fresher CA?', a: 'Articleship exposure, the engagements you worked on, exam attempts and software skills. Keep claims factual.' },
    ],
  }),
  'investment-banker': role('investment banker', {
    dos: [
      'Name the transactions or deal types you worked on, within confidentiality limits',
      'Show modelling skills: DCF, LBO, comparable analysis',
      'Explain why this bank and this group, with specifics',
      'Mention academic credentials and certifications such as CFA',
    ],
    donts: [
      'Don\'t disclose confidential client details',
      'Avoid saying you want "exposure to finance" — show readiness for the work',
    ],
    keyPoints: [
      'Deal experience or relevant internships',
      'Valuation and financial modelling strength',
      'Ability to work long hours with accuracy under pressure',
    ],
    sampleOpening: 'During my internship at [Firm] I built the valuation model supporting a Rs. [X] crore [sector] transaction, which sharpened my interest in the [Group] team at [Target Bank].',
    sampleBody: 'I have built DCF, LBO and trading-comparable models, drafted pitch books and prepared company profiles under tight deadlines. I am [pursuing/holding] [MBA/CFA] and follow [sector] markets closely. I am comfortable with Excel, PowerPoint and data providers such as Bloomberg and Capital IQ.',
    sampleClosing: 'I would welcome the opportunity to discuss how I can contribute to your team. Thank you for your consideration.',
    faqs: [
      { q: 'How long should an investment banking cover letter be?', a: 'One page, with three tight paragraphs: why the firm, why you, and what you offer.' },
      { q: 'Should I mention specific deals?', a: 'Only public deals or those you are permitted to discuss. Use anonymised descriptions otherwise.' },
    ],
  }),
  'logistics-manager': role('logistics manager', {
    dos: [
      'Quantify throughput, on-time delivery rate or cost savings',
      'Name systems such as SAP, WMS and TMS',
      'Describe the scale: fleet size, warehouses, shipments per month',
      'Mention compliance, safety and vendor management',
    ],
    donts: [
      'Don\'t describe duties without outcomes',
      'Avoid unexplained jargon; state results plainly',
    ],
    keyPoints: [
      'Cost reduction or delivery performance improvements',
      'Warehouse, transport and last-mile experience',
      'Team size managed and vendor networks handled',
    ],
    sampleOpening: 'By renegotiating carrier contracts and rerouting freight, I cut [Company]\'s logistics cost by [X]% while lifting on-time delivery to [Y]% — the operational improvement I aim to deliver at [Target Company].',
    sampleBody: 'I manage warehousing, transport and vendor partners across [N] locations, handling [volume] shipments a month with a team of [N]. I use SAP and WMS tools to track inventory and have introduced KPIs that reduced dispatch delays. I am well versed in GST and e-way bill compliance.',
    sampleClosing: 'I would appreciate the opportunity to discuss your supply chain priorities. Thank you for your time.',
    faqs: [
      { q: 'What metrics belong in a logistics cover letter?', a: 'On-time delivery rate, cost per shipment, inventory accuracy and order cycle time, each with a before and after figure.' },
      { q: 'Do I need to mention software?', a: 'Yes, name the ERP, WMS or TMS tools you use, matching the job posting.' },
    ],
  }),
  'network-engineer': role('network engineer', {
    dos: [
      'List certifications such as CCNA or CCNP up front',
      'Describe network size: sites, devices, users, uptime',
      'Name technologies from the posting: BGP, OSPF, VLAN, firewalls, SD-WAN',
      'Mention troubleshooting and incident response examples',
    ],
    donts: [
      'Don\'t list vendors without saying what you configured',
      'Avoid certificate lists with no hands-on context',
    ],
    keyPoints: [
      'Uptime or incident resolution improvements',
      'Design or migration projects you delivered',
      'Security and monitoring tooling experience',
    ],
    sampleOpening: 'As a CCNA-certified network engineer maintaining [N] sites at [X]% uptime, I resolved recurring link failures by redesigning routing — reliability work that fits [Target Company]\'s infrastructure team.',
    sampleBody: 'I configure and troubleshoot Cisco and Juniper routers and switches, work with BGP, OSPF and VLANs, and manage firewalls and VPNs. I migrated [N] branch offices to SD-WAN, cutting connectivity cost by [X]%, and use SolarWinds for monitoring. I document changes and follow ITIL practices.',
    sampleClosing: 'I would welcome the chance to discuss your network environment. Thank you for considering my application.',
    faqs: [
      { q: 'Which certifications matter most?', a: 'CCNA and CCNP are widely recognised in India; add vendor certificates relevant to the posting such as Palo Alto or Fortinet.' },
      { q: 'Can freshers apply without experience?', a: 'Yes. Lab projects, internships and a certification with hands-on practice show readiness.' },
    ],
  }),
  pharmacist: role('pharmacist', {
    dos: [
      'State your registration with the State Pharmacy Council and qualification',
      'Describe your setting: hospital, retail, clinical or pharma industry',
      'Mention dispensing volume, inventory control and compliance',
      'Show patient counselling and safety focus',
    ],
    donts: [
      'Don\'t omit your registration number or status',
      'Avoid claims about clinical outcomes you cannot support',
    ],
    keyPoints: [
      'Registration and qualification (B.Pharm, D.Pharm, M.Pharm, Pharm.D)',
      'Experience with prescriptions, drug interactions and stock management',
      'Regulatory knowledge: Drugs and Cosmetics Act, GMP',
    ],
    sampleOpening: 'As a registered pharmacist with [N] years in hospital dispensing, I have supported safe medication use for [N] patients a day, and I would like to bring that care to [Target Hospital/Company].',
    sampleBody: 'I verify prescriptions, check for drug interactions, counsel patients and maintain inventory in line with the Drugs and Cosmetics Act. I reduced expired stock by [X]% through tighter tracking and am comfortable with pharmacy software and documentation audits.',
    sampleClosing: 'I would be grateful for the opportunity to discuss the role. Thank you for your time and consideration.',
    faqs: [
      { q: 'Should I include my pharmacy registration?', a: 'Yes. State your registration status in the letter or CV header; employers must verify it.' },
      { q: 'What if I am a fresh graduate?', a: 'Highlight internships, hospital training, projects and your registration application status.' },
    ],
  }),
  'sales-executive': role('sales executive', {
    dos: [
      'Open with targets achieved, in numbers',
      'Mention your territory, product and customer type',
      'Show lead generation and follow-up habits',
      'Name CRM tools and any awards or rankings',
    ],
    donts: [
      'Don\'t say you are a "people person" without results',
      'Avoid inflating figures — interviewers will ask',
    ],
    keyPoints: [
      'Target achievement percentage and revenue',
      'Number of clients acquired or retained',
      'Strong communication in the languages needed for the territory',
    ],
    sampleOpening: 'I exceeded my sales target by [X]% for [N] consecutive quarters at [Company], and I want to bring the same drive to [Target Company]\'s sales team.',
    sampleBody: 'I generate leads through field visits, calls and referrals, present products to decision makers and follow up until closure. In [year] I acquired [N] new accounts worth Rs. [X] and maintained a [Y]% retention rate. I record every interaction in the CRM so the pipeline stays accurate.',
    sampleClosing: 'I would appreciate a chance to discuss how I can contribute to your sales goals. Thank you for your time.',
    faqs: [
      { q: 'Do sales executives need a cover letter?', a: 'A brief one helps, mainly for companies hiring through email. Make it numbers-led and short.' },
      { q: 'Can a fresher write a strong sales cover letter?', a: 'Yes — use internship results, college fundraising or campus sales as proof of persuasion and persistence.' },
    ],
  }),
  'sap-consultant': role('SAP consultant', {
    dos: [
      'Name your SAP modules (FICO, MM, SD, ABAP, HANA) and versions',
      'Describe implementation or support projects, with phases covered',
      'Mention go-lives, number of users and sites',
      'Include certifications and S/4HANA exposure',
    ],
    donts: [
      'Don\'t list modules you have only studied',
      'Avoid unexplained SAP acronyms for non-technical readers',
    ],
    keyPoints: [
      'End-to-end implementation versus support experience',
      'Functional spec, configuration, testing and training roles',
      'Industry domain, such as manufacturing or retail',
    ],
    sampleOpening: 'I led the SAP FICO configuration for a [N]-user S/4HANA go-live at [Company], reducing month-end close time by [X] days — implementation experience that fits [Target Company]\'s transformation programme.',
    sampleBody: 'I work in SAP [module], covering blueprinting, configuration, UAT and post-go-live support. I have delivered [N] projects across [industries] and coordinated with business users and ABAP developers to resolve gaps. I hold [certification] and am familiar with SAP S/4HANA migration approaches.',
    sampleClosing: 'I would value the opportunity to discuss your SAP landscape. Thank you for your consideration.',
    faqs: [
      { q: 'Which SAP details should be in a cover letter?', a: 'Modules, version (ECC or S/4HANA), project phases you handled and the scale of the rollout.' },
      { q: 'Is SAP certification necessary?', a: 'Not always, but it helps with consulting firms. Real implementation experience weighs more.' },
    ],
  }),
  'scrum-master': role('Scrum Master', {
    dos: [
      'Name your certifications (CSM, PSM, SAFe) and years of experience',
      'Share team size, sprint length and delivery improvements',
      'Describe how you remove blockers and coach teams',
      'Mention tools such as Jira and Confluence',
    ],
    donts: [
      'Don\'t describe the role as only running ceremonies',
      'Avoid agile jargon with no outcome attached',
    ],
    keyPoints: [
      'Velocity, cycle time or predictability improvements',
      'Coaching product owners and stakeholders',
      'Scaling frameworks and distributed team experience',
    ],
    sampleOpening: 'Coaching a team of [N] developers at [Company], I improved sprint predictability from [X]% to [Y]% in [N] months — the kind of team outcomes I hope to deliver at [Target Company].',
    sampleBody: 'As a certified Scrum Master I facilitate planning, reviews and retrospectives, track flow metrics in Jira, and work with product owners to keep the backlog healthy. I have supported distributed teams across time zones and introduced working agreements that reduced blockers.',
    sampleClosing: 'I would be glad to discuss how I can support your teams. Thank you for your time.',
    faqs: [
      { q: 'What do hiring managers want from a Scrum Master?', a: 'Evidence that teams delivered better because of you: measurable flow improvements, resolved impediments and stronger collaboration.' },
      { q: 'Does certification matter?', a: 'CSM or PSM is commonly required for screening; experience with real teams decides the interview.' },
    ],
  }),
  'interior-designer': role('interior designer', {
    dos: [
      'Link your portfolio first, then describe two projects',
      'Name software: AutoCAD, SketchUp, 3ds Max, V-Ray',
      'Describe project type, size and your role from concept to execution',
      'Mention client, vendor and site coordination',
    ],
    donts: [
      'Don\'t attach heavy image files to the letter',
      'Avoid describing taste without showing a finished project',
    ],
    keyPoints: [
      'Residential, commercial or hospitality focus',
      'Budget and timeline management',
      'Design process from brief to handover',
    ],
    sampleOpening: 'My [3,500 sq ft] residential project in [city], from concept sketches to site handover, is the kind of end-to-end design work I would like to bring to [Target Studio]. The full portfolio is at [link].',
    sampleBody: 'I prepare concept boards, 2D drawings in AutoCAD and 3D visualisations in SketchUp and V-Ray, and coordinate with contractors and vendors on site. I have managed budgets up to Rs. [X] lakh and delivered projects on schedule while keeping clients involved at each stage.',
    sampleClosing: 'I would love to walk you through my portfolio. Thank you for your time and consideration.',
    faqs: [
      { q: 'Should the cover letter include images?', a: 'No. Link to an online portfolio and keep the letter text-based so it reads cleanly on any device or system.' },
      { q: 'What can a fresher include?', a: 'Academic projects, internship work and software skills, with a portfolio link showing process and finished renders.' },
    ],
  }),
};
