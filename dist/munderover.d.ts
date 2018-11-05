import { MathMLElement, PropertyValues, TemplateResult, MathAlignType } from './mathml-element.js';
export declare class MathUnderOverElement extends MathMLElement {
    accent: boolean;
    accentunder: boolean;
    align: MathAlignType;
    render(): TemplateResult;
    updated(propVals: PropertyValues): void;
    private refreshSlot;
}
