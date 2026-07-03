'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useAuthState } from '@/components/marketing/useAuthState';

/**
 * Bottom CTA on the AI tool pages. Auth-aware so a signed-in user is taken
 * straight into the AI CV builder rather than back through signup.
 */
export function AiToolFooterCta(): JSX.Element {
  const authed = useAuthState() === true;
  const href = authed ? '/ai-cv' : '/signup?next=/ai-cv';
  const label = authed ? 'Open the AI CV builder' : 'Build your CV with AI';

  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 rounded-pill bg-gradient-to-r from-brand to-cyan-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5"
    >
      {label}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </Link>
  );
}
