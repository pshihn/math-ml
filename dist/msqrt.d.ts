import { MathMLElement, TemplateResult } from './mathml-element.js';
export declare class MathSqrtElement extends MathMLElement {
    render(): TemplateResult;
    updated(): void;
    private onSlotCange;
    private drawRoot;
}
