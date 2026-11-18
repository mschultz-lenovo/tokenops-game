import React from 'react';
type Stripe = 'default' | 'inverse';
export interface DataCellProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Cell content. A plain string is rendered as truncating 14px body text
     * (Figma `type=text`); pass a **Chip**, **Badge**, or any node for richer
     * cells (Figma `type=chip` / `tag` / `badge`).
     */
    children?: React.ReactNode;
}
/**
 * A single column within a `DataRow`. Flexes to share the middle region evenly
 * with its siblings and clips overflow. Strings become ellipsized body text;
 * any other node (a `Chip`, a `Badge`, an avatar…) is placed as-is.
 */
export declare const DataCell: React.ForwardRefExoticComponent<DataCellProps & React.RefAttributes<HTMLDivElement>>;
export interface DataRowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
    /** The row's `DataCell`s — the record's columns. */
    children?: React.ReactNode;
    /**
     * Zebra banding (Figma `state=default stripe` / `inverse stripe`). Alternate
     * it per row (`index % 2`) for striped tables.
     * @default 'default'
     */
    stripe?: Stripe;
    /**
     * Selected row (Figma `state=selected`): a tonal highlight with the leading
     * checkbox checked. Pair with `onSelectedChange`.
     * @default false
     */
    selected?: boolean;
    /**
     * Dims the row and blocks interaction, including the checkbox (Figma
     * `state=disabled`).
     * @default false
     */
    disabled?: boolean;
    /**
     * Adds a pointer cursor for rows that navigate or open a detail on click.
     * Pair with `onClick`. Hover lift (Figma `state=hover`) is applied to every
     * non-disabled, non-selected row regardless of this flag.
     * @default false
     */
    interactive?: boolean;
    /**
     * Render the leading selection checkbox. Set `false` for a read-only table;
     * the rail column stays so rows still align with the header.
     * @default true
     */
    selectable?: boolean;
    /** Fired when the leading checkbox toggles. */
    onSelectedChange?: (selected: boolean) => void;
    /**
     * Accessible name for the row's selection checkbox.
     * @default 'Select row'
     */
    checkboxLabel?: string;
    /**
     * Trailing rail content — a row action such as an info icon or an overflow
     * menu. The rail column renders even when omitted, to keep header alignment.
     */
    action?: React.ReactNode;
}
/**
 * A table body row: leading selection checkbox · flexible `DataCell` run ·
 * trailing action. Compose it inside a table container that provides
 * `role="table"` and row groups.
 */
export declare const DataRow: React.ForwardRefExoticComponent<DataRowProps & React.RefAttributes<HTMLDivElement>>;
export default DataRow;
//# sourceMappingURL=DataRow.d.ts.map