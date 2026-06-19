import { fireEvent, render, screen, waitFor } from '@testing-library/react';

jest.mock(
  '@/components/payments/UpgradeModal',
  () => ({
    UpgradeModal: () => <button type="button">Upgrade now</button>,
  }),
  { virtual: true },
);

jest.mock(
  '@/lib/clientAnalytics',
  () => ({
    captureClientEvent: jest.fn(),
  }),
  { virtual: true },
);

jest.mock(
  '@/store/cvStore',
  () => ({
    useCVStore: (selector: (state: { cvId: string | null }) => string | null) =>
      selector({ cvId: null }),
  }),
  { virtual: true },
);

import { ExportPDFButton } from '@/components/editor/ExportPDFButton';

describe('ExportPDFButton', () => {
  const originalFetch = global.fetch;
  const cvId = '22222222-2222-4222-8222-222222222222';

  afterEach(() => {
    global.fetch = originalFetch;
    jest.restoreAllMocks();
  });

  it('loads the signed print URL in the window opened by the click', async () => {
    const popup = {
      close: jest.fn(),
      location: { href: '' },
    } as unknown as Window;
    jest.spyOn(window, 'open').mockReturnValue(popup);
    global.fetch = jest.fn(async () => ({
      ok: true,
      json: async () => ({ token: 'v1.payload.signature' }),
    })) as jest.MockedFunction<typeof fetch>;

    render(<ExportPDFButton cvId={cvId} />);
    fireEvent.click(screen.getByRole('button', { name: 'Export PDF' }));

    await waitFor(() => {
      expect(popup.location.href).toBe(
        `/print/${cvId}?token=${encodeURIComponent('v1.payload.signature')}`,
      );
    });
  });

  it('closes the pending window and shows the API error', async () => {
    const popup = {
      close: jest.fn(),
      location: { href: '' },
    } as unknown as Window;
    jest.spyOn(window, 'open').mockReturnValue(popup);
    global.fetch = jest.fn(async () => ({
      ok: false,
      json: async () => ({
        error: 'EXPORT_UNAVAILABLE',
        message: 'PDF export is temporarily unavailable. Please try again in a moment.',
      }),
    })) as jest.MockedFunction<typeof fetch>;

    render(<ExportPDFButton cvId={cvId} />);
    fireEvent.click(screen.getByRole('button', { name: 'Export PDF' }));

    expect(
      await screen.findByText('PDF export is temporarily unavailable. Please try again in a moment.'),
    ).toBeInTheDocument();
    expect(popup.close).toHaveBeenCalled();
  });

  it('saves the selected generated template before requesting an export', async () => {
    const popup = {
      close: jest.fn(),
      location: { href: '' },
    } as unknown as Window;
    jest.spyOn(window, 'open').mockReturnValue(popup);
    const fetchMock = jest
      .fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>()
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ ok: true }),
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ token: 'v1.payload.signature' }),
      } as Response);
    global.fetch = fetchMock;

    render(<ExportPDFButton cvId={cvId} templateId="minimal" />);
    fireEvent.click(screen.getByRole('button', { name: 'Export PDF' }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenNthCalledWith(
        1,
        `/api/cvs/${cvId}`,
        expect.objectContaining({
          method: 'PATCH',
          body: JSON.stringify({ templateId: 'minimal' }),
        }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        2,
        '/api/export-pdf/check',
        expect.objectContaining({ method: 'POST' }),
      );
    });
  });
});
