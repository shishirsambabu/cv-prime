import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'How to Write a Resume in India 2026 — Step-by-Step Guide | CV Prime',
  description:
    'Complete guide on how to write a resume in India in 2026. Step-by-step: contact info, summary, work experience, skills, education, ATS formatting. With examples and free builder.',
  alternates: { canonical: 'https://cv-prime.in/resume-tips/how-to-write-a-resume' },
  keywords: [
    'how to write a resume',
    'how to write a resume india',
    'how to make a resume',
    'resume writing guide india',
    'resume writing tips india 2026',
    'how to write a cv india',
    'write resume step by step',
    'resume writing for freshers india',
  ],
  openGraph: {
    title: 'How to Write a Resume in India 2026 — Step-by-Step Guide | CV Prime',
    description:
      'Complete guide on how to write a resume in India in 2026. Step-by-step: contact info, summary, work experience, skills, education, ATS formatting. With examples and free builder.',
    url: 'https://cv-prime.in/resume-tips/how-to-write-a-resume',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'How to Write a Resume in India — CV Prime' }],
  },
};

const steps = [
  {
    number: '01',
    title: 'Choose the right resume format',
    content:
      'For most Indian job seekers with 2+ years of experience, reverse-chronological is the standard — and the only format that ATS systems reliably parse. List your most recent job first and work backwards. The functional format (grouping skills instead of listing jobs) is rarely used in India and is viewed with suspicion by recruiters who assume candidates are hiding gaps. If you have under 1 year of experience, a hybrid format that leads with a strong skills block followed by experience works well. The one-page rule applies for freshers and candidates up to 5 years of experience; two pages is acceptable for 5+ years.',
  },
  {
    number: '02',
    title: 'Add your contact information',
    content:
      'Your contact block goes at the very top. Include your full name (in the largest font on the page, typically 18–22pt), your mobile number (with +91 prefix for international applications), a professional email address (firstname.lastname@gmail.com — never a nickname), and your city (not your full home address — city alone is sufficient and avoids discrimination). For tech roles, add your LinkedIn URL and GitHub profile. For design roles, add a portfolio URL. Remove your date of birth, father\'s name, religion, and marital status — these are not required and open you to unnecessary bias, despite what older Indian resume templates suggest.',
  },
  {
    number: '03',
    title: 'Write a powerful professional summary',
    content:
      'A professional summary sits just below your contact block and is your first impression. It should be 2–4 lines long and follow this formula: Line 1 — your title, years of experience, and defining credential or domain. Line 2 — your single biggest career achievement, quantified. Line 3 — what you bring to this specific role or company. For example: "Senior Software Engineer with 5 years building high-scale fintech systems at Groww and PhonePe. Led a payments reconciliation engine that processes ₹500Cr in daily transactions with 99.99% uptime. Seeking a Principal Engineer role where infrastructure design and distributed systems are at the core." Freshers should replace achievement lines with their CGPA, best project outcome, or strongest internship result. Do not write a career objective — it is outdated and recruiter-blind.',
  },
  {
    number: '04',
    title: 'Document your work experience',
    content:
      'The work experience section carries roughly 70% of your resume\'s weight with recruiters and ATS. List roles in reverse-chronological order. For each role, include the company name, your job title, the city, and the date range (month + year — never year-only). Under each role write 3–5 achievement bullets starting with a strong action verb: "Engineered", "Led", "Grew", "Reduced", "Launched". Every bullet should follow the CAR structure — Context, Action, Result — and include a metric wherever possible: percentages, revenue figures (in ₹), time saved, scale of users, or team size. Avoid duty statements like "Responsible for managing the team." Replace them with outcomes: "Managed a team of 6 engineers to ship a real-time notifications system adopted by 1.2M monthly active users within 3 months." For roles more than 10 years ago, 1–2 lines are sufficient.',
  },
  {
    number: '05',
    title: 'List your education correctly',
    content:
      'For candidates with 3+ years of experience, education sits near the bottom of the resume. For freshers or candidates under 2 years of experience, education moves to the top — right after the summary — because it is your strongest credential. For each degree, include the full degree name (B.Tech in Computer Science, MBA in Finance), the university or college name, the year of graduation, and your CGPA if it is 7.5 or above. Do not include CGPA if it is below 7.5 — omission is not dishonesty, it is prioritisation. If you have certifications from the same institution or if your course project is particularly strong, you can add a 1-line note under the degree. 12th board marks are only relevant for freshers; drop them after 3 years of experience.',
  },
  {
    number: '06',
    title: 'Add a skills section that ATS can read',
    content:
      'A dedicated skills section is critical in India because most mid-size companies use ATS software that keyword-matches your resume against the job description before a human ever sees it. Group your skills by category rather than listing them randomly: Technical Skills (Python, SQL, React, AWS), Tools (Jira, Figma, Salesforce, Tableau), Languages (English, Hindi, Tamil), and Soft Skills (used sparingly — only add soft skills that are genuinely differentiated, not generic ones like "team player"). Do not rate your skills with stars or bars — ATS cannot read visual ratings and recruiters find them unreliable. Scan the job description for skill keywords and mirror the exact terminology used: if the JD says "Node.js", do not write "NodeJS".',
  },
  {
    number: '07',
    title: 'Include certifications relevant to the role',
    content:
      'Certifications are taken seriously by Indian recruiters, particularly in tech, finance, and marketing. AWS Certified Solutions Architect, Google Data Analytics, PMP, CFA Level 1, Google Ads, HubSpot Inbound, Scrum Master — any certification from a recognised body adds weight. List each certification with: the certification name, the issuing body, and the year obtained (or "In Progress" if you are currently completing it). Place certifications in their own section, just below Education, or immediately above Education for freshers who have multiple certifications but limited experience. Do not list MOOCs (Coursera, Udemy) unless the course is from a top institution like IIM, IIT, or Stanford — general MOOC certificates are table stakes and add clutter.',
  },
  {
    number: '08',
    title: 'Add projects (essential for freshers)',
    content:
      'If you are a fresher or have under 2 years of experience, a Projects section can compensate for limited work experience. Include 2–4 projects: ideally one personal project, one academic project, and one internship project. For each, write the project name, the tech stack or methodology used, and a 1-line impact statement: "Built a Django REST API and React frontend for a college event management system used by 2,400 students." If your project is on GitHub, add the link. For experienced candidates, projects are optional — only include them if they demonstrate a skill you cannot show through work experience alone (for example, an open-source contribution or a published research project).',
  },
  {
    number: '09',
    title: 'Check ATS compatibility before you send',
    content:
      'ATS incompatibility is the silent resume killer in India. Common ATS systems used by Indian companies include Taleo, Workday, Greenhouse, and iCIMS — none of them reliably parse tables, text boxes, columns, headers/footers, or images. Use a single-column layout with clear section headings (Experience, Education, Skills — not creative alternatives like "My Journey" or "What I Have Done"). Use standard fonts: Calibri, Arial, Georgia, or Garamond at 10–12pt. Avoid icons in the contact section — email icons before email addresses confuse parsers. Do not embed your contact info in the header element of a Word document. Run your resume through an ATS checker (CV Prime\'s is free) before every application.',
  },
  {
    number: '10',
    title: 'Export as a clean PDF',
    content:
      'Always send your resume as a PDF — not a Word document, not a JPEG, not a link to a Google Doc unless the JD specifically asks for it. PDF preserves your formatting across all devices and operating systems. Export directly from your resume builder or word processor as a PDF; do not print-to-PDF from a browser, which can introduce rendering artefacts. Name the file clearly: FirstName-LastName-Resume.pdf or FirstName-LastName-SoftwareEngineer.pdf. Keep the file size under 2MB — anything larger suggests embedded images or unnecessary graphics. Do not password-protect the PDF; ATS systems cannot open protected files and will discard your application.',
  },
];

