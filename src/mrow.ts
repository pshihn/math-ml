import { MathMLElement, html, TemplateResult, element } from './mathml-element.js';
import { HorizCenterFlex } from './styles/common-styles.js';

@element('m-row')
export class MathRowElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      ${HorizCenterFlex}
      :host {
        display: inline-block;
      }
      .layout.horizontal.center {
        align-items: stretch;
      }
    </style>
    <div class="horizontal layout center"><slot></slot></div>
    `;
  }
}