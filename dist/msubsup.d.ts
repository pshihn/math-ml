import { MathMLElement, TemplateResult } from './mathml-element.js';
export declare class MathSubSupElement extends MathMLElement {
    private pendingLayout;
    render(): TemplateResult;
    refreshSlot(): void;
}
