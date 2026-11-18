import React from 'react';
import { Tabs as RadixTabs } from 'radix-ui';
export interface HorizontalTabsProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.Root> {
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
/** The tabs root. Pins `orientation="horizontal"` so Radix wires Left/Right
 *  arrow navigation. */
export declare const HorizontalTabs: React.ForwardRefExoticComponent<HorizontalTabsProps & React.RefAttributes<HTMLDivElement>>;
export interface HorizontalTabsListProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.List> {
    /** Accessible name for the bar — always give it one. */
    'aria-label'?: string;
    /**
     * When to show the scroll chevrons: `auto` reveals them only once the tabs
     * overflow, `always` keeps them (disabled at the ends), `never` hides them
     * and leaves the strip to swipe/trackpad scrolling.
     * @default 'auto'
     */
    scrollButtons?: 'auto' | 'always' | 'never';
    /** Accessible name for the scroll-left control. @default 'Scroll tabs left' */
    prevLabel?: string;
    /** Accessible name for the scroll-right control. @default 'Scroll tabs right' */
    nextLabel?: string;
}
/**
 * The tab bar (`role="tablist"`). Scrolls horizontally when its tabs overflow,
 * with chevron controls composed from `IconButton`.
 */
export declare const HorizontalTabsList: React.ForwardRefExoticComponent<HorizontalTabsListProps & React.RefAttributes<HTMLDivElement>>;
export interface HorizontalTabsContentProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.Content> {
    /** Matches the `value` of the tab that reveals this panel. */
    value: string;
}
/** A tab panel (`role="tabpanel"`), shown when its `value` is selected. */
export declare const HorizontalTabsContent: React.ForwardRefExoticComponent<HorizontalTabsContentProps & React.RefAttributes<HTMLDivElement>>;
export default HorizontalTabs;
//# sourceMappingURL=HorizontalTabs.d.ts.map