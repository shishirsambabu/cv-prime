import { createBrowserClient } from '@supabase/ssr';
import type { Database } from '@/types/database.types';

function createSupabaseBrowserClient(
  supabaseUrl: string,
  supabaseAnonKey: string
) {
  return createBrowserClient<Database, 'public'>(supabaseUrl, supabaseAnonKey);
}

type AppSupabaseClient = ReturnType<typeof createSupabaseBrowserClient>;

let browserClient: AppSupabaseClient | null = null;

export function createClient(): AppSupabaseClient {
  if (browserClient) {
    return browserClient;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase browser environment variables are not configured');
  }

  browserClient = createSupabaseBrowserClient(supabaseUrl, supabaseAnonKey);
  return browserClient;
}
