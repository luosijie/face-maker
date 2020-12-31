
var window = window || {};

window["webpackJsonp"] = require("./bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* mpx inject */ global.currentModuleId = "m4f046b9b"
global.currentResource = "/Users/luo/Projects/self/face-maker/src/miniprogram/app.mpx"
global.currentCtor = App
global.currentCtorType = "app"
global.currentSrcMode = "wx"
/* harmony import */ var _babel_loader_node_modules_mpxjs_webpack_plugin_lib_selector_type_script_index_0_app_mpx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* empty/unused harmony star reexport */global.currentModuleId
/* script */


/* styles */
__webpack_require__(439)
__webpack_require__(440)

/* json */
__webpack_require__(441)

/* template */

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _mpxjs_api_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(430);


_mpxjs_core__WEBPACK_IMPORTED_MODULE_0__["default"].use(_mpxjs_api_proxy__WEBPACK_IMPORTED_MODULE_1__["default"], {
  usePromise: true
});
Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_0__["createApp"])({
  onLaunch() {}

});

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(166);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mini_transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(431);
/* harmony import */ var _mini_promisify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(438);





function install(target) {
  var _context, _context2;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$usePromise = options.usePromise,
      usePromise = _options$usePromise === void 0 ? false : _options$usePromise,
      _options$whiteList = options.whiteList,
      whiteList = _options$whiteList === void 0 ? [] : _options$whiteList,
      _options$blackList = options.blackList,
      blackList = _options$blackList === void 0 ? [] : _options$blackList,
      _options$platform = options.platform,
      platform = _options$platform === void 0 ? {} : _options$platform,
      _options$exclude = options.exclude,
      exclude = _options$exclude === void 0 ? ['shareImageMessage'] : _options$exclude,
      _options$custom = options.custom,
      custom = _options$custom === void 0 ? {} : _options$custom,
      _options$fallbackMap = options.fallbackMap,
      fallbackMap = _options$fallbackMap === void 0 ? {} : _options$fallbackMap,
      _options$optimize = options.optimize,
      optimize = _options$optimize === void 0 ? false : _options$optimize;
  var _platform$from = platform.from,
      from = _platform$from === void 0 ? '' : _platform$from,
      _platform$to = platform.to,
      to = _platform$to === void 0 ? '' : _platform$to;
  /* eslint-disable camelcase, no-undef */

  if (true) {
    from = "__mpx_src_mode_".concat("wx", "__");
  }

  if (true) {
    to = "wx";
  }
  /* eslint-enable */


  var transedApi = Object(_mini_transform__WEBPACK_IMPORTED_MODULE_3__["default"])({
    exclude,
    from,
    to,
    custom,
    optimize
  });
  var promisedApi = usePromise ? Object(_mini_promisify__WEBPACK_IMPORTED_MODULE_4__["default"])(transedApi, whiteList, blackList) : {};

  var allApi = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, transedApi, promisedApi);

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(allApi)).call(_context, function (api) {
    try {
      if (typeof allApi[api] !== 'function') {
        target[api] = allApi[api];
        return;
      }

      target[api] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return allApi[api].apply(target, args);
      };
    } catch (e) {} // 支付宝不支持重写 call 方法

  }); // Fallback Map option


  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(fallbackMap)).call(_context2, function (k) {
    if (!target[k]) {
      target[k] = fallbackMap[k];
    }
  });
}

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(309);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(171);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(432);
/* harmony import */ var _platform_wxToAli__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(436);
/* harmony import */ var _platform_wxToQq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(437);







var fromMap = Object(_common_js__WEBPACK_IMPORTED_MODULE_4__["genFromMap"])();

function joinName() {
  var _context;

  var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context = "".concat(fromMap[from], "_")).call(_context, to);
}

