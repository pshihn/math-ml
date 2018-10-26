import { MathMLElement, TemplateResult, MathAlignType } from './mathml-element.js';
export declare class MathFracElement extends MathMLElement {
    bevelled: boolean;
    numalign: MathAlignType;
    denomalign: MathAlignType;
    render(): TemplateResult;
    updated(): void;
    private refreshSlot;
    private updateBevlled;
    private drawBevelledDivider;
}
