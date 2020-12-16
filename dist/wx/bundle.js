
var window = window || {};

var context = (function() { return this })() || Function("return this")();

// Fix babel runtime in some quirky environment like ali & qq dev.
try {
  if(!context.console){
    context.console = console;
    context.setInterval = setInterval;
    context.setTimeout = setTimeout;
    context.JSON = JSON;
    context.Math = Math;
    context.RegExp = RegExp;
    context.Infinity = Infinity;
    context.isFinite = isFinite;
    context.parseFloat = parseFloat;
    context.parseInt = parseInt;
    context.Promise = Promise;
    context.WeakMap = WeakMap;
    context.Reflect = Reflect;
    context.RangeError = RangeError;
    context.TypeError = TypeError;
    context.Uint8Array = Uint8Array;
    context.DataView = DataView;
    context.ArrayBuffer = ArrayBuffer;
    context.Symbol = Symbol;
  }
} catch(e){
}
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// run deferred modules from other chunks
/******/ 	checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return createApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPage", function() { return createPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return createComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPureObject", function() { return toPureObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(116);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(125);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(143);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(154);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(158);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(163);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(167);
/* harmony import */ var _core_createStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(416);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return _core_createStore__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStoreWithThis", function() { return _core_createStore__WEBPACK_IMPORTED_MODULE_14__["createStoreWithThis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStateWithThis", function() { return _core_createStore__WEBPACK_IMPORTED_MODULE_14__["createStateWithThis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGettersWithThis", function() { return _core_createStore__WEBPACK_IMPORTED_MODULE_14__["createGettersWithThis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMutationsWithThis", function() { return _core_createStore__WEBPACK_IMPORTED_MODULE_14__["createMutationsWithThis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createActionsWithThis", function() { return _core_createStore__WEBPACK_IMPORTED_MODULE_14__["createActionsWithThis"]; });

/* harmony import */ var _core_injectMixins__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(170);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(207);
/* harmony import */ var _convertor_convertor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(312);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(171);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMixin", function() { return _core_mergeOptions__WEBPACK_IMPORTED_MODULE_18__["getMixin"]; });

/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(300);
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(294);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(301);
/* harmony import */ var _observer_watch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(411);
/* harmony import */ var _core_implement__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(332);














var _this = undefined;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_3___default.a === "undefined" || _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_2___default()(o) == null) { if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context9; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5___default()(_context9 = Object.prototype.toString.call(o)).call(_context9, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_4___default()(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }












function createApp(config) {
  var _context;

  var mpx = new EXPORT_MPX();

  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  _platform__WEBPACK_IMPORTED_MODULE_13__["createApp"].apply(_platform__WEBPACK_IMPORTED_MODULE_13__, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12___default()(_context = [_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_11___default()({
    proto: mpx.proto
  }, config)]).call(_context, rest));
}
function createPage(config) {
  var _context2;

  var mpx = new EXPORT_MPX();

  for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    rest[_key2 - 1] = arguments[_key2];
  }

  _platform__WEBPACK_IMPORTED_MODULE_13__["createPage"].apply(_platform__WEBPACK_IMPORTED_MODULE_13__, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12___default()(_context2 = [_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_11___default()({
    proto: mpx.proto
  }, config)]).call(_context2, rest));
}
function createComponent(config) {
  var _context3;

  var mpx = new EXPORT_MPX();

  for (var _len3 = arguments.length, rest = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    rest[_key3 - 1] = arguments[_key3];
  }

  _platform__WEBPACK_IMPORTED_MODULE_13__["createComponent"].apply(_platform__WEBPACK_IMPORTED_MODULE_13__, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12___default()(_context3 = [_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_11___default()({
    proto: mpx.proto
  }, config)]).call(_context3, rest));
}

function toPureObject(obj) {
  return Object(_helper_utils__WEBPACK_IMPORTED_MODULE_16__["diffAndCloneA"])(obj).clone;
}

function extendProps(target, proxyObj, rawProps, option) {
  var keys = _babel_runtime_corejs3_core_js_stable_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_10___default()(proxyObj);

  var rawPropsMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_16__["makeMap"])(rawProps);

  var _iterator = _createForOfIteratorHelper(keys),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;

      if (APIs[key] || rawPropsMap[key]) {
        continue;
      } else if (option && (option.prefix || option.postfix)) {
        var transformKey = option.prefix ? option.prefix + '_' + key : key + '_' + option.postfix;
        target[transformKey] = proxyObj[key];
      } else if (!target.hasOwnProperty(key)) {
        target[key] = proxyObj[key];
      } else {
        Object(_helper_log__WEBPACK_IMPORTED_MODULE_19__["error"])("Mpx property [".concat(key, "] from installing plugin conflicts with already exists\uFF0Cplease pass prefix/postfix options to avoid property conflict, for example: \"use('plugin', {prefix: 'mm'})\""));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
} // 安装插件进行扩展API


var installedPlugins = [];

function use(plugin) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_9___default()(installedPlugins).call(installedPlugins, plugin) > -1) {
    return this;
  }

  var args = [options];
  var proxyMPX = factory();

  var rawProps = _babel_runtime_corejs3_core_js_stable_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_10___default()(proxyMPX);

  var rawPrototypeProps = _babel_runtime_corejs3_core_js_stable_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_10___default()(proxyMPX.prototype);

  args.unshift(proxyMPX); // 传入真正的mpx对象供插件访问

  args.push(EXPORT_MPX);

  if (typeof plugin.install === 'function') {
    plugin.install.apply(plugin, args);
  } else if (typeof plugin === 'function') {
    plugin.apply(null, args);
  }

  extendProps(EXPORT_MPX, proxyMPX, rawProps, options);
  extendProps(EXPORT_MPX.prototype, proxyMPX.prototype, rawPrototypeProps, options);
  installedPlugins.push(plugin);
  return this;
}

var APIs = {}; // 实例属性

var InstanceAPIs = {};
var observable;
var watch;

if (false) { var remove, _del, _set, vm, _context4, _context5, _context6, _context7; } else {
  observable = function observable(obj) {
    Object(_observer_index__WEBPACK_IMPORTED_MODULE_21__["observe"])(obj);
    return obj;
  };

  var _vm = {};

  watch = function watch(expOrFn, cb, options) {
    return Object(_observer_watch__WEBPACK_IMPORTED_MODULE_22__["watch"])(_vm, expOrFn, cb, options);
  };

  var _remove = function _remove() {
    if (true) {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_19__["error"])('$remove will be removed in next minor version, please use $delete instead!', this.$rawOptions && this.$rawOptions.mpxFileResource);
    }

    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return _observer_index__WEBPACK_IMPORTED_MODULE_21__["del"].apply(this, args);
  };

  APIs = {
    createApp,
    createPage,
    createComponent,
    createStore: _core_createStore__WEBPACK_IMPORTED_MODULE_14__["default"],
    createStoreWithThis: _core_createStore__WEBPACK_IMPORTED_MODULE_14__["createStoreWithThis"],
    mixin: _core_injectMixins__WEBPACK_IMPORTED_MODULE_15__["injectMixins"],
    injectMixins: _core_injectMixins__WEBPACK_IMPORTED_MODULE_15__["injectMixins"],
    toPureObject,
    observable,
    watch,
    use,
    set: _observer_index__WEBPACK_IMPORTED_MODULE_21__["set"],
    remove: _remove,
    delete: _observer_index__WEBPACK_IMPORTED_MODULE_21__["del"],
    setConvertRule: _convertor_convertor__WEBPACK_IMPORTED_MODULE_17__["setConvertRule"],
    getMixin: _core_mergeOptions__WEBPACK_IMPORTED_MODULE_18__["getMixin"],
    implement: _core_implement__WEBPACK_IMPORTED_MODULE_23__["default"]
  };
  InstanceAPIs = {
    $set: _observer_index__WEBPACK_IMPORTED_MODULE_21__["set"],
    $remove: _remove,
    $delete: _observer_index__WEBPACK_IMPORTED_MODULE_21__["del"]
  };
}



function factory() {
  // 作为原型挂载属性的中间层
  function MPX() {
    this.proto = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_16__["extend"])({}, this);
  }

  _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_11___default()(MPX, APIs);

  _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_11___default()(MPX.prototype, InstanceAPIs);

  return MPX;
}

var EXPORT_MPX = factory();
EXPORT_MPX.config = {
  useStrictDiff: false,
  ignoreRenderError: false,
  ignoreProxyWhiteList: ['id', 'dataset', 'data']
};

if (false) {} else {
  if (global.i18n) {
    Object(_observer_index__WEBPACK_IMPORTED_MODULE_21__["observe"])(global.i18n); // 挂载翻译方法

    if (global.i18nMethods) {
      var _context8;

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7___default()(_context8 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(global.i18nMethods)).call(_context8, function (methodName) {
        global.i18n[methodName] = function () {
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }

          args.unshift(global.i18n.locale);
          return global.i18nMethods[methodName].apply(_this, args);
        };
      });
    }

    EXPORT_MPX.i18n = global.i18n;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (EXPORT_MPX);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
__webpack_require__(71);
var getIterator = __webpack_require__(73);

module.exports = getIterator;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
var DOMIterables = __webpack_require__(70);
var global = __webpack_require__(17);
var classof = __webpack_require__(66);
var createNonEnumerableProperty = __webpack_require__(21);
var Iterators = __webpack_require__(14);
var wellKnownSymbol = __webpack_require__(49);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(8);
var addToUnscopables = __webpack_require__(13);
var Iterators = __webpack_require__(14);
var InternalStateModule = __webpack_require__(15);
var defineIterator = __webpack_require__(36);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(9);
var requireObjectCoercible = __webpack_require__(12);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(10);
var classof = __webpack_require__(11);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(16);
var global = __webpack_require__(17);
var isObject = __webpack_require__(26);
var createNonEnumerableProperty = __webpack_require__(21);
var objectHas = __webpack_require__(30);
var shared = __webpack_require__(19);
var sharedKey = __webpack_require__(31);
var hiddenKeys = __webpack_require__(35);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var inspectSource = __webpack_require__(18);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || /* mpx inject */ (function() { return this })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(19);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var setGlobal = __webpack_require__(20);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var createNonEnumerableProperty = __webpack_require__(21);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(22);
var definePropertyModule = __webpack_require__(23);
var createPropertyDescriptor = __webpack_require__(29);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(10);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(22);
var IE8_DOM_DEFINE = __webpack_require__(24);
var anObject = __webpack_require__(27);
var toPrimitive = __webpack_require__(28);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(22);
var fails = __webpack_require__(10);
var createElement = __webpack_require__(25);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var isObject = __webpack_require__(26);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(32);
var uid = __webpack_require__(34);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(33);
var store = __webpack_require__(19);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.7.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var createIteratorConstructor = __webpack_require__(44);
var getPrototypeOf = __webpack_require__(46);
var setPrototypeOf = __webpack_require__(67);
var setToStringTag = __webpack_require__(63);
var createNonEnumerableProperty = __webpack_require__(21);
var redefine = __webpack_require__(69);
var wellKnownSymbol = __webpack_require__(49);
var IS_PURE = __webpack_require__(33);
var Iterators = __webpack_require__(14);
var IteratorsCore = __webpack_require__(45);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(17);
var getOwnPropertyDescriptor = __webpack_require__(38).f;
var isForced = __webpack_require__(40);
var path = __webpack_require__(41);
var bind = __webpack_require__(42);
var createNonEnumerableProperty = __webpack_require__(21);
var has = __webpack_require__(30);

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(22);
var propertyIsEnumerableModule = __webpack_require__(39);
var createPropertyDescriptor = __webpack_require__(29);
var toIndexedObject = __webpack_require__(8);
var toPrimitive = __webpack_require__(28);
var has = __webpack_require__(30);
var IE8_DOM_DEFINE = __webpack_require__(24);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(10);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(43);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(45).IteratorPrototype;
var create = __webpack_require__(52);
var createPropertyDescriptor = __webpack_require__(29);
var setToStringTag = __webpack_require__(63);
var Iterators = __webpack_require__(14);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(46);
var createNonEnumerableProperty = __webpack_require__(21);
var has = __webpack_require__(30);
var wellKnownSymbol = __webpack_require__(49);
var IS_PURE = __webpack_require__(33);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(30);
var toObject = __webpack_require__(47);
var sharedKey = __webpack_require__(31);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(48);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(12);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(10);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var shared = __webpack_require__(32);
var has = __webpack_require__(30);
var uid = __webpack_require__(34);
var NATIVE_SYMBOL = __webpack_require__(50);
var USE_SYMBOL_AS_UID = __webpack_require__(51);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(10);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(50);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(27);
var defineProperties = __webpack_require__(53);
var enumBugKeys = __webpack_require__(60);
var hiddenKeys = __webpack_require__(35);
var html = __webpack_require__(61);
var documentCreateElement = __webpack_require__(25);
var sharedKey = __webpack_require__(31);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(22);
var definePropertyModule = __webpack_require__(23);
var anObject = __webpack_require__(27);
var objectKeys = __webpack_require__(54);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(55);
var enumBugKeys = __webpack_require__(60);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(30);
var toIndexedObject = __webpack_require__(8);
var indexOf = __webpack_require__(56).indexOf;
var hiddenKeys = __webpack_require__(35);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(8);
var toLength = __webpack_require__(57);
var toAbsoluteIndex = __webpack_require__(59);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(58);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(58);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(62);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(41);
var global = __webpack_require__(17);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(64);
var defineProperty = __webpack_require__(23).f;
var createNonEnumerableProperty = __webpack_require__(21);
var has = __webpack_require__(30);
var toString = __webpack_require__(65);
var wellKnownSymbol = __webpack_require__(49);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!has(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(49);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(64);
var classof = __webpack_require__(66);

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(64);
var classofRaw = __webpack_require__(11);
var wellKnownSymbol = __webpack_require__(49);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(27);
var aPossiblePrototype = __webpack_require__(68);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__(21);

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(72).charAt;
var InternalStateModule = __webpack_require__(15);
var defineIterator = __webpack_require__(36);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(58);
var requireObjectCoercible = __webpack_require__(12);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(27);
var getIteratorMethod = __webpack_require__(74);

module.exports = function (it) {
  var iteratorMethod = getIteratorMethod(it);
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject(iteratorMethod.call(it));
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(66);
var Iterators = __webpack_require__(14);
var wellKnownSymbol = __webpack_require__(49);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(76);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(77);

module.exports = parent;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
var path = __webpack_require__(41);

module.exports = path.Array.isArray;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);
var isArray = __webpack_require__(79);

// `Array.isArray` method
// https://tc39.github.io/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(11);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(81);

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
__webpack_require__(71);
var getIteratorMethod = __webpack_require__(74);

module.exports = getIteratorMethod;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(83);

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(84);

module.exports = parent;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(85);
__webpack_require__(91);
__webpack_require__(92);
__webpack_require__(99);
__webpack_require__(100);
__webpack_require__(101);
__webpack_require__(102);
__webpack_require__(103);
__webpack_require__(104);
__webpack_require__(105);
__webpack_require__(106);
__webpack_require__(107);
__webpack_require__(108);
__webpack_require__(109);
__webpack_require__(110);
__webpack_require__(111);
__webpack_require__(112);
__webpack_require__(113);
__webpack_require__(114);
__webpack_require__(115);
var path = __webpack_require__(41);

module.exports = path.Symbol;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var fails = __webpack_require__(10);
var isArray = __webpack_require__(79);
var isObject = __webpack_require__(26);
var toObject = __webpack_require__(47);
var toLength = __webpack_require__(57);
var createProperty = __webpack_require__(86);
var arraySpeciesCreate = __webpack_require__(87);
var arrayMethodHasSpeciesSupport = __webpack_require__(88);
var wellKnownSymbol = __webpack_require__(49);
var V8_VERSION = __webpack_require__(89);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(28);
var definePropertyModule = __webpack_require__(23);
var createPropertyDescriptor = __webpack_require__(29);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
var isArray = __webpack_require__(79);
var wellKnownSymbol = __webpack_require__(49);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(10);
var wellKnownSymbol = __webpack_require__(49);
var V8_VERSION = __webpack_require__(89);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var userAgent = __webpack_require__(90);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(62);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 91 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var global = __webpack_require__(17);
var getBuiltIn = __webpack_require__(62);
var IS_PURE = __webpack_require__(33);
var DESCRIPTORS = __webpack_require__(22);
var NATIVE_SYMBOL = __webpack_require__(50);
var USE_SYMBOL_AS_UID = __webpack_require__(51);
var fails = __webpack_require__(10);
var has = __webpack_require__(30);
var isArray = __webpack_require__(79);
var isObject = __webpack_require__(26);
var anObject = __webpack_require__(27);
var toObject = __webpack_require__(47);
var toIndexedObject = __webpack_require__(8);
var toPrimitive = __webpack_require__(28);
var createPropertyDescriptor = __webpack_require__(29);
var nativeObjectCreate = __webpack_require__(52);
var objectKeys = __webpack_require__(54);
var getOwnPropertyNamesModule = __webpack_require__(93);
var getOwnPropertyNamesExternal = __webpack_require__(94);
var getOwnPropertySymbolsModule = __webpack_require__(95);
var getOwnPropertyDescriptorModule = __webpack_require__(38);
var definePropertyModule = __webpack_require__(23);
var propertyIsEnumerableModule = __webpack_require__(39);
var createNonEnumerableProperty = __webpack_require__(21);
var redefine = __webpack_require__(69);
var shared = __webpack_require__(32);
var sharedKey = __webpack_require__(31);
var hiddenKeys = __webpack_require__(35);
var uid = __webpack_require__(34);
var wellKnownSymbol = __webpack_require__(49);
var wrappedWellKnownSymbolModule = __webpack_require__(96);
var defineWellKnownSymbol = __webpack_require__(97);
var setToStringTag = __webpack_require__(63);
var InternalStateModule = __webpack_require__(15);
var $forEach = __webpack_require__(98).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(55);
var enumBugKeys = __webpack_require__(60);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(8);
var nativeGetOwnPropertyNames = __webpack_require__(93).f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 95 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(49);

exports.f = wellKnownSymbol;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(41);
var has = __webpack_require__(30);
var wrappedWellKnownSymbolModule = __webpack_require__(96);
var defineProperty = __webpack_require__(23).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(42);
var IndexedObject = __webpack_require__(9);
var toObject = __webpack_require__(47);
var toLength = __webpack_require__(57);
var arraySpeciesCreate = __webpack_require__(87);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(97);

// `Symbol.asyncIterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


/***/ }),
/* 100 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(97);

// `Symbol.hasInstance` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol('hasInstance');


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(97);

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol('isConcatSpreadable');


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(97);

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(97);

// `Symbol.match` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(97);

// `Symbol.matchAll` well-known symbol
defineWellKnownSymbol('matchAll');


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(97);

// `Symbol.replace` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(97);

// `Symbol.search` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(97);

// `Symbol.species` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.species
defineWellKnownSymbol('species');


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(97);

// `Symbol.split` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(97);

// `Symbol.toPrimitive` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(97);

// `Symbol.toStringTag` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(97);

// `Symbol.unscopables` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var setToStringTag = __webpack_require__(63);

// JSON[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 114 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 115 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(117);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(118);

module.exports = parent;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
__webpack_require__(119);
var path = __webpack_require__(41);

module.exports = path.Array.from;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);
var from = __webpack_require__(120);
var checkCorrectnessOfIteration = __webpack_require__(124);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(42);
var toObject = __webpack_require__(47);
var callWithSafeIterationClosing = __webpack_require__(121);
var isArrayIteratorMethod = __webpack_require__(123);
var toLength = __webpack_require__(57);
var createProperty = __webpack_require__(86);
var getIteratorMethod = __webpack_require__(74);

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(27);
var iteratorClose = __webpack_require__(122);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(27);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(49);
var Iterators = __webpack_require__(14);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(49);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(126);

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(127);

module.exports = parent;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var slice = __webpack_require__(128);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.slice;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.slice) ? slice : own;
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(129);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('Array').slice;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var isObject = __webpack_require__(26);
var isArray = __webpack_require__(79);
var toAbsoluteIndex = __webpack_require__(59);
var toLength = __webpack_require__(57);
var toIndexedObject = __webpack_require__(8);
var createProperty = __webpack_require__(86);
var wellKnownSymbol = __webpack_require__(49);
var arrayMethodHasSpeciesSupport = __webpack_require__(88);
var arrayMethodUsesToLength = __webpack_require__(130);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(22);
var fails = __webpack_require__(10);
var has = __webpack_require__(30);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(41);

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(133);

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(134);

module.exports = parent;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(135);
var path = __webpack_require__(41);

module.exports = path.Object.keys;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);
var toObject = __webpack_require__(47);
var nativeKeys = __webpack_require__(54);
var fails = __webpack_require__(10);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(137);

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
var forEach = __webpack_require__(138);
var classof = __webpack_require__(66);
var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.forEach)
    // eslint-disable-next-line no-prototype-builtins
    || DOMIterables.hasOwnProperty(classof(it)) ? forEach : own;
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(139);

module.exports = parent;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(140);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('Array').forEach;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var forEach = __webpack_require__(141);

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(98).forEach;
var arrayMethodIsStrict = __webpack_require__(142);
var arrayMethodUsesToLength = __webpack_require__(130);

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(10);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(144);

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(145);

module.exports = parent;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(146);

var FunctionPrototype = Function.prototype;

module.exports = function (it) {
  var own = it.bind;
  return it === FunctionPrototype || (it instanceof Function && own === FunctionPrototype.bind) ? bind : own;
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(147);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('Function').bind;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);
var bind = __webpack_require__(148);

// `Function.prototype.bind` method
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(43);
var isObject = __webpack_require__(26);

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(150);

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(151);

module.exports = parent;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var indexOf = __webpack_require__(152);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.indexOf) ? indexOf : own;
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(153);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('Array').indexOf;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var $indexOf = __webpack_require__(56).indexOf;
var arrayMethodIsStrict = __webpack_require__(142);
var arrayMethodUsesToLength = __webpack_require__(130);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(155);

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(156);

module.exports = parent;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(157);
var path = __webpack_require__(41);

var Object = path.Object;

module.exports = function getOwnPropertyNames(it) {
  return Object.getOwnPropertyNames(it);
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);
var fails = __webpack_require__(10);
var nativeGetOwnPropertyNames = __webpack_require__(94).f;

var FAILS_ON_PRIMITIVES = fails(function () { return !Object.getOwnPropertyNames(1); });

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  getOwnPropertyNames: nativeGetOwnPropertyNames
});


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(159);

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(160);

module.exports = parent;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(161);
var path = __webpack_require__(41);

module.exports = path.Object.assign;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);
var assign = __webpack_require__(162);

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(22);
var fails = __webpack_require__(10);
var objectKeys = __webpack_require__(54);
var getOwnPropertySymbolsModule = __webpack_require__(95);
var propertyIsEnumerableModule = __webpack_require__(39);
var toObject = __webpack_require__(47);
var IndexedObject = __webpack_require__(9);

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(164);

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(165);

module.exports = parent;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var concat = __webpack_require__(166);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.concat;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.concat) ? concat : own;
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(85);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('Array').concat;


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return _createApp__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(339);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPage", function() { return _createPage__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(415);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return _createComponent__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createApp; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_transferOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(169);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(171);
/* harmony import */ var _patch_builtInKeysMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(337);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(207);
/* harmony import */ var _platform_patch_web_lifecycle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(329);








var webAppHooksMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["makeMap"])(_platform_patch_web_lifecycle__WEBPACK_IMPORTED_MODULE_7__["LIFECYCLE"].APP_HOOKS);

function filterOptions(options, appData) {
  var _context;

  var newOptions = {};

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(options)).call(_context, function (key) {
    if (_patch_builtInKeysMap__WEBPACK_IMPORTED_MODULE_5__["default"][key]) {
      return;
    }

    if (false) {} else {
      newOptions[key] = options[key];
    }
  });

  return newOptions;
}

