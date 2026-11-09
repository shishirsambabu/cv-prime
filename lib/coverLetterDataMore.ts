import type { CoverLetterData } from '@/lib/coverLetterData';

/**
 * Cover letter guidance for the 15 roles that previously had no
 * /cover-letter-examples/[role] page. Sample figures are illustrative
 * placeholders for the candidate to replace with their own numbers.
 */
export const coverLetterDataMore: Record<string, CoverLetterData> = {
  'sales-executive': {
    dos: [
      'Open with a target-achievement number: "Achieved 118% of quarterly target across 6 consecutive months"',
      'Name your sales type (field, inside, B2B, B2C) and the ticket size or territory you handled',
      'Mention the CRM or dialler tools you used, such as Salesforce, Zoho or LeadSquared',
      'Connect your results to the specific product or market the employer sells into',
    ],
    donts: [
      'Don\'t write "I am a hardworking, target-oriented person" without a number behind it',
      'Don\'t repeat your CV\'s bullet list — add the story behind your best quarter',
      'Don\'t mix field-sales and telesales claims; recruiters screen for one or the other',
      'Don\'t send one letter to every FMCG, BFSI and SaaS employer — each sells differently',
    ],
    keyPoints: [
      'Target vs achievement is the single most persuasive data point in a sales letter',
      'Show how you source leads, not just how you close them',
      'Mention retention or repeat business to signal you build accounts, not just one-off sales',
    ],
    sampleOpening: 'Over the past two years at [Company], I consistently exceeded my territory target — closing at 118% of quota across [N] outlets — and I would like to bring the same discipline to [Target Company]\'s [product line] sales team.',
    sampleBody: 'In my current role I manage [N] active accounts across [area], generating around [N] qualified leads a month through cold outreach, referrals and channel partners, with a lead-to-close rate of [X]%. I run my pipeline in [CRM], review it weekly with my manager, and focus on the accounts that reorder, which lifted repeat business by [X]% last year. I understand [Target Company] sells to [customer type], and I have spent my career in exactly that kind of buying conversation.',
    sampleClosing: 'I would welcome a conversation about the targets and territory for this role, and how my track record could contribute in the first two quarters. Thank you for your time.',
    faqs: [
      { q: 'Do sales executives in India need a cover letter?', a: 'Many high-volume sales hiring drives screen on CV and a phone call, so a letter is optional. It helps most for B2B, SaaS and BFSI roles where the hiring manager reads applications personally. Keep it under 250 words and lead with your target achievement.' },
      { q: 'What should a fresher sales executive put in a cover letter?', a: 'Use internships, campus ambassador work, event sales or part-time selling. Quantify anything — funds raised, sign-ups driven, calls made — and show you understand the employer\'s customers.' },
    ],
  },
  'ios-developer': {
    dos: [
      'State your Swift/SwiftUI experience and the iOS versions you have shipped for in the first two lines',
      'Link to live App Store apps or a GitHub repo and name your role in each',
      'Mention concrete engineering outcomes: crash-free rate, launch time, app rating, release cadence',
      'Reference something specific about the employer\'s app and what you would improve or extend',
    ],
    donts: [
      'Don\'t list every framework you have touched — pick Swift, SwiftUI/UIKit, Combine and your architecture pattern',
      'Don\'t claim App Store apps you can\'t link to',
      'Don\'t open with "I am passionate about mobile" — open with a shipped product',
      'Don\'t ignore testing and CI; hiring managers look for XCTest and Fastlane experience',
    ],
    keyPoints: [
      'A shipped, linkable app outweighs any list of skills',
      'Show architecture awareness (MVVM, Clean, TCA) and why you chose it',
      'Mention accessibility, performance profiling or offline support if you have done them',
    ],
    sampleOpening: 'I build and ship native iOS apps in Swift, and my most recent release at [Company] reached [N] App Store users with a [X]% crash-free rate — the kind of product quality I would like to contribute to at [Target Company].',
    sampleBody: 'I migrated a UIKit codebase to SwiftUI module by module, cut cold-start time by [X]% through lazy loading and Instruments profiling, and introduced unit tests with XCTest and Fastlane-driven releases that moved us from monthly to fortnightly shipping. I am comfortable with Combine and async/await, REST and GraphQL integration, Core Data, and working closely with design and backend teams on API contracts.',
    sampleClosing: 'I would be glad to walk you through the apps I have shipped and how I approach architecture and release quality. Thank you for considering my application.',
    faqs: [
      { q: 'Should an iOS developer attach a portfolio to a cover letter?', a: 'Yes. Link App Store listings or a GitHub profile with at least one complete app. A working product tells a hiring manager more than a skills list.' },
      { q: 'How long should an iOS developer cover letter be?', a: 'Three short paragraphs, under 250 words. Lead with a shipped app, add one engineering achievement, and close with a specific ask.' },
    ],
  },
  'full-stack-developer': {
    dos: [
      'Name your front-end and back-end stack in the first paragraph, matched to the job description',
      'Describe one feature you owned end to end, from database schema to UI',
      'Quantify outcomes: page load time, API latency, users, conversion or deployment frequency',
      'Mention cloud and CI/CD exposure — AWS, Docker, GitHub Actions — if the role asks for it',
    ],
    donts: [
      'Don\'t claim equal mastery of everything; say where you are strongest',
      'Don\'t paste your whole tech stack — match it to the role',
      'Don\'t use generic openers; start with what you built',
      'Don\'t forget to link a live project or repository',
    ],
    keyPoints: [
      'Ownership across the stack is your differentiator, so give an example of it',
      'Show you can make trade-offs between speed and quality',
      'Mention collaboration with product and design, not only code',
    ],
    sampleOpening: 'I recently owned a customer-facing feature at [Company] from database design through React UI to production deployment, reducing checkout drop-off by [X]% — exactly the end-to-end ownership I understand [Target Company] expects of its full-stack engineers.',
    sampleBody: 'My day-to-day stack is React, Node.js and PostgreSQL, deployed on AWS with Docker and automated pipelines. I have designed REST APIs serving [N] requests a day, added caching that cut median response time by [X]%, and written the integration tests that let our team ship weekly. I work closely with product managers to scope features and with designers to keep the interface consistent.',
    sampleClosing: 'I would welcome the chance to discuss the products your team is building and where a full-stack engineer can have the most impact. Thank you for your time.',
    faqs: [
      { q: 'Is a cover letter necessary for full-stack developer roles?', a: 'It is usually optional for large service companies and useful for startups and product companies, where a short, specific letter can separate you from many similar CVs.' },
      { q: 'What should a fresher full-stack developer highlight?', a: 'Two or three complete projects with live links, the stack used, and what you personally built. Internships and open-source contributions strengthen the case.' },
    ],
  },
  'machine-learning-engineer': {
    dos: [
      'Lead with a model or system you put into production, not a notebook experiment',
      'State the business or product metric it moved, plus the evaluation metric you used',
      'Name your tooling: PyTorch or TensorFlow, MLflow, Airflow, cloud ML platforms, feature stores',
      'Show you understand deployment concerns — monitoring, drift, latency and cost',
    ],
    donts: [
      'Don\'t list algorithms without saying what problem they solved',
      'Don\'t overstate research credit on team projects',
      'Don\'t quote accuracy alone when the problem needs precision, recall or latency figures',
      'Don\'t skip the engineering side; MLE roles weigh it heavily',
    ],
    keyPoints: [
      'Production impact separates an ML engineer from a data scientist in hiring screens',
      'Pair every model with its metric and the baseline it beat',
      'Mention data quality and pipelines — they are most of the real work',
    ],
    sampleOpening: 'At [Company] I took a recommendation model from prototype to production, improving click-through by [X]% against the previous baseline while holding p95 inference latency under [N] ms — the production-focused ML work I want to continue at [Target Company].',
    sampleBody: 'I build the full pipeline: feature engineering in Spark, training in PyTorch, experiment tracking in MLflow, and deployment behind a containerised service on AWS with monitoring for drift and latency. When the first model degraded after a data change, I added automated retraining triggers and data validation checks that cut incident time significantly. I am comfortable explaining trade-offs to product stakeholders.',
    sampleClosing: 'I would value the opportunity to discuss the ML problems your team is solving and how I can help take them to production. Thank you for your consideration.',
    faqs: [
      { q: 'What makes a strong machine learning engineer cover letter?', a: 'A production system, the metric it moved, and the tools you used to ship and monitor it. Keep research detail brief unless the role is research-led.' },
      { q: 'Should freshers in ML include Kaggle or projects?', a: 'Yes, if you explain the problem, your approach, the evaluation metric and the result. Link the repository and keep the description short.' },
    ],
  },
  'chartered-accountant': {
    dos: [
      'State your membership status and articleship or post-qualification experience early',
      'Mention the specific domains you handled — audit, direct and indirect tax, GST, IFRS/Ind AS, FP&A',
      'Quantify scale: audit size, number of entities, tax savings identified, closing-time reduction',
      'Reference regulatory knowledge relevant to the role: Companies Act, SEBI, RBI, GST law',
    ],
    donts: [
      'Don\'t just list the CA qualification — explain what you did with it',
      'Don\'t use heavy jargon without context for a non-finance hiring manager',
      'Don\'t exaggerate client names under confidentiality; describe the sector and scale instead',
      'Don\'t send an audit-focused letter for a finance-controller role without adapting it',
    ],
    keyPoints: [
      'Specialisation (audit, tax, treasury, FP&A) should match the role clearly',
      'Show judgment and ethics — trust is central to finance roles',
      'Mention tools: Tally, SAP, Excel modelling, Power BI, or ERP experience',
    ],
    sampleOpening: 'As a qualified Chartered Accountant with [N] years of experience in statutory audit and GST compliance, I helped [Company] cut its month-end close from [N] to [N] working days, and I would like to bring the same rigour to [Target Company]\'s finance team.',
    sampleBody: 'I have led audits for entities with annual turnover of up to Rs [N] crore, handled GST reconciliations and notices, and supported Ind AS reporting for group consolidation. In my current role I introduced reconciliation checklists and automated reports in Excel and SAP, which reduced adjustment entries and review time. I work comfortably with auditors, tax authorities and business heads.',
    sampleClosing: 'I would welcome a conversation about how my audit and compliance background can support your finance function. Thank you for your time and consideration.',
    faqs: [
      { q: 'Do chartered accountants need a cover letter in India?', a: 'Big Four and large corporates often screen mainly on CV, but a concise letter helps for specialised roles, lateral moves and industry transitions, where it explains the fit.' },
      { q: 'How should a newly qualified CA write a cover letter?', a: 'Highlight articleship exposure, your rank or attempts only if strong, the domains you worked in, and tools you used. Show eagerness for the specific team.' },
    ],
  },
  'sap-consultant': {
    dos: [
      'Name your SAP module and version first: FICO, MM, SD, ABAP, Basis, S/4HANA',
      'Describe the implementation or support scope: rollout phase, number of users, sites or company codes',
      'Quantify business impact: process time saved, reconciliation reduced, tickets resolved within SLA',
      'Mention the methodology you work in, such as SAP Activate, and your client-facing experience',
    ],
    donts: [
      'Don\'t list every SAP module you have ever seen',
      'Don\'t blur implementation and support experience',
      'Don\'t forget certifications, if you hold them',
      'Don\'t write only about configuration; show how you worked with business users',
    ],
    keyPoints: [
      'End-to-end lifecycle exposure (blueprint, build, test, go-live, hypercare) is valued',
      'S/4HANA migration experience is a strong differentiator',
      'Business-process understanding matters as much as system knowledge',
    ],
    sampleOpening: 'As an SAP FICO consultant with [N] years of experience across two S/4HANA implementations, I helped a manufacturing client go live across [N] company codes with minimal hypercare tickets, and I would like to bring that delivery experience to [Target Company].',
    sampleBody: 'I handled requirement workshops, configuration of general ledger, accounts payable and receivable, and asset accounting, and led user acceptance testing and training. After go-live I resolved incidents within SLA and recommended process changes that reduced manual reconciliations. I work well with finance users, functional teams and technical developers.',
    sampleClosing: 'I would appreciate the chance to discuss the SAP landscape and roadmap at [Target Company] and where I can add value. Thank you for your consideration.',
    faqs: [
      { q: 'Is a cover letter useful for SAP consultant roles?', a: 'Yes for client-facing and lateral roles. It lets you summarise module expertise, project scale and domain knowledge that a CV table may not convey.' },
      { q: 'Should I mention SAP certification in the cover letter?', a: 'Yes, briefly, with the module and year. Pair it with project experience, since employers weigh delivery more than certification alone.' },
    ],
  },
  'react-developer': {
    dos: [
      'Mention React version, state management approach and your TypeScript experience upfront',
      'Link a live app or repository and describe your contribution',
      'Quantify front-end outcomes: Lighthouse scores, bundle size, load time, conversion',
      'Show attention to accessibility, testing and design-system work',
    ],
    donts: [
      'Don\'t just say "proficient in React" — show what you built',
      'Don\'t list every npm package you have used',
      'Don\'t ignore testing; mention Jest and React Testing Library if used',
      'Don\'t send a letter without a portfolio or code link',
    ],
    keyPoints: [
      'Performance and UX results make front-end claims credible',
      'Collaboration with designers and API owners is part of the job',
      'Component architecture and reusability show seniority',
    ],
    sampleOpening: 'I build performant React and TypeScript interfaces, and at [Company] I improved our dashboard\'s Lighthouse performance score from [N] to [N] by code-splitting and memoisation — the front-end quality focus I would like to bring to [Target Company].',
    sampleBody: 'I have built a reusable component library used across [N] product teams, implemented state management with Redux Toolkit and React Query, and written component tests with Jest and React Testing Library. I work from Figma designs, care about accessibility, and partner with backend engineers on API contracts so features ship cleanly.',
    sampleClosing: 'I would be glad to share my portfolio and discuss how I can help your team build fast, accessible products. Thank you for your time.',
    faqs: [
      { q: 'What should a React developer include in a cover letter?', a: 'One concrete project, your stack, one measurable outcome, and a link to code or a live app. Keep it under 250 words.' },
      { q: 'Do React freshers need a cover letter?', a: 'It helps if you have strong projects but little formal experience. Use it to explain what you built and what you learned.' },
    ],
  },
  'investment-banker': {
    dos: [
      'Lead with deal exposure: type, size, sector and your role in the transaction',
      'Show modelling and valuation skills: DCF, comps, LBO, merger models',
      'Explain why this specific bank, team and sector — and demonstrate you follow its recent deals',
      'Keep a formal, precise tone and fit on a single page',
    ],
    donts: [
      'Don\'t disclose confidential client details; describe deals by sector and size',
      'Don\'t be vague about your role — say what you built or analysed',
      'Don\'t recycle a letter between banks',
      'Don\'t use informal language or filler',
    ],
    keyPoints: [
      'Specific transaction experience outweighs generic claims of attention to detail',
      'Show endurance and judgment under tight deadlines',
      'Demonstrate market awareness through a recent deal or sector view',
    ],
    sampleOpening: 'I am applying for the [role] position at [Target Company] because of your recent work in [sector], and I bring [N] years of transaction experience including a Rs [N] crore [deal type] where I built the valuation model and supported client presentations.',
    sampleBody: 'In my current role I have prepared pitch books, built DCF and trading-comps models, and supported due diligence on [N] transactions across [sectors]. I work effectively with senior bankers, legal advisers and clients under tight timelines, and I take ownership of accuracy in every deliverable. I follow [Target Company]\'s activity in [sector] and see a strong fit with my experience.',
    sampleClosing: 'I would welcome the opportunity to discuss how my transaction and modelling experience could support your team. Thank you for your consideration.',
    faqs: [
      { q: 'How long should an investment banking cover letter be?', a: 'One page maximum, usually three or four short paragraphs. Be specific about deals, skills and why you want that firm.' },
      { q: 'Can I mention deals under NDA?', a: 'Describe them generically — sector, size range and your contribution — without naming confidential clients or non-public terms.' },
    ],
  },
  'scrum-master': {
    dos: [
      'Describe the teams you coached: number of teams, size, product type and delivery context',
      'Quantify outcomes: velocity stability, cycle time, release frequency, defect escape rate',
      'Mention certifications such as CSM or PSM and the frameworks you use',
      'Show how you remove impediments and coach product owners',
    ],
    donts: [
      'Don\'t describe the role as only running ceremonies',
      'Don\'t overuse framework jargon without outcomes',
      'Don\'t claim team results as personal achievements',
      'Don\'t forget stakeholder communication',
    ],
    keyPoints: [
      'Outcomes for the team matter more than ceremonies run',
      'Show servant leadership and conflict handling with examples',
      'Mention tools like Jira, Confluence and metrics dashboards',
    ],
    sampleOpening: 'As a Scrum Master supporting [N] cross-functional teams at [Company], I helped reduce average cycle time by [X]% and stabilise sprint predictability, and I would like to bring this coaching approach to [Target Company].',
    sampleBody: 'I facilitate planning, refinement and retrospectives, but I focus on removing blockers, improving backlog quality with product owners, and helping teams adopt practices such as WIP limits and automated testing. I track flow metrics in Jira and share them transparently with stakeholders. I hold a [CSM/PSM] certification and mentor new team members on agile practices.',
    sampleClosing: 'I would value the chance to talk about your teams\' goals and how I could help them deliver more predictably. Thank you for your time.',
    faqs: [
      { q: 'Should a Scrum Master mention certifications in a cover letter?', a: 'Yes, briefly. But lead with team outcomes and coaching examples, since certifications alone rarely decide hiring.' },
      { q: 'How can a project manager move into a Scrum Master role?', a: 'Highlight agile experience, facilitation, stakeholder management and any certification, and explain your interest in coaching teams rather than directing them.' },
    ],
  },
  'business-development-manager': {
    dos: [
      'Open with revenue or pipeline you generated and the markets or accounts involved',
      'Describe your full cycle: prospecting, pitching, negotiation, closing, account growth',
      'Mention partnerships, channels or key accounts you built',
      'Link your sector knowledge to the employer\'s target customers',
    ],
    donts: [
      'Don\'t claim revenue without clear scope and period',
      'Don\'t use generic networking claims',
      'Don\'t omit your role in team vs individual wins',
      'Don\'t send the same pitch to employers in different sectors',
    ],
    keyPoints: [
      'Revenue, pipeline value and win rate are the core evidence',
      'Relationship depth with decision makers matters in B2B',
      'Show strategic thinking beyond cold outreach',
    ],
    sampleOpening: 'At [Company] I built a new enterprise pipeline worth Rs [N] crore in 12 months and closed [N] strategic accounts, and I would like to apply the same approach to growing [Target Company]\'s presence in [market].',
    sampleBody: 'I source opportunities through outbound, partnerships and industry events, map decision makers, and lead proposals and commercial negotiations through to contract. I work with product and delivery teams to make sure promises are deliverable, which has helped retain [X]% of accounts into a second year. I report pipeline metrics in [CRM] and review them with leadership regularly.',
    sampleClosing: 'I would welcome a discussion about your growth targets and how my experience could help reach them. Thank you for your consideration.',
    faqs: [
      { q: 'What should a business development manager emphasise in a cover letter?', a: 'Revenue and pipeline numbers, sales cycle length, deal sizes and the markets you have opened. Tie them directly to the employer\'s goals.' },
      { q: 'Is BD different from sales on a cover letter?', a: 'BD letters should emphasise new markets, partnerships and strategy in addition to closing deals.' },
    ],
  },
  'network-engineer': {
    dos: [
      'State your core domains: routing and switching, firewalls, wireless, SD-WAN, cloud networking',
      'Name vendors and certifications: Cisco, Juniper, Palo Alto, Fortinet, CCNA/CCNP',
      'Quantify scale and outcomes: sites, devices, uptime, incident resolution time',
      'Mention monitoring and automation tools you used',
    ],
    donts: [
      'Don\'t list every device you have configured',
      'Don\'t ignore security responsibilities',
      'Don\'t overlook documentation and change management',
      'Don\'t claim certifications you have not completed',
    ],
    keyPoints: [
      'Uptime and incident response are the metrics that matter',
      'Automation skills (Python, Ansible) increasingly differentiate candidates',
      'Cloud networking exposure helps for modern roles',
    ],
    sampleOpening: 'As a network engineer managing a [N]-site enterprise network at [Company], I maintained [X]% uptime and reduced average incident resolution time by [X]%, and I would like to bring that reliability focus to [Target Company].',
    sampleBody: 'I design and support routing and switching on Cisco platforms, manage firewall policies and VPNs, and monitor performance with [tool]. I introduced Python-based configuration backups and change templates that reduced errors during maintenance windows. I document changes carefully and coordinate with security and application teams during incidents. I hold [CCNA/CCNP].',
    sampleClosing: 'I would appreciate the opportunity to discuss your network environment and how I can help keep it reliable and secure. Thank you for your time.',
    faqs: [
      { q: 'Do network engineers need cover letters?', a: 'They are optional for many IT-service roles, but helpful for enterprise, banking and product-company positions where a short summary of scale and certifications adds context.' },
      { q: 'What certifications should I mention?', a: 'Mention current, relevant ones such as CCNA, CCNP, or vendor security certifications, with the issuing body and year.' },
    ],
  },
  'logistics-manager': {
    dos: [
      'Lead with scale: shipments, fleet size, warehouses, lanes or annual logistics spend managed',
      'Quantify improvements: on-time delivery, cost per shipment, inventory accuracy, damage rate',
      'Mention systems used, such as WMS, TMS, SAP or route optimisation tools',
      'Show vendor, 3PL and compliance management experience',
    ],
    donts: [
      'Don\'t describe duties without numbers',
      'Don\'t overlook safety and compliance',
      'Don\'t mix warehousing and transport claims without clarity',
      'Don\'t skip peak-season examples',
    ],
    keyPoints: [
      'Cost and service-level metrics are the language of logistics hiring',
      'Vendor negotiation and team leadership demonstrate management readiness',
      'Technology adoption shows modern capability',
    ],
    sampleOpening: 'Managing logistics for [N] shipments a month at [Company], I improved on-time delivery to [X]% while reducing transport cost per shipment by [X]%, and I would like to bring that performance to [Target Company]\'s supply chain.',
    sampleBody: 'I oversee warehousing, last-mile partners and carrier contracts, using [WMS/TMS] to track performance. I renegotiated freight rates, reorganised route planning, and introduced weekly KPI reviews with vendors that lowered damages and delays. I lead a team of [N] and maintain compliance with safety and documentation requirements, including during peak festive demand.',
    sampleClosing: 'I would welcome the chance to discuss your logistics network and where I can improve cost and service. Thank you for your consideration.',
    faqs: [
      { q: 'What should a logistics manager include in a cover letter?', a: 'Operational scale, KPI improvements, systems and vendor management experience, and how they match the employer\'s network.' },
      { q: 'Should I mention 3PL experience?', a: 'Yes, if relevant. Say which services you managed and the results achieved.' },
    ],
  },
  'interior-designer': {
    dos: [
      'Link your portfolio first; it is the main selling point',
      'Describe project types and scale: residential, commercial, hospitality, budget and area',
      'Name tools: AutoCAD, SketchUp, 3ds Max, Revit, V-Ray, Photoshop',
      'Mention client handling, vendor coordination and site supervision',
    ],
    donts: [
      'Don\'t send a letter without portfolio access',
      'Don\'t describe style preferences only; show project results',
      'Don\'t ignore budgets and timelines',
      'Don\'t claim full projects that were team efforts without clarifying your role',
    ],
    keyPoints: [
      'Portfolio quality drives shortlisting more than the letter',
      'Show you can bridge design and execution on site',
      'Mention client satisfaction, repeat work or referrals',
    ],
    sampleOpening: 'My portfolio at [link] includes [N] residential and commercial interiors delivered on budget, including a [N] sq ft [project type] for which I handled concept, drawings and site coordination — the end-to-end approach I would like to bring to [Target Company].',
    sampleBody: 'I develop concepts and mood boards, prepare detailed drawings in AutoCAD, create 3D visualisations in SketchUp and V-Ray, and coordinate with contractors and vendors to keep projects on schedule. I present options to clients clearly, manage revisions, and track costs against budget. I admire [Target Company]\'s work in [style/sector] and see my experience as a good fit.',
    sampleClosing: 'I would be pleased to walk you through my portfolio and discuss how I can contribute to your upcoming projects. Thank you for your time.',
    faqs: [
      { q: 'Does an interior designer need a cover letter?', a: 'A short letter with a portfolio link works well, especially when applying to design studios, where it shows communication and fit.' },
      { q: 'What should a fresher interior designer highlight?', a: 'Academic and internship projects, software skills, site exposure and a clean, well-presented portfolio.' },
    ],
  },
  'pharmacist': {
    dos: [
      'State your registration and qualification (B.Pharm, M.Pharm, Pharm.D) with registration details',
      'Describe your setting: hospital, retail, clinical, manufacturing, QA or regulatory affairs',
      'Mention dispensing volume, inventory accuracy or compliance audit results',
      'Show patient counselling and safety awareness',
    ],
    donts: [
      'Don\'t omit licence or registration status',
      'Don\'t use vague claims about being detail-oriented without examples',
      'Don\'t ignore regulatory knowledge (GMP, GLP, schedule drugs)',
      'Don\'t claim clinical expertise beyond your scope',
    ],
    keyPoints: [
      'Accuracy and compliance are the essential qualities',
      'Patient communication separates strong dispensing pharmacists',
      'For industry roles, quality systems and documentation matter',
    ],
    sampleOpening: 'As a registered pharmacist with [N] years of experience in [hospital/retail/industry] pharmacy, I dispensed over [N] prescriptions a month with a strong accuracy record, and I would like to contribute that diligence to [Target Company].',
    sampleBody: 'I verify prescriptions, counsel patients on dosage and interactions, manage inventory and expiry tracking, and maintain records in line with regulatory requirements. In my current role I helped our store pass [N] inspections without major observations and introduced stock checks that reduced expiry losses. I work calmly under pressure and communicate clearly with patients and doctors.',
    sampleClosing: 'I would welcome the opportunity to discuss how my experience fits your pharmacy team. Thank you for your consideration.',
    faqs: [
      { q: 'What should pharmacists include in a cover letter?', a: 'Registration status, setting, volume or compliance outcomes, and patient-safety practices relevant to the role.' },
      { q: 'How can a fresher pharmacist stand out?', a: 'Highlight internships, projects, registration status, software knowledge and any training in counselling or quality systems.' },
    ],
  },
  'embedded-systems-engineer': {
    dos: [
      'Name microcontrollers, RTOS and protocols you have worked with: ARM Cortex, STM32, FreeRTOS, CAN, SPI, I2C',
      'Describe a product or board you took from design to testing, with your contribution',
      'Quantify outcomes: memory footprint, power consumption, boot time, defect rate',
      'Mention debugging tools and standards such as JTAG, oscilloscope, MISRA C or ISO 26262',
    ],
    donts: [
      'Don\'t list every board you have used',
      'Don\'t describe only hobby projects without results',
      'Don\'t ignore testing and validation',
      'Don\'t overlook hardware-software integration',
    ],
    keyPoints: [
      'Low-level debugging ability is highly valued',
      'Resource optimisation shows depth',
      'Domain exposure (automotive, IoT, medical) should match the role',
    ],
    sampleOpening: 'I develop firmware in embedded C for ARM Cortex-M devices, and in my last project at [Company] I reduced power consumption by [X]% through sleep-mode optimisation — the efficiency-focused engineering I want to continue at [Target Company].',
    sampleBody: 'I have written drivers and application firmware on FreeRTOS, implemented CAN, SPI and I2C communication, and debugged hardware issues with JTAG and an oscilloscope. I follow MISRA C guidelines, write unit tests, and work closely with hardware teams during bring-up. I enjoy solving constraints around memory, timing and reliability.',
    sampleClosing: 'I would be glad to discuss your embedded products and how I can contribute. Thank you for your time.',
    faqs: [
      { q: 'What do embedded recruiters look for in a cover letter?', a: 'Specific hardware, protocols and RTOS experience, a project with measurable results, and domain fit.' },
      { q: 'Should freshers include academic projects?', a: 'Yes. Describe the hardware, the firmware you wrote, the problem solved and the outcome.' },
    ],
  },
};
