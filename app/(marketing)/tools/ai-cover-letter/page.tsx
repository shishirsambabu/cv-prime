import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { CoverLetterAI } from '@/components/tools/CoverLetterAI';

export const metadata: Metadata = {
  title: 'AI Cover Letter Generator — Tailored to the Job (Free) | CV Prime',
  description:
    'Paste your resume and a job description and get a tailored 180–250 word cover letter with a real hook and your concrete achievements — in a professional, friendly, or executive tone. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-cover-letter' },
  openGraph: {
    title: 'AI Cover Letter Generator — Tailored to Any Job',
    description: 'A tailored cover letter from your resume and the job description, in seconds.',
    url: 'https://cv-prime.in/tools/ai-cover-letter',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Cover Letter Generator — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'How long is the generated cover letter?',
    a: 'It targets 180–250 words — long enough to make a real case, short enough that a recruiter actually reads the whole thing.',
  },
  {
    q: 'Can I choose the tone?',
    a: 'Yes — pick professional, friendly, or executive, and the AI adjusts the voice while keeping the structure and your real achievements intact.',
  },
  {
    q: 'Does it just repeat my resume?',
    a: 'No. It uses your resume and the JD to build a specific hook and highlight the 2–3 most relevant achievements for that role, rather than restating your whole work history.',
  },
];

export default function AiCoverLetterPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Generate a tailored cover"
      highlight="letter"
      subtitle="Paste your resume and the job description. The AI writes a 180–250 word cover letter with a specific hook and your real achievements, in the tone you choose — never fabricating."
      slug="ai-cover-letter"
      name="AI Cover Letter Generator"
      description="Free AI tool that generates a tailored 180-250 word cover letter from your resume and a job description."
      faqs={faqs}
      relatedLinks={[
        { href: '/tools/ai-jd-decoder', label: 'AI JD decoder' },
        { href: '/tools/ai-outreach-email', label: 'AI outreach email generator' },
        { href: '/cover-letter-generator', label: 'Cover letter generator' },
        { href: '/cover-letter-examples', label: 'Cover letter examples' },
        { href: '/tools', label: 'All free tools' },
      ]}
    >
      <CoverLetterAI />
    </AiToolLayout>
  );
}
