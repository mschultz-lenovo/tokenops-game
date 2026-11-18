import React from 'react';
import { type PasswordRequirement, type PasswordStrength } from '../Elements';
type PasswordStatus = 'default' | 'success' | 'error';
export interface PasswordInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'onChange' | 'value' | 'defaultValue'> {
    /** Label text above the field (renders an `InputLabel`, wired via `htmlFor`). */
    label?: string;
    /** Shows the label's 16px info icon. @default false */
    showLabelInfo?: boolean;
    /** Appends "(required)" to the label and sets the native required attribute. @default false */
    required?: boolean;
    /** Helper text below the input (renders a `HelperString`). */
    helperText?: React.ReactNode;
    /** Validation state: semantic chrome and helper tone. @default 'default' */
    status?: PasswordStatus;
    /** Controlled password value. */
    value?: string;
    /** Uncontrolled initial password value. */
    defaultValue?: string;
    /** Fires with the native input change event. */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    /** Fires with the raw password value whenever it changes. */
    onValueChange?: (value: string) => void;
    /** Fires when the Radix visibility toggle changes state. */
    onVisibilityChange?: (visible: boolean) => void;
    /** Controlled visibility for the password. */
    visible?: boolean;
    /** Uncontrolled initial visibility. @default false */
    defaultVisible?: boolean;
    /** Shows the PasswordMenu while the field or its eye toggle has focus. @default true */
    showStrengthMenu?: boolean;
    /** Overrides automatically calculated password strength. */
    strength?: PasswordStrength;
    /** Overrides the visible PasswordMenu strength label. */
    strengthLabel?: string;
    /** Overrides the default password-policy requirements in PasswordMenu. */
    requirements?: PasswordRequirement[];
    /** Satisfied custom-policy requirement ids; defaults to the built-in rule checks. */
    metRequirementIds?: string[];
}
export declare const PasswordInput: React.ForwardRefExoticComponent<PasswordInputProps & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=PasswordInput.d.ts.map