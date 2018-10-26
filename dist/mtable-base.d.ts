import { MathMLElement, MathRowAlignType } from './mathml-element.js';
export declare class MathTableBaseElement extends MathMLElement {
    columnalign?: string;
    rowalign?: MathRowAlignType;
    protected updateAlignment(): void;
}
