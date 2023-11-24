(()=>{var e={28:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(81),a=n.n(r),o=n(645),s=n.n(o),i=n(667),c=n.n(i),d=new URL(n(146),n.b),l=s()(a()),p=c()(d);l.push([e.id,`@font-face {\n    font-family: 'Anton';\n    src: url(${p}) ;\n}\n\n\n\n:root{\n    --backdrop: #001d3d;\n    --backgrnd:#003566;\n    --txt: #ffd60a;\n    --hit: \t#ff5a00;\n}\n\n\nbody{\n    background-color: var(--backdrop);\n    margin:0;\n    padding: 0;\n    height: 100vh;\n    width:100vw;\n    color: var(--txt);\n    font-family: 'Anton';\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.game-container{\n    height: 70%;\n    width: 60%;\n    display: flex;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    background-color: var(--backgrnd);\n}\n\n.game-container > div{\n    flex:1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: large;\n}\n\n.comp-side{\n    padding: 1%;\n    background-color: var(--backdrop);\n    height: 60%;\n    width: 70%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}   \n.player-side{\n    padding: 1%;\n    display: flex;\n    height: 60%;\n    width: 70%;\n    background-color: var(--backdrop);\n    align-items: center;\n    flex-direction: column;\n    gap:2%;\n\n}\n\n\n.grid-elem{\n    background-color: var(--backgrnd);\n    border-radius: 10%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n}\n.comp-grid > .grid-elem:hover{\n    background-color: yellowgreen;\n}\n\n.player-grid, .comp-grid{\n    padding-top: 4%;\n    height: 80%;\n    width: 80%;\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n    grid-template-rows: repeat(10,1fr);\n    gap:1%;\n}\n\n.ship-coord{\n    background-color: black;\n}\n\n.missed{\n    background-color: var(--txt);\n}\n\n.hit{\n    background-color: var(--hit);\n}\n`,""]);const u=l},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&s[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],i=0;i<e.length;i++){var c=e[i],d=r.base?c[0]+r.base:c[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=a(h,r);r.byIndex=i,t.splice(i,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var i=n(o[s]);t[i].references--}for(var c=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},498:(e,t,n)=>{const r=n(643);e.exports=class{Board=new Map;isGameOver=!1;constructor(){for(var e=0;e<10;e++)for(var t=0;t<10;t++)this.Board.set(`${e},${t}`,"W")}placeShips=(e="0,0",t="V",n)=>{const a=[],o=e.split(","),s=parseInt(o[0]),i=parseInt(o[1]);"H"===t?(a.push(`${s-1},${i}`),a.push(`${s+n},${i}`)):"V"===t&&(a.push(`${s},${i-1}`),a.push(`${s},${i+n}`));for(let e=0;e<n;e++)"H"===t?(a.push(`${s+e},${i}`),a.push(`${s+e},${i-1}`),a.push(`${s+e},${i+1}`)):(a.push(`${s},${i+e}`),a.push(`${s-1},${i+e}`),a.push(`${s+1},${i+e}`));let c=!0;if(a.forEach((e=>{this.Board.get(e)instanceof Object&&(c=!1)})),!c)return!1;const d=new r(n,`carrier ${n} ${t}`,e,t);return d.taken_coords.forEach((e=>{if(this.Board.get(e)instanceof Object)return!1;this.Board.set(e,d)})),!0};receiveAttack=(e,t)=>{if(this.Board.get(e)instanceof Object)return this.Board.get(e).hit(),this.Board.set(e,"H"),t.classList.add("hit"),this.areAllSunk(),this.isGameOver;this.Board.set(e,"H"),t.classList.add("missed")};areAllSunk=()=>{const e=[...this.Board.values()];for(var t=0;t<e.length;t++)if(e[t]instanceof Object)return;this.isGameOver=!0}}},309:(e,t,n)=>{const r=n(507),a=n(498);e.exports=class{player_turn=!0;PLAYER_ONE=new r;COMP_PLAYER=new r;PLAYER_BOARD=new a;COMPUTER_BOARD=new a;gameLoop=()=>{this.placeShipsLoop(this.PLAYER_BOARD),this.placeShipsLoop(this.COMPUTER_BOARD),console.log("This is the player board: ",this.PLAYER_BOARD.Board)};playGame=()=>{document.querySelector(".comp-grid").addEventListener("click",(e=>{let t=e.target.getAttribute("coords");if(t){const e=document.getElementById(`C${t}`);this.PLAYER_ONE.yourTurn(this.COMPUTER_BOARD,t,e)&&window.alert("CONGRATULATIONS YOU WON!!!!!"),this.COMP_PLAYER.computerTurn(this.PLAYER_BOARD)&&window.alert("WELL PLAYED BUT COMPUTER WON!!!!!")}}))};placeShipsLoop=e=>{let t=0,n=[2,3,4,4];for(var r=["0,0","0,1","0,2","0,3","0,4","0,5","0,6","1,0","1,1","1,2","1,3","1,4","1,5","1,6","2,0","2,1","2,2","2,3","2,4","2,5","2,6","3,0","3,1","3,2","3,3","3,4","3,5","3,6","4,0","4,1","4,2","4,3","4,4","4,5","4,6","5,0","5,1","5,2","5,3","5,4","5,5","5,6","6,0","6,1","6,2","6,3","6,4","6,5","6,6"];t<4;){var a=Math.floor(Math.random()*r.length);a=r.splice(a,1),e.placeShips(String(a),Math.random()<.5?"H":"V",n[t])&&(t+=1)}}}},507:(e,t,n)=>{n(498),n(643),e.exports=class{yourTurn=(e,t,n)=>e.receiveAttack(t,n);computerTurn=e=>{const t=["0,0","0,1","0,2","0,3","0,4","0,5","0,6","0,7","0,8","0,9","1,0","1,1","1,2","1,3","1,4","1,5","1,6","1,7","1,8","1,9","2,0","2,1","2,2","2,3","2,4","2,5","2,6","2,7","2,8","2,9","3,0","3,1","3,2","3,3","3,4","3,5","3,6","3,7","3,8","3,9","4,0","4,1","4,2","4,3","4,4","4,5","4,6","4,7","4,8","4,9","5,0","5,1","5,2","5,3","5,4","5,5","5,6","5,7","5,8","5,9","6,0","6,1","6,2","6,3","6,4","6,5","6,6","6,7","6,8","6,9","7,0","7,1","7,2","7,3","7,4","7,5","7,6","7,7","7,8","7,9","8,0","8,1","8,2","8,3","8,4","8,5","8,6","8,7","8,8","8,9","9,0","9,1","9,2","9,3","9,4","9,5","9,6","9,7","9,8","9,9"];var n=Math.floor(Math.random()*t.length);n=t.splice(n,1);const r=document.getElementById(`P${n}`);return e.receiveAttack(String(n),r)}}},643:e=>{e.exports=class{length;hitCount=0;name;taken_coords=[];sunk=!1;constructor(e=0,t="carrier",n="0,0",r="H"){this.length=e,this.name=t;const a=n.split(","),o=parseInt(a[0]),s=parseInt(a[1]);for(var i=0;i<e;i++)if("H"===r){if(!(o+i>=0&&o+i<10)){this.taken_coords=[];break}this.taken_coords.push(`${o+i},${s}`)}else if("V"===r){if(!(s+i>=0&&s+i<10)){this.taken_coords=[];break}this.taken_coords.push(`${o},${s+i}`)}}hit=()=>this.hitCount++;isSunk=()=>(this.hitCount>=this.length&&(this.sunk=!0),this.sunk)}},146:(e,t,n)=>{"use strict";e.exports=n.p+"170b842f9a8cd6150a0d.ttf"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),s=n.n(o),i=n(565),c=n.n(i),d=n(216),l=n.n(d),p=n(589),u=n.n(p),h=n(28),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const g=n(309);(new class{CreatePage(){const e=document.querySelector(".game-container"),t=this.#e("div","left-side"),n=this.#e("div","right-side"),r=new g;r.gameLoop();const a=r.PLAYER_BOARD.Board,o=r.COMPUTER_BOARD.Board,s=this.#t(a),i=this.#n(o);t.appendChild(s),n.appendChild(i),e.appendChild(t),e.appendChild(n),r.playGame()}#n(e){const t=this.#e("div","comp-side"),n=this.#e("div","h3");n.textContent="COMPUTER SIDE";const r=this.#e("div","comp-grid");return this.#r(r,e,!1),t.appendChild(n),t.appendChild(r),t}#t(e){const t=this.#e("div","player-side"),n=this.#e("div","h3");n.textContent="PLAYER SIDE";const r=this.#e("div","player-grid");return this.#r(r,e,!0),t.appendChild(n),t.appendChild(r),t}#r(e,t,n){for(let r=9;r>=0;r--)for(let a=0;a<10;a++){const o=this.#e("div","grid-elem",n?`P${a},${r}`:`C${a},${r}`,`${a},${r}`);t.get(`${a},${r}`)instanceof Object&&(o.classList.add("ship-coord"),o.textContent="S"),e.appendChild(o)}}#e(e,t,n,r){const a=document.createElement(e);return a.classList.add(t),n&&(a.id=n),r&&a.setAttribute("coords",r),a}}).CreatePage()})()})();