function createApp(option) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var builtInMixins = [];
  var appData = {};

  if (false) {} else {
    builtInMixins.push({
      onLaunch() {
        _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this, option.proto);
      }

    });
  }

  var _transferOptions = Object(_core_transferOptions__WEBPACK_IMPORTED_MODULE_3__["default"])(option, 'app', builtInMixins),
      rawOptions = _transferOptions.rawOptions;

  var defaultOptions = filterOptions(Object(_core_mergeOptions__WEBPACK_IMPORTED_MODULE_4__["default"])(rawOptions, 'app', false), appData);

  if (false) {} else {
    var ctor = config.customCtor || global.currentCtor || App;
    ctor(defaultOptions);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transferOptions; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(158);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _injectMixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(170);
/* harmony import */ var _mergeOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(171);
/* harmony import */ var _convertor_getConvertMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(338);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(207);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(300);








function transferOptions(options, type) {
  var builtInMixins = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var currentInject;

  if (global.currentInject && global.currentInject.moduleId === global.currentModuleId) {
    currentInject = global.currentInject;
  } // 文件编译路径


  options.mpxFileResource = global.currentResource; // 注入全局写入的mixins，原生模式下不进行注入

  if (!options.__nativeRender__) {
    options = Object(_injectMixins__WEBPACK_IMPORTED_MODULE_3__["mergeInjectedMixins"])(options, type);
  }

  if (currentInject && currentInject.injectComputed) {
    // 编译计算属性注入
    options.computed = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, options.computed, currentInject.injectComputed);
  } // 转换mode


  options.mpxConvertMode = options.mpxConvertMode || Object(_convertor_getConvertMode__WEBPACK_IMPORTED_MODULE_5__["getConvertMode"])(global.currentSrcMode);
  var rawOptions = Object(_mergeOptions__WEBPACK_IMPORTED_MODULE_4__["default"])(options, type); // 注入内建的mixins, 内建mixin是按原始平台编写的，所以合并规则和rootMixins保持一致

  rawOptions.mixins = builtInMixins;

  if (currentInject && currentInject.propKeys) {
    var _context;

    var computedKeys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(options.computed || {}); // 头条小程序受限父子组件生命周期顺序的问题，向子组件传递computed属性，子组件初始挂载时是拿不到对应数据的，在此做出提示


    _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0___default()(_context = currentInject.propKeys).call(_context, function (key) {
      if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["findItem"])(computedKeys, key)) {
        Object(_helper_log__WEBPACK_IMPORTED_MODULE_7__["warn"])("The child component can't achieve the value of computed prop\u3010".concat(key, "\u3011when attached, which is governed by the order of tt miniprogram's lifecycles."), global.currentResource);
      }
    });
  }

  return {
    rawOptions,
    currentInject
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectMixins", function() { return injectMixins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInjectedMixins", function() { return getInjectedMixins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeInjectedMixins", function() { return mergeInjectedMixins; });
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(116);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(163);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(125);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_8__);










function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2___default.a === "undefined" || _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_1___default()(o) == null) { if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_8___default()(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context2; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5___default()(_context2 = Object.prototype.toString.call(o)).call(_context2, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_3___default()(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var MIXINS_MAPS = {
  app: [],
  page: [],
  component: []
};
function injectMixins(mixins, type) {
  if (typeof type === 'string') {
    type = [type];
  } else {
    type = ['app', 'page', 'component'];
  }

  if (!_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_8___default()(mixins)) {
    mixins = [mixins];
  }

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7___default()(type).call(type, function (key) {
    var curMixins = MIXINS_MAPS[key];

    if (curMixins) {
      var _iterator = _createForOfIteratorHelper(mixins),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var mixin = _step.value;
          _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_6___default()(curMixins).call(curMixins, mixin) === -1 && curMixins.push(mixin);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  });

  return this;
}
function getInjectedMixins(type) {
  var _context;

  return _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5___default()(_context = MIXINS_MAPS[type]).call(_context, 0);
}
function mergeInjectedMixins(options, type) {
  var injectedMixins = getInjectedMixins(type);

  if (injectedMixins.length) {
    options.mixins = options.mixins ? _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(injectedMixins).call(injectedMixins, options.mixins) : injectedMixins;
  }

  return options;
}

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMixin", function() { return getMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDefault", function() { return mergeDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeHooks", function() { return mergeHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeShallowObj", function() { return mergeShallowObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeArray", function() { return mergeArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeToArray", function() { return mergeToArray; });
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(116);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(125);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(172);
/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(194);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(158);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(163);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(202);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(207);
/* harmony import */ var _convertor_convertor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(312);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(300);
/* harmony import */ var _platform_patch_builtInKeysMap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(337);
/* harmony import */ var _implement__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(332);















function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2___default.a === "undefined" || _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_1___default()(o) == null) { if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_9___default()(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context14; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(_context14 = Object.prototype.toString.call(o)).call(_context14, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_3___default()(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var currentHooksMap = {};
var curType;
var convertRule;
var mpxCustomKeysMap;
function mergeOptions() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var type = arguments.length > 1 ? arguments[1] : undefined;
  var needConvert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  // 缓存混合模式下的自定义属性列表
  mpxCustomKeysMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_14__["makeMap"])(options.mpxCustomKeysForBlend || []); // needConvert为false，表示衔接原生的root配置，那么此时的配置都是当前原生环境支持的配置，不需要转换

  convertRule = Object(_convertor_convertor__WEBPACK_IMPORTED_MODULE_15__["getConvertRule"])(needConvert ? options.mpxConvertMode || 'default' : 'local'); // 微信小程序使用Component创建page

  if (type === 'page' && convertRule.pageMode) {
    curType = convertRule.pageMode;
  } else {
    curType = type;
  }

  currentHooksMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_14__["makeMap"])(convertRule.lifecycle[curType]);
  var newOptions = {};
  extractMixins(newOptions, options, needConvert);

  if (needConvert) {
    proxyHooks(newOptions); // 自定义补充转换函数

    typeof convertRule.convert === 'function' && convertRule.convert(newOptions, type); // 当存在lifecycle2时，在转换后将currentHooksMap替换，以确保后续合并hooks时转换后的hooks能够被正确处理

    if (convertRule.lifecycle2) {
      var _context, _context2;

      var implementedHooks = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_13___default()(_context = convertRule.lifecycle[curType]).call(_context, function (hook) {
        return _implement__WEBPACK_IMPORTED_MODULE_18__["implemented"][hook];
      });

      currentHooksMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_14__["makeMap"])(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12___default()(_context2 = convertRule.lifecycle2[curType]).call(_context2, implementedHooks));
    }
  }

  newOptions.mpxCustomKeysForBlend = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_11___default()(mpxCustomKeysMap);
  return transformHOOKS(newOptions);
}
function getMixin() {
  var mixin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // 用于ts反向推导mixin类型
  return mixin.mixins ? extractMixins({}, mixin, true) : mixin;
}

function extractMixins(mergeOptions, options, needConvert) {
  // 如果编译阶段behaviors都被当做mixins处理，那么进行别名替换
  if (options.behaviors && options.behaviors[0] && options.behaviors[0].__mpx_behaviors_to_mixins__) {
    Object(_helper_utils__WEBPACK_IMPORTED_MODULE_14__["aliasReplace"])(options, 'behaviors', 'mixins');
  }

  if (options.mixins) {
    var _iterator = _createForOfIteratorHelper(options.mixins),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var mixin = _step.value;

        if (typeof mixin === 'string') {
          Object(_helper_log__WEBPACK_IMPORTED_MODULE_16__["error"])('String-formatted builtin behaviors is not supported to be converted to mixins.', options.mpxFileResource);
        } else {
          extractMixins(mergeOptions, mixin, needConvert);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } // 出于业务兼容考虑暂时不移除pageShow/pageHide
  // options = extractPageShow(options)


  options = extractLifetimes(options);
  options = extractPageHooks(options);

  if (needConvert) {
    options = extractObservers(options);
  }

  mergeMixins(mergeOptions, options);
  return mergeOptions;
} // function extractPageShow (options) {
//   if (options.pageShow || options.pageHide) {
//     const mixin = {
//       pageLifetimes: {}
//     }
//     if (options.pageShow) {
//       mixin.pageLifetimes.show = options.pageShow
//       delete options.pageShow
//     }
//     if (options.pageHide) {
//       mixin.pageLifetimes.hide = options.pageHide
//       delete options.pageHide
//     }
//     mergeToArray(options, mixin, 'pageLifetimes')
//   }
//   return options
// }


function extractLifetimes(options) {
  if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_14__["isObject"])(options.lifetimes)) {
    var newOptions = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_10___default()({}, options, options.lifetimes);

    delete newOptions.lifetimes;
    return newOptions;
  } else {
    return options;
  }
}

function extractObservers(options) {
  var _context3;

  var observers = options.observers;

  var props = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_10___default()({}, options.properties, options.props);

  var watch = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_10___default()({}, options.watch);

  var extract = false;

  function mergeWatch(key, config) {
    if (watch[key]) {
      if (!_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_9___default()(watch[key])) watch[key] = [watch[key]];
    } else {
      watch[key] = [];
    }

    watch[key].push(config);
    extract = true;
  }

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8___default()(_context3 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_11___default()(props)).call(_context3, function (key) {
    var prop = props[key];

    if (prop && prop.observer) {
      mergeWatch(key, {
        handler() {
          var _callback, _context4;

          var callback = prop.observer;

          if (typeof callback === 'string') {
            callback = this[callback];
          }

          for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
            rest[_key] = arguments[_key];
          }

          typeof callback === 'function' && (_callback = callback).call.apply(_callback, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12___default()(_context4 = [this]).call(_context4, rest));
        },

        deep: true,
        // 延迟触发首次回调，处理转换支付宝时在observer中查询组件的行为，如vant/picker中，如不考虑该特殊情形可用immediate代替
        immediateAsync: true
      });
    }
  });

  if (observers) {
    var _context5;

    _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8___default()(_context5 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_11___default()(observers)).call(_context5, function (key) {
      var callback = observers[key];

      if (callback) {
        var _context6;

        var deep = false;

        var propsArr = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_11___default()(props);

        var keyPathArr = [];

        _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8___default()(_context6 = key.split(',')).call(_context6, function (item) {
          var result = _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_7___default()(item).call(item);

          result && keyPathArr.push(result);
        }); // 针对prop的watch都需要立刻执行一次


        var watchProp = false;

        var _iterator2 = _createForOfIteratorHelper(propsArr),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var prop = _step2.value;

            if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_14__["findItem"])(keyPathArr, prop)) {
              watchProp = true;
              break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        if (_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_6___default()(key).call(key, '.**') > -1) {
          deep = true;
          key = key.replace('.**', '');
        }

        mergeWatch(key, {
          handler(val, old) {
            var cb = callback;

            if (typeof cb === 'string') {
              cb = this[cb];
            }

            if (typeof cb === 'function') {
              var _cb, _context7;

              if (keyPathArr.length < 2) {
                val = [val];
                old = [old];
              }

              (_cb = cb).call.apply(_cb, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12___default()(_context7 = [this]).call(_context7, _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(val), _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(old)));
            }
          },

          deep,
          immediateAsync: watchProp
        });
      }
    });
  }

  if (extract) {
    var newOptions = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_10___default()({}, options);

    newOptions.watch = watch;
    delete newOptions.observers;
    return newOptions;
  }

  return options;
}

function extractPageHooks(options) {
  if (curType === 'blend') {
    var _context8;

    var newOptions = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_10___default()({}, options);

    var methods = newOptions.methods;
    var pageHooksMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_14__["makeMap"])(convertRule.lifecycle.page);
    methods && _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8___default()(_context8 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_11___default()(methods)).call(_context8, function (key) {
      if (pageHooksMap[key]) {
        if (newOptions[key]) {
          Object(_helper_log__WEBPACK_IMPORTED_MODULE_16__["warn"])("Duplicate lifecycle [".concat(key, "] is defined in root options and methods, please check."), options.mpxFileResource);
        }

        newOptions[key] = methods[key];
        delete methods[key];
      }
    });
    return newOptions;
  } else {
    return options;
  }
}

function mergeMixins(parent, child) {
  for (var key in child) {
    if (currentHooksMap[key]) {
      mergeHooks(parent, child, key);
    } else if (/^(data|dataFn)$/.test(key)) {
      mergeDataFn(parent, child, key);
    } else if (/^(computed|properties|props|methods|proto|options|relations)$/.test(key)) {
      mergeShallowObj(parent, child, key);
    } else if (/^(watch|observers|pageLifetimes|events)$/.test(key)) {
      mergeToArray(parent, child, key);
    } else if (/^behaviors|externalClasses$/.test(key)) {
      mergeArray(parent, child, key);
    } else if (key !== 'mixins' && key !== 'mpxCustomKeysForBlend') {
      // 收集非函数的自定义属性，在Component创建的页面中挂载到this上，模拟Page创建页面的表现
      if (curType === 'blend' && typeof child[key] !== 'function' && !_platform_patch_builtInKeysMap__WEBPACK_IMPORTED_MODULE_17__["default"][key]) {
        mpxCustomKeysMap[key] = true;
      }

      mergeDefault(parent, child, key);
    }
  }
}

function mergeDefault(parent, child, key) {
  parent[key] = child[key];
}
function mergeHooks(parent, child, key) {
  if (parent[key]) {
    parent[key].push(child[key]);
  } else {
    parent[key] = [child[key]];
  }
}
function mergeShallowObj(parent, child, key) {
  var parentVal = parent[key];
  var childVal = child[key];

  if (!parentVal) {
    parent[key] = parentVal = {};
  }

  _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_10___default()(parentVal, childVal);
}

function mergeDataFn(parent, child, key) {
  var parentVal = parent[key];
  var childVal = child[key];

  if (typeof parentVal === 'function' && key === 'data') {
    parent.dataFn = parentVal;
    delete parent.data;
  }

  if (typeof childVal !== 'function') {
    mergeShallowObj(parent, child, 'data');
  } else {
    parentVal = parent.dataFn;

    if (!parentVal) {
      parent.dataFn = childVal;
    } else {
      parent.dataFn = function mergeFn() {
        var to = parentVal.call(this);
        var from = childVal.call(this);
        return _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_10___default()(to, from);
      };
    }
  }
}

function mergeArray(parent, child, key) {
  var _context9;

  var childVal = child[key];

  if (!parent[key]) {
    parent[key] = [];
  }

  parent[key] = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12___default()(_context9 = parent[key]).call(_context9, childVal);
}
function mergeToArray(parent, child, key) {
  var _context10;

  var parentVal = parent[key];
  var childVal = child[key];

  if (!parentVal) {
    parent[key] = parentVal = {};
  }

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8___default()(_context10 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_11___default()(childVal)).call(_context10, function (key) {
    if (key in parentVal) {
      var _parent = parentVal[key];
      var _child = childVal[key];

      if (!_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_9___default()(_parent)) {
        _parent = [_parent];
      }

      if (!_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_9___default()(_child)) {
        _child = [_child];
      }

      parentVal[key] = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12___default()(_parent).call(_parent, _child);
    } else {
      parentVal[key] = _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_9___default()(childVal[key]) ? childVal[key] : [childVal[key]];
    }
  });
}

function composeHooks(target, includes) {
  var _context11;

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8___default()(_context11 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_11___default()(target)).call(_context11, function (key) {
    if (!includes || includes[key]) {
      var hooksArr = target[key];
      hooksArr && (target[key] = function () {
        var result;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        for (var i = 0; i < hooksArr.length; i++) {
          if (typeof hooksArr[i] === 'function') {
            var data = hooksArr[i].apply(this, args);
            data !== undefined && (result = data);
          }

          if (result === '__abort__') {
            break;
          }
        }

        return result;
      });
    }
  });
}

function proxyHooks(options) {
  var _context12;

  var lifecycleProxyMap = convertRule.lifecycleProxyMap;
  lifecycleProxyMap && _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8___default()(_context12 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_11___default()(lifecycleProxyMap)).call(_context12, function (key) {
    var _context13;

    var newHooks = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(_context13 = options[key] || []).call(_context13);

    var proxyArr = lifecycleProxyMap[key];
    proxyArr && _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8___default()(proxyArr).call(proxyArr, function (lifecycle) {
      if (options[lifecycle] && currentHooksMap[lifecycle]) {
        newHooks.push.apply(newHooks, options[lifecycle]);
        delete options[lifecycle];
      }
    });
    newHooks.length && (options[key] = newHooks);
  });
}

function transformHOOKS(options) {
  composeHooks(options, currentHooksMap);
  options.pageLifetimes && composeHooks(options.pageLifetimes);
  options.events && composeHooks(options.events);

  if (curType === 'blend' && convertRule.support) {
    var componentHooksMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_14__["makeMap"])(convertRule.lifecycle.component);

    for (var key in options) {
      // 使用Component创建page实例，页面专属生命周期&自定义方法需写在methods内部
      if (typeof options[key] === 'function' && key !== 'dataFn' && !componentHooksMap[key]) {
        if (!options.methods) options.methods = {};
        options.methods[key] = options[key];
        delete options[key];
      }
    }
  }

  return options;
}

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(173);

var iterableToArray = __webpack_require__(177);

var unsupportedIterableToArray = __webpack_require__(190);

var nonIterableSpread = __webpack_require__(193);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(174);

var arrayLikeToArray = __webpack_require__(176);

function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(175);

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(77);

module.exports = parent;


/***/ }),
/* 176 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__(178);

var _isIterable = __webpack_require__(180);

var _Symbol = __webpack_require__(183);

function _iterableToArray(iter) {
  if (typeof _Symbol !== "undefined" && _isIterable(Object(iter))) return _Array$from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(179);

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(118);

module.exports = parent;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(181);

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
__webpack_require__(71);
var isIterable = __webpack_require__(182);

module.exports = isIterable;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(66);
var wellKnownSymbol = __webpack_require__(49);
var Iterators = __webpack_require__(14);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(184);

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(84);
__webpack_require__(185);
__webpack_require__(186);
__webpack_require__(187);
__webpack_require__(188);
// TODO: Remove from `core-js@4`
__webpack_require__(189);

module.exports = parent;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(97);

// `Symbol.asyncDispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('asyncDispose');


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(97);

// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('dispose');


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(97);

// `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable
defineWellKnownSymbol('observable');


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(97);

// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('patternMatch');


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = __webpack_require__(97);

defineWellKnownSymbol('replaceAll');


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__(178);

var _sliceInstanceProperty = __webpack_require__(191);

var arrayLikeToArray = __webpack_require__(176);

function _unsupportedIterableToArray(o, minLen) {
  var _context;

  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);

  var n = _sliceInstanceProperty(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);

  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return _Array$from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(192);

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(127);

module.exports = parent;


/***/ }),
/* 193 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(195);

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(196);

module.exports = parent;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var trim = __webpack_require__(197);

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.trim;
  return typeof it === 'string' || it === StringPrototype
    || (it instanceof String && own === StringPrototype.trim) ? trim : own;
};


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(198);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('String').trim;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var $trim = __webpack_require__(199).trim;
var forcedStringTrimMethod = __webpack_require__(201);

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(12);
var whitespaces = __webpack_require__(200);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),
/* 200 */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(10);
var whitespaces = __webpack_require__(200);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(203);

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(204);

