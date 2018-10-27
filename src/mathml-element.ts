import { LitElement } from '@polymer/lit-element/lit-element.js';
export { html } from '@polymer/lit-element/lit-element.js';
export { TemplateResult } from 'lit-html/lit-html.js';
export { property } from '@polymer/lit-element/lib/decorators';
import { customElement } from '@polymer/lit-element/lib/decorators';

export class MathMLElement extends LitElement {
}

export function element(name: string) {
  return customElement(name as any);
}

export declare type MathAlignType = 'left' | 'center' | 'right';
export declare type MathColumnAlignType = 'left' | 'center' | 'right';
export declare type MathRowAlignType = 'axis' | 'baseline' | 'bottom' | 'center' | 'top';
export declare type MathBorderType = 'none' | 'solid' | 'dashed';