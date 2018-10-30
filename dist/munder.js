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
let MathUnderElement = class MathUnderElement extends MathMLElement {
    constructor() {
        super(...arguments);
        this.accentunder = false;
        this.align = 'center';
    }
    render() {
        return html `
    <style>
      ${VertFlex}
      :host {
        display: inline-block;
      }
      ::slotted(:not(:first-child)) {
        width: 100%;
        line-height: 1;
        margin: 0;
        text-align: var(--math-under-align, center);
        --math-style-level: sub;
        counter-increment: math-style-scriptlevel;
        font-size: var(--math-under-font-size, 0.8em);
        --math-style-stretchy: true;
      }
    </style>
    <div class="vertical layout">
      <slot></slot>
    </div>
    `;
    }
    updated() {
        const s = this.style;
        switch (this.align) {
            case 'right':
                s.setProperty('--math-under-align', 'right');
                break;
            case 'left':
                s.setProperty('--math-under-align', 'left');
                break;
            default:
                s.setProperty('--math-under-align', 'center');
                break;
        }
        s.setProperty('--math-under-font-size', this.accentunder ? '1em' : '0.8em');
    }
};
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], MathUnderElement.prototype, "accentunder", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], MathUnderElement.prototype, "align", void 0);
MathUnderElement = __decorate([
    element('m-under')
], MathUnderElement);
export { MathUnderElement };
