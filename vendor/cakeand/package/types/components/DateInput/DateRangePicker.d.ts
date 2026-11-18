import React from 'react';
import { type DateInputProps } from './DateInput';
/**
 * hello pc Date Range Picker — the Figma combined Date Input (`type=double`,
 * node 4890:19510) plus a range Calendar (selected 2). A thin mode wrapper
 * around DateInput so products can import a named range control without
 * passing `mode`.
 */
export type DateRangePickerProps = Omit<DateInputProps, 'mode' | 'value' | 'defaultValue' | 'onValueChange' | 'aria-label'>;
export declare const DateRangePicker: React.ForwardRefExoticComponent<DateRangePickerProps & React.RefAttributes<HTMLDivElement>>;
export default DateRangePicker;
//# sourceMappingURL=DateRangePicker.d.ts.map