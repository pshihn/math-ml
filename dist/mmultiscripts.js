var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MathMLElement, html, element } from './mathml-element.js';
import { AllFlex } from './styles/common-styles.js';
let MathMultiScriptsElement = class MathMultiScriptsElement extends MathMLElement {
    render() {
        return html `
    <style>
      ${AllFlex}
      :host {
        display: inline-block;
      }
      .sup {
        font-size: 0.75em;
        --math-style-displaystyle: false;
        counter-increment: math-style-scriptlevel;
      }
      .sub {
        font-size: 0.75em;
        align-self: flex-end;
        --math-style-displaystyle: false;
        counter-increment: math-style-scriptlevel;
      }
      #cScriptPanel * {
        padding: 0.3em 0.16em;
      }
      #lScriptPanel .sub {
        transform: translateX(100%);
      }
      #rScriptPanel .sup {
        transform: translateX(-100%);
      }
    </style>
    <div class="horizontal layout">
      <div id="lScriptPanel" class="horizontal layout"></div>
      <div id="cScriptPanel"></div>
      <div id="rScriptPanel" class="horizontal layout"></div>
    </div>
    <div style="display: hidden;">
      <slot @slotchange="${this.refreshSlot}"></slot>
    </div>
    `;
    }
    updated() {
        this.refreshSlot();
    }
    clearNodes(nodes) {
        nodes.forEach((node) => {
            while (node.firstChild) {
                node.removeChild(node.firstChild);
            }
        });
    }
    refreshSlot() {
        if (!this.shadowRoot) {
            return;
        }
        const slot = this.shadowRoot.querySelector('slot');
        if (!slot) {
            return;
        }
        const nodes = slot.assignedNodes().filter((d) => d.nodeType === Node.ELEMENT_NODE);
        if (nodes.length === 1 && (nodes[0].tagName === 'm-prescripts'.toUpperCase())) {
            return;
        }
        if (nodes.length) {
            const lp = this.shadowRoot.querySelector('#lScriptPanel');
            const rp = this.shadowRoot.querySelector('#rScriptPanel');
            const cp = this.shadowRoot.querySelector('#cScriptPanel');
            this.clearNodes([lp, cp, rp]);
            cp.appendChild(nodes[0]);
            let cursor = 0;
            const pre = [];
            const post = [];
            let current = post;
            for (let i = 1; i < nodes.length; i++) {
                const n = nodes[i];
                if (n.tagName === 'm-prescripts'.toUpperCase()) {
                    current = pre;
                    cursor = 0;
                }
                else {
                    if (cursor % 2) {
                        n.classList.add('sup');
                    }
                    else {
                        n.classList.add('sub');
                    }
                    current.push(n);
                    cursor++;
                }
            }
            pre.forEach((n) => lp.appendChild(n));
            post.forEach((n) => rp.appendChild(n));
        }
    }
};
MathMultiScriptsElement = __decorate([
    element('m-multiscripts')
], MathMultiScriptsElement);
export { MathMultiScriptsElement };
