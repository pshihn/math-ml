import { MathMLElement, TemplateResult, MathAlignType } from './mathml-element.js';
export declare class MathUnderOverElement extends MathMLElement {
    accent: boolean;
    accentunder: boolean;
    align: MathAlignType;
    render(): TemplateResult;
    updated(): void;
    private refreshSlot;
}
