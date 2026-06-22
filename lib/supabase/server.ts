import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { CookieOptions } from '@supabase/ssr';
import type { Database } from '@/types/database.types';

function createSupabaseServerClient(
  supabaseUrl: string,
  supabaseKey: string,
  cookieStore: ReturnType<typeof cookies>
) {
  return createServerClient<Database, 'public'>(supabaseUrl, supabaseKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value, ...options });
        } catch {
          // Called from a Server Component render, where setting cookies is
          // not allowed. The session is refreshed by the middleware instead.
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value: '', ...options });
        } catch {
          // Same as set: ignored during Server Component render.
        }
      },
    },
  });
}

type AppSupabaseClient = ReturnType<typeof createSupabaseServerClient>;

export function createClient(): AppSupabaseClient {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase server environment variables are not configured');
  }

  const cookieStore = cookies();

  return createSupabaseServerClient(supabaseUrl, supabaseKey, cookieStore);
}
