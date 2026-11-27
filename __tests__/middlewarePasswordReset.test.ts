/**
 * @jest-environment node
 *
 * The password-reset email signs the user in (recovery session) and sends them
 * to /login?mode=new-password to choose the new password. The middleware
 * redirected every signed-in visitor away from /login, so that form was never
 * rendered: the user landed on the dashboard still not knowing their password.
 */

const getUserMock = jest.fn();

jest.mock('@supabase/ssr', () => ({
  createServerClient: jest.fn(() => ({
    auth: { getUser: getUserMock },
  })),
}));

import { NextRequest } from 'next/server';
import { middleware } from '@/middleware';

function makeRequest(pathname: string): NextRequest {
  return new NextRequest(new URL(pathname, 'https://cv-prime.in'));
}

describe('middleware and the password-reset landing page', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.clearAllMocks();
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_SUPABASE_URL: 'https://example.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'anon-key',
    };
    getUserMock.mockResolvedValue({ data: { user: { id: 'user-1' } } });
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('lets a signed-in (recovery) user reach /login?mode=new-password', async () => {
    const response = await middleware(makeRequest('/login?mode=new-password&next=%2Fdashboard'));

    expect(response.headers.get('location')).toBeNull();
  });

  it.each(['/login', '/login?mode=reset', '/login?next=%2Fsettings', '/signup', '/signup?mode=new-password'])(
    'still sends a signed-in user away from %s',
    async (pathname) => {
      const response = await middleware(makeRequest(pathname));

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).not.toContain('/login');
      expect(response.headers.get('location')).not.toContain('/signup');
    },
  );
});
