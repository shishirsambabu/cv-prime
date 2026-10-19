import type { CoverLetterData } from '@/lib/coverLetterData';

interface RoleSpec {
  role: string;
  tools: string;
  proof: string;
  opening: string;
  body: string;
  closing: string;
  extraDo: string;
  extraDont: string;
  keyPoints: string[];
  faqs: Array<{ q: string; a: string }>;
}

function build(s: RoleSpec): CoverLetterData {
  return {
    dos: [
      `Name the exact job title and company in the first line — a ${s.role} letter that could be sent anywhere gets skipped`,
      `Mention the specifics from the job description: ${s.tools}`,
      `Quantify one real result from your own work — ${s.proof}`,
      s.extraDo,
      'Keep it to 3 short paragraphs and under 300 words, and end with a clear next step',
    ],
    donts: [
      'Don\'t restate your CV line by line — the letter should add context the CV cannot',
      'Avoid generic openers like "I am writing to apply for…" — lead with a result or a reason',
      s.extraDont,
      'Never invent numbers or credentials — recruiters verify claims at interview and reference stage',
      'Don\'t reuse a letter that names a different company or role',
    ],
    keyPoints: s.keyPoints,
    sampleOpening: s.opening,
    sampleBody: s.body,
    sampleClosing: s.closing,
    faqs: s.faqs,
  };
}

