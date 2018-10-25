import { TemplateResult } from './mathml-element.js';
import { MathTableBaseElement, MathBorderType } from './mtable-base.js';
export declare class MathTableElement extends MathTableBaseElement {
    columnlines?: MathBorderType;
    rowlines?: MathBorderType;
    frame?: MathBorderType;
    columnspacing: string;
    rowspacing: string;
    framespacing: string;
    width?: string;
    render(): TemplateResult;
    updated(): void;
}
