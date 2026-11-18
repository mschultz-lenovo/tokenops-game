import React from 'react';
export interface RowsPerPageProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
    /** Selectable page sizes. @default [10, 25, 50, 100] */
    options?: number[];
    /** Controlled rows-per-page value. */
    value?: number;
    /** Uncontrolled initial value. */
    defaultValue?: number;
    /** Fires with the new rows-per-page value. */
    onValueChange?: (value: number) => void;
    /** Text before the dropdown. @default 'Rows per page:' */
    label?: string;
    /** Total number of rows — renders the "1-25 of 123" range readout. */
    total?: number;
    /** Current page (1-based), used to compute the range. @default 1 */
    page?: number;
    /** Replaces the computed range text entirely. */
    rangeLabel?: React.ReactNode;
}
export declare const RowsPerPage: React.ForwardRefExoticComponent<RowsPerPageProps & React.RefAttributes<HTMLDivElement>>;
export default RowsPerPage;
//# sourceMappingURL=RowsPerPage.d.ts.map