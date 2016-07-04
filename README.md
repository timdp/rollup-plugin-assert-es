# rollup-plugin-assert-es

[![npm](https://img.shields.io/npm/v/rollup-plugin-assert-es.svg)](https://www.npmjs.com/package/rollup-plugin-assert-es) [![Dependencies](https://img.shields.io/david/timdp/rollup-plugin-assert-es.svg)](https://david-dm.org/timdp/rollup-plugin-assert-es) [![Build Status](https://img.shields.io/travis/timdp/rollup-plugin-assert-es/master.svg)](https://travis-ci.org/timdp/rollup-plugin-assert-es) [![Coverage Status](https://img.shields.io/coveralls/timdp/rollup-plugin-assert-es/master.svg)](https://coveralls.io/r/timdp/rollup-plugin-assert-es) [![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

Verifies that bundled code is ES5.

## Installation

```bash
npm install --save-dev rollup-plugin-assert-es
```

## Usage

```js
import assertES from 'rollup-plugin-assert-es'

export default {
  entry: 'src/index.js',
  dest: 'dist/my-lib.js',
  plugins: [
    // ... other plugins here ...
    assertES()
  ]
}
```

## Options

### `ecmaVersion`

Target ECMAScript version. Defaults to 5.

### `include` and `exclude`

From [rollup-pluginutils](https://github.com/rollup/rollup-pluginutils#createfilter).

## Author

[Tim De Pauw](https://tmdpw.eu/)

## License

MIT
