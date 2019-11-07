/*
SEARCHHASH
~1KB
*/
var searchHash=function(){function e(e,n){return JSON.stringify(e)===JSON.stringify(n)}function n(e){return e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}
function t(e){return e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}function i(e){return"string"==typeof e||e instanceof String}function r(e){return e instanceof RegExp}
function o(o,u,f,c){var l,m=+new Date,y=0,s=0,p={key:function(n,t,o){return"function"==typeof o?o(n):i(n)&&r(o)?n.match(o):e(n,o)},value:function(n,t,o){
return"function"==typeof o?o(t):i(t)&&r(o)?t.match(o):e(t,o)},keyvalue:function(n,t,o){
return("function"==typeof o.key&&o.key(n)||(i(n)&&r(o.key)?n.match(o.key):e(n,o.key)))&&("function"==typeof o.value&&o.value(t)||(i(t)&&r(o.value)?t.match(o.value):e(t,o.value)))}}[o],h={
timeElapsed:0,results:[]},v=function(e,n,t,i,r){var o=[].concat.call(e,[n]),a=p(n,i[n],t),u=c.min<=r&&r<=c.max,f=o.length;u&&a&&(h.results.push({obj:i,value:i[n],key:o[f-1],parentKey:o[f-2],
path:o.join("/"),container:o.slice(0,f-1).join("/"),parentContainer:o.slice(0,f-2).join("/"),regexp:a,level:r}),s++),d(i[n],t,o,r+1)},d=function(e,i,r,o){if(n(e)&&t(e))throw a.BAD1;var u,f
;if(e instanceof Array)for(u=0,f=e.length;u<f&&(v(r,u,i,e,o),c.limit!==s);u++);else if("object"==typeof e)for(u in e)if(v(r,u,i,e,o),c.limit===s)break};return c.limit="limit"in c?~~c.limit:1/0,
c.min="min"in c?~~c.min:0,c.max="max"in c?~~c.max:1/0,c.min=c.min<0?0:c.min,c.max<c.min&&(l=c.min,c.min=c.max,c.max=l),d(u,f,[],0),y=+new Date,h.timeElapsed=y-m,h}var a={BAD1:{type:"BAD_PARAMS",
message:"Either a Literal Object either an array should be passed as second parameter"}};return{forKey:function(e,n,t){return o("key",e,n,t||{})},forValue:function(e,n,t){return o("value",e,n,t||{})},
forKeyValue:function(e,n,t){return o("keyvalue",e,n,t||{})}}}();"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=searchHash);