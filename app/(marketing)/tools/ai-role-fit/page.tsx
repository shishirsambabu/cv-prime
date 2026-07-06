import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { RoleFitAI } from '@/components/tools/RoleFitAI';

export const metadata: Metadata = {
  title: 'AI Role-Fit Finder — Which Jobs Am I Competitive For? | CV Prime',
  description:
    'Paste your resume and the AI suggests the roles you are most competitive for right now, with a fit score and the gaps to close for each. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-role-fit' },
  openGraph: {
    title: 'AI Role-Fit Finder',
    description: 'Which roles are you competitive for? Fit scores and gaps from your resume.',
    url: 'https://cv-prime.in/tools/ai-role-fit',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Role-Fit Finder — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'What is an AI role-fit finder?',
    a: 'It is a tool that reads your resume and suggests the specific job titles you are most competitive for right now — each with a fit score, an explanation of why it matches your background, and the gaps you would need to close to be a strong candidate.',
  },
  {
    q: 'Why use a role-fit finder instead of just applying broadly?',
    a: 'Applying broadly without knowing your real fit wastes time on long-shot roles and can mean missing better-matched ones you had not considered. A fit score grounded in your actual resume tells you where your time-to-offer is shortest.',
  },
  {
    q: 'How does the role-fit finder work?',
    a: 'Paste your resume. The AI analyzes your skills, experience, and career trajectory, then returns a set of roles you are competitive for today, each scored for fit with a plain-language reason and the specific gaps (skill, seniority, or domain) that separate you from a stronger match.',
  },
  {
    q: 'What if the AI suggests a role I had not considered?',
    a: 'That is often the most useful output — a role your resume genuinely supports that you had not thought to target. Use the fit score and the "why it matches" reasoning to judge whether it is worth exploring before you invest in applying.',
  },
  {
    q: 'What should I do with the gaps it identifies?',
    a: 'Treat them as your prep list. Run the AI skills gap finder against your top target role for a deeper, prioritized breakdown of what to learn next and how to demonstrate it on your resume.',
  },
];

export default function AiRoleFitPage(): JSX.Element {
  return (
    <AiToolLayout
      slug="ai-role-fit"
      name="AI Role-Fit Finder"
      eyebrow="AI tool · your key"
      title="Find your best-fit"
      highlight="roles"
      subtitle="Paste your resume and the AI maps the roles you're most competitive for today — each with a fit score, why it matches, and the gaps to close to become a strong candidate."
      faqs={faqs}
    >
      <RoleFitAI />
    </AiToolLayout>
  );
}
