'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Copy, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CoverLetterEditorProps {
  coverLetterId: string;
  initialContent: string;
}

type SaveState = 'idle' | 'saving' | 'saved' | 'error' | 'expired' | 'missing';

const saveMessages: Record<Exclude<SaveState, 'idle' | 'saving' | 'saved'>, string> = {
  error: 'Could not save your changes. Check your connection and try again.',
  expired: 'Your session has expired. Copy your text, sign in again, then save.',
  missing: 'This cover letter no longer exists, so it cannot be saved. Copy your text to keep it.',
};

/**
 * The cover letter page used to render the draft in a bare, uncontrolled
 * <textarea> under the heading "Editable draft". It was editable, but nothing
 * read the edits back: there was no save and no copy, so every change was
 * discarded on reload or navigation without a word. This component owns the
 * text, saves it, warns before unsaved edits are thrown away, and gives the
 * user a way to take the letter out of the app.
 */
export function CoverLetterEditor({
  coverLetterId,
  initialContent,
}: CoverLetterEditorProps): JSX.Element {
  const [content, setContent] = useState(initialContent);
  const [savedContent, setSavedContent] = useState(initialContent);
  const [saveState, setSaveState] = useState<SaveState>('idle');
  const [copied, setCopied] = useState(false);
  const copiedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isDirty = content !== savedContent;

  useEffect(() => {
    if (!isDirty) {
      return;
    }

    const warn = (event: BeforeUnloadEvent): void => {
      event.preventDefault();
      event.returnValue = '';
    };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [isDirty]);

  useEffect(
    () => () => {
      if (copiedTimer.current) {
        clearTimeout(copiedTimer.current);
      }
    },
    []
  );

  async function handleSave(): Promise<void> {
    // Captured before the request: the user can keep typing while it is in
    // flight, and only what was actually sent may be marked as saved.
    const sent = content;
    setSaveState('saving');

    try {
      const response = await fetch(`/api/cover-letter/${coverLetterId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: sent }),
      });

      if (response.ok) {
        setSavedContent(sent);
        setSaveState('saved');
        return;
      }

      setSaveState(response.status === 401 ? 'expired' : response.status === 404 ? 'missing' : 'error');
    } catch {
      setSaveState('error');
    }
  }

  async function handleCopy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(content);
    } catch {
      // Clipboard API unavailable (insecure context, permission denied):
      // select the text so the user can copy it with the keyboard.
      textareaRef.current?.focus();
      textareaRef.current?.select();
      return;
    }

    setCopied(true);
    if (copiedTimer.current) {
      clearTimeout(copiedTimer.current);
    }
    copiedTimer.current = setTimeout(() => setCopied(false), 2000);
  }

  const status =
    saveState === 'saving'
      ? 'Saving...'
      : isDirty
        ? 'Unsaved changes'
        : saveState === 'saved'
          ? 'Saved'
          : '';

  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <label htmlFor="cover-letter-content" className="font-display text-2xl font-bold">
          Editable draft
        </label>
        <div className="flex flex-wrap items-center gap-2">
          <span role="status" className="text-sm font-semibold text-slate-500">
            {status}
          </span>
          <Button type="button" variant="outline" size="sm" onClick={handleCopy}>
            {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
            {copied ? 'Copied' : 'Copy text'}
          </Button>
          <Button
            type="button"
            size="sm"
            onClick={handleSave}
            disabled={!isDirty || saveState === 'saving'}
          >
            <Save className="mr-2 h-4 w-4" />
            Save changes
          </Button>
        </div>
      </div>

      {saveState === 'error' || saveState === 'expired' || saveState === 'missing' ? (
        <p
          role="alert"
          className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
        >
          {saveMessages[saveState]}
        </p>
      ) : null}

      <textarea
        ref={textareaRef}
        id="cover-letter-content"
        value={content}
        maxLength={20000}
        onChange={(event) => setContent(event.target.value)}
        className="mt-5 min-h-[520px] w-full rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700 outline-none transition focus:border-cyan-500"
      />
    </article>
  );
}
