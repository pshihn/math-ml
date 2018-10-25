import { html, TemplateResult, element, property } from './mathml-element.js';
import { MathTableBaseElement, MathBorderType } from './mtable-base.js';

@element('m-table')
export class MathTableElement extends MathTableBaseElement {
  @property({ type: String }) columnlines?: MathBorderType = 'none';
  @property({ type: String }) rowlines?: MathBorderType = 'none';
  @property({ type: String }) frame?: MathBorderType = 'none';
  @property({ type: String }) columnspacing = '0.8em';
  @property({ type: String }) rowspacing = '0.8em';
  @property({ type: String }) framespacing = '0.4em 0.5ex';
  @property({ type: String }) width?: string;

  constructor() {
    super();
    this.columnalign = this.columnalign || 'center';
  }

  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: inline-table;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        word-spacing: inherit;
        letter-spacing: inherit;
        text-rendering: inherit;
        direction: inherit;
        unicode-bidi: inherit;
        font-style: inherit;
        border: var(--math-table-border, 'none');
        padding: var(--math-table-padding, 0.5ex 0.4em);
        width: var(--math-table-width);
      }
      slot::slotted(m-tr:last-child) {
        --math-table-row-border: none;
      }
    </style>
    <slot></slot>
    `;
  }

  updated() {
    this.updateAlignment();
    const s = this.style;
    if (this.frame) {
      switch (this.frame) {
        case 'none':
          s.setProperty('--math-table-border', 'none');
          break;
        case 'solid':
          s.setProperty('--math-table-border', 'solid thin');
          break;
        case 'dashed':
          s.setProperty('--math-table-border', 'dashed thin');
          break;
        default:
          s.removeProperty('--math-table-border');
          break;
      }
    }
    if (this.rowlines) {
      switch (this.rowlines) {
        case 'none':
          s.setProperty('--math-table-row-border', 'none');
          break;
        case 'solid':
          s.setProperty('--math-table-row-border', 'solid thin');
          break;
        case 'dashed':
          s.setProperty('--math-table-row-border', 'dashed thin');
          break;
        default:
          s.removeProperty('--math-table-row-border');
          break;
      }
    }
    if (this.columnlines) {
      switch (this.columnlines) {
        case 'none':
          s.setProperty('--math-table-column-border', 'none');
          break;
        case 'solid':
          s.setProperty('--math-table-column-border', 'solid thin');
          break;
        case 'dashed':
          s.setProperty('--math-table-column-border', 'dashed thin');
          break;
        default:
          s.removeProperty('--math-table-column-border');
          break;
      }
    }

    if (this.framespacing) {
      const split = this.framespacing.split(' ').reverse();
      s.setProperty('--math-table-padding', split.join(' '));
    } else {
      s.removeProperty('--math-table-padding');
    }

    if (this.width) {
      s.setProperty('--math-table-width', this.width);
    } else {
      s.removeProperty('--math-table-width');
    }

    if (this.columnspacing) {
      s.setProperty('--math-table-columnspacing', this.columnspacing);
    } else {
      s.removeProperty('--math-table-columnspacing');
    }

    if (this.rowspacing) {
      s.setProperty('--math-table-rowspacing', this.columnspacing);
    } else {
      s.removeProperty('--math-table-rowspacing');
    }

    if (this.columnalign) {
      const split = this.columnalign.trim().split(' ').filter((d) => {
        if (d.trim()) {
          return true;
        }
        return false;
      });
      if (split.length > 1) {
        const slot = this.shadowRoot!.querySelector('slot') as HTMLSlotElement;
        if (slot) {
          slot.assignedNodes().filter((d) => d.nodeType === Node.ELEMENT_NODE).filter((d) => {
            return (d as HTMLElement).tagName === 'M-TR' || (d as HTMLElement).tagName === 'M-LABELEDTR';
          }).forEach((d) => {
            const row = (d as MathTableBaseElement);
            row.columnalign = row.columnalign || (this.columnalign!).trim();
          });
        }
      }
    }
  }
}