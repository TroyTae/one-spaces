const pkg = require('./package.json');
const fs  = require('fs-extra');
const {createUniversalConfigs} = require('troyjs/rollup');

fs.emptyDirSync('./dist');
fs.copyFileSync('./src/index.d.ts', './dist/index.d.ts');

module.exports = createUniversalConfigs({
  input: 'src/index.js',
  package: pkg
});
