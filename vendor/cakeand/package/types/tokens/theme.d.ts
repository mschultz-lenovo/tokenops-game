import tokensData from './tokens.json';
/**
 * hello pc theme.
 *
 * Colors are generated from the Figma DTCG export ("& theme.a") by
 * scripts/build-hellopc-tokens.mjs. Spacing, radius, and typography are
 * design-system conventions layered on top (no token export for them yet).
 */
export type ThemeMode = 'light.a' | 'dark.a' | 'win hct';
export type CakeColors = (typeof tokensData)['theme']['light.a'];
declare const makeTheme: (mode: ThemeMode) => {
    mode: ThemeMode;
    color: {
        primary: {
            primary: string;
            primaryHover: string;
            primaryPress: string;
            primaryOverlay: string;
            primaryOverlayHover: string;
            primaryOverlayPress: string;
        };
        secondary: {
            secondary: string;
            secondaryHover: string;
            secondaryPress: string;
            secondaryOverlay: string;
            secondaryOverlayHover: string;
        };
        tonal: {
            tonal: string;
            tonalHover: string;
            tonalPress: string;
            tonalLightest: string;
            tonalOverlay: string;
            tonalOverlayHover: string;
            tonalOverlayPress: string;
            tonalSecondaryOverlay: string;
            tonalSecondaryOverlayHover: string;
            tonalSecondaryOverlayPress: string;
        };
        info: {
            info: string;
            infoOverlay: string;
            infoOverlayHover: string;
        };
        success: {
            success: string;
            successOverlay: string;
            successOverlayHover: string;
        };
        warning: {
            warn: string;
            warnOverlay: string;
            warnOverlayHover: string;
        };
        error: {
            error: string;
            errorHover: string;
            errorPress: string;
            errorOverlay: string;
            errorOverlayHover: string;
            errorOverlayPress: string;
        };
        disabled: {
            disabled: string;
            disabledInverse: string;
        };
        surfaces: {
            canvas: string;
            container: string;
            containerPopWindows: string;
            containerPopWeb: string;
            containerBlur: string;
            containerBlurHigh: string;
            onContainer: string;
            onContainerLow: string;
            onContainerHigh: string;
            inverseContainer: string;
            primary: string;
            off: string;
            offHover: string;
            offPress: string;
            on: string;
            onHover: string;
            onPress: string;
        };
        stroke: {
            border: string;
            borderPop: string;
            borderLow: string;
            borderHigh: string;
            borderContainerOS: string;
            borderContainer: string;
            borderTonalPrimary: string;
            borderZeroWinHct: string;
        };
        textIcon: {
            primary: string;
            secondary: string;
            placeholder: string;
            inverse: string;
            onPrimary: string;
            onSecondary: string;
            onPrimaryDisabled: string;
            onTonal: string;
            onTonalInverse: string;
            onTonalSecondary: string;
            infoOnSurface: string;
            successOnSurface: string;
            warnOnSurface: string;
            errorOnSurfaceTextDestructiveBtn: string;
            errorOnSurfaceIcon: string;
            primaryOnSurface: string;
            secondaryOnSurface: string;
            onSurface: string;
            link: string;
            linkHover: string;
            linkPress: string;
            disabled: string;
        };
        elevation: {
            dropShadowLight: string;
            dropShadowHeavy: string;
        };
        overlay: {
            scrim: string;
        };
        badge: {
            red: string;
            redLight: string;
            textIconOnRedLight: string;
            orange: string;
            orangeLight: string;
            textIconOnOrangeLight: string;
            amber: string;
            amberLight: string;
            textIconOnAmberLight: string;
            gold: string;
            goldLight: string;
            textIconOnGoldLight: string;
            yellow: string;
            yellowLight: string;
            textIconOnYellowLight: string;
            lime: string;
            limeLight: string;
            textIconOnLimeLight: string;
            green: string;
            greenLight: string;
            textIconOnGreenLight: string;
            jade: string;
            jadeLight: string;
            textIconOnJadeLight: string;
            teal: string;
            tealLight: string;
            textIconOnTealLight: string;
            aqua: string;
            aquaLight: string;
            textIconOnAquaLight: string;
            cyan: string;
            cyanLight: string;
            textIconOnCyanLight: string;
            azure: string;
            azureLight: string;
            textIconOnAzureLight: string;
            blue: string;
            blueLight: string;
            textIconOnBlueLight: string;
            indigo: string;
            indigoLight: string;
            textIconOnIndigoLight: string;
            violet: string;
            violetLight: string;
            textIconOnVioletLight: string;
            purple: string;
            purpleLight: string;
            textIconOnPurpleLight: string;
            magenta: string;
            magentaLight: string;
            textIconOnMagentaLight: string;
            pink: string;
            pinkLight: string;
            textIconOnPinkLight: string;
        };
        data: {
            "1_Data": string;
            "1_Container": string;
            "1_Overlay": string;
            "2_Data": string;
            "2_Container": string;
            "2_Overlay": string;
            "3_Data": string;
            "3_Container": string;
            "3_Overlay": string;
            "4_Data": string;
            "4_Container": string;
            "4_Overlay": string;
            "5_Data": string;
            "5_Container": string;
            "5_Overlay": string;
            "6_Data": string;
            "6_Container": string;
            "6_Overlay": string;
        };
        button: {
            primaryFill: string;
            onPrimaryFill: string;
            primaryBorder: string;
        };
        inverse: {
            surfacesOnContainerHigh: string;
            surfacesInverseContainer: string;
            surfacesContainerBlur: string;
            surfacesContainerHigh: string;
            strokeBorderZeroWinHct: string;
            strokeBorderContainer: string;
            strokeBorderLow: string;
            infoInfo: string;
            textIconPrimary: string;
            textIconSecondary: string;
            textIconOnPrimary: string;
            textIconDisabled: string;
            primaryPrimary: string;
            primaryPrimaryHover: string;
            primaryPrimaryPress: string;
            buttonPrimaryFill: string;
            buttonPrimaryBorder: string;
            buttonOnPrimaryFill: string;
            successSuccess: string;
            warningWarn: string;
            errorError: string;
            secondarySecondary: string;
            secondarySecondaryOverlay: string;
            secondarySecondaryOverlayHover: string;
            disabledDisabled: string;
            disabledDisabledInverse: string;
        };
        control: {
            fill: string;
            fillHover: string;
            fillPress: string;
            onFill: string;
            border: string;
            borderHover: string;
            selectedFill: string;
            selectedFillHover: string;
            selectedFillPress: string;
            onSelected: string;
            disabledFill: string;
            focusRing: string;
            disabledBorder: string;
        };
        ai: {
            canvasBase: string;
            chipThread: string;
            chipThreadBorder: string;
            consumerPrimaryStart: string;
            consumerPrimaryEnd: string;
            consumerFillStart: string;
            consumerFillEnd: string;
            consumerOnFill: string;
            consumerSurfaceStart: string;
            consumerSurfaceEnd: string;
            consumerCanvasStart: string;
            consumerCanvasEnd: string;
            consumerFlat: string;
            commercialPrimaryStart: string;
            commercialPrimaryEnd: string;
            commercialFillStart: string;
            commercialFillEnd: string;
            commercialOnFill: string;
            commercialSurfaceStart: string;
            commercialSurfaceEnd: string;
            commercialCanvasStart: string;
            commercialCanvasEnd: string;
            commercialFlat: string;
            internalPrimaryStart: string;
            internalPrimaryEnd: string;
            internalFillStart: string;
            internalFillEnd: string;
            internalOnFill: string;
            internalSurfaceStart: string;
            internalSurfaceEnd: string;
            internalCanvasStart: string;
            internalCanvasEnd: string;
            internalFlat: string;
        };
    };
    space: {
        readonly none: "0";
        readonly xs: "4px";
        readonly sm: "8px";
        readonly md: "12px";
        readonly lg: "16px";
        readonly xl: "20px";
        readonly '2xl': "24px";
        readonly '3xl': "32px";
        readonly '4xl': "48px";
    };
    radius: {
        readonly none: "0";
        readonly sm: "4px";
        readonly md: "8px";
        readonly lg: "12px";
        readonly xl: "16px";
        readonly pill: "999px";
        readonly round: "50%";
    };
    font: {
        readonly family: "\"Rookery New\", \"Rookery\", system-ui, sans-serif";
        readonly weight: Record<import("./typography").TypographyWeight, number>;
        readonly size: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", string>;
        readonly role: readonly ["caption", "helper", "body", "subject", "subtitle", "title", "page", "greeting", "hero", "data"];
        readonly presets: {
            readonly regular: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
            readonly medium: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
            readonly bold: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
        };
        readonly lineHeight: {
            readonly tight: 1.2;
            readonly normal: 1.5;
            readonly display: 1.1;
        };
    };
    typography: {
        readonly regular: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
        readonly medium: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
        readonly bold: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
    };
    /**
     * Figma `elevation/<n>` — each level is a key layer (drop-shadow-light)
     * over an ambient layer (drop-shadow-heavy). Prefer `var(--elevation-<n>)`
     * in CSS; these exist for JS consumers under CakeThemeProvider.
     */
    elevation: {
        /** Resting — a surface sitting on the page. */
        0: string;
        /** Raised — a surface lifting off the page. */
        1: string;
        /** Floating — anchored transients (tooltips). */
        2: string;
        /** Overlay — detached surfaces (menus, toasts, panels). */
        3: string;
        /** Prominent — large detached surfaces (drawers, sheets). */
        4: string;
        /** Dialog — the top of the scale; surfaces that take over the screen. */
        5: string;
        /** Legacy aliases, predating the numbered Figma scale. */
        low: string;
        high: string;
    };
};
export declare const lightTheme: {
    mode: ThemeMode;
    color: {
        primary: {
            primary: string;
            primaryHover: string;
            primaryPress: string;
            primaryOverlay: string;
            primaryOverlayHover: string;
            primaryOverlayPress: string;
        };
        secondary: {
            secondary: string;
            secondaryHover: string;
            secondaryPress: string;
            secondaryOverlay: string;
            secondaryOverlayHover: string;
        };
        tonal: {
            tonal: string;
            tonalHover: string;
            tonalPress: string;
            tonalLightest: string;
            tonalOverlay: string;
            tonalOverlayHover: string;
            tonalOverlayPress: string;
            tonalSecondaryOverlay: string;
            tonalSecondaryOverlayHover: string;
            tonalSecondaryOverlayPress: string;
        };
        info: {
            info: string;
            infoOverlay: string;
            infoOverlayHover: string;
        };
        success: {
            success: string;
            successOverlay: string;
            successOverlayHover: string;
        };
        warning: {
            warn: string;
            warnOverlay: string;
            warnOverlayHover: string;
        };
        error: {
            error: string;
            errorHover: string;
            errorPress: string;
            errorOverlay: string;
            errorOverlayHover: string;
            errorOverlayPress: string;
        };
        disabled: {
            disabled: string;
            disabledInverse: string;
        };
        surfaces: {
            canvas: string;
            container: string;
            containerPopWindows: string;
            containerPopWeb: string;
            containerBlur: string;
            containerBlurHigh: string;
            onContainer: string;
            onContainerLow: string;
            onContainerHigh: string;
            inverseContainer: string;
            primary: string;
            off: string;
            offHover: string;
            offPress: string;
            on: string;
            onHover: string;
            onPress: string;
        };
        stroke: {
            border: string;
            borderPop: string;
            borderLow: string;
            borderHigh: string;
            borderContainerOS: string;
            borderContainer: string;
            borderTonalPrimary: string;
            borderZeroWinHct: string;
        };
        textIcon: {
            primary: string;
            secondary: string;
            placeholder: string;
            inverse: string;
            onPrimary: string;
            onSecondary: string;
            onPrimaryDisabled: string;
            onTonal: string;
            onTonalInverse: string;
            onTonalSecondary: string;
            infoOnSurface: string;
            successOnSurface: string;
            warnOnSurface: string;
            errorOnSurfaceTextDestructiveBtn: string;
            errorOnSurfaceIcon: string;
            primaryOnSurface: string;
            secondaryOnSurface: string;
            onSurface: string;
            link: string;
            linkHover: string;
            linkPress: string;
            disabled: string;
        };
        elevation: {
            dropShadowLight: string;
            dropShadowHeavy: string;
        };
        overlay: {
            scrim: string;
        };
        badge: {
            red: string;
            redLight: string;
            textIconOnRedLight: string;
            orange: string;
            orangeLight: string;
            textIconOnOrangeLight: string;
            amber: string;
            amberLight: string;
            textIconOnAmberLight: string;
            gold: string;
            goldLight: string;
            textIconOnGoldLight: string;
            yellow: string;
            yellowLight: string;
            textIconOnYellowLight: string;
            lime: string;
            limeLight: string;
            textIconOnLimeLight: string;
            green: string;
            greenLight: string;
            textIconOnGreenLight: string;
            jade: string;
            jadeLight: string;
            textIconOnJadeLight: string;
            teal: string;
            tealLight: string;
            textIconOnTealLight: string;
            aqua: string;
            aquaLight: string;
            textIconOnAquaLight: string;
            cyan: string;
            cyanLight: string;
            textIconOnCyanLight: string;
            azure: string;
            azureLight: string;
            textIconOnAzureLight: string;
            blue: string;
            blueLight: string;
            textIconOnBlueLight: string;
            indigo: string;
            indigoLight: string;
            textIconOnIndigoLight: string;
            violet: string;
            violetLight: string;
            textIconOnVioletLight: string;
            purple: string;
            purpleLight: string;
            textIconOnPurpleLight: string;
            magenta: string;
            magentaLight: string;
            textIconOnMagentaLight: string;
            pink: string;
            pinkLight: string;
            textIconOnPinkLight: string;
        };
        data: {
            "1_Data": string;
            "1_Container": string;
            "1_Overlay": string;
            "2_Data": string;
            "2_Container": string;
            "2_Overlay": string;
            "3_Data": string;
            "3_Container": string;
            "3_Overlay": string;
            "4_Data": string;
            "4_Container": string;
            "4_Overlay": string;
            "5_Data": string;
            "5_Container": string;
            "5_Overlay": string;
            "6_Data": string;
            "6_Container": string;
            "6_Overlay": string;
        };
        button: {
            primaryFill: string;
            onPrimaryFill: string;
            primaryBorder: string;
        };
        inverse: {
            surfacesOnContainerHigh: string;
            surfacesInverseContainer: string;
            surfacesContainerBlur: string;
            surfacesContainerHigh: string;
            strokeBorderZeroWinHct: string;
            strokeBorderContainer: string;
            strokeBorderLow: string;
            infoInfo: string;
            textIconPrimary: string;
            textIconSecondary: string;
            textIconOnPrimary: string;
            textIconDisabled: string;
            primaryPrimary: string;
            primaryPrimaryHover: string;
            primaryPrimaryPress: string;
            buttonPrimaryFill: string;
            buttonPrimaryBorder: string;
            buttonOnPrimaryFill: string;
            successSuccess: string;
            warningWarn: string;
            errorError: string;
            secondarySecondary: string;
            secondarySecondaryOverlay: string;
            secondarySecondaryOverlayHover: string;
            disabledDisabled: string;
            disabledDisabledInverse: string;
        };
        control: {
            fill: string;
            fillHover: string;
            fillPress: string;
            onFill: string;
            border: string;
            borderHover: string;
            selectedFill: string;
            selectedFillHover: string;
            selectedFillPress: string;
            onSelected: string;
            disabledFill: string;
            focusRing: string;
            disabledBorder: string;
        };
        ai: {
            canvasBase: string;
            chipThread: string;
            chipThreadBorder: string;
            consumerPrimaryStart: string;
            consumerPrimaryEnd: string;
            consumerFillStart: string;
            consumerFillEnd: string;
            consumerOnFill: string;
            consumerSurfaceStart: string;
            consumerSurfaceEnd: string;
            consumerCanvasStart: string;
            consumerCanvasEnd: string;
            consumerFlat: string;
            commercialPrimaryStart: string;
            commercialPrimaryEnd: string;
            commercialFillStart: string;
            commercialFillEnd: string;
            commercialOnFill: string;
            commercialSurfaceStart: string;
            commercialSurfaceEnd: string;
            commercialCanvasStart: string;
            commercialCanvasEnd: string;
            commercialFlat: string;
            internalPrimaryStart: string;
            internalPrimaryEnd: string;
            internalFillStart: string;
            internalFillEnd: string;
            internalOnFill: string;
            internalSurfaceStart: string;
            internalSurfaceEnd: string;
            internalCanvasStart: string;
            internalCanvasEnd: string;
            internalFlat: string;
        };
    };
    space: {
        readonly none: "0";
        readonly xs: "4px";
        readonly sm: "8px";
        readonly md: "12px";
        readonly lg: "16px";
        readonly xl: "20px";
        readonly '2xl': "24px";
        readonly '3xl': "32px";
        readonly '4xl': "48px";
    };
    radius: {
        readonly none: "0";
        readonly sm: "4px";
        readonly md: "8px";
        readonly lg: "12px";
        readonly xl: "16px";
        readonly pill: "999px";
        readonly round: "50%";
    };
    font: {
        readonly family: "\"Rookery New\", \"Rookery\", system-ui, sans-serif";
        readonly weight: Record<import("./typography").TypographyWeight, number>;
        readonly size: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", string>;
        readonly role: readonly ["caption", "helper", "body", "subject", "subtitle", "title", "page", "greeting", "hero", "data"];
        readonly presets: {
            readonly regular: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
            readonly medium: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
            readonly bold: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
        };
        readonly lineHeight: {
            readonly tight: 1.2;
            readonly normal: 1.5;
            readonly display: 1.1;
        };
    };
    typography: {
        readonly regular: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
        readonly medium: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
        readonly bold: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
    };
    /**
     * Figma `elevation/<n>` — each level is a key layer (drop-shadow-light)
     * over an ambient layer (drop-shadow-heavy). Prefer `var(--elevation-<n>)`
     * in CSS; these exist for JS consumers under CakeThemeProvider.
     */
    elevation: {
        /** Resting — a surface sitting on the page. */
        0: string;
        /** Raised — a surface lifting off the page. */
        1: string;
        /** Floating — anchored transients (tooltips). */
        2: string;
        /** Overlay — detached surfaces (menus, toasts, panels). */
        3: string;
        /** Prominent — large detached surfaces (drawers, sheets). */
        4: string;
        /** Dialog — the top of the scale; surfaces that take over the screen. */
        5: string;
        /** Legacy aliases, predating the numbered Figma scale. */
        low: string;
        high: string;
    };
};
export declare const darkTheme: {
    mode: ThemeMode;
    color: {
        primary: {
            primary: string;
            primaryHover: string;
            primaryPress: string;
            primaryOverlay: string;
            primaryOverlayHover: string;
            primaryOverlayPress: string;
        };
        secondary: {
            secondary: string;
            secondaryHover: string;
            secondaryPress: string;
            secondaryOverlay: string;
            secondaryOverlayHover: string;
        };
        tonal: {
            tonal: string;
            tonalHover: string;
            tonalPress: string;
            tonalLightest: string;
            tonalOverlay: string;
            tonalOverlayHover: string;
            tonalOverlayPress: string;
            tonalSecondaryOverlay: string;
            tonalSecondaryOverlayHover: string;
            tonalSecondaryOverlayPress: string;
        };
        info: {
            info: string;
            infoOverlay: string;
            infoOverlayHover: string;
        };
        success: {
            success: string;
            successOverlay: string;
            successOverlayHover: string;
        };
        warning: {
            warn: string;
            warnOverlay: string;
            warnOverlayHover: string;
        };
        error: {
            error: string;
            errorHover: string;
            errorPress: string;
            errorOverlay: string;
            errorOverlayHover: string;
            errorOverlayPress: string;
        };
        disabled: {
            disabled: string;
            disabledInverse: string;
        };
        surfaces: {
            canvas: string;
            container: string;
            containerPopWindows: string;
            containerPopWeb: string;
            containerBlur: string;
            containerBlurHigh: string;
            onContainer: string;
            onContainerLow: string;
            onContainerHigh: string;
            inverseContainer: string;
            primary: string;
            off: string;
            offHover: string;
            offPress: string;
            on: string;
            onHover: string;
            onPress: string;
        };
        stroke: {
            border: string;
            borderPop: string;
            borderLow: string;
            borderHigh: string;
            borderContainerOS: string;
            borderContainer: string;
            borderTonalPrimary: string;
            borderZeroWinHct: string;
        };
        textIcon: {
            primary: string;
            secondary: string;
            placeholder: string;
            inverse: string;
            onPrimary: string;
            onSecondary: string;
            onPrimaryDisabled: string;
            onTonal: string;
            onTonalInverse: string;
            onTonalSecondary: string;
            infoOnSurface: string;
            successOnSurface: string;
            warnOnSurface: string;
            errorOnSurfaceTextDestructiveBtn: string;
            errorOnSurfaceIcon: string;
            primaryOnSurface: string;
            secondaryOnSurface: string;
            onSurface: string;
            link: string;
            linkHover: string;
            linkPress: string;
            disabled: string;
        };
        elevation: {
            dropShadowLight: string;
            dropShadowHeavy: string;
        };
        overlay: {
            scrim: string;
        };
        badge: {
            red: string;
            redLight: string;
            textIconOnRedLight: string;
            orange: string;
            orangeLight: string;
            textIconOnOrangeLight: string;
            amber: string;
            amberLight: string;
            textIconOnAmberLight: string;
            gold: string;
            goldLight: string;
            textIconOnGoldLight: string;
            yellow: string;
            yellowLight: string;
            textIconOnYellowLight: string;
            lime: string;
            limeLight: string;
            textIconOnLimeLight: string;
            green: string;
            greenLight: string;
            textIconOnGreenLight: string;
            jade: string;
            jadeLight: string;
            textIconOnJadeLight: string;
            teal: string;
            tealLight: string;
            textIconOnTealLight: string;
            aqua: string;
            aquaLight: string;
            textIconOnAquaLight: string;
            cyan: string;
            cyanLight: string;
            textIconOnCyanLight: string;
            azure: string;
            azureLight: string;
            textIconOnAzureLight: string;
            blue: string;
            blueLight: string;
            textIconOnBlueLight: string;
            indigo: string;
            indigoLight: string;
            textIconOnIndigoLight: string;
            violet: string;
            violetLight: string;
            textIconOnVioletLight: string;
            purple: string;
            purpleLight: string;
            textIconOnPurpleLight: string;
            magenta: string;
            magentaLight: string;
            textIconOnMagentaLight: string;
            pink: string;
            pinkLight: string;
            textIconOnPinkLight: string;
        };
        data: {
            "1_Data": string;
            "1_Container": string;
            "1_Overlay": string;
            "2_Data": string;
            "2_Container": string;
            "2_Overlay": string;
            "3_Data": string;
            "3_Container": string;
            "3_Overlay": string;
            "4_Data": string;
            "4_Container": string;
            "4_Overlay": string;
            "5_Data": string;
            "5_Container": string;
            "5_Overlay": string;
            "6_Data": string;
            "6_Container": string;
            "6_Overlay": string;
        };
        button: {
            primaryFill: string;
            onPrimaryFill: string;
            primaryBorder: string;
        };
        inverse: {
            surfacesOnContainerHigh: string;
            surfacesInverseContainer: string;
            surfacesContainerBlur: string;
            surfacesContainerHigh: string;
            strokeBorderZeroWinHct: string;
            strokeBorderContainer: string;
            strokeBorderLow: string;
            infoInfo: string;
            textIconPrimary: string;
            textIconSecondary: string;
            textIconOnPrimary: string;
            textIconDisabled: string;
            primaryPrimary: string;
            primaryPrimaryHover: string;
            primaryPrimaryPress: string;
            buttonPrimaryFill: string;
            buttonPrimaryBorder: string;
            buttonOnPrimaryFill: string;
            successSuccess: string;
            warningWarn: string;
            errorError: string;
            secondarySecondary: string;
            secondarySecondaryOverlay: string;
            secondarySecondaryOverlayHover: string;
            disabledDisabled: string;
            disabledDisabledInverse: string;
        };
        control: {
            fill: string;
            fillHover: string;
            fillPress: string;
            onFill: string;
            border: string;
            borderHover: string;
            selectedFill: string;
            selectedFillHover: string;
            selectedFillPress: string;
            onSelected: string;
            disabledFill: string;
            focusRing: string;
            disabledBorder: string;
        };
        ai: {
            canvasBase: string;
            chipThread: string;
            chipThreadBorder: string;
            consumerPrimaryStart: string;
            consumerPrimaryEnd: string;
            consumerFillStart: string;
            consumerFillEnd: string;
            consumerOnFill: string;
            consumerSurfaceStart: string;
            consumerSurfaceEnd: string;
            consumerCanvasStart: string;
            consumerCanvasEnd: string;
            consumerFlat: string;
            commercialPrimaryStart: string;
            commercialPrimaryEnd: string;
            commercialFillStart: string;
            commercialFillEnd: string;
            commercialOnFill: string;
            commercialSurfaceStart: string;
            commercialSurfaceEnd: string;
            commercialCanvasStart: string;
            commercialCanvasEnd: string;
            commercialFlat: string;
            internalPrimaryStart: string;
            internalPrimaryEnd: string;
            internalFillStart: string;
            internalFillEnd: string;
            internalOnFill: string;
            internalSurfaceStart: string;
            internalSurfaceEnd: string;
            internalCanvasStart: string;
            internalCanvasEnd: string;
            internalFlat: string;
        };
    };
    space: {
        readonly none: "0";
        readonly xs: "4px";
        readonly sm: "8px";
        readonly md: "12px";
        readonly lg: "16px";
        readonly xl: "20px";
        readonly '2xl': "24px";
        readonly '3xl': "32px";
        readonly '4xl': "48px";
    };
    radius: {
        readonly none: "0";
        readonly sm: "4px";
        readonly md: "8px";
        readonly lg: "12px";
        readonly xl: "16px";
        readonly pill: "999px";
        readonly round: "50%";
    };
    font: {
        readonly family: "\"Rookery New\", \"Rookery\", system-ui, sans-serif";
        readonly weight: Record<import("./typography").TypographyWeight, number>;
        readonly size: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", string>;
        readonly role: readonly ["caption", "helper", "body", "subject", "subtitle", "title", "page", "greeting", "hero", "data"];
        readonly presets: {
            readonly regular: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
            readonly medium: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
            readonly bold: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
        };
        readonly lineHeight: {
            readonly tight: 1.2;
            readonly normal: 1.5;
            readonly display: 1.1;
        };
    };
    typography: {
        readonly regular: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
        readonly medium: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
        readonly bold: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
    };
    /**
     * Figma `elevation/<n>` — each level is a key layer (drop-shadow-light)
     * over an ambient layer (drop-shadow-heavy). Prefer `var(--elevation-<n>)`
     * in CSS; these exist for JS consumers under CakeThemeProvider.
     */
    elevation: {
        /** Resting — a surface sitting on the page. */
        0: string;
        /** Raised — a surface lifting off the page. */
        1: string;
        /** Floating — anchored transients (tooltips). */
        2: string;
        /** Overlay — detached surfaces (menus, toasts, panels). */
        3: string;
        /** Prominent — large detached surfaces (drawers, sheets). */
        4: string;
        /** Dialog — the top of the scale; surfaces that take over the screen. */
        5: string;
        /** Legacy aliases, predating the numbered Figma scale. */
        low: string;
        high: string;
    };
};
/** Windows High-Contrast theme contributed in Figma ("& win hct"). */
export declare const winHctTheme: {
    mode: ThemeMode;
    color: {
        primary: {
            primary: string;
            primaryHover: string;
            primaryPress: string;
            primaryOverlay: string;
            primaryOverlayHover: string;
            primaryOverlayPress: string;
        };
        secondary: {
            secondary: string;
            secondaryHover: string;
            secondaryPress: string;
            secondaryOverlay: string;
            secondaryOverlayHover: string;
        };
        tonal: {
            tonal: string;
            tonalHover: string;
            tonalPress: string;
            tonalLightest: string;
            tonalOverlay: string;
            tonalOverlayHover: string;
            tonalOverlayPress: string;
            tonalSecondaryOverlay: string;
            tonalSecondaryOverlayHover: string;
            tonalSecondaryOverlayPress: string;
        };
        info: {
            info: string;
            infoOverlay: string;
            infoOverlayHover: string;
        };
        success: {
            success: string;
            successOverlay: string;
            successOverlayHover: string;
        };
        warning: {
            warn: string;
            warnOverlay: string;
            warnOverlayHover: string;
        };
        error: {
            error: string;
            errorHover: string;
            errorPress: string;
            errorOverlay: string;
            errorOverlayHover: string;
            errorOverlayPress: string;
        };
        disabled: {
            disabled: string;
            disabledInverse: string;
        };
        surfaces: {
            canvas: string;
            container: string;
            containerPopWindows: string;
            containerPopWeb: string;
            containerBlur: string;
            containerBlurHigh: string;
            onContainer: string;
            onContainerLow: string;
            onContainerHigh: string;
            inverseContainer: string;
            primary: string;
            off: string;
            offHover: string;
            offPress: string;
            on: string;
            onHover: string;
            onPress: string;
        };
        stroke: {
            border: string;
            borderPop: string;
            borderLow: string;
            borderHigh: string;
            borderContainerOS: string;
            borderContainer: string;
            borderTonalPrimary: string;
            borderZeroWinHct: string;
        };
        textIcon: {
            primary: string;
            secondary: string;
            placeholder: string;
            inverse: string;
            onPrimary: string;
            onSecondary: string;
            onPrimaryDisabled: string;
            onTonal: string;
            onTonalInverse: string;
            onTonalSecondary: string;
            infoOnSurface: string;
            successOnSurface: string;
            warnOnSurface: string;
            errorOnSurfaceTextDestructiveBtn: string;
            errorOnSurfaceIcon: string;
            primaryOnSurface: string;
            secondaryOnSurface: string;
            onSurface: string;
            link: string;
            linkHover: string;
            linkPress: string;
            disabled: string;
        };
        elevation: {
            dropShadowLight: string;
            dropShadowHeavy: string;
        };
        overlay: {
            scrim: string;
        };
        badge: {
            red: string;
            redLight: string;
            textIconOnRedLight: string;
            orange: string;
            orangeLight: string;
            textIconOnOrangeLight: string;
            amber: string;
            amberLight: string;
            textIconOnAmberLight: string;
            gold: string;
            goldLight: string;
            textIconOnGoldLight: string;
            yellow: string;
            yellowLight: string;
            textIconOnYellowLight: string;
            lime: string;
            limeLight: string;
            textIconOnLimeLight: string;
            green: string;
            greenLight: string;
            textIconOnGreenLight: string;
            jade: string;
            jadeLight: string;
            textIconOnJadeLight: string;
            teal: string;
            tealLight: string;
            textIconOnTealLight: string;
            aqua: string;
            aquaLight: string;
            textIconOnAquaLight: string;
            cyan: string;
            cyanLight: string;
            textIconOnCyanLight: string;
            azure: string;
            azureLight: string;
            textIconOnAzureLight: string;
            blue: string;
            blueLight: string;
            textIconOnBlueLight: string;
            indigo: string;
            indigoLight: string;
            textIconOnIndigoLight: string;
            violet: string;
            violetLight: string;
            textIconOnVioletLight: string;
            purple: string;
            purpleLight: string;
            textIconOnPurpleLight: string;
            magenta: string;
            magentaLight: string;
            textIconOnMagentaLight: string;
            pink: string;
            pinkLight: string;
            textIconOnPinkLight: string;
        };
        data: {
            "1_Data": string;
            "1_Container": string;
            "1_Overlay": string;
            "2_Data": string;
            "2_Container": string;
            "2_Overlay": string;
            "3_Data": string;
            "3_Container": string;
            "3_Overlay": string;
            "4_Data": string;
            "4_Container": string;
            "4_Overlay": string;
            "5_Data": string;
            "5_Container": string;
            "5_Overlay": string;
            "6_Data": string;
            "6_Container": string;
            "6_Overlay": string;
        };
        button: {
            primaryFill: string;
            onPrimaryFill: string;
            primaryBorder: string;
        };
        inverse: {
            surfacesOnContainerHigh: string;
            surfacesInverseContainer: string;
            surfacesContainerBlur: string;
            surfacesContainerHigh: string;
            strokeBorderZeroWinHct: string;
            strokeBorderContainer: string;
            strokeBorderLow: string;
            infoInfo: string;
            textIconPrimary: string;
            textIconSecondary: string;
            textIconOnPrimary: string;
            textIconDisabled: string;
            primaryPrimary: string;
            primaryPrimaryHover: string;
            primaryPrimaryPress: string;
            buttonPrimaryFill: string;
            buttonPrimaryBorder: string;
            buttonOnPrimaryFill: string;
            successSuccess: string;
            warningWarn: string;
            errorError: string;
            secondarySecondary: string;
            secondarySecondaryOverlay: string;
            secondarySecondaryOverlayHover: string;
            disabledDisabled: string;
            disabledDisabledInverse: string;
        };
        control: {
            fill: string;
            fillHover: string;
            fillPress: string;
            onFill: string;
            border: string;
            borderHover: string;
            selectedFill: string;
            selectedFillHover: string;
            selectedFillPress: string;
            onSelected: string;
            disabledFill: string;
            focusRing: string;
            disabledBorder: string;
        };
        ai: {
            canvasBase: string;
            chipThread: string;
            chipThreadBorder: string;
            consumerPrimaryStart: string;
            consumerPrimaryEnd: string;
            consumerFillStart: string;
            consumerFillEnd: string;
            consumerOnFill: string;
            consumerSurfaceStart: string;
            consumerSurfaceEnd: string;
            consumerCanvasStart: string;
            consumerCanvasEnd: string;
            consumerFlat: string;
            commercialPrimaryStart: string;
            commercialPrimaryEnd: string;
            commercialFillStart: string;
            commercialFillEnd: string;
            commercialOnFill: string;
            commercialSurfaceStart: string;
            commercialSurfaceEnd: string;
            commercialCanvasStart: string;
            commercialCanvasEnd: string;
            commercialFlat: string;
            internalPrimaryStart: string;
            internalPrimaryEnd: string;
            internalFillStart: string;
            internalFillEnd: string;
            internalOnFill: string;
            internalSurfaceStart: string;
            internalSurfaceEnd: string;
            internalCanvasStart: string;
            internalCanvasEnd: string;
            internalFlat: string;
        };
    };
    space: {
        readonly none: "0";
        readonly xs: "4px";
        readonly sm: "8px";
        readonly md: "12px";
        readonly lg: "16px";
        readonly xl: "20px";
        readonly '2xl': "24px";
        readonly '3xl': "32px";
        readonly '4xl': "48px";
    };
    radius: {
        readonly none: "0";
        readonly sm: "4px";
        readonly md: "8px";
        readonly lg: "12px";
        readonly xl: "16px";
        readonly pill: "999px";
        readonly round: "50%";
    };
    font: {
        readonly family: "\"Rookery New\", \"Rookery\", system-ui, sans-serif";
        readonly weight: Record<import("./typography").TypographyWeight, number>;
        readonly size: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", string>;
        readonly role: readonly ["caption", "helper", "body", "subject", "subtitle", "title", "page", "greeting", "hero", "data"];
        readonly presets: {
            readonly regular: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
            readonly medium: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
            readonly bold: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
        };
        readonly lineHeight: {
            readonly tight: 1.2;
            readonly normal: 1.5;
            readonly display: 1.1;
        };
    };
    typography: {
        readonly regular: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
        readonly medium: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
        readonly bold: Record<"caption" | "helper" | "body" | "subject" | "subtitle" | "title" | "page" | "greeting" | "hero" | "data", import("./typography").TypographyStyle>;
    };
    /**
     * Figma `elevation/<n>` — each level is a key layer (drop-shadow-light)
     * over an ambient layer (drop-shadow-heavy). Prefer `var(--elevation-<n>)`
     * in CSS; these exist for JS consumers under CakeThemeProvider.
     */
    elevation: {
        /** Resting — a surface sitting on the page. */
        0: string;
        /** Raised — a surface lifting off the page. */
        1: string;
        /** Floating — anchored transients (tooltips). */
        2: string;
        /** Overlay — detached surfaces (menus, toasts, panels). */
        3: string;
        /** Prominent — large detached surfaces (drawers, sheets). */
        4: string;
        /** Dialog — the top of the scale; surfaces that take over the screen. */
        5: string;
        /** Legacy aliases, predating the numbered Figma scale. */
        low: string;
        high: string;
    };
};
export declare const themes: Record<ThemeMode, CakeTheme>;
export type CakeTheme = ReturnType<typeof makeTheme>;
export declare const isDarkMode: (mode: ThemeMode) => mode is "dark.a" | "win hct";
export {};
//# sourceMappingURL=theme.d.ts.map