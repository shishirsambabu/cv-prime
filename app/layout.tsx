import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://cv-prime.in';

// ── Structured data ─────────────────────────────────────────────────────────
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CV Prime',
  url: 'https://cv-prime.in',
  description: 'AI CV builder and ATS resume maker for India — tailor your resume to any job description, score your ATS match, and export a recruiter-ready PDF.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://cv-prime.in/cv-examples?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: 'CV Prime',
    url: 'https://cv-prime.in',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CV Prime',
  url: APP_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${APP_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  description:
    'AI-powered CV builder that scores ATS match, rewrites weak bullets, and exports recruiter-ready PDFs — trusted by job seekers across India.',
  founder: {
    '@type': 'Person',
    name: 'Shishir Babu',
    jobTitle: 'Founder & CEO',
    url: APP_URL,
  },
  foundingDate: '2025',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ernakulam',
    addressRegion: 'Kerala',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'support@cv-prime.in',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://twitter.com/cvprime',
    'https://x.com/cvprime',
    'https://www.linkedin.com/company/cv-prime',
    'https://www.instagram.com/cvprime.in',
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CV Prime',
  url: APP_URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'Build an ATS-optimised CV in minutes. Paste a job description, let AI tailor your bullets and keywords, score your match, and export a clean PDF.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Free Plan',
      price: '0',
      priceCurrency: 'INR',
      description: '3 PDF exports, ATS scoring, AI rewrites, all templates.',
    },
    {
      '@type': 'Offer',
      name: 'Pro Plan',
      price: '249',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '249',
        priceCurrency: 'INR',
        unitText: 'MONTH',
      },
      description: 'Unlimited PDF exports, no watermark, all premium features.',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '124',
    bestRating: '5',
    worstRating: '1',
  },
  featureList: [
    'AI CV tailoring to job description',
    'ATS keyword gap analysis and scoring',
    'Bullet rewriter with outcome focus',
    'PDF export with print-to-PDF',
    '8 professional CV templates',
    'Job application tracker',
    'AI cover letter generator',
    'Before and after CV comparison',
    'Free ATS resume checker',
    'CV examples for 36 roles across tech, business, and operations',
    'Interview question guides for 36 roles',
    'Salary guides for 36 roles in India',
    'LinkedIn headline templates for 36 roles',
    'ATS optimisation guides for 36 roles',
    'Cover letter examples for 36 roles',
  ],
};

// ── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: 'CV Prime — AI CV Builder & ATS Resume Maker for India',
    template: '%s | CV Prime',
  },
  description:
    'Free AI CV builder for India. Paste a job description and CV Prime tailors your resume, scores ATS match, rewrites weak bullets, and exports a recruiter-ready PDF in minutes.',
  keywords: [
    'CV maker',
    'AI CV builder',
    'ATS resume builder',
    'online CV maker India',
    'resume builder free',
    'ATS friendly resume',
    'CV maker online free',
    'AI resume builder India',
    'job application CV',
    'CV builder India',
    'resume maker online',
    'ATS CV checker',
    'CV tailoring AI',
    'resume optimization',
    'professional CV template',
  ],
  authors: [{ name: 'Shishir Babu', url: APP_URL }],
  creator: 'CV Prime',
  publisher: 'CV Prime',
  category: 'Career Tools',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: APP_URL,
    siteName: 'CV Prime',
    title: 'CV Prime — AI CV Builder & ATS Resume Maker',
    description:
      'Free AI CV builder. Tailor your resume to any job description, fix ATS keyword gaps, and export a clean PDF — all in minutes.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CV Prime — AI CV Builder that scores and fixes your resume',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cvprime',
    title: 'CV Prime — AI CV Builder & ATS Resume Maker',
    description:
      'Tailor your resume to any job description, fix ATS gaps, and export a clean PDF — free to start.',
    images: [{ url: '/og-image.png', alt: 'CV Prime — AI CV Builder' }],
  },
  alternates: {
    canonical: APP_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

// ── Root layout ───────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Favicons */}
        <link rel="icon" type="image/png" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-brand-foreground focus:shadow-lg"
        >
          Skip to content
        </a>
        <div id="main-content">{children}</div>
        <AnalyticsProvider />

        {/* JSON-LD structured data — WebSite with SearchAction */}
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          strategy="afterInteractive"
        />
        {/* JSON-LD structured data — Organisation */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="afterInteractive"
        />
        {/* JSON-LD structured data — SoftwareApplication */}
        <Script
          id="schema-software"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
