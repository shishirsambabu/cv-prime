const baseUrl = 'https://cv-prime.in';

export type AiToolFaqItem = { q: string; a: string };

export function aiToolSchemas({
  name,
  path,
  breadcrumbName,
  description,
  faqs,
}: {
  name: string;
  path: string;
  breadcrumbName: string;
  description: string;
  faqs: AiToolFaqItem[];
}) {
  const url = `${baseUrl}${path}`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

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
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'AI Tools', item: `${baseUrl}/tools` },
      { '@type': 'ListItem', position: 3, name: breadcrumbName, item: url },
    ],
  };

  return [faqSchema, appSchema, breadcrumbSchema];
}
