import './cakeand.css';
import { jsx as r, jsxs as d, Fragment as J } from "react/jsx-runtime";
import f from "react";
import o, { createGlobalStyle as Do, ThemeProvider as Pa, css as $, keyframes as he } from "styled-components";
import { Label as Na, Progress as Be, Separator as Ma, ScrollArea as Se, Accordion as Re, AccessibleIcon as je, Checkbox as Po, DropdownMenu as X, Toggle as _a, Avatar as cr, VisuallyHidden as Aa, ToggleGroup as Ge, Popover as fe, Select as K, Tabs as q, Dialog as ge, unstable_PasswordToggleField as dr, unstable_OneTimePasswordField as fr, RadioGroup as Te, Slider as We, Switch as No, Toast as pr, Tooltip as ke } from "radix-ui";
import { Info as ze, CircleAlert as Ba, TriangleAlert as ja, CircleCheck as Ga, ChevronDown as Ce, X as pe, Check as Le, Minus as Mo, RefreshCw as Wa, Plus as hr, File as _o, ReceiptText as Ya, Power as Ua, Grip as Za, Rocket as Ka, Wrench as Xa, Image as Ao, RotateCw as Bo, Mic as Ja, ArrowRight as qa, Square as Qa, User as Va, ExternalLink as et, MoreHorizontal as vr, ChevronRight as Ye, ChevronLeft as ur, CalendarDays as rt, LoaderCircle as ot, Upload as Ir, Trash2 as at, Settings as tt, ChevronsLeft as nt, ChevronsRight as it, EyeOff as jo, Eye as Go, PanelLeftOpen as lt, PanelLeftClose as st } from "lucide-react";
const ct = /* @__PURE__ */ JSON.parse('{"light.a":{"primary":{"primary":"#3049eb","primaryHover":"#152fc5","primaryPress":"#001a98","primaryOverlay":"rgba(117, 134, 255, 0.1)","primaryOverlayHover":"rgba(117, 134, 255, 0.2)","primaryOverlayPress":"rgba(117, 134, 255, 0.3)"},"secondary":{"secondary":"#252629","secondaryHover":"#1a1c1e","secondaryPress":"#000000","secondaryOverlay":"rgba(142, 143, 148, 0.1)","secondaryOverlayHover":"rgba(142, 143, 148, 0.2)"},"tonal":{"tonal":"#bcc3ff","tonalHover":"#98a4ff","tonalPress":"#7586ff","tonalLightest":"rgba(117, 134, 255, 0.2)","tonalOverlay":"rgba(117, 134, 255, 0.3)","tonalOverlayHover":"rgba(117, 134, 255, 0.4)","tonalOverlayPress":"rgba(117, 134, 255, 0.3)","tonalSecondaryOverlay":"rgba(142, 143, 148, 0.1)","tonalSecondaryOverlayHover":"rgba(142, 143, 148, 0.2)","tonalSecondaryOverlayPress":"rgba(142, 143, 148, 0.1)"},"info":{"info":"#0077dc","infoOverlay":"rgba(59, 146, 249, 0.1)","infoOverlayHover":"rgba(59, 146, 249, 0.2)"},"success":{"success":"#278900","successOverlay":"rgba(51, 167, 0, 0.1)","successOverlayHover":"rgba(51, 167, 0, 0.2)"},"warning":{"warn":"#e66e00","warnOverlay":"rgba(190, 135, 4, 0.1)","warnOverlayHover":"rgba(190, 135, 4, 0.2)"},"error":{"error":"#ec0032","errorHover":"#bf0026","errorPress":"#92001b","errorOverlay":"rgba(254, 83, 90, 0.1)","errorOverlayHover":"rgba(254, 83, 90, 0.2)","errorOverlayPress":"rgba(254, 83, 90, 0.3)"},"disabled":{"disabled":"#e3e2e6","disabledInverse":"#5d5e63"},"surfaces":{"canvas":"#f9f9f9","container":"#ffffff","containerPopWindows":"rgba(255, 255, 255, 0.3)","containerPopWeb":"#f0f0f0","containerBlur":"rgba(255, 255, 255, 0.7)","containerBlurHigh":"rgba(255, 255, 255, 0.8)","onContainer":"#f0f0f0","onContainerLow":"#e3e3e3","onContainerHigh":"#f9f9f9","inverseContainer":"#121315","primary":"rgba(117, 134, 255, 0.2)","off":"#252629","offHover":"#1a1c1e","offPress":"#000000","on":"#3049eb","onHover":"#152fc5","onPress":"#001a98"},"stroke":{"border":"#e3e3e3","borderPop":"#ffffff","borderLow":"#eeeeee","borderHigh":"#909090","borderContainerOS":"rgba(255, 255, 255, 0.2)","borderContainer":"rgba(255, 255, 255, 0)","borderTonalPrimary":"#ffffff","borderZeroWinHct":"rgba(227, 227, 227, 0)"},"textIcon":{"primary":"#252629","secondary":"#454649","placeholder":"#76777c","inverse":"#ffffff","onPrimary":"#f0efff","onSecondary":"#f0efff","onPrimaryDisabled":"rgba(255, 255, 255, 0.8)","onTonal":"#001a98","onTonalInverse":"#091873","onTonalSecondary":"#252629","infoOnSurface":"#0077dc","successOnSurface":"#278900","warnOnSurface":"#e66e00","errorOnSurfaceTextDestructiveBtn":"#bf0026","errorOnSurfaceIcon":"#ec0032","primaryOnSurface":"#3049eb","secondaryOnSurface":"#252629","onSurface":"#252629","link":"#3049eb","linkHover":"#152fc5","linkPress":"#001a98","disabled":"#5d5e63"},"elevation":{"dropShadowLight":"rgba(0, 0, 0, 0.05)","dropShadowHeavy":"rgba(0, 0, 0, 0.12)"},"overlay":{"scrim":"rgba(255, 255, 255, 0.6)"},"badge":{"red":"#fe535a","redLight":"#ffedec","textIconOnRedLight":"#ec0032","orange":"#e66e00","orangeLight":"#ffede4","textIconOnOrangeLight":"#bf5a00","amber":"#d57a15","amberLight":"#ffeee1","textIconOnAmberLight":"#b36400","gold":"#be8704","goldLight":"#ffefdb","textIconOnGoldLight":"#9c6f0a","yellow":"#a69100","yellowLight":"#fcf2cd","textIconOnYellowLight":"#897708","lime":"#859a00","limeLight":"#f0f4d0","textIconOnLimeLight":"#6d7f00","green":"#33a700","greenLight":"#ccffb5","textIconOnGreenLight":"#278900","jade":"#24a46a","jadeLight":"#dff7e4","textIconOnJadeLight":"#1e8757","teal":"#16a28c","tealLight":"#dbf7ee","textIconOnTealLight":"#108673","aqua":"#00a1a5","aquaLight":"#dcf6f6","textIconOnAquaLight":"#008589","cyan":"#009ebd","cyanLight":"#e0f4fc","textIconOnCyanLight":"#00829b","azure":"#009ad9","azureLight":"#e7f3fe","textIconOnAzureLight":"#007eb3","blue":"#3b92f9","blueLight":"#ecf1fe","textIconOnBlueLight":"#0077dc","indigo":"#7586ff","indigoLight":"#f0efff","textIconOnIndigoLight":"#5066ff","violet":"#a078ff","violetLight":"#f6eeff","textIconOnVioletLight":"#8952ff","purple":"#ca61fa","purpleLight":"#fbecfb","textIconOnPurpleLight":"#b43be7","magenta":"#cc2fb5","magentaLight":"#ffecf4","textIconOnMagentaLight":"#cc2fb5","pink":"#db2f7c","pinkLight":"#ffecef","textIconOnPinkLight":"#db2f7c"},"data":{"1_Data":"#7586ff","1_Container":"#cdd1ff","1_Overlay":"rgba(117, 134, 255, 0.15)","2_Data":"#00bbdf","2_Container":"#bbeafa","2_Overlay":"rgba(0, 187, 223, 0.15)","3_Data":"#dcc652","3_Container":"#fcf2cd","3_Overlay":"rgba(226, 198, 0, 0.15)","4_Data":"#f65396","4_Container":"#ffd9e2","4_Overlay":"rgba(246, 83, 150, 0.15)","5_Data":"#33c27f","5_Container":"#dff7e4","5_Overlay":"rgba(44, 194, 126, 0.15)","6_Data":"#fb911c","6_Container":"#ffdcc1","6_Overlay":"rgba(251, 145, 28, 0.15)"},"button":{"primaryFill":"#3049eb","onPrimaryFill":"#f0efff","primaryBorder":"#3049eb"},"inverse":{"surfacesOnContainerHigh":"#454649","surfacesInverseContainer":"#f9f9f9","surfacesContainerBlur":"rgba(0, 0, 0, 0.8)","surfacesContainerHigh":"rgba(0, 0, 0, 0.8)","strokeBorderZeroWinHct":"rgba(227, 227, 227, 0)","strokeBorderContainer":"#322f30","strokeBorderLow":"#322f30","infoInfo":"#a7c8fe","textIconPrimary":"#ffffff","textIconSecondary":"#c7c6ca","textIconOnPrimary":"#001a98","textIconDisabled":"#aaaaaf","primaryPrimary":"#bcc3ff","primaryPrimaryHover":"#98a4ff","primaryPrimaryPress":"#7586ff","buttonPrimaryFill":"#bcc3ff","buttonPrimaryBorder":"#bcc3ff","buttonOnPrimaryFill":"#001a98","successSuccess":"#45e400","warningWarn":"#ff8d3f","errorError":"#feb4b1","secondarySecondary":"#ffffff","secondarySecondaryOverlay":"rgba(142, 143, 148, 0.1)","secondarySecondaryOverlayHover":"rgba(142, 143, 148, 0.2)","disabledDisabled":"#393a3d","disabledDisabledInverse":"#aaaaaf"},"control":{"fill":"rgba(117, 134, 255, 0.1)","fillHover":"rgba(117, 134, 255, 0.2)","fillPress":"rgba(117, 134, 255, 0.3)","onFill":"#252629","border":"rgba(227, 227, 227, 0)","borderHover":"rgba(227, 227, 227, 0)","selectedFill":"#3049eb","selectedFillHover":"#152fc5","selectedFillPress":"#001a98","onSelected":"#f0efff","disabledFill":"#e3e2e6","focusRing":"#3049eb","disabledBorder":"rgba(227, 227, 227, 0)"},"ai":{"canvasBase":"#ffffff","chipThread":"rgba(255, 255, 255, 0.55)","chipThreadBorder":"rgba(255, 255, 255, 0)","consumerPrimaryStart":"#152fc5","consumerPrimaryEnd":"#a078ff","consumerFillStart":"#152fc5","consumerFillEnd":"#a078ff","consumerOnFill":"#ffffff","consumerSurfaceStart":"rgba(21, 47, 197, 0.15)","consumerSurfaceEnd":"rgba(160, 120, 255, 0.15)","consumerCanvasStart":"rgba(21, 47, 197, 0.05)","consumerCanvasEnd":"rgba(160, 120, 255, 0.05)","consumerFlat":"#152fc5","commercialPrimaryStart":"#004e5e","commercialPrimaryEnd":"#3b92f9","commercialFillStart":"#004e5e","commercialFillEnd":"#3b92f9","commercialOnFill":"#ffffff","commercialSurfaceStart":"rgba(0, 78, 94, 0.15)","commercialSurfaceEnd":"rgba(59, 146, 249, 0.15)","commercialCanvasStart":"rgba(0, 78, 94, 0.05)","commercialCanvasEnd":"rgba(59, 146, 249, 0.05)","commercialFlat":"#004e5e","internalPrimaryStart":"#bf0026","internalPrimaryEnd":"#d57a15","internalFillStart":"#bf0026","internalFillEnd":"#d57a15","internalOnFill":"#ffffff","internalSurfaceStart":"rgba(191, 0, 38, 0.15)","internalSurfaceEnd":"rgba(213, 122, 21, 0.15)","internalCanvasStart":"rgba(191, 0, 38, 0.05)","internalCanvasEnd":"rgba(213, 122, 21, 0.05)","internalFlat":"#bf0026"}},"dark.a":{"primary":{"primary":"#bcc3ff","primaryHover":"#98a4ff","primaryPress":"#7586ff","primaryOverlay":"rgba(117, 134, 255, 0.3)","primaryOverlayHover":"rgba(117, 134, 255, 0.2)","primaryOverlayPress":"rgba(117, 134, 255, 0.1)"},"secondary":{"secondary":"#ffffff","secondaryHover":"#e3e2e6","secondaryPress":"#aaaaaf","secondaryOverlay":"rgba(142, 143, 148, 0.1)","secondaryOverlayHover":"rgba(142, 143, 148, 0.2)"},"tonal":{"tonal":"#7586ff","tonalHover":"#98a4ff","tonalPress":"#bcc3ff","tonalLightest":"rgba(117, 134, 255, 0.4)","tonalOverlay":"rgba(117, 134, 255, 0.4)","tonalOverlayHover":"rgba(117, 134, 255, 0.3)","tonalOverlayPress":"rgba(117, 134, 255, 0.4)","tonalSecondaryOverlay":"rgba(142, 143, 148, 0.2)","tonalSecondaryOverlayHover":"rgba(142, 143, 148, 0.1)","tonalSecondaryOverlayPress":"rgba(142, 143, 148, 0.2)"},"info":{"info":"#a7c8fe","infoOverlay":"rgba(59, 146, 249, 0.2)","infoOverlayHover":"rgba(59, 146, 249, 0.1)"},"success":{"success":"#45e400","successOverlay":"rgba(51, 167, 0, 0.2)","successOverlayHover":"rgba(51, 167, 0, 0.1)"},"warning":{"warn":"#ff8d3f","warnOverlay":"rgba(190, 135, 4, 0.2)","warnOverlayHover":"rgba(190, 135, 4, 0.1)"},"error":{"error":"#feb4b1","errorHover":"#ff8886","errorPress":"#fe535a","errorOverlay":"rgba(254, 83, 90, 0.2)","errorOverlayHover":"rgba(254, 83, 90, 0.1)","errorOverlayPress":"rgba(254, 83, 90, 0.05)"},"disabled":{"disabled":"#393a3d","disabledInverse":"#aaaaaf"},"surfaces":{"canvas":"#121315","container":"#252629","containerPopWindows":"rgba(117, 134, 255, 0.2)","containerPopWeb":"rgba(117, 134, 255, 0.2)","containerBlur":"rgba(0, 0, 0, 0.7)","containerBlurHigh":"rgba(0, 0, 0, 0.8)","onContainer":"#322f30","onContainerLow":"#1d1c1c","onContainerHigh":"#454649","inverseContainer":"#f9f9f9","primary":"rgba(117, 134, 255, 0.1)","off":"#ffffff","offHover":"#e3e2e6","offPress":"#aaaaaf","on":"#bcc3ff","onHover":"#98a4ff","onPress":"#7586ff"},"stroke":{"border":"#5e5e5e","borderPop":"#5e5e5e","borderLow":"#322f30","borderHigh":"#777777","borderContainerOS":"rgba(0, 0, 0, 0.05)","borderContainer":"#322f30","borderTonalPrimary":"#000000","borderZeroWinHct":"rgba(94, 94, 94, 0)"},"textIcon":{"primary":"#ffffff","secondary":"#c7c6ca","placeholder":"#aaaaaf","inverse":"#252629","onPrimary":"#001a98","onSecondary":"#252629","onPrimaryDisabled":"#001a98","onTonal":"#cdd1ff","onTonalInverse":"#091873","onTonalSecondary":"#ffffff","infoOnSurface":"#a7c8fe","successOnSurface":"#45e400","warnOnSurface":"#ff8d3f","errorOnSurfaceTextDestructiveBtn":"#feb4b1","errorOnSurfaceIcon":"#feb4b1","primaryOnSurface":"#bcc3ff","secondaryOnSurface":"#ffffff","onSurface":"#ffffff","link":"#bcc3ff","linkHover":"#98a4ff","linkPress":"#7586ff","disabled":"#aaaaaf"},"elevation":{"dropShadowLight":"rgba(0, 0, 0, 0.2)","dropShadowHeavy":"rgba(0, 0, 0, 0.25)"},"overlay":{"scrim":"rgba(0, 0, 0, 0.3)"},"badge":{"red":"#feb4b1","redLight":"rgba(254, 83, 90, 0.2)","textIconOnRedLight":"#feb4b1","orange":"#ffb68b","orangeLight":"rgba(230, 110, 0, 0.2)","textIconOnOrangeLight":"#ffb68b","amber":"#ffb779","amberLight":"rgba(213, 122, 21, 0.2)","textIconOnAmberLight":"#ffb779","gold":"#f6bd59","goldLight":"rgba(190, 135, 4, 0.2)","textIconOnGoldLight":"#ffddaa","yellow":"#dcc652","yellowLight":"rgba(166, 145, 0, 0.2)","textIconOnYellowLight":"#f2e3a3","lime":"#becf61","limeLight":"rgba(133, 154, 0, 0.2)","textIconOnLimeLight":"#dee8a8","green":"#45e400","greenLight":"rgba(51, 167, 0, 0.2)","textIconOnGreenLight":"#80ff55","jade":"#76daa1","jadeLight":"rgba(36, 164, 106, 0.2)","textIconOnJadeLight":"#bcedcb","teal":"#6dd9c1","tealLight":"rgba(22, 162, 140, 0.2)","textIconOnTealLight":"#b5efe0","aqua":"#6ed6da","aquaLight":"rgba(0, 161, 165, 0.2)","textIconOnAquaLight":"#b2edf0","cyan":"#77d3f0","cyanLight":"rgba(0, 158, 189, 0.2)","textIconOnCyanLight":"#bbeafa","azure":"#8fcefa","azureLight":"rgba(0, 154, 217, 0.2)","textIconOnAzureLight":"#c9e6fd","blue":"#a7c8fe","blueLight":"rgba(59, 146, 249, 0.2)","textIconOnBlueLight":"#d5e3fe","indigo":"#bcc3ff","indigoLight":"rgba(117, 134, 255, 0.2)","textIconOnIndigoLight":"#dee0ff","violet":"#d0bcff","violetLight":"rgba(160, 120, 255, 0.2)","textIconOnVioletLight":"#e9ddff","purple":"#ebb2ff","purpleLight":"rgba(202, 97, 250, 0.2)","textIconOnPurpleLight":"#f8d8ff","magenta":"#f582da","magentaLight":"rgba(231, 88, 204, 0.2)","textIconOnMagentaLight":"#fdd8ef","pink":"#fc85ae","pinkLight":"rgba(246, 83, 150, 0.3)","textIconOnPinkLight":"#ffd9e2"},"data":{"1_Data":"#7586ff","1_Container":"#cdd1ff","1_Overlay":"rgba(117, 134, 255, 0.15)","2_Data":"#00bbdf","2_Container":"#bbeafa","2_Overlay":"rgba(0, 187, 223, 0.15)","3_Data":"#dcc652","3_Container":"#fcf2cd","3_Overlay":"rgba(226, 198, 0, 0.15)","4_Data":"#f65396","4_Container":"#ffd9e2","4_Overlay":"rgba(246, 83, 150, 0.15)","5_Data":"#33c27f","5_Container":"#dff7e4","5_Overlay":"rgba(44, 194, 126, 0.15)","6_Data":"#fb911c","6_Container":"#ffdcc1","6_Overlay":"rgba(251, 145, 28, 0.15)"},"button":{"primaryFill":"#bcc3ff","onPrimaryFill":"#001a98","primaryBorder":"#bcc3ff"},"inverse":{"surfacesOnContainerHigh":"#f9f9f9","surfacesInverseContainer":"#121315","surfacesContainerBlur":"#f9f9f9","surfacesContainerHigh":"#f9f9f9","strokeBorderZeroWinHct":"rgba(94, 94, 94, 0)","strokeBorderContainer":"rgba(255, 255, 255, 0)","strokeBorderLow":"#eeeeee","infoInfo":"#0077dc","textIconPrimary":"#252629","textIconSecondary":"#454649","textIconOnPrimary":"#f0efff","textIconDisabled":"#5d5e63","primaryPrimary":"#3049eb","primaryPrimaryHover":"#152fc5","primaryPrimaryPress":"#001a98","buttonPrimaryFill":"#3049eb","buttonPrimaryBorder":"#3049eb","buttonOnPrimaryFill":"#f0efff","successSuccess":"#278900","warningWarn":"#e66e00","errorError":"#ec0032","secondarySecondary":"#252629","secondarySecondaryOverlay":"rgba(142, 143, 148, 0.1)","secondarySecondaryOverlayHover":"rgba(142, 143, 148, 0.2)","disabledDisabled":"#e3e2e6","disabledDisabledInverse":"#5d5e63"},"control":{"fill":"rgba(117, 134, 255, 0.3)","fillHover":"rgba(117, 134, 255, 0.2)","fillPress":"rgba(117, 134, 255, 0.1)","onFill":"#ffffff","border":"rgba(94, 94, 94, 0)","borderHover":"rgba(94, 94, 94, 0)","selectedFill":"#bcc3ff","selectedFillHover":"#98a4ff","selectedFillPress":"#7586ff","onSelected":"#001a98","disabledFill":"#393a3d","focusRing":"#bcc3ff","disabledBorder":"rgba(94, 94, 94, 0)"},"ai":{"canvasBase":"#121315","chipThread":"rgba(37, 38, 41, 0.85)","chipThreadBorder":"#393a3d","consumerPrimaryStart":"#98a4ff","consumerPrimaryEnd":"#d0bcff","consumerFillStart":"#bcc3ff","consumerFillEnd":"#d0bcff","consumerOnFill":"#001a98","consumerSurfaceStart":"rgba(117, 134, 255, 0.22)","consumerSurfaceEnd":"rgba(160, 120, 255, 0.22)","consumerCanvasStart":"rgba(117, 134, 255, 0.1)","consumerCanvasEnd":"rgba(160, 120, 255, 0.1)","consumerFlat":"#bcc3ff","commercialPrimaryStart":"#00bbdf","commercialPrimaryEnd":"#a7c8fe","commercialFillStart":"#77d3f0","commercialFillEnd":"#a7c8fe","commercialOnFill":"#003541","commercialSurfaceStart":"rgba(0, 158, 189, 0.22)","commercialSurfaceEnd":"rgba(59, 146, 249, 0.22)","commercialCanvasStart":"rgba(0, 158, 189, 0.1)","commercialCanvasEnd":"rgba(59, 146, 249, 0.1)","commercialFlat":"#77d3f0","internalPrimaryStart":"#ff8886","internalPrimaryEnd":"#ffb779","internalFillStart":"#feb4b1","internalFillEnd":"#ffb779","internalOnFill":"#690010","internalSurfaceStart":"rgba(254, 83, 90, 0.22)","internalSurfaceEnd":"rgba(213, 122, 21, 0.22)","internalCanvasStart":"rgba(254, 83, 90, 0.1)","internalCanvasEnd":"rgba(213, 122, 21, 0.1)","internalFlat":"#feb4b1"}},"win hct":{"primary":{"primary":"#8ee3f0","primaryHover":"#8ee3f0","primaryPress":"#8ee3f0","primaryOverlay":"#8ee3f0","primaryOverlayHover":"#8ee3f0","primaryOverlayPress":"#8ee3f0"},"secondary":{"secondary":"#8ee3f0","secondaryHover":"#8ee3f0","secondaryPress":"#8ee3f0","secondaryOverlay":"#8ee3f0","secondaryOverlayHover":"#8ee3f0"},"tonal":{"tonal":"#8ee3f0","tonalHover":"#8ee3f0","tonalPress":"#8ee3f0","tonalLightest":"#8ee3f0","tonalOverlay":"#8ee3f0","tonalOverlayHover":"#8ee3f0","tonalOverlayPress":"#8ee3f0","tonalSecondaryOverlay":"#ffffff","tonalSecondaryOverlayHover":"#ffffff","tonalSecondaryOverlayPress":"#ffffff"},"info":{"info":"#8ee3f0","infoOverlay":"#8ee3f0","infoOverlayHover":"#8ee3f0"},"success":{"success":"#8ee3f0","successOverlay":"#8ee3f0","successOverlayHover":"#8ee3f0"},"warning":{"warn":"#8ee3f0","warnOverlay":"#8ee3f0","warnOverlayHover":"#8ee3f0"},"error":{"error":"#8ee3f0","errorHover":"#8ee3f0","errorPress":"#8ee3f0","errorOverlay":"#8ee3f0","errorOverlayHover":"#8ee3f0","errorOverlayPress":"#8ee3f0"},"disabled":{"disabled":"#a6a6a6","disabledInverse":"#202020"},"surfaces":{"canvas":"#202020","container":"#202020","containerPopWindows":"#202020","containerPopWeb":"#202020","containerBlur":"#202020","containerBlurHigh":"#202020","onContainer":"#202020","onContainerLow":"#202020","onContainerHigh":"#202020","inverseContainer":"#ffffff","primary":"#202020","off":"#ffffff","offHover":"#ffffff","offPress":"#ffffff","on":"#8ee3f0","onHover":"#8ee3f0","onPress":"#8ee3f0"},"stroke":{"border":"#ffffff","borderPop":"#ffffff","borderLow":"#a6a6a6","borderHigh":"#ffffff","borderContainerOS":"#ffffff","borderContainer":"#a6a6a6","borderTonalPrimary":"#75e9fc","borderZeroWinHct":"#ffffff"},"textIcon":{"primary":"#ffffff","secondary":"#ffffff","placeholder":"#a6a6a6","inverse":"#202020","onPrimary":"#202020","onSecondary":"#202020","onPrimaryDisabled":"#a6a6a6","onTonal":"#263b50","onTonalInverse":"#263b50","onTonalSecondary":"#202020","infoOnSurface":"#202020","successOnSurface":"#202020","warnOnSurface":"#202020","errorOnSurfaceTextDestructiveBtn":"#202020","errorOnSurfaceIcon":"#8ee3f0","primaryOnSurface":"#202020","secondaryOnSurface":"#202020","onSurface":"#202020","link":"#75e9fc","linkHover":"#75e9fc","linkPress":"#75e9fc","disabled":"#a6a6a6"},"elevation":{"dropShadowLight":"#202020","dropShadowHeavy":"#202020"},"overlay":{"scrim":"#ffffff"},"badge":{"red":"#8ee3f0","redLight":"#8ee3f0","textIconOnRedLight":"#202020","orange":"#8ee3f0","orangeLight":"#8ee3f0","textIconOnOrangeLight":"#202020","amber":"#8ee3f0","amberLight":"#8ee3f0","textIconOnAmberLight":"#202020","gold":"#8ee3f0","goldLight":"#8ee3f0","textIconOnGoldLight":"#202020","yellow":"#8ee3f0","yellowLight":"#8ee3f0","textIconOnYellowLight":"#202020","lime":"#8ee3f0","limeLight":"#8ee3f0","textIconOnLimeLight":"#202020","green":"#8ee3f0","greenLight":"#8ee3f0","textIconOnGreenLight":"#202020","jade":"#8ee3f0","jadeLight":"#8ee3f0","textIconOnJadeLight":"#202020","teal":"#8ee3f0","tealLight":"#8ee3f0","textIconOnTealLight":"#202020","aqua":"#8ee3f0","aquaLight":"#8ee3f0","textIconOnAquaLight":"#202020","cyan":"#8ee3f0","cyanLight":"#8ee3f0","textIconOnCyanLight":"#202020","azure":"#8ee3f0","azureLight":"#8ee3f0","textIconOnAzureLight":"#202020","blue":"#8ee3f0","blueLight":"#8ee3f0","textIconOnBlueLight":"#202020","indigo":"#8ee3f0","indigoLight":"#8ee3f0","textIconOnIndigoLight":"#202020","violet":"#8ee3f0","violetLight":"#8ee3f0","textIconOnVioletLight":"#202020","purple":"#8ee3f0","purpleLight":"#8ee3f0","textIconOnPurpleLight":"#202020","magenta":"#8ee3f0","magentaLight":"#8ee3f0","textIconOnMagentaLight":"#202020","pink":"#8ee3f0","pinkLight":"#8ee3f0","textIconOnPinkLight":"#202020"},"data":{"1_Data":"#75e9fc","1_Container":"#202020","1_Overlay":"#8ee3f0","2_Data":"#75e9fc","2_Container":"#202020","2_Overlay":"#8ee3f0","3_Data":"#75e9fc","3_Container":"#202020","3_Overlay":"#8ee3f0","4_Data":"#75e9fc","4_Container":"#202020","4_Overlay":"#8ee3f0","5_Data":"#75e9fc","5_Container":"#202020","5_Overlay":"#8ee3f0","6_Data":"#75e9fc","6_Container":"#202020","6_Overlay":"#8ee3f0"},"button":{"primaryFill":"#202020","onPrimaryFill":"#ffffff","primaryBorder":"#ffffff"},"inverse":{"surfacesOnContainerHigh":"#202020","surfacesInverseContainer":"#ffffff","surfacesContainerBlur":"#202020","surfacesContainerHigh":"#202020","strokeBorderZeroWinHct":"#ffffff","strokeBorderContainer":"#a6a6a6","strokeBorderLow":"#a6a6a6","infoInfo":"#8ee3f0","textIconPrimary":"#ffffff","textIconSecondary":"#ffffff","textIconOnPrimary":"#202020","textIconDisabled":"#a6a6a6","primaryPrimary":"#8ee3f0","primaryPrimaryHover":"#8ee3f0","primaryPrimaryPress":"#8ee3f0","buttonPrimaryFill":"#202020","buttonPrimaryBorder":"#ffffff","buttonOnPrimaryFill":"#ffffff","successSuccess":"#8ee3f0","warningWarn":"#8ee3f0","errorError":"#8ee3f0","secondarySecondary":"#8ee3f0","secondarySecondaryOverlay":"#8ee3f0","secondarySecondaryOverlayHover":"#8ee3f0","disabledDisabled":"#a6a6a6","disabledDisabledInverse":"#202020"},"control":{"fill":"#202020","fillHover":"#202020","fillPress":"#202020","onFill":"#ffffff","border":"#ffffff","borderHover":"#8ee3f0","selectedFill":"#8ee3f0","selectedFillHover":"#8ee3f0","selectedFillPress":"#8ee3f0","onSelected":"#263b50","disabledFill":"#202020","focusRing":"#ffffff","disabledBorder":"#a6a6a6"},"ai":{"canvasBase":"#ffffff","chipThread":"rgba(255, 255, 255, 0.55)","chipThreadBorder":"rgba(255, 255, 255, 0)","consumerPrimaryStart":"#152fc5","consumerPrimaryEnd":"#a078ff","consumerFillStart":"#152fc5","consumerFillEnd":"#a078ff","consumerOnFill":"#ffffff","consumerSurfaceStart":"rgba(21, 47, 197, 0.15)","consumerSurfaceEnd":"rgba(160, 120, 255, 0.15)","consumerCanvasStart":"rgba(21, 47, 197, 0.05)","consumerCanvasEnd":"rgba(160, 120, 255, 0.05)","consumerFlat":"#152fc5","commercialPrimaryStart":"#004e5e","commercialPrimaryEnd":"#3b92f9","commercialFillStart":"#004e5e","commercialFillEnd":"#3b92f9","commercialOnFill":"#ffffff","commercialSurfaceStart":"rgba(0, 78, 94, 0.15)","commercialSurfaceEnd":"rgba(59, 146, 249, 0.15)","commercialCanvasStart":"rgba(0, 78, 94, 0.05)","commercialCanvasEnd":"rgba(59, 146, 249, 0.05)","commercialFlat":"#004e5e","internalPrimaryStart":"#bf0026","internalPrimaryEnd":"#d57a15","internalFillStart":"#bf0026","internalFillEnd":"#d57a15","internalOnFill":"#ffffff","internalSurfaceStart":"rgba(191, 0, 38, 0.15)","internalSurfaceEnd":"rgba(213, 122, 21, 0.15)","internalCanvasStart":"rgba(191, 0, 38, 0.05)","internalCanvasEnd":"rgba(213, 122, 21, 0.05)","internalFlat":"#bf0026"}}}'), dt = {
  theme: ct
}, Ue = [
  "caption",
  "helper",
  "body",
  "subject",
  "subtitle",
  "title",
  "page",
  "greeting",
  "hero",
  "data"
], gr = {
  caption: 12,
  helper: 14,
  body: 14,
  subject: 16,
  subtitle: 18,
  title: 20,
  page: 28,
  greeting: 32,
  hero: 42,
  data: 68
}, ft = (e) => `${e / 16}rem`, Wo = Object.fromEntries(
  Ue.map((e) => [e, ft(gr[e])])
), Yo = {
  regular: 400,
  medium: 500,
  bold: 700
}, pt = (e) => e === "data" ? 1.1 : ["page", "greeting", "hero"].includes(e) ? 1.2 : ["subtitle", "title"].includes(e) ? 1.3 : 1.5, Uo = '"Rookery New", "Rookery", system-ui, sans-serif', qe = (e) => Object.fromEntries(
  Ue.map((a) => {
    const t = gr[a];
    return [
      a,
      {
        fontFamily: Uo,
        fontSize: Wo[a],
        fontWeight: Yo[e],
        lineHeight: pt(a),
        token: `${e}.${t}.${a}`
      }
    ];
  })
), Zo = {
  regular: qe("regular"),
  medium: qe("medium"),
  bold: qe("bold")
};
["regular", "medium", "bold"].flatMap(
  (e) => Ue.map((a) => ({
    weight: e,
    role: a,
    px: gr[a],
    // `token` intentionally comes from the preset spread below — it builds the
    // identical `${weight}.${px}.${role}` id, so declaring it here as well was
    // redundant and silently overwritten.
    ...Zo[e][a]
  }))
);
const Sr = {
  family: Uo,
  weight: Yo,
  size: Wo,
  role: Ue,
  presets: Zo,
  lineHeight: { tight: 1.2, normal: 1.5, display: 1.1 }
}, ht = {
  none: "0",
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "32px",
  "4xl": "48px"
}, vt = {
  none: "0",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  pill: "999px",
  round: "50%"
}, br = (e) => {
  const a = dt.theme[e];
  return {
    mode: e,
    color: a,
    space: ht,
    radius: vt,
    font: Sr,
    typography: Sr.presets,
    /**
     * Figma `elevation/<n>` — each level is a key layer (drop-shadow-light)
     * over an ambient layer (drop-shadow-heavy). Prefer `var(--elevation-<n>)`
     * in CSS; these exist for JS consumers under CakeThemeProvider.
     */
    elevation: {
      /** Resting — a surface sitting on the page. */
      0: `0 1px 2px 0 ${a.elevation.dropShadowLight}, 0 0 4px 0 ${a.elevation.dropShadowHeavy}`,
      /** Raised — a surface lifting off the page. */
      1: `0 1px 4px 0 ${a.elevation.dropShadowLight}, 0 1px 8px 0 ${a.elevation.dropShadowHeavy}`,
      /** Floating — anchored transients (tooltips). */
      2: `0 2px 8px 0 ${a.elevation.dropShadowLight}, 0 2px 16px 0 ${a.elevation.dropShadowHeavy}`,
      /** Overlay — detached surfaces (menus, toasts, panels). */
      3: `0 4px 12px 0 ${a.elevation.dropShadowLight}, 0 3px 24px 0 ${a.elevation.dropShadowHeavy}`,
      /** Prominent — large detached surfaces (drawers, sheets). */
      4: `0 6px 18px 0 ${a.elevation.dropShadowLight}, 0 4px 36px 0 ${a.elevation.dropShadowHeavy}`,
      /** Dialog — the top of the scale; surfaces that take over the screen. */
      5: `0 8px 24px 0 ${a.elevation.dropShadowLight}, 0 4px 48px 0 ${a.elevation.dropShadowHeavy}`,
      /** Legacy aliases, predating the numbered Figma scale. */
      low: `0 1px 2px 0 ${a.elevation.dropShadowLight}`,
      high: `0 12px 32px -4px ${a.elevation.dropShadowHeavy}`
    }
  };
}, ut = br("light.a"), gt = br("dark.a"), bt = br("win hct"), mt = {
  "light.a": ut,
  "dark.a": gt,
  "win hct": bt
}, yt = Do`
  *, *::before, *::after { box-sizing: border-box; }

  body {
    margin: 0;
    font-family: ${(e) => e.theme.font.family};
    color: ${(e) => e.theme.color.textIcon.primary};
    background: ${(e) => e.theme.color.surfaces.canvas};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`, xt = ({
  mode: e = "light.a",
  children: a
}) => /* @__PURE__ */ r(Pa, { theme: mt[e], children: a }), wt = Do`
  :root,
  [data-theme='light.a'] {
    --brand-pc: #394edb;
  }

  [data-theme='dark.a'],
  [data-theme='win hct'] {
    --brand-pc: #bcc3ff;
  }
`, $t = typeof window < "u" ? f.useLayoutEffect : f.useEffect, I0 = ({
  mode: e = "light.a",
  children: a,
  globalStyles: t = !0,
  scope: i = "document"
}) => ($t(() => {
  if (i !== "document" || typeof document > "u") return;
  const n = document.documentElement, l = n.getAttribute("data-theme");
  return n.setAttribute("data-theme", e), () => {
    l === null ? n.removeAttribute("data-theme") : n.setAttribute("data-theme", l);
  };
}, [e, i]), /* @__PURE__ */ d(xt, { mode: e, children: [
  /* @__PURE__ */ r(wt, {}),
  t ? /* @__PURE__ */ r(yt, {}) : null,
  i === "subtree" ? /* @__PURE__ */ r("div", { "data-theme": e, children: a }) : a
] })), kt = o(Na.Root)`
  display: flex;
  align-items: center;
  gap: var(--space-100);
  width: 100%;
  font-family: var(--font-family);
  font-weight: var(--font-weight-medium);
  font-size: ${(e) => e.$size === "md" ? "var(--type-size-subject)" : "var(--type-size-body)"};
  line-height: 1.35;
  color: ${(e) => e.$disabled ? "var(--color-disabled-disabled-inverse)" : "var(--color-text-icon-primary)"};
`, zt = o.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-050);
  min-width: 0;
  flex: 1;
`, It = o.span`
  display: inline-flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  & > svg {
    width: 100%;
    height: 100%;
  }
`, St = o.span`
  font-weight: var(--font-weight-regular);
  font-size: var(--type-size-helper);
  color: var(--color-text-icon-placeholder);
  white-space: nowrap;
