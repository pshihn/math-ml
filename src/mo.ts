import { MathMLElement, html, TemplateResult, element, property } from './mathml-element.js';

export declare type MathOperatorForm = 'prefix' | 'infix' | 'postfix';

@element('m-o')
export class MathOElement extends MathMLElement {
  @property({ type: String }) form?: MathOperatorForm;
  @property({ type: Boolean }) stretchy?: boolean;

  private formStyle = '';

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
        align-self: baseline;
      }
      :host(.mo-infix) {
        margin: 0 0.2em;
        align-self: baseline;
      }
      :host(.mo-separator) {
        margin: 0 0.2em 0 0;
        align-self: baseline;
      }
      :host(.mo-product) {
        margin: 0;
        align-self: baseline;
      }
      :host(.mo-begin-brace) {
        align-self: stretch;
        margin: 0 0.05em 0 0.2em;
      }
      :host(.mo-end-brace) {
        align-self: stretch;
        margin: 0 0.2em 0 0.05em;
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
    let specialRule = '';
    let effectiveForm = this.form;
    if (!effectiveForm) {
      const parent = this.parentElement;
      // if (parent && (parent.tagName === 'M-ROW' || parent.tagName === 'MROW')) {
      if (parent) {
        const children = parent.children;
        if (children.length > 1) {
          if (children[0] === this) {
            effectiveForm = 'prefix';
          } else if (children[children.length - 1] === this) {
            effectiveForm = 'postfix';
          }
        }
      }
      const text = (this.textContent || '').trim();
      if (text === ',' || text === ';') {
        specialRule = 'separator';
      } else if (text === '.' || text === '⋅') {
        specialRule = 'product';
      } else if (text.match(/^[\[{(]*$/)) {
        specialRule = 'begin-brace';
      } else if (text.match(/^[\]})]*$/)) {
        specialRule = 'end-brace';
      }
    }
    effectiveForm = effectiveForm || 'infix';
    const newFormStyle = specialRule || effectiveForm;
    if (this.formStyle !== newFormStyle) {
      if (this.formStyle) {
        this.classList.remove(this.formStyle);
      }
      this.formStyle = `mo-${newFormStyle}`;
      this.classList.add(this.formStyle);
    }
    let effectiveStretch = this.stretchy;
    if (effectiveStretch === undefined) {
      if (getComputedStyle(this).getPropertyValue('--math-style-stretchy').trim() === 'true') {
        effectiveStretch = true;
      } else {
        effectiveStretch = effectiveForm === 'prefix' || effectiveForm === 'postfix' || specialRule === 'begin-brace' || specialRule === 'end-brace';
      }
    }
    span.style.width = null;
    if (!effectiveStretch) {
      span.style.transform = null;
      span.style.lineHeight = null;
      span.classList.remove('invisible');
    } else {
      span.style.lineHeight = '1';
      setTimeout(() => {
        if (span.style.transform) {
          return;
        }
        span.classList.remove('invisible');
        const spanSize = span.getBoundingClientRect();
        const size = this.getBoundingClientRect();
        const scaleY = spanSize.height ? (size.height / spanSize.height) : 1;
        const scaleX = spanSize.width ? (size.width / spanSize.width) : 1;
        if (scaleY <= 1) {
          span.style.lineHeight = null;
        }
        if (scaleX !== 1) {
          span.style.width = '100%';
        }
        span.style.transform = `scale(${scaleX}, ${scaleY})`;
      }, 50);
    }
  }
}