export const coverLetterDataMore: Record<string, CoverLetterData> = {
  'full-stack-developer': build({
    role: 'full stack developer',
    tools: 'frontend framework, backend runtime, database and cloud platform',
    proof: 'a feature you shipped end to end, with load time, users or release-cycle impact',
    extraDo: 'Show you can own a feature across UI, API and database — that range is what the title promises',
    extraDont: 'Don\'t list every framework you have touched — pick the stack the posting names',
    opening: 'I built [Product Feature] end to end at [Company] — React front end, Node.js API and PostgreSQL schema — and cut its page load time by [X]%. That ownership across the stack is what I would bring to the Full Stack Developer role at [Target Company].',
    body: 'At [Company], I worked across the whole delivery path: designing REST endpoints, modelling data, building the React interface and wiring CI/CD to release safely. I like owning a feature from ticket to production, including the tests and monitoring. Your posting mentions [Stack from JD], which matches the stack I use daily.',
    closing: 'I would welcome a conversation about how I can help [Target Company] ship faster. My GitHub and live projects are linked in my CV.',
    keyPoints: ['One feature you owned from database to UI', 'Your depth on both sides: name the frontend and backend tools', 'How you test and deploy, not only how you build', 'A live project or GitHub link a reviewer can open'],
    faqs: [
      { q: 'Should a full stack developer write a cover letter?', a: 'It is optional at most service companies but useful at startups and product companies, where hiring managers read applications individually. Use it to show end-to-end ownership that a bullet list cannot.' },
      { q: 'How do I show full stack range without listing every tool?', a: 'Describe one project that touched the database, API and UI, naming only the technologies the job description asks for.' },
    ],
  }),
  'react-developer': build({
    role: 'React developer',
    tools: 'React version, state management, TypeScript, testing and build tooling',
    proof: 'a performance or UX improvement, such as load time, bundle size or accessibility fixes',
    extraDo: 'Link a live app or GitHub repository so the reviewer can see your component quality',
    extraDont: 'Don\'t claim "expert in React" without evidence — describe a component system or optimisation you built',
    opening: 'I rebuilt the [Feature] interface at [Company] in React and TypeScript, reducing its bundle size by [X]% — the kind of front-end quality work I would like to do as a React Developer at [Target Company].',
    body: 'My day-to-day work covers component architecture, state management with [Redux / Context / Zustand], API integration and unit testing with Jest and React Testing Library. I pay attention to accessibility and rendering performance, and I review pull requests with those in mind. Your stack of [Stack from JD] is close to what I use now.',
    closing: 'I would be glad to walk through my code and design decisions in an interview. Thank you for your time and consideration.',
    keyPoints: ['A performance or accessibility improvement you made', 'Your state management and testing approach', 'Collaboration with designers and backend engineers', 'A link to a live app or repository'],
    faqs: [
      { q: 'Do React developers need a cover letter?', a: 'Rarely required, but a short targeted letter helps when applying to startups or product teams. Pair it with a portfolio or GitHub link.' },
      { q: 'What should a fresher React developer put in a cover letter?', a: 'Lead with one project you built and deployed, explain the technical choices you made, and mention any internship or open-source contribution.' },
    ],
  }),
  'machine-learning-engineer': build({
    role: 'machine learning engineer',
    tools: 'frameworks, model types, MLOps tooling and cloud platform',
    proof: 'a model you took to production, with the metric it moved or the latency and cost it met',
    extraDo: 'Separate research experiments from production work — hiring managers want to see models that shipped',
    extraDont: 'Don\'t list algorithms without a problem and a result attached to each',
    opening: 'I took a [model type] from notebook to production at [Company], improving [metric] by [X]% while keeping inference latency under [Y] ms. I would like to bring that production focus to the Machine Learning Engineer role at [Target Company].',
    body: 'My work spans data pipelines, feature engineering, training and evaluation with PyTorch or scikit-learn, and deployment with [Docker / Kubernetes / cloud service]. I also set up monitoring for data drift and model quality after launch, because a model is only useful while it stays accurate. The problems described in your posting — [Problem from JD] — are ones I have worked on directly.',
    closing: 'I would welcome a technical discussion about your models and data. Thank you for considering my application.',
    keyPoints: ['A model that reached production and its measurable impact', 'Your MLOps practices: versioning, monitoring, retraining', 'Data scale and quality challenges you handled', 'Clear separation of your contribution from the team\'s'],
    faqs: [
      { q: 'What should an ML engineer highlight in a cover letter?', a: 'Production deployment and business impact. Research or Kaggle work helps, but employers hiring ML engineers want evidence that you can ship and maintain models.' },
      { q: 'Should I mention papers or Kaggle rankings?', a: 'Yes, briefly and only if they relate to the role. One line with a link is enough.' },
    ],
  }),
  'ios-developer': build({
    role: 'iOS developer',
    tools: 'Swift, SwiftUI or UIKit, architecture pattern, and App Store release requirements',
    proof: 'an app you shipped, with App Store rating, downloads, crash-free rate or load-time improvement you can verify',
    extraDo: 'Link your App Store apps or TestFlight builds so the reviewer can try your work',
    extraDont: 'Don\'t list iOS versions and frameworks without saying what you built with them',
    opening: 'I shipped [App Name] to the App Store in Swift and SwiftUI and raised its crash-free session rate to [X]% — the quality bar I would like to bring to the iOS Developer role at [Target Company].',
    body: 'I build with Swift, SwiftUI and UIKit, follow [MVVM / Clean Architecture], and handle networking, persistence and push notifications. I have taken apps through App Store review and manage releases with TestFlight and CI. I write unit and UI tests and care about accessibility and smooth performance on older devices.',
    closing: 'I would be happy to demo my apps and discuss how I can contribute to your mobile roadmap. Thank you for your time.',
    keyPoints: ['A shipped app with a link', 'Architecture pattern and testing approach', 'App Store release and review experience', 'Performance, accessibility and crash-rate work'],
    faqs: [
      { q: 'Should I link my apps in an iOS developer cover letter?', a: 'Yes. A live App Store link is stronger evidence than any description, so put it in the letter and CV.' },
      { q: 'How do I show iOS experience as a fresher?', a: 'Describe a complete app you built and published or distributed through TestFlight, and explain your architecture choices.' },
    ],
  }),
  'embedded-systems-engineer': build({
    role: 'embedded systems engineer',
    tools: 'microcontroller family, RTOS, communication protocols and toolchain',
    proof: 'a firmware project with a concrete outcome, such as memory footprint, power consumption or defect reduction',
    extraDo: 'Name the hardware you worked on (ARM Cortex-M, STM32, ESP32) and the protocols you implemented',
    extraDont: 'Don\'t describe only coursework — show a board that ran your firmware',
    opening: 'I wrote the firmware for [Product] on an [MCU family] with FreeRTOS and reduced its power draw by [X]% — hands-on embedded work I would like to continue as an Embedded Systems Engineer at [Target Company].',
    body: 'My experience covers C and C++ firmware, peripheral drivers, RTOS task design and protocols such as SPI, I2C, UART and CAN. I debug with oscilloscopes, logic analysers and JTAG, and I write code with testability and memory limits in mind. The platform in your posting, [Platform from JD], is close to what I have used.',
    closing: 'I would welcome the chance to discuss your hardware and firmware challenges. Thank you for your consideration.',
    keyPoints: ['A product or prototype running your firmware', 'Protocols and peripherals you have driven', 'Debugging tools and methods', 'Standards or safety experience relevant to the sector'],
    faqs: [
      { q: 'What should embedded freshers put in a cover letter?', a: 'A project on real hardware — even a development board — with the microcontroller, protocols and what you measured or achieved.' },
      { q: 'Is it worth mentioning automotive or safety standards?', a: 'Only if you have worked with them. Name the standard and your exact role; do not imply certification you do not hold.' },
    ],
  }),
  'network-engineer': build({
    role: 'network engineer',
    tools: 'vendor platforms, routing protocols, security tooling and certifications',
    proof: 'a network project with uptime, migration or incident-reduction results you can verify',
    extraDo: 'List relevant certifications (CCNA, CCNP, JNCIA) exactly as issued, with the year',
    extraDont: 'Don\'t list a certification you have not completed',
    opening: 'I led the migration of [Company]\'s [N]-site network to [Platform/design], improving uptime to [X]% with no business-hours outages — experience I would like to apply as a Network Engineer at [Target Company].',
    body: 'My work includes designing and troubleshooting LAN, WAN and wireless networks, configuring routing protocols such as OSPF and BGP, managing firewalls and VPNs, and monitoring with [Tool]. I document changes and follow change-control, which keeps incidents short and repeatable. Your environment of [Environment from JD] matches the platforms I support.',
    closing: 'I would appreciate the opportunity to discuss how I can help keep your network reliable and secure. Thank you for your time.',
    keyPoints: ['A migration or upgrade you delivered', 'Protocols and platforms you configure daily', 'Incident response and monitoring practices', 'Certifications with issue year'],
    faqs: [
      { q: 'Does a network engineer need a cover letter?', a: 'It is not mandatory at most IT-services employers, but a short letter helps when applying directly to a company with a named hiring manager.' },
      { q: 'Should I include CCNA in the letter?', a: 'Yes, if you hold it. Mention it once, with the specific platforms you configured in practice.' },
    ],
  }),
  'scrum-master': build({
    role: 'Scrum Master',
    tools: 'team size, delivery model, tooling such as Jira, and any scaling framework',
    proof: 'a team outcome you helped improve, such as predictability, cycle time or release frequency, with your own measurements',
    extraDo: 'Describe how you coach a team through a specific impediment, not just the ceremonies you facilitate',
    extraDont: 'Don\'t list ceremonies as achievements — outcomes matter more than meetings held',
    opening: 'In my [N] years as Scrum Master at [Company], I helped a [N]-person team move from missed sprint commitments to consistently meeting them by removing [specific impediment]. I would like to bring that coaching focus to [Target Company].',
    body: 'I facilitate planning, daily scrums, reviews and retrospectives, but my focus is helping the team improve: coaching the Product Owner on backlog quality, shielding the team from scope churn, and tracking flow metrics rather than velocity alone. I am comfortable with Jira and Confluence and work well with stakeholders across business and engineering.',
    closing: 'I would welcome the opportunity to discuss how I can help your teams deliver more predictably. Thank you for your consideration.',
    keyPoints: ['An impediment you removed and the result', 'Metrics you use beyond velocity', 'Product Owner and stakeholder collaboration', 'Certifications (PSM, CSM) with issuer and year'],
    faqs: [
      { q: 'What makes a strong Scrum Master cover letter?', a: 'Evidence of team improvement. Describe one change you introduced and its effect on delivery, rather than listing the ceremonies you run.' },
      { q: 'Should I mention PSM or CSM?', a: 'Yes, once, with the issuing body. Follow it with a concrete example of applying Scrum in practice.' },
    ],
  }),
  'sap-consultant': build({
    role: 'SAP consultant',
    tools: 'module (FI/CO, MM, SD, ABAP, Basis), version (ECC or S/4HANA) and project phase',
    proof: 'an implementation or rollout you contributed to, with scope such as sites, users or processes covered',
    extraDo: 'State your module, the SAP version and your phase involvement (blueprint, configuration, testing, go-live support)',
    extraDont: 'Don\'t claim every SAP module — recruiters search for a specific specialisation',
    opening: 'I configured the [Module] workstream for [Company]\'s S/4HANA rollout across [N] sites and supported go-live and hypercare — implementation experience I would like to bring to the SAP Consultant role at [Target Company].',
    body: 'My work covers requirement workshops, blueprint documentation, configuration, test scripts, user training and post-go-live support. I work closely with business users to map their processes to standard SAP functionality before proposing customisation. The scope in your posting — [Scope from JD] — matches the implementations I have supported.',
    closing: 'I would be glad to discuss how my module experience fits your project. Thank you for your time and consideration.',
    keyPoints: ['Module and version, stated precisely', 'Your phase of involvement in a named implementation', 'Business-process knowledge alongside configuration skill', 'Certifications with year and version'],
    faqs: [
      { q: 'How should an SAP consultant describe project experience?', a: 'Give the module, SAP version, project phase, and your own responsibilities. Specific scope is more credible than a long list of modules.' },
      { q: 'Is SAP certification necessary in a cover letter?', a: 'It helps. Mention it once with the version, then focus on real implementation experience.' },
    ],
  }),
  'business-development-manager': build({
    role: 'business development manager',
    tools: 'target segment, sales cycle length, deal size and the markets the company is entering',
    proof: 'revenue, pipeline or partnerships you generated — use your own verified figures',
    extraDo: 'Show a repeatable process: how you source, qualify and close, not only a single big win',
    extraDont: 'Don\'t claim targets you did not own — state your own contribution clearly',
    opening: 'I built a pipeline of [N] qualified enterprise accounts at [Company] and closed [Deal/Revenue figure] in new business in my first [N] months. I would like to do the same for [Target Company] as Business Development Manager.',
    body: 'My approach is to research the account, identify the commercial problem, and involve the right stakeholders early. I manage the funnel in [CRM] and work with product and delivery teams so what I sell can be delivered. I have experience with [Segment/Market from JD], which matches the growth plan in your posting.',
    closing: 'I would welcome a conversation about your growth targets and where I can contribute. Thank you for your time.',
    keyPoints: ['Revenue or pipeline you created, with period', 'Your sourcing and qualification method', 'Experience with the target segment', 'Partnership or channel wins where relevant'],
    faqs: [
      { q: 'Should a BDM put numbers in the cover letter?', a: 'Yes. Business development is judged on results, so include one or two verified figures with the time period.' },
      { q: 'How do I change from sales to business development?', a: 'Highlight new-account sourcing, partnerships and market-entry work, which differ from managing existing accounts.' },
    ],
  }),
  'sales-executive': build({
    role: 'sales executive',
    tools: 'product, customer segment, sales cycle and territory',
    proof: 'target attainment, deals closed or revenue you generated, with the period',
    extraDo: 'Show your target achievement and how you reached it — activity, conversion, follow-up discipline',
    extraDont: 'Don\'t exaggerate numbers — managers call references for sales hires',
    opening: 'I achieved [X]% of my sales target at [Company] over [N] months by building steady follow-up habits and focusing on [segment]. I would like to bring that consistency to the Sales Executive role at [Target Company].',
    body: 'I handle the full cycle: prospecting, discovery calls, demos, negotiation and closing, and I log everything in [CRM]. I learn each product thoroughly so I can speak to customer problems rather than recite features. Your focus on [Segment/Product from JD] matches the customers I already serve.',
    closing: 'I would appreciate the chance to meet and discuss how I can help reach your sales goals. Thank you for your time.',
    keyPoints: ['Target attainment with the period', 'Your approach to prospecting and follow-up', 'Product and customer knowledge', 'CRM and reporting discipline'],
    faqs: [
      { q: 'Can a fresher apply for sales executive roles with a cover letter?', a: 'Yes. Highlight communication, any internship or campus sales activity, and a specific example of persuading or serving customers.' },
      { q: 'What should a sales cover letter prove?', a: 'That you can hit targets. A concrete figure and a brief description of how you reached it works best.' },
    ],
  }),
  'chartered-accountant': build({
    role: 'chartered accountant',
    tools: 'practice area (audit, tax, FP&A, controllership), industry and reporting standards',
    proof: 'an engagement or process improvement, such as audits completed, close-cycle time or compliance savings you can verify',
    extraDo: 'State your ICAI qualification, attempt and membership status accurately, and your specialisation',
    extraDont: 'Don\'t overstate your qualification status or articleship details',
    opening: 'As a qualified Chartered Accountant with [N] years in [audit / tax / finance], I shortened [Company]\'s month-end close from [X] to [Y] days. I would like to bring that rigour to the [Role] position at [Target Company].',
    body: 'My experience covers statutory audit, GST and income-tax compliance, Ind AS reporting and financial controls, and I use [ERP/Tool] daily. I work carefully, document my reasoning and communicate findings clearly to non-finance stakeholders. The responsibilities in your posting — [Responsibilities from JD] — match work I have done.',
    closing: 'I would welcome the opportunity to discuss how I can support your finance function. Thank you for your consideration.',
    keyPoints: ['ICAI qualification and specialisation, stated accurately', 'Compliance and reporting standards you handle', 'A process improvement with before-and-after', 'ERP and analytics tools'],
    faqs: [
      { q: 'Should a newly qualified CA write a cover letter?', a: 'Yes, especially for private-sector roles. Highlight articleship training, the areas you worked in and any specialisation.' },
      { q: 'How do I move from practice to industry?', a: 'Connect your audit or tax experience to the employer\'s business and show you can handle ongoing finance operations, not just periodic engagements.' },
    ],
  }),
  'investment-banker': build({
    role: 'investment banker',
    tools: 'division, sector coverage, deal types and the bank\'s recent transactions',
    proof: 'a transaction or analysis you worked on, described within confidentiality limits',
    extraDo: 'Reference a recent deal or sector view of the bank to show genuine interest',
    extraDont: 'Don\'t disclose confidential client or deal details — describe scope and your role only',
    opening: 'I worked on a [deal type] in the [sector] sector, building the financial model and valuation analysis, and I followed [Target Bank]\'s recent role in [Public Transaction] closely. I would like to join your [Division] team.',
    body: 'My experience includes financial modelling, DCF and comparable-company valuation, pitch-book preparation and due-diligence support. I work accurately under tight deadlines and am comfortable taking feedback from senior team members. I hold [CFA Level / MBA / CA] and have built sector knowledge in [Sector].',
    closing: 'I would value the chance to discuss how I can contribute to your team. Thank you for your time.',
    keyPoints: ['A transaction or model you contributed to, within confidentiality', 'Technical skills: modelling, valuation, pitch materials', 'Sector knowledge and a specific public deal you followed', 'Credentials with level and status'],
    faqs: [
      { q: 'How personalised should an investment banking cover letter be?', a: 'Highly. Name the division, a recent public deal and why the sector interests you. Generic letters are screened out.' },
      { q: 'Can I mention deals under NDA?', a: 'Describe your role and the deal type without naming the client or confidential terms.' },
    ],
  }),
  'logistics-manager': build({
    role: 'logistics manager',
    tools: 'network scale, transport modes, warehouse systems and service-level targets',
    proof: 'a cost, delivery-time or accuracy improvement you can verify',
    extraDo: 'Mention the systems you run (WMS, TMS, ERP) and the scale of operations you manage',
    extraDont: 'Don\'t describe duties only — show a measurable improvement you led',
    opening: 'I reduced average delivery time across [N] routes at [Company] by [X]% through route and carrier restructuring — operational improvement I would like to deliver as Logistics Manager at [Target Company].',
    body: 'I manage inbound and outbound flows, warehouse operations, carrier relationships and service levels, using [WMS/TMS] to track performance. I work with procurement, sales and customer service so problems are resolved before they reach the customer. The network described in your posting is close in scale to the one I manage now.',
    closing: 'I would welcome a discussion about how I can improve your logistics performance. Thank you for your consideration.',
    keyPoints: ['A cost or delivery improvement with figures', 'Scale of operations: sites, vehicles, volumes', 'Systems and KPIs you manage', 'Vendor and carrier negotiation experience'],
    faqs: [
      { q: 'What should a logistics manager emphasise?', a: 'Measurable operational improvements: cost, on-time delivery, accuracy and inventory performance.' },
      { q: 'Should I mention supply chain certifications?', a: 'Yes, briefly, if they are relevant. Follow with practical examples of applying them.' },
    ],
  }),
  'pharmacist': build({
    role: 'pharmacist',
    tools: 'setting (retail, hospital, clinical, industry), regulatory registration and systems used',
    proof: 'a service or compliance improvement, such as dispensing accuracy, counselling programme or audit result',
    extraDo: 'State your registration (State Pharmacy Council) and setting clearly',
    extraDont: 'Don\'t imply a registration or specialisation you do not hold',
    opening: 'As a registered pharmacist with [N] years in [hospital / retail / clinical] practice, I introduced [process] that reduced dispensing errors in our department. I would like to bring that patient-safety focus to [Target Organisation].',
    body: 'My work includes dispensing, prescription verification, patient counselling, inventory management and regulatory documentation. I stay current with drug-safety guidance and communicate clearly with doctors, nurses and patients. The setting described in your posting — [Setting from JD] — matches my experience.',
    closing: 'I would be pleased to discuss how I can support your pharmacy team. Thank you for your time and consideration.',
    keyPoints: ['Registration status and setting', 'A patient-safety or compliance improvement', 'Counselling and communication experience', 'Inventory and documentation systems'],
    faqs: [
      { q: 'Do pharmacists need a cover letter in India?', a: 'It helps for hospital, pharma-industry and clinical roles. Retail chains often prioritise the CV and registration, but a short letter can set you apart.' },
      { q: 'How should a fresh pharmacy graduate write one?', a: 'Highlight internship or training experience, your registration status, and a specific example of patient or customer interaction.' },
    ],
  }),
  'interior-designer': build({
    role: 'interior designer',
    tools: 'project types, design software, style and client segment',
    proof: 'a completed project with scope, budget category or client outcome you can share',
    extraDo: 'Link a portfolio — in design, the portfolio is the argument and the letter is the introduction',
    extraDont: 'Don\'t use project images you do not have the right to show',
    opening: 'I designed and delivered a [N] sq ft [residential / commercial] interior for [Client type], from concept through site supervision. I would like to bring that end-to-end approach to the Interior Designer role at [Target Company]; my portfolio is linked below.',
    body: 'I work in AutoCAD, SketchUp and [3D/rendering tool], prepare drawings and material schedules, coordinate with contractors and keep projects within budget and timeline. I listen closely to clients before proposing concepts. Your focus on [Style/Segment from JD] reflects the kind of projects in my portfolio.',
    closing: 'I would welcome the chance to walk you through my work. Thank you for your time and consideration.',
    keyPoints: ['A portfolio link with relevant projects', 'Software skills that match the posting', 'Site coordination and budget control', 'Understanding of the company\'s design style'],
    faqs: [
      { q: 'Is a portfolio more important than a cover letter for designers?', a: 'Yes, but the letter introduces it. Link your portfolio in the first paragraph and say which project is most relevant.' },
      { q: 'What should a fresher interior designer mention?', a: 'Academic or internship projects, software proficiency and a specific design problem you solved.' },
    ],
  }),
};
