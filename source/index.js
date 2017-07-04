function () {

    // some utility func
    function jCompare(obj1, obj2) {
        return  !isNode(obj1)
                && typeof JSON !== 'undefined' ?
            JSON.stringify(obj1) === JSON.stringify(obj2)
            :
            obj1 == obj2;
    }
    function isNode(o){
        return (
            typeof Node === "object" ?
                o instanceof Node
                : 
                (o &&
                    typeof o === "object" &&
                    typeof o.nodeType === "number" &&
                    typeof o.nodeName==="string"
                )
        );
    }
    function isElement(o){
        return (
            typeof HTMLElement === "object" ?
                o instanceof HTMLElement
                : //DOM2
                o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
        );
    }
    function isString (o) {
        return typeof o === 'string' || o instanceof String;
    }

    /**
     * Main searching function
     */
    function digFor(what, obj, target, limit) {
        
        limit = ~~limit;
        
        var found = 0,
            matches = {
                key : function (k1, k2, key) {
                    return (isString(k1) && key instanceof RegExp) ?
                        k1.match(key)
                        :
                        jCompare(k1, key);
                },
                value : function (k1, k2, val) {
                    return (isString(k2) && val instanceof RegExp) ?
                        k2.match(val)
                        :
                        jCompare(k2, val);
                },
                keyvalue : function (k1, k2, keyval) {
                    return (
                        (isString(k1) && keyval.key instanceof RegExp) ?
                        k1.match(keyval.key)
                        :
                        jCompare(k1, keyval.key)
                    ) && (

                        (isString(k2) && keyval.value instanceof RegExp) ?
                        k2.match(keyval.value)
                        :
                        jCompare(k2, keyval.value)
                    );
                }
            }[what],
            res = [],
            maybeDoPush = function (path, index, trg, obj, level) {

                var p = [].concat.call(path, [index]),
                    tmp = matches(index, obj[index], trg);

                if (tmp) {
                    res.push({
                        obj : obj,
                        value: obj[index],
                        key : p[p.length - 1],
                        parentKey : p[p.length - 2],
                        path : p.join('/'),
                        container : p.slice(0, p.length - 1).join('/'),
                        parentContainer : p.slice(0, p.length - 2).join('/'),
                        regexp : tmp,
                        level : level
                    });
                    found++;
                }
                dig(obj[index], trg, p, level+1);
            },
            dig = function (o, k, path, level) {
                if (isNode(o) || isElement(o)) throw 'error';
                var i, l, p, tmp;
                
                if (o instanceof Array) {                
                    for (i = 0, l = o.length; i < l; i++) {
                        maybeDoPush(path, i, k, o, level);
                        if (limit && limit == found) break;
                    }
                } else if (typeof o === 'object') {
                    for (i in o) {
                        maybeDoPush(path, i, k, o, level);
                        if (limit && limit == found) break;
                    }
                } else {
                    return;
                }
            };
        dig(obj, target, [], 0);
        return res;
    }

    return {
        forKey : function (o, k, lim) {
            return digFor('key', o, k, lim);
        },
        forValue : function (o, k, lim) {
            return digFor('value', o, k, lim);
        },
        forKeyValue : function (o, kv, lim) {
            return digFor('keyvalue', o, kv, lim);
        }
    };
}