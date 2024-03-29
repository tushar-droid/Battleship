(() => {
  var e = {
      28: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => h });
        var r = n(81),
          s = n.n(r),
          i = n(645),
          a = n.n(i),
          o = n(667),
          c = n.n(o),
          d = new URL(n(146), n.b),
          l = a()(s()),
          p = c()(d);
        l.push([
          e.id,
          `@font-face {\n    font-family: 'Anton';\n    src: url(${p}) ;\n}\n\n\n\n:root{\n    --backdrop: #001d3d;\n    --backgrnd:#003566;\n    --txt: #ffd60a;\n    --hit: \t#ff220c;\n}\n\n\nbody{\n    background-color: var(--backdrop);\n    margin:0;\n    padding: 0;\n    height: 100vh;\n    width:100vw;\n    color: var(--txt);\n    font-family: 'Anton';\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.game-container{\n    height: 80%;\n    width: 60%;\n    display: flex;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    background-color: var(--backgrnd);\n}\n\n.game-container > div{\n    flex:1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: large;\n}\n\n.placeships-heading{\n    font-weight: normal;\n\n}\n\n.comp-side{\n    padding: 1%;\n    background-color: var(--backdrop);\n    height: 70%;\n    width: 80%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}   \n.player-side{\n    padding: 1%;\n    display: flex;\n    height: 70%;\n    width: 80%;\n    background-color: var(--backdrop);\n    align-items: center;\n    flex-direction: column;\n    gap:2%;\n\n}\n\n\n.grid-elem{\n    background-color: var(--backgrnd);\n    border-radius: 10%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n\n\n.comp-grid > .grid-elem:hover{\n    background-color: yellowgreen;\n    transform: scale(1.10);\n\n}\n\n.player-grid, .comp-grid, .ships-grid{\n    padding-top: 4%;\n    height: 80%;\n    width: 80%;\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n    grid-template-rows: repeat(10,1fr);\n    gap:1%;\n}\n\n.ship-coord{\n\n    background-color: grey !important;\n}\n\n\n.missed{\n    background-color: var(--txt);\n}\n\n.hit{\n    background-color: var(--hit) !important;\n}\n.set-ships{\n    display: flex;\n    height: 100%;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n}\n.set-ships > *{\n    flex:1;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.ships-grid  > .grid-elem{\n    background-color: var(--backdrop);\n    border-radius: 10%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n\n/* This is for the slider taken from  https://uiverse.io/YaroslavFilipenko/red-turtle-90 */\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 20px;\n  }\n  \n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #b1b9c3;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n  }\n  \n  .slider:before {\n    position: absolute;\n    content: '';\n    height: 30px;\n    width: 30px;\n    bottom: -5px;\n    background: var(--backdrop);\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n  }\n  \n  .slider.round {\n    border-radius: 34px;\n  }\n  \n  .slider.round:before {\n    border-radius: 50%;\n  }\n  \n  input:checked+.slider {\n    background-color: #b1b9c3;\n  }\n  \n  input:checked+.slider:before {\n    -webkit-transform: translateX(35px);\n    -ms-transform: translateX(35px);\n    transform: translateX(35px);\n    background: var(--txt);\n  }\n/* Swtich ends here */\n\n.switcher{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width:100%;\n}\n\n\n\n.possible_ship{\n    opacity: 0.5;\n}\n\n.right-side{\n    display: flex;\n    flex-direction: column;\n    gap:20%;\n}\n.instructions{\n    text-align: center;\n    font-weight: normal;\n}\n\n\n.start-game, .replay-btn{\n    background-color: var(--txt);\n    color: var(--backdrop);\n    font-family: 'Anton';\n    font-size: xx-large;\n    margin-bottom: 2%;\n    border: none;\n    padding: 0% 1%;\n    transition: all 0.3s ease;\n}\n\n.start-game:hover, .replay-btn:hover{\n    background-color: var(--backdrop);\n    color: var(--txt);\n}\n\n`,
          "",
        ]);
        const h = l;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {",
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, s, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (r)
                for (var o = 0; o < this.length; o++) {
                  var c = this[o][0];
                  null != c && (a[c] = !0);
                }
              for (var d = 0; d < e.length; d++) {
                var l = [].concat(e[d]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  s &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = s))
                      : (l[4] = "".concat(s))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      667: (e) => {
        "use strict";
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"',
                    )
                  : e)
              : e
          );
        };
      },
      81: (e) => {
        "use strict";
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        "use strict";
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var i = {}, a = [], o = 0; o < e.length; o++) {
            var c = e[o],
              d = r.base ? c[0] + r.base : c[0],
              l = i[d] || 0,
              p = "".concat(d, " ").concat(l);
            i[d] = l + 1;
            var h = n(p),
              u = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== h) t[h].references++, t[h].updater(u);
            else {
              var f = s(u, r);
              (r.byIndex = o),
                t.splice(o, 0, { identifier: p, updater: f, references: 1 });
            }
            a.push(p);
          }
          return a;
        }
        function s(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, s) {
          var i = r((e = e || []), (s = s || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var o = n(i[a]);
              t[o].references--;
            }
            for (var c = r(e, s), d = 0; d < i.length; d++) {
              var l = n(i[d]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            i = c;
          };
        };
      },
      569: (e) => {
        "use strict";
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        "use strict";
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        "use strict";
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var s = void 0 !== n.layer;
                s &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  s && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        "use strict";
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      554: (e) => {
        e.exports = (e) => {
          const t = document.querySelector(".game-container");
          (t.style =
            "justify-content: space-evenly; align-items:center; font-size:xx-large; flex-direction:column; "),
            (t.textContent = e);
          const n = document.createElement("button");
          n.classList.add("replay-btn"),
            (n.textContent = "PLAY AGAIN!"),
            t.appendChild(n);
        };
      },
      930: (e, t, n) => {
        const r = n(309);
        e.exports = class {
          CreatePage(e) {
            const t = document.querySelector(".game-container"),
              n = this.#e("div", "left-side"),
              s = this.#e("div", "right-side");
            (t.style = ""), (t.innerHTML = "");
            const i = new r();
            i.gameLoop(e);
            const a = i.PLAYER_BOARD.Board,
              o = i.COMPUTER_BOARD.Board,
              c = this.#t(a),
              d = this.#n(o);
            n.appendChild(c),
              s.appendChild(d),
              t.appendChild(n),
              t.appendChild(s),
              i.playGame();
          }
          #n(e) {
            const t = this.#e("div", "comp-side"),
              n = this.#e("div", "h3");
            (n.style = "font-size:x-large;"), (n.textContent = "COMPUTER SIDE");
            const r = this.#e("div", "comp-grid");
            return this.#r(r, e, !1), t.appendChild(n), t.appendChild(r), t;
          }
          #t(e) {
            const t = this.#e("div", "player-side"),
              n = this.#e("div", "h3");
            (n.style = "font-size:x-large;"), (n.textContent = "PLAYER SIDE");
            const r = this.#e("div", "player-grid");
            return this.#r(r, e, !0), t.appendChild(n), t.appendChild(r), t;
          }
          #r(e, t, n) {
            for (let r = 9; r >= 0; r--)
              for (let s = 0; s < 10; s++) {
                const i = this.#e(
                  "div",
                  "grid-elem",
                  n ? `P${s},${r}` : `C${s},${r}`,
                  `${s},${r}`,
                );
                t.get(`${s},${r}`) instanceof Object &&
                  n &&
                  i.classList.add("ship-coord"),
                  e.appendChild(i);
              }
          }
          #e(e, t, n, r) {
            const s = document.createElement(e);
            return (
              s.classList.add(t),
              n && (s.id = n),
              r && s.setAttribute("coords", r),
              s
            );
          }
        };
      },
      498: (e, t, n) => {
        const r = n(643);
        e.exports = class {
          Board = new Map();
          isGameOver = !1;
          constructor() {
            for (var e = 0; e < 10; e++)
              for (var t = 0; t < 10; t++) this.Board.set(`${e},${t}`, "W");
          }
          placeShips = (e = "0,0", t = "V", n, s = !1) => {
            if (s) {
              const s = [],
                i = e.split(","),
                a = parseInt(i[0]),
                o = parseInt(i[1]);
              for (let e = 0; e < n; e++)
                "H" === t ? s.push(`${a + e},${o}`) : s.push(`${a},${o - e}`);
              let c = !0;
              if (
                (s.forEach((e) => {
                  this.Board.get(e) instanceof Object && (c = !1);
                }),
                !c)
              )
                return !1;
              const d = new r(n, `carrier ${n} ${t}`, e, t);
              return (
                d.taken_coords.forEach((e) => {
                  if (this.Board.get(e) instanceof Object) return !1;
                  this.Board.set(e, d);
                }),
                !0
              );
            }
            {
              const s = [],
                i = e.split(","),
                a = parseInt(i[0]),
                o = parseInt(i[1]);
              if ("H" === t && a + n > 10) return !1;
              if ("V" === t && o - n < -1) return !1;
              "H" === t
                ? (s.push(`${a - 1},${o}`), s.push(`${a + n},${o}`))
                : "V" === t &&
                  (s.push(`${a},${o + 1}`), s.push(`${a},${o - n}`));
              for (let e = 0; e < n; e++)
                "H" === t
                  ? (s.push(`${a + e},${o}`),
                    s.push(`${a + e},${o - 1}`),
                    s.push(`${a + e},${o + 1}`))
                  : (s.push(`${a},${o - e}`),
                    s.push(`${a - 1},${o - e}`),
                    s.push(`${a + 1},${o - e}`));
              let c = !0;
              if (
                (s.forEach((e) => {
                  this.Board.get(e) instanceof Object && (c = !1);
                }),
                !c)
              )
                return !1;
              const d = new r(n, `carrier ${n} ${t}`, e, t);
              return (
                d.taken_coords.forEach((e) => {
                  if (this.Board.get(e) instanceof Object) return !1;
                  this.Board.set(e, d);
                }),
                !0
              );
            }
          };
          receiveAttack = (e, t) => {
            if (this.Board.get(e) instanceof Object)
              return (
                this.Board.get(e).hit(),
                this.Board.set(e, "H"),
                t.classList.add("hit"),
                this.areAllSunk(),
                this.isGameOver
              );
            this.Board.set(e, "H"), t.classList.add("missed");
          };
          areAllSunk = () => {
            const e = [...this.Board.values()];
            for (var t = 0; t < e.length; t++)
              if (e[t] instanceof Object) return;
            this.isGameOver = !0;
          };
        };
      },
      309: (e, t, n) => {
        const r = n(507),
          s = n(498),
          i = n(554);
        e.exports = class {
          player_turn = !0;
          PLAYER_ONE = new r();
          COMP_PLAYER = new r();
          PLAYER_BOARD = new s();
          COMPUTER_BOARD = new s();
          gameLoop = (e) => {
            this.placeShipsLoop(this.PLAYER_BOARD, e),
              this.placeShipsLoop(this.COMPUTER_BOARD);
          };
          playGame = () => {
            document
              .querySelector(".comp-grid")
              .addEventListener("click", (e) => {
                let t = e.target.getAttribute("coords");
                if (t && "H" !== this.COMPUTER_BOARD.Board.get(t)) {
                  const e = document.getElementById(`C${t}`);
                  if (this.PLAYER_ONE.yourTurn(this.COMPUTER_BOARD, t, e))
                    return void i("CONGRATULATIONS YOU WON!!!!!");
                  if (this.COMP_PLAYER.computerTurn(this.PLAYER_BOARD))
                    return void i("WELL PLAYED BUT COMPUTER WON!!!!!");
                }
              });
          };
          placeShipsLoop = (e, t = []) => {
            if (t.length > 0) {
              let n = [2, 3, 4, 4],
                r = 0;
              t.forEach((t) => {
                e.placeShips(t[0], t[1], n[r], !0), (r += 1);
              });
            } else {
              let t = 0,
                s = [2, 3, 4, 4];
              for (
                var n = [
                  "0,0",
                  "0,1",
                  "0,2",
                  "0,3",
                  "0,4",
                  "0,5",
                  "0,6",
                  "1,0",
                  "1,1",
                  "1,2",
                  "1,3",
                  "1,4",
                  "1,5",
                  "1,6",
                  "2,0",
                  "2,1",
                  "2,2",
                  "2,3",
                  "2,4",
                  "2,5",
                  "2,6",
                  "3,0",
                  "3,1",
                  "3,2",
                  "3,3",
                  "3,4",
                  "3,5",
                  "3,6",
                  "4,0",
                  "4,1",
                  "4,2",
                  "4,3",
                  "4,4",
                  "4,5",
                  "4,6",
                  "5,0",
                  "5,1",
                  "5,2",
                  "5,3",
                  "5,4",
                  "5,5",
                  "5,6",
                  "6,0",
                  "6,1",
                  "6,2",
                  "6,3",
                  "6,4",
                  "6,5",
                  "6,6",
                ];
                t < 4;

              ) {
                var r = Math.floor(Math.random() * n.length);
                (r = n.splice(r, 1)),
                  e.placeShips(
                    String(r),
                    Math.random() < 0.5 ? "H" : "V",
                    s[t],
                  ) && (t += 1);
              }
            }
          };
        };
      },
      507: (e, t, n) => {
        n(498),
          n(643),
          (e.exports = class {
            possible_plays = [
              "0,0",
              "0,1",
              "0,2",
              "0,3",
              "0,4",
              "0,5",
              "0,6",
              "0,7",
              "0,8",
              "0,9",
              "1,0",
              "1,1",
              "1,2",
              "1,3",
              "1,4",
              "1,5",
              "1,6",
              "1,7",
              "1,8",
              "1,9",
              "2,0",
              "2,1",
              "2,2",
              "2,3",
              "2,4",
              "2,5",
              "2,6",
              "2,7",
              "2,8",
              "2,9",
              "3,0",
              "3,1",
              "3,2",
              "3,3",
              "3,4",
              "3,5",
              "3,6",
              "3,7",
              "3,8",
              "3,9",
              "4,0",
              "4,1",
              "4,2",
              "4,3",
              "4,4",
              "4,5",
              "4,6",
              "4,7",
              "4,8",
              "4,9",
              "5,0",
              "5,1",
              "5,2",
              "5,3",
              "5,4",
              "5,5",
              "5,6",
              "5,7",
              "5,8",
              "5,9",
              "6,0",
              "6,1",
              "6,2",
              "6,3",
              "6,4",
              "6,5",
              "6,6",
              "6,7",
              "6,8",
              "6,9",
              "7,0",
              "7,1",
              "7,2",
              "7,3",
              "7,4",
              "7,5",
              "7,6",
              "7,7",
              "7,8",
              "7,9",
              "8,0",
              "8,1",
              "8,2",
              "8,3",
              "8,4",
              "8,5",
              "8,6",
              "8,7",
              "8,8",
              "8,9",
              "9,0",
              "9,1",
              "9,2",
              "9,3",
              "9,4",
              "9,5",
              "9,6",
              "9,7",
              "9,8",
              "9,9",
            ];
            yourTurn = (e, t, n) => e.receiveAttack(t, n);
            computerTurn = (e) => {
              this.possible_plays;
              var t = Math.floor(Math.random() * this.possible_plays.length);
              t = this.possible_plays.splice(t, 1);
              const n = document.getElementById(`P${t}`);
              return e.receiveAttack(String(t), n);
            };
          });
      },
      643: (e) => {
        e.exports = class {
          length;
          hitCount = 0;
          name;
          taken_coords = [];
          sunk = !1;
          constructor(e = 0, t = "carrier", n = "0,0", r = "H") {
            (this.length = e), (this.name = t);
            const s = n.split(","),
              i = parseInt(s[0]),
              a = parseInt(s[1]);
            for (var o = 0; o < e; o++)
              if ("H" === r) {
                if (!(i + o >= 0 && i + o < 10)) {
                  this.taken_coords = [];
                  break;
                }
                this.taken_coords.push(`${i + o},${a}`);
              } else if ("V" === r) {
                if (!(a + o >= 0 && a + o < 10)) {
                  this.taken_coords = [];
                  break;
                }
                this.taken_coords.push(`${i},${a - o}`);
              }
          }
          hit = () => this.hitCount++;
          isSunk = () => (
            this.hitCount >= this.length && (this.sunk = !0), this.sunk
          );
        };
      },
      146: (e, t, n) => {
        "use strict";
        e.exports = n.p + "170b842f9a8cd6150a0d.ttf";
      },
    },
    t = {};
  function n(r) {
    var s = t[r];
    if (void 0 !== s) return s.exports;
    var i = (t[r] = { id: r, exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        if (r.length) for (var s = r.length - 1; s > -1 && !e; ) e = r[s--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (n.b = document.baseURI || self.location.href),
    (n.nc = void 0),
    (() => {
      "use strict";
      var e = n(379),
        t = n.n(e),
        r = n(795),
        s = n.n(r),
        i = n(569),
        a = n.n(i),
        o = n(565),
        c = n.n(o),
        d = n(216),
        l = n.n(d),
        p = n(589),
        h = n.n(p),
        u = n(28),
        f = {};
      (f.styleTagTransform = h()),
        (f.setAttributes = c()),
        (f.insert = a().bind(null, "head")),
        (f.domAPI = s()),
        (f.insertStyleElement = l()),
        t()(u.Z, f),
        u.Z && u.Z.locals && u.Z.locals;
      const m = n(930);
      class g {
        placements = [];
        sizes = [2, 3, 4, 4];
        ind = 0;
        shipPlacementUI = () => {
          let e = document.querySelector(".game-container");
          (e.innerHTML = ""),
            (e.style = "flex-direction:column; align-items:center;");
          let t = "H";
          const n = this.#e("div", "set-ships"),
            r = this.#e("h1", "placeships-heading"),
            s = this.#e("div", "empty-grid-container"),
            i = this.#e("div", "right-side"),
            a = this.#e("div", "ships-grid"),
            o = this.#e("div", "switcher"),
            c = this.#e("button", "start-game");
          let d = document.createElement("h3");
          (d.textContent = "H"), (d.style = "margin: 2%"), o.appendChild(d);
          const l = this.#e("label", "switch", "switch");
          (l.innerHTML =
            '<input type="checkbox" class="orientation"><span class="slider round"></span>'),
            o.appendChild(l),
            (d = document.createElement("h3")),
            (d.style = "margin: 2%"),
            (d.textContent = "V"),
            (c.textContent = "START"),
            o.appendChild(d),
            this.#r(a),
            (r.textContent = "PLACE YOUR SHIPS"),
            s.appendChild(a);
          const p = document.createElement("h3");
          p.classList.add("instructions"),
            (p.textContent =
              "YOU HAVE A TOTAL OF 4 SHIPS OF SIZE 2,3,4,4 PLACE YOUR SHIPS STRATEGICALLY I MIGHT BE GOOD AT THIS LOGIC"),
            i.appendChild(p),
            e.appendChild(r),
            n.appendChild(s),
            i.appendChild(o),
            n.appendChild(i),
            e.appendChild(n),
            e.appendChild(c),
            document
              .querySelector(".orientation")
              .addEventListener(
                "change",
                (e) => (t = e.target.checked ? "V" : "H"),
              ),
            document.addEventListener("mouseover", (e) => {
              "grid-elem" === e.target.classList.value &&
                this.Preview(e.target, t, this.sizes[this.ind]);
            }),
            document.addEventListener("click", (e) => {
              if ("grid-elem" === e.target.classList[0]) {
                let n = document.querySelectorAll(".possible_ship");
                n.length > 0 &&
                  ((this.ind += 1), this.placements.push([e.target.id, t])),
                  n.forEach((e) => {
                    e.classList.add("ship-coord");
                  });
              } else
                "replay-btn" === e.target.classList[0] &&
                  new g().shipPlacementUI();
            }),
            c.addEventListener("click", () => {
              this.ind < 4
                ? window.alert("Please place 4 ships")
                : new m().CreatePage(this.placements);
            });
        };
        #e(e, t, n, r) {
          const s = document.createElement(e);
          return (
            s.classList.add(t),
            n && (s.id = n),
            r && s.setAttribute("coords", r),
            s
          );
        }
        #r(e) {
          for (let t = 9; t >= 0; t--)
            for (let n = 0; n < 10; n++) {
              const r = this.#e("div", "grid-elem");
              r.setAttribute("coord", `${n},${t}`),
                (r.id = `${n},${t}`),
                e.appendChild(r);
            }
        }
        Preview(e, t, n) {
          if (e.classList.contains("ship-coord")) return;
          let [r, , s] = e.id;
          if (((r = parseInt(r)), (s = parseInt(s)), "H" === t)) {
            if (r + n <= 10) {
              e.classList.add("possible_ship");
              let t = 1;
              for (; t < n; ) {
                let e = document.getElementById(`${r + t},${s}`);
                if (e.classList.contains("ship-coord")) return void this.#s();
                e.classList.add("possible_ship"), t++;
              }
            }
          } else if ("V" === t && s >= n - 1) {
            e.classList.add("possible_ship");
            let t = 1;
            for (; t < n; ) {
              let e = document.getElementById(`${r},${s - t}`);
              if (e.classList.contains("ship-coord")) return void this.#s();
              e.classList.add("possible_ship"), t++;
            }
          }
          e.addEventListener("mouseleave", () => {
            document
              .querySelectorAll(".possible_ship")
              .forEach((e) => e.classList.remove("possible_ship"));
          });
        }
        #s() {
          document.querySelectorAll(".possible_ship").forEach((e) => {
            e.classList.remove("possible_ship");
          });
        }
      }
      new g().shipPlacementUI();
    })();
})();
