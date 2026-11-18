import React from 'react';
export interface RichTooltipProps {
    /**
     * Non-interactive trigger content rendered inside Radix Popover's real
     * button. Do not pass another button here because nested controls are invalid.
     */
    trigger: React.ReactNode;
    /** Structured body content. */
    children: React.ReactNode;
    /** Accessible name for a trigger whose visible content is not descriptive. */
    triggerAriaLabel?: string;
    /** Optional heading. @default 'Title' */
    title?: React.ReactNode;
    /** Shows the title/close header row. @default true */
    showHeader?: boolean;
    /** Shows the title inside the header. @default true */
    showTitle?: boolean;
    /** Shows the reusable IconButton close action. @default true */
    showClose?: boolean;
    /** Shows the step/action footer. @default true */
    showFooter?: boolean;
    /** Shows the leading progress text in the footer. @default true */
    showStepper?: boolean;
    /** Footer progress text. @default 'Step 1 of 4' */
    stepperText?: React.ReactNode;
    /** Replaces the default secondary and primary Buttons. */
    actions?: React.ReactNode;
    /** Secondary Button label. @default 'Secondary' */
    secondaryActionLabel?: string;
    /** Primary Button label. @default 'Primary' */
    primaryActionLabel?: string;
    /** Fires when the secondary action is activated. */
    onSecondaryAction?: React.MouseEventHandler<HTMLButtonElement>;
    /** Fires when the primary action is activated. */
    onPrimaryAction?: React.MouseEventHandler<HTMLButtonElement>;
    /** Fires after the close IconButton is activated. */
    onClose?: () => void;
    /** Controlled open state. */
    open?: boolean;
    /** Initial state for uncontrolled usage. @default false */
    defaultOpen?: boolean;
    /** Fires whenever Radix opens or closes the rich tooltip. */
    onOpenChange?: (open: boolean) => void;
    /** Preferred placement relative to the trigger. @default 'bottom' */
    side?: 'top' | 'right' | 'bottom' | 'left';
    /** Alignment along the selected side. @default 'center' */
    align?: 'start' | 'center' | 'end';
    /** Gap between trigger and surface. @default 12 */
    sideOffset?: number;
    /** Surface width (number = px). @default 448 */
    width?: number | string;
}
/**
 * hello pc RichTooltip (Figma node 128:8611) uses Radix Popover—not Tooltip—
 * because it contains focusable close and action buttons. Radix owns
 * click/keyboard opening, focus management, Escape, outside dismissal,
 * collision handling, and portal positioning. The surface composes hello pc
 * Button and IconButton.
 */
export declare const RichTooltip: React.ForwardRefExoticComponent<RichTooltipProps & React.RefAttributes<HTMLDivElement>>;
export default RichTooltip;
//# sourceMappingURL=RichTooltip.d.ts.map