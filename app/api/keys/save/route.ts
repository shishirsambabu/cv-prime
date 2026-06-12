import { NextResponse } from 'next/server';
import { z } from 'zod';
import { encryptAPIKey } from '@/lib/crypto';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';
import { validateOpenRouterKey } from '@/lib/openrouter';
import type { Database } from '@/types/database.types';

const saveKeySchema = z.object({
  apiKey: z.string().trim().min(20, 'Enter a complete OpenRouter API key.'),
});

export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limited = await rateLimit(user.id, 'keys-save', 5, '1h');
  if (limited) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  const body = saveKeySchema.safeParse(await req.json().catch(() => ({})));
  if (!body.success) {
    return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
  }

  const isValid = await validateOpenRouterKey(body.data.apiKey);
  if (!isValid) {
    return NextResponse.json({ error: 'KEY_INVALID' }, { status: 401 });
  }

  const hint = `...${body.data.apiKey.slice(-4)}`;
  const updates: Database['public']['Tables']['profiles']['Update'] = {
    openrouter_key_enc: encryptAPIKey(body.data.apiKey),
    openrouter_key_hint: hint,
  };

  const { error } = await supabase
    .from('profiles')
    .update(updates as never)
    .eq('id', user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, hint });
}
