var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MathMLElement, html, element } from './mathml-element.js';
import { HorizFlex } from './styles/common-styles.js';
let MathSubSupElement = class MathSubSupElement extends MathMLElement {
    constructor() {
        super(...arguments);
        this.pendingLayout = false;
    }
    render() {
        return html `
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
        font-size: 0.75em;
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
        if (this.pendingLayout) {
            return;
        }
        if (!this.shadowRoot) {
            return;
        }
        const slot = this.shadowRoot.querySelector('slot');
        if (!slot) {
            return;
        }
        const nodes = slot.assignedNodes().filter((d) => d.nodeType === Node.ELEMENT_NODE);
        if (nodes.length > 2) {
            this.pendingLayout = true;
            const runnable = () => {
                const s1 = nodes[0].getBoundingClientRect();
                const subNode = nodes[1];
                const supNode = nodes[2];
                const subSize = subNode.getBoundingClientRect();
                const supSize = supNode.getBoundingClientRect();
                subNode.style.opacity = '1';
                supNode.style.opacity = '1';
                const margins = [0, 0, 0];
                // sub
                const hh = s1.height / 2;
                let db = hh;
                if ((hh + subSize.height) < s1.height) {
                    db = s1.height - subSize.height;
                }
                else {
                    margins[2] = (hh + subSize.height) - s1.height;
                }
                subNode.style.top = `${db}px`;
                margins[1] = subSize.width + 5;
                // sup
                db = supSize.bottom - (s1.bottom - (s1.height / 2));
                if (db > 0) {
                    supNode.style.top = `${-db}px`;
                    margins[0] = db;
                }
                margins[1] = Math.max(supSize.width + 5, margins[1]);
                this.style.margin = `${margins[0]}px ${margins[1]}px ${margins[2]}px 0`;
            };
            setTimeout(runnable, 50);
            setTimeout(() => {
                this.pendingLayout = false;
                runnable();
            }, 500);
        }
    }
};
MathSubSupElement = __decorate([
    element('math-subsup')
], MathSubSupElement);
export { MathSubSupElement };
