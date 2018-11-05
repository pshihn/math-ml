import { MathMLElement, PropertyValues, TemplateResult, MathAlignType } from './mathml-element.js';
export declare class MathUnderElement extends MathMLElement {
    accentunder: boolean;
    align: MathAlignType;
    render(): TemplateResult;
    updated(propVals: PropertyValues): void;
}