module.exports = parent;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var filter = __webpack_require__(205);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.filter;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.filter) ? filter : own;
};


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(206);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('Array').filter;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(37);
var $filter = __webpack_require__(98).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(88);
var arrayMethodUsesToLength = __webpack_require__(130);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncLock", function() { return asyncLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aliasReplace", function() { return aliasReplace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findItem", function() { return findItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeMap", function() { return normalizeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExistAttr", function() { return isExistAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setByPath", function() { return setByPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getByPath", function() { return getByPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineGetterSetter", function() { return defineGetterSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxy", function() { return proxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerableKeys", function() { return enumerableKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasProto", function() { return hasProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidArrayIndex", function() { return isValidArrayIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "def", function() { return def; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likeArray", function() { return likeArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDef", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyClass", function() { return stringifyClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hump2dash", function() { return hump2dash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dash2hump", function() { return dash2hump; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStyleText", function() { return parseStyleText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genStyleText", function() { return genStyleText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeObjectArray", function() { return mergeObjectArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeDynamicStyle", function() { return normalizeDynamicStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyObject", function() { return isEmptyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aIsSubPathOfB", function() { return aIsSubPathOfB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstKey", function() { return getFirstKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeData", function() { return mergeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processUndefined", function() { return processUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffAndCloneA", function() { return diffAndCloneA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidIdentifierStr", function() { return isValidIdentifierStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberStr", function() { return isNumberStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectDataset", function() { return collectDataset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preProcessRenderData", function() { return preProcessRenderData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMap", function() { return makeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChainKeyOfObj", function() { return getChainKeyOfObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delChainKeyOfObj", function() { return delChainKeyOfObj; });
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(116);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(208);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(202);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(215);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_is_extensible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(221);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_is_extensible__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_is_extensible__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_seal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(225);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_seal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_seal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_is_sealed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(229);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_is_sealed__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_is_sealed__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_freeze__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(233);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_freeze__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_freeze__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_is_frozen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(237);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_is_frozen__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_is_frozen__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_every__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(241);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_every__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_every__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_starts_with__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(246);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_starts_with__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_starts_with__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(254);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(259);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(264);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(143);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(194);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(268);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(158);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(163);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(75);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(273);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(125);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(294);
/* harmony import */ var _getByPath__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(295);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(300);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(301);





























function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2___default.a === "undefined" || _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_1___default()(o) == null) { if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_25___default()(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context16; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_27___default()(_context16 = Object.prototype.toString.call(o)).call(_context16, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_3___default()(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




 // type在支付宝环境下不一定准确，判断是普通对象优先使用isPlainObject（新版支付宝不复现，issue #644 修改isPlainObject实现与type等价）

function type(n) {
  var _context;

  return _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_27___default()(_context = Object.prototype.toString.call(n)).call(_context, 8, -1);
}
function asyncLock() {
  var lock = false;
  return function (fn, onerror) {
    if (!lock) {
      lock = true;

      _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_26___default.a.resolve().then(function () {
        lock = false;
        typeof fn === 'function' && fn();
      }).catch(function (e) {
        lock = false;
        Object(_log__WEBPACK_IMPORTED_MODULE_30__["error"])('Something wrong in mpx asyncLock func execution, please check.', undefined, e);
        typeof onerror === 'function' && onerror();
      });
    }
  };
}
function aliasReplace() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var alias = arguments.length > 1 ? arguments[1] : undefined;
  var target = arguments.length > 2 ? arguments[2] : undefined;

  if (options[alias]) {
    if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_25___default()(options[alias])) {
      var _context2;

      options[target] = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_24___default()(_context2 = options[alias]).call(_context2, options[target] || []);
    } else if (isObject(options[alias])) {
      options[target] = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_23___default()({}, options[alias], options[target]);
    } else {
      options[target] = options[alias];
    }

    delete options[alias];
  }

  return options;
}
function findItem() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var key = arguments.length > 1 ? arguments[1] : undefined;

  var _iterator = _createForOfIteratorHelper(arr),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (key instanceof RegExp && key.test(item) || item === key) {
        return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return false;
}
function normalizeMap(prefix, arr) {
  if (typeof prefix !== 'string') {
    arr = prefix;
    prefix = '';
  }

  if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_25___default()(arr)) {
    var map = {};

    _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_22___default()(arr).call(arr, function (value) {
      var _context3;

      map[value] = prefix ? _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_24___default()(_context3 = "".concat(prefix, ".")).call(_context3, value) : value;
    });

    return map;
  }

  if (prefix && isObject(arr)) {
    var _context4;

    arr = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_23___default()({}, arr);

    _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_22___default()(_context4 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_21___default()(arr)).call(_context4, function (key) {
      if (typeof arr[key] === 'string') {
        var _context5;

        arr[key] = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_24___default()(_context5 = "".concat(prefix, ".")).call(_context5, arr[key]);
      }
    });
  }

  return arr;
}
function isExistAttr(obj, attr) {
  var type = typeof obj;
  var isNullOrUndefined = obj === null || obj === undefined;

  if (isNullOrUndefined) {
    return false;
  } else if (type === 'object' || type === 'function') {
    return attr in obj;
  } else {
    return obj[attr] !== undefined;
  }
}
function setByPath(data, pathStrOrArr, value) {
  Object(_getByPath__WEBPACK_IMPORTED_MODULE_29__["default"])(data, pathStrOrArr, function (current, key, meta) {
    if (meta.isEnd) {
      if (false) {} else {
        Object(_observer_index__WEBPACK_IMPORTED_MODULE_31__["set"])(current, key, value);
      }
    } else if (!current[key]) {
      current[key] = {};
    }

    return current[key];
  });
}
function getByPath(data, pathStrOrArr, defaultVal, errTip) {
  var results = [];
  var normalizedArr = [];

  if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_25___default()(pathStrOrArr)) {
    normalizedArr = [pathStrOrArr];
  } else if (typeof pathStrOrArr === 'string') {
    var _context6;

    normalizedArr = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_20___default()(_context6 = pathStrOrArr.split(',')).call(_context6, function (str) {
      return _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_19___default()(str).call(str);
    });
  }

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_22___default()(normalizedArr).call(normalizedArr, function (path) {
    if (!path) return;

    var result = Object(_getByPath__WEBPACK_IMPORTED_MODULE_29__["default"])(data, path, function (value, key) {
      var newValue;

      if (isExistAttr(value, key)) {
        newValue = value[key];
      } else {
        newValue = errTip;
      }

      return newValue;
    }); // 小程序setData时不允许undefined数据


    results.push(result === undefined ? defaultVal : result);
  });

  return results.length > 1 ? results : results[0];
}
function defineGetterSetter(target, key, getValue, setValue, context) {
  var get;
  var set;

  if (typeof getValue === 'function') {
    get = context ? _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_18___default()(getValue).call(getValue, context) : getValue;
  } else {
    get = function get() {
      return getValue;
    };
  }

  if (typeof setValue === 'function') {
    set = context ? _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_18___default()(setValue).call(setValue, context) : setValue;
  }

  var descriptor = {
    get,
    configurable: true,
    enumerable: true
  };
  if (set) descriptor.set = set;

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_17___default()(target, key, descriptor);
}
function proxy(target, source, keys, readonly, onConflict) {
  keys = keys || _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_21___default()(source);

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_22___default()(keys).call(keys, function (key) {
    var descriptor = {
      get() {
        return source[key];
      },

      configurable: true,
      enumerable: true
    };
    !readonly && (descriptor.set = function (val) {
      source[key] = val;
    });

    if (onConflict) {
      if (key in target) {
        if (onConflict(key) === false) return;
      }
    }

    _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_17___default()(target, key, descriptor);
  });

  return target;
} // 包含原型链上属性keys

function enumerableKeys(obj) {
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  }

  return keys;
} // 此函数用于合并mpx插件挂载到mpx.prototype中的实例属性，因此需要进行原型链属性的合并

function extend(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _sources = sources; _i < _sources.length; _i++) {
    var source = _sources[_i];

    if (isObject(source)) {
      for (var key in source) {
        target[key] = source[key];
      }
    }
  }

  return target;
}
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}
function isPlainObject(value) {
  // if (value === null || typeof value !== 'object') return false
  // const proto = Object.getPrototypeOf(value)
  // return proto === Object.prototype || proto === null
  // issue #644 为了使通过class创建的实例对象也能被响应化，改变此处实现，不过需要注意在旧版支付宝中对于data中声明的promise实例也可能进行响应化使得promise不可用（新版支付宝不复现该问题）
  return type(value) === 'Object';
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
var hasProto = ('__proto__' in {});
function isValidArrayIndex(val) {
  var n = _babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_16___default()(String(val));

  return n >= 0 && Math.floor(n) === n && isFinite(val);
}
function remove(arr, item) {
  if (arr.length) {
    var index = _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_15___default()(arr).call(arr, item);

    if (index > -1) {
      return _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_14___default()(arr).call(arr, index, 1);
    }
  }
}
function def(obj, key, val, enumerable) {
  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_17___default()(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
function likeArray(arr) {
  return _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_25___default()(arr);
}
function isDef(v) {
  return v !== undefined && v !== null;
}
function stringifyClass(value) {
  if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_25___default()(value)) {
    return stringifyArray(value);
  }

  if (isObject(value)) {
    return stringifyObject(value);
  }

  if (typeof value === 'string') {
    return value;
  }

  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;

  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) res += ' ';
      res += stringified;
    }
  }

  return res;
}

function stringifyObject(value) {
  var res = '';

  for (var key in value) {
    if (value[key]) {
      if (res) res += ' ';
      res += key;
    }
  }

  return res;
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}
function hump2dash(value) {
  return value.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase();
  });
}
function dash2hump(value) {
  return value.replace(/-([a-z])/g, function (match, p1) {
    return p1.toUpperCase();
  });
}
function parseStyleText(cssText) {
  var _context7;

  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_22___default()(_context7 = cssText.split(listDelimiter)).call(_context7, function (item) {
    if (item) {
      var _context8, _context9;

      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[dash2hump(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_19___default()(_context8 = tmp[0]).call(_context8))] = _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_19___default()(_context9 = tmp[1]).call(_context9));
    }
  });

  return res;
}
function genStyleText(styleObj) {
  var res = '';

  for (var key in styleObj) {
    if (styleObj.hasOwnProperty(key)) {
      var _context10;

      var item = styleObj[key];
      res += _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_24___default()(_context10 = "".concat(hump2dash(key), ":")).call(_context10, item, ";");
    }
  }

  return res;
}
function mergeObjectArray(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_23___default()(res, arr[i]);
    }
  }

  return res;
}
function normalizeDynamicStyle(value) {
  if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_25___default()(value)) {
    return mergeObjectArray(value);
  }

  if (typeof value === 'string') {
    return parseStyleText(value);
  }

  return value;
}
function isEmptyObject(obj) {
  if (!obj) {
    return true;
  }

  for (var key in obj) {
    return false;
  }

  return true;
}
function aIsSubPathOfB(a, b) {
  if (_babel_runtime_corejs3_core_js_stable_instance_starts_with__WEBPACK_IMPORTED_MODULE_13___default()(a).call(a, b) && a !== b) {
    var nextChar = a[b.length];

    if (nextChar === '.') {
      return _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_27___default()(a).call(a, b.length + 1);
    } else if (nextChar === '[') {
      return _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_27___default()(a).call(a, b.length);
    }
  }
}
function getFirstKey(path) {
  return /^[^[.]*/.exec(path)[0];
}

function doMergeData(target, source) {
  var _context11;

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_22___default()(_context11 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_21___default()(source)).call(_context11, function (srcKey) {
    if (target.hasOwnProperty(srcKey)) {
      target[srcKey] = source[srcKey];
    } else {
      var processed = false;

      var tarKeys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_21___default()(target);

      for (var i = 0; i < tarKeys.length; i++) {
        var tarKey = tarKeys[i];

        if (aIsSubPathOfB(tarKey, srcKey)) {
          delete target[tarKey];
          target[srcKey] = source[srcKey];
          processed = true;
          continue;
        }

        var subPath = aIsSubPathOfB(srcKey, tarKey);

        if (subPath) {
          setByPath(target[tarKey], subPath, source[srcKey]);
          processed = true;
          break;
        }
      }

      if (!processed) {
        target[srcKey] = source[srcKey];
      }
    }
  });

  return target;
}

function mergeData(target) {
  if (target) {
    for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      sources[_key2 - 1] = arguments[_key2];
    }

    _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_22___default()(sources).call(sources, function (source) {
      if (source) doMergeData(target, source);
    });
  }

  return target;
}
function processUndefined(obj) {
  var result = {};

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] !== undefined) {
        result[key] = obj[key];
      } else {
        result[key] = '';
      }
    }
  }

  return result;
}
function noop() {}
function diffAndCloneA(a, b) {
  var diffData = null;
  var curPath = '';
  var diff = false;

  function deepDiffAndCloneA(a, b, currentDiff) {
    var setDiff = function setDiff(val) {
      if (val) {
        currentDiff = val;

        if (curPath) {
          diffData = diffData || {};
          diffData[curPath] = clone;
        }
      }
    };

    var clone = a;

    if (typeof a !== 'object' || a === null) {
      if (!currentDiff) setDiff(a !== b);
    } else {
      var _toString = Object.prototype.toString;

      var className = _toString.call(a);

      var sameClass = className === _toString.call(b);

      var length;
      var lastPath;

      if (isPlainObject(a)) {
        var _context12;

        var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_21___default()(a);

        length = keys.length;
        clone = {};
        if (!currentDiff) setDiff(!sameClass || length < _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_21___default()(b).length || !_babel_runtime_corejs3_core_js_stable_instance_every__WEBPACK_IMPORTED_MODULE_12___default()(_context12 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_21___default()(b)).call(_context12, function (key) {
          return a.hasOwnProperty(key);
        }));
        lastPath = curPath;

        for (var i = 0; i < length; i++) {
          var key = keys[i];
          curPath += ".".concat(key);
          clone[key] = deepDiffAndCloneA(a[key], sameClass ? b[key] : undefined, currentDiff);
          curPath = lastPath;
        } // 继承原始对象的freeze/seal/preventExtensions操作


        if (_babel_runtime_corejs3_core_js_stable_object_is_frozen__WEBPACK_IMPORTED_MODULE_11___default()(a)) {
          _babel_runtime_corejs3_core_js_stable_object_freeze__WEBPACK_IMPORTED_MODULE_10___default()(clone);
        } else if (_babel_runtime_corejs3_core_js_stable_object_is_sealed__WEBPACK_IMPORTED_MODULE_9___default()(a)) {
          _babel_runtime_corejs3_core_js_stable_object_seal__WEBPACK_IMPORTED_MODULE_8___default()(clone);
        } else if (!_babel_runtime_corejs3_core_js_stable_object_is_extensible__WEBPACK_IMPORTED_MODULE_7___default()(a)) {
          _babel_runtime_corejs3_core_js_stable_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_6___default()(clone);
        }
      } else if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_25___default()(a)) {
        length = a.length;
        clone = [];
        if (!currentDiff) setDiff(!sameClass || length < b.length);
        lastPath = curPath;

        for (var _i2 = 0; _i2 < length; _i2++) {
          curPath += "[".concat(_i2, "]");
          clone[_i2] = deepDiffAndCloneA(a[_i2], sameClass ? b[_i2] : undefined, currentDiff);
          curPath = lastPath;
        } // 继承原始数组的freeze/seal/preventExtensions操作


        if (_babel_runtime_corejs3_core_js_stable_object_is_frozen__WEBPACK_IMPORTED_MODULE_11___default()(a)) {
          _babel_runtime_corejs3_core_js_stable_object_freeze__WEBPACK_IMPORTED_MODULE_10___default()(clone);
        } else if (_babel_runtime_corejs3_core_js_stable_object_is_sealed__WEBPACK_IMPORTED_MODULE_9___default()(a)) {
          _babel_runtime_corejs3_core_js_stable_object_seal__WEBPACK_IMPORTED_MODULE_8___default()(clone);
        } else if (!_babel_runtime_corejs3_core_js_stable_object_is_extensible__WEBPACK_IMPORTED_MODULE_7___default()(a)) {
          _babel_runtime_corejs3_core_js_stable_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_6___default()(clone);
        }
      } else if (a instanceof RegExp) {
        if (!currentDiff) setDiff(!sameClass || '' + a !== '' + b);
      } else if (a instanceof Date) {
        if (!currentDiff) setDiff(!sameClass || +a !== +b);
      } else {
        if (!currentDiff) setDiff(!sameClass || a !== b);
      }
    }

    if (currentDiff) {
      diff = currentDiff;
    }

    return clone;
  }

  return {
    clone: deepDiffAndCloneA(a, b, diff),
    diff,
    diffData
  };
}
function isValidIdentifierStr(str) {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(str);
}
function isNumberStr(str) {
  return /^\d+$/.test(str);
}
var datasetReg = /^data-(.+)$/;
function collectDataset(props) {
  var dataset = {};

  for (var key in props) {
    if (props.hasOwnProperty(key)) {
      var matched = datasetReg.exec(key);

      if (matched) {
        dataset[matched[1]] = props[key];
      }
    }
  }

  return dataset;
}
/**
 * process renderData, remove sub node if visit parent node already
 * @param {Object} renderData
 * @return {Object} processedRenderData
 */

function preProcessRenderData(renderData) {
  var _context13;

  // method for get key path array
  var processKeyPathMap = function processKeyPathMap(keyPathMap) {
    var keyPath = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_21___default()(keyPathMap);

    return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(keyPath).call(keyPath, function (keyA) {
      return _babel_runtime_corejs3_core_js_stable_instance_every__WEBPACK_IMPORTED_MODULE_12___default()(keyPath).call(keyPath, function (keyB) {
        if (_babel_runtime_corejs3_core_js_stable_instance_starts_with__WEBPACK_IMPORTED_MODULE_13___default()(keyA).call(keyA, keyB) && keyA !== keyB) {
          var nextChar = keyA[keyB.length];

          if (nextChar === '.' || nextChar === '[') {
            return false;
          }
        }

        return true;
      });
    });
  };

  var processedRenderData = {};
  var renderDataFinalKey = processKeyPathMap(renderData);

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_22___default()(_context13 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_21___default()(renderData)).call(_context13, function (item) {
    if (_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_15___default()(renderDataFinalKey).call(renderDataFinalKey, item) > -1) {
      processedRenderData[item] = renderData[item];
    }
  });

  return processedRenderData;
}
function makeMap(arr) {
  return _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_4___default()(arr).call(arr, function (obj, item) {
    obj[item] = true;
    return obj;
  }, {});
}
/**
 * Get object values by chaining-key
 * @param {Object} obj target Object
 * @param {String} key chaining-key, e.g.: 'a.b.c'
 */

function getChainKeyOfObj() {
  var _context14;

  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_4___default()(_context14 = key.split('.')).call(_context14, function (o, k) {
    return o && o[k];
  }, obj);
}
/**
 * Delete object values by chaining-key
 * @param {Object} obj target object
 * @param {String} key chaining-key
 */

function delChainKeyOfObj() {
  var _context15;

  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_4___default()(_context15 = key.split('.')).call(_context15, function (o, k, index, arr) {
    if (arr.length === index + 1) {
      try {
        return delete o[k];
      } catch (e) {
        // undefined
        return false;
      }
    }

    return o && o[k];
  }, obj);
}

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(209);

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(210);

module.exports = parent;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var reduce = __webpack_require__(211);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.reduce;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.reduce) ? reduce : own;
};


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(212);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('Array').reduce;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var $reduce = __webpack_require__(213).left;
var arrayMethodIsStrict = __webpack_require__(142);
var arrayMethodUsesToLength = __webpack_require__(130);
var CHROME_VERSION = __webpack_require__(89);
var IS_NODE = __webpack_require__(214);

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(43);
var toObject = __webpack_require__(47);
var IndexedObject = __webpack_require__(9);
var toLength = __webpack_require__(57);

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(11);
var global = __webpack_require__(17);

module.exports = classof(global.process) == 'process';


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(216);

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(217);

module.exports = parent;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(218);
var path = __webpack_require__(41);

module.exports = path.Object.preventExtensions;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);
var isObject = __webpack_require__(26);
var onFreeze = __webpack_require__(219).onFreeze;
var FREEZING = __webpack_require__(220);
var fails = __webpack_require__(10);

var nativePreventExtensions = Object.preventExtensions;
var FAILS_ON_PRIMITIVES = fails(function () { nativePreventExtensions(1); });

// `Object.preventExtensions` method
// https://tc39.github.io/ecma262/#sec-object.preventextensions
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  preventExtensions: function preventExtensions(it) {
    return nativePreventExtensions && isObject(it) ? nativePreventExtensions(onFreeze(it)) : it;
  }
});


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(35);
var isObject = __webpack_require__(26);
var has = __webpack_require__(30);
var defineProperty = __webpack_require__(23).f;
var uid = __webpack_require__(34);
var FREEZING = __webpack_require__(220);

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(10);

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(222);

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(223);

module.exports = parent;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(224);
var path = __webpack_require__(41);

module.exports = path.Object.isExtensible;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);
var fails = __webpack_require__(10);
var isObject = __webpack_require__(26);

var nativeIsExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { nativeIsExtensible(1); });

// `Object.isExtensible` method
// https://tc39.github.io/ecma262/#sec-object.isextensible
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  isExtensible: function isExtensible(it) {
    return isObject(it) ? nativeIsExtensible ? nativeIsExtensible(it) : true : false;
  }
});


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(226);

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(227);

module.exports = parent;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(228);
var path = __webpack_require__(41);

module.exports = path.Object.seal;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);
var isObject = __webpack_require__(26);
var onFreeze = __webpack_require__(219).onFreeze;
var FREEZING = __webpack_require__(220);
var fails = __webpack_require__(10);

var nativeSeal = Object.seal;
var FAILS_ON_PRIMITIVES = fails(function () { nativeSeal(1); });

// `Object.seal` method
// https://tc39.github.io/ecma262/#sec-object.seal
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  seal: function seal(it) {
    return nativeSeal && isObject(it) ? nativeSeal(onFreeze(it)) : it;
  }
});


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(230);

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(231);

module.exports = parent;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(232);
var path = __webpack_require__(41);

module.exports = path.Object.isSealed;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);
var fails = __webpack_require__(10);
var isObject = __webpack_require__(26);

var nativeIsSealed = Object.isSealed;
var FAILS_ON_PRIMITIVES = fails(function () { nativeIsSealed(1); });

// `Object.isSealed` method
// https://tc39.github.io/ecma262/#sec-object.issealed
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  isSealed: function isSealed(it) {
    return isObject(it) ? nativeIsSealed ? nativeIsSealed(it) : false : true;
  }
});


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(234);

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(235);

module.exports = parent;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(236);
var path = __webpack_require__(41);

module.exports = path.Object.freeze;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);
var FREEZING = __webpack_require__(220);
var fails = __webpack_require__(10);
var isObject = __webpack_require__(26);
var onFreeze = __webpack_require__(219).onFreeze;

var nativeFreeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function () { nativeFreeze(1); });

// `Object.freeze` method
// https://tc39.github.io/ecma262/#sec-object.freeze
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return nativeFreeze && isObject(it) ? nativeFreeze(onFreeze(it)) : it;
  }
});


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(238);

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(239);

module.exports = parent;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(240);
var path = __webpack_require__(41);

module.exports = path.Object.isFrozen;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);
var fails = __webpack_require__(10);
var isObject = __webpack_require__(26);

var nativeIsFrozen = Object.isFrozen;
var FAILS_ON_PRIMITIVES = fails(function () { nativeIsFrozen(1); });

// `Object.isFrozen` method
// https://tc39.github.io/ecma262/#sec-object.isfrozen
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  isFrozen: function isFrozen(it) {
    return isObject(it) ? nativeIsFrozen ? nativeIsFrozen(it) : false : true;
  }
});


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(242);

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(243);

module.exports = parent;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var every = __webpack_require__(244);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.every;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.every) ? every : own;
};


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(245);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('Array').every;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var $every = __webpack_require__(98).every;
var arrayMethodIsStrict = __webpack_require__(142);
var arrayMethodUsesToLength = __webpack_require__(130);

var STRICT_METHOD = arrayMethodIsStrict('every');
var USES_TO_LENGTH = arrayMethodUsesToLength('every');

// `Array.prototype.every` method
// https://tc39.github.io/ecma262/#sec-array.prototype.every
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(247);

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(248);

module.exports = parent;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var startsWith = __webpack_require__(249);

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.startsWith;
  return typeof it === 'string' || it === StringPrototype
    || (it instanceof String && own === StringPrototype.startsWith) ? startsWith : own;
};


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(250);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('String').startsWith;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var getOwnPropertyDescriptor = __webpack_require__(38).f;
var toLength = __webpack_require__(57);
var notARegExp = __webpack_require__(251);
var requireObjectCoercible = __webpack_require__(12);
var correctIsRegExpLogic = __webpack_require__(253);
var IS_PURE = __webpack_require__(33);

var nativeStartsWith = ''.startsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return nativeStartsWith
      ? nativeStartsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(252);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
var classof = __webpack_require__(11);
var wellKnownSymbol = __webpack_require__(49);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(49);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(255);

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(256);

module.exports = parent;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var splice = __webpack_require__(257);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.splice;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.splice) ? splice : own;
};


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(258);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('Array').splice;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var toAbsoluteIndex = __webpack_require__(59);
var toInteger = __webpack_require__(58);
var toLength = __webpack_require__(57);
var toObject = __webpack_require__(47);
var arraySpeciesCreate = __webpack_require__(87);
var createProperty = __webpack_require__(86);
var arrayMethodHasSpeciesSupport = __webpack_require__(88);
var arrayMethodUsesToLength = __webpack_require__(130);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(260);

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(261);

module.exports = parent;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(262);
var path = __webpack_require__(41);

module.exports = path.parseFloat;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);
var parseFloatImplementation = __webpack_require__(263);

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != parseFloatImplementation }, {
  parseFloat: parseFloatImplementation
});


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var trim = __webpack_require__(199).trim;
var whitespaces = __webpack_require__(200);

var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(265);

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(266);

module.exports = parent;


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(267);
var path = __webpack_require__(41);

var Object = path.Object;

var defineProperty = module.exports = function defineProperty(it, key, desc) {
  return Object.defineProperty(it, key, desc);
};

if (Object.defineProperty.sham) defineProperty.sham = true;


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);
var DESCRIPTORS = __webpack_require__(22);
var objectDefinePropertyModile = __webpack_require__(23);

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(269);

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(270);

module.exports = parent;


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var map = __webpack_require__(271);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.map;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.map) ? map : own;
};


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(272);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('Array').map;


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var $map = __webpack_require__(98).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(88);
var arrayMethodUsesToLength = __webpack_require__(130);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(274);

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(275);

module.exports = parent;


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(276);
__webpack_require__(91);
__webpack_require__(278);
__webpack_require__(291);
__webpack_require__(292);
__webpack_require__(293);
__webpack_require__(71);
__webpack_require__(6);
var path = __webpack_require__(41);

module.exports = path.Promise;


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var getPrototypeOf = __webpack_require__(46);
var setPrototypeOf = __webpack_require__(67);
var create = __webpack_require__(52);
var createNonEnumerableProperty = __webpack_require__(21);
var createPropertyDescriptor = __webpack_require__(29);
var iterate = __webpack_require__(277);

var $AggregateError = function AggregateError(errors, message) {
  var that = this;
  if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);
  if (setPrototypeOf) {
    that = setPrototypeOf(new Error(undefined), getPrototypeOf(that));
  }
  if (message !== undefined) createNonEnumerableProperty(that, 'message', String(message));
  var errorsArray = [];
  iterate(errors, errorsArray.push, { that: errorsArray });
  createNonEnumerableProperty(that, 'errors', errorsArray);
  return that;
};

$AggregateError.prototype = create(Error.prototype, {
  constructor: createPropertyDescriptor(5, $AggregateError),
  message: createPropertyDescriptor(5, ''),
  name: createPropertyDescriptor(5, 'AggregateError')
});

$({ global: true }, {
  AggregateError: $AggregateError
});


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(27);
var isArrayIteratorMethod = __webpack_require__(123);
var toLength = __webpack_require__(57);
var bind = __webpack_require__(42);
var getIteratorMethod = __webpack_require__(74);
var iteratorClose = __webpack_require__(122);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var IS_PURE = __webpack_require__(33);
var global = __webpack_require__(17);
var getBuiltIn = __webpack_require__(62);
var NativePromise = __webpack_require__(279);
var redefine = __webpack_require__(69);
var redefineAll = __webpack_require__(280);
var setToStringTag = __webpack_require__(63);
var setSpecies = __webpack_require__(281);
var isObject = __webpack_require__(26);
var aFunction = __webpack_require__(43);
var anInstance = __webpack_require__(282);
var inspectSource = __webpack_require__(18);
var iterate = __webpack_require__(277);
var checkCorrectnessOfIteration = __webpack_require__(124);
var speciesConstructor = __webpack_require__(283);
var task = __webpack_require__(284).set;
var microtask = __webpack_require__(286);
var promiseResolve = __webpack_require__(287);
var hostReportErrors = __webpack_require__(289);
var newPromiseCapabilityModule = __webpack_require__(288);
var perform = __webpack_require__(290);
var InternalStateModule = __webpack_require__(15);
var isForced = __webpack_require__(40);
var wellKnownSymbol = __webpack_require__(49);
var IS_NODE = __webpack_require__(214);
var V8_VERSION = __webpack_require__(89);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);

module.exports = global.Promise;


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(69);

