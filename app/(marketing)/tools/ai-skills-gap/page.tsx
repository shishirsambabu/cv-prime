import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AiToolFaq } from '@/components/tools/ai/AiToolFaq';
import { SkillsGapAI } from '@/components/tools/SkillsGapAI';

const faqs = [
  {
    q: 'What does the AI skills gap finder do?',
    a: 'You paste your resume and a target role, and the AI compares what you already have against what that role typically demands, then returns the highest-leverage skills to learn next — not an exhaustive list, but the few that would move the needle most for that specific target.',
  },
  {
    q: 'How is "highest-leverage" decided?',
    a: 'The tool prioritises skills that are both frequently required for the target role and currently missing or weak in your resume, over skills that are common but already well covered, or rare edge-case requirements unlikely to matter for most postings. The goal is a short, actionable list rather than an overwhelming one.',
  },
  {
    q: 'Does it just list skills, or does it say how to learn them?',
    a: 'For each skill it explains why it matters for the target role and gives a concrete way to learn and demonstrate it — for example a specific project, certification, or way to reframe existing experience — rather than a bare keyword you would have to research yourself.',
  },
  {
    q: 'Is the AI skills gap finder free?',
    a: 'Yes. It runs on your own OpenRouter API key, which costs a few paise per run, and does not require a paid CV Prime plan.',
  },
];

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

export default function AiSkillsGapPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Find the skills to"
      highlight="learn next"
      subtitle="Paste your resume and a target role. The AI pinpoints the highest-leverage skills to close the gap — why each matters and a concrete way to learn and demonstrate it."
    >
      <SkillsGapAI />
      <AiToolFaq
        toolName="AI Skills Gap Finder"
        toolUrl="https://cv-prime.in/tools/ai-skills-gap"
        description="Paste your resume and a target role and find the highest-leverage skills to learn next — why each matters and a concrete way to learn and show it."
        faqs={faqs}
        related={[
          { href: '/tools/ai-role-fit', label: 'AI role-fit finder' },
          { href: '/tools/ai-ats-score', label: 'AI ATS score checker' },
        ]}
      />
    </AiToolLayout>
  );
}
