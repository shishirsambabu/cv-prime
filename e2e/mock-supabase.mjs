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

const patches = [];

function send(res, status, body, headers = {}) {
  const payload = body === undefined ? '' : JSON.stringify(body);
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
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
  if (path === '/auth/v1/token') {
    return send(res, 200, {
      access_token: 'mock-access-token',
      token_type: 'bearer',
      expires_in: 3600,
      expires_at: Math.floor(Date.now() / 1000) + 3600,
      refresh_token: 'mock-refresh-token',
      user: USER,
    });
  }
  if (path === '/auth/v1/logout') return send(res, 204, undefined);

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

  if (path === '/__patches') return send(res, 200, patches);
  if (path === '/__reset') {
    patches.length = 0;
    return send(res, 200, { ok: true });
  }

  // Anything else: empty list so unexpected reads degrade instead of throwing.
  return send(res, 200, (req.headers.accept || '').includes('pgrst.object') ? null : []);
});

server.listen(PORT, '127.0.0.1', () => {
  process.stdout.write(`mock-supabase listening on ${PORT} (user=${USER_ID} cv=${CV_ID})\n`);
});
