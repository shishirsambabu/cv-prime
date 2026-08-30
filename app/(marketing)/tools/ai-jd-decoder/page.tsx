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

export default function AiJdDecoderPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Decode the job"
      highlight="description"
      subtitle="Paste any JD and the AI reveals what they actually want: real must-haves vs nice-to-haves, unstated expectations, red flags, and the exact keywords to mirror in your resume."
      schema={{
        name: 'AI Job Description Decoder — CV Prime',
        description: 'Decode any JD: must-haves, hidden requirements, red flags, keywords to mirror.',
        url: 'https://cv-prime.in/tools/ai-jd-decoder',
      }}
    >
      <JdDecoderAI />
    </AiToolLayout>
  );
}
