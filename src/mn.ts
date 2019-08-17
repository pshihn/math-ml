import { MathMLElement, html, TemplateResult, customElement } from './mathml-element.js';

@customElement('math-n')
export class MathNElement extends MathMLElement {
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