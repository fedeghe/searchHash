/*
SEARCHHASH
~1KB
*/
var searchHash=function(){function e(e,n){return JSON.stringify(e)===JSON.stringify(n)}function n(e){return e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}
function t(e){return e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}function i(e){return"string"==typeof e||e instanceof String}function r(r,o,u,f){
var c,l=+new Date,m=0,s=0,p={key:function(n,t,r){return i(n)&&r instanceof RegExp?n.match(r):e(n,r)},value:function(n,t,r){return i(t)&&r instanceof RegExp?t.match(r):e(t,r)},keyvalue:function(n,t,r){
return(i(n)&&r.key instanceof RegExp?n.match(r.key):e(n,r.key))&&(i(t)&&r.value instanceof RegExp?t.match(r.value):e(t,r.value))}}[r],y={timeElapsed:0,results:[]},h=function(e,n,t,i,r){
var a=[].concat.call(e,[n]),o=p(n,i[n],t);f.min<=r&&r<=f.max&&o&&(y.results.push({obj:i,value:i[n],key:a[a.length-1],parentKey:a[a.length-2],path:a.join("/"),container:a.slice(0,a.length-1).join("/"),
parentContainer:a.slice(0,a.length-2).join("/"),regexp:o,level:r}),s++),g(i[n],t,a,r+1)},g=function(e,i,r,o){if(n(e)&&t(e))throw a.BAD1;var u,c;if(e instanceof Array)for(u=0,
c=e.length;u<c&&(h(r,u,i,e,o),f.limit!==s);u++);else if("object"==typeof e)for(u in e)if(h(r,u,i,e,o),f.limit===s)break};return f.limit="limit"in f?~~f.limit:1/0,f.min="min"in f?~~f.min:0,
f.max="max"in f?~~f.max:1/0,f.min=f.min<0?0:f.min,f.max<f.min&&(c=f.min,f.min=f.max,f.max=c),g(o,u,[],0),m=+new Date,y.timeElapsed=m-l,y}var a={BAD1:{type:"BAD_PARAMS",
message:"Either a Literal Object either an array should be passed as second parameter"}};return{forKey:function(e,n,t){return r("key",e,n,t||{})},forValue:function(e,n,t){return r("value",e,n,t||{})},
forKeyValue:function(e,n,t){return r("keyvalue",e,n,t||{})}}}();"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=searchHash);