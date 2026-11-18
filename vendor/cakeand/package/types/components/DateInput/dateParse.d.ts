/**
 * Display-date helpers for Date Input / Calendar.
 *
 * Visible contract is always `MM/DD/YY`. Two-digit years expand with a
 * rolling window: `2000 + yy`, unless that lands more than
 * `YEAR_FUTURE_WINDOW` years ahead of now — then `1900 + yy`. In 2026 that
 * means `46` → 2046 and `47` → 1947. Four-digit typed years collapse to the
 * last two digits (`1984` → `84`) and then expand through the same window.
 */
/** Years ahead of the current calendar year that still map to 20xx. */
export declare const YEAR_FUTURE_WINDOW = 20;
export declare function expandTwoDigitYear(yy: number, now?: Date): number;
export declare function sanitizeDateDigits(value: string): string;
/** Progressive `MM/DD/YY` formatting. Eight digits (`MMDDYYYY`) collapse the year to YY. */
export declare function formatDateInput(value: string): string;
export declare function parseDisplayDate(value: string, now?: Date): Date | null;
export declare function isValidDisplayDate(value: string, now?: Date): boolean;
export declare function dateToDisplay(date: Date): string;
export declare function isoToDisplay(iso: string): string;
export declare function displayToIso(value: string, now?: Date): string;
export declare function startOfDay(date: Date): Date;
export declare function isSameDay(a: Date, b: Date): boolean;
export declare function startOfMonth(date: Date): Date;
export declare function addMonths(date: Date, count: number): Date;
export declare function compareDays(a: Date, b: Date): number;
//# sourceMappingURL=dateParse.d.ts.map