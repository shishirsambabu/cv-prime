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
    q: 'Why "tuned for Indian CTC negotiations" specifically?',
    a: 'Indian offers are usually structured as CTC (cost-to-company) with fixed, variable, and benefit components rather than a flat base salary, and negotiation norms differ from Western markets. The scripts and talking points account for that structure.',
  },
  {
    q: 'What exactly do I get — generic tips or something usable?',
    a: 'Ready-to-say scripts for specific moments (asking for more, responding to "this is our final offer", comparing a competing offer) plus evidence-based talking points built from the details you enter, not generic advice.',
  },
  {
    q: 'Do I need to share my exact numbers?',
    a: 'Entering your current offer, target, and any competing offer produces sharper, more specific scripts — but you control exactly what details you provide.',
  },
  {
    q: 'Is it free?',
    a: 'Yes, with a free CV Prime account and your own connected OpenRouter API key — you pay only the small per-run token cost directly to OpenRouter.',
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
      appName="CV Prime AI Salary Negotiation Coach"
      appDescription="AI tool that generates evidence-based talking points and ready-to-say scripts for Indian CTC salary negotiations. Runs on the user's own AI key."
      faqs={faqs}
    >
      <SalaryNegotiationAI />
    </AiToolLayout>
  );
}
