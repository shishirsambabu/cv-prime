'use client';

import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import type { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SortableSectionCardProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function SortableSectionCard({
  id,
  title,
  children,
}: SortableSectionCardProps): JSX.Element {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  return (
    <Card
      ref={setNodeRef}
      className={cn(
        'overflow-hidden rounded-[1.5rem] border-slate-200 bg-white shadow-sm',
        isDragging && 'opacity-70 ring-2 ring-cyan-200'
      )}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-white to-slate-50 px-5 py-4">
        <h2 className="font-display text-base font-bold text-slate-950">{title}</h2>
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          aria-label={`Drag ${title}`}
          {...attributes}
          {...listeners}
        >
          <GripVertical className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-4 p-5">{children}</div>
    </Card>
  );
}
