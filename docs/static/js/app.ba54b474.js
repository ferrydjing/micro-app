!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["micro-app-app"]=n():e["micro-app-app"]=n()}(window,(function(){return function(e){function n(n){for(var r,i,u=n[0],c=n[1],p=n[2],s=0,l=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(n);l.length;)l.shift()();return a.push.apply(a,p||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,u=1;u<t.length;u++){var c=t[u];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},a=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(e){return i.p+"static/js/"+({page1:"page1",page2:"page2"}[e]||e)+"."+{page1:"0ff8e045",page2:"7ab75b35"}[e]+".js"}(e);var c=new Error;a=function(n){u.onerror=u.onload=null,clearTimeout(p);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,t[1](c)}o[e]=void 0}};var p=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/micro-app/",i.oe=function(e){throw e};var u=window["webpackJsonp_micro-app"]=window["webpackJsonp_micro-app"]||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var p=0;p<u.length;p++)n(u[p]);var f=c;return a.push([0,"chunk-vendors"]),t()}({0:function(e,n,t){e.exports=t("cd49")},bd99:function(e,n,t){"use strict";window.__POWERED_BY_QIANKUN__&&(t.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},cd49:function(e,n,t){"use strict";t.r(n),t.d(n,"mount",(function(){return h})),t.d(n,"bootstrap",(function(){return w})),t.d(n,"unmount",(function(){return y}));var r=t("1da1"),o=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("96cf"),t("bd99"),t("2b0e")),a=t("a6f4"),i=t("2877"),u=Object(i.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"micro-app"}},[n("router-view")],1)}),[],!1,null,null,null).exports,c=(t("9e1f"),t("450d"),t("6ed5")),p=t.n(c),f=t("9483");Object(f.a)("".concat("/micro-app/","service-worker.js"),{ready:function(){},registered:function(){},cached:function(){},updatefound:function(){},updated:function(){p.a.confirm("?????????????????????????????????????????????","??????",{type:"warning",closeOnClickModal:!1,showCancelButton:!1,showClose:!1,closeOnPressEscape:!1}).then((function(){window.location.reload()}))},offline:function(){},error:function(e){}}),t("d3b7"),t("3ca3"),t("ddb0");var s=[{path:"/micro1Page1",name:"Micro1Page1",component:function(){return t.e("page1").then(t.bind(null,"2b0b"))}},{path:"/micro1Page2",name:"Micro1Page2",component:function(){return t.e("page2").then(t.bind(null,"223d"))}}],l=t("8c4f");o.default.config.productionTip=!1,o.default.use(a.a),o.default.use(l.a);var d=null;function m(e){var n=e.container,t=e.routerBase,r=e.mainRouter,a=e.mainStore,i=new l.a({base:window.__POWERED_BY_QIANKUN__?t:"/micro-app/",mode:"history",routes:s});d=new o.default({router:i,render:function(e){return e(u)}}).$mount(n.querySelector("#micro-app")),o.default.prototype.$mainRouter=r,o.default.prototype.$mainStore=a,window.$mainStore=a,window.$mainRouter=r}function h(e){return b.apply(this,arguments)}function b(){return(b=Object(r.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(n);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return g.apply(this,arguments)}function g(){return(g=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return _.apply(this,arguments)}function _(){return(_=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=2;break}return e.abrupt("return");case 2:d.$destroy(),d.$el.innerHTML="",d=null;case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.__POWERED_BY_QIANKUN__||(window.location.href="https://ferrydjing.github.io/main-app")}})}));