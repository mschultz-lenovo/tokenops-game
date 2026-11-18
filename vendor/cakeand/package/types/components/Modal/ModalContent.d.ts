import React from 'react';
export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Optional section heading displayed above the description. It is visually
     * styled as Figma's `medium type/medium.18` content subtitle.
     */
    subtitle?: React.ReactNode;
    /**
     * Dialog summary rendered through Radix `Dialog.Description`. Keep this to
     * phrasing content; place interactive or structured dialog UI in `children`.
     */
    description?: React.ReactNode;
    /**
     * Optional structured modal body rendered below the description. Use this
     * slot for existing hello pc controls rather than recreating them inside a
     * dialog.
     */
    children?: React.ReactNode;
    /**
     * Renders `description` through Radix `Dialog.Description` so it becomes the
     * dialog's accessible description. A Radix Dialog exposes exactly one
     * description, so set this to `false` when another element in the same dialog
     * (e.g. Modal's header subtitle) already owns it; the text then renders as a
     * plain paragraph with identical styling.
     * @default true
     */
    descriptionAsDialogDescription?: boolean;
}
/**
 * hello pc ModalContent — the tokenized content region for a Radix Dialog (Figma
 * `_elements / modal content`, node 97:5762). It supplies a subtitle, Radix
 * dialog description, and an optional flexible body slot; ModalTitle remains
 * responsible for the dialog's primary accessible title.
 */
export declare const ModalContent: React.ForwardRefExoticComponent<ModalContentProps & React.RefAttributes<HTMLDivElement>>;
export default ModalContent;
//# sourceMappingURL=ModalContent.d.ts.map