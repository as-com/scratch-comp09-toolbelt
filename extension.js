/*! head.load - v1.0.3 */
(function(n,t){"use strict";function w(){}function u(n,t){if(n){typeof n=="object"&&(n=[].slice.call(n));for(var i=0,r=n.length;i<r;i++)t.call(n,n[i],i)}}function it(n,i){var r=Object.prototype.toString.call(i).slice(8,-1);return i!==t&&i!==null&&r===n}function s(n){return it("Function",n)}function a(n){return it("Array",n)}function et(n){var i=n.split("/"),t=i[i.length-1],r=t.indexOf("?");return r!==-1?t.substring(0,r):t}function f(n){(n=n||w,n._done)||(n(),n._done=1)}function ot(n,t,r,u){var f=typeof n=="object"?n:{test:n,success:!t?!1:a(t)?t:[t],failure:!r?!1:a(r)?r:[r],callback:u||w},e=!!f.test;return e&&!!f.success?(f.success.push(f.callback),i.load.apply(null,f.success)):e||!f.failure?u():(f.failure.push(f.callback),i.load.apply(null,f.failure)),i}function v(n){var t={},i,r;if(typeof n=="object")for(i in n)!n[i]||(t={name:i,url:n[i]});else t={name:et(n),url:n};return(r=c[t.name],r&&r.url===t.url)?r:(c[t.name]=t,t)}function y(n){n=n||c;for(var t in n)if(n.hasOwnProperty(t)&&n[t].state!==l)return!1;return!0}function st(n){n.state=ft;u(n.onpreload,function(n){n.call()})}function ht(n){n.state===t&&(n.state=nt,n.onpreload=[],rt({url:n.url,type:"cache"},function(){st(n)}))}function ct(){var n=arguments,t=n[n.length-1],r=[].slice.call(n,1),f=r[0];return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(f?(u(r,function(n){s(n)||!n||ht(v(n))}),b(v(n[0]),s(f)?f:function(){i.load.apply(null,r)})):b(v(n[0])),i)}function lt(){var n=arguments,t=n[n.length-1],r={};return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(u(n,function(n){n!==t&&(n=v(n),r[n.name]=n)}),u(n,function(n){n!==t&&(n=v(n),b(n,function(){y(r)&&f(t)}))}),i)}function b(n,t){if(t=t||w,n.state===l){t();return}if(n.state===tt){i.ready(n.name,t);return}if(n.state===nt){n.onpreload.push(function(){b(n,t)});return}n.state=tt;rt(n,function(){n.state=l;t();u(h[n.name],function(n){f(n)});o&&y()&&u(h.ALL,function(n){f(n)})})}function at(n){n=n||"";var t=n.split("?")[0].split(".");return t[t.length-1].toLowerCase()}function rt(t,i){function e(t){t=t||n.event;u.onload=u.onreadystatechange=u.onerror=null;i()}function o(f){f=f||n.event;(f.type==="load"||/loaded|complete/.test(u.readyState)&&(!r.documentMode||r.documentMode<9))&&(n.clearTimeout(t.errorTimeout),n.clearTimeout(t.cssTimeout),u.onload=u.onreadystatechange=u.onerror=null,i())}function s(){if(t.state!==l&&t.cssRetries<=20){for(var i=0,f=r.styleSheets.length;i<f;i++)if(r.styleSheets[i].href===u.href){o({type:"load"});return}t.cssRetries++;t.cssTimeout=n.setTimeout(s,250)}}var u,h,f;i=i||w;h=at(t.url);h==="css"?(u=r.createElement("link"),u.type="text/"+(t.type||"css"),u.rel="stylesheet",u.href=t.url,t.cssRetries=0,t.cssTimeout=n.setTimeout(s,500)):(u=r.createElement("script"),u.type="text/"+(t.type||"javascript"),u.src=t.url);u.onload=u.onreadystatechange=o;u.onerror=e;u.async=!1;u.defer=!1;t.errorTimeout=n.setTimeout(function(){e({type:"timeout"})},7e3);f=r.head||r.getElementsByTagName("head")[0];f.insertBefore(u,f.lastChild)}function vt(){for(var t,u=r.getElementsByTagName("script"),n=0,f=u.length;n<f;n++)if(t=u[n].getAttribute("data-headjs-load"),!!t){i.load(t);return}}function yt(n,t){var v,p,e;return n===r?(o?f(t):d.push(t),i):(s(n)&&(t=n,n="ALL"),a(n))?(v={},u(n,function(n){v[n]=c[n];i.ready(n,function(){y(v)&&f(t)})}),i):typeof n!="string"||!s(t)?i:(p=c[n],p&&p.state===l||n==="ALL"&&y()&&o)?(f(t),i):(e=h[n],e?e.push(t):e=h[n]=[t],i)}function e(){if(!r.body){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(e,50);return}o||(o=!0,vt(),u(d,function(n){f(n)}))}function k(){r.addEventListener?(r.removeEventListener("DOMContentLoaded",k,!1),e()):r.readyState==="complete"&&(r.detachEvent("onreadystatechange",k),e())}var r=n.document,d=[],h={},c={},ut="async"in r.createElement("script")||"MozAppearance"in r.documentElement.style||n.opera,o,g=n.head_conf&&n.head_conf.head||"head",i=n[g]=n[g]||function(){i.ready.apply(null,arguments)},nt=1,ft=2,tt=3,l=4,p;if(r.readyState==="complete")e();else if(r.addEventListener)r.addEventListener("DOMContentLoaded",k,!1),n.addEventListener("load",e,!1);else{r.attachEvent("onreadystatechange",k);n.attachEvent("onload",e);p=!1;try{p=!n.frameElement&&r.documentElement}catch(wt){}p&&p.doScroll&&function pt(){if(!o){try{p.doScroll("left")}catch(t){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(pt,50);return}e()}}()}i.load=i.js=ut?lt:ct;i.test=ot;i.ready=yt;i.ready(r,function(){y()&&u(h.ALL,function(n){f(n)});i.feature&&i.feature("domloaded",!0)})})(window);
/*! async.js */
(function(){function x(a){var b=!1;return function(){if(b)throw Error("Callback was already called.");b=!0;a.apply(n,arguments)}}var d={},n,y;n=this;null!=n&&(y=n.async);d.noConflict=function(){n.async=y;return d};var C=Object.prototype.toString,p=Array.isArray||function(a){return"[object Array]"===C.call(a)},l=function(a,b){for(var c=0;c<a.length;c+=1)b(a[c],c,a)},m=function(a,b){if(a.map)return a.map(b);var c=[];l(a,function(a,f,g){c.push(b(a,f,g))});return c},D=function(a,b,c){if(a.reduce)return a.reduce(b,
c);l(a,function(a,f,g){c=b(c,a,f,g)});return c},t=function(a){if(Object.keys)return Object.keys(a);var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(c);return b};"undefined"!==typeof process&&process.nextTick?(d.nextTick=process.nextTick,d.setImmediate="undefined"!==typeof setImmediate?function(a){setImmediate(a)}:d.nextTick):(d.nextTick="function"===typeof setImmediate?function(a){setImmediate(a)}:function(a){setTimeout(a,0)},d.setImmediate=d.nextTick);d.each=function(a,b,c){function e(b){b?(c(b),
c=function(){}):(f+=1,f>=a.length&&c())}c=c||function(){};if(!a.length)return c();var f=0;l(a,function(a){b(a,x(e))})};d.forEach=d.each;d.eachSeries=function(a,b,c){c=c||function(){};if(!a.length)return c();var e=0,f=function(){b(a[e],function(b){b?(c(b),c=function(){}):(e+=1,e>=a.length?c():f())})};f()};d.forEachSeries=d.eachSeries;d.eachLimit=function(a,b,c,e){v(b).apply(null,[a,c,e])};d.forEachLimit=d.eachLimit;var v=function(a){return function(b,c,e){e=e||function(){};if(!b.length||0>=a)return e();
var f=0,g=0,d=0;(function E(){if(f>=b.length)return e();for(;d<a&&g<b.length;)g+=1,d+=1,c(b[g-1],function(a){a?(e(a),e=function(){}):(f+=1,--d,f>=b.length?e():E())})})()}},q=function(a){return function(){var b=Array.prototype.slice.call(arguments);return a.apply(null,[d.each].concat(b))}},z=function(a,b){return function(){var c=Array.prototype.slice.call(arguments);return b.apply(null,[v(a)].concat(c))}},r=function(a){return function(){var b=Array.prototype.slice.call(arguments);return a.apply(null,
[d.eachSeries].concat(b))}},u=function(a,b,c,e){b=m(b,function(a,b){return{index:b,value:a}});if(e){var f=[];a(b,function(a,b){c(a.value,function(c,e){f[a.index]=e;b(c)})},function(a){e(a,f)})}else a(b,function(a,b){c(a.value,function(a){b(a)})})};d.map=q(u);d.mapSeries=r(u);d.mapLimit=function(a,b,c,e){return z(b,u)(a,c,e)};d.reduce=function(a,b,c,e){d.eachSeries(a,function(a,e){c(b,a,function(a,c){b=c;e(a)})},function(a){e(a,b)})};d.inject=d.reduce;d.foldl=d.reduce;d.reduceRight=function(a,b,c,
e){a=m(a,function(a){return a}).reverse();d.reduce(a,b,c,e)};d.foldr=d.reduceRight;var h=function(a,b,c,e){var f=[];b=m(b,function(a,b){return{index:b,value:a}});a(b,function(a,b){c(a.value,function(c){c&&f.push(a);b()})},function(a){e(m(f.sort(function(a,b){return a.index-b.index}),function(a){return a.value}))})};d.filter=q(h);d.filterSeries=r(h);d.select=d.filter;d.selectSeries=d.filterSeries;h=function(a,b,c,e){var f=[];b=m(b,function(a,b){return{index:b,value:a}});a(b,function(a,b){c(a.value,
function(c){c||f.push(a);b()})},function(a){e(m(f.sort(function(a,b){return a.index-b.index}),function(a){return a.value}))})};d.reject=q(h);d.rejectSeries=r(h);h=function(a,b,c,e){a(b,function(a,b){c(a,function(c){c?(e(a),e=function(){}):b()})},function(a){e()})};d.detect=q(h);d.detectSeries=r(h);d.some=function(a,b,c){d.each(a,function(a,f){b(a,function(a){a&&(c(!0),c=function(){});f()})},function(a){c(!1)})};d.any=d.some;d.every=function(a,b,c){d.each(a,function(a,f){b(a,function(a){a||(c(!1),
c=function(){});f()})},function(a){c(!0)})};d.all=d.every;d.sortBy=function(a,b,c){d.map(a,function(a,c){b(a,function(b,d){b?c(b):c(null,{value:a,criteria:d})})},function(a,b){if(a)return c(a);c(null,m(b.sort(function(a,b){var c=a.criteria,f=b.criteria;return c<f?-1:c>f?1:0}),function(a){return a.value}))})};d.auto=function(a,b){b=b||function(){};var c=t(a),e=c.length;if(!e)return b();var f={},g=[],k=function(a){g.unshift(a)},w=function(){e--;l(g.slice(0),function(a){a()})};k(function(){if(!e){var a=
b;b=function(){};a(null,f)}});l(c,function(c){var e=p(a[c])?a[c]:[a[c]],A=function(a){var e=Array.prototype.slice.call(arguments,1);1>=e.length&&(e=e[0]);if(a){var g={};l(t(f),function(a){g[a]=f[a]});g[c]=e;b(a,g);b=function(){}}else f[c]=e,d.setImmediate(w)},h=e.slice(0,Math.abs(e.length-1))||[],m=function(){return D(h,function(a,b){return a&&f.hasOwnProperty(b)},!0)&&!f.hasOwnProperty(c)};if(m())e[e.length-1](A,f);else{var n=function(){if(m()){a:for(var a=n,b=0;b<g.length;b+=1)if(g[b]===a){g.splice(b,
1);break a}e[e.length-1](A,f)}};k(n)}})};d.retry=function(a,b,c){var e=[];"function"===typeof a&&(c=b,b=a,a=5);a=parseInt(a,10)||5;var f=function(f,k){for(var w=function(a,b){return function(c){a(function(a,e){c(!a||b,{err:a,result:e})},k)}};a;)e.push(w(b,!--a));d.series(e,function(a,b){b=b[b.length-1];(f||c)(b.err,b.result)})};return c?f():f};d.waterfall=function(a,b){b=b||function(){};if(!p(a))return b(Error("First argument to waterfall must be an array of functions"));if(!a.length)return b();var c=
function(a){return function(f){if(f)b.apply(null,arguments),b=function(){};else{var g=Array.prototype.slice.call(arguments,1),k=a.next();k?g.push(c(k)):g.push(b);d.setImmediate(function(){a.apply(null,g)})}}};c(d.iterator(a))()};var B=function(a,b,c){c=c||function(){};if(p(b))a.map(b,function(a,b){a&&a(function(a){var c=Array.prototype.slice.call(arguments,1);1>=c.length&&(c=c[0]);b.call(null,a,c)})},c);else{var e={};a.each(t(b),function(a,c){b[a](function(b){var d=Array.prototype.slice.call(arguments,
1);1>=d.length&&(d=d[0]);e[a]=d;c(b)})},function(a){c(a,e)})}};d.parallel=function(a,b){B({map:d.map,each:d.each},a,b)};d.parallelLimit=function(a,b,c){B({map:z(b,u),each:v(b)},a,c)};d.series=function(a,b){b=b||function(){};if(p(a))d.mapSeries(a,function(a,b){a&&a(function(a){var c=Array.prototype.slice.call(arguments,1);1>=c.length&&(c=c[0]);b.call(null,a,c)})},b);else{var c={};d.eachSeries(t(a),function(b,d){a[b](function(a){var k=Array.prototype.slice.call(arguments,1);1>=k.length&&(k=k[0]);c[b]=
k;d(a)})},function(a){b(a,c)})}};d.iterator=function(a){var b=function(c){var e=function(){a.length&&a[c].apply(null,arguments);return e.next()};e.next=function(){return c<a.length-1?b(c+1):null};return e};return b(0)};d.apply=function(a){var b=Array.prototype.slice.call(arguments,1);return function(){return a.apply(null,b.concat(Array.prototype.slice.call(arguments)))}};h=function(a,b,c,e){var d=[];a(b,function(a,b){c(a,function(a,c){d=d.concat(c||[]);b(a)})},function(a){e(a,d)})};d.concat=q(h);
d.concatSeries=r(h);d.whilst=function(a,b,c){a()?b(function(e){if(e)return c(e);d.whilst(a,b,c)}):c()};d.doWhilst=function(a,b,c){a(function(e){if(e)return c(e);var f=Array.prototype.slice.call(arguments,1);b.apply(null,f)?d.doWhilst(a,b,c):c()})};d.until=function(a,b,c){a()?c():b(function(e){if(e)return c(e);d.until(a,b,c)})};d.doUntil=function(a,b,c){a(function(e){if(e)return c(e);var f=Array.prototype.slice.call(arguments,1);b.apply(null,f)?c():d.doUntil(a,b,c)})};d.queue=function(a,b){function c(a,
b,c,e){a.started||(a.started=!0);p(b)||(b=[b]);if(0==b.length)return d.setImmediate(function(){a.drain&&a.drain()});l(b,function(b){b={data:b,callback:"function"===typeof e?e:null};c?a.tasks.unshift(b):a.tasks.push(b);a.saturated&&a.tasks.length===a.concurrency&&a.saturated();d.setImmediate(a.process)})}void 0===b&&(b=1);var e=0,f={tasks:[],concurrency:b,saturated:null,empty:null,drain:null,started:!1,paused:!1,push:function(a,b){c(f,a,!1,b)},kill:function(){f.drain=null;f.tasks=[]},unshift:function(a,
b){c(f,a,!0,b)},process:function(){if(!f.paused&&e<f.concurrency&&f.tasks.length){var b=f.tasks.shift();f.empty&&0===f.tasks.length&&f.empty();e+=1;var c=x(function(){--e;b.callback&&b.callback.apply(b,arguments);f.drain&&0===f.tasks.length+e&&f.drain();f.process()});a(b.data,c)}},length:function(){return f.tasks.length},running:function(){return e},idle:function(){return 0===f.tasks.length+e},pause:function(){!0!==f.paused&&(f.paused=!0)},resume:function(){if(!1!==f.paused){f.paused=!1;for(var a=
1;a<=f.concurrency;a++)d.setImmediate(f.process)}}};return f};d.priorityQueue=function(a,b){function c(a,b){return a.priority-b.priority}function e(a,b,c){for(var d=-1,e=a.length-1;d<e;){var f=d+(e-d+1>>>1);0<=c(b,a[f])?d=f:e=f-1}return d}function f(a,b,f,g){a.started||(a.started=!0);p(b)||(b=[b]);if(0==b.length)return d.setImmediate(function(){a.drain&&a.drain()});l(b,function(b){b={data:b,priority:f,callback:"function"===typeof g?g:null};a.tasks.splice(e(a.tasks,b,c)+1,0,b);a.saturated&&a.tasks.length===
a.concurrency&&a.saturated();d.setImmediate(a.process)})}var g=d.queue(a,b);g.push=function(a,b,c){f(g,a,b,c)};delete g.unshift;return g};d.cargo=function(a,b){var c=!1,e=[],f={tasks:e,payload:b,saturated:null,empty:null,drain:null,drained:!0,push:function(a,c){p(a)||(a=[a]);l(a,function(a){e.push({data:a,callback:"function"===typeof c?c:null});f.drained=!1;f.saturated&&e.length===b&&f.saturated()});d.setImmediate(f.process)},process:function k(){if(!c)if(0===e.length)f.drain&&!f.drained&&f.drain(),
f.drained=!0;else{var d="number"===typeof b?e.splice(0,b):e.splice(0,e.length),h=m(d,function(a){return a.data});f.empty&&f.empty();c=!0;a(h,function(){c=!1;var a=arguments;l(d,function(b){b.callback&&b.callback.apply(null,a)});k()})}},length:function(){return e.length},running:function(){return c}};return f};h=function(a){return function(b){var c=Array.prototype.slice.call(arguments,1);b.apply(null,c.concat([function(b){var c=Array.prototype.slice.call(arguments,1);"undefined"!==typeof console&&
(b?console.error&&console.error(b):console[a]&&l(c,function(b){console[a](b)}))}]))}};d.log=h("log");d.dir=h("dir");d.memoize=function(a,b){var c={},e={};b=b||function(a){return a};var f=function(){var f=Array.prototype.slice.call(arguments),k=f.pop(),h=b.apply(null,f);h in c?d.nextTick(function(){k.apply(null,c[h])}):h in e?e[h].push(k):(e[h]=[k],a.apply(null,f.concat([function(){c[h]=arguments;var a=e[h];delete e[h];for(var b=0,d=a.length;b<d;b++)a[b].apply(null,arguments)}])))};f.memo=c;f.unmemoized=
a;return f};d.unmemoize=function(a){return function(){return(a.unmemoized||a).apply(null,arguments)}};d.times=function(a,b,c){for(var e=[],f=0;f<a;f++)e.push(f);return d.map(e,b,c)};d.timesSeries=function(a,b,c){for(var e=[],f=0;f<a;f++)e.push(f);return d.mapSeries(e,b,c)};d.seq=function(){var a=arguments;return function(){var b=this,c=Array.prototype.slice.call(arguments),e=c.pop();d.reduce(a,c,function(a,c,d){c.apply(b,a.concat([function(){var a=arguments[0],b=Array.prototype.slice.call(arguments,
1);d(a,b)}]))},function(a,c){e.apply(b,[a].concat(c))})}};d.compose=function(){return d.seq.apply(null,Array.prototype.reverse.call(arguments))};h=function(a,b){var c=function(){var c=this,d=Array.prototype.slice.call(arguments),e=d.pop();return a(b,function(a,b){a.apply(c,d.concat([b]))},e)};if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return c.apply(this,d)}return c};d.applyEach=q(h);d.applyEachSeries=r(h);d.forever=function(a,b){function c(d){if(d){if(b)return b(d);throw d;
}a(c)}c()};"undefined"!==typeof module&&module.exports?module.exports=d:"undefined"!==typeof define&&define.amd?define([],function(){return d}):n.async=d})();

