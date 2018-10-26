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
let MathOverElement = class MathOverElement extends MathMLElement {
    constructor() {
        super(...arguments);
        this.accent = false;
        this.align = 'center';
    }
    render() {
        return html `
    <style>
      ${VertFlex}
      :host {
        display: inline-block;
      }
      .vertical.layout.reverse {
        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      }
      ::slotted(:not(:first-child)) {
        width: 100%;
        line-height: 1;
        margin: 0;
        text-align: var(--math-over-align, center);
        --math-style-displaystyle: false;
        counter-increment: math-style-scriptlevel;
      }
    </style>
    <div class="vertical layout reverse">
      <slot></slot>
    </div>
    `;
    }
    updated() {
        const s = this.style;
        switch (this.align) {
            case 'right':
                s.setProperty('--math-over-align', 'right');
                break;
            case 'left':
                s.setProperty('--math-over-align', 'left');
                break;
            default:
                s.setProperty('--math-over-align', 'center');
                break;
        }
    }
};
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], MathOverElement.prototype, "accent", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], MathOverElement.prototype, "align", void 0);
MathOverElement = __decorate([
    element('m-over')
], MathOverElement);
export { MathOverElement };
