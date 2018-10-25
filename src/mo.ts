import { MathMLElement, html, TemplateResult, element, property } from './mathml-element.js';

export declare type MathOperatorForm = 'prefix' | 'infix' | 'postfix';

// TODO: check for suffix positioning
// if it is the only element in an implicit or explicit mrow and if it is in a script position of
// one of the elements listed in Section 3.4 Script and Limit Schemata, the postfix form is used;

// TODO: Accent
// Specifies whether this operator should be treated as an accent (diacritical mark) when used as an underscript or overscript; see munder, mover and munderover.

// TODO: Lspace/Rspace as style?

// TODO: whole lota stuff related to stretchy

@element('m-o')
export class MathOElement extends MathMLElement {
  private formStyle = '';

  @property({ type: String }) form?: MathOperatorForm;
  @property({ type: Boolean, reflect: true }) fence = false;
  @property({ type: Boolean, reflect: true }) accent = false;
  @property({ type: Boolean, reflect: true }) largeop = false;

  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: inline-block;
        font-size: inherit;
        font-style: inherit;
        font-family: inherit;
        line-height: inherit;
        word-spacing: inherit;
        letter-spacing: inherit;
        text-rendering: inherit;
        direction: inherit;
        unicode-bidi: inherit;
      }
      :host(.mo-infix) {
        margin: 0 0.2em;
      }
      :host(.mo-separator) {
        margin: 0 0.2em 0 0;
      }
      :host(.mo-product) {
        margin: 0;
      }
      :host([largeop]) {
        font-size: var(--int-math-ml-largeop-size, inherit);
      }
    </style>
    <slot></slot>
    `;
  }

  updated() {
    let specialRule = '';
    let effectiveForm = this.form;
    if (!effectiveForm) {
      const parent = this.parentElement;
      if (parent && (parent.tagName === 'M-ROW' || parent.tagName === 'MROW')) {
        const children = parent.children;
        if (children.length > 1) {
          if (children[0] === this) {
            effectiveForm = 'prefix';
          } else if (children[children.length - 1] === this) {
            effectiveForm = 'postfix';
          }
        }
      }
      if (!effectiveForm) {
        const text = (this.textContent || '').trim();
        if (text === ',' || text === ';') {
          specialRule = 'separator';
        } else if (text === '.' || text === '⋅') {
          specialRule = 'product';
        }
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

  }
}