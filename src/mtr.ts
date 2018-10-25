import { html, TemplateResult, element } from './mathml-element.js';
import { MathTableBaseElement } from './mtable-base.js';

@element('m-tr')
export class MathTRElement extends MathTableBaseElement {
  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: table-row;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        word-spacing: inherit;
        letter-spacing: inherit;
        text-rendering: inherit;
        direction: inherit;
        unicode-bidi: inherit;
        font-style: inherit;
      }
      slot::slotted(m-td:last-child) {
        --math-table-column-border: none;
      }
    </style>
    <slot></slot>
    `;
  }

  updated() {
    this.updateAlignment();
  }
}