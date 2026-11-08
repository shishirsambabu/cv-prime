import type { CoverLetterData } from '@/lib/coverLetterData';

/**
 * Cover letter guidance for the 15 roles that previously had no
 * /cover-letter-examples/[role] page. Sample text uses [Company] placeholders and
 * illustrative figures the candidate must replace with their own real numbers.
 */
export const coverLetterDataMore: Record<string, CoverLetterData> = {
  'sales-executive': {
    dos: [
      'Open with a quota or target you hit — attainment percentage, deals closed, or revenue handled',
      'Name the sales motion from the JD (field sales, inside sales, B2B, FMCG distribution) and match it',
      'Mention your territory, account size or product category so the manager can place you instantly',
      'Close with a specific offer, such as sharing a 30-60-90 day plan for the territory',
    ],
    donts: [
      'Don\'t claim to be a "people person" without a number that proves it',
      'Don\'t inflate attainment — sales managers verify through references and previous employers',
      'Don\'t send a letter that never mentions the company\'s product or customers',
      'Don\'t ignore the target market: enterprise and retail selling need different proof',
    ],
    keyPoints: [
      'Lead with results versus target, not responsibilities',
      'Show you understand the buyer and the sales cycle length in this role',
      'Signal coachability and CRM discipline alongside closing ability',
    ],
    sampleOpening: 'Last year I closed 118% of my annual target at [Company], selling [product category] across [territory] — the kind of consistent attainment I would like to bring to [Target Company]\'s sales team.',
    sampleBody: 'In my current role I manage [number] active accounts, run a weekly pipeline review in the CRM, and built a referral loop with existing customers that contributed roughly a fifth of new bookings. I am comfortable with both cold prospecting and farming existing accounts, and I adjust my pitch between decision-makers and users. I noticed [Target Company] is expanding in [region or segment]; my experience opening similar accounts there would let me contribute from the first quarter.',
    sampleClosing: 'I would welcome a conversation about your territory goals and am happy to share a 30-60-90 day plan. Thank you for your time and consideration.',
    faqs: [
      { q: 'Do sales executives in India need a cover letter?', a: 'It is often optional for high-volume roles, but a short letter that cites target attainment and your territory helps you stand out from applicants who only upload a CV. Always send one when the job post asks for it.' },
      { q: 'What should a sales executive cover letter emphasise?', a: 'Measurable results against target, the type of customers you sell to, and your pipeline discipline. Keep it under 250 words and lead with the strongest number you can honestly stand behind.' },
    ],
  },
  'ios-developer': {
    dos: [
      'State your iOS stack up front: Swift, SwiftUI or UIKit, Combine, async/await, Core Data',
      'Link a live App Store app or TestFlight build you shipped and describe your part in it',
      'Mention release hygiene — crash-free rate, app size, startup time or review rating improvements',
      'Connect your experience to the company\'s app and what you would improve or extend',
    ],
    donts: [
      'Don\'t list every Apple framework you have touched — pick the three that match the JD',
      'Don\'t describe tutorials as production experience',
      'Don\'t skip the App Store link; it is the strongest proof you can offer',
      'Don\'t mention Android or cross-platform work unless the role asks for it',
    ],
    keyPoints: [
      'Show shipped apps, not just coding ability',
      'Demonstrate architecture awareness (MVVM, modularisation, testing)',
      'Reference a performance or stability improvement with a measurable outcome',
    ],
    sampleOpening: 'I shipped [App Name] to the App Store and grew it to [number] monthly users while keeping its crash-free sessions above 99.5% — experience I would like to apply to the iOS team at [Target Company].',
    sampleBody: 'At [Previous Company] I migrated a UIKit codebase to SwiftUI screen by screen, introduced MVVM with unit tests on the view models, and cut cold start time by moving heavy initialisation off the main thread. I am comfortable with REST and GraphQL integration, offline caching, push notifications and CI with Fastlane. I have followed [Target Company]\'s app closely and see room to improve [specific area], which I would enjoy tackling.',
    sampleClosing: 'I would be glad to walk you through my App Store releases and architecture decisions. Thank you for considering my application.',
    faqs: [
      { q: 'Should an iOS developer link App Store apps in a cover letter?', a: 'Yes. A live App Store link or TestFlight build is concrete proof of shipping ability, and reviewers can open it in seconds. Briefly say what you built and what you owned.' },
      { q: 'How long should an iOS developer cover letter be?', a: 'Three short paragraphs and under 250 words: your stack and best shipped app, one engineering achievement, and why this company\'s product interests you.' },
    ],
  },
  'full-stack-developer': {
    dos: [
      'Name both halves of your stack (for example React with Node.js and PostgreSQL) in the first two lines',
      'Describe one feature you took from database schema to deployed UI',
      'Mention deployment ownership: CI/CD, cloud platform, monitoring',
      'Tie your breadth to the company\'s stage — startups value range, larger teams value depth plus range',
    ],
    donts: [
      'Don\'t present yourself as an expert in everything; say where you are strongest',
      'Don\'t list a technology wall — keep to the stack in the job description',
      'Don\'t repeat your CV bullet by bullet',
      'Don\'t forget to mention testing and code review habits',
    ],
    keyPoints: [
      'Show end-to-end ownership of at least one product feature',
      'Quantify impact: load time, conversion, API latency or developer hours saved',
      'Explain how you decide between front-end and back-end trade-offs',
    ],
    sampleOpening: 'I recently built and shipped a booking platform end to end — React front end, Node.js and PostgreSQL back end, deployed on AWS — and I would like to bring that ownership mindset to [Target Company].',
    sampleBody: 'At [Previous Company] I designed the API, wrote the database migrations, built the checkout UI and set up the CI pipeline that ran tests before each deploy. After I added query indexes and response caching, the main dashboard loaded noticeably faster for users. I enjoy working across the stack, and I noticed [Target Company] is hiring engineers who can move quickly from idea to production, which matches how I work.',
    sampleClosing: 'I would welcome the chance to discuss how my end-to-end experience could help your team ship faster. Thank you for your time.',
    faqs: [
      { q: 'How should a full stack developer show breadth without looking unfocused?', a: 'Pick one primary stack that matches the job description, show one feature you owned across front end, back end and deployment, and mention other tools only briefly.' },
      { q: 'Is a cover letter worth sending for a full stack developer role?', a: 'Yes for startups and product companies, where a short, specific letter signals communication skill. For high-volume service-company hiring it is usually optional.' },
    ],
  },
  'machine-learning-engineer': {
    dos: [
      'Lead with a model that reached production and the business or product metric it moved',
      'Name the stack from the JD: PyTorch or TensorFlow, MLOps tooling, cloud platform, feature stores',
      'Separate research experiments from production deployments so reviewers see your real scope',
      'Mention evaluation rigour: offline metrics, A/B tests, monitoring for drift',
    ],
    donts: [
      'Don\'t quote accuracy alone — say what it was measured against and why it mattered',
      'Don\'t list Kaggle rankings as a substitute for production work',
      'Don\'t use buzzwords such as "cutting-edge AI" without a concrete example',
      'Don\'t overlook data pipelines and deployment; hiring managers look for them',
    ],
    keyPoints: [
      'Show the full loop: data, training, deployment, monitoring',
      'Tie model improvements to a product outcome rather than a leaderboard score',
      'Be honest about scale — dataset size, traffic, latency requirements',
    ],
    sampleOpening: 'I deployed a recommendation model at [Previous Company] that raised click-through on the home feed by a measurable margin, and I would like to bring the same production focus to the machine learning team at [Target Company].',
    sampleBody: 'I own the pipeline from feature engineering in Spark to training in PyTorch to serving behind a low-latency API, with monitoring for data drift and automated retraining triggers. I validated each release with offline metrics and an A/B test before full rollout. Your work on [specific product or problem] is exactly the kind of applied problem I want to solve.',
    sampleClosing: 'I would be glad to discuss the trade-offs behind my modelling and deployment choices. Thank you for your consideration.',
    faqs: [
      { q: 'What should a machine learning engineer highlight in a cover letter?', a: 'A model you took to production, the metric it moved, and the tooling you used to deploy and monitor it. Production impact outweighs research-only credentials for engineering roles.' },
      { q: 'Should I include academic papers in an ML engineer cover letter?', a: 'Mention one only if it directly supports the role. Industry ML engineer roles weigh shipped systems more heavily than publications.' },
    ],
  },
  'chartered-accountant': {
    dos: [
      'State your CA qualification, attempt status if relevant, and articleship firm in the opening',
      'Name your specialisation: audit, direct or indirect tax, GST compliance, corporate finance, FP&A',
      'Quantify scope — entities handled, audit size, tax savings, month-end close time reduced',
      'Mention tools such as Tally, SAP, Ind AS knowledge and Excel modelling',
    ],
    donts: [
      'Don\'t restate your exam history in detail; one line is enough',
      'Don\'t claim cost savings or tax outcomes you cannot back up in an interview',
      'Don\'t forget the company\'s industry — a manufacturing finance team and a startup want different emphasis',
      'Don\'t use generic phrases like "hard-working and detail oriented" with no evidence',
    ],
    keyPoints: [
      'Lead with your strongest technical area and one measurable outcome',
      'Show compliance reliability: deadlines met, clean audits, zero notices',
      'Express interest in advisory or business-partnering if the role is finance-leadership oriented',
    ],
    sampleOpening: 'As a Chartered Accountant with three years of statutory audit and GST compliance experience at [Previous Firm], I am applying for the finance role at [Target Company] to move closer to business decision-making.',
    sampleBody: 'I handled audits of [number] entities under Ind AS, coordinated GST reconciliations across multiple states and helped shorten our month-end close by standardising schedules in Excel and Tally. I enjoy translating figures into recommendations for management, and I have followed [Target Company]\'s recent expansion with interest.',
    sampleClosing: 'I would welcome an opportunity to discuss how my audit and compliance background can strengthen your finance function. Thank you for your time.',
    faqs: [
      { q: 'Do chartered accountants need a cover letter in India?', a: 'Big 4 and large firms often rely on campus and portal forms, but a short cover letter helps for direct industry roles, startups and lateral hires where you must explain why you are moving.' },
      { q: 'Should a newly qualified CA mention articleship in the cover letter?', a: 'Yes. Name the firm and the kind of work you handled — audit, tax or advisory — because it is your main practical experience.' },
    ],
  },
  'sap-consultant': {
    dos: [
      'Name your SAP module and version — FICO, MM, SD, PP, HCM, S/4HANA — in the first sentence',
      'Describe your role in implementations: blueprinting, configuration, UAT, cutover, hypercare',
      'Quantify project scope: number of users, plants, company codes or go-lives supported',
      'Mention certifications and integration or ABAP exposure relevant to the job',
    ],
    donts: [
      'Don\'t claim every module; consultants are hired for depth in one or two',
      'Don\'t describe end-user support as consulting experience',
      'Don\'t forget industry context such as manufacturing, retail or banking',
      'Don\'t omit whether your projects were implementation, rollout or support',
    ],
    keyPoints: [
      'Match module and S/4HANA versus ECC experience to the JD',
      'Show client-facing communication alongside configuration skill',
      'Highlight a go-live you contributed to and what you learned',
    ],
    sampleOpening: 'I am an SAP FICO consultant with experience across two full-cycle S/4HANA implementations, and I am applying for the consultant role at [Target Company] to deepen my work in finance transformation.',
    sampleBody: 'On my most recent project I ran requirement workshops with finance users, configured the general ledger, accounts payable and asset accounting, led user acceptance testing and supported cutover and hypercare for the go-live. I work comfortably with functional specs for ABAP developers and have trained key users. I would welcome the chance to contribute to your client engagements.',
    sampleClosing: 'I would be pleased to discuss how my module experience and implementation background fit your current projects. Thank you for your consideration.',
    faqs: [
      { q: 'What should an SAP consultant put in a cover letter?', a: 'Your primary module, whether you worked on implementation or support, the scale of the projects, and any certification. Be specific about the part of the lifecycle you owned.' },
      { q: 'Is S/4HANA experience important in an SAP cover letter?', a: 'Increasingly yes, because many Indian clients are migrating from ECC. If you have it, mention it early; if not, mention your ECC depth and willingness to upskill.' },
    ],
  },
  'react-developer': {
    dos: [
      'Mention React version-level skills: hooks, context, Suspense, Next.js or Vite, TypeScript',
      'Share a live URL or GitHub repo of a React project you built',
      'Quantify front-end impact such as bundle size reduction, Lighthouse scores or load time',
      'Show component design thinking: reusable libraries, accessibility, testing with Jest or RTL',
    ],
    donts: [
      'Don\'t list React alongside a long list of unrelated frameworks',
      'Don\'t describe only what the UI looked like — explain the engineering decisions',
      'Don\'t ignore accessibility and performance; reviewers notice',
      'Don\'t send a letter without a link to your work',
    ],
    keyPoints: [
      'Highlight one performance or state-management improvement with a measurable result',
      'Show collaboration with designers and back-end teams',
      'Reference the company\'s product UI and a specific thing you would improve',
    ],
    sampleOpening: 'I build production React and TypeScript interfaces, most recently a dashboard used by [number] customers whose load time I cut noticeably through code splitting and memoisation, and I would like to do the same at [Target Company].',
    sampleBody: 'At [Previous Company] I created a shared component library, introduced React Testing Library coverage for critical flows and worked with designers to bring accessibility checks into code review. I am comfortable with Next.js, REST and GraphQL data fetching and Git-based workflows. I admire the interface of [Target Company]\'s product and would enjoy contributing to it.',
    sampleClosing: 'My portfolio and GitHub are linked on my CV, and I would be glad to walk through any project. Thank you for your time.',
    faqs: [
      { q: 'What makes a React developer cover letter stand out?', a: 'A link to live work, one measurable front-end improvement and a clear description of the engineering decisions you made, not just the visual result.' },
      { q: 'Do I need to mention TypeScript in a React cover letter?', a: 'If the job description lists it, yes. TypeScript is now standard in most React hiring, so including it signals you are production ready.' },
    ],
  },
  'investment-banker': {
    dos: [
      'Open with a transaction, deal size range or sector coverage you worked on',
      'Cite modelling skills: DCF, LBO, comps, merger models, and the databases you use',
      'Be explicit about your role in the deal team — what you built versus what you supported',
      'Show why you want this specific bank, group and sector coverage',
    ],
    donts: [
      'Don\'t disclose confidential client information or non-public deal details',
      'Don\'t send a generic letter; banks screen for tailored motivation',
      'Don\'t exaggerate your role in a transaction',
      'Don\'t write more than one page',
    ],
    keyPoints: [
      'Lead with transaction or modelling experience and your analytical rigour',
      'Show stamina and attention to detail through specific work product',
      'Explain a coherent reason for the bank, product group and city',
    ],
    sampleOpening: 'Having supported a sell-side advisory process in the [sector] sector as an analyst at [Previous Firm], I am keen to join [Target Bank]\'s M&A team, where I can work on larger and more complex mandates.',
    sampleBody: 'I built the operating model, DCF and trading comparables for the process, prepared the information memorandum and coordinated diligence requests with the client. I am fast in Excel and PowerPoint and careful about checking every number before it goes out. [Target Bank]\'s recent work in [sector] and its reputation for training analysts closely are the reasons I am applying.',
    sampleClosing: 'I would welcome the opportunity to speak with the team and thank you for considering my application.',
    faqs: [
      { q: 'Do investment banking applications need a cover letter?', a: 'Most banks accept or expect one, especially for lateral and off-cycle hires. It should be one page, tailored to the bank and group.' },
      { q: 'Can I mention deal values in an investment banker cover letter?', a: 'Only if the deal is public and you are allowed to reference it. Otherwise describe it generically, such as a mid-market sell-side process in a named sector.' },
    ],
  },
  'scrum-master': {
    dos: [
      'Name your certifications (PSM, CSM, SAFe) and the team size and number of teams you served',
      'Quantify delivery improvements: velocity stability, cycle time, defect escape or predictability',
      'Describe how you coach, remove blockers and facilitate, not just run ceremonies',
      'Show experience with Jira or Azure DevOps and with distributed teams',
    ],
    donts: [
      'Don\'t describe the role as simply scheduling meetings',
      'Don\'t claim sprint success without saying what changed',
      'Don\'t overuse jargon; hiring managers want outcomes',
      'Don\'t ignore stakeholder communication and product owner partnership',
    ],
    keyPoints: [
      'Lead with a team outcome improved through your facilitation',
      'Show coaching ability and servant-leadership mindset',
      'Match the framework (Scrum, Kanban, SAFe) to the job description',
    ],
    sampleOpening: 'As a certified Scrum Master for two product teams of eight engineers each, I helped bring our sprint predictability up from roughly 60% to above 85%, and I would like to support delivery at [Target Company].',
    sampleBody: 'I facilitate planning, daily scrums, reviews and retrospectives, track flow metrics in Jira and coach the product owner on backlog refinement. In one retrospective cycle we found that unclear acceptance criteria drove rework, so we introduced a definition of ready that reduced carry-over stories. I work well with distributed teams and senior stakeholders.',
    sampleClosing: 'I would value a conversation about your team\'s delivery challenges. Thank you for your time and consideration.',
    faqs: [
      { q: 'What should a Scrum Master mention in a cover letter?', a: 'Certifications, team size, one measurable delivery improvement and examples of coaching or removing impediments. Outcomes matter more than ceremony names.' },
      { q: 'Should Scrum Masters mention tools like Jira in the cover letter?', a: 'Briefly, yes — name the tools from the job description, but spend most of the letter on results and facilitation approach.' },
    ],
  },
  'business-development-manager': {
    dos: [
      'Lead with revenue, partnerships or new markets you opened, with numbers',
      'Describe your sourcing method: outbound, inbound qualification, channel partners, events',
      'Show you can move deals from first call to contract with senior stakeholders',
      'Tie your sector knowledge to the company\'s growth plans',
    ],
    donts: [
      'Don\'t write only about relationship-building — show pipeline and revenue',
      'Don\'t claim partnerships you can\'t discuss in an interview',
      'Don\'t be vague about industry and deal size',
      'Don\'t forget to mention collaboration with product and marketing teams',
    ],
    keyPoints: [
      'Quantify new business: revenue, accounts, partnerships, pipeline value',
      'Demonstrate strategic thinking about market entry or segment growth',
      'Show both hunter and long-term account-development skills',
    ],
    sampleOpening: 'I opened [number] new enterprise accounts and built a channel partner network that contributed a meaningful share of new revenue at [Previous Company], and I would like to drive similar growth at [Target Company].',
    sampleBody: 'My approach combines targeted outbound research, tailored proposals and close coordination with product teams on pricing and delivery. I negotiate with CXO-level stakeholders and keep a disciplined CRM pipeline. I see [Target Company] expanding into [market], where my existing relationships and experience in [sector] can shorten the path to first deals.',
    sampleClosing: 'I would be happy to share a 90-day market-entry outline in an interview. Thank you for your consideration.',
    faqs: [
      { q: 'What is the best way to open a business development manager cover letter?', a: 'With a specific growth result — new revenue, accounts or partnerships you sourced — rather than a statement about being results-driven.' },
      { q: 'Should a BD manager include a plan in the cover letter?', a: 'A one-line offer to share a plan is effective. Put the detailed plan in the interview or a follow-up note rather than the letter itself.' },
    ],
  },
  'network-engineer': {
    dos: [
      'State certifications such as CCNA, CCNP or JNCIA and the vendors you work with',
      'Describe network scale: sites, devices, users and uptime targets',
      'Mention specific work such as routing, switching, firewalls, SD-WAN, VPN and monitoring',
      'Include an incident you resolved, with time to recover and what you changed afterwards',
    ],
    donts: [
      'Don\'t just list protocols; connect them to projects',
      'Don\'t claim hands-on experience with equipment you haven\'t configured',
      'Don\'t omit security awareness, which is part of most network roles now',
      'Don\'t ignore documentation and change-management practices',
    ],
    keyPoints: [
      'Show uptime and reliability outcomes',
      'Demonstrate troubleshooting method under pressure',
      'Match vendor stack (Cisco, Juniper, Fortinet, Palo Alto) to the job description',
    ],
    sampleOpening: 'As a CCNA-certified network engineer managing a multi-site enterprise network, I maintained high availability across [number] branch locations, and I am applying for the network engineer role at [Target Company].',
    sampleBody: 'I configure and monitor routers, switches and firewalls, manage VLANs and site-to-site VPNs, and use monitoring tools to catch faults before users notice them. After a core switch failure, I led the recovery, documented the root cause and introduced redundant links and change windows that prevented a repeat. I follow change-management practices and keep network diagrams current.',
    sampleClosing: 'I would be glad to discuss how my infrastructure experience can support your network operations. Thank you for your time.',
    faqs: [
      { q: 'Which certifications should a network engineer mention in a cover letter?', a: 'The ones in the job description, commonly CCNA, CCNP, JNCIA or vendor firewall certifications. Mention them in the first paragraph alongside your hands-on experience.' },
      { q: 'How can a fresher network engineer write a cover letter?', a: 'Highlight your certification, lab or home-network projects, internship exposure and a clear interest in the company\'s infrastructure. Be honest about what is lab versus production experience.' },
    ],
  },
  'logistics-manager': {
    dos: [
      'Open with cost, speed or service-level improvements you delivered in supply chain operations',
      'Mention volumes: shipments, warehouses, fleet size, lanes or SKUs managed',
      'Name systems such as WMS, TMS and ERP and carrier or 3PL relationships',
      'Show experience with compliance, safety and e-way bill or customs processes where relevant',
    ],
    donts: [
      'Don\'t describe the role as "coordinating shipments" without outcomes',
      'Don\'t overlook team management and vendor negotiation',
      'Don\'t make claims on cost savings without a basis',
      'Don\'t send the same letter to a warehousing role and a transport role',
    ],
    keyPoints: [
      'Quantify on-time delivery, cost per shipment or inventory accuracy',
      'Show vendor and 3PL negotiation capability',
      'Reflect understanding of Indian logistics realities such as multi-state compliance',
    ],
    sampleOpening: 'I improved on-time delivery to above 95% across [number] lanes while reducing freight cost per shipment at [Previous Company], and I would like to bring that operating discipline to [Target Company].',
    sampleBody: 'I manage a team of [number] across warehousing and transport, work with 3PL partners on rate negotiations and service levels, and use WMS and TMS dashboards to track exceptions daily. I introduced route consolidation and a weekly carrier scorecard that made performance conversations factual. I am familiar with e-way bill and GST documentation across states.',
    sampleClosing: 'I would welcome a discussion about how I can contribute to your supply chain goals. Thank you for your consideration.',
    faqs: [
      { q: 'What should a logistics manager emphasise in a cover letter?', a: 'Service levels, cost control, scale of operations and the systems and partners you manage. Use numbers wherever you can verify them.' },
      { q: 'Does a logistics manager cover letter need to mention compliance?', a: 'A short mention of e-way bill, GST, customs or safety compliance helps, especially for multi-state or import-export operations.' },
    ],
  },
  'interior-designer': {
    dos: [
      'Link a portfolio — it matters more than the letter itself',
      'Describe project types: residential, commercial, hospitality, turnkey, and their sizes',
      'Name software skills such as AutoCAD, SketchUp, 3ds Max, V-Ray, Revit and Photoshop',
      'Mention client handling, budget management and coordination with contractors',
    ],
    donts: [
      'Don\'t send a long letter with no portfolio link',
      'Don\'t describe your taste instead of your process',
      'Don\'t overlook execution: site supervision and vendor coordination matter',
      'Don\'t use the same letter for a design studio and a turnkey contractor',
    ],
    keyPoints: [
      'Lead with one project that shows your brief-to-handover process',
      'Show you can work within budget and timeline, not only concept',
      'Express alignment with the studio\'s style and typical project type',
    ],
    sampleOpening: 'I designed and delivered a 3 BHK residential interior from concept to handover within budget and timeline, and I admire how [Target Studio] balances warm materials with practical planning — the reason I am applying.',
    sampleBody: 'I prepare concept boards, 2D drawings in AutoCAD and 3D visualisations in SketchUp and V-Ray, create BOQs and coordinate carpenters, electricians and vendors on site. I keep clients informed with weekly updates and handle revisions without delaying the schedule. My portfolio link is on my CV and includes before-and-after photos of completed projects.',
    sampleClosing: 'I would be delighted to walk you through my portfolio and discuss how I can support your upcoming projects. Thank you for your time.',
    faqs: [
      { q: 'Do interior designers need a cover letter?', a: 'A short one with a portfolio link helps, especially for studios that receive many applications. The portfolio does the convincing; the letter explains why you want this studio.' },
      { q: 'What should an interior designer cover letter include?', a: 'Project types and sizes, software skills, execution or site experience and a link to your portfolio. Keep it under 250 words.' },
    ],
  },
  'pharmacist': {
    dos: [
      'State your qualification (D.Pharm, B.Pharm, M.Pharm, Pharm.D) and current registration status',
      'Specify the setting — retail, hospital, clinical, industry QA/QC or regulatory affairs',
      'Mention accuracy and safety practices: dispensing checks, drug interaction review, documentation',
      'Include relevant software such as pharmacy management or hospital information systems',
    ],
    donts: [
      'Don\'t overlook your state pharmacy council registration',
      'Don\'t make clinical claims beyond your scope of practice',
      'Don\'t use a retail-focused letter for an industry or regulatory role',
      'Don\'t forget patient counselling or communication skills where relevant',
    ],
    keyPoints: [
      'Highlight accuracy, compliance and patient safety',
      'Show scale: prescriptions, inventory lines or batches handled',
      'Match your focus to the employer type — hospital, chain, manufacturer or CRO',
    ],
    sampleOpening: 'As a registered B.Pharm pharmacist with experience in a high-volume hospital pharmacy, I am applying for the pharmacist position at [Target Organisation] to continue contributing to safe and accurate medication dispensing.',
    sampleBody: 'I verify prescriptions, check for drug interactions, manage inventory and expiry tracking, counsel patients on correct use and maintain records in line with regulatory requirements. During my time at [Previous Employer] I helped reduce expired stock by tightening reorder levels and monthly audits. I work well with doctors and nursing staff and keep up with new guidelines.',
    sampleClosing: 'I would be grateful for the opportunity to discuss how my experience fits your pharmacy team. Thank you for your consideration.',
    faqs: [
      { q: 'Should a pharmacist cover letter mention registration?', a: 'Yes. State your pharmacy council registration or eligibility clearly, since it is a basic requirement for dispensing roles.' },
      { q: 'How does an industry pharmacist cover letter differ from a retail one?', a: 'Industry letters stress GMP, documentation, quality systems and regulatory knowledge, while retail and hospital letters stress dispensing accuracy, counselling and inventory.' },
    ],
  },
  'embedded-systems-engineer': {
    dos: [
      'Name microcontrollers, architectures and RTOS you have worked with: ARM Cortex-M, STM32, ESP32, FreeRTOS',
      'Describe a shipped or demonstrable device and your part in firmware, hardware bring-up or testing',
      'Mention protocols (I2C, SPI, UART, CAN, BLE) and debugging tools such as JTAG and oscilloscopes',
      'Include constraints you worked within: memory, power, real-time deadlines',
    ],
    donts: [
      'Don\'t list languages without hardware context; embedded roles hire for system understanding',
      'Don\'t describe simulations as hardware experience',
      'Don\'t omit testing, code quality or standards such as MISRA C where relevant',
      'Don\'t ignore the target domain: automotive, IoT, medical or consumer devices',
    ],
    keyPoints: [
      'Show low-level debugging ability with a specific example',
      'Quantify optimisations: power consumption, memory footprint or latency',
      'Match the domain and tooling to the job description',
    ],
    sampleOpening: 'I developed firmware in C for an STM32-based sensor node running FreeRTOS, reducing its power consumption through duty-cycling, and I am applying for the embedded engineer role at [Target Company] to work on production devices.',
    sampleBody: 'My work covers peripheral drivers over I2C, SPI and UART, BLE communication, bootloader and OTA updates, and board bring-up using JTAG and logic analysers. I wrote unit tests for driver logic and followed MISRA C guidelines. I enjoy solving timing and memory issues and would like to apply that to [Target Company]\'s [automotive or IoT] products.',
    sampleClosing: 'I would be glad to discuss my firmware projects in more detail. Thank you for your time and consideration.',
    faqs: [
      { q: 'What should an embedded systems engineer put in a cover letter?', a: 'The microcontrollers and protocols you have worked with, one device you built or contributed to, and how you debug at the hardware-software boundary.' },
      { q: 'Can freshers apply for embedded roles with project work only?', a: 'Yes. Describe a hardware project, your exact contribution and the tools you used, and link a repository or demo video so reviewers can verify it.' },
    ],
  },
};
