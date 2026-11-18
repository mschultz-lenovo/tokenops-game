import React from 'react';
type PinStatus = 'default' | 'error';
export interface PinInputProps {
    /** Label text above the PIN slots (renders an `InputLabel`). */
    label?: string;
    /** Shows the label's 16px info icon. @default false */
    showLabelInfo?: boolean;
    /** Appends the label's "(required)" suffix and marks the field required. @default false */
    required?: boolean;
    /** Helper text below the PIN slots (renders a `HelperString`). */
    helperText?: React.ReactNode;
    /**
     * Validation state. `error` changes every cell border and the helper to the
     * error tokens, and exposes `aria-invalid`.
     * @default 'default'
     */
    status?: PinStatus;
    /**
     * Number of numeric PIN slots. The Figma component uses six; reduce only
     * when the authentication service explicitly uses a different code length.
     * @default 6
     */
    length?: number;
    /** Controlled PIN value. Only numeric characters up to `length` are retained. */
    value?: string;
    /** Uncontrolled initial PIN value. */
    defaultValue?: string;
    /** Fires whenever Radix changes the sanitized numeric PIN value. */
    onValueChange?: (value: string) => void;
    /** Fires once the PIN reaches `length` digits. */
    onComplete?: (value: string) => void;
    /** Makes the PIN visible as digits instead of password dots. @default false */
    visible?: boolean;
    /** Called when the visibility eye button changes state. */
    onVisibleChange?: (visible: boolean) => void;
    /** Shows the existing 32px IconButton eye action. @default true */
    showVisibilityToggle?: boolean;
    /** Dims the slots, helper, and eye action, blocking every interaction. @default false */
    disabled?: boolean;
    /** Field name for form submission (Radix submits the combined PIN value). */
    name?: string;
    /** Explicit id for the first slot (defaults to a generated id wired to the label). */
    id?: string;
    /** Accessible name for a labelless field. Required when `label` is omitted. */
    'aria-label'?: string;
    /** Enables browser/SMS one-time-code autofill. @default 'one-time-code' */
    autoComplete?: 'one-time-code' | 'off';
}
export declare const PinInput: React.ForwardRefExoticComponent<PinInputProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=PinInput.d.ts.map