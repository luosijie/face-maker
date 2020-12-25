
var window = window || {};

window["webpackJsonp"] = require("../../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, __stringify__) {/* mpx inject */ global.currentModuleId = "m655469d4"
global.currentResource = "/Users/luo/Projects/self/face-maker/src/miniprogram/components/menu-text.mpx"
global.currentCtor = Component
global.currentCtorType = "component"
global.currentSrcMode = "wx"
/* mpx inject */ global.currentInject = {
  moduleId: "m655469d4",
  render: function () {
    this._c("mpxShow", this.mpxShow) || this._c("mpxShow", this.mpxShow) === undefined ? '' : 'display:none;';
    if (this._c("activeIndex", this.activeIndex)) {
      this._c("activeElement.data", this.activeElement.data);
    } else {}
    this._c("opacity", this.opacity);
    this._i(this._c("colors", this.colors), function (item, index) {
      __stringify__.stringifyClass("color", { active: this._c("fillStyle", this.fillStyle) === item });
      __stringify__.stringifyStyle("", { background: item });
      ({ tap: [["fillStyleChange", item]] });
    });
    this._i(this._c("colors", this.colors), function (item, index) {
      __stringify__.stringifyClass("color", { active: this._c("strokeStyle", this.strokeStyle) === item });
      __stringify__.stringifyStyle("", { background: item });
      ({ tap: [["strokeStyleChange", item]] });
    });
    this._r();
  }
};
/* harmony import */ var _babel_loader_node_modules_mpxjs_webpack_plugin_lib_selector_type_script_index_0_menu_text_mpx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(476);
/* empty/unused harmony star reexport */global.currentModuleId
/* script */


/* styles */
__webpack_require__(482)

/* json */
__webpack_require__(483)

/* template */
__webpack_require__(484)


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(443)))

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(477);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(179);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(445);




Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_2__["createComponent"])({
  data: {
    colors: ['#000000', '#ffffff', '#0076B6', '#00A948', '#FFB500', '#FF2929']
  },
  computed: {
    activeElement() {
      return _store__WEBPACK_IMPORTED_MODULE_3__["default"].state.elements[_store__WEBPACK_IMPORTED_MODULE_3__["default"].state.activeIndex];
    },

    activeIndex() {
      return _store__WEBPACK_IMPORTED_MODULE_3__["default"].state.activeIndex;
    },

    opacity() {
      return this.activeIndex ? this.activeElement.opacity : _store__WEBPACK_IMPORTED_MODULE_3__["default"].state.fontStyle.opacity;
    },

    fillStyle() {
      return this.activeIndex ? this.activeElement.fillStyle : _store__WEBPACK_IMPORTED_MODULE_3__["default"].state.fontStyle.fillStyle;
    },

    strokeStyle() {
      return this.activeIndex ? this.activeElement.strokeStyle : _store__WEBPACK_IMPORTED_MODULE_3__["default"].state.fontStyle.strokeStyle;
    }

  },
  methods: {
    textChange(e) {
      var _context;

      var text = e.detail.value || '请输入文字';

      var elements = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1___default()(_context = _store__WEBPACK_IMPORTED_MODULE_3__["default"].state.elements).call(_context);

      elements[_store__WEBPACK_IMPORTED_MODULE_3__["default"].state.activeIndex].data = text;
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].commit('setElements', elements);
    },

    addText() {
      var _context2;

      var background = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = _store__WEBPACK_IMPORTED_MODULE_3__["default"].state.elements).call(_context2, function (e) {
        return e.type === 'background';
      });

      if (!background) {
        wx.showToast({
          title: '请先选择背景图',
          icon: 'none'
        });
        return;
      }

      _store__WEBPACK_IMPORTED_MODULE_3__["default"].commit('addText');
    },

    opacityChange(e) {
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].commit('setFontStyle', {
        key: 'opacity',
        data: e.detail.value
      });

      if (this.activeIndex) {
        var _context3;

        var elements = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1___default()(_context3 = _store__WEBPACK_IMPORTED_MODULE_3__["default"].state.elements).call(_context3);

        elements[this.activeIndex].opacity = e.detail.value;
        _store__WEBPACK_IMPORTED_MODULE_3__["default"].commit('setElements', elements);
      }
    },

    fillStyleChange(e) {
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].commit('setFontStyle', {
        key: 'fillStyle',
        data: e
      });

      if (this.activeIndex) {
        var _context4;

        var elements = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1___default()(_context4 = _store__WEBPACK_IMPORTED_MODULE_3__["default"].state.elements).call(_context4);

        elements[this.activeIndex].fillStyle = e;
        _store__WEBPACK_IMPORTED_MODULE_3__["default"].commit('setElements', elements);
      }
    },

    strokeStyleChange(e) {
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].commit('setFontStyle', {
        key: 'strokeStyle',
        data: e
      });

      if (this.activeIndex) {
        var _context5;

        var elements = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1___default()(_context5 = _store__WEBPACK_IMPORTED_MODULE_3__["default"].state.elements).call(_context5);

        elements[this.activeIndex].strokeStyle = e;
        _store__WEBPACK_IMPORTED_MODULE_3__["default"].commit('setElements', elements);
      }
    }

  },

  ready() {// this.initCanvas()
  }

});

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

// removed by extractor

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

// removed by extractor

/***/ })

},[[475,1]]]);
//# sourceMappingURL=menu-text.js.map