import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Sparkles, BookOpen, Briefcase } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Fresher Resume Guide 2026 — Format, Tips & Free Template for India | CV Prime',
  description:
    'Complete fresher resume guide for India 2026. Learn how to write a resume with no experience, what to include as a fresher, and how to pass ATS with a first-time CV. Free template included.',
  alternates: { canonical: 'https://cv-prime.in/fresher-resume' },
  keywords: [
    'fresher resume',
    'resume for freshers',
    'fresher cv',
    'fresher resume format',
    'resume for freshers india',
    'first job resume',
    'college student resume',
    'no experience resume',
    'fresher resume template',
    'how to write resume for freshers',
    'fresher resume examples',
    'engineering fresher resume',
    'mba fresher resume',
    'btech fresher resume',
  ],
  openGraph: {
    title: 'Fresher Resume Guide 2026 — Format, Tips & Free Template | CV Prime',
    description:
      'Write a winning fresher resume with no experience. What to include, how to format it, and how to pass ATS. Free template for India 2026.',
    url: 'https://cv-prime.in/fresher-resume',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Fresher Resume Guide 2026 — CV Prime' }],
  },
};

const whatToInclude = [
  {
    icon: BookOpen,
    title: 'Education section (lead with this)',
    desc: 'Put your education at the top as a fresher — this is your strongest signal. Include your degree, college name, CGPA (if 7.5+), graduation year, and relevant coursework.',
    tips: ['List your degree and college first', 'Include CGPA only if 7.5 or above', 'Add relevant courses (DSA, DBMS, Machine Learning, etc.)', 'Include any academic awards or scholarships'],
  },
  {
    icon: Briefcase,
    title: 'Internships & projects',
    desc: 'Internships and projects are the closest thing you have to work experience. Give them the same weight as a work experience section.',
    tips: ['List every internship — even 1-month internships count', 'For projects: name, technologies used, and what it does or achieved', 'Link to GitHub repos or live demos where possible', 'Include college-assigned projects if they involved real coding or research'],
  },
  {
    icon: CheckCircle2,
    title: 'Skills section',
    desc: 'Your skills section is critical for ATS — it\'s where automated systems look for technical keywords. List tools, languages, and frameworks you genuinely know.',
    tips: ['Group by category: Programming Languages, Frameworks, Tools, Databases', 'Only list skills you can discuss in an interview', 'Match your skills to keywords in the job description', 'Rate yourself (Beginner/Intermediate/Advanced) is optional but can help'],
  },
  {
    icon: Sparkles,
    title: 'Extracurriculars & achievements',
    desc: 'For freshers without work experience, extracurriculars show initiative, leadership, and commitment — qualities every recruiter values.',
    tips: ['Student club leadership or founding member roles', 'Hackathon participation (especially if you won or placed)', 'Competitive programming ranks (LeetCode, HackerRank, CodeChef)', 'National-level sports, music, or arts achievements'],
  },
];

const commonMistakes = [
  {
    mistake: 'Objective statement that says nothing',
    fix: 'Replace "Seeking a challenging position in a reputed company" with a 2-line summary that names the role, your degree, and your strongest skill.',
    bad: '"Seeking a challenging opportunity in a reputed organisation where I can utilise my skills and grow professionally."',
    good: '"Final-year B.Tech (CSE) graduate with hands-on experience in full-stack web development (React, Node.js). Built 3 production-level projects and completed a 3-month internship at a Series B startup."',
  },
  {
    mistake: 'No quantification on project bullets',
    fix: 'Every project bullet should answer: what did it do, how was it built, and what was the scale or impact?',
    bad: '"Built an e-commerce website using React and Node.js."',
    good: '"Built a full-stack e-commerce platform (React, Node.js, MongoDB) supporting 500+ product listings, with payment integration securely and deployed on AWS EC2."',
  },
  {
    mistake: 'Listing too many skills to seem impressive',
    fix: 'Only list skills you can discuss confidently. Recruiters routinely test skills listed on CVs — if you list React but can\'t answer basic React questions, it backfires.',
    bad: 'Python, Java, C++, React, Angular, Vue, Django, Spring Boot, SQL, MongoDB, Redis, AWS, Azure, GCP, Docker, Kubernetes...',
    good: 'Python (Intermediate), JavaScript/React (Intermediate), SQL (Intermediate), Git, AWS EC2 (Beginner)',
  },
  {
    mistake: 'Using a photo or colourful graphic design template',
    fix: 'Indian IT companies and MNCs using ATS (Taleo, Workday) cannot parse graphic-heavy CVs. Use a clean, text-based template.',
    bad: 'Using a Canva or Novoresume graphic template with photos, columns, and graphics',
    good: 'A single-column or two-column text-first template like CV Prime\'s Modern or Technical layouts',
  },
  {
    mistake: 'No contact details or unprofessional email',
    fix: 'Your email should be firstname.lastname@gmail.com. Include mobile, email, LinkedIn URL, and GitHub URL at the top.',
    bad: 'coolguy999@gmail.com | No LinkedIn | No GitHub',
    good: 'arjun.sharma@gmail.com | +91-98765-43210 | linkedin.com/in/arjunsharma | github.com/arjunsharma',
  },
];

