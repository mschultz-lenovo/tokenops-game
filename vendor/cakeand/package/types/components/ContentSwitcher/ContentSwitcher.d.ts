import React from 'react';
import { ToggleGroup as RadixToggleGroup } from 'radix-ui';
export type ContentSwitcherSize = 'sm' | 'md';
export type ContentSwitcherIntent = 'primary' | 'secondary';
export interface ContentSwitcherOption {
    /** Identifies the segment; this is what `onValueChange` reports. */
    value: string;
    /** Visible label — or, when `iconOnly`, the segment's accessible name. */
    label: string;
    /** Glyph for the segment. Required when `iconOnly`. */
    icon?: React.ReactNode;
    /** Dims the segment and skips it in arrow-key navigation. @default false */
    disabled?: boolean;
}
export interface ContentSwitcherProps extends Omit<React.ComponentPropsWithoutRef<typeof RadixToggleGroup.Root>, 'type' | 'value' | 'defaultValue' | 'onValueChange' | 'children'> {
    /** The segments, in order. */
    options: ContentSwitcherOption[];
    /** Selected segment's value (controlled). */
    value?: string;
    /** Initially selected segment's value (uncontrolled). */
    defaultValue?: string;
    /** Fires with the newly selected value. Never fires with an empty value. */
    onValueChange?: (value: string) => void;
    /** Segment height: `sm` 32px, `md` 40px. @default 'md' */
    size?: ContentSwitcherSize;
    /**
     * Which token family drives the colors (Figma `style`): `primary` (indigo) or
     * `secondary` (neutral/ink).
     * @default 'primary'
     */
    intent?: ContentSwitcherIntent;
    /** Render icon-only segments; each option's `label` becomes its accessible name. */
    iconOnly?: boolean;
    /** Accessible name for the group — always provide one. */
    'aria-label'?: string;
}
export declare const ContentSwitcher: React.ForwardRefExoticComponent<ContentSwitcherProps & React.RefAttributes<HTMLDivElement>>;
export default ContentSwitcher;
//# sourceMappingURL=ContentSwitcher.d.ts.map