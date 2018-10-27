import { MathMLElement, html, TemplateResult, element } from './mathml-element.js';

@element('m-i')
export class MathIElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: inline-block;
        font-style: italic;
      }
    </style>
    <slot></slot>
    `;
  }
}