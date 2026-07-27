import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { CoverLetterAI } from '@/components/tools/CoverLetterAI';

export const metadata: Metadata = {
  title: 'AI Cover Letter Generator — Tailored to the Job (Free) | CV Prime',
  description:
    'Paste your resume and a job description and get a tailored 180–250 word cover letter with a real hook and your concrete achievements — in a professional, friendly, or executive tone. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-cover-letter' },
  openGraph: {
    title: 'AI Cover Letter Generator — Tailored to Any Job',
    description: 'A tailored cover letter from your resume and the job description, in seconds.',
    url: 'https://cv-prime.in/tools/ai-cover-letter',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Cover Letter Generator — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'How long is the generated cover letter?',
    a: 'Each letter is 180 to 250 words — long enough for a real hook and one or two concrete achievements, short enough that a recruiter actually reads the whole thing.',
  },
  {
    q: 'Can I choose the tone of the letter?',
    a: 'Yes. Pick professional, friendly, or executive before generating, and the AI adjusts word choice and formality while keeping the same structure and your real achievements.',
  },
  {
    q: 'Does the AI make up experience I do not have?',
    a: 'No. It only uses what is in your pasted resume and the job description you provide — it will not invent achievements, employers, or dates.',
  },
];

export default function AiCoverLetterPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Generate a tailored cover"
      highlight="letter"
      subtitle="Paste your resume and the job description. The AI writes a 180–250 word cover letter with a specific hook and your real achievements, in the tone you choose — never fabricating."
      path="/tools/ai-cover-letter"
      schemaName="CV Prime AI Cover Letter Generator"
      schemaDescription="AI tool that generates a tailored 180-250 word cover letter from a resume and job description in a chosen tone. Runs on the user's own AI key."
      faqs={faqs}
    >
      <CoverLetterAI />
    </AiToolLayout>
  );
}
