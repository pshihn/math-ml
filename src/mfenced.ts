import { MathMLElement, html, TemplateResult, element, property } from './mathml-element.js';

@element('m-fenced')
export class MathFencedElement extends MathMLElement {
  @property({ type: String }) close = ')';
  @property({ type: String }) open = '(';
  @property({ type: String }) separators = ',';

  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot></slot>
    `;
  }
}