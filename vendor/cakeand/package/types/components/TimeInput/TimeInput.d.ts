import React from 'react';
export type TimePeriod = 'AM' | 'PM';
/** The independent segments of a 12-hour clock value. Empty strings represent an incomplete entry. */
export interface TimeValue {
    hours: string;
    minutes: string;
    period: TimePeriod;
}
/** Start and end values used by `mode="range"`. */
export interface TimeRangeValue {
    start: TimeValue;
    end: TimeValue;
}
type TimeStatus = 'default' | 'success' | 'error';
/** Clock digits typed across hours (and overflow into minutes). Four digits
 *  `HHMM` split into a 12-hour value; 13–23 (and 00) switch AM/PM. */
export declare const parseClockDigits: (digits: string, fallbackPeriod: TimePeriod) => TimeValue;
export interface TimeInputProps {
    /** Renders one time control or the Figma start/end range pair. @default 'single' */
    mode?: 'single' | 'range';
    /** Label for the single control. @default 'Select time' */
    label?: string;
    /** Label for the range start control. @default 'Start time' */
    startLabel?: string;
    /** Label for the range end control. @default 'End time' */
    endLabel?: string;
    /** Shows the InputLabel info icon(s). @default false */
    showLabelInfo?: boolean;
    /** Shows "(required)" and marks every native time segment required. @default false */
    required?: boolean;
    /** Helper content below the field(s). Defaults to the matching Figma guidance. */
    helperText?: React.ReactNode;
    /** Hides the shared HelperString. @default true */
    showHelper?: boolean;
    /** Validation state for all time controls. @default 'default' */
    status?: TimeStatus;
    /** Disables every segment and period choice. @default false */
    disabled?: boolean;
    /** Controlled value for `mode="single"`. */
    value?: TimeValue;
    /** Uncontrolled initial value for `mode="single"`. */
    defaultValue?: TimeValue;
    /** Fires with a complete segment object whenever a single value changes. */
    onValueChange?: (value: TimeValue) => void;
    /** Controlled start/end values for `mode="range"`. */
    rangeValue?: TimeRangeValue;
    /** Uncontrolled initial start/end values for `mode="range"`. */
    defaultRangeValue?: TimeRangeValue;
    /** Fires with both segment objects whenever either range value changes. */
    onRangeValueChange?: (value: TimeRangeValue) => void;
    /** Accessible name for a labelless single time control. */
    'aria-label'?: string;
}
export declare const TimeInput: React.ForwardRefExoticComponent<TimeInputProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=TimeInput.d.ts.map