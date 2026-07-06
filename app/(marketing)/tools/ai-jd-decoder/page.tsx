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
    q: 'What is an AI job description decoder?',
    a: 'It is a tool that reads a job posting and translates the corporate language into what the employer actually wants: the real must-have requirements versus the nice-to-haves, unstated expectations the JD implies but never states, red flags, and the exact keywords worth mirroring in your resume.',
  },
  {
    q: 'Why do job descriptions need decoding?',
    a: 'Most JDs list 15+ "requirements" as if all are mandatory, when in practice only a handful are true dealbreakers. Applicants either over-filter themselves out of roles they are qualified for, or under-prepare for the two or three things the employer actually screens hardest on.',
  },
  {
    q: 'How does the JD decoder work?',
    a: 'Paste the full job description. The AI separates genuine must-haves from soft preferences, surfaces expectations the posting implies but does not spell out (like on-call availability or frequent travel), flags anything unusual or concerning, and lists the exact keywords to echo in your resume.',
  },
  {
    q: 'Should I still apply if I do not meet every requirement?',
    a: 'Often yes. The decoder is built to separate real must-haves from wish-list items, so you can judge honestly whether you clear the true bar instead of self-rejecting because a JD listed 20 nice-to-haves.',
  },
  {
    q: 'What do I do with the keywords the decoder finds?',
    a: 'Weave the ones that are genuinely true of your background into your resume\'s skills section and bullet points — naturally, not as a keyword dump. Then run the AI ATS score checker to confirm your resume now matches the JD well.',
  },
];

export default function AiJdDecoderPage(): JSX.Element {
  return (
    <AiToolLayout
      slug="ai-jd-decoder"
      name="AI Job Description Decoder"
      eyebrow="AI tool · your key"
      title="Decode the job"
      highlight="description"
      subtitle="Paste any JD and the AI reveals what they actually want: real must-haves vs nice-to-haves, unstated expectations, red flags, and the exact keywords to mirror in your resume."
      faqs={faqs}
    >
      <JdDecoderAI />
    </AiToolLayout>
  );
}
