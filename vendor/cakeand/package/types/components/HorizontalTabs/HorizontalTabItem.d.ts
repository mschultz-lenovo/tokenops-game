import React from 'react';
import { Tabs as RadixTabs } from 'radix-ui';
export interface HorizontalTabItemProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger> {
    /** Value linking this tab to its `HorizontalTabsContent` panel. */
    value: string;
    /** The tab label. */
    children: React.ReactNode;
    /** Dims the tab and drops it from the tab order. @default false */
    disabled?: boolean;
}
export declare const HorizontalTabItem: React.ForwardRefExoticComponent<HorizontalTabItemProps & React.RefAttributes<HTMLButtonElement>>;
export default HorizontalTabItem;
//# sourceMappingURL=HorizontalTabItem.d.ts.map