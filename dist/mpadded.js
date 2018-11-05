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
let MathPaddedElement = class MathPaddedElement extends MathMLElement {
    render() {
        return html `
    <style>
      :host {
        display: inline-block;
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
    </style>
    <div id="mpaddedPanel"><slot></slot></div>
    `;
    }
    updated(propVals) {
        super.updated(propVals);
        this.refresh();
    }
    refresh() {
        if (!this.shadowRoot) {
            return;
        }
        const panel = this.shadowRoot.querySelector('#mpaddedPanel');
        if (!panel) {
            return;
        }
        setTimeout(() => {
            const size = panel.getBoundingClientRect();
            if (this.height) {
                if (this.height.charAt(0) === '+') {
                    this.style.paddingTop = this.height.substring(1);
                }
                else if (this.height.charAt(0) === '-') {
                    this.style.height = `calc(${size.height}px - ${this.height.substring(1)})`;
                    this.style.paddingTop = '0';
                }
                else {
                    this.style.height = this.height;
                    this.style.paddingTop = '0';
                }
            }
            else {
                this.style.height = 'auto';
                this.style.paddingTop = '0';
            }
            if (this.width) {
                if (this.width.charAt(0) === '+' || this.width.charAt(0) === '-') {
                    this.style.width = `calc(${size.width}px + ${this.width.substring(1)})`;
                }
                else {
                    this.style.width = this.width;
                }
            }
            else {
                this.style.width = 'auto';
            }
            console.log(size);
        }, 50);
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], MathPaddedElement.prototype, "height", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], MathPaddedElement.prototype, "width", void 0);
MathPaddedElement = __decorate([
    element('m-padded')
], MathPaddedElement);
export { MathPaddedElement };
