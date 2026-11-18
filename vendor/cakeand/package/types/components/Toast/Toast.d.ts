import React from 'react';
export type ToastStatus = 'info' | 'success' | 'warning' | 'error' | 'neutral';
export type ToastVariant = 'pop-out' | 'inline';
export type ToastLayout = 'simple' | 'complex';
export interface ToastProps extends Omit<React.HTMLAttributes<HTMLLIElement>, 'title' | 'onPause' | 'onResume'> {
    /**
     * Semantic treatment (Figma `status`: info/success/error/warn/greyscale).
     * Drives the status icon and its color; `neutral` is Figma's colorless
     * "greyscale" status.
     * @default 'info'
     */
    status?: ToastStatus;
    /**
     * Surface treatment (Figma `type`). `pop-out` is an elevated, blurred
     * surface with a drop shadow for floating/overlay placement; `inline` is a
     * flush, opaque banner with no elevation for embedding in page content.
     * @default 'pop-out'
     */
    variant?: ToastVariant;
    /**
     * Content arrangement (Figma `&Toast Simple` vs `&Toast Complex`). `simple`
     * is a single row — icon, text, actions, and dismiss all inline. `complex`
     * stacks a footer row (timestamp + actions) below the icon/text/dismiss
     * row, indented to align under the text column — use it when a toast needs
     * a timestamp or when its actions shouldn't compete with the dismiss
     * control for space on one line.
     * @default 'simple'
     */
    layout?: ToastLayout;
    /** Visible heading, rendered through Radix `Toast.Title`. */
    title?: React.ReactNode;
    /** Optional supporting copy, rendered through Radix `Toast.Description`. */
    description?: React.ReactNode;
    /**
     * Caption rendered in the footer row (e.g. a relative or absolute
     * timestamp). `layout="complex"` only — ignored in `simple`.
     */
    timestamp?: React.ReactNode;
    /**
     * Leading visual. Defaults to the `status` glyph; pass `null` to hide the
     * icon entirely, or a custom node to override it.
     */
    icon?: React.ReactNode | null;
    /**
     * Replacement for the default action-button group. When supplied, the
     * default action label/handler props below are ignored. The toast is an
     * inverse surface, so give your buttons `tone="inverse"`.
     */
    actions?: React.ReactNode;
    /** Visible label for the default low-emphasis secondary action. */
    secondaryActionLabel?: string;
    /** Fired when the default secondary action is activated. */
    onSecondaryAction?: React.MouseEventHandler<HTMLButtonElement>;
    /** Disables the default secondary action. @default false */
    secondaryActionDisabled?: boolean;
    /** Visible label for the default high-emphasis primary action. */
    primaryActionLabel?: string;
    /** Fired when the default primary action is activated. */
    onPrimaryAction?: React.MouseEventHandler<HTMLButtonElement>;
    /** Disables the default primary action. @default false */
    primaryActionDisabled?: boolean;
    /**
     * Fired when the reusable close icon button is activated. The close
     * control only renders when this is supplied — pass it to make the toast
     * user-dismissible.
     */
    onDismiss?: React.MouseEventHandler<HTMLButtonElement>;
    /** Accessible name for the optional close control. @default 'Dismiss notification' */
    dismissLabel?: string;
    /** Controlled visibility. Pair with `onOpenChange`. @default true */
    open?: boolean;
    /** Initial visibility for uncontrolled usage. @default true */
    defaultOpen?: boolean;
    /**
     * Fired whenever Radix requests a visibility change — auto-dismiss timeout,
     * swipe-to-dismiss gesture, or Escape key. Set the consumer's `open` state
     * to the given value here.
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Time in milliseconds the toast stays visible before Radix auto-dismisses
     * it (fires `onOpenChange(false)`). Pass `Infinity` to disable auto-dismiss
     * for toasts that require an explicit action.
     * @default 5000
     */
    duration?: number;
    /**
     * Radix's assistive-tech live-region urgency: `foreground` interrupts
     * (assertive), `background` waits its turn (polite).
     * @default 'foreground'
     */
    type?: 'foreground' | 'background';
}
/**
 * hello pc Toast — a token-styled notification surface built on Radix `Toast`,
 * covering both Figma layouts: `&Toast Simple` (node 108:5974, the default)
 * and `&Toast Complex` (node 109:6541, `layout="complex"`). Radix owns the
 * live-region role, auto-dismiss timing, and swipe-to-dismiss gesture; hello pc
 * owns the surface, elevation, and composed content. Renders the message
 * only — mount a single `Toast.Provider` + `Toast.Viewport` (from
 * `radix-ui`) once near your app root and render `Toast` instances inside
 * it, per Radix's own architecture.
 */
export declare const Toast: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLLIElement>>;
export default Toast;
//# sourceMappingURL=Toast.d.ts.map