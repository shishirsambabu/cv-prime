import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { getSafeNextPath } from '@/lib/auth';

const protectedPrefixes = [
  '/dashboard',
  '/editor',
  '/ai-cv',
  '/cover-letter',
  '/job-tracker',
  '/settings',
];

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const host = request.headers.get('host')?.toLowerCase();
  if (host === 'cv-prime.vercel.app') {
    const canonicalUrl = request.nextUrl.clone();
    canonicalUrl.protocol = 'https';
    canonicalUrl.hostname = 'cv-prime.in';
    canonicalUrl.port = '';
    return NextResponse.redirect(canonicalUrl, 308);
  }

  const pathname = request.nextUrl.pathname;

  // Public routes — marketing pages, /tools/*, role×city pages, robots.txt,
  // sitemap.xml, llm.txt, /auth/callback — need no auth. Skip the Supabase
  // session round-trip entirely so crawlers get a fast response and we make no
  // auth call per public crawl. Only protected app routes and /login,/signup
  // run the session logic below.
  // Match on a full path segment, never a bare string prefix. A plain
  // startsWith() made every public page whose slug merely begins with a
  // protected prefix look protected — /ai-cv-builder and /ai-cv-maker matched
  // '/ai-cv', and /cover-letter-generator plus the whole /cover-letter-examples
  // cluster matched '/cover-letter' — so logged-out visitors and crawlers were
  // redirected to /login and those pages could not be indexed at all.
  const protectedRoute = protectedPrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
  const isAuthPage = pathname === '/login' || pathname === '/signup';
  if (!protectedRoute && !isAuthPage) {
    return NextResponse.next({ request: { headers: request.headers } });
  }

  const response = NextResponse.next({
    request: { headers: request.headers },
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return response;
  }

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

  let user = null;
  try {
    const {
      data: { user: fetchedUser },
    } = await supabase.auth.getUser();
    user = fetchedUser;
  } catch (error) {
    // supabase-js only returns an { error } result for actual auth errors
    // (invalid/expired session); a network failure talking to the Supabase
    // auth server (outage, DNS blip, timeout) throws instead. This runs on
    // every request to a protected route or /login,/signup (per the matcher
    // below, effectively every non-static, non-API request), so leaving it
    // unguarded meant any transient Supabase outage 500'd the entire
    // authenticated app plus the sign-in/sign-up pages, site-wide — and
    // unlike a render error, a throw here happens before app/error.tsx (or
    // any React error boundary) exists to catch it, so users saw Next's raw
    // unstyled crash page with no retry.
    //
    // Fail open instead: let the request continue unauthenticated. Protected
    // pages re-check the session server-side themselves (e.g.
    // app/(dashboard)/layout.tsx), so a real logged-out user is still routed
    // to /login there; if the same outage hits that check too, it throws
    // inside a Server Component render, which app/error.tsx already catches
    // with a friendly "Something went wrong / Try again" page instead of a
    // blank crash.
    console.error('middleware: supabase.auth.getUser() failed', error);
    return response;
  }

  if (!user && protectedRoute) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('next', `${pathname}${request.nextUrl.search}`);
    return NextResponse.redirect(loginUrl);
  }

  if (user && (pathname === '/login' || pathname === '/signup')) {
    const nextPath = getSafeNextPath(request.nextUrl.searchParams.get('next'), '/dashboard');
    return NextResponse.redirect(new URL(nextPath, request.url));
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
};
