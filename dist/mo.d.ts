import { MathMLElement, TemplateResult } from './mathml-element.js';
export declare type MathOperatorForm = 'prefix' | 'infix' | 'postfix';
export declare class MathOElement extends MathMLElement {
    form?: MathOperatorForm;
    stretchy?: boolean;
    private formStyle;
    render(): TemplateResult;
    updated(): void;
    private onSlotChange;
}
