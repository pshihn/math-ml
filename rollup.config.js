import minify from 'rollup-plugin-babel-minify';
import resolve from 'rollup-plugin-node-resolve';

function onwarn(warning) {
  if (warning.code === 'THIS_IS_UNDEFINED')
    return;
  console.error(warning.message);
}

export default [
  {
    input: 'dist/all.js',
    output: {
      file: `dist/bundled/mathml.min.js`,
      format: 'iife',
      name: 'mathml'
    },
    onwarn,
    plugins: [resolve(), minify({ comments: false })]
  },
  {
    input: 'dist/polyfill.js',
    output: {
      file: `dist/bundled/mathml.polyfill.js`,
      format: 'iife',
      name: 'mathmlPolyfill'
    },
    onwarn,
    plugins: [minify({ comments: false })]
  }
];