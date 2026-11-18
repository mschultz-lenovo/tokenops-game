import React from 'react';
export type ModalIconType = 'icon' | 'info' | 'success' | 'warning' | 'error' | 'neutral';
export interface ModalIconProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * Semantic icon treatment from the Figma `type` variant.
     * @default 'icon'
     */
    type?: ModalIconType;
    /**
     * Custom 24px glyph for the generic `icon` treatment. Semantic treatments
     * supply their corresponding default glyph.
     */
    icon?: React.ReactNode;
    /**
     * Accessible name for non-decorative usage. When this icon accompanies a
     * dialog title, set `decorative` because the title supplies the meaning.
     */
    label?: string;
    /**
     * Hides the glyph from assistive technology. Use when it only reinforces
     * adjacent text, such as a ModalTitle heading.
     * @default false
     */
    decorative?: boolean;
}
/**
 * hello pc ModalIcon — the modal leading item (Figma `_elements / modal leading
 * item`, node 97:5706). It supplies the semantic 24px glyph and its 4px
 * tokenized state padding; ModalTitle exclusively composes this component for
 * leading icon treatments. The same semantic glyph set (`info`/`success`/
 * `warning`/`error`) is the exact shape used by Toast's status icon — Toast
 * reuses this component rather than forking its own copy. `neutral` extends
 * the set for Toast's colorless "greyscale" status (Figma node 108:5974),
 * reusing the `info` circle-i shape recolored to the neutral ink token.
 */
export declare const ModalIcon: React.ForwardRefExoticComponent<ModalIconProps & React.RefAttributes<HTMLSpanElement>>;
export default ModalIcon;
//# sourceMappingURL=ModalIcon.d.ts.map