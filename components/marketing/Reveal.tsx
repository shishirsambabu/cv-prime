import type { CSSProperties, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay before the rise begins, in ms. Used to stagger sibling cards. */
  delayMs?: number;
  as?: 'div' | 'section' | 'article' | 'li';
}

export function Reveal({
  children,
  className = '',
  delayMs = 0,
  as = 'div',
}: RevealProps): JSX.Element {
  const Tag = as;

  return (
    <Tag
      className={`reveal is-visible ${className}`}
      style={delayMs ? ({ '--reveal-delay': `${delayMs}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
