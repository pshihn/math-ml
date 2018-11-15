import { MathMLElement, html, TemplateResult, element } from './mathml-element.js';

@element('math-i')
export class MathIElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: inline-block;
        font-style: italic;
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
    </style>
    <slot></slot>
    `;
  }
}