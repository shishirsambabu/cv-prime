import { render, screen } from '@testing-library/react';
import { FaqSection } from '@/components/marketing/FaqSection';
import type { FaqEntry } from '@/components/marketing/FaqSection';

const faqs: FaqEntry[] = [
  { question: 'Is CV Prime free?', answer: 'Yes, the Free plan costs nothing.' },
  { question: 'Is Pro a subscription?', answer: 'No. It is a one-time payment </script> safe.' },
];

describe('FaqSection', () => {
  it('renders every question and answer in the initial markup', () => {
    render(<FaqSection faqs={faqs} heading="Pricing questions" />);

    expect(screen.getByRole('heading', { level: 2, name: 'Pricing questions' })).toBeInTheDocument();
    for (const faq of faqs) {
      expect(screen.getByRole('heading', { level: 3, name: faq.question })).toBeInTheDocument();
      // Answers must be in the DOM even when collapsed so crawlers can read them.
      expect(screen.getByText(faq.answer)).toBeInTheDocument();
    }
  });

  it('emits FAQPage JSON-LD that mirrors the visible content', () => {
    const { container } = render(<FaqSection faqs={faqs} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).not.toBeNull();

    const raw = script?.innerHTML ?? '';
    // A literal "</script>" inside an answer must not be able to close the tag.
    expect(raw).not.toContain('</script>');

    const schema = JSON.parse(raw) as {
      '@type': string;
      mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }>;
    };
    expect(schema['@type']).toBe('FAQPage');
    expect(schema.mainEntity.map((entry) => entry.name)).toEqual(faqs.map((faq) => faq.question));
    expect(schema.mainEntity.map((entry) => entry.acceptedAnswer.text)).toEqual(faqs.map((faq) => faq.answer));
  });
});
