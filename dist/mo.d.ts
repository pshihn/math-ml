import { MathMLElement, TemplateResult } from './mathml-element.js';
export declare type MathOperatorForm = 'prefix' | 'infix' | 'postfix';
export declare class MathOElement extends MathMLElement {
    private formStyle;
    form?: MathOperatorForm;
    fence: boolean;
    accent: boolean;
    largeop: boolean;
    render(): TemplateResult;
    updated(): void;
}
