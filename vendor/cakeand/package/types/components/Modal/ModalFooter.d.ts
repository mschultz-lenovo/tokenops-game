import React from 'react';
export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Replacement for the leading checkbox slot. When supplied, all checkbox
     * label and state props are ignored so consumers can compose another existing
     * hello pc control.
     */
    checkbox?: React.ReactNode;
    /**
     * Replacement for the trailing action group. When supplied, all default
     * action label, event, and disabled props are ignored.
     */
    actions?: React.ReactNode;
    /**
     * Visible label for the default Radix-wrapped Checkbox.
     * @default 'Don’t remind me again'
     */
    checkboxLabel?: string;
    /**
     * Controlled state for the default checkbox. Pair with
     * `onCheckboxCheckedChange`; ignored when `checkbox` is supplied.
     */
    checkboxChecked?: boolean | 'indeterminate';
    /**
     * Initial state for the uncontrolled default checkbox.
     * @default false
     */
    defaultCheckboxChecked?: boolean;
    /** Fired when the default checkbox changes state. */
    onCheckboxCheckedChange?: (checked: boolean | 'indeterminate') => void;
    /** Disables the default checkbox. @default false */
    checkboxDisabled?: boolean;
    /** Visible label for the low-emphasis secondary action. @default 'Secondary' */
    secondaryActionLabel?: string;
    /** Fired when the default secondary action is activated. */
    onSecondaryAction?: React.MouseEventHandler<HTMLButtonElement>;
    /** Disables the default secondary action. @default false */
    secondaryActionDisabled?: boolean;
    /** Visible label for the primary action. @default 'Primary' */
    primaryActionLabel?: string;
    /** Fired when the default primary action is activated. */
    onPrimaryAction?: React.MouseEventHandler<HTMLButtonElement>;
    /** Disables the default primary action. @default false */
    primaryActionDisabled?: boolean;
}
/**
 * hello pc ModalFooter — the action region for a dialog (Figma `_elements / modal
 * Footer`, node 97:5766). It composes the existing Radix-wrapped Checkbox and
 * Button components, keeping the secondary action before the primary action.
 */
export declare const ModalFooter: React.ForwardRefExoticComponent<ModalFooterProps & React.RefAttributes<HTMLDivElement>>;
export default ModalFooter;
//# sourceMappingURL=ModalFooter.d.ts.map