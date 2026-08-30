import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { getSafeNextPath } from '@/lib/auth';
import { sendWelcomeEmail } from '@/lib/email/lifecycle';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const cookieNextPath = request.cookies.get('cv_prime_auth_next')?.value;
  const nextPath = getSafeNextPath(
    requestUrl.searchParams.get('next') ?? (cookieNextPath ? decodeURIComponent(cookieNextPath) : null),
    '/dashboard'
  );

  if (!code) {
    return NextResponse.redirect(new URL('/login?error=missing_code', request.url));
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.redirect(new URL('/login?error=config', request.url));
  }

  const response = NextResponse.redirect(new URL(nextPath, request.url));
  response.cookies.set('cv_prime_auth_next', '', {
    path: '/',
    maxAge: 0,
  });

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return request.cookies.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        request.cookies.set({ name, value, ...options });
        response.cookies.set({ name, value, ...options });
      },
      remove(name: string, options: CookieOptions) {
        request.cookies.set({ name, value: '', ...options });
        response.cookies.set({ name, value: '', ...options });
      },
    },
  });

  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(
      new URL(`/login?error=${encodeURIComponent(error.message)}`, request.url)
    );
  }

  // Send the welcome email once per user (guarded by welcome_email_sent_at and
  // an idempotency key). Never blocks or breaks the login redirect.
  const userId = data.user?.id;
  if (userId) {
    try {
      await sendWelcomeEmail(userId);
    } catch {
      // Non-fatal — the daily email-health job will pick up a missed welcome.
    }
  }

  return response;
}
