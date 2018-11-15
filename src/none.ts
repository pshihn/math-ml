import { MathMLElement, html, TemplateResult, element } from './mathml-element.js';

@element('math-none')
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