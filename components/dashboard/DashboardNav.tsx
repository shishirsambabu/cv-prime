'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText, KanbanSquare, Settings, Wand2, Sparkles } from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Workspace', icon: FileText },
  { href: '/ai-cv', label: 'AI job CV', icon: Wand2 },
  { href: '/job-tracker', label: 'Job tracker', icon: KanbanSquare },
  { href: '/tools', label: 'AI tools', icon: Sparkles },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export function DashboardNav(): JSX.Element {
  const pathname = usePathname();

  return (
    <nav className="mt-8 space-y-1.5">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? 'page' : undefined}
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
              active
                ? 'bg-white/[0.12] text-white shadow-sm'
                : 'text-slate-300 hover:bg-white/[0.08] hover:text-white'
            }`}
          >
            <Icon className={`h-4 w-4 ${active ? 'text-cyan-300' : 'text-slate-400'}`} />
            {item.label}
            {active ? (
              <span className="ml-auto h-1.5 w-1.5 rounded-pill bg-cyan-300" />
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}
