import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database.types';

type AdminClient = ReturnType<typeof createSupabaseClient<Database>>;

/**
 * Service-role Supabase client with NO user session attached. Because no auth
 * cookie is loaded, every request is authorized with the service-role key,
 * which bypasses row-level security. Use only on the server and only to read
 * or write rows scoped to an already-authenticated user's own id.
 *
 * Returns null when the service-role key is not configured so callers can fall
 * back to the cookie-based client.
 */
export function createAdminClient(): AdminClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    return null;
  }

  return createSupabaseClient<Database>(url, serviceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
