import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { JdGeneratorAI } from '@/components/tools/JdGeneratorAI';

export const metadata: Metadata = {
  title: 'AI Job Description Generator — Single & Bulk, One Format | CV Prime',
  description:
    'Generate clean, consistent, ready-to-post job descriptions in one format — for a single role or in bulk (up to 8 at once). Pick a tone, then copy or download each as Markdown. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-jd-generator' },
  openGraph: {
    title: 'AI Job Description Generator — Single & Bulk',
    description: 'Structured, consistent job descriptions for one role or many at once. Copy or download each.',
    url: 'https://cv-prime.in/tools/ai-jd-generator',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Job Description Generator — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'Who is this tool for — job seekers or hiring managers?',
    a: 'Hiring managers, recruiters, and founders who need to write or standardise job postings quickly. It is CV Prime\'s one AI tool built for the hiring side rather than the job-seeker side.',
  },
  {
    q: 'How many job descriptions can I generate at once?',
    a: 'Generate a single role, or switch to bulk mode for up to 8 roles in one pass — each comes back in the same consistent structure and tone so your postings look like they came from one team.',
  },
  {
    q: 'Can I download the results?',
    a: 'Yes — copy any description to your clipboard, or download each one as a Markdown file ready to paste into your ATS, job board, or careers page.',
  },
];

export default function AiJdGeneratorPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Generate job"
      highlight="descriptions"
      subtitle="Write polished, consistent job descriptions in one clean format — a single role or up to 8 at once. Pick a tone, then copy or download each as Markdown, ready to post."
      slug="ai-jd-generator"
      schemaName="CV Prime AI Job Description Generator"
      schemaDescription="Generate clean, consistent, ready-to-post job descriptions with AI — a single role or in bulk, up to 8 at once."
      faqs={faqs}
    >
      <JdGeneratorAI />
    </AiToolLayout>
  );
}
