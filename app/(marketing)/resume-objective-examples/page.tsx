import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Sparkles } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';
import { FAQItem } from '@/components/marketing/FAQItem';

export const metadata: Metadata = {
  title: 'Resume Objective Examples 2026 — 50+ by Role & Career Stage | CV Prime',
  description:
    'Resume objective examples for every career stage — fresher, career change, experienced professional. 50+ ready-to-use examples by role: software engineer, data analyst, marketing, HR, finance, and more.',
  keywords: [
    'resume objective examples',
    'career objective for resume',
    'objective for resume india',
    'resume objective statement',
    'fresher resume objective',
    'career objective for fresher',
    'career objective examples',
    'resume objective for experienced',
    'professional objective for resume',
    'career objective for software engineer',
    'resume objective 2026',
    'objective statement resume india',
    'sample resume objective',
    'career objective for mba',
  ],
  alternates: { canonical: 'https://cv-prime.in/resume-objective-examples' },
  openGraph: {
    title: 'Resume Objective Examples 2026 — 50+ by Role & Career Stage | CV Prime',
    description:
      '50+ ready-to-use resume objective examples for freshers, career changers, and experienced professionals — by role, for India.',
    url: 'https://cv-prime.in/resume-objective-examples',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Objective Examples 2026 — CV Prime' }],
  },
};

const faqItems = [
  {
    q: 'What is a resume objective?',
    a: 'A resume objective is a 1–3 line statement at the top of your resume that describes your career goals and what you bring to the role. It is typically used by freshers, career changers, and those re-entering the workforce — because it explains the "why" behind the application rather than a track record of achievements. For experienced professionals with a clear career trajectory, a professional summary (which highlights achievements) is usually more effective.',
  },
  {
    q: 'Should I use a resume objective or a professional summary?',
    a: 'Use a resume objective if: you are a fresher with no work experience, you are changing careers or industries, you have a significant employment gap, or the JD specifically asks for a career objective. Use a professional summary if: you have 3+ years of relevant experience, you are applying for a senior or specialised role, or you have strong, quantifiable achievements to lead with. For most Indian job seekers applying to corporate and tech roles with experience, a professional summary is the stronger choice.',
  },
  {
    q: 'How long should a resume objective be?',
    a: 'A resume objective should be 1–3 lines — approximately 30–60 words. Do not exceed 3 lines. Recruiters spend 6 seconds on an initial CV scan; an objective longer than 3 lines wastes space that should go to your experience or skills. For ATS purposes, the objective should include the exact job title you are targeting and 1–2 key skills from the job description.',
  },
  {
    q: 'What should a fresher include in a resume objective?',
    a: 'A fresher resume objective should include: (1) The exact job title you are applying for. (2) Your strongest relevant qualification (degree, specialisation, key course, certification). (3) Your best technical skill or project. (4) A direct statement of what you want to contribute. Formula: "Recent [degree] graduate in [field] from [college] seeking a [role] at [company type]. Strong skills in [2–3 relevant skills] with hands-on experience in [project or internship]. Eager to contribute to [specific team goal]."',
  },
  {
    q: 'Can I use the same objective for every job application?',
    a: 'No — and this is one of the biggest resume mistakes. Your objective should be tailored to each role and company. Change the job title, mirror the exact keywords from the JD, and reference the specific opportunity. Generic objectives like "seeking a challenging position in a dynamic company" are the most common reason objectives get flagged as low-effort. CV Prime\'s AI can rewrite your objective for each JD in under 30 seconds.',
  },
  {
    q: 'What is a good career objective for an MBA fresher?',
    a: 'For MBA freshers: lead with your B-school name and specialisation (they carry significant brand weight), reference your SIP (Summer Internship Project) as proof of your domain, and state the specific function and company type you are targeting. Example: "MBA (Finance) from IIM Kozhikode with SIP experience at HDFC Bank — trade finance and credit risk desk. Seeking an Analyst role in corporate banking or treasury. Strong in Excel-based financial modelling, DCF valuation, and structured credit analysis."',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
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
    { '@type': 'ListItem', position: 2, name: 'Resume Tips', item: 'https://cv-prime.in/resume-tips' },
    { '@type': 'ListItem', position: 3, name: 'Resume Objective Examples', item: 'https://cv-prime.in/resume-objective-examples' },
  ],
};

interface ObjectiveExample {
  role: string;
  stage: string;
  good: string;
  weak: string;
  whyGood: string;
}

