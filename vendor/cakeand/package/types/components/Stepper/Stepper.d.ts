import React from 'react';
export type StepperOrientation = 'horizontal' | 'vertical';
export type StepperStage = 'complete' | 'current' | 'incomplete';
export interface StepperStep {
    /** Step title (Figma `stepTitle`). */
    title: string;
    /** Optional description under the title (Figma `stepDescription`). */
    description?: string;
}
export interface StepperProps extends Omit<React.ComponentPropsWithoutRef<'nav'>, 'children'> {
    /** Ordered steps to render. */
    steps: StepperStep[];
    /**
     * 0-based index of the current step. Steps before it are `complete`; steps
     * after it are `incomplete`.
     * @default 0
     */
    activeIndex?: number;
    /**
     * Layout axis — Figma `&vertical.stepper` / `&horizontal.stepper`.
     * @default 'vertical'
     */
    orientation?: StepperOrientation;
    /**
     * When `false`, hides every step's description (Figma `showDescription`).
     * @default true
     */
    showDescription?: boolean;
    /**
     * Fired when a non-current step is activated. Omit to keep the stepper
     * display-only.
     */
    onStepClick?: (index: number) => void;
    /**
     * Accessible name for the landmark. Provide this (or `aria-labelledby`) so
     * assistive tech announces what the steps are for.
     * @default 'Progress'
     */
    'aria-label'?: string;
}
export declare const Stepper: React.ForwardRefExoticComponent<StepperProps & React.RefAttributes<HTMLElement>>;
export default Stepper;
//# sourceMappingURL=Stepper.d.ts.map