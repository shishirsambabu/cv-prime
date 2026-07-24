import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Sparkles, BookOpen, Briefcase, GraduationCap, Star } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Internship Resume Guide 2026 — Format, Tips & Free Template for Students | CV Prime',
  description:
    'Complete internship resume guide for students and college graduates in India 2026. Learn exactly what to include, how to format, and how to land your first internship with an ATS-optimised resume. Free template included.',
  alternates: { canonical: 'https://cv-prime.in/internship-resume' },
  keywords: [
    'internship resume',
    'internship cv',
    'resume for internship',
    'internship resume format',
    'internship resume india',
    'college student internship resume',
    'how to write internship resume',
    'internship resume no experience',
    'internship resume template india',
    'internship resume for engineering students',
    'internship resume for mba students',
    'internship application resume',
    'summer internship resume',
    'internship cv examples india',
  ],
  openGraph: {
    title: 'Internship Resume Guide 2026 — Format, Tips & Free Template | CV Prime',
    description:
      'Write a winning internship resume with no work experience. What to include, how to format, and how to pass ATS screening. Free template for Indian students 2026.',
    url: 'https://cv-prime.in/internship-resume',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Internship Resume Guide 2026 — CV Prime' }],
  },
};

const internshipSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Write an Internship Resume in India 2026',
  description: 'Step-by-step guide for students to write an ATS-optimised internship resume with no work experience.',
  totalTime: 'PT30M',
  step: [
    { '@type': 'HowToStep', name: 'Choose a clean single-column template', text: 'Use a single-column, ATS-readable layout. Avoid tables, graphics, or columns that confuse automated parsers.' },
    { '@type': 'HowToStep', name: 'Write a focused objective (2 lines max)', text: 'Replace the generic objective with a role-specific 2-line statement naming your degree, skills, and the exact role you are applying for.' },
    { '@type': 'HowToStep', name: 'Lead with Education', text: 'As a student, your education is your strongest signal. Include degree, college, CGPA, expected graduation year, and relevant coursework.' },
    { '@type': 'HowToStep', name: 'Add projects with impact', text: 'Every project bullet must include: what you built, what technologies you used, and what it achieved or produced.' },
    { '@type': 'HowToStep', name: 'Build your skills section for ATS', text: 'Group technical and soft skills into categories. Match your skills keywords to the internship job description exactly.' },
    { '@type': 'HowToStep', name: 'Tailor per application', text: 'Send a different version of your resume for each role — paste the JD into CV Prime and let AI tailor your keywords, bullet points, and skills section.' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long should an internship resume be?',
      acceptedAnswer: { '@type': 'Answer', text: 'Exactly 1 page. No exceptions for students. Recruiters reviewing internship applications spend less than 10 seconds on an initial scan. A 2-page internship resume signals poor communication judgement, not strong experience.' },
    },
    {
      '@type': 'Question',
      name: 'Should I include a photo on my internship resume in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. For technology, consulting, finance, and most corporate internships in India, a photo is not expected and may create unconscious bias. The exception is media, hospitality, or roles where appearance is part of the job specification. When in doubt, leave it out.' },
    },
    {
      '@type': 'Question',
      name: 'What if I have no experience or projects for an internship resume?',
      acceptedAnswer: { '@type': 'Answer', text: 'Build at least one project before applying. For tech roles: build a small web app or contribute to an open-source project on GitHub. For business roles: complete a Google Analytics, HubSpot, or Excel certification and document what you did. For design roles: create 3 mockups on Figma and publish to Behance. Even a weekend project is better than an empty projects section.' },
    },
    {
      '@type': 'Question',
      name: 'Is a CGPA of 6.5 good enough for internship applications?',
      acceptedAnswer: { '@type': 'Answer', text: 'Many companies have a minimum CGPA of 7.0 or 7.5 for shortlisting internship candidates — this is an ATS-level filter, not a human judgement. If your CGPA is below 7.0, compensate with strong projects, certifications, hackathon wins, or open-source contributions. Some companies use CGPA as an absolute filter; others weigh projects more heavily. Check each company\'s eligibility criteria before applying.' },
    },
    {
      '@type': 'Question',
      name: 'What is the best resume format for an internship application?',
      acceptedAnswer: { '@type': 'Answer', text: 'Use a reverse-chronological format with a single column. For students, the section order should be: Objective (2 lines) → Education → Projects → Skills → Internships/Experience (if any) → Extracurriculars → Certifications. This order puts your strongest signals (education, projects) first, where recruiters look first.' },
    },
  ],
};

