type FaqItem = { q: string; a: string };

/**
 * WebApplication + BreadcrumbList + FAQPage JSON-LD for the BYOK AI tool
 * pages under /tools/ai-*, matching the schema pattern already used on the
 * no-login free tools (e.g. /tools/ats-keyword-matcher).
 */
export function AiToolSchema({
  name,
  path,
  description,
  breadcrumbLabel,
  faqs,
}: {
  name: string;
  path: string;
  description: string;
  breadcrumbLabel: string;
  faqs: FaqItem[];
}): JSX.Element {
  const url = `https://cv-prime.in${path}`;

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    url,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
      { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://cv-prime.in/tools' },
      { '@type': 'ListItem', position: 3, name: breadcrumbLabel, item: url },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
