import type { CoverLetterData } from './coverLetterData';

// Cover-letter guidance for the 15 roles that previously had a CV/ATS/interview page but no cover-letter page.
// Sample text uses placeholders and illustrative figures — candidates must swap in their own real numbers.
export const coverLetterDataMore: Record<string, CoverLetterData> = {
  'sales-executive': {
    dos: [
      'Open with a quota or revenue result — "achieved 118% of target for four consecutive quarters" beats any adjective',
      'Name your sales motion: inside sales, field sales, B2B SaaS, FMCG distribution, or channel sales',
      'Mention the size of deals, accounts, or territory you handled so the reader can place your level',
      'Show you researched the target company\'s customers and explain how you would open doors there',
    ],
    donts: [
      'Don\'t describe yourself as a "people person" or "go-getter" without a number behind it',
      'Don\'t send one letter to every company — sales managers spot mass applications instantly',
      'Don\'t hide missed targets with vague language; mention only results you can defend in an interview',
      'Don\'t exceed one page — a sales letter that rambles signals weak communication',
    ],
    keyPoints: [
      'Target attainment percentage and the period it covers',
      'Deal size, pipeline volume, or number of accounts managed',
      'Tools you sell with: CRM (Salesforce, Zoho, HubSpot), LinkedIn Sales Navigator, outreach platforms',
    ],
    sampleOpening: 'Over the last two years at [Company] I closed ₹[X] crore in new business and finished each quarter above target — a track record I want to bring to [Target Company]\'s growing [region/segment] team.',
    sampleBody: 'I manage a pipeline of roughly [N] active accounts in [industry], running discovery calls, demos, and negotiations end to end in [CRM]. My outbound approach — researching each account\'s hiring and funding news before the first message — lifted my reply rate from [X]% to [Y]% and shortened the average sales cycle by [Z] days. I also train new hires on objection handling, which shows I can raise the performance of the whole team and not only my own numbers.',
    sampleClosing: 'I would welcome a short call to walk you through how I would approach your first 90 days in the territory. Thank you for your time and consideration.',
    faqs: [
      { q: 'Should a sales executive in India include targets and numbers in a cover letter?', a: 'Yes. Sales is the one function where numbers are expected. State quota attainment, revenue closed, or accounts won in the first two sentences, and make sure each figure can be verified through your references or employer records.' },
      { q: 'Is a cover letter needed for sales roles at large Indian companies?', a: 'Many high-volume recruiters skip it, but hiring managers for B2B and enterprise sales often read it as a writing sample. A concise, targeted letter is a low-cost way to stand out when most applicants send none.' },
    ],
  },
  'ios-developer': {
    dos: [
      'Link a live App Store app or TestFlight build in the first paragraph — shipped work is the strongest proof',
      'State your stack precisely: Swift, SwiftUI or UIKit, Combine or async/await, Core Data, and architecture pattern (MVVM, VIPER)',
      'Include an app-level metric such as crash-free rate, rating, downloads, or launch-time improvement',
      'Explain why this company\'s app interests you after actually using it',
    ],
    donts: [
      'Don\'t list Objective-C, Swift, Flutter, and React Native as equal strengths — pick your core and be honest about the rest',
      'Don\'t claim App Store experience you cannot link to',
      'Don\'t repeat your CV — use the letter to explain one technical decision and its outcome',
      'Don\'t criticise the company\'s current app without a constructive suggestion',
    ],
    keyPoints: [
      'A shipped app with a link and your specific contribution',
      'Performance or quality metrics: crash-free sessions, startup time, rating improvement',
      'Familiarity with the release process: App Store review, TestFlight, CI/CD with Fastlane or Xcode Cloud',
    ],
    sampleOpening: 'I am the iOS developer behind [App Name], a SwiftUI app with [N]+ downloads and a [X]-star App Store rating, and I would like to bring the same attention to polish and stability to [Target Company]\'s mobile team.',
    sampleBody: 'At [Company] I migrated a UIKit codebase to SwiftUI module by module, adopted async/await in the networking layer, and raised our crash-free session rate from [X]% to [Y]%. I wrote unit and snapshot tests for the core flows and set up a Fastlane pipeline that cut release preparation from half a day to under an hour. I enjoy working closely with designers on accessibility, including Dynamic Type and VoiceOver support.',
    sampleClosing: 'I would be glad to demo my work and discuss how I could contribute to your roadmap. Thank you for considering my application.',
    faqs: [
      { q: 'What should an iOS developer put in a cover letter?', a: 'A link to a shipped app, your exact stack, one measurable quality or performance improvement, and a sentence on why the target company\'s product appeals to you. Keep it under 250 words.' },
      { q: 'Does a fresher iOS developer need a cover letter?', a: 'It helps. Without professional experience, a short letter pointing to a published or TestFlight app and a GitHub repo gives the recruiter something concrete to evaluate.' },
    ],
  },
  'full-stack-developer': {
    dos: [
      'Show range with one end-to-end example: frontend, API, database, and deployment of a single feature',
      'Name the full stack explicitly — for example React, Node.js, PostgreSQL, Docker, AWS',
      'Quantify impact: page-load improvement, query-time reduction, users served',
      'Match the JD\'s primary stack rather than listing everything you have touched',
    ],
    donts: [
      'Don\'t claim equal depth across frontend and backend if one is clearly stronger — say which is your lean',
      'Don\'t open with "I am a passionate full stack developer" — lead with what you shipped',
      'Don\'t list tutorials as experience; list deployed projects with links',
      'Don\'t leave out testing and deployment, which separate full stack engineers from hobbyists',
    ],
    keyPoints: [
      'One feature or product you owned from database schema to UI',
      'Performance, reliability, or conversion metrics tied to your work',
      'Collaboration signals: code reviews, working with designers and product managers',
    ],
    sampleOpening: 'I recently built and shipped [Product] end to end — a React and Node.js application backed by PostgreSQL that now serves [N] monthly users — and I am excited to bring that ownership mindset to [Target Company].',
    sampleBody: 'At [Company] I designed the REST API, wrote the React front end, and containerised the service with Docker for deployment on AWS. By adding database indexes and response caching I reduced median API latency from [X] ms to [Y] ms, and a refactor of the checkout flow improved completion by [Z]%. I write unit and integration tests for every feature and review teammates\' pull requests regularly.',
    sampleClosing: 'I would welcome the chance to discuss how my end-to-end experience could help your team ship faster. Thank you for your time.',
    faqs: [
      { q: 'How do I show full stack skills without sounding like a generalist?', a: 'Pick one real project and describe your decisions across the stack — schema design, API contract, UI state, deployment — with a measurable result. Depth shown on one complete feature is more convincing than a long list of technologies.' },
      { q: 'How long should a full stack developer cover letter be?', a: 'Three short paragraphs and under 300 words. Link to GitHub and a live demo rather than describing every project.' },
    ],
  },
  'machine-learning-engineer': {
    dos: [
      'State the business problem, the model approach, and the measured outcome in a single sentence',
      'Mention production work — deployment, monitoring, retraining — not just notebooks and offline accuracy',
      'Name your tools: PyTorch or TensorFlow, scikit-learn, MLflow, Airflow, Docker, a cloud ML platform',
      'Be precise about dataset scale and evaluation metrics (AUC, F1, RMSE, latency)',
    ],
    donts: [
      'Don\'t quote Kaggle rankings as the main evidence for a production role',
      'Don\'t say "improved accuracy" without the baseline and the metric',
      'Don\'t overstate research or deep learning experience if your work was classical ML — hiring managers probe this',
      'Don\'t ignore data quality and deployment, which usually decide whether a model delivers value',
    ],
    keyPoints: [
      'A model that reached production and the business metric it moved',
      'Evaluation methodology and baselines used',
      'MLOps awareness: versioning, monitoring for drift, reproducible pipelines',
    ],
    sampleOpening: 'I built and deployed a [type] model at [Company] that reduced [business problem] by [X]%, and I want to apply the same focus on production impact to [Target Company]\'s machine learning team.',
    sampleBody: 'The project began with messy transactional data of about [N] rows, which I cleaned and turned into features before comparing gradient-boosted trees against a neural baseline. The chosen model improved [metric] from [A] to [B] over the existing rule-based system. I packaged it as a containerised service, tracked experiments in MLflow, and added drift monitoring that triggers retraining when input distributions shift.',
    sampleClosing: 'I would be glad to discuss your current modelling challenges and where I could help. Thank you for your consideration.',
    faqs: [
      { q: 'What do ML hiring managers look for in a cover letter?', a: 'Evidence that you can take a problem from data to a deployed, monitored model. Mention the metric, the baseline, and the production outcome rather than only the algorithm used.' },
      { q: 'Should a fresher ML engineer include research projects?', a: 'Yes, if they are reproducible and linked on GitHub. Describe the dataset, your evaluation method, and your result honestly, including limitations.' },
    ],
  },
  'chartered-accountant': {
    dos: [
      'State your ICAI membership year and any specialisation: audit, direct tax, GST, FP&A, or IFRS',
      'Quantify scope: audit size, number of clients, turnover handled, or compliance filings managed',
      'Mention Big 4 or mid-tier firm experience clearly, and your articleship firm if you are newly qualified',
      'Explain why you are moving from practice to industry (or the reverse) in one clear sentence',
    ],
    donts: [
      'Don\'t restate your ICAI ranks or attempts unless they are exceptional and relevant',
      'Don\'t list every standard you have read — name the ones the role actually requires',
      'Don\'t reveal confidential client names or figures',
      'Don\'t send a generic letter to a CFO; reference the company\'s business model or recent results',
    ],
    keyPoints: [
      'Membership status and years of post-qualification experience',
      'Scale of engagements and the controls or savings you delivered',
      'Software proficiency: Tally, SAP, Oracle, advanced Excel, audit tools',
    ],
    sampleOpening: 'As a Chartered Accountant with [N] years of post-qualification experience in statutory audit and GST compliance, I am applying for the [Role] position at [Target Company] to help strengthen your finance and controls function.',
    sampleBody: 'At [Firm] I led audits for [N] listed and unlisted clients with revenues up to ₹[X] crore, identifying control gaps that resulted in [outcome]. I also manage GST reconciliations and advisory for multi-state operations, reducing input-credit mismatches by [Y]%. I am comfortable with Ind AS reporting and have worked closely with management on month-end close automation in [system].',
    sampleClosing: 'I would welcome the opportunity to discuss how my audit and compliance background can support your finance team. Thank you for your time.',
    faqs: [
      { q: 'Do Chartered Accountants need a cover letter in India?', a: 'For corporate finance, Big 4 lateral, and CFO-office roles a concise cover letter is valued. For campus-style articleship placements it is rarely required.' },
      { q: 'What tone should a CA cover letter use?', a: 'Formal, precise, and brief. Lead with qualification and scope, support with one or two quantified outcomes, and avoid casual language.' },
    ],
  },
  'sap-consultant': {
    dos: [
      'Name your SAP module and version: FICO, MM, SD, ABAP, S/4HANA, Basis, SuccessFactors',
      'Describe your role in implementations: blueprinting, configuration, testing, cutover, or hypercare',
      'Quantify project scale: number of users, plants or company codes, go-live timeline',
      'Mention certifications such as SAP Certified Application Associate and any S/4HANA migration work',
    ],
    donts: [
      'Don\'t list modules you have only studied — consultants are tested on module depth',
      'Don\'t use SAP jargon without business outcomes attached',
      'Don\'t skip the client industry; manufacturing, retail, and BFSI consultants are hired differently',
      'Don\'t claim end-to-end ownership of a rollout if you were part of a larger team',
    ],
    keyPoints: [
      'Module expertise with a specific implementation or support engagement',
      'Business outcome of your work: faster close, fewer manual postings, better inventory accuracy',
      'Client-facing skills: workshops, requirement gathering, user training',
    ],
    sampleOpening: 'As an SAP [module] consultant with [N] years of experience across [N] full-cycle implementations, I am keen to contribute to [Target Company]\'s S/4HANA programme.',
    sampleBody: 'On my most recent project for a [industry] client with [N] users across [N] plants, I owned the [module] workstream from blueprint through go-live, running fit-gap workshops, configuring the solution, and leading user acceptance testing. Post go-live I resolved [N] priority incidents during hypercare and handed over documented support procedures. I hold the [certification] credential and enjoy translating business requirements into clean, maintainable configuration.',
    sampleClosing: 'I would appreciate the opportunity to discuss how my implementation experience fits your upcoming projects. Thank you for your consideration.',
    faqs: [
      { q: 'What should an SAP consultant highlight in a cover letter?', a: 'Your module, version, number of implementations, and the role you played. Add one business outcome and any relevant certification.' },
      { q: 'Is SAP certification necessary to include?', a: 'It is a strong signal for fresher and mid-level consultants. For senior roles, project outcomes and client references matter more than certificates.' },
    ],
  },
  'react-developer': {
    dos: [
      'Link a deployed React project or portfolio in the opening paragraph',
      'Name specifics: React version, hooks, Redux or Zustand, Next.js, TypeScript, testing library',
      'Include a front-end performance or UX metric such as Lighthouse score or bundle-size reduction',
      'Mention accessibility and responsive design experience',
    ],
    donts: [
      'Don\'t list jQuery, Angular, Vue, and React as equals — focus on React',
      'Don\'t say "pixel-perfect" without describing how you collaborate with design',
      'Don\'t ignore testing; mention Jest and React Testing Library if you use them',
      'Don\'t submit a letter with no link to working code',
    ],
    keyPoints: [
      'A React application you built or significantly improved, with link',
      'Measurable outcome: load time, Core Web Vitals, conversion, or error-rate improvement',
      'State management and TypeScript experience',
    ],
    sampleOpening: 'I build React and TypeScript interfaces focused on performance and accessibility — most recently a dashboard at [Company] that cut initial load time by [X]% — and I would like to do the same for [Target Company]\'s product.',
    sampleBody: 'I introduced code-splitting and memoisation to a large Next.js application, bringing the Lighthouse performance score from [A] to [B]. I manage state with Redux Toolkit and React Query, write component tests with React Testing Library, and work from Figma specs while flagging accessibility issues early. I also maintain a small open-source component library used by [N] developers.',
    sampleClosing: 'I would be happy to walk through my code and portfolio in an interview. Thank you for your time and consideration.',
    faqs: [
      { q: 'What makes a React developer cover letter stand out?', a: 'A link to live work, a clear stack, and one measurable improvement such as performance, accessibility, or conversion. Recruiters scan for those three signals.' },
      { q: 'Should I mention Next.js and TypeScript?', a: 'Yes, if the job description lists them — they are among the most requested companions to React in current Indian job postings.' },
    ],
  },
  'investment-banker': {
    dos: [
      'Name deals or transaction types you worked on at the level you can disclose: M&A, ECM, DCM, restructuring',
      'State your modelling strengths: DCF, LBO, merger models, comps analysis',
      'Explain explicitly why this bank and this team, referencing recent league-table position or marquee deals',
      'Show long-hours resilience through concrete examples rather than claims',
    ],
    donts: [
      'Don\'t disclose confidential deal information or client names',
      'Don\'t write more than one page — bankers expect brevity',
      'Don\'t use a generic "why finance" story; connect to a specific market or sector interest',
      'Don\'t make typos or formatting mistakes — attention to detail is the first screen',
    ],
    keyPoints: [
      'Transaction experience and your exact responsibilities',
      'Technical skills: financial modelling, valuation, pitch-book preparation',
      'Academic or professional credentials: MBA, CFA progress, CA',
    ],
    sampleOpening: 'Having supported [N] M&A and capital-markets transactions with an aggregate value above ₹[X] crore, I am applying for the [Role] position at [Target Company] because of your leadership in [sector] advisory.',
    sampleBody: 'As an analyst at [Firm] I built valuation and merger models, prepared client presentations, and coordinated due-diligence workstreams with legal and accounting advisers. On one sell-side mandate I delivered the comparable-company analysis that supported the final valuation range. I work well under tight deadlines and have a record of catching model errors before they reach clients.',
    sampleClosing: 'I would welcome the chance to discuss how I can contribute to your team. Thank you for your consideration.',
    faqs: [
      { q: 'How long should an investment banking cover letter be?', a: 'One page maximum, usually three to four short paragraphs. Bankers read quickly and penalise padding.' },
      { q: 'Should I mention a specific deal from the bank I am applying to?', a: 'Yes. Referencing a recent, public transaction shows genuine interest and research, which is a standard expectation for investment banking applicants.' },
    ],
  },
  'scrum-master': {
    dos: [
      'Describe team size, number of teams, and delivery outcomes such as velocity or cycle-time improvement',
      'Name your credentials: PSM, CSM, SAFe, or PMI-ACP',
      'Give a specific example of removing an impediment or improving a team ceremony',
      'Show facilitation and coaching skills, not only process administration',
    ],
    donts: [
      'Don\'t present yourself as a project manager in disguise; focus on servant leadership and team enablement',
      'Don\'t recite Scrum Guide definitions — employers know them',
      'Don\'t claim sprint-metric improvements without stating how you measured them',
      'Don\'t overlook stakeholder communication, which is a core part of the role',
    ],
    keyPoints: [
      'Teams coached and delivery improvements achieved',
      'Tools: Jira, Azure DevOps, Confluence, Miro',
      'Experience scaling frameworks such as SAFe where relevant',
    ],
    sampleOpening: 'As a certified Scrum Master who coached [N] teams to a [X]% improvement in sprint predictability, I am excited to help [Target Company]\'s product teams deliver more reliably.',
    sampleBody: 'At [Company] I facilitated planning, retrospectives, and refinement for a team of [N] engineers and found that unclear acceptance criteria were the main source of rework. Introducing a lightweight definition-of-ready and shared backlog refinement reduced carry-over stories by [Y]%. I also coached the product owner on prioritisation and reported progress to stakeholders using cycle-time and burn-up charts in Jira.',
    sampleClosing: 'I would value the opportunity to discuss how I could support your agile transformation. Thank you for your time.',
    faqs: [
      { q: 'What should a Scrum Master emphasise in a cover letter?', a: 'Outcomes for the team — predictability, quality, and morale — along with your certification and facilitation style. Employers want evidence of coaching, not just ceremony management.' },
      { q: 'Is the PSM or CSM certification required?', a: 'It is requested in most postings and acts as a screening filter, so mention it in the first paragraph if you hold it.' },
    ],
  },
  'business-development-manager': {
    dos: [
      'Lead with revenue sourced, partnerships signed, or new markets opened',
      'Describe your pipeline process from prospecting to contract closure',
      'Show industry knowledge of the target company\'s market and likely partners',
      'Highlight negotiation and relationship-building examples with outcomes',
    ],
    donts: [
      'Don\'t confuse business development with inside sales; explain the strategic partnerships you drove',
      'Don\'t exaggerate revenue attribution if it was a team effort',
      'Don\'t write a generic letter that could be sent to any company',
      'Don\'t skip a clear next step, such as proposing a conversation about market-entry plans',
    ],
    keyPoints: [
      'New revenue, partnerships, or markets created and the time frame',
      'Industry domain and typical client or partner profile',
      'Cross-functional collaboration with product, marketing, and leadership',
    ],
    sampleOpening: 'In the past [N] years I have built a ₹[X] crore partnership pipeline for [Company] in the [industry] sector, and I would like to apply that experience to expanding [Target Company]\'s presence in [market].',
    sampleBody: 'I identify target accounts, secure senior-level meetings, and lead proposals through negotiation to signed agreements. Last year I closed [N] channel partnerships that contributed [Y]% of new revenue, and I opened the [region] market by building relationships with [type of partners]. I work closely with product and marketing to tailor offers and track results in [CRM].',
    sampleClosing: 'I would welcome a conversation about your growth priorities and how I could contribute. Thank you for your consideration.',
    faqs: [
      { q: 'How is a business development cover letter different from a sales one?', a: 'It emphasises strategy, partnerships, and market expansion over individual quota attainment. Show how you identified opportunities and built long-term relationships.' },
      { q: 'Which metrics belong in a BD cover letter?', a: 'Revenue sourced, number of partnerships signed, new markets entered, and pipeline value. Choose figures you can explain and verify.' },
    ],
  },
  'network-engineer': {
    dos: [
      'List your certifications up front: CCNA, CCNP, JNCIA, or relevant cloud networking credentials',
      'Describe network size: sites, devices, users, and uptime targets',
      'Mention routing, switching, firewall, and SD-WAN platforms you have actually configured',
      'Give an incident or migration example with measurable improvement in uptime or latency',
    ],
    donts: [
      'Don\'t list vendors you have only read about',
      'Don\'t omit security awareness; firewalls, VPNs, and segmentation are expected',
      'Don\'t describe duties only — show an outcome such as reduced downtime',
      'Don\'t forget to mention on-call or shift flexibility if the role needs it',
    ],
    keyPoints: [
      'Certifications and hands-on platform experience',
      'Scale of the networks supported and uptime achieved',
      'Automation skills such as Python or Ansible for network tasks',
    ],
    sampleOpening: 'As a CCNP-certified network engineer maintaining a [N]-site enterprise network at [Company] with [X]% uptime, I am keen to support [Target Company]\'s infrastructure team.',
    sampleBody: 'I manage routing and switching with OSPF and BGP, administer Palo Alto and Fortinet firewalls, and led a migration of [N] branches to SD-WAN that lowered WAN costs by [Y]%. I monitor the network using [tool], resolve incidents with documented root-cause analysis, and use Python scripts to automate configuration backups. I also contribute to security audits and network documentation.',
    sampleClosing: 'I would appreciate the opportunity to discuss how my experience fits your network roadmap. Thank you for your time.',
    faqs: [
      { q: 'Which certifications matter most in a network engineer cover letter?', a: 'CCNA and CCNP are the most commonly requested in India, followed by vendor-specific credentials for Juniper, Palo Alto, and Fortinet. List the ones named in the job description first.' },
      { q: 'Should I mention automation skills?', a: 'Yes. Python and Ansible experience is an increasingly common differentiator and signals readiness for modern infrastructure teams.' },
    ],
  },
  'logistics-manager': {
    dos: [
      'Quantify operations: shipments per month, warehouse size, fleet, or supply-chain spend managed',
      'Report cost savings, on-time delivery rate, or inventory-accuracy improvements',
      'Name systems you use: WMS, TMS, SAP, or ERP platforms',
      'Mention compliance knowledge such as customs, GST e-way bills, or safety standards',
    ],
    donts: [
      'Don\'t describe only routine duties; focus on improvements you delivered',
      'Don\'t leave out vendor and carrier management experience',
      'Don\'t overlook people management and shift planning, which are core to the role',
      'Don\'t use unexplained abbreviations that the reader may not know',
    ],
    keyPoints: [
      'Operational scale and the KPIs you owned',
      'Cost reduction or efficiency gains with figures',
      'Technology and process improvement experience',
    ],
    sampleOpening: 'I currently manage logistics operations handling [N] shipments a month for [Company], and over the last year I improved on-time delivery from [A]% to [B]% — results I would like to replicate at [Target Company].',
    sampleBody: 'I negotiate carrier contracts, optimise routes, and run a team of [N] across warehousing and dispatch. By consolidating shipments and revising routing we cut freight cost per unit by [X]%, and a cycle-count programme raised inventory accuracy to [Y]%. I work daily in [WMS/TMS] and coordinate with procurement and sales to align stock with demand.',
    sampleClosing: 'I would be glad to discuss how I could streamline your supply chain. Thank you for your consideration.',
    faqs: [
      { q: 'What KPIs should a logistics manager mention?', a: 'On-time delivery rate, cost per shipment, inventory accuracy, order-fulfilment time, and damage or return rates. Choose the two or three most relevant to the job description.' },
      { q: 'Is a cover letter useful for logistics roles?', a: 'Yes for managerial positions, where it shows communication and problem-solving skills beyond what the CV can convey.' },
    ],
  },
  'interior-designer': {
    dos: [
      'Link your portfolio first — a design letter without visuals is incomplete',
      'Describe project types and scale: residential, commercial, hospitality, and budgets handled',
      'Name your software: AutoCAD, SketchUp, 3ds Max, Revit, V-Ray, Photoshop',
      'Explain your design approach and how you manage clients, vendors, and site execution',
    ],
    donts: [
      'Don\'t describe your style only with adjectives such as "creative" or "innovative"',
      'Don\'t omit execution experience; firms hire designers who can deliver on site',
      'Don\'t send large file attachments instead of a portfolio link',
      'Don\'t claim credit for team projects without clarifying your role',
    ],
    keyPoints: [
      'Portfolio link and two or three standout projects',
      'Budget and timeline discipline on completed work',
      'Client-communication skills and vendor coordination',
    ],
    sampleOpening: 'I am an interior designer with [N] years of residential and commercial experience, and the portfolio linked below includes [N] completed projects that matched the design vision and budget of each client.',
    sampleBody: 'At [Studio] I led design from concept sketches through 3D visualisation in SketchUp and V-Ray to site supervision, delivering a [N] sq ft [type] project within a ₹[X] lakh budget and on schedule. I coordinate carpenters, electricians, and suppliers, and revise drawings quickly when site conditions change. I am drawn to [Target Company]\'s focus on [style/segment] and would like to contribute to its upcoming projects.',
    sampleClosing: 'I would welcome the chance to present my portfolio and discuss how I can support your design team. Thank you for your time.',
    faqs: [
      { q: 'Should an interior designer attach a portfolio to the cover letter?', a: 'Share a link to an online portfolio instead of large attachments. Recruiters want to see work immediately, and links load faster and are easy to forward.' },
      { q: 'What should a fresher interior designer highlight?', a: 'Academic and internship projects, software skills, and any live site exposure. A clear, well-presented portfolio matters more than years of experience.' },
    ],
  },
  'pharmacist': {
    dos: [
      'State your registration and qualification: B.Pharm, M.Pharm, or Pharm.D along with State Pharmacy Council registration',
      'Specify the setting: hospital, retail, clinical, pharma manufacturing, QA/QC, or regulatory affairs',
      'Quantify responsibilities such as prescriptions verified, inventory managed, or batches released',
      'Mention compliance knowledge: GMP, GLP, Schedule M, pharmacovigilance, or drug-licence regulations',
    ],
    donts: [
      'Don\'t omit licence or registration details, which employers verify',
      'Don\'t use patient-identifiable examples',
      'Don\'t apply with a retail-pharmacy letter to a manufacturing QA role without tailoring',
      'Don\'t overlook communication skills for patient counselling roles',
    ],
    keyPoints: [
      'Qualification, registration, and years of experience',
      'Accuracy, safety, and compliance achievements',
      'Relevant systems and tools: pharmacy management software, LIMS, or ERP',
    ],
    sampleOpening: 'As a registered pharmacist with a B.Pharm degree and [N] years of experience in [hospital/retail/manufacturing] pharmacy, I am applying for the [Role] position at [Target Company].',
    sampleBody: 'In my current role I verify and dispense around [N] prescriptions a day, counsel patients on dosage and interactions, and maintain inventory records that passed [N] consecutive regulatory inspections without major observations. I follow GMP and documentation standards closely and have trained [N] junior staff on dispensing protocols. I am keen to bring the same accuracy and patient focus to your team.',
    sampleClosing: 'I would be grateful for an opportunity to discuss my application. Thank you for your consideration.',
    faqs: [
      { q: 'Should I mention my pharmacy council registration?', a: 'Yes. State your registration status in the first paragraph or the signature block, since employers must verify it before hiring.' },
      { q: 'What do pharma industry employers look for in a cover letter?', a: 'Regulatory awareness (GMP, GLP), accuracy in documentation, and domain-relevant experience. Tailor the letter to the function: QA, QC, production, regulatory affairs, or clinical.' },
    ],
  },
  'embedded-systems-engineer': {
    dos: [
      'Name microcontrollers and platforms you have shipped on: STM32, ESP32, ARM Cortex-M, Raspberry Pi',
      'Specify languages and tools: C, C++, RTOS, JTAG debugging, oscilloscope, logic analyser',
      'Describe protocols you have implemented: I2C, SPI, UART, CAN, BLE, MQTT',
      'Give a product-level outcome: memory footprint reduction, power saving, or field-failure fix',
    ],
    donts: [
      'Don\'t list Arduino hobby projects as equivalent to production firmware experience',
      'Don\'t omit testing and debugging methods, which are central to embedded work',
      'Don\'t skip domain context such as automotive, IoT, medical, or industrial',
      'Don\'t exaggerate hardware design skills if your focus is firmware',
    ],
    keyPoints: [
      'Hardware platforms and peripherals you have worked with',
      'A firmware project with measurable optimisation or reliability results',
      'Standards awareness: MISRA C, AUTOSAR, or ISO 26262 where relevant',
    ],
    sampleOpening: 'I develop C firmware for ARM Cortex-M devices and recently reduced the power consumption of a BLE sensor node at [Company] by [X]%, an optimisation mindset I would like to bring to [Target Company]\'s product line.',
    sampleBody: 'I design RTOS-based firmware with drivers for I2C, SPI, and UART peripherals, and I debug with JTAG, oscilloscope, and logic analysers. On a recent project I rewrote the sleep and wake-up logic and cut average current draw from [A] mA to [B] mA, extending battery life to [Y] months. I follow MISRA C guidelines, use unit testing on host builds, and maintain clear hardware-software interface documentation.',
    sampleClosing: 'I would be pleased to discuss how my firmware experience could support your products. Thank you for your time.',
    faqs: [
      { q: 'What should an embedded engineer put in a cover letter?', a: 'Your target platforms, languages, protocols, and one project with a measurable outcome such as lower power use, smaller memory footprint, or fewer field failures.' },
      { q: 'Are personal hardware projects worth mentioning?', a: 'Yes, particularly for freshers, if you link a repository or demo and explain the technical decisions. Be clear about what you designed versus what you reused.' },
    ],
  },
};
