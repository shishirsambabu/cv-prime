'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): JSX.Element {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="font-display text-2xl font-bold text-slate-900">Something went wrong</h1>
      <p className="max-w-md text-sm text-slate-600">
        We hit an unexpected error loading this page. Your CV data is safe — try again, or head back
        to the homepage.
      </p>
      <div className="flex gap-3">
        <Button onClick={() => reset()}>Try again</Button>
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
