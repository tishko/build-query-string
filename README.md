 [![Version](https://img.shields.io/npm/v/build-query-string.svg)](https://www.npmjs.com/package/build-query-string)
 [![Downloads](https://img.shields.io/npm/dt/build-query-string.svg)](https://www.npmjs.com/package/build-query-string)
 
 # build-query-string
 
 The easiest way to convert JSON to a query string for an API call
 
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
 
 MIT