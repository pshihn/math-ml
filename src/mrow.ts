import { MathMLElement, html, TemplateResult, element } from './mathml-element.js';
import { HorizFlex } from './styles/common-styles.js';

@element('m-row')
export class MathRowElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      ${HorizFlex}
      :host {
        display: inline-block;
      }
      .layout.horizontal {
        align-items: baseline;
      }
    </style>
    <div class="horizontal layout"><slot></slot></div>
    `;
  }
}