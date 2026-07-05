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
    a: 'Three moments in a job search: cold outreach to a recruiter or hiring manager, an application follow-up when you have not heard back, and a post-interview thank-you note.',
  },
  {
    q: 'Why keep it under 140 words?',
    a: 'Recruiters skim. A short, specific email with a clear subject line gets read and replied to far more often than a long one — the tool is built to stay concise by default.',
  },
  {
    q: 'Will the email sound like a template?',
    a: 'It is written from the context you provide — the role, company, and your specific angle — so it reads as a human, personalized note rather than a generic mail-merge script.',
  },
  {
    q: 'Does this need my resume?',
    a: 'No, just a little context about the role and your goal for the message. For a tailored resume to attach alongside your outreach, use CV Prime\'s AI CV builder separately.',
  },
];

export default function AiOutreachEmailPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Write outreach that gets a"
      highlight="reply"
      subtitle="Pick the moment — cold outreach, a follow-up, or a post-interview thank-you — add a little context, and get a crisp, human email with a specific subject line, under 140 words."
      slug="ai-outreach-email"
      appName="CV Prime AI Job Outreach Email Generator"
      faqs={faqs}
    >
      <OutreachEmailAI />
    </AiToolLayout>
  );
}
