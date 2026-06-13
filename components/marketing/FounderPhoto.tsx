'use client';

import { useState } from 'react';

/**
 * Founder portrait with a graceful fallback. Drop the photo at
 * `public/founder.jpg` and it appears automatically; until then, a
 * tasteful brand-gradient monogram stands in so the layout never breaks.
 */
export function FounderPhoto(): JSX.Element {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-panel border border-slate-200 bg-gradient-to-br from-brand/15 via-white to-cyan-200/20 shadow-2xl shadow-slate-950/10">
      {failed ? (
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-display text-6xl font-bold tracking-tight text-brand/70">
            SB
          </span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/founder.jpg"
          alt="Shishir Babu, founder of CV Prime"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
