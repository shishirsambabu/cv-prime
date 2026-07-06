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
    q: 'What is an AI job description generator?',
    a: 'It is a tool that writes clean, structured job postings — role summary, responsibilities, requirements, and what the role offers — in one consistent format, for a single opening or in bulk (up to 8 roles at once), in the tone you choose.',
  },
  {
    q: 'Who is this tool for?',
    a: 'It is built for hiring managers, recruiters, and founders who need to post several roles in a consistent format without spending an hour per JD, and for anyone hiring at a small company without a dedicated recruiting team.',
  },
  {
    q: 'How does the JD generator work?',
    a: 'Describe the role (or roles, for bulk mode) and pick a tone. The AI generates a structured job description in one clean format each time, which you can copy directly or download as a Markdown file per role — ready to paste into a job board.',
  },
  {
    q: 'Can I generate multiple job descriptions at once?',
    a: 'Yes. Bulk mode handles up to 8 roles in a single run, each returned in the same consistent structure and tone, which is useful when you are opening several positions at once and want your postings to read as one coherent set.',
  },
  {
    q: 'Can I edit the generated job description afterward?',
    a: 'Yes. Treat the output as a strong first draft — copy it out or download the Markdown file and adjust specifics like exact compensation, location policy, or internal requisition details before posting it live.',
  },
];

export default function AiJdGeneratorPage(): JSX.Element {
  return (
    <AiToolLayout
      slug="ai-jd-generator"
      name="AI Job Description Generator"
      eyebrow="AI tool · your key"
      title="Generate job"
      highlight="descriptions"
      subtitle="Write polished, consistent job descriptions in one clean format — a single role or up to 8 at once. Pick a tone, then copy or download each as Markdown, ready to post."
      faqs={faqs}
    >
      <JdGeneratorAI />
    </AiToolLayout>
  );
}
