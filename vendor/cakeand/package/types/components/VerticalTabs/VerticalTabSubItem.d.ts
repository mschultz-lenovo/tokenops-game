import React from 'react';
import { Tabs as RadixTabs } from 'radix-ui';
export interface VerticalTabSubItemProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger> {
    /** Value linking this row to its `VerticalTabsContent` panel. */
    value: string;
    /** The row label. */
    children: React.ReactNode;
    /** Dims the row and drops it from the tab order. @default false */
    disabled?: boolean;
}
export declare const VerticalTabSubItem: React.ForwardRefExoticComponent<VerticalTabSubItemProps & React.RefAttributes<HTMLButtonElement>>;
export default VerticalTabSubItem;
//# sourceMappingURL=VerticalTabSubItem.d.ts.map