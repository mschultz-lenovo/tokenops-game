import React from 'react';
/**
 * hello pc SidebarBlock — a grouped sidebar section (Figma ".elements/
 * sidebar_block", node 157:9049): a parent `SidebarItem` sitting full-bleed
 * across the top of a tinted panel, with its `SidebarSubItem`s stacked beneath.
 *
 * Purely presentational — it groups rows and paints the surface. The rows keep
 * their own Radix `Tabs.Trigger` behavior, so the block still lives inside a
 * `SidebarList` and takes part in the same roving-focus rail.
 */
/**
 * Figma calls this axis `platform` (windows / web). Named for what it does
 * here, since a component library has no platform: `translucent` is the
 * acrylic-style wash, `solid` the flat panel.
 */
export type SidebarBlockSurface = 'translucent' | 'solid';
export interface SidebarBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The parent row — a `SidebarItem`, rendered full-bleed across the top. */
    item: React.ReactNode;
    /** The nested `SidebarSubItem`s. Omit them while the group is collapsed. */
    children?: React.ReactNode;
    /**
     * Surface treatment (Figma `platform`): `translucent` is the acrylic wash
     * (`platform=windows`), `solid` the flat panel (`platform=web`).
     * @default 'translucent'
     */
    surface?: SidebarBlockSurface;
}
export declare const SidebarBlock: React.ForwardRefExoticComponent<SidebarBlockProps & React.RefAttributes<HTMLDivElement>>;
export default SidebarBlock;
//# sourceMappingURL=SidebarBlock.d.ts.map