module.exports = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];
    else redefine(target, key, src[key], options);
  } return target;
};


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(62);
var definePropertyModule = __webpack_require__(23);
var wellKnownSymbol = __webpack_require__(49);
var DESCRIPTORS = __webpack_require__(22);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 282 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(27);
var aFunction = __webpack_require__(43);
var wellKnownSymbol = __webpack_require__(49);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var fails = __webpack_require__(10);
var bind = __webpack_require__(42);
var html = __webpack_require__(61);
var createElement = __webpack_require__(25);
var IS_IOS = __webpack_require__(285);
var IS_NODE = __webpack_require__(214);

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(90);

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var getOwnPropertyDescriptor = __webpack_require__(38).f;
var macrotask = __webpack_require__(284).set;
var IS_IOS = __webpack_require__(285);
var IS_NODE = __webpack_require__(214);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  if (!IS_IOS && !IS_NODE && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(27);
var isObject = __webpack_require__(26);
var newPromiseCapability = __webpack_require__(288);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(43);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 290 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var aFunction = __webpack_require__(43);
var newPromiseCapabilityModule = __webpack_require__(288);
var perform = __webpack_require__(290);
var iterate = __webpack_require__(277);

// `Promise.allSettled` method
// https://github.com/tc39/proposal-promise-allSettled
$({ target: 'Promise', stat: true }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var aFunction = __webpack_require__(43);
var getBuiltIn = __webpack_require__(62);
var newPromiseCapabilityModule = __webpack_require__(288);
var perform = __webpack_require__(290);
var iterate = __webpack_require__(277);

var PROMISE_ANY_ERROR = 'No one promise resolved';

// `Promise.any` method
// https://github.com/tc39/proposal-promise-any
$({ target: 'Promise', stat: true }, {
  any: function any(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aFunction(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        errors.push(undefined);
        remaining++;
        promiseResolve.call(C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var IS_PURE = __webpack_require__(33);
var NativePromise = __webpack_require__(279);
var fails = __webpack_require__(10);
var getBuiltIn = __webpack_require__(62);
var speciesConstructor = __webpack_require__(283);
var promiseResolve = __webpack_require__(287);
var redefine = __webpack_require__(69);

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = typeof onFinally == 'function';
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// patch native Promise.prototype for native async functions
if (!IS_PURE && typeof NativePromise == 'function' && !NativePromise.prototype['finally']) {
  redefine(NativePromise.prototype, 'finally', getBuiltIn('Promise').prototype['finally']);
}


/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getByPath; });
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(116);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(125);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(194);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(296);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(297);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);










function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2___default.a === "undefined" || _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_1___default()(o) == null) { if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_5___default()(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(_context = Object.prototype.toString.call(o)).call(_context, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_3___default()(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var curStack;
var targetStacks;
var property;

var Stack = /*#__PURE__*/function () {
  function Stack(mark) {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, Stack);

    this.mark = mark; // 字符串stack需要特殊处理

    this.type = /['"]/.test(mark) ? 'string' : 'normal';
    this.value = [];
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(Stack, [{
    key: "push",
    value: function push(data) {
      this.value.push(data);
    }
  }]);

  return Stack;
}();

function startStack(mark) {
  // 开启栈或关闭栈都意味着前面的字符拼接截止
  propertyJoinOver();
  curStack && targetStacks.push(curStack);
  curStack = new Stack(mark);
}

function endStack() {
  // 开启栈或关闭栈都意味着前面的字符拼接截止
  propertyJoinOver(); // 字符串栈直接拼接

  var result = curStack.type === 'string' ? '__mpx_str_' + curStack.value.join('') : curStack.value;
  curStack = targetStacks.pop(); // 将当前stack结果保存到父级stack里

  curStack.push(result);
}

function propertyJoinOver() {
  property = _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_6___default()(property).call(property);
  if (property) curStack.push(property);
  property = '';
}

function init() {
  property = ''; // 根stack

  curStack = new Stack();
  targetStacks = [];
}

function parse(str) {
  init();

  var _iterator = _createForOfIteratorHelper(str),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var char = _step.value;

      // 当前遍历引号内的字符串时
      if (curStack.type === 'string') {
        // 若为对应的结束flag，则出栈，反之直接push
        curStack.mark === char ? endStack() : curStack.push(char);
      } else if (/['"[]/.test(char)) {
        startStack(char);
      } else if (char === ']') {
        endStack();
      } else if (char === '.' || char === '+') {
        propertyJoinOver();
        if (char === '+') curStack.push(char);
      } else {
        property += char;
      }
    } // 字符解析收尾

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  propertyJoinOver();
  return curStack.value;
}

function outPutByPath(context, path, isSimple, transfer) {
  var result = context;
  var len = path.length;
  var meta = {
    isEnd: false,
    stop: false
  };

  for (var index = 0; index < len; index++) {
    if (index === len - 1) meta.isEnd = true;
    var key = void 0;
    var item = path[index];

    if (result) {
      if (isSimple) {
        key = item;
      } else if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_5___default()(item)) {
        // 获取子数组的输出结果作为当前key
        key = outPutByPath(context, item, isSimple, transfer);
      } else if (/^__mpx_str_/.test(item)) {
        // 字符串一定会被[]包裹，一定在子数组中
        result = item.replace('__mpx_str_', '');
      } else if (/^\d+$/.test(item)) {
        // 数字一定会被[]包裹，一定在子数组中
        result = +item;
      } else if (item === '+') {
        // 获取加号后面所有path最终的结果
        result += outPutByPath(context, _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(path).call(path, index + 1), isSimple, transfer);
        break;
      } else {
        key = item;
      }

      if (key !== undefined) {
        result = transfer ? transfer(result, key, meta) : result[key];
        if (meta.stop) break;
      }
    } else {
      break;
    }
  }

  return result;
}

function getByPath(context, pathStrOrArr, transfer) {
  if (!pathStrOrArr) {
    return context;
  }

  var isSimple = false;

  if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_5___default()(pathStrOrArr)) {
    isSimple = true;
  } else if (!/[[\]]/.test(pathStrOrArr)) {
    pathStrOrArr = pathStrOrArr.split('.');
    isSimple = true;
  }

  if (!isSimple) pathStrOrArr = parse(pathStrOrArr);
  return outPutByPath(context, pathStrOrArr, isSimple, transfer);
}

/***/ }),
/* 296 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(298);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(299);

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(266);

module.exports = parent;


/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);

function warn(msg, location, e) {
  return log('warn', msg, location, e);
}
function error(msg, location, e) {
  return log('error', msg, location, e);
}

function log(type, msg, location, e) {
  if (true) {
    var header = "[Mpx runtime ".concat(type, "]: ");

    if (location) {
      var _context;

      header = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = "[Mpx runtime ".concat(type, " at ")).call(_context, location, "]: ");
    }

    console[type](header + msg);
    if (e) console[type](e);
  }
}

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observerState", function() { return observerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return Observer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineReactive", function() { return defineReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(264);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(302);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_is_extensible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(221);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_is_extensible__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_is_extensible__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(296);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(297);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(154);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(306);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(307);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(207);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(300);














var arrayKeys = _babel_runtime_corejs3_core_js_stable_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_8___default()(_array__WEBPACK_IMPORTED_MODULE_10__["arrayMethods"]);
/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */


var observerState = {
  shouldConvert: true
};
/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */

var Observer = /*#__PURE__*/function () {
  function Observer(value) {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, Observer);

    this.value = value;
    this.dep = new _dep__WEBPACK_IMPORTED_MODULE_9__["default"]();
    this.vmCount = 0;
    Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["def"])(value, '__ob__', this);

    if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_5___default()(value)) {
      var augment = _helper_utils__WEBPACK_IMPORTED_MODULE_11__["hasProto"] ? protoAugment : copyAugment;
      augment(value, _array__WEBPACK_IMPORTED_MODULE_10__["arrayMethods"], arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }
  /**
   * Walk through each property and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */


  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(Observer, [{
    key: "walk",
    value: function walk(obj) {
      var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(obj);

      for (var i = 0; i < keys.length; i++) {
        defineReactive(obj, keys[i], obj[keys[i]]);
      }
    }
    /**
     * Observe a list of Array items.
     */

  }, {
    key: "observeArray",
    value: function observeArray(items) {
      for (var i = 0, l = items.length; i < l; i++) {
        observe(items[i]);
      }
    }
  }]);

  return Observer;
}(); // helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */

function protoAugment(target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}
/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */

/* istanbul ignore next */


function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["def"])(target, key, src[key]);
  }
}
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */


function observe(value, asRootData) {
  if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["isObject"])(value)) {
    return;
  }

  var ob;

  if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["hasOwn"])(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (observerState.shouldConvert && (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_5___default()(value) || Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["isPlainObject"])(value)) && _babel_runtime_corejs3_core_js_stable_object_is_extensible__WEBPACK_IMPORTED_MODULE_3___default()(value)) {
    ob = new Observer(value);
  }

  if (asRootData && ob) {
    ob.vmCount++;
  }

  return ob;
}
/**
 * Define a reactive property on an Object.
 */

function defineReactive(obj, key, val, customSetter, shallow) {
  var dep = new _dep__WEBPACK_IMPORTED_MODULE_9__["default"]();

  var property = _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(obj, key);

  if (property && property.configurable === false) {
    return;
  } // cater for pre-defined getter/setters


  var getter = property && property.get;
  var setter = property && property.set;
  var childOb = !shallow && observe(val);

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_1___default()(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;

      if (_dep__WEBPACK_IMPORTED_MODULE_9__["default"].target) {
        dep.depend();

        if (childOb) {
          childOb.dep.depend();

          if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_5___default()(value)) {
            dependArray(value);
          }
        }
      }

      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */


      customSetter && customSetter();

      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }

      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */

function set(target, key, val) {
  if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_5___default()(target) && Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["isValidArrayIndex"])(key)) {
    target.length = Math.max(target.length, key);

    _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(target).call(target, key, 1, val);

    return val;
  }

  if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["hasOwn"])(target, key)) {
    target[key] = val;
    return val;
  }

  var ob = target.__ob__;

  if (ob && ob.vmCount) {
    Object(_helper_log__WEBPACK_IMPORTED_MODULE_12__["warn"])('Avoid adding reactive properties to the root data at runtime, declare it upfront in the data option!');
    return val;
  }

  if (!ob) {
    target[key] = val;
    return val;
  }

  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val;
}
/**
 * Delete a property and trigger change if necessary.
 */

function del(target, key) {
  if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_5___default()(target) && Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["isValidArrayIndex"])(key)) {
    _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(target).call(target, key, 1);

    return;
  }

  var ob = target.__ob__;

  if (ob && ob.vmCount) {
    Object(_helper_log__WEBPACK_IMPORTED_MODULE_12__["warn"])('Avoid deleting properties on the root data, just set it to null!');
    return;
  }

  if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["hasOwn"])(target, key)) {
    return;
  }

  delete target[key];

  if (!ob) {
    return;
  }

  ob.dep.notify();
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */

function dependArray(value) {
  for (var e, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();

    if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_5___default()(e)) {
      dependArray(e);
    }
  }
}

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(303);

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(304);

module.exports = parent;


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(305);
var path = __webpack_require__(41);

var Object = path.Object;

var getOwnPropertyDescriptor = module.exports = function getOwnPropertyDescriptor(it, key) {
  return Object.getOwnPropertyDescriptor(it, key);
};

if (Object.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor.sham = true;


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);
var fails = __webpack_require__(10);
var toIndexedObject = __webpack_require__(8);
var nativeGetOwnPropertyDescriptor = __webpack_require__(38).f;
var DESCRIPTORS = __webpack_require__(22);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushTarget", function() { return pushTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popTarget", function() { return popTarget; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(296);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(297);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(207);




var uid = 0;
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */

var Dep = /*#__PURE__*/function () {
  function Dep() {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Dep);

    this.id = uid++;
    this.subs = [];
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Dep, [{
    key: "addSub",
    value: function addSub(sub) {
      this.subs.push(sub);
    }
  }, {
    key: "removeSub",
    value: function removeSub(sub) {
      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_3__["remove"])(this.subs, sub);
    }
  }, {
    key: "depend",
    value: function depend() {
      if (Dep.target) {
        Dep.target.addDep(this);
      }
    }
  }, {
    key: "notify",
    value: function notify() {
      var _context;

      // stabilize the subscriber list first
      var subs = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default()(_context = this.subs).call(_context);

      for (var i = 0, l = subs.length; i < l; i++) {
        subs[i].update();
      }
    }
  }]);

  return Dep;
}(); // the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.



Dep.target = null;
var targetStack = [];
function pushTarget(_target) {
  if (Dep.target) targetStack.push(Dep.target);
  Dep.target = _target;
}
function popTarget() {
  Dep.target = targetStack.pop();
}

/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayMethods", function() { return arrayMethods; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(308);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_create__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_create__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(207);




var _context;

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = _babel_runtime_corejs3_core_js_stable_object_create__WEBPACK_IMPORTED_MODULE_2___default()(arrayProto)
/**
 * Intercept mutating methods and emit events
 */
;

_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(_context = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']).call(_context, function (method) {
  // cache original method
  var original = arrayProto[method];
  Object(_helper_utils__WEBPACK_IMPORTED_MODULE_3__["def"])(arrayMethods, method, function mutator() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;

    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;

      case 'splice':
        inserted = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default()(args).call(args, 2);
        break;
    }

    if (inserted) ob.observeArray(inserted); // notify change

    ob.dep.notify();
    return result;
  });
});

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(309);

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(310);

module.exports = parent;


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(311);
var path = __webpack_require__(41);

var Object = path.Object;

module.exports = function create(P, D) {
  return Object.create(P, D);
};


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);
var DESCRIPTORS = __webpack_require__(22);
var create = __webpack_require__(52);

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  create: create
});


/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConvertRule", function() { return setConvertRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConvertRule", function() { return getConvertRule; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(264);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(313);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(317);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(302);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(202);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(322);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(158);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(325);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(326);
/* harmony import */ var _platform_patch_ali_lifecycle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(328);
/* harmony import */ var _platform_patch_web_lifecycle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(329);
/* harmony import */ var _mergeLifecycle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(330);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(207);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(300);
/* harmony import */ var _wxToAli__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(331);
/* harmony import */ var _wxToWeb__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(333);
/* harmony import */ var _wxToSwan__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(334);
/* harmony import */ var _wxToQq__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(335);
/* harmony import */ var _wxToTt__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(336);











function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8___default()(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context3; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8___default()(_context3 = ownKeys(Object(source))).call(_context3, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }











 // 生命周期模板

var lifecycleTemplates = {
  wx: _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_10__["LIFECYCLE"],
  ali: _platform_patch_ali_lifecycle__WEBPACK_IMPORTED_MODULE_11__["LIFECYCLE"],
  swan: _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_10__["LIFECYCLE"],
  qq: _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_10__["LIFECYCLE"],
  tt: _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_10__["LIFECYCLE"]
}; // 根据当前环境获取的默认生命周期信息

var lifecycleInfo;
var pageMode;

if (false) {} else if (false) {} else {
  lifecycleInfo = _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_10__;
  pageMode = 'blend';
}
/**
 * 转换规则包含四点
 * lifecycle [object] 生命周期
 * lifecycleProxyMap [object] 代理规则
 * pageMode [string] 页面生命周期合并模式, 目前仅wx支持[blend]
 * support [boolean]当前平台是否支持当前pageMode
 * convert [function] 自定义转换函数, 接收一个options
 */


var defaultConvertRule = {
  lifecycle: Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_13__["mergeLifecycle"])(lifecycleInfo.LIFECYCLE),
  lifecycleProxyMap: lifecycleInfo.lifecycleProxyMap,
  pageMode,
  support: !!pageMode,
  convert: null
};
var RULEMAPS = {
  local: _objectSpread({}, defaultConvertRule),
  default: defaultConvertRule,
  wxToWeb: _wxToWeb__WEBPACK_IMPORTED_MODULE_17__["default"],
  // 微信转web rule
  wxToSwan: _objectSpread(_objectSpread({}, defaultConvertRule), _wxToSwan__WEBPACK_IMPORTED_MODULE_18__["default"]),
  wxToQq: _objectSpread(_objectSpread({}, defaultConvertRule), _wxToQq__WEBPACK_IMPORTED_MODULE_19__["default"]),
  wxToTt: _objectSpread(_objectSpread({}, defaultConvertRule), _wxToTt__WEBPACK_IMPORTED_MODULE_20__["default"]),
  wxToAli: _wxToAli__WEBPACK_IMPORTED_MODULE_16__["default"] // 微信转支付宝rule

}; // 外部控制默认转换规则

function setConvertRule(rule) {
  var _context;

  if (rule.lifecycleTemplate) {
    rule.lifecycle = lifecycleTemplates[rule.lifecycleTemplate];
  }

  if (rule.lifecycle) {
    // 合并内建钩子
    rule.lifecycle = Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_13__["mergeLifecycle"])(rule.lifecycle);
  }

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(defaultConvertRule)).call(_context, function (key) {
    if (rule.hasOwnProperty(key)) {
      if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_14__["isObject"])(defaultConvertRule[key])) {
        defaultConvertRule[key] = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_6___default()({}, defaultConvertRule[key], rule[key]);
      } else {
        defaultConvertRule[key] = rule[key];
      }
    }
  });
}
function getConvertRule(convertMode) {
  var rule;

  if (typeof convertMode === 'function') {
    rule = convertMode() || {};
    var lifecycle = lifecycleTemplates[rule.lifecycleTemplate] || rule.lifecycle; // 混入内部钩子

    rule.lifecycle = Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_13__["mergeLifecycle"])(lifecycle);
  } else {
    rule = RULEMAPS[convertMode];
  }

  if (!rule || !rule.lifecycle) {
    Object(_helper_log__WEBPACK_IMPORTED_MODULE_15__["error"])("Absence of convert rule for ".concat(convertMode, ", please check."));
  } else {
    return rule;
  }
}

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(314);

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(315);

module.exports = parent;


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(316);
var path = __webpack_require__(41);

var Object = path.Object;

var defineProperties = module.exports = function defineProperties(T, D) {
  return Object.defineProperties(T, D);
};

if (Object.defineProperties.sham) defineProperties.sham = true;


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);
var DESCRIPTORS = __webpack_require__(22);
var defineProperties = __webpack_require__(53);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(318);

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(319);

module.exports = parent;


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(320);
var path = __webpack_require__(41);

module.exports = path.Object.getOwnPropertyDescriptors;


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);
var DESCRIPTORS = __webpack_require__(22);
var ownKeys = __webpack_require__(321);
var toIndexedObject = __webpack_require__(8);
var getOwnPropertyDescriptorModule = __webpack_require__(38);
var createProperty = __webpack_require__(86);

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(62);
var getOwnPropertyNamesModule = __webpack_require__(93);
var getOwnPropertySymbolsModule = __webpack_require__(95);
var anObject = __webpack_require__(27);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(323);

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(324);

module.exports = parent;


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(92);
var path = __webpack_require__(41);

module.exports = path.Object.getOwnPropertySymbols;


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(298);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycleProxyMap", function() { return lifecycleProxyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE", function() { return LIFECYCLE; });
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(327);

var APP_HOOKS = ['onLaunch', 'onShow', 'onHide', 'onError', 'onPageNotFound', 'onUnhandledRejection', 'onThemeChange'];
var PAGE_HOOKS = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap', 'onResize'];
var COMPONENT_HOOKS = ['beforeCreate', 'created', 'attached', 'ready', 'moved', 'detached', 'updated', 'pageShow', 'pageHide', 'definitionFilter'];
var lifecycleProxyMap = {
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["BEFORECREATE"]]: ['beforeCreate'],
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["CREATED"]]: ['created', 'attached'],
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["UPDATED"]]: ['updated']
};
var LIFECYCLE = {
  APP_HOOKS,
  PAGE_HOOKS,
  COMPONENT_HOOKS
};

/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEFORECREATE", function() { return BEFORECREATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATED", function() { return CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEFOREMOUNT", function() { return BEFOREMOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUNTED", function() { return MOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATED", function() { return UPDATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESTROYED", function() { return DESTROYED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INNER_LIFECYCLES", function() { return INNER_LIFECYCLES; });
var BEFORECREATE = '__beforeCreate__';
var CREATED = '__created__';
var BEFOREMOUNT = '__beforeMount__';
var MOUNTED = '__mounted__';
var UPDATED = '__updated__';
var DESTROYED = '__destroyed__';
var INNER_LIFECYCLES = [BEFORECREATE, CREATED, BEFOREMOUNT, MOUNTED, UPDATED, DESTROYED];

/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycleProxyMap", function() { return lifecycleProxyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE", function() { return LIFECYCLE; });
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(327);

var APP_HOOKS = ['onLaunch', 'onShow', 'onHide', 'onError', 'onShareAppMessage', 'onUnhandledRejection'];
var PAGE_HOOKS = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTitleClick', 'onOptionMenuClick', 'onUpdated', 'onBeforeCreate'];
var COMPONENT_HOOKS = ['onInit', 'deriveDataFromProps', 'didMount', 'didUpdate', 'didUnmount', 'updated', 'beforeCreate', 'pageShow', 'pageHide'];
var lifecycleProxyMap = {
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["BEFORECREATE"]]: ['beforeCreate', 'onBeforeCreate'],
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["CREATED"]]: ['onLoad', 'onInit'],
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["UPDATED"]]: ['updated', 'onUpdated']
};
var LIFECYCLE = {
  APP_HOOKS,
  PAGE_HOOKS,
  COMPONENT_HOOKS
};

/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE", function() { return LIFECYCLE; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);


var _context, _context2;

var COMPONENT_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'beforeDestroy', 'destroyed', 'errorCaptured'];

var PAGE_HOOKS = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = []).call(_context, COMPONENT_HOOKS, ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onPageScroll', 'onTabItemTap', 'onResize']);

var APP_HOOKS = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = []).call(_context2, COMPONENT_HOOKS, ['onLaunch', 'onShow', 'onHide', 'onError', 'onPageNotFound', 'onUnhandledRejection', 'onThemeChange']);

var LIFECYCLE = {
  APP_HOOKS,
  PAGE_HOOKS,
  COMPONENT_HOOKS
};

/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeLifecycle", function() { return mergeLifecycle; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(327);


function mergeLifecycle(lifecycle) {
  if (lifecycle) {
    var _context, _context2, _context3;

    var appHooks = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = lifecycle.APP_HOOKS || []).call(_context, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["INNER_LIFECYCLES"]);

    var pageHooks = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = lifecycle.PAGE_HOOKS || []).call(_context2, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["INNER_LIFECYCLES"]);

    var componentHooks = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context3 = lifecycle.COMPONENT_HOOKS || []).call(_context3, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["INNER_LIFECYCLES"]);

    return {
      'app': appHooks,
      'page': pageHooks,
      'component': componentHooks,
      'blend': _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(pageHooks).call(pageHooks, lifecycle.COMPONENT_HOOKS || [])
    };
  }
}

/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(326);
/* harmony import */ var _platform_patch_ali_lifecycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(328);
/* harmony import */ var _mergeLifecycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(330);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(171);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(300);
/* harmony import */ var _core_implement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(332);









var NOTSUPPORTS = ['moved', 'definitionFilter'];

function convertErrorDesc(key) {
  Object(_helper_log__WEBPACK_IMPORTED_MODULE_7__["error"])("Options.".concat(key, " is not supported in runtime conversion from wx to ali."), global.currentResource);
}

