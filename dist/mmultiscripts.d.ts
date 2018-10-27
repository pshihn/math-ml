import { MathMLElement, TemplateResult } from './mathml-element.js';
export declare class MathMultiScriptsElement extends MathMLElement {
    render(): TemplateResult;
    updated(): void;
    private clearNodes;
    private refreshSlot;
}
