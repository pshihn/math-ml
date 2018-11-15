var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, element } from './mathml-element.js';
import { MathTableBaseElement } from './mtable-base.js';
let MathTRElement = class MathTRElement extends MathTableBaseElement {
    render() {
        return html `
    <style>
      :host {
        display: table-row;
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
      slot::slotted(math-td:last-child) {
        --math-table-column-border: none;
      }
    </style>
    <slot @slotchange="${this.refreshSlot}"></slot>
    `;
    }
    updated(propVals) {
        super.updated(propVals);
        this.updateAlignment();
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
        if (this.columnalign) {
            const split = this.columnalign.trim().split(' ').filter((d) => {
                if (d.trim()) {
                    return true;
                }
                return false;
            });
            if (split.length > 1) {
                const nodes = slot.assignedNodes().filter((d) => d.nodeType === Node.ELEMENT_NODE).filter((d) => {
                    return d.tagName === 'MATH-TD';
                });
                for (let i = 0; i < split.length; i++) {
                    if (i >= nodes.length) {
                        break;
                    }
                    nodes[i].columnalign = split[i];
                }
            }
        }
    }
};
MathTRElement = __decorate([
    element('math-tr')
], MathTRElement);
export { MathTRElement };
