var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MathMLElement, html, customElement } from './mathml-element.js';
let MathErrorElement = class MathErrorElement extends MathMLElement {
    render() {
        return html `
    <style>
      :host {
        display: inline-block;
        background: rgb(255, 255, 221);
        border: 1px solid red;
        font-weight: bold;
        font-family: sans-serif;
        font-size: 1.1em;
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
    </style>
    <slot></slot>
    `;
    }
};
MathErrorElement = __decorate([
    customElement('math-error')
], MathErrorElement);
export { MathErrorElement };