const resumeSections = [
  { order: 1, section: 'Contact information', required: true, note: 'Name, phone, email, LinkedIn, GitHub' },
  { order: 2, section: 'Professional summary', required: true, note: '2–3 lines: degree + strongest skill + what you\'re seeking' },
  { order: 3, section: 'Education', required: true, note: 'Degree, college, CGPA (if 7.5+), graduation year' },
  { order: 4, section: 'Internships', required: true, note: 'Company, role, duration, and 2–3 impact bullets' },
  { order: 5, section: 'Projects', required: true, note: 'Project name, tech stack, and what it does or achieved' },
  { order: 6, section: 'Technical skills', required: true, note: 'Languages, frameworks, tools — grouped by category' },
  { order: 7, section: 'Certifications', required: false, note: 'Google, Coursera, NPTEL, HackerRank certificates — with issue date' },
  { order: 8, section: 'Extracurriculars', required: false, note: 'Leadership, hackathons, competitive coding, sports' },
  { order: 9, section: 'Publications / Research', required: false, note: 'Only if you have published or submitted research papers' },
];

const faqs = [
  {
    q: 'How do I write a resume with no work experience?',
    a: 'Focus on education, internships, projects, and skills. As a fresher, your education goes at the top, not the bottom. Your projects and internships are your equivalent of work experience — give them the same treatment: organisation name, role, duration, and bullet points showing what you built or achieved. Quantify wherever possible.',
  },
  {
    q: 'How long should a fresher resume be?',
    a: 'One page — always. Recruiters at companies receiving hundreds of applications (like TCS, Infosys, Wipro campus hiring) spend under 10 seconds on the initial screen. A one-page resume forces you to prioritise your strongest signals. Never go to two pages as a fresher.',
  },
  {
    q: 'Should freshers include a photo on their resume?',
    a: 'No. For IT companies, MNCs, and most corporate roles in India, photos on resumes are unnecessary and can actually cause issues with ATS parsing. Only include a photo if applying to hospitality, media, modelling, or roles where appearance is a stated requirement.',
  },
  {
    q: 'What CGPA is good enough to mention on a fresher resume?',
    a: 'Include your CGPA if it is 7.5 or above on a 10-point scale (or 7.0+ from a top-tier institution like IIT/NIT). Below 7.0, consider leaving it off — but only if you have strong internship or project experience to compensate. Many companies (especially IT services companies) have minimum CGPA cut-offs of 6.0–7.0 for campus hiring.',
  },
  {
    q: 'What is the best resume format for freshers in India?',
    a: 'A reverse-chronological format with your education first, followed by internships, projects, and skills. Use a single-column or clean two-column layout that ATS can parse. Avoid graphic-heavy designs, tables, and text boxes — they confuse ATS parsers and can cause silent rejection.',
  },
  {
    q: 'Can freshers use AI to write their resume?',
    a: 'Yes, with one important rule: the AI should help you structure and articulate your real experience — not fabricate achievements. CV Prime\'s AI is designed to help freshers write stronger project and internship bullets using the information they provide. It adds impact language and keywords without inventing qualifications.',
  },
  {
    q: 'How do I make my fresher resume pass ATS?',
    a: 'Three things: (1) Tailor your skills and summary section to match keywords from the specific JD. (2) Use a clean, ATS-readable template — no tables, columns, or graphics. (3) Use the exact job title you are applying for in your summary or experience section. CV Prime\'s ATS checker tells you exactly which keywords are missing and how to add them.',
  },
  {
    q: 'What projects should a B.Tech fresher include on their resume?',
    a: 'Prioritise: (1) Any final-year or major projects with real technical depth, (2) Internship projects (always list these), (3) Personal or open-source projects available on GitHub, (4) Hackathon projects — especially if you won or built something end-to-end. Skip minor class assignments unless they had real complexity.',
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
    { '@type': 'ListItem', position: 2, name: 'Fresher Resume Guide', item: 'https://cv-prime.in/fresher-resume' },
  ],
};

