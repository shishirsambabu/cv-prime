/**
 * @jest-environment node
 *
 * Regression coverage: middleware.ts called `supabase.auth.getUser()`
 * unguarded. supabase-js only returns an `{ error }` result for genuine auth
 * errors (invalid/expired session) — a network failure reaching the Supabase
 * auth server (outage, DNS blip, timeout) throws instead. Because this ran on
 * every request to a protected route or /login,/signup (effectively every
 * non-static, non-API request per the matcher), an unhandled throw here 500'd
 * the entire authenticated app plus the sign-in/sign-up pages, site-wide, on
 * any transient Supabase outage — and unlike a render error, it happened
 * before any React error boundary (app/error.tsx) exists to catch it.
 *
 * This pins that a network failure from `getUser()` no longer throws out of
 * `middleware()`, and that the request is allowed through instead (protected
 * pages re-check the session server-side and already degrade gracefully via
 * app/error.tsx if the same outage hits them too).
 */

const getUserMock = jest.fn();

jest.mock('@supabase/ssr', () => ({
  createServerClient: jest.fn(() => ({
    auth: {
      getUser: getUserMock,
    },
  })),
}));

import { NextRequest } from 'next/server';
import { middleware } from '@/middleware';

function makeRequest(pathname: string): NextRequest {
  return new NextRequest(new URL(pathname, 'https://cv-prime.in'));
}

describe('middleware auth-check failure handling', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.clearAllMocks();
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_SUPABASE_URL: 'https://example.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'anon-key',
    };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('does not throw and lets a protected-route request through when getUser() rejects with a network error', async () => {
    getUserMock.mockRejectedValue(new TypeError('fetch failed'));

    const response = await middleware(makeRequest('/dashboard'));

    expect(response.status).not.toBe(500);
    // Fails open: no redirect to /login on a network failure, unlike a
    // confirmed logged-out user.
    expect(response.headers.get('location')).toBeNull();
  });

  it('does not throw and lets a /login request through when getUser() rejects with a network error', async () => {
    getUserMock.mockRejectedValue(new TypeError('fetch failed'));

    const response = await middleware(makeRequest('/login'));

    expect(response.status).not.toBe(500);
    expect(response.headers.get('location')).toBeNull();
  });

  it('still redirects a confirmed logged-out user away from a protected route', async () => {
    getUserMock.mockResolvedValue({ data: { user: null } });

    const response = await middleware(makeRequest('/dashboard'));

    expect(response.status).toBe(307);
    expect(response.headers.get('location')).toContain('/login');
  });

  it('still lets a confirmed logged-in user through to a protected route', async () => {
    getUserMock.mockResolvedValue({ data: { user: { id: 'user-1' } } });

    const response = await middleware(makeRequest('/dashboard'));

    expect(response.status).not.toBe(500);
    expect(response.headers.get('location')).toBeNull();
  });
});
