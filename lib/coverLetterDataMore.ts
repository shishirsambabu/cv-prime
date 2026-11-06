import type { CoverLetterData } from '@/lib/coverLetterData';

/**
 * Cover letter guidance for the 15 roles that previously had no hand-written data.
 * Sample letters use [bracketed] placeholders for every figure and name so that no
 * invented statistic is presented as fact — the user fills in their own numbers.
 */
export const coverLetterDataMore: Record<string, CoverLetterData> = {
  'full-stack-developer': {
    dos: [
      'Name the stack from the job description (for example React, Node.js, PostgreSQL) in your first two lines',
      'Describe one feature you owned end to end — from database schema to UI — to prove full stack range',
      'Quantify the outcome: page load time, users served, release frequency or defects reduced',
      'Link a live project or GitHub repository as plain text',
      'Close with a specific ask, such as a technical discussion about the product architecture',
    ],
    donts: [
      'Don\'t list every framework you have touched — choose the 3–5 the posting asks for',
      'Avoid "jack of all trades" language; show depth in at least one layer',
      'Don\'t repeat your CV bullets word for word',
      'Never reuse a letter that names a different company or stack',
    ],
    keyPoints: [
      'One feature you built across frontend, backend and database',
      'How you handled deployment, testing or monitoring — not just coding',
      'Evidence you can work with designers, product managers and QA',
      'Why this company\'s product and stack interest you specifically',
    ],
    sampleOpening: 'I recently built and shipped [feature] end to end at [Company] — React frontend, Node.js API and PostgreSQL schema — which [measurable result]. That range across the stack is why the Full Stack Developer role at [Target Company] stood out to me.',
    sampleBody: 'At [Company], I own features from design discussion to production release. On my last project I designed the data model, built the REST endpoints in [framework], implemented the UI in [frontend framework], and added automated tests and a CI/CD pipeline that [result]. I am comfortable moving between layers when a bug or performance issue crosses them, and I document decisions so teammates can extend the work.',
    sampleClosing: 'I would welcome the chance to discuss how my experience shipping complete features could help [Target Company] move faster on [product area]. Thank you for your time and consideration.',
    faqs: [
      { q: 'Should a full stack developer write a cover letter?', a: 'It is optional for most service companies but valuable for product companies and startups, where hiring managers read it to judge communication and ownership. Keep it under 300 words and anchor it on one feature you built end to end.' },
      { q: 'Should I mention both frontend and backend skills?', a: 'Yes, but prove them with a single concrete project rather than a list. Name the technologies from the job description and show how they fit together in work you actually shipped.' },
    ],
  },
  'react-developer': {
    dos: [
      'Mention React plus the related tools in the posting (TypeScript, Redux, Next.js) in the opening',
      'Cite a UI performance or UX result: load time, Lighthouse score, conversion or bounce rate',
      'Describe how you structure components, state and tests',
      'Share a portfolio or GitHub link as plain text',
    ],
    donts: [
      'Don\'t just say "passionate about frontend" — show a shipped interface',
      'Avoid listing every JavaScript library you have installed once',
      'Don\'t ignore accessibility and responsive design if the posting mentions them',
      'Never send a letter that doesn\'t mention the company\'s product',
    ],
    keyPoints: [
      'A React application you built or significantly improved, and its measurable result',
      'Your approach to state management, testing and performance',
      'Collaboration with designers and backend developers',
      'Familiarity with the company\'s product or design quality',
    ],
    sampleOpening: 'Rebuilding [product area] in React and TypeScript at [Company] helped us [measurable result], and it is the kind of interface work I would like to do for [Target Company]\'s users.',
    sampleBody: 'I build component-driven interfaces with React, manage state with [Redux Toolkit/Zustand/Context], and cover critical flows with Jest and React Testing Library. Recently I [performance or accessibility improvement], working closely with designers to keep the implementation faithful to the design system. I care about maintainable code, so I review pull requests carefully and document reusable components.',
    sampleClosing: 'I would be glad to walk you through my work and discuss how I can contribute to [Target Company]\'s frontend team. Thank you for considering my application.',
    faqs: [
      { q: 'What should a React developer cover letter include?', a: 'One concrete project with a measurable outcome, the specific tools from the job description, and a link to your portfolio or GitHub. Keep it to three short paragraphs.' },
      { q: 'Is a cover letter needed for frontend roles?', a: 'Not always, but a short, specific letter helps when you are changing companies, applying for a more senior role, or have a project that closely matches the product.' },
    ],
  },
  'ios-developer': {
    dos: [
      'Name Swift, SwiftUI or UIKit and the iOS versions you target in your opening',
      'Mention an app you shipped to the App Store with its rating, downloads or active users if you have them',
      'Describe architecture choices such as MVVM and how you test',
      'Link the App Store listing or repository as plain text',
    ],
    donts: [
      'Don\'t claim App Store success you cannot document',
      'Avoid generic "mobile developer" language — be specific about iOS',
      'Don\'t omit release, crash or performance work if you have done it',
      'Never forget to tailor to the company\'s app',
    ],
    keyPoints: [
      'A shipped iOS app and your exact role in it',
      'Architecture, testing and release process knowledge',
      'Performance, crash-rate or accessibility improvements you drove',
      'Awareness of the company\'s app and what you would improve or extend',
    ],
    sampleOpening: 'As the iOS developer behind [App name] at [Company], I took the app from [start state] to [result], and I would like to bring that ownership to [Target Company]\'s iOS team.',
    sampleBody: 'I build in Swift using [SwiftUI/UIKit] with an MVVM architecture, write unit and UI tests with XCTest, and handle App Store releases through TestFlight. On [App name] I [specific improvement such as reducing crash rate or launch time], and I collaborated with backend and design teams to ship [feature]. I stay current with new iOS releases and adopt them where they benefit users.',
    sampleClosing: 'I would welcome the chance to show you my work and discuss how I can help [Target Company] deliver a better iOS experience. Thank you for your time.',
    faqs: [
      { q: 'Should I include App Store links in an iOS developer cover letter?', a: 'Yes. A live listing is the strongest proof of shipped work. Include it as plain text so it survives ATS parsing and the reviewer can open it.' },
      { q: 'How do I show iOS skills without professional experience?', a: 'Describe a personal or open-source app in detail — architecture, testing, and what you learned — and link the repository. Honest, well-documented projects carry weight.' },
    ],
  },
  'machine-learning-engineer': {
    dos: [
      'Open with a model or ML system you took into production and the business metric it moved',
      'Name your toolchain: Python, PyTorch or TensorFlow, and MLOps tooling',
      'Explain how you evaluate models and monitor drift after deployment',
      'Be precise about data scale and your own contribution versus the team\'s',
    ],
    donts: [
      'Don\'t describe notebook experiments as production systems',
      'Avoid buzzwords without a project to back them up',
      'Don\'t quote accuracy without saying how it was measured',
      'Never overstate research or publication experience',
    ],
    keyPoints: [
      'One model deployed to production and the outcome it produced',
      'Your end-to-end ownership: data, training, serving, monitoring',
      'Evaluation and experiment tracking discipline',
      'Fit with the company\'s ML problem domain',
    ],
    sampleOpening: 'I built and deployed a [type of model] at [Company] that [business outcome], and I am applying for the Machine Learning Engineer role at [Target Company] to solve similar problems at greater scale.',
    sampleBody: 'My work spans the full ML lifecycle: preparing [data scale] of training data, training and tuning models in [PyTorch/TensorFlow/scikit-learn], serving them through [serving stack], and monitoring performance and drift in production. I track experiments with [tool] and evaluate with [metrics] that map to business outcomes, not just offline accuracy.',
    sampleClosing: 'I would value the opportunity to discuss the ML problems your team is tackling and how my production experience could help. Thank you for your consideration.',
    faqs: [
      { q: 'What makes a machine learning engineer cover letter strong?', a: 'A production deployment with a measurable business result, a clear description of your role, and precise language about evaluation. Hiring managers distrust vague claims of "AI expertise".' },
      { q: 'Should freshers apply with a cover letter for ML roles?', a: 'Yes, if you can describe a project with data, methodology, evaluation and a repository link. Be honest that it is a project, and focus on what you learned and measured.' },
    ],
  },
  'network-engineer': {
    dos: [
      'Lead with the network scale you managed: sites, devices or users supported',
      'Name vendors and certifications from the posting, such as Cisco CCNA/CCNP or Juniper',
      'Quantify uptime, incident response or migration results',
      'Mention security, monitoring and documentation practices',
    ],
    donts: [
      'Don\'t list certifications you do not hold',
      'Avoid vague phrases like "good networking knowledge"',
      'Don\'t omit on-call or incident experience if relevant',
      'Never ignore the vendor stack in the job description',
    ],
    keyPoints: [
      'Size and complexity of the network you supported',
      'A project such as a migration, upgrade or redesign, and its result',
      'Troubleshooting approach and uptime record',
      'Relevant certifications and tools',
    ],
    sampleOpening: 'I currently support a network of [number] sites and [number] users at [Company], maintaining [uptime figure] availability, and I am applying to bring that reliability to [Target Company].',
    sampleBody: 'My responsibilities include configuring and troubleshooting [routers, switches, firewalls], managing VLANs, routing protocols such as OSPF and BGP, and VPN connectivity. I recently led [project] which [outcome]. I document changes, monitor with [tool], and follow change-control procedures to minimise downtime.',
    sampleClosing: 'I would appreciate the chance to discuss how my experience can support [Target Company]\'s infrastructure. Thank you for your time and consideration.',
    faqs: [
      { q: 'Do network engineers need a cover letter?', a: 'It is often optional, but a short letter helps when you want to highlight certifications, scale and a notable project that a CV bullet cannot fully explain.' },
      { q: 'Which certifications should I mention?', a: 'Only those you hold or are actively pursuing, stated honestly. Match the vendor certifications named in the job description, such as CCNA or CCNP.' },
    ],
  },
  'embedded-systems-engineer': {
    dos: [
      'Name the microcontrollers, RTOS and protocols you have worked with',
      'Describe a product or board you brought up, debugged or shipped',
      'Mention tools: oscilloscope, logic analyser, JTAG, and your toolchain',
      'Quantify results such as memory footprint, power consumption or boot time',
    ],
    donts: [
      'Don\'t list every chip family you have seen once',
      'Avoid claims about hardware you did not work on directly',
      'Don\'t skip testing and validation experience',
      'Never send a letter that ignores the target product domain',
    ],
    keyPoints: [
      'A concrete firmware project from design to validation',
      'Hardware-software debugging skill',
      'Knowledge of relevant standards or protocols (I2C, SPI, CAN, UART)',
      'Domain fit: automotive, IoT, medical or industrial',
    ],
    sampleOpening: 'I developed firmware in C for [microcontroller] at [Company], achieving [measurable result such as reduced power use], and I am excited to bring that hands-on experience to [Target Company]\'s embedded team.',
    sampleBody: 'I work across the stack from drivers to application logic, using [RTOS] and communication protocols including [I2C/SPI/CAN/UART]. I debug using [oscilloscope, logic analyser, JTAG] and validate against test plans before release. On [project], I [specific contribution and result].',
    sampleClosing: 'I would welcome the opportunity to discuss how my firmware experience can support [Target Company]\'s products. Thank you for your time.',
    faqs: [
      { q: 'What should an embedded engineer highlight in a cover letter?', a: 'A concrete firmware or hardware bring-up project, the microcontroller and protocol stack, and a measurable result such as power, memory or timing improvements.' },
      { q: 'Can a fresher write a good embedded cover letter?', a: 'Yes. Describe an academic or hobby project with the board, language, peripherals and what you debugged. Link the repository as plain text.' },
    ],
  },
  'sap-consultant': {
    dos: [
      'State your SAP module (FICO, MM, SD, ABAP, Basis) and version experience up front',
      'Describe an implementation, rollout or support engagement and your role in it',
      'Mention full-cycle implementations, blueprinting, UAT and go-live support',
      'Highlight S/4HANA experience if the posting asks for it',
    ],
    donts: [
      'Don\'t claim modules you have not configured',
      'Avoid listing every SAP acronym without context',
      'Don\'t omit client or industry context',
      'Never ignore the stated module and version',
    ],
    keyPoints: [
      'Your module, version and number of implementations or support cycles',
      'Client-facing skills: workshops, requirements, training',
      'A problem you solved and its business impact',
      'Certifications you actually hold',
    ],
    sampleOpening: 'With [number] years configuring SAP [module] across [number] implementations, including a full-cycle S/4HANA rollout for [industry] client [Client], I am applying for the SAP Consultant role at [Target Company].',
    sampleBody: 'I run requirement workshops, prepare functional specifications, configure [module], coordinate testing and support go-live. On [project] I [specific contribution], helping the client [outcome]. I train end users and document processes so support teams can resolve issues quickly.',
    sampleClosing: 'I would appreciate the opportunity to discuss how my SAP experience can support your client engagements. Thank you for your consideration.',
    faqs: [
      { q: 'Is a cover letter useful for SAP consultant roles?', a: 'It can be, especially with consultancies and direct employers who want to understand your module depth and client-facing experience beyond the CV.' },
      { q: 'Should I list SAP certifications in the letter?', a: 'Mention only certifications you hold, and tie them to a real project so they carry weight.' },
    ],
  },
  'scrum-master': {
    dos: [
      'Mention team size, delivery cadence and the product or domain you served',
      'Describe a team improvement you facilitated and its effect on delivery or predictability',
      'Name frameworks and tools: Scrum, Kanban, Jira, and scaling approaches if relevant',
      'Cite certifications you hold, such as CSM or PSM',
    ],
    donts: [
      'Don\'t describe the role only as running meetings',
      'Avoid jargon without outcomes',
      'Don\'t claim credit for team results without your contribution',
      'Never ignore how you handled impediments and stakeholders',
    ],
    keyPoints: [
      'Teams you coached and the improvement you facilitated',
      'Metrics you use: velocity, cycle time, predictability',
      'Stakeholder and conflict-handling examples',
      'Servant-leadership mindset shown through a concrete story',
    ],
    sampleOpening: 'As Scrum Master for [number] teams at [Company], I helped improve [metric such as release predictability] by [action], and I would like to bring that coaching approach to [Target Company].',
    sampleBody: 'I facilitate planning, reviews and retrospectives, remove impediments and coach product owners on backlog quality. When [challenge] slowed delivery, I [action], which led to [outcome]. I use Jira dashboards and flow metrics to make progress visible and keep conversations focused on improvement rather than blame.',
    sampleClosing: 'I would welcome a conversation about your teams and delivery goals. Thank you for your time and consideration.',
    faqs: [
      { q: 'How do I show impact as a Scrum Master?', a: 'Use team-level outcomes tied to something you changed: more predictable releases, shorter cycle time, fewer carry-over stories. State your role honestly as facilitator and coach.' },
      { q: 'Do Scrum Master roles require certification?', a: 'Many postings list CSM or PSM as preferred. Mention it if you hold it, but lead with outcomes you have facilitated.' },
    ],
  },
  'business-development-manager': {
    dos: [
      'Open with a revenue, pipeline or partnership result',
      'Describe your sales cycle experience: lead generation, pitching, negotiation and closing',
      'Name the industry and customer segment you have sold to',
      'Show you researched the target company\'s market and growth opportunities',
    ],
    donts: [
      'Don\'t make claims without numbers or context',
      'Avoid generic "target-driven" language',
      'Don\'t criticise former employers or competitors',
      'Never forget to mention how you build long-term client relationships',
    ],
    keyPoints: [
      'Revenue or pipeline growth you generated',
      'Deal size, sales cycle length and segment',
      'A partnership or account you opened from scratch',
      'Understanding of the target company\'s market',
    ],
    sampleOpening: 'In my last role at [Company] I grew the [segment] pipeline by [percentage] and closed [number] accounts worth [value], and I would like to do the same for [Target Company] as Business Development Manager.',
    sampleBody: 'I source opportunities through outbound outreach, referrals and events, qualify them against clear criteria, and guide stakeholders from first conversation to signed contract. For [Client/segment], I [specific action], resulting in [outcome]. I keep CRM data accurate so forecasts are reliable.',
    sampleClosing: 'I would welcome the chance to discuss how I could open new revenue channels for [Target Company]. Thank you for your time.',
    faqs: [
      { q: 'What numbers should a business development cover letter include?', a: 'Revenue or pipeline growth, number and size of deals closed, and sales cycle length — whatever you can verify. Use honest figures and name the segment you sold into.' },
      { q: 'Is a cover letter expected in sales roles?', a: 'Often yes for BD roles, because it demonstrates your pitching and communication skills before an interview.' },
    ],
  },
  'sales-executive': {
    dos: [
      'Lead with a sales target you met or exceeded',
      'Mention the product, customer type and territory you handled',
      'Describe your prospecting and follow-up routine',
      'Show enthusiasm for the target company\'s product',
    ],
    donts: [
      'Don\'t claim numbers you can\'t support',
      'Avoid clichés like "excellent communication skills" without proof',
      'Don\'t send one letter to every employer',
      'Never leave out the CRM or tools you have used',
    ],
    keyPoints: [
      'Targets versus achievement',
      'Number of calls, meetings or accounts handled',
      'A difficult deal you won and how',
      'Motivation for this product and company',
    ],
    sampleOpening: 'I exceeded my quarterly target by [percentage] at [Company] selling [product] to [customer type], and I am eager to bring that drive to [Target Company]\'s sales team.',
    sampleBody: 'Each week I [prospecting activity], hold [number] customer meetings and follow up consistently using [CRM]. When a prospect hesitated over [objection], I [action], which closed the deal. I treat customer feedback as a product and process input.',
    sampleClosing: 'I would be grateful for the opportunity to discuss how I can contribute to your sales targets. Thank you for your consideration.',
    faqs: [
      { q: 'Should freshers apply for sales roles with a cover letter?', a: 'Yes. Use campus, internship or part-time experience to show persuasion, persistence and communication, and state your motivation clearly.' },
      { q: 'How long should a sales executive cover letter be?', a: 'Three short paragraphs and under 250 words. Sales hiring managers value brevity and results.' },
    ],
  },
  'logistics-manager': {
    dos: [
      'Lead with scale: shipments, warehouses, fleet size or lanes managed',
      'Quantify cost savings, on-time delivery or inventory accuracy improvements',
      'Name systems you use: WMS, TMS, ERP',
      'Mention vendor negotiation and compliance experience',
    ],
    donts: [
      'Don\'t describe duties without outcomes',
      'Avoid unverified savings claims',
      'Don\'t overlook safety and compliance',
      'Never ignore the target company\'s supply chain model',
    ],
    keyPoints: [
      'Operational scale and team size',
      'A cost or service-level improvement you led',
      'Technology and process tools you used',
      'Vendor and stakeholder management',
    ],
    sampleOpening: 'Managing logistics for [scale] at [Company], I improved on-time delivery to [figure] while reducing freight cost by [percentage], and I would like to bring that discipline to [Target Company].',
    sampleBody: 'I plan routes and capacity, negotiate with carriers, monitor KPIs in [WMS/TMS/ERP] and lead a team of [number]. On [project] I [action], delivering [outcome]. I focus on visibility and root-cause analysis so issues are fixed rather than repeated.',
    sampleClosing: 'I would appreciate the chance to discuss how I can strengthen [Target Company]\'s supply chain performance. Thank you for your time.',
    faqs: [
      { q: 'What KPIs belong in a logistics manager cover letter?', a: 'On-time delivery, freight cost per unit, inventory accuracy and order cycle time are common. Include only those you actually tracked and can explain.' },
      { q: 'Do I need to mention software tools?', a: 'Yes. Naming WMS, TMS or ERP systems helps hiring managers judge fit quickly and also supports ATS keyword matching.' },
    ],
  },
  'interior-designer': {
    dos: [
      'Link your portfolio first and refer to specific projects',
      'Describe the project type: residential, commercial or hospitality',
      'Mention software: AutoCAD, SketchUp, 3ds Max, Revit',
      'Explain how you handle budgets, vendors and client briefs',
    ],
    donts: [
      'Don\'t describe your taste instead of your process',
      'Avoid sending a letter without a portfolio link',
      'Don\'t claim credit for team projects without clarifying your role',
      'Never forget timelines and budget in your examples',
    ],
    keyPoints: [
      'A signature project with scope, budget range and outcome',
      'Design process from brief to handover',
      'Software and site-coordination skills',
      'Alignment with the studio\'s style',
    ],
    sampleOpening: 'My [project type] design for [Client/Project], delivered within [budget/time], reflects the approach I would bring to [Target Company]\'s studio — detail-oriented, client-focused and practical on site.',
    sampleBody: 'I translate client briefs into concept boards, 3D visuals and detailed drawings using [software], then coordinate vendors and contractors to execute. On [project] I [specific contribution], and the client [outcome]. My portfolio at [link] shows the range of my work.',
    sampleClosing: 'I would love to discuss how my design process could contribute to your upcoming projects. Thank you for your time and consideration.',
    faqs: [
      { q: 'Should an interior designer attach a portfolio to the cover letter?', a: 'Yes — link it as plain text near the top. The portfolio is the main evidence; the letter explains your process and fit.' },
      { q: 'How do I show process rather than just visuals?', a: 'Describe one project from brief through concept, execution and handover, including constraints such as budget and timeline.' },
    ],
  },
  'investment-banker': {
    dos: [
      'Mention specific deals, sectors and your role in the transaction process',
      'Show technical skills: valuation, financial modelling, pitch books',
      'Explain why this bank and this group specifically',
      'Keep it concise, precise and error-free',
    ],
    donts: [
      'Don\'t disclose confidential client information',
      'Avoid exaggerating your role in deals',
      'Never send a letter with a wrong bank name',
      'Don\'t use vague "passion for finance" statements',
    ],
    keyPoints: [
      'Deal or internship experience with your exact contribution',
      'Modelling and valuation skills',
      'Sector knowledge and a market view',
      'Specific reasons for the bank and team',
    ],
    sampleOpening: 'Having supported [number] [M&A/ECM/DCM] transactions in the [sector] sector at [Company], I am writing to apply for the Investment Banking [role] position at [Target Company].',
    sampleBody: 'My responsibilities included building DCF and comparable-company models, preparing pitch materials and conducting due diligence support. On [public or anonymised deal], I [specific contribution]. I am drawn to [Target Company]\'s leadership in [sector/product] and recent work on [public deal or initiative].',
    sampleClosing: 'I would welcome the chance to discuss how I can contribute to your team. Thank you for your time and consideration.',
    faqs: [
      { q: 'How should I reference deals without breaching confidentiality?', a: 'Use publicly announced transactions or describe them anonymously by sector and size band. Never share non-public client details.' },
      { q: 'How long should an investment banking cover letter be?', a: 'One page, three or four tight paragraphs, with no errors. Banks scrutinise attention to detail.' },
    ],
  },
  'chartered-accountant': {
    dos: [
      'State your CA qualification, attempt status and articleship or industry background',
      'Name areas of expertise: audit, taxation, GST, IFRS/Ind AS, financial reporting',
      'Quantify work: audits completed, compliance filings, cost savings',
      'Show familiarity with accounting software such as Tally, SAP or Zoho Books',
    ],
    donts: [
      'Don\'t overstate your qualification status',
      'Avoid listing every standard without context',
      'Don\'t omit regulatory and compliance experience',
      'Never overlook confidentiality and ethics',
    ],
    keyPoints: [
      'Qualification and relevant experience',
      'Specific audit, tax or reporting engagements',
      'Process improvements you introduced',
      'Fit with the firm\'s clients or industry',
    ],
    sampleOpening: 'As a qualified Chartered Accountant with [number] years of experience in [audit/tax/finance], including [specific engagement], I am applying for the [role] position at [Target Company].',
    sampleBody: 'I have handled statutory and internal audits, GST and income-tax compliance, and financial reporting under Ind AS for clients in [industry]. On [engagement] I [specific contribution and result]. I use [Tally/SAP/Excel] to keep records accurate and improve close timelines.',
    sampleClosing: 'I would appreciate the opportunity to discuss how my expertise can support [Target Company]. Thank you for your consideration.',
    faqs: [
      { q: 'Should a newly qualified CA write a cover letter?', a: 'Yes. Highlight articleship learning, industries covered and any technical strengths, and be clear about your qualification date.' },
      { q: 'What should a CA emphasise for industry versus practice roles?', a: 'For practice, highlight audit and compliance breadth; for industry, highlight business partnering, reporting and process improvements.' },
    ],
  },
  'pharmacist': {
    dos: [
      'State your licence and registration status',
      'Describe your setting: retail, hospital, clinical or pharma industry',
      'Mention dispensing accuracy, counselling and inventory responsibilities',
      'Highlight compliance with regulations and patient-safety practices',
    ],
    donts: [
      'Don\'t claim certifications you don\'t hold',
      'Avoid vague patient-care statements without examples',
      'Don\'t overlook documentation and compliance',
      'Never share patient information',
    ],
    keyPoints: [
      'Registration and qualifications',
      'Type of pharmacy or clinical environment',
      'Safety, accuracy and counselling examples',
      'Inventory and regulatory experience',
    ],
    sampleOpening: 'As a registered pharmacist with [number] years of experience in [setting], I am applying for the Pharmacist position at [Target Company] to bring accurate dispensing and attentive patient counselling to your team.',
    sampleBody: 'In my role at [Pharmacy/Hospital], I dispense prescriptions, counsel patients on medication use, manage inventory and ensure compliance with applicable regulations. I [specific example such as flagging an interaction or improving stock control], contributing to [outcome].',
    sampleClosing: 'I would be glad to discuss how I can contribute to your pharmacy team. Thank you for your time and consideration.',
    faqs: [
      { q: 'What should a pharmacist include in a cover letter?', a: 'Registration details, your practice setting, and one or two examples of patient safety, counselling or compliance work, without any patient-identifying information.' },
      { q: 'Does a fresher pharmacist need a cover letter?', a: 'A short letter helps. Mention internships, clinical rotations and your registration status, and explain why you want the role.' },
    ],
  },
};