const sections = [
  {
    icon: BookOpen,
    title: '1. Education — lead with this',
    desc: 'Your education is your primary credential as a student. Put it at the top of your resume, not the bottom.',
    tips: [
      'Degree, college name, expected graduation year, and CGPA (include only if 7.0+)',
      'Add 3–5 relevant courses for the role you are applying to (e.g., "Data Structures, DBMS, Machine Learning")',
      'Include academic awards, scholarships, or merit rank if applicable',
      'For 12th and 10th: only include if you are in your first or second year of college; drop after that',
    ],
  },
  {
    icon: Sparkles,
    title: '2. Projects — your substitute for work experience',
    desc: 'Projects are the most important section of a student internship resume. Treat them with the same rigour as work experience.',
    tips: [
      'List 2–4 projects — more is not better if quality suffers',
      'For each project: Project Name → Tech Stack → What it does → Scale or impact',
      'Include GitHub links or live demo URLs — they dramatically improve credibility',
      'College-assigned projects count, but weight personal or open-source projects more heavily',
    ],
  },
  {
    icon: Briefcase,
    title: '3. Skills — your ATS gateway',
    desc: 'Your skills section is what ATS systems parse first. It determines whether your resume is even read by a human.',
    tips: [
      'Group by category: Programming Languages / Frameworks / Tools / Databases / Soft Skills',
      'Mirror the exact keywords from the internship job description',
      'Only list skills you can explain in a 5-minute interview conversation',
      'Avoid vague entries like "MS Office" — be specific: "Excel (VLOOKUP, Pivot Tables, VBA basics)"',
    ],
  },
  {
    icon: GraduationCap,
    title: '4. Certifications & MOOCs',
    desc: 'Certifications signal initiative and domain interest — especially important when you have no work experience.',
    tips: [
      'Google Data Analytics Certificate, Meta Frontend Developer, AWS Cloud Practitioner — all recognised',
      'NPTEL courses with 75%+ score are valued by Indian recruiters at engineering companies',
      'List the issuing platform, certification name, and completion year',
      'Udemy certificates carry less weight than platform-verified credentials — prioritise Coursera, edX, Google, AWS',
    ],
  },
  {
    icon: Star,
    title: '5. Extracurriculars & achievements',
    desc: 'For students, extracurriculars demonstrate leadership, initiative, and qualities that coursework alone cannot.',
    tips: [
      'Student club leadership: president, secretary, core member with specific contribution',
      'Hackathon participation — especially wins, top 10 finishes, or notable builds',
      'Competitive programming: LeetCode rating, CodeChef stars, ICPC participation',
      'NSS, NCC, sports captaincy — leadership roles carry more weight than participation alone',
    ],
  },
];

const mistakes = [
  {
    mistake: 'Generic objective statement',
    bad: '"Seeking a challenging internship in a reputed company to enhance my skills and gain valuable industry experience."',
    good: '"Final-year B.Tech (CSE) student at NIT Trichy with strong Python and ML skills, seeking a Data Science internship where I can apply my NLP project experience to real-world business problems."',
    fix: 'Name the role, your degree, your strongest skill, and what you can contribute. The company is not interviewing you to enhance your skills — they need your skills to solve their problems.',
  },
  {
    mistake: 'Projects without stack or impact',
    bad: '"Built a website for a college project."',
    good: '"Developed a full-stack e-commerce platform (React, Node.js, MongoDB) handling 500+ mock product listings, with leading fintechs payment integration and deployed on AWS EC2."',
    fix: 'Every project bullet needs: name, tech stack, what it does, and quantified scale or outcome.',
  },
  {
    mistake: 'Skills section as a tech word soup',
    bad: '"C, C++, Java, Python, HTML, CSS, JavaScript, React, Angular, Vue, Django, Node.js, MongoDB, MySQL, AWS, Azure, GCP, Docker, Kubernetes, Git, GitHub, JIRA..."',
    good: '"Python (Intermediate), JavaScript/React (Intermediate), SQL (Intermediate), Git, Basics of Docker and AWS EC2"',
    fix: 'Recruiters test skills listed on a resume. If you list Kubernetes but cannot answer a basic question about it, it backfires. List only what you can genuinely discuss.',
  },
  {
    mistake: 'CGPA below threshold with no compensation',
    bad: 'Resume with 6.2 CGPA and no projects, certifications, or GitHub activity.',
    good: 'Resume with 6.2 CGPA + 3 strong GitHub projects + Google Data Analytics Certificate + 2 hackathon participations.',
    fix: 'If your CGPA is below 7.0, you must compensate with projects, certifications, and demonstrable output. Many companies have ATS filters at 7.0 — those roles may not be reachable; target companies that evaluate on skills and projects.',
  },
  {
    mistake: 'Two-page student resume',
    bad: 'A 2-page resume for a student with no work experience, padded with course descriptions and personal details.',
    good: 'A clean 1-page resume that fits all key information — education, 3 projects, skills, certifications, and 2 extracurriculars.',
    fix: 'Ruthlessly cut padding. Remove: high school details (if 3rd year+), course descriptions (just list the course names), full address, and any role that lasted under 2 weeks unless it produced something specific.',
  },
];

