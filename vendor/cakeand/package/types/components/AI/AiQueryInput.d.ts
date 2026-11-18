import React from 'react';
import { type AiContextOption } from './AiContextMenu';
import { type AiFileAttachmentStatus } from './AiFileAttachment';
import { type AiSegment } from './aiSegment';
/**
 * Request lifecycle the input reflects (Figma "State" minus Empty/Typing,
 * which are derived from whether the field has text):
 * - `idle` — Empty (send disabled) or Typing (send enabled)
 * - `sending` — the response is streaming; send becomes **Stop**
 * - `error` — the send failed; error ring + inline message, send becomes **Retry**
 */
export type AiQueryInputStatus = 'idle' | 'sending' | 'error';
/** A file shown above the text (Figma Attachments row). The app owns the upload. */
export interface AiAttachment {
    /** Stable id passed back to `onRemoveAttachment` / `onRetryAttachment`. */
    id: string;
    /** File name. */
    name: string;
    /** Upload state. @default 'ready' */
    status?: AiFileAttachmentStatus;
    /** Secondary line while ready, e.g. "PDF · 2.4 MB". */
    details?: React.ReactNode;
    /** Optional file-type glyph; defaults by extension (image vs document). */
    icon?: React.ReactNode;
}
export interface AiQueryInputProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit' | 'onChange' | 'defaultValue'> {
    /**
     * AI segment (Figma "Segment") — sets the gradient ring, caret, and the
     * send-button fill from the `--color-ai-<segment>-*` tokens.
     * @default 'consumer'
     */
    segment?: AiSegment;
    /**
     * Request lifecycle: `idle`, `sending` (send → Stop), `error` (error ring,
     * inline message, send → Retry). Empty vs Typing is derived from the text.
     * @default 'idle'
     */
    status?: AiQueryInputStatus;
    /** Controlled text. Pair with `onValueChange`. */
    value?: string;
    /** Uncontrolled initial text. @default '' */
    defaultValue?: string;
    /** Called on every edit with the new text. */
    onValueChange?: (value: string) => void;
    /**
     * Called with the trimmed prompt (and the attached context values) when the
     * user presses Enter or the send button. In uncontrolled mode the field
     * clears afterwards (Figma Sending: "field cleared").
     */
    onSubmit?: (value: string, meta: {
        contexts: string[];
    }) => void;
    /** Called when the Stop button is pressed while `status="sending"`. */
    onStop?: () => void;
    /** Called with the kept text when Retry is pressed while `status="error"`. */
    onRetry?: (value: string) => void;
    /**
     * Placeholder shown while the field is empty.
     * @default 'Type your message here'
     */
    placeholder?: string;
    /**
     * Accessible name for the text field (there is no visible label).
     * @default 'Message'
     */
    label?: string;
    /**
     * Inline message shown under the text when `status="error"`. Rendered with
     * the hello pc `HelperString` element (tone `error`) and wired to the field
     * via `aria-describedby`.
     * @default "Your message didn't send. Check your connection and try again."
     */
    errorMessage?: React.ReactNode;
    /**
     * Leading toolbar slot. Defaults to the ghost "add" `IconButton` (wired to
     * `onAdd`). Pass your own actions — e.g. an attachment button plus a tool
     * picker — to replace it.
     */
    leadingActions?: React.ReactNode;
    /**
     * Click handler for the plain "add" button. Only used when neither
     * `contextOptions` nor `onFilesSelected` is set (otherwise + opens the
     * context menu).
     */
    onAdd?: () => void;
    /**
     * Context types the + menu offers (Figma hellopc.ai.contextMenu). Setting
     * this (or `onFilesSelected`) turns + into the context menu; pass
     * `AI_CONTEXT_OPTIONS` for the spec's default list.
     */
    contextOptions?: AiContextOption[];
    /** Controlled attached context values — each renders a `Chip` after +. */
    contexts?: string[];
    /** Uncontrolled initial context values. @default [] */
    defaultContexts?: string[];
    /** Called with the next attached context values. */
    onContextsChange?: (contexts: string[]) => void;
    /**
     * Called with the files picked from **File** in the + menu. Add them to
     * `attachments` (status `uploading`) and update as your upload progresses.
     */
    onFilesSelected?: (files: File[]) => void;
    /** `accept` for the file picker, e.g. `".pdf,image/*"`. */
    accept?: string;
    /**
     * Files shown above the text as `AiFileAttachment` tiles. Send stays
     * disabled while any file is `uploading`.
     */
    attachments?: AiAttachment[];
    /** Called with an attachment id when its × is pressed. */
    onRemoveAttachment?: (id: string) => void;
    /** Called with an attachment id when Retry is pressed on a failed upload. */
    onRetryAttachment?: (id: string) => void;
    /**
     * Trailing toolbar slot, rendered before the send button. Defaults to an
     * uncontrolled voice `AiModeToggle` in the same segment; pass a controlled
     * `AiModeToggle` (or `null` to remove it).
     */
    trailingActions?: React.ReactNode;
    /**
     * Content under the input card (outside the ring) — e.g. an AI disclaimer
     * line. Not part of the current Figma spec; provided as a composition slot.
     */
    footer?: React.ReactNode;
    /** Disables the field and every toolbar action. @default false */
    disabled?: boolean;
    /**
     * Maximum visible text lines before the field scrolls.
     * @default 6
     */
    maxRows?: number;
}
/**
 * hello pc AI QueryInput — the prompt input for AI experiences (Figma
 * "hellopc.ai.queryInput", node 17608:3405). Segment sets the ring and
 * accents; status drives Empty → Typing → Sending (Stop) → Error (Retry).
 *
 * Renders a `<form>` around a native auto-growing `<textarea>`: Enter sends,
 * Shift+Enter inserts a newline. Composes existing hello pc pieces —
 * `IconButton` (add, send/stop/retry), `HelperString` (error line) and
 * `AiModeToggle` (voice) — rather than re-creating them.
 */
export declare const AiQueryInput: React.ForwardRefExoticComponent<AiQueryInputProps & React.RefAttributes<HTMLTextAreaElement>>;
export default AiQueryInput;
//# sourceMappingURL=AiQueryInput.d.ts.map