import React from 'react';
export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Body rows — the **Data Row**s of the table. */
    children?: React.ReactNode;
    /** Top toolbar — an **Action Bar**. Rendered above the grid. */
    actionBar?: React.ReactNode;
    /**
     * Column header — a **Header Row**. Rendered in its own header rowgroup above
     * the scrollable body, so it stays fixed while the body scrolls.
     */
    header?: React.ReactNode;
    /** Bottom footer — a **Table Footer** (range + **Pagination**), or any node. */
    footer?: React.ReactNode;
    /**
     * Caps the body height and turns it into a vertical scroll region with the
     * hello pc scrollbar. Omit for a table that grows to its content.
     */
    maxBodyHeight?: number | string;
    /**
     * Accessible name for the table grid (`role="table"`). Provide this or
     * `aria-labelledby`.
     */
    'aria-label'?: string;
    /** ID of an element labelling the table grid. */
    'aria-labelledby'?: string;
}
/**
 * The assembled table surface: Action Bar · Header Row · scrollable Data Row
 * body · Table Footer. Compose the parts as slots; Table frames them and
 * supplies the table semantics.
 */
export declare const Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLDivElement>>;
export interface TableFooterProps {
    /** Current page, 1-based. */
    page: number;
    /** Rows shown per page — drives both the range and the page count. */
    pageSize: number;
    /** Total number of rows across all pages. */
    total: number;
    /** Fires with the new page whenever the pager navigates. */
    onPageChange?: (page: number) => void;
    /**
     * Forwarded to **Pagination**: collapse the middle behind a "…" menu once the
     * page count exceeds this. Omit to render every page.
     */
    maxPageButtons?: number;
    /** Accessible name for the pager landmark. @default 'Table pages' */
    paginationLabel?: string;
}
/**
 * The table's footer: a "start–end of total" results range beside the hello pc
 * **Pagination** control. Computes the range and page count from `page` /
 * `pageSize` / `total`, so you drive it from the same paging state as the body.
 */
export declare const TableFooter: React.ForwardRefExoticComponent<TableFooterProps & React.RefAttributes<HTMLDivElement>>;
export default Table;
//# sourceMappingURL=Table.d.ts.map