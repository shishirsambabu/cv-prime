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
    q: 'What does "decoding" a JD actually mean?',
    a: 'Job descriptions mix genuine must-haves with wishlist items and unstated assumptions. The AI separates the two, flags anything that reads as a red flag (vague scope, unrealistic range of duties, mismatched seniority), and lists the exact keywords worth mirroring in your resume.',
  },
  {
    q: 'Does it just repeat the JD back to me?',
    a: 'No — it reorganizes and interprets it: what\'s really required vs nice-to-have, what\'s implied but not stated, and any warning signs, rather than restating the listing itself.',
  },
  {
    q: 'How should I use the keyword list it gives me?',
    a: 'Weave the genuinely-true ones into your resume\'s skills section and bullet points naturally — don\'t paste them as a raw list. Pair this with the AI ATS score tool to confirm your match improved.',
  },
  {
    q: 'Do I need to sign up?',
    a: 'Yes, a free CV Prime account plus your own OpenRouter API key connected in settings (also free to get). You only pay the small per-run token cost to OpenRouter.',
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
      appName="CV Prime AI Job Description Decoder"
      appDescription="AI tool that decodes a job description into real must-haves vs nice-to-haves, unstated expectations, red flags, and keywords to mirror. Runs on the user's own AI key."
      faqs={faqs}
    >
      <JdDecoderAI />
    </AiToolLayout>
  );
}
