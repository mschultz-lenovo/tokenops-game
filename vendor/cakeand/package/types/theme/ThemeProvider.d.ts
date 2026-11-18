import React from 'react';
import { type ThemeMode } from '../tokens/theme';
import './fonts.css';
import '../tokens/hellopc-vars.css';
/**
 * Global baseline for hello pc. Paints the canvas + base typography from tokens.
 */
export declare const CakeGlobalStyle: React.NamedExoticComponent<import("styled-components").ExecutionProps & object>;
export interface CakeThemeProviderProps {
    /** Active theme mode. */
    mode?: ThemeMode;
    children: React.ReactNode;
}
/**
 * Provides the hello pc theme to styled-components. Every hello pc component reads
 * its colors, spacing, radius, and typography from `props.theme`, so wrapping
 * an app (or a story) in this provider is all that's needed to theme it.
 */
export declare const CakeThemeProvider: ({ mode, children, }: CakeThemeProviderProps) => import("react/jsx-runtime").JSX.Element;
export default CakeThemeProvider;
//# sourceMappingURL=ThemeProvider.d.ts.map