`, ae = f.forwardRef(
  ({ children: e, size: a = "md", required: t = !1, showInfo: i = !1, disabled: n = !1, ...l }, s) => /* @__PURE__ */ d(kt, { ref: s, $size: a, $disabled: n, ...l, children: [
    /* @__PURE__ */ d(zt, { children: [
      /* @__PURE__ */ r("span", { children: e }),
      i ? /* @__PURE__ */ r(It, { "aria-hidden": !0, children: /* @__PURE__ */ r(ze, {}) }) : null
    ] }),
    t ? /* @__PURE__ */ r(St, { children: "(required)" }) : null
  ] })
);
ae.displayName = "InputLabel";
const Rt = {
  greyscale: "var(--color-text-icon-secondary)",
  info: "var(--color-info-info)",
  success: "var(--color-success-success)",
  warning: "var(--color-warning-warn)",
  error: "var(--color-error-error)",
  disabled: "var(--color-disabled-disabled-inverse)"
}, Tt = {
  greyscale: ze,
  info: ze,
  success: Ga,
  warning: ja,
  error: Ba,
  disabled: ze
}, Ct = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-100);
  width: 100%;
  font-family: var(--font-family);
  font-size: var(--type-size-helper);
  line-height: 1.35;
  color: ${(e) => Rt[e.$tone]};
`, Lt = o.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-100);
  min-width: 0;
`, Ot = o.span`
  display: inline-flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  & > svg {
    width: 100%;
    height: 100%;
  }
`, Ht = o.span`
  flex: 1;
  min-width: 0;
  display: inline-flex;
  justify-content: flex-end;
  white-space: nowrap;
`, V = f.forwardRef(
  ({ children: e, tone: a = "greyscale", showIcon: t = !0, count: i, max: n, ...l }, s) => {
    const c = Tt[a], p = typeof i == "number" && typeof n == "number";
    return /* @__PURE__ */ d(Ct, { ref: s, $tone: a, ...l, children: [
      e != null ? /* @__PURE__ */ d(Lt, { children: [
        t ? /* @__PURE__ */ r(Ot, { "aria-hidden": !0, children: /* @__PURE__ */ r(c, {}) }) : null,
        /* @__PURE__ */ r("span", { children: e })
      ] }) : null,
      p ? /* @__PURE__ */ d(Ht, { children: [
        i,
        "/",
        n
      ] }) : null
    ] });
  }
);
V.displayName = "HelperString";
const Ft = { thin: 12, thick: 18 }, Et = {
  info: "var(--color-info-info)",
  primary: "var(--color-primary-primary)",
  secondary: "var(--color-secondary-secondary)",
  success: "var(--color-success-success)",
  warn: "var(--color-warning-warn)",
  error: "var(--color-error-error)"
}, Dt = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-050);
  width: 100%;
`, Pt = o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 0;
  font-family: var(--font-family);
  font-size: var(--type-size-subject);
  line-height: 1.35;
  color: var(--color-text-icon-primary);
`, Nt = o.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-100);
  min-width: 0;
  font-weight: var(--font-weight-medium);
`, Mt = o.span`
  display: inline-flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`, _t = o.span`
  flex-shrink: 0;
  margin-left: var(--space-100);
  font-weight: var(--font-weight-regular);
`, At = o(Be.Root)`
  width: 100%;
  height: ${(e) => Ft[e.$width]}px;
  overflow: hidden;
  border-radius: var(--radius-1000);
  background: var(--color-stroke-border);
`, Bt = o(Be.Indicator)`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: ${(e) => Et[e.$color]};
  transform-origin: left;
  transition: transform 160ms ease;
`, jt = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-100);
  width: 100%;
`, Gt = o(V)`
  flex: 1;
  min-width: 0;
`, Wt = o.span`
  flex-shrink: 0;
  font-family: var(--font-family);
  font-size: var(--type-size-helper);
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  color: var(--color-text-icon-secondary);
`, Yt = (e, a) => Math.min(Math.max(e, 0), a), Ko = f.forwardRef(
  ({
    value: e = 30,
    max: a = 100,
    color: t = "info",
    width: i = "thick",
    label: n = "Label",
    labelValue: l = "40MB",
    showLabelIcon: s = !0,
    helperText: c = "Example helper string",
    showHelper: p = !0,
    showHelperIcon: h = !0,
    showValue: b = !0,
    helperTone: v = "greyscale",
    "aria-label": g,
    ...m
  }, u) => {
    const y = f.useId(), k = a > 0 ? a : 100, w = Yt(e, k), z = w / k, I = Math.round(z * 100), L = p && (c != null || b);
    return /* @__PURE__ */ d(Dt, { children: [
      n != null ? /* @__PURE__ */ d(Pt, { children: [
        /* @__PURE__ */ d(Nt, { id: y, children: [
          /* @__PURE__ */ r("span", { children: n }),
          s ? /* @__PURE__ */ r(Mt, { "aria-hidden": !0, children: /* @__PURE__ */ r(ze, {}) }) : null
        ] }),
        l != null ? /* @__PURE__ */ r(_t, { children: l }) : null
      ] }) : null,
      /* @__PURE__ */ r(
        At,
        {
          ref: u,
          value: w,
          max: k,
          "aria-labelledby": n != null && !g ? y : void 0,
          "aria-label": g ?? (n == null ? "Progress" : void 0),
          $width: i,
          ...m,
          children: /* @__PURE__ */ r(
            Bt,
            {
              $color: t,
              style: { transform: `translateX(-${100 - z * 100}%)` }
            }
          )
        }
      ),
      L ? /* @__PURE__ */ d(jt, { children: [
        c != null ? /* @__PURE__ */ r(Gt, { tone: v, showIcon: h, children: c }) : /* @__PURE__ */ r("span", {}),
        b ? /* @__PURE__ */ d(Wt, { children: [
          I,
          "%"
        ] }) : null
      ] }) : null
    ] });
  }
);
Ko.displayName = "ProgressBar";
const Rr = {
  empty: 0,
  weak: 1,
  medium: 2,
  strong: 3
}, Ut = [
  { id: "lowercase", label: "At least one lowercase", metAt: "weak" },
  { id: "uppercase", label: "At least one uppercase", metAt: "medium" },
  { id: "numeric", label: "At least one numeric", metAt: "strong" },
  { id: "length", label: "Minimum 8 characters", metAt: "strong" }
], Zt = 320, Kt = o.div`
  display: inline-flex;
  flex-direction: column;
  gap: var(--space-050);
  width: ${Zt}px;
  max-width: 100%;
  font-family: var(--font-family);
`, Xt = o.section`
  overflow: hidden;
  border-radius: var(--radius-200);
  background: var(--color-surfaces-container);
  box-shadow: var(--elevation-3);
  /*
   * Figma's "surfaces/container blur" effect has a 90-radius blur. CSS's
   * 45px blur is the equivalent visual radius; this is intrinsic geometry
   * from node 72:5116, not a tokenized spacing or shadow value.
   */
  backdrop-filter: blur(45px);
`, Jt = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-100);
  padding: var(--space-300);
`, qt = o.h2`
  width: 100%;
  margin: 0;
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
  color: var(--color-text-icon-primary);
`, Qt = o.p`
  width: 100%;
  margin: 0;
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  color: var(--color-text-icon-primary);
`, Vt = o.div`
  height: var(--stroke-100);
  background: var(--color-stroke-border);
`, en = o.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space-100);
  margin: 0;
  padding: var(--space-300);
  list-style: none;
`, rn = o(V)`
  color: var(--color-text-icon-primary);

  svg {
    color: ${(e) => e.$met ? "var(--color-success-success)" : "var(--color-error-error)"};
  }
`, Tr = {
  empty: "Enter a password",
  weak: "Weak",
  medium: "Medium",
  strong: "Strong"
}, on = {
  empty: 0,
  weak: 43,
  medium: 43,
  strong: 100
}, an = {
  empty: "secondary",
  weak: "error",
  medium: "warn",
  strong: "success"
}, Xo = f.forwardRef(
  ({
    strength: e = "empty",
    title: a = "Pick a password",
    statusLabel: t,
    requirements: i = Ut,
    metRequirementIds: n,
    label: l,
    htmlFor: s,
    showLabelInfo: c = !1,
    required: p = !1,
    disabled: h = !1,
    "aria-label": b
  }, v) => {
    const g = f.useId(), m = Rr[e];
    return /* @__PURE__ */ d(Kt, { children: [
      l ? /* @__PURE__ */ r(
        ae,
        {
          htmlFor: s,
          size: "sm",
          required: p,
          showInfo: c,
          disabled: h,
          children: l
        }
      ) : null,
      /* @__PURE__ */ d(Xt, { ref: v, "aria-labelledby": b ? void 0 : g, "aria-label": b, children: [
        /* @__PURE__ */ d(Jt, { children: [
          /* @__PURE__ */ r(qt, { id: g, children: a }),
          /* @__PURE__ */ r(
            Ko,
            {
              value: on[e],
              color: an[e],
              width: "thin",
              label: null,
              showHelper: !1,
              "aria-label": "Password strength",
              "aria-valuetext": t ?? Tr[e]
            }
          ),
          /* @__PURE__ */ r(Qt, { "aria-live": "polite", children: t ?? Tr[e] })
        ] }),
        /* @__PURE__ */ r(Vt, {}),
        /* @__PURE__ */ r(en, { "aria-label": "Password requirements", children: i.map((u) => {
          const y = n ? n.includes(u.id) : m >= Rr[u.metAt];
          return /* @__PURE__ */ r("li", { children: /* @__PURE__ */ r(rn, { tone: y ? "success" : "error", $met: y, children: u.label }) }, u.id);
        }) })
      ] })
    ] });
  }
);
Xo.displayName = "PasswordMenu";
const tn = o(Ma.Root)`
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  border: none;
  background: transparent;
  padding: var(--space-025);

  ${(e) => e.$direction === "horizontal" ? `
        width: 100%;
        height: calc(var(--space-025) + var(--space-025) + var(--stroke-100));
      ` : `
        align-self: stretch;
        width: calc(var(--space-025) + var(--space-025) + var(--stroke-100));
        height: 100%;
      `}

  &::before {
    content: '';
    display: block;
    width: ${(e) => e.$direction === "horizontal" ? "100%" : "var(--stroke-100)"};
    height: ${(e) => e.$direction === "horizontal" ? "var(--stroke-100)" : "100%"};
    background: ${(e) => e.$weight === "primary" ? "var(--color-stroke-border)" : "var(--color-stroke-border-low)"};
  }
`, Oe = f.forwardRef(
  ({ direction: e = "horizontal", weight: a = "primary", ...t }, i) => /* @__PURE__ */ r(
    tn,
    {
      ref: i,
      orientation: e,
      $direction: e,
      $weight: a,
      ...t
    }
  )
);
Oe.displayName = "Divider";
const Cr = "4px", Lr = "8px", Or = (e) => e == null ? "none" : typeof e == "number" ? `${e}px` : e, nn = o(Se.Root)`
  position: relative;
  overflow: hidden;
`, ln = o(Se.Viewport)`
  width: 100%;
  height: 100%;
  /* The caps live here, on the actual overflow:scroll container — not on the
     Root. A percentage height on the Viewport resolves against an indefinite
     Root as auto, so capping the Root instead never makes the vertical axis a
     bounded scroll container (the thumb would never appear). */
  max-height: var(--_max-height);
  max-width: var(--_max-width);

  /* Radix sets its content wrapper to display:table with min-width:100%, and
     that table display is load-bearing: it makes the wrapper size to its
     children on both axes, which is how Radix measures content to work out the
     thumb's length. Overriding it to block defeats that measurement and the
     thumb renders full-length instead of proportional.

     Vertical-only scrollers still need the wrapper not to grow past the
     viewport, or a wide child stretches the table and text-overflow:ellipsis
     stops working in menus. Capping max-width does that without touching the
     display, so measurement survives. Horizontal axes get no cap — content
     growing wider is exactly what makes them scroll. */
  ${(e) => e.$horizontal ? "" : $`
          & > div {
            max-width: 100%;
          }
        `}
`, Hr = o(Se.Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  background: transparent;

  &[data-orientation='vertical'] {
    width: calc(${Cr} + var(--space-050) * 2);
    padding: var(--space-050);
    transition: width 140ms ease;
  }
  &[data-orientation='vertical']:hover,
  &[data-orientation='vertical'][data-state='visible']:active {
    width: calc(${Lr} + var(--space-050) * 2);
  }

  &[data-orientation='horizontal'] {
    flex-direction: column;
    height: calc(${Cr} + var(--space-050) * 2);
    padding: var(--space-050);
    transition: height 140ms ease;
  }
  &[data-orientation='horizontal']:hover,
  &[data-orientation='horizontal'][data-state='visible']:active {
    height: calc(${Lr} + var(--space-050) * 2);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`, Fr = o(Se.Thumb)`
  flex: 1;
  border-radius: var(--radius-50);
  background: var(--color-stroke-border-high);
`, sn = o(Se.Corner)`
  background: transparent;
`, Ze = $`
  scrollbar-width: thin;
  scrollbar-color: var(--color-stroke-border-high) transparent;

  &::-webkit-scrollbar {
    width: var(--space-050);
    height: var(--space-050);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-stroke-border-high);
    border-radius: var(--radius-50);
  }
`, mr = f.forwardRef(
  ({ children: e, maxHeight: a, maxWidth: t, orientation: i = "vertical", type: n = "auto", viewportProps: l, style: s, ...c }, p) => /* @__PURE__ */ d(nn, { ref: p, type: n, style: s, ...c, children: [
    /* @__PURE__ */ r(
      ln,
      {
        $horizontal: i !== "vertical",
        ...l,
        style: {
          "--_max-height": Or(a),
          "--_max-width": Or(t),
          ...l == null ? void 0 : l.style
        },
        children: e
      }
    ),
    i !== "horizontal" ? /* @__PURE__ */ r(Hr, { orientation: "vertical", children: /* @__PURE__ */ r(Fr, {}) }) : null,
    i !== "vertical" ? /* @__PURE__ */ r(Hr, { orientation: "horizontal", children: /* @__PURE__ */ r(Fr, {}) }) : null,
    i === "both" ? /* @__PURE__ */ r(sn, {}) : null
  ] })
);
mr.displayName = "Scrollbar";
const cn = he`
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
`, dn = he`
  from { height: var(--radix-accordion-content-height); }
  to { height: 0; }
`, fn = o(Re.Root)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 640px;
  border-radius: var(--radius-400);
  border: var(--stroke-100) solid var(--color-stroke-border);
  overflow: hidden;
  background: var(--color-surfaces-container);
`, pn = o(Re.Header)`
  margin: 0;
  display: flex;
`, Jo = o(Re.Trigger)`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--space-300);
  width: 100%;
  padding: var(--space-300) var(--space-600);
  border: none;
  border-bottom: var(--stroke-100) solid var(--color-stroke-border);
  appearance: none;
  background: var(--color-surfaces-container);
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  text-align: left;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Radix drives focus with :focus-visible on the trigger button. */
  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: calc(-1 * var(--stroke-200));
  }
`, hn = o.span`
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-primary);

  svg {
    width: 24px;
    height: 24px;
  }
`, vn = o.span`
  flex: 1 1 0%;
  min-width: 0;
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
`, qo = o.span`
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  color: var(--color-text-icon-primary);
  transition: transform 200ms ease;

  svg {
    width: 24px;
    height: 24px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`, Qo = o(Re.Content)`
  overflow: hidden;
  background: var(--color-surfaces-on-container-high);
  border-bottom: var(--stroke-100) solid var(--color-stroke-border);
  color: var(--color-text-icon-secondary);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-regular);
  line-height: 1.5;
  letter-spacing: 0.2px;

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${cn} 200ms ease;
    }
    &[data-state='closed'] {
      animation: ${dn} 200ms ease;
    }
  }
`, un = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-100);
  padding: var(--space-500) var(--space-600) var(--space-600);
`, gn = o(Re.Item)`
  &[data-state='open'] ${qo} {
    transform: rotate(180deg);
  }

  /* Last item: the container's border closes the bottom edge, so drop the
     item's own trailing hairline (the open content, and the closed header). */
  &:last-child ${Qo} {
    border-bottom: none;
  }
  &:last-child[data-state='closed'] ${Jo} {
    border-bottom: none;
  }
`, bn = fn;
bn.displayName = "Accordion";
const mn = f.forwardRef(
  ({ title: e, icon: a, children: t, ...i }, n) => /* @__PURE__ */ d(gn, { ref: n, ...i, children: [
    /* @__PURE__ */ r(pn, { children: /* @__PURE__ */ d(Jo, { children: [
      a ? /* @__PURE__ */ r(hn, { "aria-hidden": !0, children: a }) : null,
      /* @__PURE__ */ r(vn, { children: e }),
      /* @__PURE__ */ r(qo, { "aria-hidden": !0, children: /* @__PURE__ */ r(Ce, {}) })
    ] }) }),
    /* @__PURE__ */ r(Qo, { children: /* @__PURE__ */ r(un, { children: t }) })
  ] })
);
mn.displayName = "AccordionItem";
const yn = (e) => ({
  xs: $`
      height: 24px;
      font-size: var(--type-size-caption);
    `,
  sm: $`
      height: 32px;
      font-size: var(--type-size-caption);
    `,
  md: $`
      height: 40px;
      font-size: var(--type-size-body);
    `,
  lg: $`
      height: 48px;
      font-size: var(--type-size-subject);
    `
})[e], xn = (e, a) => a === "tonal" && e === "md" ? "var(--space-200)" : {
  xs: "var(--space-200)",
  sm: "var(--space-200)",
  md: "var(--space-300)",
  lg: "var(--space-400)"
}[e], wn = (e, a) => e === "sm" || a === "tonal" && e === "md" ? "var(--space-050)" : "var(--space-100)", Er = {
  xs: "var(--space-350)",
  sm: "var(--space-350)",
  md: "var(--space-500)",
  lg: "var(--space-500)"
}, $n = (e) => {
  const a = "var(--color-text-icon-error-on-surface-text-destructive-btn)";
  return e === "fill" ? $`
      background: var(--color-error-error);
      color: var(--color-text-icon-inverse);
      &:hover:not(:disabled) { background: var(--color-error-error-hover); }
      &:active:not(:disabled) { background: var(--color-error-error-press); }
    ` : e === "outline" ? $`
      background: transparent;
      color: ${a};
      box-shadow: inset 0 0 0 var(--stroke-200) var(--color-error-error);
      &:focus-visible { background: var(--color-error-error-overlay); }
      &:hover:not(:disabled) { background: var(--color-error-error-overlay-hover); }
      &:active:not(:disabled) { background: var(--color-error-error-overlay-press); }
    ` : e === "tonal" ? $`
      background: var(--color-error-error-overlay);
      color: ${a};
      &:hover:not(:disabled) { background: var(--color-error-error-overlay-hover); }
      &:active:not(:disabled) { background: var(--color-error-error-overlay-press); }
    ` : $`
    background: transparent;
    color: ${a};
    &:focus-visible { background: var(--color-error-error-overlay); }
    &:hover:not(:disabled) { background: var(--color-error-error-overlay-hover); }
    &:active:not(:disabled) { background: var(--color-error-error-overlay-press); }
  `;
}, kn = (e, a) => e === "primary" && a === "fill" ? $`
      background: var(--color-inverse-button-primary-fill);
      color: var(--color-inverse-button-on-primary-fill);
      box-shadow: inset 0 0 0 var(--stroke-100) var(--color-inverse-button-primary-border);
      &:hover:not(:disabled),
      &:focus-visible {
        background: var(--color-inverse-primary-primary-hover);
        color: var(--color-inverse-text-icon-on-primary);
        box-shadow: none;
      }
      &:active:not(:disabled) {
        background: var(--color-inverse-primary-primary-press);
        color: var(--color-inverse-text-icon-on-primary);
        box-shadow: none;
      }
      &:disabled, &[aria-disabled='true'] {
        background: var(--color-inverse-disabled-disabled);
        color: var(--color-inverse-disabled-disabled-inverse);
        box-shadow: none;
      }
    ` : e === "secondary" && a === "ghost" ? $`
      background: transparent;
      color: var(--color-inverse-surfaces-inverse-container);
      &:hover:not(:disabled),
      &:focus-visible { background: var(--color-inverse-secondary-secondary-overlay); }
      &:active:not(:disabled) { background: var(--color-inverse-secondary-secondary-overlay-hover); }
      &:disabled, &[aria-disabled='true'] {
        background: transparent;
        color: var(--color-inverse-disabled-disabled-inverse);
      }
    ` : null, zn = (e, a) => {
  if (e === "destructive") return $n(a);
  const t = e === "primary";
  return a === "fill" ? t ? $`
          background: var(--color-button-primary-fill);
          color: var(--color-button-on-primary-fill);
          box-shadow: inset 0 0 0 var(--stroke-100) var(--color-button-primary-border);
          &:hover:not(:disabled) {
            background: var(--color-primary-primary-hover);
            color: var(--color-text-icon-on-primary);
            box-shadow: none;
          }
          &:active:not(:disabled) {
            background: var(--color-primary-primary-press);
            color: var(--color-text-icon-on-primary);
            box-shadow: none;
          }
        ` : $`
          background: var(--color-secondary-secondary);
          color: var(--color-text-icon-inverse);
          &:hover:not(:disabled) { background: var(--color-secondary-secondary-hover); }
          &:active:not(:disabled) { background: var(--color-secondary-secondary-press); }
        ` : a === "outline" ? t ? $`
          background: var(--color-surfaces-container);
          color: var(--color-primary-primary);
          box-shadow: inset 0 0 0 var(--stroke-200) var(--color-primary-primary);
          &:hover:not(:disabled) { background: var(--color-primary-primary-overlay); }
          &:active:not(:disabled) { background: var(--color-primary-primary-overlay-hover); }
        ` : $`
          background: var(--color-surfaces-container);
          color: var(--color-secondary-secondary);
          box-shadow: inset 0 0 0 var(--stroke-200) var(--color-secondary-secondary);
          &:hover:not(:disabled) { background: var(--color-secondary-secondary-overlay); }
          &:active:not(:disabled) { background: var(--color-secondary-secondary-overlay-hover); }
        ` : a === "tonal" ? t ? $`
          background: var(--color-tonal-tonal);
          color: var(--color-text-icon-on-tonal-inverse);
          &:hover:not(:disabled) { background: var(--color-tonal-tonal-hover); }
          &:active:not(:disabled) { background: var(--color-tonal-tonal-press); }
        ` : $`
          background: var(--color-tonal-tonal-secondary-overlay);
          color: var(--color-text-icon-on-tonal-secondary);
          &:hover:not(:disabled) { background: var(--color-tonal-tonal-secondary-overlay-hover); }
          &:active:not(:disabled) { background: var(--color-tonal-tonal-secondary-overlay-press); }
        ` : t ? $`
        background: transparent;
        color: var(--color-primary-primary);
        &:hover:not(:disabled) { background: var(--color-primary-primary-overlay); }
        &:active:not(:disabled) { background: var(--color-primary-primary-overlay-hover); }
      ` : $`
        background: transparent;
        color: var(--color-secondary-secondary);
        /* Persistent label underline (per the Figma spec, e.g. the toast
           button group): with no fill or border, color alone would set this
           apart from plain text — the underline is the non-color affordance
           (WCAG 1.4.1). */
        text-decoration: underline;
        &:hover:not(:disabled) { background: var(--color-secondary-secondary-overlay); }
        &:active:not(:disabled) { background: var(--color-secondary-secondary-overlay-hover); }
      `;
}, In = (e, a) => {
  const t = $`
    cursor: not-allowed;
    pointer-events: none;
  `;
  return e === "outline" && a === "destructive" ? $`
      &:disabled, &[aria-disabled='true'] {
        ${t}
        background: transparent;
        box-shadow: inset 0 0 0 var(--stroke-200) var(--color-disabled-disabled-inverse);
        color: var(--color-text-icon-disabled);
      }
    ` : e === "outline" ? $`
      &:disabled, &[aria-disabled='true'] {
        ${t}
        background: var(--color-surfaces-container);
        box-shadow: inset 0 0 0 var(--stroke-200) var(--color-disabled-disabled);
        color: var(--color-disabled-disabled-inverse);
      }
    ` : e === "ghost" ? $`
      &:disabled, &[aria-disabled='true'] {
        ${t}
        background: transparent;
        color: ${a === "destructive" ? "var(--color-text-icon-disabled)" : "var(--color-disabled-disabled-inverse)"};
      }
    ` : $`
    &:disabled, &[aria-disabled='true'] {
      ${t}
      background: var(--color-disabled-disabled);
      color: var(--color-disabled-disabled-inverse);
      border-color: transparent;
      box-shadow: none;
    }
  `;
}, Sn = o.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(e) => e.$fullWidth ? "100%" : "auto"};
  /* Kill the UA button padding (1px 6px in Chromium) — the StateLayer owns
     ALL padding via the spacing tokens; without this reset every button was
     6px wider per side than the Figma spec. */
  appearance: none;
  padding: 0;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  border-radius: var(--radius-1000);
  transition: background-color 120ms ease, color 120ms ease, border-color 120ms ease,
    box-shadow 120ms ease;

  ${(e) => yn(e.$size)}
  ${(e) => zn(e.$intent, e.$variant)}
  ${(e) => In(e.$variant, e.$intent)}
  /* Inverse comes after the defaults so its states (incl. disabled) win. */
  ${(e) => e.$tone === "inverse" ? kn(e.$intent, e.$variant) : null}

  /* Opting out of the ghost/secondary underline has to undo it here too, since
     colorStyles sets it on the button as well as on the Label. */
  ${(e) => !e.$underline && $`
      text-decoration: none;
    `}

  &:focus {
    outline: none;
  }
  &:focus-visible::after {
    content: '';
    position: absolute;
    inset: -2px;
    border: var(--stroke-300) solid
      ${(e) => e.$tone === "inverse" ? "var(--color-inverse-primary-primary)" : "var(--color-primary-primary)"};
    border-radius: var(--radius-1000);
    pointer-events: none;
  }
`, Rn = o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(e) => wn(e.$size, e.$variant)};
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 ${(e) => xn(e.$size, e.$variant)};
`, Dr = o.span`
  display: inline-flex;
  flex-shrink: 0;
  width: ${(e) => Er[e.$size]};
  height: ${(e) => Er[e.$size]};
  align-items: center;
  justify-content: center;

  & > svg {
    width: 100%;
    height: 100%;
  }
`, Tn = o.span`
  white-space: nowrap;
  line-height: 1.35;
  /* Secondary ghost buttons have no background or border, so color alone would
     distinguish them (WCAG 1.4.1). A persistent underline is the non-color
     affordance (matches Figma container=none, type=secondary). */
  ${(e) => e.$underline ? $`
          text-decoration: underline;
          text-decoration-skip-ink: none;
          text-underline-position: from-font;
        ` : ""}
`, Z = f.forwardRef(
  ({
    size: e = "md",
    intent: a = "primary",
    variant: t = "fill",
    tone: i = "default",
    startIcon: n,
    endIcon: l,
    fullWidth: s = !1,
    underline: c,
    children: p,
    type: h = "button",
    ...b
  }, v) => {
    const g = c ?? (t === "ghost" && a === "secondary");
    return /* @__PURE__ */ r(
      Sn,
      {
        ref: v,
        type: h,
        $size: e,
        $intent: a,
        $variant: t,
        $tone: i,
        $fullWidth: s,
        $underline: g,
        ...b,
        children: /* @__PURE__ */ d(Rn, { $size: e, $variant: t, children: [
          n ? /* @__PURE__ */ r(Dr, { $size: e, children: n }) : null,
          /* @__PURE__ */ r(Tn, { $underline: g, children: p }),
          l ? /* @__PURE__ */ r(Dr, { $size: e, children: l }) : null
        ] })
      }
    );
  }
);
Z.displayName = "Button";
const Pr = { xs: 24, sm: 32, md: 40, lg: 48 }, Nr = { xs: 16, sm: 24, md: 24, lg: 24 }, Cn = (e, a) => {
  const t = e === "primary";
  return a === "fill" ? t ? $`
          background: var(--color-primary-primary);
          color: var(--color-text-icon-inverse);
          &:hover:not(:disabled) { background: var(--color-primary-primary-hover); }
          &:active:not(:disabled) { background: var(--color-primary-primary-press); }
        ` : $`
          background: var(--color-secondary-secondary);
          color: var(--color-text-icon-on-secondary);
          &:hover:not(:disabled) { background: var(--color-secondary-secondary-hover); }
          &:active:not(:disabled) { background: var(--color-secondary-secondary-press); }
        ` : a === "outline" ? t ? $`
          background: transparent;
          color: var(--color-primary-primary);
          border: var(--stroke-100) solid var(--color-primary-primary);
          &:hover:not(:disabled) { background: var(--color-primary-primary-overlay); }
          &:active:not(:disabled) { background: var(--color-primary-primary-overlay-hover); }
        ` : $`
          background: transparent;
          color: var(--color-secondary-secondary);
          border: var(--stroke-100) solid var(--color-secondary-secondary);
          &:hover:not(:disabled) { background: var(--color-secondary-secondary-overlay); }
          &:active:not(:disabled) { background: var(--color-secondary-secondary-overlay-hover); }
        ` : a === "tonal" ? t ? $`
          background: var(--color-tonal-tonal-overlay);
          color: var(--color-text-icon-on-tonal-inverse);
          &:hover:not(:disabled) { background: var(--color-tonal-tonal-overlay-hover); }
          &:active:not(:disabled) { background: var(--color-tonal-tonal-overlay-press); }
        ` : $`
          background: var(--color-tonal-tonal-secondary-overlay);
          color: var(--color-text-icon-on-tonal-secondary);
          &:hover:not(:disabled) { background: var(--color-tonal-tonal-secondary-overlay-hover); }
          &:active:not(:disabled) { background: var(--color-tonal-tonal-secondary-overlay-press); }
        ` : t ? $`
        background: transparent;
        color: var(--color-primary-primary);
        &:hover:not(:disabled) { background: var(--color-primary-primary-overlay); }
        &:active:not(:disabled) { background: var(--color-primary-primary-overlay-hover); }
      ` : $`
        background: transparent;
        color: var(--color-secondary-secondary);
        &:hover:not(:disabled) { background: var(--color-secondary-secondary-overlay); }
        &:active:not(:disabled) { background: var(--color-secondary-secondary-overlay-hover); }
      `;
}, Ln = (e) => $`
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    background: ${e === "ghost" ? "transparent" : "var(--color-disabled-disabled)"};
    border-color: transparent;
    color: var(--color-disabled-disabled-inverse);
  }
`, On = (e, a) => e === "secondary" && a === "ghost" ? $`
        background: transparent;
        color: var(--color-inverse-text-icon-primary);
        &:hover:not(:disabled),
        &:focus-visible { background: var(--color-inverse-secondary-secondary-overlay); }
        &:active:not(:disabled) { background: var(--color-inverse-secondary-secondary-overlay-hover); }
        &:disabled {
          background: transparent;
          color: var(--color-inverse-text-icon-disabled);
        }
      ` : null, Hn = o.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  width: ${(e) => Pr[e.$size]}px;
  height: ${(e) => Pr[e.$size]}px;
  border-radius: var(--radius-1000);
  transition: background-color 120ms ease, color 120ms ease, border-color 120ms ease;

  ${(e) => Cn(e.$intent, e.$variant)}
  ${(e) => Ln(e.$variant)}
  ${(e) => e.$tone === "inverse" ? On(e.$intent, e.$variant) : null}

  &:focus {
    outline: none;
  }
  &:focus-visible::after {
    content: '';
    position: absolute;
    inset: -2px;
    border: var(--stroke-300) solid
      ${(e) => e.$tone === "inverse" ? "var(--color-inverse-primary-primary)" : "var(--color-primary-primary)"};
    border-radius: var(--radius-1000);
    pointer-events: none;
  }
`, Fn = o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(e) => Nr[e.$size]}px;
  height: ${(e) => Nr[e.$size]}px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`, j = f.forwardRef(
  ({
    label: e,
    icon: a,
    size: t = "md",
    intent: i = "primary",
    variant: n = "fill",
    tone: l = "default",
    type: s = "button",
    ...c
  }, p) => /* @__PURE__ */ r(
    Hn,
    {
      ref: p,
      type: s,
      $size: t,
      $intent: i,
      $variant: n,
      $tone: l,
      ...c,
      children: /* @__PURE__ */ r(je.Root, { label: e, children: /* @__PURE__ */ r(Fn, { $size: t, "aria-hidden": !0, children: a }) })
    }
  )
);
j.displayName = "IconButton";
const En = { sm: 24, lg: 32 }, Mr = {
  primary: {
    base: "var(--color-primary-primary-overlay)",
    hover: "var(--color-primary-primary-overlay-hover)"
  },
  secondary: {
    base: "var(--color-secondary-secondary-overlay)",
    hover: "var(--color-secondary-secondary-overlay-hover)"
  },
  success: {
    base: "var(--color-success-success-overlay)",
    hover: "var(--color-success-success-overlay-hover)"
  },
  warn: {
    base: "var(--color-warning-warn-overlay)",
    hover: "var(--color-warning-warn-overlay-hover)"
  },
  error: {
    base: "var(--color-error-error-overlay)",
    hover: "var(--color-error-error-overlay-hover)"
  },
  info: {
    base: "var(--color-info-info-overlay)",
    hover: "var(--color-info-info-overlay-hover)"
  }
}, Dn = o.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: ${(e) => En[e.$size]}px;
  padding: 0 var(--space-100);
  gap: var(--space-050);
  border-radius: var(--radius-1000);
  background: ${(e) => Mr[e.$type].base};
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  white-space: nowrap;
  transition: background-color 120ms ease;

  ${(e) => e.$size === "lg" ? $`
          font-size: var(--type-size-body);
          letter-spacing: 0.1px;
        ` : $`
          font-size: var(--type-size-caption);
          letter-spacing: 0.2px;
        `}

  ${(e) => e.$interactive && !e.$disabled ? $`
          &:hover {
            background: ${Mr[e.$type].hover};
          }
        ` : ""}

  /* Focus ring wraps the whole chip when any inner control is focused
     (Figma state=focus: 3px primary ring offset outside the pill). */
  &:focus-within {
    outline: none;
  }
  &:has(:focus-visible)::after {
    content: '';
    position: absolute;
    inset: -2px;
    border: var(--stroke-300) solid var(--color-primary-primary);
    border-radius: var(--radius-1000);
    pointer-events: none;
  }

  ${(e) => e.$disabled ? $`
          background: var(--color-disabled-disabled);
          color: var(--color-disabled-disabled-inverse);
          cursor: not-allowed;
        ` : ""}
`, Pn = o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${(e) => e.$size === "lg" ? 18 : 16}px;
  height: ${(e) => e.$size === "lg" ? 18 : 16}px;
  /* Optical offset: pull the leading glyph toward the edge so the icon's
     visible bounds — not its viewBox whitespace — sit ~8px from the edge
     (Figma offsets the leading asset the same way). */
  margin-left: calc(-1 * var(--space-025));
  color: inherit;

  & > svg {
    width: 100%;
    height: 100%;
  }
`, Vo = $`
  display: inline-flex;
  align-items: center;
  gap: inherit;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  letter-spacing: inherit;
`, Nn = o.span`
  ${Vo}
`, Mn = o.button`
  ${Vo}
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
  &:focus {
    outline: none;
  }
`, _n = o.span`
  display: inline-flex;
  align-items: center;
  min-width: 0;
  line-height: 1.35;
  overflow: hidden;
  text-overflow: ellipsis;
`, An = o.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${(e) => e.$size === "lg" ? 18 : 16}px;
  height: ${(e) => e.$size === "lg" ? 18 : 16}px;
  padding: 0;
  border: none;
  border-radius: var(--radius-1000);
  background: none;
  color: inherit;
  cursor: pointer;
  transition: background-color 120ms ease;
  /* Optical offset: the close glyph is inset within its viewBox, so nudge it
     toward the edge to keep the visible padding at ~8px (mirrors Figma). */
  margin-right: calc(-1 * var(--space-025));

  & > svg {
    width: 100%;
    height: 100%;
  }

  &:hover:not(:disabled) {
    background: var(--color-secondary-secondary-overlay);
  }
  &:disabled {
    cursor: not-allowed;
  }
  &:focus {
    outline: none;
  }
