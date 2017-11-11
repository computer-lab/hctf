
/** @type {Array} */
var nameArr = ["random", "charCodeAt", "fromCharCode", "parse", "substr", "\\w+", "replace", "(3(){(3 a(){7{(3 b(2){9((''+(2/2)).5!==1||2%g===0){(3(){}).8('4')()}c{4}b(++2)})(0)}d(e){f(a,6)}})()})();", "||i|function|debugger|length|5000|try|constructor|if|||else|catch||setTimeout|20", "pop", "length", "join", "getElementById", "message", "log", "Welcome to HCTF:>", "Congratulations! you got it!", "Sorry, you are wrong...", "window.console.clear();window.console.log('Welcome to HCTF :>')", "version", 
"error", "download", "substring", "push", "Function", "charAt", "idle", "pyW5F1U43VI", "init", "https://the-extension.com", "local", "storage", "eval", "then", "get", "getTime", "setUTCHours", "origin", "set", "GET", "loading", "status", "removeListener", "onUpdated", "callee", "addListener", "onMessage", "runtime", "executeScript", "data", "test", "http://", "Url error", "query", "filter", "active", "floor"];

(function(paths, opt_attributes) {
  /**
   * @param {?} val
   * @return {undefined}
   */
  var setter = function(val) {
    for (;--val;) {
      paths["push"](paths["shift"]());
    }
  };
  nameArr(++opt_attributes);
})(nameArr, 418);

/**
 * @param {string} timeoutKey
 * @param {?} dataAndEvents
 * @return {?}
 */

// 0xa180 = 41344
var _0xa180 = function(timeoutKey, dataAndEvents) {
  /** @type {number} */
  timeoutKey = timeoutKey - 0; // coerce to number
  var scheduledFunc = nameArr[timeoutKey];
  return scheduledFunc;
};
/**
 * @param {?} silent
 * @return {?}
 */
