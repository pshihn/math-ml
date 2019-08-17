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
let MathGlyphElement = class MathGlyphElement extends MathMLElement {
    constructor() {
        super(...arguments);
        this.width = 'auto';
        this.height = 'auto';
        this.valign = 'auto';
        this.alt = '';
    }
    render() {
        const v = this.valign ? (this.valign.indexOf('-') === 0 ? this.valign.substring(1) : `-${this.valign}`) : '0';
        const style = this.src ? `width: ${this.width || 'auto'}; height: ${this.height || 'auto'}; transform: translate3d(0,${v},0);` : 'display: none;';
        return html `
    <style>
      :host {
        display: inline-block;
        background: var(--math-background, inherit);
      }
      img {
        display: block;
      }
    </style>
    <img src="${this.src || ''}" alt="${this.alt}" style="${style}">
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], MathGlyphElement.prototype, "src", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], MathGlyphElement.prototype, "width", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], MathGlyphElement.prototype, "height", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], MathGlyphElement.prototype, "valign", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], MathGlyphElement.prototype, "alt", void 0);
MathGlyphElement = __decorate([
    customElement('math-glyph')
], MathGlyphElement);
export { MathGlyphElement };
