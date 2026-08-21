import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AiToolSchema } from '@/components/tools/ai/AiToolSchema';
import { AiToolFaq } from '@/components/tools/ai/AiToolFaq';
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
    q: 'What kind of questions does it generate?',
    a: 'A mix of behavioural, technical, and situational questions likely for the role — each with a specific tip on how to answer it, not just a generic question bank.',
  },
  {
    q: 'Do I need a job description to use it?',
    a: 'No — you can enter just a role title and get relevant questions. Pasting the actual JD and your resume sharpens the questions further, since the AI can target the specific must-haves and your background.',
  },
  {
    q: "Can I use this to prep for a specific company's interview?",
    a: 'The tool generates questions based on the role and JD you provide, not company-specific interview data. Combine it with the AI Job Description Decoder to understand what the JD is really asking for before you prep answers.',
  },
];

export default function AiInterviewQuestionsPage(): JSX.Element {
  return (
    <>
      <AiToolSchema
        name="CV Prime AI Interview Question Generator"
        path="/tools/ai-interview-questions"
        description="AI tool that generates likely behavioural, technical, and situational interview questions for a role, each with a tip on how to answer. Runs on your own AI key."
        breadcrumbLabel="AI Interview Question Generator"
        faqs={faqs}
      />
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Predict your interview"
        highlight="questions"
        subtitle="Enter the role — or paste the JD and your resume — and the AI generates the most likely questions across behavioural, technical, and situational rounds, each with a tip on how to answer."
      >
        <InterviewQuestionsAI />
        <AiToolFaq heading="AI interview question generator — FAQ" faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
