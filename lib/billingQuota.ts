import { z } from 'zod';
import type { SupabaseClient } from '@supabase/supabase-js';
import {
  createPdfExportAccessToken,
  isStatelessPdfExportToken,
  verifyPdfExportAccessToken,
} from '@/lib/pdfExportToken';
import { createAdminClient } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';
import type { Database } from '@/types/database.types';

const quotaResultSchema = z.object({
  allowed: z.boolean(),
  used: z.number().optional().default(0),
  limit: z.number().nullable().optional().default(3),
  token: z.string().min(1).optional(),
  error: z.string().optional(),
});

export interface QuotaResult {
  allowed: boolean;
  used: number;
  limit: number | null;
  token?: string;
  error?: string;
}

type RpcClient = {
  rpc(
    fn: 'consume_free_cv_creation',
    args: { p_user_id: string }
  ): Promise<{ data: unknown; error: { message: string } | null }>;
  rpc(
    fn: 'consume_free_pdf_export',
    args: { p_user_id: string; p_cv_id: string }
  ): Promise<{ data: unknown; error: { message: string } | null }>;
  rpc(
    fn: 'consume_export_token',
    args: { p_user_id: string; p_cv_id: string; p_token: string }
  ): Promise<{ data: unknown; error: { message: string } | null }>;
};

function parseQuotaResult(value: unknown): QuotaResult {
  const parsed = quotaResultSchema.safeParse(value);

  if (!parsed.success) {
    return { allowed: false, used: 0, limit: 3 };
  }

  return parsed.data;
}

type ProfileQuotaView = Pick<
  Database['public']['Tables']['profiles']['Row'],
  'plan' | 'pdf_exports_used'
>;

async function createFallbackPdfExportToken({
  userId,
  cvId,
}: {
  userId: string;
  cvId: string;
}): Promise<QuotaResult> {
  const supabase = (createAdminClient() ?? createClient()) as unknown as SupabaseClient<Database>;
  const { data: cv, error: cvError } = await supabase
    .from('cvs')
    .select('id')
    .eq('id', cvId)
    .eq('user_id', userId)
    .maybeSingle();

  if (cvError) {
    throw new Error(cvError.message);
  }

  if (!cv) {
    return { allowed: false, used: 0, limit: 3, error: 'NOT_FOUND' };
  }

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const { data: rawProfile, error: profileError } = await supabase
      .from('profiles')
      .select('plan, pdf_exports_used')
      .eq('id', userId)
      .maybeSingle();

    if (profileError) {
      throw new Error(profileError.message);
    }

    const profile = rawProfile as ProfileQuotaView | null;
    if (!profile) {
      return { allowed: false, used: 0, limit: 3, error: 'NOT_FOUND' };
    }

    const used = profile.pdf_exports_used ?? 0;
    if (profile.plan === 'pro') {
      return {
        allowed: true,
        used,
        limit: null,
        token: createPdfExportAccessToken({ userId, cvId }),
      };
    }

    if (used >= 3) {
      return { allowed: false, used, limit: 3 };
    }

    const { data: updated, error: updateError } = await supabase
      .from('profiles')
      .update({ pdf_exports_used: used + 1 })
      .eq('id', userId)
      .eq('pdf_exports_used', used)
      .select('pdf_exports_used')
      .maybeSingle();

    if (updateError) {
      throw new Error(updateError.message);
    }

    if (updated) {
      return {
        allowed: true,
        used: used + 1,
        limit: 3,
        token: createPdfExportAccessToken({ userId, cvId }),
      };
    }
  }

  throw new Error('Could not reserve a PDF export.');
}

export async function consumeCvCreation(userId: string): Promise<QuotaResult> {
  const supabase = createClient() as unknown as RpcClient;
  const { data, error } = await supabase.rpc('consume_free_cv_creation', { p_user_id: userId });

  if (error) {
    throw new Error(error.message);
  }

  return parseQuotaResult(data);
}

export async function createPdfExportToken({
  userId,
  cvId,
}: {
  userId: string;
  cvId: string;
}): Promise<QuotaResult> {
  const supabase = createClient() as unknown as RpcClient;
  const { data, error } = await supabase.rpc('consume_free_pdf_export', {
    p_user_id: userId,
    p_cv_id: cvId,
  });

  if (error) {
    return createFallbackPdfExportToken({ userId, cvId });
  }

  return parseQuotaResult(data);
}

export async function consumePdfExportToken({
  userId,
  cvId,
  token,
}: {
  userId: string;
  cvId: string;
  token: string;
}): Promise<boolean> {
  if (isStatelessPdfExportToken(token)) {
    return verifyPdfExportAccessToken({ token, userId, cvId });
  }

  const supabase = createClient() as unknown as RpcClient;
  const { data, error } = await supabase.rpc('consume_export_token', {
    p_user_id: userId,
    p_cv_id: cvId,
    p_token: token,
  });

  if (error) {
    throw new Error(error.message);
  }

  return Boolean(data);
}
