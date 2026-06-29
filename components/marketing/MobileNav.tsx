'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  links: NavLink[];
  ctaHref: string;
  ctaLabel: string;
  /** 'light' for dark headers (templates page), 'dark' for light headers. */
  tone?: 'dark' | 'light';
}

/**
 * Hamburger menu for small screens. The desktop nav lives behind
 * `hidden md:flex`, so without this the nav links were unreachable on
 * phones — this restores them in a full-screen sheet.
 */
export function MobileNav({
  links,
  ctaHref,
  ctaLabel,
  tone = 'dark',
}: MobileNavProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const triggerColor = tone === 'light' ? 'text-white' : 'text-slate-900';

  // The header sets `backdrop-blur`, which makes it a containing block for
  // fixed descendants — so the sheet must be portalled to <body> to cover
  // the full viewport instead of just the header strip.
  const sheet =
    open && mounted
      ? createPortal(
          <div className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-slate-950/95 backdrop-blur-xl md:hidden">
            <div className="flex items-center justify-between px-5 py-5">
              <span className="font-display text-lg font-bold text-white">CV Prime</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-pill border border-white/15 text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-1 px-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-5 font-display text-3xl font-bold tracking-tight text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="px-5 pt-8">
              <Link
                href={ctaHref}
                onClick={() => setOpen(false)}
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-pill bg-brand px-6 text-base font-bold text-brand-foreground"
              >
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className={`inline-flex h-11 w-11 items-center justify-center rounded-pill border border-slate-300/40 ${triggerColor}`}
      >
        <Menu className="h-5 w-5" />
      </button>

      {sheet}
    </div>
  );
}
