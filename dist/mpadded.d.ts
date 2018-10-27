import { MathMLElement, TemplateResult } from './mathml-element.js';
export declare class MathPaddedElement extends MathMLElement {
    height?: string;
    width?: string;
    render(): TemplateResult;
    updated(): void;
    private refresh;
}
