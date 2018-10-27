import { MathMLElement, html, TemplateResult, element } from './mathml-element.js';

@element('m-n')
export class MathNElement extends MathMLElement {
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