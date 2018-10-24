import { html, TemplateResult } from '../mathml-element';

const horizontal = `.layout.horizontal {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
}`;

const vertical = `.layout.vertical {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  flex-direction: column;
}`;

const flex = `.flex {
  -ms-flex: 1 1 0.000000001px;
  -webkit-flex: 1;
  flex: 1;
  -webkit-flex-basis: 0.000000001px;
  flex-basis: 0.000000001px;
}`;

const center = `.center {
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}`;

export const VertFlex: TemplateResult = html`
  ${vertical}
  ${flex}
`;

export const HorizFlex: TemplateResult = html`
  ${horizontal}
  ${flex}
`;

export const HorizCenterFlex: TemplateResult = html`
  ${horizontal}
  ${flex}
  ${center}
`;