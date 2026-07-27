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
    q: 'What does the JD decoder tell me that the JD itself does not?',
    a: 'It separates real must-haves from nice-to-haves, surfaces unstated expectations most postings never say directly, flags red flags in the wording, and lists the exact keywords worth mirroring in your resume.',
  },
  {
    q: 'Can I use the decoded keywords directly in my resume?',
    a: 'Yes — mirror the terms naturally in your skills section and bullets where they are genuinely true of your experience. Do not add keywords for skills you do not actually have.',
  },
  {
    q: 'Does this replace the AI ATS score checker?',
    a: 'No, they solve different problems. The decoder tells you what the JD is really asking for; the ATS score checker then scores your specific resume against it and points out the gaps.',
  },
];

export default function AiJdDecoderPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Decode the job"
      highlight="description"
      subtitle="Paste any JD and the AI reveals what they actually want: real must-haves vs nice-to-haves, unstated expectations, red flags, and the exact keywords to mirror in your resume."
      path="/tools/ai-jd-decoder"
      schemaName="CV Prime AI Job Description Decoder"
      schemaDescription="AI tool that decodes a job description into real must-haves, unstated expectations, red flags, and keywords to mirror in a resume. Runs on the user's own AI key."
      faqs={faqs}
    >
      <JdDecoderAI />
    </AiToolLayout>
  );
}
