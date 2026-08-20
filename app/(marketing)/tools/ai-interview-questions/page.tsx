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
    q: 'What is the AI interview question generator?',
    a: 'A free tool that predicts the interview questions you are most likely to face for a given role — spanning behavioural, technical, and situational rounds — and gives a specific tip on how to answer each one well.',
  },
  {
    q: 'Why prepare with predicted questions instead of a generic list?',
    a: 'Generic "top 50 interview questions" lists are the same for every candidate and every role. Questions generated from the actual job description and your resume are closer to what an interviewer will really ask, because they reflect the specific skills, seniority, and responsibilities in play.',
  },
  {
    q: 'How does it work?',
    a: 'Enter the role name, or paste the full job description and your resume for a more tailored set. The AI, running on your saved OpenRouter key, returns a mix of behavioural, technical, and situational questions with an answer tip for each — in a few seconds.',
  },
  {
    q: 'Will these be the exact questions I get asked?',
    a: 'No tool can guarantee the exact questions an interviewer will use. Treat the output as high-probability preparation material that covers the areas most interviewers for this type of role tend to probe, not a leaked question bank.',
  },
  {
    q: 'What should I do after generating my questions?',
    a: 'Practice answers out loud, not just in your head, especially for the behavioural questions — structure them with a clear situation, action, and result. Pair this with CV Prime\'s AI JD decoder to understand what the interviewer is really screening for before you walk in.',
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
      appName="CV Prime AI Interview Question Generator"
      appDescription="Free AI tool that predicts likely interview questions for a role, with answer tips."
      faqs={faqs}
    >
      <InterviewQuestionsAI />
    </AiToolLayout>
  );
}
