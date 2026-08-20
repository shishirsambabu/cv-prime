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
    q: 'What is the AI role-fit finder?',
    a: 'A free tool that reads your resume and suggests the specific job roles you are most competitive for right now — each with a fit score, an explanation of why it matches your background, and the concrete gaps to close to become a stronger candidate.',
  },
  {
    q: 'Why does knowing your role fit matter?',
    a: 'Many candidates apply broadly to titles that sound right without knowing whether their actual background is competitive for that level and scope, wasting effort on long-shot applications. Seeing a realistic fit score and the specific gaps helps you target roles where you have a genuine shot, and shows exactly what to build toward for the ones you do not yet.',
  },
  {
    q: 'How does it work?',
    a: 'Paste your resume text into the tool. Using your saved OpenRouter key, the AI evaluates your experience, skills, and seniority signals and returns a set of roles with a fit score and gap analysis for each — in a few seconds.',
  },
  {
    q: 'Is the fit score a guarantee I will get hired?',
    a: 'No. It is a directional estimate based on how your resume reads relative to typical requirements for each role, not a guarantee from any specific employer. Actual hiring decisions depend on the interview, the specific company, and factors beyond a resume.',
  },
  {
    q: 'What should I do with the results?',
    a: 'For roles with a high fit score, tailor your resume to that specific job description using the AI ATS score checker and bullet rewriter. For roles with real gaps, use the AI skills gap finder to identify the highest-leverage thing to learn next.',
  },
];

export default function AiRoleFitPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Find your best-fit"
      highlight="roles"
      subtitle="Paste your resume and the AI maps the roles you're most competitive for today — each with a fit score, why it matches, and the gaps to close to become a strong candidate."
      path="/tools/ai-role-fit"
      appName="CV Prime AI Role-Fit Finder"
      appDescription="Free AI tool that suggests roles a candidate is competitive for from their resume, with fit scores and gaps."
      faqs={faqs}
    >
      <RoleFitAI />
    </AiToolLayout>
  );
}
