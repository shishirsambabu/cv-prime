'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * Founder portrait with a graceful fallback. Drop the photo in `public/` as
 * founder.jpg (or .png / .webp) and it appears automatically; until then, a
 * tasteful brand-gradient monogram stands in so the layout never breaks.
 */
const CANDIDATES = ['/founder.jpg', '/founder.png', '/founder.webp', '/founder.jpeg'];

export function FounderPhoto(): JSX.Element {
  const [index, setIndex] = useState(0);
  const src = CANDIDATES[index];

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-panel border border-white/10 bg-gradient-to-br from-brand/15 via-white to-cyan-200/20 shadow-2xl shadow-slate-950/10">
      {src ? (
        <Image
          src={src}
          alt="Shishir Babu, founder of CV Prime"
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
          onError={() => setIndex((current) => current + 1)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-display text-6xl font-bold tracking-tight text-brand/70">
            SB
          </span>
        </div>
      )}
    </div>
  );
}
