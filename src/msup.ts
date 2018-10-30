import { MathMLElement, html, TemplateResult, element } from './mathml-element.js';
import { HorizFlex } from './styles/common-styles.js';

@element('m-sup')
export class MathSupElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      ${HorizFlex}
      :host {
        display: inline-block;
      }
      ::slotted(:first-child) {
        padding-top: 0.16em;
        padding-right: 0.16em;
      }
      ::slotted(:not(:first-child)) {
        font-size: 0.8em;
        --math-style-level: sub;
        counter-increment: math-style-scriptlevel;
      }
    </style>
    <div class="horizontal layout">
      <slot></slot>
    </div>
    `;
  }
}