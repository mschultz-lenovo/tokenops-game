import React from 'react';
import { type ModalIconType } from './ModalIcon';
export interface ModalTitleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    /** Visible dialog heading, rendered through Radix `Dialog.Title`. */
    title: React.ReactNode;
    /** Optional supporting text, rendered through Radix `Dialog.Description`. */
    subtitle?: React.ReactNode;
    /**
     * Optional semantic leading treatment. ModalTitle exclusively composes
     * ModalIcon for this slot.
     */
    modalIcon?: ModalIconType;
    /** Optional custom glyph used only with `modalIcon="icon"`. */
    modalIconSlot?: React.ReactNode;
    /**
     * Fired when the reusable close icon button is activated. The consumer owns
     * Dialog open state and should set it to false here.
     */
    onClose?: React.MouseEventHandler<HTMLButtonElement>;
    /** Accessible name for the optional close control. @default 'Close dialog' */
    closeLabel?: string;
}
/**
 * hello pc ModalTitle — the header for a Radix Dialog (Figma `_elements / modal
 * header/Default`, node 97:5727). It composes the existing IconButton close
 * control with Radix Dialog title/description primitives and tokenized layout.
 */
export declare const ModalTitle: React.ForwardRefExoticComponent<ModalTitleProps & React.RefAttributes<HTMLDivElement>>;
export default ModalTitle;
//# sourceMappingURL=ModalTitle.d.ts.map