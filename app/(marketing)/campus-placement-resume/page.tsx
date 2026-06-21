import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, GraduationCap, Building2, Target } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Campus Placement Resume Guide 2026 — Crack TCS, Infosys & Startups | CV Prime',
  description:
    'Complete campus placement resume guide for India 2026. What to include, how to beat ATS at TCS, Infosys, Wipro, Accenture, and startups. Free ATS resume builder for placement season.',
  alternates: { canonical: 'https://cv-prime.in/campus-placement-resume' },
  keywords: [
    'campus placement resume',
    'campus recruitment resume',
    'placement resume india',
    'resume for campus placement',
    'placement season resume',
    'campus drive resume',
    'resume for TCS placement',
    'resume for Infosys placement',
    'resume for wipro placement',
    'engineering campus placement resume',
    'placement resume format india',
    'campus recruitment cv',
    'off campus placement resume',
    'btech campus placement resume',
  ],
  openGraph: {
    title: 'Campus Placement Resume Guide 2026 — Crack TCS, Infosys & Startups | CV Prime',
    description:
      'What to include on a campus placement resume. Beat ATS at TCS, Infosys, Wipro, Accenture, and top startups. Free template for placement season India 2026.',
    url: 'https://cv-prime.in/campus-placement-resume',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Campus Placement Resume Guide — CV Prime' }],
  },
};

const placementStats = [
  { stat: '2.5M+', label: 'engineering graduates compete in campus placements in India every year' },
  { stat: '75%', label: 'of campus placement resumes are rejected by ATS before a recruiter reads them' },
  { stat: '6 sec', label: 'average time a recruiter spends on first screening of a placement resume' },
  { stat: '10x', label: 'higher callback rate for ATS-optimised placement resumes vs generic templates' },
];

const companyTypes = [
  {
    type: 'IT Services (Mass Recruiters)',
    companies: 'TCS, Infosys, Wipro, HCL, Tech Mahindra, Accenture',
    packageRange: '₹3.5L – ₹9L CTC',
    atsSystem: 'Taleo, iSmartRecruit, Darwinbox',
    keyFocus: ['CGPA cut-off (usually 6.0–7.5)', 'Aptitude test scores', 'Clean, single-column resume', 'Programming languages (Java, Python, C++)', 'No employment gaps'],
    icon: Building2,
    color: 'blue',
  },
  {
    type: 'Product Companies & Startups',
    companies: 'Zomato, Swiggy, CRED, Meesho, Groww, PhonePe, Razorpay',
    packageRange: '₹12L – ₹45L+ CTC',
    atsSystem: 'Greenhouse, Lever, Workday',
    keyFocus: ['Strong projects with GitHub links', 'Internship experience at relevant companies', 'LeetCode / competitive coding profile', 'Impact-driven bullet points', 'System design awareness for senior roles'],
    icon: Target,
    color: 'violet',
  },
  {
    type: 'Consulting & Finance',
    companies: 'Deloitte, KPMG, EY, Accenture Strategy, Goldman Sachs, JP Morgan',
    packageRange: '₹8L – ₹30L CTC',
    atsSystem: 'Taleo, SAP SuccessFactors',
    keyFocus: ['Case study experience', 'Quantified achievements (not just responsibilities)', 'Leadership roles and clubs', 'GPA from top institutions (IIT/IIM/NIT/BITS preferred)', 'Communication skills evident from bullets'],
    icon: GraduationCap,
    color: 'amber',
  },
];

const resumeChecklist = [
  { section: 'Contact', items: ['Full name', 'Phone (active)', 'Professional email (firstname.lastname@gmail.com)', 'City', 'LinkedIn URL', 'GitHub URL (for tech roles)'] },
  { section: 'Education', items: ['Degree, branch, college name', 'CGPA (only if 7.0+ on 10-point scale)', 'Graduation year', 'Board/University name', 'Relevant coursework (optional for freshers)'] },
  { section: 'Skills', items: ['Programming languages', 'Frameworks and libraries', 'Databases and cloud tools', 'Soft skills (only if you have concrete examples)', 'Certifications with issuer and date'] },
  { section: 'Internships', items: ['Company name and role', 'Duration (month/year)', '2–3 impact bullets per internship', 'Technologies used', 'Quantified outcome if possible'] },
  { section: 'Projects', items: ['Project name and one-line description', 'Tech stack', 'GitHub / live link', 'Scale or impact (users, uptime, performance metric)', '2–3 bullet points max per project'] },
  { section: 'Achievements', items: ['Competitive coding ranks (LeetCode, HackerRank, CodeChef)', 'Hackathon wins or placements', 'Academic awards (merit list, scholarship)', 'Leadership roles (student body, college clubs)'] },
];

