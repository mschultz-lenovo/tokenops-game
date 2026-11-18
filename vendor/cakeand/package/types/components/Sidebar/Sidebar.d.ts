import React from 'react';
import { Tabs as RadixTabs } from 'radix-ui';
export interface SidebarProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.Root> {
    /** The selected row's value (controlled). */
    value?: string;
    /** The initially selected row's value (uncontrolled). */
    defaultValue?: string;
    /** Fires with the newly selected row's value. */
    onValueChange?: (value: string) => void;
    /**
     * `automatic` selects a row as soon as it receives focus; `manual` waits for
     * Enter/Space. Use `manual` when switching views is expensive.
     * @default 'automatic'
     */
    activationMode?: 'automatic' | 'manual';
}
/** The sidebar root. Pins `orientation="vertical"` so Radix wires up Up/Down
 *  arrow navigation instead of Left/Right. */
export declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLDivElement>>;
export interface SidebarListProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.List> {
    /** Accessible name for the rail — always give it one. */
    'aria-label'?: string;
}
/** The rail that holds the sidebar rows (`role="tablist"`). */
export declare const SidebarList: React.ForwardRefExoticComponent<SidebarListProps & React.RefAttributes<HTMLDivElement>>;
export interface SidebarContentProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.Content> {
    /** Matches the `value` of the row that reveals this panel. */
    value: string;
}
/** A panel (`role="tabpanel"`), shown when its `value` is selected. */
export declare const SidebarContent: React.ForwardRefExoticComponent<SidebarContentProps & React.RefAttributes<HTMLDivElement>>;
export default Sidebar;
//# sourceMappingURL=Sidebar.d.ts.map