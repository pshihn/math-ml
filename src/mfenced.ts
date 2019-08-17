import { MathMLElement, html, TemplateResult, customElement, property, PropertyValues } from './mathml-element.js';
import { HorizCenterFlex } from './styles/common-styles.js';
import { MathOElement } from './mo.js';
import './mo.js';

@customElement('math-fenced')
export class MathFencedElement extends MathMLElement {
  @property({ type: String }) close = ')';
  @property({ type: String }) open = '(';
  @property({ type: String }) separators = ',';

  render(): TemplateResult {
    return html`
    <style>
      ${HorizCenterFlex}
      :host {
        display: inline-block;
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
      #mfencedRow {
        align-items: stretch;
      }
    </style>
    <div id="mfencedRow" class="horizontal layout center"></div>
    <div style="display: hidden;">
      <slot @slotchange="${this.refreshSlot}"></slot>
    </div>
    `;
  }

  updated(propVals: PropertyValues) {
    super.updated(propVals);
    this.refreshSlot();
  }

  private isStretchyString(text: string): boolean {
    if (text.match(/^[0-9a-zA-Z,;\-_`'"]*$/)) {
      return false;
    }
    return true;
  }

  private nextSeparator(index: number): string | null {
    if (index >= 0) {
      if (this.separators.length) {
        if (index < this.separators.length) {
          return this.separators.charAt(index);
        }
        return this.separators.charAt(this.separators.length - 1);
      }
    }
    return null;
  }

  private refreshSlot() {
    if (!this.shadowRoot) {
      return;
    }
    const slot = this.shadowRoot!.querySelector('slot') as HTMLSlotElement;
    const panel = this.shadowRoot.querySelector('#mfencedRow') as HTMLElement;
    if (!slot || !panel) {
      return;
    }
    const nodes = slot.assignedNodes().filter((d) => d.nodeType === Node.ELEMENT_NODE);
    if (nodes.length) {
      while (panel.firstChild) {
        panel.removeChild(panel.firstChild);
      }
      let sepIndex = 0;
      for (let i = 0; i < nodes.length; i++) {
        // opener
        if (i === 0 && this.open) {
          const mo = new MathOElement();
          if (this.isStretchyString(this.open.trim())) {
            mo.stretchy = 'true';
          }
          mo.textContent = this.open;
          panel.appendChild(mo);
        }
        // item
        panel.appendChild(nodes[i]);
        // separator
        if (i < (nodes.length - 1)) {
          const sep = this.nextSeparator(sepIndex);
          if (sep) {
            sepIndex++;
            const mo = new MathOElement();
            if (this.isStretchyString(sep)) {
              mo.stretchy = 'true';
            }
            mo.textContent = sep;
            panel.appendChild(mo);
          }
        }
        if (i === (nodes.length - 1) && this.close) {
          const mo = new MathOElement();
          if (this.isStretchyString(this.close.trim())) {
            mo.stretchy = 'true';
          }
          mo.textContent = this.close;
          panel.appendChild(mo);
        }
      }
    }
  }
}