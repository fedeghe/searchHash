/*
SEARCHHASH
~1KB
*/
var searchHash=function(){function e(e,n){return JSON.stringify(e)===JSON.stringify(n)}function n(e){return e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}
function t(e){return e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}function i(e){return"string"==typeof e||e instanceof String}function r(e){return e instanceof RegExp}
function a(a,u,f,c){var m,l=+new Date,s=0,y=0,p={key:function(n,t,a){return i(n)&&r(a)?n.match(a):e(n,a)},value:function(n,t,a){return i(t)&&r(a)?t.match(a):e(t,a)},keyvalue:function(n,t,a){
return(i(n)&&r(a.key)?n.match(a.key):e(n,a.key))&&(i(t)&&r(a.value)?t.match(a.value):e(t,a.value))}}[a],h={timeElapsed:0,results:[]},v=function(e,n,t,i,r){
var a=[].concat.call(e,[n]),o=p(n,i[n],t),u=c.min<=r&&r<=c.max,f=a.length;u&&o&&(h.results.push({obj:i,value:i[n],key:a[f-1],parentKey:a[f-2],path:a.join("/"),container:a.slice(0,f-1).join("/"),
parentContainer:a.slice(0,f-2).join("/"),regexp:o,level:r}),y++),d(i[n],t,a,r+1)},d=function(e,i,r,a){if(n(e)&&t(e))throw o.BAD1;var u,f;if(e instanceof Array)for(u=0,f=e.length;u<f&&(v(r,u,i,e,a),
c.limit!==y);u++);else if("object"==typeof e)for(u in e)if(v(r,u,i,e,a),c.limit===y)break};return c.limit="limit"in c?~~c.limit:1/0,c.min="min"in c?~~c.min:0,c.max="max"in c?~~c.max:1/0,
c.min=c.min<0?0:c.min,c.max<c.min&&(m=c.min,c.min=c.max,c.max=m),d(u,f,[],0),s=+new Date,h.timeElapsed=s-l,h}var o={BAD1:{type:"BAD_PARAMS",
message:"Either a Literal Object either an array should be passed as second parameter"}};return{forKey:function(e,n,t){return a("key",e,n,t||{})},forValue:function(e,n,t){return a("value",e,n,t||{})},
forKeyValue:function(e,n,t){return a("keyvalue",e,n,t||{})}}}();"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=searchHash);