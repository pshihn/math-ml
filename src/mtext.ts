import { MathMLElement, html, TemplateResult, customElement } from './mathml-element.js';

@customElement('math-text')
export class MathTextElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: inline-block;
        white-space: nowrap;
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
    </style>
    <slot></slot>
    `;
  }
}