import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { InterviewQuestionsAI } from '@/components/tools/InterviewQuestionsAI';
import { AiToolFaq, type AiToolFaqItem } from '@/components/tools/ai/AiToolFaq';
import { aiToolSchemas } from '@/lib/aiToolSchemas';

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

const faqs: AiToolFaqItem[] = [
  {
    q: 'What kinds of interview questions does it generate?',
    a: 'It covers all three rounds most Indian hiring processes use: behavioural ("Tell me about a time..."), technical questions specific to the role and skills listed, and situational/case questions that test judgment. Each comes with a tip on how to structure a strong answer.',
  },
  {
    q: 'Do I need to paste a job description, or can I just enter a role name?',
    a: 'Either works. Entering just a role name gives you generally likely questions for that title. Pasting the actual JD (and optionally your resume) sharpens the questions to match the specific responsibilities, tech stack, and seniority in that posting.',
  },
  {
    q: 'Are the answer tips full scripted answers?',
    a: 'No — they are structural tips (for example, "use the STAR method and lead with the business impact") rather than a canned answer to memorise. Interviewers can tell when someone recites a script, so the tool coaches your approach instead of writing your words for you.',
  },
  {
    q: 'Can I use this to prepare for a specific company\'s interview?',
    a: 'Paste the exact job description from that company\'s posting for the closest match. The tool cannot access private information about a specific interviewer or company process, but role- and JD-specific preparation covers the large majority of what gets asked.',
  },
];

export default function AiInterviewQuestionsPage(): JSX.Element {
  const schemas = aiToolSchemas({
    name: 'CV Prime AI Interview Question Generator',
    path: '/tools/ai-interview-questions',
    breadcrumbName: 'AI Interview Question Generator',
    description: 'AI tool that generates likely behavioural, technical, and situational interview questions for a role with answer tips.',
    faqs,
  });
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Predict your interview"
        highlight="questions"
        subtitle="Enter the role — or paste the JD and your resume — and the AI generates the most likely questions across behavioural, technical, and situational rounds, each with a tip on how to answer."
      >
        <InterviewQuestionsAI />
        <AiToolFaq faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
