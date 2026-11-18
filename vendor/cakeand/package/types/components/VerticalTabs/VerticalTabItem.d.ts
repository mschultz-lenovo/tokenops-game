import React from 'react';
import { Tabs as RadixTabs } from 'radix-ui';
export interface VerticalTabItemProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger> {
    /** Value linking this row to its `VerticalTabsContent` panel. */
    value: string;
    /** The row label. */
    children: React.ReactNode;
    /** Dims the row and drops it from the tab order. @default false */
    disabled?: boolean;
    /**
     * Marks this row as owning sub-items and sets their disclosure state. Passing
     * it renders the trailing chevron and sets `aria-expanded`; leave it
     * undefined for a plain row.
     */
    expanded?: boolean;
    /** Fires with the next disclosure state when a collapsible row is activated. */
    onExpandedChange?: (expanded: boolean) => void;
}
export declare const VerticalTabItem: React.ForwardRefExoticComponent<VerticalTabItemProps & React.RefAttributes<HTMLButtonElement>>;
export default VerticalTabItem;
//# sourceMappingURL=VerticalTabItem.d.ts.map