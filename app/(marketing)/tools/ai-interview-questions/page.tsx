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
    q: 'Do I need a job description, or can I just enter a role?',
    a: 'Either works. Enter just a role/title for likely general questions for that position, or paste the actual JD plus your resume for questions tailored to that specific employer\'s stated requirements and your background.',
  },
  {
    q: 'What round types does it cover?',
    a: 'Behavioural (past experience, teamwork, conflict), technical (role-specific skills and problem-solving), and situational (hypothetical scenarios) — the three round types most Indian corporate and tech interviews use.',
  },
  {
    q: 'Does it also tell me how to answer, not just the question?',
    a: 'Yes — each question comes with a specific tip on structure or content to cover in your answer, such as using the STAR method for behavioural questions or naming the trade-offs for technical ones.',
  },
  {
    q: 'Can I prepare for a specific company\'s interview style?',
    a: 'Paste the actual job description if you have it — the AI factors in the seniority, tech stack, and stated responsibilities in that specific posting rather than generating purely generic questions for the role title.',
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
      toolName="AI Interview Question Generator"
      faqs={faqs}
    >
      <InterviewQuestionsAI />
    </AiToolLayout>
  );
}
