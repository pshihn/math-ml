import { MathMLElement, PropertyValues, html, TemplateResult, element } from './mathml-element.js';
import { HorizFlex } from './styles/common-styles.js';

@element('math-root')
export class MathRootElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      ${HorizFlex}
      :host {
        display: inline-block;
        vertical-align: bottom;
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
      ::slotted(:not(:first-child)) {
        font-size: 0.66em;
        position: absolute;
        top: 52%;
        right: 57%;
        transform: translate3d(-100%,-100%,0);
      }
    </style>
    <div class="horizontal layout" style="position: relative;">
      <div id="msqrtGlyphSpan"><svg><path id="rootPath"></path></svg></div>
      <div class="flex msqrtContent"><slot @slotchange="${this.onSlotCange}"></slot></div>
    </div>
    `;
  }

  updated(propVals: PropertyValues) {
    super.updated(propVals);
    this.onSlotCange();
  }

  private onSlotCange() {
    if (!this.shadowRoot) {
      return;
    }
    const slot = this.shadowRoot!.querySelector('slot') as HTMLSlotElement;
    if (!slot) {
      return;
    }
    setTimeout(() => {
      this.drawRoot();
    }, 10);
  }

  private drawRoot() {
    const span = this.shadowRoot!.querySelector('#msqrtGlyphSpan');
    const path = this.shadowRoot!.querySelector('#rootPath');
    if (span && path) {
      const size = (span as HTMLElement).getBoundingClientRect();
      const width = size.width;
      const height = size.height;
      const d = `M0 ${height * 0.55} H${width * 0.13} L${width * 0.45} ${height - 2} L${width} 0`;
      path.setAttribute('d', d);
    }
  }
}