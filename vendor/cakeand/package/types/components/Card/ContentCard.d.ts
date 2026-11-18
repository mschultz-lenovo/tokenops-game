import React from 'react';
export interface ContentCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    /** Eyebrow text above the title (Figma "Leading text", secondary color). */
    leadingText?: React.ReactNode;
    /** Optional 24px icon before the leading text; inherits the text color. */
    leadingIcon?: React.ReactNode;
    /** The card title (Figma 18px `bold.18`). */
    title: React.ReactNode;
    /** Body paragraph (Figma 14px `regular.14.body`, secondary color). */
    body?: React.ReactNode;
    /** Actions row — a hello pc **Button** group (secondary before primary). */
    actions?: React.ReactNode;
    /** Square media on the trailing side — an image or any node; clipped to a 16px radius. */
    media?: React.ReactNode;
}
/**
 * The horizontal content card template: a text column beside a square media
 * slot. Slot it into a `<Card>` for the surface and elevation.
 */
export declare const ContentCard: React.ForwardRefExoticComponent<ContentCardProps & React.RefAttributes<HTMLDivElement>>;
export default ContentCard;
//# sourceMappingURL=ContentCard.d.ts.map