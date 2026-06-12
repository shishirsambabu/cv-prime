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

  let isValid: boolean;
  try {
    isValid = await validateOpenRouterKey(body.data.apiKey);
  } catch {
    return NextResponse.json({ error: 'VALIDATION_UNAVAILABLE' }, { status: 502 });
  }

  if (!isValid) {
    return NextResponse.json({ error: 'KEY_INVALID' }, { status: 401 });
  }

  let encryptedKey: string;
  try {
    encryptedKey = encryptAPIKey(body.data.apiKey);
  } catch {
    return NextResponse.json({ error: 'ENCRYPTION_ERROR' }, { status: 500 });
  }

  const hint = `...${body.data.apiKey.slice(-4)}`;
  const upsertData: Database['public']['Tables']['profiles']['Insert'] = {
    id: user.id,
    openrouter_key_enc: encryptedKey,
    openrouter_key_hint: hint,
  };

  const { error } = await supabase
    .from('profiles')
    .upsert(upsertData as never, { onConflict: 'id' });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, hint });
}
