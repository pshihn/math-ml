import { MathMLElement, html, TemplateResult, customElement } from './mathml-element.js';
import { HorizFlex } from './styles/common-styles.js';

@customElement('math-row')
export class MathRowElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      ${HorizFlex}
      :host {
        display: inline-block;
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
      .layout.horizontal {
        align-items: baseline;
      }
      .layout.horizontal.centered {
        align-items: center;
      }
      .layout.horizontal.justified {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
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
    let opCount = 0;
    let centeringNodeCount = 0;
    let center = false;
    for (let i = 0; i < nodes.length; i++) {
      const text = (nodes[i].textContent || '').trim();
      if (text === '=') {
        center = true;
        break;
      }
      const tagName = (nodes[i] as HTMLElement).tagName.toLowerCase();
      switch (tagName) {
        case 'math-underover':
        case 'math-under':
        case 'math-over':
        case 'math-subsup':
          centeringNodeCount++;
          break;
        case 'math-o':
          opCount++;
          break;
        case 'math-table':
          center = true;
          break;
        default:
          break;
      }
    }
    if (!center) {
      if (centeringNodeCount && (!opCount)) {
        center = true;
      }
    }
    if (center) {
      panel.classList.add('centered');
    }
    panel.classList.remove('justified');
    if ((getComputedStyle(this).getPropertyValue('--math-underover-align') || '').trim() === 'center'
      || (getComputedStyle(this).getPropertyValue('--math-under-align') || '').trim() === 'center'
      || (getComputedStyle(this).getPropertyValue('--math-over-align') || '').trim() === 'center'
    ) {
      panel.classList.add('justified');
    }
  }
}