const faqs = [
  {
    q: 'How long should an internship resume be?',
    a: 'Exactly 1 page. No exceptions for students. Recruiters reviewing internship applications spend less than 10 seconds on an initial scan. A 2-page internship resume signals poor communication judgement, not strong experience.',
  },
  {
    q: 'Should I include a photo on my internship resume in India?',
    a: 'No. For technology, consulting, finance, and most corporate internships in India, a photo is not expected and may introduce unconscious bias. The exception is media, hospitality, or roles where appearance is part of the specification. When in doubt, leave it out.',
  },
  {
    q: 'What if I have no experience or projects?',
    a: 'Build at least one project before applying. For tech roles: build a small web app or contribute to an open-source project on GitHub. For business roles: complete a Google Analytics or HubSpot certification and document what you learned. For design roles: create 3 mockups on Figma and publish to Behance. Even a weekend project is better than an empty projects section.',
  },
  {
    q: 'Is a CGPA of 6.5 good enough for internship applications?',
    a: "Many companies filter at 7.0 or 7.5 at the ATS level. If your CGPA is below 7.0, compensate with strong projects, certifications, and hackathon wins. Some companies screen on CGPA alone; others weight projects heavily. Check each company's eligibility criteria before applying.",
  },
  {
    q: 'What is the best resume format for an internship application?',
    a: 'Single-column, reverse-chronological. Section order: Objective → Education → Projects → Skills → Certifications → Extracurriculars. This order leads with your strongest credentials and builds credibility before the reader reaches softer sections.',
  },
  {
    q: 'Should I tailor my resume for each internship application?',
    a: 'Yes — every application should use a version of your resume where the skills section and project descriptions mirror the keywords from that specific job description. Use CV Prime to paste the JD and automatically highlight which keywords are missing from your current resume. Even a 10-minute tailoring session significantly improves your ATS match score.',
  },
];

