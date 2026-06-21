import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Award } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'MBA Resume Guide 2026 — Format, Tips & Free Template India | CV Prime',
  description:
    'Complete MBA resume guide for India 2026. What to include for MBA freshers and experienced professionals, section order, common mistakes, and free ATS-optimised template. Covers IIM, ISB, XLRI, and other B-school graduates.',
  alternates: { canonical: 'https://cv-prime.in/mba-resume' },
  keywords: [
    'MBA resume',
    'MBA fresher resume',
    'MBA resume format india',
    'MBA graduate resume',
    'MBA resume example india',
    'IIM resume',
    'MBA resume tips',
    'MBA CV india',
    'MBA resume no experience',
    'post MBA resume',
    'MBA job resume format',
    'mba resume template india 2026',
    'mba fresher cv',
    'management graduate resume',
  ],
  openGraph: {
    title: 'MBA Resume Guide 2026 — Format, Tips & Free Template India | CV Prime',
    description:
      'Write a winning MBA resume for India. What to include for MBA freshers and professionals, section order, and ATS optimisation. Free template for IIM, ISB, XLRI graduates.',
    url: 'https://cv-prime.in/mba-resume',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MBA Resume Guide 2026 — CV Prime' }],
  },
};

const mbaStats = [
  { stat: '4,000+', label: 'MBA graduates from IIMs alone enter the job market in India every year' },
  { stat: '80%', label: 'of MBA recruiters at top companies use ATS to screen resumes before interview calls' },
  { stat: '₹12L–₹60L+', label: 'salary range for MBA freshers depending on B-school tier and specialisation' },
  { stat: '3x', label: 'higher callback rate for MBA resumes that quantify business impact with metrics' },
];

const specialisations = [
  {
    spec: 'Finance & Investment Banking',
    keywords: 'DCF, financial modelling, valuation, equity research, CFA, Bloomberg, Excel, M&A, PE/VC',
    highlight: 'Lead with financial modelling experience and deal/project size. Show CFA progress if applicable.',
    topCompanies: 'Goldman Sachs, JP Morgan, Citibank, HDFC Bank, Kotak, Motilal Oswal, McKinsey (FCOP)',
    icon: TrendingUp,
    color: 'emerald',
  },
  {
    spec: 'Marketing & Brand Management',
    keywords: 'P&L ownership, brand strategy, ATL/BTL campaigns, digital marketing, CAC, ROAS, NPS, HUL, P&G',
    highlight: 'Lead with brand impact metrics. Show P&L exposure even at project level (MBA consulting projects count).',
    topCompanies: 'HUL, P&G, Marico, Nestlé, Dabur, Amazon, Zomato, Nykaa, ITC',
    icon: Award,
    color: 'amber',
  },
  {
    spec: 'Operations & Supply Chain',
    keywords: 'process improvement, Six Sigma, lean, ERP, supply chain optimisation, cost reduction, APICS, SAP',
    highlight: 'Quantify cost savings and efficiency gains. Show scope: team size managed, budget handled, throughput improvement.',
    topCompanies: 'Amazon, Flipkart, Maersk, DHL, Tata Group, Mahindra Logistics, McKinsey (ops practice)',
    icon: Users,
    color: 'blue',
  },
  {
    spec: 'Human Resources & OD',
    keywords: 'talent acquisition, HRBP, organisational design, L&D, attrition reduction, SHRM, workforce planning',
    highlight: 'Show HR impact with numbers: attrition reduced %, hiring targets achieved, engagement scores improved.',
    topCompanies: 'Deloitte, Accenture, TCS HR, Hindustan Zinc, RPG Group, Infosys BPM',
    icon: Users,
    color: 'violet',
  },
];

