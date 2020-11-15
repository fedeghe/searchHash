
var searchHash = (function () {
    // some utility func
    function jCompare (obj1, obj2) {
        // if (isElement(obj1)) {
        //     return obj1 === obj2;
        // }
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
    // function isElement (o) {
    //     return o &&
    //         typeof o === 'object' &&
    //         o !== null &&
    //         (o.nodeType === 1 || o.nodeType === 11) &&
    //         typeof o.nodeName === 'string';
    // }
    function isString (o) {
        return typeof o === 'string' || o instanceof String;
    }
    function isRegExp (o) {
        return o instanceof RegExp;
    }

    /**
     * Main searching function
     */
    function digFor (what, obj, target, opts) {
        var t,
            found = 0,
            strOrRx = function (x, y) {
                return (isString(x) && isRegExp(y))
                    ? x.match(y)
                    : jCompare(x, y);
            },
            matches = {
                key: function (k1, k2, key) {
                    return typeof key === 'function' ? key(k1) : strOrRx(k1, key);
                },
                value: function (k1, k2, val) {
                    return typeof val === 'function' ? val(k2) : strOrRx(k2, val);
                },
                keyvalue: function (k1, k2, keyval) {
                    return (
                        (typeof keyval.key === 'function' && keyval.key(k1)) ||
                        strOrRx(k1, keyval.key)
                    ) && (
                        (typeof keyval.value === 'function' && keyval.value(k2)) ||
                        strOrRx(k2, keyval.value)
                    );
                }
            }[what],
            res = [],
            maybePush = function (objpath, index, trg, obj, level) {
                var p = [].concat.call(objpath, [index]),
                    tmp = matches(index, obj[index], trg),
                    inRange = opts.min <= level && level <= opts.max,
                    plen = p.length;
                if (inRange && tmp) {
                    res.push({
                        obj: obj,
                        value: obj[index],
                        key: p[plen - 1],
                        parentKey: p[plen - 2],
                        path: p.join('/'),
                        container: p.slice(0, plen - 1).join('/'),
                        parentContainer: p.slice(0, plen - 2).join('/'),
                        regexp: tmp,
                        level: level
                    });
                    found++;
                }
                dig(obj[index], trg, p, level + 1);
            },
            dig = function (o, k, objpath, level) {
                // if (isElement(o)) return;
                var i, l;
                if (o instanceof Array) {
                    for (i = 0, l = o.length; i < l; i++) {
                        maybePush(objpath, i, k, o, level);
                        if (opts.limit === found) break;
                    }
                } else if (typeof o === 'object') {
                    for (i in o) {
                        maybePush(objpath, i, k, o, level);
                        if (opts.limit === found) break;
                    }
                }
            };

        opts.limit = 'limit' in opts ? ~~(opts.limit) : Infinity;
        opts.min = 'min' in opts ? ~~(opts.min) : 0;
        opts.max = 'max' in opts ? ~~(opts.max) : Infinity;
        if (opts.limit === 0) return res;
        opts.min = opts.min < 0 ? 0 : opts.min;
        if (opts.max < opts.min) {
            t = opts.min;
            opts.min = opts.max;
            opts.max = t;
        }
        dig(obj, target, [], 0);
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
