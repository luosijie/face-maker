
var window = window || {};

window["webpackJsonp"] = require("../../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* mpx inject */ global.currentModuleId = "m74ff58bc"
global.currentResource = "/Users/luo/Projects/self/face-maker/src/miniprogram/components/menu-sticker.mpx"
global.currentCtor = Component
global.currentCtorType = "component"
global.currentSrcMode = "wx"
/* mpx inject */ global.currentInject = {
  moduleId: "m74ff58bc",
  render: function () {
    this._c("mpxShow", this.mpxShow) || this._c("mpxShow", this.mpxShow) === undefined ? '' : 'display:none;';
    this._i(this._c("stickers", this.stickers), function (item, index) {
      ({ tap: [["chooseSticker", item]] });
      item;
    });
    this._r();
  }
};
/* harmony import */ var _babel_loader_node_modules_mpxjs_webpack_plugin_lib_selector_type_script_index_0_menu_sticker_mpx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(486);
/* empty/unused harmony star reexport */global.currentModuleId
/* script */


/* styles */
__webpack_require__(488)

/* json */
__webpack_require__(489)

/* template */
__webpack_require__(490)


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(477);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(445);
/* harmony import */ var _config_stickers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(487);




Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_1__["createComponent"])({
  data: {},
  computed: {
    canvas() {
      return _store__WEBPACK_IMPORTED_MODULE_2__["default"].state.canvas;
    },

    stickers() {
      return _config_stickers__WEBPACK_IMPORTED_MODULE_3__["default"];
    }

  },
  watch: {},
  methods: {
    chooseSticker(e) {
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

      var image = this.canvas.createImage();
      image.src = e;

      image.onload = function (res) {
        var data = {
          type: 'sticker',
          data: image,
          left: 10,
          top: 10,
          width: 100,
          height: 100,
          scale: 1,
          rotate: 0
        };
        _store__WEBPACK_IMPORTED_MODULE_2__["default"].commit('addSticker', data);
      };
    }

  }
});

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (['/stickers/01.png', '/stickers/02.png', '/stickers/03.png', '/stickers/04.png', '/stickers/05.png', '/stickers/06.png', '/stickers/07.png', '/stickers/08.png', '/stickers/09.png', '/stickers/10.png', '/stickers/11.png', '/stickers/12.png', '/stickers/13.png', '/stickers/14.png', '/stickers/15.png', '/stickers/16.png', '/stickers/17.png', '/stickers/18.png']);

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 490:
/***/ (function(module, exports) {

// removed by extractor

/***/ })

},[[485,1]]]);
//# sourceMappingURL=menu-sticker.js.map