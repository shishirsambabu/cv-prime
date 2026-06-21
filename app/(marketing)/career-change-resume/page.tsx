import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Lightbulb, RefreshCw, Target, TrendingUp } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Career Change Resume Guide 2026 — How to Write a Resume When Switching Fields | CV Prime',
  description:
    'Complete guide to writing a career change resume in India 2026. How to highlight transferable skills, explain a career switch, pass ATS, and get interviews in your new field. Free template and examples.',
  alternates: { canonical: 'https://cv-prime.in/career-change-resume' },
  keywords: [
    'career change resume',
    'career switch resume',
    'career change cv',
    'how to write resume for career change',
    'career change resume india',
    'resume for changing careers',
    'transferable skills resume',
    'career transition resume',
    'career change resume format',
    'career switch cv india',
    'changing careers resume tips',
    'mid career change resume',
    'career change resume no experience',
  ],
  openGraph: {
    title: 'Career Change Resume Guide 2026 — Switch Fields & Get Interviews | CV Prime',
    description:
      'How to write a career change resume that passes ATS, explains your transition, and convinces hiring managers to give you a shot. Complete guide with examples for India 2026.',
    url: 'https://cv-prime.in/career-change-resume',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Career Change Resume Guide 2026 — CV Prime' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Should a career change resume use a functional or chronological format?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use a hybrid format for career changes — keep the reverse-chronological experience section (ATS requires this) but add a strong Skills summary section at the top that groups your transferable skills by category relevant to your new field. Pure functional resumes (skills-only, no chronological history) are heavily penalised by ATS systems and immediately raise red flags with human reviewers. The hybrid format keeps your chronological credibility while spotlighting the skills that matter for your new direction.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I explain a career change on my resume?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You explain a career change in three places: (1) In your resume summary — 2–3 lines that frame your background as an asset for the new field. (2) In your experience bullets — reframe past achievements using language and keywords from your new field. (3) In a cover letter — the resume summary starts the story; the cover letter completes it. On the resume itself, do not explain — demonstrate. Show transferable skills through specific achievements, not statements like "career change professional seeking."',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need new certifications for a career change resume?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on how far you are switching. If you are moving within adjacent fields (marketing → product management, finance → consulting), your existing experience may be sufficient with the right framing. If you are making a significant leap (civil engineer → UX designer, teacher → software developer), certifications are often necessary to prove baseline competency in the new field and to pass ATS keyword filters. Prioritise certifications that are well-recognised in your target field and that add specific keywords to your resume.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long should a career change resume be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One page if you have under 7 years of total experience. Two pages if you have 7+ years of experience and significant transferable achievements worth preserving. For career changers, the temptation is to include everything to demonstrate breadth — resist this. Only include experience from your old career that directly supports your application in the new field. Ruthlessly cut the rest.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most important section on a career change resume?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The resume summary at the top is the most important section on a career change resume. It is the only place where you can explicitly control the narrative of your transition. A strong summary takes 3 seconds to read and answers: who are you, what value do you bring from your background, and what you are targeting now. It is what separates a confusing career history from a compelling story of progression.',
      },
    },
  ],
};

