/*
SEARCHHASH
~1KB
*/
var searchHash=function(){function e(e,n){return JSON.stringify(e)===JSON.stringify(n)}function n(e){
return e&&"object"==typeof e&&null!==e&&(1===e.nodeType||11===e.nodeType)&&"string"==typeof e.nodeName}function t(e){return"string"==typeof e||e instanceof String}function i(e){
return e instanceof RegExp}function r(r,o,u,f){var c,l=+new Date,m=0,s=0,y={key:function(n,r,a){return"function"==typeof a?a(n):t(n)&&i(a)?n.match(a):e(n,a)},value:function(n,r,a){
return"function"==typeof a?a(r):t(r)&&i(a)?r.match(a):e(r,a)},keyvalue:function(n,r,a){
return("function"==typeof a.key&&a.key(n)||(t(n)&&i(a.key)?n.match(a.key):e(n,a.key)))&&("function"==typeof a.value&&a.value(r)||(t(r)&&i(a.value)?r.match(a.value):e(r,a.value)))}}[r],p={
timeElapsed:0,results:[]},h=function(e,n,t,i,r){var a=[].concat.call(e,[n]),o=y(n,i[n],t),u=f.min<=r&&r<=f.max,c=a.length;u&&o&&(p.results.push({obj:i,value:i[n],key:a[c-1],parentKey:a[c-2],
path:a.join("/"),container:a.slice(0,c-1).join("/"),parentContainer:a.slice(0,c-2).join("/"),regexp:o,level:r}),s++),v(i[n],t,a,r+1)},v=function(e,t,i,r){if(n(e))throw a.BAD1;var o,u
;if(e instanceof Array)for(o=0,u=e.length;o<u&&(h(i,o,t,e,r),f.limit!==s);o++);else if("object"==typeof e)for(o in e)if(h(i,o,t,e,r),f.limit===s)break};return f.limit="limit"in f?~~f.limit:1/0,
f.min="min"in f?~~f.min:0,f.max="max"in f?~~f.max:1/0,f.min=f.min<0?0:f.min,f.max<f.min&&(c=f.min,f.min=f.max,f.max=c),v(o,u,[],0),m=+new Date,p.timeElapsed=m-l,p}var a={BAD1:{type:"BAD_PARAMS",
message:"Either a Literal Object either an array should be passed as second parameter"}};return{forKey:function(e,n,t){return r("key",e,n,t||{})},forValue:function(e,n,t){return r("value",e,n,t||{})},
forKeyValue:function(e,n,t){return r("keyvalue",e,n,t||{})}}}();"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=searchHash);