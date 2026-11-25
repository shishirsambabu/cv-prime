import type { CoverLetterData } from '@/lib/coverLetterData';

// Cover letter guides for the 15 roles that had CV, ATS, interview and LinkedIn
// pages but no /cover-letter-examples/[role] page. Merged into coverLetterMap.
export const coverLetterDataMore: Record<string, CoverLetterData> = {
  'sales-executive': {
    dos: [
      'Open with a number: quota attainment %, revenue closed, or new accounts won',
      "Name the territory or segment you sold into — SME, enterprise, retail, or a specific city's market",
      'Mention the CRM you work in daily (Salesforce, Zoho CRM, HubSpot, LeadSquared) if the JD lists one',
      'Show you researched the product: name a customer segment the company sells to and why you can reach it',
      'Close with confidence — sales hiring managers expect you to ask for the meeting',
    ],
    donts: [
      'Don\'t say "I am a people person" — every sales applicant says it; show a closed deal instead',
      'Avoid unverifiable claims like "always top performer" without a rank, quarter, or team size',
      "Don't hide a missed-quota year with vague language — lead with your best comparable period",
      'Never write more than one page — brevity is itself a sales skill',
      "Don't forget the sales cycle length — a 2-day retail cycle and a 6-month B2B cycle are different jobs",
    ],
    keyPoints: [
      'Quota attainment with the period and team ranking (e.g. "118% of annual target, #2 of 14")',
      'Average deal size and sales cycle length',
      'Prospecting method: inbound, cold calling, field visits, channel partners',
      'A specific account you won or rescued and how',
    ],
    sampleOpening:
      "I closed ₹1.4 crore in new SME business at [Company] last financial year — 118% of my annual target and second out of a 14-person team — and I would like to bring that same pipeline discipline to [Target Company]'s expansion in [City/Region].",
    sampleBody:
      'I manage a territory of roughly 220 SME accounts across [Region], running a mix of outbound calling, field visits, and partner referrals. I build my pipeline weekly in Zoho CRM and keep conversion data by lead source, which is how I found that channel-partner referrals closed at nearly three times the rate of cold leads — I then shifted 30% of my prospecting time to partner meetings. My average deal is around ₹2.5 lakh with a 5–6 week cycle, and I have retained 92% of the accounts I closed in my first year.',
    sampleClosing:
      "I would welcome 20 minutes to walk you through how I would approach [Target Company]'s [segment] customers in my first quarter. I am available for a call any day this week.",
    faqs: [
      {
        q: 'Do sales executives need a cover letter in India?',
        a: 'For field sales and inside sales roles, many recruiters screen on the CV and a phone call alone. A cover letter helps most when you are switching industries, applying to a B2B SaaS company, or applying directly to a founder or sales head — situations where a short, numbers-first note shows you can sell yourself.',
      },
      {
        q: 'What numbers should a sales cover letter include?',
        a: 'At minimum: quota attainment as a percentage, the period it covers, and either your team rank or total revenue closed. Add average deal size and sales cycle length if the role is B2B. Always state the time frame — "118% of target" means little without "FY 2025–26".',
      },
    ],
  },
  'ios-developer': {
    dos: [
      'Link to an App Store listing you shipped or contributed to in the first paragraph',
      'Name your stack precisely: Swift, SwiftUI or UIKit, Combine or async/await, Core Data or SwiftData',
      'Quantify app quality: crash-free sessions, App Store rating, launch time, or binary size',
      "Reference the company's own iOS app and one specific thing you would improve or admire",
      'Mention how you work with design and backend teams — iOS rarely ships alone',
    ],
    donts: [
      "Don't list Objective-C, Flutter, React Native and Kotlin together unless the JD asks — it dilutes your iOS focus",
      'Avoid "I have developed many apps" — name one and what it does',
      "Don't skip testing — mention XCTest or UI tests if you write them",
      'Never claim App Store experience you do not have; reviewers will search for the app',
      "Don't paste your full skills list — the CV already has it",
    ],
    keyPoints: [
      'A shipped app with real users: downloads, DAU, or rating',
      'A performance or stability fix with a before/after number',
      'Architecture you used (MVVM, TCA, VIPER) and why',
      'Release process: TestFlight, CI (Xcode Cloud, Fastlane, Bitrise), App Store review handling',
    ],
    sampleOpening:
      "I lead iOS development on [App Name], a fintech app with over 500,000 downloads and a 4.6 App Store rating, where I raised crash-free sessions from 97.8% to 99.6% — and I would like to bring that focus on quality to [Target Company]'s iOS team.",
    sampleBody:
      'At [Company], I migrated our onboarding and payments flows from UIKit to SwiftUI, cutting the code for those screens by about 40% while keeping iOS 15 support. I replaced callback-based networking with async/await, added XCTest coverage for the payment state machine, and set up Fastlane with TestFlight distribution so QA gets a build on every merged pull request. Working with our design team, I also reduced cold launch time from 2.1s to 1.2s by deferring analytics SDK initialisation and trimming asset catalogues.',
    sampleClosing:
      "I have used [Target Company]'s app for over a year and have a few ideas on its checkout flow that I would enjoy discussing. I would welcome the chance to talk about your iOS roadmap.",
    faqs: [
      {
        q: 'Should an iOS developer link a GitHub profile or App Store app in a cover letter?',
        a: 'Both if you can, but an App Store link to a live app carries more weight because it proves you handled signing, review, and real users. If your professional apps are under an employer account, name the app and your role on it; add a personal GitHub project for code samples.',
      },
      {
        q: 'Is SwiftUI or UIKit experience more important to mention?',
        a: 'Mirror the job description. Many Indian product companies still maintain large UIKit codebases while building new screens in SwiftUI, so experience with both — and migrating between them — is often the strongest signal you can offer.',
      },
    ],
  },
  'full-stack-developer': {
    dos: [
      'Describe one feature you built end to end — database schema, API, and UI — in a single paragraph',
      'Name the exact stack from the JD: MERN, Next.js + PostgreSQL, Django + React, or similar',
      'Include one frontend and one backend metric (page load time, API latency, query time)',
      'Mention deployment and ownership: CI/CD, cloud provider, monitoring',
      "Connect your work to the company's product stage — early startups value breadth, scale-ups value depth",
    ],
    donts: [
      'Don\'t claim to be an "expert" in a dozen frameworks — it reads as shallow everywhere',
      'Avoid describing only frontend or only backend work for a full stack role',
      'Don\'t use the phrase "jack of all trades" — it undersells you',
      'Never skip a link to live work or a repository',
      "Don't make the letter longer than 300 words",
    ],
    keyPoints: [
      'An end-to-end feature with a user or business outcome',
      'Database design decisions and performance work',
      'Frontend quality: Core Web Vitals, accessibility, or conversion impact',
      'How you deploy, monitor and fix production issues',
    ],
    sampleOpening:
      "I built and shipped [Company]'s subscription billing system end to end — PostgreSQL schema, Node.js APIs, Razorpay integration, and the React dashboard — which now processes over ₹40 lakh a month, and I am excited to bring that same ownership to [Target Company].",
    sampleBody:
      "As one of four engineers at [Company], I own features from database to UI. I designed the billing data model with idempotent webhook handling so retries never double-charge a customer, exposed it through typed REST endpoints, and built the Next.js customer dashboard on top. When our dashboard's Largest Contentful Paint hit 4.2s, I moved data fetching to server components and added query indexes, bringing it to 1.6s and cutting P95 API latency from 900ms to 220ms. I deploy through GitHub Actions to AWS and handle our on-call rotation one week a month.",
    sampleClosing:
      "[Target Company]'s product is at the stage where one engineer's ownership of a full feature makes a visible difference, and that is exactly the work I enjoy. I would welcome a conversation about your engineering roadmap.",
    faqs: [
      {
        q: 'How do I show both frontend and backend skills in one cover letter?',
        a: 'Pick one feature you built end to end and walk through it from data model to UI in a few sentences, with one metric for each layer. This proves full stack ability far better than two separate lists of frontend and backend technologies.',
      },
      {
        q: 'Should a full stack developer cover letter mention DevOps?',
        a: 'Briefly, yes. Most full stack roles in Indian startups expect you to deploy and debug your own code. One sentence on your CI/CD setup, cloud provider, and on-call or monitoring experience is enough.',
      },
    ],
  },
  'machine-learning-engineer': {
    dos: [
      'Lead with a model you put into production and the business metric it moved',
      'Name the frameworks and serving stack: PyTorch or TensorFlow, MLflow, SageMaker, Vertex AI, Triton, or FastAPI',
      'Describe how you evaluated the model offline and validated it online (A/B test, shadow deployment)',
      'Mention data scale: rows, features, training time, or inference requests per second',
      "Show awareness of the company's ML problems — recommendations, fraud, search, forecasting",
    ],
    donts: [
      "Don't describe only Kaggle notebooks for a production MLE role — show deployment",
      'Avoid listing accuracy without context; say what baseline it beat and why that metric matters',
      "Don't confuse the role with data science — emphasise pipelines, serving, and monitoring",
      'Never overstate research contributions; be specific about what you built versus what you used',
      "Don't skip model monitoring and drift — experienced reviewers look for it",
    ],
    keyPoints: [
      'A production model: what it predicts, who uses it, and its impact',
      'Offline metric and online result (e.g. AUC improvement and conversion lift)',
      'MLOps practices: feature store, retraining cadence, CI for models, monitoring',
      'Latency and cost constraints you designed for',
    ],
    sampleOpening:
      'I built and deployed the fraud detection model at [Company] that now scores every one of our 1.2 million daily transactions in under 40ms and reduced chargeback losses by 28% — production ML work I want to continue at [Target Company].',
    sampleBody:
      'At [Company], I replaced a rules-based fraud system with a gradient-boosted model trained on 18 months of transaction history, engineering features from device, merchant, and velocity signals. Offline, it improved recall at a fixed 1% false-positive rate from 54% to 71%; we validated it with a four-week shadow deployment before switching traffic. I built the training pipeline on Airflow with MLflow tracking, serve the model through a FastAPI service on Kubernetes, and set up weekly drift monitoring that triggers retraining when feature distributions shift beyond a set threshold.',
    sampleClosing:
      "I am keen to apply this end-to-end approach to [Target Company]'s [recommendation/search/risk] systems. I would welcome a conversation about the ML problems your team is focused on this year.",
    faqs: [
      {
        q: 'What is the difference between a machine learning engineer and data scientist cover letter?',
        a: 'A data scientist letter usually emphasises analysis, experimentation, and insight. A machine learning engineer letter should emphasise getting models into production: pipelines, serving latency, monitoring, retraining, and reliability. If the JD mentions MLOps, Kubernetes, or model serving, write the MLE version.',
      },
      {
        q: 'Should I mention research papers in an ML engineer cover letter?',
        a: 'Only if they are relevant to the role or show applied work. For most industry MLE roles in India, a deployed model with a measured business result is more persuasive than a publication. Link papers on your CV rather than describing them at length in the letter.',
      },
    ],
  },
  'chartered-accountant': {
    dos: [
      'State your qualification clearly in the first line: "Qualified Chartered Accountant (ICAI), [year]"',
      'Name your articleship firm or audit experience — Big 4, mid-tier, or in-house',
      'Mention specific areas: statutory audit, Ind AS, GST, direct tax, transfer pricing, or FP&A',
      'Quantify scope: audit size, entities handled, tax savings identified, or close timelines achieved',
      'Name the ERP or tools you use: SAP FICO, Tally Prime, Oracle, Excel modelling',
    ],
    donts: [
      'Don\'t write "I am a hardworking and dedicated professional" — show compliance results instead',
      'Avoid listing your attempts or ranks unless they are a distinction (e.g. AIR)',
      "Don't be vague about articleship — name the firm type and the clients' industries",
      'Never include confidential client names without permission; describe them by sector and size',
      "Don't send the same letter for audit, tax and industry roles — they value different things",
    ],
    keyPoints: [
      'Qualification year and any rank or distinction',
      'Audit or tax engagements: sector, turnover range, your role',
      'A specific outcome: month-end close shortened, tax exposure reduced, audit qualifications avoided',
      'Regulatory knowledge relevant to the role: Ind AS, GST, Companies Act, SEBI LODR',
    ],
    sampleOpening:
      "As a Chartered Accountant who qualified in [year] and has spent three years in statutory audit at a Big 4 firm, I have led fieldwork on manufacturing and retail clients with turnover above ₹500 crore — experience I would like to bring to [Target Company]'s financial reporting team.",
    sampleBody:
      'During my articleship and post-qualification years at [Firm], I led audit teams of four to six on Ind AS–compliant statutory audits, including inventory valuation and revenue recognition under Ind AS 115. On one engagement I identified a lease classification error that would have understated liabilities by ₹12 crore, which the client corrected before sign-off. I have also prepared GST reconciliations across multiple state registrations and worked in SAP FICO and Excel to build variance analysis for quarterly reviews.',
    sampleClosing:
      "I am keen to move from audit into an in-house reporting role where I can own the close process end to end, and [Target Company]'s growth makes this an ideal fit. I would welcome the opportunity to discuss the position.",
    faqs: [
      {
        q: 'Do chartered accountants need a cover letter for job applications?',
        a: 'For campus placements through ICAI, a cover letter is rarely required. For lateral moves, industry roles, and applications to multinational companies or GCCs, a short cover letter that explains your specialisation and why you are moving (for example, audit to industry) helps recruiters place you quickly.',
      },
      {
        q: 'How should a newly qualified CA write a cover letter with limited experience?',
        a: 'Lean on your articleship. Describe the sectors, entity sizes, and areas you worked on (audit, tax, GST) and one specific finding or improvement you contributed. Articleship is substantial practical experience and recruiters treat it that way when it is described concretely.',
      },
    ],
  },
  'sap-consultant': {
    dos: [
      'Name your module in the first sentence: SAP FICO, MM, SD, PP, ABAP, Basis, or SuccessFactors',
      'State S/4HANA experience explicitly — most current projects are migrations or greenfield S/4HANA',
      'Count your full-cycle implementations and say which phases you owned',
      'Mention the industries and countries of your project clients',
      'Include certifications with the exact SAP certification name',
    ],
    donts: [
      "Don't list every SAP module you have seen — focus on your core module and one integration area",
      'Avoid "worked on SAP project" without phase, role, and scope',
      "Don't omit support versus implementation experience — they are valued differently",
      'Never claim an SAP certification you have not completed',
      "Don't leave out integration work (e.g. FI–MM, SD–FI) if you have it",
    ],
    keyPoints: [
      'Number of end-to-end implementations and rollouts',
      'S/4HANA migration or greenfield experience',
      'A configuration or process problem you solved and its result',
      'Client-facing skills: blueprint workshops, user training, cutover',
    ],
    sampleOpening:
      "I am an SAP FICO consultant with six years of experience and two full-cycle S/4HANA implementations, most recently leading finance configuration for a ₹2,000-crore manufacturing client's greenfield rollout — and I would like to bring that delivery experience to [Target Company].",
    sampleBody:
      'On my most recent project at [Company], I ran the blueprint workshops for General Ledger, Asset Accounting, and Accounts Payable, configured the new GL with document splitting for segment reporting, and coordinated FI–MM integration with the materials team. During cutover, I built the validation plan for open-item migration that reconciled over 85,000 vendor line items with zero post-go-live balance differences. I also trained 60 finance users and supported hypercare for three months. I hold the SAP Certified Application Associate – Financial Accounting with SAP S/4HANA certification.',
    sampleClosing:
      "I am keen to contribute to [Target Company]'s S/4HANA practice and would welcome a conversation about your upcoming implementations.",
    faqs: [
      {
        q: 'What should an SAP consultant cover letter focus on?',
        a: 'Your module, the number of full-cycle implementations, S/4HANA experience, and the phases you owned (blueprint, realisation, testing, cutover, hypercare). Recruiters for SAP roles screen on these quickly, so put them in the first two sentences.',
      },
      {
        q: 'Should a support-project SAP consultant still write a cover letter?',
        a: 'Yes, especially if you want to move into implementation. Describe the most complex tickets or enhancements you handled, any configuration changes you made, and the business process you supported. That shows functional depth even without a full implementation on your record.',
      },
    ],
  },
  'react-developer': {
    dos: [
      'Mention your React version and patterns: hooks, Server Components, Suspense, or React Native if relevant',
      'Name your state management and data tools: Redux Toolkit, Zustand, React Query/TanStack Query',
      'Quantify frontend performance: Core Web Vitals, bundle size, or render time improvements',
      'Link to a live product or a GitHub repository you are proud of',
      "Reference the company's web app and something specific about its UI",
    ],
    donts: [
      'Don\'t stop at "I know React" — describe a component system or feature you built',
      'Avoid listing Angular and Vue as equal strengths for a React-specific role',
      "Don't ignore accessibility and testing; mention React Testing Library, Jest, or Playwright if you use them",
      'Never use a generic frontend letter without React-specific details',
      "Don't exceed 300 words",
    ],
    keyPoints: [
      'A feature or design system you built and who uses it',
      'A measurable performance improvement',
      'Testing and accessibility practices',
      'Next.js or framework experience if the JD mentions it',
    ],
    sampleOpening:
      "I rebuilt [Company]'s product listing pages in Next.js and React Server Components, cutting the JavaScript bundle by 45% and improving mobile LCP from 3.8s to 1.9s — and I would like to bring that performance focus to [Target Company]'s frontend team.",
    sampleBody:
      'At [Company], I maintain a component library of 60+ accessible React components used by three product teams, documented in Storybook and tested with React Testing Library. I moved our server-state handling from hand-written Redux thunks to TanStack Query, which removed about 3,000 lines of code and fixed a class of stale-data bugs. I also introduced route-level code splitting and image optimisation, and track Core Web Vitals in production so regressions are caught before they reach most users.',
    sampleClosing:
      "I enjoy [Target Company]'s product and have noticed a few places where the interface could feel faster on low-end Android devices. I would welcome a conversation about your frontend roadmap.",
    faqs: [
      {
        q: 'What should a React developer include in a cover letter?',
        a: 'One feature or component system you built, the tools you used (state management, data fetching, testing), and a measurable result such as a Core Web Vitals or bundle-size improvement. Add a link to live work or a repository so the reviewer can see your code.',
      },
      {
        q: 'Do I need to mention Next.js in a React developer cover letter?',
        a: 'If the job description mentions Next.js, server-side rendering, or SEO, yes — many Indian product companies use Next.js for React web apps. If it does not, a short mention of your framework experience is enough.',
      },
    ],
  },
  'investment-banker': {
    dos: [
      'Name deal types and sizes: M&A, ECM, DCM, IPOs, QIPs, or private placements, with values',
      'Describe your role on live deals — modelling, CIM drafting, buyer outreach, due diligence',
      'Mention technical skills: DCF, LBO, comparable companies, precedent transactions',
      "Show market awareness: reference a recent sector trend or one of the bank's announced deals",
      'Keep it formal, precise, and one page',
    ],
    donts: [
      'Don\'t say "I am passionate about finance" — show the deals and models instead',
      'Avoid disclosing non-public deal details; describe confidential deals by sector and size range',
      "Don't overstate your role on a deal you supported as an intern",
      "Never send a letter with another bank's name in it — this is common and fatal",
      "Don't pad with coursework if you have live deal experience",
    ],
    keyPoints: [
      'Number, type, and size of deals worked on',
      'Your specific contribution on each',
      'Modelling and valuation skills',
      'Why this bank and this group (sector coverage or product)',
    ],
    sampleOpening:
      "Over two years as an analyst in [Bank]'s mid-market M&A team, I have worked on four closed transactions with a combined value of about ₹3,200 crore, including a cross-border sell-side mandate in specialty chemicals — and I would like to bring that execution experience to [Target Bank]'s industrials coverage group.",
    sampleBody:
      'On the specialty chemicals mandate, I built the three-statement and DCF models, drafted sections of the information memorandum, and managed the data room for 11 bidders through two rounds. On a separate QIP for a listed NBFC, I prepared the comparable-company analysis and supported due diligence calls with the company and legal counsel. I am comfortable owning a model under tight timelines and presenting outputs to directors and clients.',
    sampleClosing:
      "[Target Bank]'s recent work in industrials M&A is exactly the deal flow I want to be part of, and I would welcome the opportunity to discuss how I can contribute to the team.",
    faqs: [
      {
        q: 'How do I describe confidential deals in an investment banking cover letter?',
        a: 'Describe them by sector, deal type, and approximate size range ("a ₹500–1,000 crore sell-side mandate in healthcare") and your specific role. Only name a deal if it has been publicly announced and your bank is named as an adviser.',
      },
      {
        q: 'Should a fresher without deal experience write an investment banking cover letter?',
        a: 'Yes. Focus on relevant internships, financial modelling work, case competitions, and certifications such as CFA Level I. Show that you understand what an analyst does day to day and why you chose that specific bank and group.',
      },
    ],
  },
  'scrum-master': {
    dos: [
      'State your certification (PSM I/II, CSM, SAFe Scrum Master) and the frameworks you have run',
      'Quantify team outcomes: predictability, cycle time, release frequency, or escaped defects',
      'Name the number of teams you support and their size',
      'Describe one impediment you removed and what changed',
      'Mention tools only briefly: Jira, Azure DevOps, Confluence, Miro',
    ],
    donts: [
      'Don\'t describe yourself as a "Jira administrator" — focus on outcomes, not tooling',
      "Avoid claiming credit for the team's delivery; describe how you enabled it",
      'Don\'t use agile jargon without results ("facilitated ceremonies" alone says little)',
      'Never ignore stakeholder management — product owners and leadership matter',
      "Don't write more than one page",
    ],
    keyPoints: [
      'Teams supported and framework used (Scrum, Kanban, SAFe)',
      'A measurable delivery improvement',
      'Coaching: how you helped the team or product owner improve',
      'Scaling or cross-team coordination experience',
    ],
    sampleOpening:
      'As a PSM II–certified Scrum Master supporting two product teams at [Company], I helped raise sprint predictability from 58% to 86% over three quarters while reducing average cycle time by a third — and I would like to bring that coaching approach to [Target Company].',
    sampleBody:
      'When I joined, both teams carried over almost half their sprint work. Using a few retrospectives focused on flow data, we found that large, unrefined stories and late QA were the main causes. I coached the product owners on story slicing and introduced a shared definition of ready, and we moved testers into refinement. Cycle time dropped from 9 to 6 days, and we moved from monthly to fortnightly releases. I also coordinate a quarterly planning session across five teams using a lightweight SAFe-style PI board.',
    sampleClosing:
      "I am keen to help [Target Company]'s teams deliver predictably as you scale, and I would welcome a conversation about where your teams are in their agile journey.",
    faqs: [
      {
        q: 'What metrics should a Scrum Master mention in a cover letter?',
        a: 'Team-level flow and delivery metrics: sprint predictability (committed vs completed), cycle time, release frequency, and escaped defects. Avoid velocity comparisons between teams; use velocity only as a trend for the same team.',
      },
      {
        q: 'Is a Scrum certification enough to get hired as a Scrum Master in India?',
        a: 'A certification such as PSM or CSM helps you pass screening, but hiring managers look for evidence of improving a real team. In your cover letter, describe a specific impediment you removed and the measurable change that followed — that matters more than the certificate itself.',
      },
    ],
  },
  'business-development-manager': {
    dos: [
      'Open with revenue or partnerships you originated, with the time frame',
      'Name the market you develop: enterprise, mid-market, channel partners, international, or a vertical',
      'Describe your full cycle: prospecting, pitching, negotiation, contracting, handover',
      "Reference the company's growth plans — a new market, product line, or segment you can help open",
      'Mention CRM and pipeline discipline briefly',
    ],
    donts: [
      "Don't confuse BD with general sales — highlight new markets, partnerships, and strategic deals",
      'Avoid listing every company you pitched; feature the wins',
      'Don\'t use vague phrases like "strong network" — name the type of decision-makers you reach',
      'Never share confidential contract terms',
      "Don't make it longer than one page",
    ],
    keyPoints: [
      'New revenue or partnership value originated',
      'Market or segment you opened',
      'Average deal size and cycle',
      'Cross-functional work with product, marketing, or legal',
    ],
    sampleOpening:
      "I opened [Company]'s pharmaceutical vertical from zero to ₹6.5 crore in annual contract value within 18 months, signing 14 enterprise clients — and I see a similar opportunity in [Target Company]'s plan to expand into [vertical/market].",
    sampleBody:
      'I built the pharma pipeline by mapping procurement and digital heads at the top 60 companies in the sector, running targeted outreach with marketing, and co-hosting two roundtables for decision-makers. I negotiated multi-year contracts averaging ₹45 lakh, working with legal on data-protection terms and with product on two client-requested features that later became standard. I also set up a partner referral arrangement with an industry consultancy that sourced a quarter of our new opportunities.',
    sampleClosing:
      "I would welcome the chance to share how I would approach [Target Company]'s first year in [market], and I am available to meet at your convenience.",
    faqs: [
      {
        q: 'How is a business development manager cover letter different from a sales cover letter?',
        a: 'A BD letter should emphasise opening new markets, building partnerships, and closing strategic deals, while a sales letter usually focuses on quota attainment in an existing territory. Lead with the market or partnership you created and the revenue it produced.',
      },
      {
        q: 'Should I mention my industry network in a BD cover letter?',
        a: 'Describe it specifically: the type of decision-makers you have relationships with, the sector, and how you have used them to originate business. Avoid naming individuals or implying you will bring clients from your current employer in a way that may breach your contract.',
      },
    ],
  },
  'network-engineer': {
    dos: [
      'Name your platforms: Cisco, Juniper, Arista, Fortinet, Palo Alto, and any cloud networking (AWS VPC, Azure)',
      'State certifications precisely: CCNA, CCNP Enterprise, JNCIA, or NSE',
      'Quantify the environment: sites, devices, users, or bandwidth you manage',
      'Include an uptime, incident, or migration outcome',
      'Mention automation if you use it: Python, Ansible, or network monitoring tools',
    ],
    donts: [
      "Don't list protocols without context — say where you configured BGP, OSPF, or SD-WAN",
      'Avoid "responsible for network maintenance" — describe a specific project instead',
      "Don't skip security if the role includes firewalls or VPNs",
      'Never claim a certification you have not passed',
      "Don't make it longer than one page",
    ],
    keyPoints: [
      'Scale of network: sites, devices, users',
      'A migration or rollout you led (e.g. SD-WAN, data centre, Wi-Fi refresh)',
      'Uptime and incident response record',
      'Automation and monitoring practices',
    ],
    sampleOpening:
      "I manage the WAN and LAN for [Company]'s 42 branch offices and two data centres, and I led our MPLS-to-SD-WAN migration that cut circuit costs by 30% while improving branch uptime to 99.95% — experience I would like to bring to [Target Company]'s infrastructure team.",
    sampleBody:
      'For the SD-WAN project, I designed the rollout in waves, built configuration templates, and coordinated with ISPs and branch teams to migrate all sites with no business-hours downtime. Day to day, I maintain Cisco Catalyst switching, Fortinet firewalls, and BGP peering with two upstream providers. I wrote Python and Ansible scripts to back up device configurations nightly and check for drift, which reduced misconfiguration incidents noticeably. I hold CCNP Enterprise and Fortinet NSE 4 certifications.',
    sampleClosing:
      "I am keen to contribute to [Target Company]'s network reliability as you expand, and I would welcome a conversation about your infrastructure plans.",
    faqs: [
      {
        q: 'Which certifications should a network engineer highlight in a cover letter?',
        a: 'Lead with the certification that matches the job description — commonly CCNA or CCNP for Cisco environments, JNCIA/JNCIS for Juniper, and vendor security certifications for firewall-heavy roles. Mention cloud networking credentials if the role involves AWS or Azure.',
      },
      {
        q: 'How can a network engineer show impact in a cover letter?',
        a: 'Use uptime percentages, number of sites or devices managed, migration timelines, cost reductions, and incident reductions. A single project with a clear before-and-after result is the most persuasive detail you can include.',
      },
    ],
  },
  'logistics-manager': {
    dos: [
      'Quantify operations: shipments per day, warehouses, fleet size, or SKUs handled',
      'Include cost and service metrics: cost per shipment, on-time delivery, inventory accuracy',
      'Name the systems you use: SAP MM/WM, Oracle WMS, TMS platforms, or Excel/Power BI dashboards',
      'Mention compliance knowledge: e-way bills, GST, customs, or EXIM documentation if relevant',
      "Reference the company's network — quick commerce, FMCG distribution, 3PL, or exports",
    ],
    donts: [
      'Don\'t describe duties ("handled dispatch") — describe improvements',
      'Avoid metrics without baselines; give before-and-after numbers',
      "Don't ignore people management if you lead warehouse or fleet teams",
      'Never omit the scale of your operation',
      "Don't make it longer than one page",
    ],
    keyPoints: [
      'Network scale and complexity',
      'A cost reduction or service improvement with numbers',
      'Vendor and transporter management',
      'Systems and data you use to run operations',
    ],
    sampleOpening:
      "I run outbound logistics for [Company]'s three regional warehouses, moving about 4,000 shipments a day, and over the past year I raised on-time delivery from 89% to 96% while cutting cost per shipment by 11% — results I would like to replicate at [Target Company].",
    sampleBody:
      'I achieved this by renegotiating contracts with our top eight transporters around performance-linked rates, consolidating partial loads on high-volume routes, and building a Power BI dashboard that flags delayed consignments by lane every morning. I manage a team of 35 across dispatch and returns, and I worked with finance to automate e-way bill generation from SAP, which removed a daily bottleneck at the dock. Inventory accuracy across our warehouses is now above 99%.',
    sampleClosing:
      'With [Target Company] expanding its fulfilment network, I would welcome the chance to discuss how I can help keep service levels high as volumes grow.',
    faqs: [
      {
        q: 'What metrics matter most in a logistics manager cover letter?',
        a: 'On-time delivery or OTIF, cost per shipment or per kg, inventory accuracy, order fulfilment time, and freight cost as a percentage of sales. Choose the two or three that match the job description and show before-and-after values.',
      },
      {
        q: 'Should I mention GST and e-way bill experience?',
        a: 'Yes, for roles in India that involve interstate movement. Compliance problems stop trucks, so recruiters value candidates who have handled e-way bills, GST documentation, or customs paperwork without delays.',
      },
    ],
  },
  'interior-designer': {
    dos: [
      'Link your portfolio in the first paragraph — it matters more than anything else in the letter',
      'Name project types and scale: residential, hospitality, retail, office, square footage, budget',
      'Mention tools: AutoCAD, SketchUp, 3ds Max, V-Ray, Revit, Enscape',
      'Describe one project from brief to handover, including a constraint you solved',
      "Reference the studio's style or a project of theirs you admire",
    ],
    donts: [
      'Don\'t describe your style only in adjectives ("elegant, modern") — show it through a project',
      'Avoid omitting budgets and timelines; clients and studios care about both',
      "Don't claim sole credit for team projects — state your role",
      'Never send a letter without a portfolio link',
      "Don't write more than one page",
    ],
    keyPoints: [
      'Portfolio link and one featured project',
      'Project scale, budget, and timeline',
      'Software and visualisation skills',
      'Site coordination with contractors and vendors',
    ],
    sampleOpening:
      'I am an interior designer with four years of experience in residential and boutique hospitality projects, most recently leading the design of a 2,800 sq ft villa in [City] delivered on a ₹65 lakh budget and two weeks ahead of schedule. My portfolio is at [link].',
    sampleBody:
      "At [Studio], I take projects from client brief through concept boards, AutoCAD drawings, and SketchUp/V-Ray visualisations to site execution. On the villa project, the client wanted an open living area but the structure had a load-bearing column in the centre; I turned it into a clad feature with integrated storage, which became the client's favourite element. I coordinate weekly with carpenters, electricians, and vendors, track material orders against budget, and have built a supplier list for sustainable materials that I now use on most projects.",
    sampleClosing:
      "I admire [Studio]'s use of natural materials in your [project name] work and would love to contribute to similar projects. I would welcome the opportunity to walk you through my portfolio.",
    faqs: [
      {
        q: 'What should an interior designer include in a cover letter?',
        a: 'A portfolio link, one project described from brief to handover with its scale and budget, your software skills, and a sentence on why you want to work with that specific studio. The letter should make the reviewer want to open your portfolio.',
      },
      {
        q: 'How can a fresher interior designer write a strong cover letter?',
        a: 'Feature your strongest academic or internship project as if it were a client project: brief, constraints, design decisions, and drawings or renders in your portfolio. Mention site visits or internship experience with contractors, since practical execution skills are what studios look for in juniors.',
      },
    ],
  },
  pharmacist: {
    dos: [
      'State your qualification and registration: B.Pharm/M.Pharm/Pharm.D and State Pharmacy Council registration',
      'Name your setting: hospital, retail chain, clinical research, or pharmaceutical industry',
      'Quantify workload: prescriptions dispensed per day, beds served, or inventory value managed',
      'Mention patient safety work: medication error prevention, counselling, or drug interaction checks',
      'Include relevant systems: pharmacy management software, HIS, or inventory tools',
    ],
    donts: [
      "Don't use generic healthcare language — be specific about pharmacy tasks",
      'Avoid leaving out your registration details; employers need them',
      "Don't ignore compliance: Schedule H/H1 and narcotic record-keeping matter",
      'Never share identifiable patient information',
      "Don't write more than one page",
    ],
    keyPoints: [
      'Qualification and pharmacy council registration',
      'Setting and workload',
      'A patient safety or efficiency improvement',
      'Regulatory and inventory management experience',
    ],
    sampleOpening:
      'I am a registered pharmacist (B.Pharm, [State] Pharmacy Council) with three years in a 300-bed multispecialty hospital, where I dispense and review around 250 prescriptions a day and helped introduce a double-check process that reduced reported dispensing errors — experience I would like to bring to [Target Hospital/Company].',
    sampleBody:
      'At [Hospital], I verify inpatient and outpatient prescriptions, flag drug interactions and dosing issues to physicians, and counsel patients on discharge medicines. I worked with nursing and pharmacy leads to introduce a two-person check for high-alert medicines, which was followed by a clear drop in reported errors over the next six months. I also manage reorder levels for a ₹40 lakh inventory, maintain Schedule H1 and narcotic registers for audits, and have reduced expired-stock write-offs by tightening first-expiry-first-out practices.',
    sampleClosing:
      'I am keen to grow in a clinical pharmacy role at [Target Hospital/Company] and would welcome the opportunity to discuss how I can support your patient care and compliance standards.',
    faqs: [
      {
        q: 'What should a pharmacist mention in a cover letter in India?',
        a: 'Your degree, State Pharmacy Council registration, work setting, daily workload, and any patient safety, counselling, or inventory improvements. For hospital roles, mention clinical review and coordination with doctors; for retail chains, mention customer service, billing systems, and stock management.',
      },
      {
        q: 'How do I write a cover letter for a pharmaceutical industry role as a pharmacist?',
        a: 'Shift the focus from dispensing to the industry function you are targeting — quality assurance, regulatory affairs, pharmacovigilance, or medical sales. Highlight transferable skills such as documentation accuracy, knowledge of drug regulations, and adverse event awareness, and mention any relevant training or certification.',
      },
    ],
  },
  'embedded-systems-engineer': {
    dos: [
      'Name your hardware and toolchain: ARM Cortex-M, STM32, ESP32, NXP, RTOS (FreeRTOS, Zephyr), Keil, IAR',
      'State languages precisely: Embedded C, C++, and any Python for test tooling',
      'Describe a product you worked on and its constraints: power, memory, real-time deadlines',
      'Mention protocols you implemented: SPI, I2C, UART, CAN, BLE, Modbus',
      'Include debugging and validation methods: JTAG, oscilloscopes, logic analysers, HIL testing',
    ],
    donts: [
      "Don't list microcontrollers without saying what you built on them",
      'Avoid vague phrases like "worked on firmware" — describe the feature and the constraint',
      "Don't skip standards if relevant (AUTOSAR, ISO 26262, IEC 62304)",
      'Never overstate hardware design work if you only wrote firmware',
      "Don't exceed one page",
    ],
    keyPoints: [
      'A product shipped and your firmware contribution',
      'A resource constraint you optimised (power, RAM, flash, latency)',
      'Protocols and peripherals implemented',
      'Testing, debugging, and standards experience',
    ],
    sampleOpening:
      "I write firmware for [Company]'s battery-powered industrial sensors on STM32 and FreeRTOS, and I extended device battery life from 14 to 26 months by redesigning the sleep and radio scheduling — work I would like to continue on [Target Company]'s connected products.",
    sampleBody:
      'On the sensor platform, I implemented drivers for SPI and I2C sensors, a BLE configuration service, and a Modbus RTU interface for gateway integration. The battery-life improvement came from profiling current draw with a power analyser, moving to event-driven wake-ups, and batching radio transmissions. I also fitted an over-the-air update bootloader into 32 KB of flash with image verification and rollback. I debug with JTAG and logic analysers and built a Python-based hardware-in-the-loop test rig that runs our regression suite on every firmware release.',
    sampleClosing:
      "[Target Company]'s work on [product area] matches the low-power, reliable firmware I enjoy building, and I would welcome a conversation about your embedded roadmap.",
    faqs: [
      {
        q: 'What should an embedded systems engineer highlight in a cover letter?',
        a: 'A real product you contributed to, the microcontroller and RTOS you used, the protocols you implemented, and one constraint you optimised with numbers — battery life, memory footprint, boot time, or latency. Debugging and test methods are strong supporting details.',
      },
      {
        q: 'Should automotive embedded engineers mention AUTOSAR or ISO 26262?',
        a: 'Yes, if you have worked with them. Automotive employers and Tier 1 suppliers in India screen for AUTOSAR stack experience and functional safety awareness, so name the specific layers, tools, or ASIL levels you have worked with.',
      },
    ],
  },
};
