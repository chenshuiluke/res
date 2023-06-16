var BS = (n, r, l) => new Promise((o, c) => {
  var p = (E) => {
    try {
      S(l.next(E));
    } catch (x) {
      c(x);
    }
  }, d = (E) => {
    try {
      S(l.throw(E));
    } catch (x) {
      c(x);
    }
  }, S = (E) => E.done ? o(E.value) : Promise.resolve(E.value).then(p, d);
  S((l = l.apply(n, r)).next());
});
var IS = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function lD(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function uD(n) {
  if (n.__esModule)
    return n;
  var r = n.default;
  if (typeof r == "function") {
    var l = function o() {
      if (this instanceof o) {
        var c = [null];
        c.push.apply(c, arguments);
        var p = Function.bind.apply(r, c);
        return new p();
      }
      return r.apply(this, arguments);
    };
    l.prototype = r.prototype;
  } else
    l = {};
  return Object.defineProperty(l, "__esModule", { value: !0 }), Object.keys(n).forEach(function(o) {
    var c = Object.getOwnPropertyDescriptor(n, o);
    Object.defineProperty(l, o, c.get ? c : {
      enumerable: !0,
      get: function() {
        return n[o];
      }
    });
  }), l;
}
var _0 = { exports: {} }, sf = {}, k0 = { exports: {} }, Be = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lw;
function Yj() {
  if (Lw)
    return Be;
  Lw = 1;
  var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), d = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), L = Symbol.iterator;
  function M(N) {
    return N === null || typeof N != "object" ? null : (N = L && N[L] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var F = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Y = Object.assign, re = {};
  function Ne(N, ee, ke) {
    this.props = N, this.context = ee, this.refs = re, this.updater = ke || F;
  }
  Ne.prototype.isReactComponent = {}, Ne.prototype.setState = function(N, ee) {
    if (typeof N != "object" && typeof N != "function" && N != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, N, ee, "setState");
  }, Ne.prototype.forceUpdate = function(N) {
    this.updater.enqueueForceUpdate(this, N, "forceUpdate");
  };
  function _() {
  }
  _.prototype = Ne.prototype;
  function R(N, ee, ke) {
    this.props = N, this.context = ee, this.refs = re, this.updater = ke || F;
  }
  var b = R.prototype = new _();
  b.constructor = R, Y(b, Ne.prototype), b.isPureReactComponent = !0;
  var B = Array.isArray, I = Object.prototype.hasOwnProperty, te = {
    current: null
  }, K = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
  function pe(N, ee, ke) {
    var Ie, Ae = {}, ot = null, st = null;
    if (ee != null)
      for (Ie in ee.ref !== void 0 && (st = ee.ref), ee.key !== void 0 && (ot = "" + ee.key), ee)
        I.call(ee, Ie) && !K.hasOwnProperty(Ie) && (Ae[Ie] = ee[Ie]);
    var rt = arguments.length - 2;
    if (rt === 1)
      Ae.children = ke;
    else if (1 < rt) {
      for (var et = Array(rt), ft = 0; ft < rt; ft++)
        et[ft] = arguments[ft + 2];
      Ae.children = et;
    }
    if (N && N.defaultProps)
      for (Ie in rt = N.defaultProps, rt)
        Ae[Ie] === void 0 && (Ae[Ie] = rt[Ie]);
    return {
      $$typeof: n,
      type: N,
      key: ot,
      ref: st,
      props: Ae,
      _owner: te.current
    };
  }
  function Qe(N, ee) {
    return {
      $$typeof: n,
      type: N.type,
      key: ee,
      ref: N.ref,
      props: N.props,
      _owner: N._owner
    };
  }
  function xe(N) {
    return typeof N == "object" && N !== null && N.$$typeof === n;
  }
  function nt(N) {
    var ee = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + N.replace(/[=:]/g, function(ke) {
      return ee[ke];
    });
  }
  var Z = /\/+/g;
  function Te(N, ee) {
    return typeof N == "object" && N !== null && N.key != null ? nt("" + N.key) : ee.toString(36);
  }
  function Ue(N, ee, ke, Ie, Ae) {
    var ot = typeof N;
    (ot === "undefined" || ot === "boolean") && (N = null);
    var st = !1;
    if (N === null)
      st = !0;
    else
      switch (ot) {
        case "string":
        case "number":
          st = !0;
          break;
        case "object":
          switch (N.$$typeof) {
            case n:
            case r:
              st = !0;
          }
      }
    if (st)
      return st = N, Ae = Ae(st), N = Ie === "" ? "." + Te(st, 0) : Ie, B(Ae) ? (ke = "", N != null && (ke = N.replace(Z, "$&/") + "/"), Ue(Ae, ee, ke, "", function(ft) {
        return ft;
      })) : Ae != null && (xe(Ae) && (Ae = Qe(Ae, ke + (!Ae.key || st && st.key === Ae.key ? "" : ("" + Ae.key).replace(Z, "$&/") + "/") + N)), ee.push(Ae)), 1;
    if (st = 0, Ie = Ie === "" ? "." : Ie + ":", B(N))
      for (var rt = 0; rt < N.length; rt++) {
        ot = N[rt];
        var et = Ie + Te(ot, rt);
        st += Ue(ot, ee, ke, et, Ae);
      }
    else if (et = M(N), typeof et == "function")
      for (N = et.call(N), rt = 0; !(ot = N.next()).done; )
        ot = ot.value, et = Ie + Te(ot, rt++), st += Ue(ot, ee, ke, et, Ae);
    else if (ot === "object")
      throw ee = String(N), Error("Objects are not valid as a React child (found: " + (ee === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : ee) + "). If you meant to render a collection of children, use an array instead.");
    return st;
  }
  function ht(N, ee, ke) {
    if (N == null)
      return N;
    var Ie = [], Ae = 0;
    return Ue(N, Ie, "", "", function(ot) {
      return ee.call(ke, ot, Ae++);
    }), Ie;
  }
  function Lt(N) {
    if (N._status === -1) {
      var ee = N._result;
      ee = ee(), ee.then(function(ke) {
        (N._status === 0 || N._status === -1) && (N._status = 1, N._result = ke);
      }, function(ke) {
        (N._status === 0 || N._status === -1) && (N._status = 2, N._result = ke);
      }), N._status === -1 && (N._status = 0, N._result = ee);
    }
    if (N._status === 1)
      return N._result.default;
    throw N._result;
  }
  var me = {
    current: null
  }, Ft = {
    transition: null
  }, Wn = {
    ReactCurrentDispatcher: me,
    ReactCurrentBatchConfig: Ft,
    ReactCurrentOwner: te
  };
  return Be.Children = {
    map: ht,
    forEach: function(N, ee, ke) {
      ht(N, function() {
        ee.apply(this, arguments);
      }, ke);
    },
    count: function(N) {
      var ee = 0;
      return ht(N, function() {
        ee++;
      }), ee;
    },
    toArray: function(N) {
      return ht(N, function(ee) {
        return ee;
      }) || [];
    },
    only: function(N) {
      if (!xe(N))
        throw Error("React.Children.only expected to receive a single React element child.");
      return N;
    }
  }, Be.Component = Ne, Be.Fragment = l, Be.Profiler = c, Be.PureComponent = R, Be.StrictMode = o, Be.Suspense = E, Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wn, Be.cloneElement = function(N, ee, ke) {
    if (N == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
    var Ie = Y({}, N.props), Ae = N.key, ot = N.ref, st = N._owner;
    if (ee != null) {
      if (ee.ref !== void 0 && (ot = ee.ref, st = te.current), ee.key !== void 0 && (Ae = "" + ee.key), N.type && N.type.defaultProps)
        var rt = N.type.defaultProps;
      for (et in ee)
        I.call(ee, et) && !K.hasOwnProperty(et) && (Ie[et] = ee[et] === void 0 && rt !== void 0 ? rt[et] : ee[et]);
    }
    var et = arguments.length - 2;
    if (et === 1)
      Ie.children = ke;
    else if (1 < et) {
      rt = Array(et);
      for (var ft = 0; ft < et; ft++)
        rt[ft] = arguments[ft + 2];
      Ie.children = rt;
    }
    return {
      $$typeof: n,
      type: N.type,
      key: Ae,
      ref: ot,
      props: Ie,
      _owner: st
    };
  }, Be.createContext = function(N) {
    return N = {
      $$typeof: d,
      _currentValue: N,
      _currentValue2: N,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, N.Provider = {
      $$typeof: p,
      _context: N
    }, N.Consumer = N;
  }, Be.createElement = pe, Be.createFactory = function(N) {
    var ee = pe.bind(null, N);
    return ee.type = N, ee;
  }, Be.createRef = function() {
    return {
      current: null
    };
  }, Be.forwardRef = function(N) {
    return {
      $$typeof: S,
      render: N
    };
  }, Be.isValidElement = xe, Be.lazy = function(N) {
    return {
      $$typeof: j,
      _payload: {
        _status: -1,
        _result: N
      },
      _init: Lt
    };
  }, Be.memo = function(N, ee) {
    return {
      $$typeof: x,
      type: N,
      compare: ee === void 0 ? null : ee
    };
  }, Be.startTransition = function(N) {
    var ee = Ft.transition;
    Ft.transition = {};
    try {
      N();
    } finally {
      Ft.transition = ee;
    }
  }, Be.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Be.useCallback = function(N, ee) {
    return me.current.useCallback(N, ee);
  }, Be.useContext = function(N) {
    return me.current.useContext(N);
  }, Be.useDebugValue = function() {
  }, Be.useDeferredValue = function(N) {
    return me.current.useDeferredValue(N);
  }, Be.useEffect = function(N, ee) {
    return me.current.useEffect(N, ee);
  }, Be.useId = function() {
    return me.current.useId();
  }, Be.useImperativeHandle = function(N, ee, ke) {
    return me.current.useImperativeHandle(N, ee, ke);
  }, Be.useInsertionEffect = function(N, ee) {
    return me.current.useInsertionEffect(N, ee);
  }, Be.useLayoutEffect = function(N, ee) {
    return me.current.useLayoutEffect(N, ee);
  }, Be.useMemo = function(N, ee) {
    return me.current.useMemo(N, ee);
  }, Be.useReducer = function(N, ee, ke) {
    return me.current.useReducer(N, ee, ke);
  }, Be.useRef = function(N) {
    return me.current.useRef(N);
  }, Be.useState = function(N) {
    return me.current.useState(N);
  }, Be.useSyncExternalStore = function(N, ee, ke) {
    return me.current.useSyncExternalStore(N, ee, ke);
  }, Be.useTransition = function() {
    return me.current.useTransition();
  }, Be.version = "18.2.0", Be;
}
var Ef = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Ef.exports;
var Nw;
function Qj() {
  return Nw || (Nw = 1, function(n, r) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var l = "18.2.0", o = Symbol.for("react.element"), c = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), x = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), Ne = Symbol.iterator, _ = "@@iterator";
      function R(m) {
        if (m === null || typeof m != "object")
          return null;
        var C = Ne && m[Ne] || m[_];
        return typeof C == "function" ? C : null;
      }
      var b = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, B = {
        transition: null
      }, I = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, te = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, K = {}, pe = null;
      function Qe(m) {
        pe = m;
      }
      K.setExtraStackFrame = function(m) {
        pe = m;
      }, K.getCurrentStack = null, K.getStackAddendum = function() {
        var m = "";
        pe && (m += pe);
        var C = K.getCurrentStack;
        return C && (m += C() || ""), m;
      };
      var xe = !1, nt = !1, Z = !1, Te = !1, Ue = !1, ht = {
        ReactCurrentDispatcher: b,
        ReactCurrentBatchConfig: B,
        ReactCurrentOwner: te
      };
      ht.ReactDebugCurrentFrame = K, ht.ReactCurrentActQueue = I;
      function Lt(m) {
        {
          for (var C = arguments.length, A = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            A[H - 1] = arguments[H];
          Ft("warn", m, A);
        }
      }
      function me(m) {
        {
          for (var C = arguments.length, A = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            A[H - 1] = arguments[H];
          Ft("error", m, A);
        }
      }
      function Ft(m, C, A) {
        {
          var H = ht.ReactDebugCurrentFrame, J = H.getStackAddendum();
          J !== "" && (C += "%s", A = A.concat([J]));
          var Ce = A.map(function(ve) {
            return String(ve);
          });
          Ce.unshift("Warning: " + C), Function.prototype.apply.call(console[m], console, Ce);
        }
      }
      var Wn = {};
      function N(m, C) {
        {
          var A = m.constructor, H = A && (A.displayName || A.name) || "ReactClass", J = H + "." + C;
          if (Wn[J])
            return;
          me("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, H), Wn[J] = !0;
        }
      }
      var ee = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(m) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(m, C, A) {
          N(m, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(m, C, A, H) {
          N(m, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(m, C, A, H) {
          N(m, "setState");
        }
      }, ke = Object.assign, Ie = {};
      Object.freeze(Ie);
      function Ae(m, C, A) {
        this.props = m, this.context = C, this.refs = Ie, this.updater = A || ee;
      }
      Ae.prototype.isReactComponent = {}, Ae.prototype.setState = function(m, C) {
        if (typeof m != "object" && typeof m != "function" && m != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, m, C, "setState");
      }, Ae.prototype.forceUpdate = function(m) {
        this.updater.enqueueForceUpdate(this, m, "forceUpdate");
      };
      {
        var ot = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, st = function(m, C) {
          Object.defineProperty(Ae.prototype, m, {
            get: function() {
              Lt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var rt in ot)
          ot.hasOwnProperty(rt) && st(rt, ot[rt]);
      }
      function et() {
      }
      et.prototype = Ae.prototype;
      function ft(m, C, A) {
        this.props = m, this.context = C, this.refs = Ie, this.updater = A || ee;
      }
      var xr = ft.prototype = new et();
      xr.constructor = ft, ke(xr, Ae.prototype), xr.isPureReactComponent = !0;
      function $r() {
        var m = {
          current: null
        };
        return Object.seal(m), m;
      }
      var Vr = Array.isArray;
      function tn(m) {
        return Vr(m);
      }
      function Br(m) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, A = C && m[Symbol.toStringTag] || m.constructor.name || "Object";
          return A;
        }
      }
      function sr(m) {
        try {
          return Gn(m), !1;
        } catch (C) {
          return !0;
        }
      }
      function Gn(m) {
        return "" + m;
      }
      function An(m) {
        if (sr(m))
          return me("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Br(m)), Gn(m);
      }
      function ha(m, C, A) {
        var H = m.displayName;
        if (H)
          return H;
        var J = C.displayName || C.name || "";
        return J !== "" ? A + "(" + J + ")" : A;
      }
      function Va(m) {
        return m.displayName || "Context";
      }
      function wr(m) {
        if (m == null)
          return null;
        if (typeof m.tag == "number" && me("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
          return m.displayName || m.name || null;
        if (typeof m == "string")
          return m;
        switch (m) {
          case p:
            return "Fragment";
          case c:
            return "Portal";
          case S:
            return "Profiler";
          case d:
            return "StrictMode";
          case L:
            return "Suspense";
          case M:
            return "SuspenseList";
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case x:
              var C = m;
              return Va(C) + ".Consumer";
            case E:
              var A = m;
              return Va(A._context) + ".Provider";
            case j:
              return ha(m, m.render, "ForwardRef");
            case F:
              var H = m.displayName || null;
              return H !== null ? H : wr(m.type) || "Memo";
            case Y: {
              var J = m, Ce = J._payload, ve = J._init;
              try {
                return wr(ve(Ce));
              } catch (we) {
                return null;
              }
            }
          }
        return null;
      }
      var Ba = Object.prototype.hasOwnProperty, Ni = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ia, Ya, Xn;
      Xn = {};
      function Qa(m) {
        if (Ba.call(m, "ref")) {
          var C = Object.getOwnPropertyDescriptor(m, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return m.ref !== void 0;
      }
      function cn(m) {
        if (Ba.call(m, "key")) {
          var C = Object.getOwnPropertyDescriptor(m, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return m.key !== void 0;
      }
      function Wa(m, C) {
        var A = function() {
          Ia || (Ia = !0, me("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        A.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: A,
          configurable: !0
        });
      }
      function zl(m, C) {
        var A = function() {
          Ya || (Ya = !0, me("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        A.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: A,
          configurable: !0
        });
      }
      function Ul(m) {
        if (typeof m.ref == "string" && te.current && m.__self && te.current.stateNode !== m.__self) {
          var C = wr(te.current.type);
          Xn[C] || (me('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, m.ref), Xn[C] = !0);
        }
      }
      var ma = function(m, C, A, H, J, Ce, ve) {
        var we = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: o,
          // Built-in properties that belong on the element
          type: m,
          key: C,
          ref: A,
          props: ve,
          // Record the component responsible for creating this element.
          _owner: Ce
        };
        return we._store = {}, Object.defineProperty(we._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(we, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: H
        }), Object.defineProperty(we, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: J
        }), Object.freeze && (Object.freeze(we.props), Object.freeze(we)), we;
      };
      function Ga(m, C, A) {
        var H, J = {}, Ce = null, ve = null, we = null, He = null;
        if (C != null) {
          Qa(C) && (ve = C.ref, Ul(C)), cn(C) && (An(C.key), Ce = "" + C.key), we = C.__self === void 0 ? null : C.__self, He = C.__source === void 0 ? null : C.__source;
          for (H in C)
            Ba.call(C, H) && !Ni.hasOwnProperty(H) && (J[H] = C[H]);
        }
        var at = arguments.length - 2;
        if (at === 1)
          J.children = A;
        else if (at > 1) {
          for (var dt = Array(at), pt = 0; pt < at; pt++)
            dt[pt] = arguments[pt + 2];
          Object.freeze && Object.freeze(dt), J.children = dt;
        }
        if (m && m.defaultProps) {
          var Rt = m.defaultProps;
          for (H in Rt)
            J[H] === void 0 && (J[H] = Rt[H]);
        }
        if (Ce || ve) {
          var Nt = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          Ce && Wa(J, Nt), ve && zl(J, Nt);
        }
        return ma(m, Ce, ve, we, He, te.current, J);
      }
      function ys(m, C) {
        var A = ma(m.type, C, m.ref, m._self, m._source, m._owner, m.props);
        return A;
      }
      function ju(m, C, A) {
        if (m == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + m + ".");
        var H, J = ke({}, m.props), Ce = m.key, ve = m.ref, we = m._self, He = m._source, at = m._owner;
        if (C != null) {
          Qa(C) && (ve = C.ref, at = te.current), cn(C) && (An(C.key), Ce = "" + C.key);
          var dt;
          m.type && m.type.defaultProps && (dt = m.type.defaultProps);
          for (H in C)
            Ba.call(C, H) && !Ni.hasOwnProperty(H) && (C[H] === void 0 && dt !== void 0 ? J[H] = dt[H] : J[H] = C[H]);
        }
        var pt = arguments.length - 2;
        if (pt === 1)
          J.children = A;
        else if (pt > 1) {
          for (var Rt = Array(pt), Nt = 0; Nt < pt; Nt++)
            Rt[Nt] = arguments[Nt + 2];
          J.children = Rt;
        }
        return ma(m.type, Ce, ve, we, He, at, J);
      }
      function Ir(m) {
        return typeof m == "object" && m !== null && m.$$typeof === o;
      }
      var Al = ".", Fu = ":";
      function jl(m) {
        var C = /[=:]/g, A = {
          "=": "=0",
          ":": "=2"
        }, H = m.replace(C, function(J) {
          return A[J];
        });
        return "$" + H;
      }
      var br = !1, zi = /\/+/g;
      function gt(m) {
        return m.replace(zi, "$&/");
      }
      function St(m, C) {
        return typeof m == "object" && m !== null && m.key != null ? (An(m.key), jl("" + m.key)) : C.toString(36);
      }
      function ya(m, C, A, H, J) {
        var Ce = typeof m;
        (Ce === "undefined" || Ce === "boolean") && (m = null);
        var ve = !1;
        if (m === null)
          ve = !0;
        else
          switch (Ce) {
            case "string":
            case "number":
              ve = !0;
              break;
            case "object":
              switch (m.$$typeof) {
                case o:
                case c:
                  ve = !0;
              }
          }
        if (ve) {
          var we = m, He = J(we), at = H === "" ? Al + St(we, 0) : H;
          if (tn(He)) {
            var dt = "";
            at != null && (dt = gt(at) + "/"), ya(He, C, dt, "", function(Vh) {
              return Vh;
            });
          } else
            He != null && (Ir(He) && (He.key && (!we || we.key !== He.key) && An(He.key), He = ys(
              He,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              A + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (He.key && (!we || we.key !== He.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                gt("" + He.key) + "/"
              ) : "") + at
            )), C.push(He));
          return 1;
        }
        var pt, Rt, Nt = 0, qe = H === "" ? Al : H + Fu;
        if (tn(m))
          for (var Bi = 0; Bi < m.length; Bi++)
            pt = m[Bi], Rt = qe + St(pt, Bi), Nt += ya(pt, C, A, Rt, J);
        else {
          var Qu = R(m);
          if (typeof Qu == "function") {
            var Ls = m;
            Qu === Ls.entries && (br || Lt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), br = !0);
            for (var $h = Qu.call(Ls), Ja, Ns = 0; !(Ja = $h.next()).done; )
              pt = Ja.value, Rt = qe + St(pt, Ns++), Nt += ya(pt, C, A, Rt, J);
          } else if (Ce === "object") {
            var zs = String(m);
            throw new Error("Objects are not valid as a React child (found: " + (zs === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : zs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Nt;
      }
      function Yr(m, C, A) {
        if (m == null)
          return m;
        var H = [], J = 0;
        return ya(m, H, "", "", function(Ce) {
          return C.call(A, Ce, J++);
        }), H;
      }
      function Fl(m) {
        var C = 0;
        return Yr(m, function() {
          C++;
        }), C;
      }
      function Hu(m, C, A) {
        Yr(m, function() {
          C.apply(this, arguments);
        }, A);
      }
      function gs(m) {
        return Yr(m, function(C) {
          return C;
        }) || [];
      }
      function Hl(m) {
        if (!Ir(m))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return m;
      }
      function Pl(m) {
        var C = {
          $$typeof: x,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: m,
          _currentValue2: m,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: E,
          _context: C
        };
        var A = !1, H = !1, J = !1;
        {
          var Ce = {
            $$typeof: x,
            _context: C
          };
          Object.defineProperties(Ce, {
            Provider: {
              get: function() {
                return H || (H = !0, me("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ve) {
                C.Provider = ve;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ve) {
                C._currentValue = ve;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ve) {
                C._currentValue2 = ve;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ve) {
                C._threadCount = ve;
              }
            },
            Consumer: {
              get: function() {
                return A || (A = !0, me("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ve) {
                J || (Lt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ve), J = !0);
              }
            }
          }), C.Consumer = Ce;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var Xa = -1, Ui = 0, Ka = 1, ga = 2;
      function Qr(m) {
        if (m._status === Xa) {
          var C = m._result, A = C();
          if (A.then(function(Ce) {
            if (m._status === Ui || m._status === Xa) {
              var ve = m;
              ve._status = Ka, ve._result = Ce;
            }
          }, function(Ce) {
            if (m._status === Ui || m._status === Xa) {
              var ve = m;
              ve._status = ga, ve._result = Ce;
            }
          }), m._status === Xa) {
            var H = m;
            H._status = Ui, H._result = A;
          }
        }
        if (m._status === Ka) {
          var J = m._result;
          return J === void 0 && me(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, J), "default" in J || me(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, J), J.default;
        } else
          throw m._result;
      }
      function Sa(m) {
        var C = {
          // We use these fields to store the result.
          _status: Xa,
          _result: m
        }, A = {
          $$typeof: Y,
          _payload: C,
          _init: Qr
        };
        {
          var H, J;
          Object.defineProperties(A, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return H;
              },
              set: function(Ce) {
                me("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), H = Ce, Object.defineProperty(A, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return J;
              },
              set: function(Ce) {
                me("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = Ce, Object.defineProperty(A, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return A;
      }
      function $l(m) {
        m != null && m.$$typeof === F ? me("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof m != "function" ? me("forwardRef requires a render function but was given %s.", m === null ? "null" : typeof m) : m.length !== 0 && m.length !== 2 && me("forwardRef render functions accept exactly two parameters: props and ref. %s", m.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), m != null && (m.defaultProps != null || m.propTypes != null) && me("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: j,
          render: m
        };
        {
          var A;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return A;
            },
            set: function(H) {
              A = H, !m.name && !m.displayName && (m.displayName = H);
            }
          });
        }
        return C;
      }
      var T;
      T = Symbol.for("react.module.reference");
      function W(m) {
        return !!(typeof m == "string" || typeof m == "function" || m === p || m === S || Ue || m === d || m === L || m === M || Te || m === re || xe || nt || Z || typeof m == "object" && m !== null && (m.$$typeof === Y || m.$$typeof === F || m.$$typeof === E || m.$$typeof === x || m.$$typeof === j || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        m.$$typeof === T || m.getModuleId !== void 0));
      }
      function ae(m, C) {
        W(m) || me("memo: The first argument must be a component. Instead received: %s", m === null ? "null" : typeof m);
        var A = {
          $$typeof: F,
          type: m,
          compare: C === void 0 ? null : C
        };
        {
          var H;
          Object.defineProperty(A, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return H;
            },
            set: function(J) {
              H = J, !m.name && !m.displayName && (m.displayName = J);
            }
          });
        }
        return A;
      }
      function ce() {
        var m = b.current;
        return m === null && me(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), m;
      }
      function je(m) {
        var C = ce();
        if (m._context !== void 0) {
          var A = m._context;
          A.Consumer === m ? me("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : A.Provider === m && me("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(m);
      }
      function We(m) {
        var C = ce();
        return C.useState(m);
      }
      function Me(m, C, A) {
        var H = ce();
        return H.useReducer(m, C, A);
      }
      function ge(m) {
        var C = ce();
        return C.useRef(m);
      }
      function It(m, C) {
        var A = ce();
        return A.useEffect(m, C);
      }
      function Et(m, C) {
        var A = ce();
        return A.useInsertionEffect(m, C);
      }
      function Ct(m, C) {
        var A = ce();
        return A.useLayoutEffect(m, C);
      }
      function Tn(m, C) {
        var A = ce();
        return A.useCallback(m, C);
      }
      function Ea(m, C) {
        var A = ce();
        return A.useMemo(m, C);
      }
      function Pu(m, C, A) {
        var H = ce();
        return H.useImperativeHandle(m, C, A);
      }
      function Kn(m, C) {
        {
          var A = ce();
          return A.useDebugValue(m, C);
        }
      }
      function Ah() {
        var m = ce();
        return m.useTransition();
      }
      function qa(m) {
        var C = ce();
        return C.useDeferredValue(m);
      }
      function Fe() {
        var m = ce();
        return m.useId();
      }
      function Vl(m, C, A) {
        var H = ce();
        return H.useSyncExternalStore(m, C, A);
      }
      var Ai = 0, Ss, Es, Cs, Rs, Ts, xs, ws;
      function ad() {
      }
      ad.__reactDisabledLog = !0;
      function jh() {
        {
          if (Ai === 0) {
            Ss = console.log, Es = console.info, Cs = console.warn, Rs = console.error, Ts = console.group, xs = console.groupCollapsed, ws = console.groupEnd;
            var m = {
              configurable: !0,
              enumerable: !0,
              value: ad,
              writable: !0
            };
            Object.defineProperties(console, {
              info: m,
              log: m,
              warn: m,
              error: m,
              group: m,
              groupCollapsed: m,
              groupEnd: m
            });
          }
          Ai++;
        }
      }
      function bs() {
        {
          if (Ai--, Ai === 0) {
            var m = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: ke({}, m, {
                value: Ss
              }),
              info: ke({}, m, {
                value: Es
              }),
              warn: ke({}, m, {
                value: Cs
              }),
              error: ke({}, m, {
                value: Rs
              }),
              group: ke({}, m, {
                value: Ts
              }),
              groupCollapsed: ke({}, m, {
                value: xs
              }),
              groupEnd: ke({}, m, {
                value: ws
              })
            });
          }
          Ai < 0 && me("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Bl = ht.ReactCurrentDispatcher, Dr;
      function ji(m, C, A) {
        {
          if (Dr === void 0)
            try {
              throw Error();
            } catch (J) {
              var H = J.stack.trim().match(/\n( *(at )?)/);
              Dr = H && H[1] || "";
            }
          return `
` + Dr + m;
        }
      }
      var Fi = !1, $u;
      {
        var Ds = typeof WeakMap == "function" ? WeakMap : Map;
        $u = new Ds();
      }
      function id(m, C) {
        if (!m || Fi)
          return "";
        {
          var A = $u.get(m);
          if (A !== void 0)
            return A;
        }
        var H;
        Fi = !0;
        var J = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ce;
        Ce = Bl.current, Bl.current = null, jh();
        try {
          if (C) {
            var ve = function() {
              throw Error();
            };
            if (Object.defineProperty(ve.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ve, []);
              } catch (qe) {
                H = qe;
              }
              Reflect.construct(m, [], ve);
            } else {
              try {
                ve.call();
              } catch (qe) {
                H = qe;
              }
              m.call(ve.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (qe) {
              H = qe;
            }
            m();
          }
        } catch (qe) {
          if (qe && H && typeof qe.stack == "string") {
            for (var we = qe.stack.split(`
`), He = H.stack.split(`
`), at = we.length - 1, dt = He.length - 1; at >= 1 && dt >= 0 && we[at] !== He[dt]; )
              dt--;
            for (; at >= 1 && dt >= 0; at--, dt--)
              if (we[at] !== He[dt]) {
                if (at !== 1 || dt !== 1)
                  do
                    if (at--, dt--, dt < 0 || we[at] !== He[dt]) {
                      var pt = `
` + we[at].replace(" at new ", " at ");
                      return m.displayName && pt.includes("<anonymous>") && (pt = pt.replace("<anonymous>", m.displayName)), typeof m == "function" && $u.set(m, pt), pt;
                    }
                  while (at >= 1 && dt >= 0);
                break;
              }
          }
        } finally {
          Fi = !1, Bl.current = Ce, bs(), Error.prepareStackTrace = J;
        }
        var Rt = m ? m.displayName || m.name : "", Nt = Rt ? ji(Rt) : "";
        return typeof m == "function" && $u.set(m, Nt), Nt;
      }
      function _s(m, C, A) {
        return id(m, !1);
      }
      function Fh(m) {
        var C = m.prototype;
        return !!(C && C.isReactComponent);
      }
      function Hi(m, C, A) {
        if (m == null)
          return "";
        if (typeof m == "function")
          return id(m, Fh(m));
        if (typeof m == "string")
          return ji(m);
        switch (m) {
          case L:
            return ji("Suspense");
          case M:
            return ji("SuspenseList");
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case j:
              return _s(m.render);
            case F:
              return Hi(m.type, C, A);
            case Y: {
              var H = m, J = H._payload, Ce = H._init;
              try {
                return Hi(Ce(J), C, A);
              } catch (ve) {
              }
            }
          }
        return "";
      }
      var ld = {}, ks = ht.ReactDebugCurrentFrame;
      function Vu(m) {
        if (m) {
          var C = m._owner, A = Hi(m.type, m._source, C ? C.type : null);
          ks.setExtraStackFrame(A);
        } else
          ks.setExtraStackFrame(null);
      }
      function ud(m, C, A, H, J) {
        {
          var Ce = Function.call.bind(Ba);
          for (var ve in m)
            if (Ce(m, ve)) {
              var we = void 0;
              try {
                if (typeof m[ve] != "function") {
                  var He = Error((H || "React class") + ": " + A + " type `" + ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw He.name = "Invariant Violation", He;
                }
                we = m[ve](C, ve, H, A, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (at) {
                we = at;
              }
              we && !(we instanceof Error) && (Vu(J), me("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", A, ve, typeof we), Vu(null)), we instanceof Error && !(we.message in ld) && (ld[we.message] = !0, Vu(J), me("Failed %s type: %s", A, we.message), Vu(null));
            }
        }
      }
      function Ke(m) {
        if (m) {
          var C = m._owner, A = Hi(m.type, m._source, C ? C.type : null);
          Qe(A);
        } else
          Qe(null);
      }
      var Os;
      Os = !1;
      function Ms() {
        if (te.current) {
          var m = wr(te.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
      function Oe(m) {
        if (m !== void 0) {
          var C = m.fileName.replace(/^.*[\\\/]/, ""), A = m.lineNumber;
          return `

Check your code at ` + C + ":" + A + ".";
        }
        return "";
      }
      function od(m) {
        return m != null ? Oe(m.__source) : "";
      }
      var xn = {};
      function Il(m) {
        var C = Ms();
        if (!C) {
          var A = typeof m == "string" ? m : m.displayName || m.name;
          A && (C = `

Check the top-level render call using <` + A + ">.");
        }
        return C;
      }
      function Pi(m, C) {
        if (!(!m._store || m._store.validated || m.key != null)) {
          m._store.validated = !0;
          var A = Il(C);
          if (!xn[A]) {
            xn[A] = !0;
            var H = "";
            m && m._owner && m._owner !== te.current && (H = " It was passed a child from " + wr(m._owner.type) + "."), Ke(m), me('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', A, H), Ke(null);
          }
        }
      }
      function sd(m, C) {
        if (typeof m == "object") {
          if (tn(m))
            for (var A = 0; A < m.length; A++) {
              var H = m[A];
              Ir(H) && Pi(H, C);
            }
          else if (Ir(m))
            m._store && (m._store.validated = !0);
          else if (m) {
            var J = R(m);
            if (typeof J == "function" && J !== m.entries)
              for (var Ce = J.call(m), ve; !(ve = Ce.next()).done; )
                Ir(ve.value) && Pi(ve.value, C);
          }
        }
      }
      function nn(m) {
        {
          var C = m.type;
          if (C == null || typeof C == "string")
            return;
          var A;
          if (typeof C == "function")
            A = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === j || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === F))
            A = C.propTypes;
          else
            return;
          if (A) {
            var H = wr(C);
            ud(A, m.props, "prop", H, m);
          } else if (C.PropTypes !== void 0 && !Os) {
            Os = !0;
            var J = wr(C);
            me("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", J || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && me("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Dt(m) {
        {
          for (var C = Object.keys(m.props), A = 0; A < C.length; A++) {
            var H = C[A];
            if (H !== "children" && H !== "key") {
              Ke(m), me("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), Ke(null);
              break;
            }
          }
          m.ref !== null && (Ke(m), me("Invalid attribute `ref` supplied to `React.Fragment`."), Ke(null));
        }
      }
      function cd(m, C, A) {
        var H = W(m);
        if (!H) {
          var J = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ce = od(C);
          Ce ? J += Ce : J += Ms();
          var ve;
          m === null ? ve = "null" : tn(m) ? ve = "array" : m !== void 0 && m.$$typeof === o ? (ve = "<" + (wr(m.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : ve = typeof m, me("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ve, J);
        }
        var we = Ga.apply(this, arguments);
        if (we == null)
          return we;
        if (H)
          for (var He = 2; He < arguments.length; He++)
            sd(arguments[He], m);
        return m === p ? Dt(we) : nn(we), we;
      }
      var cr = !1;
      function qn(m) {
        var C = cd.bind(null, m);
        return C.type = m, cr || (cr = !0, Lt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Lt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: m
            }), m;
          }
        }), C;
      }
      function Ca(m, C, A) {
        for (var H = ju.apply(this, arguments), J = 2; J < arguments.length; J++)
          sd(arguments[J], H.type);
        return nn(H), H;
      }
      function Hh(m, C) {
        var A = B.transition;
        B.transition = {};
        var H = B.transition;
        B.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          m();
        } finally {
          if (B.transition = A, A === null && H._updatedFibers) {
            var J = H._updatedFibers.size;
            J > 10 && Lt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), H._updatedFibers.clear();
          }
        }
      }
      var Bu = !1, Yl = null;
      function fd(m) {
        if (Yl === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), A = n && n[C];
            Yl = A.call(n, "timers").setImmediate;
          } catch (H) {
            Yl = function(J) {
              Bu === !1 && (Bu = !0, typeof MessageChannel == "undefined" && me("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ce = new MessageChannel();
              Ce.port1.onmessage = J, Ce.port2.postMessage(void 0);
            };
          }
        return Yl(m);
      }
      var $i = 0, dd = !1;
      function Ph(m) {
        {
          var C = $i;
          $i++, I.current === null && (I.current = []);
          var A = I.isBatchingLegacy, H;
          try {
            if (I.isBatchingLegacy = !0, H = m(), !A && I.didScheduleLegacyUpdate) {
              var J = I.current;
              J !== null && (I.didScheduleLegacyUpdate = !1, Yu(J));
            }
          } catch (Rt) {
            throw Za(C), Rt;
          } finally {
            I.isBatchingLegacy = A;
          }
          if (H !== null && typeof H == "object" && typeof H.then == "function") {
            var Ce = H, ve = !1, we = {
              then: function(Rt, Nt) {
                ve = !0, Ce.then(function(qe) {
                  Za(C), $i === 0 ? Iu(qe, Rt, Nt) : Rt(qe);
                }, function(qe) {
                  Za(C), Nt(qe);
                });
              }
            };
            return !dd && typeof Promise != "undefined" && Promise.resolve().then(function() {
            }).then(function() {
              ve || (dd = !0, me("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), we;
          } else {
            var He = H;
            if (Za(C), $i === 0) {
              var at = I.current;
              at !== null && (Yu(at), I.current = null);
              var dt = {
                then: function(Rt, Nt) {
                  I.current === null ? (I.current = [], Iu(He, Rt, Nt)) : Rt(He);
                }
              };
              return dt;
            } else {
              var pt = {
                then: function(Rt, Nt) {
                  Rt(He);
                }
              };
              return pt;
            }
          }
        }
      }
      function Za(m) {
        m !== $i - 1 && me("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), $i = m;
      }
      function Iu(m, C, A) {
        {
          var H = I.current;
          if (H !== null)
            try {
              Yu(H), fd(function() {
                H.length === 0 ? (I.current = null, C(m)) : Iu(m, C, A);
              });
            } catch (J) {
              A(J);
            }
          else
            C(m);
        }
      }
      var Vi = !1;
      function Yu(m) {
        if (!Vi) {
          Vi = !0;
          var C = 0;
          try {
            for (; C < m.length; C++) {
              var A = m[C];
              do
                A = A(!0);
              while (A !== null);
            }
            m.length = 0;
          } catch (H) {
            throw m = m.slice(C + 1), H;
          } finally {
            Vi = !1;
          }
        }
      }
      var pd = cd, vd = Ca, hd = qn, md = {
        map: Yr,
        forEach: Hu,
        count: Fl,
        toArray: gs,
        only: Hl
      };
      r.Children = md, r.Component = Ae, r.Fragment = p, r.Profiler = S, r.PureComponent = ft, r.StrictMode = d, r.Suspense = L, r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ht, r.cloneElement = vd, r.createContext = Pl, r.createElement = pd, r.createFactory = hd, r.createRef = $r, r.forwardRef = $l, r.isValidElement = Ir, r.lazy = Sa, r.memo = ae, r.startTransition = Hh, r.unstable_act = Ph, r.useCallback = Tn, r.useContext = je, r.useDebugValue = Kn, r.useDeferredValue = qa, r.useEffect = It, r.useId = Fe, r.useImperativeHandle = Pu, r.useInsertionEffect = Et, r.useLayoutEffect = Ct, r.useMemo = Ea, r.useReducer = Me, r.useRef = ge, r.useState = We, r.useSyncExternalStore = Vl, r.useTransition = Ah, r.version = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ef, Ef.exports)), Ef.exports;
}
process.env.NODE_ENV === "production" ? k0.exports = Yj() : k0.exports = Qj();
var OE = k0.exports;
const ME = /* @__PURE__ */ lD(OE);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zw;
function Wj() {
  if (zw)
    return sf;
  zw = 1;
  var n = OE, r = Symbol.for("react.element"), l = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
  function d(S, E, x) {
    var j, L = {}, M = null, F = null;
    x !== void 0 && (M = "" + x), E.key !== void 0 && (M = "" + E.key), E.ref !== void 0 && (F = E.ref);
    for (j in E)
      o.call(E, j) && !p.hasOwnProperty(j) && (L[j] = E[j]);
    if (S && S.defaultProps)
      for (j in E = S.defaultProps, E)
        L[j] === void 0 && (L[j] = E[j]);
    return {
      $$typeof: r,
      type: S,
      key: M,
      ref: F,
      props: L,
      _owner: c.current
    };
  }
  return sf.Fragment = l, sf.jsx = d, sf.jsxs = d, sf;
}
var cf = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uw;
function Gj() {
  return Uw || (Uw = 1, process.env.NODE_ENV !== "production" && function() {
    var n = OE, r = Symbol.for("react.element"), l = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), S = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), Y = Symbol.iterator, re = "@@iterator";
    function Ne(T) {
      if (T === null || typeof T != "object")
        return null;
      var W = Y && T[Y] || T[re];
      return typeof W == "function" ? W : null;
    }
    var _ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(T) {
      {
        for (var W = arguments.length, ae = new Array(W > 1 ? W - 1 : 0), ce = 1; ce < W; ce++)
          ae[ce - 1] = arguments[ce];
        b("error", T, ae);
      }
    }
    function b(T, W, ae) {
      {
        var ce = _.ReactDebugCurrentFrame, je = ce.getStackAddendum();
        je !== "" && (W += "%s", ae = ae.concat([je]));
        var We = ae.map(function(Me) {
          return String(Me);
        });
        We.unshift("Warning: " + W), Function.prototype.apply.call(console[T], console, We);
      }
    }
    var B = !1, I = !1, te = !1, K = !1, pe = !1, Qe;
    Qe = Symbol.for("react.module.reference");
    function xe(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === o || T === p || pe || T === c || T === x || T === j || K || T === F || B || I || te || typeof T == "object" && T !== null && (T.$$typeof === M || T.$$typeof === L || T.$$typeof === d || T.$$typeof === S || T.$$typeof === E || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === Qe || T.getModuleId !== void 0));
    }
    function nt(T, W, ae) {
      var ce = T.displayName;
      if (ce)
        return ce;
      var je = W.displayName || W.name || "";
      return je !== "" ? ae + "(" + je + ")" : ae;
    }
    function Z(T) {
      return T.displayName || "Context";
    }
    function Te(T) {
      if (T == null)
        return null;
      if (typeof T.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
        return T.displayName || T.name || null;
      if (typeof T == "string")
        return T;
      switch (T) {
        case o:
          return "Fragment";
        case l:
          return "Portal";
        case p:
          return "Profiler";
        case c:
          return "StrictMode";
        case x:
          return "Suspense";
        case j:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case S:
            var W = T;
            return Z(W) + ".Consumer";
          case d:
            var ae = T;
            return Z(ae._context) + ".Provider";
          case E:
            return nt(T, T.render, "ForwardRef");
          case L:
            var ce = T.displayName || null;
            return ce !== null ? ce : Te(T.type) || "Memo";
          case M: {
            var je = T, We = je._payload, Me = je._init;
            try {
              return Te(Me(We));
            } catch (ge) {
              return null;
            }
          }
        }
      return null;
    }
    var Ue = Object.assign, ht = 0, Lt, me, Ft, Wn, N, ee, ke;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function Ae() {
      {
        if (ht === 0) {
          Lt = console.log, me = console.info, Ft = console.warn, Wn = console.error, N = console.group, ee = console.groupCollapsed, ke = console.groupEnd;
          var T = {
            configurable: !0,
            enumerable: !0,
            value: Ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: T,
            log: T,
            warn: T,
            error: T,
            group: T,
            groupCollapsed: T,
            groupEnd: T
          });
        }
        ht++;
      }
    }
    function ot() {
      {
        if (ht--, ht === 0) {
          var T = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ue({}, T, {
              value: Lt
            }),
            info: Ue({}, T, {
              value: me
            }),
            warn: Ue({}, T, {
              value: Ft
            }),
            error: Ue({}, T, {
              value: Wn
            }),
            group: Ue({}, T, {
              value: N
            }),
            groupCollapsed: Ue({}, T, {
              value: ee
            }),
            groupEnd: Ue({}, T, {
              value: ke
            })
          });
        }
        ht < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var st = _.ReactCurrentDispatcher, rt;
    function et(T, W, ae) {
      {
        if (rt === void 0)
          try {
            throw Error();
          } catch (je) {
            var ce = je.stack.trim().match(/\n( *(at )?)/);
            rt = ce && ce[1] || "";
          }
        return `
` + rt + T;
      }
    }
    var ft = !1, xr;
    {
      var $r = typeof WeakMap == "function" ? WeakMap : Map;
      xr = new $r();
    }
    function Vr(T, W) {
      if (!T || ft)
        return "";
      {
        var ae = xr.get(T);
        if (ae !== void 0)
          return ae;
      }
      var ce;
      ft = !0;
      var je = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var We;
      We = st.current, st.current = null, Ae();
      try {
        if (W) {
          var Me = function() {
            throw Error();
          };
          if (Object.defineProperty(Me.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Me, []);
            } catch (Kn) {
              ce = Kn;
            }
            Reflect.construct(T, [], Me);
          } else {
            try {
              Me.call();
            } catch (Kn) {
              ce = Kn;
            }
            T.call(Me.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Kn) {
            ce = Kn;
          }
          T();
        }
      } catch (Kn) {
        if (Kn && ce && typeof Kn.stack == "string") {
          for (var ge = Kn.stack.split(`
`), It = ce.stack.split(`
`), Et = ge.length - 1, Ct = It.length - 1; Et >= 1 && Ct >= 0 && ge[Et] !== It[Ct]; )
            Ct--;
          for (; Et >= 1 && Ct >= 0; Et--, Ct--)
            if (ge[Et] !== It[Ct]) {
              if (Et !== 1 || Ct !== 1)
                do
                  if (Et--, Ct--, Ct < 0 || ge[Et] !== It[Ct]) {
                    var Tn = `
` + ge[Et].replace(" at new ", " at ");
                    return T.displayName && Tn.includes("<anonymous>") && (Tn = Tn.replace("<anonymous>", T.displayName)), typeof T == "function" && xr.set(T, Tn), Tn;
                  }
                while (Et >= 1 && Ct >= 0);
              break;
            }
        }
      } finally {
        ft = !1, st.current = We, ot(), Error.prepareStackTrace = je;
      }
      var Ea = T ? T.displayName || T.name : "", Pu = Ea ? et(Ea) : "";
      return typeof T == "function" && xr.set(T, Pu), Pu;
    }
    function tn(T, W, ae) {
      return Vr(T, !1);
    }
    function Br(T) {
      var W = T.prototype;
      return !!(W && W.isReactComponent);
    }
    function sr(T, W, ae) {
      if (T == null)
        return "";
      if (typeof T == "function")
        return Vr(T, Br(T));
      if (typeof T == "string")
        return et(T);
      switch (T) {
        case x:
          return et("Suspense");
        case j:
          return et("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case E:
            return tn(T.render);
          case L:
            return sr(T.type, W, ae);
          case M: {
            var ce = T, je = ce._payload, We = ce._init;
            try {
              return sr(We(je), W, ae);
            } catch (Me) {
            }
          }
        }
      return "";
    }
    var Gn = Object.prototype.hasOwnProperty, An = {}, ha = _.ReactDebugCurrentFrame;
    function Va(T) {
      if (T) {
        var W = T._owner, ae = sr(T.type, T._source, W ? W.type : null);
        ha.setExtraStackFrame(ae);
      } else
        ha.setExtraStackFrame(null);
    }
    function wr(T, W, ae, ce, je) {
      {
        var We = Function.call.bind(Gn);
        for (var Me in T)
          if (We(T, Me)) {
            var ge = void 0;
            try {
              if (typeof T[Me] != "function") {
                var It = Error((ce || "React class") + ": " + ae + " type `" + Me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[Me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw It.name = "Invariant Violation", It;
              }
              ge = T[Me](W, Me, ce, ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Et) {
              ge = Et;
            }
            ge && !(ge instanceof Error) && (Va(je), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ce || "React class", ae, Me, typeof ge), Va(null)), ge instanceof Error && !(ge.message in An) && (An[ge.message] = !0, Va(je), R("Failed %s type: %s", ae, ge.message), Va(null));
          }
      }
    }
    var Ba = Array.isArray;
    function Ni(T) {
      return Ba(T);
    }
    function Ia(T) {
      {
        var W = typeof Symbol == "function" && Symbol.toStringTag, ae = W && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return ae;
      }
    }
    function Ya(T) {
      try {
        return Xn(T), !1;
      } catch (W) {
        return !0;
      }
    }
    function Xn(T) {
      return "" + T;
    }
    function Qa(T) {
      if (Ya(T))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ia(T)), Xn(T);
    }
    var cn = _.ReactCurrentOwner, Wa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, zl, Ul, ma;
    ma = {};
    function Ga(T) {
      if (Gn.call(T, "ref")) {
        var W = Object.getOwnPropertyDescriptor(T, "ref").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return T.ref !== void 0;
    }
    function ys(T) {
      if (Gn.call(T, "key")) {
        var W = Object.getOwnPropertyDescriptor(T, "key").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return T.key !== void 0;
    }
    function ju(T, W) {
      if (typeof T.ref == "string" && cn.current && W && cn.current.stateNode !== W) {
        var ae = Te(cn.current.type);
        ma[ae] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Te(cn.current.type), T.ref), ma[ae] = !0);
      }
    }
    function Ir(T, W) {
      {
        var ae = function() {
          zl || (zl = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        ae.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: ae,
          configurable: !0
        });
      }
    }
    function Al(T, W) {
      {
        var ae = function() {
          Ul || (Ul = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        ae.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: ae,
          configurable: !0
        });
      }
    }
    var Fu = function(T, W, ae, ce, je, We, Me) {
      var ge = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: T,
        key: W,
        ref: ae,
        props: Me,
        // Record the component responsible for creating this element.
        _owner: We
      };
      return ge._store = {}, Object.defineProperty(ge._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ge, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.defineProperty(ge, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: je
      }), Object.freeze && (Object.freeze(ge.props), Object.freeze(ge)), ge;
    };
    function jl(T, W, ae, ce, je) {
      {
        var We, Me = {}, ge = null, It = null;
        ae !== void 0 && (Qa(ae), ge = "" + ae), ys(W) && (Qa(W.key), ge = "" + W.key), Ga(W) && (It = W.ref, ju(W, je));
        for (We in W)
          Gn.call(W, We) && !Wa.hasOwnProperty(We) && (Me[We] = W[We]);
        if (T && T.defaultProps) {
          var Et = T.defaultProps;
          for (We in Et)
            Me[We] === void 0 && (Me[We] = Et[We]);
        }
        if (ge || It) {
          var Ct = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          ge && Ir(Me, Ct), It && Al(Me, Ct);
        }
        return Fu(T, ge, It, je, ce, cn.current, Me);
      }
    }
    var br = _.ReactCurrentOwner, zi = _.ReactDebugCurrentFrame;
    function gt(T) {
      if (T) {
        var W = T._owner, ae = sr(T.type, T._source, W ? W.type : null);
        zi.setExtraStackFrame(ae);
      } else
        zi.setExtraStackFrame(null);
    }
    var St;
    St = !1;
    function ya(T) {
      return typeof T == "object" && T !== null && T.$$typeof === r;
    }
    function Yr() {
      {
        if (br.current) {
          var T = Te(br.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
    }
    function Fl(T) {
      {
        if (T !== void 0) {
          var W = T.fileName.replace(/^.*[\\\/]/, ""), ae = T.lineNumber;
          return `

Check your code at ` + W + ":" + ae + ".";
        }
        return "";
      }
    }
    var Hu = {};
    function gs(T) {
      {
        var W = Yr();
        if (!W) {
          var ae = typeof T == "string" ? T : T.displayName || T.name;
          ae && (W = `

Check the top-level render call using <` + ae + ">.");
        }
        return W;
      }
    }
    function Hl(T, W) {
      {
        if (!T._store || T._store.validated || T.key != null)
          return;
        T._store.validated = !0;
        var ae = gs(W);
        if (Hu[ae])
          return;
        Hu[ae] = !0;
        var ce = "";
        T && T._owner && T._owner !== br.current && (ce = " It was passed a child from " + Te(T._owner.type) + "."), gt(T), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ae, ce), gt(null);
      }
    }
    function Pl(T, W) {
      {
        if (typeof T != "object")
          return;
        if (Ni(T))
          for (var ae = 0; ae < T.length; ae++) {
            var ce = T[ae];
            ya(ce) && Hl(ce, W);
          }
        else if (ya(T))
          T._store && (T._store.validated = !0);
        else if (T) {
          var je = Ne(T);
          if (typeof je == "function" && je !== T.entries)
            for (var We = je.call(T), Me; !(Me = We.next()).done; )
              ya(Me.value) && Hl(Me.value, W);
        }
      }
    }
    function Xa(T) {
      {
        var W = T.type;
        if (W == null || typeof W == "string")
          return;
        var ae;
        if (typeof W == "function")
          ae = W.propTypes;
        else if (typeof W == "object" && (W.$$typeof === E || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        W.$$typeof === L))
          ae = W.propTypes;
        else
          return;
        if (ae) {
          var ce = Te(W);
          wr(ae, T.props, "prop", ce, T);
        } else if (W.PropTypes !== void 0 && !St) {
          St = !0;
          var je = Te(W);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", je || "Unknown");
        }
        typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ui(T) {
      {
        for (var W = Object.keys(T.props), ae = 0; ae < W.length; ae++) {
          var ce = W[ae];
          if (ce !== "children" && ce !== "key") {
            gt(T), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ce), gt(null);
            break;
          }
        }
        T.ref !== null && (gt(T), R("Invalid attribute `ref` supplied to `React.Fragment`."), gt(null));
      }
    }
    function Ka(T, W, ae, ce, je, We) {
      {
        var Me = xe(T);
        if (!Me) {
          var ge = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (ge += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var It = Fl(je);
          It ? ge += It : ge += Yr();
          var Et;
          T === null ? Et = "null" : Ni(T) ? Et = "array" : T !== void 0 && T.$$typeof === r ? (Et = "<" + (Te(T.type) || "Unknown") + " />", ge = " Did you accidentally export a JSX literal instead of a component?") : Et = typeof T, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Et, ge);
        }
        var Ct = jl(T, W, ae, je, We);
        if (Ct == null)
          return Ct;
        if (Me) {
          var Tn = W.children;
          if (Tn !== void 0)
            if (ce)
              if (Ni(Tn)) {
                for (var Ea = 0; Ea < Tn.length; Ea++)
                  Pl(Tn[Ea], T);
                Object.freeze && Object.freeze(Tn);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pl(Tn, T);
        }
        return T === o ? Ui(Ct) : Xa(Ct), Ct;
      }
    }
    function ga(T, W, ae) {
      return Ka(T, W, ae, !0);
    }
    function Qr(T, W, ae) {
      return Ka(T, W, ae, !1);
    }
    var Sa = Qr, $l = ga;
    cf.Fragment = o, cf.jsx = Sa, cf.jsxs = $l;
  }()), cf;
}
process.env.NODE_ENV === "production" ? _0.exports = Wj() : _0.exports = Gj();
var q = _0.exports, O0 = { exports: {} }, mv = function(n) {
  return n && n.Math == Math && n;
}, $a = (
  // eslint-disable-next-line es/no-global-this -- safe
  mv(typeof globalThis == "object" && globalThis) || mv(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  mv(typeof self == "object" && self) || mv(typeof IS == "object" && IS) || // eslint-disable-next-line no-new-func -- fallback
  function() {
    return this;
  }() || IS || Function("return this")()
), Nu = function(n) {
  try {
    return !!n();
  } catch (r) {
    return !0;
  }
}, Xj = Nu, zu = !Xj(function() {
  return Object.defineProperty({}, 1, {
    get: function() {
      return 7;
    }
  })[1] != 7;
}), oD = { exports: {} }, Kj = Nu, sD = !Kj(function() {
  var n = function() {
  }.bind();
  return typeof n != "function" || n.hasOwnProperty("prototype");
}), cD = sD, fD = Function.prototype, M0 = fD.call, qj = cD && fD.bind.bind(M0, M0), Zf = cD ? qj : function(n) {
  return function() {
    return M0.apply(n, arguments);
  };
}, L0 = typeof document == "object" && document.all, Zj = typeof L0 == "undefined" && L0 !== void 0, dD = {
  all: L0,
  IS_HTMLDDA: Zj
}, pD = dD, Jj = pD.all, Ol = pD.IS_HTMLDDA ? function(n) {
  return typeof n == "function" || n === Jj;
} : function(n) {
  return typeof n == "function";
}, vD = function(n) {
  return n == null;
}, eF = vD, tF = TypeError, nF = function(n) {
  if (eF(n))
    throw tF("Can't call method on " + n);
  return n;
}, rF = nF, aF = Object, iF = function(n) {
  return aF(rF(n));
}, lF = Zf, uF = iF, oF = lF({}.hasOwnProperty), Eh = Object.hasOwn || function(r, l) {
  return oF(uF(r), l);
}, N0 = zu, sF = Eh, hD = Function.prototype, cF = N0 && Object.getOwnPropertyDescriptor, LE = sF(hD, "name"), fF = LE && function() {
}.name === "something", dF = LE && (!N0 || N0 && cF(hD, "name").configurable), pF = {
  EXISTS: LE,
  PROPER: fF,
  CONFIGURABLE: dF
}, Aw = $a, vF = Object.defineProperty, hF = function(n, r) {
  try {
    vF(Aw, n, {
      value: r,
      configurable: !0,
      writable: !0
    });
  } catch (l) {
    Aw[n] = r;
  }
  return r;
}, mF = $a, yF = hF, jw = "__core-js_shared__", gF = mF[jw] || yF(jw, {}), NE = gF, SF = Zf, EF = Ol, z0 = NE, CF = SF(Function.toString);
EF(z0.inspectSource) || (z0.inspectSource = function(n) {
  return CF(n);
});
var RF = z0.inspectSource, TF = $a, xF = Ol, Fw = TF.WeakMap, wF = xF(Fw) && /native code/.test(String(Fw)), Hw = Ol, mD = dD, bF = mD.all, Jf = mD.IS_HTMLDDA ? function(n) {
  return typeof n == "object" ? n !== null : Hw(n) || n === bF;
} : function(n) {
  return typeof n == "object" ? n !== null : Hw(n);
}, zE = {}, DF = $a, Pw = Jf, U0 = DF.document, _F = Pw(U0) && Pw(U0.createElement), kF = function(n) {
  return _F ? U0.createElement(n) : {};
}, OF = zu, MF = Nu, LF = kF, NF = !OF && !MF(function() {
  return Object.defineProperty(LF("div"), "a", {
    get: function() {
      return 7;
    }
  }).a != 7;
}), zF = zu, UF = Nu, AF = zF && UF(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype != 42;
}), jF = Jf, FF = String, HF = TypeError, yD = function(n) {
  if (jF(n))
    return n;
  throw HF(FF(n) + " is not an object");
}, PF = sD, yv = Function.prototype.call, gD = PF ? yv.bind(yv) : function() {
  return yv.apply(yv, arguments);
}, YS = $a, $F = Ol, VF = function(n) {
  return $F(n) ? n : void 0;
}, BF = function(n, r) {
  return arguments.length < 2 ? VF(YS[n]) : YS[n] && YS[n][r];
}, IF = Zf, YF = IF({}.isPrototypeOf), QF = typeof navigator != "undefined" && String(navigator.userAgent) || "", SD = $a, QS = QF, $w = SD.process, Vw = SD.Deno, Bw = $w && $w.versions || Vw && Vw.version, Iw = Bw && Bw.v8, ca, Wv;
Iw && (ca = Iw.split("."), Wv = ca[0] > 0 && ca[0] < 4 ? 1 : +(ca[0] + ca[1]));
!Wv && QS && (ca = QS.match(/Edge\/(\d+)/), (!ca || ca[1] >= 74) && (ca = QS.match(/Chrome\/(\d+)/), ca && (Wv = +ca[1])));
var WF = Wv, Yw = WF, GF = Nu, XF = $a, KF = XF.String, ED = !!Object.getOwnPropertySymbols && !GF(function() {
  var n = Symbol();
  return !KF(n) || !(Object(n) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && Yw && Yw < 41;
}), qF = ED, CD = qF && !Symbol.sham && typeof Symbol.iterator == "symbol", ZF = BF, JF = Ol, e3 = YF, t3 = CD, n3 = Object, RD = t3 ? function(n) {
  return typeof n == "symbol";
} : function(n) {
  var r = ZF("Symbol");
  return JF(r) && e3(r.prototype, n3(n));
}, r3 = String, a3 = function(n) {
  try {
    return r3(n);
  } catch (r) {
    return "Object";
  }
}, i3 = Ol, l3 = a3, u3 = TypeError, o3 = function(n) {
  if (i3(n))
    return n;
  throw u3(l3(n) + " is not a function");
}, s3 = o3, c3 = vD, f3 = function(n, r) {
  var l = n[r];
  return c3(l) ? void 0 : s3(l);
}, WS = gD, GS = Ol, XS = Jf, d3 = TypeError, p3 = function(n, r) {
  var l, o;
  if (r === "string" && GS(l = n.toString) && !XS(o = WS(l, n)) || GS(l = n.valueOf) && !XS(o = WS(l, n)) || r !== "string" && GS(l = n.toString) && !XS(o = WS(l, n)))
    return o;
  throw d3("Can't convert object to primitive value");
}, TD = { exports: {} }, Qw = NE;
(TD.exports = function(n, r) {
  return Qw[n] || (Qw[n] = r !== void 0 ? r : {});
})("versions", []).push({
  version: "3.31.0",
  mode: "global",
  copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.31.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var xD = TD.exports, v3 = Zf, h3 = 0, m3 = Math.random(), y3 = v3(1 .toString), wD = function(n) {
  return "Symbol(" + (n === void 0 ? "" : n) + ")_" + y3(++h3 + m3, 36);
}, g3 = $a, S3 = xD, Ww = Eh, E3 = wD, C3 = ED, R3 = CD, Bo = g3.Symbol, KS = S3("wks"), T3 = R3 ? Bo.for || Bo : Bo && Bo.withoutSetter || E3, x3 = function(n) {
  return Ww(KS, n) || (KS[n] = C3 && Ww(Bo, n) ? Bo[n] : T3("Symbol." + n)), KS[n];
}, w3 = gD, Gw = Jf, Xw = RD, b3 = f3, D3 = p3, _3 = x3, k3 = TypeError, O3 = _3("toPrimitive"), M3 = function(n, r) {
  if (!Gw(n) || Xw(n))
    return n;
  var l = b3(n, O3), o;
  if (l) {
    if (r === void 0 && (r = "default"), o = w3(l, n, r), !Gw(o) || Xw(o))
      return o;
    throw k3("Can't convert object to primitive value");
  }
  return r === void 0 && (r = "number"), D3(n, r);
}, L3 = M3, N3 = RD, z3 = function(n) {
  var r = L3(n, "string");
  return N3(r) ? r : r + "";
}, U3 = zu, A3 = NF, j3 = AF, gv = yD, Kw = z3, F3 = TypeError, qS = Object.defineProperty, H3 = Object.getOwnPropertyDescriptor, ZS = "enumerable", JS = "configurable", e0 = "writable";
zE.f = U3 ? j3 ? function(r, l, o) {
  if (gv(r), l = Kw(l), gv(o), typeof r == "function" && l === "prototype" && "value" in o && e0 in o && !o[e0]) {
    var c = H3(r, l);
    c && c[e0] && (r[l] = o.value, o = {
      configurable: JS in o ? o[JS] : c[JS],
      enumerable: ZS in o ? o[ZS] : c[ZS],
      writable: !1
    });
  }
  return qS(r, l, o);
} : qS : function(r, l, o) {
  if (gv(r), l = Kw(l), gv(o), A3)
    try {
      return qS(r, l, o);
    } catch (c) {
    }
  if ("get" in o || "set" in o)
    throw F3("Accessors not supported");
  return "value" in o && (r[l] = o.value), r;
};
var P3 = function(n, r) {
  return {
    enumerable: !(n & 1),
    configurable: !(n & 2),
    writable: !(n & 4),
    value: r
  };
}, $3 = zu, V3 = zE, B3 = P3, I3 = $3 ? function(n, r, l) {
  return V3.f(n, r, B3(1, l));
} : function(n, r, l) {
  return n[r] = l, n;
}, Y3 = xD, Q3 = wD, qw = Y3("keys"), W3 = function(n) {
  return qw[n] || (qw[n] = Q3(n));
}, G3 = {}, X3 = wF, bD = $a, K3 = Jf, q3 = I3, t0 = Eh, n0 = NE, Z3 = W3, J3 = G3, Zw = "Object already initialized", A0 = bD.TypeError, eH = bD.WeakMap, Gv, zf, Xv, tH = function(n) {
  return Xv(n) ? zf(n) : Gv(n, {});
}, nH = function(n) {
  return function(r) {
    var l;
    if (!K3(r) || (l = zf(r)).type !== n)
      throw A0("Incompatible receiver, " + n + " required");
    return l;
  };
};
if (X3 || n0.state) {
  var Ua = n0.state || (n0.state = new eH());
  Ua.get = Ua.get, Ua.has = Ua.has, Ua.set = Ua.set, Gv = function(n, r) {
    if (Ua.has(n))
      throw A0(Zw);
    return r.facade = n, Ua.set(n, r), r;
  }, zf = function(n) {
    return Ua.get(n) || {};
  }, Xv = function(n) {
    return Ua.has(n);
  };
} else {
  var $o = Z3("state");
  J3[$o] = !0, Gv = function(n, r) {
    if (t0(n, $o))
      throw A0(Zw);
    return r.facade = n, q3(n, $o, r), r;
  }, zf = function(n) {
    return t0(n, $o) ? n[$o] : {};
  }, Xv = function(n) {
    return t0(n, $o);
  };
}
var rH = {
  set: Gv,
  get: zf,
  has: Xv,
  enforce: tH,
  getterFor: nH
}, UE = Zf, aH = Nu, iH = Ol, Sv = Eh, j0 = zu, lH = pF.CONFIGURABLE, uH = RF, DD = rH, oH = DD.enforce, sH = DD.get, Jw = String, Av = Object.defineProperty, cH = UE("".slice), fH = UE("".replace), dH = UE([].join), pH = j0 && !aH(function() {
  return Av(function() {
  }, "length", {
    value: 8
  }).length !== 8;
}), vH = String(String).split("String"), hH = oD.exports = function(n, r, l) {
  cH(Jw(r), 0, 7) === "Symbol(" && (r = "[" + fH(Jw(r), /^Symbol\(([^)]*)\)/, "$1") + "]"), l && l.getter && (r = "get " + r), l && l.setter && (r = "set " + r), (!Sv(n, "name") || lH && n.name !== r) && (j0 ? Av(n, "name", {
    value: r,
    configurable: !0
  }) : n.name = r), pH && l && Sv(l, "arity") && n.length !== l.arity && Av(n, "length", {
    value: l.arity
  });
  try {
    l && Sv(l, "constructor") && l.constructor ? j0 && Av(n, "prototype", {
      writable: !1
    }) : n.prototype && (n.prototype = void 0);
  } catch (c) {
  }
  var o = oH(n);
  return Sv(o, "source") || (o.source = dH(vH, typeof r == "string" ? r : "")), n;
};
Function.prototype.toString = hH(function() {
  return iH(this) && sH(this).source || uH(this);
}, "toString");
var mH = oD.exports, eb = mH, yH = zE, gH = function(n, r, l) {
  return l.get && eb(l.get, r, {
    getter: !0
  }), l.set && eb(l.set, r, {
    setter: !0
  }), yH.f(n, r, l);
}, SH = yD, EH = function() {
  var n = SH(this), r = "";
  return n.hasIndices && (r += "d"), n.global && (r += "g"), n.ignoreCase && (r += "i"), n.multiline && (r += "m"), n.dotAll && (r += "s"), n.unicode && (r += "u"), n.unicodeSets && (r += "v"), n.sticky && (r += "y"), r;
}, CH = $a, RH = zu, TH = gH, xH = EH, wH = Nu, _D = CH.RegExp, kD = _D.prototype, bH = RH && wH(function() {
  var n = !0;
  try {
    _D(".", "d");
  } catch (E) {
    n = !1;
  }
  var r = {}, l = "", o = n ? "dgimsy" : "gimsy", c = function(E, x) {
    Object.defineProperty(r, E, {
      get: function() {
        return l += x, !0;
      }
    });
  }, p = {
    dotAll: "s",
    global: "g",
    ignoreCase: "i",
    multiline: "m",
    sticky: "y"
  };
  n && (p.hasIndices = "d");
  for (var d in p)
    c(d, p[d]);
  var S = Object.getOwnPropertyDescriptor(kD, "flags").get.call(r);
  return S !== o || l !== o;
});
bH && TH(kD, "flags", {
  configurable: !0,
  get: xH
});
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var OD = require("react"), Rr = require("scheduler");
function X(n) {
  for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
    r += "&args[]=" + encodeURIComponent(arguments[l]);
  return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var MD = /* @__PURE__ */ new Set(), Uf = {};
function Uu(n, r) {
  os(n, r), os(n + "Capture", r);
}
function os(n, r) {
  for (Uf[n] = r, n = 0; n < r.length; n++)
    MD.add(r[n]);
}
var _i = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), F0 = Object.prototype.hasOwnProperty, DH = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, tb = {}, nb = {};
function _H(n) {
  return F0.call(nb, n) ? !0 : F0.call(tb, n) ? !1 : DH.test(n) ? nb[n] = !0 : (tb[n] = !0, !1);
}
function kH(n, r, l, o) {
  if (l !== null && l.type === 0)
    return !1;
  switch (typeof r) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
    default:
      return !1;
  }
}
function OH(n, r, l, o) {
  if (r === null || typeof r == "undefined" || kH(n, r, l, o))
    return !0;
  if (o)
    return !1;
  if (l !== null)
    switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
  return !1;
}
function Qn(n, r, l, o, c, p, d) {
  this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = p, this.removeEmptyString = d;
}
var Rn = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
  Rn[n] = new Qn(n, 0, !1, n, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
  var r = n[0];
  Rn[r] = new Qn(r, 1, !1, n[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
  Rn[n] = new Qn(n, 2, !1, n.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
  Rn[n] = new Qn(n, 2, !1, n, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
  Rn[n] = new Qn(n, 3, !1, n.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(n) {
  Rn[n] = new Qn(n, 3, !0, n, null, !1, !1);
});
["capture", "download"].forEach(function(n) {
  Rn[n] = new Qn(n, 4, !1, n, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(n) {
  Rn[n] = new Qn(n, 6, !1, n, null, !1, !1);
});
["rowSpan", "start"].forEach(function(n) {
  Rn[n] = new Qn(n, 5, !1, n.toLowerCase(), null, !1, !1);
});
var AE = /[\-:]([a-z])/g;
function jE(n) {
  return n[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
  var r = n.replace(AE, jE);
  Rn[r] = new Qn(r, 1, !1, n, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
  var r = n.replace(AE, jE);
  Rn[r] = new Qn(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
  var r = n.replace(AE, jE);
  Rn[r] = new Qn(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(n) {
  Rn[n] = new Qn(n, 1, !1, n.toLowerCase(), null, !1, !1);
});
Rn.xlinkHref = new Qn("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(n) {
  Rn[n] = new Qn(n, 1, !1, n.toLowerCase(), null, !0, !0);
});
function FE(n, r, l, o) {
  var c = Rn.hasOwnProperty(r) ? Rn[r] : null;
  (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (OH(r, l, c, o) && (l = null), o || c === null ? _H(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
}
var Li = OD.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ev = Symbol.for("react.element"), Io = Symbol.for("react.portal"), Yo = Symbol.for("react.fragment"), HE = Symbol.for("react.strict_mode"), H0 = Symbol.for("react.profiler"), LD = Symbol.for("react.provider"), ND = Symbol.for("react.context"), PE = Symbol.for("react.forward_ref"), P0 = Symbol.for("react.suspense"), $0 = Symbol.for("react.suspense_list"), $E = Symbol.for("react.memo"), vl = Symbol.for("react.lazy"), zD = Symbol.for("react.offscreen"), rb = Symbol.iterator;
function ff(n) {
  return n === null || typeof n != "object" ? null : (n = rb && n[rb] || n["@@iterator"], typeof n == "function" ? n : null);
}
var Mt = Object.assign, r0;
function Cf(n) {
  if (r0 === void 0)
    try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      r0 = r && r[1] || "";
    }
  return `
` + r0 + n;
}
var a0 = !1;
function i0(n, r) {
  if (!n || a0)
    return "";
  a0 = !0;
  var l = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (r)
      if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", {
        set: function() {
          throw Error();
        }
      }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (x) {
          var o = x;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (x) {
          o = x;
        }
        n.call(r.prototype);
      }
    else {
      try {
        throw Error();
      } catch (x) {
        o = x;
      }
      n();
    }
  } catch (x) {
    if (x && o && typeof x.stack == "string") {
      for (var c = x.stack.split(`
`), p = o.stack.split(`
`), d = c.length - 1, S = p.length - 1; 1 <= d && 0 <= S && c[d] !== p[S]; )
        S--;
      for (; 1 <= d && 0 <= S; d--, S--)
        if (c[d] !== p[S]) {
          if (d !== 1 || S !== 1)
            do
              if (d--, S--, 0 > S || c[d] !== p[S]) {
                var E = `
` + c[d].replace(" at new ", " at ");
                return n.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", n.displayName)), E;
              }
            while (1 <= d && 0 <= S);
          break;
        }
    }
  } finally {
    a0 = !1, Error.prepareStackTrace = l;
  }
  return (n = n ? n.displayName || n.name : "") ? Cf(n) : "";
}
function MH(n) {
  switch (n.tag) {
    case 5:
      return Cf(n.type);
    case 16:
      return Cf("Lazy");
    case 13:
      return Cf("Suspense");
    case 19:
      return Cf("SuspenseList");
    case 0:
    case 2:
    case 15:
      return n = i0(n.type, !1), n;
    case 11:
      return n = i0(n.type.render, !1), n;
    case 1:
      return n = i0(n.type, !0), n;
    default:
      return "";
  }
}
function V0(n) {
  if (n == null)
    return null;
  if (typeof n == "function")
    return n.displayName || n.name || null;
  if (typeof n == "string")
    return n;
  switch (n) {
    case Yo:
      return "Fragment";
    case Io:
      return "Portal";
    case H0:
      return "Profiler";
    case HE:
      return "StrictMode";
    case P0:
      return "Suspense";
    case $0:
      return "SuspenseList";
  }
  if (typeof n == "object")
    switch (n.$$typeof) {
      case ND:
        return (n.displayName || "Context") + ".Consumer";
      case LD:
        return (n._context.displayName || "Context") + ".Provider";
      case PE:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case $E:
        return r = n.displayName || null, r !== null ? r : V0(n.type) || "Memo";
      case vl:
        r = n._payload, n = n._init;
        try {
          return V0(n(r));
        } catch (l) {
        }
    }
  return null;
}
function LH(n) {
  var r = n.type;
  switch (n.tag) {
    case 24:
      return "Cache";
    case 9:
      return (r.displayName || "Context") + ".Consumer";
    case 10:
      return (r._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return r;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return V0(r);
    case 8:
      return r === HE ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
  }
  return null;
}
function _l(n) {
  switch (typeof n) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return n;
    case "object":
      return n;
    default:
      return "";
  }
}
function UD(n) {
  var r = n.type;
  return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
}
function NH(n) {
  var r = UD(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
  if (!n.hasOwnProperty(r) && typeof l != "undefined" && typeof l.get == "function" && typeof l.set == "function") {
    var c = l.get, p = l.set;
    return Object.defineProperty(n, r, {
      configurable: !0,
      get: function() {
        return c.call(this);
      },
      set: function(d) {
        o = "" + d, p.call(this, d);
      }
    }), Object.defineProperty(n, r, {
      enumerable: l.enumerable
    }), {
      getValue: function() {
        return o;
      },
      setValue: function(d) {
        o = "" + d;
      },
      stopTracking: function() {
        n._valueTracker = null, delete n[r];
      }
    };
  }
}
function Cv(n) {
  n._valueTracker || (n._valueTracker = NH(n));
}
function AD(n) {
  if (!n)
    return !1;
  var r = n._valueTracker;
  if (!r)
    return !0;
  var l = r.getValue(), o = "";
  return n && (o = UD(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
}
function Kv(n) {
  if (n = n || (typeof document != "undefined" ? document : void 0), typeof n == "undefined")
    return null;
  try {
    return n.activeElement || n.body;
  } catch (r) {
    return n.body;
  }
}
function B0(n, r) {
  var l = r.checked;
  return Mt({}, r, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: l != null ? l : n._wrapperState.initialChecked
  });
}
function ab(n, r) {
  var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
  l = _l(r.value != null ? r.value : l), n._wrapperState = {
    initialChecked: o,
    initialValue: l,
    controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null
  };
}
function jD(n, r) {
  r = r.checked, r != null && FE(n, "checked", r, !1);
}
function I0(n, r) {
  jD(n, r);
  var l = _l(r.value), o = r.type;
  if (l != null)
    o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
  else if (o === "submit" || o === "reset") {
    n.removeAttribute("value");
    return;
  }
  r.hasOwnProperty("value") ? Y0(n, r.type, l) : r.hasOwnProperty("defaultValue") && Y0(n, r.type, _l(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
}
function ib(n, r, l) {
  if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
    var o = r.type;
    if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
      return;
    r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
  }
  l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
}
function Y0(n, r, l) {
  (r !== "number" || Kv(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
}
var Rf = Array.isArray;
function ns(n, r, l, o) {
  if (n = n.options, r) {
    r = {};
    for (var c = 0; c < l.length; c++)
      r["$" + l[c]] = !0;
    for (l = 0; l < n.length; l++)
      c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
  } else {
    for (l = "" + _l(l), r = null, c = 0; c < n.length; c++) {
      if (n[c].value === l) {
        n[c].selected = !0, o && (n[c].defaultSelected = !0);
        return;
      }
      r !== null || n[c].disabled || (r = n[c]);
    }
    r !== null && (r.selected = !0);
  }
}
function Q0(n, r) {
  if (r.dangerouslySetInnerHTML != null)
    throw Error(X(91));
  return Mt({}, r, {
    value: void 0,
    defaultValue: void 0,
    children: "" + n._wrapperState.initialValue
  });
}
function lb(n, r) {
  var l = r.value;
  if (l == null) {
    if (l = r.children, r = r.defaultValue, l != null) {
      if (r != null)
        throw Error(X(92));
      if (Rf(l)) {
        if (1 < l.length)
          throw Error(X(93));
        l = l[0];
      }
      r = l;
    }
    r == null && (r = ""), l = r;
  }
  n._wrapperState = {
    initialValue: _l(l)
  };
}
function FD(n, r) {
  var l = _l(r.value), o = _l(r.defaultValue);
  l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
}
function ub(n) {
  var r = n.textContent;
  r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
}
function HD(n) {
  switch (n) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function W0(n, r) {
  return n == null || n === "http://www.w3.org/1999/xhtml" ? HD(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
}
var Rv, PD = function(n) {
  return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
    MSApp.execUnsafeLocalFunction(function() {
      return n(r, l, o, c);
    });
  } : n;
}(function(n, r) {
  if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
    n.innerHTML = r;
  else {
    for (Rv = Rv || document.createElement("div"), Rv.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Rv.firstChild; n.firstChild; )
      n.removeChild(n.firstChild);
    for (; r.firstChild; )
      n.appendChild(r.firstChild);
  }
});
function Af(n, r) {
  if (r) {
    var l = n.firstChild;
    if (l && l === n.lastChild && l.nodeType === 3) {
      l.nodeValue = r;
      return;
    }
  }
  n.textContent = r;
}
var wf = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, zH = ["Webkit", "ms", "Moz", "O"];
Object.keys(wf).forEach(function(n) {
  zH.forEach(function(r) {
    r = r + n.charAt(0).toUpperCase() + n.substring(1), wf[r] = wf[n];
  });
});
function $D(n, r, l) {
  return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || wf.hasOwnProperty(n) && wf[n] ? ("" + r).trim() : r + "px";
}
function VD(n, r) {
  n = n.style;
  for (var l in r)
    if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = $D(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
}
var UH = Mt({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});
function G0(n, r) {
  if (r) {
    if (UH[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
      throw Error(X(137, n));
    if (r.dangerouslySetInnerHTML != null) {
      if (r.children != null)
        throw Error(X(60));
      if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
        throw Error(X(61));
    }
    if (r.style != null && typeof r.style != "object")
      throw Error(X(62));
  }
}
function X0(n, r) {
  if (n.indexOf("-") === -1)
    return typeof r.is == "string";
  switch (n) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var K0 = null;
function VE(n) {
  return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
}
var q0 = null, rs = null, as = null;
function ob(n) {
  if (n = nd(n)) {
    if (typeof q0 != "function")
      throw Error(X(280));
    var r = n.stateNode;
    r && (r = wh(r), q0(n.stateNode, n.type, r));
  }
}
function BD(n) {
  rs ? as ? as.push(n) : as = [n] : rs = n;
}
function ID() {
  if (rs) {
    var n = rs, r = as;
    if (as = rs = null, ob(n), r)
      for (n = 0; n < r.length; n++)
        ob(r[n]);
  }
}
function YD(n, r) {
  return n(r);
}
function QD() {
}
var l0 = !1;
function WD(n, r, l) {
  if (l0)
    return n(r, l);
  l0 = !0;
  try {
    return YD(n, r, l);
  } finally {
    l0 = !1, (rs !== null || as !== null) && (QD(), ID());
  }
}
function jf(n, r) {
  var l = n.stateNode;
  if (l === null)
    return null;
  var o = wh(l);
  if (o === null)
    return null;
  l = o[r];
  e:
    switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
  if (n)
    return null;
  if (l && typeof l != "function")
    throw Error(X(231, r, typeof l));
  return l;
}
var Z0 = !1;
if (_i)
  try {
    var df = {};
    Object.defineProperty(df, "passive", {
      get: function() {
        Z0 = !0;
      }
    }), window.addEventListener("test", df, df), window.removeEventListener("test", df, df);
  } catch (n) {
    Z0 = !1;
  }
function AH(n, r, l, o, c, p, d, S, E) {
  var x = Array.prototype.slice.call(arguments, 3);
  try {
    r.apply(l, x);
  } catch (j) {
    this.onError(j);
  }
}
var bf = !1, qv = null, Zv = !1, J0 = null, jH = {
  onError: function(n) {
    bf = !0, qv = n;
  }
};
function FH(n, r, l, o, c, p, d, S, E) {
  bf = !1, qv = null, AH.apply(jH, arguments);
}
function HH(n, r, l, o, c, p, d, S, E) {
  if (FH.apply(this, arguments), bf) {
    if (bf) {
      var x = qv;
      bf = !1, qv = null;
    } else
      throw Error(X(198));
    Zv || (Zv = !0, J0 = x);
  }
}
function Au(n) {
  var r = n, l = n;
  if (n.alternate)
    for (; r.return; )
      r = r.return;
  else {
    n = r;
    do
      r = n, r.flags & 4098 && (l = r.return), n = r.return;
    while (n);
  }
  return r.tag === 3 ? l : null;
}
function GD(n) {
  if (n.tag === 13) {
    var r = n.memoizedState;
    if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
      return r.dehydrated;
  }
  return null;
}
function sb(n) {
  if (Au(n) !== n)
    throw Error(X(188));
}
function PH(n) {
  var r = n.alternate;
  if (!r) {
    if (r = Au(n), r === null)
      throw Error(X(188));
    return r !== n ? null : n;
  }
  for (var l = n, o = r; ; ) {
    var c = l.return;
    if (c === null)
      break;
    var p = c.alternate;
    if (p === null) {
      if (o = c.return, o !== null) {
        l = o;
        continue;
      }
      break;
    }
    if (c.child === p.child) {
      for (p = c.child; p; ) {
        if (p === l)
          return sb(c), n;
        if (p === o)
          return sb(c), r;
        p = p.sibling;
      }
      throw Error(X(188));
    }
    if (l.return !== o.return)
      l = c, o = p;
    else {
      for (var d = !1, S = c.child; S; ) {
        if (S === l) {
          d = !0, l = c, o = p;
          break;
        }
        if (S === o) {
          d = !0, o = c, l = p;
          break;
        }
        S = S.sibling;
      }
      if (!d) {
        for (S = p.child; S; ) {
          if (S === l) {
            d = !0, l = p, o = c;
            break;
          }
          if (S === o) {
            d = !0, o = p, l = c;
            break;
          }
          S = S.sibling;
        }
        if (!d)
          throw Error(X(189));
      }
    }
    if (l.alternate !== o)
      throw Error(X(190));
  }
  if (l.tag !== 3)
    throw Error(X(188));
  return l.stateNode.current === l ? n : r;
}
function XD(n) {
  return n = PH(n), n !== null ? KD(n) : null;
}
function KD(n) {
  if (n.tag === 5 || n.tag === 6)
    return n;
  for (n = n.child; n !== null; ) {
    var r = KD(n);
    if (r !== null)
      return r;
    n = n.sibling;
  }
  return null;
}
var qD = Rr.unstable_scheduleCallback, cb = Rr.unstable_cancelCallback, $H = Rr.unstable_shouldYield, VH = Rr.unstable_requestPaint, jt = Rr.unstable_now, BH = Rr.unstable_getCurrentPriorityLevel, BE = Rr.unstable_ImmediatePriority, ZD = Rr.unstable_UserBlockingPriority, Jv = Rr.unstable_NormalPriority, IH = Rr.unstable_LowPriority, JD = Rr.unstable_IdlePriority, Ch = null, Ha = null;
function YH(n) {
  if (Ha && typeof Ha.onCommitFiberRoot == "function")
    try {
      Ha.onCommitFiberRoot(Ch, n, void 0, (n.current.flags & 128) === 128);
    } catch (r) {
    }
}
var da = Math.clz32 ? Math.clz32 : GH, QH = Math.log, WH = Math.LN2;
function GH(n) {
  return n >>>= 0, n === 0 ? 32 : 31 - (QH(n) / WH | 0) | 0;
}
var Tv = 64, xv = 4194304;
function Tf(n) {
  switch (n & -n) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return n & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return n;
  }
}
function eh(n, r) {
  var l = n.pendingLanes;
  if (l === 0)
    return 0;
  var o = 0, c = n.suspendedLanes, p = n.pingedLanes, d = l & 268435455;
  if (d !== 0) {
    var S = d & ~c;
    S !== 0 ? o = Tf(S) : (p &= d, p !== 0 && (o = Tf(p)));
  } else
    d = l & ~c, d !== 0 ? o = Tf(d) : p !== 0 && (o = Tf(p));
  if (o === 0)
    return 0;
  if (r !== 0 && r !== o && !(r & c) && (c = o & -o, p = r & -r, c >= p || c === 16 && (p & 4194240) !== 0))
    return r;
  if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
    for (n = n.entanglements, r &= o; 0 < r; )
      l = 31 - da(r), c = 1 << l, o |= n[l], r &= ~c;
  return o;
}
function XH(n, r) {
  switch (n) {
    case 1:
    case 2:
    case 4:
      return r + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return r + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function KH(n, r) {
  for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, p = n.pendingLanes; 0 < p; ) {
    var d = 31 - da(p), S = 1 << d, E = c[d];
    E === -1 ? (!(S & l) || S & o) && (c[d] = XH(S, r)) : E <= r && (n.expiredLanes |= S), p &= ~S;
  }
}
function eE(n) {
  return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
}
function e_() {
  var n = Tv;
  return Tv <<= 1, !(Tv & 4194240) && (Tv = 64), n;
}
function u0(n) {
  for (var r = [], l = 0; 31 > l; l++)
    r.push(n);
  return r;
}
function ed(n, r, l) {
  n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - da(r), n[r] = l;
}
function qH(n, r) {
  var l = n.pendingLanes & ~r;
  n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
  var o = n.eventTimes;
  for (n = n.expirationTimes; 0 < l; ) {
    var c = 31 - da(l), p = 1 << c;
    r[c] = 0, o[c] = -1, n[c] = -1, l &= ~p;
  }
}
function IE(n, r) {
  var l = n.entangledLanes |= r;
  for (n = n.entanglements; l; ) {
    var o = 31 - da(l), c = 1 << o;
    c & r | n[o] & r && (n[o] |= r), l &= ~c;
  }
}
var ct = 0;
function t_(n) {
  return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
}
var n_, YE, r_, a_, i_, tE = !1, wv = [], El = null, Cl = null, Rl = null, Ff = /* @__PURE__ */ new Map(), Hf = /* @__PURE__ */ new Map(), ml = [], ZH = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function fb(n, r) {
  switch (n) {
    case "focusin":
    case "focusout":
      El = null;
      break;
    case "dragenter":
    case "dragleave":
      Cl = null;
      break;
    case "mouseover":
    case "mouseout":
      Rl = null;
      break;
    case "pointerover":
    case "pointerout":
      Ff.delete(r.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hf.delete(r.pointerId);
  }
}
function pf(n, r, l, o, c, p) {
  return n === null || n.nativeEvent !== p ? (n = {
    blockedOn: r,
    domEventName: l,
    eventSystemFlags: o,
    nativeEvent: p,
    targetContainers: [c]
  }, r !== null && (r = nd(r), r !== null && YE(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
}
function JH(n, r, l, o, c) {
  switch (r) {
    case "focusin":
      return El = pf(El, n, r, l, o, c), !0;
    case "dragenter":
      return Cl = pf(Cl, n, r, l, o, c), !0;
    case "mouseover":
      return Rl = pf(Rl, n, r, l, o, c), !0;
    case "pointerover":
      var p = c.pointerId;
      return Ff.set(p, pf(Ff.get(p) || null, n, r, l, o, c)), !0;
    case "gotpointercapture":
      return p = c.pointerId, Hf.set(p, pf(Hf.get(p) || null, n, r, l, o, c)), !0;
  }
  return !1;
}
function l_(n) {
  var r = Tu(n.target);
  if (r !== null) {
    var l = Au(r);
    if (l !== null) {
      if (r = l.tag, r === 13) {
        if (r = GD(l), r !== null) {
          n.blockedOn = r, i_(n.priority, function() {
            r_(l);
          });
          return;
        }
      } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
        n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
        return;
      }
    }
  }
  n.blockedOn = null;
}
function jv(n) {
  if (n.blockedOn !== null)
    return !1;
  for (var r = n.targetContainers; 0 < r.length; ) {
    var l = nE(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
    if (l === null) {
      l = n.nativeEvent;
      var o = new l.constructor(l.type, l);
      K0 = o, l.target.dispatchEvent(o), K0 = null;
    } else
      return r = nd(l), r !== null && YE(r), n.blockedOn = l, !1;
    r.shift();
  }
  return !0;
}
function db(n, r, l) {
  jv(n) && l.delete(r);
}
function e4() {
  tE = !1, El !== null && jv(El) && (El = null), Cl !== null && jv(Cl) && (Cl = null), Rl !== null && jv(Rl) && (Rl = null), Ff.forEach(db), Hf.forEach(db);
}
function vf(n, r) {
  n.blockedOn === r && (n.blockedOn = null, tE || (tE = !0, Rr.unstable_scheduleCallback(Rr.unstable_NormalPriority, e4)));
}
function Pf(n) {
  function r(c) {
    return vf(c, n);
  }
  if (0 < wv.length) {
    vf(wv[0], n);
    for (var l = 1; l < wv.length; l++) {
      var o = wv[l];
      o.blockedOn === n && (o.blockedOn = null);
    }
  }
  for (El !== null && vf(El, n), Cl !== null && vf(Cl, n), Rl !== null && vf(Rl, n), Ff.forEach(r), Hf.forEach(r), l = 0; l < ml.length; l++)
    o = ml[l], o.blockedOn === n && (o.blockedOn = null);
  for (; 0 < ml.length && (l = ml[0], l.blockedOn === null); )
    l_(l), l.blockedOn === null && ml.shift();
}
var is = Li.ReactCurrentBatchConfig, th = !0;
function t4(n, r, l, o) {
  var c = ct, p = is.transition;
  is.transition = null;
  try {
    ct = 1, QE(n, r, l, o);
  } finally {
    ct = c, is.transition = p;
  }
}
function n4(n, r, l, o) {
  var c = ct, p = is.transition;
  is.transition = null;
  try {
    ct = 4, QE(n, r, l, o);
  } finally {
    ct = c, is.transition = p;
  }
}
function QE(n, r, l, o) {
  if (th) {
    var c = nE(n, r, l, o);
    if (c === null)
      y0(n, r, o, nh, l), fb(n, o);
    else if (JH(c, n, r, l, o))
      o.stopPropagation();
    else if (fb(n, o), r & 4 && -1 < ZH.indexOf(n)) {
      for (; c !== null; ) {
        var p = nd(c);
        if (p !== null && n_(p), p = nE(n, r, l, o), p === null && y0(n, r, o, nh, l), p === c)
          break;
        c = p;
      }
      c !== null && o.stopPropagation();
    } else
      y0(n, r, o, null, l);
  }
}
var nh = null;
function nE(n, r, l, o) {
  if (nh = null, n = VE(o), n = Tu(n), n !== null)
    if (r = Au(n), r === null)
      n = null;
    else if (l = r.tag, l === 13) {
      if (n = GD(r), n !== null)
        return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated)
        return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else
      r !== n && (n = null);
  return nh = n, null;
}
function u_(n) {
  switch (n) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (BH()) {
        case BE:
          return 1;
        case ZD:
          return 4;
        case Jv:
        case IH:
          return 16;
        case JD:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gl = null, WE = null, Fv = null;
function o_() {
  if (Fv)
    return Fv;
  var n, r = WE, l = r.length, o, c = "value" in gl ? gl.value : gl.textContent, p = c.length;
  for (n = 0; n < l && r[n] === c[n]; n++)
    ;
  var d = l - n;
  for (o = 1; o <= d && r[l - o] === c[p - o]; o++)
    ;
  return Fv = c.slice(n, 1 < o ? 1 - o : void 0);
}
function Hv(n) {
  var r = n.keyCode;
  return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
}
function bv() {
  return !0;
}
function pb() {
  return !1;
}
function Tr(n) {
  function r(l, o, c, p, d) {
    this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = p, this.target = d, this.currentTarget = null;
    for (var S in n)
      n.hasOwnProperty(S) && (l = n[S], this[S] = l ? l(p) : p[S]);
    return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? bv : pb, this.isPropagationStopped = pb, this;
  }
  return Mt(r.prototype, {
    preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = bv);
    },
    stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = bv);
    },
    persist: function() {
    },
    isPersistent: bv
  }), r;
}
var hs = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function(n) {
    return n.timeStamp || Date.now();
  },
  defaultPrevented: 0,
  isTrusted: 0
}, GE = Tr(hs), td = Mt({}, hs, {
  view: 0,
  detail: 0
}), r4 = Tr(td), o0, s0, hf, Rh = Mt({}, td, {
  screenX: 0,
  screenY: 0,
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  getModifierState: XE,
  button: 0,
  buttons: 0,
  relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  },
  movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== hf && (hf && n.type === "mousemove" ? (o0 = n.screenX - hf.screenX, s0 = n.screenY - hf.screenY) : s0 = o0 = 0, hf = n), o0);
  },
  movementY: function(n) {
    return "movementY" in n ? n.movementY : s0;
  }
}), vb = Tr(Rh), a4 = Mt({}, Rh, {
  dataTransfer: 0
}), i4 = Tr(a4), l4 = Mt({}, td, {
  relatedTarget: 0
}), c0 = Tr(l4), u4 = Mt({}, hs, {
  animationName: 0,
  elapsedTime: 0,
  pseudoElement: 0
}), o4 = Tr(u4), s4 = Mt({}, hs, {
  clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  }
}), c4 = Tr(s4), f4 = Mt({}, hs, {
  data: 0
}), hb = Tr(f4), d4 = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, p4 = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, v4 = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};
function h4(n) {
  var r = this.nativeEvent;
  return r.getModifierState ? r.getModifierState(n) : (n = v4[n]) ? !!r[n] : !1;
}
function XE() {
  return h4;
}
var m4 = Mt({}, td, {
  key: function(n) {
    if (n.key) {
      var r = d4[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Hv(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? p4[n.keyCode] || "Unidentified" : "";
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: XE,
  charCode: function(n) {
    return n.type === "keypress" ? Hv(n) : 0;
  },
  keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  },
  which: function(n) {
    return n.type === "keypress" ? Hv(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }
}), y4 = Tr(m4), g4 = Mt({}, Rh, {
  pointerId: 0,
  width: 0,
  height: 0,
  pressure: 0,
  tangentialPressure: 0,
  tiltX: 0,
  tiltY: 0,
  twist: 0,
  pointerType: 0,
  isPrimary: 0
}), mb = Tr(g4), S4 = Mt({}, td, {
  touches: 0,
  targetTouches: 0,
  changedTouches: 0,
  altKey: 0,
  metaKey: 0,
  ctrlKey: 0,
  shiftKey: 0,
  getModifierState: XE
}), E4 = Tr(S4), C4 = Mt({}, hs, {
  propertyName: 0,
  elapsedTime: 0,
  pseudoElement: 0
}), R4 = Tr(C4), T4 = Mt({}, Rh, {
  deltaX: function(n) {
    return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
  },
  deltaY: function(n) {
    return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), x4 = Tr(T4), w4 = [9, 13, 27, 32], KE = _i && "CompositionEvent" in window, Df = null;
_i && "documentMode" in document && (Df = document.documentMode);
var b4 = _i && "TextEvent" in window && !Df, s_ = _i && (!KE || Df && 8 < Df && 11 >= Df), yb = String.fromCharCode(32), gb = !1;
function c_(n, r) {
  switch (n) {
    case "keyup":
      return w4.indexOf(r.keyCode) !== -1;
    case "keydown":
      return r.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function f_(n) {
  return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
}
var Qo = !1;
function D4(n, r) {
  switch (n) {
    case "compositionend":
      return f_(r);
    case "keypress":
      return r.which !== 32 ? null : (gb = !0, yb);
    case "textInput":
      return n = r.data, n === yb && gb ? null : n;
    default:
      return null;
  }
}
function _4(n, r) {
  if (Qo)
    return n === "compositionend" || !KE && c_(n, r) ? (n = o_(), Fv = WE = gl = null, Qo = !1, n) : null;
  switch (n) {
    case "paste":
      return null;
    case "keypress":
      if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
        if (r.char && 1 < r.char.length)
          return r.char;
        if (r.which)
          return String.fromCharCode(r.which);
      }
      return null;
    case "compositionend":
      return s_ && r.locale !== "ko" ? null : r.data;
    default:
      return null;
  }
}
var k4 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function Sb(n) {
  var r = n && n.nodeName && n.nodeName.toLowerCase();
  return r === "input" ? !!k4[n.type] : r === "textarea";
}
function d_(n, r, l, o) {
  BD(o), r = rh(r, "onChange"), 0 < r.length && (l = new GE("onChange", "change", null, l, o), n.push({
    event: l,
    listeners: r
  }));
}
var _f = null, $f = null;
function O4(n) {
  T_(n, 0);
}
function Th(n) {
  var r = Xo(n);
  if (AD(r))
    return n;
}
function M4(n, r) {
  if (n === "change")
    return r;
}
var p_ = !1;
if (_i) {
  var f0;
  if (_i) {
    var d0 = "oninput" in document;
    if (!d0) {
      var Eb = document.createElement("div");
      Eb.setAttribute("oninput", "return;"), d0 = typeof Eb.oninput == "function";
    }
    f0 = d0;
  } else
    f0 = !1;
  p_ = f0 && (!document.documentMode || 9 < document.documentMode);
}
function Cb() {
  _f && (_f.detachEvent("onpropertychange", v_), $f = _f = null);
}
function v_(n) {
  if (n.propertyName === "value" && Th($f)) {
    var r = [];
    d_(r, $f, n, VE(n)), WD(O4, r);
  }
}
function L4(n, r, l) {
  n === "focusin" ? (Cb(), _f = r, $f = l, _f.attachEvent("onpropertychange", v_)) : n === "focusout" && Cb();
}
function N4(n) {
  if (n === "selectionchange" || n === "keyup" || n === "keydown")
    return Th($f);
}
function z4(n, r) {
  if (n === "click")
    return Th(r);
}
function U4(n, r) {
  if (n === "input" || n === "change")
    return Th(r);
}
function A4(n, r) {
  return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
}
var va = typeof Object.is == "function" ? Object.is : A4;
function Vf(n, r) {
  if (va(n, r))
    return !0;
  if (typeof n != "object" || n === null || typeof r != "object" || r === null)
    return !1;
  var l = Object.keys(n), o = Object.keys(r);
  if (l.length !== o.length)
    return !1;
  for (o = 0; o < l.length; o++) {
    var c = l[o];
    if (!F0.call(r, c) || !va(n[c], r[c]))
      return !1;
  }
  return !0;
}
function Rb(n) {
  for (; n && n.firstChild; )
    n = n.firstChild;
  return n;
}
function Tb(n, r) {
  var l = Rb(n);
  n = 0;
  for (var o; l; ) {
    if (l.nodeType === 3) {
      if (o = n + l.textContent.length, n <= r && o >= r)
        return {
          node: l,
          offset: r - n
        };
      n = o;
    }
    e: {
      for (; l; ) {
        if (l.nextSibling) {
          l = l.nextSibling;
          break e;
        }
        l = l.parentNode;
      }
      l = void 0;
    }
    l = Rb(l);
  }
}
function h_(n, r) {
  return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? h_(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
}
function m_() {
  for (var n = window, r = Kv(); r instanceof n.HTMLIFrameElement; ) {
    try {
      var l = typeof r.contentWindow.location.href == "string";
    } catch (o) {
      l = !1;
    }
    if (l)
      n = r.contentWindow;
    else
      break;
    r = Kv(n.document);
  }
  return r;
}
function qE(n) {
  var r = n && n.nodeName && n.nodeName.toLowerCase();
  return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
}
function j4(n) {
  var r = m_(), l = n.focusedElem, o = n.selectionRange;
  if (r !== l && l && l.ownerDocument && h_(l.ownerDocument.documentElement, l)) {
    if (o !== null && qE(l)) {
      if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
        l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
      else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
        n = n.getSelection();
        var c = l.textContent.length, p = Math.min(o.start, c);
        o = o.end === void 0 ? p : Math.min(o.end, c), !n.extend && p > o && (c = o, o = p, p = c), c = Tb(l, p);
        var d = Tb(l, o);
        c && d && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== d.node || n.focusOffset !== d.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), p > o ? (n.addRange(r), n.extend(d.node, d.offset)) : (r.setEnd(d.node, d.offset), n.addRange(r)));
      }
    }
    for (r = [], n = l; n = n.parentNode; )
      n.nodeType === 1 && r.push({
        element: n,
        left: n.scrollLeft,
        top: n.scrollTop
      });
    for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
      n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
  }
}
var F4 = _i && "documentMode" in document && 11 >= document.documentMode, Wo = null, rE = null, kf = null, aE = !1;
function xb(n, r, l) {
  var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
  aE || Wo == null || Wo !== Kv(o) || (o = Wo, "selectionStart" in o && qE(o) ? o = {
    start: o.selectionStart,
    end: o.selectionEnd
  } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
    anchorNode: o.anchorNode,
    anchorOffset: o.anchorOffset,
    focusNode: o.focusNode,
    focusOffset: o.focusOffset
  }), kf && Vf(kf, o) || (kf = o, o = rh(rE, "onSelect"), 0 < o.length && (r = new GE("onSelect", "select", null, r, l), n.push({
    event: r,
    listeners: o
  }), r.target = Wo)));
}
function Dv(n, r) {
  var l = {};
  return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
}
var Go = {
  animationend: Dv("Animation", "AnimationEnd"),
  animationiteration: Dv("Animation", "AnimationIteration"),
  animationstart: Dv("Animation", "AnimationStart"),
  transitionend: Dv("Transition", "TransitionEnd")
}, p0 = {}, y_ = {};
_i && (y_ = document.createElement("div").style, "AnimationEvent" in window || (delete Go.animationend.animation, delete Go.animationiteration.animation, delete Go.animationstart.animation), "TransitionEvent" in window || delete Go.transitionend.transition);
function xh(n) {
  if (p0[n])
    return p0[n];
  if (!Go[n])
    return n;
  var r = Go[n], l;
  for (l in r)
    if (r.hasOwnProperty(l) && l in y_)
      return p0[n] = r[l];
  return n;
}
var g_ = xh("animationend"), S_ = xh("animationiteration"), E_ = xh("animationstart"), C_ = xh("transitionend"), R_ = /* @__PURE__ */ new Map(), wb = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ml(n, r) {
  R_.set(n, r), Uu(r, [n]);
}
for (var v0 = 0; v0 < wb.length; v0++) {
  var h0 = wb[v0], H4 = h0.toLowerCase(), P4 = h0[0].toUpperCase() + h0.slice(1);
  Ml(H4, "on" + P4);
}
Ml(g_, "onAnimationEnd");
Ml(S_, "onAnimationIteration");
Ml(E_, "onAnimationStart");
Ml("dblclick", "onDoubleClick");
Ml("focusin", "onFocus");
Ml("focusout", "onBlur");
Ml(C_, "onTransitionEnd");
os("onMouseEnter", ["mouseout", "mouseover"]);
os("onMouseLeave", ["mouseout", "mouseover"]);
os("onPointerEnter", ["pointerout", "pointerover"]);
os("onPointerLeave", ["pointerout", "pointerover"]);
Uu("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Uu("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Uu("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Uu("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Uu("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Uu("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var xf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $4 = new Set("cancel close invalid load scroll toggle".split(" ").concat(xf));
function bb(n, r, l) {
  var o = n.type || "unknown-event";
  n.currentTarget = l, HH(o, r, void 0, n), n.currentTarget = null;
}
function T_(n, r) {
  r = (r & 4) !== 0;
  for (var l = 0; l < n.length; l++) {
    var o = n[l], c = o.event;
    o = o.listeners;
    e: {
      var p = void 0;
      if (r)
        for (var d = o.length - 1; 0 <= d; d--) {
          var S = o[d], E = S.instance, x = S.currentTarget;
          if (S = S.listener, E !== p && c.isPropagationStopped())
            break e;
          bb(c, S, x), p = E;
        }
      else
        for (d = 0; d < o.length; d++) {
          if (S = o[d], E = S.instance, x = S.currentTarget, S = S.listener, E !== p && c.isPropagationStopped())
            break e;
          bb(c, S, x), p = E;
        }
    }
  }
  if (Zv)
    throw n = J0, Zv = !1, J0 = null, n;
}
function xt(n, r) {
  var l = r[sE];
  l === void 0 && (l = r[sE] = /* @__PURE__ */ new Set());
  var o = n + "__bubble";
  l.has(o) || (x_(r, n, 2, !1), l.add(o));
}
function m0(n, r, l) {
  var o = 0;
  r && (o |= 4), x_(l, n, o, r);
}
var _v = "_reactListening" + Math.random().toString(36).slice(2);
function Bf(n) {
  if (!n[_v]) {
    n[_v] = !0, MD.forEach(function(l) {
      l !== "selectionchange" && ($4.has(l) || m0(l, !1, n), m0(l, !0, n));
    });
    var r = n.nodeType === 9 ? n : n.ownerDocument;
    r === null || r[_v] || (r[_v] = !0, m0("selectionchange", !1, r));
  }
}
function x_(n, r, l, o) {
  switch (u_(r)) {
    case 1:
      var c = t4;
      break;
    case 4:
      c = n4;
      break;
    default:
      c = QE;
  }
  l = c.bind(null, r, l, n), c = void 0, !Z0 || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, {
    capture: !0,
    passive: c
  }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, {
    passive: c
  }) : n.addEventListener(r, l, !1);
}
function y0(n, r, l, o, c) {
  var p = o;
  if (!(r & 1) && !(r & 2) && o !== null)
    e:
      for (; ; ) {
        if (o === null)
          return;
        var d = o.tag;
        if (d === 3 || d === 4) {
          var S = o.stateNode.containerInfo;
          if (S === c || S.nodeType === 8 && S.parentNode === c)
            break;
          if (d === 4)
            for (d = o.return; d !== null; ) {
              var E = d.tag;
              if ((E === 3 || E === 4) && (E = d.stateNode.containerInfo, E === c || E.nodeType === 8 && E.parentNode === c))
                return;
              d = d.return;
            }
          for (; S !== null; ) {
            if (d = Tu(S), d === null)
              return;
            if (E = d.tag, E === 5 || E === 6) {
              o = p = d;
              continue e;
            }
            S = S.parentNode;
          }
        }
        o = o.return;
      }
  WD(function() {
    var x = p, j = VE(l), L = [];
    e: {
      var M = R_.get(n);
      if (M !== void 0) {
        var F = GE, Y = n;
        switch (n) {
          case "keypress":
            if (Hv(l) === 0)
              break e;
          case "keydown":
          case "keyup":
            F = y4;
            break;
          case "focusin":
            Y = "focus", F = c0;
            break;
          case "focusout":
            Y = "blur", F = c0;
            break;
          case "beforeblur":
          case "afterblur":
            F = c0;
            break;
          case "click":
            if (l.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            F = vb;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            F = i4;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            F = E4;
            break;
          case g_:
          case S_:
          case E_:
            F = o4;
            break;
          case C_:
            F = R4;
            break;
          case "scroll":
            F = r4;
            break;
          case "wheel":
            F = x4;
            break;
          case "copy":
          case "cut":
          case "paste":
            F = c4;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            F = mb;
        }
        var re = (r & 4) !== 0, Ne = !re && n === "scroll", _ = re ? M !== null ? M + "Capture" : null : M;
        re = [];
        for (var R = x, b; R !== null; ) {
          b = R;
          var B = b.stateNode;
          if (b.tag === 5 && B !== null && (b = B, _ !== null && (B = jf(R, _), B != null && re.push(If(R, B, b)))), Ne)
            break;
          R = R.return;
        }
        0 < re.length && (M = new F(M, Y, null, l, j), L.push({
          event: M,
          listeners: re
        }));
      }
    }
    if (!(r & 7)) {
      e: {
        if (M = n === "mouseover" || n === "pointerover", F = n === "mouseout" || n === "pointerout", M && l !== K0 && (Y = l.relatedTarget || l.fromElement) && (Tu(Y) || Y[ki]))
          break e;
        if ((F || M) && (M = j.window === j ? j : (M = j.ownerDocument) ? M.defaultView || M.parentWindow : window, F ? (Y = l.relatedTarget || l.toElement, F = x, Y = Y ? Tu(Y) : null, Y !== null && (Ne = Au(Y), Y !== Ne || Y.tag !== 5 && Y.tag !== 6) && (Y = null)) : (F = null, Y = x), F !== Y)) {
          if (re = vb, B = "onMouseLeave", _ = "onMouseEnter", R = "mouse", (n === "pointerout" || n === "pointerover") && (re = mb, B = "onPointerLeave", _ = "onPointerEnter", R = "pointer"), Ne = F == null ? M : Xo(F), b = Y == null ? M : Xo(Y), M = new re(B, R + "leave", F, l, j), M.target = Ne, M.relatedTarget = b, B = null, Tu(j) === x && (re = new re(_, R + "enter", Y, l, j), re.target = b, re.relatedTarget = Ne, B = re), Ne = B, F && Y)
            t: {
              for (re = F, _ = Y, R = 0, b = re; b; b = Vo(b))
                R++;
              for (b = 0, B = _; B; B = Vo(B))
                b++;
              for (; 0 < R - b; )
                re = Vo(re), R--;
              for (; 0 < b - R; )
                _ = Vo(_), b--;
              for (; R--; ) {
                if (re === _ || _ !== null && re === _.alternate)
                  break t;
                re = Vo(re), _ = Vo(_);
              }
              re = null;
            }
          else
            re = null;
          F !== null && Db(L, M, F, re, !1), Y !== null && Ne !== null && Db(L, Ne, Y, re, !0);
        }
      }
      e: {
        if (M = x ? Xo(x) : window, F = M.nodeName && M.nodeName.toLowerCase(), F === "select" || F === "input" && M.type === "file")
          var I = M4;
        else if (Sb(M))
          if (p_)
            I = U4;
          else {
            I = N4;
            var te = L4;
          }
        else
          (F = M.nodeName) && F.toLowerCase() === "input" && (M.type === "checkbox" || M.type === "radio") && (I = z4);
        if (I && (I = I(n, x))) {
          d_(L, I, l, j);
          break e;
        }
        te && te(n, M, x), n === "focusout" && (te = M._wrapperState) && te.controlled && M.type === "number" && Y0(M, "number", M.value);
      }
      switch (te = x ? Xo(x) : window, n) {
        case "focusin":
          (Sb(te) || te.contentEditable === "true") && (Wo = te, rE = x, kf = null);
          break;
        case "focusout":
          kf = rE = Wo = null;
          break;
        case "mousedown":
          aE = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          aE = !1, xb(L, l, j);
          break;
        case "selectionchange":
          if (F4)
            break;
        case "keydown":
        case "keyup":
          xb(L, l, j);
      }
      var K;
      if (KE)
        e: {
          switch (n) {
            case "compositionstart":
              var pe = "onCompositionStart";
              break e;
            case "compositionend":
              pe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              pe = "onCompositionUpdate";
              break e;
          }
          pe = void 0;
        }
      else
        Qo ? c_(n, l) && (pe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (pe = "onCompositionStart");
      pe && (s_ && l.locale !== "ko" && (Qo || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && Qo && (K = o_()) : (gl = j, WE = "value" in gl ? gl.value : gl.textContent, Qo = !0)), te = rh(x, pe), 0 < te.length && (pe = new hb(pe, n, null, l, j), L.push({
        event: pe,
        listeners: te
      }), K ? pe.data = K : (K = f_(l), K !== null && (pe.data = K)))), (K = b4 ? D4(n, l) : _4(n, l)) && (x = rh(x, "onBeforeInput"), 0 < x.length && (j = new hb("onBeforeInput", "beforeinput", null, l, j), L.push({
        event: j,
        listeners: x
      }), j.data = K));
    }
    T_(L, r);
  });
}
function If(n, r, l) {
  return {
    instance: n,
    listener: r,
    currentTarget: l
  };
}
function rh(n, r) {
  for (var l = r + "Capture", o = []; n !== null; ) {
    var c = n, p = c.stateNode;
    c.tag === 5 && p !== null && (c = p, p = jf(n, l), p != null && o.unshift(If(n, p, c)), p = jf(n, r), p != null && o.push(If(n, p, c))), n = n.return;
  }
  return o;
}
function Vo(n) {
  if (n === null)
    return null;
  do
    n = n.return;
  while (n && n.tag !== 5);
  return n || null;
}
function Db(n, r, l, o, c) {
  for (var p = r._reactName, d = []; l !== null && l !== o; ) {
    var S = l, E = S.alternate, x = S.stateNode;
    if (E !== null && E === o)
      break;
    S.tag === 5 && x !== null && (S = x, c ? (E = jf(l, p), E != null && d.unshift(If(l, E, S))) : c || (E = jf(l, p), E != null && d.push(If(l, E, S)))), l = l.return;
  }
  d.length !== 0 && n.push({
    event: r,
    listeners: d
  });
}
var V4 = /\r\n?/g, B4 = /\u0000|\uFFFD/g;
function _b(n) {
  return (typeof n == "string" ? n : "" + n).replace(V4, `
`).replace(B4, "");
}
function kv(n, r, l) {
  if (r = _b(r), _b(n) !== r && l)
    throw Error(X(425));
}
function ah() {
}
var iE = null, lE = null;
function uE(n, r) {
  return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
}
var oE = typeof setTimeout == "function" ? setTimeout : void 0, I4 = typeof clearTimeout == "function" ? clearTimeout : void 0, kb = typeof Promise == "function" ? Promise : void 0, Y4 = typeof queueMicrotask == "function" ? queueMicrotask : typeof kb != "undefined" ? function(n) {
  return kb.resolve(null).then(n).catch(Q4);
} : oE;
function Q4(n) {
  setTimeout(function() {
    throw n;
  });
}
function g0(n, r) {
  var l = r, o = 0;
  do {
    var c = l.nextSibling;
    if (n.removeChild(l), c && c.nodeType === 8)
      if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Pf(r);
          return;
        }
        o--;
      } else
        l !== "$" && l !== "$?" && l !== "$!" || o++;
    l = c;
  } while (l);
  Pf(r);
}
function Tl(n) {
  for (; n != null; n = n.nextSibling) {
    var r = n.nodeType;
    if (r === 1 || r === 3)
      break;
    if (r === 8) {
      if (r = n.data, r === "$" || r === "$!" || r === "$?")
        break;
      if (r === "/$")
        return null;
    }
  }
  return n;
}
function Ob(n) {
  n = n.previousSibling;
  for (var r = 0; n; ) {
    if (n.nodeType === 8) {
      var l = n.data;
      if (l === "$" || l === "$!" || l === "$?") {
        if (r === 0)
          return n;
        r--;
      } else
        l === "/$" && r++;
    }
    n = n.previousSibling;
  }
  return null;
}
var ms = Math.random().toString(36).slice(2), Fa = "__reactFiber$" + ms, Yf = "__reactProps$" + ms, ki = "__reactContainer$" + ms, sE = "__reactEvents$" + ms, W4 = "__reactListeners$" + ms, G4 = "__reactHandles$" + ms;
function Tu(n) {
  var r = n[Fa];
  if (r)
    return r;
  for (var l = n.parentNode; l; ) {
    if (r = l[ki] || l[Fa]) {
      if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
        for (n = Ob(n); n !== null; ) {
          if (l = n[Fa])
            return l;
          n = Ob(n);
        }
      return r;
    }
    n = l, l = n.parentNode;
  }
  return null;
}
function nd(n) {
  return n = n[Fa] || n[ki], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
}
function Xo(n) {
  if (n.tag === 5 || n.tag === 6)
    return n.stateNode;
  throw Error(X(33));
}
function wh(n) {
  return n[Yf] || null;
}
var cE = [], Ko = -1;
function Ll(n) {
  return {
    current: n
  };
}
function wt(n) {
  0 > Ko || (n.current = cE[Ko], cE[Ko] = null, Ko--);
}
function yt(n, r) {
  Ko++, cE[Ko] = n.current, n.current = r;
}
var kl = {}, Un = Ll(kl), lr = Ll(!1), _u = kl;
function ss(n, r) {
  var l = n.type.contextTypes;
  if (!l)
    return kl;
  var o = n.stateNode;
  if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
    return o.__reactInternalMemoizedMaskedChildContext;
  var c = {}, p;
  for (p in l)
    c[p] = r[p];
  return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
}
function ur(n) {
  return n = n.childContextTypes, n != null;
}
function ih() {
  wt(lr), wt(Un);
}
function Mb(n, r, l) {
  if (Un.current !== kl)
    throw Error(X(168));
  yt(Un, r), yt(lr, l);
}
function w_(n, r, l) {
  var o = n.stateNode;
  if (r = r.childContextTypes, typeof o.getChildContext != "function")
    return l;
  o = o.getChildContext();
  for (var c in o)
    if (!(c in r))
      throw Error(X(108, LH(n) || "Unknown", c));
  return Mt({}, l, o);
}
function lh(n) {
  return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || kl, _u = Un.current, yt(Un, n), yt(lr, lr.current), !0;
}
function Lb(n, r, l) {
  var o = n.stateNode;
  if (!o)
    throw Error(X(169));
  l ? (n = w_(n, r, _u), o.__reactInternalMemoizedMergedChildContext = n, wt(lr), wt(Un), yt(Un, n)) : wt(lr), yt(lr, l);
}
var xi = null, bh = !1, S0 = !1;
function b_(n) {
  xi === null ? xi = [n] : xi.push(n);
}
function X4(n) {
  bh = !0, b_(n);
}
function Nl() {
  if (!S0 && xi !== null) {
    S0 = !0;
    var n = 0, r = ct;
    try {
      var l = xi;
      for (ct = 1; n < l.length; n++) {
        var o = l[n];
        do
          o = o(!0);
        while (o !== null);
      }
      xi = null, bh = !1;
    } catch (c) {
      throw xi !== null && (xi = xi.slice(n + 1)), qD(BE, Nl), c;
    } finally {
      ct = r, S0 = !1;
    }
  }
  return null;
}
var qo = [], Zo = 0, uh = null, oh = 0, Ur = [], Ar = 0, ku = null, wi = 1, bi = "";
function Cu(n, r) {
  qo[Zo++] = oh, qo[Zo++] = uh, uh = n, oh = r;
}
function D_(n, r, l) {
  Ur[Ar++] = wi, Ur[Ar++] = bi, Ur[Ar++] = ku, ku = n;
  var o = wi;
  n = bi;
  var c = 32 - da(o) - 1;
  o &= ~(1 << c), l += 1;
  var p = 32 - da(r) + c;
  if (30 < p) {
    var d = c - c % 5;
    p = (o & (1 << d) - 1).toString(32), o >>= d, c -= d, wi = 1 << 32 - da(r) + c | l << c | o, bi = p + n;
  } else
    wi = 1 << p | l << c | o, bi = n;
}
function ZE(n) {
  n.return !== null && (Cu(n, 1), D_(n, 1, 0));
}
function JE(n) {
  for (; n === uh; )
    uh = qo[--Zo], qo[Zo] = null, oh = qo[--Zo], qo[Zo] = null;
  for (; n === ku; )
    ku = Ur[--Ar], Ur[Ar] = null, bi = Ur[--Ar], Ur[Ar] = null, wi = Ur[--Ar], Ur[Ar] = null;
}
var Cr = null, Er = null, bt = !1, fa = null;
function __(n, r) {
  var l = jr(5, null, null, 0);
  l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
}
function Nb(n, r) {
  switch (n.tag) {
    case 5:
      var l = n.type;
      return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Cr = n, Er = Tl(r.firstChild), !0) : !1;
    case 6:
      return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Cr = n, Er = null, !0) : !1;
    case 13:
      return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ku !== null ? {
        id: wi,
        overflow: bi
      } : null, n.memoizedState = {
        dehydrated: r,
        treeContext: l,
        retryLane: 1073741824
      }, l = jr(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Cr = n, Er = null, !0) : !1;
    default:
      return !1;
  }
}
function fE(n) {
  return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
}
function dE(n) {
  if (bt) {
    var r = Er;
    if (r) {
      var l = r;
      if (!Nb(n, r)) {
        if (fE(n))
          throw Error(X(418));
        r = Tl(l.nextSibling);
        var o = Cr;
        r && Nb(n, r) ? __(o, l) : (n.flags = n.flags & -4097 | 2, bt = !1, Cr = n);
      }
    } else {
      if (fE(n))
        throw Error(X(418));
      n.flags = n.flags & -4097 | 2, bt = !1, Cr = n;
    }
  }
}
function zb(n) {
  for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
    n = n.return;
  Cr = n;
}
function Ov(n) {
  if (n !== Cr)
    return !1;
  if (!bt)
    return zb(n), bt = !0, !1;
  var r;
  if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !uE(n.type, n.memoizedProps)), r && (r = Er)) {
    if (fE(n))
      throw k_(), Error(X(418));
    for (; r; )
      __(n, r), r = Tl(r.nextSibling);
  }
  if (zb(n), n.tag === 13) {
    if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
      throw Error(X(317));
    e: {
      for (n = n.nextSibling, r = 0; n; ) {
        if (n.nodeType === 8) {
          var l = n.data;
          if (l === "/$") {
            if (r === 0) {
              Er = Tl(n.nextSibling);
              break e;
            }
            r--;
          } else
            l !== "$" && l !== "$!" && l !== "$?" || r++;
        }
        n = n.nextSibling;
      }
      Er = null;
    }
  } else
    Er = Cr ? Tl(n.stateNode.nextSibling) : null;
  return !0;
}
function k_() {
  for (var n = Er; n; )
    n = Tl(n.nextSibling);
}
function cs() {
  Er = Cr = null, bt = !1;
}
function eC(n) {
  fa === null ? fa = [n] : fa.push(n);
}
var K4 = Li.ReactCurrentBatchConfig;
function oa(n, r) {
  if (n && n.defaultProps) {
    r = Mt({}, r), n = n.defaultProps;
    for (var l in n)
      r[l] === void 0 && (r[l] = n[l]);
    return r;
  }
  return r;
}
var sh = Ll(null), ch = null, Jo = null, tC = null;
function nC() {
  tC = Jo = ch = null;
}
function rC(n) {
  var r = sh.current;
  wt(sh), n._currentValue = r;
}
function pE(n, r, l) {
  for (; n !== null; ) {
    var o = n.alternate;
    if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
      break;
    n = n.return;
  }
}
function ls(n, r) {
  ch = n, tC = Jo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (ir = !0), n.firstContext = null);
}
function Hr(n) {
  var r = n._currentValue;
  if (tC !== n)
    if (n = {
      context: n,
      memoizedValue: r,
      next: null
    }, Jo === null) {
      if (ch === null)
        throw Error(X(308));
      Jo = n, ch.dependencies = {
        lanes: 0,
        firstContext: n
      };
    } else
      Jo = Jo.next = n;
  return r;
}
var xu = null;
function aC(n) {
  xu === null ? xu = [n] : xu.push(n);
}
function O_(n, r, l, o) {
  var c = r.interleaved;
  return c === null ? (l.next = l, aC(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Oi(n, o);
}
function Oi(n, r) {
  n.lanes |= r;
  var l = n.alternate;
  for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
    n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
  return l.tag === 3 ? l.stateNode : null;
}
var hl = !1;
function iC(n) {
  n.updateQueue = {
    baseState: n.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0
    },
    effects: null
  };
}
function M_(n, r) {
  n = n.updateQueue, r.updateQueue === n && (r.updateQueue = {
    baseState: n.baseState,
    firstBaseUpdate: n.firstBaseUpdate,
    lastBaseUpdate: n.lastBaseUpdate,
    shared: n.shared,
    effects: n.effects
  });
}
function Di(n, r) {
  return {
    eventTime: n,
    lane: r,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  };
}
function xl(n, r, l) {
  var o = n.updateQueue;
  if (o === null)
    return null;
  if (o = o.shared, Je & 2) {
    var c = o.pending;
    return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Oi(n, l);
  }
  return c = o.interleaved, c === null ? (r.next = r, aC(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Oi(n, l);
}
function Pv(n, r, l) {
  if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
    var o = r.lanes;
    o &= n.pendingLanes, l |= o, r.lanes = l, IE(n, l);
  }
}
function Ub(n, r) {
  var l = n.updateQueue, o = n.alternate;
  if (o !== null && (o = o.updateQueue, l === o)) {
    var c = null, p = null;
    if (l = l.firstBaseUpdate, l !== null) {
      do {
        var d = {
          eventTime: l.eventTime,
          lane: l.lane,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        };
        p === null ? c = p = d : p = p.next = d, l = l.next;
      } while (l !== null);
      p === null ? c = p = r : p = p.next = r;
    } else
      c = p = r;
    l = {
      baseState: o.baseState,
      firstBaseUpdate: c,
      lastBaseUpdate: p,
      shared: o.shared,
      effects: o.effects
    }, n.updateQueue = l;
    return;
  }
  n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
}
function fh(n, r, l, o) {
  var c = n.updateQueue;
  hl = !1;
  var p = c.firstBaseUpdate, d = c.lastBaseUpdate, S = c.shared.pending;
  if (S !== null) {
    c.shared.pending = null;
    var E = S, x = E.next;
    E.next = null, d === null ? p = x : d.next = x, d = E;
    var j = n.alternate;
    j !== null && (j = j.updateQueue, S = j.lastBaseUpdate, S !== d && (S === null ? j.firstBaseUpdate = x : S.next = x, j.lastBaseUpdate = E));
  }
  if (p !== null) {
    var L = c.baseState;
    d = 0, j = x = E = null, S = p;
    do {
      var M = S.lane, F = S.eventTime;
      if ((o & M) === M) {
        j !== null && (j = j.next = {
          eventTime: F,
          lane: 0,
          tag: S.tag,
          payload: S.payload,
          callback: S.callback,
          next: null
        });
        e: {
          var Y = n, re = S;
          switch (M = r, F = l, re.tag) {
            case 1:
              if (Y = re.payload, typeof Y == "function") {
                L = Y.call(F, L, M);
                break e;
              }
              L = Y;
              break e;
            case 3:
              Y.flags = Y.flags & -65537 | 128;
            case 0:
              if (Y = re.payload, M = typeof Y == "function" ? Y.call(F, L, M) : Y, M == null)
                break e;
              L = Mt({}, L, M);
              break e;
            case 2:
              hl = !0;
          }
        }
        S.callback !== null && S.lane !== 0 && (n.flags |= 64, M = c.effects, M === null ? c.effects = [S] : M.push(S));
      } else
        F = {
          eventTime: F,
          lane: M,
          tag: S.tag,
          payload: S.payload,
          callback: S.callback,
          next: null
        }, j === null ? (x = j = F, E = L) : j = j.next = F, d |= M;
      if (S = S.next, S === null) {
        if (S = c.shared.pending, S === null)
          break;
        M = S, S = M.next, M.next = null, c.lastBaseUpdate = M, c.shared.pending = null;
      }
    } while (1);
    if (j === null && (E = L), c.baseState = E, c.firstBaseUpdate = x, c.lastBaseUpdate = j, r = c.shared.interleaved, r !== null) {
      c = r;
      do
        d |= c.lane, c = c.next;
      while (c !== r);
    } else
      p === null && (c.shared.lanes = 0);
    Mu |= d, n.lanes = d, n.memoizedState = L;
  }
}
function Ab(n, r, l) {
  if (n = r.effects, r.effects = null, n !== null)
    for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function")
          throw Error(X(191, c));
        c.call(o);
      }
    }
}
var L_ = new OD.Component().refs;
function vE(n, r, l, o) {
  r = n.memoizedState, l = l(o, r), l = l == null ? r : Mt({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
}
var Dh = {
  isMounted: function(n) {
    return (n = n._reactInternals) ? Au(n) === n : !1;
  },
  enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Yn(), c = bl(n), p = Di(o, c);
    p.payload = r, l != null && (p.callback = l), r = xl(n, p, c), r !== null && (pa(r, n, c, o), Pv(r, n, c));
  },
  enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Yn(), c = bl(n), p = Di(o, c);
    p.tag = 1, p.payload = r, l != null && (p.callback = l), r = xl(n, p, c), r !== null && (pa(r, n, c, o), Pv(r, n, c));
  },
  enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Yn(), o = bl(n), c = Di(l, o);
    c.tag = 2, r != null && (c.callback = r), r = xl(n, c, o), r !== null && (pa(r, n, o, l), Pv(r, n, o));
  }
};
function jb(n, r, l, o, c, p, d) {
  return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, p, d) : r.prototype && r.prototype.isPureReactComponent ? !Vf(l, o) || !Vf(c, p) : !0;
}
function N_(n, r, l) {
  var o = !1, c = kl, p = r.contextType;
  return typeof p == "object" && p !== null ? p = Hr(p) : (c = ur(r) ? _u : Un.current, o = r.contextTypes, p = (o = o != null) ? ss(n, c) : kl), r = new r(l, p), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Dh, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = p), r;
}
function Fb(n, r, l, o) {
  n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Dh.enqueueReplaceState(r, r.state, null);
}
function hE(n, r, l, o) {
  var c = n.stateNode;
  c.props = l, c.state = n.memoizedState, c.refs = L_, iC(n);
  var p = r.contextType;
  typeof p == "object" && p !== null ? c.context = Hr(p) : (p = ur(r) ? _u : Un.current, c.context = ss(n, p)), c.state = n.memoizedState, p = r.getDerivedStateFromProps, typeof p == "function" && (vE(n, r, p, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Dh.enqueueReplaceState(c, c.state, null), fh(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
}
function mf(n, r, l) {
  if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
    if (l._owner) {
      if (l = l._owner, l) {
        if (l.tag !== 1)
          throw Error(X(309));
        var o = l.stateNode;
      }
      if (!o)
        throw Error(X(147, n));
      var c = o, p = "" + n;
      return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === p ? r.ref : (r = function(d) {
        var S = c.refs;
        S === L_ && (S = c.refs = {}), d === null ? delete S[p] : S[p] = d;
      }, r._stringRef = p, r);
    }
    if (typeof n != "string")
      throw Error(X(284));
    if (!l._owner)
      throw Error(X(290, n));
  }
  return n;
}
function Mv(n, r) {
  throw n = Object.prototype.toString.call(r), Error(X(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
}
function Hb(n) {
  var r = n._init;
  return r(n._payload);
}
function z_(n) {
  function r(_, R) {
    if (n) {
      var b = _.deletions;
      b === null ? (_.deletions = [R], _.flags |= 16) : b.push(R);
    }
  }
  function l(_, R) {
    if (!n)
      return null;
    for (; R !== null; )
      r(_, R), R = R.sibling;
    return null;
  }
  function o(_, R) {
    for (_ = /* @__PURE__ */ new Map(); R !== null; )
      R.key !== null ? _.set(R.key, R) : _.set(R.index, R), R = R.sibling;
    return _;
  }
  function c(_, R) {
    return _ = Dl(_, R), _.index = 0, _.sibling = null, _;
  }
  function p(_, R, b) {
    return _.index = b, n ? (b = _.alternate, b !== null ? (b = b.index, b < R ? (_.flags |= 2, R) : b) : (_.flags |= 2, R)) : (_.flags |= 1048576, R);
  }
  function d(_) {
    return n && _.alternate === null && (_.flags |= 2), _;
  }
  function S(_, R, b, B) {
    return R === null || R.tag !== 6 ? (R = b0(b, _.mode, B), R.return = _, R) : (R = c(R, b), R.return = _, R);
  }
  function E(_, R, b, B) {
    var I = b.type;
    return I === Yo ? j(_, R, b.props.children, B, b.key) : R !== null && (R.elementType === I || typeof I == "object" && I !== null && I.$$typeof === vl && Hb(I) === R.type) ? (B = c(R, b.props), B.ref = mf(_, R, b), B.return = _, B) : (B = Qv(b.type, b.key, b.props, null, _.mode, B), B.ref = mf(_, R, b), B.return = _, B);
  }
  function x(_, R, b, B) {
    return R === null || R.tag !== 4 || R.stateNode.containerInfo !== b.containerInfo || R.stateNode.implementation !== b.implementation ? (R = D0(b, _.mode, B), R.return = _, R) : (R = c(R, b.children || []), R.return = _, R);
  }
  function j(_, R, b, B, I) {
    return R === null || R.tag !== 7 ? (R = Du(b, _.mode, B, I), R.return = _, R) : (R = c(R, b), R.return = _, R);
  }
  function L(_, R, b) {
    if (typeof R == "string" && R !== "" || typeof R == "number")
      return R = b0("" + R, _.mode, b), R.return = _, R;
    if (typeof R == "object" && R !== null) {
      switch (R.$$typeof) {
        case Ev:
          return b = Qv(R.type, R.key, R.props, null, _.mode, b), b.ref = mf(_, null, R), b.return = _, b;
        case Io:
          return R = D0(R, _.mode, b), R.return = _, R;
        case vl:
          var B = R._init;
          return L(_, B(R._payload), b);
      }
      if (Rf(R) || ff(R))
        return R = Du(R, _.mode, b, null), R.return = _, R;
      Mv(_, R);
    }
    return null;
  }
  function M(_, R, b, B) {
    var I = R !== null ? R.key : null;
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return I !== null ? null : S(_, R, "" + b, B);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ev:
          return b.key === I ? E(_, R, b, B) : null;
        case Io:
          return b.key === I ? x(_, R, b, B) : null;
        case vl:
          return I = b._init, M(_, R, I(b._payload), B);
      }
      if (Rf(b) || ff(b))
        return I !== null ? null : j(_, R, b, B, null);
      Mv(_, b);
    }
    return null;
  }
  function F(_, R, b, B, I) {
    if (typeof B == "string" && B !== "" || typeof B == "number")
      return _ = _.get(b) || null, S(R, _, "" + B, I);
    if (typeof B == "object" && B !== null) {
      switch (B.$$typeof) {
        case Ev:
          return _ = _.get(B.key === null ? b : B.key) || null, E(R, _, B, I);
        case Io:
          return _ = _.get(B.key === null ? b : B.key) || null, x(R, _, B, I);
        case vl:
          var te = B._init;
          return F(_, R, b, te(B._payload), I);
      }
      if (Rf(B) || ff(B))
        return _ = _.get(b) || null, j(R, _, B, I, null);
      Mv(R, B);
    }
    return null;
  }
  function Y(_, R, b, B) {
    for (var I = null, te = null, K = R, pe = R = 0, Qe = null; K !== null && pe < b.length; pe++) {
      K.index > pe ? (Qe = K, K = null) : Qe = K.sibling;
      var xe = M(_, K, b[pe], B);
      if (xe === null) {
        K === null && (K = Qe);
        break;
      }
      n && K && xe.alternate === null && r(_, K), R = p(xe, R, pe), te === null ? I = xe : te.sibling = xe, te = xe, K = Qe;
    }
    if (pe === b.length)
      return l(_, K), bt && Cu(_, pe), I;
    if (K === null) {
      for (; pe < b.length; pe++)
        K = L(_, b[pe], B), K !== null && (R = p(K, R, pe), te === null ? I = K : te.sibling = K, te = K);
      return bt && Cu(_, pe), I;
    }
    for (K = o(_, K); pe < b.length; pe++)
      Qe = F(K, _, pe, b[pe], B), Qe !== null && (n && Qe.alternate !== null && K.delete(Qe.key === null ? pe : Qe.key), R = p(Qe, R, pe), te === null ? I = Qe : te.sibling = Qe, te = Qe);
    return n && K.forEach(function(nt) {
      return r(_, nt);
    }), bt && Cu(_, pe), I;
  }
  function re(_, R, b, B) {
    var I = ff(b);
    if (typeof I != "function")
      throw Error(X(150));
    if (b = I.call(b), b == null)
      throw Error(X(151));
    for (var te = I = null, K = R, pe = R = 0, Qe = null, xe = b.next(); K !== null && !xe.done; pe++, xe = b.next()) {
      K.index > pe ? (Qe = K, K = null) : Qe = K.sibling;
      var nt = M(_, K, xe.value, B);
      if (nt === null) {
        K === null && (K = Qe);
        break;
      }
      n && K && nt.alternate === null && r(_, K), R = p(nt, R, pe), te === null ? I = nt : te.sibling = nt, te = nt, K = Qe;
    }
    if (xe.done)
      return l(_, K), bt && Cu(_, pe), I;
    if (K === null) {
      for (; !xe.done; pe++, xe = b.next())
        xe = L(_, xe.value, B), xe !== null && (R = p(xe, R, pe), te === null ? I = xe : te.sibling = xe, te = xe);
      return bt && Cu(_, pe), I;
    }
    for (K = o(_, K); !xe.done; pe++, xe = b.next())
      xe = F(K, _, pe, xe.value, B), xe !== null && (n && xe.alternate !== null && K.delete(xe.key === null ? pe : xe.key), R = p(xe, R, pe), te === null ? I = xe : te.sibling = xe, te = xe);
    return n && K.forEach(function(Z) {
      return r(_, Z);
    }), bt && Cu(_, pe), I;
  }
  function Ne(_, R, b, B) {
    if (typeof b == "object" && b !== null && b.type === Yo && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ev:
          e: {
            for (var I = b.key, te = R; te !== null; ) {
              if (te.key === I) {
                if (I = b.type, I === Yo) {
                  if (te.tag === 7) {
                    l(_, te.sibling), R = c(te, b.props.children), R.return = _, _ = R;
                    break e;
                  }
                } else if (te.elementType === I || typeof I == "object" && I !== null && I.$$typeof === vl && Hb(I) === te.type) {
                  l(_, te.sibling), R = c(te, b.props), R.ref = mf(_, te, b), R.return = _, _ = R;
                  break e;
                }
                l(_, te);
                break;
              } else
                r(_, te);
              te = te.sibling;
            }
            b.type === Yo ? (R = Du(b.props.children, _.mode, B, b.key), R.return = _, _ = R) : (B = Qv(b.type, b.key, b.props, null, _.mode, B), B.ref = mf(_, R, b), B.return = _, _ = B);
          }
          return d(_);
        case Io:
          e: {
            for (te = b.key; R !== null; ) {
              if (R.key === te)
                if (R.tag === 4 && R.stateNode.containerInfo === b.containerInfo && R.stateNode.implementation === b.implementation) {
                  l(_, R.sibling), R = c(R, b.children || []), R.return = _, _ = R;
                  break e;
                } else {
                  l(_, R);
                  break;
                }
              else
                r(_, R);
              R = R.sibling;
            }
            R = D0(b, _.mode, B), R.return = _, _ = R;
          }
          return d(_);
        case vl:
          return te = b._init, Ne(_, R, te(b._payload), B);
      }
      if (Rf(b))
        return Y(_, R, b, B);
      if (ff(b))
        return re(_, R, b, B);
      Mv(_, b);
    }
    return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, R !== null && R.tag === 6 ? (l(_, R.sibling), R = c(R, b), R.return = _, _ = R) : (l(_, R), R = b0(b, _.mode, B), R.return = _, _ = R), d(_)) : l(_, R);
  }
  return Ne;
}
var fs = z_(!0), U_ = z_(!1), rd = {}, Pa = Ll(rd), Qf = Ll(rd), Wf = Ll(rd);
function wu(n) {
  if (n === rd)
    throw Error(X(174));
  return n;
}
function lC(n, r) {
  switch (yt(Wf, r), yt(Qf, n), yt(Pa, rd), n = r.nodeType, n) {
    case 9:
    case 11:
      r = (r = r.documentElement) ? r.namespaceURI : W0(null, "");
      break;
    default:
      n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = W0(r, n);
  }
  wt(Pa), yt(Pa, r);
}
function ds() {
  wt(Pa), wt(Qf), wt(Wf);
}
function A_(n) {
  wu(Wf.current);
  var r = wu(Pa.current), l = W0(r, n.type);
  r !== l && (yt(Qf, n), yt(Pa, l));
}
function uC(n) {
  Qf.current === n && (wt(Pa), wt(Qf));
}
var kt = Ll(0);
function dh(n) {
  for (var r = n; r !== null; ) {
    if (r.tag === 13) {
      var l = r.memoizedState;
      if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
        return r;
    } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
      if (r.flags & 128)
        return r;
    } else if (r.child !== null) {
      r.child.return = r, r = r.child;
      continue;
    }
    if (r === n)
      break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === n)
        return null;
      r = r.return;
    }
    r.sibling.return = r.return, r = r.sibling;
  }
  return null;
}
var E0 = [];
function oC() {
  for (var n = 0; n < E0.length; n++)
    E0[n]._workInProgressVersionPrimary = null;
  E0.length = 0;
}
var $v = Li.ReactCurrentDispatcher, C0 = Li.ReactCurrentBatchConfig, Ou = 0, Ot = null, Jt = null, on = null, ph = !1, Of = !1, Gf = 0, q4 = 0;
function Mn() {
  throw Error(X(321));
}
function sC(n, r) {
  if (r === null)
    return !1;
  for (var l = 0; l < r.length && l < n.length; l++)
    if (!va(n[l], r[l]))
      return !1;
  return !0;
}
function cC(n, r, l, o, c, p) {
  if (Ou = p, Ot = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, $v.current = n === null || n.memoizedState === null ? tP : nP, n = l(o, c), Of) {
    p = 0;
    do {
      if (Of = !1, Gf = 0, 25 <= p)
        throw Error(X(301));
      p += 1, on = Jt = null, r.updateQueue = null, $v.current = rP, n = l(o, c);
    } while (Of);
  }
  if ($v.current = vh, r = Jt !== null && Jt.next !== null, Ou = 0, on = Jt = Ot = null, ph = !1, r)
    throw Error(X(300));
  return n;
}
function fC() {
  var n = Gf !== 0;
  return Gf = 0, n;
}
function ja() {
  var n = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return on === null ? Ot.memoizedState = on = n : on = on.next = n, on;
}
function Pr() {
  if (Jt === null) {
    var n = Ot.alternate;
    n = n !== null ? n.memoizedState : null;
  } else
    n = Jt.next;
  var r = on === null ? Ot.memoizedState : on.next;
  if (r !== null)
    on = r, Jt = n;
  else {
    if (n === null)
      throw Error(X(310));
    Jt = n, n = {
      memoizedState: Jt.memoizedState,
      baseState: Jt.baseState,
      baseQueue: Jt.baseQueue,
      queue: Jt.queue,
      next: null
    }, on === null ? Ot.memoizedState = on = n : on = on.next = n;
  }
  return on;
}
function Xf(n, r) {
  return typeof r == "function" ? r(n) : r;
}
function R0(n) {
  var r = Pr(), l = r.queue;
  if (l === null)
    throw Error(X(311));
  l.lastRenderedReducer = n;
  var o = Jt, c = o.baseQueue, p = l.pending;
  if (p !== null) {
    if (c !== null) {
      var d = c.next;
      c.next = p.next, p.next = d;
    }
    o.baseQueue = c = p, l.pending = null;
  }
  if (c !== null) {
    p = c.next, o = o.baseState;
    var S = d = null, E = null, x = p;
    do {
      var j = x.lane;
      if ((Ou & j) === j)
        E !== null && (E = E.next = {
          lane: 0,
          action: x.action,
          hasEagerState: x.hasEagerState,
          eagerState: x.eagerState,
          next: null
        }), o = x.hasEagerState ? x.eagerState : n(o, x.action);
      else {
        var L = {
          lane: j,
          action: x.action,
          hasEagerState: x.hasEagerState,
          eagerState: x.eagerState,
          next: null
        };
        E === null ? (S = E = L, d = o) : E = E.next = L, Ot.lanes |= j, Mu |= j;
      }
      x = x.next;
    } while (x !== null && x !== p);
    E === null ? d = o : E.next = S, va(o, r.memoizedState) || (ir = !0), r.memoizedState = o, r.baseState = d, r.baseQueue = E, l.lastRenderedState = o;
  }
  if (n = l.interleaved, n !== null) {
    c = n;
    do
      p = c.lane, Ot.lanes |= p, Mu |= p, c = c.next;
    while (c !== n);
  } else
    c === null && (l.lanes = 0);
  return [r.memoizedState, l.dispatch];
}
function T0(n) {
  var r = Pr(), l = r.queue;
  if (l === null)
    throw Error(X(311));
  l.lastRenderedReducer = n;
  var o = l.dispatch, c = l.pending, p = r.memoizedState;
  if (c !== null) {
    l.pending = null;
    var d = c = c.next;
    do
      p = n(p, d.action), d = d.next;
    while (d !== c);
    va(p, r.memoizedState) || (ir = !0), r.memoizedState = p, r.baseQueue === null && (r.baseState = p), l.lastRenderedState = p;
  }
  return [p, o];
}
function j_() {
}
function F_(n, r) {
  var l = Ot, o = Pr(), c = r(), p = !va(o.memoizedState, c);
  if (p && (o.memoizedState = c, ir = !0), o = o.queue, dC($_.bind(null, l, o, n), [n]), o.getSnapshot !== r || p || on !== null && on.memoizedState.tag & 1) {
    if (l.flags |= 2048, Kf(9, P_.bind(null, l, o, c, r), void 0, null), sn === null)
      throw Error(X(349));
    Ou & 30 || H_(l, r, c);
  }
  return c;
}
function H_(n, r, l) {
  n.flags |= 16384, n = {
    getSnapshot: r,
    value: l
  }, r = Ot.updateQueue, r === null ? (r = {
    lastEffect: null,
    stores: null
  }, Ot.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
}
function P_(n, r, l, o) {
  r.value = l, r.getSnapshot = o, V_(r) && B_(n);
}
function $_(n, r, l) {
  return l(function() {
    V_(r) && B_(n);
  });
}
function V_(n) {
  var r = n.getSnapshot;
  n = n.value;
  try {
    var l = r();
    return !va(n, l);
  } catch (o) {
    return !0;
  }
}
function B_(n) {
  var r = Oi(n, 1);
  r !== null && pa(r, n, 1, -1);
}
function Pb(n) {
  var r = ja();
  return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = {
    pending: null,
    interleaved: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: Xf,
    lastRenderedState: n
  }, r.queue = n, n = n.dispatch = eP.bind(null, Ot, n), [r.memoizedState, n];
}
function Kf(n, r, l, o) {
  return n = {
    tag: n,
    create: r,
    destroy: l,
    deps: o,
    next: null
  }, r = Ot.updateQueue, r === null ? (r = {
    lastEffect: null,
    stores: null
  }, Ot.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
}
function I_() {
  return Pr().memoizedState;
}
function Vv(n, r, l, o) {
  var c = ja();
  Ot.flags |= n, c.memoizedState = Kf(1 | r, l, void 0, o === void 0 ? null : o);
}
function _h(n, r, l, o) {
  var c = Pr();
  o = o === void 0 ? null : o;
  var p = void 0;
  if (Jt !== null) {
    var d = Jt.memoizedState;
    if (p = d.destroy, o !== null && sC(o, d.deps)) {
      c.memoizedState = Kf(r, l, p, o);
      return;
    }
  }
  Ot.flags |= n, c.memoizedState = Kf(1 | r, l, p, o);
}
function $b(n, r) {
  return Vv(8390656, 8, n, r);
}
function dC(n, r) {
  return _h(2048, 8, n, r);
}
function Y_(n, r) {
  return _h(4, 2, n, r);
}
function Q_(n, r) {
  return _h(4, 4, n, r);
}
function W_(n, r) {
  if (typeof r == "function")
    return n = n(), r(n), function() {
      r(null);
    };
  if (r != null)
    return n = n(), r.current = n, function() {
      r.current = null;
    };
}
function G_(n, r, l) {
  return l = l != null ? l.concat([n]) : null, _h(4, 4, W_.bind(null, r, n), l);
}
function pC() {
}
function X_(n, r) {
  var l = Pr();
  r = r === void 0 ? null : r;
  var o = l.memoizedState;
  return o !== null && r !== null && sC(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
}
function K_(n, r) {
  var l = Pr();
  r = r === void 0 ? null : r;
  var o = l.memoizedState;
  return o !== null && r !== null && sC(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
}
function q_(n, r, l) {
  return Ou & 21 ? (va(l, r) || (l = e_(), Ot.lanes |= l, Mu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, ir = !0), n.memoizedState = l);
}
function Z4(n, r) {
  var l = ct;
  ct = l !== 0 && 4 > l ? l : 4, n(!0);
  var o = C0.transition;
  C0.transition = {};
  try {
    n(!1), r();
  } finally {
    ct = l, C0.transition = o;
  }
}
function Z_() {
  return Pr().memoizedState;
}
function J4(n, r, l) {
  var o = bl(n);
  if (l = {
    lane: o,
    action: l,
    hasEagerState: !1,
    eagerState: null,
    next: null
  }, J_(n))
    ek(r, l);
  else if (l = O_(n, r, l, o), l !== null) {
    var c = Yn();
    pa(l, n, o, c), tk(l, r, o);
  }
}
function eP(n, r, l) {
  var o = bl(n), c = {
    lane: o,
    action: l,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  if (J_(n))
    ek(r, c);
  else {
    var p = n.alternate;
    if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = r.lastRenderedReducer, p !== null))
      try {
        var d = r.lastRenderedState, S = p(d, l);
        if (c.hasEagerState = !0, c.eagerState = S, va(S, d)) {
          var E = r.interleaved;
          E === null ? (c.next = c, aC(r)) : (c.next = E.next, E.next = c), r.interleaved = c;
          return;
        }
      } catch (x) {
      } finally {
      }
    l = O_(n, r, c, o), l !== null && (c = Yn(), pa(l, n, o, c), tk(l, r, o));
  }
}
function J_(n) {
  var r = n.alternate;
  return n === Ot || r !== null && r === Ot;
}
function ek(n, r) {
  Of = ph = !0;
  var l = n.pending;
  l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
}
function tk(n, r, l) {
  if (l & 4194240) {
    var o = r.lanes;
    o &= n.pendingLanes, l |= o, r.lanes = l, IE(n, l);
  }
}
var vh = {
  readContext: Hr,
  useCallback: Mn,
  useContext: Mn,
  useEffect: Mn,
  useImperativeHandle: Mn,
  useInsertionEffect: Mn,
  useLayoutEffect: Mn,
  useMemo: Mn,
  useReducer: Mn,
  useRef: Mn,
  useState: Mn,
  useDebugValue: Mn,
  useDeferredValue: Mn,
  useTransition: Mn,
  useMutableSource: Mn,
  useSyncExternalStore: Mn,
  useId: Mn,
  unstable_isNewReconciler: !1
}, tP = {
  readContext: Hr,
  useCallback: function(n, r) {
    return ja().memoizedState = [n, r === void 0 ? null : r], n;
  },
  useContext: Hr,
  useEffect: $b,
  useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Vv(4194308, 4, W_.bind(null, r, n), l);
  },
  useLayoutEffect: function(n, r) {
    return Vv(4194308, 4, n, r);
  },
  useInsertionEffect: function(n, r) {
    return Vv(4, 2, n, r);
  },
  useMemo: function(n, r) {
    var l = ja();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  },
  useReducer: function(n, r, l) {
    var o = ja();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: n,
      lastRenderedState: r
    }, o.queue = n, n = n.dispatch = J4.bind(null, Ot, n), [o.memoizedState, n];
  },
  useRef: function(n) {
    var r = ja();
    return n = {
      current: n
    }, r.memoizedState = n;
  },
  useState: Pb,
  useDebugValue: pC,
  useDeferredValue: function(n) {
    return ja().memoizedState = n;
  },
  useTransition: function() {
    var n = Pb(!1), r = n[0];
    return n = Z4.bind(null, n[1]), ja().memoizedState = n, [r, n];
  },
  useMutableSource: function() {
  },
  useSyncExternalStore: function(n, r, l) {
    var o = Ot, c = ja();
    if (bt) {
      if (l === void 0)
        throw Error(X(407));
      l = l();
    } else {
      if (l = r(), sn === null)
        throw Error(X(349));
      Ou & 30 || H_(o, r, l);
    }
    c.memoizedState = l;
    var p = {
      value: l,
      getSnapshot: r
    };
    return c.queue = p, $b($_.bind(null, o, p, n), [n]), o.flags |= 2048, Kf(9, P_.bind(null, o, p, l, r), void 0, null), l;
  },
  useId: function() {
    var n = ja(), r = sn.identifierPrefix;
    if (bt) {
      var l = bi, o = wi;
      l = (o & ~(1 << 32 - da(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Gf++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = q4++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  },
  unstable_isNewReconciler: !1
}, nP = {
  readContext: Hr,
  useCallback: X_,
  useContext: Hr,
  useEffect: dC,
  useImperativeHandle: G_,
  useInsertionEffect: Y_,
  useLayoutEffect: Q_,
  useMemo: K_,
  useReducer: R0,
  useRef: I_,
  useState: function() {
    return R0(Xf);
  },
  useDebugValue: pC,
  useDeferredValue: function(n) {
    var r = Pr();
    return q_(r, Jt.memoizedState, n);
  },
  useTransition: function() {
    var n = R0(Xf)[0], r = Pr().memoizedState;
    return [n, r];
  },
  useMutableSource: j_,
  useSyncExternalStore: F_,
  useId: Z_,
  unstable_isNewReconciler: !1
}, rP = {
  readContext: Hr,
  useCallback: X_,
  useContext: Hr,
  useEffect: dC,
  useImperativeHandle: G_,
  useInsertionEffect: Y_,
  useLayoutEffect: Q_,
  useMemo: K_,
  useReducer: T0,
  useRef: I_,
  useState: function() {
    return T0(Xf);
  },
  useDebugValue: pC,
  useDeferredValue: function(n) {
    var r = Pr();
    return Jt === null ? r.memoizedState = n : q_(r, Jt.memoizedState, n);
  },
  useTransition: function() {
    var n = T0(Xf)[0], r = Pr().memoizedState;
    return [n, r];
  },
  useMutableSource: j_,
  useSyncExternalStore: F_,
  useId: Z_,
  unstable_isNewReconciler: !1
};
function ps(n, r) {
  try {
    var l = "", o = r;
    do
      l += MH(o), o = o.return;
    while (o);
    var c = l;
  } catch (p) {
    c = `
Error generating stack: ` + p.message + `
` + p.stack;
  }
  return {
    value: n,
    source: r,
    stack: c,
    digest: null
  };
}
function x0(n, r, l) {
  return {
    value: n,
    source: null,
    stack: l != null ? l : null,
    digest: r != null ? r : null
  };
}
function mE(n, r) {
  try {
    console.error(r.value);
  } catch (l) {
    setTimeout(function() {
      throw l;
    });
  }
}
var aP = typeof WeakMap == "function" ? WeakMap : Map;
function nk(n, r, l) {
  l = Di(-1, l), l.tag = 3, l.payload = {
    element: null
  };
  var o = r.value;
  return l.callback = function() {
    mh || (mh = !0, bE = o), mE(n, r);
  }, l;
}
function rk(n, r, l) {
  l = Di(-1, l), l.tag = 3;
  var o = n.type.getDerivedStateFromError;
  if (typeof o == "function") {
    var c = r.value;
    l.payload = function() {
      return o(c);
    }, l.callback = function() {
      mE(n, r);
    };
  }
  var p = n.stateNode;
  return p !== null && typeof p.componentDidCatch == "function" && (l.callback = function() {
    mE(n, r), typeof o != "function" && (wl === null ? wl = /* @__PURE__ */ new Set([this]) : wl.add(this));
    var d = r.stack;
    this.componentDidCatch(r.value, {
      componentStack: d !== null ? d : ""
    });
  }), l;
}
function Vb(n, r, l) {
  var o = n.pingCache;
  if (o === null) {
    o = n.pingCache = new aP();
    var c = /* @__PURE__ */ new Set();
    o.set(r, c);
  } else
    c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
  c.has(l) || (c.add(l), n = gP.bind(null, n, r, l), r.then(n, n));
}
function Bb(n) {
  do {
    var r;
    if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
      return n;
    n = n.return;
  } while (n !== null);
  return null;
}
function Ib(n, r, l, o, c) {
  return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Di(-1, 1), r.tag = 2, xl(l, r, 1))), l.lanes |= 1), n);
}
var iP = Li.ReactCurrentOwner, ir = !1;
function In(n, r, l, o) {
  r.child = n === null ? U_(r, null, l, o) : fs(r, n.child, l, o);
}
function Yb(n, r, l, o, c) {
  l = l.render;
  var p = r.ref;
  return ls(r, c), o = cC(n, r, l, o, p, c), l = fC(), n !== null && !ir ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Mi(n, r, c)) : (bt && l && ZE(r), r.flags |= 1, In(n, r, o, c), r.child);
}
function Qb(n, r, l, o, c) {
  if (n === null) {
    var p = l.type;
    return typeof p == "function" && !CC(p) && p.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = p, ak(n, r, p, o, c)) : (n = Qv(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
  }
  if (p = n.child, !(n.lanes & c)) {
    var d = p.memoizedProps;
    if (l = l.compare, l = l !== null ? l : Vf, l(d, o) && n.ref === r.ref)
      return Mi(n, r, c);
  }
  return r.flags |= 1, n = Dl(p, o), n.ref = r.ref, n.return = r, r.child = n;
}
function ak(n, r, l, o, c) {
  if (n !== null) {
    var p = n.memoizedProps;
    if (Vf(p, o) && n.ref === r.ref)
      if (ir = !1, r.pendingProps = o = p, (n.lanes & c) !== 0)
        n.flags & 131072 && (ir = !0);
      else
        return r.lanes = n.lanes, Mi(n, r, c);
  }
  return yE(n, r, l, o, c);
}
function ik(n, r, l) {
  var o = r.pendingProps, c = o.children, p = n !== null ? n.memoizedState : null;
  if (o.mode === "hidden")
    if (!(r.mode & 1))
      r.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, yt(ts, Sr), Sr |= l;
    else {
      if (!(l & 1073741824))
        return n = p !== null ? p.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = {
          baseLanes: n,
          cachePool: null,
          transitions: null
        }, r.updateQueue = null, yt(ts, Sr), Sr |= n, null;
      r.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, o = p !== null ? p.baseLanes : l, yt(ts, Sr), Sr |= o;
    }
  else
    p !== null ? (o = p.baseLanes | l, r.memoizedState = null) : o = l, yt(ts, Sr), Sr |= o;
  return In(n, r, c, l), r.child;
}
function lk(n, r) {
  var l = r.ref;
  (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
}
function yE(n, r, l, o, c) {
  var p = ur(l) ? _u : Un.current;
  return p = ss(r, p), ls(r, c), l = cC(n, r, l, o, p, c), o = fC(), n !== null && !ir ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Mi(n, r, c)) : (bt && o && ZE(r), r.flags |= 1, In(n, r, l, c), r.child);
}
function Wb(n, r, l, o, c) {
  if (ur(l)) {
    var p = !0;
    lh(r);
  } else
    p = !1;
  if (ls(r, c), r.stateNode === null)
    Bv(n, r), N_(r, l, o), hE(r, l, o, c), o = !0;
  else if (n === null) {
    var d = r.stateNode, S = r.memoizedProps;
    d.props = S;
    var E = d.context, x = l.contextType;
    typeof x == "object" && x !== null ? x = Hr(x) : (x = ur(l) ? _u : Un.current, x = ss(r, x));
    var j = l.getDerivedStateFromProps, L = typeof j == "function" || typeof d.getSnapshotBeforeUpdate == "function";
    L || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (S !== o || E !== x) && Fb(r, d, o, x), hl = !1;
    var M = r.memoizedState;
    d.state = M, fh(r, o, d, c), E = r.memoizedState, S !== o || M !== E || lr.current || hl ? (typeof j == "function" && (vE(r, l, j, o), E = r.memoizedState), (S = hl || jb(r, l, S, o, M, E, x)) ? (L || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = E), d.props = o, d.state = E, d.context = x, o = S) : (typeof d.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
  } else {
    d = r.stateNode, M_(n, r), S = r.memoizedProps, x = r.type === r.elementType ? S : oa(r.type, S), d.props = x, L = r.pendingProps, M = d.context, E = l.contextType, typeof E == "object" && E !== null ? E = Hr(E) : (E = ur(l) ? _u : Un.current, E = ss(r, E));
    var F = l.getDerivedStateFromProps;
    (j = typeof F == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (S !== L || M !== E) && Fb(r, d, o, E), hl = !1, M = r.memoizedState, d.state = M, fh(r, o, d, c);
    var Y = r.memoizedState;
    S !== L || M !== Y || lr.current || hl ? (typeof F == "function" && (vE(r, l, F, o), Y = r.memoizedState), (x = hl || jb(r, l, x, o, M, Y, E) || !1) ? (j || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(o, Y, E), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(o, Y, E)), typeof d.componentDidUpdate == "function" && (r.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || S === n.memoizedProps && M === n.memoizedState || (r.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && M === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Y), d.props = o, d.state = Y, d.context = E, o = x) : (typeof d.componentDidUpdate != "function" || S === n.memoizedProps && M === n.memoizedState || (r.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && M === n.memoizedState || (r.flags |= 1024), o = !1);
  }
  return gE(n, r, l, o, p, c);
}
function gE(n, r, l, o, c, p) {
  lk(n, r);
  var d = (r.flags & 128) !== 0;
  if (!o && !d)
    return c && Lb(r, l, !1), Mi(n, r, p);
  o = r.stateNode, iP.current = r;
  var S = d && typeof l.getDerivedStateFromError != "function" ? null : o.render();
  return r.flags |= 1, n !== null && d ? (r.child = fs(r, n.child, null, p), r.child = fs(r, null, S, p)) : In(n, r, S, p), r.memoizedState = o.state, c && Lb(r, l, !0), r.child;
}
function uk(n) {
  var r = n.stateNode;
  r.pendingContext ? Mb(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Mb(n, r.context, !1), lC(n, r.containerInfo);
}
function Gb(n, r, l, o, c) {
  return cs(), eC(c), r.flags |= 256, In(n, r, l, o), r.child;
}
var SE = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};
function EE(n) {
  return {
    baseLanes: n,
    cachePool: null,
    transitions: null
  };
}
function ok(n, r, l) {
  var o = r.pendingProps, c = kt.current, p = !1, d = (r.flags & 128) !== 0, S;
  if ((S = d) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (p = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), yt(kt, c & 1), n === null)
    return dE(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (d = o.children, n = o.fallback, p ? (o = r.mode, p = r.child, d = {
      mode: "hidden",
      children: d
    }, !(o & 1) && p !== null ? (p.childLanes = 0, p.pendingProps = d) : p = Mh(d, o, 0, null), n = Du(n, o, l, null), p.return = r, n.return = r, p.sibling = n, r.child = p, r.child.memoizedState = EE(l), r.memoizedState = SE, n) : vC(r, d));
  if (c = n.memoizedState, c !== null && (S = c.dehydrated, S !== null))
    return lP(n, r, d, o, S, c, l);
  if (p) {
    p = o.fallback, d = r.mode, c = n.child, S = c.sibling;
    var E = {
      mode: "hidden",
      children: o.children
    };
    return !(d & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = E, r.deletions = null) : (o = Dl(c, E), o.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? p = Dl(S, p) : (p = Du(p, d, l, null), p.flags |= 2), p.return = r, o.return = r, o.sibling = p, r.child = o, o = p, p = r.child, d = n.child.memoizedState, d = d === null ? EE(l) : {
      baseLanes: d.baseLanes | l,
      cachePool: null,
      transitions: d.transitions
    }, p.memoizedState = d, p.childLanes = n.childLanes & ~l, r.memoizedState = SE, o;
  }
  return p = n.child, n = p.sibling, o = Dl(p, {
    mode: "visible",
    children: o.children
  }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
}
function vC(n, r) {
  return r = Mh({
    mode: "visible",
    children: r
  }, n.mode, 0, null), r.return = n, n.child = r;
}
function Lv(n, r, l, o) {
  return o !== null && eC(o), fs(r, n.child, null, l), n = vC(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
}
function lP(n, r, l, o, c, p, d) {
  if (l)
    return r.flags & 256 ? (r.flags &= -257, o = x0(Error(X(422))), Lv(n, r, d, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (p = o.fallback, c = r.mode, o = Mh({
      mode: "visible",
      children: o.children
    }, c, 0, null), p = Du(p, c, d, null), p.flags |= 2, o.return = r, p.return = r, o.sibling = p, r.child = o, r.mode & 1 && fs(r, n.child, null, d), r.child.memoizedState = EE(d), r.memoizedState = SE, p);
  if (!(r.mode & 1))
    return Lv(n, r, d, null);
  if (c.data === "$!") {
    if (o = c.nextSibling && c.nextSibling.dataset, o)
      var S = o.dgst;
    return o = S, p = Error(X(419)), o = x0(p, o, void 0), Lv(n, r, d, o);
  }
  if (S = (d & n.childLanes) !== 0, ir || S) {
    if (o = sn, o !== null) {
      switch (d & -d) {
        case 4:
          c = 2;
          break;
        case 16:
          c = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          c = 32;
          break;
        case 536870912:
          c = 268435456;
          break;
        default:
          c = 0;
      }
      c = c & (o.suspendedLanes | d) ? 0 : c, c !== 0 && c !== p.retryLane && (p.retryLane = c, Oi(n, c), pa(o, n, c, -1));
    }
    return EC(), o = x0(Error(X(421))), Lv(n, r, d, o);
  }
  return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = SP.bind(null, n), c._reactRetry = r, null) : (n = p.treeContext, Er = Tl(c.nextSibling), Cr = r, bt = !0, fa = null, n !== null && (Ur[Ar++] = wi, Ur[Ar++] = bi, Ur[Ar++] = ku, wi = n.id, bi = n.overflow, ku = r), r = vC(r, o.children), r.flags |= 4096, r);
}
function Xb(n, r, l) {
  n.lanes |= r;
  var o = n.alternate;
  o !== null && (o.lanes |= r), pE(n.return, r, l);
}
function w0(n, r, l, o, c) {
  var p = n.memoizedState;
  p === null ? n.memoizedState = {
    isBackwards: r,
    rendering: null,
    renderingStartTime: 0,
    last: o,
    tail: l,
    tailMode: c
  } : (p.isBackwards = r, p.rendering = null, p.renderingStartTime = 0, p.last = o, p.tail = l, p.tailMode = c);
}
function sk(n, r, l) {
  var o = r.pendingProps, c = o.revealOrder, p = o.tail;
  if (In(n, r, o.children, l), o = kt.current, o & 2)
    o = o & 1 | 2, r.flags |= 128;
  else {
    if (n !== null && n.flags & 128)
      e:
        for (n = r.child; n !== null; ) {
          if (n.tag === 13)
            n.memoizedState !== null && Xb(n, l, r);
          else if (n.tag === 19)
            Xb(n, l, r);
          else if (n.child !== null) {
            n.child.return = n, n = n.child;
            continue;
          }
          if (n === r)
            break e;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === r)
              break e;
            n = n.return;
          }
          n.sibling.return = n.return, n = n.sibling;
        }
    o &= 1;
  }
  if (yt(kt, o), !(r.mode & 1))
    r.memoizedState = null;
  else
    switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; )
          n = l.alternate, n !== null && dh(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), w0(r, !1, c, l, p);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && dh(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        w0(r, !0, l, null, p);
        break;
      case "together":
        w0(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
  return r.child;
}
function Bv(n, r) {
  !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
}
function Mi(n, r, l) {
  if (n !== null && (r.dependencies = n.dependencies), Mu |= r.lanes, !(l & r.childLanes))
    return null;
  if (n !== null && r.child !== n.child)
    throw Error(X(153));
  if (r.child !== null) {
    for (n = r.child, l = Dl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
      n = n.sibling, l = l.sibling = Dl(n, n.pendingProps), l.return = r;
    l.sibling = null;
  }
  return r.child;
}
function uP(n, r, l) {
  switch (r.tag) {
    case 3:
      uk(r), cs();
      break;
    case 5:
      A_(r);
      break;
    case 1:
      ur(r.type) && lh(r);
      break;
    case 4:
      lC(r, r.stateNode.containerInfo);
      break;
    case 10:
      var o = r.type._context, c = r.memoizedProps.value;
      yt(sh, o._currentValue), o._currentValue = c;
      break;
    case 13:
      if (o = r.memoizedState, o !== null)
        return o.dehydrated !== null ? (yt(kt, kt.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? ok(n, r, l) : (yt(kt, kt.current & 1), n = Mi(n, r, l), n !== null ? n.sibling : null);
      yt(kt, kt.current & 1);
      break;
    case 19:
      if (o = (l & r.childLanes) !== 0, n.flags & 128) {
        if (o)
          return sk(n, r, l);
        r.flags |= 128;
      }
      if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), yt(kt, kt.current), o)
        break;
      return null;
    case 22:
    case 23:
      return r.lanes = 0, ik(n, r, l);
  }
  return Mi(n, r, l);
}
var ck, CE, fk, dk;
ck = function(n, r) {
  for (var l = r.child; l !== null; ) {
    if (l.tag === 5 || l.tag === 6)
      n.appendChild(l.stateNode);
    else if (l.tag !== 4 && l.child !== null) {
      l.child.return = l, l = l.child;
      continue;
    }
    if (l === r)
      break;
    for (; l.sibling === null; ) {
      if (l.return === null || l.return === r)
        return;
      l = l.return;
    }
    l.sibling.return = l.return, l = l.sibling;
  }
};
CE = function() {
};
fk = function(n, r, l, o) {
  var c = n.memoizedProps;
  if (c !== o) {
    n = r.stateNode, wu(Pa.current);
    var p = null;
    switch (l) {
      case "input":
        c = B0(n, c), o = B0(n, o), p = [];
        break;
      case "select":
        c = Mt({}, c, {
          value: void 0
        }), o = Mt({}, o, {
          value: void 0
        }), p = [];
        break;
      case "textarea":
        c = Q0(n, c), o = Q0(n, o), p = [];
        break;
      default:
        typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = ah);
    }
    G0(l, o);
    var d;
    l = null;
    for (x in c)
      if (!o.hasOwnProperty(x) && c.hasOwnProperty(x) && c[x] != null)
        if (x === "style") {
          var S = c[x];
          for (d in S)
            S.hasOwnProperty(d) && (l || (l = {}), l[d] = "");
        } else
          x !== "dangerouslySetInnerHTML" && x !== "children" && x !== "suppressContentEditableWarning" && x !== "suppressHydrationWarning" && x !== "autoFocus" && (Uf.hasOwnProperty(x) ? p || (p = []) : (p = p || []).push(x, null));
    for (x in o) {
      var E = o[x];
      if (S = c != null ? c[x] : void 0, o.hasOwnProperty(x) && E !== S && (E != null || S != null))
        if (x === "style")
          if (S) {
            for (d in S)
              !S.hasOwnProperty(d) || E && E.hasOwnProperty(d) || (l || (l = {}), l[d] = "");
            for (d in E)
              E.hasOwnProperty(d) && S[d] !== E[d] && (l || (l = {}), l[d] = E[d]);
          } else
            l || (p || (p = []), p.push(x, l)), l = E;
        else
          x === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, S = S ? S.__html : void 0, E != null && S !== E && (p = p || []).push(x, E)) : x === "children" ? typeof E != "string" && typeof E != "number" || (p = p || []).push(x, "" + E) : x !== "suppressContentEditableWarning" && x !== "suppressHydrationWarning" && (Uf.hasOwnProperty(x) ? (E != null && x === "onScroll" && xt("scroll", n), p || S === E || (p = [])) : (p = p || []).push(x, E));
    }
    l && (p = p || []).push("style", l);
    var x = p;
    (r.updateQueue = x) && (r.flags |= 4);
  }
};
dk = function(n, r, l, o) {
  l !== o && (r.flags |= 4);
};
function yf(n, r) {
  if (!bt)
    switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; )
          r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; )
          l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
}
function Ln(n) {
  var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
  if (r)
    for (var c = n.child; c !== null; )
      l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
  else
    for (c = n.child; c !== null; )
      l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
  return n.subtreeFlags |= o, n.childLanes = l, r;
}
function oP(n, r, l) {
  var o = r.pendingProps;
  switch (JE(r), r.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ln(r), null;
    case 1:
      return ur(r.type) && ih(), Ln(r), null;
    case 3:
      return o = r.stateNode, ds(), wt(lr), wt(Un), oC(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Ov(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, fa !== null && (kE(fa), fa = null))), CE(n, r), Ln(r), null;
    case 5:
      uC(r);
      var c = wu(Wf.current);
      if (l = r.type, n !== null && r.stateNode != null)
        fk(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
      else {
        if (!o) {
          if (r.stateNode === null)
            throw Error(X(166));
          return Ln(r), null;
        }
        if (n = wu(Pa.current), Ov(r)) {
          o = r.stateNode, l = r.type;
          var p = r.memoizedProps;
          switch (o[Fa] = r, o[Yf] = p, n = (r.mode & 1) !== 0, l) {
            case "dialog":
              xt("cancel", o), xt("close", o);
              break;
            case "iframe":
            case "object":
            case "embed":
              xt("load", o);
              break;
            case "video":
            case "audio":
              for (c = 0; c < xf.length; c++)
                xt(xf[c], o);
              break;
            case "source":
              xt("error", o);
              break;
            case "img":
            case "image":
            case "link":
              xt("error", o), xt("load", o);
              break;
            case "details":
              xt("toggle", o);
              break;
            case "input":
              ab(o, p), xt("invalid", o);
              break;
            case "select":
              o._wrapperState = {
                wasMultiple: !!p.multiple
              }, xt("invalid", o);
              break;
            case "textarea":
              lb(o, p), xt("invalid", o);
          }
          G0(l, p), c = null;
          for (var d in p)
            if (p.hasOwnProperty(d)) {
              var S = p[d];
              d === "children" ? typeof S == "string" ? o.textContent !== S && (p.suppressHydrationWarning !== !0 && kv(o.textContent, S, n), c = ["children", S]) : typeof S == "number" && o.textContent !== "" + S && (p.suppressHydrationWarning !== !0 && kv(o.textContent, S, n), c = ["children", "" + S]) : Uf.hasOwnProperty(d) && S != null && d === "onScroll" && xt("scroll", o);
            }
          switch (l) {
            case "input":
              Cv(o), ib(o, p, !0);
              break;
            case "textarea":
              Cv(o), ub(o);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof p.onClick == "function" && (o.onclick = ah);
          }
          o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
        } else {
          d = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = HD(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = d.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = d.createElement(l, {
            is: o.is
          }) : (n = d.createElement(l), l === "select" && (d = n, o.multiple ? d.multiple = !0 : o.size && (d.size = o.size))) : n = d.createElementNS(n, l), n[Fa] = r, n[Yf] = o, ck(n, r, !1, !1), r.stateNode = n;
          e: {
            switch (d = X0(l, o), l) {
              case "dialog":
                xt("cancel", n), xt("close", n), c = o;
                break;
              case "iframe":
              case "object":
              case "embed":
                xt("load", n), c = o;
                break;
              case "video":
              case "audio":
                for (c = 0; c < xf.length; c++)
                  xt(xf[c], n);
                c = o;
                break;
              case "source":
                xt("error", n), c = o;
                break;
              case "img":
              case "image":
              case "link":
                xt("error", n), xt("load", n), c = o;
                break;
              case "details":
                xt("toggle", n), c = o;
                break;
              case "input":
                ab(n, o), c = B0(n, o), xt("invalid", n);
                break;
              case "option":
                c = o;
                break;
              case "select":
                n._wrapperState = {
                  wasMultiple: !!o.multiple
                }, c = Mt({}, o, {
                  value: void 0
                }), xt("invalid", n);
                break;
              case "textarea":
                lb(n, o), c = Q0(n, o), xt("invalid", n);
                break;
              default:
                c = o;
            }
            G0(l, c), S = c;
            for (p in S)
              if (S.hasOwnProperty(p)) {
                var E = S[p];
                p === "style" ? VD(n, E) : p === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, E != null && PD(n, E)) : p === "children" ? typeof E == "string" ? (l !== "textarea" || E !== "") && Af(n, E) : typeof E == "number" && Af(n, "" + E) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (Uf.hasOwnProperty(p) ? E != null && p === "onScroll" && xt("scroll", n) : E != null && FE(n, p, E, d));
              }
            switch (l) {
              case "input":
                Cv(n), ib(n, o, !1);
                break;
              case "textarea":
                Cv(n), ub(n);
                break;
              case "option":
                o.value != null && n.setAttribute("value", "" + _l(o.value));
                break;
              case "select":
                n.multiple = !!o.multiple, p = o.value, p != null ? ns(n, !!o.multiple, p, !1) : o.defaultValue != null && ns(n, !!o.multiple, o.defaultValue, !0);
                break;
              default:
                typeof c.onClick == "function" && (n.onclick = ah);
            }
            switch (l) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break e;
              case "img":
                o = !0;
                break e;
              default:
                o = !1;
            }
          }
          o && (r.flags |= 4);
        }
        r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
      }
      return Ln(r), null;
    case 6:
      if (n && r.stateNode != null)
        dk(n, r, n.memoizedProps, o);
      else {
        if (typeof o != "string" && r.stateNode === null)
          throw Error(X(166));
        if (l = wu(Wf.current), wu(Pa.current), Ov(r)) {
          if (o = r.stateNode, l = r.memoizedProps, o[Fa] = r, (p = o.nodeValue !== l) && (n = Cr, n !== null))
            switch (n.tag) {
              case 3:
                kv(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && kv(o.nodeValue, l, (n.mode & 1) !== 0);
            }
          p && (r.flags |= 4);
        } else
          o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Fa] = r, r.stateNode = o;
      }
      return Ln(r), null;
    case 13:
      if (wt(kt), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
        if (bt && Er !== null && r.mode & 1 && !(r.flags & 128))
          k_(), cs(), r.flags |= 98560, p = !1;
        else if (p = Ov(r), o !== null && o.dehydrated !== null) {
          if (n === null) {
            if (!p)
              throw Error(X(318));
            if (p = r.memoizedState, p = p !== null ? p.dehydrated : null, !p)
              throw Error(X(317));
            p[Fa] = r;
          } else
            cs(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
          Ln(r), p = !1;
        } else
          fa !== null && (kE(fa), fa = null), p = !0;
        if (!p)
          return r.flags & 65536 ? r : null;
      }
      return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || kt.current & 1 ? en === 0 && (en = 3) : EC())), r.updateQueue !== null && (r.flags |= 4), Ln(r), null);
    case 4:
      return ds(), CE(n, r), n === null && Bf(r.stateNode.containerInfo), Ln(r), null;
    case 10:
      return rC(r.type._context), Ln(r), null;
    case 17:
      return ur(r.type) && ih(), Ln(r), null;
    case 19:
      if (wt(kt), p = r.memoizedState, p === null)
        return Ln(r), null;
      if (o = (r.flags & 128) !== 0, d = p.rendering, d === null)
        if (o)
          yf(p, !1);
        else {
          if (en !== 0 || n !== null && n.flags & 128)
            for (n = r.child; n !== null; ) {
              if (d = dh(n), d !== null) {
                for (r.flags |= 128, yf(p, !1), o = d.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                  p = l, n = o, p.flags &= 14680066, d = p.alternate, d === null ? (p.childLanes = 0, p.lanes = n, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = d.childLanes, p.lanes = d.lanes, p.child = d.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = d.memoizedProps, p.memoizedState = d.memoizedState, p.updateQueue = d.updateQueue, p.type = d.type, n = d.dependencies, p.dependencies = n === null ? null : {
                    lanes: n.lanes,
                    firstContext: n.firstContext
                  }), l = l.sibling;
                return yt(kt, kt.current & 1 | 2), r.child;
              }
              n = n.sibling;
            }
          p.tail !== null && jt() > vs && (r.flags |= 128, o = !0, yf(p, !1), r.lanes = 4194304);
        }
      else {
        if (!o)
          if (n = dh(d), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), yf(p, !0), p.tail === null && p.tailMode === "hidden" && !d.alternate && !bt)
              return Ln(r), null;
          } else
            2 * jt() - p.renderingStartTime > vs && l !== 1073741824 && (r.flags |= 128, o = !0, yf(p, !1), r.lanes = 4194304);
        p.isBackwards ? (d.sibling = r.child, r.child = d) : (l = p.last, l !== null ? l.sibling = d : r.child = d, p.last = d);
      }
      return p.tail !== null ? (r = p.tail, p.rendering = r, p.tail = r.sibling, p.renderingStartTime = jt(), r.sibling = null, l = kt.current, yt(kt, o ? l & 1 | 2 : l & 1), r) : (Ln(r), null);
    case 22:
    case 23:
      return SC(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Sr & 1073741824 && (Ln(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Ln(r), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(X(156, r.tag));
}
function sP(n, r) {
  switch (JE(r), r.tag) {
    case 1:
      return ur(r.type) && ih(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
    case 3:
      return ds(), wt(lr), wt(Un), oC(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
    case 5:
      return uC(r), null;
    case 13:
      if (wt(kt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
        if (r.alternate === null)
          throw Error(X(340));
        cs();
      }
      return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
    case 19:
      return wt(kt), null;
    case 4:
      return ds(), null;
    case 10:
      return rC(r.type._context), null;
    case 22:
    case 23:
      return SC(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Nv = !1, zn = !1, cP = typeof WeakSet == "function" ? WeakSet : Set, de = null;
function es(n, r) {
  var l = n.ref;
  if (l !== null)
    if (typeof l == "function")
      try {
        l(null);
      } catch (o) {
        Ut(n, r, o);
      }
    else
      l.current = null;
}
function RE(n, r, l) {
  try {
    l();
  } catch (o) {
    Ut(n, r, o);
  }
}
var Kb = !1;
function fP(n, r) {
  if (iE = th, n = m_(), qE(n)) {
    if ("selectionStart" in n)
      var l = {
        start: n.selectionStart,
        end: n.selectionEnd
      };
    else
      e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, p = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, p.nodeType;
          } catch (B) {
            l = null;
            break e;
          }
          var d = 0, S = -1, E = -1, x = 0, j = 0, L = n, M = null;
          t:
            for (; ; ) {
              for (var F; L !== l || c !== 0 && L.nodeType !== 3 || (S = d + c), L !== p || o !== 0 && L.nodeType !== 3 || (E = d + o), L.nodeType === 3 && (d += L.nodeValue.length), (F = L.firstChild) !== null; )
                M = L, L = F;
              for (; ; ) {
                if (L === n)
                  break t;
                if (M === l && ++x === c && (S = d), M === p && ++j === o && (E = d), (F = L.nextSibling) !== null)
                  break;
                L = M, M = L.parentNode;
              }
              L = F;
            }
          l = S === -1 || E === -1 ? null : {
            start: S,
            end: E
          };
        } else
          l = null;
      }
    l = l || {
      start: 0,
      end: 0
    };
  } else
    l = null;
  for (lE = {
    focusedElem: n,
    selectionRange: l
  }, th = !1, de = r; de !== null; )
    if (r = de, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
      n.return = r, de = n;
    else
      for (; de !== null; ) {
        r = de;
        try {
          var Y = r.alternate;
          if (r.flags & 1024)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (Y !== null) {
                  var re = Y.memoizedProps, Ne = Y.memoizedState, _ = r.stateNode, R = _.getSnapshotBeforeUpdate(r.elementType === r.type ? re : oa(r.type, re), Ne);
                  _.__reactInternalSnapshotBeforeUpdate = R;
                }
                break;
              case 3:
                var b = r.stateNode.containerInfo;
                b.nodeType === 1 ? b.textContent = "" : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(X(163));
            }
        } catch (B) {
          Ut(r, r.return, B);
        }
        if (n = r.sibling, n !== null) {
          n.return = r.return, de = n;
          break;
        }
        de = r.return;
      }
  return Y = Kb, Kb = !1, Y;
}
function Mf(n, r, l) {
  var o = r.updateQueue;
  if (o = o !== null ? o.lastEffect : null, o !== null) {
    var c = o = o.next;
    do {
      if ((c.tag & n) === n) {
        var p = c.destroy;
        c.destroy = void 0, p !== void 0 && RE(r, l, p);
      }
      c = c.next;
    } while (c !== o);
  }
}
function kh(n, r) {
  if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & n) === n) {
        var o = l.create;
        l.destroy = o();
      }
      l = l.next;
    } while (l !== r);
  }
}
function TE(n) {
  var r = n.ref;
  if (r !== null) {
    var l = n.stateNode;
    switch (n.tag) {
      case 5:
        n = l;
        break;
      default:
        n = l;
    }
    typeof r == "function" ? r(n) : r.current = n;
  }
}
function pk(n) {
  var r = n.alternate;
  r !== null && (n.alternate = null, pk(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Fa], delete r[Yf], delete r[sE], delete r[W4], delete r[G4])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
}
function vk(n) {
  return n.tag === 5 || n.tag === 3 || n.tag === 4;
}
function qb(n) {
  e:
    for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || vk(n.return))
          return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4)
          continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2))
        return n.stateNode;
    }
}
function xE(n, r, l) {
  var o = n.tag;
  if (o === 5 || o === 6)
    n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = ah));
  else if (o !== 4 && (n = n.child, n !== null))
    for (xE(n, r, l), n = n.sibling; n !== null; )
      xE(n, r, l), n = n.sibling;
}
function wE(n, r, l) {
  var o = n.tag;
  if (o === 5 || o === 6)
    n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
  else if (o !== 4 && (n = n.child, n !== null))
    for (wE(n, r, l), n = n.sibling; n !== null; )
      wE(n, r, l), n = n.sibling;
}
var En = null, sa = !1;
function pl(n, r, l) {
  for (l = l.child; l !== null; )
    hk(n, r, l), l = l.sibling;
}
function hk(n, r, l) {
  if (Ha && typeof Ha.onCommitFiberUnmount == "function")
    try {
      Ha.onCommitFiberUnmount(Ch, l);
    } catch (S) {
    }
  switch (l.tag) {
    case 5:
      zn || es(l, r);
    case 6:
      var o = En, c = sa;
      En = null, pl(n, r, l), En = o, sa = c, En !== null && (sa ? (n = En, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : En.removeChild(l.stateNode));
      break;
    case 18:
      En !== null && (sa ? (n = En, l = l.stateNode, n.nodeType === 8 ? g0(n.parentNode, l) : n.nodeType === 1 && g0(n, l), Pf(n)) : g0(En, l.stateNode));
      break;
    case 4:
      o = En, c = sa, En = l.stateNode.containerInfo, sa = !0, pl(n, r, l), En = o, sa = c;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!zn && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
        c = o = o.next;
        do {
          var p = c, d = p.destroy;
          p = p.tag, d !== void 0 && (p & 2 || p & 4) && RE(l, r, d), c = c.next;
        } while (c !== o);
      }
      pl(n, r, l);
      break;
    case 1:
      if (!zn && (es(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
        try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (S) {
          Ut(l, r, S);
        }
      pl(n, r, l);
      break;
    case 21:
      pl(n, r, l);
      break;
    case 22:
      l.mode & 1 ? (zn = (o = zn) || l.memoizedState !== null, pl(n, r, l), zn = o) : pl(n, r, l);
      break;
    default:
      pl(n, r, l);
  }
}
function Zb(n) {
  var r = n.updateQueue;
  if (r !== null) {
    n.updateQueue = null;
    var l = n.stateNode;
    l === null && (l = n.stateNode = new cP()), r.forEach(function(o) {
      var c = EP.bind(null, n, o);
      l.has(o) || (l.add(o), o.then(c, c));
    });
  }
}
function ua(n, r) {
  var l = r.deletions;
  if (l !== null)
    for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var p = n, d = r, S = d;
        e:
          for (; S !== null; ) {
            switch (S.tag) {
              case 5:
                En = S.stateNode, sa = !1;
                break e;
              case 3:
                En = S.stateNode.containerInfo, sa = !0;
                break e;
              case 4:
                En = S.stateNode.containerInfo, sa = !0;
                break e;
            }
            S = S.return;
          }
        if (En === null)
          throw Error(X(160));
        hk(p, d, c), En = null, sa = !1;
        var E = c.alternate;
        E !== null && (E.return = null), c.return = null;
      } catch (x) {
        Ut(c, r, x);
      }
    }
  if (r.subtreeFlags & 12854)
    for (r = r.child; r !== null; )
      mk(r, n), r = r.sibling;
}
function mk(n, r) {
  var l = n.alternate, o = n.flags;
  switch (n.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ua(r, n), Aa(n), o & 4) {
        try {
          Mf(3, n, n.return), kh(3, n);
        } catch (re) {
          Ut(n, n.return, re);
        }
        try {
          Mf(5, n, n.return);
        } catch (re) {
          Ut(n, n.return, re);
        }
      }
      break;
    case 1:
      ua(r, n), Aa(n), o & 512 && l !== null && es(l, l.return);
      break;
    case 5:
      if (ua(r, n), Aa(n), o & 512 && l !== null && es(l, l.return), n.flags & 32) {
        var c = n.stateNode;
        try {
          Af(c, "");
        } catch (re) {
          Ut(n, n.return, re);
        }
      }
      if (o & 4 && (c = n.stateNode, c != null)) {
        var p = n.memoizedProps, d = l !== null ? l.memoizedProps : p, S = n.type, E = n.updateQueue;
        if (n.updateQueue = null, E !== null)
          try {
            S === "input" && p.type === "radio" && p.name != null && jD(c, p), X0(S, d);
            var x = X0(S, p);
            for (d = 0; d < E.length; d += 2) {
              var j = E[d], L = E[d + 1];
              j === "style" ? VD(c, L) : j === "dangerouslySetInnerHTML" ? PD(c, L) : j === "children" ? Af(c, L) : FE(c, j, L, x);
            }
            switch (S) {
              case "input":
                I0(c, p);
                break;
              case "textarea":
                FD(c, p);
                break;
              case "select":
                var M = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!p.multiple;
                var F = p.value;
                F != null ? ns(c, !!p.multiple, F, !1) : M !== !!p.multiple && (p.defaultValue != null ? ns(c, !!p.multiple, p.defaultValue, !0) : ns(c, !!p.multiple, p.multiple ? [] : "", !1));
            }
            c[Yf] = p;
          } catch (re) {
            Ut(n, n.return, re);
          }
      }
      break;
    case 6:
      if (ua(r, n), Aa(n), o & 4) {
        if (n.stateNode === null)
          throw Error(X(162));
        c = n.stateNode, p = n.memoizedProps;
        try {
          c.nodeValue = p;
        } catch (re) {
          Ut(n, n.return, re);
        }
      }
      break;
    case 3:
      if (ua(r, n), Aa(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
        try {
          Pf(r.containerInfo);
        } catch (re) {
          Ut(n, n.return, re);
        }
      break;
    case 4:
      ua(r, n), Aa(n);
      break;
    case 13:
      ua(r, n), Aa(n), c = n.child, c.flags & 8192 && (p = c.memoizedState !== null, c.stateNode.isHidden = p, !p || c.alternate !== null && c.alternate.memoizedState !== null || (yC = jt())), o & 4 && Zb(n);
      break;
    case 22:
      if (j = l !== null && l.memoizedState !== null, n.mode & 1 ? (zn = (x = zn) || j, ua(r, n), zn = x) : ua(r, n), Aa(n), o & 8192) {
        if (x = n.memoizedState !== null, (n.stateNode.isHidden = x) && !j && n.mode & 1)
          for (de = n, j = n.child; j !== null; ) {
            for (L = de = j; de !== null; ) {
              switch (M = de, F = M.child, M.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mf(4, M, M.return);
                  break;
                case 1:
                  es(M, M.return);
                  var Y = M.stateNode;
                  if (typeof Y.componentWillUnmount == "function") {
                    o = M, l = M.return;
                    try {
                      r = o, Y.props = r.memoizedProps, Y.state = r.memoizedState, Y.componentWillUnmount();
                    } catch (re) {
                      Ut(o, l, re);
                    }
                  }
                  break;
                case 5:
                  es(M, M.return);
                  break;
                case 22:
                  if (M.memoizedState !== null) {
                    eD(L);
                    continue;
                  }
              }
              F !== null ? (F.return = M, de = F) : eD(L);
            }
            j = j.sibling;
          }
        e:
          for (j = null, L = n; ; ) {
            if (L.tag === 5) {
              if (j === null) {
                j = L;
                try {
                  c = L.stateNode, x ? (p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (S = L.stateNode, E = L.memoizedProps.style, d = E != null && E.hasOwnProperty("display") ? E.display : null, S.style.display = $D("display", d));
                } catch (re) {
                  Ut(n, n.return, re);
                }
              }
            } else if (L.tag === 6) {
              if (j === null)
                try {
                  L.stateNode.nodeValue = x ? "" : L.memoizedProps;
                } catch (re) {
                  Ut(n, n.return, re);
                }
            } else if ((L.tag !== 22 && L.tag !== 23 || L.memoizedState === null || L === n) && L.child !== null) {
              L.child.return = L, L = L.child;
              continue;
            }
            if (L === n)
              break e;
            for (; L.sibling === null; ) {
              if (L.return === null || L.return === n)
                break e;
              j === L && (j = null), L = L.return;
            }
            j === L && (j = null), L.sibling.return = L.return, L = L.sibling;
          }
      }
      break;
    case 19:
      ua(r, n), Aa(n), o & 4 && Zb(n);
      break;
    case 21:
      break;
    default:
      ua(r, n), Aa(n);
  }
}
function Aa(n) {
  var r = n.flags;
  if (r & 2) {
    try {
      e: {
        for (var l = n.return; l !== null; ) {
          if (vk(l)) {
            var o = l;
            break e;
          }
          l = l.return;
        }
        throw Error(X(160));
      }
      switch (o.tag) {
        case 5:
          var c = o.stateNode;
          o.flags & 32 && (Af(c, ""), o.flags &= -33);
          var p = qb(n);
          wE(n, p, c);
          break;
        case 3:
        case 4:
          var d = o.stateNode.containerInfo, S = qb(n);
          xE(n, S, d);
          break;
        default:
          throw Error(X(161));
      }
    } catch (E) {
      Ut(n, n.return, E);
    }
    n.flags &= -3;
  }
  r & 4096 && (n.flags &= -4097);
}
function dP(n, r, l) {
  de = n, yk(n);
}
function yk(n, r, l) {
  for (var o = (n.mode & 1) !== 0; de !== null; ) {
    var c = de, p = c.child;
    if (c.tag === 22 && o) {
      var d = c.memoizedState !== null || Nv;
      if (!d) {
        var S = c.alternate, E = S !== null && S.memoizedState !== null || zn;
        S = Nv;
        var x = zn;
        if (Nv = d, (zn = E) && !x)
          for (de = c; de !== null; )
            d = de, E = d.child, d.tag === 22 && d.memoizedState !== null ? tD(c) : E !== null ? (E.return = d, de = E) : tD(c);
        for (; p !== null; )
          de = p, yk(p), p = p.sibling;
        de = c, Nv = S, zn = x;
      }
      Jb(n);
    } else
      c.subtreeFlags & 8772 && p !== null ? (p.return = c, de = p) : Jb(n);
  }
}
function Jb(n) {
  for (; de !== null; ) {
    var r = de;
    if (r.flags & 8772) {
      var l = r.alternate;
      try {
        if (r.flags & 8772)
          switch (r.tag) {
            case 0:
            case 11:
            case 15:
              zn || kh(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !zn)
                if (l === null)
                  o.componentDidMount();
                else {
                  var c = r.elementType === r.type ? l.memoizedProps : oa(r.type, l.memoizedProps);
                  o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                }
              var p = r.updateQueue;
              p !== null && Ab(r, p, o);
              break;
            case 3:
              var d = r.updateQueue;
              if (d !== null) {
                if (l = null, r.child !== null)
                  switch (r.child.tag) {
                    case 5:
                      l = r.child.stateNode;
                      break;
                    case 1:
                      l = r.child.stateNode;
                  }
                Ab(r, d, l);
              }
              break;
            case 5:
              var S = r.stateNode;
              if (l === null && r.flags & 4) {
                l = S;
                var E = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    E.autoFocus && l.focus();
                    break;
                  case "img":
                    E.src && (l.src = E.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var x = r.alternate;
                if (x !== null) {
                  var j = x.memoizedState;
                  if (j !== null) {
                    var L = j.dehydrated;
                    L !== null && Pf(L);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(X(163));
          }
        zn || r.flags & 512 && TE(r);
      } catch (M) {
        Ut(r, r.return, M);
      }
    }
    if (r === n) {
      de = null;
      break;
    }
    if (l = r.sibling, l !== null) {
      l.return = r.return, de = l;
      break;
    }
    de = r.return;
  }
}
function eD(n) {
  for (; de !== null; ) {
    var r = de;
    if (r === n) {
      de = null;
      break;
    }
    var l = r.sibling;
    if (l !== null) {
      l.return = r.return, de = l;
      break;
    }
    de = r.return;
  }
}
function tD(n) {
  for (; de !== null; ) {
    var r = de;
    try {
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          var l = r.return;
          try {
            kh(4, r);
          } catch (E) {
            Ut(r, l, E);
          }
          break;
        case 1:
          var o = r.stateNode;
          if (typeof o.componentDidMount == "function") {
            var c = r.return;
            try {
              o.componentDidMount();
            } catch (E) {
              Ut(r, c, E);
            }
          }
          var p = r.return;
          try {
            TE(r);
          } catch (E) {
            Ut(r, p, E);
          }
          break;
        case 5:
          var d = r.return;
          try {
            TE(r);
          } catch (E) {
            Ut(r, d, E);
          }
      }
    } catch (E) {
      Ut(r, r.return, E);
    }
    if (r === n) {
      de = null;
      break;
    }
    var S = r.sibling;
    if (S !== null) {
      S.return = r.return, de = S;
      break;
    }
    de = r.return;
  }
}
var pP = Math.ceil, hh = Li.ReactCurrentDispatcher, hC = Li.ReactCurrentOwner, Fr = Li.ReactCurrentBatchConfig, Je = 0, sn = null, Bt = null, Cn = 0, Sr = 0, ts = Ll(0), en = 0, qf = null, Mu = 0, Oh = 0, mC = 0, Lf = null, ar = null, yC = 0, vs = 1 / 0, Ti = null, mh = !1, bE = null, wl = null, zv = !1, Sl = null, yh = 0, Nf = 0, DE = null, Iv = -1, Yv = 0;
function Yn() {
  return Je & 6 ? jt() : Iv !== -1 ? Iv : Iv = jt();
}
function bl(n) {
  return n.mode & 1 ? Je & 2 && Cn !== 0 ? Cn & -Cn : K4.transition !== null ? (Yv === 0 && (Yv = e_()), Yv) : (n = ct, n !== 0 || (n = window.event, n = n === void 0 ? 16 : u_(n.type)), n) : 1;
}
function pa(n, r, l, o) {
  if (50 < Nf)
    throw Nf = 0, DE = null, Error(X(185));
  ed(n, l, o), (!(Je & 2) || n !== sn) && (n === sn && (!(Je & 2) && (Oh |= l), en === 4 && yl(n, Cn)), or(n, o), l === 1 && Je === 0 && !(r.mode & 1) && (vs = jt() + 500, bh && Nl()));
}
function or(n, r) {
  var l = n.callbackNode;
  KH(n, r);
  var o = eh(n, n === sn ? Cn : 0);
  if (o === 0)
    l !== null && cb(l), n.callbackNode = null, n.callbackPriority = 0;
  else if (r = o & -o, n.callbackPriority !== r) {
    if (l != null && cb(l), r === 1)
      n.tag === 0 ? X4(nD.bind(null, n)) : b_(nD.bind(null, n)), Y4(function() {
        !(Je & 6) && Nl();
      }), l = null;
    else {
      switch (t_(o)) {
        case 1:
          l = BE;
          break;
        case 4:
          l = ZD;
          break;
        case 16:
          l = Jv;
          break;
        case 536870912:
          l = JD;
          break;
        default:
          l = Jv;
      }
      l = wk(l, gk.bind(null, n));
    }
    n.callbackPriority = r, n.callbackNode = l;
  }
}
function gk(n, r) {
  if (Iv = -1, Yv = 0, Je & 6)
    throw Error(X(327));
  var l = n.callbackNode;
  if (us() && n.callbackNode !== l)
    return null;
  var o = eh(n, n === sn ? Cn : 0);
  if (o === 0)
    return null;
  if (o & 30 || o & n.expiredLanes || r)
    r = gh(n, o);
  else {
    r = o;
    var c = Je;
    Je |= 2;
    var p = Ek();
    (sn !== n || Cn !== r) && (Ti = null, vs = jt() + 500, bu(n, r));
    do
      try {
        mP();
        break;
      } catch (S) {
        Sk(n, S);
      }
    while (1);
    nC(), hh.current = p, Je = c, Bt !== null ? r = 0 : (sn = null, Cn = 0, r = en);
  }
  if (r !== 0) {
    if (r === 2 && (c = eE(n), c !== 0 && (o = c, r = _E(n, c))), r === 1)
      throw l = qf, bu(n, 0), yl(n, o), or(n, jt()), l;
    if (r === 6)
      yl(n, o);
    else {
      if (c = n.current.alternate, !(o & 30) && !vP(c) && (r = gh(n, o), r === 2 && (p = eE(n), p !== 0 && (o = p, r = _E(n, p))), r === 1))
        throw l = qf, bu(n, 0), yl(n, o), or(n, jt()), l;
      switch (n.finishedWork = c, n.finishedLanes = o, r) {
        case 0:
        case 1:
          throw Error(X(345));
        case 2:
          Ru(n, ar, Ti);
          break;
        case 3:
          if (yl(n, o), (o & 130023424) === o && (r = yC + 500 - jt(), 10 < r)) {
            if (eh(n, 0) !== 0)
              break;
            if (c = n.suspendedLanes, (c & o) !== o) {
              Yn(), n.pingedLanes |= n.suspendedLanes & c;
              break;
            }
            n.timeoutHandle = oE(Ru.bind(null, n, ar, Ti), r);
            break;
          }
          Ru(n, ar, Ti);
          break;
        case 4:
          if (yl(n, o), (o & 4194240) === o)
            break;
          for (r = n.eventTimes, c = -1; 0 < o; ) {
            var d = 31 - da(o);
            p = 1 << d, d = r[d], d > c && (c = d), o &= ~p;
          }
          if (o = c, o = jt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * pP(o / 1960)) - o, 10 < o) {
            n.timeoutHandle = oE(Ru.bind(null, n, ar, Ti), o);
            break;
          }
          Ru(n, ar, Ti);
          break;
        case 5:
          Ru(n, ar, Ti);
          break;
        default:
          throw Error(X(329));
      }
    }
  }
  return or(n, jt()), n.callbackNode === l ? gk.bind(null, n) : null;
}
function _E(n, r) {
  var l = Lf;
  return n.current.memoizedState.isDehydrated && (bu(n, r).flags |= 256), n = gh(n, r), n !== 2 && (r = ar, ar = l, r !== null && kE(r)), n;
}
function kE(n) {
  ar === null ? ar = n : ar.push.apply(ar, n);
}
function vP(n) {
  for (var r = n; ; ) {
    if (r.flags & 16384) {
      var l = r.updateQueue;
      if (l !== null && (l = l.stores, l !== null))
        for (var o = 0; o < l.length; o++) {
          var c = l[o], p = c.getSnapshot;
          c = c.value;
          try {
            if (!va(p(), c))
              return !1;
          } catch (d) {
            return !1;
          }
        }
    }
    if (l = r.child, r.subtreeFlags & 16384 && l !== null)
      l.return = r, r = l;
    else {
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return !0;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
  }
  return !0;
}
function yl(n, r) {
  for (r &= ~mC, r &= ~Oh, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
    var l = 31 - da(r), o = 1 << l;
    n[l] = -1, r &= ~o;
  }
}
function nD(n) {
  if (Je & 6)
    throw Error(X(327));
  us();
  var r = eh(n, 0);
  if (!(r & 1))
    return or(n, jt()), null;
  var l = gh(n, r);
  if (n.tag !== 0 && l === 2) {
    var o = eE(n);
    o !== 0 && (r = o, l = _E(n, o));
  }
  if (l === 1)
    throw l = qf, bu(n, 0), yl(n, r), or(n, jt()), l;
  if (l === 6)
    throw Error(X(345));
  return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ru(n, ar, Ti), or(n, jt()), null;
}
function gC(n, r) {
  var l = Je;
  Je |= 1;
  try {
    return n(r);
  } finally {
    Je = l, Je === 0 && (vs = jt() + 500, bh && Nl());
  }
}
function Lu(n) {
  Sl !== null && Sl.tag === 0 && !(Je & 6) && us();
  var r = Je;
  Je |= 1;
  var l = Fr.transition, o = ct;
  try {
    if (Fr.transition = null, ct = 1, n)
      return n();
  } finally {
    ct = o, Fr.transition = l, Je = r, !(Je & 6) && Nl();
  }
}
function SC() {
  Sr = ts.current, wt(ts);
}
function bu(n, r) {
  n.finishedWork = null, n.finishedLanes = 0;
  var l = n.timeoutHandle;
  if (l !== -1 && (n.timeoutHandle = -1, I4(l)), Bt !== null)
    for (l = Bt.return; l !== null; ) {
      var o = l;
      switch (JE(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && ih();
          break;
        case 3:
          ds(), wt(lr), wt(Un), oC();
          break;
        case 5:
          uC(o);
          break;
        case 4:
          ds();
          break;
        case 13:
          wt(kt);
          break;
        case 19:
          wt(kt);
          break;
        case 10:
          rC(o.type._context);
          break;
        case 22:
        case 23:
          SC();
      }
      l = l.return;
    }
  if (sn = n, Bt = n = Dl(n.current, null), Cn = Sr = r, en = 0, qf = null, mC = Oh = Mu = 0, ar = Lf = null, xu !== null) {
    for (r = 0; r < xu.length; r++)
      if (l = xu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, p = l.pending;
        if (p !== null) {
          var d = p.next;
          p.next = c, o.next = d;
        }
        l.pending = o;
      }
    xu = null;
  }
  return n;
}
function Sk(n, r) {
  do {
    var l = Bt;
    try {
      if (nC(), $v.current = vh, ph) {
        for (var o = Ot.memoizedState; o !== null; ) {
          var c = o.queue;
          c !== null && (c.pending = null), o = o.next;
        }
        ph = !1;
      }
      if (Ou = 0, on = Jt = Ot = null, Of = !1, Gf = 0, hC.current = null, l === null || l.return === null) {
        en = 1, qf = r, Bt = null;
        break;
      }
      e: {
        var p = n, d = l.return, S = l, E = r;
        if (r = Cn, S.flags |= 32768, E !== null && typeof E == "object" && typeof E.then == "function") {
          var x = E, j = S, L = j.tag;
          if (!(j.mode & 1) && (L === 0 || L === 11 || L === 15)) {
            var M = j.alternate;
            M ? (j.updateQueue = M.updateQueue, j.memoizedState = M.memoizedState, j.lanes = M.lanes) : (j.updateQueue = null, j.memoizedState = null);
          }
          var F = Bb(d);
          if (F !== null) {
            F.flags &= -257, Ib(F, d, S, p, r), F.mode & 1 && Vb(p, x, r), r = F, E = x;
            var Y = r.updateQueue;
            if (Y === null) {
              var re = /* @__PURE__ */ new Set();
              re.add(E), r.updateQueue = re;
            } else
              Y.add(E);
            break e;
          } else {
            if (!(r & 1)) {
              Vb(p, x, r), EC();
              break e;
            }
            E = Error(X(426));
          }
        } else if (bt && S.mode & 1) {
          var Ne = Bb(d);
          if (Ne !== null) {
            !(Ne.flags & 65536) && (Ne.flags |= 256), Ib(Ne, d, S, p, r), eC(ps(E, S));
            break e;
          }
        }
        p = E = ps(E, S), en !== 4 && (en = 2), Lf === null ? Lf = [p] : Lf.push(p), p = d;
        do {
          switch (p.tag) {
            case 3:
              p.flags |= 65536, r &= -r, p.lanes |= r;
              var _ = nk(p, E, r);
              Ub(p, _);
              break e;
            case 1:
              S = E;
              var R = p.type, b = p.stateNode;
              if (!(p.flags & 128) && (typeof R.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (wl === null || !wl.has(b)))) {
                p.flags |= 65536, r &= -r, p.lanes |= r;
                var B = rk(p, S, r);
                Ub(p, B);
                break e;
              }
          }
          p = p.return;
        } while (p !== null);
      }
      Rk(l);
    } catch (I) {
      r = I, Bt === l && l !== null && (Bt = l = l.return);
      continue;
    }
    break;
  } while (1);
}
function Ek() {
  var n = hh.current;
  return hh.current = vh, n === null ? vh : n;
}
function EC() {
  (en === 0 || en === 3 || en === 2) && (en = 4), sn === null || !(Mu & 268435455) && !(Oh & 268435455) || yl(sn, Cn);
}
function gh(n, r) {
  var l = Je;
  Je |= 2;
  var o = Ek();
  (sn !== n || Cn !== r) && (Ti = null, bu(n, r));
  do
    try {
      hP();
      break;
    } catch (c) {
      Sk(n, c);
    }
  while (1);
  if (nC(), Je = l, hh.current = o, Bt !== null)
    throw Error(X(261));
  return sn = null, Cn = 0, en;
}
function hP() {
  for (; Bt !== null; )
    Ck(Bt);
}
function mP() {
  for (; Bt !== null && !$H(); )
    Ck(Bt);
}
function Ck(n) {
  var r = xk(n.alternate, n, Sr);
  n.memoizedProps = n.pendingProps, r === null ? Rk(n) : Bt = r, hC.current = null;
}
function Rk(n) {
  var r = n;
  do {
    var l = r.alternate;
    if (n = r.return, r.flags & 32768) {
      if (l = sP(l, r), l !== null) {
        l.flags &= 32767, Bt = l;
        return;
      }
      if (n !== null)
        n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
      else {
        en = 6, Bt = null;
        return;
      }
    } else if (l = oP(l, r, Sr), l !== null) {
      Bt = l;
      return;
    }
    if (r = r.sibling, r !== null) {
      Bt = r;
      return;
    }
    Bt = r = n;
  } while (r !== null);
  en === 0 && (en = 5);
}
function Ru(n, r, l) {
  var o = ct, c = Fr.transition;
  try {
    Fr.transition = null, ct = 1, yP(n, r, l, o);
  } finally {
    Fr.transition = c, ct = o;
  }
  return null;
}
function yP(n, r, l, o) {
  do
    us();
  while (Sl !== null);
  if (Je & 6)
    throw Error(X(327));
  l = n.finishedWork;
  var c = n.finishedLanes;
  if (l === null)
    return null;
  if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
    throw Error(X(177));
  n.callbackNode = null, n.callbackPriority = 0;
  var p = l.lanes | l.childLanes;
  if (qH(n, p), n === sn && (Bt = sn = null, Cn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || zv || (zv = !0, wk(Jv, function() {
    return us(), null;
  })), p = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || p) {
    p = Fr.transition, Fr.transition = null;
    var d = ct;
    ct = 1;
    var S = Je;
    Je |= 4, hC.current = null, fP(n, l), mk(l, n), j4(lE), th = !!iE, lE = iE = null, n.current = l, dP(l), VH(), Je = S, ct = d, Fr.transition = p;
  } else
    n.current = l;
  if (zv && (zv = !1, Sl = n, yh = c), p = n.pendingLanes, p === 0 && (wl = null), YH(l.stateNode), or(n, jt()), r !== null)
    for (o = n.onRecoverableError, l = 0; l < r.length; l++)
      c = r[l], o(c.value, {
        componentStack: c.stack,
        digest: c.digest
      });
  if (mh)
    throw mh = !1, n = bE, bE = null, n;
  return yh & 1 && n.tag !== 0 && us(), p = n.pendingLanes, p & 1 ? n === DE ? Nf++ : (Nf = 0, DE = n) : Nf = 0, Nl(), null;
}
function us() {
  if (Sl !== null) {
    var n = t_(yh), r = Fr.transition, l = ct;
    try {
      if (Fr.transition = null, ct = 16 > n ? 16 : n, Sl === null)
        var o = !1;
      else {
        if (n = Sl, Sl = null, yh = 0, Je & 6)
          throw Error(X(331));
        var c = Je;
        for (Je |= 4, de = n.current; de !== null; ) {
          var p = de, d = p.child;
          if (de.flags & 16) {
            var S = p.deletions;
            if (S !== null) {
              for (var E = 0; E < S.length; E++) {
                var x = S[E];
                for (de = x; de !== null; ) {
                  var j = de;
                  switch (j.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mf(8, j, p);
                  }
                  var L = j.child;
                  if (L !== null)
                    L.return = j, de = L;
                  else
                    for (; de !== null; ) {
                      j = de;
                      var M = j.sibling, F = j.return;
                      if (pk(j), j === x) {
                        de = null;
                        break;
                      }
                      if (M !== null) {
                        M.return = F, de = M;
                        break;
                      }
                      de = F;
                    }
                }
              }
              var Y = p.alternate;
              if (Y !== null) {
                var re = Y.child;
                if (re !== null) {
                  Y.child = null;
                  do {
                    var Ne = re.sibling;
                    re.sibling = null, re = Ne;
                  } while (re !== null);
                }
              }
              de = p;
            }
          }
          if (p.subtreeFlags & 2064 && d !== null)
            d.return = p, de = d;
          else
            e:
              for (; de !== null; ) {
                if (p = de, p.flags & 2048)
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mf(9, p, p.return);
                  }
                var _ = p.sibling;
                if (_ !== null) {
                  _.return = p.return, de = _;
                  break e;
                }
                de = p.return;
              }
        }
        var R = n.current;
        for (de = R; de !== null; ) {
          d = de;
          var b = d.child;
          if (d.subtreeFlags & 2064 && b !== null)
            b.return = d, de = b;
          else
            e:
              for (d = R; de !== null; ) {
                if (S = de, S.flags & 2048)
                  try {
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        kh(9, S);
                    }
                  } catch (I) {
                    Ut(S, S.return, I);
                  }
                if (S === d) {
                  de = null;
                  break e;
                }
                var B = S.sibling;
                if (B !== null) {
                  B.return = S.return, de = B;
                  break e;
                }
                de = S.return;
              }
        }
        if (Je = c, Nl(), Ha && typeof Ha.onPostCommitFiberRoot == "function")
          try {
            Ha.onPostCommitFiberRoot(Ch, n);
          } catch (I) {
          }
        o = !0;
      }
      return o;
    } finally {
      ct = l, Fr.transition = r;
    }
  }
  return !1;
}
function rD(n, r, l) {
  r = ps(l, r), r = nk(n, r, 1), n = xl(n, r, 1), r = Yn(), n !== null && (ed(n, 1, r), or(n, r));
}
function Ut(n, r, l) {
  if (n.tag === 3)
    rD(n, n, l);
  else
    for (; r !== null; ) {
      if (r.tag === 3) {
        rD(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (wl === null || !wl.has(o))) {
          n = ps(l, n), n = rk(r, n, 1), r = xl(r, n, 1), n = Yn(), r !== null && (ed(r, 1, n), or(r, n));
          break;
        }
      }
      r = r.return;
    }
}
function gP(n, r, l) {
  var o = n.pingCache;
  o !== null && o.delete(r), r = Yn(), n.pingedLanes |= n.suspendedLanes & l, sn === n && (Cn & l) === l && (en === 4 || en === 3 && (Cn & 130023424) === Cn && 500 > jt() - yC ? bu(n, 0) : mC |= l), or(n, r);
}
function Tk(n, r) {
  r === 0 && (n.mode & 1 ? (r = xv, xv <<= 1, !(xv & 130023424) && (xv = 4194304)) : r = 1);
  var l = Yn();
  n = Oi(n, r), n !== null && (ed(n, r, l), or(n, l));
}
function SP(n) {
  var r = n.memoizedState, l = 0;
  r !== null && (l = r.retryLane), Tk(n, l);
}
function EP(n, r) {
  var l = 0;
  switch (n.tag) {
    case 13:
      var o = n.stateNode, c = n.memoizedState;
      c !== null && (l = c.retryLane);
      break;
    case 19:
      o = n.stateNode;
      break;
    default:
      throw Error(X(314));
  }
  o !== null && o.delete(r), Tk(n, l);
}
var xk;
xk = function(n, r, l) {
  if (n !== null)
    if (n.memoizedProps !== r.pendingProps || lr.current)
      ir = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128))
        return ir = !1, uP(n, r, l);
      ir = !!(n.flags & 131072);
    }
  else
    ir = !1, bt && r.flags & 1048576 && D_(r, oh, r.index);
  switch (r.lanes = 0, r.tag) {
    case 2:
      var o = r.type;
      Bv(n, r), n = r.pendingProps;
      var c = ss(r, Un.current);
      ls(r, l), c = cC(null, r, o, n, c, l);
      var p = fC();
      return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, ur(o) ? (p = !0, lh(r)) : p = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, iC(r), c.updater = Dh, r.stateNode = c, c._reactInternals = r, hE(r, o, n, l), r = gE(null, r, o, !0, p, l)) : (r.tag = 0, bt && p && ZE(r), In(null, r, c, l), r = r.child), r;
    case 16:
      o = r.elementType;
      e: {
        switch (Bv(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = RP(o), n = oa(o, n), c) {
          case 0:
            r = yE(null, r, o, n, l);
            break e;
          case 1:
            r = Wb(null, r, o, n, l);
            break e;
          case 11:
            r = Yb(null, r, o, n, l);
            break e;
          case 14:
            r = Qb(null, r, o, oa(o.type, n), l);
            break e;
        }
        throw Error(X(306, o, ""));
      }
      return r;
    case 0:
      return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : oa(o, c), yE(n, r, o, c, l);
    case 1:
      return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : oa(o, c), Wb(n, r, o, c, l);
    case 3:
      e: {
        if (uk(r), n === null)
          throw Error(X(387));
        o = r.pendingProps, p = r.memoizedState, c = p.element, M_(n, r), fh(r, o, null, l);
        var d = r.memoizedState;
        if (o = d.element, p.isDehydrated)
          if (p = {
            element: o,
            isDehydrated: !1,
            cache: d.cache,
            pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
            transitions: d.transitions
          }, r.updateQueue.baseState = p, r.memoizedState = p, r.flags & 256) {
            c = ps(Error(X(423)), r), r = Gb(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = ps(Error(X(424)), r), r = Gb(n, r, o, l, c);
            break e;
          } else
            for (Er = Tl(r.stateNode.containerInfo.firstChild), Cr = r, bt = !0, fa = null, l = U_(r, null, o, l), r.child = l; l; )
              l.flags = l.flags & -3 | 4096, l = l.sibling;
        else {
          if (cs(), o === c) {
            r = Mi(n, r, l);
            break e;
          }
          In(n, r, o, l);
        }
        r = r.child;
      }
      return r;
    case 5:
      return A_(r), n === null && dE(r), o = r.type, c = r.pendingProps, p = n !== null ? n.memoizedProps : null, d = c.children, uE(o, c) ? d = null : p !== null && uE(o, p) && (r.flags |= 32), lk(n, r), In(n, r, d, l), r.child;
    case 6:
      return n === null && dE(r), null;
    case 13:
      return ok(n, r, l);
    case 4:
      return lC(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = fs(r, null, o, l) : In(n, r, o, l), r.child;
    case 11:
      return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : oa(o, c), Yb(n, r, o, c, l);
    case 7:
      return In(n, r, r.pendingProps, l), r.child;
    case 8:
      return In(n, r, r.pendingProps.children, l), r.child;
    case 12:
      return In(n, r, r.pendingProps.children, l), r.child;
    case 10:
      e: {
        if (o = r.type._context, c = r.pendingProps, p = r.memoizedProps, d = c.value, yt(sh, o._currentValue), o._currentValue = d, p !== null)
          if (va(p.value, d)) {
            if (p.children === c.children && !lr.current) {
              r = Mi(n, r, l);
              break e;
            }
          } else
            for (p = r.child, p !== null && (p.return = r); p !== null; ) {
              var S = p.dependencies;
              if (S !== null) {
                d = p.child;
                for (var E = S.firstContext; E !== null; ) {
                  if (E.context === o) {
                    if (p.tag === 1) {
                      E = Di(-1, l & -l), E.tag = 2;
                      var x = p.updateQueue;
                      if (x !== null) {
                        x = x.shared;
                        var j = x.pending;
                        j === null ? E.next = E : (E.next = j.next, j.next = E), x.pending = E;
                      }
                    }
                    p.lanes |= l, E = p.alternate, E !== null && (E.lanes |= l), pE(p.return, l, r), S.lanes |= l;
                    break;
                  }
                  E = E.next;
                }
              } else if (p.tag === 10)
                d = p.type === r.type ? null : p.child;
              else if (p.tag === 18) {
                if (d = p.return, d === null)
                  throw Error(X(341));
                d.lanes |= l, S = d.alternate, S !== null && (S.lanes |= l), pE(d, l, r), d = p.sibling;
              } else
                d = p.child;
              if (d !== null)
                d.return = p;
              else
                for (d = p; d !== null; ) {
                  if (d === r) {
                    d = null;
                    break;
                  }
                  if (p = d.sibling, p !== null) {
                    p.return = d.return, d = p;
                    break;
                  }
                  d = d.return;
                }
              p = d;
            }
        In(n, r, c.children, l), r = r.child;
      }
      return r;
    case 9:
      return c = r.type, o = r.pendingProps.children, ls(r, l), c = Hr(c), o = o(c), r.flags |= 1, In(n, r, o, l), r.child;
    case 14:
      return o = r.type, c = oa(o, r.pendingProps), c = oa(o.type, c), Qb(n, r, o, c, l);
    case 15:
      return ak(n, r, r.type, r.pendingProps, l);
    case 17:
      return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : oa(o, c), Bv(n, r), r.tag = 1, ur(o) ? (n = !0, lh(r)) : n = !1, ls(r, l), N_(r, o, c), hE(r, o, c, l), gE(null, r, o, !0, n, l);
    case 19:
      return sk(n, r, l);
    case 22:
      return ik(n, r, l);
  }
  throw Error(X(156, r.tag));
};
function wk(n, r) {
  return qD(n, r);
}
function CP(n, r, l, o) {
  this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function jr(n, r, l, o) {
  return new CP(n, r, l, o);
}
function CC(n) {
  return n = n.prototype, !(!n || !n.isReactComponent);
}
function RP(n) {
  if (typeof n == "function")
    return CC(n) ? 1 : 0;
  if (n != null) {
    if (n = n.$$typeof, n === PE)
      return 11;
    if (n === $E)
      return 14;
  }
  return 2;
}
function Dl(n, r) {
  var l = n.alternate;
  return l === null ? (l = jr(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : {
    lanes: r.lanes,
    firstContext: r.firstContext
  }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
}
function Qv(n, r, l, o, c, p) {
  var d = 2;
  if (o = n, typeof n == "function")
    CC(n) && (d = 1);
  else if (typeof n == "string")
    d = 5;
  else
    e:
      switch (n) {
        case Yo:
          return Du(l.children, c, p, r);
        case HE:
          d = 8, c |= 8;
          break;
        case H0:
          return n = jr(12, l, r, c | 2), n.elementType = H0, n.lanes = p, n;
        case P0:
          return n = jr(13, l, r, c), n.elementType = P0, n.lanes = p, n;
        case $0:
          return n = jr(19, l, r, c), n.elementType = $0, n.lanes = p, n;
        case zD:
          return Mh(l, c, p, r);
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case LD:
                d = 10;
                break e;
              case ND:
                d = 9;
                break e;
              case PE:
                d = 11;
                break e;
              case $E:
                d = 14;
                break e;
              case vl:
                d = 16, o = null;
                break e;
            }
          throw Error(X(130, n == null ? n : typeof n, ""));
      }
  return r = jr(d, l, r, c), r.elementType = n, r.type = o, r.lanes = p, r;
}
function Du(n, r, l, o) {
  return n = jr(7, n, o, r), n.lanes = l, n;
}
function Mh(n, r, l, o) {
  return n = jr(22, n, o, r), n.elementType = zD, n.lanes = l, n.stateNode = {
    isHidden: !1
  }, n;
}
function b0(n, r, l) {
  return n = jr(6, n, null, r), n.lanes = l, n;
}
function D0(n, r, l) {
  return r = jr(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = {
    containerInfo: n.containerInfo,
    pendingChildren: null,
    implementation: n.implementation
  }, r;
}
function TP(n, r, l, o, c) {
  this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = u0(0), this.expirationTimes = u0(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = u0(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
}
function RC(n, r, l, o, c, p, d, S, E) {
  return n = new TP(n, r, l, S, E), r === 1 ? (r = 1, p === !0 && (r |= 8)) : r = 0, p = jr(3, null, null, r), n.current = p, p.stateNode = n, p.memoizedState = {
    element: o,
    isDehydrated: l,
    cache: null,
    transitions: null,
    pendingSuspenseBoundaries: null
  }, iC(p), n;
}
function xP(n, r, l) {
  var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Io,
    key: o == null ? null : "" + o,
    children: n,
    containerInfo: r,
    implementation: l
  };
}
function bk(n) {
  if (!n)
    return kl;
  n = n._reactInternals;
  e: {
    if (Au(n) !== n || n.tag !== 1)
      throw Error(X(170));
    var r = n;
    do {
      switch (r.tag) {
        case 3:
          r = r.stateNode.context;
          break e;
        case 1:
          if (ur(r.type)) {
            r = r.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      r = r.return;
    } while (r !== null);
    throw Error(X(171));
  }
  if (n.tag === 1) {
    var l = n.type;
    if (ur(l))
      return w_(n, l, r);
  }
  return r;
}
function Dk(n, r, l, o, c, p, d, S, E) {
  return n = RC(l, o, !0, n, c, p, d, S, E), n.context = bk(null), l = n.current, o = Yn(), c = bl(l), p = Di(o, c), p.callback = r != null ? r : null, xl(l, p, c), n.current.lanes = c, ed(n, c, o), or(n, o), n;
}
function Lh(n, r, l, o) {
  var c = r.current, p = Yn(), d = bl(c);
  return l = bk(l), r.context === null ? r.context = l : r.pendingContext = l, r = Di(p, d), r.payload = {
    element: n
  }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = xl(c, r, d), n !== null && (pa(n, c, d, p), Pv(n, c, d)), d;
}
function Sh(n) {
  if (n = n.current, !n.child)
    return null;
  switch (n.child.tag) {
    case 5:
      return n.child.stateNode;
    default:
      return n.child.stateNode;
  }
}
function aD(n, r) {
  if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
    var l = n.retryLane;
    n.retryLane = l !== 0 && l < r ? l : r;
  }
}
function TC(n, r) {
  aD(n, r), (n = n.alternate) && aD(n, r);
}
function wP() {
  return null;
}
var _k = typeof reportError == "function" ? reportError : function(n) {
  console.error(n);
};
function xC(n) {
  this._internalRoot = n;
}
Nh.prototype.render = xC.prototype.render = function(n) {
  var r = this._internalRoot;
  if (r === null)
    throw Error(X(409));
  Lh(n, r, null, null);
};
Nh.prototype.unmount = xC.prototype.unmount = function() {
  var n = this._internalRoot;
  if (n !== null) {
    this._internalRoot = null;
    var r = n.containerInfo;
    Lu(function() {
      Lh(null, n, null, null);
    }), r[ki] = null;
  }
};
function Nh(n) {
  this._internalRoot = n;
}
Nh.prototype.unstable_scheduleHydration = function(n) {
  if (n) {
    var r = a_();
    n = {
      blockedOn: null,
      target: n,
      priority: r
    };
    for (var l = 0; l < ml.length && r !== 0 && r < ml[l].priority; l++)
      ;
    ml.splice(l, 0, n), l === 0 && l_(n);
  }
};
function wC(n) {
  return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
}
function zh(n) {
  return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
}
function iD() {
}
function bP(n, r, l, o, c) {
  if (c) {
    if (typeof o == "function") {
      var p = o;
      o = function() {
        var x = Sh(d);
        p.call(x);
      };
    }
    var d = Dk(r, o, n, 0, null, !1, !1, "", iD);
    return n._reactRootContainer = d, n[ki] = d.current, Bf(n.nodeType === 8 ? n.parentNode : n), Lu(), d;
  }
  for (; c = n.lastChild; )
    n.removeChild(c);
  if (typeof o == "function") {
    var S = o;
    o = function() {
      var x = Sh(E);
      S.call(x);
    };
  }
  var E = RC(n, 0, !1, null, null, !1, !1, "", iD);
  return n._reactRootContainer = E, n[ki] = E.current, Bf(n.nodeType === 8 ? n.parentNode : n), Lu(function() {
    Lh(r, E, l, o);
  }), E;
}
function Uh(n, r, l, o, c) {
  var p = l._reactRootContainer;
  if (p) {
    var d = p;
    if (typeof c == "function") {
      var S = c;
      c = function() {
        var E = Sh(d);
        S.call(E);
      };
    }
    Lh(r, d, n, c);
  } else
    d = bP(l, r, n, c, o);
  return Sh(d);
}
n_ = function(n) {
  switch (n.tag) {
    case 3:
      var r = n.stateNode;
      if (r.current.memoizedState.isDehydrated) {
        var l = Tf(r.pendingLanes);
        l !== 0 && (IE(r, l | 1), or(r, jt()), !(Je & 6) && (vs = jt() + 500, Nl()));
      }
      break;
    case 13:
      Lu(function() {
        var o = Oi(n, 1);
        if (o !== null) {
          var c = Yn();
          pa(o, n, 1, c);
        }
      }), TC(n, 1);
  }
};
YE = function(n) {
  if (n.tag === 13) {
    var r = Oi(n, 134217728);
    if (r !== null) {
      var l = Yn();
      pa(r, n, 134217728, l);
    }
    TC(n, 134217728);
  }
};
r_ = function(n) {
  if (n.tag === 13) {
    var r = bl(n), l = Oi(n, r);
    if (l !== null) {
      var o = Yn();
      pa(l, n, r, o);
    }
    TC(n, r);
  }
};
a_ = function() {
  return ct;
};
i_ = function(n, r) {
  var l = ct;
  try {
    return ct = n, r();
  } finally {
    ct = l;
  }
};
q0 = function(n, r, l) {
  switch (r) {
    case "input":
      if (I0(n, l), r = l.name, l.type === "radio" && r != null) {
        for (l = n; l.parentNode; )
          l = l.parentNode;
        for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
          var o = l[r];
          if (o !== n && o.form === n.form) {
            var c = wh(o);
            if (!c)
              throw Error(X(90));
            AD(o), I0(o, c);
          }
        }
      }
      break;
    case "textarea":
      FD(n, l);
      break;
    case "select":
      r = l.value, r != null && ns(n, !!l.multiple, r, !1);
  }
};
YD = gC;
QD = Lu;
var DP = {
  usingClientEntryPoint: !1,
  Events: [nd, Xo, wh, BD, ID, gC]
}, gf = {
  findFiberByHostInstance: Tu,
  bundleType: 0,
  version: "18.2.0",
  rendererPackageName: "react-dom"
}, _P = {
  bundleType: gf.bundleType,
  version: gf.version,
  rendererPackageName: gf.rendererPackageName,
  rendererConfig: gf.rendererConfig,
  overrideHookState: null,
  overrideHookStateDeletePath: null,
  overrideHookStateRenamePath: null,
  overrideProps: null,
  overridePropsDeletePath: null,
  overridePropsRenamePath: null,
  setErrorHandler: null,
  setSuspenseHandler: null,
  scheduleUpdate: null,
  currentDispatcherRef: Li.ReactCurrentDispatcher,
  findHostInstanceByFiber: function(n) {
    return n = XD(n), n === null ? null : n.stateNode;
  },
  findFiberByHostInstance: gf.findFiberByHostInstance || wP,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null,
  reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
  var Uv = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Uv.isDisabled && Uv.supportsFiber)
    try {
      Ch = Uv.inject(_P), Ha = Uv;
    } catch (n) {
    }
}
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = DP;
exports.createPortal = function(n, r) {
  var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!wC(r))
    throw Error(X(200));
  return xP(n, r, null, l);
};
exports.createRoot = function(n, r) {
  if (!wC(n))
    throw Error(X(299));
  var l = !1, o = "", c = _k;
  return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = RC(n, 1, !1, null, null, l, !1, o, c), n[ki] = r.current, Bf(n.nodeType === 8 ? n.parentNode : n), new xC(r);
};
exports.findDOMNode = function(n) {
  if (n == null)
    return null;
  if (n.nodeType === 1)
    return n;
  var r = n._reactInternals;
  if (r === void 0)
    throw typeof n.render == "function" ? Error(X(188)) : (n = Object.keys(n).join(","), Error(X(268, n)));
  return n = XD(r), n = n === null ? null : n.stateNode, n;
};
exports.flushSync = function(n) {
  return Lu(n);
};
exports.hydrate = function(n, r, l) {
  if (!zh(r))
    throw Error(X(200));
  return Uh(null, n, r, !0, l);
};
exports.hydrateRoot = function(n, r, l) {
  if (!wC(n))
    throw Error(X(405));
  var o = l != null && l.hydratedSources || null, c = !1, p = "", d = _k;
  if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (p = l.identifierPrefix), l.onRecoverableError !== void 0 && (d = l.onRecoverableError)), r = Dk(r, null, n, 1, l != null ? l : null, c, !1, p, d), n[ki] = r.current, Bf(n), o)
    for (n = 0; n < o.length; n++)
      l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(l, c);
  return new Nh(r);
};
exports.render = function(n, r, l) {
  if (!zh(r))
    throw Error(X(200));
  return Uh(null, n, r, !1, l);
};
exports.unmountComponentAtNode = function(n) {
  if (!zh(n))
    throw Error(X(40));
  return n._reactRootContainer ? (Lu(function() {
    Uh(null, null, n, !1, function() {
      n._reactRootContainer = null, n[ki] = null;
    });
  }), !0) : !1;
};
exports.unstable_batchedUpdates = gC;
exports.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
  if (!zh(l))
    throw Error(X(200));
  if (n == null || n._reactInternals === void 0)
    throw Error(X(38));
  return Uh(n, r, l, !1, o);
};
exports.version = "18.2.0-next-9e3b772b8-20220608";
const kP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), OP = /* @__PURE__ */ uD(kP);
process.env.NODE_ENV !== "production" && function() {
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
  var n = require("react"), r = require("scheduler"), l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, o = !1;
  function c(e) {
    o = e;
  }
  function p(e) {
    if (!o) {
      for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
        a[i - 1] = arguments[i];
      S("warn", e, a);
    }
  }
  function d(e) {
    if (!o) {
      for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
        a[i - 1] = arguments[i];
      S("error", e, a);
    }
  }
  function S(e, t, a) {
    {
      var i = l.ReactDebugCurrentFrame, u = i.getStackAddendum();
      u !== "" && (t += "%s", a = a.concat([u]));
      var s = a.map(function(f) {
        return String(f);
      });
      s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
    }
  }
  var E = 0, x = 1, j = 2, L = 3, M = 4, F = 5, Y = 6, re = 7, Ne = 8, _ = 9, R = 10, b = 11, B = 12, I = 13, te = 14, K = 15, pe = 16, Qe = 17, xe = 18, nt = 19, Z = 21, Te = 22, Ue = 23, ht = 24, Lt = 25, me = !0, Ft = !1, Wn = !1, N = !1, ee = !1, ke = !0, Ie = !1, Ae = !1, ot = !0, st = !0, rt = !0, et = /* @__PURE__ */ new Set(), ft = {}, xr = {};
  function $r(e, t) {
    Vr(e, t), Vr(e + "Capture", t);
  }
  function Vr(e, t) {
    ft[e] && d("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ft[e] = t;
    {
      var a = e.toLowerCase();
      xr[a] = e, e === "onDoubleClick" && (xr.ondblclick = e);
    }
    for (var i = 0; i < t.length; i++)
      et.add(t[i]);
  }
  var tn = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined", Br = Object.prototype.hasOwnProperty;
  function sr(e) {
    {
      var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
      return a;
    }
  }
  function Gn(e) {
    try {
      return An(e), !1;
    } catch (t) {
      return !0;
    }
  }
  function An(e) {
    return "" + e;
  }
  function ha(e, t) {
    if (Gn(e))
      return d("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, sr(e)), An(e);
  }
  function Va(e) {
    if (Gn(e))
      return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(e)), An(e);
  }
  function wr(e, t) {
    if (Gn(e))
      return d("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, sr(e)), An(e);
  }
  function Ba(e, t) {
    if (Gn(e))
      return d("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, sr(e)), An(e);
  }
  function Ni(e) {
    if (Gn(e))
      return d("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", sr(e)), An(e);
  }
  function Ia(e) {
    if (Gn(e))
      return d("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", sr(e)), An(e);
  }
  var Ya = 0, Xn = 1, Qa = 2, cn = 3, Wa = 4, zl = 5, Ul = 6, ma = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ga = ma + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ys = new RegExp("^[" + ma + "][" + Ga + "]*$"), ju = {}, Ir = {};
  function Al(e) {
    return Br.call(Ir, e) ? !0 : Br.call(ju, e) ? !1 : ys.test(e) ? (Ir[e] = !0, !0) : (ju[e] = !0, d("Invalid attribute name: `%s`", e), !1);
  }
  function Fu(e, t, a) {
    return t !== null ? t.type === Ya : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
  }
  function jl(e, t, a, i) {
    if (a !== null && a.type === Ya)
      return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean": {
        if (i)
          return !1;
        if (a !== null)
          return !a.acceptsBooleans;
        var u = e.toLowerCase().slice(0, 5);
        return u !== "data-" && u !== "aria-";
      }
      default:
        return !1;
    }
  }
  function br(e, t, a, i) {
    if (t === null || typeof t == "undefined" || jl(e, t, a, i))
      return !0;
    if (i)
      return !1;
    if (a !== null)
      switch (a.type) {
        case cn:
          return !t;
        case Wa:
          return t === !1;
        case zl:
          return isNaN(t);
        case Ul:
          return isNaN(t) || t < 1;
      }
    return !1;
  }
  function zi(e) {
    return St.hasOwnProperty(e) ? St[e] : null;
  }
  function gt(e, t, a, i, u, s, f) {
    this.acceptsBooleans = t === Qa || t === cn || t === Wa, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
  }
  var St = {}, ya = [
    "children",
    "dangerouslySetInnerHTML",
    // TODO: This prevents the assignment of defaultValue to regular
    // elements (not just inputs). Now that ReactDOMInput assigns to the
    // defaultValue property -- do we need this?
    "defaultValue",
    "defaultChecked",
    "innerHTML",
    "suppressContentEditableWarning",
    "suppressHydrationWarning",
    "style"
  ];
  ya.forEach(function(e) {
    St[e] = new gt(
      e,
      Ya,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0], a = e[1];
    St[t] = new gt(
      t,
      Xn,
      !1,
      // mustUseProperty
      a,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    St[e] = new gt(
      e,
      Qa,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    St[e] = new gt(
      e,
      Qa,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "allowFullScreen",
    "async",
    // Note: there is a special case that prevents it from being written to the DOM
    // on the client side because the browsers are inconsistent. Instead we call focus().
    "autoFocus",
    "autoPlay",
    "controls",
    "default",
    "defer",
    "disabled",
    "disablePictureInPicture",
    "disableRemotePlayback",
    "formNoValidate",
    "hidden",
    "loop",
    "noModule",
    "noValidate",
    "open",
    "playsInline",
    "readOnly",
    "required",
    "reversed",
    "scoped",
    "seamless",
    // Microdata
    "itemScope"
  ].forEach(function(e) {
    St[e] = new gt(
      e,
      cn,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "checked",
    // Note: `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`. We have special logic for handling this.
    "multiple",
    "muted",
    "selected"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    St[e] = new gt(
      e,
      cn,
      !0,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "capture",
    "download"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    St[e] = new gt(
      e,
      Wa,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "cols",
    "rows",
    "size",
    "span"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    St[e] = new gt(
      e,
      Ul,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["rowSpan", "start"].forEach(function(e) {
    St[e] = new gt(
      e,
      zl,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  });
  var Yr = /[\-\:]([a-z])/g, Fl = function(e) {
    return e[1].toUpperCase();
  };
  [
    "accent-height",
    "alignment-baseline",
    "arabic-form",
    "baseline-shift",
    "cap-height",
    "clip-path",
    "clip-rule",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "dominant-baseline",
    "enable-background",
    "fill-opacity",
    "fill-rule",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "glyph-name",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "horiz-adv-x",
    "horiz-origin-x",
    "image-rendering",
    "letter-spacing",
    "lighting-color",
    "marker-end",
    "marker-mid",
    "marker-start",
    "overline-position",
    "overline-thickness",
    "paint-order",
    "panose-1",
    "pointer-events",
    "rendering-intent",
    "shape-rendering",
    "stop-color",
    "stop-opacity",
    "strikethrough-position",
    "strikethrough-thickness",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "underline-position",
    "underline-thickness",
    "unicode-bidi",
    "unicode-range",
    "units-per-em",
    "v-alphabetic",
    "v-hanging",
    "v-ideographic",
    "v-mathematical",
    "vector-effect",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "word-spacing",
    "writing-mode",
    "xmlns:xlink",
    "x-height"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    var t = e.replace(Yr, Fl);
    St[t] = new gt(
      t,
      Xn,
      !1,
      // mustUseProperty
      e,
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "xlink:actuate",
    "xlink:arcrole",
    "xlink:role",
    "xlink:show",
    "xlink:title",
    "xlink:type"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    var t = e.replace(Yr, Fl);
    St[t] = new gt(
      t,
      Xn,
      !1,
      // mustUseProperty
      e,
      "http://www.w3.org/1999/xlink",
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "xml:base",
    "xml:lang",
    "xml:space"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    var t = e.replace(Yr, Fl);
    St[t] = new gt(
      t,
      Xn,
      !1,
      // mustUseProperty
      e,
      "http://www.w3.org/XML/1998/namespace",
      !1,
      // sanitizeURL
      !1
    );
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    St[e] = new gt(
      e,
      Xn,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  });
  var Hu = "xlinkHref";
  St[Hu] = new gt(
    "xlinkHref",
    Xn,
    !1,
    // mustUseProperty
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    // sanitizeURL
    !1
  ), ["src", "href", "action", "formAction"].forEach(function(e) {
    St[e] = new gt(
      e,
      Xn,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !0,
      // sanitizeURL
      !0
    );
  });
  var gs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Hl = !1;
  function Pl(e) {
    !Hl && gs.test(e) && (Hl = !0, d("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
  }
  function Xa(e, t, a, i) {
    if (i.mustUseProperty) {
      var u = i.propertyName;
      return e[u];
    } else {
      ha(a, t), i.sanitizeURL && Pl("" + a);
      var s = i.attributeName, f = null;
      if (i.type === Wa) {
        if (e.hasAttribute(s)) {
          var v = e.getAttribute(s);
          return v === "" ? !0 : br(t, a, i, !1) ? v : v === "" + a ? a : v;
        }
      } else if (e.hasAttribute(s)) {
        if (br(t, a, i, !1))
          return e.getAttribute(s);
        if (i.type === cn)
          return a;
        f = e.getAttribute(s);
      }
      return br(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
    }
  }
  function Ui(e, t, a, i) {
    {
      if (!Al(t))
        return;
      if (!e.hasAttribute(t))
        return a === void 0 ? void 0 : null;
      var u = e.getAttribute(t);
      return ha(a, t), u === "" + a ? a : u;
    }
  }
  function Ka(e, t, a, i) {
    var u = zi(t);
    if (!Fu(t, u, i)) {
      if (br(t, a, u, i) && (a = null), i || u === null) {
        if (Al(t)) {
          var s = t;
          a === null ? e.removeAttribute(s) : (ha(a, t), e.setAttribute(s, "" + a));
        }
        return;
      }
      var f = u.mustUseProperty;
      if (f) {
        var v = u.propertyName;
        if (a === null) {
          var h = u.type;
          e[v] = h === cn ? !1 : "";
        } else
          e[v] = a;
        return;
      }
      var y = u.attributeName, g = u.attributeNamespace;
      if (a === null)
        e.removeAttribute(y);
      else {
        var D = u.type, w;
        D === cn || D === Wa && a === !0 ? w = "" : (ha(a, y), w = "" + a, u.sanitizeURL && Pl(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
      }
    }
  }
  var ga = Symbol.for("react.element"), Qr = Symbol.for("react.portal"), Sa = Symbol.for("react.fragment"), $l = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), W = Symbol.for("react.provider"), ae = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), je = Symbol.for("react.suspense"), We = Symbol.for("react.suspense_list"), Me = Symbol.for("react.memo"), ge = Symbol.for("react.lazy"), It = Symbol.for("react.scope"), Et = Symbol.for("react.debug_trace_mode"), Ct = Symbol.for("react.offscreen"), Tn = Symbol.for("react.legacy_hidden"), Ea = Symbol.for("react.cache"), Pu = Symbol.for("react.tracing_marker"), Kn = Symbol.iterator, Ah = "@@iterator";
  function qa(e) {
    if (e === null || typeof e != "object")
      return null;
    var t = Kn && e[Kn] || e[Ah];
    return typeof t == "function" ? t : null;
  }
  var Fe = Object.assign, Vl = 0, Ai, Ss, Es, Cs, Rs, Ts, xs;
  function ws() {
  }
  ws.__reactDisabledLog = !0;
  function ad() {
    {
      if (Vl === 0) {
        Ai = console.log, Ss = console.info, Es = console.warn, Cs = console.error, Rs = console.group, Ts = console.groupCollapsed, xs = console.groupEnd;
        var e = { configurable: !0, enumerable: !0, value: ws, writable: !0 };
        Object.defineProperties(console, { info: e, log: e, warn: e, error: e, group: e, groupCollapsed: e, groupEnd: e });
      }
      Vl++;
    }
  }
  function jh() {
    {
      if (Vl--, Vl === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, { log: Fe({}, e, { value: Ai }), info: Fe({}, e, { value: Ss }), warn: Fe({}, e, { value: Es }), error: Fe({}, e, { value: Cs }), group: Fe({}, e, { value: Rs }), groupCollapsed: Fe({}, e, { value: Ts }), groupEnd: Fe({}, e, { value: xs }) });
      }
      Vl < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var bs = l.ReactCurrentDispatcher, Bl;
  function Dr(e, t, a) {
    {
      if (Bl === void 0)
        try {
          throw Error();
        } catch (u) {
          var i = u.stack.trim().match(/\n( *(at )?)/);
          Bl = i && i[1] || "";
        }
      return `
` + Bl + e;
    }
  }
  var ji = !1, Fi;
  {
    var $u = typeof WeakMap == "function" ? WeakMap : Map;
    Fi = new $u();
  }
  function Ds(e, t) {
    if (!e || ji)
      return "";
    {
      var a = Fi.get(e);
      if (a !== void 0)
        return a;
    }
    var i;
    ji = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var s;
    s = bs.current, bs.current = null, ad();
    try {
      if (t) {
        var f = function() {
          throw Error();
        };
        if (Object.defineProperty(f.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(f, []);
          } catch (U) {
            i = U;
          }
          Reflect.construct(e, [], f);
        } else {
          try {
            f.call();
          } catch (U) {
            i = U;
          }
          e.call(f.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (U) {
          i = U;
        }
        e();
      }
    } catch (U) {
      if (U && i && typeof U.stack == "string") {
        for (var v = U.stack.split(`
`), h = i.stack.split(`
`), y = v.length - 1, g = h.length - 1; y >= 1 && g >= 0 && v[y] !== h[g]; )
          g--;
        for (; y >= 1 && g >= 0; y--, g--)
          if (v[y] !== h[g]) {
            if (y !== 1 || g !== 1)
              do
                if (y--, g--, g < 0 || v[y] !== h[g]) {
                  var D = `
` + v[y].replace(" at new ", " at ");
                  return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && Fi.set(e, D), D;
                }
              while (y >= 1 && g >= 0);
            break;
          }
      }
    } finally {
      ji = !1, bs.current = s, jh(), Error.prepareStackTrace = u;
    }
    var w = e ? e.displayName || e.name : "", z = w ? Dr(w) : "";
    return typeof e == "function" && Fi.set(e, z), z;
  }
  function id(e, t, a) {
    return Ds(e, !0);
  }
  function _s(e, t, a) {
    return Ds(e, !1);
  }
  function Fh(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function Hi(e, t, a) {
    if (e == null)
      return "";
    if (typeof e == "function")
      return Ds(e, Fh(e));
    if (typeof e == "string")
      return Dr(e);
    switch (e) {
      case je:
        return Dr("Suspense");
      case We:
        return Dr("SuspenseList");
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ce:
          return _s(e.render);
        case Me:
          return Hi(e.type, t, a);
        case ge: {
          var i = e, u = i._payload, s = i._init;
          try {
            return Hi(s(u), t, a);
          } catch (f) {
          }
        }
      }
    return "";
  }
  function ld(e) {
    switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
      case F:
        return Dr(e.type);
      case pe:
        return Dr("Lazy");
      case I:
        return Dr("Suspense");
      case nt:
        return Dr("SuspenseList");
      case E:
      case j:
      case K:
        return _s(e.type);
      case b:
        return _s(e.type.render);
      case x:
        return id(e.type);
      default:
        return "";
    }
  }
  function ks(e) {
    try {
      var t = "", a = e;
      do
        t += ld(a), a = a.return;
      while (a);
      return t;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  function Vu(e, t, a) {
    var i = e.displayName;
    if (i)
      return i;
    var u = t.displayName || t.name || "";
    return u !== "" ? a + "(" + u + ")" : a;
  }
  function ud(e) {
    return e.displayName || "Context";
  }
  function Ke(e) {
    if (e == null)
      return null;
    if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case Sa:
        return "Fragment";
      case Qr:
        return "Portal";
      case T:
        return "Profiler";
      case $l:
        return "StrictMode";
      case je:
        return "Suspense";
      case We:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ae:
          var t = e;
          return ud(t) + ".Consumer";
        case W:
          var a = e;
          return ud(a._context) + ".Provider";
        case ce:
          return Vu(e, e.render, "ForwardRef");
        case Me:
          var i = e.displayName || null;
          return i !== null ? i : Ke(e.type) || "Memo";
        case ge: {
          var u = e, s = u._payload, f = u._init;
          try {
            return Ke(f(s));
          } catch (v) {
            return null;
          }
        }
      }
    return null;
  }
  function Os(e, t, a) {
    var i = t.displayName || t.name || "";
    return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
  }
  function Ms(e) {
    return e.displayName || "Context";
  }
  function Oe(e) {
    var t = e.tag, a = e.type;
    switch (t) {
      case ht:
        return "Cache";
      case _:
        var i = a;
        return Ms(i) + ".Consumer";
      case R:
        var u = a;
        return Ms(u._context) + ".Provider";
      case xe:
        return "DehydratedFragment";
      case b:
        return Os(a, a.render, "ForwardRef");
      case re:
        return "Fragment";
      case F:
        return a;
      case M:
        return "Portal";
      case L:
        return "Root";
      case Y:
        return "Text";
      case pe:
        return Ke(a);
      case Ne:
        return a === $l ? "StrictMode" : "Mode";
      case Te:
        return "Offscreen";
      case B:
        return "Profiler";
      case Z:
        return "Scope";
      case I:
        return "Suspense";
      case nt:
        return "SuspenseList";
      case Lt:
        return "TracingMarker";
      case x:
      case E:
      case Qe:
      case j:
      case te:
      case K:
        if (typeof a == "function")
          return a.displayName || a.name || null;
        if (typeof a == "string")
          return a;
        break;
    }
    return null;
  }
  var od = l.ReactDebugCurrentFrame, xn = null, Il = !1;
  function Pi() {
    {
      if (xn === null)
        return null;
      var e = xn._debugOwner;
      if (e !== null && typeof e != "undefined")
        return Oe(e);
    }
    return null;
  }
  function sd() {
    return xn === null ? "" : ks(xn);
  }
  function nn() {
    od.getCurrentStack = null, xn = null, Il = !1;
  }
  function Dt(e) {
    od.getCurrentStack = e === null ? null : sd, xn = e, Il = !1;
  }
  function cd() {
    return xn;
  }
  function cr(e) {
    Il = e;
  }
  function qn(e) {
    return "" + e;
  }
  function Ca(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return Ia(e), e;
      default:
        return "";
    }
  }
  var Hh = { button: !0, checkbox: !0, image: !0, hidden: !0, radio: !0, reset: !0, submit: !0 };
  function Bu(e, t) {
    Hh[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || d("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || d("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
  }
  function Yl(e) {
    var t = e.type, a = e.nodeName;
    return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function fd(e) {
    return e._valueTracker;
  }
  function $i(e) {
    e._valueTracker = null;
  }
  function dd(e) {
    var t = "";
    return e && (Yl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
  }
  function Ph(e) {
    var t = Yl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    Ia(e[t]);
    var i = "" + e[t];
    if (!(e.hasOwnProperty(t) || typeof a == "undefined" || typeof a.get != "function" || typeof a.set != "function")) {
      var u = a.get, s = a.set;
      Object.defineProperty(e, t, { configurable: !0, get: function() {
        return u.call(this);
      }, set: function(v) {
        Ia(v), i = "" + v, s.call(this, v);
      } }), Object.defineProperty(e, t, { enumerable: a.enumerable });
      var f = { getValue: function() {
        return i;
      }, setValue: function(v) {
        Ia(v), i = "" + v;
      }, stopTracking: function() {
        $i(e), delete e[t];
      } };
      return f;
    }
  }
  function Za(e) {
    fd(e) || (e._valueTracker = Ph(e));
  }
  function Iu(e) {
    if (!e)
      return !1;
    var t = fd(e);
    if (!t)
      return !0;
    var a = t.getValue(), i = dd(e);
    return i !== a ? (t.setValue(i), !0) : !1;
  }
  function Vi(e) {
    if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined")
      return null;
    try {
      return e.activeElement || e.body;
    } catch (t) {
      return e.body;
    }
  }
  var Yu = !1, pd = !1, vd = !1, hd = !1;
  function md(e) {
    var t = e.type === "checkbox" || e.type === "radio";
    return t ? e.checked != null : e.value != null;
  }
  function m(e, t) {
    var a = e, i = t.checked, u = Fe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i != null ? i : a._wrapperState.initialChecked });
    return u;
  }
  function C(e, t) {
    Bu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !pd && (d("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Pi() || "A component", t.type), pd = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Yu && (d("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Pi() || "A component", t.type), Yu = !0);
    var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
    a._wrapperState = { initialChecked: t.checked != null ? t.checked : t.defaultChecked, initialValue: Ca(t.value != null ? t.value : i), controlled: md(t) };
  }
  function A(e, t) {
    var a = e, i = t.checked;
    i != null && Ka(a, "checked", i, !1);
  }
  function H(e, t) {
    var a = e;
    {
      var i = md(t);
      !a._wrapperState.controlled && i && !hd && (d("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), hd = !0), a._wrapperState.controlled && !i && !vd && (d("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), vd = !0);
    }
    A(e, t);
    var u = Ca(t.value), s = t.type;
    if (u != null)
      s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
      // eslint-disable-next-line
      a.value != u) && (a.value = qn(u)) : a.value !== qn(u) && (a.value = qn(u));
    else if (s === "submit" || s === "reset") {
      a.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? we(a, t.type, u) : t.hasOwnProperty("defaultValue") && we(a, t.type, Ca(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
  }
  function J(e, t, a) {
    var i = e;
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var u = t.type, s = u === "submit" || u === "reset";
      if (s && (t.value === void 0 || t.value === null))
        return;
      var f = qn(i._wrapperState.initialValue);
      a || f !== i.value && (i.value = f), i.defaultValue = f;
    }
    var v = i.name;
    v !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, v !== "" && (i.name = v);
  }
  function Ce(e, t) {
    var a = e;
    H(a, t), ve(a, t);
  }
  function ve(e, t) {
    var a = t.name;
    if (t.type === "radio" && a != null) {
      for (var i = e; i.parentNode; )
        i = i.parentNode;
      ha(a, "name");
      for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
        var f = u[s];
        if (!(f === e || f.form !== e.form)) {
          var v = np(f);
          if (!v)
            throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
          Iu(f), H(f, v);
        }
      }
    }
  }
  function we(e, t, a) {
    // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
    (t !== "number" || Vi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = qn(e._wrapperState.initialValue) : e.defaultValue !== qn(a) && (e.defaultValue = qn(a)));
  }
  var He = !1, at = !1, dt = !1;
  function pt(e, t) {
    t.value == null && (typeof t.children == "object" && t.children !== null ? n.Children.forEach(t.children, function(a) {
      a != null && (typeof a == "string" || typeof a == "number" || at || (at = !0, d("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
    }) : t.dangerouslySetInnerHTML != null && (dt || (dt = !0, d("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !He && (d("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), He = !0);
  }
  function Rt(e, t) {
    t.value != null && e.setAttribute("value", qn(Ca(t.value)));
  }
  var Nt = Array.isArray;
  function qe(e) {
    return Nt(e);
  }
  var Bi;
  Bi = !1;
  function Qu() {
    var e = Pi();
    return e ? `

Check the render method of \`` + e + "`." : "";
  }
  var Ls = ["value", "defaultValue"];
  function $h(e) {
    {
      Bu("select", e);
      for (var t = 0; t < Ls.length; t++) {
        var a = Ls[t];
        if (e[a] != null) {
          var i = qe(e[a]);
          e.multiple && !i ? d("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Qu()) : !e.multiple && i && d("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Qu());
        }
      }
    }
  }
  function Ja(e, t, a, i) {
    var u = e.options;
    if (t) {
      for (var s = a, f = {}, v = 0; v < s.length; v++)
        f["$" + s[v]] = !0;
      for (var h = 0; h < u.length; h++) {
        var y = f.hasOwnProperty("$" + u[h].value);
        u[h].selected !== y && (u[h].selected = y), y && i && (u[h].defaultSelected = !0);
      }
    } else {
      for (var g = qn(Ca(a)), D = null, w = 0; w < u.length; w++) {
        if (u[w].value === g) {
          u[w].selected = !0, i && (u[w].defaultSelected = !0);
          return;
        }
        D === null && !u[w].disabled && (D = u[w]);
      }
      D !== null && (D.selected = !0);
    }
  }
  function Ns(e, t) {
    return Fe({}, t, { value: void 0 });
  }
  function zs(e, t) {
    var a = e;
    $h(t), a._wrapperState = { wasMultiple: !!t.multiple }, t.value !== void 0 && t.defaultValue !== void 0 && !Bi && (d("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Bi = !0);
  }
  function Vh(e, t) {
    var a = e;
    a.multiple = !!t.multiple;
    var i = t.value;
    i != null ? Ja(a, !!t.multiple, i, !1) : t.defaultValue != null && Ja(a, !!t.multiple, t.defaultValue, !0);
  }
  function Ok(e, t) {
    var a = e, i = a._wrapperState.wasMultiple;
    a._wrapperState.wasMultiple = !!t.multiple;
    var u = t.value;
    u != null ? Ja(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ja(a, !!t.multiple, t.defaultValue, !0) : Ja(a, !!t.multiple, t.multiple ? [] : "", !1));
  }
  function Mk(e, t) {
    var a = e, i = t.value;
    i != null && Ja(a, !!t.multiple, i, !1);
  }
  var bC = !1;
  function Bh(e, t) {
    var a = e;
    if (t.dangerouslySetInnerHTML != null)
      throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
    var i = Fe({}, t, { value: void 0, defaultValue: void 0, children: qn(a._wrapperState.initialValue) });
    return i;
  }
  function DC(e, t) {
    var a = e;
    Bu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !bC && (d("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Pi() || "A component"), bC = !0);
    var i = t.value;
    if (i == null) {
      var u = t.children, s = t.defaultValue;
      if (u != null) {
        d("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
        {
          if (s != null)
            throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          if (qe(u)) {
            if (u.length > 1)
              throw new Error("<textarea> can only have at most one child.");
            u = u[0];
          }
          s = u;
        }
      }
      s == null && (s = ""), i = s;
    }
    a._wrapperState = { initialValue: Ca(i) };
  }
  function _C(e, t) {
    var a = e, i = Ca(t.value), u = Ca(t.defaultValue);
    if (i != null) {
      var s = qn(i);
      s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
    }
    u != null && (a.defaultValue = qn(u));
  }
  function kC(e, t) {
    var a = e, i = a.textContent;
    i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
  }
  function Lk(e, t) {
    _C(e, t);
  }
  var ei = "http://www.w3.org/1999/xhtml", Nk = "http://www.w3.org/1998/Math/MathML", Ih = "http://www.w3.org/2000/svg";
  function Yh(e) {
    switch (e) {
      case "svg":
        return Ih;
      case "math":
        return Nk;
      default:
        return ei;
    }
  }
  function Qh(e, t) {
    return e == null || e === ei ? Yh(t) : e === Ih && t === "foreignObject" ? ei : e;
  }
  var zk = function(e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, a, i, u);
      });
    } : e;
  }, yd, OC = zk(function(e, t) {
    if (e.namespaceURI === Ih && !("innerHTML" in e)) {
      yd = yd || document.createElement("div"), yd.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
      for (var a = yd.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; a.firstChild; )
        e.appendChild(a.firstChild);
      return;
    }
    e.innerHTML = t;
  }), Zn = 1, ti = 3, Ht = 8, ni = 9, Wh = 11, gd = function(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === ti) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }, Uk = { animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"], background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"], backgroundPosition: ["backgroundPositionX", "backgroundPositionY"], border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"], borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"], borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"], borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"], borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"], borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"], borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"], borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"], borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"], borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"], borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"], borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"], borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"], borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"], columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"], columns: ["columnCount", "columnWidth"], flex: ["flexBasis", "flexGrow", "flexShrink"], flexFlow: ["flexDirection", "flexWrap"], font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"], fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"], gap: ["columnGap", "rowGap"], grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"], gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"], gridColumn: ["gridColumnEnd", "gridColumnStart"], gridColumnGap: ["columnGap"], gridGap: ["columnGap", "rowGap"], gridRow: ["gridRowEnd", "gridRowStart"], gridRowGap: ["rowGap"], gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"], listStyle: ["listStyleImage", "listStylePosition", "listStyleType"], margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"], marker: ["markerEnd", "markerMid", "markerStart"], mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"], maskPosition: ["maskPositionX", "maskPositionY"], outline: ["outlineColor", "outlineStyle", "outlineWidth"], overflow: ["overflowX", "overflowY"], padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"], placeContent: ["alignContent", "justifyContent"], placeItems: ["alignItems", "justifyItems"], placeSelf: ["alignSelf", "justifySelf"], textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"], textEmphasis: ["textEmphasisColor", "textEmphasisStyle"], transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"], wordWrap: ["overflowWrap"] }, Us = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    // SVG-related properties
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  };
  function Ak(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1);
  }
  var jk = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Us).forEach(function(e) {
    jk.forEach(function(t) {
      Us[Ak(t, e)] = Us[e];
    });
  });
  function Gh(e, t, a) {
    var i = t == null || typeof t == "boolean" || t === "";
    return i ? "" : !a && typeof t == "number" && t !== 0 && !(Us.hasOwnProperty(e) && Us[e]) ? t + "px" : (Ba(t, e), ("" + t).trim());
  }
  var Fk = /([A-Z])/g, Hk = /^ms-/;
  function Pk(e) {
    return e.replace(Fk, "-$1").toLowerCase().replace(Hk, "-ms-");
  }
  var MC = function() {
  };
  {
    var $k = /^(?:webkit|moz|o)[A-Z]/, Vk = /^-ms-/, Bk = /-(.)/g, LC = /;\s*$/, Wu = {}, Xh = {}, NC = !1, zC = !1, Ik = function(e) {
      return e.replace(Bk, function(t, a) {
        return a.toUpperCase();
      });
    }, Yk = function(e) {
      Wu.hasOwnProperty(e) && Wu[e] || (Wu[e] = !0, d(
        "Unsupported style property %s. Did you mean %s?",
        e,
        // As Andi Smith suggests
        // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
        // is converted to lowercase `ms`.
        Ik(e.replace(Vk, "ms-"))
      ));
    }, Qk = function(e) {
      Wu.hasOwnProperty(e) && Wu[e] || (Wu[e] = !0, d("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
    }, Wk = function(e, t) {
      Xh.hasOwnProperty(t) && Xh[t] || (Xh[t] = !0, d(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(LC, "")));
    }, Gk = function(e, t) {
      NC || (NC = !0, d("`NaN` is an invalid value for the `%s` css style property.", e));
    }, Xk = function(e, t) {
      zC || (zC = !0, d("`Infinity` is an invalid value for the `%s` css style property.", e));
    };
    MC = function(e, t) {
      e.indexOf("-") > -1 ? Yk(e) : $k.test(e) ? Qk(e) : LC.test(t) && Wk(e, t), typeof t == "number" && (isNaN(t) ? Gk(e, t) : isFinite(t) || Xk(e, t));
    };
  }
  var Kk = MC;
  function qk(e) {
    {
      var t = "", a = "";
      for (var i in e)
        if (e.hasOwnProperty(i)) {
          var u = e[i];
          if (u != null) {
            var s = i.indexOf("--") === 0;
            t += a + (s ? i : Pk(i)) + ":", t += Gh(i, u, s), a = ";";
          }
        }
      return t || null;
    }
  }
  function UC(e, t) {
    var a = e.style;
    for (var i in t)
      if (t.hasOwnProperty(i)) {
        var u = i.indexOf("--") === 0;
        u || Kk(i, t[i]);
        var s = Gh(i, t[i], u);
        i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
      }
  }
  function Zk(e) {
    return e == null || typeof e == "boolean" || e === "";
  }
  function AC(e) {
    var t = {};
    for (var a in e)
      for (var i = Uk[a] || [a], u = 0; u < i.length; u++)
        t[i[u]] = a;
    return t;
  }
  function Jk(e, t) {
    {
      if (!t)
        return;
      var a = AC(e), i = AC(t), u = {};
      for (var s in a) {
        var f = a[s], v = i[s];
        if (v && f !== v) {
          var h = f + "," + v;
          if (u[h])
            continue;
          u[h] = !0, d("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Zk(e[f]) ? "Removing" : "Updating", f, v);
        }
      }
    }
  }
  var eO = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
    // NOTE: menuitem's close tag should be omitted, but that causes problems.
  }, tO = Fe({ menuitem: !0 }, eO), nO = "__html";
  function Kh(e, t) {
    if (t) {
      if (tO[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t.dangerouslySetInnerHTML != "object" || !(nO in t.dangerouslySetInnerHTML))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
      }
      if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && d("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
    }
  }
  function Ql(e, t) {
    if (e.indexOf("-") === -1)
      return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Sd = {
    // HTML
    accept: "accept",
    acceptcharset: "acceptCharset",
    "accept-charset": "acceptCharset",
    accesskey: "accessKey",
    action: "action",
    allowfullscreen: "allowFullScreen",
    alt: "alt",
    as: "as",
    async: "async",
    autocapitalize: "autoCapitalize",
    autocomplete: "autoComplete",
    autocorrect: "autoCorrect",
    autofocus: "autoFocus",
    autoplay: "autoPlay",
    autosave: "autoSave",
    capture: "capture",
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    challenge: "challenge",
    charset: "charSet",
    checked: "checked",
    children: "children",
    cite: "cite",
    class: "className",
    classid: "classID",
    classname: "className",
    cols: "cols",
    colspan: "colSpan",
    content: "content",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    controls: "controls",
    controlslist: "controlsList",
    coords: "coords",
    crossorigin: "crossOrigin",
    dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
    data: "data",
    datetime: "dateTime",
    default: "default",
    defaultchecked: "defaultChecked",
    defaultvalue: "defaultValue",
    defer: "defer",
    dir: "dir",
    disabled: "disabled",
    disablepictureinpicture: "disablePictureInPicture",
    disableremoteplayback: "disableRemotePlayback",
    download: "download",
    draggable: "draggable",
    enctype: "encType",
    enterkeyhint: "enterKeyHint",
    for: "htmlFor",
    form: "form",
    formmethod: "formMethod",
    formaction: "formAction",
    formenctype: "formEncType",
    formnovalidate: "formNoValidate",
    formtarget: "formTarget",
    frameborder: "frameBorder",
    headers: "headers",
    height: "height",
    hidden: "hidden",
    high: "high",
    href: "href",
    hreflang: "hrefLang",
    htmlfor: "htmlFor",
    httpequiv: "httpEquiv",
    "http-equiv": "httpEquiv",
    icon: "icon",
    id: "id",
    imagesizes: "imageSizes",
    imagesrcset: "imageSrcSet",
    innerhtml: "innerHTML",
    inputmode: "inputMode",
    integrity: "integrity",
    is: "is",
    itemid: "itemID",
    itemprop: "itemProp",
    itemref: "itemRef",
    itemscope: "itemScope",
    itemtype: "itemType",
    keyparams: "keyParams",
    keytype: "keyType",
    kind: "kind",
    label: "label",
    lang: "lang",
    list: "list",
    loop: "loop",
    low: "low",
    manifest: "manifest",
    marginwidth: "marginWidth",
    marginheight: "marginHeight",
    max: "max",
    maxlength: "maxLength",
    media: "media",
    mediagroup: "mediaGroup",
    method: "method",
    min: "min",
    minlength: "minLength",
    multiple: "multiple",
    muted: "muted",
    name: "name",
    nomodule: "noModule",
    nonce: "nonce",
    novalidate: "noValidate",
    open: "open",
    optimum: "optimum",
    pattern: "pattern",
    placeholder: "placeholder",
    playsinline: "playsInline",
    poster: "poster",
    preload: "preload",
    profile: "profile",
    radiogroup: "radioGroup",
    readonly: "readOnly",
    referrerpolicy: "referrerPolicy",
    rel: "rel",
    required: "required",
    reversed: "reversed",
    role: "role",
    rows: "rows",
    rowspan: "rowSpan",
    sandbox: "sandbox",
    scope: "scope",
    scoped: "scoped",
    scrolling: "scrolling",
    seamless: "seamless",
    selected: "selected",
    shape: "shape",
    size: "size",
    sizes: "sizes",
    span: "span",
    spellcheck: "spellCheck",
    src: "src",
    srcdoc: "srcDoc",
    srclang: "srcLang",
    srcset: "srcSet",
    start: "start",
    step: "step",
    style: "style",
    summary: "summary",
    tabindex: "tabIndex",
    target: "target",
    title: "title",
    type: "type",
    usemap: "useMap",
    value: "value",
    width: "width",
    wmode: "wmode",
    wrap: "wrap",
    // SVG
    about: "about",
    accentheight: "accentHeight",
    "accent-height": "accentHeight",
    accumulate: "accumulate",
    additive: "additive",
    alignmentbaseline: "alignmentBaseline",
    "alignment-baseline": "alignmentBaseline",
    allowreorder: "allowReorder",
    alphabetic: "alphabetic",
    amplitude: "amplitude",
    arabicform: "arabicForm",
    "arabic-form": "arabicForm",
    ascent: "ascent",
    attributename: "attributeName",
    attributetype: "attributeType",
    autoreverse: "autoReverse",
    azimuth: "azimuth",
    basefrequency: "baseFrequency",
    baselineshift: "baselineShift",
    "baseline-shift": "baselineShift",
    baseprofile: "baseProfile",
    bbox: "bbox",
    begin: "begin",
    bias: "bias",
    by: "by",
    calcmode: "calcMode",
    capheight: "capHeight",
    "cap-height": "capHeight",
    clip: "clip",
    clippath: "clipPath",
    "clip-path": "clipPath",
    clippathunits: "clipPathUnits",
    cliprule: "clipRule",
    "clip-rule": "clipRule",
    color: "color",
    colorinterpolation: "colorInterpolation",
    "color-interpolation": "colorInterpolation",
    colorinterpolationfilters: "colorInterpolationFilters",
    "color-interpolation-filters": "colorInterpolationFilters",
    colorprofile: "colorProfile",
    "color-profile": "colorProfile",
    colorrendering: "colorRendering",
    "color-rendering": "colorRendering",
    contentscripttype: "contentScriptType",
    contentstyletype: "contentStyleType",
    cursor: "cursor",
    cx: "cx",
    cy: "cy",
    d: "d",
    datatype: "datatype",
    decelerate: "decelerate",
    descent: "descent",
    diffuseconstant: "diffuseConstant",
    direction: "direction",
    display: "display",
    divisor: "divisor",
    dominantbaseline: "dominantBaseline",
    "dominant-baseline": "dominantBaseline",
    dur: "dur",
    dx: "dx",
    dy: "dy",
    edgemode: "edgeMode",
    elevation: "elevation",
    enablebackground: "enableBackground",
    "enable-background": "enableBackground",
    end: "end",
    exponent: "exponent",
    externalresourcesrequired: "externalResourcesRequired",
    fill: "fill",
    fillopacity: "fillOpacity",
    "fill-opacity": "fillOpacity",
    fillrule: "fillRule",
    "fill-rule": "fillRule",
    filter: "filter",
    filterres: "filterRes",
    filterunits: "filterUnits",
    floodopacity: "floodOpacity",
    "flood-opacity": "floodOpacity",
    floodcolor: "floodColor",
    "flood-color": "floodColor",
    focusable: "focusable",
    fontfamily: "fontFamily",
    "font-family": "fontFamily",
    fontsize: "fontSize",
    "font-size": "fontSize",
    fontsizeadjust: "fontSizeAdjust",
    "font-size-adjust": "fontSizeAdjust",
    fontstretch: "fontStretch",
    "font-stretch": "fontStretch",
    fontstyle: "fontStyle",
    "font-style": "fontStyle",
    fontvariant: "fontVariant",
    "font-variant": "fontVariant",
    fontweight: "fontWeight",
    "font-weight": "fontWeight",
    format: "format",
    from: "from",
    fx: "fx",
    fy: "fy",
    g1: "g1",
    g2: "g2",
    glyphname: "glyphName",
    "glyph-name": "glyphName",
    glyphorientationhorizontal: "glyphOrientationHorizontal",
    "glyph-orientation-horizontal": "glyphOrientationHorizontal",
    glyphorientationvertical: "glyphOrientationVertical",
    "glyph-orientation-vertical": "glyphOrientationVertical",
    glyphref: "glyphRef",
    gradienttransform: "gradientTransform",
    gradientunits: "gradientUnits",
    hanging: "hanging",
    horizadvx: "horizAdvX",
    "horiz-adv-x": "horizAdvX",
    horizoriginx: "horizOriginX",
    "horiz-origin-x": "horizOriginX",
    ideographic: "ideographic",
    imagerendering: "imageRendering",
    "image-rendering": "imageRendering",
    in2: "in2",
    in: "in",
    inlist: "inlist",
    intercept: "intercept",
    k1: "k1",
    k2: "k2",
    k3: "k3",
    k4: "k4",
    k: "k",
    kernelmatrix: "kernelMatrix",
    kernelunitlength: "kernelUnitLength",
    kerning: "kerning",
    keypoints: "keyPoints",
    keysplines: "keySplines",
    keytimes: "keyTimes",
    lengthadjust: "lengthAdjust",
    letterspacing: "letterSpacing",
    "letter-spacing": "letterSpacing",
    lightingcolor: "lightingColor",
    "lighting-color": "lightingColor",
    limitingconeangle: "limitingConeAngle",
    local: "local",
    markerend: "markerEnd",
    "marker-end": "markerEnd",
    markerheight: "markerHeight",
    markermid: "markerMid",
    "marker-mid": "markerMid",
    markerstart: "markerStart",
    "marker-start": "markerStart",
    markerunits: "markerUnits",
    markerwidth: "markerWidth",
    mask: "mask",
    maskcontentunits: "maskContentUnits",
    maskunits: "maskUnits",
    mathematical: "mathematical",
    mode: "mode",
    numoctaves: "numOctaves",
    offset: "offset",
    opacity: "opacity",
    operator: "operator",
    order: "order",
    orient: "orient",
    orientation: "orientation",
    origin: "origin",
    overflow: "overflow",
    overlineposition: "overlinePosition",
    "overline-position": "overlinePosition",
    overlinethickness: "overlineThickness",
    "overline-thickness": "overlineThickness",
    paintorder: "paintOrder",
    "paint-order": "paintOrder",
    panose1: "panose1",
    "panose-1": "panose1",
    pathlength: "pathLength",
    patterncontentunits: "patternContentUnits",
    patterntransform: "patternTransform",
    patternunits: "patternUnits",
    pointerevents: "pointerEvents",
    "pointer-events": "pointerEvents",
    points: "points",
    pointsatx: "pointsAtX",
    pointsaty: "pointsAtY",
    pointsatz: "pointsAtZ",
    prefix: "prefix",
    preservealpha: "preserveAlpha",
    preserveaspectratio: "preserveAspectRatio",
    primitiveunits: "primitiveUnits",
    property: "property",
    r: "r",
    radius: "radius",
    refx: "refX",
    refy: "refY",
    renderingintent: "renderingIntent",
    "rendering-intent": "renderingIntent",
    repeatcount: "repeatCount",
    repeatdur: "repeatDur",
    requiredextensions: "requiredExtensions",
    requiredfeatures: "requiredFeatures",
    resource: "resource",
    restart: "restart",
    result: "result",
    results: "results",
    rotate: "rotate",
    rx: "rx",
    ry: "ry",
    scale: "scale",
    security: "security",
    seed: "seed",
    shaperendering: "shapeRendering",
    "shape-rendering": "shapeRendering",
    slope: "slope",
    spacing: "spacing",
    specularconstant: "specularConstant",
    specularexponent: "specularExponent",
    speed: "speed",
    spreadmethod: "spreadMethod",
    startoffset: "startOffset",
    stddeviation: "stdDeviation",
    stemh: "stemh",
    stemv: "stemv",
    stitchtiles: "stitchTiles",
    stopcolor: "stopColor",
    "stop-color": "stopColor",
    stopopacity: "stopOpacity",
    "stop-opacity": "stopOpacity",
    strikethroughposition: "strikethroughPosition",
    "strikethrough-position": "strikethroughPosition",
    strikethroughthickness: "strikethroughThickness",
    "strikethrough-thickness": "strikethroughThickness",
    string: "string",
    stroke: "stroke",
    strokedasharray: "strokeDasharray",
    "stroke-dasharray": "strokeDasharray",
    strokedashoffset: "strokeDashoffset",
    "stroke-dashoffset": "strokeDashoffset",
    strokelinecap: "strokeLinecap",
    "stroke-linecap": "strokeLinecap",
    strokelinejoin: "strokeLinejoin",
    "stroke-linejoin": "strokeLinejoin",
    strokemiterlimit: "strokeMiterlimit",
    "stroke-miterlimit": "strokeMiterlimit",
    strokewidth: "strokeWidth",
    "stroke-width": "strokeWidth",
    strokeopacity: "strokeOpacity",
    "stroke-opacity": "strokeOpacity",
    suppresscontenteditablewarning: "suppressContentEditableWarning",
    suppresshydrationwarning: "suppressHydrationWarning",
    surfacescale: "surfaceScale",
    systemlanguage: "systemLanguage",
    tablevalues: "tableValues",
    targetx: "targetX",
    targety: "targetY",
    textanchor: "textAnchor",
    "text-anchor": "textAnchor",
    textdecoration: "textDecoration",
    "text-decoration": "textDecoration",
    textlength: "textLength",
    textrendering: "textRendering",
    "text-rendering": "textRendering",
    to: "to",
    transform: "transform",
    typeof: "typeof",
    u1: "u1",
    u2: "u2",
    underlineposition: "underlinePosition",
    "underline-position": "underlinePosition",
    underlinethickness: "underlineThickness",
    "underline-thickness": "underlineThickness",
    unicode: "unicode",
    unicodebidi: "unicodeBidi",
    "unicode-bidi": "unicodeBidi",
    unicoderange: "unicodeRange",
    "unicode-range": "unicodeRange",
    unitsperem: "unitsPerEm",
    "units-per-em": "unitsPerEm",
    unselectable: "unselectable",
    valphabetic: "vAlphabetic",
    "v-alphabetic": "vAlphabetic",
    values: "values",
    vectoreffect: "vectorEffect",
    "vector-effect": "vectorEffect",
    version: "version",
    vertadvy: "vertAdvY",
    "vert-adv-y": "vertAdvY",
    vertoriginx: "vertOriginX",
    "vert-origin-x": "vertOriginX",
    vertoriginy: "vertOriginY",
    "vert-origin-y": "vertOriginY",
    vhanging: "vHanging",
    "v-hanging": "vHanging",
    videographic: "vIdeographic",
    "v-ideographic": "vIdeographic",
    viewbox: "viewBox",
    viewtarget: "viewTarget",
    visibility: "visibility",
    vmathematical: "vMathematical",
    "v-mathematical": "vMathematical",
    vocab: "vocab",
    widths: "widths",
    wordspacing: "wordSpacing",
    "word-spacing": "wordSpacing",
    writingmode: "writingMode",
    "writing-mode": "writingMode",
    x1: "x1",
    x2: "x2",
    x: "x",
    xchannelselector: "xChannelSelector",
    xheight: "xHeight",
    "x-height": "xHeight",
    xlinkactuate: "xlinkActuate",
    "xlink:actuate": "xlinkActuate",
    xlinkarcrole: "xlinkArcrole",
    "xlink:arcrole": "xlinkArcrole",
    xlinkhref: "xlinkHref",
    "xlink:href": "xlinkHref",
    xlinkrole: "xlinkRole",
    "xlink:role": "xlinkRole",
    xlinkshow: "xlinkShow",
    "xlink:show": "xlinkShow",
    xlinktitle: "xlinkTitle",
    "xlink:title": "xlinkTitle",
    xlinktype: "xlinkType",
    "xlink:type": "xlinkType",
    xmlbase: "xmlBase",
    "xml:base": "xmlBase",
    xmllang: "xmlLang",
    "xml:lang": "xmlLang",
    xmlns: "xmlns",
    "xml:space": "xmlSpace",
    xmlnsxlink: "xmlnsXlink",
    "xmlns:xlink": "xmlnsXlink",
    xmlspace: "xmlSpace",
    y1: "y1",
    y2: "y2",
    y: "y",
    ychannelselector: "yChannelSelector",
    z: "z",
    zoomandpan: "zoomAndPan"
  }, jC = {
    "aria-current": 0,
    // state
    "aria-description": 0,
    "aria-details": 0,
    "aria-disabled": 0,
    // state
    "aria-hidden": 0,
    // state
    "aria-invalid": 0,
    // state
    "aria-keyshortcuts": 0,
    "aria-label": 0,
    "aria-roledescription": 0,
    // Widget Attributes
    "aria-autocomplete": 0,
    "aria-checked": 0,
    "aria-expanded": 0,
    "aria-haspopup": 0,
    "aria-level": 0,
    "aria-modal": 0,
    "aria-multiline": 0,
    "aria-multiselectable": 0,
    "aria-orientation": 0,
    "aria-placeholder": 0,
    "aria-pressed": 0,
    "aria-readonly": 0,
    "aria-required": 0,
    "aria-selected": 0,
    "aria-sort": 0,
    "aria-valuemax": 0,
    "aria-valuemin": 0,
    "aria-valuenow": 0,
    "aria-valuetext": 0,
    // Live Region Attributes
    "aria-atomic": 0,
    "aria-busy": 0,
    "aria-live": 0,
    "aria-relevant": 0,
    // Drag-and-Drop Attributes
    "aria-dropeffect": 0,
    "aria-grabbed": 0,
    // Relationship Attributes
    "aria-activedescendant": 0,
    "aria-colcount": 0,
    "aria-colindex": 0,
    "aria-colspan": 0,
    "aria-controls": 0,
    "aria-describedby": 0,
    "aria-errormessage": 0,
    "aria-flowto": 0,
    "aria-labelledby": 0,
    "aria-owns": 0,
    "aria-posinset": 0,
    "aria-rowcount": 0,
    "aria-rowindex": 0,
    "aria-rowspan": 0,
    "aria-setsize": 0
  }, Gu = {}, rO = new RegExp("^(aria)-[" + Ga + "]*$"), aO = new RegExp("^(aria)[A-Z][" + Ga + "]*$");
  function iO(e, t) {
    {
      if (Br.call(Gu, t) && Gu[t])
        return !0;
      if (aO.test(t)) {
        var a = "aria-" + t.slice(4).toLowerCase(), i = jC.hasOwnProperty(a) ? a : null;
        if (i == null)
          return d("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Gu[t] = !0, !0;
        if (t !== i)
          return d("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Gu[t] = !0, !0;
      }
      if (rO.test(t)) {
        var u = t.toLowerCase(), s = jC.hasOwnProperty(u) ? u : null;
        if (s == null)
          return Gu[t] = !0, !1;
        if (t !== s)
          return d("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Gu[t] = !0, !0;
      }
    }
    return !0;
  }
  function lO(e, t) {
    {
      var a = [];
      for (var i in t) {
        var u = iO(e, i);
        u || a.push(i);
      }
      var s = a.map(function(f) {
        return "`" + f + "`";
      }).join(", ");
      a.length === 1 ? d("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && d("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
    }
  }
  function uO(e, t) {
    Ql(e, t) || lO(e, t);
  }
  var FC = !1;
  function oO(e, t) {
    {
      if (e !== "input" && e !== "textarea" && e !== "select")
        return;
      t != null && t.value === null && !FC && (FC = !0, e === "select" && t.multiple ? d("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : d("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
    }
  }
  var HC = function() {
  };
  {
    var jn = {}, PC = /^on./, sO = /^on[^A-Z]/, cO = new RegExp("^(aria)-[" + Ga + "]*$"), fO = new RegExp("^(aria)[A-Z][" + Ga + "]*$");
    HC = function(e, t, a, i) {
      if (Br.call(jn, t) && jn[t])
        return !0;
      var u = t.toLowerCase();
      if (u === "onfocusin" || u === "onfocusout")
        return d("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), jn[t] = !0, !0;
      if (i != null) {
        var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
        if (s.hasOwnProperty(t))
          return !0;
        var v = f.hasOwnProperty(u) ? f[u] : null;
        if (v != null)
          return d("Invalid event handler property `%s`. Did you mean `%s`?", t, v), jn[t] = !0, !0;
        if (PC.test(t))
          return d("Unknown event handler property `%s`. It will be ignored.", t), jn[t] = !0, !0;
      } else if (PC.test(t))
        return sO.test(t) && d("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), jn[t] = !0, !0;
      if (cO.test(t) || fO.test(t))
        return !0;
      if (u === "innerhtml")
        return d("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), jn[t] = !0, !0;
      if (u === "aria")
        return d("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), jn[t] = !0, !0;
      if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
        return d("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), jn[t] = !0, !0;
      if (typeof a == "number" && isNaN(a))
        return d("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), jn[t] = !0, !0;
      var h = zi(t), y = h !== null && h.type === Ya;
      if (Sd.hasOwnProperty(u)) {
        var g = Sd[u];
        if (g !== t)
          return d("Invalid DOM property `%s`. Did you mean `%s`?", t, g), jn[t] = !0, !0;
      } else if (!y && t !== u)
        return d("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), jn[t] = !0, !0;
      return typeof a == "boolean" && jl(t, a, h, !1) ? (a ? d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), jn[t] = !0, !0) : y ? !0 : jl(t, a, h, !1) ? (jn[t] = !0, !1) : ((a === "false" || a === "true") && h !== null && h.type === cn && (d("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), jn[t] = !0), !0);
    };
  }
  var dO = function(e, t, a) {
    {
      var i = [];
      for (var u in t) {
        var s = HC(e, u, t[u], a);
        s || i.push(u);
      }
      var f = i.map(function(v) {
        return "`" + v + "`";
      }).join(", ");
      i.length === 1 ? d("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && d("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
    }
  };
  function pO(e, t, a) {
    Ql(e, t) || dO(e, t, a);
  }
  var $C = 1, qh = 2, As = 4, vO = $C | qh | As, js = null;
  function hO(e) {
    js !== null && d("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), js = e;
  }
  function mO() {
    js === null && d("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), js = null;
  }
  function yO(e) {
    return e === js;
  }
  function Zh(e) {
    var t = e.target || e.srcElement || window;
    return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ti ? t.parentNode : t;
  }
  var Jh = null, Xu = null, Ku = null;
  function VC(e) {
    var t = qi(e);
    if (t) {
      if (typeof Jh != "function")
        throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
      var a = t.stateNode;
      if (a) {
        var i = np(a);
        Jh(t.stateNode, t.type, i);
      }
    }
  }
  function gO(e) {
    Jh = e;
  }
  function BC(e) {
    Xu ? Ku ? Ku.push(e) : Ku = [e] : Xu = e;
  }
  function SO() {
    return Xu !== null || Ku !== null;
  }
  function IC() {
    if (Xu) {
      var e = Xu, t = Ku;
      if (Xu = null, Ku = null, VC(e), t)
        for (var a = 0; a < t.length; a++)
          VC(t[a]);
    }
  }
  var YC = function(e, t) {
    return e(t);
  }, QC = function() {
  }, em = !1;
  function EO() {
    var e = SO();
    e && (QC(), IC());
  }
  function WC(e, t, a) {
    if (em)
      return e(t, a);
    em = !0;
    try {
      return YC(e, t, a);
    } finally {
      em = !1, EO();
    }
  }
  function CO(e, t, a) {
    YC = e, QC = a;
  }
  function RO(e) {
    return e === "button" || e === "input" || e === "select" || e === "textarea";
  }
  function TO(e, t, a) {
    switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        return !!(a.disabled && RO(t));
      default:
        return !1;
    }
  }
  function Fs(e, t) {
    var a = e.stateNode;
    if (a === null)
      return null;
    var i = np(a);
    if (i === null)
      return null;
    var u = i[t];
    if (TO(t, e.type, i))
      return null;
    if (u && typeof u != "function")
      throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
    return u;
  }
  var tm = !1;
  if (tn)
    try {
      var Hs = {};
      Object.defineProperty(Hs, "passive", { get: function() {
        tm = !0;
      } }), window.addEventListener("test", Hs, Hs), window.removeEventListener("test", Hs, Hs);
    } catch (e) {
      tm = !1;
    }
  function GC(e, t, a, i, u, s, f, v, h) {
    var y = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(a, y);
    } catch (g) {
      this.onError(g);
    }
  }
  var XC = GC;
  if (typeof window != "undefined" && typeof window.dispatchEvent == "function" && typeof document != "undefined" && typeof document.createEvent == "function") {
    var nm = document.createElement("react");
    XC = function(t, a, i, u, s, f, v, h, y) {
      if (typeof document == "undefined" || document === null)
        throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
      var g = document.createEvent("Event"), D = !1, w = !0, z = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
      function P() {
        nm.removeEventListener($, ye, !1), typeof window.event != "undefined" && window.hasOwnProperty("event") && (window.event = z);
      }
      var oe = Array.prototype.slice.call(arguments, 3);
      function ye() {
        D = !0, P(), a.apply(i, oe), w = !1;
      }
      var he, Ve = !1, ze = !1;
      function k(O) {
        if (he = O.error, Ve = !0, he === null && O.colno === 0 && O.lineno === 0 && (ze = !0), O.defaultPrevented && he != null && typeof he == "object")
          try {
            he._suppressLogging = !0;
          } catch (G) {
          }
      }
      var $ = "react-" + (t || "invokeguardedcallback");
      if (window.addEventListener("error", k), nm.addEventListener($, ye, !1), g.initEvent($, !1, !1), nm.dispatchEvent(g), U && Object.defineProperty(window, "event", U), D && w && (Ve ? ze && (he = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : he = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(he)), window.removeEventListener("error", k), !D)
        return P(), GC.apply(this, arguments);
    };
  }
  var xO = XC, qu = !1, Ed = null, Cd = !1, rm = null, wO = { onError: function(e) {
    qu = !0, Ed = e;
  } };
  function am(e, t, a, i, u, s, f, v, h) {
    qu = !1, Ed = null, xO.apply(wO, arguments);
  }
  function bO(e, t, a, i, u, s, f, v, h) {
    if (am.apply(this, arguments), qu) {
      var y = im();
      Cd || (Cd = !0, rm = y);
    }
  }
  function DO() {
    if (Cd) {
      var e = rm;
      throw Cd = !1, rm = null, e;
    }
  }
  function _O() {
    return qu;
  }
  function im() {
    if (qu) {
      var e = Ed;
      return qu = !1, Ed = null, e;
    } else
      throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
  }
  function Zu(e) {
    return e._reactInternals;
  }
  function kO(e) {
    return e._reactInternals !== void 0;
  }
  function OO(e, t) {
    e._reactInternals = t;
  }
  var Se = (
    /*                      */
    0
  ), Ju = (
    /*                */
    1
  ), Pt = (
    /*                    */
    2
  ), Ye = (
    /*                       */
    4
  ), Wl = (
    /*                */
    16
  ), Ps = (
    /*                 */
    32
  ), lm = (
    /*                     */
    64
  ), Ze = (
    /*                   */
    128
  ), ri = (
    /*            */
    256
  ), Ii = (
    /*                          */
    512
  ), Gl = (
    /*                     */
    1024
  ), Wr = (
    /*                      */
    2048
  ), ai = (
    /*                    */
    4096
  ), Xl = (
    /*                   */
    8192
  ), Rd = (
    /*             */
    16384
  ), MO = Wr | Ye | lm | Ii | Gl | Rd, LO = (
    /*               */
    32767
  ), $s = (
    /*                   */
    32768
  ), Fn = (
    /*                */
    65536
  ), um = (
    /* */
    131072
  ), KC = (
    /*                       */
    1048576
  ), om = (
    /*                    */
    2097152
  ), Kl = (
    /*                 */
    4194304
  ), sm = (
    /*                */
    8388608
  ), ii = (
    /*               */
    16777216
  ), Td = (
    /*              */
    33554432
  ), cm = (
    // TODO: Remove Update flag from before mutation phase by re-landing Visibility
    // flag logic (see #20043)
    Ye | Gl | 0
  ), fm = Pt | Ye | Wl | Ps | Ii | ai | Xl, Vs = Ye | lm | Ii | Xl, eo = Wr | Wl, li = Kl | sm | om, NO = l.ReactCurrentOwner;
  function ql(e) {
    var t = e, a = e;
    if (e.alternate)
      for (; t.return; )
        t = t.return;
    else {
      var i = t;
      do
        t = i, (t.flags & (Pt | ai)) !== Se && (a = t.return), i = t.return;
      while (i);
    }
    return t.tag === L ? a : null;
  }
  function qC(e) {
    if (e.tag === I) {
      var t = e.memoizedState;
      if (t === null) {
        var a = e.alternate;
        a !== null && (t = a.memoizedState);
      }
      if (t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function ZC(e) {
    return e.tag === L ? e.stateNode.containerInfo : null;
  }
  function zO(e) {
    return ql(e) === e;
  }
  function UO(e) {
    {
      var t = NO.current;
      if (t !== null && t.tag === x) {
        var a = t, i = a.stateNode;
        i._warnedAboutRefsInRender || d("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Oe(a) || "A component"), i._warnedAboutRefsInRender = !0;
      }
    }
    var u = Zu(e);
    return u ? ql(u) === u : !1;
  }
  function JC(e) {
    if (ql(e) !== e)
      throw new Error("Unable to find node on an unmounted component.");
  }
  function e1(e) {
    var t = e.alternate;
    if (!t) {
      var a = ql(e);
      if (a === null)
        throw new Error("Unable to find node on an unmounted component.");
      return a !== e ? null : e;
    }
    for (var i = e, u = t; ; ) {
      var s = i.return;
      if (s === null)
        break;
      var f = s.alternate;
      if (f === null) {
        var v = s.return;
        if (v !== null) {
          i = u = v;
          continue;
        }
        break;
      }
      if (s.child === f.child) {
        for (var h = s.child; h; ) {
          if (h === i)
            return JC(s), e;
          if (h === u)
            return JC(s), t;
          h = h.sibling;
        }
        throw new Error("Unable to find node on an unmounted component.");
      }
      if (i.return !== u.return)
        i = s, u = f;
      else {
        for (var y = !1, g = s.child; g; ) {
          if (g === i) {
            y = !0, i = s, u = f;
            break;
          }
          if (g === u) {
            y = !0, u = s, i = f;
            break;
          }
          g = g.sibling;
        }
        if (!y) {
          for (g = f.child; g; ) {
            if (g === i) {
              y = !0, i = f, u = s;
              break;
            }
            if (g === u) {
              y = !0, u = f, i = s;
              break;
            }
            g = g.sibling;
          }
          if (!y)
            throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
        }
      }
      if (i.alternate !== u)
        throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
    }
    if (i.tag !== L)
      throw new Error("Unable to find node on an unmounted component.");
    return i.stateNode.current === i ? e : t;
  }
  function t1(e) {
    var t = e1(e);
    return t !== null ? n1(t) : null;
  }
  function n1(e) {
    if (e.tag === F || e.tag === Y)
      return e;
    for (var t = e.child; t !== null; ) {
      var a = n1(t);
      if (a !== null)
        return a;
      t = t.sibling;
    }
    return null;
  }
  function AO(e) {
    var t = e1(e);
    return t !== null ? r1(t) : null;
  }
  function r1(e) {
    if (e.tag === F || e.tag === Y)
      return e;
    for (var t = e.child; t !== null; ) {
      if (t.tag !== M) {
        var a = r1(t);
        if (a !== null)
          return a;
      }
      t = t.sibling;
    }
    return null;
  }
  var a1 = r.unstable_scheduleCallback, jO = r.unstable_cancelCallback, FO = r.unstable_shouldYield, HO = r.unstable_requestPaint, rn = r.unstable_now, PO = r.unstable_getCurrentPriorityLevel, xd = r.unstable_ImmediatePriority, dm = r.unstable_UserBlockingPriority, Zl = r.unstable_NormalPriority, $O = r.unstable_LowPriority, pm = r.unstable_IdlePriority, VO = r.unstable_yieldValue, BO = r.unstable_setDisableYieldValue, to = null, wn = null, le = null, Ra = !1, Gr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined";
  function IO(e) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined")
      return !1;
    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (t.isDisabled)
      return !0;
    if (!t.supportsFiber)
      return d("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
    try {
      ot && (e = Fe({}, e, { getLaneLabelMap: KO, injectProfilingHooks: XO })), to = t.inject(e), wn = t;
    } catch (a) {
      d("React instrumentation encountered an error: %s.", a);
    }
    return !!t.checkDCE;
  }
  function YO(e, t) {
    if (wn && typeof wn.onScheduleFiberRoot == "function")
      try {
        wn.onScheduleFiberRoot(to, e, t);
      } catch (a) {
        Ra || (Ra = !0, d("React instrumentation encountered an error: %s", a));
      }
  }
  function QO(e, t) {
    if (wn && typeof wn.onCommitFiberRoot == "function")
      try {
        var a = (e.current.flags & Ze) === Ze;
        if (st) {
          var i;
          switch (t) {
            case pr:
              i = xd;
              break;
            case oi:
              i = dm;
              break;
            case si:
              i = Zl;
              break;
            case Md:
              i = pm;
              break;
            default:
              i = Zl;
              break;
          }
          wn.onCommitFiberRoot(to, e, i, a);
        }
      } catch (u) {
        Ra || (Ra = !0, d("React instrumentation encountered an error: %s", u));
      }
  }
  function WO(e) {
    if (wn && typeof wn.onPostCommitFiberRoot == "function")
      try {
        wn.onPostCommitFiberRoot(to, e);
      } catch (t) {
        Ra || (Ra = !0, d("React instrumentation encountered an error: %s", t));
      }
  }
  function GO(e) {
    if (wn && typeof wn.onCommitFiberUnmount == "function")
      try {
        wn.onCommitFiberUnmount(to, e);
      } catch (t) {
        Ra || (Ra = !0, d("React instrumentation encountered an error: %s", t));
      }
  }
  function an(e) {
    if (typeof VO == "function" && (BO(e), c(e)), wn && typeof wn.setStrictMode == "function")
      try {
        wn.setStrictMode(to, e);
      } catch (t) {
        Ra || (Ra = !0, d("React instrumentation encountered an error: %s", t));
      }
  }
  function XO(e) {
    le = e;
  }
  function KO() {
    {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < hm; a++) {
        var i = mM(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
  }
  function qO(e) {
    le !== null && typeof le.markCommitStarted == "function" && le.markCommitStarted(e);
  }
  function i1() {
    le !== null && typeof le.markCommitStopped == "function" && le.markCommitStopped();
  }
  function Bs(e) {
    le !== null && typeof le.markComponentRenderStarted == "function" && le.markComponentRenderStarted(e);
  }
  function no() {
    le !== null && typeof le.markComponentRenderStopped == "function" && le.markComponentRenderStopped();
  }
  function ZO(e) {
    le !== null && typeof le.markComponentPassiveEffectMountStarted == "function" && le.markComponentPassiveEffectMountStarted(e);
  }
  function JO() {
    le !== null && typeof le.markComponentPassiveEffectMountStopped == "function" && le.markComponentPassiveEffectMountStopped();
  }
  function eM(e) {
    le !== null && typeof le.markComponentPassiveEffectUnmountStarted == "function" && le.markComponentPassiveEffectUnmountStarted(e);
  }
  function tM() {
    le !== null && typeof le.markComponentPassiveEffectUnmountStopped == "function" && le.markComponentPassiveEffectUnmountStopped();
  }
  function nM(e) {
    le !== null && typeof le.markComponentLayoutEffectMountStarted == "function" && le.markComponentLayoutEffectMountStarted(e);
  }
  function rM() {
    le !== null && typeof le.markComponentLayoutEffectMountStopped == "function" && le.markComponentLayoutEffectMountStopped();
  }
  function l1(e) {
    le !== null && typeof le.markComponentLayoutEffectUnmountStarted == "function" && le.markComponentLayoutEffectUnmountStarted(e);
  }
  function u1() {
    le !== null && typeof le.markComponentLayoutEffectUnmountStopped == "function" && le.markComponentLayoutEffectUnmountStopped();
  }
  function aM(e, t, a) {
    le !== null && typeof le.markComponentErrored == "function" && le.markComponentErrored(e, t, a);
  }
  function iM(e, t, a) {
    le !== null && typeof le.markComponentSuspended == "function" && le.markComponentSuspended(e, t, a);
  }
  function lM(e) {
    le !== null && typeof le.markLayoutEffectsStarted == "function" && le.markLayoutEffectsStarted(e);
  }
  function uM() {
    le !== null && typeof le.markLayoutEffectsStopped == "function" && le.markLayoutEffectsStopped();
  }
  function oM(e) {
    le !== null && typeof le.markPassiveEffectsStarted == "function" && le.markPassiveEffectsStarted(e);
  }
  function sM() {
    le !== null && typeof le.markPassiveEffectsStopped == "function" && le.markPassiveEffectsStopped();
  }
  function o1(e) {
    le !== null && typeof le.markRenderStarted == "function" && le.markRenderStarted(e);
  }
  function cM() {
    le !== null && typeof le.markRenderYielded == "function" && le.markRenderYielded();
  }
  function s1() {
    le !== null && typeof le.markRenderStopped == "function" && le.markRenderStopped();
  }
  function fM(e) {
    le !== null && typeof le.markRenderScheduled == "function" && le.markRenderScheduled(e);
  }
  function dM(e, t) {
    le !== null && typeof le.markForceUpdateScheduled == "function" && le.markForceUpdateScheduled(e, t);
  }
  function vm(e, t) {
    le !== null && typeof le.markStateUpdateScheduled == "function" && le.markStateUpdateScheduled(e, t);
  }
  var Ee = (
    /*                         */
    0
  ), Pe = (
    /*                 */
    1
  ), it = (
    /*                    */
    2
  ), $t = (
    /*               */
    8
  ), Ta = (
    /*              */
    16
  ), c1 = Math.clz32 ? Math.clz32 : hM, pM = Math.log, vM = Math.LN2;
  function hM(e) {
    var t = e >>> 0;
    return t === 0 ? 32 : 31 - (pM(t) / vM | 0) | 0;
  }
  var hm = 31, Q = (
    /*                        */
    0
  ), ln = (
    /*                          */
    0
  ), be = (
    /*                        */
    1
  ), ro = (
    /*    */
    2
  ), ui = (
    /*             */
    4
  ), Jl = (
    /*            */
    8
  ), xa = (
    /*                     */
    16
  ), Is = (
    /*                */
    32
  ), ao = (
    /*                       */
    4194240
  ), Ys = (
    /*                        */
    64
  ), mm = (
    /*                        */
    128
  ), ym = (
    /*                        */
    256
  ), gm = (
    /*                        */
    512
  ), Sm = (
    /*                        */
    1024
  ), Em = (
    /*                        */
    2048
  ), Cm = (
    /*                        */
    4096
  ), Rm = (
    /*                        */
    8192
  ), Tm = (
    /*                        */
    16384
  ), xm = (
    /*                       */
    32768
  ), wm = (
    /*                       */
    65536
  ), bm = (
    /*                       */
    131072
  ), Dm = (
    /*                       */
    262144
  ), _m = (
    /*                       */
    524288
  ), km = (
    /*                       */
    1048576
  ), Om = (
    /*                       */
    2097152
  ), wd = (
    /*                            */
    130023424
  ), io = (
    /*                             */
    4194304
  ), Mm = (
    /*                             */
    8388608
  ), Lm = (
    /*                             */
    16777216
  ), Nm = (
    /*                             */
    33554432
  ), zm = (
    /*                             */
    67108864
  ), f1 = io, Qs = (
    /*          */
    134217728
  ), d1 = (
    /*                          */
    268435455
  ), Ws = (
    /*               */
    268435456
  ), eu = (
    /*                        */
    536870912
  ), fr = (
    /*                   */
    1073741824
  );
  function mM(e) {
    {
      if (e & be)
        return "Sync";
      if (e & ro)
        return "InputContinuousHydration";
      if (e & ui)
        return "InputContinuous";
      if (e & Jl)
        return "DefaultHydration";
      if (e & xa)
        return "Default";
      if (e & Is)
        return "TransitionHydration";
      if (e & ao)
        return "Transition";
      if (e & wd)
        return "Retry";
      if (e & Qs)
        return "SelectiveHydration";
      if (e & Ws)
        return "IdleHydration";
      if (e & eu)
        return "Idle";
      if (e & fr)
        return "Offscreen";
    }
  }
  var mt = -1, bd = Ys, Dd = io;
  function Gs(e) {
    switch (tu(e)) {
      case be:
        return be;
      case ro:
        return ro;
      case ui:
        return ui;
      case Jl:
        return Jl;
      case xa:
        return xa;
      case Is:
        return Is;
      case Ys:
      case mm:
      case ym:
      case gm:
      case Sm:
      case Em:
      case Cm:
      case Rm:
      case Tm:
      case xm:
      case wm:
      case bm:
      case Dm:
      case _m:
      case km:
      case Om:
        return e & ao;
      case io:
      case Mm:
      case Lm:
      case Nm:
      case zm:
        return e & wd;
      case Qs:
        return Qs;
      case Ws:
        return Ws;
      case eu:
        return eu;
      case fr:
        return fr;
      default:
        return d("Should have found matching lanes. This is a bug in React."), e;
    }
  }
  function _d(e, t) {
    var a = e.pendingLanes;
    if (a === Q)
      return Q;
    var i = Q, u = e.suspendedLanes, s = e.pingedLanes, f = a & d1;
    if (f !== Q) {
      var v = f & ~u;
      if (v !== Q)
        i = Gs(v);
      else {
        var h = f & s;
        h !== Q && (i = Gs(h));
      }
    } else {
      var y = a & ~u;
      y !== Q ? i = Gs(y) : s !== Q && (i = Gs(s));
    }
    if (i === Q)
      return Q;
    if (t !== Q && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
    // bother waiting until the root is complete.
    (t & u) === Q) {
      var g = tu(i), D = tu(t);
      if (
        // Tests whether the next lane is equal or lower priority than the wip
        // one. This works because the bits decrease in priority as you go left.
        g >= D || // Default priority updates should not interrupt transition updates. The
        // only difference between default updates and transition updates is that
        // default updates do not support refresh transitions.
        g === xa && (D & ao) !== Q
      )
        return t;
    }
    (i & ui) !== Q && (i |= a & xa);
    var w = e.entangledLanes;
    if (w !== Q)
      for (var z = e.entanglements, U = i & w; U > 0; ) {
        var P = nu(U), oe = 1 << P;
        i |= z[P], U &= ~oe;
      }
    return i;
  }
  function yM(e, t) {
    for (var a = e.eventTimes, i = mt; t > 0; ) {
      var u = nu(t), s = 1 << u, f = a[u];
      f > i && (i = f), t &= ~s;
    }
    return i;
  }
  function gM(e, t) {
    switch (e) {
      case be:
      case ro:
      case ui:
        return t + 250;
      case Jl:
      case xa:
      case Is:
      case Ys:
      case mm:
      case ym:
      case gm:
      case Sm:
      case Em:
      case Cm:
      case Rm:
      case Tm:
      case xm:
      case wm:
      case bm:
      case Dm:
      case _m:
      case km:
      case Om:
        return t + 5e3;
      case io:
      case Mm:
      case Lm:
      case Nm:
      case zm:
        return mt;
      case Qs:
      case Ws:
      case eu:
      case fr:
        return mt;
      default:
        return d("Should have found matching lanes. This is a bug in React."), mt;
    }
  }
  function SM(e, t) {
    for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
      var v = nu(f), h = 1 << v, y = s[v];
      y === mt ? ((h & i) === Q || (h & u) !== Q) && (s[v] = gM(h, t)) : y <= t && (e.expiredLanes |= h), f &= ~h;
    }
  }
  function EM(e) {
    return Gs(e.pendingLanes);
  }
  function Um(e) {
    var t = e.pendingLanes & ~fr;
    return t !== Q ? t : t & fr ? fr : Q;
  }
  function CM(e) {
    return (e & be) !== Q;
  }
  function Am(e) {
    return (e & d1) !== Q;
  }
  function p1(e) {
    return (e & wd) === e;
  }
  function RM(e) {
    var t = be | ui | xa;
    return (e & t) === Q;
  }
  function TM(e) {
    return (e & ao) === e;
  }
  function kd(e, t) {
    var a = ro | ui | Jl | xa;
    return (t & a) !== Q;
  }
  function xM(e, t) {
    return (t & e.expiredLanes) !== Q;
  }
  function v1(e) {
    return (e & ao) !== Q;
  }
  function h1() {
    var e = bd;
    return bd <<= 1, (bd & ao) === Q && (bd = Ys), e;
  }
  function wM() {
    var e = Dd;
    return Dd <<= 1, (Dd & wd) === Q && (Dd = io), e;
  }
  function tu(e) {
    return e & -e;
  }
  function Xs(e) {
    return tu(e);
  }
  function nu(e) {
    return 31 - c1(e);
  }
  function jm(e) {
    return nu(e);
  }
  function dr(e, t) {
    return (e & t) !== Q;
  }
  function lo(e, t) {
    return (e & t) === t;
  }
  function Le(e, t) {
    return e | t;
  }
  function Od(e, t) {
    return e & ~t;
  }
  function m1(e, t) {
    return e & t;
  }
  function HP(e) {
    return e;
  }
  function bM(e, t) {
    return e !== ln && e < t ? e : t;
  }
  function Fm(e) {
    for (var t = [], a = 0; a < hm; a++)
      t.push(e);
    return t;
  }
  function Ks(e, t, a) {
    e.pendingLanes |= t, t !== eu && (e.suspendedLanes = Q, e.pingedLanes = Q);
    var i = e.eventTimes, u = jm(t);
    i[u] = a;
  }
  function DM(e, t) {
    e.suspendedLanes |= t, e.pingedLanes &= ~t;
    for (var a = e.expirationTimes, i = t; i > 0; ) {
      var u = nu(i), s = 1 << u;
      a[u] = mt, i &= ~s;
    }
  }
  function y1(e, t, a) {
    e.pingedLanes |= e.suspendedLanes & t;
  }
  function _M(e, t) {
    var a = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = Q, e.pingedLanes = Q, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
    for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
      var v = nu(f), h = 1 << v;
      i[v] = Q, u[v] = mt, s[v] = mt, f &= ~h;
    }
  }
  function Hm(e, t) {
    for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
      var s = nu(u), f = 1 << s;
      // Is this one of the newly entangled lanes?
      f & t | // Is this lane transitively entangled with the newly entangled lanes?
      i[s] & t && (i[s] |= t), u &= ~f;
    }
  }
  function kM(e, t) {
    var a = tu(t), i;
    switch (a) {
      case ui:
        i = ro;
        break;
      case xa:
        i = Jl;
        break;
      case Ys:
      case mm:
      case ym:
      case gm:
      case Sm:
      case Em:
      case Cm:
      case Rm:
      case Tm:
      case xm:
      case wm:
      case bm:
      case Dm:
      case _m:
      case km:
      case Om:
      case io:
      case Mm:
      case Lm:
      case Nm:
      case zm:
        i = Is;
        break;
      case eu:
        i = Ws;
        break;
      default:
        i = ln;
        break;
    }
    return (i & (e.suspendedLanes | t)) !== ln ? ln : i;
  }
  function g1(e, t, a) {
    if (Gr)
      for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
        var u = jm(a), s = 1 << u, f = i[u];
        f.add(t), a &= ~s;
      }
  }
  function S1(e, t) {
    if (Gr)
      for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
        var u = jm(t), s = 1 << u, f = a[u];
        f.size > 0 && (f.forEach(function(v) {
          var h = v.alternate;
          (h === null || !i.has(h)) && i.add(v);
        }), f.clear()), t &= ~s;
      }
  }
  function E1(e, t) {
    return null;
  }
  var pr = be, oi = ui, si = xa, Md = eu, qs = ln;
  function Xr() {
    return qs;
  }
  function un(e) {
    qs = e;
  }
  function OM(e, t) {
    var a = qs;
    try {
      return qs = e, t();
    } finally {
      qs = a;
    }
  }
  function MM(e, t) {
    return e !== 0 && e < t ? e : t;
  }
  function LM(e, t) {
    return e === 0 || e > t ? e : t;
  }
  function Pm(e, t) {
    return e !== 0 && e < t;
  }
  function C1(e) {
    var t = tu(e);
    return Pm(pr, t) ? Pm(oi, t) ? Am(t) ? si : Md : oi : pr;
  }
  function Ld(e) {
    var t = e.current.memoizedState;
    return t.isDehydrated;
  }
  var R1;
  function NM(e) {
    R1 = e;
  }
  function zM(e) {
    R1(e);
  }
  var $m;
  function UM(e) {
    $m = e;
  }
  var T1;
  function AM(e) {
    T1 = e;
  }
  var x1;
  function jM(e) {
    x1 = e;
  }
  var w1;
  function FM(e) {
    w1 = e;
  }
  var Vm = !1, Nd = [], Yi = null, Qi = null, Wi = null, Zs = /* @__PURE__ */ new Map(), Js = /* @__PURE__ */ new Map(), Gi = [], HM = [
    "mousedown",
    "mouseup",
    "touchcancel",
    "touchend",
    "touchstart",
    "auxclick",
    "dblclick",
    "pointercancel",
    "pointerdown",
    "pointerup",
    "dragend",
    "dragstart",
    "drop",
    "compositionend",
    "compositionstart",
    "keydown",
    "keypress",
    "keyup",
    "input",
    "textInput",
    // Intentionally camelCase
    "copy",
    "cut",
    "paste",
    "click",
    "change",
    "contextmenu",
    "reset",
    "submit"
  ];
  function PM(e) {
    return HM.indexOf(e) > -1;
  }
  function $M(e, t, a, i, u) {
    return { blockedOn: e, domEventName: t, eventSystemFlags: a, nativeEvent: u, targetContainers: [i] };
  }
  function b1(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Yi = null;
        break;
      case "dragenter":
      case "dragleave":
        Qi = null;
        break;
      case "mouseover":
      case "mouseout":
        Wi = null;
        break;
      case "pointerover":
      case "pointerout": {
        var a = t.pointerId;
        Zs.delete(a);
        break;
      }
      case "gotpointercapture":
      case "lostpointercapture": {
        var i = t.pointerId;
        Js.delete(i);
        break;
      }
    }
  }
  function ec(e, t, a, i, u, s) {
    if (e === null || e.nativeEvent !== s) {
      var f = $M(t, a, i, u, s);
      if (t !== null) {
        var v = qi(t);
        v !== null && $m(v);
      }
      return f;
    }
    e.eventSystemFlags |= i;
    var h = e.targetContainers;
    return u !== null && h.indexOf(u) === -1 && h.push(u), e;
  }
  function VM(e, t, a, i, u) {
    switch (t) {
      case "focusin": {
        var s = u;
        return Yi = ec(Yi, e, t, a, i, s), !0;
      }
      case "dragenter": {
        var f = u;
        return Qi = ec(Qi, e, t, a, i, f), !0;
      }
      case "mouseover": {
        var v = u;
        return Wi = ec(Wi, e, t, a, i, v), !0;
      }
      case "pointerover": {
        var h = u, y = h.pointerId;
        return Zs.set(y, ec(Zs.get(y) || null, e, t, a, i, h)), !0;
      }
      case "gotpointercapture": {
        var g = u, D = g.pointerId;
        return Js.set(D, ec(Js.get(D) || null, e, t, a, i, g)), !0;
      }
    }
    return !1;
  }
  function D1(e) {
    var t = iu(e.target);
    if (t !== null) {
      var a = ql(t);
      if (a !== null) {
        var i = a.tag;
        if (i === I) {
          var u = qC(a);
          if (u !== null) {
            e.blockedOn = u, w1(e.priority, function() {
              T1(a);
            });
            return;
          }
        } else if (i === L) {
          var s = a.stateNode;
          if (Ld(s)) {
            e.blockedOn = ZC(a);
            return;
          }
        }
      }
    }
    e.blockedOn = null;
  }
  function BM(e) {
    for (var t = x1(), a = { blockedOn: null, target: e, priority: t }, i = 0; i < Gi.length && Pm(t, Gi[i].priority); i++)
      ;
    Gi.splice(i, 0, a), i === 0 && D1(a);
  }
  function zd(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; t.length > 0; ) {
      var a = t[0], i = Ym(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
      if (i === null) {
        var u = e.nativeEvent, s = new u.constructor(u.type, u);
        hO(s), u.target.dispatchEvent(s), mO();
      } else {
        var f = qi(i);
        return f !== null && $m(f), e.blockedOn = i, !1;
      }
      t.shift();
    }
    return !0;
  }
  function _1(e, t, a) {
    zd(e) && a.delete(t);
  }
  function IM() {
    Vm = !1, Yi !== null && zd(Yi) && (Yi = null), Qi !== null && zd(Qi) && (Qi = null), Wi !== null && zd(Wi) && (Wi = null), Zs.forEach(_1), Js.forEach(_1);
  }
  function tc(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Vm || (Vm = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, IM)));
  }
  function nc(e) {
    if (Nd.length > 0) {
      tc(Nd[0], e);
      for (var t = 1; t < Nd.length; t++) {
        var a = Nd[t];
        a.blockedOn === e && (a.blockedOn = null);
      }
    }
    Yi !== null && tc(Yi, e), Qi !== null && tc(Qi, e), Wi !== null && tc(Wi, e);
    var i = function(v) {
      return tc(v, e);
    };
    Zs.forEach(i), Js.forEach(i);
    for (var u = 0; u < Gi.length; u++) {
      var s = Gi[u];
      s.blockedOn === e && (s.blockedOn = null);
    }
    for (; Gi.length > 0; ) {
      var f = Gi[0];
      if (f.blockedOn !== null)
        break;
      D1(f), f.blockedOn === null && Gi.shift();
    }
  }
  var uo = l.ReactCurrentBatchConfig, Bm = !0;
  function k1(e) {
    Bm = !!e;
  }
  function YM() {
    return Bm;
  }
  function QM(e, t, a) {
    var i = O1(t), u;
    switch (i) {
      case pr:
        u = WM;
        break;
      case oi:
        u = GM;
        break;
      case si:
      default:
        u = Im;
        break;
    }
    return u.bind(null, t, a, e);
  }
  function WM(e, t, a, i) {
    var u = Xr(), s = uo.transition;
    uo.transition = null;
    try {
      un(pr), Im(e, t, a, i);
    } finally {
      un(u), uo.transition = s;
    }
  }
  function GM(e, t, a, i) {
    var u = Xr(), s = uo.transition;
    uo.transition = null;
    try {
      un(oi), Im(e, t, a, i);
    } finally {
      un(u), uo.transition = s;
    }
  }
  function Im(e, t, a, i) {
    Bm && XM(e, t, a, i);
  }
  function XM(e, t, a, i) {
    var u = Ym(e, t, a, i);
    if (u === null) {
      iy(e, t, i, Ud, a), b1(e, i);
      return;
    }
    if (VM(u, e, t, a, i)) {
      i.stopPropagation();
      return;
    }
    if (b1(e, i), t & As && PM(e)) {
      for (; u !== null; ) {
        var s = qi(u);
        s !== null && zM(s);
        var f = Ym(e, t, a, i);
        if (f === null && iy(e, t, i, Ud, a), f === u)
          break;
        u = f;
      }
      u !== null && i.stopPropagation();
      return;
    }
    iy(e, t, i, null, a);
  }
  var Ud = null;
  function Ym(e, t, a, i) {
    Ud = null;
    var u = Zh(i), s = iu(u);
    if (s !== null) {
      var f = ql(s);
      if (f === null)
        s = null;
      else {
        var v = f.tag;
        if (v === I) {
          var h = qC(f);
          if (h !== null)
            return h;
          s = null;
        } else if (v === L) {
          var y = f.stateNode;
          if (Ld(y))
            return ZC(f);
          s = null;
        } else
          f !== s && (s = null);
      }
    }
    return Ud = s, null;
  }
  function O1(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return pr;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return oi;
      case "message": {
        var t = PO();
        switch (t) {
          case xd:
            return pr;
          case dm:
            return oi;
          case Zl:
          case $O:
            return si;
          case pm:
            return Md;
          default:
            return si;
        }
      }
      default:
        return si;
    }
  }
  function KM(e, t, a) {
    return e.addEventListener(t, a, !1), a;
  }
  function qM(e, t, a) {
    return e.addEventListener(t, a, !0), a;
  }
  function ZM(e, t, a, i) {
    return e.addEventListener(t, a, { capture: !0, passive: i }), a;
  }
  function JM(e, t, a, i) {
    return e.addEventListener(t, a, { passive: i }), a;
  }
  var rc = null, Qm = null, ac = null;
  function eL(e) {
    return rc = e, Qm = L1(), !0;
  }
  function tL() {
    rc = null, Qm = null, ac = null;
  }
  function M1() {
    if (ac)
      return ac;
    var e, t = Qm, a = t.length, i, u = L1(), s = u.length;
    for (e = 0; e < a && t[e] === u[e]; e++)
      ;
    var f = a - e;
    for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
      ;
    var v = i > 1 ? 1 - i : void 0;
    return ac = u.slice(e, v), ac;
  }
  function L1() {
    return "value" in rc ? rc.value : rc.textContent;
  }
  function Ad(e) {
    var t, a = e.keyCode;
    return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
  }
  function jd() {
    return !0;
  }
  function N1() {
    return !1;
  }
  function vr(e) {
    function t(a, i, u, s, f) {
      this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
      for (var v in e)
        if (e.hasOwnProperty(v)) {
          var h = e[v];
          h ? this[v] = h(s) : this[v] = s[v];
        }
      var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
      return y ? this.isDefaultPrevented = jd : this.isDefaultPrevented = N1, this.isPropagationStopped = N1, this;
    }
    return Fe(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = jd);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = jd);
      },
      /**
      * We release all dispatched `SyntheticEvent`s after each event loop, adding
      * them back into the pool. This allows a way to hold onto a reference that
      * won't be added back into the pool.
      */
      persist: function() {
      },
      /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
      isPersistent: jd
    }), t;
  }
  var oo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Wm = vr(oo), ic = Fe({}, oo, { view: 0, detail: 0 }), nL = vr(ic), Gm, Xm, lc;
  function rL(e) {
    e !== lc && (lc && e.type === "mousemove" ? (Gm = e.screenX - lc.screenX, Xm = e.screenY - lc.screenY) : (Gm = 0, Xm = 0), lc = e);
  }
  var Fd = Fe({}, ic, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: qm, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (rL(e), Gm);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Xm;
  } }), z1 = vr(Fd), aL = Fe({}, Fd, { dataTransfer: 0 }), iL = vr(aL), lL = Fe({}, ic, { relatedTarget: 0 }), Km = vr(lL), uL = Fe({}, oo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oL = vr(uL), sL = Fe({}, oo, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), cL = vr(sL), fL = Fe({}, oo, { data: 0 }), U1 = vr(fL), dL = U1, pL = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, vL = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" };
  function hL(e) {
    if (e.key) {
      var t = pL[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    if (e.type === "keypress") {
      var a = Ad(e);
      return a === 13 ? "Enter" : String.fromCharCode(a);
    }
    return e.type === "keydown" || e.type === "keyup" ? vL[e.keyCode] || "Unidentified" : "";
  }
  var mL = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function yL(e) {
    var t = this, a = t.nativeEvent;
    if (a.getModifierState)
      return a.getModifierState(e);
    var i = mL[e];
    return i ? !!a[i] : !1;
  }
  function qm(e) {
    return yL;
  }
  var gL = Fe({}, ic, {
    key: hL,
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: qm,
    // Legacy Interface
    charCode: function(e) {
      return e.type === "keypress" ? Ad(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ad(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), SL = vr(gL), EL = Fe({}, Fd, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), A1 = vr(EL), CL = Fe({}, ic, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: qm }), RL = vr(CL), TL = Fe({}, oo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), xL = vr(TL), wL = Fe({}, Fd, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : (
        // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
        "wheelDeltaX" in e ? -e.wheelDeltaX : 0
      );
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : (
        // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
        "wheelDeltaY" in e ? -e.wheelDeltaY : (
          // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
          "wheelDelta" in e ? -e.wheelDelta : 0
        )
      );
    },
    deltaZ: 0,
    // Browsers without "deltaMode" is reporting in raw wheel delta where one
    // notch on the scroll is always +/- 120, roughly equivalent to pixels.
    // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
    // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
    deltaMode: 0
  }), bL = vr(wL), DL = [9, 13, 27, 32], j1 = 229, Zm = tn && "CompositionEvent" in window, uc = null;
  tn && "documentMode" in document && (uc = document.documentMode);
  var _L = tn && "TextEvent" in window && !uc, F1 = tn && (!Zm || uc && uc > 8 && uc <= 11), H1 = 32, P1 = String.fromCharCode(H1);
  function kL() {
    $r("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), $r("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), $r("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), $r("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
  }
  var $1 = !1;
  function OL(e) {
    return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
    !(e.ctrlKey && e.altKey);
  }
  function ML(e) {
    switch (e) {
      case "compositionstart":
        return "onCompositionStart";
      case "compositionend":
        return "onCompositionEnd";
      case "compositionupdate":
        return "onCompositionUpdate";
    }
  }
  function LL(e, t) {
    return e === "keydown" && t.keyCode === j1;
  }
  function V1(e, t) {
    switch (e) {
      case "keyup":
        return DL.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== j1;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function B1(e) {
    var t = e.detail;
    return typeof t == "object" && "data" in t ? t.data : null;
  }
  function I1(e) {
    return e.locale === "ko";
  }
  var so = !1;
  function NL(e, t, a, i, u) {
    var s, f;
    if (Zm ? s = ML(t) : so ? V1(t, i) && (s = "onCompositionEnd") : LL(t, i) && (s = "onCompositionStart"), !s)
      return null;
    F1 && !I1(i) && (!so && s === "onCompositionStart" ? so = eL(u) : s === "onCompositionEnd" && so && (f = M1()));
    var v = Bd(a, s);
    if (v.length > 0) {
      var h = new U1(s, t, null, i, u);
      if (e.push({ event: h, listeners: v }), f)
        h.data = f;
      else {
        var y = B1(i);
        y !== null && (h.data = y);
      }
    }
  }
  function zL(e, t) {
    switch (e) {
      case "compositionend":
        return B1(t);
      case "keypress":
        var a = t.which;
        return a !== H1 ? null : ($1 = !0, P1);
      case "textInput":
        var i = t.data;
        return i === P1 && $1 ? null : i;
      default:
        return null;
    }
  }
  function UL(e, t) {
    if (so) {
      if (e === "compositionend" || !Zm && V1(e, t)) {
        var a = M1();
        return tL(), so = !1, a;
      }
      return null;
    }
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!OL(t)) {
          if (t.char && t.char.length > 1)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return F1 && !I1(t) ? null : t.data;
      default:
        return null;
    }
  }
  function AL(e, t, a, i, u) {
    var s;
    if (_L ? s = zL(t, i) : s = UL(t, i), !s)
      return null;
    var f = Bd(a, "onBeforeInput");
    if (f.length > 0) {
      var v = new dL("onBeforeInput", "beforeinput", null, i, u);
      e.push({ event: v, listeners: f }), v.data = s;
    }
  }
  function jL(e, t, a, i, u, s, f) {
    NL(e, t, a, i, u), AL(e, t, a, i, u);
  }
  var FL = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Y1(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!FL[e.type] : t === "textarea";
  }
  /**
  * Checks if an event is supported in the current execution environment.
  *
  * NOTE: This will not work correctly for non-generic events such as `change`,
  * `reset`, `load`, `error`, and `select`.
  *
  * Borrows from Modernizr.
  *
  * @param {string} eventNameSuffix Event name, e.g. "click".
  * @return {boolean} True if the event is supported.
  * @internal
  * @license Modernizr 3.0.0pre (Custom Build) | MIT
  */
  function HL(e) {
    if (!tn)
      return !1;
    var t = "on" + e, a = t in document;
    if (!a) {
      var i = document.createElement("div");
      i.setAttribute(t, "return;"), a = typeof i[t] == "function";
    }
    return a;
  }
  function PL() {
    $r("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
  }
  function Q1(e, t, a, i) {
    BC(i);
    var u = Bd(t, "onChange");
    if (u.length > 0) {
      var s = new Wm("onChange", "change", null, a, i);
      e.push({ event: s, listeners: u });
    }
  }
  var oc = null, sc = null;
  function $L(e) {
    var t = e.nodeName && e.nodeName.toLowerCase();
    return t === "select" || t === "input" && e.type === "file";
  }
  function VL(e) {
    var t = [];
    Q1(t, sc, e, Zh(e)), WC(BL, t);
  }
  function BL(e) {
    cR(e, 0);
  }
  function Hd(e) {
    var t = mo(e);
    if (Iu(t))
      return e;
  }
  function IL(e, t) {
    if (e === "change")
      return t;
  }
  var W1 = !1;
  tn && (W1 = HL("input") && (!document.documentMode || document.documentMode > 9));
  function YL(e, t) {
    oc = e, sc = t, oc.attachEvent("onpropertychange", X1);
  }
  function G1() {
    oc && (oc.detachEvent("onpropertychange", X1), oc = null, sc = null);
  }
  function X1(e) {
    e.propertyName === "value" && Hd(sc) && VL(e);
  }
  function QL(e, t, a) {
    e === "focusin" ? (G1(), YL(t, a)) : e === "focusout" && G1();
  }
  function WL(e, t) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Hd(sc);
  }
  function GL(e) {
    var t = e.nodeName;
    return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
  }
  function XL(e, t) {
    if (e === "click")
      return Hd(t);
  }
  function KL(e, t) {
    if (e === "input" || e === "change")
      return Hd(t);
  }
  function qL(e) {
    var t = e._wrapperState;
    !t || !t.controlled || e.type !== "number" || we(e, "number", e.value);
  }
  function ZL(e, t, a, i, u, s, f) {
    var v = a ? mo(a) : window, h, y;
    if ($L(v) ? h = IL : Y1(v) ? W1 ? h = KL : (h = WL, y = QL) : GL(v) && (h = XL), h) {
      var g = h(t, a);
      if (g) {
        Q1(e, g, i, u);
        return;
      }
    }
    y && y(t, v, a), t === "focusout" && qL(v);
  }
  function JL() {
    Vr("onMouseEnter", ["mouseout", "mouseover"]), Vr("onMouseLeave", ["mouseout", "mouseover"]), Vr("onPointerEnter", ["pointerout", "pointerover"]), Vr("onPointerLeave", ["pointerout", "pointerover"]);
  }
  function eN(e, t, a, i, u, s, f) {
    var v = t === "mouseover" || t === "pointerover", h = t === "mouseout" || t === "pointerout";
    if (v && !yO(i)) {
      var y = i.relatedTarget || i.fromElement;
      if (y && (iu(y) || xc(y)))
        return;
    }
    if (!(!h && !v)) {
      var g;
      if (u.window === u)
        g = u;
      else {
        var D = u.ownerDocument;
        D ? g = D.defaultView || D.parentWindow : g = window;
      }
      var w, z;
      if (h) {
        var U = i.relatedTarget || i.toElement;
        if (w = a, z = U ? iu(U) : null, z !== null) {
          var P = ql(z);
          (z !== P || z.tag !== F && z.tag !== Y) && (z = null);
        }
      } else
        w = null, z = a;
      if (w !== z) {
        var oe = z1, ye = "onMouseLeave", he = "onMouseEnter", Ve = "mouse";
        (t === "pointerout" || t === "pointerover") && (oe = A1, ye = "onPointerLeave", he = "onPointerEnter", Ve = "pointer");
        var ze = w == null ? g : mo(w), k = z == null ? g : mo(z), $ = new oe(ye, Ve + "leave", w, i, u);
        $.target = ze, $.relatedTarget = k;
        var O = null, G = iu(u);
        if (G === a) {
          var se = new oe(he, Ve + "enter", z, i, u);
          se.target = k, se.relatedTarget = ze, O = se;
        }
        xN(e, $, O, w, z);
      }
    }
  }
  function tN(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var hr = typeof Object.is == "function" ? Object.is : tN;
  function cc(e, t) {
    if (hr(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), i = Object.keys(t);
    if (a.length !== i.length)
      return !1;
    for (var u = 0; u < a.length; u++) {
      var s = a[u];
      if (!Br.call(t, s) || !hr(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  function K1(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function nN(e) {
    for (; e; ) {
      if (e.nextSibling)
        return e.nextSibling;
      e = e.parentNode;
    }
  }
  function q1(e, t) {
    for (var a = K1(e), i = 0, u = 0; a; ) {
      if (a.nodeType === ti) {
        if (u = i + a.textContent.length, i <= t && u >= t)
          return { node: a, offset: t - i };
        i = u;
      }
      a = K1(nN(a));
    }
  }
  function rN(e) {
    var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
    if (!i || i.rangeCount === 0)
      return null;
    var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, v = i.focusOffset;
    try {
      u.nodeType, f.nodeType;
    } catch (h) {
      return null;
    }
    return aN(e, u, s, f, v);
  }
  function aN(e, t, a, i, u) {
    var s = 0, f = -1, v = -1, h = 0, y = 0, g = e, D = null;
    e:
      for (; ; ) {
        for (var w = null; g === t && (a === 0 || g.nodeType === ti) && (f = s + a), g === i && (u === 0 || g.nodeType === ti) && (v = s + u), g.nodeType === ti && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
          D = g, g = w;
        for (; ; ) {
          if (g === e)
            break e;
          if (D === t && ++h === a && (f = s), D === i && ++y === u && (v = s), (w = g.nextSibling) !== null)
            break;
          g = D, D = g.parentNode;
        }
        g = w;
      }
    return f === -1 || v === -1 ? null : { start: f, end: v };
  }
  function iN(e, t) {
    var a = e.ownerDocument || document, i = a && a.defaultView || window;
    if (i.getSelection) {
      var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), v = t.end === void 0 ? f : Math.min(t.end, s);
      if (!u.extend && f > v) {
        var h = v;
        v = f, f = h;
      }
      var y = q1(e, f), g = q1(e, v);
      if (y && g) {
        if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
          return;
        var D = a.createRange();
        D.setStart(y.node, y.offset), u.removeAllRanges(), f > v ? (u.addRange(D), u.extend(g.node, g.offset)) : (D.setEnd(g.node, g.offset), u.addRange(D));
      }
    }
  }
  function Z1(e) {
    return e && e.nodeType === ti;
  }
  function J1(e, t) {
    return !e || !t ? !1 : e === t ? !0 : Z1(e) ? !1 : Z1(t) ? J1(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
  }
  function lN(e) {
    return e && e.ownerDocument && J1(e.ownerDocument.documentElement, e);
  }
  function uN(e) {
    try {
      return typeof e.contentWindow.location.href == "string";
    } catch (t) {
      return !1;
    }
  }
  function eR() {
    for (var e = window, t = Vi(); t instanceof e.HTMLIFrameElement; ) {
      if (uN(t))
        e = t.contentWindow;
      else
        return t;
      t = Vi(e.document);
    }
    return t;
  }
  function Jm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function oN() {
    var e = eR();
    return { focusedElem: e, selectionRange: Jm(e) ? cN(e) : null };
  }
  function sN(e) {
    var t = eR(), a = e.focusedElem, i = e.selectionRange;
    if (t !== a && lN(a)) {
      i !== null && Jm(a) && fN(a, i);
      for (var u = [], s = a; s = s.parentNode; )
        s.nodeType === Zn && u.push({ element: s, left: s.scrollLeft, top: s.scrollTop });
      typeof a.focus == "function" && a.focus();
      for (var f = 0; f < u.length; f++) {
        var v = u[f];
        v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
      }
    }
  }
  function cN(e) {
    var t;
    return "selectionStart" in e ? t = { start: e.selectionStart, end: e.selectionEnd } : t = rN(e), t || { start: 0, end: 0 };
  }
  function fN(e, t) {
    var a = t.start, i = t.end;
    i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : iN(e, t);
  }
  var dN = tn && "documentMode" in document && document.documentMode <= 11;
  function pN() {
    $r("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
  }
  var co = null, ey = null, fc = null, ty = !1;
  function vN(e) {
    if ("selectionStart" in e && Jm(e))
      return { start: e.selectionStart, end: e.selectionEnd };
    var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
    return { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset };
  }
  function hN(e) {
    return e.window === e ? e.document : e.nodeType === ni ? e : e.ownerDocument;
  }
  function tR(e, t, a) {
    var i = hN(a);
    if (!(ty || co == null || co !== Vi(i))) {
      var u = vN(co);
      if (!fc || !cc(fc, u)) {
        fc = u;
        var s = Bd(ey, "onSelect");
        if (s.length > 0) {
          var f = new Wm("onSelect", "select", null, t, a);
          e.push({ event: f, listeners: s }), f.target = co;
        }
      }
    }
  }
  function mN(e, t, a, i, u, s, f) {
    var v = a ? mo(a) : window;
    switch (t) {
      case "focusin":
        (Y1(v) || v.contentEditable === "true") && (co = v, ey = a, fc = null);
        break;
      case "focusout":
        co = null, ey = null, fc = null;
        break;
      case "mousedown":
        ty = !0;
        break;
      case "contextmenu":
      case "mouseup":
      case "dragend":
        ty = !1, tR(e, i, u);
        break;
      case "selectionchange":
        if (dN)
          break;
      case "keydown":
      case "keyup":
        tR(e, i, u);
    }
  }
  function Pd(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var fo = { animationend: Pd("Animation", "AnimationEnd"), animationiteration: Pd("Animation", "AnimationIteration"), animationstart: Pd("Animation", "AnimationStart"), transitionend: Pd("Transition", "TransitionEnd") }, ny = {}, nR = {};
  tn && (nR = document.createElement("div").style, "AnimationEvent" in window || (delete fo.animationend.animation, delete fo.animationiteration.animation, delete fo.animationstart.animation), "TransitionEvent" in window || delete fo.transitionend.transition);
  function $d(e) {
    if (ny[e])
      return ny[e];
    if (!fo[e])
      return e;
    var t = fo[e];
    for (var a in t)
      if (t.hasOwnProperty(a) && a in nR)
        return ny[e] = t[a];
    return e;
  }
  var rR = $d("animationend"), aR = $d("animationiteration"), iR = $d("animationstart"), lR = $d("transitionend"), uR = /* @__PURE__ */ new Map(), oR = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
  function Xi(e, t) {
    uR.set(e, t), $r(t, [e]);
  }
  function yN() {
    for (var e = 0; e < oR.length; e++) {
      var t = oR[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
      Xi(a, "on" + i);
    }
    Xi(rR, "onAnimationEnd"), Xi(aR, "onAnimationIteration"), Xi(iR, "onAnimationStart"), Xi("dblclick", "onDoubleClick"), Xi("focusin", "onFocus"), Xi("focusout", "onBlur"), Xi(lR, "onTransitionEnd");
  }
  function gN(e, t, a, i, u, s, f) {
    var v = uR.get(t);
    if (v !== void 0) {
      var h = Wm, y = t;
      switch (t) {
        case "keypress":
          if (Ad(i) === 0)
            return;
        case "keydown":
        case "keyup":
          h = SL;
          break;
        case "focusin":
          y = "focus", h = Km;
          break;
        case "focusout":
          y = "blur", h = Km;
          break;
        case "beforeblur":
        case "afterblur":
          h = Km;
          break;
        case "click":
          if (i.button === 2)
            return;
        case "auxclick":
        case "dblclick":
        case "mousedown":
        case "mousemove":
        case "mouseup":
        case "mouseout":
        case "mouseover":
        case "contextmenu":
          h = z1;
          break;
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          h = iL;
          break;
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          h = RL;
          break;
        case rR:
        case aR:
        case iR:
          h = oL;
          break;
        case lR:
          h = xL;
          break;
        case "scroll":
          h = nL;
          break;
        case "wheel":
          h = bL;
          break;
        case "copy":
        case "cut":
        case "paste":
          h = cL;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          h = A1;
          break;
      }
      var g = (s & As) !== 0;
      {
        var D = !g && // TODO: ideally, we'd eventually add all events from
        // nonDelegatedEvents list in DOMPluginEventSystem.
        // Then we can remove this special list.
        // This is a breaking change that can wait until React 18.
        t === "scroll", w = RN(a, v, i.type, g, D);
        if (w.length > 0) {
          var z = new h(v, y, null, i, u);
          e.push({ event: z, listeners: w });
        }
      }
    }
  }
  yN(), JL(), PL(), pN(), kL();
  function SN(e, t, a, i, u, s, f) {
    gN(e, t, a, i, u, s);
    var v = (s & vO) === 0;
    v && (eN(e, t, a, i, u), ZL(e, t, a, i, u), mN(e, t, a, i, u), jL(e, t, a, i, u));
  }
  var dc = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], ry = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(dc));
  function sR(e, t, a) {
    var i = e.type || "unknown-event";
    e.currentTarget = a, bO(i, t, void 0, e), e.currentTarget = null;
  }
  function EN(e, t, a) {
    var i;
    if (a)
      for (var u = t.length - 1; u >= 0; u--) {
        var s = t[u], f = s.instance, v = s.currentTarget, h = s.listener;
        if (f !== i && e.isPropagationStopped())
          return;
        sR(e, h, v), i = f;
      }
    else
      for (var y = 0; y < t.length; y++) {
        var g = t[y], D = g.instance, w = g.currentTarget, z = g.listener;
        if (D !== i && e.isPropagationStopped())
          return;
        sR(e, z, w), i = D;
      }
  }
  function cR(e, t) {
    for (var a = (t & As) !== 0, i = 0; i < e.length; i++) {
      var u = e[i], s = u.event, f = u.listeners;
      EN(s, f, a);
    }
    DO();
  }
  function CN(e, t, a, i, u) {
    var s = Zh(a), f = [];
    SN(f, e, i, a, s, t), cR(f, t);
  }
  function Tt(e, t) {
    ry.has(e) || d('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
    var a = !1, i = qz(t), u = wN(e, a);
    i.has(u) || (fR(t, e, qh, a), i.add(u));
  }
  function ay(e, t, a) {
    ry.has(e) && !t && d('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
    var i = 0;
    t && (i |= As), fR(a, e, i, t);
  }
  var Vd = "_reactListening" + Math.random().toString(36).slice(2);
  function pc(e) {
    if (!e[Vd]) {
      e[Vd] = !0, et.forEach(function(a) {
        a !== "selectionchange" && (ry.has(a) || ay(a, !1, e), ay(a, !0, e));
      });
      var t = e.nodeType === ni ? e : e.ownerDocument;
      t !== null && (t[Vd] || (t[Vd] = !0, ay("selectionchange", !1, t)));
    }
  }
  function fR(e, t, a, i, u) {
    var s = QM(e, t, a), f = void 0;
    tm && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? ZM(e, t, s, f) : qM(e, t, s) : f !== void 0 ? JM(e, t, s, f) : KM(e, t, s);
  }
  function dR(e, t) {
    return e === t || e.nodeType === Ht && e.parentNode === t;
  }
  function iy(e, t, a, i, u) {
    var s = i;
    if (!(t & $C) && !(t & qh)) {
      var f = u;
      if (i !== null) {
        var v = i;
        e:
          for (; ; ) {
            if (v === null)
              return;
            var h = v.tag;
            if (h === L || h === M) {
              var y = v.stateNode.containerInfo;
              if (dR(y, f))
                break;
              if (h === M)
                for (var g = v.return; g !== null; ) {
                  var D = g.tag;
                  if (D === L || D === M) {
                    var w = g.stateNode.containerInfo;
                    if (dR(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var z = iu(y);
                if (z === null)
                  return;
                var U = z.tag;
                if (U === F || U === Y) {
                  v = s = z;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            v = v.return;
          }
      }
    }
    WC(function() {
      return CN(e, t, a, s);
    });
  }
  function vc(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function RN(e, t, a, i, u, s) {
    for (var f = t !== null ? t + "Capture" : null, v = i ? f : t, h = [], y = e, g = null; y !== null; ) {
      var D = y, w = D.stateNode, z = D.tag;
      if (z === F && w !== null && (g = w, v !== null)) {
        var U = Fs(y, v);
        U != null && h.push(vc(y, U, g));
      }
      if (u)
        break;
      y = y.return;
    }
    return h;
  }
  function Bd(e, t) {
    for (var a = t + "Capture", i = [], u = e; u !== null; ) {
      var s = u, f = s.stateNode, v = s.tag;
      if (v === F && f !== null) {
        var h = f, y = Fs(u, a);
        y != null && i.unshift(vc(u, y, h));
        var g = Fs(u, t);
        g != null && i.push(vc(u, g, h));
      }
      u = u.return;
    }
    return i;
  }
  function po(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== F);
    return e || null;
  }
  function TN(e, t) {
    for (var a = e, i = t, u = 0, s = a; s; s = po(s))
      u++;
    for (var f = 0, v = i; v; v = po(v))
      f++;
    for (; u - f > 0; )
      a = po(a), u--;
    for (; f - u > 0; )
      i = po(i), f--;
    for (var h = u; h--; ) {
      if (a === i || i !== null && a === i.alternate)
        return a;
      a = po(a), i = po(i);
    }
    return null;
  }
  function pR(e, t, a, i, u) {
    for (var s = t._reactName, f = [], v = a; v !== null && v !== i; ) {
      var h = v, y = h.alternate, g = h.stateNode, D = h.tag;
      if (y !== null && y === i)
        break;
      if (D === F && g !== null) {
        var w = g;
        if (u) {
          var z = Fs(v, s);
          z != null && f.unshift(vc(v, z, w));
        } else if (!u) {
          var U = Fs(v, s);
          U != null && f.push(vc(v, U, w));
        }
      }
      v = v.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  function xN(e, t, a, i, u) {
    var s = i && u ? TN(i, u) : null;
    i !== null && pR(e, t, i, s, !1), u !== null && a !== null && pR(e, a, u, s, !0);
  }
  function wN(e, t) {
    return e + "__" + (t ? "capture" : "bubble");
  }
  var Jn = !1, hc = "dangerouslySetInnerHTML", Id = "suppressContentEditableWarning", Ki = "suppressHydrationWarning", vR = "autoFocus", ru = "children", au = "style", Yd = "__html", ly, Qd, mc, hR, Wd, mR, yR;
  ly = {
    // There are working polyfills for <dialog>. Let people use it.
    dialog: !0,
    // Electron ships a custom <webview> tag to display external web content in
    // an isolated frame and process.
    // This tag is not present in non Electron environments such as JSDom which
    // is often used for testing purposes.
    // @see https://electronjs.org/docs/api/webview-tag
    webview: !0
  }, Qd = function(e, t) {
    uO(e, t), oO(e, t), pO(e, t, { registrationNameDependencies: ft, possibleRegistrationNames: xr });
  }, mR = tn && !document.documentMode, mc = function(e, t, a) {
    if (!Jn) {
      var i = Gd(a), u = Gd(t);
      u !== i && (Jn = !0, d("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
    }
  }, hR = function(e) {
    if (!Jn) {
      Jn = !0;
      var t = [];
      e.forEach(function(a) {
        t.push(a);
      }), d("Extra attributes from the server: %s", t);
    }
  }, Wd = function(e, t) {
    t === !1 ? d("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : d("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
  }, yR = function(e, t) {
    var a = e.namespaceURI === ei ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
    return a.innerHTML = t, a.innerHTML;
  };
  var bN = /\r\n?/g, DN = /\u0000|\uFFFD/g;
  function Gd(e) {
    Ni(e);
    var t = typeof e == "string" ? e : "" + e;
    return t.replace(bN, `
`).replace(DN, "");
  }
  function Xd(e, t, a, i) {
    var u = Gd(t), s = Gd(e);
    if (s !== u && (i && (Jn || (Jn = !0, d('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && me))
      throw new Error("Text content does not match server-rendered HTML.");
  }
  function gR(e) {
    return e.nodeType === ni ? e : e.ownerDocument;
  }
  function _N() {
  }
  function Kd(e) {
    e.onclick = _N;
  }
  function kN(e, t, a, i, u) {
    for (var s in i)
      if (i.hasOwnProperty(s)) {
        var f = i[s];
        if (s === au)
          f && Object.freeze(f), UC(t, f);
        else if (s === hc) {
          var v = f ? f[Yd] : void 0;
          v != null && OC(t, v);
        } else if (s === ru)
          if (typeof f == "string") {
            var h = e !== "textarea" || f !== "";
            h && gd(t, f);
          } else
            typeof f == "number" && gd(t, "" + f);
        else
          s === Id || s === Ki || s === vR || (ft.hasOwnProperty(s) ? f != null && (typeof f != "function" && Wd(s, f), s === "onScroll" && Tt("scroll", t)) : f != null && Ka(t, s, f, u));
      }
  }
  function ON(e, t, a, i) {
    for (var u = 0; u < t.length; u += 2) {
      var s = t[u], f = t[u + 1];
      s === au ? UC(e, f) : s === hc ? OC(e, f) : s === ru ? gd(e, f) : Ka(e, s, f, i);
    }
  }
  function MN(e, t, a, i) {
    var u, s = gR(a), f, v = i;
    if (v === ei && (v = Yh(e)), v === ei) {
      if (u = Ql(e, t), !u && e !== e.toLowerCase() && d("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
        var h = s.createElement("div");
        h.innerHTML = "<script><\/script>";
        var y = h.firstChild;
        f = h.removeChild(y);
      } else if (typeof t.is == "string")
        f = s.createElement(e, { is: t.is });
      else if (f = s.createElement(e), e === "select") {
        var g = f;
        t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
      }
    } else
      f = s.createElementNS(v, e);
    return v === ei && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Br.call(ly, e) && (ly[e] = !0, d("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
  }
  function LN(e, t) {
    return gR(t).createTextNode(e);
  }
  function NN(e, t, a, i) {
    var u = Ql(t, a);
    Qd(t, a);
    var s;
    switch (t) {
      case "dialog":
        Tt("cancel", e), Tt("close", e), s = a;
        break;
      case "iframe":
      case "object":
      case "embed":
        Tt("load", e), s = a;
        break;
      case "video":
      case "audio":
        for (var f = 0; f < dc.length; f++)
          Tt(dc[f], e);
        s = a;
        break;
      case "source":
        Tt("error", e), s = a;
        break;
      case "img":
      case "image":
      case "link":
        Tt("error", e), Tt("load", e), s = a;
        break;
      case "details":
        Tt("toggle", e), s = a;
        break;
      case "input":
        C(e, a), s = m(e, a), Tt("invalid", e);
        break;
      case "option":
        pt(e, a), s = a;
        break;
      case "select":
        zs(e, a), s = Ns(e, a), Tt("invalid", e);
        break;
      case "textarea":
        DC(e, a), s = Bh(e, a), Tt("invalid", e);
        break;
      default:
        s = a;
    }
    switch (Kh(t, s), kN(t, e, i, s, u), t) {
      case "input":
        Za(e), J(e, a, !1);
        break;
      case "textarea":
        Za(e), kC(e);
        break;
      case "option":
        Rt(e, a);
        break;
      case "select":
        Vh(e, a);
        break;
      default:
        typeof s.onClick == "function" && Kd(e);
        break;
    }
  }
  function zN(e, t, a, i, u) {
    Qd(t, i);
    var s = null, f, v;
    switch (t) {
      case "input":
        f = m(e, a), v = m(e, i), s = [];
        break;
      case "select":
        f = Ns(e, a), v = Ns(e, i), s = [];
        break;
      case "textarea":
        f = Bh(e, a), v = Bh(e, i), s = [];
        break;
      default:
        f = a, v = i, typeof f.onClick != "function" && typeof v.onClick == "function" && Kd(e);
        break;
    }
    Kh(t, v);
    var h, y, g = null;
    for (h in f)
      if (!(v.hasOwnProperty(h) || !f.hasOwnProperty(h) || f[h] == null))
        if (h === au) {
          var D = f[h];
          for (y in D)
            D.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
        } else
          h === hc || h === ru || h === Id || h === Ki || h === vR || (ft.hasOwnProperty(h) ? s || (s = []) : (s = s || []).push(h, null));
    for (h in v) {
      var w = v[h], z = f != null ? f[h] : void 0;
      if (!(!v.hasOwnProperty(h) || w === z || w == null && z == null))
        if (h === au)
          if (w && Object.freeze(w), z) {
            for (y in z)
              z.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
            for (y in w)
              w.hasOwnProperty(y) && z[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
          } else
            g || (s || (s = []), s.push(h, g)), g = w;
        else if (h === hc) {
          var U = w ? w[Yd] : void 0, P = z ? z[Yd] : void 0;
          U != null && P !== U && (s = s || []).push(h, U);
        } else
          h === ru ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(h, "" + w) : h === Id || h === Ki || (ft.hasOwnProperty(h) ? (w != null && (typeof w != "function" && Wd(h, w), h === "onScroll" && Tt("scroll", e)), !s && z !== w && (s = [])) : (s = s || []).push(h, w));
    }
    return g && (Jk(g, v[au]), (s = s || []).push(au, g)), s;
  }
  function UN(e, t, a, i, u) {
    a === "input" && u.type === "radio" && u.name != null && A(e, u);
    var s = Ql(a, i), f = Ql(a, u);
    switch (ON(e, t, s, f), a) {
      case "input":
        H(e, u);
        break;
      case "textarea":
        _C(e, u);
        break;
      case "select":
        Ok(e, u);
        break;
    }
  }
  function AN(e) {
    {
      var t = e.toLowerCase();
      return Sd.hasOwnProperty(t) && Sd[t] || null;
    }
  }
  function jN(e, t, a, i, u, s, f) {
    var v, h;
    switch (v = Ql(t, a), Qd(t, a), t) {
      case "dialog":
        Tt("cancel", e), Tt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Tt("load", e);
        break;
      case "video":
      case "audio":
        for (var y = 0; y < dc.length; y++)
          Tt(dc[y], e);
        break;
      case "source":
        Tt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Tt("error", e), Tt("load", e);
        break;
      case "details":
        Tt("toggle", e);
        break;
      case "input":
        C(e, a), Tt("invalid", e);
        break;
      case "option":
        pt(e, a);
        break;
      case "select":
        zs(e, a), Tt("invalid", e);
        break;
      case "textarea":
        DC(e, a), Tt("invalid", e);
        break;
    }
    Kh(t, a);
    {
      h = /* @__PURE__ */ new Set();
      for (var g = e.attributes, D = 0; D < g.length; D++) {
        var w = g[D].name.toLowerCase();
        switch (w) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            h.add(g[D].name);
        }
      }
    }
    var z = null;
    for (var U in a)
      if (a.hasOwnProperty(U)) {
        var P = a[U];
        if (U === ru)
          typeof P == "string" ? e.textContent !== P && (a[Ki] !== !0 && Xd(e.textContent, P, s, f), z = [ru, P]) : typeof P == "number" && e.textContent !== "" + P && (a[Ki] !== !0 && Xd(e.textContent, P, s, f), z = [ru, "" + P]);
        else if (ft.hasOwnProperty(U))
          P != null && (typeof P != "function" && Wd(U, P), U === "onScroll" && Tt("scroll", e));
        else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
        typeof v == "boolean") {
          var oe = void 0, ye = v && Ie ? null : zi(U);
          if (a[Ki] !== !0) {
            if (!(U === Id || U === Ki || // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            U === "value" || U === "checked" || U === "selected")) {
              if (U === hc) {
                var he = e.innerHTML, Ve = P ? P[Yd] : void 0;
                if (Ve != null) {
                  var ze = yR(e, Ve);
                  ze !== he && mc(U, he, ze);
                }
              } else if (U === au) {
                if (h.delete(U), mR) {
                  var k = qk(P);
                  oe = e.getAttribute("style"), k !== oe && mc(U, oe, k);
                }
              } else if (v && !Ie)
                h.delete(U.toLowerCase()), oe = Ui(e, U, P), P !== oe && mc(U, oe, P);
              else if (!Fu(U, ye, v) && !br(U, P, ye, v)) {
                var $ = !1;
                if (ye !== null)
                  h.delete(ye.attributeName), oe = Xa(e, U, P, ye);
                else {
                  var O = i;
                  if (O === ei && (O = Yh(t)), O === ei)
                    h.delete(U.toLowerCase());
                  else {
                    var G = AN(U);
                    G !== null && G !== U && ($ = !0, h.delete(G)), h.delete(U);
                  }
                  oe = Ui(e, U, P);
                }
                var se = Ie;
                !se && P !== oe && !$ && mc(U, oe, P);
              }
            }
          }
        }
      }
    switch (f && // $FlowFixMe - Should be inferred as not undefined.
    h.size > 0 && a[Ki] !== !0 && hR(h), t) {
      case "input":
        Za(e), J(e, a, !0);
        break;
      case "textarea":
        Za(e), kC(e);
        break;
      case "select":
      case "option":
        break;
      default:
        typeof a.onClick == "function" && Kd(e);
        break;
    }
    return z;
  }
  function FN(e, t, a) {
    var i = e.nodeValue !== t;
    return i;
  }
  function uy(e, t) {
    {
      if (Jn)
        return;
      Jn = !0, d("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
    }
  }
  function oy(e, t) {
    {
      if (Jn)
        return;
      Jn = !0, d('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
    }
  }
  function sy(e, t, a) {
    {
      if (Jn)
        return;
      Jn = !0, d("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
    }
  }
  function cy(e, t) {
    {
      if (t === "" || Jn)
        return;
      Jn = !0, d('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
    }
  }
  function HN(e, t, a) {
    switch (t) {
      case "input":
        Ce(e, a);
        return;
      case "textarea":
        Lk(e, a);
        return;
      case "select":
        Mk(e, a);
        return;
    }
  }
  var yc = function() {
  }, gc = function() {
  };
  {
    var PN = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], SR = [
      "applet",
      "caption",
      "html",
      "table",
      "td",
      "th",
      "marquee",
      "object",
      "template",
      // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
      // TODO: Distinguish by namespace here -- for <title>, including it here
      // errs on the side of fewer warnings
      "foreignObject",
      "desc",
      "title"
    ], $N = SR.concat(["button"]), VN = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], ER = { current: null, formTag: null, aTagInScope: null, buttonTagInScope: null, nobrTagInScope: null, pTagInButtonScope: null, listItemTagAutoclosing: null, dlItemTagAutoclosing: null };
    gc = function(e, t) {
      var a = Fe({}, e || ER), i = { tag: t };
      return SR.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), $N.indexOf(t) !== -1 && (a.pTagInButtonScope = null), PN.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
    };
    var BN = function(e, t) {
      switch (t) {
        case "select":
          return e === "option" || e === "optgroup" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return VN.indexOf(t) === -1;
        case "body":
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "head":
        case "html":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
      }
      return !0;
    }, IN = function(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }, CR = {};
    yc = function(e, t, a) {
      a = a || ER;
      var i = a.current, u = i && i.tag;
      t != null && (e != null && d("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
      var s = BN(e, u) ? null : i, f = s ? null : IN(e, a), v = s || f;
      if (v) {
        var h = v.tag, y = !!s + "|" + e + "|" + h;
        if (!CR[y]) {
          CR[y] = !0;
          var g = e, D = "";
          if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", D = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
            var w = "";
            h === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), d("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, h, D, w);
          } else
            d("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, h);
        }
      }
    };
  }
  var qd = "suppressHydrationWarning", Zd = "$", Jd = "/$", Sc = "$?", Ec = "$!", YN = "style", fy = null, dy = null;
  function QN(e) {
    var t, a, i = e.nodeType;
    switch (i) {
      case ni:
      case Wh: {
        t = i === ni ? "#document" : "#fragment";
        var u = e.documentElement;
        a = u ? u.namespaceURI : Qh(null, "");
        break;
      }
      default: {
        var s = i === Ht ? e.parentNode : e, f = s.namespaceURI || null;
        t = s.tagName, a = Qh(f, t);
        break;
      }
    }
    {
      var v = t.toLowerCase(), h = gc(null, v);
      return { namespace: a, ancestorInfo: h };
    }
  }
  function WN(e, t, a) {
    {
      var i = e, u = Qh(i.namespace, t), s = gc(i.ancestorInfo, t);
      return { namespace: u, ancestorInfo: s };
    }
  }
  function PP(e) {
    return e;
  }
  function GN(e) {
    fy = YM(), dy = oN();
    var t = null;
    return k1(!1), t;
  }
  function XN(e) {
    sN(dy), k1(fy), fy = null, dy = null;
  }
  function KN(e, t, a, i, u) {
    var s;
    {
      var f = i;
      if (yc(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
        var v = "" + t.children, h = gc(f.ancestorInfo, e);
        yc(null, v, h);
      }
      s = f.namespace;
    }
    var y = MN(e, t, a, s);
    return Tc(u, y), Ey(y, t), y;
  }
  function qN(e, t) {
    e.appendChild(t);
  }
  function ZN(e, t, a, i, u) {
    switch (NN(e, t, a, i), t) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!a.autoFocus;
      case "img":
        return !0;
      default:
        return !1;
    }
  }
  function JN(e, t, a, i, u, s) {
    {
      var f = s;
      if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
        var v = "" + i.children, h = gc(f.ancestorInfo, t);
        yc(null, v, h);
      }
    }
    return zN(e, t, a, i);
  }
  function py(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  function ez(e, t, a, i) {
    {
      var u = a;
      yc(null, e, u.ancestorInfo);
    }
    var s = LN(e, t);
    return Tc(i, s), s;
  }
  function tz() {
    var e = window.event;
    return e === void 0 ? si : O1(e.type);
  }
  var vy = typeof setTimeout == "function" ? setTimeout : void 0, nz = typeof clearTimeout == "function" ? clearTimeout : void 0, hy = -1, RR = typeof Promise == "function" ? Promise : void 0, rz = typeof queueMicrotask == "function" ? queueMicrotask : typeof RR != "undefined" ? function(e) {
    return RR.resolve(null).then(e).catch(az);
  } : vy;
  function az(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function iz(e, t, a, i) {
    switch (t) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        a.autoFocus && e.focus();
        return;
      case "img": {
        a.src && (e.src = a.src);
        return;
      }
    }
  }
  function lz(e, t, a, i, u, s) {
    UN(e, t, a, i, u), Ey(e, u);
  }
  function TR(e) {
    gd(e, "");
  }
  function uz(e, t, a) {
    e.nodeValue = a;
  }
  function oz(e, t) {
    e.appendChild(t);
  }
  function sz(e, t) {
    var a;
    e.nodeType === Ht ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
    var i = e._reactRootContainer;
    i == null && a.onclick === null && Kd(a);
  }
  function cz(e, t, a) {
    e.insertBefore(t, a);
  }
  function fz(e, t, a) {
    e.nodeType === Ht ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
  }
  function dz(e, t) {
    e.removeChild(t);
  }
  function pz(e, t) {
    e.nodeType === Ht ? e.parentNode.removeChild(t) : e.removeChild(t);
  }
  function my(e, t) {
    var a = t, i = 0;
    do {
      var u = a.nextSibling;
      if (e.removeChild(a), u && u.nodeType === Ht) {
        var s = u.data;
        if (s === Jd)
          if (i === 0) {
            e.removeChild(u), nc(t);
            return;
          } else
            i--;
        else
          (s === Zd || s === Sc || s === Ec) && i++;
      }
      a = u;
    } while (a);
    nc(t);
  }
  function vz(e, t) {
    e.nodeType === Ht ? my(e.parentNode, t) : e.nodeType === Zn && my(e, t), nc(e);
  }
  function hz(e) {
    e = e;
    var t = e.style;
    typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
  }
  function mz(e) {
    e.nodeValue = "";
  }
  function yz(e, t) {
    e = e;
    var a = t[YN], i = a != null && a.hasOwnProperty("display") ? a.display : null;
    e.style.display = Gh("display", i);
  }
  function gz(e, t) {
    e.nodeValue = t;
  }
  function Sz(e) {
    e.nodeType === Zn ? e.textContent = "" : e.nodeType === ni && e.documentElement && e.removeChild(e.documentElement);
  }
  function Ez(e, t, a) {
    return e.nodeType !== Zn || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
  }
  function Cz(e, t) {
    return t === "" || e.nodeType !== ti ? null : e;
  }
  function Rz(e) {
    return e.nodeType !== Ht ? null : e;
  }
  function xR(e) {
    return e.data === Sc;
  }
  function yy(e) {
    return e.data === Ec;
  }
  function Tz(e) {
    var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
    return t && (a = t.dgst, i = t.msg, u = t.stck), { message: i, digest: a, stack: u };
  }
  function xz(e, t) {
    e._reactRetry = t;
  }
  function ep(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === Zn || t === ti)
        break;
      if (t === Ht) {
        var a = e.data;
        if (a === Zd || a === Ec || a === Sc)
          break;
        if (a === Jd)
          return null;
      }
    }
    return e;
  }
  function Cc(e) {
    return ep(e.nextSibling);
  }
  function wz(e) {
    return ep(e.firstChild);
  }
  function bz(e) {
    return ep(e.firstChild);
  }
  function Dz(e) {
    return ep(e.nextSibling);
  }
  function _z(e, t, a, i, u, s, f) {
    Tc(s, e), Ey(e, a);
    var v;
    {
      var h = u;
      v = h.namespace;
    }
    var y = (s.mode & Pe) !== Ee;
    return jN(e, t, a, v, i, y, f);
  }
  function kz(e, t, a, i) {
    return Tc(a, e), a.mode & Pe, FN(e, t);
  }
  function Oz(e, t) {
    Tc(t, e);
  }
  function Mz(e) {
    for (var t = e.nextSibling, a = 0; t; ) {
      if (t.nodeType === Ht) {
        var i = t.data;
        if (i === Jd) {
          if (a === 0)
            return Cc(t);
          a--;
        } else
          (i === Zd || i === Ec || i === Sc) && a++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function wR(e) {
    for (var t = e.previousSibling, a = 0; t; ) {
      if (t.nodeType === Ht) {
        var i = t.data;
        if (i === Zd || i === Ec || i === Sc) {
          if (a === 0)
            return t;
          a--;
        } else
          i === Jd && a++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Lz(e) {
    nc(e);
  }
  function Nz(e) {
    nc(e);
  }
  function zz(e) {
    return e !== "head" && e !== "body";
  }
  function Uz(e, t, a, i) {
    var u = !0;
    Xd(t.nodeValue, a, i, u);
  }
  function Az(e, t, a, i, u, s) {
    if (t[qd] !== !0) {
      var f = !0;
      Xd(i.nodeValue, u, s, f);
    }
  }
  function jz(e, t) {
    t.nodeType === Zn ? uy(e, t) : t.nodeType === Ht || oy(e, t);
  }
  function Fz(e, t) {
    {
      var a = e.parentNode;
      a !== null && (t.nodeType === Zn ? uy(a, t) : t.nodeType === Ht || oy(a, t));
    }
  }
  function Hz(e, t, a, i, u) {
    (u || t[qd] !== !0) && (i.nodeType === Zn ? uy(a, i) : i.nodeType === Ht || oy(a, i));
  }
  function Pz(e, t, a) {
    sy(e, t);
  }
  function $z(e, t) {
    cy(e, t);
  }
  function Vz(e, t, a) {
    {
      var i = e.parentNode;
      i !== null && sy(i, t);
    }
  }
  function Bz(e, t) {
    {
      var a = e.parentNode;
      a !== null && cy(a, t);
    }
  }
  function Iz(e, t, a, i, u, s) {
    (s || t[qd] !== !0) && sy(a, i);
  }
  function Yz(e, t, a, i, u) {
    (u || t[qd] !== !0) && cy(a, i);
  }
  function Qz(e) {
    d("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
  }
  function Wz(e) {
    pc(e);
  }
  var vo = Math.random().toString(36).slice(2), ho = "__reactFiber$" + vo, gy = "__reactProps$" + vo, Rc = "__reactContainer$" + vo, Sy = "__reactEvents$" + vo, Gz = "__reactListeners$" + vo, Xz = "__reactHandles$" + vo;
  function Kz(e) {
    delete e[ho], delete e[gy], delete e[Sy], delete e[Gz], delete e[Xz];
  }
  function Tc(e, t) {
    t[ho] = e;
  }
  function tp(e, t) {
    t[Rc] = e;
  }
  function bR(e) {
    e[Rc] = null;
  }
  function xc(e) {
    return !!e[Rc];
  }
  function iu(e) {
    var t = e[ho];
    if (t)
      return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Rc] || a[ho], t) {
        var i = t.alternate;
        if (t.child !== null || i !== null && i.child !== null)
          for (var u = wR(e); u !== null; ) {
            var s = u[ho];
            if (s)
              return s;
            u = wR(u);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function qi(e) {
    var t = e[ho] || e[Rc];
    return t && (t.tag === F || t.tag === Y || t.tag === I || t.tag === L) ? t : null;
  }
  function mo(e) {
    if (e.tag === F || e.tag === Y)
      return e.stateNode;
    throw new Error("getNodeFromInstance: Invalid argument.");
  }
  function np(e) {
    return e[gy] || null;
  }
  function Ey(e, t) {
    e[gy] = t;
  }
  function qz(e) {
    var t = e[Sy];
    return t === void 0 && (t = e[Sy] = /* @__PURE__ */ new Set()), t;
  }
  var DR = {}, _R = l.ReactDebugCurrentFrame;
  function rp(e) {
    if (e) {
      var t = e._owner, a = Hi(e.type, e._source, t ? t.type : null);
      _R.setExtraStackFrame(a);
    } else
      _R.setExtraStackFrame(null);
  }
  function Kr(e, t, a, i, u) {
    {
      var s = Function.call.bind(Br);
      for (var f in e)
        if (s(e, f)) {
          var v = void 0;
          try {
            if (typeof e[f] != "function") {
              var h = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw h.name = "Invariant Violation", h;
            }
            v = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (y) {
            v = y;
          }
          v && !(v instanceof Error) && (rp(u), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof v), rp(null)), v instanceof Error && !(v.message in DR) && (DR[v.message] = !0, rp(u), d("Failed %s type: %s", a, v.message), rp(null));
        }
    }
  }
  var Cy = [], ap;
  ap = [];
  var ci = -1;
  function Zi(e) {
    return { current: e };
  }
  function bn(e, t) {
    if (ci < 0) {
      d("Unexpected pop.");
      return;
    }
    t !== ap[ci] && d("Unexpected Fiber popped."), e.current = Cy[ci], Cy[ci] = null, ap[ci] = null, ci--;
  }
  function Dn(e, t, a) {
    ci++, Cy[ci] = e.current, ap[ci] = a, e.current = t;
  }
  var Ry;
  Ry = {};
  var mr = {};
  Object.freeze(mr);
  var fi = Zi(mr), wa = Zi(!1), Ty = mr;
  function yo(e, t, a) {
    return a && ba(t) ? Ty : fi.current;
  }
  function kR(e, t, a) {
    {
      var i = e.stateNode;
      i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
    }
  }
  function go(e, t) {
    {
      var a = e.type, i = a.contextTypes;
      if (!i)
        return mr;
      var u = e.stateNode;
      if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
        return u.__reactInternalMemoizedMaskedChildContext;
      var s = {};
      for (var f in i)
        s[f] = t[f];
      {
        var v = Oe(e) || "Unknown";
        Kr(i, s, "context", v);
      }
      return u && kR(e, t, s), s;
    }
  }
  function ip() {
    return wa.current;
  }
  function ba(e) {
    {
      var t = e.childContextTypes;
      return t != null;
    }
  }
  function lp(e) {
    bn(wa, e), bn(fi, e);
  }
  function xy(e) {
    bn(wa, e), bn(fi, e);
  }
  function OR(e, t, a) {
    {
      if (fi.current !== mr)
        throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
      Dn(fi, t, e), Dn(wa, a, e);
    }
  }
  function MR(e, t, a) {
    {
      var i = e.stateNode, u = t.childContextTypes;
      if (typeof i.getChildContext != "function") {
        {
          var s = Oe(e) || "Unknown";
          Ry[s] || (Ry[s] = !0, d("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
        }
        return a;
      }
      var f = i.getChildContext();
      for (var v in f)
        if (!(v in u))
          throw new Error((Oe(e) || "Unknown") + '.getChildContext(): key "' + v + '" is not defined in childContextTypes.');
      {
        var h = Oe(e) || "Unknown";
        Kr(u, f, "child context", h);
      }
      return Fe({}, a, f);
    }
  }
  function up(e) {
    {
      var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || mr;
      return Ty = fi.current, Dn(fi, a, e), Dn(wa, wa.current, e), !0;
    }
  }
  function LR(e, t, a) {
    {
      var i = e.stateNode;
      if (!i)
        throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
      if (a) {
        var u = MR(e, t, Ty);
        i.__reactInternalMemoizedMergedChildContext = u, bn(wa, e), bn(fi, e), Dn(fi, u, e), Dn(wa, a, e);
      } else
        bn(wa, e), Dn(wa, a, e);
    }
  }
  function Zz(e) {
    {
      if (!zO(e) || e.tag !== x)
        throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
      var t = e;
      do {
        switch (t.tag) {
          case L:
            return t.stateNode.context;
          case x: {
            var a = t.type;
            if (ba(a))
              return t.stateNode.__reactInternalMemoizedMergedChildContext;
            break;
          }
        }
        t = t.return;
      } while (t !== null);
      throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  var Ji = 0, op = 1, di = null, wy = !1, by = !1;
  function NR(e) {
    di === null ? di = [e] : di.push(e);
  }
  function Jz(e) {
    wy = !0, NR(e);
  }
  function zR() {
    wy && el();
  }
  function el() {
    if (!by && di !== null) {
      by = !0;
      var e = 0, t = Xr();
      try {
        var a = !0, i = di;
        for (un(pr); e < i.length; e++) {
          var u = i[e];
          do
            u = u(a);
          while (u !== null);
        }
        di = null, wy = !1;
      } catch (s) {
        throw di !== null && (di = di.slice(e + 1)), a1(xd, el), s;
      } finally {
        un(t), by = !1;
      }
    }
    return null;
  }
  var So = [], Eo = 0, sp = null, cp = 0, _r = [], kr = 0, lu = null, pi = 1, vi = "";
  function eU(e) {
    return ou(), (e.flags & KC) !== Se;
  }
  function tU(e) {
    return ou(), cp;
  }
  function nU() {
    var e = vi, t = pi, a = t & ~rU(t);
    return a.toString(32) + e;
  }
  function uu(e, t) {
    ou(), So[Eo++] = cp, So[Eo++] = sp, sp = e, cp = t;
  }
  function UR(e, t, a) {
    ou(), _r[kr++] = pi, _r[kr++] = vi, _r[kr++] = lu, lu = e;
    var i = pi, u = vi, s = fp(i) - 1, f = i & ~(1 << s), v = a + 1, h = fp(t) + s;
    if (h > 30) {
      var y = s - s % 5, g = (1 << y) - 1, D = (f & g).toString(32), w = f >> y, z = s - y, U = fp(t) + z, P = v << z, oe = P | w, ye = D + u;
      pi = 1 << U | oe, vi = ye;
    } else {
      var he = v << s, Ve = he | f, ze = u;
      pi = 1 << h | Ve, vi = ze;
    }
  }
  function Dy(e) {
    ou();
    var t = e.return;
    if (t !== null) {
      var a = 1, i = 0;
      uu(e, a), UR(e, a, i);
    }
  }
  function fp(e) {
    return 32 - c1(e);
  }
  function rU(e) {
    return 1 << fp(e) - 1;
  }
  function _y(e) {
    for (; e === sp; )
      sp = So[--Eo], So[Eo] = null, cp = So[--Eo], So[Eo] = null;
    for (; e === lu; )
      lu = _r[--kr], _r[kr] = null, vi = _r[--kr], _r[kr] = null, pi = _r[--kr], _r[kr] = null;
  }
  function aU() {
    return ou(), lu !== null ? { id: pi, overflow: vi } : null;
  }
  function iU(e, t) {
    ou(), _r[kr++] = pi, _r[kr++] = vi, _r[kr++] = lu, pi = t.id, vi = t.overflow, lu = e;
  }
  function ou() {
    dn() || d("Expected to be hydrating. This is a bug in React. Please file an issue.");
  }
  var fn = null, Or = null, qr = !1, su = !1, tl = null;
  function lU() {
    qr && d("We should not be hydrating here. This is a bug in React. Please file a bug.");
  }
  function AR() {
    su = !0;
  }
  function uU() {
    return su;
  }
  function oU(e) {
    var t = e.stateNode.containerInfo;
    return Or = bz(t), fn = e, qr = !0, tl = null, su = !1, !0;
  }
  function sU(e, t, a) {
    return Or = Dz(t), fn = e, qr = !0, tl = null, su = !1, a !== null && iU(e, a), !0;
  }
  function jR(e, t) {
    switch (e.tag) {
      case L: {
        jz(e.stateNode.containerInfo, t);
        break;
      }
      case F: {
        var a = (e.mode & Pe) !== Ee;
        Hz(
          e.type,
          e.memoizedProps,
          e.stateNode,
          t,
          // TODO: Delete this argument when we remove the legacy root API.
          a
        );
        break;
      }
      case I: {
        var i = e.memoizedState;
        i.dehydrated !== null && Fz(i.dehydrated, t);
        break;
      }
    }
  }
  function FR(e, t) {
    jR(e, t);
    var a = dj();
    a.stateNode = t, a.return = e;
    var i = e.deletions;
    i === null ? (e.deletions = [a], e.flags |= Wl) : i.push(a);
  }
  function ky(e, t) {
    {
      if (su)
        return;
      switch (e.tag) {
        case L: {
          var a = e.stateNode.containerInfo;
          switch (t.tag) {
            case F:
              var i = t.type;
              t.pendingProps, Pz(a, i);
              break;
            case Y:
              var u = t.pendingProps;
              $z(a, u);
              break;
          }
          break;
        }
        case F: {
          var s = e.type, f = e.memoizedProps, v = e.stateNode;
          switch (t.tag) {
            case F: {
              var h = t.type, y = t.pendingProps, g = (e.mode & Pe) !== Ee;
              Iz(
                s,
                f,
                v,
                h,
                y,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
            case Y: {
              var D = t.pendingProps, w = (e.mode & Pe) !== Ee;
              Yz(
                s,
                f,
                v,
                D,
                // TODO: Delete this argument when we remove the legacy root API.
                w
              );
              break;
            }
          }
          break;
        }
        case I: {
          var z = e.memoizedState, U = z.dehydrated;
          if (U !== null)
            switch (t.tag) {
              case F:
                var P = t.type;
                t.pendingProps, Vz(U, P);
                break;
              case Y:
                var oe = t.pendingProps;
                Bz(U, oe);
                break;
            }
          break;
        }
        default:
          return;
      }
    }
  }
  function HR(e, t) {
    t.flags = t.flags & ~ai | Pt, ky(e, t);
  }
  function PR(e, t) {
    switch (e.tag) {
      case F: {
        var a = e.type;
        e.pendingProps;
        var i = Ez(t, a);
        return i !== null ? (e.stateNode = i, fn = e, Or = wz(i), !0) : !1;
      }
      case Y: {
        var u = e.pendingProps, s = Cz(t, u);
        return s !== null ? (e.stateNode = s, fn = e, Or = null, !0) : !1;
      }
      case I: {
        var f = Rz(t);
        if (f !== null) {
          var v = { dehydrated: f, treeContext: aU(), retryLane: fr };
          e.memoizedState = v;
          var h = pj(f);
          return h.return = e, e.child = h, fn = e, Or = null, !0;
        }
        return !1;
      }
      default:
        return !1;
    }
  }
  function Oy(e) {
    return (e.mode & Pe) !== Ee && (e.flags & Ze) === Se;
  }
  function My(e) {
    throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
  }
  function Ly(e) {
    if (qr) {
      var t = Or;
      if (!t) {
        Oy(e) && (ky(fn, e), My()), HR(fn, e), qr = !1, fn = e;
        return;
      }
      var a = t;
      if (!PR(e, t)) {
        Oy(e) && (ky(fn, e), My()), t = Cc(a);
        var i = fn;
        if (!t || !PR(e, t)) {
          HR(fn, e), qr = !1, fn = e;
          return;
        }
        FR(i, a);
      }
    }
  }
  function cU(e, t, a) {
    var i = e.stateNode, u = !su, s = _z(i, e.type, e.memoizedProps, t, a, e, u);
    return e.updateQueue = s, s !== null;
  }
  function fU(e) {
    var t = e.stateNode, a = e.memoizedProps, i = kz(t, a, e);
    if (i) {
      var u = fn;
      if (u !== null)
        switch (u.tag) {
          case L: {
            var s = u.stateNode.containerInfo, f = (u.mode & Pe) !== Ee;
            Uz(
              s,
              t,
              a,
              // TODO: Delete this argument when we remove the legacy root API.
              f
            );
            break;
          }
          case F: {
            var v = u.type, h = u.memoizedProps, y = u.stateNode, g = (u.mode & Pe) !== Ee;
            Az(
              v,
              h,
              y,
              t,
              a,
              // TODO: Delete this argument when we remove the legacy root API.
              g
            );
            break;
          }
        }
    }
    return i;
  }
  function dU(e) {
    var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
    if (!a)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    Oz(a, e);
  }
  function pU(e) {
    var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
    if (!a)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    return Mz(a);
  }
  function $R(e) {
    for (var t = e.return; t !== null && t.tag !== F && t.tag !== L && t.tag !== I; )
      t = t.return;
    fn = t;
  }
  function dp(e) {
    if (e !== fn)
      return !1;
    if (!qr)
      return $R(e), qr = !0, !1;
    if (e.tag !== L && (e.tag !== F || zz(e.type) && !py(e.type, e.memoizedProps))) {
      var t = Or;
      if (t)
        if (Oy(e))
          VR(e), My();
        else
          for (; t; )
            FR(e, t), t = Cc(t);
    }
    return $R(e), e.tag === I ? Or = pU(e) : Or = fn ? Cc(e.stateNode) : null, !0;
  }
  function vU() {
    return qr && Or !== null;
  }
  function VR(e) {
    for (var t = Or; t; )
      jR(e, t), t = Cc(t);
  }
  function Co() {
    fn = null, Or = null, qr = !1, su = !1;
  }
  function BR() {
    tl !== null && (jx(tl), tl = null);
  }
  function dn() {
    return qr;
  }
  function Ny(e) {
    tl === null ? tl = [e] : tl.push(e);
  }
  var hU = l.ReactCurrentBatchConfig, mU = null;
  function yU() {
    return hU.transition;
  }
  var Zr = { recordUnsafeLifecycleWarnings: function(e, t) {
  }, flushPendingUnsafeLifecycleWarnings: function() {
  }, recordLegacyContextWarning: function(e, t) {
  }, flushLegacyContextWarning: function() {
  }, discardPendingWarnings: function() {
  } };
  {
    var gU = function(e) {
      for (var t = null, a = e; a !== null; )
        a.mode & $t && (t = a), a = a.return;
      return t;
    }, cu = function(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }, wc = [], bc = [], Dc = [], _c = [], kc = [], Oc = [], fu = /* @__PURE__ */ new Set();
    Zr.recordUnsafeLifecycleWarnings = function(e, t) {
      fu.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
      t.componentWillMount.__suppressDeprecationWarning !== !0 && wc.push(e), e.mode & $t && typeof t.UNSAFE_componentWillMount == "function" && bc.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Dc.push(e), e.mode & $t && typeof t.UNSAFE_componentWillReceiveProps == "function" && _c.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && kc.push(e), e.mode & $t && typeof t.UNSAFE_componentWillUpdate == "function" && Oc.push(e));
    }, Zr.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      wc.length > 0 && (wc.forEach(function(w) {
        e.add(Oe(w) || "Component"), fu.add(w.type);
      }), wc = []);
      var t = /* @__PURE__ */ new Set();
      bc.length > 0 && (bc.forEach(function(w) {
        t.add(Oe(w) || "Component"), fu.add(w.type);
      }), bc = []);
      var a = /* @__PURE__ */ new Set();
      Dc.length > 0 && (Dc.forEach(function(w) {
        a.add(Oe(w) || "Component"), fu.add(w.type);
      }), Dc = []);
      var i = /* @__PURE__ */ new Set();
      _c.length > 0 && (_c.forEach(function(w) {
        i.add(Oe(w) || "Component"), fu.add(w.type);
      }), _c = []);
      var u = /* @__PURE__ */ new Set();
      kc.length > 0 && (kc.forEach(function(w) {
        u.add(Oe(w) || "Component"), fu.add(w.type);
      }), kc = []);
      var s = /* @__PURE__ */ new Set();
      if (Oc.length > 0 && (Oc.forEach(function(w) {
        s.add(Oe(w) || "Component"), fu.add(w.type);
      }), Oc = []), t.size > 0) {
        var f = cu(t);
        d(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
      }
      if (i.size > 0) {
        var v = cu(i);
        d(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, v);
      }
      if (s.size > 0) {
        var h = cu(s);
        d(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, h);
      }
      if (e.size > 0) {
        var y = cu(e);
        p(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
      }
      if (a.size > 0) {
        var g = cu(a);
        p(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
      }
      if (u.size > 0) {
        var D = cu(u);
        p(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
      }
    };
    var pp = /* @__PURE__ */ new Map(), IR = /* @__PURE__ */ new Set();
    Zr.recordLegacyContextWarning = function(e, t) {
      var a = gU(e);
      if (a === null) {
        d("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      if (!IR.has(e.type)) {
        var i = pp.get(a);
        (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], pp.set(a, i)), i.push(e));
      }
    }, Zr.flushLegacyContextWarning = function() {
      pp.forEach(function(e, t) {
        if (e.length !== 0) {
          var a = e[0], i = /* @__PURE__ */ new Set();
          e.forEach(function(s) {
            i.add(Oe(s) || "Component"), IR.add(s.type);
          });
          var u = cu(i);
          try {
            Dt(a), d(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
          } finally {
            nn();
          }
        }
      });
    }, Zr.discardPendingWarnings = function() {
      wc = [], bc = [], Dc = [], _c = [], kc = [], Oc = [], pp = /* @__PURE__ */ new Map();
    };
  }
  function Jr(e, t) {
    if (e && e.defaultProps) {
      var a = Fe({}, t), i = e.defaultProps;
      for (var u in i)
        a[u] === void 0 && (a[u] = i[u]);
      return a;
    }
    return t;
  }
  var zy = Zi(null), Uy;
  Uy = {};
  var vp = null, Ro = null, Ay = null, hp = !1;
  function mp() {
    vp = null, Ro = null, Ay = null, hp = !1;
  }
  function YR() {
    hp = !0;
  }
  function QR() {
    hp = !1;
  }
  function WR(e, t, a) {
    Dn(zy, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Uy && d("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Uy;
  }
  function jy(e, t) {
    var a = zy.current;
    bn(zy, t), e._currentValue = a;
  }
  function Fy(e, t, a) {
    for (var i = e; i !== null; ) {
      var u = i.alternate;
      if (lo(i.childLanes, t) ? u !== null && !lo(u.childLanes, t) && (u.childLanes = Le(u.childLanes, t)) : (i.childLanes = Le(i.childLanes, t), u !== null && (u.childLanes = Le(u.childLanes, t))), i === a)
        break;
      i = i.return;
    }
    i !== a && d("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
  }
  function SU(e, t, a) {
    EU(e, t, a);
  }
  function EU(e, t, a) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var u = void 0, s = i.dependencies;
      if (s !== null) {
        u = i.child;
        for (var f = s.firstContext; f !== null; ) {
          if (f.context === t) {
            if (i.tag === x) {
              var v = Xs(a), h = hi(mt, v);
              h.tag = gp;
              var y = i.updateQueue;
              if (y !== null) {
                var g = y.shared, D = g.pending;
                D === null ? h.next = h : (h.next = D.next, D.next = h), g.pending = h;
              }
            }
            i.lanes = Le(i.lanes, a);
            var w = i.alternate;
            w !== null && (w.lanes = Le(w.lanes, a)), Fy(i.return, a, e), s.lanes = Le(s.lanes, a);
            break;
          }
          f = f.next;
        }
      } else if (i.tag === R)
        u = i.type === e.type ? null : i.child;
      else if (i.tag === xe) {
        var z = i.return;
        if (z === null)
          throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
        z.lanes = Le(z.lanes, a);
        var U = z.alternate;
        U !== null && (U.lanes = Le(U.lanes, a)), Fy(z, a, e), u = i.sibling;
      } else
        u = i.child;
      if (u !== null)
        u.return = i;
      else
        for (u = i; u !== null; ) {
          if (u === e) {
            u = null;
            break;
          }
          var P = u.sibling;
          if (P !== null) {
            P.return = u.return, u = P;
            break;
          }
          u = u.return;
        }
      i = u;
    }
  }
  function To(e, t) {
    vp = e, Ro = null, Ay = null;
    var a = e.dependencies;
    if (a !== null) {
      var i = a.firstContext;
      i !== null && (dr(a.lanes, t) && Ic(), a.firstContext = null);
    }
  }
  function Vt(e) {
    hp && d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    var t = e._currentValue;
    if (Ay !== e) {
      var a = { context: e, memoizedValue: t, next: null };
      if (Ro === null) {
        if (vp === null)
          throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        Ro = a, vp.dependencies = { lanes: Q, firstContext: a };
      } else
        Ro = Ro.next = a;
    }
    return t;
  }
  var du = null;
  function Hy(e) {
    du === null ? du = [e] : du.push(e);
  }
  function CU() {
    if (du !== null) {
      for (var e = 0; e < du.length; e++) {
        var t = du[e], a = t.interleaved;
        if (a !== null) {
          t.interleaved = null;
          var i = a.next, u = t.pending;
          if (u !== null) {
            var s = u.next;
            u.next = i, a.next = s;
          }
          t.pending = a;
        }
      }
      du = null;
    }
  }
  function GR(e, t, a, i) {
    var u = t.interleaved;
    return u === null ? (a.next = a, Hy(t)) : (a.next = u.next, u.next = a), t.interleaved = a, yp(e, i);
  }
  function RU(e, t, a, i) {
    var u = t.interleaved;
    u === null ? (a.next = a, Hy(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
  }
  function TU(e, t, a, i) {
    var u = t.interleaved;
    return u === null ? (a.next = a, Hy(t)) : (a.next = u.next, u.next = a), t.interleaved = a, yp(e, i);
  }
  function er(e, t) {
    return yp(e, t);
  }
  var xU = yp;
  function yp(e, t) {
    e.lanes = Le(e.lanes, t);
    var a = e.alternate;
    a !== null && (a.lanes = Le(a.lanes, t)), a === null && (e.flags & (Pt | ai)) !== Se && Xx(e);
    for (var i = e, u = e.return; u !== null; )
      u.childLanes = Le(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Le(a.childLanes, t) : (u.flags & (Pt | ai)) !== Se && Xx(e), i = u, u = u.return;
    if (i.tag === L) {
      var s = i.stateNode;
      return s;
    } else
      return null;
  }
  var XR = 0, KR = 1, gp = 2, Py = 3, Sp = !1, $y, Ep;
  $y = !1, Ep = null;
  function Vy(e) {
    var t = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: Q }, effects: null };
    e.updateQueue = t;
  }
  function qR(e, t) {
    var a = t.updateQueue, i = e.updateQueue;
    if (a === i) {
      var u = { baseState: i.baseState, firstBaseUpdate: i.firstBaseUpdate, lastBaseUpdate: i.lastBaseUpdate, shared: i.shared, effects: i.effects };
      t.updateQueue = u;
    }
  }
  function hi(e, t) {
    var a = { eventTime: e, lane: t, tag: XR, payload: null, callback: null, next: null };
    return a;
  }
  function nl(e, t, a) {
    var i = e.updateQueue;
    if (i === null)
      return null;
    var u = i.shared;
    if (Ep === u && !$y && (d("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), $y = !0), x2()) {
      var s = u.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, xU(e, a);
    } else
      return TU(e, u, t, a);
  }
  function Cp(e, t, a) {
    var i = t.updateQueue;
    if (i !== null) {
      var u = i.shared;
      if (v1(a)) {
        var s = u.lanes;
        s = m1(s, e.pendingLanes);
        var f = Le(s, a);
        u.lanes = f, Hm(e, f);
      }
    }
  }
  function By(e, t) {
    var a = e.updateQueue, i = e.alternate;
    if (i !== null) {
      var u = i.updateQueue;
      if (a === u) {
        var s = null, f = null, v = a.firstBaseUpdate;
        if (v !== null) {
          var h = v;
          do {
            var y = { eventTime: h.eventTime, lane: h.lane, tag: h.tag, payload: h.payload, callback: h.callback, next: null };
            f === null ? s = f = y : (f.next = y, f = y), h = h.next;
          } while (h !== null);
          f === null ? s = f = t : (f.next = t, f = t);
        } else
          s = f = t;
        a = { baseState: u.baseState, firstBaseUpdate: s, lastBaseUpdate: f, shared: u.shared, effects: u.effects }, e.updateQueue = a;
        return;
      }
    }
    var g = a.lastBaseUpdate;
    g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
  }
  function wU(e, t, a, i, u, s) {
    switch (a.tag) {
      case KR: {
        var f = a.payload;
        if (typeof f == "function") {
          YR();
          var v = f.call(s, i, u);
          {
            if (e.mode & $t) {
              an(!0);
              try {
                f.call(s, i, u);
              } finally {
                an(!1);
              }
            }
            QR();
          }
          return v;
        }
        return f;
      }
      case Py:
        e.flags = e.flags & ~Fn | Ze;
      case XR: {
        var h = a.payload, y;
        if (typeof h == "function") {
          YR(), y = h.call(s, i, u);
          {
            if (e.mode & $t) {
              an(!0);
              try {
                h.call(s, i, u);
              } finally {
                an(!1);
              }
            }
            QR();
          }
        } else
          y = h;
        return y == null ? i : Fe({}, i, y);
      }
      case gp:
        return Sp = !0, i;
    }
    return i;
  }
  function Rp(e, t, a, i) {
    var u = e.updateQueue;
    Sp = !1, Ep = u.shared;
    var s = u.firstBaseUpdate, f = u.lastBaseUpdate, v = u.shared.pending;
    if (v !== null) {
      u.shared.pending = null;
      var h = v, y = h.next;
      h.next = null, f === null ? s = y : f.next = y, f = h;
      var g = e.alternate;
      if (g !== null) {
        var D = g.updateQueue, w = D.lastBaseUpdate;
        w !== f && (w === null ? D.firstBaseUpdate = y : w.next = y, D.lastBaseUpdate = h);
      }
    }
    if (s !== null) {
      var z = u.baseState, U = Q, P = null, oe = null, ye = null, he = s;
      do {
        var Ve = he.lane, ze = he.eventTime;
        if (lo(i, Ve)) {
          if (ye !== null) {
            var $ = {
              eventTime: ze,
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: ln,
              tag: he.tag,
              payload: he.payload,
              callback: he.callback,
              next: null
            };
            ye = ye.next = $;
          }
          z = wU(e, u, he, z, t, a);
          var O = he.callback;
          if (O !== null && // If the update was already committed, we should not queue its
          // callback again.
          he.lane !== ln) {
            e.flags |= lm;
            var G = u.effects;
            G === null ? u.effects = [he] : G.push(he);
          }
        } else {
          var k = { eventTime: ze, lane: Ve, tag: he.tag, payload: he.payload, callback: he.callback, next: null };
          ye === null ? (oe = ye = k, P = z) : ye = ye.next = k, U = Le(U, Ve);
        }
        if (he = he.next, he === null) {
          if (v = u.shared.pending, v === null)
            break;
          var se = v, ie = se.next;
          se.next = null, he = ie, u.lastBaseUpdate = se, u.shared.pending = null;
        }
      } while (!0);
      ye === null && (P = z), u.baseState = P, u.firstBaseUpdate = oe, u.lastBaseUpdate = ye;
      var Re = u.shared.interleaved;
      if (Re !== null) {
        var _e = Re;
        do
          U = Le(U, _e.lane), _e = _e.next;
        while (_e !== Re);
      } else
        s === null && (u.shared.lanes = Q);
      nf(U), e.lanes = U, e.memoizedState = z;
    }
    Ep = null;
  }
  function bU(e, t) {
    if (typeof e != "function")
      throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
    e.call(t);
  }
  function ZR() {
    Sp = !1;
  }
  function Tp() {
    return Sp;
  }
  function JR(e, t, a) {
    var i = t.effects;
    if (t.effects = null, i !== null)
      for (var u = 0; u < i.length; u++) {
        var s = i[u], f = s.callback;
        f !== null && (s.callback = null, bU(f, a));
      }
  }
  var Iy = {}, eT = new n.Component().refs, Yy, Qy, Wy, Gy, Xy, tT, xp, Ky, qy, Zy;
  {
    Yy = /* @__PURE__ */ new Set(), Qy = /* @__PURE__ */ new Set(), Wy = /* @__PURE__ */ new Set(), Gy = /* @__PURE__ */ new Set(), Ky = /* @__PURE__ */ new Set(), Xy = /* @__PURE__ */ new Set(), qy = /* @__PURE__ */ new Set(), Zy = /* @__PURE__ */ new Set();
    var nT = /* @__PURE__ */ new Set();
    xp = function(e, t) {
      if (!(e === null || typeof e == "function")) {
        var a = t + "_" + e;
        nT.has(a) || (nT.add(a), d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
      }
    }, tT = function(e, t) {
      if (t === void 0) {
        var a = Ke(e) || "Component";
        Xy.has(a) || (Xy.add(a), d("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
      }
    }, Object.defineProperty(Iy, "_processChildContext", { enumerable: !1, value: function() {
      throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
    } }), Object.freeze(Iy);
  }
  function Jy(e, t, a, i) {
    var u = e.memoizedState, s = a(i, u);
    {
      if (e.mode & $t) {
        an(!0);
        try {
          s = a(i, u);
        } finally {
          an(!1);
        }
      }
      tT(t, s);
    }
    var f = s == null ? u : Fe({}, u, s);
    if (e.memoizedState = f, e.lanes === Q) {
      var v = e.updateQueue;
      v.baseState = f;
    }
  }
  var eg = { isMounted: UO, enqueueSetState: function(e, t, a) {
    var i = Zu(e), u = $n(), s = cl(i), f = hi(u, s);
    f.payload = t, a != null && (xp(a, "setState"), f.callback = a);
    var v = nl(i, f, s);
    v !== null && (Zt(v, i, s, u), Cp(v, i, s)), vm(i, s);
  }, enqueueReplaceState: function(e, t, a) {
    var i = Zu(e), u = $n(), s = cl(i), f = hi(u, s);
    f.tag = KR, f.payload = t, a != null && (xp(a, "replaceState"), f.callback = a);
    var v = nl(i, f, s);
    v !== null && (Zt(v, i, s, u), Cp(v, i, s)), vm(i, s);
  }, enqueueForceUpdate: function(e, t) {
    var a = Zu(e), i = $n(), u = cl(a), s = hi(i, u);
    s.tag = gp, t != null && (xp(t, "forceUpdate"), s.callback = t);
    var f = nl(a, s, u);
    f !== null && (Zt(f, a, u, i), Cp(f, a, u)), dM(a, u);
  } };
  function rT(e, t, a, i, u, s, f) {
    var v = e.stateNode;
    if (typeof v.shouldComponentUpdate == "function") {
      var h = v.shouldComponentUpdate(i, s, f);
      {
        if (e.mode & $t) {
          an(!0);
          try {
            h = v.shouldComponentUpdate(i, s, f);
          } finally {
            an(!1);
          }
        }
        h === void 0 && d("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ke(t) || "Component");
      }
      return h;
    }
    return t.prototype && t.prototype.isPureReactComponent ? !cc(a, i) || !cc(u, s) : !0;
  }
  function DU(e, t, a) {
    var i = e.stateNode;
    {
      var u = Ke(t) || "Component", s = i.render;
      s || (t.prototype && typeof t.prototype.render == "function" ? d("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : d("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && d("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && d("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && d("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && d("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && d("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !qy.has(t) && (qy.add(t), d("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && d("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate != "undefined" && d("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ke(t) || "A pure component"), typeof i.componentDidUnmount == "function" && d("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && d("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && d("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && d("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
      var f = i.props !== a;
      i.props !== void 0 && f && d("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && d("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Wy.has(t) && (Wy.add(t), d("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ke(t))), typeof i.getDerivedStateFromProps == "function" && d("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && d("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && d("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
      var v = i.state;
      v && (typeof v != "object" || qe(v)) && d("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && d("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
    }
  }
  function aT(e, t) {
    t.updater = eg, e.stateNode = t, OO(t, e), t._reactInternalInstance = Iy;
  }
  function iT(e, t, a) {
    var i = !1, u = mr, s = mr, f = t.contextType;
    if ("contextType" in t) {
      var v = (
        // Allow null for conditional declaration
        f === null || f !== void 0 && f.$$typeof === ae && f._context === void 0
      );
      if (!v && !Zy.has(t)) {
        Zy.add(t);
        var h = "";
        f === void 0 ? h = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? h = " However, it is set to a " + typeof f + "." : f.$$typeof === W ? h = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? h = " Did you accidentally pass the Context.Consumer instead?" : h = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", d("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ke(t) || "Component", h);
      }
    }
    if (typeof f == "object" && f !== null)
      s = Vt(f);
    else {
      u = yo(e, t, !0);
      var y = t.contextTypes;
      i = y != null, s = i ? go(e, u) : mr;
    }
    var g = new t(a, s);
    if (e.mode & $t) {
      an(!0);
      try {
        g = new t(a, s);
      } finally {
        an(!1);
      }
    }
    var D = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
    aT(e, g);
    {
      if (typeof t.getDerivedStateFromProps == "function" && D === null) {
        var w = Ke(t) || "Component";
        Qy.has(w) || (Qy.add(w), d("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
      }
      if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
        var z = null, U = null, P = null;
        if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? z = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (z = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? P = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (P = "UNSAFE_componentWillUpdate"), z !== null || U !== null || P !== null) {
          var oe = Ke(t) || "Component", ye = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
          Gy.has(oe) || (Gy.add(oe), d(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, oe, ye, z !== null ? `
  ` + z : "", U !== null ? `
  ` + U : "", P !== null ? `
  ` + P : ""));
        }
      }
    }
    return i && kR(e, u, s), g;
  }
  function _U(e, t) {
    var a = t.state;
    typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (d("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Oe(e) || "Component"), eg.enqueueReplaceState(t, t.state, null));
  }
  function lT(e, t, a, i) {
    var u = t.state;
    if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
      {
        var s = Oe(e) || "Component";
        Yy.has(s) || (Yy.add(s), d("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
      }
      eg.enqueueReplaceState(t, t.state, null);
    }
  }
  function tg(e, t, a, i) {
    DU(e, t, a);
    var u = e.stateNode;
    u.props = a, u.state = e.memoizedState, u.refs = eT, Vy(e);
    var s = t.contextType;
    if (typeof s == "object" && s !== null)
      u.context = Vt(s);
    else {
      var f = yo(e, t, !0);
      u.context = go(e, f);
    }
    {
      if (u.state === a) {
        var v = Ke(t) || "Component";
        Ky.has(v) || (Ky.add(v), d("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", v));
      }
      e.mode & $t && Zr.recordLegacyContextWarning(e, u), Zr.recordUnsafeLifecycleWarnings(e, u);
    }
    u.state = e.memoizedState;
    var h = t.getDerivedStateFromProps;
    if (typeof h == "function" && (Jy(e, t, h, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (_U(e, u), Rp(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
      var y = Ye;
      y |= Kl, (e.mode & Ta) !== Ee && (y |= ii), e.flags |= y;
    }
  }
  function kU(e, t, a, i) {
    var u = e.stateNode, s = e.memoizedProps;
    u.props = s;
    var f = u.context, v = t.contextType, h = mr;
    if (typeof v == "object" && v !== null)
      h = Vt(v);
    else {
      var y = yo(e, t, !0);
      h = go(e, y);
    }
    var g = t.getDerivedStateFromProps, D = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
    !D && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== h) && lT(e, u, a, h), ZR();
    var w = e.memoizedState, z = u.state = w;
    if (Rp(e, a, u, i), z = e.memoizedState, s === a && w === z && !ip() && !Tp()) {
      if (typeof u.componentDidMount == "function") {
        var U = Ye;
        U |= Kl, (e.mode & Ta) !== Ee && (U |= ii), e.flags |= U;
      }
      return !1;
    }
    typeof g == "function" && (Jy(e, t, g, a), z = e.memoizedState);
    var P = Tp() || rT(e, t, s, a, w, z, h);
    if (P) {
      if (!D && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
        var oe = Ye;
        oe |= Kl, (e.mode & Ta) !== Ee && (oe |= ii), e.flags |= oe;
      }
    } else {
      if (typeof u.componentDidMount == "function") {
        var ye = Ye;
        ye |= Kl, (e.mode & Ta) !== Ee && (ye |= ii), e.flags |= ye;
      }
      e.memoizedProps = a, e.memoizedState = z;
    }
    return u.props = a, u.state = z, u.context = h, P;
  }
  function OU(e, t, a, i, u) {
    var s = t.stateNode;
    qR(e, t);
    var f = t.memoizedProps, v = t.type === t.elementType ? f : Jr(t.type, f);
    s.props = v;
    var h = t.pendingProps, y = s.context, g = a.contextType, D = mr;
    if (typeof g == "object" && g !== null)
      D = Vt(g);
    else {
      var w = yo(t, a, !0);
      D = go(t, w);
    }
    var z = a.getDerivedStateFromProps, U = typeof z == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== h || y !== D) && lT(t, s, i, D), ZR();
    var P = t.memoizedState, oe = s.state = P;
    if (Rp(t, i, s, u), oe = t.memoizedState, f === h && P === oe && !ip() && !Tp() && !Wn)
      return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Ye), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Gl), !1;
    typeof z == "function" && (Jy(t, a, z, i), oe = t.memoizedState);
    var ye = Tp() || rT(t, a, v, i, P, oe, D) || // TODO: In some cases, we'll end up checking if context has changed twice,
    // both before and after `shouldComponentUpdate` has been called. Not ideal,
    // but I'm loath to refactor this function. This only happens for memoized
    // components so it's not that common.
    Wn;
    return ye ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, oe, D), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, oe, D)), typeof s.componentDidUpdate == "function" && (t.flags |= Ye), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Gl)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Ye), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Gl), t.memoizedProps = i, t.memoizedState = oe), s.props = i, s.state = oe, s.context = D, ye;
  }
  var ng, rg, ag, ig, lg, uT = function(e, t) {
  };
  ng = !1, rg = !1, ag = {}, ig = {}, lg = {}, uT = function(e, t) {
    if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
      if (typeof e._store != "object")
        throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
      e._store.validated = !0;
      var a = Oe(t) || "Component";
      ig[a] || (ig[a] = !0, d('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
    }
  };
  function Mc(e, t, a) {
    var i = a.ref;
    if (i !== null && typeof i != "function" && typeof i != "object") {
      if ((e.mode & $t || Ae) && // We warn in ReactElement.js if owner and self are equal for string refs
      // because these cannot be automatically converted to an arrow function
      // using a codemod. Therefore, we don't have to warn about string refs again.
      !(a._owner && a._self && a._owner.stateNode !== a._self)) {
        var u = Oe(e) || "Component";
        ag[u] || (d('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), ag[u] = !0);
      }
      if (a._owner) {
        var s = a._owner, f;
        if (s) {
          var v = s;
          if (v.tag !== x)
            throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
          f = v.stateNode;
        }
        if (!f)
          throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
        var h = f;
        wr(i, "ref");
        var y = "" + i;
        if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
          return t.ref;
        var g = function(D) {
          var w = h.refs;
          w === eT && (w = h.refs = {}), D === null ? delete w[y] : w[y] = D;
        };
        return g._stringRef = y, g;
      } else {
        if (typeof i != "string")
          throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
        if (!a._owner)
          throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
      }
    }
    return i;
  }
  function wp(e, t) {
    var a = Object.prototype.toString.call(t);
    throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
  }
  function bp(e) {
    {
      var t = Oe(e) || "Component";
      if (lg[t])
        return;
      lg[t] = !0, d("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
  }
  function oT(e) {
    var t = e._payload, a = e._init;
    return a(t);
  }
  function sT(e) {
    function t(k, $) {
      if (e) {
        var O = k.deletions;
        O === null ? (k.deletions = [$], k.flags |= Wl) : O.push($);
      }
    }
    function a(k, $) {
      if (!e)
        return null;
      for (var O = $; O !== null; )
        t(k, O), O = O.sibling;
      return null;
    }
    function i(k, $) {
      for (var O = /* @__PURE__ */ new Map(), G = $; G !== null; )
        G.key !== null ? O.set(G.key, G) : O.set(G.index, G), G = G.sibling;
      return O;
    }
    function u(k, $) {
      var O = Eu(k, $);
      return O.index = 0, O.sibling = null, O;
    }
    function s(k, $, O) {
      if (k.index = O, !e)
        return k.flags |= KC, $;
      var G = k.alternate;
      if (G !== null) {
        var se = G.index;
        return se < $ ? (k.flags |= Pt, $) : se;
      } else
        return k.flags |= Pt, $;
    }
    function f(k) {
      return e && k.alternate === null && (k.flags |= Pt), k;
    }
    function v(k, $, O, G) {
      if ($ === null || $.tag !== Y) {
        var se = NS(O, k.mode, G);
        return se.return = k, se;
      } else {
        var ie = u($, O);
        return ie.return = k, ie;
      }
    }
    function h(k, $, O, G) {
      var se = O.type;
      if (se === Sa)
        return g(k, $, O.props.children, G, O.key);
      if ($ !== null && ($.elementType === se || // Keep this check inline so it only runs on the false path:
      Jx($, O) || // Lazy types should reconcile their resolved type.
      // We need to do this after the Hot Reloading check above,
      // because hot reloading has different semantics than prod because
      // it doesn't resuspend. So we can't let the call below suspend.
      typeof se == "object" && se !== null && se.$$typeof === ge && oT(se) === $.type)) {
        var ie = u($, O.props);
        return ie.ref = Mc(k, $, O), ie.return = k, ie._debugSource = O._source, ie._debugOwner = O._owner, ie;
      }
      var Re = LS(O, k.mode, G);
      return Re.ref = Mc(k, $, O), Re.return = k, Re;
    }
    function y(k, $, O, G) {
      if ($ === null || $.tag !== M || $.stateNode.containerInfo !== O.containerInfo || $.stateNode.implementation !== O.implementation) {
        var se = zS(O, k.mode, G);
        return se.return = k, se;
      } else {
        var ie = u($, O.children || []);
        return ie.return = k, ie;
      }
    }
    function g(k, $, O, G, se) {
      if ($ === null || $.tag !== re) {
        var ie = dl(O, k.mode, G, se);
        return ie.return = k, ie;
      } else {
        var Re = u($, O);
        return Re.return = k, Re;
      }
    }
    function D(k, $, O) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number") {
        var G = NS("" + $, k.mode, O);
        return G.return = k, G;
      }
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case ga: {
            var se = LS($, k.mode, O);
            return se.ref = Mc(k, null, $), se.return = k, se;
          }
          case Qr: {
            var ie = zS($, k.mode, O);
            return ie.return = k, ie;
          }
          case ge: {
            var Re = $._payload, _e = $._init;
            return D(k, _e(Re), O);
          }
        }
        if (qe($) || qa($)) {
          var ut = dl($, k.mode, O, null);
          return ut.return = k, ut;
        }
        wp(k, $);
      }
      return typeof $ == "function" && bp(k), null;
    }
    function w(k, $, O, G) {
      var se = $ !== null ? $.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number")
        return se !== null ? null : v(k, $, "" + O, G);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case ga:
            return O.key === se ? h(k, $, O, G) : null;
          case Qr:
            return O.key === se ? y(k, $, O, G) : null;
          case ge: {
            var ie = O._payload, Re = O._init;
            return w(k, $, Re(ie), G);
          }
        }
        if (qe(O) || qa(O))
          return se !== null ? null : g(k, $, O, G, null);
        wp(k, O);
      }
      return typeof O == "function" && bp(k), null;
    }
    function z(k, $, O, G, se) {
      if (typeof G == "string" && G !== "" || typeof G == "number") {
        var ie = k.get(O) || null;
        return v($, ie, "" + G, se);
      }
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case ga: {
            var Re = k.get(G.key === null ? O : G.key) || null;
            return h($, Re, G, se);
          }
          case Qr: {
            var _e = k.get(G.key === null ? O : G.key) || null;
            return y($, _e, G, se);
          }
          case ge:
            var ut = G._payload, Ge = G._init;
            return z(k, $, O, Ge(ut), se);
        }
        if (qe(G) || qa(G)) {
          var At = k.get(O) || null;
          return g($, At, G, se, null);
        }
        wp($, G);
      }
      return typeof G == "function" && bp($), null;
    }
    function U(k, $, O) {
      {
        if (typeof k != "object" || k === null)
          return $;
        switch (k.$$typeof) {
          case ga:
          case Qr:
            uT(k, O);
            var G = k.key;
            if (typeof G != "string")
              break;
            if ($ === null) {
              $ = /* @__PURE__ */ new Set(), $.add(G);
              break;
            }
            if (!$.has(G)) {
              $.add(G);
              break;
            }
            d("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", G);
            break;
          case ge:
            var se = k._payload, ie = k._init;
            U(ie(se), $, O);
            break;
        }
      }
      return $;
    }
    function P(k, $, O, G) {
      for (var se = null, ie = 0; ie < O.length; ie++) {
        var Re = O[ie];
        se = U(Re, se, k);
      }
      for (var _e = null, ut = null, Ge = $, At = 0, Xe = 0, zt = null; Ge !== null && Xe < O.length; Xe++) {
        Ge.index > Xe ? (zt = Ge, Ge = null) : zt = Ge.sibling;
        var kn = w(k, Ge, O[Xe], G);
        if (kn === null) {
          Ge === null && (Ge = zt);
          break;
        }
        e && Ge && kn.alternate === null && t(k, Ge), At = s(kn, At, Xe), ut === null ? _e = kn : ut.sibling = kn, ut = kn, Ge = zt;
      }
      if (Xe === O.length) {
        if (a(k, Ge), dn()) {
          var Sn = Xe;
          uu(k, Sn);
        }
        return _e;
      }
      if (Ge === null) {
        for (; Xe < O.length; Xe++) {
          var gr = D(k, O[Xe], G);
          gr !== null && (At = s(gr, At, Xe), ut === null ? _e = gr : ut.sibling = gr, ut = gr);
        }
        if (dn()) {
          var Vn = Xe;
          uu(k, Vn);
        }
        return _e;
      }
      for (var Bn = i(k, Ge); Xe < O.length; Xe++) {
        var On = z(Bn, k, Xe, O[Xe], G);
        On !== null && (e && On.alternate !== null && Bn.delete(On.key === null ? Xe : On.key), At = s(On, At, Xe), ut === null ? _e = On : ut.sibling = On, ut = On);
      }
      if (e && Bn.forEach(function(Po) {
        return t(k, Po);
      }), dn()) {
        var Ci = Xe;
        uu(k, Ci);
      }
      return _e;
    }
    function oe(k, $, O, G) {
      var se = qa(O);
      if (typeof se != "function")
        throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
      {
        typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
        O[Symbol.toStringTag] === "Generator" && (rg || d("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), rg = !0), O.entries === se && (ng || d("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ng = !0);
        var ie = se.call(O);
        if (ie)
          for (var Re = null, _e = ie.next(); !_e.done; _e = ie.next()) {
            var ut = _e.value;
            Re = U(ut, Re, k);
          }
      }
      var Ge = se.call(O);
      if (Ge == null)
        throw new Error("An iterable object provided no iterator.");
      for (var At = null, Xe = null, zt = $, kn = 0, Sn = 0, gr = null, Vn = Ge.next(); zt !== null && !Vn.done; Sn++, Vn = Ge.next()) {
        zt.index > Sn ? (gr = zt, zt = null) : gr = zt.sibling;
        var Bn = w(k, zt, Vn.value, G);
        if (Bn === null) {
          zt === null && (zt = gr);
          break;
        }
        e && zt && Bn.alternate === null && t(k, zt), kn = s(Bn, kn, Sn), Xe === null ? At = Bn : Xe.sibling = Bn, Xe = Bn, zt = gr;
      }
      if (Vn.done) {
        if (a(k, zt), dn()) {
          var On = Sn;
          uu(k, On);
        }
        return At;
      }
      if (zt === null) {
        for (; !Vn.done; Sn++, Vn = Ge.next()) {
          var Ci = D(k, Vn.value, G);
          Ci !== null && (kn = s(Ci, kn, Sn), Xe === null ? At = Ci : Xe.sibling = Ci, Xe = Ci);
        }
        if (dn()) {
          var Po = Sn;
          uu(k, Po);
        }
        return At;
      }
      for (var of = i(k, zt); !Vn.done; Sn++, Vn = Ge.next()) {
        var za = z(of, k, Sn, Vn.value, G);
        za !== null && (e && za.alternate !== null && of.delete(za.key === null ? Sn : za.key), kn = s(za, kn, Sn), Xe === null ? At = za : Xe.sibling = za, Xe = za);
      }
      if (e && of.forEach(function(Ij) {
        return t(k, Ij);
      }), dn()) {
        var Bj = Sn;
        uu(k, Bj);
      }
      return At;
    }
    function ye(k, $, O, G) {
      if ($ !== null && $.tag === Y) {
        a(k, $.sibling);
        var se = u($, O);
        return se.return = k, se;
      }
      a(k, $);
      var ie = NS(O, k.mode, G);
      return ie.return = k, ie;
    }
    function he(k, $, O, G) {
      for (var se = O.key, ie = $; ie !== null; ) {
        if (ie.key === se) {
          var Re = O.type;
          if (Re === Sa) {
            if (ie.tag === re) {
              a(k, ie.sibling);
              var _e = u(ie, O.props.children);
              return _e.return = k, _e._debugSource = O._source, _e._debugOwner = O._owner, _e;
            }
          } else if (ie.elementType === Re || // Keep this check inline so it only runs on the false path:
          Jx(ie, O) || // Lazy types should reconcile their resolved type.
          // We need to do this after the Hot Reloading check above,
          // because hot reloading has different semantics than prod because
          // it doesn't resuspend. So we can't let the call below suspend.
          typeof Re == "object" && Re !== null && Re.$$typeof === ge && oT(Re) === ie.type) {
            a(k, ie.sibling);
            var ut = u(ie, O.props);
            return ut.ref = Mc(k, ie, O), ut.return = k, ut._debugSource = O._source, ut._debugOwner = O._owner, ut;
          }
          a(k, ie);
          break;
        } else
          t(k, ie);
        ie = ie.sibling;
      }
      if (O.type === Sa) {
        var Ge = dl(O.props.children, k.mode, G, O.key);
        return Ge.return = k, Ge;
      } else {
        var At = LS(O, k.mode, G);
        return At.ref = Mc(k, $, O), At.return = k, At;
      }
    }
    function Ve(k, $, O, G) {
      for (var se = O.key, ie = $; ie !== null; ) {
        if (ie.key === se)
          if (ie.tag === M && ie.stateNode.containerInfo === O.containerInfo && ie.stateNode.implementation === O.implementation) {
            a(k, ie.sibling);
            var Re = u(ie, O.children || []);
            return Re.return = k, Re;
          } else {
            a(k, ie);
            break;
          }
        else
          t(k, ie);
        ie = ie.sibling;
      }
      var _e = zS(O, k.mode, G);
      return _e.return = k, _e;
    }
    function ze(k, $, O, G) {
      var se = typeof O == "object" && O !== null && O.type === Sa && O.key === null;
      if (se && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case ga:
            return f(he(k, $, O, G));
          case Qr:
            return f(Ve(k, $, O, G));
          case ge:
            var ie = O._payload, Re = O._init;
            return ze(k, $, Re(ie), G);
        }
        if (qe(O))
          return P(k, $, O, G);
        if (qa(O))
          return oe(k, $, O, G);
        wp(k, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" ? f(ye(k, $, "" + O, G)) : (typeof O == "function" && bp(k), a(k, $));
    }
    return ze;
  }
  var xo = sT(!0), cT = sT(!1);
  function MU(e, t) {
    if (e !== null && t.child !== e.child)
      throw new Error("Resuming work not yet implemented.");
    if (t.child !== null) {
      var a = t.child, i = Eu(a, a.pendingProps);
      for (t.child = i, i.return = t; a.sibling !== null; )
        a = a.sibling, i = i.sibling = Eu(a, a.pendingProps), i.return = t;
      i.sibling = null;
    }
  }
  function LU(e, t) {
    for (var a = e.child; a !== null; )
      uj(a, t), a = a.sibling;
  }
  var Lc = {}, rl = Zi(Lc), Nc = Zi(Lc), Dp = Zi(Lc);
  function _p(e) {
    if (e === Lc)
      throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
    return e;
  }
  function fT() {
    var e = _p(Dp.current);
    return e;
  }
  function ug(e, t) {
    Dn(Dp, t, e), Dn(Nc, e, e), Dn(rl, Lc, e);
    var a = QN(t);
    bn(rl, e), Dn(rl, a, e);
  }
  function wo(e) {
    bn(rl, e), bn(Nc, e), bn(Dp, e);
  }
  function og() {
    var e = _p(rl.current);
    return e;
  }
  function dT(e) {
    _p(Dp.current);
    var t = _p(rl.current), a = WN(t, e.type);
    t !== a && (Dn(Nc, e, e), Dn(rl, a, e));
  }
  function sg(e) {
    Nc.current === e && (bn(rl, e), bn(Nc, e));
  }
  var NU = 0, pT = 1, vT = 1, zc = 2, ea = Zi(NU);
  function cg(e, t) {
    return (e & t) !== 0;
  }
  function bo(e) {
    return e & pT;
  }
  function fg(e, t) {
    return e & pT | t;
  }
  function zU(e, t) {
    return e | t;
  }
  function al(e, t) {
    Dn(ea, t, e);
  }
  function Do(e) {
    bn(ea, e);
  }
  function UU(e, t) {
    var a = e.memoizedState;
    return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
  }
  function kp(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === I) {
        var a = t.memoizedState;
        if (a !== null) {
          var i = a.dehydrated;
          if (i === null || xR(i) || yy(i))
            return t;
        }
      } else if (t.tag === nt && // revealOrder undefined can't be trusted because it don't
      // keep track of whether it suspended or not.
      t.memoizedProps.revealOrder !== void 0) {
        var u = (t.flags & Ze) !== Se;
        if (u)
          return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e)
        return null;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var tr = (
    /*   */
    0
  ), Yt = (
    /* */
    1
  ), Da = (
    /*  */
    2
  ), Qt = (
    /*    */
    4
  ), pn = (
    /*   */
    8
  ), dg = [];
  function pg() {
    for (var e = 0; e < dg.length; e++) {
      var t = dg[e];
      t._workInProgressVersionPrimary = null;
    }
    dg.length = 0;
  }
  function AU(e, t) {
    var a = t._getVersion, i = a(t._source);
    e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
  }
  var ue = l.ReactCurrentDispatcher, Uc = l.ReactCurrentBatchConfig, vg, _o;
  vg = /* @__PURE__ */ new Set();
  var pu = Q, lt = null, Wt = null, Gt = null, Op = !1, Ac = !1, jc = 0, jU = 0, FU = 25, V = null, Mr = null, il = -1, hg = !1;
  function tt() {
    {
      var e = V;
      Mr === null ? Mr = [e] : Mr.push(e);
    }
  }
  function ne() {
    {
      var e = V;
      Mr !== null && (il++, Mr[il] !== e && HU(e));
    }
  }
  function ko(e) {
    e != null && !qe(e) && d("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
  }
  function HU(e) {
    {
      var t = Oe(lt);
      if (!vg.has(t) && (vg.add(t), Mr !== null)) {
        for (var a = "", i = 30, u = 0; u <= il; u++) {
          for (var s = Mr[u], f = u === il ? e : s, v = u + 1 + ". " + s; v.length < i; )
            v += " ";
          v += f + `
`, a += v;
        }
        d(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
      }
    }
  }
  function _n() {
    throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
  }
  function mg(e, t) {
    if (hg)
      return !1;
    if (t === null)
      return d("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
    e.length !== t.length && d(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!hr(e[a], t[a]))
        return !1;
    return !0;
  }
  function Oo(e, t, a, i, u, s) {
    pu = s, lt = t, Mr = e !== null ? e._debugHookTypes : null, il = -1, hg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Q, e !== null && e.memoizedState !== null ? ue.current = AT : Mr !== null ? ue.current = UT : ue.current = zT;
    var f = a(i, u);
    if (Ac) {
      var v = 0;
      do {
        if (Ac = !1, jc = 0, v >= FU)
          throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        v += 1, hg = !1, Wt = null, Gt = null, t.updateQueue = null, il = -1, ue.current = jT, f = a(i, u);
      } while (Ac);
    }
    ue.current = Bp, t._debugHookTypes = Mr;
    var h = Wt !== null && Wt.next !== null;
    if (pu = Q, lt = null, Wt = null, Gt = null, V = null, Mr = null, il = -1, e !== null && (e.flags & li) !== (t.flags & li) && // Disable this warning in legacy mode, because legacy Suspense is weird
    // and creates false positives. To make this work in legacy mode, we'd
    // need to mark fibers that commit in an incomplete state, somehow. For
    // now I'll disable the warning that most of the bugs that would trigger
    // it are either exclusive to concurrent mode or exist in both.
    (e.mode & Pe) !== Ee && d("Internal React error: Expected static flag was missing. Please notify the React team."), Op = !1, h)
      throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
    return f;
  }
  function Mo() {
    var e = jc !== 0;
    return jc = 0, e;
  }
  function hT(e, t, a) {
    t.updateQueue = e.updateQueue, (t.mode & Ta) !== Ee ? t.flags &= ~(Td | ii | Wr | Ye) : t.flags &= ~(Wr | Ye), e.lanes = Od(e.lanes, a);
  }
  function mT() {
    if (ue.current = Bp, Op) {
      for (var e = lt.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Op = !1;
    }
    pu = Q, lt = null, Wt = null, Gt = null, Mr = null, il = -1, V = null, kT = !1, Ac = !1, jc = 0;
  }
  function _a() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Gt === null ? lt.memoizedState = Gt = e : Gt = Gt.next = e, Gt;
  }
  function Lr() {
    var e;
    if (Wt === null) {
      var t = lt.alternate;
      t !== null ? e = t.memoizedState : e = null;
    } else
      e = Wt.next;
    var a;
    if (Gt === null ? a = lt.memoizedState : a = Gt.next, a !== null)
      Gt = a, a = Gt.next, Wt = e;
    else {
      if (e === null)
        throw new Error("Rendered more hooks than during the previous render.");
      Wt = e;
      var i = { memoizedState: Wt.memoizedState, baseState: Wt.baseState, baseQueue: Wt.baseQueue, queue: Wt.queue, next: null };
      Gt === null ? lt.memoizedState = Gt = i : Gt = Gt.next = i;
    }
    return Gt;
  }
  function yT() {
    return { lastEffect: null, stores: null };
  }
  function yg(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function gg(e, t, a) {
    var i = _a(), u;
    a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
    var s = { pending: null, interleaved: null, lanes: Q, dispatch: null, lastRenderedReducer: e, lastRenderedState: u };
    i.queue = s;
    var f = s.dispatch = BU.bind(null, lt, s);
    return [i.memoizedState, f];
  }
  function Sg(e, t, a) {
    var i = Lr(), u = i.queue;
    if (u === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    u.lastRenderedReducer = e;
    var s = Wt, f = s.baseQueue, v = u.pending;
    if (v !== null) {
      if (f !== null) {
        var h = f.next, y = v.next;
        f.next = y, v.next = h;
      }
      s.baseQueue !== f && d("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = v, u.pending = null;
    }
    if (f !== null) {
      var g = f.next, D = s.baseState, w = null, z = null, U = null, P = g;
      do {
        var oe = P.lane;
        if (lo(pu, oe)) {
          if (U !== null) {
            var he = {
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: ln,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            };
            U = U.next = he;
          }
          if (P.hasEagerState)
            D = P.eagerState;
          else {
            var Ve = P.action;
            D = e(D, Ve);
          }
        } else {
          var ye = { lane: oe, action: P.action, hasEagerState: P.hasEagerState, eagerState: P.eagerState, next: null };
          U === null ? (z = U = ye, w = D) : U = U.next = ye, lt.lanes = Le(lt.lanes, oe), nf(oe);
        }
        P = P.next;
      } while (P !== null && P !== g);
      U === null ? w = D : U.next = z, hr(D, i.memoizedState) || Ic(), i.memoizedState = D, i.baseState = w, i.baseQueue = U, u.lastRenderedState = D;
    }
    var ze = u.interleaved;
    if (ze !== null) {
      var k = ze;
      do {
        var $ = k.lane;
        lt.lanes = Le(lt.lanes, $), nf($), k = k.next;
      } while (k !== ze);
    } else
      f === null && (u.lanes = Q);
    var O = u.dispatch;
    return [i.memoizedState, O];
  }
  function Eg(e, t, a) {
    var i = Lr(), u = i.queue;
    if (u === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    u.lastRenderedReducer = e;
    var s = u.dispatch, f = u.pending, v = i.memoizedState;
    if (f !== null) {
      u.pending = null;
      var h = f.next, y = h;
      do {
        var g = y.action;
        v = e(v, g), y = y.next;
      } while (y !== h);
      hr(v, i.memoizedState) || Ic(), i.memoizedState = v, i.baseQueue === null && (i.baseState = v), u.lastRenderedState = v;
    }
    return [v, s];
  }
  function $P(e, t, a) {
  }
  function VP(e, t, a) {
  }
  function Cg(e, t, a) {
    var i = lt, u = _a(), s, f = dn();
    if (f) {
      if (a === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      s = a(), _o || s !== a() && (d("The result of getServerSnapshot should be cached to avoid an infinite loop"), _o = !0);
    } else {
      if (s = t(), !_o) {
        var v = t();
        hr(s, v) || (d("The result of getSnapshot should be cached to avoid an infinite loop"), _o = !0);
      }
      var h = uv();
      if (h === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      kd(h, pu) || gT(i, t, s);
    }
    u.memoizedState = s;
    var y = { value: s, getSnapshot: t };
    return u.queue = y, Up(ET.bind(null, i, y, e), [e]), i.flags |= Wr, Fc(Yt | pn, ST.bind(null, i, y, s, t), void 0, null), s;
  }
  function Mp(e, t, a) {
    var i = lt, u = Lr(), s = t();
    if (!_o) {
      var f = t();
      hr(s, f) || (d("The result of getSnapshot should be cached to avoid an infinite loop"), _o = !0);
    }
    var v = u.memoizedState, h = !hr(v, s);
    h && (u.memoizedState = s, Ic());
    var y = u.queue;
    if (Pc(ET.bind(null, i, y, e), [e]), y.getSnapshot !== t || h || // Check if the susbcribe function changed. We can save some memory by
    // checking whether we scheduled a subscription effect above.
    Gt !== null && Gt.memoizedState.tag & Yt) {
      i.flags |= Wr, Fc(Yt | pn, ST.bind(null, i, y, s, t), void 0, null);
      var g = uv();
      if (g === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      kd(g, pu) || gT(i, t, s);
    }
    return s;
  }
  function gT(e, t, a) {
    e.flags |= Rd;
    var i = { getSnapshot: t, value: a }, u = lt.updateQueue;
    if (u === null)
      u = yT(), lt.updateQueue = u, u.stores = [i];
    else {
      var s = u.stores;
      s === null ? u.stores = [i] : s.push(i);
    }
  }
  function ST(e, t, a, i) {
    t.value = a, t.getSnapshot = i, CT(t) && RT(e);
  }
  function ET(e, t, a) {
    var i = function() {
      CT(t) && RT(e);
    };
    return a(i);
  }
  function CT(e) {
    var t = e.getSnapshot, a = e.value;
    try {
      var i = t();
      return !hr(a, i);
    } catch (u) {
      return !0;
    }
  }
  function RT(e) {
    var t = er(e, be);
    t !== null && Zt(t, e, be, mt);
  }
  function Lp(e) {
    var t = _a();
    typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
    var a = { pending: null, interleaved: null, lanes: Q, dispatch: null, lastRenderedReducer: yg, lastRenderedState: e };
    t.queue = a;
    var i = a.dispatch = IU.bind(null, lt, a);
    return [t.memoizedState, i];
  }
  function Rg(e) {
    return Sg(yg);
  }
  function Tg(e) {
    return Eg(yg);
  }
  function Fc(e, t, a, i) {
    var u = {
      tag: e,
      create: t,
      destroy: a,
      deps: i,
      // Circular
      next: null
    }, s = lt.updateQueue;
    if (s === null)
      s = yT(), lt.updateQueue = s, s.lastEffect = u.next = u;
    else {
      var f = s.lastEffect;
      if (f === null)
        s.lastEffect = u.next = u;
      else {
        var v = f.next;
        f.next = u, u.next = v, s.lastEffect = u;
      }
    }
    return u;
  }
  function xg(e) {
    var t = _a();
    {
      var a = { current: e };
      return t.memoizedState = a, a;
    }
  }
  function Np(e) {
    var t = Lr();
    return t.memoizedState;
  }
  function Hc(e, t, a, i) {
    var u = _a(), s = i === void 0 ? null : i;
    lt.flags |= e, u.memoizedState = Fc(Yt | t, a, void 0, s);
  }
  function zp(e, t, a, i) {
    var u = Lr(), s = i === void 0 ? null : i, f = void 0;
    if (Wt !== null) {
      var v = Wt.memoizedState;
      if (f = v.destroy, s !== null) {
        var h = v.deps;
        if (mg(s, h)) {
          u.memoizedState = Fc(t, a, f, s);
          return;
        }
      }
    }
    lt.flags |= e, u.memoizedState = Fc(Yt | t, a, f, s);
  }
  function Up(e, t) {
    return (lt.mode & Ta) !== Ee ? Hc(Td | Wr | sm, pn, e, t) : Hc(Wr | sm, pn, e, t);
  }
  function Pc(e, t) {
    return zp(Wr, pn, e, t);
  }
  function wg(e, t) {
    return Hc(Ye, Da, e, t);
  }
  function Ap(e, t) {
    return zp(Ye, Da, e, t);
  }
  function bg(e, t) {
    var a = Ye;
    return a |= Kl, (lt.mode & Ta) !== Ee && (a |= ii), Hc(a, Qt, e, t);
  }
  function jp(e, t) {
    return zp(Ye, Qt, e, t);
  }
  function TT(e, t) {
    if (typeof t == "function") {
      var a = t, i = e();
      return a(i), function() {
        a(null);
      };
    } else if (t != null) {
      var u = t;
      u.hasOwnProperty("current") || d("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
      var s = e();
      return u.current = s, function() {
        u.current = null;
      };
    }
  }
  function Dg(e, t, a) {
    typeof t != "function" && d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var i = a != null ? a.concat([e]) : null, u = Ye;
    return u |= Kl, (lt.mode & Ta) !== Ee && (u |= ii), Hc(u, Qt, TT.bind(null, t, e), i);
  }
  function Fp(e, t, a) {
    typeof t != "function" && d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var i = a != null ? a.concat([e]) : null;
    return zp(Ye, Qt, TT.bind(null, t, e), i);
  }
  function PU(e, t) {
  }
  var Hp = PU;
  function _g(e, t) {
    var a = _a(), i = t === void 0 ? null : t;
    return a.memoizedState = [e, i], e;
  }
  function Pp(e, t) {
    var a = Lr(), i = t === void 0 ? null : t, u = a.memoizedState;
    if (u !== null && i !== null) {
      var s = u[1];
      if (mg(i, s))
        return u[0];
    }
    return a.memoizedState = [e, i], e;
  }
  function kg(e, t) {
    var a = _a(), i = t === void 0 ? null : t, u = e();
    return a.memoizedState = [u, i], u;
  }
  function $p(e, t) {
    var a = Lr(), i = t === void 0 ? null : t, u = a.memoizedState;
    if (u !== null && i !== null) {
      var s = u[1];
      if (mg(i, s))
        return u[0];
    }
    var f = e();
    return a.memoizedState = [f, i], f;
  }
  function Og(e) {
    var t = _a();
    return t.memoizedState = e, e;
  }
  function xT(e) {
    var t = Lr(), a = Wt, i = a.memoizedState;
    return bT(t, i, e);
  }
  function wT(e) {
    var t = Lr();
    if (Wt === null)
      return t.memoizedState = e, e;
    var a = Wt.memoizedState;
    return bT(t, a, e);
  }
  function bT(e, t, a) {
    var i = !RM(pu);
    if (i) {
      if (!hr(a, t)) {
        var u = h1();
        lt.lanes = Le(lt.lanes, u), nf(u), e.baseState = !0;
      }
      return t;
    } else
      return e.baseState && (e.baseState = !1, Ic()), e.memoizedState = a, a;
  }
  function $U(e, t, a) {
    var i = Xr();
    un(MM(i, oi)), e(!0);
    var u = Uc.transition;
    Uc.transition = {};
    var s = Uc.transition;
    Uc.transition._updatedFibers = /* @__PURE__ */ new Set();
    try {
      e(!1), t();
    } finally {
      if (un(i), Uc.transition = u, u === null && s._updatedFibers) {
        var f = s._updatedFibers.size;
        f > 10 && p("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
      }
    }
  }
  function Mg() {
    var e = Lp(!1), t = e[0], a = e[1], i = $U.bind(null, a), u = _a();
    return u.memoizedState = i, [t, i];
  }
  function DT() {
    var e = Rg(), t = e[0], a = Lr(), i = a.memoizedState;
    return [t, i];
  }
  function _T() {
    var e = Tg(), t = e[0], a = Lr(), i = a.memoizedState;
    return [t, i];
  }
  var kT = !1;
  function VU() {
    return kT;
  }
  function Lg() {
    var e = _a(), t = uv(), a = t.identifierPrefix, i;
    if (dn()) {
      var u = nU();
      i = ":" + a + "R" + u;
      var s = jc++;
      s > 0 && (i += "H" + s.toString(32)), i += ":";
    } else {
      var f = jU++;
      i = ":" + a + "r" + f.toString(32) + ":";
    }
    return e.memoizedState = i, i;
  }
  function Vp() {
    var e = Lr(), t = e.memoizedState;
    return t;
  }
  function BU(e, t, a) {
    typeof arguments[3] == "function" && d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var i = cl(e), u = { lane: i, action: a, hasEagerState: !1, eagerState: null, next: null };
    if (OT(e))
      MT(t, u);
    else {
      var s = GR(e, t, u, i);
      if (s !== null) {
        var f = $n();
        Zt(s, e, i, f), LT(s, t, i);
      }
    }
    NT(e, i);
  }
  function IU(e, t, a) {
    typeof arguments[3] == "function" && d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var i = cl(e), u = { lane: i, action: a, hasEagerState: !1, eagerState: null, next: null };
    if (OT(e))
      MT(t, u);
    else {
      var s = e.alternate;
      if (e.lanes === Q && (s === null || s.lanes === Q)) {
        var f = t.lastRenderedReducer;
        if (f !== null) {
          var v;
          v = ue.current, ue.current = ta;
          try {
            var h = t.lastRenderedState, y = f(h, a);
            if (u.hasEagerState = !0, u.eagerState = y, hr(y, h)) {
              RU(e, t, u, i);
              return;
            }
          } catch (w) {
          } finally {
            ue.current = v;
          }
        }
      }
      var g = GR(e, t, u, i);
      if (g !== null) {
        var D = $n();
        Zt(g, e, i, D), LT(g, t, i);
      }
    }
    NT(e, i);
  }
  function OT(e) {
    var t = e.alternate;
    return e === lt || t !== null && t === lt;
  }
  function MT(e, t) {
    Ac = Op = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function LT(e, t, a) {
    if (v1(a)) {
      var i = t.lanes;
      i = m1(i, e.pendingLanes);
      var u = Le(i, a);
      t.lanes = u, Hm(e, u);
    }
  }
  function NT(e, t, a) {
    vm(e, t);
  }
  var Bp = { readContext: Vt, useCallback: _n, useContext: _n, useEffect: _n, useImperativeHandle: _n, useInsertionEffect: _n, useLayoutEffect: _n, useMemo: _n, useReducer: _n, useRef: _n, useState: _n, useDebugValue: _n, useDeferredValue: _n, useTransition: _n, useMutableSource: _n, useSyncExternalStore: _n, useId: _n, unstable_isNewReconciler: Ft }, zT = null, UT = null, AT = null, jT = null, ka = null, ta = null, Ip = null;
  {
    var Ng = function() {
      d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    }, De = function() {
      d("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
    };
    zT = { readContext: function(e) {
      return Vt(e);
    }, useCallback: function(e, t) {
      return V = "useCallback", tt(), ko(t), _g(e, t);
    }, useContext: function(e) {
      return V = "useContext", tt(), Vt(e);
    }, useEffect: function(e, t) {
      return V = "useEffect", tt(), ko(t), Up(e, t);
    }, useImperativeHandle: function(e, t, a) {
      return V = "useImperativeHandle", tt(), ko(a), Dg(e, t, a);
    }, useInsertionEffect: function(e, t) {
      return V = "useInsertionEffect", tt(), ko(t), wg(e, t);
    }, useLayoutEffect: function(e, t) {
      return V = "useLayoutEffect", tt(), ko(t), bg(e, t);
    }, useMemo: function(e, t) {
      V = "useMemo", tt(), ko(t);
      var a = ue.current;
      ue.current = ka;
      try {
        return kg(e, t);
      } finally {
        ue.current = a;
      }
    }, useReducer: function(e, t, a) {
      V = "useReducer", tt();
      var i = ue.current;
      ue.current = ka;
      try {
        return gg(e, t, a);
      } finally {
        ue.current = i;
      }
    }, useRef: function(e) {
      return V = "useRef", tt(), xg(e);
    }, useState: function(e) {
      V = "useState", tt();
      var t = ue.current;
      ue.current = ka;
      try {
        return Lp(e);
      } finally {
        ue.current = t;
      }
    }, useDebugValue: function(e, t) {
      return V = "useDebugValue", tt(), void 0;
    }, useDeferredValue: function(e) {
      return V = "useDeferredValue", tt(), Og(e);
    }, useTransition: function() {
      return V = "useTransition", tt(), Mg();
    }, useMutableSource: function(e, t, a) {
      return V = "useMutableSource", tt(), void 0;
    }, useSyncExternalStore: function(e, t, a) {
      return V = "useSyncExternalStore", tt(), Cg(e, t, a);
    }, useId: function() {
      return V = "useId", tt(), Lg();
    }, unstable_isNewReconciler: Ft }, UT = { readContext: function(e) {
      return Vt(e);
    }, useCallback: function(e, t) {
      return V = "useCallback", ne(), _g(e, t);
    }, useContext: function(e) {
      return V = "useContext", ne(), Vt(e);
    }, useEffect: function(e, t) {
      return V = "useEffect", ne(), Up(e, t);
    }, useImperativeHandle: function(e, t, a) {
      return V = "useImperativeHandle", ne(), Dg(e, t, a);
    }, useInsertionEffect: function(e, t) {
      return V = "useInsertionEffect", ne(), wg(e, t);
    }, useLayoutEffect: function(e, t) {
      return V = "useLayoutEffect", ne(), bg(e, t);
    }, useMemo: function(e, t) {
      V = "useMemo", ne();
      var a = ue.current;
      ue.current = ka;
      try {
        return kg(e, t);
      } finally {
        ue.current = a;
      }
    }, useReducer: function(e, t, a) {
      V = "useReducer", ne();
      var i = ue.current;
      ue.current = ka;
      try {
        return gg(e, t, a);
      } finally {
        ue.current = i;
      }
    }, useRef: function(e) {
      return V = "useRef", ne(), xg(e);
    }, useState: function(e) {
      V = "useState", ne();
      var t = ue.current;
      ue.current = ka;
      try {
        return Lp(e);
      } finally {
        ue.current = t;
      }
    }, useDebugValue: function(e, t) {
      return V = "useDebugValue", ne(), void 0;
    }, useDeferredValue: function(e) {
      return V = "useDeferredValue", ne(), Og(e);
    }, useTransition: function() {
      return V = "useTransition", ne(), Mg();
    }, useMutableSource: function(e, t, a) {
      return V = "useMutableSource", ne(), void 0;
    }, useSyncExternalStore: function(e, t, a) {
      return V = "useSyncExternalStore", ne(), Cg(e, t, a);
    }, useId: function() {
      return V = "useId", ne(), Lg();
    }, unstable_isNewReconciler: Ft }, AT = { readContext: function(e) {
      return Vt(e);
    }, useCallback: function(e, t) {
      return V = "useCallback", ne(), Pp(e, t);
    }, useContext: function(e) {
      return V = "useContext", ne(), Vt(e);
    }, useEffect: function(e, t) {
      return V = "useEffect", ne(), Pc(e, t);
    }, useImperativeHandle: function(e, t, a) {
      return V = "useImperativeHandle", ne(), Fp(e, t, a);
    }, useInsertionEffect: function(e, t) {
      return V = "useInsertionEffect", ne(), Ap(e, t);
    }, useLayoutEffect: function(e, t) {
      return V = "useLayoutEffect", ne(), jp(e, t);
    }, useMemo: function(e, t) {
      V = "useMemo", ne();
      var a = ue.current;
      ue.current = ta;
      try {
        return $p(e, t);
      } finally {
        ue.current = a;
      }
    }, useReducer: function(e, t, a) {
      V = "useReducer", ne();
      var i = ue.current;
      ue.current = ta;
      try {
        return Sg(e, t, a);
      } finally {
        ue.current = i;
      }
    }, useRef: function(e) {
      return V = "useRef", ne(), Np();
    }, useState: function(e) {
      V = "useState", ne();
      var t = ue.current;
      ue.current = ta;
      try {
        return Rg(e);
      } finally {
        ue.current = t;
      }
    }, useDebugValue: function(e, t) {
      return V = "useDebugValue", ne(), Hp();
    }, useDeferredValue: function(e) {
      return V = "useDeferredValue", ne(), xT(e);
    }, useTransition: function() {
      return V = "useTransition", ne(), DT();
    }, useMutableSource: function(e, t, a) {
      return V = "useMutableSource", ne(), void 0;
    }, useSyncExternalStore: function(e, t, a) {
      return V = "useSyncExternalStore", ne(), Mp(e, t);
    }, useId: function() {
      return V = "useId", ne(), Vp();
    }, unstable_isNewReconciler: Ft }, jT = { readContext: function(e) {
      return Vt(e);
    }, useCallback: function(e, t) {
      return V = "useCallback", ne(), Pp(e, t);
    }, useContext: function(e) {
      return V = "useContext", ne(), Vt(e);
    }, useEffect: function(e, t) {
      return V = "useEffect", ne(), Pc(e, t);
    }, useImperativeHandle: function(e, t, a) {
      return V = "useImperativeHandle", ne(), Fp(e, t, a);
    }, useInsertionEffect: function(e, t) {
      return V = "useInsertionEffect", ne(), Ap(e, t);
    }, useLayoutEffect: function(e, t) {
      return V = "useLayoutEffect", ne(), jp(e, t);
    }, useMemo: function(e, t) {
      V = "useMemo", ne();
      var a = ue.current;
      ue.current = Ip;
      try {
        return $p(e, t);
      } finally {
        ue.current = a;
      }
    }, useReducer: function(e, t, a) {
      V = "useReducer", ne();
      var i = ue.current;
      ue.current = Ip;
      try {
        return Eg(e, t, a);
      } finally {
        ue.current = i;
      }
    }, useRef: function(e) {
      return V = "useRef", ne(), Np();
    }, useState: function(e) {
      V = "useState", ne();
      var t = ue.current;
      ue.current = Ip;
      try {
        return Tg(e);
      } finally {
        ue.current = t;
      }
    }, useDebugValue: function(e, t) {
      return V = "useDebugValue", ne(), Hp();
    }, useDeferredValue: function(e) {
      return V = "useDeferredValue", ne(), wT(e);
    }, useTransition: function() {
      return V = "useTransition", ne(), _T();
    }, useMutableSource: function(e, t, a) {
      return V = "useMutableSource", ne(), void 0;
    }, useSyncExternalStore: function(e, t, a) {
      return V = "useSyncExternalStore", ne(), Mp(e, t);
    }, useId: function() {
      return V = "useId", ne(), Vp();
    }, unstable_isNewReconciler: Ft }, ka = { readContext: function(e) {
      return Ng(), Vt(e);
    }, useCallback: function(e, t) {
      return V = "useCallback", De(), tt(), _g(e, t);
    }, useContext: function(e) {
      return V = "useContext", De(), tt(), Vt(e);
    }, useEffect: function(e, t) {
      return V = "useEffect", De(), tt(), Up(e, t);
    }, useImperativeHandle: function(e, t, a) {
      return V = "useImperativeHandle", De(), tt(), Dg(e, t, a);
    }, useInsertionEffect: function(e, t) {
      return V = "useInsertionEffect", De(), tt(), wg(e, t);
    }, useLayoutEffect: function(e, t) {
      return V = "useLayoutEffect", De(), tt(), bg(e, t);
    }, useMemo: function(e, t) {
      V = "useMemo", De(), tt();
      var a = ue.current;
      ue.current = ka;
      try {
        return kg(e, t);
      } finally {
        ue.current = a;
      }
    }, useReducer: function(e, t, a) {
      V = "useReducer", De(), tt();
      var i = ue.current;
      ue.current = ka;
      try {
        return gg(e, t, a);
      } finally {
        ue.current = i;
      }
    }, useRef: function(e) {
      return V = "useRef", De(), tt(), xg(e);
    }, useState: function(e) {
      V = "useState", De(), tt();
      var t = ue.current;
      ue.current = ka;
      try {
        return Lp(e);
      } finally {
        ue.current = t;
      }
    }, useDebugValue: function(e, t) {
      return V = "useDebugValue", De(), tt(), void 0;
    }, useDeferredValue: function(e) {
      return V = "useDeferredValue", De(), tt(), Og(e);
    }, useTransition: function() {
      return V = "useTransition", De(), tt(), Mg();
    }, useMutableSource: function(e, t, a) {
      return V = "useMutableSource", De(), tt(), void 0;
    }, useSyncExternalStore: function(e, t, a) {
      return V = "useSyncExternalStore", De(), tt(), Cg(e, t, a);
    }, useId: function() {
      return V = "useId", De(), tt(), Lg();
    }, unstable_isNewReconciler: Ft }, ta = { readContext: function(e) {
      return Ng(), Vt(e);
    }, useCallback: function(e, t) {
      return V = "useCallback", De(), ne(), Pp(e, t);
    }, useContext: function(e) {
      return V = "useContext", De(), ne(), Vt(e);
    }, useEffect: function(e, t) {
      return V = "useEffect", De(), ne(), Pc(e, t);
    }, useImperativeHandle: function(e, t, a) {
      return V = "useImperativeHandle", De(), ne(), Fp(e, t, a);
    }, useInsertionEffect: function(e, t) {
      return V = "useInsertionEffect", De(), ne(), Ap(e, t);
    }, useLayoutEffect: function(e, t) {
      return V = "useLayoutEffect", De(), ne(), jp(e, t);
    }, useMemo: function(e, t) {
      V = "useMemo", De(), ne();
      var a = ue.current;
      ue.current = ta;
      try {
        return $p(e, t);
      } finally {
        ue.current = a;
      }
    }, useReducer: function(e, t, a) {
      V = "useReducer", De(), ne();
      var i = ue.current;
      ue.current = ta;
      try {
        return Sg(e, t, a);
      } finally {
        ue.current = i;
      }
    }, useRef: function(e) {
      return V = "useRef", De(), ne(), Np();
    }, useState: function(e) {
      V = "useState", De(), ne();
      var t = ue.current;
      ue.current = ta;
      try {
        return Rg(e);
      } finally {
        ue.current = t;
      }
    }, useDebugValue: function(e, t) {
      return V = "useDebugValue", De(), ne(), Hp();
    }, useDeferredValue: function(e) {
      return V = "useDeferredValue", De(), ne(), xT(e);
    }, useTransition: function() {
      return V = "useTransition", De(), ne(), DT();
    }, useMutableSource: function(e, t, a) {
      return V = "useMutableSource", De(), ne(), void 0;
    }, useSyncExternalStore: function(e, t, a) {
      return V = "useSyncExternalStore", De(), ne(), Mp(e, t);
    }, useId: function() {
      return V = "useId", De(), ne(), Vp();
    }, unstable_isNewReconciler: Ft }, Ip = { readContext: function(e) {
      return Ng(), Vt(e);
    }, useCallback: function(e, t) {
      return V = "useCallback", De(), ne(), Pp(e, t);
    }, useContext: function(e) {
      return V = "useContext", De(), ne(), Vt(e);
    }, useEffect: function(e, t) {
      return V = "useEffect", De(), ne(), Pc(e, t);
    }, useImperativeHandle: function(e, t, a) {
      return V = "useImperativeHandle", De(), ne(), Fp(e, t, a);
    }, useInsertionEffect: function(e, t) {
      return V = "useInsertionEffect", De(), ne(), Ap(e, t);
    }, useLayoutEffect: function(e, t) {
      return V = "useLayoutEffect", De(), ne(), jp(e, t);
    }, useMemo: function(e, t) {
      V = "useMemo", De(), ne();
      var a = ue.current;
      ue.current = ta;
      try {
        return $p(e, t);
      } finally {
        ue.current = a;
      }
    }, useReducer: function(e, t, a) {
      V = "useReducer", De(), ne();
      var i = ue.current;
      ue.current = ta;
      try {
        return Eg(e, t, a);
      } finally {
        ue.current = i;
      }
    }, useRef: function(e) {
      return V = "useRef", De(), ne(), Np();
    }, useState: function(e) {
      V = "useState", De(), ne();
      var t = ue.current;
      ue.current = ta;
      try {
        return Tg(e);
      } finally {
        ue.current = t;
      }
    }, useDebugValue: function(e, t) {
      return V = "useDebugValue", De(), ne(), Hp();
    }, useDeferredValue: function(e) {
      return V = "useDeferredValue", De(), ne(), wT(e);
    }, useTransition: function() {
      return V = "useTransition", De(), ne(), _T();
    }, useMutableSource: function(e, t, a) {
      return V = "useMutableSource", De(), ne(), void 0;
    }, useSyncExternalStore: function(e, t, a) {
      return V = "useSyncExternalStore", De(), ne(), Mp(e, t);
    }, useId: function() {
      return V = "useId", De(), ne(), Vp();
    }, unstable_isNewReconciler: Ft };
  }
  var ll = r.unstable_now, FT = 0, Yp = -1, $c = -1, Qp = -1, zg = !1, Wp = !1;
  function HT() {
    return zg;
  }
  function YU() {
    Wp = !0;
  }
  function QU() {
    zg = !1, Wp = !1;
  }
  function WU() {
    zg = Wp, Wp = !1;
  }
  function PT() {
    return FT;
  }
  function $T() {
    FT = ll();
  }
  function Ug(e) {
    $c = ll(), e.actualStartTime < 0 && (e.actualStartTime = ll());
  }
  function VT(e) {
    $c = -1;
  }
  function Gp(e, t) {
    if ($c >= 0) {
      var a = ll() - $c;
      e.actualDuration += a, t && (e.selfBaseDuration = a), $c = -1;
    }
  }
  function Oa(e) {
    if (Yp >= 0) {
      var t = ll() - Yp;
      Yp = -1;
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case L:
            var i = a.stateNode;
            i.effectDuration += t;
            return;
          case B:
            var u = a.stateNode;
            u.effectDuration += t;
            return;
        }
        a = a.return;
      }
    }
  }
  function Ag(e) {
    if (Qp >= 0) {
      var t = ll() - Qp;
      Qp = -1;
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case L:
            var i = a.stateNode;
            i !== null && (i.passiveEffectDuration += t);
            return;
          case B:
            var u = a.stateNode;
            u !== null && (u.passiveEffectDuration += t);
            return;
        }
        a = a.return;
      }
    }
  }
  function Ma() {
    Yp = ll();
  }
  function jg() {
    Qp = ll();
  }
  function Fg(e) {
    for (var t = e.child; t; )
      e.actualDuration += t.actualDuration, t = t.sibling;
  }
  function vu(e, t) {
    return { value: e, source: t, stack: ks(t), digest: null };
  }
  function Hg(e, t, a) {
    return { value: e, source: null, stack: a != null ? a : null, digest: t != null ? t : null };
  }
  function GU(e, t) {
    return !0;
  }
  function Pg(e, t) {
    try {
      var a = GU(e, t);
      if (a === !1)
        return;
      var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
      if (i != null && i._suppressLogging) {
        if (e.tag === x)
          return;
        console.error(i);
      }
      var v = u ? Oe(u) : null, h = v ? "The above error occurred in the <" + v + "> component:" : "The above error occurred in one of your React components:", y;
      if (e.tag === L)
        y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
      else {
        var g = Oe(e) || "Anonymous";
        y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
      }
      var D = h + `
` + f + `

` + ("" + y);
      console.error(D);
    } catch (w) {
      setTimeout(function() {
        throw w;
      });
    }
  }
  var XU = typeof WeakMap == "function" ? WeakMap : Map;
  function BT(e, t, a) {
    var i = hi(mt, a);
    i.tag = Py, i.payload = { element: null };
    var u = t.value;
    return i.callback = function() {
      $2(u), Pg(e, t);
    }, i;
  }
  function $g(e, t, a) {
    var i = hi(mt, a);
    i.tag = Py;
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var s = t.value;
      i.payload = function() {
        return u(s);
      }, i.callback = function() {
        ew(e), Pg(e, t);
      };
    }
    var f = e.stateNode;
    return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
      ew(e), Pg(e, t), typeof u != "function" && H2(this);
      var h = t.value, y = t.stack;
      this.componentDidCatch(h, { componentStack: y !== null ? y : "" }), typeof u != "function" && (dr(e.lanes, be) || d("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Oe(e) || "Unknown"));
    }), i;
  }
  function IT(e, t, a) {
    var i = e.pingCache, u;
    if (i === null ? (i = e.pingCache = new XU(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
      u.add(a);
      var s = V2.bind(null, e, t, a);
      Gr && rf(e, a), t.then(s, s);
    }
  }
  function KU(e, t, a, i) {
    var u = e.updateQueue;
    if (u === null) {
      var s = /* @__PURE__ */ new Set();
      s.add(a), e.updateQueue = s;
    } else
      u.add(a);
  }
  function qU(e, t) {
    var a = e.tag;
    if ((e.mode & Pe) === Ee && (a === E || a === b || a === K)) {
      var i = e.alternate;
      i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
    }
  }
  function YT(e) {
    var t = e;
    do {
      if (t.tag === I && UU(t))
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function QT(e, t, a, i, u) {
    if ((e.mode & Pe) === Ee) {
      if (e === t)
        e.flags |= Fn;
      else {
        if (e.flags |= Ze, a.flags |= um, a.flags &= ~(MO | $s), a.tag === x) {
          var s = a.alternate;
          if (s === null)
            a.tag = Qe;
          else {
            var f = hi(mt, be);
            f.tag = gp, nl(a, f, be);
          }
        }
        a.lanes = Le(a.lanes, be);
      }
      return e;
    }
    return e.flags |= Fn, e.lanes = u, e;
  }
  function ZU(e, t, a, i, u) {
    if (a.flags |= $s, Gr && rf(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
      var s = i;
      qU(a), dn() && a.mode & Pe && AR();
      var f = YT(t);
      if (f !== null) {
        f.flags &= ~ri, QT(f, t, a, e, u), f.mode & Pe && IT(e, s, u), KU(f, e, s);
        return;
      } else {
        if (!CM(u)) {
          IT(e, s, u), ES();
          return;
        }
        var v = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
        i = v;
      }
    } else if (dn() && a.mode & Pe) {
      AR();
      var h = YT(t);
      if (h !== null) {
        (h.flags & Fn) === Se && (h.flags |= ri), QT(h, t, a, e, u), Ny(vu(i, a));
        return;
      }
    }
    i = vu(i, a), M2(i);
    var y = t;
    do {
      switch (y.tag) {
        case L: {
          var g = i;
          y.flags |= Fn;
          var D = Xs(u);
          y.lanes = Le(y.lanes, D);
          var w = BT(y, g, D);
          By(y, w);
          return;
        }
        case x:
          var z = i, U = y.type, P = y.stateNode;
          if ((y.flags & Ze) === Se && (typeof U.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && !Yx(P))) {
            y.flags |= Fn;
            var oe = Xs(u);
            y.lanes = Le(y.lanes, oe);
            var ye = $g(y, z, oe);
            By(y, ye);
            return;
          }
          break;
      }
      y = y.return;
    } while (y !== null);
  }
  function JU() {
    return null;
  }
  var Vc = l.ReactCurrentOwner, na = !1, Vg, Bc, Bg, Ig, Yg, hu, Qg, Xp;
  Vg = {}, Bc = {}, Bg = {}, Ig = {}, Yg = {}, hu = !1, Qg = {}, Xp = {};
  function Hn(e, t, a, i) {
    e === null ? t.child = cT(t, null, a, i) : t.child = xo(t, e.child, a, i);
  }
  function eA(e, t, a, i) {
    t.child = xo(t, e.child, null, i), t.child = xo(t, null, a, i);
  }
  function WT(e, t, a, i, u) {
    if (t.type !== t.elementType) {
      var s = a.propTypes;
      s && Kr(
        s,
        i,
        // Resolved props
        "prop",
        Ke(a)
      );
    }
    var f = a.render, v = t.ref, h, y;
    To(t, u), Bs(t);
    {
      if (Vc.current = t, cr(!0), h = Oo(e, t, f, i, v, u), y = Mo(), t.mode & $t) {
        an(!0);
        try {
          h = Oo(e, t, f, i, v, u), y = Mo();
        } finally {
          an(!1);
        }
      }
      cr(!1);
    }
    return no(), e !== null && !na ? (hT(e, t, u), mi(e, t, u)) : (dn() && y && Dy(t), t.flags |= Ju, Hn(e, t, h, u), t.child);
  }
  function GT(e, t, a, i, u) {
    if (e === null) {
      var s = a.type;
      if (ij(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
      a.defaultProps === void 0) {
        var f = s;
        return f = Ho(s), t.tag = K, t.type = f, Xg(t, s), XT(e, t, f, i, u);
      }
      {
        var v = s.propTypes;
        v && Kr(
          v,
          i,
          // Resolved props
          "prop",
          Ke(s)
        );
      }
      var h = MS(a.type, null, i, t, t.mode, u);
      return h.ref = t.ref, h.return = t, t.child = h, h;
    }
    {
      var y = a.type, g = y.propTypes;
      g && Kr(
        g,
        i,
        // Resolved props
        "prop",
        Ke(y)
      );
    }
    var D = e.child, w = tS(e, u);
    if (!w) {
      var z = D.memoizedProps, U = a.compare;
      if (U = U !== null ? U : cc, U(z, i) && e.ref === t.ref)
        return mi(e, t, u);
    }
    t.flags |= Ju;
    var P = Eu(D, i);
    return P.ref = t.ref, P.return = t, t.child = P, P;
  }
  function XT(e, t, a, i, u) {
    if (t.type !== t.elementType) {
      var s = t.elementType;
      if (s.$$typeof === ge) {
        var f = s, v = f._payload, h = f._init;
        try {
          s = h(v);
        } catch (D) {
          s = null;
        }
        var y = s && s.propTypes;
        y && Kr(
          y,
          i,
          // Resolved (SimpleMemoComponent has no defaultProps)
          "prop",
          Ke(s)
        );
      }
    }
    if (e !== null) {
      var g = e.memoizedProps;
      if (cc(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
      t.type === e.type)
        if (na = !1, t.pendingProps = i = g, tS(e, u))
          (e.flags & um) !== Se && (na = !0);
        else
          return t.lanes = e.lanes, mi(e, t, u);
    }
    return Wg(e, t, a, i, u);
  }
  function KT(e, t, a) {
    var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden" || N)
      if ((t.mode & Pe) === Ee) {
        var f = { baseLanes: Q, cachePool: null, transitions: null };
        t.memoizedState = f, ov(t, a);
      } else if (dr(a, fr)) {
        var D = { baseLanes: Q, cachePool: null, transitions: null };
        t.memoizedState = D;
        var w = s !== null ? s.baseLanes : a;
        ov(t, w);
      } else {
        var v = null, h;
        if (s !== null) {
          var y = s.baseLanes;
          h = Le(y, a);
        } else
          h = a;
        t.lanes = t.childLanes = fr;
        var g = { baseLanes: h, cachePool: v, transitions: null };
        return t.memoizedState = g, t.updateQueue = null, ov(t, h), null;
      }
    else {
      var z;
      s !== null ? (z = Le(s.baseLanes, a), t.memoizedState = null) : z = a, ov(t, z);
    }
    return Hn(e, t, u, a), t.child;
  }
  function tA(e, t, a) {
    var i = t.pendingProps;
    return Hn(e, t, i, a), t.child;
  }
  function nA(e, t, a) {
    var i = t.pendingProps.children;
    return Hn(e, t, i, a), t.child;
  }
  function rA(e, t, a) {
    {
      t.flags |= Ye;
      {
        var i = t.stateNode;
        i.effectDuration = 0, i.passiveEffectDuration = 0;
      }
    }
    var u = t.pendingProps, s = u.children;
    return Hn(e, t, s, a), t.child;
  }
  function qT(e, t) {
    var a = t.ref;
    (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Ii, t.flags |= om);
  }
  function Wg(e, t, a, i, u) {
    if (t.type !== t.elementType) {
      var s = a.propTypes;
      s && Kr(
        s,
        i,
        // Resolved props
        "prop",
        Ke(a)
      );
    }
    var f;
    {
      var v = yo(t, a, !0);
      f = go(t, v);
    }
    var h, y;
    To(t, u), Bs(t);
    {
      if (Vc.current = t, cr(!0), h = Oo(e, t, a, i, f, u), y = Mo(), t.mode & $t) {
        an(!0);
        try {
          h = Oo(e, t, a, i, f, u), y = Mo();
        } finally {
          an(!1);
        }
      }
      cr(!1);
    }
    return no(), e !== null && !na ? (hT(e, t, u), mi(e, t, u)) : (dn() && y && Dy(t), t.flags |= Ju, Hn(e, t, h, u), t.child);
  }
  function ZT(e, t, a, i, u) {
    {
      switch (Ej(t)) {
        case !1: {
          var s = t.stateNode, f = t.type, v = new f(t.memoizedProps, s.context), h = v.state;
          s.updater.enqueueSetState(s, h, null);
          break;
        }
        case !0: {
          t.flags |= Ze, t.flags |= Fn;
          var y = new Error("Simulated error coming from DevTools"), g = Xs(u);
          t.lanes = Le(t.lanes, g);
          var D = $g(t, vu(y, t), g);
          By(t, D);
          break;
        }
      }
      if (t.type !== t.elementType) {
        var w = a.propTypes;
        w && Kr(
          w,
          i,
          // Resolved props
          "prop",
          Ke(a)
        );
      }
    }
    var z;
    ba(a) ? (z = !0, up(t)) : z = !1, To(t, u);
    var U = t.stateNode, P;
    U === null ? (qp(e, t), iT(t, a, i), tg(t, a, i, u), P = !0) : e === null ? P = kU(t, a, i, u) : P = OU(e, t, a, i, u);
    var oe = Gg(e, t, a, P, z, u);
    {
      var ye = t.stateNode;
      P && ye.props !== i && (hu || d("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Oe(t) || "a component"), hu = !0);
    }
    return oe;
  }
  function Gg(e, t, a, i, u, s) {
    qT(e, t);
    var f = (t.flags & Ze) !== Se;
    if (!i && !f)
      return u && LR(t, a, !1), mi(e, t, s);
    var v = t.stateNode;
    Vc.current = t;
    var h;
    if (f && typeof a.getDerivedStateFromError != "function")
      h = null, VT();
    else {
      Bs(t);
      {
        if (cr(!0), h = v.render(), t.mode & $t) {
          an(!0);
          try {
            v.render();
          } finally {
            an(!1);
          }
        }
        cr(!1);
      }
      no();
    }
    return t.flags |= Ju, e !== null && f ? eA(e, t, h, s) : Hn(e, t, h, s), t.memoizedState = v.state, u && LR(t, a, !0), t.child;
  }
  function JT(e) {
    var t = e.stateNode;
    t.pendingContext ? OR(e, t.pendingContext, t.pendingContext !== t.context) : t.context && OR(e, t.context, !1), ug(e, t.containerInfo);
  }
  function aA(e, t, a) {
    if (JT(t), e === null)
      throw new Error("Should have a current fiber. This is a bug in React.");
    var i = t.pendingProps, u = t.memoizedState, s = u.element;
    qR(e, t), Rp(t, i, null, a);
    var f = t.memoizedState;
    t.stateNode;
    var v = f.element;
    if (u.isDehydrated) {
      var h = { element: v, isDehydrated: !1, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, y = t.updateQueue;
      if (y.baseState = h, t.memoizedState = h, t.flags & ri) {
        var g = vu(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
        return ex(e, t, v, a, g);
      } else if (v !== s) {
        var D = vu(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
        return ex(e, t, v, a, D);
      } else {
        oU(t);
        var w = cT(t, null, v, a);
        t.child = w;
        for (var z = w; z; )
          z.flags = z.flags & ~Pt | ai, z = z.sibling;
      }
    } else {
      if (Co(), v === s)
        return mi(e, t, a);
      Hn(e, t, v, a);
    }
    return t.child;
  }
  function ex(e, t, a, i, u) {
    return Co(), Ny(u), t.flags |= ri, Hn(e, t, a, i), t.child;
  }
  function iA(e, t, a) {
    dT(t), e === null && Ly(t);
    var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, v = py(i, u);
    return v ? f = null : s !== null && py(i, s) && (t.flags |= Ps), qT(e, t), Hn(e, t, f, a), t.child;
  }
  function lA(e, t) {
    return e === null && Ly(t), null;
  }
  function uA(e, t, a, i) {
    qp(e, t);
    var u = t.pendingProps, s = a, f = s._payload, v = s._init, h = v(f);
    t.type = h;
    var y = t.tag = lj(h), g = Jr(h, u), D;
    switch (y) {
      case E:
        return Xg(t, h), t.type = h = Ho(h), D = Wg(null, t, h, g, i), D;
      case x:
        return t.type = h = wS(h), D = ZT(null, t, h, g, i), D;
      case b:
        return t.type = h = bS(h), D = WT(null, t, h, g, i), D;
      case te: {
        if (t.type !== t.elementType) {
          var w = h.propTypes;
          w && Kr(
            w,
            g,
            // Resolved for outer only
            "prop",
            Ke(h)
          );
        }
        return D = GT(
          null,
          t,
          h,
          Jr(h.type, g),
          // The inner type can have defaults too
          i
        ), D;
      }
    }
    var z = "";
    throw h !== null && typeof h == "object" && h.$$typeof === ge && (z = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + h + ". " + ("Lazy element type must resolve to a class or function." + z));
  }
  function oA(e, t, a, i, u) {
    qp(e, t), t.tag = x;
    var s;
    return ba(a) ? (s = !0, up(t)) : s = !1, To(t, u), iT(t, a, i), tg(t, a, i, u), Gg(null, t, a, !0, s, u);
  }
  function sA(e, t, a, i) {
    qp(e, t);
    var u = t.pendingProps, s;
    {
      var f = yo(t, a, !1);
      s = go(t, f);
    }
    To(t, i);
    var v, h;
    Bs(t);
    {
      if (a.prototype && typeof a.prototype.render == "function") {
        var y = Ke(a) || "Unknown";
        Vg[y] || (d("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), Vg[y] = !0);
      }
      t.mode & $t && Zr.recordLegacyContextWarning(t, null), cr(!0), Vc.current = t, v = Oo(null, t, a, u, s, i), h = Mo(), cr(!1);
    }
    if (no(), t.flags |= Ju, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) {
      var g = Ke(a) || "Unknown";
      Bc[g] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Bc[g] = !0);
    }
    if (
      // Run these checks in production only if the flag is off.
      // Eventually we'll delete this branch altogether.
      typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0
    ) {
      {
        var D = Ke(a) || "Unknown";
        Bc[D] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), Bc[D] = !0);
      }
      t.tag = x, t.memoizedState = null, t.updateQueue = null;
      var w = !1;
      return ba(a) ? (w = !0, up(t)) : w = !1, t.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, Vy(t), aT(t, v), tg(t, a, u, i), Gg(null, t, a, !0, w, i);
    } else {
      if (t.tag = E, t.mode & $t) {
        an(!0);
        try {
          v = Oo(null, t, a, u, s, i), h = Mo();
        } finally {
          an(!1);
        }
      }
      return dn() && h && Dy(t), Hn(null, t, v, i), Xg(t, a), t.child;
    }
  }
  function Xg(e, t) {
    {
      if (t && t.childContextTypes && d("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
        var a = "", i = Pi();
        i && (a += `

Check the render method of \`` + i + "`.");
        var u = i || "", s = e._debugSource;
        s && (u = s.fileName + ":" + s.lineNumber), Yg[u] || (Yg[u] = !0, d("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
      }
      if (typeof t.getDerivedStateFromProps == "function") {
        var f = Ke(t) || "Unknown";
        Ig[f] || (d("%s: Function components do not support getDerivedStateFromProps.", f), Ig[f] = !0);
      }
      if (typeof t.contextType == "object" && t.contextType !== null) {
        var v = Ke(t) || "Unknown";
        Bg[v] || (d("%s: Function components do not support contextType.", v), Bg[v] = !0);
      }
    }
  }
  var Kg = { dehydrated: null, treeContext: null, retryLane: ln };
  function qg(e) {
    return { baseLanes: e, cachePool: JU(), transitions: null };
  }
  function cA(e, t) {
    var a = null;
    return { baseLanes: Le(e.baseLanes, t), cachePool: a, transitions: e.transitions };
  }
  function fA(e, t, a, i) {
    if (t !== null) {
      var u = t.memoizedState;
      if (u === null)
        return !1;
    }
    return cg(e, zc);
  }
  function dA(e, t) {
    return Od(e.childLanes, t);
  }
  function tx(e, t, a) {
    var i = t.pendingProps;
    Cj(t) && (t.flags |= Ze);
    var u = ea.current, s = !1, f = (t.flags & Ze) !== Se;
    if (f || fA(u, e) ? (s = !0, t.flags &= ~Ze) : (e === null || e.memoizedState !== null) && (u = zU(u, vT)), u = bo(u), al(t, u), e === null) {
      Ly(t);
      var v = t.memoizedState;
      if (v !== null) {
        var h = v.dehydrated;
        if (h !== null)
          return yA(t, h);
      }
      var y = i.children, g = i.fallback;
      if (s) {
        var D = pA(t, y, g, a), w = t.child;
        return w.memoizedState = qg(a), t.memoizedState = Kg, D;
      } else
        return Zg(t, y);
    } else {
      var z = e.memoizedState;
      if (z !== null) {
        var U = z.dehydrated;
        if (U !== null)
          return gA(e, t, f, i, U, z, a);
      }
      if (s) {
        var P = i.fallback, oe = i.children, ye = hA(e, t, oe, P, a), he = t.child, Ve = e.child.memoizedState;
        return he.memoizedState = Ve === null ? qg(a) : cA(Ve, a), he.childLanes = dA(e, a), t.memoizedState = Kg, ye;
      } else {
        var ze = i.children, k = vA(e, t, ze, a);
        return t.memoizedState = null, k;
      }
    }
  }
  function Zg(e, t, a) {
    var i = e.mode, u = { mode: "visible", children: t }, s = Jg(u, i);
    return s.return = e, e.child = s, s;
  }
  function pA(e, t, a, i) {
    var u = e.mode, s = e.child, f = { mode: "hidden", children: t }, v, h;
    return (u & Pe) === Ee && s !== null ? (v = s, v.childLanes = Q, v.pendingProps = f, e.mode & it && (v.actualDuration = 0, v.actualStartTime = -1, v.selfBaseDuration = 0, v.treeBaseDuration = 0), h = dl(a, u, i, null)) : (v = Jg(f, u), h = dl(a, u, i, null)), v.return = e, h.return = e, v.sibling = h, e.child = v, h;
  }
  function Jg(e, t, a) {
    return nw(e, t, Q, null);
  }
  function nx(e, t) {
    return Eu(e, t);
  }
  function vA(e, t, a, i) {
    var u = e.child, s = u.sibling, f = nx(u, { mode: "visible", children: a });
    if ((t.mode & Pe) === Ee && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
      var v = t.deletions;
      v === null ? (t.deletions = [s], t.flags |= Wl) : v.push(s);
    }
    return t.child = f, f;
  }
  function hA(e, t, a, i, u) {
    var s = t.mode, f = e.child, v = f.sibling, h = { mode: "hidden", children: a }, y;
    if (
      // In legacy mode, we commit the primary tree as if it successfully
      // completed, even though it's in an inconsistent state.
      (s & Pe) === Ee && // Make sure we're on the second pass, i.e. the primary child fragment was
      // already cloned. In legacy mode, the only case where this isn't true is
      // when DevTools forces us to display a fallback; we skip the first render
      // pass entirely and go straight to rendering the fallback. (In Concurrent
      // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
      // only codepath.)
      t.child !== f
    ) {
      var g = t.child;
      y = g, y.childLanes = Q, y.pendingProps = h, t.mode & it && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
    } else
      y = nx(f, h), y.subtreeFlags = f.subtreeFlags & li;
    var D;
    return v !== null ? D = Eu(v, i) : (D = dl(i, s, u, null), D.flags |= Pt), D.return = t, y.return = t, y.sibling = D, t.child = y, D;
  }
  function Kp(e, t, a, i) {
    i !== null && Ny(i), xo(t, e.child, null, a);
    var u = t.pendingProps, s = u.children, f = Zg(t, s);
    return f.flags |= Pt, t.memoizedState = null, f;
  }
  function mA(e, t, a, i, u) {
    var s = t.mode, f = { mode: "visible", children: a }, v = Jg(f, s), h = dl(i, s, u, null);
    return h.flags |= Pt, v.return = t, h.return = t, v.sibling = h, t.child = v, (t.mode & Pe) !== Ee && xo(t, e.child, null, u), h;
  }
  function yA(e, t, a) {
    return (e.mode & Pe) === Ee ? (d("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = be) : yy(t) ? e.lanes = Jl : e.lanes = fr, null;
  }
  function gA(e, t, a, i, u, s, f) {
    if (a)
      if (t.flags & ri) {
        t.flags &= ~ri;
        var k = Hg(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
        return Kp(e, t, f, k);
      } else {
        if (t.memoizedState !== null)
          return t.child = e.child, t.flags |= Ze, null;
        var $ = i.children, O = i.fallback, G = mA(e, t, $, O, f), se = t.child;
        return se.memoizedState = qg(f), t.memoizedState = Kg, G;
      }
    else {
      if (lU(), (t.mode & Pe) === Ee)
        return Kp(
          e,
          t,
          f,
          // TODO: When we delete legacy mode, we should make this error argument
          // required — every concurrent mode path that causes hydration to
          // de-opt to client rendering should have an error message.
          null
        );
      if (yy(u)) {
        var v, h, y;
        {
          var g = Tz(u);
          v = g.digest, h = g.message, y = g.stack;
        }
        var D;
        h ? D = new Error(h) : D = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
        var w = Hg(D, v, y);
        return Kp(e, t, f, w);
      }
      var z = dr(f, e.childLanes);
      if (na || z) {
        var U = uv();
        if (U !== null) {
          var P = kM(U, f);
          if (P !== ln && P !== s.retryLane) {
            s.retryLane = P;
            var oe = mt;
            er(e, P), Zt(U, e, P, oe);
          }
        }
        ES();
        var ye = Hg(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
        return Kp(e, t, f, ye);
      } else if (xR(u)) {
        t.flags |= Ze, t.child = e.child;
        var he = B2.bind(null, e);
        return xz(u, he), null;
      } else {
        sU(t, u, s.treeContext);
        var Ve = i.children, ze = Zg(t, Ve);
        return ze.flags |= ai, ze;
      }
    }
  }
  function rx(e, t, a) {
    e.lanes = Le(e.lanes, t);
    var i = e.alternate;
    i !== null && (i.lanes = Le(i.lanes, t)), Fy(e.return, t, a);
  }
  function SA(e, t, a) {
    for (var i = t; i !== null; ) {
      if (i.tag === I) {
        var u = i.memoizedState;
        u !== null && rx(i, a, e);
      } else if (i.tag === nt)
        rx(i, a, e);
      else if (i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
      }
      if (i === e)
        return;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === e)
          return;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
  }
  function EA(e) {
    for (var t = e, a = null; t !== null; ) {
      var i = t.alternate;
      i !== null && kp(i) === null && (a = t), t = t.sibling;
    }
    return a;
  }
  function CA(e) {
    if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Qg[e])
      if (Qg[e] = !0, typeof e == "string")
        switch (e.toLowerCase()) {
          case "together":
          case "forwards":
          case "backwards": {
            d('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
            break;
          }
          case "forward":
          case "backward": {
            d('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
            break;
          }
          default:
            d('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
            break;
        }
      else
        d('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
  }
  function RA(e, t) {
    e !== void 0 && !Xp[e] && (e !== "collapsed" && e !== "hidden" ? (Xp[e] = !0, d('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Xp[e] = !0, d('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
  }
  function ax(e, t) {
    {
      var a = qe(e), i = !a && typeof qa(e) == "function";
      if (a || i) {
        var u = a ? "array" : "iterable";
        return d("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
      }
    }
    return !0;
  }
  function TA(e, t) {
    if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
      if (qe(e)) {
        for (var a = 0; a < e.length; a++)
          if (!ax(e[a], a))
            return;
      } else {
        var i = qa(e);
        if (typeof i == "function") {
          var u = i.call(e);
          if (u)
            for (var s = u.next(), f = 0; !s.done; s = u.next()) {
              if (!ax(s.value, f))
                return;
              f++;
            }
        } else
          d('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
      }
  }
  function eS(e, t, a, i, u) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: a, tailMode: u } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
  }
  function ix(e, t, a) {
    var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
    CA(u), RA(s, u), TA(f, u), Hn(e, t, f, a);
    var v = ea.current, h = cg(v, zc);
    if (h)
      v = fg(v, zc), t.flags |= Ze;
    else {
      var y = e !== null && (e.flags & Ze) !== Se;
      y && SA(t, t.child, a), v = bo(v);
    }
    if (al(t, v), (t.mode & Pe) === Ee)
      t.memoizedState = null;
    else
      switch (u) {
        case "forwards": {
          var g = EA(t.child), D;
          g === null ? (D = t.child, t.child = null) : (D = g.sibling, g.sibling = null), eS(
            t,
            !1,
            // isBackwards
            D,
            g,
            s
          );
          break;
        }
        case "backwards": {
          var w = null, z = t.child;
          for (t.child = null; z !== null; ) {
            var U = z.alternate;
            if (U !== null && kp(U) === null) {
              t.child = z;
              break;
            }
            var P = z.sibling;
            z.sibling = w, w = z, z = P;
          }
          eS(
            t,
            !0,
            // isBackwards
            w,
            null,
            // last
            s
          );
          break;
        }
        case "together": {
          eS(
            t,
            !1,
            // isBackwards
            null,
            // tail
            null,
            // last
            void 0
          );
          break;
        }
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function xA(e, t, a) {
    ug(t, t.stateNode.containerInfo);
    var i = t.pendingProps;
    return e === null ? t.child = xo(t, null, i, a) : Hn(e, t, i, a), t.child;
  }
  var lx = !1;
  function wA(e, t, a) {
    var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, v = s.value;
    {
      "value" in s || lx || (lx = !0, d("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
      var h = t.type.propTypes;
      h && Kr(h, s, "prop", "Context.Provider");
    }
    if (WR(t, u, v), f !== null) {
      var y = f.value;
      if (hr(y, v)) {
        if (f.children === s.children && !ip())
          return mi(e, t, a);
      } else
        SU(t, u, a);
    }
    var g = s.children;
    return Hn(e, t, g, a), t.child;
  }
  var ux = !1;
  function bA(e, t, a) {
    var i = t.type;
    i._context === void 0 ? i !== i.Consumer && (ux || (ux = !0, d("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
    var u = t.pendingProps, s = u.children;
    typeof s != "function" && d("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), To(t, a);
    var f = Vt(i);
    Bs(t);
    var v;
    return Vc.current = t, cr(!0), v = s(f), cr(!1), no(), t.flags |= Ju, Hn(e, t, v, a), t.child;
  }
  function Ic() {
    na = !0;
  }
  function qp(e, t) {
    (t.mode & Pe) === Ee && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Pt);
  }
  function mi(e, t, a) {
    return e !== null && (t.dependencies = e.dependencies), VT(), nf(t.lanes), dr(a, t.childLanes) ? (MU(e, t), t.child) : null;
  }
  function DA(e, t, a) {
    {
      var i = t.return;
      if (i === null)
        throw new Error("Cannot swap the root fiber.");
      if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
        i.child = a;
      else {
        var u = i.child;
        if (u === null)
          throw new Error("Expected parent to have a child.");
        for (; u.sibling !== t; )
          if (u = u.sibling, u === null)
            throw new Error("Expected to find the previous sibling.");
        u.sibling = a;
      }
      var s = i.deletions;
      return s === null ? (i.deletions = [e], i.flags |= Wl) : s.push(e), a.flags |= Pt, a;
    }
  }
  function tS(e, t) {
    var a = e.lanes;
    return !!dr(a, t);
  }
  function _A(e, t, a) {
    switch (t.tag) {
      case L:
        JT(t), t.stateNode, Co();
        break;
      case F:
        dT(t);
        break;
      case x: {
        var i = t.type;
        ba(i) && up(t);
        break;
      }
      case M:
        ug(t, t.stateNode.containerInfo);
        break;
      case R: {
        var u = t.memoizedProps.value, s = t.type._context;
        WR(t, s, u);
        break;
      }
      case B:
        {
          var f = dr(a, t.childLanes);
          f && (t.flags |= Ye);
          {
            var v = t.stateNode;
            v.effectDuration = 0, v.passiveEffectDuration = 0;
          }
        }
        break;
      case I: {
        var h = t.memoizedState;
        if (h !== null) {
          if (h.dehydrated !== null)
            return al(t, bo(ea.current)), t.flags |= Ze, null;
          var y = t.child, g = y.childLanes;
          if (dr(a, g))
            return tx(e, t, a);
          al(t, bo(ea.current));
          var D = mi(e, t, a);
          return D !== null ? D.sibling : null;
        } else
          al(t, bo(ea.current));
        break;
      }
      case nt: {
        var w = (e.flags & Ze) !== Se, z = dr(a, t.childLanes);
        if (w) {
          if (z)
            return ix(e, t, a);
          t.flags |= Ze;
        }
        var U = t.memoizedState;
        if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), al(t, ea.current), z)
          break;
        return null;
      }
      case Te:
      case Ue:
        return t.lanes = Q, KT(e, t, a);
    }
    return mi(e, t, a);
  }
  function ox(e, t, a) {
    if (t._debugNeedsRemount && e !== null)
      return DA(e, t, MS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
    if (e !== null) {
      var i = e.memoizedProps, u = t.pendingProps;
      if (i !== u || ip() || // Force a re-render if the implementation changed due to hot reload:
      t.type !== e.type)
        na = !0;
      else {
        var s = tS(e, a);
        if (!s && // If this is the second pass of an error or suspense boundary, there
        // may not be work scheduled on `current`, so we check for this flag.
        (t.flags & Ze) === Se)
          return na = !1, _A(e, t, a);
        (e.flags & um) !== Se ? na = !0 : na = !1;
      }
    } else if (na = !1, dn() && eU(t)) {
      var f = t.index, v = tU();
      UR(t, v, f);
    }
    switch (t.lanes = Q, t.tag) {
      case j:
        return sA(e, t, t.type, a);
      case pe: {
        var h = t.elementType;
        return uA(e, t, h, a);
      }
      case E: {
        var y = t.type, g = t.pendingProps, D = t.elementType === y ? g : Jr(y, g);
        return Wg(e, t, y, D, a);
      }
      case x: {
        var w = t.type, z = t.pendingProps, U = t.elementType === w ? z : Jr(w, z);
        return ZT(e, t, w, U, a);
      }
      case L:
        return aA(e, t, a);
      case F:
        return iA(e, t, a);
      case Y:
        return lA(e, t);
      case I:
        return tx(e, t, a);
      case M:
        return xA(e, t, a);
      case b: {
        var P = t.type, oe = t.pendingProps, ye = t.elementType === P ? oe : Jr(P, oe);
        return WT(e, t, P, ye, a);
      }
      case re:
        return tA(e, t, a);
      case Ne:
        return nA(e, t, a);
      case B:
        return rA(e, t, a);
      case R:
        return wA(e, t, a);
      case _:
        return bA(e, t, a);
      case te: {
        var he = t.type, Ve = t.pendingProps, ze = Jr(he, Ve);
        if (t.type !== t.elementType) {
          var k = he.propTypes;
          k && Kr(
            k,
            ze,
            // Resolved for outer only
            "prop",
            Ke(he)
          );
        }
        return ze = Jr(he.type, ze), GT(e, t, he, ze, a);
      }
      case K:
        return XT(e, t, t.type, t.pendingProps, a);
      case Qe: {
        var $ = t.type, O = t.pendingProps, G = t.elementType === $ ? O : Jr($, O);
        return oA(e, t, $, G, a);
      }
      case nt:
        return ix(e, t, a);
      case Z:
        break;
      case Te:
        return KT(e, t, a);
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function Lo(e) {
    e.flags |= Ye;
  }
  function sx(e) {
    e.flags |= Ii, e.flags |= om;
  }
  var cx, nS, fx, dx;
  cx = function(e, t, a, i) {
    for (var u = t.child; u !== null; ) {
      if (u.tag === F || u.tag === Y)
        qN(e, u.stateNode);
      else if (u.tag !== M) {
        if (u.child !== null) {
          u.child.return = u, u = u.child;
          continue;
        }
      }
      if (u === t)
        return;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === t)
          return;
        u = u.return;
      }
      u.sibling.return = u.return, u = u.sibling;
    }
  }, nS = function(e, t) {
  }, fx = function(e, t, a, i, u) {
    var s = e.memoizedProps;
    if (s !== i) {
      var f = t.stateNode, v = og(), h = JN(f, a, s, i, u, v);
      t.updateQueue = h, h && Lo(t);
    }
  }, dx = function(e, t, a, i) {
    a !== i && Lo(t);
  };
  function Yc(e, t) {
    if (!dn())
      switch (e.tailMode) {
        case "hidden": {
          for (var a = e.tail, i = null; a !== null; )
            a.alternate !== null && (i = a), a = a.sibling;
          i === null ? e.tail = null : i.sibling = null;
          break;
        }
        case "collapsed": {
          for (var u = e.tail, s = null; u !== null; )
            u.alternate !== null && (s = u), u = u.sibling;
          s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
          break;
        }
      }
  }
  function vn(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = Q, i = Se;
    if (t) {
      if ((e.mode & it) !== Ee) {
        for (var h = e.selfBaseDuration, y = e.child; y !== null; )
          a = Le(a, Le(y.lanes, y.childLanes)), i |= y.subtreeFlags & li, i |= y.flags & li, h += y.treeBaseDuration, y = y.sibling;
        e.treeBaseDuration = h;
      } else
        for (var g = e.child; g !== null; )
          a = Le(a, Le(g.lanes, g.childLanes)), i |= g.subtreeFlags & li, i |= g.flags & li, g.return = e, g = g.sibling;
      e.subtreeFlags |= i;
    } else {
      if ((e.mode & it) !== Ee) {
        for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
          a = Le(a, Le(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
        e.actualDuration = u, e.treeBaseDuration = s;
      } else
        for (var v = e.child; v !== null; )
          a = Le(a, Le(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, v.return = e, v = v.sibling;
      e.subtreeFlags |= i;
    }
    return e.childLanes = a, t;
  }
  function kA(e, t, a) {
    if (vU() && (t.mode & Pe) !== Ee && (t.flags & Ze) === Se)
      return VR(t), Co(), t.flags |= ri | $s | Fn, !1;
    var i = dp(t);
    if (a !== null && a.dehydrated !== null)
      if (e === null) {
        if (!i)
          throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
        if (dU(t), vn(t), (t.mode & it) !== Ee) {
          var u = a !== null;
          if (u) {
            var s = t.child;
            s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
          }
        }
        return !1;
      } else {
        if (Co(), (t.flags & Ze) === Se && (t.memoizedState = null), t.flags |= Ye, vn(t), (t.mode & it) !== Ee) {
          var f = a !== null;
          if (f) {
            var v = t.child;
            v !== null && (t.treeBaseDuration -= v.treeBaseDuration);
          }
        }
        return !1;
      }
    else
      return BR(), !0;
  }
  function px(e, t, a) {
    var i = t.pendingProps;
    switch (_y(t), t.tag) {
      case j:
      case pe:
      case K:
      case E:
      case b:
      case re:
      case Ne:
      case B:
      case _:
      case te:
        return vn(t), null;
      case x: {
        var u = t.type;
        return ba(u) && lp(t), vn(t), null;
      }
      case L: {
        var s = t.stateNode;
        if (wo(t), xy(t), pg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
          var f = dp(t);
          if (f)
            Lo(t);
          else if (e !== null) {
            var v = e.memoizedState;
            // Check if this is a client root
            (!v.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
            (t.flags & ri) !== Se) && (t.flags |= Gl, BR());
          }
        }
        return nS(e, t), vn(t), null;
      }
      case F: {
        sg(t);
        var h = fT(), y = t.type;
        if (e !== null && t.stateNode != null)
          fx(e, t, y, i, h), e.ref !== t.ref && sx(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            return vn(t), null;
          }
          var g = og(), D = dp(t);
          if (D)
            cU(t, h, g) && Lo(t);
          else {
            var w = KN(y, i, h, g, t);
            cx(w, t, !1, !1), t.stateNode = w, ZN(w, y, i, h) && Lo(t);
          }
          t.ref !== null && sx(t);
        }
        return vn(t), null;
      }
      case Y: {
        var z = i;
        if (e && t.stateNode != null) {
          var U = e.memoizedProps;
          dx(e, t, U, z);
        } else {
          if (typeof z != "string" && t.stateNode === null)
            throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
          var P = fT(), oe = og(), ye = dp(t);
          ye ? fU(t) && Lo(t) : t.stateNode = ez(z, P, oe, t);
        }
        return vn(t), null;
      }
      case I: {
        Do(t);
        var he = t.memoizedState;
        if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          var Ve = kA(e, t, he);
          if (!Ve)
            return t.flags & Fn ? t : null;
        }
        if ((t.flags & Ze) !== Se)
          return t.lanes = a, (t.mode & it) !== Ee && Fg(t), t;
        var ze = he !== null, k = e !== null && e.memoizedState !== null;
        if (ze !== k && ze) {
          var $ = t.child;
          if ($.flags |= Xl, (t.mode & Pe) !== Ee) {
            var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !ee);
            O || cg(ea.current, vT) ? O2() : ES();
          }
        }
        var G = t.updateQueue;
        if (G !== null && (t.flags |= Ye), vn(t), (t.mode & it) !== Ee && ze) {
          var se = t.child;
          se !== null && (t.treeBaseDuration -= se.treeBaseDuration);
        }
        return null;
      }
      case M:
        return wo(t), nS(e, t), e === null && Wz(t.stateNode.containerInfo), vn(t), null;
      case R:
        var ie = t.type._context;
        return jy(ie, t), vn(t), null;
      case Qe: {
        var Re = t.type;
        return ba(Re) && lp(t), vn(t), null;
      }
      case nt: {
        Do(t);
        var _e = t.memoizedState;
        if (_e === null)
          return vn(t), null;
        var ut = (t.flags & Ze) !== Se, Ge = _e.rendering;
        if (Ge === null)
          if (ut)
            Yc(_e, !1);
          else {
            var At = L2() && (e === null || (e.flags & Ze) === Se);
            if (!At)
              for (var Xe = t.child; Xe !== null; ) {
                var zt = kp(Xe);
                if (zt !== null) {
                  ut = !0, t.flags |= Ze, Yc(_e, !1);
                  var kn = zt.updateQueue;
                  return kn !== null && (t.updateQueue = kn, t.flags |= Ye), t.subtreeFlags = Se, LU(t, a), al(t, fg(ea.current, zc)), t.child;
                }
                Xe = Xe.sibling;
              }
            _e.tail !== null && rn() > zx() && (t.flags |= Ze, ut = !0, Yc(_e, !1), t.lanes = f1);
          }
        else {
          if (!ut) {
            var Sn = kp(Ge);
            if (Sn !== null) {
              t.flags |= Ze, ut = !0;
              var gr = Sn.updateQueue;
              if (gr !== null && (t.updateQueue = gr, t.flags |= Ye), Yc(_e, !0), _e.tail === null && _e.tailMode === "hidden" && !Ge.alternate && !dn())
                return vn(t), null;
            } else
              // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              rn() * 2 - _e.renderingStartTime > zx() && a !== fr && (t.flags |= Ze, ut = !0, Yc(_e, !1), t.lanes = f1);
          }
          if (_e.isBackwards)
            Ge.sibling = t.child, t.child = Ge;
          else {
            var Vn = _e.last;
            Vn !== null ? Vn.sibling = Ge : t.child = Ge, _e.last = Ge;
          }
        }
        if (_e.tail !== null) {
          var Bn = _e.tail;
          _e.rendering = Bn, _e.tail = Bn.sibling, _e.renderingStartTime = rn(), Bn.sibling = null;
          var On = ea.current;
          return ut ? On = fg(On, zc) : On = bo(On), al(t, On), Bn;
        }
        return vn(t), null;
      }
      case Z:
        break;
      case Te:
      case Ue: {
        SS(t);
        var Ci = t.memoizedState, Po = Ci !== null;
        if (e !== null) {
          var of = e.memoizedState, za = of !== null;
          za !== Po && // LegacyHidden doesn't do any hiding — it only pre-renders.
          !N && (t.flags |= Xl);
        }
        return !Po || (t.mode & Pe) === Ee ? vn(t) : dr(Na, fr) && (vn(t), t.subtreeFlags & (Pt | Ye) && (t.flags |= Xl)), null;
      }
      case ht:
        return null;
      case Lt:
        return null;
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function OA(e, t, a) {
    switch (_y(t), t.tag) {
      case x: {
        var i = t.type;
        ba(i) && lp(t);
        var u = t.flags;
        return u & Fn ? (t.flags = u & ~Fn | Ze, (t.mode & it) !== Ee && Fg(t), t) : null;
      }
      case L: {
        t.stateNode, wo(t), xy(t), pg();
        var s = t.flags;
        return (s & Fn) !== Se && (s & Ze) === Se ? (t.flags = s & ~Fn | Ze, t) : null;
      }
      case F:
        return sg(t), null;
      case I: {
        Do(t);
        var f = t.memoizedState;
        if (f !== null && f.dehydrated !== null) {
          if (t.alternate === null)
            throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
          Co();
        }
        var v = t.flags;
        return v & Fn ? (t.flags = v & ~Fn | Ze, (t.mode & it) !== Ee && Fg(t), t) : null;
      }
      case nt:
        return Do(t), null;
      case M:
        return wo(t), null;
      case R:
        var h = t.type._context;
        return jy(h, t), null;
      case Te:
      case Ue:
        return SS(t), null;
      case ht:
        return null;
      default:
        return null;
    }
  }
  function vx(e, t, a) {
    switch (_y(t), t.tag) {
      case x: {
        var i = t.type.childContextTypes;
        i != null && lp(t);
        break;
      }
      case L: {
        t.stateNode, wo(t), xy(t), pg();
        break;
      }
      case F: {
        sg(t);
        break;
      }
      case M:
        wo(t);
        break;
      case I:
        Do(t);
        break;
      case nt:
        Do(t);
        break;
      case R:
        var u = t.type._context;
        jy(u, t);
        break;
      case Te:
      case Ue:
        SS(t);
        break;
    }
  }
  var hx = null;
  hx = /* @__PURE__ */ new Set();
  var Zp = !1, hn = !1, MA = typeof WeakSet == "function" ? WeakSet : Set, fe = null, No = null, zo = null;
  function LA(e) {
    am(null, function() {
      throw e;
    }), im();
  }
  var NA = function(e, t) {
    if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & it)
      try {
        Ma(), t.componentWillUnmount();
      } finally {
        Oa(e);
      }
    else
      t.componentWillUnmount();
  };
  function mx(e, t) {
    try {
      ul(Qt, e);
    } catch (a) {
      vt(e, t, a);
    }
  }
  function rS(e, t, a) {
    try {
      NA(e, a);
    } catch (i) {
      vt(e, t, i);
    }
  }
  function zA(e, t, a) {
    try {
      a.componentDidMount();
    } catch (i) {
      vt(e, t, i);
    }
  }
  function yx(e, t) {
    try {
      Sx(e);
    } catch (a) {
      vt(e, t, a);
    }
  }
  function Uo(e, t) {
    var a = e.ref;
    if (a !== null)
      if (typeof a == "function") {
        var i;
        try {
          if (st && rt && e.mode & it)
            try {
              Ma(), i = a(null);
            } finally {
              Oa(e);
            }
          else
            i = a(null);
        } catch (u) {
          vt(e, t, u);
        }
        typeof i == "function" && d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Oe(e));
      } else
        a.current = null;
  }
  function Jp(e, t, a) {
    try {
      a();
    } catch (i) {
      vt(e, t, i);
    }
  }
  var gx = !1;
  function UA(e, t) {
    GN(e.containerInfo), fe = t, AA();
    var a = gx;
    return gx = !1, a;
  }
  function AA() {
    for (; fe !== null; ) {
      var e = fe, t = e.child;
      (e.subtreeFlags & cm) !== Se && t !== null ? (t.return = e, fe = t) : jA();
    }
  }
  function jA() {
    for (; fe !== null; ) {
      var e = fe;
      Dt(e);
      try {
        FA(e);
      } catch (a) {
        vt(e, e.return, a);
      }
      nn();
      var t = e.sibling;
      if (t !== null) {
        t.return = e.return, fe = t;
        return;
      }
      fe = e.return;
    }
  }
  function FA(e) {
    var t = e.alternate, a = e.flags;
    if ((a & Gl) !== Se) {
      switch (Dt(e), e.tag) {
        case E:
        case b:
        case K:
          break;
        case x: {
          if (t !== null) {
            var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
            e.type === e.elementType && !hu && (s.props !== e.memoizedProps && d("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Oe(e) || "instance"), s.state !== e.memoizedState && d("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Oe(e) || "instance"));
            var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Jr(e.type, i), u);
            {
              var v = hx;
              f === void 0 && !v.has(e.type) && (v.add(e.type), d("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Oe(e)));
            }
            s.__reactInternalSnapshotBeforeUpdate = f;
          }
          break;
        }
        case L: {
          {
            var h = e.stateNode;
            Sz(h.containerInfo);
          }
          break;
        }
        case F:
        case Y:
        case M:
        case Qe:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
      nn();
    }
  }
  function ra(e, t, a) {
    var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
    if (u !== null) {
      var s = u.next, f = s;
      do {
        if ((f.tag & e) === e) {
          var v = f.destroy;
          f.destroy = void 0, v !== void 0 && ((e & pn) !== tr ? eM(t) : (e & Qt) !== tr && l1(t), (e & Da) !== tr && af(!0), Jp(t, a, v), (e & Da) !== tr && af(!1), (e & pn) !== tr ? tM() : (e & Qt) !== tr && u1());
        }
        f = f.next;
      } while (f !== s);
    }
  }
  function ul(e, t) {
    var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
    if (i !== null) {
      var u = i.next, s = u;
      do {
        if ((s.tag & e) === e) {
          (e & pn) !== tr ? ZO(t) : (e & Qt) !== tr && nM(t);
          var f = s.create;
          (e & Da) !== tr && af(!0), s.destroy = f(), (e & Da) !== tr && af(!1), (e & pn) !== tr ? JO() : (e & Qt) !== tr && rM();
          {
            var v = s.destroy;
            if (v !== void 0 && typeof v != "function") {
              var h = void 0;
              (s.tag & Qt) !== Se ? h = "useLayoutEffect" : (s.tag & Da) !== Se ? h = "useInsertionEffect" : h = "useEffect";
              var y = void 0;
              v === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof v.then == "function" ? y = `

It looks like you wrote ` + h + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + h + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + v, d("%s must not return anything besides a function, which is used for clean-up.%s", h, y);
            }
          }
        }
        s = s.next;
      } while (s !== u);
    }
  }
  function HA(e, t) {
    if ((t.flags & Ye) !== Se)
      switch (t.tag) {
        case B: {
          var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = PT(), v = t.alternate === null ? "mount" : "update";
          HT() && (v = "nested-update"), typeof s == "function" && s(u, v, a, f);
          var h = t.return;
          e:
            for (; h !== null; ) {
              switch (h.tag) {
                case L:
                  var y = h.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case B:
                  var g = h.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              h = h.return;
            }
          break;
        }
      }
  }
  function PA(e, t, a, i) {
    if ((a.flags & Vs) !== Se)
      switch (a.tag) {
        case E:
        case b:
        case K: {
          if (!hn)
            if (a.mode & it)
              try {
                Ma(), ul(Qt | Yt, a);
              } finally {
                Oa(a);
              }
            else
              ul(Qt | Yt, a);
          break;
        }
        case x: {
          var u = a.stateNode;
          if (a.flags & Ye && !hn)
            if (t === null)
              if (a.type === a.elementType && !hu && (u.props !== a.memoizedProps && d("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Oe(a) || "instance"), u.state !== a.memoizedState && d("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Oe(a) || "instance")), a.mode & it)
                try {
                  Ma(), u.componentDidMount();
                } finally {
                  Oa(a);
                }
              else
                u.componentDidMount();
            else {
              var s = a.elementType === a.type ? t.memoizedProps : Jr(a.type, t.memoizedProps), f = t.memoizedState;
              if (a.type === a.elementType && !hu && (u.props !== a.memoizedProps && d("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Oe(a) || "instance"), u.state !== a.memoizedState && d("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Oe(a) || "instance")), a.mode & it)
                try {
                  Ma(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                } finally {
                  Oa(a);
                }
              else
                u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
            }
          var v = a.updateQueue;
          v !== null && (a.type === a.elementType && !hu && (u.props !== a.memoizedProps && d("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Oe(a) || "instance"), u.state !== a.memoizedState && d("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Oe(a) || "instance")), JR(a, v, u));
          break;
        }
        case L: {
          var h = a.updateQueue;
          if (h !== null) {
            var y = null;
            if (a.child !== null)
              switch (a.child.tag) {
                case F:
                  y = a.child.stateNode;
                  break;
                case x:
                  y = a.child.stateNode;
                  break;
              }
            JR(a, h, y);
          }
          break;
        }
        case F: {
          var g = a.stateNode;
          if (t === null && a.flags & Ye) {
            var D = a.type, w = a.memoizedProps;
            iz(g, D, w);
          }
          break;
        }
        case Y:
          break;
        case M:
          break;
        case B: {
          {
            var z = a.memoizedProps, U = z.onCommit, P = z.onRender, oe = a.stateNode.effectDuration, ye = PT(), he = t === null ? "mount" : "update";
            HT() && (he = "nested-update"), typeof P == "function" && P(a.memoizedProps.id, he, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ye);
            {
              typeof U == "function" && U(a.memoizedProps.id, he, oe, ye), j2(a);
              var Ve = a.return;
              e:
                for (; Ve !== null; ) {
                  switch (Ve.tag) {
                    case L:
                      var ze = Ve.stateNode;
                      ze.effectDuration += oe;
                      break e;
                    case B:
                      var k = Ve.stateNode;
                      k.effectDuration += oe;
                      break e;
                  }
                  Ve = Ve.return;
                }
            }
          }
          break;
        }
        case I: {
          GA(e, a);
          break;
        }
        case nt:
        case Qe:
        case Z:
        case Te:
        case Ue:
        case Lt:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
    hn || a.flags & Ii && Sx(a);
  }
  function $A(e) {
    switch (e.tag) {
      case E:
      case b:
      case K: {
        if (e.mode & it)
          try {
            Ma(), mx(e, e.return);
          } finally {
            Oa(e);
          }
        else
          mx(e, e.return);
        break;
      }
      case x: {
        var t = e.stateNode;
        typeof t.componentDidMount == "function" && zA(e, e.return, t), yx(e, e.return);
        break;
      }
      case F: {
        yx(e, e.return);
        break;
      }
    }
  }
  function VA(e, t) {
    for (var a = null, i = e; ; ) {
      if (i.tag === F) {
        if (a === null) {
          a = i;
          try {
            var u = i.stateNode;
            t ? hz(u) : yz(i.stateNode, i.memoizedProps);
          } catch (f) {
            vt(e, e.return, f);
          }
        }
      } else if (i.tag === Y) {
        if (a === null)
          try {
            var s = i.stateNode;
            t ? mz(s) : gz(s, i.memoizedProps);
          } catch (f) {
            vt(e, e.return, f);
          }
      } else if (!((i.tag === Te || i.tag === Ue) && i.memoizedState !== null && i !== e)) {
        if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
      }
      if (i === e)
        return;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === e)
          return;
        a === i && (a = null), i = i.return;
      }
      a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
    }
  }
  function Sx(e) {
    var t = e.ref;
    if (t !== null) {
      var a = e.stateNode, i;
      switch (e.tag) {
        case F:
          i = a;
          break;
        default:
          i = a;
      }
      if (typeof t == "function") {
        var u;
        if (e.mode & it)
          try {
            Ma(), u = t(i);
          } finally {
            Oa(e);
          }
        else
          u = t(i);
        typeof u == "function" && d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Oe(e));
      } else
        t.hasOwnProperty("current") || d("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Oe(e)), t.current = i;
    }
  }
  function BA(e) {
    var t = e.alternate;
    t !== null && (t.return = null), e.return = null;
  }
  function Ex(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ex(t));
    {
      if (e.child = null, e.deletions = null, e.sibling = null, e.tag === F) {
        var a = e.stateNode;
        a !== null && Kz(a);
      }
      e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
  }
  function IA(e) {
    for (var t = e.return; t !== null; ) {
      if (Cx(t))
        return t;
      t = t.return;
    }
    throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
  }
  function Cx(e) {
    return e.tag === F || e.tag === L || e.tag === M;
  }
  function Rx(e) {
    var t = e;
    e:
      for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || Cx(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== F && t.tag !== Y && t.tag !== xe; ) {
          if (t.flags & Pt || t.child === null || t.tag === M)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Pt))
          return t.stateNode;
      }
  }
  function YA(e) {
    var t = IA(e);
    switch (t.tag) {
      case F: {
        var a = t.stateNode;
        t.flags & Ps && (TR(a), t.flags &= ~Ps);
        var i = Rx(e);
        iS(e, i, a);
        break;
      }
      case L:
      case M: {
        var u = t.stateNode.containerInfo, s = Rx(e);
        aS(e, s, u);
        break;
      }
      default:
        throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  function aS(e, t, a) {
    var i = e.tag, u = i === F || i === Y;
    if (u) {
      var s = e.stateNode;
      t ? fz(a, s, t) : sz(a, s);
    } else if (i !== M) {
      var f = e.child;
      if (f !== null) {
        aS(f, t, a);
        for (var v = f.sibling; v !== null; )
          aS(v, t, a), v = v.sibling;
      }
    }
  }
  function iS(e, t, a) {
    var i = e.tag, u = i === F || i === Y;
    if (u) {
      var s = e.stateNode;
      t ? cz(a, s, t) : oz(a, s);
    } else if (i !== M) {
      var f = e.child;
      if (f !== null) {
        iS(f, t, a);
        for (var v = f.sibling; v !== null; )
          iS(v, t, a), v = v.sibling;
      }
    }
  }
  var mn = null, aa = !1;
  function QA(e, t, a) {
    {
      var i = t;
      e:
        for (; i !== null; ) {
          switch (i.tag) {
            case F: {
              mn = i.stateNode, aa = !1;
              break e;
            }
            case L: {
              mn = i.stateNode.containerInfo, aa = !0;
              break e;
            }
            case M: {
              mn = i.stateNode.containerInfo, aa = !0;
              break e;
            }
          }
          i = i.return;
        }
      if (mn === null)
        throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
      Tx(e, t, a), mn = null, aa = !1;
    }
    BA(a);
  }
  function ol(e, t, a) {
    for (var i = a.child; i !== null; )
      Tx(e, t, i), i = i.sibling;
  }
  function Tx(e, t, a) {
    switch (GO(a), a.tag) {
      case F:
        hn || Uo(a, t);
      case Y: {
        {
          var i = mn, u = aa;
          mn = null, ol(e, t, a), mn = i, aa = u, mn !== null && (aa ? pz(mn, a.stateNode) : dz(mn, a.stateNode));
        }
        return;
      }
      case xe: {
        mn !== null && (aa ? vz(mn, a.stateNode) : my(mn, a.stateNode));
        return;
      }
      case M: {
        {
          var s = mn, f = aa;
          mn = a.stateNode.containerInfo, aa = !0, ol(e, t, a), mn = s, aa = f;
        }
        return;
      }
      case E:
      case b:
      case te:
      case K: {
        if (!hn) {
          var v = a.updateQueue;
          if (v !== null) {
            var h = v.lastEffect;
            if (h !== null) {
              var y = h.next, g = y;
              do {
                var D = g, w = D.destroy, z = D.tag;
                w !== void 0 && ((z & Da) !== tr ? Jp(a, t, w) : (z & Qt) !== tr && (l1(a), a.mode & it ? (Ma(), Jp(a, t, w), Oa(a)) : Jp(a, t, w), u1())), g = g.next;
              } while (g !== y);
            }
          }
        }
        ol(e, t, a);
        return;
      }
      case x: {
        if (!hn) {
          Uo(a, t);
          var U = a.stateNode;
          typeof U.componentWillUnmount == "function" && rS(a, t, U);
        }
        ol(e, t, a);
        return;
      }
      case Z: {
        ol(e, t, a);
        return;
      }
      case Te: {
        if (
          // TODO: Remove this dead flag
          a.mode & Pe
        ) {
          var P = hn;
          hn = P || a.memoizedState !== null, ol(e, t, a), hn = P;
        } else
          ol(e, t, a);
        break;
      }
      default: {
        ol(e, t, a);
        return;
      }
    }
  }
  function WA(e) {
    e.memoizedState;
  }
  function GA(e, t) {
    var a = t.memoizedState;
    if (a === null) {
      var i = t.alternate;
      if (i !== null) {
        var u = i.memoizedState;
        if (u !== null) {
          var s = u.dehydrated;
          s !== null && Nz(s);
        }
      }
    }
  }
  function xx(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var a = e.stateNode;
      a === null && (a = e.stateNode = new MA()), t.forEach(function(i) {
        var u = I2.bind(null, e, i);
        if (!a.has(i)) {
          if (a.add(i), Gr)
            if (No !== null && zo !== null)
              rf(zo, No);
            else
              throw Error("Expected finished root and lanes to be set. This is a bug in React.");
          i.then(u, u);
        }
      });
    }
  }
  function XA(e, t, a) {
    No = a, zo = e, Dt(t), wx(t, e), Dt(t), No = null, zo = null;
  }
  function ia(e, t, a) {
    var i = t.deletions;
    if (i !== null)
      for (var u = 0; u < i.length; u++) {
        var s = i[u];
        try {
          QA(e, t, s);
        } catch (h) {
          vt(s, t, h);
        }
      }
    var f = cd();
    if (t.subtreeFlags & fm)
      for (var v = t.child; v !== null; )
        Dt(v), wx(v, e), v = v.sibling;
    Dt(f);
  }
  function wx(e, t, a) {
    var i = e.alternate, u = e.flags;
    switch (e.tag) {
      case E:
      case b:
      case te:
      case K: {
        if (ia(t, e), La(e), u & Ye) {
          try {
            ra(Da | Yt, e, e.return), ul(Da | Yt, e);
          } catch (Re) {
            vt(e, e.return, Re);
          }
          if (e.mode & it) {
            try {
              Ma(), ra(Qt | Yt, e, e.return);
            } catch (Re) {
              vt(e, e.return, Re);
            }
            Oa(e);
          } else
            try {
              ra(Qt | Yt, e, e.return);
            } catch (Re) {
              vt(e, e.return, Re);
            }
        }
        return;
      }
      case x: {
        ia(t, e), La(e), u & Ii && i !== null && Uo(i, i.return);
        return;
      }
      case F: {
        ia(t, e), La(e), u & Ii && i !== null && Uo(i, i.return);
        {
          if (e.flags & Ps) {
            var s = e.stateNode;
            try {
              TR(s);
            } catch (Re) {
              vt(e, e.return, Re);
            }
          }
          if (u & Ye) {
            var f = e.stateNode;
            if (f != null) {
              var v = e.memoizedProps, h = i !== null ? i.memoizedProps : v, y = e.type, g = e.updateQueue;
              if (e.updateQueue = null, g !== null)
                try {
                  lz(f, g, y, h, v, e);
                } catch (Re) {
                  vt(e, e.return, Re);
                }
            }
          }
        }
        return;
      }
      case Y: {
        if (ia(t, e), La(e), u & Ye) {
          if (e.stateNode === null)
            throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var D = e.stateNode, w = e.memoizedProps, z = i !== null ? i.memoizedProps : w;
          try {
            uz(D, z, w);
          } catch (Re) {
            vt(e, e.return, Re);
          }
        }
        return;
      }
      case L: {
        if (ia(t, e), La(e), u & Ye && i !== null) {
          var U = i.memoizedState;
          if (U.isDehydrated)
            try {
              Lz(t.containerInfo);
            } catch (Re) {
              vt(e, e.return, Re);
            }
        }
        return;
      }
      case M: {
        ia(t, e), La(e);
        return;
      }
      case I: {
        ia(t, e), La(e);
        var P = e.child;
        if (P.flags & Xl) {
          var oe = P.stateNode, ye = P.memoizedState, he = ye !== null;
          if (oe.isHidden = he, he) {
            var Ve = P.alternate !== null && P.alternate.memoizedState !== null;
            Ve || k2();
          }
        }
        if (u & Ye) {
          try {
            WA(e);
          } catch (Re) {
            vt(e, e.return, Re);
          }
          xx(e);
        }
        return;
      }
      case Te: {
        var ze = i !== null && i.memoizedState !== null;
        if (
          // TODO: Remove this dead flag
          e.mode & Pe
        ) {
          var k = hn;
          hn = k || ze, ia(t, e), hn = k;
        } else
          ia(t, e);
        if (La(e), u & Xl) {
          var $ = e.stateNode, O = e.memoizedState, G = O !== null, se = e;
          if ($.isHidden = G, G && !ze && (se.mode & Pe) !== Ee) {
            fe = se;
            for (var ie = se.child; ie !== null; )
              fe = ie, qA(ie), ie = ie.sibling;
          }
          VA(se, G);
        }
        return;
      }
      case nt: {
        ia(t, e), La(e), u & Ye && xx(e);
        return;
      }
      case Z:
        return;
      default: {
        ia(t, e), La(e);
        return;
      }
    }
  }
  function La(e) {
    var t = e.flags;
    if (t & Pt) {
      try {
        YA(e);
      } catch (a) {
        vt(e, e.return, a);
      }
      e.flags &= ~Pt;
    }
    t & ai && (e.flags &= ~ai);
  }
  function KA(e, t, a) {
    No = a, zo = t, fe = e, bx(e, t, a), No = null, zo = null;
  }
  function bx(e, t, a) {
    for (var i = (e.mode & Pe) !== Ee; fe !== null; ) {
      var u = fe, s = u.child;
      if (u.tag === Te && i) {
        var f = u.memoizedState !== null, v = f || Zp;
        if (v) {
          lS(e, t, a);
          continue;
        } else {
          var h = u.alternate, y = h !== null && h.memoizedState !== null, g = y || hn, D = Zp, w = hn;
          Zp = v, hn = g, hn && !w && (fe = u, ZA(u));
          for (var z = s; z !== null; )
            fe = z, bx(
              z,
              // New root; bubble back up to here and stop.
              t,
              a
            ), z = z.sibling;
          fe = u, Zp = D, hn = w, lS(e, t, a);
          continue;
        }
      }
      (u.subtreeFlags & Vs) !== Se && s !== null ? (s.return = u, fe = s) : lS(e, t, a);
    }
  }
  function lS(e, t, a) {
    for (; fe !== null; ) {
      var i = fe;
      if ((i.flags & Vs) !== Se) {
        var u = i.alternate;
        Dt(i);
        try {
          PA(t, u, i, a);
        } catch (f) {
          vt(i, i.return, f);
        }
        nn();
      }
      if (i === e) {
        fe = null;
        return;
      }
      var s = i.sibling;
      if (s !== null) {
        s.return = i.return, fe = s;
        return;
      }
      fe = i.return;
    }
  }
  function qA(e) {
    for (; fe !== null; ) {
      var t = fe, a = t.child;
      switch (t.tag) {
        case E:
        case b:
        case te:
        case K: {
          if (t.mode & it)
            try {
              Ma(), ra(Qt, t, t.return);
            } finally {
              Oa(t);
            }
          else
            ra(Qt, t, t.return);
          break;
        }
        case x: {
          Uo(t, t.return);
          var i = t.stateNode;
          typeof i.componentWillUnmount == "function" && rS(t, t.return, i);
          break;
        }
        case F: {
          Uo(t, t.return);
          break;
        }
        case Te: {
          var u = t.memoizedState !== null;
          if (u) {
            Dx(e);
            continue;
          }
          break;
        }
      }
      a !== null ? (a.return = t, fe = a) : Dx(e);
    }
  }
  function Dx(e) {
    for (; fe !== null; ) {
      var t = fe;
      if (t === e) {
        fe = null;
        return;
      }
      var a = t.sibling;
      if (a !== null) {
        a.return = t.return, fe = a;
        return;
      }
      fe = t.return;
    }
  }
  function ZA(e) {
    for (; fe !== null; ) {
      var t = fe, a = t.child;
      if (t.tag === Te) {
        var i = t.memoizedState !== null;
        if (i) {
          _x(e);
          continue;
        }
      }
      a !== null ? (a.return = t, fe = a) : _x(e);
    }
  }
  function _x(e) {
    for (; fe !== null; ) {
      var t = fe;
      Dt(t);
      try {
        $A(t);
      } catch (i) {
        vt(t, t.return, i);
      }
      if (nn(), t === e) {
        fe = null;
        return;
      }
      var a = t.sibling;
      if (a !== null) {
        a.return = t.return, fe = a;
        return;
      }
      fe = t.return;
    }
  }
  function JA(e, t, a, i) {
    fe = t, e2(t, e, a, i);
  }
  function e2(e, t, a, i) {
    for (; fe !== null; ) {
      var u = fe, s = u.child;
      (u.subtreeFlags & eo) !== Se && s !== null ? (s.return = u, fe = s) : t2(e, t, a, i);
    }
  }
  function t2(e, t, a, i) {
    for (; fe !== null; ) {
      var u = fe;
      if ((u.flags & Wr) !== Se) {
        Dt(u);
        try {
          n2(t, u, a, i);
        } catch (f) {
          vt(u, u.return, f);
        }
        nn();
      }
      if (u === e) {
        fe = null;
        return;
      }
      var s = u.sibling;
      if (s !== null) {
        s.return = u.return, fe = s;
        return;
      }
      fe = u.return;
    }
  }
  function n2(e, t, a, i) {
    switch (t.tag) {
      case E:
      case b:
      case K: {
        if (t.mode & it) {
          jg();
          try {
            ul(pn | Yt, t);
          } finally {
            Ag(t);
          }
        } else
          ul(pn | Yt, t);
        break;
      }
    }
  }
  function r2(e) {
    fe = e, a2();
  }
  function a2() {
    for (; fe !== null; ) {
      var e = fe, t = e.child;
      if ((fe.flags & Wl) !== Se) {
        var a = e.deletions;
        if (a !== null) {
          for (var i = 0; i < a.length; i++) {
            var u = a[i];
            fe = u, u2(u, e);
          }
          {
            var s = e.alternate;
            if (s !== null) {
              var f = s.child;
              if (f !== null) {
                s.child = null;
                do {
                  var v = f.sibling;
                  f.sibling = null, f = v;
                } while (f !== null);
              }
            }
          }
          fe = e;
        }
      }
      (e.subtreeFlags & eo) !== Se && t !== null ? (t.return = e, fe = t) : i2();
    }
  }
  function i2() {
    for (; fe !== null; ) {
      var e = fe;
      (e.flags & Wr) !== Se && (Dt(e), l2(e), nn());
      var t = e.sibling;
      if (t !== null) {
        t.return = e.return, fe = t;
        return;
      }
      fe = e.return;
    }
  }
  function l2(e) {
    switch (e.tag) {
      case E:
      case b:
      case K: {
        e.mode & it ? (jg(), ra(pn | Yt, e, e.return), Ag(e)) : ra(pn | Yt, e, e.return);
        break;
      }
    }
  }
  function u2(e, t) {
    for (; fe !== null; ) {
      var a = fe;
      Dt(a), s2(a, t), nn();
      var i = a.child;
      i !== null ? (i.return = a, fe = i) : o2(e);
    }
  }
  function o2(e) {
    for (; fe !== null; ) {
      var t = fe, a = t.sibling, i = t.return;
      if (Ex(t), t === e) {
        fe = null;
        return;
      }
      if (a !== null) {
        a.return = i, fe = a;
        return;
      }
      fe = i;
    }
  }
  function s2(e, t) {
    switch (e.tag) {
      case E:
      case b:
      case K: {
        e.mode & it ? (jg(), ra(pn, e, t), Ag(e)) : ra(pn, e, t);
        break;
      }
    }
  }
  function c2(e) {
    switch (e.tag) {
      case E:
      case b:
      case K: {
        try {
          ul(Qt | Yt, e);
        } catch (a) {
          vt(e, e.return, a);
        }
        break;
      }
      case x: {
        var t = e.stateNode;
        try {
          t.componentDidMount();
        } catch (a) {
          vt(e, e.return, a);
        }
        break;
      }
    }
  }
  function f2(e) {
    switch (e.tag) {
      case E:
      case b:
      case K: {
        try {
          ul(pn | Yt, e);
        } catch (t) {
          vt(e, e.return, t);
        }
        break;
      }
    }
  }
  function d2(e) {
    switch (e.tag) {
      case E:
      case b:
      case K: {
        try {
          ra(Qt | Yt, e, e.return);
        } catch (a) {
          vt(e, e.return, a);
        }
        break;
      }
      case x: {
        var t = e.stateNode;
        typeof t.componentWillUnmount == "function" && rS(e, e.return, t);
        break;
      }
    }
  }
  function p2(e) {
    switch (e.tag) {
      case E:
      case b:
      case K:
        try {
          ra(pn | Yt, e, e.return);
        } catch (t) {
          vt(e, e.return, t);
        }
    }
  }
  if (typeof Symbol == "function" && Symbol.for) {
    var Qc = Symbol.for;
    Qc("selector.component"), Qc("selector.has_pseudo_class"), Qc("selector.role"), Qc("selector.test_id"), Qc("selector.text");
  }
  var v2 = [];
  function h2() {
    v2.forEach(function(e) {
      return e();
    });
  }
  var m2 = l.ReactCurrentActQueue;
  function y2(e) {
    {
      var t = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT != "undefined" ? IS_REACT_ACT_ENVIRONMENT : void 0
      ), a = typeof jest != "undefined";
      return a && t !== !1;
    }
  }
  function kx() {
    {
      var e = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT != "undefined" ? IS_REACT_ACT_ENVIRONMENT : void 0
      );
      return !e && m2.current !== null && d("The current testing environment is not configured to support act(...)"), e;
    }
  }
  var g2 = Math.ceil, uS = l.ReactCurrentDispatcher, oS = l.ReactCurrentOwner, yn = l.ReactCurrentBatchConfig, la = l.ReactCurrentActQueue, Xt = (
    /*             */
    0
  ), Ox = (
    /*               */
    1
  ), gn = (
    /*                */
    2
  ), Nr = (
    /*                */
    4
  ), yi = 0, Wc = 1, mu = 2, ev = 3, Gc = 4, Mx = 5, sS = 6, $e = Xt, Pn = null, _t = null, Kt = Q, Na = Q, cS = Zi(Q), qt = yi, Xc = null, tv = Q, Kc = Q, nv = Q, qc = null, nr = null, fS = 0, Lx = 500, Nx = 1 / 0, S2 = 500, gi = null;
  function Zc() {
    Nx = rn() + S2;
  }
  function zx() {
    return Nx;
  }
  var rv = !1, dS = null, Ao = null, yu = !1, sl = null, Jc = Q, pS = [], vS = null, E2 = 50, ef = 0, hS = null, mS = !1, av = !1, C2 = 50, jo = 0, iv = null, tf = mt, lv = Q, Ux = !1;
  function uv() {
    return Pn;
  }
  function $n() {
    return ($e & (gn | Nr)) !== Xt ? rn() : (tf !== mt || (tf = rn()), tf);
  }
  function cl(e) {
    var t = e.mode;
    if ((t & Pe) === Ee)
      return be;
    if (($e & gn) !== Xt && Kt !== Q)
      return Xs(Kt);
    var a = yU() !== mU;
    if (a) {
      if (yn.transition !== null) {
        var i = yn.transition;
        i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
      }
      return lv === ln && (lv = h1()), lv;
    }
    var u = Xr();
    if (u !== ln)
      return u;
    var s = tz();
    return s;
  }
  function R2(e) {
    var t = e.mode;
    return (t & Pe) === Ee ? be : wM();
  }
  function Zt(e, t, a, i) {
    Q2(), Ux && d("useInsertionEffect must not schedule updates."), mS && (av = !0), Ks(e, a, i), ($e & gn) !== Q && e === Pn ? X2(t) : (Gr && g1(e, t, a), K2(t), e === Pn && (($e & gn) === Xt && (Kc = Le(Kc, a)), qt === Gc && fl(e, Kt)), rr(e, i), a === be && $e === Xt && (t.mode & Pe) === Ee && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
    !la.isBatchingLegacy && (Zc(), zR()));
  }
  function T2(e, t, a) {
    var i = e.current;
    i.lanes = t, Ks(e, t, a), rr(e, a);
  }
  function x2(e) {
    return (
      // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
      // decided not to enable it.
      ($e & gn) !== Xt
    );
  }
  function rr(e, t) {
    var a = e.callbackNode;
    SM(e, t);
    var i = _d(e, e === Pn ? Kt : Q);
    if (i === Q) {
      a !== null && qx(a), e.callbackNode = null, e.callbackPriority = ln;
      return;
    }
    var u = tu(i), s = e.callbackPriority;
    if (s === u && // Special case related to `act`. If the currently scheduled task is a
    // Scheduler task, rather than an `act` task, cancel it and re-scheduled
    // on the `act` queue.
    !(la.current !== null && a !== TS)) {
      a == null && s !== be && d("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
      return;
    }
    a != null && qx(a);
    var f;
    if (u === be)
      e.tag === Ji ? (la.isBatchingLegacy !== null && (la.didScheduleLegacyUpdate = !0), Jz(Fx.bind(null, e))) : NR(Fx.bind(null, e)), la.current !== null ? la.current.push(el) : rz(function() {
        ($e & (gn | Nr)) === Xt && el();
      }), f = null;
    else {
      var v;
      switch (C1(i)) {
        case pr:
          v = xd;
          break;
        case oi:
          v = dm;
          break;
        case si:
          v = Zl;
          break;
        case Md:
          v = pm;
          break;
        default:
          v = Zl;
          break;
      }
      f = xS(v, Ax.bind(null, e));
    }
    e.callbackPriority = u, e.callbackNode = f;
  }
  function Ax(e, t) {
    if (QU(), tf = mt, lv = Q, ($e & (gn | Nr)) !== Xt)
      throw new Error("Should not already be working.");
    var a = e.callbackNode, i = Ei();
    if (i && e.callbackNode !== a)
      return null;
    var u = _d(e, e === Pn ? Kt : Q);
    if (u === Q)
      return null;
    var s = !kd(e, u) && !xM(e, u) && !t, f = s ? z2(e, u) : sv(e, u);
    if (f !== yi) {
      if (f === mu) {
        var v = Um(e);
        v !== Q && (u = v, f = yS(e, v));
      }
      if (f === Wc) {
        var h = Xc;
        throw gu(e, Q), fl(e, u), rr(e, rn()), h;
      }
      if (f === sS)
        fl(e, u);
      else {
        var y = !kd(e, u), g = e.current.alternate;
        if (y && !b2(g)) {
          if (f = sv(e, u), f === mu) {
            var D = Um(e);
            D !== Q && (u = D, f = yS(e, D));
          }
          if (f === Wc) {
            var w = Xc;
            throw gu(e, Q), fl(e, u), rr(e, rn()), w;
          }
        }
        e.finishedWork = g, e.finishedLanes = u, w2(e, f, u);
      }
    }
    return rr(e, rn()), e.callbackNode === a ? Ax.bind(null, e) : null;
  }
  function yS(e, t) {
    var a = qc;
    if (Ld(e)) {
      var i = gu(e, t);
      i.flags |= ri, Qz(e.containerInfo);
    }
    var u = sv(e, t);
    if (u !== mu) {
      var s = nr;
      nr = a, s !== null && jx(s);
    }
    return u;
  }
  function jx(e) {
    nr === null ? nr = e : nr.push.apply(nr, e);
  }
  function w2(e, t, a) {
    switch (t) {
      case yi:
      case Wc:
        throw new Error("Root did not complete. This is a bug in React.");
      case mu: {
        Su(e, nr, gi);
        break;
      }
      case ev: {
        if (fl(e, a), p1(a) && // do not delay if we're inside an act() scope
        !Zx()) {
          var i = fS + Lx - rn();
          if (i > 10) {
            var u = _d(e, Q);
            if (u !== Q)
              break;
            var s = e.suspendedLanes;
            if (!lo(s, a)) {
              $n(), y1(e, s);
              break;
            }
            e.timeoutHandle = vy(Su.bind(null, e, nr, gi), i);
            break;
          }
        }
        Su(e, nr, gi);
        break;
      }
      case Gc: {
        if (fl(e, a), TM(a))
          break;
        if (!Zx()) {
          var f = yM(e, a), v = f, h = rn() - v, y = Y2(h) - h;
          if (y > 10) {
            e.timeoutHandle = vy(Su.bind(null, e, nr, gi), y);
            break;
          }
        }
        Su(e, nr, gi);
        break;
      }
      case Mx: {
        Su(e, nr, gi);
        break;
      }
      default:
        throw new Error("Unknown root exit status.");
    }
  }
  function b2(e) {
    for (var t = e; ; ) {
      if (t.flags & Rd) {
        var a = t.updateQueue;
        if (a !== null) {
          var i = a.stores;
          if (i !== null)
            for (var u = 0; u < i.length; u++) {
              var s = i[u], f = s.getSnapshot, v = s.value;
              try {
                if (!hr(f(), v))
                  return !1;
              } catch (y) {
                return !1;
              }
            }
        }
      }
      var h = t.child;
      if (t.subtreeFlags & Rd && h !== null) {
        h.return = t, t = h;
        continue;
      }
      if (t === e)
        return !0;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return !0;
  }
  function fl(e, t) {
    t = Od(t, nv), t = Od(t, Kc), DM(e, t);
  }
  function Fx(e) {
    if (WU(), ($e & (gn | Nr)) !== Xt)
      throw new Error("Should not already be working.");
    Ei();
    var t = _d(e, Q);
    if (!dr(t, be))
      return rr(e, rn()), null;
    var a = sv(e, t);
    if (e.tag !== Ji && a === mu) {
      var i = Um(e);
      i !== Q && (t = i, a = yS(e, i));
    }
    if (a === Wc) {
      var u = Xc;
      throw gu(e, Q), fl(e, t), rr(e, rn()), u;
    }
    if (a === sS)
      throw new Error("Root did not complete. This is a bug in React.");
    var s = e.current.alternate;
    return e.finishedWork = s, e.finishedLanes = t, Su(e, nr, gi), rr(e, rn()), null;
  }
  function D2(e, t) {
    t !== Q && (Hm(e, Le(t, be)), rr(e, rn()), ($e & (gn | Nr)) === Xt && (Zc(), el()));
  }
  function gS(e, t) {
    var a = $e;
    $e |= Ox;
    try {
      return e(t);
    } finally {
      $e = a, $e === Xt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !la.isBatchingLegacy && (Zc(), zR());
    }
  }
  function _2(e, t, a, i, u) {
    var s = Xr(), f = yn.transition;
    try {
      return yn.transition = null, un(pr), e(t, a, i, u);
    } finally {
      un(s), yn.transition = f, $e === Xt && Zc();
    }
  }
  function Si(e) {
    sl !== null && sl.tag === Ji && ($e & (gn | Nr)) === Xt && Ei();
    var t = $e;
    $e |= Ox;
    var a = yn.transition, i = Xr();
    try {
      return yn.transition = null, un(pr), e ? e() : void 0;
    } finally {
      un(i), yn.transition = a, $e = t, ($e & (gn | Nr)) === Xt && el();
    }
  }
  function Hx() {
    return ($e & (gn | Nr)) !== Xt;
  }
  function ov(e, t) {
    Dn(cS, Na, e), Na = Le(Na, t);
  }
  function SS(e) {
    Na = cS.current, bn(cS, e);
  }
  function gu(e, t) {
    e.finishedWork = null, e.finishedLanes = Q;
    var a = e.timeoutHandle;
    if (a !== hy && (e.timeoutHandle = hy, nz(a)), _t !== null)
      for (var i = _t.return; i !== null; ) {
        var u = i.alternate;
        vx(u, i), i = i.return;
      }
    Pn = e;
    var s = Eu(e.current, null);
    return _t = s, Kt = Na = t, qt = yi, Xc = null, tv = Q, Kc = Q, nv = Q, qc = null, nr = null, CU(), Zr.discardPendingWarnings(), s;
  }
  function Px(e, t) {
    do {
      var a = _t;
      try {
        if (mp(), mT(), nn(), oS.current = null, a === null || a.return === null) {
          qt = Wc, Xc = t, _t = null;
          return;
        }
        if (st && a.mode & it && Gp(a, !0), ot)
          if (no(), t !== null && typeof t == "object" && typeof t.then == "function") {
            var i = t;
            iM(a, i, Kt);
          } else
            aM(a, t, Kt);
        ZU(e, a.return, a, t, Kt), Ix(a);
      } catch (u) {
        t = u, _t === a && a !== null ? (a = a.return, _t = a) : a = _t;
        continue;
      }
      return;
    } while (!0);
  }
  function $x() {
    var e = uS.current;
    return uS.current = Bp, e === null ? Bp : e;
  }
  function Vx(e) {
    uS.current = e;
  }
  function k2() {
    fS = rn();
  }
  function nf(e) {
    tv = Le(e, tv);
  }
  function O2() {
    qt === yi && (qt = ev);
  }
  function ES() {
    (qt === yi || qt === ev || qt === mu) && (qt = Gc), Pn !== null && (Am(tv) || Am(Kc)) && fl(Pn, Kt);
  }
  function M2(e) {
    qt !== Gc && (qt = mu), qc === null ? qc = [e] : qc.push(e);
  }
  function L2() {
    return qt === yi;
  }
  function sv(e, t) {
    var a = $e;
    $e |= gn;
    var i = $x();
    if (Pn !== e || Kt !== t) {
      if (Gr) {
        var u = e.memoizedUpdaters;
        u.size > 0 && (rf(e, Kt), u.clear()), S1(e, t);
      }
      gi = E1(), gu(e, t);
    }
    o1(t);
    do
      try {
        N2();
        break;
      } catch (s) {
        Px(e, s);
      }
    while (!0);
    if (mp(), $e = a, Vx(i), _t !== null)
      throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
    return s1(), Pn = null, Kt = Q, qt;
  }
  function N2() {
    for (; _t !== null; )
      Bx(_t);
  }
  function z2(e, t) {
    var a = $e;
    $e |= gn;
    var i = $x();
    if (Pn !== e || Kt !== t) {
      if (Gr) {
        var u = e.memoizedUpdaters;
        u.size > 0 && (rf(e, Kt), u.clear()), S1(e, t);
      }
      gi = E1(), Zc(), gu(e, t);
    }
    o1(t);
    do
      try {
        U2();
        break;
      } catch (s) {
        Px(e, s);
      }
    while (!0);
    return mp(), Vx(i), $e = a, _t !== null ? (cM(), yi) : (s1(), Pn = null, Kt = Q, qt);
  }
  function U2() {
    for (; _t !== null && !FO(); )
      Bx(_t);
  }
  function Bx(e) {
    var t = e.alternate;
    Dt(e);
    var a;
    (e.mode & it) !== Ee ? (Ug(e), a = CS(t, e, Na), Gp(e, !0)) : a = CS(t, e, Na), nn(), e.memoizedProps = e.pendingProps, a === null ? Ix(e) : _t = a, oS.current = null;
  }
  function Ix(e) {
    var t = e;
    do {
      var a = t.alternate, i = t.return;
      if ((t.flags & $s) === Se) {
        Dt(t);
        var u = void 0;
        if ((t.mode & it) === Ee ? u = px(a, t, Na) : (Ug(t), u = px(a, t, Na), Gp(t, !1)), nn(), u !== null) {
          _t = u;
          return;
        }
      } else {
        var s = OA(a, t);
        if (s !== null) {
          s.flags &= LO, _t = s;
          return;
        }
        if ((t.mode & it) !== Ee) {
          Gp(t, !1);
          for (var f = t.actualDuration, v = t.child; v !== null; )
            f += v.actualDuration, v = v.sibling;
          t.actualDuration = f;
        }
        if (i !== null)
          i.flags |= $s, i.subtreeFlags = Se, i.deletions = null;
        else {
          qt = sS, _t = null;
          return;
        }
      }
      var h = t.sibling;
      if (h !== null) {
        _t = h;
        return;
      }
      t = i, _t = t;
    } while (t !== null);
    qt === yi && (qt = Mx);
  }
  function Su(e, t, a) {
    var i = Xr(), u = yn.transition;
    try {
      yn.transition = null, un(pr), A2(e, t, a, i);
    } finally {
      yn.transition = u, un(i);
    }
    return null;
  }
  function A2(e, t, a, i) {
    do
      Ei();
    while (sl !== null);
    if (W2(), ($e & (gn | Nr)) !== Xt)
      throw new Error("Should not already be working.");
    var u = e.finishedWork, s = e.finishedLanes;
    if (qO(s), u === null)
      return i1(), null;
    if (s === Q && d("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Q, u === e.current)
      throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
    e.callbackNode = null, e.callbackPriority = ln;
    var f = Le(u.lanes, u.childLanes);
    _M(e, f), e === Pn && (Pn = null, _t = null, Kt = Q), ((u.subtreeFlags & eo) !== Se || (u.flags & eo) !== Se) && (yu || (yu = !0, vS = a, xS(Zl, function() {
      return Ei(), null;
    })));
    var v = (u.subtreeFlags & (cm | fm | Vs | eo)) !== Se, h = (u.flags & (cm | fm | Vs | eo)) !== Se;
    if (v || h) {
      var y = yn.transition;
      yn.transition = null;
      var g = Xr();
      un(pr);
      var D = $e;
      $e |= Nr, oS.current = null, UA(e, u), $T(), XA(e, u, s), XN(e.containerInfo), e.current = u, lM(s), KA(u, e, s), uM(), HO(), $e = D, un(g), yn.transition = y;
    } else
      e.current = u, $T();
    var w = yu;
    if (yu ? (yu = !1, sl = e, Jc = s) : (jo = 0, iv = null), f = e.pendingLanes, f === Q && (Ao = null), w || Gx(e.current, !1), QO(u.stateNode, i), Gr && e.memoizedUpdaters.clear(), h2(), rr(e, rn()), t !== null)
      for (var z = e.onRecoverableError, U = 0; U < t.length; U++) {
        var P = t[U], oe = P.stack, ye = P.digest;
        z(P.value, { componentStack: oe, digest: ye });
      }
    if (rv) {
      rv = !1;
      var he = dS;
      throw dS = null, he;
    }
    return dr(Jc, be) && e.tag !== Ji && Ei(), f = e.pendingLanes, dr(f, be) ? (YU(), e === hS ? ef++ : (ef = 0, hS = e)) : ef = 0, el(), i1(), null;
  }
  function Ei() {
    if (sl !== null) {
      var e = C1(Jc), t = LM(si, e), a = yn.transition, i = Xr();
      try {
        return yn.transition = null, un(t), F2();
      } finally {
        un(i), yn.transition = a;
      }
    }
    return !1;
  }
  function j2(e) {
    pS.push(e), yu || (yu = !0, xS(Zl, function() {
      return Ei(), null;
    }));
  }
  function F2() {
    if (sl === null)
      return !1;
    var e = vS;
    vS = null;
    var t = sl, a = Jc;
    if (sl = null, Jc = Q, ($e & (gn | Nr)) !== Xt)
      throw new Error("Cannot flush passive effects while already rendering.");
    mS = !0, av = !1, oM(a);
    var i = $e;
    $e |= Nr, r2(t.current), JA(t, t.current, a, e);
    {
      var u = pS;
      pS = [];
      for (var s = 0; s < u.length; s++) {
        var f = u[s];
        HA(t, f);
      }
    }
    sM(), Gx(t.current, !0), $e = i, el(), av ? t === iv ? jo++ : (jo = 0, iv = t) : jo = 0, mS = !1, av = !1, WO(t);
    {
      var v = t.current.stateNode;
      v.effectDuration = 0, v.passiveEffectDuration = 0;
    }
    return !0;
  }
  function Yx(e) {
    return Ao !== null && Ao.has(e);
  }
  function H2(e) {
    Ao === null ? Ao = /* @__PURE__ */ new Set([e]) : Ao.add(e);
  }
  function P2(e) {
    rv || (rv = !0, dS = e);
  }
  var $2 = P2;
  function Qx(e, t, a) {
    var i = vu(a, t), u = BT(e, i, be), s = nl(e, u, be), f = $n();
    s !== null && (Ks(s, be, f), rr(s, f));
  }
  function vt(e, t, a) {
    if (LA(a), af(!1), e.tag === L) {
      Qx(e, e, a);
      return;
    }
    var i = null;
    for (i = t; i !== null; ) {
      if (i.tag === L) {
        Qx(i, e, a);
        return;
      } else if (i.tag === x) {
        var u = i.type, s = i.stateNode;
        if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !Yx(s)) {
          var f = vu(a, e), v = $g(i, f, be), h = nl(i, v, be), y = $n();
          h !== null && (Ks(h, be, y), rr(h, y));
          return;
        }
      }
      i = i.return;
    }
    d(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
  }
  function V2(e, t, a) {
    var i = e.pingCache;
    i !== null && i.delete(t);
    var u = $n();
    y1(e, a), q2(e), Pn === e && lo(Kt, a) && (qt === Gc || qt === ev && p1(Kt) && rn() - fS < Lx ? gu(e, Q) : nv = Le(nv, a)), rr(e, u);
  }
  function Wx(e, t) {
    t === ln && (t = R2(e));
    var a = $n(), i = er(e, t);
    i !== null && (Ks(i, t, a), rr(i, a));
  }
  function B2(e) {
    var t = e.memoizedState, a = ln;
    t !== null && (a = t.retryLane), Wx(e, a);
  }
  function I2(e, t) {
    var a = ln, i;
    switch (e.tag) {
      case I:
        i = e.stateNode;
        var u = e.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case nt:
        i = e.stateNode;
        break;
      default:
        throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
    }
    i !== null && i.delete(t), Wx(e, a);
  }
  function Y2(e) {
    return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : g2(e / 1960) * 1960;
  }
  function Q2() {
    if (ef > E2)
      throw ef = 0, hS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
    jo > C2 && (jo = 0, iv = null, d("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
  }
  function W2() {
    Zr.flushLegacyContextWarning(), Zr.flushPendingUnsafeLifecycleWarnings();
  }
  function Gx(e, t) {
    Dt(e), cv(e, ii, d2), t && cv(e, Td, p2), cv(e, ii, c2), t && cv(e, Td, f2), nn();
  }
  function cv(e, t, a) {
    for (var i = e, u = null; i !== null; ) {
      var s = i.subtreeFlags & t;
      i !== u && i.child !== null && s !== Se ? i = i.child : ((i.flags & t) !== Se && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
    }
  }
  var fv = null;
  function Xx(e) {
    {
      if (($e & gn) !== Xt || !(e.mode & Pe))
        return;
      var t = e.tag;
      if (t !== j && t !== L && t !== x && t !== E && t !== b && t !== te && t !== K)
        return;
      var a = Oe(e) || "ReactComponent";
      if (fv !== null) {
        if (fv.has(a))
          return;
        fv.add(a);
      } else
        fv = /* @__PURE__ */ new Set([a]);
      var i = xn;
      try {
        Dt(e), d("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
      } finally {
        i ? Dt(e) : nn();
      }
    }
  }
  var CS;
  {
    var G2 = null;
    CS = function(e, t, a) {
      var i = rw(G2, t);
      try {
        return ox(e, t, a);
      } catch (s) {
        if (uU() || s !== null && typeof s == "object" && typeof s.then == "function")
          throw s;
        if (mp(), mT(), vx(e, t), rw(t, i), t.mode & it && Ug(t), am(null, ox, null, e, t, a), _O()) {
          var u = im();
          typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
        }
        throw s;
      }
    };
  }
  var Kx = !1, RS;
  RS = /* @__PURE__ */ new Set();
  function X2(e) {
    if (Il && !VU())
      switch (e.tag) {
        case E:
        case b:
        case K: {
          var t = _t && Oe(_t) || "Unknown", a = t;
          if (!RS.has(a)) {
            RS.add(a);
            var i = Oe(e) || "Unknown";
            d("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
          }
          break;
        }
        case x: {
          Kx || (d("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Kx = !0);
          break;
        }
      }
  }
  function rf(e, t) {
    if (Gr) {
      var a = e.memoizedUpdaters;
      a.forEach(function(i) {
        g1(e, i, t);
      });
    }
  }
  var TS = {};
  function xS(e, t) {
    {
      var a = la.current;
      return a !== null ? (a.push(t), TS) : a1(e, t);
    }
  }
  function qx(e) {
    if (e !== TS)
      return jO(e);
  }
  function Zx() {
    return la.current !== null;
  }
  function K2(e) {
    {
      if (e.mode & Pe) {
        if (!kx())
          return;
      } else if (!y2() || $e !== Xt || e.tag !== E && e.tag !== b && e.tag !== K)
        return;
      if (la.current === null) {
        var t = xn;
        try {
          Dt(e), d(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Oe(e));
        } finally {
          t ? Dt(e) : nn();
        }
      }
    }
  }
  function q2(e) {
    e.tag !== Ji && kx() && la.current === null && d(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
  }
  function af(e) {
    Ux = e;
  }
  var zr = null, Fo = null, Z2 = function(e) {
    zr = e;
  };
  function Ho(e) {
    {
      if (zr === null)
        return e;
      var t = zr(e);
      return t === void 0 ? e : t.current;
    }
  }
  function wS(e) {
    return Ho(e);
  }
  function bS(e) {
    {
      if (zr === null)
        return e;
      var t = zr(e);
      if (t === void 0) {
        if (e != null && typeof e.render == "function") {
          var a = Ho(e.render);
          if (e.render !== a) {
            var i = { $$typeof: ce, render: a };
            return e.displayName !== void 0 && (i.displayName = e.displayName), i;
          }
        }
        return e;
      }
      return t.current;
    }
  }
  function Jx(e, t) {
    {
      if (zr === null)
        return !1;
      var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
      switch (e.tag) {
        case x: {
          typeof i == "function" && (u = !0);
          break;
        }
        case E: {
          (typeof i == "function" || s === ge) && (u = !0);
          break;
        }
        case b: {
          (s === ce || s === ge) && (u = !0);
          break;
        }
        case te:
        case K: {
          (s === Me || s === ge) && (u = !0);
          break;
        }
        default:
          return !1;
      }
      if (u) {
        var f = zr(a);
        if (f !== void 0 && f === zr(i))
          return !0;
      }
      return !1;
    }
  }
  function ew(e) {
    {
      if (zr === null || typeof WeakSet != "function")
        return;
      Fo === null && (Fo = /* @__PURE__ */ new WeakSet()), Fo.add(e);
    }
  }
  var J2 = function(e, t) {
    {
      if (zr === null)
        return;
      var a = t.staleFamilies, i = t.updatedFamilies;
      Ei(), Si(function() {
        DS(e.current, i, a);
      });
    }
  }, ej = function(e, t) {
    {
      if (e.context !== mr)
        return;
      Ei(), Si(function() {
        lf(t, e, null, null);
      });
    }
  };
  function DS(e, t, a) {
    {
      var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, v = e.type, h = null;
      switch (f) {
        case E:
        case K:
        case x:
          h = v;
          break;
        case b:
          h = v.render;
          break;
      }
      if (zr === null)
        throw new Error("Expected resolveFamily to be set during hot reload.");
      var y = !1, g = !1;
      if (h !== null) {
        var D = zr(h);
        D !== void 0 && (a.has(D) ? g = !0 : t.has(D) && (f === x ? g = !0 : y = !0));
      }
      if (Fo !== null && (Fo.has(e) || i !== null && Fo.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
        var w = er(e, be);
        w !== null && Zt(w, e, be, mt);
      }
      u !== null && !g && DS(u, t, a), s !== null && DS(s, t, a);
    }
  }
  var tj = function(e, t) {
    {
      var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
        return u.current;
      }));
      return _S(e.current, i, a), a;
    }
  };
  function _S(e, t, a) {
    {
      var i = e.child, u = e.sibling, s = e.tag, f = e.type, v = null;
      switch (s) {
        case E:
        case K:
        case x:
          v = f;
          break;
        case b:
          v = f.render;
          break;
      }
      var h = !1;
      v !== null && t.has(v) && (h = !0), h ? nj(e, a) : i !== null && _S(i, t, a), u !== null && _S(u, t, a);
    }
  }
  function nj(e, t) {
    {
      var a = rj(e, t);
      if (a)
        return;
      for (var i = e; ; ) {
        switch (i.tag) {
          case F:
            t.add(i.stateNode);
            return;
          case M:
            t.add(i.stateNode.containerInfo);
            return;
          case L:
            t.add(i.stateNode.containerInfo);
            return;
        }
        if (i.return === null)
          throw new Error("Expected to reach root first.");
        i = i.return;
      }
    }
  }
  function rj(e, t) {
    for (var a = e, i = !1; ; ) {
      if (a.tag === F)
        i = !0, t.add(a.stateNode);
      else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === e)
        return i;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === e)
          return i;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
    return !1;
  }
  var kS;
  {
    kS = !1;
    try {
      var tw = Object.preventExtensions({});
    } catch (e) {
      kS = !0;
    }
  }
  function aj(e, t, a, i) {
    this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Se, this.subtreeFlags = Se, this.deletions = null, this.lanes = Q, this.childLanes = Q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !kS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
  }
  var yr = function(e, t, a, i) {
    return new aj(e, t, a, i);
  };
  function OS(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function ij(e) {
    return typeof e == "function" && !OS(e) && e.defaultProps === void 0;
  }
  function lj(e) {
    if (typeof e == "function")
      return OS(e) ? x : E;
    if (e != null) {
      var t = e.$$typeof;
      if (t === ce)
        return b;
      if (t === Me)
        return te;
    }
    return j;
  }
  function Eu(e, t) {
    var a = e.alternate;
    a === null ? (a = yr(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Se, a.subtreeFlags = Se, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & li, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
    var i = e.dependencies;
    switch (a.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
      case j:
      case E:
      case K:
        a.type = Ho(e.type);
        break;
      case x:
        a.type = wS(e.type);
        break;
      case b:
        a.type = bS(e.type);
        break;
    }
    return a;
  }
  function uj(e, t) {
    e.flags &= li | Pt;
    var a = e.alternate;
    if (a === null)
      e.childLanes = Q, e.lanes = t, e.child = null, e.subtreeFlags = Se, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
    else {
      e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Se, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
      var i = a.dependencies;
      e.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
    }
    return e;
  }
  function oj(e, t, a) {
    var i;
    return e === op ? (i = Pe, t === !0 && (i |= $t, i |= Ta)) : i = Ee, Gr && (i |= it), yr(L, null, null, i);
  }
  function MS(e, t, a, i, u, s) {
    var f = j, v = e;
    if (typeof e == "function")
      OS(e) ? (f = x, v = wS(v)) : v = Ho(v);
    else if (typeof e == "string")
      f = F;
    else
      e:
        switch (e) {
          case Sa:
            return dl(a.children, u, s, t);
          case $l:
            f = Ne, u |= $t, (u & Pe) !== Ee && (u |= Ta);
            break;
          case T:
            return sj(a, u, s, t);
          case je:
            return cj(a, u, s, t);
          case We:
            return fj(a, u, s, t);
          case Ct:
            return nw(a, u, s, t);
          case Tn:
          case It:
          case Ea:
          case Pu:
          case Et:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case W:
                  f = R;
                  break e;
                case ae:
                  f = _;
                  break e;
                case ce:
                  f = b, v = bS(v);
                  break e;
                case Me:
                  f = te;
                  break e;
                case ge:
                  f = pe, v = null;
                  break e;
              }
            var h = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Oe(i) : null;
              y && (h += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + h));
          }
        }
    var g = yr(f, a, t, u);
    return g.elementType = e, g.type = v, g.lanes = s, g._debugOwner = i, g;
  }
  function LS(e, t, a) {
    var i = null;
    i = e._owner;
    var u = e.type, s = e.key, f = e.props, v = MS(u, s, f, i, t, a);
    return v._debugSource = e._source, v._debugOwner = e._owner, v;
  }
  function dl(e, t, a, i) {
    var u = yr(re, e, i, t);
    return u.lanes = a, u;
  }
  function sj(e, t, a, i) {
    typeof e.id != "string" && d('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
    var u = yr(B, e, i, t | it);
    return u.elementType = T, u.lanes = a, u.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, u;
  }
  function cj(e, t, a, i) {
    var u = yr(I, e, i, t);
    return u.elementType = je, u.lanes = a, u;
  }
  function fj(e, t, a, i) {
    var u = yr(nt, e, i, t);
    return u.elementType = We, u.lanes = a, u;
  }
  function nw(e, t, a, i) {
    var u = yr(Te, e, i, t);
    u.elementType = Ct, u.lanes = a;
    var s = { isHidden: !1 };
    return u.stateNode = s, u;
  }
  function NS(e, t, a) {
    var i = yr(Y, e, null, t);
    return i.lanes = a, i;
  }
  function dj() {
    var e = yr(F, null, null, Ee);
    return e.elementType = "DELETED", e;
  }
  function pj(e) {
    var t = yr(xe, null, null, Ee);
    return t.stateNode = e, t;
  }
  function zS(e, t, a) {
    var i = e.children !== null ? e.children : [], u = yr(M, i, e.key, t);
    return u.lanes = a, u.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      // Used by persistent updates
      implementation: e.implementation
    }, u;
  }
  function rw(e, t) {
    return e === null && (e = yr(j, null, null, Ee)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
  }
  function vj(e, t, a, i, u) {
    this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = hy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = ln, this.eventTimes = Fm(Q), this.expirationTimes = Fm(mt), this.pendingLanes = Q, this.suspendedLanes = Q, this.pingedLanes = Q, this.expiredLanes = Q, this.mutableReadLanes = Q, this.finishedLanes = Q, this.entangledLanes = Q, this.entanglements = Fm(Q), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
    {
      this.memoizedUpdaters = /* @__PURE__ */ new Set();
      for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < hm; f++)
        s.push(/* @__PURE__ */ new Set());
    }
    switch (t) {
      case op:
        this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
        break;
      case Ji:
        this._debugRootType = a ? "hydrate()" : "render()";
        break;
    }
  }
  function aw(e, t, a, i, u, s, f, v, h, y) {
    var g = new vj(e, t, a, v, h), D = oj(t, s);
    g.current = D, D.stateNode = g;
    {
      var w = {
        element: i,
        isDehydrated: a,
        cache: null,
        // not enabled yet
        transitions: null,
        pendingSuspenseBoundaries: null
      };
      D.memoizedState = w;
    }
    return Vy(D), g;
  }
  var US = "18.2.0";
  function hj(e, t, a) {
    var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    return Va(i), {
      // This tag allow us to uniquely identify this as a React Portal
      $$typeof: Qr,
      key: i == null ? null : "" + i,
      children: e,
      containerInfo: t,
      implementation: a
    };
  }
  var AS, jS;
  AS = !1, jS = {};
  function iw(e) {
    if (!e)
      return mr;
    var t = Zu(e), a = Zz(t);
    if (t.tag === x) {
      var i = t.type;
      if (ba(i))
        return MR(t, i, a);
    }
    return a;
  }
  function mj(e, t) {
    {
      var a = Zu(e);
      if (a === void 0) {
        if (typeof e.render == "function")
          throw new Error("Unable to find node on an unmounted component.");
        var i = Object.keys(e).join(",");
        throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
      }
      var u = t1(a);
      if (u === null)
        return null;
      if (u.mode & $t) {
        var s = Oe(a) || "Component";
        if (!jS[s]) {
          jS[s] = !0;
          var f = xn;
          try {
            Dt(u), a.mode & $t ? d("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : d("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
          } finally {
            f ? Dt(f) : nn();
          }
        }
      }
      return u.stateNode;
    }
  }
  function lw(e, t, a, i, u, s, f, v) {
    var h = !1, y = null;
    return aw(e, t, h, y, a, i, u, s, f);
  }
  function uw(e, t, a, i, u, s, f, v, h, y) {
    var g = !0, D = aw(a, i, g, e, u, s, f, v, h);
    D.context = iw(null);
    var w = D.current, z = $n(), U = cl(w), P = hi(z, U);
    return P.callback = t != null ? t : null, nl(w, P, U), T2(D, U, z), D;
  }
  function lf(e, t, a, i) {
    YO(t, e);
    var u = t.current, s = $n(), f = cl(u);
    fM(f);
    var v = iw(a);
    t.context === null ? t.context = v : t.pendingContext = v, Il && xn !== null && !AS && (AS = !0, d(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Oe(xn) || "Unknown"));
    var h = hi(s, f);
    h.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && d("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), h.callback = i);
    var y = nl(u, h, f);
    return y !== null && (Zt(y, u, f, s), Cp(y, u, f)), f;
  }
  function dv(e) {
    var t = e.current;
    if (!t.child)
      return null;
    switch (t.child.tag) {
      case F:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function yj(e) {
    switch (e.tag) {
      case L: {
        var t = e.stateNode;
        if (Ld(t)) {
          var a = EM(t);
          D2(t, a);
        }
        break;
      }
      case I: {
        Si(function() {
          var u = er(e, be);
          if (u !== null) {
            var s = $n();
            Zt(u, e, be, s);
          }
        });
        var i = be;
        FS(e, i);
        break;
      }
    }
  }
  function ow(e, t) {
    var a = e.memoizedState;
    a !== null && a.dehydrated !== null && (a.retryLane = bM(a.retryLane, t));
  }
  function FS(e, t) {
    ow(e, t);
    var a = e.alternate;
    a && ow(a, t);
  }
  function gj(e) {
    if (e.tag === I) {
      var t = Qs, a = er(e, t);
      if (a !== null) {
        var i = $n();
        Zt(a, e, t, i);
      }
      FS(e, t);
    }
  }
  function Sj(e) {
    if (e.tag === I) {
      var t = cl(e), a = er(e, t);
      if (a !== null) {
        var i = $n();
        Zt(a, e, t, i);
      }
      FS(e, t);
    }
  }
  function sw(e) {
    var t = AO(e);
    return t === null ? null : t.stateNode;
  }
  var cw = function(e) {
    return null;
  };
  function Ej(e) {
    return cw(e);
  }
  var fw = function(e) {
    return !1;
  };
  function Cj(e) {
    return fw(e);
  }
  var dw = null, pw = null, vw = null, hw = null, mw = null, yw = null, gw = null, Sw = null, Ew = null;
  {
    var Cw = function(e, t, a) {
      var i = t[a], u = qe(e) ? e.slice() : Fe({}, e);
      return a + 1 === t.length ? (qe(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = Cw(e[i], t, a + 1), u);
    }, Rw = function(e, t) {
      return Cw(e, t, 0);
    }, Tw = function(e, t, a, i) {
      var u = t[i], s = qe(e) ? e.slice() : Fe({}, e);
      if (i + 1 === t.length) {
        var f = a[i];
        s[f] = s[u], qe(s) ? s.splice(u, 1) : delete s[u];
      } else
        s[u] = Tw(
          // $FlowFixMe number or string is fine here
          e[u],
          t,
          a,
          i + 1
        );
      return s;
    }, xw = function(e, t, a) {
      if (t.length !== a.length) {
        p("copyWithRename() expects paths of the same length");
        return;
      } else
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            p("copyWithRename() expects paths to be the same except for the deepest key");
            return;
          }
      return Tw(e, t, a, 0);
    }, ww = function(e, t, a, i) {
      if (a >= t.length)
        return i;
      var u = t[a], s = qe(e) ? e.slice() : Fe({}, e);
      return s[u] = ww(e[u], t, a + 1, i), s;
    }, bw = function(e, t, a) {
      return ww(e, t, 0, a);
    }, HS = function(e, t) {
      for (var a = e.memoizedState; a !== null && t > 0; )
        a = a.next, t--;
      return a;
    };
    dw = function(e, t, a, i) {
      var u = HS(e, t);
      if (u !== null) {
        var s = bw(u.memoizedState, a, i);
        u.memoizedState = s, u.baseState = s, e.memoizedProps = Fe({}, e.memoizedProps);
        var f = er(e, be);
        f !== null && Zt(f, e, be, mt);
      }
    }, pw = function(e, t, a) {
      var i = HS(e, t);
      if (i !== null) {
        var u = Rw(i.memoizedState, a);
        i.memoizedState = u, i.baseState = u, e.memoizedProps = Fe({}, e.memoizedProps);
        var s = er(e, be);
        s !== null && Zt(s, e, be, mt);
      }
    }, vw = function(e, t, a, i) {
      var u = HS(e, t);
      if (u !== null) {
        var s = xw(u.memoizedState, a, i);
        u.memoizedState = s, u.baseState = s, e.memoizedProps = Fe({}, e.memoizedProps);
        var f = er(e, be);
        f !== null && Zt(f, e, be, mt);
      }
    }, hw = function(e, t, a) {
      e.pendingProps = bw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var i = er(e, be);
      i !== null && Zt(i, e, be, mt);
    }, mw = function(e, t) {
      e.pendingProps = Rw(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var a = er(e, be);
      a !== null && Zt(a, e, be, mt);
    }, yw = function(e, t, a) {
      e.pendingProps = xw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var i = er(e, be);
      i !== null && Zt(i, e, be, mt);
    }, gw = function(e) {
      var t = er(e, be);
      t !== null && Zt(t, e, be, mt);
    }, Sw = function(e) {
      cw = e;
    }, Ew = function(e) {
      fw = e;
    };
  }
  function Rj(e) {
    var t = t1(e);
    return t === null ? null : t.stateNode;
  }
  function Tj(e) {
    return null;
  }
  function xj() {
    return xn;
  }
  function wj(e) {
    var t = e.findFiberByHostInstance, a = l.ReactCurrentDispatcher;
    return IO({
      bundleType: e.bundleType,
      version: e.version,
      rendererPackageName: e.rendererPackageName,
      rendererConfig: e.rendererConfig,
      overrideHookState: dw,
      overrideHookStateDeletePath: pw,
      overrideHookStateRenamePath: vw,
      overrideProps: hw,
      overridePropsDeletePath: mw,
      overridePropsRenamePath: yw,
      setErrorHandler: Sw,
      setSuspenseHandler: Ew,
      scheduleUpdate: gw,
      currentDispatcherRef: a,
      findHostInstanceByFiber: Rj,
      findFiberByHostInstance: t || Tj,
      // React Refresh
      findHostInstancesForRefresh: tj,
      scheduleRefresh: J2,
      scheduleRoot: ej,
      setRefreshHandler: Z2,
      // Enables DevTools to append owner stacks to error messages in DEV mode.
      getCurrentFiber: xj,
      // Enables DevTools to detect reconciler version rather than renderer version
      // which may not match for third party renderers.
      reconcilerVersion: US
    });
  }
  var Dw = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : function(e) {
    console.error(e);
  };
  function PS(e) {
    this._internalRoot = e;
  }
  pv.prototype.render = PS.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw new Error("Cannot update an unmounted root.");
    {
      typeof arguments[1] == "function" ? d("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : vv(arguments[1]) ? d("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] != "undefined" && d("You passed a second argument to root.render(...) but it only accepts one argument.");
      var a = t.containerInfo;
      if (a.nodeType !== Ht) {
        var i = sw(t.current);
        i && i.parentNode !== a && d("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
      }
    }
    lf(e, t, null, null);
  }, pv.prototype.unmount = PS.prototype.unmount = function() {
    typeof arguments[0] == "function" && d("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Hx() && d("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Si(function() {
        lf(null, e, null, null);
      }), bR(t);
    }
  };
  function bj(e, t) {
    if (!vv(e))
      throw new Error("createRoot(...): Target container is not a DOM element.");
    _w(e);
    var a = !1, i = !1, u = "", s = Dw;
    t != null && (t.hydrate ? p("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ga && d(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
    var f = lw(e, op, null, a, i, u, s);
    tp(f.current, e);
    var v = e.nodeType === Ht ? e.parentNode : e;
    return pc(v), new PS(f);
  }
  function pv(e) {
    this._internalRoot = e;
  }
  function Dj(e) {
    e && BM(e);
  }
  pv.prototype.unstable_scheduleHydration = Dj;
  function _j(e, t, a) {
    if (!vv(e))
      throw new Error("hydrateRoot(...): Target container is not a DOM element.");
    _w(e), t === void 0 && d("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
    var i = a != null ? a : null, u = a != null && a.hydratedSources || null, s = !1, f = !1, v = "", h = Dw;
    a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (v = a.identifierPrefix), a.onRecoverableError !== void 0 && (h = a.onRecoverableError));
    var y = uw(t, null, e, op, i, s, f, v, h);
    if (tp(y.current, e), pc(e), u)
      for (var g = 0; g < u.length; g++) {
        var D = u[g];
        AU(y, D);
      }
    return new pv(y);
  }
  function vv(e) {
    return !!(e && (e.nodeType === Zn || e.nodeType === ni || e.nodeType === Wh || !ke));
  }
  function uf(e) {
    return !!(e && (e.nodeType === Zn || e.nodeType === ni || e.nodeType === Wh || e.nodeType === Ht && e.nodeValue === " react-mount-point-unstable "));
  }
  function _w(e) {
    e.nodeType === Zn && e.tagName && e.tagName.toUpperCase() === "BODY" && d("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), xc(e) && (e._reactRootContainer ? d("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : d("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
  }
  var kj = l.ReactCurrentOwner, kw;
  kw = function(e) {
    if (e._reactRootContainer && e.nodeType !== Ht) {
      var t = sw(e._reactRootContainer.current);
      t && t.parentNode !== e && d("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
    }
    var a = !!e._reactRootContainer, i = $S(e), u = !!(i && qi(i));
    u && !a && d("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Zn && e.tagName && e.tagName.toUpperCase() === "BODY" && d("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
  };
  function $S(e) {
    return e ? e.nodeType === ni ? e.documentElement : e.firstChild : null;
  }
  function Ow() {
  }
  function Oj(e, t, a, i, u) {
    if (u) {
      if (typeof i == "function") {
        var s = i;
        i = function() {
          var w = dv(f);
          s.call(w);
        };
      }
      var f = uw(
        t,
        i,
        e,
        Ji,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        Ow
      );
      e._reactRootContainer = f, tp(f.current, e);
      var v = e.nodeType === Ht ? e.parentNode : e;
      return pc(v), Si(), f;
    } else {
      for (var h; h = e.lastChild; )
        e.removeChild(h);
      if (typeof i == "function") {
        var y = i;
        i = function() {
          var w = dv(g);
          y.call(w);
        };
      }
      var g = lw(
        e,
        Ji,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        Ow
      );
      e._reactRootContainer = g, tp(g.current, e);
      var D = e.nodeType === Ht ? e.parentNode : e;
      return pc(D), Si(function() {
        lf(t, g, a, i);
      }), g;
    }
  }
  function Mj(e, t) {
    e !== null && typeof e != "function" && d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
  }
  function hv(e, t, a, i, u) {
    kw(a), Mj(u === void 0 ? null : u, "render");
    var s = a._reactRootContainer, f;
    if (!s)
      f = Oj(a, t, e, u, i);
    else {
      if (f = s, typeof u == "function") {
        var v = u;
        u = function() {
          var h = dv(f);
          v.call(h);
        };
      }
      lf(t, f, e, u);
    }
    return dv(f);
  }
  function Lj(e) {
    {
      var t = kj.current;
      if (t !== null && t.stateNode !== null) {
        var a = t.stateNode._warnedAboutRefsInRender;
        a || d("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ke(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
      }
    }
    return e == null ? null : e.nodeType === Zn ? e : mj(e, "findDOMNode");
  }
  function Nj(e, t, a) {
    if (d("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !uf(t))
      throw new Error("Target container is not a DOM element.");
    {
      var i = xc(t) && t._reactRootContainer === void 0;
      i && d("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
    }
    return hv(null, e, t, !0, a);
  }
  function zj(e, t, a) {
    if (d("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !uf(t))
      throw new Error("Target container is not a DOM element.");
    {
      var i = xc(t) && t._reactRootContainer === void 0;
      i && d("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
    }
    return hv(null, e, t, !1, a);
  }
  function Uj(e, t, a, i) {
    if (d("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !uf(a))
      throw new Error("Target container is not a DOM element.");
    if (e == null || !kO(e))
      throw new Error("parentComponent must be a valid React Component");
    return hv(e, t, a, !1, i);
  }
  function Aj(e) {
    if (!uf(e))
      throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
    {
      var t = xc(e) && e._reactRootContainer === void 0;
      t && d("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
    }
    if (e._reactRootContainer) {
      {
        var a = $S(e), i = a && !qi(a);
        i && d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
      }
      return Si(function() {
        hv(null, null, e, !1, function() {
          e._reactRootContainer = null, bR(e);
        });
      }), !0;
    } else {
      {
        var u = $S(e), s = !!(u && qi(u)), f = e.nodeType === Zn && uf(e.parentNode) && !!e.parentNode._reactRootContainer;
        s && d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
      }
      return !1;
    }
  }
  NM(yj), UM(gj), AM(Sj), jM(Xr), FM(OM), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
  Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
  Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && d("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), gO(HN), CO(gS, _2, Si);
  function jj(e, t) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (!vv(t))
      throw new Error("Target container is not a DOM element.");
    return hj(e, t, null, a);
  }
  function Fj(e, t, a, i) {
    return Uj(e, t, a, i);
  }
  var VS = {
    usingClientEntryPoint: !1,
    // Keep in sync with ReactTestUtils.js.
    // This is an array for better minification.
    Events: [qi, mo, np, BC, IC, gS]
  };
  function Hj(e, t) {
    return VS.usingClientEntryPoint || d('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), bj(e, t);
  }
  function Pj(e, t, a) {
    return VS.usingClientEntryPoint || d('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), _j(e, t, a);
  }
  function $j(e) {
    return Hx() && d("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Si(e);
  }
  var Vj = wj({ findFiberByHostInstance: iu, bundleType: 1, version: US, rendererPackageName: "react-dom" });
  if (!Vj && tn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
    var Mw = window.location.protocol;
    /^(https?|file):$/.test(Mw) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Mw === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
  }
  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = VS, exports.createPortal = jj, exports.createRoot = Hj, exports.findDOMNode = Lj, exports.flushSync = $j, exports.hydrate = Nj, exports.hydrateRoot = Pj, exports.render = zj, exports.unmountComponentAtNode = Aj, exports.unstable_batchedUpdates = gS, exports.unstable_renderSubtreeIntoContainer = Fj, exports.version = US, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}();
const MP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), LP = /* @__PURE__ */ uD(MP);
function kk() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kk);
    } catch (n) {
      console.error(n);
    }
  }
}
process.env.NODE_ENV === "production" ? (kk(), O0.exports = OP) : O0.exports = LP;
var NP = O0.exports;
const zP = /* @__PURE__ */ lD(NP), UP = ME.createElement, Nn = ME.useState, Sf = ME.useEffect;
let Ri;
window.selectedTags = [];
window.selectedContent = [];
const AP = () => {
  const [n, r] = Nn([]), [l, o] = Nn([]), [c, p] = Nn([]), [d, S] = Nn([]), [E, x] = Nn([]);
  Nn(3), Nn(3), Nn(3), Nn(3), Nn(3);
  const [j, L] = Nn([]), [M, F] = Nn([]), [Y, re] = Nn(""), [Ne, _] = Nn({}), [R, b] = Nn([]), [B, I] = Nn(6);
  Sf(() => {
    window.selectedTags = j;
  }, [j]), Sf(() => {
    window.selectedContent = M;
  }, [M]);
  const te = () => BS(void 0, null, function* () {
    const Z = yield Ri.getJSON("https://di-marketing-server-iuzlr.ondigitalocean.app/api/tags");
    return _(Z), Z;
  });
  Sf(() => BS(void 0, null, function* () {
    const Z = yield Ri.getJSON("https://di-marketing-server-iuzlr.ondigitalocean.app/api/resources");
    b(Z);
  }), []), Sf(() => {
    te().then((Z) => {
      var Te = setInterval(function() {
        if (typeof window.$ != "undefined") {
          Ri = window.$, clearInterval(Te);
          debugger;
          window.eventBus.on("checked", function(Ue, ht) {
            let Lt = [...window.selectedTags];
            debugger;
            let me = [...window.selectedContent];
            if (["ce webinar", "blog", "podcast", "ebook", "testimonial"].includes(Ue.toLowerCase())) {
              debugger;
              ht ? me.includes(Ue.toLowerCase()) || me.push(Ue.toLowerCase()) : me.includes(Ue.toLowerCase()) && (me = me.filter((Wn) => Wn != Ue.toLowerCase())), F([...me]);
            } else {
              debugger;
              ht ? Lt.includes(Ue.toLowerCase()) || Lt.push(Ue.toLowerCase()) : Lt.includes(Ue.toLowerCase()) && (Lt = Lt.filter((Wn) => Wn != Ue.toLowerCase())), L([...Lt]);
            }
            debugger;
            console.log("Inside `my-event`");
          }), Ri(".w-checkbox.tag.blog.new input").change(function() {
            debugger;
            const Ue = Ri(this).siblings("span").text();
            window.eventBus.emit("checked", null, Ue, this.checked);
          }), Ri(".search-input-new.w-input").keyup(function(Ue) {
            const ht = Ri(this).val();
            re(ht);
          }), Ri(".search-input-new.w-input").focusout(function() {
            const Ue = Ri(this).val();
            re(Ue);
          });
        }
      }, 10);
    });
  }, []), Sf(() => {
    b([...n, ...l, ...c, ...d, ...E]);
  }, [n, l, c, d, E]);
  const K = (Z) => /* @__PURE__ */ q.jsx("div", {
    role: "listitem",
    class: "blog-item w-dyn-item",
    children: /* @__PURE__ */ q.jsxs("a", {
      href: Z.link,
      class: "blog-link-new w-inline-block",
      children: [/* @__PURE__ */ q.jsx("div", {
        class: "blog-img-wrap",
        children: /* @__PURE__ */ q.jsx("img", {
          src: Z.image,
          alt: "",
          sizes: "(max-width: 479px) 84vw, (max-width: 767px) 33vw, (max-width: 991px) 29vw, (max-width: 1279px) 21vw, 278px",
          class: "resource-image"
        })
      }), /* @__PURE__ */ q.jsx("div", {
        class: "pill-label",
        children: /* @__PURE__ */ q.jsx("div", {
          "fs-cmsfilter-field": "type",
          class: "text-block-6",
          children: "Blog"
        })
      }), /* @__PURE__ */ q.jsxs("div", {
        class: "paragraph-podcast-meta",
        children: [/* @__PURE__ */ q.jsx("p", {
          "fs-cmsfilter-field": "description",
          class: "paragraph blog",
          children: Z.description
        }), /* @__PURE__ */ q.jsx("div", {
          "fs-cmsfilter-field": "title",
          class: "blog-title-new",
          children: Z.title
        }), /* @__PURE__ */ q.jsxs("div", {
          class: "info-wrap-new",
          children: [/* @__PURE__ */ q.jsx("p", {
            "fs-cmsfilter-field": "author",
            class: "paragraph blog blog-author",
            children: Z.author
          }), /* @__PURE__ */ q.jsx("div", {
            class: "blog-line",
            children: "-"
          }), /* @__PURE__ */ q.jsx("p", {
            class: "paragraph blog date",
            children: Z.date
          })]
        }), /* @__PURE__ */ q.jsx("div", {
          "fs-cmsfilter-field": "tags",
          class: "tags",
          children: Z.tags
        })]
      }), /* @__PURE__ */ q.jsx("div", {
        class: "card-btn-wrapper",
        children: /* @__PURE__ */ q.jsx("div", {
          class: "card-btn line-btn blog-btn",
          children: "Read More"
        })
      })]
    })
  }, Z.title), pe = (Z) => /* @__PURE__ */ q.jsx("div", {
    role: "listitem",
    class: "blog-item w-dyn-item",
    children: /* @__PURE__ */ q.jsxs("a", {
      href: Z.link,
      class: "blog-link-new w-inline-block",
      children: [/* @__PURE__ */ q.jsx("div", {
        class: "blog-img-wrap",
        children: /* @__PURE__ */ q.jsx("img", {
          src: Z.image,
          alt: "",
          sizes: "(max-width: 479px) 84vw, (max-width: 767px) 33vw, (max-width: 991px) 29vw, (max-width: 1279px) 21vw, 278px",
          class: "resource-image"
        })
      }), /* @__PURE__ */ q.jsx("div", {
        class: "pill-label",
        children: /* @__PURE__ */ q.jsx("div", {
          "fs-cmsfilter-field": "type",
          class: "text-block-6",
          children: "Podcast"
        })
      }), /* @__PURE__ */ q.jsxs("div", {
        class: "paragraph-podcast-meta",
        children: [/* @__PURE__ */ q.jsx("p", {
          "fs-cmsfilter-field": "description",
          class: "paragraph podcast-meta",
          children: Z.description
        }), /* @__PURE__ */ q.jsx("div", {
          "fs-cmsfilter-field": "title",
          class: "blog-title-new",
          children: Z.title
        }), /* @__PURE__ */ q.jsxs("div", {
          class: "info-wrap-new",
          children: [/* @__PURE__ */ q.jsx("p", {
            "fs-cmsfilter-field": "author",
            class: "paragraph blog blog-author",
            children: Z.author
          }), /* @__PURE__ */ q.jsx("div", {
            class: "blog-line",
            children: "-"
          }), /* @__PURE__ */ q.jsxs("p", {
            "fs-cmsfilter-field": "author",
            class: "paragraph blog blog-author",
            children: ["Ep. #", Z.episode]
          }), /* @__PURE__ */ q.jsx("div", {
            class: "blog-line",
            children: "-"
          }), /* @__PURE__ */ q.jsx("p", {
            class: "paragraph blog date",
            children: Z.date
          })]
        }), /* @__PURE__ */ q.jsx("div", {
          "fs-cmsfilter-field": "tags",
          class: "tags",
          children: Z.tags
        })]
      }), /* @__PURE__ */ q.jsx("div", {
        class: "card-btn-wrapper",
        children: /* @__PURE__ */ q.jsx("div", {
          class: "card-btn line-btn blog-btn",
          children: "Read More"
        })
      })]
    })
  }, Z.title), Qe = (Z) => /* @__PURE__ */ q.jsx("div", {
    role: "listitem",
    class: "blog-item w-dyn-item",
    children: /* @__PURE__ */ q.jsxs("a", {
      href: Z.link,
      class: "blog-link-new w-inline-block",
      children: [/* @__PURE__ */ q.jsx("div", {
        class: "blog-img-wrap",
        children: /* @__PURE__ */ q.jsx("img", {
          src: Z.image,
          alt: "",
          sizes: "(max-width: 479px) 84vw, (max-width: 767px) 33vw, (max-width: 991px) 29vw, (max-width: 1279px) 21vw, 278px",
          class: "resource-image"
        })
      }), /* @__PURE__ */ q.jsx("div", {
        class: "pill-label",
        children: /* @__PURE__ */ q.jsx("div", {
          "fs-cmsfilter-field": "type",
          class: "text-block-6",
          children: "Webinar"
        })
      }), /* @__PURE__ */ q.jsxs("div", {
        class: "paragraph-podcast-meta",
        children: [/* @__PURE__ */ q.jsx("p", {
          "fs-cmsfilter-field": "description",
          class: "paragraph podcast-meta",
          children: Z.description
        }), /* @__PURE__ */ q.jsx("div", {
          "fs-cmsfilter-field": "title",
          class: "blog-title-new",
          children: Z.title
        }), /* @__PURE__ */ q.jsxs("div", {
          class: "info-wrap-new",
          children: [/* @__PURE__ */ q.jsx("p", {
            "fs-cmsfilter-field": "author",
            class: "paragraph blog blog-author",
            children: Z.author
          }), /* @__PURE__ */ q.jsx("div", {
            class: "blog-line",
            children: "-"
          }), /* @__PURE__ */ q.jsx("p", {
            class: "paragraph blog date",
            children: Z.date
          })]
        }), /* @__PURE__ */ q.jsx("div", {
          "fs-cmsfilter-field": "tags",
          class: "tags",
          children: Z.tags
        })]
      }), /* @__PURE__ */ q.jsx("div", {
        class: "card-btn-wrapper",
        children: /* @__PURE__ */ q.jsx("div", {
          class: "card-btn line-btn blog-btn",
          children: "Read More"
        })
      })]
    })
  }, Z.title), xe = (Z) => /* @__PURE__ */ q.jsx("div", {
    role: "listitem",
    class: "blog-item w-dyn-item",
    children: /* @__PURE__ */ q.jsxs("a", {
      href: Z.link,
      class: "blog-link-new w-inline-block",
      children: [/* @__PURE__ */ q.jsx("div", {
        class: "blog-img-wrap",
        children: /* @__PURE__ */ q.jsx("img", {
          src: Z.image,
          alt: "",
          sizes: "(max-width: 479px) 84vw, (max-width: 767px) 33vw, (max-width: 991px) 29vw, (max-width: 1279px) 21vw, 278px",
          class: "resource-image"
        })
      }), /* @__PURE__ */ q.jsx("div", {
        class: "pill-label",
        children: /* @__PURE__ */ q.jsx("div", {
          "fs-cmsfilter-field": "type",
          class: "text-block-6",
          children: "Ebook"
        })
      }), /* @__PURE__ */ q.jsxs("div", {
        class: "paragraph-podcast-meta",
        children: [/* @__PURE__ */ q.jsx("p", {
          "fs-cmsfilter-field": "description",
          class: "paragraph podcast-meta",
          children: Z.description
        }), /* @__PURE__ */ q.jsx("div", {
          "fs-cmsfilter-field": "title",
          class: "blog-title-new",
          children: Z.title
        }), /* @__PURE__ */ q.jsxs("div", {
          class: "info-wrap-new",
          children: [/* @__PURE__ */ q.jsx("p", {
            "fs-cmsfilter-field": "author",
            class: "paragraph blog blog-author",
            children: Z.author
          }), /* @__PURE__ */ q.jsx("div", {
            class: "blog-line"
          }), /* @__PURE__ */ q.jsx("p", {
            class: "paragraph blog date",
            children: Z.date
          })]
        }), /* @__PURE__ */ q.jsx("div", {
          "fs-cmsfilter-field": "tags",
          class: "tags",
          children: Z.tags
        })]
      }), /* @__PURE__ */ q.jsx("div", {
        class: "card-btn-wrapper",
        children: /* @__PURE__ */ q.jsx("div", {
          class: "card-btn line-btn blog-btn",
          children: "Read More"
        })
      })]
    })
  }, Z.title), nt = (Z) => /* @__PURE__ */ q.jsx("div", {
    role: "listitem",
    class: "blog-item w-dyn-item",
    children: /* @__PURE__ */ q.jsxs("a", {
      href: Z.link,
      class: "blog-link-new w-inline-block",
      children: [/* @__PURE__ */ q.jsx("div", {
        class: "blog-img-wrap",
        children: /* @__PURE__ */ q.jsx("img", {
          src: Z.image,
          alt: "",
          sizes: "(max-width: 479px) 84vw, (max-width: 767px) 33vw, (max-width: 991px) 29vw, (max-width: 1279px) 21vw, 278px",
          class: "resource-image"
        })
      }), /* @__PURE__ */ q.jsx("div", {
        class: "pill-label",
        children: /* @__PURE__ */ q.jsx("div", {
          "fs-cmsfilter-field": "type",
          class: "text-block-6",
          children: "Testimonial"
        })
      }), /* @__PURE__ */ q.jsxs("div", {
        class: "paragraph-podcast-meta",
        children: [/* @__PURE__ */ q.jsx("p", {
          "fs-cmsfilter-field": "description",
          class: "paragraph podcast-meta",
          children: Z.description
        }), /* @__PURE__ */ q.jsx("div", {
          "fs-cmsfilter-field": "title",
          class: "blog-title-new",
          children: Z.title
        }), /* @__PURE__ */ q.jsxs("div", {
          class: "info-wrap-new",
          children: [/* @__PURE__ */ q.jsx("p", {
            "fs-cmsfilter-field": "author",
            class: "paragraph blog blog-author",
            children: Z.author
          }), /* @__PURE__ */ q.jsx("div", {
            class: "blog-line"
          }), /* @__PURE__ */ q.jsx("p", {
            class: "paragraph blog date",
            children: Z.date
          })]
        }), /* @__PURE__ */ q.jsx("div", {
          "fs-cmsfilter-field": "tags",
          class: "tags",
          children: Z.tags
        })]
      }), /* @__PURE__ */ q.jsx("div", {
        class: "card-btn-wrapper",
        children: /* @__PURE__ */ q.jsx("div", {
          class: "card-btn line-btn blog-btn",
          children: "Read More"
        })
      })]
    })
  }, Z.title);
  return /* @__PURE__ */ q.jsx(q.Fragment, {
    children: /* @__PURE__ */ q.jsx("div", {
      "fs-cmsfilter-element": "list",
      class: "blog-collection-list-wrapper blog-wrapper w-dyn-list",
      style: {
        display: "block"
      },
      children: /* @__PURE__ */ q.jsxs("div", {
        role: "list",
        class: "blog-list w-dyn-items",
        children: [R.filter((Z) => {
          var Te;
          if (j.length == 0)
            return !0;
          for (const Ue of j)
            if (!((Te = Z == null ? void 0 : Z.tags) != null && Te.includes(Ue)))
              return !1;
          return !0;
        }).filter((Z) => {
          try {
            return Y != "" ? !!(Z.title.toLowerCase().includes(Y.toLowerCase()) || Z.description.toLowerCase().includes(Y.toLowerCase())) : !0;
          } catch (Te) {
            debugger;
            return console.error(Te), !1;
          }
        }).sort((Z, Te) => window.moment(Te.sortDate).format("YYYYMMDD") - window.moment(Z.sortDate).format("YYYYMMDD")).filter((Z, Te) => M.length > 0 || j.length > 0 || Y.length > 0 ? !0 : Te < B).map((Z) => {
          let Te = null;
          return Z.contentType == "blog" && (M.length == 0 || M.includes("blog")) && (Te = K(Z)), Z.contentType == "podcast" && (M.length == 0 || M.includes("podcast")) && (Te = pe(Z)), Z.contentType == "webinar" && (M.length == 0 || M.includes("ce webinar")) && (Te = Qe(Z)), Z.contentType == "ebook" && (M.length == 0 || M.includes("ebook")) && (Te = xe(Z)), Z.contentType == "testimonial" && (M.length == 0 || M.includes("testimonial")) && (Te = nt(Z)), Te == null ? null : /* @__PURE__ */ q.jsx("span", {
            children: Te
          }, Z.id);
        }), j.length == 0 && M.length == 0 && Y.length == 0 && /* @__PURE__ */ q.jsx(q.Fragment, {
          children: /* @__PURE__ */ q.jsx("div", {
            class: "card-btn-wrapper resources-load-more-btn",
            style: {
              marginTop: "5px"
            },
            onClick: () => I(B + 6),
            children: /* @__PURE__ */ q.jsx("div", {
              class: "card-btn line-btn blog-btn",
              style: {
                backgroundColor: "#002856",
                color: "white",
                marginTop: "20px"
              },
              children: "Load More"
            })
          })
        })]
      })
    })
  });
}, jP = document.querySelector("#root"), FP = zP.createRoot(jP);
FP.render(UP(AP));