`, ea = f.forwardRef(
  ({
    children: e,
    type: a = "primary",
    size: t = "lg",
    disabled: i = !1,
    leadingIcon: n,
    onClick: l,
    onRemove: s,
    removeLabel: c,
    ...p
  }, h) => {
    const b = !!l, v = !!s, g = c ?? (typeof e == "string" ? `Remove ${e}` : "Remove"), m = /* @__PURE__ */ d(J, { children: [
      n ? /* @__PURE__ */ r(Pn, { $size: t, "aria-hidden": !0, children: n }) : null,
      /* @__PURE__ */ r(_n, { children: e })
    ] });
    return /* @__PURE__ */ d(
      Dn,
      {
        ref: h,
        $type: a,
        $size: t,
        $disabled: i,
        $interactive: b || v,
        "aria-disabled": i || void 0,
        ...p,
        children: [
          b ? /* @__PURE__ */ r(Mn, { type: "button", onClick: l, disabled: i, children: m }) : /* @__PURE__ */ r(Nn, { children: m }),
          v ? /* @__PURE__ */ r(An, { type: "button", $size: t, onClick: s, disabled: i, children: /* @__PURE__ */ r(je.Root, { label: g, children: /* @__PURE__ */ r(pe, { "aria-hidden": !0 }) }) }) : null
        ]
      }
    );
  }
);
ea.displayName = "Chip";
const ra = o(Po.Indicator)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-icon-inverse);
  & > svg {
    width: 16px;
    height: 16px;
  }
`, ue = o.span`
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border-radius: var(--radius-50);
  border: var(--stroke-150) solid var(--color-text-icon-secondary);
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 120ms ease, border-color 120ms ease;
`, Bn = o(Po.Root)`
  all: unset;
  position: relative;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border-radius: var(--radius-100);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  /* Unchecked hover: a translucent primary fill inside the box. */
  &[data-state='unchecked']:hover:not([data-disabled]) ${ue} {
    background: var(--color-primary-primary-overlay);
  }

  /* Checked / indeterminate: solid primary box, deepening on hover. */
  &[data-state='checked'] ${ue},
  &[data-state='indeterminate'] ${ue} {
    background: var(--color-primary-primary);
    border-color: var(--color-primary-primary);
  }
  &[data-state='checked']:hover:not([data-disabled]) ${ue},
  &[data-state='indeterminate']:hover:not([data-disabled]) ${ue} {
    background: var(--color-primary-primary-hover);
    border-color: var(--color-primary-primary-hover);
  }

  /* Disabled: muted filled box; the mark (if any) dims too. */
  &[data-disabled] {
    cursor: not-allowed;
  }
  &[data-disabled] ${ue} {
    background: var(--color-disabled-disabled-inverse);
    border-color: var(--color-disabled-disabled);
  }
  &[data-disabled] ${ra} {
    color: var(--color-disabled-disabled);
  }

  /* Show the check when checked, the dash when indeterminate. */
  &[data-state='checked'] .cb-dash {
    display: none;
  }
  &[data-state='indeterminate'] .cb-check {
    display: none;
  }

  /* Focus ring: 22px (inset 1px), restyled — never removed. */
  &:focus-visible::after {
    content: '';
    position: absolute;
    inset: 1px;
    border: var(--stroke-150) solid var(--color-primary-primary);
    border-radius: var(--radius-100);
    pointer-events: none;
  }
`, jn = o.label`
  display: inline-flex;
  align-items: center;
  gap: var(--space-100);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  color: var(--color-text-icon-primary);
  cursor: pointer;

  &:has([data-disabled]) {
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }
`, He = f.forwardRef(
  ({ label: e, id: a, ...t }, i) => {
    const n = f.useId(), l = a ?? n, s = /* @__PURE__ */ r(Bn, { id: l, ref: i, ...t, children: /* @__PURE__ */ r(ue, { children: /* @__PURE__ */ d(ra, { children: [
      /* @__PURE__ */ r(Le, { className: "cb-check", "aria-hidden": !0, strokeWidth: 3 }),
      /* @__PURE__ */ r(Mo, { className: "cb-dash", "aria-hidden": !0, strokeWidth: 3 })
    ] }) }) });
    return e ? /* @__PURE__ */ d(jn, { htmlFor: l, children: [
      s,
      /* @__PURE__ */ r("span", { children: e })
    ] }) : s;
  }
);
He.displayName = "Checkbox";
const Gn = 36, _r = 16, Wn = o.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-100);
  width: 100%;
  min-height: ${Gn}px;
  padding: var(--space-100);
  border-radius: var(--radius-200);
  background: ${(e) => e.$disabled ? "var(--color-disabled-disabled)" : e.$selected ? "var(--color-tonal-tonal-overlay)" : "transparent"};
  transition: background 120ms ease;

  ${(e) => e.$variant === "sub-item" && $`
      padding-left: var(--space-500);
    `}

  ${(e) => !e.$disabled && $`
      /* \`:has\` picks up Radix's highlight: inside a DropdownMenu/ContextMenu the
         primitive marks the active item with data-highlighted (pointer hover and
         arrow-key navigation alike), and that background is the affordance —
         see the matching outline suppression on Action. */
      &:hover,
      &:has(> button[data-highlighted]) {
        background: ${e.$selected ? "var(--color-tonal-tonal-overlay-hover)" : "var(--color-tonal-tonal-secondary-overlay-hover)"};
      }

      &:active {
        background: ${e.$selected ? "var(--color-tonal-tonal-overlay-press)" : "var(--color-tonal-tonal-secondary-overlay-press)"};
      }
    `}
`, Yn = o.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-100);
  flex: 1;
  min-width: 0;
  padding: 0;
  border: none;
  background: transparent;
  color: ${(e) => e.$disabled ? "var(--color-disabled-disabled-inverse)" : e.$selected ? "var(--color-text-icon-on-tonal)" : "var(--color-secondary-secondary)"};
  cursor: ${(e) => e.$disabled ? "not-allowed" : "pointer"};
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: ${(e) => e.$selected ? "var(--font-weight-medium)" : "var(--font-weight-regular)"};
  line-height: 1.35;
  text-align: left;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: var(--space-025);
    border-radius: var(--radius-100);
  }

  /* Inside a Radix menu the primitive owns the active row: it sets
     data-highlighted and moves DOM focus to the item on *pointer hover* as well
     as arrow-key navigation, which would otherwise paint a keyboard focus ring
     just for hovering. There the row highlight (see Row) is the affordance, so
     drop the ring. Standalone MenuItems are unaffected — nothing sets
     data-highlighted outside a Radix menu, so Tab still shows the ring. */
  &[data-highlighted],
  &[data-highlighted]:focus-visible {
    outline: none;
  }
`, Ar = o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${_r}px;
  height: ${_r}px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`, Un = o.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, Ie = f.forwardRef(
  ({
    children: e,
    variant: a = "item",
    selected: t = !1,
    disabled: i = !1,
    showLeftSlot: n = !0,
    leftSlot: l,
    showRightSlot: s = !0,
    rightSlot: c,
    showCheckbox: p = !1,
    checked: h,
    defaultChecked: b = !1,
    onCheckedChange: v,
    onClick: g,
    ...m
  }, u) => /* @__PURE__ */ d(Wn, { $variant: a, $selected: t, $disabled: i, children: [
    a === "item" && p ? /* @__PURE__ */ r(
      He,
      {
        checked: h,
        defaultChecked: b,
        disabled: i,
        "aria-label": `Select ${typeof e == "string" ? e : "Menu item"}`,
        onCheckedChange: (w) => v == null ? void 0 : v(w === !0)
      }
    ) : null,
    /* @__PURE__ */ d(
      Yn,
      {
        ref: u,
        type: "button",
        $selected: t,
        $disabled: i,
        disabled: i,
        role: "menuitem",
        "aria-current": t ? "true" : void 0,
        onClick: g,
        ...m,
        children: [
          n ? /* @__PURE__ */ r(Ar, { "aria-hidden": !0, children: l ?? /* @__PURE__ */ r(Wa, {}) }) : null,
          /* @__PURE__ */ r(Un, { children: e }),
          s ? /* @__PURE__ */ r(Ar, { "aria-hidden": !0, children: c ?? /* @__PURE__ */ r(Le, {}) }) : null
        ]
      }
    )
  ] })
);
Ie.displayName = "MenuItem";
const Zn = o(X.Label)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--space-075) var(--space-150);
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
`, Kn = f.forwardRef(
  ({ children: e, ...a }, t) => /* @__PURE__ */ r(Zn, { ref: t, ...a, children: e })
);
Kn.displayName = "MenuHeader";
const Xn = o.div`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  background: var(--color-surfaces-container);
  border-radius: var(--radius-300);
  box-shadow: var(--elevation-3);
`, Jn = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-050);
  padding: var(--space-100);
`, Ke = f.forwardRef(
  ({ children: e, maxHeight: a, width: t = 320, style: i, ...n }, l) => /* @__PURE__ */ r(Xn, { ref: l, style: { width: t, ...i }, ...n, children: /* @__PURE__ */ r(mr, { type: "auto", maxHeight: a, children: /* @__PURE__ */ r(Jn, { children: e }) }) })
);
Ke.displayName = "MenuContainer";
const qn = [
  { value: "ticket", label: "Ticket", icon: /* @__PURE__ */ r(Ya, {}) },
  { value: "power", label: "Power", icon: /* @__PURE__ */ r(Ua, {}) },
  { value: "application", label: "Application", icon: /* @__PURE__ */ r(Za, {}) },
  { value: "deployment", label: "Deployment", icon: /* @__PURE__ */ r(Ka, {}) },
  { value: "device-configuration", label: "Device Configuration", icon: /* @__PURE__ */ r(Xa, {}) }
], Qn = o(X.Content)`
  z-index: 1000;
  outline: none;
`, Vn = o.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
`, oa = ({
  options: e = qn,
  selected: a = [],
  onToggle: t,
  onFilesSelected: i,
  accept: n,
  multiple: l = !0,
  fileLabel: s = "File",
  triggerLabel: c = "Add context or files",
  disabled: p = !1,
  width: h = 320
}) => {
  const b = f.useRef(null);
  return /* @__PURE__ */ d(J, { children: [
    /* @__PURE__ */ d(X.Root, { modal: !1, children: [
      /* @__PURE__ */ r(X.Trigger, { asChild: !0, disabled: p, children: /* @__PURE__ */ r(
        j,
        {
          label: c,
          icon: /* @__PURE__ */ r(hr, {}),
          size: "sm",
          intent: "secondary",
          variant: "ghost",
          disabled: p
        }
      ) }),
      /* @__PURE__ */ r(X.Portal, { children: /* @__PURE__ */ r(Qn, { side: "top", align: "start", sideOffset: 8, collisionPadding: 8, children: /* @__PURE__ */ d(Ke, { width: h, children: [
        e.map((v) => {
          const g = a.includes(v.value);
          return /* @__PURE__ */ r(X.Item, { asChild: !0, onSelect: () => t == null ? void 0 : t(v.value), children: /* @__PURE__ */ r(
            Ie,
            {
              selected: g,
              leftSlot: v.icon,
              showLeftSlot: v.icon != null,
              showRightSlot: g,
              rightSlot: /* @__PURE__ */ r(Le, {}),
              children: v.label
            }
          ) }, v.value);
        }),
        i ? /* @__PURE__ */ d(J, { children: [
          e.length > 0 ? /* @__PURE__ */ r(Oe, {}) : null,
          /* @__PURE__ */ r(X.Item, { asChild: !0, onSelect: () => {
            var v;
            return (v = b.current) == null ? void 0 : v.click();
          }, children: /* @__PURE__ */ r(Ie, { leftSlot: /* @__PURE__ */ r(_o, {}), showRightSlot: !1, children: s }) })
        ] }) : null
      ] }) }) })
    ] }),
    i ? /* @__PURE__ */ r(
      Vn,
      {
        ref: b,
        type: "file",
        accept: n,
        multiple: l,
        tabIndex: -1,
        "aria-hidden": !0,
        onChange: (v) => {
          const g = v.target.files ? Array.from(v.target.files) : [];
          g.length && i(g), v.target.value = "";
        }
      }
    ) : null
  ] });
};
oa.displayName = "AiContextMenu";
const Br = { sm: 16, md: 24, lg: 32 }, de = { sm: 2, md: 3, lg: 4 }, jr = {
  all: 100,
  "3/4": 75,
  "2/3": 66.667,
  "1/2": 50,
  "1/3": 33.333,
  "1/4": 25,
  "1/8": 12.5,
  none: 0
}, ei = {
  primary: "var(--color-primary-primary)",
  greyscale: "var(--color-text-icon-primary)"
}, ri = he`
  to {
    transform: rotate(360deg);
  }
`, oi = o(Be.Root)`
  position: relative;
  display: inline-block;
  flex: none;
  width: ${(e) => Br[e.$size]}px;
  height: ${(e) => Br[e.$size]}px;
  border-radius: var(--radius-1000);
  animation: ${(e) => e.$animated ? ri : "none"} 900ms linear infinite;
  will-change: transform;

  &::before {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: conic-gradient(
      from -90deg,
      var(--color-stroke-border-low) 0deg 360deg
    );
    content: '';
    -webkit-mask: radial-gradient(
      farthest-side,
      transparent calc(100% - ${(e) => de[e.$size]}px),
      var(--color-text-icon-primary) calc(100% - ${(e) => de[e.$size]}px + 1px)
    );
    mask: radial-gradient(
      farthest-side,
      transparent calc(100% - ${(e) => de[e.$size]}px),
      var(--color-text-icon-primary) calc(100% - ${(e) => de[e.$size]}px + 1px)
    );
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`, ai = o(Be.Indicator)`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: conic-gradient(
    from -90deg,
    ${(e) => ei[e.$color]} 0deg ${(e) => jr[e.$fill] * 3.6}deg,
    transparent ${(e) => jr[e.$fill] * 3.6}deg 360deg
  );
  -webkit-mask: radial-gradient(
    farthest-side,
    transparent calc(100% - ${(e) => de[e.$size]}px),
    var(--color-text-icon-primary) calc(100% - ${(e) => de[e.$size]}px + 1px)
  );
  mask: radial-gradient(
    farthest-side,
    transparent calc(100% - ${(e) => de[e.$size]}px),
    var(--color-text-icon-primary) calc(100% - ${(e) => de[e.$size]}px + 1px)
  );
`, aa = f.forwardRef(
  ({
    color: e = "primary",
    fill: a = "3/4",
    size: t = "lg",
    animated: i = !0,
    "aria-label": n = "Loading",
    ...l
  }, s) => /* @__PURE__ */ r(
    oi,
    {
      ref: s,
      value: null,
      $animated: i,
      $size: t,
      "aria-label": n,
      ...l,
      children: /* @__PURE__ */ r(ai, { $color: e, $fill: a, $size: t })
    }
  )
);
aa.displayName = "Spinner";
const ye = (e, a) => `var(--color-ai-${e}-${a})`, ti = "39.06deg", Xe = (e, a) => `linear-gradient(${ti}, ${ye(e, `${a}-start`)} 0%, ${ye(
  e,
  `${a}-end`
)} 100%)`, ni = /\.(png|jpe?g|gif|bmp|webp|svg|heic|ico|tiff?)$/i, ii = 280, Gr = 40, Wr = 24, li = o.div`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: var(--space-200);
  width: ${ii}px;
  max-width: 100%;
  padding: var(--space-200);
  border-radius: var(--radius-300);
  background: var(--color-surfaces-container);
  box-shadow: var(--elevation-0);
  border: var(--stroke-100) solid
    ${(e) => e.$error ? "var(--color-error-error)" : "var(--color-stroke-border)"};
  font-family: var(--font-family);
`, si = o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${Gr}px;
  height: ${Gr}px;
  border-radius: var(--radius-200);
  /* Ready/Uploading: segment surface gradient + flat glyph; Error: neutral tile, error glyph. */
  background: ${(e) => e.$error ? "var(--color-surfaces-on-container)" : Xe(e.$segment, "surface")};
  color: ${(e) => e.$error ? "var(--color-text-icon-error-on-surface-icon)" : ye(e.$segment, "flat")};

  & > svg {
    width: ${Wr}px;
    height: ${Wr}px;
  }
`, ci = o.span`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  line-height: 1.35;
`, di = o.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-icon-primary);
`, fi = o.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--type-size-caption);
  font-weight: var(--font-weight-regular);
  color: ${(e) => e.$error ? "var(--color-text-icon-error-on-surface-text-destructive-btn)" : "var(--color-text-icon-secondary)"};
`, ta = f.forwardRef(
  ({ name: e, status: a = "ready", details: t, onRemove: i, onRetry: n, disabled: l = !1, segment: s = "consumer", icon: c, ...p }, h) => {
    const b = a === "error", v = a === "uploading" ? "Uploading…" : b ? "Upload failed" : t;
    return /* @__PURE__ */ d(li, { ref: h, $error: b, "aria-busy": a === "uploading" || void 0, ...p, children: [
      /* @__PURE__ */ r(si, { $error: b, $segment: s, "aria-hidden": a !== "uploading", children: a === "uploading" ? /* @__PURE__ */ r(aa, { size: "sm", color: "greyscale", "aria-label": `Uploading ${e}` }) : c ?? (ni.test(e) ? /* @__PURE__ */ r(Ao, {}) : /* @__PURE__ */ r(_o, {})) }),
      /* @__PURE__ */ d(ci, { children: [
        /* @__PURE__ */ r(di, { title: e, children: e }),
        v != null ? /* @__PURE__ */ r(fi, { $error: b, children: v }) : null
      ] }),
      b && n ? /* @__PURE__ */ r(
        j,
        {
          label: `Retry uploading ${e}`,
          icon: /* @__PURE__ */ r(Bo, {}),
          size: "xs",
          intent: "secondary",
          variant: "ghost",
          disabled: l,
          onClick: n
        }
      ) : null,
      i ? /* @__PURE__ */ r(
        j,
        {
          label: `Remove ${e}`,
          icon: /* @__PURE__ */ r(pe, {}),
          size: "xs",
          intent: "secondary",
          variant: "ghost",
          disabled: l,
          onClick: i
        }
      ) : null
    ] });
  }
);
ta.displayName = "AiFileAttachment";
const Yr = 32, Ur = 24, pi = o(_a.Root)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${Yr}px;
  height: ${Yr}px;
  padding: 0;
  border: none;
  border-radius: var(--radius-1000);
  cursor: pointer;
  background: transparent;
  color: var(--color-secondary-secondary);
  transition: background-color 120ms ease, color 120ms ease;

  /* Off — matches IconButton ghost · secondary */
  &[data-state='off']:hover:not(:disabled) {
    background: var(--color-secondary-secondary-overlay);
  }
  &[data-state='off']:active:not(:disabled) {
    background: var(--color-secondary-secondary-overlay-hover);
  }

  /* On — segment surface gradient + filled glyph in the segment accent */
  &[data-state='on'] {
    background: ${(e) => Xe(e.$segment, "surface")};
    color: ${(e) => ye(e.$segment, "flat")};
  }

  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    background: transparent;
    color: var(--color-disabled-disabled-inverse);
  }

  &:focus {
    outline: none;
  }
  &:focus-visible::after {
    content: '';
    position: absolute;
    inset: -2px;
    border: var(--stroke-300) solid var(--color-primary-primary);
    border-radius: var(--radius-1000);
    pointer-events: none;
  }
`, hi = o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${Ur}px;
  height: ${Ur}px;
  & > svg {
    width: 100%;
    height: 100%;
  }
  ${(e) => e.$fillCapsule ? "& > svg rect { fill: currentColor; }" : ""}
`, na = f.forwardRef(
  ({
    label: e = "Voice input",
    icon: a,
    pressedIcon: t,
    segment: i = "consumer",
    pressed: n,
    defaultPressed: l = !1,
    onPressedChange: s,
    ...c
  }, p) => {
    const [h, b] = f.useState(l), v = n !== void 0, g = v ? n : h, m = (g ? t : void 0) ?? a ?? /* @__PURE__ */ r(Ja, {}), u = g && !a && !t;
    return /* @__PURE__ */ r(
      pi,
      {
        ref: p,
        $segment: i,
        pressed: g,
        onPressedChange: (y) => {
          v || b(y), s == null || s(y);
        },
        ...c,
        children: /* @__PURE__ */ r(je.Root, { label: e, children: /* @__PURE__ */ r(hi, { "aria-hidden": !0, $fillCapsule: u, children: m }) })
      }
    );
  }
);
na.displayName = "AiModeToggle";
const vi = 400, ui = 680, Zr = 1.35, gi = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-100);
  width: 100%;
  min-width: ${vi}px;
  max-width: ${ui}px;
`, bi = o.form`
  display: flex;
  flex-direction: column;
  gap: ${(e) => e.$status === "error" ? "var(--space-300)" : "var(--space-600)"};
  margin: 0;
  padding: var(--space-500);
  border-radius: var(--radius-400);
  border: var(--stroke-200) solid transparent;
  /* Figma drop shadow: 0 1px 2px color/elevation/drop-shadow-light (not an elevation/<n> style) */
  box-shadow: 0 1px 2px 0 var(--color-elevation-drop-shadow-light);
  font-family: var(--font-family);

  ${(e) => e.$status === "error" ? $`
          background: var(--color-surfaces-container);
          border-color: var(--color-error-error);
        ` : $`
          background:
            linear-gradient(var(--color-surfaces-container), var(--color-surfaces-container)) padding-box,
            ${Xe(e.$segment, "primary")} border-box;
        `}

  ${(e) => e.$disabled && $`
      background: var(--color-surfaces-container);
      border-color: var(--color-disabled-disabled);
    `}
`, mi = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-200);
  min-width: 0;
`, yi = o.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-100);
`, xi = o.textarea`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  resize: none;
  overflow-y: auto;
  background: transparent;
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-medium);
  line-height: ${Zr};
  color: var(--color-text-icon-primary);
  caret-color: ${(e) => ye(e.$segment, "flat")};
  max-height: ${(e) => `calc(${e.$maxRows} * ${Zr} * var(--type-size-body))`};

  &::placeholder {
    color: var(--color-text-icon-placeholder);
    opacity: 1;
  }
  &:disabled {
    cursor: not-allowed;
    color: var(--color-disabled-disabled-inverse);
  }
`, wi = o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-100);
  min-height: 32px;
`, Kr = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-100);
  ${(e) => e.$end ? "flex: 0 0 auto; justify-content: flex-end;" : "flex: 1 1 auto; flex-wrap: wrap; min-width: 0;"}
`, $i = o(j)`
  && {
    transition: box-shadow 120ms ease;
  }
  &&:not(:disabled),
  &&:hover:not(:disabled),
  &&:active:not(:disabled) {
    background: ${(e) => Xe(e.$segment, "fill")};
    color: ${(e) => ye(e.$segment, "on-fill")};
  }
  &&:hover:not(:disabled) {
    box-shadow: var(--elevation-1);
  }
  &&:active:not(:disabled) {
    box-shadow: none;
  }
`, ki = () => /* @__PURE__ */ r(Qa, { fill: "currentColor", strokeWidth: 0, style: { transform: "scale(0.78)" } }), zi = f.forwardRef(
  ({
    segment: e = "consumer",
    status: a = "idle",
    value: t,
    defaultValue: i = "",
    onValueChange: n,
    onSubmit: l,
    onStop: s,
    onRetry: c,
    placeholder: p = "Type your message here",
    label: h = "Message",
    errorMessage: b = "Your message didn't send. Check your connection and try again.",
    leadingActions: v,
    onAdd: g,
    contextOptions: m,
    contexts: u,
    defaultContexts: y = [],
    onContextsChange: k,
    onFilesSelected: w,
    accept: z,
    attachments: I = [],
    onRemoveAttachment: L,
    onRetryAttachment: T,
    trailingActions: E,
    footer: R,
    disabled: O = !1,
    maxRows: S = 6,
    className: F,
    style: N,
    ..._
  }, G) => {
    const [C, D] = f.useState(i), M = t !== void 0, P = M ? t : C, A = f.useRef(null);
    f.useImperativeHandle(G, () => A.current);
    const Y = f.useId();
    f.useLayoutEffect(() => {
      const H = A.current;
      H && (H.style.height = "auto", H.style.height = `${H.scrollHeight}px`);
    }, [P]);
    const ee = (H) => {
      M || D(H), n == null || n(H);
    }, [ne, ie] = f.useState(y), x = u ?? ne, B = (H) => {
      u === void 0 && ie(H), k == null || k(H);
    }, W = (H) => B(x.includes(H) ? x.filter((Q) => Q !== H) : [...x, H]), U = I.some((H) => (H.status ?? "ready") === "uploading"), we = P.trim().length > 0, le = a === "sending", $e = a === "error", Fe = () => {
      if (!(O || le || !we || U)) {
        if ($e) {
          c == null || c(P);
          return;
        }
        l == null || l(P.trim(), { contexts: x }), M || D("");
      }
    }, La = (H) => {
      H.key === "Enter" && !H.shiftKey && !H.nativeEvent.isComposing && (H.preventDefault(), Fe());
    };
    let ve;
    le ? ve = { label: "Stop response", icon: /* @__PURE__ */ r(ki, {}), enabled: !0, onClick: () => s == null ? void 0 : s() } : $e ? ve = { label: "Retry", icon: /* @__PURE__ */ r(Bo, {}), enabled: we && !U, onClick: Fe } : ve = { label: "Send message", icon: /* @__PURE__ */ r(qa, {}), enabled: we && !U, onClick: Fe };
    const Oa = m !== void 0 || w !== void 0, Ha = (H) => m == null ? void 0 : m.find((Q) => Q.value === H), Fa = v !== void 0 ? v : Oa ? /* @__PURE__ */ d(J, { children: [
      /* @__PURE__ */ r(
        oa,
        {
          options: m ?? [],
          selected: x,
          onToggle: W,
          onFilesSelected: w,
          accept: z,
          disabled: O
        }
      ),
      x.map((H) => {
        const Q = Ha(H);
        return /* @__PURE__ */ r(
          ea,
          {
            type: "secondary",
            size: "lg",
            leadingIcon: Q == null ? void 0 : Q.icon,
            disabled: O,
            onRemove: () => B(x.filter((Da) => Da !== H)),
            removeLabel: `Remove ${(Q == null ? void 0 : Q.label) ?? H} context`,
            children: (Q == null ? void 0 : Q.label) ?? H
          },
          H
        );
      })
    ] }) : /* @__PURE__ */ r(
      j,
      {
        label: "Add attachment",
        icon: /* @__PURE__ */ r(hr, {}),
        size: "sm",
        intent: "secondary",
        variant: "ghost",
        disabled: O,
        onClick: g
      }
    ), Ea = E !== void 0 ? E : /* @__PURE__ */ r(na, { segment: e, disabled: O });
    return /* @__PURE__ */ d(gi, { className: F, style: N, children: [
      /* @__PURE__ */ d(
        bi,
        {
          ..._,
          $segment: e,
          $status: a,
          $disabled: O,
          "aria-busy": le || void 0,
          onSubmit: (H) => {
            H.preventDefault(), Fe();
          },
          children: [
            /* @__PURE__ */ d(mi, { children: [
              I.length > 0 ? /* @__PURE__ */ r(yi, { "aria-label": "Attachments", role: "list", children: I.map((H) => /* @__PURE__ */ r(
                ta,
                {
                  role: "listitem",
                  name: H.name,
                  segment: e,
                  status: H.status,
                  details: H.details,
                  icon: H.icon,
                  disabled: O,
                  onRemove: L ? () => L(H.id) : void 0,
                  onRetry: T ? () => T(H.id) : void 0
                },
                H.id
              )) }) : null,
              /* @__PURE__ */ r(
                xi,
                {
                  ref: A,
                  rows: 1,
                  $segment: e,
                  $maxRows: S,
                  value: P,
                  placeholder: p,
                  "aria-label": h,
                  "aria-invalid": $e || void 0,
                  "aria-describedby": $e ? Y : void 0,
                  disabled: O,
                  onChange: (H) => ee(H.target.value),
                  onKeyDown: La
                }
              )
            ] }),
            $e ? /* @__PURE__ */ r(V, { id: Y, tone: "error", role: "alert", children: b }) : null,
            /* @__PURE__ */ d(wi, { children: [
              /* @__PURE__ */ r(Kr, { children: Fa }),
              /* @__PURE__ */ d(Kr, { $end: !0, children: [
                Ea,
                /* @__PURE__ */ r(
                  $i,
                  {
                    $segment: e,
                    label: ve.label,
                    icon: ve.icon,
                    size: "sm",
                    intent: "primary",
                    variant: "fill",
                    disabled: O || !ve.enabled,
                    onClick: ve.onClick
                  }
                )
              ] })
            ] })
          ]
        }
      ),
      R
    ] });
  }
);
zi.displayName = "AiQueryInput";
const Xr = { sm: 32, md: 40, lg: 48 }, Jr = { sm: 18, md: 24, lg: 28 }, qr = { sm: 20, md: 24, lg: 28 }, Qr = 8, ia = $`
  position: relative;
  display: inline-flex;
  flex: none;
  width: ${(e) => Xr[e.$size]}px;
  height: ${(e) => Xr[e.$size]}px;
`, Ii = o.span`
  ${ia}
`, Si = o.button`
  ${ia}
  padding: 0;
  border: none;
  appearance: none;
  background: none;
  cursor: pointer;
  border-radius: var(--radius-1000);

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: var(--stroke-300) solid var(--color-primary-primary);
    outline-offset: var(--space-025);
  }
`, Ri = o(cr.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: var(--radius-1000);
  background: ${(e) => e.$selected ? "var(--color-primary-primary)" : "var(--color-primary-primary-overlay)"};
  user-select: none;
`, Ti = o(cr.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Ci = o(cr.Fallback)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: var(--color-primary-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
  letter-spacing: 0.1px;

  svg {
    width: ${(e) => qr[e.$size]}px;
    height: ${(e) => qr[e.$size]}px;
  }
`, Li = o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-icon-on-primary);

  svg {
    width: ${(e) => Jr[e.$size]}px;
    height: ${(e) => Jr[e.$size]}px;
  }
`, Oi = o.span`
  position: absolute;
  right: 5%;
  bottom: 5%;
  width: ${Qr}px;
  height: ${Qr}px;
  border-radius: var(--radius-1000);
  background: var(--color-success-success);
  box-shadow: 0 0 0 var(--stroke-100) var(--color-surfaces-container);
`, Hi = o.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`, la = f.forwardRef(
  ({
    src: e,
    alt: a,
    initials: t,
    size: i = "md",
    selected: n = !1,
    badge: l = !1,
    badgeLabel: s = "Online",
    onClick: c,
    delayMs: p = 0,
    ...h
  }, b) => {
    const v = /* @__PURE__ */ d(J, { children: [
      /* @__PURE__ */ r(Ri, { $size: i, $selected: n, children: n ? /* @__PURE__ */ r(Li, { $size: i, "aria-hidden": !0, children: /* @__PURE__ */ r(Le, { strokeWidth: 3 }) }) : /* @__PURE__ */ d(J, { children: [
        e ? /* @__PURE__ */ r(Ti, { src: e, alt: a }) : null,
        /* @__PURE__ */ r(Ci, { $size: i, delayMs: p, children: t || /* @__PURE__ */ r(Va, { "aria-hidden": !0 }) })
      ] }) }),
      l ? /* @__PURE__ */ r(Oi, { children: /* @__PURE__ */ r(Hi, { children: s }) }) : null
    ] });
    return c ? /* @__PURE__ */ r(
      Si,
      {
        ref: b,
        type: "button",
        $size: i,
        onClick: c,
        ...h,
        children: v
      }
    ) : /* @__PURE__ */ r(Ii, { ref: b, $size: i, ...h, children: v });
  }
);
la.displayName = "Avatar";
const Fi = [
  "red",
  "orange",
  "amber",
  "gold",
  "yellow",
  "lime",
  "green",
  "jade",
  "teal",
  "aqua",
  "cyan",
  "azure",
  "blue",
  "indigo",
  "violet",
  "purple",
  "magenta",
  "pink"
], Ei = {
  primary: {
    solid: { bg: "var(--color-primary-primary)", fg: "var(--color-text-icon-inverse)" },
    subtle: { bg: "var(--color-primary-primary-overlay)", fg: "var(--color-primary-primary)" }
  },
  secondary: {
    solid: { bg: "var(--color-secondary-secondary)", fg: "var(--color-text-icon-inverse)" },
    subtle: { bg: "var(--color-secondary-secondary-overlay)", fg: "var(--color-secondary-secondary)" }
  },
  destructive: {
    solid: { bg: "var(--color-error-error)", fg: "var(--color-text-icon-inverse)" },
    subtle: { bg: "var(--color-error-error-overlay)", fg: "var(--color-error-error)" }
  },
  disabled: {
    solid: { bg: "var(--color-disabled-disabled-inverse)", fg: "var(--color-disabled-disabled)" },
    subtle: { bg: "var(--color-disabled-disabled)", fg: "var(--color-disabled-disabled-inverse)" }
  }
}, Di = (e) => ({
  solid: { bg: `var(--color-badge-${e})`, fg: "var(--color-text-icon-inverse)" },
  subtle: {
    bg: `var(--color-badge-${e}-light)`,
    fg: `var(--color-badge-text-icon-on-${e}-light)`
  }
}), Vr = {
  ...Ei,
  ...Object.fromEntries(Fi.map((e) => [e, Di(e)]))
}, Pi = o.span`
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: var(--space-050);
  /* Figma 122:6268: horizontal padding only (space-050), height hugs the
     12px line so the pill is ~16px tall. */
  padding: 0 var(--space-050);
  border-radius: var(--radius-1000);
  background: ${(e) => e.$bg};
  color: ${(e) => e.$fg};
  font-family: var(--font-family);
  font-size: var(--type-size-caption);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.2px;
  line-height: 1.35;
  white-space: nowrap;

  /*
   * Windows HCT flattens subtle washes: primary/secondary overlays become solid
   * white while label tokens stay light (white-on-white or cyan-on-white). Use
   * the solid fill + ink pair so date / release chips stay readable.
   */
  ${(e) => e.$tone === "subtle" ? $`
          :root[data-theme='win hct'] &,
          [data-theme='win hct'] & {
            background: ${e.$solidBg};
            color: ${e.$solidFg};
          }
        ` : null}
`, Ni = o.span`
  flex-shrink: 0;
  /* Figma left-slot is a fixed 8px status dot; --space-100 == 8px. */
  width: var(--space-100);
  height: var(--space-100);
  border-radius: var(--radius-1000);
  background: currentColor;
`, sa = f.forwardRef(
  ({ children: e, color: a = "primary", tone: t = "solid", dot: i = !0, ...n }, l) => {
    const { bg: s, fg: c } = Vr[a][t], p = Vr[a].solid;
    return /* @__PURE__ */ d(
      Pi,
      {
        ref: l,
        $bg: s,
        $fg: c,
        $solidBg: p.bg,
        $solidFg: p.fg,
        $tone: t,
        ...n,
        children: [
          i ? /* @__PURE__ */ r(Ni, { "aria-hidden": !0 }) : null,
          e
        ]
      }
    );
  }
);
sa.displayName = "Badge";
const Mi = {
  sm: $`
    font-size: var(--type-size-caption);
    letter-spacing: 0.2px;
  `,
  md: $`
    font-size: var(--type-size-body);
    letter-spacing: 0.1px;
  `,
  lg: $`
    font-size: var(--type-size-subject);
    letter-spacing: 0;
  `
}, _i = (e) => e ? $`
        --link-color: var(--color-text-icon-on-primary);
        color: var(--link-color);
        /* Figma: inverse disabled = onPrimary at 50%. The on-primary-disabled
           token doesn't hold that value in dark.a, so opacity carries it. */
        &[aria-disabled='true'] {
          opacity: 0.5;
        }
      ` : $`
        --link-color: var(--color-text-icon-link);
        color: var(--link-color);
        &:hover:not([aria-disabled='true']) {
          color: var(--color-text-icon-link-hover);
        }
        &:active:not([aria-disabled='true']) {
          color: var(--color-text-icon-link-press);
        }
        &[aria-disabled='true'] {
          color: var(--color-text-icon-disabled);
        }
      `, Ai = o.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--space-050);
  /* 24px minimum target (WCAG 2.5.8) — Figma hellopc.link frame height. */
  min-height: 24px;
  font-family: var(--font-family);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
  text-decoration: none;
  cursor: pointer;
  outline: none;

  ${(e) => Mi[e.$size]}
  ${(e) => _i(e.$inverse)}

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }

  /* Figma focus: 3px ring in the link color, hugging the text vertically and
     4px out at the sides, 4px radius. The text color stays at rest. */
  &:focus-visible {
    color: var(--link-color);
  }
  &:focus-visible::after {
    content: '';
    position: absolute;
    inset: 0 calc(-1 * var(--space-050));
    border: var(--stroke-300) solid var(--link-color);
    border-radius: var(--radius-50);
    pointer-events: none;
  }
`, Bi = o.span`
  text-decoration: underline;
  text-decoration-thickness: from-font;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`, ji = o.span`
  display: inline-flex;
  flex: none;

  svg {
    width: 1em;
    height: 1em;
  }
`, ca = f.forwardRef(
  ({
    size: e = "md",
    inverse: a = !1,
    external: t = !1,
    icon: i,
    disabled: n = !1,
    href: l,
    target: s,
    rel: c,
    onClick: p,
    children: h,
    ...b
  }, v) => {
    const g = i ?? (t ? /* @__PURE__ */ r(et, { "aria-hidden": !0 }) : null);
    return /* @__PURE__ */ d(
      Ai,
      {
        ...b,
        ref: v,
        $size: e,
        $inverse: a,
        href: n ? void 0 : l,
        target: s ?? (t ? "_blank" : void 0),
        rel: c ?? (t ? "noopener noreferrer" : void 0),
        "aria-disabled": n || void 0,
        tabIndex: n ? -1 : b.tabIndex,
        onClick: (m) => {
          if (n) {
            m.preventDefault();
            return;
          }
          p == null || p(m);
        },
        children: [
          /* @__PURE__ */ r(Bi, { children: h }),
          t ? /* @__PURE__ */ r(Aa.Root, { children: " (opens in a new window)" }) : null,
          g ? /* @__PURE__ */ r(ji, { "aria-hidden": !0, children: g }) : null
        ]
      }
    );
  }
);
ca.displayName = "Link";
const Gi = o.nav`
  font-family: var(--font-family);
`, Wi = o.ol`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-075);
  margin: 0;
  padding: 0;
  list-style: none;
`, Qe = o.li`
  display: inline-flex;
  align-items: center;
`, Yi = o.li`
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  color: var(--color-text-icon-primary);

  svg {
    width: 24px;
    height: 24px;
  }
`, da = `
  padding: var(--space-050) 0;
  font-family: var(--font-family);
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
  white-space: nowrap;
  border-radius: var(--radius-50);
`, Ui = o.span`
  display: inline-flex;
  padding: var(--space-050) 0;
`, Zi = o.span`
  ${da}
  color: var(--color-text-icon-secondary);
`, Ki = o.span`
  ${da}
  color: var(--color-text-icon-primary);
