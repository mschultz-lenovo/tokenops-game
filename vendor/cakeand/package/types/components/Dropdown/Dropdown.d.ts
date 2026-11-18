import React from 'react';
export interface DropdownOption {
    /** Visible text for the option. */
    label: string;
    /** Value committed to the field when the option is chosen. */
    value: string;
    /** Dims and blocks selection of this single option. @default false */
    disabled?: boolean;
}
export interface DropdownProps {
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
    /** Placeholder shown in the trigger before a value is chosen. @default 'Select...' */
    placeholder?: string;
    /** The options rendered in the menu. */
    options?: DropdownOption[];
    /** Controlled selected value. */
    value?: string;
    /** Uncontrolled initial value. */
    defaultValue?: string;
    /** Fires with the new value when the selection changes. */
    onValueChange?: (value: string) => void;
    /** Dims the whole field and blocks interaction. @default false */
    disabled?: boolean;
    /** Field name for form submission. */
    name?: string;
    /** Explicit id for the trigger (defaults to a generated id wired to the label). */
    id?: string;
}
export declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Dropdown.d.ts.map