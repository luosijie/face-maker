
var window = window || {};

window["webpackJsonp"] = require("../../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* mpx inject */ global.currentModuleId = "m911db922"
global.currentResource = "/Users/luo/Projects/self/face-maker/src/components/menu-background.mpx"
global.currentCtor = Component
global.currentCtorType = "component"
global.currentSrcMode = "wx"
/* mpx inject */ global.currentInject = {
  moduleId: "m911db922",
  render: function () {
    this._c("mpxShow", this.mpxShow) || this._c("mpxShow", this.mpxShow) === undefined ? '' : 'display:none;';
    this._r();
  }
};
/* harmony import */ var _babel_loader_node_modules_mpxjs_webpack_plugin_lib_selector_type_script_index_0_menu_background_mpx_packageName_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(454);
/* empty/unused harmony star reexport */global.currentModuleId
/* script */


/* styles */
__webpack_require__(460)

/* json */
__webpack_require__(461)

/* template */
__webpack_require__(462)


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(455);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(433);




Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_2__["createComponent"])({
  data: {},
  computed: {
    canvas() {
      return _store__WEBPACK_IMPORTED_MODULE_3__["default"].state.canvas;
    },

    ctx() {
      return _store__WEBPACK_IMPORTED_MODULE_3__["default"].state.ctx;
    },

    elements() {
      return _store__WEBPACK_IMPORTED_MODULE_3__["default"].state.elements;
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
        success: function success(res) {
          if (res.errMsg === 'chooseImage:ok') {
            var path = res.tempFilePaths[0];
            console.log('image from chooseImage', path);

            var image = _this.canvas.createImage();

            image.src = path;

            image.onload = function (e) {
              var _context;

              console.log('imageData-loaded', e); // ctx.drawImage(res.path, 0, 0, 100, 100)

              var cWidth = _this.canvas.width / _this.dpr;
              var cHeight = _this.canvas.height / _this.dpr;
              var data = {
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
                var rate = image.height / cHeight;
                data.width = image.width / rate;
                data.height = cHeight;
                data.left = (cWidth - data.width) / 2;
                data.top = 0;
              } else {
                // 图片宽大于高
                var _rate = image.width / cWidth;

                data.height = image.height / _rate;
                data.width = cWidth;
                data.left = 0;
                data.top = (cHeight - data.height) / 2;
              }

              var index = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1___default()(_context = _this.elements).call(_context, function (e) {
                return e.type === 'background';
              });

              if (index > -1) {
                var _context2;

                _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = _this.elements).call(_context2, index, 1, data);
              } else {
                _this.elements.unshift(data);
              }
            };
          }
        }
      });
    }

  },

  ready() {// this.initCanvas()
  }

});

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(456);

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(457);

module.exports = parent;


/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

var findIndex = __webpack_require__(458);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.findIndex;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.findIndex) ? findIndex : own;
};


/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(459);
var entryVirtual = __webpack_require__(131);

module.exports = entryVirtual('Array').findIndex;


/***/ }),

/***/ 459:
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

/***/ 460:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

// removed by extractor

/***/ })

},[[453,1]]]);
//# sourceMappingURL=menu-background.js.map