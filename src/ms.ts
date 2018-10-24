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
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        word-spacing: inherit;
        letter-spacing: inherit;
        text-rendering: inherit;
        direction: inherit;
        unicode-bidi: inherit;
        font-style: inherit;
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