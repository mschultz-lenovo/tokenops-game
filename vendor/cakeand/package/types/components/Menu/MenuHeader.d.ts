import React from 'react';
export interface MenuHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    /** Non-interactive label for the menu group that follows. */
    children: React.ReactNode;
}
/**
 * hello pc MenuHeader — a non-interactive group label for a Radix dropdown menu
 * (Figma "&menu.header", node 85:4481). It wraps `DropdownMenu.Label`, so the
 * label inherits the correct menu primitive semantics without adding a focus
 * stop or imitating a selectable menu item.
 */
export declare const MenuHeader: React.ForwardRefExoticComponent<MenuHeaderProps & React.RefAttributes<HTMLDivElement>>;
export default MenuHeader;
//# sourceMappingURL=MenuHeader.d.ts.map