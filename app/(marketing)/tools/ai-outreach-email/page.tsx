import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { OutreachEmailAI } from '@/components/tools/OutreachEmailAI';

export const metadata: Metadata = {
  title: 'AI Job Outreach Email Generator — Cold, Follow-up & Thank-you | CV Prime',
  description:
    'Generate crisp recruiter outreach, application follow-up, and post-interview thank-you emails — specific subject line, human tone, under 140 words. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-outreach-email' },
  openGraph: {
    title: 'AI Job Outreach Email Generator',
    description: 'Cold outreach, follow-up, and thank-you emails that get replies.',
    url: 'https://cv-prime.in/tools/ai-outreach-email',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Outreach Email Generator — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'What kinds of emails can this generate?',
    a: 'Cold recruiter outreach, application follow-ups, and post-interview thank-you notes — each with a specific subject line and a human, non-templated tone.',
  },
  {
    q: 'Why keep the emails under 140 words?',
    a: 'Recruiters and hiring managers skim. A short, specific email that respects their time gets read and replied to far more often than a long one padded with generic enthusiasm.',
  },
  {
    q: 'Do I need to give it a lot of context?',
    a: 'A little goes a long way — the role, company, and one specific detail (a mutual connection, something about the JD, or how the interview went) is usually enough for a strong draft.',
  },
];

export default function AiOutreachEmailPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Write outreach that gets a"
      highlight="reply"
      subtitle="Pick the moment — cold outreach, a follow-up, or a post-interview thank-you — add a little context, and get a crisp, human email with a specific subject line, under 140 words."
      path="/tools/ai-outreach-email"
      schemaName="CV Prime AI Job Outreach Email Generator"
      schemaDescription="AI tool that generates cold outreach, follow-up, and thank-you emails for job seekers with a specific subject line, under 140 words. Runs on the user's own AI key."
      faqs={faqs}
    >
      <OutreachEmailAI />
    </AiToolLayout>
  );
}
