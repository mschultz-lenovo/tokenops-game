import React from 'react';
export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Label text above the field (renders an `InputLabel`, wired via `htmlFor`). */
    label?: string;
    /** Shows the label's 16px info icon. @default false */
    showLabelInfo?: boolean;
    /**
     * Marks the field required: appends the label's "(required)" suffix and sets
     * the native `required` attribute.
     * @default false
     */
    required?: boolean;
    /** Helper text below the field (renders a `HelperString`, wired via `aria-describedby`). */
    helperText?: React.ReactNode;
    /**
     * Validation state: tints the field and the helper with the success/error
     * tokens and sets `aria-invalid` on error.
     * @default 'default'
     */
    status?: 'default' | 'success' | 'error';
    /** Field height: `md` 40px (24px slot icons), `sm` 32px (18px icons). @default 'md' */
    size?: 'sm' | 'md';
    /** Leading icon/content inside the field (inherits `--color-text-icon-secondary`). */
    startIcon?: React.ReactNode;
    /** Trailing icon/content inside the field. */
    endIcon?: React.ReactNode;
    /** Character limit — sets the native `maxLength` and shows the helper counter. */
    maxLength?: number;
}
export declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=TextInput.d.ts.map