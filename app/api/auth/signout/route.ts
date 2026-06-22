import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';

export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  await supabase.auth.signOut();

  return NextResponse.redirect(new URL('/login', req.url), 303);
}
