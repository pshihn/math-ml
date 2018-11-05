import { MathMLElement, PropertyValues, TemplateResult, MathAlignType } from './mathml-element.js';
export declare class MathOverElement extends MathMLElement {
    accent: boolean;
    align: MathAlignType;
    render(): TemplateResult;
    updated(propVals: PropertyValues): void;
}
