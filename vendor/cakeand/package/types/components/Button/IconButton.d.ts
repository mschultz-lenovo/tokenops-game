import React from 'react';
export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type IconButtonIntent = 'primary' | 'secondary';
export type IconButtonVariant = 'fill' | 'outline' | 'tonal' | 'ghost';
export type IconButtonTone = 'default' | 'inverse';
export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    /**
     * Accessible name for the action (required — the button has no visible
     * text). Rendered as visually-hidden text via Radix `AccessibleIcon`, so
     * screen readers announce it while sighted users see only the icon.
     */
    label: string;
    /**
     * The icon glyph. Rendered at 16px inside the `xs` button and 24px inside
     * `sm`/`md`/`lg`; any SVG icon scales to fill the slot and inherits the
     * button's state color via `currentColor`.
     */
    icon: React.ReactNode;
    /**
     * Container diameter: `xs` 24px (16px icon), `sm` 32px, `md` 40px, `lg`
     * 48px (24px icon).
     * @default 'md'
     */
    size?: IconButtonSize;
    /**
     * Which hello pc token family drives the color: `primary` (indigo family) or
     * `secondary` (neutral/ink family).
     * @default 'primary'
     */
    intent?: IconButtonIntent;
    /**
     * Emphasis treatment (Figma "container"): `fill` (solid), `outline` (1px
     * border), `tonal` (translucent overlay wash), `ghost` (bare icon, Figma
     * "none").
     * @default 'fill'
     */
    variant?: IconButtonVariant;
    /**
     * `inverse` is for icon buttons on inverse surfaces — toast and tooltip close
     * (Figma `hellopc.icon.button.inverse`): glyph, hover, press, focus ring and
     * disabled all swap to their `--color-inverse-*` twins. Figma defines it for
     * `secondary` · `ghost` only; other combinations keep their default colors.
     * @default 'default'
     */
    tone?: IconButtonTone;
}
/**
 * hello pc IconButton — a circular, icon-only action (Figma "&icon button",
 * node 43:1888). Same intent × variant families as Button, sized 24–48px.
 * Styled entirely from the hello pc CSS custom properties (`--color-*`,
 * `--radius-*`), which mirror the Figma variables and re-theme via
 * `[data-theme]`.
 *
 * Accessibility is built on Radix `AccessibleIcon`: the required `label`
 * renders as visually-hidden text, so the button always has an accessible
 * name even though it shows only a glyph. Renders a real
 * `<button type="button">`.
 */
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=IconButton.d.ts.map