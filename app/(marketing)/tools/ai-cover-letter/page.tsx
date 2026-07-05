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
    a: 'Every letter targets 180–250 words — long enough to make a real case, short enough that a recruiter actually reads the whole thing. It opens with a specific hook tied to the role, not a generic greeting.',
  },
  {
    q: 'Can I control the tone?',
    a: 'Yes. Choose professional, friendly, or executive tone before generating, and the letter is written to match — the same facts, phrased differently for the audience.',
  },
  {
    q: 'Does it make up achievements I did not have?',
    a: 'No. The AI is instructed to draw only from what is in your resume and the job description — it sharpens and connects your real experience to the role instead of inventing accomplishments.',
  },
  {
    q: 'Is this free to use?',
    a: 'Yes, it runs on your own connected AI key inside your CV Prime account, which costs a few paise per generation — there is no separate paywall on the tool itself.',
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
      appName="CV Prime AI Cover Letter Generator"
      faqs={faqs}
    >
      <CoverLetterAI />
    </AiToolLayout>
  );
}