var toolbeltReady = false;

(function() {
	var bp = "//as-com.github.io/scratch-comp09-toolbelt/extension-files/";
	async.parallel([
		function(callback) {
			head.load([
				// browser.js dependencies
				bp + "lib/vex.combined.min.js",
				bp + "lib/vex.min.css",
				bp + "lib/vex-theme-os.min.css"
			], function() {
				head.load(bp + "browser.js", callback);
			});
		},
		function(callback) {
			head.load([
				// crypto.js dependencies
				bp + "lib/base64.min.js",
				bp + "lib/cryptojs-md5.min.js",
				bp + "lib/cryptojs-ripemd160.min.js",
				bp + "lib/cryptojs-sha1.min.js",
				bp + "lib/cryptojs-sha256.min.js",
				bp + "lib/cryptojs-sha512.min.js",
				bp + "lib/cryptojs-sha3.min.js",
				bp + "lib/cryptojs-aes.min.js",
			], function() {
				head.load(bp + "crypto.js", callback);
			});
		},
		function(callback) {
			head.load(bp + "operators.js", callback);
		},
		function(callback) {
			head.load([
				// bigint.js dependencies
				bp + "lib/bigint.min.js",
			], function() {
				head.load(bp + "bigint.js", callback);
			});
		}
	], function(err, results) {
		toolbeltReady = true;
		console.log("Loaded comp09 toolbelt scripts");
	});
	// $LAB
	// .setOptions({UseLocalXHR:false})
	// .script(bp + "lib/vex.combined.min.js").wait()
	// .script(bp + "browser.js")
	// .script(bp + "lib/cryptojs-md5.min.js")
	// .script(bp + "lib/cryptojs-ripemd160.min.js")
	// .script(bp + "lib/cryptojs-sha1.min.js")
	// .script(bp + "lib/cryptojs-sha256.min.js")
	// .script(bp + "lib/cryptojs-sha512.min.js")
	// .script(bp + "lib/cryptojs-sha3.min.js")
	// .script(bp + "lib/cryptojs-aes.min.js").wait()
	// .script(bp + "crypto.js")//.wait()
	// .script(bp + "operators.js").wait(function(){
	// 	console.log("loaded comp09 toolbelt scripts");
	// 	toolbeltReady = true;
	// });



})();
