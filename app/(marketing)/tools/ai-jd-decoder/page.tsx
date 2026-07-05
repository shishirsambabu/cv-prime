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
    q: 'Why do I need a JD decoder instead of just reading the job description?',
    a: 'Job descriptions are often a mix of copy-pasted boilerplate and genuine must-haves buried inside a long list. The decoder separates real requirements from filler, flags unstated seniority or expectations, and surfaces red flags a plain read can miss.',
  },
  {
    q: 'What red flags does it look for?',
    a: 'Things like unrealistic combinations of seniority and pay signals, scope creep across multiple roles in one posting, and vague growth language that often means an unstructured or understaffed team.',
  },
  {
    q: 'How does this help my resume specifically?',
    a: 'It extracts the exact keywords and phrases the employer is screening for, so you know precisely what to mirror in your resume\'s skills and bullets before you apply.',
  },
  {
    q: 'Is this useful for recruiters too, not just job seekers?',
    a: 'It is built for candidates evaluating a JD before applying. If you are writing job descriptions instead, CV Prime\'s AI job description generator is the matching tool for that side of the hiring process.',
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
      faqs={faqs}
    >
      <JdDecoderAI />
    </AiToolLayout>
  );
}
