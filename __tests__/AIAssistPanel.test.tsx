import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { AIAssistPanel } from '@/components/editor/AIAssistPanel';
import { useCVStore } from '@/store/cvStore';
import { createDefaultCVData } from '@/lib/cv';

// Regression coverage: "Apply this bullet" targeted a bullet purely by
// experienceId + bulletIndex, captured when "Generate alternatives" was
// clicked. If the user edited that experience's bullets (e.g. removed one,
// shifting indices) while the AI call was in flight or while reading the
// alternatives, clicking Apply would silently overwrite whatever now sits
// at that stale index — a different, unrelated bullet. It must instead
// confirm the targeted bullet's text hasn't changed before applying.

jest.mock(
  '@/components/payments/UpgradeModal',
  () => ({ UpgradeModal: () => <button type="button">Upgrade now</button> }),
  { virtual: true },
);

jest.mock('@/lib/clientAnalytics', () => ({ captureClientEvent: jest.fn() }), { virtual: true });

function jsonResponse(payload: unknown, ok = true): Response {
  return { ok, json: async () => payload } as Response;
}

function cvWithOneBullet(bullet: string) {
  const data = createDefaultCVData();
  return {
    ...data,
    experience: [
      {
        id: 'exp-1',
        company: 'Acme',
        role: 'Engineer',
        startDate: '2020-01',
        endDate: '',
        current: true,
        bullets: [bullet],
      },
    ],
  };
}

describe('AIAssistPanel handleApply', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    jest.restoreAllMocks();
  });

  it('applies the rewritten bullet normally when nothing changed while generating', async () => {
    useCVStore.setState({
      cvId: 'cv-1',
      data: cvWithOneBullet('Worked on backend stuff'),
      templateId: 'classic',
      isDirty: false,
      lastSaved: null,
    });

    global.fetch = jest.fn(async () =>
      jsonResponse({ alternatives: ['Shipped backend services used by 10k users'] }),
    ) as unknown as jest.MockedFunction<typeof fetch>;

    render(<AIAssistPanel plan="pro" />);
    fireEvent.click(screen.getByRole('button', { name: 'Generate alternatives' }));
    await waitFor(() => screen.getByText('Shipped backend services used by 10k users'));

    fireEvent.click(screen.getByRole('button', { name: 'Apply this bullet' }));

    expect(useCVStore.getState().data.experience[0]?.bullets[0]).toBe(
      'Shipped backend services used by 10k users',
    );
  });

  it('refuses to apply and warns instead of overwriting a different bullet that now sits at the same index', async () => {
    useCVStore.setState({
      cvId: 'cv-2',
      data: cvWithOneBullet('Worked on backend stuff'),
      templateId: 'classic',
      isDirty: false,
      lastSaved: null,
    });

    let resolveGenerate: ((value: Response) => void) | null = null;
    global.fetch = jest.fn(
      () =>
        new Promise<Response>((resolve) => {
          resolveGenerate = resolve;
        }),
    ) as unknown as jest.MockedFunction<typeof fetch>;

    render(<AIAssistPanel plan="pro" />);
    fireEvent.click(screen.getByRole('button', { name: 'Generate alternatives' }));
    await waitFor(() => screen.getByText('Writing...'));

    // The user edits that same bullet directly while the AI call is still
    // pending — same experienceId + bulletIndex, different content.
    act(() => {
      useCVStore.setState({ data: cvWithOneBullet('Hand-edited while AI was thinking') });
    });

    await act(async () => {
      resolveGenerate?.(jsonResponse({ alternatives: ['Shipped backend services used by 10k users'] }));
      await Promise.resolve();
    });
    await waitFor(() => screen.getByText('Shipped backend services used by 10k users'));

    fireEvent.click(screen.getByRole('button', { name: 'Apply this bullet' }));

    expect(
      screen.getByText(/This bullet changed since these alternatives were generated/i),
    ).toBeInTheDocument();
    // The user's own hand-edit must survive untouched.
    expect(useCVStore.getState().data.experience[0]?.bullets[0]).toBe(
      'Hand-edited while AI was thinking',
    );
  });
});
