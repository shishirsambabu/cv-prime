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
  { q: 'How long is the generated cover letter?', a: 'Every letter is 180–250 words — long enough for a real hook and one or two concrete achievements, short enough that a recruiter actually reads it.' },
  { q: 'Can I choose the tone?', a: 'Yes — professional, friendly, or executive. The AI adjusts word choice and formality while keeping the structure tight and the achievements yours.' },
  { q: 'Will it make up achievements I did not have?', a: 'No. The letter is generated only from what is in your resume and the job description you paste in — it will not invent employers, numbers, or accomplishments.' },
  { q: 'Do I need to pay to generate a cover letter?', a: 'You need a free CV Prime account and your own OpenRouter AI key. Generation costs a few paise in AI usage, billed by OpenRouter — CV Prime itself does not charge for this tool.' },
];

export default function AiCoverLetterPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Generate a tailored cover"
      highlight="letter"
      subtitle="Paste your resume and the job description. The AI writes a 180–250 word cover letter with a specific hook and your real achievements, in the tone you choose — never fabricating."
      path="/tools/ai-cover-letter"
      appName="AI Cover Letter Generator"
      faqs={faqs}
    >
      <CoverLetterAI />
    </AiToolLayout>
  );
}