const transferableCategories = [
  {
    from: 'Teaching',
    to: 'Corporate Training / L&D',
    skills: ['Curriculum design', 'Stakeholder communication', 'Performance assessment', 'Content delivery', 'Learning management systems (LMS)'],
    reframe: 'From "taught 200 students" → "designed and delivered learning programs for cohorts of 200+, achieving 87% assessment pass rate"',
  },
  {
    from: 'Military / Defence',
    to: 'Project Management / Operations',
    skills: ['Team leadership under pressure', 'Risk assessment and mitigation', 'Logistics and resource planning', 'Cross-functional coordination', 'Compliance and SOPs'],
    reframe: 'From "led platoon" → "led cross-functional teams of 30+ across multi-location operations with zero safety incidents over 3 years"',
  },
  {
    from: 'Finance / Accounting',
    to: 'Product Management / Strategy',
    skills: ['Data analysis and modelling', 'Business case development', 'Stakeholder reporting', 'P&L understanding', 'Process optimisation'],
    reframe: 'From "prepared financial models" → "built business cases and financial models that informed ₹15Cr capital allocation decisions"',
  },
  {
    from: 'Sales',
    to: 'Marketing / Growth / Customer Success',
    skills: ['Customer acquisition', 'Objection handling', 'CRM tools (Salesforce, HubSpot)', 'Pipeline management', 'Customer psychology understanding'],
    reframe: 'From "met sales targets" → "acquired 40+ enterprise accounts through consultative selling, maintaining 94% first-year retention"',
  },
  {
    from: 'Civil / Mechanical Engineering',
    to: 'Project Management / EPC / Real Estate',
    skills: ['Project scheduling (MS Project, Primavera)', 'Budget management and cost control', 'Vendor and contractor management', 'Technical documentation', 'On-site team coordination'],
    reframe: 'From "supervised construction" → "managed ₹8Cr construction project from foundation to handover, delivered 12 days ahead of schedule"',
  },
  {
    from: 'Journalism / Content Writing',
    to: 'Content Marketing / SEO / Copywriting',
    skills: ['Research and fact verification', 'Audience targeting', 'Deadline management', 'SEO fundamentals', 'Multi-platform content adaptation'],
    reframe: 'From "wrote articles" → "produced 40+ long-form articles/month for a 2M+ monthly readership digital publication; grew SEO traffic 35% over 8 months"',
  },
];

const steps = [
  {
    icon: Target,
    step: '1',
    title: 'Audit your transferable skills',
    desc: 'Before you write a word, list every skill you have that is relevant to your target field — even if acquired in a completely different context. Leadership, communication, analysis, project management, budgeting, research, presentation, client management — most of these are sector-agnostic.',
    actions: [
      'Study 5 JDs in your target field and highlight every repeated skill',
      'Map each skill to a specific achievement from your current/past experience',
      'Identify your top 3 transferable strengths — these anchor your summary and skills section',
    ],
  },
  {
    icon: RefreshCw,
    step: '2',
    title: 'Reframe your experience with new-field language',
    desc: "Your old job titles and descriptions are written for your old field. ATS systems and recruiters in your new field do not speak that language. You must translate every bullet point using the vocabulary of the field you are entering.",
    actions: [
      'Replace field-specific jargon with neutral or target-field terminology',
      'Replace generic verbs with action verbs used in the target field\'s JDs',
      'Rewrite each bullet to highlight the outcome most relevant to your new career target',
    ],
  },
  {
    icon: Lightbulb,
    step: '3',
    title: 'Write a targeted career change summary',
    desc: 'Your summary is the only place on your resume where you actively narrate your transition. It must answer: who are you, what is your bridge to this new field, and what makes you a credible candidate despite the non-traditional path.',
    actions: [
      'Open with your strongest credential for the new field (years of relevant experience, specific skill, or transferable outcome)',
      'Name the transition explicitly and briefly — no need to apologise for it',
      'Close with your target: "seeking to apply [X skill] in [Y type of role]"',
    ],
  },
  {
    icon: TrendingUp,
    step: '4',
    title: 'Bridge the gap with certifications and projects',
    desc: "If your experience doesn't directly map to your target field, build a bridge with targeted certifications, courses, and personal or freelance projects that demonstrate hands-on capability in the new domain.",
    actions: [
      'Identify 1–2 certifications that add critical keywords your old experience cannot supply',
      'Build a portfolio project in the new field — even a personal one — and document it on your resume',
      'Use volunteer or freelance work in the new field to create a genuine experience bullet',
    ],
  },
];

const resumeFormats = [
  {
    format: 'Hybrid (Skills + Chronological)',
    recommended: true,
    desc: 'Add a grouped "Key Skills" section at the top before your experience. Keep the full chronological work history. Best for most career changers.',
    pros: ['ATS-compatible', 'Highlights transferable skills prominently', 'Maintains credibility through work history'],
    cons: ['Requires careful reframing of each bullet'],
  },
  {
    format: 'Chronological with strong summary',
    recommended: false,
    desc: 'Standard format with a powerful 3-line summary that explicitly frames the career change. Best when your experience is naturally adjacent to the new field.',
    pros: ['Cleanest layout', 'Easiest for recruiter to scan', 'Works well for adjacent career moves'],
    cons: ['Summary must work very hard to bridge the gap', 'Less effective for large industry jumps'],
  },
  {
    format: 'Functional (Skills-first)',
    recommended: false,
    desc: 'Lists skills first, hides work history. Not recommended — triggers ATS failure and human suspicion.',
    pros: ['Can hide irrelevant history'],
    cons: ['Penalised by ATS systems', 'Red flag for experienced recruiters', 'Appears as attempting to hide something'],
  },
];

