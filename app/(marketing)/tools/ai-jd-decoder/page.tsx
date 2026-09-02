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
    a: 'The AI separates what a listing says from what it means — splitting true must-haves from nice-to-haves, surfacing unstated expectations, flagging red flags, and pulling the exact keywords worth mirroring in your resume.',
  },
  {
    q: 'How does this help my resume get past the ATS?',
    a: 'Once you know the real must-have keywords, you can weave the genuinely true ones into your resume — closing the exact gap an ATS and a recruiter will check for.',
  },
  {
    q: 'Can it spot a bad or misleading job posting?',
    a: 'Yes — it is built to call out mismatched seniority, vague scope, and other red flags so you can decide whether a role is worth applying to before you invest time tailoring a resume.',
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
      name="AI Job Description Decoder"
      description="Free AI tool that decodes a job description into real must-haves, hidden expectations, red flags, and keywords to mirror in your resume."
      faqs={faqs}
      relatedLinks={[
        { href: '/tools/ai-ats-score', label: 'AI ATS score checker' },
        { href: '/tools/ai-cover-letter', label: 'AI cover letter generator' },
        { href: '/tailor-resume-to-job-description', label: 'Tailor resume to a JD' },
        { href: '/tools/ai-role-fit', label: 'AI role-fit finder' },
        { href: '/tools', label: 'All free tools' },
      ]}
    >
      <JdDecoderAI />
    </AiToolLayout>
  );
}