const sectionOrder = {
  fresher: [
    { order: 1, section: 'Contact information', note: 'Name, phone, email, LinkedIn, city' },
    { order: 2, section: 'Professional summary', note: 'B-school, specialisation, strongest skill, target role — 2–3 lines' },
    { order: 3, section: 'Education', note: 'MBA first (institution, specialisation, CGPA/percentage, year), then undergraduate' },
    { order: 4, section: 'Internship / Summer Internship (SIP)', note: 'Company, role, project, quantified outcomes' },
    { order: 5, section: 'Projects & Consulting', note: 'Live projects, case competitions, management studies' },
    { order: 6, section: 'Skills', note: 'Tools (Excel, PowerPoint, Python, SQL, Tableau), domain skills, soft skills with evidence' },
    { order: 7, section: 'Certifications', note: 'CFA Level 1, Six Sigma, Google Analytics, LinkedIn Learning — with dates' },
    { order: 8, section: 'Achievements', note: 'Scholarships, case competition wins, student council roles, national-level achievements' },
    { order: 9, section: 'Pre-MBA work experience', note: 'Only if 1+ years; list after MBA internships' },
  ],
  experienced: [
    { order: 1, section: 'Contact information', note: 'Name, phone, email, LinkedIn, city' },
    { order: 2, section: 'Executive summary', note: 'Years of experience, industries, MBA institution, specialisation, key achievement — 3 lines max' },
    { order: 3, section: 'Work experience', note: 'Most recent role first; MBA should be evident in career progression' },
    { order: 4, section: 'Education', note: 'MBA (institution, specialisation, year), then undergraduate' },
    { order: 5, section: 'Skills', note: 'Domain expertise, management tools, analytical skills' },
    { order: 6, section: 'Certifications', note: 'CFA, PMP, Six Sigma, domain-specific credentials' },
    { order: 7, section: 'Awards & recognition', note: 'Industry awards, company honours, case competition wins' },
  ],
};

const commonMistakes = [
  {
    mistake: 'Generic summary with no metrics',
    fix: 'Your professional summary is a recruiter\'s first impression. It must name your B-school, specialisation, and one key achievement with a number.',
    bad: '"Dynamic MBA graduate seeking a challenging role where I can utilise my skills and contribute to organisational growth."',
    good: '"MBA (Marketing), XLRI Jamshedpur 2026. Summer internship at HUL — redesigned rural distribution model, improving sell-out velocity by 18% across 200 outlets in Maharashtra."',
  },
  {
    mistake: 'Listing SIP (Summer Internship Programme) without project outcomes',
    fix: 'Your SIP is your most important resume signal as an MBA fresher. Every recruiter looks for: the company you interned at, the project brief, and the measurable result. Never list a SIP without outcomes.',
    bad: '"Summer Intern, Procter & Gamble, June–July 2025 — Worked on marketing strategy for a personal care brand."',
    good: '"Summer Intern, Procter & Gamble, Jun–Jul 2025 — Developed go-to-market strategy for Head & Shoulders relaunch in Tier-2 cities; proposed ₹1.2Cr distributor incentive structure that was approved and piloted in 3 states."',
  },
  {
    mistake: 'Using a 2-page resume as an MBA fresher',
    fix: 'MBA freshers with less than 2 years of pre-MBA work experience should use 1 page. Experienced MBAs (5+ years pre-MBA) may go to 2 pages. Consulting and finance interviewers are trained to read 1-page resumes.',
    bad: 'A 2-page MBA fresher resume covering class assignments in detail',
    good: 'A tightly edited 1-page resume with SIP, 2 key projects, education, and tools listed precisely',
  },
  {
    mistake: 'No mention of B-school tier in metadata or formatting',
    fix: 'If you are from IIM, ISB, XLRI, FMS Delhi, MDI Gurgaon, IIFT, or SP Jain — make it visible. Put the institution name prominently in your summary line and education section.',
    bad: '"MBA from a reputed business school..."',
    good: '"MBA (Finance), Indian Institute of Management Ahmedabad (IIM-A), 2026"',
  },
];

