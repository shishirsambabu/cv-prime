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
    q: 'How many job descriptions can I generate in bulk?',
    a: 'Up to 8 roles at once. Each gets its own structured description in the same consistent format, so a batch of postings reads like one coherent set rather than eight different styles.',
  },
  {
    q: 'Can I download the generated descriptions?',
    a: 'Yes — copy any description individually or download it as Markdown, ready to paste into your ATS, careers page, or job board listing.',
  },
  {
    q: 'Who is this tool for — candidates or hiring teams?',
    a: 'It is built for hiring teams and founders writing job postings, not job seekers. If you are job hunting, use the AI JD decoder instead to interpret postings you find.',
  },
];

export default function AiJdGeneratorPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Generate job"
      highlight="descriptions"
      subtitle="Write polished, consistent job descriptions in one clean format — a single role or up to 8 at once. Pick a tone, then copy or download each as Markdown, ready to post."
      path="/tools/ai-jd-generator"
      schemaName="CV Prime AI Job Description Generator"
      schemaDescription="AI tool that generates consistent, ready-to-post job descriptions for a single role or in bulk up to 8 at once. Runs on the user's own AI key."
      faqs={faqs}
    >
      <JdGeneratorAI />
    </AiToolLayout>
  );
}
