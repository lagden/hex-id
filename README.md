# hexID

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]
[![XO code style][xo-img]][xo]


[npm-img]:         https://img.shields.io/npm/v/@tadashi/hex-id.svg
[npm]:             https://www.npmjs.com/package/@tadashi/hex-id
[ci-img]:          https://travis-ci.org/lagden/hex-id.svg
[ci]:              https://travis-ci.org/lagden/hex-id
[coveralls-img]:   https://coveralls.io/repos/github/lagden/hex-id/badge.svg?branch=master
[coveralls]:       https://coveralls.io/github/lagden/hex-id?branch=master
[xo-img]:          https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:              https://github.com/sindresorhus/xo

-----

Creates an unique ID based on the system time. (compatible with Mongo's ObjectID)

## Install

```
$ npm i -S @tadashi/hex-id
```


## Usage

You can use in `Node.js`, `Browser` and as `Module`.


### Example

```js
const hexID = require('@tadashi/hex-id')

hexID()
// => 5c48b2d79b156cb4effe05c8

hexID()
// => 5c48b2d79b156cb4effe05c9
```


## License

MIT © [Thiago Lagden](http://lagden.in)
