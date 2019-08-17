import { MathMLElement, html, TemplateResult, customElement } from './mathml-element.js';

@customElement('math-ml')
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
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
    </style>
    <slot></slot>
    `;
  }
}