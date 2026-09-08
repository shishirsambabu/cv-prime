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
  { q: 'Is this tuned for Indian salary structures?', a: 'Yes — talking points and scripts are built around CTC negotiations (base, variable, ESOPs, benefits) rather than the flat-salary framing common in US-focused negotiation advice.' },
  { q: 'What do I get — general tips or actual scripts?', a: 'Both. You get evidence-based talking points plus ready-to-say scripts for specific tricky moments, like countering a lowball offer or asking for more time to decide.' },
  { q: 'Do I need to share my exact offer numbers?', a: 'You get better, more specific talking points if you do, but the tool still works with general role and offer details if you would rather not share exact figures.' },
  { q: 'What does it cost to use?', a: 'A free CV Prime account and your own OpenRouter AI key — generating a negotiation plan costs a few paise in AI usage.' },
];

export default function AiSalaryNegotiationPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Negotiate your"
      highlight="offer"
      subtitle="Enter the role and your offer details. The AI builds evidence-based talking points, ready-to-say scripts for the tricky moments, and practical tips — tuned for Indian CTC negotiations."
      path="/tools/ai-salary-negotiation"
      appName="AI Salary Negotiation Coach"
      faqs={faqs}
    >
      <SalaryNegotiationAI />
    </AiToolLayout>
  );
}
