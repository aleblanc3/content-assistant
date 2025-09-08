!function(n, r) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define("underscore", r) : (n = "undefined" != typeof globalThis ? globalThis : n || self, function() {
    var t = n._, e = n._ = r();
    e.noConflict = function() {
      return n._ = t, e;
    };
  }());
}(this, function() {
  var n = "1.13.7", r = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || Function("return this")() || {}, t = Array.prototype, e = Object.prototype, u = "undefined" != typeof Symbol ? Symbol.prototype : null, i = t.push, o = t.slice, a = e.toString, f = e.hasOwnProperty, c = "undefined" != typeof ArrayBuffer, l = "undefined" != typeof DataView, s = Array.isArray, p = Object.keys, v = Object.create, h = c && ArrayBuffer.isView, y = isNaN, d = isFinite, g = !{ toString: null }.propertyIsEnumerable("toString"), b = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], m = Math.pow(2, 53) - 1;
  function j(n2, r2) {
    return r2 = null == r2 ? n2.length - 1 : +r2, function() {
      for (var t2 = Math.max(arguments.length - r2, 0), e2 = Array(t2), u2 = 0; u2 < t2; u2++) e2[u2] = arguments[u2 + r2];
      switch (r2) {
        case 0:
          return n2.call(this, e2);
        case 1:
          return n2.call(this, arguments[0], e2);
        case 2:
          return n2.call(this, arguments[0], arguments[1], e2);
      }
      var i2 = Array(r2 + 1);
      for (u2 = 0; u2 < r2; u2++) i2[u2] = arguments[u2];
      return i2[r2] = e2, n2.apply(this, i2);
    };
  }
  function w(n2) {
    var r2 = typeof n2;
    return "function" === r2 || "object" === r2 && !!n2;
  }
  function _(n2) {
    return void 0 === n2;
  }
  function A(n2) {
    return true === n2 || false === n2 || "[object Boolean]" === a.call(n2);
  }
  function x(n2) {
    var r2 = "[object " + n2 + "]";
    return function(n3) {
      return a.call(n3) === r2;
    };
  }
  var S = x("String"), O = x("Number"), M = x("Date"), E = x("RegExp"), B = x("Error"), N = x("Symbol"), I = x("ArrayBuffer"), T = x("Function"), k = r.document && r.document.childNodes;
  "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof k && (T = function(n2) {
    return "function" == typeof n2 || false;
  });
  var D = T, R = x("Object"), V = l && (!/\[native code\]/.test(String(DataView)) || R(new DataView(new ArrayBuffer(8)))), F = "undefined" != typeof Map && R(/* @__PURE__ */ new Map()), P = x("DataView");
  var q = V ? function(n2) {
    return null != n2 && D(n2.getInt8) && I(n2.buffer);
  } : P, U = s || x("Array");
  function W(n2, r2) {
    return null != n2 && f.call(n2, r2);
  }
  var z = x("Arguments");
  !function() {
    z(arguments) || (z = function(n2) {
      return W(n2, "callee");
    });
  }();
  var L = z;
  function $(n2) {
    return O(n2) && y(n2);
  }
  function C(n2) {
    return function() {
      return n2;
    };
  }
  function K(n2) {
    return function(r2) {
      var t2 = n2(r2);
      return "number" == typeof t2 && t2 >= 0 && t2 <= m;
    };
  }
  function J(n2) {
    return function(r2) {
      return null == r2 ? void 0 : r2[n2];
    };
  }
  var G = J("byteLength"), H = K(G), Q = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
  var X = c ? function(n2) {
    return h ? h(n2) && !q(n2) : H(n2) && Q.test(a.call(n2));
  } : C(false), Y = J("length");
  function Z(n2, r2) {
    r2 = function(n3) {
      for (var r3 = {}, t3 = n3.length, e2 = 0; e2 < t3; ++e2) r3[n3[e2]] = true;
      return { contains: function(n4) {
        return true === r3[n4];
      }, push: function(t4) {
        return r3[t4] = true, n3.push(t4);
      } };
    }(r2);
    var t2 = b.length, u2 = n2.constructor, i2 = D(u2) && u2.prototype || e, o2 = "constructor";
    for (W(n2, o2) && !r2.contains(o2) && r2.push(o2); t2--; ) (o2 = b[t2]) in n2 && n2[o2] !== i2[o2] && !r2.contains(o2) && r2.push(o2);
  }
  function nn(n2) {
    if (!w(n2)) return [];
    if (p) return p(n2);
    var r2 = [];
    for (var t2 in n2) W(n2, t2) && r2.push(t2);
    return g && Z(n2, r2), r2;
  }
  function rn(n2, r2) {
    var t2 = nn(r2), e2 = t2.length;
    if (null == n2) return !e2;
    for (var u2 = Object(n2), i2 = 0; i2 < e2; i2++) {
      var o2 = t2[i2];
      if (r2[o2] !== u2[o2] || !(o2 in u2)) return false;
    }
    return true;
  }
  function tn(n2) {
    return n2 instanceof tn ? n2 : this instanceof tn ? void (this._wrapped = n2) : new tn(n2);
  }
  function en(n2) {
    return new Uint8Array(n2.buffer || n2, n2.byteOffset || 0, G(n2));
  }
  tn.VERSION = n, tn.prototype.value = function() {
    return this._wrapped;
  }, tn.prototype.valueOf = tn.prototype.toJSON = tn.prototype.value, tn.prototype.toString = function() {
    return String(this._wrapped);
  };
  var un = "[object DataView]";
  function on(n2, r2, t2, e2) {
    if (n2 === r2) return 0 !== n2 || 1 / n2 == 1 / r2;
    if (null == n2 || null == r2) return false;
    if (n2 != n2) return r2 != r2;
    var i2 = typeof n2;
    return ("function" === i2 || "object" === i2 || "object" == typeof r2) && function n3(r3, t3, e3, i3) {
      r3 instanceof tn && (r3 = r3._wrapped);
      t3 instanceof tn && (t3 = t3._wrapped);
      var o2 = a.call(r3);
      if (o2 !== a.call(t3)) return false;
      if (V && "[object Object]" == o2 && q(r3)) {
        if (!q(t3)) return false;
        o2 = un;
      }
      switch (o2) {
        case "[object RegExp]":
        case "[object String]":
          return "" + r3 == "" + t3;
        case "[object Number]":
          return +r3 != +r3 ? +t3 != +t3 : 0 == +r3 ? 1 / +r3 == 1 / t3 : +r3 == +t3;
        case "[object Date]":
        case "[object Boolean]":
          return +r3 == +t3;
        case "[object Symbol]":
          return u.valueOf.call(r3) === u.valueOf.call(t3);
        case "[object ArrayBuffer]":
        case un:
          return n3(en(r3), en(t3), e3, i3);
      }
      var f2 = "[object Array]" === o2;
      if (!f2 && X(r3)) {
        if (G(r3) !== G(t3)) return false;
        if (r3.buffer === t3.buffer && r3.byteOffset === t3.byteOffset) return true;
        f2 = true;
      }
      if (!f2) {
        if ("object" != typeof r3 || "object" != typeof t3) return false;
        var c2 = r3.constructor, l2 = t3.constructor;
        if (c2 !== l2 && !(D(c2) && c2 instanceof c2 && D(l2) && l2 instanceof l2) && "constructor" in r3 && "constructor" in t3) return false;
      }
      i3 = i3 || [];
      var s2 = (e3 = e3 || []).length;
      for (; s2--; ) if (e3[s2] === r3) return i3[s2] === t3;
      if (e3.push(r3), i3.push(t3), f2) {
        if ((s2 = r3.length) !== t3.length) return false;
        for (; s2--; ) if (!on(r3[s2], t3[s2], e3, i3)) return false;
      } else {
        var p2, v2 = nn(r3);
        if (s2 = v2.length, nn(t3).length !== s2) return false;
        for (; s2--; ) if (p2 = v2[s2], !W(t3, p2) || !on(r3[p2], t3[p2], e3, i3)) return false;
      }
      return e3.pop(), i3.pop(), true;
    }(n2, r2, t2, e2);
  }
  function an(n2) {
    if (!w(n2)) return [];
    var r2 = [];
    for (var t2 in n2) r2.push(t2);
    return g && Z(n2, r2), r2;
  }
  function fn(n2) {
    var r2 = Y(n2);
    return function(t2) {
      if (null == t2) return false;
      var e2 = an(t2);
      if (Y(e2)) return false;
      for (var u2 = 0; u2 < r2; u2++) if (!D(t2[n2[u2]])) return false;
      return n2 !== hn || !D(t2[cn]);
    };
  }
  var cn = "forEach", ln = "has", sn = ["clear", "delete"], pn = ["get", ln, "set"], vn = sn.concat(cn, pn), hn = sn.concat(pn), yn = ["add"].concat(sn, cn, ln), dn = F ? fn(vn) : x("Map"), gn = F ? fn(hn) : x("WeakMap"), bn = F ? fn(yn) : x("Set"), mn = x("WeakSet");
  function jn(n2) {
    for (var r2 = nn(n2), t2 = r2.length, e2 = Array(t2), u2 = 0; u2 < t2; u2++) e2[u2] = n2[r2[u2]];
    return e2;
  }
  function wn(n2) {
    for (var r2 = {}, t2 = nn(n2), e2 = 0, u2 = t2.length; e2 < u2; e2++) r2[n2[t2[e2]]] = t2[e2];
    return r2;
  }
  function _n(n2) {
    var r2 = [];
    for (var t2 in n2) D(n2[t2]) && r2.push(t2);
    return r2.sort();
  }
  function An(n2, r2) {
    return function(t2) {
      var e2 = arguments.length;
      if (r2 && (t2 = Object(t2)), e2 < 2 || null == t2) return t2;
      for (var u2 = 1; u2 < e2; u2++) for (var i2 = arguments[u2], o2 = n2(i2), a2 = o2.length, f2 = 0; f2 < a2; f2++) {
        var c2 = o2[f2];
        r2 && void 0 !== t2[c2] || (t2[c2] = i2[c2]);
      }
      return t2;
    };
  }
  var xn = An(an), Sn = An(nn), On = An(an, true);
  function Mn(n2) {
    if (!w(n2)) return {};
    if (v) return v(n2);
    var r2 = function() {
    };
    r2.prototype = n2;
    var t2 = new r2();
    return r2.prototype = null, t2;
  }
  function En(n2) {
    return U(n2) ? n2 : [n2];
  }
  function Bn(n2) {
    return tn.toPath(n2);
  }
  function Nn(n2, r2) {
    for (var t2 = r2.length, e2 = 0; e2 < t2; e2++) {
      if (null == n2) return;
      n2 = n2[r2[e2]];
    }
    return t2 ? n2 : void 0;
  }
  function In(n2, r2, t2) {
    var e2 = Nn(n2, Bn(r2));
    return _(e2) ? t2 : e2;
  }
  function Tn(n2) {
    return n2;
  }
  function kn(n2) {
    return n2 = Sn({}, n2), function(r2) {
      return rn(r2, n2);
    };
  }
  function Dn(n2) {
    return n2 = Bn(n2), function(r2) {
      return Nn(r2, n2);
    };
  }
  function Rn(n2, r2, t2) {
    if (void 0 === r2) return n2;
    switch (null == t2 ? 3 : t2) {
      case 1:
        return function(t3) {
          return n2.call(r2, t3);
        };
      case 3:
        return function(t3, e2, u2) {
          return n2.call(r2, t3, e2, u2);
        };
      case 4:
        return function(t3, e2, u2, i2) {
          return n2.call(r2, t3, e2, u2, i2);
        };
    }
    return function() {
      return n2.apply(r2, arguments);
    };
  }
  function Vn(n2, r2, t2) {
    return null == n2 ? Tn : D(n2) ? Rn(n2, r2, t2) : w(n2) && !U(n2) ? kn(n2) : Dn(n2);
  }
  function Fn(n2, r2) {
    return Vn(n2, r2, 1 / 0);
  }
  function Pn(n2, r2, t2) {
    return tn.iteratee !== Fn ? tn.iteratee(n2, r2) : Vn(n2, r2, t2);
  }
  function qn() {
  }
  function Un(n2, r2) {
    return null == r2 && (r2 = n2, n2 = 0), n2 + Math.floor(Math.random() * (r2 - n2 + 1));
  }
  tn.toPath = En, tn.iteratee = Fn;
  var Wn = Date.now || function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
  function zn(n2) {
    var r2 = function(r3) {
      return n2[r3];
    }, t2 = "(?:" + nn(n2).join("|") + ")", e2 = RegExp(t2), u2 = RegExp(t2, "g");
    return function(n3) {
      return n3 = null == n3 ? "" : "" + n3, e2.test(n3) ? n3.replace(u2, r2) : n3;
    };
  }
  var Ln = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, $n = zn(Ln), Cn = zn(wn(Ln)), Kn = tn.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }, Jn = /(.)^/, Gn = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" }, Hn = /\\|'|\r|\n|\u2028|\u2029/g;
  function Qn(n2) {
    return "\\" + Gn[n2];
  }
  var Xn = /^\s*(\w|\$)+\s*$/;
  var Yn = 0;
  function Zn(n2, r2, t2, e2, u2) {
    if (!(e2 instanceof r2)) return n2.apply(t2, u2);
    var i2 = Mn(n2.prototype), o2 = n2.apply(i2, u2);
    return w(o2) ? o2 : i2;
  }
  var nr = j(function(n2, r2) {
    var t2 = nr.placeholder, e2 = function() {
      for (var u2 = 0, i2 = r2.length, o2 = Array(i2), a2 = 0; a2 < i2; a2++) o2[a2] = r2[a2] === t2 ? arguments[u2++] : r2[a2];
      for (; u2 < arguments.length; ) o2.push(arguments[u2++]);
      return Zn(n2, e2, this, this, o2);
    };
    return e2;
  });
  nr.placeholder = tn;
  var rr = j(function(n2, r2, t2) {
    if (!D(n2)) throw new TypeError("Bind must be called on a function");
    var e2 = j(function(u2) {
      return Zn(n2, e2, r2, this, t2.concat(u2));
    });
    return e2;
  }), tr = K(Y);
  function er(n2, r2, t2, e2) {
    if (e2 = e2 || [], r2 || 0 === r2) {
      if (r2 <= 0) return e2.concat(n2);
    } else r2 = 1 / 0;
    for (var u2 = e2.length, i2 = 0, o2 = Y(n2); i2 < o2; i2++) {
      var a2 = n2[i2];
      if (tr(a2) && (U(a2) || L(a2))) if (r2 > 1) er(a2, r2 - 1, t2, e2), u2 = e2.length;
      else for (var f2 = 0, c2 = a2.length; f2 < c2; ) e2[u2++] = a2[f2++];
      else t2 || (e2[u2++] = a2);
    }
    return e2;
  }
  var ur = j(function(n2, r2) {
    var t2 = (r2 = er(r2, false, false)).length;
    if (t2 < 1) throw new Error("bindAll must be passed function names");
    for (; t2--; ) {
      var e2 = r2[t2];
      n2[e2] = rr(n2[e2], n2);
    }
    return n2;
  });
  var ir = j(function(n2, r2, t2) {
    return setTimeout(function() {
      return n2.apply(null, t2);
    }, r2);
  }), or = nr(ir, tn, 1);
  function ar(n2) {
    return function() {
      return !n2.apply(this, arguments);
    };
  }
  function fr(n2, r2) {
    var t2;
    return function() {
      return --n2 > 0 && (t2 = r2.apply(this, arguments)), n2 <= 1 && (r2 = null), t2;
    };
  }
  var cr = nr(fr, 2);
  function lr(n2, r2, t2) {
    r2 = Pn(r2, t2);
    for (var e2, u2 = nn(n2), i2 = 0, o2 = u2.length; i2 < o2; i2++) if (r2(n2[e2 = u2[i2]], e2, n2)) return e2;
  }
  function sr(n2) {
    return function(r2, t2, e2) {
      t2 = Pn(t2, e2);
      for (var u2 = Y(r2), i2 = n2 > 0 ? 0 : u2 - 1; i2 >= 0 && i2 < u2; i2 += n2) if (t2(r2[i2], i2, r2)) return i2;
      return -1;
    };
  }
  var pr = sr(1), vr = sr(-1);
  function hr(n2, r2, t2, e2) {
    for (var u2 = (t2 = Pn(t2, e2, 1))(r2), i2 = 0, o2 = Y(n2); i2 < o2; ) {
      var a2 = Math.floor((i2 + o2) / 2);
      t2(n2[a2]) < u2 ? i2 = a2 + 1 : o2 = a2;
    }
    return i2;
  }
  function yr(n2, r2, t2) {
    return function(e2, u2, i2) {
      var a2 = 0, f2 = Y(e2);
      if ("number" == typeof i2) n2 > 0 ? a2 = i2 >= 0 ? i2 : Math.max(i2 + f2, a2) : f2 = i2 >= 0 ? Math.min(i2 + 1, f2) : i2 + f2 + 1;
      else if (t2 && i2 && f2) return e2[i2 = t2(e2, u2)] === u2 ? i2 : -1;
      if (u2 != u2) return (i2 = r2(o.call(e2, a2, f2), $)) >= 0 ? i2 + a2 : -1;
      for (i2 = n2 > 0 ? a2 : f2 - 1; i2 >= 0 && i2 < f2; i2 += n2) if (e2[i2] === u2) return i2;
      return -1;
    };
  }
  var dr = yr(1, pr, hr), gr = yr(-1, vr);
  function br(n2, r2, t2) {
    var e2 = (tr(n2) ? pr : lr)(n2, r2, t2);
    if (void 0 !== e2 && -1 !== e2) return n2[e2];
  }
  function mr(n2, r2, t2) {
    var e2, u2;
    if (r2 = Rn(r2, t2), tr(n2)) for (e2 = 0, u2 = n2.length; e2 < u2; e2++) r2(n2[e2], e2, n2);
    else {
      var i2 = nn(n2);
      for (e2 = 0, u2 = i2.length; e2 < u2; e2++) r2(n2[i2[e2]], i2[e2], n2);
    }
    return n2;
  }
  function jr(n2, r2, t2) {
    r2 = Pn(r2, t2);
    for (var e2 = !tr(n2) && nn(n2), u2 = (e2 || n2).length, i2 = Array(u2), o2 = 0; o2 < u2; o2++) {
      var a2 = e2 ? e2[o2] : o2;
      i2[o2] = r2(n2[a2], a2, n2);
    }
    return i2;
  }
  function wr(n2) {
    var r2 = function(r3, t2, e2, u2) {
      var i2 = !tr(r3) && nn(r3), o2 = (i2 || r3).length, a2 = n2 > 0 ? 0 : o2 - 1;
      for (u2 || (e2 = r3[i2 ? i2[a2] : a2], a2 += n2); a2 >= 0 && a2 < o2; a2 += n2) {
        var f2 = i2 ? i2[a2] : a2;
        e2 = t2(e2, r3[f2], f2, r3);
      }
      return e2;
    };
    return function(n3, t2, e2, u2) {
      var i2 = arguments.length >= 3;
      return r2(n3, Rn(t2, u2, 4), e2, i2);
    };
  }
  var _r = wr(1), Ar = wr(-1);
  function xr(n2, r2, t2) {
    var e2 = [];
    return r2 = Pn(r2, t2), mr(n2, function(n3, t3, u2) {
      r2(n3, t3, u2) && e2.push(n3);
    }), e2;
  }
  function Sr(n2, r2, t2) {
    r2 = Pn(r2, t2);
    for (var e2 = !tr(n2) && nn(n2), u2 = (e2 || n2).length, i2 = 0; i2 < u2; i2++) {
      var o2 = e2 ? e2[i2] : i2;
      if (!r2(n2[o2], o2, n2)) return false;
    }
    return true;
  }
  function Or(n2, r2, t2) {
    r2 = Pn(r2, t2);
    for (var e2 = !tr(n2) && nn(n2), u2 = (e2 || n2).length, i2 = 0; i2 < u2; i2++) {
      var o2 = e2 ? e2[i2] : i2;
      if (r2(n2[o2], o2, n2)) return true;
    }
    return false;
  }
  function Mr(n2, r2, t2, e2) {
    return tr(n2) || (n2 = jn(n2)), ("number" != typeof t2 || e2) && (t2 = 0), dr(n2, r2, t2) >= 0;
  }
  var Er = j(function(n2, r2, t2) {
    var e2, u2;
    return D(r2) ? u2 = r2 : (r2 = Bn(r2), e2 = r2.slice(0, -1), r2 = r2[r2.length - 1]), jr(n2, function(n3) {
      var i2 = u2;
      if (!i2) {
        if (e2 && e2.length && (n3 = Nn(n3, e2)), null == n3) return;
        i2 = n3[r2];
      }
      return null == i2 ? i2 : i2.apply(n3, t2);
    });
  });
  function Br(n2, r2) {
    return jr(n2, Dn(r2));
  }
  function Nr(n2, r2, t2) {
    var e2, u2, i2 = -1 / 0, o2 = -1 / 0;
    if (null == r2 || "number" == typeof r2 && "object" != typeof n2[0] && null != n2) for (var a2 = 0, f2 = (n2 = tr(n2) ? n2 : jn(n2)).length; a2 < f2; a2++) null != (e2 = n2[a2]) && e2 > i2 && (i2 = e2);
    else r2 = Pn(r2, t2), mr(n2, function(n3, t3, e3) {
      ((u2 = r2(n3, t3, e3)) > o2 || u2 === -1 / 0 && i2 === -1 / 0) && (i2 = n3, o2 = u2);
    });
    return i2;
  }
  var Ir = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  function Tr(n2) {
    return n2 ? U(n2) ? o.call(n2) : S(n2) ? n2.match(Ir) : tr(n2) ? jr(n2, Tn) : jn(n2) : [];
  }
  function kr(n2, r2, t2) {
    if (null == r2 || t2) return tr(n2) || (n2 = jn(n2)), n2[Un(n2.length - 1)];
    var e2 = Tr(n2), u2 = Y(e2);
    r2 = Math.max(Math.min(r2, u2), 0);
    for (var i2 = u2 - 1, o2 = 0; o2 < r2; o2++) {
      var a2 = Un(o2, i2), f2 = e2[o2];
      e2[o2] = e2[a2], e2[a2] = f2;
    }
    return e2.slice(0, r2);
  }
  function Dr(n2, r2) {
    return function(t2, e2, u2) {
      var i2 = r2 ? [[], []] : {};
      return e2 = Pn(e2, u2), mr(t2, function(r3, u3) {
        var o2 = e2(r3, u3, t2);
        n2(i2, r3, o2);
      }), i2;
    };
  }
  var Rr = Dr(function(n2, r2, t2) {
    W(n2, t2) ? n2[t2].push(r2) : n2[t2] = [r2];
  }), Vr = Dr(function(n2, r2, t2) {
    n2[t2] = r2;
  }), Fr = Dr(function(n2, r2, t2) {
    W(n2, t2) ? n2[t2]++ : n2[t2] = 1;
  }), Pr = Dr(function(n2, r2, t2) {
    n2[t2 ? 0 : 1].push(r2);
  }, true);
  function qr(n2, r2, t2) {
    return r2 in t2;
  }
  var Ur = j(function(n2, r2) {
    var t2 = {}, e2 = r2[0];
    if (null == n2) return t2;
    D(e2) ? (r2.length > 1 && (e2 = Rn(e2, r2[1])), r2 = an(n2)) : (e2 = qr, r2 = er(r2, false, false), n2 = Object(n2));
    for (var u2 = 0, i2 = r2.length; u2 < i2; u2++) {
      var o2 = r2[u2], a2 = n2[o2];
      e2(a2, o2, n2) && (t2[o2] = a2);
    }
    return t2;
  }), Wr = j(function(n2, r2) {
    var t2, e2 = r2[0];
    return D(e2) ? (e2 = ar(e2), r2.length > 1 && (t2 = r2[1])) : (r2 = jr(er(r2, false, false), String), e2 = function(n3, t3) {
      return !Mr(r2, t3);
    }), Ur(n2, e2, t2);
  });
  function zr(n2, r2, t2) {
    return o.call(n2, 0, Math.max(0, n2.length - (null == r2 || t2 ? 1 : r2)));
  }
  function Lr(n2, r2, t2) {
    return null == n2 || n2.length < 1 ? null == r2 || t2 ? void 0 : [] : null == r2 || t2 ? n2[0] : zr(n2, n2.length - r2);
  }
  function $r(n2, r2, t2) {
    return o.call(n2, null == r2 || t2 ? 1 : r2);
  }
  var Cr = j(function(n2, r2) {
    return r2 = er(r2, true, true), xr(n2, function(n3) {
      return !Mr(r2, n3);
    });
  }), Kr = j(function(n2, r2) {
    return Cr(n2, r2);
  });
  function Jr(n2, r2, t2, e2) {
    A(r2) || (e2 = t2, t2 = r2, r2 = false), null != t2 && (t2 = Pn(t2, e2));
    for (var u2 = [], i2 = [], o2 = 0, a2 = Y(n2); o2 < a2; o2++) {
      var f2 = n2[o2], c2 = t2 ? t2(f2, o2, n2) : f2;
      r2 && !t2 ? (o2 && i2 === c2 || u2.push(f2), i2 = c2) : t2 ? Mr(i2, c2) || (i2.push(c2), u2.push(f2)) : Mr(u2, f2) || u2.push(f2);
    }
    return u2;
  }
  var Gr = j(function(n2) {
    return Jr(er(n2, true, true));
  });
  function Hr(n2) {
    for (var r2 = n2 && Nr(n2, Y).length || 0, t2 = Array(r2), e2 = 0; e2 < r2; e2++) t2[e2] = Br(n2, e2);
    return t2;
  }
  var Qr = j(Hr);
  function Xr(n2, r2) {
    return n2._chain ? tn(r2).chain() : r2;
  }
  function Yr(n2) {
    return mr(_n(n2), function(r2) {
      var t2 = tn[r2] = n2[r2];
      tn.prototype[r2] = function() {
        var n3 = [this._wrapped];
        return i.apply(n3, arguments), Xr(this, t2.apply(tn, n3));
      };
    }), tn;
  }
  mr(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n2) {
    var r2 = t[n2];
    tn.prototype[n2] = function() {
      var t2 = this._wrapped;
      return null != t2 && (r2.apply(t2, arguments), "shift" !== n2 && "splice" !== n2 || 0 !== t2.length || delete t2[0]), Xr(this, t2);
    };
  }), mr(["concat", "join", "slice"], function(n2) {
    var r2 = t[n2];
    tn.prototype[n2] = function() {
      var n3 = this._wrapped;
      return null != n3 && (n3 = r2.apply(n3, arguments)), Xr(this, n3);
    };
  });
  var Zr = Yr({ __proto__: null, VERSION: n, restArguments: j, isObject: w, isNull: function(n2) {
    return null === n2;
  }, isUndefined: _, isBoolean: A, isElement: function(n2) {
    return !(!n2 || 1 !== n2.nodeType);
  }, isString: S, isNumber: O, isDate: M, isRegExp: E, isError: B, isSymbol: N, isArrayBuffer: I, isDataView: q, isArray: U, isFunction: D, isArguments: L, isFinite: function(n2) {
    return !N(n2) && d(n2) && !isNaN(parseFloat(n2));
  }, isNaN: $, isTypedArray: X, isEmpty: function(n2) {
    if (null == n2) return true;
    var r2 = Y(n2);
    return "number" == typeof r2 && (U(n2) || S(n2) || L(n2)) ? 0 === r2 : 0 === Y(nn(n2));
  }, isMatch: rn, isEqual: function(n2, r2) {
    return on(n2, r2);
  }, isMap: dn, isWeakMap: gn, isSet: bn, isWeakSet: mn, keys: nn, allKeys: an, values: jn, pairs: function(n2) {
    for (var r2 = nn(n2), t2 = r2.length, e2 = Array(t2), u2 = 0; u2 < t2; u2++) e2[u2] = [r2[u2], n2[r2[u2]]];
    return e2;
  }, invert: wn, functions: _n, methods: _n, extend: xn, extendOwn: Sn, assign: Sn, defaults: On, create: function(n2, r2) {
    var t2 = Mn(n2);
    return r2 && Sn(t2, r2), t2;
  }, clone: function(n2) {
    return w(n2) ? U(n2) ? n2.slice() : xn({}, n2) : n2;
  }, tap: function(n2, r2) {
    return r2(n2), n2;
  }, get: In, has: function(n2, r2) {
    for (var t2 = (r2 = Bn(r2)).length, e2 = 0; e2 < t2; e2++) {
      var u2 = r2[e2];
      if (!W(n2, u2)) return false;
      n2 = n2[u2];
    }
    return !!t2;
  }, mapObject: function(n2, r2, t2) {
    r2 = Pn(r2, t2);
    for (var e2 = nn(n2), u2 = e2.length, i2 = {}, o2 = 0; o2 < u2; o2++) {
      var a2 = e2[o2];
      i2[a2] = r2(n2[a2], a2, n2);
    }
    return i2;
  }, identity: Tn, constant: C, noop: qn, toPath: En, property: Dn, propertyOf: function(n2) {
    return null == n2 ? qn : function(r2) {
      return In(n2, r2);
    };
  }, matcher: kn, matches: kn, times: function(n2, r2, t2) {
    var e2 = Array(Math.max(0, n2));
    r2 = Rn(r2, t2, 1);
    for (var u2 = 0; u2 < n2; u2++) e2[u2] = r2(u2);
    return e2;
  }, random: Un, now: Wn, escape: $n, unescape: Cn, templateSettings: Kn, template: function(n2, r2, t2) {
    !r2 && t2 && (r2 = t2), r2 = On({}, r2, tn.templateSettings);
    var e2 = RegExp([(r2.escape || Jn).source, (r2.interpolate || Jn).source, (r2.evaluate || Jn).source].join("|") + "|$", "g"), u2 = 0, i2 = "__p+='";
    n2.replace(e2, function(r3, t3, e3, o3, a3) {
      return i2 += n2.slice(u2, a3).replace(Hn, Qn), u2 = a3 + r3.length, t3 ? i2 += "'+\n((__t=(" + t3 + "))==null?'':_.escape(__t))+\n'" : e3 ? i2 += "'+\n((__t=(" + e3 + "))==null?'':__t)+\n'" : o3 && (i2 += "';\n" + o3 + "\n__p+='"), r3;
    }), i2 += "';\n";
    var o2, a2 = r2.variable;
    if (a2) {
      if (!Xn.test(a2)) throw new Error("variable is not a bare identifier: " + a2);
    } else i2 = "with(obj||{}){\n" + i2 + "}\n", a2 = "obj";
    i2 = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i2 + "return __p;\n";
    try {
      o2 = new Function(a2, "_", i2);
    } catch (n3) {
      throw n3.source = i2, n3;
    }
    var f2 = function(n3) {
      return o2.call(this, n3, tn);
    };
    return f2.source = "function(" + a2 + "){\n" + i2 + "}", f2;
  }, result: function(n2, r2, t2) {
    var e2 = (r2 = Bn(r2)).length;
    if (!e2) return D(t2) ? t2.call(n2) : t2;
    for (var u2 = 0; u2 < e2; u2++) {
      var i2 = null == n2 ? void 0 : n2[r2[u2]];
      void 0 === i2 && (i2 = t2, u2 = e2), n2 = D(i2) ? i2.call(n2) : i2;
    }
    return n2;
  }, uniqueId: function(n2) {
    var r2 = ++Yn + "";
    return n2 ? n2 + r2 : r2;
  }, chain: function(n2) {
    var r2 = tn(n2);
    return r2._chain = true, r2;
  }, iteratee: Fn, partial: nr, bind: rr, bindAll: ur, memoize: function(n2, r2) {
    var t2 = function(e2) {
      var u2 = t2.cache, i2 = "" + (r2 ? r2.apply(this, arguments) : e2);
      return W(u2, i2) || (u2[i2] = n2.apply(this, arguments)), u2[i2];
    };
    return t2.cache = {}, t2;
  }, delay: ir, defer: or, throttle: function(n2, r2, t2) {
    var e2, u2, i2, o2, a2 = 0;
    t2 || (t2 = {});
    var f2 = function() {
      a2 = false === t2.leading ? 0 : Wn(), e2 = null, o2 = n2.apply(u2, i2), e2 || (u2 = i2 = null);
    }, c2 = function() {
      var c3 = Wn();
      a2 || false !== t2.leading || (a2 = c3);
      var l2 = r2 - (c3 - a2);
      return u2 = this, i2 = arguments, l2 <= 0 || l2 > r2 ? (e2 && (clearTimeout(e2), e2 = null), a2 = c3, o2 = n2.apply(u2, i2), e2 || (u2 = i2 = null)) : e2 || false === t2.trailing || (e2 = setTimeout(f2, l2)), o2;
    };
    return c2.cancel = function() {
      clearTimeout(e2), a2 = 0, e2 = u2 = i2 = null;
    }, c2;
  }, debounce: function(n2, r2, t2) {
    var e2, u2, i2, o2, a2, f2 = function() {
      var c3 = Wn() - u2;
      r2 > c3 ? e2 = setTimeout(f2, r2 - c3) : (e2 = null, t2 || (o2 = n2.apply(a2, i2)), e2 || (i2 = a2 = null));
    }, c2 = j(function(c3) {
      return a2 = this, i2 = c3, u2 = Wn(), e2 || (e2 = setTimeout(f2, r2), t2 && (o2 = n2.apply(a2, i2))), o2;
    });
    return c2.cancel = function() {
      clearTimeout(e2), e2 = i2 = a2 = null;
    }, c2;
  }, wrap: function(n2, r2) {
    return nr(r2, n2);
  }, negate: ar, compose: function() {
    var n2 = arguments, r2 = n2.length - 1;
    return function() {
      for (var t2 = r2, e2 = n2[r2].apply(this, arguments); t2--; ) e2 = n2[t2].call(this, e2);
      return e2;
    };
  }, after: function(n2, r2) {
    return function() {
      if (--n2 < 1) return r2.apply(this, arguments);
    };
  }, before: fr, once: cr, findKey: lr, findIndex: pr, findLastIndex: vr, sortedIndex: hr, indexOf: dr, lastIndexOf: gr, find: br, detect: br, findWhere: function(n2, r2) {
    return br(n2, kn(r2));
  }, each: mr, forEach: mr, map: jr, collect: jr, reduce: _r, foldl: _r, inject: _r, reduceRight: Ar, foldr: Ar, filter: xr, select: xr, reject: function(n2, r2, t2) {
    return xr(n2, ar(Pn(r2)), t2);
  }, every: Sr, all: Sr, some: Or, any: Or, contains: Mr, includes: Mr, include: Mr, invoke: Er, pluck: Br, where: function(n2, r2) {
    return xr(n2, kn(r2));
  }, max: Nr, min: function(n2, r2, t2) {
    var e2, u2, i2 = 1 / 0, o2 = 1 / 0;
    if (null == r2 || "number" == typeof r2 && "object" != typeof n2[0] && null != n2) for (var a2 = 0, f2 = (n2 = tr(n2) ? n2 : jn(n2)).length; a2 < f2; a2++) null != (e2 = n2[a2]) && e2 < i2 && (i2 = e2);
    else r2 = Pn(r2, t2), mr(n2, function(n3, t3, e3) {
      ((u2 = r2(n3, t3, e3)) < o2 || u2 === 1 / 0 && i2 === 1 / 0) && (i2 = n3, o2 = u2);
    });
    return i2;
  }, shuffle: function(n2) {
    return kr(n2, 1 / 0);
  }, sample: kr, sortBy: function(n2, r2, t2) {
    var e2 = 0;
    return r2 = Pn(r2, t2), Br(jr(n2, function(n3, t3, u2) {
      return { value: n3, index: e2++, criteria: r2(n3, t3, u2) };
    }).sort(function(n3, r3) {
      var t3 = n3.criteria, e3 = r3.criteria;
      if (t3 !== e3) {
        if (t3 > e3 || void 0 === t3) return 1;
        if (t3 < e3 || void 0 === e3) return -1;
      }
      return n3.index - r3.index;
    }), "value");
  }, groupBy: Rr, indexBy: Vr, countBy: Fr, partition: Pr, toArray: Tr, size: function(n2) {
    return null == n2 ? 0 : tr(n2) ? n2.length : nn(n2).length;
  }, pick: Ur, omit: Wr, first: Lr, head: Lr, take: Lr, initial: zr, last: function(n2, r2, t2) {
    return null == n2 || n2.length < 1 ? null == r2 || t2 ? void 0 : [] : null == r2 || t2 ? n2[n2.length - 1] : $r(n2, Math.max(0, n2.length - r2));
  }, rest: $r, tail: $r, drop: $r, compact: function(n2) {
    return xr(n2, Boolean);
  }, flatten: function(n2, r2) {
    return er(n2, r2, false);
  }, without: Kr, uniq: Jr, unique: Jr, union: Gr, intersection: function(n2) {
    for (var r2 = [], t2 = arguments.length, e2 = 0, u2 = Y(n2); e2 < u2; e2++) {
      var i2 = n2[e2];
      if (!Mr(r2, i2)) {
        var o2;
        for (o2 = 1; o2 < t2 && Mr(arguments[o2], i2); o2++) ;
        o2 === t2 && r2.push(i2);
      }
    }
    return r2;
  }, difference: Cr, unzip: Hr, transpose: Hr, zip: Qr, object: function(n2, r2) {
    for (var t2 = {}, e2 = 0, u2 = Y(n2); e2 < u2; e2++) r2 ? t2[n2[e2]] = r2[e2] : t2[n2[e2][0]] = n2[e2][1];
    return t2;
  }, range: function(n2, r2, t2) {
    null == r2 && (r2 = n2 || 0, n2 = 0), t2 || (t2 = r2 < n2 ? -1 : 1);
    for (var e2 = Math.max(Math.ceil((r2 - n2) / t2), 0), u2 = Array(e2), i2 = 0; i2 < e2; i2++, n2 += t2) u2[i2] = n2;
    return u2;
  }, chunk: function(n2, r2) {
    if (null == r2 || r2 < 1) return [];
    for (var t2 = [], e2 = 0, u2 = n2.length; e2 < u2; ) t2.push(o.call(n2, e2, e2 += r2));
    return t2;
  }, mixin: Yr, default: tn });
  return Zr._ = Zr, Zr;
});
//# sourceMappingURL=scripts.js.map
