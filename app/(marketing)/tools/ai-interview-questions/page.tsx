import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { InterviewQuestionsAI } from '@/components/tools/InterviewQuestionsAI';

export const metadata: Metadata = {
  title: 'AI Interview Question Generator — Likely Questions + Answer Tips | CV Prime',
  description:
    'Enter a role (or paste a JD and your resume) and get the most likely interview questions — behavioural, technical, and situational — each with a specific tip on how to answer. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-interview-questions' },
  openGraph: {
    title: 'AI Interview Question Generator',
    description: 'Likely interview questions for any role, with answer tips.',
    url: 'https://cv-prime.in/tools/ai-interview-questions',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Interview Question Generator — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'Do I need to paste a job description?',
    a: 'No — entering just the role generates a solid question set. Pasting the JD and your resume too makes the questions and tips more specific to that exact job and your background.',
  },
  {
    q: 'What types of questions does it generate?',
    a: 'A mix of behavioural, technical, and situational questions calibrated to the role and seniority, each with a specific tip on how to structure a strong answer.',
  },
  {
    q: 'Is this useful for freshers too?',
    a: 'Yes — enter the target role and it generates fresher-appropriate questions and tips, including how to compensate for limited work experience.',
  },
];

export default function AiInterviewQuestionsPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Predict your interview"
      highlight="questions"
      subtitle="Enter the role — or paste the JD and your resume — and the AI generates the most likely questions across behavioural, technical, and situational rounds, each with a tip on how to answer."
      slug="ai-interview-questions"
      name="AI Interview Question Generator"
      description="Free AI tool that predicts likely interview questions for a role, with answer tips, from a job description and resume."
      faqs={faqs}
      relatedLinks={[
        { href: '/tools/ai-role-fit', label: 'AI role-fit finder' },
        { href: '/tools/ai-jd-decoder', label: 'AI JD decoder' },
        { href: '/interview-questions', label: 'Interview questions by role' },
        { href: '/tools/ai-salary-negotiation', label: 'AI salary negotiation coach' },
        { href: '/tools', label: 'All free tools' },
      ]}
    >
      <InterviewQuestionsAI />
    </AiToolLayout>
  );
}
