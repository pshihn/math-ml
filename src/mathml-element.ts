import { LitElement, PropertyValues, property } from 'lit-element';
export { html, PropertyValues, TemplateResult, property, customElement } from 'lit-element';

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

export declare type MathAlignType = 'left' | 'center' | 'right';
export declare type MathColumnAlignType = 'left' | 'center' | 'right';
export declare type MathRowAlignType = 'axis' | 'baseline' | 'bottom' | 'center' | 'top';
export declare type MathBorderType = 'none' | 'solid' | 'dashed';