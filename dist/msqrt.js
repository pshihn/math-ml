var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MathMLElement, html, element } from './mathml-element.js';
import { HorizFlex } from './styles/common-styles.js';
let MathSqrtElement = class MathSqrtElement extends MathMLElement {
    render() {
        return html `
    <style>
      ${HorizFlex}
      :host {
        display: inline-block;
        vertical-align: bottom;
        align-self: center;
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
      .msqrtContent {
        padding: 1px 0.05em 0 0.2em;
        border-top: solid thin;
        white-space: nowrap;
      }
      #msqrtGlyphSpan {
        width: 1.1em;
        position: relative;
      }
      svg {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
      }
      path {
        fill: none;
        stroke: currentColor;
        stroke-width: 1;
      }
    </style>
    <div class="horizontal layout">
      <div id="msqrtGlyphSpan"><svg><path id="rootPath"></path></svg></div>
      <div class="flex msqrtContent"><slot @slotchange="${this.onSlotCange}"></slot></div>
    </div>
    `;
    }
    updated(propVals) {
        super.updated(propVals);
        this.onSlotCange();
    }
    onSlotCange() {
        if (!this.shadowRoot) {
            return;
        }
        const slot = this.shadowRoot.querySelector('slot');
        if (!slot) {
            return;
        }
        setTimeout(() => {
            this.drawRoot();
        }, 10);
    }
    drawRoot() {
        const span = this.shadowRoot.querySelector('#msqrtGlyphSpan');
        const path = this.shadowRoot.querySelector('#rootPath');
        if (span && path) {
            const size = span.getBoundingClientRect();
            const width = size.width;
            const height = size.height;
            const d = `M0 ${height * 0.55} H${width * 0.13} L${width * 0.45} ${height - 2} L${width} 0`;
            path.setAttribute('d', d);
        }
    }
};
MathSqrtElement = __decorate([
    element('math-sqrt')
], MathSqrtElement);
export { MathSqrtElement };
