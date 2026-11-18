import React from 'react';
export type PaginationVariant = 'numbers' | 'dropdown';
/** One rendered slot in the pager: a page, or a collapsed run of pages. */
type PageCell = {
    type: 'page';
    page: number;
} | {
    type: 'ellipsis';
    pages: number[];
};
/**
 * Decide which pages get their own button. Always keeps the first, last, and
 * current page, then grows a window outwards from the current page until the
 * budget is spent; whatever is left over collapses into "…" runs.
 */
export declare const buildPageCells: (count: number, current: number, max?: number) => PageCell[];
export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
    /** Total number of pages. */
    count: number;
    /** Controlled current page (1-based). */
    page?: number;
    /** Uncontrolled initial page (1-based). @default 1 */
    defaultPage?: number;
    /** Fires with the new page whenever the user navigates. */
    onPageChange?: (page: number) => void;
    /**
     * `numbers` renders a button per page (Figma simple/complex); `dropdown`
     * renders a NumberDropdown + "of N pages" (Figma dropdown).
     * @default 'numbers'
     */
    variant?: PaginationVariant;
    /**
     * Maximum page buttons before the middle collapses behind a "…" menu (Figma
     * `complex`). Omit to render every page (Figma `simple`).
     */
    maxPageButtons?: number;
    /** Renders the jump-to-first / jump-to-last controls. @default true */
    showFirstLast?: boolean;
    /** Accessible name for the nav landmark. @default 'Pagination' */
    label?: string;
}
export declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLElement>>;
export default Pagination;
//# sourceMappingURL=Pagination.d.ts.map