import React from 'react';
/**
 * hello pc HelperString — the assistive line under a form field (Figma
 * "&helper.string", node 54:2782). A reusable form element: TextInput
 * composes it, and future fields (Textarea, Select, …) should too.
 *
 * A semantic `tone` drives the icon + text color (all from the hello pc token
 * custom properties); an optional right-aligned counter shows `count/max`.
 * No Radix primitive applies (it's static text) — a plain element with an
 * id for `aria-describedby` wiring.
 */
export type HelperTone = 'greyscale' | 'info' | 'success' | 'warning' | 'error' | 'disabled';
export interface HelperStringProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The helper text. */
    children?: React.ReactNode;
    /**
     * Semantic tone (Figma "type") — drives the icon and color: `greyscale`
     * neutral guidance, `info` active guidance, `success`/`warning`/`error`
     * validation, `disabled` when the field is disabled.
     * @default 'greyscale'
     */
    tone?: HelperTone;
    /** Shows the 16px tone icon before the text. @default true */
    showIcon?: boolean;
    /** Current character count — with `max`, renders a right-aligned `count/max`. */
    count?: number;
    /** Character limit for the counter. */
    max?: number;
}
export declare const HelperString: React.ForwardRefExoticComponent<HelperStringProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=HelperString.d.ts.map