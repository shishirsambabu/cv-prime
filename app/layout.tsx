import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'https://cv-prime.in'),
  title: {
    default: 'CV Prime - ATS-optimised CV builder for job seekers',
    template: '%s | CV Prime',
  },
  description:
    'Build a CV that passes ATS filters. Get your readiness score, rewrite weak bullets with AI, and export a recruiter-ready PDF.',
  keywords: [
    'CV builder',
    'ATS CV',
    'resume builder',
    'AI CV builder',
    'job application',
    'OpenRouter CV',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://cv-prime.in',
    siteName: 'CV Prime',
    title: 'CV Prime - ATS-optimised CV builder for job seekers',
    description:
      'Diagnose weak CVs, rewrite stronger bullets, choose premium templates, and export recruiter-ready PDFs.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CV Prime product preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CV Prime - ATS-optimised CV builder for job seekers',
    description:
      'Diagnose weak CVs, rewrite stronger bullets, choose premium templates, and export recruiter-ready PDFs.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
