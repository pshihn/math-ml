import { MathMLElement, html, TemplateResult, element } from './mathml-element.js';

@element('m-text')
export class MathTextElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: inline-block;
        white-space: nowrap;
      }
    </style>
    <slot></slot>
    `;
  }
}