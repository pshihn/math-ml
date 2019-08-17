import { MathMLElement, html, TemplateResult, customElement } from './mathml-element.js';

@customElement('math-prescripts')
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