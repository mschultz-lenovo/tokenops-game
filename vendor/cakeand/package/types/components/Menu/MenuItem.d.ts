import React from 'react';
export type MenuItemVariant = 'item' | 'sub-item';
export interface MenuItemProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'type'> {
    /** Visible row label. */
    children: React.ReactNode;
    /** Figma `Menu Items` row or its indented `Menu Subitems` variation. @default 'item' */
    variant?: MenuItemVariant;
    /** Applies the Figma primary-tonal selected treatment. @default false */
    selected?: boolean;
    /** Disables the action and dims all row content. @default false */
    disabled?: boolean;
    /** Shows the 16px leading slot. @default true */
    showLeftSlot?: boolean;
    /** Decorative leading content; defaults to the Figma refresh glyph. */
    leftSlot?: React.ReactNode;
    /** Shows the 16px trailing slot. @default true */
    showRightSlot?: boolean;
    /** Decorative trailing content; defaults to the Figma check glyph. */
    rightSlot?: React.ReactNode;
    /**
     * Shows the reusable 24px Checkbox before the row action. This is only
     * available on the top-level `item` variation, matching Figma.
     * @default false
     */
    showCheckbox?: boolean;
    /** Controlled state for the optional Checkbox. */
    checked?: boolean;
    /** Uncontrolled initial state for the optional Checkbox. @default false */
    defaultChecked?: boolean;
    /** Fires with the next optional Checkbox value. */
    onCheckedChange?: (checked: boolean) => void;
}
export declare const MenuItem: React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=MenuItem.d.ts.map