
var window = window || {};

window["webpackJsonp"] = require("../../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 467:
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
/* harmony import */ var _babel_loader_node_modules_mpxjs_webpack_plugin_lib_selector_type_script_index_0_menu_text_mpx_packageName_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(468);
/* empty/unused harmony star reexport */global.currentModuleId
/* script */


/* styles */
__webpack_require__(474)

/* json */
__webpack_require__(475)

/* template */
__webpack_require__(476)


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(431)))

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(469);
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

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

// removed by extractor

/***/ }),

/***/ 475:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

// removed by extractor

/***/ })

},[[467,1]]]);
//# sourceMappingURL=menu-text.js.map