const placementTimeline = [
  { month: '6 months before', action: 'Build your resume baseline', detail: 'Draft your resume now — internship projects, skills, education. Don\'t wait for placement season to start. Early drafts catch gaps you still have time to fill.' },
  { month: '4 months before', action: 'Complete core internships/projects', detail: 'If you don\'t have an internship, complete 1–2 significant personal or open-source projects with GitHub links and measurable impact. Companies screen for this.' },
  { month: '3 months before', action: 'Tailor for company types', detail: 'Prepare 2 resume versions: one optimised for mass IT recruiters (keywords: Java, Python, DBMS, OOP) and one for product/startup companies (keywords match specific JDs).' },
  { month: '2 months before', action: 'Run ATS checks', detail: 'Use CV Prime\'s free ATS checker to score your resume against each company\'s recent JDs. Fix gaps before placement day.' },
  { month: '1 month before', action: 'Final polish and print-ready', detail: 'Export clean PDFs. Verify every link (GitHub, LinkedIn, portfolio) is live. Confirm formatting is ATS-safe — no tables, images, or columns.' },
  { month: 'Placement day', action: 'Tailor per company slot', detail: 'Use CV Prime to tailor your resume to each company\'s JD in under 5 minutes. Companies on the same day have different keyword priorities.' },
];

const commonMistakes = [
  {
    mistake: 'Using the same generic resume for every company',
    fix: 'Tailor keywords to each company\'s JD. TCS NQT screens for Java/C++/Python keywords. Startups screen for project impact and tech depth. One resume doesn\'t win all slots.',
    bad: 'Submitting identical resumes for TCS, Zomato, and Goldman Sachs campus drives',
    good: 'Using CV Prime to tailor your resume to each company\'s JD — even 3 keyword changes can move your ATS score from 54 to 78.',
  },
  {
    mistake: 'CGPA mentioned when it\'s below the company cut-off',
    fix: 'Know each company\'s CGPA cut-off before applying. If your CGPA is below it, focus on off-campus drives or companies without strict cut-offs. Mentioning a 5.8 when the cut-off is 6.5 leads to instant rejection.',
    bad: 'CGPA: 5.8 / 10 — listed prominently when applying to TCS (6.0 cut-off)',
    good: 'Either meet the cut-off or focus applications on companies without strict CGPA thresholds.',
  },
  {
    mistake: 'No GitHub link or portfolio for tech roles',
    fix: 'Product companies and startups specifically filter for GitHub activity. Even 2–3 well-documented projects dramatically improve your conversion in startup placement pools.',
    bad: 'Projects section lists "E-commerce website (React, Node.js)" with no link',
    good: 'E-commerce platform (React, Node.js, MongoDB) | github.com/yourname/ecomm | 500+ products, UPI payments, deployed on Vercel',
  },
  {
    mistake: 'Responsibility-led bullets with no outcomes',
    fix: 'Every bullet on a placement resume should answer: what did you do, with what tools, with what result? Recruiters seeing 300+ resumes skip bullets that just describe duties.',
    bad: '"Worked on backend development for college project"',
    good: '"Built REST API with Node.js and PostgreSQL handling 1K+ concurrent requests; deployed on AWS EC2 with 99.9% uptime during testing"',
  },
];

