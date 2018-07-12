[![Coverage Status](https://coveralls.io/repos/github/fedeghe/searchHash/badge.svg?branch=master)](https://coveralls.io/github/fedeghe/searchHash?branch=master)
[![Build Status](https://travis-ci.org/fedeghe/searchHash.svg?branch=master)](https://travis-ci.org/fedeghe/searchHash)

# searchHash  

This module allows to search a object literal at any level for:
- **key**
- **value**
- **key**:**value**


### build and test

Install all dev-deps and build

```
npm i && npm run build
```

the test folder is generated and can run just 

```
npm test
```



### then, in case, use it

RegExp can be used also, for example the following calls are valid:

```
var sh = require('searchHash'),
    obj = require("your/data.json");

// for key
var Kres = sh.forKey(obj, 'name'),
    rxKres = sh.forKey(obj, /name/);

// for value
var Vres = sh.forValue(obj, 'Frances'),
    rxVres = sh.forValue(obj, /^fran/i);

// for key:value
var KVres = sh.forKeyValue(obj, {key:'name', value : 'Frances'),
    rxKVres = sh.forKeyValue(obj, {key:/name/, value : /^fran/i);  

```

Some options can be passed in a third generic parameter:

- **limit** [Integer]: stop searching whenever this number of results is reached (default `Infinity`)
- **min** [Integer]: start from this deepness level, included (default `0`)
- **max** [Integer]: do not go deeper than that level, included (default `Infinity`)

for example  
```
rxKres = sh.forKey(obj, /name/, { limit: 10, min: 2, max: 4});
```
will find at most 10 elements but only at a deepness between 2 and 4.



The result is always an array containing 0 or more elements like the following (this is one result element from a forKey(4) search on a dummy obj, see test1.js ):

```
{ 
    obj: { a: 4, c: 'end' },  // the parent obj containig the result
    value: 4,                 // the value corresponding to the result
    key: 'a',                 // the key corresponding to the result
    parentKey: 'b',           // the key of the parent element
    path: 'b/b/b/a',          // the absolute path in the obj (in case)
                              //    of arrays may contain numbers for the 
                              //    indexes
    container: 'b/b/b',       // path for the container
    parentContainer: 'b/b',   // path for the grandcontainer
    regexp: true,             // in case regexp is used in search contains 
                              //    the match result
    level: 3                  // depth of the result
}
```