const faqs = [
  {
    q: 'What should an MBA resume include in India?',
    a: 'An MBA resume in India should include: Professional summary (B-school, specialisation, SIP company, top achievement), Education (MBA institution, specialisation, CGPA, year; undergraduate degree), Summer Internship Project (company, project brief, quantified outcome), Projects & case competitions, Skills (Excel, PowerPoint, domain-specific tools, Python/SQL if applicable), Certifications (CFA, PMP, domain certs), and Achievements. MBA freshers: 1 page. Experienced MBAs: 1–2 pages.',
  },
  {
    q: 'How do I write a resume for MBA with no work experience?',
    a: 'Lead with your Summer Internship Project (SIP) — this is your most important signal. Treat it like a work experience entry: company name, role title, duration, and 3–4 quantified bullets. Then add live projects (consulting projects, MBA competitions), case competition achievements, and any pre-MBA work if applicable. Even 6-month work experience pre-MBA is worth listing as it shows industry exposure. Your education (B-school name and specialisation) carries significant weight for MBA freshers from IIM/ISB/XLRI-tier institutions.',
  },
  {
    q: 'What is the best format for an MBA resume in India?',
    a: 'Reverse-chronological with Education prominently placed (after summary). For MBA freshers, section order: Summary → Education → SIP → Projects → Skills → Certifications → Achievements. Use a clean, single-column or simple two-column layout — consulting firms and investment banks use strict ATS that fails complex templates. Font: Calibri, Arial, or Times New Roman. Length: 1 page for freshers, 2 pages max for experienced hires. File: PDF only.',
  },
  {
    q: 'Do I need to mention my CGPA on an MBA resume?',
    a: 'Include your MBA CGPA if it is above 3.0/4.0 (or equivalent percentage above 70%). For top B-schools (IIM, ISB, XLRI), the institution name carries more weight than CGPA — but listing it shows transparency. For undergraduate CGPA: include if 7.5+/10 and you are a fresher or recent graduate. Drop undergraduate CGPA after your second post-MBA role.',
  },
  {
    q: 'How does an MBA resume differ from a general professional resume?',
    a: 'MBA resumes emphasise: (1) Summer Internship Project outcomes — this is your primary experience signal, (2) Business school name and specialisation (significant brand weight from IIM/ISB tier), (3) Case competition wins and live project consulting experience, (4) Leadership roles in student clubs or batch committees, (5) Pre-MBA industry experience reframed through an MBA lens (strategic, commercial, cross-functional). General resumes focus more on technical skills and task completion; MBA resumes focus on strategy, impact, and business outcomes.',
  },
  {
    q: 'What are the best companies for MBA campus placements in India?',
    a: 'Top MBA campus recruiters in India by category: Consulting: McKinsey, BCG, Bain, Deloitte, Accenture Strategy, Kearney; Investment Banking/Finance: Goldman Sachs, JP Morgan, Kotak, Motilal Oswal, ICICI Bank; FMCG/Marketing: HUL, P&G, Nestlé, Marico, Dabur; Technology: Amazon, Google, Microsoft, Flipkart, Zomato (product/strategy roles); General Management: Mahindra, Tata Group, Aditya Birla Group. Each company type screens for different keywords and formats — use CV Prime to tailor your resume per company.',
  },
  {
    q: 'Should an MBA resume include soft skills?',
    a: 'Only include soft skills on your MBA resume if you can back them up with concrete evidence. "Leadership" is only credible if you list a specific leadership role (club president, case competition team lead, batch representative). "Communication skills" is credible only if cited alongside a specific context (client-facing SIP project, cross-functional team lead). Never list soft skills as standalone bullet points — they must be embedded in your experience bullets as demonstrated behaviours.',
  },
  {
    q: 'How do I tailor my MBA resume to a specific company?',
    a: 'Use CV Prime\'s AI tailoring: paste the company\'s JD and your resume. CV Prime identifies which of your experience bullets, skills, and SIP keywords align with the JD — and which are missing. For consulting firms: emphasise problem-solving, client impact, and cross-industry exposure. For FMCG: emphasise P&L, brand metrics, rural distribution, and channel management. For investment banking: emphasise financial modelling, deal exposure, and analytical rigour. Tailoring typically takes 5–10 minutes with AI and can raise your ATS score from 50 to 80+.',
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
    { '@type': 'ListItem', position: 2, name: 'MBA Resume Guide', item: 'https://cv-prime.in/mba-resume' },
  ],
};

const colorMap: Record<string, string> = {
  emerald: 'bg-emerald-100 text-emerald-700',
  amber: 'bg-amber-100 text-amber-700',
  blue: 'bg-blue-100 text-blue-700',
  violet: 'bg-violet-100 text-violet-700',
};

const borderMap: Record<string, string> = {
  emerald: 'border-emerald-100',
  amber: 'border-amber-100',
  blue: 'border-blue-100',
  violet: 'border-violet-100',
};

