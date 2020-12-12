
var window = window || {};

window["webpackJsonp"] = require("../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, __stringify__) {/* mpx inject */ global.currentModuleId = "m4343fc81"
global.currentResource = "/Users/luo/Projects/self/face-maker/src/pages/index.mpx"
global.currentCtor = Component
global.currentCtorType = "component"
global.currentSrcMode = "wx"
/* mpx inject */ global.currentInject = {
  moduleId: "m4343fc81",
  render: function () {
    this._c("mpxPageStatus", this.mpxPageStatus);
    if (this._c("activeIndex", this.activeIndex)) {}
    if (this._c("activeIndex", this.activeIndex)) {} else {}
    if (this._c("mode", this.mode) === 'text') {
      this._c("mpxPageStatus", this.mpxPageStatus);
    }
    if (this._c("mode", this.mode) === 'background') {
      this._c("mpxPageStatus", this.mpxPageStatus);
    }
    if (this._c("mode", this.mode) === 'sticker') {
      this._c("mpxPageStatus", this.mpxPageStatus);
    }
    this._i(this._c("menuData", this.menuData), function (item, index) {
      __stringify__.stringifyClass("menu-item", { active: item.code === this._c("mode", this.mode) });
      ({ tap: [["switchMenu", item.code]] });
      item.name;
    });
    this._r();
  }
};
/* harmony import */ var _babel_loader_node_modules_mpxjs_webpack_plugin_lib_selector_type_script_index_0_index_mpx_isFirst_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(432);
/* empty/unused harmony star reexport */global.currentModuleId
/* script */


/* styles */
__webpack_require__(434)

/* json */
__webpack_require__(435)

/* template */
__webpack_require__(436)


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(431)))

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(433);


Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_0__["createPage"])({
  data: {
    menuData: [{
      name: '背景',
      code: 'background'
    }, {
      name: '文字',
      code: 'text'
    }, {
      name: '贴图',
      code: 'sticker'
    }]
  },
  computed: {
    mode() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.mode;
    },

    activeIndex() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.activeIndex;
    }

  },
  methods: {
    delete() {
      wx.showModal({
        title: '提示',
        content: '确认删除元素吗',

        success(res) {
          if (res.confirm) {
            _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('deleteActiveELement');
          }
        }

      });
    },

    confirm() {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('setActiveIndex', null);
    },

    clear() {
      if (!_store__WEBPACK_IMPORTED_MODULE_1__["default"].state.elements.length) return;
      wx.showModal({
        title: '提示',
        content: '确定要清空画布吗',

        success(res) {
          if (res.confirm) {
            _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('clear');
          }
        }

      });
    },

    switchMenu(e) {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('setActiveIndex', null);
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('setMode', e);
    },

    export() {
      if (!_store__WEBPACK_IMPORTED_MODULE_1__["default"].state.elements.length) {
        wx.showToast({
          title: '加点东西再导出吧',
          icon: 'none'
        });
        return;
      }

      wx.showModal({
        title: '提示',
        content: '图片将保存到手机相册',

        success(res) {
          if (res.confirm) {
            console.log('export-canvas', _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.ctx);
            var canvas = _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.canvas;
            wx.canvasToTempFilePath({
              x: 0,
              y: 0,
              width: canvas.width,
              height: canvas.height,
              canvas,

              complete(res) {
                if (res.errMsg === 'canvasToTempFilePath:ok') {
                  wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,

                    success(res) {
                      wx.showToast({
                        title: '图片保存成功',
                        icon: 'none'
                      });
                    }

                  });
                }
              }

            });
          }
        }

      });
    }

  },

  onLoad() {
    console.log('app is ready');
  },

  onShareAppMessage() {}

});

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

// removed by extractor

/***/ }),

/***/ 435:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

// removed by extractor

/***/ })

},[[430,1]]]);
//# sourceMappingURL=index.js.map