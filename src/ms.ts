import { MathMLElement, html, TemplateResult, element, property } from './mathml-element.js';

@element('m-s')
export class MathSElement extends MathMLElement {
  @property({ type: String, reflect: true }) lquote?: string;
  @property({ type: String, reflect: true }) rquote?: string;

  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: inline-block;
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
      :host:before {
        content: "\\0022";
        margin-right: -0.2em;
      }
      :host:after {
        content: "\\0022";
        margin-left: -0.2em;
      }
      :host([lquote]):before {
        content: attr(lquote)
      }
      :host([rquote]):after {
        content: attr(rquote)
      }
    </style>
    <slot></slot>
    `;
  }
}