import { MathMLElement, html, TemplateResult, customElement } from './mathml-element.js';

@customElement('math-phantom')
export class MathPhantomElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;
      }
    </style>
    <slot></slot>
    `;
  }
}