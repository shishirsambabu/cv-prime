'use client';

import Link from 'next/link';
import type { ComponentProps } from 'react';
import { confirmLeaveIfDirty } from '@/lib/confirmLeaveIfDirty';

/**
 * Same as next/link, but warns before leaving an in-flight, unsaved CV edit.
 * Use this instead of a raw <Link> for any persistent dashboard chrome (logo,
 * header nav) that renders alongside the editor — see confirmLeaveIfDirty for
 * why a plain <Link> can't be trusted to preserve unsaved work.
 */
export function GuardedLink(props: ComponentProps<typeof Link>): JSX.Element {
  return <Link {...props} onClick={confirmLeaveIfDirty} />;
}
