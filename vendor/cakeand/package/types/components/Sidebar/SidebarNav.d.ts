import React from 'react';
export type SidebarNavSurface = 'translucent' | 'solid';
export interface SidebarNavUser {
    /** Display name, shown beside the avatar when expanded. */
    name: string;
    /** Avatar node. Defaults to a 32px hello pc `Avatar` using the name's initial. */
    avatar?: React.ReactNode;
    /** Fires when the user row's trailing control is activated. Renders it when set. */
    onAction?: React.MouseEventHandler<HTMLButtonElement>;
    /** Accessible name for that control. @default 'Account options' */
    actionLabel?: string;
}
export interface SidebarNavProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
    /** The rows: `SidebarItem`, `SidebarBlock`, `SidebarSectionHeader`, … */
    children: React.ReactNode;
    /** Accessible name for the rail. Always provide one. */
    'aria-label'?: string;
    /** Collapses to the 80px icon rail. @default false */
    collapsed?: boolean;
    /** Fires with the next collapsed state when the toggle is activated. Renders the toggle when set. */
    onCollapsedChange?: (collapsed: boolean) => void;
    /** Accessible name for the toggle while expanded. @default 'Collapse sidebar' */
    collapseLabel?: string;
    /** Accessible name for the toggle while collapsed. @default 'Expand sidebar' */
    expandLabel?: string;
    /** Brand mark, rendered in a 32px slot. */
    logo?: React.ReactNode;
    /** Product or org name, above the app name (Figma "Lenovo"). */
    productName?: React.ReactNode;
    /** App name (Figma "Appname"). */
    appName?: React.ReactNode;
    /**
     * Surface treatment (Figma `platform`): `translucent` sits on whatever is
     * behind it (`platform=windows`); `solid` is an opaque panel with a
     * right-hand edge (`platform=web`).
     * @default 'translucent'
     */
    surface?: SidebarNavSurface;
    /** The signed-in user, shown in the footer. */
    user?: SidebarNavUser;
}
export declare const SidebarNav: React.ForwardRefExoticComponent<SidebarNavProps & React.RefAttributes<HTMLElement>>;
export default SidebarNav;
//# sourceMappingURL=SidebarNav.d.ts.map