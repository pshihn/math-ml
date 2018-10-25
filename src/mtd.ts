import { html, TemplateResult, element } from './mathml-element.js';
import { MathTableBaseElement } from './mtable-base.js';

@element('m-td')
export class MathTDElement extends MathTableBaseElement {
  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: table-cell;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        word-spacing: inherit;
        letter-spacing: inherit;
        text-rendering: inherit;
        direction: inherit;
        unicode-bidi: inherit;
        font-style: inherit;
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
      }
    </style>
    <slot></slot>
    `;
  }

  updated() {
    this.updateAlignment();
  }
}