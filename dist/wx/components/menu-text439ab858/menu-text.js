
var window = window || {};

window["webpackJsonp"] = require("../../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(454);

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(455);

module.exports = parent;


/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

var find = __webpack_require__(456);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.find;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.find) ? find : own;
};


/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(457);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('Array').find;


/***/ }),

/***/ 457:
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


/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, __stringify__) {/* mpx inject */ global.currentModuleId = "m254ba0d0"
global.currentResource = "/Users/luo/Projects/self/face-maker/src/components/menu-text.mpx"
global.currentCtor = Component
global.currentCtorType = "component"
global.currentSrcMode = "wx"
/* mpx inject */ global.currentInject = {
  moduleId: "m254ba0d0",
  render: function () {
    this._c("mpxShow", this.mpxShow) || this._c("mpxShow", this.mpxShow) === undefined ? '' : 'display:none;';
    if (this._c("editing", this.editing)) {} else {}
    this._c("opacity", this.opacity);
    this._i(this._c("colors", this.colors), function (item, index) {
      __stringify__.stringifyClass("color", { active: this._c("color", this.color) === item });
      __stringify__.stringifyStyle("", { background: item });
      ({ tap: [["colorChange", item]] });
    });
    this._i(this._c("colors", this.colors), function (item, index) {
      __stringify__.stringifyClass("color", { active: this._c("borderColor", this.borderColor) === item });
      __stringify__.stringifyStyle("", { background: item });
      ({ tap: [["borderColorChange", item]] });
    });
    this._r();
  }
};
/* harmony import */ var _babel_loader_node_modules_mpxjs_webpack_plugin_lib_selector_type_script_index_0_menu_text_mpx_packageName_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(462);
/* empty/unused harmony star reexport */global.currentModuleId
/* script */


/* styles */
__webpack_require__(463)

/* json */
__webpack_require__(464)

/* template */
__webpack_require__(465)


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(431)))

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(453);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(433);



Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_1__["createComponent"])({
  data: {
    colors: ['#000000', '#ffffff', '#0076B6', '#00A948', '#FFB500', '#FF2929']
  },
  computed: {
    editing() {
      return _store__WEBPACK_IMPORTED_MODULE_2__["default"].state.activeIndex;
    },

    opacity() {
      return _store__WEBPACK_IMPORTED_MODULE_2__["default"].state.fontStyle.opacity;
    },

    color() {
      return _store__WEBPACK_IMPORTED_MODULE_2__["default"].state.fontStyle.color;
    },

    borderColor() {
      return _store__WEBPACK_IMPORTED_MODULE_2__["default"].state.fontStyle.borderColor;
    }

  },
  watch: {
    opacity(val) {
      console.log('opacity-change', val);
    }

  },
  methods: {
    addText() {
      var _context;

      var background = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context = _store__WEBPACK_IMPORTED_MODULE_2__["default"].state.elements).call(_context, function (e) {
        return e.type === 'background';
      });

      if (!background) {
        wx.showToast({
          title: '请先选择背景图',
          icon: 'none'
        });
        return;
      }

      _store__WEBPACK_IMPORTED_MODULE_2__["default"].commit('addText');
    },

    opacityChange(e) {
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].commit('setFontStyle', {
        key: 'opacity',
        data: e.detail.value
      });
    },

    colorChange(e) {
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].commit('setFontStyle', {
        key: 'color',
        data: e
      });
    },

    borderColorChange(e) {
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].commit('setFontStyle', {
        key: 'borderColor',
        data: e
      });
    }

  },

  ready() {// this.initCanvas()
  }

});

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

// removed by extractor

/***/ }),

/***/ 464:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

// removed by extractor

/***/ })

},[[461,1]]]);
//# sourceMappingURL=menu-text.js.map