var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MathMLElement, html, element } from './mathml-element.js';
let MathElement = class MathElement extends MathMLElement {
    render() {
        return html `
    <style>
      :host {
        display: inline-block;
        font-size: inherit;
        font-style: normal;
        font-family: serif;
        line-height: 1.5;
        word-spacing: normal;
        letter-spacing: normal;
        text-rendering: optimizeLegibility;
        direction: ltr;
        unicode-bidi: embed;
      }
    </style>
    <slot></slot>
    `;
    }
};
MathElement = __decorate([
    element('math-ml')
], MathElement);
export { MathElement };