export default function FresherResumePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-violet-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-1.5 text-sm font-bold text-violet-200">
            <BookOpen className="h-4 w-4" />
            Fresher resume guide — India 2026
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Write a fresher resume that gets callbacks in India
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            No work experience? No problem. This guide shows freshers, graduates, and students exactly what to include on a first resume, how to structure it, and how to pass ATS at top Indian companies.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-violet-400 px-8 py-3.5 text-base font-bold text-slate-950 transition hover:bg-violet-300"
            >
              Build my fresher resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/cv-examples"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              View resume examples
            </Link>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '8M+', label: 'engineers graduate in India annually — making CV differentiation critical' },
            { stat: '72%', label: 'of engineering freshers apply to 50+ roles before their first interview' },
            { stat: '75%', label: 'of freshers\' resumes are rejected by ATS before any recruiter reads them' },
            { stat: '5 min', label: 'to build an ATS-optimised fresher resume with CV Prime' },
          ].map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-violet-600">{item.stat}</p>
              <p className="mt-1 max-w-[160px] text-xs leading-5 text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resume sections */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What to include in a fresher resume</h2>
            <p className="mt-4 text-slate-500">The recommended section order for a first-time resume in India</p>
          </div>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-3 text-left font-semibold text-slate-700">Order</th>
                  <th className="pb-3 text-left font-semibold text-slate-700">Section</th>
                  <th className="pb-3 text-left font-semibold text-slate-700">Required?</th>
                  <th className="pb-3 text-left font-semibold text-slate-700">What to include</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {resumeSections.map((row) => (
                  <tr key={row.section}>
                    <td className="py-3 font-bold text-violet-600">{row.order}</td>
                    <td className="py-3 font-medium text-slate-900">{row.section}</td>
                    <td className="py-3">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${row.required ? 'bg-violet-50 text-violet-700' : 'bg-slate-100 text-slate-500'}`}>
                        {row.required ? 'Required' : 'Optional'}
                      </span>
                    </td>
                    <td className="py-3 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What to include details */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">How to write each section</h2>
            <p className="mt-4 text-slate-500">Section-by-section guide for freshers with no work experience</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whatToInclude.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-slate-950">{section.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{section.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {section.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" />
                        {tip}
                      </li>
                    ))}
                  </ul>
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
            <h2 className="font-display text-3xl font-bold sm:text-4xl">5 fresher resume mistakes to avoid</h2>
            <p className="mt-4 text-slate-500">The errors that cost freshers the most callbacks — with before/after examples</p>
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
          <h2 className="text-center font-display text-3xl font-bold">Fresher resume — frequently asked questions</h2>
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
          <h2 className="font-display text-lg font-bold text-slate-900">Related guides for freshers</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/resume-builder', label: 'Free AI resume builder' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/resume-format', label: 'Resume format guide' },
              { href: '/cover-letter', label: 'Cover letter for freshers' },
              { href: '/cv-examples/software-engineer', label: 'Software engineer resume example' },
              { href: '/cv-examples/data-analyst', label: 'Data analyst resume example' },
              { href: '/interview-questions', label: 'Interview questions by role' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-violet-300 hover:text-violet-700 transition">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-violet-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Build your fresher resume with AI — free</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            CV Prime&apos;s AI helps freshers build ATS-optimised resumes that get past automated screening and into recruiter hands. 3 free PDF exports, no credit card.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-400 px-10 py-4 text-base font-bold text-slate-950 hover:bg-violet-300 transition">
            Build my fresher resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build fresher resume free" message="Fresher resume guide — write a first-time resume that passes ATS" />
    </main>
  );
}
