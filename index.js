var searchash=function(){function e(e,t){return n(e)||"undefined"==typeof JSON?e==t:JSON.stringify(e)===JSON.stringify(t)}function n(e){return"object"==typeof Node?e instanceof Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}function t(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}function o(e){return"string"==typeof e||e instanceof String}function r(r,f,a,i){if(!r.match(/key|value|keyvalue/))throw new Error("Bad param for object.digFor");i=~~i;var u=0,c={key:function(n,t,r){return o(n)&&r instanceof RegExp?n.match(r):e(n,r)},value:function(n,t,r){return o(t)&&r instanceof RegExp?t.match(r):e(t,r)},keyvalue:function(n,t,r){return(o(n)&&r.key instanceof RegExp?n.match(r.key):e(n,r.key))&&(o(t)&&r.value instanceof RegExp?t.match(r.value):e(t,r.value))}}[r],l=[],y=function(e,n,t,o,r){var f=[].concat.call(e,[n]),a=c(n,o[n],t);a&&(l.push({obj:o,value:o[n],key:f[f.length-1],parentKey:f[f.length-2],path:f.join("/"),container:f.slice(0,f.length-1).join("/"),parentContainer:f.slice(0,f.length-2).join("/"),regexp:a,level:r}),u++),p(o[n],t,f,r+1)},p=function(e,o,r,f){if(!n(e)&&!t(e)){var a,c;if(e instanceof Array)for(a=0,c=e.length;a<c&&(y(r,a,o,e,f),!i||i!=u);a++);else{if("object"!=typeof e)return;for(a in e)if(y(r,a,o,e,f),i&&i==u)break}}};return p(f,a,[],0),l}return{forKey:function(e,n,t){return r("key",e,n,t)},forValue:function(e,n,t){return r("value",e,n,t)},forKeyValue:function(e,n,t){return r("keyvalue",e,n,t)}}}();"undefined"!=typeof exports&&(exports=module.exports=searchash);