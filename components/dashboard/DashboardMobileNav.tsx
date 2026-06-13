'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FileText,
  KanbanSquare,
  LayoutGrid,
  Menu,
  Settings,
  Wand2,
  X,
} from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Workspace', icon: FileText },
  { href: '/ai-cv', label: 'AI job CV', icon: Wand2 },
  { href: '/job-tracker', label: 'Job tracker', icon: KanbanSquare },
  { href: '/templates', label: 'Templates', icon: LayoutGrid },
  { href: '/settings', label: 'Settings', icon: Settings },
];

/**
 * Mobile navigation for the dashboard. The desktop sidebar is hidden below
 * lg, so without this the app's sections were unreachable on phones.
 */
export function DashboardMobileNav({ email }: { email?: string }): JSX.Element {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="inline-flex h-10 w-10 items-center justify-center rounded-pill border border-slate-200 bg-white text-slate-700"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative ml-auto flex h-full w-[280px] flex-col bg-slate-950 px-5 py-6 text-white shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-inner bg-cyan-300 font-display text-xs font-bold text-slate-950">
                  CV
                </span>
                <span className="font-display text-base font-bold">CV Prime</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-pill border border-white/15 text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {email ? (
              <p className="mt-5 truncate rounded-inner bg-white/[0.06] px-3 py-2 text-xs font-medium text-slate-300">
                {email}
              </p>
            ) : null}

            <nav className="mt-5 space-y-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      active
                        ? 'bg-white/[0.12] text-white'
                        : 'text-slate-300 hover:bg-white/[0.08] hover:text-white'
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${active ? 'text-cyan-300' : 'text-slate-400'}`} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}
