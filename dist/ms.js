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
let MathSElement = class MathSElement extends MathMLElement {
    render() {
        return html `
    <style>
      :host {
        display: inline-block;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        word-spacing: inherit;
        letter-spacing: inherit;
        text-rendering: inherit;
        direction: inherit;
        unicode-bidi: inherit;
        font-style: inherit;
      }
      :host:before {
        content: "\\0022";
        margin-right: -0.2em;
      }
      :host:after {
        content: "\\0022";
        margin-left: -0.2em;
      }
      :host([lquote]):before {
        content: attr(lquote)
      }
      :host([rquote]):after {
        content: attr(rquote)
      }
    </style>
    <slot></slot>
    `;
    }
};
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], MathSElement.prototype, "lquote", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], MathSElement.prototype, "rquote", void 0);
MathSElement = __decorate([
    element('m-s')
], MathSElement);
export { MathSElement };