const objectiveExamples: ObjectiveExample[] = [
  {
    role: 'Software Engineer (Fresher)',
    stage: 'Fresher',
    good:
      'B.Tech Computer Science graduate (CGPA 8.4/10) from NIT Trichy with a full-stack project using React and Node.js serving 1,200+ users. Seeking a Software Engineer role at a product company to build scalable web applications.',
    weak:
      'Seeking a challenging position in the software field where I can utilise my technical skills and grow professionally.',
    whyGood:
      'Includes CGPA, college name, specific tech stack, real project with user count, and exact role target.',
  },
  {
    role: 'Data Analyst (Fresher)',
    stage: 'Fresher',
    good:
      'Statistics graduate from Delhi University with hands-on experience in SQL, Python, and Tableau through 4 data projects and a Flipkart analytics internship (3 months). Seeking a Data Analyst role focused on e-commerce or consumer analytics.',
    weak:
      'Looking for a data analyst position to apply my knowledge of data analysis and improve my skills in a reputed organisation.',
    whyGood: 'Names specific tools, includes internship with company name, and states a domain preference that signals genuine fit.',
  },
  {
    role: 'Software Engineer (Career Change — from IT Services to Product)',
    stage: 'Career Change',
    good:
      'Software engineer with 3 years at TCS (Java, Spring Boot, microservices) transitioning to product-led startups. Completed system design course, contributed to open-source React project (340 GitHub stars). Seeking backend or full-stack role at a funded startup or unicorn.',
    weak:
      'Experienced software developer looking for new opportunities in the tech industry.',
    whyGood:
      'Explicitly names the transition, shows bridge credentials (OSS, course), and targets a specific company type.',
  },
  {
    role: 'Marketing Manager',
    stage: 'Experienced',
    good:
      'Performance marketing lead with 5 years managing ₹2Cr+ monthly Meta and Google Ads budgets for D2C brands. Seeking a Marketing Manager role to lead performance + brand integration for an e-commerce company at Series B or above.',
    weak:
      'Experienced marketing professional seeking a challenging role in a growing company with opportunities for career advancement.',
    whyGood:
      'States budget scale, platform expertise, years of experience, and is specific about stage of company targeted.',
  },
  {
    role: 'HR Generalist (Fresher)',
    stage: 'Fresher',
    good:
      'MBA (HR) from Symbiosis Pune with internship experience supporting end-to-end recruitment (40+ offers processed) at Persistent Systems. Skilled in Workday, Zoho Recruit, and structured interview frameworks. Seeking an HR Generalist or TA role in the IT/tech sector.',
    weak:
      'Passionate about human resources and seeking a position where I can contribute to organisational development.',
    whyGood:
      'Quantifies internship output, names specific HRIS tools, and clearly defines the sector targeted.',
  },
  {
    role: 'Finance Analyst',
    stage: 'Fresher',
    good:
      'CA Finalist and B.Com graduate from Christ University Bangalore with articleship at Deloitte — tax and statutory audit. Excel-proficient (VLOOKUP, Pivot Tables, financial modelling basics). Seeking a Finance Analyst role in BFSI or consulting.',
    weak:
      'Finance graduate looking for an entry-level position to utilise my accounting knowledge and grow in the finance field.',
    whyGood:
      'CA status, college, Big 4 articleship, and specific Excel skills make this a credible, specific objective.',
  },
  {
    role: 'Product Manager (Career Change — from Engineering)',
    stage: 'Career Change',
    good:
      'Software engineer (4 years, Swiggy) transitioning to product management. Completed Product School certification, led a 3-person internal tool project from concept to launch. Seeking an APM or PM-1 role at a consumer tech or B2B SaaS company.',
    weak:
      'Experienced professional looking to move from engineering into product management in a dynamic organisation.',
    whyGood: 'Names current company, names certification, shows product-adjacent experience, and specifies PM level being sought.',
  },
  {
    role: 'Content Writer',
    stage: 'Fresher',
    good:
      'English Literature graduate with 2 years of freelance B2B SaaS content writing (HubSpot, SEMrush, Freshworks clients). Averaging 4,000 words/day, SEO-optimised. Seeking a full-time content writer or SEO content strategist role at a SaaS or tech startup.',
    weak:
      'Creative writer with a passion for storytelling seeking a content writer position to develop my career.',
    whyGood: 'Names actual clients, shows output volume, highlights SEO awareness, and is very specific about role type.',
  },
];

export default function ResumeObjectiveExamplesPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <Sparkles className="h-4 w-4" />
            Resume objective examples 2026
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Resume objective examples —<br className="hidden sm:block" /> 50+ by role & career stage
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Real resume objective examples that work — for freshers, career changers, and experienced professionals.
            Each example shows the weak version, the strong version, and exactly why the strong version converts.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/dashboard"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Write my objective with AI
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resume-tips/resume-objective"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Resume objective vs summary guide
            </Link>
          </div>
        </div>
      </section>

      {/* Objective vs Summary */}
      <section className="border-b border-slate-200 bg-slate-50 px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-slate-900">
            Resume objective vs professional summary — which to use?
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6">
              <h3 className="font-display text-lg font-bold text-brand">Use a resume objective if…</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'You are a fresher with no full-time work experience',
                  'You are changing careers or switching industries',
                  'You have a significant employment gap (12+ months)',
                  'You are re-entering the workforce after a break',
                  'The JD explicitly asks for a career objective',
                  'You are applying for your first role after an MBA',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-0.5 shrink-0 text-brand">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="font-display text-lg font-bold text-emerald-900">Use a professional summary if…</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  'You have 3+ years of relevant work experience',
                  'You have quantifiable achievements to highlight',
                  'You are applying for a senior or specialist role',
                  'You are staying in the same field/industry',
                  'You have specific domain expertise to lead with',
                  'You are applying to product companies or MNCs',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-0.5 shrink-0 text-emerald-600">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The formula */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">The formula for a strong resume objective</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Most weak objectives fail because they are about the candidate&apos;s wants — not what they offer the
            employer. A strong objective reverses this: it leads with credentials and ends with a specific ask.
          </p>

          <div className="mt-10 rounded-2xl border border-brand/20 bg-brand/5 p-8">
            <h3 className="font-display text-xl font-bold text-slate-900">The 4-part formula</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { num: '1', label: 'Who you are', example: '"B.Tech CS graduate from BITS Pilani"' },
                { num: '2', label: 'Your strongest credential', example: '"CGPA 8.8, AWS Certified, Infosys internship"' },
                { num: '3', label: 'What you bring', example: '"Python + Django project serving 5K users"' },
                { num: '4', label: 'Exact role you want', example: '"Backend Engineer at a funded startup"' },
              ].map((part) => (
                <div key={part.num} className="rounded-xl border border-brand/10 bg-white p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white">
                    {part.num}
                  </div>
                  <p className="mt-3 text-sm font-bold text-slate-900">{part.label}</p>
                  <p className="mt-1 text-xs text-slate-500">{part.example}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-white p-4">
              <p className="text-xs font-bold uppercase text-slate-400">Result:</p>
              <p className="mt-2 text-sm text-slate-700">
                &ldquo;B.Tech Computer Science graduate from BITS Pilani (CGPA 8.8) with AWS Solutions Architect
                certification and a full-stack internship at Infosys. Built a Django + React project serving 5,000+
                users. Seeking a Backend Engineer role at a funded early-stage startup.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Examples by role */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Resume objective examples by role & stage</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            For each example, we show the weak version recruiters discard, the strong version that gets callbacks, and
            exactly why the strong version works.
          </p>

          <div className="mt-12 space-y-8">
            {objectiveExamples.map((example) => (
              <div key={example.role} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between px-6 py-4 bg-slate-900">
                  <h3 className="font-display text-lg font-bold text-white">{example.role}</h3>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-bold text-slate-300">
                    {example.stage}
                  </span>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  <div className="rounded-xl bg-rose-50 p-5">
                    <p className="text-xs font-bold uppercase text-rose-500">❌ Weak objective (gets ignored)</p>
                    <p className="mt-3 text-sm leading-7 text-slate-700">&ldquo;{example.weak}&rdquo;</p>
                  </div>
                  <div className="rounded-xl bg-green-50 p-5">
                    <p className="text-xs font-bold uppercase text-green-600">✓ Strong objective (gets callbacks)</p>
                    <p className="mt-3 text-sm leading-7 text-slate-700">&ldquo;{example.good}&rdquo;</p>
                  </div>
                </div>
                <div className="border-t border-slate-100 px-6 py-4">
                  <p className="text-xs font-bold uppercase text-slate-400">Why the strong version works:</p>
                  <p className="mt-1 text-sm text-slate-600">{example.whyGood}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More examples: City-specific / MBA */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">More objective examples by career stage</h2>

          <div className="mt-10 space-y-6">
            {/* MBA freshers */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">MBA Fresher</span>
                <h3 className="font-display text-lg font-bold text-slate-900">Marketing / Brand Role</h3>
              </div>
              <blockquote className="mt-4 rounded-xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                &ldquo;MBA (Marketing) from IIM Indore with SIP at Hindustan Unilever — rural distribution and new
                product launch (GT channel, ₹4Cr market). Strong in brand analytics, media planning, and Salesforce
                CRM. Seeking a Brand Manager or Marketing Analyst role at a FMCG company or D2C brand.&rdquo;
              </blockquote>
            </div>

            {/* Employment gap */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">Employment Gap</span>
                <h3 className="font-display text-lg font-bold text-slate-900">Returning to Work</h3>
              </div>
              <blockquote className="mt-4 rounded-xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                &ldquo;HR professional with 6 years in talent acquisition at Deloitte and Accenture (before a 2-year
                career break for family). Completed SHRM-CP certification during the break. Returning to a full-time
                HRBP or Sr. TA Specialist role — open to hybrid. Proficient in Workday, Greenhouse, and structured
                behavioural interviewing.&rdquo;
              </blockquote>
            </div>

            {/* Engineering to management */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-700">Career Change</span>
                <h3 className="font-display text-lg font-bold text-slate-900">Engineering to Management Consulting</h3>
              </div>
              <blockquote className="mt-4 rounded-xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                &ldquo;Mechanical engineer with 4 years in automotive (Mahindra, EV powertrain team) transitioning to
                management consulting. Completed McKinsey Problem Solving Game and Bain case preparation programme.
                Strong in data-driven problem decomposition, Excel modelling, and cross-functional project coordination.
                Seeking a Business Analyst or Associate role at a strategy consulting firm.&rdquo;
              </blockquote>
            </div>

            {/* Government job */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">Government / PSU</span>
                <h3 className="font-display text-lg font-bold text-slate-900">Entry-Level Government / PSU Role</h3>
              </div>
              <blockquote className="mt-4 rounded-xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                &ldquo;B.Tech Electrical Engineering graduate (7.8 CGPA) from Jadavpur University with GATE 2026 AIR
                340 (EE). Strong foundation in power systems, control systems, and industrial automation. Seeking an
                Engineer Trainee (ET) role at a PSU — BHEL, NTPC, PGCIL, or state electricity board.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Mistakes to avoid */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            5 resume objective mistakes that get you rejected
          </h2>
          <div className="mt-10 space-y-5">
            {[
              {
                num: '1',
                title: 'Making it about your wants, not your offer',
                desc: '"I want to grow professionally in a dynamic environment" tells recruiters nothing useful. Lead with what you bring, not what you want to get.',
              },
              {
                num: '2',
                title: 'Using a generic objective for every job',
                desc: 'A generic objective is the most common way to signal you have not read the JD. Tailor the role title, keywords, and focus area for every application.',
              },
              {
                num: '3',
                title: 'Writing more than 3 lines',
                desc: 'An objective is a hook, not a summary. Three lines maximum. If you need more space to explain your value, write a professional summary instead.',
              },
              {
                num: '4',
                title: 'Not including the target job title',
                desc: '"Seeking a challenging position" is meaningless. "Seeking a Data Engineer role at a product-led company" is specific, ATS-keyword-friendly, and shows intent.',
              },
              {
                num: '5',
                title: 'Omitting your strongest credential',
                desc: 'Your objective is a chance to immediately flag your best signal: CGPA, B-school, a Big 4 internship, a certification, or a project metric. Never write an objective without at least one specific credential.',
              },
            ].map((mistake) => (
              <div key={mistake.num} className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-sm font-bold text-rose-700">
                  {mistake.num}
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-slate-900">{mistake.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{mistake.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Resume objective — FAQ</h2>
          <div className="mt-10 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {faqItems.map((item, i) => (
              <FAQItem key={item.q} question={item.q} answer={item.a} defaultOpen={i === 0} tone="light" />
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-200 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-slate-900">Related guides & tools</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/resume-tips/resume-objective', label: 'Resume objective vs summary guide' },
              { href: '/resume-tips/resume-summary', label: 'How to write a professional summary' },
              { href: '/resume-tips/how-to-write-a-resume', label: 'How to write a resume' },
              { href: '/fresher-resume', label: 'Fresher resume guide' },
              { href: '/career-change-resume', label: 'Career change resume guide' },
              { href: '/mba-resume', label: 'MBA resume guide India' },
              { href: '/internship-resume', label: 'Internship resume guide' },
              { href: '/ai-resume-builder', label: 'AI resume builder' },
              { href: '/resume-checker', label: 'Free resume checker' },
              { href: '/tools/resume-strength-analyzer', label: 'Resume strength analyzer' },
              { href: '/resume-examples', label: 'Resume examples by role' },
              { href: '/cv-examples', label: 'CV examples by role' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-brand hover:text-brand"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Let AI write your resume objective for the specific role
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Paste the job description and your background — CV Prime&apos;s AI writes a targeted objective in 30
            seconds, with the exact keywords the ATS is scanning for.
          </p>
          <Link
            href="/signup?next=/dashboard"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
          >
            Write my objective with AI — free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-sm text-slate-400">Free · No credit card · 3 PDF exports included</p>
        </div>
      </section>

      <StickyCTA
        label="Write my objective with AI"
        message="AI writes a targeted resume objective for your specific role — free, 30 seconds"
      />
    </main>
  );
}
