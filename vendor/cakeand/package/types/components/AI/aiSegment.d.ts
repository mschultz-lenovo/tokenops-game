/**
 * Shared AI segment helpers for the hello pc AI components.
 *
 * A segment (Figma "Segment" variant: Consumer / Commercial / Internal) picks
 * the `--color-ai-<segment>-*` token family that tints rings, fills and
 * accents. Tokens are generated from Figma `color/ai/*` into
 * `src/hellopc/tokens/hellopc-vars.css` (win hct maps them to system colors —
 * see WIN_HCT_AI in scripts/build-hellopc-css-vars.mjs).
 */
export type AiSegment = 'consumer' | 'commercial' | 'internal';
/** `aiVar('consumer', 'flat')` → `var(--color-ai-consumer-flat)` */
export declare const aiVar: (segment: AiSegment, token: string) => string;
/**
 * Figma's gradient/ai/<segment>/<style> angle (39.06°, read from the Figma
 * gradient transform on hellopc.ai.queryInput 17608:3405). Geometry, not a
 * design token.
 */
export declare const AI_GRADIENT_ANGLE = "39.06deg";
/** `aiGradient('consumer', 'fill')` → the start→end linear gradient for that style. */
export declare const aiGradient: (segment: AiSegment, style: "primary" | "fill" | "surface") => string;
//# sourceMappingURL=aiSegment.d.ts.map