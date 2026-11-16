/**
 * @jest-environment node
 */

// A person with two logins on one email (password + Google) deleted their
// OpenRouter key and saw "No key connected". On the next Settings or AI page
// load the key was copied back from the other account, and AI calls kept
// spending on a key they had removed.
//
// Relative paths, not the `@/...` alias: see cvRouteErrorHandling.test.ts.
export {};

const listUsers = jest.fn();
const getUserById = jest.fn();
const upsert = jest.fn(async () => ({ error: null }));
let ownRow: { id: string; openrouter_key_hint: string | null; openrouter_key_enc: string | null } | null;

jest.mock('../lib/supabase/admin', () => ({
  createAdminClient: () => ({
    auth: { admin: { listUsers, getUserById } },
    from: () => ({
      select: () => ({
        eq: () => ({ maybeSingle: async () => ({ data: ownRow, error: null }) }),
        in: async () => ({
          data: [{ id: 'sibling', openrouter_key_hint: 'sk-…abcd', openrouter_key_enc: 'encrypted' }],
          error: null,
        }),
      }),
      upsert,
    }),
  }),
}));

import { KEY_REMOVED_HINT, importSiblingOpenRouterKey, visibleKeyHint } from '../lib/importSiblingKey';

beforeEach(() => {
  jest.clearAllMocks();
  getUserById.mockResolvedValue({ data: { user: { email: 'a@example.com' } } });
  listUsers.mockResolvedValue({
    data: { users: [{ id: 'me', email: 'a@example.com' }, { id: 'sibling', email: 'A@example.com' }] },
    error: null,
  });
});

describe('importSiblingOpenRouterKey', () => {
  it('copies the sibling key onto an account that never had one', async () => {
    ownRow = { id: 'me', openrouter_key_hint: null, openrouter_key_enc: null };
    await importSiblingOpenRouterKey('me');
    expect(upsert).toHaveBeenCalledTimes(1);
  });

  it('does not bring back a key the user deleted', async () => {
    ownRow = { id: 'me', openrouter_key_hint: KEY_REMOVED_HINT, openrouter_key_enc: null };
    await importSiblingOpenRouterKey('me');
    expect(upsert).not.toHaveBeenCalled();
    expect(listUsers).not.toHaveBeenCalled();
  });
});

describe('visibleKeyHint', () => {
  it('never shows the removal marker as a key hint', () => {
    expect(visibleKeyHint(KEY_REMOVED_HINT)).toBeNull();
    expect(visibleKeyHint('sk-…abcd')).toBe('sk-…abcd');
    expect(visibleKeyHint(null)).toBeNull();
  });
});
