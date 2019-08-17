import { MathMLElement, html, TemplateResult, customElement } from './mathml-element.js';
import { HorizFlex } from './styles/common-styles.js';

@customElement('math-sub')
export class MathSubElement extends MathMLElement {
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
        padding-right: 0.1em;
        margin: 0;
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
        const subNode = nodes[1] as HTMLElement;
        const s2 = subNode.getBoundingClientRect();
        subNode.style.opacity = '1';
        const margins = [0, 0];
        const hh = s1.height / 2;
        let db = hh;
        if ((hh + s2.height) < s1.height) {
          db = s1.height - s2.height;
        } else {
          margins[0] = (hh + s2.height) - s1.height;
        }
        subNode.style.top = `${db}px`;
        margins[1] = s2.width + 5;
        this.style.margin = `0 ${margins[1]}px ${margins[0]}px 0`;
      }, 50);
    }
  }
}