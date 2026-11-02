import type { CoverLetterData } from '@/lib/coverLetterData';

interface RoleSeed {
  role: string;
  proof: string;
  tools: string;
  opening: string;
  body: string;
  closing: string;
  extraDo: string;
  extraDont: string;
  point: string;
  faqs: Array<{ q: string; a: string }>;
}

function build(s: RoleSeed): CoverLetterData {
  return {
    dos: [
      `Open with ${s.proof} — a concrete result beats a generic statement of interest`,
      `Mirror the exact tools and terms from the job description (${s.tools}) so the letter matches the posting`,
      'Name the company and the specific team or product you are applying to',
      s.extraDo,
      'Keep it to three short paragraphs and under 300 words',
    ],
    donts: [
      'Don\'t restate your CV line by line — use the letter to add context the CV cannot',
      'Avoid the opener "I am writing to express my interest" — start with your strongest relevant result',
      s.extraDont,
      'Never reuse a letter that names a different company or role',
      'Don\'t mention salary expectations unless the posting explicitly asks for them',
    ],
    keyPoints: [
      s.point,
      `Tie one achievement directly to a requirement in the posting for this ${s.role} role`,
      'Show you understand the employer\'s business, not just the job title',
      'Close with a clear, specific next step such as a conversation or interview',
    ],
    sampleOpening: s.opening,
    sampleBody: s.body,
    sampleClosing: s.closing,
    faqs: s.faqs,
  };
}

