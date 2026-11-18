import React from 'react';
import { Tabs as RadixTabs } from 'radix-ui';
export interface SidebarItemProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger> {
    /** Value linking this row to its `SidebarContent` panel. */
    value: string;
    /** The row label. */
    children: React.ReactNode;
    /** Leading 24px glyph. Inherits the row's color. */
    icon?: React.ReactNode;
    /** Dims the row and drops it from the tab order. @default false */
    disabled?: boolean;
    /**
     * Marks this row as owning sub-items and sets their disclosure state. Passing
     * it renders the trailing chevron and sets `aria-expanded`; leave it
     * undefined for a row with no children.
     */
    expanded?: boolean;
    /** Fires with the next disclosure state when a collapsible row is activated. */
    onExpandedChange?: (expanded: boolean) => void;
}
export declare const SidebarItem: React.ForwardRefExoticComponent<SidebarItemProps & React.RefAttributes<HTMLButtonElement>>;
export default SidebarItem;
//# sourceMappingURL=SidebarItem.d.ts.map