export default function InternshipResumePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(internshipSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
            { '@type': 'ListItem', position: 2, name: 'Internship Resume Guide', item: 'https://cv-prime.in/internship-resume' },
          ],
        }) }}
      />

      <main className="min-h-screen bg-white/[0.04] text-white">
        {/* Nav */}
        <nav className="sticky top-0 z-40 border-b border-white/10 bg-white/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-brand">
              CV Prime
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/resume-examples" className="hidden text-sm text-slate-300 hover:text-brand sm:block">Resume Examples</Link>
              <Link href="/resume-tips" className="hidden text-sm text-slate-300 hover:text-brand sm:block">Resume Tips</Link>
              <Link href="/signup" className="rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-white hover:bg-brand/90">
                Build Free
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="border-b border-white/10 bg-gradient-to-b from-brand/5 to-white px-4 py-16 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand">
              <GraduationCap className="h-4 w-4" />
              Internship Resume Guide 2026
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Internship Resume —<br />
              <span className="text-brand">Complete Guide for India 2026</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
              How to write an internship resume with no work experience. What to include, what to cut, and how to pass ATS screening at top companies, startups, and campus recruiters.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/signup"
                className="flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-brand/90"
              >
                Build My Internship Resume Free <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/resume-examples"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-slate-300 hover:border-brand/30 hover:text-brand"
              >
                See Resume Examples
              </Link>
            </div>
          </div>
        </section>

        {/* Quick stats */}
        <section className="border-b border-white/10 bg-white/[0.03] px-4 py-10">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { stat: '1 page', label: 'Maximum length for internship resumes' },
              { stat: '7.0+', label: 'CGPA threshold screened by most ATS systems' },
              { stat: '75%', label: 'Resumes filtered before human review' },
              { stat: '3 min', label: 'Average time recruiter spends on internship CV' },
            ].map((s) => (
              <div key={s.stat} className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
                <div className="text-2xl font-bold text-brand">{s.stat}</div>
                <div className="mt-1 text-xs text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Sections */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-3 text-3xl font-bold text-white">What to include in an internship resume</h2>
            <p className="mb-10 text-lg text-slate-300">Five sections every internship resume needs — in the order they should appear.</p>
            <div className="space-y-6">
              {sections.map((s) => (
                <div key={s.title} className="rounded-2xl border border-white/10 p-6">
                  <div className="mb-3 flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                      <s.icon className="h-5 w-5 text-brand" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                      <p className="mt-1 text-sm text-slate-300">{s.desc}</p>
                    </div>
                  </div>
                  <ul className="ml-13 space-y-1.5 pl-4">
                    {s.tips.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mistakes */}
        <section className="border-y border-white/10 bg-white/[0.03] px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-3 text-3xl font-bold text-white">5 mistakes that get internship resumes rejected</h2>
            <p className="mb-10 text-lg text-slate-300">Avoid these — each one costs you interviews.</p>
            <div className="space-y-6">
              {mistakes.map((m, i) => (
                <div key={m.mistake} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">{i + 1}</span>
                    <h3 className="font-semibold text-white">{m.mistake}</h3>
                  </div>
                  <div className="mb-3 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg bg-red-50 p-3">
                      <div className="mb-1 text-xs font-semibold uppercase text-red-600">✗ Weak</div>
                      <p className="text-sm text-slate-300">{m.bad}</p>
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 p-3">
                      <div className="mb-1 text-xs font-semibold uppercase text-emerald-600">✓ Strong</div>
                      <p className="text-sm text-slate-300">{m.good}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400">{m.fix}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand px-4 py-16 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-3 text-3xl font-bold text-white">Build your internship resume in 15 minutes</h2>
            <p className="mb-8 text-lg text-white/80">Paste the internship job description and CV Prime tailors your resume — matching keywords, rewriting bullet points, and scoring your ATS match instantly.</p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-8 py-3 text-sm font-bold text-brand shadow-lg hover:bg-white/90"
            >
              Start for Free — No Credit Card <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-white">Internship resume — frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-xl border border-white/10 p-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-3 font-semibold text-slate-200 marker:content-none">
                    {f.q}
                    <ArrowRight className="h-4 w-4 shrink-0 rotate-90 text-slate-400 group-open:rotate-[270deg] transition-transform" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="border-t border-white/10 bg-white/[0.03] px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-xl font-bold text-white">Related guides</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { href: '/fresher-resume', label: 'Fresher Resume Guide', desc: 'First full-time job resume tips' },
                { href: '/resume-tips/how-to-write-a-resume', label: 'How to Write a Resume', desc: 'Complete resume writing guide' },
                { href: '/resume-tips/resume-summary', label: 'Resume Summary vs Objective', desc: 'Which one to use and how to write it' },
                { href: '/resume-tips/action-verbs', label: 'Resume Action Verbs', desc: '150+ strong verbs by category' },
                { href: '/ats-checker', label: 'Free ATS Resume Checker', desc: 'Score your internship resume instantly' },
                { href: '/resume-examples', label: 'Resume Examples by Role', desc: 'See examples across 49 roles' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-4 hover:border-brand/30 hover:shadow-sm transition-all"
                >
                  <div className="font-semibold text-slate-200 text-sm">{l.label}</div>
                  <div className="mt-1 text-xs text-slate-400">{l.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <StickyCTA />
      </main>
    </>
  );
}
