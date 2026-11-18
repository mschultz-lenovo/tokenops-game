import React from 'react';
/** One context type a person can attach to a prompt (Figma hellopc.ai.contextMenu item). */
export interface AiContextOption {
    /** Stable id reported through `onToggle` / the input's `contexts`. */
    value: string;
    /** Visible label, also used for the chip. */
    label: string;
    /** 16px glyph (menu) / 18px glyph (chip); colored via `currentColor`. */
    icon?: React.ReactNode;
}
/**
 * The context types from the Figma spec (hellopc.ai.contextMenu, 19163:8542).
 * Lucide stand-ins for the Ampersand icons: receipt, power, apps, rocket_launch,
 * build. Pass your own list when a product needs different types.
 */
export declare const AI_CONTEXT_OPTIONS: AiContextOption[];
export interface AiContextMenuProps {
    /** Context types listed above the divider. @default AI_CONTEXT_OPTIONS */
    options?: AiContextOption[];
    /** Values already attached — shown with the selected treatment + check. */
    selected?: string[];
    /** Called with an option's value when it is chosen (toggle on / off). */
    onToggle?: (value: string) => void;
    /**
     * Called with the files picked from **File**. When omitted, the divider and
     * File item are not shown.
     */
    onFilesSelected?: (files: File[]) => void;
    /** `accept` for the file picker, e.g. `".pdf,.txt,image/*"`. */
    accept?: string;
    /** Allow picking several files at once. @default true */
    multiple?: boolean;
    /** Label of the file item. @default 'File' */
    fileLabel?: string;
    /** Accessible name of the + trigger. @default 'Add context or files' */
    triggerLabel?: string;
    /** Disables the + trigger. @default false */
    disabled?: boolean;
    /** Menu width (px or CSS). @default 320 */
    width?: number | string;
}
/**
 * hello pc AI ContextMenu — the **+** button of the AI query input and the menu
 * it opens (Figma "hellopc.ai.contextMenu", node 19163:8542): context types,
 * a divider, then **File**, which opens the system file picker.
 *
 * Built on Radix `DropdownMenu` (role="menu", arrow-key roving focus, typeahead,
 * Esc returns focus to +). The surface and rows are the existing hello pc
 * `MenuContainer`, `MenuItem` and `Divider`; the trigger is `IconButton`.
 * Opens above the trigger, start-aligned, 8px gap.
 */
export declare const AiContextMenu: {
    ({ options, selected, onToggle, onFilesSelected, accept, multiple, fileLabel, triggerLabel, disabled, width, }: AiContextMenuProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default AiContextMenu;
//# sourceMappingURL=AiContextMenu.d.ts.map