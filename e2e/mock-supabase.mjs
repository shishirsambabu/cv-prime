// Minimal PostgREST/GoTrue stand-in so the real Next app can be driven in a
// browser without a live Supabase project.
import http from 'node:http';

const PORT = Number(process.env.MOCK_PORT || 54321);
const USER_ID = '11111111-1111-4111-8111-111111111111';
const CV_ID = '22222222-2222-4222-8222-222222222222';

const USER = {
  id: USER_ID,
  aud: 'authenticated',
  role: 'authenticated',
  email: 'qa@cv-prime.test',
  email_confirmed_at: '2024-01-01T00:00:00Z',
  phone: '',
  confirmed_at: '2024-01-01T00:00:00Z',
  last_sign_in_at: '2024-01-01T00:00:00Z',
  app_metadata: { provider: 'email', providers: ['email'] },
  user_metadata: {},
  identities: [],
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-01-01T00:00:00Z',
  is_anonymous: false,
};

let cvRow = {
  id: CV_ID,
  user_id: USER_ID,
  title: 'QA Test CV',
  template_id: 'classic',
  data: {
    personal: {
      name: 'Asha Rao',
      title: 'Senior Backend Engineer',
      email: 'asha@example.com',
      phone: '+91 90000 00000',
      location: 'Bengaluru, India',
      linkedin: '',
      website: '',
      summary: 'Backend engineer with eight years building payment systems at scale.',
    },
    experience: [
      {
        id: 'exp-1',
        company: 'Paytm',
        role: 'Senior Engineer',
        startDate: '2020-01',
        endDate: '2024-01',
        current: false,
        bullets: ['Built a ledger service handling 4k TPS.'],
      },
    ],
    education: [
      {
        id: 'edu-1',
        institution: 'IIT Bombay',
        degree: 'B.Tech',
        field: 'Computer Science',
        startDate: '2012',
        endDate: '2016',
        gpa: '8.7',
      },
    ],
    skills: { technical: ['Go', 'Postgres'], soft: ['Mentoring'], languages: ['English'] },
    projects: [],
    certifications: [],
    awards: [],
    sectionOrder: [
      'personal',
      'experience',
      'education',
      'skills',
      'projects',
      'certifications',
      'awards',
    ],
  },
  ats_score: null,
  ats_score_history: [],
  is_public: false,
  last_edited: '2024-01-01T00:00:00Z',
  created_at: '2024-01-01T00:00:00Z',
};

// Pristine copy, so a spec can start from a known CV regardless of what an
// earlier spec in the same run saved (`/__reset?seed=1`).
const SEED_ROW = structuredClone(cvRow);

const COVER_LETTER_SEED = {
  id: '44444444-4444-4444-8444-444444444444',
  user_id: USER_ID,
  cv_id: CV_ID,
  title: 'Cover letter - QA',
  content: 'Dear Hiring Manager,\n\nI am writing to apply for the Senior Backend Engineer role.',
  job_description: 'We are hiring a Senior Backend Engineer to own our payments ledger.',
  created_at: '2024-01-01T00:00:00Z',
};
let coverLetterRow = structuredClone(COVER_LETTER_SEED);
const coverLetterPatches = [];
let coverLetterSaveFails = false;

const patches = [];
// Every GoTrue write the app has made, in order (`/__auth_calls`).
const authCalls = [];
let signupReturnsSession = false;

function session() {
  return {
    access_token: 'mock-access-token',
    token_type: 'bearer',
    expires_in: 3600,
    expires_at: Math.floor(Date.now() / 1000) + 3600,
    refresh_token: 'mock-refresh-token',
    user: USER,
  };
}

function send(res, status, body, headers = {}) {
  const payload = body === undefined ? '' : JSON.stringify(body);
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    ...headers,
  });
  res.end(payload);
}

