import { MathMLElement, PropertyValues, TemplateResult } from './mathml-element.js';
export declare class MathPaddedElement extends MathMLElement {
    height?: string;
    width?: string;
    render(): TemplateResult;
    updated(propVals: PropertyValues): void;
    private refresh;
}
