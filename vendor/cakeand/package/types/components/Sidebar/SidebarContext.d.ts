import React from 'react';
/**
 * Whether the surrounding `SidebarNav` is collapsed to its icon rail.
 *
 * Collapsing changes what several rows render — section labels become rules,
 * row labels go visually hidden — and those rows are supplied by the consumer
 * as children, so the state has to reach them by context rather than props.
 * Defaults to `false` so the rows still work outside a `SidebarNav`.
 */
export declare const SidebarCollapsedContext: React.Context<boolean>;
/** Reads the collapsed state of the surrounding `SidebarNav`. */
export declare const useSidebarCollapsed: () => boolean;
//# sourceMappingURL=SidebarContext.d.ts.map