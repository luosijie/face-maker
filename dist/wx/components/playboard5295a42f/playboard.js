
var window = window || {};

window["webpackJsonp"] = require("../../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* mpx inject */ global.currentModuleId = "maaae044e"
global.currentResource = "/Users/luo/Projects/self/face-maker/src/components/playboard.mpx"
global.currentCtor = Component
global.currentCtorType = "component"
global.currentSrcMode = "wx"
/* mpx inject */ global.currentInject = {
  moduleId: "maaae044e",
  render: function () {
    this._c("mpxShow", this.mpxShow) || this._c("mpxShow", this.mpxShow) === undefined ? '' : 'display:none;';
    this._r();
  }
};
/* harmony import */ var _babel_loader_node_modules_mpxjs_webpack_plugin_lib_selector_type_script_index_0_playboard_mpx_packageName_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(439);
/* empty/unused harmony star reexport */global.currentModuleId
/* script */


/* styles */
__webpack_require__(440)

/* json */
__webpack_require__(441)

/* template */
__webpack_require__(442)


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_0__["createComponent"])({
  data: {
    listData: ['手机', '的d sds', '电脑']
  },

  ready() {
    console.log('playboard is read');
    var query = wx.createSelectorQuery();
    query.select('#myCanvas').fields({
      node: true,
      size: true
    }).exec(function (res) {
      var canvas = res[0].node;
      var ctx = canvas.getContext('2d');
      var dpr = wx.getSystemInfoSync().pixelRatio;
      canvas.width = res[0].width * dpr;
      canvas.height = res[0].height * dpr;
      ctx.scale(dpr, dpr);
      ctx.fillRect(0, 0, 100, 100);
    });
  }

});

/***/ }),

/***/ 440:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 442:
/***/ (function(module, exports) {

// removed by extractor

/***/ })

},[[438,1]]]);
//# sourceMappingURL=playboard.js.map