`, eo = (e, a) => a ? /* @__PURE__ */ r(Ki, { "aria-current": "page", children: e.label }) : e.href || e.onClick ? /* @__PURE__ */ r(Ui, { children: /* @__PURE__ */ r(ca, { size: "lg", href: e.href, onClick: e.onClick, children: e.label }) }) : /* @__PURE__ */ r(Zi, { children: e.label }), Xi = f.forwardRef(
  ({
    items: e,
    maxItems: a,
    itemsBeforeCollapse: t = 1,
    itemsAfterCollapse: i = 2,
    label: n = "Breadcrumb",
    overflowLabel: l = "Show hidden breadcrumbs",
    ...s
  }, c) => {
    const p = e.length - 1, h = f.useRef(!1), b = a !== void 0 && e.length > a ? e.slice(t, Math.max(t, e.length - i)) : [], v = b.length > 0, g = v ? e.slice(0, t) : e, m = v ? e.slice(e.length - i) : [], u = [];
    return g.forEach((y, k) => {
      u.push(/* @__PURE__ */ r(Qe, { children: eo(y, !v && k === p) }, `lead-${k}`));
    }), v && (u.push(
      /* @__PURE__ */ r(Qe, { children: /* @__PURE__ */ d(X.Root, { children: [
        /* @__PURE__ */ r(X.Trigger, { asChild: !0, children: /* @__PURE__ */ r(
          j,
          {
            label: l,
            icon: /* @__PURE__ */ r(vr, {}),
            size: "xs",
            intent: "secondary",
            variant: "ghost"
          }
        ) }),
        /* @__PURE__ */ r(X.Portal, { children: /* @__PURE__ */ r(
          X.Content,
          {
            asChild: !0,
            sideOffset: 8,
            align: "start",
            onPointerDownOutside: () => {
              h.current = !0;
            },
            onCloseAutoFocus: (y) => {
              h.current && y.preventDefault(), h.current = !1;
            },
            children: /* @__PURE__ */ r(Ke, { width: "max-content", children: b.map((y, k) => /* @__PURE__ */ r(X.Item, { asChild: !0, children: /* @__PURE__ */ r(
              Ie,
              {
                showLeftSlot: !1,
                showRightSlot: !1,
                onClick: y.onClick,
                children: y.label
              }
            ) }, `hidden-${k}`)) })
          }
        ) })
      ] }) }, "overflow")
    ), m.forEach((y, k) => {
      const w = e.length - m.length + k;
      u.push(/* @__PURE__ */ r(Qe, { children: eo(y, w === p) }, `trail-${k}`));
    })), /* @__PURE__ */ r(Gi, { ref: c, "aria-label": n, ...s, children: /* @__PURE__ */ r(Wi, { children: u.map((y, k) => /* @__PURE__ */ d(f.Fragment, { children: [
      k > 0 ? /* @__PURE__ */ r(Yi, { "aria-hidden": !0, role: "presentation", children: /* @__PURE__ */ r(Ye, {}) }) : null,
      y
    ] }, k)) }) });
  }
);
Xi.displayName = "Breadcrumb";
const Ji = {
  low: "var(--elevation-0)",
  high: "var(--elevation-0)"
}, qi = o.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  /* Clip children to the rounded corners so media/backgrounds bleed to the edge. */
  overflow: hidden;
  border-radius: var(--radius-400);
  background: var(--color-surfaces-container);
  box-shadow: ${(e) => Ji[e.$elevation]};

  /*
   * Windows HCT collapses elevation + container surfaces onto the canvas, so
   * cards lose their edge. Match Dropdown: a real stroke token border.
   */
  :root[data-theme='win hct'] &,
  [data-theme='win hct'] & {
    border: var(--stroke-100) solid var(--color-stroke-border);
    box-shadow: none;
  }
`, Qi = f.forwardRef(
  ({ children: e, elevation: a = "low", ...t }, i) => /* @__PURE__ */ r(qi, { ref: i, $elevation: a, ...t, children: e })
);
Qi.displayName = "Card";
const Vi = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-300);
  /* p-32 from Figma 183:11829 */
  padding: var(--space-600);
  align-items: ${(e) => e.$align === "center" ? "center" : "flex-start"};
  text-align: ${(e) => e.$align === "center" ? "center" : "left"};
  font-family: var(--font-family);
`, el = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-100);
  width: 100%;
  align-items: ${(e) => e.$align === "center" ? "center" : "flex-start"};
`, rl = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-100);
  color: var(--color-text-icon-primary);
  ${(e) => e.$align === "center" ? "justify-content: center;" : "width: 100%;"}
`, ol = o.span`
  display: inline-flex;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  & > svg {
    width: 100%;
    height: 100%;
  }
`, al = o.span`
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.2px;
  line-height: 1.35;
  color: var(--color-text-icon-primary);
`, tl = o.h2`
  margin: 0;
  width: 100%;
  font-size: var(--type-size-hero);
  font-weight: var(--font-weight-bold);
  /* Figma bold.42 tracking; no token carries letter-spacing. */
  letter-spacing: -0.6px;
  line-height: 1.35;
  color: var(--color-text-icon-primary);
`, nl = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-600);
  width: 100%;
  align-items: ${(e) => e.$align === "center" ? "center" : "flex-start"};
`, fa = $`
  margin: 0;
  width: 100%;
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  color: var(--color-text-icon-primary);
`, il = o.p`
  ${fa}
  font-size: var(--type-size-title);
  letter-spacing: 0.4px;
`, ll = o.p`
  ${fa}
  font-size: var(--type-size-subject);
  letter-spacing: 0.2px;
`, sl = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-300);
`, cl = f.forwardRef(
  ({ leadingText: e, leadingIcon: a, title: t, body: i, secondaryBody: n, actions: l, align: s = "start", ...c }, p) => /* @__PURE__ */ d(Vi, { ref: p, $align: s, ...c, children: [
    /* @__PURE__ */ d(el, { $align: s, children: [
      e != null || a != null ? /* @__PURE__ */ d(rl, { $align: s, children: [
        a != null ? /* @__PURE__ */ r(ol, { "aria-hidden": !0, children: a }) : null,
        e != null ? /* @__PURE__ */ r(al, { children: e }) : null
      ] }) : null,
      /* @__PURE__ */ r(tl, { children: t })
    ] }),
    i != null || n != null || l != null ? /* @__PURE__ */ d(nl, { $align: s, children: [
      i != null ? /* @__PURE__ */ r(il, { children: i }) : null,
      n != null ? /* @__PURE__ */ r(ll, { children: n }) : null,
      l != null ? /* @__PURE__ */ r(sl, { children: l }) : null
    ] }) : null
  ] })
);
cl.displayName = "HeroCard";
const dl = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-600);
  /* p-24 from Figma 183:11846 */
  padding: var(--space-500);
  font-family: var(--font-family);
`, fl = o.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: var(--space-300);
  min-width: 0;
`, pl = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-200);
  width: 100%;
`, hl = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-100);
  width: 100%;
  color: var(--color-text-icon-secondary);
`, vl = o.span`
  display: inline-flex;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  & > svg {
    width: 100%;
    height: 100%;
  }
`, ul = o.span`
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.2px;
  line-height: 1.35;
  color: var(--color-text-icon-secondary);
`, gl = o.h3`
  margin: 0;
  width: 100%;
  font-size: var(--type-size-subtitle);
  font-weight: var(--font-weight-bold);
  line-height: 1.35;
  color: var(--color-text-icon-primary);
`, bl = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-500);
  width: 100%;
`, ml = o.p`
  margin: 0;
  width: 100%;
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.2px;
  line-height: 1.35;
  color: var(--color-text-icon-secondary);
`, yl = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-300);
`, xl = o.div`
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  border-radius: var(--radius-300);
  overflow: hidden;
  background: var(--color-surfaces-on-container);
`, wl = f.forwardRef(
  ({ leadingText: e, leadingIcon: a, title: t, body: i, actions: n, media: l, ...s }, c) => /* @__PURE__ */ d(dl, { ref: c, ...s, children: [
    /* @__PURE__ */ d(fl, { children: [
      /* @__PURE__ */ d(pl, { children: [
        e != null || a != null ? /* @__PURE__ */ d(hl, { children: [
          a != null ? /* @__PURE__ */ r(vl, { "aria-hidden": !0, children: a }) : null,
          e != null ? /* @__PURE__ */ r(ul, { children: e }) : null
        ] }) : null,
        /* @__PURE__ */ r(gl, { children: t })
      ] }),
      i != null || n != null ? /* @__PURE__ */ d(bl, { children: [
        i != null ? /* @__PURE__ */ r(ml, { children: i }) : null,
        n != null ? /* @__PURE__ */ r(yl, { children: n }) : null
      ] }) : null
    ] }),
    l != null ? /* @__PURE__ */ r(xl, { children: l }) : null
  ] })
);
wl.displayName = "ContentCard";
const $l = o.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-family);
`, kl = o.div`
  width: 100%;
  overflow: hidden;
  background: var(--color-surfaces-on-container);
  & > img,
  & > video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`, zl = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-500);
  /* p-24 from Figma 183:11861 */
  padding: var(--space-500);
`, Il = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-300);
`, Sl = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-200);
`, Rl = o.h3`
  flex: 1 0 0;
  margin: 0;
  min-width: 0;
  font-size: var(--type-size-subtitle);
  font-weight: var(--font-weight-bold);
  line-height: 1.35;
  color: var(--color-text-icon-primary);
`, Tl = o.div`
  flex-shrink: 0;
  display: inline-flex;
`, Cl = o.p`
  margin: 0;
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.2px;
  line-height: 1.35;
  color: var(--color-text-icon-secondary);
`, Ll = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-300);
`, Ol = f.forwardRef(
  ({ media: e, title: a, menu: t, body: i, actions: n, ...l }, s) => /* @__PURE__ */ d($l, { ref: s, ...l, children: [
    e != null ? /* @__PURE__ */ r(kl, { children: e }) : null,
    /* @__PURE__ */ d(zl, { children: [
      /* @__PURE__ */ d(Il, { children: [
        /* @__PURE__ */ d(Sl, { children: [
          /* @__PURE__ */ r(Rl, { children: a }),
          t != null ? /* @__PURE__ */ r(Tl, { children: t }) : null
        ] }),
        i != null ? /* @__PURE__ */ r(Cl, { children: i }) : null
      ] }),
      n != null ? /* @__PURE__ */ r(Ll, { children: n }) : null
    ] })
  ] })
);
Ol.displayName = "SimpleCard";
const pa = "var(--elevation-0)", Hl = o(Ge.Root)`
  display: inline-flex;
  align-items: center;
  gap: var(--space-025);
  border-radius: var(--radius-1000);
  background: ${(e) => e.$intent === "primary" ? "var(--color-primary-primary-overlay)" : "var(--color-secondary-secondary-overlay)"};
  /* Figma insets the medium track by 2px; the small track sits flush. */
  padding: ${(e) => e.$size === "md" ? "var(--space-025)" : "0"};

  /*
   * Dark + Windows HCT: overlay washes collapse or sit too close to the canvas,
   * so the track edge disappears. Keep a real stroke from existing tokens.
   * HCT also maps primary/secondary overlays to solid white — swap the track to
   * the container surface so ghost labels (often white) stay readable.
   */
  :root[data-theme='dark.a'] &,
  [data-theme='dark.a'] & {
    box-shadow: inset 0 0 0 var(--stroke-100) var(--color-stroke-border);
  }

  :root[data-theme='win hct'] &,
  [data-theme='win hct'] & {
    background: var(--color-surfaces-container);
    box-shadow: inset 0 0 0 var(--stroke-100) var(--color-stroke-border);
  }
`, ha = $`
  /*
   * Unselected hover: inverse surface + inverse ink + primary border so the
   * wash is never light-on-light (dark) or white-on-white (HCT).
   */
  :root[data-theme='dark.a'] &:not([data-state='on']):hover:not(:disabled),
  [data-theme='dark.a'] &:not([data-state='on']):hover:not(:disabled),
  :root[data-theme='win hct'] &:not([data-state='on']):hover:not(:disabled),
  [data-theme='win hct'] &:not([data-state='on']):hover:not(:disabled) {
    background: var(--color-surfaces-inverse-container);
    color: var(--color-text-icon-inverse);
    box-shadow: inset 0 0 0 var(--stroke-100) var(--color-primary-primary);
  }

  /*
   * Selected: elevation-0 collapses under HCT; keep fill tokens from Button but
   * add a primary edge. Dark keeps the same edge so the pill reads against the
   * track when shadows are soft.
   */
  :root[data-theme='dark.a'] &[data-state='on'],
  [data-theme='dark.a'] &[data-state='on'],
  :root[data-theme='win hct'] &[data-state='on'],
  [data-theme='win hct'] &[data-state='on'] {
    box-shadow: inset 0 0 0 var(--stroke-100) var(--color-primary-primary);
  }

  :root[data-theme='dark.a'] &[data-state='on']:hover:not(:disabled),
  [data-theme='dark.a'] &[data-state='on']:hover:not(:disabled),
  :root[data-theme='win hct'] &[data-state='on']:hover:not(:disabled),
  [data-theme='win hct'] &[data-state='on']:hover:not(:disabled) {
    box-shadow: inset 0 0 0 var(--stroke-100) var(--color-primary-primary);
  }
`, Fl = o(Z)`
  &[data-state='on'] {
    box-shadow: ${pa};
  }

  ${ha}
`, El = o(j)`
  &[data-state='on'] {
    box-shadow: ${pa};
  }

  ${ha}
`, Dl = f.forwardRef(
  ({
    options: e,
    value: a,
    defaultValue: t,
    onValueChange: i,
    size: n = "md",
    intent: l = "primary",
    iconOnly: s = !1,
    ...c
  }, p) => {
    var m;
    const [h, b] = f.useState(t ?? ((m = e[0]) == null ? void 0 : m.value)), v = a ?? h;
    return /* @__PURE__ */ r(
      Hl,
      {
        ref: p,
        type: "single",
        value: v,
        onValueChange: (u) => {
          u && (a === void 0 && b(u), i == null || i(u));
        },
        $intent: l,
        $size: n,
        ...c,
        children: e.map((u) => {
          const k = u.value === v ? "fill" : "ghost";
          return /* @__PURE__ */ r(Ge.Item, { value: u.value, asChild: !0, children: s ? /* @__PURE__ */ r(
            El,
            {
              label: u.label,
              icon: u.icon,
              size: n,
              intent: l,
              variant: k,
              disabled: u.disabled
            }
          ) : /* @__PURE__ */ r(
            Fl,
            {
              size: n,
              intent: l,
              variant: k,
              underline: !1,
              startIcon: u.icon,
              disabled: u.disabled,
              children: u.label
            }
          ) }, u.value);
        })
      }
    );
  }
);
Dl.displayName = "ContentSwitcher";
const Pl = o(sa)`
  ${(e) => e.$popout ? $`
          /* Figma popout: a 2px ring that separates the counter from busy
             content it overlays (an icon, avatar, or tab). The token is white
             in light/HCT and grey in dark, so it always contrasts the host. */
          border: var(--stroke-200) solid var(--color-stroke-border-pop);
        ` : ""}
`, Nl = f.forwardRef(
  ({ count: e, status: a = "primary", tone: t = "solid", popout: i = !1, ...n }, l) => /* @__PURE__ */ r(Pl, { ref: l, $popout: i, color: a, tone: a === "disabled" ? "solid" : t, dot: !1, ...n, children: e })
);
Nl.displayName = "Counter";
const Ml = 20;
function _l(e, a = /* @__PURE__ */ new Date()) {
  const t = 2e3 + e;
  return t > a.getFullYear() + Ml ? 1900 + e : t;
}
function Al(e) {
  return e.replace(/\D/g, "").slice(0, 8);
}
function re(e) {
  const a = Al(e);
  if (a.length <= 2) return a;
  if (a.length <= 4) return `${a.slice(0, 2)}/${a.slice(2)}`;
  const t = a.slice(0, 2), i = a.slice(2, 4), n = a.slice(4), l = n.length >= 4 ? n.slice(-2) : n;
  return `${t}/${i}/${l}`;
}
function or(e, a = /* @__PURE__ */ new Date()) {
  const t = /^(\d{2})\/(\d{2})\/(\d{2})$/.exec(e);
  if (!t) return null;
  const i = Number(t[1]), n = Number(t[2]), l = _l(Number(t[3]), a), s = new Date(l, i - 1, n);
  return s.getFullYear() !== l || s.getMonth() !== i - 1 || s.getDate() !== n ? null : s;
}
function Ee(e) {
  const a = String(e.getMonth() + 1).padStart(2, "0"), t = String(e.getDate()).padStart(2, "0"), i = String(e.getFullYear()).slice(-2);
  return `${a}/${t}/${i}`;
}
function oe(e, a) {
  return e.getFullYear() === a.getFullYear() && e.getMonth() === a.getMonth() && e.getDate() === a.getDate();
}
function De(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function Bl(e, a) {
  return new Date(e.getFullYear(), e.getMonth() + a, 1);
}
const ro = 15, jl = ["S", "M", "T", "W", "T", "F", "S"], oo = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], Gl = o.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: calc((7 * var(--space-600)) + (6 * var(--space-025)) + (2 * var(--space-100)));
  max-width: 100%;
  overflow: hidden;
  border-radius: var(--radius-400);
  background: var(--color-surfaces-container);
  box-shadow: var(--elevation-3);
  font-family: var(--font-family);
  color: var(--color-text-icon-primary);
`, Wl = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-300) var(--space-100);
  border-bottom: var(--stroke-100) solid var(--color-stroke-border);
`, Yl = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-100);
`, Ul = o.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-100);
  min-height: calc(
    var(--space-500) + var(--space-100) + (6 * var(--space-500)) + (5 * var(--space-025))
  );
  padding: var(--space-100);
`, Zl = o.div`
  display: grid;
  grid-template-columns: repeat(7, var(--space-600));
  column-gap: var(--space-025);
  justify-content: center;
`, Kl = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--space-600);
  height: var(--space-500);
  color: var(--color-text-icon-primary);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.1px;
  line-height: 1.35;
`, Xl = o.div`
  display: grid;
  grid-template-columns: repeat(7, var(--space-600));
  column-gap: var(--space-025);
  row-gap: var(--space-025);
  justify-content: center;
  overflow: visible;
`, Jl = o.div`
  position: relative;
  width: var(--space-600);
  height: var(--space-500);

  ${(e) => e.$ribbon && $`
      &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: ${e.$extendRight ? "calc(var(--space-025) * -1)" : "0"};
        background: var(--color-tonal-tonal-lightest);
        border-radius: ${e.$roundLeft && e.$roundRight ? "var(--radius-1000)" : e.$roundLeft ? "var(--radius-1000) 0 0 var(--radius-1000)" : e.$roundRight ? "0 var(--radius-1000) var(--radius-1000) 0" : "0"};
        pointer-events: none;
      }
    `}
`, ql = o.button`
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  border-radius: var(--radius-1000);
  background: transparent;
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-caption);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.1px;
  line-height: 1.35;
  cursor: pointer;

  ${(e) => e.$tone === "outside" && $`
      color: var(--color-text-icon-placeholder);
    `}

  ${(e) => (e.$tone === "start" || e.$tone === "end" || e.$tone === "selected") && $`
      background: var(--color-tonal-tonal);
      color: var(--color-text-icon-on-tonal-inverse);
    `}

  &:hover:not(:disabled) {
    ${(e) => e.$tone === "empty" || e.$tone === "outside" ? $`
            background: var(--color-secondary-secondary-overlay);
          ` : ""}
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: var(--space-025);
  }
`, ao = o.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-100);
  width: 100%;
`, Ql = o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-300) var(--space-200);
  border-top: var(--stroke-100) solid var(--color-stroke-border);
`, Vl = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-300);
`, es = { start: null, end: null }, rs = (e) => {
  const a = De(e), t = new Date(a.getFullYear(), a.getMonth(), 1 - a.getDay());
  return Array.from({ length: 42 }, (i, n) => {
    const l = new Date(t.getFullYear(), t.getMonth(), t.getDate() + n);
    return { date: l, inMonth: l.getMonth() === e.getMonth() };
  });
}, os = (e) => e - 9, to = (e, a) => e.getTime() <= a.getTime() ? { start: e, end: a } : { start: a, end: e }, as = (e, a, t) => {
  const i = e.getTime();
  return i >= a.getTime() && i <= t.getTime();
}, ts = (e, a) => {
  const t = e === "start", i = e === "end", n = e === "inRange" || t || i, l = t || n && a === 0, s = i || n && a === 6;
  return {
    ribbon: n,
    roundLeft: l,
    roundRight: s,
    extendRight: n && !s
  };
}, yr = f.forwardRef(
  ({
    mode: e = "single",
    value: a,
    defaultValue: t = null,
    onValueChange: i,
    rangeValue: n,
    defaultRangeValue: l,
    onRangeValueChange: s,
    defaultView: c = "day",
    "aria-label": p = "Choose date",
    onToday: h,
    onCancel: b,
    onConfirm: v
  }, g) => {
    const m = e === "range", [u, y] = f.useState(c), [k, w] = f.useState(t), [z, I] = f.useState(
      l ?? es
    ), [L, T] = f.useState(null), E = a !== void 0 ? a : k, R = {
      start: (n == null ? void 0 : n.start) !== void 0 ? n.start : z.start,
      end: (n == null ? void 0 : n.end) !== void 0 ? n.end : z.end
    }, O = (m ? R.start ?? R.end : E) ?? /* @__PURE__ */ new Date(), [S, F] = f.useState(() => De(O)), N = (x) => {
      w(x), i == null || i(x);
    }, _ = (x) => {
      I(x), s == null || s(x);
    }, G = () => {
      const x = /* @__PURE__ */ new Date();
      F(De(x)), y("day"), m ? _({ start: x, end: null }) : N(x), h == null || h();
    }, C = () => {
      m ? v == null || v(R.start ? R : null) : v == null || v(E);
    }, D = (x) => {
      if (F(De(x)), !m) {
        N(x);
        return;
      }
      if (!R.start || R.end) {
        _({ start: x, end: null });
        return;
      }
      _(to(R.start, x));
    }, M = m && R.start && !R.end && L && !oe(L, R.start) ? L : R.end, P = m && R.start && M ? to(R.start, M) : R, A = (x, B) => {
      if (m && P.start) {
        const W = P.start, U = P.end;
        if (U && oe(x, W) && oe(x, U)) return "selected";
        if (oe(x, W) && U && !oe(W, U)) return "start";
        if (U && oe(x, U) && !oe(W, U)) return "end";
        if (U && as(x, W, U)) return "inRange";
        if (!U && oe(x, W)) return "selected";
      }
      return !m && E && oe(x, E) ? "selected" : B ? "empty" : "outside";
    }, Y = oo[S.getMonth()], ee = String(S.getFullYear()), ne = Array.from(
      { length: ro },
      (x, B) => os(S.getFullYear()) + B
    ), ie = (x) => {
      if (u === "year") {
        F(
          new Date(S.getFullYear() + x * ro, S.getMonth(), 1)
        );
        return;
      }
      if (u === "month") {
        F(new Date(S.getFullYear() + x, S.getMonth(), 1));
        return;
      }
      F(Bl(S, x));
    };
    return /* @__PURE__ */ d(Gl, { ref: g, role: "dialog", "aria-label": p, children: [
      /* @__PURE__ */ r(Wl, { children: /* @__PURE__ */ d(Yl, { children: [
        /* @__PURE__ */ r(
          j,
          {
            type: "button",
            label: u === "year" ? "Previous years" : u === "month" ? "Previous year" : "Previous month",
            icon: /* @__PURE__ */ r(ur, {}),
            size: "xs",
            intent: "secondary",
            variant: "ghost",
            onClick: () => ie(-1)
          }
        ),
        /* @__PURE__ */ r(
          Z,
          {
            type: "button",
            size: "xs",
            intent: u === "month" ? "primary" : "secondary",
            variant: u === "month" ? "fill" : "tonal",
            underline: !1,
            "aria-pressed": u === "month",
            onClick: () => y((x) => x === "month" ? "day" : "month"),
            children: Y
          }
        ),
        /* @__PURE__ */ r(
          Z,
          {
            type: "button",
            size: "xs",
            intent: u === "year" ? "primary" : "secondary",
            variant: u === "year" ? "fill" : "tonal",
            underline: !1,
            "aria-pressed": u === "year",
            onClick: () => y((x) => x === "year" ? "day" : "year"),
            children: ee
          }
        ),
        /* @__PURE__ */ r(
          j,
          {
            type: "button",
            label: u === "year" ? "Next years" : u === "month" ? "Next year" : "Next month",
            icon: /* @__PURE__ */ r(Ye, {}),
            size: "xs",
            intent: "secondary",
            variant: "ghost",
            onClick: () => ie(1)
          }
        )
      ] }) }),
      /* @__PURE__ */ r(Ul, { children: u === "day" ? /* @__PURE__ */ d(J, { children: [
        /* @__PURE__ */ r(Zl, { "aria-hidden": !0, children: jl.map((x, B) => /* @__PURE__ */ r(Kl, { children: x }, `${x}-${B}`)) }),
        /* @__PURE__ */ r(Xl, { role: "grid", "aria-label": `${Y} ${ee}`, children: rs(S).map(({ date: x, inMonth: B }, W) => {
          const U = A(x, B), we = oe(x, /* @__PURE__ */ new Date()), le = ts(U, W % 7);
          return /* @__PURE__ */ r(
            Jl,
            {
              $ribbon: le.ribbon,
              $roundLeft: le.roundLeft,
              $roundRight: le.roundRight,
              $extendRight: le.extendRight,
              children: /* @__PURE__ */ r(
                ql,
                {
                  type: "button",
                  $tone: U,
                  "aria-label": x.toLocaleDateString(void 0, {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  }),
                  "aria-current": we ? "date" : void 0,
                  "aria-selected": U === "selected" || U === "start" || U === "end" || void 0,
                  onMouseEnter: () => T(x),
                  onMouseLeave: () => T(null),
                  onClick: () => D(x),
                  children: x.getDate()
                }
              )
            },
            x.toISOString()
          );
        }) })
      ] }) : u === "month" ? /* @__PURE__ */ r(ao, { children: oo.map((x, B) => {
        const W = B === S.getMonth();
        return /* @__PURE__ */ r(
          Z,
          {
            type: "button",
            size: "xs",
            fullWidth: !0,
            intent: W ? "primary" : "secondary",
            variant: W ? "tonal" : "ghost",
            underline: !1,
            "aria-pressed": W,
            onClick: () => {
              F(new Date(S.getFullYear(), B, 1)), y("day");
            },
            children: x
          },
          x
        );
      }) }) : /* @__PURE__ */ r(ao, { children: ne.map((x) => {
        const B = x === S.getFullYear();
        return /* @__PURE__ */ r(
          Z,
          {
            type: "button",
            size: "xs",
            fullWidth: !0,
            intent: B ? "primary" : "secondary",
            variant: B ? "tonal" : "ghost",
            underline: !1,
            "aria-pressed": B,
            onClick: () => {
              F(new Date(x, S.getMonth(), 1)), y("day");
            },
            children: x
          },
          x
        );
      }) }) }),
      /* @__PURE__ */ d(Ql, { children: [
        /* @__PURE__ */ r(Z, { type: "button", size: "sm", intent: "secondary", variant: "tonal", onClick: G, children: "Today" }),
        /* @__PURE__ */ d(Vl, { children: [
          /* @__PURE__ */ r(Z, { type: "button", size: "sm", intent: "secondary", variant: "ghost", onClick: b, children: "Cancel" }),
          /* @__PURE__ */ r(Z, { type: "button", size: "sm", intent: "primary", variant: "fill", onClick: C, children: "OK" })
        ] })
      ] })
    ] });
  }
);
yr.displayName = "Calendar";
const ns = 40, is = o.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-050);
  max-width: 100%;
  font-family: var(--font-family);
`, ls = o.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: max-content;
  max-width: 100%;
  gap: var(--space-050);
`, ss = o.div`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  flex: none;
  width: max-content;
  height: ${ns}px;
  max-width: 100%;
  padding: 0 0 0 var(--space-200);
  border: var(--stroke-100) solid var(--color-stroke-border);
  border-radius: var(--radius-200);
  background: var(--color-surfaces-on-container-high);
  transition: background 120ms ease, border-color 120ms ease;

  &:hover:not(:focus-within) {
    border-color: var(--color-stroke-border-high);
  }

  &:focus-within {
    background: var(--color-surfaces-container);
    border: var(--stroke-150) solid var(--color-primary-primary);
  }

  ${(e) => e.$status === "success" && `
      &, &:hover:not(:focus-within), &:focus-within {
        background: var(--color-success-success-overlay);
        border: var(--stroke-150) solid var(--color-success-success);
      }
    `}

  ${(e) => e.$status === "error" && `
      &, &:hover:not(:focus-within), &:focus-within {
        background: var(--color-error-error-overlay);
        border: var(--stroke-150) solid var(--color-error-error);
      }
    `}

  &:has(input:disabled) {
    background: var(--color-disabled-disabled);
    border-color: transparent;
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }
`, ar = o.input`
  box-sizing: content-box;
  flex: none;
  field-sizing: content;
  width: auto;
  min-width: 0;
  height: 100%;
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: ${(e) => e.$bold ? "var(--font-weight-bold)" : "var(--font-weight-regular)"};
  line-height: 1.35;
  color: var(--color-text-icon-primary);

  &::placeholder {
    color: var(--color-text-icon-placeholder);
    font-weight: var(--font-weight-regular);
  }

  &:disabled {
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;

    &::placeholder {
      color: var(--color-disabled-disabled-inverse);
    }
  }
`, cs = o.span`
  flex-shrink: 0;
  padding: 0 var(--space-050);
  color: var(--color-text-icon-primary);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-bold);
  line-height: 1.35;
`, ds = o(fe.Anchor)`
  display: inline-flex;
  flex-shrink: 0;
`, fs = o(fe.Content)`
  z-index: 1100;
  padding: 0;
  border: none;
  background: transparent;
  outline: none;
`, ps = (e) => ({
  start: or(e.start),
  end: or(e.end)
}), va = ({
  label: e,
  showLabelInfo: a,
  required: t,
  status: i,
  disabled: n,
  inputId: l,
  open: s,
  setOpen: c,
  calendar: p,
  calendarName: h,
  children: b
}) => {
  const v = f.useRef(null);
  return /* @__PURE__ */ d(ls, { children: [
    e ? /* @__PURE__ */ r(
      ae,
      {
        htmlFor: l,
        size: "sm",
        required: t,
        showInfo: a,
        disabled: n,
        children: e
      }
    ) : null,
    /* @__PURE__ */ d(fe.Root, { open: s, onOpenChange: c, modal: !0, children: [
      /* @__PURE__ */ d(ss, { $status: i, children: [
        b,
        /* @__PURE__ */ r(ds, { children: /* @__PURE__ */ r(
          j,
          {
            ref: v,
            type: "button",
            label: `Choose ${h} from calendar`,
            icon: /* @__PURE__ */ r(rt, {}),
            size: "xs",
            intent: "secondary",
            variant: "ghost",
            disabled: n,
            "aria-haspopup": "dialog",
            "aria-expanded": s,
            onClick: () => c((g) => !g)
          }
        ) })
      ] }),
      /* @__PURE__ */ r(fe.Portal, { children: /* @__PURE__ */ r(
        fs,
        {
          side: "bottom",
          align: "center",
          sideOffset: 8,
          collisionPadding: 8,
          avoidCollisions: !0,
          onPointerDownOutside: (g) => {
            var u;
            const m = g.detail.originalEvent.target;
            m && ((u = v.current) != null && u.contains(m)) && g.preventDefault();
          },
          children: p
        }
      ) })
    ] })
  ] });
}, hs = ({
  label: e,
  showLabelInfo: a,
  required: t,
  status: i,
  disabled: n,
  value: l,
  helperId: s,
  ariaLabel: c,
  onChange: p
}) => {
  const b = `${f.useId()}-input`, [v, g] = f.useState(!1), m = or(l);
  return /* @__PURE__ */ r(
    va,
    {
      label: e,
      showLabelInfo: a,
      required: t,
      status: i,
      disabled: n,
      inputId: b,
      open: v,
      setOpen: g,
      calendarName: (c ?? e) || "date",
      calendar: /* @__PURE__ */ r(
        yr,
        {
          defaultValue: m,
          onCancel: () => g(!1),
          onConfirm: (y) => {
            y instanceof Date && p(Ee(y)), g(!1);
          }
        },
        String(v)
      ),
      children: /* @__PURE__ */ r(
        ar,
        {
          id: b,
          value: l,
          disabled: n,
          required: t,
          inputMode: "numeric",
          autoComplete: "off",
          placeholder: "MM/DD/YY",
          size: 8,
          "aria-label": c ?? e,
          "aria-describedby": s,
          "aria-invalid": i === "error" || void 0,
          onChange: (y) => p(re(y.target.value)),
          onBlur: (y) => p(re(y.target.value))
        }
      )
    }
  );
}, vs = ({
  label: e,
  startLabel: a,
  endLabel: t,
  showLabelInfo: i,
  required: n,
  status: l,
  disabled: s,
  rangeValue: c,
  helperId: p,
  onChange: h,
  onRangeChange: b
}) => {
  const v = f.useId(), g = `${v}-start`, m = `${v}-end`, [u, y] = f.useState(!1), k = (w) => {
    w && !(w instanceof Date) && b({
      start: w.start ? Ee(w.start) : "",
      end: w.end ? Ee(w.end) : w.start ? Ee(w.start) : ""
    }), y(!1);
  };
  return /* @__PURE__ */ d(
    va,
    {
      label: e,
      showLabelInfo: i,
      required: n,
      status: l,
      disabled: s,
      inputId: g,
      open: u,
      setOpen: y,
      calendarName: e || "date range",
      calendar: /* @__PURE__ */ r(
        yr,
        {
          mode: "range",
          defaultRangeValue: ps(c),
          onCancel: () => y(!1),
          onConfirm: k
        },
        String(u)
      ),
      children: [
        /* @__PURE__ */ r(
          ar,
          {
            $bold: !0,
            id: g,
            value: c.start,
            disabled: s,
            required: n,
            inputMode: "numeric",
            autoComplete: "off",
            placeholder: "MM/DD/YY",
            size: 8,
            "aria-label": a,
            "aria-describedby": p,
            "aria-invalid": l === "error" || void 0,
            onChange: (w) => h("start", re(w.target.value)),
            onBlur: (w) => h("start", re(w.target.value))
          }
        ),
        /* @__PURE__ */ r(cs, { "aria-hidden": !0, children: "—" }),
        /* @__PURE__ */ r(
          ar,
          {
            $bold: !0,
            id: m,
            value: c.end,
            disabled: s,
            required: n,
            inputMode: "numeric",
            autoComplete: "off",
            placeholder: "MM/DD/YY",
            size: 8,
            "aria-label": t,
            "aria-describedby": p,
            "aria-invalid": l === "error" || void 0,
            onChange: (w) => h("end", re(w.target.value)),
            onBlur: (w) => h("end", re(w.target.value))
          }
        )
      ]
    }
  );
}, ua = f.forwardRef(
  ({
    mode: e = "single",
    label: a,
    startLabel: t = "Start date",
    endLabel: i = "End date",
    showLabelInfo: n = !1,
    required: l = !1,
    helperText: s,
    showHelper: c = !0,
    status: p = "default",
    disabled: h = !1,
    value: b,
    defaultValue: v,
    onValueChange: g,
    rangeValue: m,
    defaultRangeValue: u,
    onRangeValueChange: y,
    "aria-label": k
  }, w) => {
    const I = `${f.useId()}-helper`, [L, T] = f.useState(() => re(v ?? "")), [E, R] = f.useState(() => ({
      start: re((u == null ? void 0 : u.start) ?? ""),
      end: re((u == null ? void 0 : u.end) ?? "")
    })), O = a ?? (e === "range" ? "Select date range" : "Select date"), S = re(b ?? L), F = {
      start: re((m == null ? void 0 : m.start) ?? E.start),
      end: re((m == null ? void 0 : m.end) ?? E.end)
    };
    return /* @__PURE__ */ d(is, { ref: w, children: [
      e === "range" ? /* @__PURE__ */ r(
        vs,
        {
          label: O,
          startLabel: t,
          endLabel: i,
          showLabelInfo: n,
          required: l,
          status: p,
          disabled: h,
          rangeValue: F,
          helperId: c ? I : void 0,
          onChange: (M, P) => {
            const A = { ...F, [M]: P };
            R(A), y == null || y(A);
          },
          onRangeChange: (M) => {
            R(M), y == null || y(M);
          }
        }
      ) : /* @__PURE__ */ r(
        hs,
        {
          label: O,
          showLabelInfo: n,
          required: l,
          status: p,
          disabled: h,
          value: S,
          helperId: c ? I : void 0,
          ariaLabel: k,
          onChange: (M) => {
            T(M), g == null || g(M);
          }
        }
      ),
      c ? /* @__PURE__ */ r(V, { id: I, tone: h ? "disabled" : p === "success" ? "success" : p === "error" ? "error" : "greyscale", children: s ?? (e === "range" ? "Enter a start and end date for the range" : "Enter a date or pick from calendar") }) : null
    ] });
  }
);
ua.displayName = "DateInput";
const us = f.forwardRef(
  (e, a) => /* @__PURE__ */ r(ua, { ref: a, mode: "range", ...e })
);
us.displayName = "DateRangePicker";
const gs = 40, no = 24, bs = 36, ms = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-050);
  width: 100%;
  font-family: var(--font-family);
`, ys = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-100);
  width: 100%;
`, se = o(K.Trigger)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-100);
  width: 100%;
  height: ${gs}px;
  padding: 0 var(--space-200);
  border-radius: var(--radius-200);
  background: var(--color-surfaces-on-container-high);
  border: var(--stroke-100) solid var(--color-stroke-border);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  color: var(--color-text-icon-primary);
  cursor: pointer;
  outline: none;
  transition: background 120ms ease, border-color 120ms ease, color 120ms ease;

  &:hover:not([data-state='open']):not(:disabled) {
    border-color: var(--color-stroke-border-high);
  }

  /* Finished selecting: a chosen field keeps the greyish surface with the
     darker resting border (Figma "finish selecting"). */
  &[data-has-value='true']:not([data-state='open']) {
    border-color: var(--color-stroke-border-high);
  }

  /* Open: white surface + 1.5px primary border (Figma "clicked"). */
  &[data-state='open'] {
    background: var(--color-surfaces-container);
    border: var(--stroke-150) solid var(--color-primary-primary);
  }

  &:focus-visible {
    border: var(--stroke-150) solid var(--color-primary-primary);
  }

  &:disabled {
    background: var(--color-disabled-disabled);
    border-color: transparent;
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }

  /*
   * Windows HCT collapses on-container surfaces and stroke-border /
   * stroke-border-high to the same values, so the default hover is invisible.
   * Use the inverse surface + primary border (existing win-hct tokens) so the
   * trigger reads clearly without inventing hex.
   */
  :root[data-theme='win hct'] &:hover:not([data-state='open']):not(:disabled),
  [data-theme='win hct'] &:hover:not([data-state='open']):not(:disabled) {
    background: var(--color-surfaces-inverse-container);
    border-color: var(--color-primary-primary);
    color: var(--color-text-icon-inverse);
  }

  :root[data-theme='win hct'] &[data-state='open'],
  [data-theme='win hct'] &[data-state='open'] {
    background: var(--color-surfaces-inverse-container);
    color: var(--color-text-icon-inverse);
  }
`, xs = o(K.Value)`
  flex: 1;
  min-width: 0;
  padding: 0 var(--space-100);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  line-height: 1.35;
  color: inherit;

  /* Placeholder (no selection) stays placeholder-colored. */
  &[data-placeholder],
  ${se}:not([data-has-value='true']) & {
    color: var(--color-text-icon-placeholder);
  }

  ${se}:disabled & {
    color: var(--color-disabled-disabled-inverse);
  }

  /* HCT inverse-fill hover/open: keep label/placeholder on the trigger ink. */
  :root[data-theme='win hct'] ${se}:hover:not([data-state='open']):not(:disabled) &,
  [data-theme='win hct'] ${se}:hover:not([data-state='open']):not(:disabled) &,
  :root[data-theme='win hct'] ${se}[data-state='open'] &,
  [data-theme='win hct'] ${se}[data-state='open'] & {
    color: inherit;
  }
