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
    q: 'Is this tuned for Indian salary structures?',
    a: 'Yes — the talking points and scripts are built around CTC negotiations (base, variable, and benefits), not just a single take-home number, matching how Indian offers are structured.',
  },
  {
    q: 'What do the "scripts" actually look like?',
    a: 'Ready-to-say lines for specific tricky moments — being asked your current CTC, countering a lowball offer, or asking for time to decide — so you are not improvising in the room.',
  },
  {
    q: 'Do I need to share my exact offer numbers?',
    a: 'Only what you are comfortable with — the more detail you give (current CTC, offer, target), the more specific and useful the talking points will be.',
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
      name="AI Salary Negotiation Coach"
      description="Free AI tool that generates evidence-based salary negotiation talking points and scripts tuned for Indian CTC offers."
      faqs={faqs}
      relatedLinks={[
        { href: '/salary', label: 'Salary guides by role' },
        { href: '/tools/ai-interview-questions', label: 'AI interview question generator' },
        { href: '/tools/ai-outreach-email', label: 'AI outreach email generator' },
        { href: '/tools', label: 'All free tools' },
      ]}
    >
      <SalaryNegotiationAI />
    </AiToolLayout>
  );
}
