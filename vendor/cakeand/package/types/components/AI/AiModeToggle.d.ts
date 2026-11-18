import React from 'react';
import { Toggle as RadixToggle } from 'radix-ui';
import { type AiSegment } from './aiSegment';
export interface AiModeToggleProps extends Omit<React.ComponentPropsWithoutRef<typeof RadixToggle.Root>, 'children' | 'asChild'> {
    /**
     * Accessible name for the mode (required — the toggle shows only a glyph),
     * e.g. "Voice input". Screen readers announce it with the pressed state.
     * @default 'Voice input'
     */
    label?: string;
    /**
     * The mode glyph. Defaults to a microphone (voice input); swap it for
     * another mode. Rendered in a 24px slot and colored via `currentColor`.
     * The default microphone fills its capsule when pressed (the Figma
     * filled-icon On state); a custom icon is shown as-is unless you pass
     * `pressedIcon`.
     */
    icon?: React.ReactElement;
    /**
     * Glyph shown while pressed — the filled version of `icon` (Figma On
     * state). Use it with a custom `icon`; the default microphone already has
     * its own filled state.
     */
    pressedIcon?: React.ReactElement;
    /**
     * AI segment (Figma "Segment") — sets the pressed surface fill and accent.
     * @default 'consumer'
     */
    segment?: AiSegment;
    /** Controlled pressed state (Figma State=On). Pair with `onPressedChange`. */
    pressed?: boolean;
    /** Uncontrolled initial pressed state. @default false */
    defaultPressed?: boolean;
    /** Called with the next pressed state. */
    onPressedChange?: (pressed: boolean) => void;
    /** Mode unavailable (Figma State=Disabled). @default false */
    disabled?: boolean;
}
/**
 * hello pc AI ModeToggle — the toggle icon button inside the AI query input
 * (Figma "hellopc.ai.modeToggle", node 17636:6401). Off = mode inactive,
 * On = mode active (segment surface fill + filled glyph), Disabled =
 * unavailable. Built on Radix `Toggle`, so it renders a real
 * `<button aria-pressed>` with Space/Enter support.
 */
export declare const AiModeToggle: React.ForwardRefExoticComponent<AiModeToggleProps & React.RefAttributes<HTMLButtonElement>>;
export default AiModeToggle;
//# sourceMappingURL=AiModeToggle.d.ts.map