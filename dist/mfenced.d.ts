import { MathMLElement, TemplateResult } from './mathml-element.js';
export declare class MathFencedElement extends MathMLElement {
    close: string;
    open: string;
    separators: string;
    render(): TemplateResult;
}
