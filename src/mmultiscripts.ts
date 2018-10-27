import { MathMLElement, html, TemplateResult, element } from './mathml-element.js';
import { AllFlex } from './styles/common-styles.js';

@element('m-multiscripts')
export class MathMultiScriptsElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      ${AllFlex}
      :host {
        display: inline-block;
      }
      .sup {
        font-size: 0.75em;
        --math-style-displaystyle: false;
        counter-increment: math-style-scriptlevel;
      }
      .sub {
        font-size: 0.75em;
        align-self: flex-end;
        --math-style-displaystyle: false;
        counter-increment: math-style-scriptlevel;
      }
      #cScriptPanel * {
        padding: 0.3em 0.16em;
      }
      #lScriptPanel .sub {
        transform: translateX(100%);
      }
      #rScriptPanel .sup {
        transform: translateX(-100%);
      }
    </style>
    <div class="horizontal layout">
      <div id="lScriptPanel" class="horizontal layout"></div>
      <div id="cScriptPanel"></div>
      <div id="rScriptPanel" class="horizontal layout"></div>
    </div>
    <div style="display: hidden;">
      <slot @slotchange="${this.refreshSlot}"></slot>
    </div>
    `;
  }

  updated() {
    this.refreshSlot();
  }

  private clearNodes(nodes: HTMLElement[]): void {
    nodes.forEach((node) => {
      while (node.firstChild) {
        node.removeChild(node.firstChild);
      }
    });
  }

  private refreshSlot() {
    if (!this.shadowRoot) {
      return;
    }
    const slot = this.shadowRoot!.querySelector('slot') as HTMLSlotElement;
    if (!slot) {
      return;
    }
    const nodes = slot.assignedNodes().filter((d) => d.nodeType === Node.ELEMENT_NODE);
    if (nodes.length === 1 && ((nodes[0] as HTMLElement).tagName === 'm-prescripts'.toUpperCase())) {
      return;
    }

    if (nodes.length) {
      const lp = this.shadowRoot.querySelector('#lScriptPanel') as HTMLElement;
      const rp = this.shadowRoot.querySelector('#rScriptPanel') as HTMLElement;
      const cp = this.shadowRoot.querySelector('#cScriptPanel') as HTMLElement;
      this.clearNodes([lp, cp, rp]);
      cp.appendChild(nodes[0]);
      let cursor = 0;
      const pre: HTMLElement[] = [];
      const post: HTMLElement[] = [];
      let current = post;
      for (let i = 1; i < nodes.length; i++) {
        const n = nodes[i] as HTMLElement;
        if (n.tagName === 'm-prescripts'.toUpperCase()) {
          current = pre;
          cursor = 0;
        } else {
          if (cursor % 2) {
            n.classList.add('sup');
          } else {
            n.classList.add('sub');
          }
          current.push(n);
          cursor++;
        }
      }
      pre.forEach((n) => lp.appendChild(n));
      post.forEach((n) => rp.appendChild(n));
    }
  }
}