(function() {
    /* 
       
       Copyright The Closure Library Authors. 
       SPDX-License-Identifier: Apache-2.0 
      */
    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
        };
    }
    var l =
        "function" == typeof Object.defineProperties ?
        Object.defineProperty :
        function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
        };

    function ba(a) {
        a = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
        ];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c;
        }
        throw Error("Cannot find global object");
    }
    var ca = ba(this),
        da = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        v = {},
        ea = {};

    function x(a, b) {
        var c = ea[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b];
    }

    function y(a, b, c) {
        if (b)
            a: {
                var d = a.split(".");
                a = 1 === d.length;
                var e = d[0],
                    f;!a && e in v ? (f = v) : (f = ca);
                for (e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    if (!(g in f)) break a;
                    f = f[g];
                }
                d = d[d.length - 1];
                c = da && "es6" === c ? f[d] : null;
                b = b(c);
                null != b &&
                (a ?
                    l(v, d, { configurable: !0, writable: !0, value: b }) :
                    b !== c &&
                    (void 0 === ea[d] &&
                        ((a = (1e9 * Math.random()) >>> 0),
                            (ea[d] = da ? ca.Symbol(d) : "$jscp$" + a + "$" + d)),
                        l(f, ea[d], { configurable: !0, writable: !0, value: b })));
            }
    }
    y(
        "Symbol",
        function(a) {
            function b(f) {
                if (this instanceof b)
                    throw new TypeError("Symbol is not a constructor");
                return new c(d + (f || "") + "_" + e++, f);
            }

            function c(f, g) {
                this.g = f;
                l(this, "description", { configurable: !0, writable: !0, value: g });
            }
            if (a) return a;
            c.prototype.toString = function() {
                return this.g;
            };
            var d = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
                e = 0;
            return b;
        },
        "es6"
    );
    y(
        "Symbol.iterator",
        function(a) {
            if (a) return a;
            a = (0, v.Symbol)("Symbol.iterator");
            for (
                var b =
                    "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
                        " "
                    ),
                    c = 0; c < b.length; c++
            ) {
                var d = ca[b[c]];
                "function" === typeof d &&
                    "function" != typeof d.prototype[a] &&
                    l(d.prototype, a, {
                        configurable: !0,
                        writable: !0,
                        value: function() {
                            return fa(aa(this));
                        },
                    });
            }
            return a;
        },
        "es6"
    );

    function fa(a) {
        a = { next: a };
        a[x(v.Symbol, "iterator")] = function() {
            return this;
        };
        return a;
    }
    y(
        "String.prototype.endsWith",
        function(a) {
            return a ?
                a :
                function(b, c) {
                    if (null == this)
                        throw new TypeError(
                            "The 'this' value for String.prototype.endsWith must not be null or undefined"
                        );
                    if (b instanceof RegExp)
                        throw new TypeError(
                            "First argument to String.prototype.endsWith must not be a regular expression"
                        );
                    void 0 === c && (c = this.length);
                    c = Math.max(0, Math.min(c | 0, this.length));
                    for (var d = b.length; 0 < d && 0 < c;)
                        if (this[--c] != b[--d]) return !1;
                    return 0 >= d;
                };
        },
        "es6"
    );

    function ha(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return { value: b(f, a[f]), done: !1 };
                    }
                    d = !0;
                    return { done: !0, value: void 0 };
                },
            };
        e[x(v.Symbol, "iterator")] = function() {
            return e;
        };
        return e;
    }
    y(
        "globalThis",
        function(a) {
            return a || ca;
        },
        "es_2020"
    );
    y(
        "Array.prototype.values",
        function(a) {
            return a ?
                a :
                function() {
                    return ha(this, function(b, c) {
                        return c;
                    });
                };
        },
        "es8"
    );
    y(
        "Array.prototype.keys",
        function(a) {
            return a ?
                a :
                function() {
                    return ha(this, function(b) {
                        return b;
                    });
                };
        },
        "es6"
    );
    y(
        "Object.values",
        function(a) {
            return a ?
                a :
                function(b) {
                    var c = [],
                        d;
                    for (d in b)
                        Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
                    return c;
                };
        },
        "es8"
    );
    var A = this || self;

    function ia(a) {
        return a;
    }

    function ja(a) {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? 0 : a;
    }

    function ka(a, b) {
        this.i = (a === la && b) || "";
        this.g = ma;
    }
    var ma = {},
        la = {};
    var na = Array.prototype.indexOf ?

        function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0);
        } :
        function(a, b) {
            if ("string" === typeof a)
                return "string" !== typeof b || 1 != b.length ?
                    -1 :
                    a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1;
        },
        oa = Array.prototype.some ?

        function(a, b) {
            return Array.prototype.some.call(a, b, void 0);
        } :
        function(a, b) {
            for (
                var c = a.length,
                    d = "string" === typeof a ? a.split("") : a,
                    e = 0; e < c; e++
            )
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1;
        };
    var pa;

    function qa(a, b) {
        this.g = b === ra ? a : "";
    }
    qa.prototype.toString = function() {
        return this.g + "";
    };

    function sa(a) {
        return a instanceof qa && a.constructor === qa ?
            a.g :
            "type_error:TrustedResourceUrl";
    }
    var ta = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        ra = {};

    function wa(a) {
        if (void 0 === pa) {
            var b = null;
            var c = A.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: ia,
                        createScript: ia,
                        createScriptURL: ia,
                    });
                } catch (d) {
                    A.console && A.console.error(d.message);
                }
                pa = b;
            } else pa = b;
        }
        a = (b = pa) ? b.createScriptURL(a) : a;
        return new qa(a, ra);
    }

    function xa(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g &&
                        (b || (b = a),
                            (b +=
                                (b.length > a.length ? "&" : "") +
                                encodeURIComponent(d) +
                                "=" +
                                encodeURIComponent(String(g))));
                }
            }
        return b;
    }
    var ya;
    a: {
            var za = A.navigator;
            if (za) {
                var Aa = za.userAgent;
                if (Aa) {
                    ya = Aa;
                    break a;
                }
            }
            ya = "";
        }
        /* 
           
           SPDX-License-Identifier: Apache-2.0 
          */
    function Ba(a, b) {
        a.src = sa(b);
        var c;
        b = ((a.ownerDocument && a.ownerDocument.defaultView) || window).document;
        var d =
            null === (c = b.querySelector) || void 0 === c ?
            void 0 :
            c.call(b, "script[nonce]");
        (c = d ? d.nonce || d.getAttribute("nonce") || "" : "") &&
        a.setAttribute("nonce", c);
    }

    function Ca(a) {
        var b = !1,
            c;
        return function() {
            b || ((c = a()), (b = !0));
            return c;
        };
    }

    function Da(a) {
        Da[" "](a);
        return a;
    }
    Da[" "] = function() {};

    function Ea(a) {
        var b = document;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a);
    }
    var Fa = RegExp(
        "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
    );

    function Ga(a) {
        var b = a.match(Fa);
        a = b[5];
        var c = b[6];
        b = b[7];
        var d = "";
        a && (d += a);
        c && (d += "?" + c);
        b && (d += "#" + b);
        return d;
    }

    function Ha(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (((f = a.charCodeAt(b + e)), !f || 61 == f || 38 == f || 35 == f))
                    return b;
            b += e + 1;
        }
        return -1;
    }
    var Ia = /#|$/;

    function B(a, b) {
        var c = a.search(Ia),
            d = Ha(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "));
    }
    var Ja = /[?&]($|#)/;

    function D(a, b, c) {
        for (var d = a.search(Ia), e = 0, f, g = []; 0 <= (f = Ha(a, e, b, d));)
            g.push(a.substring(e, f)), (e = Math.min(a.indexOf("&", f) + 1 || d, d));
        g.push(a.substr(e));
        a = g.join("").replace(Ja, "$1");
        c = null != c ? "=" + encodeURIComponent(String(c)) : "";
        (b += c) ?
        ((c = a.indexOf("#")),
            0 > c && (c = a.length),
            (d = a.indexOf("?")),
            0 > d || d > c ? ((d = c), (e = "")) : (e = a.substring(d + 1, c)),
            (c = [a.substr(0, d), e, a.substr(c)]),
            (a = c[1]),
            (c[1] = b ? (a ? a + "&" + b : b) : a),
            (b = c[0] + (c[1] ? "?" + c[1] : "") + c[2])) :
        (b = a);
        return b;
    }

    function Ka() {
        if (!v.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            v.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536;
        } catch (b) {
            return Math.random();
        }
    }

    function La(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) &&
                b.call(void 0, a[c], c, a);
    }
    var Na = Ca(function() {
            return (
                oa(
                    [
                        "Google Web Preview",
                        "Mediapartners-Google",
                        "Google-Read-Aloud",
                        "Google-Adwords",
                    ],
                    Ma
                ) || 1e-4 > Math.random()
            );
        }),
        Oa = Ca(function() {
            return Ma("MSIE");
        });

    function Ma(a) {
        return -1 != ya.indexOf(a);
    }

    function E(a) {
        return /^true$/.test(a);
    }

    function Pa(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase());
    }
    var Qa = ja("0.20"),
        Ra = ja("0.002"),
        Sa = ja("0.00"),
        Ta = ja("0.00"),
        Ua = E("true"),
        Va = E("true"),
        Wa = E("true"),
        Xa = E("true");
    var Ya = null;

    function Za() {
        if (null === Ya) {
            Ya = "";
            try {
                var a = "";
                try {
                    a = A.top.location.hash;
                } catch (c) {
                    a = A.location.hash;
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Ya = b ? b[1] : "";
                }
            } catch (c) {}
        }
        return Ya;
    }

    function $a(a, b, c) {
        var d = F;
        if (c ? d.g.hasOwnProperty(c) && "" == d.g[c] : 1) {
            var e;
            e = (e = Za()) ?
                (e = e.match(new RegExp("\\b(" + a.join("|") + ")\\b"))) ?
                e[0] :
                null :
                null;
            if (e) a = e;
            else
                a: {
                    if (!Oa() && !Na() && ((e = Math.random()), e < b)) {
                        e = Ka();
                        a = a[Math.floor(e * a.length)];
                        break a;
                    }
                    a = null;
                }
            a &&
                "" != a &&
                (c ? d.g.hasOwnProperty(c) && (d.g[c] = a) : (d.i[a] = !0));
        }
    }

    function ab(a) {
        var b = F;
        return b.g.hasOwnProperty(a) ? b.g[a] : "";
    }

    function bb() {
        var a = F,
            b = [];
        La(a.i, function(c, d) {
            b.push(d);
        });
        La(a.g, function(c) {
            "" != c && b.push(c);
        });
        return b;
    }
    var cb = { K: 2, S: 13, R: 14, N: 16, M: 17, L: 18, J: 19 },
        F = null;

    function db() {
        return !!F && "592230571" == ab(16);
    }

    function eb(a) {
        return "function" == typeof a;
    }
    var fb = Array.isArray;

    function gb(a, b) {
        if (a && fb(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c];
    }

    function hb(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    }
    var ib = new(function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b;
    })(1933);
    var H = window,
        I = document;

    function jb(a) {
        var b = I.featurePolicy;
        return b && eb(b.allowsFeature) ? b.allowsFeature(a) : !1;
    }
    var kb = {};

    function lb(a) {
        kb.TAGGING = kb.TAGGING || [];
        kb.TAGGING[a] = !0;
    }

    function K(a) {
        var b = "u";
        if (a.u && a.hasOwnProperty(b)) return a.u;
        b = new a();
        return (a.u = b);
    }

    function L() {
        var a = {};
        this.g = function() {
            var b = ib.g,
                c = ib.defaultValue;
            return null != a[b] ? a[b] : c;
        };
        this.i = function(b) {
            a[ib.g] = b;
        };
    }
    var M = [];

    function N() {
        var a = {};
        var b = H.google_tag_data;
        H.google_tag_data = void 0 === b ? a : b;
        a = H.google_tag_data;
        a.ics ||
            (a.ics = {
                entries: {},
                set: mb,
                update: nb,
                addListener: ob,
                notifyListeners: pb,
                active: !1,
                usedDefault: !1,
            });
        return a.ics;
    }

    function mb(a, b, c, d, e, f) {
        var g = N();
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries;
            g = h[a] || {};
            var k = g.region;
            c = c && "string" == typeof c ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || c === e || (c === d ? k !== e : !c && !k)) {
                e = !!(f && 0 < f && void 0 === g.update);
                var m = {
                    region: c,
                    initial: "granted" === b,
                    update: g.update,
                    quiet: e,
                };
                if ("" !== d || !1 !== g.initial) h[a] = m;
                e &&
                    H.setTimeout(function() {
                        h[a] === m && m.quiet && ((m.quiet = !1), qb(a), pb(), lb(2));
                    }, f);
            }
        }
    }

    function nb(a, b) {
        var c = N();
        c.active = !0;
        if (void 0 != b) {
            var d = O(a);
            c = c.entries;
            c = c[a] = c[a] || {};
            c.update = "granted" === b;
            b = O(a);
            c.quiet ? ((c.quiet = !1), qb(a)) : b !== d && qb(a);
        }
    }

    function ob(a, b) {
        M.push({ s: a, C: b });
    }

    function qb(a) {
        for (var b = 0; b < M.length; ++b) {
            var c = M[b];
            fb(c.s) && -1 !== c.s.indexOf(a) && (c.B = !0);
        }
    }

    function pb(a) {
        for (var b = 0; b < M.length; ++b) {
            var c = M[b];
            if (c.B) {
                c.B = !1;
                try {
                    c.C({ T: a });
                } catch (d) {}
            }
        }
    }

    function O(a) {
        a = N().entries[a] || {};
        return void 0 !== a.update ? a.update : a.initial;
    }

    function rb(a) {
        return !(N().entries[a] || {}).quiet;
    }

    function sb(a, b) {
        N().addListener(a, b);
    }

    function tb(a) {
        function b() {
            for (var e = 0; e < c.length; e++)
                if (!rb(c[e])) return !0;
            return !1;
        }
        var c = ["ad_storage"];
        if (b()) {
            var d = !1;
            sb(c, function(e) {
                d || b() || ((d = !0), a(e));
            });
        } else a({});
    }

    function ub(a) {
        function b() {
            for (var e = [], f = 0; f < c.length; f++) {
                var g = c[f];
                !1 === O(g) || d[g] || (e.push(g), (d[g] = !0));
            }
            return e;
        }
        var c = ["ad_storage"],
            d = {};
        b().length !== c.length &&
            sb(c, function(e) {
                var f = b();
                0 < f.length && ((e.s = f), a(e));
            });
    }

    function vb(a, b, c, d) {
        if (wb(d)) {
            d = [];
            b = String(b || xb()).split(";");
            for (var e = 0; e < b.length; e++) {
                var f = b[e].split("="),
                    g = f[0].replace(/^\s*|\s*$/g, "");
                g &&
                    g == a &&
                    ((f = f
                            .slice(1)
                            .join("=")
                            .replace(/^\s*|\s*$/g, "")) &&
                        c &&
                        (f = decodeURIComponent(f)),
                        d.push(f));
            }
            a = d;
        } else a = [];
        return a;
    }

    function yb(a, b, c, d) {
        var e = xb(),
            f = window;
        "null" !== f.origin && (f.document.cookie = a);
        a = xb();
        return e != a || (void 0 != c && 0 <= vb(b, a, !1, d).indexOf(c));
    }

    function zb(a, b, c) {
        function d(p, q, t) {
            if (null == t) return delete g[q], p;
            g[q] = t;
            return p + "; " + q + "=" + t;
        }

        function e(p, q) {
            if (null == q) return delete g[q], p;
            g[q] = !0;
            return p + "; " + q;
        }
        if (wb(c.o)) {
            if (void 0 == b)
                var f = a + "=deleted; expires=" + new Date(0).toUTCString();
            else
                c.encode && (b = encodeURIComponent(b)), (b = Ab(b)), (f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            if (c.expires instanceof Date) var h = c.expires.toUTCString();
            else null != c.expires && (h = c.expires);
            f = d(f, "expires", h);
            f = d(f, "max-age", c.U);
            f = d(f, "samesite", c.V);
            c.W && (f = e(f, "secure"));
            if ((h = c.domain) && "auto" === h.toLowerCase()) {
                h = Bb();
                for (var k = 0; k < h.length; ++k) {
                    var m = "none" !== h[k] ? h[k] : void 0,
                        n = d(f, "domain", m);
                    n = e(n, c.flags);
                    if (!Cb(m, c.path) && yb(n, a, b, c.o)) break;
                }
            } else
                h && "none" !== h.toLowerCase() && (f = d(f, "domain", h)),
                (f = e(f, c.flags)),
                Cb(h, c.path) || yb(f, a, b, c.o);
        }
    }

    function Db(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        zb(a, b, c);
    }

    function Ab(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a;
    }
    var Eb = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Fb = /(^|\.)doubleclick\.net$/i;

    function Cb(a, b) {
        return (
            Fb.test(window.document.location.hostname) || ("/" === b && Eb.test(a))
        );
    }

    function xb() {
        return "null" !== window.origin ? window.document.cookie : "";
    }

    function Bb() {
        var a = [],
            b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"];
        }
        for (c = b.length - 2; 0 <= c; c--) a.push(b.slice(c).join("."));
        b = window.document.location.hostname;
        Fb.test(b) || Eb.test(b) || a.push("none");
        return a;
    }

    function wb(a) {
        if (!(K(L).g() && a && K(L).g() && N().active)) return !0;
        if (!rb(a)) return !1;
        a = O(a);
        return null == a ? !0 : !!a;
    }

    function Gb(a, b) {
        var c,
            d = Number(null != a.A ? a.A : void 0);
        0 !== d &&
            (c = new Date(
                (b || new Date(Date.now()).getTime()) + 1e3 * (d || 7776e3)
            ));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !0,
            expires: c,
        };
    }

    function Hb(a) {
        var b = [],
            c = I.cookie.split(";");
        a = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$");
        for (var d = 0; d < c.length; d++) {
            var e = c[d].match(a);
            e &&
                b.push({
                    v: e[1],
                    value: e[2],
                    timestamp: Number(e[2].split(".")[1]) || 0,
                });
        }
        b.sort(function(f, g) {
            return g.timestamp - f.timestamp;
        });
        return b;
    }

    function P(a, b) {
        a = Hb(a);
        var c = {};
        if (!a || !a.length) return c;
        for (var d = 0; d < a.length; d++) {
            var e = a[d].value.split(".");
            if (!("1" !== e[0] || (b && 3 > e.length) || (!b && 3 !== e.length)) &&
                Number(e[1])
            ) {
                c[a[d].v] || (c[a[d].v] = []);
                var f = { version: e[0], timestamp: 1e3 * Number(e[1]), h: e[2] };
                b && 3 < e.length && (f.labels = e.slice(3));
                c[a[d].v].push(f);
            }
        }
        return c;
    }
    var Ib = /:[0-9]+$/;

    function Jb(a, b) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var d = a[c].split("=");
            if (decodeURIComponent(d[0]).replace(/\+/g, " ") === b)
                return decodeURIComponent(d.slice(1).join("=")).replace(/\+/g, " ");
        }
    }

    function Kb(a, b) {
        var c = "query";
        if ("protocol" === c || "port" === c)
            a.protocol = Lb(a.protocol) || Lb(H.location.protocol);
        "port" === c
            ?
            (a.port = String(
                Number(a.hostname ? a.port : H.location.port) ||
                ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")
            )) :
            "host" === c &&
            (a.hostname = (a.hostname || H.location.hostname)
                .replace(Ib, "")
                .toLowerCase());
        var d = Lb(a.protocol);
        c && (c = String(c).toLowerCase());
        switch (c) {
            case "url_no_fragment":
                b = "";
                a &&
                    a.href &&
                    ((b = a.href.indexOf("#")),
                        (b = 0 > b ? a.href : a.href.substr(0, b)));
                a = b;
                break;
            case "protocol":
                a = d;
                break;
            case "host":
                a = a.hostname.replace(Ib, "").toLowerCase();
                break;
            case "port":
                a = String(
                    Number(a.port) || ("http" == d ? 80 : "https" == d ? 443 : "")
                );
                break;
            case "path":
                a.pathname || a.hostname || lb(1);
                a = "/" == a.pathname.charAt(0) ? a.pathname : "/" + a.pathname;
                a = a.split("/");
                0 <= [].indexOf(a[a.length - 1]) && (a[a.length - 1] = "");
                a = a.join("/");
                break;
            case "query":
                a = a.search.replace("?", "");
                b && (a = Jb(a, b));
                break;
            case "extension":
                a = a.pathname.split(".");
                a = 1 < a.length ? a[a.length - 1] : "";
                a = a.split("/")[0];
                break;
            case "fragment":
                a = a.hash.replace("#", "");
                break;
            default:
                a = a && a.href;
        }
        return a;
    }

    function Lb(a) {
        return a ? a.replace(":", "").toLowerCase() : "";
    }
    var Mb = {};
    var Nb = /^\w+$/,
        Ob = /^[\w-]+$/,
        Pb = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" };

    function Q() {
        if (!K(L).g() || !K(L).g() || !N().active) return !0;
        var a = O("ad_storage");
        return null == a ? !0 : !!a;
    }

    function Qb(a, b) {
        rb("ad_storage") ?
            Q() ?
            a() :
            ub(a) :
            b ?
            lb(3) :
            tb(function() {
                Qb(a, !0);
            });
    }

    function Rb(a) {
        return R(a).map(function(b) {
            return b.h;
        });
    }

    function R(a) {
        var b = [];
        if ("null" === H.origin || !I.cookie) return b;
        a = vb(a, I.cookie, void 0, "ad_storage");
        if (!a || 0 == a.length) return b;
        for (var c = {}, d = 0; d < a.length; c = { j: c.j }, d++) {
            var e = Sb(a[d]);
            if (null != e) {
                var f = e;
                e = f.version;
                c.j = f.h;
                var g = f.timestamp;
                f = f.labels;
                var h = gb(
                    b,
                    (function(k) {
                        return function(m) {
                            return m.h === k.j;
                        };
                    })(c)
                );
                h
                    ?
                    ((h.timestamp = Math.max(h.timestamp, g)),
                        (h.labels = Tb(h.labels, f || []))) :
                    b.push({ version: e, h: c.j, timestamp: g, labels: f });
            }
        }
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp;
        });
        return Ub(b);
    }

    function Tb(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++)
            (c[a[e]] = !0), d.push(a[e]);
        for (a = 0; a < b.length; a++) c[b[a]] || d.push(b[a]);
        return d;
    }

    function Wb(a) {
        return a && "string" == typeof a && a.match(Nb) ? a : "_gcl";
    }

    function Xb() {
        var a = H.location.href,
            b = I.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || lb(1), (c = "/" + c));
        a = b.hostname.replace(Ib, "");
        var d = {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: a,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port,
        };
        b = Kb(d, "gclid");
        c = Kb(d, "gclsrc");
        a = Kb(d, "wbraid");
        var e = Kb(d, "dclid");
        (b && c && a) ||
        ((d = d.hash.replace("#", "")),
            (b = b || Jb(d, "gclid")),
            (c = c || Jb(d, "gclsrc")),
            (a = a || Jb(d, "wbraid")));
        return Yb(b, c, e, a);
    }

    function Yb(a, b, c, d) {
        function e(g, h) {
            f[h] || (f[h] = []);
            f[h].push(g);
        }
        var f = {};
        f.gclid = a;
        f.gclsrc = b;
        f.dclid = c;
        void 0 !== d && Ob.test(d) && ((f.gbraid = d), e(d, "gb"));
        if (void 0 !== a && a.match(Ob))
            switch (b) {
                case void 0:
                    e(a, "aw");
                    break;
                case "aw.ds":
                    e(a, "aw");
                    e(a, "dc");
                    break;
                case "ds":
                    e(a, "dc");
                    break;
                case "3p.ds":
                    e(a, "dc");
                    break;
                case "gf":
                    e(a, "gf");
                    break;
                case "ha":
                    e(a, "ha");
            }
        c && e(c, "dc");
        return f;
    }

    function Zb() {
        var a = {},
            b = Xb();
        Qb(function() {
            $b(b, !1, a);
        });
    }

    function $b(a, b, c, d, e) {
        function f(p) {
            p = ["GCL", n, p];
            0 < e.length && p.push(e.join("."));
            return p.join(".");
        }

        function g(p, q) {
            if ((p = ac(p, h))) Db(p, q, k), (m = !0);
        }
        c = c || {};
        e = e || [];
        var h = Wb(c.prefix);
        d = d || new Date(Date.now()).getTime();
        var k = Gb(c, d);
        k.o = "ad_storage";
        var m = !1,
            n = Math.round(d / 1e3);
        a.aw && g("aw", f(a.aw[0]));
        a.dc && g("dc", f(a.dc[0]));
        a.gf && g("gf", f(a.gf[0]));
        a.ha && g("ha", f(a.ha[0]));
        a.gp && g("gp", f(a.gp[0]));
        if (
            (void 0 == Mb.enable_gbraid_cookie_write ?
                0 :
                Mb.enable_gbraid_cookie_write) &&
            !m &&
            a.gb
        ) {
            a = a.gb[0];
            d = ac("gb", h);
            c = !1;
            if (!b)
                for (b = R(d), d = 0; d < b.length; d++)
                    b[d].h === a && b[d].labels && 0 < b[d].labels.length && (c = !0);
            c || g("gb", f(a));
        }
    }

    function ac(a, b) {
        a = Pb[a];
        if (void 0 !== a) return b + a;
    }

    function bc(a) {
        return 0 !== cc(a.split(".")).length ?
            1e3 * (Number(a.split(".")[1]) || 0) :
            0;
    }

    function Sb(a) {
        a = cc(a.split("."));
        return 0 === a.length ?
            null :
            {
                version: a[0],
                h: a[2],
                timestamp: 1e3 * (Number(a[1]) || 0),
                labels: a.slice(3),
            };
    }

    function cc(a) {
        return 3 > a.length ||
            ("GCL" !== a[0] && "1" !== a[0]) ||
            !/^\d+$/.test(a[1]) ||
            !Ob.test(a[2]) ?
            [] :
            a;
    }

    function Ub(a) {
        return a.filter(function(b) {
            return Ob.test(b.h);
        });
    }

    function dc() {
        var a = ["aw"],
            b = {};
        if ("null" !== H.origin) {
            for (var c = Wb(b.prefix), d = {}, e = 0; e < a.length; e++)
                Pb[a[e]] && (d[a[e]] = Pb[a[e]]);
            Qb(function() {
                hb(d, function(f, g) {
                    g = vb(c + g, I.cookie, void 0, "ad_storage");
                    g.sort(function(n, p) {
                        return bc(p) - bc(n);
                    });
                    if (g.length) {
                        var h = g[0];
                        g = bc(h);
                        var k = 0 !== cc(h.split(".")).length ? h.split(".").slice(3) : [],
                            m = {};
                        h = 0 !== cc(h.split(".")).length ? h.split(".")[2] : void 0;
                        m[f] = [h];
                        $b(m, !0, b, g, k);
                    }
                });
            });
        }
    }

    function ec(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!Q()) return e;
        var f = R(a);
        if (!f.length) return e;
        for (var g = 0; g < f.length; g++)
            -
            1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
        if (d) return e;
        1 !== e[0] &&
            ((d = f[0]),
                (f = f[0].timestamp),
                (b = [d.version, Math.round(f / 1e3), d.h]
                    .concat(d.labels || [], [b])
                    .join(".")),
                (c = Gb(c, f)),
                (c.o = "ad_storage"),
                Db(a, b, c));
        return e;
    }

    function fc(a, b) {
        b = Wb(b);
        a = ac(a, b);
        if (!a) return 0;
        a = R(a);
        for (var c = (b = 0); c < a.length; c++) b = Math.max(b, a[c].timestamp);
        return b;
    }

    function gc(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++)
                b = Math.max(b, Number(d[e].timestamp));
        return b;
    }
    var hc = RegExp(
            "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
        ),
        ic = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        jc = /^\d+\.fls\.doubleclick\.net$/,
        kc = /;gac=([^;?]+)/,
        lc = /;gacgb=([^;?]+)/,
        mc = /;gclaw=([^;?]+)/,
        nc = /;gclgb=([^;?]+)/;

    function oc(a, b, c) {
        if (jc.test(a.location.host))
            return (b = a.location.href.match(c)) && 2 == b.length && b[1].match(hc) ?
                decodeURIComponent(b[1]) :
                "";
        a = [];
        for (var d in b) {
            c = [];
            for (var e = b[d], f = 0; f < e.length; f++) c.push(e[f].h);
            a.push(d + ":" + c.join(","));
        }
        return 0 < a.length ? a.join(";") : "";
    }

    function pc(a, b, c, d) {
        var e = Q() ? P("_gac_gb", !0) : {},
            f = [],
            g = !1,
            h;
        for (h in e) {
            var k = ec("_gac_gb_" + h, b, c, d);
            g =
                g ||
                (0 !== k.length &&
                    k.some(function(m) {
                        return 1 === m;
                    }));
            f.push(h + ":" + k.join(","));
        }
        return { F: g ? f.join(";") : "", D: oc(a, e, lc) };
    }

    function qc(a, b, c, d) {
        if (jc.test(a.location.host)) {
            if ((a = a.location.href.match(d)) && 2 == a.length && a[1].match(ic))
                return [{ h: a[1] }];
        } else return R((b || "_gcl") + c);
        return [];
    }

    function rc(a, b) {
        return qc(a, b, "_aw", mc)
            .map(function(c) {
                return c.h;
            })
            .join(".");
    }

    function sc(a, b) {
        return qc(a, b, "_gb", nc)
            .map(function(c) {
                return c.h;
            })
            .join(".");
    }

    function tc(a, b) {
        var c =
            "" !== sc(a, b) ||
            0 < x(Object, "keys").call(Object, Q() ? P("_gac_gb", !0) : {}).length;
        a = "" !== rc(a, b) || "" !== oc(a, Q() ? P() : {}, kc);
        return c && a;
    }

    function uc(a) {
        0 !== Rb("_gcl_aw").length ||
            (a && 0 !== Rb(a + "_aw").length) ||
            (Zb(), dc());
    }

    function vc(a, b, c) {
        a = ec(((b && b.prefix) || "_gcl") + "_gb", a, b, c);
        return 0 === a.length ||
            a.every(function(d) {
                return 0 === d;
            }) ?
            "" :
            a.join(".");
    }

    function wc(a) {
        var b = A.performance;
        return (b && b.timing && b.timing[a]) || 0;
    }
    var xc = { O: 0, G: 1, P: 2, I: 3, H: 4 };

    function yc() {
        this.g = {};
    }

    function zc(a, b, c) {
        "number" === typeof c && 0 < c && (a.g[b] = Math.round(c));
    }

    function Ac(a) {
        var b = K(yc);
        var c = void 0 === c ? A : c;
        c = c.performance;
        zc(b, a, c && c.now ? c.now() : null);
    }

    function Bc() {
        function a() {
            return zc(b, 0, wc("loadEventStart") - wc("navigationStart"));
        }
        var b = K(yc);
        0 != wc("loadEventStart") ? a() : window.addEventListener("load", a);
    }

    function Cc(a, b) {
        b.google_tag_manager &&
            b.google_tag_manager._li &&
            ((b = b.google_tag_manager._li), zc(a, 4, b.cbt), zc(a, 3, b.cst));
    }

    function Dc() {
        var a = K(yc);
        return x(Object, "values")
            .call(Object, xc)
            .map(function(b) {
                return [b, a.g[b] || 0];
            });
    }

    function Ec(a, b, c) {
        a = Fc(a, !0);
        if (a[b]) return !1;
        a[b] = [];
        a[b][0] = c;
        return !0;
    }

    function Fc(a, b) {
        var c = a.GooglebQhCsO;
        c || ((c = {}), b && (a.GooglebQhCsO = c));
        return c;
    }
    var Gc = {},
        Hc = null;

    function Ic(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && ((b[c++] = e & 255), (e >>= 8));
            b[c++] = e;
        }
        a = 4;
        void 0 === a && (a = 0);
        if (!Hc)
            for (
                Hc = {},
                c =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                    ""
                ),
                d = ["+/=", "+/", "-_=", "-_.", "-_"],
                e = 0; 5 > e; e++
            ) {
                var f = c.concat(d[e].split(""));
                Gc[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Hc[h] && (Hc[h] = g);
                }
            }
        a = Gc[a];
        c = Array(Math.floor(b.length / 3));
        d = a[64] || "";
        for (e = f = 0; f < b.length - 2; f += 3) {
            var k = b[f],
                m = b[f + 1];
            h = b[f + 2];
            g = a[k >> 2];
            k = a[((k & 3) << 4) | (m >> 4)];
            m = a[((m & 15) << 2) | (h >> 6)];
            h = a[h & 63];
            c[e++] = g + k + m + h;
        }
        g = 0;
        h = d;
        switch (b.length - f) {
            case 2:
                (g = b[f + 1]), (h = a[(g & 15) << 2] || d);
            case 1:
                (b = b[f]), (c[e] = a[b >> 2] + a[((b & 3) << 4) | (g >> 4)] + h + d);
        }
        return c.join("");
    }

    function Jc(a, b, c, d) {
        var e = B(c, "fmt");
        if (d) {
            var f = B(c, "random"),
                g = B(c, "label") || "";
            if (!f) return !1;
            f = Ic(
                decodeURIComponent(g.replace(/\+/g, " ")) +
                ":" +
                decodeURIComponent(f.replace(/\+/g, " "))
            );
            if (!Ec(a, f, d)) return !1;
        }
        e && 4 != e && (c = D(c, "rfmt", e));
        c = D(c, "fmt", 4);
        e = Ea("SCRIPT");
        Ba(e, wa(c));
        e.onload = function() {
            a.google_noFurtherRedirects &&
                d &&
                d.call &&
                ((a.google_noFurtherRedirects = null), d());
        };
        b.getElementsByTagName("script")[0].parentElement.appendChild(e);
        return !0;
    }
    var Kc = E("false");

    function Lc() {
        if (eb(H.__uspapi)) {
            var a = "";
            try {
                H.__uspapi("getUSPData", 1, function(b, c) {
                    c &&
                        b &&
                        (b = b.uspString) &&
                        RegExp("^[\\da-zA-Z-]{1,20}$").test(b) &&
                        (a = b);
                });
            } catch (b) {}
            return a;
        }
    }
    var Mc = {
            id: !0,
            origin: !0,
            destination: !0,
            start_date: !0,
            end_date: !0,
            location_id: !0,
        },
        Nc = /^[a-zA-Z0-9_]+$/,
        Oc = !1,
        Pc =
        "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_gtm_url_processor google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_gcl_cookie_path google_gcl_cookie_flags google_gcl_cookie_domain google_gcl_cookie_max_age_seconds google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_additional_conversion_params google_additional_params google_transport_url google_gtm_experiments".split(
            " "
        );

    function Qc(a, b) {
        var c = a;
        return function() {
            --c;
            0 >= c && b();
        };
    }

    function S(a) {
        return null != a ? encodeURIComponent(String(a)) : "";
    }

    function Rc(a) {
        if (null != a) {
            a = String(a).substring(0, 512);
            var b = a.indexOf("#");
            return -1 == b ? a : a.substring(0, b);
        }
        return "";
    }

    function T(a, b) {
        b = S(b);
        return "" != b && ((a = S(a)), "" != a) ? "&".concat(a, "=", b) : "";
    }

    function Sc(a) {
        var b = typeof a;
        return null == a || "object" == b || "function" == b ?
            null :
            String(a)
            .replace(/,/g, "\\,")
            .replace(/;/g, "\\;")
            .replace(/=/g, "\\=");
    }

    function Tc(a) {
        if (!a || "object" != typeof a || "function" == typeof a.join) return "";
        var b = [],
            c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = a[c];
                if (d && "function" === typeof d.join) {
                    for (var e = [], f = 0; f < d.length; ++f) {
                        var g = Sc(d[f]);
                        null != g && e.push(g);
                    }
                    d = 0 == e.length ? null : e.join(",");
                } else d = Sc(d);
                (e = Sc(c)) && null != d && b.push(e + "=" + d);
            }
        return b.join(";");
    }

    function U(a) {
        return "number" != typeof a && "string" != typeof a ? "" : S(a.toString());
    }

    function Uc(a, b) {
        if (
            b.google_read_gcl_cookie_opt_out ||
            b.google_remarketing_only ||
            (b.google_conversion_domain &&
                (!b.google_gcl_cookie_prefix ||
                    !/^_ycl/.test(b.google_gcl_cookie_prefix)))
        )
            return "";
        var c = "",
            d = Vc(b),
            e = {};
        b.google_gcl_cookie_domain && (e.domain = b.google_gcl_cookie_domain);
        b.google_gcl_cookie_flags && (e.flags = b.google_gcl_cookie_flags);
        null != b.google_gcl_cookie_max_age_seconds &&
            (e.A = b.google_gcl_cookie_max_age_seconds);
        b.google_gcl_cookie_path && (e.path = b.google_gcl_cookie_path);
        d && (e.prefix = d);
        if (Wc(b) && b.l) var f = void 0 === b.m;
        else
            jc.test(a.location.host) ?
            (f = !(mc.test(a.location.href) || kc.test(a.location.href))) :
            ((f = Math.max(fc("aw", d), gc(Q() ? P() : {}))),
                (f = Math.max(fc("gb", d), gc(Q() ? P("_gac_gb", !0) : {})) > f));
        if (f) {
            if (void 0 !== b.m) return b.m;
            c = sc(a, d || void 0);
            f = b.google_conversion_label;
            var g = vc(f, e, b.l);
            c = T("gclgb", c) + (g ? T("mcov", g) : "");
            if (d) return (b.m = c);
            d = pc(a, f, e, b.l);
            a = d.D;
            d = d.F;
            c += (a ? T("gacgb", a) : "") + (d ? T("gacmcov", d) : "");
            return (b.m = c);
        }
        if (d) return (b = rc(a, d)), T("gclaw", b);
        (b = rc(a)) && (c = T("gclaw", b));
        b = oc(a, Q() ? P() : {}, kc);
        return c + (b ? T("gac", b) : "");
    }

    function Xc(a) {
        function b(d) {
            try {
                return decodeURIComponent(d), !0;
            } catch (e) {
                return !1;
            }
        }
        a = a ? a.title : "";
        if (void 0 == a || "" == a) return "";
        a = encodeURIComponent(a);
        for (var c = 256; !b(a.substr(0, c));) c--;
        return "&tiba=" + a.substr(0, c);
    }

    function Yc(a, b, c, d, e, f) {
        var g = "https://",
            h = "landing" === d.google_conversion_type ? "/extclk" : "/";
        switch (e) {
            default: return "";
            case 2:
                    case 3:
                    var k = "googleads.g.doubleclick.net/";
                var m = "pagead/viewthroughconversion/";
                break;
            case 1:
                    k = "www.google.com/";
                m = "pagead/1p-conversion/";
                break;
            case 6:
                    k = "www.google.com/";
                m = "ccm/conversion/";
                h = "";
                break;
            case 0:
                    k = d.google_conversion_domain || "www.googleadservices.com/";
                m = "pagead/conversion/";
                break;
            case 5:
                    k = d.google_conversion_domain || "www.googleadservices.com/";
                m = "ccm/conversion/";
                h = "";
                break;
            case 4:
                    (k =
                    (k = d.google_gtm_experiments) && k.apcm ?
                    "www.google.com" :
                    k && k.capiorig ?
                    d.google_conversion_id + ".privacysandbox.googleadservices.com" :
                    "www.google.com/"),
                (m = "pagead/privacysandbox/conversion/");
        }
        Ua && d.google_transport_url && (k = d.google_transport_url);
        "/" !== k[k.length - 1] && (k += "/");
        if (0 === k.indexOf("http://") || 0 === k.indexOf("https://")) g = "";
        g = [
            g,
            k,
            m,
            S(d.google_conversion_id),
            h,
            "?random=",
            S(d.google_conversion_time),
        ].join("");
        h = T("cv", d.google_conversion_js_version);
        k = T("fst", d.google_conversion_first_time);
        m = T("num", d.google_conversion_snippets);
        var n = T("fmt", d.google_conversion_format),
            p = d.google_remarketing_only ? T("userId", d.google_user_id) : "";
        var q = d.google_tag_for_child_directed_treatment;
        q = null == q || (0 !== q && 1 !== q) ? "" : T("tfcd", q);
        var t = d.google_tag_for_under_age_of_consent;
        t = null == t || (0 !== t && 1 !== t) ? "" : T("tfua", t);
        var C = d.google_allow_ad_personalization_signals;
        C = !1 === C ? T("npa", 1) : !0 === C ? T("npa", 0) : "";
        var W = d.google_restricted_data_processing;
        W = Wa ? (!0 === W ? T("rdp", 1) : !1 === W ? T("rdp", 0) : "") : "";
        var gd = T("value", d.google_conversion_value),
            hd = T("currency_code", d.google_conversion_currency),
            id = T("label", d.google_conversion_label),
            jd = T("oid", d.google_conversion_order_id),
            kd = T("bg", d.google_conversion_color);
        a: {
            var w = d.google_conversion_language;
            if (null != w) {
                w = w.toString();
                if (2 == w.length) {
                    w = T("hl", w);
                    break a;
                }
                if (5 == w.length) {
                    w = T("hl", w.substring(0, 2)) + T("gl", w.substring(3, 5));
                    break a;
                }
            }
            w = "";
        }
        var ld = T("guid", "ON"),
            md = !d.google_conversion_domain &&
            "GooglemKTybQhCsO" in A &&
            "function" == typeof A.GooglemKTybQhCsO ?
            T("resp", "GooglemKTybQhCsO") :
            "",
            nd = T("disvt", d.google_disable_viewthrough),
            od = T("eid", bb().join());
        var X = d.google_conversion_date;
        var u = [];
        if (a) {
            var G = a.screen;
            G &&
                (u.push(T("u_h", G.height)),
                    u.push(T("u_w", G.width)),
                    u.push(T("u_ah", G.availHeight)),
                    u.push(T("u_aw", G.availWidth)),
                    u.push(T("u_cd", G.colorDepth)));
            a.history && u.push(T("u_his", a.history.length));
        }
        X &&
            "function" == typeof X.getTimezoneOffset &&
            u.push(T("u_tz", -X.getTimezoneOffset()));
        b &&
            ("function" == typeof b.javaEnabled &&
                u.push(T("u_java", b.javaEnabled())),
                b.plugins && u.push(T("u_nplug", b.plugins.length)),
                b.mimeTypes && u.push(T("u_nmime", b.mimeTypes.length)));
        X = u.join("");
        u = T("gtm", d.google_gtm);
        b = b && b.sendBeacon ? T("sendb", "1") : "";
        G = Zc();
        var qd = T(
                "ig",
                /googleadservices\.com/.test("www.googleadservices.com") ? 1 : 0
            ),
            ua = Tc(d.google_custom_params);
        f = Tc(f);
        f = ua.concat(0 < ua.length && 0 < f.length ? ";" : "", f);
        f = "" == f ? "" : "&".concat("data=", encodeURIComponent(f));
        ua = Uc(c, d);
        var Vb = d.google_conversion_page_url,
            rd = d.google_conversion_referrer_url,
            va = "";
        if (c) {
            if (a.top == a) var r = 0;
            else {
                var J = a.location.ancestorOrigins;
                if (J) r = J[J.length - 1] == a.location.origin ? 1 : 2;
                else {
                    J = a.top;
                    try {
                        var z;
                        if ((z = !!J && null != J.location.href))
                            c: {
                                try {
                                    Da(J.foo);
                                    z = !0;
                                    break c;
                                } catch (sd) {}
                                z = !1;
                            }
                        r = z;
                    } catch (sd) {
                        r = !1;
                    }
                    r = r ? 1 : 2;
                }
            }
            z = Vb ? Vb : 1 == r ? a.top.location.href : a.location.href;
            va += T("frm", r);
            va += T("url", Rc(z));
            va += T("ref", Rc(rd || c.referrer));
        }
        a = [
            h,
            k,
            m,
            n,
            p,
            q,
            t,
            C,
            W,
            gd,
            hd,
            id,
            jd,
            kd,
            w,
            ld,
            md,
            nd,
            od,
            X,
            u,
            b,
            G,
            qd,
            f,
            ua,
            va,
            Xc(c),
            $c(d.google_additional_params),
            $c(
                d.google_remarketing_only ? {} : d.google_additional_conversion_params
            ),
            "&hn=" + S("www.googleadservices.com"),
            ad(a),
        ].join("");
        c = Za();
        a += 0 < c.length ? "&debug_experiment_id=" + c : "";
        if (!d.google_remarketing_only && !d.google_conversion_domain) {
            c = [
                T("mid", d.google_conversion_merchant_id),
                T("fcntr", d.google_basket_feed_country),
                T("flng", d.google_basket_feed_language),
                T("dscnt", d.google_basket_discount),
                T("bttype", d.google_basket_transaction_type),
            ].join("");
            if (d)
                if ((r = d.google_conversion_items)) {
                    z = [];
                    h = 0;
                    for (k = r.length; h < k; h++)
                        (m = r[h]),
                        (n = []),
                        m &&
                        (n.push(U(m.value)),
                            n.push(U(m.quantity)),
                            n.push(U(m.item_id)),
                            n.push(U(m.start_date)),
                            n.push(U(m.end_date)),
                            z.push("(" + n.join("*") + ")"));
                    r = 0 < z.length ? "&item=" + z.join("") : "";
                } else r = "";
            else r = "";
            c = [a, c, r].join("");
            a = 4e3 < c.length ? [a, T("item", "elngth")].join("") : c;
        }
        g += a;
        1 === e || 6 === e ?
            (g += [T("gcp", 1), T("sscte", 1), T("ct_cookie_present", 1)].join("")) :
            3 == e && ((g += T("gcp", 1)), (g += T("ct_cookie_present", 1)));
        Va && ((e = Lc()), void 0 !== e && (g += T("us_privacy", e || "error")));
        Wc(d) && (g = d.l ? g + T("gbcov", 1) : g + T("gbcov", 0));
        return g;
    }

    function bd(a) {
        if (!Kc) {
            var b = Ea("IFRAME");
            b.style.display = "none";
            b.src = "https://bid.g.doubleclick.net/xbbe/pixel?d=KAE";
            a.body.appendChild(b);
        }
    }

    function cd() {
        return new Image();
    }

    function dd(a, b, c, d, e, f) {
        var g = c.onload_callback,
            h;
        e && g && g.call ? (h = g) : (h = function() {});
        d += T("async", "1");
        e = c.google_gtm_url_processor;
        eb(e) && (d = e(d));
        g = (e = c.opt_image_generator) && e.call;
        if (!(f = g || !f)) {
            if (c.google_conversion_domain) var k = !1;
            else
                try {
                    k = Jc(a, b, d, h);
                } catch (m) {
                    k = !1;
                }
            f = !k;
        }
        f && ((a = cd), g && (a = e), (a = a()), (a.src = d), (a.onload = h));
    }

    function ed(a, b) {
        F &&
            "376635471" == ab(2) &&
            ("complete" === b.readyState ?
                bd(b) :
                a.addEventListener ?
                a.addEventListener("load", function() {
                    bd(b);
                }) :
                a.attachEvent("onload", function() {
                    bd(b);
                }));
    }

    function fd(a) {
        if (
            "landing" === a.google_conversion_type ||
            !a.google_conversion_id ||
            (a.google_remarketing_only && a.google_disable_viewthrough)
        )
            return !1;
        a.google_conversion_date = new Date();
        a.google_conversion_time = a.google_conversion_date.getTime();
        a.google_conversion_snippets =
            "number" === typeof a.google_conversion_snippets &&
            0 < a.google_conversion_snippets ?
            a.google_conversion_snippets + 1 :
            1;
        void 0 === a.google_conversion_first_time &&
            (a.google_conversion_first_time = a.google_conversion_time);
        a.google_conversion_js_version = "9";
        0 != a.google_conversion_format &&
            1 != a.google_conversion_format &&
            2 != a.google_conversion_format &&
            3 != a.google_conversion_format &&
            (a.google_conversion_format = 3);
        !1 !== a.google_enable_display_cookie_match &&
            (a.google_enable_display_cookie_match = !0);
        return !0;
    }

    function pd(a, b) {
        function c(f) {
            d[f] = b && null != b[f] ? b[f] : a[f];
        }
        for (var d = {}, e = 0; e < Pc.length; e++) c(Pc[e]);
        c("onload_callback");
        return d;
    }

    function td(a) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = a[c],
                e = void 0;
            d.hasOwnProperty("google_business_vertical") ?
                ((e = d.google_business_vertical),
                    (b[e] = b[e] || { google_business_vertical: e })) :
                ((e = ""), Object.prototype.hasOwnProperty.call(b, e) || (b[e] = {}));
            e = b[e];
            for (
                var f = x(Object, "keys")
                    .call(Object, d)
                    .filter(function(k) {
                        return Mc.hasOwnProperty(k);
                    }),
                    g = 0; g < f.length; g++
            ) {
                var h = f[g];
                h in e || (e[h] = []);
                e[h].push(d[h]);
            }
        }
        return x(Object, "values").call(Object, b);
    }

    function Zc() {
        var a = "";
        db() &&
            (a = Dc()
                .map(function(b) {
                    return b.join("-");
                })
                .join("_"));
        return T("li", a);
    }

    function ad(a) {
        if (!Xa || !a.__gsaExp || !a.__gsaExp.id) return "";
        a = a.__gsaExp.id;
        if (!eb(a)) return "";
        try {
            var b = Number(a());
            return isNaN(b) ? "" : T("gsaexp", b);
        } catch (c) {
            return "";
        }
    }

    function $c(a) {
        if (!a) return "";
        var b = "",
            c;
        for (c in a) a.hasOwnProperty(c) && (b += T(c, a[c]));
        return b;
    }

    function Wc(a) {
        return (a = a.google_gtm_experiments) && a.gbcov ? !0 : !1;
    }

    function Vc(a) {
        return a.google_gcl_cookie_prefix &&
            "_gcl" !== a.google_gcl_cookie_prefix &&
            Nc.test(a.google_gcl_cookie_prefix) ?
            a.google_gcl_cookie_prefix :
            "";
    }

    function ud(a, b, c, d) {
        if (!d.google_remarketing_only && vd(c, d)) {
            var e = d.google_additional_conversion_params || {},
                f = d.google_gtm_experiments;
            e.capi = f && f.apcm ? "2" : "1";
            d.google_additional_conversion_params = e;
            dd(a, c, d, Yc(a, b, c, d, 4), !1, !1);
        }
    }

    function vd(a, b) {
        if (b.google_transport_url) return !1;
        if ((b = b.google_gtm_experiments) && b.apcm) return !0;
        if (!b || !b.capi) return !1;
        if (!(b = Oc))
            if (
                ((b = x("www.googleadservices.com", "endsWith").call(
                            "www.googleadservices.com",
                            "google.com"
                        ) ?
                        "" :
                        "Aw1ancXZSgPKI4zMHHY76+pqhCiHSHIvQQKqxknxFItfh2FDDHQ4F1D4plb2XSafCnMdIe7PAwIXuf/8ZaALIwwAAACfeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGVhZHNlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"),
                    (a = void 0 === a ? window.document : a),
                    b && a.head)
            ) {
                var c = Pa("META");
                a.head.appendChild(c);
                c.httpEquiv = "origin-trial";
                c.content = b;
                b = c;
            } else b = null;
        b
            ?
            ((Oc = !0),
                (a = jb("conversion-measurement") || jb("attribution-reporting"))) :
            (a = !1);
        return a;
    }
    var wd = !1,
        xd = (document.currentScript && document.currentScript.src) || "";

    function yd(a, b, c) {
        try {
            if (!wd && ((wd = !0), !c.google_gtm)) {
                var d = void 0,
                    e = B(a.location.href, "gtm_debug");
                zd(e) && (d = 2);
                d ||
                    0 !== b.referrer.indexOf("https://tagassistant.google.com/") ||
                    (d = 3);
                var f;
                if ((f = !d)) f = 0 <= na(b.cookie.split("; "), "__TAG_ASSISTANT=x");
                f && (d = 4);
                if (!d) {
                    var g = b.documentElement.getAttribute("data-tag-assistant-present");
                    zd(g) && (d = 5);
                }
                if (d) {
                    var h = "AW-" + (c.google_conversion_id || "");
                    if (!a["google.tagmanager.debugui2.queue"]) {
                        a["google.tagmanager.debugui2.queue"] = [];
                        var k = new ka(
                            la,
                            "https://www.googletagmanager.com/debug/bootstrap"
                        );
                        var m = wa(
                            k instanceof ka && k.constructor === ka && k.g === ma ?
                            k.i :
                            "type_error:Const"
                        );
                        c = { id: h, src: "LEGACY", cond: d };
                        var n = ta.exec(sa(m).toString()),
                            p = n[3] || "";
                        var q = wa(n[1] + xa("?", n[2] || "", c) + xa("#", p, void 0));
                        var t = Pa("SCRIPT", b);
                        Ba(t, q);
                        var C = b.getElementsByTagName("script")[0];
                        C && C.parentNode && C.parentNode.insertBefore(t, C);
                    }
                    a["google.tagmanager.debugui2.queue"].push({
                        messageType: "LEGACY_CONTAINER_STARTING",
                        data: { id: h, scriptSource: xd },
                    });
                }
            }
        } catch (W) {}
    }

    function zd(a) {
        if (null == a || 0 === a.length) return !1;
        a = Number(a);
        var b = Date.now();
        return a < b + 3e5 && a > b - 9e5;
    }

    function Ad(a, b) {
        a.onload_callback && "function" == typeof a.onload_callback.call ?
            (a.onload_callback = Qc(b, a.onload_callback)) :
            (a.onload_callback = function() {});
    }

    function Bd(a, b, c, d) {
        yd(a, c, d);
        db() && (Ac(2), d.google_gtm && Cc(K(yc), a));
        var e = !1;
        if (3 != d.google_conversion_format) return !1;
        try {
            if (fd(d)) {
                d.google_remarketing_only &&
                    d.google_enable_display_cookie_match &&
                    !Kc &&
                    F &&
                    $a(["376635470", "376635471"], Qa, 2);
                d.google_remarketing_only &&
                    !d.google_conversion_domain &&
                    F &&
                    $a(["759238990", "759238991"], Ta, 13);
                !d.google_remarketing_only ||
                    d.google_conversion_domain ||
                    (F && ("759248991" == ab(14) || "759248990" == ab(14))) ||
                    (F && $a(["759248990", "759248991"], Sa, 14));
                !1 !== d.google_conversion_linker &&
                    (d.google_gtm || uc(d.google_gcl_cookie_prefix));
                if (
                    1 == d.google_remarketing_only &&
                    null != d.google_gtag_event_data &&
                    null != d.google_gtag_event_data.items &&
                    d.google_gtag_event_data.items.constructor === Array &&
                    0 < d.google_gtag_event_data.items.length
                )
                    Cd(a, b, c, d);
                else {
                    var f = d.google_gtm_experiments && d.google_gtm_experiments.ccmpp;
                    if (
                        d.google_conversion_domain ||
                        (d.google_transport_url &&
                            "https://pagead2.googlesyndication.com/" !==
                            d.google_transport_url)
                    )
                        f = !1;
                    var g = !1;
                    x("www.googleadservices.com", "endsWith").call(
                        "www.googleadservices.com",
                        "google.com"
                    ) && (g = !0);
                    var h = d.google_additional_params;
                    h && h.dg && (g = "e" === h.dg);
                    h = function(k, m, n) {
                        m = void 0 === m ? !0 : m;
                        n = void 0 === n ? !0 : n;
                        dd(a, c, d, Yc(a, b, c, d, k), m, n);
                    };
                    d.google_remarketing_only ?
                        h(2) :
                        g ?
                        (Ad(d, f ? 3 : 2), ud(a, b, c, d), h(1), h(3), f && h(6, !0, !1)) :
                        (Ad(d, f ? 2 : 1),
                            ud(a, b, c, d),
                            h(0),
                            f && h(5, !0, !1),
                            Wc(d) && tc(c, Vc(d)) && ((d.l = !0), h(0, !1)));
                }
                d.google_remarketing_only &&
                    d.google_enable_display_cookie_match &&
                    ed(a, c);
                e = !0;
            }
        } catch (k) {}
        return e;
    }

    function Cd(a, b, c, d) {
        var e = td(d.google_gtag_event_data.items);
        Ad(d, e.length);
        for (var f = 0; f < e.length; f++)
            dd(a, c, d, Yc(a, b, c, d, 2, e[f]), !0, !0),
            (d.google_conversion_time = d.google_conversion_time + 1);
    }
    F = new(function() {
        var a = [],
            b = 0,
            c;
        for (c in cb) a[b++] = cb[c];
        this.i = {};
        this.g = {};
        a = a || [];
        b = 0;
        for (c = a.length; b < c; ++b) this.g[a[b]] = "";
    })();
    $a(["592230570", "592230571"], Ra, 16);
    db() && (Ac(1), Bc());

    function Dd(a, b, c) {
        function d(m, n) {
            var p = new Image();
            p.onload = m;
            p.src = n;
        }

        function e() {
            --f;
            if (0 >= f) {
                var m = Fc(a, !1),
                    n = m[b];
                n && (delete m[b], (m = n[0]) && m.call && m());
            }
        }
        var f = c.length + 1;
        if (2 == c.length) {
            var g = c[0],
                h = c[1];
            0 <= Ha(g, 0, "rmt_tld", g.search(Ia)) &&
                0 <= Ha(g, 0, "ipr", g.search(Ia)) &&
                !h.match(Fa)[6] &&
                ((h += Ga(g)), (c[1] = D(h, "rmt_tld", "1")));
        }
        for (g = 0; g < c.length; g++) {
            h = c[g];
            var k = B(h, "fmt");
            switch (parseInt(k, 10)) {
                case 1:
                case 2:
                    (k = a.document.getElementById("goog_conv_iframe")) && !k.src ?
                        ((k.onload = e), (k.src = h)) :
                        d(e, h);
                    break;
                case 4:
                    Jc(a, a.document, h, e);
                    break;
                case 5:
                    if (a.navigator && a.navigator.sendBeacon)
                        if (a.navigator.sendBeacon(h, "")) {
                            e();
                            break;
                        } else h = D(h, "sendb", 2);
                    h = D(h, "fmt", 3);
                default:
                    d(e, h);
            }
        }
        e();
    }
    var V = ["GooglemKTybQhCsO"],
        Y = A;
    V[0] in Y ||
        "undefined" == typeof Y.execScript ||
        Y.execScript("var " + V[0]);
    for (var Z; V.length && (Z = V.shift());)
        V.length || void 0 === Dd ?
        Y[Z] && Y[Z] !== Object.prototype[Z] ?
        (Y = Y[Z]) :
        (Y = Y[Z] = {}) :
        (Y[Z] = Dd);
    window.google_trackConversion = function(a) {
        var b = window,
            c = navigator,
            d = document;
        a = pd(b, a);
        a.google_conversion_format = 3;
        var e = !!a.google_gtm;
        K(L).i(e);
        return Bd(b, c, d, a);
    };
}.call(this));