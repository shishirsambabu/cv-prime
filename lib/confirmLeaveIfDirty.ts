import type { MouseEvent } from 'react';
import { useCVStore } from '@/store/cvStore';

// Next.js App Router client-side navigation (a <Link> click) never unloads
// the document, so the CV editor's `beforeunload` guard — which only fires
// on a real tab close/reload — never runs. Without this, clicking any
// persistent nav link (Dashboard, Settings, ...) while the 30s autosave
// timer hasn't fired yet silently discarded the in-flight edit.
export function confirmLeaveIfDirty(event: MouseEvent<HTMLAnchorElement>): void {
  if (!useCVStore.getState().isDirty) {
    return;
  }

  const shouldLeave = window.confirm(
    'You have unsaved CV changes that have not finished saving yet. Leave this page anyway?'
  );

  if (!shouldLeave) {
    event.preventDefault();
  }
}
