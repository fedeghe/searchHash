/*
SEARCHHASH
~1KB
*/
var searchHash=function(){function e(e,n){return JSON.stringify(e)===JSON.stringify(n)}function n(e){
return e&&"object"==typeof e&&null!==e&&(1===e.nodeType||11===e.nodeType)&&"string"==typeof e.nodeName}function t(e){return"string"==typeof e||e instanceof String}function i(e){
return e instanceof RegExp}function o(o,r,u,a){var f,c=+new Date,l=0,m=0,y={key:function(n,o,r){return"function"==typeof r?r(n):t(n)&&i(r)?n.match(r):e(n,r)},value:function(n,o,r){
return"function"==typeof r?r(o):t(o)&&i(r)?o.match(r):e(o,r)},keyvalue:function(n,o,r){
return("function"==typeof r.key&&r.key(n)||(t(n)&&i(r.key)?n.match(r.key):e(n,r.key)))&&("function"==typeof r.value&&r.value(o)||(t(o)&&i(r.value)?o.match(r.value):e(o,r.value)))}}[o],s={
timeElapsed:0,results:[]},p=function(e,n,t,i,o){var r=[].concat.call(e,[n]),u=y(n,i[n],t),f=a.min<=o&&o<=a.max,c=r.length;f&&u&&(s.results.push({obj:i,value:i[n],key:r[c-1],parentKey:r[c-2],
path:r.join("/"),container:r.slice(0,c-1).join("/"),parentContainer:r.slice(0,c-2).join("/"),regexp:u,level:o}),m++),v(i[n],t,r,o+1)},v=function(e,t,i,o){if(!n(e)){var r,u
;if(e instanceof Array)for(r=0,u=e.length;r<u&&(p(i,r,t,e,o),a.limit!==m);r++);else if("object"==typeof e)for(r in e)if(p(i,r,t,e,o),a.limit===m)break}};return a.limit="limit"in a?~~a.limit:1/0,
a.min="min"in a?~~a.min:0,a.max="max"in a?~~a.max:1/0,a.min=a.min<0?0:a.min,a.max<a.min&&(f=a.min,a.min=a.max,a.max=f),v(r,u,[],0),l=+new Date,s.timeElapsed=l-c,s}return{forKey:function(e,n,t){
return o("key",e,n,t||{})},forValue:function(e,n,t){return o("value",e,n,t||{})},forKeyValue:function(e,n,t){return o("keyvalue",e,n,t||{})}}}()
;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=searchHash);