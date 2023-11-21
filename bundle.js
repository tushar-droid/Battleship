(()=>{"use strict";var e,n,t,r,a,o,i,s,c,d,p,l,u,f,h={28:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),s=t(667),c=t.n(s),d=new URL(t(146),t.b),p=i()(a()),l=c()(d);p.push([e.id,`@font-face {\n    font-family: 'Anton';\n    src: url(${l}) ;\n}\n\n\n\n:root{\n    --backdrop: #001d3d;\n    --backgrnd:#003566;\n    --txt: #ffd60a;\n}\n\n\nbody{\n    background-color: var(--backdrop);\n    margin:0;\n    padding: 0;\n    height: 100vh;\n    width:100vw;\n    color: var(--txt);\n    font-family: 'Anton';\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.game-container{\n    height: 70%;\n    width: 60%;\n    display: flex;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    background-color: var(--backgrnd);\n}\n\n.game-container > div{\n    flex:1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.comp-side{\n    padding: 1%;\n    background-color: var(--backdrop);\n    height: 60%;\n    width: 70%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}   \n.player-side{\n    padding: 1%;\n    display: flex;\n    height: 60%;\n    width: 70%;\n    background-color: var(--backdrop);\n    align-items: center;\n    flex-direction: column;\n    gap:2%;\n\n}\n\n\n.grid-elem{\n    background-color: var(--backgrnd);\n    border-radius: 10%;\n}\n\n.player-grid, .comp-grid{\n    padding-top: 4%;\n    height: 80%;\n    width: 80%;\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n    grid-template-rows: repeat(10,1fr);\n    gap:1%;\n}\n`,""]);const u=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);r&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),n.push(p))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],p=o[d]||0,l="".concat(d," ").concat(p);o[d]=p+1;var u=t(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var h=a(f,r);r.byIndex=s,n.splice(s,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var c=r(e,a),d=0;d<o.length;d++){var p=t(o[d]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},146:(e,n,t)=>{e.exports=t.p+"170b842f9a8cd6150a0d.ttf"}},m={};function g(e){var n=m[e];if(void 0!==n)return n.exports;var t=m[e]={id:e,exports:{}};return h[e](t,t.exports,g),t.exports}g.m=h,g.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return g.d(n,{a:n}),n},g.d=(e,n)=>{for(var t in n)g.o(n,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;g.g.importScripts&&(e=g.g.location+"");var n=g.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!e;)e=t[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=e})(),g.b=document.baseURI||self.location.href,g.nc=void 0,e=g(379),n=g.n(e),t=g(795),r=g.n(t),a=g(569),o=g.n(a),i=g(565),s=g.n(i),c=g(216),d=g.n(c),p=g(589),l=g.n(p),u=g(28),(f={}).styleTagTransform=l(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),n()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,(new class{CreatePage(){const e=document.querySelector(".game-container"),n=this.#e("div","left-side"),t=this.#e("div","right-side"),r=this.#n(),a=this.#t();n.appendChild(r),t.appendChild(a),e.appendChild(n),e.appendChild(t)}#t(){const e=this.#e("div","comp-side"),n=this.#e("div","h3");n.textContent="COMPUTER SIDE";const t=this.#e("div","comp-grid");return this.#r(t),e.appendChild(n),e.appendChild(t),e}#n(){const e=this.#e("div","player-side"),n=this.#e("div","h3");n.textContent="PLAYER SIDE";const t=this.#e("div","player-grid");return this.#r(t),e.appendChild(n),e.appendChild(t),e}#r(e){for(let n=0;n<10;n++)for(let t=0;t<10;t++){const r=this.#e("div","grid-elem",`${n},${t}`);e.appendChild(r)}}#e(e,n,t){const r=document.createElement(e);return r.classList.add(n),t&&(r.id=t),r}}).CreatePage()})();