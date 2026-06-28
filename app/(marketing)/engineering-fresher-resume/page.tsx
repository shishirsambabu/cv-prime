import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, GraduationCap, Code2, FolderGit2, ListOrdered } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Engineering Fresher Resume — CV Format for B.Tech Freshers | CV Prime',
  description:
    'The right resume format for engineering freshers in India: how to lead with projects, present CGPA and internships, list technical skills, and pass the ATS with no work experience. Build it free with AI.',
  alternates: { canonical: 'https://cv-prime.in/engineering-fresher-resume' },
  keywords: [
    'engineering fresher cv format',
    'engineering fresher resume',
    'fresher engineer resume format',
    'b.tech fresher resume',
    'resume format for engineering freshers',
    'fresher engineering resume india',
    'engineering student resume',
    'cv format for btech freshers',
    'fresher developer resume',
    'campus placement engineering resume',
  ],
  openGraph: {
    title: 'Engineering Fresher Resume — CV Format for B.Tech Freshers | CV Prime',
    description:
      'Lead with projects, present CGPA and internships, list skills, and pass the ATS with no experience. Build it free with AI.',
    url: 'https://cv-prime.in/engineering-fresher-resume',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Engineering fresher resume — CV Prime' }],
  },
};

const sectionOrder = [
  { n: '1', name: 'Header', detail: 'Name, phone, professional email, city, and your GitHub and LinkedIn URLs as plain text. For engineering freshers, a GitHub link is close to essential.' },
  { n: '2', name: 'Objective / summary', detail: '1–2 lines stating the role you want and your strongest relevant skills or project. As a fresher, a focused objective works well.' },
  { n: '3', name: 'Technical skills', detail: 'Languages, frameworks, databases, and tools, grouped clearly and spelled exactly as job descriptions list them — your densest keyword section.' },
  { n: '4', name: 'Projects', detail: 'Your strongest evidence. 2–4 projects, each with the tech stack and a measurable outcome. Place this high — for freshers it often outweighs experience.' },
  { n: '5', name: 'Internships / experience', detail: 'Any internships, training, or freelance work, with quantified bullets. If you have none, projects and skills carry the resume.' },
  { n: '6', name: 'Education', detail: 'Degree, college, year, and CGPA/percentage. Engineering freshers should include CGPA prominently, plus relevant coursework if space allows.' },
];

const projectExample = {
  weak: 'Made a college project on a library management system using Java.',
  strong: 'Built a library management system (Java, MySQL, JavaFX) used by 200+ students in a campus pilot, cutting book-issue time from 5 minutes to under 30 seconds.',
};

const tips = [
  { icon: FolderGit2, title: 'Lead with projects, not a thin experience section', body: 'With little or no work history, your academic and personal projects are the main proof of skill. Put them high and make each one concrete, with the stack and a result.' },
  { icon: Code2, title: 'List skills exactly as JDs phrase them', body: 'Engineering ATS screens hard on specific technologies. Write "Node.js" not "NodeJS", "PostgreSQL" not "Postgres", and mirror the job description\'s terms.' },
  { icon: GraduationCap, title: 'Show CGPA and relevant coursework', body: 'For freshers, academics matter. Include your CGPA or percentage, and add relevant coursework or specialisations when they match the role.' },
];