function notSupportTip(options) {
  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(NOTSUPPORTS).call(NOTSUPPORTS, function (key) {
    if (options[key]) {
      if (!_core_implement__WEBPACK_IMPORTED_MODULE_8__["implemented"][key]) {
         true && convertErrorDesc(key);
        delete options[key];
      } else if (_core_implement__WEBPACK_IMPORTED_MODULE_8__["implemented"][key].remove) {
        delete options[key];
      }
    }
  }); // relations部分支持


  var relations = options['relations'];

  if (relations) {
    var _context;

    _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(relations)).call(_context, function (path) {
      var item = relations[path];

      if (item.target) {
        convertErrorDesc('relations > target');
      }

      if (item.linkChanged) {
        convertErrorDesc('relations > linkChanged');
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  lifecycle: Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_5__["mergeLifecycle"])(_platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_3__["LIFECYCLE"]),
  lifecycle2: Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_5__["mergeLifecycle"])(_platform_patch_ali_lifecycle__WEBPACK_IMPORTED_MODULE_4__["LIFECYCLE"]),
  pageMode: 'blend',
  support: false,
  lifecycleProxyMap: {
    '__created__': ['onLoad', 'created', 'attached'],
    '__mounted__': ['ready', 'onReady'],
    '__destroyed__': ['detached', 'onUnload'],
    '__updated__': ['updated']
  },

  convert(options) {
    if (options.properties) {
      var _context2;

      var newProps = {};

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(options.properties)).call(_context2, function (key) {
        var prop = options.properties[key];

        if (prop) {
          if (prop.hasOwnProperty('value')) {
            newProps[key] = prop.value;
          } else {
            var type = prop.hasOwnProperty('type') ? prop.type : prop;
            if (typeof type === 'function') newProps[key] = type();
          }
        }
      });

      options.props = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(newProps, options.props);
      delete options.properties;
    }

    if (options.onResize) {
      Object(_core_mergeOptions__WEBPACK_IMPORTED_MODULE_6__["mergeToArray"])(options, {
        events: {
          onResize: options.onResize
        }
      }, 'events');
      delete options.onResize;
    }

    notSupportTip(options);
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "implemented", function() { return implemented; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return implement; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(207);


var implemented = {};
function implement(name) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$modes = _ref.modes,
      modes = _ref$modes === void 0 ? [] : _ref$modes,
      _ref$processor = _ref.processor,
      processor = _ref$processor === void 0 ? Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["noop"])() : _ref$processor,
      _ref$remove = _ref.remove,
      remove = _ref$remove === void 0 ? false : _ref$remove;

  if (!name) return;

  if (_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0___default()(modes).call(modes, "wx") > -1) {
    processor();
    implemented[name] = {
      remove
    };
  }
}

/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(163);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(172);
/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(326);
/* harmony import */ var _platform_patch_web_lifecycle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(329);
/* harmony import */ var _mergeLifecycle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(330);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(300);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(207);
/* harmony import */ var _core_implement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(332);










 // 暂不支持的wx选项，后期需要各种花式支持

var NOTSUPPORTS = ['moved', 'relations', 'definitionFilter', 'onPageNotFound', 'onShareAppMessage', 'pageShow', 'pageHide'];

function convertErrorDesc(key) {
  Object(_helper_log__WEBPACK_IMPORTED_MODULE_8__["error"])("Options.".concat(key, " is not supported in runtime conversion from wx to web."), global.currentResource);
}

function notSupportTip(options) {
  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(NOTSUPPORTS).call(NOTSUPPORTS, function (key) {
    if (options[key]) {
      if (!_core_implement__WEBPACK_IMPORTED_MODULE_10__["implemented"][key]) {
         true && convertErrorDesc(key);
        delete options[key];
      } else if (_core_implement__WEBPACK_IMPORTED_MODULE_10__["implemented"][key].remove) {
        delete options[key];
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  lifecycle: Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_7__["mergeLifecycle"])(_platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_5__["LIFECYCLE"]),
  lifecycle2: Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_7__["mergeLifecycle"])(_platform_patch_web_lifecycle__WEBPACK_IMPORTED_MODULE_6__["LIFECYCLE"]),
  pageMode: 'blend',
  // support传递为true以将methods外层的方法函数合入methods中
  support: true,
  lifecycleProxyMap: {
    '__created__': ['onLoad', 'created', 'attached'],
    '__mounted__': ['ready', 'onReady'],
    '__destroyed__': ['detached', 'onUnload'],
    '__updated__': ['updated'],
    'errorCaptured': ['onError']
  },

  convert(options) {
    if (options.properties) {
      var _context;

      var newProps = {};

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(options.properties)).call(_context, function (key) {
        var prop = options.properties[key];

        if (prop) {
          if (prop.hasOwnProperty('type')) {
            var newProp = {};

            if (prop.hasOwnProperty('optionalTypes')) {
              var _context2;

              newProp.type = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = [prop.type]).call(_context2, _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(prop.optionalTypes));
            } else {
              newProp.type = prop.type;
            }

            if (prop.hasOwnProperty('value')) {
              // vue中对于引用类型数据需要使用函数返回
              newProp.default = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_9__["isObject"])(prop.value) ? function propFn() {
                return Object(_helper_utils__WEBPACK_IMPORTED_MODULE_9__["diffAndCloneA"])(prop.value).clone;
              } : prop.value;
            }

            newProps[key] = newProp;
          } else {
            newProps[key] = prop;
          }
        }
      });

      options.props = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(newProps, options.props);
      delete options.properties;
    }

    notSupportTip(options);
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(300);
/* harmony import */ var _core_implement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(332);




var BEHAVIORS_MAP = {
  'wx://form-field': 'swan://form-field',
  'wx://component-export': 'swan://component-export'
};
var NOTSUPPORTS = ['moved', 'relations'];

function convertErrorDesc(key) {
  Object(_helper_log__WEBPACK_IMPORTED_MODULE_2__["error"])("Options.".concat(key, " is not supported in runtime conversion from wx to swan."), global.currentResource);
}

function notSupportTip(options) {
  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(NOTSUPPORTS).call(NOTSUPPORTS, function (key) {
    if (options[key]) {
      if (!_core_implement__WEBPACK_IMPORTED_MODULE_3__["implemented"][key]) {
         true && convertErrorDesc(key);
        delete options[key];
      } else if (_core_implement__WEBPACK_IMPORTED_MODULE_3__["implemented"][key].remove) {
        delete options[key];
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  convert(options, type) {
    // todo fix swan onshow onload执行顺序
    if (options.behaviors) {
      var _context;

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(_context = options.behaviors).call(_context, function (behavior, idx) {
        if (typeof behavior === 'string' && BEHAVIORS_MAP[behavior]) {
          var _context2;

          _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = options.behaviors).call(_context2, idx, 1, BEHAVIORS_MAP[behavior]);
        }
      });
    }

    if (type === 'page' && !options.__pageCtor__) {
      options.options = options.options || {};
      options.options.addGlobalClass = true;
    }

    notSupportTip(options);
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__);


var BEHAVIORS_MAP = {
  'wx://form-field': 'qq://form-field',
  'wx://component-export': 'qq://component-export'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  convert(options) {
    if (options.behaviors) {
      var _context;

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(_context = options.behaviors).call(_context, function (behavior, idx) {
        if (typeof behavior === 'string' && BEHAVIORS_MAP[behavior]) {
          var _context2;

          _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = options.behaviors).call(_context2, idx, 1, BEHAVIORS_MAP[behavior]);
        }
      });
    }
  }

});

/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(300);



/* harmony default export */ __webpack_exports__["default"] = ({
  convert(options) {
    if (options.behaviors) {
      var _context;

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(_context = options.behaviors).call(_context, function (behavior, idx) {
        if (typeof behavior === 'string') {
          var _context2;

          Object(_helper_log__WEBPACK_IMPORTED_MODULE_2__["error"])("Built-in behavior \"".concat(behavior, "\" is not supported in tt environment!"), global.currentResource);

          _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = options.behaviors).call(_context2, idx, 1);
        }
      });
    }

    if (options.pageLifetimes && options.pageLifetimes.resize) {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_2__["error"])("Options.pageLifetimes.resize is not supported in tt environment!", global.currentResource);
      delete options.pageLifetimes.resize;
    }

    if (options.onResize) {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_2__["error"])("Options.onResize is not supported in tt environment!", global.currentResource);
      delete options.onResize;
    }
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(327);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(207);



var bulitInKeys;

if (false) {} else {
  bulitInKeys = ['dataFn', 'proto', 'mixins', 'watch', 'computed', 'mpxCustomKeysForBlend', 'mpxConvertMode', 'mpxFileResource', '__nativeRender__', '__type__', '__pageCtor__'];
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_2__["makeMap"])(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(bulitInKeys).call(bulitInKeys, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["INNER_LIFECYCLES"])));

/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConvertMode", function() { return getConvertMode; });
var CONVERTMODES = {
  'wx-ali': 'wxToAli',
  'wx-web': 'wxToWeb',
  'wx-swan': 'wxToSwan',
  'wx-qq': 'wxToQq',
  'wx-tt': 'wxToTt'
};
function getConvertMode(srcMode) {
  return CONVERTMODES[srcMode + '-' + "wx"];
}

/***/ }),
/* 339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(340);

/* harmony default export */ __webpack_exports__["default"] = (Object(_patch__WEBPACK_IMPORTED_MODULE_0__["default"])('page'));

/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRenderCallBack", function() { return getRenderCallBack; });
/* harmony import */ var _core_transferOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
/* harmony import */ var _builtInMixins_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(341);
/* harmony import */ var _wx_getDefaultOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(396);
/* harmony import */ var _ali_getDefaultOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(413);
/* harmony import */ var _web_getDefaultOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(414);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(300);






function createFactory(type) {
  return function (options) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        isNative = _ref.isNative,
        customCtor = _ref.customCtor,
        customCtorType = _ref.customCtorType;

    options.__nativeRender__ = !!isNative;
    options.__type__ = type;
    var ctor;

    if (true) {
      if (customCtor) {
        ctor = customCtor;
        customCtorType = customCtorType || type;

        if (type === 'page' && customCtorType === 'page') {
          options.__pageCtor__ = true;
        }
      } else {
        if (global.currentCtor) {
          ctor = global.currentCtor;

          if (global.currentCtorType === 'page') {
            options.__pageCtor__ = true;
          }
        } else {
          if (type === 'page') {
            ctor = Page;
            options.__pageCtor__ = true;
          } else {
            ctor = Component;
          }
        }
      }
    }

    var getDefaultOptions;

    if (false) {} else if (false) {} else {
      getDefaultOptions = _wx_getDefaultOptions__WEBPACK_IMPORTED_MODULE_2__["getDefaultOptions"];
    } // 获取内建的mixins


    var builtInMixins = Object(_builtInMixins_index__WEBPACK_IMPORTED_MODULE_1__["default"])(options, type);

    var _transferOptions = Object(_core_transferOptions__WEBPACK_IMPORTED_MODULE_0__["default"])(options, type, builtInMixins),
        rawOptions = _transferOptions.rawOptions,
        currentInject = _transferOptions.currentInject;

    var defaultOptions = getDefaultOptions(type, {
      rawOptions,
      currentInject
    });

    if (defaultOptions.pageShow || defaultOptions.pageHide) {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_5__["error"])('出于性能考虑，pageShow/pageHide增强钩子将在下个版本被移除，请使用原生的pageLifetimes替代，此外请不要强依赖pageLifetimes.show进行初始化操作，因为pageLifetimes.show并不能保证在初始化时一定被调用！', global.currentResource);
    }

    if (false) {} else if (ctor) {
      return ctor(defaultOptions);
    }
  };
}
function getRenderCallBack(context) {
  return function () {
    if (true) {
      context.updated();
    }
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBuiltInMixins; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(202);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(163);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pageStatusMixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(342);
/* harmony import */ var _proxyEventMixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(343);
/* harmony import */ var _renderHelperMixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(344);
/* harmony import */ var _refsMixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(345);
/* harmony import */ var _showMixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(353);
/* harmony import */ var _relationsMixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(354);
/* harmony import */ var _i18nMixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(355);
/* harmony import */ var _pageTitleMixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(356);
/* harmony import */ var _pageScrollMixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(357);
/* harmony import */ var _pageResizeMixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(387);
/* harmony import */ var _componentGenericsMixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(388);
/* harmony import */ var _getTabBarMixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(389);
/* harmony import */ var _pageRouteMixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(395);















function getBuiltInMixins(options, type) {
  var bulitInMixins = [];

  if (false) {} else {
    // 此为差异抹平类mixins，原生模式下也需要注入也抹平平台差异
    bulitInMixins = [Object(_proxyEventMixin__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_pageStatusMixin__WEBPACK_IMPORTED_MODULE_2__["default"])(type), Object(_refsMixin__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(_relationsMixin__WEBPACK_IMPORTED_MODULE_7__["default"])(type)]; // 此为纯增强类mixins，原生模式下不需要注入

    if (!options.__nativeRender__) {
      bulitInMixins = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(bulitInMixins).call(bulitInMixins, [Object(_renderHelperMixin__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(_showMixin__WEBPACK_IMPORTED_MODULE_6__["default"])(type), Object(_i18nMixin__WEBPACK_IMPORTED_MODULE_8__["default"])()]);
    }
  }

  return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(bulitInMixins).call(bulitInMixins, function (item) {
    return item;
  });
}

/***/ }),
/* 342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pageStatusMixin; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function pageStatusMixin(mixinType) {
  // 只有tt和ali没有pageLifeTimes支持，需要框架实现，其余平台一律使用原生pageLifeTimes
  // 由于业务上大量使用了pageShow进行初始化。。。下个版本再移除非必要的pageShow/Hide实现。。。
  if (mixinType === 'page') {
    var pageMixin = {
      data: {
        mpxPageStatus: 'show'
      },

      onShow() {
        this.mpxPageStatus = 'show';
      },

      onHide() {
        this.mpxPageStatus = 'hide';
      }

    };

    if (false) {}

    return pageMixin;
  } else {
    if (false) {} else {
      return {
        properties: {
          mpxPageStatus: {
            type: String
          }
        },
        watch: {
          mpxPageStatus: {
            handler(val) {
              if (val) {
                var options = this.$rawOptions;
                if (val === 'show' && typeof options.pageShow === 'function') options.pageShow.call(this);
                if (val === 'hide' && typeof options.pageHide === 'function') options.pageHide.call(this);

                if (false) { var pageLifetimes; }
              }
            },

            immediate: true
          }
        }
      };
    }
  }
}

/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return proxyEventMixin; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(208);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(125);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(268);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(207);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(300);








function proxyEventMixin() {
  var methods = {
    __invoke($event) {
      var _this = this;

      var type = $event.type;
      var emitMode = $event.detail && $event.detail.mpxEmit;

      if (!type) {
        throw new Error('Event object must have [type] property!');
      }

      var fallbackType = '';

      if (type === 'begin' || type === 'end') {
        // 地图的 regionchange 事件会派发 e.type 为 begin 和 end 的事件
        fallbackType = 'regionchange';
      }

      var target = $event.currentTarget || $event.target;

      if (!target) {
        throw new Error("[".concat(type, "] event object must have [currentTarget/target] property!"));
      }

      var eventConfigs = target.dataset.eventconfigs || {};
      var curEventConfig = eventConfigs[type] || eventConfigs[fallbackType] || [];
      var returnedValue;

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5___default()(curEventConfig).call(curEventConfig, function (item) {
        var callbackName = item[0];

        if (emitMode) {
          $event = $event.detail.data;
        }

        if (callbackName) {
          var _context;

          var params = item.length > 1 ? _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_3___default()(item).call(item, 1)).call(_context, function (item) {
            // 暂不支持$event.xxx的写法
            // if (/^\$event/.test(item)) {
            //   this.__mpxTempEvent = $event
            //   const value = getByPath(this, item.replace('$event', '__mpxTempEvent'))
            //   // 删除临时变量
            //   delete this.__mpxTempEvent
            //   return value
            if (item === '__mpx_event__') {
              return $event;
            } else {
              return item;
            }
          }) : [$event];

          if (typeof _this[callbackName] === 'function') {
            returnedValue = _this[callbackName].apply(_this, params);
          } else {
            var location = _this.__mpxProxy && _this.__mpxProxy.options.mpxFileResource;
            Object(_helper_log__WEBPACK_IMPORTED_MODULE_7__["error"])("Instance property [".concat(callbackName, "] is not function, please check."), location);
          }
        }
      });

      return returnedValue;
    },

    __model(expr, $event) {
      var valuePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['value'];
      var filterMethod = arguments.length > 3 ? arguments[3] : undefined;
      var innerFilter = {
        trim: function trim(val) {
          return typeof val === 'string' && _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_2___default()(val).call(val);
        }
      };

      var originValue = _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_1___default()(valuePath).call(valuePath, function (acc, cur) {
        return acc[cur];
      }, $event.detail);

      var value = filterMethod ? innerFilter[filterMethod] ? innerFilter[filterMethod](originValue) : typeof this[filterMethod] === 'function' ? this[filterMethod](originValue) : originValue : originValue;
      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["setByPath"])(this, expr, value);
    }

  };

  if (false) {}

  return {
    methods
  };
}

/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderHelperMixin; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(207);



function renderHelperMixin() {
  return {
    methods: {
      _i(val, handler) {
        var i, l, keys, key;

        if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(val) || typeof val === 'string') {
          for (i = 0, l = val.length; i < l; i++) {
            handler.call(this, val[i], i);
          }
        } else if (typeof val === 'number') {
          for (i = 0; i < val; i++) {
            handler.call(this, i + 1, i);
          }
        } else if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_2__["isObject"])(val)) {
          keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(val);

          for (i = 0, l = keys.length; i < l; i++) {
            key = keys[i];
            handler.call(this, val[key], key, i);
          }
        }
      },

      _c(key, value) {
        this.__mpxProxy.renderData[key] = value;
        return value;
      },

      _r() {
        this.__mpxProxy.renderWithData();
      }

    }
  };
}

/***/ }),
/* 345 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getRefsMixin; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(264);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(313);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(317);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(302);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(322);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(116);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(125);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(325);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(202);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(194);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(268);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_last_index_of__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(346);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_last_index_of__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_last_index_of__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(327);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(207);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(300);
/* harmony import */ var _helper_env__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(352);




















function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_13___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context5; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_18___default()(_context5 = ownKeys(Object(source), true)).call(_context5, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context6; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_18___default()(_context6 = ownKeys(Object(source))).call(_context6, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_9___default.a === "undefined" || _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_8___default()(o) == null) { if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_7___default()(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_6___default()(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context4; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_11___default()(_context4 = Object.prototype.toString.call(o)).call(_context4, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_10___default()(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var envObj = Object(_helper_env__WEBPACK_IMPORTED_MODULE_22__["getEnvObj"])();
function getRefsMixin() {
  var aliMethods;

  if (false) { var proxyMethods; }

  return {
    [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_19__["BEFORECREATE"]]() {
      this.$refs = {};
    },

    [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_19__["CREATED"]]() {
      this.__updateRef && this.__updateRef();
    },

    [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_19__["BEFOREMOUNT"]]() {
      this.__getRefs();
    },

    [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_19__["UPDATED"]]() {
      this.__getRefs();
    },

    [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_19__["DESTROYED"]]() {
      // 销毁ref
      this.__updateRef && this.__updateRef(true);
    },

    methods: _objectSpread(_objectSpread({}, aliMethods), {}, {
      __getRefs() {
        var _this = this;

        if (this.__getRefsData) {
          var refs = this.__getRefsData();

          _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_18___default()(refs).call(refs, function (ref) {
            _this.$refs[ref.key] = _this.__getRefNode(ref);
          });
        }
      },

      __getRefNode(ref) {
        if (!ref) return;
        var selector = ref.selector.replace(/{{mpxCid}}/g, this.__mpxProxy.uid);

        if (ref.type === 'node') {
          var query = this.createSelectorQuery ? this.createSelectorQuery() : envObj.createSelectorQuery();
          return query && (ref.all ? query.selectAll(selector) : query.select(selector));
        } else if (ref.type === 'component') {
          return ref.all ? this.selectAllComponents(selector) : this.selectComponent(selector);
        }
      }

    })
  };
}

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(347);

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(348);

module.exports = parent;


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

var lastIndexOf = __webpack_require__(349);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.lastIndexOf;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.lastIndexOf) ? lastIndexOf : own;
};


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(350);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('Array').lastIndexOf;


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);
var lastIndexOf = __webpack_require__(351);

// `Array.prototype.lastIndexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof
$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(8);
var toInteger = __webpack_require__(58);
var toLength = __webpack_require__(57);
var arrayMethodIsStrict = __webpack_require__(142);
var arrayMethodUsesToLength = __webpack_require__(130);

var min = Math.min;
var nativeLastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
// For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = toLength(O.length);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : nativeLastIndexOf;


/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnvObj", function() { return getEnvObj; });
function getEnvObj() {
  if (typeof wx !== 'undefined' && typeof wx.getSystemInfo === 'function') {
    return wx;
  } else if (typeof my !== 'undefined' && typeof my.getSystemInfo === 'function') {
    return my;
  } else if (typeof swan !== 'undefined' && typeof swan.getSystemInfo === 'function') {
    return swan;
  } else if (typeof qq !== 'undefined' && typeof qq.getSystemInfo === 'function') {
    return qq;
  } else if (typeof tt !== 'undefined' && typeof tt.getSystemInfo === 'function') {
    return tt;
  }
}

/***/ }),
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pageStatusMixin; });
function pageStatusMixin(mixinType) {
  if (mixinType === 'component') {
    if (false) {} else {
      return {
        properties: {
          mpxShow: {
            type: Boolean,
            value: true
          }
        }
      };
    }
  }
}

/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return relationsMixin; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(163);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(202);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(125);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(207);









var targets = [];
var curTarget = null;

function pushTarget(cur) {
  targets.push(curTarget);
  curTarget = cur;
}

function popTarget() {
  curTarget = targets.pop();
}

function parsePath(path, absolute) {
  var _context;

  if (_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_7___default()(path).call(path, '/') === 0) {
    return path;
  }

  var dirs = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_6___default()(_context = absolute.split('/')).call(_context, 0, -1);

  var relatives = path.split('/');
  relatives = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(relatives).call(relatives, function (path) {
    if (path === '..') {
      dirs.pop();
      return false;
    } else {
      return path !== '.';
    }
  });
  return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(dirs).call(dirs, relatives).join('/');
}

function transferPath(relations, base) {
  var _context2;

  var newRelations = {};

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(relations)).call(_context2, function (key) {
    newRelations[parsePath(key, base)] = relations[key];
  });

  return newRelations;
}

function relationsMixin(mixinType) {
  if (false) {}
}

/***/ }),
/* 355 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return i18nMixin; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(327);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(301);




function i18nMixin() {
  if (global.i18n) {
    return {
      // 替换为dataFn注入，再每次组件创建时重新执行获取，处理reLaunch后无法拿到更新后语言的问题
      data() {
        return {
          mpxLocale: global.i18n.locale || 'zh-CN'
        };
      },

      [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_2__["BEFORECREATE"]]() {
        var _this = this;

        this.$i18n = {
          locale: global.i18n.locale
        };
        Object(_observer_index__WEBPACK_IMPORTED_MODULE_3__["observe"])(this.$i18n);
        this.$watch(function () {
          return global.i18n.locale;
        }, function (locale) {
          _this.mpxLocale = _this.$i18n.locale = locale;
        }, {
          sync: true
        });
        this.$watch(function () {
          return _this.$i18n.locale;
        }, function (locale) {
          _this.mpxLocale = locale;
        }, {
          sync: true
        }); // 挂载翻译方法

        if (global.i18nMethods) {
          var _context;

          _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(global.i18nMethods)).call(_context, function (methodName) {
            _this['$' + methodName] = function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              args.unshift(_this.mpxLocale);
              return global.i18nMethods[methodName].apply(_this, args);
            };
          });
        }
      }

    };
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pageTitleMixin; });
// web专用mixin，在web中实现页面title功能
function pageTitleMixin(mixinType) {
  if (mixinType === 'page') {
    return {
      activated() {
        if (this.$options.__mpxPageConfig.navigationBarTitleText) {
          document.title = this.$options.__mpxPageConfig.navigationBarTitleText;
        }
      }

    };
  }
}

/***/ }),
/* 357 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pageScrollMixin; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(264);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(300);
/* harmony import */ var _helper_MpxScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(361);
/* harmony import */ var _helper_MpxScroll_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(366);





var ms;

function refreshMs(vm) {
  if (ms) ms.destroy();

  try {
    window.__ms = ms = new _helper_MpxScroll__WEBPACK_IMPORTED_MODULE_3__["default"]();
    return true;
  } catch (e) {
    var location = vm.__mpxProxy && vm.__mpxProxy.options.mpxFileResource;
    Object(_helper_log__WEBPACK_IMPORTED_MODULE_2__["error"])("MpxScroll init error, please check.", location, e);
  }
}

var loading = null;

function showLoading(vm) {
  var _vm$$options$__mpxPag = vm.$options.__mpxPageConfig,
      _vm$$options$__mpxPag2 = _vm$$options$__mpxPag.backgroundColor,
      backgroundColor = _vm$$options$__mpxPag2 === void 0 ? '#fff' : _vm$$options$__mpxPag2,
      _vm$$options$__mpxPag3 = _vm$$options$__mpxPag.backgroundTextStyle,
      backgroundTextStyle = _vm$$options$__mpxPag3 === void 0 ? 'dark' : _vm$$options$__mpxPag3;
  loading = document.createElement('div');
  loading.className = 'pull-down-loading';
  loading.style.cssText = "background-color: ".concat(backgroundColor, ";");
  var dot = document.createElement('div');
  dot.className = "dot-flashing ".concat(backgroundTextStyle);
  loading.append(dot);
  vm.$el.prepend(loading);
}

function hideLoading(vm) {
  if (loading) {
    vm.$el.removeChild(loading);
    loading = null;
  }
}

function pageScrollMixin(mixinType) {
  if (mixinType !== 'page') {
    return;
  }

  return {
    mounted() {
      this.__lastScrollY = 0;
    },

    activated() {
      if (!refreshMs(this)) {
        return;
      }

      var _this$$options$__mpxP = this.$options.__mpxPageConfig,
          disableScroll = _this$$options$__mpxP.disableScroll,
          enablePullDownRefresh = _this$$options$__mpxP.enablePullDownRefresh; // 下拉刷新

      if (enablePullDownRefresh) {
        showLoading(this);
        ms.usePullDownRefresh();
        ms.hooks.pullingDown.on(this.__mpxPullDownHandler);
      } // 页面滚动


      if (!disableScroll) {
        ms.pageScrollTo({
          scrollTop: this.__lastScrollY,
          duration: 0
        });

        if (this.onPageScroll || this.onReachBottom) {
          ms.useScroll();
          ms.hooks.scroll.on(this.__mpxPageScrollHandler);
        }
      } else {
        document.body.style.overflow = 'hidden';
      }
    },

    deactivated() {
      if (ms) {
        this.__lastScrollY = Object(_helper_MpxScroll_dom__WEBPACK_IMPORTED_MODULE_4__["getScrollTop"])();
        ms.destroy();
        hideLoading(this);
      }
    },

    beforeDestroy() {
      if (ms) {
        ms.destroy();
        hideLoading(this);
      }
    },

    methods: {
      __mpxPullDownHandler() {
        var _this = this;

        var autoStop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var isRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.__pullingDown = true; // 同微信保持一致
        // 如果是手动触摸下拉，3s 后用户还没有调用过 __stopPullDownRefresh，则自动调用关闭 pullDown
        // 如果是手动调用 startPullDownRefresh 的 api，则一直处于 pull down 状态，除非用户手动调用 stopPullDownRefresh

        if (isRefresh) {
          this.__clearPullDownTimer();
        }

        if (autoStop) {
          this.__mpxPullDownTimer = _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_1___default()(function () {
            if (_this.__pullingDown) {
              _this.__stopPullDownRefresh();
            }
          }, 3000);
        }

        this.onPullDownRefresh && this.onPullDownRefresh();
      },

      __stopPullDownRefresh() {
        this.__pullingDown = false;

        if (this.$options.__mpxPageConfig.enablePullDownRefresh && ms) {
          ms.stopPullDownRefresh();

          this.__clearPullDownTimer();
        }
      },

      __startPullDownRefresh() {
        if (!this.__pullingDown && this.$options.__mpxPageConfig.enablePullDownRefresh && ms) {
          ms.startPullDownRefresh();
        }
      },

      __mpxPageScrollHandler(e) {
        var _this$$options$__mpxP2 = this.$options.__mpxPageConfig.onReachBottomDistance,
            onReachBottomDistance = _this$$options$__mpxP2 === void 0 ? 50 : _this$$options$__mpxP2;

        if (this.onPageScroll) {
          var _e = {};

          _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(_e, 'scrollTop', {
            configurable: false,
            enumerable: true,
            get: function get() {
              return e.scrollTop;
            }
          });

          this.onPageScroll(_e);
        }

        if (this.onReachBottom) {
          ms.onReachBottom(onReachBottomDistance, this.onReachBottom);
        }
      },

      __clearPullDownTimer() {
        if (this.__mpxPullDownTimer) {
          clearTimeout(this.__mpxPullDownTimer);
          this.__mpxPullDownTimer = null;
        }
      }

    }
  };
}

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(359);

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(360);
var path = __webpack_require__(41);

module.exports = path.setTimeout;


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);
var global = __webpack_require__(17);
var userAgent = __webpack_require__(90);

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 361 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MpxScroll; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(264);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(362);
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(158);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(296);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(297);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(300);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(366);
/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(367);
/* harmony import */ var _EventRegister__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(368);
/* harmony import */ var _ScrollAnimation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(369);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(374);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_12__);














function isDef(val) {
  return val !== undefined;
}

