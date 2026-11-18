import React from 'react';
export interface NumberDropdownOption {
    /** The numeric value. Also used as the visible label unless overridden. */
    value: number;
    /** Visible text for the option (defaults to `String(value)`). */
    label?: string;
    /** Dims and blocks selection of this single option. @default false */
    disabled?: boolean;
}
export interface NumberDropdownProps {
    /** Label text above the field (renders an `InputLabel`, wired via `htmlFor`). */
    label?: string;
    /** Shows the label's 16px info icon. @default false */
    showLabelInfo?: boolean;
    /**
     * Marks the field required: appends the label's "(required)" suffix and sets
     * the Radix `required` flag.
     * @default false
     */
    required?: boolean;
    /** Helper text below the field (renders a `HelperString`, wired via `aria-describedby`). */
    helperText?: React.ReactNode;
    /** Placeholder shown in the trigger before a value is chosen. @default '0' */
    placeholder?: string;
    /** The numeric options rendered in the menu, e.g. `[1, 2, 3, 4, 5]`. */
    options?: (number | NumberDropdownOption)[];
    /** Controlled selected value. */
    value?: number;
    /** Uncontrolled initial value. */
    defaultValue?: number;
    /** Fires with the new numeric value when the selection changes. */
    onValueChange?: (value: number) => void;
    /** Field height: `md` 40px (24px arrow), `sm` 32px (18px arrow). @default 'md' */
    size?: 'sm' | 'md';
    /** Dims the whole field and blocks interaction. @default false */
    disabled?: boolean;
    /** Field name for form submission. */
    name?: string;
    /** Explicit id for the trigger (defaults to a generated id wired to the label). */
    id?: string;
    /** Accessible name for the trigger — required when `label` is omitted. */
    'aria-label'?: string;
}
export declare const NumberDropdown: React.ForwardRefExoticComponent<NumberDropdownProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=NumberDropdown.d.ts.map