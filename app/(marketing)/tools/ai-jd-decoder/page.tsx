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
    q: 'What counts as a "red flag" in a job description?',
    a: 'Signals like vague or inflated titles for the actual scope of work, unrealistic combinations of skills for the seniority listed, phrases that suggest excessive on-call or overtime expectations, or a mismatch between the stated experience range and the responsibilities described.',
  },
  {
    q: 'How does it separate must-haves from nice-to-haves?',
    a: 'It reads the language and placement of each requirement — items under "required" or stated as mandatory, versus items phrased as "bonus," "plus," or buried at the end of a long list — and reasons about which ones a resume actually needs to match to pass initial screening.',
  },
  {
    q: 'Why do I need the exact keywords to mirror?',
    a: 'ATS keyword matching rewards using the same terms the JD uses, not just synonyms. The decoder extracts the precise phrases worth mirroring in your resume\'s skills section and bullets so your application scores higher against that specific posting.',
  },
  {
    q: 'Should I use this before or after tailoring my resume?',
    a: 'Before. Decode the JD first to understand what is actually being screened for, then use the AI bullet rewriter or the full tailoring tool to rework your resume around those specific must-haves and keywords.',
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
      toolName="AI Job Description Decoder"
      faqs={faqs}
    >
      <JdDecoderAI />
    </AiToolLayout>
  );
}