const faqs = [
  {
    q: 'What should a campus placement resume include?',
    a: 'A campus placement resume should include: Contact information (name, phone, email, LinkedIn, GitHub for tech roles), Education (degree, college, CGPA if 7.0+, graduation year), Technical skills (languages, frameworks, tools by category), Internships (company, role, impact bullets), Projects (name, tech stack, GitHub link, impact metric), and Achievements (competitive coding, hackathons, leadership). Keep it strictly to 1 page.',
  },
  {
    q: 'How is a campus placement resume different from a regular resume?',
    a: 'Campus placement resumes are reviewed at scale — TCS alone hires 40,000+ freshers annually. Mass recruiters use strict ATS filters and CGPA cut-offs. Your resume needs: (1) A skills section loaded with the exact keywords each company screens for, (2) Clean formatting with no tables or images that break ATS parsers, (3) CGPA front and centre (if above cut-off), (4) Projects quantified with tech stack and scale. General-purpose resumes with generic summaries fail placement ATS.',
  },
  {
    q: 'What CGPA is needed for campus placements in India?',
    a: 'Cut-offs vary by company: TCS NQT requires 60% or 6.0 CGPA; Infosys requires 65% or 6.5 CGPA; Wipro requires 60% or 6.0 CGPA; Accenture requires 60% or 6.0 CGPA. Product companies (Zomato, Swiggy, PhonePe) often have no strict CGPA cut-off but screen heavily for projects and internship quality. For FAANG campus roles (Google, Amazon), strong competitive programming profiles matter far more than CGPA.',
  },
  {
    q: 'How do I pass TCS NQT with my resume?',
    a: 'TCS NQT (National Qualifier Test) has both an online test and a resume screening phase. For the resume: (1) Meet the 6.0 CGPA threshold, (2) Include Java, Python, or C++ explicitly in your Skills section — TCS screens for these, (3) Include a Projects section with at least one project that uses DBMS (SQL) and OOP concepts, (4) Use a clean single-column format — TCS uses Taleo ATS which poorly parses multi-column layouts. Use CV Prime\'s ATS checker against TCS JDs to verify your score before applying.',
  },
  {
    q: 'Should I include a photo in my campus placement resume?',
    a: 'No. All Indian IT companies, MNCs, and product startups using ATS do not require a photo on resumes. Photos can actually cause ATS parsing failures for image-embedded PDFs. Only include a photo if you are applying to hospitality, aviation, or media roles that explicitly require one.',
  },
  {
    q: 'How many projects should I include on a placement resume?',
    a: '2–4 projects is ideal for a 1-page placement resume. Prioritise: (1) Projects with GitHub links and live deployments, (2) Projects using technologies relevant to your target companies, (3) Projects with measurable impact (users, performance metrics, API response times). Avoid listing every class assignment — quality over quantity. One strong project with a detailed bullet beats five generic project names.',
  },
  {
    q: 'Can off-campus applicants use a campus placement resume?',
    a: 'Yes — the same resume structure applies for off-campus applications, Naukri.com profiles, and direct company applications. The key difference is that off-campus applications go through general ATS without the CGPA cut-off enforcement of campus drives. For off-campus, focus even more on project quality, GitHub activity, and tailored keywords for each JD. CV Prime\'s ATS checker helps you score your resume against any off-campus JD.',
  },
  {
    q: 'What is the best resume format for campus placements?',
    a: 'Reverse-chronological with Education first (since you\'re a fresher and your education is your strongest signal). Sections in order: Contact → Education → Skills → Internships → Projects → Achievements. Use a single-column or clean two-column layout. Font: Arial, Calibri, or Times New Roman (10–12pt). Margins: 0.5–1 inch. File format: PDF only — never Word or JPG. Length: 1 page strictly.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Campus Placement Resume Guide', item: 'https://cv-prime.in/campus-placement-resume' },
  ],
};

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-700 border-blue-100',
  violet: 'bg-violet-50 text-violet-700 border-violet-100',
  amber: 'bg-amber-50 text-amber-700 border-amber-100',
};

const iconBgMap: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-700',
  violet: 'bg-violet-100 text-violet-700',
  amber: 'bg-amber-100 text-amber-700',
};

