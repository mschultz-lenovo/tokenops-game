import React from 'react';
import { type AiSegment } from './aiSegment';
/**
 * Upload lifecycle of an attached file (Figma "State"):
 * - `uploading` — spinner + "Uploading…"; the query input blocks Send
 * - `ready` — file-type glyph + `details` (type · size)
 * - `error` — error ring, "Upload failed", Retry + remove
 */
export type AiFileAttachmentStatus = 'uploading' | 'ready' | 'error';
export interface AiFileAttachmentProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    /** File name. Truncates to one line; the full name is exposed as a tooltip (`title`). */
    name: string;
    /**
     * Upload state (Figma State=Uploading / Ready / Error).
     * @default 'ready'
     */
    status?: AiFileAttachmentStatus;
    /**
     * Secondary line while `ready`, e.g. "PDF · 2.4 MB". Uploading and error
     * states show their own fixed text.
     */
    details?: React.ReactNode;
    /** Removes the file. Renders the trailing × when provided. */
    onRemove?: () => void;
    /** Retries a failed upload. Renders Retry in the `error` state when provided. */
    onRetry?: () => void;
    /** Disables remove / retry. @default false */
    disabled?: boolean;
    /**
     * AI segment (Figma "Segment") — tints the file-type tile with the segment
     * surface gradient and flat glyph. Match the surrounding query input.
     * @default 'consumer'
     */
    segment?: AiSegment;
    /**
     * File-type glyph (Figma "File type"). Defaults to an image glyph for image
     * files (by extension) and a document glyph otherwise.
     */
    icon?: React.ReactNode;
}
/**
 * hello pc AI FileAttachment — a file attached to a prompt in the AI query
 * input (Figma "hellopc.ai.fileAttachment", node 19331:8984). Added from
 * **File** in the + context menu (or drag-and-drop / paste); several tiles
 * wrap above the text.
 *
 * Static content (no Radix primitive applies); the remove and retry actions
 * reuse the hello pc `IconButton`, and the uploading state reuses `Spinner`.
 * The upload itself is the app's job — this tile only reflects its `status`.
 */
export declare const AiFileAttachment: React.ForwardRefExoticComponent<AiFileAttachmentProps & React.RefAttributes<HTMLDivElement>>;
export default AiFileAttachment;
//# sourceMappingURL=AiFileAttachment.d.ts.map