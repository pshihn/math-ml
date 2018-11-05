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
import { HorizCenterFlex } from './styles/common-styles.js';
import { MathOElement } from './mo.js';
import './mo.js';
let MathFencedElement = class MathFencedElement extends MathMLElement {
    constructor() {
        super(...arguments);
        this.close = ')';
        this.open = '(';
        this.separators = ',';
    }
    render() {
        return html `
    <style>
      ${HorizCenterFlex}
      :host {
        display: inline-block;
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
      #mfencedRow {
        align-items: stretch;
      }
    </style>
    <div id="mfencedRow" class="horizontal layout center"></div>
    <div style="display: hidden;">
      <slot @slotchange="${this.refreshSlot}"></slot>
    </div>
    `;
    }
    updated(propVals) {
        super.updated(propVals);
        this.refreshSlot();
    }
    isStretchyString(text) {
        if (text.match(/^[0-9a-zA-Z,;\-_`'"]*$/)) {
            return false;
        }
        return true;
    }
    nextSeparator(index) {
        if (index >= 0) {
            if (this.separators.length) {
                if (index < this.separators.length) {
                    return this.separators.charAt(index);
                }
                return this.separators.charAt(this.separators.length - 1);
            }
        }
        return null;
    }
    refreshSlot() {
        if (!this.shadowRoot) {
            return;
        }
        const slot = this.shadowRoot.querySelector('slot');
        const panel = this.shadowRoot.querySelector('#mfencedRow');
        if (!slot || !panel) {
            return;
        }
        const nodes = slot.assignedNodes().filter((d) => d.nodeType === Node.ELEMENT_NODE);
        if (nodes.length) {
            while (panel.firstChild) {
                panel.removeChild(panel.firstChild);
            }
            let sepIndex = 0;
            for (let i = 0; i < nodes.length; i++) {
                // opener
                if (i === 0 && this.open) {
                    const mo = new MathOElement();
                    if (this.isStretchyString(this.open.trim())) {
                        mo.stretchy = 'true';
                    }
                    mo.textContent = this.open;
                    panel.appendChild(mo);
                }
                // item
                panel.appendChild(nodes[i]);
                // separator
                if (i < (nodes.length - 1)) {
                    const sep = this.nextSeparator(sepIndex);
                    if (sep) {
                        sepIndex++;
                        const mo = new MathOElement();
                        if (this.isStretchyString(sep)) {
                            mo.stretchy = 'true';
                        }
                        mo.textContent = sep;
                        panel.appendChild(mo);
                    }
                }
                if (i === (nodes.length - 1) && this.close) {
                    const mo = new MathOElement();
                    if (this.isStretchyString(this.close.trim())) {
                        mo.stretchy = 'true';
                    }
                    mo.textContent = this.close;
                    panel.appendChild(mo);
                }
            }
        }
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], MathFencedElement.prototype, "close", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], MathFencedElement.prototype, "open", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], MathFencedElement.prototype, "separators", void 0);
MathFencedElement = __decorate([
    element('m-fenced')
], MathFencedElement);
export { MathFencedElement };
