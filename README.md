# @tadashi/hex-id

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]

[npm-img]:         https://img.shields.io/npm/v/@tadashi/hex-id.svg
[npm]:             https://www.npmjs.com/package/@tadashi/hex-id
[ci-img]:          https://github.com/lagden/hex-id/actions/workflows/nodejs.yml/badge.svg
[ci]:              https://github.com/lagden/hex-id/actions/workflows/nodejs.yml
[coveralls-img]:   https://coveralls.io/repos/github/lagden/hex-id/badge.svg?branch=master
[coveralls]:       https://coveralls.io/github/lagden/hex-id?branch=master


Creates the unique ID based on the system time. (compatible with Mongo's ObjectID).

## Install

```
$ npm i @tadashi/hex-id
```


## Usage

This library can be used on the client or server side.

```js
import hexID from '@tadashi/hex-id'


hexID()
// => 5c48b2d79b156cb4effe05c8

hexID()
// => 5c48b2d79b156cb4effe05c9
```


## Team

[<img src="https://avatars.githubusercontent.com/u/130963?s=390" alt="Lagden" width="90">](https://github.com/lagden)


## Donate ❤️

- BTC: bc1q7famhuj5f25n6qvlm3sssnymk2qpxrfwpyq7g4


## License

MIT © [Thiago Lagden](https://github.com/lagden)