function transformApi(options) {
  var _context2,
      _context3,
      _context4,
      _this = this;

  var envObj = Object(_common_js__WEBPACK_IMPORTED_MODULE_4__["getEnvObj"])();
  var env = "wx";
  var wxToAliApi = Object(_platform_wxToAli__WEBPACK_IMPORTED_MODULE_5__["default"])({
    optimize: options.optimize
  });
  var wxToQqApi = Object(_platform_wxToQq__WEBPACK_IMPORTED_MODULE_6__["default"])({
    optimize: options.optimize
  });
  var platformMap = {
    'wx_ali': wxToAliApi,
    'qq_ali': wxToAliApi,
    'swan_ali': wxToAliApi,
    'tt_ali': wxToAliApi,
    'wx_qq': wxToQqApi
  };
  var proxyPlatformMap = {
    'ali': wxToAliApi,
    'qq': wxToQqApi
  };
  var needProxy = {};
  var excludeMap = Object(_common_js__WEBPACK_IMPORTED_MODULE_4__["makeMap"])(options.exclude);
  var proxyApi = proxyPlatformMap[env] || []; // 后续不一定只转换ali，需要基于目标平台决定合并的自定义api集，例如输出快应用时需要定义并合并wxToQaApi

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(envObj)).call(_context3, _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(proxyApi))).call(_context2, function (key) {
    if (!excludeMap[key]) {
      needProxy[key] = envObj[key] || proxyApi[key];
    }
  });

  var transedApi = _babel_runtime_corejs3_core_js_stable_object_create__WEBPACK_IMPORTED_MODULE_0___default()(null);

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(_context4 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(needProxy)).call(_context4, function (api) {
    // 非函数不做转换
    if (typeof needProxy[api] !== 'function') {
      transedApi[api] = needProxy[api];
      return;
    }

    transedApi[api] = function () {
      var to = options.to;
      var from = options.from;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args.length > 0) {
        from = args.pop();

        if (typeof from !== 'string' || !fromMap[from]) {
          args.push(from);
          from = options.from;
        }
      }

      var fromTo = joinName(from, to);

      if (options.custom[fromTo] && options.custom[fromTo][api]) {
        return options.custom[fromTo][api].apply(_this, args);
      } else if (platformMap[fromTo] && platformMap[fromTo][api]) {
        return platformMap[fromTo][api].apply(_this, args);
      } else if (envObj[api]) {
        return envObj[api].apply(_this, args);
      } else {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_4__["error"])("\u5F53\u524D\u73AF\u5883\u4E0D\u5B58\u5728 ".concat(api, " \u65B9\u6CD5"));
      }
    };
  });

  return transedApi;
}

/* harmony default export */ __webpack_exports__["default"] = (transformApi);

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToPromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(433);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToPromise", function() { return _ToPromise__WEBPACK_IMPORTED_MODULE_0__["ToPromise"]; });

/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(434);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webHandleSuccess", function() { return _web__WEBPACK_IMPORTED_MODULE_1__["webHandleSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webHandleFail", function() { return _web__WEBPACK_IMPORTED_MODULE_1__["webHandleFail"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(435);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changeOpts", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["changeOpts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleSuccess", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["handleSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "genFromMap", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["genFromMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEnvObj", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["getEnvObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "error", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["error"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["warn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMap", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["makeMap"]; });





/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToPromise", function() { return ToPromise; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(274);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(298);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);




var ToPromise = /*#__PURE__*/function () {
  function ToPromise() {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ToPromise);

    this._resolve = null;
    this._reject = null;
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ToPromise, [{
    key: "toPromiseInitPromise",
    value: function toPromiseInitPromise() {
      var _this = this;

      return new _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
        _this._resolve = resolve;
        _this._reject = reject;
      });
    }
  }, {
    key: "toPromiseResolve",
    value: function toPromiseResolve(res) {
      this._resolve(res);
    }
  }, {
    key: "toPromiseReject",
    value: function toPromiseReject(err) {
      this._reject(err);
    }
  }]);

  return ToPromise;
}();



/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webHandleSuccess", function() { return webHandleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webHandleFail", function() { return webHandleFail; });
function webHandleSuccess(result, success, complete) {
  typeof success === 'function' && success(result);
  typeof complete === 'function' && complete(result);
}

function webHandleFail(result, fail, complete) {
  typeof fail === 'function' && fail(result);
  typeof complete === 'function' && complete(result);
}



