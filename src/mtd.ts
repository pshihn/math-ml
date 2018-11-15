import { html, PropertyValues, TemplateResult, element } from './mathml-element.js';
import { MathTableBaseElement } from './mtable-base.js';

@element('math-td')
export class MathTDElement extends MathTableBaseElement {
  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: table-cell;
        text-align: var(--math-ml-columnalign);
        vertical-align: var(--math-ml-rowalign);
        padding-left: var(--math-table-columnspacing);
        padding-right: var(--math-table-columnspacing);
        padding-top: var(--math-table-rowspacing);
        padding-bottom: var(--math-table-rowspacing);
        padding-left: calc(var(--math-table-columnspacing)/2);
        padding-right: calc(var(--math-table-columnspacing)/2);
        padding-top: calc(var(--math-table-rowspacing)/2);
        padding-bottom: calc(var(--math-table-rowspacing)/2);
        border-bottom: var(--math-table-row-border);
        border-right: var(--math-table-column-border);
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
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