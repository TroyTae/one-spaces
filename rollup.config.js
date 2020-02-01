const fs = require('fs')
const pkg = require('./package.json');
const { createConfig, clearDirectory } = require('rollup-config-troy-recommended');

const TYPES_FILE_NAME = 'index.d.ts';
clearDirectory('./dist');
fs.copyFileSync(`./src/${TYPES_FILE_NAME}`, `./dist/${TYPES_FILE_NAME}`);

module.exports = ['cjs', 'esm', 'iife'].map((format) => (
  createConfig({
    input: 'src/index.js',
    format,
    package: pkg
  })
));
