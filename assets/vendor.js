function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var $ = jQuery = $;
  var define = null;
  /*! lazysizes - v4.0.1 */

  !function (a, b) {
    var c = b(a, a.document);
    a.lazySizes = c, "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports && (module.exports = c);
  }(window, function (a, b) {
    "use strict";

    if (b.getElementsByClassName) {
      var c,
          d,
          e = b.documentElement,
          f = a.Date,
          g = a.HTMLPictureElement,
          h = "addEventListener",
          i = "getAttribute",
          j = a[h],
          k = a.setTimeout,
          l = a.requestAnimationFrame || k,
          m = a.requestIdleCallback,
          n = /^picture$/i,
          o = ["load", "error", "lazyincluded", "_lazyloaded"],
          p = {},
          q = Array.prototype.forEach,
          r = function r(a, b) {
        return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b];
      },
          s = function s(a, b) {
        r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b);
      },
          t = function t(a, b) {
        var c;
        (c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " "));
      },
          u = function u(a, b, c) {
        var d = c ? h : "removeEventListener";
        c && u(a, b), o.forEach(function (c) {
          a[d](c, b);
        });
      },
          v = function v(a, d, e, f, g) {
        var h = b.createEvent("CustomEvent");
        return e || (e = {}), e.instance = c, h.initCustomEvent(d, !f, !g, e), a.dispatchEvent(h), h;
      },
          w = function w(b, c) {
        var e;
        !g && (e = a.picturefill || d.pf) ? e({
          reevaluate: !0,
          elements: [b]
        }) : c && c.src && (b.src = c.src);
      },
          x = function x(a, b) {
        return (getComputedStyle(a, null) || {})[b];
      },
          y = function y(a, b, c) {
        for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth;) {
          c = b.offsetWidth, b = b.parentNode;
        }

        return c;
      },
          z = function () {
        var a,
            c,
            d = [],
            e = [],
            f = d,
            g = function g() {
          var b = f;

          for (f = d.length ? e : d, a = !0, c = !1; b.length;) {
            b.shift()();
          }

          a = !1;
        },
            h = function h(d, e) {
          a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? k : l)(g)));
        };

        return h._lsFlush = g, h;
      }(),
          A = function A(a, b) {
        return b ? function () {
          z(a);
        } : function () {
          var b = this,
              c = arguments;
          z(function () {
            a.apply(b, c);
          });
        };
      },
          B = function B(a) {
        var b,
            c = 0,
            e = 125,
            g = d.ricTimeout,
            h = function h() {
          b = !1, c = f.now(), a();
        },
            i = m && d.ricTimeout ? function () {
          m(h, {
            timeout: g
          }), g !== d.ricTimeout && (g = d.ricTimeout);
        } : A(function () {
          k(h);
        }, !0);

        return function (a) {
          var d;
          (a = a === !0) && (g = 33), b || (b = !0, d = e - (f.now() - c), 0 > d && (d = 0), a || 9 > d && m ? i() : k(i, d));
        };
      },
          C = function C(a) {
        var b,
            c,
            d = 99,
            e = function e() {
          b = null, a();
        },
            g = function g() {
          var a = f.now() - c;
          d > a ? k(g, d - a) : (m || e)(e);
        };

        return function () {
          c = f.now(), b || (b = k(g, d));
        };
      };

      !function () {
        var b,
            c = {
          lazyClass: "lazyload",
          loadedClass: "lazyloaded",
          loadingClass: "lazyloading",
          preloadClass: "lazypreload",
          errorClass: "lazyerror",
          autosizesClass: "lazyautosizes",
          srcAttr: "data-src",
          srcsetAttr: "data-srcset",
          sizesAttr: "data-sizes",
          minSize: 40,
          customMedia: {},
          init: !0,
          expFactor: 1.5,
          hFac: .8,
          loadMode: 2,
          loadHidden: !0,
          ricTimeout: 300
        };
        d = a.lazySizesConfig || a.lazysizesConfig || {};

        for (b in c) {
          b in d || (d[b] = c[b]);
        }

        a.lazySizesConfig = d, k(function () {
          d.init && F();
        });
      }();

      var D = function () {
        var g,
            l,
            m,
            o,
            p,
            y,
            D,
            F,
            G,
            H,
            I,
            J,
            K,
            L,
            M = /^img$/i,
            N = /^iframe$/i,
            O = "onscroll" in a && !/glebot/.test(navigator.userAgent),
            P = 0,
            Q = 0,
            R = 0,
            S = -1,
            T = function T(a) {
          R--, a && a.target && u(a.target, T), (!a || 0 > R || !a.target) && (R = 0);
        },
            U = function U(a, c) {
          var d,
              f = a,
              g = "hidden" == x(b.body, "visibility") || "hidden" != x(a, "visibility");

          for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != e;) {
            g = (x(f, "opacity") || 1) > 0, g && "visible" != x(f, "overflow") && (d = f.getBoundingClientRect(), g = H > d.left && G < d.right && I > d.top - 1 && F < d.bottom + 1);
          }

          return g;
        },
            V = function V() {
          var a,
              f,
              h,
              j,
              k,
              m,
              n,
              p,
              q,
              r = c.elements;

          if ((o = d.loadMode) && 8 > R && (a = r.length)) {
            f = 0, S++, null == K && ("expand" in d || (d.expand = e.clientHeight > 500 && e.clientWidth > 500 ? 500 : 370), J = d.expand, K = J * d.expFactor), K > Q && 1 > R && S > 2 && o > 2 && !b.hidden ? (Q = K, S = 0) : Q = o > 1 && S > 1 && 6 > R ? J : P;

            for (; a > f; f++) {
              if (r[f] && !r[f]._lazyRace) if (O) {
                if ((p = r[f][i]("data-expand")) && (m = 1 * p) || (m = Q), q !== m && (y = innerWidth + m * L, D = innerHeight + m, n = -1 * m, q = m), h = r[f].getBoundingClientRect(), (I = h.bottom) >= n && (F = h.top) <= D && (H = h.right) >= n * L && (G = h.left) <= y && (I || H || G || F) && (d.loadHidden || "hidden" != x(r[f], "visibility")) && (l && 3 > R && !p && (3 > o || 4 > S) || U(r[f], m))) {
                  if (ba(r[f]), k = !0, R > 9) break;
                } else !k && l && !j && 4 > R && 4 > S && o > 2 && (g[0] || d.preloadAfterLoad) && (g[0] || !p && (I || H || G || F || "auto" != r[f][i](d.sizesAttr))) && (j = g[0] || r[f]);
              } else ba(r[f]);
            }

            j && !k && ba(j);
          }
        },
            W = B(V),
            X = function X(a) {
          s(a.target, d.loadedClass), t(a.target, d.loadingClass), u(a.target, Z), v(a.target, "lazyloaded");
        },
            Y = A(X),
            Z = function Z(a) {
          Y({
            target: a.target
          });
        },
            $ = function $(a, b) {
          try {
            a.contentWindow.location.replace(b);
          } catch (c) {
            a.src = b;
          }
        },
            _ = function _(a) {
          var b,
              c = a[i](d.srcsetAttr);
          (b = d.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c);
        },
            aa = A(function (a, b, c, e, f) {
          var g, h, j, l, o, p;
          (o = v(a, "lazybeforeunveil", b)).defaultPrevented || (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)), h = a[i](d.srcsetAttr), g = a[i](d.srcAttr), f && (j = a.parentNode, l = j && n.test(j.nodeName || "")), p = b.firesLoad || "src" in a && (h || g || l), o = {
            target: a
          }, p && (u(a, T, !0), clearTimeout(m), m = k(T, 2500), s(a, d.loadingClass), u(a, Z, !0)), l && q.call(j.getElementsByTagName("source"), _), h ? a.setAttribute("srcset", h) : g && !l && (N.test(a.nodeName) ? $(a, g) : a.src = g), f && (h || l) && w(a, {
            src: g
          })), a._lazyRace && delete a._lazyRace, t(a, d.lazyClass), z(function () {
            (!p || a.complete && a.naturalWidth > 1) && (p ? T(o) : R--, X(o));
          }, !0);
        }),
            ba = function ba(a) {
          var b,
              c = M.test(a.nodeName),
              e = c && (a[i](d.sizesAttr) || a[i]("sizes")),
              f = "auto" == e;
          (!f && l || !c || !a[i]("src") && !a.srcset || a.complete || r(a, d.errorClass) || !r(a, d.lazyClass)) && (b = v(a, "lazyunveilread").detail, f && E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, R++, aa(a, b, f, e, c));
        },
            ca = function ca() {
          if (!l) {
            if (f.now() - p < 999) return void k(ca, 999);
            var a = C(function () {
              d.loadMode = 3, W();
            });
            l = !0, d.loadMode = 3, W(), j("scroll", function () {
              3 == d.loadMode && (d.loadMode = 2), a();
            }, !0);
          }
        };

        return {
          _: function _() {
            p = f.now(), c.elements = b.getElementsByClassName(d.lazyClass), g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass), L = d.hFac, j("scroll", W, !0), j("resize", W, !0), a.MutationObserver ? new MutationObserver(W).observe(e, {
              childList: !0,
              subtree: !0,
              attributes: !0
            }) : (e[h]("DOMNodeInserted", W, !0), e[h]("DOMAttrModified", W, !0), setInterval(W, 999)), j("hashchange", W, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (a) {
              b[h](a, W, !0);
            }), /d$|^c/.test(b.readyState) ? ca() : (j("load", ca), b[h]("DOMContentLoaded", W), k(ca, 2e4)), c.elements.length ? (V(), z._lsFlush()) : W();
          },
          checkElems: W,
          unveil: ba
        };
      }(),
          E = function () {
        var a,
            c = A(function (a, b, c, d) {
          var e, f, g;
          if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), n.test(b.nodeName || "")) for (e = b.getElementsByTagName("source"), f = 0, g = e.length; g > f; f++) {
            e[f].setAttribute("sizes", d);
          }
          c.detail.dataAttr || w(a, c.detail);
        }),
            e = function e(a, b, d) {
          var e,
              f = a.parentNode;
          f && (d = y(a, f, d), e = v(a, "lazybeforesizes", {
            width: d,
            dataAttr: !!b
          }), e.defaultPrevented || (d = e.detail.width, d && d !== a._lazysizesWidth && c(a, f, e, d)));
        },
            f = function f() {
          var b,
              c = a.length;
          if (c) for (b = 0; c > b; b++) {
            e(a[b]);
          }
        },
            g = C(f);

        return {
          _: function _() {
            a = b.getElementsByClassName(d.autosizesClass), j("resize", g);
          },
          checkElems: g,
          updateElem: e
        };
      }(),
          F = function F() {
        F.i || (F.i = !0, E._(), D._());
      };

      return c = {
        cfg: d,
        autoSizer: E,
        loader: D,
        init: F,
        uP: w,
        aC: s,
        rC: t,
        hC: r,
        fire: v,
        gW: y,
        rAF: z
      };
    }
  });
  /*! lazysizes - rias */

  !function (a, b) {
    var c = function c() {
      b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0);
    };

    b = b.bind(null, a, a.document), "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0);
  }(window, function (a, b, c) {
    "use strict";

    function d(b, c) {
      var d,
          e,
          f,
          g,
          h = a.getComputedStyle(b);
      e = b.parentNode, g = {
        isPicture: !(!e || !m.test(e.nodeName || ""))
      }, f = function f(a, c) {
        var d = b.getAttribute("data-" + a);

        if (!d) {
          var e = h.getPropertyValue("--ls-" + a);
          e && (d = e.trim());
        }

        if (d) {
          if ("true" == d) d = !0;else if ("false" == d) d = !1;else if (l.test(d)) d = parseFloat(d);else if ("function" == typeof j[a]) d = j[a](b, d);else if (q.test(d)) try {
            d = JSON.parse(d);
          } catch (f) {}
          g[a] = d;
        } else a in j && "function" != typeof j[a] ? g[a] = j[a] : c && "function" == typeof j[a] && (g[a] = j[a](b, d));
      };

      for (d in j) {
        f(d);
      }

      return c.replace(p, function (a, b) {
        b in g || f(b, !0);
      }), g;
    }

    function e(a, b) {
      var c = [],
          d = function d(a, c) {
        return k[_typeof(b[c])] ? b[c] : a;
      };

      return c.srcset = [], b.absUrl && (s.setAttribute("href", a), a = s.href), a = ((b.prefix || "") + a + (b.postfix || "")).replace(p, d), b.widths.forEach(function (d) {
        var e = b.widthmap[d] || d,
            f = {
          u: a.replace(n, e).replace(o, b.ratio ? Math.round(d * b.ratio) : ""),
          w: d
        };
        c.push(f), c.srcset.push(f.c = f.u + " " + d + "w");
      }), c;
    }

    function f(a, c, d) {
      var f = 0,
          g = 0,
          h = d;

      if (a) {
        if ("container" === c.ratio) {
          for (f = h.scrollWidth, g = h.scrollHeight; !(f && g || h === b);) {
            h = h.parentNode, f = h.scrollWidth, g = h.scrollHeight;
          }

          f && g && (c.ratio = g / f);
        }

        a = e(a, c), a.isPicture = c.isPicture, u && "IMG" == d.nodeName.toUpperCase() ? d.removeAttribute(i.srcsetAttr) : d.setAttribute(i.srcsetAttr, a.srcset.join(", ")), Object.defineProperty(d, "_lazyrias", {
          value: a,
          writable: !0
        });
      }
    }

    function g(a, b) {
      var e = d(a, b);
      return j.modifyOptions.call(a, {
        target: a,
        details: e,
        detail: e
      }), c.fire(a, "lazyriasmodifyoptions", e), e;
    }

    function h(a) {
      return a.getAttribute(a.getAttribute("data-srcattr") || j.srcAttr) || a.getAttribute(i.srcsetAttr) || a.getAttribute(i.srcAttr) || a.getAttribute("data-pfsrcset") || "";
    }

    var i,
        j,
        k = {
      string: 1,
      number: 1
    },
        l = /^\-*\+*\d+\.*\d*$/,
        m = /^picture$/i,
        n = /\s*\{\s*width\s*\}\s*/i,
        o = /\s*\{\s*height\s*\}\s*/i,
        p = /\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,
        q = /^\[.*\]|\{.*\}$/,
        r = /^(?:auto|\d+(px)?)$/,
        s = b.createElement("a"),
        t = b.createElement("img"),
        u = "srcset" in t && !("sizes" in t),
        v = !!a.HTMLPictureElement && !u;
    !function () {
      var b,
          d = function d() {},
          e = {
        prefix: "",
        postfix: "",
        srcAttr: "data-src",
        absUrl: !1,
        modifyOptions: d,
        widthmap: {},
        ratio: !1
      };

      i = c && c.cfg || a.lazySizesConfig, i || (i = {}, a.lazySizesConfig = i), i.supportsType || (i.supportsType = function (a) {
        return !a;
      }), i.rias || (i.rias = {}), j = i.rias, "widths" in j || (j.widths = [], function (a) {
        for (var b, c = 0; !b || 3e3 > b;) {
          c += 5, c > 30 && (c += 1), b = 36 * c, a.push(b);
        }
      }(j.widths));

      for (b in e) {
        b in j || (j[b] = e[b]);
      }
    }(), addEventListener("lazybeforesizes", function (a) {
      if (a.detail.instance == c) {
        var b, d, e, k, l, m, o, p, q, s, t, u, x;

        if (b = a.target, a.detail.dataAttr && !a.defaultPrevented && !j.disabled && (q = b.getAttribute(i.sizesAttr) || b.getAttribute("sizes")) && r.test(q)) {
          if (d = h(b), e = g(b, d), t = n.test(e.prefix) || n.test(e.postfix), e.isPicture && (k = b.parentNode)) for (l = k.getElementsByTagName("source"), m = 0, o = l.length; o > m; m++) {
            (t || n.test(p = h(l[m]))) && (f(p, e, l[m]), u = !0);
          }
          t || n.test(d) ? (f(d, e, b), u = !0) : u && (x = [], x.srcset = [], x.isPicture = !0, Object.defineProperty(b, "_lazyrias", {
            value: x,
            writable: !0
          })), u && (v ? b.removeAttribute(i.srcAttr) : "auto" != q && (s = {
            width: parseInt(q, 10)
          }, w({
            target: b,
            detail: s
          })));
        }
      }
    }, !0);

    var w = function () {
      var d = function d(a, b) {
        return a.w - b.w;
      },
          e = function e(a) {
        var b,
            c,
            d = a.length,
            e = a[d - 1],
            f = 0;

        for (f; d > f; f++) {
          if (e = a[f], e.d = e.w / a.w, e.d >= a.d) {
            !e.cached && (b = a[f - 1]) && b.d > a.d - .13 * Math.pow(a.d, 2.2) && (c = Math.pow(b.d - .6, 1.6), b.cached && (b.d += .15 * c), b.d + (e.d - a.d) * c > a.d && (e = b));
            break;
          }
        }

        return e;
      },
          f = function f(a, b) {
        var d;
        return !a._lazyrias && c.pWS && (d = c.pWS(a.getAttribute(i.srcsetAttr || ""))).length && (Object.defineProperty(a, "_lazyrias", {
          value: d,
          writable: !0
        }), b && a.parentNode && (d.isPicture = "PICTURE" == a.parentNode.nodeName.toUpperCase())), a._lazyrias;
      },
          g = function g(b) {
        var d = a.devicePixelRatio || 1,
            e = c.getX && c.getX(b);
        return Math.min(e || d, 2.4, d);
      },
          h = function h(b, c) {
        var h, i, j, k, l, m;
        if (l = b._lazyrias, l.isPicture && a.matchMedia) for (i = 0, h = b.parentNode.getElementsByTagName("source"), j = h.length; j > i; i++) {
          if (f(h[i]) && !h[i].getAttribute("type") && (!(k = h[i].getAttribute("media")) || (matchMedia(k) || {}).matches)) {
            l = h[i]._lazyrias;
            break;
          }
        }
        return (!l.w || l.w < c) && (l.w = c, l.d = g(b), m = e(l.sort(d))), m;
      },
          _j = function j(d) {
        if (d.detail.instance == c) {
          var e,
              g = d.target;
          return !u && (a.respimage || a.picturefill || lazySizesConfig.pf) ? void b.removeEventListener("lazybeforesizes", _j) : void (("_lazyrias" in g || d.detail.dataAttr && f(g, !0)) && (e = h(g, d.detail.width), e && e.u && g._lazyrias.cur != e.u && (g._lazyrias.cur = e.u, e.cached = !0, c.rAF(function () {
            g.setAttribute(i.srcAttr, e.u), g.setAttribute("src", e.u);
          }))));
        }
      };

      return v ? _j = function _j() {} : addEventListener("lazybeforesizes", _j), _j;
    }();
  });
  /* lazysizes - optimumx */

  !function (a, b, c) {
    "use strict";

    if (a.addEventListener) {
      var d,
          e = /^picture$/i,
          f = b.documentElement,
          g = function () {
        var a,
            b = /(([^,\s].[^\s]+)\s+(\d+)(w|h)(\s+(\d+)(w|h))?)/g,
            c = function c(b, _c, d, e, f, g, h, i) {
          a.push({
            c: _c,
            u: d,
            w: 1 * ("w" == i ? h : e)
          });
        };

        return function (d) {
          return a = [], d.replace(b, c), a;
        };
      }(),
          h = function () {
        var a = function a(_a, b) {
          return _a.w - b.w;
        },
            b = function b(_b, c) {
          var d = {
            srcset: _b.getAttribute(lazySizes.cfg.srcsetAttr) || ""
          },
              e = g(d.srcset);
          return Object.defineProperty(_b, c, {
            value: d,
            writable: !0
          }), d.cands = e, d.index = 0, d.dirty = !1, e[0] && e[0].w ? (e.sort(a), d.cSrcset = [e[d.index].c]) : (d.cSrcset = d.srcset ? [d.srcset] : [], d.cands = []), d;
        };

        return function (a, c) {
          var d, f, g, h;
          if (!a[c] && (h = a.parentNode || {}, a[c] = b(a, c), a[c].isImg = !0, e.test(h.nodeName || ""))) for (a[c].picture = !0, d = h.getElementsByTagName("source"), f = 0, g = d.length; g > f; f++) {
            b(d[f], c).isImg = !1;
          }
          return a[c];
        };
      }(),
          i = {
        _lazyOptimumx: function () {
          var a = function a(_a2, b, c) {
            var d, e, f;
            return _a2 && _a2.d ? (f = c > .7 ? .6 : .4, _a2.d >= c ? !1 : (e = Math.pow(_a2.d - f, 1.6) || .1, .1 > e ? e = .1 : e > 3 && (e = 3), d = _a2.d + (b - c) * e, c > d)) : !0;
          };

          return function (b, c, d) {
            var e, f;

            for (e = 0; e < b.cands.length; e++) {
              if (f = b.cands[e], f.d = (f.w || 1) / c, !(b.index >= e)) {
                if (!(f.d <= d || a(b.cands[e - 1], f.d, d))) break;
                b.cSrcset.push(f.c), b.index = e;
              }
            }
          };
        }()
      },
          j = function () {
        var a = function a(_a3, b, c, d, e) {
          var f,
              g = _a3[e];
          g && (f = g.index, i[e](g, b, c), g.dirty && f == g.index || (g.cSrcset.join(", "), _a3.setAttribute(d, g.cSrcset.join(", ")), g.dirty = !0));
        };

        return function (b, c, d, e, f) {
          var g,
              h,
              i,
              j,
              k = b[f];
          if (k.width = c, k.picture && (h = b.parentNode)) for (g = h.getElementsByTagName("source"), j = 0, i = g.length; i > j; j++) {
            a(g[j], c, d, e, f);
          }
          a(b, c, d, e, f);
        };
      }(),
          k = function k(a) {
        var b = a.getAttribute("data-optimumx") || a.getAttribute("data-maxdpr");
        return !b && d.constrainPixelDensity && (b = "auto"), b && (b = "auto" == b ? d.getOptimumX(a) : parseFloat(b, 10)), b;
      },
          l = function l() {
        a.lazySizes && !a.lazySizes.getOptimumX && (lazySizes.getX = k, lazySizes.pWS = g, f.removeEventListener("lazybeforeunveil", l));
      };

      f.addEventListener("lazybeforeunveil", l), setTimeout(l), d = a.lazySizes && lazySizes.cfg || a.lazySizesConfig, d || (d = {}, a.lazySizesConfig = d), "function" != typeof d.getOptimumX && (d.getOptimumX = function () {
        var b = a.devicePixelRatio || 1;
        return b > 2.6 ? b *= .6 : b > 1.9 ? b *= .8 : b -= .01, Math.min(Math.round(100 * b) / 100, 2);
      }), a.devicePixelRatio && addEventListener("lazybeforesizes", function (a) {
        var b,
            c,
            e,
            f,
            g = a.target,
            i = a.detail,
            l = i.dataAttr;
        a.defaultPrevented || !(b = k(g)) || b >= devicePixelRatio || (!l || !g._lazyOptimumx || i.reloaded || d.unloadedClass && lazySizes.hC(g, d.unloadedClass) || (g._lazyOptimumx = null), c = h(g, "_lazyOptimumx"), e = i.width, e && (c.width || 0) < e && (f = l ? lazySizes.cfg.srcsetAttr : "srcset", lazySizes.rAF(function () {
          j(g, e, b, f, "_lazyOptimumx");
        })));
      });
    }
  }(window, document);
  /* lazysizes - progressive */

  !function (a, b) {
    var c = function c() {
      b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0);
    };

    b = b.bind(null, a, a.document), "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0);
  }(window, function (a, b, c) {
    "use strict";

    var d, _e;

    "srcset" in b.createElement("img") && (d = /^img$/i, _e = function e(a) {
      a.target.style.backgroundSize = "", a.target.style.backgroundImage = "", a.target.removeEventListener(a.type, _e);
    }, b.addEventListener("lazybeforeunveil", function (a) {
      if (a.detail.instance == c) {
        var b = a.target;

        if (d.test(b.nodeName)) {
          var f = b.getAttribute("src");
          f && (b.style.backgroundSize = "100% 100%", b.style.backgroundImage = "url(" + f + ")", b.removeAttribute("src"), b.addEventListener("load", _e));
        }
      }
    }, !1));
  });
  /* lazysizes - parent-fit */

  !function (a, b) {
    var c = function c() {
      b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0);
    };

    b = b.bind(null, a, a.document), "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0);
  }(window, function (a, b, c) {
    "use strict";

    if (a.addEventListener) {
      var d = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
          e = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/,
          f = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,
          g = /^picture$/i,
          h = function h(a) {
        return getComputedStyle(a, null) || {};
      },
          i = {
        getParent: function getParent(b, c) {
          var d = b,
              e = b.parentNode;
          return c && "prev" != c || !e || !g.test(e.nodeName || "") || (e = e.parentNode), "self" != c && (d = "prev" == c ? b.previousElementSibling : c && (e.closest || a.jQuery) ? (e.closest ? e.closest(c) : jQuery(e).closest(c)[0]) || e : e), d;
        },
        getFit: function getFit(a) {
          var b,
              c,
              d = h(a),
              g = d.content || d.fontFamily,
              j = {
            fit: a._lazysizesParentFit || a.getAttribute("data-parent-fit")
          };
          return !j.fit && g && (b = g.match(e)) && (j.fit = b[1]), j.fit ? (c = a._lazysizesParentContainer || a.getAttribute("data-parent-container"), !c && g && (b = g.match(f)) && (c = b[1]), j.parent = i.getParent(a, c)) : j.fit = d.objectFit, j;
        },
        getImageRatio: function getImageRatio(b) {
          var c,
              e,
              f,
              h,
              i = b.parentNode,
              j = i && g.test(i.nodeName || "") ? i.querySelectorAll("source, img") : [b];

          for (c = 0; c < j.length; c++) {
            if (b = j[c], e = b.getAttribute(lazySizesConfig.srcsetAttr) || b.getAttribute("srcset") || b.getAttribute("data-pfsrcset") || b.getAttribute("data-risrcset") || "", f = b._lsMedia || b.getAttribute("media"), f = lazySizesConfig.customMedia[b.getAttribute("data-media") || f] || f, e && (!f || (a.matchMedia && matchMedia(f) || {}).matches)) {
              h = parseFloat(b.getAttribute("data-aspectratio")), !h && e.match(d) && (h = "w" == RegExp.$2 ? RegExp.$1 / RegExp.$3 : RegExp.$3 / RegExp.$1);
              break;
            }
          }

          return h;
        },
        calculateSize: function calculateSize(a, b) {
          var c,
              d,
              e,
              f,
              g = this.getFit(a),
              h = g.fit,
              i = g.parent;
          return "width" == h || ("contain" == h || "cover" == h) && (e = this.getImageRatio(a)) ? (i ? b = i.clientWidth : i = a, f = b, "width" == h ? f = b : (d = i.clientHeight, d > 40 && (c = b / d) && ("cover" == h && e > c || "contain" == h && c > e) && (f = b * (e / c))), f) : b;
        }
      };

      c.parentFit = i, b.addEventListener("lazybeforesizes", function (a) {
        if (!a.defaultPrevented && a.detail.instance == c) {
          var b = a.target;
          a.detail.width = i.calculateSize(b, a.detail.width);
        }
      });
    }
  });
  /*! lazysizes - respimg */

  !function (a, b) {
    var c = function c() {
      b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0);
    };

    b = b.bind(null, a, a.document), "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? b(require("lazysizes"), require("../fix-ios-sizes/fix-ios-sizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0);
  }(window, function (a, b, c) {
    "use strict";

    var d,
        e = c && c.cfg || a.lazySizesConfig,
        f = b.createElement("img"),
        g = "sizes" in f && "srcset" in f,
        h = /\s+\d+h/g,
        i = function () {
      var a = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
          c = Array.prototype.forEach;
      return function (d) {
        var e = b.createElement("img"),
            f = function f(b) {
          var c,
              d,
              e = b.getAttribute(lazySizesConfig.srcsetAttr);
          e && ((d = e.match(a)) && (c = "w" == d[2] ? d[1] / d[3] : d[3] / d[1], c && b.setAttribute("data-aspectratio", c)), b.setAttribute(lazySizesConfig.srcsetAttr, e.replace(h, "")));
        },
            g = function g(a) {
          var b = a.target.parentNode;
          b && "PICTURE" == b.nodeName && c.call(b.getElementsByTagName("source"), f), f(a.target);
        },
            i = function i() {
          e.currentSrc && b.removeEventListener("lazybeforeunveil", g);
        };

        d[1] && (b.addEventListener("lazybeforeunveil", g), e.onload = i, e.onerror = i, e.srcset = "data:,a 1w 1h", e.complete && i());
      };
    }();

    if (e || (e = {}, a.lazySizesConfig = e), e.supportsType || (e.supportsType = function (a) {
      return !a;
    }), !a.picturefill && !e.pf) {
      if (a.HTMLPictureElement && g) return b.msElementsFromPoint && i(navigator.userAgent.match(/Edge\/(\d+)/)), void (e.pf = function () {});
      e.pf = function (b) {
        var c, e;
        if (!a.picturefill) for (c = 0, e = b.elements.length; e > c; c++) {
          d(b.elements[c]);
        }
      }, d = function () {
        var f = function f(a, b) {
          return a.w - b.w;
        },
            i = /^\s*\d+\.*\d*px\s*$/,
            j = function j(a) {
          var b,
              c,
              d = a.length,
              e = a[d - 1],
              f = 0;

          for (f; d > f; f++) {
            if (e = a[f], e.d = e.w / a.w, e.d >= a.d) {
              !e.cached && (b = a[f - 1]) && b.d > a.d - .13 * Math.pow(a.d, 2.2) && (c = Math.pow(b.d - .6, 1.6), b.cached && (b.d += .15 * c), b.d + (e.d - a.d) * c > a.d && (e = b));
              break;
            }
          }

          return e;
        },
            k = function () {
          var a,
              b = /(([^,\s].[^\s]+)\s+(\d+)w)/g,
              c = /\s/,
              d = function d(b, c, _d, e) {
            a.push({
              c: c,
              u: _d,
              w: 1 * e
            });
          };

          return function (e) {
            return a = [], e = e.trim(), e.replace(h, "").replace(b, d), a.length || !e || c.test(e) || a.push({
              c: e,
              u: e,
              w: 99
            }), a;
          };
        }(),
            l = function l() {
          l.init || (l.init = !0, addEventListener("resize", function () {
            var a,
                c = b.getElementsByClassName("lazymatchmedia"),
                e = function e() {
              var a, b;

              for (a = 0, b = c.length; b > a; a++) {
                d(c[a]);
              }
            };

            return function () {
              clearTimeout(a), a = setTimeout(e, 66);
            };
          }()));
        },
            m = function m(b, d) {
          var f,
              g = b.getAttribute("srcset") || b.getAttribute(e.srcsetAttr);
          !g && d && (g = b._lazypolyfill ? b._lazypolyfill._set : b.getAttribute(e.srcAttr) || b.getAttribute("src")), b._lazypolyfill && b._lazypolyfill._set == g || (f = k(g || ""), d && b.parentNode && (f.isPicture = "PICTURE" == b.parentNode.nodeName.toUpperCase(), f.isPicture && a.matchMedia && (c.aC(b, "lazymatchmedia"), l())), f._set = g, Object.defineProperty(b, "_lazypolyfill", {
            value: f,
            writable: !0
          }));
        },
            n = function n(b) {
          var d = a.devicePixelRatio || 1,
              e = c.getX && c.getX(b);
          return Math.min(e || d, 2.5, d);
        },
            _o = function o(b) {
          return a.matchMedia ? (_o = function o(a) {
            return !a || (matchMedia(a) || {}).matches;
          })(b) : !b;
        },
            p = function p(a) {
          var b, d, g, h, k, l, p;
          if (h = a, m(h, !0), k = h._lazypolyfill, k.isPicture) for (d = 0, b = a.parentNode.getElementsByTagName("source"), g = b.length; g > d; d++) {
            if (e.supportsType(b[d].getAttribute("type"), a) && _o(b[d].getAttribute("media"))) {
              h = b[d], m(h), k = h._lazypolyfill;
              break;
            }
          }
          return k.length > 1 ? (p = h.getAttribute("sizes") || "", p = i.test(p) && parseInt(p, 10) || c.gW(a, a.parentNode), k.d = n(a), !k.src || !k.w || k.w < p ? (k.w = p, l = j(k.sort(f)), k.src = l) : l = k.src) : l = k[0], l;
        },
            q = function q(a) {
          if (!g || !a.parentNode || "PICTURE" == a.parentNode.nodeName.toUpperCase()) {
            var b = p(a);
            b && b.u && a._lazypolyfill.cur != b.u && (a._lazypolyfill.cur = b.u, b.cached = !0, a.setAttribute(e.srcAttr, b.u), a.setAttribute("src", b.u));
          }
        };

        return q.parse = k, q;
      }(), e.loadedClass && e.loadingClass && !function () {
        var a = [];
        ['img[sizes$="px"][srcset].', "picture > img:not([srcset])."].forEach(function (b) {
          a.push(b + e.loadedClass), a.push(b + e.loadingClass);
        }), e.pf({
          elements: b.querySelectorAll(a.join(", "))
        });
      }();
    }
  });
  /*! lazysizes - bgset */

  !function (a, b) {
    var c = function c() {
      b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0);
    };

    b = b.bind(null, a, a.document), "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0);
  }(window, function (a, b, c) {
    "use strict";

    if (a.addEventListener) {
      var d = /\s+/g,
          e = /\s*\|\s+|\s+\|\s*/g,
          f = /^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,
          g = /\(|\)|'/,
          h = {
        contain: 1,
        cover: 1
      },
          i = function i(a) {
        var b = c.gW(a, a.parentNode);
        return (!a._lazysizesWidth || b > a._lazysizesWidth) && (a._lazysizesWidth = b), a._lazysizesWidth;
      },
          j = function j(a) {
        var b;
        return b = (getComputedStyle(a) || {
          getPropertyValue: function getPropertyValue() {}
        }).getPropertyValue("background-size"), !h[b] && h[a.style.backgroundSize] && (b = a.style.backgroundSize), b;
      },
          k = function k(a, c, g) {
        var h = b.createElement("picture"),
            i = c.getAttribute(lazySizesConfig.sizesAttr),
            j = c.getAttribute("data-ratio"),
            k = c.getAttribute("data-optimumx");
        c._lazybgset && c._lazybgset.parentNode == c && c.removeChild(c._lazybgset), Object.defineProperty(g, "_lazybgset", {
          value: c,
          writable: !0
        }), Object.defineProperty(c, "_lazybgset", {
          value: h,
          writable: !0
        }), a = a.replace(d, " ").split(e), h.style.display = "none", g.className = lazySizesConfig.lazyClass, 1 != a.length || i || (i = "auto"), a.forEach(function (a) {
          var c = b.createElement("source");
          i && "auto" != i && c.setAttribute("sizes", i), a.match(f) && (c.setAttribute(lazySizesConfig.srcsetAttr, RegExp.$1), RegExp.$2 && c.setAttribute("media", lazySizesConfig.customMedia[RegExp.$2] || RegExp.$2)), h.appendChild(c);
        }), i && (g.setAttribute(lazySizesConfig.sizesAttr, i), c.removeAttribute(lazySizesConfig.sizesAttr), c.removeAttribute("sizes")), k && g.setAttribute("data-optimumx", k), j && g.setAttribute("data-ratio", j), h.appendChild(g), c.appendChild(h);
      },
          l = function l(a) {
        if (a.target._lazybgset) {
          var b = a.target,
              d = b._lazybgset,
              e = b.currentSrc || b.src;
          e && (d.style.backgroundImage = "url(" + (g.test(e) ? JSON.stringify(e) : e) + ")"), b._lazybgsetLoading && (c.fire(d, "_lazyloaded", {}, !1, !0), delete b._lazybgsetLoading);
        }
      };

      addEventListener("lazybeforeunveil", function (a) {
        var d, e, f;
        !a.defaultPrevented && (d = a.target.getAttribute("data-bgset")) && (f = a.target, e = b.createElement("img"), e.alt = "", e._lazybgsetLoading = !0, a.detail.firesLoad = !0, k(d, f, e), setTimeout(function () {
          c.loader.unveil(e), c.rAF(function () {
            c.fire(e, "_lazyloaded", {}, !0, !0), e.complete && l({
              target: e
            });
          });
        }));
      }), b.addEventListener("load", l, !0), a.addEventListener("lazybeforesizes", function (a) {
        if (a.detail.instance == c && a.target._lazybgset && a.detail.dataAttr) {
          var b = a.target._lazybgset,
              d = j(b);
          h[d] && (a.target._lazysizesParentFit = d, c.rAF(function () {
            a.target.setAttribute("data-parent-fit", d), a.target._lazysizesParentFit && delete a.target._lazysizesParentFit;
          }));
        }
      }, !0), b.documentElement.addEventListener("lazybeforesizes", function (a) {
        !a.defaultPrevented && a.target._lazybgset && a.detail.instance == c && (a.detail.width = i(a.target._lazybgset));
      });
    }
  });
  /* lazysizes placeholder removal */

  document.addEventListener('lazyloaded', function (e) {
    e.target.parentElement.className = e.target.parentElement.className.replace('lazyload--placeholder', '');
  });
  /*
   * FancyBox - jQuery Plugin
   * Simple and fancy lightbox alternative
   *
   * Examples and documentation at: http://fancybox.net
   *
   * Copyright (c) 2008 - 2010 Janis Skarnelis
   * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
   *
   * Version: 1.3.4 (11/11/2010)
   * Requires: jQuery v1.3+
   *
   * Dual licensed under the MIT and GPL licenses:
   *   http://www.opensource.org/licenses/mit-license.php
   *   http://www.gnu.org/licenses/gpl.html
   *
   * Clean Themes modified to add translatable labels
   */

  ;

  (function (b) {
    var m,
        t,
        u,
        f,
        D,
        j,
        E,
        n,
        z,
        A,
        q = 0,
        e = {},
        o = [],
        p = 0,
        d = {},
        l = [],
        G = null,
        v = new Image(),
        J = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,
        W = /[^\.]\.(swf)\s*$/i,
        K,
        L = 1,
        y = 0,
        s = "",
        r,
        i,
        h = false,
        B = b.extend(b("<div/>")[0], {
      prop: 0
    }),
        M = b.browser && b.browser.msie && b.browser.version < 7 && !window.XMLHttpRequest,
        N = function N() {
      t.hide();
      v.onerror = v.onload = null;
      G && G.abort();
      m.empty();
    },
        O = function O() {
      if (false === e.onError(o, q, e)) {
        t.hide();
        h = false;
      } else {
        e.titleShow = false;
        e.width = "auto";
        e.height = "auto";
        m.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
        F();
      }
    },
        I = function I() {
      var a = o[q],
          c,
          g,
          k,
          C,
          P,
          w;
      N();
      e = b.extend({}, b.fn.fancybox.defaults, typeof b(a).data("fancybox") == "undefined" ? e : b(a).data("fancybox"));
      w = e.onStart(o, q, e);
      if (w === false) h = false;else {
        if (_typeof(w) == "object") e = b.extend(e, w);
        k = e.title || (a.nodeName ? b(a).attr("title") : a.title) || "";
        if (a.nodeName && !e.orig) e.orig = b(a).children("img:first").length ? b(a).children("img:first") : b(a);
        if (k === "" && e.orig && e.titleFromAlt) k = e.orig.attr("alt");
        c = e.href || (a.nodeName ? b(a).attr("href") : a.href) || null;
        if (/^(?:javascript)/i.test(c) || c == "#") c = null;

        if (e.type) {
          g = e.type;
          if (!c) c = e.content;
        } else if (e.content) g = "html";else if (c) g = c.match(J) ? "image" : c.match(W) ? "swf" : b(a).hasClass("iframe") ? "iframe" : c.indexOf("#") === 0 ? "inline" : "ajax";

        if (g) {
          if (g == "inline") {
            a = c.substr(c.indexOf("#"));
            g = b(a).length > 0 ? "inline" : "ajax";
          }

          e.type = g;
          e.href = c;
          e.title = k;
          if (e.autoDimensions) if (e.type == "html" || e.type == "inline" || e.type == "ajax") {
            e.width = "auto";
            e.height = "auto";
          } else e.autoDimensions = false;

          if (e.modal) {
            e.overlayShow = true;
            e.hideOnOverlayClick = false;
            e.hideOnContentClick = false;
            e.enableEscapeButton = false;
            e.showCloseButton = false;
          }

          e.padding = parseInt(e.padding, 10);
          e.margin = parseInt(e.margin, 10);
          m.css("padding", e.padding + e.margin);
          b(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change", function () {
            b(this).replaceWith(j.children());
          });

          switch (g) {
            case "html":
              m.html(e.content);
              F();
              break;

            case "inline":
              if (b(a).parent().is("#fancybox-content") === true) {
                h = false;
                break;
              }

              b('<div class="fancybox-inline-tmp" />').hide().insertBefore(b(a)).bind("fancybox-cleanup", function () {
                b(this).replaceWith(j.children());
              }).bind("fancybox-cancel", function () {
                b(this).replaceWith(m.children());
              });
              b(a).appendTo(m);
              F();
              break;

            case "image":
              h = false;
              b.fancybox.showActivity();
              v = new Image();

              v.onerror = function () {
                O();
              };

              v.onload = function () {
                h = true;
                v.onerror = v.onload = null;
                e.width = v.width;
                e.height = v.height;
                b("<img />").attr({
                  id: "fancybox-img",
                  src: v.src,
                  alt: e.title
                }).appendTo(m);
                Q();
              };

              v.src = c;
              break;

            case "swf":
              e.scrolling = "no";
              C = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + e.width + '" height="' + e.height + '"><param name="movie" value="' + c + '"></param>';
              P = "";
              b.each(e.swf, function (x, H) {
                C += '<param name="' + x + '" value="' + H + '"></param>';
                P += " " + x + '="' + H + '"';
              });
              C += '<embed src="' + c + '" type="application/x-shockwave-flash" width="' + e.width + '" height="' + e.height + '"' + P + "></embed></object>";
              m.html(C);
              F();
              break;

            case "ajax":
              h = false;
              b.fancybox.showActivity();
              e.ajax.win = e.ajax.success;
              G = b.ajax(b.extend({}, e.ajax, {
                url: c,
                data: e.ajax.data || {},
                error: function error(x) {
                  x.status > 0 && O();
                },
                success: function success(x, H, R) {
                  if ((_typeof(R) == "object" ? R : G).status == 200) {
                    if (typeof e.ajax.win == "function") {
                      w = e.ajax.win(c, x, H, R);

                      if (w === false) {
                        t.hide();
                        return;
                      } else if (typeof w == "string" || _typeof(w) == "object") x = w;
                    }

                    m.html(x);
                    F();
                  }
                }
              }));
              break;

            case "iframe":
              Q();
          }
        } else O();
      }
    },
        F = function F() {
      var a = e.width,
          c = e.height;
      a = a.toString().indexOf("%") > -1 ? parseInt((b(window).width() - e.margin * 2) * parseFloat(a) / 100, 10) + "px" : a == "auto" ? "auto" : a + "px";
      c = c.toString().indexOf("%") > -1 ? parseInt((b(window).height() - e.margin * 2) * parseFloat(c) / 100, 10) + "px" : c == "auto" ? "auto" : c + "px";
      m.wrapInner('<div style="width:' + a + ";height:" + c + ";overflow: " + (e.scrolling == "auto" ? "auto" : e.scrolling == "yes" ? "scroll" : "hidden") + ';position:relative;"></div>');
      e.width = m.width();
      e.height = m.height();
      Q();
    },
        Q = function Q() {
      var a, c;
      t.hide();

      if (f.is(":visible") && false === d.onCleanup(l, p, d)) {
        b.event.trigger("fancybox-cancel");
        h = false;
      } else {
        h = true;
        b(j.add(u)).unbind();
        b(window).unbind("resize.fb scroll.fb");
        b(document).unbind("keydown.fb");
        f.is(":visible") && d.titlePosition !== "outside" && f.css("height", f.height());
        l = o;
        p = q;
        d = e;

        if (d.overlayShow) {
          u.css({
            "background-color": d.overlayColor,
            opacity: d.overlayOpacity,
            cursor: d.hideOnOverlayClick ? "pointer" : "auto",
            height: b(document).height()
          });

          if (!u.is(":visible")) {
            M && b("select:not(#fancybox-tmp select)").filter(function () {
              return this.style.visibility !== "hidden";
            }).css({
              visibility: "hidden"
            }).one("fancybox-cleanup", function () {
              this.style.visibility = "inherit";
            });
            u.show();
          }
        } else u.hide();

        i = X();
        s = d.title || "";
        y = 0;
        n.empty().removeAttr("style").removeClass();

        if (d.titleShow !== false) {
          if (b.isFunction(d.titleFormat)) a = d.titleFormat(s, l, p, d);else a = s && s.length ? d.titlePosition == "float" ? '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + s + '</td><td id="fancybox-title-float-right"></td></tr></table>' : '<div id="fancybox-title-' + d.titlePosition + '">' + s + "</div>" : false;
          s = a;

          if (!(!s || s === "")) {
            n.addClass("fancybox-title-" + d.titlePosition).html(s).appendTo("body").show();

            switch (d.titlePosition) {
              case "inside":
                n.css({
                  width: i.width - d.padding * 2,
                  marginLeft: d.padding,
                  marginRight: d.padding
                });
                y = n.outerHeight(true);
                n.appendTo(D);
                i.height += y;
                break;

              case "over":
                n.css({
                  marginLeft: d.padding,
                  width: i.width - d.padding * 2,
                  bottom: d.padding
                }).appendTo(D);
                break;

              case "float":
                n.css("left", parseInt((n.width() - i.width - 40) / 2, 10) * -1).appendTo(f);
                break;

              default:
                n.css({
                  width: i.width - d.padding * 2,
                  paddingLeft: d.padding,
                  paddingRight: d.padding
                }).appendTo(f);
            }
          }
        }

        n.hide();

        if (f.is(":visible")) {
          b(E.add(z).add(A)).hide();
          a = f.position();
          r = {
            top: a.top,
            left: a.left,
            width: f.width(),
            height: f.height()
          };
          c = r.width == i.width && r.height == i.height;
          j.fadeTo(d.changeFade, 0.3, function () {
            var g = function g() {
              j.html(m.contents()).fadeTo(d.changeFade, 1, S);
            };

            b.event.trigger("fancybox-change");
            j.empty().removeAttr("filter").css({
              "border-width": d.padding,
              width: i.width - d.padding * 2,
              height: e.autoDimensions ? "auto" : i.height - y - d.padding * 2
            });
            if (c) g();else {
              B.prop = 0;
              b(B).animate({
                prop: 1
              }, {
                duration: d.changeSpeed,
                easing: d.easingChange,
                step: T,
                complete: g
              });
            }
          });
        } else {
          f.removeAttr("style");
          j.css("border-width", d.padding);

          if (d.transitionIn == "elastic") {
            r = V();
            j.html(m.contents());
            f.show();
            if (d.opacity) i.opacity = 0;
            B.prop = 0;
            b(B).animate({
              prop: 1
            }, {
              duration: d.speedIn,
              easing: d.easingIn,
              step: T,
              complete: S
            });
          } else {
            d.titlePosition == "inside" && y > 0 && n.show();
            j.css({
              width: i.width - d.padding * 2,
              height: e.autoDimensions ? "auto" : i.height - y - d.padding * 2
            }).html(m.contents());
            f.css(i).fadeIn(d.transitionIn == "none" ? 0 : d.speedIn, S);
          }
        }
      }
    },
        Y = function Y() {
      if (d.enableEscapeButton || d.enableKeyboardNav) b(document).bind("keydown.fb", function (a) {
        if (a.keyCode == 27 && d.enableEscapeButton) {
          a.preventDefault();
          b.fancybox.close();
        } else if ((a.keyCode == 37 || a.keyCode == 39) && d.enableKeyboardNav && a.target.tagName !== "INPUT" && a.target.tagName !== "TEXTAREA" && a.target.tagName !== "SELECT") {
          a.preventDefault();
          b.fancybox[a.keyCode == 37 ? "prev" : "next"]();
        }
      });

      if (d.showNavArrows) {
        if (d.cyclic && l.length > 1 || p !== 0) z.show();
        if (d.cyclic && l.length > 1 || p != l.length - 1) A.show();
      } else {
        z.hide();
        A.hide();
      }
    },
        S = function S() {
      if (!b.support.opacity) {
        b(j).css("filter", "");
        b(f).css("filter", "");
      }

      e.autoDimensions && j.css("height", "auto");
      f.css("height", "auto");
      s && s.length && n.show();
      d.showCloseButton && E.show();
      Y();
      d.hideOnContentClick && j.bind("click", b.fancybox.close);
      d.hideOnOverlayClick && u.bind("click", b.fancybox.close);
      b(window).bind("resize.fb", b.fancybox.resize);
      d.centerOnScroll && b(window).bind("scroll.fb", b.fancybox.center);
      if (d.type == "iframe") b('<iframe id="fancybox-frame" name="fancybox-frame' + new Date().getTime() + '" frameborder="0" hspace="0" ' + (b.browser && b.browser.msie ? 'allowtransparency="true""' : "") + ' scrolling="' + e.scrolling + '" src="' + d.href + '"></iframe>').appendTo(j);
      f.show();
      h = false;
      b.fancybox.center();
      d.onComplete(l, p, d);
      var a, c;

      if (l.length - 1 > p) {
        a = l[p + 1].href;

        if (typeof a !== "undefined" && a.match(J)) {
          c = new Image();
          c.src = a;
        }
      }

      if (p > 0) {
        a = l[p - 1].href;

        if (typeof a !== "undefined" && a.match(J)) {
          c = new Image();
          c.src = a;
        }
      }
    },
        T = function T(a) {
      var c = {
        width: parseInt(r.width + (i.width - r.width) * a, 10),
        height: parseInt(r.height + (i.height - r.height) * a, 10),
        top: parseInt(r.top + (i.top - r.top) * a, 10),
        left: parseInt(r.left + (i.left - r.left) * a, 10)
      };
      if (typeof i.opacity !== "undefined") c.opacity = a < 0.5 ? 0.5 : a;
      f.css(c);
      j.css({
        width: c.width - d.padding * 2,
        height: c.height - y * a - d.padding * 2
      });
    },
        U = function U() {
      return [b(window).width() - d.margin * 2, b(window).height() - d.margin * 2, b(document).scrollLeft() + d.margin, b(document).scrollTop() + d.margin];
    },
        X = function X() {
      var a = U(),
          c = {},
          g = d.autoScale,
          k = d.padding * 2;
      c.width = d.width.toString().indexOf("%") > -1 ? parseInt(a[0] * parseFloat(d.width) / 100, 10) : d.width + k;
      c.height = d.height.toString().indexOf("%") > -1 ? parseInt(a[1] * parseFloat(d.height) / 100, 10) : d.height + k;
      if (g && (c.width > a[0] || c.height > a[1])) if (e.type == "image" || e.type == "swf") {
        g = d.width / d.height;

        if (c.width > a[0]) {
          c.width = a[0];
          c.height = parseInt((c.width - k) / g + k, 10);
        }

        if (c.height > a[1]) {
          c.height = a[1];
          c.width = parseInt((c.height - k) * g + k, 10);
        }
      } else {
        c.width = Math.min(c.width, a[0]);
        c.height = Math.min(c.height, a[1]);
      }
      c.top = parseInt(Math.max(a[3] - 20, a[3] + (a[1] - c.height - 40) * 0.5), 10);
      c.left = parseInt(Math.max(a[2] - 20, a[2] + (a[0] - c.width - 40) * 0.5), 10);
      return c;
    },
        V = function V() {
      var a = e.orig ? b(e.orig) : false,
          c = {};

      if (a && a.length) {
        c = a.offset();
        c.top += parseInt(a.css("paddingTop"), 10) || 0;
        c.left += parseInt(a.css("paddingLeft"), 10) || 0;
        c.top += parseInt(a.css("border-top-width"), 10) || 0;
        c.left += parseInt(a.css("border-left-width"), 10) || 0;
        c.width = a.width();
        c.height = a.height();
        c = {
          width: c.width + d.padding * 2,
          height: c.height + d.padding * 2,
          top: c.top - d.padding - 20,
          left: c.left - d.padding - 20
        };
      } else {
        a = U();
        c = {
          width: d.padding * 2,
          height: d.padding * 2,
          top: parseInt(a[3] + a[1] * 0.5, 10),
          left: parseInt(a[2] + a[0] * 0.5, 10)
        };
      }

      return c;
    },
        Z = function Z() {
      if (t.is(":visible")) {
        b("div", t).css("top", L * -40 + "px");
        L = (L + 1) % 12;
      } else clearInterval(K);
    };

    b.fn.fancybox = function (a) {
      if (!b(this).length) return this;
      b(this).data("fancybox", b.extend({}, a, b.metadata ? b(this).metadata() : {})).unbind("click.fb").bind("click.fb", function (c) {
        c.preventDefault();

        if (!h) {
          h = true;
          b(this).blur();
          o = [];
          q = 0;
          c = b(this).attr("rel") || "";
          if (!c || c == "" || c === "nofollow") o.push(this);else {
            o = b("a[rel=" + c + "], area[rel=" + c + "]");
            q = o.index(this);
          }
          I();
        }
      });
      return this;
    };

    b.fancybox = function (a, c) {
      var g;

      if (!h) {
        h = true;
        g = typeof c !== "undefined" ? c : {};
        o = [];
        q = parseInt(g.index, 10) || 0;

        if (b.isArray(a)) {
          for (var k = 0, C = a.length; k < C; k++) {
            if (_typeof(a[k]) == "object") b(a[k]).data("fancybox", b.extend({}, g, a[k]));else a[k] = b({}).data("fancybox", b.extend({
              content: a[k]
            }, g));
          }

          o = jQuery.merge(o, a);
        } else {
          if (_typeof(a) == "object") b(a).data("fancybox", b.extend({}, g, a));else a = b({}).data("fancybox", b.extend({
            content: a
          }, g));
          o.push(a);
        }

        if (q > o.length || q < 0) q = 0;
        I();
      }
    };

    b.fancybox.showActivity = function () {
      clearInterval(K);
      t.show();
      K = setInterval(Z, 66);
    };

    b.fancybox.hideActivity = function () {
      t.hide();
    };

    b.fancybox.next = function () {
      return b.fancybox.pos(p + 1);
    };

    b.fancybox.prev = function () {
      return b.fancybox.pos(p - 1);
    };

    b.fancybox.pos = function (a) {
      if (!h) {
        a = parseInt(a);
        o = l;

        if (a > -1 && a < l.length) {
          q = a;
          I();
        } else if (d.cyclic && l.length > 1) {
          q = a >= l.length ? 0 : l.length - 1;
          I();
        }
      }
    };

    b.fancybox.cancel = function () {
      if (!h) {
        h = true;
        b.event.trigger("fancybox-cancel");
        N();
        e.onCancel(o, q, e);
        h = false;
      }
    };

    b.fancybox.close = function () {
      function a() {
        u.fadeOut("fast");
        n.empty().hide();
        f.hide();
        b.event.trigger("fancybox-cleanup");
        j.empty();
        d.onClosed(l, p, d);
        l = e = [];
        p = q = 0;
        d = e = {};
        h = false;
      }

      if (!(h || f.is(":hidden"))) {
        h = true;
        if (d && false === d.onCleanup(l, p, d)) h = false;else {
          N();
          b(E.add(z).add(A)).hide();
          b(j.add(u)).unbind();
          b(window).unbind("resize.fb scroll.fb");
          b(document).unbind("keydown.fb");
          j.find("iframe").attr("src", M && /^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank");
          d.titlePosition !== "inside" && n.empty();
          f.stop();

          if (d.transitionOut == "elastic") {
            r = V();
            var c = f.position();
            i = {
              top: c.top,
              left: c.left,
              width: f.width(),
              height: f.height()
            };
            if (d.opacity) i.opacity = 1;
            n.empty().hide();
            B.prop = 1;
            b(B).animate({
              prop: 0
            }, {
              duration: d.speedOut,
              easing: d.easingOut,
              step: T,
              complete: a
            });
          } else f.fadeOut(d.transitionOut == "none" ? 0 : d.speedOut, a);
        }
      }
    };

    b.fancybox.resize = function () {
      u.is(":visible") && u.css("height", b(document).height());
      b.fancybox.center(true);
    };

    b.fancybox.center = function (a) {
      var c, g;

      if (!h) {
        g = a === true ? 1 : 0;
        c = U();
        !g && (f.width() > c[0] || f.height() > c[1]) || f.stop().animate({
          top: parseInt(Math.max(c[3] - 20, c[3] + (c[1] - j.height() - 40) * 0.5 - d.padding)),
          left: parseInt(Math.max(c[2] - 20, c[2] + (c[0] - j.width() - 40) * 0.5 - d.padding))
        }, typeof a == "number" ? a : 200);
      }
    };

    b.fancybox.init = function () {
      if (!b("#fancybox-wrap").length) {
        b("body").append(m = b('<div id="fancybox-tmp"></div>'), t = b('<div id="fancybox-loading"><div></div></div>'), u = b('<div id="fancybox-overlay"></div>'), f = b('<div id="fancybox-wrap"></div>'));
        D = b('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(f);
        D.append(j = b('<div id="fancybox-content"></div>'), E = b('<a id="fancybox-close"></a>'), n = b('<div id="fancybox-title"></div>'), z = b('<a href="javascript:;" id="fancybox-left" aria-label="' + theme.strings.previous + '"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), A = b('<a href="javascript:;" id="fancybox-right" aria-label="' + theme.strings.next + '"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));
        E.click(b.fancybox.close);
        t.click(b.fancybox.cancel);
        z.click(function (a) {
          a.preventDefault();
          b.fancybox.prev();
        });
        A.click(function (a) {
          a.preventDefault();
          b.fancybox.next();
        });
        b.fn.mousewheel && f.bind("mousewheel.fb", function (a, c) {
          if (h) a.preventDefault();else if (b(a.target).get(0).clientHeight == 0 || b(a.target).get(0).scrollHeight === b(a.target).get(0).clientHeight) {
            a.preventDefault();
            b.fancybox[c > 0 ? "prev" : "next"]();
          }
        });
        b.support.opacity || f.addClass("fancybox-ie");

        if (M) {
          t.addClass("fancybox-ie6");
          f.addClass("fancybox-ie6");
          b('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank") + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(D);
        }
      }
    };

    b.fn.fancybox.defaults = {
      padding: 10,
      margin: 40,
      opacity: false,
      modal: false,
      cyclic: false,
      scrolling: "auto",
      width: 560,
      height: 340,
      autoScale: true,
      autoDimensions: true,
      centerOnScroll: false,
      ajax: {},
      swf: {
        wmode: "transparent"
      },
      hideOnOverlayClick: true,
      hideOnContentClick: false,
      overlayShow: true,
      overlayOpacity: 0.7,
      overlayColor: "#777",
      titleShow: true,
      titlePosition: "float",
      titleFormat: null,
      titleFromAlt: false,
      transitionIn: "fade",
      transitionOut: "fade",
      speedIn: 300,
      speedOut: 300,
      changeSpeed: 300,
      changeFade: "fast",
      easingIn: "swing",
      easingOut: "swing",
      showCloseButton: true,
      showNavArrows: true,
      enableEscapeButton: true,
      enableKeyboardNav: true,
      onStart: function onStart() {},
      onCancel: function onCancel() {},
      onComplete: function onComplete() {},
      onCleanup: function onCleanup() {},
      onClosed: function onClosed() {},
      onError: function onError() {}
    };
    b(document).ready(function () {
      b.fancybox.init();
    });
  })(jQuery);
  /*
       _ _      _       _
   ___| (_) ___| | __  (_)___
  / __| | |/ __| |/ /  | / __|
  \__ \ | | (__|   < _ | \__ \
  |___/_|_|\___|_|\_(_)/ |___/
                     |__/
  
   Version: 1.6.0
    Author: Ken Wheeler
   Website: http://kenwheeler.github.io
      Docs: http://kenwheeler.github.io/slick
      Repo: http://github.com/kenwheeler/slick
    Issues: http://github.com/kenwheeler/slick/issues
  
    Modified by Clean Canvas - removed 'aria-describedby', translating labels
   */


  !function (a) {
    "use strict";

    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery);
  }(function (a) {
    "use strict";

    var b = window.Slick || {};
    b = function () {
      function c(c, d) {
        var f,
            e = this;
        e.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: a(c),
          appendDots: a(c),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="' + theme.strings.previous + '" tabindex="0" role="button">' + theme.strings.previous + '</button>',
          nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="' + theme.strings.next + '" tabindex="0" role="button">' + theme.strings.next + '</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function customPaging(b, c) {
            return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: .35,
          fade: !1,
          focusOnSelect: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3
        }, e.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1
        }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0);
      }

      var b = 0;
      return c;
    }(), b.prototype.activateADA = function () {
      var a = this;
      a.$slideTrack.find(".slick-active").attr({
        "aria-hidden": "false"
      }).find("a, input, button, select").attr({
        tabindex: "0"
      });
    }, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
      var e = this;
      if ("boolean" == typeof c) d = c, c = null;else if (0 > c || c >= e.slideCount) return !1;
      e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
        a(c).attr("data-slick-index", b);
      }), e.$slidesCache = e.$slides, e.reinit();
    }, b.prototype.animateHeight = function () {
      var a = this;

      if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
        var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
        a.$list.animate({
          height: b
        }, a.options.speed);
      }
    }, b.prototype.animateSlide = function (b, c) {
      var d = {},
          e = this;
      e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
        left: b
      }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
        top: b
      }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
        animStart: e.currentLeft
      }).animate({
        animStart: b
      }, {
        duration: e.options.speed,
        easing: e.options.easing,
        step: function step(a) {
          a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d));
        },
        complete: function complete() {
          c && c.call();
        }
      })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
        e.disableTransition(), c.call();
      }, e.options.speed));
    }, b.prototype.getNavTarget = function () {
      var b = this,
          c = b.options.asNavFor;
      return c && null !== c && (c = a(c).not(b.$slider)), c;
    }, b.prototype.asNavFor = function (b) {
      var c = this,
          d = c.getNavTarget();
      null !== d && "object" == _typeof(d) && d.each(function () {
        var c = a(this).slick("getSlick");
        c.unslicked || c.slideHandler(b, !0);
      });
    }, b.prototype.applyTransition = function (a) {
      var b = this,
          c = {};
      b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }, b.prototype.autoPlay = function () {
      var a = this;
      a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
    }, b.prototype.autoPlayClear = function () {
      var a = this;
      a.autoPlayTimer && clearInterval(a.autoPlayTimer);
    }, b.prototype.autoPlayIterator = function () {
      var a = this,
          b = a.currentSlide + a.options.slidesToScroll;
      a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b));
    }, b.prototype.buildArrows = function () {
      var b = this;
      b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
        "aria-disabled": "true",
        tabindex: "-1"
      }));
    }, b.prototype.buildDots = function () {
      var c,
          d,
          b = this;

      if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
        for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) {
          d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
        }

        b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
      }
    }, b.prototype.buildOut = function () {
      var b = this;
      b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
        a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "");
      }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable");
    }, b.prototype.buildRows = function () {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          a = this;

      if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
        for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
          var i = document.createElement("div");

          for (c = 0; c < a.options.rows; c++) {
            var j = document.createElement("div");

            for (d = 0; d < a.options.slidesPerRow; d++) {
              var k = b * h + (c * a.options.slidesPerRow + d);
              g.get(k) && j.appendChild(g.get(k));
            }

            i.appendChild(j);
          }

          e.appendChild(i);
        }

        a.$slider.empty().append(e), a.$slider.children().children().children().css({
          width: 100 / a.options.slidesPerRow + "%",
          display: "inline-block"
        });
      }
    }, b.prototype.checkResponsive = function (b, c) {
      var e,
          f,
          g,
          d = this,
          h = !1,
          i = d.$slider.width(),
          j = window.innerWidth || a(window).width();

      if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
        f = null;

        for (e in d.breakpoints) {
          d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
        }

        null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
      }
    }, b.prototype.changeSlide = function (b, c) {
      var f,
          g,
          h,
          d = this,
          e = a(b.currentTarget);

      switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
        case "previous":
          g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
          break;

        case "next":
          g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
          break;

        case "index":
          var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
          d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
          break;

        default:
          return;
      }
    }, b.prototype.checkNavigable = function (a) {
      var c,
          d,
          b = this;
      if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];else for (var e in c) {
        if (a < c[e]) {
          a = d;
          break;
        }

        d = c[e];
      }
      return a;
    }, b.prototype.cleanUpEvents = function () {
      var b = this;
      b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
    }, b.prototype.cleanUpSlideEvents = function () {
      var b = this;
      b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
    }, b.prototype.cleanUpRows = function () {
      var b,
          a = this;
      a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b));
    }, b.prototype.clickHandler = function (a) {
      var b = this;
      b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
    }, b.prototype.destroy = function (b) {
      var c = this;
      c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
        a(this).attr("style", a(this).data("originalStyling"));
      }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c]);
    }, b.prototype.disableTransition = function (a) {
      var b = this,
          c = {};
      c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }, b.prototype.fadeSlide = function (a, b) {
      var c = this;
      c.cssTransitions === !1 ? (c.$slides.eq(a).css({
        zIndex: c.options.zIndex
      }), c.$slides.eq(a).animate({
        opacity: 1
      }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
        opacity: 1,
        zIndex: c.options.zIndex
      }), b && setTimeout(function () {
        c.disableTransition(a), b.call();
      }, c.options.speed));
    }, b.prototype.fadeSlideOut = function (a) {
      var b = this;
      b.cssTransitions === !1 ? b.$slides.eq(a).animate({
        opacity: 0,
        zIndex: b.options.zIndex - 2
      }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
        opacity: 0,
        zIndex: b.options.zIndex - 2
      }));
    }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
      var b = this;
      null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
    }, b.prototype.focusHandler = function () {
      var b = this;
      b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
        var d = a(this);
        setTimeout(function () {
          b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay());
        }, 0);
      });
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
      var a = this;
      return a.currentSlide;
    }, b.prototype.getDotCount = function () {
      var a = this,
          b = 0,
          c = 0,
          d = 0;
      if (a.options.infinite === !0) for (; b < a.slideCount;) {
        ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
      } else if (a.options.centerMode === !0) d = a.slideCount;else if (a.options.asNavFor) for (; b < a.slideCount;) {
        ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
      } else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
      return d - 1;
    }, b.prototype.getLeft = function (a) {
      var c,
          d,
          f,
          b = this,
          e = 0;
      return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c;
    }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
      var b = this;
      return b.options[a];
    }, b.prototype.getNavigableIndexes = function () {
      var e,
          a = this,
          b = 0,
          c = 0,
          d = [];

      for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) {
        d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
      }

      return d;
    }, b.prototype.getSlick = function () {
      return this;
    }, b.prototype.getSlideCount = function () {
      var c,
          d,
          e,
          b = this;
      return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
        return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0;
      }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll;
    }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
      var c = this;
      c.changeSlide({
        data: {
          message: "index",
          index: parseInt(a)
        }
      }, b);
    }, b.prototype.init = function (b) {
      var c = this;
      a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay());
    }, b.prototype.initADA = function () {
      var b = this;
      b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
        "aria-hidden": "true",
        tabindex: "-1"
      }).find("a, input, button, select").attr({
        tabindex: "-1"
      }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
        a(this).attr({
          role: "option"
        });
      }), null !== b.$dots && b.$dots.attr("aria-hidden", "true").find("li").each(function (c) {
        a(this).attr({
          role: "presentation",
          "aria-selected": "false",
          "aria-controls": "navigation" + b.instanceUid + c,
          id: "slick-slide" + b.instanceUid + c
        });
      }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA();
    }, b.prototype.initArrowEvents = function () {
      var a = this;
      a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
        message: "previous"
      }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
        message: "next"
      }, a.changeSlide));
    }, b.prototype.initDotEvents = function () {
      var b = this;
      b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
        message: "index"
      }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
    }, b.prototype.initSlideEvents = function () {
      var b = this;
      b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
    }, b.prototype.initializeEvents = function () {
      var b = this;
      b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
        action: "start"
      }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
        action: "move"
      }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
        action: "end"
      }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
        action: "end"
      }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
    }, b.prototype.initUI = function () {
      var a = this;
      a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show();
    }, b.prototype.keyHandler = function (a) {
      var b = this;
      a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
        data: {
          message: b.options.rtl === !0 ? "next" : "previous"
        }
      }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
        data: {
          message: b.options.rtl === !0 ? "previous" : "next"
        }
      }));
    }, b.prototype.lazyLoad = function () {
      function g(c) {
        a("img[data-lazy]", c).each(function () {
          var c = a(this),
              d = a(this).attr("data-lazy"),
              e = document.createElement("img");
          e.onload = function () {
            c.animate({
              opacity: 0
            }, 100, function () {
              c.attr("src", d).animate({
                opacity: 1
              }, 200, function () {
                c.removeAttr("data-lazy").removeClass("slick-loading");
              }), b.$slider.trigger("lazyLoaded", [b, c, d]);
            });
          }, e.onerror = function () {
            c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d]);
          }, e.src = d;
        });
      }

      var c,
          d,
          e,
          f,
          b = this;
      b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d));
    }, b.prototype.loadSlider = function () {
      var a = this;
      a.setPosition(), a.$slideTrack.css({
        opacity: 1
      }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
    }, b.prototype.next = b.prototype.slickNext = function () {
      var a = this;
      a.changeSlide({
        data: {
          message: "next"
        }
      });
    }, b.prototype.orientationChange = function () {
      var a = this;
      a.checkResponsive(), a.setPosition();
    }, b.prototype.pause = b.prototype.slickPause = function () {
      var a = this;
      a.autoPlayClear(), a.paused = !0;
    }, b.prototype.play = b.prototype.slickPlay = function () {
      var a = this;
      a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1;
    }, b.prototype.postSlide = function (a) {
      var b = this;
      b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA());
    }, b.prototype.prev = b.prototype.slickPrev = function () {
      var a = this;
      a.changeSlide({
        data: {
          message: "previous"
        }
      });
    }, b.prototype.preventDefault = function (a) {
      a.preventDefault();
    }, b.prototype.progressiveLazyLoad = function (b) {
      b = b || 1;
      var e,
          f,
          g,
          c = this,
          d = a("img[data-lazy]", c.$slider);
      d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
        e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad();
      }, g.onerror = function () {
        3 > b ? setTimeout(function () {
          c.progressiveLazyLoad(b + 1);
        }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad());
      }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c]);
    }, b.prototype.refresh = function (b) {
      var d,
          e,
          c = this;
      e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
        currentSlide: d
      }), c.init(), b || c.changeSlide({
        data: {
          message: "index",
          index: d
        }
      }, !1);
    }, b.prototype.registerBreakpoints = function () {
      var c,
          d,
          e,
          b = this,
          f = b.options.responsive || null;

      if ("array" === a.type(f) && f.length) {
        b.respondTo = b.options.respondTo || "window";

        for (c in f) {
          if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
            for (; e >= 0;) {
              b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
            }

            b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings;
          }
        }

        b.breakpoints.sort(function (a, c) {
          return b.options.mobileFirst ? a - c : c - a;
        });
      }
    }, b.prototype.reinit = function () {
      var b = this;
      b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b]);
    }, b.prototype.resize = function () {
      var b = this;
      a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
        b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition();
      }, 50));
    }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
      var d = this;
      return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit());
    }, b.prototype.setCSS = function (a) {
      var d,
          e,
          b = this,
          c = {};
      b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)));
    }, b.prototype.setDimensions = function () {
      var a = this;
      a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
        padding: "0px " + a.options.centerPadding
      }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
        padding: a.options.centerPadding + " 0px"
      })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
      var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
      a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
    }, b.prototype.setFade = function () {
      var c,
          b = this;
      b.$slides.each(function (d, e) {
        c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
          position: "relative",
          right: c,
          top: 0,
          zIndex: b.options.zIndex - 2,
          opacity: 0
        }) : a(e).css({
          position: "relative",
          left: c,
          top: 0,
          zIndex: b.options.zIndex - 2,
          opacity: 0
        });
      }), b.$slides.eq(b.currentSlide).css({
        zIndex: b.options.zIndex - 1,
        opacity: 1
      });
    }, b.prototype.setHeight = function () {
      var a = this;

      if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
        var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
        a.$list.css("height", b);
      }
    }, b.prototype.setOption = b.prototype.slickSetOption = function () {
      var c,
          d,
          e,
          f,
          h,
          b = this,
          g = !1;
      if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;else if ("multiple" === h) a.each(e, function (a, c) {
        b.options[a] = c;
      });else if ("responsive" === h) for (d in f) {
        if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];else {
          for (c = b.options.responsive.length - 1; c >= 0;) {
            b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
          }

          b.options.responsive.push(f[d]);
        }
      }
      g && (b.unload(), b.reinit());
    }, b.prototype.setPosition = function () {
      var a = this;
      a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]);
    }, b.prototype.setProps = function () {
      var a = this,
          b = document.body.style;
      a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1;
    }, b.prototype.setSlideClasses = function (a) {
      var c,
          d,
          e,
          f,
          b = this;
      d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad();
    }, b.prototype.setupInfinite = function () {
      var c,
          d,
          e,
          b = this;

      if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
        for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) {
          d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
        }

        for (c = 0; e > c; c += 1) {
          d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
        }

        b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
          a(this).attr("id", "");
        });
      }
    }, b.prototype.interrupt = function (a) {
      var b = this;
      a || b.autoPlay(), b.interrupted = a;
    }, b.prototype.selectHandler = function (b) {
      var c = this,
          d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
          e = parseInt(d.attr("data-slick-index"));
      return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e);
    }, b.prototype.slideHandler = function (a, b, c) {
      var d,
          e,
          f,
          g,
          j,
          h = null,
          i = this;
      return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
        i.postSlide(d);
      }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
        i.postSlide(d);
      }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
        i.postSlide(e);
      })) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function () {
        i.postSlide(e);
      }) : i.postSlide(e))));
    }, b.prototype.startLoad = function () {
      var a = this;
      a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading");
    }, b.prototype.swipeDirection = function () {
      var a,
          b,
          c,
          d,
          e = this;
      return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical";
    }, b.prototype.swipeEnd = function (a) {
      var c,
          d,
          b = this;
      if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;

      if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
        switch (d = b.swipeDirection()) {
          case "left":
          case "down":
            c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
            break;

          case "right":
          case "up":
            c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1;
        }

        "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]));
      } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {});
    }, b.prototype.swipeHandler = function (a) {
      var b = this;
      if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
        case "start":
          b.swipeStart(a);
          break;

        case "move":
          b.swipeMove(a);
          break;

        case "end":
          b.swipeEnd(a);
      }
    }, b.prototype.swipeMove = function (a) {
      var d,
          e,
          f,
          g,
          h,
          b = this;
      return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0);
    }, b.prototype.swipeStart = function (a) {
      var c,
          b = this;
      return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void (b.dragging = !0));
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
      var a = this;
      null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
    }, b.prototype.unload = function () {
      var b = this;
      a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    }, b.prototype.unslick = function (a) {
      var b = this;
      b.$slider.trigger("unslick", [b, a]), b.destroy();
    }, b.prototype.updateArrows = function () {
      var b,
          a = this;
      b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    }, b.prototype.updateDots = function () {
      var a = this;
      null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
    }, b.prototype.visibility = function () {
      var a = this;
      a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1);
    }, a.fn.slick = function () {
      var f,
          g,
          a = this,
          c = arguments[0],
          d = Array.prototype.slice.call(arguments, 1),
          e = a.length;

      for (f = 0; e > f; f++) {
        if ("object" == _typeof(c) || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
      }

      return a;
    };
  });
  /*
   * Cookie plugin
   *
   * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
   * Dual licensed under the MIT and GPL licenses:
   * http://www.opensource.org/licenses/mit-license.php
   * http://www.gnu.org/licenses/gpl.html
   *
   * v1.0
   */

  jQuery.cookie = function (b, j, m) {
    if (typeof j != "undefined") {
      m = m || {};

      if (j === null) {
        j = "";
        m.expires = -1;
      }

      var e = "";

      if (m.expires && (typeof m.expires == "number" || m.expires.toUTCString)) {
        var f;

        if (typeof m.expires == "number") {
          f = new Date();
          f.setTime(f.getTime() + m.expires * 24 * 60 * 60 * 1000);
        } else {
          f = m.expires;
        }

        e = "; expires=" + f.toUTCString();
      }

      var l = m.path ? "; path=" + m.path : "";
      var g = m.domain ? "; domain=" + m.domain : "";
      var a = m.secure ? "; secure" : "";
      document.cookie = [b, "=", encodeURIComponent(j), e, l, g, a].join("");
    } else {
      var d = null;

      if (document.cookie && document.cookie != "") {
        var k = document.cookie.split(";");

        for (var h = 0; h < k.length; h++) {
          var c = jQuery.trim(k[h]);

          if (c.substring(0, b.length + 1) == b + "=") {
            d = decodeURIComponent(c.substring(b.length + 1));
            break;
          }
        }
      }

      return d;
    }
  }; // *************
  // Original plugin Gist: https://gist.github.com/268257
  // Current repos: https://github.com/desandro/imagesloaded
  // fix in response to: https://github.com/desandro/imagesloaded/issues/8
  //
  // In case this is useful to anyone.
  // *************

  /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
   * Build: http://modernizr.com/download/#-csstransitions-input-testprop-testallprops-domprefixes-load
   */


  ;
  window.Modernizr = function (a, b, c) {
    function w(a) {
      i.cssText = a;
    }

    function x(a, b) {
      return w(prefixes.join(a + ";") + (b || ""));
    }

    function y(a, b) {
      return _typeof(a) === b;
    }

    function z(a, b) {
      return !!~("" + a).indexOf(b);
    }

    function A(a, b) {
      for (var d in a) {
        var e = a[d];
        if (!z(e, "-") && i[e] !== c) return b == "pfx" ? e : !0;
      }

      return !1;
    }

    function B(a, b, d) {
      for (var e in a) {
        var f = b[a[e]];
        if (f !== c) return d === !1 ? a[e] : y(f, "function") ? f.bind(d || b) : f;
      }

      return !1;
    }

    function C(a, b, c) {
      var d = a.charAt(0).toUpperCase() + a.slice(1),
          e = (a + " " + m.join(d + " ") + d).split(" ");
      return y(b, "string") || y(b, "undefined") ? A(e, b) : (e = (a + " " + n.join(d + " ") + d).split(" "), B(e, b, c));
    }

    function D() {
      e.input = function (c) {
        for (var d = 0, e = c.length; d < e; d++) {
          q[c[d]] = c[d] in j;
        }

        return q.list && (q.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), q;
      }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
    }

    var d = "2.6.2",
        e = {},
        f = b.documentElement,
        g = "modernizr",
        h = b.createElement(g),
        i = h.style,
        j = b.createElement("input"),
        k = {}.toString,
        l = "Webkit Moz O ms",
        m = l.split(" "),
        n = l.toLowerCase().split(" "),
        o = {},
        p = {},
        q = {},
        r = [],
        s = r.slice,
        t,
        u = {}.hasOwnProperty,
        v;
    !y(u, "undefined") && !y(u.call, "undefined") ? v = function v(a, b) {
      return u.call(a, b);
    } : v = function v(a, b) {
      return b in a && y(a.constructor.prototype[b], "undefined");
    }, Function.prototype.bind || (Function.prototype.bind = function (b) {
      var c = this;
      if (typeof c != "function") throw new TypeError();

      var d = s.call(arguments, 1),
          e = function e() {
        if (this instanceof e) {
          var a = function a() {};

          a.prototype = c.prototype;
          var f = new a(),
              g = c.apply(f, d.concat(s.call(arguments)));
          return Object(g) === g ? g : f;
        }

        return c.apply(b, d.concat(s.call(arguments)));
      };

      return e;
    }), o.csstransitions = function () {
      return C("transition");
    };

    for (var E in o) {
      v(o, E) && (t = E.toLowerCase(), e[t] = o[E](), r.push((e[t] ? "" : "no-") + t));
    }

    return e.input || D(), e.addTest = function (a, b) {
      if (_typeof(a) == "object") for (var d in a) {
        v(a, d) && e.addTest(d, a[d]);
      } else {
        a = a.toLowerCase();
        if (e[a] !== c) return e;
        b = typeof b == "function" ? b() : b, typeof enableClasses != "undefined" && enableClasses && (f.className += " " + (b ? "" : "no-") + a), e[a] = b;
      }
      return e;
    }, w(""), h = j = null, e._version = d, e._domPrefixes = n, e._cssomPrefixes = m, e.testProp = function (a) {
      return A([a]);
    }, e.testAllProps = C, e;
  }(this, this.document), function (a, b, c) {
    function d(a) {
      return "[object Function]" == o.call(a);
    }

    function e(a) {
      return "string" == typeof a;
    }

    function f() {}

    function g(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
    }

    function h() {
      var a = p.shift();
      q = 1, a ? a.t ? m(function () {
        ("c" == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
      }, 0) : (a(), h()) : q = 0;
    }

    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
          "img" != a && m(function () {
            t.removeChild(l);
          }, 50);

          for (var d in y[c]) {
            y[c].hasOwnProperty(d) && y[c][d].onload();
          }
        }
      }

      var j = j || _B.errorTimeout,
          l = b.createElement(a),
          o = 0,
          r = 0,
          u = {
        t: d,
        s: c,
        e: f,
        a: i,
        x: j
      };
      1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
        k.call(this, r);
      }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
    }

    function j(a, b, c, d, f) {
      return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
    }

    function k() {
      var a = _B;
      return a.loader = {
        load: j,
        i: 0
      }, a;
    }

    var l = b.documentElement,
        m = a.setTimeout,
        n = b.getElementsByTagName("script")[0],
        o = {}.toString,
        p = [],
        q = 0,
        r = ("MozAppearance" in l.style),
        s = r && !!b.createRange().compareNode,
        t = s ? l : n.parentNode,
        l = a.opera && "[object Opera]" == o.call(a.opera),
        l = !!b.attachEvent && !l,
        u = r ? "object" : l ? "script" : "img",
        v = l ? "script" : u,
        w = Array.isArray || function (a) {
      return "[object Array]" == o.call(a);
    },
        x = [],
        y = {},
        z = {
      timeout: function timeout(a, b) {
        return b.length && (a.timeout = b[0]), a;
      }
    },
        _A,
        _B;

    _B = function B(a) {
      function b(a) {
        var a = a.split("!"),
            b = x.length,
            c = a.pop(),
            d = a.length,
            c = {
          url: c,
          origUrl: c,
          prefixes: a
        },
            e,
            f,
            g;

        for (f = 0; f < d; f++) {
          g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
        }

        for (f = 0; f < b; f++) {
          c = x[f](c);
        }

        return c;
      }

      function g(a, e, f, g, h) {
        var i = b(a),
            j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
          k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
        })));
      }

      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a)) c || (j = function j() {
              var a = [].slice.call(arguments);
              k.apply(this, a), l();
            }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
              var b = 0,
                  c;

              for (c in a) {
                a.hasOwnProperty(c) && b++;
              }

              return b;
            }(), a) {
              a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
                var a = [].slice.call(arguments);
                k.apply(this, a), l();
              } : j[n] = function (a) {
                return function () {
                  var b = [].slice.call(arguments);
                  a && a.apply(this, b), l();
                };
              }(k[n])), g(a[n], j, b, n, h));
            }
          } else !c && l();
        }

        var h = !!a.test,
            i = a.load || a.both,
            j = a.callback || f,
            k = j,
            l = a.complete || f,
            m,
            n;
        c(h ? a.yep : a.nope, !!i), i && c(i);
      }

      var i,
          j,
          l = this.yepnope.loader;
      if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {
        j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);
      } else Object(a) === a && h(a, l);
    }, _B.addPrefix = function (a, b) {
      z[a] = b;
    }, _B.addFilter = function (a) {
      x.push(a);
    }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", _A = function A() {
      b.removeEventListener("DOMContentLoaded", _A, 0), b.readyState = "complete";
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
      var k = b.createElement("script"),
          l,
          o,
          e = e || _B.errorTimeout;
      k.src = a;

      for (o in d) {
        k.setAttribute(o, d[o]);
      }

      c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
        !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
      }, m(function () {
        l || (l = 1, c(1));
      }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
    }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
      var e = b.createElement("link"),
          j,
          c = i ? h : c || f;
      e.href = a, e.rel = "stylesheet", e.type = "text/css";

      for (j in d) {
        e.setAttribute(j, d[j]);
      }

      g || (n.parentNode.insertBefore(e, n), m(c, 0));
    };
  }(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0));
  };
  /*
   * v.1.0
   *
   * debouncedresize: special jQuery event that happens once after a window resize
   *
   * latest version and complete README available on Github:
   * https://github.com/louisremi/jquery-smartresize
   *
   * Copyright 2012 @louis_remi
   * Licensed under the MIT license.
   *
   * This saved you an hour of work?
   * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
   */

  (function () {
    var $event = $.event,
        $special,
        resizeTimeout;
    $special = $event.special.debouncedresize = {
      setup: function setup() {
        $(this).on("resize", $special.handler);
      },
      teardown: function teardown() {
        $(this).off("resize", $special.handler);
      },
      handler: function handler(event, execAsap) {
        // Save the context
        var context = this,
            args = arguments,
            dispatch = function dispatch() {
          // set correct event type
          event.type = "debouncedresize";
          $event.dispatch.apply(context, args);
        };

        if (resizeTimeout) {
          clearTimeout(resizeTimeout);
        }

        execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
      },
      threshold: 150
    };
  })();
  /*
     v1.0
  
     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at
  
         http://www.apache.org/licenses/LICENSE-2.0
  
     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
  */


  (function () {
    var defaultDiacriticsRemovalMap = [{
      'base': 'A',
      'letters': "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
    }, {
      'base': 'AA',
      'letters': "\uA732"
    }, {
      'base': 'AE',
      'letters': "\xC6\u01FC\u01E2"
    }, {
      'base': 'AO',
      'letters': "\uA734"
    }, {
      'base': 'AU',
      'letters': "\uA736"
    }, {
      'base': 'AV',
      'letters': "\uA738\uA73A"
    }, {
      'base': 'AY',
      'letters': "\uA73C"
    }, {
      'base': 'B',
      'letters': "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
    }, {
      'base': 'C',
      'letters': "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
    }, {
      'base': 'D',
      'letters': "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\xD0"
    }, {
      'base': 'DZ',
      'letters': "\u01F1\u01C4"
    }, {
      'base': 'Dz',
      'letters': "\u01F2\u01C5"
    }, {
      'base': 'E',
      'letters': "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
    }, {
      'base': 'F',
      'letters': "F\u24BB\uFF26\u1E1E\u0191\uA77B"
    }, {
      'base': 'G',
      'letters': "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
    }, {
      'base': 'H',
      'letters': "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
    }, {
      'base': 'I',
      'letters': "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
    }, {
      'base': 'J',
      'letters': "J\u24BF\uFF2A\u0134\u0248"
    }, {
      'base': 'K',
      'letters': "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
    }, {
      'base': 'L',
      'letters': "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
    }, {
      'base': 'LJ',
      'letters': "\u01C7"
    }, {
      'base': 'Lj',
      'letters': "\u01C8"
    }, {
      'base': 'M',
      'letters': "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
    }, {
      'base': 'N',
      'letters': "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
    }, {
      'base': 'NJ',
      'letters': "\u01CA"
    }, {
      'base': 'Nj',
      'letters': "\u01CB"
    }, {
      'base': 'O',
      'letters': "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
    }, {
      'base': 'OI',
      'letters': "\u01A2"
    }, {
      'base': 'OO',
      'letters': "\uA74E"
    }, {
      'base': 'OU',
      'letters': "\u0222"
    }, {
      'base': 'OE',
      'letters': "\x8C\u0152"
    }, {
      'base': 'oe',
      'letters': "\x9C\u0153"
    }, {
      'base': 'P',
      'letters': "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
    }, {
      'base': 'Q',
      'letters': "Q\u24C6\uFF31\uA756\uA758\u024A"
    }, {
      'base': 'R',
      'letters': "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
    }, {
      'base': 'S',
      'letters': "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
    }, {
      'base': 'T',
      'letters': "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
    }, {
      'base': 'TZ',
      'letters': "\uA728"
    }, {
      'base': 'U',
      'letters': "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
    }, {
      'base': 'V',
      'letters': "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
    }, {
      'base': 'VY',
      'letters': "\uA760"
    }, {
      'base': 'W',
      'letters': "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
    }, {
      'base': 'X',
      'letters': "X\u24CD\uFF38\u1E8A\u1E8C"
    }, {
      'base': 'Y',
      'letters': "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
    }, {
      'base': 'Z',
      'letters': "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
    }, {
      'base': 'a',
      'letters': "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
    }, {
      'base': 'aa',
      'letters': "\uA733"
    }, {
      'base': 'ae',
      'letters': "\xE6\u01FD\u01E3"
    }, {
      'base': 'ao',
      'letters': "\uA735"
    }, {
      'base': 'au',
      'letters': "\uA737"
    }, {
      'base': 'av',
      'letters': "\uA739\uA73B"
    }, {
      'base': 'ay',
      'letters': "\uA73D"
    }, {
      'base': 'b',
      'letters': "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
    }, {
      'base': 'c',
      'letters': "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
    }, {
      'base': 'd',
      'letters': "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
    }, {
      'base': 'dz',
      'letters': "\u01F3\u01C6"
    }, {
      'base': 'e',
      'letters': "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
    }, {
      'base': 'f',
      'letters': "f\u24D5\uFF46\u1E1F\u0192\uA77C"
    }, {
      'base': 'g',
      'letters': "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
    }, {
      'base': 'h',
      'letters': "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
    }, {
      'base': 'hv',
      'letters': "\u0195"
    }, {
      'base': 'i',
      'letters': "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
    }, {
      'base': 'j',
      'letters': "j\u24D9\uFF4A\u0135\u01F0\u0249"
    }, {
      'base': 'k',
      'letters': "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
    }, {
      'base': 'l',
      'letters': "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
    }, {
      'base': 'lj',
      'letters': "\u01C9"
    }, {
      'base': 'm',
      'letters': "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
    }, {
      'base': 'n',
      'letters': "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
    }, {
      'base': 'nj',
      'letters': "\u01CC"
    }, {
      'base': 'o',
      'letters': "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
    }, {
      'base': 'oi',
      'letters': "\u01A3"
    }, {
      'base': 'ou',
      'letters': "\u0223"
    }, {
      'base': 'oo',
      'letters': "\uA74F"
    }, {
      'base': 'p',
      'letters': "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
    }, {
      'base': 'q',
      'letters': "q\u24E0\uFF51\u024B\uA757\uA759"
    }, {
      'base': 'r',
      'letters': "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
    }, {
      'base': 's',
      'letters': "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
    }, {
      'base': 't',
      'letters': "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
    }, {
      'base': 'tz',
      'letters': "\uA729"
    }, {
      'base': 'u',
      'letters': "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
    }, {
      'base': 'v',
      'letters': "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
    }, {
      'base': 'vy',
      'letters': "\uA761"
    }, {
      'base': 'w',
      'letters': "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
    }, {
      'base': 'x',
      'letters': "x\u24E7\uFF58\u1E8B\u1E8D"
    }, {
      'base': 'y',
      'letters': "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
    }, {
      'base': 'z',
      'letters': "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
    }];
    var diacriticsMap = {};

    for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
      var letters = defaultDiacriticsRemovalMap[i].letters;

      for (var j = 0; j < letters.length; j++) {
        diacriticsMap[letters[j]] = defaultDiacriticsRemovalMap[i].base;
      }
    } // "what?" version ... http://jsperf.com/diacritics/12


    window.removeDiacritics = function (str) {
      if (typeof str !== "string") {
        console.warn("Invalid parameter passed to window.removeDiacritics (".concat(_typeof(str), ")"), str);
        return str;
      }

      return str.replace(/[^\u0000-\u007E]/g, function (a) {
        return diacriticsMap[a] || a;
      });
    };
  })();
  /*! Select2 4.0.12 | https://github.com/select2/select2/blob/master/LICENSE.md */


  !function (n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = function (e, t) {
      return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), n(t), t;
    } : n(jQuery);
  }(function (d) {
    var e = function () {
      if (d && d.fn && d.fn.select2 && d.fn.select2.amd) var e = d.fn.select2.amd;

      var t, n, i, h, o, _s, f, g, m, v, y, _, r, a, w, l;

      function b(e, t) {
        return r.call(e, t);
      }

      function c(e, t) {
        var n,
            i,
            r,
            o,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            h = t && t.split("/"),
            f = y.map,
            g = f && f["*"] || {};

        if (e) {
          for (s = (e = e.split("/")).length - 1, y.nodeIdCompat && w.test(e[s]) && (e[s] = e[s].replace(w, "")), "." === e[0].charAt(0) && h && (e = h.slice(0, h.length - 1).concat(e)), u = 0; u < e.length; u++) {
            if ("." === (p = e[u])) e.splice(u, 1), u -= 1;else if (".." === p) {
              if (0 === u || 1 === u && ".." === e[2] || ".." === e[u - 1]) continue;
              0 < u && (e.splice(u - 1, 2), u -= 2);
            }
          }

          e = e.join("/");
        }

        if ((h || g) && f) {
          for (u = (n = e.split("/")).length; 0 < u; u -= 1) {
            if (i = n.slice(0, u).join("/"), h) for (d = h.length; 0 < d; d -= 1) {
              if (r = (r = f[h.slice(0, d).join("/")]) && r[i]) {
                o = r, a = u;
                break;
              }
            }
            if (o) break;
            !l && g && g[i] && (l = g[i], c = u);
          }

          !o && l && (o = l, a = c), o && (n.splice(0, a, o), e = n.join("/"));
        }

        return e;
      }

      function A(t, n) {
        return function () {
          var e = a.call(arguments, 0);
          return "string" != typeof e[0] && 1 === e.length && e.push(null), _s.apply(h, e.concat([t, n]));
        };
      }

      function x(t) {
        return function (e) {
          m[t] = e;
        };
      }

      function S(e) {
        if (b(v, e)) {
          var t = v[e];
          delete v[e], _[e] = !0, o.apply(h, t);
        }

        if (!b(m, e) && !b(_, e)) throw new Error("No " + e);
        return m[e];
      }

      function u(e) {
        var t,
            n = e ? e.indexOf("!") : -1;
        return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e];
      }

      function D(e) {
        return e ? u(e) : [];
      }

      return e && e.requirejs || (e ? n = e : e = {}, m = {}, v = {}, y = {}, _ = {}, r = Object.prototype.hasOwnProperty, a = [].slice, w = /\.js$/, f = function f(e, t) {
        var n,
            i = u(e),
            r = i[0],
            o = t[1];
        return e = i[1], r && (n = S(r = c(r, o))), r ? e = n && n.normalize ? n.normalize(e, function (t) {
          return function (e) {
            return c(e, t);
          };
        }(o)) : c(e, o) : (r = (i = u(e = c(e, o)))[0], e = i[1], r && (n = S(r))), {
          f: r ? r + "!" + e : e,
          n: e,
          pr: r,
          p: n
        };
      }, g = {
        require: function require(e) {
          return A(e);
        },
        exports: function exports(e) {
          var t = m[e];
          return void 0 !== t ? t : m[e] = {};
        },
        module: function module(e) {
          return {
            id: e,
            uri: "",
            exports: m[e],
            config: function (e) {
              return function () {
                return y && y.config && y.config[e] || {};
              };
            }(e)
          };
        }
      }, o = function o(e, t, n, i) {
        var r,
            o,
            s,
            a,
            l,
            c,
            u,
            d = [],
            p = _typeof(n);

        if (c = D(i = i || e), "undefined" == p || "function" == p) {
          for (t = !t.length && n.length ? ["require", "exports", "module"] : t, l = 0; l < t.length; l += 1) {
            if ("require" === (o = (a = f(t[l], c)).f)) d[l] = g.require(e);else if ("exports" === o) d[l] = g.exports(e), u = !0;else if ("module" === o) r = d[l] = g.module(e);else if (b(m, o) || b(v, o) || b(_, o)) d[l] = S(o);else {
              if (!a.p) throw new Error(e + " missing " + o);
              a.p.load(a.n, A(i, !0), x(o), {}), d[l] = m[o];
            }
          }

          s = n ? n.apply(m[e], d) : void 0, e && (r && r.exports !== h && r.exports !== m[e] ? m[e] = r.exports : s === h && u || (m[e] = s));
        } else e && (m[e] = n);
      }, t = n = _s = function s(e, t, n, i, r) {
        if ("string" == typeof e) return g[e] ? g[e](t) : S(f(e, D(t)).f);

        if (!e.splice) {
          if ((y = e).deps && _s(y.deps, y.callback), !t) return;
          t.splice ? (e = t, t = n, n = null) : e = h;
        }

        return t = t || function () {}, "function" == typeof n && (n = i, i = r), i ? o(h, e, t, n) : setTimeout(function () {
          o(h, e, t, n);
        }, 4), _s;
      }, _s.config = function (e) {
        return _s(e);
      }, t._defined = m, (i = function i(e, t, n) {
        if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
        t.splice || (n = t, t = []), b(m, e) || b(v, e) || (v[e] = [e, t, n]);
      }).amd = {
        jQuery: !0
      }, e.requirejs = t, e.require = n, e.define = i), e.define("almond", function () {}), e.define("jquery", [], function () {
        var e = d || $;
        return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e;
      }), e.define("select2/utils", ["jquery"], function (o) {
        var r = {};

        function u(e) {
          var t = e.prototype,
              n = [];

          for (var i in t) {
            "function" == typeof t[i] && "constructor" !== i && n.push(i);
          }

          return n;
        }

        r.Extend = function (e, t) {
          var n = {}.hasOwnProperty;

          function i() {
            this.constructor = e;
          }

          for (var r in t) {
            n.call(t, r) && (e[r] = t[r]);
          }

          return i.prototype = t.prototype, e.prototype = new i(), e.__super__ = t.prototype, e;
        }, r.Decorate = function (i, r) {
          var e = u(r),
              t = u(i);

          function o() {
            var e = Array.prototype.unshift,
                t = r.prototype.constructor.length,
                n = i.prototype.constructor;
            0 < t && (e.call(arguments, i.prototype.constructor), n = r.prototype.constructor), n.apply(this, arguments);
          }

          r.displayName = i.displayName, o.prototype = new function () {
            this.constructor = o;
          }();

          for (var n = 0; n < t.length; n++) {
            var s = t[n];
            o.prototype[s] = i.prototype[s];
          }

          function a(e) {
            var t = function t() {};

            e in o.prototype && (t = o.prototype[e]);
            var n = r.prototype[e];
            return function () {
              return Array.prototype.unshift.call(arguments, t), n.apply(this, arguments);
            };
          }

          for (var l = 0; l < e.length; l++) {
            var c = e[l];
            o.prototype[c] = a(c);
          }

          return o;
        };

        function e() {
          this.listeners = {};
        }

        e.prototype.on = function (e, t) {
          this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t];
        }, e.prototype.trigger = function (e) {
          var t = Array.prototype.slice,
              n = t.call(arguments, 1);
          this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
        }, e.prototype.invoke = function (e, t) {
          for (var n = 0, i = e.length; n < i; n++) {
            e[n].apply(this, t);
          }
        }, r.Observable = e, r.generateChars = function (e) {
          for (var t = "", n = 0; n < e; n++) {
            t += Math.floor(36 * Math.random()).toString(36);
          }

          return t;
        }, r.bind = function (e, t) {
          return function () {
            e.apply(t, arguments);
          };
        }, r._convertData = function (e) {
          for (var t in e) {
            var n = t.split("-"),
                i = e;

            if (1 !== n.length) {
              for (var r = 0; r < n.length; r++) {
                var o = n[r];
                (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in i || (i[o] = {}), r == n.length - 1 && (i[o] = e[t]), i = i[o];
              }

              delete e[t];
            }
          }

          return e;
        }, r.hasScroll = function (e, t) {
          var n = o(t),
              i = t.style.overflowX,
              r = t.style.overflowY;
          return (i !== r || "hidden" !== r && "visible" !== r) && ("scroll" === i || "scroll" === r || n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth);
        }, r.escapeMarkup = function (e) {
          var t = {
            "\\": "&#92;",
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#47;"
          };
          return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e) {
            return t[e];
          });
        }, r.appendMany = function (e, t) {
          if ("1.7" === o.fn.jquery.substr(0, 3)) {
            var n = o();
            o.map(t, function (e) {
              n = n.add(e);
            }), t = n;
          }

          e.append(t);
        }, r.__cache = {};
        var n = 0;
        return r.GetUniqueElementId = function (e) {
          var t = e.getAttribute("data-select2-id");
          return null == t && (e.id ? (t = e.id, e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++n), t = n.toString())), t;
        }, r.StoreData = function (e, t, n) {
          var i = r.GetUniqueElementId(e);
          r.__cache[i] || (r.__cache[i] = {}), r.__cache[i][t] = n;
        }, r.GetData = function (e, t) {
          var n = r.GetUniqueElementId(e);
          return t ? r.__cache[n] && null != r.__cache[n][t] ? r.__cache[n][t] : o(e).data(t) : r.__cache[n];
        }, r.RemoveData = function (e) {
          var t = r.GetUniqueElementId(e);
          null != r.__cache[t] && delete r.__cache[t], e.removeAttribute("data-select2-id");
        }, r;
      }), e.define("select2/results", ["jquery", "./utils"], function (h, f) {
        function i(e, t, n) {
          this.$element = e, this.data = n, this.options = t, i.__super__.constructor.call(this);
        }

        return f.Extend(i, f.Observable), i.prototype.render = function () {
          var e = h('<ul class="select2-results__options" role="listbox"></ul>');
          return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e;
        }, i.prototype.clear = function () {
          this.$results.empty();
        }, i.prototype.displayMessage = function (e) {
          var t = this.options.get("escapeMarkup");
          this.clear(), this.hideLoading();
          var n = h('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
              i = this.options.get("translations").get(e.message);
          n.append(t(i(e.args))), n[0].className += " select2-results__message", this.$results.append(n);
        }, i.prototype.hideMessages = function () {
          this.$results.find(".select2-results__message").remove();
        }, i.prototype.append = function (e) {
          this.hideLoading();
          var t = [];

          if (null != e.results && 0 !== e.results.length) {
            e.results = this.sort(e.results);

            for (var n = 0; n < e.results.length; n++) {
              var i = e.results[n],
                  r = this.option(i);
              t.push(r);
            }

            this.$results.append(t);
          } else 0 === this.$results.children().length && this.trigger("results:message", {
            message: "noResults"
          });
        }, i.prototype.position = function (e, t) {
          t.find(".select2-results").append(e);
        }, i.prototype.sort = function (e) {
          return this.options.get("sorter")(e);
        }, i.prototype.highlightFirstItem = function () {
          var e = this.$results.find(".select2-results__option[aria-selected]"),
              t = e.filter("[aria-selected=true]");
          0 < t.length ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible();
        }, i.prototype.setClasses = function () {
          var t = this;
          this.data.current(function (e) {
            var i = h.map(e, function (e) {
              return e.id.toString();
            });
            t.$results.find(".select2-results__option[aria-selected]").each(function () {
              var e = h(this),
                  t = f.GetData(this, "data"),
                  n = "" + t.id;
              null != t.element && t.element.selected || null == t.element && -1 < h.inArray(n, i) ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false");
            });
          });
        }, i.prototype.showLoading = function (e) {
          this.hideLoading();
          var t = {
            disabled: !0,
            loading: !0,
            text: this.options.get("translations").get("searching")(e)
          },
              n = this.option(t);
          n.className += " loading-results", this.$results.prepend(n);
        }, i.prototype.hideLoading = function () {
          this.$results.find(".loading-results").remove();
        }, i.prototype.option = function (e) {
          var t = document.createElement("li");
          t.className = "select2-results__option";
          var n = {
            role: "option",
            "aria-selected": "false"
          },
              i = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;

          for (var r in (null != e.element && i.call(e.element, ":disabled") || null == e.element && e.disabled) && (delete n["aria-selected"], n["aria-disabled"] = "true"), null == e.id && delete n["aria-selected"], null != e._resultId && (t.id = e._resultId), e.title && (t.title = e.title), e.children && (n.role = "group", n["aria-label"] = e.text, delete n["aria-selected"]), n) {
            var o = n[r];
            t.setAttribute(r, o);
          }

          if (e.children) {
            var s = h(t),
                a = document.createElement("strong");
            a.className = "select2-results__group";
            h(a);
            this.template(e, a);

            for (var l = [], c = 0; c < e.children.length; c++) {
              var u = e.children[c],
                  d = this.option(u);
              l.push(d);
            }

            var p = h("<ul></ul>", {
              "class": "select2-results__options select2-results__options--nested"
            });
            p.append(l), s.append(a), s.append(p);
          } else this.template(e, t);

          return f.StoreData(t, "data", e), t;
        }, i.prototype.bind = function (t, e) {
          var l = this,
              n = t.id + "-results";
          this.$results.attr("id", n), t.on("results:all", function (e) {
            l.clear(), l.append(e.data), t.isOpen() && (l.setClasses(), l.highlightFirstItem());
          }), t.on("results:append", function (e) {
            l.append(e.data), t.isOpen() && l.setClasses();
          }), t.on("query", function (e) {
            l.hideMessages(), l.showLoading(e);
          }), t.on("select", function () {
            t.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem());
          }), t.on("unselect", function () {
            t.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem());
          }), t.on("open", function () {
            l.$results.attr("aria-expanded", "true"), l.$results.attr("aria-hidden", "false"), l.setClasses(), l.ensureHighlightVisible();
          }), t.on("close", function () {
            l.$results.attr("aria-expanded", "false"), l.$results.attr("aria-hidden", "true"), l.$results.removeAttr("aria-activedescendant");
          }), t.on("results:toggle", function () {
            var e = l.getHighlightedResults();
            0 !== e.length && e.trigger("mouseup");
          }), t.on("results:select", function () {
            var e = l.getHighlightedResults();

            if (0 !== e.length) {
              var t = f.GetData(e[0], "data");
              "true" == e.attr("aria-selected") ? l.trigger("close", {}) : l.trigger("select", {
                data: t
              });
            }
          }), t.on("results:previous", function () {
            var e = l.getHighlightedResults(),
                t = l.$results.find("[aria-selected]"),
                n = t.index(e);

            if (!(n <= 0)) {
              var i = n - 1;
              0 === e.length && (i = 0);
              var r = t.eq(i);
              r.trigger("mouseenter");
              var o = l.$results.offset().top,
                  s = r.offset().top,
                  a = l.$results.scrollTop() + (s - o);
              0 === i ? l.$results.scrollTop(0) : s - o < 0 && l.$results.scrollTop(a);
            }
          }), t.on("results:next", function () {
            var e = l.getHighlightedResults(),
                t = l.$results.find("[aria-selected]"),
                n = t.index(e) + 1;

            if (!(n >= t.length)) {
              var i = t.eq(n);
              i.trigger("mouseenter");
              var r = l.$results.offset().top + l.$results.outerHeight(!1),
                  o = i.offset().top + i.outerHeight(!1),
                  s = l.$results.scrollTop() + o - r;
              0 === n ? l.$results.scrollTop(0) : r < o && l.$results.scrollTop(s);
            }
          }), t.on("results:focus", function (e) {
            e.element.addClass("select2-results__option--highlighted");
          }), t.on("results:message", function (e) {
            l.displayMessage(e);
          }), h.fn.mousewheel && this.$results.on("mousewheel", function (e) {
            var t = l.$results.scrollTop(),
                n = l.$results.get(0).scrollHeight - t + e.deltaY,
                i = 0 < e.deltaY && t - e.deltaY <= 0,
                r = e.deltaY < 0 && n <= l.$results.height();
            i ? (l.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : r && (l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height()), e.preventDefault(), e.stopPropagation());
          }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (e) {
            var t = h(this),
                n = f.GetData(this, "data");
            "true" !== t.attr("aria-selected") ? l.trigger("select", {
              originalEvent: e,
              data: n
            }) : l.options.get("multiple") ? l.trigger("unselect", {
              originalEvent: e,
              data: n
            }) : l.trigger("close", {});
          }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (e) {
            var t = f.GetData(this, "data");
            l.getHighlightedResults().removeClass("select2-results__option--highlighted"), l.trigger("results:focus", {
              data: t,
              element: h(this)
            });
          });
        }, i.prototype.getHighlightedResults = function () {
          return this.$results.find(".select2-results__option--highlighted");
        }, i.prototype.destroy = function () {
          this.$results.remove();
        }, i.prototype.ensureHighlightVisible = function () {
          var e = this.getHighlightedResults();

          if (0 !== e.length) {
            var t = this.$results.find("[aria-selected]").index(e),
                n = this.$results.offset().top,
                i = e.offset().top,
                r = this.$results.scrollTop() + (i - n),
                o = i - n;
            r -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(r);
          }
        }, i.prototype.template = function (e, t) {
          var n = this.options.get("templateResult"),
              i = this.options.get("escapeMarkup"),
              r = n(e, t);
          null == r ? t.style.display = "none" : "string" == typeof r ? t.innerHTML = i(r) : h(t).append(r);
        }, i;
      }), e.define("select2/keys", [], function () {
        return {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          DELETE: 46
        };
      }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (n, i, r) {
        function o(e, t) {
          this.$element = e, this.options = t, o.__super__.constructor.call(this);
        }

        return i.Extend(o, i.Observable), o.prototype.render = function () {
          var e = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
          return this._tabindex = 0, null != i.GetData(this.$element[0], "old-tabindex") ? this._tabindex = i.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), e.attr("aria-disabled", "false"), this.$selection = e;
        }, o.prototype.bind = function (e, t) {
          var n = this,
              i = e.id + "-results";
          this.container = e, this.$selection.on("focus", function (e) {
            n.trigger("focus", e);
          }), this.$selection.on("blur", function (e) {
            n._handleBlur(e);
          }), this.$selection.on("keydown", function (e) {
            n.trigger("keypress", e), e.which === r.SPACE && e.preventDefault();
          }), e.on("results:focus", function (e) {
            n.$selection.attr("aria-activedescendant", e.data._resultId);
          }), e.on("selection:update", function (e) {
            n.update(e.data);
          }), e.on("open", function () {
            n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", i), n._attachCloseHandler(e);
          }), e.on("close", function () {
            n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), n.$selection.trigger("focus"), n._detachCloseHandler(e);
          }), e.on("enable", function () {
            n.$selection.attr("tabindex", n._tabindex), n.$selection.attr("aria-disabled", "false");
          }), e.on("disable", function () {
            n.$selection.attr("tabindex", "-1"), n.$selection.attr("aria-disabled", "true");
          });
        }, o.prototype._handleBlur = function (e) {
          var t = this;
          window.setTimeout(function () {
            document.activeElement == t.$selection[0] || n.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e);
          }, 1);
        }, o.prototype._attachCloseHandler = function (e) {
          n(document.body).on("mousedown.select2." + e.id, function (e) {
            var t = n(e.target).closest(".select2");
            n(".select2.select2-container--open").each(function () {
              this != t[0] && i.GetData(this, "element").select2("close");
            });
          });
        }, o.prototype._detachCloseHandler = function (e) {
          n(document.body).off("mousedown.select2." + e.id);
        }, o.prototype.position = function (e, t) {
          t.find(".selection").append(e);
        }, o.prototype.destroy = function () {
          this._detachCloseHandler(this.container);
        }, o.prototype.update = function (e) {
          throw new Error("The `update` method must be defined in child classes.");
        }, o;
      }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, i) {
        function r() {
          r.__super__.constructor.apply(this, arguments);
        }

        return n.Extend(r, t), r.prototype.render = function () {
          var e = r.__super__.render.call(this);

          return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e;
        }, r.prototype.bind = function (t, e) {
          var n = this;

          r.__super__.bind.apply(this, arguments);

          var i = t.id + "-container";
          this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function (e) {
            1 === e.which && n.trigger("toggle", {
              originalEvent: e
            });
          }), this.$selection.on("focus", function (e) {}), this.$selection.on("blur", function (e) {}), t.on("focus", function (e) {
            t.isOpen() || n.$selection.trigger("focus");
          });
        }, r.prototype.clear = function () {
          var e = this.$selection.find(".select2-selection__rendered");
          e.empty(), e.removeAttr("title");
        }, r.prototype.display = function (e, t) {
          var n = this.options.get("templateSelection");
          return this.options.get("escapeMarkup")(n(e, t));
        }, r.prototype.selectionContainer = function () {
          return e("<span></span>");
        }, r.prototype.update = function (e) {
          if (0 !== e.length) {
            var t = e[0],
                n = this.$selection.find(".select2-selection__rendered"),
                i = this.display(t, n);
            n.empty().append(i);
            var r = t.title || t.text;
            r ? n.attr("title", r) : n.removeAttr("title");
          } else this.clear();
        }, r;
      }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (r, e, l) {
        function n(e, t) {
          n.__super__.constructor.apply(this, arguments);
        }

        return l.Extend(n, e), n.prototype.render = function () {
          var e = n.__super__.render.call(this);

          return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e;
        }, n.prototype.bind = function (e, t) {
          var i = this;
          n.__super__.bind.apply(this, arguments), this.$selection.on("click", function (e) {
            i.trigger("toggle", {
              originalEvent: e
            });
          }), this.$selection.on("click", ".select2-selection__choice__remove", function (e) {
            if (!i.options.get("disabled")) {
              var t = r(this).parent(),
                  n = l.GetData(t[0], "data");
              i.trigger("unselect", {
                originalEvent: e,
                data: n
              });
            }
          });
        }, n.prototype.clear = function () {
          var e = this.$selection.find(".select2-selection__rendered");
          e.empty(), e.removeAttr("title");
        }, n.prototype.display = function (e, t) {
          var n = this.options.get("templateSelection");
          return this.options.get("escapeMarkup")(n(e, t));
        }, n.prototype.selectionContainer = function () {
          return r('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
        }, n.prototype.update = function (e) {
          if (this.clear(), 0 !== e.length) {
            for (var t = [], n = 0; n < e.length; n++) {
              var i = e[n],
                  r = this.selectionContainer(),
                  o = this.display(i, r);
              r.append(o);
              var s = i.title || i.text;
              s && r.attr("title", s), l.StoreData(r[0], "data", i), t.push(r);
            }

            var a = this.$selection.find(".select2-selection__rendered");
            l.appendMany(a, t);
          }
        }, n;
      }), e.define("select2/selection/placeholder", ["../utils"], function (e) {
        function t(e, t, n) {
          this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n);
        }

        return t.prototype.normalizePlaceholder = function (e, t) {
          return "string" == typeof t && (t = {
            id: "",
            text: t
          }), t;
        }, t.prototype.createPlaceholder = function (e, t) {
          var n = this.selectionContainer();
          return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n;
        }, t.prototype.update = function (e, t) {
          var n = 1 == t.length && t[0].id != this.placeholder.id;
          if (1 < t.length || n) return e.call(this, t);
          this.clear();
          var i = this.createPlaceholder(this.placeholder);
          this.$selection.find(".select2-selection__rendered").append(i);
        }, t;
      }), e.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (r, i, a) {
        function e() {}

        return e.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
            i._handleClear(e);
          }), t.on("keypress", function (e) {
            i._handleKeyboardClear(e, t);
          });
        }, e.prototype._handleClear = function (e, t) {
          if (!this.options.get("disabled")) {
            var n = this.$selection.find(".select2-selection__clear");

            if (0 !== n.length) {
              t.stopPropagation();
              var i = a.GetData(n[0], "data"),
                  r = this.$element.val();
              this.$element.val(this.placeholder.id);
              var o = {
                data: i
              };
              if (this.trigger("clear", o), o.prevented) this.$element.val(r);else {
                for (var s = 0; s < i.length; s++) {
                  if (o = {
                    data: i[s]
                  }, this.trigger("unselect", o), o.prevented) return void this.$element.val(r);
                }

                this.$element.trigger("change"), this.trigger("toggle", {});
              }
            }
          }
        }, e.prototype._handleKeyboardClear = function (e, t, n) {
          n.isOpen() || t.which != i.DELETE && t.which != i.BACKSPACE || this._handleClear(t);
        }, e.prototype.update = function (e, t) {
          if (e.call(this, t), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === t.length)) {
            var n = this.options.get("translations").get("removeAllItems"),
                i = r('<span class="select2-selection__clear" title="' + n() + '">&times;</span>');
            a.StoreData(i[0], "data", t), this.$selection.find(".select2-selection__rendered").prepend(i);
          }
        }, e;
      }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (i, a, l) {
        function e(e, t, n) {
          e.call(this, t, n);
        }

        return e.prototype.render = function (e) {
          var t = i('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');
          this.$searchContainer = t, this.$search = t.find("input");
          var n = e.call(this);
          return this._transferTabIndex(), n;
        }, e.prototype.bind = function (e, t, n) {
          var i = this,
              r = t.id + "-results";
          e.call(this, t, n), t.on("open", function () {
            i.$search.attr("aria-controls", r), i.$search.trigger("focus");
          }), t.on("close", function () {
            i.$search.val(""), i.$search.removeAttr("aria-controls"), i.$search.removeAttr("aria-activedescendant"), i.$search.trigger("focus");
          }), t.on("enable", function () {
            i.$search.prop("disabled", !1), i._transferTabIndex();
          }), t.on("disable", function () {
            i.$search.prop("disabled", !0);
          }), t.on("focus", function (e) {
            i.$search.trigger("focus");
          }), t.on("results:focus", function (e) {
            e.data._resultId ? i.$search.attr("aria-activedescendant", e.data._resultId) : i.$search.removeAttr("aria-activedescendant");
          }), this.$selection.on("focusin", ".select2-search--inline", function (e) {
            i.trigger("focus", e);
          }), this.$selection.on("focusout", ".select2-search--inline", function (e) {
            i._handleBlur(e);
          }), this.$selection.on("keydown", ".select2-search--inline", function (e) {
            if (e.stopPropagation(), i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented(), e.which === l.BACKSPACE && "" === i.$search.val()) {
              var t = i.$searchContainer.prev(".select2-selection__choice");

              if (0 < t.length) {
                var n = a.GetData(t[0], "data");
                i.searchRemoveChoice(n), e.preventDefault();
              }
            }
          }), this.$selection.on("click", ".select2-search--inline", function (e) {
            i.$search.val() && e.stopPropagation();
          });
          var o = document.documentMode,
              s = o && o <= 11;
          this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {
            s ? i.$selection.off("input.search input.searchcheck") : i.$selection.off("keyup.search");
          }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
            if (s && "input" === e.type) i.$selection.off("input.search input.searchcheck");else {
              var t = e.which;
              t != l.SHIFT && t != l.CTRL && t != l.ALT && t != l.TAB && i.handleSearch(e);
            }
          });
        }, e.prototype._transferTabIndex = function (e) {
          this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
        }, e.prototype.createPlaceholder = function (e, t) {
          this.$search.attr("placeholder", t.text);
        }, e.prototype.update = function (e, t) {
          var n = this.$search[0] == document.activeElement;
          this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.trigger("focus");
        }, e.prototype.handleSearch = function () {
          if (this.resizeSearch(), !this._keyUpPrevented) {
            var e = this.$search.val();
            this.trigger("query", {
              term: e
            });
          }

          this._keyUpPrevented = !1;
        }, e.prototype.searchRemoveChoice = function (e, t) {
          this.trigger("unselect", {
            data: t
          }), this.$search.val(t.text), this.handleSearch();
        }, e.prototype.resizeSearch = function () {
          this.$search.css("width", "25px");
          var e = "";
          "" !== this.$search.attr("placeholder") ? e = this.$selection.find(".select2-selection__rendered").width() : e = .75 * (this.$search.val().length + 1) + "em";
          this.$search.css("width", e);
        }, e;
      }), e.define("select2/selection/eventRelay", ["jquery"], function (s) {
        function e() {}

        return e.prototype.bind = function (e, t, n) {
          var i = this,
              r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
              o = ["opening", "closing", "selecting", "unselecting", "clearing"];
          e.call(this, t, n), t.on("*", function (e, t) {
            if (-1 !== s.inArray(e, r)) {
              t = t || {};
              var n = s.Event("select2:" + e, {
                params: t
              });
              i.$element.trigger(n), -1 !== s.inArray(e, o) && (t.prevented = n.isDefaultPrevented());
            }
          });
        }, e;
      }), e.define("select2/translation", ["jquery", "require"], function (t, n) {
        function i(e) {
          this.dict = e || {};
        }

        return i.prototype.all = function () {
          return this.dict;
        }, i.prototype.get = function (e) {
          return this.dict[e];
        }, i.prototype.extend = function (e) {
          this.dict = t.extend({}, e.all(), this.dict);
        }, i._cache = {}, i.loadPath = function (e) {
          if (!(e in i._cache)) {
            var t = n(e);
            i._cache[e] = t;
          }

          return new i(i._cache[e]);
        }, i;
      }), e.define("select2/diacritics", [], function () {
        return {
          "Ⓐ": "A",
          "Ａ": "A",
          "À": "A",
          "Á": "A",
          "Â": "A",
          "Ầ": "A",
          "Ấ": "A",
          "Ẫ": "A",
          "Ẩ": "A",
          "Ã": "A",
          "Ā": "A",
          "Ă": "A",
          "Ằ": "A",
          "Ắ": "A",
          "Ẵ": "A",
          "Ẳ": "A",
          "Ȧ": "A",
          "Ǡ": "A",
          "Ä": "A",
          "Ǟ": "A",
          "Ả": "A",
          "Å": "A",
          "Ǻ": "A",
          "Ǎ": "A",
          "Ȁ": "A",
          "Ȃ": "A",
          "Ạ": "A",
          "Ậ": "A",
          "Ặ": "A",
          "Ḁ": "A",
          "Ą": "A",
          "Ⱥ": "A",
          "Ɐ": "A",
          "Ꜳ": "AA",
          "Æ": "AE",
          "Ǽ": "AE",
          "Ǣ": "AE",
          "Ꜵ": "AO",
          "Ꜷ": "AU",
          "Ꜹ": "AV",
          "Ꜻ": "AV",
          "Ꜽ": "AY",
          "Ⓑ": "B",
          "Ｂ": "B",
          "Ḃ": "B",
          "Ḅ": "B",
          "Ḇ": "B",
          "Ƀ": "B",
          "Ƃ": "B",
          "Ɓ": "B",
          "Ⓒ": "C",
          "Ｃ": "C",
          "Ć": "C",
          "Ĉ": "C",
          "Ċ": "C",
          "Č": "C",
          "Ç": "C",
          "Ḉ": "C",
          "Ƈ": "C",
          "Ȼ": "C",
          "Ꜿ": "C",
          "Ⓓ": "D",
          "Ｄ": "D",
          "Ḋ": "D",
          "Ď": "D",
          "Ḍ": "D",
          "Ḑ": "D",
          "Ḓ": "D",
          "Ḏ": "D",
          "Đ": "D",
          "Ƌ": "D",
          "Ɗ": "D",
          "Ɖ": "D",
          "Ꝺ": "D",
          "Ǳ": "DZ",
          "Ǆ": "DZ",
          "ǲ": "Dz",
          "ǅ": "Dz",
          "Ⓔ": "E",
          "Ｅ": "E",
          "È": "E",
          "É": "E",
          "Ê": "E",
          "Ề": "E",
          "Ế": "E",
          "Ễ": "E",
          "Ể": "E",
          "Ẽ": "E",
          "Ē": "E",
          "Ḕ": "E",
          "Ḗ": "E",
          "Ĕ": "E",
          "Ė": "E",
          "Ë": "E",
          "Ẻ": "E",
          "Ě": "E",
          "Ȅ": "E",
          "Ȇ": "E",
          "Ẹ": "E",
          "Ệ": "E",
          "Ȩ": "E",
          "Ḝ": "E",
          "Ę": "E",
          "Ḙ": "E",
          "Ḛ": "E",
          "Ɛ": "E",
          "Ǝ": "E",
          "Ⓕ": "F",
          "Ｆ": "F",
          "Ḟ": "F",
          "Ƒ": "F",
          "Ꝼ": "F",
          "Ⓖ": "G",
          "Ｇ": "G",
          "Ǵ": "G",
          "Ĝ": "G",
          "Ḡ": "G",
          "Ğ": "G",
          "Ġ": "G",
          "Ǧ": "G",
          "Ģ": "G",
          "Ǥ": "G",
          "Ɠ": "G",
          "Ꞡ": "G",
          "Ᵹ": "G",
          "Ꝿ": "G",
          "Ⓗ": "H",
          "Ｈ": "H",
          "Ĥ": "H",
          "Ḣ": "H",
          "Ḧ": "H",
          "Ȟ": "H",
          "Ḥ": "H",
          "Ḩ": "H",
          "Ḫ": "H",
          "Ħ": "H",
          "Ⱨ": "H",
          "Ⱶ": "H",
          "Ɥ": "H",
          "Ⓘ": "I",
          "Ｉ": "I",
          "Ì": "I",
          "Í": "I",
          "Î": "I",
          "Ĩ": "I",
          "Ī": "I",
          "Ĭ": "I",
          "İ": "I",
          "Ï": "I",
          "Ḯ": "I",
          "Ỉ": "I",
          "Ǐ": "I",
          "Ȉ": "I",
          "Ȋ": "I",
          "Ị": "I",
          "Į": "I",
          "Ḭ": "I",
          "Ɨ": "I",
          "Ⓙ": "J",
          "Ｊ": "J",
          "Ĵ": "J",
          "Ɉ": "J",
          "Ⓚ": "K",
          "Ｋ": "K",
          "Ḱ": "K",
          "Ǩ": "K",
          "Ḳ": "K",
          "Ķ": "K",
          "Ḵ": "K",
          "Ƙ": "K",
          "Ⱪ": "K",
          "Ꝁ": "K",
          "Ꝃ": "K",
          "Ꝅ": "K",
          "Ꞣ": "K",
          "Ⓛ": "L",
          "Ｌ": "L",
          "Ŀ": "L",
          "Ĺ": "L",
          "Ľ": "L",
          "Ḷ": "L",
          "Ḹ": "L",
          "Ļ": "L",
          "Ḽ": "L",
          "Ḻ": "L",
          "Ł": "L",
          "Ƚ": "L",
          "Ɫ": "L",
          "Ⱡ": "L",
          "Ꝉ": "L",
          "Ꝇ": "L",
          "Ꞁ": "L",
          "Ǉ": "LJ",
          "ǈ": "Lj",
          "Ⓜ": "M",
          "Ｍ": "M",
          "Ḿ": "M",
          "Ṁ": "M",
          "Ṃ": "M",
          "Ɱ": "M",
          "Ɯ": "M",
          "Ⓝ": "N",
          "Ｎ": "N",
          "Ǹ": "N",
          "Ń": "N",
          "Ñ": "N",
          "Ṅ": "N",
          "Ň": "N",
          "Ṇ": "N",
          "Ņ": "N",
          "Ṋ": "N",
          "Ṉ": "N",
          "Ƞ": "N",
          "Ɲ": "N",
          "Ꞑ": "N",
          "Ꞥ": "N",
          "Ǌ": "NJ",
          "ǋ": "Nj",
          "Ⓞ": "O",
          "Ｏ": "O",
          "Ò": "O",
          "Ó": "O",
          "Ô": "O",
          "Ồ": "O",
          "Ố": "O",
          "Ỗ": "O",
          "Ổ": "O",
          "Õ": "O",
          "Ṍ": "O",
          "Ȭ": "O",
          "Ṏ": "O",
          "Ō": "O",
          "Ṑ": "O",
          "Ṓ": "O",
          "Ŏ": "O",
          "Ȯ": "O",
          "Ȱ": "O",
          "Ö": "O",
          "Ȫ": "O",
          "Ỏ": "O",
          "Ő": "O",
          "Ǒ": "O",
          "Ȍ": "O",
          "Ȏ": "O",
          "Ơ": "O",
          "Ờ": "O",
          "Ớ": "O",
          "Ỡ": "O",
          "Ở": "O",
          "Ợ": "O",
          "Ọ": "O",
          "Ộ": "O",
          "Ǫ": "O",
          "Ǭ": "O",
          "Ø": "O",
          "Ǿ": "O",
          "Ɔ": "O",
          "Ɵ": "O",
          "Ꝋ": "O",
          "Ꝍ": "O",
          "Œ": "OE",
          "Ƣ": "OI",
          "Ꝏ": "OO",
          "Ȣ": "OU",
          "Ⓟ": "P",
          "Ｐ": "P",
          "Ṕ": "P",
          "Ṗ": "P",
          "Ƥ": "P",
          "Ᵽ": "P",
          "Ꝑ": "P",
          "Ꝓ": "P",
          "Ꝕ": "P",
          "Ⓠ": "Q",
          "Ｑ": "Q",
          "Ꝗ": "Q",
          "Ꝙ": "Q",
          "Ɋ": "Q",
          "Ⓡ": "R",
          "Ｒ": "R",
          "Ŕ": "R",
          "Ṙ": "R",
          "Ř": "R",
          "Ȑ": "R",
          "Ȓ": "R",
          "Ṛ": "R",
          "Ṝ": "R",
          "Ŗ": "R",
          "Ṟ": "R",
          "Ɍ": "R",
          "Ɽ": "R",
          "Ꝛ": "R",
          "Ꞧ": "R",
          "Ꞃ": "R",
          "Ⓢ": "S",
          "Ｓ": "S",
          "ẞ": "S",
          "Ś": "S",
          "Ṥ": "S",
          "Ŝ": "S",
          "Ṡ": "S",
          "Š": "S",
          "Ṧ": "S",
          "Ṣ": "S",
          "Ṩ": "S",
          "Ș": "S",
          "Ş": "S",
          "Ȿ": "S",
          "Ꞩ": "S",
          "Ꞅ": "S",
          "Ⓣ": "T",
          "Ｔ": "T",
          "Ṫ": "T",
          "Ť": "T",
          "Ṭ": "T",
          "Ț": "T",
          "Ţ": "T",
          "Ṱ": "T",
          "Ṯ": "T",
          "Ŧ": "T",
          "Ƭ": "T",
          "Ʈ": "T",
          "Ⱦ": "T",
          "Ꞇ": "T",
          "Ꜩ": "TZ",
          "Ⓤ": "U",
          "Ｕ": "U",
          "Ù": "U",
          "Ú": "U",
          "Û": "U",
          "Ũ": "U",
          "Ṹ": "U",
          "Ū": "U",
          "Ṻ": "U",
          "Ŭ": "U",
          "Ü": "U",
          "Ǜ": "U",
          "Ǘ": "U",
          "Ǖ": "U",
          "Ǚ": "U",
          "Ủ": "U",
          "Ů": "U",
          "Ű": "U",
          "Ǔ": "U",
          "Ȕ": "U",
          "Ȗ": "U",
          "Ư": "U",
          "Ừ": "U",
          "Ứ": "U",
          "Ữ": "U",
          "Ử": "U",
          "Ự": "U",
          "Ụ": "U",
          "Ṳ": "U",
          "Ų": "U",
          "Ṷ": "U",
          "Ṵ": "U",
          "Ʉ": "U",
          "Ⓥ": "V",
          "Ｖ": "V",
          "Ṽ": "V",
          "Ṿ": "V",
          "Ʋ": "V",
          "Ꝟ": "V",
          "Ʌ": "V",
          "Ꝡ": "VY",
          "Ⓦ": "W",
          "Ｗ": "W",
          "Ẁ": "W",
          "Ẃ": "W",
          "Ŵ": "W",
          "Ẇ": "W",
          "Ẅ": "W",
          "Ẉ": "W",
          "Ⱳ": "W",
          "Ⓧ": "X",
          "Ｘ": "X",
          "Ẋ": "X",
          "Ẍ": "X",
          "Ⓨ": "Y",
          "Ｙ": "Y",
          "Ỳ": "Y",
          "Ý": "Y",
          "Ŷ": "Y",
          "Ỹ": "Y",
          "Ȳ": "Y",
          "Ẏ": "Y",
          "Ÿ": "Y",
          "Ỷ": "Y",
          "Ỵ": "Y",
          "Ƴ": "Y",
          "Ɏ": "Y",
          "Ỿ": "Y",
          "Ⓩ": "Z",
          "Ｚ": "Z",
          "Ź": "Z",
          "Ẑ": "Z",
          "Ż": "Z",
          "Ž": "Z",
          "Ẓ": "Z",
          "Ẕ": "Z",
          "Ƶ": "Z",
          "Ȥ": "Z",
          "Ɀ": "Z",
          "Ⱬ": "Z",
          "Ꝣ": "Z",
          "ⓐ": "a",
          "ａ": "a",
          "ẚ": "a",
          "à": "a",
          "á": "a",
          "â": "a",
          "ầ": "a",
          "ấ": "a",
          "ẫ": "a",
          "ẩ": "a",
          "ã": "a",
          "ā": "a",
          "ă": "a",
          "ằ": "a",
          "ắ": "a",
          "ẵ": "a",
          "ẳ": "a",
          "ȧ": "a",
          "ǡ": "a",
          "ä": "a",
          "ǟ": "a",
          "ả": "a",
          "å": "a",
          "ǻ": "a",
          "ǎ": "a",
          "ȁ": "a",
          "ȃ": "a",
          "ạ": "a",
          "ậ": "a",
          "ặ": "a",
          "ḁ": "a",
          "ą": "a",
          "ⱥ": "a",
          "ɐ": "a",
          "ꜳ": "aa",
          "æ": "ae",
          "ǽ": "ae",
          "ǣ": "ae",
          "ꜵ": "ao",
          "ꜷ": "au",
          "ꜹ": "av",
          "ꜻ": "av",
          "ꜽ": "ay",
          "ⓑ": "b",
          "ｂ": "b",
          "ḃ": "b",
          "ḅ": "b",
          "ḇ": "b",
          "ƀ": "b",
          "ƃ": "b",
          "ɓ": "b",
          "ⓒ": "c",
          "ｃ": "c",
          "ć": "c",
          "ĉ": "c",
          "ċ": "c",
          "č": "c",
          "ç": "c",
          "ḉ": "c",
          "ƈ": "c",
          "ȼ": "c",
          "ꜿ": "c",
          "ↄ": "c",
          "ⓓ": "d",
          "ｄ": "d",
          "ḋ": "d",
          "ď": "d",
          "ḍ": "d",
          "ḑ": "d",
          "ḓ": "d",
          "ḏ": "d",
          "đ": "d",
          "ƌ": "d",
          "ɖ": "d",
          "ɗ": "d",
          "ꝺ": "d",
          "ǳ": "dz",
          "ǆ": "dz",
          "ⓔ": "e",
          "ｅ": "e",
          "è": "e",
          "é": "e",
          "ê": "e",
          "ề": "e",
          "ế": "e",
          "ễ": "e",
          "ể": "e",
          "ẽ": "e",
          "ē": "e",
          "ḕ": "e",
          "ḗ": "e",
          "ĕ": "e",
          "ė": "e",
          "ë": "e",
          "ẻ": "e",
          "ě": "e",
          "ȅ": "e",
          "ȇ": "e",
          "ẹ": "e",
          "ệ": "e",
          "ȩ": "e",
          "ḝ": "e",
          "ę": "e",
          "ḙ": "e",
          "ḛ": "e",
          "ɇ": "e",
          "ɛ": "e",
          "ǝ": "e",
          "ⓕ": "f",
          "ｆ": "f",
          "ḟ": "f",
          "ƒ": "f",
          "ꝼ": "f",
          "ⓖ": "g",
          "ｇ": "g",
          "ǵ": "g",
          "ĝ": "g",
          "ḡ": "g",
          "ğ": "g",
          "ġ": "g",
          "ǧ": "g",
          "ģ": "g",
          "ǥ": "g",
          "ɠ": "g",
          "ꞡ": "g",
          "ᵹ": "g",
          "ꝿ": "g",
          "ⓗ": "h",
          "ｈ": "h",
          "ĥ": "h",
          "ḣ": "h",
          "ḧ": "h",
          "ȟ": "h",
          "ḥ": "h",
          "ḩ": "h",
          "ḫ": "h",
          "ẖ": "h",
          "ħ": "h",
          "ⱨ": "h",
          "ⱶ": "h",
          "ɥ": "h",
          "ƕ": "hv",
          "ⓘ": "i",
          "ｉ": "i",
          "ì": "i",
          "í": "i",
          "î": "i",
          "ĩ": "i",
          "ī": "i",
          "ĭ": "i",
          "ï": "i",
          "ḯ": "i",
          "ỉ": "i",
          "ǐ": "i",
          "ȉ": "i",
          "ȋ": "i",
          "ị": "i",
          "į": "i",
          "ḭ": "i",
          "ɨ": "i",
          "ı": "i",
          "ⓙ": "j",
          "ｊ": "j",
          "ĵ": "j",
          "ǰ": "j",
          "ɉ": "j",
          "ⓚ": "k",
          "ｋ": "k",
          "ḱ": "k",
          "ǩ": "k",
          "ḳ": "k",
          "ķ": "k",
          "ḵ": "k",
          "ƙ": "k",
          "ⱪ": "k",
          "ꝁ": "k",
          "ꝃ": "k",
          "ꝅ": "k",
          "ꞣ": "k",
          "ⓛ": "l",
          "ｌ": "l",
          "ŀ": "l",
          "ĺ": "l",
          "ľ": "l",
          "ḷ": "l",
          "ḹ": "l",
          "ļ": "l",
          "ḽ": "l",
          "ḻ": "l",
          "ſ": "l",
          "ł": "l",
          "ƚ": "l",
          "ɫ": "l",
          "ⱡ": "l",
          "ꝉ": "l",
          "ꞁ": "l",
          "ꝇ": "l",
          "ǉ": "lj",
          "ⓜ": "m",
          "ｍ": "m",
          "ḿ": "m",
          "ṁ": "m",
          "ṃ": "m",
          "ɱ": "m",
          "ɯ": "m",
          "ⓝ": "n",
          "ｎ": "n",
          "ǹ": "n",
          "ń": "n",
          "ñ": "n",
          "ṅ": "n",
          "ň": "n",
          "ṇ": "n",
          "ņ": "n",
          "ṋ": "n",
          "ṉ": "n",
          "ƞ": "n",
          "ɲ": "n",
          "ŉ": "n",
          "ꞑ": "n",
          "ꞥ": "n",
          "ǌ": "nj",
          "ⓞ": "o",
          "ｏ": "o",
          "ò": "o",
          "ó": "o",
          "ô": "o",
          "ồ": "o",
          "ố": "o",
          "ỗ": "o",
          "ổ": "o",
          "õ": "o",
          "ṍ": "o",
          "ȭ": "o",
          "ṏ": "o",
          "ō": "o",
          "ṑ": "o",
          "ṓ": "o",
          "ŏ": "o",
          "ȯ": "o",
          "ȱ": "o",
          "ö": "o",
          "ȫ": "o",
          "ỏ": "o",
          "ő": "o",
          "ǒ": "o",
          "ȍ": "o",
          "ȏ": "o",
          "ơ": "o",
          "ờ": "o",
          "ớ": "o",
          "ỡ": "o",
          "ở": "o",
          "ợ": "o",
          "ọ": "o",
          "ộ": "o",
          "ǫ": "o",
          "ǭ": "o",
          "ø": "o",
          "ǿ": "o",
          "ɔ": "o",
          "ꝋ": "o",
          "ꝍ": "o",
          "ɵ": "o",
          "œ": "oe",
          "ƣ": "oi",
          "ȣ": "ou",
          "ꝏ": "oo",
          "ⓟ": "p",
          "ｐ": "p",
          "ṕ": "p",
          "ṗ": "p",
          "ƥ": "p",
          "ᵽ": "p",
          "ꝑ": "p",
          "ꝓ": "p",
          "ꝕ": "p",
          "ⓠ": "q",
          "ｑ": "q",
          "ɋ": "q",
          "ꝗ": "q",
          "ꝙ": "q",
          "ⓡ": "r",
          "ｒ": "r",
          "ŕ": "r",
          "ṙ": "r",
          "ř": "r",
          "ȑ": "r",
          "ȓ": "r",
          "ṛ": "r",
          "ṝ": "r",
          "ŗ": "r",
          "ṟ": "r",
          "ɍ": "r",
          "ɽ": "r",
          "ꝛ": "r",
          "ꞧ": "r",
          "ꞃ": "r",
          "ⓢ": "s",
          "ｓ": "s",
          "ß": "s",
          "ś": "s",
          "ṥ": "s",
          "ŝ": "s",
          "ṡ": "s",
          "š": "s",
          "ṧ": "s",
          "ṣ": "s",
          "ṩ": "s",
          "ș": "s",
          "ş": "s",
          "ȿ": "s",
          "ꞩ": "s",
          "ꞅ": "s",
          "ẛ": "s",
          "ⓣ": "t",
          "ｔ": "t",
          "ṫ": "t",
          "ẗ": "t",
          "ť": "t",
          "ṭ": "t",
          "ț": "t",
          "ţ": "t",
          "ṱ": "t",
          "ṯ": "t",
          "ŧ": "t",
          "ƭ": "t",
          "ʈ": "t",
          "ⱦ": "t",
          "ꞇ": "t",
          "ꜩ": "tz",
          "ⓤ": "u",
          "ｕ": "u",
          "ù": "u",
          "ú": "u",
          "û": "u",
          "ũ": "u",
          "ṹ": "u",
          "ū": "u",
          "ṻ": "u",
          "ŭ": "u",
          "ü": "u",
          "ǜ": "u",
          "ǘ": "u",
          "ǖ": "u",
          "ǚ": "u",
          "ủ": "u",
          "ů": "u",
          "ű": "u",
          "ǔ": "u",
          "ȕ": "u",
          "ȗ": "u",
          "ư": "u",
          "ừ": "u",
          "ứ": "u",
          "ữ": "u",
          "ử": "u",
          "ự": "u",
          "ụ": "u",
          "ṳ": "u",
          "ų": "u",
          "ṷ": "u",
          "ṵ": "u",
          "ʉ": "u",
          "ⓥ": "v",
          "ｖ": "v",
          "ṽ": "v",
          "ṿ": "v",
          "ʋ": "v",
          "ꝟ": "v",
          "ʌ": "v",
          "ꝡ": "vy",
          "ⓦ": "w",
          "ｗ": "w",
          "ẁ": "w",
          "ẃ": "w",
          "ŵ": "w",
          "ẇ": "w",
          "ẅ": "w",
          "ẘ": "w",
          "ẉ": "w",
          "ⱳ": "w",
          "ⓧ": "x",
          "ｘ": "x",
          "ẋ": "x",
          "ẍ": "x",
          "ⓨ": "y",
          "ｙ": "y",
          "ỳ": "y",
          "ý": "y",
          "ŷ": "y",
          "ỹ": "y",
          "ȳ": "y",
          "ẏ": "y",
          "ÿ": "y",
          "ỷ": "y",
          "ẙ": "y",
          "ỵ": "y",
          "ƴ": "y",
          "ɏ": "y",
          "ỿ": "y",
          "ⓩ": "z",
          "ｚ": "z",
          "ź": "z",
          "ẑ": "z",
          "ż": "z",
          "ž": "z",
          "ẓ": "z",
          "ẕ": "z",
          "ƶ": "z",
          "ȥ": "z",
          "ɀ": "z",
          "ⱬ": "z",
          "ꝣ": "z",
          "Ά": "Α",
          "Έ": "Ε",
          "Ή": "Η",
          "Ί": "Ι",
          "Ϊ": "Ι",
          "Ό": "Ο",
          "Ύ": "Υ",
          "Ϋ": "Υ",
          "Ώ": "Ω",
          "ά": "α",
          "έ": "ε",
          "ή": "η",
          "ί": "ι",
          "ϊ": "ι",
          "ΐ": "ι",
          "ό": "ο",
          "ύ": "υ",
          "ϋ": "υ",
          "ΰ": "υ",
          "ώ": "ω",
          "ς": "σ",
          "’": "'"
        };
      }), e.define("select2/data/base", ["../utils"], function (i) {
        function n(e, t) {
          n.__super__.constructor.call(this);
        }

        return i.Extend(n, i.Observable), n.prototype.current = function (e) {
          throw new Error("The `current` method must be defined in child classes.");
        }, n.prototype.query = function (e, t) {
          throw new Error("The `query` method must be defined in child classes.");
        }, n.prototype.bind = function (e, t) {}, n.prototype.destroy = function () {}, n.prototype.generateResultId = function (e, t) {
          var n = e.id + "-result-";
          return n += i.generateChars(4), null != t.id ? n += "-" + t.id.toString() : n += "-" + i.generateChars(4), n;
        }, n;
      }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, a, l) {
        function n(e, t) {
          this.$element = e, this.options = t, n.__super__.constructor.call(this);
        }

        return a.Extend(n, e), n.prototype.current = function (e) {
          var n = [],
              i = this;
          this.$element.find(":selected").each(function () {
            var e = l(this),
                t = i.item(e);
            n.push(t);
          }), e(n);
        }, n.prototype.select = function (r) {
          var o = this;
          if (r.selected = !0, l(r.element).is("option")) return r.element.selected = !0, void this.$element.trigger("change");
          if (this.$element.prop("multiple")) this.current(function (e) {
            var t = [];
            (r = [r]).push.apply(r, e);

            for (var n = 0; n < r.length; n++) {
              var i = r[n].id;
              -1 === l.inArray(i, t) && t.push(i);
            }

            o.$element.val(t), o.$element.trigger("change");
          });else {
            var e = r.id;
            this.$element.val(e), this.$element.trigger("change");
          }
        }, n.prototype.unselect = function (r) {
          var o = this;

          if (this.$element.prop("multiple")) {
            if (r.selected = !1, l(r.element).is("option")) return r.element.selected = !1, void this.$element.trigger("change");
            this.current(function (e) {
              for (var t = [], n = 0; n < e.length; n++) {
                var i = e[n].id;
                i !== r.id && -1 === l.inArray(i, t) && t.push(i);
              }

              o.$element.val(t), o.$element.trigger("change");
            });
          }
        }, n.prototype.bind = function (e, t) {
          var n = this;
          (this.container = e).on("select", function (e) {
            n.select(e.data);
          }), e.on("unselect", function (e) {
            n.unselect(e.data);
          });
        }, n.prototype.destroy = function () {
          this.$element.find("*").each(function () {
            a.RemoveData(this);
          });
        }, n.prototype.query = function (i, e) {
          var r = [],
              o = this;
          this.$element.children().each(function () {
            var e = l(this);

            if (e.is("option") || e.is("optgroup")) {
              var t = o.item(e),
                  n = o.matches(i, t);
              null !== n && r.push(n);
            }
          }), e({
            results: r
          });
        }, n.prototype.addOptions = function (e) {
          a.appendMany(this.$element, e);
        }, n.prototype.option = function (e) {
          var t;
          e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text, void 0 !== e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);

          var n = l(t),
              i = this._normalizeItem(e);

          return i.element = t, a.StoreData(t, "data", i), n;
        }, n.prototype.item = function (e) {
          var t = {};
          if (null != (t = a.GetData(e[0], "data"))) return t;
          if (e.is("option")) t = {
            id: e.val(),
            text: e.text(),
            disabled: e.prop("disabled"),
            selected: e.prop("selected"),
            title: e.prop("title")
          };else if (e.is("optgroup")) {
            t = {
              text: e.prop("label"),
              children: [],
              title: e.prop("title")
            };

            for (var n = e.children("option"), i = [], r = 0; r < n.length; r++) {
              var o = l(n[r]),
                  s = this.item(o);
              i.push(s);
            }

            t.children = i;
          }
          return (t = this._normalizeItem(t)).element = e[0], a.StoreData(e[0], "data", t), t;
        }, n.prototype._normalizeItem = function (e) {
          e !== Object(e) && (e = {
            id: e,
            text: e
          });
          return null != (e = l.extend({}, {
            text: ""
          }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), l.extend({}, {
            selected: !1,
            disabled: !1
          }, e);
        }, n.prototype.matches = function (e, t) {
          return this.options.get("matcher")(e, t);
        }, n;
      }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, f, g) {
        function i(e, t) {
          this._dataToConvert = t.get("data") || [], i.__super__.constructor.call(this, e, t);
        }

        return f.Extend(i, e), i.prototype.bind = function (e, t) {
          i.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert));
        }, i.prototype.select = function (n) {
          var e = this.$element.find("option").filter(function (e, t) {
            return t.value == n.id.toString();
          });
          0 === e.length && (e = this.option(n), this.addOptions(e)), i.__super__.select.call(this, n);
        }, i.prototype.convertToOptions = function (e) {
          var t = this,
              n = this.$element.find("option"),
              i = n.map(function () {
            return t.item(g(this)).id;
          }).get(),
              r = [];

          function o(e) {
            return function () {
              return g(this).val() == e.id;
            };
          }

          for (var s = 0; s < e.length; s++) {
            var a = this._normalizeItem(e[s]);

            if (0 <= g.inArray(a.id, i)) {
              var l = n.filter(o(a)),
                  c = this.item(l),
                  u = g.extend(!0, {}, a, c),
                  d = this.option(u);
              l.replaceWith(d);
            } else {
              var p = this.option(a);

              if (a.children) {
                var h = this.convertToOptions(a.children);
                f.appendMany(p, h);
              }

              r.push(p);
            }
          }

          return r;
        }, i;
      }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, o) {
        function n(e, t) {
          this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, e, t);
        }

        return t.Extend(n, e), n.prototype._applyDefaults = function (e) {
          var t = {
            data: function data(e) {
              return o.extend({}, e, {
                q: e.term
              });
            },
            transport: function transport(e, t, n) {
              var i = o.ajax(e);
              return i.then(t), i.fail(n), i;
            }
          };
          return o.extend({}, t, e, !0);
        }, n.prototype.processResults = function (e) {
          return e;
        }, n.prototype.query = function (n, i) {
          var r = this;
          null != this._request && (o.isFunction(this._request.abort) && this._request.abort(), this._request = null);
          var t = o.extend({
            type: "GET"
          }, this.ajaxOptions);

          function e() {
            var e = t.transport(t, function (e) {
              var t = r.processResults(e, n);
              r.options.get("debug") && window.console && console.error && (t && t.results && o.isArray(t.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), i(t);
            }, function () {
              "status" in e && (0 === e.status || "0" === e.status) || r.trigger("results:message", {
                message: "errorLoading"
              });
            });
            r._request = e;
          }

          "function" == typeof t.url && (t.url = t.url.call(this.$element, n)), "function" == typeof t.data && (t.data = t.data.call(this.$element, n)), this.ajaxOptions.delay && null != n.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e();
        }, n;
      }), e.define("select2/data/tags", ["jquery"], function (u) {
        function e(e, t, n) {
          var i = n.get("tags"),
              r = n.get("createTag");
          void 0 !== r && (this.createTag = r);
          var o = n.get("insertTag");
          if (void 0 !== o && (this.insertTag = o), e.call(this, t, n), u.isArray(i)) for (var s = 0; s < i.length; s++) {
            var a = i[s],
                l = this._normalizeItem(a),
                c = this.option(l);

            this.$element.append(c);
          }
        }

        return e.prototype.query = function (e, c, u) {
          var d = this;
          this._removeOldTags(), null != c.term && null == c.page ? e.call(this, c, function e(t, n) {
            for (var i = t.results, r = 0; r < i.length; r++) {
              var o = i[r],
                  s = null != o.children && !e({
                results: o.children
              }, !0);
              if ((o.text || "").toUpperCase() === (c.term || "").toUpperCase() || s) return !n && (t.data = i, void u(t));
            }

            if (n) return !0;
            var a = d.createTag(c);

            if (null != a) {
              var l = d.option(a);
              l.attr("data-select2-tag", !0), d.addOptions([l]), d.insertTag(i, a);
            }

            t.results = i, u(t);
          }) : e.call(this, c, u);
        }, e.prototype.createTag = function (e, t) {
          var n = u.trim(t.term);
          return "" === n ? null : {
            id: n,
            text: n
          };
        }, e.prototype.insertTag = function (e, t, n) {
          t.unshift(n);
        }, e.prototype._removeOldTags = function (e) {
          this.$element.find("option[data-select2-tag]").each(function () {
            this.selected || u(this).remove();
          });
        }, e;
      }), e.define("select2/data/tokenizer", ["jquery"], function (d) {
        function e(e, t, n) {
          var i = n.get("tokenizer");
          void 0 !== i && (this.tokenizer = i), e.call(this, t, n);
        }

        return e.prototype.bind = function (e, t, n) {
          e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field");
        }, e.prototype.query = function (e, t, n) {
          var i = this;
          t.term = t.term || "";
          var r = this.tokenizer(t, this.options, function (e) {
            var t = i._normalizeItem(e);

            if (!i.$element.find("option").filter(function () {
              return d(this).val() === t.id;
            }).length) {
              var n = i.option(t);
              n.attr("data-select2-tag", !0), i._removeOldTags(), i.addOptions([n]);
            }

            !function (e) {
              i.trigger("select", {
                data: e
              });
            }(t);
          });
          r.term !== t.term && (this.$search.length && (this.$search.val(r.term), this.$search.trigger("focus")), t.term = r.term), e.call(this, t, n);
        }, e.prototype.tokenizer = function (e, t, n, i) {
          for (var r = n.get("tokenSeparators") || [], o = t.term, s = 0, a = this.createTag || function (e) {
            return {
              id: e.term,
              text: e.term
            };
          }; s < o.length;) {
            var l = o[s];

            if (-1 !== d.inArray(l, r)) {
              var c = o.substr(0, s),
                  u = a(d.extend({}, t, {
                term: c
              }));
              null != u ? (i(u), o = o.substr(s + 1) || "", s = 0) : s++;
            } else s++;
          }

          return {
            term: o
          };
        }, e;
      }), e.define("select2/data/minimumInputLength", [], function () {
        function e(e, t, n) {
          this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n);
        }

        return e.prototype.query = function (e, t, n) {
          t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
            message: "inputTooShort",
            args: {
              minimum: this.minimumInputLength,
              input: t.term,
              params: t
            }
          }) : e.call(this, t, n);
        }, e;
      }), e.define("select2/data/maximumInputLength", [], function () {
        function e(e, t, n) {
          this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n);
        }

        return e.prototype.query = function (e, t, n) {
          t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
            message: "inputTooLong",
            args: {
              maximum: this.maximumInputLength,
              input: t.term,
              params: t
            }
          }) : e.call(this, t, n);
        }, e;
      }), e.define("select2/data/maximumSelectionLength", [], function () {
        function e(e, t, n) {
          this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n);
        }

        return e.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), t.on("select", function () {
            i._checkIfMaximumSelected();
          });
        }, e.prototype.query = function (e, t, n) {
          var i = this;

          this._checkIfMaximumSelected(function () {
            e.call(i, t, n);
          });
        }, e.prototype._checkIfMaximumSelected = function (e, n) {
          var i = this;
          this.current(function (e) {
            var t = null != e ? e.length : 0;
            0 < i.maximumSelectionLength && t >= i.maximumSelectionLength ? i.trigger("results:message", {
              message: "maximumSelected",
              args: {
                maximum: i.maximumSelectionLength
              }
            }) : n && n();
          });
        }, e;
      }), e.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
        function n(e, t) {
          this.$element = e, this.options = t, n.__super__.constructor.call(this);
        }

        return e.Extend(n, e.Observable), n.prototype.render = function () {
          var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
          return e.attr("dir", this.options.get("dir")), this.$dropdown = e;
        }, n.prototype.bind = function () {}, n.prototype.position = function (e, t) {}, n.prototype.destroy = function () {
          this.$dropdown.remove();
        }, n;
      }), e.define("select2/dropdown/search", ["jquery", "../utils"], function (o, e) {
        function t() {}

        return t.prototype.render = function (e) {
          var t = e.call(this),
              n = o('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
          return this.$searchContainer = n, this.$search = n.find("input"), t.prepend(n), t;
        }, t.prototype.bind = function (e, t, n) {
          var i = this,
              r = t.id + "-results";
          e.call(this, t, n), this.$search.on("keydown", function (e) {
            i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented();
          }), this.$search.on("input", function (e) {
            o(this).off("keyup");
          }), this.$search.on("keyup input", function (e) {
            i.handleSearch(e);
          }), t.on("open", function () {
            i.$search.attr("tabindex", 0), i.$search.attr("aria-controls", r), i.$search.trigger("focus"), window.setTimeout(function () {
              i.$search.trigger("focus");
            }, 0);
          }), t.on("close", function () {
            i.$search.attr("tabindex", -1), i.$search.removeAttr("aria-controls"), i.$search.removeAttr("aria-activedescendant"), i.$search.val(""), i.$search.trigger("blur");
          }), t.on("focus", function () {
            t.isOpen() || i.$search.trigger("focus");
          }), t.on("results:all", function (e) {
            null != e.query.term && "" !== e.query.term || (i.showSearch(e) ? i.$searchContainer.removeClass("select2-search--hide") : i.$searchContainer.addClass("select2-search--hide"));
          }), t.on("results:focus", function (e) {
            e.data._resultId ? i.$search.attr("aria-activedescendant", e.data._resultId) : i.$search.removeAttr("aria-activedescendant");
          });
        }, t.prototype.handleSearch = function (e) {
          if (!this._keyUpPrevented) {
            var t = this.$search.val();
            this.trigger("query", {
              term: t
            });
          }

          this._keyUpPrevented = !1;
        }, t.prototype.showSearch = function (e, t) {
          return !0;
        }, t;
      }), e.define("select2/dropdown/hidePlaceholder", [], function () {
        function e(e, t, n, i) {
          this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i);
        }

        return e.prototype.append = function (e, t) {
          t.results = this.removePlaceholder(t.results), e.call(this, t);
        }, e.prototype.normalizePlaceholder = function (e, t) {
          return "string" == typeof t && (t = {
            id: "",
            text: t
          }), t;
        }, e.prototype.removePlaceholder = function (e, t) {
          for (var n = t.slice(0), i = t.length - 1; 0 <= i; i--) {
            var r = t[i];
            this.placeholder.id === r.id && n.splice(i, 1);
          }

          return n;
        }, e;
      }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function (n) {
        function e(e, t, n, i) {
          this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1;
        }

        return e.prototype.append = function (e, t) {
          this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded());
        }, e.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), t.on("query", function (e) {
            i.lastParams = e, i.loading = !0;
          }), t.on("query:append", function (e) {
            i.lastParams = e, i.loading = !0;
          }), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
        }, e.prototype.loadMoreIfNeeded = function () {
          var e = n.contains(document.documentElement, this.$loadingMore[0]);

          if (!this.loading && e) {
            var t = this.$results.offset().top + this.$results.outerHeight(!1);
            this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= t + 50 && this.loadMore();
          }
        }, e.prototype.loadMore = function () {
          this.loading = !0;
          var e = n.extend({}, {
            page: 1
          }, this.lastParams);
          e.page++, this.trigger("query:append", e);
        }, e.prototype.showLoadingMore = function (e, t) {
          return t.pagination && t.pagination.more;
        }, e.prototype.createLoadingMore = function () {
          var e = n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
              t = this.options.get("translations").get("loadingMore");
          return e.html(t(this.lastParams)), e;
        }, e;
      }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (f, a) {
        function e(e, t, n) {
          this.$dropdownParent = f(n.get("dropdownParent") || document.body), e.call(this, t, n);
        }

        return e.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), t.on("open", function () {
            i._showDropdown(), i._attachPositioningHandler(t), i._bindContainerResultHandlers(t);
          }), t.on("close", function () {
            i._hideDropdown(), i._detachPositioningHandler(t);
          }), this.$dropdownContainer.on("mousedown", function (e) {
            e.stopPropagation();
          });
        }, e.prototype.destroy = function (e) {
          e.call(this), this.$dropdownContainer.remove();
        }, e.prototype.position = function (e, t, n) {
          t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
            position: "absolute",
            top: -999999
          }), this.$container = n;
        }, e.prototype.render = function (e) {
          var t = f("<span></span>"),
              n = e.call(this);
          return t.append(n), this.$dropdownContainer = t;
        }, e.prototype._hideDropdown = function (e) {
          this.$dropdownContainer.detach();
        }, e.prototype._bindContainerResultHandlers = function (e, t) {
          if (!this._containerResultsHandlersBound) {
            var n = this;
            t.on("results:all", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("results:append", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("results:message", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("select", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("unselect", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), this._containerResultsHandlersBound = !0;
          }
        }, e.prototype._attachPositioningHandler = function (e, t) {
          var n = this,
              i = "scroll.select2." + t.id,
              r = "resize.select2." + t.id,
              o = "orientationchange.select2." + t.id,
              s = this.$container.parents().filter(a.hasScroll);
          s.each(function () {
            a.StoreData(this, "select2-scroll-position", {
              x: f(this).scrollLeft(),
              y: f(this).scrollTop()
            });
          }), s.on(i, function (e) {
            var t = a.GetData(this, "select2-scroll-position");
            f(this).scrollTop(t.y);
          }), f(window).on(i + " " + r + " " + o, function (e) {
            n._positionDropdown(), n._resizeDropdown();
          });
        }, e.prototype._detachPositioningHandler = function (e, t) {
          var n = "scroll.select2." + t.id,
              i = "resize.select2." + t.id,
              r = "orientationchange.select2." + t.id;
          this.$container.parents().filter(a.hasScroll).off(n), f(window).off(n + " " + i + " " + r);
        }, e.prototype._positionDropdown = function () {
          var e = f(window),
              t = this.$dropdown.hasClass("select2-dropdown--above"),
              n = this.$dropdown.hasClass("select2-dropdown--below"),
              i = null,
              r = this.$container.offset();
          r.bottom = r.top + this.$container.outerHeight(!1);
          var o = {
            height: this.$container.outerHeight(!1)
          };
          o.top = r.top, o.bottom = r.top + o.height;
          var s = this.$dropdown.outerHeight(!1),
              a = e.scrollTop(),
              l = e.scrollTop() + e.height(),
              c = a < r.top - s,
              u = l > r.bottom + s,
              d = {
            left: r.left,
            top: o.bottom
          },
              p = this.$dropdownParent;
          "static" === p.css("position") && (p = p.offsetParent());
          var h = {
            top: 0,
            left: 0
          };
          (f.contains(document.body, p[0]) || p[0].isConnected) && (h = p.offset()), d.top -= h.top, d.left -= h.left, t || n || (i = "below"), u || !c || t ? !c && u && t && (i = "below") : i = "above", ("above" == i || t && "below" !== i) && (d.top = o.top - h.top - s), null != i && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + i), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + i)), this.$dropdownContainer.css(d);
        }, e.prototype._resizeDropdown = function () {
          var e = {
            width: this.$container.outerWidth(!1) + "px"
          };
          this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e);
        }, e.prototype._showDropdown = function (e) {
          this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
        }, e;
      }), e.define("select2/dropdown/minimumResultsForSearch", [], function () {
        function e(e, t, n, i) {
          this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i);
        }

        return e.prototype.showSearch = function (e, t) {
          return !(function e(t) {
            for (var n = 0, i = 0; i < t.length; i++) {
              var r = t[i];
              r.children ? n += e(r.children) : n++;
            }

            return n;
          }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t);
        }, e;
      }), e.define("select2/dropdown/selectOnClose", ["../utils"], function (o) {
        function e() {}

        return e.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), t.on("close", function (e) {
            i._handleSelectOnClose(e);
          });
        }, e.prototype._handleSelectOnClose = function (e, t) {
          if (t && null != t.originalSelect2Event) {
            var n = t.originalSelect2Event;
            if ("select" === n._type || "unselect" === n._type) return;
          }

          var i = this.getHighlightedResults();

          if (!(i.length < 1)) {
            var r = o.GetData(i[0], "data");
            null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", {
              data: r
            });
          }
        }, e;
      }), e.define("select2/dropdown/closeOnSelect", [], function () {
        function e() {}

        return e.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), t.on("select", function (e) {
            i._selectTriggered(e);
          }), t.on("unselect", function (e) {
            i._selectTriggered(e);
          });
        }, e.prototype._selectTriggered = function (e, t) {
          var n = t.originalEvent;
          n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
            originalEvent: n,
            originalSelect2Event: t
          });
        }, e;
      }), e.define("select2/i18n/en", [], function () {
        return {
          errorLoading: function errorLoading() {
            return "The results could not be loaded.";
          },
          inputTooLong: function inputTooLong(e) {
            var t = e.input.length - e.maximum,
                n = "Please delete " + t + " character";
            return 1 != t && (n += "s"), n;
          },
          inputTooShort: function inputTooShort(e) {
            return "Please enter " + (e.minimum - e.input.length) + " or more characters";
          },
          loadingMore: function loadingMore() {
            return "Loading more results…";
          },
          maximumSelected: function maximumSelected(e) {
            var t = "You can only select " + e.maximum + " item";
            return 1 != e.maximum && (t += "s"), t;
          },
          noResults: function noResults() {
            return "No results found";
          },
          searching: function searching() {
            return "Searching…";
          },
          removeAllItems: function removeAllItems() {
            return "Remove all items";
          }
        };
      }), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (c, u, d, p, h, f, g, m, v, y, s, t, _, w, $, b, A, x, S, D, C, E, O, T, q, j, L, I, e) {
        function n() {
          this.reset();
        }

        return n.prototype.apply = function (e) {
          if (null == (e = c.extend(!0, {}, this.defaults, e)).dataAdapter) {
            if (null != e.ajax ? e.dataAdapter = $ : null != e.data ? e.dataAdapter = w : e.dataAdapter = _, 0 < e.minimumInputLength && (e.dataAdapter = y.Decorate(e.dataAdapter, x)), 0 < e.maximumInputLength && (e.dataAdapter = y.Decorate(e.dataAdapter, S)), 0 < e.maximumSelectionLength && (e.dataAdapter = y.Decorate(e.dataAdapter, D)), e.tags && (e.dataAdapter = y.Decorate(e.dataAdapter, b)), null == e.tokenSeparators && null == e.tokenizer || (e.dataAdapter = y.Decorate(e.dataAdapter, A)), null != e.query) {
              var t = u(e.amdBase + "compat/query");
              e.dataAdapter = y.Decorate(e.dataAdapter, t);
            }

            if (null != e.initSelection) {
              var n = u(e.amdBase + "compat/initSelection");
              e.dataAdapter = y.Decorate(e.dataAdapter, n);
            }
          }

          if (null == e.resultsAdapter && (e.resultsAdapter = d, null != e.ajax && (e.resultsAdapter = y.Decorate(e.resultsAdapter, T)), null != e.placeholder && (e.resultsAdapter = y.Decorate(e.resultsAdapter, O)), e.selectOnClose && (e.resultsAdapter = y.Decorate(e.resultsAdapter, L))), null == e.dropdownAdapter) {
            if (e.multiple) e.dropdownAdapter = C;else {
              var i = y.Decorate(C, E);
              e.dropdownAdapter = i;
            }

            if (0 !== e.minimumResultsForSearch && (e.dropdownAdapter = y.Decorate(e.dropdownAdapter, j)), e.closeOnSelect && (e.dropdownAdapter = y.Decorate(e.dropdownAdapter, I)), null != e.dropdownCssClass || null != e.dropdownCss || null != e.adaptDropdownCssClass) {
              var r = u(e.amdBase + "compat/dropdownCss");
              e.dropdownAdapter = y.Decorate(e.dropdownAdapter, r);
            }

            e.dropdownAdapter = y.Decorate(e.dropdownAdapter, q);
          }

          if (null == e.selectionAdapter) {
            if (e.multiple ? e.selectionAdapter = h : e.selectionAdapter = p, null != e.placeholder && (e.selectionAdapter = y.Decorate(e.selectionAdapter, f)), e.allowClear && (e.selectionAdapter = y.Decorate(e.selectionAdapter, g)), e.multiple && (e.selectionAdapter = y.Decorate(e.selectionAdapter, m)), null != e.containerCssClass || null != e.containerCss || null != e.adaptContainerCssClass) {
              var o = u(e.amdBase + "compat/containerCss");
              e.selectionAdapter = y.Decorate(e.selectionAdapter, o);
            }

            e.selectionAdapter = y.Decorate(e.selectionAdapter, v);
          }

          e.language = this._resolveLanguage(e.language), e.language.push("en");

          for (var s = [], a = 0; a < e.language.length; a++) {
            var l = e.language[a];
            -1 === s.indexOf(l) && s.push(l);
          }

          return e.language = s, e.translations = this._processTranslations(e.language, e.debug), e;
        }, n.prototype.reset = function () {
          function a(e) {
            return e.replace(/[^\u0000-\u007E]/g, function (e) {
              return t[e] || e;
            });
          }

          this.defaults = {
            amdBase: "./",
            amdLanguageBase: "./i18n/",
            closeOnSelect: !0,
            debug: !1,
            dropdownAutoWidth: !1,
            escapeMarkup: y.escapeMarkup,
            language: {},
            matcher: function e(t, n) {
              if ("" === c.trim(t.term)) return n;

              if (n.children && 0 < n.children.length) {
                for (var i = c.extend(!0, {}, n), r = n.children.length - 1; 0 <= r; r--) {
                  null == e(t, n.children[r]) && i.children.splice(r, 1);
                }

                return 0 < i.children.length ? i : e(t, i);
              }

              var o = a(n.text).toUpperCase(),
                  s = a(t.term).toUpperCase();
              return -1 < o.indexOf(s) ? n : null;
            },
            minimumInputLength: 0,
            maximumInputLength: 0,
            maximumSelectionLength: 0,
            minimumResultsForSearch: 0,
            selectOnClose: !1,
            scrollAfterSelect: !1,
            sorter: function sorter(e) {
              return e;
            },
            templateResult: function templateResult(e) {
              return e.text;
            },
            templateSelection: function templateSelection(e) {
              return e.text;
            },
            theme: "default",
            width: "resolve"
          };
        }, n.prototype.applyFromElement = function (e, t) {
          var n = e.language,
              i = this.defaults.language,
              r = t.prop("lang"),
              o = t.closest("[lang]").prop("lang"),
              s = Array.prototype.concat.call(this._resolveLanguage(r), this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(o));
          return e.language = s, e;
        }, n.prototype._resolveLanguage = function (e) {
          if (!e) return [];
          if (c.isEmptyObject(e)) return [];
          if (c.isPlainObject(e)) return [e];
          var t;
          t = c.isArray(e) ? e : [e];

          for (var n = [], i = 0; i < t.length; i++) {
            if (n.push(t[i]), "string" == typeof t[i] && 0 < t[i].indexOf("-")) {
              var r = t[i].split("-")[0];
              n.push(r);
            }
          }

          return n;
        }, n.prototype._processTranslations = function (e, t) {
          for (var n = new s(), i = 0; i < e.length; i++) {
            var r = new s(),
                o = e[i];
            if ("string" == typeof o) try {
              r = s.loadPath(o);
            } catch (e) {
              try {
                o = this.defaults.amdLanguageBase + o, r = s.loadPath(o);
              } catch (e) {
                t && window.console && console.warn && console.warn('Select2: The language file for "' + o + '" could not be automatically loaded. A fallback will be used instead.');
              }
            } else r = c.isPlainObject(o) ? new s(o) : o;
            n.extend(r);
          }

          return n;
        }, n.prototype.set = function (e, t) {
          var n = {};
          n[c.camelCase(e)] = t;

          var i = y._convertData(n);

          c.extend(!0, this.defaults, i);
        }, new n();
      }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (i, d, r, p) {
        function e(e, t) {
          if (this.options = e, null != t && this.fromElement(t), null != t && (this.options = r.applyFromElement(this.options, t)), this.options = r.apply(this.options), t && t.is("input")) {
            var n = i(this.get("amdBase") + "compat/inputData");
            this.options.dataAdapter = p.Decorate(this.options.dataAdapter, n);
          }
        }

        return e.prototype.fromElement = function (e) {
          var t = ["select2"];
          null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), p.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), p.StoreData(e[0], "data", p.GetData(e[0], "select2Tags")), p.StoreData(e[0], "tags", !0)), p.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", p.GetData(e[0], "ajaxUrl")), p.StoreData(e[0], "ajax-Url", p.GetData(e[0], "ajaxUrl")));
          var n = {};

          function i(e, t) {
            return t.toUpperCase();
          }

          for (var r = 0; r < e[0].attributes.length; r++) {
            var o = e[0].attributes[r].name,
                s = "data-";

            if (o.substr(0, s.length) == s) {
              var a = o.substring(s.length),
                  l = p.GetData(e[0], a);
              n[a.replace(/-([a-z])/g, i)] = l;
            }
          }

          d.fn.jquery && "1." == d.fn.jquery.substr(0, 2) && e[0].dataset && (n = d.extend(!0, {}, e[0].dataset, n));
          var c = d.extend(!0, {}, p.GetData(e[0]), n);

          for (var u in c = p._convertData(c)) {
            -1 < d.inArray(u, t) || (d.isPlainObject(this.options[u]) ? d.extend(this.options[u], c[u]) : this.options[u] = c[u]);
          }

          return this;
        }, e.prototype.get = function (e) {
          return this.options[e];
        }, e.prototype.set = function (e, t) {
          this.options[e] = t;
        }, e;
      }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (r, c, u, i) {
        var d = function d(e, t) {
          null != u.GetData(e[0], "select2") && u.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), t = t || {}, this.options = new c(t, e), d.__super__.constructor.call(this);
          var n = e.attr("tabindex") || 0;
          u.StoreData(e[0], "old-tabindex", n), e.attr("tabindex", "-1");
          var i = this.options.get("dataAdapter");
          this.dataAdapter = new i(e, this.options);
          var r = this.render();

          this._placeContainer(r);

          var o = this.options.get("selectionAdapter");
          this.selection = new o(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, r);
          var s = this.options.get("dropdownAdapter");
          this.dropdown = new s(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, r);
          var a = this.options.get("resultsAdapter");
          this.results = new a(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
          var l = this;
          this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) {
            l.trigger("selection:update", {
              data: e
            });
          }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), u.StoreData(e[0], "select2", this), e.data("select2", this);
        };

        return u.Extend(d, u.Observable), d.prototype._generateId = function (e) {
          return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + u.generateChars(2) : u.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "");
        }, d.prototype._placeContainer = function (e) {
          e.insertAfter(this.$element);

          var t = this._resolveWidth(this.$element, this.options.get("width"));

          null != t && e.css("width", t);
        }, d.prototype._resolveWidth = function (e, t) {
          var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

          if ("resolve" == t) {
            var i = this._resolveWidth(e, "style");

            return null != i ? i : this._resolveWidth(e, "element");
          }

          if ("element" == t) {
            var r = e.outerWidth(!1);
            return r <= 0 ? "auto" : r + "px";
          }

          if ("style" != t) return "computedstyle" != t ? t : window.getComputedStyle(e[0]).width;
          var o = e.attr("style");
          if ("string" != typeof o) return null;

          for (var s = o.split(";"), a = 0, l = s.length; a < l; a += 1) {
            var c = s[a].replace(/\s/g, "").match(n);
            if (null !== c && 1 <= c.length) return c[1];
          }

          return null;
        }, d.prototype._bindAdapters = function () {
          this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
        }, d.prototype._registerDomEvents = function () {
          var t = this;
          this.$element.on("change.select2", function () {
            t.dataAdapter.current(function (e) {
              t.trigger("selection:update", {
                data: e
              });
            });
          }), this.$element.on("focus.select2", function (e) {
            t.trigger("focus", e);
          }), this._syncA = u.bind(this._syncAttributes, this), this._syncS = u.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
          var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
          null != e ? (this._observer = new e(function (e) {
            r.each(e, t._syncA), r.each(e, t._syncS);
          }), this._observer.observe(this.$element[0], {
            attributes: !0,
            childList: !0,
            subtree: !1
          })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1));
        }, d.prototype._registerDataEvents = function () {
          var n = this;
          this.dataAdapter.on("*", function (e, t) {
            n.trigger(e, t);
          });
        }, d.prototype._registerSelectionEvents = function () {
          var n = this,
              i = ["toggle", "focus"];
          this.selection.on("toggle", function () {
            n.toggleDropdown();
          }), this.selection.on("focus", function (e) {
            n.focus(e);
          }), this.selection.on("*", function (e, t) {
            -1 === r.inArray(e, i) && n.trigger(e, t);
          });
        }, d.prototype._registerDropdownEvents = function () {
          var n = this;
          this.dropdown.on("*", function (e, t) {
            n.trigger(e, t);
          });
        }, d.prototype._registerResultsEvents = function () {
          var n = this;
          this.results.on("*", function (e, t) {
            n.trigger(e, t);
          });
        }, d.prototype._registerEvents = function () {
          var n = this;
          this.on("open", function () {
            n.$container.addClass("select2-container--open");
          }), this.on("close", function () {
            n.$container.removeClass("select2-container--open");
          }), this.on("enable", function () {
            n.$container.removeClass("select2-container--disabled");
          }), this.on("disable", function () {
            n.$container.addClass("select2-container--disabled");
          }), this.on("blur", function () {
            n.$container.removeClass("select2-container--focus");
          }), this.on("query", function (t) {
            n.isOpen() || n.trigger("open", {}), this.dataAdapter.query(t, function (e) {
              n.trigger("results:all", {
                data: e,
                query: t
              });
            });
          }), this.on("query:append", function (t) {
            this.dataAdapter.query(t, function (e) {
              n.trigger("results:append", {
                data: e,
                query: t
              });
            });
          }), this.on("keypress", function (e) {
            var t = e.which;
            n.isOpen() ? t === i.ESC || t === i.TAB || t === i.UP && e.altKey ? (n.close(), e.preventDefault()) : t === i.ENTER ? (n.trigger("results:select", {}), e.preventDefault()) : t === i.SPACE && e.ctrlKey ? (n.trigger("results:toggle", {}), e.preventDefault()) : t === i.UP ? (n.trigger("results:previous", {}), e.preventDefault()) : t === i.DOWN && (n.trigger("results:next", {}), e.preventDefault()) : (t === i.ENTER || t === i.SPACE || t === i.DOWN && e.altKey) && (n.open(), e.preventDefault());
          });
        }, d.prototype._syncAttributes = function () {
          this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
        }, d.prototype._syncSubtree = function (e, t) {
          var n = !1,
              i = this;

          if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
            if (t) {
              if (t.addedNodes && 0 < t.addedNodes.length) for (var r = 0; r < t.addedNodes.length; r++) {
                t.addedNodes[r].selected && (n = !0);
              } else t.removedNodes && 0 < t.removedNodes.length && (n = !0);
            } else n = !0;
            n && this.dataAdapter.current(function (e) {
              i.trigger("selection:update", {
                data: e
              });
            });
          }
        }, d.prototype.trigger = function (e, t) {
          var n = d.__super__.trigger,
              i = {
            open: "opening",
            close: "closing",
            select: "selecting",
            unselect: "unselecting",
            clear: "clearing"
          };

          if (void 0 === t && (t = {}), e in i) {
            var r = i[e],
                o = {
              prevented: !1,
              name: e,
              args: t
            };
            if (n.call(this, r, o), o.prevented) return void (t.prevented = !0);
          }

          n.call(this, e, t);
        }, d.prototype.toggleDropdown = function () {
          this.options.get("disabled") || (this.isOpen() ? this.close() : this.open());
        }, d.prototype.open = function () {
          this.isOpen() || this.trigger("query", {});
        }, d.prototype.close = function () {
          this.isOpen() && this.trigger("close", {});
        }, d.prototype.isOpen = function () {
          return this.$container.hasClass("select2-container--open");
        }, d.prototype.hasFocus = function () {
          return this.$container.hasClass("select2-container--focus");
        }, d.prototype.focus = function (e) {
          this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
        }, d.prototype.enable = function (e) {
          this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
          var t = !e[0];
          this.$element.prop("disabled", t);
        }, d.prototype.data = function () {
          this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
          var t = [];
          return this.dataAdapter.current(function (e) {
            t = e;
          }), t;
        }, d.prototype.val = function (e) {
          if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
          var t = e[0];
          r.isArray(t) && (t = r.map(t, function (e) {
            return e.toString();
          })), this.$element.val(t).trigger("change");
        }, d.prototype.destroy = function () {
          this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", u.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), u.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
        }, d.prototype.render = function () {
          var e = r('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
          return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), u.StoreData(e[0], "element", this.$element), e;
        }, d;
      }), e.define("select2/compat/utils", ["jquery"], function (s) {
        return {
          syncCssClasses: function syncCssClasses(e, t, n) {
            var i,
                r,
                o = [];
            (i = s.trim(e.attr("class"))) && s((i = "" + i).split(/\s+/)).each(function () {
              0 === this.indexOf("select2-") && o.push(this);
            }), (i = s.trim(t.attr("class"))) && s((i = "" + i).split(/\s+/)).each(function () {
              0 !== this.indexOf("select2-") && null != (r = n(this)) && o.push(r);
            }), e.attr("class", o.join(" "));
          }
        };
      }), e.define("select2/compat/containerCss", ["jquery", "./utils"], function (s, a) {
        function l(e) {
          return null;
        }

        function e() {}

        return e.prototype.render = function (e) {
          var t = e.call(this),
              n = this.options.get("containerCssClass") || "";
          s.isFunction(n) && (n = n(this.$element));
          var i = this.options.get("adaptContainerCssClass");

          if (i = i || l, -1 !== n.indexOf(":all:")) {
            n = n.replace(":all:", "");
            var r = i;

            i = function i(e) {
              var t = r(e);
              return null != t ? t + " " + e : e;
            };
          }

          var o = this.options.get("containerCss") || {};
          return s.isFunction(o) && (o = o(this.$element)), a.syncCssClasses(t, this.$element, i), t.css(o), t.addClass(n), t;
        }, e;
      }), e.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (s, a) {
        function l(e) {
          return null;
        }

        function e() {}

        return e.prototype.render = function (e) {
          var t = e.call(this),
              n = this.options.get("dropdownCssClass") || "";
          s.isFunction(n) && (n = n(this.$element));
          var i = this.options.get("adaptDropdownCssClass");

          if (i = i || l, -1 !== n.indexOf(":all:")) {
            n = n.replace(":all:", "");
            var r = i;

            i = function i(e) {
              var t = r(e);
              return null != t ? t + " " + e : e;
            };
          }

          var o = this.options.get("dropdownCss") || {};
          return s.isFunction(o) && (o = o(this.$element)), a.syncCssClasses(t, this.$element, i), t.css(o), t.addClass(n), t;
        }, e;
      }), e.define("select2/compat/initSelection", ["jquery"], function (i) {
        function e(e, t, n) {
          n.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = n.get("initSelection"), this._isInitialized = !1, e.call(this, t, n);
        }

        return e.prototype.current = function (e, t) {
          var n = this;
          this._isInitialized ? e.call(this, t) : this.initSelection.call(null, this.$element, function (e) {
            n._isInitialized = !0, i.isArray(e) || (e = [e]), t(e);
          });
        }, e;
      }), e.define("select2/compat/inputData", ["jquery", "../utils"], function (s, i) {
        function e(e, t, n) {
          this._currentData = [], this._valueSeparator = n.get("valueSeparator") || ",", "hidden" === t.prop("type") && n.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), e.call(this, t, n);
        }

        return e.prototype.current = function (e, t) {
          function i(e, t) {
            var n = [];
            return e.selected || -1 !== s.inArray(e.id, t) ? (e.selected = !0, n.push(e)) : e.selected = !1, e.children && n.push.apply(n, i(e.children, t)), n;
          }

          for (var n = [], r = 0; r < this._currentData.length; r++) {
            var o = this._currentData[r];
            n.push.apply(n, i(o, this.$element.val().split(this._valueSeparator)));
          }

          t(n);
        }, e.prototype.select = function (e, t) {
          if (this.options.get("multiple")) {
            var n = this.$element.val();
            n += this._valueSeparator + t.id, this.$element.val(n), this.$element.trigger("change");
          } else this.current(function (e) {
            s.map(e, function (e) {
              e.selected = !1;
            });
          }), this.$element.val(t.id), this.$element.trigger("change");
        }, e.prototype.unselect = function (e, r) {
          var o = this;
          r.selected = !1, this.current(function (e) {
            for (var t = [], n = 0; n < e.length; n++) {
              var i = e[n];
              r.id != i.id && t.push(i.id);
            }

            o.$element.val(t.join(o._valueSeparator)), o.$element.trigger("change");
          });
        }, e.prototype.query = function (e, t, n) {
          for (var i = [], r = 0; r < this._currentData.length; r++) {
            var o = this._currentData[r],
                s = this.matches(t, o);
            null !== s && i.push(s);
          }

          n({
            results: i
          });
        }, e.prototype.addOptions = function (e, t) {
          var n = s.map(t, function (e) {
            return i.GetData(e[0], "data");
          });

          this._currentData.push.apply(this._currentData, n);
        }, e;
      }), e.define("select2/compat/matcher", ["jquery"], function (s) {
        return function (o) {
          return function (e, t) {
            var n = s.extend(!0, {}, t);
            if (null == e.term || "" === s.trim(e.term)) return n;

            if (t.children) {
              for (var i = t.children.length - 1; 0 <= i; i--) {
                var r = t.children[i];
                o(e.term, r.text, r) || n.children.splice(i, 1);
              }

              if (0 < n.children.length) return n;
            }

            return o(e.term, t.text, t) ? n : null;
          };
        };
      }), e.define("select2/compat/query", [], function () {
        function e(e, t, n) {
          n.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), e.call(this, t, n);
        }

        return e.prototype.query = function (e, t, n) {
          t.callback = n, this.options.get("query").call(null, t);
        }, e;
      }), e.define("select2/dropdown/attachContainer", [], function () {
        function e(e, t, n) {
          e.call(this, t, n);
        }

        return e.prototype.position = function (e, t, n) {
          n.find(".dropdown-wrapper").append(t), t.addClass("select2-dropdown--below"), n.addClass("select2-container--below");
        }, e;
      }), e.define("select2/dropdown/stopPropagation", [], function () {
        function e() {}

        return e.prototype.bind = function (e, t, n) {
          e.call(this, t, n);
          this.$dropdown.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), function (e) {
            e.stopPropagation();
          });
        }, e;
      }), e.define("select2/selection/stopPropagation", [], function () {
        function e() {}

        return e.prototype.bind = function (e, t, n) {
          e.call(this, t, n);
          this.$selection.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), function (e) {
            e.stopPropagation();
          });
        }, e;
      }), l = function l(p) {
        var h,
            f,
            e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            t = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            g = Array.prototype.slice;
        if (p.event.fixHooks) for (var n = e.length; n;) {
          p.event.fixHooks[e[--n]] = p.event.mouseHooks;
        }
        var m = p.event.special.mousewheel = {
          version: "3.1.12",
          setup: function setup() {
            if (this.addEventListener) for (var e = t.length; e;) {
              this.addEventListener(t[--e], i, !1);
            } else this.onmousewheel = i;
            p.data(this, "mousewheel-line-height", m.getLineHeight(this)), p.data(this, "mousewheel-page-height", m.getPageHeight(this));
          },
          teardown: function teardown() {
            if (this.removeEventListener) for (var e = t.length; e;) {
              this.removeEventListener(t[--e], i, !1);
            } else this.onmousewheel = null;
            p.removeData(this, "mousewheel-line-height"), p.removeData(this, "mousewheel-page-height");
          },
          getLineHeight: function getLineHeight(e) {
            var t = p(e),
                n = t["offsetParent" in p.fn ? "offsetParent" : "parent"]();
            return n.length || (n = p("body")), parseInt(n.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16;
          },
          getPageHeight: function getPageHeight(e) {
            return p(e).height();
          },
          settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
          }
        };

        function i(e) {
          var t,
              n = e || window.event,
              i = g.call(arguments, 1),
              r = 0,
              o = 0,
              s = 0,
              a = 0,
              l = 0;

          if ((e = p.event.fix(n)).type = "mousewheel", "detail" in n && (s = -1 * n.detail), "wheelDelta" in n && (s = n.wheelDelta), "wheelDeltaY" in n && (s = n.wheelDeltaY), "wheelDeltaX" in n && (o = -1 * n.wheelDeltaX), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (o = -1 * s, s = 0), r = 0 === s ? o : s, "deltaY" in n && (r = s = -1 * n.deltaY), "deltaX" in n && (o = n.deltaX, 0 === s && (r = -1 * o)), 0 !== s || 0 !== o) {
            if (1 === n.deltaMode) {
              var c = p.data(this, "mousewheel-line-height");
              r *= c, s *= c, o *= c;
            } else if (2 === n.deltaMode) {
              var u = p.data(this, "mousewheel-page-height");
              r *= u, s *= u, o *= u;
            }

            if (t = Math.max(Math.abs(s), Math.abs(o)), (!f || t < f) && y(n, f = t) && (f /= 40), y(n, t) && (r /= 40, o /= 40, s /= 40), r = Math[1 <= r ? "floor" : "ceil"](r / f), o = Math[1 <= o ? "floor" : "ceil"](o / f), s = Math[1 <= s ? "floor" : "ceil"](s / f), m.settings.normalizeOffset && this.getBoundingClientRect) {
              var d = this.getBoundingClientRect();
              a = e.clientX - d.left, l = e.clientY - d.top;
            }

            return e.deltaX = o, e.deltaY = s, e.deltaFactor = f, e.offsetX = a, e.offsetY = l, e.deltaMode = 0, i.unshift(e, r, o, s), h && clearTimeout(h), h = setTimeout(v, 200), (p.event.dispatch || p.event.handle).apply(this, i);
          }
        }

        function v() {
          f = null;
        }

        function y(e, t) {
          return m.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0;
        }

        p.fn.extend({
          mousewheel: function mousewheel(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
          },
          unmousewheel: function unmousewheel(e) {
            return this.unbind("mousewheel", e);
          }
        });
      }, "function" == typeof e.define && e.define.amd ? e.define("jquery-mousewheel", ["jquery"], l) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = l : l(d), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (r, e, o, t, s) {
        if (null == r.fn.select2) {
          var a = ["open", "close", "destroy"];

          r.fn.select2 = function (t) {
            if ("object" == _typeof(t = t || {})) return this.each(function () {
              var e = r.extend(!0, {}, t);
              new o(r(this), e);
            }), this;
            if ("string" != typeof t) throw new Error("Invalid arguments for Select2: " + t);
            var n,
                i = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
              var e = s.GetData(this, "select2");
              null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), n = e[t].apply(e, i);
            }), -1 < r.inArray(t, a) ? this : n;
          };
        }

        return null == r.fn.select2.defaults && (r.fn.select2.defaults = t), o;
      }), {
        define: e.define,
        require: e.require
      };
    }(),
        t = e.require("jquery.select2");

    return d.fn.select2.amd = e, t;
  });
  /**
   * Owl Carousel v2.3.4
   * Copyright 2013-2018 David Deutsch
   * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
   */

  !function (a, b, c, d) {
    function e(b, c) {
      this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: {
          start: null,
          current: null
        },
        direction: null
      }, this._states = {
        current: {},
        tags: {
          initializing: ["busy"],
          animating: ["busy"],
          dragging: ["interacting"]
        }
      }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
        this._handlers[c] = a.proxy(this[c], this);
      }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
        this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
      }, this)), a.each(e.Workers, a.proxy(function (b, c) {
        this._pipe.push({
          filter: c.filter,
          run: a.proxy(c.run, this)
        });
      }, this)), this.setup(), this.initialize();
    }

    e.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      rewind: !1,
      checkVisibility: !0,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: b,
      fallbackEasing: "swing",
      slideTransition: "",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      refreshClass: "owl-refresh",
      loadedClass: "owl-loaded",
      loadingClass: "owl-loading",
      rtlClass: "owl-rtl",
      responsiveClass: "owl-responsive",
      dragClass: "owl-drag",
      itemClass: "owl-item",
      stageClass: "owl-stage",
      stageOuterClass: "owl-stage-outer",
      grabClass: "owl-grab"
    }, e.Width = {
      Default: "default",
      Inner: "inner",
      Outer: "outer"
    }, e.Type = {
      Event: "event",
      State: "state"
    }, e.Plugins = {}, e.Workers = [{
      filter: ["width", "settings"],
      run: function run() {
        this._width = this.$element.width();
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function run(a) {
        a.current = this._items && this._items[this.relative(this._current)];
      }
    }, {
      filter: ["items", "settings"],
      run: function run() {
        this.$stage.children(".cloned").remove();
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function run(a) {
        var b = this.settings.margin || "",
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = {
          width: "auto",
          "margin-left": d ? b : "",
          "margin-right": d ? "" : b
        };
        !c && this.$stage.children().css(e), a.css = e;
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function run(a) {
        var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = [];

        for (a.items = {
          merge: !1,
          width: b
        }; d--;) {
          c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
        }

        this._widths = f;
      }
    }, {
      filter: ["items", "settings"],
      run: function run() {
        var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
            h = "",
            i = "";

        for (g /= 2; g > 0;) {
          b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;
        }

        this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function run() {
        for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) {
          d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
        }

        this._coordinates = f;
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function run() {
        var a = this.settings.stagePadding,
            b = this._coordinates,
            c = {
          width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
          "padding-left": a || "",
          "padding-right": a || ""
        };
        this.$stage.css(c);
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function run(a) {
        var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children();
        if (c && a.items.merge) for (; b--;) {
          a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
        } else c && (a.css.width = a.items.width, d.css(a.css));
      }
    }, {
      filter: ["items"],
      run: function run() {
        this._coordinates.length < 1 && this.$stage.removeAttr("style");
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function run(a) {
        a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current);
      }
    }, {
      filter: ["position"],
      run: function run() {
        this.animate(this.coordinates(this._current));
      }
    }, {
      filter: ["width", "position", "items", "settings"],
      run: function run() {
        var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];

        for (c = 0, d = this._coordinates.length; c < d; c++) {
          a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
        }

        this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
      }
    }], e.prototype.initializeStage = function () {
      this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ">", {
        "class": this.settings.stageClass
      }).wrap(a("<div/>", {
        "class": this.settings.stageOuterClass
      })), this.$element.append(this.$stage.parent()));
    }, e.prototype.initializeItems = function () {
      var b = this.$element.find(".owl-item");
      if (b.length) return this._items = b.get().map(function (b) {
        return a(b);
      }), this._mergers = this._items.map(function () {
        return 1;
      }), void this.refresh();
      this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
    }, e.prototype.initialize = function () {
      if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
        var a, b, c;
        a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a);
      }

      this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
    }, e.prototype.isVisible = function () {
      return !this.settings.checkVisibility || this.$element.is(":visible");
    }, e.prototype.setup = function () {
      var b = this.viewport(),
          c = this.options.responsive,
          d = -1,
          e = null;
      c ? (a.each(c, function (a) {
        a <= b && a > d && (d = Number(a));
      }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
        property: {
          name: "settings",
          value: e
        }
      }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
        property: {
          name: "settings",
          value: this.settings
        }
      });
    }, e.prototype.optionsLogic = function () {
      this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
    }, e.prototype.prepare = function (b) {
      var c = this.trigger("prepare", {
        content: b
      });
      return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
        content: c.data
      }), c.data;
    }, e.prototype.update = function () {
      for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
        return this[a];
      }, this._invalidated), e = {}; b < c;) {
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
      }

      this._invalidated = {}, !this.is("valid") && this.enter("valid");
    }, e.prototype.width = function (a) {
      switch (a = a || e.Width.Default) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;

        default:
          return this._width - 2 * this.settings.stagePadding + this.settings.margin;
      }
    }, e.prototype.refresh = function () {
      this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed");
    }, e.prototype.onThrottledResize = function () {
      b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    }, e.prototype.onResize = function () {
      return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")));
    }, e.prototype.registerEventHandlers = function () {
      a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
        return !1;
      })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
    }, e.prototype.onDragStart = function (b) {
      var d = null;
      3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
        x: d[16 === d.length ? 12 : 4],
        y: d[16 === d.length ? 13 : 5]
      }) : (d = this.$stage.position(), d = {
        x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
        y: d.top
      }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
        var d = this.difference(this._drag.pointer, this.pointer(b));
        a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
      }, this)));
    }, e.prototype.onDragMove = function (a) {
      var b = null,
          c = null,
          d = null,
          e = this.difference(this._drag.pointer, this.pointer(a)),
          f = this.difference(this._drag.stage.start, e);
      this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x));
    }, e.prototype.onDragEnd = function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
          e = this._drag.stage.current,
          f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
      a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
        return !1;
      })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
    }, e.prototype.closest = function (b, c) {
      var e = -1,
          f = 30,
          g = this.width(),
          h = this.coordinates();
      return this.settings.freeDrag || a.each(h, a.proxy(function (a, i) {
        return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e;
      }, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e;
    }, e.prototype.animate = function (b) {
      var c = this.speed() > 0;
      this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
        transform: "translate3d(" + b + "px,0px,0px)",
        transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
      }) : c ? this.$stage.animate({
        left: b + "px"
      }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
        left: b + "px"
      });
    }, e.prototype.is = function (a) {
      return this._states.current[a] && this._states.current[a] > 0;
    }, e.prototype.current = function (a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;

      if (a = this.normalize(a), this._current !== a) {
        var b = this.trigger("change", {
          property: {
            name: "position",
            value: a
          }
        });
        b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
          property: {
            name: "position",
            value: this._current
          }
        });
      }

      return this._current;
    }, e.prototype.invalidate = function (b) {
      return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
        return b;
      });
    }, e.prototype.reset = function (a) {
      (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
    }, e.prototype.normalize = function (a, b) {
      var c = this._items.length,
          e = b ? 0 : this._clones.length;
      return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a;
    }, e.prototype.relative = function (a) {
      return a -= this._clones.length / 2, this.normalize(a, !0);
    }, e.prototype.maximum = function (a) {
      var b,
          c,
          d,
          e = this.settings,
          f = this._coordinates.length;
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1;else if (e.autoWidth || e.merge) {
        if (b = this._items.length) for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d);) {
          ;
        }
        f = b + 1;
      } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
      return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }, e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2;
    }, e.prototype.items = function (a) {
      return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]);
    }, e.prototype.mergers = function (a) {
      return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]);
    }, e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
          e = c + this._items.length,
          f = function f(a) {
        return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
      };

      return b === d ? a.map(this._clones, function (a, b) {
        return f(b);
      }) : a.map(this._clones, function (a, c) {
        return a === b ? f(c) : null;
      });
    }, e.prototype.speed = function (a) {
      return a !== d && (this._speed = a), this._speed;
    }, e.prototype.coordinates = function (b) {
      var c,
          e = 1,
          f = b - 1;
      return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
        return this.coordinates(b);
      }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c));
    }, e.prototype.duration = function (a, b, c) {
      return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
    }, e.prototype.to = function (a, b) {
      var c = this.current(),
          d = null,
          e = a - this.relative(c),
          f = (e > 0) - (e < 0),
          g = this._items.length,
          h = this.minimum(),
          i = this.maximum();
      this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update();
    }, e.prototype.next = function (a) {
      a = a || !1, this.to(this.relative(this.current()) + 1, a);
    }, e.prototype.prev = function (a) {
      a = a || !1, this.to(this.relative(this.current()) - 1, a);
    }, e.prototype.onTransitionEnd = function (a) {
      if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
      this.leave("animating"), this.trigger("translated");
    }, e.prototype.viewport = function () {
      var d;
      return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d;
    }, e.prototype.replace = function (b) {
      this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
        return 1 === this.nodeType;
      }).each(a.proxy(function (a, b) {
        b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
      }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
    }, e.prototype.add = function (b, c) {
      var e = this.relative(this._current);
      c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
        content: b,
        position: c
      }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
        content: b,
        position: c
      });
    }, e.prototype.remove = function (a) {
      (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
        content: this._items[a],
        position: a
      }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
        content: null,
        position: a
      }));
    }, e.prototype.preloadAutoWidthImages = function (b) {
      b.each(a.proxy(function (b, c) {
        this.enter("pre-loading"), c = a(c), a(new Image()).one("load", a.proxy(function (a) {
          c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
        }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
      }, this));
    }, e.prototype.destroy = function () {
      this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));

      for (var d in this._plugins) {
        this._plugins[d].destroy();
      }

      this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
    }, e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl;

      switch (b) {
        case "<":
          return d ? a > c : a < c;

        case ">":
          return d ? a < c : a > c;

        case ">=":
          return d ? a <= c : a >= c;

        case "<=":
          return d ? a >= c : a <= c;
      }
    }, e.prototype.on = function (a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
    }, e.prototype.off = function (a, b, c, d) {
      a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
    }, e.prototype.trigger = function (b, c, d, f, g) {
      var h = {
        item: {
          count: this._items.length,
          index: this.current()
        }
      },
          i = a.camelCase(a.grep(["on", b, d], function (a) {
        return a;
      }).join("-").toLowerCase()),
          j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
        relatedTarget: this
      }, h, c));
      return this._supress[b] || (a.each(this._plugins, function (a, b) {
        b.onTrigger && b.onTrigger(j);
      }), this.register({
        type: e.Type.Event,
        name: b
      }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j;
    }, e.prototype.enter = function (b) {
      a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
        this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
      }, this));
    }, e.prototype.leave = function (b) {
      a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
        this._states.current[b]--;
      }, this));
    }, e.prototype.register = function (b) {
      if (b.type === e.Type.Event) {
        if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
          var c = a.event.special[b.name]._default;
          a.event.special[b.name]._default = function (a) {
            return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
          }, a.event.special[b.name].owl = !0;
        }
      } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
        return a.inArray(c, this._states.tags[b.name]) === d;
      }, this)));
    }, e.prototype.suppress = function (b) {
      a.each(b, a.proxy(function (a, b) {
        this._supress[b] = !0;
      }, this));
    }, e.prototype.release = function (b) {
      a.each(b, a.proxy(function (a, b) {
        delete this._supress[b];
      }, this));
    }, e.prototype.pointer = function (a) {
      var c = {
        x: null,
        y: null
      };
      return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c;
    }, e.prototype.isNumeric = function (a) {
      return !isNaN(parseFloat(a));
    }, e.prototype.difference = function (a, b) {
      return {
        x: a.x - b.x,
        y: a.y - b.y
      };
    }, a.fn.owlCarousel = function (b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var d = a(this),
            f = d.data("owl.carousel");
        f || (f = new e(this, "object" == _typeof(b) && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
          f.register({
            type: e.Type.Event,
            name: c
          }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
            a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
          }, f));
        })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
      });
    }, a.fn.owlCarousel.Constructor = e;
  }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
      this._core = b, this._interval = null, this._visible = null, this._handlers = {
        "initialized.owl.carousel": a.proxy(function (a) {
          a.namespace && this._core.settings.autoRefresh && this.watch();
        }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };

    e.Defaults = {
      autoRefresh: !0,
      autoRefreshInterval: 500
    }, e.prototype.watch = function () {
      this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
    }, e.prototype.refresh = function () {
      this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
    }, e.prototype.destroy = function () {
      var a, c;
      b.clearInterval(this._interval);

      for (a in this._handlers) {
        this._core.$element.off(a, this._handlers[a]);
      }

      for (c in Object.getOwnPropertyNames(this)) {
        "function" != typeof this[c] && (this[c] = null);
      }
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e;
  }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
      this._core = b, this._loaded = [], this._handlers = {
        "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
          if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
            var c = this._core.settings,
                e = c.center && Math.ceil(c.items / 2) || c.items,
                f = c.center && -1 * e || 0,
                g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
                h = this._core.clones().length,
                i = a.proxy(function (a, b) {
              this.load(b);
            }, this);

            for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager, c.loop && (g -= c.lazyLoadEager, e++)); f++ < e;) {
              this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
            }
          }
        }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };

    e.Defaults = {
      lazyLoad: !1,
      lazyLoadEager: 0
    }, e.prototype.load = function (c) {
      var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");

      !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
        var e,
            f = a(d),
            g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
        this._core.trigger("load", {
          element: f,
          url: g
        }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
          f.css("opacity", 1), this._core.trigger("loaded", {
            element: f,
            url: g
          }, "lazy");
        }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function () {
          this._core.trigger("loaded", {
            element: f,
            url: g
          }, "lazy");
        }, this)).attr("srcset", g) : (e = new Image(), e.onload = a.proxy(function () {
          f.css({
            "background-image": 'url("' + g + '")',
            opacity: "1"
          }), this._core.trigger("loaded", {
            element: f,
            url: g
          }, "lazy");
        }, this), e.src = g);
      }, this)), this._loaded.push(d.get(0)));
    }, e.prototype.destroy = function () {
      var a, b;

      for (a in this.handlers) {
        this._core.$element.off(a, this.handlers[a]);
      }

      for (b in Object.getOwnPropertyNames(this)) {
        "function" != typeof this[b] && (this[b] = null);
      }
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e;
  }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(c) {
      this._core = c, this._previousHeight = null, this._handlers = {
        "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
          a.namespace && this._core.settings.autoHeight && this.update();
        }, this),
        "changed.owl.carousel": a.proxy(function (a) {
          a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update();
        }, this),
        "loaded.owl.lazy": a.proxy(function (a) {
          a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
        }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
      var d = this;
      a(b).on("load", function () {
        d._core.settings.autoHeight && d.update();
      }), a(b).resize(function () {
        d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function () {
          d.update();
        }, 250));
      });
    };

    e.Defaults = {
      autoHeight: !1,
      autoHeightClass: "owl-height"
    }, e.prototype.update = function () {
      var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.settings.lazyLoad,
          e = this._core.$stage.children().toArray().slice(b, c),
          f = [],
          g = 0;

      a.each(e, function (b, c) {
        f.push(a(c).height());
      }), g = Math.max.apply(null, f), g <= 1 && d && this._previousHeight && (g = this._previousHeight), this._previousHeight = g, this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass);
    }, e.prototype.destroy = function () {
      var a, b;

      for (a in this._handlers) {
        this._core.$element.off(a, this._handlers[a]);
      }

      for (b in Object.getOwnPropertyNames(this)) {
        "function" != typeof this[b] && (this[b] = null);
      }
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e;
  }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
      this._core = b, this._videos = {}, this._playing = null, this._handlers = {
        "initialized.owl.carousel": a.proxy(function (a) {
          a.namespace && this._core.register({
            type: "state",
            name: "playing",
            tags: ["interacting"]
          });
        }, this),
        "resize.owl.carousel": a.proxy(function (a) {
          a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
        }, this),
        "refreshed.owl.carousel": a.proxy(function (a) {
          a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
        }, this),
        "changed.owl.carousel": a.proxy(function (a) {
          a.namespace && "position" === a.property.name && this._playing && this.stop();
        }, this),
        "prepared.owl.carousel": a.proxy(function (b) {
          if (b.namespace) {
            var c = a(b.content).find(".owl-video");
            c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
          }
        }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
        this.play(a);
      }, this));
    };

    e.Defaults = {
      video: !1,
      videoHeight: !1,
      videoWidth: !1
    }, e.prototype.fetch = function (a, b) {
      var c = function () {
        return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
      }(),
          d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");

      if (!g) throw new Error("Missing video URL.");
      if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";else if (d[3].indexOf("vimeo") > -1) c = "vimeo";else {
        if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
        c = "vzaar";
      }
      d = d[6], this._videos[g] = {
        type: c,
        id: d,
        width: e,
        height: f
      }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
    }, e.prototype.thumbnail = function (b, c) {
      var d,
          e,
          f,
          g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function l(c) {
        e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? a("<div/>", {
          "class": "owl-video-tn " + j,
          srcType: c
        }) : a("<div/>", {
          "class": "owl-video-tn",
          style: "opacity:1;background-image:url(" + c + ")"
        }), b.after(d), b.after(e);
      };

      if (b.wrap(a("<div/>", {
        "class": "owl-video-wrapper",
        style: g
      })), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
      "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
        type: "GET",
        url: "//vimeo.com/api/v2/video/" + c.id + ".json",
        jsonp: "callback",
        dataType: "jsonp",
        success: function success(a) {
          f = a[0].thumbnail_large, l(f);
        }
      }) : "vzaar" === c.type && a.ajax({
        type: "GET",
        url: "//vzaar.com/api/videos/" + c.id + ".json",
        jsonp: "callback",
        dataType: "jsonp",
        success: function success(a) {
          f = a.framegrab_url, l(f);
        }
      });
    }, e.prototype.stop = function () {
      this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video");
    }, e.prototype.play = function (b) {
      var c,
          d = a(b.target),
          e = d.closest("." + this._core.settings.itemClass),
          f = this._videos[e.attr("data-video")],
          g = f.width || "100%",
          h = f.height || this._core.$stage.height();

      this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), c.attr("height", h), c.attr("width", g), "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"), a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"));
    }, e.prototype.isInFullScreen = function () {
      var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
      return b && a(b).parent().hasClass("owl-video-frame");
    }, e.prototype.destroy = function () {
      var a, b;

      this._core.$element.off("click.owl.video");

      for (a in this._handlers) {
        this._core.$element.off(a, this._handlers[a]);
      }

      for (b in Object.getOwnPropertyNames(this)) {
        "function" != typeof this[b] && (this[b] = null);
      }
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e;
  }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
      this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
        "change.owl.carousel": a.proxy(function (a) {
          a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value);
        }, this),
        "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
          a.namespace && (this.swapping = "translated" == a.type);
        }, this),
        "translate.owl.carousel": a.proxy(function (a) {
          a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
        }, this)
      }, this.core.$element.on(this.handlers);
    };

    e.Defaults = {
      animateOut: !1,
      animateIn: !1
    }, e.prototype.swap = function () {
      if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
        this.core.speed(0);
        var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
        this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
          left: b + "px"
        }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
      }
    }, e.prototype.clear = function (b) {
      a(b.target).css({
        left: ""
      }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
    }, e.prototype.destroy = function () {
      var a, b;

      for (a in this.handlers) {
        this.core.$element.off(a, this.handlers[a]);
      }

      for (b in Object.getOwnPropertyNames(this)) {
        "function" != typeof this[b] && (this[b] = null);
      }
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
  }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
      this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
        "changed.owl.carousel": a.proxy(function (a) {
          a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0);
        }, this),
        "initialized.owl.carousel": a.proxy(function (a) {
          a.namespace && this._core.settings.autoplay && this.play();
        }, this),
        "play.owl.autoplay": a.proxy(function (a, b, c) {
          a.namespace && this.play(b, c);
        }, this),
        "stop.owl.autoplay": a.proxy(function (a) {
          a.namespace && this.stop();
        }, this),
        "mouseover.owl.autoplay": a.proxy(function () {
          this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
        }, this),
        "mouseleave.owl.autoplay": a.proxy(function () {
          this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
        }, this),
        "touchstart.owl.core": a.proxy(function () {
          this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
        }, this),
        "touchend.owl.core": a.proxy(function () {
          this._core.settings.autoplayHoverPause && this.play();
        }, this)
      }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options);
    };

    e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1
    }, e.prototype._next = function (d) {
      this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed);
    }, e.prototype.read = function () {
      return new Date().getTime() - this._time;
    }, e.prototype.play = function (c, d) {
      var e;
      this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e);
    }, e.prototype.stop = function () {
      this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating"));
    }, e.prototype.pause = function () {
      this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call));
    }, e.prototype.destroy = function () {
      var a, b;
      this.stop();

      for (a in this._handlers) {
        this._core.$element.off(a, this._handlers[a]);
      }

      for (b in Object.getOwnPropertyNames(this)) {
        "function" != typeof this[b] && (this[b] = null);
      }
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e;
  }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";

    var e = function e(b) {
      this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
        next: this._core.next,
        prev: this._core.prev,
        to: this._core.to
      }, this._handlers = {
        "prepared.owl.carousel": a.proxy(function (b) {
          b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
        }, this),
        "added.owl.carousel": a.proxy(function (a) {
          a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
        }, this),
        "remove.owl.carousel": a.proxy(function (a) {
          a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
        }, this),
        "changed.owl.carousel": a.proxy(function (a) {
          a.namespace && "position" == a.property.name && this.draw();
        }, this),
        "initialized.owl.carousel": a.proxy(function (a) {
          a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"));
        }, this),
        "refreshed.owl.carousel": a.proxy(function (a) {
          a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
        }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
    };

    e.Defaults = {
      nav: !1,
      navText: ['<span aria-label="' + theme.strings.previous + '">&#x2039;</span>', '<span aria-label="' + theme.strings.next + '">&#x203a;</span>'],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1
    }, e.prototype.initialize = function () {
      var b,
          c = this._core.settings;
      this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
        this.prev(c.navSpeed);
      }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
        this.next(c.navSpeed);
      }, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function (b) {
        var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
        b.preventDefault(), this.to(d, c.dotsSpeed);
      }, this));

      for (b in this._overrides) {
        this._core[b] = a.proxy(this[b], this);
      }
    }, e.prototype.destroy = function () {
      var a, b, c, d, e;
      e = this._core.settings;

      for (a in this._handlers) {
        this.$element.off(a, this._handlers[a]);
      }

      for (b in this._controls) {
        "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
      }

      for (d in this.overides) {
        this._core[d] = this._overrides[d];
      }

      for (c in Object.getOwnPropertyNames(this)) {
        "function" != typeof this[c] && (this[c] = null);
      }
    }, e.prototype.update = function () {
      var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;

      if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
        if (b >= h || 0 === b) {
          if (this._pages.push({
            start: Math.min(f, a - d),
            end: a - d + h - 1
          }), Math.min(f, a - d) === f) break;
          b = 0, ++c;
        }

        b += this._core.mergers(this._core.relative(a));
      }
    }, e.prototype.draw = function () {
      var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;

      this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
    }, e.prototype.onTrigger = function (b) {
      var c = this._core.settings;
      b.page = {
        index: a.inArray(this.current(), this._pages),
        count: this._pages.length,
        size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
      };
    }, e.prototype.current = function () {
      var b = this._core.relative(this._core.current());

      return a.grep(this._pages, a.proxy(function (a, c) {
        return a.start <= b && a.end >= b;
      }, this)).pop();
    }, e.prototype.getPosition = function (b) {
      var c,
          d,
          e = this._core.settings;
      return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c;
    }, e.prototype.next = function (b) {
      a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
    }, e.prototype.prev = function (b) {
      a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
    }, e.prototype.to = function (b, c, d) {
      var e;
      !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e;
  }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";

    var e = function e(c) {
      this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
        "initialized.owl.carousel": a.proxy(function (c) {
          c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
        }, this),
        "prepared.owl.carousel": a.proxy(function (b) {
          if (b.namespace) {
            var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
            if (!c) return;
            this._hashes[c] = b.content;
          }
        }, this),
        "changed.owl.carousel": a.proxy(function (c) {
          if (c.namespace && "position" === c.property.name) {
            var d = this._core.items(this._core.relative(this._core.current())),
                e = a.map(this._hashes, function (a, b) {
              return a === d ? b : null;
            }).join();

            if (!e || b.location.hash.slice(1) === e) return;
            b.location.hash = e;
          }
        }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
        var c = b.location.hash.substring(1),
            e = this._core.$stage.children(),
            f = this._hashes[c] && e.index(this._hashes[c]);

        f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
      }, this));
    };

    e.Defaults = {
      URLhashListener: !1
    }, e.prototype.destroy = function () {
      var c, d;
      a(b).off("hashchange.owl.navigation");

      for (c in this._handlers) {
        this._core.$element.off(c, this._handlers[c]);
      }

      for (d in Object.getOwnPropertyNames(this)) {
        "function" != typeof this[d] && (this[d] = null);
      }
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
  }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    function e(b, c) {
      var e = !1,
          f = b.charAt(0).toUpperCase() + b.slice(1);
      return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
        if (g[b] !== d) return e = !c || b, !1;
      }), e;
    }

    function f(a) {
      return e(a, !0);
    }

    var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = {
      transition: {
        end: {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd",
          transition: "transitionend"
        }
      },
      animation: {
        end: {
          WebkitAnimation: "webkitAnimationEnd",
          MozAnimation: "animationend",
          OAnimation: "oAnimationEnd",
          animation: "animationend"
        }
      }
    },
        j = {
      csstransforms: function csstransforms() {
        return !!e("transform");
      },
      csstransforms3d: function csstransforms3d() {
        return !!e("perspective");
      },
      csstransitions: function csstransitions() {
        return !!e("transition");
      },
      cssanimations: function cssanimations() {
        return !!e("animation");
      }
    };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d());
  }(window.Zepto || window.jQuery, window, document);
})(theme.jQuery);