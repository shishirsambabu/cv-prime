/**
 * @jest-environment node
 */

// The cover letter page offered an "Editable draft" with no way to save it.
// This pins the save route: who may write, what is accepted, and that an
// update matching no row is not reported as saved.
//
// Relative paths, not the `@/...` alias: see cvRouteErrorHandling.test.ts.
export {};

const getUser = jest.fn();
const update = jest.fn();
const eq = jest.fn();
let updatedRows: Array<{ id: string }> = [];
let updateError: { message: string } | null = null;

jest.mock('../lib/rateLimit', () => ({
  rateLimit: jest.fn(async () => false),
}));

jest.mock('../lib/supabase/server', () => ({
  createClient: () => ({
    auth: { getUser },
    from: () => {
      const chain = {
        update: (values: unknown) => {
          update(values);
          return chain;
        },
        eq: (column: string, value: string) => {
          eq(column, value);
          return chain;
        },
        select: async () => ({ data: updatedRows, error: updateError }),
      };
      return chain;
    },
  }),
}));

const USER_ID = '11111111-1111-4111-8111-111111111111';
const LETTER_ID = '44444444-4444-4444-8444-444444444444';

function patch(body: unknown, id = LETTER_ID): Promise<Response> {
  return import('../app/api/cover-letter/[id]/route').then(({ PATCH }) =>
    PATCH(
      new Request(`http://localhost/api/cover-letter/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: typeof body === 'string' ? body : JSON.stringify(body),
      }),
      { params: { id } },
    ),
  );
}

beforeEach(() => {
  jest.clearAllMocks();
  updatedRows = [{ id: LETTER_ID }];
  updateError = null;
  getUser.mockResolvedValue({ data: { user: { id: USER_ID } } });
});

describe('PATCH /api/cover-letter/[id]', () => {
  it('saves the content, scoped to the signed-in user', async () => {
    const response = await patch({ content: 'Dear team,\n\nUpdated.' });

    expect(response.status).toBe(200);
    expect(update).toHaveBeenCalledWith({ content: 'Dear team,\n\nUpdated.' });
    expect(eq).toHaveBeenCalledWith('id', LETTER_ID);
    expect(eq).toHaveBeenCalledWith('user_id', USER_ID);
  });

  it('accepts an emptied draft', async () => {
    expect((await patch({ content: '' })).status).toBe(200);
  });

  it('rejects a signed-out caller before touching the database', async () => {
    getUser.mockResolvedValue({ data: { user: null } });

    expect((await patch({ content: 'x' })).status).toBe(401);
    expect(update).not.toHaveBeenCalled();
  });

  it.each([{}, { content: 42 }, { content: 'x'.repeat(20_001) }, 'not json'])(
    'rejects the malformed body %p with 400',
    async (body) => {
      expect((await patch(body)).status).toBe(400);
      expect(update).not.toHaveBeenCalled();
    },
  );

  it('rejects a non-UUID id with 400', async () => {
    expect((await patch({ content: 'x' }, 'not-a-uuid')).status).toBe(400);
    expect(update).not.toHaveBeenCalled();
  });

  it('answers 404, not ok, when no row was updated', async () => {
    updatedRows = [];

    expect((await patch({ content: 'x' })).status).toBe(404);
  });

  it('answers 500 without leaking the database message', async () => {
    updateError = { message: 'relation "cover_letters" violates policy xyz' };

    const response = await patch({ content: 'x' });

    expect(response.status).toBe(500);
    expect(JSON.stringify(await response.json())).not.toContain('policy');
  });
});
