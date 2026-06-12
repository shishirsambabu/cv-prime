export function getAuthCallbackUrl(nextPath = '/dashboard', baseUrl?: string): string {
  const appUrl = baseUrl ?? process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3002';
  const callbackUrl = new URL('/auth/callback', appUrl);
  callbackUrl.searchParams.set('next', getSafeNextPath(nextPath));
  return callbackUrl.toString();
}

export function getSafeNextPath(value: string | null | undefined, fallback = '/dashboard'): string {
  if (!value || !value.startsWith('/') || value.startsWith('//')) {
    return fallback;
  }

  try {
    const parsed = new URL(value, 'https://cv-prime.local');
    return `${parsed.pathname}${parsed.search}${parsed.hash}`;
  } catch {
    return fallback;
  }
}
