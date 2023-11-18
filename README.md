[![Coverage Status](https://coveralls.io/repos/github/fedeghe/searchHash/badge.svg?branch=master)](https://coveralls.io/github/fedeghe/searchHash?branch=master)
![noai](https://www.jmvc.org/img/HumanCoded100.png?x=1)

# searchHash  

```
> npm install searchhash
```

This module allows to search into an object literal at any level for:
- **key**
- **value**
- **key** **\&\&** **value**

RegExp can be used also, for example the following calls are valid: 

``` js
import sh from 'searchhash'
import obj from './../your/data.json'

// for key
const Kres = sh.forKey(obj, 'name'),
    rxKres = sh.forKey(obj, /name/),

    // for value
    Vres = sh.forValue(obj, 'Frances'),
    rxVres = sh.forValue(obj, /^fran/i),

    // for key && value
    KVres = sh.forKeyValue(obj, {key:'name', value : 'Frances'}),
    rxKVres = sh.forKeyValue(obj, {key:/name/, value : /^fran/i}),

    // to search You can as well use a function:
    KresFun = sh.forKey(obj, k => ['one', 'two'].includes(k)),
    VresFun = sh.forValue(obj, v => v % 2 === 0),
    KVresFun = sh.forKeyValue(obj, {
        key: k => ['one', 'two'].includes(k),
        value: v => v % 2 === 0
    });
``` 

Some options can be passed in a third generic parameter:

- **limit** [Integer]: stop searching whenever this number of results is reached (default `Infinity`)
- **min** [Integer]: start from that depth level, included (default `0`)
- **max** [Integer]: do not go deeper than that level, included (default `Infinity`)
- **sorter** [function]: a function to be used to sort the results

for example  
``` js
rxKres = sh.forKey(obj, /name/, { limit: 10, min: 2, max: 4});
```
will find at most 10 elements but only at a deepness between 2 and 4.



The result is an array containing 0 or more elements. The following is one of the element returned from a  search:

``` js
{ 
    obj: { a: 4, c: 'end' },  // the parent obj containig the result
    value: 4,                 // the value corresponding to the result
    key: 'a',                 // the key corresponding to the result
    parentKey: 'b',           // the key of the parent element
    path: 'b/b/b/a',          // the absolute path in the obj (in case)
                              //    of arrays may contain numbers for the 
                              //    indexes
    getter: [Function]        // a function that returns the result getting
                              //    it from the original obj
    container: 'b/b/b',       // path for the container
    parentContainer: 'b/b',   // path for the grandcontainer
    regexp: true,             // in case regexp is used in search contains 
                              //    the match result
    level: 3                  // depth of the result
}
```

To run the tests and know more about the implementation just get a look at the README.md into the source folder.
