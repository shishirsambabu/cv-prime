import { createCipheriv, createDecipheriv, randomBytes } from 'node:crypto';

const algorithm = 'aes-256-gcm';
const ivLength = 12;
const authTagLength = 16;

function getSecret(): Buffer {
  const secret = process.env.ENCRYPTION_SECRET;

  if (!secret || !/^[0-9a-fA-F]{64}$/.test(secret)) {
    throw new Error('ENCRYPTION_SECRET must be 64 hex characters');
  }

  return Buffer.from(secret, 'hex');
}

export function encryptAPIKey(plaintext: string): string {
  const iv = randomBytes(ivLength);
  const cipher = createCipheriv(algorithm, getSecret(), iv, {
    authTagLength,
  });

  const encrypted = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  const payload = Buffer.concat([tag, encrypted]);

  return `${iv.toString('base64')}:${payload.toString('base64')}`;
}

export function decryptAPIKey(payload: string): string {
  const [ivB64, cipherB64] = payload.split(':');

  if (!ivB64 || !cipherB64) {
    throw new Error('Invalid encrypted key format');
  }

  const encryptedPayload = Buffer.from(cipherB64, 'base64');
  const tag = encryptedPayload.subarray(0, authTagLength);
  const encrypted = encryptedPayload.subarray(authTagLength);

  const decipher = createDecipheriv(algorithm, getSecret(), Buffer.from(ivB64, 'base64'), {
    authTagLength,
  });
  decipher.setAuthTag(tag);

  const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
  return decrypted.toString('utf8');
}

export function encrypt(text: string): string {
  return encryptAPIKey(text);
}

export function decrypt(payload: string): string {
  return decryptAPIKey(payload);
}
