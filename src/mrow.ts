import { MathMLElement, html, TemplateResult, element } from './mathml-element.js';
import { HorizFlex } from './styles/common-styles.js';

@element('m-row')
export class MathRowElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      ${HorizFlex}
      :host {
        display: inline-block;
      }
      .layout.horizontal {
        align-items: baseline;
      }
      .layout.horizontal.centered {
        align-items: center;
      }
    </style>
    <div id="mrowPanel" class="horizontal layout"><slot @slotchange="${this.onSlotChange}"></slot></div>
    `;
  }

  private onSlotChange() {
    if (!this.shadowRoot) {
      return;
    }
    const slot = this.shadowRoot!.querySelector('slot') as HTMLSlotElement;
    const panel = this.shadowRoot.querySelector('#mrowPanel') as HTMLElement;
    if (!slot || !panel) {
      return;
    }
    panel.classList.remove('centered');
    const nodes = slot.assignedNodes().filter((d) => d.nodeType === Node.ELEMENT_NODE);
    for (let i = 0; i < nodes.length; i++) {
      const text = (nodes[i].textContent || '').trim();
      if (text === '=') {
        panel.classList.add('centered');
        break;
      }
    }
  }
}