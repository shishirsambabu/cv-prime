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
  const protectedRoute = protectedPrefixes.some((prefix) => pathname.startsWith(prefix));
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

  const {
    data: { user },
  } = await supabase.auth.getUser();

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