const faqs = [
  {
    q: 'What is the best resume format for an engineering fresher?',
    a: 'For an engineering fresher, the best format is a single-page, single-column resume in this order: header (with GitHub/LinkedIn), a short objective, a detailed technical skills section, projects, any internships, and education with CGPA. Projects and skills lead because they are your strongest evidence when you have little work experience. Keep it ATS-readable — no columns or graphics — and mirror the job description\'s keywords so it passes the screen.',
  },
  {
    q: 'How do I write an engineering resume with no work experience?',
    a: 'Lead with what you do have: academic and personal projects, internships or training, and technical skills. Turn each project into a concrete bullet that names the tech stack and a measurable outcome, rather than a one-line description. Add your GitHub so recruiters can verify your work. A strong projects section plus a precise skills list can make a no-experience resume read as genuinely capable — and CV Prime\'s AI helps you write those bullets without exaggerating.',
  },
  {
    q: 'Should an engineering fresher include CGPA on the resume?',
    a: 'Yes. For freshers and candidates with under about three years of experience, CGPA or percentage is expected on Indian engineering resumes — companies use it as an early signal. Include it in your education section, and add relevant coursework or specialisations if they match the role. Once you have a few years of work experience, you can drop it in favour of professional achievements.',
  },
  {
    q: 'How long should a fresher engineering resume be?',
    a: 'One page. As a fresher you should not need more, and recruiters strongly prefer a single, focused page. Use the space for a tight skills section and 2–4 strong projects rather than padding. If you find yourself spilling onto a second page, tighten your bullets and cut anything not relevant to the specific role you are applying for.',
  },
  {
    q: 'How can CV Prime help an engineering fresher\'s resume?',
    a: 'CV Prime structures your resume in the fresher-friendly format, helps you turn rough project descriptions into quantified, recruiter-ready bullets without inventing facts, lists your skills in an ATS-readable way, and scores your resume against the specific job description so you know it will pass. It is free to start with 3 clean PDF exports, which is enough to apply to campus and off-campus roles.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Engineering Fresher Resume', item: 'https://cv-prime.in/engineering-fresher-resume' },
  ],
};

export default function EngineeringFresherResumePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <GraduationCap className="h-4 w-4" />
            B.Tech freshers · Projects-first · ATS-ready
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The engineering fresher resume that gets shortlisted
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            No work experience yet? Your projects, skills, and internships are the proof. Here is the exact CV format for engineering freshers — what to lead with, how to present CGPA and projects, and how to pass the ATS — then build it free with AI.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Build my fresher resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/resume-template-for-engineers" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Engineering templates
            </Link>
          </div>
        </div>
      </section>

      {/* Section order */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">The fresher resume section order</h2>
            <p className="mt-4 text-slate-400">Projects and skills lead — experience does not have to</p>
          </div>
          <div className="mt-12 space-y-4">
            {sectionOrder.map((s) => (
              <div key={s.name} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand text-brand-foreground font-display font-bold">{s.n}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{s.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project example */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-2 text-brand">
            <ListOrdered className="h-6 w-6" />
            <h2 className="font-display text-3xl font-bold text-white">Make your projects count</h2>
          </div>
          <p className="mt-3 text-center text-slate-400">The single biggest lever on a fresher engineering resume</p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-5">
            <div className="rounded-2xl bg-white/[0.04] p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-red-500">Weak</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{projectExample.weak}</p>
            </div>
            <div className="rounded-2xl bg-white/[0.04] p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-green-600">Strong</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">{projectExample.strong}</p>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">Name the stack and a measurable outcome. CV Prime&apos;s AI helps you write these from your real project — without inventing results.</p>
        </div>
      </section>

      {/* Tips */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What sets a fresher resume apart</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {tips.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{c.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{c.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Engineering fresher resume — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white/[0.04] p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-white">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-white/10 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-white">Related guides & tools</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/fresher-resume', label: 'Fresher resume guide' },
              { href: '/campus-placement-resume', label: 'Campus placement resume' },
              { href: '/internship-resume', label: 'Internship resume' },
              { href: '/resume-template-for-engineers', label: 'Resume template for engineers' },
              { href: '/software-engineer-resume', label: 'Software engineer resume' },
              { href: '/resume-builder/software-engineer', label: 'SDE resume builder' },
              { href: '/resume-tips/quantifying-achievements', label: 'Quantifying achievements' },
              { href: '/ats-score-checker', label: 'Free ATS score checker' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-brand hover:text-brand">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Turn projects into a job-winning resume</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            CV Prime helps engineering freshers build a projects-first, ATS-ready resume that gets past the screen. Free to start.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Build my fresher resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build my fresher resume" message="Projects-first, ATS-ready resume for engineering freshers — free" />
    </main>
  );
}
