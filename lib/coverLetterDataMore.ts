import type { CoverLetterData } from '@/lib/coverLetterData';

// Cover-letter guidance for the 15 roles not covered by the base map.
// Sample paragraphs use bracketed placeholders for figures so users insert their
// own verified numbers; no salary, statistic or employer claim is made here.

interface RoleSeed {
  title: string;
  stack: string;
  proof: string;
  dos: string[];
  donts: string[];
  keyPoints: string[];
  opening: string;
  body: string;
  closing: string;
  extraFaq: { q: string; a: string };
}

function build(s: RoleSeed): CoverLetterData {
  return {
    dos: s.dos,
    donts: [
      ...s.donts,
      'Don\'t send a generic letter — name the company, the role title and one specific reason you want this team',
    ],
    keyPoints: s.keyPoints,
    sampleOpening: s.opening,
    sampleBody: s.body,
    sampleClosing: s.closing,
    faqs: [
      {
        q: `Do I need a cover letter for a ${s.title} job in India?`,
        a: `It is rarely mandatory, but a short, specific cover letter helps when the posting asks for one, when you are changing company type or domain, or when you were referred. Keep it under 300 words and lead with ${s.proof}.`,
      },
      s.extraFaq,
    ],
  };
}

export const coverLetterDataMore: Record<string, CoverLetterData> = {
  'full-stack-developer': build({
    title: 'full stack developer',
    stack: 'React, Node.js',
    proof: 'one shipped feature you owned end to end, from database to UI',
    dos: [
      'Name the frontend and backend stack from the job description in the first two lines',
      'Describe one feature you owned across UI, API and database, and what it changed for users',
      'Mention deployment ownership — CI/CD, Docker or cloud — if the posting lists it',
      'Link a live project or GitHub repository as plain text',
      'Show you understand the company\'s product, not just its tech stack',
    ],
    donts: [
      'Don\'t write "MERN developer" and stop — name each technology you have actually shipped with',
      'Don\'t claim expert level in every layer; be honest about where you are strongest',
      'Avoid restating your CV project list line by line',
      'Don\'t open with "I am writing to apply" — open with what you built',
    ],
    keyPoints: [
      'One end-to-end feature with a measurable outcome',
      'Breadth across frontend, backend and data, with a clear strongest layer',
      'Evidence of testing and deployment habits',
      'Why this product or team interests you',
    ],
    opening: 'At [Company] I built and shipped [feature] end to end — React front end, Node.js API and a PostgreSQL schema — which [outcome, e.g. cut checkout drop-off by X%]. That mix of product and engineering ownership is what I want to bring to [Target Company].',
    body: 'My day-to-day work spans building React interfaces, designing REST endpoints, tuning database queries and deploying through a CI/CD pipeline with Docker. On [project] I introduced automated tests around the payment flow and reduced release rollbacks. I am most comfortable on the [backend/frontend] side and keep sharpening the other through code reviews and side projects.',
    closing: 'I would value a conversation about how I can help your team ship [product area] faster and more reliably. Thank you for your time and consideration.',
    extraFaq: {
      q: 'Should a full stack developer\'s cover letter focus on frontend or backend?',
      a: 'Follow the job description. If it stresses React and UI quality, lead with frontend work; if it stresses APIs and data, lead with backend. Then show you can work across both.',
    },
  }),
  'react-developer': build({
    title: 'React developer',
    stack: 'React, TypeScript',
    proof: 'a React interface you built and a user or performance outcome it improved',
    dos: [
      'Mention React version-era skills the posting names — hooks, Context, Redux or Zustand, Next.js',
      'Quantify a performance or UX result: load time, bundle size, Lighthouse score or conversion',
      'Show state-management and testing practices (Jest, React Testing Library)',
      'Reference accessibility and responsive design if relevant to the product',
      'Link a deployed app or repository as plain text',
    ],
    donts: [
      'Don\'t list every npm package you have installed',
      'Avoid saying you are "passionate about frontend" without an example',
      'Don\'t exaggerate TypeScript or Next.js depth if you have used them lightly',
      'Don\'t paste the same letter for backend-heavy roles',
    ],
    keyPoints: [
      'A component or app architecture decision you made and why',
      'A measurable performance or usability improvement',
      'Comfort with TypeScript, testing and code review',
      'Awareness of the company\'s product UX',
    ],
    opening: 'I rebuilt [Company]\'s [dashboard/checkout] in React and TypeScript, [reducing initial load time by X%] and making it accessible on low-end mobile devices — the kind of frontend craft I want to apply at [Target Company].',
    body: 'I work with React hooks, a typed component library, React Query for server state and Jest with React Testing Library for coverage. On [project] I split the bundle with route-level code splitting and replaced a heavy charting library, which [outcome]. I pair closely with designers to keep components consistent and accessible.',
    closing: 'I would welcome the chance to walk you through my work and discuss how I can contribute to [Target Company]\'s frontend roadmap. Thank you for considering my application.',
    extraFaq: {
      q: 'Should I attach a portfolio to a React developer cover letter?',
      a: 'Yes — include one or two live links as plain text. Hiring managers for frontend roles usually open the deployed app before reading further.',
    },
  }),
  'ios-developer': build({
    title: 'iOS developer',
    stack: 'Swift, SwiftUI',
    proof: 'an app or feature you shipped on the App Store and what it achieved',
    dos: [
      'Name Swift, SwiftUI or UIKit and the architecture you use (MVVM, Clean)',
      'Mention an App Store release and any ratings, crash-free rate or adoption you can verify',
      'Show experience with concurrency, Core Data or networking where relevant',
      'Mention testing, CI (Fastlane, Xcode Cloud) and release ownership',
      'Explain why this product suits a native iOS approach',
    ],
    donts: [
      'Don\'t claim SwiftUI mastery if your work is mostly UIKit — say what is true',
      'Avoid listing every Apple framework you have touched',
      'Don\'t leave out App Store or TestFlight evidence if you have it',
      'Avoid generic "mobile developer" language when the role is iOS-specific',
    ],
    keyPoints: [
      'A shipped app or feature with a verifiable outcome',
      'Architecture and testing approach',
      'Familiarity with App Store review and release process',
      'Interest in the company\'s product category',
    ],
    opening: 'I shipped [App/Feature] on the App Store using Swift and SwiftUI, [reaching X downloads / a Y-star rating], and own its release pipeline through Fastlane — experience I am keen to bring to [Target Company]\'s iOS team.',
    body: 'I structure apps with MVVM, use async/await for networking, cache with Core Data and cover business logic with XCTest. At [Company] I diagnosed a launch-time regression with Instruments and improved start-up time by [X%]. I am comfortable moving between SwiftUI and legacy UIKit code.',
    closing: 'I would be glad to discuss how my iOS experience can support [Target Company]\'s next releases. Thank you for your time.',
    extraFaq: {
      q: 'What should an iOS developer put in a cover letter if the apps are not public?',
      a: 'Describe the architecture, scale and your role, and offer a code walkthrough or sample project. Be precise about what you owned rather than implying a public release.',
    },
  }),
  'machine-learning-engineer': build({
    title: 'machine learning engineer',
    stack: 'Python, PyTorch',
    proof: 'a model you took to production and the business or latency metric it moved',
    dos: [
      'Lead with a model in production, not a notebook experiment',
      'Name frameworks and MLOps tools you have used — PyTorch, scikit-learn, MLflow, Airflow, Docker',
      'State the evaluation metric and the baseline you beat',
      'Mention data pipelines, monitoring and retraining, not just modelling',
      'Connect your domain experience to the company\'s data problem',
    ],
    donts: [
      'Don\'t quote accuracy without naming the metric and dataset context',
      'Avoid overstating research or deep-learning depth you have not shipped',
      'Don\'t list Kaggle ranks as a substitute for production work',
      'Avoid buzzwords without a concrete system behind them',
    ],
    keyPoints: [
      'A deployed model with an evaluation metric and outcome',
      'End-to-end ownership: data, training, serving, monitoring',
      'Specific tools and frameworks, honestly scoped',
      'Understanding of the company\'s ML use case',
    ],
    opening: 'I took a [churn/fraud/recommendation] model from prototype to production at [Company], improving [metric] from [baseline] to [result] while keeping inference under [X ms] — the kind of applied ML work I want to do at [Target Company].',
    body: 'I build training pipelines in Python and PyTorch, track experiments with MLflow, serve models behind containerised APIs and monitor drift after release. On [project] I redesigned feature engineering and introduced offline-to-online validation, which reduced silent regressions. I focus on measurable business impact over leaderboard scores.',
    closing: 'I would welcome the opportunity to discuss how my production ML experience can support [Target Company]\'s roadmap. Thank you for your consideration.',
    extraFaq: {
      q: 'How is a machine learning engineer cover letter different from a data scientist one?',
      a: 'ML engineer letters emphasise productionisation — serving, monitoring, pipelines and reliability — while data scientist letters lean toward analysis, experimentation and insight. Match the emphasis to the posting.',
    },
  }),
  'embedded-systems-engineer': build({
    title: 'embedded systems engineer',
    stack: 'C, RTOS',
    proof: 'a firmware or hardware-integration project that reached a working device',
    dos: [
      'Name microcontrollers, RTOS and protocols you have used — STM32, FreeRTOS, I2C, SPI, CAN',
      'Describe one device or product your firmware ran on',
      'Mention debugging tools — JTAG, oscilloscope, logic analyser',
      'State constraints you handled: memory, power, real-time deadlines',
      'Show awareness of the company\'s domain — automotive, IoT, medical or industrial',
    ],
    donts: [
      'Don\'t list every board you have touched; name the ones you shipped on',
      'Avoid claiming safety-standard experience (ISO 26262, IEC 62304) you do not have',
      'Don\'t describe only coursework if you have industry or internship work',
      'Avoid vague phrases like "good with hardware"',
    ],
    keyPoints: [
      'A concrete firmware project and its constraints',
      'Protocols, RTOS and debugging toolchain',
      'Testing and bring-up experience',
      'Domain alignment with the employer',
    ],
    opening: 'I wrote the C firmware for [device] on an STM32 running FreeRTOS, meeting a [X ms] real-time deadline within a tight memory budget — experience I would like to apply to [Target Company]\'s [automotive/IoT] products.',
    body: 'My work covers driver development for I2C, SPI and CAN peripherals, interrupt-driven design, low-power modes and board bring-up using JTAG and a logic analyser. On [project] I traced an intermittent bus fault to a timing issue and wrote regression tests to prevent recurrence.',
    closing: 'I would appreciate the chance to discuss how my firmware experience can support your embedded team. Thank you for your time.',
    extraFaq: {
      q: 'Can a fresher embedded engineer write a strong cover letter?',
      a: 'Yes — describe a hardware project or internship in detail: the microcontroller, peripherals, the bug you debugged and what the device did. Concrete bring-up stories beat generic enthusiasm.',
    },
  }),
  'network-engineer': build({
    title: 'network engineer',
    stack: 'Cisco, routing and switching',
    proof: 'a network change or incident you handled and its effect on uptime',
    dos: [
      'List relevant certifications only if you hold them — CCNA, CCNP, JNCIA',
      'Name protocols and platforms: BGP, OSPF, VLAN, firewalls, SD-WAN',
      'Describe a migration, rollout or outage you resolved',
      'Mention monitoring and documentation habits',
      'Show familiarity with the scale and type of network the employer runs',
    ],
    donts: [
      'Don\'t claim certifications that are only "in progress" as completed',
      'Avoid vendor lists without context on what you configured',
      'Don\'t ignore security — mention firewall and access-control work where true',
      'Avoid generic "network troubleshooting" without an example',
    ],
    keyPoints: [
      'A concrete network project or incident resolution',
      'Protocols, vendors and certifications you actually hold',
      'Monitoring and change-management discipline',
      'Fit with the employer\'s network scale',
    ],
    opening: 'I led the migration of [N] branch sites to [SD-WAN/new core] at [Company] with [zero/minimal] unplanned downtime — the change-management discipline I would bring to [Target Company]\'s network team.',
    body: 'My experience covers BGP and OSPF routing, VLAN design, firewall policy and monitoring with [tool]. During [incident] I isolated a routing loop within [X minutes] and documented a runbook that shortened later resolutions. I hold [certification] and keep network diagrams current.',
    closing: 'I would welcome a discussion on how I can strengthen the reliability of your network. Thank you for your consideration.',
    extraFaq: {
      q: 'Is CCNA necessary to mention in a network engineer cover letter?',
      a: 'If the posting lists it and you hold it, mention it early. If you do not hold it, focus on hands-on configuration experience and avoid implying a certification you lack.',
    },
  }),
  'sap-consultant': build({
    title: 'SAP consultant',
    stack: 'SAP S/4HANA',
    proof: 'an SAP implementation or support engagement and the process it improved',
    dos: [
      'State your module — FI/CO, MM, SD, ABAP, Basis — in the first sentence',
      'Mention implementation phases you covered: blueprint, configuration, UAT, go-live, support',
      'Name versions you worked on — ECC, S/4HANA',
      'Quantify business impact such as close time, order cycle or ticket resolution',
      'Show client-facing communication skills',
    ],
    donts: [
      'Don\'t list modules you have only studied',
      'Avoid overstating S/4HANA migration experience if your work was ECC support',
      'Don\'t skip the business outcome — SAP work is judged by process impact',
      'Avoid jargon-only paragraphs without a story',
    ],
    keyPoints: [
      'Primary module and version',
      'Project phase ownership',
      'Business process outcome',
      'Stakeholder and client communication',
    ],
    opening: 'As an SAP [FI/CO] consultant at [Company], I configured [process] for a [industry] client during an S/4HANA rollout, which [shortened month-end close by X days] — the outcome-focused delivery I aim to bring to [Target Company].',
    body: 'I have worked across requirement workshops, configuration, data migration validation, UAT and hypercare. On [project] I resolved a reconciliation gap between sub-ledger and general ledger and trained the finance team. I document configuration so support teams can run it confidently.',
    closing: 'I would be glad to discuss how my SAP delivery experience fits your upcoming programmes. Thank you for your time.',
    extraFaq: {
      q: 'Should an SAP consultant mention certifications in the cover letter?',
      a: 'Yes, if held and current — name the exact certification and module. Pair it with a delivery example, since clients weigh project experience heavily.',
    },
  }),
  'scrum-master': build({
    title: 'Scrum Master',
    stack: 'Scrum, Jira',
    proof: 'a team you coached and the delivery or predictability improvement that followed',
    dos: [
      'Describe a team you coached and what changed: cycle time, predictability, morale',
      'Name frameworks and tools: Scrum, Kanban, Jira, retrospectives',
      'Mention certifications such as CSM or PSM only if held',
      'Show how you removed impediments, not just ran ceremonies',
      'Explain how you work with product owners and stakeholders',
    ],
    donts: [
      'Don\'t reduce the role to "scheduling meetings"',
      'Avoid quoting velocity as a success metric on its own',
      'Don\'t claim organisation-wide transformations if you led one team',
      'Avoid framework dogma — show pragmatism',
    ],
    keyPoints: [
      'Team size and context you coached',
      'Observable improvement with a verifiable measure',
      'Facilitation and conflict-resolution skills',
      'Collaboration with product and leadership',
    ],
    opening: 'I coached a [N]-person team at [Company] from missed sprint commitments to [reliable delivery], by fixing backlog refinement and removing a recurring dependency blocker — the servant-leadership approach I would bring to [Target Company].',
    body: 'I facilitate planning, reviews and retrospectives that produce concrete actions, track flow with Jira dashboards and coach product owners on slicing work. On [project] I introduced a working agreement that cut carry-over work by [X%]. I hold [CSM/PSM] certification.',
    closing: 'I would welcome the chance to discuss how I can help your teams deliver predictably. Thank you for your consideration.',
    extraFaq: {
      q: 'What makes a Scrum Master cover letter stand out?',
      a: 'Evidence of outcomes — a team that became more predictable or shipped sooner — rather than a list of ceremonies you facilitate. One specific coaching story is stronger than a framework summary.',
    },
  }),
  'business-development-manager': build({
    title: 'business development manager',
    stack: 'B2B sales pipeline',
    proof: 'a deal, partnership or revenue result you personally drove',
    dos: [
      'Lead with revenue, pipeline or partnership numbers you can verify',
      'Name the segments and geographies you sold into',
      'Describe your process: prospecting, qualification, negotiation, closure',
      'Mention CRM tools such as Salesforce or HubSpot',
      'Tie your network and experience to the employer\'s target market',
    ],
    donts: [
      'Don\'t quote targets achieved without context on the baseline',
      'Avoid vague claims like "excellent relationship builder"',
      'Don\'t disclose confidential client names or figures',
      'Avoid a letter that ignores the company\'s products',
    ],
    keyPoints: [
      'Quantified revenue or pipeline result',
      'Sales cycle and deal-size experience',
      'Market and client-segment knowledge',
      'Partnership or channel-building examples',
    ],
    opening: 'At [Company] I built a [segment] pipeline from scratch and closed [₹X crore / N] in new business within [period] — the kind of structured growth I want to deliver for [Target Company].',
    body: 'I manage the full cycle from outbound prospecting to contract negotiation, tracking every stage in [CRM]. On [deal] I partnered with product and finance to craft terms that shortened the sales cycle. I invest in long-term accounts and referral partnerships over one-off wins.',
    closing: 'I would appreciate the opportunity to share how I can expand your market presence. Thank you for your time.',
    extraFaq: {
      q: 'Should I include numbers in a business development cover letter?',
      a: 'Yes, but only figures you can defend in an interview, and avoid revealing confidential client data. Use ranges or percentages where exact numbers are sensitive.',
    },
  }),
  'sales-executive': build({
    title: 'sales executive',
    stack: 'field and inside sales',
    proof: 'a target you met or exceeded and how you did it',
    dos: [
      'Open with a target-versus-achievement result',
      'Mention the product category and customer type you sold to',
      'Describe your lead-generation and follow-up routine',
      'Show product knowledge relevant to the employer',
      'Mention languages and regional markets you can cover',
    ],
    donts: [
      'Don\'t make unverifiable claims like "best salesperson ever"',
      'Avoid listing responsibilities without results',
      'Don\'t be pushy or use sales clichés in the letter itself',
      'Avoid generic letters for different industries',
    ],
    keyPoints: [
      'Target achievement percentage and context',
      'Customer segment and territory knowledge',
      'Consistent follow-up and relationship habits',
      'Communication and local-language strengths',
    ],
    opening: 'I achieved [X%] of my quarterly target as a sales executive at [Company], selling [product] to [customer type] across [territory] — consistency I intend to bring to [Target Company].',
    body: 'My routine blends daily prospecting calls, scheduled field visits and structured follow-ups logged in [CRM]. On [campaign] I reactivated lapsed accounts with a tailored offer, which [outcome]. I speak [languages] and understand regional buying patterns.',
    closing: 'I would welcome the chance to discuss how I can help meet your sales goals. Thank you for considering my application.',
    extraFaq: {
      q: 'Can a fresher sales executive write a cover letter without sales numbers?',
      a: 'Yes — cite campus events, internships or part-time work where you persuaded or converted people, and show product curiosity and communication skills. Be honest about experience level.',
    },
  }),
  'chartered-accountant': build({
    title: 'chartered accountant',
    stack: 'audit, tax and compliance',
    proof: 'an audit, tax or finance project and the accuracy or saving it delivered',
    dos: [
      'State your CA qualification year and membership status clearly',
      'Specify your area: statutory audit, direct tax, GST, internal audit, FP&A',
      'Mention Ind AS or IFRS and tools such as Tally, SAP or Excel',
      'Describe an assurance or compliance project with outcome',
      'Show integrity and confidentiality awareness',
    ],
    donts: [
      'Don\'t reveal client names or confidential figures',
      'Avoid listing articleship duties without outcomes',
      'Don\'t claim specialisations you have not practised',
      'Avoid inaccurate regulatory references — verify any rule you cite',
    ],
    keyPoints: [
      'Qualification and area of specialisation',
      'Standards and software proficiency',
      'A project with measurable result',
      'Professional ethics and communication',
    ],
    opening: 'As a qualified Chartered Accountant with [N] years in [statutory audit/direct tax], I led [engagement] that [identified X / reduced Y] — rigour I aim to bring to [Target Company]\'s finance function.',
    body: 'My work covers audit planning, Ind AS reporting, GST reconciliation and review of controls, using Tally, SAP and advanced Excel. On [project] I streamlined the reconciliation workflow and cut closing time by [X days]. I communicate findings clearly to non-finance stakeholders.',
    closing: 'I would value a discussion on how my expertise can support your finance team. Thank you for your time.',
    extraFaq: {
      q: 'Should a CA mention articleship in a cover letter?',
      a: 'Briefly, if you are early in your career, with the sectors and tasks you handled. Experienced CAs should lead with post-qualification achievements instead.',
    },
  }),
  'investment-banker': build({
    title: 'investment banker',
    stack: 'financial modelling and deal execution',
    proof: 'a transaction or model you worked on, described without breaching confidentiality',
    dos: [
      'Describe deal types you worked on: M&A, ECM, DCM, advisory',
      'Demonstrate valuation and modelling skills — DCF, comps, LBO',
      'Use anonymised deal descriptions only, such as "a mid-cap manufacturing buy-side mandate"',
      'Explain why this bank, team and sector',
      'Mention CFA or MBA credentials only if held',
    ],
    donts: [
      'Don\'t disclose confidential client or deal information',
      'Avoid inflated claims about deal size or your role',
      'Don\'t send a generic letter — banks expect firm-specific motivation',
      'Avoid typos; precision is part of the screening',
    ],
    keyPoints: [
      'Deal exposure and your specific contribution',
      'Modelling and valuation strengths',
      'Specific interest in the bank and sector',
      'Work ethic and attention to detail',
    ],
    opening: 'I supported a [sector] [buy-side/sell-side] mandate at [Company], building the valuation model and diligence materials — the analytical execution I want to apply on [Target Bank]\'s [sector] team.',
    body: 'I build integrated three-statement models, DCF and comparable analyses, and prepare pitch materials under tight deadlines. On [deal, anonymised] I reconciled a discrepancy in the working-capital assumptions that changed the valuation range. I am drawn to [Target Bank] because of its [specific sector or deal record].',
    closing: 'I would welcome the chance to discuss how I can contribute to your team. Thank you for your consideration.',
    extraFaq: {
      q: 'How do I mention deals in an investment banking cover letter without breaching confidentiality?',
      a: 'Anonymise: describe sector, deal type and your contribution without naming the client or exact terms, and only use information already public.',
    },
  }),
  'interior-designer': build({
    title: 'interior designer',
    stack: 'AutoCAD, SketchUp',
    proof: 'a completed space and the client brief it satisfied',
    dos: [
      'Lead with a completed project and the brief it solved',
      'Name software: AutoCAD, SketchUp, Revit, 3ds Max, V-Ray',
      'Link a portfolio as plain text — the portfolio matters as much as the letter',
      'Describe how you manage budgets, vendors and site coordination',
      'Match the firm\'s style — residential, hospitality or commercial',
    ],
    donts: [
      'Don\'t attach large unrequested image files',
      'Avoid claiming a project as solely yours if it was team work',
      'Don\'t be vague about your role on site',
      'Avoid a letter that ignores the firm\'s design language',
    ],
    keyPoints: [
      'A completed project with brief and constraints',
      'Software and visualisation skills',
      'Budget, vendor and site management',
      'Alignment with the firm\'s style',
    ],
    opening: 'I designed a [N] sq ft [residential/commercial] interior for [client type] at [Studio], translating a [budget/style] brief into drawings, 3D visuals and a site-executed space — the end-to-end approach I hope to bring to [Target Firm].',
    body: 'I prepare working drawings in AutoCAD, concept visuals in SketchUp and V-Ray, and coordinate carpenters, vendors and site timelines. On [project] I revised material choices to stay within budget without losing the design intent. My portfolio is available at [link].',
    closing: 'I would love to walk you through my work and discuss how I can contribute to your studio. Thank you for your time.',
    extraFaq: {
      q: 'Should an interior designer include a portfolio link in the cover letter?',
      a: 'Yes — place the link in the body and again in your signature. Many studios judge the portfolio first and use the letter to understand your role and process.',
    },
  }),
  'logistics-manager': build({
    title: 'logistics manager',
    stack: 'supply chain and fleet operations',
    proof: 'a cost, delivery-time or accuracy improvement in logistics operations',
    dos: [
      'Quantify improvements in cost per shipment, on-time delivery or inventory accuracy',
      'Name systems: WMS, TMS, SAP, route-optimisation tools',
      'Describe scale: warehouses, vehicles, daily dispatches',
      'Mention vendor and 3PL management',
      'Show compliance awareness — e-way bills, safety and documentation',
    ],
    donts: [
      'Don\'t claim savings without stating the baseline',
      'Avoid vague phrases like "streamlined operations"',
      'Don\'t overlook safety and compliance',
      'Avoid listing tools you have not used',
    ],
    keyPoints: [
      'Operational scale you managed',
      'Verified cost or delivery improvement',
      'Systems and vendor management',
      'Problem-solving under disruption',
    ],
    opening: 'I managed [N] daily dispatches across [N] routes at [Company] and improved on-time delivery from [baseline] to [result] by reworking route planning — the operational focus I would bring to [Target Company].',
    body: 'I oversee warehouse flow, carrier performance and inventory accuracy using [WMS/TMS]. On [period] I renegotiated 3PL terms and introduced weekly SLA reviews, which [outcome]. I plan contingencies for peak-season disruptions.',
    closing: 'I would be pleased to discuss how I can strengthen your logistics performance. Thank you for your time.',
    extraFaq: {
      q: 'What numbers should a logistics manager include in a cover letter?',
      a: 'Include on-time delivery, cost per shipment, inventory accuracy or throughput — each with a baseline and period so the improvement is credible.',
    },
  }),
  'pharmacist': build({
    title: 'pharmacist',
    stack: 'dispensing and pharmacovigilance',
    proof: 'your registration, setting and a patient-safety or process contribution',
    dos: [
      'State your registration and qualification (B.Pharm, M.Pharm, Pharm.D) clearly',
      'Specify the setting: hospital, retail, clinical, regulatory affairs or pharmacovigilance',
      'Describe a patient-safety, inventory or compliance contribution',
      'Mention software or systems used for dispensing and records',
      'Show communication and counselling skills',
    ],
    donts: [
      'Don\'t omit registration details or licence validity',
      'Avoid claiming clinical judgement beyond your scope of practice',
      'Don\'t disclose patient information',
      'Avoid generic letters across hospital and industry roles',
    ],
    keyPoints: [
      'Qualification and registration',
      'Practice setting and responsibilities',
      'Patient-safety and compliance focus',
      'Counselling and teamwork',
    ],
    opening: 'As a registered pharmacist with [N] years in [hospital/retail] pharmacy at [Organisation], I managed dispensing and inventory for [scale], with a consistent focus on patient safety — the standard I hope to uphold at [Target Organisation].',
    body: 'My responsibilities include verifying prescriptions, counselling patients on dosage and interactions, managing stock expiry and maintaining records in line with regulations. On [period] I introduced a near-expiry review that reduced wastage. I work closely with doctors and nursing staff.',
    closing: 'I would welcome the opportunity to discuss how I can support your pharmacy team. Thank you for your consideration.',
    extraFaq: {
      q: 'Is a cover letter needed for hospital pharmacist jobs?',
      a: 'Often a CV and registration documents suffice, but a short letter helps when you are changing settings, such as retail to hospital or industry roles. Keep it factual and compliance-aware.',
    },
  }),
};
