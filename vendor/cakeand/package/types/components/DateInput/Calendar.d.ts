import React from 'react';
export type CalendarMode = 'single' | 'range';
export type CalendarView = 'day' | 'month' | 'year';
export interface CalendarRangeValue {
    start: Date | null;
    end: Date | null;
}
export interface CalendarProps {
    /**
     * Single-date grid or a start/end range (Figma selected 1 vs selected 2).
     * @default 'single'
     */
    mode?: CalendarMode;
    /** Controlled selected date for `mode="single"`. */
    value?: Date | null;
    /** Uncontrolled initial date for `mode="single"`. */
    defaultValue?: Date | null;
    /** Fires on each day click in single mode (draft). OK still goes through `onConfirm`. */
    onValueChange?: (date: Date | null) => void;
    /** Controlled start/end for `mode="range"`. */
    rangeValue?: CalendarRangeValue;
    /** Uncontrolled initial range. */
    defaultRangeValue?: CalendarRangeValue;
    /** Fires on each range-draft change. */
    onRangeValueChange?: (range: CalendarRangeValue) => void;
    /**
     * Starting inner view. Stories use this to show the month/year pickers.
     * @default 'day'
     */
    defaultView?: CalendarView;
    /** Accessible name for the panel. @default 'Choose date' */
    'aria-label'?: string;
    /** Footer Today — jumps the grid to today and selects it. */
    onToday?: () => void;
    /** Footer Cancel. */
    onCancel?: () => void;
    /** Footer OK. Receives the draft single date or range. */
    onConfirm?: (next: Date | CalendarRangeValue | null) => void;
}
export declare const Calendar: React.ForwardRefExoticComponent<CalendarProps & React.RefAttributes<HTMLDivElement>>;
export default Calendar;
//# sourceMappingURL=Calendar.d.ts.map