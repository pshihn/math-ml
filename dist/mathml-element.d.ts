import { LitElement, PropertyValues } from '@polymer/lit-element/lit-element.js';
export { html, PropertyValues } from '@polymer/lit-element/lit-element.js';
export { TemplateResult } from 'lit-html/lit-html.js';
export { property } from '@polymer/lit-element/lib/decorators';
export declare class MathMLElement extends LitElement {
    mathbackground?: string;
    mathcolor?: string;
    updated(propVals: PropertyValues): void;
}
export declare function element(name: string): (clazz: import("@polymer/lit-element/lib/decorators").Constructor<HTMLElement>) => any;
export declare type MathAlignType = 'left' | 'center' | 'right';
export declare type MathColumnAlignType = 'left' | 'center' | 'right';
export declare type MathRowAlignType = 'axis' | 'baseline' | 'bottom' | 'center' | 'top';
export declare type MathBorderType = 'none' | 'solid' | 'dashed';
