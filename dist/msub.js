var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MathMLElement, html, element } from './mathml-element.js';
import { HorizFlex } from './styles/common-styles.js';
let MathSubElement = class MathSubElement extends MathMLElement {
    render() {
        return html `
    <style>
      ${HorizFlex}
      :host {
        display: inline-block;
        font-size: inherit;
        font-style: inherit;
        font-family: inherit;
        line-height: inherit;
        word-spacing: inherit;
        letter-spacing: inherit;
        text-rendering: inherit;
        direction: inherit;
        unicode-bidi: inherit;
      }
      ::slotted(:first-child) {
        padding-bottom: 0.16em;
        padding-right: 0.16em;
      }
      ::slotted(:not(:first-child)) {
        font-size: 0.8em;
        align-self: flex-end;
        --math-style-displaystyle: false;
        counter-increment: math-style-scriptlevel;
      }
    </style>
    <div class="horizontal layout">
      <slot></slot>
    </div>
    `;
    }
};
MathSubElement = __decorate([
    element('m-sub')
], MathSubElement);
export { MathSubElement };
