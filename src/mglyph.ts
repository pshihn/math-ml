import { MathMLElement, html, TemplateResult, element, property } from './mathml-element.js';

@element('math-glyph')
export class MathGlyphElement extends MathMLElement {
  @property({ type: String }) src?: string;
  @property({ type: String }) width = 'auto';
  @property({ type: String }) height = 'auto';
  @property({ type: String }) valign = 'auto';
  @property({ type: String }) alt = '';

  render(): TemplateResult {
    const v = this.valign ? (this.valign.indexOf('-') === 0 ? this.valign.substring(1) : `-${this.valign}`) : '0';
    const style = this.src ? `width: ${this.width || 'auto'}; height: ${this.height || 'auto'}; transform: translate3d(0,${v},0);` : 'display: none;';
    return html`
    <style>
      :host {
        display: inline-block;
        background: var(--math-background, inherit);
      }
      img {
        display: block;
      }
    </style>
    <img src="${this.src || ''}" alt="${this.alt}" style="${style}">
    `;
  }
}