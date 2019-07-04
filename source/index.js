
var searchHash = (function () {
    var ERRORS = {
        BAD1: {
            type: 'BAD_PARAMS',
            message: 'Either a Literal Object either an array should be passed as second parameter'
        }
    };

    // some utility func
    function jCompare (obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
    function isNode (o) {
        return o &&
            typeof o === 'object' &&
            typeof o.nodeType === 'number' &&
            typeof o.nodeName === 'string';
    }
    function isElement (o) {
        return o &&
            typeof o === 'object' &&
            o !== null &&
            o.nodeType === 1 &&
            typeof o.nodeName === 'string';
    }
    function isString (o) {
        return typeof o === 'string' || o instanceof String;
    }

    /**
     * Main searching function
     */
    function digFor (what, obj, target, opts) {
        var t,
            startingTime = +new Date(),
            endingTime = 0,
            found = 0,
            matches = {
                key: function (k1, k2, key) {
                    return (isString(k1) && key instanceof RegExp)
                        ? k1.match(key)
                        : jCompare(k1, key);
                },
                value: function (k1, k2, val) {
                    return (isString(k2) && val instanceof RegExp)
                        ? k2.match(val)
                        : jCompare(k2, val);
                },
                keyvalue: function (k1, k2, keyval) {
                    return (
                        (isString(k1) && keyval.key instanceof RegExp)
                            ? k1.match(keyval.key)
                            : jCompare(k1, keyval.key)
                    ) && (
                        (isString(k2) && keyval.value instanceof RegExp)
                            ? k2.match(keyval.value)
                            : jCompare(k2, keyval.value)
                    );
                }
            }[what],
            res = {
                timeElapsed: 0,
                results: []
            },
            maybeDoPush = function (path, index, trg, obj, level) {
                var p = [].concat.call(path, [index]),
                    tmp = matches(index, obj[index], trg),
                    inRange = opts.min <= level && level <= opts.max;

                if (inRange && tmp) {
                    res.results.push({
                        obj: obj,
                        value: obj[index],
                        key: p[p.length - 1],
                        parentKey: p[p.length - 2],
                        path: p.join('/'),
                        container: p.slice(0, p.length - 1).join('/'),
                        parentContainer: p.slice(0, p.length - 2).join('/'),
                        regexp: tmp,
                        level: level
                    });
                    found++;
                }
                dig(obj[index], trg, p, level + 1);
            },
            dig = function (o, k, path, level) {
                if (isNode(o) && isElement(o)) throw ERRORS.BAD1;
                var i, l;

                if (o instanceof Array) {
                    for (i = 0, l = o.length; i < l; i++) {
                        maybeDoPush(path, i, k, o, level);
                        if (opts.limit === found) break;
                    }
                } else if (typeof o === 'object') {
                    for (i in o) {
                        maybeDoPush(path, i, k, o, level);
                        if (opts.limit === found) break;
                    }
                }
            };

        opts.limit = 'limit' in opts ? ~~(opts.limit) : Infinity;
        opts.min = 'min' in opts ? ~~(opts.min) : 0;
        opts.max = 'max' in opts ? ~~(opts.max) : Infinity;

        opts.min = opts.min < 0 ? 0 : opts.min;
        if (opts.max < opts.min) {
            t = opts.min;
            opts.min = opts.max;
            opts.max = t;
        }
        dig(obj, target, [], 0);
        endingTime = +new Date();
        res.timeElapsed = endingTime - startingTime;
        return res;
    }

    return {
        forKey: function (o, k, opts) {
            return digFor('key', o, k, opts || {});
        },
        forValue: function (o, k, opts) {
            return digFor('value', o, k, opts || {});
        },
        forKeyValue: function (o, kv, opts) {
            return digFor('keyvalue', o, kv, opts || {});
        }
    };
})();
typeof exports === 'object' &&
    typeof module !== 'undefined' &&
    (module.exports = searchHash);
