import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import type { Plan } from '@/types/cv.types';

export async function getUserPlan(userId: string): Promise<Plan> {
  const supabase = createClient();
  const { data } = await supabase.from('profiles').select('plan').eq('id', userId).maybeSingle();
  const plan = (data as { plan?: Plan } | null)?.plan;

  return plan === 'pro' ? 'pro' : 'free';
}

export async function upgradeToPro(userId: string): Promise<void> {
  // Prefer the service-role client: webhooks have no user session, so the
  // cookie-based client would be blocked by row-level security.
  const supabase = (createAdminClient() ?? createClient()) as ReturnType<typeof createClient>;
  const { error } = await supabase
    .from('profiles')
    .update({ plan: 'pro' } as never)
    .eq('id', userId);

  if (error) {
    throw new Error(error.message);
  }
}

export async function downgradeToFree(userId: string): Promise<void> {
  const supabase = (createAdminClient() ?? createClient()) as ReturnType<typeof createClient>;
  const { error } = await supabase
    .from('profiles')
    .update({ plan: 'free' } as never)
    .eq('id', userId);

  if (error) {
    throw new Error(error.message);
  }
}
