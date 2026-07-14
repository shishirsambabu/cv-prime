import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { OutreachEmailAI } from '@/components/tools/OutreachEmailAI';
import { AiToolFaq, type AiToolFaqItem } from '@/components/tools/ai/AiToolFaq';
import { aiToolSchemas } from '@/lib/aiToolSchemas';

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

const faqs: AiToolFaqItem[] = [
  {
    q: 'Which types of emails can this generate?',
    a: 'Three moments in the job search: cold outreach to a recruiter or hiring manager, a polite follow-up after applying with no response, and a post-interview thank-you note. Pick the moment and the AI matches structure and tone to it.',
  },
  {
    q: 'Why is there a 140-word limit?',
    a: 'Busy recruiters and hiring managers skim. A short, specific email with a clear subject line gets read and replied to far more often than a long one — the tool is built to force the essential points to the top and cut filler.',
  },
  {
    q: 'Does it write a generic template or something specific to me?',
    a: 'Give it context — the role, company, and your relevant background — and it writes an email specific to that situation, not a fill-in-the-blank template. Generic-sounding cold emails are the ones that get ignored.',
  },
  {
    q: 'Will it also write the subject line?',
    a: 'Yes — every generated email includes a specific subject line tuned to the email type, since a vague subject line is one of the most common reasons outreach emails go unopened.',
  },
];

export default function AiOutreachEmailPage(): JSX.Element {
  const schemas = aiToolSchemas({
    name: 'CV Prime AI Job Outreach Email Generator',
    path: '/tools/ai-outreach-email',
    breadcrumbName: 'AI Outreach Email Generator',
    description: 'AI tool that generates cold outreach, follow-up, and thank-you job search emails with a subject line, under 140 words.',
    faqs,
  });
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Write outreach that gets a"
        highlight="reply"
        subtitle="Pick the moment — cold outreach, a follow-up, or a post-interview thank-you — add a little context, and get a crisp, human email with a specific subject line, under 140 words."
      >
        <OutreachEmailAI />
        <AiToolFaq faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
