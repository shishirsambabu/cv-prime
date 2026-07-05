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
    a: 'No — you can enter just a role title and get generally likely questions for that role. Pasting the actual JD and your resume sharpens the predictions to the specific responsibilities and your background.',
  },
  {
    q: 'What types of questions does it generate?',
    a: 'It covers behavioural (past experience), technical (role-specific skills), and situational (hypothetical scenario) questions — the three rounds most interview processes actually use.',
  },
  {
    q: 'Does it just give questions, or help me answer too?',
    a: 'Each question comes with a specific tip on how to approach the answer — what the interviewer is really testing for and the shape a strong response takes — not just a question list.',
  },
  {
    q: 'Can I use this for campus placements and freshers?',
    a: 'Yes. Entering a role like "software engineer fresher" or pasting a campus placement JD generates questions calibrated for entry-level interviews, not just senior hires.',
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
      faqs={faqs}
    >
      <InterviewQuestionsAI />
    </AiToolLayout>
  );
}
