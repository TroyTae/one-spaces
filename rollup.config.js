const pkg = require('./package.json');
const fs  = require('fs-extra');
const {createUniversalConfigs} = require('troyjs/rollup');

fs.emptyDirSync('./dist');

module.exports = createUniversalConfigs({
  input: 'src/index.ts',
  package: pkg
});