/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeOpts", function() { return changeOpts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSuccess", function() { return handleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genFromMap", function() { return genFromMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnvObj", function() { return getEnvObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMap", function() { return makeMap; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(205);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(166);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);





var _this2 = undefined;

/**
 *
 * @param {Object} options 原参数
 * @param {Object} updateOrRemoveOpt 要修改或者删除的参数
 * @param {Object} extraOpt 额外增加的参数
 * @returns {Object} 返回参数
 * @example
 * changeOpts({ a: 1, b: 2 }, {
 *  a: 'c', // a 变为 c
 *  b: '' // 删除 b
 * }, {
 *  d: 4 // 增加 d
 * })
 */
function changeOpts(options) {
  var _context;

  var updateOrRemoveOpt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var extraOpt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var opts = {};

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(options)).call(_context, function (key) {
    var myKey = updateOrRemoveOpt.hasOwnProperty(key) ? updateOrRemoveOpt[key] : key;

    if (myKey !== '') {
      opts[myKey] = options[key];
    }
  });

  opts = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, opts, extraOpt);
  return opts;
}
/**
 * @param {Object} opts 原参数
 * @param {Function} getOptions 获取 success 回调修改后的参数
 */


var handleSuccess = function handleSuccess(opts) {
  var getOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
  var thisObj = arguments.length > 2 ? arguments[2] : undefined;

  if (!opts.success) {
    return;
  }

  var _this = thisObj || _this2;

  var cacheSuc = opts.success;

  opts.success = function (res) {
    var changedRes = getOptions(res) || res;
    cacheSuc.call(_this, changedRes);
  };
};

function genFromMap() {
  var result = {};
  var platforms = ['wx', 'ali', 'swan', 'qq', 'tt', 'web'];

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(platforms).call(platforms, function (platform) {
    result["__mpx_src_mode_".concat(platform, "__")] = platform;
  });

  return result;
}

function getEnvObj() {
  if (true) {
    return wx;
  } else {}
}

function warn(msg) {
  console.warn && console.warn("[@mpxjs/api-proxy warn]:\n ".concat(msg));
}

function error(msg) {
  console.error && console.error("[@mpxjs/api-proxy error]:\n ".concat(msg));
}

function noop() {}

function makeMap(arr) {
  return _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_0___default()(arr).call(arr, function (obj, item) {
    obj[item] = true;
    return obj;
  }, {});
}



/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(265);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(368);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(171);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(432);






var ALI_OBJ = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["getEnvObj"])();
var TIPS_NAME = '支付宝环境 mpx'; // canvas api 用

var CANVAS_MAP = {}; // optimize case avoid call api multi times with getSystemInfoSync

var systemInfo;