`, ws = o(K.Icon)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: auto;
  width: ${no}px;
  height: ${no}px;
  color: currentColor;
  transition: transform 150ms ease;

  ${se}[data-state='open'] & {
    transform: rotate(180deg);
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`, $s = o(K.Content)`
  /* Above site chrome (TopNav z-index 1000); matches Tooltip overlays. */
  z-index: 1100;
  width: var(--radix-select-trigger-width);
  max-height: var(--radix-select-content-available-height);
  background: var(--color-surfaces-container);
  border-radius: var(--radius-300);
  box-shadow: var(--elevation-3);
  overflow: hidden;

  /* HCT elevation tokens collapse to the canvas color — add a real border. */
  :root[data-theme='win hct'] &,
  [data-theme='win hct'] & {
    border: var(--stroke-100) solid var(--color-stroke-border);
    box-shadow: none;
  }
`, ks = o(K.Viewport)`
  padding: var(--space-100);
  display: flex;
  flex-direction: column;
  gap: var(--space-050);

  /* Native-overflow scrollbar shared with the Scrollbar element, so Radix
     Select's own viewport matches every other hello pc scrollbar. */
  ${Ze}
`, zs = o(K.Item)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-100);
  width: 100%;
  min-height: ${bs}px;
  padding: var(--space-100);
  border-radius: var(--radius-200);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  line-height: 1.35;
  color: var(--color-secondary-secondary);
  cursor: pointer;
  outline: none;
  user-select: none;

  /* Highlighted (pointer/keyboard) — Figma menu-item hover. */
  &[data-highlighted] {
    background: var(--color-tonal-tonal-secondary-overlay-hover);
    color: var(--color-text-icon-on-tonal-secondary);
  }

  /* Press — Figma menu-item press. */
  &:active {
    background: var(--color-tonal-tonal-secondary-overlay-press);
  }

  /* Current selection — no Figma checkmark; the value carries emphasis. */
  &[data-state='checked'] {
    color: var(--color-text-icon-on-tonal-secondary);
    font-weight: var(--font-weight-medium);
  }

  /*
   * win hct maps on-tonal-secondary → #202020 (text-on-white-overlay) while the
   * menu surface stays #202020, so a checked item with no fill becomes invisible.
   * Keep primary text at rest; highlighted still gets the solid white overlay.
   */
  :root[data-theme='win hct'] &[data-state='checked']:not([data-highlighted]),
  [data-theme='win hct'] &[data-state='checked']:not([data-highlighted]) {
    color: var(--color-text-icon-primary);
  }

  :root[data-theme='win hct'] &[data-highlighted],
  [data-theme='win hct'] &[data-highlighted] {
    background: var(--color-surfaces-inverse-container);
    color: var(--color-text-icon-inverse);
  }

  :root[data-theme='win hct'] &:active:not([data-disabled]),
  [data-theme='win hct'] &:active:not([data-disabled]) {
    background: var(--color-primary-primary);
    color: var(--color-text-icon-on-primary);
  }

  &[data-disabled] {
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
    pointer-events: none;
  }
`, Is = f.forwardRef(
  ({
    label: e,
    showLabelInfo: a = !1,
    required: t = !1,
    helperText: i,
    placeholder: n = "Select...",
    options: l = [],
    value: s,
    defaultValue: c,
    onValueChange: p,
    disabled: h = !1,
    name: b,
    id: v
  }, g) => {
    const m = f.useId(), u = v ?? m, y = `${u}-helper`, [k, w] = f.useState(c), z = s ?? k, I = z != null && z !== "", L = h ? "disabled" : "greyscale";
    return /* @__PURE__ */ d(ms, { children: [
      /* @__PURE__ */ d(ys, { children: [
        e ? /* @__PURE__ */ r(
          ae,
          {
            htmlFor: u,
            size: "sm",
            required: t,
            showInfo: a,
            disabled: h,
            children: e
          }
        ) : null,
        /* @__PURE__ */ d(
          K.Root,
          {
            value: s,
            defaultValue: c,
            onValueChange: (T) => {
              w(T), p == null || p(T);
            },
            disabled: h,
            required: t,
            name: b,
            children: [
              /* @__PURE__ */ d(
                se,
                {
                  ref: g,
                  id: u,
                  "data-has-value": I,
                  "aria-describedby": i != null ? y : void 0,
                  children: [
                    /* @__PURE__ */ r(xs, { placeholder: n }),
                    /* @__PURE__ */ r(ws, { children: /* @__PURE__ */ r(Ce, {}) })
                  ]
                }
              ),
              /* @__PURE__ */ r(K.Portal, { children: /* @__PURE__ */ r($s, { position: "popper", sideOffset: 4, children: /* @__PURE__ */ r(ks, { children: l.map((T) => /* @__PURE__ */ r(zs, { value: T.value, disabled: T.disabled, children: /* @__PURE__ */ r(K.ItemText, { children: T.label }) }, T.value)) }) }) })
            ]
          }
        )
      ] }),
      i != null ? /* @__PURE__ */ r(V, { id: y, tone: L, children: i }) : null
    ] });
  }
);
Is.displayName = "Dropdown";
const Ss = 480, io = 48, xe = 24, Rs = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-100);
  width: 100%;
  max-width: ${Ss}px;
  font-family: var(--font-family);
`, Ts = o.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-300);
  width: 100%;
  min-height: 236px;
  padding: var(--space-800) var(--space-300);
  border: var(--stroke-100) solid var(--color-stroke-border);
  border-radius: var(--radius-300);
  background: transparent;
  text-align: center;
  transition: background 120ms ease, border-color 120ms ease;

  ${(e) => e.$hovered && !e.$dragging && !e.$loading && $`
      background: var(--color-tonal-tonal-lightest);
    `}

  ${(e) => (e.$dragging || e.$loading) && $`
      background: var(--color-tonal-tonal-overlay);
    `}

  ${(e) => e.$dragging && $`
      border: var(--stroke-200) dashed var(--color-text-icon-on-tonal);
    `}

  ${(e) => e.$loading && $`
      border: var(--stroke-200) solid var(--color-text-icon-on-tonal);
    `}

  ${(e) => e.$disabled && $`
      background: var(--color-disabled-disabled);
      border-color: var(--color-disabled-disabled-inverse);
      color: var(--color-disabled-disabled-inverse);
      cursor: not-allowed;
    `}

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: var(--space-025);
  }
`, Cs = o.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${io}px;
  height: ${io}px;
  overflow: hidden;
  border-radius: var(--radius-200);
  background: ${(e) => e.$disabled ? "var(--color-surfaces-on-container-low)" : "var(--color-tonal-tonal)"};
  color: ${(e) => e.$disabled ? "var(--color-disabled-disabled-inverse)" : "var(--color-text-icon-on-tonal)"};

  & > svg {
    width: ${xe}px;
    height: ${xe}px;
  }
`, Ls = o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Os = o.p`
  margin: 0;
  font-family: var(--font-family);
  font-size: var(--type-size-helper);
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  color: ${(e) => e.$disabled ? "var(--color-disabled-disabled-inverse)" : "var(--color-text-icon-secondary)"};
`, Hs = o(ot)`
  width: ${xe}px;
  height: ${xe}px;
  color: var(--color-text-icon-on-tonal);
  animation: file-upload-spin 900ms linear infinite;

  @keyframes file-upload-spin {
    to {
      transform: rotate(360deg);
    }
  }
`, Fs = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-300);
`, Es = o.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: var(--radius-1000);
  background: transparent;
  color: var(--color-primary-primary);
  cursor: pointer;

  &:hover:not(:disabled) {
    background: var(--color-primary-primary-overlay);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible::after {
    position: absolute;
    inset: calc(var(--space-025) * -1);
    border: var(--stroke-200) solid var(--color-primary-primary);
    border-radius: var(--radius-1000);
    content: '';
    pointer-events: none;
  }

  &:disabled {
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }

  & > svg {
    width: ${xe}px;
    height: ${xe}px;
  }
`, Ds = o.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-025);
  height: 24px;
  padding: 0 var(--space-200);
  border-radius: var(--radius-1000);
  background: var(--color-warning-warn-overlay);
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-caption);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
`, Ps = o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: var(--color-warning-warn);

  &::before {
    content: '!';
    font-size: var(--type-size-caption);
    font-weight: var(--font-weight-bold);
  }
`, Ns = o.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
`, Ms = ".bmp,.gif,.ico,.jpg,.jpeg,.png", lo = (e) => `${Math.round(e / (1024 * 1024))} MB`, _s = (e, a) => {
  var n;
  const t = a.split(",").map((l) => l.trim().toLowerCase()).filter(Boolean);
  if (t.length === 0) return !0;
  const i = `.${((n = e.name.split(".").pop()) == null ? void 0 : n.toLowerCase()) ?? ""}`;
  return t.some((l) => l.startsWith(".") ? i === l : l.endsWith("/*") ? e.type.startsWith(l.slice(0, -1)) : e.type === l);
}, As = f.forwardRef(
  ({
    file: e,
    defaultFile: a = null,
    onFileChange: t,
    onRemove: i,
    onError: n,
    status: l,
    loading: s = !1,
    disabled: c = !1,
    accept: p = Ms,
    maxSize: h = 5 * 1024 * 1024,
    restrictions: b,
    prompt: v = "Drag and drop file here to upload.",
    uploadLabel: g = "Upload Image",
    updateLabel: m = "Update Image",
    errorMessage: u,
    previewUrl: y,
    "aria-label": k = "Image upload"
  }, w) => {
    const z = f.useRef(null), [I, L] = f.useState(a), [T, E] = f.useState(!1), [R, O] = f.useState(!1), [S, F] = f.useState(), N = e ?? I, _ = u ?? S, G = l ?? (s ? "loading" : _ ? "error" : N ? "uploaded" : "default"), C = G === "loading", D = c || C, M = G === "uploaded", P = G === "error", A = b ?? `Extensions: ${p.replaceAll(",", ", ")} | Max size: ${lo(h)} | File Size: 32×32 px`, Y = c ? "disabled" : P ? "warning" : "greyscale", ee = () => {
      var x;
      D || (x = z.current) == null || x.click();
    }, ne = (x) => {
      if (!x || D) return;
      let B;
      if (_s(x, p) ? x.size > h && (B = `File exceeds the ${lo(h)} limit`) : B = "File type is not supported", B) {
        F(B), n == null || n(B, x);
        return;
      }
      F(void 0), L(x), t == null || t(x);
    }, ie = () => {
      D || (L(null), F(void 0), z.current && (z.current.value = ""), i == null || i());
    };
    return /* @__PURE__ */ d(Rs, { ref: w, children: [
      /* @__PURE__ */ d(
        Ts,
        {
          $dragging: T && !D,
          $hovered: R && !D,
          $loading: C,
          $disabled: c,
          role: "group",
          "aria-label": k,
          "aria-busy": C || void 0,
          "aria-invalid": P || void 0,
          onMouseEnter: () => O(!0),
          onMouseLeave: () => O(!1),
          onDragEnter: (x) => {
            x.preventDefault(), D || E(!0);
          },
          onDragOver: (x) => x.preventDefault(),
          onDragLeave: (x) => {
            x.preventDefault(), x.currentTarget === x.target && E(!1);
          },
          onDrop: (x) => {
            x.preventDefault(), E(!1), ne(x.dataTransfer.files[0]);
          },
          children: [
            /* @__PURE__ */ r(
              Ns,
              {
                ref: z,
                type: "file",
                accept: p,
                disabled: D,
                tabIndex: -1,
                "aria-label": `${k} file picker`,
                onChange: (x) => {
                  var B;
                  return ne((B = x.target.files) == null ? void 0 : B[0]);
                }
              }
            ),
            C ? /* @__PURE__ */ r(Hs, { "aria-label": "Uploading" }) : /* @__PURE__ */ r(Cs, { $disabled: c, children: M && y ? /* @__PURE__ */ r(Ls, { src: y, alt: "" }) : /* @__PURE__ */ r(Ao, { "aria-hidden": !0 }) }),
            /* @__PURE__ */ r(Os, { $disabled: c, children: v }),
            M ? /* @__PURE__ */ d(Fs, { children: [
              /* @__PURE__ */ r(
                Z,
                {
                  size: "md",
                  intent: "primary",
                  variant: "fill",
                  startIcon: /* @__PURE__ */ r(Ir, {}),
                  disabled: D,
                  onClick: (x) => {
                    x.stopPropagation(), ee();
                  },
                  children: m
                }
              ),
              /* @__PURE__ */ r(
                Es,
                {
                  type: "button",
                  disabled: D,
                  "aria-label": `Remove ${(N == null ? void 0 : N.name) ?? "file"}`,
                  onClick: (x) => {
                    x.stopPropagation(), ie();
                  },
                  children: /* @__PURE__ */ r(at, { "aria-hidden": !0 })
                }
              )
            ] }) : /* @__PURE__ */ r(
              Z,
              {
                size: "md",
                intent: "primary",
                variant: "fill",
                startIcon: /* @__PURE__ */ r(Ir, {}),
                disabled: D,
                onClick: (x) => {
                  x.stopPropagation(), ee();
                },
                children: g
              }
            ),
            P ? /* @__PURE__ */ d(Ds, { role: "status", children: [
              /* @__PURE__ */ r(Ps, { "aria-hidden": !0 }),
              _ ?? "File type is not supported"
            ] }) : null
          ]
        }
      ),
      /* @__PURE__ */ r(V, { tone: Y, showIcon: !1, children: A })
    ] });
  }
);
As.displayName = "FileUpload";
const Bs = o(q.Root)`
  display: flex;
  flex-direction: column;
  gap: var(--space-300);
  font-family: var(--font-family);
  min-width: 0;
`, js = o.div`
  display: flex;
  align-items: center;
  min-width: 0;
`, Gs = o.div`
  flex: 1 1 auto;
  min-width: 0;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`, Ws = o(q.List)`
  display: inline-flex;
  align-items: center;
  min-width: max-content;
`, Ys = o(q.Content)`
  min-width: 0;
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  color: var(--color-text-icon-primary);

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: var(--space-025);
  }
`, Us = f.forwardRef(
  (e, a) => /* @__PURE__ */ r(Bs, { ref: a, ...e, orientation: "horizontal" })
);
Us.displayName = "HorizontalTabs";
const Zs = f.forwardRef(
  ({
    children: e,
    scrollButtons: a = "auto",
    prevLabel: t = "Scroll tabs left",
    nextLabel: i = "Scroll tabs right",
    ...n
  }, l) => {
    const s = f.useRef(null), [c, p] = f.useState(!1), [h, b] = f.useState(!1), [v, g] = f.useState(!1), m = f.useCallback(() => {
      const k = s.current;
      if (!k) return;
      const w = k.scrollWidth - k.clientWidth;
      p(w > 1), b(k.scrollLeft > 1), g(k.scrollLeft < w - 1);
    }, []);
    f.useEffect(() => {
      const k = s.current;
      if (!k) return;
      m(), k.addEventListener("scroll", m, { passive: !0 });
      const w = new ResizeObserver(m);
      return w.observe(k), k.firstElementChild && w.observe(k.firstElementChild), () => {
        k.removeEventListener("scroll", m), w.disconnect();
      };
    }, [m]);
    const u = (k) => {
      const w = s.current;
      w && w.scrollBy({ left: k * w.clientWidth * 0.75, behavior: "smooth" });
    }, y = a === "always" || a === "auto" && c;
    return /* @__PURE__ */ d(js, { children: [
      y ? /* @__PURE__ */ r(
        j,
        {
          label: t,
          icon: /* @__PURE__ */ r(ur, {}),
          size: "md",
          intent: "secondary",
          variant: "ghost",
          disabled: !h,
          onClick: () => u(-1)
        }
      ) : null,
      /* @__PURE__ */ r(Gs, { ref: s, children: /* @__PURE__ */ r(Ws, { ref: l, ...n, children: e }) }),
      y ? /* @__PURE__ */ r(
        j,
        {
          label: i,
          icon: /* @__PURE__ */ r(Ye, {}),
          size: "md",
          intent: "secondary",
          variant: "ghost",
          disabled: !v,
          onClick: () => u(1)
        }
      ) : null
    ] });
  }
);
Zs.displayName = "HorizontalTabsList";
const Ks = f.forwardRef((e, a) => /* @__PURE__ */ r(Ys, { ref: a, ...e }));
Ks.displayName = "HorizontalTabsContent";
const Xs = 48, ga = 4, ba = o.span`
  flex: 1 1 0%;
  height: ${ga}px;
  border-radius: var(--radius-1000);
  background: transparent;
  transition: background 120ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`, Js = o.span`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: ${ga}px;
  padding: 0 var(--space-300);
`, qs = o.span`
  display: flex;
  flex: 1 1 0%;
  align-items: center;
  justify-content: center;
  gap: var(--space-300);
  min-height: 0;
  padding: var(--space-150) var(--space-200) var(--space-100);
  white-space: nowrap;
`, Qs = o.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 var(--space-100);
`, Vs = o(q.Trigger)`
  box-sizing: border-box;
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  height: ${Xs}px;
  padding: 0;
  border: none;
  appearance: none;
  border-radius: var(--radius-300);
  background: transparent;
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.1px;
  line-height: 1.35;
  cursor: pointer;
  overflow: hidden;
  transition: background 120ms ease;

  /* Not selected. */
  &:hover:not(:disabled) {
    background: var(--color-tonal-tonal-secondary-overlay-hover);
  }
  &:active:not(:disabled) {
    background: var(--color-tonal-tonal-secondary-overlay-press);
  }

  /* Selected — Radix owns data-state, so selection is never tracked here. */
  &[data-state='active'] {
    background: var(--color-tonal-tonal-overlay);
    color: var(--color-text-icon-on-tonal);
    font-weight: var(--font-weight-bold);
  }
  &[data-state='active']:hover:not(:disabled) {
    background: var(--color-tonal-tonal-overlay-hover);
  }
  &[data-state='active']:active:not(:disabled) {
    background: var(--color-tonal-tonal-overlay-press);
  }
  &[data-state='active']:not(:disabled) ${ba} {
    background: var(--color-primary-primary);
  }

  /* Disabled wins over the selected treatment: Figma drops both the fill and
     the underline, and returns the label to medium weight. */
  &:disabled {
    cursor: not-allowed;
    background: transparent;
    color: var(--color-disabled-disabled-inverse);
    font-weight: var(--font-weight-medium);
  }

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: calc(-1 * var(--stroke-200));
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`, ec = f.forwardRef(
  ({ children: e, ...a }, t) => /* @__PURE__ */ r(Vs, { ref: t, ...a, children: /* @__PURE__ */ d(Qs, { children: [
    /* @__PURE__ */ r(qs, { children: e }),
    /* @__PURE__ */ r(Js, { children: /* @__PURE__ */ r(ba, {}) })
  ] }) })
);
ec.displayName = "HorizontalTabItem";
const me = 24, so = "M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM13 7V9H11V7H13ZM13 17V10H11V17H13Z", rc = {
  info: /* @__PURE__ */ r("path", { fillRule: "evenodd", clipRule: "evenodd", d: so, fill: "currentColor" }),
  neutral: /* @__PURE__ */ r("path", { fillRule: "evenodd", clipRule: "evenodd", d: so, fill: "currentColor" }),
  success: /* @__PURE__ */ r(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.2459 7.91486L10.8425 13.3183L8.02138 10.4972L6.60716 11.9114L10.1354 15.4396C10.5259 15.8301 11.1591 15.8301 11.5496 15.4396L17.6601 9.32907L16.2459 7.91486Z",
      fill: "currentColor"
    }
  ),
  warning: /* @__PURE__ */ r(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.9577 1.42086C13.2948 1.60476 13.5719 1.88182 13.7558 2.21895L22.3867 18.0423C22.9156 19.012 22.5583 20.2269 21.5886 20.7558C21.2948 20.916 20.9656 21 20.6309 21H3.36908C2.26451 21 1.36908 20.1046 1.36908 19C1.36908 18.6654 1.45305 18.3361 1.61329 18.0423L10.2442 2.21895C10.7731 1.24925 11.988 0.891939 12.9577 1.42086ZM11 14V8H13V14H11ZM11 17V15H13V17H11Z",
      fill: "currentColor"
    }
  ),
  error: /* @__PURE__ */ r(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM11 17V15H13V17H11ZM11 7L11 14H13L13 7H11Z",
      fill: "currentColor"
    }
  ),
  icon: /* @__PURE__ */ r(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.8 11.0221L7.0188 2.52209L2.23755 11.0221H11.8ZM5.65655 9.02209L7.01855 6.60109L8.38055 9.02209H5.65655ZM6.99411 12.75C9.34132 12.75 11.2441 14.6528 11.2441 17C11.2441 19.3472 9.34132 21.25 6.99411 21.25C4.6469 21.25 2.74412 19.3472 2.74412 17C2.74412 14.6528 4.6469 12.75 6.99411 12.75ZM6.99411 14.75C5.75147 14.75 4.74412 15.7574 4.74412 17C4.74412 18.2427 5.75147 19.25 6.99411 19.25C8.23676 19.25 9.24411 18.2427 9.24411 17C9.24411 15.7574 8.23676 14.75 6.99411 14.75ZM20.7423 13.2527V20.7527H13.2423V13.2527H20.7423ZM18.7423 15.2527H15.2423V18.7527H18.7423V15.2527ZM18.9392 3.56384C20.3264 3.56384 21.4611 4.61841 21.5463 5.95038L21.5514 6.1115C21.5514 6.1538 21.5504 6.19586 21.5483 6.23766L21.5506 6.27997L21.5514 6.3238C21.5514 8.01045 20.1544 9.68353 17.3603 11.343C17.13 11.4836 16.8416 11.4842 16.6088 11.3478C13.9086 9.74635 12.5104 8.13187 12.4139 6.50466L12.4086 6.3238C12.4086 6.29436 12.4097 6.26566 12.412 6.2377C12.4096 6.19615 12.4086 6.15394 12.4086 6.1115C12.4086 4.70446 13.5781 3.56384 15.0208 3.56384C15.5435 3.56384 16.0303 3.71355 16.4387 3.97142L16.6219 4.09298L16.8495 4.25441C16.8911 4.28464 16.9346 4.31652 16.98 4.35007L17.3292 4.09946L17.5076 3.98011C17.9188 3.71692 18.4106 3.56384 18.9392 3.56384ZM18.9392 5.56384C18.8077 5.56384 18.6878 5.59931 18.5859 5.66454L18.4953 5.72438L16.9621 6.82459L15.6288 5.8397C15.5818 5.80577 15.5429 5.77817 15.516 5.7594L15.3708 5.66248C15.2696 5.59855 15.151 5.56384 15.0208 5.56384C14.7065 5.56384 14.462 5.77165 14.4163 6.02543L14.4087 6.12354L14.4167 6.26215L14.4086 6.34884L14.4104 6.38635C14.4526 7.09779 15.2194 8.06265 16.8867 9.16408L16.9796 9.22384L17.067 9.16847C18.7233 8.07572 19.4841 7.13108 19.5475 6.45226L19.5518 6.36136L19.5504 6.07809C19.5327 5.8018 19.2739 5.56384 18.9392 5.56384Z",
      fill: "currentColor"
    }
  )
}, oc = {
  icon: "var(--color-text-icon-primary)",
  info: "var(--color-info-info)",
  success: "var(--color-success-success)",
  warning: "var(--color-warning-warn)",
  error: "var(--color-error-error)",
  neutral: "var(--color-text-icon-primary)"
}, ac = {
  icon: "Dialog icon",
  info: "Information",
  success: "Success",
  warning: "Warning",
  error: "Error",
  neutral: "Notice"
}, tc = o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: calc(${me}px + var(--space-100));
  height: calc(${me}px + var(--space-100));
  padding: var(--space-050);
  color: ${(e) => oc[e.$type]};

  & > svg {
    width: ${me}px;
    height: ${me}px;
    display: block;
  }
`, Je = f.forwardRef(
  ({
    type: e = "icon",
    icon: a,
    label: t = ac[e],
    decorative: i = !1,
    ...n
  }, l) => {
    const s = e === "icon" && a ? a : /* @__PURE__ */ r("svg", { viewBox: `0 0 ${me} ${me}`, fill: "none", "aria-hidden": !0, focusable: "false", children: rc[e] }), c = /* @__PURE__ */ r(tc, { ref: l, $type: e, "aria-hidden": i || void 0, ...n, children: s });
    return i ? c : /* @__PURE__ */ r(je.Root, { label: t, children: c });
  }
);
Je.displayName = "ModalIcon";
const Me = 40, nc = o.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: var(--space-300) var(--space-500);
  background: var(--color-surfaces-container);
`, ic = o.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  min-width: 0;
  min-height: ${Me}px;
  padding-right: var(--space-100);
`, lc = o.div`
  display: flex;
  flex: 1;
  align-self: stretch;
  align-items: center;
  min-width: 0;
  gap: var(--space-100);
`, sc = o.span`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  flex: none;
  width: ${Me}px;
  height: ${Me}px;
  padding-top: var(--space-050);
`, cc = o(Je)`
  margin-left: calc(-1 * var(--space-050));
`, dc = o.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  min-height: ${Me}px;
  padding-top: var(--space-050);
`, fc = o(ge.Title)`
  width: 100%;
  margin: 0;
  overflow: hidden;
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-subtitle);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
  text-overflow: ellipsis;
  white-space: nowrap;
`, pc = o(ge.Description)`
  width: 100%;
  margin: 0;
  overflow: hidden;
  color: var(--color-text-icon-secondary);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.2px;
  line-height: 1.35;
  text-overflow: ellipsis;
  white-space: nowrap;
`, hc = o(j)`
  flex: none;
  /* The close glyph is centered in the 40px control (8px inset) and the lucide
     "X" itself is drawn further inside its own box than a typical filled glyph.
     Offset the control so the X's *visible* edge lands ~24px from the modal
     edge, matching the leading icon's visible edge and the content inset. */
  margin-right: calc(-1 * (var(--space-100) + var(--space-050)));
`, ma = f.forwardRef(
  ({
    title: e,
    subtitle: a,
    modalIcon: t,
    modalIconSlot: i,
    onClose: n,
    closeLabel: l = "Close dialog",
    ...s
  }, c) => /* @__PURE__ */ d(nc, { ref: c, ...s, children: [
    /* @__PURE__ */ r(ic, { children: /* @__PURE__ */ d(lc, { children: [
      t ? /* @__PURE__ */ r(sc, { children: /* @__PURE__ */ r(cc, { type: t, icon: i, decorative: !0 }) }) : null,
      /* @__PURE__ */ d(dc, { children: [
        /* @__PURE__ */ r(fc, { children: e }),
        a ? /* @__PURE__ */ r(pc, { children: a }) : null
      ] })
    ] }) }),
    n ? /* @__PURE__ */ r(
      hc,
      {
        label: l,
        icon: /* @__PURE__ */ r(pe, {}),
        size: "md",
        intent: "secondary",
        variant: "ghost",
        onClick: n
      }
    ) : null
  ] })
);
ma.displayName = "ModalTitle";
const vc = o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-100);
  box-sizing: border-box;
  width: 100%;
  padding: var(--space-300) var(--space-500);
  background: var(--color-surfaces-container);
`, uc = o.h2`
  width: 100%;
  margin: 0;
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-subtitle);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
`, gc = o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-300);
  width: 100%;
`, bc = o(ge.Description)`
  width: 100%;
  margin: 0;
  color: var(--color-text-icon-secondary);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.2px;
  line-height: 1.35;
`, mc = f.forwardRef(
  ({ subtitle: e, description: a, children: t, descriptionAsDialogDescription: i = !0, ...n }, l) => /* @__PURE__ */ d(vc, { ref: l, ...n, children: [
    e ? /* @__PURE__ */ r(uc, { children: e }) : null,
    a || t ? /* @__PURE__ */ d(gc, { children: [
      a ? /* @__PURE__ */ r(bc, { as: i ? void 0 : "p", children: a }) : null,
      t
    ] }) : null
  ] })
);
mc.displayName = "ModalContent";
const yc = o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-300);
  width: 100%;
  padding: var(--space-300) var(--space-500);
  background: var(--color-surfaces-container);
`, xc = o.div`
  display: flex;
  flex: none;
  align-items: center;
`, wc = o.label`
  display: inline-flex;
  align-items: center;
  gap: var(--space-100);
  color: var(--color-text-icon-secondary);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.1px;
  line-height: 1.35;
  /* The acknowledgement label must stay on a single line (Figma 97:5766). */
  white-space: nowrap;
  cursor: pointer;

  &:has([data-disabled]) {
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }
`, $c = o.div`
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-300);
`, kc = f.forwardRef(
  ({
    checkbox: e,
    actions: a,
    checkboxLabel: t = "Don’t remind me again",
    checkboxChecked: i,
    defaultCheckboxChecked: n = !1,
    onCheckboxCheckedChange: l,
    checkboxDisabled: s = !1,
    secondaryActionLabel: c = "Secondary",
    onSecondaryAction: p,
    secondaryActionDisabled: h = !1,
    primaryActionLabel: b = "Primary",
    onPrimaryAction: v,
    primaryActionDisabled: g = !1,
    ...m
  }, u) => {
    const y = f.useId();
    return /* @__PURE__ */ d(yc, { ref: u, ...m, children: [
      /* @__PURE__ */ r(xc, { children: e ?? /* @__PURE__ */ d(wc, { htmlFor: y, children: [
        /* @__PURE__ */ r(
          He,
          {
            id: y,
            checked: i,
            defaultChecked: n,
            onCheckedChange: l,
            disabled: s
          }
        ),
        /* @__PURE__ */ r("span", { children: t })
      ] }) }),
      /* @__PURE__ */ r($c, { children: a ?? /* @__PURE__ */ d(J, { children: [
        /* @__PURE__ */ r(
          Z,
          {
            size: "sm",
            intent: "secondary",
            variant: "ghost",
            onClick: p,
            disabled: h,
            children: c
          }
        ),
        /* @__PURE__ */ r(Z, { size: "sm", onClick: v, disabled: g, children: b })
      ] }) })
    ] });
  }
);
kc.displayName = "ModalFooter";
const zc = 448, Ic = 480, Sc = 640, Rc = he`
  from { opacity: 0; }
  to { opacity: 1; }
`, Tc = he`
  from { opacity: 0; transform: translate(-50%, -48%) scale(0.98); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`, Cc = o(ge.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: var(--color-overlay-scrim);
  /* Figma's overlay scrim blur effect. Fixed 12px in both themes — only the
     scrim color token switches (a white-tinted veil in light, black-tinted in
     dark). Intrinsic geometry, not a tokenized value. */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  animation: ${Rc} 160ms ease;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`, Lc = o(ge.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  width: ${Ic}px;
  min-width: ${zc}px;
  max-width: min(${Sc}px, calc(100vw - var(--space-500) * 2));
  max-height: calc(100vh - var(--space-800));
  overflow: hidden auto;
  /* Native-overflow scrollbar shared with the Scrollbar element — Dialog.Content
     is itself the scroll container (Radix owns it for focus trapping and
     dismiss), so it can't host a ScrollArea; this keeps a tall modal's
     scrollbar identical to every other hello pc scrollbar. */
  ${Ze}
  transform: translate(-50%, -50%);
  border-radius: var(--radius-400);
  background: var(--color-surfaces-container);
  /* Figma elevation/5 — the top of the scale, for surfaces with a scrim. */
  box-shadow: var(--elevation-5);
  animation: ${Tc} 180ms ease;

  &:focus {
    outline: none;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`, Oc = o.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-100);
  width: 100%;
`, Hc = o.div`
  display: flex;
  width: 100%;
`, Fc = f.forwardRef(
  ({
    open: e,
    defaultOpen: a = !1,
    onOpenChange: t,
    title: i,
    subtitle: n,
    modalIcon: l,
    modalIconSlot: s,
    closeLabel: c,
    showClose: p = !0,
    children: h,
    footer: b
  }, v) => {
    const g = e !== void 0, [m, u] = f.useState(a), y = g ? e : m, k = f.useCallback(
      (w) => {
        g || u(w), t == null || t(w);
      },
      [g, t]
    );
    return /* @__PURE__ */ r(ge.Root, { open: y, onOpenChange: k, children: /* @__PURE__ */ d(ge.Portal, { children: [
      /* @__PURE__ */ r(Cc, {}),
      /* @__PURE__ */ d(Lc, { ref: v, children: [
        /* @__PURE__ */ r(
          ma,
          {
            title: i,
            subtitle: n,
            modalIcon: l,
            modalIconSlot: s,
            closeLabel: c,
            onClose: p ? () => k(!1) : void 0
          }
        ),
        h ? /* @__PURE__ */ r(Oc, { children: h }) : null,
        b ? /* @__PURE__ */ r(Hc, { children: b }) : null
      ] })
    ] }) });
  }
);
Fc.displayName = "Modal";
const Ec = {
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
  neutral: "neutral"
}, Dc = o.article`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* Figma draws the card at 400px, but the description truncates awkwardly at
     that width; widen the ceiling to 480px (matching the Toast-complex
     sibling) so a normal message fits without cramping. The card still fills
     whatever narrower width its container gives it. */
  max-width: 480px;
  background: var(--color-surfaces-on-container-high);

  /* Standalone (default): rounded corners + the Figma "elevation/0" resting
     drop shadow (0 1px 2px light + 0 0 4px heavy) so the card lifts off the
     page. flush drops both so the card tiles inside a list/panel that owns
     the rounding, clipping, and dividers (see NotificationPanel). */
  min-width: 0;

  ${(e) => e.$flush ? "" : `
    border-radius: var(--radius-400);
    box-shadow: var(--elevation-0);
  `}
`, Pc = o.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--space-300);
  width: 100%;
  min-width: 0;
  padding: var(--space-300);
`, Nc = o.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: var(--space-600);
  width: 100%;
  min-width: 0;
`, Mc = o.div`
  display: flex;
  flex: 1 1 0%;
  align-items: flex-start;
  gap: var(--space-300);
  min-width: 0;
`, _c = o(Je)`
  margin: calc(-1 * var(--space-050));
`, Ac = o.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  gap: var(--space-075);
  min-width: 0;
`, Bc = o.p`
  margin: 0;
  width: 100%;
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
`, jc = o.p`
  margin: 0;
  width: 100%;
  color: var(--color-text-icon-secondary);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.2px;
  line-height: 1.35;
`, Gc = o.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-300);
  width: 100%;
  min-width: 0;
  /* Indent past the 24px icon + 16px gap so the metadata + actions align
     under the text column, not the icon. */
  padding-left: var(--space-700);
`, Wc = o.span`
  display: inline-flex;
  flex: 1 1 0%;
  align-items: center;
  gap: var(--space-050);
  min-width: 0;
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  line-height: 1.35;
`, Yc = o.span`
  color: var(--color-error-error);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.1px;
  white-space: nowrap;
`, Uc = o.span`
  color: var(--color-text-icon-secondary);
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.2px;
  white-space: nowrap;
`, Zc = o.span`
  color: var(--color-text-icon-secondary);
`, Kc = o.div`
  display: flex;
  flex: none;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-100);
  min-width: 0;
`, Xc = f.forwardRef(
  ({
    status: e = "info",
    title: a,
    description: t,
    timestamp: i,
    unread: n = !1,
    icon: l,
    actions: s,
    secondaryActionLabel: c,
    onSecondaryAction: p,
    secondaryActionDisabled: h = !1,
    primaryActionLabel: b,
    onPrimaryAction: v,
    primaryActionDisabled: g = !1,
    onDismiss: m,
    dismissLabel: u = "Dismiss notification",
    flush: y = !1,
    ...k
  }, w) => {
    const z = f.useId(), I = `${z}-title`, L = `${z}-desc`, T = s !== void 0 || !!c || !!b, E = !!i || n || T, R = l === null ? null : l ?? /* @__PURE__ */ r(_c, { type: Ec[e], decorative: !0 });
    return /* @__PURE__ */ r(
      Dc,
      {
        ref: w,
        $flush: y,
        "aria-labelledby": a ? I : void 0,
        "aria-describedby": t ? L : void 0,
        ...k,
        children: /* @__PURE__ */ d(Pc, { children: [
          /* @__PURE__ */ d(Nc, { children: [
            /* @__PURE__ */ d(Mc, { children: [
              R,
              a || t ? /* @__PURE__ */ d(Ac, { children: [
                a ? /* @__PURE__ */ r(Bc, { id: I, children: a }) : null,
                t ? /* @__PURE__ */ r(jc, { id: L, children: t }) : null
              ] }) : null
            ] }),
            m ? /* @__PURE__ */ r(
              j,
              {
                label: u,
                icon: /* @__PURE__ */ r(pe, {}),
                size: "sm",
                intent: "secondary",
                variant: "ghost",
                onClick: m
              }
            ) : null
          ] }),
          E ? /* @__PURE__ */ d(Gc, { children: [
            /* @__PURE__ */ d(Wc, { children: [
              n ? /* @__PURE__ */ r(Yc, { children: "New" }) : null,
              n && i ? /* @__PURE__ */ r(Zc, { "aria-hidden": !0, children: "•" }) : null,
              i ? /* @__PURE__ */ r(Uc, { children: i }) : null
            ] }),
            T ? /* @__PURE__ */ r(Kc, { children: s ?? /* @__PURE__ */ d(J, { children: [
              c ? /* @__PURE__ */ r(
                Z,
                {
                  size: "sm",
                  intent: "secondary",
                  variant: "ghost",
                  onClick: p,
                  disabled: h,
                  children: c
                }
              ) : null,
              b ? /* @__PURE__ */ r(Z, { size: "sm", onClick: v, disabled: g, children: b }) : null
            ] }) }) : null
          ] }) : null
        ] })
      }
    );
  }
);
Xc.displayName = "Notification";
const Jc = o.section`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 432px;
  border-radius: var(--radius-400);
  overflow: hidden;
  background: var(--color-surfaces-container-blur);
  backdrop-filter: blur(45px);
  -webkit-backdrop-filter: blur(45px);
  /* Figma "win.htc.border": transparent in light/dark, repainted by
     forced-colors so the blurred surface keeps an edge. */
  border: var(--stroke-100) solid var(--color-stroke-border-container);
  /* pop-out elevation (Figma elevation/3, same as Toast pop-out). */
  box-shadow: var(--elevation-3);
`, qc = o.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--space-500);
  width: 100%;
  min-width: 0;
  min-height: 0;
  padding: var(--space-300);
`, Qc = o.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-100);
  width: 100%;
  min-width: 0;
`, Vc = o.h2`
  flex: 1 1 0%;
  min-width: 0;
  margin: 0;
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
`, ed = o.div`
  display: flex;
  flex: none;
  align-items: center;
  gap: var(--space-100);
`, rd = o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: var(--radius-400);
  border: var(--stroke-100) solid var(--color-stroke-border-low);

  & > * + * {
    border-top: var(--stroke-100) solid var(--color-stroke-border-low);
  }
`, co = o.div`
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: var(--space-300);
  width: 100%;
  min-width: 0;
  padding: var(--space-300) var(--space-600);
  background: var(--color-primary-primary-overlay);
  border-bottom-left-radius: var(--radius-400);
  border-bottom-right-radius: var(--radius-400);
`, od = o.span`
  flex: 1 1 0%;
  min-width: 0;
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.2px;
  line-height: 1.35;
`, ad = o.div`
  display: flex;
  flex: none;
  align-items: center;
  gap: var(--space-300);
`, td = (e) => typeof e == "object" && e !== null && "message" in e, nd = f.forwardRef(
  ({
    title: e = "Notifications",
    onSettings: a,
    settingsLabel: t = "Notification settings",
    onClose: i,
    closeLabel: n = "Close notifications",
    headerActions: l,
    children: s,
    footer: c,
    ...p
  }, h) => {
    const b = f.useId(), v = /* @__PURE__ */ d(J, { children: [
      a ? /* @__PURE__ */ r(
        j,
        {
          label: t,
          icon: /* @__PURE__ */ r(tt, {}),
          size: "sm",
          intent: "secondary",
          variant: "ghost",
          onClick: a
        }
      ) : null,
      i ? /* @__PURE__ */ r(
        j,
        {
          label: n,
          icon: /* @__PURE__ */ r(pe, {}),
          size: "sm",
          intent: "secondary",
          variant: "ghost",
          onClick: i
        }
      ) : null
    ] }), g = td(c) ? /* @__PURE__ */ d(co, { role: "status", children: [
      /* @__PURE__ */ r(od, { children: c.message }),
      /* @__PURE__ */ d(ad, { children: [
        c.actionLabel ? /* @__PURE__ */ r(Z, { size: "xs", intent: "primary", variant: "ghost", onClick: c.onAction, children: c.actionLabel }) : null,
        c.onDismiss ? /* @__PURE__ */ r(
          j,
          {
            label: c.dismissLabel ?? "Dismiss alert",
            icon: /* @__PURE__ */ r(pe, {}),
            size: "sm",
            intent: "secondary",
            variant: "ghost",
            onClick: c.onDismiss
          }
        ) : null
      ] })
    ] }) : c ? /* @__PURE__ */ r(co, { role: "status", children: c }) : null;
    return /* @__PURE__ */ d(Jc, { ref: h, "aria-labelledby": e ? b : void 0, ...p, children: [
      /* @__PURE__ */ d(qc, { children: [
        /* @__PURE__ */ d(Qc, { children: [
          e ? /* @__PURE__ */ r(Vc, { id: b, children: e }) : /* @__PURE__ */ r("span", { style: { flex: 1 } }),
          /* @__PURE__ */ r(ed, { children: l ?? v })
        ] }),
        /* @__PURE__ */ r(rd, { children: s })
      ] }),
      g
    ] });
  }
);
nd.displayName = "NotificationPanel";
const id = { md: 40, sm: 32 }, fo = { md: 24, sm: 18 }, ld = { md: 80, sm: 64 }, sd = 36, cd = o.div`
  display: inline-flex;
  flex-direction: column;
  gap: var(--space-050);
  width: ${(e) => ld[e.$size]}px;
  max-width: 240px;
  font-family: var(--font-family);
`, dd = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-100);
  width: 100%;
`, ce = o(K.Trigger)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-100);
  width: 100%;
  height: ${(e) => id[e.$size]}px;
  padding: 0 var(--space-200);
  border-radius: var(--radius-200);
  background: var(--color-surfaces-on-container-high);
  border: var(--stroke-100) solid var(--color-stroke-border);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  color: var(--color-text-icon-primary);
  cursor: pointer;
  outline: none;
  transition: background 120ms ease, border-color 120ms ease, color 120ms ease;

  &:hover:not([data-state='open']):not(:disabled) {
    border-color: var(--color-stroke-border-high);
  }

  /* Has a chosen value: keeps the greyish surface with the darker hairline. */
  &[data-has-value='true']:not([data-state='open']) {
    border-color: var(--color-stroke-border-high);
  }

  /* Open: white surface + 1.5px primary border. */
  &[data-state='open'] {
    background: var(--color-surfaces-container);
    border: var(--stroke-150) solid var(--color-primary-primary);
  }

  &:focus-visible {
    border: var(--stroke-150) solid var(--color-primary-primary);
  }

  &:disabled {
    background: var(--color-disabled-disabled);
    border-color: transparent;
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }

  /* Same HCT trigger affordance as Dropdown — collapsed stroke tokens. */
  :root[data-theme='win hct'] &:hover:not([data-state='open']):not(:disabled),
  [data-theme='win hct'] &:hover:not([data-state='open']):not(:disabled) {
    background: var(--color-surfaces-inverse-container);
    border-color: var(--color-primary-primary);
    color: var(--color-text-icon-inverse);
  }

  :root[data-theme='win hct'] &[data-state='open'],
  [data-theme='win hct'] &[data-state='open'] {
    background: var(--color-surfaces-inverse-container);
    color: var(--color-text-icon-inverse);
  }
