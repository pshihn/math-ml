import { MathMLElement, html, TemplateResult, element } from './mathml-element.js';

@element('m-text')
export class MathTextElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: inline-block;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        word-spacing: inherit;
        letter-spacing: inherit;
        text-rendering: inherit;
        direction: inherit;
        unicode-bidi: inherit;
        font-style: inherit;
        white-space: nowrap;
      }
    </style>
    <slot></slot>
    `;
  }
}