var getWxToAliApi = function getWxToAliApi(_ref) {
  var _ref$optimize = _ref.optimize,
      optimize = _ref$optimize === void 0 ? false : _ref$optimize;
  return {
    /**
     * 基础
     */
    getSystemInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options);
      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["handleSuccess"])(opts, function (res) {
        var _context;

        res.system = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context = "".concat(res.platform, " ")).call(_context, res.system);
        res.SDKVersion = ALI_OBJ.SDKVersion; // 支付宝 windowHeight 可能为 0

        if (!res.windowHeight) {
          res.windowHeight = Math.floor(res.screenHeight * res.windowWidth / res.screenWidth) - 50;
        }

        return res;
      });
      ALI_OBJ.getSystemInfo(opts);
    },

    getSystemInfoSync() {
      var _context2;

      if (optimize) {
        if (systemInfo) return systemInfo;
      }

      var res = ALI_OBJ.getSystemInfoSync() || {};
      res.system = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = "".concat(res.platform, " ")).call(_context2, res.system);
      res.SDKVersion = ALI_OBJ.SDKVersion; // 支付宝 windowHeight 可能为 0

      if (!res.windowHeight) {
        res.windowHeight = Math.floor(res.screenHeight * res.windowWidth / res.screenWidth) - 50;
      }

      if (optimize) systemInfo = res;
      return res;
    },

    nextTick(fn) {
      _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_3___default()(fn);
    },

    /**
     * 界面
     */
    showToast() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        title: 'content',
        icon: 'type'
      });
      ALI_OBJ.showToast(opts);
    },

    hideToast() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.success || options.fail || options.complete) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["warn"])("".concat(TIPS_NAME, ".hideToast \u4E0D\u652F\u6301 success/fail/complete \u53C2\u6570"));
      }

      ALI_OBJ.hideToast(options);
    },

    showModal() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts;

      if (options.showCancel === undefined || options.showCancel) {
        opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
          confirmText: 'confirmButtonText',
          cancelText: 'cancelButtonText'
        });
        Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["handleSuccess"])(opts, function (res) {
          return Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(res, undefined, {
            'cancel': !res.confirm
          });
        });
        ALI_OBJ.confirm(opts);
      } else {
        opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
          confirmText: 'buttonText'
        });
        ALI_OBJ.alert(opts);
      }
    },

    showLoading() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        title: 'content'
      });
      ALI_OBJ.showLoading(opts);
    },

    hideLoading() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.success || options.fail || options.complete) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["warn"])("".concat(TIPS_NAME, ".hideLoading \u4E0D\u652F\u6301 success/fail/complete \u53C2\u6570"));
      }

      ALI_OBJ.hideLoading(options);
    },

    showActionSheet() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        itemList: 'items'
      });
      var cacheSuc = opts.success || _common_js__WEBPACK_IMPORTED_MODULE_5__["noop"];
      var cacheFail = opts.fail || _common_js__WEBPACK_IMPORTED_MODULE_5__["noop"];

      opts.success = function (res) {
        var sucRes = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(res, {
          index: 'tapIndex'
        });

        if (sucRes.tapIndex === -1) {
          cacheFail.call(this, {
            errMsg: 'showActionSheet:fail cancel'
          });
        } else {
          cacheSuc.call(this, sucRes);
        }
      };

      ALI_OBJ.showActionSheet(opts);
    },

    showNavigationBarLoading() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.success || options.fail || options.complete) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["warn"])("".concat(TIPS_NAME, ".showNavigationBarLoading \u4E0D\u652F\u6301 success/fail/complete \u53C2\u6570"));
      }

      ALI_OBJ.showNavigationBarLoading(options);
    },

    hideNavigationBarLoading() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.success || options.fail || options.complete) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["warn"])("".concat(TIPS_NAME, ".hideNavigationBarLoading \u4E0D\u652F\u6301 success/fail/complete \u53C2\u6570"));
      }

      ALI_OBJ.hideNavigationBarLoading(options);
    },

    setNavigationBarTitle() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      ALI_OBJ.setNavigationBar(options);
    },

    setNavigationBarColor() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      ALI_OBJ.setNavigationBar(options);
    },

    /**
     * 网络
     */
    request() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        header: 'headers'
      });
      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(res, {
          headers: 'header',
          status: 'statusCode'
        });
      }); // request 在 1.11.0 以上版本才支持
      // httpRequest 即将被废弃，钉钉端仍需要使用

      if (ALI_OBJ.canIUse('request')) {
        return ALI_OBJ.request(opts);
      } else {
        return ALI_OBJ.httpRequest(opts);
      }
    },

    downloadFile() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options);
      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(res, {
          apFilePath: 'tempFilePath'
        });
      });
      return ALI_OBJ.downloadFile(opts);
    },

    uploadFile() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        name: 'fileName'
      });
      return ALI_OBJ.uploadFile(opts);
    },

    /**
     * 数据缓存
     */
    setStorageSync(key, data) {
      ALI_OBJ.setStorageSync({
        key,
        data
      });
    },

    removeStorageSync(key) {
      ALI_OBJ.removeStorageSync({
        key
      });
    },

    getStorageSync(key) {
      return ALI_OBJ.getStorageSync({
        key
      }).data;
    },

    /**
     * 媒体
     */
    saveImageToPhotosAlbum(key) {
      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["warn"])("\u5982\u679C\u60F3\u8981\u4FDD\u5B58\u5728\u7EBF\u56FE\u7247\u94FE\u63A5\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 ".concat(TIPS_NAME, ".saveImage"));
    },

    previewImage() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options);

      if (opts.current) {
        var _context3;

        var idx = _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = options.urls).call(_context3, opts.current);

        opts.current = idx !== -1 ? idx : 0;
      }

      ALI_OBJ.previewImage(opts);
    },

    compressImage() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        quality: ''
      }, {
        compressLevel: Math.round(options.quality / 100 * 4),
        // 支付宝图片压缩质量为 0 ~ 4，微信是 0 ~ 100
        apFilePaths: [options.src]
      });
      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(res, {
          apFilePaths: ''
        }, {
          tempFilePath: res.apFilePaths[0]
        });
      });
      ALI_OBJ.compressImage(opts);
    },

    chooseImage() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options);
      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(res, {
          apFilePaths: 'tempFilePaths'
        });
      });
      ALI_OBJ.chooseImage(opts);
    },

    /**
     * 位置
     */
    getLocation() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.aliType === undefined && options.type) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["warn"])("\u5982\u679C\u8981\u9488\u5BF9\u652F\u4ED8\u5B9D\u8BBE\u7F6E ".concat(TIPS_NAME, ".getLocation \u4E2D\u7684 type \u53C2\u6570\uFF0C\u8BF7\u4F7F\u7528 aliType, \u53D6\u503C\u4E3A 0~3"));
        options.aliType = 0;
      }

      if (options.altitude) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["error"])("\u652F\u4ED8\u5B9D ".concat(TIPS_NAME, ".getLocation \u4E0D\u652F\u6301\u83B7\u53D6\u9AD8\u5EA6\u4FE1\u606F"));
      }

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        type: '',
        aliType: 'type'
      });
      ALI_OBJ.getLocation(opts);
    },

    /**
     * 文件
     */
    saveFile() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        tempFilePath: 'apFilePath'
      });
      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(res, {
          apFilePath: 'savedFilePath'
        });
      });
      ALI_OBJ.saveFile(opts);
    },

    removeSavedFile() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        filePath: 'apFilePath'
      });
      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(res, {
          apFilePath: 'savedFilePath'
        });
      });
      ALI_OBJ.removeSavedFile(opts);
    },

    getSavedFileList() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        filePath: 'apFilePath'
      });
      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["handleSuccess"])(opts, function (res) {
        if (res.fileList) {
          var _context4;

          _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(_context4 = res.fileList).call(_context4, function (file) {
            var resFile = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(file, {
              apFilePath: 'filePath'
            });
            file = resFile;
          });
        }

        return res;
      });
      ALI_OBJ.getSavedFileList(opts);
    },

    getSavedFileInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        filePath: 'apFilePath'
      });
      ALI_OBJ.getSavedFileInfo(opts);
    },

    getFileInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        filePath: 'apFilePath'
      });
      ALI_OBJ.getFileInfo(opts);
    },

    /**
     * 设备
     */
    addPhoneContact() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        weChatNumber: 'alipayAccount'
      });
      ALI_OBJ.addPhoneContact(opts);
    },

    setClipboardData() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        data: 'text'
      });
      ALI_OBJ.setClipboard(opts);
    },

    getClipboardData() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options);
      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(res, {
          text: 'data'
        });
      });
      ALI_OBJ.getClipboard(opts);
    },

    setScreenBrightness() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        value: 'brightness'
      });
      ALI_OBJ.setScreenBrightness(opts);
    },

    getScreenBrightness() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options);
      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(res, {
          brightness: 'value'
        });
      });
      ALI_OBJ.getScreenBrightness(opts);
    },

    makePhoneCall() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        phoneNumber: 'number'
      });
      ALI_OBJ.makePhoneCall(opts);
    },

    stopAccelerometer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      ALI_OBJ.offAccelerometerChange(options);
    },

    startAccelerometer() {
      var _context5;

      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["warn"])(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context5 = "\u652F\u4ED8\u5B9D\u52A0\u901F\u8BA1\u4E0D\u9700\u8981\u4F7F\u7528 ".concat(TIPS_NAME, ".startAccelerometer \u5F00\u59CB\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728 ")).call(_context5, TIPS_NAME, ".onAccelerometerChange \u4E2D\u76D1\u542C"));
    },

    stopCompass() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      ALI_OBJ.offCompassChange(options);
    },

    startCompass() {
      var _context6;

      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["warn"])(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context6 = "\u652F\u4ED8\u5B9D\u7F57\u76D8\u4E0D\u9700\u8981\u4F7F\u7528 ".concat(TIPS_NAME, ".startCompass \u5F00\u59CB\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728 ")).call(_context6, TIPS_NAME, ".onCompassChange \u4E2D\u76D1\u542C"));
    },

    stopGyroscope() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      ALI_OBJ.offGyroscopeChange(options);
    },

    startGyroscope() {
      var _context7;

      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["warn"])(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context7 = "\u652F\u4ED8\u5B9D\u9640\u87BA\u4EEA\u4E0D\u9700\u8981\u4F7F\u7528 ".concat(TIPS_NAME, ".startGyroscope \u5F00\u59CB\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728 ")).call(_context7, TIPS_NAME, ".onGyroscopeChange \u4E2D\u76D1\u542C"));
    },

    scanCode() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        onlyFromCamera: 'hideAlbum',
        scanType: 'type'
      });

      if (opts.type) {
        switch (opts.type) {
          case 'barCode':
            opts.type = 'bar';
            break;

          case 'qrCode':
            opts.type = 'qr';
            break;

          default:
            Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["error"])("".concat(TIPS_NAME, ".scanCode \u53EA\u652F\u6301\u626B\u63CF\u6761\u5F62\u7801\u548C\u4E8C\u7EF4\u7801\uFF0C\u8BF7\u5C06 type \u8BBE\u7F6E\u4E3A barCode/qrCode"));
            opts.type = 'qr';
            break;
        }
      }

      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(res, {
          code: 'result'
        });
      });
      ALI_OBJ.scan(opts);
    },

    /**
     * 开放接口
     */
    login() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options);
      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(res, {
          authCode: 'code'
        });
      });
      ALI_OBJ.getAuthCode(opts);
    },

    checkSession() {
      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["warn"])("\u652F\u4ED8\u5B9D\u4E0D\u652F\u6301 ".concat(TIPS_NAME, ".checkSession \u68C0\u67E5\u767B\u5F55\u8FC7\u671F"));
    },

    getUserInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.withCredentials === true) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["warn"])("\u652F\u4ED8\u5B9D\u4E0D\u652F\u6301\u5728 ".concat(TIPS_NAME, ".getUserInfo \u4F7F\u7528 withCredentials \u53C2\u6570\u4E2D\u83B7\u53D6\u7B49\u654F\u611F\u4FE1\u606F"));
      }

      if (options.lang) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["warn"])("\u652F\u4ED8\u5B9D\u4E0D\u652F\u6301\u5728 ".concat(TIPS_NAME, ".getUserInfo \u4E2D\u4F7F\u7528 lang \u53C2\u6570"));
      }

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options);
      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["handleSuccess"])(opts, function (res) {
        var userInfo = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(res, {
          avatar: 'avatarUrl'
        }, {
          gender: 0
        });
        var params = ['country', 'province', 'city', 'language'];

        _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(params).call(params, function (key) {
          _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(userInfo, key, {
            get() {
              var _context8;

              Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["warn"])(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context8 = "\u652F\u4ED8\u5B9D ".concat(TIPS_NAME, ".getUserInfo \u4E0D\u80FD\u83B7\u53D6 ")).call(_context8, key));
              return '';
            }

          });
        });

        return {
          userInfo
        };
      });
      ALI_OBJ.getAuthUserInfo(opts);
    },

    requestPayment() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!options.tradeNO) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["error"])("\u8BF7\u5728\u652F\u4ED8\u51FD\u6570 ".concat(TIPS_NAME, ".requestPayment \u4E2D\u6DFB\u52A0 tradeNO \u53C2\u6570\u7528\u4E8E\u652F\u4ED8\u5B9D\u652F\u4ED8"));
      }

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        timeStamp: '',
        nonceStr: '',
        package: '',
        signType: '',
        paySign: ''
      });
      var cacheSuc = opts.success || _common_js__WEBPACK_IMPORTED_MODULE_5__["noop"];
      var cacheFail = opts.fail || _common_js__WEBPACK_IMPORTED_MODULE_5__["noop"]; // 抹平用微信的 complete

      if (typeof opts.complete === 'function') {
        var cacheComplete = opts.complete;

        opts.complete = function (res) {
          if (+res.resultCode === 9000) {
            res.errMsg = 'requestPayment:ok';
            cacheComplete.call(this, res);
          }
        };
      }

      opts.success = function (res) {
        if (+res.resultCode === 9000) {
          cacheSuc.call(this, res);
        } else {
          cacheFail.call(this, res);
        }
      };

      ALI_OBJ.tradePay(opts);
    },

    /**
     * 画布
     */
    createCanvasContext() {
      var canvasId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var ctx = ALI_OBJ.createCanvasContext(canvasId);
      CANVAS_MAP[canvasId] = ctx;
      return ctx;
    },

    canvasToTempFilePath() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!CANVAS_MAP[options.canvasId]) {
        var _context9;

        Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["error"])(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context9 = "\u652F\u4ED8\u5B9D\u8C03\u7528 ".concat(TIPS_NAME, ".toTempFilePath \u65B9\u6CD5\u4E4B\u524D\u9700\u8981\u5148\u8C03\u7528 ")).call(_context9, TIPS_NAME, ".createCanvasContext \u521B\u5EFA context"));
        return;
      }

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        canvasId: ''
      });
      var ctx = CANVAS_MAP[options.canvasId];
      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(res, {
          apFilePath: 'tempFilePath'
        }, {
          errMsg: 'canvasToTempFilePath:ok'
        });
      });
      ctx.toTempFilePath(opts);
    },

    canvasPutImageData() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!CANVAS_MAP[options.canvasId]) {
        var _context10;

        Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["error"])(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context10 = "\u652F\u4ED8\u5B9D\u8C03\u7528 ".concat(TIPS_NAME, ".putImageData \u65B9\u6CD5\u4E4B\u524D\u9700\u8981\u5148\u8C03\u7528 ")).call(_context10, TIPS_NAME, ".createCanvasContext \u521B\u5EFA context"));
        return;
      }

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        canvasId: ''
      });
      var ctx = CANVAS_MAP[options.canvasId]; // success 里面的 this 指向参数 options

      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(res, undefined, {
          errMsg: 'canvasPutImageData:ok'
        });
      }, options);
      ctx.putImageData(opts);
    },

    canvasGetImageData() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!CANVAS_MAP[options.canvasId]) {
        var _context11;

        Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["error"])(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context11 = "\u652F\u4ED8\u5B9D\u8C03\u7528 ".concat(TIPS_NAME, ".getImageData \u65B9\u6CD5\u4E4B\u524D\u9700\u8981\u5148\u8C03\u7528 ")).call(_context11, TIPS_NAME, ".createCanvasContext \u521B\u5EFA context"));
        return;
      }

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["changeOpts"])(options, {
        canvasId: ''
      });
      var ctx = CANVAS_MAP[options.canvasId]; // success 里面的 this 指向参数 options

      Object(_common_js__WEBPACK_IMPORTED_MODULE_5__["handleSuccess"])(opts, undefined, options);
      ctx.getImageData(opts);
    },

    /**
     * WXML
     */
    createSelectorQuery() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var selectorQuery = ALI_OBJ.createSelectorQuery(options);
      var proxyMethods = ['boundingClientRect', 'scrollOffset'];
      var cbs = [];

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(proxyMethods).call(proxyMethods, function (name) {
        var originalMethod = selectorQuery[name];

        selectorQuery[name] = function () {
          var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _common_js__WEBPACK_IMPORTED_MODULE_5__["noop"];
          cbs.push(cb);
          return originalMethod.call(this);
        };
      });

      var originalExec = selectorQuery.exec;

      selectorQuery.exec = function () {
        var originalCb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _common_js__WEBPACK_IMPORTED_MODULE_5__["noop"];

        var cb = function cb(results) {
          _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(results).call(results, function (item, index) {
            cbs[index](item);
          });

          originalCb(results);
        };

        return originalExec.call(this, cb);
      };

      selectorQuery.in = function () {
        return this;
      };

      return selectorQuery;
    }

  };
};

