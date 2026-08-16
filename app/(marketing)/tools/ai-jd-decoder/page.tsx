import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AiToolFaq } from '@/components/tools/ai/AiToolFaq';
import { JdDecoderAI } from '@/components/tools/JdDecoderAI';

const faqs = [
  {
    q: 'What does an AI job description decoder do?',
    a: 'It reads a job posting the way an experienced recruiter would and separates what the listed requirements actually mean: which skills are genuine must-haves versus nice-to-haves, what seniority the language implies regardless of the job title, expectations the posting hints at but never states outright, and any wording that reads as a red flag (vague scope, unrealistic range of duties, or contradictory requirements).',
  },
  {
    q: 'Why not just read the job description myself?',
    a: 'Most job postings are written by a mix of HR templates and hiring-manager wish lists, so the literal text often overstates requirements or buries the real priority under boilerplate. The decoder cuts through that by re-reading the JD for intent rather than just listing the words back to you — the same way a recruiter mentally triages a posting before deciding who to shortlist.',
  },
  {
    q: 'How does this help my resume specifically?',
    a: 'Alongside the decoded requirements, the tool surfaces the exact keywords and phrasing the employer used, so you can mirror that language in your resume and cover letter. ATS software and human reviewers both weight resumes higher when the terminology matches the posting rather than a close synonym.',
  },
  {
    q: 'Is the AI job description decoder free?',
    a: 'Yes. It runs on your own OpenRouter API key, which costs a few paise per decode, and does not require a paid CV Prime plan.',
  },
];

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

export default function AiJdDecoderPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Decode the job"
      highlight="description"
      subtitle="Paste any JD and the AI reveals what they actually want: real must-haves vs nice-to-haves, unstated expectations, red flags, and the exact keywords to mirror in your resume."
    >
      <JdDecoderAI />
      <AiToolFaq
        toolName="AI Job Description Decoder"
        toolUrl="https://cv-prime.in/tools/ai-jd-decoder"
        description="Paste a job description and get the real seniority, true must-haves vs nice-to-haves, unstated expectations, red flags, and the exact keywords to mirror in your resume."
        faqs={faqs}
        related={[
          { href: '/tools/ai-ats-score', label: 'AI ATS score checker' },
          { href: '/tools/ai-role-fit', label: 'AI role-fit finder' },
          { href: '/tailor-resume-to-job-description', label: 'Tailor resume to a JD' },
        ]}
      />
    </AiToolLayout>
  );
}
