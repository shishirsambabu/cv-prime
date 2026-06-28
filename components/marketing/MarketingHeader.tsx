import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BrandLogo } from '@/components/BrandLogo';
import { MobileNav } from '@/components/marketing/MobileNav';

const START_PATH = '/signup?next=/dashboard';

const navLinks = [
  { href: '/templates', label: 'Templates' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/tools', label: 'Free tools' },
  { href: '/about', label: 'About' },
  { href: '/login', label: 'Sign in' },
];

/**
 * Shared dark, sticky marketing header used across every (marketing) page
 * via the route-group layout. Glassy obsidian bar that blends into the
 * cinematic dark theme.
 */
export function MarketingHeader(): JSX.Element {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#04060c]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
        <Link href="/" className="flex items-center" aria-label="CV Prime home">
          <BrandLogo className="h-11" white />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} className="transition hover:text-white" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href={START_PATH}
          className="group hidden h-11 items-center gap-2 rounded-pill bg-white/10 px-5 text-sm font-bold text-white ring-1 ring-inset ring-white/20 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 md:inline-flex"
        >
          Get started free
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
        <MobileNav links={navLinks} ctaHref={START_PATH} ctaLabel="Get started" tone="light" />
      </div>
    </header>
  );
}
