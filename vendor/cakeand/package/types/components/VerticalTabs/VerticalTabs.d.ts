import React from 'react';
import { Tabs as RadixTabs } from 'radix-ui';
export interface VerticalTabsProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.Root> {
    /** The selected tab's value (controlled). */
    value?: string;
    /** The initially selected tab's value (uncontrolled). */
    defaultValue?: string;
    /** Fires with the newly selected tab's value. */
    onValueChange?: (value: string) => void;
    /**
     * `automatic` selects a tab as soon as it receives focus; `manual` waits for
     * Enter/Space. Use `manual` when switching tabs is expensive.
     * @default 'automatic'
     */
    activationMode?: 'automatic' | 'manual';
}
/** The tabs root. Forces `orientation="vertical"` so Radix wires up Up/Down
 *  arrow navigation instead of Left/Right. */
export declare const VerticalTabs: React.ForwardRefExoticComponent<VerticalTabsProps & React.RefAttributes<HTMLDivElement>>;
export interface VerticalTabsListProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.List> {
    /** Accessible name for the rail — always give it one. */
    'aria-label'?: string;
}
/** The rail that holds the tab rows (`role="tablist"`). */
export declare const VerticalTabsList: React.ForwardRefExoticComponent<VerticalTabsListProps & React.RefAttributes<HTMLDivElement>>;
export interface VerticalTabsContentProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.Content> {
    /** Matches the `value` of the row that reveals this panel. */
    value: string;
}
/** A tab panel (`role="tabpanel"`), shown when its `value` is selected. */
export declare const VerticalTabsContent: React.ForwardRefExoticComponent<VerticalTabsContentProps & React.RefAttributes<HTMLDivElement>>;
export default VerticalTabs;
//# sourceMappingURL=VerticalTabs.d.ts.map