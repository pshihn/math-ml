import { MathMLElement, TemplateResult } from './mathml-element.js';
import './mo.js';
export declare class MathFencedElement extends MathMLElement {
    close: string;
    open: string;
    separators: string;
    render(): TemplateResult;
    updated(): void;
    private isStretchyString;
    private nextSeparator;
    private refreshSlot;
}
