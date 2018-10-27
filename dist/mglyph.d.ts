import { MathMLElement, TemplateResult } from './mathml-element.js';
export declare class MathGlyphElement extends MathMLElement {
    src?: string;
    width: string;
    height: string;
    valign: string;
    alt: string;
    render(): TemplateResult;
}
