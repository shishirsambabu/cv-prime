import { createAdminClient } from '@/lib/supabase/admin';
import type { Database } from '@/types/database.types';

type LifecycleInsert = Database['public']['Tables']['lifecycle_events']['Insert'];

export interface RecordEventParams {
  userId: string | null;
  type: string;
  entityId?: string | null;
  payload?: Record<string, unknown>;
  /** When set, a repeated event with the same key is ignored (returns existing id). */
  idempotencyKey?: string | null;
}

/**
 * Append a lifecycle event to the durable log. Returns the event id (existing
 * one when an idempotency key collides). Never throws — lifecycle logging must
 * not break the business transaction that emitted the event.
 */
export async function recordLifecycleEvent(params: RecordEventParams): Promise<string | null> {
  const admin = createAdminClient();
  if (!admin) {
    return null;
  }

  const insert: LifecycleInsert = {
    user_id: params.userId,
    event_type: params.type,
    entity_id: params.entityId ?? null,
    payload: (params.payload ?? {}) as LifecycleInsert['payload'],
    idempotency_key: params.idempotencyKey ?? null,
  };

  const { data, error } = await admin
    .from('lifecycle_events')
    .insert([insert] as never)
    .select('id')
    .maybeSingle();

  if (error) {
    // Idempotency collision — fetch the existing event id.
    if ((error as { code?: string }).code === '23505' && params.idempotencyKey) {
      const { data: existing } = await admin
        .from('lifecycle_events')
        .select('id')
        .eq('idempotency_key', params.idempotencyKey)
        .maybeSingle();
      return (existing as { id: string } | null)?.id ?? null;
    }
    return null;
  }

  return (data as { id: string } | null)?.id ?? null;
}
