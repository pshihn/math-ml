var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MathMLElement, html, customElement } from './mathml-element.js';
import { AllFlex } from './styles/common-styles.js';
let MathMultiScriptsElement = class MathMultiScriptsElement extends MathMLElement {
    constructor() {
        super(...arguments);
        this.pendingLayout = false;
    }
    render() {
        return html `
    <style>
      ${AllFlex}
      :host {
        display: inline-block;
        position: relative;
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
      ::slotted(:first-child) {
        padding: 0 0.16em;
      }
      ::slotted(:not(:first-child)) {
        font-size: 0.75em;
        --math-style-level: sub;
        position: absolute;
        opacity: 0;
        line-height: 1;
      }
      ::slotted(.rightscript) {
        left: 100%;
      }
      ::slotted(.leftscript) {
        right: 100%;
      }
    </style>
    <div class="horizontal layout">
      <slot @slotchange="${this.refreshSlot}"></slot>
    </div>
    `;
    }
    refreshSlot() {
        if (this.pendingLayout) {
            return;
        }
        if (!this.shadowRoot) {
            return;
        }
        const slot = this.shadowRoot.querySelector('slot');
        if (!slot) {
            return;
        }
        const nodes = slot.assignedNodes().filter((d) => d.nodeType === Node.ELEMENT_NODE);
        if (nodes.length === 1 && (nodes[0].tagName === 'math-prescripts'.toUpperCase())) {
            return;
        }
        if (nodes.length > 2) {
            this.pendingLayout = true;
            const runnable = () => {
                const postNodes = [null, null];
                const preNodes = [null, null];
                let current = postNodes;
                for (let i = 1; i < nodes.length; i++) {
                    const n = nodes[i];
                    if (n.tagName === 'math-prescripts'.toUpperCase()) {
                        current = preNodes;
                    }
                    else {
                        if (!current[0]) {
                            current[0] = n;
                        }
                        else if (!current[1]) {
                            current[1] = n;
                        }
                    }
                }
                const s1 = nodes[0].getBoundingClientRect();
                const margins = [0, 0, 0, 0];
                // do post
                {
                    // sub
                    if (postNodes[0]) {
                        const subNode = postNodes[0];
                        const subSize = subNode.getBoundingClientRect();
                        subNode.style.opacity = '1';
                        subNode.classList.add('rightscript');
                        const hh = s1.height / 2;
                        let db = hh;
                        if ((hh + subSize.height) < s1.height) {
                            db = s1.height - subSize.height;
                        }
                        else {
                            margins[2] = (hh + subSize.height) - s1.height;
                        }
                        subNode.style.top = `${db}px`;
                        margins[1] = subSize.width + 5;
                    }
                    // sup
                    if (postNodes[1]) {
                        const supNode = postNodes[1];
                        supNode.style.opacity = '1';
                        supNode.classList.add('rightscript');
                        const supSize = supNode.getBoundingClientRect();
                        const db = supSize.bottom - (s1.bottom - (s1.height / 2));
                        if (db > 0) {
                            supNode.style.top = `${-db}px`;
                            margins[0] = db;
                        }
                        margins[1] = Math.max(supSize.width + 5, margins[1]);
                    }
                }
                // do pre
                {
                    // sub
                    if (preNodes[0]) {
                        const subNode = preNodes[0];
                        const subSize = subNode.getBoundingClientRect();
                        subNode.style.opacity = '1';
                        subNode.classList.add('leftscript');
                        const hh = s1.height / 2;
                        let db = hh;
                        if ((hh + subSize.height) < s1.height) {
                            db = s1.height - subSize.height;
                        }
                        else {
                            margins[2] = Math.max((hh + subSize.height) - s1.height, margins[2]);
                        }
                        subNode.style.top = `${db}px`;
                        margins[3] = Math.max(subSize.width + 5, margins[3]);
                    }
                    // sup
                    if (preNodes[1]) {
                        const supNode = preNodes[1];
                        supNode.style.opacity = '1';
                        supNode.classList.add('leftscript');
                        const supSize = supNode.getBoundingClientRect();
                        const db = supSize.bottom - (s1.bottom - (s1.height / 2));
                        if (db > 0) {
                            supNode.style.top = `${-db}px`;
                            margins[0] = Math.max(db, margins[0]);
                        }
                        margins[3] = Math.max(supSize.width + 5, margins[3]);
                    }
                }
                this.style.margin = `${margins[0]}px ${margins[1]}px ${margins[2]}px ${margins[3]}px`;
            };
            setTimeout(runnable, 100);
            setTimeout(() => {
                this.pendingLayout = false;
                runnable();
            }, 800);
        }
    }
};
MathMultiScriptsElement = __decorate([
    customElement('math-multiscripts')
], MathMultiScriptsElement);
export { MathMultiScriptsElement };
