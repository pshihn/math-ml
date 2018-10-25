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
// TODO: check for suffix positioning
// if it is the only element in an implicit or explicit mrow and if it is in a script position of
// one of the elements listed in Section 3.4 Script and Limit Schemata, the postfix form is used;
// TODO: Accent
// Specifies whether this operator should be treated as an accent (diacritical mark) when used as an underscript or overscript; see munder, mover and munderover.
// TODO: Lspace/Rspace as style?
// TODO: whole lota stuff related to stretchy
let MathOElement = class MathOElement extends MathMLElement {
    // TODO: check for suffix positioning
    // if it is the only element in an implicit or explicit mrow and if it is in a script position of
    // one of the elements listed in Section 3.4 Script and Limit Schemata, the postfix form is used;
    // TODO: Accent
    // Specifies whether this operator should be treated as an accent (diacritical mark) when used as an underscript or overscript; see munder, mover and munderover.
    // TODO: Lspace/Rspace as style?
    // TODO: whole lota stuff related to stretchy
    constructor() {
        super(...arguments);
        this.formStyle = '';
        this.fence = false;
        this.accent = false;
        this.largeop = false;
    }
    render() {
        return html `
    <style>
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
      :host(.mo-infix) {
        margin: 0 0.2em;
      }
      :host(.mo-separator) {
        margin: 0 0.2em 0 0;
      }
      :host(.mo-product) {
        margin: 0;
      }
      :host([largeop]) {
        font-size: var(--int-math-ml-largeop-size, inherit);
      }
    </style>
    <slot></slot>
    `;
    }
    updated() {
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
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], MathOElement.prototype, "form", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], MathOElement.prototype, "fence", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], MathOElement.prototype, "accent", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], MathOElement.prototype, "largeop", void 0);
MathOElement = __decorate([
    element('m-o')
], MathOElement);
export { MathOElement };