const mistakes = [
  {
    mistake: 'Using a photo on the resume',
    detail:
      'Photos are not required for Indian resumes and introduce unconscious bias. Most modern Indian companies explicitly instruct candidates not to include photos. Leave it out unless you are applying for a role where appearance is directly relevant (acting, modelling, hosting).',
  },
  {
    mistake: 'Including a career objective instead of a professional summary',
    detail:
      'Career objectives ("I wish to obtain a challenging position...") are 20 years out of date. Recruiters skip them entirely. Replace it with a 2–4 line professional summary that leads with your title, experience, and top achievement.',
  },
  {
    mistake: 'Writing duties instead of achievements',
    detail:
      '"Managed social media accounts" tells a recruiter nothing. "Grew Instagram followers from 12k to 85k in 9 months while reducing cost-per-follower by 44%" tells them everything. Every bullet should start with an action verb and end with a result.',
  },
  {
    mistake: 'Listing irrelevant personal information',
    detail:
      'Date of birth, father\'s name, nationality, marital status, religion, and blood group are not required on modern Indian resumes. Listing them wastes space and opens you to bias. Remove them.',
  },
  {
    mistake: 'Using a creative or multi-column template without checking ATS',
    detail:
      'Canva templates with side columns, infographic-style skill bars, and timeline graphics look appealing but are invisible to ATS. Your skills and experience literally do not exist in the parsed version of your resume. Use a clean single-column template.',
  },
  {
    mistake: 'Sending one generic resume to every company',
    detail:
      'A resume that is not tailored to the job description will fail ATS keyword matching. Spend 10 minutes per application to mirror the exact keywords from the JD in your skills section and summary. This alone can double your interview rate.',
  },
  {
    mistake: 'Listing every job you have ever held',
    detail:
      'Irrelevant early-career jobs (a delivery role before you became a data analyst, an unrelated internship from 8 years ago) add length without adding value. Keep only the roles that are relevant to your current career direction.',
  },
  {
    mistake: 'Exaggerating or lying about skills or achievements',
    detail:
      'Indian hiring processes increasingly include background verification (BGV) through firms like AuthBridge and IDfy. Inflated CGPA, fabricated certifications, and false employment dates are caught routinely. The downside — offer rescission, termination, or industry blacklisting — far outweighs any short-term gain.',
  },
];