function readBody(req) {
  return new Promise((resolve) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
    });
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : null);
      } catch {
        resolve(null);
      }
    });
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${PORT}`);
  const path = url.pathname;

  if (req.method === 'OPTIONS') return send(res, 204, undefined);

  // --- GoTrue ---
  if (path === '/auth/v1/user' && req.method === 'GET') return send(res, 200, USER);
  if (path === '/auth/v1/user' && req.method === 'PUT') {
    authCalls.push({ endpoint: 'update-user', body: await readBody(req) });
    return send(res, 200, USER);
  }
  if (path === '/auth/v1/token') {
    const body = await readBody(req);
    const grant = url.searchParams.get('grant_type');
    authCalls.push({ endpoint: `token:${grant}`, body });
    // Any password works except this one, so a spec can exercise the
    // rejected-credentials path.
    if (grant === 'password' && body?.password === 'wrong-password') {
      return send(res, 400, {
        code: 400,
        error_code: 'invalid_credentials',
        msg: 'Invalid login credentials',
      });
    }
    return send(res, 200, session());
  }
  if (path === '/auth/v1/signup') {
    authCalls.push({ endpoint: 'signup', body: await readBody(req) });
    // Hosted Supabase projects require email confirmation by default: signUp
    // answers with the bare user and NO session. `?signup=session` switches to
    // the confirmation-disabled shape.
    return send(res, 200, signupReturnsSession ? session() : { ...USER, email_confirmed_at: null, confirmed_at: null });
  }
  if (path === '/auth/v1/otp' || path === '/auth/v1/recover') {
    authCalls.push({ endpoint: path.split('/').pop(), body: await readBody(req) });
    return send(res, 200, {});
  }
  if (path === '/auth/v1/logout') {
    authCalls.push({ endpoint: 'logout', body: null });
    return send(res, 204, undefined);
  }
  if (path === '/__auth_calls') return send(res, 200, authCalls);
  if (path === '/__auth_mode') {
    signupReturnsSession = url.searchParams.get('signup') === 'session';
    return send(res, 200, { ok: true });
  }

  // --- PostgREST ---
  if (path === '/rest/v1/rpc/get_my_plan') {
    return send(res, 200, [{ plan: 'free', pdf_exports_used: 0 }]);
  }

  if (path === '/rest/v1/profiles') {
    const row = {
      id: USER_ID,
      plan: 'free',
      pdf_exports_used: 0,
      cv_creations_used: 0,
      openrouter_key_hint: null,
      openrouter_key_enc: null,
      full_name: 'Asha Rao',
    };
    const single = (req.headers.accept || '').includes('pgrst.object');
    return send(res, 200, single ? row : [row]);
  }

  if (path === '/rest/v1/cvs') {
    const single = (req.headers.accept || '').includes('pgrst.object');
    if (req.method === 'GET') {
      return send(res, 200, single ? cvRow : [cvRow]);
    }
    if (req.method === 'PATCH') {
      const body = await readBody(req);
      patches.push({ at: Date.now(), body });
      cvRow = { ...cvRow, ...body };
      return send(res, 200, single ? cvRow : [cvRow]);
    }
  }

  if (path === '/rest/v1/cover_letters') {
    const single = (req.headers.accept || '').includes('pgrst.object');
    if (req.method === 'GET') return send(res, 200, single ? coverLetterRow : [coverLetterRow]);
    if (req.method === 'PATCH') {
      const body = await readBody(req);
      coverLetterPatches.push(body);
      if (coverLetterSaveFails) return send(res, 500, { message: 'mock failure' });
      coverLetterRow = { ...coverLetterRow, ...body };
      return send(res, 200, [{ id: coverLetterRow.id }]);
    }
  }
  if (path === '/__cover_letter') {
    if (url.searchParams.has('fail')) coverLetterSaveFails = url.searchParams.get('fail') === '1';
    return send(res, 200, { row: coverLetterRow, patches: coverLetterPatches });
  }

  if (path === '/__patches') return send(res, 200, patches);
  if (path === '/__set_template') {
    // Lets a spec seed the CV onto a given template, e.g. a Pro template on
    // a free-plan account (a user downgraded after picking it).
    cvRow = { ...cvRow, template_id: url.searchParams.get('id') || 'classic' };
    return send(res, 200, { ok: true });
  }
  if (path === '/__reset') {
    patches.length = 0;
    authCalls.length = 0;
    signupReturnsSession = false;
    coverLetterPatches.length = 0;
    coverLetterSaveFails = false;
    if (url.searchParams.get('seed')) coverLetterRow = structuredClone(COVER_LETTER_SEED);
    if (url.searchParams.get('seed')) cvRow = structuredClone(SEED_ROW);
    return send(res, 200, { ok: true });
  }

  // Anything else: empty list so unexpected reads degrade instead of throwing.
  return send(res, 200, (req.headers.accept || '').includes('pgrst.object') ? null : []);
});

server.listen(PORT, '127.0.0.1', () => {
  process.stdout.write(`mock-supabase listening on ${PORT} (user=${USER_ID} cv=${CV_ID})\n`);
});