`, fd = o(K.Value)`
  flex: 1;
  min-width: 0;
  padding: 0 var(--space-100);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  line-height: 1.35;
  color: inherit;

  &[data-placeholder],
  ${ce}:not([data-has-value='true']) & {
    color: var(--color-text-icon-placeholder);
  }

  ${ce}:disabled & {
    color: var(--color-disabled-disabled-inverse);
  }

  :root[data-theme='win hct'] ${ce}:hover:not([data-state='open']):not(:disabled) &,
  [data-theme='win hct'] ${ce}:hover:not([data-state='open']):not(:disabled) &,
  :root[data-theme='win hct'] ${ce}[data-state='open'] &,
  [data-theme='win hct'] ${ce}[data-state='open'] & {
    color: inherit;
  }
`, pd = o(K.Icon)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: auto;
  width: ${(e) => fo[e.$size]}px;
  height: ${(e) => fo[e.$size]}px;
  color: currentColor;
  transition: transform 150ms ease;

  ${ce}[data-state='open'] & {
    transform: rotate(180deg);
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`, hd = o(K.Content)`
  z-index: 1;
  width: var(--radix-select-trigger-width);
  max-height: var(--radix-select-content-available-height);
  background: var(--color-surfaces-container);
  border-radius: var(--radius-200);
  box-shadow: var(--elevation-3);
  overflow: hidden;

  :root[data-theme='win hct'] &,
  [data-theme='win hct'] & {
    border: var(--stroke-100) solid var(--color-stroke-border);
    box-shadow: none;
  }
`, vd = o(K.Viewport)`
  padding: var(--space-050);
  display: flex;
  flex-direction: column;
  gap: var(--space-025);

  /* Native-overflow scrollbar shared with the Scrollbar element, so Radix
     Select's own viewport matches every other hello pc scrollbar. */
  ${Ze}
`, ud = o(K.Item)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-100);
  width: 100%;
  min-height: ${sd}px;
  padding: var(--space-100);
  border-radius: var(--radius-50);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  line-height: 1.35;
  color: var(--color-text-icon-secondary);
  cursor: pointer;
  outline: none;
  user-select: none;

  /* Highlighted (pointer/keyboard hover) — not shown in this Figma frame,
     added for consistency with Dropdown's item interaction feedback. */
  &[data-highlighted] {
    background: var(--color-tonal-tonal-secondary-overlay-hover);
    color: var(--color-text-icon-on-tonal-secondary);
  }

  /* Current selection — a persistent primary-tonal wash, per the Figma menu
     screenshot (item "2" highlighted while closed/idle). */
  &[data-state='checked'] {
    background: var(--color-tonal-tonal-overlay);
    color: var(--color-text-icon-on-tonal);
    font-weight: var(--font-weight-medium);
  }

  /* HCT: secondary-overlay hover is solid white (good); keep inverse text. */
  :root[data-theme='win hct'] &[data-highlighted],
  [data-theme='win hct'] &[data-highlighted] {
    background: var(--color-surfaces-inverse-container);
    color: var(--color-text-icon-inverse);
  }

  &[data-disabled] {
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
    pointer-events: none;
  }
`, gd = (e) => e.map((a) => typeof a == "number" ? { value: a } : a), xr = f.forwardRef(
  ({
    label: e,
    showLabelInfo: a = !1,
    required: t = !1,
    helperText: i,
    placeholder: n = "0",
    options: l = [],
    value: s,
    defaultValue: c,
    onValueChange: p,
    size: h = "md",
    disabled: b = !1,
    name: v,
    id: g,
    "aria-label": m
  }, u) => {
    const y = f.useId(), k = g ?? y, w = `${k}-helper`, z = gd(l), [I, L] = f.useState(c), T = s ?? I, E = T != null, R = T != null ? String(T) : void 0, O = b ? "disabled" : "greyscale";
    return /* @__PURE__ */ d(cd, { $size: h, children: [
      /* @__PURE__ */ d(dd, { children: [
        e ? /* @__PURE__ */ r(
          ae,
          {
            htmlFor: k,
            size: "sm",
            required: t,
            showInfo: a,
            disabled: b,
            children: e
          }
        ) : null,
        /* @__PURE__ */ d(
          K.Root,
          {
            value: R,
            onValueChange: (S) => {
              const F = Number(S);
              L(F), p == null || p(F);
            },
            disabled: b,
            required: t,
            name: v,
            children: [
              /* @__PURE__ */ d(
                ce,
                {
                  ref: u,
                  id: k,
                  $size: h,
                  "data-has-value": E,
                  "aria-label": m,
                  "aria-describedby": i != null ? w : void 0,
                  children: [
                    /* @__PURE__ */ r(fd, { placeholder: n }),
                    /* @__PURE__ */ r(pd, { $size: h, children: /* @__PURE__ */ r(Ce, {}) })
                  ]
                }
              ),
              /* @__PURE__ */ r(K.Portal, { children: /* @__PURE__ */ r(hd, { position: "popper", sideOffset: 4, children: /* @__PURE__ */ r(vd, { children: z.map((S) => /* @__PURE__ */ r(ud, { value: String(S.value), disabled: S.disabled, children: /* @__PURE__ */ r(K.ItemText, { children: S.label ?? String(S.value) }) }, S.value)) }) }) })
            ]
          }
        )
      ] }),
      i != null ? /* @__PURE__ */ r(V, { id: w, tone: O, children: i }) : null
    ] });
  }
);
xr.displayName = "NumberDropdown";
const bd = { md: 40, sm: 32 }, md = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-050);
  width: 100%;
  font-family: var(--font-family);
`, yd = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-100);
  width: 100%;
`, tr = o.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${(e) => bd[e.$size]}px;
  border-radius: var(--radius-200);
  background: var(--color-surfaces-on-container-high);
  border: var(--stroke-100) solid var(--color-stroke-border);
  overflow: hidden;
  transition: background 120ms ease, border-color 120ms ease;

  &:hover:not(:focus-within) {
    border-color: var(--color-stroke-border-high);
  }

  /* Finished typing: a dirtied field rests on the white container surface
     with the darker hairline. */
  &:has(input:not(:placeholder-shown)):not(:focus-within) {
    border-color: var(--color-stroke-border-high);
  }

  /* Typing (focus): white surface + 1.5px primary border. */
  &:focus-within {
    background: var(--color-surfaces-container);
    border: var(--stroke-150) solid var(--color-primary-primary);
  }

  /* Validation states override the resting/hover/focus chrome. */
  ${(e) => e.$status === "success" && `
    &, &:hover:not(:focus-within), &:focus-within, &:has(input:not(:placeholder-shown)) {
      background: var(--color-success-success-overlay);
      border: var(--stroke-150) solid var(--color-success-success);
    }
  `}
  ${(e) => e.$status === "error" && `
    &, &:hover:not(:focus-within), &:focus-within, &:has(input:not(:placeholder-shown)) {
      background: var(--color-error-error-overlay);
      border: var(--stroke-150) solid var(--color-error-error);
    }
  `}

  /* Disabled: flat fill, but (unlike TextInput) NumberInput keeps a visible
     border per the Figma "disabled" variant. */
  &:has(input:disabled) {
    background: var(--color-disabled-disabled);
    border-color: var(--color-disabled-disabled-inverse);
  }
`, xd = o.input`
  flex: 1;
  min-width: 0;
  height: 100%;
  padding: 0 var(--space-100) 0 var(--space-200);
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  line-height: 1.35;
  color: var(--color-text-icon-secondary);

  /* Hide native spin arrows — the hello pc stepper buttons replace them. */
  appearance: textfield;
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: var(--color-text-icon-secondary);
  }

  /* A committed value (typing or finished typing) promotes to full-strength ink. */
  &:focus,
  &:not(:placeholder-shown) {
    color: var(--color-text-icon-primary);
  }

  &:disabled {
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
    &::placeholder {
      color: var(--color-disabled-disabled-inverse);
    }
  }
`, wd = o.span`
  flex-shrink: 0;
  padding-right: var(--space-100);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  line-height: 1.35;
  color: var(--color-text-icon-secondary);

  ${tr}:focus-within & {
    color: var(--color-text-icon-primary);
  }

  ${tr}:has(input:disabled) & {
    color: var(--color-disabled-disabled-inverse);
  }
`, $d = o.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`, ya = f.forwardRef(
  ({
    label: e,
    showLabelInfo: a = !1,
    required: t = !1,
    helperText: i,
    status: n = "default",
    size: l = "md",
    value: s,
    defaultValue: c,
    min: p,
    max: h,
    step: b = 1,
    suffix: v,
    onValueChange: g,
    showDecrement: m = !0,
    showIncrement: u = !0,
    disabled: y,
    id: k,
    placeholder: w,
    onFocus: z,
    onBlur: I,
    ...L
  }, T) => {
    const E = f.useId(), R = k ?? E, O = `${R}-helper`, [S, F] = f.useState(c), N = s ?? S, _ = f.useCallback(
      (A) => {
        let Y = A;
        return p != null && (Y = Math.max(p, Y)), h != null && (Y = Math.min(h, Y)), Y;
      },
      [p, h]
    ), G = (A) => {
      F(A), g == null || g(A);
    }, C = (A) => {
      G(_((N ?? 0) + A * b));
    }, D = y ? "disabled" : n === "success" ? "success" : n === "error" ? "error" : "greyscale", M = p != null && N != null && N <= p, P = h != null && N != null && N >= h;
    return /* @__PURE__ */ d(md, { children: [
      /* @__PURE__ */ d(yd, { children: [
        e ? /* @__PURE__ */ r(
          ae,
          {
            htmlFor: R,
            size: "sm",
            required: t,
            showInfo: a,
            disabled: y,
            children: e
          }
        ) : null,
        /* @__PURE__ */ d(tr, { $size: l, $status: n, children: [
          /* @__PURE__ */ r(
            xd,
            {
              ref: T,
              id: R,
              type: "number",
              inputMode: "numeric",
              placeholder: w,
              disabled: y,
              required: t,
              min: p,
              max: h,
              step: b,
              value: s ?? S ?? "",
              "aria-invalid": n === "error" || void 0,
              "aria-describedby": i != null ? O : void 0,
              onChange: (A) => {
                const Y = A.target.value;
                if (Y === "") {
                  G(void 0);
                  return;
                }
                const ee = Number(Y);
                Number.isNaN(ee) || G(ee);
              },
              onBlur: (A) => {
                N != null && G(_(N)), I == null || I(A);
              },
              onFocus: z,
              ...L
            }
          ),
          v != null ? /* @__PURE__ */ r(wd, { "aria-hidden": !0, children: v }) : null,
          /* @__PURE__ */ d($d, { children: [
            m ? /* @__PURE__ */ r(
              j,
              {
                type: "button",
                variant: "ghost",
                intent: "secondary",
                size: l,
                icon: /* @__PURE__ */ r(Mo, {}),
                label: `Decrease${e ? ` ${e}` : ""}`,
                disabled: y || M,
                onClick: () => C(-1)
              }
            ) : null,
            u ? /* @__PURE__ */ r(
              j,
              {
                type: "button",
                variant: "ghost",
                intent: "secondary",
                size: l,
                icon: /* @__PURE__ */ r(hr, {}),
                label: `Increase${e ? ` ${e}` : ""}`,
                disabled: y || P,
                onClick: () => C(1)
              }
            ) : null
          ] })
        ] })
      ] }),
      i != null ? /* @__PURE__ */ r(V, { id: O, tone: D, children: i }) : null
    ] });
  }
);
ya.displayName = "NumberInput";
const kd = 40, zd = 39, Id = o.nav`
  font-family: var(--font-family);
`, Sd = o.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-075);
  margin: 0;
  padding: 0;
  list-style: none;
`, Ve = o.li`
  display: inline-flex;
  align-items: center;
`, Rd = o.button`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  height: ${kd}px;
  min-width: ${zd}px;
  padding: 0 var(--space-100);
  border: none;
  border-radius: var(--radius-1000);
  background: ${(e) => e.$current ? "var(--color-secondary-secondary-overlay)" : "transparent"};
  color: var(--color-surfaces-inverse-container);
  font-family: var(--font-family);
  font-size: var(--type-size-caption);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.2px;
  line-height: 1.35;
  cursor: pointer;
  transition: background 120ms ease;

  &:hover:not(:disabled) {
    background: var(--color-secondary-secondary-overlay-hover);
  }
  &:active:not(:disabled) {
    background: var(--color-tonal-tonal-secondary-overlay-press);
  }
  &:disabled {
    cursor: not-allowed;
    color: var(--color-disabled-disabled-inverse);
  }

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: var(--space-025);
  }
`, Td = o.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.2px;
  line-height: 1.35;
  white-space: nowrap;
`, Cd = o.li`
  display: inline-flex;
  align-items: center;
  gap: var(--space-300);
`, Ld = (e, a, t) => {
  const i = Array.from({ length: e }, (c, p) => p + 1);
  if (!t || e <= t) return i.map((c) => ({ type: "page", page: c }));
  const n = /* @__PURE__ */ new Set([1, e, a]);
  for (let c = 1; n.size < t && c < e; c += 1)
    a - c >= 1 && n.add(a - c), n.size < t && a + c <= e && n.add(a + c);
  const l = [...n].sort((c, p) => c - p), s = [];
  return l.forEach((c, p) => {
    const h = l[p - 1];
    p > 0 && c - h > 1 && s.push({
      type: "ellipsis",
      pages: Array.from({ length: c - h - 1 }, (b, v) => h + 1 + v)
    }), s.push({ type: "page", page: c });
  }), s;
}, xa = f.forwardRef(
  ({
    count: e,
    page: a,
    defaultPage: t = 1,
    onPageChange: i,
    variant: n = "numbers",
    maxPageButtons: l,
    showFirstLast: s = !0,
    label: c = "Pagination",
    ...p
  }, h) => {
    const [b, v] = f.useState(t), g = Math.min(Math.max(a ?? b, 1), Math.max(e, 1)), m = f.useRef(!1), u = (z) => {
      const I = Math.min(Math.max(z, 1), e);
      I !== g && (a === void 0 && v(I), i == null || i(I));
    }, y = (z, I, L, T, E) => /* @__PURE__ */ r(Ve, { children: /* @__PURE__ */ r(
      j,
      {
        label: L,
        icon: I,
        size: "sm",
        intent: "secondary",
        variant: "ghost",
        disabled: E,
        onClick: () => u(T)
      }
    ) }, z), k = g <= 1, w = g >= e;
    return /* @__PURE__ */ r(Id, { ref: h, "aria-label": c, ...p, children: /* @__PURE__ */ d(Sd, { children: [
      s ? y("first", /* @__PURE__ */ r(nt, {}), "Go to first page", 1, k) : null,
      y("prev", /* @__PURE__ */ r(ur, {}), "Go to previous page", g - 1, k),
      n === "dropdown" ? /* @__PURE__ */ d(Cd, { children: [
        /* @__PURE__ */ r(
          xr,
          {
            "aria-label": "Page",
            options: Array.from({ length: e }, (z, I) => I + 1),
            value: g,
            onValueChange: u
          }
        ),
        /* @__PURE__ */ d(Td, { children: [
          "of ",
          e,
          " pages"
        ] })
      ] }) : Ld(e, g, l).map(
        (z) => z.type === "page" ? /* @__PURE__ */ r(Ve, { children: /* @__PURE__ */ r(
          Rd,
          {
            type: "button",
            $current: z.page === g,
            "aria-current": z.page === g ? "page" : void 0,
            "aria-label": `Go to page ${z.page}`,
            onClick: () => u(z.page),
            children: z.page
          }
        ) }, `page-${z.page}`) : /* @__PURE__ */ r(Ve, { children: /* @__PURE__ */ d(X.Root, { children: [
          /* @__PURE__ */ r(X.Trigger, { asChild: !0, children: /* @__PURE__ */ r(
            j,
            {
              label: `Show pages ${z.pages[0]} to ${z.pages[z.pages.length - 1]}`,
              icon: /* @__PURE__ */ r(vr, {}),
              size: "md",
              intent: "secondary",
              variant: "ghost"
            }
          ) }),
          /* @__PURE__ */ r(X.Portal, { children: /* @__PURE__ */ r(
            X.Content,
            {
              asChild: !0,
              sideOffset: 8,
              align: "center",
              onPointerDownOutside: () => {
                m.current = !0;
              },
              onCloseAutoFocus: (I) => {
                m.current && I.preventDefault(), m.current = !1;
              },
              children: /* @__PURE__ */ r(Ke, { width: "max-content", maxHeight: 200, style: { minWidth: 80 }, children: z.pages.map((I) => /* @__PURE__ */ r(X.Item, { asChild: !0, children: /* @__PURE__ */ r(
                Ie,
                {
                  showLeftSlot: !1,
                  showRightSlot: !1,
                  selected: I === g,
                  onClick: () => u(I),
                  children: I
                }
              ) }, I)) })
            }
          ) })
        ] }) }, `gap-${z.pages[0]}`)
      ),
      y("next", /* @__PURE__ */ r(Ye, {}), "Go to next page", g + 1, w),
      s ? y("last", /* @__PURE__ */ r(it, {}), "Go to last page", e, w) : null
    ] }) });
  }
);
xa.displayName = "Pagination";
const Od = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-500);
  font-family: var(--font-family);
`, Hd = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-300);
`, po = o.span`
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.2px;
  line-height: 1.35;
  white-space: nowrap;
`, Fd = f.forwardRef(
  ({
    options: e = [10, 25, 50, 100],
    value: a,
    defaultValue: t,
    onValueChange: i,
    label: n = "Rows per page:",
    total: l,
    page: s = 1,
    rangeLabel: c,
    ...p
  }, h) => {
    const [b, v] = f.useState(t ?? e[0]), g = a ?? b, m = (y) => {
      a === void 0 && v(y), i == null || i(y);
    }, u = f.useMemo(() => {
      if (c !== void 0) return c;
      if (l === void 0) return null;
      if (l === 0) return "0 of 0";
      const y = (s - 1) * g + 1, k = Math.min(s * g, l);
      return `${y}-${k} of ${l}`;
    }, [c, l, s, g]);
    return /* @__PURE__ */ d(Od, { ref: h, ...p, children: [
      /* @__PURE__ */ d(Hd, { children: [
        /* @__PURE__ */ r(po, { children: n }),
        /* @__PURE__ */ r(
          xr,
          {
            "aria-label": n.replace(/:$/, ""),
            options: e,
            value: g,
            onValueChange: m
          }
        )
      ] }),
      u !== null ? /* @__PURE__ */ r(po, { children: u }) : null
    ] });
  }
);
Fd.displayName = "RowsPerPage";
const Ed = 40, ho = 24, Dd = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-050);
  width: 100%;
  max-width: 320px;
  font-family: var(--font-family);
`, Pd = o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-100);
  width: 100%;
`, Nd = o.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${Ed}px;
  padding: 0 var(--space-200);
  border: var(--stroke-100) solid var(--color-stroke-border);
  border-radius: var(--radius-200);
  background: var(--color-surfaces-on-container-high);
  transition: background 120ms ease, border-color 120ms ease;

  &:hover:not(:focus-within) {
    border-color: var(--color-stroke-border-high);
  }

  &:focus-within {
    background: var(--color-surfaces-container);
    border: var(--stroke-150) solid var(--color-primary-primary);
  }

  ${(e) => e.$status === "success" && `
      &, &:hover:not(:focus-within), &:focus-within {
        background: var(--color-success-success-overlay);
        border: var(--stroke-150) solid var(--color-success-success);
      }
    `}

  ${(e) => e.$status === "error" && `
      &, &:hover:not(:focus-within), &:focus-within {
        background: var(--color-error-error-overlay);
        border: var(--stroke-150) solid var(--color-error-error);
      }
    `}

  &:has(input:disabled) {
    background: var(--color-disabled-disabled);
    border-color: transparent;
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }
`, Md = o(dr.Input)`
  flex: 1;
  min-width: 0;
  height: 100%;
  padding: 0 var(--space-100);
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  line-height: 1.35;
  color: var(--color-text-icon-primary);

  &::placeholder {
    color: var(--color-text-icon-placeholder);
  }

  &:disabled {
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;

    &::placeholder {
      color: var(--color-disabled-disabled-inverse);
    }
  }
`, _d = o(dr.Toggle)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${ho}px;
  height: ${ho}px;
  padding: 0;
  border: none;
  border-radius: var(--radius-1000);
  background: transparent;
  color: var(--color-text-icon-secondary);
  cursor: pointer;

  &:disabled {
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }

  &:focus-visible::after {
    position: absolute;
    inset: calc(var(--space-025) * -1);
    border: var(--stroke-200) solid var(--color-primary-primary);
    border-radius: var(--radius-1000);
    content: '';
    pointer-events: none;
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`, Ad = o.div`
  position: absolute;
  top: calc(100% + var(--stroke-100));
  left: 0;
  z-index: 1;
`, Bd = (e) => e.length === 0 ? "empty" : /[a-z]/.test(e) && /[A-Z]/.test(e) && /\d/.test(e) && e.length >= 8 ? "strong" : /[a-z]/.test(e) && /[A-Z]/.test(e) ? "medium" : "weak", jd = (e) => {
  const a = [];
  return /[a-z]/.test(e) && a.push("lowercase"), /[A-Z]/.test(e) && a.push("uppercase"), /\d/.test(e) && a.push("numeric"), e.length >= 8 && a.push("length"), a;
}, Gd = f.forwardRef(
  ({
    label: e,
    showLabelInfo: a = !1,
    required: t = !1,
    helperText: i,
    status: n = "default",
    value: l,
    defaultValue: s,
    onChange: c,
    onValueChange: p,
    onVisibilityChange: h,
    visible: b,
    defaultVisible: v = !1,
    showStrengthMenu: g = !0,
    strength: m,
    strengthLabel: u,
    requirements: y,
    metRequirementIds: k,
    disabled: w,
    id: z,
    autoComplete: I = "new-password",
    onFocus: L,
    onBlur: T,
    ...E
  }, R) => {
    const O = f.useId(), S = z ?? O, F = `${S}-helper`, N = f.useRef(null), [_, G] = f.useState(s ?? ""), [C, D] = f.useState(!1), [M, P] = f.useState(v), A = l ?? _, Y = b ?? M, ee = m ?? Bd(A), ne = k ?? jd(A), ie = w ? "disabled" : n === "success" ? "success" : n === "error" ? "error" : C ? "info" : "greyscale", x = i != null, B = g && C && n === "default" && !w;
    return /* @__PURE__ */ d(Dd, { children: [
      /* @__PURE__ */ d(
        Pd,
        {
          ref: N,
          onFocusCapture: () => D(!0),
          onBlurCapture: () => {
            window.setTimeout(() => {
              var W;
              return D(!!((W = N.current) != null && W.contains(document.activeElement)));
            });
          },
          children: [
            e ? /* @__PURE__ */ r(
              ae,
              {
                htmlFor: S,
                size: "sm",
                required: t,
                showInfo: a,
                disabled: w,
                children: e
              }
            ) : null,
            /* @__PURE__ */ r(
              dr.Root,
              {
                visible: Y,
                onVisibilityChange: (W) => {
                  P(W), h == null || h(W);
                },
                children: /* @__PURE__ */ d(Nd, { $status: n, children: [
                  /* @__PURE__ */ r(
                    Md,
                    {
                      ref: R,
                      id: S,
                      value: A,
                      defaultValue: void 0,
                      disabled: w,
                      required: t,
                      autoComplete: I === "current-password" ? "current-password" : "new-password",
                      "aria-invalid": n === "error" || void 0,
                      "aria-describedby": x ? F : void 0,
                      onChange: (W) => {
                        G(W.target.value), p == null || p(W.target.value), c == null || c(W);
                      },
                      onFocus: L,
                      onBlur: T,
                      ...E
                    }
                  ),
                  /* @__PURE__ */ r(_d, { disabled: w, "aria-label": Y ? "Hide password" : "Show password", children: Y ? /* @__PURE__ */ r(jo, {}) : /* @__PURE__ */ r(Go, {}) })
                ] })
              }
            ),
            B ? /* @__PURE__ */ r(
              Ad,
              {
                children: /* @__PURE__ */ r(
                  Xo,
                  {
                    strength: ee,
                    statusLabel: u,
                    requirements: y,
                    metRequirementIds: ne
                  }
                )
              }
            ) : null
          ]
        }
      ),
      x ? /* @__PURE__ */ r(V, { id: F, tone: ie, children: i }) : null
    ] });
  }
);
Gd.displayName = "PasswordInput";
const Wd = 30, Yd = 40, Ud = o.div`
  display: inline-flex;
  flex-direction: column;
  gap: var(--space-050);
  font-family: var(--font-family);
`, Zd = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-050);
`, Kd = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-300);
`, nr = o(fr.Root)`
  display: flex;
  align-items: center;
  gap: var(--space-050);
`, Xd = (e, a, t) => e === "error" ? $`
      border: var(--stroke-150) solid var(--color-error-error);
    ` : t ? $`
      background: var(--color-surfaces-container);
      border: var(--stroke-150) solid var(--color-primary-primary);
    ` : a ? $`
      border: var(--stroke-150) solid var(--color-primary-primary);
    ` : $``, Jd = o(fr.Input)`
  box-sizing: border-box;
  width: ${Wd}px;
  height: ${Yd}px;
  padding: var(--space-100) var(--space-050);
  border: var(--stroke-100) solid var(--color-stroke-border);
  border-radius: var(--radius-200);
  background: var(--color-surfaces-on-container-high);
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  line-height: 1.35;
  text-align: center;
  outline: none;
  caret-color: transparent;
  transition: background 120ms ease, border-color 120ms ease;

  ${nr}:hover:not([data-disabled]) & {
    border-color: var(--color-stroke-border-high);
  }

  ${nr}:focus-within & {
    border-color: var(--color-stroke-border-high);
  }

  ${(e) => Xd(e.$status, e.$filled, e.$completed)}

  &:focus-visible {
    border: var(--stroke-150) solid
      ${(e) => e.$status === "error" ? "var(--color-error-error)" : "var(--color-primary-primary)"};
  }

  &:disabled {
    background: var(--color-disabled-disabled);
    border-color: transparent;
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }
`, er = (e, a) => e.replace(/\D/g, "").slice(0, a), qd = f.forwardRef(
  ({
    label: e,
    showLabelInfo: a = !1,
    required: t = !1,
    helperText: i,
    status: n = "default",
    length: l = 6,
    value: s,
    defaultValue: c,
    onValueChange: p,
    onComplete: h,
    visible: b,
    onVisibleChange: v,
    showVisibilityToggle: g = !0,
    disabled: m = !1,
    name: u,
    id: y,
    "aria-label": k,
    autoComplete: w = "one-time-code"
  }, z) => {
    const I = f.useId(), L = y ?? I, T = `${L}-helper`, [E, R] = f.useState(() => er(c ?? "", l)), [O, S] = f.useState(!1), F = er(s ?? E, l), N = b ?? O, _ = F.length === l, G = m ? "disabled" : n === "error" ? "error" : "greyscale", C = (M) => {
      S(M), v == null || v(M);
    };
    return /* @__PURE__ */ d(Ud, { children: [
      /* @__PURE__ */ d(Zd, { children: [
        e ? /* @__PURE__ */ r(
          ae,
          {
            htmlFor: L,
            size: "sm",
            required: t,
            showInfo: a,
            disabled: m,
            children: e
          }
        ) : null,
        /* @__PURE__ */ d(Kd, { children: [
          /* @__PURE__ */ d(
            nr,
            {
              ref: z,
              value: F,
              onValueChange: (M) => {
                const P = er(M, l);
                R(P), p == null || p(P), P.length === l && (h == null || h(P));
              },
              validationType: "numeric",
              type: N ? "text" : "password",
              autoComplete: w,
              disabled: m,
              name: u,
              "aria-label": k,
              "aria-describedby": i != null ? T : void 0,
              "aria-invalid": n === "error" || void 0,
              children: [
                Array.from({ length: l }, (M, P) => /* @__PURE__ */ r(
                  Jd,
                  {
                    id: P === 0 ? L : void 0,
                    index: P,
                    $status: n,
                    $filled: !!F[P],
                    $completed: _,
                    "aria-label": `${e ?? k ?? "PIN"} digit ${P + 1} of ${l}`
                  },
                  P
                )),
                /* @__PURE__ */ r(fr.HiddenInput, { required: t })
              ]
            }
          ),
          g ? /* @__PURE__ */ r(
            j,
            {
              type: "button",
              size: "sm",
              intent: "secondary",
              variant: "ghost",
              disabled: m,
              label: N ? "Hide PIN" : "Show PIN",
              icon: N ? /* @__PURE__ */ r(jo, {}) : /* @__PURE__ */ r(Go, {}),
              onClick: () => C(!N)
            }
          ) : null
        ] })
      ] }),
      i != null ? /* @__PURE__ */ r(V, { id: T, tone: G, children: i }) : null
    ] });
  }
);
qd.displayName = "PinInput";
const Pe = o.span`
  position: relative;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border-radius: var(--radius-1000);
  border: var(--stroke-200) solid var(--color-text-icon-secondary);
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: border-color 120ms ease, background 120ms ease;
`, ir = o(Te.Indicator)`
  display: block;
  width: 8px;
  height: 8px;
  border-radius: var(--radius-1000);
  background: var(--color-primary-primary);
  transition: background 120ms ease;
`, Qd = o(Te.Item)`
  all: unset;
  position: relative;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border-radius: var(--radius-1000);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover:not([data-disabled]) {
    background: var(--color-surfaces-primary);
  }

  /* Checked: primary ring + dot, deepening on hover. */
  &[data-state='checked'] ${Pe} {
    border-color: var(--color-primary-primary);
  }
  &[data-state='checked']:hover:not([data-disabled]) ${Pe} {
    border-color: var(--color-primary-primary-hover);
  }
  &[data-state='checked']:hover:not([data-disabled]) ${ir} {
    background: var(--color-primary-primary-hover);
  }

  /* Disabled: filled disc with a muted ring (and a muted dot when checked). */
  &[data-disabled] {
    cursor: not-allowed;
  }
  &[data-disabled] ${Pe} {
    border-color: var(--color-disabled-disabled);
    background: var(--color-disabled-disabled-inverse);
  }
  &[data-disabled] ${ir} {
    background: var(--color-disabled-disabled);
  }

  /* Focus ring: 20px (inset 2px), restyled — never removed. */
  &:focus-visible::after {
    content: '';
    position: absolute;
    inset: 2px;
    border: var(--stroke-200) solid var(--color-primary-primary);
    border-radius: var(--radius-1000);
    pointer-events: none;
  }
`, Vd = o.label`
  display: inline-flex;
  align-items: center;
  gap: var(--space-100);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  color: var(--color-text-icon-primary);
  cursor: pointer;

  &:has([data-disabled]) {
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }
`, ef = o(Te.Root)`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: var(--space-100);

  &[data-orientation='horizontal'] {
    flex-direction: row;
    gap: var(--space-300);
  }
`, rf = f.forwardRef(
  ({ children: e, ...a }, t) => /* @__PURE__ */ r(ef, { ref: t, ...a, children: e })
);
rf.displayName = "RadioGroup";
const of = f.forwardRef(
  ({ value: e, label: a, id: t, ...i }, n) => {
    const l = f.useId(), s = t ?? l, c = /* @__PURE__ */ r(Qd, { id: s, ref: n, value: e, ...i, children: /* @__PURE__ */ r(Pe, { children: /* @__PURE__ */ r(ir, {}) }) });
    return a ? /* @__PURE__ */ d(Vd, { htmlFor: s, children: [
      c,
      /* @__PURE__ */ r("span", { children: a })
    ] }) : c;
  }
);
of.displayName = "Radio";
const te = o.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 48px;
  height: 40px;
  padding: var(--space-100);
  border-radius: var(--radius-200);
  background: var(--color-control-fill);
  box-shadow: inset 0 0 0 var(--stroke-100) var(--color-control-border);
  color: var(--color-control-on-fill);
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-bold);
  line-height: 1.35;
  transition: background-color 120ms ease, box-shadow 120ms ease, color 120ms ease;
`, wa = o.span`
  width: 100%;
  color: var(--color-text-icon-secondary);
  font-size: var(--type-size-caption);
  font-weight: var(--font-weight-regular);
  /* Figma regular.12: 0.2px tracking (no tracking token). */
  letter-spacing: 0.2px;
  line-height: 1.35;
  text-align: center;
  overflow-wrap: anywhere;
`, af = o(Te.Item)`
  display: inline-flex;
  flex: none;
  flex-direction: column;
  align-items: center;
  gap: var(--space-100);
  width: 86px;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  font-family: var(--font-family);
  cursor: pointer;
  outline: none;

  &:hover:not([data-disabled]) ${te} {
    background: var(--color-control-fill-hover);
    box-shadow: inset 0 0 0 var(--stroke-200) var(--color-control-border-hover);
  }
  &:active:not([data-disabled]) ${te} {
    background: var(--color-control-fill-press);
    box-shadow: inset 0 0 0 var(--stroke-100) var(--color-control-border);
  }

  &[data-state='checked'] ${te} {
    background: var(--color-control-selected-fill);
    box-shadow: none;
    color: var(--color-control-on-selected);
  }
  &[data-state='checked']:hover:not([data-disabled]) ${te} {
    background: var(--color-control-selected-fill-hover);
    box-shadow: none;
  }
  &[data-state='checked']:active:not([data-disabled]) ${te} {
    background: var(--color-control-selected-fill-press);
  }

  &[data-disabled] {
    cursor: not-allowed;
  }
  &[data-disabled] ${te} {
    background: var(--color-control-disabled-fill);
    box-shadow: inset 0 0 0 var(--stroke-100) var(--color-control-disabled-border);
    color: var(--color-text-icon-disabled);
  }
  /* Selected + disabled (a locked answer) keeps a 2px ring so it still reads
     as the chosen value. */
  &[data-disabled][data-state='checked'] ${te} {
    box-shadow: inset 0 0 0 var(--stroke-200) var(--color-text-icon-disabled);
  }
  &[data-disabled] ${wa} {
    color: var(--color-text-icon-disabled);
  }

  /* Focus keeps the current fill and adds a 3px ring hugging the tile. */
  &:focus-visible ${te}::after {
    content: '';
    position: absolute;
    inset: calc(-1 * var(--stroke-300));
    border: var(--stroke-300) solid var(--color-control-focus-ring);
    border-radius: calc(var(--radius-200) + var(--stroke-300));
    pointer-events: none;
  }
`, tf = o(Te.Root)`
  display: inline-flex;
  align-items: flex-start;
  gap: var(--space-300);
  font-family: var(--font-family);
`, nf = o.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-600);
`, lf = o.div`
  display: flex;
  align-self: center;
  height: var(--space-900);
