/**
 * hello pc typography — Rookery New.
 *
 * Token naming: `{weight}.{sizePx}.{role}` (matches Figma).
 * Implementation uses rem (16px root) per design-system rules.
 */
export declare const TYPOGRAPHY_ROLES: readonly ["caption", "helper", "body", "subject", "subtitle", "title", "page", "greeting", "hero", "data"];
export type TypographyRole = (typeof TYPOGRAPHY_ROLES)[number];
export type TypographyWeight = 'regular' | 'medium' | 'bold';
/** Pixel sizes from the hello pc type scale (for docs / Figma parity). */
export declare const TYPOGRAPHY_SIZE_PX: Record<TypographyRole, number>;
/** rem sizes for CSS — use these in styled-components, never raw px. */
export declare const typographySize: Record<TypographyRole, string>;
export declare const typographyWeight: Record<TypographyWeight, number>;
export type TypographyStyle = {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
    /** Figma token id, e.g. `regular.14.body` */
    token: string;
};
/** Preset styles: `theme.typography.regular.body`, `theme.typography.bold.hero`, … */
export declare const typographyPresets: {
    readonly regular: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", TypographyStyle>;
    readonly medium: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", TypographyStyle>;
    readonly bold: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", TypographyStyle>;
};
/** Flat list for documentation (all 30 tokens). */
export declare const typographyTokenList: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
    /** Figma token id, e.g. `regular.14.body` */
    token: string;
    weight: "regular" | "medium" | "bold";
    role: "caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data";
    px: number;
}[];
export declare const font: {
    readonly family: "\"Rookery New\", \"Rookery\", system-ui, sans-serif";
    readonly weight: Record<TypographyWeight, number>;
    readonly size: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", string>;
    readonly role: readonly ["caption", "helper", "body", "subject", "subtitle", "title", "page", "greeting", "hero", "data"];
    readonly presets: {
        readonly regular: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", TypographyStyle>;
        readonly medium: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", TypographyStyle>;
        readonly bold: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", TypographyStyle>;
    };
    readonly lineHeight: {
        readonly tight: 1.2;
        readonly normal: 1.5;
        readonly display: 1.1;
    };
};
//# sourceMappingURL=typography.d.ts.map