/*
SEARCHHASH
~1KB
*/
var searchHash=function(){function e(e,n){return JSON.stringify(e)===JSON.stringify(n)}function n(e){
return"object"==typeof Node?e instanceof W.Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}function t(e){
return"object"==typeof HTMLElement?e instanceof W.HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}function i(e){return"string"==typeof e||e instanceof String}
function o(e){return e instanceof RegExp}function r(r,u,a,f){var c,l=+new Date,m=0,y=0,p={key:function(n,t,r){return"function"==typeof r?r(n):i(n)&&o(r)?n.match(r):e(n,r)},value:function(n,t,r){
return"function"==typeof r?r(t):i(t)&&o(r)?t.match(r):e(t,r)},keyvalue:function(n,t,r){
return("function"==typeof r.key&&r.key(n)||(i(n)&&o(r.key)?n.match(r.key):e(n,r.key)))&&("function"==typeof r.value&&r.value(t)||(i(t)&&o(r.value)?t.match(r.value):e(t,r.value)))}}[r],s={
timeElapsed:0,results:[]},v=function(e,n,t,i,o){var r=[].concat.call(e,[n]),u=p(n,i[n],t),a=f.min<=o&&o<=f.max,c=r.length;a&&u&&(s.results.push({obj:i,value:i[n],key:r[c-1],parentKey:r[c-2],
path:r.join("/"),container:r.slice(0,c-1).join("/"),parentContainer:r.slice(0,c-2).join("/"),regexp:u,level:o}),y++),d(i[n],t,r,o+1)},d=function(e,i,o,r){var u,a
;if(!n(e)||!t(e))if(e instanceof Array)for(u=0,a=e.length;u<a&&(v(o,u,i,e,r),f.limit!==y);u++);else if("object"==typeof e)for(u in e)if(v(o,u,i,e,r),f.limit===y)break}
;return f.limit="limit"in f?~~f.limit:1/0,f.min="min"in f?~~f.min:0,f.max="max"in f?~~f.max:1/0,f.min=f.min<0?0:f.min,f.max<f.min&&(c=f.min,f.min=f.max,f.max=c),d(u,a,[],0),m=+new Date,
s.timeElapsed=m-l,s}return{forKey:function(e,n,t){return r("key",e,n,t||{})},forValue:function(e,n,t){return r("value",e,n,t||{})},forKeyValue:function(e,n,t){return r("keyvalue",e,n,t||{})}}}()
;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=searchHash);