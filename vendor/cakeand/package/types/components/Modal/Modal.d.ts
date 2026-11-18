import React from 'react';
import { type ModalTitleProps } from './ModalTitle';
export interface ModalProps extends Pick<ModalTitleProps, 'title' | 'subtitle' | 'modalIcon' | 'modalIconSlot' | 'closeLabel'> {
    /** Controlled open state. Pair with `onOpenChange`. */
    open?: boolean;
    /** Initial open state for uncontrolled usage. @default false */
    defaultOpen?: boolean;
    /** Fired whenever the dialog requests an open-state change. */
    onOpenChange?: (open: boolean) => void;
    /**
     * Whether the header shows the reusable close IconButton.
     * @default true
     */
    showClose?: boolean;
    /**
     * The modal body. This is a slot: compose `ModalContent`, images, or any
     * custom hello pc content. A Radix Dialog exposes a single accessible
     * description, so if the header `subtitle` is set, any `Dialog.Description`
     * inside here must be opted out (e.g. `ModalContent` with
     * `descriptionAsDialogDescription={false}`).
     */
    children?: React.ReactNode;
    /**
     * Optional footer slot, typically a `ModalFooter`. When omitted, no footer
     * region renders.
     */
    footer?: React.ReactNode;
}
/**
 * hello pc Modal — a token-styled, elevated dialog surface (Figma `&Modal`, node
 * 105:5863) built on Radix `Dialog`. Radix owns focus trapping, scroll locking,
 * escape/overlay dismissal, and the `dialog` role; hello pc owns the surface, the
 * elevation/5 shadow, and the composed header. The header is built from the
 * reusable `ModalTitle`; the body and footer are slots so consumers can drop in
 * the other Modal elements or custom content.
 */
export declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>;
export default Modal;
//# sourceMappingURL=Modal.d.ts.map