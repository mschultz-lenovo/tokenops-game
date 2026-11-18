import React from 'react';
import { Separator as RadixSeparator } from 'radix-ui';
export type DividerDirection = 'horizontal' | 'vertical';
export type DividerWeight = 'primary' | 'weak';
export interface DividerProps extends Omit<React.ComponentPropsWithoutRef<typeof RadixSeparator.Root>, 'orientation' | 'children'> {
    /**
     * The direction of the visual rule (mapped to the Radix Separator
     * `orientation`). Vertical dividers stretch to the containing flex/grid
     * row’s height.
     * @default 'horizontal'
     */
    direction?: DividerDirection;
    /** Visual stroke contrast from Figma: standard `primary` or subtle `weak`. @default 'primary' */
    weight?: DividerWeight;
}
/**
 * hello pc Divider — a separator (Figma "Divider", node 83:4471) built on the
 * Radix `Separator` primitive, which owns the semantics (`role="separator"`,
 * `aria-orientation`, and the `decorative` opt-out). hello pc supplies the 1px
 * tokenized rule inside Figma’s 2px clear inset, filling its parent in the
 * selected direction.
 */
export declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLDivElement>>;
export default Divider;
//# sourceMappingURL=Divider.d.ts.map