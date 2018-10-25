import { MathMLElement, html, TemplateResult, element } from './mathml-element.js';
import { HorizFlex } from './styles/common-styles.js';

@element('m-subsup')
export class MathSubSupElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      ${HorizFlex}
      :host {
        display: inline-block;
        font-size: inherit;
        font-style: inherit;
        font-family: inherit;
        line-height: inherit;
        word-spacing: inherit;
        letter-spacing: inherit;
        text-rendering: inherit;
        direction: inherit;
        unicode-bidi: inherit;
      }
      ::slotted(:first-child) {
        padding-bottom: 0.3em;
        padding-top: 0.3em;
        padding-right: 0.16em;
      }
      ::slotted(:nth-child(2)) {
        font-size: 0.75em;
        align-self: flex-end;
        --math-style-displaystyle: false;
        counter-increment: math-style-scriptlevel;
      }
      ::slotted(:nth-child(3)) {
        font-size: 0.75em;
        --math-style-displaystyle: false;
        counter-increment: math-style-scriptlevel;
        transform: translateX(-100%);
      }
    </style>
    <div class="horizontal layout">
      <slot></slot>
    </div>
    `;
  }
}