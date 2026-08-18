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
  { q: 'Do I need a job description to use this?', a: 'No — you can enter just a role title and get likely questions for that role in general. Pasting the JD (and your resume) makes the questions more specific to that exact interview.' },
  { q: 'What kinds of questions does it generate?', a: 'A mix across behavioural, technical, and situational rounds, matched to the seniority and skills implied by the role or JD.' },
  { q: 'Does it just list questions, or help me answer them?', a: 'Each question comes with a specific tip on how to approach the answer — not a scripted response, but the angle a strong candidate would take.' },
  { q: 'Is this tool free?', a: 'It needs a free CV Prime account and your own OpenRouter AI key. Generating a question set costs a few paise in AI usage.' },
];

export default function AiInterviewQuestionsPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Predict your interview"
      highlight="questions"
      subtitle="Enter the role — or paste the JD and your resume — and the AI generates the most likely questions across behavioural, technical, and situational rounds, each with a tip on how to answer."
      path="/tools/ai-interview-questions"
      appName="AI Interview Question Generator"
      faqs={faqs}
    >
      <InterviewQuestionsAI />
    </AiToolLayout>
  );
}
