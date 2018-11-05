import { html, PropertyValues, TemplateResult, element } from './mathml-element.js';
import { MathTableBaseElement } from './mtable-base.js';

@element('m-tr')
export class MathTRElement extends MathTableBaseElement {
  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: table-row;
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
      slot::slotted(m-td:last-child) {
        --math-table-column-border: none;
      }
    </style>
    <slot @slotchange="${this.refreshSlot}"></slot>
    `;
  }

  updated(propVals: PropertyValues) {
    super.updated(propVals);
    this.updateAlignment();
    this.refreshSlot();
  }

  private refreshSlot() {
    if (!this.shadowRoot) {
      return;
    }
    const slot = this.shadowRoot!.querySelector('slot') as HTMLSlotElement;
    if (!slot) {
      return;
    }
    if (this.columnalign) {
      const split = this.columnalign.trim().split(' ').filter((d) => {
        if (d.trim()) {
          return true;
        }
        return false;
      });
      if (split.length > 1) {
        const nodes = slot.assignedNodes().filter((d) => d.nodeType === Node.ELEMENT_NODE).filter((d) => {
          return (d as HTMLElement).tagName === 'M-TD';
        });
        for (let i = 0; i < split.length; i++) {
          if (i >= nodes.length) {
            break;
          }
          (nodes[i] as MathTableBaseElement).columnalign = split[i];
        }
      }
    }
  }
}