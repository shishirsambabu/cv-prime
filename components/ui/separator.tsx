import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: never;
}

export function Separator({
  className,
  ...props
}: SeparatorProps): JSX.Element {
  return (
    <div
      role="separator"
      className={cn('shrink-0 bg-slate-200', className)}
      {...props}
    />
  );
}
