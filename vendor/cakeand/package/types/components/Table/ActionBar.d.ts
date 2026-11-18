import React from 'react';
export interface ActionBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /**
     * Select-all checkbox state. Use `'indeterminate'` when only some rows are
     * selected (Figma `state=selected`), `true` for all, `false` for none.
     * @default false
     */
    checked?: boolean | 'indeterminate';
    /** Fired with the next state when the select-all checkbox toggles. */
    onCheckedChange?: (checked: boolean | 'indeterminate') => void;
    /**
     * Accessible name for the select-all checkbox.
     * @default 'Select all rows'
     */
    checkboxLabel?: string;
    /**
     * Selection mode. When `true`, `selectedActions` replace `actions` and the
     * idle `end` slot is hidden (Figma `state=selected`). Drive it from "are any
     * rows selected".
     * @default false
     */
    selected?: boolean;
    /**
     * Idle table controls shown after the checkbox when nothing is selected —
     * typically a refresh **IconButton**. Hidden in selection mode.
     */
    actions?: React.ReactNode;
    /**
     * Bulk actions shown in place of `actions` when `selected` — typically
     * **Button**s (Action ▾ / Label / Group / Delete).
     */
    selectedActions?: React.ReactNode;
    /**
     * Trailing slot: a search **IconButton**, or an expanded search
     * **TextInput** (Figma `state=search expanded`). Hidden in selection mode.
     */
    end?: React.ReactNode;
    /**
     * Accessible name for the toolbar landmark.
     * @default 'Table actions'
     */
    'aria-label'?: string;
}
/**
 * A table's top toolbar: select-all checkbox · idle actions / bulk actions ·
 * trailing search. Place it above a **Header Row** + **Data Row** body.
 */
export declare const ActionBar: React.ForwardRefExoticComponent<ActionBarProps & React.RefAttributes<HTMLDivElement>>;
export default ActionBar;
//# sourceMappingURL=ActionBar.d.ts.map