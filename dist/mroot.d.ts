import { MathMLElement, TemplateResult } from './mathml-element.js';
export declare class MathRootElement extends MathMLElement {
    render(): TemplateResult;
    updated(): void;
    private onSlotCange;
    private drawRoot;
}
