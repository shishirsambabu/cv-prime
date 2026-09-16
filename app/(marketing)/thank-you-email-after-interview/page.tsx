import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Thank You Email After Interview — 5 Templates You Can Send Today',
  description:
    'Exactly what to write in a thank you email after an interview, when to send it, and 5 ready-to-use templates — same-day, panel, phone screen, and no-response follow-up.',
  alternates: { canonical: 'https://cv-prime.in/thank-you-email-after-interview' },
  keywords: [
    'thank you email after interview',
    'interview follow up email',
    'post interview thank you email',
    'thank you email after interview sample',
    'follow up email after interview no response',
    'thank you email after panel interview',
    'thank you email after phone interview',
    'how to write a thank you email after an interview',
  ],
  openGraph: {
    title: 'Thank You Email After Interview — 5 Templates You Can Send Today | CV Prime',
    description:
      'What to write, when to send it, and 5 ready-to-use templates for every interview type.',
    url: 'https://cv-prime.in/thank-you-email-after-interview',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Thank you email after interview — CV Prime' }],
  },
};

const timing = [
  { title: 'Within 24 hours', body: 'Send it the same day, ideally within a few hours of the interview ending. It signals genuine interest and lands while the conversation is still fresh for the interviewer.' },
  { title: 'One email per interviewer', body: 'If you met multiple people, send each a short, slightly different note referencing what you actually discussed with them — not one copy-pasted message to everyone.' },
  { title: 'No response after a week?', body: 'A single polite follow-up 5–7 business days after the interview (or after their stated timeline passes) is appropriate. More than one follow-up without a reply usually does not help.' },
];

const templates = [
  {
    type: 'Same-day thank you (most interviews)',
    text: `Subject: Thank you — [Job Title] interview\n\nHi [Interviewer Name],\n\nThank you for taking the time to talk with me today about the [Job Title] role. I enjoyed our conversation about [specific topic discussed], and it confirmed how well my experience with [relevant skill/project] lines up with what your team needs.\n\nPlease let me know if there's anything further I can share. I'm looking forward to hearing about next steps.\n\nBest regards,\n[Your Name]`,
  },
  {
    type: 'After a panel interview',
    text: `Subject: Thank you — [Job Title] panel interview\n\nHi [Interviewer Name],\n\nThank you and the team for the thoughtful discussion today. I particularly appreciated [specific question or topic from that interviewer], and it reinforced my interest in contributing to [team/project mentioned].\n\nI'm confident my background in [relevant experience] would let me add value quickly. Happy to provide anything else that's useful for your decision.\n\nBest regards,\n[Your Name]`,
  },
  {
    type: 'After a phone/video screen',
    text: `Subject: Thanks for the call — [Job Title]\n\nHi [Interviewer Name],\n\nThanks for the call today — I enjoyed learning more about the [Job Title] role and [Company Name]'s plans for [team/product mentioned]. Our conversation made me even more interested in moving forward.\n\nLet me know if a follow-up call or any additional information would help as you move to the next round.\n\nBest regards,\n[Your Name]`,
  },
  {
    type: 'Short version (senior/executive roles)',
    text: `Subject: Thank you\n\nHi [Interviewer Name],\n\nThank you for the conversation today — I came away even more confident this is a strong mutual fit, particularly around [one specific point]. Happy to discuss further whenever useful.\n\nBest,\n[Your Name]`,
  },
  {
    type: 'Follow-up after no response (5–7 days later)',
    text: `Subject: Following up — [Job Title]\n\nHi [Interviewer Name],\n\nI wanted to follow up on my interview for the [Job Title] role on [date]. I remain very interested in the opportunity and would welcome any update on timeline or next steps whenever convenient.\n\nThanks again for your time.\n\nBest regards,\n[Your Name]`,
  },
];

