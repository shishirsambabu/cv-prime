/**
 * @jest-environment node
 */

import { decryptAPIKey, encryptAPIKey } from '@/lib/crypto';

describe('crypto helpers', () => {
  const originalSecret = process.env.ENCRYPTION_SECRET;

  afterEach(() => {
    process.env.ENCRYPTION_SECRET = originalSecret;
  });

  it('encrypts and decrypts an API key without returning plaintext', () => {
    process.env.ENCRYPTION_SECRET =
      '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef';

    const encrypted = encryptAPIKey('sk-test-secret-key');

    expect(encrypted).not.toContain('sk-test-secret-key');
    expect(decryptAPIKey(encrypted)).toBe('sk-test-secret-key');
  });

  it('rejects invalid encryption secrets', () => {
    process.env.ENCRYPTION_SECRET = 'short-secret';

    expect(() => encryptAPIKey('sk-test-secret-key')).toThrow(
      'ENCRYPTION_SECRET must be 64 hex characters'
    );
  });
});
