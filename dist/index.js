'use strict';
/*
SEARCHHASH
~1KB
*/
var searchHash=function(){function n(n,t){return JSON.stringify(n)===JSON.stringify(t)&&!e(t)}function t(n){return"string"==typeof n||n instanceof String}function e(n){return n instanceof RegExp}
function i(n){var t=String(n)!==n,e=n===Object(n),i="function"!=typeof n,r={}.toString.call(n).match(/\[object\sObject\]/);return t&&e&&i&&!(!r||!r.length)}function r(n){
var t={}.toString.call(n).match(/\[object\sArray\]/);return String(n)!==n&&!(!t||!t.length)}function o(o,a,u,c){if(!i(a)&&!r(a))throw new Error("BAD PARAM: must search into an object or an array")
;var f,l=0,m=function(i,r){return t(i)&&e(r)?i.match(r):n(i,r)},y={key:function(n,t,e){return"function"==typeof e?e(n):m(n,e)},value:function(n,t,e){return"function"==typeof e?e(t):m(t,e)},
keyvalue:function(n,t,e){return("function"==typeof e.key&&e.key(n)||m(n,e.key))&&("function"==typeof e.value&&e.value(t)||m(t,e.value))}}[o],s=[],p=function(n,t,e,i,r){
var o=[].concat.call(n,[t]),a=y(t,i[t],e),u=c.min<=r&&r<=c.max,f=o.length;u&&a&&(s.push({obj:i,value:i[t],key:o[f-1],parentKey:o[f-2],path:o.join("/"),container:o.slice(0,f-1).join("/"),
parentContainer:o.slice(0,f-2).join("/"),regexp:a,level:r}),l++),h(i[t],e,o,r+1)},h=function(n,t,e,i){var r,o;if(n instanceof Array)for(r=0,o=n.length;r<o&&(p(e,r,t,n,i),
c.limit!==l);r++);else if("object"==typeof n)for(r in n)if(p(e,r,t,n,i),c.limit===l)break};return c.limit="limit"in c?~~c.limit:1/0,c.min="min"in c?~~c.min:0,c.max="max"in c?~~c.max:1/0,
0===c.limit?s:(c.min=c.min<0?0:c.min,c.max<c.min&&(f=c.min,c.min=c.max,c.max=f),h(a,u,[],0),s)}return{forKey:function(n,t,e){return o("key",n,t,e||{})},forValue:function(n,t,e){
return o("value",n,t,e||{})},forKeyValue:function(n,t,e){return o("keyvalue",n,t,e||{})}}}();"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=searchHash);