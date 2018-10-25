import { MathMLElement, property } from './mathml-element.js';

export declare type MathColumnAlignType = 'left' | 'center' | 'right';
export declare type MathRowAlignType = 'axis' | 'baseline' | 'bottom' | 'center' | 'top';
export declare type MathBorderType = 'none' | 'solid' | 'dashed';

export class MathTableBaseElement extends MathMLElement {
  @property({ type: String }) columnalign?: MathColumnAlignType;
  @property({ type: String }) rowalign?: MathRowAlignType;

  protected updateAlignment() {
    const s = this.style;
    if (this.columnalign) {
      switch (this.columnalign) {
        case 'center':
          s.setProperty('--math-ml-columnalign', 'center');
          break;
        case 'left':
          s.setProperty('--math-ml-columnalign', 'left');
          break;
        case 'right':
          s.setProperty('--math-ml-columnalign', 'right');
          break;
        default:
          s.removeProperty('--math-ml-columnalign');
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