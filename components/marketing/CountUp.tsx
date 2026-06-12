'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  value: number;
  durationMs?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Counts a number up from zero to `value` the first time it scrolls into
 * view, like a gauge settling. tabular-nums keeps the width stable so the
 * digits never jitter mid-animation.
 */
export function CountUp({
  value,
  durationMs = 1600,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}: CountUpProps): JSX.Element {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const run = (): void => {
      if (started.current) {
        return;
      }
      started.current = true;

      if (prefersReducedMotion()) {
        setDisplay(value);
        return;
      }

      const start = performance.now();
      const tick = (now: number): void => {
        const progress = Math.min((now - start) / durationMs, 1);
        setDisplay(value * easeOutCubic(progress));

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [value, durationMs]);

  const formatted = display.toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
