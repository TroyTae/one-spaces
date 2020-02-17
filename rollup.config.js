const pkg = require('./package.json');
const { createConfig, clearDirectory } = require('rollup-config-troy-recommended');

clearDirectory('./dist');

module.exports = ['cjs', 'esm', 'iife'].map((format) => (
  createConfig({
    input: 'src/index.ts',
    format,
    package: pkg
  })
));
