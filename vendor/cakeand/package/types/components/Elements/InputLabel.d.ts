import React from 'react';
export interface InputLabelProps extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children'> {
    /** The label text. */
    children: React.ReactNode;
    /**
     * Type size: `md` 16px (standalone rows), `sm` 14px (inside form fields —
     * TextInput uses this).
     * @default 'md'
     */
    size?: 'sm' | 'md';
    /** Appends the "(required)" suffix, right-aligned after the text. @default false */
    required?: boolean;
    /** Shows a 16px info icon after the text (inherits the label color). @default false */
    showInfo?: boolean;
    /** Dims the label text + icon (the "(required)" suffix keeps its color). @default false */
    disabled?: boolean;
    /** The form control this label describes. */
    htmlFor?: string;
}
export declare const InputLabel: React.ForwardRefExoticComponent<InputLabelProps & React.RefAttributes<HTMLLabelElement>>;
//# sourceMappingURL=InputLabel.d.ts.map