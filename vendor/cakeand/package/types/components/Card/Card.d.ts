import React from 'react';
export type CardElevation = 'low' | 'high';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The card's content — plain nodes, or a card template that slots in. */
    children?: React.ReactNode;
    /**
     * Drop-shadow depth. Both currently resolve to the Figma `elevation/0`
     * resting shadow (`--elevation-0`) — `high` is reserved for a raised/
     * floating treatment once that spec is confirmed against Figma.
     * @default 'low'
     */
    elevation?: CardElevation;
}
/**
 * An elevated container. Give it content (or a card template) as `children`;
 * it supplies the surface, corner radius, and shadow.
 */
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export default Card;
//# sourceMappingURL=Card.d.ts.map