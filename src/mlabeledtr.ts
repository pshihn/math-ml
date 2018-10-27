import { html, TemplateResult, element } from './mathml-element.js';
import { MathTableBaseElement } from './mtable-base.js';

@element('m-labeledtr')
export class MathLabeledTRElement extends MathTableBaseElement {
  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: table-row;
      }
      slot::slotted(m-td:first-child) {
        display: none;
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