var MpxScroll = /*#__PURE__*/function () {
  function MpxScroll() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, MpxScroll);

    var defaultOptions = {
      threshold: 60,
      // 滑动触发下拉刷新的距离
      stop: 56,
      // 下拉刷新时停留的位置距离屏幕顶部的距离
      bounceTime: 800,
      // 设置回弹动画的动画时长
      throttle: 50 // 页面滚动节流

    };
    this.options = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, defaultOptions, options); // 下拉阻尼系数

    this.ratio = 0.5;
    this.el = Object(_dom__WEBPACK_IMPORTED_MODULE_8__["getElement"])('.page');
    this.touchstartY = 0;
    this.currentY = 0;
    this.translateY = 0; // 为了不阻断用户交互，在 pull down 过程中允许用户可以再次做下拉动作。
    // 记录上次 pull down 的 translateY，再次下拉时加上这个 legacy 作为起始点
    // 避免再次 touchstart 的时候 translateY 从某个值突然小于正处于 pull down 状态的 loading 高度

    this.legacyY = 0;
    this.isIntersecting = false;
    this.isRefresh = false;
    this.bottomReached = false;
    var hooks = ['scroll', // 页面自然滚动
    'pullingDown' // pullDown 事件
    ];
    this.hooks = {};

    _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(hooks).call(hooks, function (hook) {
      _this.hooks[hook] = new _EventEmitter__WEBPACK_IMPORTED_MODULE_9__["default"]();
    });

    this.scrollAnimation = new _ScrollAnimation__WEBPACK_IMPORTED_MODULE_11__["default"]();
    this.pullDownEventRegister = null;
    this.scrollEventRegister = null;
    this.intersectionOb = null;
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(MpxScroll, [{
    key: "usePullDownRefresh",
    value: function usePullDownRefresh() {
      var _this2 = this;

      // fix lint
      var IntersectionObserver = window.IntersectionObserver;
      var ob = this.intersectionOb = new IntersectionObserver(function (changes) {
        var _changes = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(changes, 1),
            change = _changes[0];

        var isIntersecting = change.isIntersecting;
        _this2.isIntersecting = isIntersecting;

        if (!isIntersecting) {
          // 非 inter section 状态下及时清除 transtorm，以免影响正常滚动时元素的 fixed 定位
          _this2.el.style.cssText = '';
          _this2.pullDownEventRegister && _this2.pullDownEventRegister.destroy();
        } else {
          _this2.pullDownEventRegister = new _EventRegister__WEBPACK_IMPORTED_MODULE_10__["default"](_this2.el, [{
            name: 'touchstart',
            handler: function handler(e) {
              return _this2.onTouchStart(e);
            }
          }, {
            name: 'touchmove',
            handler: function handler(e) {
              return _this2.onTouchMove(e);
            }
          }, {
            name: 'touchend',
            handler: function handler(e) {
              return _this2.onTouchEnd(e);
            }
          }]);
        }
      });
      ob.observe(document.querySelector('.pull-down-loading'));
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(e) {
      this.touchstartY = e.changedTouches[0].clientY;
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(e) {
      this.currentY = e.targetTouches[0].clientY;

      if (this.currentY - this.touchstartY >= 0 && this.isIntersecting) {
        Object(_dom__WEBPACK_IMPORTED_MODULE_8__["preventDefault"])(e);

        if (this.isRefresh) {
          this.legacyY = this.translateY;
          this.isRefresh = false;
        }

        this.pullDown(this.currentY - this.touchstartY);
      }
    }
  }, {
    key: "pullDown",
    value: function pullDown(distance) {
      var alteredDistance = distance * this.ratio + this.legacyY;
      this.transformPage(alteredDistance);
    }
  }, {
    key: "transformPage",
    value: function transformPage(distance) {
      this.translateY = distance;
      this.el.style.cssText = "transform: translateY(".concat(distance, "px)");
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(e) {
      if (this.isRefresh) {
        return;
      }

      if (this.translateY >= this.options.threshold) {
        this.isRefresh = true;
        this.hooks.pullingDown.emit(true, true);
        this.moveBack(this.translateY);
      } else if (this.translateY > 0) {
        this.moveBack(this.translateY);
        this.isRefresh = false;
      }
    }
  }, {
    key: "moveBack",
    value: function moveBack(distance) {
      var _this$options = this.options,
          stop = _this$options.stop,
          threshold = _this$options.threshold,
          bounceTime = _this$options.bounceTime;
      var finalDistance = distance >= threshold ? stop : 0;
      this.move(bounceTime, distance, finalDistance);
    }
  }, {
    key: "useScroll",
    value: function useScroll() {
      var _this3 = this;

      var pageScrollHandler = lodash_throttle__WEBPACK_IMPORTED_MODULE_12___default()(function (e) {
        var _e = {};

        _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_1___default()(_e, 'scrollTop', {
          configurable: false,
          enumerable: true,
          get: function get() {
            return Object(_dom__WEBPACK_IMPORTED_MODULE_8__["getScrollTop"])();
          }
        });

        _this3.hooks.scroll.emit(_e);
      }, this.options.throttle, {
        leading: true,
        trailing: true
      });
      this.scrollEventRegister = new _EventRegister__WEBPACK_IMPORTED_MODULE_10__["default"](document, [{
        name: 'scroll',
        handler: pageScrollHandler
      }]);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _context,
          _this4 = this;

      var hooks = this.hooks;

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(hooks)).call(_context, function (hook) {
        _this4.hooks[hook].destroy();
      });

      this.scrollEventRegister && this.scrollEventRegister.destroy();
      this.pullDownEventRegister && this.pullDownEventRegister.destroy();
      this.intersectionOb && this.intersectionOb.disconnect();
    }
  }, {
    key: "startPullDownRefresh",
    value: function startPullDownRefresh() {
      if (this.isRefresh) {
        return;
      }

      this.hooks.pullingDown.emit();
      this.pageScrollTo({
        scrollTop: 0,
        duration: 0
      });
      this.isRefresh = true;
      var _this$options2 = this.options,
          stop = _this$options2.stop,
          bounceTime = _this$options2.bounceTime;
      this.move(bounceTime, 0, stop);
    }
  }, {
    key: "stopPullDownRefresh",
    value: function stopPullDownRefresh() {
      if (!this.isRefresh) {
        return;
      }

      var _this$options3 = this.options,
          stop = _this$options3.stop,
          bounceTime = _this$options3.bounceTime;
      this.move(bounceTime, stop, 0);
      this.isRefresh = false;
      this.legacyY = 0;
    }
  }, {
    key: "move",
    value: function move(bounceTime, beginPosition, endPosition) {
      var _this5 = this;

      this.scrollAnimation.easeOutQuart(bounceTime, beginPosition, endPosition, function (distance) {
        return _this5.transformPage(distance);
      });
    }
  }, {
    key: "pageScrollTo",
    value: function pageScrollTo(_ref) {
      var scrollTop = _ref.scrollTop,
          selector = _ref.selector,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 300 : _ref$duration;

      var _scrollTop;

      if (isDef(scrollTop)) {
        _scrollTop = scrollTop;
      } else if (isDef(selector)) {
        _scrollTop = Object(_dom__WEBPACK_IMPORTED_MODULE_8__["getOffsetTop"])(Object(_dom__WEBPACK_IMPORTED_MODULE_8__["getElement"])(selector));
      } else {
        return Object(_helper_log__WEBPACK_IMPORTED_MODULE_7__["error"])('[pageScrollTo error]: scrollTop and selector are not defined');
      }

      if (duration === 0) {
        return window.scrollTo(0, _scrollTop);
      }

      var position = Object(_dom__WEBPACK_IMPORTED_MODULE_8__["getScrollTop"])();
      this.scrollAnimation.easeOutQuart(duration, position, _scrollTop, function (distance) {
        window.scrollTo(0, distance);
      });
    }
  }, {
    key: "onReachBottom",
    value: function onReachBottom(onReachBottomDistance, callback) {
      var _this$el$getBoundingC = this.el.getBoundingClientRect(),
          bottom = _this$el$getBoundingC.bottom;

      var mark = bottom - window.innerHeight <= onReachBottomDistance;

      if (!this.bottomReached && mark) {
        this.bottomReached = true;
        callback();
      } else if (!mark) {
        this.bottomReached = false;
      }
    }
  }]);

  return MpxScroll;
}();



/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(363);

var iterableToArrayLimit = __webpack_require__(364);

var unsupportedIterableToArray = __webpack_require__(190);

var nonIterableRest = __webpack_require__(365);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(174);

function _arrayWithHoles(arr) {
  if (_Array$isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__(4);

var _isIterable = __webpack_require__(180);

var _Symbol = __webpack_require__(183);

function _iterableToArrayLimit(arr, i) {
  if (typeof _Symbol === "undefined" || !_isIterable(Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 365 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 366 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetTop", function() { return getOffsetTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElement", function() { return getElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollTop", function() { return getScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventDefault", function() { return preventDefault; });
function getOffsetTop(el) {
  var top = el.offsetTop;
  var op = el.offsetParent;

  while (op) {
    top += op.offsetTop;
    op = op.offsetParent;
  }

  return top;
}
function getElement(el) {
  return typeof el === 'string' ? document.querySelector(el) : el;
}
function getScrollTop() {
  return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
}
function preventDefault(e, isStopPropagation) {
  if (typeof e.cancelable !== 'boolean' || e.cancelable) {
    e.preventDefault();
  }

  if (isStopPropagation) {
    e.stopPropagation();
  }
}

/***/ }),
/* 367 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventEmitter; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(296);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(297);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);




var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, EventEmitter);

    this.disposer = [];
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(EventEmitter, [{
    key: "on",
    value: function on(handler) {
      this.disposer.push(handler);
      return this;
    }
  }, {
    key: "emit",
    value: function emit() {
      var _context;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0___default()(_context = this.disposer).call(_context, function (handler) {
        return handler.apply(void 0, args);
      });

      return this;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.disposer = [];
      return this;
    }
  }]);

  return EventEmitter;
}();



/***/ }),
/* 368 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventRegister; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(296);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(297);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);




function addEvent(el, type, handler, capture) {
  el.addEventListener(type, handler, {
    passive: false,
    capture: !!capture
  });
}

function removeEvent(el, type, handler, capture) {
  el.removeEventListener(type, handler, {
    capture: !!capture
  });
}

var EventRegister = /*#__PURE__*/function () {
  function EventRegister(wrapper, events) {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, EventRegister);

    this.wrapper = wrapper;
    this.events = events;
    this.addDOMEvents();
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(EventRegister, [{
    key: "addDOMEvents",
    value: function addDOMEvents(el, type, handler) {
      this.handleDOMEvents(addEvent);
    }
  }, {
    key: "removeDOMEvents",
    value: function removeDOMEvents() {
      this.handleDOMEvents(removeEvent);
    }
  }, {
    key: "handleDOMEvents",
    value: function handleDOMEvents(eventOperation) {
      var _context;

      var wrapper = this.wrapper;

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0___default()(_context = this.events).call(_context, function (event) {
        eventOperation(wrapper, event.name, event.handler, !!event.capture);
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeDOMEvents();
      this.events = [];
    }
  }]);

  return EventRegister;
}();



/***/ }),
/* 369 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollAnimation; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(370);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(296);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(297);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);




var ScrollAnimation = /*#__PURE__*/function () {
  function ScrollAnimation() {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ScrollAnimation);
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ScrollAnimation, [{
    key: "easeOutQuart",
    value: function easeOutQuart(time, beginPosition, endPosition, callback) {
      var startTime = _babel_runtime_corejs3_core_js_stable_date_now__WEBPACK_IMPORTED_MODULE_0___default()();

      var endTime = startTime + time;

      var bounceFn = function bounceFn(t) {
        return 1 - --t * t * t * t;
      };

      var timer = null;

      var scheduler = function scheduler() {
        var now = _babel_runtime_corejs3_core_js_stable_date_now__WEBPACK_IMPORTED_MODULE_0___default()();

        if (now >= endTime) {
          window.cancelAnimationFrame(timer);
          timer = null;
          return;
        }

        var ratio = bounceFn((now - startTime) / time);
        var currentPosition = ratio * (endPosition - beginPosition) + beginPosition;
        callback(Math.floor(currentPosition));
        timer = window.requestAnimationFrame(scheduler);
      };

      scheduler();
    }
  }]);

  return ScrollAnimation;
}();



/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(371);

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(372);

module.exports = parent;


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(373);
var path = __webpack_require__(41);

module.exports = path.Date.now;


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);

// `Date.now` method
// https://tc39.github.io/ecma262/#sec-date.now
$({ target: 'Date', stat: true }, {
  now: function now() {
    return new Date().getTime();
  }
});


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(375),
    isObject = __webpack_require__(376);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(376),
    now = __webpack_require__(377),
    toNumber = __webpack_require__(380);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 376 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(378);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(379);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(376),
    isSymbol = __webpack_require__(381);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(382),
    isObjectLike = __webpack_require__(386);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(383),
    getRawTag = __webpack_require__(384),
    objectToString = __webpack_require__(385);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(378);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(383);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 385 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 386 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 387 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onResize; });
/**
 * 输出 H5 页面 onresize
 * @param mixinType
 * @returns {{deactivated(): void, activated(): void}}
 */
function onResize(mixinType) {
  if (mixinType === 'page' && "wx" === 'web') {
    var resizeMethod = null;

    var resizeCallback = function resizeCallback() {
      var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      resizeMethod && resizeMethod({
        size: {
          windowWidth: w,
          windowHeight: h
        }
      });
    };

    return {
      activated() {
        if (this.onResize) {
          resizeMethod = this.onResize;
          window.addEventListener('resize', resizeCallback, false);
        }
      },

      deactivated() {
        if (this.onResize) {
          window.removeEventListener('resize', resizeCallback, false);
        }
      }

    };
  }
}

/***/ }),
/* 388 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return componentGenericsMixin; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(327);


// web专用mixin，在web中实现抽象节点功能

function componentGenericsMixin(mixinType) {
  if (global.__mpxGenericsMap && mixinType === 'component') {
    return {
      [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_2__["CREATED"]]() {
        var _this = this;

        if (this.generichash && global.__mpxGenericsMap[this.generichash]) {
          var _context;

          _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(global.__mpxGenericsMap[this.generichash])).call(_context, function (name) {
            var value = global.__mpxGenericsMap[_this.generichash][name];
            _this.$options.components[name] = value;
          });
        }
      }

    };
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTabBarMixin; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_ends_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_ends_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_ends_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(327);

// web专用mixin，在web中实现getTabBar功能

function getTabBarMixin(mixinType) {
  if (mixinType === 'page') {
    return {
      [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["CREATED"]]() {
        var _context,
            _this = this;

        if (this.$parent && this.$parent.$vnode && this.$parent.$vnode.tag && _babel_runtime_corejs3_core_js_stable_instance_ends_with__WEBPACK_IMPORTED_MODULE_0___default()(_context = this.$parent.$vnode.tag).call(_context, 'mpx-tab-bar-container')) {
          this.getTabBar = function () {
            return _this.$parent.$refs.tabBar;
          };
        }
      }

    };
  }
}

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(391);

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(392);

module.exports = parent;


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

var endsWith = __webpack_require__(393);

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.endsWith;
  return typeof it === 'string' || it === StringPrototype
    || (it instanceof String && own === StringPrototype.endsWith) ? endsWith : own;
};


/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(394);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('String').endsWith;


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var getOwnPropertyDescriptor = __webpack_require__(38).f;
var toLength = __webpack_require__(57);
var notARegExp = __webpack_require__(251);
var requireObjectCoercible = __webpack_require__(12);
var correctIsRegExpLogic = __webpack_require__(253);
var IS_PURE = __webpack_require__(33);

var nativeEndsWith = ''.endsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = String(searchString);
    return nativeEndsWith
      ? nativeEndsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),
/* 395 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pageRouteMixin; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0__);

// web专用mixin，在web页面上挂载route属性
function pageRouteMixin(mixinType) {
  if (mixinType === 'page') {
    return {
      beforeCreate() {
        if (this.$options.__mpxPageRoute) {
          var _context;

          this.route = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default()(_context = this.$options.__mpxPageRoute).call(_context, 1);
        }
      }

    };
  }
}

/***/ }),
/* 396 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultOptions", function() { return getDefaultOptions; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(313);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(143);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(158);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(207);
/* harmony import */ var _core_proxy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(397);
/* harmony import */ var _builtInKeysMap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(337);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(171);
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(326);












function transformProperties(properties) {
  var _context;

  if (!properties) {
    return {};
  }

  var newProps = {};

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(properties)).call(_context, function (key) {
    var rawFiled = properties[key];
    var newFiled = null;

    if (rawFiled === null) {
      rawFiled = {
        type: null
      };
    }

    if (typeof rawFiled === 'function') {
      newFiled = {
        type: rawFiled
      };
    } else {
      newFiled = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, rawFiled);
    }

    newFiled.observer = function (value, oldValue) {
      if (this.__mpxProxy) {
        this[key] = value;

        this.__mpxProxy.updated();
      }
    };

    newProps[key] = newFiled;
  });

  return newProps;
}

function transformApiForProxy(context, currentInject) {
  var _context2;

  var rawSetData = _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = context.setData).call(_context2, context);

  _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(context, {
    setData: {
      get() {
        return function (data, callback) {
          return this.__mpxProxy.forceUpdate(data, {
            sync: true
          }, callback);
        };
      },

      configurable: true
    },
    __getInitialData: {
      get() {
        return function (options) {
          var data = {};

          var validData = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, options.data, options.properties, options.props);

          for (var key in context.data) {
            if (context.data.hasOwnProperty(key) && validData.hasOwnProperty(key)) {
              data[key] = context.data[key];
            }
          }

          return data;
        };
      },

      configurable: false
    },
    __render: {
      get() {
        return rawSetData;
      },

      configurable: false
    }
  }); // 绑定注入的render


  if (currentInject) {
    if (currentInject.render) {
      _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(context, {
        __injectedRender: {
          get() {
            var _context3;

            return _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = currentInject.render).call(_context3, context);
          },

          configurable: false
        }
      });
    }

    if (currentInject.getRefsData) {
      _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(context, {
        __getRefsData: {
          get() {
            return currentInject.getRefsData;
          },

          configurable: false
        }
      });
    }
  }
}

function filterOptions(options) {
  var _context4;

  var newOptions = {};

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5___default()(_context4 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(options)).call(_context4, function (key) {
    if (_builtInKeysMap__WEBPACK_IMPORTED_MODULE_8__["default"][key]) {
      return;
    }

    if (key === 'properties' || key === 'props') {
      newOptions.properties = transformProperties(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, options.properties, options.props));
    } else if (key === 'methods' && options.__pageCtor__) {
      // 构造器为Page时抽取所有methods方法到顶层
      _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default()(newOptions, options[key]);
    } else {
      newOptions[key] = options[key];
    }
  });

  return newOptions;
}

function getRootMixins(mixin) {
  var supportBehavior = typeof Behavior !== 'undefined';
  var rootMixins = [];

  if (supportBehavior) {
    var _context5;

    var behavior = {};
    var pageHooksMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["makeMap"])(_lifecycle__WEBPACK_IMPORTED_MODULE_10__["LIFECYCLE"].PAGE_HOOKS);

    _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5___default()(_context5 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(mixin)).call(_context5, function (key) {
      // 除页面生命周期之外使用behaviors进行mixin
      if (!pageHooksMap[key]) {
        behavior[key] = mixin[key];
        delete mixin[key];
      }
    });

    if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["isEmptyObject"])(behavior)) {
      rootMixins.push({
        // eslint-disable-next-line no-undef
        behaviors: [Behavior(behavior)]
      });
    }
  }

  rootMixins.push(mixin);
  return rootMixins;
}

function initProxy(context, rawOptions, currentInject) {
  // 提供代理对象需要的api
  transformApiForProxy(context, currentInject); // 缓存options

  context.$rawOptions = rawOptions; // 创建proxy对象

  var mpxProxy = new _core_proxy__WEBPACK_IMPORTED_MODULE_7__["default"](rawOptions, context);
  context.__mpxProxy = mpxProxy; // 组件监听视图数据更新, attached之后才能拿到properties

  context.__mpxProxy.created();
}

function getDefaultOptions(type, _ref) {
  var _ref$rawOptions = _ref.rawOptions,
      rawOptions = _ref$rawOptions === void 0 ? {} : _ref$rawOptions,
      currentInject = _ref.currentInject;
  var hookNames = ['attached', 'ready', 'detached']; // 当用户传入page作为构造器构造页面时，修改所有关键hooks

  if (rawOptions.__pageCtor__) {
    hookNames[0] = 'onLoad';
    hookNames[1] = 'onReady';
    hookNames[2] = 'onUnload';
  }

  var rootMixins = getRootMixins({
    [hookNames[0]]() {
      if (!this.__mpxProxy) {
        initProxy(this, rawOptions, currentInject);
      }
    },

    [hookNames[1]]() {
      this.__mpxProxy && this.__mpxProxy.mounted();
    },

    [hookNames[2]]() {
      this.__mpxProxy && this.__mpxProxy.destroyed();
    }

  });
  rawOptions.mixins = rawOptions.mixins ? _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(rootMixins).call(rootMixins, rawOptions.mixins) : rootMixins;
  rawOptions = Object(_core_mergeOptions__WEBPACK_IMPORTED_MODULE_9__["default"])(rawOptions, type, false);
  return filterOptions(rawOptions);
}

/***/ }),
/* 397 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MPXProxy; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(158);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(273);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(163);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(296);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(297);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(301);
/* harmony import */ var _observer_watcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(398);
/* harmony import */ var _observer_watch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(411);
/* harmony import */ var _observer_computed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(412);
/* harmony import */ var _observer_scheduler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(405);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(207);
/* harmony import */ var _helper_getByPath__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(295);
/* harmony import */ var _platform_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(340);
/* harmony import */ var _innerLifecycle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(327);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(300);




















var uid = 0;

