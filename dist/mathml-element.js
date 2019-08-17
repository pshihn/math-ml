var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, property } from 'lit-element';
export { html, TemplateResult, property, customElement } from 'lit-element';
export class MathMLElement extends LitElement {
    updated(propVals) {
        if (propVals.has('mathcolor')) {
            this.style.setProperty('--math-color', this.mathcolor || null);
        }
        if (propVals.has('mathbackground')) {
            this.style.setProperty('--math-background', this.mathbackground || null);
        }
    }
}
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], MathMLElement.prototype, "mathbackground", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], MathMLElement.prototype, "mathcolor", void 0);
