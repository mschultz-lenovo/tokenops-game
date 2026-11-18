import React from 'react';
export type ChipType = 'primary' | 'secondary' | 'success' | 'warn' | 'error' | 'info';
export type ChipSize = 'sm' | 'lg';
export interface ChipProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onClick'> {
    /** Chip text. */
    children: React.ReactNode;
    /**
     * Semantic color family from the Figma `type` variant. Drives the overlay
     * background wash.
     * @default 'primary'
     */
    type?: ChipType;
    /**
     * Figma `size`: `lg` is a 32px / 14px chip, `sm` is a 24px / 12px chip.
     * @default 'lg'
     */
    size?: ChipSize;
    /**
     * Dims the chip and disables the body/remove interactions (Figma
     * state=disabled).
     * @default false
     */
    disabled?: boolean;
    /** Optional leading glyph slot; inherits color via `currentColor`. */
    leadingIcon?: React.ReactNode;
    /**
     * Fires when the chip body is activated. When provided the body becomes a
     * real `<button>`; omit it for a display-only chip.
     */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    /**
     * Fires when the trailing remove control is activated. When provided a
     * remove button (Radix `AccessibleIcon`) renders in the trailing slot.
     */
    onRemove?: React.MouseEventHandler<HTMLButtonElement>;
    /**
     * Accessible name for the remove control. Defaults to `Remove <label>` when
     * the children are a plain string, otherwise `Remove`.
     */
    removeLabel?: string;
}
/**
 * hello pc Chip — a compact, removable input chip (Figma `&Chip`, node 93:4951).
 * Renders a token-styled pill with an optional leading icon, an optional
 * clickable body, and an optional trailing remove button whose icon-only
 * control is built on Radix `AccessibleIcon`.
 *
 * The Figma `state` axis (enabled / hover / focus / disabled) maps to CSS
 * `:hover`, `:focus-within`, and the `disabled` prop rather than discrete
 * variants.
 */
export declare const Chip: React.ForwardRefExoticComponent<ChipProps & React.RefAttributes<HTMLSpanElement>>;
export default Chip;
//# sourceMappingURL=Chip.d.ts.map