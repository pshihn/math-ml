import { MathMLElement, html, TemplateResult, element, property, MathAlignType } from './mathml-element.js';
import { VertFlex } from './styles/common-styles.js';

@element('m-under')
export class MathUnderElement extends MathMLElement {
  @property({ type: Boolean, reflect: true }) accentunder = false;
  @property() align: MathAlignType = 'center';

  render(): TemplateResult {
    return html`
    <style>
      ${VertFlex}
      :host {
        display: inline-block;
      }
      ::slotted(:not(:first-child)) {
        width: 100%;
        line-height: 1;
        margin: 0;
        text-align: var(--math-over-align, center);
        --math-style-displaystyle: false;
        counter-increment: math-style-scriptlevel;
      }
    </style>
    <div class="vertical layout">
      <slot></slot>
    </div>
    `;
  }

  updated() {
    const s = this.style;
    switch (this.align) {
      case 'right':
        s.setProperty('--math-over-align', 'right');
        break;
      case 'left':
        s.setProperty('--math-over-align', 'left');
        break;
      default:
        s.setProperty('--math-over-align', 'center');
        break;
    }
  }
}