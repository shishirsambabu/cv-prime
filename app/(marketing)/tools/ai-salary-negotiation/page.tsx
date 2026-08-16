import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AiToolFaq } from '@/components/tools/ai/AiToolFaq';
import { SalaryNegotiationAI } from '@/components/tools/SalaryNegotiationAI';

const faqs = [
  {
    q: 'What does the AI salary negotiation coach give me?',
    a: 'You enter your role and offer details, and the AI builds evidence-based talking points, ready-to-say scripts for the specific moments that feel hardest (the first counter, a lowball offer, a recruiter asking for your current CTC), and practical do/don\'t tips — all tuned for how compensation negotiation actually works in the Indian CTC structure.',
  },
  {
    q: 'Why is this tuned specifically for Indian CTC negotiations?',
    a: 'CTC (Cost to Company) bundles fixed pay, variable/bonus, and benefits in a way that Western base-salary negotiation advice does not address well. The coach accounts for this structure — for example, distinguishing a genuine fixed-pay increase from a variable-heavy offer that looks larger on paper but carries more risk.',
  },
  {
    q: 'Will it tell me exactly what number to ask for?',
    a: 'It gives you evidence-based talking points and reasoning to build your case, not a guaranteed target number — market rates vary too much by company, location, and level for any tool to promise a precise figure. Use it to structure a confident, well-reasoned ask rather than to generate a number in isolation.',
  },
  {
    q: 'Is the AI salary negotiation coach free?',
    a: 'Yes. It runs on your own OpenRouter API key, which costs a few paise per session, and does not require a paid CV Prime plan.',
  },
];

export const metadata: Metadata = {
  title: 'AI Salary Negotiation Coach — Scripts & Talking Points (India) | CV Prime',
  description:
    'Enter your role and offer details and get evidence-based talking points, ready-to-say scripts for tricky moments, and practical do/don\'t tips — tuned for Indian CTC negotiations. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-salary-negotiation' },
  openGraph: {
    title: 'AI Salary Negotiation Coach',
    description: 'Talking points and ready-to-say scripts for Indian salary negotiations.',
    url: 'https://cv-prime.in/tools/ai-salary-negotiation',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Salary Negotiation Coach — CV Prime' }],
  },
};

export default function AiSalaryNegotiationPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Negotiate your"
      highlight="offer"
      subtitle="Enter the role and your offer details. The AI builds evidence-based talking points, ready-to-say scripts for the tricky moments, and practical tips — tuned for Indian CTC negotiations."
    >
      <SalaryNegotiationAI />
      <AiToolFaq
        toolName="AI Salary Negotiation Coach"
        toolUrl="https://cv-prime.in/tools/ai-salary-negotiation"
        description="Evidence-based talking points, ready-to-say scripts for tricky moments, and practical do/don't tips for Indian CTC salary negotiations."
        faqs={faqs}
        related={[
          { href: '/tools/ai-role-fit', label: 'AI role-fit finder' },
          { href: '/salary', label: 'Salary guides by role' },
        ]}
      />
    </AiToolLayout>
  );
}
