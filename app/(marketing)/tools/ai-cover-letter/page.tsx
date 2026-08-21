import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AiToolSchema } from '@/components/tools/ai/AiToolSchema';
import { AiToolFaq } from '@/components/tools/ai/AiToolFaq';
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
    a: '180–250 words — long enough for a real hook and two or three concrete achievements, short enough that a recruiter actually reads the whole thing.',
  },
  {
    q: "Does it make up achievements that aren't in my resume?",
    a: 'No. The generator only uses what is in the resume and job description you provide — it will not fabricate accomplishments, so the letter stays something you can defend in an interview.',
  },
  {
    q: 'Can I choose the tone?',
    a: 'Yes — pick professional, friendly, or executive before generating, and the letter\'s voice adjusts accordingly while keeping the same factual content.',
  },
];

export default function AiCoverLetterPage(): JSX.Element {
  return (
    <>
      <AiToolSchema
        name="CV Prime AI Cover Letter Generator"
        path="/tools/ai-cover-letter"
        description="AI tool that writes a tailored 180-250 word cover letter from your resume and a job description, in a professional, friendly, or executive tone. Runs on your own AI key."
        breadcrumbLabel="AI Cover Letter Generator"
        faqs={faqs}
      />
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Generate a tailored cover"
        highlight="letter"
        subtitle="Paste your resume and the job description. The AI writes a 180–250 word cover letter with a specific hook and your real achievements, in the tone you choose — never fabricating."
      >
        <CoverLetterAI />
        <AiToolFaq heading="AI cover letter generator — FAQ" faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
