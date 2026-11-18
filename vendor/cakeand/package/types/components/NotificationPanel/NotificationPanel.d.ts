import React from 'react';
export interface NotificationPanelFooter {
    /** The alert message, e.g. "Message deleted". */
    message: React.ReactNode;
    /** Visible label for the alert's inline action (e.g. "Undo"). */
    actionLabel?: string;
    /** Fired when the alert action is activated. */
    onAction?: React.MouseEventHandler<HTMLButtonElement>;
    /** Fired when the alert's close control is activated. Renders it when set. */
    onDismiss?: React.MouseEventHandler<HTMLButtonElement>;
    /** Accessible name for the alert's close control. @default 'Dismiss alert' */
    dismissLabel?: string;
}
export interface NotificationPanelProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
    /** Panel heading. @default 'Notifications' */
    title?: React.ReactNode;
    /** Fired when the header settings (gear) control is activated. Renders it when set. */
    onSettings?: React.MouseEventHandler<HTMLButtonElement>;
    /** Accessible name for the settings control. @default 'Notification settings' */
    settingsLabel?: string;
    /** Fired when the header close control is activated. Renders it when set. */
    onClose?: React.MouseEventHandler<HTMLButtonElement>;
    /** Accessible name for the header close control. @default 'Close notifications' */
    closeLabel?: string;
    /** Replaces the default header controls (settings + close) entirely. */
    headerActions?: React.ReactNode;
    /** The notification list — `Notification` items (rendered `flush`). */
    children: React.ReactNode;
    /**
     * Optional bottom alert bar (Figma's "notification panel alert"). Pass the
     * structured shape for the default snackbar, or a node for a custom footer.
     * Omit for the **no-footer** variation.
     */
    footer?: NotificationPanelFooter | React.ReactNode;
}
export declare const NotificationPanel: React.ForwardRefExoticComponent<NotificationPanelProps & React.RefAttributes<HTMLElement>>;
export default NotificationPanel;
//# sourceMappingURL=NotificationPanel.d.ts.map