`, vo = ({ option: e, showCaption: a }) => /* @__PURE__ */ d(af, { value: e.value, disabled: e.disabled, children: [
  /* @__PURE__ */ r(te, { children: e.label }),
  a && e.caption ? /* @__PURE__ */ r(wa, { children: e.caption }) : null
] }), sf = f.forwardRef(
  ({
    count: e = 5,
    captions: a = [],
    showCaptions: t = !0,
    showNa: i = !1,
    naLabel: n = "N/A",
    naCaption: l = "Unrated",
    options: s,
    ...c
  }, p) => {
    const h = s ?? Array.from({ length: e }, (b, v) => ({
      value: String(v + 1),
      label: String(v + 1),
      caption: a[v]
    }));
    return /* @__PURE__ */ d(tf, { ref: p, orientation: "horizontal", ...c, children: [
      i ? /* @__PURE__ */ d(J, { children: [
        /* @__PURE__ */ r(vo, { option: { value: "na", label: n, caption: l }, showCaption: t }),
        /* @__PURE__ */ r(lf, { children: /* @__PURE__ */ r(Oe, { direction: "vertical", decorative: !0 }) })
      ] }) : null,
      /* @__PURE__ */ r(nf, { children: h.map((b) => /* @__PURE__ */ r(vo, { option: b, showCaption: t }, b.value)) })
    ] });
  }
);
sf.displayName = "Rating";
const cf = o(q.Root)`
  display: flex;
  align-items: flex-start;
  gap: var(--space-500);
  font-family: var(--font-family);
`, df = o(q.List)`
  display: flex;
  flex-direction: column;
  flex: none;
  gap: var(--space-050);
  width: 100%;
`, ff = o(q.Content)`
  flex: 1 1 0%;
  min-width: 0;
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  color: var(--color-text-icon-primary);

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: var(--space-025);
  }
`, pf = f.forwardRef((e, a) => /* @__PURE__ */ r(cf, { ref: a, ...e, orientation: "vertical" }));
pf.displayName = "Sidebar";
const $a = f.forwardRef((e, a) => /* @__PURE__ */ r(df, { ref: a, ...e }));
$a.displayName = "SidebarList";
const hf = f.forwardRef(
  (e, a) => /* @__PURE__ */ r(ff, { ref: a, ...e })
);
hf.displayName = "SidebarContent";
const ka = f.createContext(!1), za = () => f.useContext(ka), vf = 40, _e = 24, uf = 4, gf = 32, bf = o(q.Trigger)`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--space-050) var(--space-300);
  border: none;
  appearance: none;
  border-radius: var(--radius-200);
  background: transparent;
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.1px;
  line-height: 1.35;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  transition: background 120ms ease;

  /* Not selected. */
  &:hover:not(:disabled) {
    background: var(--color-tonal-tonal-secondary-overlay-hover);
  }
  &:active:not(:disabled) {
    background: var(--color-tonal-tonal-secondary-overlay-press);
  }

  /* Selected — note the resting fill is tonal/lightest, not the overlay the
     vertical tab row uses. */
  &[data-state='active'] {
    background: var(--color-tonal-tonal-lightest);
    color: var(--color-text-icon-on-tonal);
    font-weight: var(--font-weight-bold);
  }
  &[data-state='active']:hover:not(:disabled) {
    background: var(--color-tonal-tonal-overlay-hover);
  }
  &[data-state='active']:active:not(:disabled) {
    background: var(--color-tonal-tonal-overlay-press);
  }

  /* Leading indicator, in the same on-tonal color as the label. Figma drops it
     on the disabled variants, so it hangs off :not(:disabled). */
  &[data-state='active']:not(:disabled)::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: ${uf}px;
    height: ${gf}px;
    border-radius: var(--radius-1000);
    background: var(--color-text-icon-on-tonal);
  }

  /* Disabled wins over the selected treatment: no fill, no indicator, and the
     label back to medium weight. */
  &:disabled {
    cursor: not-allowed;
    background: transparent;
    color: var(--color-disabled-disabled-inverse);
    font-weight: var(--font-weight-medium);
  }

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: calc(-1 * var(--stroke-200));
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`, mf = o.span`
  display: flex;
  align-items: center;
  justify-content: ${(e) => e.$collapsed ? "center" : "flex-start"};
  gap: var(--space-300);
  width: 100%;
  height: ${vf}px;
`, yf = o.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`, xf = o.span`
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  color: currentColor;

  svg {
    width: ${_e}px;
    height: ${_e}px;
  }
`, wf = o.span`
  flex: 1 1 0%;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, $f = o.span`
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: currentColor;
  transform: rotate(${(e) => e.$expanded ? "180deg" : "0deg"});
  transition: transform 150ms ease;

  svg {
    width: ${_e}px;
    height: ${_e}px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`, kf = f.forwardRef(
  ({ children: e, icon: a, expanded: t, onExpandedChange: i, onClick: n, ...l }, s) => {
    const c = za(), p = t !== void 0 && !c;
    return /* @__PURE__ */ r(
      bf,
      {
        ref: s,
        "aria-expanded": p ? t : void 0,
        onClick: (h) => {
          n == null || n(h), p && (i == null || i(!t));
        },
        ...l,
        children: /* @__PURE__ */ d(mf, { $collapsed: c, children: [
          a ? /* @__PURE__ */ r(xf, { "aria-hidden": !0, children: a }) : null,
          c ? /* @__PURE__ */ r(yf, { children: e }) : /* @__PURE__ */ r(wf, { children: e }),
          p ? /* @__PURE__ */ r($f, { $expanded: !!t, "aria-hidden": !0, children: /* @__PURE__ */ r(Ce, {}) }) : null
        ] })
      }
    );
  }
);
kf.displayName = "SidebarItem";
const zf = 24, If = o(q.Trigger)`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-300);
  width: 100%;
  padding: var(--space-200) var(--space-300) var(--space-200)
    calc(var(--space-300) * 2 + ${zf}px);
  border: none;
  appearance: none;
  border-radius: var(--radius-150);
  background: transparent;
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.1px;
  line-height: 1.35;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  transition: background 120ms ease;

  /* Not selected. */
  &:hover:not(:disabled) {
    background: var(--color-tonal-tonal-secondary-overlay-hover);
  }
  &:active:not(:disabled) {
    background: var(--color-tonal-tonal-secondary-overlay-press);
  }

  /* Selected: the on-tonal bold label carries it — no fill at rest. */
  &[data-state='active'] {
    color: var(--color-text-icon-on-tonal);
    font-weight: var(--font-weight-bold);
  }
  &[data-state='active']:hover:not(:disabled) {
    background: var(--color-tonal-tonal-overlay-hover);
  }
  &[data-state='active']:active:not(:disabled) {
    background: var(--color-tonal-tonal-overlay-press);
  }

  /* Figma gives the sub-item a solid disabled fill where the parent row stays
     transparent. Kept faithful rather than normalised — see the docs page. */
  &:disabled {
    cursor: not-allowed;
    background: var(--color-disabled-disabled);
    color: var(--color-disabled-disabled-inverse);
    font-weight: var(--font-weight-medium);
  }

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: calc(-1 * var(--stroke-200));
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`, Sf = o.span`
  flex: 1 1 0%;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, Rf = f.forwardRef(
  ({ children: e, ...a }, t) => /* @__PURE__ */ r(If, { ref: t, ...a, children: /* @__PURE__ */ r(Sf, { children: e }) })
);
Rf.displayName = "SidebarSubItem";
const Tf = "var(--color-surfaces-container-pop-web, var(--color-surfaces-on-container-high))", Cf = o.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  border-radius: var(--radius-200);
  overflow: hidden;
  background: ${(e) => e.$surface === "solid" ? Tf : "var(--color-surfaces-container-pop-windows)"};
`, Lf = o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-025);
  width: 100%;
  padding: ${(e) => e.$surface === "solid" ? "var(--space-025)" : "var(--space-050)"};
`, Of = f.forwardRef(
  ({ item: e, children: a, surface: t = "translucent", ...i }, n) => /* @__PURE__ */ d(Cf, { ref: n, $surface: t, ...i, children: [
    e,
    a ? /* @__PURE__ */ r(Lf, { $surface: t, children: a }) : null
  ] })
);
Of.displayName = "SidebarBlock";
const Hf = o.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-300);
  width: 100%;
  padding: var(--space-300) var(--space-300) var(--space-050);
  color: var(--color-text-icon-secondary);
  font-family: var(--font-family);
  font-size: var(--type-size-caption);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.2px;
  line-height: 1.35;
  white-space: nowrap;
`, Ff = o.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  padding: var(--space-300) var(--space-100);
`, Ef = o(Oe)`
  width: 100%;
`, Df = f.forwardRef(
  ({ children: e, ...a }, t) => za() ? /* @__PURE__ */ r(wr, { ref: t, ...a }) : /* @__PURE__ */ r(Hf, { ref: t, ...a, children: e })
);
Df.displayName = "SidebarSectionHeader";
const wr = f.forwardRef(
  (e, a) => /* @__PURE__ */ r(Ff, { ref: a, ...e, children: /* @__PURE__ */ r(Ef, { decorative: !0, weight: "primary" }) })
);
wr.displayName = "SidebarDivider";
const Pf = 280, Nf = 96, Mf = 40, uo = 32, _f = o.nav`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-050);
  width: ${(e) => e.$collapsed ? Nf : Pf}px;
  height: 100%;
  padding: var(--space-500) var(--space-200) var(--space-200);
  font-family: var(--font-family);

  /* Figma's platform axis: the web rail is an opaque panel with a right-hand
     edge; the windows rail sits transparent on whatever is behind it. */
  ${(e) => e.$surface === "solid" && `
    background: var(--color-surfaces-container);
    border-right: var(--stroke-100) solid var(--color-stroke-border);
  `}
`, Af = o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-500);
  width: 100%;
  flex: 1 1 auto;
  /* Without this the rows overflow this box instead of shrinking it, and spill
     straight over the footer — which is what put the collapse control in the
     middle of the row list. */
  min-height: 0;
`, $r = "var(--space-300)", Bf = o(mr)`
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;

  [data-radix-scroll-area-viewport] {
    width: calc(100% - ${$r}) !important;
  }
`, jf = o.div`
  display: flex;
  flex: none;
  align-items: center;
  gap: ${(e) => e.$collapsed ? "var(--space-150)" : "var(--space-300)"};
  /* min-height, not height: the two-line lockup runs a little over 40px at
     18px, and a fixed height clipped the app name's descenders. Figma's row
     doesn't clip either. */
  min-height: ${Mf}px;
  box-sizing: border-box;
  width: 100%;
  padding-left: ${(e) => e.$collapsed ? "0" : "var(--space-100)"};
  /* Same gutter the rail reserves for the scrollbar, so the logo shares the
     usable column with the row icons rather than sitting beside the bar. */
  padding-right: ${$r};
  justify-content: ${(e) => e.$collapsed ? "center" : "flex-start"};
`, Gf = o.span`
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: ${uo}px;
  height: ${uo}px;

  svg,
  img {
    width: 100%;
    height: 100%;
  }
`, Wf = o.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  color: var(--color-text-icon-primary);
  font-size: var(--type-size-subtitle);
  letter-spacing: -0.4px;
  /* Enough leading for descenders — 1.15 cropped the "p" in "Appname". */
  line-height: 1.25;
  /* Clip horizontally only; vertical clipping is what cut the app name off. */
  overflow-x: hidden;
`, Yf = o.span`
  font-weight: var(--font-weight-regular);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, Uf = o.span`
  font-weight: var(--font-weight-bold);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, Zf = o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  width: 100%;
  flex: none;
  /* Same gutter the rail reserves for the scrollbar, so the footer's controls
     share the usable column with the row icons rather than drifting toward the
     bar. */
  padding-right: ${$r};
`, Ia = "calc(var(--space-300) - var(--space-050))", Kf = o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(e) => e.$collapsed ? "center" : "flex-start"};
  box-sizing: border-box;
  width: 100%;
  /* Footer already reserves the scrollbar gutter, so only the left inset varies:
     nudged for glyph-centre alignment when expanded, none when centred. */
  padding: var(--space-200) 0 var(--space-200) ${(e) => e.$collapsed ? "0" : Ia};
`, Xf = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-300);
  box-sizing: border-box;
  width: 100%;
  /* Same as the toggle: the Footer reserves the gutter, so only the left inset
     varies — the 4px avatar-centre nudge when expanded, none when centred. */
  padding: var(--space-200) 0 var(--space-200) ${(e) => e.$collapsed ? "0" : Ia};
  justify-content: ${(e) => e.$collapsed ? "center" : "flex-start"};
`, Jf = o.div`
  display: flex;
  flex: 1 1 0%;
  align-items: center;
  gap: var(--space-200);
  min-width: 0;
  justify-content: ${(e) => e.$collapsed ? "center" : "flex-start"};
`, qf = o.span`
  flex: 1 1 0%;
  min-width: 0;
  color: var(--color-text-icon-primary);
  font-size: var(--type-size-caption);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.2px;
  line-height: 1.35;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, Qf = f.forwardRef(
  ({
    children: e,
    collapsed: a = !1,
    onCollapsedChange: t,
    collapseLabel: i = "Collapse sidebar",
    expandLabel: n = "Expand sidebar",
    logo: l,
    productName: s,
    appName: c,
    surface: p = "translucent",
    user: h,
    "aria-label": b,
    ...v
  }, g) => {
    const m = !a && (s || c);
    return /* @__PURE__ */ r(ka.Provider, { value: a, children: /* @__PURE__ */ d(_f, { ref: g, $collapsed: a, $surface: p, ...v, children: [
      /* @__PURE__ */ d(Af, { children: [
        l || m ? /* @__PURE__ */ d(jf, { $collapsed: a, children: [
          l ? /* @__PURE__ */ r(Gf, { "aria-hidden": !0, children: l }) : null,
          m ? /* @__PURE__ */ d(Wf, { children: [
            s ? /* @__PURE__ */ r(Yf, { children: s }) : null,
            c ? /* @__PURE__ */ r(Uf, { children: c }) : null
          ] }) : null
        ] }) : null,
        /* @__PURE__ */ r(Bf, { children: /* @__PURE__ */ r($a, { "aria-label": b, children: e }) })
      ] }),
      /* @__PURE__ */ d(Zf, { children: [
        t ? /* @__PURE__ */ r(Kf, { $collapsed: a, children: /* @__PURE__ */ r(
          j,
          {
            label: a ? n : i,
            icon: a ? /* @__PURE__ */ r(lt, {}) : /* @__PURE__ */ r(st, {}),
            size: "sm",
            intent: "secondary",
            variant: "ghost",
            onClick: () => t(!a)
          }
        ) }) : null,
        /* @__PURE__ */ r(wr, {}),
        h ? /* @__PURE__ */ d(Xf, { $collapsed: a, children: [
          /* @__PURE__ */ d(Jf, { $collapsed: a, children: [
            h.avatar ?? /* @__PURE__ */ r(la, { size: "sm", initials: h.name.charAt(0), alt: h.name }),
            a ? null : /* @__PURE__ */ r(qf, { children: h.name })
          ] }),
          !a && h.onAction ? /* @__PURE__ */ r(
            j,
            {
              label: h.actionLabel ?? "Account options",
              icon: /* @__PURE__ */ r(vr, {}),
              size: "sm",
              intent: "secondary",
              variant: "ghost",
              onClick: h.onAction
            }
          ) : null
        ] }) : null
      ] })
    ] }) });
  }
);
Qf.displayName = "SidebarNav";
const Vf = 314, ep = 404, rp = 56, go = 20, op = 48, ap = 4, bo = 40, tp = o.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-300);
  height: ${rp}px;
  padding: var(--space-100);
  font-family: var(--font-family);
`, mo = o.span`
  flex-shrink: 0;
  color: var(--color-text-icon-primary);
  font-size: var(--type-size-body);
  line-height: 1.35;
  letter-spacing: 0.2px;
  white-space: nowrap;
`, np = o.div`
  flex: 0 0 var(--space-900);
  width: var(--space-900);
`, kr = o(We.Root)`
  position: relative;
  display: flex;
  flex: 1;
  min-width: 0;
  height: ${op}px;
  align-items: center;
  touch-action: none;
  user-select: none;

  &[data-disabled] {
    cursor: not-allowed;
  }
`, ip = o(We.Track)`
  position: relative;
  flex: 1;
  height: ${ap}px;
  overflow: hidden;
  border-radius: var(--radius-50);
  background: var(--color-stroke-border);

  ${kr}[data-disabled] & {
    background: var(--color-disabled-disabled);
  }
`, lp = o(We.Range)`
  position: absolute;
  height: 100%;
  border-radius: var(--radius-1000);
  background: var(--color-primary-primary);

  ${kr}[data-disabled] & {
    background: var(--color-disabled-disabled-inverse);
  }
`, sp = o.span`
  position: absolute;
  inset: 0 var(--stroke-100);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
`, cp = o.span`
  width: var(--space-025);
  height: var(--space-025);
  border-radius: var(--radius-1000);
  background: var(--color-surfaces-container);
`, Ne = o.span`
  position: absolute;
  top: calc(100% + var(--space-050));
  left: 50%;
  z-index: 2;
  display: none;
  transform: translateX(-50%);
  padding: var(--space-050) var(--space-100);
  border-radius: var(--radius-1000);
  background: var(--color-primary-primary);
  color: var(--color-text-icon-on-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-caption);
  font-weight: var(--font-weight-bold);
  line-height: 1.35;
  letter-spacing: 0.2px;
  white-space: nowrap;
  pointer-events: none;
`, dp = o(We.Thumb)`
  all: unset;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  display: block;
  width: ${go}px;
  height: ${go}px;
  border-radius: var(--radius-1000);
  background: var(--color-primary-primary);
  box-shadow: var(--elevation-0);
  cursor: grab;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${bo}px;
    height: ${bo}px;
    transform: translate(-50%, -50%);
    border-radius: var(--radius-1000);
    background: transparent;
    pointer-events: none;
  }

  &:hover::before,
  &:focus-visible::before {
    background: var(--color-primary-primary-overlay-hover);
  }

  &:active {
    cursor: grabbing;
  }

  &:active::before {
    background: var(--color-primary-primary-overlay-press);
  }

  &:hover ${Ne},
  &:focus-visible ${Ne},
  &:active ${Ne} {
    display: block;
  }

  &[data-disabled] {
    background: var(--color-disabled-disabled-inverse);
    box-shadow: none;
    cursor: not-allowed;
  }

  &[data-disabled]::before {
    display: none;
  }
`, zr = f.forwardRef(
  ({
    value: e,
    defaultValue: a,
    labels: t,
    range: i,
    type: n = "continuous",
    min: l = 0,
    max: s = 100,
    step: c = 1,
    tickCount: p = 9,
    showEndpoints: h = !0,
    showValueInput: b = !0,
    inputSuffix: v = "%",
    formatValue: g = String,
    disabled: m = !1,
    width: u,
    name: y,
    minStepsBetweenThumbs: k = 0,
    className: w,
    style: z,
    onValueChange: I,
    onValueCommit: L
  }, T) => {
    const [E, R] = f.useState([...a]), O = e ? [...e] : E, S = (C) => {
      e || R(C), I == null || I(C);
    }, F = (C, D) => {
      if (D == null) return;
      const M = Math.min(s, Math.max(l, D)), P = [...O];
      if (P[C] = M, i) {
        const A = k * c;
        C === 0 && (P[0] = Math.min(M, P[1] - A)), C === 1 && (P[1] = Math.max(M, P[0] + A));
      }
      S(P);
    }, N = Math.max(2, Math.floor(p)), _ = u ?? (i ? ep : Vf), G = (C) => /* @__PURE__ */ r(np, { children: /* @__PURE__ */ r(
      ya,
      {
        "aria-label": t[C],
        value: O[C],
        min: l,
        max: s,
        step: c,
        suffix: v,
        showDecrement: !1,
        showIncrement: !1,
        disabled: m,
        onValueChange: (D) => F(C, D)
      }
    ) });
    return /* @__PURE__ */ d(tp, { className: w, style: { width: _, ...z }, children: [
      i && b ? G(0) : null,
      h ? /* @__PURE__ */ r(mo, { children: g(l) }) : null,
      /* @__PURE__ */ d(
        kr,
        {
          ref: T,
          min: l,
          max: s,
          step: c,
          value: O,
          disabled: m,
          name: y,
          minStepsBetweenThumbs: k,
          onValueChange: S,
          onValueCommit: L,
          children: [
            /* @__PURE__ */ d(ip, { $discrete: n === "discrete", children: [
              /* @__PURE__ */ r(lp, {}),
              n === "discrete" ? /* @__PURE__ */ r(sp, { "aria-hidden": !0, children: Array.from({ length: N }, (C, D) => /* @__PURE__ */ r(cp, {}, D)) }) : null
            ] }),
            O.map((C, D) => /* @__PURE__ */ r(
              dp,
              {
                "aria-label": t[D],
                "aria-valuetext": String(g(C)),
                children: /* @__PURE__ */ r(Ne, { "aria-hidden": !0, children: g(C) })
              },
              D
            ))
          ]
        }
      ),
      h ? /* @__PURE__ */ r(mo, { children: g(s) }) : null,
      b ? G(i ? 1 : 0) : null
    ] });
  }
);
zr.displayName = "SliderBase";
const fp = f.forwardRef(
  ({
    value: e,
    defaultValue: a = 50,
    "aria-label": t = "Value",
    onValueChange: i,
    onValueCommit: n,
    ...l
  }, s) => /* @__PURE__ */ r(
    zr,
    {
      ref: s,
      ...l,
      range: !1,
      labels: [t],
      value: e == null ? void 0 : [e],
      defaultValue: [a],
      onValueChange: (c) => i == null ? void 0 : i(c[0]),
      onValueCommit: (c) => n == null ? void 0 : n(c[0])
    }
  )
);
fp.displayName = "Slider";
const pp = f.forwardRef(
  ({
    value: e,
    defaultValue: a = [10, 50],
    minStepsBetweenThumbs: t = 0,
    "aria-label": i = ["Minimum value", "Maximum value"],
    onValueChange: n,
    onValueCommit: l,
    ...s
  }, c) => /* @__PURE__ */ r(
    zr,
    {
      ref: c,
      ...s,
      range: !0,
      labels: i,
      value: e,
      defaultValue: a,
      minStepsBetweenThumbs: t,
      onValueChange: (p) => n == null ? void 0 : n(p),
      onValueCommit: (p) => l == null ? void 0 : l(p)
    }
  )
);
pp.displayName = "RangeSlider";
const yo = 40, xo = 24, Ae = 16, wo = 8, hp = (e, a) => e < a ? "complete" : e === a ? "current" : "incomplete", vp = (e, a) => e < a, up = o.nav`
  font-family: var(--font-family);
`, gp = o.ol`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  ${(e) => e.$orientation === "horizontal" ? $`
          flex-direction: row;
          align-items: center;
          gap: var(--space-100);
        ` : $`
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        `}
`, bp = o.li`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0;
  padding: 0;
`, $o = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-050);
  min-width: 0;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  font: inherit;
  text-align: left;
  color: inherit;

  ${(e) => e.$interactive ? $`
          cursor: pointer;
          border-radius: var(--radius-50);

          &:focus-visible {
            outline: var(--stroke-200) solid var(--color-primary-primary);
            outline-offset: var(--space-025);
          }
        ` : $`
          cursor: default;
        `}
`, ko = o.span`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${xo}px;
  height: ${xo}px;
`, mp = o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${Ae}px;
  height: ${Ae}px;
  border-radius: var(--radius-1000);
  background: var(--color-success-success);
  color: var(--color-text-icon-inverse);

  & > svg {
    width: 10px;
    height: 10px;
    stroke-width: 3;
  }
`, yp = o.span`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${Ae}px;
  height: ${Ae}px;
  border-radius: var(--radius-1000);
  border: var(--stroke-200) solid
    ${(e) => e.$current ? "var(--color-primary-primary)" : "var(--color-text-icon-secondary)"};
  background: transparent;
`, xp = o.span`
  display: block;
  width: ${wo}px;
  height: ${wo}px;
  border-radius: var(--radius-1000);
  background: var(--color-primary-primary);
`, wp = o.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 0;
  line-height: 1.35;
`, $p = o.span`
  font-size: var(--type-size-body);
  font-weight: ${(e) => e.$stage === "current" ? "var(--font-weight-medium)" : "var(--font-weight-regular)"};
  color: ${(e) => e.$stage === "current" ? "var(--color-text-icon-secondary)" : "var(--color-text-icon-primary)"};
  white-space: nowrap;
`, kp = o.span`
  font-size: var(--type-size-caption);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-icon-secondary);
`, zp = o.li`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  list-style: none;

  ${(e) => e.$orientation === "vertical" ? $`
          padding: 0 var(--space-200);
        ` : $`
          padding: var(--space-200) 0;
        `}

  &::before {
    content: '';
    display: block;
    background: ${(e) => e.$complete ? "var(--color-success-success)" : "var(--color-stroke-border)"};
    border-radius: var(--radius-1000);

    ${(e) => e.$orientation === "vertical" ? $`
            width: var(--stroke-100);
            height: ${yo}px;
          ` : $`
            width: ${yo}px;
            height: var(--stroke-100);
          `}
  }
`, Ip = ({ stage: e }) => e === "complete" ? /* @__PURE__ */ r(ko, { "aria-hidden": !0, children: /* @__PURE__ */ r(mp, { children: /* @__PURE__ */ r(Le, {}) }) }) : /* @__PURE__ */ r(ko, { "aria-hidden": !0, children: /* @__PURE__ */ r(yp, { $current: e === "current", children: e === "current" ? /* @__PURE__ */ r(xp, {}) : null }) }), Sp = f.forwardRef(
  ({
    steps: e,
    activeIndex: a = 0,
    orientation: t = "vertical",
    showDescription: i = !0,
    onStepClick: n,
    "aria-label": l = "Progress",
    ...s
  }, c) => {
    const p = Math.max(0, Math.min(a, Math.max(e.length - 1, 0)));
    return /* @__PURE__ */ r(up, { ref: c, "aria-label": l, ...s, children: /* @__PURE__ */ r(gp, { $orientation: t, children: e.map((h, b) => {
      const v = hp(b, p), g = !!n && v !== "current", m = i && !!h.description, u = /* @__PURE__ */ d(J, { children: [
        /* @__PURE__ */ r(Ip, { stage: v }),
        /* @__PURE__ */ d(wp, { children: [
          /* @__PURE__ */ r($p, { $stage: v, children: h.title }),
          m ? /* @__PURE__ */ r(kp, { children: h.description }) : null
        ] })
      ] });
      return /* @__PURE__ */ d(f.Fragment, { children: [
        /* @__PURE__ */ r(
          bp,
          {
            "aria-current": v === "current" ? "step" : void 0,
            children: g ? /* @__PURE__ */ r(
              $o,
              {
                as: "button",
                type: "button",
                $interactive: !0,
                onClick: () => n == null ? void 0 : n(b),
                children: u
              }
            ) : /* @__PURE__ */ r($o, { $interactive: !1, children: u })
          }
        ),
        b < e.length - 1 ? /* @__PURE__ */ r(
          zp,
          {
            "aria-hidden": !0,
            $orientation: t,
            $complete: vp(b, p)
          }
        ) : null
      ] }, `${h.title}-${b}`);
    }) }) });
  }
);
Sp.displayName = "Stepper";
const lr = o(No.Thumb)`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  background: var(--color-surfaces-container);
  border-radius: var(--radius-1000);
  transition: left 150ms ease, width 150ms ease, background 150ms ease;
  will-change: left, width;

  &[data-state='checked'] {
    left: 17px;
  }
  &[data-disabled] {
    background: var(--color-disabled-disabled);
  }
`, Rp = o(No.Root)`
  all: unset;
  box-sizing: border-box;
  position: relative;
  width: 38px;
  height: 24px;
  flex-shrink: 0;
  border-radius: var(--radius-1000);
  background: var(--color-secondary-secondary);
  cursor: pointer;
  transition: background 150ms ease;

  &:hover {
    background: var(--color-secondary-secondary-hover);
  }
  /* Pressed (off): track holds its default color — feedback is the thumb stretch. */
  &:active:not([data-disabled]) {
    background: var(--color-secondary-secondary);
  }
  &[data-state='checked'] {
    background: var(--color-primary-primary);
  }
  &[data-state='checked']:hover {
    background: var(--color-primary-primary-hover);
  }
  &[data-state='checked']:active:not([data-disabled]) {
    background: var(--color-primary-primary-press);
  }

  /* Pressed thumb stretch: 18 → 27px, anchored to the side it sits on
     (off: left edge stays at 3px; on: right edge stays at 3px → left 8px). */
  &:active:not([data-disabled]) ${lr} {
    width: 27px;
  }
  &:active:not([data-disabled]) ${lr}[data-state='checked'] {
    left: 8px;
  }

  /* Focus ring: 2px primary stroke sitting 2px outside the track. */
  &:focus-visible::after {
    content: '';
    position: absolute;
    inset: -4px;
    border: var(--stroke-200) solid var(--color-primary-primary);
    border-radius: var(--radius-1000);
    pointer-events: none;
  }

  &[data-disabled] {
    background: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }
`, Tp = o.label`
  display: inline-flex;
  align-items: center;
  gap: var(--space-100);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  color: var(--color-text-icon-primary);
  cursor: pointer;

  &:has([data-disabled]) {
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }
`, Cp = f.forwardRef(
  ({ label: e, id: a, ...t }, i) => {
    const n = f.useId(), l = a ?? n, s = /* @__PURE__ */ r(Rp, { id: l, ref: i, ...t, children: /* @__PURE__ */ r(lr, {}) });
    return e ? /* @__PURE__ */ d(Tp, { htmlFor: l, children: [
      s,
      /* @__PURE__ */ r("span", { children: e })
    ] }) : s;
  }
);
Cp.displayName = "Switch";
const Lp = 48, zo = 48, Op = {
  default: "var(--color-surfaces-container)",
  inverse: "var(--color-surfaces-on-container-high)"
}, Hp = o.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: ${zo}px minmax(0, 1fr) ${zo}px;
  width: 100%;
  background: ${(e) => Op[e.$stripe]};
  transition: background-color 120ms ease, box-shadow 120ms ease;

  ${(e) => !e.$disabled && !e.$selected ? $`
          &:hover {
            background: var(--color-surfaces-on-container);
            box-shadow: var(--elevation-0);
          }
        ` : ""}

  ${(e) => e.$interactive && !e.$disabled ? $`
          cursor: pointer;
        ` : ""}

  ${(e) => e.$selected && !e.$disabled ? $`
          background: var(--color-tonal-tonal-lightest);
        ` : ""}

  ${(e) => e.$disabled ? $`
          background: var(--color-disabled-disabled);
          color: var(--color-disabled-disabled-inverse);
          cursor: not-allowed;
        ` : ""}
`, Sa = $`
  box-sizing: border-box;
  min-height: ${Lp}px;
  border-top: var(--stroke-100) solid var(--color-stroke-border-low);
  border-bottom: var(--stroke-100) solid var(--color-stroke-border-low);
`, Io = o.div`
  ${Sa}
  display: flex;
  align-items: center;
  justify-content: center;
  /* py-10 px-8 from Figma 171:9845 */
  padding: var(--space-150) var(--space-100);
`, Fp = o.div`
  display: flex;
  align-items: center;
  min-width: 0;
  overflow: hidden;
`, Ep = o.div`
  ${Sa}
  display: flex;
  flex: 1 0 0;
  align-items: center;
  min-width: 0;
  /* py-10 px-8 from Figma 171:9757 */
  padding: var(--space-150) var(--space-100);
`, Dp = o.span`
  flex: 1 0 0;
  min-width: 0;
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-regular);
  /* Figma regular.14.body letter-spacing; no token carries tracking. */
  letter-spacing: 0.2px;
  line-height: 1.35;
  color: var(--color-text-icon-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, Pp = f.forwardRef(
  ({ children: e, ...a }, t) => /* @__PURE__ */ r(Ep, { ref: t, role: "gridcell", ...a, children: typeof e == "string" ? /* @__PURE__ */ r(Dp, { children: e }) : e })
);
Pp.displayName = "DataCell";
const Np = f.forwardRef(
  ({
    children: e,
    stripe: a = "default",
    selected: t = !1,
    disabled: i = !1,
    interactive: n = !1,
    selectable: l = !0,
    onSelectedChange: s,
    checkboxLabel: c = "Select row",
    action: p,
    ...h
  }, b) => /* @__PURE__ */ d(
    Hp,
    {
      ref: b,
      role: "row",
      "aria-selected": l ? t : void 0,
      "aria-disabled": i || void 0,
      $stripe: a,
      $selected: t,
      $disabled: i,
      $interactive: n,
      ...h,
      children: [
        /* @__PURE__ */ r(Io, { role: "gridcell", children: l ? /* @__PURE__ */ r(
          He,
          {
            "aria-label": c,
            checked: !i && t,
            disabled: i,
            onCheckedChange: (v) => s == null ? void 0 : s(v === !0)
          }
        ) : null }),
        /* @__PURE__ */ r(Fp, { children: e }),
        /* @__PURE__ */ r(Io, { role: "gridcell", children: p })
      ]
    }
  )
);
Np.displayName = "DataRow";
const Mp = 48, So = 48, _p = o.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: ${So}px minmax(0, 1fr) ${So}px;
  width: 100%;
  background: var(--color-surfaces-container);
`, Ra = $`
  box-sizing: border-box;
  min-height: ${Mp}px;
  border-bottom: var(--stroke-100) solid var(--color-stroke-border);
`, Ro = o.div`
  ${Ra}
`, Ap = o.div`
  display: flex;
  align-items: center;
  min-width: 0;
  overflow: hidden;
`, Bp = o.div`
  ${Ra}
  display: flex;
  flex: 1 0 0;
  align-items: center;
  gap: var(--space-100);
  min-width: 0;
  /* p-8 from Figma 171:9838 */
  padding: var(--space-100);
`, jp = o.span`
  flex: 0 1 auto;
  min-width: 0;
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-medium);
  /* Figma medium.14.body tracking; no token carries letter-spacing. */
  letter-spacing: 0.1px;
  line-height: 1.35;
  color: ${(e) => e.$active ? "var(--color-primary-primary)" : "var(--color-text-icon-primary)"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, Gp = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-050);
  flex-shrink: 0;
`, Wp = f.forwardRef(
  ({ children: e, active: a = !1, actions: t, ...i }, n) => /* @__PURE__ */ d(Bp, { ref: n, role: "columnheader", ...i, children: [
    /* @__PURE__ */ r(jp, { $active: a, children: e }),
    t ? /* @__PURE__ */ r(Gp, { children: t }) : null
  ] })
);
Wp.displayName = "HeaderCell";
const Yp = f.forwardRef(
  ({ children: e, ...a }, t) => /* @__PURE__ */ d(_p, { role: "row", ...a, children: [
    /* @__PURE__ */ r(Ro, { role: "columnheader" }),
    /* @__PURE__ */ r(Ap, { children: e }),
    /* @__PURE__ */ r(Ro, { role: "columnheader" })
  ] })
);
Yp.displayName = "HeaderRow";
const Up = 48, Zp = o.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-500);
  width: 100%;
  min-height: ${Up}px;
  /* py-8 px-12 from Figma 171:9797 */
  padding: var(--space-100) var(--space-200);
  background: var(--color-surfaces-container);
`, Kp = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-300);
  flex-shrink: 0;
`, Xp = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-300);
`, Jp = o.div`
  display: flex;
  flex: 1 0 0;
  min-width: 0;
  align-items: center;
  justify-content: flex-end;
`, qp = f.forwardRef(
  ({
    checked: e = !1,
    onCheckedChange: a,
    checkboxLabel: t = "Select all rows",
    selected: i = !1,
    actions: n,
    selectedActions: l,
    end: s,
    "aria-label": c = "Table actions",
    ...p
  }, h) => /* @__PURE__ */ d(Zp, { ref: h, role: "toolbar", "aria-label": c, ...p, children: [
    /* @__PURE__ */ d(Kp, { children: [
      /* @__PURE__ */ r(
        He,
        {
          "aria-label": t,
          checked: e,
          onCheckedChange: a
        }
      ),
      i ? l ? /* @__PURE__ */ r(Xp, { children: l }) : null : n
    ] }),
    /* @__PURE__ */ r(Jp, { children: i ? null : s })
  ] })
);
qp.displayName = "ActionBar";
const Qp = o.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  isolation: isolate;
  width: 100%;
  border-radius: var(--radius-50);
  overflow: hidden;
  background: var(--color-surfaces-container);
  font-family: var(--font-family);
`, Vp = o.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`, eh = o.div`
  position: relative;
  z-index: 1;
`, rh = o.div`
  display: flex;
  flex-direction: column;
  ${(e) => e.$scroll ? `
    overflow-y: auto;
    ${Ze}
  ` : ""}
`, oh = f.forwardRef(
  ({
    children: e,
    actionBar: a,
    header: t,
    footer: i,
    maxBodyHeight: n,
    "aria-label": l,
    "aria-labelledby": s,
    ...c
  }, p) => {
    const h = n != null;
    return /* @__PURE__ */ d(Qp, { ref: p, ...c, children: [
      a,
      /* @__PURE__ */ d(Vp, { role: "table", "aria-label": l, "aria-labelledby": s, children: [
        t ? /* @__PURE__ */ r(eh, { role: "rowgroup", children: t }) : null,
        /* @__PURE__ */ r(
          rh,
          {
            role: "rowgroup",
            $scroll: h,
            style: h ? { maxHeight: n } : void 0,
            children: e
          }
        )
      ] }),
      i
    ] });
  }
);
oh.displayName = "Table";
const ah = o.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-500);
  width: 100%;
  /* p-8 from Figma 178:10140 */
  padding: var(--space-100);
  background: var(--color-surfaces-container);
