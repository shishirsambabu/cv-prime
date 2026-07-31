import Link from 'next/link';
import { BrandLogo } from '@/components/BrandLogo';
import { SUPPORT_EMAIL } from '@/lib/contact';

const START_PATH = '/signup?next=/dashboard';

const footerColumns: Array<{ title: string; links: Array<{ label: string; href: string }> }> = [
  {
    title: 'Product',
    links: [
      { label: 'Templates', href: '/templates' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'AI job CV', href: '/signup?next=/ai-cv' },
      { label: 'About us', href: '/about' },
      { label: 'Get started free', href: START_PATH },
    ],
  },
  {
    title: 'Resume tools',
    links: [
      { label: 'Free tools (no login)', href: '/tools' },
      { label: 'Free resume builder', href: '/free-resume-builder' },
      { label: 'AI resume builder', href: '/ai-resume-builder' },
      { label: 'Resume checker', href: '/resume-checker' },
      { label: 'How to write a resume', href: '/resume-tips/how-to-write-a-resume' },
      { label: 'Fresher resume guide', href: '/fresher-resume' },
      { label: 'Cover letter tips', href: '/resume-tips/cover-letter-tips' },
    ],
  },
  {
    title: 'Guides',
    links: [
      { label: 'Online CV maker', href: '/online-cv-maker' },
      { label: 'AI CV builder', href: '/ai-cv-builder' },
      { label: 'ATS-friendly CV', href: '/ats-friendly-cv' },
      { label: 'CV builder India', href: '/cv-builder-india' },
      { label: 'Free ATS checker', href: '/ats-checker' },
      { label: 'Cover letter examples', href: '/cover-letter-examples' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Career blog', href: '/blog' },
      { label: 'CV examples by role', href: '/cv-examples' },
      { label: 'Interview questions', href: '/interview-questions' },
      { label: 'LinkedIn headlines', href: '/linkedin-headline' },
      { label: 'Salary guide India', href: '/salary' },
      { label: 'ATS statistics 2026', href: '/statistics' },
      { label: 'In-demand skills 2026', href: '/in-demand-skills-india-2026' },
      { label: 'ATS guide by role', href: '/ats-guide' },
      { label: 'Resume vs CV', href: '/resume-vs-cv' },
    ],
  },
  {
    title: 'Compare',
    links: [
      { label: 'vs Jobscan', href: '/cv-prime-vs-jobscan' },
      { label: 'vs Rezi', href: '/cv-prime-vs-rezi' },
      { label: 'vs Zety', href: '/cv-prime-vs-zety' },
      { label: 'vs Resume.io', href: '/cv-prime-vs-resume-io' },
      { label: 'vs Novoresume', href: '/cv-prime-vs-novoresume' },
      { label: 'vs Teal', href: '/cv-prime-vs-teal' },
      { label: 'vs Enhancv', href: '/cv-prime-vs-enhancv' },
    ],
  },
  {
    title: 'Legal & support',
    links: [
      { label: 'Contact us', href: '/contact' },
      { label: 'Ethics & conduct', href: '/ethics' },
      { label: 'Terms of service', href: '/terms' },
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Refund policy', href: '/refund' },
      { label: 'Cookie policy', href: '/cookies' },
    ],
  },
];

/**
 * Shared dark marketing footer used across every (marketing) page via the
 * route-group layout. Carries the site-wide internal-linking map.
 */
export function MarketingFooter(): JSX.Element {
  return (
    <footer className="border-t border-white/10 bg-[#04060c] text-slate-400">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:py-16">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <BrandLogo className="h-10" white />
            <p className="mt-4 text-sm leading-6 text-slate-400">
              AI-assisted CV builder, ATS checker, and resume tools for Indian job seekers.
            </p>
          </div>
          <p className="text-sm text-slate-400">
            Questions?{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-slate-200 underline hover:text-white">
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{column.title}</p>
              <nav className="mt-4 space-y-2.5 text-sm font-medium text-slate-400">
                {column.links.map((link) => (
                  <Link key={link.href} href={link.href} className="block transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} CV Prime. Operated by Shishir Babu, Ernakulam, Kerala, India.
        </p>
      </div>
    </footer>
  );
}
