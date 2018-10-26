import { MathMLElement, TemplateResult, MathAlignType } from './mathml-element.js';
export declare class MathOverElement extends MathMLElement {
    accent: boolean;
    align: MathAlignType;
    render(): TemplateResult;
    updated(): void;
}
