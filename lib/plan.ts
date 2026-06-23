import { createAdminClient } from '@/lib/supabase/admin';
import { readPlanUsage } from '@/lib/readProfile';
import type { Plan } from '@/types/cv.types';

export async function getUserPlan(userId: string): Promise<Plan> {
  return (await readPlanUsage(userId)).plan;
}

export async function upgradeToPro(userId: string): Promise<void> {
  const admin = createAdminClient();
  if (!admin) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is required to upgrade plans.');
  }

  const { data, error } = await admin
    .from('profiles')
    .update({ plan: 'pro' } as never)
    .eq('id', userId)
    .select('id, plan')
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  if ((data as { plan?: Plan } | null)?.plan !== 'pro') {
    throw new Error('Pro upgrade was not applied.');
  }
}

export async function downgradeToFree(userId: string): Promise<void> {
  const admin = createAdminClient();
  if (!admin) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is required to downgrade plans.');
  }

  const { data, error } = await admin
    .from('profiles')
    .update({ plan: 'free' } as never)
    .eq('id', userId)
    .select('id, plan')
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  if ((data as { plan?: Plan } | null)?.plan !== 'free') {
    throw new Error('Free downgrade was not applied.');
  }
}
