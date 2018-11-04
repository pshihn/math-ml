import { MathMLElement, TemplateResult } from './mathml-element.js';
export declare class MathMultiScriptsElement extends MathMLElement {
    private pendingLayout;
    render(): TemplateResult;
    private refreshSlot;
}
