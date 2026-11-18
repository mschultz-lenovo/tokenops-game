import React from 'react';
import { RadioGroup as RadixRadioGroup } from 'radix-ui';
export type RatingCount = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
/** One choice on the scale (Figma `&rating.option`). */
export interface RatingOption {
    /** Value reported through `onValueChange` / form submission. */
    value: string;
    /** Text inside the tile — the number, or "N/A". */
    label: string;
    /** Optional caption under the tile (up to two lines). */
    caption?: string;
    /** Locks this option. A selected option stays visibly selected while disabled. */
    disabled?: boolean;
}
export interface RatingProps extends Omit<React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Root>, 'children' | 'orientation' | 'asChild' | 'dir' | 'loop'> {
    /**
     * How many numbered options, 1 through `count` (Figma `count`, 2–10).
     * Ignored when `options` is set.
     * @default 5
     */
    count?: RatingCount;
    /**
     * Captions for the numbered options, index-aligned with 1…`count`
     * (e.g. `['No', 'Maybe', 'Yes']`). Missing entries render without a caption.
     */
    captions?: string[];
    /**
     * Show the captions under the tiles (Figma `showCaption`).
     * @default true
     */
    showCaptions?: boolean;
    /**
     * Adds a leading "N/A" option, separated from the scale by a divider
     * (Figma `showNa`). Its value is `"na"`.
     * @default false
     */
    showNa?: boolean;
    /** Tile text of the N/A option. @default 'N/A' */
    naLabel?: string;
    /** Caption of the N/A option. @default 'Unrated' */
    naCaption?: string;
    /**
     * Full control over the scale: replaces `count` / `captions`, for custom
     * values, labels, or per-option `disabled`. The N/A option (`showNa`) is
     * still prepended.
     */
    options?: RatingOption[];
}
/**
 * hello pc Rating — a horizontal scale of numbered options, 1 to `count`, each
 * with an optional caption, plus an optional leading N/A (Figma `&rating`,
 * page "Detailed Rating", node 16702:972). Use it for satisfaction and Likert
 * questions where the answer is one point on a scale.
 *
 * Built on Radix `RadioGroup`: a `radiogroup` of `radio`s with roving focus,
 * arrow-key selection, `name` / `required` form support. Colors come from the
 * `--color-control-*` tokens, which map to Windows system colors in win hct.
 */
export declare const Rating: React.ForwardRefExoticComponent<RatingProps & React.RefAttributes<HTMLDivElement>>;
export default Rating;
//# sourceMappingURL=Rating.d.ts.map