/* harmony default export */ __webpack_exports__["default"] = (getWxToAliApi);

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(432);

var QQ_OBJ = Object(_common_js__WEBPACK_IMPORTED_MODULE_0__["getEnvObj"])();

var getWxToQqApi = function getWxToQqApi(_ref) {
  var _ref$optimize = _ref.optimize,
      optimize = _ref$optimize === void 0 ? false : _ref$optimize;
  return {
    /**
     * 订阅消息
     * @param options
     */
    requestSubscribeMessage() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_0__["changeOpts"])(options, undefined, {
        subscribe: true
      });
      QQ_OBJ.subscribeAppMsg(opts);
    }

  };
};

/* harmony default export */ __webpack_exports__["default"] = (getWxToQqApi);

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(274);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(171);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(432);





var envObj = Object(_common_js__WEBPACK_IMPORTED_MODULE_4__["getEnvObj"])(); // 特别指定的不进行Promise封装的方法

var blackList = ['clearStorage', 'hideToast', 'hideLoading', 'drawCanvas', 'canIUse', 'stopRecord', 'pauseVoice', 'stopVoice', 'pauseBackgroundAudio', 'stopBackgroundAudio', 'showNavigationBarLoading', 'hideNavigationBarLoading', 'createAnimation', 'createSelectorQuery', 'hideKeyboard', 'stopPullDownRefresh', 'createWorker', 'pageScrollTo', 'reportAnalytics', 'getMenuButtonBoundingClientRect'];

