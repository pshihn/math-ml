import { MathMLElement, html, TemplateResult, element } from './mathml-element.js';

@element('math-ml')
export class MathElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: inline-block;
        font-size: inherit;
        font-style: normal;
        font-family: serif;
        line-height: 1.5;
        word-spacing: normal;
        letter-spacing: normal;
        text-rendering: optimizeLegibility;
        direction: ltr;
        unicode-bidi: embed;
      }
    </style>
    <slot></slot>
    `;
  }
}