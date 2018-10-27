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
      :host {
        display: inline-block;
      }
    </style>
    <slot></slot>
    `;
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
