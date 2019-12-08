/*
SEARCHHASH
~2KB
*/
var searchHash=function(){function e(e,n){return JSON.stringify(e)===JSON.stringify(n)}function n(e){
return"object"==typeof Node?e instanceof W.Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}function t(e){
return"object"==typeof HTMLElement?e instanceof W.HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}function i(e){return"string"==typeof e||e instanceof String}
function o(e){return e instanceof RegExp}function r(r,u,f,c){var l,m=+new Date,y=0,s=0,p={key:function(n,t,r){return"function"==typeof r?r(n):i(n)&&o(r)?n.match(r):e(n,r)},value:function(n,t,r){
return"function"==typeof r?r(t):i(t)&&o(r)?t.match(r):e(t,r)},keyvalue:function(n,t,r){
return("function"==typeof r.key&&r.key(n)||(i(n)&&o(r.key)?n.match(r.key):e(n,r.key)))&&("function"==typeof r.value&&r.value(t)||(i(t)&&o(r.value)?t.match(r.value):e(t,r.value)))}}[r],h={
timeElapsed:0,results:[]},v=function(e,n,t,i,o){var r=[].concat.call(e,[n]),a=p(n,i[n],t),u=c.min<=o&&o<=c.max,f=r.length;u&&a&&(h.results.push({obj:i,value:i[n],key:r[f-1],parentKey:r[f-2],
path:r.join("/"),container:r.slice(0,f-1).join("/"),parentContainer:r.slice(0,f-2).join("/"),regexp:a,level:o}),s++),d(i[n],t,r,o+1)},d=function(e,i,o,r){if(n(e)&&t(e))throw a.BAD1;var u,f
;if(e instanceof Array)for(u=0,f=e.length;u<f&&(v(o,u,i,e,r),c.limit!==s);u++);else if("object"==typeof e)for(u in e)if(v(o,u,i,e,r),c.limit===s)break};return c.limit="limit"in c?~~c.limit:1/0,
c.min="min"in c?~~c.min:0,c.max="max"in c?~~c.max:1/0,c.min=c.min<0?0:c.min,c.max<c.min&&(l=c.min,c.min=c.max,c.max=l),d(u,f,[],0),y=+new Date,h.timeElapsed=y-m,h}var a={BAD1:{type:"BAD_PARAMS",
message:"Either a Literal Object either an array should be passed as second parameter"}};return{forKey:function(e,n,t){return r("key",e,n,t||{})},forValue:function(e,n,t){return r("value",e,n,t||{})},
forKeyValue:function(e,n,t){return r("keyvalue",e,n,t||{})}}}();"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=searchHash);