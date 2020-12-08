
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(273);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(450);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(452);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(254);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(436);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(125);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(441);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(446);









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
Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_7__["createComponent"])({
  data: {
    startTouches: [],
    startSelected: {
      x: 0,
      y: 0
    },
    actionType: '',
    // move, scale, rotate
    icon: {
      move: null,
      scale: null,
      delete: null,
      rotate: null
    }
  },
  computed: {
    mode() {
      return _store__WEBPACK_IMPORTED_MODULE_8__["default"].state.mode;
    },

    canvas() {
      return _store__WEBPACK_IMPORTED_MODULE_8__["default"].state.canvas;
    },

    ctx() {
      return _store__WEBPACK_IMPORTED_MODULE_8__["default"].state.ctx;
    },

    elements() {
      return _store__WEBPACK_IMPORTED_MODULE_8__["default"].state.elements;
    },

    activeIndex() {
      return _store__WEBPACK_IMPORTED_MODULE_8__["default"].state.activeIndex;
    },

    dpr() {
      return wx.getSystemInfoSync().pixelRatio;
    }

  },
  watch: {
    elements() {
      var _this = this;

      console.log('canvas elements change');
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

      var _loop = function _loop(i) {
        var ele = _this.elements[i];

        if (ele.type === 'image') {
          _this.ctx.save();

          var left = ele.left - _this.ctx.canvas.width / _this.dpr / 2;
          var top = ele.top - _this.ctx.canvas.height / _this.dpr / 2;

          _this.ctx.translate(_this.ctx.canvas.width / _this.dpr / 2, _this.ctx.canvas.height / _this.dpr / 2);

          _this.ctx.scale(ele.scale, ele.scale);

          _this.ctx.drawImage(ele.data, left, top, ele.width, ele.height);

          _this.ctx.restore();
        }

        if (ele.type === 'text') {
          _this.initController('text', function (offsetLeft, offsetTop) {
            _this.ctx.font = "".concat(ele.size, "px sans-serif");
            _this.ctx.textBaseline = 'top';

            _this.ctx.fillText(ele.data, ele.left - offsetLeft, ele.top - offsetTop);
          });
        }
      };

      for (var i = 0; i < this.elements.length; i++) {
        _loop(i);
      }

      this.drawGrid();
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
      var _context,
          _this2 = this;

      if (e.touches.length === 1) this.actionType = ACTION_TYEP.MOVE;
      if (e.touches.length === 2) this.actionType = ACTION_TYEP.SCALE;
      console.log('touch-start', e);
      this.startTouches = e.touches;

      var selected = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6___default()(_context = _store__WEBPACK_IMPORTED_MODULE_8__["default"].state.elements).call(_context, function (e) {
        return e.type === _this2.mode;
      });

      if (selected) {
        this.startSelected.x = selected.left;
        this.startSelected.y = selected.top;
        this.startSelected.scale = selected.scale;
      }
    },

    touchmove(e) {
      console.log('this.actionType', this.actionType, e.touches);

      if (this.actionType === ACTION_TYEP.MOVE) {
        var _context2;

        if (e.touches.length > 1) return;
        var x = e.touches[0].x;
        var y = e.touches[0].y;
        var dx = this.startTouches[0].x - x;
        var dy = this.startTouches[0].y - y;

        var elements = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5___default()(_context2 = _store__WEBPACK_IMPORTED_MODULE_8__["default"].state.elements).call(_context2);

        if (this.mode === 'image') {
          var index = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_4___default()(elements).call(elements, function (e) {
            return e.type === 'image';
          }); // const image = elements.splice(index, 1)[0]


          elements[index].left = this.startSelected.x - dx;
          elements[index].top = this.startSelected.y - dy;
          _store__WEBPACK_IMPORTED_MODULE_8__["default"].commit('setElements', elements);
        }

        if (this.mode === 'text') {
          var _index = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_4___default()(elements).call(elements, function (e) {
            return e.type === 'text';
          }); // const image = elements.splice(index, 1)[0]


          elements[_index].left = this.startSelected.x - dx;
          elements[_index].top = this.startSelected.y - dy;
          _store__WEBPACK_IMPORTED_MODULE_8__["default"].commit('setElements', elements);
        }
      }

      if (this.actionType === ACTION_TYEP.SCALE) {
        if (e.touches.length !== 2) return;
        var startLength = Math.sqrt(Math.pow(this.startTouches[0].x - this.startTouches[1].x, 2) + Math.pow(this.startTouches[0].y - this.startTouches[1].y, 2));
        var endLength = Math.sqrt(Math.pow(e.touches[0].x - e.touches[1].x, 2) + Math.pow(e.touches[0].y - e.touches[1].y, 2));
        var scale = endLength / startLength;
        var _elements = _store__WEBPACK_IMPORTED_MODULE_8__["default"].state.elements;

        var _index2 = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_4___default()(_elements).call(_elements, function (e) {
          return e.type === 'image';
        });

        var image = _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3___default()(_elements).call(_elements, _index2, 1)[0];

        image.scale = this.startSelected.scale * scale;

        _elements.push(image);
      }
    },

    touchend(e) {
      this.actionType = ACTION_TYEP.NULL;
      console.log('touch-end', e);
    },

    initCanvas() {
      var _this3 = this;

      var query = this.createSelectorQuery();
      var elements = _store__WEBPACK_IMPORTED_MODULE_8__["default"].state.elements;
      query.select('#canvas').fields({
        node: true,
        size: true
      }).exec( /*#__PURE__*/function () {
        var _ref = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(res) {
          var canvas, ctx;
          return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  canvas = res[0].node;
                  ctx = canvas.getContext('2d');
                  _store__WEBPACK_IMPORTED_MODULE_8__["default"].commit('setCanvas', canvas);
                  _store__WEBPACK_IMPORTED_MODULE_8__["default"].commit('setCtx', ctx);
                  _context3.next = 6;
                  return _this3.loadImage('/images/icon-move.png').then(function (res) {
                    console.log('this', _this3);
                    _this3.icon.move = res;
                  });

                case 6:
                  _context3.next = 8;
                  return _this3.loadImage('/images/icon-scale.png').then(function (res) {
                    _this3.icon.scale = res;
                  });

                case 8:
                  _context3.next = 10;
                  return _this3.loadImage('/images/icon-delete.png').then(function (res) {
                    _this3.icon.delete = res;
                  });

                case 10:
                  _context3.next = 12;
                  return _this3.loadImage('/images/icon-rotate.png').then(function (res) {
                    _this3.icon.rotate = res;
                  });

                case 12:
                  canvas.width = res[0].width * _this3.dpr;
                  canvas.height = res[0].height * _this3.dpr;
                  ctx.scale(_this3.dpr, _this3.dpr); // 初始化一张背景图

                  wx.getImageInfo({
                    src: imageUrl,
                    success: function success(res) {
                      console.log('get-image-url', res);
                      var imageData = canvas.createImage();
                      imageData.src = imageUrl;

                      imageData.onload = function (e) {
                        console.log('imageData-loaded', e); // ctx.drawImage(res.path, 0, 0, 100, 100)

                        var cWidth = canvas.width / _this3.dpr;
                        var cHeight = canvas.height / _this3.dpr;
                        var data = {
                          type: 'image',
                          data: imageData,
                          left: 0,
                          top: 0,
                          width: 0,
                          height: 0,
                          scale: 1,
                          rotate: 0
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

                        elements.push(data); // store.commit('setElements', elements)// 初始化一段文字

                        var text = {
                          type: 'text',
                          data: '请输入文字',
                          size: 50,
                          left: 100,
                          top: 100
                        };
                        elements.push(text);
                      };
                    }
                  });

                case 16:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    },

    loadImage(src) {
      var image = this.canvas.createImage();
      image.src = src;
      return new _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
        try {
          image.onload = function (e) {
            resolve(image); // this.ctx.drawImage(imageMove, left - 10, top - 10, 20, 20)
          };
        } catch (err) {
          reject(err);
        }
      });
    },

    initController(type, fn) {
      if (!this.activeIndex) return;
      var activeElement = this.elements[this.activeIndex];
      this.ctx.save(); // this.ctx.setTextBaseline('top')
      // this.ctx.setTextBaseline('top')

      this.ctx.strokeStyle = '#eee';
      var left, top, width, height;

      if (type === 'text') {
        left = activeElement.left - 5;
        top = activeElement.top - 5;
        width = activeElement.size * activeElement.data.length + 10;
        height = activeElement.size + 10;
      }

      var offsetLeft = left + width / 2;
      var offsetTop = top + height / 2;
      this.ctx.translate(offsetLeft, offsetTop);
      this.ctx.rotate(12);
      this.ctx.setLineDash([10, 5], 5);
      this.ctx.strokeRect(left - offsetLeft, top - offsetTop, width, height); // 绘制控制点-移动

      this.ctx.drawImage(this.icon.move, left - 10 - offsetLeft, top - 10 - offsetTop, 20, 20); // await this.loadImage('/images/icon-move.png').then(res => {
      // })
      // 绘制控制点-缩放

      this.ctx.drawImage(this.icon.scale, left - 10 - offsetLeft, top + height - 10 - offsetTop, 20, 20); // 绘制控制点-删除

      this.ctx.drawImage(this.icon.delete, left + width - 10 - offsetLeft, top - 10 - offsetTop, 20, 20); // 绘制控制点-旋转

      this.ctx.drawImage(this.icon.rotate, left + width - 10 - offsetLeft, top + height - 10 - offsetTop, 20, 20);
      fn(offsetLeft, offsetTop);
      this.ctx.restore();
    },

    drawGrid() {
      this.ctx.save();
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

      this.ctx.restore();
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
    cavas: null,
    ctx: null,
    elements: [],
    activeIndex: 1,
    // 当前编辑中的元素下标
    mode: 'text' // background, text, image

  },
  mutations: {
    setCanvas(state, data) {
      state.canvas = data;
    },

    setCtx(state, data) {
      state.ctx = data;
    },

    setElements(state, data) {
      state.elements = data;
    },

    setMode(state, data) {
      state.mode = data;
    },

    setActiveIndex(state, data) {
      state.activeIndex = data;
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

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(451);


/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  /* mpx replace */ (function () {})(runtime);
}


/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(453);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(454);

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(275);
__webpack_require__(455);
// TODO: Remove from `core-js@4`
__webpack_require__(456);
__webpack_require__(457);
__webpack_require__(458);

module.exports = parent;


/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__(276);


/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__(291);


/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(37);
var newPromiseCapabilityModule = __webpack_require__(288);
var perform = __webpack_require__(290);

// `Promise.try` method
// https://github.com/tc39/proposal-promise-try
$({ target: 'Promise', stat: true }, {
  'try': function (callbackfn) {
    var promiseCapability = newPromiseCapabilityModule.f(this);
    var result = perform(callbackfn);
    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
    return promiseCapability.promise;
  }
});


/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__(292);


/***/ })

},[[434,1]]]);
//# sourceMappingURL=playboard.js.map