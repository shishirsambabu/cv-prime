/**
 * Browser-level regression coverage for getting into (and out of) the app.
 *
 * Every defect pinned here left a real user unable to reach their workspace
 * while lint, tsc, jest and the build all stayed green:
 *
 * 1. Password reset. The emailed link signs the user in (recovery session) and
 *    sends them to /login?mode=new-password. The middleware bounced every
 *    signed-in visitor away from /login, so the "choose a new password" form
 *    was never shown - the user landed on the dashboard with the password they
 *    had forgotten still in place.
 * 2. Magic link. The button validated the whole sign-in form, so it refused to
 *    send a link until a password was typed - the one thing a magic-link user
 *    does not have.
 * 3. Sign-up with email confirmation on (the hosted Supabase default). signUp
 *    succeeds without a session; the page navigated to the workspace anyway
 *    and the middleware dumped the new user on the sign-in screen with no word
 *    about the confirmation email.
 * 4. A failed/expired email link came back as /login?error=... and the page
 *    showed nothing.
 *
 * Run it with `npm run test:e2e` (see e2e/README.md).
 */

import { createRequire } from 'node:module';

const { chromium } = createRequire(import.meta.url)('playwright');

const BASE = process.env.E2E_BASE_URL ?? 'http://127.0.0.1:3002';
const MOCK = process.env.E2E_MOCK_URL ?? 'http://127.0.0.1:54321';
const USER_ID = '11111111-1111-4111-8111-111111111111';

const results = [];
function check(name, pass, detail = '') {
  results.push({ name, pass, detail });
  process.stdout.write(`${pass ? 'ok  ' : 'FAIL'} ${name}${pass || !detail ? '' : `\n     ${detail}`}\n`);
}

function sessionCookie(host) {
  const session = {
    access_token: 'mock-access-token',
    token_type: 'bearer',
    expires_in: 3600,
    expires_at: Math.floor(Date.now() / 1000) + 3600,
    refresh_token: 'mock-refresh-token',
    user: {
      id: USER_ID,
      aud: 'authenticated',
      role: 'authenticated',
      email: 'qa@cv-prime.test',
      app_metadata: { provider: 'email', providers: ['email'] },
      user_metadata: {},
      created_at: '2024-01-01T00:00:00Z',
    },
  };
  return {
    name: `sb-${new URL(MOCK).hostname.split('.')[0]}-auth-token`,
    value: 'base64-' + Buffer.from(JSON.stringify(session), 'utf8').toString('base64url'),
    domain: host,
    path: '/',
    httpOnly: false,
    secure: false,
    sameSite: 'Lax',
  };
}

async function authCalls() {
  return (await fetch(`${MOCK}/__auth_calls`)).json();
}

async function freshContext(browser, { signedIn = false } = {}) {
  await fetch(`${MOCK}/__reset?seed=1`);
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  if (signedIn) await context.addCookies([sessionCookie(new URL(BASE).hostname)]);
  const page = await context.newPage();
  page.setDefaultTimeout(30_000);
  return { context, page };
}

const path = (page) => new URL(page.url()).pathname;

const browser = await chromium.launch();

