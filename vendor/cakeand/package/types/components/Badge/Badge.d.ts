import React from 'react';
/** Semantic color families (Figma `Property 1`: primary/secondary/destructive/disabled). */
export declare const BADGE_SEMANTICS: readonly ["primary", "secondary", "destructive", "disabled"];
/** Decorative palette colors (Figma `Property 1` badge swatches). */
export declare const BADGE_PALETTE: readonly ["red", "orange", "amber", "gold", "yellow", "lime", "green", "jade", "teal", "aqua", "cyan", "azure", "blue", "indigo", "violet", "purple", "magenta", "pink"];
export type BadgeSemantic = (typeof BADGE_SEMANTICS)[number];
export type BadgePalette = (typeof BADGE_PALETTE)[number];
export type BadgeColor = BadgeSemantic | BadgePalette;
export type BadgeTone = 'solid' | 'subtle';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Badge text (Figma `label`). */
    children: React.ReactNode;
    /**
     * Color family (Figma `Property 1`). Four semantic families —
     * `primary`, `secondary`, `destructive`, `disabled` — draw from the
     * design-system colors; the remaining values are decorative palette
     * swatches. `disabled` is a muted/inactive treatment, not an interactive
     * state (Badge is presentational).
     * @default 'primary'
     */
    color?: BadgeColor;
    /**
     * Emphasis (Figma `Property 2`). `solid` is a saturated fill with inverse
     * text (Figma `primary`); `subtle` is a light tinted wash with colored text
     * (Figma `onPrimary`).
     * @default 'solid'
     */
    tone?: BadgeTone;
    /**
     * Show the leading 8px status dot (Figma `showLeftSlot`). The dot is
     * decorative and inherits the badge's text color.
     * @default true
     */
    dot?: boolean;
}
/**
 * hello pc Badge — a compact, non-interactive status label (Figma `Label`, node
 * 122:6268). Renders a token-styled pill with an optional leading status dot
 * and a bold caption. Use it to tag or categorize content (status, counts,
 * labels); it is presentational only — for a removable/clickable pill use
 * `Chip`, and for actions use `Button`.
 *
 * Being static, Badge wraps no Radix primitive (there is none for a badge and
 * nothing interactive to delegate); it renders a semantic `<span>`. Every
 * color resolves from hello pc CSS custom properties, so the **Theme** toolbar
 * re-themes it live.
 */
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;
export default Badge;
//# sourceMappingURL=Badge.d.ts.map