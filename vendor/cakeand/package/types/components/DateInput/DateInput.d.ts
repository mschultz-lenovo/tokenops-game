import React from 'react';
export interface DateRangeValue {
    start: string;
    end: string;
}
type DateStatus = 'default' | 'success' | 'error';
export interface DateInputProps {
    /** Renders one date field or the Figma combined range field. @default 'single' */
    mode?: 'single' | 'range';
    /**
     * Visible label. Range mode uses one label for the combined control.
     * @default 'Select date' (single) / 'Select date range' (range)
     */
    label?: string;
    /** Accessible name for the range start segment. @default 'Start date' */
    startLabel?: string;
    /** Accessible name for the range end segment. @default 'End date' */
    endLabel?: string;
    /** Shows the InputLabel info icon. @default false */
    showLabelInfo?: boolean;
    /** Marks every date input required. @default false */
    required?: boolean;
    /** Helper content below the field, replacing the Figma default guidance. */
    helperText?: React.ReactNode;
    /** Hides the HelperString. @default true */
    showHelper?: boolean;
    /** Validation state for the field. @default 'default' */
    status?: DateStatus;
    /** Disables date typing and the calendar action. @default false */
    disabled?: boolean;
    /** Controlled MM/DD/YY value for `mode="single"`. */
    value?: string;
    /** Uncontrolled MM/DD/YY value for `mode="single"`. */
    defaultValue?: string;
    /** Fires with the formatted MM/DD/YY single-date value. */
    onValueChange?: (value: string) => void;
    /** Controlled MM/DD/YY start/end values for `mode="range"`. */
    rangeValue?: DateRangeValue;
    /** Uncontrolled MM/DD/YY start/end values for `mode="range"`. */
    defaultRangeValue?: DateRangeValue;
    /** Fires with start/end values whenever either range input changes. */
    onRangeValueChange?: (value: DateRangeValue) => void;
    /** Accessible name for a labelless single date field. */
    'aria-label'?: string;
}
export declare const DateInput: React.ForwardRefExoticComponent<DateInputProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=DateInput.d.ts.map