
var window = window || {};

window["webpackJsonp"] = require("../../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* mpx inject */ global.currentModuleId = "m6182d117"
global.currentResource = "/Users/luo/Projects/self/face-maker/src/miniprogram/components/menu-background.mpx"
global.currentCtor = Component
global.currentCtorType = "component"
global.currentSrcMode = "wx"
/* mpx inject */ global.currentInject = {
  moduleId: "m6182d117",
  render: function () {
    this._c("mpxShow", this.mpxShow) || this._c("mpxShow", this.mpxShow) === undefined ? '' : 'display:none;';
    "width: " + this._c("canvasCompress.width", this.canvasCompress.width) + "px; height: " + this._c("canvasCompress.height", this.canvasCompress.height) + "px";
    this._r();
  }
};
/* harmony import */ var _babel_loader_node_modules_mpxjs_webpack_plugin_lib_selector_type_script_index_0_menu_background_mpx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(465);
/* empty/unused harmony star reexport */global.currentModuleId
/* script */


/* styles */
__webpack_require__(472)

/* json */
__webpack_require__(473)

/* template */
__webpack_require__(474)


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(451);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(251);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(466);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(453);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(445);
/* harmony import */ var _utils_loadImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(460);
/* harmony import */ var _utils_compress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(471);
/* harmony import */ var _utils_checkImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(491);









Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_4__["createComponent"])({
  data: {
    canvasCompress: {
      width: 0,
      height: 0
    }
  },
  computed: {
    canvas() {
      return _store__WEBPACK_IMPORTED_MODULE_5__["default"].state.canvas;
    },

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
  methods: {
    chooseImage() {
      var _this = this;

      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function () {
          var _success = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
            var _context, path, image, filePath, imgValid, cWidth, cHeight, data, rate, _rate, index, _context2;

            return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(res.errMsg === 'chooseImage:ok')) {
                      _context3.next = 21;
                      break;
                    }

                    wx.showLoading({
                      title: '图片加载中'
                    });
                    path = res.tempFilePaths[0];
                    _context3.next = 5;
                    return Object(_utils_loadImage__WEBPACK_IMPORTED_MODULE_6__["default"])(path, _this.canvas);

                  case 5:
                    image = _context3.sent;
                    _context3.next = 8;
                    return _utils_compress__WEBPACK_IMPORTED_MODULE_7__["default"].call(_this, image, 'canvas_compress');

                  case 8:
                    filePath = _context3.sent;
                    _context3.next = 11;
                    return Object(_utils_checkImage__WEBPACK_IMPORTED_MODULE_8__["default"])(filePath);

                  case 11:
                    imgValid = _context3.sent;
                    wx.hideLoading();

                    if (imgValid) {
                      _context3.next = 15;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 15:
                    // 图片安全检测通过
                    // 执行下步操作
                    cWidth = _this.canvas.width / _this.dpr;
                    cHeight = _this.canvas.height / _this.dpr;
                    data = {
                      type: 'background',
                      data: image,
                      left: 0,
                      top: 0,
                      width: 0,
                      height: 0,
                      scale: 1,
                      rotate: 0
                    };

                    if (image.height > image.width) {
                      // 图片高大于宽
                      rate = image.height / cHeight;
                      data.width = image.width / rate;
                      data.height = cHeight;
                      data.left = (cWidth - data.width) / 2;
                      data.top = 0;
                    } else {
                      // 图片宽大于高
                      _rate = image.width / cWidth;
                      data.height = image.height / _rate;
                      data.width = cWidth;
                      data.left = 0;
                      data.top = (cHeight - data.height) / 2;
                    }

                    index = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_2___default()(_context = _this.elements).call(_context, function (e) {
                      return e.type === 'background';
                    });

                    if (index > -1) {
                      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = _this.elements).call(_context2, index, 1, data);
                    } else {
                      _this.elements.unshift(data);
                    }

                  case 21:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee);
          }));

          function success(_x) {
            return _success.apply(this, arguments);
          }

          return success;
        }()
      });
    }

  },

  ready() {// this.initCanvas()
  }

});

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(467);

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(468);

module.exports = parent;


/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

var findIndex = __webpack_require__(469);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.findIndex;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.findIndex) ? findIndex : own;
};


/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(470);
var entryVirtual = __webpack_require__(84);

module.exports = entryVirtual('Array').findIndex;


/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(8);
var $findIndex = __webpack_require__(79).findIndex;
var addToUnscopables = __webpack_require__(44);
var arrayMethodUsesToLength = __webpack_require__(83);

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

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(451);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(453);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(274);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (image, canvasId) {
  var _this2 = this;

  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    maxWidth: 750,
    maxHeight: 1334
  };

  var _this = this;

  return new _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
    var width = image.width;
    var height = image.height;

    if (width > config.maxWidth) {
      var ratio = width / config.maxWidth;
      width = config.maxWidth;
      height = height / ratio;
    }

    if (height > config.maxHeight) {
      var _ratio = height / config.maxHeight;

      height = config.maxHeight;
      width = width / _ratio;
    }

    var dpr = wx.getSystemInfoSync().pixelRatio;
    _this.canvasCompress.width = width;
    _this.canvasCompress.height = height;

    var query = _this2.createSelectorQuery();

    query.select("#".concat(canvasId)).fields({
      node: true,
      size: true
    }).exec( /*#__PURE__*/function () {
      var _ref = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
        var canvas, ctx;
        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                canvas = res[0].node;
                ctx = canvas.getContext('2d');
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr); // console.log('canvas-width-height', res[0].width, res[0].height)

                ctx.drawImage(image, 0, 0, width, height);
                wx.canvasToTempFilePath({
                  canvas,
                  x: 0,
                  y: 0,
                  destWidth: width,
                  destHeight: height,

                  complete(res) {
                    if (res.errMsg === 'canvasToTempFilePath:ok') {
                      resolve(res.tempFilePath); // wx.getFileSystemManager().readFile({
                      //   filePath: res.tempFilePath,
                      //   success (file) {
                      //     resolve(file)
                      //   },
                      //   fail (err) {
                      //     reject(err)
                      //   }
                      // })
                    }
                  },

                  fail(err) {
                    reject(err);
                  }

                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  });
});

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 473:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 474:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(274);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (filePath) {
  return new _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
    wx.cloud.uploadFile({
      cloudPath: "".concat(new Date().getTime(), ".png"),
      filePath,

      success(res) {
        wx.cloud.callFunction({
          name: 'checkImage',
          data: {
            fileID: res.fileID
          },

          success(res) {
            resolve(res.result);

            if (!res.result) {
              wx.showToast({
                title: '图片可能含有敏感信息, 请重新选择',
                icon: 'none'
              });
            }
          },

          fail(err) {
            reject(err);
          }

        });
      },

      fail(err) {
        reject(err);
      }

    });
  });
});

/***/ })

},[[464,1]]]);
//# sourceMappingURL=menu-background.js.map