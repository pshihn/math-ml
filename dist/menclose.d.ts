import { MathMLElement, TemplateResult } from './mathml-element.js';
export declare class MathEncloseElement extends MathMLElement {
    notation: string;
    render(): TemplateResult;
    updated(): void;
    private refresh;
    private adjustPadding;
    private redraw;
}
