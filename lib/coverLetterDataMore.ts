import type { CoverLetterData } from '@/lib/coverLetterData';

const GENERIC_DONTS = [
  'Don\'t restate your CV line by line — use the letter to add context the CV cannot',
  'Don\'t open with "I am writing to apply for…" — lead with a specific result or a reason you want this employer',
  'Don\'t reuse a letter that names a different company or role',
];

function entry(
  role: string,
  dos: string[],
  extraDonts: string[],
  keyPoints: string[],
  sampleOpening: string,
  sampleBody: string,
  sampleClosing: string,
  faqs: CoverLetterData['faqs'],
): CoverLetterData {
  return {
    dos,
    donts: [...extraDonts, ...GENERIC_DONTS].slice(0, 5),
    keyPoints,
    sampleOpening,
    sampleBody,
    sampleClosing,
    faqs: [
      ...faqs,
      {
        q: `How long should a ${role} cover letter be?`,
        a: 'Three short paragraphs and under 300 words, on one page. State the role, prove fit with one or two specific achievements, and close with a clear next step. Replace the bracketed placeholders in the sample with your own real figures — never submit numbers you cannot defend in an interview.',
      },
    ],
  };
}

export const coverLetterDataMore: Record<string, CoverLetterData> = {
  'sales-executive': entry(
    'sales executive',
    [
      'Open with a quota or target result: "[X]% of target in [period]"',
      'Name the product type, deal size and sales cycle you have handled (B2B, B2C, inside sales, field sales)',
      'Mention the tools you use — CRM (Salesforce, Zoho, HubSpot), dialers, LinkedIn Sales Navigator',
      'Show you researched the employer: their customers, territory or a recent launch',
      'Close by proposing a concrete next step, such as a call to discuss the territory plan',
    ],
    [
      'Don\'t claim to be "a people person" without a number that proves it',
      'Don\'t hide missed targets with vague words — if you mention results, give the actual figure',
    ],
    [
      'Target vs achievement, stated as a percentage and a time period',
      'Your sales motion: cold outreach, inbound follow-up, account management or channel sales',
      'Deal size, number of accounts or territory covered',
      'A short example of winning or recovering a difficult account',
    ],
    'In [year], I closed [X]% of my annual target at [Company] by building a repeatable outreach rhythm for [segment] accounts — the same disciplined approach I would bring to the Sales Executive role at [Target Company].',
    'At [Previous Company] I managed a pipeline of [N] active accounts across [region], working leads from first call to contract in a [N]-week cycle. I tracked every opportunity in [CRM], followed up on a fixed cadence, and shared a weekly forecast with my manager. When a key account stalled on pricing, I proposed a phased rollout that kept the deal alive and closed it the following quarter.',
    'I would welcome a conversation about the targets for this role and how I can help [Target Company] grow in [territory]. Thank you for your time and consideration.',
    [
      { q: 'Do sales executives need a cover letter in India?', a: 'It is often optional for high-volume inside-sales hiring, but a short, results-led letter helps you stand out for field sales, B2B and account-management roles, where hiring managers want proof of how you sell, not just that you can.' },
    ],
  ),

  'ios-developer': entry(
    'iOS developer',
    [
      'Name your stack in the first lines: Swift, SwiftUI or UIKit, Combine, Core Data',
      'Link a live App Store app or a public GitHub repository',
      'Mention release experience — TestFlight, App Store review, versioning',
      'Reference one app of the employer\'s and a specific thing you would improve or admire about it',
      'Quantify where you honestly can: crash-free rate, load time, active users',
    ],
    [
      'Don\'t list every framework you have touched — pick the three most relevant to this posting',
      'Don\'t call yourself an iOS expert without shipping evidence',
    ],
    [
      'Apps you shipped and your exact role in each (feature owner, sole developer, contributor)',
      'Architecture patterns you use: MVVM, Clean Architecture, modularisation',
      'Quality practice: unit tests, UI tests, CI with Fastlane or Xcode Cloud',
      'Performance or stability improvement you delivered, with the metric',
    ],
    'I shipped [App Name] to the App Store using SwiftUI and MVVM, and reduced its cold-start time by [X]% — the kind of attention to native performance I would like to bring to [Target Company]\'s iOS team.',
    'At [Previous Company] I owned the [feature] module end to end: designing the SwiftUI screens, integrating the REST API with async/await, and writing unit tests that brought coverage to [X]%. I handled TestFlight distribution and App Store submission, and fixed the crash that was affecting [X]% of sessions after profiling with Instruments.',
    'I would be glad to walk you through my App Store work and discuss how I can contribute to your iOS roadmap. Thank you for considering my application.',
    [
      { q: 'Should an iOS developer include App Store links in the cover letter?', a: 'Yes. A live app link is stronger evidence than any adjective. Mention one or two apps by name, say what you built, and put the links in your CV header so ATS parsers keep them as plain text.' },
    ],
  ),

  'full-stack-developer': entry(
    'full stack developer',
    [
      'State your frontend and backend stack together, matching the posting\'s wording (React, Node.js, PostgreSQL)',
      'Describe one feature you built across the whole stack, from UI to database',
      'Mention deployment and tooling — Docker, CI/CD, cloud provider',
      'Show you can move between layers: a bug you traced from browser to query',
      'Link a deployed project or repository',
    ],
    [
      'Don\'t say "full stack" while only describing frontend work',
      'Don\'t list a dozen technologies — match the posting\'s top four',
    ],
    [
      'One end-to-end feature: what you built on the UI, API and data layers',
      'Your primary stack and how closely it matches the posting',
      'Evidence of ownership: deployment, monitoring, on-call or release responsibility',
      'A measurable outcome — load time, conversion, users, cost saved',
    ],
    'At [Previous Company] I built the [feature] flow end to end — a React front end, a Node.js API and a PostgreSQL schema — which [outcome]. That range across the stack is what I would like to bring to [Target Company].',
    'I work comfortably on both sides: designing REST endpoints and database schemas, then building the TypeScript front end that consumes them. On [project] I added automated tests and a CI pipeline that deployed to [cloud] on every merge, cutting release time from [X] to [Y]. I enjoy tracing problems across layers, which has helped me close issues faster than splitting them between teams.',
    'I would welcome the chance to discuss how my full stack experience fits your team\'s roadmap. Thank you for your time.',
    [
      { q: 'How do I show full stack range without sounding unfocused?', a: 'Pick one flagship project and describe it across the stack in three sentences, then name the primary technologies from the job posting. Depth on one real feature is more convincing than a long list of tools.' },
    ],
  ),

  'machine-learning-engineer': entry(
    'machine learning engineer',
    [
      'Lead with a model you took to production and the business or metric impact',
      'Name your tools: Python, PyTorch or TensorFlow, scikit-learn, MLflow, and your cloud platform',
      'Distinguish research experiments from deployed systems — recruiters look for the latter',
      'Mention data scale and how you monitored the model after launch',
      'Tie your work to the employer\'s product or data problem',
    ],
    [
      'Don\'t quote accuracy alone — say what it was measured against and why it mattered',
      'Don\'t describe coursework as production experience',
    ],
    [
      'A model in production: problem, approach, metric and deployment path',
      'Data pipeline and feature engineering ownership',
      'MLOps practice: versioning, evaluation, monitoring, retraining',
      'Collaboration with product or engineering teams to ship the model',
    ],
    'At [Company] I built and deployed a [type] model that improved [metric] by [X]% in production — the sort of applied ML work I hope to continue on [Target Company]\'s [product/problem].',
    'I took the model from data exploration in Python through training with [PyTorch/scikit-learn], evaluation on a held-out set, and deployment behind an API on [cloud]. I set up monitoring for drift and a retraining schedule so performance did not silently degrade, and worked with the backend team to keep inference latency under [X] ms.',
    'I would appreciate the opportunity to discuss how I can help your team turn models into reliable products. Thank you for considering my application.',
    [
      { q: 'Should a machine learning engineer cover letter be technical?', a: 'Moderately. Name the model type, stack and metric, but keep the letter readable by a non-specialist recruiter. Save deep technical detail for the interview and your portfolio.' },
    ],
  ),

  'chartered-accountant': entry(
    'chartered accountant',
    [
      'State your CA qualification, attempt and membership status early',
      'Name your practice areas: statutory audit, taxation, GST, IFRS/Ind AS, FP&A, internal audit',
      'Mention the size or sector of clients or entities you handled',
      'Reference tools: Tally, SAP FICO, Excel, audit software',
      'Show commercial judgement — a process you improved or a risk you flagged',
    ],
    [
      'Don\'t describe routine compliance as achievement — show a result such as faster close or reduced errors',
      'Don\'t omit articleship and where it was served if you are newly qualified',
    ],
    [
      'Qualification status and articleship background',
      'Areas of specialisation matched to the posting (audit, tax, finance, advisory)',
      'Scale: clients, entities, turnover or transaction volume handled',
      'A control, saving or compliance improvement you delivered',
    ],
    'As a newly qualified Chartered Accountant with an articleship in statutory audit at [Firm], I have worked on audits of [N] entities across [sectors] — experience I would like to apply to the [role] position at [Target Company].',
    'During articleship and my first year post-qualification I handled audit planning, vouching, GST reconciliation and preparation of financial statements under Ind AS. At [Company] I introduced a monthly reconciliation checklist that reduced close-time errors and helped the team submit returns before deadlines.',
    'I would welcome an opportunity to discuss how my audit and compliance background can support your finance function. Thank you for your consideration.',
    [
      { q: 'Do chartered accountants need a cover letter for Big 4 applications?', a: 'Big 4 firms usually run structured campus and portal processes where a letter is optional, but a concise one is valuable for lateral and industry finance roles, where it can explain your specialisation and motivation.' },
    ],
  ),

  'sap-consultant': entry(
    'SAP consultant',
    [
      'State your module and version: FICO, MM, SD, ABAP, S/4HANA',
      'Describe your project role across the lifecycle — blueprint, configuration, UAT, go-live, support',
      'Mention implementation scale: users, company codes, plants or countries',
      'Name the integration, migration or reporting work you handled',
      'Say whether you have been on implementation, rollout or AMS support projects',
    ],
    [
      'Don\'t list every SAP module — name the one or two you actually configured',
      'Don\'t use project codenames the reader cannot place; describe the client sector instead',
    ],
    [
      'Module expertise and S/4HANA exposure',
      'Lifecycle stage you owned: blueprint, build, testing, cutover or support',
      'Business process knowledge, not just configuration steps',
      'Client-facing communication and documentation ability',
    ],
    'I have configured SAP [module] on [N] implementation projects, most recently a S/4HANA rollout for a [sector] client covering [N] company codes — experience I would like to bring to [Target Company]\'s consulting practice.',
    'On the S/4HANA project I led the [module] workstream: gathering requirements from finance and procurement users, configuring the solution, preparing test scripts and supporting UAT through cutover. After go-live I resolved the first-month tickets within SLA and documented the fixes so the support team could handle recurring issues.',
    'I would be happy to discuss how my SAP experience fits your current engagements. Thank you for your time.',
    [
      { q: 'Should an SAP consultant mention certifications in the cover letter?', a: 'Yes, briefly. Name the certification and module once, but spend the letter on project outcomes — clients hire consultants for what they delivered, not only for the credential.' },
    ],
  ),

  'react-developer': entry(
    'React developer',
    [
      'Name your React toolchain: TypeScript, Redux or Zustand, Next.js, React Query',
      'Describe one interface you built and the user or performance result',
      'Mention testing practice — Jest, React Testing Library, Cypress',
      'Show attention to accessibility and responsive design',
      'Link a live site or repository',
    ],
    [
      'Don\'t write "proficient in React" with nothing to back it up — describe what you built',
      'Don\'t paste your whole skills section into the letter',
    ],
    [
      'A component or product you shipped, with scale or user numbers',
      'Performance work: bundle size, rendering, Core Web Vitals',
      'Collaboration with designers and backend engineers',
      'State management and testing approach',
    ],
    'I rebuilt the [feature] interface at [Company] in React and TypeScript, improving its load time by [X]% — the kind of craft I want to bring to [Target Company]\'s front-end team.',
    'I build component libraries and data-heavy dashboards in React, using TypeScript for safety and React Testing Library to protect behaviour. On [project] I introduced code-splitting and memoisation that reduced the main bundle by [X] KB, and worked closely with designers to keep the interface accessible and consistent across breakpoints.',
    'I would love to discuss how I can contribute to your front-end work. Thank you for considering my application.',
    [
      { q: 'Do React developers need a portfolio link in the cover letter?', a: 'Yes — one strong link is better than many. Include a deployed project or repository in your CV header and refer to it by name in the letter.' },
    ],
  ),

  'investment-banker': entry(
    'investment banker',
    [
      'Open with a transaction or analysis you worked on, within confidentiality limits',
      'State your role in the deal: modelling, pitch books, due diligence, execution support',
      'Show sector or product focus that matches the group you are applying to',
      'Reference the bank\'s recent mandates or league-table position',
      'Demonstrate precision: write the letter without errors and tailor the bank name carefully',
    ],
    [
      'Don\'t disclose confidential client names or figures',
      'Don\'t send a generic "banking" letter — each desk values different sector knowledge',
    ],
    [
      'Transaction experience and your specific contribution',
      'Technical skills: valuation, financial modelling, Excel, PowerPoint',
      'Why this bank and this group in particular',
      'Stamina and attention to detail under deadlines',
    ],
    'Having supported [N] M&A and capital-raising mandates in the [sector] space at [Firm], I am keen to join [Target Company]\'s [group] team, whose work on [recent transaction] I have followed closely.',
    'My work covered building three-statement and DCF models, preparing pitch materials and supporting due diligence workstreams. On one mandate I owned the comparable-company analysis end to end, working to tight deadlines and incorporating feedback from the senior team without compromising accuracy.',
    'I would welcome the chance to speak with the team about how I can add to its execution capability. Thank you for your time and consideration.',
    [
      { q: 'Is a cover letter expected for investment banking applications in India?', a: 'Most banks expect a short, polished letter alongside the CV, especially for lateral and MBA hiring. Keep it to one page and tailor it to the specific group.' },
    ],
  ),

  'scrum-master': entry(
    'Scrum Master',
    [
      'State your certification (CSM, PSM) and the team size you have served',
      'Describe a concrete improvement — cycle time, predictability, release frequency',
      'Mention the tools you use: Jira, Confluence, Azure DevOps',
      'Show how you coach, not just facilitate ceremonies',
      'Include examples of removing blockers across teams',
    ],
    [
      'Don\'t reduce the role to "running meetings" — describe the outcomes your coaching produced',
      'Don\'t overstate authority; a Scrum Master serves the team',
    ],
    [
      'Team size, delivery context and framework (Scrum, Kanban, SAFe)',
      'Measurable team improvement with the metric named',
      'Stakeholder and product owner collaboration',
      'Coaching and retrospective practice',
    ],
    'As Scrum Master for a team of [N] engineers at [Company], I helped raise sprint predictability from [X]% to [Y]% by refining backlog practice and retrospectives — the coaching mindset I would bring to [Target Company].',
    'I facilitate planning, reviews and retrospectives, but my focus is on removing the impediments behind them: unclear priorities, hidden dependencies and handoff delays. By introducing a working agreement and a visible flow board in Jira, the team cut its average cycle time and the product owner gained a clearer view of what would ship.',
    'I would be glad to talk about how I can support your teams in delivering with more clarity and less friction. Thank you for your time.',
    [
      { q: 'Should a Scrum Master list certifications in the cover letter?', a: 'Mention them once, then focus on the team outcomes. Employers want to see that you can improve how a team works, which a certificate alone does not show.' },
    ],
  ),

  'business-development-manager': entry(
    'business development manager',
    [
      'Open with revenue, partnerships or new markets you opened, with figures',
      'Describe the full cycle: lead generation, pitching, negotiation and handover',
      'Name the industries or client segments you know',
      'Reference the employer\'s growth opportunity you would target first',
      'Show relationship-building through specific partnerships you secured',
    ],
    [
      'Don\'t claim a large network without naming a concrete result from it',
      'Don\'t promise growth numbers you cannot support',
    ],
    [
      'Revenue or partnership results with time frame',
      'Market or segment expansion you led',
      'Strategic thinking: why you chose a target account or channel',
      'Cross-functional work with product, marketing and delivery teams',
    ],
    'At [Company] I opened the [segment] market and built a pipeline that contributed ₹[X] in new revenue within [N] months — the kind of growth ownership I would like to bring to [Target Company].',
    'I identify target accounts, build the business case with decision-makers, and negotiate terms that work for both sides. In my last role I secured [N] channel partnerships and worked with delivery to make onboarding smooth, which kept those partners active beyond the first quarter.',
    'I would welcome a conversation about the growth priorities for this role. Thank you for your consideration.',
    [
      { q: 'What should a business development cover letter emphasise?', a: 'Revenue and partnership outcomes, the markets you understand, and a clear idea of where you would start at the new employer. Specifics beat claims about being "results-driven".' },
    ],
  ),

  'network-engineer': entry(
    'network engineer',
    [
      'State certifications and platforms: CCNA/CCNP, Cisco, Juniper, Fortinet, Palo Alto',
      'Describe the network scale you managed: sites, devices, users',
      'Mention uptime, incident response or migration projects with results',
      'Name your protocols and technologies: BGP, OSPF, VLAN, SD-WAN, firewalls',
      'Include on-call or shift experience if the role requires it',
    ],
    [
      'Don\'t list protocols without showing where you used them',
      'Don\'t omit scale — a 5-site and a 500-site network are very different jobs',
    ],
    [
      'Network size and environment (enterprise, data centre, ISP)',
      'A migration, upgrade or outage you resolved',
      'Security practice: firewall rules, segmentation, monitoring',
      'Documentation and change-management discipline',
    ],
    'I manage a [N]-site enterprise network at [Company] and led its migration to SD-WAN with minimal downtime — experience I would like to apply as a Network Engineer at [Target Company].',
    'My day-to-day covers routing and switching configuration with OSPF and BGP, firewall policy changes and monitoring with [tool]. During a major outage I isolated the fault to a misconfigured trunk, restored service within the SLA and wrote the runbook that now guides the team through similar incidents.',
    'I would be pleased to discuss how my network operations experience can support your infrastructure. Thank you for your time.',
    [
      { q: 'Do network engineers need a cover letter?', a: 'For large IT services employers the CV and certifications carry most weight, but a short letter helps for senior roles and smaller companies by showing scale, incident handling and communication skills.' },
    ],
  ),

  'logistics-manager': entry(
    'logistics manager',
    [
      'Lead with cost, delivery-time or service-level improvements you achieved',
      'State the scale: shipments, warehouses, fleet, vendors',
      'Name the systems you use: WMS, TMS, ERP, route-planning tools',
      'Describe how you manage carriers, vendors and compliance',
      'Mention peak-season or disruption handling',
    ],
    [
      'Don\'t describe duties without outcomes — attach a metric to each claim',
      'Don\'t ignore the employer\'s supply chain model (e-commerce, FMCG, manufacturing)',
    ],
    [
      'On-time delivery, cost per shipment or inventory accuracy results',
      'Scale of operations and team managed',
      'Vendor negotiation and carrier performance management',
      'Process improvement or technology adoption you led',
    ],
    'At [Company] I reduced average delivery lead time by [X]% across [N] locations by renegotiating carrier contracts and re-routing key lanes — the operational focus I would bring to [Target Company]\'s logistics team.',
    'I manage inbound and outbound flows for [N] warehouses with a team of [N], using [WMS/TMS] to track performance daily. During peak season I added a contingency carrier plan that kept on-time delivery above target, and I run monthly reviews with vendors to resolve recurring delays.',
    'I would welcome the opportunity to discuss how I can improve service levels and control costs in your supply chain. Thank you for your consideration.',
    [
      { q: 'What metrics should a logistics manager cover letter include?', a: 'On-time delivery rate, cost per unit or shipment, inventory accuracy and damage or claims rate are the most recognised. Use the ones that match the posting and state the period they were measured over.' },
    ],
  ),

  'interior-designer': entry(
    'interior designer',
    [
      'Link a portfolio — in this field it matters more than the letter',
      'Describe one project: brief, constraints, your design decisions and the outcome',
      'Name your software: AutoCAD, SketchUp, 3ds Max, Revit, Photoshop',
      'Mention budget, site coordination and vendor management experience',
      'Connect your style to the studio\'s published work',
    ],
    [
      'Don\'t write only about passion for design — show a delivered project',
      'Don\'t attach large unrequested files; send a portfolio link instead',
    ],
    [
      'Project type and scale: residential, commercial, hospitality',
      'Design software and rendering skill',
      'Site execution, budgeting and client communication',
      'Why this studio\'s work resonates with yours',
    ],
    'I recently designed and delivered a [type] interior of [N] sq ft at [Studio], balancing a tight budget with a brief for [style] — the kind of practical, client-focused design I admire in [Target Studio]\'s work.',
    'I handle projects from concept boards and 3D visuals in SketchUp through working drawings in AutoCAD and site supervision. On [project] I coordinated carpenters and vendors, adjusted the material plan when costs rose, and handed over on schedule to a satisfied client.',
    'I have shared my portfolio at [link] and would love to discuss how I can contribute to your upcoming projects. Thank you for your time.',
    [
      { q: 'Is a portfolio more important than a cover letter for interior designers?', a: 'Yes. The portfolio decides shortlisting; the letter should briefly introduce your approach, point to one or two projects in it and make it easy for the studio to open.' },
    ],
  ),

  pharmacist: entry(
    'pharmacist',
    [
      'State your registration and qualification (B.Pharm, M.Pharm, Pharm.D, state pharmacy council registration)',
      'Describe your setting: hospital, retail, clinical, regulatory or manufacturing',
      'Mention dispensing volume, inventory or compliance responsibilities',
      'Show patient counselling and safety practice with an example',
      'Reference relevant regulations and systems you work with',
    ],
    [
      'Don\'t omit your registration details — employers check them first',
      'Don\'t describe patient cases in identifiable detail',
    ],
    [
      'Registration, degree and any specialisation',
      'Setting-specific experience and volume handled',
      'Accuracy, safety and regulatory compliance',
      'Patient or prescriber communication skill',
    ],
    'As a registered pharmacist with [N] years in [hospital/retail] pharmacy at [Organisation], I take pride in accurate dispensing and patient counselling, and I am keen to join [Target Company] as a [role].',
    'I dispense and verify prescriptions, manage stock and expiry controls, and counsel patients on dosage and interactions. I introduced a double-check step for look-alike medicines that helped the team avoid dispensing errors, and I keep records in line with schedule and audit requirements.',
    'I would appreciate the opportunity to discuss how I can support your pharmacy team. Thank you for your consideration.',
    [
      { q: 'What credentials should a pharmacist mention in a cover letter?', a: 'State your degree, state pharmacy council registration and any additional training such as clinical or regulatory certifications, then focus on the safety and service outcomes you delivered.' },
    ],
  ),

  'embedded-systems-engineer': entry(
    'embedded systems engineer',
    [
      'Name your microcontrollers and platforms: ARM Cortex-M, STM32, ESP32, RTOS',
      'State your languages — C, C++ — and protocols such as I2C, SPI, UART, CAN',
      'Describe a product or board you took from bring-up to production',
      'Mention debugging tools: JTAG, logic analysers, oscilloscopes',
      'Link a project repository or hardware write-up',
    ],
    [
      'Don\'t list hobby kits as production experience without saying so',
      'Don\'t skip the product domain — automotive, IoT and medical hiring differ',
    ],
    [
      'Hardware and firmware stack matched to the posting',
      'A product you shipped and your contribution',
      'Debugging, testing and optimisation for memory or power',
      'Standards or safety practice relevant to the domain',
    ],
    'I wrote and validated the firmware for [product] on an [MCU] using C and FreeRTOS, taking it from board bring-up to production — the embedded depth I would like to bring to [Target Company].',
    'My work includes driver development over I2C, SPI and CAN, RTOS task design and hardware debugging with JTAG and a logic analyser. On [project] I reduced power consumption by tuning sleep modes and fixed an intermittent bus fault that had delayed validation, documenting the root cause for the team.',
    'I would welcome the opportunity to discuss how I can contribute to your embedded products. Thank you for your time.',
    [
      { q: 'Should an embedded engineer include hardware projects in the cover letter?', a: 'Yes. Mention one project with the MCU, protocol stack and the result, and link the repository or write-up. It shows hands-on skill that a keyword list cannot.' },
    ],
  ),
};
