'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay before the rise begins, in ms. Used to stagger sibling cards. */
  delayMs?: number;
  as?: 'div' | 'section' | 'article' | 'li';
}

/**
 * Wraps content so it fades, sharpens, and settles into place the first time
 * it enters the viewport. Pure IntersectionObserver + CSS, no animation library.
 */
export function Reveal({
  children,
  className = '',
  delayMs = 0,
  as = 'div',
}: RevealProps): JSX.Element {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node || visible) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -12% 0px' }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [visible]);

  const Tag = as;

  return (
    <Tag
      // @ts-expect-error ref typing differs per element tag, runtime is correct.
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delayMs ? ({ '--reveal-delay': `${delayMs}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
