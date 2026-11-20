export function getAuthCallbackUrl(nextPath = '/dashboard', baseUrl?: string): string {
  const appUrl = baseUrl ?? process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3002';
  const callbackUrl = new URL('/auth/callback', appUrl);
  callbackUrl.searchParams.set('next', getSafeNextPath(nextPath));
  return callbackUrl.toString();
}

export function rememberAuthNextPath(nextPath: string): void {
  if (typeof document === 'undefined') {
    return;
  }

  const safeNextPath = encodeURIComponent(getSafeNextPath(nextPath));
  document.cookie = `cv_prime_auth_next=${safeNextPath}; Max-Age=600; Path=/; SameSite=Lax; Secure`;
}

export function getSafeNextPath(value: string | null | undefined, fallback = '/dashboard'): string {
  if (!value || !value.startsWith('/') || value.startsWith('//')) {
    return fallback;
  }

  // A backslash is treated as a slash by browsers, so `/\\evil.example` is
  // `//evil.example` to them.
  if (value.includes('\\')) {
    return fallback;
  }

  try {
    const parsed = new URL(value, 'https://cv-prime.local');
    if (parsed.origin !== 'https://cv-prime.local') {
      return fallback;
    }

    // Checked again AFTER parsing: URL parsing drops dot segments, so
    // `/.//evil.example` and `/x/..//evil.example` both pass the prefix check
    // above and come out as `//evil.example`, which a redirect or a
    // router.push treats as another site. That let a link on our own domain
    // (/login?next=/.//evil.example) forward a signed-in user elsewhere.
    const result = `${parsed.pathname}${parsed.search}${parsed.hash}`;
    if (!result.startsWith('/') || result.startsWith('//')) {
      return fallback;
    }

    return result;
  } catch {
    return fallback;
  }
}
