import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';

const quotaResultSchema = z.object({
  allowed: z.boolean(),
  used: z.number().optional().default(0),
  limit: z.number().nullable().optional().default(3),
  token: z.string().uuid().optional(),
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
    throw new Error(error.message);
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
