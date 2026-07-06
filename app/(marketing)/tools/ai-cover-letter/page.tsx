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
    q: 'What is an AI cover letter generator?',
    a: 'It is a tool that reads your resume and a specific job description, then writes a tailored 180–250 word cover letter — a real opening hook, your genuine achievements pulled from your resume, and a tone (professional, friendly, or executive) you choose.',
  },
  {
    q: 'Why write a tailored cover letter instead of reusing one?',
    a: 'A generic cover letter reused across applications reads as generic to the recruiter reading it. A letter that references the specific role, company context, and your matching achievements signals genuine interest and gives you a real edge over candidates who send the same letter everywhere.',
  },
  {
    q: 'How does the cover letter generator work?',
    a: 'Paste your resume and the job description, pick a tone, and the AI drafts a 180–250 word letter with a specific opening line (not "I am writing to apply for"), 2–3 of your real achievements matched to the JD, and a clear closing — ready to copy, tweak, and send.',
  },
  {
    q: 'Does the AI make up achievements I have not done?',
    a: 'No. It only draws on the resume content and job description you provide and is instructed never to fabricate experience. The strength of the letter depends on the detail in your resume — the more specific your input, the more specific the draft.',
  },
  {
    q: 'Can I generate a cover letter without creating a resume first?',
    a: 'Yes, this free tool works standalone with just your resume text and the JD. If you want the cover letter saved alongside a CV you can export as PDF, sign up and use the full AI CV builder instead.',
  },
];

export default function AiCoverLetterPage(): JSX.Element {
  return (
    <AiToolLayout
      slug="ai-cover-letter"
      name="AI Cover Letter Generator"
      eyebrow="AI tool · your key"
      title="Generate a tailored cover"
      highlight="letter"
      subtitle="Paste your resume and the job description. The AI writes a 180–250 word cover letter with a specific hook and your real achievements, in the tone you choose — never fabricating."
      faqs={faqs}
    >
      <CoverLetterAI />
    </AiToolLayout>
  );
}
