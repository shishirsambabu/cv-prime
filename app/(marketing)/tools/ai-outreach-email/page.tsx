import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AiToolSchema } from '@/components/tools/ai/AiToolSchema';
import { AiToolFaq } from '@/components/tools/ai/AiToolFaq';
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
    q: 'What types of emails can it write?',
    a: 'Three moments: cold outreach to a recruiter or hiring manager, an application follow-up, and a post-interview thank-you — each with its own tone and structure.',
  },
  {
    q: 'How long are the emails?',
    a: 'Under 140 words, with a specific subject line — short enough to actually get read and replied to, not a generic template that sounds like everyone else\'s.',
  },
  {
    q: 'What context do I need to provide?',
    a: 'A little context about the role, company, and moment — who you are emailing and why. The more specific you are, the less generic the output.',
  },
];

export default function AiOutreachEmailPage(): JSX.Element {
  return (
    <>
      <AiToolSchema
        name="CV Prime AI Job Outreach Email Generator"
        path="/tools/ai-outreach-email"
        description="AI tool that writes cold outreach, application follow-up, and post-interview thank-you emails under 140 words with a specific subject line. Runs on your own AI key."
        breadcrumbLabel="AI Job Outreach Email Generator"
        faqs={faqs}
      />
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Write outreach that gets a"
        highlight="reply"
        subtitle="Pick the moment — cold outreach, a follow-up, or a post-interview thank-you — add a little context, and get a crisp, human email with a specific subject line, under 140 words."
      >
        <OutreachEmailAI />
        <AiToolFaq heading="AI outreach email generator — FAQ" faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
