const pkg = require('./package.json');
const {terser} = require('rollup-plugin-terser');
const typescript = require('rollup-plugin-typescript2');

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
    input: 'src/index.ts',
    output: {
      banner: `/**\n * @author ${pkg.author.name}\n * @version ${pkg.version}\n * @name ${pkg.name}\n */`,
      compact: isBrowser,
      strict : !isBrowser,
      format: format,
      file: file,
      name: pkg.name.split('-').map((v) => v.slice(0, 1).toUpperCase() + v.slice(1)).join(''),
    },
    plugins: [
      typescript({ clean: true }),
      isBrowser ? terser() : null
    ].filter(Boolean)
  };
};

module.exports = [
  createConfig('cjs'),
  createConfig('esm'),
  createConfig('iife')
];
