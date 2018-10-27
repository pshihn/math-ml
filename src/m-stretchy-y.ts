import { MathMLElement, html, TemplateResult, element } from './mathml-element.js';

@element('m-stretchy-y')
export class MathStretchyYElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
        position: relative;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }
      .invisible {
        opacity: 0;
      }
    </style>
    <span class="invisible"><slot @slotchange="${this.onSlotChange}"></slot></span>
    `;
  }
  updated() {
    this.onSlotChange();
  }

  private onSlotChange() {
    if (!this.shadowRoot) {
      return;
    }
    const span = this.shadowRoot.querySelector('span');
    if (!span) {
      return;
    }
    setTimeout(() => {
      if (span.style.transform) {
        return;
      }
      span.classList.remove('invisible');
      const spanSize = span.getBoundingClientRect();
      const size = this.getBoundingClientRect();
      const scale = spanSize.height ? (size.height / spanSize.height) : 1;
      span.style.transform = `scaleY(${scale})`;
    }, 50);
  }
}