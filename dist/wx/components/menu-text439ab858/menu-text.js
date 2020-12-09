
var window = window || {};

window["webpackJsonp"] = require("../../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(433);


Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_0__["createComponent"])({
  data: {
    colors: ['#000000', '#ffffff', '#0076B6', '#00A948', '#FFB500', '#FF2929']
  },
  computed: {
    opacity() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.fontStyle.opacity;
    },

    color() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.fontStyle.color;
    },

    borderColor() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.fontStyle.borderColor;
    }

  },
  watch: {
    opacity(val) {
      console.log('opacity-change', val);
    }

  },
  methods: {
    opacityChange(e) {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('setFontStyle', {
        key: 'opacity',
        data: e.detail.value
      });
    },

    colorChange(e) {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('setFontStyle', {
        key: 'color',
        data: e
      });
    },

    borderColorChange(e) {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('setFontStyle', {
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