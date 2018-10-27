var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, element } from './mathml-element.js';
import { MathTableBaseElement } from './mtable-base.js';
let MathLabeledTRElement = class MathLabeledTRElement extends MathTableBaseElement {
    render() {
        return html `
    <style>
      :host {
        display: table-row;
      }
      slot::slotted(m-td:first-child) {
        display: none;
      }
      slot::slotted(m-td:last-child) {
        --math-table-column-border: none;
      }
    </style>
    <slot></slot>
    `;
    }
    updated() {
        this.updateAlignment();
    }
};
MathLabeledTRElement = __decorate([
    element('m-labeledtr')
], MathLabeledTRElement);
export { MathLabeledTRElement };
