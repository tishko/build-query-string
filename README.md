[![build status](https://api.travis-ci.com/tishko/build-query-string.svg)](https://travis-ci.com/tishko/build-query-string)
[![version](https://img.shields.io/npm/v/build-query-string.svg)](https://www.npmjs.com/package/build-query-string)
[![downloads](https://img.shields.io/npm/dm/build-query-string.svg)](https://www.npmjs.com/package/build-query-string)
[![coverage](https://coveralls.io/repos/github/tishko/build-query-string/badge.svg)](https://coveralls.io/github/tishko/build-query-string)

# build-query-string

The easiest way to convert an object to a query string for an API call

## Usage
```js
var buildQueryString = require('build-query-string');

console.log(buildQueryString({ user: 12, mobile: 'AT&T', device: 'iPhone' }));
// => "user=12&mobile=AT%26T&device=iPhone"
```

## Installation

With [npm](https://npmjs.org) do
```bash
$ npm i build-query-string --save
```

## License

[MIT](LICENSE)