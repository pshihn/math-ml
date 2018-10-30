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
let MathOElement = class MathOElement extends MathMLElement {
    constructor() {
        super(...arguments);
        this.formStyle = '';
    }
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
        align-self: stretch;
      }
      :host(.mo-infix) {
        margin: 0 0.2em;
      }
      :host(.mo-separator) {
        margin: 0 0.2em 0 0;
      }
      :host(.mo-product) {
        margin: 0;
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
        let specialRule = '';
        let effectiveForm = this.form;
        if (!effectiveForm) {
            const parent = this.parentElement;
            if (parent && (parent.tagName === 'M-ROW' || parent.tagName === 'MROW')) {
                const children = parent.children;
                if (children.length > 1) {
                    if (children[0] === this) {
                        effectiveForm = 'prefix';
                    }
                    else if (children[children.length - 1] === this) {
                        effectiveForm = 'postfix';
                    }
                }
            }
            if (!effectiveForm) {
                const text = (this.textContent || '').trim();
                if (text === ',' || text === ';') {
                    specialRule = 'separator';
                }
                else if (text === '.' || text === '⋅') {
                    specialRule = 'product';
                }
            }
        }
        effectiveForm = effectiveForm || 'infix';
        const newFormStyle = specialRule || effectiveForm;
        if (this.formStyle !== newFormStyle) {
            if (this.formStyle) {
                this.classList.remove(this.formStyle);
            }
            this.formStyle = `mo-${newFormStyle}`;
            this.classList.add(this.formStyle);
        }
        let effectiveStretch = this.stretchy;
        if (effectiveStretch === undefined) {
            if (getComputedStyle(this).getPropertyValue('--math-style-stretchy').trim() === 'true') {
                effectiveStretch = true;
            }
            else {
                effectiveStretch = effectiveForm === 'prefix' || effectiveForm === 'postfix';
            }
        }
        span.style.width = null;
        if (!effectiveStretch) {
            span.style.transform = null;
            span.style.lineHeight = null;
            span.classList.remove('invisible');
        }
        else {
            span.style.lineHeight = '1';
            setTimeout(() => {
                if (span.style.transform) {
                    return;
                }
                span.classList.remove('invisible');
                const spanSize = span.getBoundingClientRect();
                const size = this.getBoundingClientRect();
                const scaleY = spanSize.height ? (size.height / spanSize.height) : 1;
                const scaleX = spanSize.width ? (size.width / spanSize.width) : 1;
                if (scaleY <= 1) {
                    span.style.lineHeight = null;
                }
                if (scaleX !== 1) {
                    span.style.width = '100%';
                }
                span.style.transform = `scale(${scaleX}, ${scaleY})`;
            }, 50);
        }
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], MathOElement.prototype, "form", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], MathOElement.prototype, "stretchy", void 0);
MathOElement = __decorate([
    element('m-o')
], MathOElement);
export { MathOElement };
