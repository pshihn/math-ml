import { MathMLElement, html, TemplateResult, element, property, MathAlignType } from './mathml-element.js';

@element('m-frac')
export class MathFracElement extends MathMLElement {
  @property({ type: Boolean }) bevelled = false;
  @property({ type: String }) numalign: MathAlignType = 'center';
  @property({ type: String }) denomalign: MathAlignType = 'center';
  @property({ type: String }) linethickness?: string;

  render(): TemplateResult {
    let bevelledDivStyle = 'stroke-width: 1;';
    let unbevelledDivStyle = 'border-top: solid thin;';
    if (this.linethickness && (this.linethickness.trim().charAt(0) === '0')) {
      bevelledDivStyle = 'stroke-width: 0;';
      unbevelledDivStyle = '';
    }
    return html`
    <style>
      :host {
        display: inline-block;
        vertical-align: middle;
      }
      #mfracN, #mfracD {
        font-size: 0.8em;
      }
      #mfracPanel.unbevelled {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }
      #mfracPanel.bevelled {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }
      #mfracPanel.bevelled #mfracN{
        transform: translateY(-0.3em);
      }
      #mfracPanel.bevelled #mfracD{
        transform: translateY(0.3em);
      }
      #mfracDivider.unbevelled {
        width: 100%;
        border-top: 1px solid;
      }
      #bevelledDivider {
        min-width: 6px;
        position: relative;
        margin: 0 0.2em;
      }
      #unbevelledDivider {
        width: 100%;
        height: 0;
      }
      .hidden {
        display: none !important;
      }
      svg {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
      }
      path {
        fill: none;
        stroke: currentColor;
      }
    </style>
    <div id="mfracPanel">
      <div id="mfracN"></div>
      <div id="bevelledDivider" class="hidden">&nbsp;<svg><path id="bevelledPath" style="${bevelledDivStyle}"></path></svg></div>
      <div id="unbevelledDivider" style="${unbevelledDivStyle}"></div>
      <div id="mfracD"></div>
    </div>
    <div style="display: hidden;"><slot @slotchange="${this.refreshSlot}"></slot></div>
    `;
  }

  updated() {
    this.refreshSlot();
  }

  private refreshSlot() {
    if (!this.shadowRoot) {
      return;
    }
    const slot = this.shadowRoot.querySelector('slot');
    if (!slot) {
      return;
    }
    const nodes = slot.assignedNodes().filter((d) => d.nodeType === Node.ELEMENT_NODE);
    if (nodes.length > 1) {
      const nu = this.shadowRoot.querySelector('#mfracN') as HTMLElement;
      const de = this.shadowRoot.querySelector('#mfracD') as HTMLElement;
      nu.appendChild(nodes[0]);
      de.appendChild(nodes[1]);
      for (let i = 2; i < nodes.length; i++) {
        if (nodes[i].parentElement) {
          nodes[i].parentElement!.removeChild(nodes[i]);
        }
      }
    }
    this.updateBevlled();
  }

  private updateBevlled() {
    const panel = this.shadowRoot!.querySelector('#mfracPanel') as HTMLElement;
    const nu = this.shadowRoot!.querySelector('#mfracN') as HTMLElement;
    const de = this.shadowRoot!.querySelector('#mfracD') as HTMLElement;
    const bevelledDivider = this.shadowRoot!.querySelector('#bevelledDivider') as HTMLElement;
    const unbevelledDivider = this.shadowRoot!.querySelector('#unbevelledDivider') as HTMLElement;

    nu.style.textAlign = this.numalign;
    de.style.textAlign = this.denomalign;
    if (this.bevelled) {
      panel.classList.remove('unbevelled');
      panel.classList.add('bevelled');
      bevelledDivider.classList.remove('hidden');
      unbevelledDivider.classList.add('hidden');
      setTimeout(() => {
        this.drawBevelledDivider();
      }, 10);
    } else {
      panel.classList.remove('bevelled');
      panel.classList.add('unbevelled');
      bevelledDivider.classList.add('hidden');
      unbevelledDivider.classList.remove('hidden');
    }
  }

  private drawBevelledDivider() {
    const span = this.shadowRoot!.querySelector('#bevelledDivider');
    const path = this.shadowRoot!.querySelector('#bevelledPath');
    if (span && path) {
      const size = (span as HTMLElement).getBoundingClientRect();
      const width = size.width;
      const height = size.height;
      const d = `M0 ${height} L${width} 0`;
      path.setAttribute('d', d);
    }
  }
}