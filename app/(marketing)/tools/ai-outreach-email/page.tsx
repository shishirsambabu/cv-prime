import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AiToolFaq } from '@/components/tools/ai/AiToolFaq';
import { OutreachEmailAI } from '@/components/tools/OutreachEmailAI';

const faqs = [
  {
    q: 'What kinds of emails can this tool write?',
    a: 'Three moments in a job search: cold outreach to a recruiter or hiring manager, a follow-up after you have already applied or spoken with someone, and a post-interview thank-you note. Each is generated with a specific subject line, a human (not corporate) tone, and kept under 140 words so it actually gets read.',
  },
  {
    q: 'Why does email length matter for job outreach?',
    a: 'Recruiters and hiring managers skim. A cold email or follow-up that runs long is far more likely to be ignored than a tight, specific one. Keeping the generated email under 140 words is a deliberate constraint, not a limitation — short, concrete emails consistently get more replies than long, generic ones.',
  },
  {
    q: 'Does it personalise the email to the actual role and company?',
    a: 'Yes — you add context (the role, the company, and why you are reaching out) and the AI builds the email around that specific situation rather than producing a generic template. The goal is an email that reads like it was written for that one recruiter, not copy-pasted.',
  },
  {
    q: 'Is the AI outreach email generator free?',
    a: 'Yes. It runs on your own OpenRouter API key, which costs a few paise per email, and does not require a paid CV Prime plan.',
  },
];

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

export default function AiOutreachEmailPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Write outreach that gets a"
      highlight="reply"
      subtitle="Pick the moment — cold outreach, a follow-up, or a post-interview thank-you — add a little context, and get a crisp, human email with a specific subject line, under 140 words."
    >
      <OutreachEmailAI />
      <AiToolFaq
        toolName="AI Job Outreach Email Generator"
        toolUrl="https://cv-prime.in/tools/ai-outreach-email"
        description="Generate crisp recruiter outreach, application follow-up, and post-interview thank-you emails — specific subject line, human tone, under 140 words."
        faqs={faqs}
        related={[
          { href: '/tools/ai-jd-decoder', label: 'AI job description decoder' },
          { href: '/tools/ai-cover-letter', label: 'AI cover letter generator' },
        ]}
      />
    </AiToolLayout>
  );
}
