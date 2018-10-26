var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { MathMLElement, html, element, property } from './mathml-element.js';
let MathFracElement = class MathFracElement extends MathMLElement {
    constructor() {
        super(...arguments);
        this.bevelled = false;
        this.numalign = 'center';
        this.denomalign = 'center';
    }
    render() {
        return html `
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
        border-top: solid thin;
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
        stroke-width: 1;
      }
    </style>
    <div id="mfracPanel">
      <div id="mfracN"></div>
      <div id="bevelledDivider" class="hidden">&nbsp;<svg><path id="bevelledPath"></path></svg></div>
      <div id="unbevelledDivider"></div>
      <div id="mfracD"></div>
    </div>
    <div style="display: hidden;"><slot @slotchange="${this.refreshSlot}"></slot></div>
    `;
    }
    updated() {
        this.refreshSlot();
    }
    refreshSlot() {
        if (!this.shadowRoot) {
            return;
        }
        const slot = this.shadowRoot.querySelector('slot');
        if (!slot) {
            return;
        }
        const nodes = slot.assignedNodes().filter((d) => d.nodeType === Node.ELEMENT_NODE);
        if (nodes.length > 1) {
            const nu = this.shadowRoot.querySelector('#mfracN');
            const de = this.shadowRoot.querySelector('#mfracD');
            nu.appendChild(nodes[0]);
            de.appendChild(nodes[1]);
            for (let i = 2; i < nodes.length; i++) {
                if (nodes[i].parentElement) {
                    nodes[i].parentElement.removeChild(nodes[i]);
                }
            }
        }
        this.updateBevlled();
    }
    updateBevlled() {
        const panel = this.shadowRoot.querySelector('#mfracPanel');
        const nu = this.shadowRoot.querySelector('#mfracN');
        const de = this.shadowRoot.querySelector('#mfracD');
        const bevelledDivider = this.shadowRoot.querySelector('#bevelledDivider');
        const unbevelledDivider = this.shadowRoot.querySelector('#unbevelledDivider');
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
        }
        else {
            panel.classList.remove('bevelled');
            panel.classList.add('unbevelled');
            bevelledDivider.classList.add('hidden');
            unbevelledDivider.classList.remove('hidden');
        }
    }
    drawBevelledDivider() {
        const span = this.shadowRoot.querySelector('#bevelledDivider');
        const path = this.shadowRoot.querySelector('#bevelledPath');
        if (span && path) {
            const size = span.getBoundingClientRect();
            const width = size.width;
            const height = size.height;
            const d = `M0 ${height} L${width} 0`;
            path.setAttribute('d', d);
        }
    }
};
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], MathFracElement.prototype, "bevelled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], MathFracElement.prototype, "numalign", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], MathFracElement.prototype, "denomalign", void 0);
MathFracElement = __decorate([
    element('m-frac')
], MathFracElement);
export { MathFracElement };