export default function MbaResumePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-amber-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-sm font-bold text-amber-200">
            <Award className="h-4 w-4" />
            MBA resume guide — India 2026
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            MBA Resume Guide for India — Format, Tips & Free Template 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Whether you are an MBA fresher from IIM, ISB, or XLRI, or an experienced professional with an MBA — this guide shows you exactly what to include, how to structure it, and how to pass ATS at consulting, FMCG, investment banking, and tech companies.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-3.5 text-base font-bold text-slate-950 transition hover:bg-amber-300"
            >
              Build my MBA resume free
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
          {mbaStats.map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-amber-600">{item.stat}</p>
              <p className="mt-1 max-w-[180px] text-xs leading-5 text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MBA Fresher vs Experienced section order */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">MBA resume section order</h2>
            <p className="mt-4 text-slate-500">The recommended structure differs for freshers (SIP experience only) vs experienced MBAs (5+ years pre-MBA)</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-display text-xl font-bold text-slate-950">MBA fresher (0–2 years experience)</h3>
              <p className="mt-1 text-sm text-slate-500">Lead with B-school name and SIP. Education first after summary.</p>
              <ol className="mt-5 space-y-3">
                {sectionOrder.fresher.map((item) => (
                  <li key={item.section} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">{item.order}</span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{item.section}</p>
                      <p className="text-xs text-slate-500">{item.note}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-slate-950">Experienced MBA (5+ years)</h3>
              <p className="mt-1 text-sm text-slate-500">Lead with work experience. Education lower — B-school reinforces seniority.</p>
              <ol className="mt-5 space-y-3">
                {sectionOrder.experienced.map((item) => (
                  <li key={item.section} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">{item.order}</span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{item.section}</p>
                      <p className="text-xs text-slate-500">{item.note}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Specialisation guide */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What to highlight by MBA specialisation</h2>
            <p className="mt-4 text-slate-500">Different specialisations need different keywords and emphasis — here is what to prioritise</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {specialisations.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.spec} className={`rounded-2xl border bg-white p-6 ${borderMap[s.color]}`}>
                  <div className="flex items-start gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${colorMap[s.color]}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-950">{s.spec}</h3>
                      <p className="mt-2 text-xs text-slate-500">
                        <span className="font-semibold text-slate-700">Key keywords:</span> {s.keywords}
                      </p>
                      <p className="mt-2 text-sm text-slate-600">{s.highlight}</p>
                      <p className="mt-2 text-xs text-slate-500">
                        <span className="font-semibold text-slate-700">Top hirers:</span> {s.topCompanies}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">4 MBA resume mistakes that cost offers</h2>
            <p className="mt-4 text-slate-500">The errors that MBA freshers make most often — with before/after examples</p>
          </div>
          <div className="mt-12 space-y-8">
            {commonMistakes.map((item, i) => (
              <div key={item.mistake} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
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
                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-red-600">❌ Don&apos;t do this</p>
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

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">MBA resume — frequently asked questions</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white p-6 shadow-sm">
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
          <h2 className="font-display text-lg font-bold text-slate-900">Related guides for MBA job seekers</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/resume-builder', label: 'Free AI resume builder' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/cover-letter', label: 'AI cover letter generator' },
              { href: '/resume-format', label: 'Resume format guide 2026' },
              { href: '/campus-placement-resume', label: 'Campus placement resume guide' },
              { href: '/cv-examples/product-manager', label: 'Product manager resume example' },
              { href: '/cv-examples/marketing-manager', label: 'Marketing manager resume example' },
              { href: '/cv-examples/finance-analyst', label: 'Finance analyst resume example' },
              { href: '/cv-examples/business-analyst', label: 'Business analyst resume example' },
              { href: '/interview-questions', label: 'Interview questions by role' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-amber-300 hover:text-amber-700 transition">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-amber-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Build your MBA resume with AI — free</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            CV Prime&apos;s AI helps MBA freshers and professionals build ATS-optimised resumes tailored to each company&apos;s JD — consulting, FMCG, banking, or tech. 3 free PDF exports. No credit card.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-10 py-4 text-base font-bold text-slate-950 hover:bg-amber-300 transition">
            Build my MBA resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build MBA resume free" message="MBA resume guide — format, tips & free template for India 2026" />
    </main>
  );
}
