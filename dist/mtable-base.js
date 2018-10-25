var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { MathMLElement, property } from './mathml-element.js';
export class MathTableBaseElement extends MathMLElement {
    updateAlignment() {
        const s = this.style;
        if (this.columnalign) {
            switch (this.columnalign) {
                case 'left':
                    s.setProperty('--math-ml-columnalign', 'left');
                    break;
                case 'right':
                    s.setProperty('--math-ml-columnalign', 'right');
                    break;
                default:
                case 'center':
                    s.setProperty('--math-ml-columnalign', 'center');
                    break;
            }
        }
        if (this.rowalign) {
            switch (this.rowalign) {
                case 'baseline':
                    s.setProperty('--math-ml-rowalign', 'baseline');
                    break;
                case 'bottom':
                    s.setProperty('--math-ml-rowalign', 'bottom');
                    break;
                case 'axis':
                case 'center':
                    s.setProperty('--math-ml-rowalign', 'middle');
                    break;
                case 'top':
                    s.setProperty('--math-ml-rowalign', 'top');
                    break;
                default:
                    s.removeProperty('--math-ml-rowalign');
                    break;
            }
        }
    }
}
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], MathTableBaseElement.prototype, "columnalign", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], MathTableBaseElement.prototype, "rowalign", void 0);
