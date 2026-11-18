import React from 'react';
export interface SimpleTooltipProps {
    /**
     * Non-interactive trigger content rendered inside Radix Tooltip's real
     * button. Do not pass another button here because nested controls are invalid.
     */
    trigger: React.ReactNode;
    /** Tooltip text or short phrasing content. */
    children: React.ReactNode;
    /** Accessible name for a trigger whose visible content is not descriptive. */
    triggerAriaLabel?: string;
    /** Controlled open state. */
    open?: boolean;
    /** Initial state for uncontrolled usage. @default false */
    defaultOpen?: boolean;
    /** Fires whenever Radix opens or closes the tooltip. */
    onOpenChange?: (open: boolean) => void;
    /** Hover/focus delay before opening, in milliseconds. @default 0 */
    delayDuration?: number;
    /** Preferred placement relative to the trigger. @default 'top' */
    side?: 'top' | 'right' | 'bottom' | 'left';
    /** Alignment along the selected side. @default 'center' */
    align?: 'start' | 'center' | 'end';
    /** Gap between trigger and tooltip. @default 8 */
    sideOffset?: number;
    /** Maximum tooltip width (number = px). @default 280 */
    maxWidth?: number | string;
}
/**
 * hello pc SimpleTooltip — a compact text description built on Radix Tooltip
 * (Figma node 128:8606). Radix owns hover/focus timing, accessible
 * `aria-describedby`, portal positioning, collision handling, and Escape;
 * hello pc owns the inverse surface and exact elevation/2.
 */
export declare const SimpleTooltip: React.ForwardRefExoticComponent<SimpleTooltipProps & React.RefAttributes<HTMLDivElement>>;
export default SimpleTooltip;
//# sourceMappingURL=SimpleTooltip.d.ts.map