const mistakes = [
  'Sending a generic note that never mentions anything specific from the actual conversation',
  'Waiting more than 24–48 hours to send it',
  'Copy-pasting the exact same email to every interviewer on a panel',
  'Making it long — a thank you email is 3–5 sentences, not a cover letter',
  'Re-litigating a question you think you answered badly instead of moving forward',
  'Forgetting to double-check the interviewer\'s name and title spelling',
];

const faqs = [
  {
    q: 'Do I really need to send a thank you email after an interview?',
    a: 'Yes. It costs a few minutes, keeps you visible while a decision is being made, and a surprising number of candidates skip it — which makes the ones who do send one stand out. It will not save a weak interview, but for two closely matched candidates it can be the differentiator.',
  },
  {
    q: 'How soon should I send a thank you email after an interview?',
    a: 'Within 24 hours, ideally the same day. Sending it while the conversation is still recent for the interviewer makes it feel genuine rather than a scheduled reminder.',
  },
  {
    q: 'What should a thank you email after an interview include?',
    a: 'Three things: thanks for their time, one specific detail from the actual conversation (a topic, question, or project you discussed), and a brief reaffirmation of your interest and fit. Keep it to 3–5 sentences — recruiters and hiring managers are reading many of these.',
  },
  {
    q: 'Should I send a separate thank you email to each interviewer on a panel?',
    a: 'Yes, when you have each person\'s email. Reference something specific to what you discussed with that individual rather than sending one identical message to everyone — panel interviewers often compare notes.',
  },
  {
    q: 'What if I do not hear back after my interview?',
    a: 'Wait until any timeline they gave you has passed, then send one polite follow-up — see the template above. Avoid sending more than one follow-up without a response; at that point, treat the silence as your answer and keep applying elsewhere.',
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
    { '@type': 'ListItem', position: 2, name: 'Thank You Email After Interview', item: 'https://cv-prime.in/thank-you-email-after-interview' },
  ],
};

export default function ThankYouEmailPage(): JSX.Element {
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
            <Mail className="h-4 w-4" />
            5 ready-to-send templates
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Thank you email after an interview: what to write and when
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A short, specific thank you email costs five minutes and keeps you visible while a hiring decision is being made. Here is exactly when to send it, five templates for every interview type, and the mistakes that make it fall flat.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/job-application-tracker" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Track this application free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/interview-questions" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Interview questions by role
            </Link>
          </div>
        </div>
      </section>

      {/* Timing */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center justify-center gap-2 text-brand">
            <Clock className="h-5 w-5" />
            <h2 className="font-display text-3xl font-bold sm:text-4xl">When to send it</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {timing.map((t) => (
              <div key={t.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-display text-lg font-bold text-white">{t.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">5 templates you can send today</h2>
          <div className="mt-10 space-y-6">
            {templates.map((t) => (
              <div key={t.type} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-brand">{t.type}</p>
                <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-6 text-slate-300">{t.text}</pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mistakes */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Mistakes that undercut it</h2>
          <ul className="mt-10 space-y-3">
            {mistakes.map((m) => (
              <li key={m} className="flex items-start gap-2 text-sm leading-6 text-slate-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Thank you email — FAQ</h2>
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
              { href: '/interview-questions', label: 'Interview questions by role' },
              { href: '/job-application-tracker', label: 'Job application tracker' },
              { href: '/tools/ai-interview-questions', label: 'AI interview question prep' },
              { href: '/cover-letter-generator', label: 'Cover letter generator' },
              { href: '/resume-tips', label: 'All resume tips' },
              { href: '/salary', label: 'Salary guide by role' },
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Keep every application organised</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Log this interview in CV Prime&rsquo;s free job tracker so you never miss a follow-up window — and get your resume tailored to the next role while you wait to hear back.
          </p>
          <Link href="/signup?next=/dashboard" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Start free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA href="/job-application-tracker" label="Track this application free" message="Never miss a follow-up window — track every application free" />
    </main>
  );
}