export default function CareerChangeResumePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white text-slate-900">
        {/* Nav */}
        <nav className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="text-lg font-bold text-brand">CV Prime</Link>
            <div className="flex items-center gap-4">
              <Link href="/resume-tips" className="hidden text-sm text-slate-600 hover:text-brand sm:block">Resume Tips</Link>
              <Link href="/signup" className="rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-white hover:bg-brand/90">
                Build Free
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="border-b border-slate-100 bg-gradient-to-b from-violet-50 to-white px-4 py-16 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1.5 text-sm font-semibold text-violet-700">
              <RefreshCw className="h-4 w-4" />
              Career Change Resume Guide 2026
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Career Change Resume —<br />
              <span className="text-violet-700">How to Switch Fields & Get Hired</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
              A career change resume is not about hiding your old career — it is about translating it. Here is the complete playbook for writing a resume that gets you interviews in a new field, in India 2026.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/signup"
                className="flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-brand/90"
              >
                Build My Career Change Resume Free <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/ats-checker"
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-brand/30 hover:text-brand"
              >
                Check ATS Score Free
              </Link>
            </div>
          </div>
        </section>

        {/* Key challenge */}
        <section className="border-b border-slate-100 bg-slate-50 px-4 py-10">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h2 className="mb-2 text-lg font-bold text-amber-900">The career change resume challenge</h2>
              <p className="text-sm text-amber-800">
                ATS systems are keyword-matching engines trained on standard career paths. A career change resume — by definition — has a history in the wrong field and is applying to a role with keywords it has never used. Without deliberate reframing, your resume will score poorly on ATS for your target role even if you are genuinely well-qualified. The solution is not to hide your history but to retranslate it using the language of your new field.
              </p>
            </div>
          </div>
        </section>

        {/* Step-by-step */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-3 text-3xl font-bold text-slate-900">How to write a career change resume — step by step</h2>
            <p className="mb-10 text-lg text-slate-600">Four steps to build a resume that bridges your old career and opens doors in the new one.</p>
            <div className="space-y-6">
              {steps.map((s) => (
                <div key={s.step} className="rounded-2xl border border-slate-200 p-6">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100">
                      <s.icon className="h-5 w-5 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5 pl-4">
                    {s.actions.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transferable skills by career */}
        <section className="border-y border-slate-100 bg-slate-50 px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-3 text-3xl font-bold text-slate-900">Transferable skills by career change type</h2>
            <p className="mb-10 text-lg text-slate-600">How to map your existing experience to skills valued in common career switch targets in India.</p>
            <div className="space-y-4">
              {transferableCategories.map((c) => (
                <div key={c.from} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">{c.from}</span>
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                    <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700">{c.to}</span>
                  </div>
                  <div className="mb-4">
                    <div className="mb-2 text-xs font-semibold uppercase text-slate-500">Key transferable skills</div>
                    <div className="flex flex-wrap gap-2">
                      {c.skills.map((sk) => (
                        <span key={sk} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">{sk}</span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg bg-emerald-50 p-3">
                    <div className="mb-1 text-xs font-semibold text-emerald-700">How to reframe for ATS</div>
                    <p className="text-xs text-emerald-800">{c.reframe}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Format comparison */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-3 text-3xl font-bold text-slate-900">Which resume format for a career change?</h2>
            <p className="mb-10 text-lg text-slate-600">Most advice gets this wrong. Here is what actually works with ATS and human reviewers.</p>
            <div className="grid gap-6 sm:grid-cols-3">
              {resumeFormats.map((f) => (
                <div key={f.format} className={`rounded-2xl border p-5 ${f.recommended ? 'border-emerald-300 bg-emerald-50' : 'border-slate-200 bg-white'}`}>
                  {f.recommended && (
                    <div className="mb-3 text-xs font-bold uppercase text-emerald-700">✓ Recommended</div>
                  )}
                  {!f.recommended && f.format.includes('Functional') && (
                    <div className="mb-3 text-xs font-bold uppercase text-red-600">✗ Avoid</div>
                  )}
                  <h3 className="mb-2 font-semibold text-slate-900">{f.format}</h3>
                  <p className="mb-3 text-xs text-slate-600">{f.desc}</p>
                  <div className="space-y-1">
                    {f.pros.map((p) => (
                      <div key={p} className="flex items-center gap-1.5 text-xs text-emerald-700">
                        <CheckCircle2 className="h-3 w-3 shrink-0" /> {p}
                      </div>
                    ))}
                    {f.cons.map((c) => (
                      <div key={c} className="flex items-center gap-1.5 text-xs text-red-600">
                        <span className="h-3 w-3 shrink-0 text-center font-bold">✗</span> {c}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-violet-600 to-brand px-4 py-16 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-3 text-3xl font-bold text-white">Retranslate your experience for your new field</h2>
            <p className="mb-8 text-lg text-white/80">Paste the job description from your target role and CV Prime identifies which keywords are missing from your current resume — and rewrites your bullets to close the gap.</p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-brand shadow-lg hover:bg-white/90"
            >
              Build My Career Change Resume Free <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">Career change resume — frequently asked questions</h2>
            <div className="space-y-4">
              {[
                { q: 'Should a career change resume use a functional or chronological format?', a: 'Use a hybrid format — keep the reverse-chronological experience section (required by ATS) but add a strong grouped "Key Skills" section at the top. Pure functional resumes are penalised by ATS systems and raise red flags with recruiters.' },
                { q: 'How do I explain a career change on my resume?', a: "Explain it in your resume summary (2–3 lines framing your background as an asset) and in a cover letter. On the resume itself, don't explain — demonstrate. Show transferable skills through specific achievements using the language of your new field." },
                { q: 'Do I need new certifications for a career change resume?', a: "For adjacent moves (marketing → product), existing experience may be enough with the right framing. For significant leaps (teacher → developer), certifications prove baseline competency and add critical ATS keywords. Prioritise well-recognised credentials in your target field." },
                { q: 'How long should a career change resume be?', a: 'One page if under 7 years of total experience. Two pages for 7+ years with significant transferable achievements. Include only experience from your old career that directly supports your application in the new field.' },
                { q: 'What is the most important section on a career change resume?', a: 'The resume summary at the top. It is your only opportunity to actively control the narrative of your transition and prevent the recruiter from misreading a non-linear career history.' },
              ].map((f) => (
                <details key={f.q} className="group rounded-xl border border-slate-200 p-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-3 font-semibold text-slate-800 marker:content-none">
                    {f.q}
                    <ArrowRight className="h-4 w-4 shrink-0 rotate-90 text-slate-400 group-open:rotate-[270deg] transition-transform" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="border-t border-slate-100 bg-slate-50 px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-xl font-bold text-slate-900">Related guides</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { href: '/resume-tips/resume-summary', label: 'Resume Summary Guide', desc: 'How to write a powerful career change summary' },
                { href: '/resume-tips/action-verbs', label: 'Resume Action Verbs', desc: '150+ verbs for every field and function' },
                { href: '/ats-checker', label: 'Free ATS Resume Checker', desc: 'Score your career change resume for any role' },
                { href: '/resume-tips/skills-section', label: 'Skills Section Guide', desc: 'How to structure transferable skills on your resume' },
                { href: '/fresher-resume', label: 'Fresher Resume Guide', desc: 'First-time resume tips for new graduates' },
                { href: '/resume-examples', label: 'Resume Examples by Role', desc: 'See examples for your target field' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-xl border border-slate-200 bg-white p-4 hover:border-brand/30 hover:shadow-sm transition-all"
                >
                  <div className="font-semibold text-slate-800 text-sm">{l.label}</div>
                  <div className="mt-1 text-xs text-slate-500">{l.desc}</div>
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
