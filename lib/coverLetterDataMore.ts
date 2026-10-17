import type { CoverLetterData } from '@/lib/coverLetterData';

interface RoleSeed {
  title: string;
  proof: string;
  tools: string;
  audience: string;
  opening: string;
  body: string;
  closing: string;
  faqs: Array<{ q: string; a: string }>;
  extraDo: string;
  extraDont: string;
}

function build(seed: RoleSeed): CoverLetterData {
  return {
    dos: [
      `Open with one concrete ${seed.title.toLowerCase()} result — ${seed.proof} — instead of a generic greeting`,
      `Mirror the exact tools and terms from the job description: ${seed.tools}`,
      `Name the company and say specifically why its ${seed.audience} interests you`,
      'Keep it to 3 short paragraphs and under 300 words',
      seed.extraDo,
    ],
    donts: [
      'Don\'t restate your CV line by line — use the letter to add context the CV cannot',
      'Avoid openers like "I am writing to express my interest" — lead with impact',
      'Never send a letter that names a different company or role',
      'Don\'t claim skills you cannot back up in the interview',
      seed.extraDont,
    ],
    keyPoints: [
      `One specific achievement with a measurable outcome (${seed.proof})`,
      `The tools and methods you actually used: ${seed.tools}`,
      `Why this employer and its ${seed.audience} — not just any ${seed.title.toLowerCase()} job`,
      'A clear, confident closing ask for a conversation',
    ],
    sampleOpening: seed.opening,
    sampleBody: seed.body,
    sampleClosing: seed.closing,
    faqs: seed.faqs,
  };
}

