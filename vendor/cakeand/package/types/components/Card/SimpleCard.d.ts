import React from 'react';
export interface SimpleCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    /** Full-bleed media on top — an image or any node; clipped to the Card's corners. */
    media?: React.ReactNode;
    /** The card title (Figma 18px `bold.18`). */
    title: React.ReactNode;
    /** Trailing overflow control beside the title — a hello pc **IconButton** (e.g. a "⋮" menu). */
    menu?: React.ReactNode;
    /** Body paragraph (Figma 14px `regular.14.body`, secondary color). */
    body?: React.ReactNode;
    /** Actions row — a hello pc **Button** or button group. */
    actions?: React.ReactNode;
}
/**
 * The vertical media card template: full-bleed media, a title with an optional
 * menu, a body, and actions. Slot it into a `<Card>` for the surface and
 * elevation.
 */
export declare const SimpleCard: React.ForwardRefExoticComponent<SimpleCardProps & React.RefAttributes<HTMLDivElement>>;
export default SimpleCard;
//# sourceMappingURL=SimpleCard.d.ts.map