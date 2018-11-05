import { PropertyValues, TemplateResult, MathBorderType } from './mathml-element.js';
import { MathTableBaseElement } from './mtable-base.js';
export declare class MathTableElement extends MathTableBaseElement {
    columnlines?: MathBorderType;
    rowlines?: MathBorderType;
    frame?: MathBorderType;
    columnspacing: string;
    rowspacing: string;
    framespacing: string;
    width?: string;
    constructor();
    render(): TemplateResult;
    updated(propVals: PropertyValues): void;
}
