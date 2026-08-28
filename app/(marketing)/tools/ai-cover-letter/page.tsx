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
    q: 'Will the cover letter make up experience I don\'t have?',
    a: 'No. The AI only draws on the resume and job description you paste in — it is instructed not to fabricate achievements, titles, or facts. It writes the hook and framing; you supply the real substance.',
  },
  {
    q: 'How long is the generated cover letter?',
    a: 'Around 180–250 words — long enough for a genuine hook and 2–3 concrete achievements tied to the JD, short enough that a recruiter actually reads the whole thing.',
  },
  {
    q: 'Can I choose the tone?',
    a: 'Yes — professional, friendly, or executive. Pick the tone before generating and the AI adjusts word choice and formality while keeping the same structure and facts.',
  },
  {
    q: 'Is this free to use?',
    a: 'Yes, with a free CV Prime account and your own connected OpenRouter API key. You pay only OpenRouter\'s small per-run token cost — there is no CV Prime subscription required for this tool.',
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
      appDescription="AI tool that generates a tailored 180-250 word cover letter from a resume and job description, in a chosen tone. Runs on the user's own AI key."
      faqs={faqs}
    >
      <CoverLetterAI />
    </AiToolLayout>
  );
}
