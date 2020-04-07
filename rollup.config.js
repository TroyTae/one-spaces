const pkg = require('./package.json');
const {clearDirectory} = require('troyjs/node');
const {createUniversalConfigs} = require('troyjs/rollup');

clearDirectory('./dist');

module.exports = createUniversalConfigs({
  input: 'src/index.ts',
  package: pkg
});
