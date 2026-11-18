import React from 'react';
import { ScrollArea as RadixScrollArea } from 'radix-ui';
/**
 * Native-overflow scrollbar styling — the same grey thumb (`4px`,
 * `--color-stroke-border-high`, `--radius-50`) applied via `scrollbar-*` /
 * `::-webkit-scrollbar` rules. Use it on surfaces that must keep native
 * overflow and can't host a `ScrollArea` (e.g. a Radix `Select` viewport), so
 * their scrollbar matches the `Scrollbar` component.
 */
export declare const nativeScrollbarStyles: import("styled-components").RuleSet<object>;
export interface ScrollbarProps extends Omit<React.ComponentPropsWithoutRef<typeof RadixScrollArea.Root>, 'children'> {
    /** The scrollable content. */
    children: React.ReactNode;
    /** Caps the viewport height; the vertical scrollbar appears when content overflows. */
    maxHeight?: number | string;
    /** Caps the viewport width; the horizontal scrollbar appears when content overflows. */
    maxWidth?: number | string;
    /**
     * Which scrollbars to render.
     * @default 'vertical'
     */
    orientation?: 'vertical' | 'horizontal' | 'both';
    /** Props forwarded to the scrollable viewport — add padding/layout here. */
    viewportProps?: React.ComponentPropsWithoutRef<typeof RadixScrollArea.Viewport>;
}
/**
 * The scroll surface. Forwards every Radix `ScrollArea.Root` prop (`type`,
 * `scrollHideDelay`, …); `type` defaults to `'auto'` so the scrollbar shows
 * only when content overflows.
 */
export declare const Scrollbar: React.ForwardRefExoticComponent<ScrollbarProps & React.RefAttributes<HTMLDivElement>>;
export default Scrollbar;
//# sourceMappingURL=Scrollbar.d.ts.map