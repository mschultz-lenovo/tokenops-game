import React from 'react';
export interface SidebarSectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The group label, e.g. "Features". */
    children: React.ReactNode;
}
/**
 * A group label inside the rail.
 *
 * **Collapses to a rule.** In Figma's collapsed variants this slot renders a
 * divider instead of the label (node 160:9430 in place of 160:9458) — an 80px
 * rail has no room for a word, and a truncated "Feat…" is worse than a clean
 * separator. The grouping is still conveyed, just by the rule.
 *
 * Not a tab — and a `tablist` is specified to contain only tabs — so assistive
 * tech reads this as plain text rather than a group boundary. When the grouping
 * is semantically important, give each section its own `SidebarList` labelled by
 * a real heading instead.
 */
export declare const SidebarSectionHeader: React.ForwardRefExoticComponent<SidebarSectionHeaderProps & React.RefAttributes<HTMLDivElement>>;
export type SidebarDividerProps = React.HTMLAttributes<HTMLDivElement>;
/** A rule between groups. Decorative, so it's hidden from assistive tech — the
 *  section labels and row names already convey the structure. */
export declare const SidebarDivider: React.ForwardRefExoticComponent<SidebarDividerProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SidebarSection.d.ts.map