export default function CampusPlacementResumePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-indigo-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1.5 text-sm font-bold text-indigo-200">
            <GraduationCap className="h-4 w-4" />
            Campus placement guide — India 2026
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Campus Placement Resume that cracks TCS, Infosys & top startups
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Beat ATS at mass recruiters and product companies alike. This guide covers what each company type screens for, how to tailor your resume per slot, and the exact format that passes automated shortlisting.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-400 px-8 py-3.5 text-base font-bold text-slate-950 transition hover:bg-indigo-300"
            >
              Build my placement resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ats-checker"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Check my ATS score free
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {placementStats.map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-indigo-600">{item.stat}</p>
              <p className="mt-1 max-w-[180px] text-xs leading-5 text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company types */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What each company type screens for</h2>
            <p className="mt-4 text-slate-500">Your resume strategy changes dramatically based on the recruiter type — here is what each screens for</p>
          </div>
          <div className="mt-12 space-y-6">
            {companyTypes.map((company) => {
              const Icon = company.icon;
              return (
                <div key={company.type} className={`rounded-2xl border p-6 ${colorMap[company.color]}`}>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconBgMap[company.color]}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <h3 className="font-display text-xl font-bold text-slate-950">{company.type}</h3>
                        <span className="inline-block rounded-full bg-white/70 px-3 py-1 text-xs font-bold text-slate-700">{company.packageRange}</span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-slate-600">{company.companies}</p>
                      <p className="mt-0.5 text-xs text-slate-500">ATS: {company.atsSystem}</p>
                      <ul className="mt-4 space-y-2">
                        {company.keyFocus.map((focus) => (
                          <li key={focus} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                            {focus}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Placement Timeline */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Placement resume prep timeline</h2>
            <p className="mt-4 text-slate-500">When to do what — from 6 months before placement to placement day</p>
          </div>
          <div className="mt-12 space-y-4">
            {placementTimeline.map((step, i) => (
              <div key={step.month} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-600 font-bold text-white text-sm">
                    {i + 1}
                  </div>
                  {i < placementTimeline.length - 1 && <div className="mt-1 h-full w-0.5 bg-indigo-100" />}
                </div>
                <div className="pb-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-indigo-500">{step.month}</p>
                  <h3 className="mt-1 font-display text-lg font-bold text-slate-950">{step.action}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Checklist */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Placement resume checklist</h2>
            <p className="mt-4 text-slate-500">Every section and sub-item you need before submitting to campus recruiters</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resumeChecklist.map((section) => (
              <div key={section.section} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <h3 className="font-display text-base font-bold text-slate-950">{section.section}</h3>
                <ul className="mt-3 space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">4 placement resume mistakes that cost callbacks</h2>
            <p className="mt-4 text-slate-500">The errors that most freshers make — with before/after examples</p>
          </div>
          <div className="mt-12 space-y-8">
            {commonMistakes.map((item, i) => (
              <div key={item.mistake} className="rounded-2xl border border-slate-100 bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 font-display text-sm font-bold text-red-600">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-950">{item.mistake}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.fix}</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-red-600">❌ Common mistake</p>
                    <p className="text-sm italic text-red-800">{item.bad}</p>
                  </div>
                  <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-green-600">✅ Do this instead</p>
                    <p className="text-sm text-green-800">{item.good}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA mid-page */}
      <section className="bg-indigo-600 px-5 py-14 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Check your placement resume ATS score — free</h2>
          <p className="mt-4 text-indigo-200">Paste any company&apos;s JD + your resume → get a 0–100 ATS match score, missing keywords, and AI-powered fix recommendations in 60 seconds.</p>
          <Link href="/ats-checker" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold text-indigo-700 transition hover:bg-indigo-50">
            Check my ATS score free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Campus placement resume — frequently asked questions</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="font-display text-lg font-bold text-slate-950">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-slate-900">Related guides for placement preparation</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/fresher-resume', label: 'Fresher resume guide' },
              { href: '/resume-builder', label: 'Free AI resume builder' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/resume-format', label: 'Resume format guide 2026' },
              { href: '/cv-examples/software-engineer', label: 'Software engineer resume example' },
              { href: '/cv-examples/data-analyst', label: 'Data analyst resume example' },
              { href: '/interview-questions', label: 'Interview questions by role' },
              { href: '/cover-letter', label: 'Cover letter generator' },
              { href: '/resume-tips/ats-keywords', label: 'ATS keywords guide' },
              { href: '/mba-resume', label: 'MBA resume guide' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Build your placement resume in 5 minutes — free</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            CV Prime&apos;s AI builds ATS-optimised placement resumes tailored to each company&apos;s JD. 3 free PDF exports. No credit card required. Used by 10,000+ students for campus placements.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-400 px-10 py-4 text-base font-bold text-slate-950 hover:bg-indigo-300 transition">
            Build my placement resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build placement resume free" message="Campus placement resume guide — build an ATS-ready resume for TCS, Infosys, Wipro & startups" />
    </main>
  );
}
