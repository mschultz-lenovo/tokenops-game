import React from 'react';
export interface VerticalTabsSectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The group label, e.g. "General" or "Settings". */
    children: React.ReactNode;
}
/**
 * A group label inside the rail.
 *
 * Note this is not a tab, and a `tablist` is specified to contain only tabs —
 * so the label is visual grouping that assistive tech reads as plain text, not
 * as a group boundary. When the grouping is semantically important, give each
 * section its own `VerticalTabsList` labelled by a real heading instead (see
 * the Vertical Tabs docs).
 */
export declare const VerticalTabsSectionHeader: React.ForwardRefExoticComponent<VerticalTabsSectionHeaderProps & React.RefAttributes<HTMLDivElement>>;
export type VerticalTabsDividerProps = React.HTMLAttributes<HTMLDivElement>;
/** A rule between groups. Purely decorative, so it's hidden from assistive tech
 *  — the section labels and tab names already convey the structure. */
export declare const VerticalTabsDivider: React.ForwardRefExoticComponent<VerticalTabsDividerProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=VerticalTabsSection.d.ts.map