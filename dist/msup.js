var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MathMLElement, html, element } from './mathml-element.js';
import { HorizFlex } from './styles/common-styles.js';
let MathSupElement = class MathSupElement extends MathMLElement {
    render() {
        return html `
    <style>
      ${HorizFlex}
      :host {
        display: inline-block;
      }
      ::slotted(:first-child) {
        padding-top: 0.16em;
        padding-right: 0.16em;
      }
      ::slotted(:not(:first-child)) {
        font-size: 0.8em;
        --math-style-level: sub;
        counter-increment: math-style-scriptlevel;
      }
    </style>
    <div class="horizontal layout">
      <slot></slot>
    </div>
    `;
    }
};
MathSupElement = __decorate([
    element('m-sup')
], MathSupElement);
export { MathSupElement };
