import { MathMLElement, PropertyValues, html, TemplateResult, element, property, MathAlignType } from './mathml-element.js';
import { VertFlex } from './styles/common-styles.js';

@element('math-underover')
export class MathUnderOverElement extends MathMLElement {
  @property({ type: Boolean, reflect: true }) accent = false;
  @property({ type: Boolean, reflect: true }) accentunder = false;
  @property() align: MathAlignType = 'center';

  render(): TemplateResult {
    return html`
    <style>
      ${VertFlex}
      :host {
        display: inline-block;
        margin: 0 0.16em;
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
      .vertical.layout.reverse {
        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      }
      .under {
        width: 100%;
        line-height: 1;
        margin: 0;
        text-align: var(--math-underover-align, center);
        --math-style-level: sub;
        font-size: var(--math-under-font-size, 0.75em);
        --math-style-stretchy: true;
      }
      .over {
        width: 100%;
        line-height: 1;
        margin: 0;
        text-align: var(--math-underover-align, center);
        --math-style-level: sub;
        font-size: var(--math-over-font-size, 0.75em);
        --math-style-stretchy: true;
      }
      .base {
        margin: 0;
      }
    </style>
    <div id="muoPanel" class="vertical layout"></div>
    <div style="display: hidden;">
      <slot @slotchange="${this.refreshSlot}"></slot>
    </div>
    `;
  }

  updated(propVals: PropertyValues) {
    super.updated(propVals);
    const s = this.style;
    switch (this.align) {
      case 'right':
        s.setProperty('--math-underover-align', 'right');
        break;
      case 'left':
        s.setProperty('--math-underover-align', 'left');
        break;
      default:
        s.setProperty('--math-underover-align', 'center');
        break;
    }
    s.setProperty('--math-under-font-size', this.accentunder ? '1em' : '0.75em');
    s.setProperty('--math-over-font-size', this.accent ? '1em' : '0.75em');
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
    const nodes = slot.assignedNodes().filter((d) => d.nodeType === Node.ELEMENT_NODE);
    if (nodes.length) {
      const panel = this.shadowRoot.querySelector('#muoPanel') as HTMLElement;
      while (panel.firstChild) {
        panel.removeChild(panel.firstChild);
      }
      if (nodes.length > 2) {
        (nodes[2] as HTMLElement).classList.add('over');
        panel.appendChild(nodes[2]);
      }
      (nodes[0] as HTMLElement).classList.add('base');
      panel.append(nodes[0]);
      if (nodes.length > 1) {
        (nodes[1] as HTMLElement).classList.add('under');
        panel.appendChild(nodes[1]);
      }
    }
  }
}