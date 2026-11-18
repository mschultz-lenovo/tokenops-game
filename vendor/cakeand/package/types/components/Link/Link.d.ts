import React from 'react';
export type LinkSize = 'sm' | 'md' | 'lg';
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /**
     * Type size, always Rookery New Medium: `sm` 12px (Figma `link.12`), `md`
     * 14px (`link.14.body`), `lg` 16px (`link.16`). The icon matches the text size.
     * @default 'md'
     */
    size?: LinkSize;
    /**
     * For links on a colored fill (banners, promos): text, icon and focus ring
     * all use `--color-text-icon-on-primary` (Figma `hellopc.link.inverse`).
     * Never place the standard link on a colored surface.
     * @default false
     */
    inverse?: boolean;
    /**
     * The link leaves the app — a browser, a new window, another app. Shows the
     * trailing open-in-new icon, opens in a new tab (`target="_blank"`,
     * `rel="noopener noreferrer"`) unless you pass your own `target` / `rel`, and
     * announces "(opens in a new window)" to screen readers.
     * @default false
     */
    external?: boolean;
    /**
     * Replaces the trailing icon (Figma `icon` swap). Inherits the link color
     * and size — don't size or color it yourself. Shown whenever it is set.
     */
    icon?: React.ReactNode;
    /**
     * Renders the link inert: no `href`, `aria-disabled="true"`, removed from the
     * tab order, clicks ignored. Use sparingly — prefer hiding a destination
     * that doesn't exist.
     * @default false
     */
    disabled?: boolean;
}
/**
 * hello pc Link — navigation to a page, section, or external resource
 * (Figma `hellopc.link` / `hellopc.link.inverse`, node 17585:4304). Always a
 * real `<a>`, always underlined. Links navigate; buttons perform actions.
 */
export declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
export default Link;
//# sourceMappingURL=Link.d.ts.map