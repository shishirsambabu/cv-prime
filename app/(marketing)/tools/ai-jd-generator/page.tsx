import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AiToolSchema } from '@/components/tools/ai/AiToolSchema';
import { AiToolFaq } from '@/components/tools/ai/AiToolFaq';
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
    q: 'Can I generate more than one job description at once?',
    a: 'Yes — the bulk mode generates up to 8 job descriptions in one pass, each in the same consistent format, useful if you are hiring for several roles at once.',
  },
  {
    q: 'What format do I get the output in?',
    a: 'Every job description comes out in the same clean structure, and you can copy it directly or download it as Markdown, ready to paste into a job board or ATS.',
  },
  {
    q: 'Who is this tool for?',
    a: 'Recruiters, hiring managers, and founders writing job postings — not job seekers. If you are job hunting, the AI Job Description Decoder and AI ATS score checker are the relevant tools instead.',
  },
];

export default function AiJdGeneratorPage(): JSX.Element {
  return (
    <>
      <AiToolSchema
        name="CV Prime AI Job Description Generator"
        path="/tools/ai-jd-generator"
        description="AI tool that generates clean, consistent, ready-to-post job descriptions for a single role or in bulk (up to 8 at once). Runs on your own AI key."
        breadcrumbLabel="AI Job Description Generator"
        faqs={faqs}
      />
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Generate job"
        highlight="descriptions"
        subtitle="Write polished, consistent job descriptions in one clean format — a single role or up to 8 at once. Pick a tone, then copy or download each as Markdown, ready to post."
      >
        <JdGeneratorAI />
        <AiToolFaq heading="AI job description generator — FAQ" faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
