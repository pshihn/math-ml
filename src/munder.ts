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
        text-align: var(--math-under-align, center);
        --math-style-displaystyle: false;
        counter-increment: math-style-scriptlevel;
        font-size: var(--math-under-font-size, 0.8em);
        --math-style-stretchy: true;
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
        s.setProperty('--math-under-align', 'right');
        break;
      case 'left':
        s.setProperty('--math-under-align', 'left');
        break;
      default:
        s.setProperty('--math-under-align', 'center');
        break;
    }
    s.setProperty('--math-under-font-size', this.accentunder ? '1em' : '0.8em');
  }
}