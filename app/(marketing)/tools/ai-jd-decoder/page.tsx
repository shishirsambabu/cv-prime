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
    q: 'What is the AI job description decoder?',
    a: 'A free tool that reads a job description and translates it into what the employer actually wants: real must-have requirements versus nice-to-haves, unstated expectations, potential red flags, and the exact keywords worth mirroring in your resume and cover letter.',
  },
  {
    q: 'Why does decoding a JD matter?',
    a: 'Job descriptions are often written hastily, padded with boilerplate, or list every possible skill regardless of what is truly required. Applying only to postings you read literally can cause you to skip good-fit roles or waste time on ones that are not a real match. Decoding the JD closes that gap.',
  },
  {
    q: 'How does it work?',
    a: 'Paste the full job description into the tool. Using your saved OpenRouter key, the AI separates genuine requirements from filler, flags anything that reads as a warning sign (unrealistic scope, vague seniority, conflicting requirements), and lists the keywords to echo in your application.',
  },
  {
    q: 'Can it tell me if a job is a scam or a bad employer?',
    a: 'It flags red flags visible in the text of the posting itself — like unrealistic combinations of requirements or vague compensation language — but it cannot verify the company or confirm a listing is legitimate. Always do independent research on the employer before applying or sharing personal information.',
  },
  {
    q: 'What is a good next step after decoding a JD?',
    a: 'Take the keyword list straight into CV Prime\'s AI ATS score checker to see how your current resume matches, or into the AI bullet rewriter to weave the true must-haves into your bullets naturally.',
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
      appName="CV Prime AI Job Description Decoder"
      appDescription="Free AI tool that decodes a job description into real must-haves, hidden expectations, red flags, and keywords to mirror."
      faqs={faqs}
    >
      <JdDecoderAI />
    </AiToolLayout>
  );
}
