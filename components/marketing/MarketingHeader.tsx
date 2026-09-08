'use client';

import Link from 'next/link';
import { ArrowRight, LayoutDashboard } from 'lucide-react';
import { BrandLogo } from '@/components/BrandLogo';
import { MobileNav } from '@/components/marketing/MobileNav';
import { useAuthState } from '@/components/marketing/useAuthState';

const START_PATH = '/signup?next=/dashboard';

const baseLinks = [
  { href: '/templates', label: 'Templates' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/tools', label: 'Free tools' },
  { href: '/about', label: 'About' },
];

/**
 * Shared dark, sticky marketing header used across every (marketing) page
 * via the route-group layout. Auth-aware: signed-in visitors see a Dashboard
 * link instead of "Sign in / Get started free", so the logged-in state is
 * obvious on the public tool pages too.
 */
export function MarketingHeader(): JSX.Element {
  const authed = useAuthState() === true;

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#04060c]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
        <Link href="/" className="flex items-center" aria-label="CV Prime home">
          <BrandLogo className="h-11" white priority />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {baseLinks.map((link) => (
            <Link key={link.href} className="transition hover:text-white" href={link.href}>
              {link.label}
            </Link>
          ))}
          {authed ? null : (
            <Link className="transition hover:text-white" href="/login">
              Sign in
            </Link>
          )}
        </nav>

        {authed ? (
          <Link
            href="/dashboard"
            className="group hidden h-11 items-center gap-2 rounded-pill bg-white/10 px-5 text-sm font-bold text-white ring-1 ring-inset ring-white/20 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 md:inline-flex"
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
        ) : (
          <Link
            href={START_PATH}
            className="group hidden h-11 items-center gap-2 rounded-pill bg-white/10 px-5 text-sm font-bold text-white ring-1 ring-inset ring-white/20 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 md:inline-flex"
          >
            Get started free
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        )}

        <MobileNav
          links={baseLinks}
          authed={authed}
          ctaHref={authed ? '/dashboard' : START_PATH}
          ctaLabel={authed ? 'Open dashboard' : 'Get started'}
          tone="light"
        />
      </div>
    </header>
  );
}
