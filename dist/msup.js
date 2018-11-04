var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MathMLElement, html, element } from './mathml-element.js';
import { HorizFlex } from './styles/common-styles.js';
let MathSupElement = class MathSupElement extends MathMLElement {
    render() {
        return html `
    <style>
      ${HorizFlex}
      :host {
        display: inline-block;
        position: relative;
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
        const slot = this.shadowRoot.querySelector('slot');
        if (!slot) {
            return;
        }
        const nodes = slot.assignedNodes().filter((d) => d.nodeType === Node.ELEMENT_NODE);
        if (nodes.length > 1) {
            setTimeout(() => {
                const s1 = nodes[0].getBoundingClientRect();
                const supNode = nodes[1];
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
};
MathSupElement = __decorate([
    element('m-sup')
], MathSupElement);
export { MathSupElement };
