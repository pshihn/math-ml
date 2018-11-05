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
import { VertFlex } from './styles/common-styles.js';
let MathUnderOverElement = class MathUnderOverElement extends MathMLElement {
    constructor() {
        super(...arguments);
        this.accent = false;
        this.accentunder = false;
        this.align = 'center';
    }
    render() {
        return html `
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
    updated(propVals) {
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
    refreshSlot() {
        if (!this.shadowRoot) {
            return;
        }
        const slot = this.shadowRoot.querySelector('slot');
        if (!slot) {
            return;
        }
        const nodes = slot.assignedNodes().filter((d) => d.nodeType === Node.ELEMENT_NODE);
        if (nodes.length) {
            const panel = this.shadowRoot.querySelector('#muoPanel');
            while (panel.firstChild) {
                panel.removeChild(panel.firstChild);
            }
            if (nodes.length > 2) {
                nodes[2].classList.add('over');
                panel.appendChild(nodes[2]);
            }
            nodes[0].classList.add('base');
            panel.append(nodes[0]);
            if (nodes.length > 1) {
                nodes[1].classList.add('under');
                panel.appendChild(nodes[1]);
            }
        }
    }
};
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], MathUnderOverElement.prototype, "accent", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], MathUnderOverElement.prototype, "accentunder", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], MathUnderOverElement.prototype, "align", void 0);
MathUnderOverElement = __decorate([
    element('m-underover')
], MathUnderOverElement);
export { MathUnderOverElement };
