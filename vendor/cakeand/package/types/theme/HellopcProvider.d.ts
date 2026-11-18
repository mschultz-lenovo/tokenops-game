import React from 'react';
import type { ThemeMode } from '../tokens/theme';
export interface CakeProviderProps {
    /**
     * Active theme mode. Drives both the CSS custom properties and the
     * styled-components theme object.
     * @default 'light.a'
     */
    mode?: ThemeMode;
    /** The application tree. */
    children: React.ReactNode;
    /**
     * Render the hello pc global baseline (`box-sizing`, body font, canvas
     * background). Turn it off when embedding inside a host app whose global
     * styles you must not touch.
     * @default true
     */
    globalStyles?: boolean;
    /**
     * Where the `data-theme` attribute is applied. `document` puts it on
     * `<html>`, so Radix portals (dialogs, menus, tooltips) stay themed;
     * `subtree` wraps the children in a themed `<div>` instead and leaves the
     * rest of the page alone — at the cost of unthemed portals.
     * @default 'document'
     */
    scope?: 'document' | 'subtree';
}
/**
 * Wrap your app once and every hello pc component is themed, fonted, and
 * tokenized. See the module docs for the `data-theme` scoping rationale.
 */
export declare const CakeProvider: ({ mode, children, globalStyles, scope, }: CakeProviderProps) => import("react/jsx-runtime").JSX.Element;
export default CakeProvider;
//# sourceMappingURL=HellopcProvider.d.ts.map