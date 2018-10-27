import minify from 'rollup-plugin-babel-minify';
import resolve from 'rollup-plugin-node-resolve';

const input = 'dist/all.js';

function onwarn(warning) {
  if (warning.code === 'THIS_IS_UNDEFINED')
    return;
  console.error(warning.message);
}

export default [
  {
    input,
    output: {
      file: `dist/mathml.min.js`,
      format: 'iife',
      name: 'mathml'
    },
    onwarn,
    plugins: [resolve(), minify({ comments: false })]
  }
];