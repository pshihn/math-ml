import { MathMLElement, html, TemplateResult, element, property } from './mathml-element.js';

@element('m-style')
export class MathStyleElement extends MathMLElement {
  @property({ type: String }) displaystyle?: string;

  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: inline-block;
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
    </style>
    <slot></slot>
    `;
  }
}