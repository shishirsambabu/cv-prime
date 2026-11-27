/**
 * @jest-environment node
 */
// Regression coverage for two silent data defects:
// - POST /api/cvs/{id}/clone stored "<title> copy" past the 80-character cap
//   that create and rename enforce, so the dashboard rename then refused the
//   clone's own title, and every clone of a clone grew it by 5 characters.
// - POST /api/newsletter/subscribe answered { ok: true } (and sent a welcome
//   email) when the profile update matched no row and stored nothing.
import { defaultCloneTitle, MAX_CV_TITLE_LENGTH } from '../lib/cvTitle';

const CV_ID = '11111111-1111-1111-1111-111111111111';
const getUser = jest.fn();
const insertCalled = jest.fn();
const sourceTitle = jest.fn<string, []>(() => 'My CV');

jest.mock('../lib/supabase/server', () => ({
  createClient: () => ({
    auth: { getUser: () => getUser() },
    from: () => ({
      select: () => ({
        eq: () => ({
          eq: () => ({
            single: async () => ({
              data: {
                title: sourceTitle(),
                template_id: 'classic',
                data: {},
                ats_score: null,
                ats_score_history: [],
              },
              error: null,
            }),
          }),
        }),
      }),
      insert: (rows: unknown) => {
        insertCalled(rows);
        return { select: () => ({ single: async () => ({ data: { id: 'new' }, error: null }) }) };
      },
    }),
  }),
}));

const updatedRows = jest.fn<Array<{ id: string }>, []>(() => [{ id: 'u1' }]);
jest.mock('../lib/supabase/admin', () => ({
  createAdminClient: () => ({
    from: () => ({
      update: () => ({
        eq: () => ({ select: async () => ({ data: updatedRows(), error: null }) }),
      }),
    }),
  }),
}));

const sendWelcome = jest.fn().mockResolvedValue(undefined);
jest.mock('../lib/email/lifecycle', () => ({
  sendNewsletterWelcomeEmail: (...args: unknown[]) => sendWelcome(...args),
}));
jest.mock('../lib/rateLimit', () => ({ rateLimit: jest.fn().mockResolvedValue(false) }));

function post(url: string, body: unknown): Request {
  return new Request(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
}

beforeEach(() => {
  getUser.mockResolvedValue({ data: { user: { id: 'user-1' } } });
  insertCalled.mockClear();
  sendWelcome.mockClear();
  updatedRows.mockReturnValue([{ id: 'u1' }]);
});

describe('defaultCloneTitle', () => {
  it('appends " copy" to a short title', () => {
    expect(defaultCloneTitle('Backend CV')).toBe('Backend CV copy');
  });

  it('never exceeds the title cap, even when cloning a clone', () => {
    let title = 'x'.repeat(MAX_CV_TITLE_LENGTH);
    for (let i = 0; i < 4; i += 1) {
      title = defaultCloneTitle(title);
      expect(title.length).toBeLessThanOrEqual(MAX_CV_TITLE_LENGTH);
      expect(title.endsWith(' copy')).toBe(true);
    }
  });

  it('names an untitled source', () => {
    expect(defaultCloneTitle('   ')).toBe('Untitled CV copy');
    expect(defaultCloneTitle(null)).toBe('Untitled CV copy');
  });
});

describe('POST /api/cvs/[cvId]/clone', () => {
  it('stores a default title within the 80-character cap', async () => {
    sourceTitle.mockReturnValue('A'.repeat(80));
    const { POST } = await import('../app/api/cvs/[cvId]/clone/route');
    const res = await POST(post(`http://x/api/cvs/${CV_ID}/clone`, {}), { params: { cvId: CV_ID } });
    expect(res.status).toBe(201);
    const [rows] = insertCalled.mock.calls[0] as [Array<{ title: string }>];
    expect(rows[0]?.title.length).toBeLessThanOrEqual(80);
    expect(rows[0]?.title.endsWith(' copy')).toBe(true);
  });
});

describe('POST /api/newsletter/subscribe', () => {
  it('reports success when the profile was updated', async () => {
    const { POST } = await import('../app/api/newsletter/subscribe/route');
    const res = await POST(post('http://x/api/newsletter/subscribe', {}));
    expect(res.status).toBe(200);
    expect(sendWelcome).toHaveBeenCalledTimes(1);
  });

  it('does not claim a subscription (or send a welcome email) when no row was written', async () => {
    updatedRows.mockReturnValue([]);
    const { POST } = await import('../app/api/newsletter/subscribe/route');
    const res = await POST(post('http://x/api/newsletter/subscribe', {}));
    expect(res.status).toBe(404);
    expect(sendWelcome).not.toHaveBeenCalled();
  });
});