var MPXProxy = /*#__PURE__*/function () {
  function MPXProxy(options, target) {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, MPXProxy);

    this.target = target;
    this.uid = uid++;
    this.name = options.name || '';
    this.options = options; // initial -> created -> mounted -> destroyed

    this.state = 'initial';
    this.lockTask = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["asyncLock"])();
    this.ignoreProxyMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["makeMap"])(_index__WEBPACK_IMPORTED_MODULE_14__["default"].config.ignoreProxyWhiteList);

    if (true) {
      this._watchers = [];
      this._watcher = null;
      this.localKeysMap = {}; // 非props key

      this.renderData = {}; // 渲染函数中收集的数据

      this.miniRenderData = {};
      this.forceUpdateData = {}; // 强制更新的数据

      this.forceUpdateAll = false; // 下次是否需要强制更新全部渲染数据

      this.curRenderTask = null;
    }
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(MPXProxy, [{
    key: "created",
    value: function created() {
      var _context;

      this.initApi();
      this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_18__["BEFORECREATE"]);

      if (true) {
        this.initState(this.options);
      }

      this.state = _innerLifecycle__WEBPACK_IMPORTED_MODULE_18__["CREATED"];

      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      this.callUserHook.apply(this, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_6___default()(_context = [_innerLifecycle__WEBPACK_IMPORTED_MODULE_18__["CREATED"]]).call(_context, params));

      if (true) {
        // 强制走小程序原生渲染逻辑
        this.options.__nativeRender__ ? this.doRender() : this.initRender();
      }
    }
  }, {
    key: "renderTaskExecutor",
    value: function renderTaskExecutor(isEmptyRender) {
      if (!this.isMounted() && this.curRenderTask || this.isMounted() && isEmptyRender) {
        return;
      }

      var promiseResolve;
      var promise = new _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_5___default.a(function (resolve) {
        promiseResolve = resolve;
      });
      this.curRenderTask = {
        promise,
        resolve: promiseResolve
      }; // isMounted之前基于mounted触发，isMounted之后基于setData回调触发

      return this.isMounted() && promiseResolve;
    }
  }, {
    key: "isMounted",
    value: function isMounted() {
      return this.state === _innerLifecycle__WEBPACK_IMPORTED_MODULE_18__["MOUNTED"];
    }
  }, {
    key: "mounted",
    value: function mounted() {
      if (this.state === _innerLifecycle__WEBPACK_IMPORTED_MODULE_18__["CREATED"]) {
        this.state = _innerLifecycle__WEBPACK_IMPORTED_MODULE_18__["MOUNTED"]; // 用于处理refs等前置工作

        this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_18__["BEFOREMOUNT"]);
        this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_18__["MOUNTED"]);
        this.curRenderTask && this.curRenderTask.resolve();
      }
    }
  }, {
    key: "updated",
    value: function updated() {
      var _this = this;

      if (this.isMounted()) {
        this.lockTask(function () {
          if (_this.isMounted()) {
            _this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_18__["UPDATED"]);
          }
        });
      }
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      this.state = _innerLifecycle__WEBPACK_IMPORTED_MODULE_18__["DESTROYED"];

      if (true) {
        this.clearWatchers();
      }

      this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_18__["DESTROYED"]);
    }
  }, {
    key: "initApi",
    value: function initApi() {
      var _this2 = this;

      // 挂载扩展属性到实例上
      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["proxy"])(this.target, this.options.proto, _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(this.options.proto), true, function (key) {
        if (_this2.ignoreProxyMap[key]) {
          Object(_helper_log__WEBPACK_IMPORTED_MODULE_19__["error"])("The key [".concat(key, "] of mpx.prototype is a reserved keyword of miniprogram, please check and rename it!"), _this2.options.mpxFileResource);
          return false;
        }

        Object(_helper_log__WEBPACK_IMPORTED_MODULE_19__["error"])("The key [".concat(key, "] of mpx.prototype exist in the component/page instance already, please check your plugins!"), _this2.options.mpxFileResource);
      }); // 挂载混合模式下createPage中的自定义属性，模拟原生Page构造器的表现

      if (this.options.__type__ === 'page' && !this.options.__pageCtor__) {
        Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["proxy"])(this.target, this.options, this.options.mpxCustomKeysForBlend, undefined, function (key) {
          if (_this2.ignoreProxyMap[key]) {
            Object(_helper_log__WEBPACK_IMPORTED_MODULE_19__["error"])("The key [".concat(key, "] of page options is a reserved keyword of miniprogram, please check and rename it!"), _this2.options.mpxFileResource);
            return false;
          }

          Object(_helper_log__WEBPACK_IMPORTED_MODULE_19__["error"])("The key [".concat(key, "] of page options exist in the page instance already, please check your page options!"), _this2.options.mpxFileResource);
        });
      }

      if (true) {
        // 挂载$watch
        this.target.$watch = function () {
          return _this2.watch.apply(_this2, arguments);
        }; // 强制执行render


        this.target.$forceUpdate = function () {
          return _this2.forceUpdate.apply(_this2, arguments);
        };

        this.target.$nextTick = function (fn) {
          return _this2.nextTick(fn);
        };
      }
    }
  }, {
    key: "initState",
    value: function initState() {
      var _this3 = this;

      var options = this.options;
      var proxyedKeys = this.initData(options.data, options.dataFn);
      var proxyedKeysMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["makeMap"])(proxyedKeys);
      this.initComputed(options.computed); // target的数据访问代理到将proxy的data

      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["proxy"])(this.target, this.data, undefined, undefined, function (key) {
        if (_this3.ignoreProxyMap[key]) {
          Object(_helper_log__WEBPACK_IMPORTED_MODULE_19__["error"])("The data/props/computed key [".concat(key, "] is a reserved keyword of miniprogram, please check and rename it!"), _this3.options.mpxFileResource);
          return false;
        }

        if (!proxyedKeysMap[key]) Object(_helper_log__WEBPACK_IMPORTED_MODULE_19__["error"])("The data/props/computed key [".concat(key, "] exist in the component/page instance already, please check and rename it!"), _this3.options.mpxFileResource);
      });
      this.initWatch(options.watch);
    }
  }, {
    key: "initComputed",
    value: function initComputed(computedOpt) {
      if (computedOpt) {
        this.collectLocalKeys(computedOpt);

        Object(_observer_computed__WEBPACK_IMPORTED_MODULE_12__["initComputed"])(this, this.data, computedOpt);
      }
    } // 构建响应式data

  }, {
    key: "initData",
    value: function initData(data, dataFn) {
      var _this4 = this,
          _context2;

      var proxyedKeys = []; // 获取包含data/props在内的初始数据，包含初始原生微信转换支付宝时合并props进入data的逻辑

      var initialData = this.target.__getInitialData(this.options) || {}; // 之所以没有直接使用initialData，而是通过对原始dataOpt进行深clone获取初始数据对象，主要是为了避免小程序自身序列化时错误地转换数据对象，比如将promise转为普通object

      this.data = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["diffAndCloneA"])(data || {}).clone;

      if (dataFn) {
        proxyedKeys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(initialData); // 预先将initialData代理到this.target中，便于data函数访问

        Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["proxy"])(this.target, initialData, proxyedKeys, undefined, function (key) {
          if (_this4.ignoreProxyMap[key]) {
            Object(_helper_log__WEBPACK_IMPORTED_MODULE_19__["error"])("The props/data key [".concat(key, "] is a reserved keyword of miniprogram, please check and rename it!"), _this4.options.mpxFileResource);
            return false;
          }

          Object(_helper_log__WEBPACK_IMPORTED_MODULE_19__["error"])("The props/data key [".concat(key, "] exist in the component instance already, please check and rename it!"), _this4.options.mpxFileResource);
        });

        _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default()(this.data, dataFn.call(this.target));
      }

      this.collectLocalKeys(this.data);

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(initialData)).call(_context2, function (key) {
        if (!_this4.data.hasOwnProperty(key)) {
          // 除了data函数返回的数据外深拷贝切断引用关系，避免后续watch由于小程序内部对data赋值重复触发watch
          _this4.data[key] = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["diffAndCloneA"])(initialData[key]).clone;
        }
      }); // mpxCid 解决支付宝环境selector为全局问题


      this.data.mpxCid = this.uid;
      this.localKeysMap.mpxCid = true;
      Object(_observer_index__WEBPACK_IMPORTED_MODULE_9__["observe"])(this.data, true);
      return proxyedKeys;
    }
  }, {
    key: "initWatch",
    value: function initWatch(watch) {
      if (watch) {
        for (var key in watch) {
          var handler = watch[key];

          if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(handler)) {
            for (var i = 0; i < handler.length; i++) {
              this.watch(key, handler[i]);
            }
          } else {
            this.watch(key, handler);
          }
        }
      }
    }
  }, {
    key: "collectLocalKeys",
    value: function collectLocalKeys(data) {
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          this.localKeysMap[key] = true;
        }
      }
    }
  }, {
    key: "nextTick",
    value: function nextTick(fn) {
      var _this5 = this;

      if (typeof fn === 'function') {
        Object(_observer_scheduler__WEBPACK_IMPORTED_MODULE_13__["queueWatcher"])(function () {
          _this5.curRenderTask ? _this5.curRenderTask.promise.then(fn) : fn();
        });
      }
    }
  }, {
    key: "callUserHook",
    value: function callUserHook(hookName) {
      var hook = this.options[hookName] || this.target[hookName];

      if (typeof hook === 'function') {
        var _context3;

        for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          params[_key2 - 1] = arguments[_key2];
        }

        hook.call.apply(hook, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_6___default()(_context3 = [this.target]).call(_context3, params));
      }
    }
  }, {
    key: "watch",
    value: function watch(expOrFn, cb, options) {
      return Object(_observer_watch__WEBPACK_IMPORTED_MODULE_11__["watch"])(this, expOrFn, cb, options);
    }
  }, {
    key: "clearWatchers",
    value: function clearWatchers() {
      var i = this._watchers.length;

      while (i--) {
        this._watchers[i].teardown();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var renderData = this.data;
      this.doRender(this.processRenderDataWithStrictDiff(renderData));
    }
  }, {
    key: "renderWithData",
    value: function renderWithData() {
      var renderData = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["preProcessRenderData"])(this.renderData);
      this.doRender(this.processRenderDataWithStrictDiff(renderData)); // 重置renderData准备下次收集

      this.renderData = {};
    }
  }, {
    key: "processRenderDataWithDiffData",
    value: function processRenderDataWithDiffData(result, key, diffData) {
      var _context4;

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(_context4 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(diffData)).call(_context4, function (subKey) {
        result[key + subKey] = diffData[subKey];
      });
    }
  }, {
    key: "processRenderDataWithStrictDiff",
    value: function processRenderDataWithStrictDiff(renderData) {
      var _this6 = this;

      var result = {};

      var _loop = function _loop(key) {
        if (renderData.hasOwnProperty(key)) {
          var _ret2 = function () {
            var data = renderData[key];
            var firstKey = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["getFirstKey"])(key);

            if (!_this6.localKeysMap[firstKey]) {
              return {
                v: "continue"
              };
            } // 外部clone，用于只需要clone的场景


            var clone;

            if (_this6.miniRenderData.hasOwnProperty(key)) {
              var _diffAndCloneA = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["diffAndCloneA"])(data, _this6.miniRenderData[key]),
                  localClone = _diffAndCloneA.clone,
                  diff = _diffAndCloneA.diff,
                  diffData = _diffAndCloneA.diffData;

              clone = localClone;

              if (diff) {
                _this6.miniRenderData[key] = clone;

                if (diffData && _index__WEBPACK_IMPORTED_MODULE_14__["default"].config.useStrictDiff) {
                  _this6.processRenderDataWithDiffData(result, key, diffData);
                } else {
                  result[key] = clone;
                }
              }
            } else {
              var processed = false;

              var miniRenderDataKeys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(_this6.miniRenderData);

              for (var i = 0; i < miniRenderDataKeys.length; i++) {
                var tarKey = miniRenderDataKeys[i];

                if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["aIsSubPathOfB"])(tarKey, key)) {
                  if (!clone) clone = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["diffAndCloneA"])(data).clone;
                  delete _this6.miniRenderData[tarKey];
                  _this6.miniRenderData[key] = result[key] = clone;
                  processed = true;
                  continue;
                }

                var subPath = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["aIsSubPathOfB"])(key, tarKey);

                if (subPath) {
                  // setByPath 更新miniRenderData中的子数据
                  Object(_helper_getByPath__WEBPACK_IMPORTED_MODULE_16__["default"])(_this6.miniRenderData[tarKey], subPath, function (current, subKey, meta) {
                    if (meta.isEnd) {
                      var _diffAndCloneA2 = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["diffAndCloneA"])(data, current[subKey]),
                          _clone = _diffAndCloneA2.clone,
                          _diff = _diffAndCloneA2.diff,
                          _diffData = _diffAndCloneA2.diffData;

                      if (_diff) {
                        current[subKey] = _clone;

                        if (_diffData && _index__WEBPACK_IMPORTED_MODULE_14__["default"].config.useStrictDiff) {
                          _this6.processRenderDataWithDiffData(result, key, _diffData);
                        } else {
                          result[key] = _clone;
                        }
                      }
                    } else if (!current[subKey]) {
                      current[subKey] = {};
                    }

                    return current[subKey];
                  });

                  processed = true;
                  break;
                }
              }

              if (!processed) {
                // 如果当前数据和上次的miniRenderData完全无关，但存在于组件的视图数据中，则与组件视图数据进行diff
                if (_this6.target.data && _this6.target.data.hasOwnProperty(firstKey)) {
                  var localInitialData = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["getByPath"])(_this6.target.data, key);

                  var _diffAndCloneA3 = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["diffAndCloneA"])(data, localInitialData),
                      _clone2 = _diffAndCloneA3.clone,
                      _diff2 = _diffAndCloneA3.diff,
                      _diffData2 = _diffAndCloneA3.diffData;

                  _this6.miniRenderData[key] = _clone2;

                  if (_diff2) {
                    if (_diffData2 && _index__WEBPACK_IMPORTED_MODULE_14__["default"].config.useStrictDiff) {
                      _this6.processRenderDataWithDiffData(result, key, _diffData2);
                    } else {
                      result[key] = _clone2;
                    }
                  }
                } else {
                  if (!clone) clone = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["diffAndCloneA"])(data).clone;
                  _this6.miniRenderData[key] = result[key] = clone;
                }
              }
            }

            if (_this6.forceUpdateAll) {
              if (!clone) clone = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["diffAndCloneA"])(data).clone;
              _this6.forceUpdateData[key] = clone;
            }
          }();

          if (typeof _ret2 === "object") return _ret2.v;
        }
      };

      for (var key in renderData) {
        var _ret = _loop(key);

        if (_ret === "continue") continue;
      }

      return result;
    }
  }, {
    key: "doRender",
    value: function doRender(data, cb) {
      var _this7 = this;

      if (typeof this.target.__render !== 'function') {
        Object(_helper_log__WEBPACK_IMPORTED_MODULE_19__["error"])('Please specify a [__render] function to render view.', this.options.mpxFileResource);
        return;
      }

      if (typeof cb !== 'function') {
        cb = undefined;
      }

      var isEmpty = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["isEmptyObject"])(data) && Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["isEmptyObject"])(this.forceUpdateData);
      var resolve = this.renderTaskExecutor(isEmpty);

      if (isEmpty) {
        cb && cb();
        return;
      } // 使用forceUpdateData后清空


      if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["isEmptyObject"])(this.forceUpdateData)) {
        data = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["mergeData"])({}, data, this.forceUpdateData);
        this.forceUpdateData = {};
        this.forceUpdateAll = false;
      }
      /**
       * mounted之后才接收回调来触发updated钩子，换言之mounted之前修改数据是不会触发updated的
       */


      var callback = cb;

      if (this.isMounted()) {
        callback = function callback() {
          Object(_platform_patch__WEBPACK_IMPORTED_MODULE_17__["getRenderCallBack"])(_this7)();
          cb && cb();
          resolve && resolve();
        };
      }

      this.target.__render(Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["processUndefined"])(data), callback);
    }
  }, {
    key: "initRender",
    value: function initRender() {
      var _this8 = this;

      var renderWatcher;

      if (this.target.__injectedRender) {
        renderWatcher = new _observer_watcher__WEBPACK_IMPORTED_MODULE_10__["default"](this, function () {
          try {
            return _this8.target.__injectedRender();
          } catch (e) {
            if (!_index__WEBPACK_IMPORTED_MODULE_14__["default"].config.ignoreRenderError) {
              Object(_helper_log__WEBPACK_IMPORTED_MODULE_19__["warn"])("Failed to execute render function, degrade to full-set-data mode.", _this8.options.mpxFileResource, e);
            }

            _this8.render();
          }
        }, _helper_utils__WEBPACK_IMPORTED_MODULE_15__["noop"]);
      } else {
        renderWatcher = new _observer_watcher__WEBPACK_IMPORTED_MODULE_10__["default"](this, function () {
          _this8.render();
        }, _helper_utils__WEBPACK_IMPORTED_MODULE_15__["noop"]);
      }

      this._watcher = renderWatcher;
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate(data, options, callback) {
      var _this9 = this;

      if (typeof data === 'function') {
        callback = data;
        data = undefined;
      }

      options = options || {};

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["isPlainObject"])(data)) {
        var _context5;

        this.forceUpdateData = data;

        _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(_context5 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(this.forceUpdateData)).call(_context5, function (key) {
          if (!_this9.options.__nativeRender__ && !_this9.localKeysMap[Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["getFirstKey"])(key)]) {
            Object(_helper_log__WEBPACK_IMPORTED_MODULE_19__["warn"])("ForceUpdate data includes a props/computed key [".concat(key, "], which may yield a unexpected result!"), _this9.options.mpxFileResource);
          }

          Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["setByPath"])(_this9.data, key, _this9.forceUpdateData[key]);
        });
      } else {
        this.forceUpdateAll = true;
      }

      if (callback) {
        callback = _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_0___default()(callback).call(callback, this.target);
        this.nextTick(callback);
      }

      if (this._watcher) {
        this._watcher.update(options.sync);
      } else {
        if (this.forceUpdateAll) {
          var _context6;

          _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(_context6 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(this.data)).call(_context6, function (key) {
            if (_this9.localKeysMap[key]) {
              _this9.forceUpdateData[key] = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_15__["diffAndCloneA"])(_this9.data[key]).clone;
            }
          });
        }

        options.sync ? this.doRender() : Object(_observer_scheduler__WEBPACK_IMPORTED_MODULE_13__["queueWatcher"])(function () {
          _this9.doRender();
        });
      }
    }
  }]);

  return MPXProxy;
}();



/***/ }),
/* 398 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Watcher; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_is_extensible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(221);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_is_extensible__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_is_extensible__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(399);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(296);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(297);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(405);
/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(306);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(207);









var uid = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */

var Watcher = /*#__PURE__*/function () {
  function Watcher(vm, expOrFn, cb, options) {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Watcher);

    this.vm = vm;
    vm._watchers = vm._watchers || [];

    vm._watchers.push(this); // options


    if (options) {
      this.deep = !!options.deep;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
    } else {
      this.deep = this.lazy = this.sync = false;
    }

    this.cb = cb;
    this.id = ++uid; // uid for batching

    this.active = true;
    this.immediateAsync = false;
    this.dirty = this.lazy; // for lazy watchers

    this.deps = [];
    this.newDeps = [];
    this.depIds = new _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_3___default.a();
    this.newDepIds = new _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_3___default.a();
    this.expression =  true ? expOrFn.toString() : undefined; // parse expression for getter

    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = function () {
        return Object(_helper_utils__WEBPACK_IMPORTED_MODULE_8__["getByPath"])(this, expOrFn);
      };
    }

    this.value = this.lazy ? undefined : this.get();
  }
  /**
   * Evaluate the getter, and re-collect dependencies.
   */


  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Watcher, [{
    key: "get",
    value: function get() {
      Object(_dep__WEBPACK_IMPORTED_MODULE_7__["pushTarget"])(this);
      var value;
      var vm = this.vm;

      try {
        value = this.getter.call(vm.target);
      } catch (e) {
        throw e;
      } finally {
        // "touch" every property so they are all tracked as
        // dependencies for deep watching
        if (this.deep) {
          traverse(value);
        }

        Object(_dep__WEBPACK_IMPORTED_MODULE_7__["popTarget"])();
        this.cleanupDeps();
      }

      return value;
    }
    /**
     * Add a dependency to this directive.
     */

  }, {
    key: "addDep",
    value: function addDep(dep) {
      var id = dep.id;

      if (!this.newDepIds.has(id)) {
        this.newDepIds.add(id);
        this.newDeps.push(dep);

        if (!this.depIds.has(id)) {
          dep.addSub(this);
        }
      }
    }
    /**
     * Clean up for dependency collection.
     */

  }, {
    key: "cleanupDeps",
    value: function cleanupDeps() {
      var i = this.deps.length;

      while (i--) {
        var dep = this.deps[i];

        if (!this.newDepIds.has(dep.id)) {
          dep.removeSub(this);
        }
      }

      var tmp = this.depIds;
      this.depIds = this.newDepIds;
      this.newDepIds = tmp;
      this.newDepIds.clear();
      tmp = this.deps;
      this.deps = this.newDeps;
      this.newDeps = tmp;
      this.newDeps.length = 0;
    }
    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */
    // 支持临时将某个异步watcher修改为sync执行，在模拟setData时使用

  }, {
    key: "update",
    value: function update(sync) {
      /* istanbul ignore else */
      if (this.lazy) {
        this.dirty = true;
      } else if (this.sync || sync) {
        if (sync) Object(_scheduler__WEBPACK_IMPORTED_MODULE_6__["dequeueWatcher"])(this);
        this.run();
      } else {
        Object(_scheduler__WEBPACK_IMPORTED_MODULE_6__["queueWatcher"])(this);
      }
    }
    /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */

  }, {
    key: "run",
    value: function run() {
      if (this.active) {
        var value = this.get();

        if (this.immediateAsync) {
          this.immediateAsync = false;
          this.value = value;
          this.cb.call(this.vm.target, value);
        } else if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        Object(_helper_utils__WEBPACK_IMPORTED_MODULE_8__["isObject"])(value) || this.deep) {
          // set new value
          var oldValue = this.value;
          this.value = value;
          this.cb.call(this.vm.target, value, oldValue);
        }
      }
    }
    /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */

  }, {
    key: "evaluate",
    value: function evaluate() {
      this.value = this.get();
      this.dirty = false;
    }
    /**
     * Depend on all deps collected by this watcher.
     */

  }, {
    key: "depend",
    value: function depend() {
      var i = this.deps.length;

      while (i--) {
        this.deps[i].depend();
      }
    }
    /**
     * Remove self from all dependencies' subscriber list.
     */

  }, {
    key: "teardown",
    value: function teardown() {
      if (this.active) {
        if (this.vm.state !== '__destroyed__') {
          Object(_helper_utils__WEBPACK_IMPORTED_MODULE_8__["remove"])(this.vm._watchers, this);
        }

        var i = this.deps.length;

        while (i--) {
          this.deps[i].removeSub(this);
        }

        this.active = false;
      }
    }
  }]);

  return Watcher;
}();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */



var seenObjects = new _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_3___default.a();

function traverse(val) {
  seenObjects.clear();

  _traverse(val, seenObjects);
}

function _traverse(val, seen) {
  var i, keys;

  var isA = _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(val);

  if (!isA && !Object(_helper_utils__WEBPACK_IMPORTED_MODULE_8__["isObject"])(val) || !_babel_runtime_corejs3_core_js_stable_object_is_extensible__WEBPACK_IMPORTED_MODULE_1___default()(val)) {
    return;
  }

  if (val.__ob__) {
    var depId = val.__ob__.dep.id;

    if (seen.has(depId)) {
      return;
    }

    seen.add(depId);
  }

  if (isA) {
    i = val.length;

    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(val);
    i = keys.length;

    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(400);

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(401);

module.exports = parent;


/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(402);
__webpack_require__(91);
__webpack_require__(71);
__webpack_require__(6);
var path = __webpack_require__(41);

module.exports = path.Set;


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(403);
var collectionStrong = __webpack_require__(404);

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var global = __webpack_require__(17);
var InternalMetadataModule = __webpack_require__(219);
var fails = __webpack_require__(10);
var createNonEnumerableProperty = __webpack_require__(21);
var iterate = __webpack_require__(277);
var anInstance = __webpack_require__(282);
var isObject = __webpack_require__(26);
var setToStringTag = __webpack_require__(63);
var defineProperty = __webpack_require__(23).f;
var forEach = __webpack_require__(98).forEach;
var DESCRIPTORS = __webpack_require__(22);
var InternalStateModule = __webpack_require__(15);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var exported = {};
  var Constructor;

  if (!DESCRIPTORS || typeof NativeConstructor != 'function'
    || !(IS_WEAK || NativePrototype.forEach && !fails(function () { new NativeConstructor().entries().next(); }))
  ) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else {
    Constructor = wrapper(function (target, iterable) {
      setInternalState(anInstance(target, Constructor, CONSTRUCTOR_NAME), {
        type: CONSTRUCTOR_NAME,
        collection: new NativeConstructor()
      });
      if (iterable != undefined) iterate(iterable, target[ADDER], { that: target, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    forEach(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {
        createNonEnumerableProperty(Constructor.prototype, KEY, function (a, b) {
          var collection = getInternalState(this).collection;
          if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
          var result = collection[KEY](a === 0 ? 0 : a, b);
          return IS_ADDER ? this : result;
        });
      }
    });

    IS_WEAK || defineProperty(Constructor.prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).collection.size;
      }
    });
  }

  setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: true }, exported);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(23).f;
var create = __webpack_require__(52);
var redefineAll = __webpack_require__(280);
var bind = __webpack_require__(42);
var anInstance = __webpack_require__(282);
var iterate = __webpack_require__(277);
var defineIterator = __webpack_require__(36);
var setSpecies = __webpack_require__(281);
var DESCRIPTORS = __webpack_require__(22);
var fastKey = __webpack_require__(219).fastKey;
var InternalStateModule = __webpack_require__(15);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),
/* 405 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueWatcher", function() { return queueWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dequeueWatcher", function() { return dequeueWatcher; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(406);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(254);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(207);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(300);





var queue = [];
var has = {};
var circular = {};
var flushing = false;
var curIndex = 0;
var lockTask = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_3__["asyncLock"])();
var MAX_UPDATE_COUNT = 100;
function queueWatcher(watcher) {
  if (!watcher.id && typeof watcher === 'function') {
    watcher = {
      id: Infinity,
      run: watcher
    };
  }

  if (!has[watcher.id] || watcher.id === Infinity) {
    has[watcher.id] = true;

    if (!flushing) {
      queue.push(watcher);
      lockTask(flushQueue, resetQueue);
    } else {
      var i = queue.length - 1;

      while (i > curIndex && watcher.id < queue[i].id) {
        i--;
      }

      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default()(queue).call(queue, i + 1, 0, watcher);
    }
  }
}
function dequeueWatcher(watcher) {
  if (!watcher.id || !has[watcher.id]) return;

  var index = _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1___default()(queue).call(queue, watcher);

  if (index > -1) {
    _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default()(queue).call(queue, index, 1);

    has[watcher.id] = false;
  }
}

function flushQueue() {
  flushing = true;

  _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0___default()(queue).call(queue, function (a, b) {
    return a.id - b.id;
  });

  for (curIndex = 0; curIndex < queue.length; curIndex++) {
    var watcher = queue[curIndex];
    var id = watcher.id;

    if (id !== Infinity) {
      delete has[id];

      if (true) {
        circular[id] = (circular[id] || 0) + 1;

        if (circular[id] > MAX_UPDATE_COUNT) {
          var location = watcher.vm && watcher.vm.options && watcher.vm.options.mpxFileResource;
          Object(_helper_log__WEBPACK_IMPORTED_MODULE_4__["error"])("You may have a dead circular update in watcher with expression [".concat(watcher.expression, "], please check!"), location);
          break;
        }
      }
    } // 如果已经销毁，就不再执行


    if (!watcher.destroyed) {
      watcher.run();
    }
  }

  resetQueue();
}

function resetQueue() {
  flushing = false;
  curIndex = queue.length = 0;
  has = {};

  if (true) {
    circular = {};
  }
}

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(407);

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(408);

module.exports = parent;


/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

var sort = __webpack_require__(409);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.sort;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.sort) ? sort : own;
};


/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(410);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('Array').sort;


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var aFunction = __webpack_require__(43);
var toObject = __webpack_require__(47);
var fails = __webpack_require__(10);
var arrayMethodIsStrict = __webpack_require__(142);

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 411 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return watch; });
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(207);
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(398);
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(405);



function watch(vm, expOrFn, cb, options) {
  if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(cb)) {
    options = cb;
    cb = cb.handler;
  }

  if (typeof cb === 'string') {
    if (vm.target && vm.target[cb]) {
      cb = vm.target[cb];
    } else {
      cb = _helper_utils__WEBPACK_IMPORTED_MODULE_0__["noop"];
    }
  }

  cb = cb || _helper_utils__WEBPACK_IMPORTED_MODULE_0__["noop"];
  options = options || {};
  options.user = true;
  var watcher = new _watcher__WEBPACK_IMPORTED_MODULE_1__["default"](vm, expOrFn, cb, options);

  if (options.immediate) {
    cb.call(vm.target, watcher.value);
  } else if (options.immediateAsync) {
    watcher.immediateAsync = true;
    Object(_scheduler__WEBPACK_IMPORTED_MODULE_2__["queueWatcher"])(watcher);
  }

  return function unwatchFn() {
    watcher.teardown();
  };
}

/***/ }),
/* 412 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initComputed", function() { return initComputed; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(264);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(143);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(398);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(207);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(300);
/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(306);






var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: _helper_utils__WEBPACK_IMPORTED_MODULE_3__["noop"],
  set: _helper_utils__WEBPACK_IMPORTED_MODULE_3__["noop"]
};
function initComputed(vm, target, computed) {
  var watchers = vm._computedWatchers = {};

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    watchers[key] = new _watcher__WEBPACK_IMPORTED_MODULE_2__["default"](vm, getter || _helper_utils__WEBPACK_IMPORTED_MODULE_3__["noop"], _helper_utils__WEBPACK_IMPORTED_MODULE_3__["noop"], {
      lazy: true
    });

    if (!(key in target)) {
      defineComputed(vm, target, key, userDef);
    } else {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_4__["error"])("The computed key [".concat(key, "] is duplicated with data/props, please check."), vm.options.mpxFileResource);
    }
  }
}

function defineComputed(vm, target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(vm, key);
    sharedPropertyDefinition.set = _helper_utils__WEBPACK_IMPORTED_MODULE_3__["noop"];
  } else {
    var _context;

    sharedPropertyDefinition.get = userDef.get ? createComputedGetter(vm, key) : _helper_utils__WEBPACK_IMPORTED_MODULE_3__["noop"];
    sharedPropertyDefinition.set = userDef.set ? _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(_context = userDef.set).call(_context, vm.target) : _helper_utils__WEBPACK_IMPORTED_MODULE_3__["noop"];
  }

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, sharedPropertyDefinition);
}

function createComputedGetter(vm, key) {
  return function () {
    var watcher = vm._computedWatchers && vm._computedWatchers[key];

    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }

      if (_dep__WEBPACK_IMPORTED_MODULE_5__["default"].target) {
        watcher.depend();
      }

      return watcher.value;
    }
  };
}

/***/ }),
/* 413 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultOptions", function() { return getDefaultOptions; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(158);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(313);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(264);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(302);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(143);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_proxy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(397);
/* harmony import */ var _builtInKeysMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(337);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(171);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(300);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(207);














