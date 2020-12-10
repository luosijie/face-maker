
var window = window || {};

window["webpackJsonp"] = require("../../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* mpx inject */ global.currentModuleId = "m2afd8e00"
global.currentResource = "/Users/luo/Projects/self/face-maker/src/components/menu-sticker.mpx"
global.currentCtor = Component
global.currentCtorType = "component"
global.currentSrcMode = "wx"
/* mpx inject */ global.currentInject = {
  moduleId: "m2afd8e00",
  render: function () {
    this._c("mpxShow", this.mpxShow) || this._c("mpxShow", this.mpxShow) === undefined ? '' : 'display:none;';
    this._i(this._c("stickers", this.stickers), function (item, index) {
      ({ tap: [["chooseSticker", item]] });
      item;
    });
    this._r();
  }
};
/* harmony import */ var _babel_loader_node_modules_mpxjs_webpack_plugin_lib_selector_type_script_index_0_menu_sticker_mpx_packageName_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(462);
/* empty/unused harmony star reexport */global.currentModuleId
/* script */


/* styles */
__webpack_require__(464)

/* json */
__webpack_require__(465)

/* template */
__webpack_require__(466)


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(433);
/* harmony import */ var _config_stickers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(463);



console.log('sticker', _config_stickers__WEBPACK_IMPORTED_MODULE_2__["default"]);
Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_0__["createComponent"])({
  data: {},
  computed: {
    canvas() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.canvas;
    },

    stickers() {
      return _config_stickers__WEBPACK_IMPORTED_MODULE_2__["default"];
    }

  },
  watch: {},
  methods: {
    chooseSticker(e) {
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
        _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('addSticker', data);
      };
    }

  }
});

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (['/stickers/01.png', '/stickers/02.png', '/stickers/03.png', '/stickers/04.png', '/stickers/05.png', '/stickers/06.png', '/stickers/07.png', '/stickers/08.png', '/stickers/09.png', '/stickers/10.png', '/stickers/11.png', '/stickers/12.png', '/stickers/13.png', '/stickers/14.png', '/stickers/15.png', '/stickers/16.png', '/stickers/17.png', '/stickers/18.png']);

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

// removed by extractor

/***/ }),

/***/ 465:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

// removed by extractor

/***/ })

},[[461,1]]]);
//# sourceMappingURL=menu-sticker.js.map