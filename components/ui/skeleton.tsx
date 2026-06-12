import { cn } from '@/lib/utils';

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: never;
}

export function Skeleton({
  className,
  ...props
}: SkeletonProps): JSX.Element {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-slate-200', className)}
      {...props}
    />
  );
}
