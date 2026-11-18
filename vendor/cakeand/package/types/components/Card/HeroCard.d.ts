import React from 'react';
export type HeroCardAlign = 'start' | 'center';
export interface HeroCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    /** Eyebrow text above the title (Figma "Leading text"). */
    leadingText?: React.ReactNode;
    /** Optional 24px icon before the leading text; inherits the text color. */
    leadingIcon?: React.ReactNode;
    /** The display title (Figma 42px `bold.42`). */
    title: React.ReactNode;
    /** Primary body paragraph (Figma 20px `regular.20.title`). */
    body?: React.ReactNode;
    /** Secondary body paragraph (Figma 16px `regular.16`). */
    secondaryBody?: React.ReactNode;
    /** Actions row — compose a hello pc **Button** (`fill` for hero, `tonal` for banner). */
    actions?: React.ReactNode;
    /**
     * `start` is the left-aligned hero (Figma `hero card`); `center` is the
     * centered banner (Figma `banner card`).
     * @default 'start'
     */
    align?: HeroCardAlign;
}
/**
 * The hero/banner card template. Fill the text props; drop a **Button** into
 * `actions`. Slot it into a `<Card>` for the surface and elevation.
 */
export declare const HeroCard: React.ForwardRefExoticComponent<HeroCardProps & React.RefAttributes<HTMLDivElement>>;
export default HeroCard;
//# sourceMappingURL=HeroCard.d.ts.map