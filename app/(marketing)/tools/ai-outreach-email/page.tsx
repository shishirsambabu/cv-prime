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
    q: 'What kinds of emails can this write?',
    a: 'Three moments: cold recruiter outreach, an application follow-up, and a post-interview thank-you — each with a different structure and goal.',
  },
  {
    q: 'Why keep it under 140 words?',
    a: 'Recruiters skim. A short, specific email with a clear ask gets read and replied to far more often than a long one — the AI is tuned to stay concise while still sounding human.',
  },
  {
    q: 'Does it write a subject line too?',
    a: 'Yes — every email comes with a specific subject line, since a generic one is often the reason outreach never gets opened.',
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
      name="AI Job Outreach Email Generator"
      description="Free AI tool that generates cold outreach, follow-up, and thank-you emails for a job search, under 140 words with a specific subject line."
      faqs={faqs}
      relatedLinks={[
        { href: '/tools/ai-cover-letter', label: 'AI cover letter generator' },
        { href: '/tools/ai-linkedin', label: 'AI LinkedIn generator' },
        { href: '/tools/ai-salary-negotiation', label: 'AI salary negotiation coach' },
        { href: '/tools', label: 'All free tools' },
      ]}
    >
      <OutreachEmailAI />
    </AiToolLayout>
  );
}
