import { LitElement, PropertyValues } from 'lit-element';
export { html, PropertyValues, TemplateResult, property, customElement } from 'lit-element';
export declare class MathMLElement extends LitElement {
    mathbackground?: string;
    mathcolor?: string;
    updated(propVals: PropertyValues): void;
}
export declare type MathAlignType = 'left' | 'center' | 'right';
export declare type MathColumnAlignType = 'left' | 'center' | 'right';
export declare type MathRowAlignType = 'axis' | 'baseline' | 'bottom' | 'center' | 'top';
export declare type MathBorderType = 'none' | 'solid' | 'dashed';
