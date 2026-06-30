'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

/**
 * Client-side auth state for the marketing chrome. Returns `null` while the
 * session is still unknown (treat as logged-out for rendering), then `true`
 * or `false`. Kept client-side on purpose: reading the session server-side in
 * the shared marketing layout would force every static SEO page to render
 * dynamically. Logged-in visitors get a brief swap from the logged-out CTA to
 * the in-app CTA, and it stays in sync via onAuthStateChange.
 */
export function useAuthState(): boolean | null {
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    let active = true;
    let supabase;
    try {
      supabase = createClient();
    } catch {
      setAuthed(false);
      return;
    }

    supabase.auth
      .getUser()
      .then(({ data }) => {
        if (active) setAuthed(Boolean(data.user));
      })
      .catch(() => {
        if (active) setAuthed(false);
      });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (active) setAuthed(Boolean(session?.user));
    });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  return authed;
}
