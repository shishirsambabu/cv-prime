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
    a: 'Every draft lands in the 180-250 word range — long enough for a real hook and one or two concrete achievements, short enough that a recruiter actually reads the whole thing.',
  },
  {
    q: 'Does it invent achievements I never had?',
    a: 'No. The AI only draws on what your resume actually says. It selects and reframes your real, relevant achievements for this specific job rather than fabricating new ones — you should still proofread before sending.',
  },
  {
    q: 'Can I choose the tone?',
    a: 'Yes — professional, friendly, or executive. Pick the one that matches the company culture and seniority of the role, then edit freely; the draft is a strong starting point, not a final answer.',
  },
];

export default function AiCoverLetterPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Generate a tailored cover"
      highlight="letter"
      subtitle="Paste your resume and the job description. The AI writes a 180–250 word cover letter with a specific hook and your real achievements, in the tone you choose — never fabricating."
      slug="ai-cover-letter"
      schemaName="CV Prime AI Cover Letter Generator"
      schemaDescription="Generate a tailored 180-250 word cover letter from your resume and a job description, in a professional, friendly, or executive tone."
      faqs={faqs}
    >
      <CoverLetterAI />
    </AiToolLayout>
  );
}
