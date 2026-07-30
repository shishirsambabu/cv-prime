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
    q: 'Do I need a job description to use this?',
    a: 'No — entering just the role and seniority gives you solid, generic-but-relevant questions. Pasting the actual JD and your resume sharpens the list to what this specific interviewer is likely to probe, based on the exact requirements and your background.',
  },
  {
    q: 'What types of questions does it generate?',
    a: 'A mix across three rounds: behavioural (situational "tell me about a time"), technical (role-specific knowledge and problem-solving), and situational (how you would handle a hypothetical scenario on the job).',
  },
  {
    q: 'Do the answer tips give me a script to memorise?',
    a: 'No — each tip explains the structure or angle a strong answer takes (for example, what a behavioural answer should hit using STAR) so you can prepare your own real example rather than rehearsing a canned response.',
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
      schemaName="CV Prime AI Interview Question Generator"
      schemaDescription="Generate the most likely interview questions for any role — behavioural, technical, and situational — each with a tip on how to answer."
      faqs={faqs}
    >
      <InterviewQuestionsAI />
    </AiToolLayout>
  );
}
