import { getAuthCallbackUrl } from '@/lib/auth';

describe('auth redirects', () => {
  it('preserves dashboard as the Google auth callback next path', () => {
    const callbackUrl = new URL(getAuthCallbackUrl('/dashboard', 'https://cv-prime.in'));

    expect(callbackUrl.pathname).toBe('/auth/callback');
    expect(callbackUrl.searchParams.get('next')).toBe('/dashboard');
  });
});
