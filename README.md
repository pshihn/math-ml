# Math-ML

A small (12.7kb gzipped) implementation of [MathML](https://developer.mozilla.org/en-US/docs/Web/MathML) using custom-elements. 

MathML is only supported on Firefox even thought it's been part of the HTML5 spec. This is a simple attempt to use basic javascript, CSS and some SVG to implement MathML compatible notation that works across all browsers. 

## Implementation

Math-ML is implemented using custom elements. There's a corresponding element for every MathML node. The root `<math>` node is replaced by `<math-ml>`. For all other nodes, the prefix `m` is replaces with `m-`. For example, `<mrow>` becomes `<m-row>` and `<msqrt>` becomes `<m-sqrt>`.

This is available as a polyfill as well. If MathML is not detected on the browser (every browser except Firefox), the polyfill replaces all `<math>` nodes with corresponding `<math-ml>` nodes. 

## Usage

Install from npm:
```
npm install --save math-ml
```

or simply from unpkg:

```html
<script src="https://unpkg.com/windtalk@latest/dist/mathml.min.js"></script>
```

To create the following image: 
![MathML example](https://mdn.mozillademos.org/files/3076/ex1.png)

Using Math-ML components:
```html
<math-ml>
  <m-row>
    <m-sup>
      <m-i>x</m-i>
      <m-n>2</m-n>
    </m-sup>
    <m-sup>
      <m-i>y</m-i>
      <m-n>2</m-n>
    </m-sup>
  </m-row>
</math-ml>
```

Raw MathML version:
```html
<math>
  <mrow>
    <msup>
      <mi>x</mi>
      <mn>2</mn>
    </msup>
    <msup>
      <mi>y</mi>
      <mn>2</mn>
    </msup>
  </mrow>
</math>
```

## Examples

These examples are ported versions from [Mozilla Dev Network](https://developer.mozilla.org/en-US/docs/Web/MathML/Examples).

[Proving the Pythagorean theorem](https://pshihn.github.io/math-ml/examples/pythagorean-theorem.html)

[Deriving the Quadratic Formula](https://pshihn.github.io/math-ml/examples/examples/quadratic-formula.html)

[Torture Test](https://pshihn.github.io/math-ml/examples/examples/torture.html)

## Polyfill


