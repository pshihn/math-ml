import { PropertyValues, TemplateResult } from './mathml-element.js';
import { MathTableBaseElement } from './mtable-base.js';
export declare class MathTDElement extends MathTableBaseElement {
    render(): TemplateResult;
    updated(propVals: PropertyValues): void;
}
