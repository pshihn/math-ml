var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { MathMLElement, html, customElement, property } from './mathml-element.js';
let MathSpaceElement = class MathSpaceElement extends MathMLElement {
    constructor() {
        super(...arguments);
        this.width = '0em';
        this.height = '0ex';
        this.depth = '0ex';
    }
    render() {
        return html `
    <style>
      :host {
        display: inline-block;
        vertical-align: top;
        background: var(--math-background, inherit);
      }
    </style>
    `;
    }
    updated(propVals) {
        super.updated(propVals);
        this.style.width = this.width;
        this.style.height = this.height;
        this.style.marginBottom = this.depth;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], MathSpaceElement.prototype, "width", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], MathSpaceElement.prototype, "height", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], MathSpaceElement.prototype, "depth", void 0);
MathSpaceElement = __decorate([
    customElement('math-space')
], MathSpaceElement);
export { MathSpaceElement };