`, th = o.p`
  margin: 0;
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-regular);
  /* Figma regular.14.body tracking; no token carries letter-spacing. */
  letter-spacing: 0.2px;
  line-height: 1.35;
  color: var(--color-text-icon-primary);
  white-space: nowrap;
`, nh = f.forwardRef(
  ({ page: e, pageSize: a, total: t, onPageChange: i, maxPageButtons: n, paginationLabel: l = "Table pages" }, s) => {
    const c = Math.max(1, Math.ceil(t / a)), p = t === 0 ? 0 : (e - 1) * a + 1, h = Math.min(e * a, t);
    return /* @__PURE__ */ d(ah, { ref: s, children: [
      /* @__PURE__ */ d(th, { children: [
        p,
        "–",
        h,
        " of ",
        t
      ] }),
      /* @__PURE__ */ r(
        xa,
        {
          count: c,
          page: e,
          onPageChange: i,
          maxPageButtons: n,
          label: l
        }
      )
    ] });
  }
);
nh.displayName = "TableFooter";
const ih = { md: 40, sm: 32 }, To = { md: 24, sm: 18 }, lh = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-050);
  width: 100%;
  font-family: var(--font-family);
`, sh = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-100);
  width: 100%;
`, Ta = o.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${(e) => ih[e.$size]}px;
  padding: 0 var(--space-200);
  border-radius: var(--radius-200);
  background: var(--color-surfaces-on-container-high);
  border: var(--stroke-100) solid var(--color-stroke-border);
  transition: background 120ms ease, border-color 120ms ease;

  &:hover:not(:focus-within) {
    border-color: var(--color-stroke-border-high);
  }

  /* Finished typing: a filled field rests on the white container surface. */
  &:has(input:not(:placeholder-shown)) {
    background: var(--color-surfaces-container);
  }

  /* Typing (focus): white surface + 1.5px primary border. */
  &:focus-within {
    background: var(--color-surfaces-container);
    border: var(--stroke-150) solid var(--color-primary-primary);
  }

  /* Validation states override the resting/hover/focus chrome. */
  ${(e) => e.$status === "success" && `
    &, &:hover:not(:focus-within), &:focus-within, &:has(input:not(:placeholder-shown)) {
      background: var(--color-success-success-overlay);
      border: var(--stroke-150) solid var(--color-success-success);
    }
  `}
  ${(e) => e.$status === "error" && `
    &, &:hover:not(:focus-within), &:focus-within, &:has(input:not(:placeholder-shown)) {
      background: var(--color-error-error-overlay);
      border: var(--stroke-150) solid var(--color-error-error);
    }
  `}

  /* Disabled: flat fill, no border, everything dims. */
  &:has(input:disabled) {
    background: var(--color-disabled-disabled);
    border-color: transparent;
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }
`, Co = o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  gap: var(--space-050);
  color: var(--color-text-icon-secondary);

  & > svg {
    width: ${(e) => To[e.$size]}px;
    height: ${(e) => To[e.$size]}px;
  }

  ${Ta}:has(input:disabled) & {
    color: var(--color-disabled-disabled-inverse);
  }
`, ch = o.input`
  flex: 1;
  min-width: 0;
  height: 100%;
  padding: 0 var(--space-100);
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  color: var(--color-text-icon-primary);

  &::placeholder {
    color: var(--color-text-icon-placeholder);
  }
  &:disabled {
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
    &::placeholder {
      color: var(--color-disabled-disabled-inverse);
    }
  }
`, dh = f.forwardRef(
  ({
    label: e,
    showLabelInfo: a = !1,
    required: t = !1,
    helperText: i,
    status: n = "default",
    size: l = "md",
    startIcon: s,
    endIcon: c,
    maxLength: p,
    disabled: h,
    id: b,
    value: v,
    defaultValue: g,
    onChange: m,
    onFocus: u,
    onBlur: y,
    ...k
  }, w) => {
    const z = f.useId(), I = b ?? z, L = `${I}-helper`, [T, E] = f.useState(!1), [R, O] = f.useState(String(g ?? "").length), S = v != null ? String(v).length : R, F = i != null || p != null, N = h ? "disabled" : n === "success" ? "success" : n === "error" ? "error" : T ? "info" : "greyscale";
    return /* @__PURE__ */ d(lh, { children: [
      /* @__PURE__ */ d(sh, { children: [
        e ? /* @__PURE__ */ r(
          ae,
          {
            htmlFor: I,
            size: "sm",
            required: t,
            showInfo: a,
            disabled: h,
            children: e
          }
        ) : null,
        /* @__PURE__ */ d(Ta, { $size: l, $status: n, children: [
          s ? /* @__PURE__ */ r(Co, { $size: l, "aria-hidden": !0, children: s }) : null,
          /* @__PURE__ */ r(
            ch,
            {
              ref: w,
              id: I,
              disabled: h,
              required: t,
              maxLength: p,
              value: v,
              defaultValue: g,
              "aria-invalid": n === "error" || void 0,
              "aria-describedby": F ? L : void 0,
              onChange: (_) => {
                O(_.target.value.length), m == null || m(_);
              },
              onFocus: (_) => {
                E(!0), u == null || u(_);
              },
              onBlur: (_) => {
                E(!1), y == null || y(_);
              },
              ...k
            }
          ),
          c ? /* @__PURE__ */ r(Co, { $size: l, "aria-hidden": !0, children: c }) : null
        ] })
      ] }),
      F ? /* @__PURE__ */ r(
        V,
        {
          id: L,
          tone: N,
          showIcon: i != null,
          count: p != null ? S : void 0,
          max: p,
          children: i
        }
      ) : null
    ] });
  }
);
dh.displayName = "TextInput";
const fh = 40, be = { hours: "", minutes: "", period: "AM" }, ph = o.div`
  display: inline-flex;
  flex-direction: column;
  gap: var(--space-050);
  max-width: 100%;
  font-family: var(--font-family);
`, hh = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-050);
  min-width: 0;
`, vh = o.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-800);
  align-items: flex-start;
`, uh = o.div`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  height: ${fh}px;
  border: var(--stroke-100) solid var(--color-stroke-border);
  border-radius: var(--radius-200);
  background: var(--color-surfaces-on-container-high);
  transition: background 120ms ease, border-color 120ms ease;

  &:hover:not(:focus-within) {
    border-color: var(--color-stroke-border-high);
  }

  &:focus-within {
    background: var(--color-surfaces-container);
    border: var(--stroke-150) solid var(--color-primary-primary);
  }

  ${(e) => e.$status === "success" && `
      &, &:hover:not(:focus-within), &:focus-within {
        background: var(--color-success-success-overlay);
        border: var(--stroke-150) solid var(--color-success-success);
      }
    `}

  ${(e) => e.$status === "error" && `
      &, &:hover:not(:focus-within), &:focus-within {
        background: var(--color-error-error-overlay);
        border: var(--stroke-150) solid var(--color-error-error);
      }
    `}

  &:has(input:disabled) {
    background: var(--color-disabled-disabled);
    border-color: transparent;
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }
`, Lo = o.input`
  box-sizing: content-box;
  min-width: 2ch;
  width: auto;
  max-width: 4ch;
  height: 100%;
  padding: 0 ${(e) => e.$edge === "start" ? "var(--space-100)" : "var(--space-200)"}
    0 ${(e) => e.$edge === "start" ? "var(--space-200)" : "var(--space-100)"};
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  line-height: 1.35;
  color: var(--color-text-icon-primary);

  &::placeholder {
    color: var(--color-text-icon-placeholder);
    opacity: 1;
  }

  &:disabled {
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }
`, gh = o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-icon-placeholder);
  font-family: var(--font-family);
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
`, bh = o(Ge.Root)`
  display: inline-flex;
  align-self: stretch;
`, Oo = o(Ge.Item)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 47px;
  padding: 0 var(--space-200);
  border: none;
  background: var(--color-tonal-tonal-secondary-overlay);
  color: var(--color-text-icon-on-tonal-secondary);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-bold);
  line-height: 1.35;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;

  &[data-state='on'] {
    background: var(--color-primary-primary);
    color: var(--color-text-icon-on-primary);
  }

  &:hover:not(:disabled):not([data-state='on']) {
    background: var(--color-tonal-tonal-secondary-overlay-hover);
  }

  &:focus {
    position: relative;
    outline: none;
    z-index: 1;
  }

  &:focus-visible::after {
    position: absolute;
    inset: calc(var(--space-025) * -1);
    border: var(--stroke-200) solid var(--color-primary-primary);
    border-radius: var(--radius-100);
    content: '';
    pointer-events: none;
  }

  &:disabled {
    background: var(--color-disabled-disabled);
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }
`, Ca = (e, a, t) => {
  if (e === "") return "";
  const i = Number(e);
  return Number.isNaN(i) ? "" : String(Math.min(Math.max(i, a), t)).padStart(2, "0");
}, sr = (e, a) => {
  const t = e.replace(/\D/g, "").slice(0, 4);
  if (t.length === 0) return { hours: "", minutes: "", period: a };
  if (t.length <= 2) return { hours: t, minutes: "", period: a };
  const i = t.length === 3 ? t.padStart(4, "0") : t;
  let n = Number(i.slice(0, 2));
  const l = i.slice(2, 4);
  let s = a, c = n;
  return n >= 13 && n <= 23 ? (s = "PM", c = n - 12) : n === 0 ? (s = "AM", c = 12) : n === 12 && (s = "PM"), {
    hours: String(c).padStart(2, "0"),
    minutes: l,
    period: s
  };
}, mh = (e) => {
  if (e.hours === "") return e;
  const a = `${e.hours}${e.minutes}`.replace(/\D/g, "");
  if (a.length >= 3)
    return sr(a.length === 3 ? a.padStart(4, "0") : a, e.period);
  const t = Number(e.hours);
  return t >= 13 && t <= 23 ? { ...e, hours: String(t - 12).padStart(2, "0"), period: "PM" } : t === 0 ? { ...e, hours: "12", period: "AM" } : { ...e, hours: Ca(e.hours, 1, 12) };
}, rr = ({
  label: e,
  showLabelInfo: a,
  required: t,
  status: i,
  disabled: n,
  value: l,
  onChange: s,
  helperId: c,
  ariaLabel: p
}) => {
  const h = f.useId(), b = `${h}-label`, v = `${h}-hours`, g = `${h}-minutes`, m = p ?? e, u = (w) => {
    const z = w.replace(/\D/g, "").slice(0, 4);
    if (z.length < 4) {
      s({ ...l, hours: z });
      return;
    }
    s(sr(z, l.period));
  }, y = (w) => {
    const z = w.replace(/\D/g, "").slice(0, 4);
    if (z.length <= 2) {
      s({ ...l, minutes: z });
      return;
    }
    s(sr(z, l.period));
  }, k = () => {
    s({ ...l, minutes: Ca(l.minutes, 0, 59) });
  };
  return /* @__PURE__ */ d(hh, { children: [
    e ? /* @__PURE__ */ r(
      ae,
      {
        id: b,
        htmlFor: v,
        size: "sm",
        required: t,
        showInfo: a,
        disabled: n,
        children: e
      }
    ) : null,
    /* @__PURE__ */ d(uh, { $status: i, role: "group", "aria-labelledby": e ? b : void 0, "aria-label": p, children: [
      /* @__PURE__ */ r(
        Lo,
        {
          id: v,
          $edge: "start",
          value: l.hours,
          disabled: n,
          required: t,
          inputMode: "numeric",
          autoComplete: "off",
          placeholder: "00",
          "aria-label": `${m} hours`,
          "aria-describedby": c,
          "aria-invalid": i === "error" || void 0,
          onChange: (w) => u(w.target.value),
          onBlur: () => s(mh(l))
        }
      ),
      /* @__PURE__ */ r(gh, { "aria-hidden": !0, children: ":" }),
      /* @__PURE__ */ r(
        Lo,
        {
          id: g,
          $edge: "end",
          value: l.minutes,
          disabled: n,
          required: t,
          inputMode: "numeric",
          autoComplete: "off",
          placeholder: "00",
          "aria-label": `${m} minutes`,
          "aria-describedby": c,
          "aria-invalid": i === "error" || void 0,
          onChange: (w) => y(w.target.value),
          onBlur: () => k()
        }
      ),
      /* @__PURE__ */ d(
        bh,
        {
          type: "single",
          value: l.period,
          onValueChange: (w) => {
            (w === "AM" || w === "PM") && s({ ...l, period: w });
          },
          "aria-label": `${m} period`,
          children: [
            /* @__PURE__ */ r(Oo, { value: "AM", disabled: n, children: "AM" }),
            /* @__PURE__ */ r(Oo, { value: "PM", disabled: n, children: "PM" })
          ]
        }
      )
    ] })
  ] });
}, yh = f.forwardRef(
  ({
    mode: e = "single",
    label: a = "Select time",
    startLabel: t = "Start time",
    endLabel: i = "End time",
    showLabelInfo: n = !1,
    required: l = !1,
    helperText: s,
    showHelper: c = !0,
    status: p = "default",
    disabled: h = !1,
    value: b,
    defaultValue: v,
    onValueChange: g,
    rangeValue: m,
    defaultRangeValue: u,
    onRangeValueChange: y,
    "aria-label": k
  }, w) => {
    const I = `${f.useId()}-helper`, [L, T] = f.useState({ ...be, ...v }), [E, R] = f.useState(() => ({
      start: { ...be, ...u == null ? void 0 : u.start },
      end: { ...be, ...u == null ? void 0 : u.end }
    })), O = { ...be, ...L, ...b }, S = {
      start: { ...be, ...E.start, ...m == null ? void 0 : m.start },
      end: { ...be, ...E.end, ...m == null ? void 0 : m.end }
    }, F = h ? "disabled" : p === "success" ? "success" : p === "error" ? "error" : "greyscale", N = s ?? (e === "range" ? "Enter a start and end time for the range" : "Enter a time"), _ = (C) => {
      T(C), g == null || g(C);
    }, G = (C, D) => {
      const M = { ...S, [C]: D };
      R(M), y == null || y(M);
    };
    return /* @__PURE__ */ d(ph, { ref: w, children: [
      e === "range" ? /* @__PURE__ */ d(vh, { children: [
        /* @__PURE__ */ r(
          rr,
          {
            label: t,
            showLabelInfo: n,
            required: l,
            status: p,
            disabled: h,
            value: S.start,
            onChange: (C) => G("start", C),
            helperId: c ? I : void 0
          }
        ),
        /* @__PURE__ */ r(
          rr,
          {
            label: i,
            showLabelInfo: n,
            required: l,
            status: p,
            disabled: h,
            value: S.end,
            onChange: (C) => G("end", C),
            helperId: c ? I : void 0
          }
        )
      ] }) : /* @__PURE__ */ r(
        rr,
        {
          label: a,
          showLabelInfo: n,
          required: l,
          status: p,
          disabled: h,
          value: O,
          onChange: _,
          helperId: c ? I : void 0,
          ariaLabel: k
        }
      ),
      c ? /* @__PURE__ */ r(V, { id: I, tone: F, children: N }) : null
    ] });
  }
);
yh.displayName = "TimeInput";
const xh = { simple: 640, complex: 480 }, wh = {
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
  neutral: "neutral"
}, $h = he`
  from { opacity: 0; transform: translateY(var(--space-100)); }
  to { opacity: 1; transform: translateY(0); }
`, kh = he`
  from { opacity: 1; }
  to { opacity: 0; }
`, zh = he`
  from { transform: translateX(var(--radix-toast-swipe-end-x, 0)); opacity: 1; }
  to { transform: translateX(calc(var(--radix-toast-swipe-end-x, 0) + 100%)); opacity: 0; }
`, Ih = o(pr.Root)`
  box-sizing: border-box;
  display: block;
  width: 100%;
  max-width: ${(e) => xh[e.$layout]}px;
  border-radius: var(--radius-400);
  overflow: hidden;
  list-style: none;

  /* Figma 1.1 toasts sit on the INVERSE surface (dark in light.a, light in
     dark.a), and every part uses its color/inverse/* twin.

     Figma "win.htc.border": a REAL border in
     --color-inverse-stroke-border-zero-win-hct (fully transparent in
     light/dark, white in win hct). Under Windows High Contrast /
     forced-colors the system repaints borders (and strips box-shadows
     entirely), so this is what gives the surface an edge in that mode. */
  border: var(--stroke-100) solid var(--color-inverse-stroke-border-zero-win-hct);
  background: var(--color-inverse-surfaces-container-blur);

  /* Pop-out floats: background blur + elevation. Inline is the same inverse
     surface, flush — no blur, no shadow. */
  ${(e) => e.$variant === "pop-out" ? $`
          backdrop-filter: blur(45px);
          -webkit-backdrop-filter: blur(45px);
          box-shadow: var(--elevation-3);
        ` : null}

  &[data-swipe='move'] {
    transform: translateX(var(--radix-toast-swipe-move-x, 0));
  }
  &[data-swipe='cancel'] {
    transform: translateX(0);
    transition: transform 200ms ease-out;
  }

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${$h} 200ms ease;
    }
    &[data-state='closed'] {
      animation: ${kh} 150ms ease-in;
    }
    &[data-swipe='end'] {
      animation: ${zh} 150ms ease-out forwards;
    }
  }
`, Sh = o.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-500);
  width: 100%;
  padding: var(--space-300) var(--space-300) var(--space-300) var(--space-500);
`, Rh = o.div`
  display: flex;
  flex: 1 1 0%;
  align-items: center;
  gap: var(--space-300);
  min-width: 0;
`, Th = {
  info: "var(--color-inverse-info-info)",
  success: "var(--color-inverse-success-success)",
  warning: "var(--color-inverse-warning-warn)",
  error: "var(--color-inverse-error-error)",
  neutral: "var(--color-inverse-text-icon-primary)"
}, Ch = o(Je)`
  margin: calc(-1 * var(--space-050));
  color: ${(e) => Th[e.$status]};
`, Lh = o.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
`, Oh = o.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-300);
  width: 100%;
  padding: var(--space-300);
`, Hh = o.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: var(--space-600);
  width: 100%;
`, Fh = o.div`
  display: flex;
  flex: 1 1 0%;
  align-items: flex-start;
  gap: var(--space-300);
  min-width: 0;
`, Eh = o.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-075);
  min-width: 0;
`, Dh = o.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-300);
  width: 100%;
  /* Indent past the 24px icon + 16px gap so actions/metadata align under the
     text column, not the icon. */
  padding-left: var(--space-700);
`, Ph = o.span`
  flex: 1 1 0%;
  color: var(--color-inverse-text-icon-secondary);
  font-family: var(--font-family);
  font-size: var(--type-size-caption);
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.2px;
  line-height: 1.35;
`, Nh = o.div`
  display: flex;
  flex: none;
  align-items: center;
  gap: var(--space-100);
`, Ho = o(pr.Title)`
  width: 100%;
  margin: 0;
  color: var(--color-inverse-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
`, Fo = o(pr.Description)`
  width: 100%;
  margin: 0;
  color: ${(e) => e.$layout === "complex" ? "var(--color-inverse-text-icon-secondary)" : "var(--color-inverse-text-icon-primary)"};
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.2px;
  line-height: 1.35;
`, Mh = o.div`
  display: flex;
  flex: none;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-100);
`, _h = f.forwardRef(
  ({
    status: e = "info",
    variant: a = "pop-out",
    layout: t = "simple",
    title: i,
    description: n,
    timestamp: l,
    icon: s,
    actions: c,
    secondaryActionLabel: p,
    onSecondaryAction: h,
    secondaryActionDisabled: b = !1,
    primaryActionLabel: v,
    onPrimaryAction: g,
    primaryActionDisabled: m = !1,
    onDismiss: u,
    dismissLabel: y = "Dismiss notification",
    open: k,
    defaultOpen: w,
    onOpenChange: z,
    duration: I,
    type: L,
    ...T
  }, E) => {
    const R = c !== void 0 || !!p || !!v, O = /* @__PURE__ */ d(J, { children: [
      p ? /* @__PURE__ */ r(
        Z,
        {
          size: "sm",
          intent: "secondary",
          variant: "ghost",
          tone: "inverse",
          onClick: h,
          disabled: b,
          children: p
        }
      ) : null,
      v ? /* @__PURE__ */ r(Z, { size: "sm", tone: "inverse", onClick: g, disabled: m, children: v }) : null
    ] }), S = s === null ? null : s ?? /* @__PURE__ */ r(Ch, { type: wh[e], $status: e, decorative: !0 }), F = u ? /* @__PURE__ */ r(
      j,
      {
        label: y,
        icon: /* @__PURE__ */ r(pe, {}),
        size: "sm",
        intent: "secondary",
        variant: "ghost",
        tone: "inverse",
        onClick: u
      }
    ) : null;
    return /* @__PURE__ */ r(
      Ih,
      {
        ref: E,
        $variant: a,
        $layout: t,
        open: k,
        defaultOpen: w,
        onOpenChange: z,
        duration: I,
        type: L,
        ...T,
        children: t === "complex" ? /* @__PURE__ */ d(Oh, { children: [
          /* @__PURE__ */ d(Hh, { children: [
            /* @__PURE__ */ d(Fh, { children: [
              S,
              i || n ? /* @__PURE__ */ d(Eh, { children: [
                i ? /* @__PURE__ */ r(Ho, { children: i }) : null,
                n ? /* @__PURE__ */ r(Fo, { $layout: t, children: n }) : null
              ] }) : null
            ] }),
            F
          ] }),
          l || R ? /* @__PURE__ */ d(Dh, { children: [
            l ? /* @__PURE__ */ r(Ph, { children: l }) : /* @__PURE__ */ r("span", { "aria-hidden": !0, style: { flex: 1 } }),
            R ? /* @__PURE__ */ r(Nh, { children: c ?? O }) : null
          ] }) : null
        ] }) : /* @__PURE__ */ d(Sh, { children: [
          /* @__PURE__ */ d(Rh, { children: [
            S,
            i || n ? /* @__PURE__ */ d(Lh, { children: [
              i ? /* @__PURE__ */ r(Ho, { children: i }) : null,
              n ? /* @__PURE__ */ r(Fo, { $layout: t, children: n }) : null
            ] }) : null
          ] }),
          R || u ? /* @__PURE__ */ d(Mh, { children: [
            R ? c ?? O : null,
            F
          ] }) : null
        ] })
      }
    );
  }
);
_h.displayName = "Toast";
const Ah = o(ke.Trigger)`
  all: unset;
  display: inline-flex;
  box-sizing: border-box;
  border-radius: var(--radius-100);
  cursor: help;

  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: var(--space-025);
  }
`, Bh = o(ke.Content)`
  z-index: 1100;
  box-sizing: border-box;
  padding: var(--space-100) var(--space-200);
  border-radius: var(--radius-200);
  background: var(--color-surfaces-inverse-container);
  color: var(--color-text-icon-inverse);
  font-family: var(--font-family);
  font-size: var(--type-size-caption);
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  letter-spacing: 0.2px;
  overflow-wrap: anywhere;

  /* Figma elevation/2 (node 128:8606). */
  box-shadow: var(--elevation-2);

  &[data-state='delayed-open'],
  &[data-state='instant-open'] {
    animation: tooltip-in 120ms ease-out;
  }

  @keyframes tooltip-in {
    from {
      opacity: 0;
      transform: translateY(var(--space-025));
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`, jh = f.forwardRef(
  ({
    trigger: e,
    children: a,
    triggerAriaLabel: t,
    open: i,
    defaultOpen: n = !1,
    onOpenChange: l,
    delayDuration: s = 0,
    side: c = "top",
    align: p = "center",
    sideOffset: h = 8,
    maxWidth: b = 280
  }, v) => /* @__PURE__ */ r(ke.Provider, { delayDuration: s, children: /* @__PURE__ */ d(
    ke.Root,
    {
      open: i,
      defaultOpen: n,
      onOpenChange: l,
      delayDuration: s,
      children: [
        /* @__PURE__ */ r(Ah, { type: "button", "aria-label": t, children: e }),
        /* @__PURE__ */ r(ke.Portal, { children: /* @__PURE__ */ r(
          Bh,
          {
            ref: v,
            side: c,
            align: p,
            sideOffset: h,
            style: { maxWidth: b },
            children: a
          }
        ) })
      ]
    }
  ) })
);
jh.displayName = "SimpleTooltip";
const Gh = o(fe.Trigger)`
  all: unset;
  display: inline-flex;
  box-sizing: border-box;
  border-radius: var(--radius-100);
  cursor: pointer;

  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: var(--space-025);
  }
`, Wh = o(fe.Content)`
  z-index: 1100;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--space-300);
  padding: var(--space-500);
  border-radius: var(--radius-400);
  background: var(--color-surfaces-container-blur-high);
  color: var(--color-text-icon-primary);
  backdrop-filter: blur(45px);

  /* Figma node 128:8611 — deliberately stronger than Simple Tooltip's
     elevation/2; the exported values are exactly elevation/5. */
  box-shadow: var(--elevation-5);

  &[data-state='open'] {
    animation: rich-tooltip-in 160ms ease-out;
  }

  @keyframes rich-tooltip-in {
    from {
      opacity: 0;
      transform: translateY(var(--space-050)) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`, Yh = o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-100);
  width: 100%;
`, Uh = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-100);
  width: 100%;
`, Zh = o.h2`
  flex: 1;
  min-width: 0;
  margin: 0;
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-subtitle);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
`, Kh = o.div`
  width: 100%;
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  letter-spacing: 0.2px;

  & > :first-child {
    margin-top: 0;
  }
  & > :last-child {
    margin-bottom: 0;
  }
`, Xh = o.div`
  display: flex;
  align-items: center;
  gap: var(--space-200);
  width: 100%;
  min-height: 48px;
  padding-top: var(--space-100);
`, Eo = o.span`
  flex: 1;
  min-width: 0;
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
  letter-spacing: 0.1px;
`, Jh = o.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-300);
`, qh = f.forwardRef(
  ({
    trigger: e,
    children: a,
    triggerAriaLabel: t,
    title: i = "Title",
    showHeader: n = !0,
    showTitle: l = !0,
    showClose: s = !0,
    showFooter: c = !0,
    showStepper: p = !0,
    stepperText: h = "Step 1 of 4",
    actions: b,
    secondaryActionLabel: v = "Secondary",
    primaryActionLabel: g = "Primary",
    onSecondaryAction: m,
    onPrimaryAction: u,
    onClose: y,
    open: k,
    defaultOpen: w = !1,
    onOpenChange: z,
    side: I = "bottom",
    align: L = "center",
    sideOffset: T = 12,
    width: E = 448
  }, R) => {
    const [O, S] = f.useState(w), F = k ?? O, N = f.useId(), _ = f.useId(), G = (D) => {
      k == null && S(D), z == null || z(D);
    }, C = /* @__PURE__ */ d(J, { children: [
      /* @__PURE__ */ r(Z, { size: "md", intent: "secondary", variant: "ghost", onClick: m, children: v }),
      /* @__PURE__ */ r(Z, { size: "md", onClick: u, children: g })
    ] });
    return /* @__PURE__ */ d(fe.Root, { open: F, onOpenChange: G, children: [
      /* @__PURE__ */ r(Gh, { type: "button", "aria-label": t, children: e }),
      /* @__PURE__ */ r(fe.Portal, { children: /* @__PURE__ */ d(
        Wh,
        {
          ref: R,
          side: I,
          align: L,
          sideOffset: T,
          "aria-labelledby": n && l ? N : void 0,
          "aria-describedby": _,
          style: { width: E, maxWidth: "calc(100vw - var(--space-500) * 2)" },
          children: [
            /* @__PURE__ */ d(Yh, { children: [
              n && (l || s) ? /* @__PURE__ */ d(Uh, { children: [
                l ? /* @__PURE__ */ r(Zh, { id: N, children: i }) : null,
                s ? /* @__PURE__ */ r(
                  j,
                  {
                    size: "sm",
                    intent: "secondary",
                    variant: "ghost",
                    label: "Close tooltip",
                    icon: /* @__PURE__ */ r(pe, {}),
                    onClick: () => {
                      G(!1), y == null || y();
                    }
                  }
                ) : null
              ] }) : null,
              /* @__PURE__ */ r(Kh, { id: _, children: a })
            ] }),
            c ? /* @__PURE__ */ d(Xh, { children: [
              p ? /* @__PURE__ */ r(Eo, { children: h }) : /* @__PURE__ */ r(Eo, { "aria-hidden": !0 }),
              /* @__PURE__ */ r(Jh, { children: b ?? C })
            ] }) : null
          ]
        }
      ) })
    ] });
  }
);
qh.displayName = "RichTooltip";
const Qh = o(q.Root)`
  display: flex;
  align-items: flex-start;
  gap: var(--space-500);
  font-family: var(--font-family);
`, Vh = o(q.List)`
  display: flex;
  flex-direction: column;
  flex: none;
  gap: var(--space-025);
  padding: var(--space-050);
  border-radius: var(--radius-200);
`, e0 = o(q.Content)`
  flex: 1 1 0%;
  min-width: 0;
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  color: var(--color-text-icon-primary);

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: var(--space-025);
  }
`, r0 = f.forwardRef(
  (e, a) => /* @__PURE__ */ r(Qh, { ref: a, ...e, orientation: "vertical" })
);
r0.displayName = "VerticalTabs";
const o0 = f.forwardRef(
  (e, a) => /* @__PURE__ */ r(Vh, { ref: a, ...e })
);
o0.displayName = "VerticalTabsList";
const a0 = f.forwardRef(
  (e, a) => /* @__PURE__ */ r(e0, { ref: a, ...e })
);
a0.displayName = "VerticalTabsContent";
const t0 = 32, n0 = 4, i0 = 16, l0 = o(q.Trigger)`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-300);
  width: 100%;
  height: ${t0}px;
  padding: var(--space-050) var(--space-100) var(--space-050) var(--space-300);
  border: none;
  appearance: none;
  border-radius: var(--radius-150);
  background: transparent;
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.1px;
  line-height: 1.35;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  transition: background 120ms ease;

  /* Not selected (Figma status="not selected 2"). */
  &:hover:not(:disabled) {
    background: var(--color-tonal-tonal-secondary-overlay-hover);
  }
  &:active:not(:disabled) {
    background: var(--color-tonal-tonal-secondary-overlay-press);
  }

  /* Selected — Radix drives data-state, so selection is never tracked here.
     Text uses on-tonal so HCT stays readable (primary === tonal fill there). */
  &[data-state='active'] {
    background: var(--color-tonal-tonal-overlay);
    color: var(--color-text-icon-on-tonal);
    font-weight: var(--font-weight-bold);
  }
  &[data-state='active']:hover:not(:disabled) {
    background: var(--color-tonal-tonal-overlay-hover);
  }
  &[data-state='active']:active:not(:disabled) {
    background: var(--color-tonal-tonal-overlay-press);
  }

  /* The leading indicator. Figma drops it on the disabled+selected variant, so
     it's tied to :not(:disabled) rather than to selection alone. */
  &[data-state='active']:not(:disabled)::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: ${n0}px;
    height: ${i0}px;
    border-radius: var(--radius-1000);
    background: var(--color-text-icon-on-tonal);
  }

  /* Disabled wins over the selected treatment (matching Figma: no fill, no
     indicator, and back to medium weight). */
  &:disabled {
    cursor: not-allowed;
    background: transparent;
    color: var(--color-disabled-disabled-inverse);
    font-weight: var(--font-weight-medium);
  }

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: calc(-1 * var(--stroke-200));
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`, s0 = o.span`
  flex: 1 1 0%;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, c0 = o.span`
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  color: currentColor;
  transform: rotate(${(e) => e.$expanded ? "180deg" : "0deg"});
  transition: transform 150ms ease;

  svg {
    width: 24px;
    height: 24px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`, d0 = f.forwardRef(
  ({ children: e, expanded: a, onExpandedChange: t, onClick: i, ...n }, l) => {
    const s = a !== void 0;
    return /* @__PURE__ */ d(
      l0,
      {
        ref: l,
        "aria-expanded": s ? a : void 0,
        onClick: (c) => {
          i == null || i(c), s && (t == null || t(!a));
        },
        ...n,
        children: [
          /* @__PURE__ */ r(s0, { children: e }),
          s ? /* @__PURE__ */ r(c0, { $expanded: !!a, "aria-hidden": !0, children: /* @__PURE__ */ r(Ce, {}) }) : null
        ]
      }
    );
  }
);
d0.displayName = "VerticalTabItem";
const f0 = 32, p0 = o(q.Trigger)`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-300);
  width: 100%;
  height: ${f0}px;
  /* The 32px leading inset is what marks this row as nested. */
  padding: var(--space-050) var(--space-100) var(--space-050) var(--space-600);
  border: none;
  appearance: none;
  border-radius: var(--radius-150);
  background: transparent;
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.1px;
  line-height: 1.35;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  transition: background 120ms ease;

  /* Not selected. */
  &:hover:not(:disabled) {
    background: var(--color-tonal-tonal-secondary-overlay-hover);
  }
  &:active:not(:disabled) {
    background: var(--color-tonal-tonal-secondary-overlay-press);
  }

  /* Selected: bold label; on-tonal when a tonal fill appears (HCT-safe). */
  &[data-state='active'] {
    color: var(--color-primary-primary);
    font-weight: var(--font-weight-bold);
  }
  &[data-state='active']:hover:not(:disabled) {
    background: var(--color-tonal-tonal-overlay-hover);
    color: var(--color-text-icon-on-tonal);
  }
  &[data-state='active']:active:not(:disabled) {
    background: var(--color-tonal-tonal-overlay-press);
    color: var(--color-text-icon-on-tonal);
  }

  /* Figma gives the sub-item a solid disabled fill, where the parent row stays
     transparent. Kept faithful rather than normalised — see the docs page. */
  &:disabled {
    cursor: not-allowed;
    background: var(--color-disabled-disabled);
    color: var(--color-disabled-disabled-inverse);
    font-weight: var(--font-weight-medium);
  }

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: calc(-1 * var(--stroke-200));
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`, h0 = o.span`
  flex: 1 1 0%;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, v0 = f.forwardRef(
  ({ children: e, ...a }, t) => /* @__PURE__ */ r(p0, { ref: t, ...a, children: /* @__PURE__ */ r(h0, { children: e }) })
);
v0.displayName = "VerticalTabSubItem";
const u0 = o.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-300);
  width: 100%;
  padding: var(--space-100) var(--space-300) var(--space-050);
  color: var(--color-text-icon-secondary);
  font-family: var(--font-family);
  font-size: var(--type-size-caption);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.2px;
  line-height: 1.35;
  white-space: nowrap;
`, g0 = o.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  padding: var(--space-100) var(--space-100) var(--space-300);
`, b0 = o(Oe)`
  width: 100%;
`, m0 = f.forwardRef(({ children: e, ...a }, t) => /* @__PURE__ */ r(u0, { ref: t, ...a, children: e }));
m0.displayName = "VerticalTabsSectionHeader";
const y0 = f.forwardRef(
  (e, a) => /* @__PURE__ */ r(g0, { ref: a, ...e, children: /* @__PURE__ */ r(b0, { decorative: !0, weight: "primary" }) })
);
y0.displayName = "VerticalTabsDivider";
export {
  qn as AI_CONTEXT_OPTIONS,
  bn as Accordion,
  mn as AccordionItem,
  qp as ActionBar,
  oa as AiContextMenu,
  ta as AiFileAttachment,
  na as AiModeToggle,
  zi as AiQueryInput,
  la as Avatar,
  sa as Badge,
  Xi as Breadcrumb,
  Z as Button,
  yt as CakeGlobalStyle,
  I0 as CakeProvider,
  xt as CakeThemeProvider,
  yr as Calendar,
  Qi as Card,
  He as Checkbox,
  ea as Chip,
  wl as ContentCard,
  Dl as ContentSwitcher,
  Nl as Counter,
  Pp as DataCell,
  Np as DataRow,
  ua as DateInput,
  us as DateRangePicker,
  Oe as Divider,
  Is as Dropdown,
  As as FileUpload,
  Wp as HeaderCell,
  Yp as HeaderRow,
  V as HelperString,
  cl as HeroCard,
  ec as HorizontalTabItem,
  Us as HorizontalTabs,
  Ks as HorizontalTabsContent,
  Zs as HorizontalTabsList,
  j as IconButton,
  ae as InputLabel,
  ca as Link,
  Ke as MenuContainer,
  Kn as MenuHeader,
  Ie as MenuItem,
  Fc as Modal,
  mc as ModalContent,
  kc as ModalFooter,
  Je as ModalIcon,
  ma as ModalTitle,
  Xc as Notification,
  nd as NotificationPanel,
  xr as NumberDropdown,
  ya as NumberInput,
  xa as Pagination,
  Gd as PasswordInput,
  Xo as PasswordMenu,
  qd as PinInput,
  Ko as ProgressBar,
  of as Radio,
  rf as RadioGroup,
  pp as RangeSlider,
  sf as Rating,
  qh as RichTooltip,
  Fd as RowsPerPage,
  mr as Scrollbar,
  pf as Sidebar,
  Of as SidebarBlock,
  hf as SidebarContent,
  wr as SidebarDivider,
  kf as SidebarItem,
  $a as SidebarList,
  Qf as SidebarNav,
  Df as SidebarSectionHeader,
  Rf as SidebarSubItem,
  Ol as SimpleCard,
  jh as SimpleTooltip,
  fp as Slider,
  aa as Spinner,
  Sp as Stepper,
  Cp as Switch,
  oh as Table,
  nh as TableFooter,
  dh as TextInput,
  yh as TimeInput,
  _h as Toast,
  d0 as VerticalTabItem,
  v0 as VerticalTabSubItem,
  r0 as VerticalTabs,
  a0 as VerticalTabsContent,
  y0 as VerticalTabsDivider,
  o0 as VerticalTabsList,
  m0 as VerticalTabsSectionHeader,
  Ml as YEAR_FUTURE_WINDOW,
  Ee as dateToDisplay,
  _l as expandTwoDigitYear,
  re as formatDateInput,
  Ze as nativeScrollbarStyles,
  or as parseDisplayDate,
  mt as themes
};
//# sourceMappingURL=index.js.map
