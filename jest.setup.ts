import '@testing-library/jest-dom';
import { randomUUID } from 'crypto';

// jsdom's Crypto implementation does not include randomUUID, but app code
// (lib/cv.ts createId, and several components) calls crypto.randomUUID()
// directly. Without this, any test that touches CV data factories throws
// "crypto.randomUUID is not a function" in jsdom, not in real browsers.
if (typeof globalThis.crypto?.randomUUID !== 'function') {
  Object.defineProperty(globalThis.crypto, 'randomUUID', {
    value: randomUUID,
    configurable: true,
  });
}