export const coverLetterDataMore: Record<string, CoverLetterData> = {
  'sales-executive': build({
    title: 'Sales Executive',
    proof: 'quota attainment, new accounts won, or revenue closed',
    tools: 'CRM (Salesforce, HubSpot, Zoho), lead generation, pipeline management, cold calling, negotiation',
    audience: 'products, customers and sales motion',
    extraDo: 'State your quota and your attainment against it — sales managers look for this number first',
    extraDont: 'Don\'t describe yourself as a "people person" without showing a closed deal that proves it',
    opening: 'In my last financial year at [Company], I closed [X] new B2B accounts and achieved [Y]% of my annual quota — and I want to bring that same outbound discipline to [Target Company]\'s sales team.',
    body: 'At [Previous Company], I managed a pipeline of [N] active prospects in [CRM], running a consistent cycle of cold outreach, discovery calls, demos and negotiation. I focused on [segment/industry], where I shortened the average sales cycle by tightening qualification and following up within 24 hours of every demo. I maintain weekly forecasting discipline so my manager always knows which deals are real, and I have trained two new joiners on our outreach process.',
    closing: 'I am drawn to [Target Company]\'s customers and product, and I would welcome a conversation about how I can contribute to your pipeline from my first quarter.',
    faqs: [
      { q: 'Should a sales executive mention numbers in a cover letter?', a: 'Yes. Sales is the most numbers-driven function, and a letter without a quota, revenue or accounts-won figure looks incomplete. Use your real figures, and if your employer treats them as confidential, use percentages such as quota attainment instead of absolute revenue.' },
      { q: 'How do freshers write a sales executive cover letter?', a: 'Lead with evidence of persuasion and persistence: campus sales events, internships, fundraising, or any role where you had a target. Describe the target and what you did to reach it, and show you have researched the company\'s product and buyers.' },
    ],
  }),
  'ios-developer': build({
    title: 'iOS Developer',
    proof: 'App Store rating, crash-free rate, or monthly active users',
    tools: 'Swift, SwiftUI, UIKit, Combine, Core Data, Xcode, XCTest, CI/CD with Fastlane',
    audience: 'app and its user experience',
    extraDo: 'Link to a live App Store app or a public GitHub project so reviewers can see your work',
    extraDont: 'Don\'t list every Apple framework you have touched — focus on those named in the job description',
    opening: 'I rebuilt [Company]\'s onboarding flow in SwiftUI and raised our crash-free session rate to [X]% — the kind of polished, reliable iOS experience I want to build at [Target Company].',
    body: 'As an iOS Developer at [Previous Company], I own feature development for a consumer app built in Swift with SwiftUI and UIKit, using MVVM, Combine for reactive data flow, and Core Data for offline persistence. I write unit tests with XCTest for view models and business logic, and I automate builds and TestFlight distribution with Fastlane and CI. I have shipped [N] production releases through App Store review and monitor crash reports after each release to catch regressions quickly.',
    closing: 'I admire the quality of [Target Company]\'s app and would value a technical discussion about your architecture and roadmap.',
    faqs: [
      { q: 'Should an iOS developer link App Store apps in a cover letter?', a: 'Yes. A live App Store link is the strongest proof of shipped work, because the reviewer can open and judge it in seconds. If your work is under NDA, link a personal project or a public GitHub repository instead.' },
      { q: 'What if I know UIKit but the role asks for SwiftUI?', a: 'Say so honestly and show momentum: mention a SwiftUI feature or side project you have built and how you reasoned about the migration. Employers usually value sound architecture over knowing every new API.' },
    ],
  }),
  'full-stack-developer': build({
    title: 'Full Stack Developer',
    proof: 'a feature shipped end to end, page load time, or users served',
    tools: 'React, Node.js, TypeScript, REST or GraphQL APIs, PostgreSQL or MongoDB, Docker, AWS',
    audience: 'product and engineering stack',
    extraDo: 'Show you can work across layers: one example that spans UI, API and database',
    extraDont: 'Don\'t just write "MERN stack" — name each technology and what you built with it',
    opening: 'I took a customer-facing feature at [Company] from database schema to React UI in three weeks, cutting checkout drop-off by [X]% — end-to-end ownership that I want to bring to [Target Company].',
    body: 'At [Previous Company], I build features across the stack using React and TypeScript on the front end, Node.js with Express for APIs, and PostgreSQL for data. I design REST endpoints, write integration tests, and containerise services with Docker for deployment on AWS. Recently I profiled a slow dashboard, added indexes and API-level caching, and reduced its load time from [A] to [B] seconds. I enjoy being close to the whole product, from the first design discussion to monitoring after release.',
    closing: 'I would welcome the chance to discuss how my end-to-end approach could help [Target Company] ship faster, and I can share live projects and code on request.',
    faqs: [
      { q: 'Should a full stack developer emphasise front end or back end?', a: 'Match the job description. If the posting leans toward one side, lead with that side and show the other as supporting depth. Either way, include at least one example that proves you can connect the layers.' },
      { q: 'How long should a full stack developer cover letter be?', a: 'Three short paragraphs and under 300 words. Engineering managers skim, so put your strongest shipped project first and link to it.' },
    ],
  }),
  'machine-learning-engineer': build({
    title: 'Machine Learning Engineer',
    proof: 'model accuracy gain, latency reduction, or business metric moved by a model',
    tools: 'Python, PyTorch or TensorFlow, scikit-learn, MLflow, Docker, AWS SageMaker, feature pipelines',
    audience: 'data and the problems its models solve',
    extraDo: 'Cover the full lifecycle — data, training, deployment and monitoring — not just model accuracy',
    extraDont: 'Don\'t cite accuracy alone; say what baseline you beat and what business result followed',
    opening: 'I deployed a [type] model at [Company] that improved [metric] by [X]% over the previous baseline and now serves [N] predictions a day — production ML of the kind I want to build at [Target Company].',
    body: 'At [Previous Company], I own the lifecycle of models from data pipeline to monitoring. I train and evaluate models in Python with PyTorch and scikit-learn, track experiments in MLflow, and serve them through containerised APIs on AWS. After noticing performance drift on live data, I added monitoring and a scheduled retraining job that stabilised results. I work closely with data engineers and product managers so that model work ties to a measurable outcome.',
    closing: 'I would be glad to discuss how my production machine learning experience can support [Target Company]\'s roadmap, and I can walk through any project in detail.',
    faqs: [
      { q: 'What separates a machine learning engineer cover letter from a data scientist one?', a: 'A machine learning engineer letter should stress deployment, scale and reliability — serving, monitoring, retraining — alongside modelling. Data scientist letters lean more toward analysis and experimentation.' },
      { q: 'Can freshers apply for machine learning engineer roles with a cover letter?', a: 'Yes, if you can show a complete project: data collection, a baseline, a trained model, and some form of deployment, with code on GitHub. Describe the problem and what you measured instead of listing courses.' },
    ],
  }),
  'chartered-accountant': build({
    title: 'Chartered Accountant',
    proof: 'audit scope handled, compliance filings completed, or cost or tax savings identified',
    tools: 'Ind AS, GST, TDS, statutory audit, direct and indirect tax, Tally, SAP, Excel',
    audience: 'finance function and the clients or industry it serves',
    extraDo: 'State your ICAI membership year and any articleship firm or specialisation',
    extraDont: 'Don\'t describe duties only — include one engagement where your work changed an outcome',
    opening: 'As a Chartered Accountant with [N] years in statutory audit and indirect tax, I led a GST reconciliation at [Company] that identified [₹X] in recoverable input credit — the rigour I want to bring to [Target Company]\'s finance team.',
    body: 'At [Previous Firm/Company], I handled statutory audits across [industries], ensuring compliance with Ind AS, and managed monthly GST and TDS filings with zero penalties in my tenure. I improved the month-end close by standardising reconciliations in Excel and SAP, which shortened it by [X] days. I also advise teams on tax positions and work with auditors and management so that reporting is accurate and defensible.',
    closing: 'I would welcome a discussion on how my audit, tax and reporting background can strengthen [Target Company]\'s finance function.',
    faqs: [
      { q: 'Do chartered accountants need a cover letter in India?', a: 'It is optional at large firms that screen through campus or portal applications, but it helps when you are changing sectors, moving from practice to industry, or applying for a specialised role. It lets you explain that move in your own words.' },
      { q: 'Should I mention my ICAI rank or attempts?', a: 'Mention a strong rank if you have one, but lead with experience once you have it. Do not discuss attempts; focus on the work you have done and the credentials you hold.' },
    ],
  }),
  'sap-consultant': build({
    title: 'SAP Consultant',
    proof: 'implementation delivered, process improved, or users migrated',
    tools: 'SAP S/4HANA, ECC, the relevant module (FI/CO, MM, SD, PP), ABAP interfaces, Fiori, testing and cutover',
    audience: 'SAP landscape and implementation programmes',
    extraDo: 'Name your module, the SAP version, and whether you worked on implementation, rollout or support',
    extraDont: 'Don\'t write only "SAP experience" — hiring managers filter by module and version',
    opening: 'I led the SAP S/4HANA [module] workstream for a [N]-user rollout at [Company], delivering go-live on schedule with no critical defects in the first month — the delivery focus I want to bring to [Target Company].',
    body: 'At [Previous Company], I work as an SAP [module] consultant across blueprinting, configuration, testing and hypercare. I run requirement workshops with business users, document functional specifications for ABAP developers, and manage UAT and cutover. In my last project I mapped [N] legacy processes to standard SAP, reducing custom development and simplifying future upgrades. I stay current on S/4HANA and Fiori changes so that clients get practical advice.',
    closing: 'I would be glad to discuss how my SAP delivery experience can support [Target Company]\'s programmes, and I can describe my projects in more detail.',
    faqs: [
      { q: 'Should an SAP consultant name the module in the cover letter?', a: 'Yes, in the first paragraph. SAP roles are screened by module and version, so a letter that names them clearly is easier to match with the opening.' },
      { q: 'How do I write a cover letter when moving from SAP ECC to S/4HANA?', a: 'Be honest about your ECC depth, then show your S/4HANA exposure through certifications, migration projects or training, and explain how your process knowledge transfers.' },
    ],
  }),
  'react-developer': build({
    title: 'React Developer',
    proof: 'Lighthouse score gain, bundle size reduction, or conversion improvement',
    tools: 'React, TypeScript, Redux or Zustand, React Query, Next.js, Jest and React Testing Library, Tailwind',
    audience: 'product interface and front-end engineering culture',
    extraDo: 'Link a live site or repository that shows your component structure and testing habits',
    extraDont: 'Don\'t list every npm package you have used — keep to the stack named in the posting',
    opening: 'I cut the main bundle of [Company]\'s React dashboard by [X]% through code splitting and lazy loading, lifting its Lighthouse performance score from [A] to [B] — the front-end craft I want to bring to [Target Company].',
    body: 'At [Previous Company], I build and maintain a React and TypeScript application used by [N] users, organising state with Zustand and server data with React Query. I write component tests with Jest and React Testing Library, work from Figma designs with attention to accessibility, and review pull requests for performance and readability. I recently introduced a shared component library that reduced duplicate UI code across three teams.',
    closing: 'I would value a conversation about [Target Company]\'s front-end roadmap, and I am happy to share live work and code.',
    faqs: [
      { q: 'Should a React developer include a portfolio link in the cover letter?', a: 'Yes. A live app or public repository lets the reviewer verify your skill quickly. Put the link in the closing paragraph and mention the one project worth opening.' },
      { q: 'How should I show React skills as a fresher?', a: 'Describe one real project: what it does, how you structured components and state, how you tested it, and where it is deployed. Concrete decisions matter more than a list of libraries.' },
    ],
  }),
  'investment-banker': build({
    title: 'Investment Banker',
    proof: 'deal value supported, number of transactions, or models built',
    tools: 'financial modelling, valuation (DCF, comps), pitch books, due diligence, M&A and capital-markets execution',
    audience: 'deal franchise and sector coverage',
    extraDo: 'Name transactions you worked on, with deal type and size where you may disclose them',
    extraDont: 'Don\'t use vague prestige language — show analytical work and deal exposure instead',
    opening: 'As an analyst on [Company]\'s [sector] team, I built the valuation model and diligence materials for a [₹X crore] transaction — the execution I want to bring to [Target Company]\'s deal team.',
    body: 'At [Previous Company], I have supported [N] mandates across M&A and capital raising, building DCF and comparable-company models, drafting pitch books and information memoranda, and coordinating diligence with advisors. I am accustomed to tight turnarounds and to checking every number before it reaches a client. I also prepared sector notes that the team used in [N] client meetings.',
    closing: 'I would welcome the opportunity to discuss how my transaction experience fits [Target Company]\'s coverage and execution needs.',
    faqs: [
      { q: 'Is a cover letter required for investment banking applications in India?', a: 'Many banks ask for one, especially for lateral and MBA hires. Keep it to one page, specific to the bank\'s sector and recent deals, and never reuse a letter between firms.' },
      { q: 'How do I handle confidential deal information?', a: 'Describe deals by type, sector and approximate size, without client names, unless the transaction is publicly announced. Your referees can verify the details privately.' },
    ],
  }),
  'scrum-master': build({
    title: 'Scrum Master',
    proof: 'velocity improvement, release frequency, or cycle-time reduction',
    tools: 'Scrum, Kanban, Jira, sprint planning, retrospectives, backlog refinement, agile metrics',
    audience: 'delivery culture and team structure',
    extraDo: 'Mention certifications (CSM, PSM) and team size and distribution you have worked with',
    extraDont: 'Don\'t describe the Scrum framework back to the reader — show what changed for your team',
    opening: 'After I introduced focused retrospectives and a cleaner definition of done at [Company], my team cut its average cycle time by [X]% and moved from monthly to fortnightly releases — the delivery improvement I want to bring to [Target Company].',
    body: 'As Scrum Master for a [N]-person cross-functional team at [Previous Company], I facilitate planning, daily stand-ups, reviews and retrospectives, and coach the product owner on backlog refinement. I track flow metrics in Jira, remove blockers across dependencies, and help the team make decisions on evidence. I hold a [CSM/PSM] certification and have coached two teams through their first agile transition.',
    closing: 'I would welcome a conversation about the way [Target Company]\'s teams deliver and where a Scrum Master could help most.',
    faqs: [
      { q: 'How do I show impact as a Scrum Master?', a: 'Use team outcomes rather than ceremonies: cycle time, release frequency, defect escape rate or predictability of sprint commitments. Say what you changed and what moved.' },
      { q: 'Should a project manager moving to Scrum Master mention it in the letter?', a: 'Yes. Explain the transition directly, point to agile delivery you have already facilitated, and make clear you understand the shift from directing work to coaching a team.' },
    ],
  }),
  'business-development-manager': build({
    title: 'Business Development Manager',
    proof: 'new partnerships signed, revenue sourced, or markets entered',
    tools: 'lead generation, partnership development, proposal writing, negotiation, CRM, market research',
    audience: 'growth strategy and target markets',
    extraDo: 'Describe how you source opportunities, not only how you close them',
    extraDont: 'Don\'t overstate revenue credit for deals your team closed together — be precise about your role',
    opening: 'I opened a new [segment/region] market for [Company] and signed [N] partners generating [₹X] in first-year revenue — the growth-building approach I want to bring to [Target Company].',
    body: 'At [Previous Company], I identify target accounts, build relationships with senior stakeholders, and shape proposals that match client priorities. I work with product and operations to ensure that promises made in negotiation can be delivered, and I report pipeline and conversion to leadership monthly. I recently built a partner referral programme that now supplies [X]% of qualified leads.',
    closing: 'I would be glad to discuss which markets and partnerships could drive [Target Company]\'s next stage of growth.',
    faqs: [
      { q: 'How is a business development cover letter different from a sales one?', a: 'Business development letters emphasise opening new markets, partnerships and channels, while sales letters emphasise closing and quota. Show your ability to create opportunities as well as convert them.' },
      { q: 'What metrics belong in this letter?', a: 'Partnerships signed, revenue sourced, pipeline built, and markets entered. Use percentages if absolute figures are confidential.' },
    ],
  }),
  'network-engineer': build({
    title: 'Network Engineer',
    proof: 'uptime achieved, outage time reduced, or sites deployed',
    tools: 'Cisco, Juniper, routing and switching (OSPF, BGP), VLANs, firewalls, VPN, SD-WAN, monitoring tools',
    audience: 'network environment and scale',
    extraDo: 'List certifications such as CCNA or CCNP, and the scale of networks you have managed',
    extraDont: 'Don\'t list vendors you have only read about — name the equipment you have configured',
    opening: 'I redesigned the WAN routing for [Company]\'s [N] branch sites and brought network availability to [99.9X]% — the reliability focus I want to bring to [Target Company]\'s infrastructure team.',
    body: 'At [Previous Company], I manage routing and switching on Cisco infrastructure using OSPF and BGP, maintain firewall and VPN policies, and monitor the network with [tool]. I resolve incidents against SLA targets and document changes carefully so that rollbacks are quick. I led a migration from a legacy MPLS link to SD-WAN at [N] sites, with no unplanned downtime during cutover. I hold a [CCNA/CCNP] certification.',
    closing: 'I would welcome the chance to discuss how my network design and operations experience can support [Target Company]\'s environment.',
    faqs: [
      { q: 'Do network engineers need a cover letter?', a: 'It is optional for many operations roles, but valuable when you are moving between vendors, sectors or from support to design. Keep it brief and technical.' },
      { q: 'Should certifications go in the cover letter?', a: 'Yes — name your top one or two in the first or second paragraph, since CCNA/CCNP and similar certifications are often used as screening criteria.' },
    ],
  }),
  'logistics-manager': build({
    title: 'Logistics Manager',
    proof: 'on-time delivery rate, freight cost reduction, or warehouse throughput',
    tools: 'transportation management, warehouse operations, carrier negotiation, route planning, WMS/TMS, SLA management',
    audience: 'network and customer service commitments',
    extraDo: 'Give the scale you manage: shipments per day, fleet size, warehouses, or team headcount',
    extraDont: 'Don\'t speak only of "coordination" — show the cost or service metric you improved',
    opening: 'I raised on-time delivery at [Company] from [A]% to [B]% while cutting freight cost per shipment by [X]% — the operational results I want to deliver for [Target Company].',
    body: 'At [Previous Company], I manage a logistics operation covering [N] shipments a day across [regions], with a team of [N]. I negotiate with carriers, optimise routes and loads, and use [WMS/TMS] dashboards to catch delays before they reach customers. I introduced weekly service reviews with transport partners that reduced claims and exceptions, and I work closely with procurement and sales so that commitments are realistic.',
    closing: 'I would welcome a discussion about [Target Company]\'s logistics network and where I could improve cost and service together.',
    faqs: [
      { q: 'Which metrics should a logistics manager highlight?', a: 'On-time delivery, cost per shipment, damage or claims rate, warehouse throughput and inventory accuracy. Choose the two or three that match the posting.' },
      { q: 'How do I show leadership in a logistics cover letter?', a: 'State your team size, the processes you changed, and a result that came from managing people and partners, such as a lower exception rate after a new review routine.' },
    ],
  }),
  'interior-designer': build({
    title: 'Interior Designer',
    proof: 'projects delivered, budget kept, or client outcomes achieved',
    tools: 'AutoCAD, SketchUp, 3ds Max or Revit, V-Ray, material and vendor selection, space planning, project coordination',
    audience: 'design style and project portfolio',
    extraDo: 'Link a portfolio — for a designer it matters more than any sentence in the letter',
    extraDont: 'Don\'t describe your taste in abstract terms; point to a finished project instead',
    opening: 'I designed and delivered a [type] interior of [N] sq ft at [Company] on budget and [N] days ahead of schedule — the practical, client-focused design I want to bring to [Target Company]\'s portfolio.',
    body: 'At [Previous Company], I handle projects from concept to handover: space planning, 2D drawings in AutoCAD, 3D visuals in SketchUp and V-Ray, material selection and coordination with contractors and vendors. I present concepts to clients, manage revisions, and track budgets so that design intent survives site realities. My portfolio, linked below, includes [residential/commercial/hospitality] projects.',
    closing: 'I would love to walk you through my portfolio and discuss how my design approach suits [Target Company]\'s projects.',
    faqs: [
      { q: 'What should an interior designer put in a cover letter?', a: 'One standout project, your software skills, and a portfolio link. Show that you can manage budgets and vendors as well as design.' },
      { q: 'Should freshers include academic projects?', a: 'Yes, if they are well presented. Pick two or three strong studio or internship projects, and describe your role, the brief and the result.' },
    ],
  }),
  'pharmacist': build({
    title: 'Pharmacist',
    proof: 'prescriptions verified, error rate, or compliance audit results',
    tools: 'dispensing, drug interaction checks, inventory management, regulatory compliance, patient counselling, pharmacy software',
    audience: 'patient care and pharmacy setting',
    extraDo: 'State your registration (State Pharmacy Council) and qualification (B.Pharm, D.Pharm, M.Pharm, Pharm.D)',
    extraDont: 'Don\'t leave out compliance — Schedule H and narcotics handling matter to every employer',
    opening: 'As a registered pharmacist dispensing around [N] prescriptions a day at [Company] with zero dispensing errors in [N] months, I want to bring that careful, patient-first practice to [Target Company].',
    body: 'At [Previous Company], I verify prescriptions, check for drug interactions and dosage issues, counsel patients on correct use, and manage stock including expiry control and cold-chain items. I keep records compliant with Schedule H and narcotics rules and have passed [N] inspections without observations. I also trained new staff on dispensing workflows and billing software.',
    closing: 'I would welcome the chance to discuss how my dispensing and compliance experience can serve [Target Company]\'s patients.',
    faqs: [
      { q: 'Do pharmacists need a cover letter in India?', a: 'For retail chains, hospital pharmacies and pharma companies, a short cover letter helps, particularly when changing between settings, for example from retail to clinical or to regulatory roles.' },
      { q: 'What credentials should be named first?', a: 'Your degree and your State Pharmacy Council registration, since employers verify them before anything else.' },
    ],
  }),
  'embedded-systems-engineer': build({
    title: 'Embedded Systems Engineer',
    proof: 'firmware shipped, power or memory savings, or defect reduction',
    tools: 'C and C++, ARM Cortex-M, RTOS (FreeRTOS), I2C/SPI/UART/CAN, debugging with JTAG, Linux drivers',
    audience: 'products and hardware platforms',
    extraDo: 'Name the microcontrollers, protocols and RTOS you have actually shipped firmware on',
    extraDont: 'Don\'t write "embedded C" alone — specify the platform, peripherals and tooling',
    opening: 'I rewrote the sensor-handling firmware on [Company]\'s ARM Cortex-M device and cut power consumption by [X]% while meeting the real-time deadlines — the low-level engineering I want to bring to [Target Company].',
    body: 'At [Previous Company], I develop firmware in C for ARM Cortex-M microcontrollers under FreeRTOS, implementing I2C, SPI, UART and CAN drivers and bringing up boards with oscilloscopes, logic analysers and JTAG debuggers. I write unit and hardware-in-the-loop tests and contributed to a bootloader with secure firmware update. I work with hardware engineers to resolve timing and signal problems early.',
    closing: 'I would welcome a technical conversation about the products [Target Company] is building and where my firmware experience can help.',
    faqs: [
      { q: 'What should an embedded engineer highlight in a cover letter?', a: 'The specific hardware and RTOS you have worked on, a shipped product or measurable improvement, and your debugging approach. Specificity is the most convincing signal.' },
      { q: 'Can freshers apply with hobby projects?', a: 'Yes. A board you designed or programmed, with the code on GitHub and a short description of the peripherals and protocols used, shows initiative and real skills.' },
    ],
  }),
};
