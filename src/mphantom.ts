import { MathMLElement, html, TemplateResult, element } from './mathml-element.js';

@element('m-phantom')
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