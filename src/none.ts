import { MathMLElement, html, TemplateResult, customElement } from './mathml-element.js';

@customElement('math-none')
export class MathNoneElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      :host {
        height: 0;
        width: 0;
        padding: 0 3px;
      }
    </style>
    `;
  }
}