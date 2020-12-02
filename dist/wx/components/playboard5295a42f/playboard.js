
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(441);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(439);
/* harmony import */ var _assets_images_example_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(440);
/* harmony import */ var _assets_images_example_jpeg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_example_jpeg__WEBPACK_IMPORTED_MODULE_5__);






Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_3__["createComponent"])({
  data: {
    startPos: {
      x: 0,
      y: 0
    }
  },
  computed: {
    ctx() {
      return _store__WEBPACK_IMPORTED_MODULE_4__["default"].state.ctx;
    },

    elements() {
      return _store__WEBPACK_IMPORTED_MODULE_4__["default"].state.elements;
    }

  },
  watch: {
    elements() {
      var _context,
          _this = this;

      // console.log('canvas change', this.elements)
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(_context = this.elements).call(_context, function (ele) {
        if (ele.type === 'rect') {
          console.log(ele.sx, ele.sy);

          _this.ctx.fillRect(ele.sx, ele.sy, ele.ex, ele.ey);
        }

        if (ele.type === 'image') {
          _this.ctx.drawImage(ele.data, ele.left, 0, ele.width, ele.height);

          _this.ctx.save();
        }
      });
    }

  },
  methods: {
    touchstart(e) {
      this.startPos.x = e.touches[0].x;
      this.startPos.y = e.touches[0].y;
      console.log('touch-start', e, this.startPos);
    },

    touchmove(e) {
      // this.ctx.restore()
      // this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
      var x = e.touches[0].x;
      var y = e.touches[0].y;
      var data = {
        type: 'rect',
        sx: this.startPos.x,
        sy: this.startPos.y,
        ex: x - this.startPos.x,
        ey: y - this.startPos.y
      };
      var elements = _store__WEBPACK_IMPORTED_MODULE_4__["default"].state.elements;

      var index = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1___default()(elements).call(elements, function (e) {
        return e.type === 'rect';
      });

      if (index > -1) {
        _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(elements).call(elements, index, 1);
      }

      elements.push(data);
    },

    touchend(e) {
      console.log('touch-end', e);
    },

    initCanvas() {
      var query = this.createSelectorQuery();
      query.select('#canvas').fields({
        node: true,
        size: true
      }).exec(function (res) {
        var canvas = res[0].node;
        var ctx = canvas.getContext('2d');
        _store__WEBPACK_IMPORTED_MODULE_4__["default"].commit('setCtx', ctx);
        var dpr = wx.getSystemInfoSync().pixelRatio;
        canvas.width = res[0].width * dpr;
        canvas.height = res[0].height * dpr;
        ctx.scale(dpr, dpr); // 初始化一张背景图

        var img = canvas.createImage();
        img.src = _assets_images_example_jpeg__WEBPACK_IMPORTED_MODULE_5___default.a;

        img.onload = function (e) {
          // console.log('img loaded', e.path[0].width. e.pa)
          var cWidth = canvas.width / dpr;
          var cHeight = canvas.height / dpr;
          var rate = e.path[0].height / cHeight;
          var width = e.path[0].width / rate;
          var left = (cWidth - width) / 2;
          var elements = _store__WEBPACK_IMPORTED_MODULE_4__["default"].state.elements;
          var data = {
            type: 'image',
            data: img,
            left: left,
            top: 0,
            width: width,
            height: cHeight
          };
          elements.push(data);
          _store__WEBPACK_IMPORTED_MODULE_4__["default"].commit('setElements', elements);
        };
      });
    }

  },

  ready() {
    this.initCanvas();
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
    ctx: null,
    elements: []
  },
  mutations: {
    setCtx(state, data) {
      state.ctx = data;
    },

    setElements(state, data) {
      state.eles = data;
    }

  }
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/example73295048bd4260075333211267a0584d.jpeg";

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(442);

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(443);

module.exports = parent;


/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

var findIndex = __webpack_require__(444);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.findIndex;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.findIndex) ? findIndex : own;
};


/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(445);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('Array').findIndex;


/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var $findIndex = __webpack_require__(98).findIndex;
var addToUnscopables = __webpack_require__(13);
var arrayMethodUsesToLength = __webpack_require__(130);

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ })

},[[434,1]]]);
//# sourceMappingURL=playboard.js.map