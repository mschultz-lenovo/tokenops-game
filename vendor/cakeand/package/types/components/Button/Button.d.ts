import React from 'react';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonIntent = 'primary' | 'secondary' | 'destructive';
export type ButtonVariant = 'fill' | 'outline' | 'tonal' | 'ghost';
export type ButtonTone = 'default' | 'inverse';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Height + type scale, always bold: `xs` 24px tall / 12px text, `sm` 32px /
     * 12px, `md` 40px / 14px, `lg` 48px / 16px.
     * @default 'md'
     */
    size?: ButtonSize;
    /**
     * Which hello pc token family drives the color: `primary` (indigo family),
     * `secondary` (neutral/ink family), or `destructive` (the error family — for
     * actions that delete or can't be undone; Figma `hellopc.button.destructive`).
     * @default 'primary'
     */
    intent?: ButtonIntent;
    /**
     * `inverse` is for buttons on inverse surfaces — toasts, snackbars, tooltips,
     * coach marks (Figma `hellopc.button.inverse`): every color, including
     * hover, press, focus and disabled, swaps to its `--color-inverse-*` twin.
     * Figma defines it for `primary` · `fill` and `secondary` · `ghost` only;
     * other combinations keep their default colors.
     * @default 'default'
     */
    tone?: ButtonTone;
    /**
     * Emphasis treatment, highest → lowest: `fill` (the one main action in a
     * view), `outline` and `tonal` (secondary emphasis), `ghost` (lowest —
     * dense UIs, toolbars, inline actions).
     * @default 'fill'
     */
    variant?: ButtonVariant;
    /**
     * Leading icon. The slot sets the size — 18px for `xs`/`sm`, 24px for
     * `md`/`lg` (Figma icon-size guidance) — so pass the glyph without a size.
     * Icons are decorative — the text label carries the accessible name. Do not
     * use this to build icon-only buttons; that's the (separate) IconButton
     * component.
     */
    startIcon?: React.ReactNode;
    /**
     * Trailing icon, sized by the same slot as `startIcon` (18px `xs`/`sm`, 24px
     * `md`/`lg`). Same rules as `startIcon`.
     */
    endIcon?: React.ReactNode;
    /**
     * Stretch to the container's width (not the viewport). For stacked layouts
     * like dialog footers and mobile forms.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Whether the label is underlined. Defaults to `true` for `ghost` +
     * `secondary` only: with no fill or border those buttons would otherwise be
     * distinguishable from plain text by color alone (WCAG 1.4.1).
     *
     * Set `false` when the button already sits in something that makes it
     * obviously a control — a segmented control, a pager — where the underline
     * reads as a stray link instead.
     */
    underline?: boolean;
}
/**
 * hello pc Button — pill-shaped and token-driven. Cross of intent
 * (primary/secondary) × variant (fill/outline/tonal/ghost) × size
 * (xs/sm/md/lg). Styled entirely from the hello pc CSS custom properties
 * (`--color-*`, `--space-*`, `--radius-*`, `--type-*`), which mirror the
 * Figma variables and re-theme via `[data-theme]`.
 *
 * Always renders a real `<button type="button">`. Disabled buttons use the
 * native `disabled` attribute plus `pointer-events: none` (with an
 * `[aria-disabled='true']` styling hook).
 */
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Button.d.ts.map