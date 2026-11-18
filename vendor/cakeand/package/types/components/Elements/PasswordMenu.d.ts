import React from 'react';
export type PasswordStrength = 'empty' | 'weak' | 'medium' | 'strong';
/**
 * A password policy rule. `metAt` declares the lowest password strength at
 * which the rule is treated as satisfied.
 */
export interface PasswordRequirement {
    /** Stable key for the rule. */
    id: string;
    /** Human-readable policy requirement. */
    label: string;
    /** Lowest strength at which the requirement is considered satisfied. */
    metAt: Exclude<PasswordStrength, 'empty'>;
}
export interface PasswordMenuProps {
    /**
     * Password strength supplied by the owning password field. This component
     * displays policy feedback only and never calculates or stores a password.
     * @default 'empty'
     */
    strength?: PasswordStrength;
    /** Title in the card header. @default 'Pick a password' */
    title?: string;
    /** Overrides the visible strength status line. */
    statusLabel?: string;
    /** Requirement list; defaults to the four Figma criteria. */
    requirements?: PasswordRequirement[];
    /**
     * Explicitly satisfied requirement ids. When omitted, satisfaction follows
     * the Figma strength progression; password fields should provide it when
     * individual policy rules can be met out of order.
     */
    metRequirementIds?: string[];
    /**
     * Optional field label above the menu, composed through `InputLabel`. Pass
     * `htmlFor` to associate it with the owning password input.
     */
    label?: string;
    /** The password field described by the optional external label. */
    htmlFor?: string;
    /** Shows the optional label's 16px info icon. @default false */
    showLabelInfo?: boolean;
    /** Appends the optional label's "(required)" suffix. @default false */
    required?: boolean;
    /** Dims the optional label. The menu remains readable feedback. @default false */
    disabled?: boolean;
    /** Accessible name for the card region when its title is insufficient. */
    'aria-label'?: string;
}
export declare const PasswordMenu: React.ForwardRefExoticComponent<PasswordMenuProps & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=PasswordMenu.d.ts.map