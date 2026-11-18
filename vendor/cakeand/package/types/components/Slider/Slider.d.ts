import React from 'react';
export type SliderType = 'continuous' | 'discrete';
interface SharedSliderProps {
    /** Continuous track or discrete track with evenly spaced tick marks. @default 'continuous' */
    type?: SliderType;
    /** Minimum selectable value. @default 0 */
    min?: number;
    /** Maximum selectable value. @default 100 */
    max?: number;
    /** Keyboard/pointer increment and discrete step size. @default 1 */
    step?: number;
    /** Number of visual tick marks in discrete mode, including both endpoints. @default 9 */
    tickCount?: number;
    /** Shows the minimum and maximum values beside the track. @default true */
    showEndpoints?: boolean;
    /** Shows synchronized NumberInput control(s). @default true */
    showValueInput?: boolean;
    /** Non-editable suffix shown by the NumberInput controls. @default '%' */
    inputSuffix?: React.ReactNode;
    /** Formats endpoint labels, thumb markers, and accessible value text. */
    formatValue?: (value: number) => React.ReactNode;
    /** Disables pointer, keyboard, and NumberInput interaction. @default false */
    disabled?: boolean;
    /** Form field name passed to Radix Slider. */
    name?: string;
    /** Width of the complete slider row (number = px). */
    width?: number | string;
    /** Applied to the outer layout row. */
    className?: string;
    /** Applied to the outer layout row. */
    style?: React.CSSProperties;
    /** Fires continuously while a thumb moves. */
    onValueChange?: (value: number[]) => void;
    /** Fires when pointer/keyboard interaction finishes. */
    onValueCommit?: (value: number[]) => void;
}
export interface SliderProps extends Omit<SharedSliderProps, 'onValueChange' | 'onValueCommit'> {
    /** Controlled value. */
    value?: number;
    /** Initial value for uncontrolled usage. @default 50 */
    defaultValue?: number;
    /** Accessible name applied to the thumb. */
    'aria-label'?: string;
    /** Fires continuously while the value changes. */
    onValueChange?: (value: number) => void;
    /** Fires when pointer/keyboard interaction finishes. */
    onValueCommit?: (value: number) => void;
}
export interface RangeSliderProps extends Omit<SharedSliderProps, 'onValueChange' | 'onValueCommit'> {
    /** Controlled lower and upper values. */
    value?: readonly [number, number];
    /** Initial lower and upper values for uncontrolled usage. @default [10, 50] */
    defaultValue?: readonly [number, number];
    /** Minimum number of `step` increments kept between thumbs. @default 0 */
    minStepsBetweenThumbs?: number;
    /** Accessible names for the lower and upper thumbs. */
    'aria-label'?: readonly [string, string];
    /** Fires continuously with the lower and upper values. */
    onValueChange?: (value: [number, number]) => void;
    /** Fires when pointer/keyboard interaction finishes. */
    onValueCommit?: (value: [number, number]) => void;
}
/**
 * hello pc Slider (Figma 125:6383) wraps Radix Slider for selecting one value.
 * It composes NumberInput when `showValueInput` is enabled.
 */
export declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLSpanElement>>;
/**
 * hello pc RangeSlider (Figma 125:7821) wraps the same Radix Slider primitive
 * with two thumbs and synchronized NumberInput controls.
 */
export declare const RangeSlider: React.ForwardRefExoticComponent<RangeSliderProps & React.RefAttributes<HTMLSpanElement>>;
export default Slider;
//# sourceMappingURL=Slider.d.ts.map