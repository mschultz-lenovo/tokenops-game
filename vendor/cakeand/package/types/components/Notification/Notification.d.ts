import React from 'react';
export type NotificationStatus = 'info' | 'success' | 'warning' | 'error' | 'neutral';
export interface NotificationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
    /**
     * Semantic treatment (Figma `status`: info/success/warning/error/greyscale).
     * Drives the status icon and its color; `neutral` is Figma's colorless
     * "greyscale" status.
     * @default 'info'
     */
    status?: NotificationStatus;
    /** Visible heading. */
    title?: React.ReactNode;
    /** Supporting copy under the title. */
    description?: React.ReactNode;
    /** Footer caption — a relative or absolute time, e.g. `7/20/22 • 8:22 PM`. */
    timestamp?: React.ReactNode;
    /**
     * Marks the notification unread: prepends a red **New** indicator before the
     * timestamp in the footer.
     * @default false
     */
    unread?: boolean;
    /**
     * Leading visual. Defaults to the `status` glyph; pass `null` to hide it, or
     * a custom node to override it.
     */
    icon?: React.ReactNode | null;
    /**
     * Replacement for the default action-button group. When supplied, the
     * default action label/handler props below are ignored.
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
     * Fired when the close control is activated. The close button only renders
     * when this is supplied.
     */
    onDismiss?: React.MouseEventHandler<HTMLButtonElement>;
    /** Accessible name for the close control. @default 'Dismiss notification' */
    dismissLabel?: string;
    /**
     * Renders flush — no own corner radius or drop shadow — so the card tiles
     * inside a list/panel that provides the rounding, clipping, and dividers.
     * `NotificationPanel` sets this on its items.
     * @default false
     */
    flush?: boolean;
}
/**
 * hello pc Notification — a persistent notification-center card (Figma
 * "Notifications", node 113:5543). Unlike Toast (a transient Radix Toast), a
 * Notification stays until dismissed and lives in a browsable list/panel, so
 * it carries an unread indicator and a timestamp.
 *
 * No Radix primitive covers a notification-center card, so the card itself is
 * a semantic `<article>`; its interactive parts reuse the Radix-backed hello pc
 * components — the status glyph is `ModalIcon`, the actions are `Button`, and
 * the close control is `IconButton`. Styled entirely from the hello pc token
 * custom properties, which mirror the Figma variables and re-theme via
 * `[data-theme]`.
 */
export declare const Notification: React.ForwardRefExoticComponent<NotificationProps & React.RefAttributes<HTMLElement>>;
export default Notification;
//# sourceMappingURL=Notification.d.ts.map