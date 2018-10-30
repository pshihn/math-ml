var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MathMLElement, html, element } from './mathml-element.js';
import { HorizFlex } from './styles/common-styles.js';
let MathSubSupElement = class MathSubSupElement extends MathMLElement {
    render() {
        return html `
    <style>
      ${HorizFlex}
      :host {
        display: inline-block;
      }
      ::slotted(:first-child) {
        padding-bottom: 0.3em;
        padding-top: 0.3em;
        padding-right: 0.16em;
      }
      ::slotted(:nth-child(2)) {
        font-size: 0.75em;
        align-self: flex-end;
        --math-style-level: sub;
        counter-increment: math-style-scriptlevel;
      }
      ::slotted(:nth-child(3)) {
        font-size: 0.75em;
        --math-style-level: sub;
        counter-increment: math-style-scriptlevel;
        transform: translateX(-100%);
      }
    </style>
    <div class="horizontal layout">
      <slot></slot>
    </div>
    `;
    }
};
MathSubSupElement = __decorate([
    element('m-subsup')
], MathSubSupElement);
export { MathSubSupElement };