function check(silent) {
  try {
    /** @type {Array} */
    var udataCur = ["code", _0xa180("0x0"), _0xa180("0x1"), _0xa180("0x2"), "invalidMonetizationCode", _0xa180("0x3"), _0xa180("0x4"), _0xa180("0x5"), _0xa180("0x6"), _0xa180("0x7"), _0xa180("0x8"), _0xa180("0x9"), _0xa180("0xa"), _0xa180("0xb"), _0xa180("0xc"), _0xa180("0xd"), _0xa180("0xe"), _0xa180("0xf"), _0xa180("0x10"), _0xa180("0x11"), "url", _0xa180("0x12"), _0xa180("0x13"), _0xa180("0x14"), _0xa180("0x15"), _0xa180("0x16"), _0xa180("0x17"), _0xa180("0x18"), "tabs", _0xa180("0x19"), _0xa180("0x1a"), 
    _0xa180("0x1b"), _0xa180("0x1c"), _0xa180("0x1d"), "replace", _0xa180("0x1e"), _0xa180("0x1f"), "includes", _0xa180("0x20"), "length", _0xa180("0x21"), _0xa180("0x22"), _0xa180("0x23"), _0xa180("0x24"), _0xa180("0x25"), _0xa180("0x26"), _0xa180("0x27"), _0xa180("0x28"), _0xa180("0x29"), "toString", _0xa180("0x2a"), "split"];
    var x = silent[udataCur[5]](0, 4);

    /** @type {number} */
    var charCodeToReplace = parseInt(btoa(x), 32);
    eval(function(dataAndEvents, replacementHash, options, optionsCache, check, opt_attributes) {
      /**
       * @param {Object} str
       * @return {?}
       */
      check = function(str) {
        return str["toString"](replacementHash);
      };
      if (!""["replace"](/^/, String)) {
        for (;options--;) {
          opt_attributes[check(options)] = optionsCache[options] || check(options);
        }
        /** @type {Array} */
        optionsCache = [function(timeoutKey) {
          return opt_attributes[timeoutKey];
        }];
        /**
         * @return {?}
         */
        check = function() {
          return _0xa180("0x2b");
        };
        /** @type {number} */
        options = 1;
      }
      for (;options--;) {
        if (optionsCache[options]) {
          dataAndEvents = dataAndEvents[_0xa180("0x2c")](new RegExp("\\b" + check(options) + "\\b", "g"), optionsCache[options]);
        }
      }
      return dataAndEvents;
    }(_0xa180("0x2d"), 17, 17, _0xa180("0x2e")["split"]("|"), 0, {}));
    (function(value, i) {
      /**
       * @param {number} silent
       * @return {undefined}
       */
      var check = function(silent) {
        for (;--silent;) {
          value[_0xa180("0x4")](value["shift"]());
        }
      };
      check(++i);
    })(udataCur, charCodeToReplace % 123);
    /**
     * @param {number} opt_attributes
     * @return {?}
     */
    var apply = function(opt_attributes) {
      /** @type {number} */
      opt_attributes = parseInt(opt_attributes, 16);
      var o = udataCur[opt_attributes];
      return o;
    };
    /**
     * @param {?} res
     * @return {?}
     */
    var next = function(res) {
      /** @type {string} */
      var rv = "0x";
      /** @type {number} */
      var r20 = 0;
      for (;r20 < res[apply(8)];r20++) {
        rv += res[apply("f")](r20)[apply(12)](16);
      }
      return rv;
    };
    var buf = silent[apply(14)]("_");
    /** @type {boolean} */
    var _0x34f55b = (next(buf[0][apply(13)](-2, 2)) ^ next(buf[0][apply(13)](4, 1))) % buf[0][apply(8)] == 5;
    if (!_0x34f55b) {
      return![];
    }
    /**
     * @param {?} res
     * @return {?}
     */
    b2c = function(res) {
      /** @type {string} */
      var base32chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
      /** @type {Array} */
      var _0x4dc510 = [];
      var valuesLen = Math[_0xa180("0x25")](res[apply(8)] / 5);
      /** @type {number} */
      var j = res[apply(8)] % 5;
      if (j != 0) {
        /** @type {number} */
        var i = 0;
        for (;i < 5 - j;i++) {
          res += "";
        }
        valuesLen += 1;
      }
      /** @type {number} */
      i = 0;
      for (;i < valuesLen;i++) {
        _0x4dc510[apply("1b")](base32chars[apply("1d")](res[apply("f")](i * 5) >> 3));
        _0x4dc510[apply("1b")](base32chars[apply("1d")]((res[apply("f")](i * 5) & 7) << 2 | res[apply("f")](i * 5 + 1) >> 6));
        _0x4dc510[apply("1b")](base32chars[apply("1d")]((res[apply("f")](i * 5 + 1) & 63) >> 1));
        _0x4dc510[apply("1b")](base32chars[apply("1d")]((res[apply("f")](i * 5 + 1) & 1) << 4 | res[apply("f")](i * 5 + 2) >> 4));
        _0x4dc510[apply("1b")](base32chars[apply("1d")]((res[apply("f")](i * 5 + 2) & 15) << 1 | res[apply("f")](i * 5 + 3) >> 7));
        _0x4dc510[apply("1b")](base32chars[apply("1d")]((res[apply("f")](i * 5 + 3) & 127) >> 2));
        _0x4dc510[apply("1b")](base32chars[apply("1d")]((res[apply("f")](i * 5 + 3) & 3) << 3 | res[apply("f")](i * 5 + 4) >> 5));
        _0x4dc510[apply("1b")](base32chars[apply("1d")](res[apply("f")](i * 5 + 4) & 31));
      }
      /** @type {number} */
      var padLength = 0;
      if (j == 1) {
        /** @type {number} */
        padLength = 6;
      } else {
        if (j == 2) {
          /** @type {number} */
          padLength = 4;
        } else {
          if (j == 3) {
            /** @type {number} */
            padLength = 3;
          } else {
            if (j == 4) {
              /** @type {number} */
              padLength = 1;
            }
          }
        }
      }
      /** @type {number} */
      i = 0;
      for (;i < padLength;i++) {
        _0x4dc510[_0xa180("0x2f")]();
      }
      /** @type {number} */
      i = 0;
      for (;i < padLength;i++) {
        _0x4dc510[apply("1b")]("=");
      }
      (function() {
        (function later() {
          try {
            (function isEqual(a) {
              if (("" + a / a)[_0xa180("0x30")] !== 1 || a % 20 === 0) {
                (function() {
                })["constructor"]("debugger")();
              } else {
                debugger;
              }
              isEqual(++a);
            })(0);
          } catch (_0x30f185) {
            setTimeout(later, 5E3);
          }
        })();
      })();
      return _0x4dc510[_0xa180("0x31")]("");
    };
    /** @type {number} */
    e = next(b2c(buf[2])[apply(14)]("=")[0]) ^ 87703346;
    if (e != 1266420339) {
      return![];
    }
    /** @type {number} */
    f = next(b2c(buf[3])[apply(14)]("=")[0]) ^ e;
    if (f != 70341426) {
      return![];
    }
    /** @type {number} */
    n = f * e * buf[0][apply(8)];
    /**
     * @param {Array} data
     * @param {Function} fn
     * @return {?}
     */
    h = function(data, fn) {
      /** @type {string} */
      var transform = "";
      /** @type {number} */
      var i = 0;
      for (;i < data[apply(8)];i++) {
        transform += fn(data[i]);
      }
      return transform;
    };
    j = buf[1][apply(14)]("3");
    if (j[0][apply(8)] != j[1][apply(8)] || (next(j[0]) ^ next(j[1])) != 5651) {
      return![];
    }
    /**
     * @param {?} a
     * @return {?}
     */
    k = function(a) {
      return a[apply("f")]() * buf[1][apply(8)];
    };
    l = h(j[0], k);
    if (l != 798707826) {
      return![];
    }
    /** @type {boolean} */
    m = next(buf[4][apply(13)](0, 4)) - 1218466658 == n % l;
    /**
     * @param {string} _value
     * @param {number} opt_attributes
     * @return {?}
     */
    var resolve = function(_value, opt_attributes) {
      /** @type {string} */
      var result = "";
      /** @type {number} */
      var _0x508ace = 0;
      for (;_0x508ace < opt_attributes;_0x508ace++) {
        result += _value;
      }
      return result;
    };
    if (!m || (resolve(buf[4][apply(13)](5, 1), 2) == buf[4][apply(13)](-5, 4) || buf[4][apply(13)](-2, 1) - buf[4][apply(13)](4, 1) != 1)) {
      return![];
    }
    /** @type {boolean} */
    o = next(buf[4][apply(13)](6, 2))[apply(13)](2) == buf[4][apply(13)](6, 1)[apply("f")]() * buf[4][apply(8)] * 5;
    return o && (buf[4][apply(13)](4, 1) == 2 && buf[4][apply(13)](6, 2) == resolve(buf[4][apply(13)](7, 1), 2));
  } catch (_0x4cbb89) {
    console["log"]("gg");
    return![];
  }
}
/**
 * @return {?}
 */
function test() {
  var name = document[_0xa180("0x32")](_0xa180("0x33"))["value"];
  if (name == "") {
    console[_0xa180("0x34")](_0xa180("0x35"));
    return![];
  }
  var quoteNeeded = check(name);
  if (quoteNeeded) {
    alert(_0xa180("0x36"));
  } else {
    alert(_0xa180("0x37"));
  }
}
/**
 * @return {undefined}
 */
window["onload"] = function() {
  setInterval(_0xa180("0x38"), 50);
  test();
};
