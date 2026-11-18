import React from 'react';
import { Accordion as RadixAccordion } from 'radix-ui';
/** The outer container — white surface, hairline border, 24px radius, clipped
 *  so the item dividers meet the rounded corners cleanly. */
declare const Root: import("styled-components/dist/types").IStyledComponentBase<"web", ((Omit<RadixAccordion.AccordionSingleProps & React.RefAttributes<HTMLDivElement>, "style"> & {
    style?: React.CSSProperties | import("styled-components/dist/types").CSSPropertiesWithVars | undefined;
}) | (Omit<RadixAccordion.AccordionMultipleProps & React.RefAttributes<HTMLDivElement>, "style"> & {
    style?: React.CSSProperties | import("styled-components/dist/types").CSSPropertiesWithVars | undefined;
})) & import("styled-components/dist/types").BaseObject> & string & Omit<React.ForwardRefExoticComponent<(RadixAccordion.AccordionSingleProps | RadixAccordion.AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>>, keyof React.Component<any, {}, any>>;
export type AccordionProps = React.ComponentPropsWithoutRef<typeof RadixAccordion.Root>;
/**
 * The accordion container. Forwards every Radix `Accordion.Root` prop — set
 * `type="single"` (with `collapsible`) for one-open-at-a-time, or
 * `type="multiple"` to let several sections open at once; drive open state with
 * `value`/`defaultValue`/`onValueChange`.
 */
export declare const Accordion: typeof Root & {
    displayName?: string;
};
export interface AccordionItemProps extends Omit<React.ComponentPropsWithoutRef<typeof RadixAccordion.Item>, 'title'> {
    /** Header label shown in the trigger row. */
    title: React.ReactNode;
    /** Optional leading icon (24×24), rendered before the title. */
    icon?: React.ReactNode;
    /** The revealed content. */
    children: React.ReactNode;
}
/**
 * A single collapsible section. Composes Radix `Item` / `Header` / `Trigger` /
 * `Content`: the `title` (and optional `icon`) render in the always-visible
 * header row alongside the rotating chevron, and `children` render in the
 * region revealed when the item opens.
 */
export declare const AccordionItem: React.ForwardRefExoticComponent<AccordionItemProps & React.RefAttributes<HTMLDivElement>>;
export default Accordion;
//# sourceMappingURL=Accordion.d.ts.map