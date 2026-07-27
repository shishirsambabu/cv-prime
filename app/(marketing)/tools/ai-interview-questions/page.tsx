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
    q: 'What kinds of interview questions does this generate?',
    a: 'A mix of behavioural, technical, and situational questions calibrated to the role, plus a specific tip on how to answer each one — not just a generic question bank.',
  },
  {
    q: 'Do I need to paste a job description to use it?',
    a: 'No. Entering just the role gives you a solid generic set. Pasting the JD and your resume sharpens the questions to that specific posting and your background.',
  },
  {
    q: 'Can I use this to prepare for a specific company?',
    a: 'The questions are role-based rather than company-specific, since the tool has no access to a company\'s actual interview process — pair it with your own research on the company\'s known interview style.',
  },
];

export default function AiInterviewQuestionsPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Predict your interview"
      highlight="questions"
      subtitle="Enter the role — or paste the JD and your resume — and the AI generates the most likely questions across behavioural, technical, and situational rounds, each with a tip on how to answer."
      path="/tools/ai-interview-questions"
      schemaName="CV Prime AI Interview Question Generator"
      schemaDescription="AI tool that generates likely behavioural, technical, and situational interview questions for a role with answer tips. Runs on the user's own AI key."
      faqs={faqs}
    >
      <InterviewQuestionsAI />
    </AiToolLayout>
  );
}
