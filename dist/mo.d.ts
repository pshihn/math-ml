import { MathMLElement, TemplateResult, PropertyValues } from './mathml-element.js';
export declare type MathOperatorForm = 'prefix' | 'infix' | 'postfix';
export declare class MathOElement extends MathMLElement {
    form?: MathOperatorForm;
    stretchy?: string;
    private formStyle;
    render(): TemplateResult;
    updated(propVals: PropertyValues): void;
    private onSlotChange;
}
