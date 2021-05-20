'use strict';
/*
SEARCHHASH v1.2.2
~2KB
*/
var searchHash=function(){function n(n,t){return JSON.stringify(n)===JSON.stringify(t)&&!e(t)}function t(n){return"string"==typeof n||n instanceof String}function e(n){return n instanceof RegExp}
function i(n){var t=String(n)!==n,e=n===Object(n),i="function"!=typeof n,r={}.toString.call(n).match(/\[object\sObject\]/);return t&&e&&i&&!(!r||!r.length)}function r(n){
var t={}.toString.call(n).match(/\[object\sArray\]/);return String(n)!==n&&!(!t||!t.length)}function o(n){return n&&"object"==typeof n&&void 0!==n.nodeType&&1===n.nodeType&&"string"==typeof n.nodeName
}function u(u,a,f,c){if(!i(a)&&!r(a))throw new Error("BAD PARAM: must search into an object or an array");var l,m=0,y=function(i,r){return t(i)&&e(r)?i.match(r):n(i,r)},s={key:function(n,t,e){
return"function"==typeof e?e(n):y(n,e)},value:function(n,t,e){return"function"==typeof e?e(t):y(t,e)},keyvalue:function(n,t,e){
return("function"==typeof e.key&&e.key(n)||y(n,e.key))&&("function"==typeof e.value&&e.value(t)||y(t,e.value))}}[u],p=[],v=function(n,t,e,i,r){
var o=[].concat.call(n,[t]),u=s(t,i[t],e),a=c.min<=r&&r<=c.max,f=o.length;a&&u&&(p.push({obj:i,value:i[t],key:o[f-1],parentKey:o[f-2],path:o.join("/"),container:o.slice(0,f-1).join("/"),
parentContainer:o.slice(0,f-2).join("/"),regexp:u,level:r}),m++),g(i[t],e,o,r+1)},g=function(n,t,e,i){if(o(n))return void console.log("ELEMENT");var r,u;if(n instanceof Array)for(r=0,
u=n.length;r<u&&(v(e,r,t,n,i),c.limit!==m);r++);else if("object"==typeof n)for(r in n)if(v(e,r,t,n,i),c.limit===m)break};return c.limit="limit"in c?~~c.limit:1/0,c.min="min"in c?~~c.min:0,
c.max="max"in c?~~c.max:1/0,0===c.limit?p:(c.min=c.min<0?0:c.min,c.max<c.min&&(l=c.min,c.min=c.max,c.max=l),g(a,f,[],0),p)}return{forKey:function(n,t,e){return u("key",n,t,e||{})},
forValue:function(n,t,e){return u("value",n,t,e||{})},forKeyValue:function(n,t,e){return u("keyvalue",n,t,e||{})}}}();"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=searchHash);