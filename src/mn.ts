import { MathMLElement, html, TemplateResult, element } from './mathml-element.js';

@element('m-n')
export class MathNElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: inline-block;
        font-size: inherit;
        font-style: inherit;
        font-family: inherit;
        line-height: inherit;
        word-spacing: inherit;
        letter-spacing: inherit;
        text-rendering: inherit;
        direction: inherit;
        unicode-bidi: inherit;
      }
    </style>
    <slot></slot>
    `;
  }
}