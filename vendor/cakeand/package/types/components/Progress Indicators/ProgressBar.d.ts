import React from 'react';
import { Progress as RadixProgress } from 'radix-ui';
import { type HelperTone } from '../Elements/HelperString';
export type ProgressBarColor = 'info' | 'primary' | 'secondary' | 'success' | 'warn' | 'error';
export type ProgressBarWidth = 'thin' | 'thick';
export interface ProgressBarProps extends Omit<React.ComponentPropsWithoutRef<typeof RadixProgress.Root>, 'children' | 'value' | 'max'> {
    /** Current determinate progress. Values outside 0–max are visually clamped. @default 30 */
    value?: number;
    /** Maximum progress value. @default 100 */
    max?: number;
    /**
     * Semantic indicator color from the Figma `color` variants.
     * @default 'info'
     */
    color?: ProgressBarColor;
    /**
     * Figma track thickness: `thin` is 12px; `thick` is 18px.
     * @default 'thick'
     */
    width?: ProgressBarWidth;
    /** Label shown above the progress track. When provided it labels the Radix progressbar. @default 'Label' */
    label?: React.ReactNode;
    /** Value aligned at the end of the label row, e.g. `40MB`. @default '40MB' */
    labelValue?: React.ReactNode;
    /** Shows the 16px informational glyph after the label. @default true */
    showLabelIcon?: boolean;
    /** Helper content beneath the track. @default 'Example helper string' */
    helperText?: React.ReactNode;
    /** Shows the helper row beneath the track. @default true */
    showHelper?: boolean;
    /** Shows the 16px HelperString icon before the helper text. @default true */
    showHelperIcon?: boolean;
    /**
     * Shows the calculated percentage at the right of the helper row.
     * @default true
     */
    showValue?: boolean;
    /** Semantic tone for the reusable HelperString. @default 'greyscale' */
    helperTone?: HelperTone;
    /** Accessible name used when no visible `label` is supplied. @default 'Progress' */
    'aria-label'?: string;
}
/**
 * hello pc ProgressBar — determinate progress feedback (Figma `&progress bar`,
 * node 87:4707). It wraps Radix `Progress`, reuses HelperString for its
 * optional feedback row, and exposes the six Figma semantic color treatments.
 */
export declare const ProgressBar: React.ForwardRefExoticComponent<ProgressBarProps & React.RefAttributes<HTMLDivElement>>;
export default ProgressBar;
//# sourceMappingURL=ProgressBar.d.ts.map