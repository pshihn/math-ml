import { TemplateResult, PropertyValues } from './mathml-element.js';
import { MathTableBaseElement } from './mtable-base.js';
export declare class MathLabeledTRElement extends MathTableBaseElement {
    render(): TemplateResult;
    updated(propVals: PropertyValues): void;
}
