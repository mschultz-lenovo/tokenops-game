import React from 'react';
export interface HeaderCellProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Column label text. */
    children?: React.ReactNode;
    /**
     * Emphasize the column as active/sorted — colors the label with the primary
     * token (Figma's primary-colored header variant).
     * @default false
     */
    active?: boolean;
    /**
     * Trailing column controls (sort, add, filter). Pass **IconButton**s
     * (`size="xs"`); they sit after the label and never squeeze it.
     */
    actions?: React.ReactNode;
}
/**
 * A single column header within a `HeaderRow`. Flexes to share the header
 * region evenly; `active` colors the label primary and `actions` hosts
 * `IconButton` column controls.
 */
export declare const HeaderCell: React.ForwardRefExoticComponent<HeaderCellProps & React.RefAttributes<HTMLDivElement>>;
export interface HeaderRowProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The row's `HeaderCell`s — one per body column. */
    children?: React.ReactNode;
}
/**
 * A table header row: an empty leading rail (over the selection checkbox), a
 * flexible `HeaderCell` run, and an empty trailing rail (over the row action).
 * Compose it inside a table container that provides `role="table"` + a header
 * row group.
 */
export declare const HeaderRow: React.ForwardRefExoticComponent<HeaderRowProps & React.RefAttributes<HTMLDivElement>>;
export default HeaderRow;
//# sourceMappingURL=HeaderRow.d.ts.map