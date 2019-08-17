import { MathMLElement, html, TemplateResult, customElement, property } from './mathml-element.js';

@customElement('math-style')
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