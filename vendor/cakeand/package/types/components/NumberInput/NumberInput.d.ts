import React from 'react';
export interface NumberInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue' | 'onChange' | 'min' | 'max' | 'step' | 'type'> {
    /** Label text above the field (renders an `InputLabel`, wired via `htmlFor`). */
    label?: string;
    /** Shows the label's 16px info icon. @default false */
    showLabelInfo?: boolean;
    /**
     * Marks the field required: appends the label's "(required)" suffix and sets
     * the native `required` attribute.
     * @default false
     */
    required?: boolean;
    /** Helper text below the field (renders a `HelperString`, wired via `aria-describedby`). */
    helperText?: React.ReactNode;
    /**
     * Validation state: tints the field with the success/error tokens and sets
     * `aria-invalid` on error.
     * @default 'default'
     */
    status?: 'default' | 'success' | 'error';
    /** Field height: `md` 40px (40px stepper buttons), `sm` 32px (32px buttons). @default 'md' */
    size?: 'sm' | 'md';
    /** Controlled numeric value. */
    value?: number;
    /** Uncontrolled initial value. */
    defaultValue?: number;
    /** Lower bound — clamps typed/stepped values and disables the decrement button at the limit. */
    min?: number;
    /** Upper bound — clamps typed/stepped values and disables the increment button at the limit. */
    max?: number;
    /** Amount the stepper buttons add/subtract per click. @default 1 */
    step?: number;
    /** Non-editable text shown after the value, such as `%` or `kg`. */
    suffix?: React.ReactNode;
    /** Fires with the new value (or `undefined` if cleared) on every change. */
    onValueChange?: (value: number | undefined) => void;
    /** Shows the decrement ("−") button. @default true */
    showDecrement?: boolean;
    /** Shows the increment ("+") button. @default true */
    showIncrement?: boolean;
}
export declare const NumberInput: React.ForwardRefExoticComponent<NumberInputProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=NumberInput.d.ts.map