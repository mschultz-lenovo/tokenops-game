import React from 'react';
/**
 * hello pc Avatar — the circular representation of a person (Figma "&avatar", node
 * 142:8305). Shows a photo when one is available and degrades gracefully to
 * initials, then to a person glyph.
 *
 * Wraps the Radix `Avatar` primitive, which owns the part that's genuinely
 * fiddly: the image loading lifecycle. The fallback renders until the image has
 * actually loaded and comes back if it errors, so a broken URL never leaves a
 * blank circle.
 *
 * Figma's `size=focus` isn't a size — it's the focus state, so it's a real
 * `:focus-visible` ring here, and only when the avatar is interactive
 * (`onClick`), where it renders as a proper `<button>`. Likewise Figma's
 * `content=check` is a selected state, exposed as `selected`.
 */
declare const DIAMETER: {
    readonly sm: 32;
    readonly md: 40;
    readonly lg: 48;
};
export type AvatarSize = keyof typeof DIAMETER;
export interface AvatarProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onClick'> {
    /** Photo URL. Until it loads (or if it fails) the fallback shows instead. */
    src?: string;
    /** Describes the person in the photo — not the word "avatar". */
    alt?: string;
    /** Initials shown when there's no photo (Figma `content=initials`). 1–2 characters. */
    initials?: string;
    /** Diameter: `sm` 32px, `md` 40px, `lg` 48px. @default 'md' */
    size?: AvatarSize;
    /**
     * Selected treatment — a filled primary circle with a check, for avatars used
     * as pickable options (Figma `content=check`).
     * @default false
     */
    selected?: boolean;
    /** Shows the presence dot (Figma `showBadge`). @default false */
    badge?: boolean;
    /** Accessible name for the presence dot. @default 'Online' */
    badgeLabel?: string;
    /** Makes the avatar activatable — it renders as a `<button>` and gains the focus ring. */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    /**
     * Milliseconds to wait before showing the fallback. A small delay avoids a
     * flash of initials when the image loads fast.
     * @default 0
     */
    delayMs?: number;
}
export declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLElement>>;
export default Avatar;
//# sourceMappingURL=Avatar.d.ts.map