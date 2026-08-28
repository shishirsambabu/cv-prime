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
    q: 'Do I need to paste a job description, or is a role title enough?',
    a: 'A role title alone works and gives you generally likely questions for that role. Pasting the actual JD (and your resume) sharpens the predictions to the specific responsibilities and stack the employer listed.',
  },
  {
    q: 'What kinds of questions does it generate?',
    a: 'A mix of behavioural, technical, and situational questions — the three rounds most interview processes actually use — each with a short tip on how to structure a strong answer, not just the question itself.',
  },
  {
    q: 'Can I use this to prep for a specific company\'s interview?',
    a: 'Yes — paste the exact JD you\'re interviewing against for the most targeted set. It won\'t know a company\'s actual interview questions, but it will predict what\'s likely to come up given the role\'s requirements.',
  },
  {
    q: 'Is it free?',
    a: 'Yes, with a free CV Prime account and your own connected OpenRouter API key — you pay OpenRouter\'s tiny per-run token cost directly, with no CV Prime subscription needed.',
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
      appName="CV Prime AI Interview Question Generator"
      appDescription="AI tool that predicts likely interview questions for a role across behavioural, technical, and situational rounds, each with an answer tip. Runs on the user's own AI key."
      faqs={faqs}
    >
      <InterviewQuestionsAI />
    </AiToolLayout>
  );
}
