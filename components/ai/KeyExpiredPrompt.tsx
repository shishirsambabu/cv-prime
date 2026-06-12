import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export function KeyExpiredPrompt(): JSX.Element {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-950">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-amber-700">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-display text-base font-bold">Update your OpenRouter key</h3>
          <p className="mt-1 text-sm leading-6 text-amber-900">
            Your API key may have expired, been revoked, or hit its quota.
          </p>
          <Link
            href="/settings"
            className="mt-3 inline-flex rounded-full bg-amber-900 px-3 py-1.5 text-xs font-bold text-white"
          >
            Update key
          </Link>
        </div>
      </div>
    </div>
  );
}
