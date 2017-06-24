# searchHash  

This module allows to search a object literal for:
- **key**
- **value**
- **key**:**value**


## install  
```
> npm install searchhash
```

## build it
```
> cd node_modules/searchhash  

> ./node_modules/malta/src/bin.js buildtr.json
// or, if malta is globally installed
> malta buildtr.json
```


RegExp can be used also, for example the following call are valid:

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
var KVres = sh.forValue(obj, {key:'name', value : 'Frances'),
    rxKVres = sh.forValue(obj, {key:/name/, value : /^fran/i);  

```


The result is always an array containing elements like the following (this is one result element from a forKey(4) search on a dummy obj, see test1.js ):

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
                              //     the match result
    level: 3                  // depth of the result
}
```