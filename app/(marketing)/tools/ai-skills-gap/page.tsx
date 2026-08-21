import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AiToolSchema } from '@/components/tools/ai/AiToolSchema';
import { AiToolFaq } from '@/components/tools/ai/AiToolFaq';
import { SkillsGapAI } from '@/components/tools/SkillsGapAI';

export const metadata: Metadata = {
  title: 'AI Skills Gap Finder — What to Learn Next for Your Target Role | CV Prime',
  description:
    'Paste your resume and a target role and the AI finds the highest-leverage skills to learn next — why each matters and a concrete way to learn and show it. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-skills-gap' },
  openGraph: {
    title: 'AI Skills Gap Finder',
    description: 'The highest-leverage skills to learn next for your target role.',
    url: 'https://cv-prime.in/tools/ai-skills-gap',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Skills Gap Finder — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'How does it decide which skills matter most?',
    a: 'It compares your resume against your target role and ranks the gaps by leverage — the skills most likely to change whether you get shortlisted — rather than listing every possible skill you could theoretically learn.',
  },
  {
    q: 'Does it just tell me what to learn, or how?',
    a: 'Both. For each skill, it explains why it matters for the target role and gives a concrete way to actually learn and demonstrate it, not just a course name.',
  },
  {
    q: "What's the difference between this and the Role-Fit Finder?",
    a: 'Role-Fit Finder starts from your resume and suggests which roles you are already competitive for. Skills Gap Finder starts from a role you already want and tells you what is missing to get there — use them together for a full picture.',
  },
];

export default function AiSkillsGapPage(): JSX.Element {
  return (
    <>
      <AiToolSchema
        name="CV Prime AI Skills Gap Finder"
        path="/tools/ai-skills-gap"
        description="AI tool that finds the highest-leverage skills to learn next for a target role, based on your resume, with a concrete way to learn and show each one. Runs on your own AI key."
        breadcrumbLabel="AI Skills Gap Finder"
        faqs={faqs}
      />
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Find the skills to"
        highlight="learn next"
        subtitle="Paste your resume and a target role. The AI pinpoints the highest-leverage skills to close the gap — why each matters and a concrete way to learn and demonstrate it."
      >
        <SkillsGapAI />
        <AiToolFaq heading="AI skills gap finder — FAQ" faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
