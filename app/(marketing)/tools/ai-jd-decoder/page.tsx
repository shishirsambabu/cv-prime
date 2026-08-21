import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AiToolSchema } from '@/components/tools/ai/AiToolSchema';
import { AiToolFaq } from '@/components/tools/ai/AiToolFaq';
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
    q: "What does the JD decoder tell me that I can't see just reading the posting?",
    a: 'It separates the real must-haves from nice-to-haves, surfaces unstated expectations most job descriptions do not spell out, flags red flags worth noticing, and lists the exact keywords worth mirroring in your resume for that role.',
  },
  {
    q: 'Who is this for — candidates or recruiters?',
    a: 'Primarily candidates deciding whether to apply and how to tailor their resume. If you are writing job descriptions instead, use the AI Job Description Generator, which is built for that.',
  },
  {
    q: 'Does decoding a JD replace tailoring my resume to it?',
    a: 'No — it is the step before tailoring. Once you know the real requirements and keywords, use the tailor-resume-to-job-description tool or the AI ATS score checker to apply that understanding to your actual resume.',
  },
];

export default function AiJdDecoderPage(): JSX.Element {
  return (
    <>
      <AiToolSchema
        name="CV Prime AI Job Description Decoder"
        path="/tools/ai-jd-decoder"
        description="AI tool that decodes a job description into real must-haves, unstated expectations, red flags, and keywords to mirror in your resume. Runs on your own AI key."
        breadcrumbLabel="AI Job Description Decoder"
        faqs={faqs}
      />
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Decode the job"
        highlight="description"
        subtitle="Paste any JD and the AI reveals what they actually want: real must-haves vs nice-to-haves, unstated expectations, red flags, and the exact keywords to mirror in your resume."
      >
        <JdDecoderAI />
        <AiToolFaq heading="AI job description decoder — FAQ" faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
