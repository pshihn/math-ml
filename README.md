
# Math-ML

![MathML example](https://i.imgur.com/NZvMjWM.png)

A small (12.7kb gzipped) implementation of [MathML](https://developer.mozilla.org/en-US/docs/Web/MathML) using custom-elements. 

MathML has been part of part of the HTML5 spec for some time now, but many browsers don't support it (Chrome, for example). This is a simple attempt to use basic javascript, CSS and some SVG to implement MathML compatible notation that works across all browsers. _(All rendering is done on the client side)._

## Implementation

Math-ML is implemented using custom elements. There's a corresponding element for every MathML node. The root `<math>` node is replaced by `<math-ml>`. For all other nodes, the prefix `m` is replaces with `math-`. For example, `<mrow>` becomes `<math-row>` and `<msqrt>` becomes `<math-sqrt>`.

This is available as a polyfill as well. If MathML is not detected on the browser (every browser except Firefox), the polyfill replaces all `<math>` nodes with corresponding `<math-ml>` nodes. 

_Note: It's not feature complete with the MathML spec, but supports most complicates cases as seen in the [Torture Test](https://pshihn.github.io/math-ml/examples/torture.html)._

## Usage

Install from npm:
```
npm install --save mathml-elements
```

or simply from unpkg:

```html
<script src="https://unpkg.com/mathml-elements@latest/dist/bundled/mathml.min.js"></script>
```

To create the following expression: 
![MathML example](https://mdn.mozillademos.org/files/3076/ex1.png)

Using Math-ML components:
```html
<math-ml>
  <math-row>
    <math-sup>
      <math-i>x</math-i><math-n>2</math-n>
    </math-sup>
    <math-sup>
      <math-i>y</math-i><math-n>2</math-n>
    </math-sup>
  </math-row>
</math-ml>
```

Raw MathML version:
```html
<math>
  <mrow>
    <msup>
      <mi>x</mi><mn>2</mn>
    </msup>
    <msup>
      <mi>y</mi><mn>2</mn>
    </msup>
  </mrow>
</math>
```

## Examples

These examples are ported versions from [Mozilla Dev Network](https://developer.mozilla.org/en-US/docs/Web/MathML/Examples).

[Proving the Pythagorean theorem](https://pshihn.github.io/math-ml/examples/pythagorean-theorem.html)

[Deriving the Quadratic Formula](https://pshihn.github.io/math-ml/examples/quadratic-formula.html)

[Torture Test](https://pshihn.github.io/math-ml/examples/torture.html)

## Polyfill

Math-ML comes with a polyfill that will check if your browser has built in MathML support. If not, then it replaces all MathML elements with Math-ML custom elements.

To use the polyfill:

```html
<script src="https://unpkg.com/mathml-elements@latest/dist/bundled/mathml.polyfill.js"></script>
```

## Custom Element support

While most browsers (Chrome, Firefox, Safari) support custom elements, incluse the web-components polyfill to enabled them in unsupported ones

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-loader.js"></script>
```

## License
[MIT License](https://github.com/pshihn/windtalk/blob/master/LICENSE) (c) [Preet Shihn](https://twitter.com/preetster)
