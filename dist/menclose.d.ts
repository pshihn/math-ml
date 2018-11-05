import { MathMLElement, TemplateResult, PropertyValues } from './mathml-element.js';
export declare class MathEncloseElement extends MathMLElement {
    notation: string;
    render(): TemplateResult;
    updated(propVals: PropertyValues): void;
    private refresh;
    private adjustPadding;
    private redraw;
}
