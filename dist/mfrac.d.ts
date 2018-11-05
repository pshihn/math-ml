import { MathMLElement, TemplateResult, MathAlignType, PropertyValues } from './mathml-element.js';
export declare class MathFracElement extends MathMLElement {
    bevelled: boolean;
    numalign: MathAlignType;
    denomalign: MathAlignType;
    linethickness?: string;
    render(): TemplateResult;
    updated(propVals: PropertyValues): void;
    private refreshSlot;
    private updateBevlled;
    private drawBevelledDivider;
}
