import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { SalaryNegotiationAI } from '@/components/tools/SalaryNegotiationAI';

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

const faqs = [
  {
    q: 'Is this tuned for Indian CTC structures specifically?',
    a: 'Yes — the scripts and talking points account for how Indian offers are structured (base, variable pay, ESOPs, and other CTC components), not just a flat US-style salary number.',
  },
  {
    q: 'What do I need to enter?',
    a: 'Your target or current role and the offer details you have — base figure, any variable/bonus component, and what you know about the market range. The more specific your input, the more grounded the talking points.',
  },
  {
    q: 'Does it just give generic tips?',
    a: 'No — alongside general do/don\'t guidance, it writes ready-to-say scripts for specific tricky moments (being asked your current CTC, countering a lowball offer, negotiating beyond base pay) so you have actual words to use, not just advice.',
  },
];

export default function AiSalaryNegotiationPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Negotiate your"
      highlight="offer"
      subtitle="Enter the role and your offer details. The AI builds evidence-based talking points, ready-to-say scripts for the tricky moments, and practical tips — tuned for Indian CTC negotiations."
      slug="ai-salary-negotiation"
      schemaName="CV Prime AI Salary Negotiation Coach"
      schemaDescription="Get AI-generated, evidence-based salary negotiation talking points and ready-to-say scripts tuned for Indian CTC negotiations."
      faqs={faqs}
    >
      <SalaryNegotiationAI />
    </AiToolLayout>
  );
}
