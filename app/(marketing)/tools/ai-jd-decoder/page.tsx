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
  { q: 'What does "decoding" a job description actually mean?', a: 'The AI separates real must-haves from nice-to-haves, surfaces expectations the JD implies but never states outright, flags anything that looks like a red flag (vague scope, unrealistic asks), and lists the exact keywords worth mirroring in your resume.' },
  { q: 'Why would I mirror the keywords back into my resume?', a: 'Most ATS software and recruiter keyword searches match on the specific terms used in the JD. Mirroring the real ones (not stuffing all of them) improves your match rate without misrepresenting your experience.' },
  { q: 'Can it tell me if a JD is a red flag before I apply?', a: 'It flags common warning signs — vague seniority, an unusually long requirements list for the level, or scope creep — so you can decide whether to apply and what to ask about if you do.' },
  { q: 'What do I need to use it?', a: 'A free CV Prime account and your own OpenRouter AI key. Decoding a JD costs a few paise in AI usage.' },
];

export default function AiJdDecoderPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Decode the job"
      highlight="description"
      subtitle="Paste any JD and the AI reveals what they actually want: real must-haves vs nice-to-haves, unstated expectations, red flags, and the exact keywords to mirror in your resume."
      path="/tools/ai-jd-decoder"
      appName="AI Job Description Decoder"
      faqs={faqs}
    >
      <JdDecoderAI />
    </AiToolLayout>
  );
}
