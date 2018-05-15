import babel from 'rollup-plugin-babel';

let config = {
  input: 'src/browser.js',
  output: {
    file: 'dist/browser.js',
    name: 'MLogger',
    format: 'umd',
  },
  plugins: [babel({ exclude: 'node_modules/**' })],
};

if (process.env.BABEL_ENV === 'node') {
  config = {
    input: 'src/node.js',
    output: {
      file: 'dist/node.js',
      format: 'cjs',
    },
    plugins: [babel({ exclude: 'node_modules/**' })],
  };
}

export default config;
