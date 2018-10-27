var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MathMLElement, html, element } from './mathml-element.js';
let MathStretchyYElement = class MathStretchyYElement extends MathMLElement {
    render() {
        return html `
    <style>
      :host {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
        position: relative;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }
      .invisible {
        opacity: 0;
      }
    </style>
    <span class="invisible"><slot @slotchange="${this.onSlotChange}"></slot></span>
    `;
    }
    updated() {
        this.onSlotChange();
    }
    onSlotChange() {
        if (!this.shadowRoot) {
            return;
        }
        const span = this.shadowRoot.querySelector('span');
        if (!span) {
            return;
        }
        setTimeout(() => {
            if (span.style.transform) {
                return;
            }
            span.classList.remove('invisible');
            const spanSize = span.getBoundingClientRect();
            const size = this.getBoundingClientRect();
            const scale = spanSize.height ? (size.height / spanSize.height) : 1;
            span.style.transform = `scaleY(${scale})`;
        }, 50);
    }
};
MathStretchyYElement = __decorate([
    element('m-stretchy-y')
], MathStretchyYElement);
export { MathStretchyYElement };