try {
  // --- protected routes -----------------------------------------------------
  {
    const { context, page } = await freshContext(browser);
    await page.goto(`${BASE}/dashboard`);
    const url = new URL(page.url());
    check(
      'signed-out visit to /dashboard goes to /login and remembers where to return',
      url.pathname === '/login' && url.searchParams.get('next') === '/dashboard',
      page.url(),
    );
    await page.goto(`${BASE}/editor/22222222-2222-4222-8222-222222222222`);
    check('signed-out visit to the editor goes to /login', path(page) === '/login', page.url());
    await context.close();
  }

  // --- password sign-in -----------------------------------------------------
  {
    const { context, page } = await freshContext(browser);
    await page.goto(`${BASE}/login`);
    const email = page.getByLabel('Email');
    const password = page.getByLabel('Password');
    await email.click();
    await page.keyboard.type('qa@cv-prime.test', { delay: 5 });
    await password.click();
    await page.keyboard.type('wrong-password', { delay: 5 });
    check(
      'sign-in fields accept typing',
      (await email.inputValue()) === 'qa@cv-prime.test' && (await password.inputValue()) === 'wrong-password',
    );

    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.getByText('Invalid login credentials').waitFor();
    check('wrong password shows the error and stays on /login', path(page) === '/login');
    check(
      'sign-in button is usable again after a rejected attempt',
      await page.getByRole('button', { name: 'Sign in', exact: true }).isEnabled(),
    );

    await password.fill('correct-horse');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.waitForURL((url) => url.pathname === '/dashboard');
    check('correct password lands on the dashboard', path(page) === '/dashboard');

    await page.goto(`${BASE}/login`);
    check('a signed-in visit to /login is sent on to the dashboard', path(page) === '/dashboard', page.url());
    await context.close();
  }

  // --- magic link -----------------------------------------------------------
  {
    const { context, page } = await freshContext(browser);
    await page.goto(`${BASE}/login`);
    await page.getByLabel('Email').fill('qa@cv-prime.test');
    await page.getByRole('button', { name: 'Send magic link' }).click();
    const sent = await page
      .getByText('Magic link sent')
      .waitFor({ timeout: 8_000 })
      .then(() => true)
      .catch(() => false);
    const otp = (await authCalls()).filter((call) => call.endpoint === 'otp');
    check(
      'magic link is sent with only an email typed (no password needed)',
      sent && otp.length === 1 && otp[0].body?.email === 'qa@cv-prime.test',
      `confirmation shown=${sent}, otp calls=${otp.length}`,
    );

    await page.getByLabel('Email').fill('');
    await page.getByRole('button', { name: 'Send magic link' }).click();
    await page.getByText('Enter a valid email address.').waitFor();
    check(
      'magic link without an email asks for the email and sends nothing',
      (await authCalls()).filter((call) => call.endpoint === 'otp').length === 1,
    );
    await context.close();
  }

  // --- forgot password: request the email -----------------------------------
  {
    const { context, page } = await freshContext(browser);
    await page.goto(`${BASE}/login`);
    await page.getByRole('button', { name: 'Forgot password?' }).click();
    await page.getByRole('heading', { name: 'Reset your password' }).waitFor();
    await page.getByLabel('Email').fill('qa@cv-prime.test');
    await page.getByRole('button', { name: 'Send reset link' }).click();
    await page.getByText('Password reset email sent.').waitFor();
    const recover = (await authCalls()).filter((call) => call.endpoint === 'recover');
    check('forgot password sends the reset email', recover.length === 1 && recover[0].body?.email === 'qa@cv-prime.test');
    await context.close();
  }

  // --- forgot password: the emailed link ------------------------------------
  {
    // /auth/callback has already exchanged the recovery code, so the user
    // arrives here signed in.
    const { context, page } = await freshContext(browser, { signedIn: true });
    await page.goto(`${BASE}/login?mode=new-password&next=%2Fdashboard`);
    const formShown = await page
      .getByRole('heading', { name: 'Choose a new password' })
      .waitFor({ timeout: 8_000 })
      .then(() => true)
      .catch(() => false);
    check('reset link shows the "Choose a new password" form', formShown, `ended on ${page.url()}`);

    if (formShown) {
      const field = page.getByLabel('New password');
      await field.click();
      await page.keyboard.type('short', { delay: 5 });
      await page.getByRole('button', { name: 'Save new password' }).click();
      await page.getByText('Use at least 8 characters.').waitFor();
      check(
        'a too-short new password is rejected without calling the server',
        (await authCalls()).filter((call) => call.endpoint === 'update-user').length === 0,
      );

      await field.fill('a-brand-new-password');
      await page.getByRole('button', { name: 'Save new password' }).click();
      await page.waitForURL((url) => url.pathname === '/dashboard');
      const updates = (await authCalls()).filter((call) => call.endpoint === 'update-user');
      check(
        'the new password is saved and the user continues to the dashboard',
        updates.length === 1 && updates[0].body?.password === 'a-brand-new-password',
        JSON.stringify(updates),
      );
    } else {
      check('a too-short new password is rejected without calling the server', false, 'form never shown');
      check('the new password is saved and the user continues to the dashboard', false, 'form never shown');
    }
    await context.close();
  }

  // --- failed email link ----------------------------------------------------
  {
    const { context, page } = await freshContext(browser);
    await page.goto(`${BASE}/auth/callback`);
    const shown = await page
      .getByRole('alert')
      .filter({ hasText: /link/i })
      .waitFor({ timeout: 8_000 })
      .then(() => true)
      .catch(() => false);
    check('a broken sign-in link explains itself on /login', path(page) === '/login' && shown, page.url());

    await page.goto(`${BASE}/login?error=${encodeURIComponent('Call +1 555 0100 to unlock your account')}`);
    await page.getByLabel('Email').waitFor();
    check(
      'text from the error parameter is never echoed onto the page',
      !(await page.locator('body').innerText()).includes('555 0100'),
    );
    await context.close();
  }

  // --- sign-up --------------------------------------------------------------
  {
    const { context, page } = await freshContext(browser);
    await page.goto(`${BASE}/signup?next=%2Fai-cv`);
    await page.getByLabel('Full name').click();
    await page.keyboard.type('Asha Rao', { delay: 5 });
    await page.getByLabel('Email').click();
    await page.keyboard.type('new@cv-prime.test', { delay: 5 });
    await page.getByLabel('Password').click();
    await page.keyboard.type('a-long-password', { delay: 5 });
    check(
      'sign-up fields accept typing',
      (await page.getByLabel('Full name').inputValue()) === 'Asha Rao' &&
        (await page.getByLabel('Email').inputValue()) === 'new@cv-prime.test' &&
        (await page.getByLabel('Password').inputValue()) === 'a-long-password',
    );

    await page.getByRole('button', { name: 'Create account' }).click();
    const told = await page
      .getByText(/confirm/i)
      .first()
      .waitFor({ timeout: 8_000 })
      .then(() => true)
      .catch(() => false);
    check(
      'sign-up that needs email confirmation says so instead of dumping the user on /login',
      told && path(page) === '/signup',
      `message shown=${told}, ended on ${page.url()}`,
    );
    const signups = (await authCalls()).filter((call) => call.endpoint === 'signup');
    check('sign-up sent the account details once', signups.length === 1 && signups[0].body?.email === 'new@cv-prime.test');
    await context.close();
  }
  {
    const { context, page } = await freshContext(browser);
    await fetch(`${MOCK}/__auth_mode?signup=session`);
    await page.goto(`${BASE}/signup?next=%2Fdashboard`);
    await page.getByLabel('Full name').fill('Asha Rao');
    await page.getByLabel('Email').fill('new@cv-prime.test');
    await page.getByLabel('Password').fill('a-long-password');
    await page.getByRole('button', { name: 'Create account' }).click();
    await page.waitForURL((url) => url.pathname === '/dashboard');
    check('sign-up that returns a session goes straight into the workspace', path(page) === '/dashboard');
    await context.close();
  }

  // --- sign-out -------------------------------------------------------------
  {
    const { context, page } = await freshContext(browser, { signedIn: true });
    await page.goto(`${BASE}/dashboard`);
    await page.getByRole('button', { name: /sign out|log out/i }).first().click();
    await page.waitForURL((url) => url.pathname === '/login');
    await page.goto(`${BASE}/dashboard`);
    check('after signing out the dashboard is no longer reachable', path(page) === '/login', page.url());
    await context.close();
  }
} finally {
  await browser.close();
}

const failed = results.filter((result) => !result.pass);
process.stdout.write(`\n${results.length - failed.length}/${results.length} auth-flow checks passed\n`);
process.exit(failed.length === 0 ? 0 : 1);