const seeds: Record<string, RoleSeed> = {
  'full-stack-developer': {
    role: 'full stack developer',
    proof: 'one feature you shipped end to end — frontend, API and database',
    tools: 'React, Node.js, PostgreSQL, AWS',
    opening: 'At [Company], I took a customer onboarding flow from database schema to React UI and shipped it in [X] weeks, lifting completion from [A%] to [B%] — the kind of end-to-end ownership your full stack role at [Target Company] describes.',
    body: 'My day-to-day spans React and TypeScript on the frontend, Node.js services and PostgreSQL on the backend, and Docker-based CI/CD for releases. I write tests alongside features, review teammates\' pull requests, and document APIs so frontend and backend work stays unblocked. A recent project of mine is linked on my CV with its GitHub repository and live URL.',
    closing: 'I would welcome a conversation about how I can help [Target Company] ship product features faster without sacrificing code quality. Thank you for your time and consideration.',
    extraDo: 'Link one live project or GitHub repository that demonstrates both frontend and backend work',
    extraDont: 'Don\'t list every framework you have touched — pick the three or four the posting names',
    point: 'Show you can own a feature across the stack rather than only one layer',
    faqs: [
      { q: 'Does a full stack developer need a cover letter in India?', a: 'Most large service companies do not read cover letters, but startups and product companies often do, especially when you apply directly or through a referral. A short, specific letter that links a real project can separate you from candidates with identical skill lists.' },
      { q: 'What should a fresher full stack developer put in a cover letter?', a: 'Lead with your strongest project: what it does, the stack you chose and why, and a link to the code. Add internships or open-source contributions if you have them. Hiring managers hiring freshers look for evidence of building and shipping, not just coursework.' },
    ],
  },
  'react-developer': {
    role: 'React developer',
    proof: 'a UI performance or accessibility improvement you delivered',
    tools: 'React, TypeScript, Next.js, Redux, Jest',
    opening: 'While building the dashboard at [Company], I reduced the initial load time by [X%] through code-splitting and memoisation in React — the sort of frontend performance work I see highlighted in [Target Company]\'s React developer opening.',
    body: 'I work primarily with React, TypeScript and Next.js, manage state with Redux Toolkit or Context depending on scale, and test components with Jest and React Testing Library. I care about accessibility and responsive behaviour, and I have collaborated closely with designers to turn Figma specs into reusable component libraries.',
    closing: 'I would be glad to walk you through my component work and discuss how I can contribute to your product\'s frontend. Thank you for considering my application.',
    extraDo: 'Mention component testing, accessibility or performance work — these differentiate React developers',
    extraDont: 'Don\'t describe React as a "library I know" — show what you built with it',
    point: 'Show frontend craft: reusable components, performance and accessibility',
    faqs: [
      { q: 'What should a React developer highlight in a cover letter?', a: 'Highlight one shipped interface and a measurable frontend outcome such as load time, bundle size or conversion. Mention your testing approach and TypeScript usage, since both are common filters in React hiring.' },
      { q: 'Should I attach a portfolio to my React developer application?', a: 'Yes. Include a live link and repository in your letter or CV header. Reviewers often open the live app before reading the rest of your application.' },
    ],
  },
  'ios-developer': {
    role: 'iOS developer',
    proof: 'an app you shipped to the App Store, with its rating or user base',
    tools: 'Swift, SwiftUI, UIKit, Core Data, Xcode',
    opening: 'I shipped [App Name] to the App Store and grew it to [X] users with a [Y]-star rating, building it in Swift and SwiftUI — experience I hope to bring to the iOS developer role at [Target Company].',
    body: 'I work in Swift with SwiftUI and UIKit, use Combine or async/await for asynchronous work, and persist data with Core Data. I have handled App Store submission, TestFlight distribution and crash triage, and I follow Apple\'s Human Interface Guidelines when designing interactions.',
    closing: 'I would welcome the chance to discuss how my App Store experience can support [Target Company]\'s mobile roadmap. Thank you for your time.',
    extraDo: 'Link your App Store listing or a TestFlight demo so reviewers can see the app',
    extraDont: 'Don\'t claim iOS expertise without naming the iOS versions or frameworks you have used',
    point: 'Prove shipping experience: App Store releases, TestFlight, crash and performance handling',
    faqs: [
      { q: 'Is App Store experience important for an iOS developer cover letter?', a: 'Yes. A live App Store link is the strongest proof you can complete the full release cycle. If you have not shipped yet, describe a TestFlight build and the features you implemented.' },
      { q: 'Should I mention SwiftUI or UIKit?', a: 'Mention both if you know both, and match the emphasis of the job description. Many teams maintain UIKit codebases while adopting SwiftUI for new screens.' },
    ],
  },
  'machine-learning-engineer': {
    role: 'machine learning engineer',
    proof: 'a model you moved from notebook to production, and the metric it improved',
    tools: 'Python, PyTorch, scikit-learn, MLflow, AWS SageMaker',
    opening: 'At [Company], I deployed a [model type] model to production that improved [metric] by [X%] over the previous baseline — taking ML from notebook to a monitored service is exactly the work described in [Target Company]\'s machine learning engineer role.',
    body: 'I build and evaluate models in Python using PyTorch and scikit-learn, track experiments with MLflow, and package models behind APIs with Docker. I monitor data drift after release and have retrained models on a schedule when performance degraded. I am comfortable explaining model trade-offs to non-technical stakeholders.',
    closing: 'I would value the opportunity to discuss how I can help [Target Company] build reliable ML systems. Thank you for considering my application.',
    extraDo: 'State the business metric the model improved, not only the model accuracy',
    extraDont: 'Don\'t list algorithms you have only studied — focus on those you deployed',
    point: 'Show production ML: deployment, monitoring and retraining, not just experiments',
    faqs: [
      { q: 'What makes a machine learning engineer cover letter different from a data scientist one?', a: 'ML engineer letters should emphasise productionisation: deployment, latency, monitoring and pipelines. Data scientist letters lean toward analysis and experimentation. Match the balance to the posting.' },
      { q: 'Can freshers apply for ML engineer roles with a cover letter?', a: 'Yes. Lead with a project or internship where you trained and served a model, link the repository, and describe how you evaluated it. Evidence of an end-to-end pipeline matters more than the number of algorithms listed.' },
    ],
  },
  'chartered-accountant': {
    role: 'chartered accountant',
    proof: 'an audit, tax or finance-reporting result with a rupee or time impact',
    tools: 'Ind AS, GST, Tally, SAP, statutory audit',
    opening: 'As a qualified Chartered Accountant with [X] years in statutory audit and GST compliance, I helped [Company] reduce its month-end close by [X] days — the sort of finance rigour I would bring to [Target Company]\'s finance team.',
    body: 'My experience covers statutory and internal audit, Ind AS reporting, GST and income tax compliance, and ERP-based reconciliation in Tally and SAP. I have worked directly with CFOs and external auditors, and I take pride in clean working papers and on-time filings.',
    closing: 'I would welcome a discussion about how my audit and compliance background can support [Target Company]. Thank you for your time and consideration.',
    extraDo: 'Mention your ICAI membership status and any specialisation such as audit, taxation or IFRS',
    extraDont: 'Don\'t describe duties only — pair each with an outcome such as savings or a cleaner audit',
    point: 'Show technical accuracy and compliance discipline alongside business understanding',
    faqs: [
      { q: 'Do chartered accountants need a cover letter?', a: 'For Big 4, corporate finance and CFO-office roles, a short letter is useful when applying directly. Campus placements and bulk recruiting usually rely on the CV alone.' },
      { q: 'What should a newly qualified CA include in a cover letter?', a: 'State your attempt, your articleship firm and the work areas you handled, such as audit or direct tax. Mention one assignment where you owned a deliverable.' },
    ],
  },
  'sap-consultant': {
    role: 'SAP consultant',
    proof: 'a module implementation or rollout you delivered, with scope and outcome',
    tools: 'SAP S/4HANA, FICO, MM, SD, ABAP, SAP Fiori',
    opening: 'I led the SAP S/4HANA [module] rollout for [Client], covering [X] users across [Y] sites with a successful go-live — implementation experience I am keen to bring to [Target Company] as an SAP consultant.',
    body: 'My work spans requirement gathering, blueprinting, configuration, UAT and hypercare in [module, e.g. FICO, MM or SD]. I have worked with ABAP developers on custom enhancements and coached key users through cut-over. I am comfortable in client-facing workshops and documenting functional specifications.',
    closing: 'I would appreciate the opportunity to discuss how my implementation experience fits your upcoming SAP engagements. Thank you for your time.',
    extraDo: 'Name your SAP module, version (ECC or S/4HANA) and number of full-cycle implementations',
    extraDont: 'Don\'t write "SAP experience" without naming a module — recruiters filter by module',
    point: 'Show full-cycle implementation experience and client-facing communication',
    faqs: [
      { q: 'Which SAP details belong in a consultant cover letter?', a: 'Name the module, the version, the number of end-to-end implementations or support projects and the industry. Recruiters shortlist by module and version first.' },
      { q: 'Does SAP certification matter in a cover letter?', a: 'Yes — mention any SAP certification with its module and year. Pair it with practical project experience, because employers weigh implementation work more than certification alone.' },
    ],
  },
  'investment-banker': {
    role: 'investment banker',
    proof: 'a transaction or analysis you supported, with deal size or scope',
    tools: 'financial modelling, DCF, M&A, valuation, pitch books',
    opening: 'I supported the execution of a [INR/USD X crore/million] [M&A / capital raise] transaction at [Company], building the valuation model and pitch materials — experience I would like to continue as an analyst at [Target Company].',
    body: 'I build three-statement and DCF models, prepare comparable-company and precedent-transaction analyses, and draft client presentations under tight deadlines. I have worked with senior bankers and clients on diligence and have a strong track record of accuracy and attention to detail.',
    closing: 'I would welcome the opportunity to discuss how I can contribute to your deal team. Thank you for your consideration.',
    extraDo: 'Reference specific deals, sectors or products you have worked on, within confidentiality limits',
    extraDont: 'Don\'t disclose confidential client details — describe deals by sector and size range',
    point: 'Show modelling accuracy, deal exposure and resilience under deadlines',
    faqs: [
      { q: 'How long should an investment banking cover letter be?', a: 'Keep it to one page and three short paragraphs. Bankers read quickly, so lead with a deal or analysis outcome and a clear reason for choosing the firm.' },
      { q: 'Should I explain why I want that specific bank?', a: 'Yes. Reference a recent deal, sector team or research output that interests you. Generic enthusiasm is easy to spot and rarely persuasive.' },
    ],
  },
  'scrum-master': {
    role: 'Scrum Master',
    proof: 'a measurable delivery improvement you drove for a team',
    tools: 'Scrum, Jira, sprint planning, retrospectives, CSM/PSM',
    opening: 'As Scrum Master for a team of [X] engineers at [Company], I helped raise sprint predictability from [A%] to [B%] by refining backlog practices and retrospectives — the delivery focus I see in [Target Company]\'s Scrum Master opening.',
    body: 'I facilitate sprint planning, daily stand-ups, reviews and retrospectives, coach product owners on backlog quality, and remove impediments across teams. I track flow metrics in Jira such as velocity and cycle time and use them to start conversations, not to pressure engineers.',
    closing: 'I would be glad to discuss how I can help your teams deliver predictably and continuously improve. Thank you for your time.',
    extraDo: 'Mention your certification (CSM, PSM or SAFe) and the team size and domain you supported',
    extraDont: 'Don\'t describe ceremonies only — show the outcome the team gained from them',
    point: 'Show servant leadership with evidence of team and delivery improvement',
    faqs: [
      { q: 'What should a Scrum Master put in a cover letter?', a: 'Describe the team you supported, the problem you helped solve and the result, such as predictability or reduced carry-over. Name your certification and tooling.' },
      { q: 'Is a Scrum certification required?', a: 'Many postings list CSM or PSM as preferred. If you hold one, state it in the letter; if not, emphasise real facilitation experience.' },
    ],
  },
  'business-development-manager': {
    role: 'business development manager',
    proof: 'revenue or pipeline you generated, against a target',
    tools: 'B2B sales, lead generation, CRM, negotiation, key accounts',
    opening: 'In my role at [Company], I built a pipeline worth [INR X lakh/crore] and closed [Y%] of my annual target by opening [Z] new enterprise accounts — results I aim to repeat as business development manager at [Target Company].',
    body: 'I identify target segments, run outreach and discovery calls, prepare proposals and negotiate commercial terms with decision-makers. I log activity in CRM tools such as HubSpot or Salesforce and partner with marketing and product teams to refine positioning.',
    closing: 'I would welcome a conversation about the growth targets you are pursuing and how I can contribute. Thank you for your consideration.',
    extraDo: 'Quote results against target (percent of quota, pipeline value, new accounts won)',
    extraDont: 'Don\'t use vague claims such as "excellent communication" without a deal or number behind them',
    point: 'Show repeatable revenue generation and relationship building',
    faqs: [
      { q: 'What numbers should a business development cover letter include?', a: 'Include quota attainment, pipeline or revenue generated, new accounts won and average deal size. Use accurate figures and rounded ranges where confidentiality applies.' },
      { q: 'Should I describe my sales process?', a: 'Briefly. One sentence on how you find, qualify and close accounts shows method; the rest of the letter should focus on results.' },
    ],
  },
  'network-engineer': {
    role: 'network engineer',
    proof: 'an uptime, migration or security improvement you delivered',
    tools: 'Cisco, CCNA/CCNP, routing and switching, firewalls, VPN, SD-WAN',
    opening: 'I led the migration of [X] branch sites to SD-WAN at [Company] with no unplanned downtime, improving link availability to [Y%] — the infrastructure reliability that [Target Company] seeks in its network engineer.',
    body: 'I configure and troubleshoot routing and switching (OSPF, BGP, VLANs), manage firewalls and VPNs, and monitor networks with tools such as SolarWinds or Nagios. I document changes, work through ITIL change processes and respond to incidents under SLA.',
    closing: 'I would appreciate the chance to discuss how my network operations experience can support your infrastructure. Thank you for your time.',
    extraDo: 'Name your certifications (CCNA, CCNP) and the vendors and protocols you have configured',
    extraDont: 'Don\'t list devices only — describe the scale of the network you managed',
    point: 'Show reliability, security awareness and structured incident handling',
    faqs: [
      { q: 'Is CCNA worth mentioning in a network engineer cover letter?', a: 'Yes. Cisco certifications are widely used as screening criteria in India. Mention the level and year and back it with hands-on configuration experience.' },
      { q: 'How do freshers write a network engineer cover letter?', a: 'Highlight lab work, certifications and any internship exposure. Describe a network you designed in a simulator such as Packet Tracer or GNS3.' },
    ],
  },
  'logistics-manager': {
    role: 'logistics manager',
    proof: 'a cost, delivery-time or accuracy improvement in your supply chain',
    tools: 'supply chain, warehouse management, 3PL, route optimisation, SAP/WMS',
    opening: 'At [Company], I cut average delivery time by [X%] and freight cost by [Y%] by renegotiating carrier contracts and reworking routes — the operational discipline I hope to bring to [Target Company]\'s logistics team.',
    body: 'I manage warehouse operations, transport planning and vendor performance, tracking KPIs such as on-time delivery, order accuracy and cost per shipment. I have worked with WMS and ERP systems, led teams of [X] and handled peak-season planning.',
    closing: 'I would welcome the opportunity to discuss how I can improve efficiency in your supply chain. Thank you for your consideration.',
    extraDo: 'Report KPIs such as OTIF, cost per shipment, inventory accuracy and team size',
    extraDont: 'Don\'t describe responsibilities only — attach a before-and-after result',
    point: 'Show cost control, service levels and people management',
    faqs: [
      { q: 'What should a logistics manager highlight in a cover letter?', a: 'Highlight cost savings, on-time delivery performance and the scale you managed, such as shipments, warehouses or team size.' },
      { q: 'Do logistics roles need a tailored cover letter?', a: 'Yes. Tie your experience to the employer\'s mode — e-commerce, FMCG, cold chain or 3PL — since each requires different skills.' },
    ],
  },
  'interior-designer': {
    role: 'interior designer',
    proof: 'a completed project with its scope, budget range and client outcome',
    tools: 'AutoCAD, SketchUp, 3ds Max, space planning, client presentations',
    opening: 'I designed and delivered a [X sq ft] [residential/commercial] project for [Client type], on budget and within [Y] weeks — the combination of aesthetics and execution I hope to bring to [Target Company].',
    body: 'I create concept boards, 2D drawings and 3D visualisations in AutoCAD and SketchUp, coordinate with contractors and vendors, and manage budgets and timelines on site. My portfolio, linked below, shows before-and-after work across [styles or sectors].',
    closing: 'I would be delighted to walk you through my portfolio and discuss how I can contribute to your design projects. Thank you for your time.',
    extraDo: 'Link your portfolio prominently and reference one project from it',
    extraDont: 'Don\'t attach large image files — share a portfolio link instead',
    point: 'Combine creative vision with budget, timeline and site-execution discipline',
    faqs: [
      { q: 'Should an interior designer attach a portfolio to a cover letter?', a: 'Link to an online portfolio rather than attaching heavy files. Reference one specific project from it in your letter.' },
      { q: 'How can freshers write an interior designer cover letter?', a: 'Lead with a college or internship project, name the software you used and link your portfolio. Show you understand client briefs and execution constraints.' },
    ],
  },
  'pharmacist': {
    role: 'pharmacist',
    proof: 'dispensing accuracy, compliance or patient-counselling work you handled',
    tools: 'dispensing, pharmacovigilance, inventory, GPP, patient counselling',
    opening: 'As a registered pharmacist with [X] years in [retail/hospital] pharmacy, I maintained dispensing accuracy and compliant stock records across [Y] prescriptions a day — the reliability I want to bring to [Target Company].',
    body: 'My responsibilities include verifying prescriptions, counselling patients on dosage and interactions, managing inventory and expiry control, and maintaining compliance with Drugs and Cosmetics regulations. I have coordinated with physicians and reported adverse events following pharmacovigilance procedures.',
    closing: 'I would welcome the opportunity to discuss how I can contribute to your pharmacy team. Thank you for your consideration.',
    extraDo: 'State your registration (State Pharmacy Council) and qualification such as B.Pharm or D.Pharm',
    extraDont: 'Don\'t omit your registration status — employers verify it first',
    point: 'Show accuracy, patient safety and regulatory compliance',
    faqs: [
      { q: 'What should a pharmacist include in a cover letter?', a: 'Include your qualification, State Pharmacy Council registration, the setting you have worked in and one example of accuracy or compliance.' },
      { q: 'Can a fresher pharmacist write an effective cover letter?', a: 'Yes. Describe internships, hospital training or dispensing practice, and emphasise attention to detail and willingness to learn.' },
    ],
  },
  'embedded-systems-engineer': {
    role: 'embedded systems engineer',
    proof: 'a firmware or hardware-integration project that shipped, with its constraints',
    tools: 'C/C++, ARM Cortex-M, RTOS, I2C/SPI/UART, CAN, JTAG',
    opening: 'I developed firmware in C for an ARM Cortex-M based [product] that met a [X ms] real-time constraint and shipped in [Y] units — the sort of constrained-systems problem that attracted me to [Target Company]\'s embedded role.',
    body: 'I write bare-metal and RTOS-based firmware, implement drivers for I2C, SPI, UART and CAN, and debug with oscilloscopes, logic analysers and JTAG. I have worked closely with hardware teams on bring-up and have optimised code for memory and power limits.',
    closing: 'I would be glad to discuss how my firmware experience can support your product development. Thank you for your time.',
    extraDo: 'Name the microcontroller families, protocols and debugging tools you have actually used',
    extraDont: 'Don\'t claim hardware skills without specifying boards or projects',
    point: 'Show low-level debugging skill and awareness of memory, power and real-time limits',
    faqs: [
      { q: 'What should an embedded engineer highlight in a cover letter?', a: 'Highlight microcontroller platforms, communication protocols, RTOS experience and one project with real constraints such as memory, power or timing.' },
      { q: 'Should I mention automotive standards?', a: 'Only if you have worked with them. For automotive roles, mention AUTOSAR, MISRA C or ISO 26262 familiarity honestly.' },
    ],
  },
  'sales-executive': {
    role: 'sales executive',
    proof: 'your target achievement, such as a percentage of quota or revenue closed',
    tools: 'lead generation, cold calling, CRM, negotiation, target achievement',
    opening: 'I closed [X%] of my annual sales target at [Company], generating INR [Y lakh] in revenue through consistent outreach and follow-up — the target-driven approach I will bring to [Target Company].',
    body: 'I qualify leads, conduct product demonstrations, handle objections and negotiate terms to close deals. I maintain accurate records in CRM tools, follow up consistently and work with the support team to ensure smooth onboarding of new customers.',
    closing: 'I would welcome the chance to discuss how I can help [Target Company] meet its sales targets. Thank you for your consideration.',
    extraDo: 'Lead with a number: quota percentage, revenue, new customers or conversion rate',
    extraDont: 'Don\'t write "hard-working and target-oriented" without evidence',
    point: 'Show persistence, communication and measurable results against targets',
    faqs: [
      { q: 'How can a fresher write a sales executive cover letter?', a: 'Use campus leadership, internships or part-time selling as evidence. Show communication skill, resilience and willingness to work toward targets.' },
      { q: 'Which metrics matter most for a sales executive?', a: 'Target achievement, revenue closed, number of new customers and conversion rate. Use exact figures and ranges where details are confidential.' },
    ],
  },
};

export const coverLetterDataMore: Record<string, CoverLetterData> = Object.fromEntries(
  Object.entries(seeds).map(([slug, seed]) => [slug, build(seed)]),
);
