import type { CoverLetterData } from '@/lib/coverLetterData';

// Hand-written cover letter guidance for the 15 roles that previously had no
// /cover-letter-examples/[role] page. Sample paragraphs use [bracketed]
// placeholders instead of invented statistics so users fill in their own
// verifiable numbers.
export const coverLetterDataMore: Record<string, CoverLetterData> = {
  'sales-executive': {
    dos: [
      'Open with a result you own: target attainment, accounts won, or revenue closed — with your real number',
      'Name the sales motion in the JD (field sales, inside sales, channel, B2B, B2C) and show experience in that exact motion',
      'Mention the territory, segment, or product line you have sold into and why it matches this role',
      'Show how you build pipeline, not only how you close: prospecting method, follow-up discipline, CRM habits',
      'End with a concrete next step, such as offering to walk through your account plan for the territory',
    ],
    donts: [
      'Don\'t claim to be "a people person" without evidence — recruiters read that as filler',
      'Avoid listing targets you did not actually own or hit; sales hiring managers verify references',
      'Don\'t send one generic letter to every company — a sales letter that is not personalised signals weak prospecting',
      'Never badmouth a previous employer, product, or manager',
      'Don\'t exceed one page; sales managers expect brevity from someone who should be good at concise pitches',
    ],
    keyPoints: [
      'Quota or target context: what you were measured on and how you performed against it',
      'Your deal size, sales cycle length, and customer type, since these define fit',
      'One win that shows how you handle objections or competitive pressure',
      'Tools you use daily: CRM, LinkedIn Sales Navigator, outreach sequences',
    ],
    sampleOpening: 'At [Previous Company] I closed [X] new accounts in [region] in [year], finishing at [X%] of target — and I want to bring that same outbound discipline to the Sales Executive role at [Target Company].',
    sampleBody: 'I sell [product/service] to [customer type] with a typical cycle of [N] weeks. My approach starts with account research and a short, specific first message, followed by structured follow-ups tracked in [CRM]. One account I am proud of was [brief situation]: the customer was evaluating a competitor on price, so I reframed the conversation around [value driver], involved their [stakeholder], and closed the deal at [outcome]. I would apply the same method to [Target Company]\'s [segment/territory].',
    sampleClosing: 'I would welcome the chance to share how I would approach the first 90 days in this territory, including target accounts and pipeline goals. Thank you for your time and consideration.',
    faqs: [
      { q: 'Do sales executive roles in India require a cover letter?', a: 'Many high-volume sales hiring processes screen on CV and a call, so a cover letter is often optional. It becomes valuable for B2B, SaaS, and enterprise sales roles where written communication is part of the job. A short, personalised letter is a low-cost way to demonstrate it.' },
      { q: 'Should I mention my sales targets in a cover letter?', a: 'Yes, if you can state them honestly. Use your real attainment figure and the context (territory, product, period). Avoid rounding up; interviewers and reference checks commonly test these numbers.' },
    ],
  },

  'ios-developer': {
    dos: [
      'State the languages and frameworks you ship with — Swift, SwiftUI, UIKit, Combine — in the first paragraph',
      'Link at least one live App Store app or a public GitHub repo so the reader can verify your work',
      'Describe one technical decision: architecture pattern, offline support, or performance fix',
      'Mention your release experience: TestFlight, App Store review, CI with Xcode Cloud or Fastlane',
      'Show product awareness by referring to a specific feature of the company\'s app',
    ],
    donts: [
      'Don\'t list every Apple framework you have touched; pick the ones in the job description',
      'Avoid saying you "love Apple products" as your reason for applying — explain what you want to build',
      'Don\'t describe tutorial apps as production work',
      'Never leave out your minimum iOS deployment target experience if the JD mentions legacy support',
      'Don\'t pad the letter beyond 250–300 words',
    ],
    keyPoints: [
      'Apps you shipped, with App Store links or clear descriptions',
      'Architecture experience (MVVM, Clean Architecture, modularisation)',
      'Quality practices: unit tests, UI tests, crash monitoring',
      'Collaboration with design and backend teams on API contracts',
    ],
    sampleOpening: 'I have shipped [N] iOS apps to the App Store, most recently [App Name], built in Swift and SwiftUI — and the iOS Developer opening at [Target Company] is the kind of product work I want to grow in.',
    sampleBody: 'At [Previous Company], I owned the iOS client for [feature/app], moving it from [old approach] to [new approach, e.g. MVVM with Combine] to make screens easier to test and ship. I improved [specific measurable thing, e.g. launch time or crash-free rate] by [method], and handled releases through TestFlight and App Store review. I am comfortable working with REST and GraphQL APIs and agreeing contracts early with backend engineers.',
    sampleClosing: 'I would be glad to walk you through the code of [App Name] and discuss how I can contribute to [Target Company]\'s iOS roadmap. Thank you for considering my application.',
    faqs: [
      { q: 'What should an iOS developer put in a cover letter?', a: 'Lead with what you have shipped and the stack you used, link a live app or repository, and mention one technical decision with its outcome. Keep it short; the portfolio does most of the persuading.' },
      { q: 'Is SwiftUI or UIKit better to mention?', a: 'Mention whichever the job description emphasises. Many teams maintain UIKit code while adopting SwiftUI, so experience with both is a strength worth stating briefly.' },
    ],
  },

  'full-stack-developer': {
    dos: [
      'Name your front-end and back-end stack together, matching the JD (for example React with Node.js or Django)',
      'Describe one feature you built end to end: UI, API, database, and deployment',
      'Mention how you decide where logic lives and how you keep the two halves consistent',
      'Include a live link or repository for a project that shows both layers',
      'Show product thinking: why the feature mattered to users, not only how you built it',
    ],
    donts: [
      'Don\'t claim equal expertise in every layer — be honest about where you are strongest',
      'Avoid a long technology list with no evidence of use',
      'Don\'t use "full stack" as a reason to apply to any engineering role without a specific link to this one',
      'Never copy your CV bullets verbatim into the letter',
      'Don\'t forget to mention testing and deployment, which separate hobby projects from production work',
    ],
    keyPoints: [
      'One end-to-end feature with its outcome for users or the business',
      'Your strongest layer and how you work with specialists on the other',
      'Database and API design choices you made',
      'CI/CD, testing, and monitoring you set up or maintained',
    ],
    sampleOpening: 'I built and shipped [feature] end to end at [Previous Company] — React front end, Node.js API, and PostgreSQL schema — and I am applying for the Full Stack Developer role at [Target Company] to keep working across the whole product.',
    sampleBody: 'My recent project, [Project Name], let [users] do [task]. I designed the data model, built the REST API with [framework], and shipped the interface in [front-end framework], deploying through [CI/CD tool]. After release I noticed [issue seen in logs or user feedback] and fixed it by [action], which [outcome]. I am strongest on [layer] and enjoy pairing with specialists on [other layer].',
    sampleClosing: 'I would welcome a conversation about how I can contribute to [Target Company]\'s product, and I am happy to share the repository and walk through the architecture. Thank you for your time.',
    faqs: [
      { q: 'How do I show full stack skills in a cover letter without listing everything?', a: 'Describe one feature you took from idea to deployment and name the technologies in context. This shows range and judgement better than a long list of tools.' },
      { q: 'Should a fresher full stack developer write a cover letter?', a: 'Yes, if the company reads them. Focus on one or two projects, link the live demo and repository, and explain what you personally built rather than what the team built.' },
    ],
  },

  'machine-learning-engineer': {
    dos: [
      'Open with a model or system you put into production and the measurable effect it had',
      'Distinguish research from engineering: mention serving, monitoring, and retraining, not only model accuracy',
      'Name the frameworks and infrastructure in the JD (PyTorch, TensorFlow, MLflow, Kubernetes, cloud ML services)',
      'Explain how you evaluated the model and what trade-off you made between metrics, latency, and cost',
      'Link a paper, repository, or write-up that shows your work',
    ],
    donts: [
      'Don\'t quote accuracy alone — without the baseline and the business metric it means little',
      'Avoid buzzwords such as "cutting-edge AI" with no specifics',
      'Don\'t present Kaggle or coursework as production ML without saying so',
      'Never share confidential data or model details from a current employer',
      'Don\'t make the letter a literature review; keep it to one clear project story',
    ],
    keyPoints: [
      'Problem, data, model, and deployment in one concise story',
      'Evaluation approach and how you detected drift or degradation',
      'Collaboration with data engineers and product teams',
      'Cost and latency considerations in serving',
    ],
    sampleOpening: 'I took a [model type] model for [problem] from notebook to production at [Previous Company], where it now serves [N] predictions per [period] — the kind of end-to-end ML engineering I want to do at [Target Company].',
    sampleBody: 'The challenge was [data or latency constraint]. I built the training pipeline in [framework], tracked experiments in [tool], and deployed behind [serving stack] with monitoring for input drift and prediction quality. Compared with the previous [baseline], the new model improved [business metric] by [X], while keeping inference under [latency]. I worked closely with data engineers to productionise features and with product to define the success metric before we trained anything.',
    sampleClosing: 'I would value the opportunity to discuss how my production ML experience could support [Target Company]\'s roadmap. I have attached a short write-up of the project above and am happy to go deeper in an interview.',
    faqs: [
      { q: 'What makes a machine learning engineer cover letter stand out?', a: 'A single production story with the problem, your decisions, and a measured outcome against a baseline. Employers hiring ML engineers look for engineering judgement, not just model knowledge.' },
      { q: 'Should I include research publications?', a: 'Include them if they are relevant to the role, in one sentence with a link. For applied ML roles, production experience usually carries more weight than publications.' },
    ],
  },

  'chartered-accountant': {
    dos: [
      'State your CA qualification details (attempt, membership status, any DISA or CFA) near the top',
      'Name your core areas explicitly: statutory audit, direct and indirect tax, GST compliance, financial reporting, or FP&A',
      'Mention the size and type of entities or clients you have handled — in terms you are permitted to disclose',
      'Reference standards and frameworks the JD asks for: Ind AS, IFRS, SOX, internal financial controls',
      'Show how you improved a process, such as shortening month-end close or reducing audit queries',
    ],
    donts: [
      'Don\'t disclose client names or confidential figures that your firm or employer protects',
      'Avoid generic claims of "attention to detail" without an example',
      'Don\'t overlook the difference between practice and industry roles; tailor your letter to the one you are applying for',
      'Never misstate articleship or post-qualification experience dates',
      'Don\'t use informal language — keep a professional, precise tone',
    ],
    keyPoints: [
      'Qualification and years of post-qualification experience',
      'Specialisation (audit, tax, treasury, FP&A) matched to the role',
      'Software and ERPs you use: Tally, SAP, Oracle, Excel, Power BI',
      'One improvement you delivered in controls, reporting, or compliance',
    ],
    sampleOpening: 'As a Chartered Accountant with [N] years of post-qualification experience in [audit/tax/finance], I am applying for the [Role Title] position at [Target Company], where my background in [Ind AS reporting / GST advisory / internal controls] is directly relevant.',
    sampleBody: 'At [Previous Firm/Company], I led [type of work], covering [scope, e.g. statutory audit of mid-sized manufacturing clients or monthly close for a business unit]. I introduced [process change] that reduced [issue, e.g. reconciliation delays], and I regularly presented findings to [CFO/partners/audit committee]. I am proficient in [ERP/tools] and keep current with ICAI announcements and amendments in [relevant law or standard].',
    sampleClosing: 'I would welcome the chance to discuss how my experience in [area] can support [Target Company]\'s finance function. Thank you for your time and consideration.',
    faqs: [
      { q: 'Do chartered accountants need a cover letter in India?', a: 'It is optional for campus placements and Big 4 hiring, where the CV and interview matter most, but it adds value for industry roles, senior positions, and applications sent directly to a CFO or partner.' },
      { q: 'What should a newly qualified CA highlight?', a: 'Articleship exposure, the sectors and engagement types you worked on, exam attempt details if favourable, and any tools you mastered. Pair them with one example of responsibility beyond your assigned tasks.' },
    ],
  },

  'sap-consultant': {
    dos: [
      'Name your SAP module(s) and version right away: FICO, MM, SD, ABAP, S/4HANA, SuccessFactors',
      'Describe your role in implementations: blueprint, configuration, testing, cutover, hypercare',
      'Mention the industry and project scale in terms you can disclose',
      'Show consulting skills as well as technical ones: workshops, stakeholder management, documentation',
      'Include certifications that are current, with the issuing body',
    ],
    donts: [
      'Don\'t list modules you have only studied as if you implemented them',
      'Avoid transaction-code lists; they belong on the CV if anywhere',
      'Don\'t overlook support versus implementation experience — state which you did',
      'Never name clients under NDA',
      'Don\'t write about SAP generally; explain how your module experience fits this project or company',
    ],
    keyPoints: [
      'Module, version, and number of full implementation cycles',
      'Your responsibility within the project team',
      'Business process knowledge in the relevant domain',
      'Experience with migration to S/4HANA or rollouts across regions',
    ],
    sampleOpening: 'With [N] years of hands-on SAP [module] experience across [N] implementation and support projects, I am applying for the SAP Consultant role at [Target Company], where your [S/4HANA migration or rollout] aligns with my background.',
    sampleBody: 'On my most recent project for a [industry] client, I handled blueprinting workshops, configured [processes], and supported user acceptance testing and cutover for [N] business units. I documented [number or type of deliverables] and trained key users, which helped reduce post-go-live tickets during hypercare. I work comfortably with functional leads, ABAP developers, and business owners to translate requirements into configuration.',
    sampleClosing: 'I would appreciate the opportunity to discuss how my [module] experience can support your programme. Thank you for considering my application.',
    faqs: [
      { q: 'Should a SAP consultant list modules in a cover letter?', a: 'Mention your primary modules and versions in the opening, and let the CV hold the full detail. The letter should show how you applied them on real projects.' },
      { q: 'Is a SAP certification worth mentioning?', a: 'Yes, if it is current and relevant to the role. Certifications help get shortlisted, but project experience is what interviewers probe, so pair it with an example.' },
    ],
  },

  'react-developer': {
    dos: [
      'Mention React specifics the JD cares about: hooks, state management (Redux, Zustand), Next.js, TypeScript',
      'Describe one interface you built and a user-facing outcome, such as performance or accessibility gains',
      'Link a live deployment or repository so reviewers can inspect the code',
      'Show testing habits with React Testing Library, Jest, or Cypress',
      'Reference the company\'s product front end and what you would improve or learn from it',
    ],
    donts: [
      'Don\'t describe yourself only as a "React developer" with no mention of web fundamentals such as HTML, CSS, and JavaScript',
      'Avoid listing every npm package you have used',
      'Don\'t overstate Next.js or TypeScript if you have only light exposure',
      'Never submit a portfolio link that does not load or has broken demos',
      'Don\'t skip accessibility and performance — hiring managers ask about them',
    ],
    keyPoints: [
      'A component or feature that required real design decisions',
      'How you manage state and data fetching',
      'Performance work: bundle size, rendering, Core Web Vitals',
      'Collaboration with designers and backend engineers',
    ],
    sampleOpening: 'I build production React interfaces in TypeScript, and my recent work on [feature/app] at [Previous Company] improved [measurable thing, e.g. load time or task completion] — which is why the React Developer role at [Target Company] stands out to me.',
    sampleBody: 'For [project], I architected the front end with [Next.js/React], managed state with [library], and added tests with React Testing Library. I reduced [metric] by [method, e.g. code splitting and memoisation], and worked with designers to ship an accessible component library used across [N] screens. I review pull requests regularly and enjoy giving and receiving feedback.',
    sampleClosing: 'I would be glad to walk through the project code and discuss how I can contribute to [Target Company]\'s front-end team. Thank you for your time.',
    faqs: [
      { q: 'What should a React developer include in a cover letter?', a: 'One concrete project with the stack, a decision you made, and a result, plus a link to the live app or repository. Keep it under 300 words.' },
      { q: 'Does a fresher React developer need a cover letter?', a: 'It helps if you can point to deployed projects and explain what you built yourself. A short letter linking your best project often outperforms a longer generic one.' },
    ],
  },

  'investment-banker': {
    dos: [
      'Open with the transaction experience or sector coverage most relevant to the desk or group',
      'Reference the firm\'s recent deals or sector strengths to show genuine research',
      'Describe your modelling and analytical contribution: DCF, comps, LBO, merger models, pitch books',
      'Show attention to detail and stamina with a concrete example, not an adjective',
      'Mention the credentials relevant to the role: CFA progress, CA, MBA programme, or relevant certifications',
    ],
    donts: [
      'Don\'t exaggerate your role in a deal; senior bankers will ask follow-up questions',
      'Avoid disclosing confidential transaction details or non-public information',
      'Don\'t use "passionate about finance" as your main argument',
      'Never submit a letter with a wrong firm name or desk — it ends the application',
      'Don\'t go beyond one page',
    ],
    keyPoints: [
      'Deals or case work, in publicly disclosable terms',
      'Technical skills: valuation, financial modelling, Excel and PowerPoint speed',
      'Why this firm and this group specifically',
      'Your path to the role: internships, networking, coursework, and certifications',
    ],
    sampleOpening: 'I am applying for the [Analyst/Associate] position in [Target Firm]\'s [sector] group, drawn by its advisory role on [publicly announced transaction] and my own experience supporting [type of transaction] at [Previous Firm].',
    sampleBody: 'At [Previous Firm], I built [type of model, e.g. DCF and trading comps] and prepared sections of the pitch book for [transaction type], working to tight timelines alongside [VP/Director]. I coordinated diligence materials with [counterparty types] and presented findings internally. I also completed [CFA Level / MBA / certification], which deepened my valuation foundation.',
    sampleClosing: 'I would welcome the opportunity to speak with your team about how I can contribute to the group. Thank you for your time and consideration.',
    faqs: [
      { q: 'Do investment banking applications need a cover letter?', a: 'Many banks ask for one, particularly for campus and lateral hiring. Keep it to one page, specific to the group, and free of errors.' },
      { q: 'How do I show interest in investment banking without deal experience?', a: 'Use internships, case competitions, student investment funds, or personal valuation work, and explain what you built and learned. Pair that with specific knowledge of the firm\'s deals and sector focus.' },
    ],
  },

  'scrum-master': {
    dos: [
      'Mention your certifications (PSM, CSM, SAFe) and how long you have worked with Scrum teams',
      'Describe a team improvement with evidence, such as better predictability, shorter cycle time, or fewer escaped defects',
      'Show how you coach: facilitation, conflict resolution, and removing impediments',
      'Say what team size and structure you have worked with, including distributed teams',
      'Mention the tooling used: Jira, Azure DevOps, Confluence, and the metrics you track',
    ],
    donts: [
      'Don\'t describe the role as administrative — focus on servant leadership and team outcomes',
      'Avoid quoting the Scrum Guide at length',
      'Don\'t claim agile transformation results that belonged to a wider organisation',
      'Never imply the team velocity is a performance score',
      'Don\'t forget to mention your ability to work with product owners and stakeholders',
    ],
    keyPoints: [
      'Team size, product type, and sprint length',
      'One impediment you removed and what changed afterwards',
      'Your approach to retrospectives and continuous improvement',
      'Experience scaling Scrum with SAFe or LeSS, if relevant',
    ],
    sampleOpening: 'As a certified Scrum Master who has guided [N] teams through [N] releases, I am applying for the Scrum Master role at [Target Company], where I would like to help teams deliver predictably and enjoy the process.',
    sampleBody: 'At [Previous Company], I worked with a distributed team of [N] to improve [metric, e.g. sprint predictability]. By introducing [practice, e.g. refined backlog sessions and a clearer definition of done], we reduced [problem] and shipped [outcome]. I facilitate retrospectives that produce actions we actually track, and I coach product owners on prioritisation. I use Jira dashboards to make flow visible without turning metrics into targets.',
    sampleClosing: 'I would be pleased to discuss how I can help [Target Company]\'s teams improve delivery and collaboration. Thank you for your consideration.',
    faqs: [
      { q: 'What should a Scrum Master cover letter focus on?', a: 'Team outcomes and coaching rather than ceremonies. Show one example where you helped a team improve and what changed as a result.' },
      { q: 'Are Scrum certifications required?', a: 'Many employers list PSM or CSM as preferred or required, so mention yours near the top. Experience with real teams remains the deciding factor in interviews.' },
    ],
  },

  'business-development-manager': {
    dos: [
      'Lead with revenue, partnerships, or market expansion you personally drove',
      'Describe how you source and qualify opportunities, from outbound to channel partners',
      'Show strategic thinking: how you chose markets, accounts, or partners',
      'Mention stakeholder level you work with, such as CXOs or procurement heads',
      'Link your results to what the company is trying to achieve, based on its latest announcements',
    ],
    donts: [
      'Don\'t treat BD as a synonym for sales without mentioning partnerships and strategy',
      'Avoid listing deals without context for size, cycle, or your role',
      'Don\'t claim the company\'s results as your own when your contribution was part of a team',
      'Never use vague phrases like "excellent networking skills" without an example',
      'Don\'t send the same letter to different companies',
    ],
    keyPoints: [
      'Revenue or pipeline you generated and the timeframe',
      'A partnership or market entry you led',
      'Your method for qualifying and prioritising opportunities',
      'Cross-functional work with product, finance, and legal on deals',
    ],
    sampleOpening: 'At [Previous Company], I opened the [region/segment] market and built a pipeline of [N] qualified accounts, contributing [X] to annual revenue; I am applying for the Business Development Manager role at [Target Company] to do the same for your [product/market].',
    sampleBody: 'My approach begins with mapping the accounts and partners where [Target Company]\'s offering solves a clear problem, then building relationships at both decision-maker and user level. In [example deal/partnership], I coordinated with product and legal to shape terms, resolved [obstacle], and closed within [timeframe]. I report pipeline health weekly and adjust focus based on conversion data.',
    sampleClosing: 'I would welcome the opportunity to share my plan for [market/segment] and learn more about your growth priorities. Thank you for your time.',
    faqs: [
      { q: 'What is the difference between a sales and a business development cover letter?', a: 'A sales letter emphasises closing and targets. A business development letter should also show market selection, partnerships, and long-term pipeline building.' },
      { q: 'How do I quantify business development results?', a: 'Use pipeline created, revenue influenced, partnerships signed, or markets entered, each with a timeframe and your specific role. Share only figures you can discuss in detail.' },
    ],
  },

  'network-engineer': {
    dos: [
      'Specify the networks you have managed: LAN, WAN, data centre, campus, SD-WAN, or cloud networking',
      'Name the vendors and certifications: Cisco (CCNA, CCNP), Juniper, Palo Alto, Fortinet, AWS or Azure networking',
      'Describe an incident or project: migration, upgrade, or outage resolution',
      'Mention monitoring and automation tools, such as SolarWinds, Zabbix, Ansible, or Python scripting',
      'Include security and uptime responsibilities relevant to the role',
    ],
    donts: [
      'Don\'t list protocols without evidence of using them in a live environment',
      'Avoid sharing confidential network diagrams or IP schemes',
      'Don\'t describe only routine tasks; show one improvement you made',
      'Never ignore the on-call or shift requirements mentioned in the JD',
      'Don\'t overstate certifications that have lapsed',
    ],
    keyPoints: [
      'Network scale: sites, devices, users, or traffic in disclosable terms',
      'A specific outage, migration, or optimisation you handled',
      'Security practices: segmentation, firewall policy, VPN',
      'Automation and documentation habits',
    ],
    sampleOpening: 'I manage the enterprise network for [N] sites at [Previous Company], including routing, switching, and firewalls on [vendors], and I am applying for the Network Engineer position at [Target Company] to work on infrastructure at greater scale.',
    sampleBody: 'In my current role, I led [project, e.g. a WAN migration to SD-WAN], planning the cutover to avoid downtime and documenting the final design. I diagnosed [incident type] by [method], restoring service in [time] and updating monitoring to catch similar issues earlier. I use [Ansible/Python] to automate repetitive configuration, and I hold [certification].',
    sampleClosing: 'I would be pleased to discuss how my experience in [area] can support [Target Company]\'s network reliability goals. Thank you for considering my application.',
    faqs: [
      { q: 'Which certifications should a network engineer mention?', a: 'Mention the ones named in the job description first, such as CCNA or CCNP, then vendor certifications for the equipment the employer uses. Keep only current certifications.' },
      { q: 'How can I make a network engineer cover letter specific?', a: 'Describe one project or incident with the environment, your action, and the result. Specificity separates experienced engineers from keyword lists.' },
    ],
  },

  'logistics-manager': {
    dos: [
      'Open with scale and results: shipments, warehouses, routes, or service levels you managed',
      'Name the logistics areas you cover: warehousing, last-mile, freight, fleet, inventory, or import-export',
      'Describe an improvement in cost, delivery time, or accuracy and how you achieved it',
      'Mention systems used: WMS, TMS, ERP, and route optimisation tools',
      'Show how you manage vendors, transporters, and teams',
    ],
    donts: [
      'Don\'t speak only about cost-cutting; show service quality too',
      'Avoid unverifiable claims about savings',
      'Don\'t overlook compliance: GST, e-way bills, customs, and safety',
      'Never present the entire network performance as your own if you led part of it',
      'Don\'t forget to mention how you handled a disruption',
    ],
    keyPoints: [
      'Operational scale in disclosable terms',
      'KPIs you owned, such as on-time delivery, order accuracy, or cost per shipment',
      'Technology and automation you introduced or used',
      'Team and vendor management experience',
    ],
    sampleOpening: 'I currently manage logistics operations across [N] locations for [Previous Company], where I improved [KPI] by [method], and I am applying for the Logistics Manager position at [Target Company] to bring this approach to your network.',
    sampleBody: 'My responsibilities cover [inbound/outbound/last-mile], carrier negotiations, and inventory movement. To address [problem, e.g. delayed deliveries], I introduced [change, e.g. route planning and daily performance reviews], which improved [KPI] while holding costs steady. I use [WMS/TMS/ERP] for visibility and work with transporters and warehouse leads to resolve exceptions quickly, including during peak season.',
    sampleClosing: 'I would welcome the chance to discuss how I can support [Target Company]\'s supply chain priorities. Thank you for your time and consideration.',
    faqs: [
      { q: 'What should a logistics manager highlight in a cover letter?', a: 'The scale you handled, the KPIs you owned, and one improvement with a clear method and outcome. Mention systems and vendor management as supporting evidence.' },
      { q: 'Is a cover letter useful for logistics roles in India?', a: 'It is helpful for managerial positions and for applications to larger 3PLs, e-commerce firms, and manufacturers, where hiring managers value concise evidence of operational impact.' },
    ],
  },

  'interior-designer': {
    dos: [
      'Link your portfolio first; it is the main evidence of your work',
      'Describe the project types you design: residential, commercial, hospitality, or retail',
      'Explain your process from concept to site execution, including coordination with contractors',
      'Mention software proficiency: AutoCAD, SketchUp, 3ds Max, Revit, V-Ray, or Photoshop',
      'Show awareness of the firm\'s style and a project of theirs that resonates with you',
    ],
    donts: [
      'Don\'t present purely visual work without discussing constraints such as budget and timelines',
      'Avoid generic praise of the firm; refer to specific projects',
      'Don\'t send large attachments; link a portfolio instead',
      'Never claim credit for team work without saying what you did',
      'Don\'t ignore site and vendor coordination experience',
    ],
    keyPoints: [
      'Project types, scale, and your role',
      'Design process and client communication',
      'Software and visualisation skills',
      'Site supervision and budget awareness',
    ],
    sampleOpening: 'My portfolio at [link] includes [N] residential and [N] commercial projects that I took from concept to handover, and I would like to bring that range to the Interior Designer role at [Target Firm].',
    sampleBody: 'On [project name], I developed the concept, produced drawings in [AutoCAD/SketchUp], and created renders for client approval. I coordinated with contractors and vendors on site to keep the design intent within a budget of [range, if shareable]. I enjoy translating a client\'s brief into spaces that function well, and I was drawn to [Target Firm]\'s work on [specific project] for its [quality that appeals to you].',
    sampleClosing: 'I would welcome the opportunity to walk you through my portfolio and discuss how I can contribute to your studio. Thank you for your time.',
    faqs: [
      { q: 'Should an interior designer attach a portfolio to the cover letter?', a: 'Link to an online portfolio and attach a short PDF only if the employer requests it. Make sure the first three projects shown are your best and most relevant.' },
      { q: 'How do freshers show experience in an interior design cover letter?', a: 'Use academic projects, internships, and competitions. Describe the brief, your process, the tools used, and what you learned, and include drawings or renders.' },
    ],
  },

  pharmacist: {
    dos: [
      'State your registration and qualification (B.Pharm, M.Pharm, Pharm.D) and registration status',
      'Name the setting you are applying for: hospital, retail, clinical, regulatory, or pharma industry',
      'Describe responsibilities such as dispensing accuracy, patient counselling, inventory, or compliance',
      'Mention relevant systems and regulations: Drugs and Cosmetics Act, GMP, pharmacovigilance',
      'Show patient-safety mindset through a specific example',
    ],
    donts: [
      'Don\'t overlook your registration details; employers will check them',
      'Avoid general statements like "caring for patients" without examples',
      'Don\'t disclose patient information in any example',
      'Never overstate clinical responsibilities beyond your role and licence',
      'Don\'t apply with a letter that ignores the specific setting of the role',
    ],
    keyPoints: [
      'Qualification, registration, and years of experience',
      'Setting and volume of work',
      'Compliance and quality practices',
      'Patient counselling or clinical contribution',
    ],
    sampleOpening: 'As a registered pharmacist with [N] years of experience in [hospital/retail/industry] pharmacy, I am applying for the Pharmacist position at [Target Organisation], where my focus on accurate dispensing and patient safety would be put to use.',
    sampleBody: 'At [Previous Employer], I dispensed and verified prescriptions, counselled patients on [type of guidance], and managed stock to reduce [issue, e.g. expiry losses]. I followed [GMP/regulatory] procedures and helped update [process] after identifying [issue]. I work closely with doctors, nurses, and suppliers and am comfortable with [pharmacy software].',
    sampleClosing: 'I would appreciate the opportunity to discuss how I can contribute to your pharmacy team. Thank you for your time.',
    faqs: [
      { q: 'What should a pharmacist include in a cover letter?', a: 'Registration and qualification, the setting you have worked in, and one example that shows accuracy, compliance, or patient counselling. Keep patient details out of examples.' },
      { q: 'Can a fresher pharmacist write a strong cover letter?', a: 'Yes. Use internships, hospital postings, research projects, and relevant coursework to show your preparation. State your registration status and readiness to start.' },
    ],
  },

  'embedded-systems-engineer': {
    dos: [
      'Name the microcontrollers, processors, and RTOS you have worked with (ARM Cortex-M, STM32, ESP32, FreeRTOS)',
      'Describe a product or prototype you took through hardware bring-up, firmware, and testing',
      'Mention protocols and interfaces you implemented: I2C, SPI, UART, CAN, BLE',
      'Show debugging skills with tools such as oscilloscopes, logic analysers, and JTAG',
      'Match your experience to the industry: automotive, IoT, medical, industrial, or consumer electronics',
    ],
    donts: [
      'Don\'t list microcontrollers without saying what you built',
      'Avoid claiming safety-critical experience without mentioning the standards you followed',
      'Don\'t describe only hobby boards if the role is for production firmware, unless you explain the engineering depth',
      'Never omit the programming languages, typically C and C++',
      'Don\'t forget to show how you test and validate firmware',
    ],
    keyPoints: [
      'A project with hardware, firmware, and result',
      'Languages, RTOS, and toolchains',
      'Debugging and validation approach',
      'Relevant standards such as ISO 26262 or MISRA C, where applicable',
    ],
    sampleOpening: 'I have developed firmware in C for [microcontroller family] devices, most recently a [product/prototype] that [what it did], and I am applying for the Embedded Systems Engineer role at [Target Company] to work on production-grade products.',
    sampleBody: 'On [project], I wrote drivers for [peripherals/protocols], integrated [RTOS], and used [debugging tools] to resolve [issue, e.g. timing bug]. I ran hardware-in-the-loop tests to validate behaviour before release, and followed [coding standard, e.g. MISRA C] for code quality. I enjoy working at the boundary of hardware and software and collaborate easily with electronics and QA teams.',
    sampleClosing: 'I would be glad to discuss how my firmware experience can support your product development. Thank you for considering my application.',
    faqs: [
      { q: 'What should an embedded systems engineer emphasise in a cover letter?', a: 'A project that spans hardware and firmware, the toolchain and protocols you used, and how you debugged and validated it. Practical depth matters more than listing every chip.' },
      { q: 'Do embedded freshers need project links?', a: 'Yes. A repository with clear documentation, schematics, and a short demo video helps employers see what you built and how you work.' },
    ],
  },
};
