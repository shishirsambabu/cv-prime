import type { CoverLetterData } from '@/lib/coverLetterData';

function common(extra: string[]): string[] {
  return [
    'Address the letter to a named hiring manager when the posting or LinkedIn gives one',
    'Keep it to 3 short paragraphs and under 300 words',
    ...extra,
  ];
}

export const coverLetterDataMore: Record<string, CoverLetterData> = {
  'full-stack-developer': {
    dos: common([
      'Name the frontend and backend stack from the job description in the first paragraph',
      'Describe one feature you shipped end to end, from UI to database',
      'Link a live project or GitHub repository the reader can open',
    ]),
    donts: [
      'Don\'t just write "MERN stack" — name each technology you used',
      'Don\'t repeat your CV line by line',
      'Avoid claiming expertise in every layer; be clear where you are strongest',
      'Don\'t send a letter that names a different company or role',
    ],
    keyPoints: [
      'One feature you owned across frontend, API and database',
      'How you handled deployment, testing or performance',
      'The scale of the app: users, requests or data volume, if you know it',
      'Why this product or team interests you',
    ],
    sampleOpening: 'I recently built and deployed an order-management app end to end — a React frontend, a Node.js API and a PostgreSQL database — and that full-ownership mindset is what I want to bring to the Full Stack Developer role at [Target Company].',
    sampleBody: 'At [Company], I built features across the whole stack: React and TypeScript interfaces, REST endpoints in Node.js and Express, and schema design in PostgreSQL. I set up a CI/CD pipeline with automated tests so releases no longer needed manual checks, and I worked with designers and product managers to ship in short iterations. My project repository and live demo are linked in my CV.',
    sampleClosing: 'I would welcome the chance to discuss how my end-to-end approach could help [Target Company] ship faster. Thank you for your time and consideration.',
    faqs: [
      { q: 'Should a full stack developer mention both frontend and backend in a cover letter?', a: 'Yes. Name the main technologies on each side that the job description lists, then give one example where you worked across both. This shows the range the role asks for without turning the letter into a skills list.' },
      { q: 'Is a cover letter needed for a full stack developer role in India?', a: 'It is usually optional, but a short, specific letter helps at startups and product companies where a hiring manager reads applications personally. For high-volume service-company hiring it is rarely read, so spend your effort on your CV.' },
    ],
  },
  'react-developer': {
    dos: common([
      'Mention the React ecosystem tools in the posting: TypeScript, Redux, Next.js, testing libraries',
      'Describe one interface you built and what improved for users',
      'Show awareness of performance and accessibility',
    ]),
    donts: [
      'Don\'t describe React in general terms — hiring managers already know it',
      'Avoid listing every library you have installed once',
      'Don\'t skip a portfolio or GitHub link',
      'Don\'t make claims about performance without saying what you measured',
    ],
    keyPoints: [
      'A component, feature or app you built, and who used it',
      'How you handled state management and data fetching',
      'Any measured improvement in load time or usability',
      'Your testing habits: Jest, React Testing Library or similar',
    ],
    sampleOpening: 'I build React interfaces that are fast and easy to maintain, and the Frontend/React Developer opening at [Target Company] matches the kind of product work I most enjoy.',
    sampleBody: 'At [Company], I built a dashboard in React and TypeScript with reusable components, code-splitting and a shared design system used by several teams. I wrote tests with Jest and React Testing Library and worked with the backend team on API contracts. I also paid attention to accessibility and Core Web Vitals, using Lighthouse to find and fix slow screens.',
    sampleClosing: 'I would be glad to walk you through my work and discuss how I can contribute to [Target Company]\'s frontend. Thank you for considering my application.',
    faqs: [
      { q: 'What should a React developer put in a cover letter?', a: 'One concrete project, the tools you used with it (TypeScript, state management, testing), and a link to a live demo or repository. Keep the focus on what users or teammates gained, not on a list of libraries.' },
      { q: 'Should a fresher React developer write a cover letter?', a: 'Yes, if the application allows it. Freshers can use a cover letter to point to one or two strong projects and show they understand the company\'s product, which a CV alone cannot do.' },
    ],
  },
  'ios-developer': {
    dos: common([
      'Name Swift, SwiftUI or UIKit and the iOS versions you target',
      'Link an App Store listing or TestFlight build if you have one',
      'Mention App Store review, release and crash-monitoring experience',
    ]),
    donts: [
      'Don\'t say "mobile developer" when you mean iOS specifically',
      'Avoid listing frameworks you have not shipped with',
      'Don\'t claim app downloads or ratings you cannot show',
      'Don\'t ignore the product itself — say why you like the app you are applying to',
    ],
    keyPoints: [
      'An app or feature you shipped and its App Store status',
      'Your architecture approach: MVVM, Combine, async/await',
      'How you handled testing, performance or crash reports',
      'Collaboration with designers and backend teams',
    ],
    sampleOpening: 'I am an iOS developer who builds in Swift and SwiftUI, and I would like to bring that experience to the iOS Developer role at [Target Company].',
    sampleBody: 'At [Company], I built and maintained an iOS app using Swift, SwiftUI and MVVM, with networking through async/await and local storage in Core Data. I handled releases through TestFlight and the App Store, fixed crashes found through crash reports, and wrote unit tests for the view models. My App Store link is in my CV.',
    sampleClosing: 'I would welcome the opportunity to discuss how I can help [Target Company] build a great iOS experience. Thank you for your time.',
    faqs: [
      { q: 'Should an iOS developer link their App Store apps in a cover letter?', a: 'Yes. A live app is the strongest proof of your work. If your apps are not public, link a TestFlight build, a demo video or a GitHub repository instead.' },
      { q: 'How long should an iOS developer cover letter be?', a: 'Three short paragraphs. State your Swift experience, give one shipped example and close with interest in the company\'s product.' },
    ],
  },
  'machine-learning-engineer': {
    dos: common([
      'Describe one model you took from experiment to production',
      'Name your tools: Python, PyTorch or TensorFlow, MLOps stack',
      'State the evaluation metric and what it meant for the business',
    ]),
    donts: [
      'Don\'t describe only notebook experiments — hiring managers look for production work',
      'Avoid quoting accuracy without saying what it was measured on',
      'Don\'t list every algorithm you have studied',
      'Don\'t overstate research experience if your work is applied',
    ],
    keyPoints: [
      'The problem, the model and the metric you improved',
      'How the model was deployed and monitored',
      'Data scale and quality challenges you handled',
      'Collaboration with data engineers and product teams',
    ],
    sampleOpening: 'I focus on getting machine learning models into production and keeping them reliable, which is why the Machine Learning Engineer role at [Target Company] stands out to me.',
    sampleBody: 'At [Company], I built a model in PyTorch, validated it against a held-out set and deployed it as a service with monitoring for data drift. I worked with data engineers on feature pipelines and with product managers to define the metric that mattered to the business. I documented experiments so the team could reproduce and compare results.',
    sampleClosing: 'I would be glad to discuss how my experience in deploying models can support [Target Company]\'s goals. Thank you for your consideration.',
    faqs: [
      { q: 'What makes a strong machine learning engineer cover letter?', a: 'Evidence of production work: a model you deployed, how you monitored it and the metric it moved. Hiring managers for ML engineering roles care about reliability and evaluation, not only model choice.' },
      { q: 'Should I include research papers in the cover letter?', a: 'Mention them briefly if they relate to the role, and link them. For applied roles, put the emphasis on shipped systems rather than publications.' },
    ],
  },
  'embedded-systems-engineer': {
    dos: common([
      'Name the microcontrollers, RTOS and protocols you have used: ARM Cortex-M, FreeRTOS, I2C, SPI, CAN',
      'Describe one product or prototype you took through bring-up and debugging',
      'Mention the tools you debug with: oscilloscope, logic analyser, JTAG',
    ]),
    donts: [
      'Don\'t list hardware you have only read about',
      'Avoid vague phrases like "good with electronics"',
      'Don\'t skip the domain: automotive, IoT, medical or industrial',
      'Don\'t leave out C or C++ — it is the first thing hiring managers look for',
    ],
    keyPoints: [
      'A firmware project and the hardware it ran on',
      'Debugging approach and tools',
      'Standards or domains you worked in, such as automotive or medical',
      'Collaboration between hardware and software teams',
    ],
    sampleOpening: 'I write firmware in C for ARM Cortex-M microcontrollers, and I would like to apply that experience to the Embedded Systems Engineer role at [Target Company].',
    sampleBody: 'At [Company], I developed firmware using FreeRTOS, with drivers for I2C, SPI and UART peripherals. I did board bring-up with the hardware team, using an oscilloscope and a logic analyser to track down timing issues. I wrote test procedures and documented the design so others could maintain it.',
    sampleClosing: 'I would welcome the chance to discuss how my firmware experience fits [Target Company]\'s products. Thank you for your time and consideration.',
    faqs: [
      { q: 'What should an embedded engineer highlight in a cover letter?', a: 'Your firmware languages (C, C++), the microcontrollers and protocols you have used, and one project you debugged on real hardware. Domain experience, such as automotive or IoT, also helps.' },
      { q: 'Can a fresher embedded engineer write a good cover letter?', a: 'Yes. Describe a college or personal project on a real board, such as an STM32 or Arduino-based build, and explain what you debugged and learned.' },
    ],
  },
  'network-engineer': {
    dos: common([
      'Name the vendors and technologies in the posting: Cisco, Juniper, Palo Alto, BGP, OSPF, VLAN',
      'List certifications you hold, such as CCNA or CCNP',
      'Describe a network you maintained or improved, including its size',
    ]),
    donts: [
      'Don\'t claim certifications you have not completed',
      'Avoid listing every device you have touched',
      'Don\'t describe only routine tasks without an outcome',
      'Don\'t ignore security and uptime, which most employers care about',
    ],
    keyPoints: [
      'Size and type of the network you managed',
      'An outage you resolved or an improvement you made',
      'Certifications and tools such as monitoring platforms',
      'Experience with firewalls, VPNs and security policies',
    ],
    sampleOpening: 'As a network engineer with experience in routing, switching and firewalls, I am applying for the Network Engineer role at [Target Company] to help keep your network secure and available.',
    sampleBody: 'At [Company], I managed a multi-site network using Cisco routers and switches, configured OSPF and BGP, and maintained VPN and firewall policies. I used monitoring tools to catch problems early and wrote runbooks so the team could resolve incidents faster. I hold a CCNA certification.',
    sampleClosing: 'I would be glad to discuss how I can support [Target Company]\'s network operations. Thank you for your consideration.',
    faqs: [
      { q: 'Do network engineers need a cover letter?', a: 'It is optional at most large employers but useful for smaller companies and direct applications. Keep it short and focused on your technologies, certifications and one operational result.' },
      { q: 'Should I list CCNA or CCNP in the cover letter?', a: 'Yes, if the job description asks for it or you hold it. Mention it once, near the top, along with the technologies you use.' },
    ],
  },
  'sap-consultant': {
    dos: common([
      'Name your SAP module and version: FICO, MM, SD, ABAP, S/4HANA',
      'Describe an implementation, rollout or support project and your role in it',
      'Mention business processes you configured, not only system names',
    ]),
    donts: [
      'Don\'t say "SAP experience" without naming a module',
      'Avoid claiming full-cycle implementation if you only worked on support',
      'Don\'t forget to mention the industry you worked in',
      'Don\'t make the letter a list of transaction codes',
    ],
    keyPoints: [
      'Your module and version, and whether you worked on implementation or support',
      'The business problem the configuration solved',
      'Industry and client type',
      'Certification, if you hold one',
    ],
    sampleOpening: 'I am an SAP consultant specialising in [module] on S/4HANA, and I am applying for the SAP Consultant role at [Target Company].',
    sampleBody: 'At [Company], I took part in the implementation and support of SAP for a manufacturing client. I gathered requirements from business users, configured the module, ran user acceptance testing and trained end users. I also resolved support tickets and documented fixes so issues were not repeated.',
    sampleClosing: 'I would welcome the opportunity to discuss how my SAP experience can help [Target Company]\'s projects. Thank you for your time.',
    faqs: [
      { q: 'What should an SAP consultant include in a cover letter?', a: 'Your module, version and whether you worked on implementation or support, followed by one project and the business result. Add certifications and your industry.' },
      { q: 'Should a fresher SAP consultant write a cover letter?', a: 'Yes, mentioning your SAP training, certification and any project work. Be clear about the module you are trained in.' },
    ],
  },
  'scrum-master': {
    dos: common([
      'Describe the team size and the delivery cadence you worked with',
      'Give an example of removing an impediment or improving team flow',
      'Mention your certification, such as CSM or PSM, and tools like Jira',
    ]),
    donts: [
      'Don\'t describe Scrum theory — show how you applied it',
      'Avoid acting as if you managed the team instead of serving it',
      'Don\'t claim improvements without saying how you tracked them',
      'Don\'t forget to name the tools you use',
    ],
    keyPoints: [
      'Team size, product type and sprint length',
      'A change you coached that improved delivery',
      'How you tracked progress: velocity, cycle time, burndown',
      'Stakeholder and product owner collaboration',
    ],
    sampleOpening: 'I help software teams deliver predictably and improve every sprint, and I am applying for the Scrum Master role at [Target Company].',
    sampleBody: 'At [Company], I served as Scrum Master for a team of eight engineers, facilitating planning, daily stand-ups, reviews and retrospectives. I worked with the product owner to keep the backlog clear and helped the team act on retrospective actions. I used Jira reports to track velocity and spot blockers early.',
    sampleClosing: 'I would be glad to discuss how I can support [Target Company]\'s teams. Thank you for your consideration.',
    faqs: [
      { q: 'What should a Scrum Master cover letter focus on?', a: 'How you improved a team\'s delivery: the team size, what you changed and how you tracked the result. Mention your certification and tools briefly.' },
      { q: 'Do I need a CSM or PSM to apply?', a: 'Many postings ask for one, so mention yours if you hold it. If not, highlight real experience facilitating Scrum events.' },
    ],
  },
  'business-development-manager': {
    dos: common([
      'Open with a result you own: revenue won, accounts opened, pipeline built',
      'Name the sectors and customer types you sell to',
      'Show how you source leads and close deals',
    ]),
    donts: [
      'Don\'t write "good communication skills" without proof',
      'Avoid quoting numbers you cannot back up in an interview',
      'Don\'t ignore the target company\'s market',
      'Don\'t use a mass-mail letter',
    ],
    keyPoints: [
      'Targets met or exceeded, stated honestly',
      'Your sales process from lead to close',
      'Key accounts and partnerships you built',
      'CRM and outreach tools you use',
    ],
    sampleOpening: 'I build new business by finding the right accounts and closing partnerships, and I would like to bring that approach to the Business Development Manager role at [Target Company].',
    sampleBody: 'At [Company], I generated leads through outbound outreach, events and referrals, ran discovery calls and managed proposals through to closing. I used a CRM to track the pipeline and worked with the product team to shape offers for large accounts. I met my quarterly targets in [number] of [number] quarters.',
    sampleClosing: 'I would welcome a conversation about how I can help [Target Company] grow. Thank you for your time.',
    faqs: [
      { q: 'What makes a business development manager cover letter effective?', a: 'A clear, truthful result such as accounts won or revenue contributed, plus how you achieved it. Tailor it to the company\'s market.' },
      { q: 'Should I mention sales targets in the letter?', a: 'Yes, if you can back them up. State what you achieved against target and over what period.' },
    ],
  },
  'sales-executive': {
    dos: common([
      'Lead with a sales result and the period it covers',
      'Name the products, customer segments and territory you sold in',
      'Show persistence: follow-up, objection handling, repeat business',
    ]),
    donts: [
      'Don\'t only say you are "target-oriented"',
      'Avoid exaggerating results',
      'Don\'t send a generic letter to every employer',
      'Don\'t forget to mention your language and local-market strengths',
    ],
    keyPoints: [
      'Targets and achievement in your last role',
      'Your territory or customer segment',
      'How you generated and followed up on leads',
      'Familiarity with the company\'s products',
    ],
    sampleOpening: 'I enjoy winning customers and keeping them, and I am applying for the Sales Executive position at [Target Company].',
    sampleBody: 'At [Company], I handled a territory of retail and business customers, made daily calls and visits, and tracked leads in a CRM. I focused on understanding customer needs before proposing a product and followed up consistently to close. I worked with the support team to keep customers happy after the sale.',
    sampleClosing: 'I would be glad to discuss how I can contribute to [Target Company]\'s sales team. Thank you for your consideration.',
    faqs: [
      { q: 'Does a sales executive need a cover letter in India?', a: 'It helps when you apply directly to a company or through a referral. Keep it short, and focus on your results and the products you can sell.' },
      { q: 'Can a fresher write a sales executive cover letter?', a: 'Yes. Use internships, campus roles or part-time sales work to show communication and persistence.' },
    ],
  },
  'investment-banker': {
    dos: common([
      'Name the deals or transaction types you worked on, within confidentiality limits',
      'Show your modelling skills: DCF, comps, LBO, Excel',
      'Make clear why you want this bank and this group',
    ]),
    donts: [
      'Don\'t disclose confidential client names or non-public figures',
      'Avoid generic statements about "passion for finance"',
      'Don\'t ignore the bank\'s specific sectors',
      'Don\'t exceed one page',
    ],
    keyPoints: [
      'Transactions or analyses you supported, described at a level you can share',
      'Valuation and modelling skills',
      'Relevant sector knowledge',
      'Education and certifications such as CFA progress',
    ],
    sampleOpening: 'I am applying for the Investment Banking role at [Target Company] because of its work in [sector] and my experience supporting valuation and transaction analysis.',
    sampleBody: 'At [Company], I built financial models, prepared valuation analyses using DCF and comparable companies, and drafted materials for client presentations. I worked closely with senior bankers under tight deadlines and checked my work carefully. I am working toward my CFA charter.',
    sampleClosing: 'I would welcome the opportunity to discuss how I can contribute to your team. Thank you for your time.',
    faqs: [
      { q: 'Is a cover letter required for investment banking applications?', a: 'Many banks expect one. Keep it to one page and explain why you want that bank and group, with a brief example of your modelling or deal work.' },
      { q: 'What should I avoid in an investment banking cover letter?', a: 'Confidential client details, unsupported claims and generic wording that could apply to any bank.' },
    ],
  },
  'chartered-accountant': {
    dos: common([
      'State your CA qualification and the year you qualified',
      'Describe your area: audit, taxation, financial reporting, advisory',
      'Mention standards and tools: Ind AS, GST, Tally, SAP',
    ]),
    donts: [
      'Don\'t overlook the specific area the posting asks for',
      'Avoid listing every compliance task',
      'Don\'t share confidential client information',
      'Don\'t forget to mention articleship where it is relevant',
    ],
    keyPoints: [
      'Qualification and relevant experience',
      'Your specialisation and key engagements, described generally',
      'Knowledge of Ind AS, GST and income tax as needed',
      'Software and ERP tools you use',
    ],
    sampleOpening: 'As a qualified Chartered Accountant with experience in [audit/taxation/finance], I am applying for the role at [Target Company].',
    sampleBody: 'At [Company], I handled statutory audit, GST and income tax compliance, and financial reporting under Ind AS. I worked with finance teams to close books on schedule and recommended process improvements to reduce errors. I am comfortable with Tally and SAP.',
    sampleClosing: 'I would welcome the chance to discuss how I can support [Target Company]\'s finance function. Thank you for your consideration.',
    faqs: [
      { q: 'What should a newly qualified CA put in a cover letter?', a: 'Your qualification, the firm where you did your articleship, the areas you worked in and your tool skills. Be specific about the work you are looking to do.' },
      { q: 'Should a CA mention articleship in the cover letter?', a: 'Yes, especially if you are newly qualified. Say what areas of work you covered during it.' },
    ],
  },
  'pharmacist': {
    dos: common([
      'State your registration and qualification, such as B.Pharm, M.Pharm or Pharm.D',
      'Specify the setting: hospital, retail, clinical, industry or regulatory',
      'Mention the dispensing, counselling or compliance work you handled',
    ]),
    donts: [
      'Don\'t omit your pharmacy council registration where it is required',
      'Avoid vague phrases like "patient care" without detail',
      'Don\'t overstate clinical responsibilities',
      'Don\'t forget licensing and regulatory knowledge',
    ],
    keyPoints: [
      'Qualification and registration',
      'Type of pharmacy or pharma setting',
      'Counselling, dispensing, inventory and compliance experience',
      'Software used for pharmacy management',
    ],
    sampleOpening: 'I am a registered pharmacist with experience in [hospital/retail] pharmacy, and I am applying for the Pharmacist position at [Target Company].',
    sampleBody: 'At [Company], I dispensed prescriptions accurately, counselled patients on medicines, managed inventory and followed regulatory requirements. I worked with doctors and nurses to clarify prescriptions and kept records in line with compliance rules.',
    sampleClosing: 'I would be glad to discuss how I can contribute to [Target Company]. Thank you for your time.',
    faqs: [
      { q: 'Do pharmacists need a cover letter?', a: 'It is helpful for hospital and corporate roles. Keep it short and cover your registration, setting and key duties.' },
      { q: 'What should a fresher pharmacist mention?', a: 'Your degree, internship or training, registration status and any dispensing or counselling exposure.' },
    ],
  },
  'interior-designer': {
    dos: common([
      'Link your portfolio first — it matters more than the letter',
      'Name the design software: AutoCAD, SketchUp, 3ds Max, Revit',
      'Describe one project from brief to completion',
    ]),
    donts: [
      'Don\'t send a letter without a portfolio link',
      'Avoid describing your style in vague terms',
      'Don\'t forget the client and budget constraints you worked within',
      'Don\'t claim credit for work done by a team without saying so',
    ],
    keyPoints: [
      'A residential or commercial project you delivered',
      'Software and drawing skills',
      'Coordination with contractors and vendors',
      'Your approach to client briefs and budgets',
    ],
    sampleOpening: 'My portfolio shows residential and commercial interiors I have designed from concept to handover, and I would like to bring that work to [Target Company] as an Interior Designer.',
    sampleBody: 'At [Company], I prepared layouts and 3D visualisations in AutoCAD and SketchUp, selected materials within client budgets and coordinated with contractors on site. I presented concepts to clients and revised designs based on their feedback. My portfolio link is included with this application.',
    sampleClosing: 'I would welcome the chance to discuss my work and how it fits [Target Company]. Thank you for your time.',
    faqs: [
      { q: 'What matters most in an interior designer cover letter?', a: 'A link to your portfolio and a short description of one project you delivered. The letter should lead the reader to your work.' },
      { q: 'Which software should an interior designer mention?', a: 'The ones in the job posting, usually AutoCAD, SketchUp, 3ds Max or Revit, plus rendering tools you use.' },
    ],
  },
  'logistics-manager': {
    dos: common([
      'Describe the scale of operations you managed: warehouses, fleet, routes or shipments',
      'Mention the systems you use: WMS, TMS, ERP',
      'Give an example of cost, delivery-time or accuracy improvement you led',
    ]),
    donts: [
      'Don\'t describe duties without outcomes',
      'Avoid unverified cost-saving claims',
      'Don\'t ignore compliance, safety and documentation',
      'Don\'t forget to mention vendor and team management',
    ],
    keyPoints: [
      'Scale of the operation and the team you led',
      'A process or cost improvement you delivered',
      'Systems and tools used',
      'Vendor, carrier and customer coordination',
    ],
    sampleOpening: 'I manage logistics operations with a focus on on-time delivery and controlled costs, and I am applying for the Logistics Manager role at [Target Company].',
    sampleBody: 'At [Company], I managed warehouse and transport operations, coordinated with carriers and tracked delivery performance through a TMS. I reviewed routes and vendor contracts to reduce costs and trained my team on safety and documentation procedures.',
    sampleClosing: 'I would be glad to discuss how I can support [Target Company]\'s supply chain. Thank you for your consideration.',
    faqs: [
      { q: 'What should a logistics manager highlight in a cover letter?', a: 'The scale of operations you ran, systems you use and one measurable improvement in cost, speed or accuracy.' },
      { q: 'Is supply chain certification useful to mention?', a: 'Yes, if relevant to the role. Mention it briefly with your experience.' },
    ],
  },
};
