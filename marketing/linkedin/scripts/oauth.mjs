#!/usr/bin/env node
// One-time helper, run on your own computer (it opens a browser login):
//
//   LINKEDIN_CLIENT_ID=… LINKEDIN_CLIENT_SECRET=… node marketing/linkedin/scripts/oauth.mjs
//
// 1. In the LinkedIn developer portal → your app → Auth, add the redirect URL
//    http://localhost:8765/callback
// 2. Run this, open the printed URL, sign in as a Super/Content admin of the
//    CV Prime page and approve.
// 3. Copy the printed tokens into GitHub → Settings → Secrets and variables → Actions.
//
// Nothing is written to disk.

import { randomBytes } from 'node:crypto';
import { createServer } from 'node:http';

const clientId = process.env.LINKEDIN_CLIENT_ID;
const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;
if (!clientId || !clientSecret) {
  console.error('Set LINKEDIN_CLIENT_ID and LINKEDIN_CLIENT_SECRET in the environment first.');
  process.exit(2);
}

const PORT = 8765;
const redirectUri = `http://localhost:${PORT}/callback`;
const scopes = process.env.LINKEDIN_SCOPES ?? 'w_organization_social r_organization_social rw_organization_admin';
const state = randomBytes(16).toString('hex');

const authUrl = new URL('https://www.linkedin.com/oauth/v2/authorization');
authUrl.search = new URLSearchParams({
  response_type: 'code',
  client_id: clientId,
  redirect_uri: redirectUri,
  state,
  scope: scopes,
}).toString();

const server = createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', redirectUri);
  if (url.pathname !== '/callback') {
    res.writeHead(404).end();
    return;
  }
  if (url.searchParams.get('state') !== state) {
    res.writeHead(400).end('State mismatch — start again.');
    return;
  }
  const error = url.searchParams.get('error');
  if (error) {
    res.writeHead(400).end(`LinkedIn returned ${error}: ${url.searchParams.get('error_description')}`);
    console.error(error, url.searchParams.get('error_description'));
    server.close();
    return;
  }

  const tokenRes = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: url.searchParams.get('code') ?? '',
      redirect_uri: redirectUri,
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });
  const body = await tokenRes.json();
  if (!tokenRes.ok) {
    res.writeHead(500).end('Token exchange failed — see terminal.');
    console.error(body);
    server.close();
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' }).end('Done. You can close this tab and return to the terminal.');
  const days = (s) => Math.round(s / 86400);
  console.log('\nAdd these as GitHub Actions secrets:\n');
  console.log(`LINKEDIN_ACCESS_TOKEN  (expires in ~${days(body.expires_in)} days)\n${body.access_token}\n`);
  if (body.refresh_token) {
    console.log(`LINKEDIN_REFRESH_TOKEN (expires in ~${days(body.refresh_token_expires_in)} days — preferred, the workflow refreshes automatically)\n${body.refresh_token}\n`);
  } else {
    console.log('No refresh token issued: re-run this helper before the access token expires.\n');
  }
  console.log(`Granted scopes: ${body.scope}`);
  server.close();
});

server.listen(PORT, () => {
  console.log(`Open this URL and approve as a CV Prime page admin:\n\n${authUrl}\n`);
});
