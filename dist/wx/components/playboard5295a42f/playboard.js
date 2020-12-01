
var window = window || {};

window["webpackJsonp"] = require("../../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 434:
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
/* harmony import */ var _babel_loader_node_modules_mpxjs_webpack_plugin_lib_selector_type_script_index_0_playboard_mpx_packageName_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(435);
/* empty/unused harmony star reexport */global.currentModuleId
/* script */


/* styles */
__webpack_require__(436)

/* json */
__webpack_require__(437)

/* template */
__webpack_require__(438)


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(439);


Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_0__["createComponent"])({
  data: {
    startPos: {
      x: 0,
      y: 0
    }
  },
  computed: {
    ctx() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.ctx;
    }

  },
  methods: {
    touchstart(e) {
      this.startPos.x = e.touches[0].x;
      this.startPos.y = e.touches[0].y;
      console.log('touch-start', e, this.startPos);
    },

    touchmove(e) {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      var x = e.touches[0].x;
      var y = e.touches[0].y;
      console.log('touch-move', this.startPos.x, this.startPos.y);
      this.ctx.fillRect(this.startPos.x, this.startPos.y, x - this.startPos.x, y - this.startPos.y);
    },

    touchend(e) {
      console.log('touch-end', e);
    }

  },

  ready() {
    console.log('store', _store__WEBPACK_IMPORTED_MODULE_1__["default"]);
    console.log('playboard is ready');
    var query = this.createSelectorQuery();
    query.select('#canvas').fields({
      node: true,
      size: true
    }).exec(function (res) {
      console.log('res', res);
      var canvas = res[0].node;
      var ctx = canvas.getContext('2d');
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('setCtx', ctx);
      var dpr = wx.getSystemInfoSync().pixelRatio;
      canvas.width = res[0].width * dpr;
      canvas.height = res[0].height * dpr;
      ctx.scale(dpr, dpr); // this.ctx.fillRect(10, 10, width - 20, height - 20)
    });
  }

});

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 438:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

var store = Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_0__["createStore"])({
  state: {
    ctx: null
  },
  mutations: {
    setCtx(state, data) {
      state.ctx = data;
    }

  }
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ })

},[[434,1]]]);
//# sourceMappingURL=playboard.js.map