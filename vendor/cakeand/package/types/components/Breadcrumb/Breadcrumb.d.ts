import React from 'react';
export interface BreadcrumbItem {
    /** Visible crumb label. */
    label: React.ReactNode;
    /** Destination. Omit for a crumb that isn't navigable. */
    href?: string;
    /** Activation handler — use for router-driven navigation. */
    onClick?: React.MouseEventHandler<HTMLElement>;
}
export interface BreadcrumbProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
    /** The trail, root first. The **last** item is the current page. */
    items: BreadcrumbItem[];
    /**
     * Collapse the middle of the trail behind a "…" overflow menu once the trail
     * is longer than this (Figma `style=complex`). Leave unset for the full
     * inline trail (`style=simple`).
     */
    maxItems?: number;
    /** How many leading crumbs stay visible when collapsed. @default 1 */
    itemsBeforeCollapse?: number;
    /** How many trailing crumbs stay visible when collapsed. @default 2 */
    itemsAfterCollapse?: number;
    /** Accessible name for the nav landmark. @default 'Breadcrumb' */
    label?: string;
    /** Accessible name for the overflow control. @default 'Show hidden breadcrumbs' */
    overflowLabel?: string;
}
export declare const Breadcrumb: React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLElement>>;
export default Breadcrumb;
//# sourceMappingURL=Breadcrumb.d.ts.map