import React from 'react';
import { Tabs as RadixTabs } from 'radix-ui';
export interface SidebarSubItemProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger> {
    /** Value linking this row to its `SidebarContent` panel. */
    value: string;
    /** The row label. */
    children: React.ReactNode;
    /** Dims the row and drops it from the tab order. @default false */
    disabled?: boolean;
}
export declare const SidebarSubItem: React.ForwardRefExoticComponent<SidebarSubItemProps & React.RefAttributes<HTMLButtonElement>>;
export default SidebarSubItem;
//# sourceMappingURL=SidebarSubItem.d.ts.map