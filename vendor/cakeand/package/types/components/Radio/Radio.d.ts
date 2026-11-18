import React from 'react';
export interface RadioGroupProps {
    /** Controlled selected value. Pair with `onValueChange`. */
    value?: string;
    /** Initial selected value for uncontrolled usage. */
    defaultValue?: string;
    /** Fired with the newly selected value when the selection changes. */
    onValueChange?: (value: string) => void;
    /** Form field name submitted with the selected value. */
    name?: string;
    /** Disables every radio in the group. @default false */
    disabled?: boolean;
    /** Marks the group as required in a form. @default false */
    required?: boolean;
    /**
     * Layout + arrow-key direction. `vertical` stacks the options;
     * `horizontal` lays them in a row.
     * @default 'vertical'
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Accessible name for the group. Provide this (or associate a visible
     * heading via `aria-labelledby`) so assistive tech announces what the
     * choices are for.
     */
    'aria-label'?: string;
    /** The `Radio` options. */
    children: React.ReactNode;
}
export interface RadioProps {
    /** The value this option contributes to the group (required, unique). */
    value: string;
    /**
     * Visible text label, wired via `<label htmlFor>` so clicking it selects the
     * option. When omitted, pass `aria-label` to keep an accessible name.
     */
    label?: string;
    /** Disables just this option. @default false */
    disabled?: boolean;
    /** Accessible name for a labelless radio. Required when `label` is omitted. */
    'aria-label'?: string;
    /** Explicit id (auto-generated when omitted). */
    id?: string;
}
/**
 * The group container. Owns the selected value + keyboard navigation; renders
 * `Radio` children.
 */
export declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>;
/** A single option. Must be rendered inside a `RadioGroup`. */
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Radio.d.ts.map