function transformApiForProxy(context, currentInject) {
  var _context;

  var rawSetData = _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_7___default()(_context = context.setData).call(_context, context);

  if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default()(context, 'setData').configurable) {
    _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()(context, 'setData', {
      get() {
        return function (data, callback) {
          return context.__mpxProxy.forceUpdate(data, {
            sync: true
          }, callback);
        };
      },

      configurable: true
    });
  }

  _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default()(context, {
    __getInitialData: {
      get() {
        return function (options) {
          if (context.props) {
            var _context2;

            var newData = context.$rawOptions.__nativeRender__ ? context.data : _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, context.data);

            var validProps = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, options.props, options.properties);

            _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(context.props)).call(_context2, function (key) {
              if (validProps.hasOwnProperty(key) && typeof context.props[key] !== 'function') {
                newData[key] = context.props[key];
              }
            });

            return newData;
          }

          return context.data;
        };
      },

      configurable: false
    },
    __render: {
      get() {
        return rawSetData;
      },

      configurable: false
    }
  });

  if (currentInject) {
    if (currentInject.render) {
      _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default()(context, {
        __injectedRender: {
          get() {
            var _context3;

            return _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_7___default()(_context3 = currentInject.render).call(_context3, context);
          },

          configurable: false
        }
      });
    }

    if (currentInject.getRefsData) {
      _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default()(context, {
        __getRefsData: {
          get() {
            return currentInject.getRefsData;
          },

          configurable: false
        }
      });
    }
  }
}

function filterOptions(options, type) {
  var _context4;

  var newOptions = {};

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(_context4 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(options)).call(_context4, function (key) {
    if (_builtInKeysMap__WEBPACK_IMPORTED_MODULE_9__["default"][key]) {
      return;
    }

    if (key === 'properties' || key === 'props') {
      newOptions.props = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, options.properties, options.props);
    } else if (key === 'methods' && type === 'page') {
      _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default()(newOptions, options[key]);
    } else {
      newOptions[key] = options[key];
    }
  });

  return newOptions;
}

function getDefaultOptions(type, _ref) {
  var _ref$rawOptions = _ref.rawOptions,
      rawOptions = _ref$rawOptions === void 0 ? {} : _ref$rawOptions,
      currentInject = _ref.currentInject;
  var hookNames = type === 'component' ? ['onInit', 'didMount', 'didUnmount'] : ['onLoad', 'onReady', 'onUnload'];
  var rootMixins = [{
    [hookNames[0]]() {
      var _this$__mpxProxy;

      // 提供代理对象需要的api
      transformApiForProxy(this, currentInject); // 缓存options

      this.$rawOptions = rawOptions; // 创建proxy对象

      var mpxProxy = new _core_proxy__WEBPACK_IMPORTED_MODULE_8__["default"](rawOptions, this);
      this.__mpxProxy = mpxProxy;

      (_this$__mpxProxy = this.__mpxProxy).created.apply(_this$__mpxProxy, arguments);
    },

    deriveDataFromProps(nextProps) {
      var _this = this;

      if (this.__mpxProxy && this.__mpxProxy.isMounted() && nextProps && nextProps !== this.props) {
        var validProps = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, this.$rawOptions.props, this.$rawOptions.properties);

        if (this.$rawOptions.__nativeRender__) {
          var _context5;

          var newData = {}; // 微信原生转换支付宝时，每次props更新将其设置进data模拟微信表现

          _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(_context5 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(nextProps)).call(_context5, function (key) {
            if (validProps.hasOwnProperty(key) && typeof nextProps[key] !== 'function') {
              var _diffAndCloneA = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_12__["diffAndCloneA"])(nextProps[key], _this.props[key]),
                  diff = _diffAndCloneA.diff,
                  clone = _diffAndCloneA.clone;

              if (diff) newData[key] = clone;
            }
          });

          this.setData(newData);
        } else {
          var _context6;

          // 由于支付宝中props透传父级setData的值，此处发生变化的属性实例一定不同，只需浅比较即可确定发生变化的属性
          // 支付宝appx2.0版本后props传递发生变化，此处获取到的nextProps和this.props以及父组件setData的数据引用都不一致，进行了两次深克隆，此处this.props和nextProps的比对需要用deep diff
          _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(_context6 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(nextProps)).call(_context6, function (key) {
            if (validProps.hasOwnProperty(key) && typeof nextProps[key] !== 'function') {
              var _diffAndCloneA2 = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_12__["diffAndCloneA"])(nextProps[key], _this.props[key]),
                  diff = _diffAndCloneA2.diff,
                  clone = _diffAndCloneA2.clone; // 由于支付宝中透传父级setData的值，此处进行深copy后赋值避免父级存储的miniRenderData部分数据在此处被响应化，在子组件对props赋值时触发父组件的render


              if (diff) _this[key] = clone;
            }
          });
        }
      }
    },

    didUpdate() {
      this.__mpxProxy && this.__mpxProxy.updated();
    },

    [hookNames[1]]() {
      if (this.__mpxProxy) {
        this.__mpxProxy.mounted();
      } else {
        Object(_helper_log__WEBPACK_IMPORTED_MODULE_11__["error"])('请在支付宝开发工具的详情设置里面，启用component2编译。依赖基础库版本 >=1.14.0');
      }
    },

    [hookNames[2]]() {
      this.__mpxProxy && this.__mpxProxy.destroyed();
    }

  }];
  rawOptions.mixins = rawOptions.mixins ? _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(rootMixins).call(rootMixins, rawOptions.mixins) : rootMixins;
  rawOptions = Object(_core_mergeOptions__WEBPACK_IMPORTED_MODULE_10__["default"])(rawOptions, type, false);
  return filterOptions(rawOptions, type);
}

/***/ }),
/* 414 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultOptions", function() { return getDefaultOptions; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(158);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _builtInKeysMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(337);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(171);
/* harmony import */ var _core_proxy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(397);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(207);









function filterOptions(options) {
  var _context;

  var newOptions = {};

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(options)).call(_context, function (key) {
    if (_builtInKeysMap__WEBPACK_IMPORTED_MODULE_4__["default"][key]) {
      return;
    }

    if (key === 'data' || key === 'dataFn') {
      newOptions.data = function mergeFn() {
        return _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["diffAndCloneA"])(options.data || {}).clone, options.dataFn && options.dataFn.call(this));
      };
    } else {
      newOptions[key] = options[key];
    }
  });

  return newOptions;
}

function initProxy(context, rawOptions) {
  // 缓存options
  context.$rawOptions = rawOptions; // 创建proxy对象

  var mpxProxy = new _core_proxy__WEBPACK_IMPORTED_MODULE_6__["default"](rawOptions, context);
  context.__mpxProxy = mpxProxy;

  context.__mpxProxy.created();
}

function getDefaultOptions(type, _ref) {
  var _ref$rawOptions = _ref.rawOptions,
      rawOptions = _ref$rawOptions === void 0 ? {} : _ref$rawOptions;
  var rootMixins = [{
    created() {
      if (!this.__mpxProxy) {
        initProxy(this, rawOptions);
      }
    },

    mounted() {
      this.__mpxProxy && this.__mpxProxy.mounted();
    },

    updated() {
      this.__mpxProxy && this.__mpxProxy.updated();
    },

    destroyed() {
      this.__mpxProxy && this.__mpxProxy.destroyed();
    }

  }]; // 为了在builtMixin中可以使用某些rootMixin实现的特性（如数据响应等），此处builtInMixin在rootMixin之后执行，但是当builtInMixin使用存在对应内建生命周期的目标平台声明周期写法时，可能会出现用户生命周期比builtInMixin中的生命周期先执行的情况，为了避免这种情况发生，builtInMixin应该尽可能使用内建生命周期来编写

  rawOptions.mixins = rawOptions.mixins ? _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(rootMixins).call(rootMixins, rawOptions.mixins) : rootMixins;
  rawOptions = Object(_core_mergeOptions__WEBPACK_IMPORTED_MODULE_5__["default"])(rawOptions, type, false);
  return filterOptions(rawOptions);
}

/***/ }),
/* 415 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(340);

/* harmony default export */ __webpack_exports__["default"] = (Object(_patch__WEBPACK_IMPORTED_MODULE_0__["default"])('component'));

/***/ }),
/* 416 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStateWithThis", function() { return createStateWithThis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGettersWithThis", function() { return createGettersWithThis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMutationsWithThis", function() { return createMutationsWithThis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createActionsWithThis", function() { return createActionsWithThis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStoreWithThis", function() { return createStoreWithThis; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(125);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(158);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(296);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(297);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(273);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(143);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(163);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(301);
/* harmony import */ var _observer_computed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(412);
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(294);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(207);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(300);
/* harmony import */ var _mapStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(417);















 // 兼容在web和小程序平台中创建表现一致的store



function transformGetters(getters, module, store) {
  var newGetters = {};

  var _loop = function _loop(key) {
    if (key in store.getters) {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_15__["warn"])("Duplicate getter type: ".concat(key, "."));
    }

    var getter = function getter() {
      if (store.withThis) {
        return getters[key].call({
          state: module.state,
          getters: store.getters,
          rootState: store.state
        });
      }

      return getters[key](module.state, store.getters, store.state);
    };

    newGetters[key] = getter;
  };

  for (var key in getters) {
    _loop(key);
  }

  return newGetters;
}

function transformMutations(mutations, module, store) {
  var newMutations = {};

  var _loop2 = function _loop2(key) {
    if (store.mutations[key]) {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_15__["warn"])("Duplicate mutation type: ".concat(key, "."));
    }

    var mutation = function mutation() {
      var _context;

      for (var _len = arguments.length, payload = new Array(_len), _key = 0; _key < _len; _key++) {
        payload[_key] = arguments[_key];
      }

      if (store.withThis) return mutations[key].apply({
        state: module.state
      }, payload);
      return mutations[key].apply(mutations, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10___default()(_context = [module.state]).call(_context, payload));
    };

    newMutations[key] = mutation;
  };

  for (var key in mutations) {
    _loop2(key);
  }

  return newMutations;
}

function transformActions(actions, module, store) {
  var newActions = {};

  var _loop3 = function _loop3(key) {
    if (store.actions[key]) {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_15__["warn"])("Duplicate action type: ".concat(key, "."));
    }

    newActions[key] = function () {
      var _context2, _context3;

      var context = {
        rootState: store.state,
        state: module.state,
        getters: store.getters,
        dispatch: _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_9___default()(_context2 = store.dispatch).call(_context2, store),
        commit: _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_9___default()(_context3 = store.commit).call(_context3, store)
      };
      var result;

      for (var _len2 = arguments.length, payload = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        payload[_key2] = arguments[_key2];
      }

      if (store.withThis) {
        result = actions[key].apply(context, payload);
      } else {
        var _context4;

        result = actions[key].apply(actions, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10___default()(_context4 = [context]).call(_context4, payload));
      } // action一定返回一个promise


      if (result && typeof result.then === 'function' && typeof result.catch === 'function') {
        return result;
      } else {
        return _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_8___default.a.resolve(result);
      }
    };
  };

  for (var key in actions) {
    _loop3(key);
  }

  return newActions;
}

function mergeDeps(module, deps) {
  var _context5;

  var mergeProps = ['state', 'getters', 'mutations', 'actions'];

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7___default()(_context5 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(deps)).call(_context5, function (key) {
    var store = deps[key];

    _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7___default()(mergeProps).call(mergeProps, function (prop) {
      if (module[prop] && key in module[prop]) {
        var _context6;

        Object(_helper_log__WEBPACK_IMPORTED_MODULE_15__["warn"])(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10___default()(_context6 = "Deps's name [".concat(key, "] conflicts with ")).call(_context6, prop, "'s key in current options."));
      } else {
        module[prop] = module[prop] || {};

        if (prop === 'getters') {
          // depsGetters单独存放，不需要重新进行初始化
          module.depsGetters = module.depsGetters || {};
          module.depsGetters[key] = store.getters; // module[prop][key] = () => store[prop]
        } else {
          module[prop][key] = store[prop];
        }
      }
    });
  });
}

var Store = /*#__PURE__*/function () {
  function Store(options) {
    var _this = this;

    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Store);

    var _options$plugins = options.plugins,
        plugins = _options$plugins === void 0 ? [] : _options$plugins;
    this.withThis = options.withThis;
    this.__wrappedGetters = {};
    this.__depsGetters = {};
    this.getters = {};
    this.mutations = {};
    this.actions = {};
    this._subscribers = [];
    this.state = this.registerModule(options).state;
    this.resetStoreVM();

    _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default()(this, Object(_mapStore__WEBPACK_IMPORTED_MODULE_16__["default"])(this));

    _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7___default()(plugins).call(plugins, function (plugin) {
      return plugin(_this);
    });
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Store, [{
    key: "dispatch",
    value: function dispatch(type) {
      var action = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_14__["getByPath"])(this.actions, type);

      if (!action) {
        return _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_8___default.a.reject(new Error("unknown action type: ".concat(type)));
      } else {
        for (var _len3 = arguments.length, payload = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          payload[_key3 - 1] = arguments[_key3];
        }

        return action.apply(void 0, payload);
      }
    }
  }, {
    key: "commit",
    value: function commit(type) {
      var _this2 = this;

      for (var _len4 = arguments.length, payload = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        payload[_key4 - 1] = arguments[_key4];
      }

      var mutation = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_14__["getByPath"])(this.mutations, type);

      if (!mutation) {
        Object(_helper_log__WEBPACK_IMPORTED_MODULE_15__["warn"])("Unknown mutation type: ".concat(type, "."));
      } else {
        var _context7, _context8;

        mutation.apply(void 0, payload);
        return _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7___default()(_context7 = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2___default()(_context8 = this._subscribers).call(_context8)).call(_context7, function (sub) {
          return sub({
            type,
            payload
          }, _this2.state);
        });
      }
    }
  }, {
    key: "subscribe",
    value: function subscribe(fn, options) {
      return genericSubscribe(fn, this._subscribers, options);
    }
  }, {
    key: "registerModule",
    value: function registerModule(module) {
      var _this3 = this;

      var state = module.state || {};
      var reactiveModule = {
        state
      };

      if (module.getters) {
        reactiveModule.getters = transformGetters(module.getters, reactiveModule, this);
      }

      if (module.mutations) {
        reactiveModule.mutations = transformMutations(module.mutations, reactiveModule, this);
      }

      if (module.actions) {
        reactiveModule.actions = transformActions(module.actions, reactiveModule, this);
      }

      if (module.deps) {
        mergeDeps(reactiveModule, module.deps);
      }

      _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default()(this.__depsGetters, reactiveModule.depsGetters);

      _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default()(this.__wrappedGetters, reactiveModule.getters); // merge mutations


      _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default()(this.mutations, reactiveModule.mutations); // merge actions


      _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default()(this.actions, reactiveModule.actions); // 子module


      if (module.modules) {
        var _context9;

        var childs = module.modules;

        _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7___default()(_context9 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(childs)).call(_context9, function (key) {
          reactiveModule.state[key] = _this3.registerModule(childs[key]).state;
        });
      }

      return reactiveModule;
    }
  }, {
    key: "resetStoreVM",
    value: function resetStoreVM() {
      if (false) { var computedKeys; } else {
        this._vm = {};
        Object(_observer_index__WEBPACK_IMPORTED_MODULE_11__["observe"])(this.state, true);
        Object(_observer_computed__WEBPACK_IMPORTED_MODULE_12__["initComputed"])(this._vm, this.getters, this.__wrappedGetters);
        Object(_helper_utils__WEBPACK_IMPORTED_MODULE_14__["proxy"])(this.getters, this.__depsGetters);
      }
    }
  }]);

  return Store;
}();

function genericSubscribe(fn, subs, options) {
  if (_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1___default()(subs).call(subs, fn) < 0) {
    options && options.prepend ? subs.unshift(fn) : subs.push(fn);
  }

  return function () {
    var i = _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1___default()(subs).call(subs, fn);

    if (i > -1) {
      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(subs).call(subs, i, 1);
    }
  };
}

function createStore(options) {
  return new Store(options);
} // ts util functions

function createStateWithThis(state) {
  return state;
}
function createGettersWithThis(getters) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return getters;
}
function createMutationsWithThis(mutations) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return mutations;
}
function createActionsWithThis(actions) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return actions;
}
function createStoreWithThis(options) {
  options.withThis = true;
  return new Store(options);
}

/***/ }),
/* 417 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(207);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(300);





function mapFactory(type, store) {
  return function (depPath, maps) {
    maps = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_2__["normalizeMap"])(depPath, maps);
    var result = {};

    var _loop = function _loop(key) {
      result[key] = function (payload) {
        var value = maps[key];

        if (type === 'mutations') {
          return store.commit(value, payload);
        } else if (type === 'actions') {
          return store.dispatch(value, payload);
        } else {
          var getterVal = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_2__["getByPath"])(store.getters, value, '', '__NOTFOUND__');

          if (getterVal === '__NOTFOUND__') {
            Object(_helper_log__WEBPACK_IMPORTED_MODULE_3__["warn"])("Unknown getter named [".concat(value, "]."));
            getterVal = '';
          }

          return getterVal;
        }
      };
    };

    for (var key in maps) {
      _loop(key);
    }

    return result;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return {
    mapGetters: mapFactory('getters', store),
    mapMutations: mapFactory('mutations', store),
    mapActions: mapFactory('actions', store),
    mapState: function mapState(depPath, maps) {
      var _context;

      maps = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_2__["normalizeMap"])(depPath, maps);
      var result = {};

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(maps)).call(_context, function (key) {
        var value = maps[key];

        result[key] = function () {
          if (typeof value === 'function') {
            return value.call(this, store.state, store.getters);
          } else if (typeof value === 'string') {
            return Object(_helper_utils__WEBPACK_IMPORTED_MODULE_2__["getByPath"])(store.state, value);
          }
        };
      });

      return result;
    }
  };
});

/***/ }),
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

function objectKeys(obj) {
  if (true) {
    return Object.keys(obj);
  } else { var item, i, shift, stack, inKey, key, objStr, shiftMap, stackMap, keys; }
}

function genRegExp(str, flags) {
  if (true) {
    return new RegExp(str, flags);
  } else {}
}

function extend(target, from) {
  var fromKeys = objectKeys(from);
  for (var i = 0; i < fromKeys.length; i++) {
    var key = fromKeys[i];
    target[key] = from[key];
  }
  return target;
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function likeArray(arr) {
  if (true) {
    return Array.isArray(arr);
  } else {}
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function stringifyClass(value) {
  if (!value) return '';
  if (likeArray(value)) {
    return stringifyArray(value);
  }
  if (isObject(value)) {
    return stringifyObject(value);
  }
  if (typeof value === 'string') {
    return value;
  }
  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;
  for (var i = 0; i < value.length; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) res += ' ';
      res += stringified;
    }
  }
  return res;
}

var mpxDashReg = genRegExp('(.+)MpxDash$');

function stringifyObject(value) {
  var res = '';
  var objKeys = objectKeys(value);
  for (var i = 0; i < objKeys.length; i++) {
    var key = objKeys[i];
    if (value[key]) {
      if (res) res += ' ';
      if (mpxDashReg.test(key)) {
        key = hump2dash(mpxDashReg.exec(key)[1]);
      }
      res += key;
    }
  }
  return res;
}

function hump2dash(value) {
  var reg = genRegExp('[A-Z]', 'g');
  return value.replace(reg, function (match) {
    return '-' + match.toLowerCase();
  });
}

function dash2hump(value) {
  var reg = genRegExp('-([a-z])', 'g');
  return value.replace(reg, function (match, p1) {
    return p1.toUpperCase();
  });
}

function parseStyleText(cssText) {
  var res = {};
  var listDelimiter = genRegExp(';(?![^(]*[)])', 'g');
  var propertyDelimiter = genRegExp(':(.+)');
  var arr = cssText.split(listDelimiter);
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[dash2hump(tmp[0].trim())] = tmp[1].trim());
    }
  }
  return res;
}

function genStyleText(styleObj) {
  var res = '';
  var objKeys = objectKeys(styleObj);

  for (var i = 0; i < objKeys.length; i++) {
    var key = objKeys[i];
    var item = styleObj[key];
    res += hump2dash(key) + ':' + item + ';';
  }
  return res;
}

function mergeObjectArray(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

function normalizeDynamicStyle(value) {
  if (!value) return {};
  if (likeArray(value)) {
    return mergeObjectArray(value);
  }
  if (typeof value === 'string') {
    return parseStyleText(value);
  }
  return value;
}

module.exports = {
  stringifyClass: function (staticClass, dynamicClass) {
    if (typeof staticClass !== 'string') {
      return console.log('Template attr class must be a string!');
    }
    return concat(staticClass, stringifyClass(dynamicClass));
  },
  stringifyStyle: function (staticStyle, dynamicStyle) {
    var normalizedDynamicStyle = normalizeDynamicStyle(dynamicStyle);
    var parsedStaticStyle = typeof staticStyle === 'string' ? parseStyleText(staticStyle) : {};
    return genStyleText(extend(parsedStaticStyle, normalizedDynamicStyle));
  }
};

/***/ }),
/* 432 */,
/* 433 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


var store = Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_1__["createStore"])({
  state: {
    cavas: null,
    // cnavas实例
    ctx: null,
    // canvas上下文实例
    elements: [],
    // canvas元素
    activeIndex: null,
    // 当前编辑中的元素索引
    mode: 'background',
    // 当前编辑模式：background, text, sticker
    fontStyle: {
      // 文字默认样式
      opacity: 1,
      fillStyle: '#000000',
      strokeStyle: '#000000'
    }
  },
  mutations: {
    setCanvas(state, data) {
      state.canvas = data;
    },

    setCtx(state, data) {
      state.ctx = data;
    },

    setElements(state, data) {
      state.elements = data;
    },

    setMode(state, data) {
      state.mode = data;
    },

    setActiveIndex(state, data) {
      state.activeIndex = data;
    },

    setFontStyle(state, _ref) {
      var key = _ref.key,
          data = _ref.data;
      state.fontStyle[key] = data;
    },

    // 添加文字
    addText(state) {
      var size = 50;
      var string = '请输入文字';
      var text = {
        type: 'text',
        data: string,
        scale: 1,
        size,
        left: 100,
        top: 100,
        rotate: 0,
        opacity: state.fontStyle.opacity,
        fillStyle: state.fontStyle.fillStyle,
        strokeStyle: state.fontStyle.strokeStyle
      };
      state.elements.push(text);
      state.activeIndex = state.elements.length - 1;
    },

    // 添加贴图
    addSticker(state, data) {
      state.elements.push(data);
      state.activeIndex = state.elements.length - 1;
    },

    // 删除当前选中
    deleteActiveELement(state) {
      var _context;

      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context = state.elements).call(_context, state.activeIndex, 1);

      state.activeIndex = null;
    },

    // 清空画布
    clear(state) {
      state.elements = [];
      state.activeIndex = null;
    }

  }
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(440);

/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(441);

module.exports = parent;


/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

var find = __webpack_require__(442);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.find;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.find) ? find : own;
};


/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(443);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('Array').find;


/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var $find = __webpack_require__(98).find;
var addToUnscopables = __webpack_require__(13);
var arrayMethodUsesToLength = __webpack_require__(130);

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ })
/******/ ]);
module.exports = window["webpackJsonp"];

//# sourceMappingURL=bundle.js.map