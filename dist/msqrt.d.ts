import { MathMLElement, PropertyValues, TemplateResult } from './mathml-element.js';
export declare class MathSqrtElement extends MathMLElement {
    render(): TemplateResult;
    updated(propVals: PropertyValues): void;
    private onSlotCange;
    private drawRoot;
}
