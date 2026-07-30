import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { JdDecoderAI } from '@/components/tools/JdDecoderAI';

export const metadata: Metadata = {
  title: 'AI Job Description Decoder — Must-Haves, Hidden Asks, Red Flags | CV Prime',
  description:
    'Paste a job description and the AI decodes it: real seniority, true must-haves vs nice-to-haves, unstated expectations, red flags, and the exact keywords to mirror in your resume. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-jd-decoder' },
  openGraph: {
    title: 'AI Job Description Decoder',
    description: 'Decode any JD: must-haves, hidden requirements, red flags, keywords to mirror.',
    url: 'https://cv-prime.in/tools/ai-jd-decoder',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI JD Decoder — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'How does the decoder tell must-haves from nice-to-haves?',
    a: 'The AI reads the language and placement of each requirement — items framed as required, listed first, or repeated tend to be true must-haves, while items softened with "preferred" or "bonus" are treated as nice-to-haves. It flags both explicitly so you know where to focus.',
  },
  {
    q: 'What kind of red flags does it catch?',
    a: 'Things like vague scope ("wears many hats"), unrealistic requirement stacking for the seniority offered, unpaid overtime signals, or a mismatch between the stated title and the actual responsibilities listed.',
  },
  {
    q: 'What should I do with the keywords it gives me?',
    a: 'Weave the ones that are genuinely true for you into your resume\'s skills section and bullets — naturally, not as a dumped list. Then run the AI ATS score checker to confirm your resume now matches this exact JD.',
  },
];

export default function AiJdDecoderPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Decode the job"
      highlight="description"
      subtitle="Paste any JD and the AI reveals what they actually want: real must-haves vs nice-to-haves, unstated expectations, red flags, and the exact keywords to mirror in your resume."
      slug="ai-jd-decoder"
      schemaName="CV Prime AI Job Description Decoder"
      schemaDescription="Decode any job description with AI: real must-haves vs nice-to-haves, unstated expectations, red flags, and the exact keywords to mirror in your resume."
      faqs={faqs}
    >
      <JdDecoderAI />
    </AiToolLayout>
  );
}
