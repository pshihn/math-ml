import { MathMLElement, PropertyValues, html, TemplateResult, element, property } from './mathml-element.js';

@element('m-padded')
export class MathPaddedElement extends MathMLElement {
  @property({ type: String }) height?: string;
  @property({ type: String }) width?: string;

  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: inline-block;
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
    </style>
    <div id="mpaddedPanel"><slot></slot></div>
    `;
  }

  updated(propVals: PropertyValues) {
    super.updated(propVals);
    this.refresh();
  }

  private refresh() {
    if (!this.shadowRoot) {
      return;
    }
    const panel = this.shadowRoot!.querySelector('#mpaddedPanel') as HTMLElement;
    if (!panel) {
      return;
    }
    setTimeout(() => {
      const size = panel.getBoundingClientRect();
      if (this.height) {
        if (this.height.charAt(0) === '+') {
          this.style.paddingTop = this.height.substring(1);
        } else if (this.height.charAt(0) === '-') {
          this.style.height = `calc(${size.height}px - ${this.height.substring(1)})`;
          this.style.paddingTop = '0';
        } else {
          this.style.height = this.height;
          this.style.paddingTop = '0';
        }
      } else {
        this.style.height = 'auto';
        this.style.paddingTop = '0';
      }
      if (this.width) {
        if (this.width.charAt(0) === '+' || this.width.charAt(0) === '-') {
          this.style.width = `calc(${size.width}px + ${this.width.substring(1)})`;
        } else {
          this.style.width = this.width;
        }
      } else {
        this.style.width = 'auto';
      }
      console.log(size);
    }, 50);
  }
}