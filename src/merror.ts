import { MathMLElement, html, TemplateResult, element } from './mathml-element.js';

@element('m-error')
export class MathErrorElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: inline-block;
        background: rgb(255, 255, 221);
        border: 1px solid red;
        font-weight: bold;
        font-family: sans-serif;
        font-size: 1.1em;
      }
    </style>
    <slot></slot>
    `;
  }
}