import { MathMLElement, PropertyValues, TemplateResult } from './mathml-element.js';
export declare class MathSpaceElement extends MathMLElement {
    width: string;
    height: string;
    depth: string;
    render(): TemplateResult;
    updated(propVals: PropertyValues): void;
}
