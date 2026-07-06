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
    q: 'What is an AI interview question generator?',
    a: 'It is a tool that predicts the most likely interview questions for a role — across behavioural, technical, and situational rounds — and pairs each one with a specific tip on how to answer it well, based on the role or the JD and resume you provide.',
  },
  {
    q: 'Why prepare with predicted questions instead of a generic list?',
    a: 'Generic "top 50 interview questions" lists are the same for every candidate and every role. Questions generated from your actual JD and resume are tuned to what this specific interviewer is likely to probe, so your prep time goes toward what will actually come up.',
  },
  {
    q: 'How does the interview question generator work?',
    a: 'Enter the role name, or paste the job description and your resume for sharper predictions. The AI returns likely questions grouped into behavioural, technical, and situational rounds, each with a concrete tip on how to structure a strong answer.',
  },
  {
    q: 'Does it write my answers for me?',
    a: 'No — it gives you the likely question and a tip on approach (for example, using the STAR method for a behavioural question), but you supply the specific example from your own experience. This keeps your answers authentic and interview-ready rather than scripted.',
  },
  {
    q: 'Can I use this for technical interviews too?',
    a: 'Yes. When you paste the JD, the generator includes technical questions calibrated to the skills and seniority the posting implies, alongside the behavioural and situational rounds most interviews also include.',
  },
];

export default function AiInterviewQuestionsPage(): JSX.Element {
  return (
    <AiToolLayout
      slug="ai-interview-questions"
      name="AI Interview Question Generator"
      eyebrow="AI tool · your key"
      title="Predict your interview"
      highlight="questions"
      subtitle="Enter the role — or paste the JD and your resume — and the AI generates the most likely questions across behavioural, technical, and situational rounds, each with a tip on how to answer."
      faqs={faqs}
    >
      <InterviewQuestionsAI />
    </AiToolLayout>
  );
}
