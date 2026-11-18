import React from 'react';
export interface SwitchProps {
    /**
     * Controlled checked state. Pair with `onCheckedChange` and own the state
     * yourself; leave undefined to let the switch manage its own state
     * (uncontrolled, seeded by `defaultChecked`).
     */
    checked?: boolean;
    /**
     * Initial checked state for uncontrolled usage. Ignored when `checked` is
     * provided.
     * @default false
     */
    defaultChecked?: boolean;
    /** Fired with the next checked state whenever the user toggles. */
    onCheckedChange?: (checked: boolean) => void;
    /**
     * Disables the switch (Radix sets `data-disabled`; the label dims and the
     * cursor changes).
     * @default false
     */
    disabled?: boolean;
    /**
     * Visible text label rendered next to the switch and wired via
     * `<label htmlFor>` — clicking it toggles. When omitted, pass `aria-label`
     * instead so the control keeps an accessible name.
     */
    label?: string;
    /**
     * Accessible name for labelless usage. Required whenever `label` is omitted.
     */
    'aria-label'?: string;
    /** Form field name. */
    name?: string;
    /** Explicit id (auto-generated when omitted). */
    id?: string;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>;
export default Switch;
//# sourceMappingURL=Switch.d.ts.map