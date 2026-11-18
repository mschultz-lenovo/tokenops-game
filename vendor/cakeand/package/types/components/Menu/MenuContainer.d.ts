import React from 'react';
export interface MenuContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Menu content: Menu Header, Menu Item, Divider, or any custom nodes. */
    children: React.ReactNode;
    /**
     * Caps the content height and enables the Radix scroll area. When content
     * fits within this height no scrollbar is shown.
     */
    maxHeight?: number | string;
    /**
     * Container width. The Figma specimen is 320px; pass a number (px) or any CSS
     * width (e.g. `'100%'`).
     * @default 320
     */
    width?: number | string;
}
export declare const MenuContainer: React.ForwardRefExoticComponent<MenuContainerProps & React.RefAttributes<HTMLDivElement>>;
export default MenuContainer;
//# sourceMappingURL=MenuContainer.d.ts.map