var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MathMLElement, html, element } from './mathml-element.js';
import { HorizFlex } from './styles/common-styles.js';
let MathSubElement = class MathSubElement extends MathMLElement {
    render() {
        return html `
    <style>
      ${HorizFlex}
      :host {
        display: inline-block;
        position: relative;
      }
      ::slotted(:first-child) {
        padding-right: 0.1em;
        margin: 0;
      }
      ::slotted(:not(:first-child)) {
        font-size: 0.8em;
        --math-style-level: sub;
        counter-increment: math-style-scriptlevel;
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
                const subNode = nodes[1];
                const s2 = subNode.getBoundingClientRect();
                subNode.style.opacity = '1';
                const margins = [0, 0];
                const hh = s1.height / 2;
                let db = hh;
                if ((hh + s2.height) < s1.height) {
                    db = s1.height - s2.height;
                }
                else {
                    margins[0] = (hh + s2.height) - s1.height;
                }
                subNode.style.top = `${db}px`;
                margins[1] = s2.width + 5;
                this.style.margin = `0 ${margins[1]}px ${margins[0]}px 0`;
            }, 50);
        }
    }
};
MathSubElement = __decorate([
    element('m-sub')
], MathSubElement);
export { MathSubElement };
