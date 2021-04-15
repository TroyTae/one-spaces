const pkg = require("./package.json");
const fs = require("fs-extra");
const { terser } = require("rollup-plugin-terser");

const input = "src/index.js";

function createConfig({ input, format, file }) {
  return {
    input,
    output: {
      file,
      format,
      exports: "auto",
      name: "spaces",
    },
    plugins: [terser()],
  };
}

fs.emptyDirSync("./dist");
fs.copyFileSync("./src/index.d.ts", "./dist/index.d.ts");

module.exports = [
  createConfig({ input, format: "cjs", file: pkg.main }),
  createConfig({ input, format: "esm", file: pkg.module }),
  createConfig({ input, format: "iife", file: `dist/${pkg.name}.js` }),
];
