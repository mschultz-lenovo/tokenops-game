import React from 'react';
import { Progress as RadixProgress } from 'radix-ui';
export type SpinnerColor = 'primary' | 'greyscale';
export type SpinnerFill = 'all' | '3/4' | '2/3' | '1/2' | '1/3' | '1/4' | '1/8' | 'none';
export type SpinnerSize = 'sm' | 'md' | 'lg';
export interface SpinnerProps extends Omit<React.ComponentPropsWithoutRef<typeof RadixProgress.Root>, 'children' | 'max' | 'value'> {
    /**
     * Semantic color treatment from the Figma `color` variant.
     * @default 'primary'
     */
    color?: SpinnerColor;
    /**
     * Visual arc from the Figma `filled` variant. This is deliberately visual
     * only: Spinner always exposes indeterminate progress semantics.
     * @default '3/4'
     */
    fill?: SpinnerFill;
    /**
     * Figma size: `sm` is 16px, `md` is 24px, and `lg` is 32px.
     * @default 'lg'
     */
    size?: SpinnerSize;
    /**
     * Rotates the visual arc to indicate ongoing work. Reduced-motion users see
     * the same static arc.
     * @default true
     */
    animated?: boolean;
    /** Accessible name announced for the indeterminate loading indicator. @default 'Loading' */
    'aria-label'?: string;
}
/**
 * hello pc Spinner — an indeterminate circular loading indicator based on Figma
 * node 90:4969. Radix Progress owns its `progressbar` semantics; the visual
 * arc and animation are token-based and re-theme with hello pc modes.
 */
export declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<HTMLDivElement>>;
export default Spinner;
//# sourceMappingURL=Spinner.d.ts.map