import { html, TemplateResult, element, PropertyValues } from './mathml-element.js';
import { MathTableBaseElement } from './mtable-base.js';

@element('math-labeledtr')
export class MathLabeledTRElement extends MathTableBaseElement {
  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: table-row;
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
      slot::slotted(math-td:first-child) {
        display: none;
      }
      slot::slotted(math-td:last-child) {
        --math-table-column-border: none;
      }
    </style>
    <slot></slot>
    `;
  }

  updated(propVals: PropertyValues) {
    super.updated(propVals);
    this.updateAlignment();
  }
}