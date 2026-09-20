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

/**
 * Cancel an in-progress dnd-kit keyboard drag.
 *
 * dnd-kit's KeyboardSensor listens for keydown on the owner document and
 * treats Escape (matched on `event.code`) as "cancel this drag".
 */
function cancelKeyboardDrag(element: HTMLElement): void {
  const doc = element.ownerDocument;
  doc.dispatchEvent(
    new KeyboardEvent('keydown', {
      key: 'Escape',
      code: 'Escape',
      bubbles: true,
      cancelable: true,
    }),
  );
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
          onBlur={(event) => {
            // This is a <button>, so Space activates it — and dnd-kit reads
            // Space on the handle as "start a keyboard drag". A user who taps
            // Space here (or lands on the handle while tabbing) starts a drag
            // that used to survive clicking away: the KeyboardSensor keeps a
            // document-level keydown listener, so the next Space they typed
            // into a CV field was swallowed as "drop here" — it dropped the
            // section in a random place, silently reordered the CV, and yanked
            // focus back to this handle, losing every character after that
            // space. Ending the drag when the handle loses focus keeps the
            // drag scoped to the handle the user is actually on.
            if (isDragging) {
              cancelKeyboardDrag(event.currentTarget);
            }
          }}
        >
          <GripVertical className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-4 p-5">{children}</div>
    </Card>
  );
}