function getMapFromList(list) {
  if (list && list.length) {
    var map = {};

    _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(list).call(list, function (item) {
      map[item] = true;
    });

    return map;
  }
}

function promisify(listObj, whiteList, customBlackList) {
  var _context;

  var result = {};
  var whiteListMap = getMapFromList(whiteList);
  var blackListMap = getMapFromList(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(blackList).call(blackList, customBlackList));
  var fromMap = Object(_common_js__WEBPACK_IMPORTED_MODULE_4__["genFromMap"])();

  function promisifyFilter(key) {
    if (whiteListMap && whiteListMap[key] !== undefined) {
      return !!whiteListMap[key];
    } else {
      return !(blackListMap[key] || // 特别指定的方法
      /^get\w*Manager$/.test(key) || // 获取manager的api
      /^create\w*Context$/.test(key) || // 创建上下文相关api
      /^(on|off)/.test(key) || // 以 on* 或 off开头的方法
      /\w+Sync$/.test(key) // 以Sync结尾的方法
      );
    }
  }

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(listObj)).call(_context, function (key) {
    if (typeof listObj[key] !== 'function') {
      return;
    }

    result[key] = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (promisifyFilter(key)) {
        if (!args[0] || fromMap[args[0]]) {
          args.unshift({
            success: _common_js__WEBPACK_IMPORTED_MODULE_4__["noop"],
            fail: _common_js__WEBPACK_IMPORTED_MODULE_4__["noop"]
          });
        }

        var obj = args[0];
        var returned;
        var promise = new _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
          var originSuccess = obj.success;
          var originFail = obj.fail;

          obj.success = function (res) {
            originSuccess && originSuccess.call(this, res);
            resolve(res);
          };

          obj.fail = function (e) {
            originFail && originFail.call(this, e);
            reject(e);
          };

          returned = listObj[key].apply(envObj, args);
        });
        promise.__returned = returned;
        return promise;
      } else {
        return listObj[key].apply(envObj, args);
      }
    };
  });

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (promisify);

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

// removed by extractor

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

// removed by extractor

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

// removed by extractor

/***/ })

},[[0,1]]]);
//# sourceMappingURL=app.js.map