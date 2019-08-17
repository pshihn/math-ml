var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, customElement } from './mathml-element.js';
import { MathTableBaseElement } from './mtable-base.js';
let MathTDElement = class MathTDElement extends MathTableBaseElement {
    render() {
        return html `
    <style>
      :host {
        display: table-cell;
        text-align: var(--math-ml-columnalign);
        vertical-align: var(--math-ml-rowalign);
        padding-left: var(--math-table-columnspacing);
        padding-right: var(--math-table-columnspacing);
        padding-top: var(--math-table-rowspacing);
        padding-bottom: var(--math-table-rowspacing);
        padding-left: calc(var(--math-table-columnspacing)/2);
        padding-right: calc(var(--math-table-columnspacing)/2);
        padding-top: calc(var(--math-table-rowspacing)/2);
        padding-bottom: calc(var(--math-table-rowspacing)/2);
        border-bottom: var(--math-table-row-border);
        border-right: var(--math-table-column-border);
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
    </style>
    <slot></slot>
    `;
    }
    updated(propVals) {
        super.updated(propVals);
        this.updateAlignment();
    }
};
MathTDElement = __decorate([
    customElement('math-td')
], MathTDElement);
export { MathTDElement };
