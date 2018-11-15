import { MathMLElement, html, TemplateResult, element } from './mathml-element.js';

@element('math-prescripts')
export class MathPreScriptsElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      :host {
        width: 0;
        height: 0;
        display: none;
      }
    </style>
    `;
  }
}