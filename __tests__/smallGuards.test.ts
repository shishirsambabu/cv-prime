import { isRealCalendarDate } from '@/lib/calendarDate';
import { isAppRoute } from '@/lib/appRoutes';
import { safeSessionGet, safeSessionSet } from '@/lib/safeSessionStorage';
import { getCashfreeEnvironment } from '@/lib/cashfree';

describe('isRealCalendarDate', () => {
  it('accepts days that exist', () => {
    expect(isRealCalendarDate('2025-02-28')).toBe(true);
    expect(isRealCalendarDate('2024-02-29')).toBe(true);
  });

  // Regression: Date.parse rolls 2025-02-31 over to March, so it passed
  // validation and failed the database date cast as a 500.
  it.each(['2025-02-31', '2025-02-29', '2025-13-01', '2025-00-10', '2025-04-31', '25-01-01', 'tomorrow', ''])(
    'rejects %j',
    (value) => {
      expect(isRealCalendarDate(value)).toBe(false);
    }
  );
});

describe('isAppRoute', () => {
  it.each(['/dashboard', '/editor/abc', '/ai-cv', '/cover-letter/123', '/job-tracker', '/settings', '/print/abc', '/share/abc', '/login', '/signup', '/embed/ats'])(
    'treats %s as the app',
    (path) => {
      expect(isAppRoute(path)).toBe(true);
    }
  );

  it.each(['/', '/pricing', '/templates', '/cover-letter-examples', '/cover-letter-examples/nurse', '/ai-cv-maker', '/tools', null, undefined])(
    'treats %j as marketing',
    (path) => {
      expect(isAppRoute(path)).toBe(false);
    }
  );
});

describe('safe session storage', () => {
  afterEach(() => jest.restoreAllMocks());

  it('reads and writes when storage works', () => {
    safeSessionSet('k', 'v');
    expect(safeSessionGet('k')).toBe('v');
  });

  // Regression: with site data blocked the browser throws on access; an
  // unguarded read inside a root-layout effect took the whole page down.
  it('behaves like an empty store when the browser blocks storage', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new DOMException('blocked', 'SecurityError');
    });
    jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('blocked', 'SecurityError');
    });
    expect(safeSessionGet('k2')).toBeNull();
    expect(() => safeSessionSet('k2', 'v')).not.toThrow();
  });
});

describe('getCashfreeEnvironment', () => {
  const original = process.env;
  afterEach(() => {
    process.env = original;
  });

  function withEnv(values: Record<string, string | undefined>): void {
    process.env = { ...original, CASHFREE_ENV: undefined, CASHFREE_ENVIRONMENT: undefined, ...values };
  }

  it('defaults to production', () => {
    withEnv({});
    expect(getCashfreeEnvironment()).toBe('production');
  });

  // Regression: order creation and payment verification read
  // CASHFREE_ENVIRONMENT while everything else read CASHFREE_ENV, so setting
  // one name split the app across two Cashfree environments.
  it('honours either variable name', () => {
    withEnv({ CASHFREE_ENV: 'sandbox' });
    expect(getCashfreeEnvironment()).toBe('sandbox');
    withEnv({ CASHFREE_ENVIRONMENT: 'Sandbox' });
    expect(getCashfreeEnvironment()).toBe('sandbox');
    withEnv({ CASHFREE_ENV: 'production', CASHFREE_ENVIRONMENT: 'sandbox' });
    expect(getCashfreeEnvironment()).toBe('production');
  });
});