const faqs = [
  {
    q: 'How long should a resume be in India?',
    a: 'One page for freshers and candidates with up to 5 years of experience. Two pages for candidates with 5–15 years of experience. Three pages is acceptable only for very senior professionals (VP level and above, or academics with publication lists). A two-page resume does not hurt you — but a one-page resume that is padded with tiny fonts and zero margins does. Prioritise readability over fitting everything on one page.',
  },
  {
    q: 'Should I include a photo on my resume?',
    a: 'No. Photos are not required in India for the vast majority of roles and are actively discouraged by most corporate HR policies. Including a photo wastes valuable space, can introduce unconscious bias, and suggests you are using an outdated template. The only exceptions are roles in entertainment, hospitality front-of-house, or modelling where physical appearance is a documented job requirement.',
  },
  {
    q: 'What font should I use for a resume in India?',
    a: 'Use Calibri, Arial, Garamond, or Georgia at 10–12pt for body text and 14–16pt for section headings. These fonts are ATS-safe and render consistently across all devices. Avoid decorative fonts (Lobster, Playfair Display for body text), fonts that render inconsistently (Times New Roman in some ATS versions), and anything below 10pt which becomes unreadable in print. The font matters less than you think — ATS does not read fonts; human recruiters do, and they want speed and clarity over style.',
  },
  {
    q: 'How do I write a resume with no experience?',
    a: 'Focus on what you do have: education (CGPA, relevant coursework, academic projects), internships (even 1-month stints count), college activities (club leadership, event organisation, competitions), personal projects (apps, websites, research papers, YouTube channels, freelance work), and certifications. Structure your resume as: Summary → Education → Projects → Internships → Certifications → Skills. Write achievement-oriented bullets even for projects: "Built a Python web scraper that aggregated 50,000 job listings daily and reduced manual data collection time by 8 hours/week" is far stronger than "Worked on a Python project".',
  },
  {
    q: 'How do I make my resume ATS-friendly?',
    a: 'Use a single-column layout with no tables, text boxes, or columns. Use standard section headings (Experience, Education, Skills, Certifications). Use a readable font at 10–12pt. Include the exact keywords from the job description in your skills section and bullet points — not paraphrased versions, the exact words. Export as a PDF from a clean template, not from Canva or Google Slides. Remove graphics, icons, photos, and QR codes. Test your resume with CV Prime\'s free ATS checker before sending every application.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Write a Resume in India',
  description:
    'A step-by-step guide to writing a professional resume in India in 2026 — covering format, contact info, professional summary, work experience, education, skills, certifications, projects, ATS compatibility, and PDF export.',
  step: steps.map((s) => ({
    '@type': 'HowToStep',
    name: `Step ${s.number}: ${s.title}`,
    text: s.content,
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Resume Tips', item: 'https://cv-prime.in/resume-tips' },
    { '@type': 'ListItem', position: 3, name: 'How to Write a Resume', item: 'https://cv-prime.in/resume-tips/how-to-write-a-resume' },
  ],
};

export default function HowToWriteAResumePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/resume-tips" className="hover:text-white">Resume Tips</Link><span>/</span>
            <span className="text-white">How to Write a Resume</span>
          </nav>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            How to write a resume in India — step-by-step guide 2026
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            A complete, India-specific guide covering every section of a resume — from choosing the right format to exporting ATS-ready PDF. Whether you are a fresher writing your first resume or a 10-year professional overhauling your CV, these 10 steps will get you interview-ready.
          </p>
          <Link
            href="/signup?next=/ai-cv"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong transition"
          >
            Build my resume with AI <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Steps */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">10 steps to write a resume in India</h2>
          <p className="mt-3 text-slate-500">Follow these steps in order. Each one builds on the last.</p>
          <div className="mt-10 space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 font-display text-sm font-bold text-brand">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-950">{step.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{step.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Common resume mistakes in India — and how to fix them</h2>
          <p className="mt-3 text-slate-500">These eight mistakes cost Indian candidates interviews every day. Check your resume against each one.</p>
          <div className="mt-8 space-y-4">
            {mistakes.map((item) => (
              <div key={item.mistake} className="rounded-2xl border border-red-100 bg-red-50 p-5">
                <div className="flex items-start gap-4">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <div>
                    <p className="font-display text-base font-bold text-red-800">{item.mistake}</p>
                    <p className="mt-1.5 text-sm leading-6 text-red-700">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick checklist */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Resume writing checklist — before you send</h2>
          <p className="mt-3 text-slate-500">Run through this list on every application. Tick every box before you hit send.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              'Name in the largest font at the top',
              'Mobile, professional email, and city included',
              'LinkedIn URL is up to date and matches resume',
              'Professional summary leads with title + years + outcome',
              'Work experience is in reverse-chronological order',
              'Every bullet starts with an action verb',
              'At least 60% of bullets include a measurable result',
              'CGPA is included only if 7.5 or above',
              'Skills section uses exact keywords from the JD',
              'No tables, no text boxes, no columns in layout',
              'Font is Calibri, Arial, Georgia, or Garamond at 10–12pt',
              'File exported as PDF, named FirstName-LastName-Resume.pdf',
              'File size is under 2MB',
              'Spell-checked and read aloud once for awkward phrasing',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-green-100 bg-green-50 p-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                <p className="text-sm text-green-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">How to write a resume — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold text-slate-500 uppercase tracking-wider">Related guides and tools</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/resume-tips', label: '← All resume tips' },
              { href: '/resume-builder', label: 'AI resume builder' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/resume-tips/resume-summary', label: 'How to write a resume summary' },
              { href: '/resume-tips/action-verbs', label: 'Action verbs for resumes' },
              { href: '/resume-tips/skills-section', label: 'Skills section guide' },
              { href: '/cv-examples', label: 'Resume examples by role' },
              { href: '/fresher-resume', label: 'Fresher resume guide' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand hover:text-brand transition"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">Write your resume in 10 minutes — not 10 hours</h2>
          <p className="mt-4 text-slate-300">
            CV Prime&apos;s AI resume builder follows every step in this guide automatically. Paste your experience, pick a role, and get a fully formatted, ATS-ready PDF — free to start.
          </p>
          <Link
            href="/signup?next=/ai-cv"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong transition"
          >
            Build my resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build my resume with AI" message="Follow all 10 steps automatically — free resume builder" />
    </main>
  );
}
