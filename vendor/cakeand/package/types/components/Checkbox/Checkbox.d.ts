import React from 'react';
export interface CheckboxProps {
    /**
     * Controlled state. `true` / `false`, or `'indeterminate'` for a partial
     * selection (e.g. a "select all" that only some children satisfy). Pair with
     * `onCheckedChange`.
     */
    checked?: boolean | 'indeterminate';
    /**
     * Initial state for uncontrolled usage. Ignored when `checked` is provided.
     * @default false
     */
    defaultChecked?: boolean;
    /** Fired with the next state whenever the user toggles. */
    onCheckedChange?: (checked: boolean | 'indeterminate') => void;
    /** Disables the checkbox. @default false */
    disabled?: boolean;
    /** Marks the field required in a form. @default false */
    required?: boolean;
    /**
     * Visible text label, wired via `<label htmlFor>` so clicking it toggles.
     * When omitted, pass `aria-label` to keep an accessible name.
     */
    label?: string;
    /** Accessible name for a labelless checkbox. Required when `label` is omitted. */
    'aria-label'?: string;
    /** Form field name submitted with the value. */
    name?: string;
    /** Form value submitted when checked. @default 'on' */
    value?: string;
    /** Explicit id (auto-generated when omitted). */
    id?: string;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLButtonElement>>;
export default Checkbox;
//# sourceMappingURL=Checkbox.d.ts.map