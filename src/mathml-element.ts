import { LitElement, PropertyValues } from '@polymer/lit-element/lit-element.js';
export { html, PropertyValues } from '@polymer/lit-element/lit-element.js';
export { TemplateResult } from 'lit-html/lit-html.js';
export { property } from '@polymer/lit-element/lib/decorators';
import { customElement, property } from '@polymer/lit-element/lib/decorators';

export class MathMLElement extends LitElement {
  @property({ type: String }) mathbackground?: string;
  @property({ type: String }) mathcolor?: string;

  updated(propVals: PropertyValues) {
    if (propVals.has('mathcolor')) {
      this.style.setProperty('--math-color', this.mathcolor || null);
    }
    if (propVals.has('mathbackground')) {
      this.style.setProperty('--math-background', this.mathbackground || null);
    }
  }
}

export function element(name: string) {
  return customElement(name as any);
}

export declare type MathAlignType = 'left' | 'center' | 'right';
export declare type MathColumnAlignType = 'left' | 'center' | 'right';
export declare type MathRowAlignType = 'axis' | 'baseline' | 'bottom' | 'center' | 'top';
export declare type MathBorderType = 'none' | 'solid' | 'dashed';