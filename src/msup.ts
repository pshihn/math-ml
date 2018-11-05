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
        position: relative;
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
      ::slotted(:first-child) {
        padding-right: 0.16em;
      }
      ::slotted(:not(:first-child)) {
        font-size: 0.8em;
        --math-style-level: sub;
        position: absolute;
        left: 100%;
        opacity: 0;
        line-height: 1;
      }
    </style>
    <div class="horizontal layout">
      <slot @slotchange="${this.refreshSlot}"></slot>
    </div>
    `;
  }

  refreshSlot() {
    if (!this.shadowRoot) {
      return;
    }
    const slot = this.shadowRoot!.querySelector('slot') as HTMLSlotElement;
    if (!slot) {
      return;
    }
    const nodes = slot.assignedNodes().filter((d) => d.nodeType === Node.ELEMENT_NODE);
    if (nodes.length > 1) {
      setTimeout(() => {
        const s1 = (nodes[0] as HTMLElement).getBoundingClientRect();
        const supNode = nodes[1] as HTMLElement;
        const s2 = supNode.getBoundingClientRect();
        supNode.style.opacity = '1';
        const margins = [0, 0];
        const db = s2.bottom - (s1.bottom - (s1.height / 2));
        if (db > 0) {
          supNode.style.top = `${-db}px`;
          margins[0] = db;
        }
        margins[1] = s2.width + 5;
        this.style.margin = `${margins[0]}px ${margins[1]}px 0 0`;
      }, 50);
    }
  }
}