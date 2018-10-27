*__NOTE__*: _This is a work in progress and not fully functioning._

# Math-ML

This is an implementation of [MathML](https://developer.mozilla.org/en-US/docs/Web/MathML) using custom-elements. 

MathML is only supported on Firefox even thought it's been a standardized spec. This is a simple attempt to use basic javascript, CSS and some SVG to implement MathML compatible notation that works across all browsers. 

## Implementation

Math-ML is implemented using custom elements. There's a corresponding element for every MathML node. The root `<math>` node is replaced by `<math-ml>`. For all other nodes, the prefix `m` is replaces with `m-`. For example, `<mrow>` becomes `<m-row>` and `<msqrt>` becomes `<m-sqrt>`.

This is available as a polyfill as well. If MathML is not detected on the browser (every browser except Firefox), the polyfill replaces all `<math>` nodes with corresponding `<math-ml>` nodes. 

## Exampples

This is still a work in progress, but here's a basic example:

[Proving the Pythagorean theorem](https://pshihn.github.io/math-ml/examples/pythagorean-theorem.html)
