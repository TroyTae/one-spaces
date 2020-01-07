const pkg = require('./package.json');
const fs = require('fs');
const rimraf = require('rimraf');
const {terser} = require('rollup-plugin-terser');

const DIST_DIRECTORY_PATH = './dist';
const TYPES_FILE_NAME = 'index.d.ts';
rimraf.sync(DIST_DIRECTORY_PATH);
fs.mkdirSync(DIST_DIRECTORY_PATH);
fs.copyFileSync(`./src/${TYPES_FILE_NAME}`, `${DIST_DIRECTORY_PATH}/${TYPES_FILE_NAME}`);

const createConfig = (format) => {
  const isBrowser = (format === 'iife');
  const file = (function() {
    switch (format) {
      case 'cjs': return pkg.main;
      case 'esm': return pkg.module;
      case 'iife': return `dist/${pkg.name}.js`;
    }
  })();
  return {
    input: 'src/index.js',
    output: {
      banner: `/**\n * @author ${pkg.author.name}\n * @version ${pkg.version}\n * @name ${pkg.name}\n */`,
      compact: isBrowser,
      strict : !isBrowser,
      format: format,
      file: file,
      name: pkg.name.split('-').map((v) => v.slice(0, 1).toUpperCase() + v.slice(1)).join(''),
    },
    plugins: [isBrowser ? terser() : null].filter(Boolean)
  };
};

module.exports = [
  createConfig('cjs'),
  createConfig('esm'),
  createConfig('iife')
];
