import type { CoverLetterData } from '@/lib/coverLetterData';

// Hand-curated cover letter data for the 15 roles not covered in coverLetterData.ts.
// No salary or statistic claims; all figures in samples are labelled placeholders or illustrative.
export const coverLetterDataMore: Record<string, CoverLetterData> = {
  "business-development-manager": {
    "dos": [
      "Name the tools or methods from the job description (B2B sales, CRM, pipeline) in the first paragraph",
      "Open with one concrete revenue result rather than a statement of interest",
      "Show the full cycle: prospecting, pitch, negotiation and closure, with deal sizes",
      "Mirror the employer's own wording for the role so ATS and recruiters see a direct match",
      "Close with a specific, polite call to action such as a conversation or interview"
    ],
    "donts": [
      "Don't open with \"I am writing to apply for...\" — start with a result",
      "Don't repeat your CV line by line; add context the CV cannot carry",
      "Don't claim skills you cannot discuss in an interview for a business development manager role",
      "Don't send one generic letter to every employer — change the company and role details each time",
      "Don't exceed one page or about 300 words"
    ],
    "keyPoints": [
      "One quantified achievement: grew a territory or account base by a stated percentage or rupee value",
      "Why this specific company, referencing its product, clients or recent news",
      "A short line on your toolset and certifications relevant to the role",
      "Availability and notice period if the employer asks"
    ],
    "sampleOpening": "In my last role at [Company], I built a B2B pipeline from zero to ₹[X] crore in 14 months by targeting mid-market SaaS buyers, which is exactly the growth mandate in [Target Company]'s Business Development Manager opening.",
    "sampleBody": "I own the full sales cycle: outbound prospecting through LinkedIn Sales Navigator, discovery calls, solution pitching and commercial negotiation. I maintain forecast accuracy within [X]% in Salesforce and have closed [N] enterprise accounts with average deal size of ₹[X] lakh. I work closely with product and customer success so that signed deals convert into renewals.",
    "sampleClosing": "I would welcome a conversation about how I can build [Target Company]'s pipeline in [region or vertical]. I am available to meet at your convenience.",
    "faqs": [
      {
        "q": "Do I need a cover letter for a business development manager job in India?",
        "a": "It is optional for most high-volume hiring, but a short, tailored cover letter helps when the employer asks for one, when you are changing sector or city, or when applying directly to a hiring manager. Keep it under 300 words and focused on a single measurable result."
      },
      {
        "q": "What should a business development manager cover letter highlight?",
        "a": "Lead with revenue closed, pipeline built, deal size, win rate and the markets or verticals you opened. Employers read these as direct proof of fit."
      }
    ]
  },
  "chartered-accountant": {
    "dos": [
      "Name the tools or methods from the job description (Ind AS, GST, statutory audit) in the first paragraph",
      "Open with one concrete audit or compliance result rather than a statement of interest",
      "State your articleship firm tier, ICAI membership status and industry exposure",
      "Mirror the employer's own wording for the role so ATS and recruiters see a direct match",
      "Close with a specific, polite call to action such as a conversation or interview"
    ],
    "donts": [
      "Don't open with \"I am writing to apply for...\" — start with a result",
      "Don't repeat your CV line by line; add context the CV cannot carry",
      "Don't claim skills you cannot discuss in an interview for a chartered accountant (ca) role",
      "Don't send one generic letter to every employer — change the company and role details each time",
      "Don't exceed one page or about 300 words"
    ],
    "keyPoints": [
      "One quantified achievement: closed audits ahead of deadline, saved tax or cut month-end close days",
      "Why this specific company, referencing its product, clients or recent news",
      "A short line on your toolset and certifications relevant to the role",
      "Availability and notice period if the employer asks"
    ],
    "sampleOpening": "As a Chartered Accountant with [N] years in statutory audit and direct tax at [Firm], I helped three clients reduce tax exposure through restructured filings, and I would like to bring that rigour to [Target Company]'s finance team.",
    "sampleBody": "My experience spans statutory and tax audit, Ind AS reporting, GST reconciliation and internal controls review. I have led audit teams of [N] associates, reduced month-end close from [X] to [Y] working days at [Company], and handled assessment proceedings with the Income Tax department. I am proficient in SAP, Tally and advanced Excel.",
    "sampleClosing": "I would be glad to discuss how my audit, taxation and reporting background can support [Target Company]. Thank you for your time and consideration.",
    "faqs": [
      {
        "q": "Do I need a cover letter for a chartered accountant (ca) job in India?",
        "a": "It is optional for most high-volume hiring, but a short, tailored cover letter helps when the employer asks for one, when you are changing sector or city, or when applying directly to a hiring manager. Keep it under 300 words and focused on a single measurable result."
      },
      {
        "q": "What should a chartered accountant (ca) cover letter highlight?",
        "a": "Mention your ICAI membership, articleship firm, audit and tax areas (Ind AS, GST, transfer pricing, internal audit) and a measurable outcome such as faster closes or recovered refunds."
      }
    ]
  },
  "embedded-systems-engineer": {
    "dos": [
      "Name the tools or methods from the job description (C/C++, RTOS, CAN, STM32) in the first paragraph",
      "Open with one concrete firmware result rather than a statement of interest",
      "Name the microcontroller families, protocols and debugging tools you have used on shipped hardware",
      "Mirror the employer's own wording for the role so ATS and recruiters see a direct match",
      "Close with a specific, polite call to action such as a conversation or interview"
    ],
    "donts": [
      "Don't open with \"I am writing to apply for...\" — start with a result",
      "Don't repeat your CV line by line; add context the CV cannot carry",
      "Don't claim skills you cannot discuss in an interview for a embedded systems engineer role",
      "Don't send one generic letter to every employer — change the company and role details each time",
      "Don't exceed one page or about 300 words"
    ],
    "keyPoints": [
      "One quantified achievement: cut boot time, reduced memory footprint or fixed field failures",
      "Why this specific company, referencing its product, clients or recent news",
      "A short line on your toolset and certifications relevant to the role",
      "Availability and notice period if the employer asks"
    ],
    "sampleOpening": "While developing firmware for an STM32-based motor controller at [Company], I reduced boot time by 35% and eliminated a CAN bus timing fault that had caused field returns, which is the kind of low-level reliability work your Embedded Systems Engineer role describes.",
    "sampleBody": "I write production C/C++ for ARM Cortex-M targets, work with FreeRTOS, and debug using JTAG, logic analysers and oscilloscopes. I have implemented SPI, I2C, UART and CAN drivers, bootloaders with OTA update support, and unit-tested firmware in CI. I collaborate with hardware teams on board bring-up and design reviews.",
    "sampleClosing": "I would appreciate the chance to discuss how my firmware and bring-up experience can support [Target Company]'s products. I am happy to share code samples or a project walkthrough.",
    "faqs": [
      {
        "q": "Do I need a cover letter for a embedded systems engineer job in India?",
        "a": "It is optional for most high-volume hiring, but a short, tailored cover letter helps when the employer asks for one, when you are changing sector or city, or when applying directly to a hiring manager. Keep it under 300 words and focused on a single measurable result."
      },
      {
        "q": "What should a embedded systems engineer cover letter highlight?",
        "a": "Emphasise shipped hardware, the MCU families and protocols you know, and quantified outcomes such as reduced boot time, memory usage, power consumption or field failure rate."
      }
    ]
  },
  "full-stack-developer": {
    "dos": [
      "Name the tools or methods from the job description (React, Node.js, PostgreSQL) in the first paragraph",
      "Open with one concrete engineering result rather than a statement of interest",
      "Show you can own a feature from database schema to UI, and link a live project",
      "Mirror the employer's own wording for the role so ATS and recruiters see a direct match",
      "Close with a specific, polite call to action such as a conversation or interview"
    ],
    "donts": [
      "Don't open with \"I am writing to apply for...\" — start with a result",
      "Don't repeat your CV line by line; add context the CV cannot carry",
      "Don't claim skills you cannot discuss in an interview for a full stack developer role",
      "Don't send one generic letter to every employer — change the company and role details each time",
      "Don't exceed one page or about 300 words"
    ],
    "keyPoints": [
      "One quantified achievement: shipped a feature end to end with measurable usage or performance impact",
      "Why this specific company, referencing its product, clients or recent news",
      "A short line on your toolset and certifications relevant to the role",
      "Availability and notice period if the employer asks"
    ],
    "sampleOpening": "At [Company] I shipped a React and Node.js checkout redesign end to end that lifted conversion by 12% and cut page load time by 40%, the kind of full ownership I am looking for in [Target Company]'s Full Stack Developer role.",
    "sampleBody": "I build TypeScript applications across the stack: React front ends, Node.js and REST or GraphQL APIs, and PostgreSQL or MongoDB data models. I deploy with Docker on AWS, write Jest tests, and review code in a Git-based workflow. I am comfortable moving between schema design, API contracts and accessibility fixes in the same sprint.",
    "sampleClosing": "I would welcome the chance to walk you through my projects and discuss how I can contribute to [Target Company]'s product. My GitHub and live demos are linked on my CV.",
    "faqs": [
      {
        "q": "Do I need a cover letter for a full stack developer job in India?",
        "a": "It is optional for most high-volume hiring, but a short, tailored cover letter helps when the employer asks for one, when you are changing sector or city, or when applying directly to a hiring manager. Keep it under 300 words and focused on a single measurable result."
      },
      {
        "q": "What should a full stack developer cover letter highlight?",
        "a": "Highlight one feature you owned from database to interface, the stack used and a measurable result such as conversion, latency or active users."
      }
    ]
  },
  "interior-designer": {
    "dos": [
      "Name the tools or methods from the job description (AutoCAD, SketchUp, V-Ray) in the first paragraph",
      "Open with one concrete design result rather than a statement of interest",
      "Attach or link a portfolio and reference project type, area and budget",
      "Mirror the employer's own wording for the role so ATS and recruiters see a direct match",
      "Close with a specific, polite call to action such as a conversation or interview"
    ],
    "donts": [
      "Don't open with \"I am writing to apply for...\" — start with a result",
      "Don't repeat your CV line by line; add context the CV cannot carry",
      "Don't claim skills you cannot discuss in an interview for a interior designer role",
      "Don't send one generic letter to every employer — change the company and role details each time",
      "Don't exceed one page or about 300 words"
    ],
    "keyPoints": [
      "One quantified achievement: delivered projects on budget, on schedule and within the approved BOQ",
      "Why this specific company, referencing its product, clients or recent news",
      "A short line on your toolset and certifications relevant to the role",
      "Availability and notice period if the employer asks"
    ],
    "sampleOpening": "I recently delivered a 2,400 sq ft residential project in [City] within budget and two weeks ahead of schedule, and I would like to bring the same design-to-handover discipline to [Target Company].",
    "sampleBody": "I handle concept development, space planning, 3D visualisation in SketchUp and V-Ray, working drawings in AutoCAD, material specification and BOQ preparation. I coordinate with contractors, carpenters and vendors on site, manage client approvals, and keep revisions controlled. My portfolio link is included on my CV.",
    "sampleClosing": "I would be pleased to present my portfolio and discuss how my design and site-execution experience can serve [Target Company]'s clients.",
    "faqs": [
      {
        "q": "Do I need a cover letter for a interior designer job in India?",
        "a": "It is optional for most high-volume hiring, but a short, tailored cover letter helps when the employer asks for one, when you are changing sector or city, or when applying directly to a hiring manager. Keep it under 300 words and focused on a single measurable result."
      },
      {
        "q": "What should a interior designer cover letter highlight?",
        "a": "Link your portfolio, name project types and sizes, and show budget, timeline and client satisfaction results rather than only aesthetics."
      }
    ]
  },
  "investment-banker": {
    "dos": [
      "Name the tools or methods from the job description (DCF, LBO, M&A, pitchbooks) in the first paragraph",
      "Open with one concrete deal result rather than a statement of interest",
      "List transactions by sector, size and your role, within confidentiality limits",
      "Mirror the employer's own wording for the role so ATS and recruiters see a direct match",
      "Close with a specific, polite call to action such as a conversation or interview"
    ],
    "donts": [
      "Don't open with \"I am writing to apply for...\" — start with a result",
      "Don't repeat your CV line by line; add context the CV cannot carry",
      "Don't claim skills you cannot discuss in an interview for a investment banker role",
      "Don't send one generic letter to every employer — change the company and role details each time",
      "Don't exceed one page or about 300 words"
    ],
    "keyPoints": [
      "One quantified achievement: contributed to a mandate size, a pitchbook win or a model you built",
      "Why this specific company, referencing its product, clients or recent news",
      "A short line on your toolset and certifications relevant to the role",
      "Availability and notice period if the employer asks"
    ],
    "sampleOpening": "As an analyst at [Firm], I supported a $[X] million sell-side mandate in the [sector] sector, building the DCF, comparable company analysis and management presentation, and I would like to continue that work at [Target Bank].",
    "sampleBody": "I build three-statement, DCF and LBO models, prepare pitchbooks and information memoranda, and support due diligence and buyer outreach. I work under tight deadlines, am accurate with Excel and PowerPoint, and use Bloomberg and CapIQ for market data. I am CFA Level [X] and hold a [degree] from [Institute].",
    "sampleClosing": "I would value the opportunity to discuss how I can contribute to your team's coverage of [sector]. Thank you for considering my application.",
    "faqs": [
      {
        "q": "Do I need a cover letter for a investment banker job in India?",
        "a": "It is optional for most high-volume hiring, but a short, tailored cover letter helps when the employer asks for one, when you are changing sector or city, or when applying directly to a hiring manager. Keep it under 300 words and focused on a single measurable result."
      },
      {
        "q": "What should a investment banker cover letter highlight?",
        "a": "Show deal exposure by sector and size (without breaching confidentiality), the models you built, and academic or CFA credentials. Precision and brevity matter more than adjectives."
      }
    ]
  },
  "ios-developer": {
    "dos": [
      "Name the tools or methods from the job description (Swift, SwiftUI, Combine) in the first paragraph",
      "Open with one concrete mobile result rather than a statement of interest",
      "Link to live App Store apps and mention crash-free rate or ratings",
      "Mirror the employer's own wording for the role so ATS and recruiters see a direct match",
      "Close with a specific, polite call to action such as a conversation or interview"
    ],
    "donts": [
      "Don't open with \"I am writing to apply for...\" — start with a result",
      "Don't repeat your CV line by line; add context the CV cannot carry",
      "Don't claim skills you cannot discuss in an interview for a ios developer role",
      "Don't send one generic letter to every employer — change the company and role details each time",
      "Don't exceed one page or about 300 words"
    ],
    "keyPoints": [
      "One quantified achievement: improved crash-free sessions, launch time or App Store rating",
      "Why this specific company, referencing its product, clients or recent news",
      "A short line on your toolset and certifications relevant to the role",
      "Availability and notice period if the employer asks"
    ],
    "sampleOpening": "I led the SwiftUI rewrite of [App] at [Company], raising our crash-free session rate to 99.8% and improving our App Store rating from 4.1 to 4.6, and I would like to build the same quality at [Target Company].",
    "sampleBody": "I develop in Swift with SwiftUI and UIKit, using MVVM, Combine, Core Data and REST APIs. I write unit and UI tests, use Instruments for profiling, and manage releases through TestFlight and the App Store. I collaborate closely with designers on Human Interface Guidelines and accessibility.",
    "sampleClosing": "I would welcome the opportunity to demo my apps and discuss how I can strengthen [Target Company]'s iOS product.",
    "faqs": [
      {
        "q": "Do I need a cover letter for a ios developer job in India?",
        "a": "It is optional for most high-volume hiring, but a short, tailored cover letter helps when the employer asks for one, when you are changing sector or city, or when applying directly to a hiring manager. Keep it under 300 words and focused on a single measurable result."
      },
      {
        "q": "What should a ios developer cover letter highlight?",
        "a": "Link published apps, quote crash-free rate, launch time or rating improvements, and name the architecture and testing practices you use."
      }
    ]
  },
  "logistics-manager": {
    "dos": [
      "Name the tools or methods from the job description (WMS, TMS, last-mile) in the first paragraph",
      "Open with one concrete supply chain result rather than a statement of interest",
      "Reference volumes handled, fleet size, SLA adherence and cost per shipment",
      "Mirror the employer's own wording for the role so ATS and recruiters see a direct match",
      "Close with a specific, polite call to action such as a conversation or interview"
    ],
    "donts": [
      "Don't open with \"I am writing to apply for...\" — start with a result",
      "Don't repeat your CV line by line; add context the CV cannot carry",
      "Don't claim skills you cannot discuss in an interview for a logistics manager role",
      "Don't send one generic letter to every employer — change the company and role details each time",
      "Don't exceed one page or about 300 words"
    ],
    "keyPoints": [
      "One quantified achievement: reduced cost per shipment, improved on-time delivery or raised warehouse throughput",
      "Why this specific company, referencing its product, clients or recent news",
      "A short line on your toolset and certifications relevant to the role",
      "Availability and notice period if the employer asks"
    ],
    "sampleOpening": "At [Company] I reduced last-mile cost per shipment by 14% and lifted on-time delivery from 91% to 97% across [N] warehouses, which is the operational outcome I want to deliver as [Target Company]'s Logistics Manager.",
    "sampleBody": "I manage warehouse, fleet and last-mile operations using WMS and TMS platforms, route planning, vendor contracts and inventory controls. I lead teams of [N], track KPIs such as OTIF, cost per order and damage rate, and run weekly reviews with transporters and customers.",
    "sampleClosing": "I would be glad to discuss how I can improve service levels and cost efficiency for [Target Company]'s network. I am available for a conversation at your convenience.",
    "faqs": [
      {
        "q": "Do I need a cover letter for a logistics manager job in India?",
        "a": "It is optional for most high-volume hiring, but a short, tailored cover letter helps when the employer asks for one, when you are changing sector or city, or when applying directly to a hiring manager. Keep it under 300 words and focused on a single measurable result."
      },
      {
        "q": "What should a logistics manager cover letter highlight?",
        "a": "Quantify volumes, network size, OTIF, cost per shipment and inventory accuracy. Name the systems you have run and the vendors you have managed."
      }
    ]
  },
  "machine-learning-engineer": {
    "dos": [
      "Name the tools or methods from the job description (Python, PyTorch, MLflow) in the first paragraph",
      "Open with one concrete ML result rather than a statement of interest",
      "Cover the path from experiment to production: serving, monitoring and retraining",
      "Mirror the employer's own wording for the role so ATS and recruiters see a direct match",
      "Close with a specific, polite call to action such as a conversation or interview"
    ],
    "donts": [
      "Don't open with \"I am writing to apply for...\" — start with a result",
      "Don't repeat your CV line by line; add context the CV cannot carry",
      "Don't claim skills you cannot discuss in an interview for a machine learning engineer role",
      "Don't send one generic letter to every employer — change the company and role details each time",
      "Don't exceed one page or about 300 words"
    ],
    "keyPoints": [
      "One quantified achievement: improved a model metric and the business outcome it drove in production",
      "Why this specific company, referencing its product, clients or recent news",
      "A short line on your toolset and certifications relevant to the role",
      "Availability and notice period if the employer asks"
    ],
    "sampleOpening": "I built and deployed a ranking model at [Company] that improved click-through by 9% and cut inference latency to under 80 ms, and I would like to apply the same production focus at [Target Company].",
    "sampleBody": "I work in Python with PyTorch, scikit-learn and SQL, track experiments with MLflow, and deploy on Docker, Kubernetes and AWS SageMaker. I build feature pipelines, set up offline and online evaluation, monitor drift and own retraining schedules. I document trade-offs so product teams understand model behaviour.",
    "sampleClosing": "I would welcome a technical discussion on how I can help [Target Company] ship reliable machine learning systems.",
    "faqs": [
      {
        "q": "Do I need a cover letter for a machine learning engineer job in India?",
        "a": "It is optional for most high-volume hiring, but a short, tailored cover letter helps when the employer asks for one, when you are changing sector or city, or when applying directly to a hiring manager. Keep it under 300 words and focused on a single measurable result."
      },
      {
        "q": "What should a machine learning engineer cover letter highlight?",
        "a": "Pair a model metric (AUC, precision, latency) with the business outcome, and show you can deploy and monitor models, not only train them."
      }
    ]
  },
  "network-engineer": {
    "dos": [
      "Name the tools or methods from the job description (Cisco, BGP, OSPF, firewalls) in the first paragraph",
      "Open with one concrete network result rather than a statement of interest",
      "Name certifications such as CCNP and the scale of the network you operate",
      "Mirror the employer's own wording for the role so ATS and recruiters see a direct match",
      "Close with a specific, polite call to action such as a conversation or interview"
    ],
    "donts": [
      "Don't open with \"I am writing to apply for...\" — start with a result",
      "Don't repeat your CV line by line; add context the CV cannot carry",
      "Don't claim skills you cannot discuss in an interview for a network engineer role",
      "Don't send one generic letter to every employer — change the company and role details each time",
      "Don't exceed one page or about 300 words"
    ],
    "keyPoints": [
      "One quantified achievement: improved uptime, reduced incident count or completed a migration without downtime",
      "Why this specific company, referencing its product, clients or recent news",
      "A short line on your toolset and certifications relevant to the role",
      "Availability and notice period if the employer asks"
    ],
    "sampleOpening": "I maintained 99.99% uptime across a [N]-site MPLS and SD-WAN network at [Company] and completed a BGP migration with zero downtime, experience I would like to bring to [Target Company]'s Network Engineer role.",
    "sampleBody": "I configure and troubleshoot Cisco routers and switches, BGP, OSPF, VPNs and Palo Alto firewalls, and monitor networks with standard tooling. I follow ITIL change management, document topologies and run post-incident reviews. I hold CCNP and am comfortable with on-call rotations.",
    "sampleClosing": "I would appreciate the opportunity to discuss how I can support the reliability and security of [Target Company]'s network.",
    "faqs": [
      {
        "q": "Do I need a cover letter for a network engineer job in India?",
        "a": "It is optional for most high-volume hiring, but a short, tailored cover letter helps when the employer asks for one, when you are changing sector or city, or when applying directly to a hiring manager. Keep it under 300 words and focused on a single measurable result."
      },
      {
        "q": "What should a network engineer cover letter highlight?",
        "a": "State certifications, network scale (sites, devices, throughput) and measurable uptime, incident reduction or migration results."
      }
    ]
  },
  "pharmacist": {
    "dos": [
      "Name the tools or methods from the job description (dispensing, pharmacovigilance, counselling) in the first paragraph",
      "Open with one concrete patient safety result rather than a statement of interest",
      "Mention your registration with the State Pharmacy Council and settings you have worked in",
      "Mirror the employer's own wording for the role so ATS and recruiters see a direct match",
      "Close with a specific, polite call to action such as a conversation or interview"
    ],
    "donts": [
      "Don't open with \"I am writing to apply for...\" — start with a result",
      "Don't repeat your CV line by line; add context the CV cannot carry",
      "Don't claim skills you cannot discuss in an interview for a pharmacist role",
      "Don't send one generic letter to every employer — change the company and role details each time",
      "Don't exceed one page or about 300 words"
    ],
    "keyPoints": [
      "One quantified achievement: dispensing accuracy, counselling volume or compliance audit results",
      "Why this specific company, referencing its product, clients or recent news",
      "A short line on your toolset and certifications relevant to the role",
      "Availability and notice period if the employer asks"
    ],
    "sampleOpening": "As a registered pharmacist with [N] years of hospital dispensing experience, I maintained zero dispensing errors across [X] prescriptions a month, and I would like to bring that accuracy to [Target Organisation].",
    "sampleBody": "I verify prescriptions, check drug interactions, counsel patients on dosage and adverse effects, manage inventory and expiry control, and maintain controlled-substance records in line with Drugs and Cosmetics Act requirements. I also support pharmacovigilance reporting and audit readiness. I am registered with the [State] Pharmacy Council.",
    "sampleClosing": "I would be happy to discuss how I can support patient safety and compliance at [Target Organisation].",
    "faqs": [
      {
        "q": "Do I need a cover letter for a pharmacist job in India?",
        "a": "It is optional for most high-volume hiring, but a short, tailored cover letter helps when the employer asks for one, when you are changing sector or city, or when applying directly to a hiring manager. Keep it under 300 words and focused on a single measurable result."
      },
      {
        "q": "What should a pharmacist cover letter highlight?",
        "a": "Include registration details, the setting (hospital, retail, pharma), accuracy and compliance outcomes, and your counselling experience."
      }
    ]
  },
  "react-developer": {
    "dos": [
      "Name the tools or methods from the job description (React, TypeScript, Next.js) in the first paragraph",
      "Open with one concrete front-end result rather than a statement of interest",
      "Link to a deployed project and mention performance or accessibility results",
      "Mirror the employer's own wording for the role so ATS and recruiters see a direct match",
      "Close with a specific, polite call to action such as a conversation or interview"
    ],
    "donts": [
      "Don't open with \"I am writing to apply for...\" — start with a result",
      "Don't repeat your CV line by line; add context the CV cannot carry",
      "Don't claim skills you cannot discuss in an interview for a react developer role",
      "Don't send one generic letter to every employer — change the company and role details each time",
      "Don't exceed one page or about 300 words"
    ],
    "keyPoints": [
      "One quantified achievement: improved Core Web Vitals, bundle size or component reuse",
      "Why this specific company, referencing its product, clients or recent news",
      "A short line on your toolset and certifications relevant to the role",
      "Availability and notice period if the employer asks"
    ],
    "sampleOpening": "I rebuilt [Company]'s dashboard in React and TypeScript, cutting bundle size by 38% and improving Largest Contentful Paint from 3.8 to 1.9 seconds, the sort of front-end performance work I want to do at [Target Company].",
    "sampleBody": "I build React applications with Next.js, Redux Toolkit or React Query, and test with Jest and React Testing Library. I care about accessibility, design-system reuse and Core Web Vitals, and I work with designers and API teams to ship features steadily.",
    "sampleClosing": "I would welcome the chance to discuss my work and how I can contribute to [Target Company]'s front end. My GitHub and live projects are linked on my CV.",
    "faqs": [
      {
        "q": "Do I need a cover letter for a react developer job in India?",
        "a": "It is optional for most high-volume hiring, but a short, tailored cover letter helps when the employer asks for one, when you are changing sector or city, or when applying directly to a hiring manager. Keep it under 300 words and focused on a single measurable result."
      },
      {
        "q": "What should a react developer cover letter highlight?",
        "a": "Show a deployed project, a performance or accessibility improvement with numbers, and your state-management and testing approach."
      }
    ]
  },
  "sales-executive": {
    "dos": [
      "Name the tools or methods from the job description (lead generation, CRM, negotiation) in the first paragraph",
      "Open with one concrete sales result rather than a statement of interest",
      "Mention target achievement percentage and the territory or segment you covered",
      "Mirror the employer's own wording for the role so ATS and recruiters see a direct match",
      "Close with a specific, polite call to action such as a conversation or interview"
    ],
    "donts": [
      "Don't open with \"I am writing to apply for...\" — start with a result",
      "Don't repeat your CV line by line; add context the CV cannot carry",
      "Don't claim skills you cannot discuss in an interview for a sales executive role",
      "Don't send one generic letter to every employer — change the company and role details each time",
      "Don't exceed one page or about 300 words"
    ],
    "keyPoints": [
      "One quantified achievement: achieved or exceeded target consistently with numbers",
      "Why this specific company, referencing its product, clients or recent news",
      "A short line on your toolset and certifications relevant to the role",
      "Availability and notice period if the employer asks"
    ],
    "sampleOpening": "I achieved 118% of my quarterly target at [Company] by converting [N] new accounts in [territory], and I am keen to bring that consistency to [Target Company] as a Sales Executive.",
    "sampleBody": "I generate leads through cold calls, referrals and field visits, qualify them in the CRM (Salesforce or Zoho), deliver product demonstrations and negotiate terms. I track my funnel weekly, follow up diligently and maintain strong client relationships that lead to repeat orders and upselling.",
    "sampleClosing": "I would be glad to meet and discuss how I can help [Target Company] reach its sales targets in [region].",
    "faqs": [
      {
        "q": "Do I need a cover letter for a sales executive job in India?",
        "a": "It is optional for most high-volume hiring, but a short, tailored cover letter helps when the employer asks for one, when you are changing sector or city, or when applying directly to a hiring manager. Keep it under 300 words and focused on a single measurable result."
      },
      {
        "q": "What should a sales executive cover letter highlight?",
        "a": "Quote target vs achievement, number of accounts won, territory covered and repeat-business rate. Recruiters scan for numbers first."
      }
    ]
  },
  "sap-consultant": {
    "dos": [
      "Name the tools or methods from the job description (S/4HANA, FICO, MM, SD) in the first paragraph",
      "Open with one concrete ERP result rather than a statement of interest",
      "Specify the SAP module, number of end-to-end implementations and go-live roles",
      "Mirror the employer's own wording for the role so ATS and recruiters see a direct match",
      "Close with a specific, polite call to action such as a conversation or interview"
    ],
    "donts": [
      "Don't open with \"I am writing to apply for...\" — start with a result",
      "Don't repeat your CV line by line; add context the CV cannot carry",
      "Don't claim skills you cannot discuss in an interview for a sap consultant role",
      "Don't send one generic letter to every employer — change the company and role details each time",
      "Don't exceed one page or about 300 words"
    ],
    "keyPoints": [
      "One quantified achievement: delivered a go-live on schedule, a migration or a measurable process improvement",
      "Why this specific company, referencing its product, clients or recent news",
      "A short line on your toolset and certifications relevant to the role",
      "Availability and notice period if the employer asks"
    ],
    "sampleOpening": "I led the SAP FICO workstream on an S/4HANA migration for [Client], delivering go-live on schedule with zero critical defects, and I would like to bring that delivery record to [Target Company].",
    "sampleBody": "I handle requirement gathering, blueprinting, configuration, integration testing, UAT, cutover and hypercare using SAP Activate. I work across FICO, MM and SD integrations, write functional specifications for ABAP developers, and train key users. I hold SAP [certification].",
    "sampleClosing": "I would value the opportunity to discuss how my implementation and support experience can help [Target Company]'s SAP programme.",
    "faqs": [
      {
        "q": "Do I need a cover letter for a sap consultant job in India?",
        "a": "It is optional for most high-volume hiring, but a short, tailored cover letter helps when the employer asks for one, when you are changing sector or city, or when applying directly to a hiring manager. Keep it under 300 words and focused on a single measurable result."
      },
      {
        "q": "What should a sap consultant cover letter highlight?",
        "a": "Specify modules, number of full-cycle implementations, S/4HANA experience, certifications and your role in go-live and hypercare."
      }
    ]
  },
  "scrum-master": {
    "dos": [
      "Name the tools or methods from the job description (Scrum, SAFe, Jira) in the first paragraph",
      "Open with one concrete agile delivery result rather than a statement of interest",
      "Describe team size, sprint cadence and delivery metrics you improved",
      "Mirror the employer's own wording for the role so ATS and recruiters see a direct match",
      "Close with a specific, polite call to action such as a conversation or interview"
    ],
    "donts": [
      "Don't open with \"I am writing to apply for...\" — start with a result",
      "Don't repeat your CV line by line; add context the CV cannot carry",
      "Don't claim skills you cannot discuss in an interview for a scrum master role",
      "Don't send one generic letter to every employer — change the company and role details each time",
      "Don't exceed one page or about 300 words"
    ],
    "keyPoints": [
      "One quantified achievement: raised predictability, cut cycle time or increased release frequency",
      "Why this specific company, referencing its product, clients or recent news",
      "A short line on your toolset and certifications relevant to the role",
      "Availability and notice period if the employer asks"
    ],
    "sampleOpening": "I coached a team of [N] engineers at [Company] from monthly to fortnightly releases while improving sprint predictability from 62% to 90%, and I would like to help [Target Company] teams deliver the same way.",
    "sampleBody": "I facilitate planning, daily scrums, reviews and retrospectives, remove impediments, and track metrics such as velocity, cycle time and defect escape rate in Jira. I coach product owners on backlog quality, support scaled frameworks such as SAFe, and hold CSM or PSM certification.",
    "sampleClosing": "I would welcome a discussion on how I can improve delivery flow and team health at [Target Company].",
    "faqs": [
      {
        "q": "Do I need a cover letter for a scrum master job in India?",
        "a": "It is optional for most high-volume hiring, but a short, tailored cover letter helps when the employer asks for one, when you are changing sector or city, or when applying directly to a hiring manager. Keep it under 300 words and focused on a single measurable result."
      },
      {
        "q": "What should a scrum master cover letter highlight?",
        "a": "Cover team size, cadence, metrics you moved (predictability, cycle time, release frequency) and certifications such as CSM, PSM or SAFe."
      }
    ]
  }
};
