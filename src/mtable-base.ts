import { MathMLElement, property, MathRowAlignType } from './mathml-element.js';

export class MathTableBaseElement extends MathMLElement {
  @property({ type: String }) columnalign?: string;
  @property({ type: String }) rowalign?: MathRowAlignType;

  protected updateAlignment() {
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