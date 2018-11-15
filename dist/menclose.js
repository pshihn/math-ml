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
const SVGNS = 'http://www.w3.org/2000/svg';
let MathEncloseElement = class MathEncloseElement extends MathMLElement {
    constructor() {
        super(...arguments);
        this.notation = 'longdiv';
    }
    render() {
        return html `
    <style>
      :host {
        display: inline-block;
        position: relative;
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
      svg {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: none;
      }
      ellipse, path {
        fill: none;
        stroke: currentColor;
        stroke-width: 1;
      }
    </style>
    <div id="menclosePanel"><slot @slotchange="${this.refresh}"></slot></div>
    <svg></svg>
    `;
    }
    updated(propVals) {
        super.updated(propVals);
        this.refresh();
    }
    refresh() {
        if (!this.shadowRoot) {
            return;
        }
        if ((!this.shadowRoot.querySelector('svg')) || (!this.shadowRoot.querySelector('slot'))) {
            return;
        }
        setTimeout(() => this.redraw(), 100);
    }
    adjustPadding(paddings, suggestions) {
        for (let i = 0; i < suggestions.length; i++) {
            paddings[i] = Math.max(paddings[i], suggestions[i]);
        }
    }
    redraw() {
        const svg = this.shadowRoot.querySelector('svg');
        const panel = this.shadowRoot.querySelector('#menclosePanel');
        const size = this.getBoundingClientRect();
        const paddings = [0, 0, 0, 0];
        const tokens = (this.notation || '').trim().split(' ').filter((d) => { return d.trim() ? true : false; });
        tokens.forEach((t) => {
            switch (t) {
                case 'longdiv':
                    this.adjustPadding(paddings, [2, 0, 0, 12]);
                    break;
                case 'actuarial':
                    this.adjustPadding(paddings, [2, 2, 0, 0]);
                    break;
                case 'radical':
                    this.adjustPadding(paddings, [2, 0, 0, 18]);
                    break;
                case 'phasorangle':
                    this.adjustPadding(paddings, [0, 0, 2, 16]);
                    break;
                case 'circle':
                    this.adjustPadding(paddings, [2, 4, 2, 4]);
                    break;
                default:
                    this.adjustPadding(paddings, [1, 1, 1, 1]);
                    break;
            }
        });
        panel.style.padding = paddings.join('px ').trim() + 'px';
        const width = size.width + paddings[1] + paddings[3];
        const height = size.height + paddings[0] + paddings[2];
        svg.style.width = `${width}px`;
        svg.style.height = `${height}px`;
        while (svg.firstChild) {
            svg.removeChild(svg.firstChild);
        }
        panel.style.borderTop = null;
        panel.style.borderBottom = null;
        panel.style.borderLeft = null;
        panel.style.borderRight = null;
        panel.style.borderRadius = null;
        tokens.forEach((t) => {
            switch (t) {
                case 'longdiv': {
                    const path = document.createElementNS(SVGNS, 'path');
                    path.setAttribute('d', `M0 1 H ${width} M0 1 C 8 ${height * 0.33} 8 ${height * 0.66} 0 ${height}`);
                    svg.appendChild(path);
                    break;
                }
                case 'actuarial':
                    panel.style.borderRight = '1px solid';
                    panel.style.borderTop = '1px solid';
                    break;
                case 'radical': {
                    const path = document.createElementNS(SVGNS, 'path');
                    path.setAttribute('d', `M0 ${height * 0.55} H${18 * 0.13} L${18 * 0.45} ${height - 2} L${18} 1 L${width} 1`);
                    svg.appendChild(path);
                    break;
                }
                case 'box':
                    panel.style.borderRight = '1px solid';
                    panel.style.borderTop = '1px solid';
                    panel.style.borderLeft = '1px solid';
                    panel.style.borderBottom = '1px solid';
                    break;
                case 'roundedbox':
                    panel.style.borderRight = '1px solid';
                    panel.style.borderTop = '1px solid';
                    panel.style.borderLeft = '1px solid';
                    panel.style.borderBottom = '1px solid';
                    panel.style.borderRadius = '5px';
                    break;
                case 'circle': {
                    const ellipse = document.createElementNS(SVGNS, 'ellipse');
                    ellipse.setAttribute('cx', `${width / 2}`);
                    ellipse.setAttribute('cy', `${height / 2}`);
                    ellipse.setAttribute('rx', `${width / 2 - 2}`);
                    ellipse.setAttribute('ry', `${height / 2 - 2}`);
                    svg.appendChild(ellipse);
                    break;
                }
                case 'left':
                    panel.style.borderLeft = '1px solid';
                    break;
                case 'right':
                    panel.style.borderRight = '1px solid';
                    break;
                case 'top':
                    panel.style.borderTop = '1px solid';
                    break;
                case 'bottom':
                    panel.style.borderBottom = '1px solid';
                    break;
                case 'madruwb':
                    panel.style.borderRight = '1px solid';
                    panel.style.borderBottom = '1px solid';
                    break;
                case 'updiagonalstrike': {
                    const path = document.createElementNS(SVGNS, 'path');
                    path.setAttribute('d', `M1 ${height - 1} L${width - 1} ${1}`);
                    svg.appendChild(path);
                    break;
                }
                case 'downdiagonalstrike': {
                    const path = document.createElementNS(SVGNS, 'path');
                    path.setAttribute('d', `M1 1 L${width - 1} ${height - 1}`);
                    svg.appendChild(path);
                    break;
                }
                case 'verticalstrike': {
                    const path = document.createElementNS(SVGNS, 'path');
                    path.setAttribute('d', `M${width / 2} 1 L${width / 2} ${height - 1}`);
                    svg.appendChild(path);
                    break;
                }
                case 'horizontalstrike': {
                    const path = document.createElementNS(SVGNS, 'path');
                    path.setAttribute('d', `M1 ${height / 2} L${width - 1} ${height / 2}`);
                    svg.appendChild(path);
                    break;
                }
                case 'updiagonalarrow': {
                    const path = document.createElementNS(SVGNS, 'path');
                    path.setAttribute('d', `M1 ${height - 1} L${width - 1} ${1}`);
                    svg.appendChild(path);
                    const a1 = Math.atan(height / width);
                    const a2 = (Math.PI / 2 - a1) - (Math.PI / 6);
                    const a3 = (Math.PI / 6) + a2;
                    const x1 = Math.sin(a2) * 8;
                    const y1 = Math.cos(a2) * 8;
                    const path2 = document.createElementNS(SVGNS, 'path');
                    path2.setAttribute('d', `M${width - 1} ${1} L${width - 1 - x1} ${1 + y1} l${-Math.cos(a3) * 8} ${-Math.sin(a3) * 8} Z`);
                    path2.style.fill = 'currentColor';
                    svg.appendChild(path2);
                    break;
                }
                case 'phasorangle': {
                    const path = document.createElementNS(SVGNS, 'path');
                    path.setAttribute('d', `M16 1 L1 ${height - 1} L${width} ${height - 1}`);
                    svg.appendChild(path);
                    break;
                }
                default:
                    break;
            }
        });
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], MathEncloseElement.prototype, "notation", void 0);
MathEncloseElement = __decorate([
    element('math-enclose')
], MathEncloseElement);
export { MathEncloseElement };
