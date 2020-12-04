
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
__webpack_require__(447)

/* json */
__webpack_require__(448)

/* template */
__webpack_require__(449)


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(436);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(441);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(446);






var imageUrl = 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'; // import example from '../assets/images/example.jpeg'

var ACTION_TYEP = {
  MOVE: 'MOVE',
  // 移动
  SCALE: 'SCALE',
  // 缩放
  ROTATE: 'ROTATE',
  // 旋转
  NULL: 'NULL' // 空闲

};
Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_4__["createComponent"])({
  data: {
    startTouches: [],
    startSelected: {
      x: 0,
      y: 0
    },
    actionType: '' // move, scale, rotate

  },
  computed: {
    ctx() {
      return _store__WEBPACK_IMPORTED_MODULE_5__["default"].state.ctx;
    },

    elements() {
      return _store__WEBPACK_IMPORTED_MODULE_5__["default"].state.elements;
    },

    dpr() {
      return wx.getSystemInfoSync().pixelRatio;
    }

  },
  watch: {
    elements() {
      var _context,
          _this = this;

      // console.log('canvas elements change')
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = this.elements).call(_context, function (ele) {
        if (ele.type === 'rect') {
          _this.ctx.fillRect(ele.sx, ele.sy, ele.ex, ele.ey);
        }

        if (ele.type === 'image') {
          _this.ctx.save();

          var left = ele.left - _this.ctx.canvas.width / _this.dpr / 2;
          var top = ele.top - _this.ctx.canvas.height / _this.dpr / 2;

          _this.ctx.translate(_this.ctx.canvas.width / _this.dpr / 2, _this.ctx.canvas.height / _this.dpr / 2); // this.ctx.rotate(1)


          _this.ctx.drawImage(ele.data, left, top, ele.width, ele.height);

          _this.ctx.restore();
        }
      });

      this.drawGrid(); // console.log('touch-move', this.ctx.canvas.width / 2, this.ctx.canvas.height / 2)
      // this.ctx.rotate(1)
      // this.ctx.scale(1.1, 1.1)
      // this.ctx.rotate(Math.PI / 2)
    }

  },
  methods: {
    chooseImage() {// wx.chooseImage({
      //   success (res) {
      //     console.log('res', res)
      //   }
      // })
    },

    touchstart(e) {
      var _context2;

      if (e.touches.length === 1) this.actionType = ACTION_TYEP.MOVE;
      if (e.touches.length === 2) this.actionType = ACTION_TYEP.SCALE;
      console.log('touch-start', e);
      this.startTouches = e.touches;

      var image = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = _store__WEBPACK_IMPORTED_MODULE_5__["default"].state.elements).call(_context2, function (e) {
        return e.type === 'image';
      });

      if (image) {
        this.startSelected.x = image.left;
        this.startSelected.y = image.top;
      }
    },

    touchmove(e) {
      if (this.actionType !== ACTION_TYEP.MOVE || e.touches.length > 1) {
        return;
      }

      var x = e.touches[0].x;
      var y = e.touches[0].y;
      var dx = this.startTouches[0].x - x;
      var dy = this.startTouches[0].y - y;
      var elements = _store__WEBPACK_IMPORTED_MODULE_5__["default"].state.elements;

      var index = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1___default()(elements).call(elements, function (e) {
        return e.type === 'image';
      });

      var image = _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(elements).call(elements, index, 1)[0];

      image.left = this.startSelected.x - dx;
      image.top = this.startSelected.y - dy;
      elements.push(image);
    },

    touchend(e) {
      this.moving = false;
      console.log('touch-end', e);
    },

    initCanvas() {
      var _this2 = this;

      var query = this.createSelectorQuery();
      query.select('#canvas').fields({
        node: true,
        size: true
      }).exec(function (res) {
        var canvas = res[0].node;
        var ctx = canvas.getContext('2d');
        _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit('setCtx', ctx);
        canvas.width = res[0].width * _this2.dpr;
        canvas.height = res[0].height * _this2.dpr;
        ctx.scale(_this2.dpr, _this2.dpr); // 初始化一张背景图

        wx.getImageInfo({
          src: imageUrl,
          success: function success(res) {
            console.log('get-image-url', res);
            var imageData = canvas.createImage();
            imageData.src = imageUrl;

            imageData.onload = function (e) {
              console.log('imageData-loaded', e); // ctx.drawImage(res.path, 0, 0, 100, 100)

              var cWidth = canvas.width / _this2.dpr;
              var cHeight = canvas.height / _this2.dpr;
              var data = {
                type: 'image',
                data: imageData,
                left: 0,
                top: 0,
                width: 0,
                height: 0
              };

              if (res.height > res.width) {
                var rate = res.height / cHeight;
                data.width = res.width / rate;
                data.height = cHeight;
                data.left = (cWidth - data.width) / 2;
                data.top = 0;
              } else {
                var _rate = res.width / cWidth;

                data.height = res.height / _rate;
                data.width = cWidth;
                data.left = 0;
                data.top = (cHeight - data.height) / 2;
              }

              var elements = _store__WEBPACK_IMPORTED_MODULE_5__["default"].state.elements;
              elements.push(data);
              _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit('setElements', elements);
            };
          }
        });
      });
    },

    drawGrid() {
      var lineNums = 3;
      var cWidth = this.ctx.canvas.width / this.dpr; // const cHeight = this.ctx.canvas.height

      var lineGap = cWidth / lineNums;
      this.ctx.strokeStyle = '#ccc';
      this.ctx.setLineDash([5, 5]); // 绘制x轴

      for (var i = 0; i <= lineNums; i++) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, lineGap * i);
        this.ctx.lineTo(cWidth, lineGap * i);
        this.ctx.stroke();
      } // 绘制y轴


      for (var _i = 0; _i <= lineNums; _i++) {
        this.ctx.beginPath();
        this.ctx.moveTo(lineGap * _i, 0);
        this.ctx.lineTo(lineGap * _i, cWidth);
        this.ctx.stroke();
      }
    }

  },

  ready() {
    this.initCanvas();
  }

});

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(437);

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(438);

module.exports = parent;


/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

var findIndex = __webpack_require__(439);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.findIndex;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.findIndex) ? findIndex : own;
};


/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(440);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('Array').findIndex;


/***/ }),

/***/ 440:
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

var find = __webpack_require__(444);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.find;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.find) ? find : own;
};


/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(445);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('Array').find;


/***/ }),

/***/ 445:
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

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

var store = Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_0__["createStore"])({
  state: {
    ctx: null,
    elements: [],
    mode: ''
  },
  mutations: {
    setCtx(state, data) {
      state.ctx = data;
    },

    setElements(state, data) {
      state.elements = data;
    },

    setMode(state, data) {
      state.mode = data;
    }

  }
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 447:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 448:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 449:
/***/ (function(module, exports) {

// removed by extractor

/***/ })

},[[434,1]]]);
//# sourceMappingURL=playboard.js.map