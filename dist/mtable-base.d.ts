import { MathMLElement } from './mathml-element.js';
export declare type MathColumnAlignType = 'left' | 'center' | 'right';
export declare type MathRowAlignType = 'axis' | 'baseline' | 'bottom' | 'center' | 'top';
export declare type MathBorderType = 'none' | 'solid' | 'dashed';
export declare class MathTableBaseElement extends MathMLElement {
    columnalign?: string;
    rowalign?: MathRowAlignType;
    protected updateAlignment(): void;
}
